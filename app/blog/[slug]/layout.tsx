import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <Link href="/">Go back...</Link>
      {children}
    </article>
  );
}
