import { config as c } from "@/data/config";
import Reveal from "./Reveal";
import s from "./sections.module.scss";
export default function Invite() {
  return (
    <section id="invite" className={`${s.sec} ${s.light}`}>
      <Reveal>
        <h2 className={s.h2}>Урматтуу коноктор!</h2>
        <p className={s.p}>Сиздерди сүйүктүү кызыбыз</p>
        <div className={s.script}>{c.bride}</div>
        <p className={s.p}>
          узатуу тоюна арналган салтанаттуу ак дасторконубуздун кадырлуу коногу
          болууга чакырабыз!
        </p>
        <p className={s.p}>
          Кызыбыздын жаңы турмушка аттанып жаткан маанилүү күнүндө кубанычыбызды
          тең бөлүшүп, ак батаңызды берип, төрүбүздүн көркүн ачып кетсеңиздер
          биз үчүн чоң сыймык болот.
        </p>
      </Reveal>
    </section>
  );
}
