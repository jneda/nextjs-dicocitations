import Quote from "../../../models/quote";

export default async function (req, res) {
  // console.log(req.query);
  await Quote.destroy({
    where: {
      id: req.query.id
    }
  })
  res.status(200).json({ message: "deletion successful" })
}