import React from 'react';
import type { AppData } from '../data/types';

const ProfilPage: React.FC<{ data: AppData }> = ({ data }) => {
  // Safety check - if informasiUmum doesn't exist, show message
  if (!data.informasiUmum) {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-green-700">Profil Desa</h1>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <p className="text-gray-700">
            Data profil desa belum tersedia. Silakan hubungi admin untuk memperbarui data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-green-700">Profil Desa</h1>
      
      {/* Informasi Umum Desa */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Informasi Umum Desa</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kolom Kiri */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Nama Desa/Kelurahan</p>
              <p className="text-lg text-gray-800">{data.informasiUmum.namaDesa}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500">Kecamatan</p>
              <p className="text-lg text-gray-800">{data.informasiUmum.kecamatan}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500">Kabupaten/Kota</p>
              <p className="text-lg text-gray-800">{data.informasiUmum.kabupaten}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500">Provinsi</p>
              <p className="text-lg text-gray-800">{data.informasiUmum.provinsi}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500">Koordinat</p>
              <p className="text-lg text-gray-800 font-mono">{data.informasiUmum.koordinat}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500">Luas Wilayah</p>
              <p className="text-lg text-gray-800">{data.informasiUmum.luasWilayah}</p>
            </div>
          </div>
          
          {/* Kolom Kanan */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Batas Wilayah</p>
              <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Utara:</span>
                  <span className="text-gray-800">{data.informasiUmum.batasWilayah.utara}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selatan:</span>
                  <span className="text-gray-800">{data.informasiUmum.batasWilayah.selatan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Timur:</span>
                  <span className="text-gray-800">{data.informasiUmum.batasWilayah.timur}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Barat:</span>
                  <span className="text-gray-800">{data.informasiUmum.batasWilayah.barat}</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Pembagian Wilayah</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-700">{data.informasiUmum.pembagianWilayah.jumlahDusun}</p>
                  <p className="text-xs text-gray-600">Dusun</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-700">{data.informasiUmum.pembagianWilayah.jumlahRT}</p>
                  <p className="text-xs text-gray-600">RT</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-700">{data.informasiUmum.pembagianWilayah.jumlahRW}</p>
                  <p className="text-xs text-gray-600">RW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sejarah Desa */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Sejarah Desa</h2>
        <p className="text-gray-700 leading-relaxed text-justify">{data.sejarah}</p>
      </div>
    </div>
  );
};

export default ProfilPage;