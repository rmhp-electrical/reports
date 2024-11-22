document.addEventListener("DOMContentLoaded", () => {

  const btn1 = document.getElementById('btn1')
  const btn2 = document.getElementById('btn2')
  let txt = document.getElementById('txt')
  btn1.addEventListener("click", async () => {
    console.log(23);
    txt.innerHTML = "Hello"
  });

  btn2.addEventListener("click", async () => {
    txt.innerHTML = "TATA BYE BYE"
  });
});
