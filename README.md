# Simple E-commerce Project

A beginner-friendly e-commerce application built with FastAPI (backend) and React (frontend).

##  Features

- **User/Admin Mode Toggle** - Switch between user and admin views
- **Category Management** - Admin can create product categories
- **Product Management** - Admin can add/delete products
- **Data Validation** - Ensures unique product IDs and existing categories
- **Real-time Updates** - UI updates automatically when data changes
- **Responsive Design** - Works on desktop and mobile

##  Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: React with Tailwind CSS
- **Storage**: In-memory arrays (no database)

##  Prerequisites

- Python 3.7+
- react.js
- npm 

##  Installation & Setup

### Backend Setup

1. **Create a new directory and navigate to it:**
```bash
mkdir simple-ecommerce
cd simple-ecommerce
```

2. **Create backend directory:**
```bash
mkdir backend
cd backend
```

3. **Install Python dependencies:**
```bash
pip install fastapi uvicorn
```

4. **Create main.py and copy the backend code**

5. **Run the backend server:**
```bash
python main.py
```

The backend will be available at: `http://localhost:8000`

### Frontend Setup

1. **Create React app (from main project directory):**
```bash
npx create-react-app frontend
cd frontend
```

2. **Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configure Tailwind (tailwind.config.js):**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Add Tailwind to src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Replace src/App.js with the frontend code**

6. **Start the frontend:**
```bash
npm start
```

The frontend will be available at: `http://localhost:3000`

## 📂 Project Structure

```
simple-ecommerce/
├── backend/
│   └── main.py          # FastAPI backend
├── frontend/
│   ├── src/
│   │   ├── App.js       # React frontend
│   │   └── index.css    # Tailwind styles
│   └── package.json
└── README.md
```

## 🎮 How to Use

### 1. Switch Between Modes
- Click **"User"** button for customer view
- Click **"Admin"** button for management view

### 2. Admin Mode Features
- **Create Categories**: Add new product categories
- **Add Products**: Create products with name, price, category, and unique ID
- **Delete Products**: Remove products from the store

### 3. User Mode Features
- **View Categories**: See all available categories
- **Browse Products**: View all products with details

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | Get all categories |
| POST | `/categories` | Create new category |
| GET | `/products` | Get all products |
| POST | `/products` | Create new product |
| DELETE | `/products/{id}` | Delete product by ID |

##  Data Models

### Category
```json
{
  "name": "Electronics"
}
```

### Product
```json
{
  "name": "iPhone",
  "price": 999.99,
  "category": "Electronics", 
  "id": "iphone-001"
}
```

##  Important Rules

1. **Categories must be created before adding products**
2. **Product IDs must be unique**
3. **All product fields are required**
4. **Only admin can add/delete products**
5. **Data is stored in memory (resets on server restart)**

##  Learning Objectives

This project is perfect for learning:

- **FastAPI basics** - REST API development
- **React fundamentals** - Component state and effects
- **HTTP requests** - Frontend-backend communication
- **Form handling** - User input validation
- **Tailwind CSS** - Utility-first styling
- **Error handling** - User-friendly error messages

##  Troubleshooting

### Backend Issues
- **Port already in use**: Change port in `main.py` to 8001
- **CORS errors**: Make sure CORS middleware is properly configured

### Frontend Issues
- **API connection failed**: Ensure backend is running on port 8000
- **Styling not working**: Check if Tailwind CSS is properly installed

### Common Errors
- **"Category doesn't exist"**: Create the category first
- **"ID must be unique"**: Use a different product ID
- **"Fill all fields"**: Complete all form fields

##  Next Steps

Want to enhance this project? Try adding:

- User authentication
- Database integration (SQLite/PostgreSQL)
- Product images
- Shopping cart functionality
- Order management
- Search and filters

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

---

**Happy coding! 🚀**
