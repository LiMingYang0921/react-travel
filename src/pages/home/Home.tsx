import React from 'react';
import styles from "./Home.module.css"
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import { withTranslation, WithTranslation } from "react-i18next";
import axios from 'axios'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store';
import { giveMeDataActionCreator } from '../../redux/recommendProducts/RecommendProductsACtions';

import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'


const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator())
    },

  }
}

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>


class HomeComponent extends React.Component<PropsType> {

  componentDidMount() {
    this.props.giveMeData()
  }

  render(): React.ReactNode {
    const { productList, loading, error } = this.props
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

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomeComponent));