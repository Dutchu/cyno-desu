import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Lo } from './Lo/Lo';
import classes from './Logowanie.module.css';

interface Props {
  className?: string;
}
/* @figmaId 0:3 */
export const Logowanie: FC<Props> = memo(function Logowanie(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.background}></div>
      </div>
      <Lo />
    </div>
  );
});
