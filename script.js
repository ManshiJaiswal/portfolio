let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// let form = document.forms["my-form"];
// form.addEventListener("submit", formSubmit);
// document.getElementById("myForm").addEventListener("submit", formSubmit);

// function formSubmit(event){
//            let Name=document.getElementById("name").value;
//            let Email=document.getElementById("email").value;
//            let Loc=document.getElementById("location").value;
//            let Budget=document.getElementById("budget").value;
//            let Subject=document.getElementById("subject").value;
//            let Message=document.getElementById("message").value;
//            console.log(Name,Email,Loc,Budget,Subject,Message);

//           //  let url='mailto:vishuj8574@gmail?body="Yourbody"&subject="a subject".com'
//            event.preventDefault();
           
// }

// function gotowhatsapp() {
    
//   var name = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var service = document.getElementById("service").value;

//   var url = "https://wa.me/918789529215?text=" 
//   + "Name: " + name + "%0a"
//   + "Phone: " + phone + "%0a"
//   + "Email: " + email  + "%0a"
//   + "Service: " + service; 

//   window.open(url, '_blank').focus();
// }
