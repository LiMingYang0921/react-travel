import React from "react";
import { Image, Typography } from "antd";

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
  return (
    <>
      <Image src={imageSrc} height={size === "large" ? 285 : 240} width={size === "large" ? 490 : 240} preview={false} style={{ cursor: 'pointer' }} />
      <div>
        <Typography.Text type="secondary">
          {title.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </>
  );
} 