interface TimelineEvent {
  year: string | number;
  title: string;
  description: string;
  side: 'left' | 'right';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200" />

      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              event.side == 'left' ? 'justify-end md:justify-start' : 'justify-start md:justify-end'
            }`}
          >
            {event.title && event.description && (
              <div className="w-full md:w-5/12 p-6">
                <div className="text-sm font-medium text-[#587FDA] mb-2 font-display">{event.year}</div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-2">{event.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{event.description}</p>
              </div>
            )}

            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#587FDA] rounded-full flex items-center justify-center z-10">
              <span className="text-white text-xs font-bold font-display">{event.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
