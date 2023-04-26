import React from 'react'
import { useParams } from 'react-router-dom'

export const Detail: React.FC = () => {
  const params = useParams<'touristRouteId'>()
  return <h1>{params.touristRouteId}</h1>
}