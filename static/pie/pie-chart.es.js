var ua = Object.defineProperty;
var oi = (t) => {
  throw TypeError(t);
};
var fa = (t, e, n) => e in t ? ua(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var kt = (t, e, n) => fa(t, typeof e != "symbol" ? e + "" : e, n), ui = (t, e, n) => e.has(t) || oi("Cannot " + n);
var ft = (t, e, n) => (ui(t, e, "read from private field"), n ? n.call(t) : e.get(t)), or = (t, e, n) => e.has(t) ? oi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ur = (t, e, n, r) => (ui(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ca = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ca);
const ha = 1, da = 2, va = 16, pa = 1, _a = 4, ga = 8, ma = 16, ya = 2, Fi = "[", Sr = "[!", Mr = "]", Ge = {}, ct = Symbol(), fi = !1, Ot = 2, qi = 4, Or = 8, Pr = 16, ae = 32, De = 64, Nn = 128, Rt = 256, Tn = 512, pt = 1024, le = 2048, Ie = 4096, ne = 8192, Wn = 16384, wa = 32768, Dr = 65536, xa = 1 << 19, Li = 1 << 20, Ke = Symbol("$state"), Vi = Symbol("legacy props");
var Ir = Array.isArray, ba = Array.prototype.indexOf, Fr = Array.from, Cn = Object.keys, kn = Object.defineProperty, we = Object.getOwnPropertyDescriptor, $a = Object.prototype, Aa = Array.prototype, Ea = Object.getPrototypeOf;
function Hi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let We = [], _r = [];
function Yi() {
  var t = We;
  We = [], Hi(t);
}
function Ra() {
  var t = _r;
  _r = [], Hi(t);
}
function Bi(t) {
  We.length === 0 && queueMicrotask(Yi), We.push(t);
}
function ci() {
  We.length > 0 && Yi(), _r.length > 0 && Ra();
}
function zi(t) {
  return t === this.v;
}
function Na(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function qr(t) {
  return !Na(t, this.v);
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ca() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ka(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ma() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Oa(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let qa = !1;
function Et(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: zi,
    rv: 0,
    wv: 0
  };
  return n;
}
function Jt(t) {
  return /* @__PURE__ */ La(Et(t));
}
// @__NO_SIDE_EFFECTS__
function Lr(t, e = !1) {
  const n = Et(t);
  return e || (n.equals = qr), n;
}
// @__NO_SIDE_EFFECTS__
function La(t) {
  return U !== null && !St && U.f & Ot && (Bt === null ? Ba([t]) : Bt.push(t)), t;
}
function J(t, e) {
  return U !== null && !St && fs() && U.f & (Ot | Pr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Bt === null || !Bt.includes(t)) && Fa(), Xi(t, e);
}
function Xi(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = ts(), Ui(t, le), G !== null && G.f & pt && !(G.f & (ae | De)) && (Zt === null ? za([t]) : Zt.push(t))), e;
}
function Ui(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & le || (re(s, e), a & (pt | Rt) && (a & Ot ? Ui(
        /** @type {Derived} */
        s,
        Ie
      ) : tr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Jn(t) {
  var e = Ot | le, n = U !== null && U.f & Ot ? (
    /** @type {Derived} */
    U
  ) : null;
  return G === null || n !== null && n.f & Rt ? e |= Rt : G.f |= Li, {
    ctx: vt,
    deps: null,
    effects: null,
    equals: zi,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? G
  };
}
// @__NO_SIDE_EFFECTS__
function Va(t) {
  const e = /* @__PURE__ */ Jn(t);
  return e.equals = qr, e;
}
function Gi(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      ie(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ha(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Ot))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ya(t) {
  var e, n = G;
  Me(Ha(t));
  try {
    Gi(t), e = ns(t);
  } finally {
    Me(n);
  }
  return e;
}
function Ki(t) {
  var e = Ya(t), n = (ve || t.f & Rt) && t.deps !== null ? Ie : pt;
  re(t, n), t.equals(e) || (t.v = e, t.wv = ts());
}
function Vr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Q = !1;
function ee(t) {
  Q = t;
}
let X;
function Xt(t) {
  if (t === null)
    throw Vr(), Ge;
  return X = t;
}
function Zn() {
  return Xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ oe(X)
  );
}
function mt(t) {
  if (Q) {
    if (/* @__PURE__ */ oe(X) !== null)
      throw Vr(), Ge;
    X = t;
  }
}
function fn(t = 1) {
  if (Q) {
    for (var e = t, n = X; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ oe(n);
    X = n;
  }
}
function gr() {
  for (var t = 0, e = X; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Mr) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Fi || n === Sr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(e)
    );
    e.remove(), e = r;
  }
}
function xt(t, e = null, n) {
  if (typeof t != "object" || t === null || Ke in t)
    return t;
  const r = Ea(t);
  if (r !== $a && r !== Aa)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Ir(t), a = Et(0);
  s && i.set("length", Et(
    /** @type {any[]} */
    t.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Pa();
        var h = i.get(f);
        return h === void 0 ? (h = Et(u.value), i.set(f, h)) : J(h, xt(u.value, l)), !0;
      },
      deleteProperty(o, f) {
        var u = i.get(f);
        if (u === void 0)
          f in o && i.set(f, Et(ct));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && J(h, c);
          }
          J(u, ct), hi(a);
        }
        return !0;
      },
      get(o, f, u) {
        var p;
        if (f === Ke)
          return t;
        var h = i.get(f), c = f in o;
        if (h === void 0 && (!c || (p = we(o, f)) != null && p.writable) && (h = Et(xt(c ? o[f] : ct, l)), i.set(f, h)), h !== void 0) {
          var d = g(h);
          return d === ct ? void 0 : d;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var h = i.get(f);
          h && (u.value = g(h));
        } else if (u === void 0) {
          var c = i.get(f), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== ct)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        var d;
        if (f === Ke)
          return !0;
        var u = i.get(f), h = u !== void 0 && u.v !== ct || Reflect.has(o, f);
        if (u !== void 0 || G !== null && (!h || (d = we(o, f)) != null && d.writable)) {
          u === void 0 && (u = Et(h ? xt(o[f], l) : ct), i.set(f, u));
          var c = g(u);
          if (c === ct)
            return !1;
        }
        return h;
      },
      set(o, f, u, h) {
        var C;
        var c = i.get(f), d = f in o;
        if (s && f === "length")
          for (var p = u; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var m = i.get(p + "");
            m !== void 0 ? J(m, ct) : p in o && (m = Et(ct), i.set(p + "", m));
          }
        c === void 0 ? (!d || (C = we(o, f)) != null && C.writable) && (c = Et(void 0), J(c, xt(u, l)), i.set(f, c)) : (d = c.v !== ct, J(c, xt(u, l)));
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b != null && b.set && b.set.call(h, u), !d) {
          if (s && typeof f == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(f);
            Number.isInteger($) && $ >= w.v && J(w, $ + 1);
          }
          hi(a);
        }
        return !0;
      },
      ownKeys(o) {
        g(a);
        var f = Reflect.ownKeys(o).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== ct;
        });
        for (var [u, h] of i)
          h.v !== ct && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Da();
      }
    }
  );
}
function hi(t, e = 1) {
  J(t, t.v + e);
}
var di, ji, Wi, Ji;
function mr() {
  if (di === void 0) {
    di = window, ji = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Wi = we(e, "firstChild").get, Ji = we(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Sn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function be(t) {
  return Wi.call(t);
}
// @__NO_SIDE_EFFECTS__
function oe(t) {
  return Ji.call(t);
}
function yt(t, e) {
  if (!Q)
    return /* @__PURE__ */ be(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(X)
  );
  if (n === null)
    n = X.appendChild(Sn());
  else if (e && n.nodeType !== 3) {
    var r = Sn();
    return n == null || n.before(r), Xt(r), r;
  }
  return Xt(n), n;
}
function Re(t, e) {
  if (!Q) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ be(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ oe(n) : n;
  }
  return X;
}
function Lt(t, e = 1, n = !1) {
  let r = Q ? X : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ oe(r);
  if (!Q)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = Sn();
    return r === null ? i == null || i.after(a) : r.before(a), Xt(a), a;
  }
  return Xt(r), /** @type {TemplateNode} */
  r;
}
function Zi(t) {
  t.textContent = "";
}
let mn = !1, Mn = !1, On = null, yn = !1, Hr = !1;
function vi(t) {
  Hr = t;
}
let je = [];
let U = null, St = !1;
function Se(t) {
  U = t;
}
let G = null;
function Me(t) {
  G = t;
}
let Bt = null;
function Ba(t) {
  Bt = t;
}
let lt = null, wt = 0, Zt = null;
function za(t) {
  Zt = t;
}
let Qi = 1, Pn = 0, ve = !1;
function ts() {
  return ++Qi;
}
function rn(t) {
  var h;
  var e = t.f;
  if (e & le)
    return !0;
  if (e & Ie) {
    var n = t.deps, r = (e & Rt) !== 0;
    if (n !== null) {
      var i, s, a = (e & Tn) !== 0, l = r && G !== null && !ve, o = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < o; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= Tn), l && u !== null && !(u.f & Rt) && (f.f ^= Rt);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], rn(
          /** @type {Derived} */
          s
        ) && Ki(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || G !== null && !ve) && re(t, pt);
  }
  return !1;
}
function Xa(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & Nn)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Nn;
      }
    n = n.parent;
  }
  throw mn = !1, t;
}
function Ua(t) {
  return (t.f & Wn) === 0 && (t.parent === null || (t.parent.f & Nn) === 0);
}
function Qn(t, e, n, r) {
  if (mn) {
    if (n === null && (mn = !1), Ua(e))
      throw t;
    return;
  }
  n !== null && (mn = !0);
  {
    Xa(t, e);
    return;
  }
}
function es(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Ot ? es(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? re(s, le) : s.f & pt && re(s, Ie), tr(
        /** @type {Effect} */
        s
      ));
    }
}
function ns(t) {
  var d;
  var e = lt, n = wt, r = Zt, i = U, s = ve, a = Bt, l = vt, o = St, f = t.f;
  lt = /** @type {null | Value[]} */
  null, wt = 0, Zt = null, ve = (f & Rt) !== 0 && (St || !yn || U === null), U = f & (ae | De) ? null : t, Bt = null, pi(t.ctx), St = !1, Pn++;
  try {
    var u = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (lt !== null) {
      var c;
      if (Dn(t, wt), h !== null && wt > 0)
        for (h.length = wt + lt.length, c = 0; c < lt.length; c++)
          h[wt + c] = lt[c];
      else
        t.deps = h = lt;
      if (!ve)
        for (c = wt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && wt < h.length && (Dn(t, wt), h.length = wt);
    if (fs() && Zt !== null && !St && h !== null && !(t.f & (Ot | Ie | le)))
      for (c = 0; c < /** @type {Source[]} */
      Zt.length; c++)
        es(
          Zt[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Pn++, u;
  } finally {
    lt = e, wt = n, Zt = r, U = i, ve = s, Bt = a, pi(l), St = o;
  }
}
function Ga(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = ba.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Ot && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(e)) && (re(e, Ie), e.f & (Rt | Tn) || (e.f ^= Tn), Gi(
    /** @type {Derived} **/
    e
  ), Dn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Dn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ga(t, n[r]);
}
function Yr(t) {
  var e = t.f;
  if (!(e & Wn)) {
    re(t, pt);
    var n = G, r = vt, i = yn;
    G = t, yn = !0;
    try {
      e & Pr ? nl(t) : as(t), ss(t);
      var s = ns(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Qi;
      var a = t.deps, l;
      fi && qa && t.f & le;
    } catch (o) {
      Qn(o, t, n, r || t.ctx);
    } finally {
      yn = i, G = n;
    }
  }
}
function Ka() {
  try {
    Sa();
  } catch (t) {
    if (On !== null)
      Qn(t, On, null);
    else
      throw t;
  }
}
function rs() {
  try {
    for (var t = 0; je.length > 0; ) {
      t++ > 1e3 && Ka();
      var e = je, n = e.length;
      je = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & pt || (i.f ^= pt);
        var s = Wa(i);
        ja(s);
      }
    }
  } finally {
    Mn = !1, On = null;
  }
}
function ja(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Wn | ne)))
        try {
          rn(r) && (Yr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ls(r) : r.fn = null));
        } catch (i) {
          Qn(i, r, null, r.ctx);
        }
    }
}
function tr(t) {
  Mn || (Mn = !0, queueMicrotask(rs));
  for (var e = On = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (De | ae)) {
      if (!(n & pt)) return;
      e.f ^= pt;
    }
  }
  je.push(e);
}
function Wa(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & ae) !== 0, s = i && (r & pt) !== 0;
    if (!s && !(r & ne)) {
      if (r & qi)
        e.push(n);
      else if (i)
        n.f ^= pt;
      else {
        var a = U;
        try {
          U = n, rn(n) && Yr(n);
        } catch (f) {
          Qn(f, n, null, n.ctx);
        } finally {
          U = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    var o = n.parent;
    for (n = n.next; n === null && o !== null; )
      n = o.next, o = o.parent;
  }
  return e;
}
function Ht(t) {
  var e;
  for (ci(); je.length > 0; )
    Mn = !0, rs(), ci();
  return (
    /** @type {T} */
    e
  );
}
function g(t) {
  var e = t.f, n = (e & Ot) !== 0;
  if (U !== null && !St) {
    Bt !== null && Bt.includes(t) && Ia();
    var r = U.deps;
    t.rv < Pn && (t.rv = Pn, lt === null && r !== null && r[wt] === t ? wt++ : lt === null ? lt = [t] : (!ve || !lt.includes(t)) && lt.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Rt) && (i.f ^= Rt);
  }
  return n && (i = /** @type {Derived} */
  t, rn(i) && Ki(i)), t.v;
}
function In(t) {
  var e = St;
  try {
    return St = !0, t();
  } finally {
    St = e;
  }
}
const Ja = -7169;
function re(t, e) {
  t.f = t.f & Ja | e;
}
function Za(t) {
  G === null && U === null && ka(), U !== null && U.f & Rt && G === null && Ca(), Hr && Ta();
}
function Qa(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Fe(t, e, n, r = !0) {
  var i = (t & De) !== 0, s = G, a = {
    ctx: vt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | le,
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
      Yr(a), a.f |= wa;
    } catch (f) {
      throw ie(a), f;
    }
  else e !== null && tr(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Li | Nn)) === 0;
  if (!l && !i && r && (s !== null && Qa(a, s), U !== null && U.f & Ot)) {
    var o = (
      /** @type {Derived} */
      U
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return a;
}
function Br(t) {
  Za();
  var e = G !== null && (G.f & ae) !== 0 && vt !== null && !vt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      vt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: G,
      reaction: U
    });
  } else {
    var r = zr(t);
    return r;
  }
}
function tl(t) {
  const e = Fe(De, t, !0);
  return () => {
    ie(e);
  };
}
function el(t) {
  const e = Fe(De, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fn(e, () => {
      ie(e), r(void 0);
    }) : (ie(e), r(void 0));
  });
}
function zr(t) {
  return Fe(qi, t, !1);
}
function is(t) {
  return Fe(Or, t, !0);
}
function cn(t, e = [], n = Jn) {
  const r = e.map(n);
  return Xr(() => t(...r.map(g)));
}
function Xr(t, e = 0) {
  return Fe(Or | Pr | e, t, !0);
}
function Je(t, e = !0) {
  return Fe(Or | ae, t, !0, e);
}
function ss(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Hr, r = U;
    vi(!0), Se(null);
    try {
      e.call(null);
    } finally {
      vi(n), Se(r);
    }
  }
}
function as(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    ie(n, e), n = r;
  }
}
function nl(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ae || ie(e), e = n;
  }
}
function ie(t, e = !0) {
  var n = !1;
  if ((e || t.f & xa) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  as(t, e && !n), Dn(t, 0), re(t, Wn);
  var a = t.transitions;
  if (a !== null)
    for (const o of a)
      o.stop();
  ss(t);
  var l = t.parent;
  l !== null && l.first !== null && ls(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function ls(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Fn(t, e) {
  var n = [];
  Ur(t, n, !0), os(n, () => {
    ie(t), e && e();
  });
}
function os(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ur(t, e, n) {
  if (!(t.f & ne)) {
    if (t.f ^= ne, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Dr) !== 0 || (r.f & ae) !== 0;
      Ur(r, e, s ? n : !1), r = i;
    }
  }
}
function qn(t) {
  us(t, !0);
}
function us(t, e) {
  if (t.f & ne) {
    t.f ^= ne, t.f & pt || (t.f ^= pt), rn(t) && (re(t, le), tr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Dr) !== 0 || (n.f & ae) !== 0;
      us(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function rl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let vt = null;
function pi(t) {
  vt = t;
}
function Gr(t, e = !1, n) {
  vt = {
    p: vt,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Kr(t) {
  const e = vt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = G, r = U;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Me(s.effect), Se(s.reaction), zr(s.fn);
        }
      } finally {
        Me(n), Se(r);
      }
    }
    vt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function fs() {
  return !0;
}
const il = ["touchstart", "touchmove"];
function sl(t) {
  return il.includes(t);
}
const cs = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Set();
function al(t) {
  for (var e = 0; e < t.length; e++)
    cs.add(t[e]);
  for (var n of yr)
    n(t);
}
function hn(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  ), a = 0, l = t.__root;
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var f = i.indexOf(e);
    if (f === -1)
      return;
    o <= f && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    kn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = U, h = G;
    Se(null), Me(null);
    try {
      for (var c, d = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          if (m !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (Ir(m)) {
              var [b, ...w] = m;
              b.apply(s, [t, ...w]);
            } else
              m.call(s, t);
        } catch (C) {
          c ? d.push(C) : c = C;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let C of d)
          queueMicrotask(() => {
            throw C;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Se(u), Me(h);
    }
  }
}
function hs(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ze(t, e) {
  var n = (
    /** @type {Effect} */
    G
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function qe(t, e) {
  var n = (e & ya) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Q)
      return Ze(X, null), X;
    r === void 0 && (r = hs(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || ji ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ze(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ll(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Q)
      return Ze(X, null), X;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        hs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ be(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ be(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ze(o, o), o;
  };
}
function ce(t, e) {
  if (Q) {
    G.nodes_end = X, Zn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Ye(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function ds(t, e) {
  return vs(t, e);
}
function ol(t, e) {
  mr(), e.intro = e.intro ?? !1;
  const n = e.target, r = Q, i = X;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Fi); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ oe(s);
    if (!s)
      throw Ge;
    ee(!0), Xt(
      /** @type {Comment} */
      s
    ), Zn();
    const a = vs(t, { ...e, anchor: s });
    if (X === null || X.nodeType !== 8 || /** @type {Comment} */
    X.data !== Mr)
      throw Vr(), Ge;
    return ee(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ge)
      return e.recover === !1 && Ma(), mr(), Zi(n), ee(!1), ds(t, e);
    throw a;
  } finally {
    ee(r), Xt(i);
  }
}
const Ne = /* @__PURE__ */ new Map();
function vs(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  mr();
  var l = /* @__PURE__ */ new Set(), o = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = sl(d);
        e.addEventListener(d, hn, { passive: p });
        var m = Ne.get(d);
        m === void 0 ? (document.addEventListener(d, hn, { passive: p }), Ne.set(d, 1)) : Ne.set(d, m + 1);
      }
    }
  };
  o(Fr(cs)), yr.add(o);
  var f = void 0, u = el(() => {
    var h = n ?? e.appendChild(Sn());
    return Je(() => {
      if (s) {
        Gr({});
        var c = (
          /** @type {ComponentContext} */
          vt
        );
        c.c = s;
      }
      i && (r.$$events = i), Q && Ze(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, Q && (G.nodes_end = X), s && Kr();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, hn);
        var d = (
          /** @type {number} */
          Ne.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, hn), Ne.delete(c)) : Ne.set(c, d);
      }
      yr.delete(o), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return wr.set(f, u), f;
}
let wr = /* @__PURE__ */ new WeakMap();
function ul(t, e) {
  const n = wr.get(t);
  return n ? (wr.delete(t), n(e)) : Promise.resolve();
}
function _i(t, e, n = !1) {
  Q && Zn();
  var r = t, i = null, s = null, a = ct, l = n ? Dr : 0, o = !1;
  const f = (h, c = !0) => {
    o = !0, u(c, h);
  }, u = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (Q) {
      const p = (
        /** @type {Comment} */
        r.data === Sr
      );
      !!a === p && (r = gr(), Xt(r), ee(!1), d = !0);
    }
    a ? (i ? qn(i) : c && (i = Je(() => c(r))), s && Fn(s, () => {
      s = null;
    })) : (s ? qn(s) : c && (s = Je(() => c(r))), i && Fn(i, () => {
      i = null;
    })), d && ee(!0);
  };
  Xr(() => {
    o = !1, e(f), o || u(null, null);
  }, l), Q && (r = X);
}
function fr(t, e) {
  return e;
}
function fl(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    Ur(e[a].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Zi(o), o.append(
      /** @type {Element} */
      n
    ), r.clear(), he(t, e[0].prev, e[s - 1].next);
  }
  os(i, () => {
    for (var f = 0; f < s; f++) {
      var u = e[f];
      l || (r.delete(u.k), he(t, u.prev, u.next)), ie(u.e, !l);
    }
  });
}
function cr(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  Q && Zn();
  var o = null, f = !1, u = /* @__PURE__ */ Va(() => {
    var h = n();
    return Ir(h) ? h : h == null ? [] : Fr(h);
  });
  Xr(() => {
    var h = g(u), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (Q) {
      var p = (
        /** @type {Comment} */
        a.data === Sr
      );
      p !== (c === 0) && (a = gr(), Xt(a), ee(!1), d = !0);
    }
    if (Q) {
      for (var m = null, b, w = 0; w < c; w++) {
        if (X.nodeType === 8 && /** @type {Comment} */
        X.data === Mr) {
          a = /** @type {Comment} */
          X, d = !0, ee(!1);
          break;
        }
        var $ = h[w], C = r($, w);
        b = ps(
          X,
          l,
          m,
          null,
          $,
          C,
          w,
          i,
          e,
          n
        ), l.items.set(C, b), m = b;
      }
      c > 0 && Xt(gr());
    }
    Q || cl(h, l, a, i, e, r, n), s !== null && (c === 0 ? o ? qn(o) : o = Je(() => s(a)) : o !== null && Fn(o, () => {
      o = null;
    })), d && ee(!0), g(u);
  }), Q && (a = X);
}
function cl(t, e, n, r, i, s, a) {
  var l = t.length, o = e.items, f = e.first, u = f, h, c = null, d = [], p = [], m, b, w, $;
  for ($ = 0; $ < l; $ += 1) {
    if (m = t[$], b = s(m, $), w = o.get(b), w === void 0) {
      var C = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : n;
      c = ps(
        C,
        e,
        c,
        c === null ? e.first : c.next,
        m,
        b,
        $,
        r,
        i,
        a
      ), o.set(b, c), d = [], p = [], u = c.next;
      continue;
    }
    if (hl(w, m, $), w.e.f & ne && qn(w.e), w !== u) {
      if (h !== void 0 && h.has(w)) {
        if (d.length < p.length) {
          var A = p[0], O;
          c = A.prev;
          var P = d[0], K = d[d.length - 1];
          for (O = 0; O < d.length; O += 1)
            gi(d[O], A, n);
          for (O = 0; O < p.length; O += 1)
            h.delete(p[O]);
          he(e, P.prev, K.next), he(e, c, P), he(e, K, A), u = A, c = K, $ -= 1, d = [], p = [];
        } else
          h.delete(w), gi(w, u, n), he(e, w.prev, w.next), he(e, w, c === null ? e.first : c.next), he(e, c, w), c = w;
        continue;
      }
      for (d = [], p = []; u !== null && u.k !== b; )
        u.e.f & ne || (h ?? (h = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      w = u;
    }
    d.push(w), c = w, u = w.next;
  }
  if (u !== null || h !== void 0) {
    for (var j = h === void 0 ? [] : Fr(h); u !== null; )
      u.e.f & ne || j.push(u), u = u.next;
    var et = j.length;
    if (et > 0) {
      var z = null;
      fl(e, j, z, o);
    }
  }
  G.first = e.first && e.first.e, G.last = c && c.e;
}
function hl(t, e, n, r) {
  Xi(t.v, e), t.i = n;
}
function ps(t, e, n, r, i, s, a, l, o, f) {
  var u = (o & ha) !== 0, h = (o & va) === 0, c = u ? h ? /* @__PURE__ */ Lr(i) : Et(i) : i, d = o & da ? Et(a) : a, p = {
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
    return p.e = Je(() => l(t, c, d, f), Q), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function gi(t, e, n) {
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
      /* @__PURE__ */ oe(s)
    );
    i.before(s), s = a;
  }
}
function he(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function _s(t, e) {
  Bi(() => {
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
function mi(t, e, n, r) {
  var i = t.__styles ?? (t.__styles = {});
  i[e] !== n && (i[e] = n, n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, ""));
}
function yi(t, e) {
  return t === e || (t == null ? void 0 : t[Ke]) === e;
}
function wn(t = {}, e, n, r) {
  return zr(() => {
    var i, s;
    return is(() => {
      i = s, s = [], In(() => {
        t !== n(...s) && (e(t, ...s), i && yi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Bi(() => {
        s && yi(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function dl(t) {
  vt === null && rl(), Br(() => {
    const e = In(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let dn = !1;
function vl(t) {
  var e = dn;
  try {
    return dn = !1, [t(), dn];
  } finally {
    dn = e;
  }
}
function Qt(t, e, n, r) {
  var O;
  var i = (n & pa) !== 0, s = !0, a = (n & ga) !== 0, l = (n & ma) !== 0, o = !1, f;
  a ? [f, o] = vl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var u = Ke in t || Vi in t, h = a && (((O = we(t, e)) == null ? void 0 : O.set) ?? (u && e in t && ((P) => t[e] = P))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, m = () => (p = !0, d && (d = !1, l ? c = In(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Oa(), f = m(), h && h(f));
  var b;
  if (b = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? m() : (d = !0, p = !1, P);
  }, !(n & _a))
    return b;
  if (h) {
    var w = t.$$legacy;
    return function(P, K) {
      return arguments.length > 0 ? ((!K || w || o) && h(K ? b() : P), P) : b();
    };
  }
  var $ = !1, C = /* @__PURE__ */ Lr(f), A = /* @__PURE__ */ Jn(() => {
    var P = b(), K = g(C);
    return $ ? ($ = !1, K) : C.v = P;
  });
  return i || (A.equals = qr), function(P, K) {
    if (arguments.length > 0) {
      const j = K ? g(A) : a ? xt(P) : P;
      return A.equals(j) || ($ = !0, J(C, j), p && c !== void 0 && (c = j), In(() => g(A))), P;
    }
    return g(A);
  };
}
function pl(t) {
  return new _l(t);
}
var te, At;
class _l {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    or(this, te);
    /** @type {Record<string, any>} */
    or(this, At);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ Lr(l);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return g(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Vi ? !0 : (g(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return J(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    ur(this, At, (e.hydrate ? ol : ds)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Ht(), ur(this, te, i.$$events);
    for (const a of Object.keys(ft(this, At)))
      a === "$set" || a === "$destroy" || a === "$on" || kn(this, a, {
        get() {
          return ft(this, At)[a];
        },
        /** @param {any} value */
        set(l) {
          ft(this, At)[a] = l;
        },
        enumerable: !0
      });
    ft(this, At).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ft(this, At).$destroy = () => {
      ul(ft(this, At));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ft(this, At).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    ft(this, te)[e] = ft(this, te)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return ft(this, te)[e].push(r), () => {
      ft(this, te)[e] = ft(this, te)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    ft(this, At).$destroy();
  }
}
te = new WeakMap(), At = new WeakMap();
let gs;
typeof HTMLElement == "function" && (gs = class extends HTMLElement {
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
          s !== "default" && (l.name = s), ce(a, l);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = gl(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = xn(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = pl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = tl(() => {
        is(() => {
          var s;
          this.$$r = !0;
          for (const a of Cn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = xn(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = xn(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Cn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function xn(t, e, n, r) {
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
function gl(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ms(t, e, n, r, i, s) {
  let a = class extends gs {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Cn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Cn(e).forEach((l) => {
    kn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var h;
        o = xn(l, o, e), this.$$d[l] = o;
        var f = this.$$c;
        if (f) {
          var u = (h = we(f, l)) == null ? void 0 : h.get;
          u ? f[l] = o : f.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    kn(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var ml = { value: () => {
} };
function ys() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new bn(n);
}
function bn(t) {
  this._ = t;
}
function yl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
bn.prototype = ys.prototype = {
  constructor: bn,
  on: function(t, e) {
    var n = this._, r = yl(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = wl(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = wi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = wi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new bn(t);
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
function wl(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function wi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ml, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var xr = "http://www.w3.org/1999/xhtml";
const xi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function er(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), xi.hasOwnProperty(e) ? { space: xi[e], local: t } : t;
}
function xl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === xr && e.documentElement.namespaceURI === xr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function bl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ws(t) {
  var e = er(t);
  return (e.local ? bl : xl)(e);
}
function $l() {
}
function jr(t) {
  return t == null ? $l : function() {
    return this.querySelector(t);
  };
}
function Al(t) {
  typeof t != "function" && (t = jr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = new Array(a), o, f, u = 0; u < a; ++u)
      (o = s[u]) && (f = t.call(o, o.__data__, u, s)) && ("__data__" in o && (f.__data__ = o.__data__), l[u] = f);
  return new bt(r, this._parents);
}
function El(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Rl() {
  return [];
}
function xs(t) {
  return t == null ? Rl : function() {
    return this.querySelectorAll(t);
  };
}
function Nl(t) {
  return function() {
    return El(t.apply(this, arguments));
  };
}
function Tl(t) {
  typeof t == "function" ? t = Nl(t) : t = xs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
  return new bt(r, i);
}
function bs(t) {
  return function() {
    return this.matches(t);
  };
}
function $s(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Cl = Array.prototype.find;
function kl(t) {
  return function() {
    return Cl.call(this.children, t);
  };
}
function Sl() {
  return this.firstElementChild;
}
function Ml(t) {
  return this.select(t == null ? Sl : kl(typeof t == "function" ? t : $s(t)));
}
var Ol = Array.prototype.filter;
function Pl() {
  return Array.from(this.children);
}
function Dl(t) {
  return function() {
    return Ol.call(this.children, t);
  };
}
function Il(t) {
  return this.selectAll(t == null ? Pl : Dl(typeof t == "function" ? t : $s(t)));
}
function Fl(t) {
  typeof t != "function" && (t = bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new bt(r, this._parents);
}
function As(t) {
  return new Array(t.length);
}
function ql() {
  return new bt(this._enter || this._groups.map(As), this._parents);
}
function Ln(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ln.prototype = {
  constructor: Ln,
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
function Ll(t) {
  return function() {
    return t;
  };
}
function Vl(t, e, n, r, i, s) {
  for (var a = 0, l, o = e.length, f = s.length; a < f; ++a)
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new Ln(t, s[a]);
  for (; a < o; ++a)
    (l = e[a]) && (i[a] = l);
}
function Hl(t, e, n, r, i, s, a) {
  var l, o, f = /* @__PURE__ */ new Map(), u = e.length, h = s.length, c = new Array(u), d;
  for (l = 0; l < u; ++l)
    (o = e[l]) && (c[l] = d = a.call(o, o.__data__, l, e) + "", f.has(d) ? i[l] = o : f.set(d, o));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (o = f.get(d)) ? (r[l] = o, o.__data__ = s[l], f.delete(d)) : n[l] = new Ln(t, s[l]);
  for (l = 0; l < u; ++l)
    (o = e[l]) && f.get(c[l]) === o && (i[l] = o);
}
function Yl(t) {
  return t.__data__;
}
function Bl(t, e) {
  if (!arguments.length) return Array.from(this, Yl);
  var n = e ? Hl : Vl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ll(t));
  for (var s = i.length, a = new Array(s), l = new Array(s), o = new Array(s), f = 0; f < s; ++f) {
    var u = r[f], h = i[f], c = h.length, d = zl(t.call(u, u && u.__data__, f, r)), p = d.length, m = l[f] = new Array(p), b = a[f] = new Array(p), w = o[f] = new Array(c);
    n(u, h, m, b, w, d, e);
    for (var $ = 0, C = 0, A, O; $ < p; ++$)
      if (A = m[$]) {
        for ($ >= C && (C = $ + 1); !(O = b[C]) && ++C < p; ) ;
        A._next = O || null;
      }
  }
  return a = new bt(a, r), a._enter = l, a._exit = o, a;
}
function zl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xl() {
  return new bt(this._exit || this._groups.map(As), this._parents);
}
function Ul(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Gl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), o = 0; o < a; ++o)
    for (var f = n[o], u = r[o], h = f.length, c = l[o] = new Array(h), d, p = 0; p < h; ++p)
      (d = f[p] || u[p]) && (c[p] = d);
  for (; o < i; ++o)
    l[o] = n[o];
  return new bt(l, this._parents);
}
function Kl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function jl(t) {
  t || (t = Wl);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], l = a.length, o = i[s] = new Array(l), f, u = 0; u < l; ++u)
      (f = a[u]) && (o[u] = f);
    o.sort(e);
  }
  return new bt(i, this._parents).order();
}
function Wl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Jl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Zl() {
  return Array.from(this);
}
function Ql() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function to() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function eo() {
  return !this.node();
}
function no(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, l; s < a; ++s)
      (l = i[s]) && t.call(l, l.__data__, s, i);
  return this;
}
function ro(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function io(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function so(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ao(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function lo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function oo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function uo(t, e) {
  var n = er(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? io : ro : typeof e == "function" ? n.local ? oo : lo : n.local ? ao : so)(n, e));
}
function Es(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function fo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function co(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ho(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function vo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? fo : typeof e == "function" ? ho : co)(t, e, n ?? "")) : Oe(this.node(), t);
}
function Oe(t, e) {
  return t.style.getPropertyValue(e) || Es(t).getComputedStyle(t, null).getPropertyValue(e);
}
function po(t) {
  return function() {
    delete this[t];
  };
}
function _o(t, e) {
  return function() {
    this[t] = e;
  };
}
function go(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function mo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? po : typeof e == "function" ? go : _o)(t, e)) : this.node()[t];
}
function Rs(t) {
  return t.trim().split(/^|\s+/);
}
function Wr(t) {
  return t.classList || new Ns(t);
}
function Ns(t) {
  this._node = t, this._names = Rs(t.getAttribute("class") || "");
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
  for (var n = Wr(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Cs(t, e) {
  for (var n = Wr(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function yo(t) {
  return function() {
    Ts(this, t);
  };
}
function wo(t) {
  return function() {
    Cs(this, t);
  };
}
function xo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ts : Cs)(this, t);
  };
}
function bo(t, e) {
  var n = Rs(t + "");
  if (arguments.length < 2) {
    for (var r = Wr(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? xo : e ? yo : wo)(n, e));
}
function $o() {
  this.textContent = "";
}
function Ao(t) {
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
function Ro(t) {
  return arguments.length ? this.each(t == null ? $o : (typeof t == "function" ? Eo : Ao)(t)) : this.node().textContent;
}
function No() {
  this.innerHTML = "";
}
function To(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Co(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ko(t) {
  return arguments.length ? this.each(t == null ? No : (typeof t == "function" ? Co : To)(t)) : this.node().innerHTML;
}
function So() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mo() {
  return this.each(So);
}
function Oo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Po() {
  return this.each(Oo);
}
function Do(t) {
  var e = typeof t == "function" ? t : ws(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Io() {
  return null;
}
function Fo(t, e) {
  var n = typeof t == "function" ? t : ws(t), r = e == null ? Io : typeof e == "function" ? e : jr(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Lo() {
  return this.each(qo);
}
function Vo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ho() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Yo(t) {
  return this.select(t ? Ho : Vo);
}
function Bo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function zo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Xo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Uo(t) {
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
    var r = this.__on, i, s = zo(e);
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
  var r = Xo(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var o = 0, f = l.length, u; o < f; ++o)
        for (i = 0, u = l[o]; i < s; ++i)
          if ((a = r[i]).type === u.type && a.name === u.name)
            return u.value;
    }
    return;
  }
  for (l = e ? Go : Uo, i = 0; i < s; ++i) this.each(l(r[i], e, n));
  return this;
}
function ks(t, e, n) {
  var r = Es(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function jo(t, e) {
  return function() {
    return ks(this, t, e);
  };
}
function Wo(t, e) {
  return function() {
    return ks(this, t, e.apply(this, arguments));
  };
}
function Jo(t, e) {
  return this.each((typeof e == "function" ? Wo : jo)(t, e));
}
function* Zo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ss = [null];
function bt(t, e) {
  this._groups = t, this._parents = e;
}
function Le() {
  return new bt([[document.documentElement]], Ss);
}
function Qo() {
  return this;
}
bt.prototype = Le.prototype = {
  constructor: bt,
  select: Al,
  selectAll: Tl,
  selectChild: Ml,
  selectChildren: Il,
  filter: Fl,
  data: Bl,
  enter: ql,
  exit: Xl,
  join: Ul,
  merge: Gl,
  selection: Qo,
  order: Kl,
  sort: jl,
  call: Jl,
  nodes: Zl,
  node: Ql,
  size: to,
  empty: eo,
  each: no,
  attr: uo,
  style: vo,
  property: mo,
  classed: bo,
  text: Ro,
  html: ko,
  raise: Mo,
  lower: Po,
  append: Do,
  insert: Fo,
  remove: Lo,
  clone: Yo,
  datum: Bo,
  on: Ko,
  dispatch: Jo,
  [Symbol.iterator]: Zo
};
function it(t) {
  return typeof t == "string" ? new bt([[document.querySelector(t)]], [document.documentElement]) : new bt([[t]], Ss);
}
function Jr(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ms(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function sn() {
}
var Qe = 0.7, Vn = 1 / Qe, ke = "\\s*([+-]?\\d+)\\s*", tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tu = /^#([0-9a-f]{3,8})$/, eu = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`), nu = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), ru = new RegExp(`^rgba\\(${ke},${ke},${ke},${tn}\\)$`), iu = new RegExp(`^rgba\\(${zt},${zt},${zt},${tn}\\)$`), su = new RegExp(`^hsl\\(${tn},${zt},${zt}\\)$`), au = new RegExp(`^hsla\\(${tn},${zt},${zt},${tn}\\)$`), bi = {
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
Jr(sn, $e, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $i,
  // Deprecated! Use color.formatHex.
  formatHex: $i,
  formatHex8: lu,
  formatHsl: ou,
  formatRgb: Ai,
  toString: Ai
});
function $i() {
  return this.rgb().formatHex();
}
function lu() {
  return this.rgb().formatHex8();
}
function ou() {
  return Os(this).formatHsl();
}
function Ai() {
  return this.rgb().formatRgb();
}
function $e(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = tu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ei(e) : n === 3 ? new dt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? vn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? vn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = eu.exec(t)) ? new dt(e[1], e[2], e[3], 1) : (e = nu.exec(t)) ? new dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ru.exec(t)) ? vn(e[1], e[2], e[3], e[4]) : (e = iu.exec(t)) ? vn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = su.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, 1) : (e = au.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, e[4]) : bi.hasOwnProperty(t) ? Ei(bi[t]) : t === "transparent" ? new dt(NaN, NaN, NaN, 0) : null;
}
function Ei(t) {
  return new dt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function vn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new dt(t, e, n, r);
}
function uu(t) {
  return t instanceof sn || (t = $e(t)), t ? (t = t.rgb(), new dt(t.r, t.g, t.b, t.opacity)) : new dt();
}
function br(t, e, n, r) {
  return arguments.length === 1 ? uu(t) : new dt(t, e, n, r ?? 1);
}
function dt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Jr(dt, br, Ms(sn, {
  brighter(t) {
    return t = t == null ? Vn : Math.pow(Vn, t), new dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Qe : Math.pow(Qe, t), new dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new dt(xe(this.r), xe(this.g), xe(this.b), Hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ri,
  // Deprecated! Use color.formatHex.
  formatHex: Ri,
  formatHex8: fu,
  formatRgb: Ni,
  toString: Ni
}));
function Ri() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}`;
}
function fu() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}${ye((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ni() {
  const t = Hn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${xe(this.r)}, ${xe(this.g)}, ${xe(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Hn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function xe(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ye(t) {
  return t = xe(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ti(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Mt(t, e, n, r);
}
function Os(t) {
  if (t instanceof Mt) return new Mt(t.h, t.s, t.l, t.opacity);
  if (t instanceof sn || (t = $e(t)), !t) return new Mt();
  if (t instanceof Mt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, o = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= o < 0.5 ? s + i : 2 - s - i, a *= 60) : l = o > 0 && o < 1 ? 0 : a, new Mt(a, l, o, t.opacity);
}
function cu(t, e, n, r) {
  return arguments.length === 1 ? Os(t) : new Mt(t, e, n, r ?? 1);
}
function Mt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Jr(Mt, cu, Ms(sn, {
  brighter(t) {
    return t = t == null ? Vn : Math.pow(Vn, t), new Mt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Qe : Math.pow(Qe, t), new Mt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new dt(
      hr(t >= 240 ? t - 240 : t + 120, i, r),
      hr(t, i, r),
      hr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Mt(Ci(this.h), pn(this.s), pn(this.l), Hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Hn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ci(this.h)}, ${pn(this.s) * 100}%, ${pn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ci(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function pn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function hr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Zr = (t) => () => t;
function hu(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function du(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function vu(t) {
  return (t = +t) == 1 ? Ps : function(e, n) {
    return n - e ? du(e, n, t) : Zr(isNaN(e) ? n : e);
  };
}
function Ps(t, e) {
  var n = e - t;
  return n ? hu(t, n) : Zr(isNaN(t) ? e : t);
}
const Yn = function t(e) {
  var n = vu(e);
  function r(i, s) {
    var a = n((i = br(i)).r, (s = br(s)).r), l = n(i.g, s.g), o = n(i.b, s.b), f = Ps(i.opacity, s.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = o(u), i.opacity = f(u), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function pu(t, e) {
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
function gu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Te(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(l) {
    for (a = 0; a < r; ++a) s[a] = i[a](l);
    return s;
  };
}
function mu(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Yt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function yu(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Te(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var $r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dr = new RegExp($r.source, "g");
function wu(t) {
  return function() {
    return t;
  };
}
function xu(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ds(t, e) {
  var n = $r.lastIndex = dr.lastIndex = 0, r, i, s, a = -1, l = [], o = [];
  for (t = t + "", e = e + ""; (r = $r.exec(t)) && (i = dr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, o.push({ i: a, x: Yt(r, i) })), n = dr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? o[0] ? xu(o[0].x) : wu(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u) l[(h = o[u]).i] = h.x(f);
    return l.join("");
  });
}
function Te(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Zr(e) : (n === "number" ? Yt : n === "string" ? (r = $e(e)) ? (e = r, Yn) : Ds : e instanceof $e ? Yn : e instanceof Date ? mu : _u(e) ? pu : Array.isArray(e) ? gu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? yu : Yt)(t, e);
}
var ki = 180 / Math.PI, Ar = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Is(t, e, n, r, i, s) {
  var a, l, o;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (o = t * n + e * r) && (n -= t * o, r -= e * o), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, o /= l), t * r < e * n && (t = -t, e = -e, o = -o, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * ki,
    skewX: Math.atan(o) * ki,
    scaleX: a,
    scaleY: l
  };
}
var _n;
function bu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ar : Is(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $u(t) {
  return t == null || (_n || (_n = document.createElementNS("http://www.w3.org/2000/svg", "g")), _n.setAttribute("transform", t), !(t = _n.transform.baseVal.consolidate())) ? Ar : (t = t.matrix, Is(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Fs(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, u, h, c, d, p) {
    if (f !== h || u !== c) {
      var m = d.push("translate(", null, e, null, n);
      p.push({ i: m - 4, x: Yt(f, h) }, { i: m - 2, x: Yt(u, c) });
    } else (h || c) && d.push("translate(" + h + e + c + n);
  }
  function a(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Yt(f, u) })) : u && h.push(i(h) + "rotate(" + u + r);
  }
  function l(f, u, h, c) {
    f !== u ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Yt(f, u) }) : u && h.push(i(h) + "skewX(" + u + r);
  }
  function o(f, u, h, c, d, p) {
    if (f !== h || u !== c) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: Yt(f, h) }, { i: m - 2, x: Yt(u, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), s(f.translateX, f.translateY, u.translateX, u.translateY, h, c), a(f.rotate, u.rotate, h, c), l(f.skewX, u.skewX, h, c), o(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(d) {
      for (var p = -1, m = c.length, b; ++p < m; ) h[(b = c[p]).i] = b.x(d);
      return h.join("");
    };
  };
}
var Au = Fs(bu, "px, ", "px)", "deg)"), Eu = Fs($u, ", ", ")", ")"), Pe = 0, ze = 0, Be = 0, qs = 1e3, Bn, Xe, zn = 0, Ae = 0, nr = 0, en = typeof performance == "object" && performance.now ? performance : Date, Ls = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Qr() {
  return Ae || (Ls(Ru), Ae = en.now() + nr);
}
function Ru() {
  Ae = 0;
}
function Xn() {
  this._call = this._time = this._next = null;
}
Xn.prototype = Vs.prototype = {
  constructor: Xn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Qr() : +n) + (e == null ? 0 : +e), !this._next && Xe !== this && (Xe ? Xe._next = this : Bn = this, Xe = this), this._call = t, this._time = n, Er();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Er());
  }
};
function Vs(t, e, n) {
  var r = new Xn();
  return r.restart(t, e, n), r;
}
function Nu() {
  Qr(), ++Pe;
  for (var t = Bn, e; t; )
    (e = Ae - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Pe;
}
function Si() {
  Ae = (zn = en.now()) + nr, Pe = ze = 0;
  try {
    Nu();
  } finally {
    Pe = 0, Cu(), Ae = 0;
  }
}
function Tu() {
  var t = en.now(), e = t - zn;
  e > qs && (nr -= e, zn = t);
}
function Cu() {
  for (var t, e = Bn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Bn = n);
  Xe = t, Er(r);
}
function Er(t) {
  if (!Pe) {
    ze && (ze = clearTimeout(ze));
    var e = t - Ae;
    e > 24 ? (t < 1 / 0 && (ze = setTimeout(Si, t - en.now() - nr)), Be && (Be = clearInterval(Be))) : (Be || (zn = en.now(), Be = setInterval(Tu, qs)), Pe = 1, Ls(Si));
  }
}
function Mi(t, e, n) {
  var r = new Xn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ku = ys("start", "end", "cancel", "interrupt"), Su = [], Hs = 0, Oi = 1, Rr = 2, $n = 3, Pi = 4, Nr = 5, An = 6;
function rr(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Mu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ku,
    tween: Su,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Hs
  });
}
function ti(t, e) {
  var n = Pt(t, e);
  if (n.state > Hs) throw new Error("too late; already scheduled");
  return n;
}
function Ut(t, e) {
  var n = Pt(t, e);
  if (n.state > $n) throw new Error("too late; already running");
  return n;
}
function Pt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Mu(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Vs(s, 0, n.time);
  function s(f) {
    n.state = Oi, n.timer.restart(a, n.delay, n.time), n.delay <= f && a(f - n.delay);
  }
  function a(f) {
    var u, h, c, d;
    if (n.state !== Oi) return o();
    for (u in r)
      if (d = r[u], d.name === n.name) {
        if (d.state === $n) return Mi(a);
        d.state === Pi ? (d.state = An, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[u]) : +u < e && (d.state = An, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[u]);
      }
    if (Mi(function() {
      n.state === $n && (n.state = Pi, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Rr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Rr) {
      for (n.state = $n, i = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = Nr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, u);
    n.state === Nr && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = An, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Ou(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Rr && r.state < Nr, r.state = An, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Pu(t) {
  return this.each(function() {
    Ou(this, t);
  });
}
function Du(t, e) {
  var n, r;
  return function() {
    var i = Ut(this, t), s = i.tween;
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
    var s = Ut(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var l = { name: e, value: n }, o = 0, f = i.length; o < f; ++o)
        if (i[o].name === e) {
          i[o] = l;
          break;
        }
      o === f && i.push(l);
    }
    s.tween = i;
  };
}
function Fu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Pt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Du : Iu)(n, t, e));
}
function ei(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Pt(i, r).value[e];
  };
}
function Ys(t, e) {
  var n;
  return (typeof e == "number" ? Yt : e instanceof $e ? Yn : (n = $e(e)) ? (e = n, Yn) : Ds)(t, e);
}
function qu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Lu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Vu(t, e, n) {
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
    var a, l = n(this), o;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function Bu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function zu(t, e) {
  var n = er(t), r = n === "transform" ? Eu : Ys;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Bu : Yu)(n, r, ei(this, "attr." + t, e)) : e == null ? (n.local ? Lu : qu)(n) : (n.local ? Hu : Vu)(n, r, e));
}
function Xu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Uu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Gu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Uu(t, s)), n;
  }
  return i._value = e, i;
}
function Ku(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Xu(t, s)), n;
  }
  return i._value = e, i;
}
function ju(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = er(t);
  return this.tween(n, (r.local ? Gu : Ku)(r, e));
}
function Wu(t, e) {
  return function() {
    ti(this, t).delay = +e.apply(this, arguments);
  };
}
function Ju(t, e) {
  return e = +e, function() {
    ti(this, t).delay = e;
  };
}
function Zu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wu : Ju)(e, t)) : Pt(this.node(), e).delay;
}
function Qu(t, e) {
  return function() {
    Ut(this, t).duration = +e.apply(this, arguments);
  };
}
function tf(t, e) {
  return e = +e, function() {
    Ut(this, t).duration = e;
  };
}
function ef(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qu : tf)(e, t)) : Pt(this.node(), e).duration;
}
function nf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ut(this, t).ease = e;
  };
}
function rf(t) {
  var e = this._id;
  return arguments.length ? this.each(nf(e, t)) : Pt(this.node(), e).ease;
}
function sf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ut(this, t).ease = n;
  };
}
function af(t) {
  if (typeof t != "function") throw new Error();
  return this.each(sf(this._id, t));
}
function lf(t) {
  typeof t != "function" && (t = bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new se(r, this._parents, this._name, this._id);
}
function of(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var o = e[l], f = n[l], u = o.length, h = a[l] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new se(a, this._parents, this._name, this._id);
}
function uf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ff(t, e, n) {
  var r, i, s = uf(e) ? ti : Ut;
  return function() {
    var a = s(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(e, n), a.on = i;
  };
}
function cf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Pt(this.node(), n).on.on(t) : this.each(ff(n, t, e));
}
function hf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function df() {
  return this.on("end.remove", hf(this._id));
}
function vf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = jr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], o = l.length, f = s[a] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = l[c]) && (h = t.call(u, u.__data__, c, l)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, rr(f[c], e, n, c, f, Pt(u, n)));
  return new se(s, this._parents, e, n);
}
function pf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = xs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var o = r[l], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, p = Pt(u, n), m = 0, b = c.length; m < b; ++m)
          (d = c[m]) && rr(d, e, n, m, c, p);
        s.push(c), a.push(u);
      }
  return new se(s, a, e, n);
}
var _f = Le.prototype.constructor;
function gf() {
  return new _f(this._groups, this._parents);
}
function mf(t, e) {
  var n, r, i;
  return function() {
    var s = Oe(this, t), a = (this.style.removeProperty(t), Oe(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Bs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Oe(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function wf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Oe(this, t), l = n(this), o = l + "";
    return l == null && (o = l = (this.style.removeProperty(t), Oe(this, t))), a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l));
  };
}
function xf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var o = Ut(this, t), f = o.on, u = o.value[s] == null ? l || (l = Bs(e)) : void 0;
    (f !== n || i !== u) && (r = (n = f).copy()).on(a, i = u), o.on = r;
  };
}
function bf(t, e, n) {
  var r = (t += "") == "transform" ? Au : Ys;
  return e == null ? this.styleTween(t, mf(t, r)).on("end.style." + t, Bs(t)) : typeof e == "function" ? this.styleTween(t, wf(t, r, ei(this, "style." + t, e))).each(xf(this._id, t)) : this.styleTween(t, yf(t, r, e), n).on("end.style." + t, null);
}
function $f(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Af(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && $f(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ef(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Af(t, e, n ?? ""));
}
function Rf(t) {
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
  return this.tween("text", typeof t == "function" ? Nf(ei(this, "text", t)) : Rf(t == null ? "" : t + ""));
}
function Cf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function kf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Cf(i)), e;
  }
  return r._value = t, r;
}
function Sf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, kf(t));
}
function Mf() {
  for (var t = this._name, e = this._id, n = zs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      if (o = a[f]) {
        var u = Pt(o, e);
        rr(o, t, n, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new se(r, this._parents, t, n);
}
function Of() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var l = { value: a }, o = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var f = Ut(this, r), u = f.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(o)), f.on = e;
    }), i === 0 && s();
  });
}
var Pf = 0;
function se(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function En(t) {
  return Le().transition(t);
}
function zs() {
  return ++Pf;
}
var jt = Le.prototype;
se.prototype = En.prototype = {
  constructor: se,
  select: vf,
  selectAll: pf,
  selectChild: jt.selectChild,
  selectChildren: jt.selectChildren,
  filter: lf,
  merge: of,
  selection: gf,
  transition: Mf,
  call: jt.call,
  nodes: jt.nodes,
  node: jt.node,
  size: jt.size,
  empty: jt.empty,
  each: jt.each,
  on: cf,
  attr: zu,
  attrTween: ju,
  style: bf,
  styleTween: Ef,
  text: Tf,
  textTween: Sf,
  remove: df,
  tween: Fu,
  delay: Zu,
  duration: ef,
  ease: rf,
  easeVarying: af,
  end: Of,
  [Symbol.iterator]: jt[Symbol.iterator]
};
function Df(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var If = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Df
};
function Ff(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function qf(t) {
  var e, n;
  t instanceof se ? (e = t._id, t = t._name) : (e = zs(), (n = If).time = Qr(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && rr(o, t, e, f, a, n || Ff(o, e));
  return new se(r, this._parents, t, e);
}
Le.prototype.interrupt = Pu;
Le.prototype.transition = qf;
const Tr = Math.PI, Cr = 2 * Tr, me = 1e-6, Lf = Cr - me;
function Xs(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Vf(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Xs;
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
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Xs : Vf(e);
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
    let a = this._x1, l = this._y1, o = r - e, f = i - n, u = a - e, h = l - n, c = u * u + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > me) if (!(Math.abs(h * o - f * u) > me) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, m = o * o + f * f, b = d * d + p * p, w = Math.sqrt(m), $ = Math.sqrt(c), C = s * Math.tan((Tr - Math.acos((m + c - b) / (2 * w * $))) / 2), A = C / $, O = C / w;
      Math.abs(A - 1) > me && this._append`L${e + A * u},${n + A * h}`, this._append`A${s},${s},0,0,${+(h * d > u * p)},${this._x1 = e + O * o},${this._y1 = n + O * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), o = r * Math.sin(i), f = e + l, u = n + o, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${u}` : (Math.abs(this._x1 - f) > me || Math.abs(this._y1 - u) > me) && this._append`L${f},${u}`, r && (c < 0 && (c = c % Cr + Cr), c > Lf ? this._append`A${r},${r},0,1,${h},${e - l},${n - o}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = u}` : c > me && this._append`A${r},${r},0,${+(c >= Tr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
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
const Bf = Yf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function ot(t) {
  return function() {
    return t;
  };
}
const Di = Math.abs, at = Math.atan2, ge = Math.cos, zf = Math.max, vr = Math.min, Vt = Math.sin, Ce = Math.sqrt, ht = 1e-12, nn = Math.PI, Un = nn / 2, Rn = 2 * nn;
function Xf(t) {
  return t > 1 ? 0 : t < -1 ? nn : Math.acos(t);
}
function Ii(t) {
  return t >= 1 ? Un : t <= -1 ? -Un : Math.asin(t);
}
function Uf(t) {
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
function jf(t) {
  return t.startAngle;
}
function Wf(t) {
  return t.endAngle;
}
function Jf(t) {
  return t && t.padAngle;
}
function Zf(t, e, n, r, i, s, a, l) {
  var o = n - t, f = r - e, u = a - i, h = l - s, c = h * o - u * f;
  if (!(c * c < ht))
    return c = (u * (e - s) - h * (t - i)) / c, [t + c * o, e + c * f];
}
function gn(t, e, n, r, i, s, a) {
  var l = t - n, o = e - r, f = (a ? s : -s) / Ce(l * l + o * o), u = f * o, h = -f * l, c = t + u, d = e + h, p = n + u, m = r + h, b = (c + p) / 2, w = (d + m) / 2, $ = p - c, C = m - d, A = $ * $ + C * C, O = i - s, P = c * m - p * d, K = (C < 0 ? -1 : 1) * Ce(zf(0, O * O * A - P * P)), j = (P * C - $ * K) / A, et = (-P * $ - C * K) / A, z = (P * C + $ * K) / A, I = (-P * $ + C * K) / A, V = j - b, N = et - w, L = z - b, _t = I - w;
  return V * V + N * N > L * L + _t * _t && (j = z, et = I), {
    cx: j,
    cy: et,
    x01: -u,
    y01: -h,
    x11: j * (i / O - 1),
    y11: et * (i / O - 1)
  };
}
function Wt() {
  var t = Gf, e = Kf, n = ot(0), r = null, i = jf, s = Wf, a = Jf, l = null, o = Uf(f);
  function f() {
    var u, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - Un, m = s.apply(this, arguments) - Un, b = Di(m - p), w = m > p;
    if (l || (l = u = o()), d < c && (h = d, d = c, c = h), !(d > ht)) l.moveTo(0, 0);
    else if (b > Rn - ht)
      l.moveTo(d * ge(p), d * Vt(p)), l.arc(0, 0, d, p, m, !w), c > ht && (l.moveTo(c * ge(m), c * Vt(m)), l.arc(0, 0, c, m, p, w));
    else {
      var $ = p, C = m, A = p, O = m, P = b, K = b, j = a.apply(this, arguments) / 2, et = j > ht && (r ? +r.apply(this, arguments) : Ce(c * c + d * d)), z = vr(Di(d - c) / 2, +n.apply(this, arguments)), I = z, V = z, N, L;
      if (et > ht) {
        var _t = Ii(et / c * Vt(j)), Gt = Ii(et / d * Vt(j));
        (P -= _t * 2) > ht ? (_t *= w ? 1 : -1, A += _t, O -= _t) : (P = 0, A = O = (p + m) / 2), (K -= Gt * 2) > ht ? (Gt *= w ? 1 : -1, $ += Gt, C -= Gt) : (K = 0, $ = C = (p + m) / 2);
      }
      var st = d * ge($), Nt = d * Vt($), Kt = c * ge(O), Tt = c * Vt(O);
      if (z > ht) {
        var Dt = d * ge(C), ue = d * Vt(C), pe = c * ge(A), Ct = c * Vt(A), gt;
        if (b < nn)
          if (gt = Zf(st, Nt, pe, Ct, Dt, ue, Kt, Tt)) {
            var fe = st - gt[0], It = Nt - gt[1], Ft = Dt - gt[0], x = ue - gt[1], q = 1 / Vt(Xf((fe * Ft + It * x) / (Ce(fe * fe + It * It) * Ce(Ft * Ft + x * x))) / 2), B = Ce(gt[0] * gt[0] + gt[1] * gt[1]);
            I = vr(z, (c - B) / (q - 1)), V = vr(z, (d - B) / (q + 1));
          } else
            I = V = 0;
      }
      K > ht ? V > ht ? (N = gn(pe, Ct, st, Nt, d, V, w), L = gn(Dt, ue, Kt, Tt, d, V, w), l.moveTo(N.cx + N.x01, N.cy + N.y01), V < z ? l.arc(N.cx, N.cy, V, at(N.y01, N.x01), at(L.y01, L.x01), !w) : (l.arc(N.cx, N.cy, V, at(N.y01, N.x01), at(N.y11, N.x11), !w), l.arc(0, 0, d, at(N.cy + N.y11, N.cx + N.x11), at(L.cy + L.y11, L.cx + L.x11), !w), l.arc(L.cx, L.cy, V, at(L.y11, L.x11), at(L.y01, L.x01), !w))) : (l.moveTo(st, Nt), l.arc(0, 0, d, $, C, !w)) : l.moveTo(st, Nt), !(c > ht) || !(P > ht) ? l.lineTo(Kt, Tt) : I > ht ? (N = gn(Kt, Tt, Dt, ue, c, -I, w), L = gn(st, Nt, pe, Ct, c, -I, w), l.lineTo(N.cx + N.x01, N.cy + N.y01), I < z ? l.arc(N.cx, N.cy, I, at(N.y01, N.x01), at(L.y01, L.x01), !w) : (l.arc(N.cx, N.cy, I, at(N.y01, N.x01), at(N.y11, N.x11), !w), l.arc(0, 0, c, at(N.cy + N.y11, N.cx + N.x11), at(L.cy + L.y11, L.cx + L.x11), w), l.arc(L.cx, L.cy, I, at(L.y11, L.x11), at(L.y01, L.x01), !w))) : l.arc(0, 0, c, O, A, w);
    }
    if (l.closePath(), u) return l = null, u + "" || null;
  }
  return f.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - nn / 2;
    return [ge(h) * u, Vt(h) * u];
  }, f.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ot(+u), f) : t;
  }, f.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ot(+u), f) : e;
  }, f.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ot(+u), f) : n;
  }, f.padRadius = function(u) {
    return arguments.length ? (r = u == null ? null : typeof u == "function" ? u : ot(+u), f) : r;
  }, f.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : ot(+u), f) : i;
  }, f.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : ot(+u), f) : s;
  }, f.padAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : ot(+u), f) : a;
  }, f.context = function(u) {
    return arguments.length ? (l = u ?? null, f) : l;
  }, f;
}
function Qf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function tc(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ec(t) {
  return t;
}
function pr() {
  var t = ec, e = tc, n = null, r = ot(0), i = ot(Rn), s = ot(0);
  function a(l) {
    var o, f = (l = Qf(l)).length, u, h, c = 0, d = new Array(f), p = new Array(f), m = +r.apply(this, arguments), b = Math.min(Rn, Math.max(-Rn, i.apply(this, arguments) - m)), w, $ = Math.min(Math.abs(b) / f, s.apply(this, arguments)), C = $ * (b < 0 ? -1 : 1), A;
    for (o = 0; o < f; ++o)
      (A = p[d[o] = o] = +t(l[o], o, l)) > 0 && (c += A);
    for (e != null ? d.sort(function(O, P) {
      return e(p[O], p[P]);
    }) : n != null && d.sort(function(O, P) {
      return n(l[O], l[P]);
    }), o = 0, h = c ? (b - f * C) / c : 0; o < f; ++o, m = w)
      u = d[o], A = p[u], w = m + (A > 0 ? A * h : 0) + C, p[u] = {
        data: l[u],
        index: o,
        value: A,
        startAngle: m,
        endAngle: w,
        padAngle: $
      };
    return p;
  }
  return a.value = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ot(+l), a) : t;
  }, a.sortValues = function(l) {
    return arguments.length ? (e = l, n = null, a) : e;
  }, a.sort = function(l) {
    return arguments.length ? (n = l, e = null, a) : n;
  }, a.startAngle = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : ot(+l), a) : r;
  }, a.endAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : ot(+l), a) : i;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : ot(+l), a) : s;
  }, a;
}
function Ue(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ue.prototype = {
  constructor: Ue,
  scale: function(t) {
    return t === 1 ? this : new Ue(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ue(this.k, this.x + this.k * t, this.y + this.k * e);
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
Ue.prototype;
const de = {}, kr = "No Further Rankings";
function Gn(t, e) {
  let n = 0;
  for (let r = 1; r < e; r++) {
    const i = t.results[r - 1].tallyResults;
    for (let s = 0; s < i.length; s++) {
      const a = i[s].transfers;
      if (a) {
        const l = a.exhausted;
        l && (n += Number(l));
      }
    }
  }
  return n;
}
function Us(t, e, n) {
  if (e < 1)
    return [];
  const r = t.results[e - 1].tallyResults, i = [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s][n];
    a != null && i.push(a);
  }
  return i;
}
function Kn(t, e) {
  return Us(t, e, "eliminated");
}
function jn(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(Us(t, r, "elected"));
  return n;
}
var nc = /* @__PURE__ */ ll('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const rc = { hash: "svelte-3kpd", code: "" };
function Gs(t, e) {
  Gr(e, !0), _s(t, rc);
  let n = Qt(e, "jsonData", 7), r = Qt(e, "currentRound", 7, 1), i = Qt(e, "mouseEventType", 15), s = Qt(e, "mouseData", 15), a = Qt(e, "mouseY", 15), l = Qt(e, "requestRoundChange", 7, (v) => {
  });
  const o = 800, f = 800, u = Math.min(o, f) * 0.3, h = o / 2, c = f / 2, d = "Pie", p = "Donut", m = "TextLayer", b = "#transfer", w = "url(#cross-hatch)", $ = 1.15, C = 0.1, A = 750, O = 800;
  let P = [], K = [], j = [], et = 0, z = Jt(0), I = 0, V = Jt(null);
  function N() {
    const v = it(g(V));
    v.select("#" + d).remove(), v.select("#" + p).remove(), v.select("#" + m).remove();
  }
  function L(v) {
    l() && (W = v, l()(v));
  }
  function _t(v) {
    N(), j = Gt(v), P = Qs(v, d, j, h, c, 0, st());
  }
  dl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), gt(), setTimeout(
      () => {
        _t(r());
      },
      0
    );
  });
  function Gt(v) {
    const _ = Ct(v);
    return et = ue(v), _;
  }
  function st() {
    return u;
  }
  function Nt() {
    return st() * 1.41;
  }
  function Kt(v, _) {
    if (v === "exhausted") return Gn(n(), _);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[v]);
    }
  }
  function Tt(v, _) {
    return Kt(v, _).toLocaleString("en-US");
  }
  function Dt(v, _) {
    return (Kt(v, _) / et).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function ue(v) {
    const _ = n().results[v - 1].tally;
    let y = 0;
    for (let [M, R] of Object.entries(_))
      y += Number(R);
    return y;
  }
  function pe(v, _) {
    const y = n().results[_ - 1].tallyResults;
    let M = 0;
    const R = y.findIndex((k) => (k == null ? void 0 : k.elected) && v == k.elected);
    if (R >= 0) {
      const k = y[R].transfers;
      if (k)
        for (let [T, S] of Object.entries(k)) M += Number(S);
    } else
      return 0;
    return M;
  }
  function Ct(v) {
    const _ = n().results;
    let y = _[Math.max(0, v - 2)].tally;
    const M = [], R = [];
    for (let [T, S] of Object.entries(y))
      M.push({ label: T, value: 0 });
    y = _[v - 1].tally;
    for (let T of M) {
      const S = Number(y[T.label]), F = pe(T.label, v);
      F > 0 ? (R.push({
        label: T.label + b,
        value: F
      }), T.value = S - F, R.push(T)) : (T.value = S, R.push(T));
    }
    const k = Gn(n(), v);
    return R.push({ label: "exhausted", value: k }), R;
  }
  function gt() {
    const v = it(g(V)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, M] of Object.entries(n().results[0].tally)) {
      _ < 10 ? de[y] = Bf[_] : de[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"), _++;
      {
        const R = v.clone(!0);
        R.attr("id", y.replaceAll(" ", "-")).select("rect").attr("fill", de[y]), R.select("path").attr("stroke", "#505050");
      }
    }
    de.exhausted = w, de["Inactive Ballots"] = w;
  }
  function fe() {
    it(g(V)).select("#" + p).remove();
  }
  function It(v, _) {
    const y = En("global").duration(O);
    _ && y.on("end", _), fe(), _e(v), ta(), na(0, st()), ri();
  }
  function Ft(v, _) {
    const y = En("global").duration(O);
    _ && y.on("end", _), on(v);
  }
  function x(v, _) {
    const y = En("global").duration(O);
    _ && y.on("end", _), an(v), ln(st());
  }
  function q() {
    B = !1;
  }
  let B = !1;
  function nt() {
    if (B) {
      console.warn("buttons locked out");
      return;
    }
    B = !0, I = r(), rt();
  }
  function rt() {
    J(z, 0);
    const v = I < n().results.length - 1 ? rt : q;
    It(I, () => {
      Ft(I, () => {
        I++, L(I), x(I, v);
      });
    });
  }
  Br(() => {
    ut();
  });
  let W = 0;
  function ut() {
    console.log(`previous round was ${W}, currentRound is ${r()}`), W != r() && (W == r() - 1 && W > 0 ? Ve() : $t(r()), W = r());
  }
  function $t(v) {
    if (console.log("setRoundFn called"), B) {
      console.warn("buttons locked out");
      return;
    }
    console.log("past button lockout"), J(z, 0), _t(v);
  }
  function Ve() {
    if (console.log("animateOneRoundFn called"), B) {
      console.warn("buttons locked out");
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't anitmate to round ${r()}`);
      return;
    }
    if (console.log("past button lockout"), I = r(), I >= n().results.length) {
      B = !1;
      return;
    }
    B = !0, g(z) === 0 ? It(I - 1, () => {
      Ft(I - 1, () => {
        x(I, q);
      });
    }) : g(z) === 1 ? Ft(I - 1, () => {
      x(I, q);
    }) : g(z) === 2 && x(I, q), J(z, 0);
  }
  function Ee() {
    if (console.log(`animateOnePhaseFn called, currentRound = ${r()}, displayPhase = ${g(z)}`), r() >= n().results.length) {
      ri();
      return;
    }
    B = !0, J(z, (g(z) + 1) % 3), I = r(), g(z) === 1 ? It(I, q) : g(z) === 2 ? Ft(I, q) : g(z) === 0 ? (I++, L(I), x(I, q)) : (B = !1, console.warn("displayPhase out of range at ", g(z)));
  }
  function an(v) {
    j = Ct(v), P = ra(v, d, j, 0, st(), !0);
  }
  function ln(v, _) {
    pr().sort(null).value((S) => S.value);
    const y = it(g(V)).select("#" + p), M = Wt().outerRadius(v).innerRadius(v - 1), R = y.selectAll(".slice");
    let k = R.size();
    function T() {
      k--, k === 0 && ea();
    }
    R.select("path").transition("global").duration(A).attr("d", (S) => M(S)).on("end", (S) => T());
  }
  function _e(v) {
    const _ = js(v, P);
    K = ii(v, p, _, h, c, st(), Nt(), !1, !0);
  }
  function on(v) {
    const _ = Js(v, K, P);
    K = si(
      v,
      p,
      _,
      /* previousDonutInfoGlobal, */
      st(),
      Nt(),
      !1
    );
  }
  function un(v) {
    const _ = v.data.label;
    return de[_.split("#")[0]];
  }
  function Ks(v) {
    const _ = {}, y = n().results[v - 1].tallyResults;
    for (let M = 0; M < y.length; M++) {
      let R = y[M].eliminated;
      if (R === void 0 && (R = y[M].elected), R === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const k = y[M].transfers;
      if (k === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [T, S] of Object.entries(k))
        _[T] === void 0 ? _[T] = Number(S) : _[T] += Number(S);
    }
    return _;
  }
  function js(v, _) {
    console.log(`makeDonutInfo: round = ${v}`);
    const y = [], M = et, R = n().results[v - 1].tallyResults;
    for (let k = 0; k < R.length; k++) {
      let T = R[k].eliminated;
      if (T === void 0 && (T = R[k].elected), T === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const S = R[k].transfers;
      if (S === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let F = _.find((D) => D.data.label == T + b);
      F === void 0 && (F = _.find((D) => D.data.label == T));
      let H = 0;
      if (F) H = F.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [D, Y] of Object.entries(S)) {
        let Z;
        const qt = _.find((tt) => tt.data.label == D);
        if (qt)
          Z = structuredClone(qt);
        else if (D == "exhausted")
          Z = {
            data: { label: D, value: Number(Y) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (D == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", Y);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", D);
          continue;
        }
        const E = Number(Y) / M * 2 * Math.PI;
        Z.startAngle = H, H = Z.endAngle = H + E, Z.index = k, Z.data.label = `${Z.data.label}#${k}`, y.push(Z);
      }
    }
    return y;
  }
  function Ws(v, _, y) {
    const M = {};
    for (let [R, k] of Object.entries(v)) {
      const T = y.find((H) => R == H.data.label);
      if (T === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", R);
        continue;
      }
      const S = (T.startAngle + T.endAngle) / 2, F = v[T.data.label] / _ * 2 * Math.PI;
      M[T.data.label] = S - F / 2;
    }
    return M;
  }
  function Js(v, _, y) {
    const M = [], R = et, k = Ks(v), T = Ws(k, R, y);
    for (let [S, F] of _.entries()) {
      const H = structuredClone(F), D = F.endAngle - F.startAngle, Y = y.find((Z) => F.data.label.indexOf(Z.data.label) === 0);
      if (Y) {
        const Z = Y.data.label;
        H.startAngle = T[Z], T[Z] += D, H.endAngle = H.startAngle + D;
      } else if (F.data.label.indexOf("exhausted") === 0)
        H.startAngle = F.startAngle, H.endAngle = F.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", F.data.label);
        continue;
      }
      H.index = S, M.push(H);
    }
    return M;
  }
  function ni(v, _, y, M, R, k) {
    const S = it(g(V)).append("g").attr("id", m).attr("transform", `translate(${y}, ${M})`), F = Wt().innerRadius(R * $).outerRadius(R * $);
    S.selectAll("text").data(_).enter().each(function(H) {
      H.endAngle - H.startAngle < C || H.data.label.includes(b) || it(this).append("g").attr("id", (D) => D.data.label).classed("eliminated", (D) => k.includes(D.data.label.split("#")[0]) || D.data.label.includes(b)).each(function(D, Y) {
        D.data.label === "exhausted" && it(this).on("mouseenter", (Z, qt) => ia(Z)).on("mouseleave", (Z, qt) => sa());
      }).append("text").attr("transform", (D) => `translate(${F.centroid(D)})`).attr("text-anchor", (D) => ir(D.startAngle, D.endAngle)).text((D) => D.data.label === "exhausted" ? kr : D.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((D) => Tt(D.data.label, v) + " (" + Dt(D.data.label, v) + ")");
    });
  }
  function Zs(v, _, y, M) {
    const k = it(g(V)).select("#" + m), T = k.selectAll("tspan"), S = k.selectAll("g").data(_, (Y) => Y.data.label).classed("eliminated", (Y) => M.includes(Y.data.label.split("#")[0]) || Y.data.label.includes(b)), F = Wt().innerRadius(y * $).outerRadius(y * $ + 1);
    T.transition("global").duration(A).attr("transform", (Y) => `translate(${F.centroid(Y)})`).attr("text-anchor", (Y) => ir(Y.startAngle, Y.endAngle)), S.select("text").transition("global").duration(A).attr("transform", (Y) => `translate(${F.centroid(Y)})`).attr("text-anchor", (Y) => ir(Y.startAngle, Y.endAngle)).on("end", (Y) => D());
    let H = S.size();
    function D(Y) {
      H--, H === 0 && (k.remove(), ni(v, _, h, c, y, M));
    }
  }
  function Qs(v, _, y, M, R, k, T, S = !0, F = !1) {
    const D = pr().sort(null).value((Y) => Y.value)(y);
    return ii(v, _, D, M, R, k, T, S, F), D;
  }
  function ri() {
    it(g(V)).select("#" + d).selectAll(".elected").style("stroke", "darkblue").style("stroke-width", "2px");
  }
  function ii(v, _, y, M, R, k, T, S, F) {
    const H = Kn(n(), v), D = jn(n(), v), qt = it(g(V)).attr("width", "100%").attr("height", f).attr("viewBox", `0 0 ${o} ${f}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", _).attr("transform", `translate(${M}, ${R})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (E) => H.includes(E.data.label.split("#")[0]) || E.data.label.includes(b)).classed("elected", (E) => D.includes(E.data.label.split("#")[0]) && !E.data.label.includes(b)).attr("id", (E) => E.data.label).on("mouseenter", (E, tt) => ar(E, tt)).on("mouseleave", (E, tt) => lr(E, tt)), He = Wt().outerRadius(T).innerRadius(k);
    if (F) {
      const E = Wt().outerRadius(k + 1).innerRadius(k);
      qt.append("path").attr("d", E).transition("global").duration(A).attr("d", (tt) => He(tt)).attr("fill", (tt) => un(tt)).on("end", (tt) => sr());
    } else
      qt.append("path").attr("d", (E) => He(E)).attr("fill", (E) => un(E)), sr();
    return S && ni(v, y, M, R, T, H), y;
  }
  function ta() {
    const y = it(g(V)).select("#" + m).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function ea() {
    const y = it(g(V)).select("#" + m).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function na(v, _) {
    const R = it(g(V)).select("#" + d).selectAll(".eliminated"), k = Wt().innerRadius(v), T = Wt().outerRadius(_);
    R.classed("finished", !0).select("path").transition("global").duration(A).attrTween("d", function(S) {
      const F = Te(_, v);
      return function(H) {
        return T.innerRadius(F(H)), T(S);
      };
    }).attr("fill", (S) => `url(#${S.data.label.split("#")[0].replaceAll(" ", "-")})`), R.clone(!0).classed("finished", !0).select("path").transition("global").duration(A).attrTween("d", function(S) {
      const F = Te(_, v);
      return function(H) {
        return k.outerRadius(F(H)), k(S);
      };
    }).attr("fill", (S) => un(S));
  }
  function ir(v, _) {
    const y = (v + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function sr() {
    it(g(V)).select("#" + m).raise().append("g").remove();
  }
  function ra(v, _, y, M, R, k) {
    const S = pr().sort(null).value((F) => F.value)(y);
    return si(
      v,
      _,
      S,
      /* previousPieInfo, */
      M,
      R,
      k
    ), S;
  }
  function si(v, _, y, M, R, k) {
    const T = Kn(n(), v), S = jn(n(), v), F = Wt().outerRadius(R).innerRadius(M).startAngle((E) => E.startAngle).endAngle((E) => E.endAngle), H = Wt().outerRadius(R).innerRadius(M), Y = it(g(V)).select("#" + _);
    Y.selectAll(".slice").attr("prevStart", (E) => E.startAngle).attr("prevEnd", (E) => E.endAngle);
    const Z = Y.selectAll(".slice").data(y, (E) => E.data.label);
    Z.enter().append("g").attr("class", "slice").attr("id", (E) => E.data.label).classed("eliminated", !0).on("mouseenter", (E, tt) => ar(E, tt)).on("mouseleave", (E, tt) => lr(E, tt)).append("path").attr("d", (E) => H(E)).attr("fill", (E) => un(E)), Z.classed("eliminated", (E) => T.includes(E.data.label.split("#")[0])).classed("elected", (E) => S.includes(E.data.label.split("#")[0])).on("mouseenter", (E, tt) => ar(E, tt)).on("mouseleave", (E, tt) => lr(E, tt));
    let qt = Z.size();
    function He() {
      qt--, qt <= 0 && (sr(), Y.selectAll(".finished").remove());
    }
    return Z.select("path").transition("global").duration(A).attrTween("d", function(E) {
      const tt = Number(it(this.parentNode).attr("prevStart")), aa = Number(it(this.parentNode).attr("prevEnd")), la = Te(tt, E.startAngle), oa = Te(aa, E.endAngle);
      return (li) => (F.startAngle(la(li)).endAngle(oa(li)), F(E));
    }).on("end", He), k && Zs(v, y, R, T), y;
  }
  function ar(v, _) {
    s(_.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function lr(v, _) {
    s(_.data.label.split("#")[0]), i("leave");
  }
  function ia(v, _) {
    i("show-exhausted"), a(v.clientY);
  }
  function sa(v, _) {
    i("hide-exhausted");
  }
  var ai = nc();
  return wn(ai, (v) => J(V, v), () => g(V)), ce(t, ai), Kr({
    runFullAnimationFn: nt,
    animateOnePhaseFn: Ee,
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), Ht();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v = 1) {
      r(v), Ht();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), Ht();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), Ht();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), Ht();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(v = (_) => {
    }) {
      l(v), Ht();
    }
  });
}
ms(
  Gs,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseY: {},
    requestRoundChange: {}
  },
  [],
  ["runFullAnimationFn", "animateOnePhaseFn"],
  !0
);
function ic(t) {
  const e = [];
  if (!t || typeof t != "object")
    return { valid: !1, errors: ["Input is not a valid object"] };
  if (t.config ? t.config.contest || e.push("Config is missing contest name") : e.push("Config is missing"), !t.results || !Array.isArray(t.results))
    return e.push("Results must be an array"), { valid: e.length === 0, errors: e };
  if (t.results.length === 0)
    return e.push("Results array is empty"), { valid: e.length === 0, errors: e };
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = 0;
  for (let s = 0; s < t.results.length; s++) {
    const a = t.results[s];
    if (typeof a.round != "number" ? e.push(`Round ${s} is missing a round number`) : s === 0 && a.round !== 1 ? e.push(`First round number should be 1, found ${a.round}`) : s > 0 && a.round !== i + 1 && e.push(`Round numbers should be sequential. Expected ${i + 1}, found ${a.round}`), i = a.round, !a.tally || typeof a.tally != "object") {
      e.push(`Round ${a.round} is missing a valid tally`);
      continue;
    }
    if (s === 0)
      n = new Set(Object.keys(a.tally)), r = new Set(n);
    else {
      const l = new Set(Object.keys(a.tally)), o = [...l].filter((f) => !n.has(f));
      o.length > 0 && e.push(`Round ${a.round} contains new candidates not present in earlier rounds: ${o.join(", ")}`), r = l;
    }
    if (!a.tallyResults || !Array.isArray(a.tallyResults)) {
      e.push(`Round ${a.round} is missing tallyResults array`);
      continue;
    }
    for (const l of a.tallyResults) {
      l.elected !== void 0 && l.eliminated !== void 0 ? e.push(`Round ${a.round} has a result with both elected and eliminated set`) : l.elected === void 0 && l.eliminated === void 0 && e.push(`Round ${a.round} has a result with neither elected nor eliminated set`);
      const o = l.elected || l.eliminated;
      if (o && !r.has(o) && e.push(`Round ${a.round} references candidate "${o}" who is not in the current candidate list`), !l.transfers || typeof l.transfers != "object") {
        e.push(`Round ${a.round} has a result missing transfers`);
        continue;
      }
      const f = Object.keys(l.transfers);
      for (const u of f)
        u !== "exhausted" && !r.has(u) && e.push(`Round ${a.round} transfers votes to "${u}" who is not in the current candidate list`);
      if (l.eliminated && o) {
        const u = parseFloat(a.tally[o] || "0");
        let h = 0;
        for (const c of Object.values(l.transfers)) {
          const d = parseFloat(c || "0");
          isNaN(d) || (h += d);
        }
        Math.abs(u - h) > 1e-4 && e.push(`Round ${a.round}: Eliminated candidate "${o}" had ${u} votes but transferred ${h}`);
      }
      o && r.delete(o);
    }
  }
  return {
    valid: e.length === 0,
    errors: e
  };
}
var sc = /* @__PURE__ */ qe("<span> </span> &nbsp;", 1), ac = /* @__PURE__ */ qe("About to eliminate: <!>", 1), lc = /* @__PURE__ */ qe("<span> </span> &nbsp;", 1), oc = /* @__PURE__ */ qe("Elected: <!>", 1), uc = /* @__PURE__ */ qe("<span> </span> <br>", 1), fc = /* @__PURE__ */ qe('<div class="animation-button-container svelte-hac7qn"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="page-container svelte-hac7qn"><div class="common-header svelte-hac7qn"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-hac7qn"><h3 class="svelte-hac7qn"> </h3> <!></div> <div class="tooltip svelte-hac7qn"> <br> these ballots have already been eliminated.</div> <div class="visualizations-container svelte-hac7qn"><div class="pie-chart-container svelte-hac7qn"><!></div></div></div>', 1);
const cc = {
  hash: "svelte-hac7qn",
  code: `.page-container.svelte-hac7qn {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-hac7qn {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-hac7qn {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:1.3rem;left:50%;transform:translate(-50%);font-weight:bold;opacity:0;}.tooltip.svelte-hac7qn h3:where(.svelte-hac7qn) {text-align:center;}.animation-button-container.svelte-hac7qn {display:flex;justify-content:center;gap:10px;margin-bottom:1rem;}.pie-chart-container.svelte-hac7qn {
  /* width: 65%; */width:90%;min-width:800px; /* Larger minimum size */flex-grow:0; /* Don't grow beyond specified width */margin:0 auto;margin-right:40px; /* Add extra space on right */}.visualizations-container.svelte-hac7qn {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:80px;}


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
@media (max-width: 1300px) {.visualizations-container.svelte-hac7qn {flex-direction:column;align-items:center;}
}`
};
function hc(t, e) {
  Gr(e, !0), _s(t, cc);
  const n = 0.85;
  let r = Qt(e, "electionSummary", 7), i = Qt(e, "currentRound", 7), s = Qt(e, "requestRoundChange", 7, (x) => {
  }), a = Jt(null), l = Jt(null), o = Jt(""), f = Jt(xt([])), u = Jt(""), h = Jt(""), c = Jt(0), d = /* @__PURE__ */ Jn(() => p(r()));
  function p(x) {
    if (typeof x == "string")
      try {
        x = JSON.parse(x);
      } catch (q) {
        return console.error("Failed to parse JSON string:", q), {};
      }
    return console.log("RCtabSummary object status: ", ic(x)), x || {};
  }
  function m(x) {
    s() ? (console.log("onRoundChange in PieChart: passing on request for round ", x), s()(x)) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function b() {
    switch (g(u)) {
      case "enter":
        ((x) => (J(f, xt(x[0])), J(o, xt(x[1]))))($(g(h), i())), g(a) && (g(a).style.top = String(g(c) || 20) + "px", g(a).style.opacity = String(n));
        break;
      case "leave":
        g(a) && (g(a).style.opacity = "0"), J(f, xt([])), J(o, "");
        break;
      case "show-exhausted":
        g(l) && (g(l).style.top = String(g(c) || 20) + "px", g(l).style.opacity = String(n));
        break;
      case "hide-exhausted":
        g(l) && (g(l).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", g(u));
        break;
    }
  }
  Br(() => b());
  function w(x, q) {
    return x == 1 ? q ? "vote was" : "vote will be" : q ? "votes were" : "votes will be";
  }
  function $(x, q) {
    const B = [], nt = x === "exhausted" ? kr : x;
    let rt;
    x == "exhausted" ? rt = Gn(g(d), 1) : rt = g(d).results[0].tally[x], B.push(`${nt} started with ${rt} votes.`);
    for (let W = 1; W <= q; W++) {
      W === q && (x == "exhausted" ? rt = Gn(g(d), q) : rt = g(d).results[q - 1].tally[x], B.push(`${nt} has ${rt} votes at round ${q}.`));
      const ut = g(d).results[W - 1].tallyResults;
      for (let $t = 0; $t < ut.length; $t++) {
        const Ve = ut[$t].transfers, Ee = ut[$t].eliminated, an = ut[$t].elected;
        if (Ee)
          Ee === x && B.push(`${nt} will be eliminated on round ${W}.`);
        else if (x === an && (B.push(`${nt} was elected on round ${W}.`), Ve))
          for (let [_e, on] of Object.entries(Ve))
            B.push(`${on} ${w(Number(on), W < q)} transferred to ${_e} on round ${W}.`);
        const ln = Ee || an;
        if (ln) {
          const _e = Number(Ve[x]);
          _e && B.push(`${_e} ${w(_e, W < q)} transferred from ${ln} on round ${W}.`);
        }
      }
    }
    return [B, nt];
  }
  function C() {
    let x = 0;
    for (let q = 1; q <= g(d).results.length; q++) {
      const B = g(d).results[q - 1].tallyResults;
      for (let nt = 0; nt < B.length; nt++)
        B[nt].elected && x++;
    }
    return x;
  }
  let A;
  function O() {
    A && A.animateOnePhaseFn && A.animateOnePhaseFn();
  }
  function P() {
    A && A.runFullAnimationFn && A.runFullAnimationFn();
  }
  var K = fc(), j = Re(K), et = yt(j);
  et.__click = P;
  var z = Lt(et, 2);
  z.__click = O, mt(j);
  var I = Lt(j, 2), V = yt(I), N = yt(V), L = yt(N);
  mt(N);
  var _t = Lt(N, 2), Gt = yt(_t);
  {
    var st = (x) => {
      var q = ac(), B = Lt(Re(q));
      cr(B, 17, () => Kn(g(d), i()), fr, (nt, rt) => {
        var W = sc(), ut = Re(W), $t = yt(ut, !0);
        mt(ut), fn(), cn(() => {
          mi(ut, "color", de[g(rt)]), Ye($t, g(rt));
        }), ce(nt, W);
      }), ce(x, q);
    };
    _i(Gt, (x) => {
      Kn(g(d), i()).length > 0 && x(st);
    });
  }
  var Nt = Lt(Gt, 2);
  {
    var Kt = (x) => {
      var q = oc(), B = Lt(Re(q));
      cr(B, 17, () => jn(g(d), i()), fr, (nt, rt) => {
        var W = lc(), ut = Re(W), $t = yt(ut, !0);
        mt(ut), fn(), cn(() => {
          mi(ut, "color", de[g(rt)]), Ye($t, g(rt));
        }), ce(nt, W);
      }), ce(x, q);
    };
    _i(Nt, (x) => {
      jn(g(d), i()).length > 0 && x(Kt);
    });
  }
  mt(_t), mt(V);
  var Tt = Lt(V, 2), Dt = yt(Tt), ue = yt(Dt, !0);
  mt(Dt);
  var pe = Lt(Dt, 2);
  cr(pe, 17, () => g(f), fr, (x, q) => {
    var B = uc(), nt = Re(B), rt = yt(nt, !0);
    mt(nt), fn(2), cn(() => Ye(rt, g(q))), ce(x, B);
  }), mt(Tt), wn(Tt, (x) => J(a, x), () => g(a));
  var Ct = Lt(Tt, 2), gt = yt(Ct);
  gt.nodeValue = `"${kr}" means all the candidates ranked on `, fn(2), mt(Ct), wn(Ct, (x) => J(l, x), () => g(l));
  var fe = Lt(Ct, 2), It = yt(fe), Ft = yt(It);
  return wn(
    Gs(Ft, {
      get jsonData() {
        return g(d);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: m,
      get mouseEventType() {
        return g(u);
      },
      set mouseEventType(x) {
        J(u, xt(x));
      },
      get mouseData() {
        return g(h);
      },
      set mouseData(x) {
        J(h, xt(x));
      },
      get mouseY() {
        return g(c);
      },
      set mouseY(x) {
        J(c, xt(x));
      }
    }),
    (x) => A = x,
    () => A
  ), mt(It), mt(fe), mt(I), cn(
    (x) => {
      Ye(L, `${g(d).config.contest ?? ""}, ${x ?? ""} to be elected, Round ${i() ?? ""}.`), Ye(ue, g(o));
    },
    [C]
  ), ce(t, K), Kr({
    get electionSummary() {
      return r();
    },
    set electionSummary(x) {
      r(x), Ht();
    },
    get currentRound() {
      return i();
    },
    set currentRound(x) {
      i(x), Ht();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(x = (q) => {
    }) {
      s(x), Ht();
    }
  });
}
al(["click"]);
customElements.define("pie-chart", ms(
  hc,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {}
  },
  [],
  [],
  !0
));
