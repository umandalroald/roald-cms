from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .schemas import UserCreate, UserOut
from .models import User
from .services import create_user
from db.session import get_db

router = APIRouter()

@router.post("/register", response_model=UserOut)
def register_user(data: UserCreate, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(data, db)
