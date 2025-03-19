var fa = Object.defineProperty;
var ui = (t) => {
  throw TypeError(t);
};
var ca = (t, e, n) => e in t ? fa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var kt = (t, e, n) => ca(t, typeof e != "symbol" ? e + "" : e, n), fi = (t, e, n) => e.has(t) || ui("Cannot " + n);
var ct = (t, e, n) => (fi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), cr = (t, e, n) => e.has(t) ? ui("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), hr = (t, e, n, r) => (fi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ha = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ha);
const da = 1, va = 2, pa = 16, ga = 1, _a = 4, ma = 8, ya = 16, wa = 2, Li = "[", Or = "[!", Pr = "]", We = {}, ht = Symbol(), ci = !1, Dt = 2, qi = 4, Dr = 8, Fr = 16, ue = 32, qe = 64, On = 128, Tt = 256, Pn = 512, gt = 1024, fe = 2048, Ve = 4096, se = 8192, Qn = 16384, xa = 32768, Ir = 65536, ba = 1 << 19, Vi = 1 << 20, Je = Symbol("$state"), Bi = Symbol("legacy props");
var Lr = Array.isArray, $a = Array.prototype.indexOf, qr = Array.from, Dn = Object.keys, Fn = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, Aa = Object.prototype, Ra = Array.prototype, Ea = Object.getPrototypeOf;
function Hi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let Qe = [], yr = [];
function Yi() {
  var t = Qe;
  Qe = [], Hi(t);
}
function Ca() {
  var t = yr;
  yr = [], Hi(t);
}
function zi(t) {
  Qe.length === 0 && queueMicrotask(Yi), Qe.push(t);
}
function hi() {
  Qe.length > 0 && Yi(), yr.length > 0 && Ca();
}
function Ui(t) {
  return t === this.v;
}
function Na(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Vr(t) {
  return !Na(t, this.v);
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ka(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ma() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Oa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pa(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function La() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let qa = !1;
function Ct(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ui,
    rv: 0,
    wv: 0
  };
  return n;
}
function ee(t) {
  return /* @__PURE__ */ Va(Ct(t));
}
// @__NO_SIDE_EFFECTS__
function Br(t, e = !1) {
  const n = Ct(t);
  return e || (n.equals = Vr), n;
}
// @__NO_SIDE_EFFECTS__
function Va(t) {
  return j !== null && !Ot && j.f & Dt && (Ut === null ? za([t]) : Ut.push(t)), t;
}
function W(t, e) {
  return j !== null && !Ot && cs() && j.f & (Dt | Fr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ut === null || !Ut.includes(t)) && La(), ji(t, e);
}
function ji(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = es(), Xi(t, fe), X !== null && X.f & gt && !(X.f & (ue | qe)) && (ne === null ? Ua([t]) : ne.push(t))), e;
}
function Xi(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & fe || (ae(s, e), a & (gt | Tt) && (a & Dt ? Xi(
        /** @type {Derived} */
        s,
        Ve
      ) : rr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function tr(t) {
  var e = Dt | fe, n = j !== null && j.f & Dt ? (
    /** @type {Derived} */
    j
  ) : null;
  return X === null || n !== null && n.f & Tt ? e |= Tt : X.f |= Vi, {
    ctx: pt,
    deps: null,
    effects: null,
    equals: Ui,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? X
  };
}
// @__NO_SIDE_EFFECTS__
function Ba(t) {
  const e = /* @__PURE__ */ tr(t);
  return e.equals = Vr, e;
}
function Gi(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      le(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ha(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Dt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ya(t) {
  var e, n = X;
  Fe(Ha(t));
  try {
    Gi(t), e = rs(t);
  } finally {
    Fe(n);
  }
  return e;
}
function Ki(t) {
  var e = Ya(t), n = (ge || t.f & Tt) && t.deps !== null ? Ve : gt;
  ae(t, n), t.equals(e) || (t.v = e, t.wv = es());
}
function Hr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Q = !1;
function ie(t) {
  Q = t;
}
let U;
function Xt(t) {
  if (t === null)
    throw Hr(), We;
  return U = t;
}
function er() {
  return Xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ce(U)
  );
}
function yt(t) {
  if (Q) {
    if (/* @__PURE__ */ ce(U) !== null)
      throw Hr(), We;
    U = t;
  }
}
function gn(t = 1) {
  if (Q) {
    for (var e = t, n = U; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ce(n);
    U = n;
  }
}
function wr() {
  for (var t = 0, e = U; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Pr) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Li || n === Or) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(e)
    );
    e.remove(), e = r;
  }
}
function bt(t, e = null, n) {
  if (typeof t != "object" || t === null || Je in t)
    return t;
  const r = Ea(t);
  if (r !== Aa && r !== Ra)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Lr(t), a = Ct(0);
  s && i.set("length", Ct(
    /** @type {any[]} */
    t.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Da();
        var h = i.get(f);
        return h === void 0 ? (h = Ct(o.value), i.set(f, h)) : W(h, bt(o.value, l)), !0;
      },
      deleteProperty(u, f) {
        var o = i.get(f);
        if (o === void 0)
          f in u && i.set(f, Ct(ht));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && W(h, c);
          }
          W(o, ht), di(a);
        }
        return !0;
      },
      get(u, f, o) {
        var p;
        if (f === Je)
          return t;
        var h = i.get(f), c = f in u;
        if (h === void 0 && (!c || (p = $e(u, f)) != null && p.writable) && (h = Ct(bt(c ? u[f] : ht, l)), i.set(f, h)), h !== void 0) {
          var d = x(h);
          return d === ht ? void 0 : d;
        }
        return Reflect.get(u, f, o);
      },
      getOwnPropertyDescriptor(u, f) {
        var o = Reflect.getOwnPropertyDescriptor(u, f);
        if (o && "value" in o) {
          var h = i.get(f);
          h && (o.value = x(h));
        } else if (o === void 0) {
          var c = i.get(f), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return o;
      },
      has(u, f) {
        var d;
        if (f === Je)
          return !0;
        var o = i.get(f), h = o !== void 0 && o.v !== ht || Reflect.has(u, f);
        if (o !== void 0 || X !== null && (!h || (d = $e(u, f)) != null && d.writable)) {
          o === void 0 && (o = Ct(h ? bt(u[f], l) : ht), i.set(f, o));
          var c = x(o);
          if (c === ht)
            return !1;
        }
        return h;
      },
      set(u, f, o, h) {
        var T;
        var c = i.get(f), d = f in u;
        if (s && f === "length")
          for (var p = o; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var y = i.get(p + "");
            y !== void 0 ? W(y, ht) : p in u && (y = Ct(ht), i.set(p + "", y));
          }
        c === void 0 ? (!d || (T = $e(u, f)) != null && T.writable) && (c = Ct(void 0), W(c, bt(o, l)), i.set(f, c)) : (d = c.v !== ht, W(c, bt(o, l)));
        var R = Reflect.getOwnPropertyDescriptor(u, f);
        if (R != null && R.set && R.set.call(h, o), !d) {
          if (s && typeof f == "string") {
            var _ = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(f);
            Number.isInteger($) && $ >= _.v && W(_, $ + 1);
          }
          di(a);
        }
        return !0;
      },
      ownKeys(u) {
        x(a);
        var f = Reflect.ownKeys(u).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== ht;
        });
        for (var [o, h] of i)
          h.v !== ht && !(o in u) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        Fa();
      }
    }
  );
}
function di(t, e = 1) {
  W(t, t.v + e);
}
var vi, Wi, Ji, Zi;
function xr() {
  if (vi === void 0) {
    vi = window, Wi = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Ji = $e(e, "firstChild").get, Zi = $e(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function In(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Re(t) {
  return Ji.call(t);
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  return Zi.call(t);
}
function wt(t, e) {
  if (!Q)
    return /* @__PURE__ */ Re(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(U)
  );
  if (n === null)
    n = U.appendChild(In());
  else if (e && n.nodeType !== 3) {
    var r = In();
    return n == null || n.before(r), Xt(r), r;
  }
  return Xt(n), n;
}
function Te(t, e) {
  if (!Q) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Re(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ce(n) : n;
  }
  return U;
}
function Ht(t, e = 1, n = !1) {
  let r = Q ? U : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ce(r);
  if (!Q)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = In();
    return r === null ? i == null || i.after(a) : r.before(a), Xt(a), a;
  }
  return Xt(r), /** @type {TemplateNode} */
  r;
}
function Qi(t) {
  t.textContent = "";
}
let An = !1, Ln = !1, qn = null, Rn = !1, Yr = !1;
function pi(t) {
  Yr = t;
}
let Ze = [];
let j = null, Ot = !1;
function De(t) {
  j = t;
}
let X = null;
function Fe(t) {
  X = t;
}
let Ut = null;
function za(t) {
  Ut = t;
}
let ot = null, xt = 0, ne = null;
function Ua(t) {
  ne = t;
}
let ts = 1, Vn = 0, ge = !1;
function es() {
  return ++ts;
}
function ln(t) {
  var h;
  var e = t.f;
  if (e & fe)
    return !0;
  if (e & Ve) {
    var n = t.deps, r = (e & Tt) !== 0;
    if (n !== null) {
      var i, s, a = (e & Pn) !== 0, l = r && X !== null && !ge, u = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), o = f.parent;
        for (i = 0; i < u; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= Pn), l && o !== null && !(o.f & Tt) && (f.f ^= Tt);
      }
      for (i = 0; i < u; i++)
        if (s = n[i], ln(
          /** @type {Derived} */
          s
        ) && Ki(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || X !== null && !ge) && ae(t, gt);
  }
  return !1;
}
function ja(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & On)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= On;
      }
    n = n.parent;
  }
  throw An = !1, t;
}
function Xa(t) {
  return (t.f & Qn) === 0 && (t.parent === null || (t.parent.f & On) === 0);
}
function nr(t, e, n, r) {
  if (An) {
    if (n === null && (An = !1), Xa(e))
      throw t;
    return;
  }
  n !== null && (An = !0);
  {
    ja(t, e);
    return;
  }
}
function ns(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Dt ? ns(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ae(s, fe) : s.f & gt && ae(s, Ve), rr(
        /** @type {Effect} */
        s
      ));
    }
}
function rs(t) {
  var d;
  var e = ot, n = xt, r = ne, i = j, s = ge, a = Ut, l = pt, u = Ot, f = t.f;
  ot = /** @type {null | Value[]} */
  null, xt = 0, ne = null, ge = (f & Tt) !== 0 && (Ot || !Rn || j === null), j = f & (ue | qe) ? null : t, Ut = null, gi(t.ctx), Ot = !1, Vn++;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (ot !== null) {
      var c;
      if (Bn(t, xt), h !== null && xt > 0)
        for (h.length = xt + ot.length, c = 0; c < ot.length; c++)
          h[xt + c] = ot[c];
      else
        t.deps = h = ot;
      if (!ge)
        for (c = xt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && xt < h.length && (Bn(t, xt), h.length = xt);
    if (cs() && ne !== null && !Ot && h !== null && !(t.f & (Dt | Ve | fe)))
      for (c = 0; c < /** @type {Source[]} */
      ne.length; c++)
        ns(
          ne[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Vn++, o;
  } finally {
    ot = e, xt = n, ne = r, j = i, ge = s, Ut = a, gi(l), Ot = u;
  }
}
function Ga(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = $a.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Dt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !ot.includes(e)) && (ae(e, Ve), e.f & (Tt | Pn) || (e.f ^= Pn), Gi(
    /** @type {Derived} **/
    e
  ), Bn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Bn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ga(t, n[r]);
}
function zr(t) {
  var e = t.f;
  if (!(e & Qn)) {
    ae(t, gt);
    var n = X, r = pt, i = Rn;
    X = t, Rn = !0;
    try {
      e & Fr ? rl(t) : ls(t), as(t);
      var s = rs(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = ts;
      var a = t.deps, l;
      ci && qa && t.f & fe;
    } catch (u) {
      nr(u, t, n, r || t.ctx);
    } finally {
      Rn = i, X = n;
    }
  }
}
function Ka() {
  try {
    Ma();
  } catch (t) {
    if (qn !== null)
      nr(t, qn, null);
    else
      throw t;
  }
}
function is() {
  try {
    for (var t = 0; Ze.length > 0; ) {
      t++ > 1e3 && Ka();
      var e = Ze, n = e.length;
      Ze = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & gt || (i.f ^= gt);
        var s = Ja(i);
        Wa(s);
      }
    }
  } finally {
    Ln = !1, qn = null;
  }
}
function Wa(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Qn | se)))
        try {
          ln(r) && (zr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? os(r) : r.fn = null));
        } catch (i) {
          nr(i, r, null, r.ctx);
        }
    }
}
function rr(t) {
  Ln || (Ln = !0, queueMicrotask(is));
  for (var e = qn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (qe | ue)) {
      if (!(n & gt)) return;
      e.f ^= gt;
    }
  }
  Ze.push(e);
}
function Ja(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & ue) !== 0, s = i && (r & gt) !== 0;
    if (!s && !(r & se)) {
      if (r & qi)
        e.push(n);
      else if (i)
        n.f ^= gt;
      else {
        var a = j;
        try {
          j = n, ln(n) && zr(n);
        } catch (f) {
          nr(f, n, null, n.ctx);
        } finally {
          j = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
  return e;
}
function Nt(t) {
  var e;
  for (hi(); Ze.length > 0; )
    Ln = !0, is(), hi();
  return (
    /** @type {T} */
    e
  );
}
function x(t) {
  var e = t.f, n = (e & Dt) !== 0;
  if (j !== null && !Ot) {
    Ut !== null && Ut.includes(t) && Ia();
    var r = j.deps;
    t.rv < Vn && (t.rv = Vn, ot === null && r !== null && r[xt] === t ? xt++ : ot === null ? ot = [t] : (!ge || !ot.includes(t)) && ot.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Tt) && (i.f ^= Tt);
  }
  return n && (i = /** @type {Derived} */
  t, ln(i) && Ki(i)), t.v;
}
function Hn(t) {
  var e = Ot;
  try {
    return Ot = !0, t();
  } finally {
    Ot = e;
  }
}
const Za = -7169;
function ae(t, e) {
  t.f = t.f & Za | e;
}
function Qa(t) {
  X === null && j === null && ka(), j !== null && j.f & Tt && X === null && Sa(), Yr && Ta();
}
function tl(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Be(t, e, n, r = !0) {
  var i = (t & qe) !== 0, s = X, a = {
    ctx: pt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | fe,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      zr(a), a.f |= xa;
    } catch (f) {
      throw le(a), f;
    }
  else e !== null && rr(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Vi | On)) === 0;
  if (!l && !i && r && (s !== null && tl(a, s), j !== null && j.f & Dt)) {
    var u = (
      /** @type {Derived} */
      j
    );
    (u.effects ?? (u.effects = [])).push(a);
  }
  return a;
}
function Ur(t) {
  Qa();
  var e = X !== null && (X.f & ue) !== 0 && pt !== null && !pt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      pt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: X,
      reaction: j
    });
  } else {
    var r = jr(t);
    return r;
  }
}
function el(t) {
  const e = Be(qe, t, !0);
  return () => {
    le(e);
  };
}
function nl(t) {
  const e = Be(qe, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yn(e, () => {
      le(e), r(void 0);
    }) : (le(e), r(void 0));
  });
}
function jr(t) {
  return Be(qi, t, !1);
}
function ss(t) {
  return Be(Dr, t, !0);
}
function _n(t, e = [], n = tr) {
  const r = e.map(n);
  return Xr(() => t(...r.map(x)));
}
function Xr(t, e = 0) {
  return Be(Dr | Fr | e, t, !0);
}
function tn(t, e = !0) {
  return Be(Dr | ue, t, !0, e);
}
function as(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Yr, r = j;
    pi(!0), De(null);
    try {
      e.call(null);
    } finally {
      pi(n), De(r);
    }
  }
}
function ls(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    le(n, e), n = r;
  }
}
function rl(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ue || le(e), e = n;
  }
}
function le(t, e = !0) {
  var n = !1;
  if ((e || t.f & ba) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  ls(t, e && !n), Bn(t, 0), ae(t, Qn);
  var a = t.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  as(t);
  var l = t.parent;
  l !== null && l.first !== null && os(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function os(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Yn(t, e) {
  var n = [];
  Gr(t, n, !0), us(n, () => {
    le(t), e && e();
  });
}
function us(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Gr(t, e, n) {
  if (!(t.f & se)) {
    if (t.f ^= se, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Ir) !== 0 || (r.f & ue) !== 0;
      Gr(r, e, s ? n : !1), r = i;
    }
  }
}
function zn(t) {
  fs(t, !0);
}
function fs(t, e) {
  if (t.f & se) {
    t.f ^= se, t.f & gt || (t.f ^= gt), ln(t) && (ae(t, fe), rr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Ir) !== 0 || (n.f & ue) !== 0;
      fs(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function il(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let pt = null;
function gi(t) {
  pt = t;
}
function Kr(t, e = !1, n) {
  pt = {
    p: pt,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Wr(t) {
  const e = pt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = X, r = j;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Fe(s.effect), De(s.reaction), jr(s.fn);
        }
      } finally {
        Fe(n), De(r);
      }
    }
    pt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function cs() {
  return !0;
}
const sl = ["touchstart", "touchmove"];
function al(t) {
  return sl.includes(t);
}
const hs = /* @__PURE__ */ new Set(), br = /* @__PURE__ */ new Set();
function ll(t) {
  for (var e = 0; e < t.length; e++)
    hs.add(t[e]);
  for (var n of br)
    n(t);
}
function mn(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  ), a = 0, l = t.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var f = i.indexOf(e);
    if (f === -1)
      return;
    u <= f && (a = u);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    Fn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = j, h = X;
    De(null), Fe(null);
    try {
      for (var c, d = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          if (y !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (Lr(y)) {
              var [R, ..._] = y;
              R.apply(s, [t, ..._]);
            } else
              y.call(s, t);
        } catch (T) {
          c ? d.push(T) : c = T;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let T of d)
          queueMicrotask(() => {
            throw T;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, De(o), Fe(h);
    }
  }
}
function ds(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function en(t, e) {
  var n = (
    /** @type {Effect} */
    X
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function He(t, e) {
  var n = (e & wa) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Q)
      return en(U, null), U;
    r === void 0 && (r = ds(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || Wi ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      en(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ol(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Q)
      return en(U, null), U;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ds(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Re(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Re(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return en(u, u), u;
  };
}
function ve(t, e) {
  if (Q) {
    X.nodes_end = U, er();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Se(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function vs(t, e) {
  return ps(t, e);
}
function ul(t, e) {
  xr(), e.intro = e.intro ?? !1;
  const n = e.target, r = Q, i = U;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Li); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ce(s);
    if (!s)
      throw We;
    ie(!0), Xt(
      /** @type {Comment} */
      s
    ), er();
    const a = ps(t, { ...e, anchor: s });
    if (U === null || U.nodeType !== 8 || /** @type {Comment} */
    U.data !== Pr)
      throw Hr(), We;
    return ie(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === We)
      return e.recover === !1 && Oa(), xr(), Qi(n), ie(!1), vs(t, e);
    throw a;
  } finally {
    ie(r), Xt(i);
  }
}
const ke = /* @__PURE__ */ new Map();
function ps(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  xr();
  var l = /* @__PURE__ */ new Set(), u = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = al(d);
        e.addEventListener(d, mn, { passive: p });
        var y = ke.get(d);
        y === void 0 ? (document.addEventListener(d, mn, { passive: p }), ke.set(d, 1)) : ke.set(d, y + 1);
      }
    }
  };
  u(qr(hs)), br.add(u);
  var f = void 0, o = nl(() => {
    var h = n ?? e.appendChild(In());
    return tn(() => {
      if (s) {
        Kr({});
        var c = (
          /** @type {ComponentContext} */
          pt
        );
        c.c = s;
      }
      i && (r.$$events = i), Q && en(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, Q && (X.nodes_end = U), s && Wr();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, mn);
        var d = (
          /** @type {number} */
          ke.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, mn), ke.delete(c)) : ke.set(c, d);
      }
      br.delete(u), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return $r.set(f, o), f;
}
let $r = /* @__PURE__ */ new WeakMap();
function fl(t, e) {
  const n = $r.get(t);
  return n ? ($r.delete(t), n(e)) : Promise.resolve();
}
function _i(t, e, n = !1) {
  Q && er();
  var r = t, i = null, s = null, a = ht, l = n ? Ir : 0, u = !1;
  const f = (h, c = !0) => {
    u = !0, o(c, h);
  }, o = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (Q) {
      const p = (
        /** @type {Comment} */
        r.data === Or
      );
      !!a === p && (r = wr(), Xt(r), ie(!1), d = !0);
    }
    a ? (i ? zn(i) : c && (i = tn(() => c(r))), s && Yn(s, () => {
      s = null;
    })) : (s ? zn(s) : c && (s = tn(() => c(r))), i && Yn(i, () => {
      i = null;
    })), d && ie(!0);
  };
  Xr(() => {
    u = !1, e(f), u || o(null, null);
  }, l), Q && (r = U);
}
function dr(t, e) {
  return e;
}
function cl(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    Gr(e[a].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qi(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), pe(t, e[0].prev, e[s - 1].next);
  }
  us(i, () => {
    for (var f = 0; f < s; f++) {
      var o = e[f];
      l || (r.delete(o.k), pe(t, o.prev, o.next)), le(o.e, !l);
    }
  });
}
function vr(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  Q && er();
  var u = null, f = !1, o = /* @__PURE__ */ Ba(() => {
    var h = n();
    return Lr(h) ? h : h == null ? [] : qr(h);
  });
  Xr(() => {
    var h = x(o), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (Q) {
      var p = (
        /** @type {Comment} */
        a.data === Or
      );
      p !== (c === 0) && (a = wr(), Xt(a), ie(!1), d = !0);
    }
    if (Q) {
      for (var y = null, R, _ = 0; _ < c; _++) {
        if (U.nodeType === 8 && /** @type {Comment} */
        U.data === Pr) {
          a = /** @type {Comment} */
          U, d = !0, ie(!1);
          break;
        }
        var $ = h[_], T = r($, _);
        R = gs(
          U,
          l,
          y,
          null,
          $,
          T,
          _,
          i,
          e,
          n
        ), l.items.set(T, R), y = R;
      }
      c > 0 && Xt(wr());
    }
    Q || hl(h, l, a, i, e, r, n), s !== null && (c === 0 ? u ? zn(u) : u = tn(() => s(a)) : u !== null && Yn(u, () => {
      u = null;
    })), d && ie(!0), x(o);
  }), Q && (a = U);
}
function hl(t, e, n, r, i, s, a) {
  var l = t.length, u = e.items, f = e.first, o = f, h, c = null, d = [], p = [], y, R, _, $;
  for ($ = 0; $ < l; $ += 1) {
    if (y = t[$], R = s(y, $), _ = u.get(R), _ === void 0) {
      var T = o ? (
        /** @type {TemplateNode} */
        o.e.nodes_start
      ) : n;
      c = gs(
        T,
        e,
        c,
        c === null ? e.first : c.next,
        y,
        R,
        $,
        r,
        i,
        a
      ), u.set(R, c), d = [], p = [], o = c.next;
      continue;
    }
    if (dl(_, y, $), _.e.f & se && zn(_.e), _ !== o) {
      if (h !== void 0 && h.has(_)) {
        if (d.length < p.length) {
          var M = p[0], b;
          c = M.prev;
          var P = d[0], z = d[d.length - 1];
          for (b = 0; b < d.length; b += 1)
            mi(d[b], M, n);
          for (b = 0; b < p.length; b += 1)
            h.delete(p[b]);
          pe(e, P.prev, z.next), pe(e, c, P), pe(e, z, M), o = M, c = z, $ -= 1, d = [], p = [];
        } else
          h.delete(_), mi(_, o, n), pe(e, _.prev, _.next), pe(e, _, c === null ? e.first : c.next), pe(e, c, _), c = _;
        continue;
      }
      for (d = [], p = []; o !== null && o.k !== R; )
        o.e.f & se || (h ?? (h = /* @__PURE__ */ new Set())).add(o), p.push(o), o = o.next;
      if (o === null)
        continue;
      _ = o;
    }
    d.push(_), c = _, o = _.next;
  }
  if (o !== null || h !== void 0) {
    for (var J = h === void 0 ? [] : qr(h); o !== null; )
      o.e.f & se || J.push(o), o = o.next;
    var it = J.length;
    if (it > 0) {
      var nt = null;
      cl(e, J, nt, u);
    }
  }
  X.first = e.first && e.first.e, X.last = c && c.e;
}
function dl(t, e, n, r) {
  ji(t.v, e), t.i = n;
}
function gs(t, e, n, r, i, s, a, l, u, f) {
  var o = (u & da) !== 0, h = (u & pa) === 0, c = o ? h ? /* @__PURE__ */ Br(i) : Ct(i) : i, d = u & va ? Ct(a) : a, p = {
    i: d,
    v: c,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = tn(() => l(t, c, d, f), Q), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function mi(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); s !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(s)
    );
    i.before(s), s = a;
  }
}
function pe(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function _s(t, e) {
  zi(() => {
    var n = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function yi(t, e, n, r) {
  var i = t.__styles ?? (t.__styles = {});
  i[e] !== n && (i[e] = n, n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, ""));
}
function wi(t, e) {
  return t === e || (t == null ? void 0 : t[Je]) === e;
}
function En(t = {}, e, n, r) {
  return jr(() => {
    var i, s;
    return ss(() => {
      i = s, s = [], Hn(() => {
        t !== n(...s) && (e(t, ...s), i && wi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      zi(() => {
        s && wi(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function vl(t) {
  pt === null && il(), Ur(() => {
    const e = Hn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let yn = !1;
function pl(t) {
  var e = yn;
  try {
    return yn = !1, [t(), yn];
  } finally {
    yn = e;
  }
}
function Mt(t, e, n, r) {
  var b;
  var i = (n & ga) !== 0, s = !0, a = (n & ma) !== 0, l = (n & ya) !== 0, u = !1, f;
  a ? [f, u] = pl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var o = Je in t || Bi in t, h = a && (((b = $e(t, e)) == null ? void 0 : b.set) ?? (o && e in t && ((P) => t[e] = P))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, y = () => (p = !0, d && (d = !1, l ? c = Hn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Pa(), f = y(), h && h(f));
  var R;
  if (R = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? y() : (d = !0, p = !1, P);
  }, !(n & _a))
    return R;
  if (h) {
    var _ = t.$$legacy;
    return function(P, z) {
      return arguments.length > 0 ? ((!z || _ || u) && h(z ? R() : P), P) : R();
    };
  }
  var $ = !1, T = /* @__PURE__ */ Br(f), M = /* @__PURE__ */ tr(() => {
    var P = R(), z = x(T);
    return $ ? ($ = !1, z) : T.v = P;
  });
  return i || (M.equals = Vr), function(P, z) {
    if (arguments.length > 0) {
      const J = z ? x(M) : a ? bt(P) : P;
      return M.equals(J) || ($ = !0, W(T, J), p && c !== void 0 && (c = J), Hn(() => x(M))), P;
    }
    return x(M);
  };
}
function gl(t) {
  return new _l(t);
}
var re, Et;
class _l {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    cr(this, re);
    /** @type {Record<string, any>} */
    cr(this, Et);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var u = /* @__PURE__ */ Br(l);
      return n.set(a, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return x(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Bi ? !0 : (x(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, u) {
          return W(n.get(l) ?? r(l, u), u), Reflect.set(a, l, u);
        }
      }
    );
    hr(this, Et, (e.hydrate ? ul : vs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Nt(), hr(this, re, i.$$events);
    for (const a of Object.keys(ct(this, Et)))
      a === "$set" || a === "$destroy" || a === "$on" || Fn(this, a, {
        get() {
          return ct(this, Et)[a];
        },
        /** @param {any} value */
        set(l) {
          ct(this, Et)[a] = l;
        },
        enumerable: !0
      });
    ct(this, Et).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ct(this, Et).$destroy = () => {
      fl(ct(this, Et));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ct(this, Et).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    ct(this, re)[e] = ct(this, re)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return ct(this, re)[e].push(r), () => {
      ct(this, re)[e] = ct(this, re)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    ct(this, Et).$destroy();
  }
}
re = new WeakMap(), Et = new WeakMap();
let ms;
typeof HTMLElement == "function" && (ms = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    kt(this, "$$ctor");
    /** Slots */
    kt(this, "$$s");
    /** @type {any} The Svelte component instance */
    kt(this, "$$c");
    /** Whether or not the custom element is connected */
    kt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    kt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    kt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    kt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    kt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    kt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    kt(this, "$$me");
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (a) => {
          const l = document.createElement("slot");
          s !== "default" && (l.name = s), ve(a, l);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = ml(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = Cn(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = gl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = el(() => {
        ss(() => {
          var s;
          this.$$r = !0;
          for (const a of Dn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = Cn(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const l = this.$$c.$on(s, a);
          this.$$l_u.set(a, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Cn(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Dn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function Cn(t, e, n, r) {
  var s;
  const i = (s = n[t]) == null ? void 0 : s.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function ml(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ys(t, e, n, r, i, s) {
  let a = class extends ms {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Dn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Dn(e).forEach((l) => {
    Fn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var h;
        u = Cn(l, u, e), this.$$d[l] = u;
        var f = this.$$c;
        if (f) {
          var o = (h = $e(f, l)) == null ? void 0 : h.get;
          o ? f[l] = u : f.$set({ [l]: u });
        }
      }
    });
  }), r.forEach((l) => {
    Fn(a.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var yl = { value: () => {
} };
function ws() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Nn(n);
}
function Nn(t) {
  this._ = t;
}
function wl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Nn.prototype = ws.prototype = {
  constructor: Nn,
  on: function(t, e) {
    var n = this._, r = wl(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = xl(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = xi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = xi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Nn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n);
  }
};
function xl(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function xi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = yl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ar = "http://www.w3.org/1999/xhtml";
const bi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ar,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ir(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), bi.hasOwnProperty(e) ? { space: bi[e], local: t } : t;
}
function bl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ar && e.documentElement.namespaceURI === Ar ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function $l(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function xs(t) {
  var e = ir(t);
  return (e.local ? $l : bl)(e);
}
function Al() {
}
function Jr(t) {
  return t == null ? Al : function() {
    return this.querySelector(t);
  };
}
function Rl(t) {
  typeof t != "function" && (t = Jr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = new Array(a), u, f, o = 0; o < a; ++o)
      (u = s[o]) && (f = t.call(u, u.__data__, o, s)) && ("__data__" in u && (f.__data__ = u.__data__), l[o] = f);
  return new $t(r, this._parents);
}
function El(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Cl() {
  return [];
}
function bs(t) {
  return t == null ? Cl : function() {
    return this.querySelectorAll(t);
  };
}
function Nl(t) {
  return function() {
    return El(t.apply(this, arguments));
  };
}
function Tl(t) {
  typeof t == "function" ? t = Nl(t) : t = bs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], l = a.length, u, f = 0; f < l; ++f)
      (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
  return new $t(r, i);
}
function $s(t) {
  return function() {
    return this.matches(t);
  };
}
function As(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Sl = Array.prototype.find;
function kl(t) {
  return function() {
    return Sl.call(this.children, t);
  };
}
function Ml() {
  return this.firstElementChild;
}
function Ol(t) {
  return this.select(t == null ? Ml : kl(typeof t == "function" ? t : As(t)));
}
var Pl = Array.prototype.filter;
function Dl() {
  return Array.from(this.children);
}
function Fl(t) {
  return function() {
    return Pl.call(this.children, t);
  };
}
function Il(t) {
  return this.selectAll(t == null ? Dl : Fl(typeof t == "function" ? t : As(t)));
}
function Ll(t) {
  typeof t != "function" && (t = $s(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], u, f = 0; f < a; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && l.push(u);
  return new $t(r, this._parents);
}
function Rs(t) {
  return new Array(t.length);
}
function ql() {
  return new $t(this._enter || this._groups.map(Rs), this._parents);
}
function Un(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Un.prototype = {
  constructor: Un,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Vl(t) {
  return function() {
    return t;
  };
}
function Bl(t, e, n, r, i, s) {
  for (var a = 0, l, u = e.length, f = s.length; a < f; ++a)
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new Un(t, s[a]);
  for (; a < u; ++a)
    (l = e[a]) && (i[a] = l);
}
function Hl(t, e, n, r, i, s, a) {
  var l, u, f = /* @__PURE__ */ new Map(), o = e.length, h = s.length, c = new Array(o), d;
  for (l = 0; l < o; ++l)
    (u = e[l]) && (c[l] = d = a.call(u, u.__data__, l, e) + "", f.has(d) ? i[l] = u : f.set(d, u));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (u = f.get(d)) ? (r[l] = u, u.__data__ = s[l], f.delete(d)) : n[l] = new Un(t, s[l]);
  for (l = 0; l < o; ++l)
    (u = e[l]) && f.get(c[l]) === u && (i[l] = u);
}
function Yl(t) {
  return t.__data__;
}
function zl(t, e) {
  if (!arguments.length) return Array.from(this, Yl);
  var n = e ? Hl : Bl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Vl(t));
  for (var s = i.length, a = new Array(s), l = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var o = r[f], h = i[f], c = h.length, d = Ul(t.call(o, o && o.__data__, f, r)), p = d.length, y = l[f] = new Array(p), R = a[f] = new Array(p), _ = u[f] = new Array(c);
    n(o, h, y, R, _, d, e);
    for (var $ = 0, T = 0, M, b; $ < p; ++$)
      if (M = y[$]) {
        for ($ >= T && (T = $ + 1); !(b = R[T]) && ++T < p; ) ;
        M._next = b || null;
      }
  }
  return a = new $t(a, r), a._enter = l, a._exit = u, a;
}
function Ul(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function jl() {
  return new $t(this._exit || this._groups.map(Rs), this._parents);
}
function Xl(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Gl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), u = 0; u < a; ++u)
    for (var f = n[u], o = r[u], h = f.length, c = l[u] = new Array(h), d, p = 0; p < h; ++p)
      (d = f[p] || o[p]) && (c[p] = d);
  for (; u < i; ++u)
    l[u] = n[u];
  return new $t(l, this._parents);
}
function Kl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Wl(t) {
  t || (t = Jl);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], l = a.length, u = i[s] = new Array(l), f, o = 0; o < l; ++o)
      (f = a[o]) && (u[o] = f);
    u.sort(e);
  }
  return new $t(i, this._parents).order();
}
function Jl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ql() {
  return Array.from(this);
}
function to() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function eo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function no() {
  return !this.node();
}
function ro(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, l; s < a; ++s)
      (l = i[s]) && t.call(l, l.__data__, s, i);
  return this;
}
function io(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function so(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ao(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function lo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function oo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function uo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function fo(t, e) {
  var n = ir(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? so : io : typeof e == "function" ? n.local ? uo : oo : n.local ? lo : ao)(n, e));
}
function Es(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function co(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ho(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function vo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function po(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? co : typeof e == "function" ? vo : ho)(t, e, n ?? "")) : Ie(this.node(), t);
}
function Ie(t, e) {
  return t.style.getPropertyValue(e) || Es(t).getComputedStyle(t, null).getPropertyValue(e);
}
function go(t) {
  return function() {
    delete this[t];
  };
}
function _o(t, e) {
  return function() {
    this[t] = e;
  };
}
function mo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function yo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? go : typeof e == "function" ? mo : _o)(t, e)) : this.node()[t];
}
function Cs(t) {
  return t.trim().split(/^|\s+/);
}
function Zr(t) {
  return t.classList || new Ns(t);
}
function Ns(t) {
  this._node = t, this._names = Cs(t.getAttribute("class") || "");
}
Ns.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ts(t, e) {
  for (var n = Zr(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ss(t, e) {
  for (var n = Zr(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function wo(t) {
  return function() {
    Ts(this, t);
  };
}
function xo(t) {
  return function() {
    Ss(this, t);
  };
}
function bo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ts : Ss)(this, t);
  };
}
function $o(t, e) {
  var n = Cs(t + "");
  if (arguments.length < 2) {
    for (var r = Zr(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? bo : e ? wo : xo)(n, e));
}
function Ao() {
  this.textContent = "";
}
function Ro(t) {
  return function() {
    this.textContent = t;
  };
}
function Eo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Co(t) {
  return arguments.length ? this.each(t == null ? Ao : (typeof t == "function" ? Eo : Ro)(t)) : this.node().textContent;
}
function No() {
  this.innerHTML = "";
}
function To(t) {
  return function() {
    this.innerHTML = t;
  };
}
function So(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ko(t) {
  return arguments.length ? this.each(t == null ? No : (typeof t == "function" ? So : To)(t)) : this.node().innerHTML;
}
function Mo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Oo() {
  return this.each(Mo);
}
function Po() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Do() {
  return this.each(Po);
}
function Fo(t) {
  var e = typeof t == "function" ? t : xs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Io() {
  return null;
}
function Lo(t, e) {
  var n = typeof t == "function" ? t : xs(t), r = e == null ? Io : typeof e == "function" ? e : Jr(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Vo() {
  return this.each(qo);
}
function Bo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ho() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Yo(t) {
  return this.select(t ? Ho : Bo);
}
function zo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Uo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function jo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Xo(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Go(t, e, n) {
  return function() {
    var r = this.__on, i, s = Uo(e);
    if (r) {
      for (var a = 0, l = r.length; a < l; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), i = { type: t.type, name: t.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ko(t, e, n) {
  var r = jo(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var u = 0, f = l.length, o; u < f; ++u)
        for (i = 0, o = l[u]; i < s; ++i)
          if ((a = r[i]).type === o.type && a.name === o.name)
            return o.value;
    }
    return;
  }
  for (l = e ? Go : Xo, i = 0; i < s; ++i) this.each(l(r[i], e, n));
  return this;
}
function ks(t, e, n) {
  var r = Es(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Wo(t, e) {
  return function() {
    return ks(this, t, e);
  };
}
function Jo(t, e) {
  return function() {
    return ks(this, t, e.apply(this, arguments));
  };
}
function Zo(t, e) {
  return this.each((typeof e == "function" ? Jo : Wo)(t, e));
}
function* Qo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ms = [null];
function $t(t, e) {
  this._groups = t, this._parents = e;
}
function Ye() {
  return new $t([[document.documentElement]], Ms);
}
function tu() {
  return this;
}
$t.prototype = Ye.prototype = {
  constructor: $t,
  select: Rl,
  selectAll: Tl,
  selectChild: Ol,
  selectChildren: Il,
  filter: Ll,
  data: zl,
  enter: ql,
  exit: jl,
  join: Xl,
  merge: Gl,
  selection: tu,
  order: Kl,
  sort: Wl,
  call: Zl,
  nodes: Ql,
  node: to,
  size: eo,
  empty: no,
  each: ro,
  attr: fo,
  style: po,
  property: yo,
  classed: $o,
  text: Co,
  html: ko,
  raise: Oo,
  lower: Do,
  append: Fo,
  insert: Lo,
  remove: Vo,
  clone: Yo,
  datum: zo,
  on: Ko,
  dispatch: Zo,
  [Symbol.iterator]: Qo
};
function at(t) {
  return typeof t == "string" ? new $t([[document.querySelector(t)]], [document.documentElement]) : new $t([[t]], Ms);
}
function Qr(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Os(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function on() {
}
var nn = 0.7, jn = 1 / nn, Pe = "\\s*([+-]?\\d+)\\s*", rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eu = /^#([0-9a-f]{3,8})$/, nu = new RegExp(`^rgb\\(${Pe},${Pe},${Pe}\\)$`), ru = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), iu = new RegExp(`^rgba\\(${Pe},${Pe},${Pe},${rn}\\)$`), su = new RegExp(`^rgba\\(${jt},${jt},${jt},${rn}\\)$`), au = new RegExp(`^hsl\\(${rn},${jt},${jt}\\)$`), lu = new RegExp(`^hsla\\(${rn},${jt},${jt},${rn}\\)$`), $i = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Qr(on, Ee, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ai,
  // Deprecated! Use color.formatHex.
  formatHex: Ai,
  formatHex8: ou,
  formatHsl: uu,
  formatRgb: Ri,
  toString: Ri
});
function Ai() {
  return this.rgb().formatHex();
}
function ou() {
  return this.rgb().formatHex8();
}
function uu() {
  return Ps(this).formatHsl();
}
function Ri() {
  return this.rgb().formatRgb();
}
function Ee(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = eu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ei(e) : n === 3 ? new vt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? wn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? wn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = nu.exec(t)) ? new vt(e[1], e[2], e[3], 1) : (e = ru.exec(t)) ? new vt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = iu.exec(t)) ? wn(e[1], e[2], e[3], e[4]) : (e = su.exec(t)) ? wn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = au.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, 1) : (e = lu.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, e[4]) : $i.hasOwnProperty(t) ? Ei($i[t]) : t === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function Ei(t) {
  return new vt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function wn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new vt(t, e, n, r);
}
function fu(t) {
  return t instanceof on || (t = Ee(t)), t ? (t = t.rgb(), new vt(t.r, t.g, t.b, t.opacity)) : new vt();
}
function Rr(t, e, n, r) {
  return arguments.length === 1 ? fu(t) : new vt(t, e, n, r ?? 1);
}
function vt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Qr(vt, Rr, Os(on, {
  brighter(t) {
    return t = t == null ? jn : Math.pow(jn, t), new vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? nn : Math.pow(nn, t), new vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vt(Ae(this.r), Ae(this.g), Ae(this.b), Xn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ci,
  // Deprecated! Use color.formatHex.
  formatHex: Ci,
  formatHex8: cu,
  formatRgb: Ni,
  toString: Ni
}));
function Ci() {
  return `#${be(this.r)}${be(this.g)}${be(this.b)}`;
}
function cu() {
  return `#${be(this.r)}${be(this.g)}${be(this.b)}${be((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ni() {
  const t = Xn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ae(this.r)}, ${Ae(this.g)}, ${Ae(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Xn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ae(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function be(t) {
  return t = Ae(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ti(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Pt(t, e, n, r);
}
function Ps(t) {
  if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);
  if (t instanceof on || (t = Ee(t)), !t) return new Pt();
  if (t instanceof Pt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, u = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= u < 0.5 ? s + i : 2 - s - i, a *= 60) : l = u > 0 && u < 1 ? 0 : a, new Pt(a, l, u, t.opacity);
}
function hu(t, e, n, r) {
  return arguments.length === 1 ? Ps(t) : new Pt(t, e, n, r ?? 1);
}
function Pt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Qr(Pt, hu, Os(on, {
  brighter(t) {
    return t = t == null ? jn : Math.pow(jn, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? nn : Math.pow(nn, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new vt(
      pr(t >= 240 ? t - 240 : t + 120, i, r),
      pr(t, i, r),
      pr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Pt(Si(this.h), xn(this.s), xn(this.l), Xn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Xn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Si(this.h)}, ${xn(this.s) * 100}%, ${xn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Si(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function xn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ti = (t) => () => t;
function du(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function vu(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function pu(t) {
  return (t = +t) == 1 ? Ds : function(e, n) {
    return n - e ? vu(e, n, t) : ti(isNaN(e) ? n : e);
  };
}
function Ds(t, e) {
  var n = e - t;
  return n ? du(t, n) : ti(isNaN(t) ? e : t);
}
const Gn = function t(e) {
  var n = pu(e);
  function r(i, s) {
    var a = n((i = Rr(i)).r, (s = Rr(s)).r), l = n(i.g, s.g), u = n(i.b, s.b), f = Ds(i.opacity, s.opacity);
    return function(o) {
      return i.r = a(o), i.g = l(o), i.b = u(o), i.opacity = f(o), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function gu(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function _u(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function mu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Me(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(l) {
    for (a = 0; a < r; ++a) s[a] = i[a](l);
    return s;
  };
}
function yu(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function zt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function wu(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Me(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Er = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gr = new RegExp(Er.source, "g");
function xu(t) {
  return function() {
    return t;
  };
}
function bu(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Fs(t, e) {
  var n = Er.lastIndex = gr.lastIndex = 0, r, i, s, a = -1, l = [], u = [];
  for (t = t + "", e = e + ""; (r = Er.exec(t)) && (i = gr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, u.push({ i: a, x: zt(r, i) })), n = gr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? u[0] ? bu(u[0].x) : xu(e) : (e = u.length, function(f) {
    for (var o = 0, h; o < e; ++o) l[(h = u[o]).i] = h.x(f);
    return l.join("");
  });
}
function Me(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ti(e) : (n === "number" ? zt : n === "string" ? (r = Ee(e)) ? (e = r, Gn) : Fs : e instanceof Ee ? Gn : e instanceof Date ? yu : _u(e) ? gu : Array.isArray(e) ? mu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? wu : zt)(t, e);
}
var ki = 180 / Math.PI, Cr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Is(t, e, n, r, i, s) {
  var a, l, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, u /= l), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * ki,
    skewX: Math.atan(u) * ki,
    scaleX: a,
    scaleY: l
  };
}
var bn;
function $u(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Cr : Is(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Au(t) {
  return t == null || (bn || (bn = document.createElementNS("http://www.w3.org/2000/svg", "g")), bn.setAttribute("transform", t), !(t = bn.transform.baseVal.consolidate())) ? Cr : (t = t.matrix, Is(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ls(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, o, h, c, d, p) {
    if (f !== h || o !== c) {
      var y = d.push("translate(", null, e, null, n);
      p.push({ i: y - 4, x: zt(f, h) }, { i: y - 2, x: zt(o, c) });
    } else (h || c) && d.push("translate(" + h + e + c + n);
  }
  function a(f, o, h, c) {
    f !== o ? (f - o > 180 ? o += 360 : o - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: zt(f, o) })) : o && h.push(i(h) + "rotate(" + o + r);
  }
  function l(f, o, h, c) {
    f !== o ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: zt(f, o) }) : o && h.push(i(h) + "skewX(" + o + r);
  }
  function u(f, o, h, c, d, p) {
    if (f !== h || o !== c) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: y - 4, x: zt(f, h) }, { i: y - 2, x: zt(o, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, o) {
    var h = [], c = [];
    return f = t(f), o = t(o), s(f.translateX, f.translateY, o.translateX, o.translateY, h, c), a(f.rotate, o.rotate, h, c), l(f.skewX, o.skewX, h, c), u(f.scaleX, f.scaleY, o.scaleX, o.scaleY, h, c), f = o = null, function(d) {
      for (var p = -1, y = c.length, R; ++p < y; ) h[(R = c[p]).i] = R.x(d);
      return h.join("");
    };
  };
}
var Ru = Ls($u, "px, ", "px)", "deg)"), Eu = Ls(Au, ", ", ")", ")"), Le = 0, Xe = 0, je = 0, qs = 1e3, Kn, Ge, Wn = 0, Ce = 0, sr = 0, sn = typeof performance == "object" && performance.now ? performance : Date, Vs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ei() {
  return Ce || (Vs(Cu), Ce = sn.now() + sr);
}
function Cu() {
  Ce = 0;
}
function Jn() {
  this._call = this._time = this._next = null;
}
Jn.prototype = Bs.prototype = {
  constructor: Jn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ei() : +n) + (e == null ? 0 : +e), !this._next && Ge !== this && (Ge ? Ge._next = this : Kn = this, Ge = this), this._call = t, this._time = n, Nr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nr());
  }
};
function Bs(t, e, n) {
  var r = new Jn();
  return r.restart(t, e, n), r;
}
function Nu() {
  ei(), ++Le;
  for (var t = Kn, e; t; )
    (e = Ce - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Le;
}
function Mi() {
  Ce = (Wn = sn.now()) + sr, Le = Xe = 0;
  try {
    Nu();
  } finally {
    Le = 0, Su(), Ce = 0;
  }
}
function Tu() {
  var t = sn.now(), e = t - Wn;
  e > qs && (sr -= e, Wn = t);
}
function Su() {
  for (var t, e = Kn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Kn = n);
  Ge = t, Nr(r);
}
function Nr(t) {
  if (!Le) {
    Xe && (Xe = clearTimeout(Xe));
    var e = t - Ce;
    e > 24 ? (t < 1 / 0 && (Xe = setTimeout(Mi, t - sn.now() - sr)), je && (je = clearInterval(je))) : (je || (Wn = sn.now(), je = setInterval(Tu, qs)), Le = 1, Vs(Mi));
  }
}
function Oi(t, e, n) {
  var r = new Jn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ku = ws("start", "end", "cancel", "interrupt"), Mu = [], Hs = 0, Pi = 1, Tr = 2, Tn = 3, Di = 4, Sr = 5, Sn = 6;
function ar(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Ou(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ku,
    tween: Mu,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Hs
  });
}
function ni(t, e) {
  var n = Ft(t, e);
  if (n.state > Hs) throw new Error("too late; already scheduled");
  return n;
}
function Gt(t, e) {
  var n = Ft(t, e);
  if (n.state > Tn) throw new Error("too late; already running");
  return n;
}
function Ft(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Ou(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Bs(s, 0, n.time);
  function s(f) {
    n.state = Pi, n.timer.restart(a, n.delay, n.time), n.delay <= f && a(f - n.delay);
  }
  function a(f) {
    var o, h, c, d;
    if (n.state !== Pi) return u();
    for (o in r)
      if (d = r[o], d.name === n.name) {
        if (d.state === Tn) return Oi(a);
        d.state === Di ? (d.state = Sn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[o]) : +o < e && (d.state = Sn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[o]);
      }
    if (Oi(function() {
      n.state === Tn && (n.state = Di, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Tr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Tr) {
      for (n.state = Tn, i = new Array(c = n.tween.length), o = 0, h = -1; o < c; ++o)
        (d = n.tween[o].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(f) {
    for (var o = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(u), n.state = Sr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, o);
    n.state === Sr && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Sn, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Pu(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Tr && r.state < Sr, r.state = Sn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Du(t) {
  return this.each(function() {
    Pu(this, t);
  });
}
function Fu(t, e) {
  var n, r;
  return function() {
    var i = Gt(this, t), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, l = r.length; a < l; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Iu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Gt(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var l = { name: e, value: n }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === e) {
          i[u] = l;
          break;
        }
      u === f && i.push(l);
    }
    s.tween = i;
  };
}
function Lu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ft(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Fu : Iu)(n, t, e));
}
function ri(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Gt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ft(i, r).value[e];
  };
}
function Ys(t, e) {
  var n;
  return (typeof e == "number" ? zt : e instanceof Ee ? Gn : (n = Ee(e)) ? (e = n, Gn) : Fs)(t, e);
}
function qu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Bu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Hu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Yu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), u;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = l + "", a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l)));
  };
}
function zu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), u;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = l + "", a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l)));
  };
}
function Uu(t, e) {
  var n = ir(t), r = n === "transform" ? Eu : Ys;
  return this.attrTween(t, typeof e == "function" ? (n.local ? zu : Yu)(n, r, ri(this, "attr." + t, e)) : e == null ? (n.local ? Vu : qu)(n) : (n.local ? Hu : Bu)(n, r, e));
}
function ju(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Xu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Gu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Xu(t, s)), n;
  }
  return i._value = e, i;
}
function Ku(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && ju(t, s)), n;
  }
  return i._value = e, i;
}
function Wu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = ir(t);
  return this.tween(n, (r.local ? Gu : Ku)(r, e));
}
function Ju(t, e) {
  return function() {
    ni(this, t).delay = +e.apply(this, arguments);
  };
}
function Zu(t, e) {
  return e = +e, function() {
    ni(this, t).delay = e;
  };
}
function Qu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ju : Zu)(e, t)) : Ft(this.node(), e).delay;
}
function tf(t, e) {
  return function() {
    Gt(this, t).duration = +e.apply(this, arguments);
  };
}
function ef(t, e) {
  return e = +e, function() {
    Gt(this, t).duration = e;
  };
}
function nf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tf : ef)(e, t)) : Ft(this.node(), e).duration;
}
function rf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Gt(this, t).ease = e;
  };
}
function sf(t) {
  var e = this._id;
  return arguments.length ? this.each(rf(e, t)) : Ft(this.node(), e).ease;
}
function af(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Gt(this, t).ease = n;
  };
}
function lf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(af(this._id, t));
}
function of(t) {
  typeof t != "function" && (t = $s(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], u, f = 0; f < a; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && l.push(u);
  return new oe(r, this._parents, this._name, this._id);
}
function uf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var u = e[l], f = n[l], o = u.length, h = a[l] = new Array(o), c, d = 0; d < o; ++d)
      (c = u[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new oe(a, this._parents, this._name, this._id);
}
function ff(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function cf(t, e, n) {
  var r, i, s = ff(e) ? ni : Gt;
  return function() {
    var a = s(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(e, n), a.on = i;
  };
}
function hf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ft(this.node(), n).on.on(t) : this.each(cf(n, t, e));
}
function df(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function vf() {
  return this.on("end.remove", df(this._id));
}
function pf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Jr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], u = l.length, f = s[a] = new Array(u), o, h, c = 0; c < u; ++c)
      (o = l[c]) && (h = t.call(o, o.__data__, c, l)) && ("__data__" in o && (h.__data__ = o.__data__), f[c] = h, ar(f[c], e, n, c, f, Ft(o, n)));
  return new oe(s, this._parents, e, n);
}
function gf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var u = r[l], f = u.length, o, h = 0; h < f; ++h)
      if (o = u[h]) {
        for (var c = t.call(o, o.__data__, h, u), d, p = Ft(o, n), y = 0, R = c.length; y < R; ++y)
          (d = c[y]) && ar(d, e, n, y, c, p);
        s.push(c), a.push(o);
      }
  return new oe(s, a, e, n);
}
var _f = Ye.prototype.constructor;
function mf() {
  return new _f(this._groups, this._parents);
}
function yf(t, e) {
  var n, r, i;
  return function() {
    var s = Ie(this, t), a = (this.style.removeProperty(t), Ie(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function zs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Ie(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function xf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Ie(this, t), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(t), Ie(this, t))), a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l));
  };
}
function bf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var u = Gt(this, t), f = u.on, o = u.value[s] == null ? l || (l = zs(e)) : void 0;
    (f !== n || i !== o) && (r = (n = f).copy()).on(a, i = o), u.on = r;
  };
}
function $f(t, e, n) {
  var r = (t += "") == "transform" ? Ru : Ys;
  return e == null ? this.styleTween(t, yf(t, r)).on("end.style." + t, zs(t)) : typeof e == "function" ? this.styleTween(t, xf(t, r, ri(this, "style." + t, e))).each(bf(this._id, t)) : this.styleTween(t, wf(t, r, e), n).on("end.style." + t, null);
}
function Af(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Rf(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Af(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ef(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Rf(t, e, n ?? ""));
}
function Cf(t) {
  return function() {
    this.textContent = t;
  };
}
function Nf(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Tf(t) {
  return this.tween("text", typeof t == "function" ? Nf(ri(this, "text", t)) : Cf(t == null ? "" : t + ""));
}
function Sf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function kf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Sf(i)), e;
  }
  return r._value = t, r;
}
function Mf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, kf(t));
}
function Of() {
  for (var t = this._name, e = this._id, n = Us(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, u, f = 0; f < l; ++f)
      if (u = a[f]) {
        var o = Ft(u, e);
        ar(u, t, n, f, a, {
          time: o.time + o.delay + o.duration,
          delay: 0,
          duration: o.duration,
          ease: o.ease
        });
      }
  return new oe(r, this._parents, t, n);
}
function Pf() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var l = { value: a }, u = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var f = Gt(this, r), o = f.on;
      o !== t && (e = (t = o).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(u)), f.on = e;
    }), i === 0 && s();
  });
}
var Df = 0;
function oe(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function kn(t) {
  return Ye().transition(t);
}
function Us() {
  return ++Df;
}
var Qt = Ye.prototype;
oe.prototype = kn.prototype = {
  constructor: oe,
  select: pf,
  selectAll: gf,
  selectChild: Qt.selectChild,
  selectChildren: Qt.selectChildren,
  filter: of,
  merge: uf,
  selection: mf,
  transition: Of,
  call: Qt.call,
  nodes: Qt.nodes,
  node: Qt.node,
  size: Qt.size,
  empty: Qt.empty,
  each: Qt.each,
  on: hf,
  attr: Uu,
  attrTween: Wu,
  style: $f,
  styleTween: Ef,
  text: Tf,
  textTween: Mf,
  remove: vf,
  tween: Lu,
  delay: Qu,
  duration: nf,
  ease: sf,
  easeVarying: lf,
  end: Pf,
  [Symbol.iterator]: Qt[Symbol.iterator]
};
function Ff(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var If = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ff
};
function Lf(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function qf(t) {
  var e, n;
  t instanceof oe ? (e = t._id, t = t._name) : (e = Us(), (n = If).time = ei(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, u, f = 0; f < l; ++f)
      (u = a[f]) && ar(u, t, e, f, a, n || Lf(u, e));
  return new oe(r, this._parents, t, e);
}
Ye.prototype.interrupt = Du;
Ye.prototype.transition = qf;
const kr = Math.PI, Mr = 2 * kr, xe = 1e-6, Vf = Mr - xe;
function js(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Bf(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return js;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Hf {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? js : Bf(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, s, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, s) {
    if (e = +e, n = +n, r = +r, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, l = this._y1, u = r - e, f = i - n, o = a - e, h = l - n, c = o * o + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > xe) if (!(Math.abs(h * u - f * o) > xe) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, y = u * u + f * f, R = d * d + p * p, _ = Math.sqrt(y), $ = Math.sqrt(c), T = s * Math.tan((kr - Math.acos((y + c - R) / (2 * _ * $))) / 2), M = T / $, b = T / _;
      Math.abs(M - 1) > xe && this._append`L${e + M * o},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * d > o * p)},${this._x1 = e + b * u},${this._y1 = n + b * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), u = r * Math.sin(i), f = e + l, o = n + u, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${o}` : (Math.abs(this._x1 - f) > xe || Math.abs(this._y1 - o) > xe) && this._append`L${f},${o}`, r && (c < 0 && (c = c % Mr + Mr), c > Vf ? this._append`A${r},${r},0,1,${h},${e - l},${n - u}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = o}` : c > xe && this._append`A${r},${r},0,${+(c >= kr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Yf(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const zf = Yf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function ut(t) {
  return function() {
    return t;
  };
}
const Fi = Math.abs, lt = Math.atan2, we = Math.cos, Uf = Math.max, _r = Math.min, Yt = Math.sin, Oe = Math.sqrt, dt = 1e-12, an = Math.PI, Zn = an / 2, Mn = 2 * an;
function jf(t) {
  return t > 1 ? 0 : t < -1 ? an : Math.acos(t);
}
function Ii(t) {
  return t >= 1 ? Zn : t <= -1 ? -Zn : Math.asin(t);
}
function Xf(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length) return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new Hf(e);
}
function Gf(t) {
  return t.innerRadius;
}
function Kf(t) {
  return t.outerRadius;
}
function Wf(t) {
  return t.startAngle;
}
function Jf(t) {
  return t.endAngle;
}
function Zf(t) {
  return t && t.padAngle;
}
function Qf(t, e, n, r, i, s, a, l) {
  var u = n - t, f = r - e, o = a - i, h = l - s, c = h * u - o * f;
  if (!(c * c < dt))
    return c = (o * (e - s) - h * (t - i)) / c, [t + c * u, e + c * f];
}
function $n(t, e, n, r, i, s, a) {
  var l = t - n, u = e - r, f = (a ? s : -s) / Oe(l * l + u * u), o = f * u, h = -f * l, c = t + o, d = e + h, p = n + o, y = r + h, R = (c + p) / 2, _ = (d + y) / 2, $ = p - c, T = y - d, M = $ * $ + T * T, b = i - s, P = c * y - p * d, z = (T < 0 ? -1 : 1) * Oe(Uf(0, b * b * M - P * P)), J = (P * T - $ * z) / M, it = (-P * $ - T * z) / M, nt = (P * T + $ * z) / M, H = (-P * $ + T * z) / M, F = J - R, E = it - _, L = nt - R, G = H - _;
  return F * F + E * E > L * L + G * G && (J = nt, it = H), {
    cx: J,
    cy: it,
    x01: -o,
    y01: -h,
    x11: J * (i / b - 1),
    y11: it * (i / b - 1)
  };
}
function te() {
  var t = Gf, e = Kf, n = ut(0), r = null, i = Wf, s = Jf, a = Zf, l = null, u = Xf(f);
  function f() {
    var o, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - Zn, y = s.apply(this, arguments) - Zn, R = Fi(y - p), _ = y > p;
    if (l || (l = o = u()), d < c && (h = d, d = c, c = h), !(d > dt)) l.moveTo(0, 0);
    else if (R > Mn - dt)
      l.moveTo(d * we(p), d * Yt(p)), l.arc(0, 0, d, p, y, !_), c > dt && (l.moveTo(c * we(y), c * Yt(y)), l.arc(0, 0, c, y, p, _));
    else {
      var $ = p, T = y, M = p, b = y, P = R, z = R, J = a.apply(this, arguments) / 2, it = J > dt && (r ? +r.apply(this, arguments) : Oe(c * c + d * d)), nt = _r(Fi(d - c) / 2, +n.apply(this, arguments)), H = nt, F = nt, E, L;
      if (it > dt) {
        var G = Ii(it / c * Yt(J)), he = Ii(it / d * Yt(J));
        (P -= G * 2) > dt ? (G *= _ ? 1 : -1, M += G, b -= G) : (P = 0, M = b = (p + y) / 2), (z -= he * 2) > dt ? (he *= _ ? 1 : -1, $ += he, T -= he) : (z = 0, $ = T = (p + y) / 2);
      }
      var At = d * we($), _t = d * Yt($), It = c * we(b), ft = c * Yt(b);
      if (nt > dt) {
        var Lt = d * we(T), St = d * Yt(T), de = c * we(M), _e = c * Yt(M), mt;
        if (R < an)
          if (mt = Qf(At, _t, de, _e, Lt, St, It, ft)) {
            var qt = At - mt[0], Vt = _t - mt[1], Kt = Lt - mt[0], Wt = St - mt[1], Jt = 1 / Yt(jf((qt * Kt + Vt * Wt) / (Oe(qt * qt + Vt * Vt) * Oe(Kt * Kt + Wt * Wt))) / 2), me = Oe(mt[0] * mt[0] + mt[1] * mt[1]);
            H = _r(nt, (c - me) / (Jt - 1)), F = _r(nt, (d - me) / (Jt + 1));
          } else
            H = F = 0;
      }
      z > dt ? F > dt ? (E = $n(de, _e, At, _t, d, F, _), L = $n(Lt, St, It, ft, d, F, _), l.moveTo(E.cx + E.x01, E.cy + E.y01), F < nt ? l.arc(E.cx, E.cy, F, lt(E.y01, E.x01), lt(L.y01, L.x01), !_) : (l.arc(E.cx, E.cy, F, lt(E.y01, E.x01), lt(E.y11, E.x11), !_), l.arc(0, 0, d, lt(E.cy + E.y11, E.cx + E.x11), lt(L.cy + L.y11, L.cx + L.x11), !_), l.arc(L.cx, L.cy, F, lt(L.y11, L.x11), lt(L.y01, L.x01), !_))) : (l.moveTo(At, _t), l.arc(0, 0, d, $, T, !_)) : l.moveTo(At, _t), !(c > dt) || !(P > dt) ? l.lineTo(It, ft) : H > dt ? (E = $n(It, ft, Lt, St, c, -H, _), L = $n(At, _t, de, _e, c, -H, _), l.lineTo(E.cx + E.x01, E.cy + E.y01), H < nt ? l.arc(E.cx, E.cy, H, lt(E.y01, E.x01), lt(L.y01, L.x01), !_) : (l.arc(E.cx, E.cy, H, lt(E.y01, E.x01), lt(E.y11, E.x11), !_), l.arc(0, 0, c, lt(E.cy + E.y11, E.cx + E.x11), lt(L.cy + L.y11, L.cx + L.x11), _), l.arc(L.cx, L.cy, H, lt(L.y11, L.x11), lt(L.y01, L.x01), !_))) : l.arc(0, 0, c, b, M, _);
    }
    if (l.closePath(), o) return l = null, o + "" || null;
  }
  return f.centroid = function() {
    var o = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - an / 2;
    return [we(h) * o, Yt(h) * o];
  }, f.innerRadius = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : ut(+o), f) : t;
  }, f.outerRadius = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : ut(+o), f) : e;
  }, f.cornerRadius = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : ut(+o), f) : n;
  }, f.padRadius = function(o) {
    return arguments.length ? (r = o == null ? null : typeof o == "function" ? o : ut(+o), f) : r;
  }, f.startAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : ut(+o), f) : i;
  }, f.endAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : ut(+o), f) : s;
  }, f.padAngle = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : ut(+o), f) : a;
  }, f.context = function(o) {
    return arguments.length ? (l = o ?? null, f) : l;
  }, f;
}
function tc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ec(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function nc(t) {
  return t;
}
function mr() {
  var t = nc, e = ec, n = null, r = ut(0), i = ut(Mn), s = ut(0);
  function a(l) {
    var u, f = (l = tc(l)).length, o, h, c = 0, d = new Array(f), p = new Array(f), y = +r.apply(this, arguments), R = Math.min(Mn, Math.max(-Mn, i.apply(this, arguments) - y)), _, $ = Math.min(Math.abs(R) / f, s.apply(this, arguments)), T = $ * (R < 0 ? -1 : 1), M;
    for (u = 0; u < f; ++u)
      (M = p[d[u] = u] = +t(l[u], u, l)) > 0 && (c += M);
    for (e != null ? d.sort(function(b, P) {
      return e(p[b], p[P]);
    }) : n != null && d.sort(function(b, P) {
      return n(l[b], l[P]);
    }), u = 0, h = c ? (R - f * T) / c : 0; u < f; ++u, y = _)
      o = d[u], M = p[o], _ = y + (M > 0 ? M * h : 0) + T, p[o] = {
        data: l[o],
        index: u,
        value: M,
        startAngle: y,
        endAngle: _,
        padAngle: $
      };
    return p;
  }
  return a.value = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ut(+l), a) : t;
  }, a.sortValues = function(l) {
    return arguments.length ? (e = l, n = null, a) : e;
  }, a.sort = function(l) {
    return arguments.length ? (n = l, e = null, a) : n;
  }, a.startAngle = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : ut(+l), a) : r;
  }, a.endAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : ut(+l), a) : i;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : ut(+l), a) : s;
  }, a;
}
function Ke(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ke.prototype = {
  constructor: Ke,
  scale: function(t) {
    return t === 1 ? this : new Ke(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ke(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ke.prototype;
var rc = /* @__PURE__ */ ol('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const ic = {
  hash: "svelte-1q7h3eo",
  code: `

@media (max-width: 768px) {
}

@media (max-width: 768px) {
}`
};
function Xs(t, e) {
  Kr(e, !0), _s(t, ic);
  let n = Mt(e, "jsonData", 7), r = Mt(e, "currentRound", 7, 1), i = Mt(e, "mouseEventType", 15), s = Mt(e, "mouseData", 15), a = Mt(e, "mouseY", 15), l = Mt(e, "requestRoundChange", 7, (v) => {
  }), u = Mt(e, "candidateColors", 23, () => []);
  const f = 800, o = 800, h = Math.min(f, o) * 0.3, c = f / 2, d = o / 2, p = "Pie", y = "Donut", R = "TextLayer", _ = "#transfer", $ = "url(#cross-hatch)", T = 1.15, M = 0.1, b = 750, P = 800;
  let z = [], J = [], it = [], nt = 0, H = ee(0), F = 0;
  const E = {}, L = "No Further Rankings";
  let G = ee(null);
  function he() {
    const v = at(x(G));
    v.select("#" + p).remove(), v.select("#" + y).remove(), v.select("#" + R).remove();
  }
  function At(v) {
    l() && (rt = v, l()(v));
  }
  function _t(v) {
    he(), it = It(v), z = ta(v, p, it, c, d, 0, ft());
  }
  vl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), un(), setTimeout(
      () => {
        _t(r());
      },
      0
    );
  });
  function It(v) {
    const g = me(v);
    return nt = qt(v), g;
  }
  function ft() {
    return h;
  }
  function Lt() {
    return ft() * 1.41;
  }
  function St(v) {
    let g = 0;
    for (let m = 1; m < v; m++) {
      const k = n().results[m - 1].tallyResults;
      for (let A = 0; A < k.length; A++) {
        const C = k[A].transfers;
        if (C) {
          const S = C.exhausted;
          S && (g += Number(S));
        }
      }
    }
    return g;
  }
  function de(v, g) {
    if (v === "exhausted") return St(g);
    {
      const m = n().results[g - 1].tally;
      return Number(m[v]);
    }
  }
  function _e(v, g) {
    return de(v, g).toLocaleString("en-US");
  }
  function mt(v, g) {
    return (de(v, g) / nt).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function qt(v) {
    const g = n().results[v - 1].tally;
    let m = 0;
    for (let [k, A] of Object.entries(g))
      m += Number(A);
    return m;
  }
  function Vt(v, g) {
    if (!v || v < 1 || v > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    const m = n().results[v - 1].tallyResults, k = [];
    for (let A = 0; A < m.length; A++) {
      const C = m[A][g];
      C != null && k.push(C);
    }
    return k;
  }
  function Kt(v) {
    return Vt(v, "eliminated");
  }
  function Wt(v) {
    let g = [];
    for (let m = 1; m <= v; m++) g = g.concat(Vt(m, "elected"));
    return g;
  }
  function Jt(v, g) {
    const m = n().results[g - 1].tallyResults;
    let k = 0;
    const A = m.findIndex((C) => (C == null ? void 0 : C.elected) && v == C.elected);
    if (A >= 0) {
      const C = m[A].transfers;
      if (C)
        for (let [S, O] of Object.entries(C)) k += Number(O);
    } else
      return 0;
    return k;
  }
  function me(v) {
    const g = n().results;
    let m = g[Math.max(0, v - 2)].tally;
    const k = [], A = [];
    for (let [S, O] of Object.entries(m))
      k.push({ label: S, value: 0 });
    m = g[v - 1].tally;
    for (let S of k) {
      const O = Number(m[S.label]), I = Jt(S.label, v);
      I > 0 ? (A.push({
        label: S.label + _,
        value: I
      }), S.value = O - I, A.push(S)) : (S.value = O, A.push(S));
    }
    const C = St(v);
    return A.push({ label: "exhausted", value: C }), A;
  }
  function un() {
    const v = at(x(G)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [m, k] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? E[m] = zf[g] : E[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : E[m] = u()[g % u().length], g++;
      {
        const A = v.clone(!0);
        A.attr("id", m.replaceAll(" ", "-")).select("rect").attr("fill", E[m]), A.select("path").attr("stroke", "#505050");
      }
    }
    E.exhausted = $, E["Inactive Ballots"] = $;
  }
  function fn() {
    at(x(G)).select("#" + y).remove();
  }
  function ze(v, g) {
    const m = kn("global").duration(P);
    g && m.on("end", g), fn(), dn(v), ea(), ra(0, ft()), pn();
  }
  function w(v, g) {
    const m = kn("global").duration(P);
    g && m.on("end", g), Gs(v);
  }
  function q(v, g) {
    const m = kn("global").duration(P);
    g && m.on("end", g), hn(v), ye(ft());
  }
  function K() {
    pn(), Y = !1;
  }
  let Y = !1;
  function st() {
    if (Y) {
      console.warn("busy animating");
      return;
    }
    Y = !0, F = r(), tt();
  }
  function tt() {
    W(H, 0);
    const v = F < n().results.length - 1 ? tt : K;
    ze(F, () => {
      w(F, () => {
        F++, At(F), q(F, v);
      });
    });
  }
  Ur(() => {
    Rt();
  });
  let rt = 0;
  function Rt() {
    if (console.log(`previous round was ${rt}, currentRound is ${r()}`), Y) {
      console.log("gotoNextRound: busy animating");
      return;
    }
    rt != r() && (rt == r() - 1 && rt > 0 ? Ne() : Zt(r()), rt = r());
  }
  function Zt(v) {
    if (console.log("setRoundFn called"), Y) {
      console.warn("busy animating");
      return;
    }
    W(H, 0), _t(v);
  }
  function Ne() {
    if (console.log("animateOneRoundFn called"), Y) {
      console.warn("busy animating");
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't anitmate to round ${r()}`);
      return;
    }
    if (F = r(), F > n().results.length) {
      pn(), Y = !1;
      return;
    }
    Y = !0, x(H) === 0 ? ze(F - 1, () => {
      w(F - 1, () => {
        q(F, K);
      });
    }) : x(H) === 1 ? w(F - 1, () => {
      q(F, K);
    }) : x(H) === 2 && q(F, K), W(H, 0);
  }
  function cn() {
    if (console.log(`animateOnePhaseFn called, currentRound = ${r()}, displayPhase = ${x(H)}`), r() > n().results.length) {
      pn(), Y = !1;
      return;
    }
    Y || (Y = !0, W(H, (x(H) + 1) % 3), F = r(), x(H) === 1 ? ze(F, K) : x(H) === 2 ? w(F, K) : x(H) === 0 ? (F++, At(F), q(F, K)) : (Y = !1, console.warn("displayPhase out of range at ", x(H))));
  }
  function hn(v) {
    it = me(v), z = ia(v, p, it, 0, ft(), !0);
  }
  function ye(v, g) {
    mr().sort(null).value((O) => O.value);
    const m = at(x(G)).select("#" + y), k = te().outerRadius(v).innerRadius(v - 1), A = m.selectAll(".slice");
    let C = A.size();
    function S() {
      C--, C === 0 && na();
    }
    A.select("path").transition("global").duration(b).attr("d", (O) => k(O)).on("end", (O) => S());
  }
  function dn(v) {
    const g = Ws(v, z);
    J = si(v, y, g, c, d, ft(), Lt(), !1, !0);
  }
  function Gs(v) {
    const g = Zs(v, J, z);
    J = ai(
      v,
      y,
      g,
      /* previousDonutInfoGlobal, */
      ft(),
      Lt(),
      !1
    );
  }
  function vn(v) {
    const g = v.data.label;
    return E[g.split("#")[0]];
  }
  function Ks(v) {
    const g = {}, m = n().results[v - 1].tallyResults;
    for (let k = 0; k < m.length; k++) {
      let A = m[k].eliminated;
      if (A === void 0 && (A = m[k].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const C = m[k].transfers;
      if (C === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [S, O] of Object.entries(C))
        g[S] === void 0 ? g[S] = Number(O) : g[S] += Number(O);
    }
    return g;
  }
  function Ws(v, g) {
    const m = [], k = nt, A = n().results[v - 1].tallyResults;
    for (let C = 0; C < A.length; C++) {
      let S = A[C].eliminated;
      if (S === void 0 && (S = A[C].elected), S === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const O = A[C].transfers;
      if (O === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let I = g.find((D) => D.data.label == S + _);
      I === void 0 && (I = g.find((D) => D.data.label == S));
      let V = 0;
      if (I) V = I.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [D, B] of Object.entries(O)) {
        let Z;
        const Bt = g.find((et) => et.data.label == D);
        if (Bt)
          Z = structuredClone(Bt);
        else if (D == "exhausted")
          Z = {
            data: { label: D, value: Number(B) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (D == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", B);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", D);
          continue;
        }
        const N = Number(B) / k * 2 * Math.PI;
        Z.startAngle = V, V = Z.endAngle = V + N, Z.index = C, Z.data.label = `${Z.data.label}#${C}`, m.push(Z);
      }
    }
    return m;
  }
  function Js(v, g, m) {
    const k = {};
    for (let [A, C] of Object.entries(v)) {
      const S = m.find((V) => A == V.data.label);
      if (S === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const O = (S.startAngle + S.endAngle) / 2, I = v[S.data.label] / g * 2 * Math.PI;
      k[S.data.label] = O - I / 2;
    }
    return k;
  }
  function Zs(v, g, m) {
    const k = [], A = nt, C = Ks(v), S = Js(C, A, m);
    for (let [O, I] of g.entries()) {
      const V = structuredClone(I), D = I.endAngle - I.startAngle, B = m.find((Z) => I.data.label.indexOf(Z.data.label) === 0);
      if (B) {
        const Z = B.data.label;
        V.startAngle = S[Z], S[Z] += D, V.endAngle = V.startAngle + D;
      } else if (I.data.label.indexOf("exhausted") === 0)
        V.startAngle = I.startAngle, V.endAngle = I.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", I.data.label);
        continue;
      }
      V.index = O, k.push(V);
    }
    return k;
  }
  function ii(v, g, m, k, A, C) {
    const O = at(x(G)).append("g").attr("id", R).attr("transform", `translate(${m}, ${k})`), I = te().innerRadius(A * T).outerRadius(A * T);
    O.selectAll("text").data(g).enter().each(function(V) {
      V.endAngle - V.startAngle < M || V.data.label.includes(_) || at(this).append("g").attr("id", (D) => D.data.label).classed("eliminated", (D) => C.includes(D.data.label.split("#")[0]) || D.data.label.includes(_)).each(function(D, B) {
        D.data.label === "exhausted" && at(this).on("mouseenter", (Z, Bt) => sa(Z)).on("mouseleave", (Z, Bt) => aa());
      }).append("text").attr("transform", (D) => `translate(${I.centroid(D)})`).attr("text-anchor", (D) => lr(D.startAngle, D.endAngle)).text((D) => D.data.label === "exhausted" ? L : D.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((D) => _e(D.data.label, v) + " (" + mt(D.data.label, v) + ")");
    });
  }
  function Qs(v, g, m, k) {
    const C = at(x(G)).select("#" + R), S = C.selectAll("tspan"), O = C.selectAll("g").data(g, (B) => B.data.label).classed("eliminated", (B) => k.includes(B.data.label.split("#")[0]) || B.data.label.includes(_)), I = te().innerRadius(m * T).outerRadius(m * T + 1);
    S.transition("global").duration(b).attr("transform", (B) => `translate(${I.centroid(B)})`).attr("text-anchor", (B) => lr(B.startAngle, B.endAngle)), O.select("text").transition("global").duration(b).attr("transform", (B) => `translate(${I.centroid(B)})`).attr("text-anchor", (B) => lr(B.startAngle, B.endAngle)).on("end", (B) => D());
    let V = O.size();
    function D(B) {
      V--, V === 0 && (C.remove(), ii(v, g, c, d, m, k));
    }
  }
  function ta(v, g, m, k, A, C, S, O = !0, I = !1) {
    const D = mr().sort(null).value((B) => B.value)(m);
    return si(v, g, D, k, A, C, S, O, I), D;
  }
  function pn() {
    at(x(G)).select("#" + p).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function si(v, g, m, k, A, C, S, O, I) {
    const V = Kt(v), D = Wt(v), Bt = at(x(G)).attr("width", "100%").attr("height", "auto").attr("viewBox", `0 0 ${f} ${o}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", g).attr("transform", `translate(${k}, ${A})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (N) => V.includes(N.data.label.split("#")[0]) || N.data.label.includes(_)).classed("elected", (N) => D.includes(N.data.label.split("#")[0]) && !N.data.label.includes(_)).attr("id", (N) => N.data.label).on("mouseenter", (N, et) => ur(N, et)).on("mouseleave", (N, et) => fr(N, et)), Ue = te().outerRadius(S).innerRadius(C);
    if (I) {
      const N = te().outerRadius(C + 1).innerRadius(C);
      Bt.append("path").attr("d", N).transition("global").duration(b).attr("d", (et) => Ue(et)).attr("fill", (et) => vn(et)).on("end", (et) => or());
    } else
      Bt.append("path").attr("d", (N) => Ue(N)).attr("fill", (N) => vn(N)), or();
    return O && ii(v, m, k, A, S, V), m;
  }
  function ea() {
    const m = at(x(G)).select("#" + R).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function na() {
    const m = at(x(G)).select("#" + R).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function ra(v, g) {
    const A = at(x(G)).select("#" + p).selectAll(".eliminated"), C = te().innerRadius(v), S = te().outerRadius(g);
    A.classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(O) {
      const I = Me(g, v);
      return function(V) {
        return S.innerRadius(I(V)), S(O);
      };
    }).attr("fill", (O) => `url(#${O.data.label.split("#")[0].replaceAll(" ", "-")})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(O) {
      const I = Me(g, v);
      return function(V) {
        return C.outerRadius(I(V)), C(O);
      };
    }).attr("fill", (O) => vn(O));
  }
  function lr(v, g) {
    const m = (v + g) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function or() {
    at(x(G)).select("#" + R).raise().append("g").remove();
  }
  function ia(v, g, m, k, A, C) {
    const O = mr().sort(null).value((I) => I.value)(m);
    return ai(
      v,
      g,
      O,
      /* previousPieInfo, */
      k,
      A,
      C
    ), O;
  }
  function ai(v, g, m, k, A, C) {
    const S = Kt(v), O = Wt(v), I = te().outerRadius(A).innerRadius(k).startAngle((N) => N.startAngle).endAngle((N) => N.endAngle), V = te().outerRadius(A).innerRadius(k), B = at(x(G)).select("#" + g);
    B.selectAll(".slice").attr("prevStart", (N) => N.startAngle).attr("prevEnd", (N) => N.endAngle);
    const Z = B.selectAll(".slice").data(m, (N) => N.data.label);
    Z.enter().append("g").attr("class", "slice").attr("id", (N) => N.data.label).classed("eliminated", !0).on("mouseenter", (N, et) => ur(N, et)).on("mouseleave", (N, et) => fr(N, et)).append("path").attr("d", (N) => V(N)).attr("fill", (N) => vn(N)), Z.classed("eliminated", (N) => S.includes(N.data.label.split("#")[0])).classed("elected", (N) => O.includes(N.data.label.split("#")[0])).on("mouseenter", (N, et) => ur(N, et)).on("mouseleave", (N, et) => fr(N, et));
    let Bt = Z.size();
    function Ue() {
      Bt--, Bt <= 0 && (or(), B.selectAll(".finished").remove());
    }
    return Z.select("path").transition("global").duration(b).attrTween("d", function(N) {
      const et = Number(at(this.parentNode).attr("prevStart")), la = Number(at(this.parentNode).attr("prevEnd")), oa = Me(et, N.startAngle), ua = Me(la, N.endAngle);
      return (oi) => (I.startAngle(oa(oi)).endAngle(ua(oi)), I(N));
    }).on("end", Ue), C && Qs(v, m, A, S), m;
  }
  function ur(v, g) {
    s(g.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function fr(v, g) {
    s(g.data.label.split("#")[0]), i("leave");
  }
  function sa(v, g) {
    i("show-exhausted"), a(v.clientY);
  }
  function aa(v, g) {
    i("hide-exhausted");
  }
  var li = rc();
  return En(li, (v) => W(G, v), () => x(G)), ve(t, li), Wr({
    pieColors: E,
    exhaustedLabel: L,
    countExhaustedVotes: St,
    getEliminatedCandidates: Kt,
    getElectedCandidates: Wt,
    runFullAnimationFn: st,
    animateOnePhaseFn: cn,
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), Nt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v = 1) {
      r(v), Nt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), Nt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), Nt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), Nt();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(v = (g) => {
    }) {
      l(v), Nt();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(v = []) {
      u(v), Nt();
    }
  });
}
ys(
  Xs,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseY: {},
    requestRoundChange: {},
    candidateColors: {}
  },
  [],
  [
    "pieColors",
    "exhaustedLabel",
    "countExhaustedVotes",
    "getEliminatedCandidates",
    "getElectedCandidates",
    "runFullAnimationFn",
    "animateOnePhaseFn"
  ],
  !0
);
function sc(t) {
  const e = [];
  if (!t || typeof t != "object" || Array.isArray(t))
    return { valid: !1, errors: ["Input is not a valid object"] };
  const n = /* @__PURE__ */ new Set(["config", "jsonFormatVersion", "results", "summary"]), r = /* @__PURE__ */ new Set(["contest", "date", "generatedBy", "jurisdiction", "office"]), i = /* @__PURE__ */ new Set(["inactiveBallots", "round", "tally", "tallyResults", "threshold"]), s = /* @__PURE__ */ new Set(["exhaustedChoices", "overvotes", "repeatedRankings", "skippedRankings"]), a = /* @__PURE__ */ new Set(["elected", "eliminated", "transfers"]), l = /* @__PURE__ */ new Set(["finalThreshold", "numCandidates", "numWinners", "totalNumBallots", "undervotes"]);
  for (const h of Object.keys(t))
    n.has(h) || e.push(`Unexpected field in RCtabSummary: "${h}"`);
  if (!t.config)
    e.push("Config is missing");
  else if (typeof t.config != "object" || Array.isArray(t.config))
    e.push("Config must be an object");
  else {
    for (const h of Object.keys(t.config))
      r.has(h) || e.push(`Unexpected field in config: "${h}"`);
    t.config.contest || e.push("Config is missing contest name");
  }
  if (t.jsonFormatVersion || e.push("jsonFormatVersion is missing"), !t.results)
    return e.push("Results are missing"), { valid: e.length === 0, errors: e };
  if (!Array.isArray(t.results))
    return e.push("Results must be an array"), { valid: e.length === 0, errors: e };
  if (t.results.length === 0)
    return e.push("Results array is empty"), { valid: e.length === 0, errors: e };
  let u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), o = 0;
  for (let h = 0; h < t.results.length; h++) {
    const c = t.results[h];
    for (const d of Object.keys(c))
      i.has(d) || e.push(`Round ${h + 1}: Unexpected field in results: "${d}"`);
    if (typeof c.round != "number" ? e.push(`Round ${h + 1} is missing a round number`) : h === 0 && c.round !== 1 ? e.push(`First round number should be 1, found ${c.round}`) : h > 0 && c.round !== o + 1 && e.push(`Round numbers should be sequential. Expected ${o + 1}, found ${c.round}`), o = c.round || h + 1, !c.inactiveBallots)
      e.push(`Round ${o}: inactiveBallots is missing`);
    else if (typeof c.inactiveBallots != "object" || Array.isArray(c.inactiveBallots))
      e.push(`Round ${o}: inactiveBallots must be an object`);
    else
      for (const d of Object.keys(c.inactiveBallots))
        s.has(d) || e.push(`Round ${o}: Unexpected field in inactiveBallots: "${d}"`);
    if (!c.tally) {
      e.push(`Round ${o} is missing a tally`);
      continue;
    }
    if (typeof c.tally != "object" || Array.isArray(c.tally)) {
      e.push(`Round ${o}: tally must be an object`);
      continue;
    }
    if (h === 0)
      u = new Set(Object.keys(c.tally)), f = new Set(u);
    else {
      const d = new Set(Object.keys(c.tally)), p = [...d].filter((y) => !u.has(y));
      p.length > 0 && e.push(`Round ${o} contains new candidates not present in earlier rounds: ${p.join(", ")}`), f = d;
    }
    if (c.threshold || e.push(`Round ${o}: threshold is missing`), !c.tallyResults) {
      e.push(`Round ${o} is missing tallyResults`);
      continue;
    }
    if (!Array.isArray(c.tallyResults)) {
      e.push(`Round ${o}: tallyResults must be an array`);
      continue;
    }
    for (let d = 0; d < c.tallyResults.length; d++) {
      const p = c.tallyResults[d];
      for (const _ of Object.keys(p))
        a.has(_) || e.push(`Round ${o}, tallyResult ${d + 1}: Unexpected field: "${_}"`);
      p.elected !== void 0 && p.eliminated !== void 0 ? e.push(`Round ${o}, tallyResult ${d + 1}: has both elected and eliminated set`) : p.elected === void 0 && p.eliminated === void 0 && e.push(`Round ${o}, tallyResult ${d + 1}: has neither elected nor eliminated set`);
      const y = p.elected || p.eliminated;
      if (y && !f.has(y) && e.push(`Round ${o}, tallyResult ${d + 1}: references candidate "${y}" who is not in the current candidate list`), !p.transfers) {
        e.push(`Round ${o}, tallyResult ${d + 1}: missing transfers`);
        continue;
      }
      if (typeof p.transfers != "object" || Array.isArray(p.transfers)) {
        e.push(`Round ${o}, tallyResult ${d + 1}: transfers must be an object`);
        continue;
      }
      const R = Object.keys(p.transfers);
      for (const _ of R)
        _ !== "exhausted" && _ !== "residual surplus" && !f.has(_) && e.push(`Round ${o}, tallyResult ${d + 1}: transfers votes to "${_}" who is not in the current candidate list`);
      if (p.eliminated && y) {
        const _ = parseFloat(c.tally[y] || "0");
        let $ = 0;
        for (const T of Object.values(p.transfers)) {
          const M = parseFloat(T || "0");
          isNaN(M) || ($ += M);
        }
        Math.abs(_ - $) > 1e-4 && e.push(`Round ${o}: Eliminated candidate "${y}" had ${_} votes but transferred ${$}`);
      }
      y && f.delete(y);
    }
  }
  if (!t.summary)
    e.push("Summary is missing");
  else if (typeof t.summary != "object" || Array.isArray(t.summary))
    e.push("Summary must be an object");
  else {
    for (const c of Object.keys(t.summary))
      l.has(c) || e.push(`Unexpected field in summary: "${c}"`);
    const h = ["finalThreshold", "numCandidates", "numWinners", "totalNumBallots"];
    for (const c of h)
      t.summary[c] === void 0 && e.push(`Summary is missing required field: "${c}"`);
  }
  return {
    valid: e.length === 0,
    errors: e
  };
}
var ac = /* @__PURE__ */ He("<span> </span> &nbsp;", 1), lc = /* @__PURE__ */ He("About to eliminate: <!>", 1), oc = /* @__PURE__ */ He("<span> </span> &nbsp;", 1), uc = /* @__PURE__ */ He("Elected: <!>", 1), fc = /* @__PURE__ */ He("<span> </span> <br>", 1), cc = /* @__PURE__ */ He('<div class="animation-button-container svelte-1gmy47u"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="page-container svelte-1gmy47u"><div class="common-header svelte-1gmy47u"><h3 class="svelte-1gmy47u"> </h3> <h4 class="svelte-1gmy47u"><!> <!></h4></div> <div class="tooltip svelte-1gmy47u"><h3 class="svelte-1gmy47u"> </h3> <!></div> <div class="tooltip svelte-1gmy47u"> <br> these ballots have already been eliminated.</div> <div class="visualizations-container svelte-1gmy47u"><div class="pie-chart-container svelte-1gmy47u"><!></div></div></div>', 1);
const hc = {
  hash: "svelte-1gmy47u",
  code: `.page-container.svelte-1gmy47u {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1gmy47u {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1gmy47u {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:1.3rem;left:50%;transform:translate(-50%);font-weight:bold;opacity:0;}.tooltip.svelte-1gmy47u h3:where(.svelte-1gmy47u) {text-align:center;}.animation-button-container.svelte-1gmy47u {display:flex;justify-content:center;gap:10px;margin-bottom:1rem;}.pie-chart-container.svelte-1gmy47u {
  /* width: 90%; */
  /* min-width: 800px; /* Larger minimum size */width:100%; /* Change from 90% to 100% */min-width:auto; /* Remove the 800px minimum */flex-grow:0; /* Don't grow beyond specified width */margin:0 auto;margin-right:40px; /* Add extra space on right */margin-top:-5vh;}.visualizations-container.svelte-1gmy47u {display:flex;justify-content:space-between;width:100%;padding:0 20px;
  /* gap: 80px; */gap:20px; /* Reduce from 80px */}


/***  It looks like it is always OK to use justify-content: space-between even with no bubble viz display

.visualizations-container {
  justify-content: space-between;
}
  ***/



/*  width: 25%; /* Smaller percentage */
/*  flex-grow: 0; /* Don't grow beyond specified width */
/*  margin-left: 40px; /* Add extra space on left */

/***  Omit this if we are not using the bubble-visualization
.bubble-visualization-container {
  width: 25%;
  flex-grow: 0;
  align-self: center;
  margin: 0 auto;
  margin-top: 30px;
  margin-left: 40px; 
}
***/


/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1gmy47u {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1gmy47u {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1gmy47u {padding:0; /* Remove padding on small screens */}
}.common-header.svelte-1gmy47u {width:100%;margin-bottom:1rem;text-align:center;}

@media (max-width: 768px) {.common-header.svelte-1gmy47u {margin-bottom:0.5rem;}h3.svelte-1gmy47u, h4.svelte-1gmy47u {margin:0.3rem 0;font-size:0.9rem;}.animation-button-container.svelte-1gmy47u {margin-bottom:0.5rem;}.pie-chart-container.svelte-1gmy47u {margin-top:-3vh;}
}`
};
function dc(t, e) {
  Kr(e, !0), _s(t, hc);
  const n = 0.85;
  let r = Mt(e, "electionSummary", 7), i = Mt(e, "currentRound", 7, 1), s = Mt(e, "requestRoundChange", 7, (w) => {
  }), a = Mt(e, "candidateColors", 23, () => []), l = ee(null), u = ee(null), f = ee(""), o = ee(bt([])), h = ee(""), c = ee(""), d = ee(0), p = /* @__PURE__ */ tr(() => y(r()));
  function y(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (q) {
        return console.error("Failed to parse JSON string:", q), {};
      }
    return console.log("RCtabSummary object status: ", sc(w)), w || {};
  }
  function R(w) {
    s() ? (console.log("onRoundChange in PieChart: passing on request for round ", w), s()(w)) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function _() {
    switch (x(h)) {
      case "enter":
        ((w) => (W(o, bt(w[0])), W(f, bt(w[1]))))(T(x(c), i())), x(l) && (x(l).style.top = String(x(d) || 20) + "px", x(l).style.opacity = String(n));
        break;
      case "leave":
        x(l) && (x(l).style.opacity = "0"), W(o, bt([])), W(f, "");
        break;
      case "show-exhausted":
        x(u) && (x(u).style.top = String(x(d) || 20) + "px", x(u).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(u) && (x(u).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x(h));
        break;
    }
  }
  Ur(() => _());
  function $(w, q) {
    return w == 1 ? q ? "vote was" : "vote will be" : q ? "votes were" : "votes will be";
  }
  function T(w, q) {
    const K = [], Y = w === "exhausted" ? H() : w;
    let st;
    w == "exhausted" ? st = J(1) : st = x(p).results[0].tally[w], K.push(`${Y} started with ${st} votes.`);
    for (let tt = 1; tt <= q; tt++) {
      tt === q && (w == "exhausted" ? st = J(q) : st = x(p).results[q - 1].tally[w], K.push(`${Y} has ${st} votes at round ${q}.`));
      const rt = x(p).results[tt - 1].tallyResults;
      for (let Rt = 0; Rt < rt.length; Rt++) {
        const Zt = rt[Rt].transfers, Ne = rt[Rt].eliminated, cn = rt[Rt].elected;
        if (Ne)
          Ne === w && K.push(`${Y} will be eliminated on round ${tt}.`);
        else if (w === cn && (K.push(`${Y} was elected on round ${tt}.`), Zt))
          for (let [ye, dn] of Object.entries(Zt))
            K.push(`${dn} ${$(Number(dn), tt < q)} transferred to ${ye} on round ${tt}.`);
        const hn = Ne || cn;
        if (hn) {
          const ye = Number(Zt[w]);
          ye && K.push(`${ye} ${$(ye, tt < q)} transferred from ${hn} on round ${tt}.`);
        }
      }
    }
    return [K, Y];
  }
  function M() {
    let w = 0;
    for (let q = 1; q <= x(p).results.length; q++) {
      const K = x(p).results[q - 1].tallyResults;
      for (let Y = 0; Y < K.length; Y++)
        K[Y].elected && w++;
    }
    return w;
  }
  let b;
  function P(w) {
    return b ? b.getEliminatedCandidates(w) : [];
  }
  function z(w) {
    return b ? b.getElectedCandidates(w) : [];
  }
  function J(w) {
    return b ? b.countExhaustedVotes(w) : 0;
  }
  function it() {
    b && b.animateOnePhaseFn && b.animateOnePhaseFn();
  }
  function nt() {
    b && b.runFullAnimationFn && b.runFullAnimationFn();
  }
  function H() {
    return b ? b.exhaustedLabel : "";
  }
  function F() {
    return b ? b.pieColors : {};
  }
  var E = cc(), L = Te(E), G = wt(L);
  G.__click = nt;
  var he = Ht(G, 2);
  he.__click = it, yt(L);
  var At = Ht(L, 2), _t = wt(At), It = wt(_t), ft = wt(It);
  yt(It);
  var Lt = Ht(It, 2), St = wt(Lt);
  {
    var de = (w) => {
      var q = lc(), K = Ht(Te(q));
      vr(K, 17, () => P(i()), dr, (Y, st) => {
        var tt = ac(), rt = Te(tt), Rt = wt(rt, !0);
        yt(rt), gn(), _n(
          (Zt) => {
            yi(rt, "color", Zt), Se(Rt, x(st));
          },
          [() => F()[x(st)]]
        ), ve(Y, tt);
      }), ve(w, q);
    };
    _i(St, (w) => {
      P(i()).length > 0 && w(de);
    });
  }
  var _e = Ht(St, 2);
  {
    var mt = (w) => {
      var q = uc(), K = Ht(Te(q));
      vr(K, 17, () => z(i()), dr, (Y, st) => {
        var tt = oc(), rt = Te(tt), Rt = wt(rt, !0);
        yt(rt), gn(), _n(
          (Zt) => {
            yi(rt, "color", Zt), Se(Rt, x(st));
          },
          [() => F()[x(st)]]
        ), ve(Y, tt);
      }), ve(w, q);
    };
    _i(_e, (w) => {
      z(i()).length > 0 && w(mt);
    });
  }
  yt(Lt), yt(_t);
  var qt = Ht(_t, 2), Vt = wt(qt), Kt = wt(Vt, !0);
  yt(Vt);
  var Wt = Ht(Vt, 2);
  vr(Wt, 17, () => x(o), dr, (w, q) => {
    var K = fc(), Y = Te(K), st = wt(Y, !0);
    yt(Y), gn(2), _n(() => Se(st, x(q))), ve(w, K);
  }), yt(qt), En(qt, (w) => W(l, w), () => x(l));
  var Jt = Ht(qt, 2), me = wt(Jt);
  gn(2), yt(Jt), En(Jt, (w) => W(u, w), () => x(u));
  var un = Ht(Jt, 2), fn = wt(un), ze = wt(fn);
  return En(
    Xs(ze, {
      get jsonData() {
        return x(p);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: R,
      get candidateColors() {
        return a();
      },
      get mouseEventType() {
        return x(h);
      },
      set mouseEventType(w) {
        W(h, bt(w));
      },
      get mouseData() {
        return x(c);
      },
      set mouseData(w) {
        W(c, bt(w));
      },
      get mouseY() {
        return x(d);
      },
      set mouseY(w) {
        W(d, bt(w));
      }
    }),
    (w) => b = w,
    () => b
  ), yt(fn), yt(un), yt(At), _n(
    (w, q) => {
      Se(ft, `${x(p).config.contest ?? ""}, ${w ?? ""} to be elected, Round ${i() ?? ""}.`), Se(Kt, x(f)), Se(me, `"${q ?? ""}" means all the candidates ranked on `);
    },
    [M, H]
  ), ve(t, E), Wr({
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), Nt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), Nt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (q) => {
    }) {
      s(w), Nt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), Nt();
    }
  });
}
ll(["click"]);
customElements.define("pie-chart", ys(
  dc,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    candidateColors: {}
  },
  [],
  [],
  !0
));
