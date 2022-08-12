import React, { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Card from "./Card";
import Sprinner from "./Sprinner";

const PintarDatos = ({ valor }) => {
  const [array, setArray] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    consumirApi(valor);
  }, [valor]);

  const consumirApi = async (nombre) => {
    try {
      setSpinner(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se encontro ningun resultado",
        });
        return;
      }

      const json = await res.json();

      setArray(json.results);
    } catch (err) {
      console.log(err);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <>
      {spinner === true ? (
        <Sprinner />
      ) : (
        <div className="row mt-4">
          {array.map((item) => {
            return <Card key={item.id} valores={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default PintarDatos;
