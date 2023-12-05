'use client';
import Select from 'react-select';

import { twMerge } from 'tailwind-merge';

import { MockCultures } from '@/mocks';

export const SelectedInput = ({
  onChangeText,
  value
}: {
  onChangeText: (row: any) => void;
  value: number[];
}) => {
  const mapIdsToCultures = (ids: number[], cultures: Record<string, any>[]) => {
    return ids.map(id => {
      const culture = cultures.find(culture => culture.id === id);
      return culture ? { value: culture.id, label: culture.cultures } : null;
    });
  };

  const selectedCultures = mapIdsToCultures(value, MockCultures).filter(
    Boolean
  );

  return (
    <Select
      id='plantedCrops'
      className={twMerge(
        'mt-4 w-full rounded-lg border border-gray-900',
        'bg-white font-sans text-2xl font-light text-black'
      )}
      required
      placeholder='Selecione as Culturas'
      isMulti
      value={selectedCultures}
      onChange={row => onChangeText(row)}
      options={MockCultures.map(culture => ({
        value: culture.id,
        label: culture.cultures
      }))}
    />
  );
};
