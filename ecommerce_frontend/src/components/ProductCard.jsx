import React from 'react';

const ProductCard = ({ product, userType, deleteProduct }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.item_name}</h3>
    <p className="text-2xl font-bold text-green-600 mb-2">${product.item_price.toFixed(2)}</p>
    <p className="text-gray-600 mb-1">Category: {product.item_category}</p>
    <p className="text-gray-400 text-sm mb-3">ID: {product.item_id}</p>
    {userType === 'admin' && (
      <button onClick={() => deleteProduct(product.item_id)}
        className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium">
        🗑️ Delete Product
      </button>
    )}
  </div>
);

export default ProductCard;
