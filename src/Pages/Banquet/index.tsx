import { useEffect, useState } from 'react'
import styles from '../Pages.module.css'

export const Banquet = (): JSX.Element => {
    const [images, setImages] = useState<string[]>([])
    
    useEffect(() => {
        let imageCount = 93
        const imageArr = []
        for (let i = 60; i <= imageCount; i++) {
            // if (i > 10) {
                imageArr.push(`IMG_44${i}`)
            // } else if (i > 100) {
            //     imageArr.push(`0${i}`)
            // } else {
            //     imageArr.push(i.toString())
            // }
        }
        setImages(imageArr)
    }, [])

    return (
        <div className={styles.pagePadding}>
            <div className={styles.titleText}>Banquet</div>
            <div className={styles.flexRowCenterWrap100}>
                {images.map(p => (
                    <img key={`img${p}`} src={require(`../../images/banquet/${p}.jpg`)} alt={`img${p}`} className={styles.imageStyle2}/>
                ))}
            </div>
        </div>
    )
}