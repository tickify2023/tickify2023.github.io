"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("Artista");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setFilterBy(filter);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}, Filter by: ${filterBy}`);
    router.push(`/busqueda/${filterBy}/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="my-3 m-md-5">
      <div className="input-group">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filterBy}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("Artista");
                }}
              >
                Artista
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("Evento");
                }}
              >
                Evento
              </a>
            </li>
          </ul>
        </div>

        <input
          type="hidden"
          name="search_param"
          value="all"
          id="search_param"
        />
        <input
          type="text"
          className="form-control"
          name="x"
          placeholder="Buscar..."
          onChange={handleInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <span className="glyphicon glyphicon-search">
              <FaSearch />
            </span>
          </button>
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
