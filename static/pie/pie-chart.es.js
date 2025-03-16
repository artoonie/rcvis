var xa = Object.defineProperty;
var Ti = (t) => {
  throw TypeError(t);
};
var wa = (t, e, n) => e in t ? xa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Jt = (t, e, n) => wa(t, typeof e != "symbol" ? e + "" : e, n), Ei = (t, e, n) => e.has(t) || Ti("Cannot " + n);
var St = (t, e, n) => (Ei(t, e, "read from private field"), n ? n.call(t) : e.get(t)), kr = (t, e, n) => e.has(t) ? Ti("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Rr = (t, e, n, r) => (Ei(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const ba = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ba);
const Kr = 1, Wr = 2, rs = 4, $a = 8, Aa = 16, Ta = 1, Ea = 4, ka = 8, Ra = 16, Na = 1, Sa = 2, is = "[", Jr = "[!", Zr = "]", Ge = {}, Ct = Symbol(), ki = !1, te = 2, ss = 4, Qr = 8, ti = 16, Te = 32, sn = 64, Xn = 128, Gt = 256, Yn = 512, Pt = 1024, Ee = 2048, an = 4096, be = 8192, dr = 16384, Ca = 32768, ei = 65536, Ma = 1 << 19, as = 1 << 20, _n = Symbol("$state"), os = Symbol("legacy props"), Da = Symbol("");
var ni = Array.isArray, Oa = Array.prototype.indexOf, ri = Array.from, Un = Object.keys, Gn = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, Pa = Object.getOwnPropertyDescriptors, Ia = Object.prototype, Fa = Array.prototype, ls = Object.getPrototypeOf;
function us(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let wn = [], Dr = [];
function fs() {
  var t = wn;
  wn = [], us(t);
}
function La() {
  var t = Dr;
  Dr = [], us(t);
}
function ii(t) {
  wn.length === 0 && queueMicrotask(fs), wn.push(t);
}
function Ri() {
  wn.length > 0 && fs(), Dr.length > 0 && La();
}
function cs(t) {
  return t === this.v;
}
function qa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function si(t) {
  return !qa(t, this.v);
}
function Va(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function za() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ba(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ha() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ya(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ga() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ka() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Wa = !1;
function Ut(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: cs,
    rv: 0,
    wv: 0
  };
  return n;
}
function ot(t) {
  return /* @__PURE__ */ Ja(Ut(t));
}
// @__NO_SIDE_EFFECTS__
function ai(t, e = !1) {
  const n = Ut(t);
  return e || (n.equals = si), n;
}
// @__NO_SIDE_EFFECTS__
function Ja(t) {
  return et !== null && !Zt && et.f & te && (le === null ? eo([t]) : le.push(t)), t;
}
function B(t, e) {
  return et !== null && !Zt && Ss() && et.f & (te | ti) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (le === null || !le.includes(t)) && Ka(), Or(t, e);
}
function Or(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = xs(), ds(t, Ee), nt !== null && nt.f & Pt && !(nt.f & (Te | sn)) && (ye === null ? no([t]) : ye.push(t))), e;
}
function ds(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & Ee || ($e(s, e), a & (Pt | Gt) && (a & te ? ds(
        /** @type {Derived} */
        s,
        an
      ) : mr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(t) {
  var e = te | Ee, n = et !== null && et.f & te ? (
    /** @type {Derived} */
    et
  ) : null;
  return nt === null || n !== null && n.f & Gt ? e |= Gt : nt.f |= as, {
    ctx: Ot,
    deps: null,
    effects: null,
    equals: cs,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? nt
  };
}
// @__NO_SIDE_EFFECTS__
function Za(t) {
  const e = /* @__PURE__ */ Pe(t);
  return e.equals = si, e;
}
function hs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      de(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Qa(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & te))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function to(t) {
  var e, n = nt;
  tn(Qa(t));
  try {
    hs(t), e = bs(t);
  } finally {
    tn(n);
  }
  return e;
}
function vs(t) {
  var e = to(t), n = (Se || t.f & Gt) && t.deps !== null ? an : Pt;
  $e(t, n), t.equals(e) || (t.v = e, t.wv = xs());
}
function hr(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let W = !1;
function we(t) {
  W = t;
}
let j;
function Vt(t) {
  if (t === null)
    throw hr(), Ge;
  return j = t;
}
function Ze() {
  return Vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ he(j)
  );
}
function K(t) {
  if (W) {
    if (/* @__PURE__ */ he(j) !== null)
      throw hr(), Ge;
    j = t;
  }
}
function Rn(t = 1) {
  if (W) {
    for (var e = t, n = j; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ he(n);
    j = n;
  }
}
function Pr() {
  for (var t = 0, e = j; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Zr) {
        if (t === 0) return e;
        t -= 1;
      } else (n === is || n === Jr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(e)
    );
    e.remove(), e = r;
  }
}
function lt(t, e = null, n) {
  if (typeof t != "object" || t === null || _n in t)
    return t;
  const r = ls(t);
  if (r !== Ia && r !== Fa)
    return t;
  var i = /* @__PURE__ */ new Map(), s = ni(t), a = Ut(0);
  s && i.set("length", Ut(
    /** @type {any[]} */
    t.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ua();
        var d = i.get(u);
        return d === void 0 ? (d = Ut(f.value), i.set(u, d)) : B(d, lt(f.value, o)), !0;
      },
      deleteProperty(l, u) {
        var f = i.get(u);
        if (f === void 0)
          u in l && i.set(u, Ut(Ct));
        else {
          if (s && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(u);
            Number.isInteger(c) && c < d.v && B(d, c);
          }
          B(f, Ct), Ni(a);
        }
        return !0;
      },
      get(l, u, f) {
        var m;
        if (u === _n)
          return t;
        var d = i.get(u), c = u in l;
        if (d === void 0 && (!c || (m = Fe(l, u)) != null && m.writable) && (d = Ut(lt(c ? l[u] : Ct, o)), i.set(u, d)), d !== void 0) {
          var v = h(d);
          return v === Ct ? void 0 : v;
        }
        return Reflect.get(l, u, f);
      },
      getOwnPropertyDescriptor(l, u) {
        var f = Reflect.getOwnPropertyDescriptor(l, u);
        if (f && "value" in f) {
          var d = i.get(u);
          d && (f.value = h(d));
        } else if (f === void 0) {
          var c = i.get(u), v = c == null ? void 0 : c.v;
          if (c !== void 0 && v !== Ct)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(l, u) {
        var v;
        if (u === _n)
          return !0;
        var f = i.get(u), d = f !== void 0 && f.v !== Ct || Reflect.has(l, u);
        if (f !== void 0 || nt !== null && (!d || (v = Fe(l, u)) != null && v.writable)) {
          f === void 0 && (f = Ut(d ? lt(l[u], o) : Ct), i.set(u, f));
          var c = h(f);
          if (c === Ct)
            return !1;
        }
        return d;
      },
      set(l, u, f, d) {
        var b;
        var c = i.get(u), v = u in l;
        if (s && u === "length")
          for (var m = f; m < /** @type {Source<number>} */
          c.v; m += 1) {
            var y = i.get(m + "");
            y !== void 0 ? B(y, Ct) : m in l && (y = Ut(Ct), i.set(m + "", y));
          }
        c === void 0 ? (!v || (b = Fe(l, u)) != null && b.writable) && (c = Ut(void 0), B(c, lt(f, o)), i.set(u, c)) : (v = c.v !== Ct, B(c, lt(f, o)));
        var x = Reflect.getOwnPropertyDescriptor(l, u);
        if (x != null && x.set && x.set.call(d, f), !v) {
          if (s && typeof u == "string") {
            var k = (
              /** @type {Source<number>} */
              i.get("length")
            ), w = Number(u);
            Number.isInteger(w) && w >= k.v && B(k, w + 1);
          }
          Ni(a);
        }
        return !0;
      },
      ownKeys(l) {
        h(a);
        var u = Reflect.ownKeys(l).filter((c) => {
          var v = i.get(c);
          return v === void 0 || v.v !== Ct;
        });
        for (var [f, d] of i)
          d.v !== Ct && !(f in l) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        Ga();
      }
    }
  );
}
function Ni(t, e = 1) {
  B(t, t.v + e);
}
var Si, ms, ps, gs;
function Ir() {
  if (Si === void 0) {
    Si = window, ms = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    ps = Fe(e, "firstChild").get, gs = Fe(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function qe(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  return ps.call(t);
}
// @__NO_SIDE_EFFECTS__
function he(t) {
  return gs.call(t);
}
function tt(t, e) {
  if (!W)
    return /* @__PURE__ */ ce(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ce(j)
  );
  if (n === null)
    n = j.appendChild(qe());
  else if (e && n.nodeType !== 3) {
    var r = qe();
    return n == null || n.before(r), Vt(r), r;
  }
  return Vt(n), n;
}
function hn(t, e) {
  if (!W) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ce(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ he(n) : n;
  }
  return j;
}
function mt(t, e = 1, n = !1) {
  let r = W ? j : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ he(r);
  if (!W)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = qe();
    return r === null ? i == null || i.after(a) : r.before(a), Vt(a), a;
  }
  return Vt(r), /** @type {TemplateNode} */
  r;
}
function _s(t) {
  t.textContent = "";
}
let In = !1, jn = !1, Kn = null, Fn = !1, oi = !1;
function Ci(t) {
  oi = t;
}
let yn = [];
let et = null, Zt = !1;
function Qe(t) {
  et = t;
}
let nt = null;
function tn(t) {
  nt = t;
}
let le = null;
function eo(t) {
  le = t;
}
let At = null, qt = 0, ye = null;
function no(t) {
  ye = t;
}
let ys = 1, Wn = 0, Se = !1;
function xs() {
  return ++ys;
}
function En(t) {
  var d;
  var e = t.f;
  if (e & Ee)
    return !0;
  if (e & an) {
    var n = t.deps, r = (e & Gt) !== 0;
    if (n !== null) {
      var i, s, a = (e & Yn) !== 0, o = r && nt !== null && !Se, l = n.length;
      if (a || o) {
        var u = (
          /** @type {Derived} */
          t
        ), f = u.parent;
        for (i = 0; i < l; i++)
          s = n[i], (a || !((d = s == null ? void 0 : s.reactions) != null && d.includes(u))) && (s.reactions ?? (s.reactions = [])).push(u);
        a && (u.f ^= Yn), o && f !== null && !(f.f & Gt) && (u.f ^= Gt);
      }
      for (i = 0; i < l; i++)
        if (s = n[i], En(
          /** @type {Derived} */
          s
        ) && vs(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || nt !== null && !Se) && $e(t, Pt);
  }
  return !1;
}
function ro(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & Xn)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Xn;
      }
    n = n.parent;
  }
  throw In = !1, t;
}
function io(t) {
  return (t.f & dr) === 0 && (t.parent === null || (t.parent.f & Xn) === 0);
}
function vr(t, e, n, r) {
  if (In) {
    if (n === null && (In = !1), io(e))
      throw t;
    return;
  }
  n !== null && (In = !0);
  {
    ro(t, e);
    return;
  }
}
function ws(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & te ? ws(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? $e(s, Ee) : s.f & Pt && $e(s, an), mr(
        /** @type {Effect} */
        s
      ));
    }
}
function bs(t) {
  var v;
  var e = At, n = qt, r = ye, i = et, s = Se, a = le, o = Ot, l = Zt, u = t.f;
  At = /** @type {null | Value[]} */
  null, qt = 0, ye = null, Se = (u & Gt) !== 0 && (Zt || !Fn || et === null), et = u & (Te | sn) ? null : t, le = null, Mi(t.ctx), Zt = !1, Wn++;
  try {
    var f = (
      /** @type {Function} */
      (0, t.fn)()
    ), d = t.deps;
    if (At !== null) {
      var c;
      if (Jn(t, qt), d !== null && qt > 0)
        for (d.length = qt + At.length, c = 0; c < At.length; c++)
          d[qt + c] = At[c];
      else
        t.deps = d = At;
      if (!Se)
        for (c = qt; c < d.length; c++)
          ((v = d[c]).reactions ?? (v.reactions = [])).push(t);
    } else d !== null && qt < d.length && (Jn(t, qt), d.length = qt);
    if (Ss() && ye !== null && !Zt && d !== null && !(t.f & (te | an | Ee)))
      for (c = 0; c < /** @type {Source[]} */
      ye.length; c++)
        ws(
          ye[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Wn++, f;
  } finally {
    At = e, qt = n, ye = r, et = i, Se = s, le = a, Mi(o), Zt = l;
  }
}
function so(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Oa.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & te && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (At === null || !At.includes(e)) && ($e(e, an), e.f & (Gt | Yn) || (e.f ^= Yn), hs(
    /** @type {Derived} **/
    e
  ), Jn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Jn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      so(t, n[r]);
}
function li(t) {
  var e = t.f;
  if (!(e & dr)) {
    $e(t, Pt);
    var n = nt, r = Ot, i = Fn;
    nt = t, Fn = !0;
    try {
      e & ti ? mo(t) : Es(t), Ts(t);
      var s = bs(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = ys;
      var a = t.deps, o;
      ki && Wa && t.f & Ee;
    } catch (l) {
      vr(l, t, n, r || t.ctx);
    } finally {
      Fn = i, nt = n;
    }
  }
}
function ao() {
  try {
    Ha();
  } catch (t) {
    if (Kn !== null)
      vr(t, Kn, null);
    else
      throw t;
  }
}
function $s() {
  try {
    for (var t = 0; yn.length > 0; ) {
      t++ > 1e3 && ao();
      var e = yn, n = e.length;
      yn = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & Pt || (i.f ^= Pt);
        var s = lo(i);
        oo(s);
      }
    }
  } finally {
    jn = !1, Kn = null;
  }
}
function oo(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (dr | be)))
        try {
          En(r) && (li(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ks(r) : r.fn = null));
        } catch (i) {
          vr(i, r, null, r.ctx);
        }
    }
}
function mr(t) {
  jn || (jn = !0, queueMicrotask($s));
  for (var e = Kn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (sn | Te)) {
      if (!(n & Pt)) return;
      e.f ^= Pt;
    }
  }
  yn.push(e);
}
function lo(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & Te) !== 0, s = i && (r & Pt) !== 0;
    if (!s && !(r & be)) {
      if (r & ss)
        e.push(n);
      else if (i)
        n.f ^= Pt;
      else {
        var a = et;
        try {
          et = n, En(n) && li(n);
        } catch (u) {
          vr(u, n, null, n.ctx);
        } finally {
          et = a;
        }
      }
      var o = n.first;
      if (o !== null) {
        n = o;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
  return e;
}
function Q(t) {
  var e;
  for (Ri(); yn.length > 0; )
    jn = !0, $s(), Ri();
  return (
    /** @type {T} */
    e
  );
}
function h(t) {
  var e = t.f, n = (e & te) !== 0;
  if (et !== null && !Zt) {
    le !== null && le.includes(t) && ja();
    var r = et.deps;
    t.rv < Wn && (t.rv = Wn, At === null && r !== null && r[qt] === t ? qt++ : At === null ? At = [t] : (!Se || !At.includes(t)) && At.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Gt) && (i.f ^= Gt);
  }
  return n && (i = /** @type {Derived} */
  t, En(i) && vs(i)), t.v;
}
function Zn(t) {
  var e = Zt;
  try {
    return Zt = !0, t();
  } finally {
    Zt = e;
  }
}
const uo = -7169;
function $e(t, e) {
  t.f = t.f & uo | e;
}
function fo(t) {
  nt === null && et === null && Ba(), et !== null && et.f & Gt && nt === null && za(), oi && Va();
}
function co(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function on(t, e, n, r = !0) {
  var i = (t & sn) !== 0, s = nt, a = {
    ctx: Ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ee,
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
      li(a), a.f |= Ca;
    } catch (u) {
      throw de(a), u;
    }
  else e !== null && mr(a);
  var o = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (as | Xn)) === 0;
  if (!o && !i && r && (s !== null && co(a, s), et !== null && et.f & te)) {
    var l = (
      /** @type {Derived} */
      et
    );
    (l.effects ?? (l.effects = [])).push(a);
  }
  return a;
}
function ui(t) {
  fo();
  var e = nt !== null && (nt.f & Te) !== 0 && Ot !== null && !Ot.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      Ot
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: nt,
      reaction: et
    });
  } else {
    var r = fi(t);
    return r;
  }
}
function ho(t) {
  const e = on(sn, t, !0);
  return () => {
    de(e);
  };
}
function vo(t) {
  const e = on(sn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Qn(e, () => {
      de(e), r(void 0);
    }) : (de(e), r(void 0));
  });
}
function fi(t) {
  return on(ss, t, !1);
}
function As(t) {
  return on(Qr, t, !0);
}
function se(t, e = [], n = Pe) {
  const r = e.map(n);
  return pr(() => t(...r.map(h)));
}
function pr(t, e = 0) {
  return on(Qr | ti | e, t, !0);
}
function en(t, e = !0) {
  return on(Qr | Te, t, !0, e);
}
function Ts(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = oi, r = et;
    Ci(!0), Qe(null);
    try {
      e.call(null);
    } finally {
      Ci(n), Qe(r);
    }
  }
}
function Es(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    de(n, e), n = r;
  }
}
function mo(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Te || de(e), e = n;
  }
}
function de(t, e = !0) {
  var n = !1;
  if ((e || t.f & Ma) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  Es(t, e && !n), Jn(t, 0), $e(t, dr);
  var a = t.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Ts(t);
  var o = t.parent;
  o !== null && o.first !== null && ks(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function ks(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Qn(t, e) {
  var n = [];
  ci(t, n, !0), Rs(n, () => {
    de(t), e && e();
  });
}
function Rs(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function ci(t, e, n) {
  if (!(t.f & be)) {
    if (t.f ^= be, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & ei) !== 0 || (r.f & Te) !== 0;
      ci(r, e, s ? n : !1), r = i;
    }
  }
}
function tr(t) {
  Ns(t, !0);
}
function Ns(t, e) {
  if (t.f & be) {
    t.f ^= be, t.f & Pt || (t.f ^= Pt), En(t) && ($e(t, Ee), mr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ei) !== 0 || (n.f & Te) !== 0;
      Ns(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function po(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ot = null;
function Mi(t) {
  Ot = t;
}
function gr(t, e = !1, n) {
  Ot = {
    p: Ot,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function _r(t) {
  const e = Ot;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = nt, r = et;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          tn(s.effect), Qe(s.reaction), fi(s.fn);
        }
      } finally {
        tn(n), Qe(r);
      }
    }
    Ot = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Ss() {
  return !0;
}
const go = ["touchstart", "touchmove"];
function _o(t) {
  return go.includes(t);
}
const Cs = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new Set();
function Ms(t) {
  for (var e = 0; e < t.length; e++)
    Cs.add(t[e]);
  for (var n of Fr)
    n(t);
}
function Nn(t) {
  var w;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((w = t.composedPath) == null ? void 0 : w.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  ), a = 0, o = t.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    Gn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = et, d = nt;
    Qe(null), tn(null);
    try {
      for (var c, v = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          if (y !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (ni(y)) {
              var [x, ...k] = y;
              x.apply(s, [t, ...k]);
            } else
              y.call(s, t);
        } catch (b) {
          c ? v.push(b) : c = b;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        s = m;
      }
      if (c) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Qe(f), tn(d);
    }
  }
}
function di(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function ue(t, e) {
  var n = (
    /** @type {Effect} */
    nt
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function jt(t, e) {
  var n = (e & Na) !== 0, r = (e & Sa) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (W)
      return ue(j, null), j;
    i === void 0 && (i = di(s ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ ce(i)));
    var a = (
      /** @type {TemplateNode} */
      r || ms ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ue(o, l);
    } else
      ue(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function yo(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (W)
      return ue(j, null), j;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        di(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ ce(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ ce(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return ue(l, l), l;
  };
}
function xo(t = "") {
  if (!W) {
    var e = qe(t + "");
    return ue(e, e), e;
  }
  var n = j;
  return n.nodeType !== 3 && (n.before(n = qe()), Vt(n)), ue(n, n), n;
}
function Et(t, e) {
  if (W) {
    nt.nodes_end = j, Ze();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function oe(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Ds(t, e) {
  return Os(t, e);
}
function wo(t, e) {
  Ir(), e.intro = e.intro ?? !1;
  const n = e.target, r = W, i = j;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== is); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ he(s);
    if (!s)
      throw Ge;
    we(!0), Vt(
      /** @type {Comment} */
      s
    ), Ze();
    const a = Os(t, { ...e, anchor: s });
    if (j === null || j.nodeType !== 8 || /** @type {Comment} */
    j.data !== Zr)
      throw hr(), Ge;
    return we(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ge)
      return e.recover === !1 && Xa(), Ir(), _s(n), we(!1), Ds(t, e);
    throw a;
  } finally {
    we(r), Vt(i);
  }
}
const He = /* @__PURE__ */ new Map();
function Os(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  Ir();
  var o = /* @__PURE__ */ new Set(), l = (d) => {
    for (var c = 0; c < d.length; c++) {
      var v = d[c];
      if (!o.has(v)) {
        o.add(v);
        var m = _o(v);
        e.addEventListener(v, Nn, { passive: m });
        var y = He.get(v);
        y === void 0 ? (document.addEventListener(v, Nn, { passive: m }), He.set(v, 1)) : He.set(v, y + 1);
      }
    }
  };
  l(ri(Cs)), Fr.add(l);
  var u = void 0, f = vo(() => {
    var d = n ?? e.appendChild(qe());
    return en(() => {
      if (s) {
        gr({});
        var c = (
          /** @type {ComponentContext} */
          Ot
        );
        c.c = s;
      }
      i && (r.$$events = i), W && ue(
        /** @type {TemplateNode} */
        d,
        null
      ), u = t(d, r) || {}, W && (nt.nodes_end = j), s && _r();
    }), () => {
      var m;
      for (var c of o) {
        e.removeEventListener(c, Nn);
        var v = (
          /** @type {number} */
          He.get(c)
        );
        --v === 0 ? (document.removeEventListener(c, Nn), He.delete(c)) : He.set(c, v);
      }
      Fr.delete(l), d !== n && ((m = d.parentNode) == null || m.removeChild(d));
    };
  });
  return Lr.set(u, f), u;
}
let Lr = /* @__PURE__ */ new WeakMap();
function bo(t, e) {
  const n = Lr.get(t);
  return n ? (Lr.delete(t), n(e)) : Promise.resolve();
}
function xn(t, e, n = !1) {
  W && Ze();
  var r = t, i = null, s = null, a = Ct, o = n ? ei : 0, l = !1;
  const u = (d, c = !0) => {
    l = !0, f(c, d);
  }, f = (d, c) => {
    if (a === (a = d)) return;
    let v = !1;
    if (W) {
      const m = (
        /** @type {Comment} */
        r.data === Jr
      );
      !!a === m && (r = Pr(), Vt(r), we(!1), v = !0);
    }
    a ? (i ? tr(i) : c && (i = en(() => c(r))), s && Qn(s, () => {
      s = null;
    })) : (s ? tr(s) : c && (s = en(() => c(r))), i && Qn(i, () => {
      i = null;
    })), v && we(!0);
  };
  pr(() => {
    l = !1, e(u), l || f(null, null);
  }, o), W && (r = j);
}
function je(t, e) {
  return e;
}
function $o(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    ci(e[a].e, i, !0);
  var o = s > 0 && i.length === 0 && n !== null;
  if (o) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _s(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Re(t, e[0].prev, e[s - 1].next);
  }
  Rs(i, () => {
    for (var u = 0; u < s; u++) {
      var f = e[u];
      o || (r.delete(f.k), Re(t, f.prev, f.next)), de(f.e, !o);
    }
  });
}
function Ke(t, e, n, r, i, s = null) {
  var a = t, o = { items: /* @__PURE__ */ new Map(), first: null }, l = (e & rs) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    a = W ? Vt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ce(u)
    ) : u.appendChild(qe());
  }
  W && Ze();
  var f = null, d = !1, c = /* @__PURE__ */ Za(() => {
    var v = n();
    return ni(v) ? v : v == null ? [] : ri(v);
  });
  pr(() => {
    var v = h(c), m = v.length;
    if (d && m === 0)
      return;
    d = m === 0;
    let y = !1;
    if (W) {
      var x = (
        /** @type {Comment} */
        a.data === Jr
      );
      x !== (m === 0) && (a = Pr(), Vt(a), we(!1), y = !0);
    }
    if (W) {
      for (var k = null, w, b = 0; b < m; b++) {
        if (j.nodeType === 8 && /** @type {Comment} */
        j.data === Zr) {
          a = /** @type {Comment} */
          j, y = !0, we(!1);
          break;
        }
        var $ = v[b], N = r($, b);
        w = Ps(
          j,
          o,
          k,
          null,
          $,
          N,
          b,
          i,
          e,
          n
        ), o.items.set(N, w), k = w;
      }
      m > 0 && Vt(Pr());
    }
    W || Ao(v, o, a, i, e, r, n), s !== null && (m === 0 ? f ? tr(f) : f = en(() => s(a)) : f !== null && Qn(f, () => {
      f = null;
    })), y && we(!0), h(c);
  }), W && (a = j);
}
function Ao(t, e, n, r, i, s, a) {
  var S, _t, ft, pt;
  var o = (i & $a) !== 0, l = (i & (Kr | Wr)) !== 0, u = t.length, f = e.items, d = e.first, c = d, v, m = null, y, x = [], k = [], w, b, $, N;
  if (o)
    for (N = 0; N < u; N += 1)
      w = t[N], b = s(w, N), $ = f.get(b), $ !== void 0 && ((S = $.a) == null || S.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add($));
  for (N = 0; N < u; N += 1) {
    if (w = t[N], b = s(w, N), $ = f.get(b), $ === void 0) {
      var z = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : n;
      m = Ps(
        z,
        e,
        m,
        m === null ? e.first : m.next,
        w,
        b,
        N,
        r,
        i,
        a
      ), f.set(b, m), x = [], k = [], c = m.next;
      continue;
    }
    if (l && To($, w, N, i), $.e.f & be && (tr($.e), o && ((_t = $.a) == null || _t.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete($))), $ !== c) {
      if (v !== void 0 && v.has($)) {
        if (x.length < k.length) {
          var X = k[0], Y;
          m = X.prev;
          var st = x[0], at = x[x.length - 1];
          for (Y = 0; Y < x.length; Y += 1)
            Di(x[Y], X, n);
          for (Y = 0; Y < k.length; Y += 1)
            v.delete(k[Y]);
          Re(e, st.prev, at.next), Re(e, m, st), Re(e, at, X), c = X, m = at, N -= 1, x = [], k = [];
        } else
          v.delete($), Di($, c, n), Re(e, $.prev, $.next), Re(e, $, m === null ? e.first : m.next), Re(e, m, $), m = $;
        continue;
      }
      for (x = [], k = []; c !== null && c.k !== b; )
        c.e.f & be || (v ?? (v = /* @__PURE__ */ new Set())).add(c), k.push(c), c = c.next;
      if (c === null)
        continue;
      $ = c;
    }
    x.push($), m = $, c = $.next;
  }
  if (c !== null || v !== void 0) {
    for (var J = v === void 0 ? [] : ri(v); c !== null; )
      c.e.f & be || J.push(c), c = c.next;
    var Z = J.length;
    if (Z > 0) {
      var E = i & rs && u === 0 ? n : null;
      if (o) {
        for (N = 0; N < Z; N += 1)
          (ft = J[N].a) == null || ft.measure();
        for (N = 0; N < Z; N += 1)
          (pt = J[N].a) == null || pt.fix();
      }
      $o(e, J, E, f);
    }
  }
  o && ii(() => {
    var ct;
    if (y !== void 0)
      for ($ of y)
        (ct = $.a) == null || ct.apply();
  }), nt.first = e.first && e.first.e, nt.last = m && m.e;
}
function To(t, e, n, r) {
  r & Kr && Or(t.v, e), r & Wr ? Or(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Ps(t, e, n, r, i, s, a, o, l, u) {
  var f = (l & Kr) !== 0, d = (l & Aa) === 0, c = f ? d ? /* @__PURE__ */ ai(i) : Ut(i) : i, v = l & Wr ? Ut(a) : a, m = {
    i: v,
    v: c,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return m.e = en(() => o(t, c, v, u), W), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? e.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function Di(t, e, n) {
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
      /* @__PURE__ */ he(s)
    );
    i.before(s), s = a;
  }
}
function Re(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Oi(t, e, n, r, i) {
  var s = t, a = "", o;
  pr(() => {
    if (a === (a = e() ?? "")) {
      W && Ze();
      return;
    }
    o !== void 0 && (de(o), o = void 0), a !== "" && (o = en(() => {
      if (W) {
        j.data;
        for (var l = Ze(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ he(l);
        if (l === null)
          throw hr(), Ge;
        ue(j, u), s = Vt(l);
        return;
      }
      var f = a + "", d = di(f);
      ue(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), s.before(d);
    }));
  });
}
function hi(t, e) {
  ii(() => {
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
const Pi = [...` 	
\r\f \v\uFEFF`];
function Eo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || Pi.includes(r[a - 1])) && (o === r.length || Pi.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Sn(t, e, n, r, i, s) {
  var a = t.__className;
  if (W || a !== n) {
    var o = Eo(n, r, s);
    (!W || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  } else if (s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function Xe(t, e, n, r) {
  var i = t.__attributes ?? (t.__attributes = {});
  W && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Da] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && ko(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
var Ii = /* @__PURE__ */ new Map();
function ko(t) {
  var e = Ii.get(t.nodeName);
  if (e) return e;
  Ii.set(t.nodeName, e = []);
  for (var n, r = t, i = Element.prototype; i !== r; ) {
    n = Pa(r);
    for (var s in n)
      n[s].set && e.push(s);
    r = ls(r);
  }
  return e;
}
function Fi(t, e, n, r) {
  var i = t.__styles ?? (t.__styles = {});
  i[e] !== n && (i[e] = n, n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, ""));
}
function Li(t, e) {
  return t === e || (t == null ? void 0 : t[_n]) === e;
}
function We(t = {}, e, n, r) {
  return fi(() => {
    var i, s;
    return As(() => {
      i = s, s = (r == null ? void 0 : r()) || [], Zn(() => {
        t !== n(...s) && (e(t, ...s), i && Li(n(...i), t) && e(null, ...i));
      });
    }), () => {
      ii(() => {
        s && Li(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function Is(t) {
  Ot === null && po(), ui(() => {
    const e = Zn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let Cn = !1;
function Ro(t) {
  var e = Cn;
  try {
    return Cn = !1, [t(), Cn];
  } finally {
    Cn = e;
  }
}
function No(t, e = 1) {
  const n = t();
  return t(n + e), n;
}
function it(t, e, n, r) {
  var N;
  var i = (n & Ta) !== 0, s = !0, a = (n & ka) !== 0, o = (n & Ra) !== 0, l = !1, u;
  a ? [u, l] = Ro(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e];
  var f = _n in t || os in t, d = a && (((N = Fe(t, e)) == null ? void 0 : N.set) ?? (f && e in t && ((z) => t[e] = z))) || void 0, c = (
    /** @type {V} */
    r
  ), v = !0, m = !1, y = () => (m = !0, v && (v = !1, o ? c = Zn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  u === void 0 && r !== void 0 && (d && s && Ya(), u = y(), d && d(u));
  var x;
  if (x = () => {
    var z = (
      /** @type {V} */
      t[e]
    );
    return z === void 0 ? y() : (v = !0, m = !1, z);
  }, !(n & Ea))
    return x;
  if (d) {
    var k = t.$$legacy;
    return function(z, X) {
      return arguments.length > 0 ? ((!X || k || l) && d(X ? x() : z), z) : x();
    };
  }
  var w = !1, b = /* @__PURE__ */ ai(u), $ = /* @__PURE__ */ Pe(() => {
    var z = x(), X = h(b);
    return w ? (w = !1, X) : b.v = z;
  });
  return i || ($.equals = si), function(z, X) {
    if (arguments.length > 0) {
      const Y = X ? h($) : a ? lt(z) : z;
      return $.equals(Y) || (w = !0, B(b, Y), m && c !== void 0 && (c = Y), Zn(() => h($))), z;
    }
    return h($);
  };
}
function So(t) {
  return new Co(t);
}
var xe, Yt;
class Co {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    kr(this, xe);
    /** @type {Record<string, any>} */
    kr(this, Yt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ ai(o);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return h(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === os ? !0 : (h(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return B(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    Rr(this, Yt, (e.hydrate ? wo : Ds)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Q(), Rr(this, xe, i.$$events);
    for (const a of Object.keys(St(this, Yt)))
      a === "$set" || a === "$destroy" || a === "$on" || Gn(this, a, {
        get() {
          return St(this, Yt)[a];
        },
        /** @param {any} value */
        set(o) {
          St(this, Yt)[a] = o;
        },
        enumerable: !0
      });
    St(this, Yt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, St(this, Yt).$destroy = () => {
      bo(St(this, Yt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    St(this, Yt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    St(this, xe)[e] = St(this, xe)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return St(this, xe)[e].push(r), () => {
      St(this, xe)[e] = St(this, xe)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    St(this, Yt).$destroy();
  }
}
xe = new WeakMap(), Yt = new WeakMap();
let Fs;
typeof HTMLElement == "function" && (Fs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    Jt(this, "$$ctor");
    /** Slots */
    Jt(this, "$$s");
    /** @type {any} The Svelte component instance */
    Jt(this, "$$c");
    /** Whether or not the custom element is connected */
    Jt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Jt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Jt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Jt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Jt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Jt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Jt(this, "$$me");
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
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), Et(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Mo(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = Ln(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = So({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ho(() => {
        As(() => {
          var s;
          this.$$r = !0;
          for (const a of Un(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Ln(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const o = this.$$c.$on(s, a);
          this.$$l_u.set(a, o);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ln(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Un(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function Ln(t, e, n, r) {
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
function Mo(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function vi(t, e, n, r, i, s) {
  let a = class extends Fs {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Un(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Un(e).forEach((o) => {
    Gn(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var d;
        l = Ln(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (d = Fe(u, o)) == null ? void 0 : d.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Gn(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Do = { value: () => {
} };
function Ls() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new qn(n);
}
function qn(t) {
  this._ = t;
}
function Oo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
qn.prototype = Ls.prototype = {
  constructor: qn,
  on: function(t, e) {
    var n = this._, r = Oo(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Po(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = qi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = qi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new qn(t);
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
function Po(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function qi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Do, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var qr = "http://www.w3.org/1999/xhtml";
const Vi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function yr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Vi.hasOwnProperty(e) ? { space: Vi[e], local: t } : t;
}
function Io(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === qr && e.documentElement.namespaceURI === qr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Fo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function qs(t) {
  var e = yr(t);
  return (e.local ? Fo : Io)(e);
}
function Lo() {
}
function mi(t) {
  return t == null ? Lo : function() {
    return this.querySelector(t);
  };
}
function qo(t) {
  typeof t != "function" && (t = mi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new zt(r, this._parents);
}
function Vo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function zo() {
  return [];
}
function Vs(t) {
  return t == null ? zo : function() {
    return this.querySelectorAll(t);
  };
}
function Bo(t) {
  return function() {
    return Vo(t.apply(this, arguments));
  };
}
function Ho(t) {
  typeof t == "function" ? t = Bo(t) : t = Vs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new zt(r, i);
}
function zs(t) {
  return function() {
    return this.matches(t);
  };
}
function Bs(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Xo = Array.prototype.find;
function Yo(t) {
  return function() {
    return Xo.call(this.children, t);
  };
}
function Uo() {
  return this.firstElementChild;
}
function Go(t) {
  return this.select(t == null ? Uo : Yo(typeof t == "function" ? t : Bs(t)));
}
var jo = Array.prototype.filter;
function Ko() {
  return Array.from(this.children);
}
function Wo(t) {
  return function() {
    return jo.call(this.children, t);
  };
}
function Jo(t) {
  return this.selectAll(t == null ? Ko : Wo(typeof t == "function" ? t : Bs(t)));
}
function Zo(t) {
  typeof t != "function" && (t = zs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new zt(r, this._parents);
}
function Hs(t) {
  return new Array(t.length);
}
function Qo() {
  return new zt(this._enter || this._groups.map(Hs), this._parents);
}
function er(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
er.prototype = {
  constructor: er,
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
function tl(t) {
  return function() {
    return t;
  };
}
function el(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new er(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function nl(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, d = s.length, c = new Array(f), v;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = v = a.call(l, l.__data__, o, e) + "", u.has(v) ? i[o] = l : u.set(v, l));
  for (o = 0; o < d; ++o)
    v = a.call(t, s[o], o, s) + "", (l = u.get(v)) ? (r[o] = l, l.__data__ = s[o], u.delete(v)) : n[o] = new er(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function rl(t) {
  return t.__data__;
}
function il(t, e) {
  if (!arguments.length) return Array.from(this, rl);
  var n = e ? nl : el, r = this._parents, i = this._groups;
  typeof t != "function" && (t = tl(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], d = i[u], c = d.length, v = sl(t.call(f, f && f.__data__, u, r)), m = v.length, y = o[u] = new Array(m), x = a[u] = new Array(m), k = l[u] = new Array(c);
    n(f, d, y, x, k, v, e);
    for (var w = 0, b = 0, $, N; w < m; ++w)
      if ($ = y[w]) {
        for (w >= b && (b = w + 1); !(N = x[b]) && ++b < m; ) ;
        $._next = N || null;
      }
  }
  return a = new zt(a, r), a._enter = o, a._exit = l, a;
}
function sl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function al() {
  return new zt(this._exit || this._groups.map(Hs), this._parents);
}
function ol(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function ll(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], d = u.length, c = o[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || f[m]) && (c[m] = v);
  for (; l < i; ++l)
    o[l] = n[l];
  return new zt(o, this._parents);
}
function ul() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function fl(t) {
  t || (t = cl);
  function e(d, c) {
    return d && c ? t(d.__data__, c.__data__) : !d - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new zt(i, this._parents).order();
}
function cl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function dl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function hl() {
  return Array.from(this);
}
function vl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ml() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function pl() {
  return !this.node();
}
function gl(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function _l(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function yl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function xl(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function wl(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function bl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function $l(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Al(t, e) {
  var n = yr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? yl : _l : typeof e == "function" ? n.local ? $l : bl : n.local ? wl : xl)(n, e));
}
function Xs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Tl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function El(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function kl(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Rl(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Tl : typeof e == "function" ? kl : El)(t, e, n ?? "")) : nn(this.node(), t);
}
function nn(t, e) {
  return t.style.getPropertyValue(e) || Xs(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Nl(t) {
  return function() {
    delete this[t];
  };
}
function Sl(t, e) {
  return function() {
    this[t] = e;
  };
}
function Cl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ml(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Nl : typeof e == "function" ? Cl : Sl)(t, e)) : this.node()[t];
}
function Ys(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new Us(t);
}
function Us(t) {
  this._node = t, this._names = Ys(t.getAttribute("class") || "");
}
Us.prototype = {
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
function Gs(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function js(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Dl(t) {
  return function() {
    Gs(this, t);
  };
}
function Ol(t) {
  return function() {
    js(this, t);
  };
}
function Pl(t, e) {
  return function() {
    (e.apply(this, arguments) ? Gs : js)(this, t);
  };
}
function Il(t, e) {
  var n = Ys(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Pl : e ? Dl : Ol)(n, e));
}
function Fl() {
  this.textContent = "";
}
function Ll(t) {
  return function() {
    this.textContent = t;
  };
}
function ql(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Vl(t) {
  return arguments.length ? this.each(t == null ? Fl : (typeof t == "function" ? ql : Ll)(t)) : this.node().textContent;
}
function zl() {
  this.innerHTML = "";
}
function Bl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Hl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Xl(t) {
  return arguments.length ? this.each(t == null ? zl : (typeof t == "function" ? Hl : Bl)(t)) : this.node().innerHTML;
}
function Yl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ul() {
  return this.each(Yl);
}
function Gl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jl() {
  return this.each(Gl);
}
function Kl(t) {
  var e = typeof t == "function" ? t : qs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Wl() {
  return null;
}
function Jl(t, e) {
  var n = typeof t == "function" ? t : qs(t), r = e == null ? Wl : typeof e == "function" ? e : mi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ql() {
  return this.each(Zl);
}
function tu() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function eu() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function nu(t) {
  return this.select(t ? eu : tu);
}
function ru(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function iu(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function su(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function au(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ou(t, e, n) {
  return function() {
    var r = this.__on, i, s = iu(e);
    if (r) {
      for (var a = 0, o = r.length; a < o; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), i = { type: t.type, name: t.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function lu(t, e, n) {
  var r = su(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, u = o.length, f; l < u; ++l)
        for (i = 0, f = o[l]; i < s; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = e ? ou : au, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Ks(t, e, n) {
  var r = Xs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function uu(t, e) {
  return function() {
    return Ks(this, t, e);
  };
}
function fu(t, e) {
  return function() {
    return Ks(this, t, e.apply(this, arguments));
  };
}
function cu(t, e) {
  return this.each((typeof e == "function" ? fu : uu)(t, e));
}
function* du() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ws = [null];
function zt(t, e) {
  this._groups = t, this._parents = e;
}
function ln() {
  return new zt([[document.documentElement]], Ws);
}
function hu() {
  return this;
}
zt.prototype = ln.prototype = {
  constructor: zt,
  select: qo,
  selectAll: Ho,
  selectChild: Go,
  selectChildren: Jo,
  filter: Zo,
  data: il,
  enter: Qo,
  exit: al,
  join: ol,
  merge: ll,
  selection: hu,
  order: ul,
  sort: fl,
  call: dl,
  nodes: hl,
  node: vl,
  size: ml,
  empty: pl,
  each: gl,
  attr: Al,
  style: Rl,
  property: Ml,
  classed: Il,
  text: Vl,
  html: Xl,
  raise: Ul,
  lower: jl,
  append: Kl,
  insert: Jl,
  remove: Ql,
  clone: nu,
  datum: ru,
  on: lu,
  dispatch: cu,
  [Symbol.iterator]: du
};
function gt(t) {
  return typeof t == "string" ? new zt([[document.querySelector(t)]], [document.documentElement]) : new zt([[t]], Ws);
}
function gi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Js(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function kn() {
}
var bn = 0.7, nr = 1 / bn, Je = "\\s*([+-]?\\d+)\\s*", $n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vu = /^#([0-9a-f]{3,8})$/, mu = new RegExp(`^rgb\\(${Je},${Je},${Je}\\)$`), pu = new RegExp(`^rgb\\(${fe},${fe},${fe}\\)$`), gu = new RegExp(`^rgba\\(${Je},${Je},${Je},${$n}\\)$`), _u = new RegExp(`^rgba\\(${fe},${fe},${fe},${$n}\\)$`), yu = new RegExp(`^hsl\\(${$n},${fe},${fe}\\)$`), xu = new RegExp(`^hsla\\(${$n},${fe},${fe},${$n}\\)$`), zi = {
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
gi(kn, Ve, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: wu,
  formatHsl: bu,
  formatRgb: Hi,
  toString: Hi
});
function Bi() {
  return this.rgb().formatHex();
}
function wu() {
  return this.rgb().formatHex8();
}
function bu() {
  return Zs(this).formatHsl();
}
function Hi() {
  return this.rgb().formatRgb();
}
function Ve(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = vu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Xi(e) : n === 3 ? new Dt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Mn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Mn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = mu.exec(t)) ? new Dt(e[1], e[2], e[3], 1) : (e = pu.exec(t)) ? new Dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = gu.exec(t)) ? Mn(e[1], e[2], e[3], e[4]) : (e = _u.exec(t)) ? Mn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = yu.exec(t)) ? Gi(e[1], e[2] / 100, e[3] / 100, 1) : (e = xu.exec(t)) ? Gi(e[1], e[2] / 100, e[3] / 100, e[4]) : zi.hasOwnProperty(t) ? Xi(zi[t]) : t === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function Xi(t) {
  return new Dt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Mn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Dt(t, e, n, r);
}
function $u(t) {
  return t instanceof kn || (t = Ve(t)), t ? (t = t.rgb(), new Dt(t.r, t.g, t.b, t.opacity)) : new Dt();
}
function Vr(t, e, n, r) {
  return arguments.length === 1 ? $u(t) : new Dt(t, e, n, r ?? 1);
}
function Dt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
gi(Dt, Vr, Js(kn, {
  brighter(t) {
    return t = t == null ? nr : Math.pow(nr, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? bn : Math.pow(bn, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Dt(Le(this.r), Le(this.g), Le(this.b), rr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: Au,
  formatRgb: Ui,
  toString: Ui
}));
function Yi() {
  return `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}`;
}
function Au() {
  return `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}${Ie((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ui() {
  const t = rr(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Le(this.r)}, ${Le(this.g)}, ${Le(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function rr(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Le(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ie(t) {
  return t = Le(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Gi(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Qt(t, e, n, r);
}
function Zs(t) {
  if (t instanceof Qt) return new Qt(t.h, t.s, t.l, t.opacity);
  if (t instanceof kn || (t = Ve(t)), !t) return new Qt();
  if (t instanceof Qt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new Qt(a, o, l, t.opacity);
}
function Tu(t, e, n, r) {
  return arguments.length === 1 ? Zs(t) : new Qt(t, e, n, r ?? 1);
}
function Qt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
gi(Qt, Tu, Js(kn, {
  brighter(t) {
    return t = t == null ? nr : Math.pow(nr, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? bn : Math.pow(bn, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Dt(
      Nr(t >= 240 ? t - 240 : t + 120, i, r),
      Nr(t, i, r),
      Nr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Qt(ji(this.h), Dn(this.s), Dn(this.l), rr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = rr(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ji(this.h)}, ${Dn(this.s) * 100}%, ${Dn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ji(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Dn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Nr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const _i = (t) => () => t;
function Eu(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ku(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Ru(t) {
  return (t = +t) == 1 ? Qs : function(e, n) {
    return n - e ? ku(e, n, t) : _i(isNaN(e) ? n : e);
  };
}
function Qs(t, e) {
  var n = e - t;
  return n ? Eu(t, n) : _i(isNaN(t) ? e : t);
}
const ir = function t(e) {
  var n = Ru(e);
  function r(i, s) {
    var a = n((i = Vr(i)).r, (s = Vr(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Qs(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Nu(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Su(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Cu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ye(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Mu(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function ae(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Du(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ye(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sr = new RegExp(zr.source, "g");
function Ou(t) {
  return function() {
    return t;
  };
}
function Pu(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ta(t, e) {
  var n = zr.lastIndex = Sr.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = zr.exec(t)) && (i = Sr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: ae(r, i) })), n = Sr.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Pu(l[0].x) : Ou(e) : (e = l.length, function(u) {
    for (var f = 0, d; f < e; ++f) o[(d = l[f]).i] = d.x(u);
    return o.join("");
  });
}
function Ye(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? _i(e) : (n === "number" ? ae : n === "string" ? (r = Ve(e)) ? (e = r, ir) : ta : e instanceof Ve ? ir : e instanceof Date ? Mu : Su(e) ? Nu : Array.isArray(e) ? Cu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Du : ae)(t, e);
}
var Ki = 180 / Math.PI, Br = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ea(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Ki,
    skewX: Math.atan(l) * Ki,
    scaleX: a,
    scaleY: o
  };
}
var On;
function Iu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Br : ea(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Fu(t) {
  return t == null || (On || (On = document.createElementNS("http://www.w3.org/2000/svg", "g")), On.setAttribute("transform", t), !(t = On.transform.baseVal.consolidate())) ? Br : (t = t.matrix, ea(t.a, t.b, t.c, t.d, t.e, t.f));
}
function na(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, d, c, v, m) {
    if (u !== d || f !== c) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: ae(u, d) }, { i: y - 2, x: ae(f, c) });
    } else (d || c) && v.push("translate(" + d + e + c + n);
  }
  function a(u, f, d, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: ae(u, f) })) : f && d.push(i(d) + "rotate(" + f + r);
  }
  function o(u, f, d, c) {
    u !== f ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: ae(u, f) }) : f && d.push(i(d) + "skewX(" + f + r);
  }
  function l(u, f, d, c, v, m) {
    if (u !== d || f !== c) {
      var y = v.push(i(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: ae(u, d) }, { i: y - 2, x: ae(f, c) });
    } else (d !== 1 || c !== 1) && v.push(i(v) + "scale(" + d + "," + c + ")");
  }
  return function(u, f) {
    var d = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, d, c), a(u.rotate, f.rotate, d, c), o(u.skewX, f.skewX, d, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, c), u = f = null, function(v) {
      for (var m = -1, y = c.length, x; ++m < y; ) d[(x = c[m]).i] = x.x(v);
      return d.join("");
    };
  };
}
var Lu = na(Iu, "px, ", "px)", "deg)"), qu = na(Fu, ", ", ")", ")"), rn = 0, mn = 0, vn = 0, ra = 1e3, sr, pn, ar = 0, ze = 0, xr = 0, An = typeof performance == "object" && performance.now ? performance : Date, ia = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function yi() {
  return ze || (ia(Vu), ze = An.now() + xr);
}
function Vu() {
  ze = 0;
}
function or() {
  this._call = this._time = this._next = null;
}
or.prototype = sa.prototype = {
  constructor: or,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? yi() : +n) + (e == null ? 0 : +e), !this._next && pn !== this && (pn ? pn._next = this : sr = this, pn = this), this._call = t, this._time = n, Hr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Hr());
  }
};
function sa(t, e, n) {
  var r = new or();
  return r.restart(t, e, n), r;
}
function zu() {
  yi(), ++rn;
  for (var t = sr, e; t; )
    (e = ze - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --rn;
}
function Wi() {
  ze = (ar = An.now()) + xr, rn = mn = 0;
  try {
    zu();
  } finally {
    rn = 0, Hu(), ze = 0;
  }
}
function Bu() {
  var t = An.now(), e = t - ar;
  e > ra && (xr -= e, ar = t);
}
function Hu() {
  for (var t, e = sr, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : sr = n);
  pn = t, Hr(r);
}
function Hr(t) {
  if (!rn) {
    mn && (mn = clearTimeout(mn));
    var e = t - ze;
    e > 24 ? (t < 1 / 0 && (mn = setTimeout(Wi, t - An.now() - xr)), vn && (vn = clearInterval(vn))) : (vn || (ar = An.now(), vn = setInterval(Bu, ra)), rn = 1, ia(Wi));
  }
}
function Ji(t, e, n) {
  var r = new or();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Xu = Ls("start", "end", "cancel", "interrupt"), Yu = [], aa = 0, Zi = 1, Xr = 2, Vn = 3, Qi = 4, Yr = 5, zn = 6;
function wr(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Uu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Xu,
    tween: Yu,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: aa
  });
}
function xi(t, e) {
  var n = ee(t, e);
  if (n.state > aa) throw new Error("too late; already scheduled");
  return n;
}
function ve(t, e) {
  var n = ee(t, e);
  if (n.state > Vn) throw new Error("too late; already running");
  return n;
}
function ee(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Uu(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = sa(s, 0, n.time);
  function s(u) {
    n.state = Zi, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, d, c, v;
    if (n.state !== Zi) return l();
    for (f in r)
      if (v = r[f], v.name === n.name) {
        if (v.state === Vn) return Ji(a);
        v.state === Qi ? (v.state = zn, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[f]) : +f < e && (v.state = zn, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[f]);
      }
    if (Ji(function() {
      n.state === Vn && (n.state = Qi, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Xr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Xr) {
      for (n.state = Vn, i = new Array(c = n.tween.length), f = 0, d = -1; f < c; ++f)
        (v = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++d] = v);
      i.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Yr, 1), d = -1, c = i.length; ++d < c; )
      i[d].call(t, f);
    n.state === Yr && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = zn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Gu(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Xr && r.state < Yr, r.state = zn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function ju(t) {
  return this.each(function() {
    Gu(this, t);
  });
}
function Ku(t, e) {
  var n, r;
  return function() {
    var i = ve(this, t), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, o = r.length; a < o; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Wu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = ve(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = o;
          break;
        }
      l === u && i.push(o);
    }
    s.tween = i;
  };
}
function Ju(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ee(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ku : Wu)(n, t, e));
}
function wi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ve(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ee(i, r).value[e];
  };
}
function oa(t, e) {
  var n;
  return (typeof e == "number" ? ae : e instanceof Ve ? ir : (n = Ve(e)) ? (e = n, ir) : ta)(t, e);
}
function Zu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function tf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ef(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function nf(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function rf(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function sf(t, e) {
  var n = yr(t), r = n === "transform" ? qu : oa;
  return this.attrTween(t, typeof e == "function" ? (n.local ? rf : nf)(n, r, wi(this, "attr." + t, e)) : e == null ? (n.local ? Qu : Zu)(n) : (n.local ? ef : tf)(n, r, e));
}
function af(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function of(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function lf(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && of(t, s)), n;
  }
  return i._value = e, i;
}
function uf(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && af(t, s)), n;
  }
  return i._value = e, i;
}
function ff(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = yr(t);
  return this.tween(n, (r.local ? lf : uf)(r, e));
}
function cf(t, e) {
  return function() {
    xi(this, t).delay = +e.apply(this, arguments);
  };
}
function df(t, e) {
  return e = +e, function() {
    xi(this, t).delay = e;
  };
}
function hf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? cf : df)(e, t)) : ee(this.node(), e).delay;
}
function vf(t, e) {
  return function() {
    ve(this, t).duration = +e.apply(this, arguments);
  };
}
function mf(t, e) {
  return e = +e, function() {
    ve(this, t).duration = e;
  };
}
function pf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vf : mf)(e, t)) : ee(this.node(), e).duration;
}
function gf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ve(this, t).ease = e;
  };
}
function _f(t) {
  var e = this._id;
  return arguments.length ? this.each(gf(e, t)) : ee(this.node(), e).ease;
}
function yf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ve(this, t).ease = n;
  };
}
function xf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(yf(this._id, t));
}
function wf(t) {
  typeof t != "function" && (t = zs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Ae(r, this._parents, this._name, this._id);
}
function bf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, d = a[o] = new Array(f), c, v = 0; v < f; ++v)
      (c = l[v] || u[v]) && (d[v] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new Ae(a, this._parents, this._name, this._id);
}
function $f(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Af(t, e, n) {
  var r, i, s = $f(e) ? xi : ve;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Tf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ee(this.node(), n).on.on(t) : this.each(Af(n, t, e));
}
function Ef(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function kf() {
  return this.on("end.remove", Ef(this._id));
}
function Rf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = mi(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, d, c = 0; c < l; ++c)
      (f = o[c]) && (d = t.call(f, f.__data__, c, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[c] = d, wr(u[c], e, n, c, u, ee(f, n)));
  return new Ae(s, this._parents, e, n);
}
function Nf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Vs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var c = t.call(f, f.__data__, d, l), v, m = ee(f, n), y = 0, x = c.length; y < x; ++y)
          (v = c[y]) && wr(v, e, n, y, c, m);
        s.push(c), a.push(f);
      }
  return new Ae(s, a, e, n);
}
var Sf = ln.prototype.constructor;
function Cf() {
  return new Sf(this._groups, this._parents);
}
function Mf(t, e) {
  var n, r, i;
  return function() {
    var s = nn(this, t), a = (this.style.removeProperty(t), nn(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function la(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Df(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = nn(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Of(t, e, n) {
  var r, i, s;
  return function() {
    var a = nn(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), nn(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Pf(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = ve(this, t), u = l.on, f = l.value[s] == null ? o || (o = la(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function If(t, e, n) {
  var r = (t += "") == "transform" ? Lu : oa;
  return e == null ? this.styleTween(t, Mf(t, r)).on("end.style." + t, la(t)) : typeof e == "function" ? this.styleTween(t, Of(t, r, wi(this, "style." + t, e))).each(Pf(this._id, t)) : this.styleTween(t, Df(t, r, e), n).on("end.style." + t, null);
}
function Ff(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Lf(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Ff(t, a, n)), r;
  }
  return s._value = e, s;
}
function qf(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Lf(t, e, n ?? ""));
}
function Vf(t) {
  return function() {
    this.textContent = t;
  };
}
function zf(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Bf(t) {
  return this.tween("text", typeof t == "function" ? zf(wi(this, "text", t)) : Vf(t == null ? "" : t + ""));
}
function Hf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Xf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Hf(i)), e;
  }
  return r._value = t, r;
}
function Yf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Xf(t));
}
function Uf() {
  for (var t = this._name, e = this._id, n = ua(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = ee(l, e);
        wr(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ae(r, this._parents, t, n);
}
function Gf() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = ve(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var jf = 0;
function Ae(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Bn(t) {
  return ln().transition(t);
}
function ua() {
  return ++jf;
}
var ge = ln.prototype;
Ae.prototype = Bn.prototype = {
  constructor: Ae,
  select: Rf,
  selectAll: Nf,
  selectChild: ge.selectChild,
  selectChildren: ge.selectChildren,
  filter: wf,
  merge: bf,
  selection: Cf,
  transition: Uf,
  call: ge.call,
  nodes: ge.nodes,
  node: ge.node,
  size: ge.size,
  empty: ge.empty,
  each: ge.each,
  on: Tf,
  attr: sf,
  attrTween: ff,
  style: If,
  styleTween: qf,
  text: Bf,
  textTween: Yf,
  remove: kf,
  tween: Ju,
  delay: hf,
  duration: pf,
  ease: _f,
  easeVarying: xf,
  end: Gf,
  [Symbol.iterator]: ge[Symbol.iterator]
};
function Kf(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Kf
};
function Jf(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Zf(t) {
  var e, n;
  t instanceof Ae ? (e = t._id, t = t._name) : (e = ua(), (n = Wf).time = yi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && wr(l, t, e, u, a, n || Jf(l, e));
  return new Ae(r, this._parents, t, e);
}
ln.prototype.interrupt = ju;
ln.prototype.transition = Zf;
const Ur = Math.PI, Gr = 2 * Ur, Oe = 1e-6, Qf = Gr - Oe;
function fa(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function tc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return fa;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class ec {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? fa : tc(e);
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
    let a = this._x1, o = this._y1, l = r - e, u = i - n, f = a - e, d = o - n, c = f * f + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > Oe) if (!(Math.abs(d * l - u * f) > Oe) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let v = r - a, m = i - o, y = l * l + u * u, x = v * v + m * m, k = Math.sqrt(y), w = Math.sqrt(c), b = s * Math.tan((Ur - Math.acos((y + c - x) / (2 * k * w))) / 2), $ = b / w, N = b / k;
      Math.abs($ - 1) > Oe && this._append`L${e + $ * f},${n + $ * d}`, this._append`A${s},${s},0,0,${+(d * v > f * m)},${this._x1 = e + N * l},${this._y1 = n + N * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, d = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Oe || Math.abs(this._y1 - f) > Oe) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Gr + Gr), c > Qf ? this._append`A${r},${r},0,1,${d},${e - o},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = f}` : c > Oe && this._append`A${r},${r},0,${+(c >= Ur)},${d},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nc(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const rc = nc("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Tt(t) {
  return function() {
    return t;
  };
}
const ts = Math.abs, wt = Math.atan2, De = Math.cos, ic = Math.max, Cr = Math.min, ie = Math.sin, Ue = Math.sqrt, Mt = 1e-12, Tn = Math.PI, lr = Tn / 2, Hn = 2 * Tn;
function sc(t) {
  return t > 1 ? 0 : t < -1 ? Tn : Math.acos(t);
}
function es(t) {
  return t >= 1 ? lr : t <= -1 ? -lr : Math.asin(t);
}
function ac(t) {
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
  }, () => new ec(e);
}
function oc(t) {
  return t.innerRadius;
}
function lc(t) {
  return t.outerRadius;
}
function uc(t) {
  return t.startAngle;
}
function fc(t) {
  return t.endAngle;
}
function cc(t) {
  return t && t.padAngle;
}
function dc(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, d = o - s, c = d * l - f * u;
  if (!(c * c < Mt))
    return c = (f * (e - s) - d * (t - i)) / c, [t + c * l, e + c * u];
}
function Pn(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Ue(o * o + l * l), f = u * l, d = -u * o, c = t + f, v = e + d, m = n + f, y = r + d, x = (c + m) / 2, k = (v + y) / 2, w = m - c, b = y - v, $ = w * w + b * b, N = i - s, z = c * y - m * v, X = (b < 0 ? -1 : 1) * Ue(ic(0, N * N * $ - z * z)), Y = (z * b - w * X) / $, st = (-z * w - b * X) / $, at = (z * b + w * X) / $, J = (-z * w + b * X) / $, Z = Y - x, E = st - k, S = at - x, _t = J - k;
  return Z * Z + E * E > S * S + _t * _t && (Y = at, st = J), {
    cx: Y,
    cy: st,
    x01: -f,
    y01: -d,
    x11: Y * (i / N - 1),
    y11: st * (i / N - 1)
  };
}
function _e() {
  var t = oc, e = lc, n = Tt(0), r = null, i = uc, s = fc, a = cc, o = null, l = ac(u);
  function u() {
    var f, d, c = +t.apply(this, arguments), v = +e.apply(this, arguments), m = i.apply(this, arguments) - lr, y = s.apply(this, arguments) - lr, x = ts(y - m), k = y > m;
    if (o || (o = f = l()), v < c && (d = v, v = c, c = d), !(v > Mt)) o.moveTo(0, 0);
    else if (x > Hn - Mt)
      o.moveTo(v * De(m), v * ie(m)), o.arc(0, 0, v, m, y, !k), c > Mt && (o.moveTo(c * De(y), c * ie(y)), o.arc(0, 0, c, y, m, k));
    else {
      var w = m, b = y, $ = m, N = y, z = x, X = x, Y = a.apply(this, arguments) / 2, st = Y > Mt && (r ? +r.apply(this, arguments) : Ue(c * c + v * v)), at = Cr(ts(v - c) / 2, +n.apply(this, arguments)), J = at, Z = at, E, S;
      if (st > Mt) {
        var _t = es(st / c * ie(Y)), ft = es(st / v * ie(Y));
        (z -= _t * 2) > Mt ? (_t *= k ? 1 : -1, $ += _t, N -= _t) : (z = 0, $ = N = (m + y) / 2), (X -= ft * 2) > Mt ? (ft *= k ? 1 : -1, w += ft, b -= ft) : (X = 0, w = b = (m + y) / 2);
      }
      var pt = v * De(w), ct = v * ie(w), Kt = c * De(N), Bt = c * ie(N);
      if (at > Mt) {
        var It = v * De(b), Ht = v * ie(b), Ft = c * De($), Lt = c * ie($), dt;
        if (x < Tn)
          if (dt = dc(pt, ct, Ft, Lt, It, Ht, Kt, Bt)) {
            var me = pt - dt[0], bt = ct - dt[1], Xt = It - dt[0], Wt = Ht - dt[1], kt = 1 / ie(sc((me * Xt + bt * Wt) / (Ue(me * me + bt * bt) * Ue(Xt * Xt + Wt * Wt))) / 2), vt = Ue(dt[0] * dt[0] + dt[1] * dt[1]);
            J = Cr(at, (c - vt) / (kt - 1)), Z = Cr(at, (v - vt) / (kt + 1));
          } else
            J = Z = 0;
      }
      X > Mt ? Z > Mt ? (E = Pn(Ft, Lt, pt, ct, v, Z, k), S = Pn(It, Ht, Kt, Bt, v, Z, k), o.moveTo(E.cx + E.x01, E.cy + E.y01), Z < at ? o.arc(E.cx, E.cy, Z, wt(E.y01, E.x01), wt(S.y01, S.x01), !k) : (o.arc(E.cx, E.cy, Z, wt(E.y01, E.x01), wt(E.y11, E.x11), !k), o.arc(0, 0, v, wt(E.cy + E.y11, E.cx + E.x11), wt(S.cy + S.y11, S.cx + S.x11), !k), o.arc(S.cx, S.cy, Z, wt(S.y11, S.x11), wt(S.y01, S.x01), !k))) : (o.moveTo(pt, ct), o.arc(0, 0, v, w, b, !k)) : o.moveTo(pt, ct), !(c > Mt) || !(z > Mt) ? o.lineTo(Kt, Bt) : J > Mt ? (E = Pn(Kt, Bt, It, Ht, c, -J, k), S = Pn(pt, ct, Ft, Lt, c, -J, k), o.lineTo(E.cx + E.x01, E.cy + E.y01), J < at ? o.arc(E.cx, E.cy, J, wt(E.y01, E.x01), wt(S.y01, S.x01), !k) : (o.arc(E.cx, E.cy, J, wt(E.y01, E.x01), wt(E.y11, E.x11), !k), o.arc(0, 0, c, wt(E.cy + E.y11, E.cx + E.x11), wt(S.cy + S.y11, S.cx + S.x11), k), o.arc(S.cx, S.cy, J, wt(S.y11, S.x11), wt(S.y01, S.x01), !k))) : o.arc(0, 0, c, N, $, k);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Tn / 2;
    return [De(d) * f, ie(d) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Tt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Tt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Tt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Tt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Tt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Tt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Tt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function hc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vc(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mc(t) {
  return t;
}
function Mr() {
  var t = mc, e = vc, n = null, r = Tt(0), i = Tt(Hn), s = Tt(0);
  function a(o) {
    var l, u = (o = hc(o)).length, f, d, c = 0, v = new Array(u), m = new Array(u), y = +r.apply(this, arguments), x = Math.min(Hn, Math.max(-Hn, i.apply(this, arguments) - y)), k, w = Math.min(Math.abs(x) / u, s.apply(this, arguments)), b = w * (x < 0 ? -1 : 1), $;
    for (l = 0; l < u; ++l)
      ($ = m[v[l] = l] = +t(o[l], l, o)) > 0 && (c += $);
    for (e != null ? v.sort(function(N, z) {
      return e(m[N], m[z]);
    }) : n != null && v.sort(function(N, z) {
      return n(o[N], o[z]);
    }), l = 0, d = c ? (x - u * b) / c : 0; l < u; ++l, y = k)
      f = v[l], $ = m[f], k = y + ($ > 0 ? $ * d : 0) + b, m[f] = {
        data: o[f],
        index: l,
        value: $,
        startAngle: y,
        endAngle: k,
        padAngle: w
      };
    return m;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Tt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Tt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Tt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Tt(+o), a) : s;
  }, a;
}
function gn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
gn.prototype = {
  constructor: gn,
  scale: function(t) {
    return t === 1 ? this : new gn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new gn(this.k, this.x + this.k * t, this.y + this.k * e);
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
gn.prototype;
const Ne = {}, jr = "No Further Rankings";
function ur(t, e) {
  let n = 0;
  for (let r = 1; r < e; r++) {
    const i = t.results[r - 1].tallyResults;
    for (let s = 0; s < i.length; s++) {
      const a = i[s].transfers;
      if (a) {
        const o = a.exhausted;
        o && (n += Number(o));
      }
    }
  }
  return n;
}
function ca(t, e, n) {
  if (e < 1)
    return [];
  const r = t.results[e - 1].tallyResults, i = [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s][n];
    a != null && i.push(a);
  }
  return i;
}
function fr(t, e) {
  return ca(t, e, "eliminated");
}
function cr(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(ca(t, r, "elected"));
  return n;
}
var pc = /* @__PURE__ */ yo('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const gc = { hash: "svelte-3kpd", code: "" };
function da(t, e) {
  gr(e, !0), hi(t, gc);
  let n = it(e, "jsonData", 7), r = it(e, "round", 15), i = it(e, "mouseEventType", 15), s = it(e, "mouseData", 15), a = it(e, "mouseY", 15), o = it(e, "animateOneRound", 15), l = it(e, "animateOnePhase", 15), u = it(e, "runFullAnimation", 15), f = it(e, "setRound", 15);
  const d = 800, c = 800, v = Math.min(d, c) * 0.3, m = d / 2, y = c / 2, x = "Pie", k = "Donut", w = "TextLayer", b = "#transfer", $ = "url(#cross-hatch)", N = 1.15, z = 0.1, X = 750, Y = 800;
  let st = [], at = [], J = [], Z = 0, E = ot(0), S = ot(null);
  function _t() {
    const p = gt(h(S));
    p.select("#" + x).remove(), p.select("#" + k).remove(), p.select("#" + w).remove();
  }
  function ft() {
    _t(), J = pt(), st = Be(x, J, m, y, 0, ct());
  }
  Is(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), o(Ce), l(_), u(ne), f(G), me(), ft();
  });
  function pt() {
    const p = dt(r());
    return Z = Ft(r()), p;
  }
  function ct() {
    return v;
  }
  function Kt() {
    return ct() * 1.41;
  }
  function Bt(p, A) {
    if (p === "exhausted") return ur(n(), A);
    {
      const R = n().results[A - 1].tally;
      return Number(R[p]);
    }
  }
  function It(p, A) {
    return Bt(p, A).toLocaleString("en-US");
  }
  function Ht(p, A) {
    return (Bt(p, A) / Z).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Ft(p) {
    const A = n().results[p - 1].tally;
    let R = 0;
    for (let [V, C] of Object.entries(A))
      R += Number(C);
    return R;
  }
  function Lt(p, A) {
    const R = n().results[A - 1].tallyResults;
    let V = 0;
    const C = R.findIndex((q) => (q == null ? void 0 : q.elected) && p == q.elected);
    if (C >= 0) {
      const q = R[C].transfers;
      if (q)
        for (let [F, D] of Object.entries(q)) V += Number(D);
    } else
      return 0;
    return V;
  }
  function dt(p) {
    const A = n().results;
    let R = A[Math.max(0, p - 2)].tally;
    const V = [], C = [];
    for (let [F, D] of Object.entries(R))
      V.push({ label: F, value: 0 });
    R = A[p - 1].tally;
    for (let F of V) {
      const D = Number(R[F.label]), H = Lt(F.label, p);
      H > 0 ? (C.push({
        label: F.label + b,
        value: H
      }), F.value = D - H, C.push(F)) : (F.value = D, C.push(F));
    }
    const q = ur(n(), p);
    return C.push({ label: "exhausted", value: q }), C;
  }
  function me() {
    const p = gt(h(S)).select("defs").select("#cross-hatch");
    let A = 0;
    for (let [R, V] of Object.entries(n().results[0].tally)) {
      A < 10 ? Ne[R] = rc[A] : Ne[R] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"), A++;
      {
        const C = p.clone(!0);
        C.attr("id", R.replaceAll(" ", "-")).select("rect").attr("fill", Ne[R]), C.select("path").attr("stroke", "#505050");
      }
    }
    Ne.exhausted = $, Ne["Inactive Ballots"] = $;
  }
  function bt() {
    gt(h(S)).select("#" + k).remove();
  }
  function Xt(p) {
    console.log("animate phase 1");
    const A = Bn("global").duration(Y);
    p && A.on("end", p), bt(), T(), br(), cn(0, ct()), un();
  }
  function Wt(p) {
    console.log("animate phase 2");
    const A = Bn("global").duration(Y);
    p && A.on("end", p), O();
  }
  function kt(p) {
    console.log("animate phase 3");
    const A = Bn("global").duration(Y);
    p && A.on("end", p), No(r), L(r()), g(ct());
  }
  function vt() {
    Rt = !1;
  }
  let Rt = !1;
  function ne() {
    if (Rt) {
      console.log("buttons locked out");
      return;
    }
    Rt = !0, ke();
  }
  function ke() {
    const p = r() < n().results.length - 1 ? ke : vt;
    Xt(() => {
      Wt(() => {
        kt(p);
      });
    });
  }
  function Ce() {
    if (Rt) {
      console.log("buttons locked out");
      return;
    }
    if (r() >= n().results.length) {
      Rt = !1;
      return;
    }
    Rt = !0, Xt(() => {
      Wt(() => {
        kt(vt);
      });
    });
  }
  function _() {
    if (r() >= n().results.length) {
      un(), console.log("Finished at round ", r());
      return;
    }
    B(E, (h(E) + 1) % 3), Rt = !0, h(E) === 1 ? Xt(vt) : h(E) === 2 ? Wt(vt) : h(E) === 0 ? kt(vt) : (Rt = !1, console.warn("displayPhase out of range at ", h(E)));
  }
  function L(p) {
    J = dt(p), st = va(x, J, 0, ct(), !0);
  }
  function G(p) {
    if (Rt) {
      console.log("buttons locked out");
      return;
    }
    r(p), ft();
  }
  function g(p, A) {
    Mr().sort(null).value((D) => D.value);
    const R = gt(h(S)).select("#" + k), V = _e().outerRadius(p).innerRadius(p - 1), C = R.selectAll(".slice");
    let q = C.size();
    function F() {
      q--, q === 0 && $r();
    }
    C.select("path").transition("global").duration(X).attr("d", (D) => V(D)).on("end", (D) => F());
  }
  function T() {
    const p = Nt(st);
    at = fn(k, p, m, y, ct(), Kt(), !1, !0);
  }
  function O() {
    const p = pe(at, st);
    at = bi(
      k,
      p,
      /* previousDonutInfoGlobal, */
      ct(),
      Kt(),
      !1
    );
  }
  function I(p) {
    const A = p.data.label;
    return Ne[A.split("#")[0]];
  }
  function rt() {
    const p = {}, A = n().results[r() - 1].tallyResults;
    for (let R = 0; R < A.length; R++) {
      let V = A[R].eliminated;
      if (V === void 0 && (V = A[R].elected), V === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const C = A[R].transfers;
      if (C === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [q, F] of Object.entries(C))
        p[q] === void 0 ? p[q] = Number(F) : p[q] += Number(F);
    }
    return p;
  }
  function Nt(p) {
    const A = [], R = Z, V = n().results[r() - 1].tallyResults;
    for (let C = 0; C < V.length; C++) {
      let q = V[C].eliminated;
      if (q === void 0 && (q = V[C].elected), q === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const F = V[C].transfers;
      if (F === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let D = p.find((P) => P.data.label == q + b);
      D === void 0 && (D = p.find((P) => P.data.label == q));
      let H = 0;
      if (D) H = D.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [P, U] of Object.entries(F)) {
        let ut;
        const re = p.find((ht) => ht.data.label == P);
        if (re)
          ut = structuredClone(re);
        else if (P == "exhausted")
          ut = {
            data: { label: P, value: Number(U) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (P == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", U);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", P);
          continue;
        }
        const M = Number(U) / R * 2 * Math.PI;
        ut.startAngle = H, H = ut.endAngle = H + M, ut.index = C, ut.data.label = `${ut.data.label}#${C}`, A.push(ut);
      }
    }
    return A;
  }
  function yt(p, A, R) {
    const V = {};
    for (let [C, q] of Object.entries(p)) {
      const F = R.find((P) => C == P.data.label);
      if (F === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", C);
        continue;
      }
      const D = (F.startAngle + F.endAngle) / 2, H = p[F.data.label] / A * 2 * Math.PI;
      V[F.data.label] = D - H / 2;
    }
    return V;
  }
  function pe(p, A) {
    const R = [], V = Z, C = rt(), q = yt(C, V, A);
    for (let [F, D] of p.entries()) {
      const H = structuredClone(D), P = D.endAngle - D.startAngle, U = A.find((ut) => D.data.label.indexOf(ut.data.label) === 0);
      if (U) {
        const ut = U.data.label;
        H.startAngle = q[ut], q[ut] += P, H.endAngle = H.startAngle + P;
      } else if (D.data.label.indexOf("exhausted") === 0)
        H.startAngle = D.startAngle, H.endAngle = D.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", D.data.label);
        continue;
      }
      H.index = F, R.push(H);
    }
    return R;
  }
  function xt(p, A, R, V, C) {
    const F = gt(h(S)).append("g").attr("id", w).attr("transform", `translate(${A}, ${R})`), D = _e().innerRadius(V * N).outerRadius(V * N);
    F.selectAll("text").data(p).enter().each(function(H) {
      H.endAngle - H.startAngle < z || H.data.label.includes(b) || gt(this).append("g").attr("id", (P) => P.data.label).classed("eliminated", (P) => C.includes(P.data.label.split("#")[0]) || P.data.label.includes(b)).each(function(P, U) {
        P.data.label === "exhausted" && gt(this).on("mouseenter", (ut, re) => ma(ut)).on("mouseleave", (ut, re) => pa());
      }).append("text").attr("transform", (P) => `translate(${D.centroid(P)})`).attr("text-anchor", (P) => Me(P.startAngle, P.endAngle)).text((P) => P.data.label === "exhausted" ? jr : P.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((P) => It(P.data.label, r()) + " (" + Ht(P.data.label, r()) + ")");
    });
  }
  function $t(p, A, R) {
    const C = gt(h(S)).select("#" + w), q = C.selectAll("tspan"), F = C.selectAll("g").data(p, (U) => U.data.label).classed("eliminated", (U) => R.includes(U.data.label.split("#")[0]) || U.data.label.includes(b)), D = _e().innerRadius(A * N).outerRadius(A * N + 1);
    q.transition("global").duration(X).attr("transform", (U) => `translate(${D.centroid(U)})`).attr("text-anchor", (U) => Me(U.startAngle, U.endAngle)), F.select("text").transition("global").duration(X).attr("transform", (U) => `translate(${D.centroid(U)})`).attr("text-anchor", (U) => Me(U.startAngle, U.endAngle)).on("end", (U) => P());
    let H = F.size();
    function P(U) {
      H--, H === 0 && (C.remove(), xt(p, m, y, A, R));
    }
  }
  function Be(p, A, R, V, C, q, F = !0, D = !1) {
    const P = Mr().sort(null).value((U) => U.value)(A);
    return fn(p, P, R, V, C, q, F, D), P;
  }
  function un() {
    gt(h(S)).select("#" + x).selectAll(".elected").style("stroke", "darkblue").style("stroke-width", "2px");
  }
  function fn(p, A, R, V, C, q, F, D) {
    const H = fr(n(), r()), P = cr(n(), r()), re = gt(h(S)).attr("width", "100%").attr("height", c).attr("viewBox", `0 0 ${d} ${c}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", p).attr("transform", `translate(${R}, ${V})`).selectAll(".slice").data(A).enter().append("g").attr("class", "slice").classed("eliminated", (M) => H.includes(M.data.label.split("#")[0]) || M.data.label.includes(b)).classed("elected", (M) => P.includes(M.data.label.split("#")[0]) && !M.data.label.includes(b)).attr("id", (M) => M.data.label).on("mouseenter", (M, ht) => Tr(M, ht)).on("mouseleave", (M, ht) => Er(M, ht)), dn = _e().outerRadius(q).innerRadius(C);
    if (D) {
      const M = _e().outerRadius(C + 1).innerRadius(C);
      re.append("path").attr("d", M).transition("global").duration(X).attr("d", (ht) => dn(ht)).attr("fill", (ht) => I(ht)).on("end", (ht) => Ar());
    } else
      re.append("path").attr("d", (M) => dn(M)).attr("fill", (M) => I(M)), Ar();
    return F && xt(A, R, V, q, H), A;
  }
  function br() {
    const R = gt(h(S)).select("#" + w).selectAll(".eliminated");
    R.size() > 0 && R.classed("finished", !0);
  }
  function $r() {
    const R = gt(h(S)).select("#" + w).selectAll(".finished");
    R.size() > 0 && R.remove();
  }
  function cn(p, A) {
    const C = gt(h(S)).select("#" + x).selectAll(".eliminated"), q = _e().innerRadius(p), F = _e().outerRadius(A);
    C.classed("finished", !0).select("path").transition("global").duration(X).attrTween("d", function(D) {
      const H = Ye(A, p);
      return function(P) {
        return F.innerRadius(H(P)), F(D);
      };
    }).attr("fill", (D) => `url(#${D.data.label.split("#")[0].replaceAll(" ", "-")})`), C.clone(!0).classed("finished", !0).select("path").transition("global").duration(X).attrTween("d", function(D) {
      const H = Ye(A, p);
      return function(P) {
        return q.outerRadius(H(P)), q(D);
      };
    }).attr("fill", (D) => I(D));
  }
  function Me(p, A) {
    const R = (p + A) / 2;
    return R > Math.PI * 11 / 6 || R < Math.PI * 1 / 6 || R > Math.PI * 5 / 6 && R < Math.PI * 7 / 6 ? "middle" : R < Math.PI ? "start" : "end";
  }
  function Ar() {
    gt(h(S)).select("#" + w).raise().append("g").remove();
  }
  function va(p, A, R, V, C) {
    const F = Mr().sort(null).value((D) => D.value)(A);
    return bi(
      p,
      F,
      /* previousPieInfo, */
      R,
      V,
      C
    ), F;
  }
  function bi(p, A, R, V, C) {
    const q = fr(n(), r()), F = cr(n(), r()), D = _e().outerRadius(V).innerRadius(R).startAngle((M) => M.startAngle).endAngle((M) => M.endAngle), H = _e().outerRadius(V).innerRadius(R), U = gt(h(S)).select("#" + p);
    U.selectAll(".slice").attr("prevStart", (M) => M.startAngle).attr("prevEnd", (M) => M.endAngle);
    const ut = U.selectAll(".slice").data(A, (M) => M.data.label);
    ut.enter().append("g").attr("class", "slice").attr("id", (M) => M.data.label).classed("eliminated", !0).on("mouseenter", (M, ht) => Tr(M, ht)).on("mouseleave", (M, ht) => Er(M, ht)).append("path").attr("d", (M) => H(M)).attr("fill", (M) => I(M)), ut.classed("eliminated", (M) => q.includes(M.data.label.split("#")[0])).classed("elected", (M) => F.includes(M.data.label.split("#")[0])).on("mouseenter", (M, ht) => Tr(M, ht)).on("mouseleave", (M, ht) => Er(M, ht));
    let re = ut.size();
    function dn() {
      re--, re <= 0 && (Ar(), U.selectAll(".finished").remove());
    }
    return ut.select("path").transition("global").duration(X).attrTween("d", function(M) {
      const ht = Number(gt(this.parentNode).attr("prevStart")), ga = Number(gt(this.parentNode).attr("prevEnd")), _a = Ye(ht, M.startAngle), ya = Ye(ga, M.endAngle);
      return (Ai) => (D.startAngle(_a(Ai)).endAngle(ya(Ai)), D(M));
    }).on("end", dn), C && $t(A, V, q), A;
  }
  function Tr(p, A) {
    s(A.data.label.split("#")[0]), i("enter"), a(p.clientY);
  }
  function Er(p, A) {
    s(A.data.label.split("#")[0]), i("leave");
  }
  function ma(p, A) {
    i("show-exhausted"), a(p.clientY);
  }
  function pa(p, A) {
    i("hide-exhausted");
  }
  var $i = pc();
  return We($i, (p) => B(S, p), () => h(S)), Et(t, $i), _r({
    get jsonData() {
      return n();
    },
    set jsonData(p) {
      n(p), Q();
    },
    get round() {
      return r();
    },
    set round(p) {
      r(p), Q();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(p) {
      i(p), Q();
    },
    get mouseData() {
      return s();
    },
    set mouseData(p) {
      s(p), Q();
    },
    get mouseY() {
      return a();
    },
    set mouseY(p) {
      a(p), Q();
    },
    get animateOneRound() {
      return o();
    },
    set animateOneRound(p) {
      o(p), Q();
    },
    get animateOnePhase() {
      return l();
    },
    set animateOnePhase(p) {
      l(p), Q();
    },
    get runFullAnimation() {
      return u();
    },
    set runFullAnimation(p) {
      u(p), Q();
    },
    get setRound() {
      return f();
    },
    set setRound(p) {
      f(p), Q();
    }
  });
}
vi(
  da,
  {
    jsonData: {},
    round: {},
    mouseEventType: {},
    mouseData: {},
    mouseY: {},
    animateOneRound: {},
    animateOnePhase: {},
    runFullAnimation: {},
    setRound: {}
  },
  [],
  [],
  !0
);
function ns(t, e, n, r) {
  if (h(e)) return;
  t.preventDefault();
  const i = t.currentTarget.getBoundingClientRect(), o = (("touches" in t && t.touches.length > 0 ? t.touches[0].clientX : "clientX" in t ? t.clientX : 0) - i.left) / i.width, l = Math.min(Math.max(Math.floor(o * n()), 0), n() - 1);
  r(l, !0);
  const u = (d) => {
    const m = (("touches" in d && d.touches.length > 0 ? d.touches[0].clientX : "clientX" in d ? d.clientX : 0) - i.left) / i.width, y = Math.min(Math.max(Math.floor(m * n()), 0), n() - 1);
    r(y, !0);
  }, f = () => {
    document.removeEventListener("mousemove", u), document.removeEventListener("touchmove", u), document.removeEventListener("mouseup", f), document.removeEventListener("touchend", f), document.removeEventListener("touchcancel", f);
  };
  document.addEventListener("mousemove", u), document.addEventListener("touchmove", u), document.addEventListener("mouseup", f), document.addEventListener("touchend", f), document.addEventListener("touchcancel", f);
}
function _c(t, e) {
  B(e, !1);
}
var yc = (t, e, n) => e(h(n) - 1, !0), xc = (t, e, n) => e(h(n) + 1, !0), wc = /* @__PURE__ */ jt("<div><!></div>"), bc = (t, e, n) => e(t, h(n).moreInfoText || ""), $c = /* @__PURE__ */ jt('<button class="question-mark svelte-1mvbx0y">?</button>'), Ac = /* @__PURE__ */ jt("<div> <!></div>"), Tc = /* @__PURE__ */ jt('<div><div class="timeline-header svelte-1mvbx0y"> </div> <!></div>'), Ec = /* @__PURE__ */ jt('<div id="timeline-info-tooltip" class="svelte-1mvbx0y"> </div>'), kc = /* @__PURE__ */ jt('<div class="trs-wrapper svelte-1mvbx0y"><button class="prev-next-button svelte-1mvbx0y" style="float: left;"><a class="svelte-1mvbx0y"><!></a></button> <button class="prev-next-button svelte-1mvbx0y" style="float: right;"><a class="svelte-1mvbx0y"><!></a></button> <div class="center-div svelte-1mvbx0y"><div></div> <div class="timeline svelte-1mvbx0y"><div style="float: left; width: max-content;"></div></div> <div class="expand-collapse-button svelte-1mvbx0y"> </div></div> <!></div>');
const Rc = {
  hash: "svelte-1mvbx0y",
  code: `
  /* Include all styles from slider.css directly */.trs-wrapper.svelte-1mvbx0y {overflow:hidden;}.center-div.svelte-1mvbx0y {flex:1 1 auto;margin-left:30px;margin-right:30px;}.slider.svelte-1mvbx0y {width:100%;background-image:linear-gradient(10deg, #b1e0e6, #8ddae4);border-color:#333;border-style:solid;border-width:1px 1px 0 1px;border-radius:5px 5px 0 0;padding:5px 0 5px 0;display:flex;align-items:center;justify-content:space-evenly;
    /* Don't allow dragging */-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.slider.svelte-1mvbx0y:hover {cursor:grab;}.slider.svelte-1mvbx0y:active {cursor:grabbing;}.slider-when-timeline-hidden.svelte-1mvbx0y {border-width:1px;border-radius:5px;box-shadow:1px 5px 20px 0 #dedede;}

  /* Base styles for slider items */.slider-item.svelte-1mvbx0y, .slider-item-hidden-slider.svelte-1mvbx0y {float:left;text-align:center;pointer-events:none;overflow:hidden;text-overflow:clip;}

  /* Style for hideActiveTickText=true (default) */.slider-item-future.svelte-1mvbx0y {color:#545454 !important;}.slider-item-active.svelte-1mvbx0y {background-image:url('/assets/slider.svg');background-repeat:no-repeat;background-position:center;min-width:28px !important;min-height:16px;background-size:28px 16px;}

  /* Style for hideActiveTickText=false */.slider-item-hidden-slider.svelte-1mvbx0y {font-size:0.7em;}.slider-item-hidden-slider-past.svelte-1mvbx0y {line-height:1rem;}.slider-item-hidden-slider-future.svelte-1mvbx0y {color:#545454 !important;line-height:1rem;}.slider-item-hidden-slider-active.svelte-1mvbx0y {font-weight:bold;font-size:1.2em;background-image:url('/assets/drag-affordance.png');background-repeat:repeat-x;background-position-y:bottom;background-position-x:left;background-size:6px;padding-bottom:2px;}.prev-next-button.svelte-1mvbx0y {border-radius:50%;background-color:black;width:20px;height:20px;min-width:20px;min-height:20px;line-height:1em;margin-top:10px;text-align:center;border:none;}.prev-next-button.svelte-1mvbx0y:disabled {background-color:gray;pointer-events:none;}.prev-next-button.svelte-1mvbx0y:hover {background-image:linear-gradient(135deg, #8f8f8f, #000);cursor:pointer;}.prev-next-button.svelte-1mvbx0y a:where(.svelte-1mvbx0y) {font-size:20px;vertical-align:baseline;color:white;}.prev-next-button.svelte-1mvbx0y a:where(.svelte-1mvbx0y):hover {text-decoration:none;}

  /* Slider Timeline Data */.timeline.svelte-1mvbx0y {border-color:#333;border-style:solid;border-radius:0 0 5px 5px;background-image:linear-gradient(10deg, #b1e0e6, #8ddae4);overflow-y:auto;overflow-x:hidden;width:100%;margin-left:auto;margin-right:auto;transition:max-height 0.6s ease-out,
                opacity 0.3s ease-out,
                padding 0.3s ease-out,
                border-width 0.3s ease-out;}.timeline-header.svelte-1mvbx0y {text-align:center;}.timeline-column-active .timeline-header {font-weight:bold;}.timeline-column-past.svelte-1mvbx0y {opacity:75%;}.timeline-column-future.svelte-1mvbx0y {opacity:20%;}.timeline-column-active.svelte-1mvbx0y {opacity:100%;}.timeline-info-one-step.svelte-1mvbx0y {font-size:0.7em;float:left;}.timeline-info.svelte-1mvbx0y {border-radius:15px;padding:5px;margin:2px;border-width:2px;border-color:#CCCCCC33;border-style:ridge;background-color:lightgray;}.timeline-info-good.svelte-1mvbx0y {background-color:lightgreen;}.timeline-info-bad.svelte-1mvbx0y {background-color:lightcoral;}.question-mark.svelte-1mvbx0y {color:#fff;background-color:#6a6f6f;width:12px;height:12px;line-height:12px;vertical-align:middle;display:inline-block;float:right;border-radius:100%;font-size:10px;text-align:center;text-decoration:none;-webkit-box-shadow:inset -1px -1px 1px 0 rgba(0,0,0,0.25);-moz-box-shadow:inset -1px -1px 1px 0 rgba(0,0,0,0.25);box-shadow:inset -1px -1px 1px 0 rgba(0,0,0,0.25);margin:0 0 0 5px;padding:0;border:0;}

  /* Tooltip */#timeline-info-tooltip.svelte-1mvbx0y {background-color:#333;color:#fff;text-align:center;padding:5px;border-radius:6px;font-size:0.7em;max-width:400px;position:fixed;z-index:100;opacity:1 !important;}.expand-collapse-button.svelte-1mvbx0y {font-size:0.7em;width:max-content;padding:2px 15px;text-align:center;margin-left:auto;margin-right:auto;background-image:linear-gradient(10deg, #e7fafd, #d6ebee);border-width:0 1px 1px 1px;border-style:solid;border-radius:0 0 5px 5px;}.expand-collapse-button.svelte-1mvbx0y:hover {text-decoration:underline;cursor:pointer;}`
};
function ha(t, e) {
  gr(e, !0), hi(t, Rc);
  let n = it(e, "id", 7, "timeline-slider"), r = it(e, "numTicks", 7, 5), i = it(e, "width", 7, "600px"), s = it(e, "tickLabelPrefix", 7, "Round "), a = it(e, "hideTimelineInitially", 7, !0), o = it(e, "tickText", 7, "•"), l = it(e, "color", 7, "orangered"), u = it(e, "timelineData", 7, null), f = it(e, "animateOnLoad", 7, !1), d = it(e, "timelinePeeking", 7, !0), c = it(e, "hideActiveTickText", 7, !1), v = it(e, "timeBetweenStepsMs", 7, null), m = it(e, "leftArrowText", 7, "&#8249;"), y = it(e, "rightArrowText", 7, "&#8250;"), x = it(e, "value", 7, 0), k = it(e, "onValueChange", 7, (g) => {
  }), w = ot(lt(x())), b = ot(!a()), $ = ot(!1), N = ot(!1), z = ot(null), X = ot(""), Y = ot(!1), st = ot(lt({ x: 0, y: 0 }));
  const at = 100 / r(), J = Array.from({ length: r() }, (g, T) => T);
  let Z = ot(void 0), E = ot(lt([]));
  function S(g) {
    return Array.isArray(l()) ? g < l().length ? l()[g] : l()[0] : l();
  }
  function _t(g) {
    return Array.isArray(o()) ? g < o().length ? o()[g] : o()[0] : o();
  }
  ui(() => {
    h(w) !== x() && h(N) && ft(x());
  });
  function ft(g, T = !1) {
    g === h(w) || g < 0 || g >= r() || (B(w, lt(g)), x(g), h(b) && h(E) && h(E)[g] && h(E)[g].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    }), T ? window.requestAnimationFrame(() => k()(g)) : k()(g));
  }
  function pt() {
    B(b, !h(b)), h(b) && h(E) && h(E)[h(w)] && setTimeout(
      () => {
        h(E)[h(w)].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      },
      100
    );
  }
  function ct(g, T) {
    T && (B(X, lt(T)), B(st, lt({ x: g.clientX + 5, y: g.clientY - 30 })), B(Y, !0), setTimeout(
      () => {
        if (h(z)) {
          const O = h(z).getBoundingClientRect();
          O.right > window.innerWidth && (h(st).x = window.innerWidth - O.width - 10), O.bottom > window.innerHeight && (h(st).y = window.innerHeight - O.height - 10);
        }
      },
      0
    ));
  }
  function Kt(g) {
    const T = [
      {
        summaryText: "Something good",
        className: "timeline-info-good",
        moreInfoText: "Like a birth or the end of wars"
      },
      {
        summaryText: "Something bad",
        className: "timeline-info-bad",
        moreInfoText: "As if millions of voices suddenly cried out in terror and were suddenly silenced"
      },
      { summaryText: "Chance event!" }
    ], O = [];
    for (let I = 0; I < g; I++) {
      const rt = [];
      rt.push(T[Math.floor(Math.random() * 3)]), rt.push(T[Math.floor(Math.random() * 3)]), I % 2 === 0 && rt.push(T[Math.floor(Math.random() * 3)]), O.push(rt);
    }
    return O;
  }
  function Bt(g) {
    if (h($)) return;
    B($, !0);
    let T = h(b);
    d() && !h(b) && B(b, !0), ft(0, !1);
    const O = v() || Math.min(1e3 / r(), 100);
    let I = 1;
    const rt = () => {
      if (I >= r()) {
        B($, !1), d() && !T && B(b, !1), g && g(!0);
        return;
      }
      ft(I, !1), I++, setTimeout(
        () => {
          h($) ? window.requestAnimationFrame(rt) : g && g(!1);
        },
        O
      );
    };
    window.requestAnimationFrame(rt);
  }
  Is(async () => {
    u() || u(Kt(r())), B(N, !0), f() && setTimeout(
      () => {
        Bt();
      },
      100
    );
  });
  function It(g) {
    Bt(g);
  }
  function Ht() {
    pt();
  }
  var Ft = kc(), Lt = tt(Ft);
  Lt.__click = [yc, ft, w];
  var dt = tt(Lt), me = tt(dt);
  Oi(me, m), K(dt), K(Lt);
  var bt = mt(Lt, 2);
  bt.__click = [xc, ft, w];
  var Xt = tt(bt), Wt = tt(Xt);
  Oi(Wt, y), K(Xt), K(bt);
  var kt = mt(bt, 2), vt = tt(kt);
  let Rt;
  vt.__mousedown = [
    ns,
    $,
    r,
    ft
  ], vt.__touchstart = [
    ns,
    $,
    r,
    ft
  ], Ke(vt, 21, () => J, je, (g, T) => {
    var O = wc();
    let I;
    var rt = tt(O);
    {
      var Nt = (yt) => {
        var pe = xo();
        se((xt) => oe(pe, xt), [() => _t(h(T))]), Et(yt, pe);
      };
      xn(rt, (yt) => {
        c() && h(T) === h(w) || yt(Nt);
      });
    }
    K(O), se(
      (yt) => {
        Xe(O, "style", `max-width: ${at ?? ""}%; color: ${yt ?? ""};`), I = Sn(O, 1, "svelte-1mvbx0y", null, I, {
          "slider-item": c(),
          "slider-item-past": c() && h(T) < h(w),
          "slider-item-active": c() && h(T) === h(w),
          "slider-item-future": c() && h(T) > h(w),
          "slider-item-hidden-slider": !c(),
          "slider-item-hidden-slider-past": !c() && h(T) < h(w),
          "slider-item-hidden-slider-active": !c() && h(T) === h(w),
          "slider-item-hidden-slider-future": !c() && h(T) > h(w)
        });
      },
      [() => S(h(T))]
    ), Et(g, O);
  }), K(vt);
  var ne = mt(vt, 2), ke = tt(ne);
  Ke(ke, 21, () => u() || [], je, (g, T, O) => {
    var I = Tc();
    let rt;
    var Nt = tt(I), yt = tt(Nt);
    K(Nt);
    var pe = mt(Nt, 2);
    Ke(pe, 17, () => h(T), je, (xt, $t) => {
      var Be = Ac();
      let un;
      var fn = tt(Be), br = mt(fn);
      {
        var $r = (cn) => {
          var Me = $c();
          Me.__mouseover = [bc, ct, $t], Me.__mouseout = [_c, Y], Et(cn, Me);
        };
        xn(br, (cn) => {
          h($t).moreInfoText && cn($r);
        });
      }
      K(Be), se(() => {
        un = Sn(Be, 1, "timeline-info svelte-1mvbx0y", null, un, {
          "timeline-info-good": h($t).className === "timeline-info-good",
          "timeline-info-bad": h($t).className === "timeline-info-bad"
        }), oe(fn, `${h($t).summaryText ?? ""} `);
      }), Et(xt, Be);
    }), K(I), We(I, (xt, $t) => h(E)[$t] = xt, (xt) => {
      var $t;
      return ($t = h(E)) == null ? void 0 : $t[xt];
    }, () => [O]), se(() => {
      rt = Sn(I, 1, "timeline-info-one-step svelte-1mvbx0y", null, rt, {
        "timeline-column-past": O < h(w),
        "timeline-column-active": O === h(w),
        "timeline-column-future": O > h(w)
      }), oe(yt, `${s() ?? ""}${O + 1}`);
    }), Et(g, I);
  }), K(ke), K(ne), We(ne, (g) => B(Z, g), () => h(Z));
  var Ce = mt(ne, 2);
  Ce.__click = pt;
  var _ = tt(Ce, !0);
  K(Ce), K(kt);
  var L = mt(kt, 2);
  {
    var G = (g) => {
      var T = Ec(), O = tt(T, !0);
      K(T), We(T, (I) => B(z, I), () => h(z)), se(() => {
        Xe(T, "style", `left: ${h(st).x ?? ""}px; top: ${h(st).y ?? ""}px;`), oe(O, h(X));
      }), Et(g, T);
    };
    xn(L, (g) => {
      h(Y) && g(G);
    });
  }
  return K(Ft), se(() => {
    Xe(Ft, "id", n()), Xe(Ft, "style", `max-width: ${(typeof i() == "number" ? `${i()}px` : i()) ?? ""}`), Lt.disabled = h(w) === 0, bt.disabled = h(w) === r() - 1, Xe(vt, "id", "_sliderDiv_" + n()), Rt = Sn(vt, 1, "slider svelte-1mvbx0y", null, Rt, {
      "slider-when-timeline-hidden": !h(b)
    }), Xe(ne, "style", `max-height: ${(h(b) ? "999px" : "0") ?? ""}; 
             opacity: ${(h(b) ? 1 : 0) ?? ""};
             padding: ${(h(b) ? "5px 0 5px 0" : "0") ?? ""};
             border-width: ${(h(b) ? "0 1px 1px 1px" : "0") ?? ""};`), oe(_, h(b) ? "[—] Collapse Details" : "[+] Expand Details");
  }), Et(t, Ft), _r({
    animate: It,
    toggleTimeline: Ht,
    get id() {
      return n();
    },
    set id(g = "timeline-slider") {
      n(g), Q();
    },
    get numTicks() {
      return r();
    },
    set numTicks(g = 5) {
      r(g), Q();
    },
    get width() {
      return i();
    },
    set width(g = "600px") {
      i(g), Q();
    },
    get tickLabelPrefix() {
      return s();
    },
    set tickLabelPrefix(g = "Round ") {
      s(g), Q();
    },
    get hideTimelineInitially() {
      return a();
    },
    set hideTimelineInitially(g = !0) {
      a(g), Q();
    },
    get tickText() {
      return o();
    },
    set tickText(g = "•") {
      o(g), Q();
    },
    get color() {
      return l();
    },
    set color(g = "orangered") {
      l(g), Q();
    },
    get timelineData() {
      return u();
    },
    set timelineData(g = null) {
      u(g), Q();
    },
    get animateOnLoad() {
      return f();
    },
    set animateOnLoad(g = !1) {
      f(g), Q();
    },
    get timelinePeeking() {
      return d();
    },
    set timelinePeeking(g = !0) {
      d(g), Q();
    },
    get hideActiveTickText() {
      return c();
    },
    set hideActiveTickText(g = !1) {
      c(g), Q();
    },
    get timeBetweenStepsMs() {
      return v();
    },
    set timeBetweenStepsMs(g = null) {
      v(g), Q();
    },
    get leftArrowText() {
      return m();
    },
    set leftArrowText(g = "&#8249;") {
      m(g), Q();
    },
    get rightArrowText() {
      return y();
    },
    set rightArrowText(g = "&#8250;") {
      y(g), Q();
    },
    get value() {
      return x();
    },
    set value(g = 0) {
      x(g), Q();
    },
    get onValueChange() {
      return k();
    },
    set onValueChange(g = (T) => {
    }) {
      k(g), Q();
    }
  });
}
Ms([
  "click",
  "mousedown",
  "touchstart",
  "mouseover",
  "mouseout"
]);
vi(
  ha,
  {
    id: {},
    numTicks: {},
    width: {},
    tickLabelPrefix: {},
    hideTimelineInitially: {},
    tickText: {},
    color: {},
    timelineData: {},
    animateOnLoad: {},
    timelinePeeking: {},
    hideActiveTickText: {},
    timeBetweenStepsMs: {},
    leftArrowText: {},
    rightArrowText: {},
    value: {},
    onValueChange: {}
  },
  [],
  ["animate", "toggleTimeline"],
  !0
);
function Nc(t) {
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
      const o = new Set(Object.keys(a.tally)), l = [...o].filter((u) => !n.has(u));
      l.length > 0 && e.push(`Round ${a.round} contains new candidates not present in earlier rounds: ${l.join(", ")}`), r = o;
    }
    if (!a.tallyResults || !Array.isArray(a.tallyResults)) {
      e.push(`Round ${a.round} is missing tallyResults array`);
      continue;
    }
    for (const o of a.tallyResults) {
      o.elected !== void 0 && o.eliminated !== void 0 ? e.push(`Round ${a.round} has a result with both elected and eliminated set`) : o.elected === void 0 && o.eliminated === void 0 && e.push(`Round ${a.round} has a result with neither elected nor eliminated set`);
      const l = o.elected || o.eliminated;
      if (l && !r.has(l) && e.push(`Round ${a.round} references candidate "${l}" who is not in the current candidate list`), !o.transfers || typeof o.transfers != "object") {
        e.push(`Round ${a.round} has a result missing transfers`);
        continue;
      }
      const u = Object.keys(o.transfers);
      for (const f of u)
        f !== "exhausted" && !r.has(f) && e.push(`Round ${a.round} transfers votes to "${f}" who is not in the current candidate list`);
      if (o.eliminated && l) {
        const f = parseFloat(a.tally[l] || "0");
        let d = 0;
        for (const c of Object.values(o.transfers)) {
          const v = parseFloat(c || "0");
          isNaN(v) || (d += v);
        }
        Math.abs(f - d) > 1e-4 && e.push(`Round ${a.round}: Eliminated candidate "${l}" had ${f} votes but transferred ${d}`);
      }
      l && r.delete(l);
    }
  }
  return {
    valid: e.length === 0,
    errors: e
  };
}
var Sc = /* @__PURE__ */ jt("<span> </span> &nbsp;", 1), Cc = /* @__PURE__ */ jt("About to eliminate: <!>", 1), Mc = /* @__PURE__ */ jt("<span> </span> &nbsp;", 1), Dc = /* @__PURE__ */ jt("Elected: <!>", 1), Oc = /* @__PURE__ */ jt("<span> </span> <br>", 1), Pc = /* @__PURE__ */ jt('<div class="page-container svelte-1qs32ie"><div class="common-header svelte-1qs32ie"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-1qs32ie"><h3 class="svelte-1qs32ie"> </h3> <!></div> <div class="tooltip svelte-1qs32ie"> <br> these ballots have already been eliminated.</div> <div class="round-selector-container svelte-1qs32ie"><!></div> <div class="animation-button-container svelte-1qs32ie"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="visualizations-container svelte-1qs32ie"><div class="pie-chart-container svelte-1qs32ie"><!></div></div></div>');
const Ic = {
  hash: "svelte-1qs32ie",
  code: `.page-container.svelte-1qs32ie {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1qs32ie {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1qs32ie {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:1.3rem;left:50%;transform:translate(-50%);font-weight:bold;opacity:0;}.tooltip.svelte-1qs32ie h3:where(.svelte-1qs32ie) {text-align:center;}.round-selector-container.svelte-1qs32ie {width:100%;display:flex;justify-content:center;margin:1rem 0;}.animation-button-container.svelte-1qs32ie {display:flex;justify-content:center;gap:10px;margin-bottom:1rem;}.pie-chart-container.svelte-1qs32ie {
  /* width: 65%; */width:90%;min-width:800px; /* Larger minimum size */flex-grow:0; /* Don't grow beyond specified width */margin:0 auto;margin-right:40px; /* Add extra space on right */}
 



/*** Some parts of this will be overridden if we are also displaying the bubble-grid visualization ***/



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
@media (max-width: 1300px) {.visualizations-container.svelte-1qs32ie {flex-direction:column;align-items:center;}
}`
};
function Fc(t, e) {
  gr(e, !0), hi(t, Ic);
  const n = 0.85;
  let r = it(e, "electionSummary", 7), i = ot(null), s = ot(null), a = ot(1), o = ot(""), l = ot(lt([])), u = ot(""), f = ot(""), d = ot(0), c = ot(null), v = ot(null), m = ot(null), y = ot(null), x = /* @__PURE__ */ Pe(() => k(r()));
  function k(_) {
    if (typeof _ == "string") {
      console.log("input was a string");
      try {
        _ = JSON.parse(_);
      } catch (L) {
        return console.error("Failed to parse JSON string:", L), {};
      }
    }
    return console.log("RCtabSummary object status: ", Nc(_)), _ || {};
  }
  function w(_) {
    console.log("slider wants to move to round ", _), _ === h(a) + 1 && h(c) ? h(c)() : h(y) && h(y)(_);
  }
  function b() {
    switch (console.log("mouse event ", h(u), h(f), h(d)), h(u)) {
      case "enter":
        ((_) => (B(l, lt(_[0])), B(o, lt(_[1]))))(N(h(f))), h(i) && (h(i).style.top = String(h(d) || 20) + "px", h(i).style.opacity = String(n));
        break;
      case "leave":
        h(i) && (h(i).style.opacity = "0"), B(l, lt([])), B(o, "");
        break;
      case "show-exhausted":
        h(s) && (h(s).style.top = String(h(d) || 20) + "px", h(s).style.opacity = String(n));
        break;
      case "hide-exhausted":
        h(s) && (h(s).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", h(u));
        break;
    }
  }
  ui(() => b());
  function $(_, L) {
    return _ == 1 ? L ? "vote was" : "vote will be" : L ? "votes were" : "votes will be";
  }
  function N(_) {
    const L = [], G = _ === "exhausted" ? jr : _;
    let g;
    _ == "exhausted" ? g = ur(h(x), 1) : g = h(x).results[0].tally[_], L.push(`${G} started with ${g} votes.`);
    for (let T = 1; T <= h(a); T++) {
      T === h(a) && (_ == "exhausted" ? g = ur(h(x), h(a)) : g = h(x).results[h(a) - 1].tally[_], L.push(`${G} has ${g} votes at round ${h(a)}.`));
      const O = h(x).results[T - 1].tallyResults;
      for (let I = 0; I < O.length; I++) {
        const rt = O[I].transfers, Nt = O[I].eliminated, yt = O[I].elected;
        if (Nt)
          Nt === _ && L.push(`${G} will be eliminated on round ${T}.`);
        else if (_ === yt && (L.push(`${G} was elected on round ${T}.`), rt))
          for (let [xt, $t] of Object.entries(rt))
            L.push(`${$t} ${$(Number($t), T < h(a))} transferred to ${xt} on round ${T}.`);
        const pe = Nt || yt;
        if (pe) {
          const xt = Number(rt[_]);
          xt && L.push(`${xt} ${$(xt, T < h(a))} transferred from ${pe} on round ${T}.`);
        }
      }
    }
    return [L, G];
  }
  function z() {
    let _ = 0;
    for (let L = 1; L <= h(x).results.length; L++) {
      const G = h(x).results[L - 1].tallyResults;
      for (let g = 0; g < G.length; g++)
        G[g].elected && _++;
    }
    return _;
  }
  let X = /* @__PURE__ */ Pe(() => Y(h(x).results.length));
  function Y(_) {
    const L = [];
    for (let G = 0; G < _; G++)
      L.push(_ < 10 ? `Round ${G + 1}` : _ < 20 ? `R ${G + 1}` : _ < 30 ? `${G + 1}` : "•");
    return L;
  }
  let st = /* @__PURE__ */ Pe(() => J(h(x)));
  function at(_) {
    return (typeof _ == "string" ? parseFloat(_) : _).toLocaleString(void 0, { maximumFractionDigits: 2 });
  }
  function J(_) {
    if (!_.results || !Array.isArray(_.results) || _.results.length === 0)
      throw new Error("Invalid RCtabSummary: missing or empty results array");
    const L = [];
    return _.results.forEach((G) => {
      const g = [];
      G.round, Object.entries(G.tally).map(([T, O]) => ({ candidate: T, votes: parseFloat(O) })).sort((T, O) => O.votes - T.votes), G.tallyResults.forEach((T) => {
        if (T.elected) {
          g.push({
            summaryText: `${T.elected} won`,
            className: "timeline-info-good",
            moreInfoText: `${T.elected} exceeded the threshold of ${at(G.threshold)} votes and was elected.`
          });
          const O = Object.entries(T.transfers);
          if (O.length > 0) {
            const I = O.reduce((rt, [Nt, yt]) => rt + parseFloat(yt), 0);
            I > 0 && g.push({
              summaryText: `${T.elected} transferred ${at(I)} surplus votes`,
              className: "timeline-info",
              moreInfoText: "Surplus votes were distributed to remaining candidates."
            });
          }
        } else if (T.eliminated) {
          g.push({
            summaryText: `${T.eliminated} eliminated`,
            className: "timeline-info-bad",
            moreInfoText: `${T.eliminated} had the fewest votes and was eliminated.`
          });
          const O = Object.entries(T.transfers);
          if (O.length > 0) {
            const I = O.reduce((rt, [Nt, yt]) => rt + parseFloat(yt), 0);
            g.push({
              summaryText: `${T.eliminated} transferred ${at(I)} votes`,
              className: "timeline-info",
              moreInfoText: "Votes were redistributed based on next preferences."
            });
          }
        }
      }), L.push(g);
    }), L;
  }
  var Z = Pc(), E = tt(Z), S = tt(E), _t = tt(S);
  K(S);
  var ft = mt(S, 2), pt = tt(ft);
  {
    var ct = (_) => {
      var L = Cc(), G = mt(hn(L));
      Ke(G, 17, () => fr(h(x), h(a)), je, (g, T) => {
        var O = Sc(), I = hn(O), rt = tt(I, !0);
        K(I), Rn(), se(() => {
          Fi(I, "color", Ne[h(T)]), oe(rt, h(T));
        }), Et(g, O);
      }), Et(_, L);
    };
    xn(pt, (_) => {
      fr(h(x), h(a)).length > 0 && _(ct);
    });
  }
  var Kt = mt(pt, 2);
  {
    var Bt = (_) => {
      var L = Dc(), G = mt(hn(L));
      Ke(G, 17, () => cr(h(x), h(a)), je, (g, T) => {
        var O = Mc(), I = hn(O), rt = tt(I, !0);
        K(I), Rn(), se(() => {
          Fi(I, "color", Ne[h(T)]), oe(rt, h(T));
        }), Et(g, O);
      }), Et(_, L);
    };
    xn(Kt, (_) => {
      cr(h(x), h(a)).length > 0 && _(Bt);
    });
  }
  K(ft), K(E);
  var It = mt(E, 2), Ht = tt(It), Ft = tt(Ht, !0);
  K(Ht);
  var Lt = mt(Ht, 2);
  Ke(Lt, 17, () => h(l), je, (_, L) => {
    var G = Oc(), g = hn(G), T = tt(g, !0);
    K(g), Rn(2), se(() => oe(T, h(L))), Et(_, G);
  }), K(It), We(It, (_) => B(i, _), () => h(i));
  var dt = mt(It, 2), me = tt(dt);
  me.nodeValue = `"${jr}" means all the candidates ranked on `, Rn(2), K(dt), We(dt, (_) => B(s, _), () => h(s));
  var bt = mt(dt, 2), Xt = tt(bt);
  const Wt = /* @__PURE__ */ Pe(() => h(a) - 1);
  ha(Xt, {
    get numTicks() {
      return h(x).results.length;
    },
    get timelineData() {
      return h(st);
    },
    get tickText() {
      return h(X);
    },
    tickLabelPrefix: "Round ",
    get value() {
      return h(Wt);
    },
    onValueChange: (_) => w(_ + 1)
  }), K(bt);
  var kt = mt(bt, 2), vt = tt(kt);
  vt.__click = function(..._) {
    var L;
    (L = h(m)) == null || L.apply(this, _);
  };
  var Rt = mt(vt, 2);
  Rt.__click = function(..._) {
    var L;
    (L = h(v)) == null || L.apply(this, _);
  }, K(kt);
  var ne = mt(kt, 2), ke = tt(ne), Ce = tt(ke);
  return da(Ce, {
    get jsonData() {
      return h(x);
    },
    get round() {
      return h(a);
    },
    set round(_) {
      B(a, lt(_));
    },
    get mouseEventType() {
      return h(u);
    },
    set mouseEventType(_) {
      B(u, lt(_));
    },
    get mouseData() {
      return h(f);
    },
    set mouseData(_) {
      B(f, lt(_));
    },
    get mouseY() {
      return h(d);
    },
    set mouseY(_) {
      B(d, lt(_));
    },
    get animateOneRound() {
      return h(c);
    },
    set animateOneRound(_) {
      B(c, lt(_));
    },
    get animateOnePhase() {
      return h(v);
    },
    set animateOnePhase(_) {
      B(v, lt(_));
    },
    get runFullAnimation() {
      return h(m);
    },
    set runFullAnimation(_) {
      B(m, lt(_));
    },
    get setRound() {
      return h(y);
    },
    set setRound(_) {
      B(y, lt(_));
    }
  }), K(ke), K(ne), K(Z), se(
    (_) => {
      oe(_t, `${h(x).config.contest ?? ""}, ${_ ?? ""} to be elected, Round ${h(a) ?? ""}.`), oe(Ft, h(o));
    },
    [z]
  ), Et(t, Z), _r({
    generateTimelineData: J,
    get electionSummary() {
      return r();
    },
    set electionSummary(_) {
      r(_), Q();
    }
  });
}
Ms(["click"]);
customElements.define("pie-chart", vi(Fc, { electionSummary: {} }, [], ["generateTimelineData"], !0));
