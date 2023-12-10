import { CarType } from "../types";
import { filterType } from "../types";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '664ccf6e18msh54bd607bc872cc2p10e69ajsn6be2508c5987',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

 export async function fetchCars (filters:filterType):Promise<CarType[]> {
    const {
      make="honda", 
      model="", 
      limit="5", 
      year="", 
      fuel_type=""} = filters
   const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,options)
    return await res.json()
 }