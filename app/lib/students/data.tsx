import executeQuery from '@/utils/db';
import { student } from '../definitions';

export async function getAllStudents() {
  try {
    // Execute the query and handle potential errors
    const rows = await executeQuery('SELECT * FROM stud_table ORDER BY Id_st DESC LIMIT 5', []) as student[];

    // Validate and process the retrieved data
    if (!Array.isArray(rows)) {
      throw new Error('Unexpected data format from database. Expected an array of objects.');
    }

    const staffMembers = rows.map((row) => {
      return {
        Id_st: row.Id_st, // Assuming an 'id' column exists
        name_st: row.name_st,
        matr_st: row.matr_st,
        date_naiss: row.date_naiss,
        sexe: row.sexe,
        tel_st: row.tel_st,
        email_st: row.email_st,
        st_code: row.st_code,
        uniid_st:row.uniid_st,
        create_at: row.create_at,
        update_at: row.update_at,
      };
    });

    return staffMembers;
  } catch (error) {
    console.error('Error fetching staff members:', error);
    // Consider throwing a more specific error for handling at the caller level
    throw error;
  }
}

export async function getoneStaffById(uniid: string) {
  try {
    // Execute the query and handle potential errors
    const rows = await executeQuery('SELECT * FROM staf_table WHERE uniid_staf=?', [uniid]) as student[];

    // Validate and process the retrieved data
    if (!Array.isArray(rows)) {
      throw new Error('Unexpected data format from database. Expected an array of objects.');
    }
    const member = rows[0]
    return member;
  } catch (error) {
    console.error('Error fetching staff members:', error);
    // Consider throwing a more specific error for handling at the caller level
    throw error;
  }
}