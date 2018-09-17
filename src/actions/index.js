import { booksRef } from "../config/firebase";
import { FETCH_BOOKS } from "./types";

export const addBook = newBook => async dispatch => {
  booksRef.add(newBook);
  console.log(FETCH_BOOKS);
};

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };
export const fetchBooks = () => async dispatch => {
  booksRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      let docData = doc.data();
      docData.doc_id = doc.id;
      dispatch({
        type: FETCH_BOOKS,
        payload: docData
      });
    });
  });
};
