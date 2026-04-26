import { motion, type HTMLMotionProps } from "framer-motion";

import happyChibi from "@/assets/happy_chibi.png";
import laptopChibi from "@/assets/laptop_chibi.png";
import lookingChibi from "@/assets/looking_chibi.png";
import pointingChibi from "@/assets/pointing_chibi.png";
import standingChibi from "@/assets/standing_chibi.png";
import thinkingChibi from "@/assets/thinking_chibi.png";
import walkingChibi from "@/assets/walking_chibi.png";
import wavingChibi from "@/assets/waving_chibi.png";
import { cx } from "@/lib/utils";

export type MascotPose =
  | "standing"
  | "waving"
  | "laptop"
  | "pointing"
  | "thinking"
  | "happy"
  | "celebrate"
  | "walking"
  | "looking"
  | "calm";

type MascotProps = Omit<HTMLMotionProps<"img">, "alt" | "children" | "src"> & {
  pose: MascotPose;
  label?: string;
  decorative?: boolean;
};

const poseImage: Record<MascotPose, string> = {
  standing: standingChibi,
  waving: wavingChibi,
  laptop: laptopChibi,
  pointing: pointingChibi,
  thinking: thinkingChibi,
  happy: happyChibi,
  celebrate: happyChibi,
  walking: walkingChibi,
  looking: lookingChibi,
  calm: lookingChibi,
};

const poseLabel: Record<MascotPose, string> = {
  standing: "John Rey chibi mascot standing",
  waving: "John Rey chibi mascot waving",
  laptop: "John Rey chibi mascot working on a laptop",
  pointing: "John Rey chibi mascot pointing",
  thinking: "John Rey chibi mascot thinking",
  happy: "John Rey chibi mascot happy",
  celebrate: "John Rey chibi mascot celebrating",
  walking: "John Rey chibi mascot walking",
  looking: "John Rey chibi mascot looking up",
  calm: "John Rey chibi mascot looking up",
};

export function Mascot({
  pose,
  label,
  decorative = false,
  className,
  decoding = "async",
  loading,
  ...props
}: MascotProps) {
  return (
    <motion.img
      alt={decorative ? "" : label ?? poseLabel[pose]}
      aria-hidden={decorative || undefined}
      className={cx(
        "mascot-cutout aspect-[1/1.18] select-none object-contain",
        className,
      )}
      decoding={decoding}
      draggable={false}
      loading={loading ?? (pose === "waving" ? "eager" : "lazy")}
      src={poseImage[pose]}
      {...props}
    />
  );
}
