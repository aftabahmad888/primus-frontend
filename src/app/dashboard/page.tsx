'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login'); // Redirect to login if user is not authenticated
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>You are logged in!</p>
    </div>
  );
}
