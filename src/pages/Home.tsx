import { Link } from "react-router-dom";
import { User, UserCheck, ChevronRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hospitalBanner from "@/assets/hospital-banner.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cuidado médico de 
                <span className="text-secondary"> excelência</span>
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                Tecnologia avançada, profissionais especializados e atendimento humanizado 
                para cuidar da sua saúde e da sua família.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/paciente">
                  <Button size="lg" className="btn-hospital-secondary w-full sm:w-auto group">
                    <User className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Sou Paciente
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/medico">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 group"
                  >
                    <UserCheck className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Sou Médico
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={hospitalBanner}
                alt="Hospital São Paulo - Ambiente moderno e acolhedor"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Por que escolher o Hospital São Paulo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso compromisso é oferecer o melhor atendimento médico com tecnologia 
              de ponta e cuidado humanizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-card border-0 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Segurança Total</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Protocolos rigorosos de segurança e higiene para garantir 
                  seu bem-estar durante todo o atendimento.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Atendimento 24h</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pronto-socorro funcionando 24 horas por dia para 
                  emergências médicas e urgências.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card border-0 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Excelência Médica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Equipe médica altamente qualificada com especialistas 
                  reconhecidos em suas áreas de atuação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Em caso de emergência</h2>
          <p className="text-lg mb-6 opacity-90">
            Nossa equipe está preparada para atendê-lo 24 horas por dia
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
            Ligar: (11) 3456-7890
          </Button>
        </div>
      </section>
    </div>
  );
}