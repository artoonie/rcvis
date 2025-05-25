"""Module for helpers related to table rendering"""
from django import template

register = template.Library()


@register.simple_tag(takes_context=True)
def get_round_background_color(context, candidateName, round_item):
    """Track candidate status through iterations and return cell background color"""
    candidateKey = f"round_state_{candidateName}"
    if candidateKey not in context:
        context[candidateKey] = {
            "wasWinner": False,
            "wasEliminated": False,
        }
    if round_item is None and not context[candidateKey]["wasEliminated"]:
        context[candidateKey]["wasEliminated"] = True
        return "#FFBEBE"
    if context[candidateKey]["wasEliminated"]:
        return "#FAD7D7"
    if round_item and round_item.isWinner:
        context[candidateKey]["wasWinner"] = True
        return "#A0FFB5"
    if context[candidateKey]["wasWinner"]:
        return "#DCFFE1"

    return "rgba(0,0,0,0)"
