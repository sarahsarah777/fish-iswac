import { Statistic, Row, Col } from 'antd'

interface TripInfoProps {
  boat: string
  landing: string
  meals: boolean
  price: number
  bunk?: string
}

export const TripInfo = ({boat, landing, meals, price, bunk}: TripInfoProps): JSX.Element => {
  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Boat' value={boat} />
        {bunk ? <a href={require(`../../docs/${bunk}.pdf`)} download={bunk} target='_blank' rel="noreferrer"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Click for bunk info<img src={require(`../../images/bunks.png`)} alt='bunks' style={{height: '25px', marginLeft: '10px'}}/></div></a> : <></>}
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Landing' value={landing} />
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Meals Included' value={meals ? 'Yes' : 'No'} />
      </Col>
      <Col sm={24} md={12} lg={6}>
        <Statistic title='Price' value={price!==0 ? `$${price}` : '-'} />
      </Col>
    </Row>
  )
}
