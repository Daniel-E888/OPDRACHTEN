const searchInput = document.getElementById('search-input');
const articles = document.querySelectorAll('article');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  articles.forEach(article => {
    const title = article.querySelector('h2').textContent.toLowerCase();
    const content = article.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });
});