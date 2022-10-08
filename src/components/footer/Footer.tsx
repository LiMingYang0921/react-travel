import React from "react";
import styles from './Footer.module.css'
import { Layout } from 'antd'

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <h3 className={styles.footer}>版权所有 @ react 旅游网</h3>
    </Layout.Footer>
  )
}