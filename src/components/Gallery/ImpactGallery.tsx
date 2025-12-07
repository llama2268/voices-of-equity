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
        <div className="space-y-16">
            {items.map((item, index) => (
                <Section
                    key={index}
                    title={index === 0 ? "Our Community in Action" : undefined} // Only show main title for first item, or handle differently
                    className="border-b last:border-0 border-gray-100 pb-12 last:pb-0"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
                            {/* Text Content */}
                            <div className="w-full md:w-1/3 flex-shrink-0 sticky top-24">
                                <h3 className="text-2xl font-bold text-[#498B86] mb-4">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-1 bg-[#E4826D] mb-6 rounded-full" />
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Images Grid */}
                            <div className="w-full md:w-2/3">
                                <div className={`grid gap-4 ${item.images.length === 1 ? 'grid-cols-1' :
                                        item.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                                            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                                    }`}>
                                    {item.images.map((image, i) => (
                                        <div
                                            key={i}
                                            className={`relative rounded-xl overflow-hidden shadow-sm group ${item.images.length === 3 && i === 0 ? 'sm:col-span-2 aspect-[2/1]' :
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
                    </div>
                </Section>
            ))}
        </div>
    );
}
