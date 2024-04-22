import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { firstName, lastName, email, contact, about ,latitude,longitude } = action.payload;
            const user = {
                id: nanoid(),
                firstName,
                lastName,
                email,
                contact,
                about,
                latitude,
                longitude
            }
            state.users.push(user);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
