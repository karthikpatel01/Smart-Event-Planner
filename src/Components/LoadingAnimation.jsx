import React, { useState, useEffect } from 'react';
import { Plane, Moon, Sun, MapPin, Calendar, DollarSign, Bus, Train, Hotel, Camera, Utensils, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Loading Animation Component
const LoadingAnimation = () => {
  const [message, setMessage] = useState('Planning your trip...');

  useEffect(() => {
    const messages = [
      'Planning your trip...',
      'Finding best routes...',
      'Selecting accommodations...',
      'Preparing your itinerary...'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
      <div className="relative">
        <Loader2 className="w-16 h-16 animate-spin text-blue-500" />
        <Plane className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" />
      </div>
      <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
        {message}
      </p>
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
