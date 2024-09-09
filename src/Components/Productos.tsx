import { AddToCartIcon } from './Iconos';
import './Productos.css';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const Productos = ({ products = [], añadirCarrito }: { products: Product[], añadirCarrito: (product: Product) => void }) => {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className='flex flex-col items-center'>
              <strong>{product.title}</strong>
              <strong>${product.price}</strong>
            </div>
            <div>
              <button className='text-white' onClick={() => añadirCarrito(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Productos;
