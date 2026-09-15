from fastapi import APIRouter
from app.services.advisor_service import get_advisor_response

router = APIRouter(tags=["advisor"])
from app.schemas.advisor import AdvisorRequest, AdvisorResponse


@router.post("/api/advisor", response_model=AdvisorResponse)
async def advisor(request : AdvisorRequest):
    response = await get_advisor_response(request)
    return {"response": response}