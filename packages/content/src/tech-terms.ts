/**
 * Vocabulario técnico que los hispanohablantes suelen pronunciar mal.
 * `say` es lo que se envía a la síntesis de voz cuando difiere de la escritura.
 */
export interface TechTerm {
  term: string;
  es: string;
  tip: string;
  say?: string;
}

export const TECH_TERMS: TechTerm[] = [
  { term: "cache", es: "caché", tip: "Como cash: /kæʃ/. Nunca «cachí»." },
  { term: "queue", es: "cola", tip: "Solo se pronuncia la q: /kjuː/, «kiú»." },
  { term: "deploy", es: "desplegar", tip: "Acento al final: de-PLOY." },
  { term: "router", es: "router", tip: "UK «rúter», US «ráuter»." },
  { term: "Linux", es: "Linux", tip: "/ˈlɪnəks/, «línuks»." },
  { term: "SQL", es: "SQL", tip: "Se dice «S-Q-L» o «sequel».", say: "sequel" },
  { term: "nginx", es: "nginx", tip: "Se dice «engine-x».", say: "engine x" },
  { term: "Kubernetes", es: "Kubernetes", tip: "«kiu-ber-NE-tis»." },
  { term: "YAML", es: "YAML", tip: "Rima con camel: «yámel»." },
  { term: "GUI", es: "interfaz gráfica", tip: "Se dice «gooey» /ˈɡuːi/.", say: "gooey" },
  { term: "data", es: "datos", tip: "«déita» (UK) o «dérra» (US). Nunca «data» a la española." },
  { term: "suite", es: "suite, paquete", tip: "Igual que sweet: /swiːt/." },
  { term: "archive", es: "archivo (histórico)", tip: "«ÁR-kaiv»." },
  { term: "hierarchy", es: "jerarquía", tip: "«HÁI-er-ar-ki»." },
  { term: "determine", es: "determinar", tip: "«di-TÉR-min», no «determáin»." },
  { term: "width", es: "ancho", tip: "/wɪdθ/: termina con th." },
  { term: "height", es: "alto", tip: "«jait», como light." },
  { term: "Wi-Fi", es: "wifi", tip: "«uái-fai», no «uífi»." },
  { term: "API", es: "API", tip: "Letra a letra: «ei-pi-ái»." },
  { term: "sudo", es: "sudo", tip: "«SÚ-du»." },
];
