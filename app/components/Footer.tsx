import { CLINIC_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 px-6 py-8 text-center text-sm text-zinc-500">
      {CLINIC_NAME} · Cuidado veterinario
    </footer>
  );
}
