import { getAllMaxValues } from "@/app/lib/data";
import { getAllStaffMembers } from "@/app/lib/staff/data";
import { getAllStudents } from "@/app/lib/students/data";
import Maxcard from "@/app/ui/dashboard/maxcard";
import Statcad from "@/app/ui/dashboard/statcard";
import { Table } from "@/app/ui/dashboard/table";

export default async function Page() {
    const maxvalues = await getAllMaxValues();
    const all_staff_members = await getAllStaffMembers();
    const all_students = await getAllStudents()
    return (
        <>
            <div className="relative flex w-full flex-row h-[14rem] p-14 items-center justify-between bg-white shadow-lg shadow-blue-gray-500/10">
                {
                    maxvalues.map((maxvalue) => {
                        return <Maxcard key={maxvalue.id} maxvalue={maxvalue} />
                    })
                }
            </div>
            <Statcad />
            <Table all_staff_members={all_staff_members} all_students={all_students} />
        </>
    )
}