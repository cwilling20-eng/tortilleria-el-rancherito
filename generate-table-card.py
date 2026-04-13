"""
Generate a print-ready table tent card PDF for Tortilleria El Rancherito.
4" x 6" with 0.125" bleed on all edges.
"""

from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image
import os

# ── Dimensions ──
BLEED = 0.125 * inch
TRIM_W = 4 * inch
TRIM_H = 6 * inch
DOC_W = TRIM_W + 2 * BLEED
DOC_H = TRIM_H + 2 * BLEED

# ── Colors ──
BLACK = HexColor('#1A1A1A')
ORANGE = HexColor('#FF8C42')
WHITE = HexColor('#FFFFFF')
CREAM = HexColor('#F5F0E8')
DARK_BROWN = HexColor('#2A2420')

# ── Paths ──
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOGO_PATH = os.path.join(SCRIPT_DIR, 'public', 'logos', 'logo-circle.png')
OUTPUT_PATH = os.path.join(SCRIPT_DIR, 'table-card.pdf')

# ── Font registration ──
# Try to register Bebas Neue and Montserrat if available, fall back to Helvetica
FONT_DISPLAY = 'Helvetica-Bold'
FONT_BODY = 'Helvetica'
FONT_BODY_BOLD = 'Helvetica-Bold'

# Check common Windows font paths for our brand fonts
font_dirs = [
    os.path.expanduser('~/AppData/Local/Microsoft/Windows/Fonts'),
    'C:/Windows/Fonts',
]

for font_dir in font_dirs:
    bebas_path = os.path.join(font_dir, 'BebasNeue-Regular.ttf')
    if os.path.exists(bebas_path):
        pdfmetrics.registerFont(TTFont('BebasNeue', bebas_path))
        FONT_DISPLAY = 'BebasNeue'
        break

for font_dir in font_dirs:
    mont_path = os.path.join(font_dir, 'Montserrat-Regular.ttf')
    mont_bold_path = os.path.join(font_dir, 'Montserrat-Bold.ttf')
    mont_semi_path = os.path.join(font_dir, 'Montserrat-SemiBold.ttf')
    if os.path.exists(mont_path):
        pdfmetrics.registerFont(TTFont('Montserrat', mont_path))
        FONT_BODY = 'Montserrat'
    if os.path.exists(mont_bold_path):
        pdfmetrics.registerFont(TTFont('MontserratBold', mont_bold_path))
        FONT_BODY_BOLD = 'MontserratBold'
    elif os.path.exists(mont_semi_path):
        pdfmetrics.registerFont(TTFont('MontserratBold', mont_semi_path))
        FONT_BODY_BOLD = 'MontserratBold'
    if FONT_BODY == 'Montserrat':
        break


def draw_rounded_rect(c, x, y, w, h, r, fill=None, stroke=None, stroke_width=0.5):
    """Draw a rounded rectangle."""
    p = c.beginPath()
    p.moveTo(x + r, y)
    p.lineTo(x + w - r, y)
    p.arcTo(x + w - r, y, x + w, y + r, r)
    p.lineTo(x + w, y + h - r)
    p.arcTo(x + w, y + h - r, x + w - r, y + h, r)
    p.lineTo(x + r, y + h)
    p.arcTo(x + r, y + h, x, y + h - r, r)
    p.lineTo(x, y + r)
    p.arcTo(x, y + r, x + r, y, r)
    p.close()
    if fill:
        c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(stroke_width)
    if fill and stroke:
        c.drawPath(p, fill=1, stroke=1)
    elif fill:
        c.drawPath(p, fill=1, stroke=0)
    elif stroke:
        c.drawPath(p, fill=0, stroke=1)


def draw_text_centered(c, text, y, font, size, color):
    """Draw text centered on the trim area."""
    c.setFont(font, size)
    c.setFillColor(color)
    text_w = c.stringWidth(text, font, size)
    x = BLEED + (TRIM_W - text_w) / 2
    c.drawString(x, y, text)


