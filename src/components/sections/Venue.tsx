import { config as c } from "@/data/config";
import Reveal from "./Reveal";
import s from "./sections.module.scss";

export default function Venue() {
  return (
    <section className={`${s.sec} ${s.wine} ${s.venueSection}`}>
      <Reveal>
        <div className={s.venue}>
          <div className={s.venueOrn}>✦</div>

          <p className={s.eyebrow}>Биздин майрамдын дареги</p>

          <h2 className={s.h2}>Той өтүүчү жай</h2>

          <div className={s.venueCard}>
            <p className={s.venueName}>{c.venue}</p>
            <p className={s.venueAddress}>{c.address}</p>
          </div>

          <a
            className={s.btn}
            target="_blank"
            rel="noopener noreferrer"
            href="https://2gis.kg/bishkek/geo/70000001099412867/75.758773,42.216481"
          >
            <span>Картадан көрүү</span>
            <span>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
