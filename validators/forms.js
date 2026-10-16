import * as Yup from 'yup';

export const EnquirySchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

export const BookingSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  destination: Yup.string().required('Please select a destination itinerary'),
  travelDate: Yup.date().required('Target travel date is required').nullable(),
  guests: Yup.number().min(1, 'Minimum 1 guest required').required('Number of guests is required'),
});
