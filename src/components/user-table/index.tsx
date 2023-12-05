'use client';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Modal, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { AppDispatch, useAppSelector } from '@/store';
import { actions } from '@/store/features/users-slice';
import { RoutesPaths, UserState } from '@/types';

export const UserTable = () => {
  const router = useRouter();
  const data = useAppSelector(state => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [deleteUserId, setDeleteUserId] = useState<number>(0);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  const onOpenModalDelete = useCallback((row: UserState) => {
    if (!row.id) return;

    setDeleteUserId(row.id);
    setConfirmDeleteModal(true);
  }, []);

  const onCloseModalDelete = useCallback(() => {
    setDeleteUserId(0);
    setConfirmDeleteModal(false);
  }, []);

  const onDeleteUser = useCallback(() => {
    try {
      if (!deleteUserId) return;

      dispatch(actions.deleteUser({ id: deleteUserId }));
    } finally {
      setConfirmDeleteModal(false);
      setDeleteUserId(0);
    }
  }, [deleteUserId, dispatch]);

  return (
    <>
      <section
        className={twMerge('overflow-x-auto rounded-lg bg-white p-8 shadow-lg')}
      >
        {data.length < 1 ? (
          <div className='w-full text-2xl'>
            <p className='text-center'>Nenhum Produtor Rural cadastrado!</p>
          </div>
        ) : (
          <Table>
            <Table.Head className='text-lg'>
              <Table.HeadCell>Produtor</Table.HeadCell>
              <Table.HeadCell>Fazenda</Table.HeadCell>
              <Table.HeadCell>Documento</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell>Hectares</Table.HeadCell>
              <Table.HeadCell>Agricultável</Table.HeadCell>
              <Table.HeadCell>Vegetação</Table.HeadCell>
              <Table.HeadCell>
                <span className='sr-only'>Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className='sr-only'>Delete</span>
              </Table.HeadCell>
            </Table.Head>
            {data.map(row => (
              <Table.Body className='divide-y' key={row.id}>
                <Table.Row className='bg-white p-0 text-lg'>
                  <Table.Cell className='whitespace-nowrap text-gray-900'>
                    {row.producerName}
                  </Table.Cell>
                  <Table.Cell>{row.farmName}</Table.Cell>
                  <Table.Cell>{row.document}</Table.Cell>
                  <Table.Cell>{row.state}</Table.Cell>
                  <Table.Cell>{row.totalHectaresFarm} hectares</Table.Cell>
                  <Table.Cell>{row.arableHectares} hectares</Table.Cell>
                  <Table.Cell>{row.vegetationHectares} hectares</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() =>
                        router.push(`${RoutesPaths.USERS}/${row.id}`)
                      }
                      className='font-medium text-cyan-600 hover:underline'
                    >
                      <p>Editar</p>
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => onOpenModalDelete(row)}
                      className=' font-medium text-cyan-600 hover:underline'
                    >
                      <p>Deletar</p>
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        )}
      </section>

      <Modal
        show={confirmDeleteModal}
        style={{ height: 'auto' }}
        onClose={onCloseModalDelete}
      >
        <Modal.Header>
          Tem certeza de que deseja excluir este produtor rural?
        </Modal.Header>
        <Modal.Footer className='flex justify-evenly'>
          <Button className='w-1/3 text-lg' onClick={onDeleteUser}>
            Sim
          </Button>
          <Button
            className='w-1/3 bg-red-500 text-lg text-white'
            color='unset'
            onClick={onCloseModalDelete}
          >
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
