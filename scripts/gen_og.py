#!/usr/bin/env python3
"""
Generator gambar OG/thumbnail per artikel blog.

Membaca slug, title, dan category langsung dari src/data/blog.ts,
lalu menghasilkan gambar 1200x630 ke public/blog/og/<slug>.png.

Jalankan: npm run og   (atau: python3 scripts/gen_og.py)
Tambah artikel baru di blog.ts -> jalankan ulang -> gambar otomatis dibuat.
"""
import os
import re
import sys

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    sys.exit("PIL tidak terpasang. Jalankan: pip3 install Pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG_TS = os.path.join(ROOT, "src", "data", "blog.ts")
OUT_DIR = os.path.join(ROOT, "public", "blog", "og")
LOGO = os.path.join(ROOT, "public", "logo-icon.png")

W, H = 1200, 630


def parse_posts(path):
    """Ambil (slug, title, category) per artikel dari blog.ts secara berurutan."""
    text = open(path, encoding="utf-8").read()
    slugs = re.findall(r'slug:\s*"([^"]+)"', text)
    titles = re.findall(r'title:\s*"([^"]+)"', text)
    cats = re.findall(r'category:\s*"([^"]+)"', text)
    if not (len(slugs) == len(titles) == len(cats)):
        sys.exit(
            f"Jumlah field tidak cocok (slug={len(slugs)}, title={len(titles)}, "
            f"category={len(cats)}). Cek format blog.ts."
        )
    return list(zip(slugs, titles, cats))


def font(size, bold=True):
    candidates = (
        ["/System/Library/Fonts/Supplemental/Arial Bold.ttf"]
        if bold
        else ["/System/Library/Fonts/Supplemental/Arial.ttf"]
    ) + ["/System/Library/Fonts/Helvetica.ttc", "/Library/Fonts/Arial.ttf"]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textbbox((0, 0), t, font=fnt)[2] <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def build(slug, title, cat, logo, fonts):
    f_title, f_cat, f_brand, f_dom = fonts
    img = Image.new("RGB", (W, H), "#0b1220")
    d = ImageDraw.Draw(img)
    # gradien biru gelap vertikal
    for y in range(H):
        t = y / H
        d.line(
            [(0, y), (W, y)],
            fill=(int(12 + 19 * t), int(20 + 20 * t), int(40 + 70 * t)),
        )
    # glow blob biru/indigo
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([W - 420, -160, W + 120, 360], fill=(51, 102, 255, 70))
    gd.ellipse([-180, H - 300, 260, H + 140], fill=(79, 70, 229, 55))
    img = Image.alpha_composite(
        img.convert("RGBA"), glow.filter(ImageFilter.GaussianBlur(120))
    ).convert("RGB")
    d = ImageDraw.Draw(img)

    pad = 80
    cat_u = cat.upper()
    cw = d.textbbox((0, 0), cat_u, font=f_cat)[2]
    d.rounded_rectangle([pad, pad, pad + cw + 44, pad + 46], radius=23, fill=(51, 102, 255))
    d.text((pad + 22, pad + 9), cat_u, font=f_cat, fill="white")

    y = 240
    for line in wrap(d, title, f_title, W - 2 * pad):
        d.text((pad, y), line, font=f_title, fill="white")
        y += 72

    if logo:
        img.paste(logo, (pad, H - pad - 64), logo)
    d.text((pad + 80, H - pad - 58), "Kreativita Sinergi", font=f_brand, fill="white")
    d.text((pad + 80, H - pad - 20), "www.kreativitasinergi.com", font=f_dom, fill=(150, 180, 255))

    img.save(os.path.join(OUT_DIR, f"{slug}.png"))


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    posts = parse_posts(BLOG_TS)
    logo = None
    if os.path.exists(LOGO):
        logo = Image.open(LOGO).convert("RGBA").resize((64, 64), Image.LANCZOS)
    fonts = (font(58), font(24), font(28), font(22, bold=False))
    for slug, title, cat in posts:
        build(slug, title, cat, logo, fonts)
    print(f"OK — {len(posts)} gambar OG dibuat di public/blog/og/")


if __name__ == "__main__":
    main()
