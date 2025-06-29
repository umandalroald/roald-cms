from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from core.config import settings

# Create the database engine using the DATABASE_URL from .env
engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True)

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Optional: Base model class for SQLAlchemy models
Base = declarative_base()

# Dependency to be used in routes/services
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
