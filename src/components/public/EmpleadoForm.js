import { useState } from "react";
import { API_CONSTANTS } from './../../constants/API.constants';

 export const EmpleadoForm = () => {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [sector, setSector] = useState("");

const handleNombre = (e) => {
    setNombre(e.target.value);
    console.log(nombre);
}

const handleApellido = (e) => {
    setApellido(e.target.value);
    console.log(apellido);
}

const handleSector = (e) => {
    setSector(e.target.value);
    console.log(sector);
}

const send = async(e) => {
    e.preventDefault();

    const params = {
        nombre,
        apellido,
        sector
    }

    const response = await fetch( API_CONSTANTS.EMPLEADO(), {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-type' : 'application/json'}

    })

    if(response.status === 201){
        alert('Empleado creado con éxito!');
        clear();
    } else {
        alert('UPS algo salió mal')
    }

    

}
const clear = () => {
    setNombre("");
    setApellido("");
    setSector("");
}

const width= {
    width: "38rem"
}

    
    return(
        <div className="container text-center">
            <h3 className="display-3 mt-3">Ingresa un nuevo empleado</h3>

            <form method="POST" className="mx-auto" style={width} >
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} type="text" className="form-control" id="nombre" onChange={handleNombre} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input value={apellido} type="text" className="form-control" id="apellido" onChange={handleApellido} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sector</label>
                    <input value={sector} type="text" className="form-control" id="sector" onChange={handleSector} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={send}>Ingresar</button>

            </form>

        </div>
    );
 }