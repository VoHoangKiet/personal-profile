import { Image } from "antd";

interface ProfileAvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function ProfileAvatar({
  src,
  alt = "avatar",
  size = 160,
}: ProfileAvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      preview={false}
      className="!w-40 !h-40 rounded-full mx-auto mb-4 object-cover"
      style={{ width: size, height: size }}
    />
  );
}
