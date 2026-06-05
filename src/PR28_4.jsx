const Item = ({ name, price }) => (
  <div>
    <p>Nama: {name}</p>
    <p>Harga: Rp {price}</p>
  </div>
);

const ItemList = ({ items }) => (
  <div>
    {items.length > 0 ? (
      items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} />
      ))
    ) : (
      <p>Data tidak ditemukan</p>
    )}
  </div>
);

const App = () => {
  const items = [
    { name: "Baju Kaos", price: 150000 },
    { name: "Celana Jeans", price: 250000 },
  ];

  return (
    <div>
      <h1>Daftar Item</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;