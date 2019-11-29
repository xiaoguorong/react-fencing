// import { applyMiddleware, createStore, combineReducers } from 'redux'
// import thunk from 'redux-thunk'

// const tab = 'index';

// function pageTitle (state = defaultState.pageTitle,action) {
//     // 不同的action有不同的处理逻辑
//     switch (action.type) {
//         case 'SET_PAGE_TITLE':
//         return action.data
//         default:
//         return state
//     }
// }

// function user (state = defaultState.user, action){
//     switch (action.type) {
//         case 'SET_USER':
//         return action.data
//         default:
//         return state
//     }
// }
// // 常量修改
// function setPageTitle (data) {
//     return (dispatch) => {
//         dispatch({ type: 'SET_PAGE_TITLE', data: data })
//     }
// }


// // 创建store实例
// let store = createStore(
//     combineReducers({
//         pageTitle,
//         setPageTitle
//     }),
//     applyMiddleware(thunk)
// )
// export default store

