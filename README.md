# NEXTMED

## Healthcare Management Platform

NEXTMED is a comprehensive healthcare management platform that connects patients with doctors, enabling seamless appointment booking, AI-powered doctor suggestions, video consultations, and complete health record management.

## Overview

NEXTMED is a full-stack healthcare platform designed to modernize the way patients interact with healthcare providers. The platform offers AI-powered doctor matching, secure appointment booking, prescription management, and integrated payment processing. Built with Next.js 16 and TypeScript, NEXTMED provides a robust, scalable solution for healthcare management.

## Features

### Core Features

- **AI-Powered Doctor Suggestions**: Get personalized doctor recommendations based on symptoms using advanced AI algorithms
- **Appointment Booking**: Book chamber appointments with doctors easily through an intuitive interface
- **Video Consultancy**: Consult with doctors through secure video calls
- **Prescription Management**: Digital prescription creation, storage, and access
- **Health Records**: Comprehensive health record management system
- **Payment Integration**: Secure payment processing using Stripe
- **Multi-Role Dashboard**: Separate dashboards for Patients, Doctors, and Admins
- **Reviews & Ratings**: Patient feedback and rating system for doctors
- **Health Plans**: Subscription-based health plans (Basic, Family, Premium)
- **Specialty Management**: Browse doctors by medical specialties
- **Customer Service**: 24/7 customer support

### Upcoming Features

- Online Medicine Store
- Diagnostic Test Booking
- NGO Services
- Real-time Notifications (WebSocket)
- In-app Chat System
- Advanced Caching (Redis)

## Admin Features

The Admin dashboard provides comprehensive system management capabilities:

### Dashboard & Analytics
- **Dashboard Overview**: View system-wide statistics including:
  - Total appointments count
  - Total patients count
  - Total doctors count
  - Total admins count
  - Total payments count
  - Total revenue
- **Visual Analytics**: 
  - Appointment bar charts
  - Appointment status pie charts
  - Revenue tracking

### User Management
- **Doctors Management**: 
  - Create, view, update, and delete doctor profiles
  - Manage doctor qualifications and specialties
  - View doctor schedules and appointments
- **Patients Management**: 
  - View all registered patients
  - Search and filter patients
  - Access patient appointment history
- **Admins Management**: 
  - Create new admin accounts
  - Manage admin permissions
  - View admin activity

### Appointment Management
- **View All Appointments**: Access complete appointment list across the platform
- **Filter Appointments**: Filter by status (pending, confirmed, completed, cancelled)
- **Appointment Details**: View detailed appointment information
- **Status Management**: Update appointment statuses

### Schedule Management
- **Create Schedules**: Create available time slots for doctors
- **Manage Schedules**: Edit and delete schedules
- **Schedule Overview**: View all schedules across the platform

### Specialty Management
- **Create Specialties**: Add new medical specialties
- **Manage Specialties**: Update and delete existing specialties
- **Specialty List**: View all available medical specialties

## Doctor Features

The Doctor dashboard enables healthcare providers to manage their practice efficiently:

### Dashboard & Analytics
- **Dashboard Overview**: View practice statistics including:
  - Total appointments count
  - Total patients served
  - Total reviews received
  - Total revenue earned
- **Appointment Status Chart**: Visual representation of appointment status distribution

### Appointment Management
- **View Appointments**: See all appointments assigned to the doctor
- **Appointment Details**: Access detailed information about each appointment
- **Status Updates**: Update appointment status (pending, confirmed, completed, cancelled)
- **Patient Information**: View patient details for each appointment

### Schedule Management
- **My Schedules**: View all available time slots
- **Create Schedules**: Add new available time slots
- **Edit Schedules**: Modify existing schedules
- **Schedule Availability**: Manage when patients can book appointments

### Prescription Management
- **Create Prescriptions**: Generate digital prescriptions for patients
- **View Prescriptions**: Access all prescriptions created
- **Prescription History**: View prescription history for patients
- **Prescription Details**: Include medications, dosages, and instructions

## Patient Features

The Patient dashboard provides a comprehensive healthcare management experience:

### Dashboard & Analytics
- **Dashboard Overview**: View personal health statistics including:
  - Total appointments count
  - Total prescriptions received
  - Total reviews given
- **Appointment Status Chart**: Visual overview of appointment statuses

### Appointment Management
- **Book Appointments**: 
  - Browse available doctors
  - Select doctor and time slot
  - Book appointments with payment integration
- **My Appointments**: 
  - View all scheduled appointments
  - View appointment details
  - Track appointment status
  - Cancel appointments (if allowed)
- **Appointment History**: Access complete appointment history

### Prescription Management
- **My Prescriptions**: View all prescriptions received from doctors
- **Prescription Details**: Access detailed prescription information including:
  - Medications prescribed
  - Dosage instructions
  - Doctor information
  - Prescription date

### Health Records
- **Health Records**: View and manage medical history (Coming Soon)
- **Medical Reports**: Store lab reports and imaging results (Planned)
- **Vital Signs**: Track blood pressure, heart rate, temperature (Planned)
- **Health Trends**: Visualize health data with charts (Planned)

### Public Features
- **Find Doctors**: Browse doctors by specialty
- **AI Doctor Suggestions**: Get AI-powered doctor recommendations based on symptoms
- **Doctor Profiles**: View detailed doctor profiles with ratings and reviews
- **Health Plans**: Browse and subscribe to health plans
- **Reviews**: Leave reviews and ratings for doctors

## Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: Radix UI + Shadcn UI
- **Styling**: Tailwind CSS 4
- **State Management**: React Server Actions + React Hooks
- **Form Validation**: Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **Authentication**: JWT with refresh tokens

### Backend Integration

