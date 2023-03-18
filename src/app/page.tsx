'use client'
import Image from "next/image";
import { useEffect } from "react"
import { useRouter } from 'next/navigation';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
  router.push('/store')
  },[])
  return <>main</>;
}
