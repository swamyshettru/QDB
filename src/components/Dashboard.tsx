import React from 'react'
import {Button, Empty } from 'antd';
import { useHistory } from 'react-router';


const Dashboard = () => {
    const history = useHistory()
  return (

  <Empty
  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  description={
    <span>
      Please select options from the side menu &#128522;
    </span>
  }
  style={{height:'100vh'}}
>
  <Button type="primary" onClick={()=>history.push('/posts')}>Blogs</Button>
</Empty>
  )
}

export default Dashboard