
  let navMenu = document.getElementById("navigation");
  // Change click to something else for hover
  navMenu.addEventListener('mouseover', makeDropdown);

  function makeDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('nav clicked');
  }

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }