const listMenu = [
  { code: 'home', name: 'Home' },
  { code: 'about', name: 'About' },
  { code: 'contact', name: 'Contact' }
];

function PR29_2() {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      {/* Daftar menu di header */}
      <nav>
        {listMenu.map((menu) => (
          <span
            key={menu.code}
            style={{
              margin: '0 15px',
              fontSize: '18px',
              fontWeight: 'normal',
              cursor: 'pointer',
            }}
          >
            {menu.name}
          </span>
        ))}
      </nav>

      {/* Judul besar */}
      <h1 style={{ marginTop: '20px', fontSize: '32px', fontWeight: 'bold' }}>Halo Semua</h1>
    </header>
  );
}

export default PR29_2;