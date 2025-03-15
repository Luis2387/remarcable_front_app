React Frontend - Remarcable Shop

Project Overview

This is the frontend for the Remarcable project, built with React. It provides an interactive UI to browse products, search by description, and filter by category and tags.

Features

Fetches products, categories, and tags from Django API.

Search functionality using user input.

Dynamic filtering of products.

Responsive design.

Deployed on Netlify.

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js (latest LTS version)

npm or yarn

Clone the Repository

git clone https://github.com/Luis2387/remarcable_front_app

3Install Dependencies

npm install  # or yarn install

Configure API Base URL

Edit src/api.js and update:

const API_BASE_URL = "https://your-backend-url.com/api";
for this project is: https://remarcable-back-app.onrender.com/api

Run the Development Server

npm start  # or yarn start

The app will be available at: http://localhost:3000/

Build & Deployment

Netlify Deployment Steps

Push changes to GitHub.

Connect Netlify to the repository.

Configure Build Command:

npm run build

Set Publish Directory to build/

Deploy the site.



Assumptions & Notes

No pagination due to small dataset; can be added if scaling.

Uses useEffect for API calls and useState for managing UI state.
