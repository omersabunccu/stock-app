// address => lat, long
// lat, long => address
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDRLJgnliNAb--ErzY0HMbKfDMytV8TIrI");
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

// Get latitude & longitude from address.
// Geocode.fromAddress("Eiffel Tower").then(
//     (response) => {
//         const {lat, lng } = response.results[0].geometry.location
//         console.log(lat, lng);
//     }
//     (error) => {
//         console.log(error);
//     }
// )

export async function geocode(address) {
  const res = await Geocode.fromAddress(address);
  const { lat, lng } = res.results[0].geometry.location;
  console.log(lat, lng);
}
