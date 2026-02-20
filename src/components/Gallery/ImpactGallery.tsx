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
            subtitle="Programs, events, and moments that moved the mission forward"
            className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7FBFA] to-white"
        >
            <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#607AD4]/25 blur-3xl" />
            <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#498B86]/25 blur-3xl" />
            <div className="relative max-w-6xl mx-auto space-y-16">
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-3">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#498B86] mb-4">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#607AD4]/60 mb-4 rounded-full" />
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className={`grid gap-4 ${item.images.length === 1 ? 'grid-cols-1' :
                                    item.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                                        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                                    }`}>
                                    {item.images.map((image, i) => (
                                        <div
                                            key={i}
                                            className={`relative rounded-2xl overflow-hidden border border-[#607AD4]/15 bg-white shadow-sm group ${item.images.length === 3 && i === 0 ? 'sm:col-span-2 aspect-[2/1]' :
                                                item.images.length === 1 ? 'aspect-[16/9]' : 'aspect-square'
                                                }`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {image.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                                                    <p className="text-white text-sm font-medium">{image.caption}</p>
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
