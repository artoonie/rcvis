"""Module for helpers related to table rendering"""
from django import template

register = template.Library()


@register.simple_tag(takes_context=True)
def get_round_cell_info(context, candidateName, candidate):
    """
    Track candidate status through iterations of the single table summary.
    Returns a dict with the cell background color and a plain-text status
    (for screenreaders, since the color alone conveys the status visually).
    Must be called exactly once per cell, in round order.
    """
    candidateKey = f"round_state_{candidateName}"
    if candidateKey not in context:
        context[candidateKey] = {
            "wasWinner": False,
            "wasEliminated": False,
        }
    if candidate is None and not context[candidateKey]["wasEliminated"]:
        context[candidateKey]["wasEliminated"] = True
        return {"color": "#FFBEBE", "status": "Eliminated"}
    if context[candidateKey]["wasEliminated"]:
        return {"color": "#FAD7D7", "status": "Previously eliminated"}
    if candidate and candidate.isWinner:
        wasWinner = context[candidateKey]["wasWinner"]
        context[candidateKey]["wasWinner"] = True
        return {"color": "#A0FFB5", "status": "Previously elected" if wasWinner else "Elected"}
    if context[candidateKey]["wasWinner"]:
        return {"color": "#DCFFE1", "status": "Previously elected"}

    return {"color": "rgba(0,0,0,0)", "status": ""}
