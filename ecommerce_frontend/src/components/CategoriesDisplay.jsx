import React from 'react';

const CategoriesDisplay = ({ categories, userType }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 Categories ({categories.length})</h2>
    {categories.length === 0 ? (
      <p className="text-gray-500 text-center py-8">
        No categories available. {userType === 'admin' ? 'Create one above!' : 'Ask admin to create categories.'}
      </p>
    ) : (
      <div className="flex flex-wrap gap-3">
        {categories.map((c, i) => (
          <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {c.name}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default CategoriesDisplay;
