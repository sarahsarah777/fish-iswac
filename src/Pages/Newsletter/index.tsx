import { Collapse } from 'antd'
import { newsletters } from './data'
import styles from '../Pages.module.css'

export const Newsletter = (): JSX.Element => {

    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Newsletter</div>
            <Collapse items={newsletters}/>
        </div>
    )
}