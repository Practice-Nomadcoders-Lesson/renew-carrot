"use client";

import { fetchFromAPI } from "@/app/extra/actions";

export default function HackedComponent({}: any) {
  fetchFromAPI();
  return <h1>Hacked</h1>;
}
