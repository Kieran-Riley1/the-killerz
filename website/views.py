from django.views import generic

from .models import Gig


class IndexView(generic.ListView):
    template_name = 'index.html'
    context_object_name = 'gigs'

    def get_queryset(self):
        """Return the gigs sorted by date."""
        return Gig.objects.order_by('date')
# 
#     def post(self, request, *args, **kwargs):
#         if 'save_template' in self.request.POST:
#
#             # Get template content
#             name = request.POST.get('template_name')
#             title = request.POST.get('title')
#             body = request.POST.get('body')
#             image = request.POST.get('image')
#             contact_type = request.POST.get('contact_type')
#             group = request.POST.get('in_group')
#
#         return HttpsResponse()