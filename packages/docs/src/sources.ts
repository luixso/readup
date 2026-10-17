/**
 * Fuentes oficiales de documentación que se pueden leer dentro de la app.
 * Solo se descargan páginas de estos dominios (evita que el servidor se use como proxy abierto).
 */
export const ALLOWED_HOSTS = [
  "wiki.archlinux.org",
  "wiki.hypr.land",
  "learn.omacom.io",
  "docs.github.com",
  "git-scm.com",
  "pve.proxmox.com",
  "en.wikipedia.org",
  "docs.claude.com",
  "docs.anthropic.com",
  "docs.docker.com",
  "kubernetes.io",
] as const;

export function isAllowedUrl(raw: string): boolean {
  try {
    const url = new URL(raw);
    return url.protocol === "https:" && (ALLOWED_HOSTS as readonly string[]).includes(url.hostname);
  } catch {
    return false;
  }
}

export interface DocPage {
  title: string;
  url: string;
  /** Qué vas a aprender, en español. */
  note: string;
}

export interface DocProject {
  id: string;
  name: string;
  description: string;
  license: string;
  pages: DocPage[];
}

export const DOC_PROJECTS: DocProject[] = [
  {
    id: "omarchy",
    name: "Omarchy",
    description: "Manual oficial de Omarchy, el entorno de Arch Linux + Hyprland de Basecamp.",
    license: "© 37signals",
    pages: [
      {
        title: "The Omarchy Manual",
        url: "https://learn.omacom.io/2/the-omarchy-manual",
        note: "Índice del manual: instalación, atajos, temas y apps.",
      },
    ],
  },
  {
    id: "hyprland",
    name: "Hyprland",
    description: "Wiki oficial del compositor Wayland Hyprland.",
    license: "BSD-3",
    pages: [
      { title: "Hyprland Wiki", url: "https://wiki.hypr.land/", note: "Portada de la wiki." },
      {
        title: "Installation",
        url: "https://wiki.hypr.land/Getting-Started/Installation/",
        note: "Cómo instalar Hyprland.",
      },
      {
        title: "Master Tutorial",
        url: "https://wiki.hypr.land/Getting-Started/Master-Tutorial/",
        note: "Primeros pasos y configuración básica.",
      },
      { title: "Configuring", url: "https://wiki.hypr.land/Configuring/", note: "Cómo funciona el archivo de configuración." },
      { title: "Binds", url: "https://wiki.hypr.land/Configuring/Binds/", note: "Atajos de teclado." },
      { title: "Hyprland (ArchWiki)", url: "https://wiki.archlinux.org/title/Hyprland", note: "La visión de la ArchWiki." },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    description: "Documentación oficial de GitHub y el libro Pro Git.",
    license: "CC BY 4.0",
    pages: [
      {
        title: "Hello World",
        url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
        note: "Repositorios, ramas, commits y pull requests en 10 minutos.",
      },
      {
        title: "About Git",
        url: "https://docs.github.com/en/get-started/using-git/about-git",
        note: "Qué es Git y cómo funciona el control de versiones.",
      },
      {
        title: "About pull requests",
        url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
        note: "Proponer cambios y revisar código.",
      },
      {
        title: "Understanding GitHub Actions",
        url: "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions",
        note: "CI/CD con workflows, jobs y runners.",
      },
      {
        title: "Pro Git: Getting Started",
        url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
        note: "El libro oficial de Git, capítulo 1.",
      },
    ],
  },
  {
    id: "ia",
    name: "IA",
    description: "Conceptos de inteligencia artificial y documentación de Claude.",
    license: "CC BY-SA 4.0 (Wikipedia)",
    pages: [
      {
        title: "Large language model",
        url: "https://en.wikipedia.org/wiki/Large_language_model",
        note: "Qué es un LLM y cómo se entrena.",
      },
      {
        title: "Prompt engineering",
        url: "https://en.wikipedia.org/wiki/Prompt_engineering",
        note: "Técnicas para escribir buenas instrucciones.",
      },
      {
        title: "Retrieval-augmented generation",
        url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
        note: "RAG: combinar búsqueda y generación.",
      },
      {
        title: "Prompt engineering overview (Claude)",
        url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview",
        note: "Guía oficial de Anthropic.",
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    description: "La ArchWiki: la referencia más completa sobre Linux.",
    license: "GFDL 1.3",
    pages: [
      {
        title: "General recommendations",
        url: "https://wiki.archlinux.org/title/General_recommendations",
        note: "Qué hacer después de instalar.",
      },
      { title: "systemd", url: "https://wiki.archlinux.org/title/Systemd", note: "Servicios, unidades y journalctl." },
      { title: "pacman", url: "https://wiki.archlinux.org/title/Pacman", note: "El gestor de paquetes de Arch." },
      {
        title: "Users and groups",
        url: "https://wiki.archlinux.org/title/Users_and_groups",
        note: "Usuarios, grupos y permisos.",
      },
      { title: "OpenSSH", url: "https://wiki.archlinux.org/title/OpenSSH", note: "Conexiones remotas seguras." },
    ],
  },
  {
    id: "proxmox",
    name: "Proxmox",
    description: "Wiki oficial de Proxmox VE: virtualización con KVM y contenedores LXC.",
    license: "GFDL",
    pages: [
      { title: "Main Page", url: "https://pve.proxmox.com/wiki/Main_Page", note: "Portada de la wiki." },
      { title: "Installation", url: "https://pve.proxmox.com/wiki/Installation", note: "Instalar Proxmox VE." },
      {
        title: "QEMU/KVM Virtual Machines",
        url: "https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines",
        note: "Crear y configurar máquinas virtuales.",
      },
      { title: "Linux Container", url: "https://pve.proxmox.com/wiki/Linux_Container", note: "Contenedores LXC." },
      { title: "Backup and Restore", url: "https://pve.proxmox.com/wiki/Backup_and_Restore", note: "Copias de seguridad." },
    ],
  },
  {
    id: "contenedores",
    name: "Docker y Kubernetes",
    description: "Documentación oficial de contenedores y orquestación.",
    license: "Apache 2.0 / CC BY 4.0",
    pages: [
      {
        title: "Docker overview",
        url: "https://docs.docker.com/get-started/docker-overview/",
        note: "Arquitectura de Docker: imágenes, contenedores, registros.",
      },
      {
        title: "Kubernetes overview",
        url: "https://kubernetes.io/docs/concepts/overview/",
        note: "Qué es Kubernetes y por qué se usa.",
      },
    ],
  },
];

export function siteName(url: string): string {
  const host = new URL(url).hostname;
  const names: Record<string, string> = {
    "wiki.archlinux.org": "ArchWiki",
    "wiki.hypr.land": "Hyprland Wiki",
    "learn.omacom.io": "Omarchy Manual",
    "docs.github.com": "GitHub Docs",
    "git-scm.com": "Pro Git",
    "pve.proxmox.com": "Proxmox VE Wiki",
    "en.wikipedia.org": "Wikipedia",
    "docs.claude.com": "Claude Docs",
    "docs.anthropic.com": "Claude Docs",
    "docs.docker.com": "Docker Docs",
    "kubernetes.io": "Kubernetes Docs",
  };
  return names[host] ?? host;
}
