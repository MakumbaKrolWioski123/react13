import { useState } from "react";

function  ListManager() {
    const [zadania, setZadania] = useState([]);
    return (
    <div className="list-manager">
        <h2>Lista:</h2>
        <button onClick={() => setZadania([...zadania, 
            Math.random() > 0.5 ? "Nauka" : "Zadanie"])}>Dodaj zadanie</button>
        <button onClick={() => setZadania([...zadania, 
            Math.random() > 0.5 ? "Nauka" : "Zadanie", 
            Math.random() > 0.5 ? "Nauka" : "Zadanie", 
            Math.random() > 0.5 ? "Nauka" : "Zadanie"])}>Dodaj 3 zadania</button>
        <ul>
            {zadania.map((zadanie, index) => (
                <li key={index}>{zadanie}</li>
            ))}
        </ul>
    </div>
  );
}

export default ListManager;