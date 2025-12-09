interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-10/12 md:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex flex-col gap-4 justify-around items-center-safe">
          <h3 className="text-xl text-center font-bold">
            Are you sure you want to delete this todo?
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}
