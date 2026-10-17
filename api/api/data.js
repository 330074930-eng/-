// Vercel Serverless Function - 数据读写 API
const NPOINT_URL = 'https://api.npoint.io/4cad3fb3e6a9592c1a07';
const ADMIN_PWD = 'rainy2026';

export default async function handler(req, res) {
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
          return res.status(200).end();
  }

  // GET: 获取数据
  if (req.method === 'GET') {
          try {
                    const response = await fetch(NPOINT_URL);
                    const data = await response.json();
                    return res.status(200).json(data || {});
          } catch (error) {
                    return res.status(200).json({});
          }
  }

  // POST: 保存数据（需要管理员密码）
  if (req.method === 'POST') {
          try {
                    const { pwd, data } = req.body;
                    if (pwd !== ADMIN_PWD) {
                                return res.status(401).json({ error: 'Unauthorized' });
                    }

            const response = await fetch(NPOINT_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
            });

            if (response.ok) {
                        return res.status(200).json({ success: true });
            } else {
                        return res.status(500).json({ error: 'Failed to save' });
            }
          } catch (error) {
                    return res.status(500).json({ error: 'Failed to save' });
          }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
