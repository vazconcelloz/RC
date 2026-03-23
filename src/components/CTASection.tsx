import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formatWhatsapp = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const CTASection = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get("nome") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const ramo = String(formData.get("ramo") ?? "").trim();


    if (!nome || !email || !whatsapp.trim() || !ramo) {
      setFeedbackMessage("Preencha todos os campos para enviar o formulário.");
      setShowSuccessPopup(false);
      return;
    }
    // O campo especialidade é opcional, mas pode ser usado aqui se necessário

    setFeedbackMessage("");
    setShowSuccessPopup(true);
    form.reset();
    setWhatsapp("");
  };

  return (
    <section id="formulario-estudo" className="py-16 md:py-24 bg-primary">
      <div className="container px-4 md:px-8 text-center">

        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary-foreground">
          Proteja seu patrimônio. {" "}
          <span className="text-primary-foreground/90 block mt-1">Realize seu estudo agora.</span>
        </h2>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/80 text-sm">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-foreground" /> Consultoria especializada em responsabilidade civil</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-5 md:p-6 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="cta-nome" className="text-primary-foreground font-semibold">*NOME:</Label>
              <Input id="cta-nome" name="nome" type="text" placeholder="Seu nome completo" className="bg-primary-foreground text-primary placeholder:text-primary/60 border-primary-foreground/50" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-email" className="text-primary-foreground font-semibold">*E-MAIL:</Label>
              <Input id="cta-email" name="email" type="email" placeholder="nome@empresa.com" className="bg-primary-foreground text-primary placeholder:text-primary/60 border-primary-foreground/50" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-whatsapp" className="text-primary-foreground font-semibold">*WHATSAPP:</Label>
              <Input
                id="cta-whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="numeric"
                placeholder="(11) 99999-9999"
                value={whatsapp}
                onChange={(event) => setWhatsapp(formatWhatsapp(event.target.value))}
                className="bg-primary-foreground text-primary placeholder:text-primary/60 border-primary-foreground/50"
                required
              />
            </div>

          </div>

          <div className="space-y-2 md:col-span-2 mt-4">
            <Label htmlFor="cta-ramo" className="text-primary-foreground font-semibold">*RAMO DE ATIVIDADE:</Label>
            <Input id="cta-ramo" name="ramo" type="text" placeholder="Ex: Odontologia, Medicina, Estética..." className="bg-primary-foreground text-primary placeholder:text-primary/60 border-primary-foreground/50" required />
          </div>

          <p className="mt-6 text-sm text-primary-foreground/90">
            Ao enviar, concordo em receber comunicações e conteúdos da FBN sobre seguros.
          </p>

          <Button type="submit" size="lg" className="mt-6 w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-heading font-bold text-base h-12">
            Enviar dados para estudo
          </Button>

          {feedbackMessage ? (
            <p className="mt-4 text-sm md:text-base text-primary-foreground font-medium">
              {feedbackMessage}
            </p>
          ) : null}
        </form>

        {showSuccessPopup ? (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 md:p-7 text-center shadow-2xl">
              <CheckCircle2 className="mx-auto h-16 w-16 text-blue-600" />
              <p className="mt-4 text-base md:text-lg font-semibold text-slate-900">
                Recebemos suas informações, um de nossos especialistas entrará em contato em breve
              </p>
              <Button type="button" className="mt-6" onClick={() => setShowSuccessPopup(false)}>
                Fechar
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CTASection;
