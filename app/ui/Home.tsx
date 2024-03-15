"use client"
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
export const Home = () => {
    const {replace} = useRouter()
    useEffect(() => {
      replace('/login')
    }, [])
    
  return (
    <div>Home</div>
  )
}
