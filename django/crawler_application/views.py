from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Site
from .serializers import SiteSerializer

# Create your views here.
class SiteView(viewsets.ViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializer

    def list(self, request):
        queryset = Site.objects.all()
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data, status=201)
        
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=404)
        
    def destroy(self, pk=None):
        site = get_object_or_404(self.queryset, pk=pk)
        site.delete()