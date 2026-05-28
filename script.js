```javascript
console.log("🎬 MovieFlix Loaded Successfully");

/* Heart Toggle */

const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((heart) => {

  heart.addEventListener("click", () => {

    heart.classList.toggle("fa-solid");

    heart.style.color = "#ff2e63";

  });

});
```
