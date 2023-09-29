import { Button, Calendar, Col, Collapse, Divider, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { headerTextColor } from '../../App'
import { trips } from './data'
import styles from '../Pages.module.css'

const { Title } = Typography


export const Trips = (): JSX.Element => {

    return (
        <div className={styles.pagePadding}>
            <div className={styles.flexRowCenterSpaceBetween}>
                <Row className={styles.width100}>
                    <Col sm={24} md={12} lg={12}>
                        <Title style={{color: headerTextColor}}>Trips 2023</Title>
                    </Col>
                    <Col sm={24} md={12} lg={12} className={styles.flexRowEnd}>
                        <a href={require('../../docs/Trips2023.pdf')} download='Trips 2023' target='_blank' rel="noreferrer">
                            <Button type='primary' icon={<DownloadOutlined />}>Download PDF</Button>
                        </a>
                    </Col>
                </Row>
            </div>
            <Collapse items={trips} style={{marginTop: '10px'}}/>
            {/* <Divider/>
            <Calendar fullscreen={false} /> */}
        </div>
    )
}