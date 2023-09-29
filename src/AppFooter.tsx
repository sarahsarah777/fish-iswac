import { Layout, Divider } from 'antd'
import { FacebookFilled, MailFilled } from '@ant-design/icons'
import './App.css'

const { Footer } = Layout

export const AppFooter = (): JSX.Element => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <a href='https://www.facebook.com/FishISWAC/' target='_blank' rel='noreferrer'>
        <FacebookFilled style={{marginRight: '5px'}}/>
        Inland Saltwater Anglers Club
      </a>
      <Divider type='vertical'/>
      <a href='mailto:fishiswac@gmail.com'>
        <MailFilled style={{marginRight: '5px'}}/>
        fishiswac@gmail.com
      </a>
    </Footer>
  )
}
