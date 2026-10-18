"use client";

import { useEffect, useState } from "react";
import { dueCards } from "@/lib/deck";
import { useSyncVersion } from "@/lib/events";

export function DueCount() {
  const [due, setDue] = useState<number | null>(null);
  const version = useSyncVersion();
  useEffect(() => setDue(dueCards().length), [version]);
  if (!due) return null;
  return <span className="pill">{due}</span>;
}
