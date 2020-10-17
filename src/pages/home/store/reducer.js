import { fromJS } from 'immutable'

// fromJS方法将对象转化为 immutable对象，immutable对象一旦创建就不能再改变，使用旧数据创建新数据，保证旧数据不变且可以用
const defaultState = fromJS({
    topicList: [{
        "id": 1,
        "title": "社会热点",
        "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }, {
        "id": 2,
        "title": "手绘",
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }]
})

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}