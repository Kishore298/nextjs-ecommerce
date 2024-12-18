import Image from "next/image";
import { useState } from "react";

export default function ProductCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      <div className="relative w-full h-64 lg:h-[40rem]">
        <Image
          src={images[current]}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrent((current + 1) % images.length)}
      >
        ▶
      </button>
    </div>
  );
}
