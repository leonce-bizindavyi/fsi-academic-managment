"use client"
import { useState } from "react";
import Navbar from "../ui/navbar";
import Sidebar from "../ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSide, setOpenSide] = useState("")
  const handleSideOpen = () =>{
      if(openSide==='') setOpenSide('-ml-56')
      else setOpenSide('')
  }
  return (
    <>
    <Navbar handleSideOpen={handleSideOpen} />
    <div className="flex">
        <Sidebar openSide={openSide} />
    </div>
    </>
  );
}
