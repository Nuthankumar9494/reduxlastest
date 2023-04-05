export const addData =(data)=>{
    return {
        type:"ADDDATA",
         payload:{data:data}
    }
}

export const addSucess=()=>{
   return { type:"ADDDSUCESS"}
}
export const deleteData =(data)=>{
   return {
    type:"DELETEDATA",
    payload:{name:data}

   }

}
export const editData =()=>{
   return {
    type:"EDITDATA"
   }
}