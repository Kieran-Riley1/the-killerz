from django.contrib import admin
from django.contrib.admin import DateFieldListFilter

from .models import Gig, Enquiry

class GigAdmin(admin.ModelAdmin):
    list_display = ('date', 'venue', 'city', 'location')
    list_filter = [('date', DateFieldListFilter),]
    search_fields = ('date', 'venue', 'city', 'location',)

class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'date', 'message')
    list_filter = [('date', DateFieldListFilter),]
    search_fields = ('name', 'email', 'phone', 'date', 'message',)

admin.site.register(Gig, GigAdmin)
admin.site.register(Enquiry, EnquiryAdmin)
