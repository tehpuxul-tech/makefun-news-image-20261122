// News-image entry for 22 November 2026 (Node 22, standard library only).
// The judged image is the entry.png beside this file: this program copies
// it to the output folder the grader provides. The gate takes a whole PNG
// or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
