import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin, Row, Col, DatePicker } from 'antd'
import styles from './Detail.module.css'
import { Header, Footer, ProductIntro } from '../../components'

const { RangePicker } = DatePicker;

export const Detail: React.FC = () => {
  const { touristRouteId } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)

        setProduct(data)
        setLoading(false)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'error')
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  if (loading) {
    return <Spin size="large" />
  }
  if (error) {
    return <div>网页出错</div>
  }
  return <>
    <Header />
    <div className={styles['page-content']}>
      <div className={styles['product-intro-container']}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures.map((p) => p.url)}
            />
          </Col>
          <Col span={11}>
            <RangePicker style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      <div className={styles['product-detail-anchor']}></div>
      <div id='feature' className={styles['product-detail-container']}></div>
      <div id='fees' className={styles['product-detail-container']}></div>
      <div id="notes" className={styles['product-detail-container']}></div>
      <div id="comments" className={styles['product-detail-container']}></div>
    </div>
    <Footer />
  </>
}