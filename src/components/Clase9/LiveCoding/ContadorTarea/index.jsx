import React, { useContext } from 'react'
import { contextoListaTarea } from '../GenerarTarea'

export default function ContadorTarea() {
    const tareas = useContext(contextoListaTarea)
  return (
    <div>La cantidad de tareas es: {tareas.length}</div>
  )
}
