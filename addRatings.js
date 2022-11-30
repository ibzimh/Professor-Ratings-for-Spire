function addRatings() {
  // gets the name of the professors
  let links = document.querySelectorAll('[href*="mailto:"]');
  // the json with the professor's ratings
  let url =
    "https://raw.githubusercontent.com/ibzimh/UMA_RMP_Data/main/professorsJSON.json";

  fetch(url)
    .then((response) => response.json())
    .then(data => {
      // iterate through all links
      for (const link of links) {
        // (1) NameOfTheProfessor <span style="color:theColor">theRating</span>
        let current_link = link.innerHTML.toString();
        // Put all the 'phrases' in (1) into an array and remove ones which are only spaces
        let names_array = current_link.trim().split(" ").filter(entry => entry.trim() !== "");

        let first_name = names_array[0];
        let last_name = names_array[1];

        //find the professor in the array of objects 'data' for which 'tFName' = firstName and 'tLName' = lastName
        function getProfRating() {
          // get the professor from the data (by their name)
          let professor = data.filter(prof => prof.tFname === first_name && prof.tLname === last_name)
          
          // if no professors with the name have been found then do a more lenient search 
          if (professor.length === 0) {
            // check if a shortened version of the name is displayed (or if last and middle names have been mixed up)
            professor = data.filter(prof => {
              return (prof.tFname.indexOf(first_name) === 0) &&
              (prof.tMiddlename.indexOf(last_name) === 0 || prof.tLname.indexOf(last_name) === 0)
            })
          }
          
          return professor.length > 0 ? professor[0].overall_rating : undefined;
        }

        // call the function ^ 
        let prof_rating = getProfRating();

        // If there isn't any rating for the professor 
        if (prof_rating === undefined) {
          prof_rating = "No rating found!";
        }

        // alas! display the ratings
        if (prof_rating >= 4) {
          link.innerHTML += ` <span style="color:green">${prof_rating}</span>`;
        } else if (prof_rating >= 3) {
          link.innerHTML += ` <span style="color:orange">${prof_rating}</span>`;
        } else {
          link.innerHTML += ` <span style="color:red">${prof_rating}</span>`;
        }
      }
    });
}

addRatings();
