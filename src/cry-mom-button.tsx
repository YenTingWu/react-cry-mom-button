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

  const soundEffect = React.useMemo(() => new Audio(cryingSoundEffect), []);
  const concatClassName =
    className?.concat(DEFAULT_CLASS_NAME) ?? DEFAULT_CLASS_NAME;

  const handleMouseEnter = React.useCallback(() => {
    soundEffect.play();
  }, [soundEffect]);

  const handleMouseLeave = React.useCallback(() => {
    soundEffect.currentTime = 0;
    soundEffect.pause();
  }, [soundEffect]);

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
