import * as api from '@lp-labs/ascii-slug-normalizer';
import { slugify } from '@lp-labs/ascii-slug-normalizer';
console.log(slugify('Crème brûlée!'));
// @ts-expect-error invalid argument must be rejected by declarations
api.slugify(42);
