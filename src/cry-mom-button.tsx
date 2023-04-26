import * as React from "react";
import cryingSoundEffect from "./angry-baby-cry-36152.mp3";
import "./cry-mom-button.css";

const DEFAULT_CLASS_NAME = "cry-mom-button";

export const CryMomButton = React.forwardRef<
  HTMLButtonElement,
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>((props, ref) => {
  const { style, children = "Cry Mom Button", className, ...rest } = props;

  const soundEffect = new Audio(cryingSoundEffect);
  const concatClassName =
    className?.concat(DEFAULT_CLASS_NAME) ?? DEFAULT_CLASS_NAME;

  const handleMouseEnter = () => {
    soundEffect.play();
  };

  const handleMouseLeave = () => {
    soundEffect.currentTime = 0;
    soundEffect.pause();
  };

  return (
    <button
      ref={ref}
      {...rest}
      className={concatClassName}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
});
