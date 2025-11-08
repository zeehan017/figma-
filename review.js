// Mobile Navbar Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Review Form Submission
document.querySelector('.review-form')?.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const doctor = document.getElementById('doctor').value;
  const rating = document.getElementById('rating').value;
  const review = document.getElementById('review').value;

  if (!name || !doctor || !rating || !review) {
    alert('⚠️ Please fill out all fields.');
    return;
  }

  // Save bookmark locally (simulate)
  const bookmarkGrid = document.getElementById('bookmarkGrid');
  const noBookmarks = document.querySelector('.no-bookmarks');
  if (noBookmarks) noBookmarks.remove();

  const card = document.createElement('div');
  card.classList.add('bookmark-card');
  card.innerHTML = `
    <h3>${doctor}</h3>
    <p>Rated: ${rating} ⭐</p>
    <p>Review: ${review}</p>
    <button class="remove-btn">Remove</button>
  `;
  bookmarkGrid.appendChild(card);

  card.querySelector('.remove-btn').addEventListener('click', () => {
    card.remove();
    if (!bookmarkGrid.querySelector('.bookmark-card')) {
      bookmarkGrid.innerHTML = '<p class="no-bookmarks">No bookmarks yet.</p>';
    }
  });

  // Clear form
  e.target.reset();
  alert('✅ Your review has been submitted and bookmarked!');
});