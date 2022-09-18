let bars = document.getElementById("bars");
let aside = document.getElementById("aside")
bars.addEventListener('click', function () {
    if (aside.style.display === "none") {
        aside.style.display = "block";
        // aside.style.transform = "translateX(100%)"

    }
    else {
        aside.style.display = "none"
    }
})