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