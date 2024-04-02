import { Col, Row, Typography } from 'antd'
import { headerTextColor } from '../../App'
import { Map } from './Map'
import styles from '../Pages.module.css'

const { Title } = Typography

// API Key = AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc
// API Key = AIzaSyCL-0rQ3OWtsXA89d_kdR9LMYBbSROf4MU

export const Meetings = (): JSX.Element => {
    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Meetings</div>
            <Row gutter={[16, 16]}>
                <Col md={24} lg={12}>
                    <Title level={3} style={{color: headerTextColor}}>Club Meetings</Title>
                    <div>The Inland Saltwater Anglers Club holds Monthly Club Meetings at Brandon's Diner, 370 N. Mountain Ave, Upland CA 91786 from 7:00 PM until 9:00 PM on the first Wednesday of every month. No meetings in March (our Annual Awards Banquet) or December.  Most members and guests start arriving around 6pm to join the group for dinner and look at the raffle table.  At every meeting we have a special guest speaker ranging from Television and Radio Personalities, Tackle Manufacturers, Boat Captains, Guides, Lodges, Resorts and Conservation Organizations.  At the end of every meeting, we have our monthly raffle, where members and guests can purchase raffle tickets to win fishing tackle, rod, reels and more.</div>
                    <Title level={3} style={{color: headerTextColor}}>Board Meetings</Title>
                    <div>The Inland Saltwater Anglers Club holds monthly Board Meetings are at Brandon's Diner located at 370 N. Mountain Ave, Upland CA 91786. Board meetings are closed to non-members. Only active members in good standing are allowed to attend.</div>
                </Col>
                <Col md={24} lg={12} style={{width: '100%'}}>
                    <Map/>
                </Col>
            </Row>
        </div>
    )
}