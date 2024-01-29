from django.contrib import admin
from .models import Site

# Register your models here.
@admin.register(Site)
class SiteAdmin(admin.ModelAdmin):
  list_display = ('site_name', 'last_update')
  search_display = ('site_name', 'last_update')