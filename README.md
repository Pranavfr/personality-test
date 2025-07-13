# Personality Profiler

A comprehensive personality test application built with React, TypeScript, and Express.js. This application provides detailed Myers-Briggs Type Indicator (MBTI) assessments with the same level of detail as premium personality testing sites.

## Features

- **Complete 54-Question Assessment**: Comprehensive personality evaluation across 4 key dimensions
- **16 Personality Types**: Full coverage of all Myers-Briggs personality types
- **Detailed Results**: In-depth analysis including strengths, weaknesses, career paths, and growth activities
- **Interactive UI**: Modern, responsive design with smooth animations
- **Progress Tracking**: Real-time progress indicators and session persistence
- **Comprehensive Insights**: Detailed breakdowns of personality traits with percentages
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui component library
- Wouter for routing
- TanStack Query for state management
- Framer Motion for animations

### Backend
- Node.js with Express.js
- TypeScript
- PostgreSQL with Drizzle ORM
- Session management
- RESTful API design

## Quick Start

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database (optional for development)

### Installation

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
```

4. Configure your database URL in `.env`:
```
DATABASE_URL=your_postgresql_connection_string
```

5. Run database migrations:
```bash
npm run db:push
```

6. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
personality-profiler/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── data/           # Static data and types
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database storage layer
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── package.json           # Project dependencies
```

## Deployment

### Environment Variables
Create a `.env` file with:
```
NODE_ENV=production
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

### Build and Deploy
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Docker Deployment
```bash
# Build Docker image
docker build -t personality-profiler .

# Run container
docker run -p 5000:5000 -e DATABASE_URL=your_db_url personality-profiler
```

## Database Schema

The application uses PostgreSQL with Drizzle ORM. The main tables include:
- `users` - User account information
- Additional tables for storing quiz results (can be extended)

## API Endpoints

- `GET /` - Serves the React application
- `POST /api/auth/*` - Authentication endpoints
- `GET /api/user/*` - User management endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact the maintainers.