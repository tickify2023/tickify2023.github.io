"use client";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "src/hooks/useForm";

export const Form = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (window.location.href === "https://tickify.com.ar/login") {
      window.location.href = "https://tickify-admin.vercel.app/login";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handleSubmit", formValues);
    const response = await signIn("credentials", {
      email: formValues.email,
      password: formValues.password,
      redirect: false,
    });
    // console.log("response", response);

    if (response?.error) {
      console.log("response.error", response.error);
      const errorPass = document.querySelector(".errorPass");
      errorPass.classList.remove("d-none");
      setTimeout(() => {
        errorPass.classList.add("d-none");
      }, 3000);
      console.log("Usuario o contraseña incorrectos");
    }

    if (response?.ok) {
      console.log("response.ok", response.ok);
      console.log("Usuario logueado", response);
      window.location.href = "/login";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Iniciar sesion</p>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example11"
          className="form-control"
          placeholder="Email address"
          onChange={handleInputChange}
          name="email"
        />
        <label className="form-label" htmlFor="form2Example11">
          Email
        </label>
      </div>
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example22"
          className="form-control"
          placeholder="Password"
          onChange={handleInputChange}
          name="password"
        />
        <label className="form-label" htmlFor="form2Example22">
          Contraseña
        </label>
      </div>

      <div className="text-center pt-1 mb-5 pb-1">
        <p className="text-danger text-center errorPass d-none">
          La contraseña o correo es incorrecto
        </p>
        <button
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};
