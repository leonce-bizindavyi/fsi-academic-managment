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
  const handleSideOpen = () => {
    if (openSide === '') setOpenSide('-ml-56')
    else setOpenSide('')
  }
  return (
    <>
      <Navbar handleSideOpen={handleSideOpen} />
      <div className="flex flex-row">
        <Sidebar openSide={openSide} />
        <div className="space-y-3 ml-56 mt-16 w-full ">
          {children}
        </div>
      </div>
    </>
  );
}
