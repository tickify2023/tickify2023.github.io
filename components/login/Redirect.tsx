import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const Redirect: any = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/admin");
  }

  return <></>;
};
