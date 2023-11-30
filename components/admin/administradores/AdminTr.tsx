import Link from "next/link";
import React from "react";
import { Admin } from "src/interfaces";

export const AdminTr = ({ admin }: { admin: Admin }) => {
  return (
    <tr>
      <td className="text-center">{admin.id}</td>
      <td width="60%">{admin.username}</td>
      <td className="text-center" width="10%">
        {admin.role}
      </td>
      <td>
        <span className="label label-info">
          <span className="glyphicon glyphicon-time">&nbsp;</span>
          <Link href={`/admin/administradores/${admin.id}`}>Ver</Link>
        </span>
      </td>
    </tr>
  );
};
