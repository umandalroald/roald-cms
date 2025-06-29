import sys
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(os.path.dirname(__file__))

from app.api.v1.auth import routes as auth_routes
from app.api.v1.users import routes as user_routes

app = FastAPI()

# ✅ Allow requests from your React frontend (adjust as needed)
origins = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "https://your-frontend-domain.com",  # if deployed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # ✅ or use ["*"] to allow all
    allow_credentials=True,
    allow_methods=["*"],              # ✅ Allow all HTTP methods
    allow_headers=["*"],              # ✅ Allow all headers
)

@app.get("/")
def root():
    return {"message": "WELCOME TO MY BLOGS API"}

app.include_router(auth_routes.router, prefix="/api/v1/auth")
app.include_router(auth_routes.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(user_routes.router, prefix="/api/v1/users", tags=["Users"])
