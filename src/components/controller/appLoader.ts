import Loader from './loader';

const key1: number = 0x2485f009a4ab;
const key2: number = 0x4482936adb09;
const key3: number = 0x91cdbf26;

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: key1.toString(16).concat(key2.toString(16), key3.toString(16)),
        });
    }
}

export default AppLoader;
