import Banner from "@/components/generic/Banner";
import { Card } from "@/components/home/Card";
import SearchBar from "@/components/home/Search";
import { Event } from "src/interfaces";
import { simplePost } from "src/utils/simpleFetch";

interface Props {
  params: {
    filtro: string;
    termino: string;
  };
}

export default async function Search({ params }: Props) {
  const { filtro, termino } = params;
  const events: Event[] | null = await simplePost("search", {
    filtro,
    termino,
  });

  return (
    <>
      <Banner
        banner_url="https://i.imgur.com/OdJws45.png"
        text=""
        position="center"
      ></Banner>
      <section className="container mt-5 pd-5" id="sec-events">
        <h2 className="hover-underline-animation">Resultados de busqueda:</h2>
        <SearchBar></SearchBar>
        <div className="row m-md-3 m-lg-5 g-3 g-md-5">
          {events !== null ? (
            events.map((event) => (
              <div className="col-12 col-md-6 col-lg-4" key={event.id}>
                <Card event={event}></Card>
              </div>
            ))
          ) : (
            <div className="mt-5 mb-5">
              <h3>No se encontraron resultados</h3>
              <p> Por favor pruebe con otra busqueda</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
