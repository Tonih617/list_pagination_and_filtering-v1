//create my global varibles//
const page = document.querySelector('.page'); //create page function
const studentList = document.querySelectorAll('.student-item'); //storing studentList as Student-item
const maxPerPage = 10; //storing pages at max of 10
let totalPages; 
const div = document.createElement('div'); //creating a div element

//create a show page function//
  showPage = (list, page) => { //creating the show page function
      let start =((page -1) * maxPerPage); //creating a page parameter to load the page number at 1  
      let end = ((start + maxPerPage) - 1); //executing a parameter to end the page with last student
      for (let i = 0; i < list.length; i += 1) { //creating a loop for the show page function that will show only the max amount of students on each page  
         list[i].style.display = 'none'; 
         if (i >= start && i <= end) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   };
  // hide students//
  for (let i = 0; i < studentList.length; i +=1) {//creating a function to hide all "studentList" elements on the page 
  
   studentList[i].classList.add('no-display'); // creating a function to only display listed items
 }
   
  // if there are no students// (for search function)(not fully executed,I plan to add at a later date)
  if (studentList.length === 0) { //creating a function if not students are found for search (extra credit not started yet)
    let noStudent = '<h3 class="no-match">No Matching Students Found</h3>';
    let sibling = document.querySelector('.student-list');
    sibling.insertAdjacentHTML('afterEnd', noStudent);
  } else {
  
    if (parseInt(totalPages) === maxPerPage) {
      for (let i = ((totalPages * 10) - 10); i < ( (totalPages * 10) - 10 + (students.length % 10) ); i += 1 ) {
        students[i].classList.remove('no-display');
      }
       }else{
      
      // show first 10 students on first page//
      
      for (let i = ((totalPages * 10) - 10); i <= ((totalPages * 10) - 1); i += 1 ) {//creating a function to only display ten students on each page
        students[i].classList.remove();
      }
    }
  }
    // Append page links function//
   appendPageLinks = (list) => {//creating a pagination function or what I call list buttons that will show numbered pages at bottom of the student list 
      
      if (document.querySelector('.pagination')) { 
         removePag = document.querySelector('.pagination')
         removePag.parentNode.removeChild(removePag);
      }

      let pageNum = Math.ceil(list.length / maxPerPage); //creating a max page number depending on how many students in list
      const pagination = document.createElement('div'); //creating a "div" element to be the parent node to the "ul" 
      const pagUl = document.createElement('ul');//creating a "ul" element 
      pagination.className = 'pagination';//calling the pagination function using its class name to append to the page element
      page.appendChild(pagination);
      pagination.appendChild(pagUl);

   // append li elements based on number of pages it may use//
for (let i = 1; i < pageNum + 1; i += 1) {//creating a function to start the pagination filter on number one
   let liContent = "";
   if(i == 1) {//if page is selected the listed button should be blue 
      
   liContent = `
   <li>
   <a href="#" class="active">${i}</a>
   </li>
   `;
   }else{ //if page is not selected the listed button should be white 
   liContent = `
   <li>
   <a href="#">${i}</a>
   </li>
   `;
   }
   pagUl.innerHTML += liContent;
   };


   // add eventListener on the page links//
   let paginationLi = document.querySelectorAll('.pagination li');//create the element "paginationLi"
   for (let i = 0; i <pageNum; i += 1) {  
   paginationLi[i].addEventListener('click', function(event) {//creating a event listener so when selected button is clicked listed items are displayed
   pageNum = event.target.innerHTML;


   //create a (event.target) function for "showPage" that adds the class "active" to selected links//
   showPage(studentList,i+1);//creating the "showPage" function that will run and display the list of students for that page
   removeAllActive();
   event.target.classList.add("active");//creating a (event.target)function so when listed button is clicked, the clicked element will then add the class of "active" 
   });
   }
   }
    
//create a function to remove the "active" status on links not being used//
  const removeAllActive =() => {//store varible "removeAllActive" 
  const AllLinks =  document.querySelectorAll('.pagination a'); //selecting the "allLinks" attribute to return a list of all listed items within the ID ".pagination a"
  for (let link of AllLinks){
     link.classList.remove("active");//if button is not selected, "active" will be removed from all unselected links 
     console.log(link);
  }

}
//execute first page//
  appendPageLinks(studentList);//function calls page to load with first student on page one
  showPage(studentList,1);
