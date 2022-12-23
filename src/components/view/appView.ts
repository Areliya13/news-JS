import News from './news/news';
import Sources from './sources/sources';
import { Data, DataSources, Info, Language, Source } from '../intrerfaces';
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

    drawNews(data : Data | undefined) : void {
        const values: [Info] | never[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources | undefined) : void {
        const values: [Source] | never[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    drawLanguages(data: Language[]) : void {
        this.languages.draw(data);
    }
}

export default AppView;
