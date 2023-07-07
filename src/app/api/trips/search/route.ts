import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const generateSearchQuery = (text: string, startDate?: string | null, budget?: string | null) => {
  let searchQuery: any = {
    OR: [
      {
        name: {
          search: text,
        },
      },
      {
        description: {
          search: text,
        },
      },
      {
        location: {
          search: text,
        },
      },
    ],
    AND: [],
  };

  if (startDate !== "undefined" && startDate !== "null") {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          startDate: {
            gte: startDate,
          },
        },
      ],
    };
  }

  console.log({ budget });

  if (budget !== "undefined" && budget !== "null") {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          pricePerDay: {
            lte: Number(budget),
          },
        },
      ],
    };
  }

  return searchQuery;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const text = searchParams.get("text");
  const startDate = searchParams.get("startDate");
  const budget = searchParams.get("budget");

  if (!text) {
    return new NextResponse(
      JSON.stringify({
        message: "Missing text parameter",
      }),
      { status: 400 }
    );
  }

  const trips = await prisma.trip.findMany({
    where: generateSearchQuery(text, startDate, budget),
  });

  return new NextResponse(JSON.stringify(trips), { status: 200 });
}
