// Vercel Serverless Function — proxies form submission to Feishu Bitable
// Keeps app_secret server-side and avoids CORS issues

const FEISHU_APP_ID = process.env.FEISHU_APP_ID || 'cli_a92bdde2543a9bce';
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET || 'db4GpQjt1eTOH8zythLfadooKqOuHFp7';
const BITABLE_APP_TOKEN = process.env.FEISHU_BITABLE_APP_TOKEN || 'XOVYbguNXaQPwsst7jQcyHr5nzy';
const BITABLE_TABLE_ID = process.env.FEISHU_BITABLE_TABLE_ID || 'tblybvFx5LSxXkZA';
const NOTIFY_OPEN_ID = 'ou_fe7b2ad06b228d5007f1d82cb75ee176';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, contact, service, budget, description } = req.body;

    // Validate required fields
    if (!name || !contact) {
      return res.status(400).json({ error: '姓名和联系方式为必填项' });
    }

    // Step 1: Get Tenant Access Token
    // Use larksuite.com (international endpoint) — Vercel functions run in US,
    // open.feishu.cn is China-only and unreachable from US servers
    const tokenRes = await fetch(
      'https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_id: FEISHU_APP_ID,
          app_secret: FEISHU_APP_SECRET,
        }),
      }
    );
    const tokenData = await tokenRes.json();

    if (!tokenData.tenant_access_token) {
      console.error('Failed to get TAT:', tokenData);
      return res.status(500).json({
        error: '服务暂时不可用',
        debug: tokenData,
        env_check: {
          has_app_id: !!process.env.FEISHU_APP_ID,
          has_app_secret: !!process.env.FEISHU_APP_SECRET,
          app_id_prefix: (process.env.FEISHU_APP_ID || FEISHU_APP_ID).substring(0, 8),
        },
      });
    }

    // Step 2: Create record in Bitable
    const fields = {
      '姓名': name,
      '联系方式': contact,
    };
    if (service) fields['服务类型'] = service;
    if (budget) fields['预算'] = budget;
    if (description) fields['项目描述'] = description;

    const recordRes = await fetch(
      `https://open.larksuite.com/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${BITABLE_TABLE_ID}/records`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.tenant_access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    );
    const recordData = await recordRes.json();

    if (recordData.code !== 0) {
      console.error('Bitable error:', recordData);
      return res.status(500).json({ error: '提交失败，请稍后重试' });
    }

    // Step 3: Send Feishu notification to owner (fire-and-forget, don't block response)
    sendNotification(tokenData.tenant_access_token, { name, contact, service, budget, description }).catch(
      (err) => console.error('Notification error (non-blocking):', err)
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Consult API error:', err);
    return res.status(500).json({ error: '服务异常，请直接添加微信联系' });
  }
}

async function sendNotification(token, data) {
  const lines = [
    '📩 ssxl.me 新咨询预约',
    '',
    `👤 ${data.name}`,
    `📱 ${data.contact}`,
    data.service ? `📋 ${data.service}` : '',
    data.budget ? `💰 ${data.budget}` : '',
    data.description ? `📝 ${data.description}` : '',
    '',
    '👉 https://mingjian.feishu.cn/base/XOVYbguNXaQPwsst7jQcyHr5nzy',
  ].filter(Boolean).join('\n');

  await fetch('https://open.larksuite.com/open-apis/im/v1/messages?receive_id_type=open_id', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      receive_id: NOTIFY_OPEN_ID,
      msg_type: 'text',
      content: JSON.stringify({ text: lines }),
    }),
  });
}
