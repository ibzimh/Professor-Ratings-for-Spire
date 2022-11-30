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
      for (let i = 0; i < links.length; i++) {
        // (1) NameOfTheProfessor <span style="color:theColor">theRating</span>
        let currentLink_text = links[i].innerHTML.toString();
        // Put all the 'phrases' in (1) into an array and remove ones which are only spaces
        let trimmedNamesArray = currentLink_text.trim().split(" ").filter(entry => entry.trim() !== "");

        // if the professor's name is irregular, ignore it, we can add this functionaility in later
        if (trimmedNamesArray.length !== 2) {
          continue;
        }

        let firstName = trimmedNamesArray[0];
        let lastName = trimmedNamesArray[1];

        //find the professor in the array of objects 'data' for which 'tFName' = firstName and 'tLName' = lastName
        function getProfRating() {
          // get the professor from the data (by their name)
          let professor = data.filter(prof => prof.tFname === firstName && prof.tLname === lastName)
          
          // if no professors with the name have been found then do a more lenient search 
          if (professor.length === 0) {
            // check if a shortened version of the name is displayed (or if last and middle names have been mixed up)
            professor = data.filter(prof => {
              return (prof.tFname.indexOf(firstName) === 0) &&
              (prof.tMiddlename.indexOf(lastName) === 0 || prof.tLname.indexOf(lastName) === 0)
            })
          }
          
          return professor.length > 0 ? professor[0].overall_rating : undefined;
        }

        // call the function ^ 
        let profRating = getProfRating();

        // If there isn't any rating for the professor 
        if (profRating === undefined) {
          profRating = "No rating found!";
        }

        // alas! display the ratings
        if (profRating >= 4) {
          links[i].innerHTML += ` <span style="color:green">${profRating}</span>`;
        } else if (profRating >= 3) {
          links[i].innerHTML += ` <span style="color:orange">${profRating}</span>`;
        } else {
          links[i].innerHTML += ` <span style="color:red">${profRating}</span>`;
        }
      }
    });
}

addRatings();
