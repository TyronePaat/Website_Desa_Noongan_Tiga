import React from 'react';
import type { AppData } from '../data/types';

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

export default DokumenPage;
