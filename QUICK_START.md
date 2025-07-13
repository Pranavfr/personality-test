# Quick Start Guide

Get the Personality Profiler up and running in minutes!

## 🚀 One-Command Setup

```bash
# Clone and setup
git clone <your-repo-url>
cd personality-profiler
npm install
cp .env.example .env
npm run dev
```

That's it! Visit `http://localhost:5000` to see your personality profiler in action.

## 📋 What You Need

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **PostgreSQL** (optional for development) - [Download here](https://postgresql.org/)

## 🔧 Environment Setup

Create a `.env` file:
```bash
# For development, you can use in-memory storage
NODE_ENV=development
PORT=5000

# For production, add your database
DATABASE_URL=postgresql://username:password@localhost:5432/personality_db
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database commands
npm run db:push      # Apply schema changes
npm run db:studio    # Open database GUI
```

## 📁 Project Structure

```
personality-profiler/
├── client/src/           # React frontend
│   ├── components/       # UI components
│   ├── pages/           # App pages
│   ├── data/            # Personality data
│   └── hooks/           # Custom hooks
├── server/              # Express backend
├── shared/              # Shared types
└── package.json         # Dependencies
```

## 🎯 Key Features

- **54-Question Assessment** - Comprehensive personality evaluation
- **16 Personality Types** - Complete Myers-Briggs coverage
- **Detailed Analysis** - Strengths, weaknesses, career advice
- **Progress Tracking** - Save and resume assessments
- **Mobile Responsive** - Works on all devices

## 🚀 Deploy in 60 Seconds

### Vercel (Recommended)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

### Railway
```bash
npm i -g @railway/cli
railway login
railway up
```

## 🔒 Environment Variables

For production, set these variables:

```bash
NODE_ENV=production
DATABASE_URL=your_postgresql_url
PORT=5000
SESSION_SECRET=your_secret_key
```

## 📱 VS Code Setup

1. Install recommended extensions (shown in VS Code)
2. Use `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
3. Use built-in debugger with F5

## 🐳 Docker Quick Start

```bash
# Build and run with Docker
docker build -t personality-profiler .
docker run -p 5000:5000 personality-profiler

# Or use docker-compose
docker-compose up
```

## 🔍 Troubleshooting

**Common Issues:**

1. **Port 5000 in use**: Change `PORT=5001` in `.env`
2. **Database errors**: Check your `DATABASE_URL` format
3. **Module not found**: Run `npm install` again
4. **Build fails**: Try `rm -rf node_modules && npm install`

**Get Help:**
- Check the [full documentation](./README.md)
- Look at [deployment guide](./DEPLOYMENT.md)
- Open an issue on GitHub

## 🎉 You're Ready!

Your personality profiler is now running! Here's what to do next:

1. **Test the quiz** - Take the full assessment
2. **Explore results** - Check out the detailed analysis
3. **Customize** - Modify questions or add new personality types
4. **Deploy** - Share your creation with the world

Happy coding! 🚀