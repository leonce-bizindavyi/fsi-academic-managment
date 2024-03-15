import { getAllStaffMembers } from "@/app/lib/staff/data"
import Staff from "@/app/ui/staff"

export default async function Page() {
    const all_staff_members = await getAllStaffMembers()
    return (
        <>
            <Staff all_staff_members={all_staff_members} />
        </>
    )
}