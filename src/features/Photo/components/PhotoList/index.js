import PhotoCard from "../PhotoCard";
import { Row, Col } from 'reactstrap';

function PhotoList(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Row>
            {photoList.map(photo => (
                <Col key={photo.title} xs="12" md="6" lg="3" >
                    <PhotoCard 
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default PhotoList;