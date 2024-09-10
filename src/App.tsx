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
  cantidad?: number;
  
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
    const productoCarrito = carrito.findIndex(item => item.id === product.id);
    if (productoCarrito >= 0) {
      const newCarrito = structuredClone(carrito);
      newCarrito[productoCarrito].cantidad! += 1;
      setCarrito(newCarrito);
    } else {
      setCarrito((prevState) => [...prevState, { ...product, cantidad: 1 }]);
    }
  };
  

  // const eliminarDelCarrito = (index: number) => {
  //   setCarrito((prevState) =>
  //     prevState.filter((_, i) => i !== index)
  //   );
  // };
  
  const eliminarDelCarrito = (index: number) => {
    setCarrito((prevState) => {
      const newCarrito = structuredClone(prevState);
  
      // Verifica que el índice esté dentro del rango del array
      const producto = newCarrito[index];
      if (!producto || producto.cantidad === undefined) return prevState; // Si no existe el producto o cantidad es undefined, no hacer nada
  
      if (producto.cantidad > 1) {
        // Si la cantidad es mayor a 1, restamos 1
        producto.cantidad -= 1;
      } else {
        // Si la cantidad es 1 o menor, eliminamos el producto
        newCarrito.splice(index, 1);
      }
  
      return newCarrito;
    });
  };
  
  
  

  return (
    <>
      <Productos products={products} añadirCarrito={añadirCarrito} />
      <Carrito listaCompras={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </>
  );
}

export default App;
