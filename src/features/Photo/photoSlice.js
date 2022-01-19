import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
    {
      id: 86160,
      categoryId: 5,
      photo: 'https://picsum.photos/id/649/300/300',
      title: 'Id ex enim non dolore reprehenderit eu ullamco.'
    },
    {
      id: 82605,
      categoryId: 1,
      photo: 'https://picsum.photos/id/43/300/300',
      title: 'Ad officia magna veniam sunt.'
    },
    {
      id: 74760,
      categoryId: 3,
      photo: 'https://picsum.photos/id/722/300/300',
      title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
    },
    {
      id: 39588,
      categoryId: 5,
      photo: 'https://picsum.photos/id/294/300/300',
      title: 'Deserunt in tempor est id consectetur cupidatat.'
    },
    {
      id: 72133,
      categoryId: 4,
      photo: 'https://picsum.photos/id/229/300/300',
      title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
    },
    {
      id: 22222,
      categoryId: 3,
      photo: 'https://picsum.photos/id/69/300/300',
      title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
    },
    {
      id: 13334,
      categoryId: 3,
      photo: 'https://picsum.photos/id/29/300/300',
      title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
    },
    {
      id: 13113,
      categoryId: 2,
      photo: 'https://picsum.photos/id/49/300/300',
      title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
    }
];

const photo = createSlice({
    name: 'photo',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload;
            state = state.filter(photo => photo.id !== removePhotoId);
            return state;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
      
            if (photoIndex >= 0) {
              state[photoIndex] = newPhoto;
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;