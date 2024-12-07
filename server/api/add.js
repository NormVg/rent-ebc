import { logSchema } from "../models/log.schema";

export default defineEventHandler(async (event) => {
  try {
    
    const body = await readBody(event)
    const added = new BillSchema(body).save()
    new logSchema({title:"added new record",log:body}).save()
    return added
   
  } catch (error) {
    return error;
  }
});
