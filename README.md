MyPortfolio API

## Overview
MyPortfolio's Cloud API is a scalable backend designed to accept and manage review and comments from the portfolio browers.

## Tech Stack
- **Backend**: Node.js (Express)
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT-based
- **Hosting**: Cloud-hosted for scalability
- **Environment Management**: dotenv

## Setup
1. Clone the repository:
  ```bash
  git clone <repository-url>
  cd portfolio-api
  ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Set up environment variables:

Create a .env file in the root directory and add the following variables:
  ```bash
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/
  JWT_SECRET=your-jwt-secret
  JWT_REFRESH_SECRET=your-refresh-secret
  ```