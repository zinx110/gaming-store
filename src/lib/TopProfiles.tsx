"use client";

import Avatar from "@/lib/Avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "./Icon";

interface props {
  img: string;
  type: "cart" | "notification";
}
interface props2 {
  num?: number;
}
const TopProfiles = () => {
  return (
    <div className="absolute top-0 right-0 px-10 py-4 flex items-center justify-end gap-4">
      <IconDiv type="cart" img="/assets/notification.svg" />
      <IconDiv type="notification" img="/assets/cart.svg" />
      <Avatar img="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/320615855_676863567493724_2929094257109300957_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgEVBvkp5WnB4eft49oOQMFrHIrNHd-HAWscis0d34cPUUjTw3PCgGMMQnmcdV5zk1DNxD-QNp5P4rfSe8XOm5&_nc_ohc=DSxerBK-ZKoAX9mtrsU&_nc_ht=scontent.fdac5-2.fna&oh=00_AfBu3lFzGOA2kmhF2zG4TnDnL47PBkG5PL33Wska4ULaXQ&oe=6407C2D5" />
    </div>
  );
};
export default TopProfiles;

const IconDiv = ({ img, type }: props) => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (type === "cart") {
      setAmount(2);
    }
    if (type === "notification") {
      setAmount(3);
    }
  }, [type]);
  return (
    <button className="w-8 h-8 relative rounded-full hover:bg-[#343434]  ">
      <Icon img={img} />
      <Notification num={amount} />
    </button>
  );
};
const Notification = ({ num }: props2) => {
  return (
    <div className="w-4 h-4  absolute right-0 top-0 rounded-full  flex items-center justify-center font-mono font-medium text-[10px] leading-[12px] text-[#DA00FE] text-center bg-white border-[1px] border-[#242424]">
      {num}
    </div>
  );
};
