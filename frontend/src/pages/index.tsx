import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Página Inicial</h1>
      <Link href="/Areas" className="text-blue-500 underline">
        Ir para Áreas
      </Link>
    </main>
  );
}
