import * as yup from 'yup';
import { nanoid } from 'nanoid'
import { Formik} from "formik"
import {Forma, Input, Error, Button, Label} from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
}
const contactId = () => {
    return nanoid(4);
}

const shema = yup.object().shape({
    name: yup.string().required(),
});

export const ContactForm = ({addContacts}) => {
    const handleSubmit = (values, { resetForm }) => {
      addContacts(values);
        values.id = contactId();
               resetForm()
    }
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={handleSubmit}
        >
           <Forma autoComplete="off">
                <Label htmlFor="name">
                    Name
                    <Input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                />

                <Error name="name" component="p" />
                </Label>
                <Label htmlFor="number">
                    Number
                    <Input
                             type="tel"
                             name="number"
                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                             required
                />

                <Error name="number" component="p" />
                </Label>
                <Button type="submit">Add contact</Button>
            </Forma>
        </Formik>
   
    )
}