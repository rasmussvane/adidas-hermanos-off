'use client';

import { ReactNode, useEffect, useState } from 'react';
import registerSignup from '../utils/registerSignup';
import { useForm } from 'react-hook-form';
import LoadingDots from './LoadingDots';

type Props = {
  label: ReactNode;
  sheet: string;
};

export default function SubEventSignUp({ label, sheet }: Props) {
  const { handleSubmit, register } = useForm();
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  useEffect(() => {
    if (state === 'error') {
      const timer = setTimeout(() => {
        setState('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const onSubmit = handleSubmit(async (data) => {
    setState('loading');
    const email = data['email'];

    const response = await registerSignup({ email, sheet });

    if (response) {
      setState('success');
    } else {
      setState('error');
    }
  });

  if (state === 'loading') {
    return (
      <div className="text-lg leading-none text-center">
        Loading <LoadingDots />
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="text-lg leading-none text-center">
        Thank you for signing up!
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="text-lg leading-none text-center">
        An error occurred. Please try again.
      </div>
    );
  }

  return (
    <div className="text-lg leading-none text-center w-full">
      <form onSubmit={onSubmit} action="#">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor={sheet}>{label}</label>
          <input
            id={sheet}
            type="email"
            className="border-b-[1.5] border-dashed border-b-foreground w-full max-w-none md:max-w-[350px]"
            {...register('email', { required: true })}
            enterKeyHint="send"
          />
        </div>
      </form>
    </div>
  );
}
