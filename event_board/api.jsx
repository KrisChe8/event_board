import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchAllApiEvents = ({ sizeShow }) => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=${sizeShow}&countryCode=GB&apikey=${apiKey}`
    )
    .then((response) => {
      return response.data;
    });
};
