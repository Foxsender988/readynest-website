"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoWithFallbackProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Rendered instead of the image if the file is missing or fails to load. */
  fallback: React.ReactNode;
}

// Fills its (relatively positioned) parent. Falls back gracefully while photo files
// haven't been dropped into /public/images yet.
export default function PhotoWithFallback({
  src,
  alt,
  sizes,
  className = "",
  priority,
  fallback,
}: PhotoWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
