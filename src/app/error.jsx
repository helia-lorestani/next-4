"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

function error({ error, reset }) {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography mt={10}>{error.message}</Typography>
      <button onClick={() => reset()}>reset</button>
    </Stack>
  );
}

export default error;
