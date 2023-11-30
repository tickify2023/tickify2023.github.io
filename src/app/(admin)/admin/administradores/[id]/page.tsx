import { AdminEdit } from "@/components/admin/administradores/AdminEdit";
import { Admin } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

interface Props {
  id: string;
}

export default async function AdminEditor({ params }: { params: Props }) {
  const admin: Admin = await simpleFetch(`/admin/${params.id}`, "ssr");
  return (
    <>
      <AdminEdit admin={admin} />
    </>
  );
}
