const adminKod = document.querySelector(".admin__kod"), 
  students = document.querySelector(".students"), 
  send = document.querySelector(".send"), 
  close = document.querySelector(".close"), 
  notThere = document.querySelector(".notThere"); 
 
let kod = "2020"; 
 
send.addEventListener("click", (e) => { 
  e.preventDefault(); 
  Admin(); 
}); 
 
function Admin() { 
  if (kod === adminKod.value) { 
    students.classList.add("active"); 
  } else { 
    students.classList.remove("active"); 
  } 
} 
 
close.addEventListener("click", function () { 
  students.classList.add("active"); 
}); 
 
const student = document.querySelectorAll(".student"); 
 
student.forEach((stud) => { 
  const plus = stud.querySelector(".plus"); 
  const StudentName = stud.querySelector(".student__name"); 
  const studentNumber = stud.querySelector(".student__number"); 
  console.log(plus); 
  let student = ` 
    <div class="student__notThere"> 
      <p class="student__number"> 
        ${studentNumber.innerHTML} 
      </p> 
      <p class="student__name"> 
        ${StudentName.innerHTML} 
      </p> 
    </div> 
    `; 
  plus.addEventListener("click", function () { 
    notThere.insertAdjacentHTML("beforeend", student); 
  }); 
});
