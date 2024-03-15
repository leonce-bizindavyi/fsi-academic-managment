"use server"
import executeQuery from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
const bcrypt = require('bcryptjs');
export type State = {
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
};
const FormSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: 'Please enter name.',
    }),
    email: z.string({
        invalid_type_error: 'Please enter email.',
    }),
    sexe: z.enum(['M', 'F'], {
        invalid_type_error: 'Please select sexe.',
    }),
    phone: z.coerce
        .number()
        .gt(0, { message: 'Please enter valid phone' }),
    naissance: z.string({
        invalid_type_error: 'Please enter naissance.',
    }),
    periode: z.string({
        invalid_type_error: 'Please enter periode.',
    }),
    date: z.string(),
    uniid: z.string()
});
const generateRandomString = (long: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    let result = '';
    for (let i = 0; i < long; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CreateTeacher = FormSchema.omit({ id: true, date: true ,uniid: true});
const EditTeacher = FormSchema.omit({ id: true, date: true });

export async function createTeacher(prevState: State, formData: FormData) {
    const validatedFields = CreateTeacher.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        sexe: formData.get('sexe'),
        naissance: formData.get('naissance'),
        periode: formData.get('periode'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    // Prepare data for insertion into the database
    const { name, email, phone, sexe, naissance, periode } = validatedFields.data;
    const uniid = generateRandomString(5)
    const password = generateRandomString(8)
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
         const rows = await executeQuery(
            "INSERT INTO staf_table (uniid_staf,name_staff,pass_cod,sexe,date_naiss,period,email_st,phone_st) VALUES(?,?,?,?,?,?,?,?)",
            [uniid, name, hashedPassword, sexe, naissance, periode, email, phone])

        if (typeof rows === 'object' && 'affectedRows' in rows) {
            if (rows.affectedRows !== 0) {
                
            }
        }
        
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/staff');
    redirect('/staff');
    return 
};


export async function editTeacher(prevState: State, formData: FormData) {
    const validatedFields = EditTeacher.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        sexe: formData.get('sexe'),
        naissance: formData.get('naissance'),
        periode: formData.get('periode'),
        uniid: formData.get('uniid'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    // Prepare data for insertion into the database
    const { name, email, phone, sexe, naissance, periode,uniid } = validatedFields.data;
    console.log(name, email, phone, sexe, naissance, periode,uniid)
    try {
         const rows = await executeQuery(
            "UPDATE staf_table SET uniid_staf=? ,sexe=?,date_naiss=?,period=?,email_st=?,phone_st=? WHERE Id_staf =?",
            [uniid, sexe, naissance, periode, email, phone,uniid])

        if (typeof rows === 'object' && 'affectedRows' in rows) {
            if (rows.affectedRows !== 0) {
                
            }
        }
        
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/staff');
    redirect('/staff');
    return
};