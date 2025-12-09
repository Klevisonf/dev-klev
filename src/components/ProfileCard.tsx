import {
  Briefcase,
  Code,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProfileCard = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-card rounded-2xl p-6 border border-border shadow-glow-lg">
        {/* Menu button */}
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>

        {/* Header section */}
        <div className="flex items-start gap-5 mb-8">
          {/* Avatar with glow border */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-primary to-primary/50">
              <img
                src={profilePhoto}
                alt="Foto de perfil"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-1">
            <p className="text-muted-foreground text-sm mb-1">Olá, eu sou</p>
            <h1 className="text-2xl font-bold text-primary mb-3">
              Klevison Ferreira
            </h1>

            <div className="space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Desenvolvedor Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>João Pessoa - PB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(83) 987665048</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>klevison.ui@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion sections */}
        <Accordion type="multiple" className="space-y-3">
          <AccordionItem
            value="skills"
            className="border border-border rounded-xl px-4 bg-secondary/30"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-primary" />
                <span className="font-medium">Skills</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="idiomas"
            className="border border-border rounded-xl px-4 bg-secondary/30"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Languages className="w-5 h-5 text-primary" />
                <span className="font-medium">Idiomas</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>Português - Nativo</li>
                <li>Inglês - básico</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="experiencia"
            className="border border-border rounded-xl px-4 bg-secondary/30"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="font-medium">Experiência Profissional</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">
                    Desenvolvedor Full Stack
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    7en • 2022 - 2023
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Desenvolvedor Frontend
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Finampy • 2023 - 2024
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="educacao"
            className="border border-border rounded-xl px-4 bg-secondary/30"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="font-medium">Educação</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">
                    Analise e Desenvolvimento de sistemas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    UNIASSELVI • 2024 - 2026
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Footer */}
        <div className="mt-6 text-right">
          <span className="text-primary font-bold text-lg">dev.</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
