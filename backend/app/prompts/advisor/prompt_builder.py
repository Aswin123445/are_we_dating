from pathlib import Path

PROMPT_DIR = Path(__file__).parent


def load_prompt(filename: str) -> str:
    print(PROMPT_DIR,'here')
    path = PROMPT_DIR / filename
    print(path,'here')

    return path.read_text(encoding="utf-8")


def build_advisor_prompt(goal: str) -> str:
    base_prompt = load_prompt("base.txt")
    mode_prompt = load_prompt(f"{goal}.txt")

    return f"""
{base_prompt}

---

{mode_prompt}
"""
