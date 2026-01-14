'use client';

import { ReactNode, useEffect, useState } from 'react';
import registerSignup from '../utils/registerSignup';
import { useForm } from 'react-hook-form';
import LoadingDots from './LoadingDots';
import SevenSegmentUnderline from './SevenSegmentUnderline';

type Props = {
  label: ReactNode;
  sheet: string;
};

export default function SignUpForm({ label, sheet }: Props) {
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
      <div className="text-lg leading-none text-center">Sign up registered</div>
    );
  }

  if (state === 'error') {
    return <div className="text-lg leading-none text-center">Error</div>;
  }

  return (
    <div className="text-lg leading-none text-center w-full">
      <form onSubmit={onSubmit} action="#">
        <div className="flex flex-col justify-center items-center relative">
          <label htmlFor={sheet}>{label}</label>
          <input
            id={sheet}
            type="email"
            className="w-50 text-center"
            {...register('email', { required: true })}
            enterKeyHint="send"
          />
          <SevenSegmentUnderline />
        </div>
      </form>
    </div>
  );
}
