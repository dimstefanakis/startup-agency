"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useTheme as useNextTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { CssBaseline } from "@nextui-org/react";
import { useServerInsertedHTML } from "next/navigation";
import { createTheme, useTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
