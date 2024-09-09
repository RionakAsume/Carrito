
import { RemoveFromCartIcon } from './Iconos';

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

export const Carrito = ({listaCompras = [], eliminarDelCarrito}: {listaCompras: Product[], eliminarDelCarrito: (index: number) => void}) => {

  
    const calcularTotal = () => {
        return listaCompras.reduce((total, product) => total + product.price, 0);
    };

    return (
        <section className="w-1/3 h-auto bg-gray-700 flex flex-col flex-wrap items-center">
            {listaCompras.length > 0 ? (
                <div className='w-full flex flex-col flex-wrap items-center'>
                    {listaCompras.map((product, index) => (
                        <div key={product.id} className="w-3/4 h-12 bg-white flex text-black m-5 items-center justify-between p-3">
                            <strong>{product.title}</strong>
                            <div className="flex items-center w-1/3 justify-between">
                                <p>${product.price}</p>
                                <button onClick={() => eliminarDelCarrito(index)}>
                                    <RemoveFromCartIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="w-3/4 text-black m-5 p-3 flex justify-end">
                        <strong>Total:</strong>
                        <span>${calcularTotal()}</span>
                    </div>
                </div>
            ) : (
                <p className="text-white mt-4">El carrito está vacío</p>
            )}
        </section>
    );
};
