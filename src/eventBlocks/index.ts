import { commentEventBlock } from "./commentEventBlock";
import { dataEventBlock } from "./dataEventBlock";
import { fileEventBlock } from "./fileEventBlock";
import { followUpEventBlock } from "./followUpEventBlock";
import { statusEventBlock } from "./statusEventBlock";

export const eventBlocks = [
  fileEventBlock,
  commentEventBlock,
  statusEventBlock,
  dataEventBlock,
  followUpEventBlock,
];
