from pydantic import BaseModel


class Message(BaseModel):
    role: str
    content: str


class AdvisorRequest(BaseModel):
    goal: str
    messages: list[Message]


class AdvisorResponse(BaseModel):
    response: str
