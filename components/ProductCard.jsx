import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="border rounded-md p-4 shadow-md cursor-pointer">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h2 className="text-md lg:text-lg font-bold">{product.title}</h2>
        <p className="text-sm text-gray-500 font-semibold">${product.price}</p>
        <p className="text-sm text-yellow-600">Rating: {product.rating}</p>
      </div>
    </Link>
  );
}

