import './sources.css';
import { Source } from '../../intrerfaces';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp){
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                sourceClone.querySelector('.source__item-name').textContent = item.name;
                sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.append(fragment);
        }
    }
}

export default Sources;
