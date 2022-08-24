import { motion } from "framer-motion"


export default function Modal({secilenResim,setSecilenResim}) {
    const handleClick=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSecilenResim(null)
        }
    }

    return (
        <motion.div className="backdrop" initial={{opacity:1}} animate={{opacity:1}} onClick={handleClick}>
            <motion.img src={secilenResim} alt="resim" initial={{y:"-100vh"}} animate={{y:0}}/>
        </motion.div>
    )
}
