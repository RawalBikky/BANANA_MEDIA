function loadSection(section) {

  fetch(`sections/${section}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // Run dynamic scripts AFTER loading content
      initConceptSection();
    });

  document.querySelectorAll('.raw-nav a').forEach(link => {
    link.classList.remove('active');
  });

  document
    .querySelector(`.raw-nav a[onclick="loadSection('${section}')"]`)
    ?.classList.add('active');
}

loadSection('home');


// ================================
// CONCEPT SECTION INTERACTION LOGIC
// ================================

function initConceptSection() {
  const buttons = document.querySelectorAll('.learn-btn');

  if (!buttons.length) return;

  buttons.forEach(btn => {

    btn.onclick = () => {

      const card = btn.closest('.concept-card');

      // Close other cards
      document.querySelectorAll('.concept-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });

      // Reset all button labels
      document.querySelectorAll('.learn-btn').forEach(b => {
        b.innerText = "Learn More →";
      });

      // Toggle current
      card.classList.toggle('active');

      if (card.classList.contains('active')) {
        btn.innerText = "Hide Details →";
      }

    };

  });
}