# Deployment Guide

This guide covers multiple deployment options for the Personality Profiler application.

## Prerequisites

- Node.js 18 or higher
- PostgreSQL database (for production)
- Git repository

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personality-profiler
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Start development server:
```bash
npm run dev
```

## Production Deployment Options

### 1. Vercel (Recommended for serverless)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Set up environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NODE_ENV=production`

4. Deploy:
```bash
vercel --prod
```

### 2. Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Set up environment variables in Netlify dashboard:
   - `DATABASE_URL`
   - `NODE_ENV=production`

4. Deploy:
```bash
netlify deploy --prod
```

### 3. Railway

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize project:
```bash
railway init
```

4. Set environment variables:
```bash
railway variables set DATABASE_URL=<your-database-url>
railway variables set NODE_ENV=production
```

5. Deploy:
```bash
railway up
```

### 4. Heroku

1. Install Heroku CLI and login:
```bash
heroku login
```

2. Create Heroku app:
```bash
heroku create your-app-name
```

3. Add PostgreSQL addon:
```bash
heroku addons:create heroku-postgresql:mini
```

4. Set environment variables:
```bash
heroku config:set NODE_ENV=production
```

5. Deploy:
```bash
git push heroku main
```

### 5. Docker Deployment

1. Build Docker image:
```bash
docker build -t personality-profiler .
```

2. Run with Docker Compose:
```bash
docker-compose up -d
```

3. Or run container directly:
```bash
docker run -p 5000:5000 -e DATABASE_URL=<your-db-url> personality-profiler
```

### 6. VPS/Cloud Server

1. Set up server with Node.js 18+
2. Clone repository on server
3. Install dependencies:
```bash
npm ci --production
```

4. Build application:
```bash
npm run build
```

5. Set up environment variables in `.env`

6. Use PM2 for process management:
```bash
npm i -g pm2
pm2 start npm --name "personality-profiler" -- start
pm2 startup
pm2 save
```

## Database Setup

### PostgreSQL Setup

1. Create database:
```sql
CREATE DATABASE personality_profiler;
```

2. Create user:
```sql
CREATE USER app_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE personality_profiler TO app_user;
```

3. Run migrations:
```bash
npm run db:push
```

### Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Set to 'production' for production
- `PORT` - Server port (default: 5000)

## Custom Domain Setup

### Vercel
1. Add domain in Vercel dashboard
2. Configure DNS records as shown

### Netlify
1. Add domain in Netlify dashboard
2. Configure DNS records as shown

### Cloudflare (for any deployment)
1. Add domain to Cloudflare
2. Configure DNS to point to your deployment
3. Enable SSL/TLS

## SSL/HTTPS

Most platforms (Vercel, Netlify, Railway, Heroku) provide SSL automatically.

For VPS deployments, use Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Monitoring and Logging

### Production Monitoring
- Set up error tracking (Sentry, Bugsnag)
- Monitor performance (New Relic, DataDog)
- Set up uptime monitoring (Pingdom, UptimeRobot)

### Logging
- Use structured logging in production
- Set up log aggregation (ELK stack, Splunk)
- Monitor error rates and performance metrics

## Troubleshooting

### Common Issues

1. **Database connection errors**:
   - Check DATABASE_URL format
   - Ensure database is accessible
   - Check firewall settings

2. **Build failures**:
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for missing environment variables

3. **Runtime errors**:
   - Check server logs
   - Verify all environment variables are set
   - Check database migrations

### Debug Commands

```bash
# Check application logs
npm run logs

# Test database connection
npm run db:check

# Run health check
curl https://yourapp.com/health
```

## Backup and Recovery

### Database Backup
```bash
pg_dump $DATABASE_URL > backup.sql
```

### Restore Database
```bash
psql $DATABASE_URL < backup.sql
```

## Security Considerations

1. Use environment variables for secrets
2. Enable HTTPS in production
3. Set up proper CORS policies
4. Use secure session configurations
5. Regular security updates
6. Monitor for vulnerabilities

## Performance Optimization

1. Enable gzip compression
2. Use CDN for static assets
3. Implement caching strategies
4. Monitor database performance
5. Use connection pooling
6. Optimize bundle size