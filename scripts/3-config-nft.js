import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop(
  "0xd60EEcc0c809459a21b8E21b20078FE8743fA319"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Puzzle Piece",
        description: "This NFT will give you access to the Share DAO!",
        image: readFileSync("scripts/assets/Rectangle.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
