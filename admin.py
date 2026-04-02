from django.contrib import admin
from .models import StudentInquiry

class StudentInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'student_class', 'syllabus', 'phone')
    search_fields = ('name', 'student_class', 'phone')
    list_filter = ('student_class',)

admin.site.register(StudentInquiry, StudentInquiryAdmin)