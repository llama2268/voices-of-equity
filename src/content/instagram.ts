/**
 * The Instagram wall on /what-we-do/impact.
 *
 * These are the real posts from @voices.of.equity, listed newest first.
 *
 * ── How it renders ───────────────────────────────────────────────────
 * Two modes, chosen automatically:
 *
 *   • If EVERY post below has an `image`, the wall renders as a grid of
 *     clean square tiles — the look on cancerkidsfirst.org — with the
 *     post artwork filling each tile.
 *
 *   • Otherwise it renders Instagram's own embeds, which pull the live
 *     post straight from Instagram. Nothing to maintain, but each tile
 *     carries Instagram's own header and chrome, so it reads as a row of
 *     Instagram cards rather than a clean grid.
 *
 * ── To get the tile look ─────────────────────────────────────────────
 * Save each post's artwork into  public/instagram/  and add the path as
 * `image` below. Square exports look best; the grid crops to 1:1 anyway.
 * The `alt` line is what a screen reader announces — describe the image
 * rather than repeating the caption.
 *
 * ── To make it update itself ─────────────────────────────────────────
 * A feed service (Behold, EmbedSocial, LightWidget) connects to the
 * account and keeps the tiles current with no file edits. It needs an
 * account connected to @voices.of.equity, and gives the tile look
 * without anybody saving images.
 */

export const INSTAGRAM_HANDLE = 'voices.of.equity';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export interface InstagramPost {
  /** Shortcode from the post URL: instagram.com/p/<code>/ */
  code: string;
  /** 'p' for a feed post, 'reel' for a reel */
  kind: 'p' | 'reel';
  /** Shown on hover in tile mode; also the link's accessible name */
  caption: string;
  /** Optional artwork in /public — supplying it for every post switches
   *  the wall from embeds to square tiles. */
  image?: string;
  /** Describes the artwork for screen readers. Required alongside image. */
  alt?: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    code: 'Db8clV-Dkfm',
    kind: 'p',
    caption: 'VoX Equity Think Tank — student-led health equity research',
  },
  {
    code: 'DbZOyQGiZyq',
    kind: 'p',
    caption: 'August 2026 leadership onboarding',
  },
  {
    code: 'DaiWjiUjlhK',
    kind: 'p',
    caption: 'Homelessness webinar series with NYU Langone Health',
  },
  {
    code: 'DaIfa2oumRA',
    kind: 'reel',
    caption: 'Medical mistrust as a barrier to health equity',
  },
  {
    code: 'DZac9yRu-Cr',
    kind: 'reel',
    caption: 'B.A.D. — Cameron’s story',
  },
  {
    code: 'DZaQpBpO9TM',
    kind: 'reel',
    caption: 'Our leaders on what accessible healthcare means',
  },
  {
    code: 'DZXwvQxOtZ9',
    kind: 'reel',
    caption: 'Maternal health disparities',
  },
  {
    code: 'DZXj0fKOGp3',
    kind: 'reel',
    caption: 'Why our student leaders got involved',
  },
  {
    code: 'DZVcaF_pQI-',
    kind: 'reel',
    caption: 'How would you define health equity?',
  },
];

export const postUrl = (p: InstagramPost) =>
  `https://www.instagram.com/${p.kind}/${p.code}/`;

/** Tile mode needs artwork for every post; otherwise we embed. */
export const hasArtworkForEveryPost = instagramPosts.every((p) => p.image);
