import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="w-full flex flex-col gap-4"></div>;
}

const data = {
  name: "Lexma G88",
  category: "Keyboard",
  img: "/products/keyboard.png",
  price: 100,
};
