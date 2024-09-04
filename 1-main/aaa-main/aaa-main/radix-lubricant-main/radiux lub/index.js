document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
