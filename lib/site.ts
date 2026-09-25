export const CLINIC_NAME = "Dr. Karina Gonzalez";

export const WHATSAPP_NUMBER = "56964594995";
export const WHATSAPP_MESSAGE =
  "Hola, quiero agendar una cita veterinaria.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
