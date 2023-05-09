import prices from '../../components/prices.json';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './prices.css';

const Price = () => {
  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(prices).map((category) => (
            prices[category].map((price) => (
              <tr key={price.tipo}>
                <td>{category}</td>
                <td>{price.tipo}</td>
                <td>${price.precio}</td>
                <td>{price.descripcion}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export default Price;