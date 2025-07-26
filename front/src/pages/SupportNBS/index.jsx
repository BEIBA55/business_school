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
      purpose: 'Поддержка образовательных программ NBS',
    },
    {
      bank: 'Forte Bank',
      account: 'KZ09876543210987654321',
      bik: 'FORTKZKX',
      purpose: 'Стипендиальная поддержка студентов NBS',
    },
    {
      bank: 'Jusan Bank',
      account: 'KZ11223344556677889900',
      bik: 'JUSNKZKX',
      purpose: 'Развитие инфраструктуры NBS',
    },
  ];

  const futureVision = [
    {
      title: 'Стипендии',
      description: 'Привлекаем таланты. Расширяем горизонты.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: 'Экосистема',
      description: 'Инвестируем в пространства, соответствующие высокому уровню нашего обучения.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Инновации',
      description: 'Ускоряем развитие и вдохновляем на идеи, которые меняют мир.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Реквизиты скопированы в буфер обмена');
  };

  const handleLearnMore = (section) => {
    switch (section) {
      case 'proBono':
        // Можно добавить модальное окно или переход на другую страницу
        alert('Подробная информация о кампании ProBono будет доступна в ближайшее время');
        break;
      case 'future':
        // Прокрутка к секции "Взгляд в будущее"
        document.getElementById('future-vision')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ProBono Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                ProBono by Narxoz Business School
              </h1>
              <p className="text-2xl font-semibold text-red-600 mb-6">Ambitious. Bold. Together.</p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Кампания Narxoz Business School по развитию школы и стипендиальных программ
                усиливает наше влияние в Казахстане и за его пределами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => handleLearnMore('proBono')}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Узнать больше
                </Button>
                <Button
                  onClick={() => handleLearnMore('future')}
                  className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Прикрепить презентацию ProBono
              </h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <a
                  href="/presentations/probono-presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Скачать презентацию ProBono</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support NBS Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Поддержите Narxoz Business School
          </h2>
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Сделайте вклад сегодня</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ваш вклад помогает нам менять мир через образование. Поддерживая стипендии,
            исследования, создание инновационной среды обучения, вы помогаете Narxoz Business School
            оставаться вашим надёжным партнёром на протяжении всей жизни и готовить лидеров,
            способных формировать устойчивое будущее.
          </p>
          <p className="text-2xl font-bold text-red-600">
            Сделайте вклад — создайте возможности для будущих лидеров.
          </p>
        </div>
      </div>

      {/* Future Vision Section */}
      <div id="future-vision" className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Взгляд в будущее</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Узнайте больше о нашей кампании ProBono и откройте, каким мы видим будущее Narxoz
                Business School.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/ProBorn.png"
                  alt="Forever Forward in focus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureVision.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bank Accounts Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Банковские реквизиты</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{account.bank}</h3>
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
                    <code className="text-sm font-mono text-gray-900">{account.account}</code>
                    <button
                      onClick={() => handleCopyToClipboard(account.account)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">БИК</label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <code className="text-sm font-mono text-gray-900">{account.bik}</code>
                    <button
                      onClick={() => handleCopyToClipboard(account.bik)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">
                    Назначение платежа
                  </label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-sm text-gray-900">{account.purpose}</span>
                    <button
                      onClick={() => handleCopyToClipboard(account.purpose)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Для дополнительной информации:</h2>
          <p className="text-xl text-gray-600 mb-8">
            <a
              href="mailto:gsb@narxoz.kz"
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              gsb@narxoz.kz
            </a>
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
