// "use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
// import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

export const BlockUrl: any = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login");
  //   },
  // });

  return <></>;
};
