import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-secondary p-2 rounded-xl">
                <Heart className="h-6 w-6 text-secondary-foreground" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hospital São Paulo</h3>
                <p className="text-sm opacity-90">Cuidado com Excelência</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Há mais de 30 anos oferecendo atendimento médico de qualidade com 
              tecnologia de ponta e profissionais especializados.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm">contato@hospitalsaopaulo.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 opacity-80" />
                <div className="text-sm">
                  <p className="font-medium">Emergência: 24h</p>
                  <p className="opacity-80">Todos os dias</p>
                </div>
              </div>
              <div className="text-sm opacity-80">
                <p><strong>Consultas:</strong></p>
                <p>Segunda a Sexta: 7h às 19h</p>
                <p>Sábados: 8h às 14h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Hospital São Paulo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};