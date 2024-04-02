import styles from '../Pages.module.css'

interface IswacContactInfoProps {
    name: string
    years: number
  }
  
export const IswacBoardMember = ({name, years}: IswacContactInfoProps): JSX.Element => {
    return (
        <div>
            {name} {years}
        </div>
    )
}