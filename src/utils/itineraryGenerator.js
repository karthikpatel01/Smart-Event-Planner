// Itinerary Generator
export const generateItinerary = (formData) => {
  const { source, destination, duration, budget, travelPreference, accommodation, sightseeingPlaces, foodSuggestion, foodType } = formData;

  const budgetPerDay = Math.floor(budget / duration);
  const transportCost = travelPreference === 'train' ? budgetPerDay * 0.15 : budgetPerDay * 0.10;
  const accommodationCost = accommodation === 'luxury' ? budgetPerDay * 0.40 : accommodation === 'mid' ? budgetPerDay * 0.25 : budgetPerDay * 0.15;
  const foodCost = budgetPerDay * 0.25;
  const sightseeingCost = budgetPerDay * 0.30;

  const sightseeingPlaces_list = {
    mumbai: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Juhu Beach', 'Siddhivinayak Temple'],
    delhi: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple', 'Humayun Tomb'],
    bangalore: ['Lalbagh Garden', 'Cubbon Park', 'Bangalore Palace', 'ISKCON Temple', 'Nandi Hills'],
    goa: ['Baga Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls', 'Anjuna Market'],
    jaipur: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort'],
    default: ['Local Museum', 'City Park', 'Historic Monument', 'Shopping District', 'Cultural Center']
  };

  const places = sightseeingPlaces_list[destination.toLowerCase()] || sightseeingPlaces_list.default;
  const selectedPlaces = places.slice(0, parseInt(sightseeingPlaces));

  const days = [];
  for (let i = 1; i <= parseInt(duration); i++) {
    const dayPlaces = selectedPlaces.filter((_, idx) => idx % parseInt(duration) === i - 1 || selectedPlaces.length <= 3);
    days.push({
      day: i,
      activities: [
        { time: '8:00 AM', activity: `Breakfast at hotel - ${foodSuggestion ? foodType.toUpperCase() : 'Multiple'} options available` },
        { time: '10:00 AM', activity: `Visit ${dayPlaces[0] || selectedPlaces[0]} - Explore and enjoy` },
        { time: '1:00 PM', activity: `Lunch at local restaurant` },
        { time: '3:00 PM', activity: `Visit ${dayPlaces[1] || selectedPlaces[Math.min(1, selectedPlaces.length - 1)]} - Photography and sightseeing` },
        { time: '6:00 PM', activity: `Evening walk and shopping` },
        { time: '8:00 PM', activity: `Dinner and return to hotel` }
      ]
    });
  }

  return {
    summary: {
      source,
      destination,
      duration: `${duration} Days`,
      totalBudget: `₹${budget}`,
      perDayBudget: `₹${budgetPerDay}`,
      transport: travelPreference.toUpperCase(),
      accommodation: accommodation.toUpperCase()
    },
    breakdown: {
      transport: `₹${Math.floor(transportCost * duration)}`,
      accommodation: `₹${Math.floor(accommodationCost * duration)}`,
      food: `₹${Math.floor(foodCost * duration)}`,
      sightseeing: `₹${Math.floor(sightseeingCost * duration)}`
    },
    sightseeing: selectedPlaces,
    days
  };
};
