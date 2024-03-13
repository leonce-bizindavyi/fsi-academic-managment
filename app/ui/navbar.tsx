"use client"
import Link from 'next/link'
import React,{useState} from 'react'

function Navbar({handleSideOpen
 }: {handleSideOpen: ()=> void 
}) {
  const [openProfile, setOpenProfile] = useState(false)
  const handleOpenProfile = ()=>{
    setOpenProfile(!openProfile)
  }
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
      {/* <!-- logo --> */}
      <div className="flex items-center space-x-2">
        <button onClick={handleSideOpen} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className='text-2xl font-semibold hover:cursor-pointer'>FSI Academic Managment</div>
      </div>

      {/* <!-- button profile --> */}
      <div>
        <button type="button" onClick={handleOpenProfile}
          className="h-9 w-9 overflow-hidden rounded-full">
          <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
        </button>

        {/* <!-- dropdown profile --> */}
        {openProfile && (
          <div
            className="absolute z-20 right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
            <div className="flex items-center space-x-2 p-2">
              <img src="https://plchldr.co/i/40x40?bg=111111" title='Leonce Haziq' alt="plchldr.co" className="h-9 w-9 rounded-full" />
              <div className="font-medium">Leonce Haziq</div>
            </div>

            <div className="flex flex-col space-y-3 p-2">
              <Link href="#" className="transition hover:text-blue-600">My Profile</Link>
              <Link href="#" className="transition hover:text-blue-600">Edit Profile</Link>
              <Link href="#" className="transition hover:text-blue-600">Settings</Link>
            </div>

            <div className="p-2">
              <button className="flex items-center space-x-2 transition hover:text-blue-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                  </path>
                </svg>
                <div>Log Out</div>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Navbar