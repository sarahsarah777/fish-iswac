import { Carousel } from 'antd'
import styles from '../Pages.module.css'

export const ImageCarousel = (): JSX.Element => {
    return (
        <div className={styles.carouselStyle}>
            <Carousel autoplay effect='fade' style={{width: '300px'}}>
                {[1,2,3,4].map(p => (
                    <div>
                        <img src={require(`../../images/img00${p}.jpeg`)} alt='iswac' style={{width: '300px'}}/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}