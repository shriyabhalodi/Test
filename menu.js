
  // Get references to the toggle button and menu items
  var toggleButton = document.getElementById('menu-toggle');
  var menuItems = document.getElementById('menu-items');

  // Add event listener to the toggle button
  toggleButton.addEventListener('click', function() {
    // Toggle the display property of the menu items
    if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'block';
    }
  });
