import { useEffect, useState } from "react";

import helloAnimated from "@/assets/mascot/hello-mascot.webp";
import helloFallback from "@/assets/mascot/hello-mascot.gif";
import helloPoster from "@/assets/mascot/hello-mascot-poster.webp";
import { cx } from "@/lib/utils";

type HeroMascotAnimationProps = {
  className?: string;
  label?: string;
};

const prefersReducedMotion = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export function HeroMascotAnimation({
  className,
  label = "John Rey chibi mascot waving hello",
}: HeroMascotAnimationProps) {
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  if (reduceMotion) {
    return (
      <img
        src={helloPoster}
        alt={label}
        width={720}
        height={960}
        decoding="async"
        draggable={false}
        className={cx("select-none object-contain", className)}
      />
    );
  }

  return (
    <picture className="contents">
      <source srcSet={helloAnimated} type="image/webp" />
      <img
        src={helloFallback}
        alt={label}
        width={540}
        height={720}
        decoding="async"
        draggable={false}
        loading="eager"
        className={cx("select-none object-contain", className)}
      />
    </picture>
  );
}
