// src/data/initialData.ts
import type { AppData } from './types';

// Initial data structure
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
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.470487317737!2d124.9818256750058!3d1.500854498458941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287b1c93a00f07d%3A0x8c7b8f9e0d9b4b0e!2sNoongan%20Tiga%2C%20Talawaan%2C%20North%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1730419339359!5m2!1sen!2sid",
    satelit: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
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
    { id: 3, title: "Formulir Surat Keterangan", description: "Template surat keterangan domisili", category: "Formulir", file: "#" }
  ],
  kontak: {
    alamat: "Jl. Raya Noongan Tiga No. 123, Kec. Talawaan, Kab. Minahasa Utara, Sulawesi Utara",
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