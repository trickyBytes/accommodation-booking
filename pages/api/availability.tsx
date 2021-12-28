import type { NextApiRequest, NextApiResponse } from "next";
import { Accommodation,AccommodationAvailability, Bed, BedType, AccommodationType } from "../../types";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<AccommodationAvailability[]>
) {
  res.status(200).json([
    {
      arrival: new Date(2021,12,6),
      departure:  new Date(2021,12,10),
      priceInPence: 32000,
      accommodation: {
        id: "y-popty",
        name: "Y Popty",
        // type: AccommodationType.COTTAGE,
        beds: [],
        sleeps: 6,
      }
    },
    {
      arrival: new Date(2021,12,6),
      departure:  new Date(2021,12,10),
      priceInPence: 22000,
      accommodation: {
        id: "laethdy",
        name: "LLaethdy",
        // type: AccommodationType.COTTAGE,
        beds: [],
        sleeps: 4,
      }
    }
  ]);
}
