import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin } from 'antd'
import styles from './Detail.module.css'
import { Header, Footer } from '../../components'
import { log } from "console"


export const Detail: React.FC = () => {
  const { touristRouteId } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log(123);

    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)
        console.log('data', data);

        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.log(456);

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