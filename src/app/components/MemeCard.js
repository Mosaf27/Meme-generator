import styles from '@/app/styles/memecard.module.css'
import Image from 'next/image';


const MemeCard = ({image}) => {



    return (
            <div className={styles.card}>
            <div className={styles.img}>
            <Image
            src={image}
            width="120"
            height="170"
            alt='meme image'/>
            </div>
            </div>
    );
}

export default MemeCard;