"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function MyPage() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="bg-green-200 h-screen">
      <h1 className="text-4xl font-bold text-center p-4">Map Component</h1>
      <Map />
    </div>
  );
}
