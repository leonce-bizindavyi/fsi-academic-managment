"use client"
import React from 'react'
import { all_staff_members } from '@/app/lib/definitions'
import { useRouter } from 'next/navigation'
import moment from 'moment'

export const Table = (
    { all_staff_members }:
        { all_staff_members: all_staff_members[] }) => {
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
                                    <th scope="col" className="py-3 px-6">Angagé</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_staff_members.map((member) => {
                                    return (
                                        <tr key={member.Id_staf} onDoubleClick={()=>handleEdit(member.uniid_staf)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 cursor-pointer">
                                            <td className="py-4 px-6">{member.name_staff} </td>
                                            <td className="py-4 px-6">{member.sexe} </td>
                                            <td className="py-4 px-6">{member.email_st}</td>
                                            <td className="py-4 px-6">{member.phone_st}</td>
                                            <td className="py-4 px-6">{moment(member.date_naiss.toString()).format("YYYY-MM-DD")}</td>
                                            <td className="py-4 px-6">{moment(member.period.toString()).format("YYYY-MM-DD")}</td>
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
