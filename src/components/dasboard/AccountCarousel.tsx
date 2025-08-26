import React from 'react';
type Account = {
  id: number;
  institution: string;
  name: string;
  balance: string;
  currency: string;
  logo: string;
};
export function AccountCarousel() {
  const accounts: Account[] = [{
    id: 1,
    institution: 'Barclays',
    name: 'Current Account',
    balance: '£1,450.78',
    currency: 'GBP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Barclays_logo.svg/1200px-Barclays_logo.svg.png'
  }, {
    id: 2,
    institution: 'Amex',
    name: 'Credit Card',
    balance: '£412.50',
    currency: 'GBP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png'
  }, {
    id: 3,
    institution: 'Monzo',
    name: 'Savings Account',
    balance: '£6,500.00',
    currency: 'GBP',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Monzo_logo.svg/1200px-Monzo_logo.svg.png'
  }, {
    id: 4,
    institution: 'Revolut',
    name: 'Travel FX',
    balance: '€215.30',
    currency: 'EUR',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Revolut_icon.svg/1200px-Revolut_icon.svg.png'
  }];
  return <div className="mb-2">
      <h2 className="text-sm font-medium text-gray-500 mb-2">Accounts</h2>
      <div className="flex overflow-x-auto pb-2 -mx-1 hide-scrollbar">
        {accounts.map(account => <div key={account.id} className="min-w-[180px] px-1">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 mr-2">
                  <img src={account.logo} alt={account.institution} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-medium text-gray-600">
                  {account.institution}
                </span>
              </div>
              <div className="text-sm text-gray-500">{account.name}</div>
              <div className="mt-1 font-semibold">
                {account.id === 2 ? `Spent: ${account.balance}` : account.balance}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}