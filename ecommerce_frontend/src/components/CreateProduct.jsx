import React from 'react';

const CreateProduct = ({
  productName, setProductName,
  productPrice, setProductPrice,
  productCategory, setProductCategory,
  productId, setProductId,
  categories, createProduct
}) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-700 mb-4">📦 Add Product</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="number" placeholder="Price (e.g., 10.99)" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
        step="0.01" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Category</option>
        {categories.map((category, i) => (
          <option key={i} value={category.name}>{category.name}</option>
        ))}
      </select>
      <input type="text" placeholder="Unique Product ID" value={productId} onChange={(e) => setProductId(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <button onClick={createProduct}
      className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium text-lg">
      Add Product
    </button>
  </div>
);

export default CreateProduct;
