import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { Container, UserTable } from '@/components';
import { RoutesPaths } from '@/types';

export default function Users() {
  return (
    <Container>
      <header
        className={twMerge(
          'mb-8 flex justify-between rounded-lg bg-white p-8 shadow-lg'
        )}
      >
        <h1 className={twMerge('text-left text-3xl font-bold')}>
          Produtores Rurais
        </h1>

        <Link
          href={RoutesPaths.CREATE_USERS}
          className=' rounded-lg bg-blue-500 px-8 py-2 text-lg font-bold text-white '
        >
          Criar
        </Link>
      </header>

      <UserTable />
    </Container>
  );
}
