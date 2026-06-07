import Image from 'next/image'

export default function SEOImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  caption = '',
}) {
  return (
    <figure className={`overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto w-full object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
