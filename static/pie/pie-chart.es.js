var ua = Object.defineProperty;
var ai = (t) => {
  throw TypeError(t);
};
var fa = (t, e, n) => e in t ? ua(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var St = (t, e, n) => fa(t, typeof e != "symbol" ? e + "" : e, n), li = (t, e, n) => e.has(t) || ai("Cannot " + n);
var dt = (t, e, n) => (li(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ar = (t, e, n) => e.has(t) ? ai("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), lr = (t, e, n, r) => (li(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ca = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ca);
const ha = 1, da = 2, va = 16, pa = 1, _a = 4, ga = 8, ma = 16, ya = 2, Ii = "[", Sr = "[!", Cr = "]", Xe = {}, vt = Symbol(), oi = !1, Dt = 2, Fi = 4, Mr = 8, Or = 16, re = 32, Oe = 64, An = 128, Rt = 256, En = 512, mt = 1024, ie = 2048, Pe = 4096, Qt = 8192, Kn = 16384, wa = 32768, Pr = 65536, xa = 1 << 19, qi = 1 << 20, Ue = Symbol("$state"), Li = Symbol("legacy props");
var Dr = Array.isArray, ba = Array.prototype.indexOf, Ir = Array.from, Rn = Object.keys, Nn = Object.defineProperty, me = Object.getOwnPropertyDescriptor, $a = Object.prototype, Aa = Array.prototype, Ea = Object.getPrototypeOf;
function Vi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let Ke = [], vr = [];
function Hi() {
  var t = Ke;
  Ke = [], Vi(t);
}
function Ra() {
  var t = vr;
  vr = [], Vi(t);
}
function Yi(t) {
  Ke.length === 0 && queueMicrotask(Hi), Ke.push(t);
}
function ui() {
  Ke.length > 0 && Hi(), vr.length > 0 && Ra();
}
function Bi(t) {
  return t === this.v;
}
function Na(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Fr(t) {
  return !Na(t, this.v);
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sa(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ca() {
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
    equals: Bi,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ct(t) {
  return /* @__PURE__ */ La(Et(t));
}
// @__NO_SIDE_EFFECTS__
function qr(t, e = !1) {
  const n = Et(t);
  return e || (n.equals = Fr), n;
}
// @__NO_SIDE_EFFECTS__
function La(t) {
  return U !== null && !Ot && U.f & Dt && (Bt === null ? Ba([t]) : Bt.push(t)), t;
}
function j(t, e) {
  return U !== null && !Ot && us() && U.f & (Dt | Or) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Bt === null || !Bt.includes(t)) && Fa(), zi(t, e);
}
function zi(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = Qi(), Xi(t, ie), G !== null && G.f & mt && !(G.f & (re | Oe)) && (Wt === null ? za([t]) : Wt.push(t))), e;
}
function Xi(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & ie || (te(s, e), a & (mt | Rt) && (a & Dt ? Xi(
        /** @type {Derived} */
        s,
        Pe
      ) : Zn(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function jn(t) {
  var e = Dt | ie, n = U !== null && U.f & Dt ? (
    /** @type {Derived} */
    U
  ) : null;
  return G === null || n !== null && n.f & Rt ? e |= Rt : G.f |= qi, {
    ctx: gt,
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
    parent: n ?? G
  };
}
// @__NO_SIDE_EFFECTS__
function Va(t) {
  const e = /* @__PURE__ */ jn(t);
  return e.equals = Fr, e;
}
function Ui(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      ee(
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
  var e, n = G;
  Se(Ha(t));
  try {
    Ui(t), e = es(t);
  } finally {
    Se(n);
  }
  return e;
}
function Gi(t) {
  var e = Ya(t), n = (de || t.f & Rt) && t.deps !== null ? Pe : mt;
  te(t, n), t.equals(e) || (t.v = e, t.wv = Qi());
}
function Lr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Z = !1;
function Zt(t) {
  Z = t;
}
let X;
function Xt(t) {
  if (t === null)
    throw Lr(), Xe;
  return X = t;
}
function Wn() {
  return Xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ se(X)
  );
}
function yt(t) {
  if (Z) {
    if (/* @__PURE__ */ se(X) !== null)
      throw Lr(), Xe;
    X = t;
  }
}
function on(t = 1) {
  if (Z) {
    for (var e = t, n = X; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ se(n);
    X = n;
  }
}
function pr() {
  for (var t = 0, e = X; ; ) {
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
      /* @__PURE__ */ se(e)
    );
    e.remove(), e = r;
  }
}
function lt(t, e = null, n) {
  if (typeof t != "object" || t === null || Ue in t)
    return t;
  const r = Ea(t);
  if (r !== $a && r !== Aa)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Dr(t), a = Et(0);
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
        return h === void 0 ? (h = Et(u.value), i.set(f, h)) : j(h, lt(u.value, l)), !0;
      },
      deleteProperty(o, f) {
        var u = i.get(f);
        if (u === void 0)
          f in o && i.set(f, Et(vt));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && j(h, c);
          }
          j(u, vt), fi(a);
        }
        return !0;
      },
      get(o, f, u) {
        var p;
        if (f === Ue)
          return t;
        var h = i.get(f), c = f in o;
        if (h === void 0 && (!c || (p = me(o, f)) != null && p.writable) && (h = Et(lt(c ? o[f] : vt, l)), i.set(f, h)), h !== void 0) {
          var d = g(h);
          return d === vt ? void 0 : d;
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
          if (c !== void 0 && d !== vt)
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
        if (f === Ue)
          return !0;
        var u = i.get(f), h = u !== void 0 && u.v !== vt || Reflect.has(o, f);
        if (u !== void 0 || G !== null && (!h || (d = me(o, f)) != null && d.writable)) {
          u === void 0 && (u = Et(h ? lt(o[f], l) : vt), i.set(f, u));
          var c = g(u);
          if (c === vt)
            return !1;
        }
        return h;
      },
      set(o, f, u, h) {
        var E;
        var c = i.get(f), d = f in o;
        if (s && f === "length")
          for (var p = u; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var _ = i.get(p + "");
            _ !== void 0 ? j(_, vt) : p in o && (_ = Et(vt), i.set(p + "", _));
          }
        c === void 0 ? (!d || (E = me(o, f)) != null && E.writable) && (c = Et(void 0), j(c, lt(u, l)), i.set(f, c)) : (d = c.v !== vt, j(c, lt(u, l)));
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b != null && b.set && b.set.call(h, u), !d) {
          if (s && typeof f == "string") {
            var y = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(f);
            Number.isInteger($) && $ >= y.v && j(y, $ + 1);
          }
          fi(a);
        }
        return !0;
      },
      ownKeys(o) {
        g(a);
        var f = Reflect.ownKeys(o).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== vt;
        });
        for (var [u, h] of i)
          h.v !== vt && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Da();
      }
    }
  );
}
function fi(t, e = 1) {
  j(t, t.v + e);
}
var ci, Ki, ji, Wi;
function _r() {
  if (ci === void 0) {
    ci = window, Ki = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    ji = me(e, "firstChild").get, Wi = me(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Tn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function we(t) {
  return ji.call(t);
}
// @__NO_SIDE_EFFECTS__
function se(t) {
  return Wi.call(t);
}
function wt(t, e) {
  if (!Z)
    return /* @__PURE__ */ we(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(X)
  );
  if (n === null)
    n = X.appendChild(Tn());
  else if (e && n.nodeType !== 3) {
    var r = Tn();
    return n == null || n.before(r), Xt(r), r;
  }
  return Xt(n), n;
}
function Ae(t, e) {
  if (!Z) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ we(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ se(n) : n;
  }
  return X;
}
function Lt(t, e = 1, n = !1) {
  let r = Z ? X : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ se(r);
  if (!Z)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = Tn();
    return r === null ? i == null || i.after(a) : r.before(a), Xt(a), a;
  }
  return Xt(r), /** @type {TemplateNode} */
  r;
}
function Ji(t) {
  t.textContent = "";
}
let _n = !1, kn = !1, Sn = null, gn = !1, Vr = !1;
function hi(t) {
  Vr = t;
}
let Ge = [];
let U = null, Ot = !1;
function ke(t) {
  U = t;
}
let G = null;
function Se(t) {
  G = t;
}
let Bt = null;
function Ba(t) {
  Bt = t;
}
let ot = null, xt = 0, Wt = null;
function za(t) {
  Wt = t;
}
let Zi = 1, Cn = 0, de = !1;
function Qi() {
  return ++Zi;
}
function en(t) {
  var h;
  var e = t.f;
  if (e & ie)
    return !0;
  if (e & Pe) {
    var n = t.deps, r = (e & Rt) !== 0;
    if (n !== null) {
      var i, s, a = (e & En) !== 0, l = r && G !== null && !de, o = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < o; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= En), l && u !== null && !(u.f & Rt) && (f.f ^= Rt);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], en(
          /** @type {Derived} */
          s
        ) && Gi(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || G !== null && !de) && te(t, mt);
  }
  return !1;
}
function Xa(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & An)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= An;
      }
    n = n.parent;
  }
  throw _n = !1, t;
}
function Ua(t) {
  return (t.f & Kn) === 0 && (t.parent === null || (t.parent.f & An) === 0);
}
function Jn(t, e, n, r) {
  if (_n) {
    if (n === null && (_n = !1), Ua(e))
      throw t;
    return;
  }
  n !== null && (_n = !0);
  {
    Xa(t, e);
    return;
  }
}
function ts(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Dt ? ts(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? te(s, ie) : s.f & mt && te(s, Pe), Zn(
        /** @type {Effect} */
        s
      ));
    }
}
function es(t) {
  var d;
  var e = ot, n = xt, r = Wt, i = U, s = de, a = Bt, l = gt, o = Ot, f = t.f;
  ot = /** @type {null | Value[]} */
  null, xt = 0, Wt = null, de = (f & Rt) !== 0 && (Ot || !gn || U === null), U = f & (re | Oe) ? null : t, Bt = null, di(t.ctx), Ot = !1, Cn++;
  try {
    var u = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (ot !== null) {
      var c;
      if (Mn(t, xt), h !== null && xt > 0)
        for (h.length = xt + ot.length, c = 0; c < ot.length; c++)
          h[xt + c] = ot[c];
      else
        t.deps = h = ot;
      if (!de)
        for (c = xt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && xt < h.length && (Mn(t, xt), h.length = xt);
    if (us() && Wt !== null && !Ot && h !== null && !(t.f & (Dt | Pe | ie)))
      for (c = 0; c < /** @type {Source[]} */
      Wt.length; c++)
        ts(
          Wt[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Cn++, u;
  } finally {
    ot = e, xt = n, Wt = r, U = i, de = s, Bt = a, di(l), Ot = o;
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
  n === null && e.f & Dt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !ot.includes(e)) && (te(e, Pe), e.f & (Rt | En) || (e.f ^= En), Ui(
    /** @type {Derived} **/
    e
  ), Mn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Mn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ga(t, n[r]);
}
function Hr(t) {
  var e = t.f;
  if (!(e & Kn)) {
    te(t, mt);
    var n = G, r = gt, i = gn;
    G = t, gn = !0;
    try {
      e & Or ? nl(t) : ss(t), is(t);
      var s = es(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Zi;
      var a = t.deps, l;
      oi && qa && t.f & ie;
    } catch (o) {
      Jn(o, t, n, r || t.ctx);
    } finally {
      gn = i, G = n;
    }
  }
}
function Ka() {
  try {
    Ca();
  } catch (t) {
    if (Sn !== null)
      Jn(t, Sn, null);
    else
      throw t;
  }
}
function ns() {
  try {
    for (var t = 0; Ge.length > 0; ) {
      t++ > 1e3 && Ka();
      var e = Ge, n = e.length;
      Ge = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & mt || (i.f ^= mt);
        var s = Wa(i);
        ja(s);
      }
    }
  } finally {
    kn = !1, Sn = null;
  }
}
function ja(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Kn | Qt)))
        try {
          en(r) && (Hr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? as(r) : r.fn = null));
        } catch (i) {
          Jn(i, r, null, r.ctx);
        }
    }
}
function Zn(t) {
  kn || (kn = !0, queueMicrotask(ns));
  for (var e = Sn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (Oe | re)) {
      if (!(n & mt)) return;
      e.f ^= mt;
    }
  }
  Ge.push(e);
}
function Wa(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & re) !== 0, s = i && (r & mt) !== 0;
    if (!s && !(r & Qt)) {
      if (r & Fi)
        e.push(n);
      else if (i)
        n.f ^= mt;
      else {
        var a = U;
        try {
          U = n, en(n) && Hr(n);
        } catch (f) {
          Jn(f, n, null, n.ctx);
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
function Mt(t) {
  var e;
  for (ui(); Ge.length > 0; )
    kn = !0, ns(), ui();
  return (
    /** @type {T} */
    e
  );
}
function g(t) {
  var e = t.f, n = (e & Dt) !== 0;
  if (U !== null && !Ot) {
    Bt !== null && Bt.includes(t) && Ia();
    var r = U.deps;
    t.rv < Cn && (t.rv = Cn, ot === null && r !== null && r[xt] === t ? xt++ : ot === null ? ot = [t] : (!de || !ot.includes(t)) && ot.push(t));
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
  t, en(i) && Gi(i)), t.v;
}
function On(t) {
  var e = Ot;
  try {
    return Ot = !0, t();
  } finally {
    Ot = e;
  }
}
const Ja = -7169;
function te(t, e) {
  t.f = t.f & Ja | e;
}
function Za(t) {
  G === null && U === null && Sa(), U !== null && U.f & Rt && G === null && ka(), Vr && Ta();
}
function Qa(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function De(t, e, n, r = !0) {
  var i = (t & Oe) !== 0, s = G, a = {
    ctx: gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | ie,
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
      Hr(a), a.f |= wa;
    } catch (f) {
      throw ee(a), f;
    }
  else e !== null && Zn(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (qi | An)) === 0;
  if (!l && !i && r && (s !== null && Qa(a, s), U !== null && U.f & Dt)) {
    var o = (
      /** @type {Derived} */
      U
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return a;
}
function Pn(t) {
  Za();
  var e = G !== null && (G.f & re) !== 0 && gt !== null && !gt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      gt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: G,
      reaction: U
    });
  } else {
    var r = Yr(t);
    return r;
  }
}
function tl(t) {
  const e = De(Oe, t, !0);
  return () => {
    ee(e);
  };
}
function el(t) {
  const e = De(Oe, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dn(e, () => {
      ee(e), r(void 0);
    }) : (ee(e), r(void 0));
  });
}
function Yr(t) {
  return De(Fi, t, !1);
}
function rs(t) {
  return De(Mr, t, !0);
}
function un(t, e = [], n = jn) {
  const r = e.map(n);
  return Br(() => t(...r.map(g)));
}
function Br(t, e = 0) {
  return De(Mr | Or | e, t, !0);
}
function je(t, e = !0) {
  return De(Mr | re, t, !0, e);
}
function is(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Vr, r = U;
    hi(!0), ke(null);
    try {
      e.call(null);
    } finally {
      hi(n), ke(r);
    }
  }
}
function ss(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    ee(n, e), n = r;
  }
}
function nl(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & re || ee(e), e = n;
  }
}
function ee(t, e = !0) {
  var n = !1;
  if ((e || t.f & xa) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ se(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  ss(t, e && !n), Mn(t, 0), te(t, Kn);
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
function Dn(t, e) {
  var n = [];
  zr(t, n, !0), ls(n, () => {
    ee(t), e && e();
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
  if (!(t.f & Qt)) {
    if (t.f ^= Qt, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Pr) !== 0 || (r.f & re) !== 0;
      zr(r, e, s ? n : !1), r = i;
    }
  }
}
function In(t) {
  os(t, !0);
}
function os(t, e) {
  if (t.f & Qt) {
    t.f ^= Qt, t.f & mt || (t.f ^= mt), en(t) && (te(t, ie), Zn(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Pr) !== 0 || (n.f & re) !== 0;
      os(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function rl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let gt = null;
function di(t) {
  gt = t;
}
function Xr(t, e = !1, n) {
  gt = {
    p: gt,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Ur(t) {
  const e = gt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = G, r = U;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Se(s.effect), ke(s.reaction), Yr(s.fn);
        }
      } finally {
        Se(n), ke(r);
      }
    }
    gt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function us() {
  return !0;
}
const il = ["touchstart", "touchmove"];
function sl(t) {
  return il.includes(t);
}
const fs = /* @__PURE__ */ new Set(), gr = /* @__PURE__ */ new Set();
function al(t) {
  for (var e = 0; e < t.length; e++)
    fs.add(t[e]);
  for (var n of gr)
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
    Nn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = U, h = G;
    ke(null), Se(null);
    try {
      for (var c, d = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var _ = s["__" + r];
          if (_ !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (Dr(_)) {
              var [b, ...y] = _;
              b.apply(s, [t, ...y]);
            } else
              _.call(s, t);
        } catch (E) {
          c ? d.push(E) : c = E;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let E of d)
          queueMicrotask(() => {
            throw E;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ke(u), Se(h);
    }
  }
}
function cs(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function We(t, e) {
  var n = (
    /** @type {Effect} */
    G
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Ie(t, e) {
  var n = (e & ya) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return We(X, null), X;
    r === void 0 && (r = cs(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || Ki ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      We(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ll(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return We(X, null), X;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        cs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ we(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ we(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return We(o, o), o;
  };
}
function fe(t, e) {
  if (Z) {
    G.nodes_end = X, Wn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Ve(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function hs(t, e) {
  return ds(t, e);
}
function ol(t, e) {
  _r(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = X;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Ii); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ se(s);
    if (!s)
      throw Xe;
    Zt(!0), Xt(
      /** @type {Comment} */
      s
    ), Wn();
    const a = ds(t, { ...e, anchor: s });
    if (X === null || X.nodeType !== 8 || /** @type {Comment} */
    X.data !== Cr)
      throw Lr(), Xe;
    return Zt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Xe)
      return e.recover === !1 && Ma(), _r(), Ji(n), Zt(!1), hs(t, e);
    throw a;
  } finally {
    Zt(r), Xt(i);
  }
}
const Ee = /* @__PURE__ */ new Map();
function ds(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _r();
  var l = /* @__PURE__ */ new Set(), o = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = sl(d);
        e.addEventListener(d, fn, { passive: p });
        var _ = Ee.get(d);
        _ === void 0 ? (document.addEventListener(d, fn, { passive: p }), Ee.set(d, 1)) : Ee.set(d, _ + 1);
      }
    }
  };
  o(Ir(fs)), gr.add(o);
  var f = void 0, u = el(() => {
    var h = n ?? e.appendChild(Tn());
    return je(() => {
      if (s) {
        Xr({});
        var c = (
          /** @type {ComponentContext} */
          gt
        );
        c.c = s;
      }
      i && (r.$$events = i), Z && We(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, Z && (G.nodes_end = X), s && Ur();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, fn);
        var d = (
          /** @type {number} */
          Ee.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, fn), Ee.delete(c)) : Ee.set(c, d);
      }
      gr.delete(o), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return mr.set(f, u), f;
}
let mr = /* @__PURE__ */ new WeakMap();
function ul(t, e) {
  const n = mr.get(t);
  return n ? (mr.delete(t), n(e)) : Promise.resolve();
}
function vi(t, e, n = !1) {
  Z && Wn();
  var r = t, i = null, s = null, a = vt, l = n ? Pr : 0, o = !1;
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
      !!a === p && (r = pr(), Xt(r), Zt(!1), d = !0);
    }
    a ? (i ? In(i) : c && (i = je(() => c(r))), s && Dn(s, () => {
      s = null;
    })) : (s ? In(s) : c && (s = je(() => c(r))), i && Dn(i, () => {
      i = null;
    })), d && Zt(!0);
  };
  Br(() => {
    o = !1, e(f), o || u(null, null);
  }, l), Z && (r = X);
}
function or(t, e) {
  return e;
}
function fl(t, e, n, r) {
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
    ), r.clear(), ce(t, e[0].prev, e[s - 1].next);
  }
  ls(i, () => {
    for (var f = 0; f < s; f++) {
      var u = e[f];
      l || (r.delete(u.k), ce(t, u.prev, u.next)), ee(u.e, !l);
    }
  });
}
function ur(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  Z && Wn();
  var o = null, f = !1, u = /* @__PURE__ */ Va(() => {
    var h = n();
    return Dr(h) ? h : h == null ? [] : Ir(h);
  });
  Br(() => {
    var h = g(u), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (Z) {
      var p = (
        /** @type {Comment} */
        a.data === Sr
      );
      p !== (c === 0) && (a = pr(), Xt(a), Zt(!1), d = !0);
    }
    if (Z) {
      for (var _ = null, b, y = 0; y < c; y++) {
        if (X.nodeType === 8 && /** @type {Comment} */
        X.data === Cr) {
          a = /** @type {Comment} */
          X, d = !0, Zt(!1);
          break;
        }
        var $ = h[y], E = r($, y);
        b = vs(
          X,
          l,
          _,
          null,
          $,
          E,
          y,
          i,
          e,
          n
        ), l.items.set(E, b), _ = b;
      }
      c > 0 && Xt(pr());
    }
    Z || cl(h, l, a, i, e, r, n), s !== null && (c === 0 ? o ? In(o) : o = je(() => s(a)) : o !== null && Dn(o, () => {
      o = null;
    })), d && Zt(!0), g(u);
  }), Z && (a = X);
}
function cl(t, e, n, r, i, s, a) {
  var l = t.length, o = e.items, f = e.first, u = f, h, c = null, d = [], p = [], _, b, y, $;
  for ($ = 0; $ < l; $ += 1) {
    if (_ = t[$], b = s(_, $), y = o.get(b), y === void 0) {
      var E = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : n;
      c = vs(
        E,
        e,
        c,
        c === null ? e.first : c.next,
        _,
        b,
        $,
        r,
        i,
        a
      ), o.set(b, c), d = [], p = [], u = c.next;
      continue;
    }
    if (hl(y, _, $), y.e.f & Qt && In(y.e), y !== u) {
      if (h !== void 0 && h.has(y)) {
        if (d.length < p.length) {
          var M = p[0], S;
          c = M.prev;
          var P = d[0], B = d[d.length - 1];
          for (S = 0; S < d.length; S += 1)
            pi(d[S], M, n);
          for (S = 0; S < p.length; S += 1)
            h.delete(p[S]);
          ce(e, P.prev, B.next), ce(e, c, P), ce(e, B, M), u = M, c = B, $ -= 1, d = [], p = [];
        } else
          h.delete(y), pi(y, u, n), ce(e, y.prev, y.next), ce(e, y, c === null ? e.first : c.next), ce(e, c, y), c = y;
        continue;
      }
      for (d = [], p = []; u !== null && u.k !== b; )
        u.e.f & Qt || (h ?? (h = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      y = u;
    }
    d.push(y), c = y, u = y.next;
  }
  if (u !== null || h !== void 0) {
    for (var W = h === void 0 ? [] : Ir(h); u !== null; )
      u.e.f & Qt || W.push(u), u = u.next;
    var rt = W.length;
    if (rt > 0) {
      var Q = null;
      fl(e, W, Q, o);
    }
  }
  G.first = e.first && e.first.e, G.last = c && c.e;
}
function hl(t, e, n, r) {
  zi(t.v, e), t.i = n;
}
function vs(t, e, n, r, i, s, a, l, o, f) {
  var u = (o & ha) !== 0, h = (o & va) === 0, c = u ? h ? /* @__PURE__ */ qr(i) : Et(i) : i, d = o & da ? Et(a) : a, p = {
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
    return p.e = je(() => l(t, c, d, f), Z), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
      /* @__PURE__ */ se(s)
    );
    i.before(s), s = a;
  }
}
function ce(t, e, n) {
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
  return t === e || (t == null ? void 0 : t[Ue]) === e;
}
function yr(t = {}, e, n, r) {
  return Yr(() => {
    var i, s;
    return rs(() => {
      i = s, s = [], On(() => {
        t !== n(...s) && (e(t, ...s), i && gi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Yi(() => {
        s && gi(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function dl(t) {
  gt === null && rl(), Pn(() => {
    const e = On(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let cn = !1;
function vl(t) {
  var e = cn;
  try {
    return cn = !1, [t(), cn];
  } finally {
    cn = e;
  }
}
function mi(t, e = 1) {
  const n = t();
  return t(n + e), n;
}
function Ht(t, e, n, r) {
  var S;
  var i = (n & pa) !== 0, s = !0, a = (n & ga) !== 0, l = (n & ma) !== 0, o = !1, f;
  a ? [f, o] = vl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var u = Ue in t || Li in t, h = a && (((S = me(t, e)) == null ? void 0 : S.set) ?? (u && e in t && ((P) => t[e] = P))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, _ = () => (p = !0, d && (d = !1, l ? c = On(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Oa(), f = _(), h && h(f));
  var b;
  if (b = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? _() : (d = !0, p = !1, P);
  }, !(n & _a))
    return b;
  if (h) {
    var y = t.$$legacy;
    return function(P, B) {
      return arguments.length > 0 ? ((!B || y || o) && h(B ? b() : P), P) : b();
    };
  }
  var $ = !1, E = /* @__PURE__ */ qr(f), M = /* @__PURE__ */ jn(() => {
    var P = b(), B = g(E);
    return $ ? ($ = !1, B) : E.v = P;
  });
  return i || (M.equals = Fr), function(P, B) {
    if (arguments.length > 0) {
      const W = B ? g(M) : a ? lt(P) : P;
      return M.equals(W) || ($ = !0, j(E, W), p && c !== void 0 && (c = W), On(() => g(M))), P;
    }
    return g(M);
  };
}
function pl(t) {
  return new _l(t);
}
var Jt, At;
class _l {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    ar(this, Jt);
    /** @type {Record<string, any>} */
    ar(this, At);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ qr(l);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return g(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Li ? !0 : (g(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return j(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    lr(this, At, (e.hydrate ? ol : hs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Mt(), lr(this, Jt, i.$$events);
    for (const a of Object.keys(dt(this, At)))
      a === "$set" || a === "$destroy" || a === "$on" || Nn(this, a, {
        get() {
          return dt(this, At)[a];
        },
        /** @param {any} value */
        set(l) {
          dt(this, At)[a] = l;
        },
        enumerable: !0
      });
    dt(this, At).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, dt(this, At).$destroy = () => {
      ul(dt(this, At));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    dt(this, At).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    dt(this, Jt)[e] = dt(this, Jt)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return dt(this, Jt)[e].push(r), () => {
      dt(this, Jt)[e] = dt(this, Jt)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    dt(this, At).$destroy();
  }
}
Jt = new WeakMap(), At = new WeakMap();
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
          s !== "default" && (l.name = s), fe(a, l);
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
        a in this.$$d || (this.$$d[a] = mn(a, s.value, this.$$p_d, "toProp"));
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
        rs(() => {
          var s;
          this.$$r = !0;
          for (const a of Rn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = mn(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = mn(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Rn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function mn(t, e, n, r) {
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
function gs(t, e, n, r, i, s) {
  let a = class extends _s {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Rn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Rn(e).forEach((l) => {
    Nn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var h;
        o = mn(l, o, e), this.$$d[l] = o;
        var f = this.$$c;
        if (f) {
          var u = (h = me(f, l)) == null ? void 0 : h.get;
          u ? f[l] = o : f.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    Nn(a.prototype, l, {
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
function ms() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new yn(n);
}
function yn(t) {
  this._ = t;
}
function yl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
yn.prototype = ms.prototype = {
  constructor: yn,
  on: function(t, e) {
    var n = this._, r = yl(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = wl(n[i], t.name))) return i;
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
    return new yn(t);
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
function yi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ml, t = t.slice(0, r).concat(t.slice(r + 1));
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
function Qn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), wi.hasOwnProperty(e) ? { space: wi[e], local: t } : t;
}
function xl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === wr && e.documentElement.namespaceURI === wr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function bl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ys(t) {
  var e = Qn(t);
  return (e.local ? bl : xl)(e);
}
function $l() {
}
function Gr(t) {
  return t == null ? $l : function() {
    return this.querySelector(t);
  };
}
function Al(t) {
  typeof t != "function" && (t = Gr(t));
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
function ws(t) {
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
  typeof t == "function" ? t = Nl(t) : t = ws(t);
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
var kl = Array.prototype.find;
function Sl(t) {
  return function() {
    return kl.call(this.children, t);
  };
}
function Cl() {
  return this.firstElementChild;
}
function Ml(t) {
  return this.select(t == null ? Cl : Sl(typeof t == "function" ? t : bs(t)));
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
  return this.selectAll(t == null ? Pl : Dl(typeof t == "function" ? t : bs(t)));
}
function Fl(t) {
  typeof t != "function" && (t = xs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new bt(r, this._parents);
}
function $s(t) {
  return new Array(t.length);
}
function ql() {
  return new bt(this._enter || this._groups.map($s), this._parents);
}
function Fn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Fn.prototype = {
  constructor: Fn,
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
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new Fn(t, s[a]);
  for (; a < o; ++a)
    (l = e[a]) && (i[a] = l);
}
function Hl(t, e, n, r, i, s, a) {
  var l, o, f = /* @__PURE__ */ new Map(), u = e.length, h = s.length, c = new Array(u), d;
  for (l = 0; l < u; ++l)
    (o = e[l]) && (c[l] = d = a.call(o, o.__data__, l, e) + "", f.has(d) ? i[l] = o : f.set(d, o));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (o = f.get(d)) ? (r[l] = o, o.__data__ = s[l], f.delete(d)) : n[l] = new Fn(t, s[l]);
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
    var u = r[f], h = i[f], c = h.length, d = zl(t.call(u, u && u.__data__, f, r)), p = d.length, _ = l[f] = new Array(p), b = a[f] = new Array(p), y = o[f] = new Array(c);
    n(u, h, _, b, y, d, e);
    for (var $ = 0, E = 0, M, S; $ < p; ++$)
      if (M = _[$]) {
        for ($ >= E && (E = $ + 1); !(S = b[E]) && ++E < p; ) ;
        M._next = S || null;
      }
  }
  return a = new bt(a, r), a._enter = l, a._exit = o, a;
}
function zl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xl() {
  return new bt(this._exit || this._groups.map($s), this._parents);
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
  var n = Qn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? io : ro : typeof e == "function" ? n.local ? oo : lo : n.local ? ao : so)(n, e));
}
function As(t) {
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
  return arguments.length > 1 ? this.each((e == null ? fo : typeof e == "function" ? ho : co)(t, e, n ?? "")) : Ce(this.node(), t);
}
function Ce(t, e) {
  return t.style.getPropertyValue(e) || As(t).getComputedStyle(t, null).getPropertyValue(e);
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
function yo(t) {
  return function() {
    Ns(this, t);
  };
}
function wo(t) {
  return function() {
    Ts(this, t);
  };
}
function xo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ns : Ts)(this, t);
  };
}
function bo(t, e) {
  var n = Es(t + "");
  if (arguments.length < 2) {
    for (var r = Kr(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
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
function ko(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function So(t) {
  return arguments.length ? this.each(t == null ? No : (typeof t == "function" ? ko : To)(t)) : this.node().innerHTML;
}
function Co() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mo() {
  return this.each(Co);
}
function Oo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Po() {
  return this.each(Oo);
}
function Do(t) {
  var e = typeof t == "function" ? t : ys(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Io() {
  return null;
}
function Fo(t, e) {
  var n = typeof t == "function" ? t : ys(t), r = e == null ? Io : typeof e == "function" ? e : Gr(e);
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
  var r = As(t), i = r.CustomEvent;
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
function Fe() {
  return new bt([[document.documentElement]], Ss);
}
function Qo() {
  return this;
}
bt.prototype = Fe.prototype = {
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
  html: So,
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
function nn() {
}
var Je = 0.7, qn = 1 / Je, Te = "\\s*([+-]?\\d+)\\s*", Ze = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tu = /^#([0-9a-f]{3,8})$/, eu = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), nu = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), ru = new RegExp(`^rgba\\(${Te},${Te},${Te},${Ze}\\)$`), iu = new RegExp(`^rgba\\(${zt},${zt},${zt},${Ze}\\)$`), su = new RegExp(`^hsl\\(${Ze},${zt},${zt}\\)$`), au = new RegExp(`^hsla\\(${Ze},${zt},${zt},${Ze}\\)$`), xi = {
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
jr(nn, xe, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bi,
  // Deprecated! Use color.formatHex.
  formatHex: bi,
  formatHex8: lu,
  formatHsl: ou,
  formatRgb: $i,
  toString: $i
});
function bi() {
  return this.rgb().formatHex();
}
function lu() {
  return this.rgb().formatHex8();
}
function ou() {
  return Ms(this).formatHsl();
}
function $i() {
  return this.rgb().formatRgb();
}
function xe(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = tu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ai(e) : n === 3 ? new _t(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? hn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? hn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = eu.exec(t)) ? new _t(e[1], e[2], e[3], 1) : (e = nu.exec(t)) ? new _t(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ru.exec(t)) ? hn(e[1], e[2], e[3], e[4]) : (e = iu.exec(t)) ? hn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = su.exec(t)) ? Ni(e[1], e[2] / 100, e[3] / 100, 1) : (e = au.exec(t)) ? Ni(e[1], e[2] / 100, e[3] / 100, e[4]) : xi.hasOwnProperty(t) ? Ai(xi[t]) : t === "transparent" ? new _t(NaN, NaN, NaN, 0) : null;
}
function Ai(t) {
  return new _t(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function hn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new _t(t, e, n, r);
}
function uu(t) {
  return t instanceof nn || (t = xe(t)), t ? (t = t.rgb(), new _t(t.r, t.g, t.b, t.opacity)) : new _t();
}
function xr(t, e, n, r) {
  return arguments.length === 1 ? uu(t) : new _t(t, e, n, r ?? 1);
}
function _t(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
jr(_t, xr, Cs(nn, {
  brighter(t) {
    return t = t == null ? qn : Math.pow(qn, t), new _t(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Je : Math.pow(Je, t), new _t(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new _t(ye(this.r), ye(this.g), ye(this.b), Ln(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ei,
  // Deprecated! Use color.formatHex.
  formatHex: Ei,
  formatHex8: fu,
  formatRgb: Ri,
  toString: Ri
}));
function Ei() {
  return `#${ge(this.r)}${ge(this.g)}${ge(this.b)}`;
}
function fu() {
  return `#${ge(this.r)}${ge(this.g)}${ge(this.b)}${ge((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ri() {
  const t = Ln(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ye(this.r)}, ${ye(this.g)}, ${ye(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ln(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ye(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ge(t) {
  return t = ye(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ni(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Pt(t, e, n, r);
}
function Ms(t) {
  if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);
  if (t instanceof nn || (t = xe(t)), !t) return new Pt();
  if (t instanceof Pt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, o = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= o < 0.5 ? s + i : 2 - s - i, a *= 60) : l = o > 0 && o < 1 ? 0 : a, new Pt(a, l, o, t.opacity);
}
function cu(t, e, n, r) {
  return arguments.length === 1 ? Ms(t) : new Pt(t, e, n, r ?? 1);
}
function Pt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
jr(Pt, cu, Cs(nn, {
  brighter(t) {
    return t = t == null ? qn : Math.pow(qn, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Je : Math.pow(Je, t), new Pt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new _t(
      fr(t >= 240 ? t - 240 : t + 120, i, r),
      fr(t, i, r),
      fr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Pt(Ti(this.h), dn(this.s), dn(this.l), Ln(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ln(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ti(this.h)}, ${dn(this.s) * 100}%, ${dn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ti(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function dn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function fr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Wr = (t) => () => t;
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
  return (t = +t) == 1 ? Os : function(e, n) {
    return n - e ? du(e, n, t) : Wr(isNaN(e) ? n : e);
  };
}
function Os(t, e) {
  var n = e - t;
  return n ? hu(t, n) : Wr(isNaN(t) ? e : t);
}
const Vn = function t(e) {
  var n = vu(e);
  function r(i, s) {
    var a = n((i = xr(i)).r, (s = xr(s)).r), l = n(i.g, s.g), o = n(i.b, s.b), f = Os(i.opacity, s.opacity);
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
  for (a = 0; a < r; ++a) i[a] = Re(t[a], e[a]);
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
    i in t ? n[i] = Re(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cr = new RegExp(br.source, "g");
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
function Ps(t, e) {
  var n = br.lastIndex = cr.lastIndex = 0, r, i, s, a = -1, l = [], o = [];
  for (t = t + "", e = e + ""; (r = br.exec(t)) && (i = cr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, o.push({ i: a, x: Yt(r, i) })), n = cr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? o[0] ? xu(o[0].x) : wu(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u) l[(h = o[u]).i] = h.x(f);
    return l.join("");
  });
}
function Re(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Wr(e) : (n === "number" ? Yt : n === "string" ? (r = xe(e)) ? (e = r, Vn) : Ps : e instanceof xe ? Vn : e instanceof Date ? mu : _u(e) ? pu : Array.isArray(e) ? gu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? yu : Yt)(t, e);
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
function bu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? $r : Ds(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $u(t) {
  return t == null || (vn || (vn = document.createElementNS("http://www.w3.org/2000/svg", "g")), vn.setAttribute("transform", t), !(t = vn.transform.baseVal.consolidate())) ? $r : (t = t.matrix, Ds(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Is(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, u, h, c, d, p) {
    if (f !== h || u !== c) {
      var _ = d.push("translate(", null, e, null, n);
      p.push({ i: _ - 4, x: Yt(f, h) }, { i: _ - 2, x: Yt(u, c) });
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
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: Yt(f, h) }, { i: _ - 2, x: Yt(u, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), s(f.translateX, f.translateY, u.translateX, u.translateY, h, c), a(f.rotate, u.rotate, h, c), l(f.skewX, u.skewX, h, c), o(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(d) {
      for (var p = -1, _ = c.length, b; ++p < _; ) h[(b = c[p]).i] = b.x(d);
      return h.join("");
    };
  };
}
var Au = Is(bu, "px, ", "px)", "deg)"), Eu = Is($u, ", ", ")", ")"), Me = 0, Ye = 0, He = 0, Fs = 1e3, Hn, Be, Yn = 0, be = 0, tr = 0, Qe = typeof performance == "object" && performance.now ? performance : Date, qs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Jr() {
  return be || (qs(Ru), be = Qe.now() + tr);
}
function Ru() {
  be = 0;
}
function Bn() {
  this._call = this._time = this._next = null;
}
Bn.prototype = Ls.prototype = {
  constructor: Bn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Jr() : +n) + (e == null ? 0 : +e), !this._next && Be !== this && (Be ? Be._next = this : Hn = this, Be = this), this._call = t, this._time = n, Ar();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ar());
  }
};
function Ls(t, e, n) {
  var r = new Bn();
  return r.restart(t, e, n), r;
}
function Nu() {
  Jr(), ++Me;
  for (var t = Hn, e; t; )
    (e = be - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Me;
}
function Si() {
  be = (Yn = Qe.now()) + tr, Me = Ye = 0;
  try {
    Nu();
  } finally {
    Me = 0, ku(), be = 0;
  }
}
function Tu() {
  var t = Qe.now(), e = t - Yn;
  e > Fs && (tr -= e, Yn = t);
}
function ku() {
  for (var t, e = Hn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Hn = n);
  Be = t, Ar(r);
}
function Ar(t) {
  if (!Me) {
    Ye && (Ye = clearTimeout(Ye));
    var e = t - be;
    e > 24 ? (t < 1 / 0 && (Ye = setTimeout(Si, t - Qe.now() - tr)), He && (He = clearInterval(He))) : (He || (Yn = Qe.now(), He = setInterval(Tu, Fs)), Me = 1, qs(Si));
  }
}
function Ci(t, e, n) {
  var r = new Bn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Su = ms("start", "end", "cancel", "interrupt"), Cu = [], Vs = 0, Mi = 1, Er = 2, wn = 3, Oi = 4, Rr = 5, xn = 6;
function er(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Mu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Su,
    tween: Cu,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Vs
  });
}
function Zr(t, e) {
  var n = It(t, e);
  if (n.state > Vs) throw new Error("too late; already scheduled");
  return n;
}
function Ut(t, e) {
  var n = It(t, e);
  if (n.state > wn) throw new Error("too late; already running");
  return n;
}
function It(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Mu(t, e, n) {
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
        if (d.state === wn) return Ci(a);
        d.state === Oi ? (d.state = xn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[u]) : +u < e && (d.state = xn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[u]);
      }
    if (Ci(function() {
      n.state === wn && (n.state = Oi, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Er, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Er) {
      for (n.state = wn, i = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
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
    n.state = xn, n.timer.stop(), delete r[e];
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
      i = r.state > Er && r.state < Rr, r.state = xn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
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
    for (var r = It(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Du : Iu)(n, t, e));
}
function Qr(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return It(i, r).value[e];
  };
}
function Hs(t, e) {
  var n;
  return (typeof e == "number" ? Yt : e instanceof xe ? Vn : (n = xe(e)) ? (e = n, Vn) : Ps)(t, e);
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
  var n = Qn(t), r = n === "transform" ? Eu : Hs;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Bu : Yu)(n, r, Qr(this, "attr." + t, e)) : e == null ? (n.local ? Lu : qu)(n) : (n.local ? Hu : Vu)(n, r, e));
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
  var r = Qn(t);
  return this.tween(n, (r.local ? Gu : Ku)(r, e));
}
function Wu(t, e) {
  return function() {
    Zr(this, t).delay = +e.apply(this, arguments);
  };
}
function Ju(t, e) {
  return e = +e, function() {
    Zr(this, t).delay = e;
  };
}
function Zu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wu : Ju)(e, t)) : It(this.node(), e).delay;
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
  return arguments.length ? this.each((typeof t == "function" ? Qu : tf)(e, t)) : It(this.node(), e).duration;
}
function nf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ut(this, t).ease = e;
  };
}
function rf(t) {
  var e = this._id;
  return arguments.length ? this.each(nf(e, t)) : It(this.node(), e).ease;
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
  typeof t != "function" && (t = xs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], o, f = 0; f < a; ++f)
      (o = s[f]) && t.call(o, o.__data__, f, s) && l.push(o);
  return new ne(r, this._parents, this._name, this._id);
}
function of(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var o = e[l], f = n[l], u = o.length, h = a[l] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new ne(a, this._parents, this._name, this._id);
}
function uf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ff(t, e, n) {
  var r, i, s = uf(e) ? Zr : Ut;
  return function() {
    var a = s(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(e, n), a.on = i;
  };
}
function cf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? It(this.node(), n).on.on(t) : this.each(ff(n, t, e));
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
  typeof t != "function" && (t = Gr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], o = l.length, f = s[a] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = l[c]) && (h = t.call(u, u.__data__, c, l)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, er(f[c], e, n, c, f, It(u, n)));
  return new ne(s, this._parents, e, n);
}
function pf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ws(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var o = r[l], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, p = It(u, n), _ = 0, b = c.length; _ < b; ++_)
          (d = c[_]) && er(d, e, n, _, c, p);
        s.push(c), a.push(u);
      }
  return new ne(s, a, e, n);
}
var _f = Fe.prototype.constructor;
function gf() {
  return new _f(this._groups, this._parents);
}
function mf(t, e) {
  var n, r, i;
  return function() {
    var s = Ce(this, t), a = (this.style.removeProperty(t), Ce(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Ys(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Ce(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function wf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Ce(this, t), l = n(this), o = l + "";
    return l == null && (o = l = (this.style.removeProperty(t), Ce(this, t))), a === o ? null : a === r && o === i ? s : (i = o, s = e(r = a, l));
  };
}
function xf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var o = Ut(this, t), f = o.on, u = o.value[s] == null ? l || (l = Ys(e)) : void 0;
    (f !== n || i !== u) && (r = (n = f).copy()).on(a, i = u), o.on = r;
  };
}
function bf(t, e, n) {
  var r = (t += "") == "transform" ? Au : Hs;
  return e == null ? this.styleTween(t, mf(t, r)).on("end.style." + t, Ys(t)) : typeof e == "function" ? this.styleTween(t, wf(t, r, Qr(this, "style." + t, e))).each(xf(this._id, t)) : this.styleTween(t, yf(t, r, e), n).on("end.style." + t, null);
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
  return this.tween("text", typeof t == "function" ? Nf(Qr(this, "text", t)) : Rf(t == null ? "" : t + ""));
}
function kf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Sf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && kf(i)), e;
  }
  return r._value = t, r;
}
function Cf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Sf(t));
}
function Mf() {
  for (var t = this._name, e = this._id, n = Bs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      if (o = a[f]) {
        var u = It(o, e);
        er(o, t, n, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new ne(r, this._parents, t, n);
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
function ne(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function bn(t) {
  return Fe().transition(t);
}
function Bs() {
  return ++Pf;
}
var Kt = Fe.prototype;
ne.prototype = bn.prototype = {
  constructor: ne,
  select: vf,
  selectAll: pf,
  selectChild: Kt.selectChild,
  selectChildren: Kt.selectChildren,
  filter: lf,
  merge: of,
  selection: gf,
  transition: Mf,
  call: Kt.call,
  nodes: Kt.nodes,
  node: Kt.node,
  size: Kt.size,
  empty: Kt.empty,
  each: Kt.each,
  on: cf,
  attr: zu,
  attrTween: ju,
  style: bf,
  styleTween: Ef,
  text: Tf,
  textTween: Cf,
  remove: df,
  tween: Fu,
  delay: Zu,
  duration: ef,
  ease: rf,
  easeVarying: af,
  end: Of,
  [Symbol.iterator]: Kt[Symbol.iterator]
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
  t instanceof ne ? (e = t._id, t = t._name) : (e = Bs(), (n = If).time = Jr(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, f = 0; f < l; ++f)
      (o = a[f]) && er(o, t, e, f, a, n || Ff(o, e));
  return new ne(r, this._parents, t, e);
}
Fe.prototype.interrupt = Pu;
Fe.prototype.transition = qf;
const Nr = Math.PI, Tr = 2 * Nr, _e = 1e-6, Lf = Tr - _e;
function zs(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Vf(t) {
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
class Hf {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? zs : Vf(e);
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
    else if (c > _e) if (!(Math.abs(h * o - f * u) > _e) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, _ = o * o + f * f, b = d * d + p * p, y = Math.sqrt(_), $ = Math.sqrt(c), E = s * Math.tan((Nr - Math.acos((_ + c - b) / (2 * y * $))) / 2), M = E / $, S = E / y;
      Math.abs(M - 1) > _e && this._append`L${e + M * u},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * d > u * p)},${this._x1 = e + S * o},${this._y1 = n + S * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), o = r * Math.sin(i), f = e + l, u = n + o, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${u}` : (Math.abs(this._x1 - f) > _e || Math.abs(this._y1 - u) > _e) && this._append`L${f},${u}`, r && (c < 0 && (c = c % Tr + Tr), c > Lf ? this._append`A${r},${r},0,1,${h},${e - l},${n - o}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = u}` : c > _e && this._append`A${r},${r},0,${+(c >= Nr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
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
function ut(t) {
  return function() {
    return t;
  };
}
const Pi = Math.abs, at = Math.atan2, pe = Math.cos, zf = Math.max, hr = Math.min, Vt = Math.sin, Ne = Math.sqrt, pt = 1e-12, tn = Math.PI, zn = tn / 2, $n = 2 * tn;
function Xf(t) {
  return t > 1 ? 0 : t < -1 ? tn : Math.acos(t);
}
function Di(t) {
  return t >= 1 ? zn : t <= -1 ? -zn : Math.asin(t);
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
  if (!(c * c < pt))
    return c = (u * (e - s) - h * (t - i)) / c, [t + c * o, e + c * f];
}
function pn(t, e, n, r, i, s, a) {
  var l = t - n, o = e - r, f = (a ? s : -s) / Ne(l * l + o * o), u = f * o, h = -f * l, c = t + u, d = e + h, p = n + u, _ = r + h, b = (c + p) / 2, y = (d + _) / 2, $ = p - c, E = _ - d, M = $ * $ + E * E, S = i - s, P = c * _ - p * d, B = (E < 0 ? -1 : 1) * Ne(zf(0, S * S * M - P * P)), W = (P * E - $ * B) / M, rt = (-P * $ - E * B) / M, Q = (P * E + $ * B) / M, K = (-P * $ + E * B) / M, H = W - b, N = rt - y, q = Q - b, Nt = K - y;
  return H * H + N * N > q * q + Nt * Nt && (W = Q, rt = K), {
    cx: W,
    cy: rt,
    x01: -u,
    y01: -h,
    x11: W * (i / S - 1),
    y11: rt * (i / S - 1)
  };
}
function jt() {
  var t = Gf, e = Kf, n = ut(0), r = null, i = jf, s = Wf, a = Jf, l = null, o = Uf(f);
  function f() {
    var u, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - zn, _ = s.apply(this, arguments) - zn, b = Pi(_ - p), y = _ > p;
    if (l || (l = u = o()), d < c && (h = d, d = c, c = h), !(d > pt)) l.moveTo(0, 0);
    else if (b > $n - pt)
      l.moveTo(d * pe(p), d * Vt(p)), l.arc(0, 0, d, p, _, !y), c > pt && (l.moveTo(c * pe(_), c * Vt(_)), l.arc(0, 0, c, _, p, y));
    else {
      var $ = p, E = _, M = p, S = _, P = b, B = b, W = a.apply(this, arguments) / 2, rt = W > pt && (r ? +r.apply(this, arguments) : Ne(c * c + d * d)), Q = hr(Pi(d - c) / 2, +n.apply(this, arguments)), K = Q, H = Q, N, q;
      if (rt > pt) {
        var Nt = Di(rt / c * Vt(W)), ft = Di(rt / d * Vt(W));
        (P -= Nt * 2) > pt ? (Nt *= y ? 1 : -1, M += Nt, S -= Nt) : (P = 0, M = S = (p + _) / 2), (B -= ft * 2) > pt ? (ft *= y ? 1 : -1, $ += ft, E -= ft) : (B = 0, $ = E = (p + _) / 2);
      }
      var Tt = d * pe($), ct = d * Vt($), Ft = c * pe(S), ae = c * Vt(S);
      if (Q > pt) {
        var le = d * pe(E), kt = d * Vt(E), oe = c * pe(M), ue = c * Vt(M), ht;
        if (b < tn)
          if (ht = Zf(Tt, ct, oe, ue, le, kt, Ft, ae)) {
            var Gt = Tt - ht[0], w = ct - ht[1], D = le - ht[0], z = kt - ht[1], Y = 1 / Vt(Xf((Gt * D + w * z) / (Ne(Gt * Gt + w * w) * Ne(D * D + z * z))) / 2), tt = Ne(ht[0] * ht[0] + ht[1] * ht[1]);
            K = hr(Q, (c - tt) / (Y - 1)), H = hr(Q, (d - tt) / (Y + 1));
          } else
            K = H = 0;
      }
      B > pt ? H > pt ? (N = pn(oe, ue, Tt, ct, d, H, y), q = pn(le, kt, Ft, ae, d, H, y), l.moveTo(N.cx + N.x01, N.cy + N.y01), H < Q ? l.arc(N.cx, N.cy, H, at(N.y01, N.x01), at(q.y01, q.x01), !y) : (l.arc(N.cx, N.cy, H, at(N.y01, N.x01), at(N.y11, N.x11), !y), l.arc(0, 0, d, at(N.cy + N.y11, N.cx + N.x11), at(q.cy + q.y11, q.cx + q.x11), !y), l.arc(q.cx, q.cy, H, at(q.y11, q.x11), at(q.y01, q.x01), !y))) : (l.moveTo(Tt, ct), l.arc(0, 0, d, $, E, !y)) : l.moveTo(Tt, ct), !(c > pt) || !(P > pt) ? l.lineTo(Ft, ae) : K > pt ? (N = pn(Ft, ae, le, kt, c, -K, y), q = pn(Tt, ct, oe, ue, c, -K, y), l.lineTo(N.cx + N.x01, N.cy + N.y01), K < Q ? l.arc(N.cx, N.cy, K, at(N.y01, N.x01), at(q.y01, q.x01), !y) : (l.arc(N.cx, N.cy, K, at(N.y01, N.x01), at(N.y11, N.x11), !y), l.arc(0, 0, c, at(N.cy + N.y11, N.cx + N.x11), at(q.cy + q.y11, q.cx + q.x11), y), l.arc(q.cx, q.cy, K, at(q.y11, q.x11), at(q.y01, q.x01), !y))) : l.arc(0, 0, c, S, M, y);
    }
    if (l.closePath(), u) return l = null, u + "" || null;
  }
  return f.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - tn / 2;
    return [pe(h) * u, Vt(h) * u];
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
function Qf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function tc(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ec(t) {
  return t;
}
function dr() {
  var t = ec, e = tc, n = null, r = ut(0), i = ut($n), s = ut(0);
  function a(l) {
    var o, f = (l = Qf(l)).length, u, h, c = 0, d = new Array(f), p = new Array(f), _ = +r.apply(this, arguments), b = Math.min($n, Math.max(-$n, i.apply(this, arguments) - _)), y, $ = Math.min(Math.abs(b) / f, s.apply(this, arguments)), E = $ * (b < 0 ? -1 : 1), M;
    for (o = 0; o < f; ++o)
      (M = p[d[o] = o] = +t(l[o], o, l)) > 0 && (c += M);
    for (e != null ? d.sort(function(S, P) {
      return e(p[S], p[P]);
    }) : n != null && d.sort(function(S, P) {
      return n(l[S], l[P]);
    }), o = 0, h = c ? (b - f * E) / c : 0; o < f; ++o, _ = y)
      u = d[o], M = p[u], y = _ + (M > 0 ? M * h : 0) + E, p[u] = {
        data: l[u],
        index: o,
        value: M,
        startAngle: _,
        endAngle: y,
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
function ze(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
ze.prototype = {
  constructor: ze,
  scale: function(t) {
    return t === 1 ? this : new ze(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ze(this.k, this.x + this.k * t, this.y + this.k * e);
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
ze.prototype;
const he = {}, kr = "No Further Rankings";
function Xn(t, e) {
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
function Un(t, e) {
  return Xs(t, e, "eliminated");
}
function Gn(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(Xs(t, r, "elected"));
  return n;
}
var nc = /* @__PURE__ */ ll('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const rc = { hash: "svelte-3kpd", code: "" };
function Us(t, e) {
  Xr(e, !0), ps(t, rc);
  let n = Ht(e, "jsonData", 7), r = Ht(e, "currentRound", 15), i = Ht(e, "mouseEventType", 15), s = Ht(e, "mouseData", 15), a = Ht(e, "mouseY", 15), l = Ht(e, "animateOnePhase", 15), o = Ht(e, "runFullAnimation", 15);
  const f = 800, u = 800, h = Math.min(f, u) * 0.3, c = f / 2, d = u / 2, p = "Pie", _ = "Donut", b = "TextLayer", y = "#transfer", $ = "url(#cross-hatch)", E = 1.15, M = 0.1, S = 750, P = 800;
  let B = [], W = [], rt = [], Q = 0, K = Ct(0), H = Ct(null);
  function N() {
    const v = st(g(H));
    v.select("#" + p).remove(), v.select("#" + _).remove(), v.select("#" + b).remove();
  }
  function q(v) {
    N(), rt = Nt(v), B = Qs(v, p, rt, c, d, 0, ft());
  }
  dl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), l(rn), o(tt), ue(), q(r());
  });
  function Nt(v) {
    const m = oe(v);
    return Q = le(v), m;
  }
  function ft() {
    return h;
  }
  function Tt() {
    return ft() * 1.41;
  }
  function ct(v, m) {
    if (v === "exhausted") return Xn(n(), m);
    {
      const x = n().results[m - 1].tally;
      return Number(x[v]);
    }
  }
  function Ft(v, m) {
    return ct(v, m).toLocaleString("en-US");
  }
  function ae(v, m) {
    return (ct(v, m) / Q).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function le(v) {
    const m = n().results[v - 1].tally;
    let x = 0;
    for (let [O, R] of Object.entries(m))
      x += Number(R);
    return x;
  }
  function kt(v, m) {
    const x = n().results[m - 1].tallyResults;
    let O = 0;
    const R = x.findIndex((k) => (k == null ? void 0 : k.elected) && v == k.elected);
    if (R >= 0) {
      const k = x[R].transfers;
      if (k)
        for (let [T, C] of Object.entries(k)) O += Number(C);
    } else
      return 0;
    return O;
  }
  function oe(v) {
    const m = n().results;
    let x = m[Math.max(0, v - 2)].tally;
    const O = [], R = [];
    for (let [T, C] of Object.entries(x))
      O.push({ label: T, value: 0 });
    x = m[v - 1].tally;
    for (let T of O) {
      const C = Number(x[T.label]), F = kt(T.label, v);
      F > 0 ? (R.push({
        label: T.label + y,
        value: F
      }), T.value = C - F, R.push(T)) : (T.value = C, R.push(T));
    }
    const k = Xn(n(), v);
    return R.push({ label: "exhausted", value: k }), R;
  }
  function ue() {
    const v = st(g(H)).select("defs").select("#cross-hatch");
    let m = 0;
    for (let [x, O] of Object.entries(n().results[0].tally)) {
      m < 10 ? he[x] = Bf[m] : he[x] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"), m++;
      {
        const R = v.clone(!0);
        R.attr("id", x.replaceAll(" ", "-")).select("rect").attr("fill", he[x]), R.select("path").attr("stroke", "#505050");
      }
    }
    he.exhausted = $, he["Inactive Ballots"] = $;
  }
  function ht() {
    st(g(H)).select("#" + _).remove();
  }
  function Gt(v) {
    const m = bn("global").duration(P);
    v && m.on("end", v), ht(), an(r() - 1), ta(), na(0, ft()), ei();
  }
  function w(v) {
    const m = bn("global").duration(P);
    v && m.on("end", v), Gs(r() - 1);
  }
  function D(v) {
    const m = bn("global").duration(P);
    v && m.on("end", v), sn(r()), ve(ft());
  }
  function z() {
    Y = !1;
  }
  let Y = !1;
  function tt() {
    if (Y) {
      console.warn("buttons locked out");
      return;
    }
    Y = !0, et();
  }
  function et() {
    mi(r);
    const v = r() < n().results.length - 1 ? et : z;
    Gt(() => {
      w(() => {
        D(v);
      });
    });
  }
  Pn(() => {
    $t();
  });
  let it = 0;
  function $t() {
    it !== r() && (it === r() - 1 && it > 0 ? $e() : qe(r()), it = r());
  }
  function qe(v) {
    if (Y) {
      console.warn("buttons locked out");
      return;
    }
    r(v), q(r());
  }
  function $e() {
    if (Y) {
      console.warn("buttons locked out");
      return;
    }
    if (r() >= n().results.length) {
      Y = !1;
      return;
    }
    Y = !0, Gt(() => {
      w(() => {
        D(z);
      });
    });
  }
  function rn() {
    if (r() >= n().results.length) {
      ei();
      return;
    }
    j(K, (g(K) + 1) % 3), Y = !0, g(K) === 1 ? (mi(r), Gt(z)) : g(K) === 2 ? w(z) : g(K) === 0 ? D(z) : (Y = !1, console.warn("displayPhase out of range at ", g(K)));
  }
  function sn(v) {
    rt = oe(v), B = ra(v, p, rt, 0, ft(), !0);
  }
  function ve(v, m) {
    dr().sort(null).value((C) => C.value);
    const x = st(g(H)).select("#" + _), O = jt().outerRadius(v).innerRadius(v - 1), R = x.selectAll(".slice");
    let k = R.size();
    function T() {
      k--, k === 0 && ea();
    }
    R.select("path").transition("global").duration(S).attr("d", (C) => O(C)).on("end", (C) => T());
  }
  function an(v) {
    const m = js(v, B);
    W = ni(v, _, m, c, d, ft(), Tt(), !1, !0);
  }
  function Gs(v) {
    const m = Js(v, W, B);
    W = ri(
      v,
      _,
      m,
      /* previousDonutInfoGlobal, */
      ft(),
      Tt(),
      !1
    );
  }
  function ln(v) {
    const m = v.data.label;
    return he[m.split("#")[0]];
  }
  function Ks(v) {
    const m = {}, x = n().results[v - 1].tallyResults;
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
      for (let [T, C] of Object.entries(k))
        m[T] === void 0 ? m[T] = Number(C) : m[T] += Number(C);
    }
    return m;
  }
  function js(v, m) {
    const x = [], O = Q, R = n().results[v - 1].tallyResults;
    for (let k = 0; k < R.length; k++) {
      let T = R[k].eliminated;
      if (T === void 0 && (T = R[k].elected), T === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const C = R[k].transfers;
      if (C === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let F = m.find((I) => I.data.label == T + y);
      F === void 0 && (F = m.find((I) => I.data.label == T));
      let L = 0;
      if (F) L = F.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [I, V] of Object.entries(C)) {
        let J;
        const qt = m.find((nt) => nt.data.label == I);
        if (qt)
          J = structuredClone(qt);
        else if (I == "exhausted")
          J = {
            data: { label: I, value: Number(V) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (I == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", V);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", I);
          continue;
        }
        const A = Number(V) / O * 2 * Math.PI;
        J.startAngle = L, L = J.endAngle = L + A, J.index = k, J.data.label = `${J.data.label}#${k}`, x.push(J);
      }
    }
    return x;
  }
  function Ws(v, m, x) {
    const O = {};
    for (let [R, k] of Object.entries(v)) {
      const T = x.find((L) => R == L.data.label);
      if (T === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", R);
        continue;
      }
      const C = (T.startAngle + T.endAngle) / 2, F = v[T.data.label] / m * 2 * Math.PI;
      O[T.data.label] = C - F / 2;
    }
    return O;
  }
  function Js(v, m, x) {
    const O = [], R = Q, k = Ks(v), T = Ws(k, R, x);
    for (let [C, F] of m.entries()) {
      const L = structuredClone(F), I = F.endAngle - F.startAngle, V = x.find((J) => F.data.label.indexOf(J.data.label) === 0);
      if (V) {
        const J = V.data.label;
        L.startAngle = T[J], T[J] += I, L.endAngle = L.startAngle + I;
      } else if (F.data.label.indexOf("exhausted") === 0)
        L.startAngle = F.startAngle, L.endAngle = F.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", F.data.label);
        continue;
      }
      L.index = C, O.push(L);
    }
    return O;
  }
  function ti(v, m, x, O, R, k) {
    const C = st(g(H)).append("g").attr("id", b).attr("transform", `translate(${x}, ${O})`), F = jt().innerRadius(R * E).outerRadius(R * E);
    C.selectAll("text").data(m).enter().each(function(L) {
      L.endAngle - L.startAngle < M || L.data.label.includes(y) || st(this).append("g").attr("id", (I) => I.data.label).classed("eliminated", (I) => k.includes(I.data.label.split("#")[0]) || I.data.label.includes(y)).each(function(I, V) {
        I.data.label === "exhausted" && st(this).on("mouseenter", (J, qt) => ia(J)).on("mouseleave", (J, qt) => sa());
      }).append("text").attr("transform", (I) => `translate(${F.centroid(I)})`).attr("text-anchor", (I) => nr(I.startAngle, I.endAngle)).text((I) => I.data.label === "exhausted" ? kr : I.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((I) => Ft(I.data.label, v) + " (" + ae(I.data.label, v) + ")");
    });
  }
  function Zs(v, m, x, O) {
    const k = st(g(H)).select("#" + b), T = k.selectAll("tspan"), C = k.selectAll("g").data(m, (V) => V.data.label).classed("eliminated", (V) => O.includes(V.data.label.split("#")[0]) || V.data.label.includes(y)), F = jt().innerRadius(x * E).outerRadius(x * E + 1);
    T.transition("global").duration(S).attr("transform", (V) => `translate(${F.centroid(V)})`).attr("text-anchor", (V) => nr(V.startAngle, V.endAngle)), C.select("text").transition("global").duration(S).attr("transform", (V) => `translate(${F.centroid(V)})`).attr("text-anchor", (V) => nr(V.startAngle, V.endAngle)).on("end", (V) => I());
    let L = C.size();
    function I(V) {
      L--, L === 0 && (k.remove(), ti(v, m, c, d, x, O));
    }
  }
  function Qs(v, m, x, O, R, k, T, C = !0, F = !1) {
    const I = dr().sort(null).value((V) => V.value)(x);
    return ni(v, m, I, O, R, k, T, C, F), I;
  }
  function ei() {
    st(g(H)).select("#" + p).selectAll(".elected").style("stroke", "darkblue").style("stroke-width", "2px");
  }
  function ni(v, m, x, O, R, k, T, C, F) {
    const L = Un(n(), v), I = Gn(n(), v), qt = st(g(H)).attr("width", "100%").attr("height", u).attr("viewBox", `0 0 ${f} ${u}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", m).attr("transform", `translate(${O}, ${R})`).selectAll(".slice").data(x).enter().append("g").attr("class", "slice").classed("eliminated", (A) => L.includes(A.data.label.split("#")[0]) || A.data.label.includes(y)).classed("elected", (A) => I.includes(A.data.label.split("#")[0]) && !A.data.label.includes(y)).attr("id", (A) => A.data.label).on("mouseenter", (A, nt) => ir(A, nt)).on("mouseleave", (A, nt) => sr(A, nt)), Le = jt().outerRadius(T).innerRadius(k);
    if (F) {
      const A = jt().outerRadius(k + 1).innerRadius(k);
      qt.append("path").attr("d", A).transition("global").duration(S).attr("d", (nt) => Le(nt)).attr("fill", (nt) => ln(nt)).on("end", (nt) => rr());
    } else
      qt.append("path").attr("d", (A) => Le(A)).attr("fill", (A) => ln(A)), rr();
    return C && ti(v, x, O, R, T, L), x;
  }
  function ta() {
    const x = st(g(H)).select("#" + b).selectAll(".eliminated");
    x.size() > 0 && x.classed("finished", !0);
  }
  function ea() {
    const x = st(g(H)).select("#" + b).selectAll(".finished");
    x.size() > 0 && x.remove();
  }
  function na(v, m) {
    const R = st(g(H)).select("#" + p).selectAll(".eliminated"), k = jt().innerRadius(v), T = jt().outerRadius(m);
    R.classed("finished", !0).select("path").transition("global").duration(S).attrTween("d", function(C) {
      const F = Re(m, v);
      return function(L) {
        return T.innerRadius(F(L)), T(C);
      };
    }).attr("fill", (C) => `url(#${C.data.label.split("#")[0].replaceAll(" ", "-")})`), R.clone(!0).classed("finished", !0).select("path").transition("global").duration(S).attrTween("d", function(C) {
      const F = Re(m, v);
      return function(L) {
        return k.outerRadius(F(L)), k(C);
      };
    }).attr("fill", (C) => ln(C));
  }
  function nr(v, m) {
    const x = (v + m) / 2;
    return x > Math.PI * 11 / 6 || x < Math.PI * 1 / 6 || x > Math.PI * 5 / 6 && x < Math.PI * 7 / 6 ? "middle" : x < Math.PI ? "start" : "end";
  }
  function rr() {
    st(g(H)).select("#" + b).raise().append("g").remove();
  }
  function ra(v, m, x, O, R, k) {
    const C = dr().sort(null).value((F) => F.value)(x);
    return ri(
      v,
      m,
      C,
      /* previousPieInfo, */
      O,
      R,
      k
    ), C;
  }
  function ri(v, m, x, O, R, k) {
    const T = Un(n(), v), C = Gn(n(), v), F = jt().outerRadius(R).innerRadius(O).startAngle((A) => A.startAngle).endAngle((A) => A.endAngle), L = jt().outerRadius(R).innerRadius(O), V = st(g(H)).select("#" + m);
    V.selectAll(".slice").attr("prevStart", (A) => A.startAngle).attr("prevEnd", (A) => A.endAngle);
    const J = V.selectAll(".slice").data(x, (A) => A.data.label);
    J.enter().append("g").attr("class", "slice").attr("id", (A) => A.data.label).classed("eliminated", !0).on("mouseenter", (A, nt) => ir(A, nt)).on("mouseleave", (A, nt) => sr(A, nt)).append("path").attr("d", (A) => L(A)).attr("fill", (A) => ln(A)), J.classed("eliminated", (A) => T.includes(A.data.label.split("#")[0])).classed("elected", (A) => C.includes(A.data.label.split("#")[0])).on("mouseenter", (A, nt) => ir(A, nt)).on("mouseleave", (A, nt) => sr(A, nt));
    let qt = J.size();
    function Le() {
      qt--, qt <= 0 && (rr(), V.selectAll(".finished").remove());
    }
    return J.select("path").transition("global").duration(S).attrTween("d", function(A) {
      const nt = Number(st(this.parentNode).attr("prevStart")), aa = Number(st(this.parentNode).attr("prevEnd")), la = Re(nt, A.startAngle), oa = Re(aa, A.endAngle);
      return (si) => (F.startAngle(la(si)).endAngle(oa(si)), F(A));
    }).on("end", Le), k && Zs(v, x, R, T), x;
  }
  function ir(v, m) {
    s(m.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function sr(v, m) {
    s(m.data.label.split("#")[0]), i("leave");
  }
  function ia(v, m) {
    i("show-exhausted"), a(v.clientY);
  }
  function sa(v, m) {
    i("hide-exhausted");
  }
  var ii = nc();
  return yr(ii, (v) => j(H, v), () => g(H)), fe(t, ii), Ur({
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), Mt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v) {
      r(v), Mt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), Mt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), Mt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), Mt();
    },
    get animateOnePhase() {
      return l();
    },
    set animateOnePhase(v) {
      l(v), Mt();
    },
    get runFullAnimation() {
      return o();
    },
    set runFullAnimation(v) {
      o(v), Mt();
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
    mouseY: {},
    animateOnePhase: {},
    runFullAnimation: {}
  },
  [],
  [],
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
var sc = /* @__PURE__ */ Ie("<span> </span> &nbsp;", 1), ac = /* @__PURE__ */ Ie("About to eliminate: <!>", 1), lc = /* @__PURE__ */ Ie("<span> </span> &nbsp;", 1), oc = /* @__PURE__ */ Ie("Elected: <!>", 1), uc = /* @__PURE__ */ Ie("<span> </span> <br>", 1), fc = /* @__PURE__ */ Ie('<div class="animation-button-container svelte-hac7qn"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="page-container svelte-hac7qn"><div class="common-header svelte-hac7qn"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-hac7qn"><h3 class="svelte-hac7qn"> </h3> <!></div> <div class="tooltip svelte-hac7qn"> <br> these ballots have already been eliminated.</div> <div class="visualizations-container svelte-hac7qn"><div class="pie-chart-container svelte-hac7qn"><!></div></div></div>', 1);
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
  Xr(e, !0), ps(t, cc);
  const n = 0.85;
  let r = Ht(e, "electionSummary", 7), i = Ht(e, "currentRound", 7), s = Ht(e, "onRoundChanged", 7, (w) => {
  });
  Pn(() => {
    s()(i());
  });
  let a = Ct(null), l = Ct(null), o = Ct(""), f = Ct(lt([])), u = Ct(""), h = Ct(""), c = Ct(0), d = Ct(null), p = Ct(null), _ = /* @__PURE__ */ jn(() => b(r()));
  function b(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (D) {
        return console.error("Failed to parse JSON string:", D), {};
      }
    return console.log("RCtabSummary object status: ", ic(w)), w || {};
  }
  function y() {
    switch (g(u)) {
      case "enter":
        ((w) => (j(f, lt(w[0])), j(o, lt(w[1]))))(E(g(h), i())), g(a) && (g(a).style.top = String(g(c) || 20) + "px", g(a).style.opacity = String(n));
        break;
      case "leave":
        g(a) && (g(a).style.opacity = "0"), j(f, lt([])), j(o, "");
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
  Pn(() => y());
  function $(w, D) {
    return w == 1 ? D ? "vote was" : "vote will be" : D ? "votes were" : "votes will be";
  }
  function E(w, D) {
    const z = [], Y = w === "exhausted" ? kr : w;
    let tt;
    w == "exhausted" ? tt = Xn(g(_), 1) : tt = g(_).results[0].tally[w], z.push(`${Y} started with ${tt} votes.`);
    for (let et = 1; et <= D; et++) {
      et === D && (w == "exhausted" ? tt = Xn(g(_), D) : tt = g(_).results[D - 1].tally[w], z.push(`${Y} has ${tt} votes at round ${D}.`));
      const it = g(_).results[et - 1].tallyResults;
      for (let $t = 0; $t < it.length; $t++) {
        const qe = it[$t].transfers, $e = it[$t].eliminated, rn = it[$t].elected;
        if ($e)
          $e === w && z.push(`${Y} will be eliminated on round ${et}.`);
        else if (w === rn && (z.push(`${Y} was elected on round ${et}.`), qe))
          for (let [ve, an] of Object.entries(qe))
            z.push(`${an} ${$(Number(an), et < D)} transferred to ${ve} on round ${et}.`);
        const sn = $e || rn;
        if (sn) {
          const ve = Number(qe[w]);
          ve && z.push(`${ve} ${$(ve, et < D)} transferred from ${sn} on round ${et}.`);
        }
      }
    }
    return [z, Y];
  }
  function M() {
    let w = 0;
    for (let D = 1; D <= g(_).results.length; D++) {
      const z = g(_).results[D - 1].tallyResults;
      for (let Y = 0; Y < z.length; Y++)
        z[Y].elected && w++;
    }
    return w;
  }
  var S = fc(), P = Ae(S), B = wt(P);
  B.__click = function(...w) {
    var D;
    (D = g(p)) == null || D.apply(this, w);
  };
  var W = Lt(B, 2);
  W.__click = function(...w) {
    var D;
    (D = g(d)) == null || D.apply(this, w);
  }, yt(P);
  var rt = Lt(P, 2), Q = wt(rt), K = wt(Q), H = wt(K);
  yt(K);
  var N = Lt(K, 2), q = wt(N);
  {
    var Nt = (w) => {
      var D = ac(), z = Lt(Ae(D));
      ur(z, 17, () => Un(g(_), i()), or, (Y, tt) => {
        var et = sc(), it = Ae(et), $t = wt(it, !0);
        yt(it), on(), un(() => {
          _i(it, "color", he[g(tt)]), Ve($t, g(tt));
        }), fe(Y, et);
      }), fe(w, D);
    };
    vi(q, (w) => {
      Un(g(_), i()).length > 0 && w(Nt);
    });
  }
  var ft = Lt(q, 2);
  {
    var Tt = (w) => {
      var D = oc(), z = Lt(Ae(D));
      ur(z, 17, () => Gn(g(_), i()), or, (Y, tt) => {
        var et = lc(), it = Ae(et), $t = wt(it, !0);
        yt(it), on(), un(() => {
          _i(it, "color", he[g(tt)]), Ve($t, g(tt));
        }), fe(Y, et);
      }), fe(w, D);
    };
    vi(ft, (w) => {
      Gn(g(_), i()).length > 0 && w(Tt);
    });
  }
  yt(N), yt(Q);
  var ct = Lt(Q, 2), Ft = wt(ct), ae = wt(Ft, !0);
  yt(Ft);
  var le = Lt(Ft, 2);
  ur(le, 17, () => g(f), or, (w, D) => {
    var z = uc(), Y = Ae(z), tt = wt(Y, !0);
    yt(Y), on(2), un(() => Ve(tt, g(D))), fe(w, z);
  }), yt(ct), yr(ct, (w) => j(a, w), () => g(a));
  var kt = Lt(ct, 2), oe = wt(kt);
  oe.nodeValue = `"${kr}" means all the candidates ranked on `, on(2), yt(kt), yr(kt, (w) => j(l, w), () => g(l));
  var ue = Lt(kt, 2), ht = wt(ue), Gt = wt(ht);
  return Us(Gt, {
    get jsonData() {
      return g(_);
    },
    get currentRound() {
      return i();
    },
    set currentRound(w) {
      i(w);
    },
    get mouseEventType() {
      return g(u);
    },
    set mouseEventType(w) {
      j(u, lt(w));
    },
    get mouseData() {
      return g(h);
    },
    set mouseData(w) {
      j(h, lt(w));
    },
    get mouseY() {
      return g(c);
    },
    set mouseY(w) {
      j(c, lt(w));
    },
    get animateOnePhase() {
      return g(d);
    },
    set animateOnePhase(w) {
      j(d, lt(w));
    },
    get runFullAnimation() {
      return g(p);
    },
    set runFullAnimation(w) {
      j(p, lt(w));
    }
  }), yt(ht), yt(ue), yt(rt), un(
    (w) => {
      Ve(H, `${g(_).config.contest ?? ""}, ${w ?? ""} to be elected, Round ${i() ?? ""}.`), Ve(ae, g(o));
    },
    [M]
  ), fe(t, S), Ur({
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), Mt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w) {
      i(w), Mt();
    },
    get onRoundChanged() {
      return s();
    },
    set onRoundChanged(w = (D) => {
    }) {
      s(w), Mt();
    }
  });
}
al(["click"]);
customElements.define("pie-chart", gs(
  hc,
  {
    electionSummary: {},
    currentRound: {},
    onRoundChanged: {}
  },
  [],
  [],
  !0
));
