const initialState ={list:[{name:"lawda1"},{name:"lawda2"}]}

const todoFunctionalities =(state=initialState,action)=>{
    switch (action.type){
        case "ADDDATA" : 
        const {data}=action.payload;
       
        return {
            ...state, 
            list:[...state.list,
                {
                 name:data
            }]
        }
        case "DELETEDATA":
            const {name} =action.payload;
            let remaining = state.list.filter(data => data.name !== name);
            return{
                ...state,
                list:remaining
            }
        case "EDITDATA":
            
            const find =state.list.find((name)=>name.name === action.name);
            return{
                ...state,
               list:find
            }
        default: return state;
    }
}
export default  todoFunctionalities