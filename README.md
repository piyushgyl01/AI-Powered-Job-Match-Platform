# AI-Powered Job Match Platform

A modern full-stack application that leverages AI to intelligently match users with relevant job opportunities based on their skills, experience, and preferences.

## 🚀 Live Demo

- **Frontend**: [https://ai-powered-job-match-platform-client.vercel.app/](https://ai-powered-job-match-platform-client.vercel.app/)
- **Backend API**: [https://ai-powered-job-match-platform-chi.vercel.app/](https://ai-powered-job-match-platform-chi.vercel.app/)

## ✨ Features

### 🔐 Authentication & Profile Management
- Secure user registration and login with JWT tokens
- Comprehensive user profile creation with skills and preferences
- Protected routes and secure API endpoints

### 💼 Job Management
- Browse and search through job listings
- Advanced filtering by job type, location, and skills
- Detailed job descriptions with skill requirements
- Responsive job cards with hover effects

### 🤖 AI-Powered Recommendations
- Intelligent job matching using Cohere's advanced AI models
- Personalized match scores (0-100%) with detailed explanations
- Multiple fallback algorithms ensure recommendations are always available
- Real-time analysis of user profiles against job requirements

### 📱 User Experience
- Fully responsive design that works seamlessly on all devices
- Modern UI with Bootstrap 5 components
- Intuitive navigation and smooth user interactions
- Real-time loading states and error handling

## 📋 Assignment Requirements Compliance

### **🔧 Tech Stack Requirements:**
- ✅ **React.js** frontend implementation
- ✅ **Node.js with Express** backend
- ❌ **Tailwind CSS** for styling (used Bootstrap instead for faster development)
- ✅ **Fully responsive, clean UI**
- ✅ **REST API** implementation
- ✅ **JWT authentication** system
- ✅ **MongoDB** database integration

### **🤖 AI Integration Requirement:**
- ✅ **AI API integration** endpoint (`/api/recommendations`)
- ✅ **User profile analysis** for job matching
- ✅ **Top 3 job suggestions** return system
- ✅ **Backend AI logic** implementation with Cohere API
- ✅ **Processed job matches** delivery to frontend

### **✅ Required Features:**

**1. Authentication System:**
- ✅ User registration functionality
- ✅ User login system
- ✅ Logout capability
- ✅ JWT token management
- ✅ Protected routes implementation

**2. User Profile Management:**
- ✅ Name field
- ✅ Location field
- ✅ Years of experience field
- ✅ Skills multi-select functionality
- ✅ Preferred job type selection (remote/onsite/hybrid/any)
- ✅ MongoDB profile storage

**3. Job Listings Page:**
- ✅ Job listings display with title, company, location
- ✅ Skills requirement display
- ✅ Backend API job fetching
- ✅ Individual job detail pages

**4. AI Job Recommendation Feature:**
- ✅ "Find My Matches" button implementation
- ✅ User profile to backend transmission
- ✅ AI API integration for job matching
- ✅ Top 3 job matches suggestion system
- ✅ Clean card layout for suggestions
- ✅ Match score percentage display
- ✅ Match reasons explanation

### **🧪 Bonus Features Implemented:**
- ✅ Job search & filter options
- ✅ Job application tracking
- ✅ User dashboard with recommendations
- ✅ Advanced UI components and interactions
- ❌ Admin panel (not implemented)
- ❌ TypeScript (used JavaScript for faster development)
- ❌ Unit/integration testing (focused on core functionality)

### **📁 Submission Requirements:**
- ✅ **GitHub repository**: Public repository with clean commit history
- ✅ **Live frontend**: Deployed on Vercel
- ✅ **Live backend API**: Deployed on Vercel
- ✅ **README.md** with:
  - ✅ Setup instructions
  - ✅ AI usage and prompt design explanation
  - ✅ API documentation
  - ✅ Code architecture overview
  - ✅ Trade-offs and assumptions

**📝 Key Implementation Highlights:**
- **AI Integration**: Advanced prompt engineering with Cohere API for contextual job matching
- **Fallback System**: Three-tier recommendation system ensuring 100% uptime
- **User Experience**: Intuitive interface with real-time feedback and loading states
- **Security**: Comprehensive JWT implementation with protected routes
- **Scalability**: Modular architecture with clear separation of concerns

## 🛠 Tech Stack

### Frontend
- **React 19** - Latest version with modern features and improved performance
- **Vite** - Fast build tool with hot module replacement
- **React Router v7** - Client-side routing with the latest features
- **Bootstrap 5** - Responsive UI framework with custom styling
- **Axios** - HTTP client for API communication
- **React Bootstrap** - Bootstrap components for React

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5** - Modern web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure authentication with JSON Web Tokens
- **bcryptjs** - Password hashing and security
- **Cohere API** - Advanced AI language model for job matching

### Development & Deployment
- **Vercel** - Serverless deployment platform for both frontend and backend
- **ESLint** - Code linting and formatting
- **Nodemon** - Development server with auto-restart

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16 or higher
- **MongoDB** (local installation or MongoDB Atlas)
- **Cohere API Key** (free tier available at [cohere.ai](https://cohere.ai/))

### 1. Clone Repository
```bash
git clone https://github.com/piyushgyl01/ai-powered-job-match-platform.git
cd ai-powered-job-match-platform
```

### 2. Backend Setup
```bash
cd server
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=3002
MONGODB_URI=mongodb://localhost:27017/job-match-platform
JWT_SECRET=your_super_secure_jwt_secret_change_in_production
COHERE_API_KEY=your_cohere_api_key_here
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` with your configuration:
```env
VITE_API_URL=http://localhost:3002/api
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Seed Sample Data
The application will automatically seed job data when you first visit the jobs page, or you can manually seed using:
```bash
curl -X POST http://localhost:3002/api/jobs/seed
```

## 🔑 Getting Your Cohere API Key

1. Visit [Cohere's website](https://cohere.ai/)
2. Sign up for a free account
3. Navigate to your dashboard
4. Go to the API Keys section
5. Generate a new API key
6. Copy the key to your `.env` file

**Note**: The free tier provides sufficient quota for development and testing.

## 📡 API Documentation

### Base URLs
- **Development**: `http://localhost:3002/api`
- **Production**: `https://ai-powered-job-match-platform-chi.vercel.app/api`

### Authentication Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/auth/register` | Register new user | `{ email, password }` |
| `POST` | `/auth/login` | User login | `{ email, password }` |
| `GET` | `/auth/me` | Get current user | Headers: `x-auth-token` |

### Profile Endpoints

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| `GET` | `/profile/me` | Get user profile | `x-auth-token` |
| `POST` | `/profile` | Create/update profile | `x-auth-token` |
| `DELETE` | `/profile` | Delete profile | `x-auth-token` |

### Job Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/jobs` | Get all jobs |
| `GET` | `/jobs/:id` | Get job by ID |
| `POST` | `/jobs` | Create job (auth required) |
| `PUT` | `/jobs/:id` | Update job (auth required) |
| `DELETE` | `/jobs/:id` | Delete job (auth required) |
| `POST` | `/jobs/seed` | Seed sample jobs |

### AI Recommendation Endpoint

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| `GET` | `/recommendations` | Get AI job recommendations | `x-auth-token` |

## 🤖 AI Integration Deep Dive

### How the AI Matching Works

The recommendation system uses a sophisticated multi-step process:

1. **Profile Analysis**: Extracts user skills, experience level, location, and job preferences
2. **Job Database Processing**: Analyzes all available jobs and their requirements
3. **AI Prompt Engineering**: Constructs a detailed prompt for the Cohere API
4. **Intelligent Matching**: Uses Cohere's language model to understand context and relationships
5. **Scoring & Reasoning**: Generates match scores (0-100%) with human-readable explanations

### Prompt Engineering Strategy

```javascript
const prompt = `You are an AI job matcher. Find the top 3 job matches for this candidate.

Candidate Profile:
- Name: ${profile.name}
- Location: ${profile.location}
- Years of Experience: ${profile.yearsOfExperience}
- Skills: ${profile.skills.join(', ')}
- Preferred Job Type: ${profile.preferredJobType}

Available Jobs:
${JSON.stringify(jobsData)}

Return ONLY a JSON array with this exact format:
[
  {
    "id": "job_id",
    "title": "job_title", 
    "company": "company_name",
    "matchScore": 85,
    "matchReasons": ["specific reason 1", "specific reason 2", "specific reason 3"]
  }
]

Requirements:
- Match scores should be 0-100 based on skill alignment, experience fit, and preferences
- Provide 2-3 specific, actionable reasons for each match
- Focus on the most relevant opportunities for the candidate`;
```

### Robust Fallback System

The application implements three levels of matching:

1. **Primary**: Cohere AI analysis with contextual understanding
2. **Secondary**: Weighted algorithm matching skills and preferences
3. **Tertiary**: Simple skill overlap calculation

This ensures users always receive recommendations, even during API outages.

### AI Model Configuration

```javascript
const cohereConfig = {
  model: 'command',
  max_tokens: 1024,
  temperature: 0.3,  // Lower temperature for more consistent results
  stop_sequences: [],
  return_likelihoods: 'NONE'
};
```

## 🏗 Project Architecture

### Backend Structure (`/server`)
```
server/
├── controllers/           # Business logic
│   ├── authController.js
│   ├── jobController.js
│   ├── profileController.js
│   └── recommendationController.js
├── middleware/            # Express middleware
│   └── auth.js           # JWT authentication
├── models/               # Mongoose schemas
│   ├── User.js
│   ├── Profile.js
│   └── Job.js
├── routes/               # API route definitions
│   ├── auth.js
│   ├── jobs.js
│   ├── profile.js
│   └── recommendations.js
└── server.js            # Main application entry point
```

### Frontend Structure (`/client/src`)
```
client/src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── contexts/            # React Context providers
│   └── AuthContext.jsx
├── pages/               # Page components
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── ProfileForm.jsx
│   ├── JobList.jsx
│   ├── JobDetail.jsx
│   └── NotFound.jsx
├── services/            # API service layer
│   └── api.js
└── App.jsx             # Main application component
```

## 🌐 Deployment

### Production Environment Variables

**Backend (Vercel)**:
```env
PORT=3002
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/production-db
JWT_SECRET=super_secure_production_secret_minimum_32_characters
COHERE_API_KEY=your_production_cohere_api_key
```

**Frontend (Vercel)**:
```env
VITE_API_URL=https://ai-powered-job-match-platform-chi.vercel.app/api
```

### Deployment Steps

1. **Prepare MongoDB Atlas**:
   - Create a cluster
   - Set up database user
   - Configure network access

2. **Deploy Backend**:
   - Connect GitHub repository to Vercel
   - Set root directory to `server`
   - Add environment variables
   - Deploy

3. **Deploy Frontend**:
   - Create new Vercel project
   - Set root directory to `client`
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Add environment variables
   - Deploy

## 🔄 Trade-offs & Assumptions

### Trade-offs Made
- **AI Provider**: Chose Cohere over OpenAI for cost-effectiveness and reliable free tier
- **Styling**: Used Bootstrap instead of Tailwind for faster development and component library
- **Database**: MongoDB for rapid prototyping vs PostgreSQL for production scalability
- **Authentication**: Simple JWT implementation vs OAuth for assignment scope

### Assumptions
- Users will have basic job-seeking profiles with standard skills
- Job listings are relatively static (suitable for seeded data)
- AI recommendations focus on skill matching over complex career progression
- Free tier API limits are sufficient for demo purposes

**Built with ❤️ by [Piyush Guyal](https://github.com/piyushgyl01)**