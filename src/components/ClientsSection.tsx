import logoGio from "@/assets/Logo-GIO.png";
import logoMedassist from "@/assets/Logo-Medassist.png";
import logoOdontoclinic from "@/assets/Logo-Odontoclinic.png";
import logoOralunic from "@/assets/Logo-Oralunic.png";
import logoSorridents from "@/assets/Logo-Sorridents.png";
import logoAlemDoOlhar from "@/assets/Logo-Alem-do-olhar.png";
import logoAmoVacinas from "@/assets/Logo-Amo-vacinas.png";
import logoMaisLaser from "@/assets/Logo-Mais-laser.png";
import logoOlharCerto from "@/assets/Logo-Olharcerto.png";
import logoOnodera from "@/assets/Logo-Onodera.png";
import logoOdontospecial from "@/assets/Logo-Odontospecial.png";

type ClientLogo = {
  name: string;
  logo: string;
  logoClassName?: string;
};

const clientsRow1: ClientLogo[] = [
  { name: "GIO", logo: logoGio },
  { name: "Medassist", logo: logoMedassist, logoClassName: "max-h-16 md:max-h-20" },
  { name: "Odontoclinic", logo: logoOdontoclinic },
  { name: "Oralunic", logo: logoOralunic },
  { name: "Sorridents", logo: logoSorridents },
  { name: "Alem do Olhar", logo: logoAlemDoOlhar, logoClassName: "max-h-56 md:max-h-72 w-auto max-w-[300px]" },
];

const clientsRow2: ClientLogo[] = [
  { name: "Amo Vacinas", logo: logoAmoVacinas },
  { name: "Mais Laser", logo: logoMaisLaser },
  { name: "Olhar Certo", logo: logoOlharCerto },
  { name: "Onodera", logo: logoOnodera },
  { name: "Odontospecial", logo: logoOdontospecial },
];

const MarqueeRow = ({ clients, direction }: { clients: ClientLogo[]; direction: "left" | "right" }) => {
  const tripled = [...clients, ...clients, ...clients];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-visible py-2 [touch-action:pan-y]">
      <div className={`flex min-w-max will-change-transform ${animationClass}`}>
        {tripled.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`grid place-items-center h-20 md:h-24 w-44 mr-8 md:mr-10 p-3 shrink-0 overflow-visible ${client.name === 'Alem do Olhar' ? 'ml-[-1.5rem] mr-20 md:mr-32 -mb-8 md:-mb-12' : ''}`}
          >
            <img
              src={client.logo}
              alt={`Logo ${client.name}`}
              className={`max-h-12 md:max-h-14 w-auto max-w-full object-contain object-center ${client.logoClassName ?? ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="-mt-4 md:-mt-8 pt-0 pb-16 md:pt-2 md:pb-24 bg-background overflow-x-clip">
      <div className="container px-4 md:px-8 mb-6 md:mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Alguns dos clientes que <span className="text-primary">confiam na FBN</span>
        </h3>
      </div>
      <MarqueeRow clients={clientsRow1} direction="left" />
      <MarqueeRow clients={clientsRow2} direction="right" />
    </section>
  );
};

export default ClientsSection;
