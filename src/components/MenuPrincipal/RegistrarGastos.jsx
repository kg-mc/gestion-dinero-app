import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

function OpcionesMonedas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("tipo_moneda").select("*");
      if (error) {
        console.error("Error al obtener las monedas:", error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);
  const monedas = [
    { value: "0", label: "Seleccionar moneda" },
    ...data.map((item) => ({
      value: item.id,
      label: item.name + " - " + item.cod,
    })),
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

function CategoriasGastos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("tipo_accion").select("*");
      if (error) {
        console.error("Error al obtener las categorías:", error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const categorias = [
    { value: "0", label: "Seleccionar categoría" },
    ...data.map((item) => ({ value: item.id, label: item.name })),
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

function TipoTransaccion() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("tipo_cat").select("*");
      if (error) {
        console.error("Error al obtener las categorías:", error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);
  const transacciones = [
    { value: "0", label: "Seleccionar tipo de transacción" },
    ...data.map((item) => ({ value: item.id, label: item.name })),
  ];
  return transacciones.map((transaccion) => (
    <option
      key={transaccion.value}
      value={transaccion.value}
      className="border-2 border-gray-300 bg-cyan-950"
    >
      {transaccion.label}
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
  const [datos, setDatos] = useState({
    moneda: "",
    categoria: "",
    tipo: "",
    cantidad: "",
    infoAdi: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatos((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      datos.moneda < 1 ||
      datos.categoria < 1 ||
      datos.tipo < 1 ||
      datos.cantidad === ""
    ) {
      console.log("Por favor, complete todos los campos obligatorios.");
      return;
    }
    console.log("Datos a enviar:", datos);

    const { data, error } = await supabase.from("registros").insert([
      {
        moneda_id: datos.moneda,
        accion_id: datos.categoria,
        cat_id: datos.tipo,
        cantidad: datos.cantidad,
        info_adic: datos.infoAdi,
      },
    ]);
    if (error) {
      console.log("Error al registrar el gasto:", error);
    } else {
      console.log("Gasto registrado con éxito:", data);
    }
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
        <CategoriasGastos />
      </select>

      <label htmlFor="tipo">Tipo transaccion</label>
      <select
        name="tipo"
        id="tipo"
        defaultValue={0}
        onChange={handleInput}
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      >
        <TipoTransaccion />
      </select>
      <label htmlFor="cantidad">Cantidad</label>
      <input
        type="number"
        step="any"
        name="cantidad"
        onChange={handleInput}
        min="0"
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      />
      <label htmlFor="infoAdi">Informacion adicional</label>
      <input
        name="infoAdi"
        onChange={handleInput}
        id="infoAdi"
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
      />
      <button className="boder-2 border-black rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300">
        Enviar informacion
      </button>
    </form>
  );
}
