$(document).ready(function () {
  $('#menu-toggle').on('click', function () {
    $('#side-menu').toggleClass('open');
    // Toggle between hamburger and close icons
    if ($('#side-menu').hasClass('open')) {
      $('#menu-toggle').html('&times;'); // × close icon
    } else {
      $('#menu-toggle').html('&#9776;'); // ☰ hamburger icon
    }
  });

  // Optional: Close menu if a link inside side-menu is clicked
  $('#side-menu a').on('click', function () {
    $('#side-menu').removeClass('open');
    $('#menu-toggle').html('&#9776;'); // Reset to hamburger icon
  });
});

//date function

  // Set the current year dynamically
  document.getElementById("currentYear").textContent = new Date().getFullYear();

