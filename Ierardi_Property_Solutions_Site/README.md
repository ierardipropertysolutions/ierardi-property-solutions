
# Ierardi Property Solutions Website

## 🚀 Deployment Instructions (Vercel)

1. Create a free Vercel account at https://vercel.com
2. Create a new project and import this folder.
3. Add environment variable:
   - RESEND_API_KEY = your_resend_api_key
4. Deploy.

## 📬 Serverless Email
Backend located in /api/sendEmail.js  
Uses Resend for reliable delivery.

## 🌐 DNS Setup
If you have a custom domain:
1. Go to Vercel → Settings → Domains.
2. Add your domain.
3. Update nameservers at your registrar to Vercel's.
4. SSL auto-configures.
