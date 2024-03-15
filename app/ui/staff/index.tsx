"use client"
import { all_staff_members } from "@/app/lib/definitions";
import Statcad from "../dashboard/statcard";
import { Table } from "./table";
import Link from "next/link";


export default async function Staff(
    { all_staff_members }:
        { all_staff_members: all_staff_members[] }) {
    return (
        <>
            <div className="w-full flex justify-end px-5">
                <Link href={`/staff/new`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Nouveau
                </Link>
            </div>
            <Table all_staff_members={all_staff_members} />
            <Statcad />
        </>
    )
}