import { Space } from "antd";
import { FaThreads, FaInstagram, FaFacebookF } from "react-icons/fa6";
import SocialButton from "./SocialButton";
import { delay } from "../../utils/delay";

interface SocialLink {
  platform: string;
  icon: any;
  iconColor: string;
  className?: string;
  url?: string;
}

interface SocialButtonsProps {
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    icon: FaFacebookF,
    iconColor: "text-blue-600",
    className: "btn-facebook justify-start",
    url: "https://www.facebook.com/nhauyen.vohong.56"
  },
  {
    platform: "Instagram", 
    icon: FaInstagram,
    iconColor: "text-pink-500",
    className: "justify-start",
    url: "https://www.instagram.com/nhauyenvohong/"
  },
  {
    platform: "Threads",
    icon: FaThreads, 
    iconColor: "text-black",
    className: "justify-start",
    url: "https://www.threads.com/@nhauyenvohong"
  }
];

export default function SocialButtons({ socialLinks = defaultSocialLinks }: SocialButtonsProps) {
  const handleSocialClick = async (platform: string, url?: string) => {
    if (url) {
      await delay(800); // Wait 0.5 seconds
      window.open(url, '_blank');
    } else {
      console.log(`Navigate to ${platform}`);
    }
  };

  return (
    <Space className="!mt-6 flex w-full" direction="vertical">
      {/* <GiftBox /> */}
      {socialLinks.map((link) => (
        <SocialButton
          key={link.platform}
          icon={link.icon}
          label={link.platform}
          iconColor={link.iconColor}
          className={link.className}
          onClick={() => handleSocialClick(link.platform, link.url)}
        />
      ))}
      {/* <ZodiacButton /> */}
    </Space>
  );
} 