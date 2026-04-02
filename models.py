from django.db import models

class StudentInquiry(models.Model):
    name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=20)
    syllabus = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name