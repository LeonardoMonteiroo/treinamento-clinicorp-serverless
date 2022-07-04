import app from './firebase';
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc
} from "firebase/firestore";

const database = getFirestore(app);

async function save(tableName, _data, id) {
    try {
        const data = { ..._data };

        const date = new Date();

        if (!id) {
            data.InsertedDate = date;
        }

        data.LastChangeDate = date;

        if (id) {
            return await update(tableName, data, id);
        } else {
            return await create(tableName, data);
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function create(tableName, data) {
    const docRef = await addDoc(collection(database, tableName), data);

    const savedData = {
        id: docRef.id,
        ...data,
    }

    return savedData;
}

async function update(tableName, data, id) {
    await setDoc(doc(database, tableName, id), data);
    const savedData = {
        id: id,
        ...data
    };

    return savedData;
}

const crud = {
    save
};

export default crud;
