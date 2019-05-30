//create my global varibles//
const page = document.querySelector('.page');
const studentList = document.querySelectorAll('.student-item'); 
const maxPerPage = 10; 
let totalPages; 
const div = document.createElement('div'); 

//create a show page function//
  showPage = (list, page) => {
      let start =((page -1) * maxPerPage);
      let end = ((start + maxPerPage) - 1);
      for (let i = 0; i < list.length; i += 1) {
         list[i].style.display = 'none';
         if (i >= start && i <= end) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   };
  // hide students//
  for (let i = 0; i < studentList.length; i +=1) {
   studentList[i].classList.add('no-display');
 }
   
  // if there are no students//
  if (studentList.length === 0) {
    let noStudent = '<h3 class="no-match">No Matching Students Found</h3>';
    let sibling = document.querySelector('.student-list');
    sibling.insertAdjacentHTML('afterEnd', noStudent);
  } else {
  
    if (parseInt(totalPages) === maxPerPage) {
      for (let i = ((totalPages * 10) - 10); i < ( (totalPages * 10) - 10 + (students.length % 10) ); i += 1 ) {
        students[i].classList.remove('no-display');
      }
    } else {
      
      // show first 10 students on first page//
      
      for (let i = ((totalPages * 10) - 10); i <= ((totalPages * 10) - 1); i += 1 ) {
        students[i].classList.remove();
      }
    }
  }
    // Append page links function//
   appendPageLinks = (list) => {
      
      if (document.querySelector('.pagination')) {
         removePag = document.querySelector('.pagination')
         removePag.parentNode.removeChild(removePag);
      }

      const pageNum = Math.ceil(list.length / maxPerPage);
      const pagination = document.createElement('div');
      const pagUl = document.createElement('ul');
      pagination.className = 'pagination';
      page.appendChild(pagination);
      pagination.appendChild(pagUl);
     
      // append li elements based on number of pages it may use//
      for (let i = 1; i < pageNum + 1; i += 1) {
         let liContent = `
         <li>
         <a href="#">${i}</a>
         </li>
         `;
         pagUl.innerHTML += liContent; 
         };
        
    // add eventListener on the page links//
    let paginationLi = document.querySelectorAll('.pagination li');
    for (let i = 0; i <pageNum; i += 1) {
      paginationLi[i].addEventListener('click', function(event) {
        pageNum = event.target.innerHTML;
        //showPage(pageNumber);
        showPage(studentList, 1);
        
      });
    }
  }
  appendPageLinks(studentList);