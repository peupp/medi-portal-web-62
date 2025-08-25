import { Users, AlertTriangle, CheckCircle, Info, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Doctor() {
  const patientStats = [
    {
      priority: 'urgent',
      label: 'Urgente',
      count: 3,
      icon: AlertTriangle,
      description: 'Pacientes que precisam de atendimento imediato',
      color: 'priority-card-urgent'
    },
    {
      priority: 'attention',
      label: 'Atenção',
      count: 7,
      icon: Info,
      description: 'Pacientes que requerem atenção especial',
      color: 'priority-card-attention'
    },
    {
      priority: 'common',
      label: 'Caso Comum',
      count: 12,
      icon: CheckCircle,
      description: 'Pacientes com casos de rotina',
      color: 'priority-card-common'
    },
    {
      priority: 'simple',
      label: 'Caso Simples',
      count: 8,
      icon: Clock,
      description: 'Consultas rápidas e procedimentos simples',
      color: 'priority-card-simple'
    }
  ];

  const totalPatients = patientStats.reduce((sum, stat) => sum + stat.count, 0);

  const upcomingAppointments = [
    { time: '08:00', patient: 'Maria Silva', type: 'Consulta de Rotina', priority: 'simple' },
    { time: '08:30', patient: 'João Santos', type: 'Emergência Cardíaca', priority: 'urgent' },
    { time: '09:00', patient: 'Ana Costa', type: 'Acompanhamento', priority: 'common' },
    { time: '09:30', patient: 'Pedro Lima', type: 'Revisão Pós-Cirurgia', priority: 'attention' },
    { time: '10:00', patient: 'Sofia Oliveira', type: 'Consulta Preventiva', priority: 'simple' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'attention': return 'bg-yellow-400 text-yellow-900';
      case 'common': return 'bg-green-500 text-white';
      case 'simple': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'Urgente';
      case 'attention': return 'Atenção';
      case 'common': return 'Comum';
      case 'simple': return 'Simples';
      default: return priority;
    }
  };

  return (
    <div className="min-h-screen bg-accent/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Painel Médico</h1>
          <p className="text-lg text-muted-foreground">
            Gerencie seus pacientes e visualize as prioridades de atendimento
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Users className="mr-2 h-5 w-5" />
              {totalPatients} pacientes aguardando
            </Badge>
          </div>
        </div>

        {/* Priority Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {patientStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.priority} className={`${stat.color} text-white border-0 shadow-lg hover:scale-105 transition-all duration-300`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{stat.label}</CardTitle>
                    <IconComponent className="h-6 w-6 opacity-80" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">{stat.count}</div>
                  <CardDescription className="text-white/80 text-sm">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Appointments */}
        <Card className="medical-card border-0 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Próximos Atendimentos</CardTitle>
            <CardDescription className="text-center text-lg">
              Agenda do dia com prioridades organizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-semibold min-w-[80px] text-center">
                      {appointment.time}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{appointment.patient}</h3>
                      <p className="text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                  <Badge className={getPriorityColor(appointment.priority)}>
                    {getPriorityLabel(appointment.priority)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="medical-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">Consultas Hoje</p>
            </CardContent>
          </Card>
          
          <Card className="medical-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </CardContent>
          </Card>
          
          <Card className="medical-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">2.5h</div>
              <p className="text-muted-foreground">Tempo Médio</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}