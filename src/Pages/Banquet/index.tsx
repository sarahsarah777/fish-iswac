import { Typography } from 'antd'
import { headerTextColor } from '../../App'
import styles from '../Pages.module.css'

const { Title } = Typography;

export const Banquet = (): JSX.Element => {
    return (
        <div className={styles.pagePadding}>
            <Title style={{color: headerTextColor}}>Banquet</Title>
        </div>
    )
}