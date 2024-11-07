import { z } from 'zod';

// Funções de validação adicionais
const isCNPJ = (cnpj: string) => {
  // Implementação simplificada de validação de CNPJ (você pode usar uma lib como 'cpf-cnpj-validator' para validação completa)
  return cnpj.length === 14 && !isNaN(Number(cnpj)); // Verificação simples (ajuste conforme necessário)
};

const isCPF = (cpf: string) => {
  // Implementação simplificada de validação de CPF
  return cpf.length === 11 && !isNaN(Number(cpf)); // Verificação simples (ajuste conforme necessário)
};

const schema = z.object({
  codigo: z.string().min(3, "Código é obrigatório"),
  loja: z.string().min(3, "Loja é obrigatória"),
  nome: z.string().min(3, "Nome é obrigatório"),
  pessoa: z.string().min(1, "Pessoa é obrigatória")
    .refine(val => val === 'F' || val === 'J', { message: "Pessoa deve ser F (Física) ou J (Jurídica)" }),
  endereco: z.string().optional(),
  cep: z.string().min(8, "CEP é obrigatório").length(8, "CEP deve ter 8 dígitos"),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().min(2, "Estado Obrigatório").max(2),
  status: z.string().min(1, "Status é obrigatório")
    .refine(val => val === '1' || val === '2', { message: "Status deve ser 1 ou 2" }),
  cnpj: z.string().min(11, "Digite um CNPJ ou CPF")
    //@ts-ignore
    .refine((val, ctx) => {
      const pessoa = ctx?.parent?.pessoa;
      if (pessoa === 'F') {
        return isCPF(val);  // Se for pessoa física, valida CPF
      } else if (pessoa === 'J') {
        return isCNPJ(val); // Se for pessoa jurídica, valida CNPJ
      }
      return true;  // Caso contrário, ignora (valida normalmente)
    }, {
      message: "CNPJ deve ser válido para pessoa jurídica ou CPF válido para pessoa física"
    }),
  tipo: z.string().min(1, "Selecione um tipo")
    .refine(val => ['F', 'L', 'R', 'S', 'X'].includes(val), { message: "Tipo deve ser um dos valores: F, L, R, S, X" }),
  ddd: z.string().min(2, "Adicione um DDD"),
  telefone: z.string().min(1, "Adicione um número de telefone"),
  email: z.string().min(1, "Adicione um email"),
  pais: z.string().min(1, "Digite um país").max(3),
  contato: z.string().min(1, "Adicione um contato")
});

export default schema;
