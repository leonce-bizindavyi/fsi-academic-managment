import { getoneStaffById } from "@/app/lib/staff/data";
import { Modal } from "@/app/ui/staff/modal-edit";

export default async function Page({ params }: { params: { uniid: string } }) {
  const uniid = params.uniid
  const member = await getoneStaffById(uniid)
    return (
      <Modal member={member} />
    )
  }