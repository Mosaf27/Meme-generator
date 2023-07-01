import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
            <div className={styles.img}>
             <Image 
             src="/images/meme2.png"
             width="50"
             height="60"
             alt="meme"/> 
             </div>  
            <h1 className={styles.h1}>Meme Generator</h1>
            </div>
        </div>
    );
}

export default Header;