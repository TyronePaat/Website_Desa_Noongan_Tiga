import React from 'react';
// 1. Import 'Potensi' agar kita bisa menggunakannya di props
import type { AppData, Potensi } from '../data/types';

// 2. Perbarui interface Props
interface Props {
  data: AppData;
  onPotensiClick: (potensi: Potensi) => void; // Prop baru untuk menangani klik
}

const PotensiPage: React.FC<Props> = ({ data, onPotensiClick }) => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-green-700">Potensi Desa</h1>
    <div className="grid md:grid-cols-3 gap-6">
      {data.potensi.map(item => (
        // 3. Ubah 'div' ini menjadi 'button'
        <button
          key={item.id}
          onClick={() => onPotensiClick(item)} // 4. Panggil prop saat diklik
          className="bg-white rounded-lg shadow-lg overflow-hidden text-left transform hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-500" // Tambahkan style interaktif
        >
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default PotensiPage;

