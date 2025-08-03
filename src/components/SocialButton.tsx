import { Button } from "antd";
import type { IconType } from "react-icons";

interface SocialButtonProps {
  icon: IconType;
  label: string;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
}

export default function SocialButton({ 
  icon: Icon, 
  label, 
  iconColor = "text-black",
  className = "justify-start",
  onClick 
}: SocialButtonProps) {
  return (
    <Button
      block
      size="large"
      icon={<Icon className={iconColor} />}
      className={className}
      onClick={onClick}
    >
      {label}
    </Button>
  );
} 