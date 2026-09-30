"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { config as c } from "@/data/config";
import Reveal from "./Reveal";
import s from "./sections.module.scss";
import axios from "axios";

interface ITelegramSmsBot {
  name: string;
  attending: "yes" | "no";
  maxGuests: number;
  wish: string;
}

export default function Rsvp() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ITelegramSmsBot>({
    defaultValues: {
      name: "",
      attending: "yes",
      maxGuests: 1,
      wish: "",
    },
  });

  const attending = watch("attending");
  const maxGuests = watch("maxGuests");

  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  const messageModel = (data: ITelegramSmsBot) => {
    const isAttending = data.attending === "yes";

    return `${isAttending ? "✉️ Новый гость на Кыз Узатуу:" : "❌ Гость не сможет прийти:"}

Имя: ${data.name}
Количество гостей: ${isAttending ? data.maxGuests : 0}
Пожелание: ${data.wish || "Нет"}`;
  };

  const onSubmit: SubmitHandler<ITelegramSmsBot> = async (data) => {
    try {
      setStatus("idle");

      await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      });

      setStatus("ok");
      reset();
    } catch (error) {
      console.error("Telegram send error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="rsvp" className={`${s.sec} ${s.wine} ${s.rsvpSection}`}>
      <Reveal>
        <p className={s.eyebrow2}>
          Сураныч келериңизди 4-октябрга чейин билдирип коюңуз
        </p>
        <h2 className={s.h2}>Биз менен бирге болосузбу?</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${s.form} ${s.rsvpForm}`}
          noValidate
        >
          <div>
            <label htmlFor="name">Сиздин атыңыз</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              placeholder="Мисалы, Алия "
              {...register("name", {
                required: "Атыңызды жазыңыз",
                minLength: { value: 2, message: "Аты өтө кыска" },
                maxLength: { value: 80, message: "Аты өтө узун" },
              })}
            />
            {errors.name && <p className={s.err}>{errors.name.message}</p>}
          </div>

          <div className={s.choice}>
            <span className={s.lbl}>Тойго келе аласызбы?</span>
            <label>
              <input type="radio" value="yes" {...register("attending")} />
              Кубануу менен барам
            </label>
            <label>
              <input type="radio" value="no" {...register("attending")} />
              Тилекке каршы, бара албайм
            </label>
          </div>

          {attending === "yes" && (
            <div>
              <span className={s.lbl}>
                Коноктордун саны (сизди кошкондо, эң көп {c.maxGuests})
              </span>
              <div className={s.stepper}>
                <button
                  type="button"
                  aria-label="Азайтуу"
                  onClick={() =>
                    setValue("maxGuests", Math.max(1, maxGuests - 1))
                  }
                >
                  −
                </button>
                <output>{maxGuests}</output>
                <button
                  type="button"
                  aria-label="Көбөйтүү"
                  onClick={() =>
                    setValue("maxGuests", Math.min(c.maxGuests, maxGuests + 1))
                  }
                >
                  +
                </button>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="wish">Тилек (милдеттүү эмес)</label>
            <textarea
              id="wish"
              rows={2}
              maxLength={500}
              {...register("wish", { maxLength: 500 })}
            />
          </div>

          <p className={s.msg} role="status">
            {status === "ok" && "Рахмат! Жообуңуз кабыл алынды ✦"}
            {status === "error" && "Жөнөтүлбөй калды. Кайра аракет кылыңыз."}
          </p>

          <button className={s.btn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Жөнөтүлүүдө…" : "Жоопту жөнөтүү"}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
