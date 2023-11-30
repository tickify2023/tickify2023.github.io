import { MainBanner } from "@/components/home/MainBanner";
import { Card } from "@/components/home/Card";
import SearchBar from "@/components/home/Search";
import { Event } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

export default async function Home() {
  const events: Event[] = await simpleFetch("events/active", "ssr");
  console.log(events);

  return (
    <>
      <MainBanner></MainBanner>

      <section className="container mt-5 pd-5" id="sec-events">
        <h2 className="hover-underline-animation">Eventos</h2>
        <SearchBar></SearchBar>
        <div className="row m-md-3 m-lg-5 g-3 g-md-5">
          {events.map((event) => (
            <div className="col-12 col-md-6 col-lg-4" key={event.id}>
              <Card event={event}></Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
