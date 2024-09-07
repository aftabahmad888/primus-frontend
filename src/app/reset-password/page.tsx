'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    
    // Dummy password reset logic (replace with actual logic)
    setMessage(`A reset link has been sent to ${email}`);
    setTimeout(() => router.push('/login'), 3000); // Redirect to login after reset
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
