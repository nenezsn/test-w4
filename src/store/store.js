import reduces from './reducer'
import { createStore,combineReducers }  from 'redux'
const store = createStore(combineReducers(reduces))
export default store