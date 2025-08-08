import React from 'react';
import ProductCard from './ProductCard';

const ProductsDisplay = ({ products, userType, deleteProduct }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Products ({products.length})</h2>
    {products.length === 0 ? (
      <p className="text-gray-500 text-center py-8">
        No products available. {userType === 'admin' ? 'Add some products above!' : 'Ask admin to add products.'}
      </p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.item_id} product={p} userType={userType} deleteProduct={deleteProduct} />
        ))}
      </div>
    )}
  </div>
);

export default ProductsDisplay;