- RESTful API integration
- Server-side data fetching
- Cookie-based authentication
- Token refresh mechanism

## API Collections

The project includes a Postman collection for API testing:

**Location**: `External_Resources/HealthCare.postman_collection.json`

**Postman Collection Link**: [HealthCare API Collection](https://warped-crater-802760.postman.co/workspace/Next_Level_Instructor~97293662-b199-4ba3-89c7-edbe0627707c/collection/31641809-05a3e54e-5882-40f8-bd28-486752398450?action=share&source=collection_link&creator=31641809)

### Main API Endpoints

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - Patient registration
- `POST /auth/refresh-token` - Refresh access token
- `GET /auth/me` - Get current user info
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password

#### User Management
- `POST /user/create-doctor` - Create doctor account (Admin)
- `POST /user/create-admin` - Create admin account (Super Admin)
- `GET /user/doctors` - Get all doctors
- `GET /user/patients` - Get all patients
- `GET /user/admins` - Get all admins

#### Appointments
- `GET /appointment` - Get all appointments (with filters)
- `POST /appointment` - Create new appointment
- `GET /appointment/:id` - Get appointment by ID
- `PUT /appointment/:id` - Update appointment
- `DELETE /appointment/:id` - Cancel appointment

#### Doctors
- `GET /doctor` - Get all doctors (with filters)
- `GET /doctor/:id` - Get doctor by ID
- `POST /doctor/suggestion` - AI-powered doctor suggestions
- `PUT /doctor/:id` - Update doctor profile

#### Schedules
- `GET /schedule` - Get all schedules
- `POST /schedule` - Create schedule
- `GET /schedule/:id` - Get schedule by ID
- `PUT /schedule/:id` - Update schedule
- `DELETE /schedule/:id` - Delete schedule

#### Prescriptions
- `GET /prescription` - Get all prescriptions
- `POST /prescription` - Create prescription
- `GET /prescription/:id` - Get prescription by ID

#### Specialties
- `GET /specialty` - Get all specialties
- `POST /specialty` - Create specialty
- `PUT /specialty/:id` - Update specialty
- `DELETE /specialty/:id` - Delete specialty

#### Reviews
- `GET /review` - Get all reviews
- `POST /review` - Create review
- `GET /review/:id` - Get review by ID

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Backend API URL
NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api/v1

# JWT Secret (for token verification)
JWT_SECRET=your_jwt_secret_key_here

# Node Environment
NODE_ENV=development
```

### Environment Variables Explanation

- `NEXT_PUBLIC_BASE_API_URL`: Base URL for the backend API server
- `JWT_SECRET`: Secret key for JWT token verification (must match backend)
- `NODE_ENV`: Environment mode (development/production)

**Note**: For backend server setup, refer to the [Backend Repository .env.example](https://github.com/Apollo-Level2-Web-Dev/Health-Care-Server2.0/blob/main/.env.example)

## How to Clone and Run This Project Locally

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager
- Backend server running (see backend repository for setup)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd repo-folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (commonLayout)/    # Public pages (home, consultation, etc.)
│   │   ├── (auth)/        # Authentication pages
│   │   ├── consultation/  # Doctor search and booking
│   │   ├── health-plans/  # Health plan subscriptions
│   │   ├── medicine/      # Medicine store (coming soon)
│   │   └── diagnostics/  # Diagnostic tests (coming soon)
│   └── (dashboardLayout)/  # Protected dashboard pages
│       ├── admin/         # Admin dashboard
│       ├── doctor/        # Doctor dashboard
│       └── (patientDashboardLayout)/  # Patient dashboard
├── components/            # React components
│   ├── modules/          # Feature-specific components
│   │   ├── Admin/        # Admin-specific components
│   │   ├── Doctor/       # Doctor-specific components
│   │   ├── Patient/      # Patient-specific components
│   │   └── Home/         # Home page components
│   ├── shared/           # Reusable components
│   └── ui/               # Shadcn UI components
├── services/             # API service functions
│   ├── admin/           # Admin API services
│   ├── doctor/          # Doctor API services
│   ├── patient/         # Patient API services
│   └── auth/            # Authentication services
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── zod/                  # Zod validation schemas
```

## Security

- JWT-based authentication with refresh tokens
- Secure cookie handling
- Input validation using Zod schemas
- Server-side data fetching
- Protected routes with role-based access control
- Password reset functionality with secure tokens

## Performance

- Server-side rendering (SSR)
- Static page generation where applicable
- Image optimization with Next.js Image component
- Efficient data caching strategies
- Incremental Static Regeneration (ISR) for doctor listings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

1. **API Connection Error**: 
   - Ensure backend server is running
   - Check `NEXT_PUBLIC_BASE_API_URL` is correct in `.env.local`

2. **Authentication Issues**: 
   - Verify `JWT_SECRET` matches backend configuration
   - Clear browser cookies and try again

3. **Build Errors**: 
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

4. **Port Already in Use**: 
   - Change port: `npm run dev -- -p 3001`

## Roadmap

- [ ] WebSocket real-time notifications
- [ ] WebRTC video consultation
- [ ] In-app chat system
- [ ] Redis caching implementation
- [ ] Image optimization
- [ ] Multi-factor authentication (MFA)
- [ ] Comprehensive testing suite
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] SMS notifications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📫 Author

**Hamza Aryan Sapnil**
- 📍 Bangladesh
- 🌐 [LinkedIn](https://www.linkedin.com/in/hamza-aryan-sapnil)
- 💻 Full Stack Developer

## 📄 License

This project is licensed for educational purposes under MIT License.

---

**Note**: This project is part of an educational initiative. For production use, ensure proper security audits and compliance with healthcare regulations (HIPAA, GDPR, etc.).
