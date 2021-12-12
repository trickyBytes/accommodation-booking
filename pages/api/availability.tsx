import type { NextApiRequest, NextApiResponse } from "next";
import { Accommodation } from "../../types";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Accommodation[]>
) {
  res.status(200).json([
    {
      id: "y-popty",
      type: "Y Popty (sleeps 6)",
      arrival: "Friday 16th July",
      departure: "Monday 19th of July",
      priceInPence: 3200.0,
    },
    {
      id: "laethdy",
      type: "Laethdy (sleeps 4)",
      arrival: "Friday 16th July",
      departure: "Monday 19th of July",
      priceInPence: 2200.0,
    },
  ]);
}
