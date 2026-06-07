const listMenu = [
  { code: 'home', name: 'Home' },
  { code: 'about', name: 'About' },
  { code: 'contact', name: 'Contact' }
];

function PR29_2() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          {listMenu.map((menu) => (
            <li key={menu.code}>
              <a href={`#${menu.code}`}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default PR29_2;