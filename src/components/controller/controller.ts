import AppLoader from './appLoader';
import {Endpoints} from '../enums'
import {Data} from '../intrerfaces'
import { Callback } from '../dataTypes';

class AppController extends AppLoader {
    getSources(callback: (Callback<Data> | undefined)) {
        super.getResp(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (Callback<Data> | undefined)) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            // if (target){
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (sourceId)
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: Endpoints.everything,
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    return;
                }
                // if (target)
                target = target.parentNode;
            // }
        }
    }
}

export default AppController;
