import { prisma } from "@/lib/prisma";

import React from "react";
import TripHeader from "./components/TripHeader";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />

      {/* RESERVA */}
    </div>
  );
};

export default TripDetails;
