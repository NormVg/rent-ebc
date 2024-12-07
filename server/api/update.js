

export default defineEventHandler(async (event) => {
    try {
      
      const body = await readBody(event)
      const querry = await getQuery(event)  
      const seq = querry.seq
      const updatedBill = await BillSchema.findOneAndUpdate(
        { seq }, // Find the document where `seq` matches
        { $set: body }, // Set the updated fields
        { new: true, runValidators: true } // Return the updated document and run schema validators
      );

     
      if (updatedBill) {
        console.log("Document updated successfully:", updatedBill);
        
      } else {
        console.log("No document found with the provided seq:", seq);
        
      }

      

      return updatedBill
     
    } catch (error) {
      return error;
    }
  });
  