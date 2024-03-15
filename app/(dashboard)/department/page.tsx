import { getAllSfilieres } from "@/app/lib/deprt/datas";
import { Table } from "@/app/ui/fil/table";

export default async function Page() {
    const fils = await getAllSfilieres()
    return (
        <>
            <Table fils={fils} />
        </>
    )
}