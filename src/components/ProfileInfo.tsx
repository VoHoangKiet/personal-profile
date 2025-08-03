import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface ProfileInfoProps {
  name: string;
  description: string;
}

export default function ProfileInfo({ name, description }: ProfileInfoProps) {
  return (
    <>
      <Title level={4}>{name}</Title>
      <Paragraph className="text-gray-600 mb-4">{description}</Paragraph>
    </>
  );
} 