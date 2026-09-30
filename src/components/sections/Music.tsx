"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { config as c } from "@/data/config";
import s from "./sections.module.scss";
import play from "../../../public/play.svg";
import stop from "../../../public/stop.svg";

export default function Music() {
  const a = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = a.current;
    if (!el) return;

    const events = ["click", "keydown", "touchend", "pointerup"] as const;

    const removeListeners = () => {
      events.forEach((ev) => window.removeEventListener(ev, startOnGesture));
    };

    // Запуск после первого действия пользователя (если автозапуск заблокирован)
    function startOnGesture() {
      el!
        .play()
        .then(removeListeners)
        .catch(() => {});
    }

    // 1) Пробуем запустить сразу
    el.play().catch(() => {
      // 2) Если заблокировано, ждём первое действие пользователя
      events.forEach((ev) => window.addEventListener(ev, startOnGesture));
    });

    return removeListeners;
  }, []);

  const toggle = () => {
    const el = a.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <div className={s.musicButton}>
      <audio
        ref={a}
        src={c.music}
        loop
        preload="auto"
        onPlay={() => setOn(true)}
        onPause={() => setOn(false)}
      />
      <button
        className={s.music}
        onClick={toggle}
        aria-label={on ? "Музыканы өчүрүү" : "Музыканы күйгүзүү"}
        style={{ opacity: on ? 1 : 0.6 }}
      >
        <Image src={on ? play : stop} alt="" width={24} height={24} />
      </button>
    </div>
  );
}
