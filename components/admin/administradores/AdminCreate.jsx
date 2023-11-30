"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "src/hooks/useForm";
import { simplePost } from "src/utils/simpleFetch";

export const AdminCreate = () => {
  const router = useRouter();

  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const createAdmin = async (e) => {
    e.preventDefault();
    const admin = await simplePost(`admin`, formValues);
    if (admin === null) {
      router.push(`/admin/administradores`);
    } else {
      router.push(`/admin/administradores/${admin}`);
    }
  };

  return (
    <form onSubmit={(e) => createAdmin(e)}>
      <h1>Crear administrador:</h1>
      <hr />
      <div className="event row m-3 pb-2">
        <div className="product-img col-12 col-md-5 col-lg-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              name="username"
              placeholder="John Doe"
              value={formValues.username}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="usernameInput">Usuario</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              placeholder="John Doe"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="emailInput">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              placeholder="John Doe"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="passwordInput">Contraseña</label>
          </div>

          <button className="btn btn-dark w-100" type="submit">
            Guardar cambios
          </button>
          <Link
            href={`admin/administradores`}
            className="btn btn-dark w-100 mt-3"
            type="button"
          >
            Volver
          </Link>
        </div>
      </div>
    </form>
  );
};
