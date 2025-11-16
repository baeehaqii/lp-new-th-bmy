"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1763271527/bmy-4_converted_u2mqrd.avif"
                alt="Sapphire Townhouse Bumiayu"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Town House Bumiayu</h2>
              <p className="about-description">
                Sapphire Town House Bumiayu adalah perumahan Bumiayu yang mengutamakan kemudahan mobilitas, kenyamanan lingkungan, dan prospek jangka panjang. Berlokasi di Jl. Pancurawis No.9–2 Pagenjahan, Kalierang, Kec. Bumiayu, hunian ini memberi Anda akses cepat ke aktivitas kota, suasana kawasan yang rapi dan tenang, serta nilai yang terus tumbuh seiring berkembangnya area sekitar. 
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Card 1 */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Lokasi Terbaik</div>
            </div>

            {/* Statistik - Card 2 */}
            <div className="about-stat-card">
              <div className="about-stat-value">10.000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Card 3 */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Proyek Unggulan</div>
            </div>

            {/* Statistik - Card 4 */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Town House Bumiayu</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1763271528/bmy-2_converted_qdfibn.avif"
                  alt="Sapphire Townhouse Bumiayu"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Sapphire Town House Bumiayu adalah perumahan Bumiayu yang mengutamakan kemudahan mobilitas, kenyamanan lingkungan, dan prospek jangka panjang. Berlokasi di Jl. Pancurawis No.9–2 Pagenjahan, Kalierang, Kec. Bumiayu, hunian ini memberi Anda akses cepat ke aktivitas kota, suasana kawasan yang rapi dan tenang, serta nilai yang terus tumbuh seiring berkembangnya area sekitar. Semua dirancang untuk Anda yang ingin tinggal praktis hari ini, sekaligus punya manfaat yang berlanjut di masa depan.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>3 menit ke fasilitas kesehatan</li>
                  <li>2 menit ke fasilitas pendidikan</li>
                  <li>4 menit ke fasilitas perbelanjaan</li>
                  <li>Bebas polusi dan kebisingan kota</li>
                  <li>Dikelilingi pemandangan alam yang asri</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan CCTV dan one gate system</li>
                  <li>Jalan kawasan lebih lebar untuk akses yang nyaman</li>
                  <li>Taman bermain dan ruang rekreasi keluarga</li>
                  <li>Area hijau yang menambah kenyamanan lingkungan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
