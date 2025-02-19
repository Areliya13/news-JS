import LanguagesData from "./languagesData";

let chosenLanguage = 'en';

function getLanguage() : void {
  const langs: NodeListOf<Element> = document.querySelectorAll('.language__item');
  langs.forEach((el, iter) => {
    el.addEventListener('click', () => {
      langs.forEach(val => {
        val.classList.remove('selected');
      })
      el.classList.add('selected');
      chosenLanguage = LanguagesData[iter].code;
      console.log(chosenLanguage);
    })
  })
}

export { chosenLanguage, getLanguage }