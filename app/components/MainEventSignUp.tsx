'use client';

import { useEffect, useState } from 'react';
import registerSignup from '../utils/registerSignup';
import { useForm } from 'react-hook-form';
import LoadingDots from './LoadingDots';
import SevenSegmentUnderline from './SevenSegmentUnderline';

export default function MainEventSignUp() {
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

    const response = await registerSignup({ email, sheet: 'main-event' });

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
    <div className="text-lg leading-none text-center">
      <form onSubmit={onSubmit} action="#">
        <div className="relative">
          <label htmlFor="signup-email">
            <p>Showroom sign up</p>
          </label>
          <input
            id="signup-email"
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
