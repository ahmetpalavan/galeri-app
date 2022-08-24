import {useState, useEffect} from 'react';
import {storage, db} from '../firebase/config'
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import { collection,addDoc,serverTimestamp } from 'firebase/firestore';



export default function ProgressBar({file,setFile}) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [cancelled, setCancelled]= useState(false);
    
    useEffect(()=>{

        const collectionRef=collection(db,'resimler')
        const storageRef=ref(storage,file.name);
        const uploadTask=uploadBytesResumable(storageRef,file); //yüklenecek dosyayı ister//
        uploadTask.on('state_changed',(snap)=>{
            let yuzdelik=(snap.bytesTransferred / snap.totalBytes)*100;
            if(!cancelled){
                setProgress(yuzdelik)
            }
        },(err)=>{
            if(!cancelled){
                setError(err)
            }
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                if(!cancelled){
                    setUrl(downloadUrl);
                    if(url!=null){
                        addDoc(collectionRef,{url:url,tarih:serverTimestamp()})
                    }
                }
            });
            if(url){
                if(!cancelled){
                    setFile(null);
                }
            }
            return()=>setCancelled(true)
        })
},[url,setFile])
    return (
        <div className='progress-bar' style={{width:progress + '%'}}>

        </div>
    )
}
