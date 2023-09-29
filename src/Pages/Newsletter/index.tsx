import { Collapse, Typography } from 'antd'
import { headerTextColor } from '../../App'
import { newsletters } from './data'
import styles from '../Pages.module.css'

const { Title } = Typography;

export const Newsletter = (): JSX.Element => {

    return (
        <div className={styles.pagePadding}>
            <Title style={{color: headerTextColor}}>Newsletter</Title>
            <Collapse items={newsletters}/>
        </div>
    )
}