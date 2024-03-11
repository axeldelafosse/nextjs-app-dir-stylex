"use client";

import {css} from "react-strict-dom";
import {buttonTokens} from "./ButtonTokens.stylex";
import ThemeableButton from "./ThemeableButton";

type Props = Readonly<{}>;

export default function ButtonsDemo(_props: Props) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div {...css.props(styles.container)}>
      <ThemeableButton onClick={onClick}>Vanilla Button</ThemeableButton>

      <ThemeableButton onClick={onClick} style={styles.bordered}>
        Bordered Button
      </ThemeableButton>

      <ThemeableButton onClick={onClick} theme={redTheme}>
        Red Button
      </ThemeableButton>

      <div {...css.props(redTheme)}>
        <ThemeableButton onClick={onClick}>
          Red Button By inheritance
        </ThemeableButton>
      </div>

      <ThemeableButton
        onClick={onClick}
        style={[styles.bordered, styles.greenBorder]}
        theme={redTheme}
      >
        Red - Bordered Button
      </ThemeableButton>
    </div>
  );
}

const redTheme = css.createTheme(buttonTokens, {
  bgColor: "red",
  textColor: "white",
  cornerRadius: "4px",
  paddingBlock: "4px",
  paddingInline: "8px",
});

const styles = css.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 64,
  },
  bordered: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
  },
  greenBorder: {
    borderColor: "green",
  },
});
