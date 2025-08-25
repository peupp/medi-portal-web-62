import { useState } from "react";
import { Calendar, Stethoscope, User, FileText, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Patient() {
  const [activeForm, setActiveForm] = useState<'consulta' | 'exame' | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    especialidade: '',
    tipoExame: '',
    data: '',
    horario: ''
  });
  const { toast } = useToast();

  const handleSubmit = (type: 'consulta' | 'exame') => {
    if (!formData.nome || !formData.cpf || !formData.data || !formData.horario) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: `${type === 'consulta' ? 'Consulta' : 'Exame'} agendado!`,
      description: `Seu agendamento foi realizado com sucesso. Você receberá uma confirmação em breve.`,
    });

    // Reset form
    setFormData({
      nome: '',
      cpf: '',
      especialidade: '',
      tipoExame: '',
      data: '',
      horario: ''
    });
    setActiveForm(null);
  };

  const especialidades = [
    'Cardiologia',
    'Dermatologia',
    'Endocrinologia',
    'Gastroenterologia',
    'Ginecologia',
    'Neurologia',
    'Oftalmologia',
    'Ortopedia',
    'Pediatria',
    'Psiquiatria',
    'Urologia'
  ];

  const tiposExame = [
    'Exame de Sangue',
    'Raio-X',
    'Ultrassom',
    'Tomografia',
    'Ressonância Magnética',
    'Eletrocardiograma',
    'Endoscopia',
    'Colonoscopia',
    'Mamografia',
    'Densitometria Óssea'
  ];

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  return (
    <div className="min-h-screen bg-accent/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Área do Paciente</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende suas consultas e exames de forma rápida e segura. 
            Nossa equipe está pronta para cuidar da sua saúde.
          </p>
        </div>

        {/* Action Cards */}
        {!activeForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="medical-card border-0 cursor-pointer hover:scale-105 transition-all duration-300 group"
              onClick={() => setActiveForm('consulta')}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-secondary/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-10 w-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Agendar Consulta</CardTitle>
                <CardDescription className="text-lg">
                  Marque uma consulta com nossos especialistas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="btn-hospital-secondary w-full group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Começar Agendamento
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="medical-card border-0 cursor-pointer hover:scale-105 transition-all duration-300 group"
              onClick={() => setActiveForm('exame')}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Activity className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Agendar Exame</CardTitle>
                <CardDescription className="text-lg">
                  Realize seus exames laboratoriais e de imagem
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="btn-hospital-primary w-full group">
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Começar Agendamento
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Forms */}
        {activeForm && (
          <div className="max-w-2xl mx-auto">
            <Card className="medical-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  {activeForm === 'consulta' ? 'Agendar Consulta' : 'Agendar Exame'}
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Preencha os dados abaixo para realizar seu agendamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome" className="text-primary font-medium">Nome Completo *</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cpf" className="text-primary font-medium">CPF *</Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                </div>

                {activeForm === 'consulta' && (
                  <div>
                    <Label htmlFor="especialidade" className="text-primary font-medium">Especialidade</Label>
                    <Select onValueChange={(value) => setFormData({...formData, especialidade: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione a especialidade" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        {especialidades.map((esp) => (
                          <SelectItem key={esp} value={esp}>{esp}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {activeForm === 'exame' && (
                  <div>
                    <Label htmlFor="tipoExame" className="text-primary font-medium">Tipo de Exame</Label>
                    <Select onValueChange={(value) => setFormData({...formData, tipoExame: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione o tipo de exame" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        {tiposExame.map((exame) => (
                          <SelectItem key={exame} value={exame}>{exame}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="data" className="text-primary font-medium">Data Preferencial *</Label>
                    <Input
                      id="data"
                      type="date"
                      value={formData.data}
                      onChange={(e) => setFormData({...formData, data: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="horario" className="text-primary font-medium">Horário Preferencial *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, horario: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        {horarios.map((horario) => (
                          <SelectItem key={horario} value={horario}>{horario}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setActiveForm(null)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={() => handleSubmit(activeForm)}
                    className={activeForm === 'consulta' ? 'btn-hospital-secondary flex-1' : 'btn-hospital-primary flex-1'}
                  >
                    {activeForm === 'consulta' ? (
                      <>
                        <Stethoscope className="mr-2 h-5 w-5" />
                        Agendar Consulta
                      </>
                    ) : (
                      <>
                        <Activity className="mr-2 h-5 w-5" />
                        Agendar Exame
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}