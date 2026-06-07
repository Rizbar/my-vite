import { useState } from 'react';
import ReactDOM from "react-dom/client";

function Total() {
  // arr type datanya adalah array, awalnya berisi satu angka 1
  const [arr, setArr] = useState([1]);

  // Fungsi untuk menambahkan angka baru ke array
  function handleClick() {
    // Tambahkan angka baru, misalnya angka selanjutnya setelah angka terakhir
    const lastNumber = arr[arr.length - 1];
    const newNumber = lastNumber + 1; // contoh menambah angka 1 lebih besar
    setArr([...arr, newNumber]);
  }

  return (
    <div>
      <p>Total Length Array: {arr.length}</p>
      <button onClick={handleClick}>Tambah</button>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Total;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Total />);