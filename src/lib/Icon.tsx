import Image from "next/image";

interface iconProp {
  img: string;
}

const Icon = ({ img }: iconProp) => {
  return (
    <div className="w-[32px] h-[32px] relative flex justify-center items-center">
      <Image alt="." src={img} fill className="object-cover" />
    </div>
  );
};

export default Icon;
