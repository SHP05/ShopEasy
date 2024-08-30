// import { FC } from 'react';

// interface HeadingProps {
//   ShopName: string;
// }

// const Heading: FC<HeadingProps> = ({ ShopName }) => {
//   function SearchIcon() {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="11" cy="11" r="8" />
//         <path d="m21 21-4.3-4.3" />
//       </svg>
//     );
//   }

//   function StoreIcon() {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
//         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//         <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
//         <path d="M2 7h20" />
//         <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
//       </svg>
//     );
//   }
//   return (
//     <div className="flex items-center justify-between px-6 py-4 border border-gray-300 dark:border-gray-50 dark:bg-black rounded-lg mr-2">
//       <div className="flex items-center gap-4">
//         <StoreIcon />
//         <h1 className="text-2xl font-bold dark:text-slate-500">{ShopName}</h1>
//       </div>
//       <div className="flex items-center gap-4 relative flex-1 max-w-md">
//         <input
//           type="search"
//           placeholder="Search Services..."
//           className="w-full rounded-md p-4 border border-input bg-background pl-10 pr-4 py-2 text-lg focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
//         />
//         <SearchIcon />
//       </div>
//     </div>
//   );
// };

// export default Heading;

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/mB8M6IBsIee
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */

import { FC } from 'react';

interface HeadingProps {
  ShopName: string;
}

const Heading: FC<HeadingProps> = ({ ShopName }) => {
  function SearchIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700 dark:text-gray-300"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }

  function StoreIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700 dark:text-gray-300"
      >
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        <path d="M2 7h20" />
        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
      </svg>
    );
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 border border-gray-300 dark:border-gray-700 bg-slate-300 dark:bg-gray-900 rounded-lg mr-2">
      <div className="flex items-center gap-4">
        <StoreIcon />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          {ShopName}
        </h1>
      </div>
      <div className="flex items-center gap-4 relative flex-1 max-w-md">
        <input
          type="search"
          placeholder="Search Services..."
          className="w-full rounded-md p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 pl-10 pr-4 py-2 focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Heading;
