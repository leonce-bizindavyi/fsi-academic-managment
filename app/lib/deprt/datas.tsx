import executeQuery from '@/utils/db';
import { filiere } from '../definitions';

export async function getAllSfilieres() {
  try {
    // Execute the query and handle potential errors
    const rows = await executeQuery('SELECT filiere.Id_fil AS id,filiere.name_filiere AS fil, depart_table.name_dep AS dep FROM filiere,depart_table WHERE filiere.Id_dep = depart_table.Id_dep', []) as filiere[];

    // Validate and process the retrieved data
    if (!Array.isArray(rows)) {
      throw new Error('Unexpected data format from database. Expected an array of objects.');
    }

    const fils = rows.map((row) => {
      return {
        id: row.id, // Assuming an 'id' column exists
        fil: row.fil,
        dep: row.dep,
      };
    });

    return fils;
  } catch (error) {
    console.error('Error fetching staff members:', error);
    // Consider throwing a more specific error for handling at the caller level
    throw error;
  }
}

