import "./App.css";

function App() {
    const animals = [
        { vrsta: "Pas", ime: "Dzeki", datumRodjenja: new Date('01/06/2018') },
        { vrsta: "Macka", ime: "Lili", datumRodjenja: new Date('01/06/2018') },
        { vrsta: "Ribica", ime: "Zlatko", datumRodjenja: new Date('01/06/2018') },
        { vrsta: "Konj", ime: "Misa", datumRodjenja: new Date('01/06/2018') },
        { vrsta: "Curka", ime: "Gabl", datumRodjenja: new Date('01/06/2018') },
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th width='150px'>Vrsta</th>
                        <th width='150px'>Ime</th>
                        <th width='150px'>Datum rodjenja</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, index) => (
                        <tr key={index}>
                            <td>{animal.vrsta}</td>
                            <td>{animal.ime}</td>
                            <td>{animal.datumRodjenja.toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
