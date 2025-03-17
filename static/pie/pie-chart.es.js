var la = Object.defineProperty;
var ai = (t) => {
  throw TypeError(t);
};
var oa = (t, e, n) => e in t ? la(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var kt = (t, e, n) => oa(t, typeof e != "symbol" ? e + "" : e, n), li = (t, e, n) => e.has(t) || ai("Cannot " + n);
var ft = (t, e, n) => (li(t, e, "read from private field"), n ? n.call(t) : e.get(t)), lr = (t, e, n) => e.has(t) ? ai("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), or = (t, e, n, r) => (li(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ua = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ua);
const fa = 1, ca = 2, ha = 16, da = 1, va = 4, pa = 8, _a = 16, ga = 2, Ii = "[", Sr = "[!", Cr = "]", Ue = {}, ct = Symbol(), oi = !1, Mt = 2, Fi = 4, Mr = 8, Or = 16, le = 32, Pe = 64, En = 128, Nt = 256, Rn = 512, pt = 1024, oe = 2048, De = 4096, re = 8192, jn = 16384, ma = 32768, Pr = 65536, ya = 1 << 19, qi = 1 << 20, Ge = Symbol("$state"), Li = Symbol("legacy props");
var Dr = Array.isArray, wa = Array.prototype.indexOf, Ir = Array.from, Nn = Object.keys, Tn = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, xa = Object.prototype, ba = Array.prototype, $a = Object.getPrototypeOf;
function Vi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let je = [], pr = [];
function Hi() {
  var t = je;
  je = [], Vi(t);
}
function Aa() {
  var t = pr;
  pr = [], Vi(t);
}
function Yi(t) {
  je.length === 0 && queueMicrotask(Hi), je.push(t);
}
function ui() {
  je.length > 0 && Hi(), pr.length > 0 && Aa();
}
function Bi(t) {
  return t === this.v;
}
function Ea(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Fr(t) {
  return !Ea(t, this.v);
}
function Ra(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Na() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ca(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ma() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pa() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ia = !1;
function Rt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Bi,
    rv: 0,
    wv: 0
  };
  return n;
}
function Zt(t) {
  return /* @__PURE__ */ Fa(Rt(t));
}
// @__NO_SIDE_EFFECTS__
function qr(t, e = !1) {
  const n = Rt(t);
  return e || (n.equals = Fr), n;
}
// @__NO_SIDE_EFFECTS__
function Fa(t) {
  return X !== null && !St && X.f & Mt && (Bt === null ? Ha([t]) : Bt.push(t)), t;
}
function J(t, e) {
  return X !== null && !St && us() && X.f & (Mt | Or) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Bt === null || !Bt.includes(t)) && Da(), zi(t, e);
}
function zi(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = Qi(), Xi(t, oe), U !== null && U.f & pt && !(U.f & (le | Pe)) && (Qt === null ? Ya([t]) : Qt.push(t))), e;
}
function Xi(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & oe || (ie(s, e), a & (pt | Nt) && (a & Mt ? Xi(
        /** @type {Derived} */
        s,
        De
      ) : Qn(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  var e = Mt | oe, n = X !== null && X.f & Mt ? (
    /** @type {Derived} */
    X
  ) : null;
  return U === null || n !== null && n.f & Nt ? e |= Nt : U.f |= qi, {
    ctx: vt,
    deps: null,
    effects: null,
    equals: Bi,
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
function qa(t) {
  const e = /* @__PURE__ */ Wn(t);
  return e.equals = Fr, e;
}
function Ui(t) {
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
function La(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Mt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Va(t) {
  var e, n = U;
  Ce(La(t));
  try {
    Ui(t), e = es(t);
  } finally {
    Ce(n);
  }
  return e;
}
function Gi(t) {
  var e = Va(t), n = (pe || t.f & Nt) && t.deps !== null ? De : pt;
  ie(t, n), t.equals(e) || (t.v = e, t.wv = Qi());
}
function Lr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Z = !1;
function ne(t) {
  Z = t;
}
let z;
function Xt(t) {
  if (t === null)
    throw Lr(), Ue;
  return z = t;
}
function Jn() {
  return Xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ue(z)
  );
}
function mt(t) {
  if (Z) {
    if (/* @__PURE__ */ ue(z) !== null)
      throw Lr(), Ue;
    z = t;
  }
}
function on(t = 1) {
  if (Z) {
    for (var e = t, n = z; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ue(n);
    z = n;
  }
}
function _r() {
  for (var t = 0, e = z; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Cr) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Ii || n === Sr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ue(e)
    );
    e.remove(), e = r;
  }
}
function xt(t, e = null, n) {
  if (typeof t != "object" || t === null || Ge in t)
    return t;
  const r = $a(t);
  if (r !== xa && r !== ba)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Dr(t), a = Rt(0);
  s && i.set("length", Rt(
    /** @type {any[]} */
    t.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ma();
        var h = i.get(f);
        return h === void 0 ? (h = Rt(u.value), i.set(f, h)) : J(h, xt(u.value, l)), !0;
      },
      deleteProperty(o, f) {
        var u = i.get(f);
        if (u === void 0)
          f in o && i.set(f, Rt(ct));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && J(h, c);
          }
          J(u, ct), fi(a);
        }
        return !0;
      },
      get(o, f, u) {
        var p;
        if (f === Ge)
          return t;
        var h = i.get(f), c = f in o;
        if (h === void 0 && (!c || (p = ye(o, f)) != null && p.writable) && (h = Rt(xt(c ? o[f] : ct, l)), i.set(f, h)), h !== void 0) {
          var d = _(h);
          return d === ct ? void 0 : d;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var h = i.get(f);
          h && (u.value = _(h));
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
        if (f === Ge)
          return !0;
        var u = i.get(f), h = u !== void 0 && u.v !== ct || Reflect.has(o, f);
        if (u !== void 0 || U !== null && (!h || (d = ye(o, f)) != null && d.writable)) {
          u === void 0 && (u = Rt(h ? xt(o[f], l) : ct), i.set(f, u));
          var c = _(u);
          if (c === ct)
            return !1;
        }
        return h;
      },
      set(o, f, u, h) {
        var b;
        var c = i.get(f), d = f in o;
        if (s && f === "length")
          for (var p = u; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var m = i.get(p + "");
            m !== void 0 ? J(m, ct) : p in o && (m = Rt(ct), i.set(p + "", m));
          }
        c === void 0 ? (!d || (b = ye(o, f)) != null && b.writable) && (c = Rt(void 0), J(c, xt(u, l)), i.set(f, c)) : (d = c.v !== ct, J(c, xt(u, l)));
        var E = Reflect.getOwnPropertyDescriptor(o, f);
        if (E != null && E.set && E.set.call(h, u), !d) {
          if (s && typeof f == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(f);
            Number.isInteger($) && $ >= w.v && J(w, $ + 1);
          }
          fi(a);
        }
        return !0;
      },
      ownKeys(o) {
        _(a);
        var f = Reflect.ownKeys(o).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== ct;
        });
        for (var [u, h] of i)
          h.v !== ct && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Oa();
      }
    }
  );
}
function fi(t, e = 1) {
  J(t, t.v + e);
}
var ci, Ki, ji, Wi;
function gr() {
  if (ci === void 0) {
    ci = window, Ki = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    ji = ye(e, "firstChild").get, Wi = ye(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function kn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function xe(t) {
  return ji.call(t);
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  return Wi.call(t);
}
function yt(t, e) {
  if (!Z)
    return /* @__PURE__ */ xe(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(z)
  );
  if (n === null)
    n = z.appendChild(kn());
  else if (e && n.nodeType !== 3) {
    var r = kn();
    return n == null || n.before(r), Xt(r), r;
  }
  return Xt(n), n;
}
function Ee(t, e) {
  if (!Z) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xe(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ue(n) : n;
  }
  return z;
}
function Vt(t, e = 1, n = !1) {
  let r = Z ? z : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ue(r);
  if (!Z)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = kn();
    return r === null ? i == null || i.after(a) : r.before(a), Xt(a), a;
  }
  return Xt(r), /** @type {TemplateNode} */
  r;
}
function Ji(t) {
  t.textContent = "";
}
let _n = !1, Sn = !1, Cn = null, gn = !1, Vr = !1;
function hi(t) {
  Vr = t;
}
let Ke = [];
let X = null, St = !1;
function Se(t) {
  X = t;
}
let U = null;
function Ce(t) {
  U = t;
}
let Bt = null;
function Ha(t) {
  Bt = t;
}
let lt = null, wt = 0, Qt = null;
function Ya(t) {
  Qt = t;
}
let Zi = 1, Mn = 0, pe = !1;
function Qi() {
  return ++Zi;
}
function nn(t) {
  var h;
  var e = t.f;
  if (e & oe)
    return !0;
  if (e & De) {
    var n = t.deps, r = (e & Nt) !== 0;
    if (n !== null) {
      var i, s, a = (e & Rn) !== 0, l = r && U !== null && !pe, o = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < o; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= Rn), l && u !== null && !(u.f & Nt) && (f.f ^= Nt);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], nn(
          /** @type {Derived} */
          s
        ) && Gi(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || U !== null && !pe) && ie(t, pt);
  }
  return !1;
}
function Ba(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & En)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= En;
      }
    n = n.parent;
  }
  throw _n = !1, t;
}
function za(t) {
  return (t.f & jn) === 0 && (t.parent === null || (t.parent.f & En) === 0);
}
function Zn(t, e, n, r) {
  if (_n) {
    if (n === null && (_n = !1), za(e))
      throw t;
    return;
  }
  n !== null && (_n = !0);
  {
    Ba(t, e);
    return;
  }
}
function ts(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Mt ? ts(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ie(s, oe) : s.f & pt && ie(s, De), Qn(
        /** @type {Effect} */
        s
      ));
    }
}
function es(t) {
  var d;
  var e = lt, n = wt, r = Qt, i = X, s = pe, a = Bt, l = vt, o = St, f = t.f;
  lt = /** @type {null | Value[]} */
  null, wt = 0, Qt = null, pe = (f & Nt) !== 0 && (St || !gn || X === null), X = f & (le | Pe) ? null : t, Bt = null, di(t.ctx), St = !1, Mn++;
  try {
    var u = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (lt !== null) {
      var c;
      if (On(t, wt), h !== null && wt > 0)
        for (h.length = wt + lt.length, c = 0; c < lt.length; c++)
          h[wt + c] = lt[c];
      else
        t.deps = h = lt;
      if (!pe)
        for (c = wt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && wt < h.length && (On(t, wt), h.length = wt);
    if (us() && Qt !== null && !St && h !== null && !(t.f & (Mt | De | oe)))
      for (c = 0; c < /** @type {Source[]} */
      Qt.length; c++)
        ts(
          Qt[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Mn++, u;
  } finally {
    lt = e, wt = n, Qt = r, X = i, pe = s, Bt = a, di(l), St = o;
  }
}
function Xa(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = wa.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Mt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(e)) && (ie(e, De), e.f & (Nt | Rn) || (e.f ^= Rn), Ui(
    /** @type {Derived} **/
    e
  ), On(
    /** @type {Derived} **/
    e,
    0
  ));
}
function On(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Xa(t, n[r]);
}
function Hr(t) {
  var e = t.f;
  if (!(e & jn)) {
    ie(t, pt);
    var n = U, r = vt, i = gn;
    U = t, gn = !0;
    try {
      e & Or ? tl(t) : ss(t), is(t);
      var s = es(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Zi;
      var a = t.deps, l;
      oi && Ia && t.f & oe;
    } catch (o) {
      Zn(o, t, n, r || t.ctx);
    } finally {
      gn = i, U = n;
    }
  }
}
function Ua() {
  try {
    ka();
  } catch (t) {
    if (Cn !== null)
      Zn(t, Cn, null);
    else
      throw t;
  }
}
function ns() {
  try {
    for (var t = 0; Ke.length > 0; ) {
      t++ > 1e3 && Ua();
      var e = Ke, n = e.length;
      Ke = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & pt || (i.f ^= pt);
        var s = Ka(i);
        Ga(s);
      }
    }
  } finally {
    Sn = !1, Cn = null;
  }
}
function Ga(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (jn | re)))
        try {
          nn(r) && (Hr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? as(r) : r.fn = null));
        } catch (i) {
          Zn(i, r, null, r.ctx);
        }
    }
}
function Qn(t) {
  Sn || (Sn = !0, queueMicrotask(ns));
  for (var e = Cn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (Pe | le)) {
      if (!(n & pt)) return;
      e.f ^= pt;
    }
  }
  Ke.push(e);
}
function Ka(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & le) !== 0, s = i && (r & pt) !== 0;
    if (!s && !(r & re)) {
      if (r & Fi)
        e.push(n);
      else if (i)
        n.f ^= pt;
      else {
        var a = X;
        try {
          X = n, nn(n) && Hr(n);
        } catch (f) {
          Zn(f, n, null, n.ctx);
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
function ee(t) {
  var e;
  for (ui(); Ke.length > 0; )
    Sn = !0, ns(), ui();
  return (
    /** @type {T} */
    e
  );
}
function _(t) {
  var e = t.f, n = (e & Mt) !== 0;
  if (X !== null && !St) {
    Bt !== null && Bt.includes(t) && Pa();
    var r = X.deps;
    t.rv < Mn && (t.rv = Mn, lt === null && r !== null && r[wt] === t ? wt++ : lt === null ? lt = [t] : (!pe || !lt.includes(t)) && lt.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Nt) && (i.f ^= Nt);
  }
  return n && (i = /** @type {Derived} */
  t, nn(i) && Gi(i)), t.v;
}
function Pn(t) {
  var e = St;
  try {
    return St = !0, t();
  } finally {
    St = e;
  }
}
const ja = -7169;
function ie(t, e) {
  t.f = t.f & ja | e;
}
function Wa(t) {
  U === null && X === null && Ta(), X !== null && X.f & Nt && U === null && Na(), Vr && Ra();
}
function Ja(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ie(t, e, n, r = !0) {
  var i = (t & Pe) !== 0, s = U, a = {
    ctx: vt,
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
      Hr(a), a.f |= ma;
    } catch (f) {
      throw se(a), f;
    }
  else e !== null && Qn(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (qi | En)) === 0;
  if (!l && !i && r && (s !== null && Ja(a, s), X !== null && X.f & Mt)) {
    var o = (
      /** @type {Derived} */
      X
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return a;
}
function Dn(t) {
  Wa();
  var e = U !== null && (U.f & le) !== 0 && vt !== null && !vt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      vt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: U,
      reaction: X
    });
  } else {
    var r = Yr(t);
    return r;
  }
}
function Za(t) {
  const e = Ie(Pe, t, !0);
  return () => {
    se(e);
  };
}
function Qa(t) {
  const e = Ie(Pe, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? In(e, () => {
      se(e), r(void 0);
    }) : (se(e), r(void 0));
  });
}
function Yr(t) {
  return Ie(Fi, t, !1);
}
function rs(t) {
  return Ie(Mr, t, !0);
}
function un(t, e = [], n = Wn) {
  const r = e.map(n);
  return Br(() => t(...r.map(_)));
}
function Br(t, e = 0) {
  return Ie(Mr | Or | e, t, !0);
}
function We(t, e = !0) {
  return Ie(Mr | le, t, !0, e);
}
function is(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Vr, r = X;
    hi(!0), Se(null);
    try {
      e.call(null);
    } finally {
      hi(n), Se(r);
    }
  }
}
function ss(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    se(n, e), n = r;
  }
}
function tl(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & le || se(e), e = n;
  }
}
function se(t, e = !0) {
  var n = !1;
  if ((e || t.f & ya) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ue(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  ss(t, e && !n), On(t, 0), ie(t, jn);
  var a = t.transitions;
  if (a !== null)
    for (const o of a)
      o.stop();
  is(t);
  var l = t.parent;
  l !== null && l.first !== null && as(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function as(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function In(t, e) {
  var n = [];
  zr(t, n, !0), ls(n, () => {
    se(t), e && e();
  });
}
function ls(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function zr(t, e, n) {
  if (!(t.f & re)) {
    if (t.f ^= re, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Pr) !== 0 || (r.f & le) !== 0;
      zr(r, e, s ? n : !1), r = i;
    }
  }
}
function Fn(t) {
  os(t, !0);
}
function os(t, e) {
  if (t.f & re) {
    t.f ^= re, t.f & pt || (t.f ^= pt), nn(t) && (ie(t, oe), Qn(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Pr) !== 0 || (n.f & le) !== 0;
      os(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function el(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let vt = null;
function di(t) {
  vt = t;
}
function Xr(t, e = !1, n) {
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
function Ur(t) {
  const e = vt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = U, r = X;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Ce(s.effect), Se(s.reaction), Yr(s.fn);
        }
      } finally {
        Ce(n), Se(r);
      }
    }
    vt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function us() {
  return !0;
}
const nl = ["touchstart", "touchmove"];
function rl(t) {
  return nl.includes(t);
}
const fs = /* @__PURE__ */ new Set(), mr = /* @__PURE__ */ new Set();
function il(t) {
  for (var e = 0; e < t.length; e++)
    fs.add(t[e]);
  for (var n of mr)
    n(t);
}
function fn(t) {
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
    Tn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = X, h = U;
    Se(null), Ce(null);
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
            if (Dr(m)) {
              var [E, ...w] = m;
              E.apply(s, [t, ...w]);
            } else
              m.call(s, t);
        } catch (b) {
          c ? d.push(b) : c = b;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Se(u), Ce(h);
    }
  }
}
function cs(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Je(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Fe(t, e) {
  var n = (e & ga) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return Je(z, null), z;
    r === void 0 && (r = cs(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || Ki ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Je(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function sl(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return Je(z, null), z;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        cs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ xe(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ xe(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Je(o, o), o;
  };
}
function ce(t, e) {
  if (Z) {
    U.nodes_end = z, Jn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function He(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function hs(t, e) {
  return ds(t, e);
}
function al(t, e) {
  gr(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = z;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Ii); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ue(s);
    if (!s)
      throw Ue;
    ne(!0), Xt(
      /** @type {Comment} */
      s
    ), Jn();
    const a = ds(t, { ...e, anchor: s });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== Cr)
      throw Lr(), Ue;
    return ne(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ue)
      return e.recover === !1 && Sa(), gr(), Ji(n), ne(!1), hs(t, e);
    throw a;
  } finally {
    ne(r), Xt(i);
  }
}
const Re = /* @__PURE__ */ new Map();
function ds(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  gr();
  var l = /* @__PURE__ */ new Set(), o = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = rl(d);
        e.addEventListener(d, fn, { passive: p });
        var m = Re.get(d);
        m === void 0 ? (document.addEventListener(d, fn, { passive: p }), Re.set(d, 1)) : Re.set(d, m + 1);
      }
    }
  };
  o(Ir(fs)), mr.add(o);
  var f = void 0, u = Qa(() => {
    var h = n ?? e.appendChild(kn());
    return We(() => {
      if (s) {
        Xr({});
        var c = (
          /** @type {ComponentContext} */
          vt
        );
        c.c = s;
      }
      i && (r.$$events = i), Z && Je(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, Z && (U.nodes_end = z), s && Ur();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, fn);
        var d = (
          /** @type {number} */
          Re.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, fn), Re.delete(c)) : Re.set(c, d);
      }
      mr.delete(o), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return yr.set(f, u), f;
}
let yr = /* @__PURE__ */ new WeakMap();
function ll(t, e) {
  const n = yr.get(t);
  return n ? (yr.delete(t), n(e)) : Promise.resolve();
}
function vi(t, e, n = !1) {
  Z && Jn();
  var r = t, i = null, s = null, a = ct, l = n ? Pr : 0, o = !1;
  const f = (h, c = !0) => {
    o = !0, u(c, h);
  }, u = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (Z) {
      const p = (
        /** @type {Comment} */
        r.data === Sr
      );
      !!a === p && (r = _r(), Xt(r), ne(!1), d = !0);
    }
    a ? (i ? Fn(i) : c && (i = We(() => c(r))), s && In(s, () => {
      s = null;
    })) : (s ? Fn(s) : c && (s = We(() => c(r))), i && In(i, () => {
      i = null;
    })), d && ne(!0);
  };
  Br(() => {
    o = !1, e(f), o || u(null, null);
  }, l), Z && (r = z);
}
function ur(t, e) {
  return e;
}
function ol(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    zr(e[a].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ji(o), o.append(
      /** @type {Element} */
      n
    ), r.clear(), he(t, e[0].prev, e[s - 1].next);
  }
  ls(i, () => {
    for (var f = 0; f < s; f++) {
      var u = e[f];
      l || (r.delete(u.k), he(t, u.prev, u.next)), se(u.e, !l);
    }
  });
}
function fr(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  Z && Jn();
  var o = null, f = !1, u = /* @__PURE__ */ qa(() => {
    var h = n();
    return Dr(h) ? h : h == null ? [] : Ir(h);
  });
  Br(() => {
    var h = _(u), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (Z) {
      var p = (
        /** @type {Comment} */
        a.data === Sr
      );
      p !== (c === 0) && (a = _r(), Xt(a), ne(!1), d = !0);
    }
    if (Z) {
      for (var m = null, E, w = 0; w < c; w++) {
        if (z.nodeType === 8 && /** @type {Comment} */
        z.data === Cr) {
          a = /** @type {Comment} */
          z, d = !0, ne(!1);
          break;
        }
        var $ = h[w], b = r($, w);
        E = vs(
          z,
          l,
          m,
          null,
          $,
          b,
          w,
          i,
          e,
          n
        ), l.items.set(b, E), m = E;
      }
      c > 0 && Xt(_r());
    }
    Z || ul(h, l, a, i, e, r, n), s !== null && (c === 0 ? o ? Fn(o) : o = We(() => s(a)) : o !== null && In(o, () => {
      o = null;
    })), d && ne(!0), _(u);
  }), Z && (a = z);
}
function ul(t, e, n, r, i, s, a) {
  var l = t.length, o = e.items, f = e.first, u = f, h, c = null, d = [], p = [], m, E, w, $;
  for ($ = 0; $ < l; $ += 1) {
    if (m = t[$], E = s(m, $), w = o.get(E), w === void 0) {
      var b = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : n;
      c = vs(
        b,
        e,
        c,
        c === null ? e.first : c.next,
        m,
        E,
        $,
        r,
        i,
        a
      ), o.set(E, c), d = [], p = [], u = c.next;
      continue;
    }
    if (fl(w, m, $), w.e.f & re && Fn(w.e), w !== u) {
      if (h !== void 0 && h.has(w)) {
        if (d.length < p.length) {
          var S = p[0], P;
          c = S.prev;
          var D = d[0], Y = d[d.length - 1];
          for (P = 0; P < d.length; P += 1)
            pi(d[P], S, n);
          for (P = 0; P < p.length; P += 1)
            h.delete(p[P]);
          he(e, D.prev, Y.next), he(e, c, D), he(e, Y, S), u = S, c = Y, $ -= 1, d = [], p = [];
        } else
          h.delete(w), pi(w, u, n), he(e, w.prev, w.next), he(e, w, c === null ? e.first : c.next), he(e, c, w), c = w;
        continue;
      }
      for (d = [], p = []; u !== null && u.k !== E; )
        u.e.f & re || (h ?? (h = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      w = u;
    }
    d.push(w), c = w, u = w.next;
  }
  if (u !== null || h !== void 0) {
    for (var G = h === void 0 ? [] : Ir(h); u !== null; )
      u.e.f & re || G.push(u), u = u.next;
    var K = G.length;
    if (K > 0) {
      var q = null;
      ol(e, G, q, o);
    }
  }
  U.first = e.first && e.first.e, U.last = c && c.e;
}
function fl(t, e, n, r) {
  zi(t.v, e), t.i = n;
}
function vs(t, e, n, r, i, s, a, l, o, f) {
  var u = (o & fa) !== 0, h = (o & ha) === 0, c = u ? h ? /* @__PURE__ */ qr(i) : Rt(i) : i, d = o & ca ? Rt(a) : a, p = {
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
    return p.e = We(() => l(t, c, d, f), Z), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function pi(t, e, n) {
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
function ps(t, e) {
  Yi(() => {
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
function _i(t, e, n, r) {
  var i = t.__styles ?? (t.__styles = {});
  i[e] !== n && (i[e] = n, n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, ""));
}
function gi(t, e) {
  return t === e || (t == null ? void 0 : t[Ge]) === e;
}
function mn(t = {}, e, n, r) {
  return Yr(() => {
    var i, s;
    return rs(() => {
      i = s, s = [], Pn(() => {
        t !== n(...s) && (e(t, ...s), i && gi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Yi(() => {
        s && gi(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function cl(t) {
  vt === null && el(), Dn(() => {
    const e = Pn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let cn = !1;
function hl(t) {
  var e = cn;
  try {
    return cn = !1, [t(), cn];
  } finally {
    cn = e;
  }
}
function mi(t, e = 1) {
  const n = t() + e;
  return t(n), n;
}
function ve(t, e, n, r) {
  var P;
  var i = (n & da) !== 0, s = !0, a = (n & pa) !== 0, l = (n & _a) !== 0, o = !1, f;
  a ? [f, o] = hl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var u = Ge in t || Li in t, h = a && (((P = ye(t, e)) == null ? void 0 : P.set) ?? (u && e in t && ((D) => t[e] = D))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, m = () => (p = !0, d && (d = !1, l ? c = Pn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Ca(), f = m(), h && h(f));
  var E;
  if (E = () => {
    var D = (
      /** @type {V} */
      t[e]
    );
    return D === void 0 ? m() : (d = !0, p = !1, D);
  }, !(n & va))
    return E;
  if (h) {
    var w = t.$$legacy;
    return function(D, Y) {
      return arguments.length > 0 ? ((!Y || w || o) && h(Y ? E() : D), D) : E();
    };
  }
  var $ = !1, b = /* @__PURE__ */ qr(f), S = /* @__PURE__ */ Wn(() => {
    var D = E(), Y = _(b);
    return $ ? ($ = !1, Y) : b.v = D;
  });
  return i || (S.equals = Fr), function(D, Y) {
    if (arguments.length > 0) {
      const G = Y ? _(S) : a ? xt(D) : D;
      return S.equals(G) || ($ = !0, J(b, G), p && c !== void 0 && (c = G), Pn(() => _(S))), D;
    }
    return _(S);
  };
}
function dl(t) {
  return new vl(t);
}
var te, Et;
class vl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    lr(this, te);
    /** @type {Record<string, any>} */
    lr(this, Et);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ qr(l);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return _(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Li ? !0 : (_(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return J(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    or(this, Et, (e.hydrate ? al : hs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ee(), or(this, te, i.$$events);
    for (const a of Object.keys(ft(this, Et)))
      a === "$set" || a === "$destroy" || a === "$on" || Tn(this, a, {
        get() {
          return ft(this, Et)[a];
        },
        /** @param {any} value */
        set(l) {
          ft(this, Et)[a] = l;
        },
        enumerable: !0
      });
    ft(this, Et).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ft(this, Et).$destroy = () => {
      ll(ft(this, Et));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ft(this, Et).$set(e);
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
    ft(this, Et).$destroy();
  }
}
te = new WeakMap(), Et = new WeakMap();
let _s;
typeof HTMLElement == "function" && (_s = class extends HTMLElement {
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
      const r = {}, i = pl(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = yn(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = dl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Za(() => {
        rs(() => {
          var s;
          this.$$r = !0;
          for (const a of Nn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = yn(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = yn(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Nn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function yn(t, e, n, r) {
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
function pl(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function gs(t, e, n, r, i, s) {
  let a = class extends _s {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Nn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Nn(e).forEach((l) => {
    Tn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var h;
        o = yn(l, o, e), this.$$d[l] = o;
        var f = this.$$c;
        if (f) {
          var u = (h = ye(f, l)) == null ? void 0 : h.get;
          u ? f[l] = o : f.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    Tn(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var _l = { value: () => {
} };
function ms() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new wn(n);
}
function wn(t) {
  this._ = t;
}
function gl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
wn.prototype = ms.prototype = {
  constructor: wn,
  on: function(t, e) {
    var n = this._, r = gl(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = ml(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = yi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = yi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new wn(t);
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
function ml(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function yi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = _l, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var wr = "http://www.w3.org/1999/xhtml";
const wi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function tr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), wi.hasOwnProperty(e) ? { space: wi[e], local: t } : t;
}
function yl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === wr && e.documentElement.namespaceURI === wr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function wl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ys(t) {
  var e = tr(t);
  return (e.local ? wl : yl)(e);
}
function xl() {
}
function Gr(t) {
  return t == null ? xl : function() {
    return this.querySelector(t);
  };
}
function bl(t) {
  typeof t != "function" && (t = Gr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = new Array(a), o, f, u = 0; u < a; ++u)
      (o = s[u]) && (f = t.call(o, o.__data__, u, s)) && ("__data__" in o && (f.__data__ = o.__data__), l[u] = f);
  return new bt(r, this._parents);
}
function $l(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Al() {
  return [];
}
function ws(t) {
  return t == null ? Al : function() {
    return this.querySelectorAll(t);
  };
}
function El(t) {
  return function() {
    return $l(t.apply(this, arguments));
  };
}
function Rl(t) {
  typeof t == "function" ? t = El(t) : t = ws(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
  return new bt(r, i);
}
function xs(t) {
  return function() {
    return this.matches(t);
  };
}
function bs(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Nl = Array.prototype.find;
function Tl(t) {
  return function() {
    return Nl.call(this.children, t);
  };
}
function kl() {
  return this.firstElementChild;
}
function Sl(t) {
  return this.select(t == null ? kl : Tl(typeof t == "function" ? t : bs(t)));
}
var Cl = Array.prototype.filter;
function Ml() {
  return Array.from(this.children);
}
function Ol(t) {
  return function() {
    return Cl.call(this.children, t);
  };
}
function Pl(t) {
  return this.selectAll(t == null ? Ml : Ol(typeof t == "function" ? t : bs(t)));
}
function Dl(t) {
  typeof t != "function" && (t = xs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new bt(r, this._parents);
}
function $s(t) {
  return new Array(t.length);
}
function Il() {
  return new bt(this._enter || this._groups.map($s), this._parents);
}
function qn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
qn.prototype = {
  constructor: qn,
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
function Fl(t) {
  return function() {
    return t;
  };
}
function ql(t, e, n, r, i, s) {
  for (var a = 0, l, o = e.length, f = s.length; a < f; ++a)
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new qn(t, s[a]);
  for (; a < o; ++a)
    (l = e[a]) && (i[a] = l);
}
function Ll(t, e, n, r, i, s, a) {
  var l, o, f = /* @__PURE__ */ new Map(), u = e.length, h = s.length, c = new Array(u), d;
  for (l = 0; l < u; ++l)
    (o = e[l]) && (c[l] = d = a.call(o, o.__data__, l, e) + "", f.has(d) ? i[l] = o : f.set(d, o));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (o = f.get(d)) ? (r[l] = o, o.__data__ = s[l], f.delete(d)) : n[l] = new qn(t, s[l]);
  for (l = 0; l < u; ++l)
    (o = e[l]) && f.get(c[l]) === o && (i[l] = o);
}
function Vl(t) {
  return t.__data__;
}
function Hl(t, e) {
  if (!arguments.length) return Array.from(this, Vl);
  var n = e ? Ll : ql, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Fl(t));
  for (var s = i.length, a = new Array(s), l = new Array(s), o = new Array(s), f = 0; f < s; ++f) {
    var u = r[f], h = i[f], c = h.length, d = Yl(t.call(u, u && u.__data__, f, r)), p = d.length, m = l[f] = new Array(p), E = a[f] = new Array(p), w = o[f] = new Array(c);
    n(u, h, m, E, w, d, e);
    for (var $ = 0, b = 0, S, P; $ < p; ++$)
      if (S = m[$]) {
        for ($ >= b && (b = $ + 1); !(P = E[b]) && ++b < p; ) ;
        S._next = P || null;
      }
  }
  return a = new bt(a, r), a._enter = l, a._exit = o, a;
}
function Yl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Bl() {
  return new bt(this._exit || this._groups.map($s), this._parents);
}
function zl(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Xl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), o = 0; o < a; ++o)
    for (var f = n[o], u = r[o], h = f.length, c = l[o] = new Array(h), d, p = 0; p < h; ++p)
      (d = f[p] || u[p]) && (c[p] = d);
  for (; o < i; ++o)
    l[o] = n[o];
  return new bt(l, this._parents);
}
function Ul() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Gl(t) {
  t || (t = Kl);
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
function Kl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function jl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Wl() {
  return Array.from(this);
}
function Jl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Zl() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Ql() {
  return !this.node();
}
function to(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, l; s < a; ++s)
      (l = i[s]) && t.call(l, l.__data__, s, i);
  return this;
}
function eo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function no(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ro(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function io(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function so(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ao(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function lo(t, e) {
  var n = tr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? no : eo : typeof e == "function" ? n.local ? ao : so : n.local ? io : ro)(n, e));
}
function As(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function oo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function uo(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function fo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function co(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? oo : typeof e == "function" ? fo : uo)(t, e, n ?? "")) : Me(this.node(), t);
}
function Me(t, e) {
  return t.style.getPropertyValue(e) || As(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ho(t) {
  return function() {
    delete this[t];
  };
}
function vo(t, e) {
  return function() {
    this[t] = e;
  };
}
function po(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function _o(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ho : typeof e == "function" ? po : vo)(t, e)) : this.node()[t];
}
function Es(t) {
  return t.trim().split(/^|\s+/);
}
function Kr(t) {
  return t.classList || new Rs(t);
}
function Rs(t) {
  this._node = t, this._names = Es(t.getAttribute("class") || "");
}
Rs.prototype = {
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
function Ns(t, e) {
  for (var n = Kr(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ts(t, e) {
  for (var n = Kr(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function go(t) {
  return function() {
    Ns(this, t);
  };
}
function mo(t) {
  return function() {
    Ts(this, t);
  };
}
function yo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ns : Ts)(this, t);
  };
}
function wo(t, e) {
  var n = Es(t + "");
  if (arguments.length < 2) {
    for (var r = Kr(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? yo : e ? go : mo)(n, e));
}
function xo() {
  this.textContent = "";
}
function bo(t) {
  return function() {
    this.textContent = t;
  };
}
function $o(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ao(t) {
  return arguments.length ? this.each(t == null ? xo : (typeof t == "function" ? $o : bo)(t)) : this.node().textContent;
}
function Eo() {
  this.innerHTML = "";
}
function Ro(t) {
  return function() {
    this.innerHTML = t;
  };
}
function No(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function To(t) {
  return arguments.length ? this.each(t == null ? Eo : (typeof t == "function" ? No : Ro)(t)) : this.node().innerHTML;
}
function ko() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function So() {
  return this.each(ko);
}
function Co() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mo() {
  return this.each(Co);
}
function Oo(t) {
  var e = typeof t == "function" ? t : ys(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Po() {
  return null;
}
function Do(t, e) {
  var n = typeof t == "function" ? t : ys(t), r = e == null ? Po : typeof e == "function" ? e : Gr(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Io() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Fo() {
  return this.each(Io);
}
function qo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Lo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Vo(t) {
  return this.select(t ? Lo : qo);
}
function Ho(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Yo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Bo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function zo(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Xo(t, e, n) {
  return function() {
    var r = this.__on, i, s = Yo(e);
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
function Uo(t, e, n) {
  var r = Bo(t + ""), i, s = r.length, a;
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
  for (l = e ? Xo : zo, i = 0; i < s; ++i) this.each(l(r[i], e, n));
  return this;
}
function ks(t, e, n) {
  var r = As(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Go(t, e) {
  return function() {
    return ks(this, t, e);
  };
}
function Ko(t, e) {
  return function() {
    return ks(this, t, e.apply(this, arguments));
  };
}
function jo(t, e) {
  return this.each((typeof e == "function" ? Ko : Go)(t, e));
}
function* Wo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ss = [null];
function bt(t, e) {
  this._groups = t, this._parents = e;
}
function qe() {
  return new bt([[document.documentElement]], Ss);
}
function Jo() {
  return this;
}
bt.prototype = qe.prototype = {
  constructor: bt,
  select: bl,
  selectAll: Rl,
  selectChild: Sl,
  selectChildren: Pl,
  filter: Dl,
  data: Hl,
  enter: Il,
  exit: Bl,
  join: zl,
  merge: Xl,
  selection: Jo,
  order: Ul,
  sort: Gl,
  call: jl,
  nodes: Wl,
  node: Jl,
  size: Zl,
  empty: Ql,
  each: to,
  attr: lo,
  style: co,
  property: _o,
  classed: wo,
  text: Ao,
  html: To,
  raise: So,
  lower: Mo,
  append: Oo,
  insert: Do,
  remove: Fo,
  clone: Vo,
  datum: Ho,
  on: Uo,
  dispatch: jo,
  [Symbol.iterator]: Wo
};
function st(t) {
  return typeof t == "string" ? new bt([[document.querySelector(t)]], [document.documentElement]) : new bt([[t]], Ss);
}
function jr(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Cs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function rn() {
}
var Ze = 0.7, Ln = 1 / Ze, ke = "\\s*([+-]?\\d+)\\s*", Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zo = /^#([0-9a-f]{3,8})$/, Qo = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`), tu = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), eu = new RegExp(`^rgba\\(${ke},${ke},${ke},${Qe}\\)$`), nu = new RegExp(`^rgba\\(${zt},${zt},${zt},${Qe}\\)$`), ru = new RegExp(`^hsl\\(${Qe},${zt},${zt}\\)$`), iu = new RegExp(`^hsla\\(${Qe},${zt},${zt},${Qe}\\)$`), xi = {
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
jr(rn, be, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bi,
  // Deprecated! Use color.formatHex.
  formatHex: bi,
  formatHex8: su,
  formatHsl: au,
  formatRgb: $i,
  toString: $i
});
function bi() {
  return this.rgb().formatHex();
}
function su() {
  return this.rgb().formatHex8();
}
function au() {
  return Ms(this).formatHsl();
}
function $i() {
  return this.rgb().formatRgb();
}
function be(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Zo.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ai(e) : n === 3 ? new dt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? hn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? hn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Qo.exec(t)) ? new dt(e[1], e[2], e[3], 1) : (e = tu.exec(t)) ? new dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = eu.exec(t)) ? hn(e[1], e[2], e[3], e[4]) : (e = nu.exec(t)) ? hn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ru.exec(t)) ? Ni(e[1], e[2] / 100, e[3] / 100, 1) : (e = iu.exec(t)) ? Ni(e[1], e[2] / 100, e[3] / 100, e[4]) : xi.hasOwnProperty(t) ? Ai(xi[t]) : t === "transparent" ? new dt(NaN, NaN, NaN, 0) : null;
}
function Ai(t) {
  return new dt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function hn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new dt(t, e, n, r);
}
function lu(t) {
  return t instanceof rn || (t = be(t)), t ? (t = t.rgb(), new dt(t.r, t.g, t.b, t.opacity)) : new dt();
}
function xr(t, e, n, r) {
  return arguments.length === 1 ? lu(t) : new dt(t, e, n, r ?? 1);
}
function dt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
jr(dt, xr, Cs(rn, {
  brighter(t) {
    return t = t == null ? Ln : Math.pow(Ln, t), new dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ze : Math.pow(Ze, t), new dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new dt(we(this.r), we(this.g), we(this.b), Vn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ei,
  // Deprecated! Use color.formatHex.
  formatHex: Ei,
  formatHex8: ou,
  formatRgb: Ri,
  toString: Ri
}));
function Ei() {
  return `#${me(this.r)}${me(this.g)}${me(this.b)}`;
}
function ou() {
  return `#${me(this.r)}${me(this.g)}${me(this.b)}${me((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ri() {
  const t = Vn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${we(this.r)}, ${we(this.g)}, ${we(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Vn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function we(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function me(t) {
  return t = we(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ni(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ct(t, e, n, r);
}
function Ms(t) {
  if (t instanceof Ct) return new Ct(t.h, t.s, t.l, t.opacity);
  if (t instanceof rn || (t = be(t)), !t) return new Ct();
  if (t instanceof Ct) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, o = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= o < 0.5 ? s + i : 2 - s - i, a *= 60) : l = o > 0 && o < 1 ? 0 : a, new Ct(a, l, o, t.opacity);
}
function uu(t, e, n, r) {
  return arguments.length === 1 ? Ms(t) : new Ct(t, e, n, r ?? 1);
}
function Ct(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
jr(Ct, uu, Cs(rn, {
  brighter(t) {
    return t = t == null ? Ln : Math.pow(Ln, t), new Ct(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ze : Math.pow(Ze, t), new Ct(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new dt(
      cr(t >= 240 ? t - 240 : t + 120, i, r),
      cr(t, i, r),
      cr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Ct(Ti(this.h), dn(this.s), dn(this.l), Vn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Vn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ti(this.h)}, ${dn(this.s) * 100}%, ${dn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ti(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function dn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Wr = (t) => () => t;
function fu(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function cu(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function hu(t) {
  return (t = +t) == 1 ? Os : function(e, n) {
    return n - e ? cu(e, n, t) : Wr(isNaN(e) ? n : e);
  };
}
function Os(t, e) {
  var n = e - t;
  return n ? fu(t, n) : Wr(isNaN(t) ? e : t);
}
const Hn = function t(e) {
  var n = hu(e);
  function r(i, s) {
    var a = n((i = xr(i)).r, (s = xr(s)).r), l = n(i.g, s.g), o = n(i.b, s.b), f = Os(i.opacity, s.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = o(u), i.opacity = f(u), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function du(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function vu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function pu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ne(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(l) {
    for (a = 0; a < r; ++a) s[a] = i[a](l);
    return s;
  };
}
function _u(t, e) {
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
function gu(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ne(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, hr = new RegExp(br.source, "g");
function mu(t) {
  return function() {
    return t;
  };
}
function yu(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ps(t, e) {
  var n = br.lastIndex = hr.lastIndex = 0, r, i, s, a = -1, l = [], o = [];
  for (t = t + "", e = e + ""; (r = br.exec(t)) && (i = hr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, o.push({ i: a, x: Yt(r, i) })), n = hr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? o[0] ? yu(o[0].x) : mu(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u) l[(h = o[u]).i] = h.x(f);
    return l.join("");
  });
}
function Ne(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Wr(e) : (n === "number" ? Yt : n === "string" ? (r = be(e)) ? (e = r, Hn) : Ps : e instanceof be ? Hn : e instanceof Date ? _u : vu(e) ? du : Array.isArray(e) ? pu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? gu : Yt)(t, e);
}
var ki = 180 / Math.PI, $r = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ds(t, e, n, r, i, s) {
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
var vn;
function wu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? $r : Ds(e.a, e.b, e.c, e.d, e.e, e.f);
}
function xu(t) {
  return t == null || (vn || (vn = document.createElementNS("http://www.w3.org/2000/svg", "g")), vn.setAttribute("transform", t), !(t = vn.transform.baseVal.consolidate())) ? $r : (t = t.matrix, Ds(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Is(t, e, n, r) {
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
      for (var p = -1, m = c.length, E; ++p < m; ) h[(E = c[p]).i] = E.x(d);
      return h.join("");
    };
  };
}
var bu = Is(wu, "px, ", "px)", "deg)"), $u = Is(xu, ", ", ")", ")"), Oe = 0, Be = 0, Ye = 0, Fs = 1e3, Yn, ze, Bn = 0, $e = 0, er = 0, tn = typeof performance == "object" && performance.now ? performance : Date, qs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Jr() {
  return $e || (qs(Au), $e = tn.now() + er);
}
function Au() {
  $e = 0;
}
function zn() {
  this._call = this._time = this._next = null;
}
zn.prototype = Ls.prototype = {
  constructor: zn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Jr() : +n) + (e == null ? 0 : +e), !this._next && ze !== this && (ze ? ze._next = this : Yn = this, ze = this), this._call = t, this._time = n, Ar();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ar());
  }
};
function Ls(t, e, n) {
  var r = new zn();
  return r.restart(t, e, n), r;
}
function Eu() {
  Jr(), ++Oe;
  for (var t = Yn, e; t; )
    (e = $e - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Oe;
}
function Si() {
  $e = (Bn = tn.now()) + er, Oe = Be = 0;
  try {
    Eu();
  } finally {
    Oe = 0, Nu(), $e = 0;
  }
}
function Ru() {
  var t = tn.now(), e = t - Bn;
  e > Fs && (er -= e, Bn = t);
}
function Nu() {
  for (var t, e = Yn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Yn = n);
  ze = t, Ar(r);
}
function Ar(t) {
  if (!Oe) {
    Be && (Be = clearTimeout(Be));
    var e = t - $e;
    e > 24 ? (t < 1 / 0 && (Be = setTimeout(Si, t - tn.now() - er)), Ye && (Ye = clearInterval(Ye))) : (Ye || (Bn = tn.now(), Ye = setInterval(Ru, Fs)), Oe = 1, qs(Si));
  }
}
function Ci(t, e, n) {
  var r = new zn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Tu = ms("start", "end", "cancel", "interrupt"), ku = [], Vs = 0, Mi = 1, Er = 2, xn = 3, Oi = 4, Rr = 5, bn = 6;
function nr(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Su(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Tu,
    tween: ku,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Vs
  });
}
function Zr(t, e) {
  var n = Ot(t, e);
  if (n.state > Vs) throw new Error("too late; already scheduled");
  return n;
}
function Ut(t, e) {
  var n = Ot(t, e);
  if (n.state > xn) throw new Error("too late; already running");
  return n;
}
function Ot(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Su(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Ls(s, 0, n.time);
  function s(f) {
    n.state = Mi, n.timer.restart(a, n.delay, n.time), n.delay <= f && a(f - n.delay);
  }
  function a(f) {
    var u, h, c, d;
    if (n.state !== Mi) return o();
    for (u in r)
      if (d = r[u], d.name === n.name) {
        if (d.state === xn) return Ci(a);
        d.state === Oi ? (d.state = bn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[u]) : +u < e && (d.state = bn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[u]);
      }
    if (Ci(function() {
      n.state === xn && (n.state = Oi, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Er, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Er) {
      for (n.state = xn, i = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = Rr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, u);
    n.state === Rr && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = bn, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Cu(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Er && r.state < Rr, r.state = bn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Mu(t) {
  return this.each(function() {
    Cu(this, t);
  });
}
function Ou(t, e) {
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
function Pu(t, e, n) {
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
function Du(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ot(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ou : Pu)(n, t, e));
}
function Qr(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ot(i, r).value[e];
  };
}
function Hs(t, e) {
  var n;
  return (typeof e == "number" ? Yt : e instanceof be ? Hn : (n = be(e)) ? (e = n, Hn) : Ps)(t, e);
}
function Iu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Lu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Vu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function Hu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l)));
  };
}
function Yu(t, e) {
  var n = tr(t), r = n === "transform" ? $u : Hs;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Hu : Vu)(n, r, Qr(this, "attr." + t, e)) : e == null ? (n.local ? Fu : Iu)(n) : (n.local ? Lu : qu)(n, r, e));
}
function Bu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function zu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Xu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && zu(t, s)), n;
  }
  return i._value = e, i;
}
function Uu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Bu(t, s)), n;
  }
  return i._value = e, i;
}
function Gu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = tr(t);
  return this.tween(n, (r.local ? Xu : Uu)(r, e));
}
function Ku(t, e) {
  return function() {
    Zr(this, t).delay = +e.apply(this, arguments);
  };
}
function ju(t, e) {
  return e = +e, function() {
    Zr(this, t).delay = e;
  };
}
function Wu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ku : ju)(e, t)) : Ot(this.node(), e).delay;
}
function Ju(t, e) {
  return function() {
    Ut(this, t).duration = +e.apply(this, arguments);
  };
}
function Zu(t, e) {
  return e = +e, function() {
    Ut(this, t).duration = e;
  };
}
function Qu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ju : Zu)(e, t)) : Ot(this.node(), e).duration;
}
function tf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ut(this, t).ease = e;
  };
}
function ef(t) {
  var e = this._id;
  return arguments.length ? this.each(tf(e, t)) : Ot(this.node(), e).ease;
}
function nf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ut(this, t).ease = n;
  };
}
function rf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(nf(this._id, t));
}
function sf(t) {
  typeof t != "function" && (t = xs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new ae(r, this._parents, this._name, this._id);
}
function af(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var o = e[l], f = n[l], u = o.length, h = a[l] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new ae(a, this._parents, this._name, this._id);
}
function lf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function of(t, e, n) {
  var r, i, s = lf(e) ? Zr : Ut;
  return function() {
    var a = s(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(e, n), a.on = i;
  };
}
function uf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ot(this.node(), n).on.on(t) : this.each(of(n, t, e));
}
function ff(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function cf() {
  return this.on("end.remove", ff(this._id));
}
function hf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Gr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], o = l.length, f = s[a] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = l[c]) && (h = t.call(u, u.__data__, c, l)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, nr(f[c], e, n, c, f, Ot(u, n)));
  return new ae(s, this._parents, e, n);
}
function df(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ws(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var o = r[l], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, p = Ot(u, n), m = 0, E = c.length; m < E; ++m)
          (d = c[m]) && nr(d, e, n, m, c, p);
        s.push(c), a.push(u);
      }
  return new ae(s, a, e, n);
}
var vf = qe.prototype.constructor;
function pf() {
  return new vf(this._groups, this._parents);
}
function _f(t, e) {
  var n, r, i;
  return function() {
    var s = Me(this, t), a = (this.style.removeProperty(t), Me(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Ys(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Me(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function mf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Me(this, t), l = n(this), o = l + "";
    return l == null && (o = l = (this.style.removeProperty(t), Me(this, t))), a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l));
  };
}
function yf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var o = Ut(this, t), f = o.on, u = o.value[s] == null ? l || (l = Ys(e)) : void 0;
    (f !== n || i !== u) && (r = (n = f).copy()).on(a, i = u), o.on = r;
  };
}
function wf(t, e, n) {
  var r = (t += "") == "transform" ? bu : Hs;
  return e == null ? this.styleTween(t, _f(t, r)).on("end.style." + t, Ys(t)) : typeof e == "function" ? this.styleTween(t, mf(t, r, Qr(this, "style." + t, e))).each(yf(this._id, t)) : this.styleTween(t, gf(t, r, e), n).on("end.style." + t, null);
}
function xf(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function bf(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && xf(t, a, n)), r;
  }
  return s._value = e, s;
}
function $f(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, bf(t, e, n ?? ""));
}
function Af(t) {
  return function() {
    this.textContent = t;
  };
}
function Ef(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Rf(t) {
  return this.tween("text", typeof t == "function" ? Ef(Qr(this, "text", t)) : Af(t == null ? "" : t + ""));
}
function Nf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Tf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Nf(i)), e;
  }
  return r._value = t, r;
}
function kf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Tf(t));
}
function Sf() {
  for (var t = this._name, e = this._id, n = Bs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      if (o = a[f]) {
        var u = Ot(o, e);
        nr(o, t, n, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new ae(r, this._parents, t, n);
}
function Cf() {
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
var Mf = 0;
function ae(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function $n(t) {
  return qe().transition(t);
}
function Bs() {
  return ++Mf;
}
var Wt = qe.prototype;
ae.prototype = $n.prototype = {
  constructor: ae,
  select: hf,
  selectAll: df,
  selectChild: Wt.selectChild,
  selectChildren: Wt.selectChildren,
  filter: sf,
  merge: af,
  selection: pf,
  transition: Sf,
  call: Wt.call,
  nodes: Wt.nodes,
  node: Wt.node,
  size: Wt.size,
  empty: Wt.empty,
  each: Wt.each,
  on: uf,
  attr: Yu,
  attrTween: Gu,
  style: wf,
  styleTween: $f,
  text: Rf,
  textTween: kf,
  remove: cf,
  tween: Du,
  delay: Wu,
  duration: Qu,
  ease: ef,
  easeVarying: rf,
  end: Cf,
  [Symbol.iterator]: Wt[Symbol.iterator]
};
function Of(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Pf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Of
};
function Df(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function If(t) {
  var e, n;
  t instanceof ae ? (e = t._id, t = t._name) : (e = Bs(), (n = Pf).time = Jr(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && nr(o, t, e, f, a, n || Df(o, e));
  return new ae(r, this._parents, t, e);
}
qe.prototype.interrupt = Mu;
qe.prototype.transition = If;
const Nr = Math.PI, Tr = 2 * Nr, ge = 1e-6, Ff = Tr - ge;
function zs(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function qf(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return zs;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Lf {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? zs : qf(e);
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
    else if (c > ge) if (!(Math.abs(h * o - f * u) > ge) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, m = o * o + f * f, E = d * d + p * p, w = Math.sqrt(m), $ = Math.sqrt(c), b = s * Math.tan((Nr - Math.acos((m + c - E) / (2 * w * $))) / 2), S = b / $, P = b / w;
      Math.abs(S - 1) > ge && this._append`L${e + S * u},${n + S * h}`, this._append`A${s},${s},0,0,${+(h * d > u * p)},${this._x1 = e + P * o},${this._y1 = n + P * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), o = r * Math.sin(i), f = e + l, u = n + o, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${u}` : (Math.abs(this._x1 - f) > ge || Math.abs(this._y1 - u) > ge) && this._append`L${f},${u}`, r && (c < 0 && (c = c % Tr + Tr), c > Ff ? this._append`A${r},${r},0,1,${h},${e - l},${n - o}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = u}` : c > ge && this._append`A${r},${r},0,${+(c >= Nr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Vf(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Hf = Vf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function ot(t) {
  return function() {
    return t;
  };
}
const Pi = Math.abs, at = Math.atan2, _e = Math.cos, Yf = Math.max, dr = Math.min, Ht = Math.sin, Te = Math.sqrt, ht = 1e-12, en = Math.PI, Xn = en / 2, An = 2 * en;
function Bf(t) {
  return t > 1 ? 0 : t < -1 ? en : Math.acos(t);
}
function Di(t) {
  return t >= 1 ? Xn : t <= -1 ? -Xn : Math.asin(t);
}
function zf(t) {
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
  }, () => new Lf(e);
}
function Xf(t) {
  return t.innerRadius;
}
function Uf(t) {
  return t.outerRadius;
}
function Gf(t) {
  return t.startAngle;
}
function Kf(t) {
  return t.endAngle;
}
function jf(t) {
  return t && t.padAngle;
}
function Wf(t, e, n, r, i, s, a, l) {
  var o = n - t, f = r - e, u = a - i, h = l - s, c = h * o - u * f;
  if (!(c * c < ht))
    return c = (u * (e - s) - h * (t - i)) / c, [t + c * o, e + c * f];
}
function pn(t, e, n, r, i, s, a) {
  var l = t - n, o = e - r, f = (a ? s : -s) / Te(l * l + o * o), u = f * o, h = -f * l, c = t + u, d = e + h, p = n + u, m = r + h, E = (c + p) / 2, w = (d + m) / 2, $ = p - c, b = m - d, S = $ * $ + b * b, P = i - s, D = c * m - p * d, Y = (b < 0 ? -1 : 1) * Te(Yf(0, P * P * S - D * D)), G = (D * b - $ * Y) / S, K = (-D * $ - b * Y) / S, q = (D * b + $ * Y) / S, nt = (-D * $ + b * Y) / S, tt = G - E, T = K - w, M = q - E, _t = nt - w;
  return tt * tt + T * T > M * M + _t * _t && (G = q, K = nt), {
    cx: G,
    cy: K,
    x01: -u,
    y01: -h,
    x11: G * (i / P - 1),
    y11: K * (i / P - 1)
  };
}
function Jt() {
  var t = Xf, e = Uf, n = ot(0), r = null, i = Gf, s = Kf, a = jf, l = null, o = zf(f);
  function f() {
    var u, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - Xn, m = s.apply(this, arguments) - Xn, E = Pi(m - p), w = m > p;
    if (l || (l = u = o()), d < c && (h = d, d = c, c = h), !(d > ht)) l.moveTo(0, 0);
    else if (E > An - ht)
      l.moveTo(d * _e(p), d * Ht(p)), l.arc(0, 0, d, p, m, !w), c > ht && (l.moveTo(c * _e(m), c * Ht(m)), l.arc(0, 0, c, m, p, w));
    else {
      var $ = p, b = m, S = p, P = m, D = E, Y = E, G = a.apply(this, arguments) / 2, K = G > ht && (r ? +r.apply(this, arguments) : Te(c * c + d * d)), q = dr(Pi(d - c) / 2, +n.apply(this, arguments)), nt = q, tt = q, T, M;
      if (K > ht) {
        var _t = Di(K / c * Ht(G)), Gt = Di(K / d * Ht(G));
        (D -= _t * 2) > ht ? (_t *= w ? 1 : -1, S += _t, P -= _t) : (D = 0, S = P = (p + m) / 2), (Y -= Gt * 2) > ht ? (Gt *= w ? 1 : -1, $ += Gt, b -= Gt) : (Y = 0, $ = b = (p + m) / 2);
      }
      var Pt = d * _e($), Dt = d * Ht($), Tt = c * _e(P), It = c * Ht(P);
      if (q > ht) {
        var Kt = d * _e(b), fe = d * Ht(b), Ft = c * _e(S), jt = c * Ht(S), rt;
        if (E < en)
          if (rt = Wf(Pt, Dt, Ft, jt, Kt, fe, Tt, It)) {
            var $t = Pt - rt[0], gt = Dt - rt[1], y = Kt - rt[0], L = fe - rt[1], j = 1 / Ht(Bf(($t * y + gt * L) / (Te($t * $t + gt * gt) * Te(y * y + L * L))) / 2), B = Te(rt[0] * rt[0] + rt[1] * rt[1]);
            nt = dr(q, (c - B) / (j - 1)), tt = dr(q, (d - B) / (j + 1));
          } else
            nt = tt = 0;
      }
      Y > ht ? tt > ht ? (T = pn(Ft, jt, Pt, Dt, d, tt, w), M = pn(Kt, fe, Tt, It, d, tt, w), l.moveTo(T.cx + T.x01, T.cy + T.y01), tt < q ? l.arc(T.cx, T.cy, tt, at(T.y01, T.x01), at(M.y01, M.x01), !w) : (l.arc(T.cx, T.cy, tt, at(T.y01, T.x01), at(T.y11, T.x11), !w), l.arc(0, 0, d, at(T.cy + T.y11, T.cx + T.x11), at(M.cy + M.y11, M.cx + M.x11), !w), l.arc(M.cx, M.cy, tt, at(M.y11, M.x11), at(M.y01, M.x01), !w))) : (l.moveTo(Pt, Dt), l.arc(0, 0, d, $, b, !w)) : l.moveTo(Pt, Dt), !(c > ht) || !(D > ht) ? l.lineTo(Tt, It) : nt > ht ? (T = pn(Tt, It, Kt, fe, c, -nt, w), M = pn(Pt, Dt, Ft, jt, c, -nt, w), l.lineTo(T.cx + T.x01, T.cy + T.y01), nt < q ? l.arc(T.cx, T.cy, nt, at(T.y01, T.x01), at(M.y01, M.x01), !w) : (l.arc(T.cx, T.cy, nt, at(T.y01, T.x01), at(T.y11, T.x11), !w), l.arc(0, 0, c, at(T.cy + T.y11, T.cx + T.x11), at(M.cy + M.y11, M.cx + M.x11), w), l.arc(M.cx, M.cy, nt, at(M.y11, M.x11), at(M.y01, M.x01), !w))) : l.arc(0, 0, c, P, S, w);
    }
    if (l.closePath(), u) return l = null, u + "" || null;
  }
  return f.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - en / 2;
    return [_e(h) * u, Ht(h) * u];
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
function Jf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Zf(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Qf(t) {
  return t;
}
function vr() {
  var t = Qf, e = Zf, n = null, r = ot(0), i = ot(An), s = ot(0);
  function a(l) {
    var o, f = (l = Jf(l)).length, u, h, c = 0, d = new Array(f), p = new Array(f), m = +r.apply(this, arguments), E = Math.min(An, Math.max(-An, i.apply(this, arguments) - m)), w, $ = Math.min(Math.abs(E) / f, s.apply(this, arguments)), b = $ * (E < 0 ? -1 : 1), S;
    for (o = 0; o < f; ++o)
      (S = p[d[o] = o] = +t(l[o], o, l)) > 0 && (c += S);
    for (e != null ? d.sort(function(P, D) {
      return e(p[P], p[D]);
    }) : n != null && d.sort(function(P, D) {
      return n(l[P], l[D]);
    }), o = 0, h = c ? (E - f * b) / c : 0; o < f; ++o, m = w)
      u = d[o], S = p[u], w = m + (S > 0 ? S * h : 0) + b, p[u] = {
        data: l[u],
        index: o,
        value: S,
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
function Xe(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Xe.prototype = {
  constructor: Xe,
  scale: function(t) {
    return t === 1 ? this : new Xe(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Xe(this.k, this.x + this.k * t, this.y + this.k * e);
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
Xe.prototype;
const de = {}, kr = "No Further Rankings";
function Un(t, e) {
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
function Xs(t, e, n) {
  if (e < 1)
    return [];
  const r = t.results[e - 1].tallyResults, i = [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s][n];
    a != null && i.push(a);
  }
  return i;
}
function Gn(t, e) {
  return Xs(t, e, "eliminated");
}
function Kn(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(Xs(t, r, "elected"));
  return n;
}
var tc = /* @__PURE__ */ sl('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const ec = { hash: "svelte-3kpd", code: "" };
function Us(t, e) {
  Xr(e, !0), ps(t, ec);
  let n = ve(e, "jsonData", 7), r = ve(e, "currentRound", 15), i = ve(e, "mouseEventType", 15), s = ve(e, "mouseData", 15), a = ve(e, "mouseY", 15);
  const l = 800, o = 800, f = Math.min(l, o) * 0.3, u = l / 2, h = o / 2, c = "Pie", d = "Donut", p = "TextLayer", m = "#transfer", E = "url(#cross-hatch)", w = 1.15, $ = 0.1, b = 750, S = 800;
  let P = [], D = [], Y = [], G = 0, K = Zt(0), q = Zt(null);
  function nt() {
    const v = st(_(q));
    v.select("#" + c).remove(), v.select("#" + d).remove(), v.select("#" + p).remove();
  }
  function tt(v) {
    nt(), Y = T(v), P = Js(v, c, Y, u, h, 0, M());
  }
  cl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), fe(), setTimeout(
      () => {
        tt(r());
      },
      0
    );
  });
  function T(v) {
    const g = Kt(v);
    return G = Tt(v), g;
  }
  function M() {
    return f;
  }
  function _t() {
    return M() * 1.41;
  }
  function Gt(v, g) {
    if (v === "exhausted") return Un(n(), g);
    {
      const x = n().results[g - 1].tally;
      return Number(x[v]);
    }
  }
  function Pt(v, g) {
    return Gt(v, g).toLocaleString("en-US");
  }
  function Dt(v, g) {
    return (Gt(v, g) / G).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Tt(v) {
    const g = n().results[v - 1].tally;
    let x = 0;
    for (let [O, R] of Object.entries(g))
      x += Number(R);
    return x;
  }
  function It(v, g) {
    const x = n().results[g - 1].tallyResults;
    let O = 0;
    const R = x.findIndex((k) => (k == null ? void 0 : k.elected) && v == k.elected);
    if (R >= 0) {
      const k = x[R].transfers;
      if (k)
        for (let [N, C] of Object.entries(k)) O += Number(C);
    } else
      return 0;
    return O;
  }
  function Kt(v) {
    const g = n().results;
    let x = g[Math.max(0, v - 2)].tally;
    const O = [], R = [];
    for (let [N, C] of Object.entries(x))
      O.push({ label: N, value: 0 });
    x = g[v - 1].tally;
    for (let N of O) {
      const C = Number(x[N.label]), F = It(N.label, v);
      F > 0 ? (R.push({
        label: N.label + m,
        value: F
      }), N.value = C - F, R.push(N)) : (N.value = C, R.push(N));
    }
    const k = Un(n(), v);
    return R.push({ label: "exhausted", value: k }), R;
  }
  function fe() {
    const v = st(_(q)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [x, O] of Object.entries(n().results[0].tally)) {
      g < 10 ? de[x] = Hf[g] : de[x] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"), g++;
      {
        const R = v.clone(!0);
        R.attr("id", x.replaceAll(" ", "-")).select("rect").attr("fill", de[x]), R.select("path").attr("stroke", "#505050");
      }
    }
    de.exhausted = E, de["Inactive Ballots"] = E;
  }
  function Ft() {
    st(_(q)).select("#" + d).remove();
  }
  function jt(v) {
    const g = $n("global").duration(S);
    v && g.on("end", v), Ft(), sn(r() - 1), Zs(), ta(0, M()), ei();
  }
  function rt(v) {
    const g = $n("global").duration(S);
    v && g.on("end", v), an(r() - 1);
  }
  function $t(v) {
    const g = $n("global").duration(S);
    v && g.on("end", v), Le(r()), Ae(M());
  }
  function gt() {
    y = !1;
  }
  let y = !1;
  function L() {
    if (y) {
      console.warn("buttons locked out");
      return;
    }
    y = !0, j();
  }
  function j() {
    J(K, 0), B = mi(r);
    const v = r() < n().results.length - 1 ? j : gt;
    jt(() => {
      rt(() => {
        $t(v);
      });
    });
  }
  Dn(() => {
    it();
  });
  let B = 0;
  function it() {
    console.log(`previous round was ${B}, currentRound is ${r()}`), B != r() && (B == r() - 1 && B > 0 ? ut() : et(r()), B = r());
  }
  function et(v) {
    if (console.log("setRoundFn called"), y) {
      console.warn("buttons locked out");
      return;
    }
    console.log("past button lockout"), r(v), tt(r());
  }
  function ut() {
    if (console.log("animateOneRoundFn called"), y) {
      console.warn("buttons locked out");
      return;
    }
    if (console.log("past button lockout"), r() >= n().results.length) {
      y = !1;
      return;
    }
    y = !0, _(K) === 0 ? jt(() => {
      rt(() => {
        $t(gt);
      });
    }) : _(K) === 1 ? rt(() => {
      $t(gt);
    }) : _(K) === 2 && $t(gt);
  }
  function At() {
    if (console.log(`animateOnePhaseFn called, currentRound = ${r()}, displayPhase = ${_(K)}`), r() >= n().results.length) {
      ei();
      return;
    }
    J(K, (_(K) + 1) % 3), y = !0, _(K) === 1 ? (B = mi(r), jt(gt)) : _(K) === 2 ? rt(gt) : _(K) === 0 ? $t(gt) : (y = !1, console.warn("displayPhase out of range at ", _(K)));
  }
  function Le(v) {
    Y = Kt(v), P = ea(v, c, Y, 0, M(), !0);
  }
  function Ae(v, g) {
    vr().sort(null).value((C) => C.value);
    const x = st(_(q)).select("#" + d), O = Jt().outerRadius(v).innerRadius(v - 1), R = x.selectAll(".slice");
    let k = R.size();
    function N() {
      k--, k === 0 && Qs();
    }
    R.select("path").transition("global").duration(b).attr("d", (C) => O(C)).on("end", (C) => N());
  }
  function sn(v) {
    const g = Gs(v, P);
    D = ni(v, d, g, u, h, M(), _t(), !1, !0);
  }
  function an(v) {
    const g = js(v, D, P);
    D = ri(
      v,
      d,
      g,
      /* previousDonutInfoGlobal, */
      M(),
      _t(),
      !1
    );
  }
  function qt(v) {
    const g = v.data.label;
    return de[g.split("#")[0]];
  }
  function ln(v) {
    const g = {}, x = n().results[v - 1].tallyResults;
    for (let O = 0; O < x.length; O++) {
      let R = x[O].eliminated;
      if (R === void 0 && (R = x[O].elected), R === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const k = x[O].transfers;
      if (k === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [N, C] of Object.entries(k))
        g[N] === void 0 ? g[N] = Number(C) : g[N] += Number(C);
    }
    return g;
  }
  function Gs(v, g) {
    console.log(`makeDonutInfo: round = ${v}`);
    const x = [], O = G, R = n().results[v - 1].tallyResults;
    for (let k = 0; k < R.length; k++) {
      let N = R[k].eliminated;
      if (N === void 0 && (N = R[k].elected), N === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const C = R[k].transfers;
      if (C === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let F = g.find((I) => I.data.label == N + m);
      F === void 0 && (F = g.find((I) => I.data.label == N));
      let V = 0;
      if (F) V = F.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [I, H] of Object.entries(C)) {
        let W;
        const Lt = g.find((Q) => Q.data.label == I);
        if (Lt)
          W = structuredClone(Lt);
        else if (I == "exhausted")
          W = {
            data: { label: I, value: Number(H) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (I == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", H);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", I);
          continue;
        }
        const A = Number(H) / O * 2 * Math.PI;
        W.startAngle = V, V = W.endAngle = V + A, W.index = k, W.data.label = `${W.data.label}#${k}`, x.push(W);
      }
    }
    return x;
  }
  function Ks(v, g, x) {
    const O = {};
    for (let [R, k] of Object.entries(v)) {
      const N = x.find((V) => R == V.data.label);
      if (N === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", R);
        continue;
      }
      const C = (N.startAngle + N.endAngle) / 2, F = v[N.data.label] / g * 2 * Math.PI;
      O[N.data.label] = C - F / 2;
    }
    return O;
  }
  function js(v, g, x) {
    const O = [], R = G, k = ln(v), N = Ks(k, R, x);
    for (let [C, F] of g.entries()) {
      const V = structuredClone(F), I = F.endAngle - F.startAngle, H = x.find((W) => F.data.label.indexOf(W.data.label) === 0);
      if (H) {
        const W = H.data.label;
        V.startAngle = N[W], N[W] += I, V.endAngle = V.startAngle + I;
      } else if (F.data.label.indexOf("exhausted") === 0)
        V.startAngle = F.startAngle, V.endAngle = F.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", F.data.label);
        continue;
      }
      V.index = C, O.push(V);
    }
    return O;
  }
  function ti(v, g, x, O, R, k) {
    const C = st(_(q)).append("g").attr("id", p).attr("transform", `translate(${x}, ${O})`), F = Jt().innerRadius(R * w).outerRadius(R * w);
    C.selectAll("text").data(g).enter().each(function(V) {
      V.endAngle - V.startAngle < $ || V.data.label.includes(m) || st(this).append("g").attr("id", (I) => I.data.label).classed("eliminated", (I) => k.includes(I.data.label.split("#")[0]) || I.data.label.includes(m)).each(function(I, H) {
        I.data.label === "exhausted" && st(this).on("mouseenter", (W, Lt) => na(W)).on("mouseleave", (W, Lt) => ra());
      }).append("text").attr("transform", (I) => `translate(${F.centroid(I)})`).attr("text-anchor", (I) => rr(I.startAngle, I.endAngle)).text((I) => I.data.label === "exhausted" ? kr : I.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((I) => Pt(I.data.label, v) + " (" + Dt(I.data.label, v) + ")");
    });
  }
  function Ws(v, g, x, O) {
    const k = st(_(q)).select("#" + p), N = k.selectAll("tspan"), C = k.selectAll("g").data(g, (H) => H.data.label).classed("eliminated", (H) => O.includes(H.data.label.split("#")[0]) || H.data.label.includes(m)), F = Jt().innerRadius(x * w).outerRadius(x * w + 1);
    N.transition("global").duration(b).attr("transform", (H) => `translate(${F.centroid(H)})`).attr("text-anchor", (H) => rr(H.startAngle, H.endAngle)), C.select("text").transition("global").duration(b).attr("transform", (H) => `translate(${F.centroid(H)})`).attr("text-anchor", (H) => rr(H.startAngle, H.endAngle)).on("end", (H) => I());
    let V = C.size();
    function I(H) {
      V--, V === 0 && (k.remove(), ti(v, g, u, h, x, O));
    }
  }
  function Js(v, g, x, O, R, k, N, C = !0, F = !1) {
    const I = vr().sort(null).value((H) => H.value)(x);
    return ni(v, g, I, O, R, k, N, C, F), I;
  }
  function ei() {
    st(_(q)).select("#" + c).selectAll(".elected").style("stroke", "darkblue").style("stroke-width", "2px");
  }
  function ni(v, g, x, O, R, k, N, C, F) {
    const V = Gn(n(), v), I = Kn(n(), v), Lt = st(_(q)).attr("width", "100%").attr("height", o).attr("viewBox", `0 0 ${l} ${o}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", g).attr("transform", `translate(${O}, ${R})`).selectAll(".slice").data(x).enter().append("g").attr("class", "slice").classed("eliminated", (A) => V.includes(A.data.label.split("#")[0]) || A.data.label.includes(m)).classed("elected", (A) => I.includes(A.data.label.split("#")[0]) && !A.data.label.includes(m)).attr("id", (A) => A.data.label).on("mouseenter", (A, Q) => sr(A, Q)).on("mouseleave", (A, Q) => ar(A, Q)), Ve = Jt().outerRadius(N).innerRadius(k);
    if (F) {
      const A = Jt().outerRadius(k + 1).innerRadius(k);
      Lt.append("path").attr("d", A).transition("global").duration(b).attr("d", (Q) => Ve(Q)).attr("fill", (Q) => qt(Q)).on("end", (Q) => ir());
    } else
      Lt.append("path").attr("d", (A) => Ve(A)).attr("fill", (A) => qt(A)), ir();
    return C && ti(v, x, O, R, N, V), x;
  }
  function Zs() {
    const x = st(_(q)).select("#" + p).selectAll(".eliminated");
    x.size() > 0 && x.classed("finished", !0);
  }
  function Qs() {
    const x = st(_(q)).select("#" + p).selectAll(".finished");
    x.size() > 0 && x.remove();
  }
  function ta(v, g) {
    const R = st(_(q)).select("#" + c).selectAll(".eliminated"), k = Jt().innerRadius(v), N = Jt().outerRadius(g);
    R.classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(C) {
      const F = Ne(g, v);
      return function(V) {
        return N.innerRadius(F(V)), N(C);
      };
    }).attr("fill", (C) => `url(#${C.data.label.split("#")[0].replaceAll(" ", "-")})`), R.clone(!0).classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(C) {
      const F = Ne(g, v);
      return function(V) {
        return k.outerRadius(F(V)), k(C);
      };
    }).attr("fill", (C) => qt(C));
  }
  function rr(v, g) {
    const x = (v + g) / 2;
    return x > Math.PI * 11 / 6 || x < Math.PI * 1 / 6 || x > Math.PI * 5 / 6 && x < Math.PI * 7 / 6 ? "middle" : x < Math.PI ? "start" : "end";
  }
  function ir() {
    st(_(q)).select("#" + p).raise().append("g").remove();
  }
  function ea(v, g, x, O, R, k) {
    const C = vr().sort(null).value((F) => F.value)(x);
    return ri(
      v,
      g,
      C,
      /* previousPieInfo, */
      O,
      R,
      k
    ), C;
  }
  function ri(v, g, x, O, R, k) {
    const N = Gn(n(), v), C = Kn(n(), v), F = Jt().outerRadius(R).innerRadius(O).startAngle((A) => A.startAngle).endAngle((A) => A.endAngle), V = Jt().outerRadius(R).innerRadius(O), H = st(_(q)).select("#" + g);
    H.selectAll(".slice").attr("prevStart", (A) => A.startAngle).attr("prevEnd", (A) => A.endAngle);
    const W = H.selectAll(".slice").data(x, (A) => A.data.label);
    W.enter().append("g").attr("class", "slice").attr("id", (A) => A.data.label).classed("eliminated", !0).on("mouseenter", (A, Q) => sr(A, Q)).on("mouseleave", (A, Q) => ar(A, Q)).append("path").attr("d", (A) => V(A)).attr("fill", (A) => qt(A)), W.classed("eliminated", (A) => N.includes(A.data.label.split("#")[0])).classed("elected", (A) => C.includes(A.data.label.split("#")[0])).on("mouseenter", (A, Q) => sr(A, Q)).on("mouseleave", (A, Q) => ar(A, Q));
    let Lt = W.size();
    function Ve() {
      Lt--, Lt <= 0 && (ir(), H.selectAll(".finished").remove());
    }
    return W.select("path").transition("global").duration(b).attrTween("d", function(A) {
      const Q = Number(st(this.parentNode).attr("prevStart")), ia = Number(st(this.parentNode).attr("prevEnd")), sa = Ne(Q, A.startAngle), aa = Ne(ia, A.endAngle);
      return (si) => (F.startAngle(sa(si)).endAngle(aa(si)), F(A));
    }).on("end", Ve), k && Ws(v, x, R, N), x;
  }
  function sr(v, g) {
    s(g.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function ar(v, g) {
    s(g.data.label.split("#")[0]), i("leave");
  }
  function na(v, g) {
    i("show-exhausted"), a(v.clientY);
  }
  function ra(v, g) {
    i("hide-exhausted");
  }
  var ii = tc();
  return mn(ii, (v) => J(q, v), () => _(q)), ce(t, ii), Ur({
    runFullAnimationFn: L,
    animateOnePhaseFn: At,
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), ee();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v) {
      r(v), ee();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), ee();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), ee();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), ee();
    }
  });
}
gs(
  Us,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseY: {}
  },
  [],
  ["runFullAnimationFn", "animateOnePhaseFn"],
  !0
);
function nc(t) {
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
var rc = /* @__PURE__ */ Fe("<span> </span> &nbsp;", 1), ic = /* @__PURE__ */ Fe("About to eliminate: <!>", 1), sc = /* @__PURE__ */ Fe("<span> </span> &nbsp;", 1), ac = /* @__PURE__ */ Fe("Elected: <!>", 1), lc = /* @__PURE__ */ Fe("<span> </span> <br>", 1), oc = /* @__PURE__ */ Fe('<div class="animation-button-container svelte-hac7qn"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="page-container svelte-hac7qn"><div class="common-header svelte-hac7qn"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-hac7qn"><h3 class="svelte-hac7qn"> </h3> <!></div> <div class="tooltip svelte-hac7qn"> <br> these ballots have already been eliminated.</div> <div class="visualizations-container svelte-hac7qn"><div class="pie-chart-container svelte-hac7qn"><!></div></div></div>', 1);
const uc = {
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
function fc(t, e) {
  Xr(e, !0), ps(t, uc);
  const n = 0.85;
  let r = ve(e, "electionSummary", 7), i = ve(e, "currentRound", 7), s = ve(e, "onRoundChanged", 7, (y) => {
  });
  Dn(() => {
    s() && s()(i());
  });
  let a = Zt(null), l = Zt(null), o = Zt(""), f = Zt(xt([])), u = Zt(""), h = Zt(""), c = Zt(0), d = /* @__PURE__ */ Wn(() => p(r()));
  function p(y) {
    if (typeof y == "string")
      try {
        y = JSON.parse(y);
      } catch (L) {
        return console.error("Failed to parse JSON string:", L), {};
      }
    return console.log("RCtabSummary object status: ", nc(y)), y || {};
  }
  function m() {
    switch (_(u)) {
      case "enter":
        ((y) => (J(f, xt(y[0])), J(o, xt(y[1]))))(w(_(h), i())), _(a) && (_(a).style.top = String(_(c) || 20) + "px", _(a).style.opacity = String(n));
        break;
      case "leave":
        _(a) && (_(a).style.opacity = "0"), J(f, xt([])), J(o, "");
        break;
      case "show-exhausted":
        _(l) && (_(l).style.top = String(_(c) || 20) + "px", _(l).style.opacity = String(n));
        break;
      case "hide-exhausted":
        _(l) && (_(l).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", _(u));
        break;
    }
  }
  Dn(() => m());
  function E(y, L) {
    return y == 1 ? L ? "vote was" : "vote will be" : L ? "votes were" : "votes will be";
  }
  function w(y, L) {
    const j = [], B = y === "exhausted" ? kr : y;
    let it;
    y == "exhausted" ? it = Un(_(d), 1) : it = _(d).results[0].tally[y], j.push(`${B} started with ${it} votes.`);
    for (let et = 1; et <= L; et++) {
      et === L && (y == "exhausted" ? it = Un(_(d), L) : it = _(d).results[L - 1].tally[y], j.push(`${B} has ${it} votes at round ${L}.`));
      const ut = _(d).results[et - 1].tallyResults;
      for (let At = 0; At < ut.length; At++) {
        const Le = ut[At].transfers, Ae = ut[At].eliminated, sn = ut[At].elected;
        if (Ae)
          Ae === y && j.push(`${B} will be eliminated on round ${et}.`);
        else if (y === sn && (j.push(`${B} was elected on round ${et}.`), Le))
          for (let [qt, ln] of Object.entries(Le))
            j.push(`${ln} ${E(Number(ln), et < L)} transferred to ${qt} on round ${et}.`);
        const an = Ae || sn;
        if (an) {
          const qt = Number(Le[y]);
          qt && j.push(`${qt} ${E(qt, et < L)} transferred from ${an} on round ${et}.`);
        }
      }
    }
    return [j, B];
  }
  function $() {
    let y = 0;
    for (let L = 1; L <= _(d).results.length; L++) {
      const j = _(d).results[L - 1].tallyResults;
      for (let B = 0; B < j.length; B++)
        j[B].elected && y++;
    }
    return y;
  }
  let b;
  function S() {
    b && b.animateOnePhaseFn && b.animateOnePhaseFn();
  }
  function P() {
    b && b.runFullAnimationFn && b.runFullAnimationFn();
  }
  var D = oc(), Y = Ee(D), G = yt(Y);
  G.__click = P;
  var K = Vt(G, 2);
  K.__click = S, mt(Y);
  var q = Vt(Y, 2), nt = yt(q), tt = yt(nt), T = yt(tt);
  mt(tt);
  var M = Vt(tt, 2), _t = yt(M);
  {
    var Gt = (y) => {
      var L = ic(), j = Vt(Ee(L));
      fr(j, 17, () => Gn(_(d), i()), ur, (B, it) => {
        var et = rc(), ut = Ee(et), At = yt(ut, !0);
        mt(ut), on(), un(() => {
          _i(ut, "color", de[_(it)]), He(At, _(it));
        }), ce(B, et);
      }), ce(y, L);
    };
    vi(_t, (y) => {
      Gn(_(d), i()).length > 0 && y(Gt);
    });
  }
  var Pt = Vt(_t, 2);
  {
    var Dt = (y) => {
      var L = ac(), j = Vt(Ee(L));
      fr(j, 17, () => Kn(_(d), i()), ur, (B, it) => {
        var et = sc(), ut = Ee(et), At = yt(ut, !0);
        mt(ut), on(), un(() => {
          _i(ut, "color", de[_(it)]), He(At, _(it));
        }), ce(B, et);
      }), ce(y, L);
    };
    vi(Pt, (y) => {
      Kn(_(d), i()).length > 0 && y(Dt);
    });
  }
  mt(M), mt(nt);
  var Tt = Vt(nt, 2), It = yt(Tt), Kt = yt(It, !0);
  mt(It);
  var fe = Vt(It, 2);
  fr(fe, 17, () => _(f), ur, (y, L) => {
    var j = lc(), B = Ee(j), it = yt(B, !0);
    mt(B), on(2), un(() => He(it, _(L))), ce(y, j);
  }), mt(Tt), mn(Tt, (y) => J(a, y), () => _(a));
  var Ft = Vt(Tt, 2), jt = yt(Ft);
  jt.nodeValue = `"${kr}" means all the candidates ranked on `, on(2), mt(Ft), mn(Ft, (y) => J(l, y), () => _(l));
  var rt = Vt(Ft, 2), $t = yt(rt), gt = yt($t);
  return mn(
    Us(gt, {
      get jsonData() {
        return _(d);
      },
      get currentRound() {
        return i();
      },
      set currentRound(y) {
        i(y);
      },
      get mouseEventType() {
        return _(u);
      },
      set mouseEventType(y) {
        J(u, xt(y));
      },
      get mouseData() {
        return _(h);
      },
      set mouseData(y) {
        J(h, xt(y));
      },
      get mouseY() {
        return _(c);
      },
      set mouseY(y) {
        J(c, xt(y));
      }
    }),
    (y) => b = y,
    () => b
  ), mt($t), mt(rt), mt(q), un(
    (y) => {
      He(T, `${_(d).config.contest ?? ""}, ${y ?? ""} to be elected, Round ${i() ?? ""}.`), He(Kt, _(o));
    },
    [$]
  ), ce(t, D), Ur({
    get electionSummary() {
      return r();
    },
    set electionSummary(y) {
      r(y), ee();
    },
    get currentRound() {
      return i();
    },
    set currentRound(y) {
      i(y), ee();
    },
    get onRoundChanged() {
      return s();
    },
    set onRoundChanged(y = (L) => {
    }) {
      s(y), ee();
    }
  });
}
il(["click"]);
customElements.define("pie-chart", gs(
  fc,
  {
    electionSummary: {},
    currentRound: {},
    onRoundChanged: {}
  },
  [],
  [],
  !0
));
