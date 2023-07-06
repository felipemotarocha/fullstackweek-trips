import { prisma } from "@/lib/prisma";

import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

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
      <TripReservation
        tripId={trip.id}
        pricePerDay={trip.pricePerDay as any}
        tripStartDate={trip.startDate}
        tripEndDate={trip.endDate}
        maxGuests={trip.maxGuests}
      />
      <TripDescription description={trip.description} />
      <TripHighlights highlights={trip.highlights} />
      <TripLocation locationDescription={trip.locationDescription} location={trip.location} />
    </div>
  );
};

export default TripDetails;
