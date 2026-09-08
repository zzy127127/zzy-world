from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(r"E:\ZZY\resume\own\个人网站\portfolio-v2\assets\images")


def convert_folder(source: Path, target: Path, size: tuple[int, int], prefix: str):
    target.mkdir(parents=True, exist_ok=True)
    files = sorted(
        [p for p in source.iterdir() if p.suffix.lower() in {".png", ".jpg", ".jpeg"}],
        key=lambda p: int(p.stem) if p.stem.isdigit() else p.name,
    )
    for index, path in enumerate(files, 1):
        with Image.open(path) as image:
            image = ImageOps.exif_transpose(image).convert("RGBA")
            image.thumbnail(size, Image.Resampling.LANCZOS)
            image.save(target / f"{prefix}-{index:02d}.webp", "WEBP", quality=82, method=6)


convert_folder(
    Path(r"E:\ZZY\TDnow\cat\图片\首页猫咪"),
    ROOT / "cat-scroll",
    (560, 560),
    "cat",
)
convert_folder(
    Path(r"E:\ZZY\TDnow\cat\图片\粗"),
    ROOT / "cat-results",
    (900, 700),
    "result",
)
convert_folder(
    Path(r"E:\ZZY\resume\own\优化\详细项目\表情包"),
    ROOT / "sticker-items",
    (620, 620),
    "sticker",
)
