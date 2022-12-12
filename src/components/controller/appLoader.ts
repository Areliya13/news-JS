import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1fc3f435fe454787bf34734f14b8ceae', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
