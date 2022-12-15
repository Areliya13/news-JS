import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2485f009a4ab4482936adb0991cdbf26', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
