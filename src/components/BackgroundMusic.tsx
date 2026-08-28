import { useEffect, useRef } from "react";
import songUrl from "@/Beyoncé - Love On Top (backsound).mp3";

const VOLUME = 0.12;

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = "auto";
    audioRef.current = audio;

    const tryPlay = () => {
      if (startedRef.current) return;
      const p = audio.play();
      if (p) {
        p.then(() => {
          startedRef.current = true;
          window.removeEventListener("pointerdown", onInteract);
          window.removeEventListener("keydown", onInteract);
          window.removeEventListener("touchstart", onInteract);
        }).catch(() => {});
      }
    };

    const onInteract = () => tryPlay();

    tryPlay();

    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);
    window.addEventListener("touchstart", onInteract);

    return () => {
      audio.pause();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
  }, []);

  return null;
}
