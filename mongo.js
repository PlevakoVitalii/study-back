const mongoose = require('mongoose')

// if (process.env.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

const url = `mongodb+srv://Vitalii113377:${password}@cluster0.p7albi1.mongodb.net/full-stack-db?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'FullStack is Easy!!!',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved:', `${result}`)
//   mongoose.connection.close()
// })


Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})