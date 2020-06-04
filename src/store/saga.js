import {call, put, takeEvery} from 'redux-saga/effects';     // 引入相关函数

function* goAge(action){    // 参数是action创建函数返回的action
    yield put({      // dispatch一个action到reducer， payload是请求返回的数据
        type: 'ADD_PRICE',
    })
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery('ADDE', goAge)   // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga;