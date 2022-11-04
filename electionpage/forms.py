from django import forms

from electionpage.models import ScrapableElectionPage


class ScrapableElectionPageForm(forms.ModelForm):
    class Meta:
        model = ScrapableElectionPage
        fields = ['slug', 'title', 'date', 'description', 'areResultsCertified']

    numElections = forms.IntegerField(label='Number of elections')
