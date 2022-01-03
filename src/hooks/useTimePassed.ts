import React, { useState } from "react";

export const useTimePassed = (date: Date): number => {
  const dateAddPost = new Date(date);
  const dateNow = new Date();
  const timePassed = Math.ceil(
    Math.abs(dateNow.getTime() - dateAddPost.getTime()) / (1000 * 3600)
  );

  return timePassed;
};
