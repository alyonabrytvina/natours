# Natours 🌍

A full-stack tour booking application built with Node.js, Express, MongoDB and Pug.

**Live demo:** [https://natours-ykym.onrender.com](https://natours-ykym.onrender.com)

## Features

- Browse and book tours
- User authentication (sign up, log in, JWT tokens)
- Password reset via email
- Update profile and password
- Secure payments via Stripe
- Admin panel for managing tours, users, bookings and reviews
- Image upload and processing with Sharp
- Rate limiting, XSS protection, NoSQL injection prevention

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Templating | Pug |
| Auth | JWT, bcrypt |
| Email | Nodemailer, Mailtrap |
| Payments | Stripe |
| Images | Multer, Sharp |
| Frontend | Vanilla JS, Axios, Parcel |

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account
- Mailtrap account (for email in development)

### Installation

```bash
git clone https://github.com/alyonabrytvina/natours.git
cd natours
npm install
```

### Configuration

Create a `config.env` file in the root:

```env
NODE_ENV=development
PORT=8080
DATABASE=mongodb+srv://<username>:<PASSWORD>@cluster0.xxxxx.mongodb.net/natours
DATABASE_PASSWORD=your_password

JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USERNAME=your_mailtrap_username
EMAIL_PASSWORD=your_mailtrap_password
EMAIL_FROM=hello@natours.io
```

### Run

```bash
# Development
npm run dev

# Build frontend JS
npm run build:js
```

### Import sample data

```bash
node dev-data/data/import-dev-data.js --import
```

## Deployment

Deployed on [Render](https://render.com). Each push to `main` triggers an automatic redeploy.

---

*Developed by Alona Brytvina following the Node.js, Express, MongoDB & More course by Jonas Schmedtmann.*
