import { Col, Row } from 'antd'
import { ImageCarousel } from './ImageCarousel'
import styles from '../Pages.module.css'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export const Home = (): JSX.Element => {

    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Inland Saltwater Anglers Club</div>
            <Row gutter={[16, 16]} style={{marginBottom: '20px'}}>
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
            <FullCalendar
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                googleCalendarApiKey='AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc'
                eventSources={[
                    { googleCalendarId: 'fishiswac@gmail.com'}
                ]}
            />
        </div>
    )
}