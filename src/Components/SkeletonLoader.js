import React from "react";

export function SkeletonLoader() {
  return (
    <div className="animate-pulse" style={{ width: "100vw", height: "100vh" }}>
      <div className="h-full bg-[#0A4840] rounded-lg mt-4"></div>
    </div>
  );
}
