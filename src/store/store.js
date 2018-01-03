import createStore from "redux-zero";

const initialState = {
    showModal: false
}

const store = createStore(initialState);
export default store;