import React from 'react';
type ColorCategory = {
  title: string;
  colors: {
    name: string;
    value: string;
    tailwindClass: string;
    textClass?: string;
  }[];
};
export function ColorGuide() {
  const colorCategories: ColorCategory[] = [{
    title: 'Backgrounds',
    colors: [{
      name: 'Main Background',
      value: '#F9FAFB',
      tailwindClass: 'bg-gray-50'
    }, {
      name: 'Card Background',
      value: '#FFFFFF',
      tailwindClass: 'bg-white'
    }, {
      name: 'Safe-to-Spend Gradient Start',
      value: '#3B82F6',
      tailwindClass: 'from-blue-500'
    }, {
      name: 'Safe-to-Spend Gradient End',
      value: '#2563EB',
      tailwindClass: 'to-blue-600'
    }, {
      name: 'Alert Background',
      value: '#FFF7ED',
      tailwindClass: 'bg-orange-50'
    }]
  }, {
    title: 'Tiles & Elements',
    colors: [{
      name: 'Card Border',
      value: '#F3F4F6',
      tailwindClass: 'border-gray-100'
    }, {
      name: 'Progress Bar Background',
      value: '#F3F4F6',
      tailwindClass: 'bg-gray-100'
    }, {
      name: 'Progress Bar Filled',
      value: '#10B981',
      tailwindClass: 'bg-green-500'
    }, {
      name: 'Under Budget Icon',
      value: '#DCFCE7',
      tailwindClass: 'bg-green-100',
      textClass: 'text-green-600'
    }, {
      name: 'Over Budget Icon',
      value: '#FFEDD5',
      tailwindClass: 'bg-orange-100',
      textClass: 'text-orange-600'
    }]
  }, {
    title: 'Typography',
    colors: [{
      name: 'Primary Text',
      value: '#374151',
      tailwindClass: 'text-gray-700'
    }, {
      name: 'Secondary Text',
      value: '#6B7280',
      tailwindClass: 'text-gray-500'
    }, {
      name: 'Label Text',
      value: '#4B5563',
      tailwindClass: 'text-gray-600'
    }, {
      name: 'Light Text (on dark bg)',
      value: '#FFFFFF',
      tailwindClass: 'text-white'
    }, {
      name: 'Accent Text',
      value: '#3B82F6',
      tailwindClass: 'text-blue-500'
    }, {
      name: 'Success Text',
      value: '#059669',
      tailwindClass: 'text-green-600'
    }, {
      name: 'Warning Text',
      value: '#EA580C',
      tailwindClass: 'text-orange-600'
    }]
  }, {
    title: 'Shadows',
    colors: [{
      name: 'Card Shadow',
      value: 'rgba(0, 0, 0, 0.05)',
      tailwindClass: 'shadow-sm'
    }, {
      name: 'iPhone Frame Shadow',
      value: 'rgba(0, 0, 0, 0.25)',
      tailwindClass: 'shadow-2xl'
    }]
  }];
  return <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Color Guide</h2>
      <div className="space-y-6">
        {colorCategories.map((category, idx) => <div key={idx} className="space-y-2">
            <h3 className="font-medium text-gray-700">{category.title}</h3>
            <div className="grid grid-cols-1 gap-2">
              {category.colors.map((color, colorIdx) => <div key={colorIdx} className="flex items-center">
                  <div className={`w-8 h-8 rounded-md mr-3 ${color.tailwindClass} border border-gray-200`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {color.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {color.value} • {color.tailwindClass}{' '}
                      {color.textClass && `• ${color.textClass}`}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}