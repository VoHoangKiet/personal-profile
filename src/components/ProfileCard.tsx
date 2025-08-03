import { Card } from "antd";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import SocialButtons from "./SocialButtons";

interface ProfileCardProps {
  avatarSrc: string;
  name: string;
  description: string;
  backgroundImage?: string;
  socialLinks?: any[];
}

export default function ProfileCard({
  avatarSrc,
  name,
  description,
  backgroundImage = "/images/background2.jpg",
  socialLinks
}: ProfileCardProps) {
  return (
    <div
      className="min-h-screen overflow-y-hidden flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <Card className="!w-full !max-w-md text-center p-6 !rounded-2xl !shadow-2xl !bg-white/20 !backdrop-blur-md !border !border-white/30">
        <ProfileAvatar src={avatarSrc} alt={name} />
        <ProfileInfo name={name} description={description} />
        <SocialButtons socialLinks={socialLinks} />
      </Card>
    </div>
  );
} 