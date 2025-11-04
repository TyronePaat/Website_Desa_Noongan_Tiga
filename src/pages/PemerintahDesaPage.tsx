import React from 'react';
import type { AppData } from '../data/types';

const PemerintahDesaPage: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold text-green-700 mb-2">Pemerintah Desa</h1>
      <p className="text-gray-600">Struktur pemerintahan Desa Noongan Tiga periode 2024-2030</p>
    </div>

    {/* Grid Aparatur */}
    <div className="grid md:grid-cols-4 gap-8">
      {data.aparatur.map((person) => (
        <div 
          key={person.id} 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          {/* Foto */}
          <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50">
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Info */}
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{person.name}</h3>
            <p className="text-sm text-green-600 font-semibold">{person.position}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Catatan Kaki */}
    <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Catatan:</span> Untuk informasi lebih lanjut mengenai tugas dan fungsi masing-masing jabatan, 
        silakan hubungi kantor desa atau kunjungi halaman Kontak.
      </p>
    </div>
  </div>
);

export default PemerintahDesaPage;