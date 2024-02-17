import React from 'react'
import { useEffect,useState } from 'react'
import {db2} from "../firebase-config";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,query,where,updateDoc} from "firebase/firestore";

export default function Atten() {
    const [osArray, setOsArray] = useState([]);
   

    // useEffect(()=>{
    // test1()
    // },[]);

    const test1= async ()=>{
        const docRef = doc(db2, "attendance", "FYBCA");
        const docSnap = await getDoc(docRef); 
       
        const data=docSnap.data();

        const osArray = data?.B_21_1320?.courses?.os || [];

        osArray.push("3/08/2024");

        await updateDoc(docRef, {
            "B_21_1320.courses.os": osArray
        });
  
        console.log("Document updated successfully with modified osArray:", osArray);

    }
  return (
    <>
    <h1>testing atten</h1>
    <button onClick={test1}>Add</button>
    </>
  )
}
