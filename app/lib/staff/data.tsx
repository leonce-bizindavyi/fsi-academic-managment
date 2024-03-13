import executeQuery from '@/utils/db';
import {Staff } from '../definitions';
export async function getAllStaffMembers(): Promise<Staff[]> {
    const rows = await executeQuery('SELECT * FROM staf_table', {})
    return rows as Staff[]; // Type assertion for safety
  }
  