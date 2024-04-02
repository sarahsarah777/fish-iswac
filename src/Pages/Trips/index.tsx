import { Button, Col, Collapse, Dropdown, MenuProps, Row, Table, Tag } from 'antd'
import { LinkOutlined, DownloadOutlined } from '@ant-design/icons'
import { TripInfo } from './data'
import MediaQuery from 'react-responsive'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import styles from '../Pages.module.css'

interface DataType {
    key: string;
    dates: string;
    boat: string;
    landing: string;
    meals: boolean;
    price: number;
    bunk?: string;
}

export const tripsData: DataType[] = [
    {
        key: '1',
        dates: 'February 16 - February 18',
        boat: 'Pacific Dawn',
        landing: `Fisherman's Landing`,
        meals: true,
        price: 560,
        bunk: 'pacificDawnBunkLayout',
    }, {
        key: '2',
        dates: 'March 31 - April 1',
        boat: 'Mirage',
        landing: `Channel Island`,
        meals: false,
        price: 270,
    }, {
        key: '3',
        dates: 'April 6 - April 10',
        boat: 'Rip Tide',
        landing: `Puerta Vallarta`,
        meals: true,
        price: 1460
    }, {
        key: '4',
        dates: 'May 10 - May 11',
        boat: 'Pacific Dawn',
        landing: `Fisherman's Landing`,
        meals: false,
        price: 340,
        bunk: 'pacificDawnBunkLayout',
    }, {
        key: '5',
        dates: 'May 31 - June 1',
        boat: 'El Dorado',
        landing: `Long Beach`,
        meals: false,
        price: 320,
        bunk: 'elDoradoBunkLayout',
    }, {
        key: '6',
        dates: 'June 26 - July 1',
        boat: 'Apollo',
        landing: `22nd Street`,
        meals: false,
        price: 550,
        bunk: 'apolloBunkLayout',
    }, {
        key: '7',
        dates: 'July 19 - July 21',
        boat: 'Pacific Dawn',
        landing: `Fisherman's Landing`,
        meals: true,
        price: 590,
        bunk: 'pacificDawnBunkLayout',
    }, {
        key: '8',
        dates: 'August 10',
        boat: '-',
        landing: `Dana Wharf`,
        meals: false,
        price: 0
    }, {
        key: '9',
        dates: 'September 14 - September 16',
        boat: 'Apollo',
        landing: `Seaforth`,
        meals: false,
        price: 655,
        bunk: 'apolloBunkLayout',
    }, {
        key: '10',
        dates: 'October 4 - October 6',
        boat: 'Pacific Dawn',
        landing: `Fisherman's Landing`,
        meals: true,
        price: 710,
        bunk: 'pacificDawnBunkLayout',
    }, {
        key: '11',
        dates: 'November 9 - November 11',
        boat: 'Pacific Dawn',
        landing: `Fisherman's Landing`,
        meals: true,
        price: 565,
        bunk: 'pacificDawnBunkLayout',
    }, {
        key: '12',
        dates: 'December 7',
        boat: 'Spitfire',
        landing: `Marina Del Rey`,
        meals: false,
        price: 65
    },
]

export const Trips = (): JSX.Element => {

    const [trips, setTrips] = useState<ItemType[]>([])

    useEffect(() => {
         // @ts-ignore
        const tripCollapse = []
        tripsData.forEach((p, i) => {
            tripCollapse.push({
                key: `tripCollapse${i}`,
                label: p.dates,
                children: <TripInfo
                  boat={p.boat}
                  landing={p.landing}
                  meals={p.meals}
                  price={p.price}
                  bunk={p.bunk}/>
            })
             // @ts-ignore
            setTrips(tripCollapse)
        })
    }, [])

   

    const columns: ColumnsType<DataType> = [
        {
            title: 'Dates',
            dataIndex: 'dates',
            key: 'dates',
            fixed: 'left',
            width: '210px',
            sorter: (a, b) => a.key > b.key ? 1 : -1,
            render: (text) => <>{text}</>,
        }, {
            title: 'Boat',
            dataIndex: 'boat',
            key: 'boat',
            render: (boat, rec) => <> {rec.bunk === undefined ? <span>{boat}</span> : <a href={require(`../../docs/${rec.bunk}.pdf`)} download={rec.bunk} target='_blank' rel="noreferrer"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>{boat} <img src={require(`../../images/bunks.png`)} alt='bunks' style={{height: '25px', marginLeft: '10px'}}/></div></a>}</>,
        }, {
            title: 'Landing',
            dataIndex: 'landing',
            key: 'landing',
        }, {
            title: 'Meals',
            dataIndex: 'meals',
            key: 'meals',
            filters: [
                {
                  text: 'Included',
                  value: true,
                },
                {
                  text: 'Not Included',
                  value: false,
                },
              ],
            onFilter: (value, record) => record.meals === value,
            render: (meals) => <>{meals ? <Tag color="blue">Included</Tag>:<Tag>Not Included</Tag>}</>,
        }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            sorter: (a, b) => a.price > b.price ? 1 : -1,
            render: (price) => <>{price !== 0 ? <span>${price}</span> : <span>-</span>}</>,
        }
    ]

    const items: MenuProps['items'] = [
        {
            label: 'Availability',
            key: 'availability',
            icon: <LinkOutlined />,
            onClick: () => window.open('https://docs.google.com/spreadsheets/d/12kKo1-8hInv03zW_ieV6GkwS-yqsxcHp9flhf-hzOf4/edit?usp=sharing', "_blank")
        },
        {
            label: 'Fisherman of the Year',
            key: 'fishermanOfTheYear',
            icon: <LinkOutlined />,
            onClick: () => window.open('https://docs.google.com/spreadsheets/d/1X2gyUAFfpsHTR6XemqsmnxVnG3VtT2521Z-6wGd8yK8/edit?usp=sharing', "_blank")
        },
        {
            label: 'Trips PDF',
            key: 'tripsPdf',
            icon: <DownloadOutlined />,
            onClick: () => window.open(require('../../docs/Trips2024.pdf'), "_blank")
        },
    ]

    return (
        <div className={styles.pagePadding}>
            <div className={styles.flexRowCenterSpaceBetween}>
                <Row className={styles.width100}>
                    <Col sm={24} md={12} lg={12}>
                        <div className={styles.titleText}>Trips 2024</div>
                    </Col>
                    <Col sm={24} md={12} lg={12} className={styles.flexRowEnd}>
                        <div>
                            <Dropdown menu={{items}} placement="bottomRight">
                                <Button type='primary' icon={<LinkOutlined />}>Trips Info</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
            <MediaQuery maxWidth={700}>
                {/* @ts-ignore */}
                <Collapse items={trips} style={{marginTop: '10px'}}/>
            </MediaQuery>
            <MediaQuery minWidth={701}>
                <Table columns={columns} dataSource={tripsData} pagination={false}/>
            </MediaQuery>
        </div>
    )
}