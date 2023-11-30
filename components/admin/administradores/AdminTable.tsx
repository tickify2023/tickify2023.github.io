import React from "react";
import { Admin } from "src/interfaces";
import { AdminTr } from "./AdminTr";

export const AdminTable = ({ admins }: { admins: Admin[] }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="text-center">ID</th>
          <th>Nombre</th>
          <th className="text-center">Rol</th>
          <th>Ver</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <AdminTr key={admin.id} admin={admin} />
        ))}
      </tbody>
    </table>
  );
};
