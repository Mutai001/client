import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Thank you for your payment. Your booking has been confirmed.</p>
        <Link to="/user/dashboard" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;