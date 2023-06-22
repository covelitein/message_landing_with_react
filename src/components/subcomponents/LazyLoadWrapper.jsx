import React, { lazy, Suspense } from "react";

const LazyLoadWrapper = ({ componentPath, fallback, className }) => {
  const LazyComponent = lazy(() => import(componentPath));

  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        <LazyComponent />
      </div>
    </Suspense>
  );
};

export default LazyLoadWrapper;