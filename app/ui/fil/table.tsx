"use client"
import { filiere } from '@/app/lib/definitions'
import React from 'react'

export const Table = (
    { fils }:
        { fils: filiere[] }) => {
    return (
        <div
            className="relative flex w-full flex-row h-auto py-3 px-3 space-x-2 items-start justify-between bg-white shadow-lg shadow-blue-gray-500/10">

            <div className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white font-sans p-6 text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full  h-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Numero</th>
                                    <th scope="col" className="py-3 px-6">Filière</th>
                                    <th scope="col" className="py-3 px-6">Departement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fils.map((fil) => {
                                    return (
                                        <tr key={fil.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 cursor-pointer">
                                            <td className="py-4 px-6">{fil.id} </td>
                                            <td className="py-4 px-6">{fil.fil} </td>
                                            <td className="py-4 px-6">{fil.dep}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
