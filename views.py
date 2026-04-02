from django.shortcuts import render, redirect
from .models import StudentInquiry


def home(request):
    return render(request, 'index.html')


def courses(request):
    return render(request, 'course.html')


def care(request):
    return render(request, 'career.html')


def about(request):
    return render(request, 'about.html')


def success(request):
    data = StudentInquiry.objects.all().order_by('-id')
    return render(request, 'success.html', {'data': data})

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        student_class = request.POST.get('student_class')
        syllabus = request.POST.get('syllabus')
        phone = request.POST.get('phone')

        StudentInquiry.objects.create(
            name=name,
            student_class=student_class,
            syllabus=syllabus,
            phone=phone
        )

        return redirect('success')   # ✅ MUST use redirect

    return render(request, 'contact.html')