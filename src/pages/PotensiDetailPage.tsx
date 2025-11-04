import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Potensi } from '../data/types'; // Sesuaikan path jika perlu


interface Props {
  potensi: Potensi;
  onBack: () => void;
}

const PotensiDetailPage: React.FC<Props> = ({ potensi, onBack }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* --- Tombol Kembali --- */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Kembali ke Semua Potensi</span>
      </button>

      {/* --- Header Detail (KEMBALI KE VERSI AWAL ANDA) --- */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden">
        <img
          src={potensi.image}
          alt={potensi.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">{potensi.title}</h1>
        </div> 
      </div>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">{potensi.description}</p>
      {/* --- Akhir Header --- */}


      {/* --- REVISI: Grid Sub-Item (Gaya Miniso) --- */}
      {potensi.subItems && potensi.subItems.length > 0 ? (
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-6">Hasil {potensi.title}</h2>
          
          {/* Ini adalah container vertikal untuk setiap item */}
          <div className="space-y-6">
            
            {potensi.subItems.map(item => (
              // Setiap item sekarang adalah grid 2-kolom (Gambar | Teks)
              // Kita buat kartu dengan layout grid di dalamnya
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden grid md:grid-cols-2 items-center">
                
                {/* Kolom 1: Gambar Sub-Item */}
                {/* h-64 di mobile, md:h-80 di desktop, bisa disesuaikan */}
                <div className="w-full h-64 md:h-80">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Kolom 2: Teks Sub-Item (Judul, Deskripsi, Kontak) */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  {/* Bagian Kontak (BARU) - akan muncul jika data kontak ada */}
                  {item.kontak && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-600">Narahubung:</h4>
                      <p className="text-green-700 font-bold text-lg">{item.kontak}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Belum ada detail produk untuk kategori ini.</p>
      )}
      {/* --- Akhir Revisi --- */}
    </div>
  );
};

// Menambahkan sedikit animasi fade-in
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
`;
document.head.appendChild(style);

export default PotensiDetailPage;

