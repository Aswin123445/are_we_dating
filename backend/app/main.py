from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from app.routers.advisor import router as advisor_router
from app.routers.calculator import router as calculator_router

app = FastAPI()
app.include_router(advisor_router)
app.include_router(calculator_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
