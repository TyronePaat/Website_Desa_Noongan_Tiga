import React from 'react';
import type { AppData } from '../data/types';

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

export default PetaPage;