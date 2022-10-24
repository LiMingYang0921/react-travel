import React from 'react';
import styles from "./Home.module.css"
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
// import { productList1, productList2, productList3 } from './mockups'
import axios from 'axios'

import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'

interface State {
  loading: boolean,
  error: string | null
  productList: any[]
}

interface props { }


export class Home extends React.Component<props, State> {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      productList: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections')
      this.setState({
        loading: false,
        error: null,
        productList: data
      })
    } catch (error) {
      if (error instanceof Error) {
        this.setState({
          error: error.message,
          loading: false
        })
      }
    }

  }

  render(): React.ReactNode {
    const { productList, loading, error } = this.state
    if (loading) {
      return <Spin size="large" />
    }
    if (error) {
      return <div>错误：{error}</div>
    }
    return <>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title
              level={3}
              type="warning"
            >
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title
              level={3}
              type="danger"
            >
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title
              level={3}
              type="success"
            >
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
      </div>
      <Footer />
    </>
  }
}