const Ensaio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pl-8 pr-8">
      <div className="flex flex-col space-y-8 md:space-y-2 md:w-1/2 border border-solid border-blue-400 border-opacity-70 p-4 rounded-xl mx-auto md:mx-0">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <h3 className="pt-4 pl-2 text-xl">No ensaio você poderá conhecer a banda, tirar dúvidas e alinhar detalhes para seu evento.</h3>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <h3 className="pb-6 pl-2 text-xl">E pode trazer alguns convidados para fazer um esquenta do som 
            que vai rolar na sua festa!</h3>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 md:w-1/2">
        <h1 className="pt-4 text-3xl font-bold w-full text-center">Nos contate para</h1>
        <h1 className="pb-4 text-3xl font-bold mb-4 w-full text-center">agendar um horário!</h1>
        <a href="#" className="bg-whatsappCor text-white m-auto px-4 py-2 rounded-lg shadow hover:bg-blue-600 w-3/6 text-center">WhatsApp</a>
      </div>
    </div>
  );
};

export default Ensaio;
