import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getYMD } from "../utils";

export const GET: APIRoute = async function get({ params, request }) {
  const { years, months, days } = getYMD(); 

  const robotoData = await fs.readFile(
    "./public/PublicSans-Regular.woff"
  );
  const svg = await satori(
      {
    type: "div",
    props: {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 128,
        fontWeight: 600,
        backgroundColor: "#B22234",
        color: "white",
        paddingLeft: 64 + 64 / 2,
        gap: 24,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              fontSize: 24,
            },
            children: "Trump’s final term ends in",
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              whiteSpace: "pre-line",
              lineHeight: "102%",
              letterSpacing: "-0.025em",
              fontVariantNumeric: "lining-nums tabular-nums",
            },
            children: [
              {
                type: "span",
                props: {
                  children: `${years} years`,
                },
              },
              {
                type: "span",
                props: {
                  children: `${months} months`,
                },
              },
              {
                type: "span",
                props: {
                  children: `${days} days`,
                },
              },
            ],
          },
        },
      ],
    },
  },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Public Sans",
          data: robotoData,
          weight: "normal",
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
