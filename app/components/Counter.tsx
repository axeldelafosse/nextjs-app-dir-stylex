/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

"use client";

import {css} from "react-strict-dom";
import {spacing, text, globalTokens as $} from "../globalTokens.stylex";
import {colors} from "@stylexjs/open-props/lib/colors.stylex";
import {shadows} from "@stylexjs/open-props/lib/shadows.stylex";
import {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div {...css.props(styles.container)}>
      <button
        {...css.props(styles.button)}
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <div
        {...css.props(
          styles.count,
          (count > 99 || count < -9) && styles.largeNumber
        )}
      >
        {count}
      </div>
      <button
        {...css.props(styles.button)}
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}

const DARK = "@media (prefers-color-scheme: dark)" as const;

const styles = css.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: spacing.md,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.blue7,
    padding: spacing.xxxs,
    fontFamily: $.fontSans,
    gap: spacing.xs,
    boxShadow: shadows.shadow6,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "6rem",
    aspectRatio: 1,
    color: colors.blue7,
    backgroundColor: {
      default: colors.gray3,
      ":hover": colors.gray4,
      [DARK]: {
        default: colors.gray9,
        ":hover": colors.gray8,
      },
    },
    borderWidth: 0,
    borderStyle: "none",
    borderRadius: spacing.xs,
    padding: spacing.xs,
    margin: spacing.xs,
    cursor: "pointer",
    fontSize: text.h2,
    transform: {
      default: null,
      ":hover": "scale(1.025)",
      ":active": "scale(0.975)",
    },
  },
  count: {
    fontSize: text.h2,
    fontWeight: 100,
    color: colors.lime7,
    minWidth: "6rem",
    textAlign: "center",
    fontFamily: $.fontMono,
  },
  largeNumber: {
    fontSize: text.h3,
  },
});
