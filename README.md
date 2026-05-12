# The Rich Look Saloon - Website

A modern, full-stack salon management platform with appointment booking, user authentication, admin dashboard, and beautiful UI with video scroll effects.

## 🎯 Feature Overview

### For Users
- 🎬 **Beautiful Landing Page** - Hero with video scroll effects, service showcase
- 👤 **User Authentication** - Signup, login, profile management with JWT
- 📅 **Appointment Booking** - Multi-step booking flow with real-time slot availability
- 📱 **User Dashboard** - View, reschedule, and cancel appointments
- 📱 **Mobile-Responsive** - Works seamlessly on all devices

### For Admin
- 📊 **Dashboard Overview** - Total bookings, upcoming appointments, metrics
- 📋 **Appointment Management** - View all bookings, reschedule, approve/cancel
- 🎁 **Offers Management** - Create and manage promotions
- ⏰ **Slot Management** - Define salon hours, capacity, break times, staff availability
- 👥 **User Management** - View customer profiles and booking history
- 🔒 **Role-Based Access** - Secure admin-only endpoints

## 🛠 Tech Stack

### Frontend
- **React 18** with Next.js 14+ (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for responsive design
- **Axios** for API calls
- **React Context** for global state management

### Backend
- **Node.js** with Express.js
- **JWT** for authentication
- **Bcrypt** for password hashing
- **RESTful APIs** (expandable to GraphQL)
- **Environment-based configuration**

### Database
- MongoDB or PostgreSQL (user's choice)
- Scalable schema design

## 📁 Project Structure

```
therichlook/
├── frontend/              # Next.js web application
│   ├── app/              # Pages (App Router)
│   │   ├── page.tsx      # Landing page
│   │   ├── login/        # Login page
│   │   ├── signup/       # Signup page
│   │   ├── booking/      # Booking flow
│   │   ├── dashboard/    # User dashboard
│   │   └── admin/        # Admin pages
│   ├── components/       # Reusable components
│   ├── services/         # API integration
│   ├── context/          # React Context (auth, theme)
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilities
├── backend/               # Express.js API
│   ├── routes/           # API endpoints
│   ├── models/           # Database schemas
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth, error handling
│   ├── config/           # Environment config
│   └── server.js         # Entry point
└── docs/                 # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Database (MongoDB Atlas or PostgreSQL)

### Installation

1. **Clone the repository**
   ```bash
   cd therichlook
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.local.example .env.local
   # Update NEXT_PUBLIC_API_URL in .env.local
   npm run dev
   ```
   Opens on `http://localhost:3000`

3. **Backend Setup** (in new terminal)
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update DATABASE_URL and JWT_SECRET in .env
   npm start
   ```
   API on `http://localhost:5000`

## 📖 API Documentation

### Auth Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - Logout user

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/appointments` - Get user's appointments

### Appointment Endpoints
- `GET /api/appointments/slots` - Get available slots
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/:id` - Get appointment details
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Admin Endpoints (requires admin role)
- `GET /api/admin/appointments` - View all appointments
- `GET /api/admin/dashboard` - Dashboard metrics
- `POST /api/admin/offers` - Create offer
- `GET /api/admin/offers` - List offers
- `PUT /api/admin/offers/:id` - Update offer
- `DELETE /api/admin/offers/:id` - Delete offer
- `POST /api/admin/slots` - Configure salon slots
- `GET /api/admin/slots` - View slot configuration

## 🎨 Design & Branding

- **Color Scheme**: Clean, modern aesthetic with brand-specific colors
- **Typography**: Professional fonts optimized for readability
- **Video Effects**: Hero section with parallax scroll effects
- **Icons**: Heroicons and lucide-react for UI elements
- **Animations**: Smooth transitions and micro-interactions

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT-based stateless authentication
- ✅ Protected API endpoints with role-based access
- ✅ Environment variable management
- ✅ CORS configuration
- ✅ Input validation and sanitization

## 📱 Responsive Design

- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (600px - 1024px)
- Mobile (320px - 600px)

Tested on:
- iOS Safari 14+
- Android Chrome
- Desktop Chrome, Firefox, Safari

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run test              # Run unit tests
npm run test:e2e          # Run E2E tests
npm run lint              # Run ESLint
```

### Backend
```bash
cd backend
npm run test              # Run unit tests
npm run test:integration  # Run integration tests
```

## 📈 Performance

- **Lighthouse Score**: Target > 80
- **API Response Time**: < 500ms
- **Bundle Size**: Optimized with next/dynamic
- **Images**: Optimized with next/image and WebP format
- **Caching**: Browser and server-side caching strategies

## 📚 Phase 2 Roadmap (Future Features)

- 🔴 3D animations (Three.js)
- 📱 Native mobile apps (React Native)
- 💳 Payment integration (Stripe/Razorpay)
- 📧 Email & SMS notifications
- ⭐ Customer reviews and ratings
- 🎟️ Loyalty points and referral system
- 📊 Advanced analytics dashboard
- 🎥 Video tutorials and galleries

## 🔧 Configuration

### Environment Variables

**Frontend** (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend** (`.env`)
```
DATABASE_URL=mongodb://...:... or postgresql://...
JWT_SECRET=your-secret-key (min 32 chars)
PORT=5000
NODE_ENV=development
ADMIN_EMAIL=admin@therichhlook.com
```

## 📞 Support

For questions or issues:
1. Check the docs in `/documentation`
2. Review API endpoint details in backend routes
3. Check component props in component comments

## 📄 License

Proprietary - The Rich Look Saloon

---

**Happy coding! 🚀**
