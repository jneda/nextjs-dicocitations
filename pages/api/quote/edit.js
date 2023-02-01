import Author from '../../../models/author'
import Quote from '../../../models/quote'

export default async function (req, res) {
  console.log(JSON.parse(req.body))
  const { id, lastName, firstName, century, text } = JSON.parse(req.body)

  // check if author exists
  let author = await Author.findOne({
    where: {
      lastName: lastName,
      firstName: firstName,
      century: century,
    },
  })
  // console.log(author)

  // if not create it
  if (!author) {
    author = await Author.create({
      lastName: lastName,
      firstName: firstName,
      century: century,
    })
    // console.log(author)
  }
  // get its id

  //check if quote exists
  let quote = await Quote.findByPk(id)
  console.log(quote)

  if (!quote) {
    return res.status(404).json({ message: 'Quote not found.' })
  }

  // if yes update it

  quote = await Quote.update(
    {
      text: text,
      authorId: author.id,
    },
    {
      where: {
        id: id,
      },
    },
  )
  console.log(quote)

  return res.status(200).json({ message: 'Success !' })
}
