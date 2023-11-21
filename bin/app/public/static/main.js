setInterval(createLeaf, 3000); 
function showLanguageOptions() {
document.querySelector('.language-options').style.display = 'block';
}
function hideLanguageOptions() {
    document.querySelector('.language-options').style.display = 'none';
}
function changeLanguage(lang) {
    console.log(`Selected language: ${lang}`);
    document.querySelector('.language-options').style.display = 'none';
}
function changeLanguage(language) {
    var url;
    if (language === 'ARM') {
        url = '/am';
    } else if (language === 'RUS') {
        url = '/ru';
    } else if (language === 'ENG') {
        url = '/en';
    }
    window.location.href = url;
}
