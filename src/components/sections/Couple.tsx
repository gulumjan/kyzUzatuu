import Reveal from "./Reveal";
import s from "./sections.module.scss";

export default function Couple() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(61, 4, 11, 0.45), rgba(61, 4, 11, 0.65)), url('https://i.pinimg.com/1200x/1d/ab/b4/1dabb44bc0554fa04494792a0c6f1bb7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
      className={`${s.sec} ${s.wine}`}
    >
      <div className="orn" />
      <Reveal>
        <p className={s.eyebrow}>Эрке кызыбызды узатабыз</p>
        <p className={s.p}>
          Жүрөгүбүздө кубаныч, көзүбүздө жаш менен ак жол каалайбыз.
        </p>
      </Reveal>
    </section>
  );
}
