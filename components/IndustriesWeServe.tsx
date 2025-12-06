import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import IndustryCard from './industry-card';

type Industry = {
  title: string;
  image: string;
  alt: string;
  slug: string;
  size: 'small' | 'large';
  priority?: boolean;
};

const industries: Industry[] = [
  {
    title: 'CAFE FURNITURE',
    image: '/industries/cafe.jpeg',
    alt: 'Modern cafe interior with orange couch',
    slug: 'cafe',
    size: 'small',
  },
  {
    title: 'HOTEL FURNITURE',
    image: '/industries/hotel.jpeg',
    alt: 'Elegant hotel dining area',
    slug: 'hotel',
    size: 'small',
  },
  {
    title: 'RESTAURANT FURNITURE',
    image: '/industries/restraunt.jpeg',
    alt: 'Contemporary restaurant interior',
    slug: 'restaurant',
    size: 'large',
    priority: true,
  },
  {
    title: 'BAR FURNITURE',
    image: '/industries/bar.jpeg',
    alt: 'Stylish bar interior',
    slug: 'bar',
    size: 'small',
  },
  {
    title: 'OUTDOOR FURNITURE',
    image: '/industries/outdoor.jpeg',
    alt: 'Rooftop outdoor furniture setting',
    slug: 'outdoor',
    size: 'small',
  },
];

/**
 * Describes how many cards appear per row.
 * Order matters.
 */
const layout: Array<Array<'small' | 'large'>> = [
  ['small', 'small'],
  ['large'],
  ['small', 'small'],
];

const IndustriesWeServe = () => {
  let index = 0;

  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-[font-2] text-blue-800 tracking-wide">
            INDUSTRIES WE SERVE
          </h2>

          <Link
            href="/industries"
            className="flex items-center text-sm font-[font-1] text-blue-600 hover:text-blue-700"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {layout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={row.length > 1 ? 'grid grid-cols-2 gap-4' : ''}
            >
              {row.map(() => {
                const industry = industries[index];

                if (!industry) return null;

                index += 1;

                return (
                  <IndustryCard
                    key={industry.slug}
                    title={industry.title}
                    image={industry.image}
                    alt={industry.alt}
                    slug={industry.slug}
                    size={industry.size}
                    priority={industry.priority}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
