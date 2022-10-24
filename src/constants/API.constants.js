
export const API_CONSTANTS = {
    URL: "http://localhost:8080",

    EMPLEADO: function(){
        return `${this.URL}/empleados`
    },

    EMPLEADO_ID: function(id){
        return `${this.EMPLEADO()}/${id}`;
    }
}