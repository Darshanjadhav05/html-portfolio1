

let about = document.getElementById("about");
let aboutdiv = document.getElementById("aboutsec");
let hero = document.querySelector(".hero");
let close1 = document.getElementById("close");
let contact = document.getElementById("contactme");
let contactdiv = document.getElementById("contact");
let close2 = document.getElementById("close2");

about.addEventListener("click", aboutt);

function aboutt() {
  aboutdiv.style.visibility = "visible";
  aboutdiv.style.transform = "translatey(-60px)";
  aboutdiv.style.opacity = "0px";
  hero.style.filter = "blur(5px)";
  aboutdiv.style.transition = "0.3s";
  contactdiv.style.visibility = "hidden";
}

close1.addEventListener("click", function () {
  aboutdiv.style.transform = "translatey(-50px)";
  aboutdiv.style.opacity = "0px";
  hero.style.filter = "blur(0)";
  aboutdiv.style.transition = "0.3s";
  aboutdiv.style.visibility = "hidden";
 
});

contact.addEventListener("click", contactt);
function contactt() {
  contactdiv.style.transform = "translatey(-70px)";
  contactdiv.style.transition = "0.3s";
  hero.style.filter = "blur(5px)";
  contactdiv.style.visibility = "visible";
  aboutdiv.style.visibility = "hidden";
}

close2.addEventListener("click", function () {
  contactdiv.style.transform = "translatey(-50px)";
  contactdiv.style.transition = "0.3s";
  hero.style.filter = "blur(0)";
  contactdiv.style.visibility = "hidden";
});
