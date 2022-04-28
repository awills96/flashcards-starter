import { createSlice } from '@reduxjs/toolkit'
import { addQuizIdToTopic } from '../topics/topicsSlice'


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            //console.log(action.payload)
            state.quizzes[action.payload.quizId] = {
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds,
                id: action.payload.quizId
            }
        }
    }
})

export const addAndAssociateQuiz = (quizLoad) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quizLoad))
        dispatch(addQuizIdToTopic({quizId: quizLoad.quizId, topicId: quizLoad.topicId}))
    };
};


export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;