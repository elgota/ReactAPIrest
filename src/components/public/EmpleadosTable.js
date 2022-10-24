
import { useEffect, useState } from 'react';
import EmpleadoService from '../../services/EmpleadoService';
export const EmpleadoTable = () => {

const [empleados, setEmpleados] = useState([]);

useEffect(() => {
  EmpleadoService.getAll()
  .then(response => setEmpleados(response.empleados))
  .catch(() => setEmpleados([]))

}, [])

const rows = empleados.map((m, i) => (
    <tr key={i}>

        <td>{m.id}</td>
        <td>{m.nombreCompleto}</td>
        <td>{m.sector}</td>

    </tr>
))


    return (
     
        <div class="container text-center">
            <h3 class="display-3 mt-3">Lista de empleados</h3>
            <table class="table mt-3">
                <thead>
                    <tr>

                    <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Sector</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}

                </tbody>
            </table>


        </div>

      

    );
}