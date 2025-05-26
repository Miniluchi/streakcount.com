interface AuthTabsProps {
    activeTab: 'login' | 'register';
    setActiveTab: (tab: 'login' | 'register') => void;
  }
  
  export const AuthTabs = ({ activeTab, setActiveTab }: AuthTabsProps) => {
    return (
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 text-center rounded-t-lg font-semibold ${
            activeTab === 'login' ? 'bg-white text-black' : 'bg-transparent text-gray-200'
          }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-2 text-center rounded-t-lg font-semibold ${
            activeTab === 'register' ? 'bg-white text-black' : 'bg-transparent text-gray-200'
          }`}
        >
          New account
        </button>
      </div>
    );
  };
  