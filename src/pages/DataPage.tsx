import React, { useState } from 'react';
import type { AppData, ChartData, ChartItem } from '../data/types';

const DataPage: React.FC<{ data: AppData }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>('pendidikan');

  const renderChart = (chartData: ChartItem[], title: string) => {
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    const colors = ['#2E7D32', '#4CAF50', '#81C784', '#795548', '#A1887F'];
    
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="space-y-2">
          {chartData.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-bold text-gray-900">{item.value} ({((item.value/total)*100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.value/total)*100}%`,
                    backgroundColor: colors[idx % colors.length]
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'pekerjaan', label: 'Pekerjaan' },
    { id: 'agama', label: 'Agama' },
    { id: 'jenisKelamin', label: 'Jenis Kelamin' },
    { id: 'kelompokUmur', label: 'Kelompok Umur' },
    { id: 'aparatur', label: 'Aparatur Desa' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-700">Data Desa</h1>
      <p className="text-gray-600">{data.dataIntro}</p>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex overflow-x-auto border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-700 text-white'
                  : 'text-gray-700 hover:bg-green-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'aparatur' ? (
            <div className="grid md:grid-cols-4 gap-6">
              {data.aparatur.map(person => (
                <div key={person.id} className="text-center">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-green-600">{person.position}</p>
                </div>
              ))}
            </div>
          ) : (
            renderChart(data.chartData[activeTab as keyof ChartData], tabs.find(t => t.id === activeTab)?.label || '')
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPage;
