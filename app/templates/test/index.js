import test from 'ava';
import 'babel-core/register';

import <%= camelModuleName %> from '../src/lib/';

test('<%= camelModuleName %>', t => {
  t.is(1, 1);
});
