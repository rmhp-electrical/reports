document.addEventListener("DOMContentLoaded", () => {
  const todayLink = document.querySelector('.nav-link.active'); // Today link
  const yesterdayLink = document.querySelectorAll('.nav-link')[1]; // Yesterday link
  const contentDiv = document.getElementById('content_div');

  // Function to fetch and set the content from a file
  async function loadContent(file) {
    try {
      const response = await fetch(file);
      if (response.ok) {
        const text = await response.text();
        contentDiv.innerHTML = text; // Set content to content_div
      } else {
        contentDiv.innerHTML = "Error: Could not load content.";
      }
    } catch (error) {
      contentDiv.innerHTML = `Error: ${error.message}`;
    }
  }

  // Load today's content by default on page load
  loadContent('today.txt');

  // Event listeners for navigation links
  todayLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    loadContent('today.txt');
    updateActiveLink(todayLink);
  });

  yesterdayLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    loadContent('yesterday.txt');
    updateActiveLink(yesterdayLink);
  });

  // Function to update the active class for navigation links
  function updateActiveLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }
});
