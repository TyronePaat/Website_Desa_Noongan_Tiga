import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import type { AppData, SubPotensi } from '../data/types';
import { initialData } from '../data/initialData';

const AdminPanel: React.FC<{ data: AppData; saveData: (data: AppData) => void }> = ({ data, saveData }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [editData, setEditData] = useState<AppData>(data);

  useEffect(() => {
    setEditData(data);
  }, [data]);

  const handleSave = () => {
    saveData(editData);
    alert('✅ Data berhasil disimpan!');
  };

  const sections = [
    { id: 'hero', label: 'Hero Banner' },
    { id: 'stats', label: 'Data Umum' },
    { id: 'informasi', label: 'Informasi Desa' },
    { id: 'sejarah', label: 'Sejarah' },
    { id: 'potensi', label: 'Potensi Desa' },
    { id: 'aparatur', label: 'Pemerintah Desa' },
    { id: 'timkkt', label: 'Tim KKT' },
    { id: 'infografis', label: 'Infografis' },
    { id: 'dokumen', label: 'Dokumen' },
    { id: 'kontak', label: 'Kontak & Sosmed' },
    { id: 'messages', label: 'Pesan Masuk' }
  ];

  const currentData = editData || initialData;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-700">Admin Panel</h1>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-bold"
        >
          <Save size={20} />
          <span>Simpan Semua Perubahan</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tabs */}
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

        {/* Content */}
        <div className="p-8">
          {/* Hero Banner */}
          {activeSection === 'hero' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Hero Banner</h2>
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

          {/* Stats */}
          {activeSection === 'stats' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Data Umum Desa</h2>
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

          {/* Informasi Umum Desa */}
          {activeSection === 'informasi' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Informasi Umum Desa</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Nama Desa</label>
                  <input
                    type="text"
                    value={currentData.informasiUmum.namaDesa}
                    onChange={(e) => setEditData({ ...currentData, informasiUmum: { ...currentData.informasiUmum, namaDesa: e.target.value }})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Kecamatan</label>
                  <input
                    type="text"
                    value={currentData.informasiUmum.kecamatan}
                    onChange={(e) => setEditData({ ...currentData, informasiUmum: { ...currentData.informasiUmum, kecamatan: e.target.value }})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Kabupaten</label>
                  <input
                    type="text"
                    value={currentData.informasiUmum.kabupaten}
                    onChange={(e) => setEditData({ ...currentData, informasiUmum: { ...currentData.informasiUmum, kabupaten: e.target.value }})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Provinsi</label>
                  <input
                    type="text"
                    value={currentData.informasiUmum.provinsi}
                    onChange={(e) => setEditData({ ...currentData, informasiUmum: { ...currentData.informasiUmum, provinsi: e.target.value }})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Koordinat</label>
                <input
                  type="text"
                  value={currentData.informasiUmum.koordinat}
                  onChange={(e) =>
                    setEditData({
                      ...currentData,
                      informasiUmum: {
                        ...currentData.informasiUmum,
                        koordinat: e.target.value,
                      },
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder={`1°7'47.8"N 124°48'37.5"E`}  
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Luas Wilayah</label>
                <input
                  type="text"
                  value={currentData.informasiUmum.luasWilayah}
                  onChange={(e) => setEditData({ ...currentData, informasiUmum: { ...currentData.informasiUmum, luasWilayah: e.target.value }})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-4">Batas Wilayah</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {['utara', 'selatan', 'timur', 'barat'].map(arah => (
                    <div key={arah}>
                      <label className="block text-xs font-semibold mb-1 text-gray-600 capitalize">{arah}</label>
                      <input
                        type="text"
                        value={currentData.informasiUmum.batasWilayah[arah as keyof typeof currentData.informasiUmum.batasWilayah]}
                        onChange={(e) => setEditData({ 
                          ...currentData, 
                          informasiUmum: { 
                            ...currentData.informasiUmum, 
                            batasWilayah: { 
                              ...currentData.informasiUmum.batasWilayah, 
                              [arah]: e.target.value 
                            }
                          }
                        })}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-4">Pembagian Wilayah</label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Jumlah Dusun</label>
                    <input
                      type="number"
                      value={currentData.informasiUmum.pembagianWilayah.jumlahDusun}
                      onChange={(e) => setEditData({ 
                        ...currentData, 
                        informasiUmum: { 
                          ...currentData.informasiUmum, 
                          pembagianWilayah: { 
                            ...currentData.informasiUmum.pembagianWilayah, 
                            jumlahDusun: parseInt(e.target.value) || 0 
                          }
                        }
                      })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Jumlah RT</label>
                    <input
                      type="number"
                      value={currentData.informasiUmum.pembagianWilayah.jumlahRT}
                      onChange={(e) => setEditData({ 
                        ...currentData, 
                        informasiUmum: { 
                          ...currentData.informasiUmum, 
                          pembagianWilayah: { 
                            ...currentData.informasiUmum.pembagianWilayah, 
                            jumlahRT: parseInt(e.target.value) || 0 
                          }
                        }
                      })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Jumlah RW</label>
                    <input
                      type="number"
                      value={currentData.informasiUmum.pembagianWilayah.jumlahRW}
                      onChange={(e) => setEditData({ 
                        ...currentData, 
                        informasiUmum: { 
                          ...currentData.informasiUmum, 
                          pembagianWilayah: { 
                            ...currentData.informasiUmum.pembagianWilayah, 
                            jumlahRW: parseInt(e.target.value) || 0 
                          }
                        }
                      })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sejarah */}
          {activeSection === 'sejarah' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Sejarah Desa</h2>
              <textarea
                value={currentData.sejarah}
                onChange={(e) => setEditData({ ...currentData, sejarah: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg h-64"
                placeholder="Tulis sejarah desa di sini..."
              />
            </div>
          )}

          {/* Potensi Desa */}
          {activeSection === 'potensi' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Potensi Desa</h2>
                <button
                  onClick={() => {
                    const newPotensi = {
                      id: Date.now(),
                      title: "Potensi Baru",
                      description: "Deskripsi potensi",
                      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
                      subItems: []
                    };
                    setEditData({ ...currentData, potensi: [...currentData.potensi, newPotensi] });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  <Plus size={18} />
                  <span>Tambah Potensi</span>
                </button>
              </div>

              {currentData.potensi.map((pot, potIdx) => (
                <div key={pot.id} className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-green-700">Potensi #{potIdx + 1}</h3>
                    <button
                      onClick={() => {
                        const newPotensi = currentData.potensi.filter((_, i) => i !== potIdx);
                        setEditData({ ...currentData, potensi: newPotensi });
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 bg-white p-4 rounded-lg">
                    <div>
                      <label className="block text-sm font-bold mb-2">Judul</label>
                      <input
                        type="text"
                        value={pot.title}
                        onChange={(e) => {
                          const newPotensi = [...currentData.potensi];
                          newPotensi[potIdx].title = e.target.value;
                          setEditData({ ...currentData, potensi: newPotensi });
                        }}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Deskripsi</label>
                      <textarea
                        value={pot.description}
                        onChange={(e) => {
                          const newPotensi = [...currentData.potensi];
                          newPotensi[potIdx].description = e.target.value;
                          setEditData({ ...currentData, potensi: newPotensi });
                        }}
                        className="w-full px-4 py-2 border rounded-lg h-24"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">URL Gambar</label>
                      <input
                        type="text"
                        value={pot.image}
                        onChange={(e) => {
                          const newPotensi = [...currentData.potensi];
                          newPotensi[potIdx].image = e.target.value;
                          setEditData({ ...currentData, potensi: newPotensi });
                        }}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>

                    {/* Sub-Items */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-sm font-bold">Sub-Item (Produk Detail)</label>
                        <button
                          onClick={() => {
                            const newSubItem: SubPotensi = {
                              id: Date.now(),
                              title: "Produk Baru",
                              image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
                              description: "Deskripsi produk",
                              kontak: "0812-xxxx-xxxx"
                            };
                            const newPotensi = [...currentData.potensi];
                            newPotensi[potIdx].subItems = [...(newPotensi[potIdx].subItems || []), newSubItem];
                            setEditData({ ...currentData, potensi: newPotensi });
                          }}
                          className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          <Plus size={14} />
                          <span>Tambah Sub-Item</span>
                        </button>
                      </div>

                      {pot.subItems && pot.subItems.map((subItem, subIdx) => (
                        <div key={subItem.id} className="bg-gray-50 p-4 rounded-lg mb-3">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-semibold text-gray-500">Sub-Item #{subIdx + 1}</span>
                            <button
                              onClick={() => {
                                const newPotensi = [...currentData.potensi];
                                newPotensi[potIdx].subItems = newPotensi[potIdx].subItems?.filter((_, i) => i !== subIdx);
                                setEditData({ ...currentData, potensi: newPotensi });
                              }}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={subItem.title}
                              onChange={(e) => {
                                const newPotensi = [...currentData.potensi];
                                if (newPotensi[potIdx].subItems) {
                                  newPotensi[potIdx].subItems![subIdx].title = e.target.value;
                                }
                                setEditData({ ...currentData, potensi: newPotensi });
                              }}
                              className="w-full px-3 py-1 border rounded text-sm"
                              placeholder="Nama produk"
                            />
                            <input
                              type="text"
                              value={subItem.image}
                              onChange={(e) => {
                                const newPotensi = [...currentData.potensi];
                                if (newPotensi[potIdx].subItems) {
                                  newPotensi[potIdx].subItems![subIdx].image = e.target.value;
                                }
                                setEditData({ ...currentData, potensi: newPotensi });
                              }}
                              className="w-full px-3 py-1 border rounded text-sm"
                              placeholder="URL Gambar"
                            />
                            <textarea
                              value={subItem.description}
                              onChange={(e) => {
                                const newPotensi = [...currentData.potensi];
                                if (newPotensi[potIdx].subItems) {
                                  newPotensi[potIdx].subItems![subIdx].description = e.target.value;
                                }
                                setEditData({ ...currentData, potensi: newPotensi });
                              }}
                              className="w-full px-3 py-1 border rounded text-sm h-16"
                              placeholder="Deskripsi"
                            />
                            <input
                              type="text"
                              value={subItem.kontak || ''}
                              onChange={(e) => {
                                const newPotensi = [...currentData.potensi];
                                if (newPotensi[potIdx].subItems) {
                                  newPotensi[potIdx].subItems![subIdx].kontak = e.target.value;
                                }
                                setEditData({ ...currentData, potensi: newPotensi });
                              }}
                              className="w-full px-3 py-1 border rounded text-sm"
                              placeholder="Kontak (0812-xxxx-xxxx)"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Aparatur/Pemerintah Desa */}
          {activeSection === 'aparatur' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Aparatur Desa</h2>
                <button
                  onClick={() => {
                    const newAparatur = {
                      id: Date.now(),
                      name: "Nama Aparatur",
                      position: "Jabatan",
                      photo: "https://i.pravatar.cc/150?img=12"
                    };
                    setEditData({ ...currentData, aparatur: [...currentData.aparatur, newAparatur] });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  <Plus size={18} />
                  <span>Tambah Aparatur</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {currentData.aparatur.map((person, idx) => (
                  <div key={person.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-gray-500">Aparatur #{idx + 1}</span>
                      <button
                        onClick={() => {
                          const newAparatur = currentData.aparatur.filter((_, i) => i !== idx);
                          setEditData({ ...currentData, aparatur: newAparatur });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold mb-1">Nama</label>
                        <input
                          type="text"
                          value={person.name}
                          onChange={(e) => {
                            const newAparatur = [...currentData.aparatur];
                            newAparatur[idx].name = e.target.value;
                            setEditData({ ...currentData, aparatur: newAparatur });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1">Jabatan</label>
                        <input
                          type="text"
                          value={person.position}
                          onChange={(e) => {
                            const newAparatur = [...currentData.aparatur];
                            newAparatur[idx].position = e.target.value;
                            setEditData({ ...currentData, aparatur: newAparatur });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1">URL Foto</label>
                        <input
                          type="text"
                          value={person.photo}
                          onChange={(e) => {
                            const newAparatur = [...currentData.aparatur];
                            newAparatur[idx].photo = e.target.value;
                            setEditData({ ...currentData, aparatur: newAparatur });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'timkkt' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Tim KKT</h2>
                <button
                  onClick={() => {
                    const newAnggota = {
                      id: Date.now(),
                      nama: "Nama Mahasiswa",
                      nim: "123456789",
                      prodi: "Program Studi",
                      foto: "https://i.pravatar.cc/300?img=1",
                      posisi: "Anggota"
                    };
                    setEditData({ 
                      ...currentData, 
                      timKKT: currentData.timKKT ? [...currentData.timKKT, newAnggota] : [newAnggota]
                    });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  <Plus size={18} />
                  <span>Tambah Anggota</span>
                </button>
              </div>

              {/* Panduan Upload Foto */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">📸 Tips Upload Foto:</h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li><strong>Rasio 1:1 (Persegi)</strong> - Foto 300x300px atau 500x500px ideal</li>
                  <li><strong>Upload ke layanan gratis:</strong> Imgur.com, ImgBB.com, atau Google Drive</li>
                  <li><strong>Wajah di tengah</strong> - Pastikan wajah tidak terpotong</li>
                  <li><strong>Background netral</strong> - Warna polos lebih baik</li>
                  <li>Jika foto tidak persegi, akan di-crop otomatis saat ditampilkan</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {(currentData.timKKT || []).map((anggota, idx) => (
                  <div key={anggota.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-gray-500">Anggota #{idx + 1}</span>
                      <button
                        onClick={() => {
                          const newTimKKT = currentData.timKKT?.filter((_, i) => i !== idx) || [];
                          setEditData({ ...currentData, timKKT: newTimKKT });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    {/* Preview Foto */}
                    <div className="mb-3">
                      <div className="w-24 h-24 mx-auto rounded-lg overflow-hidden border-2 border-gray-300">
                        <img 
                          src={anggota.foto} 
                          alt={anggota.nama}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold mb-1">Nama Lengkap</label>
                        <input
                          type="text"
                          value={anggota.nama}
                          onChange={(e) => {
                            const newTimKKT = [...(currentData.timKKT || [])];
                            newTimKKT[idx].nama = e.target.value;
                            setEditData({ ...currentData, timKKT: newTimKKT });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold mb-1">NIM</label>
                        <input
                          type="text"
                          value={anggota.nim}
                          onChange={(e) => {
                            const newTimKKT = [...(currentData.timKKT || [])];
                            newTimKKT[idx].nim = e.target.value;
                            setEditData({ ...currentData, timKKT: newTimKKT });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="123456789"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold mb-1">Program Studi</label>
                        <input
                          type="text"
                          value={anggota.prodi}
                          onChange={(e) => {
                            const newTimKKT = [...(currentData.timKKT || [])];
                            newTimKKT[idx].prodi = e.target.value;
                            setEditData({ ...currentData, timKKT: newTimKKT });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Teknik Informatika"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold mb-1">Posisi/Jabatan</label>
                        <select
                          value={anggota.posisi}
                          onChange={(e) => {
                            const newTimKKT = [...(currentData.timKKT || [])];
                            newTimKKT[idx].posisi = e.target.value;
                            setEditData({ ...currentData, timKKT: newTimKKT });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="Ketua">Ketua</option>
                          <option value="Wakil Ketua">Wakil Ketua</option>
                          <option value="Sekretaris">Sekretaris</option>
                          <option value="Bendahara">Bendahara</option>
                          <option value="Anggota">Anggota</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold mb-1">
                          URL Foto 
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={anggota.foto}
                          onChange={(e) => {
                            const newTimKKT = [...(currentData.timKKT || [])];
                            newTimKKT[idx].foto = e.target.value;
                            setEditData({ ...currentData, timKKT: newTimKKT });
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="https://i.imgur.com/xxx.jpg"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Upload foto ke <a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Imgur.com</a> lalu copy link-nya
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
            
          {/* Infografis */}
          {activeSection === 'infografis' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Infografis</h2>
                <button
                  onClick={() => {
                    const newInfo = {
                      id: Date.now(),
                      title: "Infografis Baru",
                      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
                      category: "Umum"
                    };
                    setEditData({ ...currentData, infografis: [...currentData.infografis, newInfo] });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  <Plus size={18} />
                  <span>Tambah Infografis</span>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {currentData.infografis.map((info, idx) => (
                  <div key={info.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-gray-500">#{idx + 1}</span>
                      <button
                        onClick={() => {
                          const newInfos = currentData.infografis.filter((_, i) => i !== idx);
                          setEditData({ ...currentData, infografis: newInfos });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={info.title}
                        onChange={(e) => {
                          const newInfos = [...currentData.infografis];
                          newInfos[idx].title = e.target.value;
                          setEditData({ ...currentData, infografis: newInfos });
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Judul"
                      />
                      <input
                        type="text"
                        value={info.category}
                        onChange={(e) => {
                          const newInfos = [...currentData.infografis];
                          newInfos[idx].category = e.target.value;
                          setEditData({ ...currentData, infografis: newInfos });
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Kategori"
                      />
                      <input
                        type="text"
                        value={info.image}
                        onChange={(e) => {
                          const newInfos = [...currentData.infografis];
                          newInfos[idx].image = e.target.value;
                          setEditData({ ...currentData, infografis: newInfos });
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="URL Gambar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dokumen */}
          {activeSection === 'dokumen' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dokumen</h2>
                <button
                  onClick={() => {
                    const newDoc = {
                      id: Date.now(),
                      title: "Dokumen Baru",
                      description: "Deskripsi dokumen",
                      category: "Umum",
                      file: "#"
                    };
                    setEditData({ ...currentData, dokumen: [...currentData.dokumen, newDoc] });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  <Plus size={18} />
                  <span>Tambah Dokumen</span>
                </button>
              </div>

              {currentData.dokumen.map((doc, idx) => (
                <div key={doc.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-semibold text-gray-500">Dokumen #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const newDocs = currentData.dokumen.filter((_, i) => i !== idx);
                        setEditData({ ...currentData, dokumen: newDocs });
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={doc.title}
                      onChange={(e) => {
                        const newDocs = [...currentData.dokumen];
                        newDocs[idx].title = e.target.value;
                        setEditData({ ...currentData, dokumen: newDocs });
                      }}
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Judul"
                    />
                    <input
                      type="text"
                      value={doc.category}
                      onChange={(e) => {
                        const newDocs = [...currentData.dokumen];
                        newDocs[idx].category = e.target.value;
                        setEditData({ ...currentData, dokumen: newDocs });
                      }}
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Kategori"
                    />
                    <textarea
                      value={doc.description}
                      onChange={(e) => {
                        const newDocs = [...currentData.dokumen];
                        newDocs[idx].description = e.target.value;
                        setEditData({ ...currentData, dokumen: newDocs });
                      }}
                      className="w-full px-3 py-2 border rounded-lg col-span-2"
                      placeholder="Deskripsi"
                    />
                    <input
                      type="text"
                      value={doc.file}
                      onChange={(e) => {
                        const newDocs = [...currentData.dokumen];
                        newDocs[idx].file = e.target.value;
                        setEditData({ ...currentData, dokumen: newDocs });
                      }}
                      className="w-full px-3 py-2 border rounded-lg col-span-2"
                      placeholder="URL File (ganti # dengan link Google Drive/Dropbox)"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Kontak & Sosmed */}
          {activeSection === 'kontak' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Kontak & Sosial Media</h2>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Kontak Desa</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Alamat</label>
                    <textarea
                      value={currentData.kontak.alamat}
                      onChange={(e) => setEditData({ ...currentData, kontak: { ...currentData.kontak, alamat: e.target.value }})}
                      className="w-full px-4 py-2 border rounded-lg h-24"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Telepon</label>
                      <input
                        type="text"
                        value={currentData.kontak.telepon}
                        onChange={(e) => setEditData({ ...currentData, kontak: { ...currentData.kontak, telepon: e.target.value }})}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email</label>
                      <input
                        type="email"
                        value={currentData.kontak.email}
                        onChange={(e) => setEditData({ ...currentData, kontak: { ...currentData.kontak, email: e.target.value }})}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">WhatsApp</label>
                      <input
                        type="text"
                        value={currentData.kontak.whatsapp}
                        onChange={(e) => setEditData({ ...currentData, kontak: { ...currentData.kontak, whatsapp: e.target.value }})}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Facebook</label>
                    <input
                      type="text"
                      value={currentData.socialMedia.facebook}
                      onChange={(e) => setEditData({ ...currentData, socialMedia: { ...currentData.socialMedia, facebook: e.target.value }})}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="https://facebook.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Instagram</label>
                    <input
                      type="text"
                      value={currentData.socialMedia.instagram}
                      onChange={(e) => setEditData({ ...currentData, socialMedia: { ...currentData.socialMedia, instagram: e.target.value }})}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">YouTube</label>
                    <input
                      type="text"
                      value={currentData.socialMedia.youtube}
                      onChange={(e) => setEditData({ ...currentData, socialMedia: { ...currentData.socialMedia, youtube: e.target.value }})}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="https://youtube.com/..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          {activeSection === 'messages' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Pesan Masuk ({currentData.messages.length})</h2>
              {currentData.messages.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>Belum ada pesan masuk</p>
                </div>
              ) : (
                currentData.messages.map(msg => (
                  <div key={msg.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-800">{msg.nama}</strong>
                      <span className="text-sm text-gray-500">{msg.tanggal}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{msg.email}</p>
                    <p className="text-gray-700 bg-white p-3 rounded">{msg.pesan}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;