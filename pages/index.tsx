import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";

import {
  IconButton,
  PrimaryButton,
  SecondaryButton,
  TextButton,
} from "../components/buttons/buttons.styled";
import { MoonIcon } from "../assets/icons/moon.icon";
import { SunIcon } from "../assets/icons/sun.icon";

export default function Home() {
  const [ismounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useTheme is only accessible after the first render
  useEffect(() => setIsMounted(true), []);

  return (
    <div>
      <Head>
        <title>Rafik Shmoury</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ismounted && (
        <IconButton
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          icon={resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      )}

      <PrimaryButton title="hello" />
      <SecondaryButton title="second" />
      <TextButton title="meow" />
    </div>
  );
}
