"use client";
import { useEffect, useState } from "react";
import { config as c } from "@/data/config";
import Reveal from "./Reveal";
import s from "./sections.module.scss";
const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");
export default function Countdown() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const target = new Date(c.date).getTime();
    const tick = () =>
      setT(Math.max(0, Math.floor((target - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const cells: [number, string][] = [
    [t / 86400, "күн"],
    [(t % 86400) / 3600, "саат"],
    [(t % 3600) / 60, "мүнөт"],
    [t % 60, "секунд"],
  ];
  return (
    <section className={`${s.sec} ${s.light}`}>
      <Reveal>
        <p style={{ fontSize: 15, color: "black" }} className={s.eyebrow}>
          Кутуу ирмемдери
        </p>
        <h2 className={s.h2}>Бактылуу күнгө чейин</h2>
        <div className={s.count}>
          {cells.map(([n, l]) => (
            <div key={l}>
              <b>{pad(n)}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
