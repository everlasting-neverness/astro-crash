import { useState } from "preact/hooks";
import type { IProduct } from "../types";

interface IProductCardProps {
  product: IProduct
}

function ProductCard({ product }: IProductCardProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const toggle = () => setVisible(state => !state);

  return (
    <div className="border rounded mb-2 p-3">
      <h2 className="text-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>
      <a href={`/product/${product.id}`}>View product</a>
      <br />
      <button onClick={toggle} className="border py-2 px-4 bg-yellow-400 text-white">
        Toggle Description
      </button>
      {visible && <p>{product.description}</p>}
    </div>
  )
}

export default ProductCard