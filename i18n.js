document.addEventListener('DOMContentLoaded',() => {
  const select = document.querySelector('select');
  const allLangs = ['ua', 'en', 'ru'];

  select.addEventListener('change', () => {
    changeURLLanguage(select.value);
    changeLanguage(select.value);
  });

  detectLanguage(allLangs, select);
});

function changeLanguage(lang) {
  for (let key in langArr) {
    document.querySelector('.lng-' + key).innerHTML = langArr[key][lang];
  }
}

function changeURLLanguage(lang) {
  const url = new URL(window.location);
  url.hash = lang;
  window.history.pushState({}, '', url);
}

function detectLanguage(allLangs, select) {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLangs.includes(hash)) {
    hash = allLangs[0];
    changeURLLanguage(hash);
  }

  select.value = hash;

  changeLanguage(hash);
}
