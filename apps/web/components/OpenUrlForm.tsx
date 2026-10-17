"use client";

import { isAllowedUrl } from "@readup/docs";
import { useRouter } from "next/navigation";
import { useState } from "react";

/** Abrir cualquier página de los dominios oficiales permitidos. */
export function OpenUrlForm({ hosts }: { hosts: string[] }) {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  return (
    <form
      className="url-form"
      onSubmit={(e) => {
        e.preventDefault();
        const value = url.trim();
        if (!isAllowedUrl(value)) return setError(true);
        router.push(`/docs/leer?url=${encodeURIComponent(value)}`);
      }}
    >
      <input
        type="url"
        inputMode="url"
        placeholder="Pega un enlace, p. ej. https://wiki.archlinux.org/title/Docker"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setError(false);
        }}
      />
      <button className="btn primary" type="submit">Abrir</button>
      {error && <p className="small warn-text">Solo se pueden abrir páginas https de: {hosts.join(", ")}.</p>}
    </form>
  );
}
