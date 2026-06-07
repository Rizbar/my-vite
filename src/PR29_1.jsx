import React from 'react';
import { createRoot } from 'react-dom/client';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productItem: "Beras" };
  }

  changeProduct = () => {
    this.setState({ productItem: "Minyak" });
  }

  render() {
    return (
      <div>
        <h2>Produk Pilihan: {this.state.productItem}</h2>
        <button onClick={this.changeProduct}>Ubah Produk</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Product />);