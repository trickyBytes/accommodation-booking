import type { NextApiRequest, NextApiResponse } from "next";
import { Accommodation } from "../../types";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Accommodation[]>
) {
  res.status(200).json([
    {
      id: "y-popty",
      type: "Y Popty",
      sleeps: 6,
      arrival: new Date(2021,12,6),
      departure: new Date(2021,12,10),
      priceInPence: 32000,
    },
    {
      id: "laethdy",
      type: "Laethdy",
      sleeps: 4,
      arrival: new Date(2021,12,6),
      departure: new Date(2021,12,10),
      priceInPence: 22000,
    },
  ]);
}
