import { AdminTable } from "@/components/admin/administradores/AdminTable";
import Link from "next/link";
import { Admin } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

export default async function Home() {
  const admins: Admin[] = await simpleFetch("admin", "ssr");
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="page-header">Listado de administradores</h2>
        <div>
          <Link href={"/admin/administradores/crear"} className="btn btn-dark">
            Crear vendedor
          </Link>
        </div>
      </div>
      <hr className="mb-3" />

      <AdminTable admins={admins} />
    </>
  );
}
