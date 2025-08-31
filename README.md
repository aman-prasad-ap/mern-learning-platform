# MERN Learning Platform (with GenAI + Cloud)

## Project Overview
A full-stack MERN (MongoDB, Express, React, Node) learning platform where users can sign up, enroll in courses, and utilize Generative AI features such as quiz generation, course summarization, and an AI assistant chatbot. The project also integrates cloud storage and deployment for scalable hosting.

## Features
- User authentication with JWT (signup/login)
- Course management (create, view, enroll)
- AI-powered quiz generator from course content
- Lesson summarizer using OpenAI or Hugging Face API
- Course assistant chatbot for interactive queries
- Cloud database with MongoDB Atlas
- Cloud file storage using AWS S3 for videos and documents
- Frontend deployed on Vercel, backend deployed on Render with Docker
- CI/CD pipeline automates testing and deployment (GitHub Actions)

## Tech Stack
- Backend: Node.js, Express, MongoDB Atlas, JWT
- Frontend: React.js, React Router, Tailwind CSS
- AI: OpenAI API or Hugging Face Inference API, LangChain.js
- Cloud: AWS S3, AWS CloudFront, Render, Vercel
- CI/CD: GitHub Actions (build, test, deploy)

## Getting Started

### Prerequisites
- Node.js and npm installed
- Git installed
- MongoDB Atlas account
- AWS account with S3 and CloudFront configured
- OpenAI or Hugging Face API key

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/<your-username>/mern-learning-platform.git
   cd mern-learning-platform
   ```

2. Setup backend:
   ```
   cd backend
   npm install
   create a `.env` file with MongoDB URI, JWT_SECRET, and AI API keys
   npm start
   ```

3. Setup frontend:
   ```
   cd ../frontend
   npm install
   npm start
   ```

4. Access the app in your browser at `http://localhost:3000`.

## CI/CD Pipeline
- GitHub Actions configured to:
  - Automatically run backend and frontend tests on push or pull requests.
  - Build and deploy the backend API to Render using Docker.
  - Build and deploy the React frontend to Vercel.
- Badges for build and test status displayed in this README.

## Project Roadmap
Refer to the project's roadmap for phased development and feature rollout:
- Week 1: Backend (auth, courses, enrollments)
- Week 2: Frontend pages and API integration
- Week 3: Generative AI features integration
- Week 4: Cloud deployment and file storage
- Week 5: CI/CD automation, testing, and polishing

## License
This project is licensed under the MIT License.


[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/67708569/6369ca97-5264-4bca-a307-24751af0c5e3/MERN_Learning_Platform_Full_Roadmap.pdf)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/67708569/7076b4ec-051b-468d-b545-dd75b35b5f9b/MERN_Learning_Platform_Roadmap.pdf)
[3](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/67708569/0fa9e64c-e55d-46e3-9b3a-e4615d1c8b53/Portfolio_Projects_Plan.pdf)
