var fa = Object.defineProperty;
var ui = (t) => {
  throw TypeError(t);
};
var ca = (t, e, n) => e in t ? fa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var St = (t, e, n) => ca(t, typeof e != "symbol" ? e + "" : e, n), fi = (t, e, n) => e.has(t) || ui("Cannot " + n);
var ct = (t, e, n) => (fi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), fr = (t, e, n) => e.has(t) ? ui("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), cr = (t, e, n, r) => (fi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ha = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ha);
const da = 1, va = 2, pa = 16, _a = 1, ga = 4, ma = 8, ya = 16, wa = 2, qi = "[", Pr = "[!", Or = "]", Ke = {}, ht = Symbol(), ci = !1, Ot = 2, Li = 4, Dr = 8, Ir = 16, le = 32, Ie = 64, Tn = 128, Ct = 256, Sn = 512, _t = 1024, oe = 2048, Fe = 4096, re = 8192, Zn = 16384, xa = 32768, Fr = 65536, ba = 1 << 19, Vi = 1 << 20, je = Symbol("$state"), Hi = Symbol("legacy props");
var qr = Array.isArray, $a = Array.prototype.indexOf, Lr = Array.from, kn = Object.keys, Mn = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Aa = Object.prototype, Ea = Array.prototype, Ra = Object.getPrototypeOf;
function Yi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let Je = [], mr = [];
function Bi() {
  var t = Je;
  Je = [], Yi(t);
}
function Ca() {
  var t = mr;
  mr = [], Yi(t);
}
function zi(t) {
  Je.length === 0 && queueMicrotask(Bi), Je.push(t);
}
function hi() {
  Je.length > 0 && Bi(), mr.length > 0 && Ca();
}
function Xi(t) {
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
function Pa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Oa(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let La = !1;
function Et(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Xi,
    rv: 0,
    wv: 0
  };
  return n;
}
function Zt(t) {
  return /* @__PURE__ */ Va(Et(t));
}
// @__NO_SIDE_EFFECTS__
function Hr(t, e = !1) {
  const n = Et(t);
  return e || (n.equals = Vr), n;
}
// @__NO_SIDE_EFFECTS__
function Va(t) {
  return X !== null && !Mt && X.f & Ot && (zt === null ? za([t]) : zt.push(t)), t;
}
function j(t, e) {
  return X !== null && !Mt && cs() && X.f & (Ot | Ir) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (zt === null || !zt.includes(t)) && qa(), Ui(t, e);
}
function Ui(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = es(), Gi(t, oe), U !== null && U.f & _t && !(U.f & (le | Ie)) && (te === null ? Xa([t]) : te.push(t))), e;
}
function Gi(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & oe || (ie(s, e), a & (_t | Ct) && (a & Ot ? Gi(
        /** @type {Derived} */
        s,
        Fe
      ) : nr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Qn(t) {
  var e = Ot | oe, n = X !== null && X.f & Ot ? (
    /** @type {Derived} */
    X
  ) : null;
  return U === null || n !== null && n.f & Ct ? e |= Ct : U.f |= Vi, {
    ctx: pt,
    deps: null,
    effects: null,
    equals: Xi,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? U
  };
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  const e = /* @__PURE__ */ Qn(t);
  return e.equals = Vr, e;
}
function Ki(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      se(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ya(t) {
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
function Ba(t) {
  var e, n = U;
  Pe(Ya(t));
  try {
    Ki(t), e = rs(t);
  } finally {
    Pe(n);
  }
  return e;
}
function ji(t) {
  var e = Ba(t), n = (de || t.f & Ct) && t.deps !== null ? Fe : _t;
  ie(t, n), t.equals(e) || (t.v = e, t.wv = es());
}
function Yr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Z = !1;
function ne(t) {
  Z = t;
}
let z;
function Ut(t) {
  if (t === null)
    throw Yr(), Ke;
  return z = t;
}
function tr() {
  return Ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ue(z)
  );
}
function gt(t) {
  if (Z) {
    if (/* @__PURE__ */ ue(z) !== null)
      throw Yr(), Ke;
    z = t;
  }
}
function hn(t = 1) {
  if (Z) {
    for (var e = t, n = z; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ue(n);
    z = n;
  }
}
function yr() {
  for (var t = 0, e = z; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Or) {
        if (t === 0) return e;
        t -= 1;
      } else (n === qi || n === Pr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ue(e)
    );
    e.remove(), e = r;
  }
}
function wt(t, e = null, n) {
  if (typeof t != "object" || t === null || je in t)
    return t;
  const r = Ra(t);
  if (r !== Aa && r !== Ea)
    return t;
  var i = /* @__PURE__ */ new Map(), s = qr(t), a = Et(0);
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Da();
        var h = i.get(f);
        return h === void 0 ? (h = Et(u.value), i.set(f, h)) : j(h, wt(u.value, l)), !0;
      },
      deleteProperty(o, f) {
        var u = i.get(f);
        if (u === void 0)
          f in o && i.set(f, Et(ht));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && j(h, c);
          }
          j(u, ht), di(a);
        }
        return !0;
      },
      get(o, f, u) {
        var p;
        if (f === je)
          return t;
        var h = i.get(f), c = f in o;
        if (h === void 0 && (!c || (p = xe(o, f)) != null && p.writable) && (h = Et(wt(c ? o[f] : ht, l)), i.set(f, h)), h !== void 0) {
          var d = g(h);
          return d === ht ? void 0 : d;
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
          if (c !== void 0 && d !== ht)
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
        if (f === je)
          return !0;
        var u = i.get(f), h = u !== void 0 && u.v !== ht || Reflect.has(o, f);
        if (u !== void 0 || U !== null && (!h || (d = xe(o, f)) != null && d.writable)) {
          u === void 0 && (u = Et(h ? wt(o[f], l) : ht), i.set(f, u));
          var c = g(u);
          if (c === ht)
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
            var w = i.get(p + "");
            w !== void 0 ? j(w, ht) : p in o && (w = Et(ht), i.set(p + "", w));
          }
        c === void 0 ? (!d || (C = xe(o, f)) != null && C.writable) && (c = Et(void 0), j(c, wt(u, l)), i.set(f, c)) : (d = c.v !== ht, j(c, wt(u, l)));
        var $ = Reflect.getOwnPropertyDescriptor(o, f);
        if ($ != null && $.set && $.set.call(h, u), !d) {
          if (s && typeof f == "string") {
            var m = (
              /** @type {Source<number>} */
              i.get("length")
            ), A = Number(f);
            Number.isInteger(A) && A >= m.v && j(m, A + 1);
          }
          di(a);
        }
        return !0;
      },
      ownKeys(o) {
        g(a);
        var f = Reflect.ownKeys(o).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== ht;
        });
        for (var [u, h] of i)
          h.v !== ht && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Ia();
      }
    }
  );
}
function di(t, e = 1) {
  j(t, t.v + e);
}
var vi, Wi, Ji, Zi;
function wr() {
  if (vi === void 0) {
    vi = window, Wi = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Ji = xe(e, "firstChild").get, Zi = xe(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Pn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function $e(t) {
  return Ji.call(t);
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  return Zi.call(t);
}
function mt(t, e) {
  if (!Z)
    return /* @__PURE__ */ $e(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ $e(z)
  );
  if (n === null)
    n = z.appendChild(Pn());
  else if (e && n.nodeType !== 3) {
    var r = Pn();
    return n == null || n.before(r), Ut(r), r;
  }
  return Ut(n), n;
}
function Ce(t, e) {
  if (!Z) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ $e(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ue(n) : n;
  }
  return z;
}
function Ht(t, e = 1, n = !1) {
  let r = Z ? z : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ue(r);
  if (!Z)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = Pn();
    return r === null ? i == null || i.after(a) : r.before(a), Ut(a), a;
  }
  return Ut(r), /** @type {TemplateNode} */
  r;
}
function Qi(t) {
  t.textContent = "";
}
let wn = !1, On = !1, Dn = null, xn = !1, Br = !1;
function pi(t) {
  Br = t;
}
let We = [];
let X = null, Mt = !1;
function Me(t) {
  X = t;
}
let U = null;
function Pe(t) {
  U = t;
}
let zt = null;
function za(t) {
  zt = t;
}
let ot = null, yt = 0, te = null;
function Xa(t) {
  te = t;
}
let ts = 1, In = 0, de = !1;
function es() {
  return ++ts;
}
function sn(t) {
  var h;
  var e = t.f;
  if (e & oe)
    return !0;
  if (e & Fe) {
    var n = t.deps, r = (e & Ct) !== 0;
    if (n !== null) {
      var i, s, a = (e & Sn) !== 0, l = r && U !== null && !de, o = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < o; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= Sn), l && u !== null && !(u.f & Ct) && (f.f ^= Ct);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], sn(
          /** @type {Derived} */
          s
        ) && ji(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || U !== null && !de) && ie(t, _t);
  }
  return !1;
}
function Ua(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & Tn)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Tn;
      }
    n = n.parent;
  }
  throw wn = !1, t;
}
function Ga(t) {
  return (t.f & Zn) === 0 && (t.parent === null || (t.parent.f & Tn) === 0);
}
function er(t, e, n, r) {
  if (wn) {
    if (n === null && (wn = !1), Ga(e))
      throw t;
    return;
  }
  n !== null && (wn = !0);
  {
    Ua(t, e);
    return;
  }
}
function ns(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Ot ? ns(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ie(s, oe) : s.f & _t && ie(s, Fe), nr(
        /** @type {Effect} */
        s
      ));
    }
}
function rs(t) {
  var d;
  var e = ot, n = yt, r = te, i = X, s = de, a = zt, l = pt, o = Mt, f = t.f;
  ot = /** @type {null | Value[]} */
  null, yt = 0, te = null, de = (f & Ct) !== 0 && (Mt || !xn || X === null), X = f & (le | Ie) ? null : t, zt = null, _i(t.ctx), Mt = !1, In++;
  try {
    var u = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (ot !== null) {
      var c;
      if (Fn(t, yt), h !== null && yt > 0)
        for (h.length = yt + ot.length, c = 0; c < ot.length; c++)
          h[yt + c] = ot[c];
      else
        t.deps = h = ot;
      if (!de)
        for (c = yt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && yt < h.length && (Fn(t, yt), h.length = yt);
    if (cs() && te !== null && !Mt && h !== null && !(t.f & (Ot | Fe | oe)))
      for (c = 0; c < /** @type {Source[]} */
      te.length; c++)
        ns(
          te[c],
          /** @type {Effect} */
          t
        );
    return i !== null && In++, u;
  } finally {
    ot = e, yt = n, te = r, X = i, de = s, zt = a, _i(l), Mt = o;
  }
}
function Ka(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = $a.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Ot && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !ot.includes(e)) && (ie(e, Fe), e.f & (Ct | Sn) || (e.f ^= Sn), Ki(
    /** @type {Derived} **/
    e
  ), Fn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Fn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ka(t, n[r]);
}
function zr(t) {
  var e = t.f;
  if (!(e & Zn)) {
    ie(t, _t);
    var n = U, r = pt, i = xn;
    U = t, xn = !0;
    try {
      e & Ir ? rl(t) : ls(t), as(t);
      var s = rs(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = ts;
      var a = t.deps, l;
      ci && La && t.f & oe;
    } catch (o) {
      er(o, t, n, r || t.ctx);
    } finally {
      xn = i, U = n;
    }
  }
}
function ja() {
  try {
    Ma();
  } catch (t) {
    if (Dn !== null)
      er(t, Dn, null);
    else
      throw t;
  }
}
function is() {
  try {
    for (var t = 0; We.length > 0; ) {
      t++ > 1e3 && ja();
      var e = We, n = e.length;
      We = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & _t || (i.f ^= _t);
        var s = Ja(i);
        Wa(s);
      }
    }
  } finally {
    On = !1, Dn = null;
  }
}
function Wa(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Zn | re)))
        try {
          sn(r) && (zr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? os(r) : r.fn = null));
        } catch (i) {
          er(i, r, null, r.ctx);
        }
    }
}
function nr(t) {
  On || (On = !0, queueMicrotask(is));
  for (var e = Dn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (Ie | le)) {
      if (!(n & _t)) return;
      e.f ^= _t;
    }
  }
  We.push(e);
}
function Ja(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & le) !== 0, s = i && (r & _t) !== 0;
    if (!s && !(r & re)) {
      if (r & Li)
        e.push(n);
      else if (i)
        n.f ^= _t;
      else {
        var a = X;
        try {
          X = n, sn(n) && zr(n);
        } catch (f) {
          er(f, n, null, n.ctx);
        } finally {
          X = a;
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
function Rt(t) {
  var e;
  for (hi(); We.length > 0; )
    On = !0, is(), hi();
  return (
    /** @type {T} */
    e
  );
}
function g(t) {
  var e = t.f, n = (e & Ot) !== 0;
  if (X !== null && !Mt) {
    zt !== null && zt.includes(t) && Fa();
    var r = X.deps;
    t.rv < In && (t.rv = In, ot === null && r !== null && r[yt] === t ? yt++ : ot === null ? ot = [t] : (!de || !ot.includes(t)) && ot.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Ct) && (i.f ^= Ct);
  }
  return n && (i = /** @type {Derived} */
  t, sn(i) && ji(i)), t.v;
}
function qn(t) {
  var e = Mt;
  try {
    return Mt = !0, t();
  } finally {
    Mt = e;
  }
}
const Za = -7169;
function ie(t, e) {
  t.f = t.f & Za | e;
}
function Qa(t) {
  U === null && X === null && ka(), X !== null && X.f & Ct && U === null && Sa(), Br && Ta();
}
function tl(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function qe(t, e, n, r = !0) {
  var i = (t & Ie) !== 0, s = U, a = {
    ctx: pt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | oe,
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
      throw se(a), f;
    }
  else e !== null && nr(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Vi | Tn)) === 0;
  if (!l && !i && r && (s !== null && tl(a, s), X !== null && X.f & Ot)) {
    var o = (
      /** @type {Derived} */
      X
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return a;
}
function Xr(t) {
  Qa();
  var e = U !== null && (U.f & le) !== 0 && pt !== null && !pt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      pt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: U,
      reaction: X
    });
  } else {
    var r = Ur(t);
    return r;
  }
}
function el(t) {
  const e = qe(Ie, t, !0);
  return () => {
    se(e);
  };
}
function nl(t) {
  const e = qe(Ie, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ln(e, () => {
      se(e), r(void 0);
    }) : (se(e), r(void 0));
  });
}
function Ur(t) {
  return qe(Li, t, !1);
}
function ss(t) {
  return qe(Dr, t, !0);
}
function dn(t, e = [], n = Qn) {
  const r = e.map(n);
  return Gr(() => t(...r.map(g)));
}
function Gr(t, e = 0) {
  return qe(Dr | Ir | e, t, !0);
}
function Ze(t, e = !0) {
  return qe(Dr | le, t, !0, e);
}
function as(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Br, r = X;
    pi(!0), Me(null);
    try {
      e.call(null);
    } finally {
      pi(n), Me(r);
    }
  }
}
function ls(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    se(n, e), n = r;
  }
}
function rl(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & le || se(e), e = n;
  }
}
function se(t, e = !0) {
  var n = !1;
  if ((e || t.f & ba) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ue(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  ls(t, e && !n), Fn(t, 0), ie(t, Zn);
  var a = t.transitions;
  if (a !== null)
    for (const o of a)
      o.stop();
  as(t);
  var l = t.parent;
  l !== null && l.first !== null && os(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function os(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ln(t, e) {
  var n = [];
  Kr(t, n, !0), us(n, () => {
    se(t), e && e();
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
function Kr(t, e, n) {
  if (!(t.f & re)) {
    if (t.f ^= re, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Fr) !== 0 || (r.f & le) !== 0;
      Kr(r, e, s ? n : !1), r = i;
    }
  }
}
function Vn(t) {
  fs(t, !0);
}
function fs(t, e) {
  if (t.f & re) {
    t.f ^= re, t.f & _t || (t.f ^= _t), sn(t) && (ie(t, oe), nr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Fr) !== 0 || (n.f & le) !== 0;
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
function _i(t) {
  pt = t;
}
function jr(t, e = !1, n) {
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
      var n = U, r = X;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Pe(s.effect), Me(s.reaction), Ur(s.fn);
        }
      } finally {
        Pe(n), Me(r);
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
const hs = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Set();
function ll(t) {
  for (var e = 0; e < t.length; e++)
    hs.add(t[e]);
  for (var n of xr)
    n(t);
}
function vn(t) {
  var A;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], s = (
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
    Mn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = X, h = U;
    Me(null), Pe(null);
    try {
      for (var c, d = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s["__" + r];
          if (w !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (qr(w)) {
              var [$, ...m] = w;
              $.apply(s, [t, ...m]);
            } else
              w.call(s, t);
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
      t.__root = e, delete t.currentTarget, Me(u), Pe(h);
    }
  }
}
function ds(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Qe(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Le(t, e) {
  var n = (e & wa) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return Qe(z, null), z;
    r === void 0 && (r = ds(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || Wi ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Qe(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ol(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return Qe(z, null), z;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ds(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ $e(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ $e(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Qe(o, o), o;
  };
}
function ce(t, e) {
  if (Z) {
    U.nodes_end = z, tr();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Be(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function vs(t, e) {
  return ps(t, e);
}
function ul(t, e) {
  wr(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = z;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== qi); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ue(s);
    if (!s)
      throw Ke;
    ne(!0), Ut(
      /** @type {Comment} */
      s
    ), tr();
    const a = ps(t, { ...e, anchor: s });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== Or)
      throw Yr(), Ke;
    return ne(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ke)
      return e.recover === !1 && Pa(), wr(), Qi(n), ne(!1), vs(t, e);
    throw a;
  } finally {
    ne(r), Ut(i);
  }
}
const Ne = /* @__PURE__ */ new Map();
function ps(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  wr();
  var l = /* @__PURE__ */ new Set(), o = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = al(d);
        e.addEventListener(d, vn, { passive: p });
        var w = Ne.get(d);
        w === void 0 ? (document.addEventListener(d, vn, { passive: p }), Ne.set(d, 1)) : Ne.set(d, w + 1);
      }
    }
  };
  o(Lr(hs)), xr.add(o);
  var f = void 0, u = nl(() => {
    var h = n ?? e.appendChild(Pn());
    return Ze(() => {
      if (s) {
        jr({});
        var c = (
          /** @type {ComponentContext} */
          pt
        );
        c.c = s;
      }
      i && (r.$$events = i), Z && Qe(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, Z && (U.nodes_end = z), s && Wr();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, vn);
        var d = (
          /** @type {number} */
          Ne.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, vn), Ne.delete(c)) : Ne.set(c, d);
      }
      xr.delete(o), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return br.set(f, u), f;
}
let br = /* @__PURE__ */ new WeakMap();
function fl(t, e) {
  const n = br.get(t);
  return n ? (br.delete(t), n(e)) : Promise.resolve();
}
function gi(t, e, n = !1) {
  Z && tr();
  var r = t, i = null, s = null, a = ht, l = n ? Fr : 0, o = !1;
  const f = (h, c = !0) => {
    o = !0, u(c, h);
  }, u = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (Z) {
      const p = (
        /** @type {Comment} */
        r.data === Pr
      );
      !!a === p && (r = yr(), Ut(r), ne(!1), d = !0);
    }
    a ? (i ? Vn(i) : c && (i = Ze(() => c(r))), s && Ln(s, () => {
      s = null;
    })) : (s ? Vn(s) : c && (s = Ze(() => c(r))), i && Ln(i, () => {
      i = null;
    })), d && ne(!0);
  };
  Gr(() => {
    o = !1, e(f), o || u(null, null);
  }, l), Z && (r = z);
}
function hr(t, e) {
  return e;
}
function cl(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    Kr(e[a].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qi(o), o.append(
      /** @type {Element} */
      n
    ), r.clear(), he(t, e[0].prev, e[s - 1].next);
  }
  us(i, () => {
    for (var f = 0; f < s; f++) {
      var u = e[f];
      l || (r.delete(u.k), he(t, u.prev, u.next)), se(u.e, !l);
    }
  });
}
function dr(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  Z && tr();
  var o = null, f = !1, u = /* @__PURE__ */ Ha(() => {
    var h = n();
    return qr(h) ? h : h == null ? [] : Lr(h);
  });
  Gr(() => {
    var h = g(u), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (Z) {
      var p = (
        /** @type {Comment} */
        a.data === Pr
      );
      p !== (c === 0) && (a = yr(), Ut(a), ne(!1), d = !0);
    }
    if (Z) {
      for (var w = null, $, m = 0; m < c; m++) {
        if (z.nodeType === 8 && /** @type {Comment} */
        z.data === Or) {
          a = /** @type {Comment} */
          z, d = !0, ne(!1);
          break;
        }
        var A = h[m], C = r(A, m);
        $ = _s(
          z,
          l,
          w,
          null,
          A,
          C,
          m,
          i,
          e,
          n
        ), l.items.set(C, $), w = $;
      }
      c > 0 && Ut(yr());
    }
    Z || hl(h, l, a, i, e, r, n), s !== null && (c === 0 ? o ? Vn(o) : o = Ze(() => s(a)) : o !== null && Ln(o, () => {
      o = null;
    })), d && ne(!0), g(u);
  }), Z && (a = z);
}
function hl(t, e, n, r, i, s, a) {
  var l = t.length, o = e.items, f = e.first, u = f, h, c = null, d = [], p = [], w, $, m, A;
  for (A = 0; A < l; A += 1) {
    if (w = t[A], $ = s(w, A), m = o.get($), m === void 0) {
      var C = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : n;
      c = _s(
        C,
        e,
        c,
        c === null ? e.first : c.next,
        w,
        $,
        A,
        r,
        i,
        a
      ), o.set($, c), d = [], p = [], u = c.next;
      continue;
    }
    if (dl(m, w, A), m.e.f & re && Vn(m.e), m !== u) {
      if (h !== void 0 && h.has(m)) {
        if (d.length < p.length) {
          var M = p[0], R;
          c = M.prev;
          var D = d[0], G = d[d.length - 1];
          for (R = 0; R < d.length; R += 1)
            mi(d[R], M, n);
          for (R = 0; R < p.length; R += 1)
            h.delete(p[R]);
          he(e, D.prev, G.next), he(e, c, D), he(e, G, M), u = M, c = G, A -= 1, d = [], p = [];
        } else
          h.delete(m), mi(m, u, n), he(e, m.prev, m.next), he(e, m, c === null ? e.first : c.next), he(e, c, m), c = m;
        continue;
      }
      for (d = [], p = []; u !== null && u.k !== $; )
        u.e.f & re || (h ?? (h = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      m = u;
    }
    d.push(m), c = m, u = m.next;
  }
  if (u !== null || h !== void 0) {
    for (var W = h === void 0 ? [] : Lr(h); u !== null; )
      u.e.f & re || W.push(u), u = u.next;
    var et = W.length;
    if (et > 0) {
      var Q = null;
      cl(e, W, Q, o);
    }
  }
  U.first = e.first && e.first.e, U.last = c && c.e;
}
function dl(t, e, n, r) {
  Ui(t.v, e), t.i = n;
}
function _s(t, e, n, r, i, s, a, l, o, f) {
  var u = (o & da) !== 0, h = (o & pa) === 0, c = u ? h ? /* @__PURE__ */ Hr(i) : Et(i) : i, d = o & va ? Et(a) : a, p = {
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
    return p.e = Ze(() => l(t, c, d, f), Z), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
      /* @__PURE__ */ ue(s)
    );
    i.before(s), s = a;
  }
}
function he(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function gs(t, e) {
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
  return t === e || (t == null ? void 0 : t[je]) === e;
}
function bn(t = {}, e, n, r) {
  return Ur(() => {
    var i, s;
    return ss(() => {
      i = s, s = [], qn(() => {
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
  pt === null && il(), Xr(() => {
    const e = qn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let pn = !1;
function pl(t) {
  var e = pn;
  try {
    return pn = !1, [t(), pn];
  } finally {
    pn = e;
  }
}
function kt(t, e, n, r) {
  var R;
  var i = (n & _a) !== 0, s = !0, a = (n & ma) !== 0, l = (n & ya) !== 0, o = !1, f;
  a ? [f, o] = pl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var u = je in t || Hi in t, h = a && (((R = xe(t, e)) == null ? void 0 : R.set) ?? (u && e in t && ((D) => t[e] = D))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, w = () => (p = !0, d && (d = !1, l ? c = qn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Oa(), f = w(), h && h(f));
  var $;
  if ($ = () => {
    var D = (
      /** @type {V} */
      t[e]
    );
    return D === void 0 ? w() : (d = !0, p = !1, D);
  }, !(n & ga))
    return $;
  if (h) {
    var m = t.$$legacy;
    return function(D, G) {
      return arguments.length > 0 ? ((!G || m || o) && h(G ? $() : D), D) : $();
    };
  }
  var A = !1, C = /* @__PURE__ */ Hr(f), M = /* @__PURE__ */ Qn(() => {
    var D = $(), G = g(C);
    return A ? (A = !1, G) : C.v = D;
  });
  return i || (M.equals = Vr), function(D, G) {
    if (arguments.length > 0) {
      const W = G ? g(M) : a ? wt(D) : D;
      return M.equals(W) || (A = !0, j(C, W), p && c !== void 0 && (c = W), qn(() => g(M))), D;
    }
    return g(M);
  };
}
function _l(t) {
  return new gl(t);
}
var ee, At;
class gl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    fr(this, ee);
    /** @type {Record<string, any>} */
    fr(this, At);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ Hr(l);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return g(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Hi ? !0 : (g(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return j(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    cr(this, At, (e.hydrate ? ul : vs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Rt(), cr(this, ee, i.$$events);
    for (const a of Object.keys(ct(this, At)))
      a === "$set" || a === "$destroy" || a === "$on" || Mn(this, a, {
        get() {
          return ct(this, At)[a];
        },
        /** @param {any} value */
        set(l) {
          ct(this, At)[a] = l;
        },
        enumerable: !0
      });
    ct(this, At).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ct(this, At).$destroy = () => {
      fl(ct(this, At));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ct(this, At).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    ct(this, ee)[e] = ct(this, ee)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return ct(this, ee)[e].push(r), () => {
      ct(this, ee)[e] = ct(this, ee)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    ct(this, At).$destroy();
  }
}
ee = new WeakMap(), At = new WeakMap();
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
    St(this, "$$ctor");
    /** Slots */
    St(this, "$$s");
    /** @type {any} The Svelte component instance */
    St(this, "$$c");
    /** Whether or not the custom element is connected */
    St(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    St(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    St(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    St(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    St(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    St(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    St(this, "$$me");
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
      const r = {}, i = ml(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = $n(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = _l({
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
          for (const a of kn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = $n(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = $n(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return kn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function $n(t, e, n, r) {
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
      return kn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return kn(e).forEach((l) => {
    Mn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var h;
        o = $n(l, o, e), this.$$d[l] = o;
        var f = this.$$c;
        if (f) {
          var u = (h = xe(f, l)) == null ? void 0 : h.get;
          u ? f[l] = o : f.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    Mn(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
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
  return new An(n);
}
function An(t) {
  this._ = t;
}
function wl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
An.prototype = ws.prototype = {
  constructor: An,
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
    return new An(t);
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
var $r = "http://www.w3.org/1999/xhtml";
const bi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $r,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function rr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), bi.hasOwnProperty(e) ? { space: bi[e], local: t } : t;
}
function bl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === $r && e.documentElement.namespaceURI === $r ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function $l(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function xs(t) {
  var e = rr(t);
  return (e.local ? $l : bl)(e);
}
function Al() {
}
function Jr(t) {
  return t == null ? Al : function() {
    return this.querySelector(t);
  };
}
function El(t) {
  typeof t != "function" && (t = Jr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = new Array(a), o, f, u = 0; u < a; ++u)
      (o = s[u]) && (f = t.call(o, o.__data__, u, s)) && ("__data__" in o && (f.__data__ = o.__data__), l[u] = f);
  return new xt(r, this._parents);
}
function Rl(t) {
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
    return Rl(t.apply(this, arguments));
  };
}
function Tl(t) {
  typeof t == "function" ? t = Nl(t) : t = bs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
  return new xt(r, i);
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
function Pl(t) {
  return this.select(t == null ? Ml : kl(typeof t == "function" ? t : As(t)));
}
var Ol = Array.prototype.filter;
function Dl() {
  return Array.from(this.children);
}
function Il(t) {
  return function() {
    return Ol.call(this.children, t);
  };
}
function Fl(t) {
  return this.selectAll(t == null ? Dl : Il(typeof t == "function" ? t : As(t)));
}
function ql(t) {
  typeof t != "function" && (t = $s(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new xt(r, this._parents);
}
function Es(t) {
  return new Array(t.length);
}
function Ll() {
  return new xt(this._enter || this._groups.map(Es), this._parents);
}
function Hn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Hn.prototype = {
  constructor: Hn,
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
function Hl(t, e, n, r, i, s) {
  for (var a = 0, l, o = e.length, f = s.length; a < f; ++a)
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new Hn(t, s[a]);
  for (; a < o; ++a)
    (l = e[a]) && (i[a] = l);
}
function Yl(t, e, n, r, i, s, a) {
  var l, o, f = /* @__PURE__ */ new Map(), u = e.length, h = s.length, c = new Array(u), d;
  for (l = 0; l < u; ++l)
    (o = e[l]) && (c[l] = d = a.call(o, o.__data__, l, e) + "", f.has(d) ? i[l] = o : f.set(d, o));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (o = f.get(d)) ? (r[l] = o, o.__data__ = s[l], f.delete(d)) : n[l] = new Hn(t, s[l]);
  for (l = 0; l < u; ++l)
    (o = e[l]) && f.get(c[l]) === o && (i[l] = o);
}
function Bl(t) {
  return t.__data__;
}
function zl(t, e) {
  if (!arguments.length) return Array.from(this, Bl);
  var n = e ? Yl : Hl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Vl(t));
  for (var s = i.length, a = new Array(s), l = new Array(s), o = new Array(s), f = 0; f < s; ++f) {
    var u = r[f], h = i[f], c = h.length, d = Xl(t.call(u, u && u.__data__, f, r)), p = d.length, w = l[f] = new Array(p), $ = a[f] = new Array(p), m = o[f] = new Array(c);
    n(u, h, w, $, m, d, e);
    for (var A = 0, C = 0, M, R; A < p; ++A)
      if (M = w[A]) {
        for (A >= C && (C = A + 1); !(R = $[C]) && ++C < p; ) ;
        M._next = R || null;
      }
  }
  return a = new xt(a, r), a._enter = l, a._exit = o, a;
}
function Xl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ul() {
  return new xt(this._exit || this._groups.map(Es), this._parents);
}
function Gl(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Kl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), o = 0; o < a; ++o)
    for (var f = n[o], u = r[o], h = f.length, c = l[o] = new Array(h), d, p = 0; p < h; ++p)
      (d = f[p] || u[p]) && (c[p] = d);
  for (; o < i; ++o)
    l[o] = n[o];
  return new xt(l, this._parents);
}
function jl() {
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
    for (var a = n[s], l = a.length, o = i[s] = new Array(l), f, u = 0; u < l; ++u)
      (f = a[u]) && (o[u] = f);
    o.sort(e);
  }
  return new xt(i, this._parents).order();
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
  var n = rr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? so : io : typeof e == "function" ? n.local ? uo : oo : n.local ? lo : ao)(n, e));
}
function Rs(t) {
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
  return arguments.length > 1 ? this.each((e == null ? co : typeof e == "function" ? vo : ho)(t, e, n ?? "")) : Oe(this.node(), t);
}
function Oe(t, e) {
  return t.style.getPropertyValue(e) || Rs(t).getComputedStyle(t, null).getPropertyValue(e);
}
function _o(t) {
  return function() {
    delete this[t];
  };
}
function go(t, e) {
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
  return arguments.length > 1 ? this.each((e == null ? _o : typeof e == "function" ? mo : go)(t, e)) : this.node()[t];
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
function Eo(t) {
  return function() {
    this.textContent = t;
  };
}
function Ro(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Co(t) {
  return arguments.length ? this.each(t == null ? Ao : (typeof t == "function" ? Ro : Eo)(t)) : this.node().textContent;
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
function Po() {
  return this.each(Mo);
}
function Oo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Do() {
  return this.each(Oo);
}
function Io(t) {
  var e = typeof t == "function" ? t : xs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Fo() {
  return null;
}
function qo(t, e) {
  var n = typeof t == "function" ? t : xs(t), r = e == null ? Fo : typeof e == "function" ? e : Jr(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Lo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Vo() {
  return this.each(Lo);
}
function Ho() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Yo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Bo(t) {
  return this.select(t ? Yo : Ho);
}
function zo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Xo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Uo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Go(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ko(t, e, n) {
  return function() {
    var r = this.__on, i, s = Xo(e);
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
function jo(t, e, n) {
  var r = Uo(t + ""), i, s = r.length, a;
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
  for (l = e ? Ko : Go, i = 0; i < s; ++i) this.each(l(r[i], e, n));
  return this;
}
function ks(t, e, n) {
  var r = Rs(t), i = r.CustomEvent;
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
function xt(t, e) {
  this._groups = t, this._parents = e;
}
function Ve() {
  return new xt([[document.documentElement]], Ms);
}
function tu() {
  return this;
}
xt.prototype = Ve.prototype = {
  constructor: xt,
  select: El,
  selectAll: Tl,
  selectChild: Pl,
  selectChildren: Fl,
  filter: ql,
  data: zl,
  enter: Ll,
  exit: Ul,
  join: Gl,
  merge: Kl,
  selection: tu,
  order: jl,
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
  raise: Po,
  lower: Do,
  append: Io,
  insert: qo,
  remove: Vo,
  clone: Bo,
  datum: zo,
  on: jo,
  dispatch: Zo,
  [Symbol.iterator]: Qo
};
function st(t) {
  return typeof t == "string" ? new xt([[document.querySelector(t)]], [document.documentElement]) : new xt([[t]], Ms);
}
function Qr(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ps(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function an() {
}
var tn = 0.7, Yn = 1 / tn, ke = "\\s*([+-]?\\d+)\\s*", en = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eu = /^#([0-9a-f]{3,8})$/, nu = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`), ru = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), iu = new RegExp(`^rgba\\(${ke},${ke},${ke},${en}\\)$`), su = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${en}\\)$`), au = new RegExp(`^hsl\\(${en},${Xt},${Xt}\\)$`), lu = new RegExp(`^hsla\\(${en},${Xt},${Xt},${en}\\)$`), $i = {
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
Qr(an, Ae, {
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
  formatRgb: Ei,
  toString: Ei
});
function Ai() {
  return this.rgb().formatHex();
}
function ou() {
  return this.rgb().formatHex8();
}
function uu() {
  return Os(this).formatHsl();
}
function Ei() {
  return this.rgb().formatRgb();
}
function Ae(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = eu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ri(e) : n === 3 ? new vt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? _n(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? _n(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = nu.exec(t)) ? new vt(e[1], e[2], e[3], 1) : (e = ru.exec(t)) ? new vt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = iu.exec(t)) ? _n(e[1], e[2], e[3], e[4]) : (e = su.exec(t)) ? _n(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = au.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, 1) : (e = lu.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, e[4]) : $i.hasOwnProperty(t) ? Ri($i[t]) : t === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function Ri(t) {
  return new vt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function _n(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new vt(t, e, n, r);
}
function fu(t) {
  return t instanceof an || (t = Ae(t)), t ? (t = t.rgb(), new vt(t.r, t.g, t.b, t.opacity)) : new vt();
}
function Ar(t, e, n, r) {
  return arguments.length === 1 ? fu(t) : new vt(t, e, n, r ?? 1);
}
function vt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Qr(vt, Ar, Ps(an, {
  brighter(t) {
    return t = t == null ? Yn : Math.pow(Yn, t), new vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tn : Math.pow(tn, t), new vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vt(be(this.r), be(this.g), be(this.b), Bn(this.opacity));
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
  return `#${we(this.r)}${we(this.g)}${we(this.b)}`;
}
function cu() {
  return `#${we(this.r)}${we(this.g)}${we(this.b)}${we((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ni() {
  const t = Bn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${be(this.r)}, ${be(this.g)}, ${be(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Bn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function be(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function we(t) {
  return t = be(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ti(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Pt(t, e, n, r);
}
function Os(t) {
  if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);
  if (t instanceof an || (t = Ae(t)), !t) return new Pt();
  if (t instanceof Pt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, o = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= o < 0.5 ? s + i : 2 - s - i, a *= 60) : l = o > 0 && o < 1 ? 0 : a, new Pt(a, l, o, t.opacity);
}
function hu(t, e, n, r) {
  return arguments.length === 1 ? Os(t) : new Pt(t, e, n, r ?? 1);
}
function Pt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Qr(Pt, hu, Ps(an, {
  brighter(t) {
    return t = t == null ? Yn : Math.pow(Yn, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tn : Math.pow(tn, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new vt(
      vr(t >= 240 ? t - 240 : t + 120, i, r),
      vr(t, i, r),
      vr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Pt(Si(this.h), gn(this.s), gn(this.l), Bn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Bn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Si(this.h)}, ${gn(this.s) * 100}%, ${gn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Si(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function gn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function vr(t, e, n) {
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
const zn = function t(e) {
  var n = pu(e);
  function r(i, s) {
    var a = n((i = Ar(i)).r, (s = Ar(s)).r), l = n(i.g, s.g), o = n(i.b, s.b), f = Ds(i.opacity, s.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = o(u), i.opacity = f(u), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function _u(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function gu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function mu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Te(t[a], e[a]);
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
function Bt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function wu(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Te(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Er = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pr = new RegExp(Er.source, "g");
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
function Is(t, e) {
  var n = Er.lastIndex = pr.lastIndex = 0, r, i, s, a = -1, l = [], o = [];
  for (t = t + "", e = e + ""; (r = Er.exec(t)) && (i = pr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, o.push({ i: a, x: Bt(r, i) })), n = pr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? o[0] ? bu(o[0].x) : xu(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u) l[(h = o[u]).i] = h.x(f);
    return l.join("");
  });
}
function Te(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ti(e) : (n === "number" ? Bt : n === "string" ? (r = Ae(e)) ? (e = r, zn) : Is : e instanceof Ae ? zn : e instanceof Date ? yu : gu(e) ? _u : Array.isArray(e) ? mu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? wu : Bt)(t, e);
}
var ki = 180 / Math.PI, Rr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Fs(t, e, n, r, i, s) {
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
var mn;
function $u(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Rr : Fs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Au(t) {
  return t == null || (mn || (mn = document.createElementNS("http://www.w3.org/2000/svg", "g")), mn.setAttribute("transform", t), !(t = mn.transform.baseVal.consolidate())) ? Rr : (t = t.matrix, Fs(t.a, t.b, t.c, t.d, t.e, t.f));
}
function qs(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, u, h, c, d, p) {
    if (f !== h || u !== c) {
      var w = d.push("translate(", null, e, null, n);
      p.push({ i: w - 4, x: Bt(f, h) }, { i: w - 2, x: Bt(u, c) });
    } else (h || c) && d.push("translate(" + h + e + c + n);
  }
  function a(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Bt(f, u) })) : u && h.push(i(h) + "rotate(" + u + r);
  }
  function l(f, u, h, c) {
    f !== u ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Bt(f, u) }) : u && h.push(i(h) + "skewX(" + u + r);
  }
  function o(f, u, h, c, d, p) {
    if (f !== h || u !== c) {
      var w = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: w - 4, x: Bt(f, h) }, { i: w - 2, x: Bt(u, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), s(f.translateX, f.translateY, u.translateX, u.translateY, h, c), a(f.rotate, u.rotate, h, c), l(f.skewX, u.skewX, h, c), o(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(d) {
      for (var p = -1, w = c.length, $; ++p < w; ) h[($ = c[p]).i] = $.x(d);
      return h.join("");
    };
  };
}
var Eu = qs($u, "px, ", "px)", "deg)"), Ru = qs(Au, ", ", ")", ")"), De = 0, Xe = 0, ze = 0, Ls = 1e3, Xn, Ue, Un = 0, Ee = 0, ir = 0, nn = typeof performance == "object" && performance.now ? performance : Date, Vs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ei() {
  return Ee || (Vs(Cu), Ee = nn.now() + ir);
}
function Cu() {
  Ee = 0;
}
function Gn() {
  this._call = this._time = this._next = null;
}
Gn.prototype = Hs.prototype = {
  constructor: Gn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ei() : +n) + (e == null ? 0 : +e), !this._next && Ue !== this && (Ue ? Ue._next = this : Xn = this, Ue = this), this._call = t, this._time = n, Cr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cr());
  }
};
function Hs(t, e, n) {
  var r = new Gn();
  return r.restart(t, e, n), r;
}
function Nu() {
  ei(), ++De;
  for (var t = Xn, e; t; )
    (e = Ee - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --De;
}
function Mi() {
  Ee = (Un = nn.now()) + ir, De = Xe = 0;
  try {
    Nu();
  } finally {
    De = 0, Su(), Ee = 0;
  }
}
function Tu() {
  var t = nn.now(), e = t - Un;
  e > Ls && (ir -= e, Un = t);
}
function Su() {
  for (var t, e = Xn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Xn = n);
  Ue = t, Cr(r);
}
function Cr(t) {
  if (!De) {
    Xe && (Xe = clearTimeout(Xe));
    var e = t - Ee;
    e > 24 ? (t < 1 / 0 && (Xe = setTimeout(Mi, t - nn.now() - ir)), ze && (ze = clearInterval(ze))) : (ze || (Un = nn.now(), ze = setInterval(Tu, Ls)), De = 1, Vs(Mi));
  }
}
function Pi(t, e, n) {
  var r = new Gn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ku = ws("start", "end", "cancel", "interrupt"), Mu = [], Ys = 0, Oi = 1, Nr = 2, En = 3, Di = 4, Tr = 5, Rn = 6;
function sr(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Pu(t, n, {
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
    state: Ys
  });
}
function ni(t, e) {
  var n = Dt(t, e);
  if (n.state > Ys) throw new Error("too late; already scheduled");
  return n;
}
function Gt(t, e) {
  var n = Dt(t, e);
  if (n.state > En) throw new Error("too late; already running");
  return n;
}
function Dt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Pu(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Hs(s, 0, n.time);
  function s(f) {
    n.state = Oi, n.timer.restart(a, n.delay, n.time), n.delay <= f && a(f - n.delay);
  }
  function a(f) {
    var u, h, c, d;
    if (n.state !== Oi) return o();
    for (u in r)
      if (d = r[u], d.name === n.name) {
        if (d.state === En) return Pi(a);
        d.state === Di ? (d.state = Rn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[u]) : +u < e && (d.state = Rn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[u]);
      }
    if (Pi(function() {
      n.state === En && (n.state = Di, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Nr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Nr) {
      for (n.state = En, i = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = Tr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, u);
    n.state === Tr && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = Rn, n.timer.stop(), delete r[e];
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
      i = r.state > Nr && r.state < Tr, r.state = Rn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Du(t) {
  return this.each(function() {
    Ou(this, t);
  });
}
function Iu(t, e) {
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
function Fu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Gt(this, t), a = s.tween;
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
function qu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Dt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Iu : Fu)(n, t, e));
}
function ri(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Gt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Dt(i, r).value[e];
  };
}
function Bs(t, e) {
  var n;
  return (typeof e == "number" ? Bt : e instanceof Ae ? zn : (n = Ae(e)) ? (e = n, zn) : Is)(t, e);
}
function Lu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Yu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Bu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function zu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function Xu(t, e) {
  var n = rr(t), r = n === "transform" ? Ru : Bs;
  return this.attrTween(t, typeof e == "function" ? (n.local ? zu : Bu)(n, r, ri(this, "attr." + t, e)) : e == null ? (n.local ? Vu : Lu)(n) : (n.local ? Yu : Hu)(n, r, e));
}
function Uu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Gu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Ku(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Gu(t, s)), n;
  }
  return i._value = e, i;
}
function ju(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Uu(t, s)), n;
  }
  return i._value = e, i;
}
function Wu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = rr(t);
  return this.tween(n, (r.local ? Ku : ju)(r, e));
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
  return arguments.length ? this.each((typeof t == "function" ? Ju : Zu)(e, t)) : Dt(this.node(), e).delay;
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
  return arguments.length ? this.each((typeof t == "function" ? tf : ef)(e, t)) : Dt(this.node(), e).duration;
}
function rf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Gt(this, t).ease = e;
  };
}
function sf(t) {
  var e = this._id;
  return arguments.length ? this.each(rf(e, t)) : Dt(this.node(), e).ease;
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
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new ae(r, this._parents, this._name, this._id);
}
function uf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var o = e[l], f = n[l], u = o.length, h = a[l] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new ae(a, this._parents, this._name, this._id);
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
  return arguments.length < 2 ? Dt(this.node(), n).on.on(t) : this.each(cf(n, t, e));
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
    for (var l = r[a], o = l.length, f = s[a] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = l[c]) && (h = t.call(u, u.__data__, c, l)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, sr(f[c], e, n, c, f, Dt(u, n)));
  return new ae(s, this._parents, e, n);
}
function _f(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var o = r[l], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, p = Dt(u, n), w = 0, $ = c.length; w < $; ++w)
          (d = c[w]) && sr(d, e, n, w, c, p);
        s.push(c), a.push(u);
      }
  return new ae(s, a, e, n);
}
var gf = Ve.prototype.constructor;
function mf() {
  return new gf(this._groups, this._parents);
}
function yf(t, e) {
  var n, r, i;
  return function() {
    var s = Oe(this, t), a = (this.style.removeProperty(t), Oe(this, t));
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
    var a = Oe(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function xf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Oe(this, t), l = n(this), o = l + "";
    return l == null && (o = l = (this.style.removeProperty(t), Oe(this, t))), a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l));
  };
}
function bf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var o = Gt(this, t), f = o.on, u = o.value[s] == null ? l || (l = zs(e)) : void 0;
    (f !== n || i !== u) && (r = (n = f).copy()).on(a, i = u), o.on = r;
  };
}
function $f(t, e, n) {
  var r = (t += "") == "transform" ? Eu : Bs;
  return e == null ? this.styleTween(t, yf(t, r)).on("end.style." + t, zs(t)) : typeof e == "function" ? this.styleTween(t, xf(t, r, ri(this, "style." + t, e))).each(bf(this._id, t)) : this.styleTween(t, wf(t, r, e), n).on("end.style." + t, null);
}
function Af(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Ef(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Af(t, a, n)), r;
  }
  return s._value = e, s;
}
function Rf(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Ef(t, e, n ?? ""));
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
function Pf() {
  for (var t = this._name, e = this._id, n = Xs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      if (o = a[f]) {
        var u = Dt(o, e);
        sr(o, t, n, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new ae(r, this._parents, t, n);
}
function Of() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var l = { value: a }, o = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var f = Gt(this, r), u = f.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(o)), f.on = e;
    }), i === 0 && s();
  });
}
var Df = 0;
function ae(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Cn(t) {
  return Ve().transition(t);
}
function Xs() {
  return ++Df;
}
var Wt = Ve.prototype;
ae.prototype = Cn.prototype = {
  constructor: ae,
  select: pf,
  selectAll: _f,
  selectChild: Wt.selectChild,
  selectChildren: Wt.selectChildren,
  filter: of,
  merge: uf,
  selection: mf,
  transition: Pf,
  call: Wt.call,
  nodes: Wt.nodes,
  node: Wt.node,
  size: Wt.size,
  empty: Wt.empty,
  each: Wt.each,
  on: hf,
  attr: Xu,
  attrTween: Wu,
  style: $f,
  styleTween: Rf,
  text: Tf,
  textTween: Mf,
  remove: vf,
  tween: qu,
  delay: Qu,
  duration: nf,
  ease: sf,
  easeVarying: lf,
  end: Of,
  [Symbol.iterator]: Wt[Symbol.iterator]
};
function If(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ff = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: If
};
function qf(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Lf(t) {
  var e, n;
  t instanceof ae ? (e = t._id, t = t._name) : (e = Xs(), (n = Ff).time = ei(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && sr(o, t, e, f, a, n || qf(o, e));
  return new ae(r, this._parents, t, e);
}
Ve.prototype.interrupt = Du;
Ve.prototype.transition = Lf;
const Sr = Math.PI, kr = 2 * Sr, ye = 1e-6, Vf = kr - ye;
function Us(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Hf(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Us;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Yf {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Us : Hf(e);
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
    else if (c > ye) if (!(Math.abs(h * o - f * u) > ye) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, w = o * o + f * f, $ = d * d + p * p, m = Math.sqrt(w), A = Math.sqrt(c), C = s * Math.tan((Sr - Math.acos((w + c - $) / (2 * m * A))) / 2), M = C / A, R = C / m;
      Math.abs(M - 1) > ye && this._append`L${e + M * u},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * d > u * p)},${this._x1 = e + R * o},${this._y1 = n + R * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), o = r * Math.sin(i), f = e + l, u = n + o, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${u}` : (Math.abs(this._x1 - f) > ye || Math.abs(this._y1 - u) > ye) && this._append`L${f},${u}`, r && (c < 0 && (c = c % kr + kr), c > Vf ? this._append`A${r},${r},0,1,${h},${e - l},${n - o}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = u}` : c > ye && this._append`A${r},${r},0,${+(c >= Sr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Bf(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const zf = Bf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function ut(t) {
  return function() {
    return t;
  };
}
const Ii = Math.abs, lt = Math.atan2, me = Math.cos, Xf = Math.max, _r = Math.min, Yt = Math.sin, Se = Math.sqrt, dt = 1e-12, rn = Math.PI, Kn = rn / 2, Nn = 2 * rn;
function Uf(t) {
  return t > 1 ? 0 : t < -1 ? rn : Math.acos(t);
}
function Fi(t) {
  return t >= 1 ? Kn : t <= -1 ? -Kn : Math.asin(t);
}
function Gf(t) {
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
  }, () => new Yf(e);
}
function Kf(t) {
  return t.innerRadius;
}
function jf(t) {
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
  var o = n - t, f = r - e, u = a - i, h = l - s, c = h * o - u * f;
  if (!(c * c < dt))
    return c = (u * (e - s) - h * (t - i)) / c, [t + c * o, e + c * f];
}
function yn(t, e, n, r, i, s, a) {
  var l = t - n, o = e - r, f = (a ? s : -s) / Se(l * l + o * o), u = f * o, h = -f * l, c = t + u, d = e + h, p = n + u, w = r + h, $ = (c + p) / 2, m = (d + w) / 2, A = p - c, C = w - d, M = A * A + C * C, R = i - s, D = c * w - p * d, G = (C < 0 ? -1 : 1) * Se(Xf(0, R * R * M - D * D)), W = (D * C - A * G) / M, et = (-D * A - C * G) / M, Q = (D * C + A * G) / M, B = (-D * A + C * G) / M, I = W - $, b = et - m, L = Q - $, bt = B - m;
  return I * I + b * b > L * L + bt * bt && (W = Q, et = B), {
    cx: W,
    cy: et,
    x01: -u,
    y01: -h,
    x11: W * (i / R - 1),
    y11: et * (i / R - 1)
  };
}
function Jt() {
  var t = Kf, e = jf, n = ut(0), r = null, i = Wf, s = Jf, a = Zf, l = null, o = Gf(f);
  function f() {
    var u, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - Kn, w = s.apply(this, arguments) - Kn, $ = Ii(w - p), m = w > p;
    if (l || (l = u = o()), d < c && (h = d, d = c, c = h), !(d > dt)) l.moveTo(0, 0);
    else if ($ > Nn - dt)
      l.moveTo(d * me(p), d * Yt(p)), l.arc(0, 0, d, p, w, !m), c > dt && (l.moveTo(c * me(w), c * Yt(w)), l.arc(0, 0, c, w, p, m));
    else {
      var A = p, C = w, M = p, R = w, D = $, G = $, W = a.apply(this, arguments) / 2, et = W > dt && (r ? +r.apply(this, arguments) : Se(c * c + d * d)), Q = _r(Ii(d - c) / 2, +n.apply(this, arguments)), B = Q, I = Q, b, L;
      if (et > dt) {
        var bt = Fi(et / c * Yt(W)), It = Fi(et / d * Yt(W));
        (D -= bt * 2) > dt ? (bt *= m ? 1 : -1, M += bt, R -= bt) : (D = 0, M = R = (p + w) / 2), (G -= It * 2) > dt ? (It *= m ? 1 : -1, A += It, C -= It) : (G = 0, A = C = (p + w) / 2);
      }
      var Nt = d * me(A), at = d * Yt(A), Kt = c * me(R), jt = c * Yt(R);
      if (Q > dt) {
        var Tt = d * me(C), Ft = d * Yt(C), ve = c * me(M), pe = c * Yt(M), it;
        if ($ < rn)
          if (it = Qf(Nt, at, ve, pe, Tt, Ft, Kt, jt)) {
            var _e = Nt - it[0], fe = at - it[1], qt = Tt - it[0], Lt = Ft - it[1], x = 1 / Yt(Uf((_e * qt + fe * Lt) / (Se(_e * _e + fe * fe) * Se(qt * qt + Lt * Lt))) / 2), q = Se(it[0] * it[0] + it[1] * it[1]);
            B = _r(Q, (c - q) / (x - 1)), I = _r(Q, (d - q) / (x + 1));
          } else
            B = I = 0;
      }
      G > dt ? I > dt ? (b = yn(ve, pe, Nt, at, d, I, m), L = yn(Tt, Ft, Kt, jt, d, I, m), l.moveTo(b.cx + b.x01, b.cy + b.y01), I < Q ? l.arc(b.cx, b.cy, I, lt(b.y01, b.x01), lt(L.y01, L.x01), !m) : (l.arc(b.cx, b.cy, I, lt(b.y01, b.x01), lt(b.y11, b.x11), !m), l.arc(0, 0, d, lt(b.cy + b.y11, b.cx + b.x11), lt(L.cy + L.y11, L.cx + L.x11), !m), l.arc(L.cx, L.cy, I, lt(L.y11, L.x11), lt(L.y01, L.x01), !m))) : (l.moveTo(Nt, at), l.arc(0, 0, d, A, C, !m)) : l.moveTo(Nt, at), !(c > dt) || !(D > dt) ? l.lineTo(Kt, jt) : B > dt ? (b = yn(Kt, jt, Tt, Ft, c, -B, m), L = yn(Nt, at, ve, pe, c, -B, m), l.lineTo(b.cx + b.x01, b.cy + b.y01), B < Q ? l.arc(b.cx, b.cy, B, lt(b.y01, b.x01), lt(L.y01, L.x01), !m) : (l.arc(b.cx, b.cy, B, lt(b.y01, b.x01), lt(b.y11, b.x11), !m), l.arc(0, 0, c, lt(b.cy + b.y11, b.cx + b.x11), lt(L.cy + L.y11, L.cx + L.x11), m), l.arc(L.cx, L.cy, B, lt(L.y11, L.x11), lt(L.y01, L.x01), !m))) : l.arc(0, 0, c, R, M, m);
    }
    if (l.closePath(), u) return l = null, u + "" || null;
  }
  return f.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - rn / 2;
    return [me(h) * u, Yt(h) * u];
  }, f.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ut(+u), f) : t;
  }, f.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ut(+u), f) : e;
  }, f.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ut(+u), f) : n;
  }, f.padRadius = function(u) {
    return arguments.length ? (r = u == null ? null : typeof u == "function" ? u : ut(+u), f) : r;
  }, f.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : ut(+u), f) : i;
  }, f.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : ut(+u), f) : s;
  }, f.padAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : ut(+u), f) : a;
  }, f.context = function(u) {
    return arguments.length ? (l = u ?? null, f) : l;
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
function gr() {
  var t = nc, e = ec, n = null, r = ut(0), i = ut(Nn), s = ut(0);
  function a(l) {
    var o, f = (l = tc(l)).length, u, h, c = 0, d = new Array(f), p = new Array(f), w = +r.apply(this, arguments), $ = Math.min(Nn, Math.max(-Nn, i.apply(this, arguments) - w)), m, A = Math.min(Math.abs($) / f, s.apply(this, arguments)), C = A * ($ < 0 ? -1 : 1), M;
    for (o = 0; o < f; ++o)
      (M = p[d[o] = o] = +t(l[o], o, l)) > 0 && (c += M);
    for (e != null ? d.sort(function(R, D) {
      return e(p[R], p[D]);
    }) : n != null && d.sort(function(R, D) {
      return n(l[R], l[D]);
    }), o = 0, h = c ? ($ - f * C) / c : 0; o < f; ++o, w = m)
      u = d[o], M = p[u], m = w + (M > 0 ? M * h : 0) + C, p[u] = {
        data: l[u],
        index: o,
        value: M,
        startAngle: w,
        endAngle: m,
        padAngle: A
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
function Ge(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ge.prototype = {
  constructor: Ge,
  scale: function(t) {
    return t === 1 ? this : new Ge(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ge(this.k, this.x + this.k * t, this.y + this.k * e);
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
Ge.prototype;
const Qt = {}, Mr = "No Further Rankings";
function jn(t, e) {
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
function Gs(t, e, n) {
  if (e < 1)
    return [];
  const r = t.results[e - 1].tallyResults, i = [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s][n];
    a != null && i.push(a);
  }
  return i;
}
function Wn(t, e) {
  return Gs(t, e, "eliminated");
}
function Jn(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(Gs(t, r, "elected"));
  return n;
}
var rc = /* @__PURE__ */ ol('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const ic = { hash: "svelte-3kpd", code: "" };
function Ks(t, e) {
  jr(e, !0), gs(t, ic);
  let n = kt(e, "jsonData", 7), r = kt(e, "currentRound", 7, 1), i = kt(e, "mouseEventType", 15), s = kt(e, "mouseData", 15), a = kt(e, "mouseY", 15), l = kt(e, "requestRoundChange", 7, (v) => {
  }), o = kt(e, "candidateColors", 23, () => []);
  const f = 800, u = 800, h = Math.min(f, u) * 0.3, c = f / 2, d = u / 2, p = "Pie", w = "Donut", $ = "TextLayer", m = "#transfer", A = "url(#cross-hatch)", C = 1.15, M = 0.1, R = 750, D = 800;
  let G = [], W = [], et = [], Q = 0, B = Zt(0), I = 0, b = Zt(null);
  function L() {
    const v = st(g(b));
    v.select("#" + p).remove(), v.select("#" + w).remove(), v.select("#" + $).remove();
  }
  function bt(v) {
    l() && (K = v, l()(v));
  }
  function It(v) {
    L(), et = Nt(v), G = ta(v, p, et, c, d, 0, at());
  }
  vl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), _e(), setTimeout(
      () => {
        It(r());
      },
      0
    );
  });
  function Nt(v) {
    const _ = it(v);
    return Q = ve(v), _;
  }
  function at() {
    return h;
  }
  function Kt() {
    return at() * 1.41;
  }
  function jt(v, _) {
    if (v === "exhausted") return jn(n(), _);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[v]);
    }
  }
  function Tt(v, _) {
    return jt(v, _).toLocaleString("en-US");
  }
  function Ft(v, _) {
    return (jt(v, _) / Q).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function ve(v) {
    const _ = n().results[v - 1].tally;
    let y = 0;
    for (let [P, N] of Object.entries(_))
      y += Number(N);
    return y;
  }
  function pe(v, _) {
    const y = n().results[_ - 1].tallyResults;
    let P = 0;
    const N = y.findIndex((S) => (S == null ? void 0 : S.elected) && v == S.elected);
    if (N >= 0) {
      const S = y[N].transfers;
      if (S)
        for (let [T, k] of Object.entries(S)) P += Number(k);
    } else
      return 0;
    return P;
  }
  function it(v) {
    const _ = n().results;
    let y = _[Math.max(0, v - 2)].tally;
    const P = [], N = [];
    for (let [T, k] of Object.entries(y))
      P.push({ label: T, value: 0 });
    y = _[v - 1].tally;
    for (let T of P) {
      const k = Number(y[T.label]), F = pe(T.label, v);
      F > 0 ? (N.push({
        label: T.label + m,
        value: F
      }), T.value = k - F, N.push(T)) : (T.value = k, N.push(T));
    }
    const S = jn(n(), v);
    return N.push({ label: "exhausted", value: S }), N;
  }
  function _e() {
    const v = st(g(b)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, P] of Object.entries(n().results[0].tally)) {
      !o() || o().length === 0 ? _ < 10 ? Qt[y] = zf[_] : Qt[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Qt[y] = o()[_ % o().length], _++;
      {
        const N = v.clone(!0);
        N.attr("id", y.replaceAll(" ", "-")).select("rect").attr("fill", Qt[y]), N.select("path").attr("stroke", "#505050");
      }
    }
    Qt.exhausted = A, Qt["Inactive Ballots"] = A;
  }
  function fe() {
    st(g(b)).select("#" + w).remove();
  }
  function qt(v, _) {
    const y = Cn("global").duration(D);
    _ && y.on("end", _), fe(), ge(v), ea(), ra(0, at()), cn();
  }
  function Lt(v, _) {
    const y = Cn("global").duration(D);
    _ && y.on("end", _), un(v);
  }
  function x(v, _) {
    const y = Cn("global").duration(D);
    _ && y.on("end", _), ln(v), on(at());
  }
  function q() {
    cn(), Y = !1;
  }
  let Y = !1;
  function nt() {
    if (Y) {
      console.warn("busy animating");
      return;
    }
    Y = !0, I = r(), rt();
  }
  function rt() {
    j(B, 0);
    const v = I < n().results.length - 1 ? rt : q;
    qt(I, () => {
      Lt(I, () => {
        I++, bt(I), x(I, v);
      });
    });
  }
  Xr(() => {
    ft();
  });
  let K = 0;
  function ft() {
    if (console.log(`previous round was ${K}, currentRound is ${r()}`), Y) {
      console.log("gotoNextRound: busy animating");
      return;
    }
    K != r() && (K == r() - 1 && K > 0 ? He() : $t(r()), K = r());
  }
  function $t(v) {
    if (console.log("setRoundFn called"), Y) {
      console.warn("busy animating");
      return;
    }
    j(B, 0), It(v);
  }
  function He() {
    if (console.log("animateOneRoundFn called"), Y) {
      console.warn("busy animating");
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't anitmate to round ${r()}`);
      return;
    }
    if (I = r(), I > n().results.length) {
      cn(), Y = !1;
      return;
    }
    Y = !0, g(B) === 0 ? qt(I - 1, () => {
      Lt(I - 1, () => {
        x(I, q);
      });
    }) : g(B) === 1 ? Lt(I - 1, () => {
      x(I, q);
    }) : g(B) === 2 && x(I, q), j(B, 0);
  }
  function Re() {
    if (console.log(`animateOnePhaseFn called, currentRound = ${r()}, displayPhase = ${g(B)}`), r() > n().results.length) {
      cn(), Y = !1;
      return;
    }
    Y || (Y = !0, j(B, (g(B) + 1) % 3), I = r(), g(B) === 1 ? qt(I, q) : g(B) === 2 ? Lt(I, q) : g(B) === 0 ? (I++, bt(I), x(I, q)) : (Y = !1, console.warn("displayPhase out of range at ", g(B))));
  }
  function ln(v) {
    et = it(v), G = ia(v, p, et, 0, at(), !0);
  }
  function on(v, _) {
    gr().sort(null).value((k) => k.value);
    const y = st(g(b)).select("#" + w), P = Jt().outerRadius(v).innerRadius(v - 1), N = y.selectAll(".slice");
    let S = N.size();
    function T() {
      S--, S === 0 && na();
    }
    N.select("path").transition("global").duration(R).attr("d", (k) => P(k)).on("end", (k) => T());
  }
  function ge(v) {
    const _ = Ws(v, G);
    W = si(v, w, _, c, d, at(), Kt(), !1, !0);
  }
  function un(v) {
    const _ = Zs(v, W, G);
    W = ai(
      v,
      w,
      _,
      /* previousDonutInfoGlobal, */
      at(),
      Kt(),
      !1
    );
  }
  function fn(v) {
    const _ = v.data.label;
    return Qt[_.split("#")[0]];
  }
  function js(v) {
    const _ = {}, y = n().results[v - 1].tallyResults;
    for (let P = 0; P < y.length; P++) {
      let N = y[P].eliminated;
      if (N === void 0 && (N = y[P].elected), N === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const S = y[P].transfers;
      if (S === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [T, k] of Object.entries(S))
        _[T] === void 0 ? _[T] = Number(k) : _[T] += Number(k);
    }
    return _;
  }
  function Ws(v, _) {
    const y = [], P = Q, N = n().results[v - 1].tallyResults;
    for (let S = 0; S < N.length; S++) {
      let T = N[S].eliminated;
      if (T === void 0 && (T = N[S].elected), T === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const k = N[S].transfers;
      if (k === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let F = _.find((O) => O.data.label == T + m);
      F === void 0 && (F = _.find((O) => O.data.label == T));
      let V = 0;
      if (F) V = F.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [O, H] of Object.entries(k)) {
        let J;
        const Vt = _.find((tt) => tt.data.label == O);
        if (Vt)
          J = structuredClone(Vt);
        else if (O == "exhausted")
          J = {
            data: { label: O, value: Number(H) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (O == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", H);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", O);
          continue;
        }
        const E = Number(H) / P * 2 * Math.PI;
        J.startAngle = V, V = J.endAngle = V + E, J.index = S, J.data.label = `${J.data.label}#${S}`, y.push(J);
      }
    }
    return y;
  }
  function Js(v, _, y) {
    const P = {};
    for (let [N, S] of Object.entries(v)) {
      const T = y.find((V) => N == V.data.label);
      if (T === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", N);
        continue;
      }
      const k = (T.startAngle + T.endAngle) / 2, F = v[T.data.label] / _ * 2 * Math.PI;
      P[T.data.label] = k - F / 2;
    }
    return P;
  }
  function Zs(v, _, y) {
    const P = [], N = Q, S = js(v), T = Js(S, N, y);
    for (let [k, F] of _.entries()) {
      const V = structuredClone(F), O = F.endAngle - F.startAngle, H = y.find((J) => F.data.label.indexOf(J.data.label) === 0);
      if (H) {
        const J = H.data.label;
        V.startAngle = T[J], T[J] += O, V.endAngle = V.startAngle + O;
      } else if (F.data.label.indexOf("exhausted") === 0)
        V.startAngle = F.startAngle, V.endAngle = F.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", F.data.label);
        continue;
      }
      V.index = k, P.push(V);
    }
    return P;
  }
  function ii(v, _, y, P, N, S) {
    const k = st(g(b)).append("g").attr("id", $).attr("transform", `translate(${y}, ${P})`), F = Jt().innerRadius(N * C).outerRadius(N * C);
    k.selectAll("text").data(_).enter().each(function(V) {
      V.endAngle - V.startAngle < M || V.data.label.includes(m) || st(this).append("g").attr("id", (O) => O.data.label).classed("eliminated", (O) => S.includes(O.data.label.split("#")[0]) || O.data.label.includes(m)).each(function(O, H) {
        O.data.label === "exhausted" && st(this).on("mouseenter", (J, Vt) => sa(J)).on("mouseleave", (J, Vt) => aa());
      }).append("text").attr("transform", (O) => `translate(${F.centroid(O)})`).attr("text-anchor", (O) => ar(O.startAngle, O.endAngle)).text((O) => O.data.label === "exhausted" ? Mr : O.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((O) => Tt(O.data.label, v) + " (" + Ft(O.data.label, v) + ")");
    });
  }
  function Qs(v, _, y, P) {
    const S = st(g(b)).select("#" + $), T = S.selectAll("tspan"), k = S.selectAll("g").data(_, (H) => H.data.label).classed("eliminated", (H) => P.includes(H.data.label.split("#")[0]) || H.data.label.includes(m)), F = Jt().innerRadius(y * C).outerRadius(y * C + 1);
    T.transition("global").duration(R).attr("transform", (H) => `translate(${F.centroid(H)})`).attr("text-anchor", (H) => ar(H.startAngle, H.endAngle)), k.select("text").transition("global").duration(R).attr("transform", (H) => `translate(${F.centroid(H)})`).attr("text-anchor", (H) => ar(H.startAngle, H.endAngle)).on("end", (H) => O());
    let V = k.size();
    function O(H) {
      V--, V === 0 && (S.remove(), ii(v, _, c, d, y, P));
    }
  }
  function ta(v, _, y, P, N, S, T, k = !0, F = !1) {
    const O = gr().sort(null).value((H) => H.value)(y);
    return si(v, _, O, P, N, S, T, k, F), O;
  }
  function cn() {
    st(g(b)).select("#" + p).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function si(v, _, y, P, N, S, T, k, F) {
    const V = Wn(n(), v), O = Jn(n(), v), Vt = st(g(b)).attr("width", "100%").attr("height", u).attr("viewBox", `0 0 ${f} ${u}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", _).attr("transform", `translate(${P}, ${N})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (E) => V.includes(E.data.label.split("#")[0]) || E.data.label.includes(m)).classed("elected", (E) => O.includes(E.data.label.split("#")[0]) && !E.data.label.includes(m)).attr("id", (E) => E.data.label).on("mouseenter", (E, tt) => or(E, tt)).on("mouseleave", (E, tt) => ur(E, tt)), Ye = Jt().outerRadius(T).innerRadius(S);
    if (F) {
      const E = Jt().outerRadius(S + 1).innerRadius(S);
      Vt.append("path").attr("d", E).transition("global").duration(R).attr("d", (tt) => Ye(tt)).attr("fill", (tt) => fn(tt)).on("end", (tt) => lr());
    } else
      Vt.append("path").attr("d", (E) => Ye(E)).attr("fill", (E) => fn(E)), lr();
    return k && ii(v, y, P, N, T, V), y;
  }
  function ea() {
    const y = st(g(b)).select("#" + $).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function na() {
    const y = st(g(b)).select("#" + $).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function ra(v, _) {
    const N = st(g(b)).select("#" + p).selectAll(".eliminated"), S = Jt().innerRadius(v), T = Jt().outerRadius(_);
    N.classed("finished", !0).select("path").transition("global").duration(R).attrTween("d", function(k) {
      const F = Te(_, v);
      return function(V) {
        return T.innerRadius(F(V)), T(k);
      };
    }).attr("fill", (k) => `url(#${k.data.label.split("#")[0].replaceAll(" ", "-")})`), N.clone(!0).classed("finished", !0).select("path").transition("global").duration(R).attrTween("d", function(k) {
      const F = Te(_, v);
      return function(V) {
        return S.outerRadius(F(V)), S(k);
      };
    }).attr("fill", (k) => fn(k));
  }
  function ar(v, _) {
    const y = (v + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function lr() {
    st(g(b)).select("#" + $).raise().append("g").remove();
  }
  function ia(v, _, y, P, N, S) {
    const k = gr().sort(null).value((F) => F.value)(y);
    return ai(
      v,
      _,
      k,
      /* previousPieInfo, */
      P,
      N,
      S
    ), k;
  }
  function ai(v, _, y, P, N, S) {
    const T = Wn(n(), v), k = Jn(n(), v), F = Jt().outerRadius(N).innerRadius(P).startAngle((E) => E.startAngle).endAngle((E) => E.endAngle), V = Jt().outerRadius(N).innerRadius(P), H = st(g(b)).select("#" + _);
    H.selectAll(".slice").attr("prevStart", (E) => E.startAngle).attr("prevEnd", (E) => E.endAngle);
    const J = H.selectAll(".slice").data(y, (E) => E.data.label);
    J.enter().append("g").attr("class", "slice").attr("id", (E) => E.data.label).classed("eliminated", !0).on("mouseenter", (E, tt) => or(E, tt)).on("mouseleave", (E, tt) => ur(E, tt)).append("path").attr("d", (E) => V(E)).attr("fill", (E) => fn(E)), J.classed("eliminated", (E) => T.includes(E.data.label.split("#")[0])).classed("elected", (E) => k.includes(E.data.label.split("#")[0])).on("mouseenter", (E, tt) => or(E, tt)).on("mouseleave", (E, tt) => ur(E, tt));
    let Vt = J.size();
    function Ye() {
      Vt--, Vt <= 0 && (lr(), H.selectAll(".finished").remove());
    }
    return J.select("path").transition("global").duration(R).attrTween("d", function(E) {
      const tt = Number(st(this.parentNode).attr("prevStart")), la = Number(st(this.parentNode).attr("prevEnd")), oa = Te(tt, E.startAngle), ua = Te(la, E.endAngle);
      return (oi) => (F.startAngle(oa(oi)).endAngle(ua(oi)), F(E));
    }).on("end", Ye), S && Qs(v, y, N, T), y;
  }
  function or(v, _) {
    s(_.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function ur(v, _) {
    s(_.data.label.split("#")[0]), i("leave");
  }
  function sa(v, _) {
    i("show-exhausted"), a(v.clientY);
  }
  function aa(v, _) {
    i("hide-exhausted");
  }
  var li = rc();
  return bn(li, (v) => j(b, v), () => g(b)), ce(t, li), Wr({
    runFullAnimationFn: nt,
    animateOnePhaseFn: Re,
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), Rt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v = 1) {
      r(v), Rt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), Rt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), Rt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), Rt();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(v = (_) => {
    }) {
      l(v), Rt();
    },
    get candidateColors() {
      return o();
    },
    set candidateColors(v = []) {
      o(v), Rt();
    }
  });
}
ys(
  Ks,
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
  ["runFullAnimationFn", "animateOnePhaseFn"],
  !0
);
function sc(t) {
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
var ac = /* @__PURE__ */ Le("<span> </span> &nbsp;", 1), lc = /* @__PURE__ */ Le("About to eliminate: <!>", 1), oc = /* @__PURE__ */ Le("<span> </span> &nbsp;", 1), uc = /* @__PURE__ */ Le("Elected: <!>", 1), fc = /* @__PURE__ */ Le("<span> </span> <br>", 1), cc = /* @__PURE__ */ Le('<div class="animation-button-container svelte-hac7qn"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="page-container svelte-hac7qn"><div class="common-header svelte-hac7qn"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-hac7qn"><h3 class="svelte-hac7qn"> </h3> <!></div> <div class="tooltip svelte-hac7qn"> <br> these ballots have already been eliminated.</div> <div class="visualizations-container svelte-hac7qn"><div class="pie-chart-container svelte-hac7qn"><!></div></div></div>', 1);
const hc = {
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
function dc(t, e) {
  jr(e, !0), gs(t, hc);
  const n = 0.85;
  let r = kt(e, "electionSummary", 7), i = kt(e, "currentRound", 7), s = kt(e, "requestRoundChange", 7, (x) => {
  }), a = kt(e, "candidateColors", 23, () => []), l = Zt(null), o = Zt(null), f = Zt(""), u = Zt(wt([])), h = Zt(""), c = Zt(""), d = Zt(0), p = /* @__PURE__ */ Qn(() => w(r()));
  function w(x) {
    if (typeof x == "string")
      try {
        x = JSON.parse(x);
      } catch (q) {
        return console.error("Failed to parse JSON string:", q), {};
      }
    return console.log("RCtabSummary object status: ", sc(x)), x || {};
  }
  function $(x) {
    s() ? (console.log("onRoundChange in PieChart: passing on request for round ", x), s()(x)) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function m() {
    switch (g(h)) {
      case "enter":
        ((x) => (j(u, wt(x[0])), j(f, wt(x[1]))))(C(g(c), i())), g(l) && (g(l).style.top = String(g(d) || 20) + "px", g(l).style.opacity = String(n));
        break;
      case "leave":
        g(l) && (g(l).style.opacity = "0"), j(u, wt([])), j(f, "");
        break;
      case "show-exhausted":
        g(o) && (g(o).style.top = String(g(d) || 20) + "px", g(o).style.opacity = String(n));
        break;
      case "hide-exhausted":
        g(o) && (g(o).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", g(h));
        break;
    }
  }
  Xr(() => m());
  function A(x, q) {
    return x == 1 ? q ? "vote was" : "vote will be" : q ? "votes were" : "votes will be";
  }
  function C(x, q) {
    const Y = [], nt = x === "exhausted" ? Mr : x;
    let rt;
    x == "exhausted" ? rt = jn(g(p), 1) : rt = g(p).results[0].tally[x], Y.push(`${nt} started with ${rt} votes.`);
    for (let K = 1; K <= q; K++) {
      K === q && (x == "exhausted" ? rt = jn(g(p), q) : rt = g(p).results[q - 1].tally[x], Y.push(`${nt} has ${rt} votes at round ${q}.`));
      const ft = g(p).results[K - 1].tallyResults;
      for (let $t = 0; $t < ft.length; $t++) {
        const He = ft[$t].transfers, Re = ft[$t].eliminated, ln = ft[$t].elected;
        if (Re)
          Re === x && Y.push(`${nt} will be eliminated on round ${K}.`);
        else if (x === ln && (Y.push(`${nt} was elected on round ${K}.`), He))
          for (let [ge, un] of Object.entries(He))
            Y.push(`${un} ${A(Number(un), K < q)} transferred to ${ge} on round ${K}.`);
        const on = Re || ln;
        if (on) {
          const ge = Number(He[x]);
          ge && Y.push(`${ge} ${A(ge, K < q)} transferred from ${on} on round ${K}.`);
        }
      }
    }
    return [Y, nt];
  }
  function M() {
    let x = 0;
    for (let q = 1; q <= g(p).results.length; q++) {
      const Y = g(p).results[q - 1].tallyResults;
      for (let nt = 0; nt < Y.length; nt++)
        Y[nt].elected && x++;
    }
    return x;
  }
  let R;
  function D() {
    R && R.animateOnePhaseFn && R.animateOnePhaseFn();
  }
  function G() {
    R && R.runFullAnimationFn && R.runFullAnimationFn();
  }
  var W = cc(), et = Ce(W), Q = mt(et);
  Q.__click = G;
  var B = Ht(Q, 2);
  B.__click = D, gt(et);
  var I = Ht(et, 2), b = mt(I), L = mt(b), bt = mt(L);
  gt(L);
  var It = Ht(L, 2), Nt = mt(It);
  {
    var at = (x) => {
      var q = lc(), Y = Ht(Ce(q));
      dr(Y, 17, () => Wn(g(p), i()), hr, (nt, rt) => {
        var K = ac(), ft = Ce(K), $t = mt(ft, !0);
        gt(ft), hn(), dn(() => {
          yi(ft, "color", Qt[g(rt)]), Be($t, g(rt));
        }), ce(nt, K);
      }), ce(x, q);
    };
    gi(Nt, (x) => {
      Wn(g(p), i()).length > 0 && x(at);
    });
  }
  var Kt = Ht(Nt, 2);
  {
    var jt = (x) => {
      var q = uc(), Y = Ht(Ce(q));
      dr(Y, 17, () => Jn(g(p), i()), hr, (nt, rt) => {
        var K = oc(), ft = Ce(K), $t = mt(ft, !0);
        gt(ft), hn(), dn(() => {
          yi(ft, "color", Qt[g(rt)]), Be($t, g(rt));
        }), ce(nt, K);
      }), ce(x, q);
    };
    gi(Kt, (x) => {
      Jn(g(p), i()).length > 0 && x(jt);
    });
  }
  gt(It), gt(b);
  var Tt = Ht(b, 2), Ft = mt(Tt), ve = mt(Ft, !0);
  gt(Ft);
  var pe = Ht(Ft, 2);
  dr(pe, 17, () => g(u), hr, (x, q) => {
    var Y = fc(), nt = Ce(Y), rt = mt(nt, !0);
    gt(nt), hn(2), dn(() => Be(rt, g(q))), ce(x, Y);
  }), gt(Tt), bn(Tt, (x) => j(l, x), () => g(l));
  var it = Ht(Tt, 2), _e = mt(it);
  _e.nodeValue = `"${Mr}" means all the candidates ranked on `, hn(2), gt(it), bn(it, (x) => j(o, x), () => g(o));
  var fe = Ht(it, 2), qt = mt(fe), Lt = mt(qt);
  return bn(
    Ks(Lt, {
      get jsonData() {
        return g(p);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: $,
      get candidateColors() {
        return a();
      },
      get mouseEventType() {
        return g(h);
      },
      set mouseEventType(x) {
        j(h, wt(x));
      },
      get mouseData() {
        return g(c);
      },
      set mouseData(x) {
        j(c, wt(x));
      },
      get mouseY() {
        return g(d);
      },
      set mouseY(x) {
        j(d, wt(x));
      }
    }),
    (x) => R = x,
    () => R
  ), gt(qt), gt(fe), gt(I), dn(
    (x) => {
      Be(bt, `${g(p).config.contest ?? ""}, ${x ?? ""} to be elected, Round ${i() ?? ""}.`), Be(ve, g(f));
    },
    [M]
  ), ce(t, W), Wr({
    get electionSummary() {
      return r();
    },
    set electionSummary(x) {
      r(x), Rt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(x) {
      i(x), Rt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(x = (q) => {
    }) {
      s(x), Rt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(x = []) {
      a(x), Rt();
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
