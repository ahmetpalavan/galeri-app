import { db } from "../firebase/config" //database//
import { collection, onSnapshot, query,orderBy } from "firebase/firestore"
import { useEffect, useState  } from "react"
import { ref } from "firebase/storage";
import {motion} from 'framer-motion'
export default function ImageGrid({setSecilenResim}) {
    const [docs, setDocs] = useState([])
    useEffect(()=>{
        let ref=collection(db,'resimler')
        ref=query(ref,orderBy('tarih','desc'))
        onSnapshot(ref,snap=>{
            let documents=[];
            snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id})
                setDocs(documents)
            })
        })
    })
    return (
        <div className="image"> 
            {docs && docs.map(doc=>(
                <motion.div className="image-wrap" key={doc.id} onClick={()=>setSecilenResim(doc.url)} layout whileHover={{opacity:1, scale:1}}>
                    <motion.img initial={{opacity:1}} animate={{opacity:1}} transition={{delay:1}} src={doc.url} alt='Yüklenen Resim'></motion.img>
                </motion.div>
            ))}
        </div>
    )
}
