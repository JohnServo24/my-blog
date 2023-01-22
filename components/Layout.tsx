import React, { PropsWithChildren } from "react";
import Meta from "./Meta";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default Layout;
