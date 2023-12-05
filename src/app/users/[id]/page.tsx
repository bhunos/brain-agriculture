'use client';

import { FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { Container, Form } from '@/components';
import { AppDispatch, store } from '@/store';
import { actions } from '@/store/features/users-slice';
import { RoutesPaths, UserState } from '@/types';
import { validateCpfCnpj } from '@/utils';

export default function EditUser({ params }: { params: { id: number } }) {
  const { id } = params;
  const router = useRouter();
  const getUser = store.getState().user.filter(row => row.id === Number(id))[0];
  const dispatch = useDispatch<AppDispatch>();
  const [formRegister, setFormRegister] = useState<UserState>(getUser);

  const onChangeText = useCallback(
    (row: Record<string, any>) => {
      setFormRegister(old => ({ ...old, ...row }));
    },
    [setFormRegister]
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!validateCpfCnpj(formRegister.document)) {
        toast.warn('Cpf ou Cnpj inválido.');
        return;
      }
      const vegetationHectares = Number(formRegister.vegetationHectares);
      const arableHectares = Number(formRegister.arableHectares);
      const totalHectaresFarm = Number(formRegister.totalHectaresFarm);

      const totalHectaresArable = vegetationHectares + arableHectares;

      if (totalHectaresArable > totalHectaresFarm) {
        toast.warn(
          'A soma da Área Agricultável e da Área de Vegetação não pode ser maior do que a Área Total em hectares da fazenda!'
        );
        return;
      }

      dispatch(
        actions.updateUser({
          ...formRegister,
          vegetationHectares,
          arableHectares,
          totalHectaresFarm
        })
      );

      toast.success('Produtor Rural salvo com sucesso!');
      router.push(RoutesPaths.USERS);
    },
    [dispatch, formRegister, router]
  );

  return (
    <Container>
      <header className={twMerge('mb-8 rounded-lg bg-white p-8 shadow-lg')}>
        <h1 className='text-3xl font-bold'>Cadastro de Produtor Rural</h1>
      </header>

      <Form
        onChangeText={onChangeText}
        formRegister={formRegister}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
