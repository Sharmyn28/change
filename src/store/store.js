import createStore from "redux-zero";

const initialState = {
    showModal1: false,
    showModal2: false,
    showModal3: false
}

const store = createStore(initialState);
export default store;