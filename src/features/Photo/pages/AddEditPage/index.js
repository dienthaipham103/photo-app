import { Link } from 'react-router-dom';
import Images from "../../../../constants/images";
import Banner from "../../../../components/Banner";
import PhotoForm from '../../components/PhotoForm';
import './AddEditPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from '../../photoSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { randomNumber } from '../../../../utils/common'; 

function AddEditPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
    });

    const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: '',
    }
    : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                      ...values,
                      id: randomNumber(10000, 99999),
                    }
                    const action = addPhoto(newPhoto);
                    console.log({ action });
                    dispatch(action);
                  } else {
                    // Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                  }
          
                  navigate('/photos');
                  resolve(true);
            }, 1500);
        })
       
    }

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <PhotoForm 
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage;