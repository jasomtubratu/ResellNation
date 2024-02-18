"use client";

import { useEffect, useState } from "react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import affiliateLinks from "@/public/affiliate.json";

export default function Discord() {
  const [discordinvite, setDiscordInvite] = useState("https://discord.gg/58rH5A2E7d");

  const getCustomDiscordLink = () => {
    const affiliateCookie = localStorage.getItem("af");

    if (affiliateCookie) {
      const affiliateLink = affiliateLinks.find((link) => link.name === affiliateCookie);

      if (affiliateLink) {
        setDiscordInvite(affiliateLink.link);
        window.location.href = affiliateLink.link;
      } else {
        setDiscordInvite("https://discord.gg/58rH5A2E7d");
        window.location.href = "https://discord.gg/58rH5A2E7d";
      }
    } else {
      setDiscordInvite("https://discord.gg/58rH5A2E7d");
      window.location.href = "https://discord.gg/58rH5A2E7d";
    }
  };

  useEffect(() => {
    getCustomDiscordLink();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Redirecting you into&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Discord...&nbsp;</h1>
          <br />

          <h2 className={subtitle({ class: "mt-4" })}>Please wait a second...</h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            href={discordinvite}
            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          >
            Are you stuck?
          </Link>
        </div>
      </section>
    </>
  );
}
