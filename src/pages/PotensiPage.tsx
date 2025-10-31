import React from 'react';
import type { AppData } from '../data/types';

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

export default PotensiPage;