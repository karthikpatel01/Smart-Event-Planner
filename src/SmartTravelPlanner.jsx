import React, { useState, useEffect } from 'react';
import { Plane, Moon, Sun, MapPin, Calendar, DollarSign, Bus, Train, Hotel, Camera, Utensils, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { ThemeProvider } from './Components/ThemeContext'
import AppContent from './Components/AppContent'
import { generateItinerary } from './utils/itineraryGenerator'

export default function SmartTravelPlanner() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('travelFormData');
    return saved ? JSON.parse(saved) : {
      source: '',
      destination: '',
      duration: 3,
      budget: 15000,
      travelPreference: 'bus',
      accommodation: 'mid',
      sightseeingPlaces: 3,
      foodSuggestion: true,
      foodType: 'veg'
    };
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    localStorage.setItem('travelFormData', JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.source.trim()) newErrors.source = 'Source is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (formData.duration < 1) newErrors.duration = 'Duration must be at least 1 day';
    if (formData.budget < 1000) newErrors.budget = 'Budget must be at least ₹1000';
    if (formData.sightseeingPlaces < 1) newErrors.sightseeingPlaces = 'At least 1 place required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setIsLoading(true);
    setItinerary(null);

    // Simulate API call
    setTimeout(() => {
      const generatedItinerary = generateItinerary(formData);
      setItinerary(generatedItinerary);
      setIsLoading(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleReset = () => {
    setFormData({
      source: '',
      destination: '',
      duration: 3,
      budget: 15000,
      travelPreference: 'bus',
      accommodation: 'mid',
      sightseeingPlaces: 3,
      foodSuggestion: true,
      foodType: 'veg'
    });
    setErrors({});
    setItinerary(null);
  };

  return (
    <ThemeProvider>
      <AppContent
        formData={formData}
        errors={errors}
        isLoading={isLoading}
        itinerary={itinerary}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </ThemeProvider>
  );
}
