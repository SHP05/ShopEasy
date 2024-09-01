// import React, { useState } from 'react';
// import CreateNewServiceModal from '../ui/CreateNewServiceModal';

// export const Services = () => {
//   const [isCreateServiceModalVisible, setIsCreateServiceModalVisible] =
//     useState(false);

//   const ToggleCreateServiceModal = (val: boolean) => {
//     setIsCreateServiceModalVisible(val);
//   };
//   return (
//     <section className="w-full py-10 md:py-10 lg:py-10">
//       <div className="flex flex-col items-center gap-6 mx-16">
//         <div className="flex items-center justify-between w-full">
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
//               Our Services
//             </h2>
//           </div>
//           <button
//             onClick={() => setIsCreateServiceModalVisible(true)}
//             className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//           >
//             Create new Service
//           </button>
//         </div>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {/* Example service cards */}
//           <div className="bg-background rounded-lg shadow-xl bg-slate-300 overflow-hidden hover:scale-105 transition-transform duration-300">
//             <div className="p-6 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-medium">Web Design</h3>
//                 <p className="text-sm text-muted-foreground">Per Hour</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-2xl font-bold">$99</p>
//               </div>
//             </div>
//           </div>
//           {/* Add other service cards here */}
//         </div>
//       </div>
//       {isCreateServiceModalVisible && (
//         <CreateNewServiceModal toggleModal={ToggleCreateServiceModal} />
//       )}
//     </section>
//   );
// };

// export default Services;
import { useState } from 'react';
import CreateNewServiceModal from '../ui/CreateNewServiceModal';
import { useAllServices } from './useAllServices';

export const Services = () => {
  const [isCreateServiceModalVisible, setIsCreateServiceModalVisible] =
    useState(false);
  const id = 1;
  const { data } = useAllServices({ id });

  const handleOpenModal = () => {
    setIsCreateServiceModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsCreateServiceModalVisible(false);
  };

  return (
    <section className="w-full py-10 md:py-10 lg:py-10">
      <div className="flex flex-col items-center gap-6 mx-16">
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-gray-300">
              Our Services
            </h2>
          </div>
          <button
            onClick={handleOpenModal}
            className="inline-flex h-10 items-center justify-center rounded-md bg-black text-slate-300 px-8 text-lg font-medium shadow transition-colors hover:scale-95 hover:bg-slate-800 hover:text-white disabled:pointer-events-none"
          >
            Create new Service
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((item: getServicesDataType) => (
            <>
              <div className="rounded-lg shadow-xl min-w-60 bg-slate-300 dark:bg-gray-800 dark:text-gray-200 overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-gray-100">
                      {item.serviceName}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {item.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold dark:text-gray-100">
                      ${item.pricePerUnit}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <CreateNewServiceModal
        isVisible={isCreateServiceModalVisible}
        onClose={handleCloseModal}
      />
    </section>
  );
};
