"use client"
import { createTeacher } from '@/app/lib/staff/action'
import Link from 'next/link';
import React from 'react'
import { useFormState } from 'react-dom';

export const Modal = () => {
    const initialState = { message: null, errors: {} };
    const createTeacherAction = async (state: {
        errors?: {
            name?: string[];
            email?: string[];
            phone?: string[];
            sexe?: string[];
            naissance?: string[];
            entered?: string[];
            uniid?: string[];
        };
        message?: string | null;
    }, formData: FormData) => {
        const response = await createTeacher(state, formData);
        return { ...state, ...response }; // Merge response data into state
      };
      
      const [state, dispatch] = useFormState(createTeacherAction, initialState);
    
    return (
        <>
            <>
            <div className='relative flex w-full flex-row h-auto  items-center justify-center bg-white shadow-lg shadow-blue-gray-500/10'>
                 <div className="relative  p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white border border-green-700-600  rounded-lg shadow dark:bg-gray-700 opacity-100">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Enregistrer un Nouveau Enseignant
                            </h2>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form action={dispatch} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" name="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Nom et Prénom" required />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="email@gmail.com" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                                    <input type="tel" name="phone"  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="61 000 000" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="sexe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexe</label>
                                    <select id="sexe" name='sexe' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected>Select Sexe</option>
                                        <option value="M">Homme</option>
                                        <option value="F">Femme</option>
                                    </select>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de Naissance</label>
                                    <input type="date" name="naissance" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="periode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date entrée</label>
                                    <input type="date" name="periode" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                                </div>
                            </div>
                            <div className='flex justify-between '>
                            <Link href={`/staff`} type="submit" className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Annuler
                            </Link>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Ajouter
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </>
        </>
    )
}
