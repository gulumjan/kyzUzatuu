"use client";
import { useRef, useState } from "react";
import { config as c } from "@/data/config";
import s from "./sections.module.scss";
export default function Music() {
  const a = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const toggle = () => {
    const el = a.current;
    if (!el) return;
    if (el.paused)
      el.play()
        .then(() => setOn(true))
        .catch(() => {});
    else {
      el.pause();
      setOn(false);
    }
  };
  return (
    <>
      <audio ref={a} src={c.music} loop preload="none" />
      <button
        className={s.music}
        onClick={toggle}
        aria-label={on ? "Музыканы өчүрүү" : "Музыканы күйгүзүү"}
        style={{ opacity: on ? 1 : 0.6 }}
      >
        ♪
      </button>
    </>
  );
}
