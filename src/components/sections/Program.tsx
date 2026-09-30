import { config as c } from "@/data/config";
import Reveal from "./Reveal";
import s from "./sections.module.scss";
export default function Program() {
  return (
    <section className={`${s.sec} ${s.light}`}>
      <Reveal>
        <p className={s.eyebrow2}>
          {c.dateText}, {c.weekday}
        </p>
        <h2 className={s.h2}>Тойдун журушу</h2>
        <ul className={s.tl}>
          {c.program.map((p) => (
            <li key={p.t}>
              <time>{p.t}</time>
              <h3>{p.h}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
