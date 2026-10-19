
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Associados from "./pages/Associados";
import EncontreSeuMedico from "./pages/EncontreSeuMedico";
import Eventos from "./pages/Eventos";
import Legislacao from "./pages/Legislacao";
import AreaRestrita from "./pages/AreaRestrita";
import Publicacoes from "./pages/Publicacoes";
import ArtigoDetalhes from "./pages/ArtigoDetalhes";
import SejaAssociado from "./pages/SejaAssociado";
import CadastroUsuario from "./pages/CadastroUsuario";
import AdminRoute from "./components/AdminRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/associados" element={<Associados />} />
        <Route path="/encontre-seu-medico" element={<EncontreSeuMedico />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/legislacao" element={<Legislacao />} />
        <Route path="/area-restrita" element={<AreaRestrita />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/artigo/:id" element={<ArtigoDetalhes />} />
        <Route path="/seja-associado" element={<SejaAssociado />} />
        <Route
          path="/admin/cadastro-usuario"
          element={
            <AdminRoute>
              <CadastroUsuario />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
          <Sonner />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
