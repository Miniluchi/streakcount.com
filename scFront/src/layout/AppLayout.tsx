import Sidebar from "../components/Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-56 p-6 bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
