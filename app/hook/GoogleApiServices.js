import axios from "axios"

// const validateCoordinates = (lat, lng) => {
//   const validLat = parseFloat(lat);
//   const validLng = parseFloat(lng);
//   if (isNaN(validLat) || isNaN(validLng)) {
//       throw new Error('Invalid coordinates: coordinates must be numbers');
//   }
//   if (validLat < -90 || validLat > 90) {
//       throw new Error('Invalid latitude: must be between -90 and 90');
//   }
//   if (validLng < -180 || validLng > 180) {
//       throw new Error('Invalid longitude: must be between -180 and 180');
//   }
//   return { validLat, validLng };
// };

// const calculateDistanceAndTime = async (startLat, startLng, destinationLat, destinationLng) => {
//   try {
//       // Validate all coordinates
//       const start = validateCoordinates(startLat, startLng);
//       const dest = validateCoordinates(destinationLat, destinationLng);

//       // Check if the distance between points is too large for OSRM cycling route
//       const R = 6371; // Earth's radius in km
//       const dLat = (dest.validLat - start.validLat) * Math.PI / 180;
//       const dLon = (dest.validLng - start.validLng) * Math.PI / 180;
//       const a = 
//           Math.sin(dLat/2) * Math.sin(dLat/2) +
//           Math.cos(start.validLat * Math.PI / 180) * Math.cos(dest.validLat * Math.PI / 180) * 
//           Math.sin(dLon/2) * Math.sin(dLon/2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//       const distance = R * c;

//       // If distance is greater than 150km, return approximate calculation
//       // OSRM bicycle routing typically works best for shorter distances
//       if (distance > 150) {
//           const averageSpeed = 15; // km/h for bicycle
//           const durationInHours = distance / averageSpeed;
//           const durationInMinutes = Math.round(durationInHours * 60);
//           const prepTime = 15;
//           const totalDuration = durationInMinutes + prepTime;
//           const ratePerKm = 1;
//           const price = distance * ratePerKm;

//           return {
//               distance: `${distance.toFixed(1)} km`,
//               duration: `${totalDuration} mins`,
//               finalPrice: `$${price.toFixed(2)}`,
//               raw: {
//                   distanceInKm: distance,
//                   durationInMinutes: totalDuration
//               },
//               approximated: true
//           };
//       }

//       // OSRM expects coordinates in format: lon,lat
//       const coordinates = `${start.validLng},${start.validLat};${dest.validLng},${dest.validLat}`;
//       const url = `https://router.project-osrm.org/route/v1/bicycle/${coordinates}?overview=false`;
//       console.log('OSRM URL:', url);

//       const response = await fetch(url);
      
//       if (!response.ok) {
//           const errorText = await response.text();
//           console.error('OSRM Response:', errorText);
          
