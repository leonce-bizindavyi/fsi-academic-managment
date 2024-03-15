import { getoneStaffById } from "@/app/lib/staff/data";
import Detail from "@/app/ui/staff/detail-staff";

export default async function Page({ params }: { params: { uniid: string } }) {
  const uniid = params.uniid
  const member = await getoneStaffById(uniid)
    return (
    <Detail member= {member} />
     
    )
  }