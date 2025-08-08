import React from 'react';

const Header = ({ userType, setUserType }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Simple E-commerce Store</h1>
    <div className="flex gap-4 mb-4">
      <button
        onClick={() => setUserType('user')}
        className={`px-6 py-2 rounded-lg font-medium ${userType === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        👤 User Mode
      </button>
      <button
        onClick={() => setUserType('admin')}
        className={`px-6 py-2 rounded-lg font-medium ${userType === 'admin' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        👑 Admin Mode
      </button>
    </div>
    <p className="text-gray-600">
      Current Mode: <span className="font-semibold">{userType === 'admin' ? '👑 Admin' : '👤 User'}</span>
    </p>
  </div>
);

export default Header;
