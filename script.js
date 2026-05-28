```javascript
console.log("🎬 MovieFlix PRO Loaded");

/* Cursor Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

/* Trailer Modal */

const modal = document.querySelector(".modal");

const trailerBtn =
  document.querySelector(".trailer-btn");

const closeBtn =
  document.querySelector(".close-btn");

trailerBtn.addEventListener("click", ()=>{

  modal.style.display = "flex";

});

closeBtn.addEventListener("click", ()=>{

  modal.style.display = "none";

});

/* Auto Slider */

const slider = document.querySelector(".slider");

let scrollAmount = 0;

setInterval(()=>{

  scrollAmount += 300;

  if(
    scrollAmount >= slider.scrollWidth
  ){
    scrollAmount = 0;
  }

  slider.scrollTo({
    left:scrollAmount,
    behavior:"smooth"
  });

},3000);
```
