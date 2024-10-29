let lod = document.querySelector(".loder-svg");
let main = document.querySelector("main");
let homefot = document.querySelector("#fot");

window.addEventListener("load", function() {
    setTimeout(function()  {
        lod.style.display = "none";  
        main.style.display = "block";
        homefot.style.position = "relative";      
    },0);
  
});
