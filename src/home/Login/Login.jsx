import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Lakukan pengiriman data ke server untuk verifikasi login
      const response = await fetch('http://localhost:4000/admins');
      if (!response.ok) {
        throw new Error('Gagal mengambil data admin');
      }
      const admins = await response.json();

      // Cek apakah username dan password cocok dengan data admin yang diambil dari API
      const matchedAdmin = admins.find(admin => admin.username === username && admin.password === password);
      if (matchedAdmin) {
        // Login berhasil, arahkan ke halaman admin
        window.location.href = '/admin';
      } else {
        // Login gagal, tampilkan pesan kesalahan
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: 'Username atau password salah.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Tampilkan pesan kesalahan jika gagal mengambil data admin
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terjadi kesalahan saat melakukan login.',
      });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
