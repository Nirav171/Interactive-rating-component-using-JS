
const first = document.querySelector(".first");
const second = document.querySelector(".second");
 const errorMsg = document.querySelector(".unselected");
const submit = document.querySelector(".submit");


first.hidden=false;
second.hidden=true;



submit.addEventListener("click",()=>{
  
  const selectedRating = document.querySelector(".rating-chosen");

  if(!selectedRating){
    const errorMsg = document.querySelector(".unselected");

    errorMsg.textContent = "You must select a rating to proceed..";
    return;
  }
  
  
  first.hidden=true;
  second.hidden=false;
  
  

  const displayRating = document.querySelector(".selected-rating");

  displayRating.textContent = selectedRating.textContent;

})



const ratings = document.querySelectorAll(".ratings > *");

ratings.forEach((rating) => {
  rating.addEventListener("click",() => {
   
    const selectedRating = document.querySelector(".rating-chosen");

    if(selectedRating) selectedRating.classList.remove("rating-chosen");

    if(selectedRating!=rating) rating.classList.add("rating-chosen");
  })})
