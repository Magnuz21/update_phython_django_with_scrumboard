from django.db import models

# Create your models here.

class Board(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()


    def __str__(self) -> str:
        return f"{self.pk} {self.title}"