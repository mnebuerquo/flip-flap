from django.contrib import admin
from .models import *

class FlipFlapAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )

admin.site.register(FlipFlap, FlipFlapAdmin)
