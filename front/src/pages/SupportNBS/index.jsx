import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const SupportNBS = () => {
  const bankAccounts = [
    {
      bank: 'Halyk Bank',
      account: 'KZ12345678901234567890',
      bik: 'HSBKKZKX',
      purpose: 'Поддержка образовательных программ NBS'
    },
    {
      bank: 'Forte Bank',
      account: 'KZ09876543210987654321',
      bik: 'FORTKZKX',
      purpose: 'Стипендиальная поддержка студентов NBS'
    },
    {
      bank: 'Jusan Bank',
      account: 'KZ11223344556677889900',
      bik: 'JUSNKZKX',
      purpose: 'Развитие инфраструктуры NBS'
    }
  ];

  const supportMethods = [
    {
      title: 'Стипендиальная поддержка',
      description: 'Помощь талантливым студентам в получении качественного образования',
      amount: 'от 500 000 тенге'
    },
    {
      title: 'Грантовая поддержка',
      description: 'Финансирование исследовательских проектов и инновационных программ',
      amount: 'от 1 000 000 тенге'
    },
    {
      title: 'Инфраструктурная поддержка',
      description: 'Развитие материально-технической базы бизнес-школы',
      amount: 'от 2 000 000 тенге'
    },
    {
      title: 'Программная поддержка',
      description: 'Спонсирование образовательных программ и мероприятий',
      amount: 'от 3 000 000 тенге'
    }
  ];

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Реквизиты скопированы в буфер обмена');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Поддержать NBS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Narxoz Business School – это место для развития профессионалов и лидеров. 
              Ваша поддержка помогает нам создавать сильное бизнес-сообщество и развивать 
              качественное образование в Казахстане.
            </p>
          </div>
        </div>
      </div>

      {/* Support Methods Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Способы поддержки
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {method.description}
              </p>
              <div className="text-red-600 font-semibold">
                {method.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Accounts Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Банковские реквизиты
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bankAccounts.map((account, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {account.bank}
                  </h3>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1 block">
                      Номер счета
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <code className="text-sm font-mono text-gray-900">
                        {account.account}
                      </code>
                      <button
                        onClick={() => handleCopyToClipboard(account.account)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1 block">
                      БИК
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <code className="text-sm font-mono text-gray-900">
                        {account.bik}
                      </code>
                      <button
                        onClick={() => handleCopyToClipboard(account.bik)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1 block">
                      Назначение платежа
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-sm text-gray-900">
                        {account.purpose}
                      </span>
                      <button
                        onClick={() => handleCopyToClipboard(account.purpose)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Нужна дополнительная информация?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения дополнительной информации о способах поддержки 
            и партнерских программах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Связаться с нами
            </Button>
            <Button className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Стать партнером
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupportNBS; 