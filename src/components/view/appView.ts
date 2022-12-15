import News from './news/news';
import Sources from './sources/sources';
import { Data, DataSources, Language } from '../intrerfaces';
import Languages from './languages/languages';

export class AppView {
  protected news: News;
  protected sources: Sources;
  protected languages: Languages;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.languages = new Languages();
    }

    drawNews(data : Data | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    drawLanguages(data: Language[]) {
        // const values = data;
        // console.log("!!!!!!!!!!!!!!!!!!!!");
        this.languages.draw(data);
    }
}

export default AppView;
