const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, unique: true },
    avatar: { type: String, required: true, unique: true },
    content: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Example', ExampleSchema)
