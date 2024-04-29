import type { APIRoute } from "astro";
import { getCollection, getEntryBySlug } from "astro:content";
import fs from "fs/promises";
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";
import removeHTMLTags from "../../utils/removeHTMLTags";

export async function getStaticPaths() {
  const posts = await getCollection("docs");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async function get({ params }) {
  const interData = await fs.readFile(
    "./public/assets/fonts/inter/Inter-Medium.ttf",
  );

  const lockupImage = (
    await fs.readFile(
      "./public/assets/images/open-graph/kinde-docs-lockup-og.png",
    )
  ).toString("base64");

  const post = await getEntryBySlug("docs", params?.slug as string);

  const markup = html`<div
    style="background: #f5f5f5; width: 100%; height: 100%; flex: 1;display: flex; align-items:flex-start; justify-content:flex-start; flex-direction: column; padding: 80px; gap: 160px"
  >
    <div
      style="display:flex;background-image: url('data:image/png;base64,${lockupImage}'); background-size: 233px 42px; width: 233px; height: 42px; background-repeat: no-repeat; background-position: 0; margin-left: 6px;"
    ></div>
    <div
      style="font-size: 72px; text-align: start; font-weight: 500; font-style: normal; line-height: 82px; letter-spacing: -2.16px"
    >
      ${removeHTMLTags(post?.data.title as string)}
    </div>
  </div> `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: interData,
        weight: 500,
      },
    ],
  });

  const png = await sharp(Buffer.from(svg))
    .png({ quality: 100, force: true })
    .toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
