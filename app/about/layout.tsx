import {css} from "react-strict-dom";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <div {...css.props(styles.container)}>{children}</div>;
}

const styles = css.create({
  container: {
    width: "100%",
    maxWidth: 768,
    marginInline: "auto",
  },
});
