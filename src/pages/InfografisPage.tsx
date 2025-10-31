import React from 'react';
import type { AppData } from '../data/types';

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

export default InfografisPage;