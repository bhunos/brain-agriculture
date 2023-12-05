import { FormEvent } from 'react';

import { twMerge } from 'tailwind-merge';

import { DefaultInput } from '@/components';
import { SelectedInput } from '@/components/selected-input';
import { UserState } from '@/types';
import { cpfCnpjMask } from '@/utils';

export const Form = ({
  onChangeText,
  formRegister,
  handleSubmit
}: {
  onChangeText: (row: Record<string, any>) => void;
  formRegister: UserState;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge('rounded-lg bg-white p-8 shadow-lg')}
    >
      <div>
        <label
          htmlFor='producerName'
          className='items-center text-lg font-light text-black'
        >
          Nome do produtor
        </label>

        <DefaultInput
          inputId='producerName'
          autoFocus
          type='text'
          required
          placeholder='ex: João da Silva'
          onChange={text => onChangeText({ producerName: text })}
          value={formRegister?.producerName}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='farmName'
          className='items-center text-lg font-light text-black'
        >
          Nome da Fazenda
        </label>

        <DefaultInput
          inputId='farmName'
          autoFocus
          type='text'
          required
          placeholder='ex: Fazenda Alto Alegre'
          onChange={text => onChangeText({ farmName: text })}
          value={formRegister?.farmName}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='document'
          className='items-center text-lg font-light text-black'
        >
          CPF ou CNPJ
        </label>

        <DefaultInput
          inputId='farmName'
          autoFocus
          type='text'
          required
          maxLength={18}
          minLength={14}
          placeholder='ex: 123.456.789-00 ou 12.345.678/0001-00'
          onChange={text =>
            onChangeText({ document: cpfCnpjMask(text.toString()) })
          }
          value={formRegister?.document}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='city'
          className='items-center text-lg font-light text-black'
        >
          Cidade
        </label>

        <DefaultInput
          inputId='city'
          autoFocus
          type='text'
          required
          placeholder='ex: São Paulo'
          onChange={text => onChangeText({ city: text })}
          value={formRegister?.city}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='state'
          className='items-center text-lg font-light text-black'
        >
          Estado
        </label>

        <DefaultInput
          inputId='state'
          autoFocus
          type='text'
          required
          placeholder='ex: SP'
          onChange={text => onChangeText({ state: text })}
          value={formRegister?.state}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='totalHectaresFarm'
          className='items-center text-lg font-light text-black'
        >
          Área total em hectares da fazenda
        </label>

        <DefaultInput
          inputId='totalHectaresFarm'
          autoFocus
          type='number'
          required
          placeholder='ex: 400'
          onChange={text => onChangeText({ totalHectaresFarm: text })}
          value={formRegister?.totalHectaresFarm.toString()}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='arableHectares'
          className='items-center text-lg font-light text-black'
        >
          Área agricultável em hectares
        </label>

        <DefaultInput
          inputId='arableHectares'
          autoFocus
          type='number'
          required
          placeholder='ex: 400'
          onChange={text => onChangeText({ arableHectares: text })}
          value={formRegister?.arableHectares.toString()}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='vegetationHectares'
          className='items-center text-lg font-light text-black'
        >
          Área de vegetação em hectares
        </label>

        <DefaultInput
          inputId='vegetationHectares'
          autoFocus
          type='number'
          required
          placeholder='ex: 400'
          onChange={text => onChangeText({ vegetationHectares: text })}
          value={formRegister?.vegetationHectares.toString()}
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='plantedCrops'
          className='items-center text-lg font-light text-black'
        >
          Culturas plantadas
        </label>

        <SelectedInput
          value={formRegister?.plantedCrops}
          onChangeText={row =>
            onChangeText({ plantedCrops: row.map((row: any) => row.value) })
          }
        />
      </div>

      <button
        className={twMerge(
          'mt-16 h-20 w-full rounded-lg',
          'bg-blue-500 font-sans text-3xl font-light text-white'
        )}
        type='submit'
      >
        Salvar
      </button>
    </form>
  );
};
