import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    //state - 状态
    state: {
        name: '张三',
        age: 18,
        numList: [1, 2, 3, 4, 5, 6],
        peopleList: []
    },

    //mutations - 改变状态的唯一途径
    mutations: {
        changeName(state, obj) {
            state.name = obj.name
        },

        changeName2(state) {

        },

        refreshPeople(state, obj) {
            state.peopleList = obj.data;
        }
    },

    

    //getters - 计算衍生属性
    getters: {
        doubleNum(state) {
            return state.numList.filter(num => num % 2 == 0)
        }
    },


    //actions - 专门处理异步的通知
    actions: {
        refreshPeople(context) {

            axios.post('http://127.0.0.1:3000/refreshPeople', {
                    nowpage: 1,
                    pagecell: 10
            }).then(function (msg) {
                console.log(msg.data.rows)

                //拿到数据以后，提交mutations，改变状态
                context.commit({
                    type: 'refreshPeople',
                    data: msg.data.rows
                })
                console.log(state.peopleList)
            })

        }
    }

})
