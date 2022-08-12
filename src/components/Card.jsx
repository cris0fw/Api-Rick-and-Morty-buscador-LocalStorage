import React from "react";

const Card = ({valores}) => {
const {image, name, species, gender} = valores
    console.log(valores)
  return (
    <>
      <div className="col-lg-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt={`imagen-${name}`} />
          <div className="card-body">
            <h5 className="card-title">{name} - Sexo {gender}</h5>
            <p className="card-text">
              {species}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
