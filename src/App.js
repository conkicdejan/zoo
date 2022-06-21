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

  const [vrsta, setVrsta] = useState('')
  const [ime, setIme] = useState('')
  const [datumRodjenja, setDatumRodjenja] = useState('')


  const dateToString = (date) =>
    date ? date.toLocaleDateString() : "Nepoznat";

  const handleRemove = (index) => {
    const newAnimals = animals.filter((animal, i) => i !== index);
    setAnimals([...newAnimals]);
  };

  const handleMove = (index) => {
    const movableValue = animals[index]
    const newAnimals = animals.filter((animal, i) => i !== index);
    setAnimals([movableValue, ...newAnimals]);
  };

  const addAnimal = (e) => {
    e.preventDefault()
    let {vrsta, ime, datumRodjenja} = e.target
    const datumRodjenjaValue = datumRodjenja.value ? new Date(datumRodjenja.value) : "";
    const newAnimal = {vrsta: vrsta.value, ime: ime.value, datumRodjenja: datumRodjenjaValue}
    setAnimals([...animals, newAnimal])
    setVrsta('')
    setIme('')
    setDatumRodjenja('')
  }

  return (
    <div>
      <form onSubmit={addAnimal}>

        <div>
          <label>
            Vrsta:
          </label>
          <input type="text" id="vrsta" onChange={(e) => setVrsta(e.target.value)} value={vrsta}/>
        </div>

        <div>
          <label>
            Ime:
          </label>
          <input type="text" id="ime" onChange={(e) => setIme(e.target.value)} value={ime}/>
        </div>

        <div>
          <label>
            Datum rodjenja:
          </label>
          <input type="date" id="datumRodjenja" onChange={(e) => setDatumRodjenja(e.target.value)} value={datumRodjenja}/>
        </div>

        <div>
          <button>Add Animal</button>
        </div>

      </form>

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
              <td className='action-buttons'>
                <button onClick={() => handleRemove(index)}>Remove</button>
                <button onClick={() => handleMove(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
