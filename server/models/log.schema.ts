import { defineMongooseModel } from '#nuxt/mongoose'

export const logSchema = defineMongooseModel({
  name: 'LOG',
  schema: {
    title:{type:String,required:true},
    log:{type:Object,required:true}
    
  }, 
  options: {
    collection: 'log', 
  },
})