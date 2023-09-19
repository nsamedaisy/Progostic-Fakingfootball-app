// import React, { useState, useContext } from "react";
// import { MyContext } from "../MyContext";

// export const SearchBar = () => {
//   const myContext = useContext(MyContext);
//   const teams = myContext.data;
//   const [searchInput, setSearchInput] = useState("");

//   // const searchTeams = teams.filter(
//   //   (team) =>
//   //     team.countries.country.toLowerCase().includes(searchInput) ||
//   //     team.clubs.name.toLowerCase(searchInput)
//   // );
//   // const teamsToDisplay = searchInput ? searchTeams : teams;

//   // const handleChange = (e) => {
//   //   e.preventDefault();
//   //   setSearchInput(e.target.value);
//   // };
//   console.log(searchInput);
//   if (searchInput.length > 0) {
//     teams.countries.filter((country) => {
//       return country.country.match(searchInput);
//     });
//   }

//   if (searchInput.length > 0) {
//     teams.clubs.filter((country) => {
//       return country.name.match(searchInput);
//     });
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         id="search"
//         placeholder="Search here"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
//       />
//     </div>
//   );
// };

// // export default SearchBar;
