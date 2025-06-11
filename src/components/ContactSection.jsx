// ContactSection.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import '../App.css';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;
const StyledField = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 0.25rem;
  }
`;
const StyledLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
    border-color: #ff6b35;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
    border-color: #ff6b35;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;
const StyledError = styled.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  background-color: #ff6b35;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.3s;
  &:hover {
    background-color: #e55a2b;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 1rem;
  }
`;
const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;
const MapContainer = styled.div`
  background: #d1d5db;
  height: 16rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 10rem;
  }
`;
const LeftCol = styled.div`
  width: 100%;
  max-width: 48%;
  margin-bottom: 2.5rem;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;
const GetInTouchBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
    margin-bottom: 1rem;
  }
`;

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      legalIssue: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      legalIssue: Yup.string(),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section id="contact" style={{ padding: '4rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', textAlign: 'center', color: '#1a1a1a' }}>Contact Us</h2>
        <StyledFlexRow>
          {/* Left Side: Get in Touch & Google Map */}
          <LeftCol>
            <GetInTouchBox>
              <h3 className="text-xl font-bold text-black mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <div className="font-semibold text-black">Office Address</div>
                    <div className="text-gray-600">
                      123 Legal Complex, Bhubaneswar<br />
                      Odisha 751001, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-semibold text-black">Phone</div>
                    <div className="text-gray-600">+91-9876543210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-gray-600">info@dkpassociates.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-semibold text-black">Office Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </GetInTouchBox>
            <MapContainer>
              <iframe
                title="DKP & Associates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.760964899839!2d85.8245393153846!3d20.2960589863937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a5e2e2b6e7%3A0x7e2b7e2b7e2b7e2b!2sBhubaneswar%2C%20Odisha%20751001%2C%20India!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </LeftCol>
          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <StyledForm onSubmit={formik.handleSubmit}>
                <StyledField>
                  <StyledLabel>Name *</StyledLabel>
                  <StyledInput
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <StyledError>{formik.errors.name}</StyledError>
                  )}
                </StyledField>
                <StyledField>
                  <StyledLabel>Email *</StyledLabel>
                  <StyledInput
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <StyledError>{formik.errors.email}</StyledError>
                  )}
                </StyledField>
                <StyledField>
                  <StyledLabel>Phone *</StyledLabel>
                  <StyledInput
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number..."
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <StyledError>{formik.errors.phone}</StyledError>
                  )}
                </StyledField>
                <StyledField>
                  <StyledLabel>Legal Issue Type</StyledLabel>
                  <StyledInput
                    type="text"
                    name="legalIssue"
                    placeholder="Type your legal issue..."
                    value={formik.values.legalIssue}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyledField>
                <StyledField>
                  <StyledLabel>Message *</StyledLabel>
                  <StyledTextarea
                    rows={3}
                    name="message"
                    placeholder="Type your message here..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <StyledError>{formik.errors.message}</StyledError>
                  )}
                </StyledField>
                <StyledButton type="submit">
                  Get Legal Help Now
                </StyledButton>
              </StyledForm>
            </div>
          </div>
        </StyledFlexRow>
      </div>
    </section>
  );
};

export default ContactSection;