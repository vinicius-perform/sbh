
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MapPin, FileText, Stethoscope } from 'lucide-react';
import { MedicoPublico } from '@/hooks/useMedicosPublicos';

interface MedicoPublicoCardProps {
  medico: MedicoPublico;
}

const MedicoPublicoCard = ({ medico }: MedicoPublicoCardProps) => {
  const formatInstagramUrl = (instagram: string | null) => {
    if (!instagram) return null;
    
    // Se já é uma URL completa
    if (instagram.startsWith('http')) {
      return instagram;
    }
    
    // Remover @ se existir e montar URL
    const handle = instagram.startsWith('@') ? instagram.slice(1) : instagram;
    return `https://instagram.com/${handle}`;
  };

  const instagramUrl = formatInstagramUrl(medico.instagram);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Foto do médico */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {medico.foto_url ? (
              <img
                src={medico.foto_url}
                alt={medico.nome_completo || 'Médico'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-16 h-16 bg-medical-green-100 rounded-full flex items-center justify-center"><FileText class="w-8 h-8 text-medical-green-600" /></div>';
                }}
              />
            ) : (
              <div className="w-16 h-16 bg-medical-green-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-medical-green-600" />
              </div>
            )}
          </div>

          {/* Nome do médico */}
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">
            {medico.nome_completo || 'Nome não informado'}
          </h3>

          {/* CRM */}
          {medico.crm && (
            <p className="text-medical-green-600 font-medium text-sm">
              {medico.crm}
            </p>
          )}

          {/* Especialidade */}
          {medico.especialidade && (
            <div className="flex items-center text-gray-600 text-sm">
              <Stethoscope className="w-4 h-4 mr-1" />
              <span>{medico.especialidade}</span>
            </div>
          )}

          {/* Localização */}
          {(medico.cidade || medico.estado) && (
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>
                {[medico.cidade, medico.estado].filter(Boolean).join(' - ')}
              </span>
            </div>
          )}

          {/* Botão Instagram */}
          {instagramUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400"
              onClick={() => window.open(instagramUrl, '_blank', 'noopener')}
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicoPublicoCard;
