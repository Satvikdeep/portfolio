import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type AssetSlotProps = {
  src: string;
  alt: string;
  label: string;
  note?: string;
  className?: string;
  priority?: boolean;
};

function publicAssetExists(src: string) {
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
  return fs.existsSync(path.join(process.cwd(), "public", cleanSrc));
}

export default function AssetSlot({
  src,
  alt,
  label,
  note = "image needed",
  className = "",
  priority = false,
}: AssetSlotProps) {
  const hasAsset = publicAssetExists(src);

  return (
    <div className={`asset-slot ${className}`} data-has-asset={hasAsset}>
      {hasAsset ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      ) : (
        <div className="asset-slot__empty">
          <span>{note}</span>
          <strong>{label}</strong>
          <small>{src}</small>
        </div>
      )}
    </div>
  );
}
