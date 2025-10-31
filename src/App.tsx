import React, { useState, useEffect } from 'react';
import { Home, FileText, MapPin, BarChart3, Image, FolderOpen, Phone, Users, Menu, X, LogIn, LogOut, Edit, Plus, Trash2 } from 'lucide-react';

// Type Definitions
interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface VisiMisi {
  visi: string;
  misi: string[];
}

interface Potensi {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Maps {
  location: string;
  satellite: string;
}

interface ChartItem {
  label: string;
  value: number;
}

interface ChartData {
  pendidikan: ChartItem[];
  pekerjaan: ChartItem[];
  agama: ChartItem[];
  jenisKelamin: ChartItem[];
  kelompokUmur: ChartItem[];
}

interface Aparatur {
  id: number;
  name: string;
  position: string;
  photo: string;
}

interface Infografis {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface Dokumen {
  id: number;
  title: string;
  description: string;
  category: string;
  file: string;
}

interface Kontak {
  alamat: string;
  telepon: string;
  email: string;
  whatsapp: string;
}

interface SocialMedia {
  facebook: string;
  instagram: string;
  youtube: string;
}

interface Message {
  id: number;
  nama: string;
  email: string;
  pesan: string;
  tanggal: string;
}

interface Hero {
  title: string;
  subtitle: string;
}

interface AppData {
  hero: Hero;
  stats: Stat[];
  visiMisi: VisiMisi;
  sejarah: string;
  potensi: Potensi[];
  maps: Maps;
  dataIntro: string;
  chartData: ChartData;
  aparatur: Aparatur[];
  infografis: Infografis[];
  dokumen: Dokumen[];
  kontak: Kontak;
  socialMedia: SocialMedia;
  messages: Message[];
}

// Initial data structure
const initialData: AppData = {
  hero: {
    title: "Selamat Datang di Desa Noongan Tiga",
    subtitle: "Desa yang Maju, Sejahtera, dan Berbudaya"
  },
  stats: [
    { label: "Populasi", value: "2.547", icon: "👥" },
    { label: "Luas Wilayah", value: "12,5 km²", icon: "🗺️" },
    { label: "Jumlah KK", value: "645", icon: "🏠" },
    { label: "Jumlah RT/RW", value: "8/3", icon: "📍" }
  ],
  visiMisi: {
    visi: "Mewujudkan Desa Noongan Tiga yang Maju, Sejahtera, Mandiri, dan Religius berdasarkan Gotong Royong",
    misi: [
      "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan",
      "Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM",
      "Meningkatkan pelayanan publik yang berkualitas dan transparan",
      "Membangun infrastruktur desa yang merata dan berkelanjutan",
      "Melestarikan nilai-nilai budaya dan kearifan lokal"
    ]
  },
  sejarah: "Desa Noongan Tiga memiliki sejarah panjang yang bermula dari pemukiman kecil di kaki gunung. Nama 'Noongan Tiga' berasal dari bahasa lokal yang berarti 'Tempat Ketiga', merujuk pada posisi geografisnya. Sejak tahun 1950-an, desa ini berkembang menjadi komunitas agraris yang kuat dengan tradisi gotong royong yang kental. Seiring waktu, Desa Noongan Tiga terus bertransformasi menjadi desa modern tanpa meninggalkan akar budayanya.",
  potensi: [
    {
      id: 1,
      title: "Pertanian",
      description: "Lahan pertanian yang subur dengan hasil panen padi, jagung, dan sayuran berkualitas tinggi",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400"
    },
    {
      id: 2,
      title: "UMKM",
      description: "Berbagai usaha mikro seperti kerajinan tangan, kuliner tradisional, dan industri rumahan",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400"
    },
    {
      id: 3,
      title: "Pariwisata",
      description: "Destinasi wisata alam dengan pemandangan pegunungan dan air terjun yang indah",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    }
  ],
  maps: {
    location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d296.48735413134176!2d124.81040680472832!3d1.129957456871402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1761912749838!5m2!1sid!2sid",
    satellite: "https://i.ibb.co.com/cXYgrtzB/PETA-DESA-NOONGAN-TIGA.jpg"
  },
  dataIntro: "Halaman ini menyajikan data demografis dan statistik Desa Noongan Tiga untuk memberikan gambaran komprehensif tentang kondisi masyarakat desa.",
  chartData: {
    pendidikan: [
      { label: "Tidak Sekolah", value: 150 },
      { label: "SD", value: 450 },
      { label: "SMP", value: 380 },
      { label: "SMA", value: 420 },
      { label: "Diploma/Sarjana", value: 147 }
    ],
    pekerjaan: [
      { label: "Petani", value: 450 },
      { label: "Wiraswasta", value: 280 },
      { label: "PNS", value: 85 },
      { label: "Buruh", value: 320 },
      { label: "Lainnya", value: 412 }
    ],
    agama: [
      { label: "Islam", value: 1850 },
      { label: "Kristen", value: 520 },
      { label: "Katolik", value: 177 }
    ],
    jenisKelamin: [
      { label: "Laki-laki", value: 1289 },
      { label: "Perempuan", value: 1258 }
    ],
    kelompokUmur: [
      { label: "0-10 tahun", value: 385 },
      { label: "11-20 tahun", value: 428 },
      { label: "21-30 tahun", value: 456 },
      { label: "31-40 tahun", value: 412 },
      { label: "41-50 tahun", value: 368 },
      { label: "51-60 tahun", value: 298 },
      { label: "60+ tahun", value: 200 }
    ]
  },
  aparatur: [
    { id: 1, name: "H. Ahmad Suryadi", position: "Kepala Desa", photo: "https://i.pravatar.cc/150?img=12" },
    { id: 2, name: "Ir. Siti Rahmawati", position: "Sekretaris Desa", photo: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Budi Santoso, S.E.", position: "Kaur Keuangan", photo: "https://i.pravatar.cc/150?img=33" },
    { id: 4, name: "Dewi Lestari", position: "Kaur Umum", photo: "https://i.pravatar.cc/150?img=9" }
  ],
  infografis: [
    { id: 1, title: "Infografis 1", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", category: "Statistik" },
    { id: 2, title: "Infografis 2", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", category: "Ekonomi" },
    { id: 3, title: "Infografis 3", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400", category: "Kesehatan" },
    { id: 4, title: "Infografis 4", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", category: "Pendidikan" }
  ],
  dokumen: [
    { id: 1, title: "Peraturan Desa No. 1 Tahun 2024", description: "Peraturan tentang APBDes", category: "Peraturan", file: "#" },
    { id: 2, title: "Laporan Keuangan Semester 1", description: "Laporan keuangan periode Januari-Juni 2024", category: "Laporan", file: "#" },
    { id: 3, title: "Formulir Surat Keterangan", description: "Template surat keterangan domisi", category: "Formulir", file: "#" }
  ],
  kontak: {
    alamat: "Jl. Raya Noongan Tiga No. 123, Kec. Talawaan, Kab. Minahasa, Sulawesi Utara",
    telepon: "(0431) 123456",
    email: "info@noongan3.desa.id",
    whatsapp: "+62 812-3456-7890"
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
    youtube: "#"
  },
  messages: []
};

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [data, setData] = useState<AppData>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string>(''); // For login modal message

  // Load data from localStorage
  useEffect(() => {
    const loadData = () => {
      try {
        const savedData = localStorage.getItem('desa-data');
        if (savedData) {
          setData(JSON.parse(savedData));
        }
      } catch (error) {
        console.log('No saved data, using defaults');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Save data to localStorage
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
      setLoginError(''); // Clear error
    } else {
      setLoginError('Password salah!'); // Set error
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-2xl text-green-700">Memuat...</div>
      </div>
    );
  }

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profil', label: 'Profil Desa', icon: FileText },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-1">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-green-700 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Auth Button Desktop */}
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 space-y-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage data={data} />}
        {currentPage === 'profil' && <ProfilPage data={data} />}
        {currentPage === 'potensi' && <PotensiPage data={data} />}
        {currentPage === 'peta' && <PetaPage data={data} />}
        {currentPage === 'data' && <DataPage data={data} />}
        {currentPage === 'infografis' && <InfografisPage data={data} setLightboxImage={setLightboxImage} />}
        {currentPage === 'dokumen' && <DokumenPage data={data} />}
        {currentPage === 'kontak' && <KontakPage data={data} saveData={saveData} />}
        {currentPage === 'admin' && isAdmin && <AdminPanel data={data} saveData={saveData} />}
      </main>

      {/* Footer */}
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

      {/* Login Modal */}
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
            {/* Fixed: Show login error message */}
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
                  setLoginError(''); // Clear error on cancel
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

      {/* Lightbox */}
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

// HomePage Component
const HomePage: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-12">
    {/* Hero Banner */}
    <div className="relative h-96 rounded-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.hero.title}</h1>
          <p className="text-xl text-white">{data.hero.subtitle}</p>
        </div>
      </div>
    </div>

    {/* Data Umum */}
    <div>
      <h2 className="text-3xl font-bold text-green-700 mb-6">Data Umum Desa</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {data.stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-green-700">{stat.value}</div>
            <div className="text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Infografis Terbaru */}
    <div>
      <h2 className="text-3xl font-bold text-green-700 mb-6">Infografis Terbaru</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {data.infografis.slice(0, 4).map(info => (
          <div key={info.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={info.image} alt={info.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{info.title}</h3>
              <span className="text-xs text-green-600">{info.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ProfilPage Component
const ProfilPage: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-12">
    <h1 className="text-4xl font-bold text-green-700">Profil Desa</h1>
    
    {/* Visi & Misi */}
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Visi</h2>
          <p className="text-gray-700 leading-relaxed">{data.visiMisi.visi}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Misi</h2>
          <ul className="space-y-3">
            {data.visiMisi.misi.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-700 mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Sejarah */}
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Sejarah Desa</h2>
      <p className="text-gray-700 leading-relaxed">{data.sejarah}</p>
    </div>
  </div>
);

// PotensiPage Component
const PotensiPage: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-green-700">Potensi Desa</h1>
    <div className="grid md:grid-cols-3 gap-6">
      {data.potensi.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// PetaPage Component
const PetaPage: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-green-700">Peta Desa</h1>
    
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Peta Lokasi</h2>
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

    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Peta Citra</h2>
      <img src={data.maps.satellite} alt="satellite" className="w-full rounded-lg" />
    </div>
  </div>
);

// DataPage Component with Charts
const DataPage: React.FC<{ data: AppData }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>('pendidikan');

  const renderChart = (chartData: ChartItem[], title: string) => {
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    const colors = ['#2E7D32', '#4CAF50', '#81C784', '#795548', '#A1887F'];
    
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="space-y-2">
          {chartData.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-bold text-gray-900">{item.value} ({((item.value/total)*100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.value/total)*100}%`,
                    backgroundColor: colors[idx % colors.length]
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'pekerjaan', label: 'Pekerjaan' },
    { id: 'agama', label: 'Agama' },
    { id: 'jenisKelamin', label: 'Jenis Kelamin' },
    { id: 'kelompokUmur', label: 'Kelompok Umur' },
    { id: 'aparatur', label: 'Aparatur Desa' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-700">Data Desa</h1>
      <p className="text-gray-600">{data.dataIntro}</p>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex overflow-x-auto border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-700 text-white'
                  : 'text-gray-700 hover:bg-green-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'aparatur' ? (
            <div className="grid md:grid-cols-4 gap-6">
              {data.aparatur.map(person => (
                <div key={person.id} className="text-center">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-green-600">{person.position}</p>
                </div>
              ))}
            </div>
          ) : (
            renderChart(data.chartData[activeTab as keyof ChartData], tabs.find(t => t.id === activeTab)?.label || '')
          )}
        </div>
      </div>
    </div>
  );
};

// InfografisPage Component
const InfografisPage: React.FC<{ data: AppData; setLightboxImage: (img: string | null) => void }> = ({ data, setLightboxImage }) => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-green-700">Infografis</h1>
    <div className="grid md:grid-cols-4 gap-6">
      {data.infografis.map(info => (
        <div
          key={info.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
          onClick={() => setLightboxImage(info.image)}
        >
          <img src={info.image} alt={info.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-gray-800">{info.title}</h3>
            <span className="text-xs text-green-600">{info.category}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// DokumenPage Component
const DokumenPage: React.FC<{ data: AppData }> = ({ data }) => {
  const categories = Array.from(new Set(data.dokumen.map(d => d.category)));

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-700">Dokumen Desa</h1>
      {categories.map(category => (
        <div key={category} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{category}</h2>
          <div className="space-y-4">
            {data.dokumen.filter(d => d.category === category).map(doc => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-bold text-gray-800">{doc.title}</h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
                <a
                  href={doc.file}
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// KontakPage Component
const KontakPage: React.FC<{ data: AppData; saveData: (data: AppData) => void }> = ({ data, saveData }) => {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [formMessage, setFormMessage] = useState<string>(''); // For form status

  const handleSubmit = () => {
    if (!formData.nama || !formData.email || !formData.pesan) {
      setFormMessage('Mohon lengkapi semua field!'); // Set error
      setTimeout(() => setFormMessage(''), 3000);
      return;
    }
    const newMessage: Message = { 
      id: Date.now(), 
      ...formData, 
      tanggal: new Date().toLocaleString('id-ID') 
    };
    const newData = { ...data, messages: [...data.messages, newMessage] };
    saveData(newData);
    setFormMessage('Pesan berhasil dikirim!'); // Set success
    setFormData({ nama: '', email: '', pesan: '' });
    // Clear message after 3 seconds
    setTimeout(() => setFormMessage(''), 3000);
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Pesan"
              value={formData.pesan}
              onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32"
            />
            {/* Fixed: Show form status message */}
            {formMessage && (
              <p className={`text-sm ${formMessage.startsWith('Mohon') ? 'text-red-600' : 'text-green-600'}`}>
                {formMessage}
              </p>
            )}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
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

// AdminPanel Component
const AdminPanel: React.FC<{ data: AppData; saveData: (data: AppData) => void }> = ({ data, saveData }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  // Use useEffect to set editData only when data changes or panel opens
  const [editData, setEditData] = useState<AppData>(data);

  useEffect(() => {
    setEditData(data);
  }, [data]);


  const handleSave = () => {
    saveData(editData);
    alert('Data berhasil disimpan!'); // Keeping alert here as it's admin-facing and simple
  };

  // Handle potential null editData
  const currentData = editData || initialData;

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

          {/* Add more sections as needed */}
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

export default App;
