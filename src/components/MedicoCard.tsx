
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MedicoCard as MedicoCardType } from '@/hooks/useMedicos';

interface MedicoCardProps {
  medico: MedicoCardType;
  conselhoCor: string;
  conselhoCorFundo: string;
  hideFoto?: boolean;
}

const MedicoCard = ({ medico, conselhoCor, conselhoCorFundo, hideFoto = false }: MedicoCardProps) => {
  if (hideFoto) {
    // Layout sem foto - apenas nome e CRM
    return (
      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden hover:-translate-y-2">
        <CardContent className="p-6">
          <div className="text-center">
            <div className={`inline-flex ${conselhoCorFundo} ${conselhoCor} px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md mb-4`}>
              {medico.funcao_conselho}
            </div>
            <h4 className="font-playfair text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
              {medico.nome}
            </h4>
            <p className={`text-sm font-medium ${conselhoCor}`}>
              {medico.crm}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Layout original com foto
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={medico.foto_url || '/placeholder.svg'}
            alt={medico.nome}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className={`absolute top-3 left-3 ${conselhoCorFundo} ${conselhoCor} px-2 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md`}>
            {medico.funcao_conselho}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="text-center">
          <h4 className="font-playfair text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            {medico.nome}
          </h4>
          <p className={`text-sm font-medium ${conselhoCor}`}>
            {medico.crm}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicoCard;
