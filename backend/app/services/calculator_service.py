from app.services.llm_service import generate_response

async def get_calculator_response(request):

    system_prompt = build_calculator_prompt(request.stage)

    response = await generate_response(
        system_prompt=system_prompt, messages=request.messages
    )

    return response
