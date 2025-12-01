import React, { useState } from 'react';
import type { AppData } from '../data/types';

/**
 * PANDUAN PENGGUNAAN OBJECT-FIT:
 * - object-cover: Gambar akan memenuhi bingkai, bagian yang berlebih akan terpotong (RECOMMENDED)
 * - object-contain: Gambar akan fit di dalam bingkai dengan aspect ratio terjaga, mungkin ada space kosong
 * - object-fill: Gambar akan stretch untuk memenuhi bingkai (distorsi)
 */

const TimKamiPage: React.FC<{ data: AppData }> = ({ data }) => {
  // State untuk mengontrol mode tampilan foto
  const [imageMode, setImageMode] = useState<'cover' | 'contain'>('cover');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-green-700 mb-2">Tim Kami</h1>
        <p className="text-gray-600">
          Mahasiswa KKT (Kuliah Kerja Terpadu) yang bertugas di Desa Noongan Tiga
        </p>
      </div>

      {/* Toggle Mode Foto (Opsional - untuk demo) */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-blue-900">Mode Tampilan Foto:</p>
            <p className="text-sm text-blue-700">
              {imageMode === 'cover' 
                ? '📸 Cover (Crop otomatis, memenuhi bingkai)' 
                : '🖼️ Contain (Fit penuh, mungkin ada space kosong)'}
            </p>
          </div>
          <button
            onClick={() => setImageMode(imageMode === 'cover' ? 'contain' : 'cover')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Toggle Mode
          </button>
        </div>
      </div>

      {/* Grid Tim KKT */}
      <div className="grid md:grid-cols-4 gap-8">
        {data.timKKT && data.timKKT.length > 0 ? (
          data.timKKT.map((anggota) => (
            <div 
              key={anggota.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* 
                FOTO dengan bingkai persegi 1:1 
                - aspect-square: membuat bingkai 1:1
                - object-cover: crop otomatis (default)
                - object-contain: fit dengan space kosong
              */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-green-100 to-green-50">
                <img
                  src={anggota.foto}
                  alt={anggota.nama}
                  className={`w-full h-full ${
                    imageMode === 'cover' 
                      ? 'object-cover' // Crop otomatis
                      : 'object-contain' // Fit dengan space
                  } transition-all duration-300`}
                />
                
                {/* Badge Posisi */}
                {anggota.posisi !== 'Anggota' && (
                  <div className="absolute top-2 right-2 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {anggota.posisi}
                  </div>
                )}
              </div>
              
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{anggota.nama}</h3>
                <p className="text-sm text-gray-600 mb-1">NIM: {anggota.nim}</p>
                <p className="text-sm text-green-600 font-semibold">{anggota.prodi}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center py-12">
            <p className="text-gray-500">Belum ada data tim KKT</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default TimKamiPage;