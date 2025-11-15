Project Name: ToyTopia

Project Overview: 
ToyTopia is a vibrant and playful online toy store platform for kids. The platform allows users to browse, search, and manage their favorite toys in a wishlist. It also provides user authentication, profile management, and interactive UI components.

The purpose of this project is to create a full-stack-like React application that:
-> Demonstrates user authentication with Firebase
-> Implements interactive UI components like sliders and cards
-> Allows users to manage personal data (profile and wishlist)
-> Enhances learning in React, routing, state management, and local storage

Live URL: https://assignment-09-toytopia-zarin.netlify.app/

Key Features:
-> Home Page: Interactive slider, popular toys section, and feature highlights.
-> All Toys Page: Browse and search all available toys.
-> Wishlist: Add/remove favorite toys; persistent per user using local storage.
-> User Authentication: Login, registration, password reset, and protected routes.
-> Profile Management: Edit name and photo URL using Firebase updateProfile().
-> Dynamic Page Titles: Each page has a dynamic title using react-helmet.
-> 404 Page: Custom error page with redirect functionality.
-> Responsive Design: Fully responsive for mobile, tablet, and desktop screens.

Technologies & NPM Packages Used:

-> Frontend: React, React Router DOM
-> Styling: TailwindCSS, DaisyUI
-> Authentication: Firebase Authentication
-> Notifications: react-hot-toast
-> Dynamic Titles: react-helmet
-> Slider Component: Swiper
-> State & Data Management: React hooks (useState, useEffect), LocalStorage

Project Structure:
toy-topia/
│
├─ public/
│  ├─ assets/        # Images, placeholders, logos
│
├─ src/
│  ├─ components/    # Reusable components (Navbar, Slider, PopularToys, etc.)
│  ├─ pages/         # Page components (Home, AllToys, Wishlist, Profile, ErrorPage, etc.)
│  ├─ Providers/     # Firebase Auth provider
│  ├─ router/        # Routes and private route management
│  └─ main.jsx        # Main app entry
│
├─ package.json
└─ README.md
