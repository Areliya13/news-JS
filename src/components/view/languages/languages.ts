import './languages.css';
import { Language } from '../../intrerfaces';

class Languages {
    draw(data: Language[]) {
        const fragment = document.createDocumentFragment();
        const languageItemTemp = <HTMLTemplateElement>document.querySelector('#languageItemTemp');
        // console.dir(<HTMLElement>languageItemTemp);

        // console.log(data);
        data.forEach((item) => {
          // console.log(item);
            const languageClone = <HTMLElement>languageItemTemp.content.cloneNode(true);
          // console.dir(languageClone);
          const itemNameElement = languageClone.querySelector('.language__item-name');
          // console.dir(itemNameElement);
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }
            const itemElement = languageClone.querySelector('.language__item');
            if (itemElement){
                itemElement.setAttribute('data-language-id', item.id.toString());
            }

            fragment.append(languageClone);
        });

        const languagesElement = document.querySelector('.languages');
        if (languagesElement?.children) {
            languagesElement?.append(fragment);
        }
    }
}

export default Languages;
