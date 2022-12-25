import { Options, Result } from '../dataTypes'
import { Endpoints } from '../enums'

class Loader {
    protected baseLink: string;
    protected options: Options;

    constructor(baseLink : string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: {endpoint: Endpoints; options?: Options},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) : void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Result) : Result {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoints) : string {
        const urlOptions: Options = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: Endpoints, callback: { (value?: string): void | undefined}, options = {}) : void {
        fetch(this.makeUrl(options, endpoint), { method, headers: { 'Access-Control-Allow-Headers': "*, Authorization", 'Access-Control-Allow-Origin': "https://nodenews.up.railway.app/", 'Access-Control-Allow-Credentials': "true"} })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;