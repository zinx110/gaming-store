import AllProducts from "@/components/Store/AllProducts";
import FilterOptions from "@/components/Store/FilterOptions";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="font bold text-2xl leading-7 text-white">Products</h2>
      <FilterOptions />
      <AllProducts data={data} />
    </div>
  );
}

const data = [
  {
    name: "Teclado Gaming R-FORCE",
    subname: "State of The Sound",
    subname2: "HD 2000",
    category: "Keyboard",
    img: [
      "/products/pngwing.com(4).png",
      "/products/keyboard.png",
      "/products/pngwing.com(3).png",
    ],
    price: 100,
    company: "SONY",
    companyMotto: "Feel The Music",
    bottomText1: "WIRELESS HEADPHONES",
    bottomText2: "WINDOWS COMPATIBLE",
  },
  {
    name: "Logitech G402 Hyperion Fury ",
    subname: "Feel The Game",
    category: "Gaming Mouse",
    img: [
      "/products/pngwing.com.png",
      "/products/pngwing.com(1).png",
      "/products/pngwing.com(2).png",
    ],
    price: 100,
    company: "Logitec",
    companyMotto: "Feel The Game",
    bottomText1: "GAMING MOUSE",
    bottomText2: "WINDOWS COMPATIBLE",
  },
  {
    name: "Ryzen 7 Gaming computer",
    subname: "GeForce RTX 4090Ti",
    subname2: "64GB Ram",
    category: "Gaming PC",
    img: ["/products/pngwing.com(5).png", "/products/pngwing.com(6).png"],
    price: 100,
    company: "AMD",
    companyMotto: "Ryzen 7700X",
    bottomText1: "GAMING COMPUTER",
    bottomText2: "WINDOWS COMPATIBLE",
  },
  {
    name: "HP Envy Hewlett-Packard Intel Core i7 Laptop",
    subname: "Business Laptop",
    subname2: "16GB Ram",
    category: "Laptop",
    img: ["/products/pngwing.com(7).png", "/products/pngwing.com(8).png"],
    price: 100,
    company: "HP Envy Hewlett",
    companyMotto: "Intel Core i7",
    bottomText1: "Laptop COMPUTER",
    bottomText2: "WINDOWS 11",
  },
  {
    name: "LEGION L7 Gaming Laptop",
    subname: "Gaming Laptop",
    subname2: "32GB Ram",
    category: "Laptop",
    img: ["/products/pngwing.com(9).png", "/products/pngwing.com(10).png"],
    price: 100,
    company: "LENOVO",
    companyMotto: "Core I7 1200K",
    bottomText1: "GAMING LAPTOP",
    bottomText2: "GeForce GTX 3060Ti",
  },
  {
    name: "ASUS LGA 1151 microATX Motherboard",
    subname: "LGA 1151",
    subname2: "MicroATX",
    category: "Motherboard",
    img: ["/products/pngwing.com(11).png", "/products/pngwing.com(12).png"],
    price: 100,
    company: "ASUS",
    companyMotto: "Game with Power",
    bottomText1: "Gaming MOTHERBOARD",
    bottomText2: "AMD COMPATIBLE",
  },
  {
    name: "MSI Intel LGA 1150 Motherboard",
    subname: "LGA 1150",
    subname2: "ATX",
    category: "Motherboard",
    img: ["/products/keyboard.png"],
    price: 100,
    company: "MSI",
    companyMotto: "Game with Power",
    bottomText1: "Gaming MOTHERBOARD",
    bottomText2: "INTEL COMPATIbLE",
  },
  {
    name: "Gaming keyboard Mouse MatCombo",
    subname: "Mouse+Keyboard",
    subname2: "Ultra Gaming",
    category: "Keyboard",
    img: ["/products/pngwing.com(13).png"],
    price: 100,
    company: "TitanTeck",
    companyMotto: "Dive into the Game",
    bottomText1: "GAMING SET",
    bottomText2: "WINDOWS COMPATIbLE",
  },
  {
    name: "Lenovo Intel Core i7 Laptop",
    subname: "Gaming Laptop",
    subname2: "32GB Ram",
    category: "Laptop",
    img: ["/products/pngwing.com(14).png", "/products/pngwing.com(15).png"],
    price: 100,
    company: "LENOVO",
    companyMotto: "Core I7 1200K",
    bottomText1: "GAMING LAPTOP",
    bottomText2: "GeForce GTX 3060Ti",
  },
  {
    name: "AOC Smart TV LED",
    subname: "LED Backlit",
    subname2: "8K Display",
    category: "Smart TV",
    img: ["/products/pngwing.com(16).png", "/products/pngwing.com(17).png"],
    price: 100,
    company: "SONY",
    companyMotto: "Watch the Vibrant world",
    bottomText1: "SMART TV",
    bottomText2: "VOICE COMMAND",
  },
  {
    name: "Beats by Dr. Dre wireless headphones",
    subname: "Feel The Sound",
    subname2: "ANC Technology",
    category: "Headphone",
    img: [
      "/products/pngwing.com(18).png",
      "/products/pngwing.com(19).png",
      "/products/pngwing.com(20).png",
    ],
    price: 100,
    company: "RED BEATS",
    companyMotto: "Feel The Sound",
    bottomText1: "WIRELESS HEADPHONES",
    bottomText2: "WINDOWS COMPATIBLE",
  },
  {
    name: "Samsung GearPlayStation VR",
    subname: "Virtual Reality",
    subname2: "Smart GEAR",
    category: "VR Set",
    img: [
      "/products/pngwing.com(21).png",
      "/products/pngwing.com(22).png",
      "/products/pngwing.com(23).png",
    ],
    price: 100,
    company: "SAMSUNG",
    companyMotto: "Go Virtual",
    bottomText1: "VR HEADSET",
    bottomText2: "PLAYSTATION",
  },
];
