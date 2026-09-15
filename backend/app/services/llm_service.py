from groq import AsyncGroq
import os
from dotenv import load_dotenv

load_dotenv()
client = AsyncGroq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def generate_response(
    system_prompt: str,
    messages: list
) -> str:

    response = await client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            *[
                {
                    "role": message.role,
                    "content": message.content
                }
                for message in messages
            ]
        ],
    )

    return response.choices[0].message.content
