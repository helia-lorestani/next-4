"use client";
import { Stack } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React from "react";

export default function loading() {
  return (
    <Stack justifyContent="center" alignItems="center">
      <CircularProgress />
      Loading...
    </Stack>
  );
}
