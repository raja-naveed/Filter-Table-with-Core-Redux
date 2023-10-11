import { createStore } from 'redux'; // Import createStore directly

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
