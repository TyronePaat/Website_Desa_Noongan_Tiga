import React, { useState, useEffect } from 'react';
import type { AppData } from '../data/types';
import { initialData } from '../data/initialData'; // Import initialData

const AdminPanel: React.FC<{ data: AppData; saveData: (data: AppData) => void }> = ({ data, saveData }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [editData, setEditData] = useState<AppData>(data);

  useEffect(() => {
    setEditData(data);
  }, [data]);

  const handleSave = () => {
    saveData(editData);
    alert('Data berhasil disimpan!');
  };

  const currentData = editData || initialData;
  
  // Definisikan sections di sini
  const sections = [
    { id: 'hero', label: 'Hero Banner' },
    { id: 'stats', label: 'Data Umum' },
    // Tambahkan section lain di sini jika Anda membuatnya
    { id: 'messages', label: 'Pesan Masuk' }
  ];


  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-700">Admin Panel</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex overflow-x-auto border-b">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-4 whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-green-700 text-white'
                  : 'text-gray-700 hover:bg-green-50'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeSection === 'hero' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Judul</label>
                <input
                  type="text"
                  value={currentData.hero.title}
                  onChange={(e) => setEditData({ ...currentData, hero: { ...currentData.hero, title: e.target.value }})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subtitle</label>
                <input
                  type="text"
                  value={currentData.hero.subtitle}
                  onChange={(e) => setEditData({ ...currentData, hero: { ...currentData.hero, subtitle: e.target.value }})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          )}

          {activeSection === 'stats' && (
            <div className="space-y-4">
              {currentData.stats.map((stat, idx) => (
                <div key={idx} className="p-4 border rounded-lg">
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...currentData.stats];
                      newStats[idx].label = e.target.value;
                      setEditData({ ...currentData, stats: newStats });
                    }}
                    className="w-full px-4 py-2 border rounded-lg mb-2"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...currentData.stats];
                      newStats[idx].value = e.target.value;
                      setEditData({ ...currentData, stats: newStats });
                    }}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Nilai"
                  />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="space-y-4">
              {currentData.messages.length === 0 ? (
                <p className="text-gray-500">Belum ada pesan masuk</p>
              ) : (
                currentData.messages.map(msg => (
                  <div key={msg.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-800">{msg.nama}</strong>
                      <span className="text-sm text-gray-500">{msg.tanggal}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{msg.email}</p>
                    <p className="text-gray-700">{msg.pesan}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="border-t p-6">
          <button
            onClick={handleSave}
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 font-bold"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
