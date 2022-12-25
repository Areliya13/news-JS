import Loader from './loader';

const key: string = '2485f009a4ab4482936adb0991cdbf26';
const key2: number = 0x4482936adb09;
const key3: number = 0x91cdbf26;

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: key,
        });
    }
}

export default AppLoader;
