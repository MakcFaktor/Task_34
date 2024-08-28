import React from 'react';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitBooking } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const BookingForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = values => {
        dispatch(submitBooking(values));
        navigate('/hotels');
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="destination" component="select">
                            <option value="">Select a destination</option>
                            <option value="paris">Paris</option>
                            <option value="new-york">New York</option>
                            <option value="tokyo">Tokyo</option>
                        </Field>
                    </div>
                    <div>
                        <Field name="date" component={TextField} label="Date" type="date" />
                    </div>
                    <div>
                        <Field name="guests" component={TextField} label="Guests" type="number" />
                    </div>
                    <Button type="submit" variant="contained" color="primary">Send</Button>
                </form>
            )}
        />
    );
};

export default BookingForm;
