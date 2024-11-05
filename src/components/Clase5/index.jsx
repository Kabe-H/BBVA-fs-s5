import ComponenteHijo from "./ComponenteHijo";

export default function Clase5() {
  const productos = [
    { id: 1, nombre: "produ 1", precio: "$ 25" },
    { id: 2, nombre: "produ 2", precio: "$40" },
    { id: 3, nombre: "produ 3", precio: "$70" },
  ];
  return (
    <div>
      {productos.map((dato) => (
        <ComponenteHijo
          key={dato.id}
          nombre={dato.nombre}
          precio={dato.precio}
        />
      ))}
    </div>
  );
}
