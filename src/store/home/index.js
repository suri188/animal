import {getHome}from '../../api/api'; 
export default {
    state: {
        homeList:[]
    }, 
    mutations: {
        getMutationHomeList(state, params) {
            var arr = []; 
                   
           for (var key in params) {
                if (params[key].index >= 3776000) {
                    arr.push(params[key].data.goods)
                }
            }
             //console.log(arr)
             for (var i = 0; i < arr.length; i++) {
               var res = arr[i]; 
               //console.log(res)
               for (var j = 0; j < res.length; j++) {
                   //console.log(res[j])
                    state.homeList.push(res[j])
               }
             }
             console.log(state.homeList)
        }
    }, 
    actions: {
        async getActionsHomeList( {commit}) {
            let data = await getHome(); 
            //console.log(data.data) 
                            
            commit("getMutationHomeList", data.data)
        }
    }, 
    namespaced:true
}