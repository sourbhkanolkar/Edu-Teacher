import { db2 } from "../firebase-config";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,query,where} from "firebase/firestore";


const bookCollectionRef = collection(db2,"internships");
const bookCollectionRef2=collection(db2,"notices");
const FeedCollectionRef3=collection(db2,"feedback");


const q = query(collection(db2, 'feedback'), where('field', '==', 'College'));
const q2 = query(collection(db2, 'feedback'), where('field', '==', 'Teacher'));
const q3 = query(collection(db2, 'feedback'), where('field', '==', 'Canteen'));

class EduDataService{
    addBooks = (newBook) =>{
        return addDoc(bookCollectionRef,newBook);
    }

    
    addNotice=(newBook)=>{
        return addDoc(bookCollectionRef2,newBook);
    }
    deleteBooks=(id)=>{
        const bookDoc=doc(db2,"internships",id);
        return deleteDoc(bookDoc);
    }
    deleteNotice=(id)=>{
        const bookDoc=doc(db2,"notices",id);
        return deleteDoc(bookDoc);
    }
    deleteFeedback=(id)=>{
      const bookDoc=doc(db2,"feedback",id);
      return deleteDoc(bookDoc);
    }
    
    getAllInternship=()=>{
        return getDocs(bookCollectionRef);
    }
    getALLFeedback=()=>{
        return getDocs(FeedCollectionRef3);
    }
    getCollageFeedback=()=>{
        return getDocs(q);
    }
    
    getTeacherFeedback=()=>{
        return getDocs(q2);
    }
   
    getCanteenFeedback=()=>{
        return getDocs(q3);
    }

    getAllNotices=()=>{
        return getDocs(bookCollectionRef2);
    }
    getBook=(id)=>{
        const bookDoc=doc(db2,"internships",id);
        return getDoc(bookDoc);
    }

}

export default new  EduDataService();