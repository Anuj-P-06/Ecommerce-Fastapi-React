from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn

# Create FastAPI app
app = FastAPI(title="Simple E-commerce API")

# Allow React app to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple data storage (like arrays)
categories = []
products = []

# Data models (what data looks like)
class Category(BaseModel):
    name: str

class Product(BaseModel):
    item_name: str
    item_price: float
    item_category: str
    item_id: str

# API endpoints (routes)

@app.get("/")
def home():
    return {"message": "E-commerce API is working!"}

@app.get("/categories")
def get_all_categories():
    return categories

@app.post("/categories")
def create_new_category(category: Category):
    # Check if category already exists
    for existing_category in categories:
        if existing_category["name"].lower() == category.name.lower():
            raise HTTPException(status_code=400, detail="Category already exists!")
    
    # Add new category
    new_category = {"name": category.name}
    categories.append(new_category)
    return new_category

@app.get("/products")
def get_all_products():
    return products

@app.post("/products")
def create_new_product(product: Product):
    # Check if item_id is unique
    for existing_product in products:
        if existing_product["item_id"] == product.item_id:
            raise HTTPException(status_code=400, detail="Item ID must be unique!")
    
    # Check if category exists
    category_exists = False
    for category in categories:
        if category["name"].lower() == product.item_category.lower():
            category_exists = True
            break
    
    if not category_exists:
        raise HTTPException(status_code=400, detail="Category does not exist! Please create category first.")
    
    # Add new product
    new_product = {
        "item_name": product.item_name,
        "item_price": product.item_price,
        "item_category": product.item_category,
        "item_id": product.item_id
    }
    products.append(new_product)
    return new_product

@app.delete("/products/{item_id}")
def delete_product(item_id: str):
    # Find and remove product
    for i, product in enumerate(products):
        if product["item_id"] == item_id:
            removed_product = products.pop(i)
            return {"message": "Product deleted successfully"}
    
    raise HTTPException(status_code=404, detail="Product not found!")

# Run the server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)