import executeQuery from '@/utils/db';
import { all_staff_members } from '../definitions';

export async function getAllStaffMembers() {
  try {
    // Execute the query and handle potential errors
    const rows = await executeQuery('SELECT * FROM staf_table ORDER BY Id_staf DESC LIMIT 10', []) as all_staff_members[];

    // Validate and process the retrieved data
    if (!Array.isArray(rows)) {
      throw new Error('Unexpected data format from database. Expected an array of objects.');
    }

    const staffMembers = rows.map((row) => {
      return {
        Id_staf: row.Id_staf, // Assuming an 'id' column exists
        name_staff: row.name_staff,
        period: row.period,
        date_naiss: row.date_naiss,
        sexe: row.sexe,
        phone_st: row.phone_st,
        email_st: row.email_st,
        uniid_staf: row.uniid_staf,
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
    const rows = await executeQuery('SELECT * FROM staf_table WHERE uniid_staf=?', [uniid]) as all_staff_members[];

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

