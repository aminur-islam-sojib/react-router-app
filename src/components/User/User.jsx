import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">User : {userId}</h1>
      <p className="text-lg text-gray-700">Welcome to your profile page!</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Edit Profile
      </button>
    </div>
  );
};

export default User;
