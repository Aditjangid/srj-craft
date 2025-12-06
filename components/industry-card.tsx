import Image from 'next/image';
import Link from 'next/link';

type IndustryCardProps = {
  title: string;
  image: string;
  alt: string;
  slug: string;
  size?: 'small' | 'large';
  priority?: boolean;
};

const IndustryCard = ({
  title,
  image,
  alt,
  slug,
  size = 'small',
  priority = false,
}: IndustryCardProps) => {
  const isLarge = size === 'large';

  return (
    <Link
      href={`/industries/${slug}`}
      className={`relative group block overflow-hidden rounded-lg ${
        isLarge ? 'h-56' : 'h-40'
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={isLarge ? '100vw' : '50vw'}
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
        <h3
          className={`font-[font-2] tracking-wide ${
            isLarge ? 'text-lg mb-3' : 'text-sm mb-2'
          }`}
        >
          {title}
        </h3>

        <span
          className={`border border-white font-[font-1] tracking-wide transition hover:bg-white hover:text-black ${
            isLarge ? 'px-4 py-2 text-xs' : 'px-3 py-1 text-xs'
          }`}
        >
          VIEW MORE
        </span>
      </div>
    </Link>
  );
};

export default IndustryCard;
