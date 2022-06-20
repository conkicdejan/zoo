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
            <ul>
                {animals.map((animal, index) => (
                    <li key={index}>{animal.vrsta} {animal.ime} {animal.datumRodjenja}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
