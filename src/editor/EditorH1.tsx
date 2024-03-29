// import { FC, useState, } from "react";
// import { getDoc, doc } from "firebase/firestore";
// import firestore from "../../firebaseConfig";
// import AdminDiv from "./admin/AdminDiv";

// // Extending the props interface to include style
// interface EditorH1Props {
//   id: string;
//   style?: React.CSSProperties; // Optional style prop
// }

// const EditorH1: FC<EditorH1Props> = async ({ id, style }) => {


//   const fetchDataFromFirestore = async () => {
//     if (process.env.IS_ADMIN === 'false') {
//         const docRef = doc(firestore, "elements", id);
//         try {
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 return docSnap.data().text;
//             } else {
//                 console.warn(`Document ${id} not found in Firestore`);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//             // Handle errors appropriately (e.g., display a fallback message)
//         }
//     }
//     return null;
// };

// const text = await fetchDataFromFirestore();

//   return (
//     <>
//       {process.env.IS_ADMIN === 'true' ? (
//         <AdminDiv id={id} style={style}/>
//       ) : (
//         <h1 style={style}>{text}</h1>
//       )}
//     </>
//   );
// };

// export default EditorH1;



import withEditor from './withEditor'; // Adjust the import path as necessary

const EditorH1 = withEditor(({ style, children }) => <h1 style={style}>{children}</h1>);

export default EditorH1;