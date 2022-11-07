"""
Form used to create models in the electionpage app
"""

from django import forms

from electionpage.models import ScrapableElectionPage


class ScrapableElectionPageForm(forms.ModelForm):
    """
    Creates a scrapable election page, populating all metadata and creating
    numElections Scrapers, which can be populated separately.
    """
    class Meta:
        model = ScrapableElectionPage
        fields = ['slug', 'title', 'date', 'description', 'areResultsCertified']

    numElections = forms.IntegerField(label='Number of elections', min_value=1, max_value=60)
