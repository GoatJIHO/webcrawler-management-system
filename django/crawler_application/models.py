from django.db import models

# Create your models here.
class Site(models.Model):
  site_name = models.CharField(max_length=128, null=True, default=None)
  last_update = models.DateTimeField(null=True)

  def __str__(self):
    return self.site_name