import React from 'react';
import './AboutMe.css'; // Import CSS file for styling

function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="title">About Us</h1>
      <button className='flex items-center text-gray absolute pl-15 top0 bottom-0 left-0 opacity-50'>
        <i className="ml-5 icon-caret-left"></i>
      </button>
      <div className="brandContainer">
        <b><h3 className="Title">Brand Story</h3></b>
        <p className="brandText">Kenalin, kami Pizza Hut.</p>
        <img src="https://www.pizzahut.co.id/img/brand_story1.9add1dfa.jpg" alt="Your image description" />
        <img src="https://www.pizzahut.co.id/img/brand_story2.c5e244ba.jpg" alt="Your image description" />
        <img src="https://www.pizzahut.co.id/img/BrandStory_photo_3.a062fd69.jpg" alt="Your image description" width="300" height="300" />
        <p className="brandparagraf">
          Cerita kami di Indonesia, dimulai pada tahun 1984, dimana Outlet Pertama Pizza Hut dibuka di gedung Djakarta Theatre. Hingga di tahun 2004, Pizza Hut di Indonesia makin mengepakkan sayapnya lewat akuisisi dari Sriboga Group. Pizza Hut Indonesia kemudian melakukan penawaran umum perdana melalui Bursa Efek Indonesia di tahun 2018.
        </p>
        <p>
          Produk-produk Pizza Hut mendapatkan Sertifikasi Halal dari Majelis Ulama Indonesia sejak tahun 1997. Pizza Hut Indonesia selalu memastikan kepatuhan halal baik dalam proses perpanjangan saat berakhir maupun sertifikasi untuk produk-produk baru sebelum diperkenalkan kepada Masyarakat.
        </p>
        <p>
          Hingga saat ini Pizza Hut telah berada di Indonesia selama 40 tahun, dan saat ini mempekerjakan lebih dari 13.000 karyawan di 600+ Outlet dari Sabang sampai Merauke, dipimpin oleh jajaran Direksi dan Komisaris yang keseluruhannya Warga Negara Indonesia.
        </p>
        <p>
          Pizza Hut Indonesia terdiri dari Pizza Hut Restaurant dan PHD (Pizza Hut Delivery) dengan layanan “30 menit pasti tiba”. Karena kami mengerti, kesibukan dan terbatasnya waktu konsumen yang ingin semuanya serba cepat, sehingga pesanan tetap hangat dan nikmat saat tiba di tujuan. Kami selalu berkomitmen untuk memberikan pelayanan terbaik dan inovasi bagi pelanggan setia Pizza Hut Indonesia.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;