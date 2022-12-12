import './news.css';
import { Data } from '../../intrerfaces';
import { Article } from '../../dataTypes';

class News {
    draw(data: [Article] | never[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {

            if (!newsItemTemp) {
                console.log('Error of #newsItemTemp')
            } else {
                const newsClone = newsItemTemp.content.cloneNode(true);

                if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

                newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                newsClone.querySelector('.news__description-title').textContent = item.title;
                newsClone.querySelector('.news__description-source').textContent = item.source.name;
                newsClone.querySelector('.news__description-content').textContent = item.description;
                newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });
        const container = document.querySelector('.news');
        if ( !container ){
            console.log('No such element exists!');
        } else {
            container.innerHTML = '';
            container.appendChild(fragment);
        }
    }
}

export default News;
