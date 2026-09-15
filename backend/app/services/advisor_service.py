from app.schemas.advisor import AdvisorRequest
from app.prompts.advisor.prompt_builder import build_advisor_prompt
from app.services.llm_service import generate_response

async def get_advisor_response(request: AdvisorRequest):
    system_prompt = build_advisor_prompt(request.goal)

    response = await generate_response(
        system_prompt=system_prompt,
        messages=request.messages
    )

    return response
