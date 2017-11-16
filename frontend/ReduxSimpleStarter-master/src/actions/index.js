import axios from 'axios';

export  const CREATE_USER = 'create_user';

const ROOT_URL = 'http://localhost:1337';


export  function createUser(values){
    console.log(values);
    const request = axios.post(`${ROOT_URL}/signup`, values);

    return{
        type: CREATE_USER,
        payload: request
    };
}