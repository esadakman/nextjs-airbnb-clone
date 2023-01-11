import Image from "next/image";

export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-64 w-64">
        <Image
          src={img}
          alt="Medium Card images"
          fill
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
