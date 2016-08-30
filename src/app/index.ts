export { App } from './app';
export { routes } from './routes';
import * as services from './services';
import { Store } from './store'

const mapValueToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    Store,
    ...mapValueToArray(services)
];