import styles from '../Pages.module.css'

interface IswacContactInfoProps {
    position: string
    name: string
    number: string
  }
  
export const IswacContactInfo = ({position, name, number}: IswacContactInfoProps): JSX.Element => {
    return (
        <div className={styles.flexRowCenterContactInfo}>
            <b>{position}</b>
            <br/>
            <div>{name}</div>
            <br/>
            <div>{number}</div>
        </div>
    )
}