import { Row, Col, Divider } from 'antd'
import { IswacContactInfo } from './IswacContactInfo'
import styles from '../Pages.module.css'
import { IswacBoardMember } from './IswacBoardMember';

const boardMembers = [{
    name: 'Eric Huizar',
    years: 3
},{
    name: 'Marty Levy',
    years: 3
},{
    name: 'Jim Padilla',
    years: 2
},{
    name: 'Steve Spenser',
    years: 2
},{
    name: 'Rob Provost',
    years: 1
},{
    name: 'Mario Flotte',
    years: 1
}]

export const Contact = (): JSX.Element => {
    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Contact</div>
            <Row gutter={[16, 16]}>
                <Col sm={24} md={12} lg={6} style={{width: '100%'}}>
                    <IswacContactInfo
                        position='ISWAC Club President'
                        name='Tom Fitzgerald'
                        number='(909) 996-5169'/>
                </Col>
                <Col sm={24} md={12} lg={6} style={{width: '100%'}}>
                    <IswacContactInfo
                        position='ISWAC Vice President / Secretary'
                        name='Rex Routt'
                        number='(714) 351-0335'/>
                </Col>
                <Col sm={24} md={12} lg={6} style={{width: '100%'}}>
                    <IswacContactInfo
                        position='ISWAC Club Treasurer/ Trips'
                        name='Steve Berczik'
                        number='(909) 224-0497'/>
                </Col>
                <Col sm={24} md={12} lg={6} style={{width: '100%'}}>
                    <IswacContactInfo
                        position='ISWAC Membership'
                        name='Art Richardson'
                        number=''/>
                </Col>
            </Row>
            <div className={styles.flexRowCenterContactInfoBold}>
                {boardMembers.map((p, i) => (
                    <>
                    {i !== 0 && <Divider type="vertical"/>}
                    <IswacBoardMember
                        key={`boardMember${i}`}
                        name={p.name}
                        years={p.years}/>
                        </>
                ))}
            </div>
        </div>
    )
}