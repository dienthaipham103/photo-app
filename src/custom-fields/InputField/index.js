import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

function InputField(props) {
    
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label &&  <Label for={name}>{label}</Label>}
            <Input 
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            />
            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    )
}

export default InputField;