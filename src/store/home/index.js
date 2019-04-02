import {getHome} from '../../api/api';
export default {
    state:{
        homeList:[],
        homeLists:[]
    },
    mutations:{
        getMutationHomeList(state,params){
            //params.splice(0,3)
            //console.log(params)
             let con  = []
            let arr = con.push(params);
            console.log(arr.splice(0,3))
            
           
            // state.homeLists.push (state.homeList)
             //console.log( state.homeList)
        }
    },
    actions:{
        async getActionsHomeList({commit},params){
            let data = await getHome(params);
            //console.log(typeof data.data);
           commit("getMutationHomeList",data.data)
        }
    },
    namespaced: true
}