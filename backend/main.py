import sys
import os
from fastapi import FastAPI

sys.path.append(os.path.dirname(__file__))

from app.api.v1.auth import routes as auth_routes
from app.api.v1.users import routes as user_routes

app = FastAPI()

@app.get("/")
def root():
    return {"message": "WELCOME TO MY BLOGS API"}

app.include_router(auth_routes.router, prefix="/api/v1/auth")
app.include_router(auth_routes.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(user_routes.router, prefix="/api/v1/users", tags=["Users"])
