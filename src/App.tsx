import React, { useState, useEffect } from 'react';
import { Home, FileText, MapPin, BarChart3, Image, FolderOpen, Phone, Users, Menu, X, LogIn, LogOut, Edit, Building2 } from 'lucide-react';

import { initialData } from './data/initialData';
import type { AppData, MenuItem, Potensi } from './data/types';

import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import PemerintahDesaPage from './pages/PemerintahDesaPage'; // BARU
import PotensiPage from './pages/PotensiPage';
import PetaPage from './pages/PetaPage';
import DataPage from './pages/DataPage';
import InfografisPage from './pages/InfografisPage';
import DokumenPage from './pages/DokumenPage';
import KontakPage from './pages/KontakPage';
import AdminPanel from './pages/AdminPanel';
import PotensiDetailPage from './pages/PotensiDetailPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPotensi, setSelectedPotensi] = useState<Potensi | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [data, setData] = useState<AppData>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string>('');

  useEffect(() => {
    const loadData = () => {
      try {
        const savedData = localStorage.getItem('desa-data');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          
          // MIGRATION: If old data doesn't have informasiUmum, merge with initialData
          if (!parsedData.informasiUmum) {
            const migratedData = {
              ...initialData,
              ...parsedData,
              informasiUmum: initialData.informasiUmum
            };
            setData(migratedData);
            // Save migrated data back to localStorage
            localStorage.setItem('desa-data', JSON.stringify(migratedData));
          } else {
            setData(parsedData);
          }
        }
      } catch (error) {
        console.log('No saved data, using defaults');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const saveData = (newData: AppData) => {
    setData(newData);
    try {
      localStorage.setItem('desa-data', JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setAdminPassword('');
      setLoginError('');
    } else {
      setLoginError('Password salah!');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setSelectedPotensi(null);
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-2xl text-green-700">Memuat...</div>
      </div>
    );
  }

  // DIUBAH: Menu items dengan Pemerintah Desa
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profil', label: 'Profil Desa', icon: FileText },
    { id: 'pemerintah', label: 'Pemerintah Desa', icon: Building2 }, // BARU
    { id: 'potensi', label: 'Potensi Desa', icon: Users },
    { id: 'peta', label: 'Peta Desa', icon: MapPin },
    { id: 'data', label: 'Data Desa', icon: BarChart3 },
    { id: 'infografis', label: 'Infografis', icon: Image },
    { id: 'dokumen', label: 'Dokumen', icon: FolderOpen },
    { id: 'kontak', label: 'Kontak', icon: Phone }
  ];

  if (isAdmin) {
    menuItems.push({ id: 'admin', label: 'Admin Panel', icon: Edit });
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedPotensi(null);
    setMobileMenuOpen(false);
  };

  // DIUBAH: Render page dengan halaman baru
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage data={data} />;
      case 'profil': return <ProfilPage data={data} />;
      case 'pemerintah': return <PemerintahDesaPage data={data} />; // BARU
      case 'potensi':
        if (selectedPotensi) {
          return (
            <PotensiDetailPage
              potensi={selectedPotensi}
              onBack={() => setSelectedPotensi(null)}
            />
          );
        }
        return (
          <PotensiPage
            data={data}
            onPotensiClick={setSelectedPotensi}
          />
        );
      case 'peta': return <PetaPage data={data} />;
      case 'data': return <DataPage data={data} />;
      case 'infografis': return <InfografisPage data={data} setLightboxImage={setLightboxImage} />;
      case 'dokumen': return <DokumenPage data={data} />;
      case 'kontak': return <KontakPage data={data} saveData={saveData} />;
      case 'admin': return isAdmin ? <AdminPanel data={data} saveData={saveData} /> : <HomePage data={data} />;
      default: return <HomePage data={data} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                N3
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-700">Desa Noongan Tiga</h1>
                <p className="text-xs text-gray-600">Minahasa</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-1">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id && !selectedPotensi
                      ? 'bg-green-700 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:block">
              {isAdmin ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <LogOut size={18} />
                  <span>Keluar</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700"
                  style={{ backgroundColor: '#795548' }}
                >
                  <LogIn size={18} />
                  <span>Admin</span>
                </button>
              )}
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 space-y-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id && !selectedPotensi
                      ? 'bg-green-700 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {isAdmin ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Keluar
                </button>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full text-left px-4 py-2 text-white rounded-lg"
                  style={{ backgroundColor: '#795548' }}
                >
                  Login Admin
                </button>
              )}
            </nav>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <footer className="bg-green-700 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <p className="text-sm">{data.kontak.alamat}</p>
              <p className="text-sm mt-2">Telp: {data.kontak.telepon}</p>
              <p className="text-sm">Email: {data.kontak.email}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
              <div className="space-y-2">
                <a href={data.socialMedia.facebook} className="block text-sm hover:underline">Facebook</a>
                <a href={data.socialMedia.instagram} className="block text-sm hover:underline">Instagram</a>
                <a href={data.socialMedia.youtube} className="block text-sm hover:underline">YouTube</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Tentang</h3>
              <p className="text-sm">Website resmi Desa Noongan Tiga, Kecamatan Talawaan, Kabupaten Minahasa</p>
            </div>
          </div>
          <div className="border-t border-green-600 mt-8 pt-4 text-center text-sm">
            © 2024 Desa Noongan Tiga. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Login Admin</h2>
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            {loginError && (
              <p className="text-red-600 text-sm mb-4">{loginError}</p>
            )}
            <div className="flex space-x-2">
              <button
                onClick={handleLogin}
                className="flex-1 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
              >
                Masuk
              </button>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setAdminPassword('');
                  setLoginError('');
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              >
                Batal
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">Password default: admin123</p>
          </div>
        </div>
      )}

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Preview" className="max-w-full max-h-full rounded-lg" />
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;