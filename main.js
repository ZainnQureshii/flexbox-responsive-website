function toggleDropdown() {
  var navbarToggle = document.getElementById('nav-toggle');
  if (navbarToggle.className === 'topnav') {
    navbarToggle.className += ' responsive';
  } else {
    navbarToggle.className = 'topnav';
  }
  
}