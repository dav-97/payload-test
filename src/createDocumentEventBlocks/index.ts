import { createDataEventBlock } from "./dataEventBlock";
import { createFileEventBlock } from "./fileEventBlock";
import { createFollowUpEventBlock } from "./followUpEventBlock";
import { createStatusEventBlock } from "./statusEventBlock";

export const createEventBlocks = [
  createFileEventBlock,
  createStatusEventBlock,
  createDataEventBlock,
  createFollowUpEventBlock,
];
