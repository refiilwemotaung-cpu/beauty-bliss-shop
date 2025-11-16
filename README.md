# 💄 Beauty Bliss - Cosmetics E-Commerce Shop

![Beauty Bliss](https://img.shields.io/badge/Beauty-Bliss-pink)
![React](https://img.shields.io/badge/React-18.2-blue)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A modern, fully-responsive e-commerce web application for cosmetics and beauty products, built with React.js. Features a beautiful design with light/dark mode toggle, shopping cart functionality, and South African Rand pricing.

## 🎨 Live Demo

[**Live Demo Link**](https://beauty-bliss-shop.vercel.app/)

## 📸 App Preview

### Light Mode

![Light Mode Preview](https://via.placeholder.com/800x400/DB8084/FFFFFF?text=Beauty+Bliss+Light+Mode)

### Dark Mode

![Dark Mode Preview](https://via.placeholder.com/800x400/23314A/FFFFFF?text=Beauty+Bliss+Dark+Mode)

## ✨ Features

### 🛍️ Core E-Commerce

- **Product Catalog** - Beautiful grid layout showcasing cosmetics products
- **Shopping Cart** - Add/remove items, quantity management, real-time totals
- **ZAR Pricing** - All prices in South African Rand with proper formatting
- **Category Browsing** - Organized by makeup, skincare, fragrance, and more

### 🎨 Design & UX

- **Light/Dark Mode** - Toggle between themes with persistent preference
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, feminine design with smooth animations
- **Color Scheme** - Custom palette (#DB8084, #23314A, #8FA1B1)

### 🔧 Technical Features

- **Component-Based Architecture** - Modular, reusable React components
- **Context API** - State management for theme and cart
- **Smooth Navigation** - Single-page application with section scrolling
- **Performance Optimized** - Efficient rendering and minimal bundle size

## 🛠️ Tech Stack

**Frontend:**

- ⚛️ React 18.2
- 🎨 CSS3 with CSS Variables
- 🅱️ Bootstrap (for responsive utilities)
- 🎯 JavaScript (ES6+)

**Development:**

- 🔧 Create React App
- 📦 npm package management
- 🔍 ESLint + Prettier
- 🚀 Git version control

## 🎯 Color Scheme

| Color      | Hex       | Usage                            |
| ---------- | --------- | -------------------------------- |
| Soft Coral | `#DB8084` | Primary buttons, accents, prices |
| Navy Blue  | `#23314A` | Dark mode background, text       |
| Slate Blue | `#8FA1B1` | Secondary text, borders          |

## 📁 Project Structure

beauty-bliss-shop/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── Header/
│ │ ├── ProductCard/
│ │ ├── ProductList/
│ │ ├── ProductGallery/
│ │ ├── HeroCarousel/
│ │ ├── Cart/
│ │ ├── ThemeToggle/
│ │ └── About/
│ ├── contexts/
│ │ ├── ThemeContext.js
│ │ └── CartContext.js
│ ├── hooks/
│ │ ├── useActiveSection.js
│ │ └── useScrollEffect.js
│ ├── data/
│ │ └── products.js
│ ├── styles/
│ ├── App.js
│ ├── App.css
│ └── index.js
└── README.md

## 🚀 Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/refiilwemotaung-cpu/E-commerce-React-App
   cd E-commerce-React-App

   ```

2. **Install dependencies**
   npm install

3. **Start the development server**
   npm start

4.**Open your browser**
Navigate to http://localhost:3000

## Available Scripts

npm start # Start development server
npm run build # Create production build
npm test # Run test suite
npm run eject # Eject from Create React App (not recommended)

## 📱 Responsive Design

Beauty Bliss is optimized for all devices:

• Desktop (≥1024px): Full 3-column layouts, hover effects
• Tablet (768px-1024px): 2-column grids, optimized spacing
• Mobile (<768px): 1-column layout, touch-friendly buttons

## 🎭 Component Overview

### Core Components

• Header: Navigation with active states and cart icon
• HeroCarousel: Rotating featured products with auto-play
• ProductGallery: Category overview with emoji visuals
• ProductList: Main product catalog with add-to-cart
• Cart: Slide-out cart with quantity management
• About: Company information in 3-column layout
• ThemeToggle: Light/dark mode switch

### Context Providers

• ThemeContext: Manages light/dark mode across app
• CartContext: Handles cart state and operations

### 💄Product Categories

1. 💄Makeup - Lipsticks, foundations, mascara
2. 🧴Skincare - Serums, cleansers, moisturizers
3. 🌸Fragrance - Perfumes, body mists
4. 🛁Bath & Body - Lotions, scrubs, bath products

### 🔮Future Enhancements

• User authentication and profiles
• Product search and filtering
• Wishlist functionality
• Product reviews and ratings
• Payment integration
• Order history
• Admin dashboard
• Product inventory management

### 🤝Contributing

I welcome contributions! Please follow these steps:

1. Fork the project
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

### Development Guidelines

• Follow React best practices
• Maintain consistent code style
• Add comments for complex logic
• Test on multiple devices
• Ensure accessibility standards

## 📄License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥Authors

• Refilwe Motaung - Initial work - https://github.com/refiilwemotaung-cpu/

## 🙏Acknowledgements

• Icons and emojis from OpenMoji
• Color scheme inspiration from modern beauty brands
• React community for excellent documentation
• Create React App for the development foundation

## 📞Support

If you have any questions or issues, please open an issue on GitHub or contact me on refiilwemotaung@gmail.com

Built with 💖 and React in South Africa 🇿🇦
