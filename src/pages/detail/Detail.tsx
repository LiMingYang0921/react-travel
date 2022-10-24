import React from "react"
import { useParams } from 'react-router-dom'


export const Detail: React.FC = () => {
  let params = useParams<'touristRouteId'>()
  return <h1>旅游路线详情页面，{params.touristRouteId}</h1>
}