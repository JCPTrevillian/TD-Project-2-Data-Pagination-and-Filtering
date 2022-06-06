/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function: This function will create and insert/append the elements needed to display a "page" of nine students. 
I imagine the number 9 was chosen to ensure there were the maximum number of studentItems per page based on the H/W and aesthetics. 
*/

function showPage(list, page) {
   const itemsPerPage = 9;
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
 
   // select the element with a class of `student-list` and assign it to a variable. 
   let studentList = document.querySelector('.student-list');

   // set the innerHTML property of the variable you just created to an empty string - referenced JavaScripttutorial.net for help 
   studentList.innerHTML =  '';
   
   // loop over the length of the `list parameter' 
   // inside the loop create a conditional to display the proper students
       // inside the conditional: create the elements needed to display all of the student information via template literal. 
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
       let studentItem = 
        `<li class="student=item cf">
           <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="profile picture">
            <h3> ${list[i].name.first} ${list[i].name.last} </h3>
            <span class="e-mail"> ${list[i].email} </span>
           </div>
           <div class="joined-details">
            <span class="date">joined ${list[i].registered.date}</span>
           </div>
         </li> 
         `;
      // insert the above elements
      studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
 }
 
    

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons. 
linkList, innerHTML: textContent. Loop +1 to represent first page, not zero indexed. */

function addPagination(list) {
   const itemsPerPage = 9;
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector('.link-list');
   linkList.textContent = ''; 
      if(numOfPages > 1) {
      for (let i = 1; i < (numOfPages + 1); i++) {
         let linkItem = `
       <li> 
          <button type="button">${i}</button>
      </li>
      `;
            linkList.insertAdjacentHTML('beforeend', linkItem);
         }

         const firstButton = linkList.querySelector('button');
         firstButton.classList.add('active');
      }
   linkList.addEventListener('click', (e) => {
       if (e.target.tagName === 'BUTTON') {
        const activeButton = linkList.querySelector('button.active');
        activeButton.classList.remove('active');
        e.target.className = 'active';
        showPage(list, e.target.textContent);
      }
      
   })
}

// Call functions
showPage(data, 1);
addPagination(data);