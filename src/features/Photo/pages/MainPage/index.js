import { Link } from 'react-router-dom';
import Images from "../../../../constants/images";
import Banner from "../../../../components/Banner";
import './MainPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { } from 'reactstrap';
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../photoSlice';
import { useNavigate } from 'react-router-dom';


function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const photos = useSelector(state => state.photos);
    console.log('List of photos: ', photos);

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        navigate(editPhotoUrl);
    }

    return (
        <div className="photo-main">
            <Banner 
                title="🎉 Your awesome photos 🎉"
                backgroundUrl={Images.PINK_BG}
            />
            <div className="py-5">
                <Link className='py-5__link' to="/photos/add">Add new photo</Link>
            </div>

            <div className="photo-list">
                <PhotoList 
                    photoList={photos}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                    onPhotoEditClick={handlePhotoEditClick}
                />
            </div>
        </div>
    )
}

export default MainPage;