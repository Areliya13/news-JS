import './sources.css';
import { Source } from '../../intrerfaces';

class Sources {
    draw(data: Source[]) : void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        console.dir(sourceItemTemp);
        data.forEach((item) => {
            const sourceClone: HTMLElement = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            const itemNameElement = sourceClone.querySelector('.source__item-name');
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }
            const itemElement: HTMLElement | null = sourceClone.querySelector('.source__item');
            if (itemElement){
                itemElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesElement: HTMLElement | null = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.append(fragment);
        }
    }
}

export default Sources;
