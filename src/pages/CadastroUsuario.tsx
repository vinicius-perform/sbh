
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const cadastroSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome completo é obrigatório'),
  crm: z.string().min(1, 'CRM é obrigatório'),
  email: z.string().email('E-mail inválido'),
  senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  telefone: z.string().min(10, 'Telefone é obrigatório'),
  especialidade: z.string().min(1, 'Especialidade é obrigatória'),
  tipoAssociacao: z.string().min(1, 'Tipo de associação é obrigatório'),
  aceitaTermos: z.boolean().refine(val => val === true, 'Você deve aceitar os termos de associação')
});

type CadastroForm = z.infer<typeof cadastroSchema>;

const especialidades = [
  'Cirurgia Plástica',
  'Dermatologia',
  'Medicina Estética',
  'Cirurgia Geral',
  'Ginecologia',
  'Ortopedia',
  'Outras'
];

const tiposAssociacao = [
  'Associado Titular',
  'Associado Colaborador',
  'Associado Estudante',
  'Associado Internacional'
];

const CadastroUsuario = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nomeCompleto: '',
      crm: '',
      email: '',
      senha: '',
      telefone: '',
      especialidade: '',
      tipoAssociacao: '',
      aceitaTermos: false
    }
  });

  const onSubmit = async (data: CadastroForm) => {
    setIsLoading(true);
    
    try {
      console.log('Criando usuário no Supabase Auth...');
      
      // Criar usuário no Supabase Authentication com a senha fornecida
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.senha,
        options: {
          data: {
            nome_completo: data.nomeCompleto,
            crm: data.crm,
            telefone: data.telefone,
            especialidade: data.especialidade,
            tipo_associacao: data.tipoAssociacao
          }
        }
      });

      if (authError) {
        console.error('Erro ao criar usuário no Auth:', authError);
        throw authError;
      }

      console.log('Usuário criado no Auth:', authData.user?.id);

      // Salvar dados adicionais na tabela usuarios_cadastrados
      if (authData.user) {
        console.log('Salvando dados na tabela usuarios_cadastrados...');
        
        const { error: dbError } = await supabase
          .from('usuarios_cadastrados')
          .insert({
            user_id: authData.user.id,
            nome_completo: data.nomeCompleto,
            crm: data.crm,
            telefone: data.telefone,
            especialidade: data.especialidade,
            tipo_associacao: data.tipoAssociacao
          });

        if (dbError) {
          console.error('Erro ao salvar dados na tabela:', dbError);
          throw dbError;
        }

        console.log('Dados salvos com sucesso na tabela usuarios_cadastrados');
      }
      
      toast({
        title: "Usuário cadastrado com sucesso!",
        description: "O usuário foi criado no sistema e pode fazer login com o e-mail e senha cadastrados.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Erro detalhado:', error);
      toast({
        title: "Erro ao cadastrar usuário",
        description: "Verifique se o e-mail já não está em uso. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link
              to="/area-restrita"
              className="inline-flex items-center text-sm font-medium text-medical-green-700 hover:text-medical-green-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a Área Restrita
            </Link>
          </div>
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair font-bold text-gray-900 mb-2">
                Cadastro de Associado
              </CardTitle>
              <p className="text-gray-600">
                Preencha os dados para criar um novo usuário no sistema
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nomeCompleto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Dr(a). Seu Nome" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="crm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CRM *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="CRM/SP 123456" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="seu@email.com" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="senha"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha *</FormLabel>
                          <FormControl>
                            <Input 
                              type="password"
                              placeholder="Senha de acesso" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(11) 99999-8888" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="especialidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Especialidade *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Selecione sua especialidade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {especialidades.map((especialidade) => (
                                <SelectItem key={especialidade} value={especialidade}>
                                  {especialidade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tipoAssociacao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Associação *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tiposAssociacao.map((tipo) => (
                              <SelectItem key={tipo} value={tipo}>
                                {tipo}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="aceitaTermos"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Li e concordo com os termos de associação *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-medical-green-600 hover:bg-medical-green-700 h-12 text-lg font-semibold"
                    disabled={isLoading}
                  >
                    <Star className="w-5 h-5 mr-2" />
                    {isLoading ? 'Criando usuário...' : 'Cadastrar Usuário'}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center text-sm text-gray-600">
                O usuário será criado no sistema e poderá fazer login com o e-mail e senha cadastrados.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuario;
