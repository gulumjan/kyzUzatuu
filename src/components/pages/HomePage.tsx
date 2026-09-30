import Closing from "../sections/Closing";
import Countdown from "../sections/CountDown";
import Couple from "../sections/Couple";
import HeroSection from "../sections/HeroSection";
import Invite from "../sections/Invite";
import Music from "../sections/Music";
import Program from "../sections/Program";
import Rsvp from "../sections/Rsvp";
import Venue from "../sections/Venue";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <HeroSection />
      <Invite />

      <Couple />
      <Program />
      <Venue />
      <Countdown />
      <Rsvp />
      <Closing />
      <Music />
    </>
  );
}
