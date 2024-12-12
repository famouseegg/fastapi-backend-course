from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles #靜態文件

from .database import Base,engine
from .routers import router

#Initialize FastAPI
app = FastAPI()

# 指定靜態文件目錄
app.mount("/static", StaticFiles(directory="static"), name="static")

# Initialize Database's Table
Base.metadata.create_all(bind=engine)

#Register Router
app.include_router(router=router,prefix="/api",tags=["todos"])