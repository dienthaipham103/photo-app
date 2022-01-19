import RandomPhoto from "../../components/RandomPhoto";
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';


function RandomPhotoField(props) {

    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];


    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
    )
}

export default RandomPhotoField;