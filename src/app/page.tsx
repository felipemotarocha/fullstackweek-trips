"use client";

import QuickSearch from "./components/QuickSearch";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  );
}