def draw_social_icon_facebook(c, cx, cy, size):
    """Draw a minimal Facebook 'f' icon."""
    r = size / 2
    # Circle background
    draw_rounded_rect(c, cx - r, cy - r, size, size, r, fill=ORANGE)
    # Letter f
    c.setFillColor(WHITE)
    c.setFont(FONT_BODY_BOLD, size * 0.55)
    fw = c.stringWidth('f', FONT_BODY_BOLD, size * 0.55)
    c.drawString(cx - fw / 2 + 0.5, cy - size * 0.2, 'f')


def draw_social_icon_instagram(c, cx, cy, size):
    """Draw a minimal Instagram icon (rounded square + circle)."""
    r = size * 0.22
    half = size / 2
    # Rounded square
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.2)
    draw_rounded_rect(c, cx - half, cy - half, size, size, r, stroke=ORANGE, stroke_width=1.2)
    # Inner circle
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.2)
    c.circle(cx, cy, size * 0.25, stroke=1, fill=0)
    # Dot top-right
    c.setFillColor(ORANGE)
    c.circle(cx + size * 0.27, cy + size * 0.27, 1.2, stroke=0, fill=1)


def draw_social_icon_tiktok(c, cx, cy, size):
    """Draw a minimal TikTok music note icon."""
    r = size / 2
    # Circle outline
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.2)
    c.circle(cx, cy, r, stroke=1, fill=0)
    # Musical note symbol
    c.setFillColor(ORANGE)
    c.setFont(FONT_BODY_BOLD, size * 0.45)
    tw = c.stringWidth('♪', FONT_BODY_BOLD, size * 0.45)
    c.drawString(cx - tw / 2, cy - size * 0.16, '♪')


