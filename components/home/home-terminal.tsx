"use client";
import {useMediaQuery, useIsMobile} from "@/hooks/use-media-query";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { useEffect, useRef } from "react";
var baseTheme = {
  cursor: '#5af78e',
  foreground: '#eff0eb',
  background: 'rgba(0,0,0,0.6)',
  selection: '#97979b33',
  black: '#282a36',
  brightBlack: '#686868',
  red: '#ff5c57',
  brightRed: '#ff5c57',
  green: '#5af78e',
  brightGreen: '#5af78e',
  yellow: '#f3f99d',
  brightYellow: '#f3f99d',
  blue: '#57c7ff',
  brightBlue: '#57c7ff',
  magenta: '#ff6ac1',
  brightMagenta: '#ff6ac1',
  cyan: '#9aedfe',
  brightCyan: '#9aedfe',
  white: '#f1f1f0',
  brightWhite: '#eff0eb'
};
export default function HomeTerminal() {
  const isTablet = useMediaQuery(1024);
  const isMobile = useIsMobile();
  const xtermRef = useRef<Terminal>();
  const ref = useRef<HTMLDivElement>(null);
  const fitRef = useRef<FitAddon>()
  useEffect(() => {
    xtermRef.current = new Terminal({
      convertEol: true,
      cursorBlink: true, //光标闪烁
      theme: baseTheme,
    });
    return () => {
      // xtermRef.current?.dispose()
    }
  })
  useEffect(() => {
    fitRef.current = new FitAddon();
    return () => {
      fitRef.current?.dispose()
    }
  })
  
  useEffect(() => {
    const xterm = xtermRef.current as Terminal;
    const fitAddon = fitRef.current
    if(xterm && fitAddon) {
      xterm.loadAddon(fitAddon);
      xterm.open(ref.current as HTMLDivElement);
      fitAddon.fit();
    }
    
    xterm.writeln('\x1b[31;1mApps just work Apps just workApps just workApps just workApps just workApps just workApps just workApps just workApps just workApps just work ')
    
    return () => {
      fitAddon?.dispose()
    };
  }, []);
  
  useEffect(() => {
    const xterm = xtermRef.current as Terminal;
    // xterm.writeln(
    //   [
    //     "    Xterm.js is the frontend component that powers many terminals including",
    //     "                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!",
    //     "",
    //     " ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐",
    //     " │                                                                            │",
    //     " │  \x1b[31;1mApps just work                         \x1b[32mPerformance\x1b[0m                        │",
    //     " │   Xterm.js works with most terminal      Xterm.js is fast and includes an  │",
    //     " │   apps like bash, vim and tmux           optional \x1b[3mWebGL renderer\x1b[0m           │",
    //     " │                                                                            │",
    //     " │  \x1b[33;1mAccessible                             \x1b[34mSelf-contained\x1b[0m                     │",
    //     " │   A screen reader mode is available      Zero external dependencies        │",
    //     " │                                                                            │",
    //     " │  \x1b[35;1mUnicode support                        \x1b[36mAnd much more...\x1b[0m                   │",
    //     " │   Supports CJK 語 and emoji \u2764\ufe0f            \x1b[3mLinks\x1b[0m, \x1b[3mthemes\x1b[0m, \x1b[3maddons\x1b[0m,            │",
    //     " │                                          \x1b[3mtyped API\x1b[0m, \x1b[3mdecorations\x1b[0m            │",
    //     " │                                                                            │",
    //     " └────────────────────────────────────────────────────────────────────────────┘",
    //     "",
    //   ].join("\n\r")
    // );
    var command = "";
    const xtermOnData = xterm.onData((e) => {
      switch (e) {
        case "\u007F": // Backspace (DEL)
          // Do not delete the prompt
          if (xterm._core.buffer.x > 2) {
            xterm.write("\b \b");
            if (command.length > 0) {
              command = command.slice(0, command.length - 1);
            }
          }
          break;
        default: // Print all other characters for demo
          if (
            (e >= String.fromCharCode(0x20) &&
              e <= String.fromCharCode(0x7e)) ||
            e >= "\u00a0"
          ) {
            command += e;
            xterm.write(e);
          }
      }
    });
    return () => {
      xtermOnData.dispose()
    }
  })

  useEffect(() => {
    console.log(`isTablet${isTablet},isMobile${isMobile}`);
    fitRef.current?.fit()
  }, [isTablet, isMobile])
  return <div className="w-full h-full" ref={ref} ></div>;
}
