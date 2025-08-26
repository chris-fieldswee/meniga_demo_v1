import React from 'react';
import { DashboardScreen } from './components/dashboard/DashboardScreen';
export function App() {
  return <div className="flex w-full min-h-screen justify-center items-center bg-gray-100 p-4">
      <div className="max-w-[375px] mx-auto">
        <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-black relative bg-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
          <DashboardScreen />
        </div>
      </div>
    </div>;
}