"use client"
import React from 'react'
import { student } from '@/app/lib/definitions'
import { useRouter } from 'next/navigation'
import moment from 'moment'

export const Table = (
    { students }:
        { students: student[] }) => {
    const {push} = useRouter()
    const handleEdit = (uniid: string)=>{
        push(`/staff/${uniid}/detail`)
    }
    return (
        <div
            className="relative flex w-full flex-row h-auto py-3 px-3 space-x-2 items-start justify-between bg-white shadow-lg shadow-blue-gray-500/10">

            <div className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white font-sans p-6 text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full  h-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Nom</th>
                                    <th scope="col" className="py-3 px-6">Genre</th>
                                    <th scope="col" className="py-3 px-6">Email</th>
                                    <th scope="col" className="py-3 px-6">Téléphone</th>
                                    <th scope="col" className="py-3 px-6">Date de naissance</th>
                                    <th scope="col" className="py-3 px-6">Matricule</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => {
                                    return (
                                        <tr key={student.Id_st} onDoubleClick={()=>handleEdit(student.uniid_st)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 cursor-pointer">
                                            <td className="py-4 px-6">{student.name_st} </td>
                                            <td className="py-4 px-6">{student.sexe} </td>
                                            <td className="py-4 px-6">{student.email_st}</td>
                                            <td className="py-4 px-6">{student.tel_st}</td>
                                            <td className="py-4 px-6">{moment(student.date_naiss.toString()).format("YYYY-MM-DD")}</td>
                                            <td className="py-4 px-6">{student.matr_st}</td>
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
