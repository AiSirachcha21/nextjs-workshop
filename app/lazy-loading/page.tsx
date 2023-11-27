'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// import Fuse from 'fuse.js';
const names = ['Tim', 'Joe', 'Bel', 'Lee'];
const DynamicHeavyComponent = dynamic(() => import('../../components/HeavyComponent/HeavyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
const SayWelcome = dynamic(() => import('../../components/HeavyComponent/HeavyComponent').then(res => res.SayWelcome));

export default function Page() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <button onClick={() => setShowMore(!showMore)} className="bg-black text-white p-3">
        Toggle
      </button>
      {/* {showMore && <HeavyComponent />} */}
      {showMore && <DynamicHeavyComponent />}
      {/* <DynamicHeavyComponent /> */}

      {/* import external libraries on demand */}
      {/* <input
        type="text"
        placeholder="Search"
        onChange={async e => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default;
          const fuse = new Fuse(names);

          console.log(fuse.search(value));
        }}
      /> */}

      {/* Importing named exports */}
      {/* <SayWelcome /> */}
    </div>
  );
}
