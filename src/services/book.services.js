import { db } from "../firebase-config";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,} from "firebase/firestore";


const bookCollectionRef = collection(db,"teachers_bca");
class BookDataService{
    addBooks = (newBook) =>{
        return addDoc(bookCollectionRef,newBook);
    }
    deleteBooks=(id)=>{
        const bookDoc=doc(db,"teachers_bca",id);
        return deleteDoc(bookDoc);
    }
    getAllBooks=()=>{
        return getDocs(bookCollectionRef);
    }
    getBook=(id)=>{
        const bookDoc=doc(db,"teachers_bca",id);
        return getDoc(bookDoc);
    }

}

export default new  BookDataService();