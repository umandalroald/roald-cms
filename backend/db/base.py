from db.session import Base

# Import all the models to ensure they are registered with Base
from app.api.v1.users.models import User
# from app.models.post import Post
# from app.models.comment import Comment
# Add more models as you define them
