import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Check from '../../assets/images/Check';

const MessageBox = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [sending, setSending] = useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
    const { t } = useTranslation();

    const SendEmail = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string()
                .email('Email adress is not valid')
                .required('Email adress is required'),
            message: Yup.string().required('message is required'),
        }),
        onSubmit: (values) => {
            SendEmail(values);
            setSendEmailSuccess(true);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <Container maxWidth='md'>
            <Box
                overflow='hidden'
                sx={{ position: 'relative', minHeight: '300px' }}
            >
                <AnimatePresence>
                    {!sendEmailSuccess && (
                        <form
                            className={classes.form}
                            onSubmit={formik.handleSubmit}
                        >
                            <TextField
                                error={Boolean(
                                    formik.touched.name && formik.errors.name
                                )}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                helperText={
                                    formik.touched.name && formik.errors.name
                                }
                                variant='filled'
                                margin='normal'
                                type='text'
                                fullWidth
                                id='name'
                                label={t('contact_full_name')}
                                name='name'
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.email && formik.errors.email
                                )}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                                variant='filled'
                                type='email'
                                margin='normal'
                                fullWidth
                                id='email'
                                label={t('contact_email')}
                                name='email'
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.message &&
                                        formik.errors.message
                                )}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                helperText={
                                    formik.touched.message &&
                                    formik.errors.message
                                }
                                variant='filled'
                                margin='normal'
                                fullWidth
                                name='message'
                                label='Message'
                                type='text'
                                id='message'
                                multiline
                                minRows={5}
                            />
                            <Box display='flex' justifyContent='center' mt={2}>
                                <Button
                                    sx={classes.submitBtn}
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    disabled={sending}
                                >
                                    {t('contact_btn')}
                                </Button>
                            </Box>
                        </form>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {sendEmailSuccess && (
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box m={2}>
                                <Check width='150' />
                            </Box>
                            <Typography
                                component={motion.h4}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                variant='body2'
                            >
                                Your message has been successfully sent, i'll
                                reply as soon as possible.
                            </Typography>
                        </Box>
                    )}
                </AnimatePresence>
            </Box>
        </Container>
    );
};

const useStyles = (theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submitBtn: {
        width: '200px',
    },
});

export default MessageBox;
