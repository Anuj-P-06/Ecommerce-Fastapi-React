import React from 'react';
import CreateCategory from './CreateCategory';
import CreateProduct from './CreateProduct';

const AdminPanel = ({
  categoryName, setCategoryName, createCategory,
  productName, setProductName,
  productPrice, setProductPrice,
  productCategory, setProductCategory,
  productId, setProductId,
  categories, createProduct
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">👑 Admin Panel</h2>
    <CreateCategory categoryName={categoryName} setCategoryName={setCategoryName} createCategory={createCategory} />
    <CreateProduct productName={productName} setProductName={setProductName}
      productPrice={productPrice} setProductPrice={setProductPrice}
      productCategory={productCategory} setProductCategory={setProductCategory}
      productId={productId} setProductId={setProductId}
      categories={categories} createProduct={createProduct} />
  </div>
);

export default AdminPanel;
