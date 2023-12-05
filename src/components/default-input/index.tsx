import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

type BaseProps = {
  onChange: (value: string) => void;
  value: string;
  inputId: string;
};

type Props = BaseProps & InputHTMLAttributes<HTMLInputElement>;

export const DefaultInput = ({
  onChange,
  value,
  inputId,
  ...inputProps
}: Props) => {
  return (
    <input
      className={twMerge(
        'mt-4 h-16 w-full rounded-lg border border-gray-900',
        'bg-white px-8 font-sans text-2xl font-light text-black'
      )}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      name={inputId}
      id={inputId}
      {...inputProps}
    />
  );
};
