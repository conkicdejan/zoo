import "./App.css";

function App() {
  const animals = [
    { vrsta: "Pas", ime: "Dzeki", datumRodjenja: new Date("01/06/2018") },
    { vrsta: "Macka", ime: "Lili", datumRodjenja: null },
    { vrsta: "Ribica", ime: "Zlatko" },
    { vrsta: "Konj", ime: "Misa", datumRodjenja: '' },
    { vrsta: "Curka", ime: "Gabl", datumRodjenja: new Date("01/06/2018") },
  ];

  const dateToString = (date) =>
    date ? date.toLocaleDateString() : "Nepoznat";

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th width="150px">Vrsta</th>
            <th width="150px">Ime</th>
            <th width="150px">Datum rodjenja</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.vrsta}</td>
              <td>{animal.ime}</td>
              <td>{dateToString(animal.datumRodjenja)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
