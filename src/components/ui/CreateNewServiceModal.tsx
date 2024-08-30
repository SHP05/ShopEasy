// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/uT1kLVG8Nj6
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { FC } from 'react';
// const CreateNewServiceModal: FC = ({ toggleModal }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
//       <div className="fixed inset-0 bg-black/50" />
//       <div className="relative z-10 w-full max-w-[500px] rounded-lg bg-white p-2 shadow-lg sm:p-8">
//         <form className="grid gap-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <label htmlFor="name" className="text-right text-muted-foreground">
//               Service Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Enter service name"
//               className="col-span-3 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <label htmlFor="price" className="text-right text-muted-foreground">
//               Service Price
//             </label>
//             <input
//               id="price"
//               type="number"
//               placeholder="Enter service price"
//               className="col-span-3 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <label htmlFor="unit" className="text-right text-muted-foreground">
//               Service Unit
//             </label>
//             <input
//               id="unit"
//               type="text"
//               placeholder="Enter service unit"
//               className="col-span-3 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
//             />
//           </div>
//         </form>
//         <div className="mt-6 flex justify-end gap-2">
//           <button
//             type="button"
//             className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//             onClick={() => toggleModal(false)}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//           >
//             Save Service
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateNewServiceModal;
import { FC } from 'react';

interface CreateNewServiceModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateNewServiceModal: FC<CreateNewServiceModalProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transition-opacity duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`relative z-10 w-full max-w-[500px] rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg sm:p-8 transition-transform duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <form className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="name"
              className="text-right text-gray-600 dark:text-gray-300"
            >
              Service Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter service name"
              className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="unit"
              className="text-right text-gray-600 dark:text-gray-300"
            >
              Service Unit
            </label>
            <input
              id="unit"
              type="text"
              placeholder="Enter service unit"
              className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="price"
              className="text-right text-gray-600 dark:text-gray-300"
            >
              Price Per Unit
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter service price"
              className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400 dark:focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
          >
            Save Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewServiceModal;
