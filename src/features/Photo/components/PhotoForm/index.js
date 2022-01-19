import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import Select from 'react-select';
import { FastField, Formik, Form } from 'formik';
import Images from '../../../../constants/images';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import './PhotoForm.scss';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import * as Yup from 'yup';

function PhotoForm(props) {
    const { initialValues, isAddMode } = props;

    const validationSchema = Yup.object().shape({

        title: Yup.string().required('This field is required!'),
        categoryId: Yup.number().required('This field is required!').nullable(),
        photo: Yup.string().required('This field is required!')

    });
    

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {
                formikProps => {
                    const { values, errors, touched, isSubmitting } = formikProps;
                    console.log({values, errors, touched});

                    return (
                        <Form className='form'>
                            <FastField 
                                name="title"
                                component={InputField}

                                label="Title"
                                placeholder="Ex: Image title"
                            />
                            <FastField 
                                name="categoryId"
                                component={SelectField}

                                label="Category"
                                placeholder="Ex: Image title"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
                            <FormGroup>
                                <Button 
                                    type='submit' 
                                    color={isAddMode ? 'primary' : 'success'}
                                >
                                    {isSubmitting && <Spinner size="sm" style={{marginRight: '10px'}}/>}
                                    {isAddMode ? 'Add to album' : 'Update your photo'}
                                </Button>
                            </FormGroup>
                           
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default PhotoForm;
