"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent" />
      <span className="ml-3 text-sm text-gray-500">Loading...</span>
    </div>
  );
};

export default Loading;
