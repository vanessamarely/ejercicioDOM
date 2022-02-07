const container = document.getElementById("container");

container.addEventListener("click", () => console.log("le di click"));

container.classList.add("fondo");

container.addEventListener("mouseenter", () => {
  container.classList.add("hover");
  container.style.color = "aqua";
  container.innerHTML = `<p>Esto es una prueba 🙂</p>`;

  //alert("Hola!");
});

container.addEventListener("mouseleave", () => {
  container.classList.remove("hover");
  container.innerHTML = `<p>Hola mundo! 🙂</p>`;
});
