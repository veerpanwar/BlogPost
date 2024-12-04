# Post-App

A full-stack application that allows users to create posts with titles and descriptions. It includes a frontend built with React and Vite and a backend with Express and MongoDB for storing posts.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [License](#license)

---

## Project Overview

The **Post-App** is a simple blog post management application where users can submit posts with a title and description. This project consists of two parts:

1. **Frontend** - Built with **React** and **Vite** to provide a fast and responsive user interface.
2. **Backend** - Built with **Express** and **MongoDB** for handling API requests and storing posts.

---

## Features

- **Create Posts**: Users can submit new posts with a title and description.
- **View Posts**: Users can view all posts displayed in a list.
- **Backend**: Uses **MongoDB** to persist data and **Express** for API endpoints.

---

## Tech Stack

- **Frontend**:
  - React
  - Vite (for fast development)
  - Tailwind CSS (for styling)
  
- **Backend**:
  - Express
  - MongoDB (for data storage)
  - Mongoose (for MongoDB interactions)
  - Nodemon (for development)

---

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/post-app.git
cd post-app

post-app/
├── backend/                # Backend directory (Express server)
│   ├── server.js           # Main server file
│   ├── models/             # MongoDB models (Post)
│   ├── routes/             # API routes
│   ├── package.json       # Backend dependencies & scripts
│   ├── src/
│   │   ├── components/     # React components (Navbar, Home, PostForm)
│   │   ├── App.jsx         # Main app component
│   │   ├── index.jsx       # Entry point for React
│   ├── public/
│   ├── package.json       # Frontend dependencies & scripts
├── .gitignore
├── package.json           # Root package.json to run both backend and frontend
└── README.md              # Documentation for the project
