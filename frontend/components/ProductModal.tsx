/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Fade, Modal, Box } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

// Schema de validação usando Zod
const schema = z.object({
  codigo: z.string().min(3, "Código é obrigatório"),
  loja: z.string().min(3, "Loja é obrigatória"),
  status: z.string().min(3, "Status é obrigatório"),
  nome: z.string().min(3, "Nome é obrigatório"),
  pessoa: z.string().min(3, "Pessoa é obrigatória"),
  endereco: z.string().optional(),
  cep: z.string().min(8, "CEP é obrigatório").length(8, "CEP deve ter 8 dígitos"),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
});

interface AddProductModalProps {
  open: boolean;
  handleClose: () => void;
}

interface FormData {
  codigo: string;
  loja: string;
  status: string;
  nome: string;
  pessoa: string;
  endereco: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
}

const AddProductModal = ({ open, handleClose }: AddProductModalProps) => {
  const { register, handleSubmit, setValue, watch, formState: { errors, isDirty, isValid }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [showAddressFields, setShowAddressFields] = useState(false);
  const cep = watch('cep'); // Assistindo o valor do CEP

  const fetchAddressData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;

      setValue('endereco', logradouro);
      setValue('bairro', bairro);
      setValue('cidade', localidade);
      setValue('estado', uf);
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
    }
  };

  const handleCloseModal = () => {
    reset(); // Reseta o formulário
    handleClose();
  }

  const { mutate: onSubmit, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      await axios.post('http://127.0.0.7:8091/restapi/clientes/incluir', data, {
        headers: {
          Authorization: 'Basic YWRtaW46IA==',
        },
      });
    },
    onError: () => {
      toast.error("Success Notification !", {
        position: "bottom-right"
      });
      handleCloseModal();
    },
    onSuccess: () => {
      toast.success("Success Notification !", {
        position: "bottom-right"
      });
      handleCloseModal();
    }
  })

  useEffect(() => {
    if (cep?.length === 8) {
      fetchAddressData(cep);
      setShowAddressFields(true); // Exibe os campos de endereço
    } else {
      setShowAddressFields(false); // Oculta os campos se o CEP não tiver 8 dígitos
    }
  }, [cep]);

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        height: `${showAddressFields ? 'auto' : '350px'}`,
      }}>
        <div className="modal-content p-4">
          <h2 className="text-xl font-semibold mb-4">Cadastrar Novo Cliente</h2>
          <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-3'>
            <div className='flex gap-3'>
              <TextField disabled={isLoading} {...register('codigo')} label="Código" error={!!errors.codigo} helperText={errors.codigo?.message} fullWidth />
              <TextField disabled={isLoading} {...register('loja')} label="Loja" error={!!errors.loja} helperText={errors.loja?.message} fullWidth />
              <TextField disabled={isLoading} {...register('status')} label="Status" error={!!errors.status} helperText={errors.status?.message} fullWidth />
            </div>
            <div className='flex gap-3'>
              <TextField disabled={isLoading} {...register('nome')} label="Nome" error={!!errors.nome} helperText={errors.nome?.message} fullWidth />
              <TextField disabled={isLoading} {...register('pessoa')} label="Pessoa" error={!!errors.pessoa} helperText={errors.pessoa?.message} fullWidth />
            </div>

            <TextField disabled={isLoading}
              {...register('cep')}
              label="CEP"
              error={!!errors.cep}
              helperText={errors.cep?.message}
              fullWidth
            />

            {showAddressFields && (
              <Fade in={showAddressFields} timeout={500}>
                <div className='flex gap-3 flex-col'>
                  <div className='flex gap-3'>
                    <TextField disabled={isLoading} {...register('endereco')} placeholder="Endereço" error={!!errors.endereco} helperText={errors.endereco?.message} fullWidth />
                    <TextField disabled={isLoading} {...register('bairro')} placeholder="Bairro" error={!!errors.bairro} helperText={errors.bairro?.message} fullWidth />
                  </div>
                  <div className='flex gap-3'>
                    <TextField disabled={isLoading} {...register('cidade')} placeholder="Cidade" error={!!errors.cidade} helperText={errors.cidade?.message} fullWidth />
                    <TextField disabled={isLoading} {...register('estado')} placeholder="Estado" error={!!errors.estado} helperText={errors.estado?.message} fullWidth />
                  </div>
                </div>
              </Fade>
            )}

            <div className='w-full mt-6 border'>
              <Button type="submit" variant="contained" className="mt-4 w-full" disabled={isLoading || !isDirty || !isValid}>Cadastrar</Button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
