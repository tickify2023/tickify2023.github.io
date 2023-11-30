import "./admin.css";
import Sidenav from "@/components/layout/sidenav/Sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Sidenav>{children}</Sidenav>
      </body>
    </html>
  );
}
