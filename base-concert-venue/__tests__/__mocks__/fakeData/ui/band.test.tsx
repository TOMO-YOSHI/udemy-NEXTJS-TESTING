import { render, screen } from '@testing-library/react';

import { readFakeData } from "@/__tests__/__mocks__/fakeData/"

import BandComponent from "@/pages/bands/[bandId]";

test("band component dispaly correct band informantion", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {name: /the wandering bunnies/i});
  expect(heading).toBeInTheDocument();
});

test("band component displays error message", async () => {
  render(<BandComponent band={null} error={"DB is disconnected."} />);

  const error = screen.getByRole("heading", { name: /db is disconnected./i});
  expect(error).toBeInTheDocument();
});