import { useNavigate, useLocation } from 'react-router-dom';

export default function NavigationFooter() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 mt-8">
      <ul className="list-none p-0 m-0 flex flex-row gap-4">
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://github.com', '_blank'); }}>GitHub</li>
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://behance.net', '_blank'); }}>Behance</li>
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://linkedin.com', '_blank'); }}>LinkedIn</li>
      </ul>
    </div>
  );
}
