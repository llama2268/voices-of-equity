interface GoogleFormEmbedProps {
  formUrl: string;
  title: string;
  height?: string;
}

export function GoogleFormEmbed({ formUrl, title, height = "1000px" }: GoogleFormEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-sm">
      <iframe
        src={formUrl}
        title={title}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading form...
      </iframe>
    </div>
  );
} 