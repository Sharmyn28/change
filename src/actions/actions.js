import store from '../store/store';
//import { database } from './firebase';

export const open1 = () => {
    store.setState({
        showModal1: true
    });
}

export const open2 = () => {
    store.setState({
        showModal2: true
    });
}

export const open3 = () => {
    store.setState({
        showModal3: true
    });
}

export const close1 = () => {
    store.setState({
        showModal1: false
    });
}

export const close2 = () => {
    store.setState({
        showModal2: false
    });
}

export const close3 = () => {
    store.setState({
        showModal3: false
    });
}
