/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
 */
function getSlowestVehicleOrStarshipName(character) {
   if ((!character.vehicles || character.vehicles.length === 0) &&
      (!character.starships || character.starships.length === 0)) {
      return "none";
   }

   let getSlowest = (slowBoy, transport) => {
      let speed = Number.parseInt(transport.max_atmosphering_speed);
      let slowSpeed = Number.parseInt(slowBoy.max_atmosphering_speed);

      if (!Number.isInteger(speed)) {
         return slowBoy;
      }

      if (speed >= slowSpeed) {
         return slowBoy;
      }

      return transport;
   };

   let initTransport = {max_atmosphering_speed: Number.MAX_SAFE_INTEGER.toString()};
   let slowestVehicle = character.vehicles.reduce(getSlowest, initTransport);
   let slowestStarShip = character.starships.reduce(getSlowest, initTransport);
   let vehicleSpeed = Number.parseInt(slowestVehicle.max_atmosphering_speed);
   let starshipSpeed = Number.parseInt(slowestStarShip.max_atmosphering_speed);

   return (starshipSpeed <= vehicleSpeed)? slowestStarShip.name : slowestVehicle.name;
}



// let data = {
//    "name": "Luke Skywalker",
//    "height": "172",
//    "mass": "77",
//    "hair_color": "blond",
//    "skin_color": "fair",
//    "eye_color": "blue",
//    "birth_year": "19BBY",
//    "homeworld": "Tatooine",
//    "films": [
//       "A New Hope",
//       "The Empire Strikes Back",
//       "Return of the Jedi",
//       "Revenge of the Sith",
//       "The Force Awakens"
//    ],
//    "species": [
//       "Human"
//    ],
//    "vehicles": [
//       {
//          "name": "Snowspeeder",
//          "model": "t-47 airspeeder",
//          "manufacturer": "Incom corporation",
//          "cost_in_credits": null,
//          "length": "4.5",
//          "max_atmosphering_speed": "650",
//          "crew": 2,
//          "passengers": 0,
//          "cargo_capacity": "10"
//       },
//       {
//          "name": "Imperial Speeder Bike",
//          "model": "74-Z speeder bike",
//          "manufacturer": "Aratech Repulsor Company",
//          "cost_in_credits": "8000",
//          "length": "3",
//          "max_atmosphering_speed": "360",
//          "crew": 1,
//          "passengers": 1,
//          "cargo_capacity": "4"
//       }
//    ],
//    "starships": [
//       {
//          "name": "X-wing",
//          "model": "T-65 X-wing",
//          "manufacturer": "Incom Corporation",
//          "cost_in_credits": 149999,
//          "length": "12.5",
//          "max_atmosphering_speed": "1050",
//          "crew": 1,
//          "passengers": 0,
//          "cargo_capacity": "110",
//          "consumables": "1 week",
//          "hyperdrive_rating": "1.0",
//          "MGLT": "100",
//          "starship_class": "Starfighter"
//       },
//       {
//          "name": "Imperial shuttle",
//          "model": "Lambda-class T-4a shuttle",
//          "manufacturer": "Sienar Fleet Systems",
//          "cost_in_credits": 240000,
//          "length": "20",
//          "max_atmosphering_speed": "850",
//          "crew": 6,
//          "passengers": 20,
//          "cargo_capacity": "80000",
//          "consumables": "2 months",
//          "hyperdrive_rating": "1.0",
//          "MGLT": "50",
//          "starship_class": "Armed government transport"
//       }
//    ],
//    "created": "2014-12-09T13:50:51.644000Z",
//    "edited": "2014-12-20T21:17:56.891000Z",
//    "url": "https://swapi.co/api/people/1/"
// };

let data = {
   "name": "Leia Organa",
   "height": "150",
   "mass": "49",
   "hair_color": "brown",
   "skin_color": "light",
   "eye_color": "brown",
   "birth_year": "19BBY",
   "gender": "female",
   "homeworld": "Alderaan",
   "films": [
       "A New Hope",
       "The Empire Strikes Back",
       "Return of the Jedi",
       "Revenge of the Sith",
       "The Force Awakens"
   ],
   "species": [
       "Human"
   ],
   "vehicles": [
     {
       "name": "Imperial Speeder Bike",
       "model": "74-Z speeder bike",
       "manufacturer": "Aratech Repulsor Company",
       "cost_in_credits": 8000,
       "length": "3",
       "max_atmosphering_speed": "360",
       "crew": 1,
       "passengers": 1,
       "cargo_capacity": "4"
     }
   ],
   "starships": [],
   "created": "2014-12-10T15:20:09.791000Z",
   "edited": "2014-12-20T21:17:50.315000Z",
   "url": "https://swapi.co/api/people/5/"
 };

console.log(getSlowestVehicleOrStarshipName(data));