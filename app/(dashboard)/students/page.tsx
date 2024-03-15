import { getAllStudents } from "@/app/lib/students/data"
import { Table } from "@/app/ui/student/table"

export default async function Page() {
    const students = await getAllStudents()
    return (
        <>
            <Table students={students} />
        </>
    )
}