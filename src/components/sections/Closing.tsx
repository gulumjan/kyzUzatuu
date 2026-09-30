import Reveal from "./Reveal";
import s from "./sections.module.scss";
export default function Closing() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url('https://i.pinimg.com/736x/a1/35/8e/a1358e9e452fb335129082142256fcc7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        color: "white",
      }}
      className={`${s.sec} ${s.light}`}
    >
      <Reveal>
        <div className="orn" />
        <h2 className={s.h2}>Келгениңиз үчүн рахмат!</h2>
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
