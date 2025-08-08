import React from 'react';

const MessageBox = ({ message, isError }) => {
  if (!message) return null;
  return (
    <div className={`rounded-lg p-4 mb-6 ${isError ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'}`}>
      {message}
    </div>
  );
};

export default MessageBox;
