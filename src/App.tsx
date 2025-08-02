import { Button, Card, Image, Space, Typography } from "antd";
import { FaThreads, FaInstagram, FaFacebookF } from "react-icons/fa6";

const { Title, Paragraph } = Typography;
export default function ProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md text-center p-6 rounded-2xl shadow-xl bg-white">
        <Image
          src="/images/profile1.jpg"
          alt="avatar"
          preview={false}
          className="!w-40 !h-40 rounded-full mx-auto mb-4 object-cover"
        />
        <Title level={4}>Võ Hồng Nhã Uyên </Title>

        <Paragraph className="text-gray-600 mb-4">
          Đại học Y Dược Huế - Ngành Y học cổ truyền
        </Paragraph>

        <Space className="!mt-6 flex" direction="vertical">
          <Button
            block
            size="large"
            icon={<FaFacebookF className="text-blue-600" />}
            className="justify-start"
          >
            Facebook
          </Button>
          <Button
            block
            size="large"
            icon={<FaInstagram className="text-pink-500" />}
            className="justify-start"
          >
            Instagram
          </Button>
          <Button
            block
            size="large"
            icon={<FaThreads className="text-black" />}
            className="justify-start"
          >
            Threads
          </Button>
        </Space>
      </Card>
    </div>
  );
}
