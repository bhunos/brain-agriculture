import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

type CardsProps = {
  title: string;
  text: string;
  image: StaticImageData;
};

export const Cards = ({ title, text, image }: CardsProps) => {
  return (
    <div
      className={twMerge(
        'mt-8 flex justify-between rounded-lg bg-white p-8 shadow-lg'
      )}
    >
      <div className='flex flex-col justify-between'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-3xl'>{text}</p>
      </div>
      <Image src={image} width={80} height={80} alt='Fazendas' />
    </div>
  );
};
