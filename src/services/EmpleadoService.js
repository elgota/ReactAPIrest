
import { API_CONSTANTS } from './../constants/API.constants';
class EmpleadoService {

    async getAll(){
        const response = await fetch(API_CONSTANTS.EMPLEADO());
        return response.json();
    }

}

export default new EmpleadoService();