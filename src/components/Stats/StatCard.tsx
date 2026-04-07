interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => {
  return (
    <div className="text-center py-6">
      <dt className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{label}</dt>
      <dd className="text-4xl font-bold font-display text-[#587FDA]">
        {value}
      </dd>
      {description && (
        <p className="mt-3 text-sm text-[#4A5568]">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
