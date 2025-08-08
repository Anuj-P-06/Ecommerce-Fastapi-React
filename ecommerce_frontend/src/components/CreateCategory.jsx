import React from 'react';

const CreateCategory = ({ categoryName, setCategoryName, createCategory }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">📁 Create Category</h3>
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={createCategory}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
      >
        Create Category
      </button>
    </div>
  </div>
);

export default CreateCategory;
