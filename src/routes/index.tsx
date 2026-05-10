import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MANTAN — MAN 1 Surakarta TANpa Vandalisme" },
      { name: "description", content: "Gerakan siswa MAN 1 Surakarta melawan vandalisme. Edukasi, data, game interaktif, dan pakta anti-vandalisme." },
      { property: "og:title", content: "MANTAN — MAN 1 Surakarta TANpa Vandalisme" },
      { property: "og:description", content: "Bersama menjaga keindahan sekolah sebagai cerminan karakter kita." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  useEffect(() => {
    window.location.replace("/site.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#1a4d2e", color: "#fefae0", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", letterSpacing: "0.2em" }}>MANTAN</h1>
        <p style={{ opacity: 0.7, marginTop: "1rem" }}>Memuat halaman…</p>
        <noscript>
          <a href="/site.html" style={{ color: "#e9c46a" }}>Buka MANTAN →</a>
        </noscript>
      </div>
    </div>
  );
}
