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
