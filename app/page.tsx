import Image from "next/image";
import { FadeIn } from "./components/FadeIn";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="home"
        className="mx-auto grid min-h-svh max-w-6xl scroll-mt-24 items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-2 md:pt-24"
      >
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-800">
            Home
          </p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
            Citas veterinarias, con calma y claridad.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-7 text-zinc-600">
            Consultas, vacunas y controles para tu mascota. Agenda en un
            mensaje, sin formularios largos.
          </p>
          <div className="mt-8">
            <WhatsAppButton />
          </div>
        </FadeIn>

        <FadeIn delayMs={120} className="relative">
          <div className="animate-float overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-28px_rgba(15,40,25,0.35)]">
            <Image
              src="/images/hero.jpg"
              alt="Perro golden retriever al aire libre"
              width={1600}
              height={1067}
              priority
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[520px]"
            />
          </div>
        </FadeIn>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-zinc-200/80 bg-white/50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <FadeIn className="order-2 md:order-1">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/about.jpg"
                alt="Dos perros descansando juntos"
                width={1400}
                height={935}
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[460px]"
              />
            </div>
          </FadeIn>

          <FadeIn delayMs={100} className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-800">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Atención cercana, sin ruido.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-600">
              Somos un equipo pequeño. Priorizamos tiempo real con tu mascota,
              explicaciones simples y un ritmo de consulta que no apura.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-zinc-700">
              <li>Consultas generales y controles</li>
              <li>Vacunación y desparasitación</li>
              <li>Orientación de cuidados en casa</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-800">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Escríbenos y coordinamos.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-600">
              WhatsApp es nuestro canal principal. Cuéntanos el nombre de tu
              mascota y el motivo de la visita.
            </p>
            <p className="mt-6 text-sm text-zinc-500">Lunes a sábado · 10:00–19:00</p>
            <div className="mt-8">
              <WhatsAppButton label="Abrir WhatsApp" />
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/contact.jpg"
                alt="Gato mirando a cámara"
                width={1400}
                height={963}
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[460px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
