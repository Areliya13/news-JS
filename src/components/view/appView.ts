import News from './news/news';
import Sources from './sources/sources';
import { Data, DataSources } from '../intrerfaces';

export class AppView {
  protected news: News;
  protected sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data : Data | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
