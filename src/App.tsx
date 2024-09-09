import Productos from './Components/Productos';
import { Carrito } from './Components/Carrito';
import { products } from './Productos.json';
import { useState, useEffect } from 'react';
import './App.css';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

function App() {
  const [carrito, setCarrito] = useState<Product[]>(() => {
    const savedCarrito = localStorage.getItem('carrito');
    return savedCarrito ? JSON.parse(savedCarrito) : [];
  });


  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const añadirCarrito = (product: Product) => {
    setCarrito((prevState) => [...prevState, product]);
  };

  const eliminarDelCarrito = (index: number) => {
    setCarrito((prevState) =>
      prevState.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Productos products={products} añadirCarrito={añadirCarrito} />
      <Carrito listaCompras={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </>
  );
}

export default App;
