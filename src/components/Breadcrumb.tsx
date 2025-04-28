
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    link?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-alencar-blue"
          >
            <Home className="w-4 h-4 mr-2" />
            Início
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.link ? (
              <Link
                to={item.link}
                className="ml-1 md:ml-2 text-sm font-medium text-gray-700 hover:text-alencar-blue"
              >
                {item.label}
              </Link>
            ) : (
              <span className="ml-1 md:ml-2 text-sm font-medium text-gray-500">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
