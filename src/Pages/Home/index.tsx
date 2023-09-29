import { Col, Row, Typography } from 'antd'
import { headerTextColor } from '../../App'
import { ImageCarousel } from './ImageCarousel'
import styles from '../Pages.module.css'

const { Title } = Typography;

export const Home = (): JSX.Element => {
    return (
        <div className={styles.pagePadding}>
            <Title style={{color: headerTextColor}}>Inland Saltwater Anglers Club</Title>
            <Row gutter={[16, 16]}>
                <Col md={24} lg={12} style={{paddingRight: '40px', marginBottom: '40px'}}>
                    <div>The Inland Saltwater Anglers Club was founded in 1990 by a group of like minded individuals who simply liked to go fishing.</div>
                    <br/>
                    <div>Over the past 25 years, ISWAC has grown into a well established, conservation minded fishing club boasting an annual membership of 100 active members.</div>
                    <br/>
                    <div>While our main focus is fishing the local waters of Southern California and Baja Mexico, our members often band together and travel to fishing destinations world wide.</div>
                </Col>
                <Col md={24} lg={12} style={{width: '100%'}}>
                    <ImageCarousel/>
                </Col>
            </Row>
        </div>
    )
}