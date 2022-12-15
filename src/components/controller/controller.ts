import AppLoader from './appLoader';
import {Endpoints, Languages} from '../enums'
import {Data} from '../intrerfaces'
import { Callback } from '../dataTypes';
// import LanguagesData from '../view/languages/languagesData';
import { chosenLanguage } from '../view/languages/chosenLanguage';


class AppController extends AppLoader {
    // _chosenLanguage: string = 'en';

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
                                    language: chosenLanguage,
                                },
                            },
                            callback
                        );
                    }
                return;
            }
            if (target.parentNode) {
                target = <HTMLElement>target.parentNode;
            }
        }
    }
}

export default AppController;
