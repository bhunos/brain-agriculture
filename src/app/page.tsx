import { twMerge } from 'tailwind-merge';

import FarmIcon from '@/assets/images/farm.png';
import Hectaresicon from '@/assets/images/hectares.png';
import { Cards, Container, Graphic } from '@/components';
import { store } from '@/store';
import {
  calculatePlantedArea,
  countCultures,
  countStates,
  totalHectares
} from '@/utils';

export default function Home() {
  const users = store.getState().user;

  return (
    <Container>
      <header className={twMerge('rounded-lg bg-white p-8 shadow-lg')}>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
      </header>

      <section className={twMerge('grid grid-cols-1 gap-8 lg:grid-cols-2')}>
        <Cards
          image={FarmIcon}
          text={`${users.length}`}
          title='Total de fazendas'
        />

        <Cards
          image={Hectaresicon}
          text={`${totalHectares(users)} hectares`}
          title='Total em hectares'
        />
      </section>

      <section className={twMerge('grid grid-cols-1 gap-8 lg:grid-cols-3')}>
        <Graphic data={countStates(users)} title='Estado' />
        <Graphic data={countCultures(users)} title='Cultura' />
        <Graphic data={calculatePlantedArea(users)} title='Solo' />
      </section>
    </Container>
  );
}
