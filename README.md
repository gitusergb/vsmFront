
# Video Management Application

## Overview

This is a **Video Management Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The application allows users to **upload, view, and manage their own video collections**. All services (frontend, backend, and database) are run locally inside Docker containers, with clear documentation on how to start the application.

## Features

- **Authentication & User Access**: Users can sign up and log in to access uploaded videos.
- **Video Uploading & Storage**: Users can upload videos directly from Google Drive.
- **Metadata Management**: Uploaded videos' metadata (title, description, tags, file size, etc.) is stored in a MongoDB database.
- **Filtering & Pagination**: Users can filter videos by title, date uploaded, and tags, with pagination to navigate through their collections.
- **Responsive UI**: A React-based frontend that adapts to various screen sizes, providing a user-friendly interface for managing videos.
- **Video Player**: Users can view videos directly within the application.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB 
- **Authentication**: JWT-based authentication
- **Video Upload**: Google Drive API for video uploading
- **Containerization**: Docker, Docker Compose
- **UI Design**: Responsive UI

## Environment Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gitusergb/vsmFront
   ```

2. **Navigate to the project directory**:
   ```bash
   cd video-management-app
   ```

3. **Install dependencies for backend and frontend**:

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

4. **Configure Docker Compose**:
   The application is set up with Docker Compose. To run all services locally, use the following command:

   ```bash
   docker-compose up --build
   ```

   This command will build and start the containers for the frontend, backend, and MongoDB database.

5. **Access the Application**:
   - The frontend will be available at `http://localhost:3000 || https://extraordinary-lollipop-0bdcea.netlify.app/login`.
   - The backend API will be available at `http://localhost:5000 ||https://vsm-owg3.onrender.com/`.

6. **Environment Variables**:
   Make sure to configure the necessary environment variables (e.g., JWT secret, MongoDB URI, Google Drive credentials) in `.env` files for both the frontend and backend.

## Authentication & User Access

The app uses **JWT-based authentication**. Users must log in to access their uploaded videos, and each user will only see their own videos after logging in.

## Video Management Features

### Upload Videos

Users can upload videos directly from **Google Drive**, and the metadata (such as title, description, tags, and file size) is stored in the MongoDB database.

### Video Player

A built-in video player allows users to play videos directly from the application.

### Backend
- The **backend** handles authentication, video uploads, metadata storage, and providing APIs for the frontend.
- MongoDB is used to store video metadata and user information.
  
### Frontend
- The **frontend** is built with **React.js** and displays the uploaded videos, providing features like filtering, pagination, and a video player.



 **Login and Upload Videos**:
   - Sign up or log in to access the app.
   - Upload videos from Google Drive.
   - Manage your videos using the filtering and pagination features.



## Links

- **Render Deployment**: [Link to Render](https://vsm-owg3.onrender.com/)
- **Netlify Deployment**: [Link to Netlify](https://extraordinary-lollipop-0bdcea.netlify.app/login)

## Screenshots

Some screenshots of the application:

- **Login Page**:
   ![Login Page](<path-to-screenshot>)

- **Video Management Dashboard**:
   ![Dashboard](<path-to-screenshot>)

- **Video Player**:
   ![Video Player](<path-to-screenshot>)


## Contributor

**Gauri Bidwai**

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
