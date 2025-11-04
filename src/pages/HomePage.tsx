import React from 'react';
import type { AppData } from '../data/types';

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

export default HomePage;
