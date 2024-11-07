/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Fade, Modal, Box, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import schema from '@/validations';
import ReactInputMask from 'react-input-mask';
import InputMask from "react-input-mask"

// Interface TypeScript baseada no schema
export interface FormData {
  codigo: string;
  loja: string;
  nome: string;
  pessoa: 'F' | 'J';
  endereco?: string;
  cep: string;
  bairro?: string;
  cidade?: string;
  estado: string;
  status: '1' | '2';
  cnpj: string;
  tipo: 'F' | 'L' | 'R' | 'S' | 'X';
  ddd: string;
  telefone: string;
  email: string;
  pais: string;
  contato: string;
}

interface AddProductModalProps {
  open: boolean;
  handleClose: () => void;
  user?: FormData | null
}

const AddProductModal = ({ open, handleClose, user }: AddProductModalProps) => {
  const { register, handleSubmit, setValue, watch, formState: { errors, isDirty, isValid }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),  // Certifique-se de que o zodResolver está correto
    mode: "onChange"
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
  };

  const { mutate: onSubmit, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      console.log(data, "data");

      await axios.post('http://127.0.0.7:8091/restapi/clientes/incluir', data, {
        headers: {
          Authorization: 'Basic YWRtaW46IA==',
        },
      });
    },
    onError: () => {
      toast.error("Erro ao cadastrar cliente!", {
        position: "bottom-right"
      });
      handleCloseModal();
    },
    onSuccess: () => {
      toast.success("Cliente cadastrado com sucesso!", {
        position: "bottom-right"
      });
      handleCloseModal();
    }
  });

  const { mutate: editUser, isLoading: editLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      await axios.put(`http://127.0.0.7:8091/restapi/clientes/atualizar?loja=${data.loja}&codigo=${data.codigo}`, data, {
        headers: { Authorization: 'Basic YWRtaW46IA==' },
      });
    },
    onError: () => {
      toast.error("Erro ao editar cliente!", {
        position: "bottom-right"
      });
      handleCloseModal();
    },
    onSuccess: () => {
      toast.success("Cliente editado com sucesso!", {
        position: "bottom-right"
      });
      handleCloseModal();
    }
  });

  const { mutate: deleteUser, isLoading: deleteLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      await axios.delete(`http://127.0.0.7:8091/restapi/clientes/deletar?loja=${data.loja}&codigo=${data.codigo}`, {
        headers: { Authorization: 'Basic YWRtaW46IA==' },
      });
    },
    onError: () => {
      toast.error("Erro ao deletar o cliente!", {
        position: "bottom-right"
      });
      handleCloseModal();
    },
    onSuccess: () => {
      toast.success("Cliente deletado com sucesso!", {
        position: "bottom-right"
      });
      handleCloseModal();
    }
  });

  const { mutate: userData, isLoading: userLoading } = useMutation({
    mutationFn: async () => {
      if (!user) return
      const { data } = await axios.get(`http://127.0.0.7:8091/restapi/lista_cliente?loja=${user.loja}&codigo=${user.codigo}`, {
        headers: {
          Authorization: 'Basic YWRtaW46IA==',
        },
      });
      return data as FormData;
    },
    onError: () => {
      toast.error("Erro ao buscar o cliente", {
        position: "bottom-right"
      });
      handleCloseModal();
    },
    onSuccess: (data) => {
      if (data) {
      setValue("bairro", data.bairro)
      setValue("cep", data.cep)
      setValue("cidade", data.cidade)
      setValue("cnpj", data.cnpj)
      setValue("codigo", data.codigo)
      setValue("contato", data.contato)
      setValue("ddd", data.ddd)
      setValue("email", data.email)
      setValue("endereco", data.endereco)
      setValue("estado", data.estado)
      setValue("loja", data.loja)
      setValue("nome", data.nome)
      setValue("pais", data.pais)
      setValue("pessoa", data.pessoa)
      setValue("status", data.status)
      setValue("telefone", data.telefone)
      setValue("tipo", data.tipo)
      }
    }
  });

  useEffect(() => {
    if (cep?.length === 8) {
      fetchAddressData(cep);
      setShowAddressFields(true); // Exibe os campos de endereço
    } else {
      setShowAddressFields(false); // Oculta os campos se o CEP não tiver 8 dígitos
    }
  }, [cep]);

  useEffect(() => {
    if (!user) return
    userData()

  }, [user])

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        height: `${showAddressFields ? 'auto' : '750px'}`,
        width: '700px',
        padding: '20px',
      }}>
        <h2 className="text-xl font-semibold mb-4">{user ? "Editar Cliente" : "Cadastrar Novo Cliente"}</h2>
        <form onSubmit={handleSubmit(data => {
          if (user) {
            editUser(data)
          } else {
            onSubmit(data)
          }
        })} className="flex flex-col gap-3">
          <div className="flex gap-3">
            <TextField

              disabled={isLoading}
              {...register('codigo')}
              label="Código"
              error={!!errors.codigo}
              helperText={errors.codigo?.message}
              fullWidth
            />
            <TextField
              disabled={isLoading}
              {...register('loja')}
              label="Loja"
              error={!!errors.loja}
              helperText={errors.loja?.message}
              fullWidth
            />
            <FormControl fullWidth error={!!errors.status}>
              <InputLabel>Status</InputLabel>
              <Select
                disabled={isLoading}
                {...register('status')}
                label="Status"
                fullWidth
              >
                <MenuItem value="1">Ativo</MenuItem>
                <MenuItem value="2">Inativo</MenuItem>
              </Select>
              <FormHelperText>{errors.status?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="flex gap-3">
            <TextField
              disabled={isLoading}
              {...register('nome')}
              label="Nome"
              error={!!errors.nome}
              helperText={errors.nome?.message}
              fullWidth
            />
            <FormControl fullWidth error={!!errors.pessoa}>
              <InputLabel>Pessoa</InputLabel>
              <Select
                disabled={isLoading}
                {...register('pessoa')}
                label="Pessoa"
              >
                <MenuItem value="F">Física</MenuItem>
                <MenuItem value="J">Jurídica</MenuItem>
              </Select>
              <FormHelperText>{errors.pessoa?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="flex gap-3">
            <TextField
                disabled={isLoading}
                {...register('cnpj')}
                label="CNPJ"
                error={!!errors.cnpj}
                helperText={errors.cnpj?.message}
                fullWidth
              />
          </div>

          <div className="flex gap-3">
            <FormControl fullWidth error={!!errors.tipo}>
              <InputLabel>Tipo</InputLabel>
              <Select
                disabled={isLoading}
                {...register('tipo')}
                label="Tipo"
              >
                <MenuItem value="F">F</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="R">R</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="X">X</MenuItem>
              </Select>
              <FormHelperText>{errors.tipo?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="flex gap-3">
            <TextField
              disabled={isLoading}
              {...register('ddd')}
              label="DDD"
              error={!!errors.ddd}
              helperText={errors.ddd?.message}
              fullWidth
            />
          </div>

          <div className="flex gap-3">
            <TextField
              disabled={isLoading}
              {...register('email')}
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
            <TextField
              disabled={isLoading}
              {...register('pais')}
              label="País"
              error={!!errors.pais}
              helperText={errors.pais?.message}
              fullWidth
            />
          </div>

          <div className="flex gap-3">
            <TextField
              disabled={isLoading}
              {...register('contato')}
              label="Contato"
              error={!!errors.contato}
              helperText={errors.contato?.message}
              fullWidth
            />
          </div>

          <TextField
            disabled={isLoading}
            {...register('cep')}
            label="CEP"
            error={!!errors.cep}
            helperText={errors.cep?.message}
            fullWidth
          />

          {showAddressFields && (
            <Fade in={showAddressFields} timeout={500}>
              <div className="flex gap-3 flex-col">
                <div className="flex gap-3">
                  <TextField
                    disabled={isLoading}
                    {...register('endereco')}
                    placeholder="Endereço"
                    error={!!errors.endereco}
                    helperText={errors.endereco?.message}
                    fullWidth
                  />
                  <TextField
                    disabled={isLoading}
                    {...register('bairro')}
                    placeholder="Bairro"
                    error={!!errors.bairro}
                    helperText={errors.bairro?.message}
                    fullWidth
                  />
                </div>
                <div className="flex gap-3">
                  <TextField
                    disabled={isLoading}
                    {...register('cidade')}
                    placeholder="Cidade"
                    error={!!errors.cidade}
                    helperText={errors.cidade?.message}
                    fullWidth
                  />
                  <TextField
                    disabled={isLoading}
                    {...register('estado')}
                    placeholder="Estado"
                    error={!!errors.estado}
                    helperText={errors.estado?.message}
                    fullWidth
                  />
                </div>
              </div>
            </Fade>
          )}

          <div className="w-full mt-6 border">
            <Button
              type="submit"
              variant="contained"
              className="mt-4 w-full"
              disabled={isLoading || !isDirty || !isValid || editLoading || deleteLoading}
            >
              {user ? "Editar" : "Cadastrar"}
            </Button>
            <Button
              variant="contained"
              className="mt-4 w-full"
              disabled={isLoading || editLoading || deleteLoading}
              onClick={() => {
                if (user) {
                  deleteUser(user)
                }
              }}
            >
              Deletar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
