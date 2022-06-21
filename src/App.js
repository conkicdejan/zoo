import "./App.css";
import React, { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([
    { vrsta: "Pas", ime: "Dzeki", datumRodjenja: new Date("01/06/2018") },
    { vrsta: "Macka", ime: "Lili", datumRodjenja: null },
    { vrsta: "Ribica", ime: "Zlatko" },
    { vrsta: "Konj", ime: "Misa", datumRodjenja: "" },
    { vrsta: "Curka", ime: "Gabl", datumRodjenja: new Date("01/06/2018") },
  ]);

  const [vrsta, setVrsta] = useState("");
  const [ime, setIme] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [sektor, setSektori] = useState("");

  const sektoriLista = ["ptice", "zmije", "kopitari", "papkari"];

  const dateToString = (date) =>
    date ? date.toLocaleDateString() : "Nepoznat";

  const handleRemove = (index) => {
    const newAnimals = animals.filter((animal, i) => i !== index);
    setAnimals(newAnimals);
  };

  const handleMove = (index) => {
    const movableValue = animals[index];
    const newAnimals = animals.filter((animal, i) => i !== index);
    setAnimals([movableValue, ...newAnimals]);
  };

  const addAnimal = (e) => {
    e.preventDefault();
    const datumRodjenjaValue = datumRodjenja ? new Date(datumRodjenja) : "";
    const newAnimal = {
      vrsta,
      ime,
      datumRodjenja: datumRodjenjaValue,
      sektor,
    };
    setAnimals([...animals, newAnimal]);
    setVrsta("");
    setIme("");
    setDatumRodjenja("");
    setSektori("");
  };

  const handleCheckAnimals = (index) => {
    const animalsInSector = animals.filter(
      ({ sektor }) => sektor === sektoriLista[index]
    );
    alert(
      animalsInSector.map(({ vrsta, ime, datumRodjenja }) => {
        return `${vrsta} ${ime} ${dateToString(datumRodjenja)} \n`;
      })
    );
  };

  return (
    <div>
      <form onSubmit={addAnimal}>
        <div>
          <label>Vrsta:</label>
          <input
            type="text"
            id="vrsta"
            onChange={(e) => setVrsta(e.target.value)}
            value={vrsta}
          />
        </div>

        <div>
          <label>Ime:</label>
          <input
            type="text"
            id="ime"
            onChange={(e) => setIme(e.target.value)}
            value={ime}
          />
        </div>

        <div>
          <label>Datum rodjenja:</label>
          <input
            type="date"
            id="datumRodjenja"
            onChange={(e) => setDatumRodjenja(e.target.value)}
            value={datumRodjenja}
          />
        </div>

        <div>
          <label>Sektor:</label>
          <select
            id="sektor"
            value={sektor}
            onChange={(e) => setSektori(e.target.value)}
          >
            <option value="">--Izaberi sektor--</option>
            {sektoriLista.map((sektor, index) => (
              <option key={index} value={sektor}>
                {sektor}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button>Add Animal</button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th width="150px">Sektor</th>
            <th width="150px">Vrsta</th>
            <th width="150px">Ime</th>
            <th width="150px">Datum rodjenja</th>
            <th width="150px">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.sektor}</td>
              <td>{animal.vrsta}</td>
              <td>{animal.ime}</td>
              <td>{dateToString(animal.datumRodjenja)}</td>
              <td className="action-buttons">
                <button onClick={() => handleRemove(index)}>Remove</button>
                <button onClick={() => handleMove(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th width="150px">Ime sektora</th>
            <th width="150px">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {sektoriLista.map((sektor, index) => (
            <tr key={index}>
              <td>{sektor}</td>
              <td className="action-buttons">
                <button onClick={() => handleCheckAnimals(index)}>
                  Check animals
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