//           // If route is impossible, fall back to straight-line distance
//           if (errorText.includes('Impossible route')) {
//               throw new Error('FALLBACK_TO_STRAIGHT_LINE');
//           }
          
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (data.code !== 'Ok' || !data.routes || !data.routes[0]) {
//           console.error('OSRM Data:', data);
//           throw new Error('FALLBACK_TO_STRAIGHT_LINE');
//       }

//       const route = data.routes[0];
//       const distanceInKm = route.distance / 1000;
//       const durationInMinutes = Math.round(route.duration / 60);
      
//       const prepTime = 15; // 15 minutes for food prep
//       const totalDuration = durationInMinutes + prepTime;
      
//       const ratePerKm = 1;
//       const price = distanceInKm * ratePerKm;

//       return {
//           distance: `${distanceInKm.toFixed(1)} km`,
//           duration: `${totalDuration} mins`,
//           finalPrice: `$${price.toFixed(2)}`,
//           raw: {
//               distanceInKm,
//               durationInMinutes: totalDuration
//           }
//       };
//   } catch (error) {
//       console.error("Distance calculation failed:", error.message);
      
//       // If OSRM fails, fall back to straight-line distance calculation
//       if (error.message === 'FALLBACK_TO_STRAIGHT_LINE') {
//           const R = 6371; // Earth's radius in km
//           const dLat = (dest.validLat - start.validLat) * Math.PI / 180;
//           const dLon = (dest.validLng - start.validLng) * Math.PI / 180;
//           const a = 
//               Math.sin(dLat/2) * Math.sin(dLat/2) +
//               Math.cos(start.validLat * Math.PI / 180) * Math.cos(dest.validLat * Math.PI / 180) * 
//               Math.sin(dLon/2) * Math.sin(dLon/2);
//           const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//           const distance = R * c;

//           // Estimate duration based on average cycling speed
//           const averageSpeed = 15; // km/h
//           const durationInHours = distance / averageSpeed;
//           const durationInMinutes = Math.round(durationInHours * 60);
//           const prepTime = 15;
//           const totalDuration = durationInMinutes + prepTime;
//           const ratePerKm = 1;
//           const price = distance * ratePerKm;

//           return {
//               distance: `${distance.toFixed(1)} km`,
//               duration: `${totalDuration} mins`,
//               finalPrice: `$${price.toFixed(2)}`,
//               raw: {
//                   distanceInKm: distance,
//                   durationInMinutes: totalDuration
//               },
//               approximated: true
//           };
//       }
//       throw error;
//   }
// };
const validateCoordinates = (lat, lng) => {
  const validLat = parseFloat(lat);
  const validLng = parseFloat(lng);

  if (isNaN(validLat) || isNaN(validLng)) {
      throw new Error('Invalid coordinates: coordinates must be numbers');
  }

  if (validLat < -90 || validLat > 90) {
      throw new Error('Invalid latitude: must be between -90 and 90');
  }

  if (validLng < -180 || validLng > 180) {
      throw new Error('Invalid longitude: must be between -180 and 180');
  }

  return { validLat, validLng };
};

const calculateDistanceAndTime = async (startLat, startLng, destinationLat, destinationLng) => {
  try {
      // Validate all coordinates
      const start = validateCoordinates(startLat, startLng);
      const dest = validateCoordinates(destinationLat, destinationLng);

      // OSRM expects coordinates in format: lon,lat (note the order!)
      // and uses 'bicycle' as the profile name
      const coordinates = `${start.validLng},${start.validLat};${dest.validLng},${dest.validLat}`;
      const url = `https://router.project-osrm.org/route/v1/bicycle/${coordinates}?overview=false`;

      console.log('OSRM URL:', url); // For debugging

      const response = await fetch(url);
      
      if (!response.ok) {
          const errorText = await response.text();
          console.error('OSRM Response:', errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.code !== 'Ok' || !data.routes || !data.routes[0]) {
          console.error('OSRM Data:', data);
          throw new Error('No route found');
      }

      const route = data.routes[0];
      const distanceInKm = route.distance / 1000;
      const durationInMinutes = Math.round(route.duration / 60);
      
      // Adjust cycling speed for more realistic delivery times
      // Add extra time for food preparation and handling
      const prepTime = 15; // 15 minutes for food prep
      const totalDuration = durationInMinutes + prepTime;
      
      const ratePerKm = 1;
      const price = distanceInKm * ratePerKm;

      return {
          distance: `${distanceInKm.toFixed(1)} km`,
          duration: `${totalDuration} mins`,
          finalPrice: `$${price.toFixed(2)}`,
          raw: {
              distanceInKm,
              durationInMinutes: totalDuration
          }
      };
  } catch (error) {
      console.error("Distance calculation failed:", error.message);
      // Provide more specific error messages
      if (error.message.includes('No route found')) {
          throw new Error('Cannot find a bicycle route between these locations');
      }
      throw error;
  }
};
// const calculateDistanceAndTime = async (startLat, startLng, destinationLat, destinationLng, mode = 'bicycling') => {
//     const apiKey = "AIzaSyAftJjsXOlEZi5T_pkybS1EPCW9olio1uI"; 
//     const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?";
//     const ratePerKm = 1; 

//     const requestUrl = `${baseUrl}origins=${startLat},${startLng}&destinations=${destinationLat},${destinationLng}&mode=${mode}&key=${apiKey}`;

//     try {
//         const response = await fetch(requestUrl);
//         const data = await response.json();


//         // Ensure the request was successful and there are results
//         if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
//             const distance = data.rows[0].elements[0].distance.text;
//             const duration = data.rows[0].elements[0].duration.text;

//             const distanceInKm = parseFloat(distance.replace(' km', ''));
//             const price = distanceInKm * ratePerKm;
//             const finalPrice = `$${price.toFixed(2)}`

//             return {
//                 distance,
//                 duration,
//                 finalPrice
//             };
//         } else {
//             console.error("Error calculating distance and duration:", data.status);
//             return null;
//         }
//     } catch (error) {
//         console.error("Failed to calculate distance and duration:", error);
//         return null;
//     }
// }

const extractNumbers = (inputStr) =>{
    if (typeof inputStr !== 'string') {
        return [];
    }
    const matched = inputStr.match(/\d+/g);
    return matched ? matched.map(num => parseInt(num, 10)) : [];
}


const fetchDirections = async (
    startLat,
    startLng,
    destinationLat,
    destinationLng
  ) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${destinationLat},${destinationLng}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json().then((data) => {
        setDirections(data);
        const encodedPolyline = data.routes[0].overview_polyline.points;
        const coordinates = decode(encodedPolyline);

        setCoordinates(coordinates);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const decode = (encoded) => {
    const points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let shift = 0,
        result = 0;
      let byte;
      do {
        byte = encoded.charCodeAt(index++) - 63; // <-- we use charCodeAt method, not a 'char' property
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += deltaLat;

      shift = 0;
      result = 0;
      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += deltaLng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }

    return points;
  };



export default {
    calculateDistanceAndTime,
    extractNumbers
}




