import {css} from "react-strict-dom";
import Card from "./Card";
import {globalTokens as $, spacing, text} from "./globalTokens.stylex";
import ButtonsDemo from "./components/ButtonsDemo";
import Counter from "./components/Counter";

const HOMEPAGE = "http://stylex-docusaurus.vercel.app";

export default function Home() {
  return (
    <main {...css.props(s.main)}>
      <div {...css.props(s.description)}>
        <p {...css.props(s.descP)}>
          Get started by editing&nbsp;
          <code {...css.props(s.code)}>app/page.tsx</code>
        </p>
      </div>
      <div {...css.props(s.hero)}>
        <h1 {...css.props(s.h1)}>
          Next.js App Dir<span {...css.props(s.emoji)}>♥️</span>️StyleX
        </h1>
        <Counter />
      </div>
      <ButtonsDemo />

      <div {...css.props(s.grid)}>
        <Card
          href={`${HOMEPAGE}/docs/learn/`}
          title="Docs"
          body="Learn how to use StyleX to build UIs"
        />
        <Card
          href={`${HOMEPAGE}/docs/api/`}
          title="API"
          body="Browse through the StyleX API reference"
        />
        <Card
          href={`${HOMEPAGE}/playground/`}
          title="Playground"
          body="Playing with StyleX and look at look at the compile outputs"
        />
        <Card
          href="https://github.com/nmn/nextjs-app-dir-stylex"
          title="Templates"
          body="Get started with a NextJS+StyleX project."
        />
      </div>
    </main>
  );
}

const MEDIA_MOBILE: "@media (max-width: 700px)" = "@media (max-width: 700px)";
const MEDIA_TABLET: "@media (min-width: 701px) and (max-width: 1120px)" =
  "@media (min-width: 701px) and (max-width: 1120px)";

const bgImage = `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`;
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`;
const xBorderBottomColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`;

const s = css.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    paddingTop: spacing.xxl,
    paddingBottom: {
      default: spacing.xxl,
      [MEDIA_MOBILE]: spacing.md,
    },
  },
  hero: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: spacing.xl,
  },
  h1: {
    fontSize: text.h1,
    lineHeight: 1,
    fontFamily: $.fontSans,
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: spacing.md,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
  },
  emoji: {
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [MEDIA_MOBILE]: spacing.xxxs,
    },
  },
  description: {
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: text.sm,
    maxWidth: $.maxWidth,
    width: "100%",
    zIndex: 2,
    fontFamily: $.fontMono,
  },
  descLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xxs,
    padding: {[MEDIA_MOBILE]: spacing.sm},
  },
  descP: {
    display: {[MEDIA_MOBILE]: "flex"},
    position: {
      default: "relative",
      [MEDIA_MOBILE]: "fixed",
    },
    justifyContent: {[MEDIA_MOBILE]: "center"},
    alignItems: {[MEDIA_MOBILE]: "center"},
    width: {[MEDIA_MOBILE]: "100%"},
    margin: 0,
    paddingInline: spacing.sm,
    paddingTop: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.lg,
    },
    paddingBottom: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.md,
    },
    backgroundColor: $.calloutRGB50,
    backgroundImage: {
      default: null,
      [MEDIA_MOBILE]: bgImage,
    },
    borderWidth: {
      default: "1px",
      [MEDIA_MOBILE]: "0",
    },
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderBottomColor: {
      default: null,
      [MEDIA_MOBILE]: xBorderBottomColor,
    },
    borderRadius: {
      default: spacing.xs,
      [MEDIA_MOBILE]: 0,
    },
    inset: {[MEDIA_MOBILE]: "0 0 auto"},
  },
  code: {
    fontWeight: 700,
    fontFamily: $.fontMono,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [MEDIA_MOBILE]: "1fr",
      [MEDIA_TABLET]: "repeat(2, 50%)",
    },
    width: $.maxWidth,
    maxWidth: {
      default: "100%",
      [MEDIA_MOBILE]: 320,
    },
    textAlign: {[MEDIA_MOBILE]: "center"},
  },
});
