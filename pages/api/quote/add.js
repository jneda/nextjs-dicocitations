import Author from '../../../models/author'
import Quote from '../../../models/quote'

export default async function (req, res) {
  console.log(req.body)
  const { lastName, firstName, century, text } = JSON.parse(req.body)

  // check if author exists
  let author = await Author.findOne({
    where: {
      lastName: lastName,
      firstName: firstName,
      century: century,
    },
  })
  console.log(author)
  // if not create it
  if (!author) {
    author = await Author.create({
      lastName: lastName,
      firstName: firstName,
      century: century,
    })
    console.log(author)
  }
  // get its id

  //check if quote exists
  let quote = await Quote.findOne({
    where: {
      text: text,
      authorId: author.id,
    },
  })
  console.log(quote)

  // if not create quote
  if (!quote) {
    quote = await Quote.create({
      text: text,
      authorId: author.id,
    })
    console.log(quote)
  }

  return res.status(200).json({ message: 'success !' })
}
