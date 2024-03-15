"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { loginData } from '../lib/definitions'
import { useRouter } from 'next/navigation'


export const Login = () => {
    const {push} = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const initialValues: loginData = {email:"",password:""}
      const handleShowPassword = async (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword)
      }
      const validationSchema = Yup.object().shape({
        email: Yup.string().required("You must input a mail !").email("Invalid email address!"),
        password: Yup.string()
          .required("You must input a password !")
      })
      const handleLogin = async (data: loginData) => {
        if(data) push('/dashboard')
      }
  return (
<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
		<Formik  initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
            <Form>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<div className='flex flex-row relative  px-1 bg-white space-x-1 justify-center w-max items-center overflow-hidden'>
                <Field type="email" id="email" name="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com"/>
                </div>
                
                <ErrorMessage name="email" className='text-red-800 text-sm font-medium' component="span"/> <br />
			</div>
            
			<div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <div className='flex flex-row relative  px-1 bg-white space-x-1 justify-center w-max items-center overflow-hidden'>
                <Field type={showPassword ? "text" : "password"} id="password" name="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
				{!showPassword ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500" id="show_password" name="eye_show ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      }
                </div>
				<ErrorMessage name="password" className='text-red-800 text-sm font-medium'  component="span" /> <br />
                <Link href="#"
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</Link>
			</div>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center">
					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked/>
					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<Link href="#"
					className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</Link>
			</div>
			<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            </Form>
        </Formik>
	</div>
</div>
  )
}
