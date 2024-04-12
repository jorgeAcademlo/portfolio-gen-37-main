const langToggle = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('indexingles.html');
langToggle.checked = currentLang;
function changeLang() {
  if (langToggle.checked) {
    window.location.href = 'indexingles.html';
  } else {
    window.location.href = 'index.html';
  }
}
langToggle.addEventListener('change', changeLang);
export default changeLang;
