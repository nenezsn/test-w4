import reduces from './reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootSaga from './saga'
const reduxSaga = createSagaMiddleware()
const store = createStore(combineReducers(reduces), applyMiddleware(reduxSaga, thunk, reduxPromise, logger))



reduxSaga.run(rootSaga)
export default store