def generate_pdf():
    c = canvas.Canvas(OUTPUT_PATH, pagesize=(DOC_W, DOC_H))
    c.setTitle('Tortilleria El Rancherito - Table Card')
    c.setAuthor('Exponent Marketing & AI')

    # ── Full bleed background ──
    c.setFillColor(BLACK)
    c.rect(0, 0, DOC_W, DOC_H, fill=1, stroke=0)

    # ── Subtle warm gradient effect at top (dark brown fade) ──
    for i in range(40):
        alpha = 0.03 * (1 - i / 40)
        c.setFillColor(HexColor('#3D3228'))
        c.setFillAlpha(alpha)
        stripe_y = DOC_H - (i * 4)
        c.rect(0, stripe_y, DOC_W, 4, fill=1, stroke=0)
    c.setFillAlpha(1)

    # ── Trim area reference (content starts from BLEED inset) ──
    # All y-coordinates are from bottom of document
    top = BLEED + TRIM_H  # Top of trim area
    center_x = BLEED + TRIM_W / 2

    # ── Thin orange accent line near top ──
    line_y = top - 0.3 * inch
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.5)
    line_half = 0.6 * inch
    c.line(center_x - line_half, line_y, center_x + line_half, line_y)

    # ── Logo ──
    logo_size = 1.15 * inch
    logo_x = center_x - logo_size / 2
    logo_y = top - 0.45 * inch - logo_size
    try:
        img = ImageReader(LOGO_PATH)
        c.drawImage(img, logo_x, logo_y, logo_size, logo_size, mask='auto', preserveAspectRatio=True)
    except Exception as e:
        print(f"Warning: Could not load logo: {e}")
        # Draw placeholder circle
        c.setStrokeColor(ORANGE)
        c.setLineWidth(1)
        c.circle(center_x, logo_y + logo_size / 2, logo_size / 2, stroke=1, fill=0)

    # ── Another thin accent line below logo ──
    line_y2 = logo_y - 0.15 * inch
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1)
    c.line(center_x - line_half, line_y2, center_x + line_half, line_y2)

    # ── Headline text ──
    headline_y = line_y2 - 0.32 * inch
    if FONT_DISPLAY == 'BebasNeue':
        headline_size = 22
    else:
        headline_size = 18

    draw_text_centered(c, 'LOVED YOUR MEAL?', headline_y, FONT_DISPLAY, headline_size, CREAM)

    sub_y = headline_y - 0.26 * inch
    draw_text_centered(c, 'LEAVE US A REVIEW!', sub_y, FONT_DISPLAY, headline_size, ORANGE)

    # ── Small body text ──
    body_y = sub_y - 0.28 * inch
    c.setFont(FONT_BODY, 7)
    c.setFillColor(CREAM)
    body_text = 'Scan the code below with your phone camera'
    bw = c.stringWidth(body_text, FONT_BODY, 7)
    c.drawString(center_x - bw / 2, body_y, body_text)

    # ── QR Code placeholder (white rounded square) ──
    qr_size = 1.75 * inch
    qr_x = center_x - qr_size / 2
    qr_y = body_y - 0.22 * inch - qr_size
    corner_r = 8

    # Subtle shadow behind QR
    c.setFillColor(HexColor('#000000'))
    c.setFillAlpha(0.25)
    draw_rounded_rect(c, qr_x + 2, qr_y - 2, qr_size, qr_size, corner_r, fill=HexColor('#000000'))
    c.setFillAlpha(1)

    # White square
    draw_rounded_rect(c, qr_x, qr_y, qr_size, qr_size, corner_r, fill=WHITE)

    # ── Orange accent line below QR ──
    accent_y = qr_y - 0.18 * inch
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1)
    c.line(center_x - line_half, accent_y, center_x + line_half, accent_y)

    # ── Discount Code Banner ──
    banner_h = 0.48 * inch
    banner_y = accent_y - 0.14 * inch - banner_h
    banner_margin = 0.25 * inch
    banner_x = BLEED + banner_margin
    banner_w = TRIM_W - 2 * banner_margin
    banner_r = 6

    # Orange banner background
    draw_rounded_rect(c, banner_x, banner_y, banner_w, banner_h, banner_r, fill=ORANGE)

    # "USE CODE" small text
    use_code_size = 6.5
    c.setFont(FONT_BODY_BOLD, use_code_size)
    c.setFillColor(WHITE)
    uc_text = 'USE CODE'
    uc_w = c.stringWidth(uc_text, FONT_BODY_BOLD, use_code_size)
    c.drawString(center_x - uc_w / 2, banner_y + banner_h * 0.58, uc_text)

    # "REVIEW10" large text
    if FONT_DISPLAY == 'BebasNeue':
        code_size = 20
    else:
        code_size = 16
    c.setFont(FONT_DISPLAY, code_size)
    c.setFillColor(WHITE)
    code_text = 'REVIEW10'
    code_w = c.stringWidth(code_text, FONT_DISPLAY, code_size)
    c.drawString(center_x - code_w / 2, banner_y + banner_h * 0.12, code_text)

    # ── "FOR 10% OFF YOUR NEXT VISIT" ──
    off_y = banner_y - 0.2 * inch
    off_size = 7
    c.setFont(FONT_BODY_BOLD, off_size)
    c.setFillColor(ORANGE)
    off_text = 'FOR 10% OFF YOUR NEXT VISIT'
    off_w = c.stringWidth(off_text, FONT_BODY_BOLD, off_size)
    c.drawString(center_x - off_w / 2, off_y, off_text)

    # ── Location Addresses ──
    addr_y = off_y - 0.32 * inch
    addr_size = 6
    loc_label_size = 6.5

    # Red Oak
    c.setFont(FONT_BODY_BOLD, loc_label_size)
    c.setFillColor(ORANGE)
    ro_label = 'RED OAK'
    ro_w = c.stringWidth(ro_label, FONT_BODY_BOLD, loc_label_size)
    c.drawString(center_x - ro_w / 2, addr_y, ro_label)

    c.setFont(FONT_BODY, addr_size)
    c.setFillColor(CREAM)
    ro_addr = '109 TX-342, Red Oak, TX 75156'
    ra_w = c.stringWidth(ro_addr, FONT_BODY, addr_size)
    c.drawString(center_x - ra_w / 2, addr_y - 0.14 * inch, ro_addr)

    # Gun Barrel City
    gbc_y = addr_y - 0.36 * inch
    c.setFont(FONT_BODY_BOLD, loc_label_size)
    c.setFillColor(ORANGE)
    gbc_label = 'GUN BARREL CITY'
    gbc_w = c.stringWidth(gbc_label, FONT_BODY_BOLD, loc_label_size)
    c.drawString(center_x - gbc_w / 2, gbc_y, gbc_label)

    c.setFont(FONT_BODY, addr_size)
    c.setFillColor(CREAM)
    gbc_addr = '2000 W Main St, Gun Barrel City, TX 75156'
    ga_w = c.stringWidth(gbc_addr, FONT_BODY, addr_size)
    c.drawString(center_x - ga_w / 2, gbc_y - 0.14 * inch, gbc_addr)

    # ── Thin divider above social ──
    div_y = gbc_y - 0.32 * inch
    c.setStrokeColor(HexColor('#3D3228'))
    c.setLineWidth(0.5)
    div_margin = 0.8 * inch
    c.line(BLEED + div_margin, div_y, BLEED + TRIM_W - div_margin, div_y)

    # ── Social Media Icons ──
    social_y = div_y - 0.22 * inch
    icon_size = 14
    gap = 24
    total_width = 3 * icon_size + 2 * gap
    start_x = center_x - total_width / 2 + icon_size / 2

    # Facebook
    draw_social_icon_facebook(c, start_x, social_y, icon_size)
    # Instagram
    draw_social_icon_instagram(c, start_x + icon_size + gap, social_y, icon_size)
    # TikTok
    draw_social_icon_tiktok(c, start_x + 2 * (icon_size + gap), social_y, icon_size)

    # ── Social handle text ──
    handle_y = social_y - icon_size / 2 - 0.12 * inch
    c.setFont(FONT_BODY, 5.5)
    c.setFillColor(HexColor('#8A7E72'))
    handle = '@tortilleria.el.rancherito'
    hw = c.stringWidth(handle, FONT_BODY, 5.5)
    c.drawString(center_x - hw / 2, handle_y, handle)

    # ── Trim marks (for print shop) ──
    c.setStrokeColor(HexColor('#999999'))
    c.setLineWidth(0.25)
    mark_len = 0.1 * inch

    # Top-left
    c.line(BLEED, DOC_H - BLEED + 2, BLEED, DOC_H - BLEED + 2 + mark_len)
    c.line(BLEED - 2, DOC_H - BLEED, BLEED - 2 - mark_len, DOC_H - BLEED)
    # Top-right
    c.line(DOC_W - BLEED, DOC_H - BLEED + 2, DOC_W - BLEED, DOC_H - BLEED + 2 + mark_len)
    c.line(DOC_W - BLEED + 2, DOC_H - BLEED, DOC_W - BLEED + 2 + mark_len, DOC_H - BLEED)
    # Bottom-left
    c.line(BLEED, BLEED - 2, BLEED, BLEED - 2 - mark_len)
    c.line(BLEED - 2, BLEED, BLEED - 2 - mark_len, BLEED)
    # Bottom-right
    c.line(DOC_W - BLEED, BLEED - 2, DOC_W - BLEED, BLEED - 2 - mark_len)
    c.line(DOC_W - BLEED + 2, BLEED, DOC_W - BLEED + 2 + mark_len, BLEED)

    c.save()
    print(f"PDF saved to: {OUTPUT_PATH}")
    print(f"Document size: {DOC_W/inch:.3f}\" x {DOC_H/inch:.3f}\" (with bleed)")
    print(f"Trim size: {TRIM_W/inch:.3f}\" x {TRIM_H/inch:.3f}\"")
    print(f"Display font: {FONT_DISPLAY}")
    print(f"Body font: {FONT_BODY}")


if __name__ == '__main__':
    generate_pdf()
