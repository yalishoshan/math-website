"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Friendly labels for pages shown in the analytics report
function getPageLabel(pathname: string): string {
  if (pathname === "/") return "דף הבית";
  if (pathname === "/test") return "מבחן מלא";
  if (pathname.startsWith("/topic/")) {
    const slug = pathname.replace("/topic/", "");
    const labels: Record<string, string> = {
      motion: "בעיות תנועה",
      sequences: "סדרות",
      probability: "הסתברות",
      geometry: "גאומטריה",
      trigonometry: "טריגונומטריה",
      "trig-functions": "פונקציות טריגונומטריות",
      "root-functions": "פונקציות שורש",
      optimization: "בעיות קיצון",
    };
    return labels[slug] ?? slug;
  }
  return pathname;
}

export default function PageTracker() {
  const pathname = usePathname();
  const startRef = useRef<number>(Date.now());
  const activeRef = useRef<boolean>(true); // is the tab active?
  const activeStartRef = useRef<number>(Date.now()); // when did current active period start
  const accumulatedRef = useRef<number>(0); // accumulated active seconds before current period

  function sendTime(page: string) {
    // Add current active period to accumulated total
    const activeDuration = activeRef.current
      ? Math.round((Date.now() - activeStartRef.current) / 1000)
      : 0;
    const total = accumulatedRef.current + activeDuration;

    if (total < 3) return; // ignore visits under 3 seconds

    // sendBeacon is fire-and-forget — works even during page unload
    navigator.sendBeacon(
      "/api/analytics/track",
      JSON.stringify({ page: getPageLabel(page), duration: total })
    );
  }

  // Reset counters when navigating to a new page
  useEffect(() => {
    startRef.current = Date.now();
    activeStartRef.current = Date.now();
    accumulatedRef.current = 0;
    activeRef.current = !document.hidden;
  }, [pathname]);

  // Handle visibility changes (tab switching / minimizing)
  useEffect(() => {
    const currentPath = pathname;

    function handleVisibility() {
      if (document.hidden) {
        // Tab became hidden — accumulate active time so far
        if (activeRef.current) {
          accumulatedRef.current += Math.round(
            (Date.now() - activeStartRef.current) / 1000
          );
          activeRef.current = false;
        }
      } else {
        // Tab became visible again — start a new active period
        activeRef.current = true;
        activeStartRef.current = Date.now();
      }
    }

    function handleBeforeUnload() {
      sendTime(currentPath);
    }

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Navigation away — send time for the page we're leaving
      sendTime(currentPath);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
