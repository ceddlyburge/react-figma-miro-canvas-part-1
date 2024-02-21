import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { useState } from "react";
import "./App.css";
import { Canvas } from "./Canvas";

export type Card = {
  id: UniqueIdentifier;
  coordinates: Coordinates;
  text: string;
};

export const App = () => {
  // store cards and their position on the canvas
  const [cards, setCards] = useState<Card[]>([
    { id: "Hello", coordinates: { x: 0, y: 0 }, text: "Hello" },
  ]);

  return <Canvas cards={cards} setCards={setCards} />;
};
