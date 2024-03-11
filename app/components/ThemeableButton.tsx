import {css} from "react-strict-dom";

import "./ButtonTokens.stylex";
import {buttonTokens} from "./ButtonTokens.stylex";

type Props = Readonly<{
  onClick: () => void;
  children: React.ReactNode;
  // for Overrides
  style?: css.StyleXStyles;
  theme?: css.Theme<typeof buttonTokens>;
  variant?: "primary" | "danger";
  em?: boolean;
}>;

export default function Card({
  onClick,
  children,
  style,
  theme,
  variant,
  em = false,
}: Props) {
  return (
    <button
      {...css.props(
        theme,
        styles.base,
        em && styles.emphasise,
        variant && variantStyles[variant],
        style
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const styles = css.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderStyle: "none",
    backgroundColor: buttonTokens.bgColor,
    color: buttonTokens.textColor,
    borderRadius: buttonTokens.cornerRadius,
    paddingBlock: buttonTokens.paddingBlock,
    paddingInline: buttonTokens.paddingInline,
  },
  emphasise: {
    transform: "scale(1.1)",
  },
});

const variantStyles = css.create({
  danger: {
    backgroundColor: "red",
    color: "white",
  },
  primary: {
    fontWeight: "bold",
  },
});
