import { whatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
};

export function WhatsAppButton({
  className = "",
  label = "Agendar cita por WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-800 ${className}`}
    >
      {label}
    </a>
  );
}
