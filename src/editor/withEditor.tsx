import React, { FC, ComponentType, CSSProperties } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import firestore from '../../firebaseConfig';
import AdminDiv from './admin/AdminDiv';
import { COLLECTION_NAME } from '@/app/utils/firestore';

interface WithEditorProps {
  id: string;
  style?: CSSProperties;
}

const withEditor = (WrappedComponent: ComponentType<any>) => {
  const EditorComponent: FC<WithEditorProps> = async ({ id, style }) => {
    const fetchDataFromFirestore = async () => {
      if (process.env.IS_ADMIN === 'false') {
        const docRef = doc(firestore, COLLECTION_NAME, id);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            return docSnap.data().text;
          } else {
            console.warn(`Document ${id} not found in Firestore`);
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      }
      return null;
    };

    const text = await fetchDataFromFirestore();
    if (text === null && process.env.IS_ADMIN === 'false') return null;

    return (
      <>
        {process.env.IS_ADMIN === 'true' ? (
          <AdminDiv id={id} style={style} />
        ) : (
          <WrappedComponent style={style}>{text}</WrappedComponent>
        )}
      </>
    );
  };

  return EditorComponent;
};

export default withEditor;
