import React from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Index: React.FC = () => {
  const navigate = useNavigate()

  function toLoginPage() {
    navigate('/login')
  }

  return (
    <>
      <div>首页</div>
      <Button type="primary" onClick={toLoginPage}>跳转到登录页面</Button>
    </>
  )
}

export default Index;