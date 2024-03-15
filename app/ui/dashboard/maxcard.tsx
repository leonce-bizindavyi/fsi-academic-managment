import { CountResult } from '@/app/lib/definitions'
import React from 'react'


function Maxcard({maxvalue}:{maxvalue:CountResult}) {
    return (
        <>
            <div className="whitespace-normal flex flex-col justify-center w-[15rem] break-words rounded-lg border border-blue-gray-50 bg-white p-10 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <div><span className="text-2xl font-semibold flex justify-center text-center">{maxvalue.value}</span></div>
                <div><span className="text-2xl font-bold flex justify-center ">{maxvalue.count} </span></div>
            </div>
        </>
    )
}

export default Maxcard