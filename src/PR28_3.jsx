const PR28_3 = () => {
  const items = [
    { name: "Baju Kaos", price: 150000 },
    { name: "Celana Jeans", price: 250000 },
  ];

  return (
    <div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index}>
            <p>Nama: {item.name}</p>
            <p>Harga: Rp {item.price}</p>
          </div>
        ))
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </div>
  );
};

export default PR28_3;