'use client';

import React, { ButtonHTMLAttributes, ChangeEvent, FormEvent } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Alert,
    AlertTitle,
    AlertIcon,
    AlertDescription,
} from '@chakra-ui/react'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
    name_or_email: string;
    password: string;
}

const LoginPage = () => {

    const [formData, setFormData] = useState<FormData>({ name_or_email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null);
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        console.log(formData)

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            console.log('Login successful', data);
            const user_id = data['user_id'];

            router.push(`/profile/${user_id}`);

            setFormData({ name_or_email: '', password: '' });
        } else {
            const errorData = await response.json();
            console.error(errorData.message, 'Login failed ');
            setErrorMessage(errorData.message || 'Login failed');
        }


    };

    return (
        // <div>
        <>
            <form className='w-[100%] h-[80%] px-[5px]' onSubmit={ handleSubmit } >

                <div className='w-[100%] h-[100%] flex flex-col justify-between items-center gap-3 p-[10px]'>
                    <p className='font-medium'> Login Here </p>
                    { errorMessage && (
                        <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle>Login failed</AlertTitle>
                            <AlertDescription>{ errorMessage }</AlertDescription>
                        </Alert>
                    )}
                    <FormControl isInvalid={ false } >
                        <FormLabel fontSize="small"> Username / Email </FormLabel>
                        <Input type='text'
                            name='name_or_email'
                            value={ formData.name_or_email }
                            onChange={ handleInputChange } />

                    </FormControl>

                    <FormControl isInvalid={ false }>
                        <FormLabel fontSize="small"> Password  </FormLabel>
                        <Input type='password'
                            name='password'
                            value={ formData.password }
                            onChange={ handleInputChange } />


                    </FormControl>

                    <Button colorScheme='teal' type='submit'> Sign In</Button>
                </div>
            </form>
            <Link href="/signup" className="underline text-[14px] text-gray-500"> Don't have an account? Sign Up</Link>
        </>
        // </div>
    );
};

export default LoginPage;