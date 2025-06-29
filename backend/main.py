from fastapi import FastAPI
from app.api.v1.auth import routes as auth_routes
from app.api.v1.users import routes as user_routes

app = FastAPI()

app.include_router(auth_routes.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(user_routes.router, prefix="/api/v1/users", tags=["Users"])
