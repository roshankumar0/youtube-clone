// function myFunction() {
//     var x = document.getElementsByClassName("yt-aside");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "b";
//     }
//   }
let bars = document.getElementById("bars");
let aside = document.getElementById("aside")
bars.addEventListener('click', function () {
    if (aside.style.display === "none") {
        aside.style.display = "block";
    }
    else {
        aside.style.display = "none"
    }
})