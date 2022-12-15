import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { getLanguage } from '../view/languages/chosenLanguage';
import LanguagesData from '../view/languages/languagesData';

class App {
    protected controller;
    protected view;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const element = document.querySelector('.sources')
        if (element){
            element.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));
        } else {
            console.log('No element with class "sources"!');
        }
        this.view.drawLanguages(LanguagesData);
        getLanguage();
    }
}

export default App;
