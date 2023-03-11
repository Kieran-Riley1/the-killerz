from django.db import models

class Gig(models.Model):
    date = models.DateField()
    venue = models.CharField(max_length=200, blank=False)
    city = models.CharField(max_length=200, blank=False)
    location = models.CharField(max_length=200, blank=False)
    ticket_link =  models.URLField(max_length=200, blank=True)


class Enquiry(models.Model):
    name = models.CharField(max_length=200, blank=False)
    email = models.EmailField(blank=False)
    phone = models.CharField(max_length=12, null=True, blank=True)
    date = models.DateField()
    message = models.CharField(max_length=200, blank=False)


