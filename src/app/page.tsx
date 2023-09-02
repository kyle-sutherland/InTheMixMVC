'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you'd typically make an API call to authenticate the user.
    // For now, we'll just check if the username and password are not empty.
    if (username && password) {
      // If authentication is successful, redirect to the test page.
      router.push('/test');
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
