import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShowContracts } from "../store/actions/actions.jsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./ContractsContainer.css";

const ContractsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowContracts());
  }, [dispatch]);
  const allContracts = useSelector((state) => state.Contracts);

  const [discount, setDiscount] = useState(0);
  const [contracts, setContracts] = useState([]);
  const [inputs, setInputs] = useState({
    discount: 0,
    subtotal: 0,
    count: 0,
  });

  React.useEffect(() => {
    allContracts.map((e) =>
      setInputs((oldItems) => ({
        ...oldItems,
        [e.name.replace(/\s/g, "")]: 0,
        ["price" + e.name.replace(/\s/g, "")]: 0,
      }))
    );
  }, [allContracts]);

  const handleAdd = (e) => {
    var result = inputs[e.name.replace(/\s/g, "")] % 2;
    setInputs((oldItems) => ({
      ...oldItems,
      [e.name.replace(/\s/g, "")]: inputs[e.name.replace(/\s/g, "")] + 1,
    }));
    if (
      e.name === "Acuerdo de inversión" &&
      inputs[e.name.replace(/\s/g, "")] >= 1
    ) {
      if (result !== 0 && inputs.count === 0) {
        setInputs((oldItems) => ({
          ...oldItems,
          discount: inputs.discount + e.price,
        }));
      }
      if (inputs.count === 0) {
        setInputs((oldItems) => ({
          ...oldItems,
          count: inputs["price" + e.name.replace(/\s/g, "")],
        }));
      }
      if (
        e.name === "Acuerdo de inversión" &&
        inputs[e.name.replace(/\s/g, "")] === 2
      ) {
        setInputs((oldItems) => ({
          ...oldItems,
          subtotal: inputs.subtotal - inputs.count + 300,
          discount: inputs.discount - inputs.count,
          ["price" + e.name.replace(/\s/g, "")]: 300,
        }));
      } else if (inputs[e.name.replace(/\s/g, "")] > 2) {
        setInputs((oldItems) => ({
          ...oldItems,
          subtotal: inputs.subtotal + 100,
          ["price" + e.name.replace(/\s/g, "")]:
            inputs["price" + e.name.replace(/\s/g, "")] + 100,
        }));
      }
    } else {
      if (result === 0 || inputs[e.name.replace(/\s/g, "")] === 0) {
        setInputs((oldItems) => ({
          ...oldItems,
          subtotal: inputs.subtotal + e.price,
          ["price" + e.name.replace(/\s/g, "")]:
            inputs["price" + e.name.replace(/\s/g, "")] + e.price,
        }));
      } else if (result !== 0) {
        console.log("lol");
        setInputs((oldItems) => ({
          ...oldItems,
          discount: inputs.discount + e.price,
        }));
      }
    }
  };

  const handleDelete = (e) => {
    if (inputs[e.name.replace(/\s/g, "")] > 0) {
      var result = inputs[e.name.replace(/\s/g, "")] % 2;

      setInputs((oldItems) => ({
        ...oldItems,
        [e.name.replace(/\s/g, "")]: inputs[e.name.replace(/\s/g, "")] - 1,
      }));

      if (
        e.name === "Acuerdo de inversión" &&
        inputs[e.name.replace(/\s/g, "")] <= 3
      ) {
        if (result !== 0 && inputs.count === 0) {
          setInputs((oldItems) => ({
            ...oldItems,
            discount: inputs.discount - e.price,
          }));
        }
        if (
          e.name === "Acuerdo de inversión" &&
          inputs[e.name.replace(/\s/g, "")] === 3
        ) {
          setInputs((oldItems) => ({
            ...oldItems,
            subtotal: inputs.subtotal + inputs.count - 300,
            discount: inputs.discount + inputs.count,
            ["price" + e.name.replace(/\s/g, "")]: inputs.count,
          }));
        } else if (inputs[e.name.replace(/\s/g, "")] === 2) {
          setInputs((oldItems) => ({
            ...oldItems,
            discount: inputs.discount - inputs.count,
            subtotal: inputs.subtotal,
            ["price" + e.name.replace(/\s/g, "")]:
              inputs["price" + e.name.replace(/\s/g, "")] - inputs.count,
          }));
        } else if (inputs[e.name.replace(/\s/g, "")] === 1) {
          setInputs((oldItems) => ({
            ...oldItems,
            subtotal: inputs.subtotal - inputs.count,
            ["price" + e.name.replace(/\s/g, "")]:
              inputs["price" + e.name.replace(/\s/g, "")] - inputs.count,
          }));
        }
      } else {
        if (result !== 0 || inputs[e.name.replace(/\s/g, "")] === 0) {
          setInputs((oldItems) => ({
            ...oldItems,
            subtotal: inputs.subtotal - e.price,
            ["price" + e.name.replace(/\s/g, "")]:
              inputs["price" + e.name.replace(/\s/g, "")] - e.price,
          }));
        } else if (result === 0) {
          setInputs((oldItems) => ({
            ...oldItems,
            discount: inputs.discount - e.price,
          }));
        }
      }
    }
  };

  allContracts.map((e) => {
    if (inputs[e.name.replace(/\s/g, "")] !== 0) {
      const selected = document.getElementsByClassName(
        e.name.replace(/\s/g, "")
      );
      const selectedButton1 = document.getElementsByClassName(
        "button" + e.name.replace(/\s/g, "")
      );
      const selectedButton2 = document.getElementsByClassName(
        "button2" + e.name.replace(/\s/g, "")
      );
      const selectedParagraph = document.getElementsByClassName(
        "p" + e.name.replace(/\s/g, "")
      );

      if (selected[0] !== undefined) {
        selected[0].style.color = "#83DED5";
        selected[0].style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
        selected[0].style.border = "none";
      }
      if (selectedButton1[0] !== undefined) {
        selectedButton1[0].style.color = "#83DED5";
      }
      if (selectedButton2[0] !== undefined) {
        selectedButton2[0].style.color = "#83DED5";
      }
      if (selectedParagraph[0] !== undefined) {
        selectedParagraph[0].style.borderColor = "#83DED5";
      }
    } else {
      const selected = document.getElementsByClassName(
        e.name.replace(/\s/g, "")
      );
      const selectedButton1 = document.getElementsByClassName(
        "button" + e.name.replace(/\s/g, "")
      );
      const selectedButton2 = document.getElementsByClassName(
        "button2" + e.name.replace(/\s/g, "")
      );
      const selectedParagraph = document.getElementsByClassName(
        "p" + e.name.replace(/\s/g, "")
      );

      if (selected[0] !== undefined) {
        selected[0].style.color = "black";
        selected[0].style.boxShadow = "";
        selected[0].style.border = "0.5px solid lightgray";
      }
      if (selectedButton1[0] !== undefined) {
        selectedButton1[0].style.color = "black";
      }
      if (selectedButton2[0] !== undefined) {
        selectedButton2[0].style.color = "black";
      }
      if (selectedParagraph[0] !== undefined) {
        selectedParagraph[0].style.borderColor = "black";
      }
    }
  });

  const handleOnClick = () => {
    if (inputs.subtotal !== undefined) {
      alert(
        `Total a pagar: $${(
          (16 * inputs.subtotal) / 100 +
          inputs.subtotal
        ).toFixed(2)}MXN`
      );
    }
  };

  return (
    <div>
      <div className="textContainer">
        <h1>Selecciona los contratos que necesitas:</h1>
        <p>
          Elige todos los documentos que necesites y realiza tu pago.
          Contéstalos y descárgalos cuando los necesites
        </p>
      </div>
      <div className="generalContainer">
        <div className="optionsContainer">
          {allContracts &&
            allContracts.map((element) => (
              <div key={element.name} className={`${element.name.replace(/\s/g, "")}`}>
                <button
                  className={`button${element.name.replace(/\s/g, "")}`}
                  onClick={() => handleDelete(element)}
                >
                  {" "}
                  -{" "}
                </button>
                <p className={`p${element.name.replace(/\s/g, "")}`}>
                  {inputs[element.name.replace(/\s/g, "")]}
                </p>
                <button
                  className={`button2${element.name.replace(/\s/g, "")}`}
                  onClick={() => handleAdd(element)}
                >
                  {" "}
                  +{" "}
                </button>
                <nav>{element.name}</nav>
              </div>
            ))}
        </div>
        <div className="priceContainer">
          <h3>Actualización precio</h3>
          {allContracts &&
            allContracts.map((e) => {
              return inputs[e.name.replace(/\s/g, "")] !== 0 ? (
                <div key={e.name} className="product">
                  <div>
                    <p>{inputs[e.name.replace(/\s/g, "")]}</p>
                    <p>{e.name}</p>
                  </div>
                  <p className="priceMarker">
                    ${inputs["price" + e.name.replace(/\s/g, "")]} MXN
                  </p>
                </div>
              ) : (
                <div key={e.name} className="product"></div>
              );
            })}
          <div className="infoContainer">
            <p>Subtotal: ${inputs.subtotal.toFixed(2)} MXN</p>
            <p className="discount">
              Descuento: -${inputs.discount.toFixed(2)} MXN
            </p>
            <p>Iva: ${((16 * inputs.subtotal) / 100).toFixed(2)} MXN</p>
            <p className="total">
              Total: $
              {((16 * inputs.subtotal) / 100 + inputs.subtotal).toFixed(2)} MXN
            </p>

            <Link className="buttonLink" to="/home">
              <button onClick={() => handleOnClick()} className="returnButton">
                Continuar <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsContainer;
