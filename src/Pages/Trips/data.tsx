import { Statistic, type CollapseProps, Row, Col } from 'antd'

interface TripInfoProps {
  boat: string
  landing: string
  meals: boolean
  price: number
}

export const TripInfo = ({boat, landing, meals, price}: TripInfoProps): JSX.Element => {
  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Boat' value={boat} />
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Landing' value={landing} />
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Meals Included' value={meals ? 'Yes' : 'No'} />
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Price' value={`$${price}`} />
      </Col>
    </Row>
  )
}

export const trips: CollapseProps['items'] = [
  {
    key: '1',
    label: 'April 1 - April 2',
    children: <TripInfo
      boat={`Ranger 85`}
      landing={`Cisco's`}
      meals={false}
      price={310}/>,
  }, {
    key: '2',
    label: 'May 12 - May 13',
    children: <TripInfo
      boat={`Pacific Dawn`}
      landing={`Ventura`}
      meals={false}
      price={255}/>,
  }, {
    key: '3',
    label: 'June 2 - June 3',
    children: <TripInfo
      boat={`Pacific Dawn`}
      landing={`Cisco's`}
      meals={false}
      price={275}/>,
  }, {
    key: '4',
    label: 'July 21 - July 23',
    children: <TripInfo
      boat={`Relentless`}
      landing={`H&M Landing`}
      meals={false}
      price={475}/>,
  }, {
    key: '5',
    label: 'August 26 - August 28',
    children: <TripInfo
      boat={`Pacific Dawn`}
      landing={`Fisherman's`}
      meals={true}
      price={560}/>,
  }, {
    key: '6',
    label: 'October 6 - October 8',
    children: <TripInfo
      boat={`Pacific Dawn`}
      landing={`Fisherman's`}
      meals={true}
      price={560}/>,
  }, {
    key: '7',
    label: 'November 6 - November 8',
    children: <TripInfo
      boat={`Pacific Dawn`}
      landing={`Fisherman's`}
      meals={true}
      price={560}/>,
  }, {
    key: '8',
    label: 'December 6 - December 8',
    children: <TripInfo
      boat={`Spitfire`}
      landing={`Marina Del Rey`}
      meals={false}
      price={65}/>,
  },
]
