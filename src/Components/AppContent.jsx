import React from 'react';
import { Moon, Sun, MapPin, Calendar, DollarSign, Bus, Train, Hotel, Camera, Utensils, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';
import LoadingAnimation from './LoadingAnimation';
import logo from '../assets/image.jpg'; // 👈 your image


const AppContent = ({ formData, errors, isLoading, itinerary, handleChange, handleSubmit, handleReset }) => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Smart Travel Planner"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Smart Travel Planner
              </h1>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!itinerary && !isLoading && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text:white mb-6"> Plan Your Perfect Trip </h2>

            <div className="space-y-6">
              {/* Source & Destination */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Source
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.source ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="e.g., Mumbai"
                  />
                  {errors.source && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.source}</p>}
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.destination ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="e.g., Goa"
                  />
                  {errors.destination && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.destination}</p>}
                </div>
              </div>

              {/* Duration & Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Duration (Days)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="1"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.duration ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text:white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.duration && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.duration}</p>}
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Budget (₹)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    min="1000"
                    step="500"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.budget ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text:white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.budget && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.budget}</p>}
                </div>
              </div>

              {/* Travel & Accommodation */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Bus className="w-4 h-4 mr-2" />
                    Travel Preference
                  </label>
                  <select
                    name="travelPreference"
                    value={formData.travelPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text:white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="bus">Bus</option>
                    <option value="train">Train</option>
                    <option value="flight">Flight</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Hotel className="w-4 h-4 mr-2" />
                    Accommodation
                  </label>
                  <select
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text:white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low Budget</option>
                    <option value="mid">Mid Range</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
              </div>

              {/* Sightseeing */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Camera className="w-4 h-4 mr-2" />
                  Number of Sightseeing Places
                </label>
                <input
                  type="number"
                  name="sightseeingPlaces"
                  value={formData.sightseeingPlaces}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.sightseeingPlaces ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text:white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.sightseeingPlaces && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.sightseeingPlaces}</p>}
              </div>

              {/* Food Preference */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="foodSuggestion"
                    checked={formData.foodSuggestion}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="ml-3 flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <Utensils className="w-4 h-4 mr-2" />
                    Include Food Suggestions
                  </label>
                </div>

                {formData.foodSuggestion && (
                  <div className="ml-8">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                      Food Type
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="foodType"
                          value="veg"
                          checked={formData.foodType === 'veg'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">Vegetarian</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="foodType"
                          value="non-veg"
                          checked={formData.foodType === 'non-veg'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">Non-Vegetarian</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
                >
                  Search For Trip Plan
                </button>
                <button
                  onClick={handleReset}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <LoadingAnimation />
          </div>
        )}

        {/* Itinerary Display */}
        {itinerary && !isLoading && (
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Your Trip Summary
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">Route</p>
                  <p className="text-xl font-bold">{itinerary.summary.source} → {itinerary.summary.destination}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">Duration</p>
                  <p className="text-xl font-bold">{itinerary.summary.duration}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">Total Budget</p>
                  <p className="text-xl font-bold">{itinerary.summary.totalBudget}</p>
                </div>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Budget Breakdown</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(itinerary.breakdown).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">{key}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sightseeing Places */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text:white mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-3 text-blue-600" />
                Top Sightseeing Places
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {itinerary.sightseeing.map((place, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {idx + 1}
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">{place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-wise Itinerary */}
            <div className="space-y-4">
              {itinerary.days.map((day) => (
                <div key={day.day} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text:white mb-6 flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                    Day {day.day}
                  </h3>
                  <div className="space-y-4">
                    {day.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <div className="flex-shrink-0 w-20 text-blue-600 dark:text-blue-400 font-semibold">
                          {activity.time}
                        </div>
                        <div className="flex-grow text-gray-700 dark:text-gray-300">
                          {activity.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Plan Another Trip Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Plan Another Trip
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Smart Travel Planner | Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default AppContent;
