'use client';

import Image from 'next/image';
import { Section } from '@/components/ui/Section';

interface GalleryItem {
    title: string;
    description: string;
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
}

export function ImpactGallery({ items }: { items: GalleryItem[] }) {
    return (
        <Section
            title="Our Community in Action"
            subtitle="Impact"
        >
            <div className="max-w-6xl mx-auto space-y-24">
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        >
                            <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-medium">
                                    {String(index + 1).padStart(2, '0')}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold font-display text-[#171219] mb-4">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-px bg-gray-300 mb-6" />
                                <p className="text-[#4A5568] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className={`grid gap-4 ${item.images.length === 1 ? 'grid-cols-1' :
                                    item.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                                        'grid-cols-1 sm:grid-cols-2'
                                    }`}>
                                    {item.images.map((image, i) => (
                                        <div
                                            key={i}
                                            className={`relative rounded-lg overflow-hidden ${
                                                item.images.length === 3 && i === 0 ? 'sm:col-span-2 aspect-[2/1]' :
                                                item.images.length === 1 ? 'aspect-[16/9]' : 'aspect-square'
                                            }`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {image.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                                                    <p className="text-white text-sm">{image.caption}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
