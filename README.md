# Product Store 🛒

A full-stack product management application that allows users to create, view, update, and delete products. Built with React, Zustand, Chakra UI, and Express.

---

## Features

- **Product Management**: Add, update, delete, and view products.
- **Dark Mode**: Toggle between light and dark themes using Chakra UI's color mode.
- **Responsive Design**: Mobile-first responsive design for seamless usage on any device.
- **Global State Management**: Handled using Zustand for state synchronization across components.
- **Backend Integration**: CRUD operations powered by Express and MongoDB.
- **Toast Notifications**: Provides instant feedback on user actions.

---

## Tech Stack

### Frontend
- **React**: Library for building user interfaces.
- **Chakra UI**: UI framework for styling and components.
- **React Router**: For navigation and routing.

### Backend
- **Express**: Lightweight web application framework.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.

### State Management
- **Zustand**: Minimalistic global state management for React.

---

## Demo

You can access the live version of the app here: [Product Store Live Demo](https://products-store-4.onrender.com/)

---

## Getting Started

### Prerequisites

- **Node.js** (v18.18.0 or higher)
- **MongoDB** (Ensure MongoDB is running locally or use a cloud service like MongoDB Atlas)
- A terminal or IDE with Git support

---

### Installation

1. *Clone the repository*:
   git clone https://github.com/brianrono/products-store.git
   cd products-store
2. **Install backend dependencies**:
npm install
3. *Install frontend dependencies*:
   cd frontend
   npm install
   cd ..
4. *Set up environment variables*: Create a .env file in the backend folder with the following values: 
   MONGO_URI=<your-mongo-uri>
   PORT=5000

---

### Running the Application
1. *Start the backend server*:
   npm run dev
2. *Start the frontend*:
   cd frontend
   npm start
3. *Access the application*: Open your browser and go to http://localhost:3000

---

### Project Structure
#### Frontend
- *Components*: Reusable UI components (e.g., Navbar, ProductCard).
- *Pages*: Application views (e.g., HomePage, CreatePage).
- *Store*: Global state management using Zustand.

#### Backend
- *Models*: Mongoose schemas for MongoDB collections.
- *Routes*: RESTful API endpoints for product CRUD operations.
- *Server*: Entry point for the Express server.

### API Endpoints
#### Product Management
- *GET*/api/products: Fetch all products.
- *POST* /api/products: Add a new product.
- *PUT* /api/products/:id: Update an existing product.
- *DELETE* /api/products/:id: Delete a product.

---

### Scripts
- *Start Development Server*
   npm run dev
- *Build Frontend*
   npm run build
- *Start Production Server*
   npm start

---

### Known Issues
- *Validation Errors*: Ensure all required fields are filled when creating or updating a product.
- *API Connectivity*: Ensure the backend server and MongoDB are running before accessing the app.

### Future Implements
- Add user authentication and role-based access control.
- Implement product search and filtering functionality.
- Add unit and integration tests for critical components and APIs.