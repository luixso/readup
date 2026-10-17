"use client";

import { useEffect, useState } from "react";
import { dueCards } from "@/lib/deck";

export function DueCount() {
  const [due, setDue] = useState<number | null>(null);
  useEffect(() => setDue(dueCards().length), []);
  if (!due) return null;
  return <span className="pill">{due}</span>;
}
