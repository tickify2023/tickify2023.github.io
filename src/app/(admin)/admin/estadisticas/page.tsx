import { Panels } from "@/components/admin/estadisticas/Panels";
import simpleFetch from "../../../../utils/simpleFetch";
import { Estadistics } from "src/interfaces";

export default async function Home() {
  const stats: Estadistics = await simpleFetch("estadistics", "ssr");

  return (
    <>
      <h2 className="page-header">Estadisticas generales</h2>
      <hr className="mb-3" />
      <Panels stats={stats}></Panels>
    </>
  );
}
