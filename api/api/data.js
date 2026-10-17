// Vercel Serverless Function - 数据读写 API
const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;
const ADMIN_PWD = 'rainy2026';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
        return res.status(200).end();
  }

  if (req.method === 'GET') {
        try {
                const response = await fetch(`${KV_REST_API_URL}/get/site_data`, {
                          headers: { 'Authorization': `Bearer ${KV_REST_API_TOKEN}` },
                });
                const result = await response.json();
                if (result.result) {
                          return res.status(200).json(JSON.parse(result.result));
                }
                return res.status(200).json({});
        } catch (error) {
                return res.status(500).json({ error: 'Failed to load' });
        }
  }

  if (req.method === 'POST') {
        try {
                const { pwd, data } = req.body;
                if (pwd !== ADMIN_PWD) {
                          return res.status(401).json({ error: 'Unauthorized' });
                }
                const response = await fetch(`${KV_REST_API_URL}/set/site_data`, {
                          method: 'POST',
                          headers: {
                                      'Authorization': `Bearer ${KV_REST_API_TOKEN}`,
                                      'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(JSON.stringify(data)),
                });
                const result = await response.json();
                if (result.success) {
                          return res.status(200).json({ success: true });
                }
                return res.status(500).json({ error: 'Failed to save' });
        } catch (error) {
                return res.status(500).json({ error: 'Failed to save' });
        }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
