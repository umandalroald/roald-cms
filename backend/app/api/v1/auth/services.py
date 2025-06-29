from fastapi import HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta
from app.api.v1.users.models import User
from app.api.v1.auth.utils import verify_password, create_token
from core.config import settings

def authenticate_user(email: str, password: str, db: Session) -> User:
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not user.is_active:
        raise HTTPException(status_code=403, detail="Account is not active")
    return user

def generate_tokens(user: User) -> dict:
    access = create_token(data={"sub": user.email}, expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))
    refresh = create_token(data={"sub": user.email}, expires_delta=timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS))
    return {"access_token": access, "refresh_token": refresh, "token_type": "bearer"}
