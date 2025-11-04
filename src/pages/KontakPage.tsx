import React, { useState } from 'react';
import type { AppData, Message } from '../data/types';

const KontakPage: React.FC<{ data: AppData; saveData: (data: AppData) => void }> = ({ data, saveData }) => {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = () => {
    // Validasi sederhana
    if (!formData.nama || !formData.email || !formData.pesan) {
      return; // Tidak melakukan apa-apa jika field kosong
    }
    
    // Simpan pesan ke data
    const newMessage: Message = { 
      id: Date.now(), 
      ...formData, 
      tanggal: new Date().toLocaleString('id-ID') 
    };
    const newData = { ...data, messages: [...data.messages, newMessage] };
    saveData(newData);
    
    // Reset form tanpa notifikasi
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-700">Kontak</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Info Kontak</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Alamat:</strong> {data.kontak.alamat}</p>
            <p><strong>Telepon:</strong> {data.kontak.telepon}</p>
            <p><strong>Email:</strong> {data.kontak.email}</p>
            <p><strong>WhatsApp:</strong> {data.kontak.whatsapp}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Kirim Pesan</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Pesan"
              value={formData.pesan}
              onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSubmit}
              disabled={!formData.nama || !formData.email || !formData.pesan}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Lokasi</h2>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src={data.maps.location}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default KontakPage;