import { logSchema } from "../models/log.schema";

export default defineEventHandler(async (event) => {
  try {
    
    const body = await readBody(event)
    const querry = await getQuery(event) 

    const resp = new logSchema({title:querry.head,log:body}).save()
    return resp
   
  } catch (error) {
    return error;
  }
});
