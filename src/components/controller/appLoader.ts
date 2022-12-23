import Loader from './loader';

const key: string = '2485f009a4ab4482936adb0991cdbf26';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: key,
        });
    }
}

export default AppLoader;
