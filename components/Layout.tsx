import React from "react";
import Navbar from "./Navbar";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div
      className={`min-h-screen border border-transparent bg-light-background ${ubuntu.className} font-sans`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
