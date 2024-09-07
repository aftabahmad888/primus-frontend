'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Dummy login logic for testing (replace with real logic)
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Username *</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password *</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit">Login</button>

        {errorMessage && <p>{errorMessage}</p>}

        <div>
          <a href="#">Don't have an account?</a>
          <a href="/reset-password">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
