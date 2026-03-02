import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 pt-20" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe
          src="https://viasulsuprimentos.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none block"
          style={{ width: '100%', height: '100%' }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
