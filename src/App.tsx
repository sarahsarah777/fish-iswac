
import { useState } from 'react'
import { Layout, Menu, ConfigProvider } from 'antd'
import { Home } from './Pages/Home'
import { Trips } from './Pages/Trips'
import { Meetings } from './Pages/Meetings'
import { Banquet } from './Pages/Banquet'
import { Gallery } from './Pages/Gallery'
import { Newsletter } from './Pages/Newsletter'
import { Membership } from './Pages/Membership'
import { Contact } from './Pages/Contact'
import { AppFooter } from './AppFooter'
import type { MenuProps } from 'antd'
import './App.css'

const { Header, Content } = Layout

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  }, {
    label: 'Trips',
    key: 'trips',
  }, {
    label: 'Meetings',
    key: 'meetings',
  }, {
  //   label: 'Banquet',
  //   key: 'banquet',
  // }, {
    label: 'Gallery',
    key: 'gallery',
  }, {
    label: 'Newsletter',
    key: 'newsletter',
  }, {
    label: 'Membership',
    key: 'membership',
  }, {
    label: 'Contact',
    key: 'contact',
  },
]

export const primaryColor = '#333759'
export const headerTextColor = '#001628'

function App() {
  const [current, setCurrent] = useState('home')

  function PageView(): JSX.Element {
    switch (current) {
      case 'home':
        return <Home/>
      case 'trips':
        return <Trips/>
      case 'meetings':
        return <Meetings/>
      case 'banquet':
        return <Banquet/>
      case 'gallery':
        return <Gallery/>
      case 'newsletter':
        return <Newsletter/>
      case 'membership':
        return <Membership/>
      case 'contact':
        return <Contact/>
      default:
        return <Home/>
    }
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
    <>
      <img src={require('./images/header.jpeg')} alt='iswac' className='header-image'/>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Menu
            style={{width: '100%'}}
            theme='dark'
            mode='horizontal'
            selectedKeys={[current]}
            onClick={onClick}
            items={items}
          />
        </Header>
        <Content style={{ padding: '50px 50px 0 50px' }}>
          <div style={{ background: 'white' }}>
            <PageView/>
          </div>
        </Content>
        <AppFooter/>
      </Layout>
    </>
  </ConfigProvider>
  )
}

export default App
