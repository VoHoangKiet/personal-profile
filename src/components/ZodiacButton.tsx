import { Button } from "antd";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { delay } from "../utils/delay";

export default function ZodiacButton() {
  const navigate = useNavigate();

  const handleZodiacClick = async () => {
    await delay(800);
    navigate('/zodiac');
  };

  return (
    <Button
      block
      size="large"
      icon={<FaStar className="text-indigo-600" />}
      className="btn-zodiac justify-start"
      onClick={handleZodiacClick}
    >
      Zodiac
    </Button>
  );
} 