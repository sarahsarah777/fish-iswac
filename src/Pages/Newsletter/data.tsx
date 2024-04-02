import { type CollapseProps, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

interface DownloadNewsletterButtonProps {
  month: string
  link: string
  active?: boolean
}

const DownloadNewsletterButton = ({month, link, active}: DownloadNewsletterButtonProps): JSX.Element => {
  return (
    <>{active
      ? <a href={require(`../../docs/${link}.pdf`)} download={link} target='_blank' rel="noreferrer">
        <Button style={{margin: '7px 15px 7px 0'}} type='primary' icon={<DownloadOutlined />}>{month}</Button>
      </a>
      : <Button disabled style={{margin: '7px 15px 7px 0'}} type='primary' icon={<DownloadOutlined />}>{month}</Button>
      }
    </>
  )
}

interface NewsletterDataProps {
  year: number
  jan?: boolean
  feb?: boolean
  mar?: boolean
  apr?: boolean
  may?: boolean
  jun?: boolean
  jul?: boolean
  aug?: boolean
  sep?: boolean
  oct?: boolean
  nov?: boolean
  dec?: boolean
}

const NewsletterData = ({
  year,
  jan = false,
  feb = false,
  mar = false,
  apr = false,
  may = false,
  jun = false,
  jul = false,
  aug = false,
  sep = false,
  oct = false,
  nov = false,
  dec = false,
}: NewsletterDataProps): JSX.Element => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <DownloadNewsletterButton month={'January'} link={`Jan${year}`} active={jan}/>
      <DownloadNewsletterButton month={'February'} link={`Feb${year}`} active={feb}/>
      <DownloadNewsletterButton month={'March'} link={`Mar${year}`} active={mar}/>
      <DownloadNewsletterButton month={'April'} link={`Apr${year}`}active={apr}/>
      <DownloadNewsletterButton month={'May'} link={`May${year}`}active={may}/>
      <DownloadNewsletterButton month={'June'} link={`Jun${year}`} active={jun}/>
      <DownloadNewsletterButton month={'July'} link={`Jul${year}`} active={jul}/>
      <DownloadNewsletterButton month={'August'} link={`Aug${year}`} active={aug}/>
      <DownloadNewsletterButton month={'September'} link={`Sep${year}`} active={sep}/>
      <DownloadNewsletterButton month={'October'} link={`Oct${year}`} active={oct}/>
      <DownloadNewsletterButton month={'November'} link={`Nov${year}`} active={nov}/>
      <DownloadNewsletterButton month={'December'} link={`Dec${year}`} active={dec}/>
    </div>
  )
}

export const newsletters: CollapseProps['items'] = [
  {
    key: '2024',
    label: '2024',
    children: <NewsletterData year={2024} jan feb/>,
  }, {
    key: '2023',
    label: '2023',
    children: <NewsletterData year={2023} feb mar apr may jun jul aug sep oct nov dec/>,
  }, {
    key: '2022',
    label: '2022',
    children: <NewsletterData year={2022} feb mar apr jun jul aug sep oct nov dec/>,
  }, {
    key: '2021',
    label: '2021',
    children: <NewsletterData year={2021}/>,
  },{
    key: '2020',
    label: '2020',
    children: <NewsletterData year={2020} jan/>,
  }, {
    key: '2019',
    label: '2019',
    children: <NewsletterData year={2019} sep oct nov/>,
  }, {
    key: '2018',
    label: '2018',
    children: <NewsletterData year={2018} jul aug sep oct/>,
  },
]
