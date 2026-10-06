
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const MedicoPublicoSkeleton = () => {
  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Foto skeleton */}
          <Skeleton className="w-20 h-20 rounded-full" />
          
          {/* Nome skeleton */}
          <Skeleton className="h-6 w-32" />
          
          {/* CRM skeleton */}
          <Skeleton className="h-4 w-24" />
          
          {/* Localização skeleton */}
          <Skeleton className="h-4 w-28" />
          
          {/* Botão skeleton */}
          <Skeleton className="h-8 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicoPublicoSkeleton;
