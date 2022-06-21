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

  const dateToString = (date) =>
    date ? date.toLocaleDateString() : "Nepoznat";

  const handleRemove = (index) => {
    const newAnimals = animals.filter((animal, i) => i !== index);
    setAnimals([...newAnimals]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th width="150px">Vrsta</th>
            <th width="150px">Ime</th>
            <th width="150px">Datum rodjenja</th>
            <th width="150px">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.vrsta}</td>
              <td>{animal.ime}</td>
              <td>{dateToString(animal.datumRodjenja)}</td>
              <td>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
