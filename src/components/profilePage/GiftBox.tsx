import React, { useState } from 'react';
import { Modal } from 'antd';
import './GiftBox.css';

interface GiftBoxProps {
  className?: string;
}

const GiftBox: React.FC<GiftBoxProps> = ({ className = '' }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleGiftClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
      setIsModalVisible(true);
    }, 300);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        className={`gift-box ${isBouncing ? 'bounce' : ''} ${className} justify-center`}
        onClick={handleGiftClick}
      >
        <span className="register-icon"></span>
          Lời chúc của Kiệt nè
      </div>

      <Modal
        title={
          <div style={{ textAlign: 'center', color: '#ff6b9d' }}>
            🎉 Hép bi bớt đay! 🎉
          </div>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
        width={400}
        className="birthday-modal"
      >
        <div className="birthday-content">
          <div className="birthday-emoji">
            🎂🎈🌸
          </div>
          <h3 className="birthday-title">
            Nhã Uyên sinh nhật dui dẻ nho!
          </h3>
          <p className="birthday-message">
            Tuôi mới nhìu niềm vui hơn nhó, cũng hông biết là chúc cái gì xịn hơn, vì thấy cái gì cũng xịn hết rùi!
            <br/>
            Thoai thì xink gái thì càng xink gái hơn
            <br/>
            Học giỏi ròi thì càng giỏi hơn 
            <br/>
            ( cố gắng ra trường 3.2 gpa nhó )
            <br/>
            Iu đời hơn nè, khó khăn chi alo ta hẹ hẹ 🌟
            <br/>
            Hết ròi đó, nói chung là dị, chúc ngày của mi thật là ý nghĩa nhaaaa
          </p>
          <div className="birthday-footer-emoji">
            🎊✨🎊
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GiftBox; 