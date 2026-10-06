
import { Users, Search, MapPin, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Associados = () => {
  const mockDoctors = [
    {
      id: 1,
      name: "Dr. João Silva",
      specialty: "Cardiologia",
      location: "São Paulo - SP",
      crm: "CRM/SP 123456",
      phone: "(11) 9999-8888"
    },
    {
      id: 2,
      name: "Dra. Maria Santos",
      specialty: "Pediatria",
      location: "Rio de Janeiro - RJ",
      crm: "CRM/RJ 654321",
      phone: "(21) 8888-7777"
    },
    {
      id: 3,
      name: "Dr. Carlos Oliveira",
      specialty: "Ortopedia",
      location: "Belo Horizonte - MG",
      crm: "CRM/MG 789012",
      phone: "(31) 7777-6666"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Encontre seu Médico
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Conecte-se com profissionais qualificados da nossa associação
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Médico
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Digite o nome"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidade
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500">
                  <option value="">Todas as especialidades</option>
                  <option value="cardiologia">Cardiologia</option>
                  <option value="pediatria">Pediatria</option>
                  <option value="ortopedia">Ortopedia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localização
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Cidade - Estado"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-medical-green-600 hover:bg-medical-green-700 text-white px-8 py-2">
                Buscar Médicos
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Stethoscope className="h-5 w-5 text-medical-green-600" />
                    <span>{doctor.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-medical-green-600 font-medium">{doctor.specialty}</p>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {doctor.location}
                    </p>
                    <p className="text-gray-600">{doctor.crm}</p>
                    <p className="text-gray-600">{doctor.phone}</p>
                  </div>
                  <Button className="w-full mt-4 bg-medical-green-600 hover:bg-medical-green-700">
                    Ver Perfil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-medical-green-50 rounded-lg p-8">
            <Users className="h-16 w-16 text-medical-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              É médico e quer fazer parte?
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se à nossa associação e conecte-se com colegas da área médica
            </p>
            <Button className="btn-gold px-8 py-3">
              Seja um Associado
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Associados;
