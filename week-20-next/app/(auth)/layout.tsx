import { ReactNode } from "react";

export default function({children}: {
  children: ReactNode;
}) {
  return (
      <body>
        <div> header </div>
        {children}
        <div> footer </div>
      </body>
  );
}