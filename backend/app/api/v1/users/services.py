from sqlalchemy.orm import Session
from .models import User
from .schemas import UserCreate
from utils.security import get_password_hash

def create_user(data: UserCreate, db: Session) -> User:
    user = User(
        email=data.email,
        hashed_password=get_password_hash(data.password)
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
