import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'   //异步actions处理
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined,
        applyMiddleware(thunkMiddleware,loggerMiddleware )
    )
    return store
}