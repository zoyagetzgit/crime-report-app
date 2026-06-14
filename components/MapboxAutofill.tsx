"use client";

import { AddressAutofill } from "@mapbox/search-js-react";
import type { ReactElement } from "react";

interface MapboxAutofillProps {
  children: ReactElement;
}

export default function MapboxAutofill({
  children,
}: MapboxAutofillProps) {
  return (
    <AddressAutofill
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""}
    >
      {children}
    </AddressAutofill>
  );
}