import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>About Layout</h2>
      {children}
    </div>
  );
};

export default Layout;
