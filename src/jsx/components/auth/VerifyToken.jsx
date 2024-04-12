import { baseAxios } from "../../config/Axios";

//Validate token
const VerifyToken = async ()=>{
    //Config request
    const response = await  baseAxios.get('/validate-token', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('t0k3n')}`
        }
    });
    //Auth user
    if(response.status == 200){
        return {
            token: localStorage.getItem('t0k3n'),
            auth: true
        };
    }else{
        return {
            token: '',
            auth: false
        };
    }
}

export { VerifyToken }
    