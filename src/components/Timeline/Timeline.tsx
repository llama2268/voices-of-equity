interface TimelineEvent {
  year: string | number;  // Allow both string and number
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm">
              <div className="font-serif text-primary-600 mb-2">{event.year}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
} 