import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';

import '../styles/login.scss';



const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'error',
                (error) => {
                    toast.error(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        // Update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });

                        // Store user data in Firestore database
                        await setDoc(doc(db, "user", user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                }
            );

            setLoading(false)
            toast.success('Account created')
            navigate('/login')

        } catch (error) {
            setLoading(false);
            toast.error('Something went wrong');

        }
    };

    return <>
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? (<Col lg='12' className='text-center'>
                                <h5 className='fw-bold'>Loading...</h5>
                            </Col>
                            ) : (
                                <Col lg='6' className='m-auto text-center'>
                                    <h3 className='fw-bold mb-4'>Signup</h3>

                                    <Form className='auth_form' onSubmit={signup}>
                                        <FormGroup className='form_group'>
                                            <input
                                                type='text'
                                                placeholder='Username'
                                                value={username}
                                                onChange={e => setUsername(e.target.value)}
                                            />
                                        </FormGroup>


                                        <FormGroup className='form_group'>
                                            <input
                                                type='email'
                                                placeholder='Enter your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </FormGroup>

                                        <FormGroup className='form_group'>
                                            <input
                                                type='password'
                                                placeholder='Enter your password'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </FormGroup>

                                        <FormGroup className='form_group'>
                                            <input
                                                type='file'
                                                onChange={e => setFile(e.target.value)}
                                            />
                                        </FormGroup>

                                        <button
                                            type='submit'
                                            className="buy_btn auth_btn"
                                        >
                                            Create an account
                                        </button>

                                        <p>
                                            Already have an account?{" "}
                                            <Link to='/login'>Login</Link>
                                        </p>
                                    </Form>
                                </Col>
                            )

                        }
                    </Row>
                </Container>
            </section>
        </Helmet>

    </>
};

export default Signup;