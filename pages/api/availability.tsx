import type { NextApiRequest, NextApiResponse } from 'next'

interface Accomadation {
  type: String,
  arrival: String,
  departure: String,
  numberOfNights: Number,
  priceInPence: Number
}

interface AvailableAccomadationList {
  availableAccomadation: Array<Accomadation>
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<AvailableAccomadationList>) {
  res.status(200).json(
    {
      availableAccomadation: [
        {
          type: "Popty",
          arrival: "Friday 16th July",
          departure: "Monday 19th of July",
          numberOfNights: 3,
          priceInPence: 3200.00
        },
        {
          type: "LLeathdy",
          arrival: "Friday 16th July",
          departure: "Monday 19th of July",
          numberOfNights: 3,
          priceInPence: 3200.00
        }
      ]
    }
  )
}