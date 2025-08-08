import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import AdminPanel from './components/AdminPanel';
import CategoriesDisplay from './components/CategoriesDisplay';
import ProductsDisplay from './components/ProductsDisplay';

const App = () => {
  const [userType, setUserType] = useState('user');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productId, setProductId] = useState('');

  const API_URL = 'http://localhost:8000';

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await fetch(`${API_URL}/categories`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const showMessage = (text, error = false) => {
    setMessage(text);
    setIsError(error);
    setTimeout(() => setMessage(''), 3000);
  };

  const createCategory = async () => {
    if (!categoryName.trim()) return showMessage('Please enter a category name!', true);
    try {
      const res = await fetch(`${API_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: categoryName })
      });
      if (res.ok) {
        setCategoryName('');
        loadCategories();
        showMessage('Category created successfully!');
      } else {
        const error = await res.json();
        showMessage(error.detail, true);
      }
    } catch {
      showMessage('Failed to create category!', true);
    }
  };

  const createProduct = async () => {
    if (!productName || !productPrice || !productCategory || !productId)
      return showMessage('Please fill all fields!', true);

    try {
      const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_name: productName,
          item_price: parseFloat(productPrice),
          item_category: productCategory,
          item_id: productId
        })
      });
      if (res.ok) {
        setProductName('');
        setProductPrice('');
        setProductCategory('');
        setProductId('');
        loadProducts();
        showMessage('Product created successfully!');
      } else {
        const error = await res.json();
        showMessage(error.detail, true);
      }
    } catch {
      showMessage('Failed to create product!', true);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        loadProducts();
        showMessage('Product deleted successfully!');
      } else {
        const error = await res.json();
        showMessage(error.detail, true);
      }
    } catch {
      showMessage('Failed to delete product!', true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Header userType={userType} setUserType={setUserType} />
        <MessageBox message={message} isError={isError} />
        {userType === 'admin' && (
          <AdminPanel
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            createCategory={createCategory}
            productName={productName}
            setProductName={setProductName}
            productPrice={productPrice}
            setProductPrice={setProductPrice}
            productCategory={productCategory}
            setProductCategory={setProductCategory}
            productId={productId}
            setProductId={setProductId}
            categories={categories}
            createProduct={createProduct}
          />
        )}
        <CategoriesDisplay categories={categories} userType={userType} />
        <ProductsDisplay products={products} userType={userType} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

export default App;
