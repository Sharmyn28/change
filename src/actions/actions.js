import store from '../store/store';
//import { database } from './firebase';

export const open = () => {
    store.setState({
        showModal: true
    });
}

export const close = () => {
    store.setState({
        showModal: false
    });
}