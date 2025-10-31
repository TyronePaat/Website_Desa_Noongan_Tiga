// src/data/types.ts
import React from 'react';

// Type Definitions
export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface VisiMisi {
  visi: string;
  misi: string[];
}

export interface Potensi {
  id: number;
  title: string;
  description: string;
  image: string;
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

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}