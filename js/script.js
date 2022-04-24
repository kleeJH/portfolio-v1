// Current page indicator
currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
// console.log(currentLinks);
currentLinks.forEach(
    function(link){
        link.style.color = 'red';
        // link.style.color = 'turquoise';
    }
);

// Accordion interaction
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    // console.log(panel);
    // console.log(this.querySelector("i"));
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector(".fa").innerHTML = "&#xf078;"; // fa fa-chevron-down
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.querySelector(".fa").innerHTML = "&#xf054;"; // fa fa-chevron-right
    }
  });
}

// Back to Top button - Referenced from w3schools.com
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}