import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method, body) {
    return axios({
                url : `${Config.URL_API}/${endpoint}`,
                method : method,
                data : body
            }).catch(err => {
                
            });
}
