import Image from 'next/image'

export default function SEOImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
}) {
  return (
    <figure className={`overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto w-full object-cover"
      />
    </figure>
  )
}
