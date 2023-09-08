import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Lo.module.css';
import { LockIcon } from './LockIcon';
import { UserIcon } from './UserIcon';

interface Props {
  className?: string;
}
/* @figmaId 12:4 */
export const Lo: FC<Props> = memo(function Lo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.rectangle}></div>
        <input type='text' name='user' className={classes.nazwaUzytkownika} placeholder="Nazwa użytkownika"/>
        <div className={classes.user}>
          <UserIcon className={classes.icon} />
        </div>
        <div className={classes.rectangle2}></div>
        <input type='password' name='password' className={classes.hasO} placeholder="Hasło"/>
        <div className={classes.lock}>
          <LockIcon className={classes.icon2} />
        </div>
        <button className={classes.rectangleButton}>
          <div className={classes.zalogujSie}>Zaloguj się</div>
        </button>
        <div className={classes.dogecoinLogo1}></div>
        <div className={classes.cynoDesu}>Cyno-desu</div>
    </div>
  );
});
