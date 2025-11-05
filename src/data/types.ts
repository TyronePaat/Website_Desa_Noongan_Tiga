import type React from 'react';

// Sub-item untuk detail potensi
export interface SubPotensi {
  id: number;
  title: string;
  image: string;
  description: string;
  kontak?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

// BARU: Informasi Umum Desa (menggantikan VisiMisi di Profil)
export interface InformasiUmum {
  namaDesa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  koordinat: string;
  batasWilayah: {
    utara: string;
    selatan: string;
    timur: string;
    barat: string;
  };
  luasWilayah: string;
  pembagianWilayah: {
    jumlahDusun: number;
    jumlahRT: number;
    jumlahRW: number;
  };
}

export interface Potensi {
  id: number;
  title: string;
  description: string;
  image: string;
  subItems?: SubPotensi[];
}

export interface Maps {
  location: string;
  satellite: string;
}

export interface ChartItem {
  label: string;
  value: number;
}

export interface ChartData {
  pendidikan: ChartItem[];
  pekerjaan: ChartItem[];
  agama: ChartItem[];
  jenisKelamin: ChartItem[];
  kelompokUmur: ChartItem[];
}

// Aparatur dipindah untuk Pemerintah Desa
export interface Aparatur {
  id: number;
  name: string;
  position: string;
  photo: string;
}

export interface Infografis {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface Dokumen {
  id: number;
  title: string;
  description: string;
  category: string;
  file: string;
}

export interface Kontak {
  alamat: string;
  telepon: string;
  email: string;
  whatsapp: string;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface Message {
  id: number;
  nama: string;
  email: string;
  pesan: string;
  tanggal: string;
}

export interface Hero {
  title: string;
  subtitle: string;
}

export interface AppData {
  hero: Hero;
  stats: Stat[];
  informasiUmum: InformasiUmum; // DIUBAH dari visiMisi
  sejarah: string;
  potensi: Potensi[];
  aparatur: Aparatur[]; // Tetap ada untuk halaman Pemerintah Desa
  maps: Maps;
  dataIntro: string;
  chartData: ChartData;
  infografis: Infografis[];
  dokumen: Dokumen[];
  kontak: Kontak;
  socialMedia: SocialMedia;
  messages: Message[];
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

