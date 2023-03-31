//coloca reticências nos cards que ultrapassam o limite
const elements = document.querySelectorAll('.three-dots p');
const LIMIT = 87;

for (let p of elements) {
  const aboveLimit = p.innerText.length > LIMIT
  const dotsOrEmpty = aboveLimit ? '...' : ''
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
}