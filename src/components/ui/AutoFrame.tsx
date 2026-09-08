'use client';

import { useEffect, useState } from 'react';

/**
 * An iframe that grows to fit its document.
 *
 * The framed page posts `{ type: 'voe-form-height', height }` whenever its
 * size changes (see public/forms/*.html); we mirror that height here so the
 * reader gets one page scroll rather than a scrollbar inside a scrollbar.
 */
export default function AutoFrame({
  src,
  title,
  minHeight = 900,
}: {
  src: string;
  title: string;
  minHeight?: number;
}) {
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; height?: number } | null;
      if (data?.type === 'voe-form-height' && typeof data.height === 'number' && data.height > 0) {
        setHeight(Math.max(minHeight, Math.ceil(data.height)));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [minHeight]);

  return (
    <iframe
      src={src}
      title={title}
      className="block w-full border-0"
      style={{ height }}
      scrolling="no"
    />
  );
}
