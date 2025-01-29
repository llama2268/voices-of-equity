interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative mt-12 mb-12">
      {/* Line running through timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#607AD4]/20"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={event.year} className={`relative flex items-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}>
            {/* Year bubble */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#607AD4] text-white flex items-center justify-center font-bold z-10">
              {event.year}
            </div>
            
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
              <h3 className="text-xl font-bold text-[#607AD4] mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
            
            {/* Empty space for the other side */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 