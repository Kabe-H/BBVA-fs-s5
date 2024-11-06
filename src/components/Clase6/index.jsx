import ComponenteB from "./ComponenteB";

export default function Clase6() {

  return (
    <>
      <ComponenteB />
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={() => console.log("hiciste click")}>Click</button>
    </>
  );
}
