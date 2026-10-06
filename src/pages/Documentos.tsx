
import { Download, FileText, Search, Filter, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Documentos = () => {
  const documents = [
    {
      id: 1,
      title: "Protocolo de Atendimento COVID-19",
      category: "Protocolo",
      type: "PDF",
      size: "2.1 MB",
      date: "2024-01-15",
      downloads: 234
    },
    {
      id: 2,
      title: "Diretrizes de Prescrição Eletrônica",
      category: "Diretriz",
      type: "PDF",
      size: "1.8 MB",
      date: "2024-01-10",
      downloads: 189
    },
    {
      id: 3,
      title: "Manual de Boas Práticas em Telemedicina",
      category: "Manual",
      type: "PDF",
      size: "3.5 MB",
      date: "2024-01-05",
      downloads: 156
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Documentos e Protocolos
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Acesse protocolos, manuais e documentos técnicos para download
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500">
                <option value="">Todas as categorias</option>
                <option value="protocolo">Protocolos</option>
                <option value="manual">Manuais</option>
                <option value="diretriz">Diretrizes</option>
              </select>
              <Button variant="outline" className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50">
                <Filter className="h-4 w-4 mr-1" />
                Filtrar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {documents.map((doc) => (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-medical-green-100 p-2 rounded-lg">
                        <FileText className="h-6 w-6 text-medical-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="bg-gray-100 px-2 py-1 rounded">{doc.category}</span>
                          <span>{doc.type}</span>
                          <span>{doc.size}</span>
                          <span>{doc.downloads} downloads</span>
                        </div>
                      </div>
                    </CardTitle>
                    <div className="text-right text-sm text-gray-500">
                      {new Date(doc.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Folder className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Categoria: {doc.category}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50">
                        Visualizar
                      </Button>
                      <Button className="bg-medical-green-600 hover:bg-medical-green-700">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Access Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-900">Acesso para Associados</h3>
                <p className="text-blue-700">
                  Alguns documentos estão disponíveis exclusivamente para membros da associação. 
                  Faça login para acessar todo o conteúdo.
                </p>
                <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                  Fazer Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentos;
