import React from 'react'

export default function Clase10(props) {
  return (
    <div>
        <p>{props.user.nombre}</p>
        <p>{props.user.edad}</p>
        <p>{props.user.ubicacion}</p>
    </div>
  )
}
