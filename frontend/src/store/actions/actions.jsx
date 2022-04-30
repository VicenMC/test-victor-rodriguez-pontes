import axios from 'axios';

export const ShowContracts =() => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/allContracts');
      if(response?.data){
        dispatch({type: "CONTRACTS", payload: {contracts: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}

export function CreateContracts(inputs) {
   return (dispatch) => {
      axios.post("http://localhost:3001/CreateContract", inputs).then(
         (res) => {
            /*Swal.fire({
               icon: "success",
               title: "Excelente!",
               text: "La pelicula fue agregada correctamente",
            });*/
         },
         (err) => {
            /*Swal.fire({
               icon: "error",
               title: "Error!",
               text: `${err.response}`,
            });*/
         }
      );
   };
}