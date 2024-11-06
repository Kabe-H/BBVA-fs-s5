import { useState } from "react";

export default function Ejercicio7() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "produ 1", precio: "$ 25" },
    { id: 2, nombre: "produ 2", precio: "$40" },
    { id: 3, nombre: "produ 3", precio: "$70" },
  ]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
  });

  const addProduct = () => {
    let p = {
      id: productos.lenght + 1,
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
    };
    setProductos([...productos, p]);
    setNuevoProducto({
      nombre: "",
      precio: "",
    });
  };

  return (
    <div>
      {productos.map((dato) => (
        <div key={dato.id}>
          <h5>{dato.nombre}</h5>
          <p>{dato.precio}</p>
        </div>
      ))}
      <input
        placeholder="nombre"
        type="text"
        value={nuevoProducto.nombre}
        onChange={(e) =>
          setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
        }
      />
      <input
        placeholder="Precio"
        type="text"
        value={nuevoProducto.precio}
        onChange={(e) =>
          setNuevoProducto({ ...nuevoProducto, precio: e.target.value })
        }
      />
      <button onClick={addProduct}>Agregar Producto</button>
    </div>
  );
}
