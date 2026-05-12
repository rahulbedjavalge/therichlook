<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# The Rich Look Saloon - Project Setup

## Project Overview
Full-stack salon management website with appointment booking, user authentication, admin dashboard, and video scroll effects. Built with React/Next.js (frontend) and Express.js (backend).

## Architecture
- **Frontend**: Next.js 14+ with TypeScript, Tailwind CSS, responsive design
- **Backend**: Express.js with Node.js, JWT authentication, RESTful APIs
- **Database**: User's choice (MongoDB or PostgreSQL) - connection string needed
- **Styling**: Tailwind CSS for rapid prototyping and consistency

## Project Structure
```
frontend/          - React/Next.js web application
  ├── app/         - Next.js App Router (pages)
  ├── components/  - Reusable React components
  ├── services/    - API client and business logic
  ├── context/     - React Context (auth, global state)
  ├── hooks/       - Custom React hooks
  ├── lib/         - Utilities and helpers
  └── public/      - Static assets

backend/           - Express.js REST API
  ├── routes/      - API endpoints (auth, appointments, admin, offers)
  ├── models/      - Database schemas
  ├── middleware/  - JWT verification, error handling
  ├── controllers/ - Business logic
  ├── config/      - Database and environment config
  └── server.js    - Express app entry point
```

## Core Features (MVP)
- Landing page with video scroll effects
- User authentication (signup/login with JWT)
- Appointment booking with calendar and slot availability
- User dashboard to view/manage appointments
- Admin dashboard to manage appointments, offers, and salon slots
- Mobile-responsive design
- Role-based access control (user vs admin)

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)
- Database (MongoDB Atlas or PostgreSQL) - get connection string ready

### Frontend Setup
```bash
cd frontend
npm install
cp .env.local.example .env.local  # Update with your API URL
npm run dev
```
Open http://localhost:3000

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Update with database URL, JWT secret, etc.
npm start
```
API runs on http://localhost:5000

## Environment Variables

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL` - Backend API URL (e.g., http://localhost:5000)

### Backend (.env)
- `DATABASE_URL` - MongoDB or PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens (generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- `PORT` - API port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Development Workflow

1. **Start both services**:
   - Terminal 1: `cd frontend && npm run dev`
   - Terminal 2: `cd backend && npm start`

2. **Frontend**: Make changes in `frontend/app/` or `frontend/components/`
3. **Backend**: Make changes in `backend/routes/` or `backend/controllers/`
4. **Test**: Use browser DevTools + Postman/Thunder Client for API testing

## Verification Checklist

- [ ] Frontend starts on localhost:3000 without errors
- [ ] Backend starts on localhost:5000 without errors
- [ ] Database connection successful
- [ ] Landing page displays with video scroll effect
- [ ] Signup/login flow works end-to-end
- [ ] Appointment booking flow functional
- [ ] Admin dashboard accessible (with admin JWT token)
- [ ] Mobile responsive (test with DevTools)
- [ ] No console errors in browser or terminal

## Deployment
- **Frontend**: Deploy to Vercel (`vercel deploy from frontend/`)
- **Backend**: Deploy to Railway, Heroku, or similar (`railway up from backend/`)

## Support & Documentation
- Next.js: https://nextjs.org/docs
- Express: https://expressjs.com/
- Tailwind: https://tailwindcss.com/
- JWT Auth: https://jwt.io/
