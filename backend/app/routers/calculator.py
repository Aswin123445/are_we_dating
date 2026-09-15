from fastapi import APIRouter

router = APIRouter()

@router.post("/api/calculator")
async def calculator():
    return {"message": "Calculator API"}