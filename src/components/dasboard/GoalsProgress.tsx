import React from 'react';
import { ChevronRight } from 'lucide-react';
type Goal = {
  id: number;
  name: string;
  emoji: string;
  current: number;
  target: number;
  percentComplete: number;
};
export function GoalsProgress() {
  const goals: Goal[] = [{
    id: 1,
    name: 'Lisbon Trip',
    emoji: '✈️',
    current: 500,
    target: 1200,
    percentComplete: 42
  }, {
    id: 2,
    name: 'House Deposit',
    emoji: '🏡',
    current: 6000,
    target: 20000,
    percentComplete: 30
  }];
  return <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-medium text-gray-700">Goals Progress</h2>
        <button className="text-xs text-blue-500 flex items-center">
          View All <ChevronRight size={14} />
        </button>
      </div>
      <div className="space-y-3">
        {goals.map(goal => <div key={goal.id}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <span className="mr-2">{goal.emoji}</span>
                <span className="text-sm font-medium">{goal.name}</span>
              </div>
              <span className="text-xs text-gray-500">
                £{goal.current.toLocaleString()} / £
                {goal.target.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
            width: `${goal.percentComplete}%`
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
}