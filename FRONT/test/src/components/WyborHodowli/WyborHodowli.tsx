import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './WyborHodowli.module.css';

interface Props {
  className?: string;
}
/* @figmaId 15:2 */
export const WyborHodowli: FC<Props> = memo(function WyborHodowli(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._6a6edb5a4f9ae95e5304c1006696dd}></div>
      <div className={classes.rectangleButton}></div>
      <div className={classes.dodajHodowle}>Dodaj hodowle</div>
      <div className={classes.lubDodajNowaHodowle}>Lub dodaj nową hodowle</div>
      <div className={classes.rectangleButton2}></div>
      <div className={classes.szukaj}>Szukaj</div>
      <div className={classes.podajPrzydomekHodowlanyHodowli}>
        Podaj przydomek hodowlany hodowli którą chcesz zarządzać
      </div>
      <div className={classes.rectangle}></div>
      <div className={classes.przydomekHodowlany}>Przydomek hodowlany</div>
      <div className={classes.lock}>
        <div className={classes.icons8Search5001}></div>
      </div>
      <div className={classes.dogecoinLogo2}></div>
      <div className={classes.cynoDesu}>Cyno-desu</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.wyloguj}>Wyloguj</div>
    </div>
  );
});
