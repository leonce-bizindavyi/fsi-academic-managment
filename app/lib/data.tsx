import executeQuery from '@/utils/db';
import { CountResult } from './definitions';




export async function getAllMaxValues(): Promise<CountResult[]> {
  try {
    // Execute queries in parallel using Promise.all
    const results = await Promise.all([
      executeQuery('SELECT COUNT(*) AS count FROM staf_table', {}),
      executeQuery('SELECT COUNT(*) AS count FROM stud_table', {}),
      executeQuery('SELECT COUNT(*) AS count FROM att_strole WHERE Id_role = ?',[4]),
      executeQuery('SELECT COUNT(*) AS count FROM filiere',[]),
    ]);
   
    const countResults: CountResult[] = [];
    let i = 0
    for (const result of results) {
      if (Array.isArray(result)) {
        // Assuming the first element in the array contains the count data
        if (result[0] && 'count' in result[0]) {
          const value = i === 0 ? 'Staff' : i === 1 ? 'Students' :i === 2 ? 'Enseignants' : 'Filières';
          countResults.push({id: i, value: value, count: result[0].count });
          i+=1
        } else {
          // Handle case where the first element is missing or lacks "count" property
          console.warn('Unexpected result format for a query:', result);
        }
      } else {
        // Handle case where result is not an array (unexpected)
        console.warn('Unexpected result format for a query:', result);
      }
    }
    return countResults;
  } catch (error) {
    // Handle errors appropriately, e.g., log the error and provide a user-friendly message
    console.error('Error fetching staff and departments:', error);
    throw error; // Re-throw the error for further handling if necessary
  }
}
