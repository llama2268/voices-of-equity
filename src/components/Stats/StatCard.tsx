interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => {
  return (
    <div className="px-6 py-8 bg-white rounded-none border-t-4 border-[#498B86] shadow-sm">
      <dt className="text-sm font-medium text-[#607AD4] uppercase tracking-wide">{label}</dt>
      <dd className="mt-2 text-4xl font-bold text-[#E4826D]">{value}</dd>
      {description && (
        <p className="mt-4 text-base text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default StatCard; 