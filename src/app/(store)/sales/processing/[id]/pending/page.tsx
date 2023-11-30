import Banner from "@/components/generic/Banner";
import { Sale } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventoShow({ params }: Props) {
  const sale: Sale = await simpleFetch(`sales/processing/${params.id}`, "ssr");
  console.log(sale);
  return (
    <>
      <Banner
        banner_url="https://i.imgur.com/uuTQw6t.png"
        text=""
        position="center"
      ></Banner>
      <div className="container mt-5 mb-5 pt-md-5 pb-md-5">
        <h1>Sales pending</h1>
      </div>
    </>
  );
}
