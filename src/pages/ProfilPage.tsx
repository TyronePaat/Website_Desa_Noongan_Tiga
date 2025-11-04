import React from 'react';
import type { AppData } from '../data/types';

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

export default ProfilPage;
