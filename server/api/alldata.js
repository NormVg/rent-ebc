
import { BillSchema } from "../models/billTable.schema";

export default defineEventHandler(async (event) => {
  try {
    
    
    return await BillSchema.find();

  } catch (error) {
    return error;
  }
});
