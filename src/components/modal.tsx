



export default function Modal( {isOpen, onClose, children} : {isOpen: boolean, onClose: () => void, children: React.ReactNode}){

   if(!isOpen) return null
    

    return (
       
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-gray-800 bg-opacity-75">
      <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
        {children}
        <button
          className="flex mx-auto select-none rounded-lg bg-gradient-to-tr from-purple-600 to-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>

    )
}