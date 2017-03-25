from django.shortcuts import render
from django.views.generic import TemplateView


def index(request):
    return render (request, "flap/index.html")


class React(TemplateView):
    template_name = 'flap/react.html'
