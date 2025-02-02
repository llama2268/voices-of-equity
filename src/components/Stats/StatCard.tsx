interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-all">
      <dt className="text-sm font-medium text-primary-600 uppercase tracking-wide">{label}</dt>
      <dd className="mt-2 text-4xl font-bold text-gray-900">
        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {value}
        </span>
      </dd>
      {description && (
        <p className="mt-4 text-base text-gray-600 group-hover:text-secondary-700 transition-colors">{description}</p>
      )}
    </div>
  );
};

export default StatCard; 