import { all_staff_members } from '@/app/lib/definitions'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'

function Detail({ member }: { member: all_staff_members }) {
    return (
        <div
            className="whitespace-normal w-full h-full break-words rounded-lg  bg-white p-10 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none">
            <div className="bg-white overflow-hidden  rounded-lg ">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {member.name_staff}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the user.
                    </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Nom et Prénom
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {member.name_staff}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {member.email_st}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {member.phone_st}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Joined at
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {moment(member.period.toString()).format("YYYY-MM-DD")} <br />
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                <Link href={`/staff`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                    Retour
                                </Link>
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Link href={`/staff/${member.uniid_staf}/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Editer
                                </Link>
                            </dd>
                        </div>
                        <div className="w-full mt-1 flex justify-end px-5">

                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Detail