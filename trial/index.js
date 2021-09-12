$(function() {
    $('.toggle').on('click', function(){

        if($('.item').hasClass('active')){
            $('.item').removeClass('active')          
        }
        else{
            $('.item').addClass('active')
        }
    })
});

// carousel js
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

// dots controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dota", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dota";
  
  var counter = 1;
  setInterval(function(){
      document.getElementsByClassName('dot' + counter).checked = true;
      counter++;
      if(counter > 4){
          counter = 1;
      }
  }, 2000);
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}