import React from 'react';
import Swal from 'sweetalert2';

const Logout = () => {
  const handleLogout = () => {
    // Tambahkan logika logout di sini
    // Misalnya, membersihkan token autentikasi atau menghapus data sesi
    // Setelah logout, arahkan pengguna ke halaman login atau halaman lainnya
    Swal.fire({
      icon: 'success',
      title: 'Logout Berhasil',
      text: 'Anda telah berhasil logout.',
    }).then(() => {
      window.location.href = '/login'; // Ganti URL sesuai kebutuhan
    });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
