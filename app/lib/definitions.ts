// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Staff = {
  id: number;
  uniid: string;
  name: string;
  password: string;
  date_naissance: string;
  email: string;
  periode: string;
  phone: string;
  create_at: string;
  update_at: string;
}
export type CountResult = {
  id: number;
  value: string;
  count: number;
}
export type loginData = {
  email: string;
  password: string;
}

export type all_staff_members = {
  Id_staf: number;
  name_staff: string;
  period: string;
  date_naiss: string;
  sexe: string;
  phone_st: string;
  email_st: string;
  uniid_staf: string;
  create_at: string;
  update_at: string;
}

export type student = {
  Id_st: number;
  uniid_st: string;
  name_st: string;
  matr_st: string;
  st_code: string;
  sexe: string;
  date_naiss: string;
  tel_st: string;
  email_st: string;
  create_at: string;
  update_at: string;
}
export type filiere = {
  id: number;
  fil: string;
  dep: string;
}