Next.js E-Commerce Website
This is a responsive e-commerce website built using Next.js, showcasing products with filtering options and a modern UI. It leverages the DummyJSON API for fetching product data.

Features:
Display all products in a grid format.
Filter products by categories: All, Beauty, Furniture, Fragrances, Groceries.
Responsive design with:
4 products per row on laptops.
2 products per row on mobile devices.
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v16 or later recommended)
npm or Yarn (for managing packages)
Getting Started
Follow these steps to run the project locally:

Clone the Repository 
git clone https://github.com/kishore298/nextjs-ecommerce.git
Replace your-username with your GitHub username or the correct repository URL.

Navigate to the Project Directory:
cd nextjs-ecommerce

Install Dependencies
Install all required dependencies using npm or yarn:

npm install

Set Up Environment Variables
Create a .env.local file in the root directory to store your environment variables. Add the following:

API_URL=https://dummyjson.com/products
This variable points to the DummyJSON API used for fetching product data.

Run the Development Server
Start the development server with the following command:

npm run dev

Open in Browser
Once the server is running, open your browser and visit:
http://localhost:3000
You should see the e-commerce website running locally.


Scripts:
npm run dev: Start the development server.
npm run build: Build the project for production.
npm run start: Run the production build locally.
npm run lint: Lint the codebase.


Technologies Used
Next.js: React framework for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for responsive styling.
DummyJSON API: Source of product data for the application.

 
 
