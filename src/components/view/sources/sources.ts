import './sources.css';
import { Source } from '../../intrerfaces';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            const itemNameElement = sourceClone.querySelector('.source__item-name');
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }
            const itemElement = sourceClone.querySelector('.source__item');
            if (itemElement){
                itemElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.append(fragment);
        }
    }
}

export default Sources;
