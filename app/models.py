from sqlalchemy import Column, Integer,String, Boolean,Date
from .database import Base

# Define Model
class Todo(Base):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True,index=True)
    title = Column(String(100),nullable=False) 
    description = Column(String,nullable=True)
    completed = Column(Boolean,default=False)
    due_data = Column(Date, nullable=True)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)  # 自動生成的主鍵
    username = Column(String(80), unique=True, nullable=False)
    password_hash = Column(String(120), nullable=False)
    profile_image = Column(String(120), nullable=True)  # 新增一個欄位來存儲圖像文件的路徑