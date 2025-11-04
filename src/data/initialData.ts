import type { AppData } from './types';

export const initialData: AppData = {
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
  // BARU: Informasi Umum Desa (menggantikan visiMisi)
  informasiUmum: {
    namaDesa: "Noongan Tiga",
    kecamatan: "Talawaan",
    kabupaten: "Minahasa",
    provinsi: "Sulawesi Utara",
    koordinat: "1°7'47.8\"N 124°48'37.5\"E",
    batasWilayah: {
      utara: "Desa Noongan Dua",
      selatan: "Desa Talawaan Bantik",
      timur: "Desa Kalasey",
      barat: "Desa Noongan"
    },
    luasWilayah: "12,5 km²",
    pembagianWilayah: {
      jumlahDusun: 3,
      jumlahRT: 8,
      jumlahRW: 3
    }
  },
  sejarah: "Berdasarkan cerita turun temurun Desa Noongan dahulunya adalah tempat genangan air (pabenongan). Apabilah turun hujan lebat maka airnya mengalir ke perkampungan penduduk desa sehingga tercetuslah Nama Noongan. Penduduk mulai Mendiami Noongan sejak tahun 1821 sebagai petani berpindah pindah dan berburu di perkebunan. Tahun 1879 oleh pemerintah Belanda ditetapkan sebagai perkampungan sehubungan dengan adanya Erpac Kelelondey. Tahun 1905 diresmikan menjadi Desa. Selanjutnya pada tanggal 1 Oktober 2007 setelah adanya Surat Keputusan Bupati Minahasa No. 199 tahun 2010 dimekarkan menjadi 3 Desa yaitu Desa Noongan, Desa Noongan Dua, dan Desa Noongan Tiga. Pada Tanggal 2 November 2010 disahkan menjadi Desa Definitif.",
  potensi: [
    {
      id: 1,
      title: "Pertanian",
      description: "Lahan pertanian yang subur dengan hasil panen padi, jagung, dan sayuran berkualitas tinggi",
      image: "/pertanianimg.jpg",
      subItems: [
        {
          id: 101,
          title: "Tomat Segar",
          image: "/pertanianimg.jpg",
          description: "Tomat segar hasil panen lokal, ditanam secara organik.",
          kontak: "0812-3456-001 (Bapak Tani Tomat)"
        },
        {
          id: 102,
          title: "Cabai (Rica)",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400",
          description: "Berbagai jenis cabai rawit (rica) dengan tingkat kepedasan bervariasi.",
          kontak: "0812-3456-002 (Ibu Tani Rica)"
        },
        {
          id: 103,
          title: "Jagung Manis",
          image: "https://images.unsplash.com/photo-1551754432-84a624028c89?w=400",
          description: "Jagung manis pipil berkualitas ekspor, cocok untuk berbagai masakan.",
          kontak: "0812-3456-003 (Bapak Tani Jagung)"
        }
      ]
    },
    {
      id: 2,
      title: "Peternakan",
      description: "Berbagai usaha mikro seperti kerajinan tangan, kuliner tradisional, dan industri rumahan",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400",
      subItems: []
    },
    {
      id: 3,
      title: "Produk",
      description: "Destinasi wisata alam dengan pemandangan pegunungan dan air terjun yang indah",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      subItems: []
    }
  ],
  aparatur: [
    { id: 1, name: "H. Ahmad Suryadi", position: "Kepala Desa", photo: "https://i.pravatar.cc/150?img=12" },
    { id: 2, name: "Ir. Siti Rahmawati", position: "Sekretaris Desa", photo: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Budi Santoso, S.E.", position: "Kaur Keuangan", photo: "https://i.pravatar.cc/150?img=33" },
    { id: 4, name: "Dewi Lestari", position: "Kaur Umum", photo: "https://i.pravatar.cc/150?img=9" }
  ],
  maps: {
    location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d296.48735413134176!2d124.81040680472832!3d1.129957456871402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1761912749838!5m2!1sid!2sid",
    satellite: "/petadesa.jpg"
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
  infografis: [
    { id: 1, title: "Infografis 1", image: "/infografiskentang.jpg", category: "Statistik" },
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