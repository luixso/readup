import Link from "next/link";

export const metadata = { title: "Acerca de · ReadUp" };

export default function AboutPage() {
  return (
    <article className="narrow">
      <h1 className="title">Acerca de ReadUp</h1>
      <p className="subtitle">Aprender inglés leyendo, y a la vez estudiar lo que te interesa.</p>

      <div className="about">
        <p>
          ReadUp nace con un objetivo sencillo: <strong>aprender inglés leyendo</strong>. Textos cortos a tu nivel,
          audio para escuchar mientras lees, la traducción de cada palabra con un toque y un repaso que te recuerda el
          vocabulario justo antes de olvidarlo.
        </p>
        <p>
          Y como se aprende mejor lo que nos interesa, también puedes leer <strong>documentación oficial</strong> de las
          herramientas que usas (Linux, Hyprland, Omarchy, GitHub, Proxmox, inteligencia artificial…) y estudiar inglés
          mientras aprendes tu oficio.
        </p>
        <p>
          La app fue hecha por <strong>LUIXSO</strong>, con la ayuda de inteligencia artificial, y la comparto con toda
          la comunidad. Es gratuita y sin anuncios.
        </p>
      </div>

      <h2 className="label">Donaciones</h2>
      <p className="muted">
        Si ReadUp te ayuda y quieres apoyar su desarrollo, pronto podrás hacer una donación.
      </p>
      <button className="btn primary" disabled aria-disabled="true">
        Donar · próximamente
      </button>

      <h2 className="label">Créditos</h2>
      <p className="muted small">
        Los textos de documentación pertenecen a sus autores y se muestran con fines de estudio, con enlace a la fuente
        original y su licencia. Las lecturas, la gramática y los tips son contenido propio de ReadUp.
      </p>

      <div className="list" style={{ marginTop: 32 }}>
        <Link href="/" className="row-link">
          <span className="row-title">Volver al inicio</span>
          <span className="muted">→</span>
        </Link>
      </div>
    </article>
  );
}
