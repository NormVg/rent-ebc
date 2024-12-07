import { defineMongooseModel } from '#nuxt/mongoose'

export const BillSchema = defineMongooseModel({
  name: 'Bill',
  schema: {
    seq: { type: Number, required: true },
    date: { type: String, required: true },
    "main-meter": { type: Number, required: true },
    motor: { type: Number, required: true },
    slave: { type: Number, required: true },
    "bill-rs": { type: Number, required: true },
    "bill-ground": { type: Number, required: true },
    "bill-first": { type: Number, required: true },
  }, 
  options: {
    collection: 'bill_calculator', // Ensure it uses the correct collection name
  },
})