import { useState } from "react";

function OpcionesMonedas() {
  const monedas = [
    { value: "PEN", label: "Soles" },
    { value: "USD", label: "Dólares" },
    { value: "EUR", label: "Euros" },
    { value: "CLP", label: "Pesos chilenos" },
  ];

  return monedas.map((moneda) => (
    <option
      key={moneda.value}
      value={moneda.value}
      className="border-2 border-gray-300 bg-cyan-950"
    >
      {moneda.label}
    </option>
  ));
}
function CateogriasGastos() {
  const categorias = [
    { value: "seleccionar", label: "Seleccionar categoría" },
    { value: "comida", label: "Comida" },
    { value: "transporte", label: "Transporte" },
    { value: "entretenimiento", label: "Entretenimiento" },
    { value: "salud", label: "Salud" },
  ];
  return categorias.map((categoria) => (
    <option
      key={categoria.value}
      value={categoria.value}
      className="border-2 border-gray-300 bg-cyan-950"
    >
      {categoria.label}
    </option>
  ));
}
/* 
<option value="USD" >
          Dólar estadounidense
        </option>
        <option value="EUR" className="border-2 border-gray-300 bg-cyan-950">
          Euro
        </option>
        <option value="PEN" className="border-2 border-gray-300 bg-cyan-950">
          Sol Peruano
        </option>
        <option value="CLP" className="border-2 border-gray-300 bg-cyan-950">
          Peso chileno
        </option> */

export default function RegistrarGastos() {
  const [data, setData] = useState({ moneda: "PEN", categoria: "", tipo: "gasto", cantidad: "", infoAdi: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="moneda">Moneda</label>
      <select
        name="moneda"
        id="moneda"
        defaultValue={0}
        onChange={handleInput}
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      >
        <OpcionesMonedas />
      </select>
      <label htmlFor="categoria">Categoria</label>
      <select
        name="categoria"
        id="categoria"
        defaultValue={0}
        onChange={handleInput}
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      >
        <CateogriasGastos />
      </select>

      <label htmlFor="tipo">Tipo transaccion</label>
      <select
        name="tipo"
        id="tipo"
        defaultValue={0}
        onChange={handleInput}
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      >
        <option value="gasto">Gasto</option>
        <option value="ingreso">Ingreso</option>
        <option value="prestamo">Prestamo</option>
        <option value="deuda">Deuda</option>
        <option value="inversion">Inversión</option>
      </select>
      <label htmlFor="cantidad">Cantidad</label>
      <input
        type="number"
        name="cantidad"
        onChange={handleInput}
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      />
      <label htmlFor="infoAdi">Informacion adicional</label>
      <input type="text" className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500" />
      <button className="boder-2 border-black rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300">
        Enviar informacion
      </button>
    </form>
  );
}
