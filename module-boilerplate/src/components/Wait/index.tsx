import React, { Suspense } from 'react';

/**
 * Wait component.
 *
 * @param Component The component lazy loaded
 */
const WaitComponent = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default WaitComponent;
