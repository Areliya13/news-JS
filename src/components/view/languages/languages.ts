import './languages.css';
import { Language } from '../../intrerfaces';

class Languages {
    draw(data: Language[]) : void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const languageItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#languageItemTemp');
        data.forEach((item) => {
            const languageClone: HTMLElement = <HTMLElement>languageItemTemp.content.cloneNode(true);
            const itemNameElement: HTMLElement | null = languageClone.querySelector('.language__item-name');
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }
            const itemElement = languageClone.querySelector('.language__item');
            if (itemElement){
                itemElement.setAttribute('data-language-id', item.id.toString());
            }

            fragment.append(languageClone);
        });

        const languagesElement: HTMLElement | null = document.querySelector('.languages');
        if (languagesElement?.children) {
            languagesElement?.append(fragment);
        }
    }
}

export default Languages;
