import { useEffect, useState } from 'react'
import styles from '../Pages.module.css'

export const Gallery = (): JSX.Element => {
    
    const [images, setImages] = useState<string[]>([])
    
    useEffect(() => {
        let imageCount = 27
        const imageArr = []
        for (let i = 1; i <= imageCount; i++) {
            if (i < 10) {
                imageArr.push(`00${i}`)
            } else if (i < 100) {
                imageArr.push(`0${i}`)
            } else {
                imageArr.push(i.toString())
            }
        }
        setImages(imageArr)
    }, [])

    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Gallery</div>
            <div className={styles.flexRowCenterWrap100}>
                {images.map(p => (
                    <img key={`img${p}`} src={require(`../../images/img${p}.jpeg`)} alt={`img${p}`} className={styles.imageStyle}/>
                ))}
            </div>
        </div>
    )
}