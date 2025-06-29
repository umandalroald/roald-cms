from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.v1.auth.schemas import LoginSchema, Token
from app.api.v1.auth.services import authenticate_user, generate_tokens
from app.api.v1.auth.utils import decode_token
from app.db.session import get_db

router = APIRouter()

@router.post("/login", response_model=Token)
def login(data: LoginSchema, db: Session = Depends(get_db)):
    user = authenticate_user(data.email, data.password, db)
    return generate_tokens(user)

@router.post("/refresh", response_model=Token)
def refresh_token(refresh_token: str, db: Session = Depends(get_db)):
    payload = decode_token(refresh_token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    email = payload.get("sub")
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return generate_tokens(user)
