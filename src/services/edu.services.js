import { db2 } from "../firebase-config";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,} from "firebase/firestore";

const bookCollectionRef = collection(db2,"internships");
const bookCollectionRef2=collection(db2,"notices");

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
    getAllInternship=()=>{
        return getDocs(bookCollectionRef);
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