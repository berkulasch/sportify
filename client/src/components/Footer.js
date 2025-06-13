import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t border-blue-200 mt-12">
      <div className="max-w-5xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 font-mono">
        <div className="text-lg font-bold tracking-wide text-blue-700">
          Sportify
        </div>
        <div className="flex gap-4 text-sm mt-4 md:mt-0">
          <a href="mailto:contact@sportify.com" className="hover:text-blue-500 transition">Contact: mailto:contact@sportify.com</a>
        </div>
        <div className="mt-4 md:mt-0 text-xs text-gray-400">
          © {new Date().getFullYear()} Sportify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
