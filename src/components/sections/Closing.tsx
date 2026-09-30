import Reveal from "./Reveal";
import s from "./sections.module.scss";
export default function Closing() {
  return (
    <section className={`${s.sec} ${s.light}`}>
      <Reveal>
        <div className="orn" />
        <h2 className={s.h2} style={{ color: "var(--wine)" }}>
          Келгениңиз үчүн рахмат!
        </h2>
        <p className={s.p}>
          Сиздердин катышууңуз биздин тойдун көркү. Ак тилегиңиз үчүн терең
          ыраазычылык билдиребиз. Сиздерди чыдамсыздык менен күтөбүз!
        </p>
        <div className={s.footer_names}>Шумкар &amp; Миргул</div>
        <div className="orn" />
      </Reveal>
    </section>
  );
}
