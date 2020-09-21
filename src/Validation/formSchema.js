import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required"),
    name: yup
        .string()
        .min(2, "name must be at least 3 characters")
        .required("Who dis pizza 4?"),
    //   role: yup
    //     .string()
    //     .oneOf(['tl', 'instructor', 'alumni', 'student'], "Role is required"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Pizza Size required!"),
    address: yup
        .string()
        .min(10, "Address and Zip please")
        .required("Address is required!"),
    special: yup
        .string()
        .min(0, 'whatcha want')
})

export default formSchema