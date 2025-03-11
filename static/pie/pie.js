var Ma = Object.defineProperty;
var $i = (t) => {
  throw TypeError(t);
};
var Oa = (t, e, n) => e in t ? Ma(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Yt = (t, e, n) => Oa(t, typeof e != "symbol" ? e + "" : e, n), Ai = (t, e, n) => e.has(t) || $i("Cannot " + n);
var Ct = (t, e, n) => (Ai(t, e, "read from private field"), n ? n.call(t) : e.get(t)), kr = (t, e, n) => e.has(t) ? $i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Er = (t, e, n, r) => (Ai(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const Pa = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pa);
const Jr = 1, Zr = 2, ns = 4, Da = 8, Ia = 16, Fa = 1, La = 4, qa = 8, Va = 16, Ha = 1, za = 2, Ba = 4, Ya = 1, Ua = 2, rs = "[", jr = "[!", Qr = "]", an = {}, Mt = Symbol(), ki = !1, Wt = 2, is = 4, or = 8, lr = 16, _e = 32, We = 64, Fn = 128, zt = 256, Ln = 512, Tt = 1024, me = 2048, Ke = 4096, he = 8192, ur = 16384, ss = 32768, fr = 65536, Xa = 1 << 19, as = 1 << 20, on = Symbol("$state"), os = Symbol("legacy props"), Ga = Symbol("");
var ti = Array.isArray, Wa = Array.prototype.indexOf, ei = Array.from, qn = Object.keys, Vn = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, Ka = Object.getOwnPropertyDescriptors, Ja = Object.prototype, Za = Array.prototype, ls = Object.getPrototypeOf;
function ja(t) {
  return typeof t == "function";
}
const je = () => {
};
function us(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let un = [], Cr = [];
function fs() {
  var t = un;
  un = [], us(t);
}
function Qa() {
  var t = Cr;
  Cr = [], us(t);
}
function gn(t) {
  un.length === 0 && queueMicrotask(fs), un.push(t);
}
function Ei() {
  un.length > 0 && fs(), Cr.length > 0 && Qa();
}
function cs(t) {
  return t === this.v;
}
function to(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ni(t) {
  return !to(t, this.v);
}
function eo(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function no() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ro(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function io() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function so() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ao(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function oo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function lo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function uo() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let co = !1;
function Ht(t, e) {
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
function st(t) {
  return /* @__PURE__ */ ho(Ht(t));
}
// @__NO_SIDE_EFFECTS__
function ri(t, e = !1) {
  const n = Ht(t);
  return e || (n.equals = ni), n;
}
// @__NO_SIDE_EFFECTS__
function ho(t) {
  return et !== null && !Ut && et.f & Wt && (te === null ? _o([t]) : te.push(t)), t;
}
function M(t, e) {
  return et !== null && !Ut && Ss() && et.f & (Wt | lr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (te === null || !te.includes(t)) && fo(), Mr(t, e);
}
function Mr(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = ws(), ds(t, me), Q !== null && Q.f & Tt && !(Q.f & (_e | We)) && (ue === null ? mo([t]) : ue.push(t))), e;
}
function ds(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & me || (ie(s, e), a & (Tt | zt) && (a & Wt ? ds(
        /** @type {Derived} */
        s,
        Ke
      ) : vr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  var e = Wt | me, n = et !== null && et.f & Wt ? (
    /** @type {Derived} */
    et
  ) : null;
  return Q === null || n !== null && n.f & zt ? e |= zt : Q.f |= as, {
    ctx: Dt,
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
    parent: n ?? Q
  };
}
// @__NO_SIDE_EFFECTS__
function vo(t) {
  const e = /* @__PURE__ */ cr(t);
  return e.equals = ni, e;
}
function hs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      pe(
        /** @type {Effect} */
        e[n]
      );
  }
}
function po(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Wt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function go(t) {
  var e, n = Q;
  re(po(t));
  try {
    hs(t), e = bs(t);
  } finally {
    re(n);
  }
  return e;
}
function vs(t) {
  var e = go(t), n = ($e || t.f & zt) && t.deps !== null ? Ke : Tt;
  ie(t, n), t.equals(e) || (t.v = e, t.wv = ws());
}
function ii(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let at = !1;
function de(t) {
  at = t;
}
let tt;
function Gt(t) {
  if (t === null)
    throw ii(), an;
  return tt = t;
}
function dr() {
  return Gt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(tt)
  );
}
function nt(t) {
  if (at) {
    if (/* @__PURE__ */ ye(tt) !== null)
      throw ii(), an;
    tt = t;
  }
}
function xn(t = 1) {
  if (at) {
    for (var e = t, n = tt; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(n);
    tt = n;
  }
}
function Or() {
  for (var t = 0, e = tt; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Qr) {
        if (t === 0) return e;
        t -= 1;
      } else (n === rs || n === jr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(e)
    );
    e.remove(), e = r;
  }
}
function F(t, e = null, n) {
  if (typeof t != "object" || t === null || on in t)
    return t;
  const r = ls(t);
  if (r !== Ja && r !== Za)
    return t;
  var i = /* @__PURE__ */ new Map(), s = ti(t), a = Ht(0);
  s && i.set("length", Ht(
    /** @type {any[]} */
    t.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && oo();
        var h = i.get(u);
        return h === void 0 ? (h = Ht(l.value), i.set(u, h)) : M(h, F(l.value, o)), !0;
      },
      deleteProperty(f, u) {
        var l = i.get(u);
        if (l === void 0)
          u in f && i.set(u, Ht(Mt));
        else {
          if (s && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(u);
            Number.isInteger(c) && c < h.v && M(h, c);
          }
          M(l, Mt), Ri(a);
        }
        return !0;
      },
      get(f, u, l) {
        var p;
        if (u === on)
          return t;
        var h = i.get(u), c = u in f;
        if (h === void 0 && (!c || (p = Se(f, u)) != null && p.writable) && (h = Ht(F(c ? f[u] : Mt, o)), i.set(u, h)), h !== void 0) {
          var d = v(h);
          return d === Mt ? void 0 : d;
        }
        return Reflect.get(f, u, l);
      },
      getOwnPropertyDescriptor(f, u) {
        var l = Reflect.getOwnPropertyDescriptor(f, u);
        if (l && "value" in l) {
          var h = i.get(u);
          h && (l.value = v(h));
        } else if (l === void 0) {
          var c = i.get(u), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== Mt)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return l;
      },
      has(f, u) {
        var d;
        if (u === on)
          return !0;
        var l = i.get(u), h = l !== void 0 && l.v !== Mt || Reflect.has(f, u);
        if (l !== void 0 || Q !== null && (!h || (d = Se(f, u)) != null && d.writable)) {
          l === void 0 && (l = Ht(h ? F(f[u], o) : Mt), i.set(u, l));
          var c = v(l);
          if (c === Mt)
            return !1;
        }
        return h;
      },
      set(f, u, l, h) {
        var y;
        var c = i.get(u), d = u in f;
        if (s && u === "length")
          for (var p = l; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var _ = i.get(p + "");
            _ !== void 0 ? M(_, Mt) : p in f && (_ = Ht(Mt), i.set(p + "", _));
          }
        c === void 0 ? (!d || (y = Se(f, u)) != null && y.writable) && (c = Ht(void 0), M(c, F(l, o)), i.set(u, c)) : (d = c.v !== Mt, M(c, F(l, o)));
        var m = Reflect.getOwnPropertyDescriptor(f, u);
        if (m != null && m.set && m.set.call(h, l), !d) {
          if (s && typeof u == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= w.v && M(w, $ + 1);
          }
          Ri(a);
        }
        return !0;
      },
      ownKeys(f) {
        v(a);
        var u = Reflect.ownKeys(f).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== Mt;
        });
        for (var [l, h] of i)
          h.v !== Mt && !(l in f) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        lo();
      }
    }
  );
}
function Ri(t, e = 1) {
  M(t, t.v + e);
}
var Ni, ps, gs, _s;
function Pr() {
  if (Ni === void 0) {
    Ni = window, ps = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    gs = Se(e, "firstChild").get, _s = Se(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ue(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ve(t) {
  return gs.call(t);
}
// @__NO_SIDE_EFFECTS__
function ye(t) {
  return _s.call(t);
}
function lt(t, e) {
  if (!at)
    return /* @__PURE__ */ ve(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ve(tt)
  );
  if (n === null)
    n = tt.appendChild(Ue());
  else if (e && n.nodeType !== 3) {
    var r = Ue();
    return n == null || n.before(r), Gt(r), r;
  }
  return Gt(n), n;
}
function He(t, e) {
  if (!at) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ve(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ye(n) : n;
  }
  return tt;
}
function kt(t, e = 1, n = !1) {
  let r = at ? tt : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(r);
  if (!at)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = Ue();
    return r === null ? i == null || i.after(a) : r.before(a), Gt(a), a;
  }
  return Gt(r), /** @type {TemplateNode} */
  r;
}
function ms(t) {
  t.textContent = "";
}
let Tn = !1, Hn = !1, zn = null, Sn = !1, si = !1;
function Ti(t) {
  si = t;
}
let ln = [];
let et = null, Ut = !1;
function ne(t) {
  et = t;
}
let Q = null;
function re(t) {
  Q = t;
}
let te = null;
function _o(t) {
  te = t;
}
let Et = null, It = 0, ue = null;
function mo(t) {
  ue = t;
}
let ys = 1, Bn = 0, $e = !1;
function ws() {
  return ++ys;
}
function _n(t) {
  var h;
  var e = t.f;
  if (e & me)
    return !0;
  if (e & Ke) {
    var n = t.deps, r = (e & zt) !== 0;
    if (n !== null) {
      var i, s, a = (e & Ln) !== 0, o = r && Q !== null && !$e, f = n.length;
      if (a || o) {
        var u = (
          /** @type {Derived} */
          t
        ), l = u.parent;
        for (i = 0; i < f; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(u))) && (s.reactions ?? (s.reactions = [])).push(u);
        a && (u.f ^= Ln), o && l !== null && !(l.f & zt) && (u.f ^= zt);
      }
      for (i = 0; i < f; i++)
        if (s = n[i], _n(
          /** @type {Derived} */
          s
        ) && vs(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || Q !== null && !$e) && ie(t, Tt);
  }
  return !1;
}
function yo(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & Fn)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Fn;
      }
    n = n.parent;
  }
  throw Tn = !1, t;
}
function wo(t) {
  return (t.f & ur) === 0 && (t.parent === null || (t.parent.f & Fn) === 0);
}
function hr(t, e, n, r) {
  if (Tn) {
    if (n === null && (Tn = !1), wo(e))
      throw t;
    return;
  }
  n !== null && (Tn = !0);
  {
    yo(t, e);
    return;
  }
}
function xs(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Wt ? xs(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ie(s, me) : s.f & Tt && ie(s, Ke), vr(
        /** @type {Effect} */
        s
      ));
    }
}
function bs(t) {
  var d;
  var e = Et, n = It, r = ue, i = et, s = $e, a = te, o = Dt, f = Ut, u = t.f;
  Et = /** @type {null | Value[]} */
  null, It = 0, ue = null, $e = (u & zt) !== 0 && (Ut || !Sn || et === null), et = u & (_e | We) ? null : t, te = null, Si(t.ctx), Ut = !1, Bn++;
  try {
    var l = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (Et !== null) {
      var c;
      if (Yn(t, It), h !== null && It > 0)
        for (h.length = It + Et.length, c = 0; c < Et.length; c++)
          h[It + c] = Et[c];
      else
        t.deps = h = Et;
      if (!$e)
        for (c = It; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && It < h.length && (Yn(t, It), h.length = It);
    if (Ss() && ue !== null && !Ut && h !== null && !(t.f & (Wt | Ke | me)))
      for (c = 0; c < /** @type {Source[]} */
      ue.length; c++)
        xs(
          ue[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Bn++, l;
  } finally {
    Et = e, It = n, ue = r, et = i, $e = s, te = a, Si(o), Ut = f;
  }
}
function xo(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Wa.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Wt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Et === null || !Et.includes(e)) && (ie(e, Ke), e.f & (zt | Ln) || (e.f ^= Ln), hs(
    /** @type {Derived} **/
    e
  ), Yn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Yn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      xo(t, n[r]);
}
function ai(t) {
  var e = t.f;
  if (!(e & ur)) {
    ie(t, Tt);
    var n = Q, r = Dt, i = Sn;
    Q = t, Sn = !0;
    try {
      e & lr ? Co(t) : Es(t), ks(t);
      var s = bs(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = ys;
      var a = t.deps, o;
      ki && co && t.f & me;
    } catch (f) {
      hr(f, t, n, r || t.ctx);
    } finally {
      Sn = i, Q = n;
    }
  }
}
function bo() {
  try {
    io();
  } catch (t) {
    if (zn !== null)
      hr(t, zn, null);
    else
      throw t;
  }
}
function $s() {
  try {
    for (var t = 0; ln.length > 0; ) {
      t++ > 1e3 && bo();
      var e = ln, n = e.length;
      ln = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & Tt || (i.f ^= Tt);
        var s = Ao(i);
        $o(s);
      }
    }
  } finally {
    Hn = !1, zn = null;
  }
}
function $o(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (ur | he)))
        try {
          _n(r) && (ai(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Rs(r) : r.fn = null));
        } catch (i) {
          hr(i, r, null, r.ctx);
        }
    }
}
function vr(t) {
  Hn || (Hn = !0, queueMicrotask($s));
  for (var e = zn = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (We | _e)) {
      if (!(n & Tt)) return;
      e.f ^= Tt;
    }
  }
  ln.push(e);
}
function Ao(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & _e) !== 0, s = i && (r & Tt) !== 0;
    if (!s && !(r & he)) {
      if (r & is)
        e.push(n);
      else if (i)
        n.f ^= Tt;
      else {
        var a = et;
        try {
          et = n, _n(n) && ai(n);
        } catch (u) {
          hr(u, n, null, n.ctx);
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
    var f = n.parent;
    for (n = n.next; n === null && f !== null; )
      n = f.next, f = f.parent;
  }
  return e;
}
function mt(t) {
  var e;
  for (Ei(); ln.length > 0; )
    Hn = !0, $s(), Ei();
  return (
    /** @type {T} */
    e
  );
}
function v(t) {
  var e = t.f, n = (e & Wt) !== 0;
  if (et !== null && !Ut) {
    te !== null && te.includes(t) && uo();
    var r = et.deps;
    t.rv < Bn && (t.rv = Bn, Et === null && r !== null && r[It] === t ? It++ : Et === null ? Et = [t] : (!$e || !Et.includes(t)) && Et.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & zt) && (i.f ^= zt);
  }
  return n && (i = /** @type {Derived} */
  t, _n(i) && vs(i)), t.v;
}
function fn(t) {
  var e = Ut;
  try {
    return Ut = !0, t();
  } finally {
    Ut = e;
  }
}
const ko = -7169;
function ie(t, e) {
  t.f = t.f & ko | e;
}
function Eo(t) {
  Q === null && et === null && ro(), et !== null && et.f & zt && Q === null && no(), si && eo();
}
function Ro(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ie(t, e, n, r = !0) {
  var i = (t & We) !== 0, s = Q, a = {
    ctx: Dt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | me,
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
      ai(a), a.f |= ss;
    } catch (u) {
      throw pe(a), u;
    }
  else e !== null && vr(a);
  var o = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (as | Fn)) === 0;
  if (!o && !i && r && (s !== null && Ro(a, s), et !== null && et.f & Wt)) {
    var f = (
      /** @type {Derived} */
      et
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function No(t) {
  const e = Ie(or, null, !1);
  return ie(e, Tt), e.teardown = t, e;
}
function Un(t) {
  Eo();
  var e = Q !== null && (Q.f & _e) !== 0 && Dt !== null && !Dt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      Dt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: Q,
      reaction: et
    });
  } else {
    var r = pr(t);
    return r;
  }
}
function To(t) {
  const e = Ie(We, t, !0);
  return () => {
    pe(e);
  };
}
function So(t) {
  const e = Ie(We, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xn(e, () => {
      pe(e), r(void 0);
    }) : (pe(e), r(void 0));
  });
}
function pr(t) {
  return Ie(is, t, !1);
}
function As(t) {
  return Ie(or, t, !0);
}
function Qt(t, e = [], n = cr) {
  const r = e.map(n);
  return oi(() => t(...r.map(v)));
}
function oi(t, e = 0) {
  return Ie(or | lr | e, t, !0);
}
function cn(t, e = !0) {
  return Ie(or | _e, t, !0, e);
}
function ks(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = si, r = et;
    Ti(!0), ne(null);
    try {
      e.call(null);
    } finally {
      Ti(n), ne(r);
    }
  }
}
function Es(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    pe(n, e), n = r;
  }
}
function Co(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & _e || pe(e), e = n;
  }
}
function pe(t, e = !0) {
  var n = !1;
  if ((e || t.f & Xa) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  Es(t, e && !n), Yn(t, 0), ie(t, ur);
  var a = t.transitions;
  if (a !== null)
    for (const f of a)
      f.stop();
  ks(t);
  var o = t.parent;
  o !== null && o.first !== null && Rs(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Rs(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Xn(t, e) {
  var n = [];
  li(t, n, !0), Ns(n, () => {
    pe(t), e && e();
  });
}
function Ns(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function li(t, e, n) {
  if (!(t.f & he)) {
    if (t.f ^= he, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & fr) !== 0 || (r.f & _e) !== 0;
      li(r, e, s ? n : !1), r = i;
    }
  }
}
function Gn(t) {
  Ts(t, !0);
}
function Ts(t, e) {
  if (t.f & he) {
    t.f ^= he, t.f & Tt || (t.f ^= Tt), _n(t) && (ie(t, me), vr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & fr) !== 0 || (n.f & _e) !== 0;
      Ts(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function Mo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Dt = null;
function Si(t) {
  Dt = t;
}
function mn(t, e = !1, n) {
  Dt = {
    p: Dt,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function yn(t) {
  const e = Dt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = Q, r = et;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          re(s.effect), ne(s.reaction), pr(s.fn);
        }
      } finally {
        re(n), ne(r);
      }
    }
    Dt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Ss() {
  return !0;
}
const Oo = ["touchstart", "touchmove"];
function Po(t) {
  return Oo.includes(t);
}
function Cs(t) {
  var e = et, n = Q;
  ne(null), re(null);
  try {
    return t();
  } finally {
    ne(e), re(n);
  }
}
const Ms = /* @__PURE__ */ new Set(), Dr = /* @__PURE__ */ new Set();
function Do(t, e, n, r = {}) {
  function i(s) {
    if (r.capture || tn.call(e, s), !s.cancelBubble)
      return Cs(() => n == null ? void 0 : n.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? gn(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function qe(t, e, n, r, i) {
  var s = { capture: r, passive: i }, a = Do(t, e, n, s);
  (e === document.body || e === window || e === document) && No(() => {
    e.removeEventListener(t, a, s);
  });
}
function Os(t) {
  for (var e = 0; e < t.length; e++)
    Ms.add(t[e]);
  for (var n of Dr)
    n(t);
}
function tn(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  ), a = 0, o = t.__root;
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    Vn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var l = et, h = Q;
    ne(null), re(null);
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
            if (ti(_)) {
              var [m, ...w] = _;
              m.apply(s, [t, ...w]);
            } else
              _.call(s, t);
        } catch (y) {
          c ? d.push(y) : c = y;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ne(l), re(h);
    }
  }
}
function Ps(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ae(t, e) {
  var n = (
    /** @type {Effect} */
    Q
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Bt(t, e) {
  var n = (e & Ya) !== 0, r = (e & Ua) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (at)
      return Ae(tt, null), tt;
    i === void 0 && (i = Ps(s ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ ve(i)));
    var a = (
      /** @type {TemplateNode} */
      r || ps ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ae(o, f);
    } else
      Ae(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Io(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (at)
      return Ae(tt, null), tt;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ps(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ ve(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ ve(o);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ae(f, f), f;
  };
}
function Fo() {
  if (at)
    return Ae(tt, null), tt;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ue();
  return t.append(e, n), Ae(e, n), t;
}
function Nt(t, e) {
  if (at) {
    Q.nodes_end = tt, dr();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Ir = !0;
function be(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Ds(t, e) {
  return Is(t, e);
}
function Lo(t, e) {
  Pr(), e.intro = e.intro ?? !1;
  const n = e.target, r = at, i = tt;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ve(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== rs); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(s);
    if (!s)
      throw an;
    de(!0), Gt(
      /** @type {Comment} */
      s
    ), dr();
    const a = Is(t, { ...e, anchor: s });
    if (tt === null || tt.nodeType !== 8 || /** @type {Comment} */
    tt.data !== Qr)
      throw ii(), an;
    return de(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === an)
      return e.recover === !1 && so(), Pr(), ms(n), de(!1), Ds(t, e);
    throw a;
  } finally {
    de(r), Gt(i);
  }
}
const Ve = /* @__PURE__ */ new Map();
function Is(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  Pr();
  var o = /* @__PURE__ */ new Set(), f = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!o.has(d)) {
        o.add(d);
        var p = Po(d);
        e.addEventListener(d, tn, { passive: p });
        var _ = Ve.get(d);
        _ === void 0 ? (document.addEventListener(d, tn, { passive: p }), Ve.set(d, 1)) : Ve.set(d, _ + 1);
      }
    }
  };
  f(ei(Ms)), Dr.add(f);
  var u = void 0, l = So(() => {
    var h = n ?? e.appendChild(Ue());
    return cn(() => {
      if (s) {
        mn({});
        var c = (
          /** @type {ComponentContext} */
          Dt
        );
        c.c = s;
      }
      i && (r.$$events = i), at && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), Ir = a, u = t(h, r) || {}, Ir = !0, at && (Q.nodes_end = tt), s && yn();
    }), () => {
      var p;
      for (var c of o) {
        e.removeEventListener(c, tn);
        var d = (
          /** @type {number} */
          Ve.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, tn), Ve.delete(c)) : Ve.set(c, d);
      }
      Dr.delete(f), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Fr.set(u, l), u;
}
let Fr = /* @__PURE__ */ new WeakMap();
function qo(t, e) {
  const n = Fr.get(t);
  return n ? (Fr.delete(t), n(e)) : Promise.resolve();
}
function Lr(t, e, n = !1) {
  at && dr();
  var r = t, i = null, s = null, a = Mt, o = n ? fr : 0, f = !1;
  const u = (h, c = !0) => {
    f = !0, l(c, h);
  }, l = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (at) {
      const p = (
        /** @type {Comment} */
        r.data === jr
      );
      !!a === p && (r = Or(), Gt(r), de(!1), d = !0);
    }
    a ? (i ? Gn(i) : c && (i = cn(() => c(r))), s && Xn(s, () => {
      s = null;
    })) : (s ? Gn(s) : c && (s = cn(() => c(r))), i && Xn(i, () => {
      i = null;
    })), d && de(!0);
  };
  oi(() => {
    f = !1, e(u), f || l(null, null);
  }, o), at && (r = tt);
}
function Ce(t, e) {
  return e;
}
function Vo(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    li(e[a].e, i, !0);
  var o = s > 0 && i.length === 0 && n !== null;
  if (o) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ms(f), f.append(
      /** @type {Element} */
      n
    ), r.clear(), xe(t, e[0].prev, e[s - 1].next);
  }
  Ns(i, () => {
    for (var u = 0; u < s; u++) {
      var l = e[u];
      o || (r.delete(l.k), xe(t, l.prev, l.next)), pe(l.e, !o);
    }
  });
}
function Me(t, e, n, r, i, s = null) {
  var a = t, o = { items: /* @__PURE__ */ new Map(), first: null }, f = (e & ns) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      t
    );
    a = at ? Gt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ve(u)
    ) : u.appendChild(Ue());
  }
  at && dr();
  var l = null, h = !1, c = /* @__PURE__ */ vo(() => {
    var d = n();
    return ti(d) ? d : d == null ? [] : ei(d);
  });
  oi(() => {
    var d = v(c), p = d.length;
    if (h && p === 0)
      return;
    h = p === 0;
    let _ = !1;
    if (at) {
      var m = (
        /** @type {Comment} */
        a.data === jr
      );
      m !== (p === 0) && (a = Or(), Gt(a), de(!1), _ = !0);
    }
    if (at) {
      for (var w = null, $, y = 0; y < p; y++) {
        if (tt.nodeType === 8 && /** @type {Comment} */
        tt.data === Qr) {
          a = /** @type {Comment} */
          tt, _ = !0, de(!1);
          break;
        }
        var x = d[y], E = r(x, y);
        $ = Fs(
          tt,
          o,
          w,
          null,
          x,
          E,
          y,
          i,
          e,
          n
        ), o.items.set(E, $), w = $;
      }
      p > 0 && Gt(Or());
    }
    at || Ho(d, o, a, i, e, r, n), s !== null && (p === 0 ? l ? Gn(l) : l = cn(() => s(a)) : l !== null && Xn(l, () => {
      l = null;
    })), _ && de(!0), v(c);
  }), at && (a = tt);
}
function Ho(t, e, n, r, i, s, a) {
  var O, xt, _t, yt;
  var o = (i & Da) !== 0, f = (i & (Jr | Zr)) !== 0, u = t.length, l = e.items, h = e.first, c = h, d, p = null, _, m = [], w = [], $, y, x, E;
  if (o)
    for (E = 0; E < u; E += 1)
      $ = t[E], y = s($, E), x = l.get(y), x !== void 0 && ((O = x.a) == null || O.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(x));
  for (E = 0; E < u; E += 1) {
    if ($ = t[E], y = s($, E), x = l.get(y), x === void 0) {
      var b = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : n;
      p = Fs(
        b,
        e,
        p,
        p === null ? e.first : p.next,
        $,
        y,
        E,
        r,
        i,
        a
      ), l.set(y, p), m = [], w = [], c = p.next;
      continue;
    }
    if (f && zo(x, $, E, i), x.e.f & he && (Gn(x.e), o && ((xt = x.a) == null || xt.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(x))), x !== c) {
      if (d !== void 0 && d.has(x)) {
        if (m.length < w.length) {
          var T = w[0], P;
          p = T.prev;
          var K = m[0], rt = m[m.length - 1];
          for (P = 0; P < m.length; P += 1)
            Ci(m[P], T, n);
          for (P = 0; P < w.length; P += 1)
            d.delete(w[P]);
          xe(e, K.prev, rt.next), xe(e, p, K), xe(e, rt, T), c = T, p = rt, E -= 1, m = [], w = [];
        } else
          d.delete(x), Ci(x, c, n), xe(e, x.prev, x.next), xe(e, x, p === null ? e.first : p.next), xe(e, p, x), p = x;
        continue;
      }
      for (m = [], w = []; c !== null && c.k !== y; )
        c.e.f & he || (d ?? (d = /* @__PURE__ */ new Set())).add(c), w.push(c), c = c.next;
      if (c === null)
        continue;
      x = c;
    }
    m.push(x), p = x, c = x.next;
  }
  if (c !== null || d !== void 0) {
    for (var J = d === void 0 ? [] : ei(d); c !== null; )
      c.e.f & he || J.push(c), c = c.next;
    var ot = J.length;
    if (ot > 0) {
      var C = i & ns && u === 0 ? n : null;
      if (o) {
        for (E = 0; E < ot; E += 1)
          (_t = J[E].a) == null || _t.measure();
        for (E = 0; E < ot; E += 1)
          (yt = J[E].a) == null || yt.fix();
      }
      Vo(e, J, C, l);
    }
  }
  o && gn(() => {
    var pt;
    if (_ !== void 0)
      for (x of _)
        (pt = x.a) == null || pt.apply();
  }), Q.first = e.first && e.first.e, Q.last = p && p.e;
}
function zo(t, e, n, r) {
  r & Jr && Mr(t.v, e), r & Zr ? Mr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Fs(t, e, n, r, i, s, a, o, f, u) {
  var l = (f & Jr) !== 0, h = (f & Ia) === 0, c = l ? h ? /* @__PURE__ */ ri(i) : Ht(i) : i, d = f & Zr ? Ht(a) : a, p = {
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
    return p.e = cn(() => o(t, c, d, u), at), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ci(t, e, n) {
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
      /* @__PURE__ */ ye(s)
    );
    i.before(s), s = a;
  }
}
function xe(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function gr(t, e) {
  gn(() => {
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
const Mi = [...` 	
\r\f \v\uFEFF`];
function Bo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || Mi.includes(r[a - 1])) && (o === r.length || Mi.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function en(t, e, n, r, i, s) {
  var a = t.__className;
  if (at || a !== n) {
    var o = Bo(n, r, s);
    (!at || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  } else if (s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && t.classList.toggle(f, u);
    }
  return s;
}
function Wn(t, e, n, r) {
  var i = t.__attributes ?? (t.__attributes = {});
  at && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Ga] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Yo(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
var Oi = /* @__PURE__ */ new Map();
function Yo(t) {
  var e = Oi.get(t.nodeName);
  if (e) return e;
  Oi.set(t.nodeName, e = []);
  for (var n, r = t, i = Element.prototype; i !== r; ) {
    n = Ka(r);
    for (var s in n)
      n[s].set && e.push(s);
    r = ls(r);
  }
  return e;
}
function Pi(t, e, n, r) {
  var i = t.__styles ?? (t.__styles = {});
  i[e] !== n && (i[e] = n, n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, ""));
}
const Uo = () => performance.now(), ce = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Uo(),
  tasks: /* @__PURE__ */ new Set()
};
function Ls() {
  const t = ce.now();
  ce.tasks.forEach((e) => {
    e.c(t) || (ce.tasks.delete(e), e.f());
  }), ce.tasks.size !== 0 && ce.tick(Ls);
}
function Xo(t) {
  let e;
  return ce.tasks.size === 0 && ce.tick(Ls), {
    promise: new Promise((n) => {
      ce.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ce.tasks.delete(e);
    }
  };
}
function bn(t, e) {
  Cs(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Go(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Di(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, s] = r.split(":");
    if (!i || s === void 0) break;
    const a = Go(i.trim());
    e[a] = s.trim();
  }
  return e;
}
const Wo = (t) => t;
function $n(t, e, n, r) {
  var i = (t & Ha) !== 0, s = (t & za) !== 0, a = i && s, o = (t & Ba) !== 0, f = a ? "both" : i ? "in" : "out", u, l = e.inert, h = e.style.overflow, c, d;
  function p() {
    var y = et, x = Q;
    ne(null), re(null);
    try {
      return u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
      {}, {
        direction: f
      }));
    } finally {
      ne(y), re(x);
    }
  }
  var _ = {
    is_global: o,
    in() {
      var y;
      if (e.inert = l, !i) {
        d == null || d.abort(), (y = d == null ? void 0 : d.reset) == null || y.call(d);
        return;
      }
      s || c == null || c.abort(), bn(e, "introstart"), c = qr(e, p(), d, 1, () => {
        bn(e, "introend"), c == null || c.abort(), c = u = void 0, e.style.overflow = h;
      });
    },
    out(y) {
      if (!s) {
        y == null || y(), u = void 0;
        return;
      }
      e.inert = !0, bn(e, "outrostart"), d = qr(e, p(), c, 0, () => {
        bn(e, "outroend"), y == null || y();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, m = (
    /** @type {Effect} */
    Q
  );
  if ((m.transitions ?? (m.transitions = [])).push(_), i && Ir) {
    var w = o;
    if (!w) {
      for (var $ = (
        /** @type {Effect | null} */
        m.parent
      ); $ && $.f & fr; )
        for (; ($ = $.parent) && !($.f & lr); )
          ;
      w = !$ || ($.f & ss) !== 0;
    }
    w && pr(() => {
      fn(() => _.in());
    });
  }
}
function qr(t, e, n, r, i) {
  var s = r === 1;
  if (ja(e)) {
    var a, o = !1;
    return gn(() => {
      if (!o) {
        var m = e({ direction: s ? "in" : "out" });
        a = qr(t, m, n, r, i);
      }
    }), {
      abort: () => {
        o = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: je,
      deactivate: je,
      reset: je,
      t: () => r
    };
  const { delay: f = 0, css: u, tick: l, easing: h = Wo } = e;
  var c = [];
  if (s && n === void 0 && (l && l(0, 1), u)) {
    var d = Di(u(0, 1));
    c.push(d, d);
  }
  var p = () => 1 - r, _ = t.animate(c, { duration: f });
  return _.onfinish = () => {
    var m = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var w = r - m, $ = (
      /** @type {number} */
      e.duration * Math.abs(w)
    ), y = [];
    if ($ > 0) {
      var x = !1;
      if (u)
        for (var E = Math.ceil($ / 16.666666666666668), b = 0; b <= E; b += 1) {
          var T = m + w * h(b / E), P = Di(u(T, 1 - T));
          y.push(P), x || (x = P.overflow === "hidden");
        }
      x && (t.style.overflow = "hidden"), p = () => {
        var K = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return m + w * h(K / $);
      }, l && Xo(() => {
        if (_.playState !== "running") return !1;
        var K = p();
        return l(K, 1 - K), !0;
      });
    }
    _ = t.animate(y, { duration: $, fill: "forwards" }), _.onfinish = () => {
      p = () => r, l == null || l(r, 1 - r), i();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = je);
    },
    deactivate: () => {
      i = je;
    },
    reset: () => {
      r === 0 && (l == null || l(1, 0));
    },
    t: () => p()
  };
}
function Ii(t, e) {
  return t === e || (t == null ? void 0 : t[on]) === e;
}
function Kn(t = {}, e, n, r) {
  return pr(() => {
    var i, s;
    return As(() => {
      i = s, s = [], fn(() => {
        t !== n(...s) && (e(t, ...s), i && Ii(n(...i), t) && e(null, ...i));
      });
    }), () => {
      gn(() => {
        s && Ii(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function ui(t) {
  Dt === null && Mo(), Un(() => {
    const e = fn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let An = !1;
function Ko(t) {
  var e = An;
  try {
    return An = !1, [t(), An];
  } finally {
    An = e;
  }
}
function Jo(t, e = 1) {
  const n = t();
  return t(n + e), n;
}
function wt(t, e, n, r) {
  var E;
  var i = (n & Fa) !== 0, s = !0, a = (n & qa) !== 0, o = (n & Va) !== 0, f = !1, u;
  a ? [u, f] = Ko(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e];
  var l = on in t || os in t, h = a && (((E = Se(t, e)) == null ? void 0 : E.set) ?? (l && e in t && ((b) => t[e] = b))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, _ = () => (p = !0, d && (d = !1, o ? c = fn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  u === void 0 && r !== void 0 && (h && s && ao(), u = _(), h && h(u));
  var m;
  if (m = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? _() : (d = !0, p = !1, b);
  }, !(n & La))
    return m;
  if (h) {
    var w = t.$$legacy;
    return function(b, T) {
      return arguments.length > 0 ? ((!T || w || f) && h(T ? m() : b), b) : m();
    };
  }
  var $ = !1, y = /* @__PURE__ */ ri(u), x = /* @__PURE__ */ cr(() => {
    var b = m(), T = v(y);
    return $ ? ($ = !1, T) : y.v = b;
  });
  return i || (x.equals = ni), function(b, T) {
    if (arguments.length > 0) {
      const P = T ? v(x) : a ? F(b) : b;
      return x.equals(P) || ($ = !0, M(y, P), p && c !== void 0 && (c = P), fn(() => v(x))), b;
    }
    return v(x);
  };
}
function Zo(t) {
  return new jo(t);
}
var fe, Vt;
class jo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    kr(this, fe);
    /** @type {Record<string, any>} */
    kr(this, Vt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var f = /* @__PURE__ */ ri(o);
      return n.set(a, f), f;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return v(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === os ? !0 : (v(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, f) {
          return M(n.get(o) ?? r(o, f), f), Reflect.set(a, o, f);
        }
      }
    );
    Er(this, Vt, (e.hydrate ? Lo : Ds)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && mt(), Er(this, fe, i.$$events);
    for (const a of Object.keys(Ct(this, Vt)))
      a === "$set" || a === "$destroy" || a === "$on" || Vn(this, a, {
        get() {
          return Ct(this, Vt)[a];
        },
        /** @param {any} value */
        set(o) {
          Ct(this, Vt)[a] = o;
        },
        enumerable: !0
      });
    Ct(this, Vt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, Ct(this, Vt).$destroy = () => {
      qo(Ct(this, Vt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    Ct(this, Vt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    Ct(this, fe)[e] = Ct(this, fe)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return Ct(this, fe)[e].push(r), () => {
      Ct(this, fe)[e] = Ct(this, fe)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    Ct(this, Vt).$destroy();
  }
}
fe = new WeakMap(), Vt = new WeakMap();
let qs;
typeof HTMLElement == "function" && (qs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    Yt(this, "$$ctor");
    /** Slots */
    Yt(this, "$$s");
    /** @type {any} The Svelte component instance */
    Yt(this, "$$c");
    /** Whether or not the custom element is connected */
    Yt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Yt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Yt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Yt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Yt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Yt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Yt(this, "$$me");
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
          s !== "default" && (o.name = s), Nt(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Qo(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = Cn(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Zo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = To(() => {
        As(() => {
          var s;
          this.$$r = !0;
          for (const a of qn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Cn(
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
    return qn(this.$$p_d).find(
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
function Qo(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function _r(t, e, n, r, i, s) {
  let a = class extends qs {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return qn(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return qn(e).forEach((o) => {
    Vn(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var h;
        f = Cn(o, f, e), this.$$d[o] = f;
        var u = this.$$c;
        if (u) {
          var l = (h = Se(u, o)) == null ? void 0 : h.get;
          l ? u[o] = f : u.$set({ [o]: f });
        }
      }
    });
  }), r.forEach((o) => {
    Vn(a.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var tl = { value: () => {
} };
function Vs() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Mn(n);
}
function Mn(t) {
  this._ = t;
}
function el(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Mn.prototype = Vs.prototype = {
  constructor: Mn,
  on: function(t, e) {
    var n = this._, r = el(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = nl(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = Fi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Fi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Mn(t);
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
function nl(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Fi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = tl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Vr = "http://www.w3.org/1999/xhtml";
const Li = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function mr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Li.hasOwnProperty(e) ? { space: Li[e], local: t } : t;
}
function rl(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Vr && e.documentElement.namespaceURI === Vr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function il(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Hs(t) {
  var e = mr(t);
  return (e.local ? il : rl)(e);
}
function sl() {
}
function fi(t) {
  return t == null ? sl : function() {
    return this.querySelector(t);
  };
}
function al(t) {
  typeof t != "function" && (t = fi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), f, u, l = 0; l < a; ++l)
      (f = s[l]) && (u = t.call(f, f.__data__, l, s)) && ("__data__" in f && (u.__data__ = f.__data__), o[l] = u);
  return new Ft(r, this._parents);
}
function ol(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ll() {
  return [];
}
function zs(t) {
  return t == null ? ll : function() {
    return this.querySelectorAll(t);
  };
}
function ul(t) {
  return function() {
    return ol(t.apply(this, arguments));
  };
}
function fl(t) {
  typeof t == "function" ? t = ul(t) : t = zs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, f, u = 0; u < o; ++u)
      (f = a[u]) && (r.push(t.call(f, f.__data__, u, a)), i.push(f));
  return new Ft(r, i);
}
function Bs(t) {
  return function() {
    return this.matches(t);
  };
}
function Ys(t) {
  return function(e) {
    return e.matches(t);
  };
}
var cl = Array.prototype.find;
function dl(t) {
  return function() {
    return cl.call(this.children, t);
  };
}
function hl() {
  return this.firstElementChild;
}
function vl(t) {
  return this.select(t == null ? hl : dl(typeof t == "function" ? t : Ys(t)));
}
var pl = Array.prototype.filter;
function gl() {
  return Array.from(this.children);
}
function _l(t) {
  return function() {
    return pl.call(this.children, t);
  };
}
function ml(t) {
  return this.selectAll(t == null ? gl : _l(typeof t == "function" ? t : Ys(t)));
}
function yl(t) {
  typeof t != "function" && (t = Bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], f, u = 0; u < a; ++u)
      (f = s[u]) && t.call(f, f.__data__, u, s) && o.push(f);
  return new Ft(r, this._parents);
}
function Us(t) {
  return new Array(t.length);
}
function wl() {
  return new Ft(this._enter || this._groups.map(Us), this._parents);
}
function Jn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Jn.prototype = {
  constructor: Jn,
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
function xl(t) {
  return function() {
    return t;
  };
}
function bl(t, e, n, r, i, s) {
  for (var a = 0, o, f = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Jn(t, s[a]);
  for (; a < f; ++a)
    (o = e[a]) && (i[a] = o);
}
function $l(t, e, n, r, i, s, a) {
  var o, f, u = /* @__PURE__ */ new Map(), l = e.length, h = s.length, c = new Array(l), d;
  for (o = 0; o < l; ++o)
    (f = e[o]) && (c[o] = d = a.call(f, f.__data__, o, e) + "", u.has(d) ? i[o] = f : u.set(d, f));
  for (o = 0; o < h; ++o)
    d = a.call(t, s[o], o, s) + "", (f = u.get(d)) ? (r[o] = f, f.__data__ = s[o], u.delete(d)) : n[o] = new Jn(t, s[o]);
  for (o = 0; o < l; ++o)
    (f = e[o]) && u.get(c[o]) === f && (i[o] = f);
}
function Al(t) {
  return t.__data__;
}
function kl(t, e) {
  if (!arguments.length) return Array.from(this, Al);
  var n = e ? $l : bl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = xl(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), f = new Array(s), u = 0; u < s; ++u) {
    var l = r[u], h = i[u], c = h.length, d = El(t.call(l, l && l.__data__, u, r)), p = d.length, _ = o[u] = new Array(p), m = a[u] = new Array(p), w = f[u] = new Array(c);
    n(l, h, _, m, w, d, e);
    for (var $ = 0, y = 0, x, E; $ < p; ++$)
      if (x = _[$]) {
        for ($ >= y && (y = $ + 1); !(E = m[y]) && ++y < p; ) ;
        x._next = E || null;
      }
  }
  return a = new Ft(a, r), a._enter = o, a._exit = f, a;
}
function El(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Rl() {
  return new Ft(this._exit || this._groups.map(Us), this._parents);
}
function Nl(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Tl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), f = 0; f < a; ++f)
    for (var u = n[f], l = r[f], h = u.length, c = o[f] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || l[p]) && (c[p] = d);
  for (; f < i; ++f)
    o[f] = n[f];
  return new Ft(o, this._parents);
}
function Sl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Cl(t) {
  t || (t = Ml);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, f = i[s] = new Array(o), u, l = 0; l < o; ++l)
      (u = a[l]) && (f[l] = u);
    f.sort(e);
  }
  return new Ft(i, this._parents).order();
}
function Ml(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ol() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Pl() {
  return Array.from(this);
}
function Dl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Il() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Fl() {
  return !this.node();
}
function Ll(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function ql(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hl(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function zl(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Bl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Yl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Ul(t, e) {
  var n = mr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Vl : ql : typeof e == "function" ? n.local ? Yl : Bl : n.local ? zl : Hl)(n, e));
}
function Xs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Xl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Gl(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Wl(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Kl(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Xl : typeof e == "function" ? Wl : Gl)(t, e, n ?? "")) : Xe(this.node(), t);
}
function Xe(t, e) {
  return t.style.getPropertyValue(e) || Xs(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Jl(t) {
  return function() {
    delete this[t];
  };
}
function Zl(t, e) {
  return function() {
    this[t] = e;
  };
}
function jl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ql(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Jl : typeof e == "function" ? jl : Zl)(t, e)) : this.node()[t];
}
function Gs(t) {
  return t.trim().split(/^|\s+/);
}
function ci(t) {
  return t.classList || new Ws(t);
}
function Ws(t) {
  this._node = t, this._names = Gs(t.getAttribute("class") || "");
}
Ws.prototype = {
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
function Ks(t, e) {
  for (var n = ci(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Js(t, e) {
  for (var n = ci(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function tu(t) {
  return function() {
    Ks(this, t);
  };
}
function eu(t) {
  return function() {
    Js(this, t);
  };
}
function nu(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ks : Js)(this, t);
  };
}
function ru(t, e) {
  var n = Gs(t + "");
  if (arguments.length < 2) {
    for (var r = ci(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? nu : e ? tu : eu)(n, e));
}
function iu() {
  this.textContent = "";
}
function su(t) {
  return function() {
    this.textContent = t;
  };
}
function au(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ou(t) {
  return arguments.length ? this.each(t == null ? iu : (typeof t == "function" ? au : su)(t)) : this.node().textContent;
}
function lu() {
  this.innerHTML = "";
}
function uu(t) {
  return function() {
    this.innerHTML = t;
  };
}
function fu(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function cu(t) {
  return arguments.length ? this.each(t == null ? lu : (typeof t == "function" ? fu : uu)(t)) : this.node().innerHTML;
}
function du() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function hu() {
  return this.each(du);
}
function vu() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function pu() {
  return this.each(vu);
}
function gu(t) {
  var e = typeof t == "function" ? t : Hs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function _u() {
  return null;
}
function mu(t, e) {
  var n = typeof t == "function" ? t : Hs(t), r = e == null ? _u : typeof e == "function" ? e : fi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function yu() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function wu() {
  return this.each(yu);
}
function xu() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function bu() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function $u(t) {
  return this.select(t ? bu : xu);
}
function Au(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ku(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Eu(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Ru(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Nu(t, e, n) {
  return function() {
    var r = this.__on, i, s = ku(e);
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
function Tu(t, e, n) {
  var r = Eu(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var f = 0, u = o.length, l; f < u; ++f)
        for (i = 0, l = o[f]; i < s; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (o = e ? Nu : Ru, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Zs(t, e, n) {
  var r = Xs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Su(t, e) {
  return function() {
    return Zs(this, t, e);
  };
}
function Cu(t, e) {
  return function() {
    return Zs(this, t, e.apply(this, arguments));
  };
}
function Mu(t, e) {
  return this.each((typeof e == "function" ? Cu : Su)(t, e));
}
function* Ou() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var js = [null];
function Ft(t, e) {
  this._groups = t, this._parents = e;
}
function Je() {
  return new Ft([[document.documentElement]], js);
}
function Pu() {
  return this;
}
Ft.prototype = Je.prototype = {
  constructor: Ft,
  select: al,
  selectAll: fl,
  selectChild: vl,
  selectChildren: ml,
  filter: yl,
  data: kl,
  enter: wl,
  exit: Rl,
  join: Nl,
  merge: Tl,
  selection: Pu,
  order: Sl,
  sort: Cl,
  call: Ol,
  nodes: Pl,
  node: Dl,
  size: Il,
  empty: Fl,
  each: Ll,
  attr: Ul,
  style: Kl,
  property: Ql,
  classed: ru,
  text: ou,
  html: cu,
  raise: hu,
  lower: pu,
  append: gu,
  insert: mu,
  remove: wu,
  clone: $u,
  datum: Au,
  on: Tu,
  dispatch: Mu,
  [Symbol.iterator]: Ou
};
function bt(t) {
  return typeof t == "string" ? new Ft([[document.querySelector(t)]], [document.documentElement]) : new Ft([[t]], js);
}
function di(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Qs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function wn() {
}
var dn = 0.7, Zn = 1 / dn, Ye = "\\s*([+-]?\\d+)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Du = /^#([0-9a-f]{3,8})$/, Iu = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), Fu = new RegExp(`^rgb\\(${ee},${ee},${ee}\\)$`), Lu = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${hn}\\)$`), qu = new RegExp(`^rgba\\(${ee},${ee},${ee},${hn}\\)$`), Vu = new RegExp(`^hsl\\(${hn},${ee},${ee}\\)$`), Hu = new RegExp(`^hsla\\(${hn},${ee},${ee},${hn}\\)$`), qi = {
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
di(wn, Pe, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vi,
  // Deprecated! Use color.formatHex.
  formatHex: Vi,
  formatHex8: zu,
  formatHsl: Bu,
  formatRgb: Hi,
  toString: Hi
});
function Vi() {
  return this.rgb().formatHex();
}
function zu() {
  return this.rgb().formatHex8();
}
function Bu() {
  return ta(this).formatHsl();
}
function Hi() {
  return this.rgb().formatRgb();
}
function Pe(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Du.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? zi(e) : n === 3 ? new Pt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? kn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? kn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Iu.exec(t)) ? new Pt(e[1], e[2], e[3], 1) : (e = Fu.exec(t)) ? new Pt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Lu.exec(t)) ? kn(e[1], e[2], e[3], e[4]) : (e = qu.exec(t)) ? kn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Vu.exec(t)) ? Ui(e[1], e[2] / 100, e[3] / 100, 1) : (e = Hu.exec(t)) ? Ui(e[1], e[2] / 100, e[3] / 100, e[4]) : qi.hasOwnProperty(t) ? zi(qi[t]) : t === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function zi(t) {
  return new Pt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function kn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Pt(t, e, n, r);
}
function Yu(t) {
  return t instanceof wn || (t = Pe(t)), t ? (t = t.rgb(), new Pt(t.r, t.g, t.b, t.opacity)) : new Pt();
}
function Hr(t, e, n, r) {
  return arguments.length === 1 ? Yu(t) : new Pt(t, e, n, r ?? 1);
}
function Pt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
di(Pt, Hr, Qs(wn, {
  brighter(t) {
    return t = t == null ? Zn : Math.pow(Zn, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dn : Math.pow(dn, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(Oe(this.r), Oe(this.g), Oe(this.b), jn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: Uu,
  formatRgb: Yi,
  toString: Yi
}));
function Bi() {
  return `#${Te(this.r)}${Te(this.g)}${Te(this.b)}`;
}
function Uu() {
  return `#${Te(this.r)}${Te(this.g)}${Te(this.b)}${Te((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yi() {
  const t = jn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Oe(this.r)}, ${Oe(this.g)}, ${Oe(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function jn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Oe(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Te(t) {
  return t = Oe(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ui(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Xt(t, e, n, r);
}
function ta(t) {
  if (t instanceof Xt) return new Xt(t.h, t.s, t.l, t.opacity);
  if (t instanceof wn || (t = Pe(t)), !t) return new Xt();
  if (t instanceof Xt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, f = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= f < 0.5 ? s + i : 2 - s - i, a *= 60) : o = f > 0 && f < 1 ? 0 : a, new Xt(a, o, f, t.opacity);
}
function Xu(t, e, n, r) {
  return arguments.length === 1 ? ta(t) : new Xt(t, e, n, r ?? 1);
}
function Xt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
di(Xt, Xu, Qs(wn, {
  brighter(t) {
    return t = t == null ? Zn : Math.pow(Zn, t), new Xt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dn : Math.pow(dn, t), new Xt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Pt(
      Rr(t >= 240 ? t - 240 : t + 120, i, r),
      Rr(t, i, r),
      Rr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Xi(this.h), En(this.s), En(this.l), jn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = jn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Xi(this.h)}, ${En(this.s) * 100}%, ${En(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Xi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function En(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Rr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const hi = (t) => () => t;
function Gu(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Wu(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Ku(t) {
  return (t = +t) == 1 ? ea : function(e, n) {
    return n - e ? Wu(e, n, t) : hi(isNaN(e) ? n : e);
  };
}
function ea(t, e) {
  var n = e - t;
  return n ? Gu(t, n) : hi(isNaN(t) ? e : t);
}
const Qn = function t(e) {
  var n = Ku(e);
  function r(i, s) {
    var a = n((i = Hr(i)).r, (s = Hr(s)).r), o = n(i.g, s.g), f = n(i.b, s.b), u = ea(i.opacity, s.opacity);
    return function(l) {
      return i.r = a(l), i.g = o(l), i.b = f(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ju(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Zu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ju(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = ze(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Qu(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function jt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function tf(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = ze(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nr = new RegExp(zr.source, "g");
function ef(t) {
  return function() {
    return t;
  };
}
function nf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function na(t, e) {
  var n = zr.lastIndex = Nr.lastIndex = 0, r, i, s, a = -1, o = [], f = [];
  for (t = t + "", e = e + ""; (r = zr.exec(t)) && (i = Nr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, f.push({ i: a, x: jt(r, i) })), n = Nr.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? f[0] ? nf(f[0].x) : ef(e) : (e = f.length, function(u) {
    for (var l = 0, h; l < e; ++l) o[(h = f[l]).i] = h.x(u);
    return o.join("");
  });
}
function ze(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? hi(e) : (n === "number" ? jt : n === "string" ? (r = Pe(e)) ? (e = r, Qn) : na : e instanceof Pe ? Qn : e instanceof Date ? Qu : Zu(e) ? Ju : Array.isArray(e) ? ju : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? tf : jt)(t, e);
}
var Gi = 180 / Math.PI, Br = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ra(t, e, n, r, i, s) {
  var a, o, f;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (f = t * n + e * r) && (n -= t * f, r -= e * f), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, f /= o), t * r < e * n && (t = -t, e = -e, f = -f, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Gi,
    skewX: Math.atan(f) * Gi,
    scaleX: a,
    scaleY: o
  };
}
var Rn;
function rf(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Br : ra(e.a, e.b, e.c, e.d, e.e, e.f);
}
function sf(t) {
  return t == null || (Rn || (Rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rn.setAttribute("transform", t), !(t = Rn.transform.baseVal.consolidate())) ? Br : (t = t.matrix, ra(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ia(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, l, h, c, d, p) {
    if (u !== h || l !== c) {
      var _ = d.push("translate(", null, e, null, n);
      p.push({ i: _ - 4, x: jt(u, h) }, { i: _ - 2, x: jt(l, c) });
    } else (h || c) && d.push("translate(" + h + e + c + n);
  }
  function a(u, l, h, c) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: jt(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function o(u, l, h, c) {
    u !== l ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: jt(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function f(u, l, h, c, d, p) {
    if (u !== h || l !== c) {
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: jt(u, h) }, { i: _ - 2, x: jt(l, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(u, l) {
    var h = [], c = [];
    return u = t(u), l = t(l), s(u.translateX, u.translateY, l.translateX, l.translateY, h, c), a(u.rotate, l.rotate, h, c), o(u.skewX, l.skewX, h, c), f(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, c), u = l = null, function(d) {
      for (var p = -1, _ = c.length, m; ++p < _; ) h[(m = c[p]).i] = m.x(d);
      return h.join("");
    };
  };
}
var af = ia(rf, "px, ", "px)", "deg)"), of = ia(sf, ", ", ")", ")"), Ge = 0, nn = 0, Qe = 0, sa = 1e3, tr, rn, er = 0, De = 0, yr = 0, vn = typeof performance == "object" && performance.now ? performance : Date, aa = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function vi() {
  return De || (aa(lf), De = vn.now() + yr);
}
function lf() {
  De = 0;
}
function nr() {
  this._call = this._time = this._next = null;
}
nr.prototype = oa.prototype = {
  constructor: nr,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? vi() : +n) + (e == null ? 0 : +e), !this._next && rn !== this && (rn ? rn._next = this : tr = this, rn = this), this._call = t, this._time = n, Yr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yr());
  }
};
function oa(t, e, n) {
  var r = new nr();
  return r.restart(t, e, n), r;
}
function uf() {
  vi(), ++Ge;
  for (var t = tr, e; t; )
    (e = De - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ge;
}
function Wi() {
  De = (er = vn.now()) + yr, Ge = nn = 0;
  try {
    uf();
  } finally {
    Ge = 0, cf(), De = 0;
  }
}
function ff() {
  var t = vn.now(), e = t - er;
  e > sa && (yr -= e, er = t);
}
function cf() {
  for (var t, e = tr, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : tr = n);
  rn = t, Yr(r);
}
function Yr(t) {
  if (!Ge) {
    nn && (nn = clearTimeout(nn));
    var e = t - De;
    e > 24 ? (t < 1 / 0 && (nn = setTimeout(Wi, t - vn.now() - yr)), Qe && (Qe = clearInterval(Qe))) : (Qe || (er = vn.now(), Qe = setInterval(ff, sa)), Ge = 1, aa(Wi));
  }
}
function Ki(t, e, n) {
  var r = new nr();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var df = Vs("start", "end", "cancel", "interrupt"), hf = [], la = 0, Ji = 1, Ur = 2, On = 3, Zi = 4, Xr = 5, Pn = 6;
function wr(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  vf(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: df,
    tween: hf,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: la
  });
}
function pi(t, e) {
  var n = Kt(t, e);
  if (n.state > la) throw new Error("too late; already scheduled");
  return n;
}
function se(t, e) {
  var n = Kt(t, e);
  if (n.state > On) throw new Error("too late; already running");
  return n;
}
function Kt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function vf(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = oa(s, 0, n.time);
  function s(u) {
    n.state = Ji, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var l, h, c, d;
    if (n.state !== Ji) return f();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === On) return Ki(a);
        d.state === Zi ? (d.state = Pn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = Pn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Ki(function() {
      n.state === On && (n.state = Zi, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ur, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ur) {
      for (n.state = On, i = new Array(c = n.tween.length), l = 0, h = -1; l < c; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(f), n.state = Xr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, l);
    n.state === Xr && (n.on.call("end", t, t.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Pn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function pf(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Ur && r.state < Xr, r.state = Pn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function gf(t) {
  return this.each(function() {
    pf(this, t);
  });
}
function _f(t, e) {
  var n, r;
  return function() {
    var i = se(this, t), s = i.tween;
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
function mf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = se(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: e, value: n }, f = 0, u = i.length; f < u; ++f)
        if (i[f].name === e) {
          i[f] = o;
          break;
        }
      f === u && i.push(o);
    }
    s.tween = i;
  };
}
function yf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Kt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? _f : mf)(n, t, e));
}
function gi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = se(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Kt(i, r).value[e];
  };
}
function ua(t, e) {
  var n;
  return (typeof e == "number" ? jt : e instanceof Pe ? Qn : (n = Pe(e)) ? (e = n, Qn) : na)(t, e);
}
function wf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function bf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function $f(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Af(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), f;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), f = o + "", a === f ? null : a === r && f === i ? s : (i = f, s = e(r = a, o)));
  };
}
function kf(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), f;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), f = o + "", a === f ? null : a === r && f === i ? s : (i = f, s = e(r = a, o)));
  };
}
function Ef(t, e) {
  var n = mr(t), r = n === "transform" ? of : ua;
  return this.attrTween(t, typeof e == "function" ? (n.local ? kf : Af)(n, r, gi(this, "attr." + t, e)) : e == null ? (n.local ? xf : wf)(n) : (n.local ? $f : bf)(n, r, e));
}
function Rf(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Nf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Tf(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Nf(t, s)), n;
  }
  return i._value = e, i;
}
function Sf(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Rf(t, s)), n;
  }
  return i._value = e, i;
}
function Cf(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = mr(t);
  return this.tween(n, (r.local ? Tf : Sf)(r, e));
}
function Mf(t, e) {
  return function() {
    pi(this, t).delay = +e.apply(this, arguments);
  };
}
function Of(t, e) {
  return e = +e, function() {
    pi(this, t).delay = e;
  };
}
function Pf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Mf : Of)(e, t)) : Kt(this.node(), e).delay;
}
function Df(t, e) {
  return function() {
    se(this, t).duration = +e.apply(this, arguments);
  };
}
function If(t, e) {
  return e = +e, function() {
    se(this, t).duration = e;
  };
}
function Ff(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Df : If)(e, t)) : Kt(this.node(), e).duration;
}
function Lf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    se(this, t).ease = e;
  };
}
function qf(t) {
  var e = this._id;
  return arguments.length ? this.each(Lf(e, t)) : Kt(this.node(), e).ease;
}
function Vf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    se(this, t).ease = n;
  };
}
function Hf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Vf(this._id, t));
}
function zf(t) {
  typeof t != "function" && (t = Bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], f, u = 0; u < a; ++u)
      (f = s[u]) && t.call(f, f.__data__, u, s) && o.push(f);
  return new ge(r, this._parents, this._name, this._id);
}
function Bf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var f = e[o], u = n[o], l = f.length, h = a[o] = new Array(l), c, d = 0; d < l; ++d)
      (c = f[d] || u[d]) && (h[d] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new ge(a, this._parents, this._name, this._id);
}
function Yf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Uf(t, e, n) {
  var r, i, s = Yf(e) ? pi : se;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Xf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Kt(this.node(), n).on.on(t) : this.each(Uf(n, t, e));
}
function Gf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Wf() {
  return this.on("end.remove", Gf(this._id));
}
function Kf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = fi(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], f = o.length, u = s[a] = new Array(f), l, h, c = 0; c < f; ++c)
      (l = o[c]) && (h = t.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), u[c] = h, wr(u[c], e, n, c, u, Kt(l, n)));
  return new ge(s, this._parents, e, n);
}
function Jf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = zs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var f = r[o], u = f.length, l, h = 0; h < u; ++h)
      if (l = f[h]) {
        for (var c = t.call(l, l.__data__, h, f), d, p = Kt(l, n), _ = 0, m = c.length; _ < m; ++_)
          (d = c[_]) && wr(d, e, n, _, c, p);
        s.push(c), a.push(l);
      }
  return new ge(s, a, e, n);
}
var Zf = Je.prototype.constructor;
function jf() {
  return new Zf(this._groups, this._parents);
}
function Qf(t, e) {
  var n, r, i;
  return function() {
    var s = Xe(this, t), a = (this.style.removeProperty(t), Xe(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function fa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function tc(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Xe(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ec(t, e, n) {
  var r, i, s;
  return function() {
    var a = Xe(this, t), o = n(this), f = o + "";
    return o == null && (f = o = (this.style.removeProperty(t), Xe(this, t))), a === f ? null : a === r && f === i ? s : (i = f, s = e(r = a, o));
  };
}
function nc(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var f = se(this, t), u = f.on, l = f.value[s] == null ? o || (o = fa(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(a, i = l), f.on = r;
  };
}
function rc(t, e, n) {
  var r = (t += "") == "transform" ? af : ua;
  return e == null ? this.styleTween(t, Qf(t, r)).on("end.style." + t, fa(t)) : typeof e == "function" ? this.styleTween(t, ec(t, r, gi(this, "style." + t, e))).each(nc(this._id, t)) : this.styleTween(t, tc(t, r, e), n).on("end.style." + t, null);
}
function ic(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function sc(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && ic(t, a, n)), r;
  }
  return s._value = e, s;
}
function ac(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, sc(t, e, n ?? ""));
}
function oc(t) {
  return function() {
    this.textContent = t;
  };
}
function lc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function uc(t) {
  return this.tween("text", typeof t == "function" ? lc(gi(this, "text", t)) : oc(t == null ? "" : t + ""));
}
function fc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function cc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && fc(i)), e;
  }
  return r._value = t, r;
}
function dc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, cc(t));
}
function hc() {
  for (var t = this._name, e = this._id, n = ca(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, f, u = 0; u < o; ++u)
      if (f = a[u]) {
        var l = Kt(f, e);
        wr(f, t, n, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new ge(r, this._parents, t, n);
}
function vc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, f = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = se(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(f)), u.on = e;
    }), i === 0 && s();
  });
}
var pc = 0;
function ge(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Dn(t) {
  return Je().transition(t);
}
function ca() {
  return ++pc;
}
var oe = Je.prototype;
ge.prototype = Dn.prototype = {
  constructor: ge,
  select: Kf,
  selectAll: Jf,
  selectChild: oe.selectChild,
  selectChildren: oe.selectChildren,
  filter: zf,
  merge: Bf,
  selection: jf,
  transition: hc,
  call: oe.call,
  nodes: oe.nodes,
  node: oe.node,
  size: oe.size,
  empty: oe.empty,
  each: oe.each,
  on: Xf,
  attr: Ef,
  attrTween: Cf,
  style: rc,
  styleTween: ac,
  text: uc,
  textTween: dc,
  remove: Wf,
  tween: yf,
  delay: Pf,
  duration: Ff,
  ease: qf,
  easeVarying: Hf,
  end: vc,
  [Symbol.iterator]: oe[Symbol.iterator]
};
function gc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var _c = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gc
};
function mc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function yc(t) {
  var e, n;
  t instanceof ge ? (e = t._id, t = t._name) : (e = ca(), (n = _c).time = vi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, f, u = 0; u < o; ++u)
      (f = a[u]) && wr(f, t, e, u, a, n || mc(f, e));
  return new ge(r, this._parents, t, e);
}
Je.prototype.interrupt = gf;
Je.prototype.transition = yc;
const Gr = Math.PI, Wr = 2 * Gr, Re = 1e-6, wc = Wr - Re;
function da(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function xc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return da;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class bc {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? da : xc(e);
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
    let a = this._x1, o = this._y1, f = r - e, u = i - n, l = a - e, h = o - n, c = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > Re) if (!(Math.abs(h * f - u * l) > Re) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - o, _ = f * f + u * u, m = d * d + p * p, w = Math.sqrt(_), $ = Math.sqrt(c), y = s * Math.tan((Gr - Math.acos((_ + c - m) / (2 * w * $))) / 2), x = y / $, E = y / w;
      Math.abs(x - 1) > Re && this._append`L${e + x * l},${n + x * h}`, this._append`A${s},${s},0,0,${+(h * d > l * p)},${this._x1 = e + E * f},${this._y1 = n + E * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), f = r * Math.sin(i), u = e + o, l = n + f, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Re || Math.abs(this._y1 - l) > Re) && this._append`L${u},${l}`, r && (c < 0 && (c = c % Wr + Wr), c > wc ? this._append`A${r},${r},0,1,${h},${e - o},${n - f}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : c > Re && this._append`A${r},${r},0,${+(c >= Gr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function $c(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Ac = $c("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Rt(t) {
  return function() {
    return t;
  };
}
const ji = Math.abs, At = Math.atan2, Ee = Math.cos, kc = Math.max, Tr = Math.min, Zt = Math.sin, Be = Math.sqrt, Ot = 1e-12, pn = Math.PI, rr = pn / 2, In = 2 * pn;
function Ec(t) {
  return t > 1 ? 0 : t < -1 ? pn : Math.acos(t);
}
function Qi(t) {
  return t >= 1 ? rr : t <= -1 ? -rr : Math.asin(t);
}
function Rc(t) {
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
  }, () => new bc(e);
}
function Nc(t) {
  return t.innerRadius;
}
function Tc(t) {
  return t.outerRadius;
}
function Sc(t) {
  return t.startAngle;
}
function Cc(t) {
  return t.endAngle;
}
function Mc(t) {
  return t && t.padAngle;
}
function Oc(t, e, n, r, i, s, a, o) {
  var f = n - t, u = r - e, l = a - i, h = o - s, c = h * f - l * u;
  if (!(c * c < Ot))
    return c = (l * (e - s) - h * (t - i)) / c, [t + c * f, e + c * u];
}
function Nn(t, e, n, r, i, s, a) {
  var o = t - n, f = e - r, u = (a ? s : -s) / Be(o * o + f * f), l = u * f, h = -u * o, c = t + l, d = e + h, p = n + l, _ = r + h, m = (c + p) / 2, w = (d + _) / 2, $ = p - c, y = _ - d, x = $ * $ + y * y, E = i - s, b = c * _ - p * d, T = (y < 0 ? -1 : 1) * Be(kc(0, E * E * x - b * b)), P = (b * y - $ * T) / x, K = (-b * $ - y * T) / x, rt = (b * y + $ * T) / x, J = (-b * $ + y * T) / x, ot = P - m, C = K - w, O = rt - m, xt = J - w;
  return ot * ot + C * C > O * O + xt * xt && (P = rt, K = J), {
    cx: P,
    cy: K,
    x01: -l,
    y01: -h,
    x11: P * (i / E - 1),
    y11: K * (i / E - 1)
  };
}
function le() {
  var t = Nc, e = Tc, n = Rt(0), r = null, i = Sc, s = Cc, a = Mc, o = null, f = Rc(u);
  function u() {
    var l, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - rr, _ = s.apply(this, arguments) - rr, m = ji(_ - p), w = _ > p;
    if (o || (o = l = f()), d < c && (h = d, d = c, c = h), !(d > Ot)) o.moveTo(0, 0);
    else if (m > In - Ot)
      o.moveTo(d * Ee(p), d * Zt(p)), o.arc(0, 0, d, p, _, !w), c > Ot && (o.moveTo(c * Ee(_), c * Zt(_)), o.arc(0, 0, c, _, p, w));
    else {
      var $ = p, y = _, x = p, E = _, b = m, T = m, P = a.apply(this, arguments) / 2, K = P > Ot && (r ? +r.apply(this, arguments) : Be(c * c + d * d)), rt = Tr(ji(d - c) / 2, +n.apply(this, arguments)), J = rt, ot = rt, C, O;
      if (K > Ot) {
        var xt = Qi(K / c * Zt(P)), _t = Qi(K / d * Zt(P));
        (b -= xt * 2) > Ot ? (xt *= w ? 1 : -1, x += xt, E -= xt) : (b = 0, x = E = (p + _) / 2), (T -= _t * 2) > Ot ? (_t *= w ? 1 : -1, $ += _t, y -= _t) : (T = 0, $ = y = (p + _) / 2);
      }
      var yt = d * Ee($), pt = d * Zt($), Lt = c * Ee(E), R = c * Zt(E);
      if (rt > Ot) {
        var q = d * Ee(y), N = d * Zt(y), ut = c * Ee(x), U = c * Zt(x), j;
        if (m < pn)
          if (j = Oc(yt, pt, ut, U, q, N, Lt, R)) {
            var ct = yt - j[0], W = pt - j[1], ft = q - j[0], St = N - j[1], A = 1 / Zt(Ec((ct * ft + W * St) / (Be(ct * ct + W * W) * Be(ft * ft + St * St))) / 2), z = Be(j[0] * j[0] + j[1] * j[1]);
            J = Tr(rt, (c - z) / (A - 1)), ot = Tr(rt, (d - z) / (A + 1));
          } else
            J = ot = 0;
      }
      T > Ot ? ot > Ot ? (C = Nn(ut, U, yt, pt, d, ot, w), O = Nn(q, N, Lt, R, d, ot, w), o.moveTo(C.cx + C.x01, C.cy + C.y01), ot < rt ? o.arc(C.cx, C.cy, ot, At(C.y01, C.x01), At(O.y01, O.x01), !w) : (o.arc(C.cx, C.cy, ot, At(C.y01, C.x01), At(C.y11, C.x11), !w), o.arc(0, 0, d, At(C.cy + C.y11, C.cx + C.x11), At(O.cy + O.y11, O.cx + O.x11), !w), o.arc(O.cx, O.cy, ot, At(O.y11, O.x11), At(O.y01, O.x01), !w))) : (o.moveTo(yt, pt), o.arc(0, 0, d, $, y, !w)) : o.moveTo(yt, pt), !(c > Ot) || !(b > Ot) ? o.lineTo(Lt, R) : J > Ot ? (C = Nn(Lt, R, q, N, c, -J, w), O = Nn(yt, pt, ut, U, c, -J, w), o.lineTo(C.cx + C.x01, C.cy + C.y01), J < rt ? o.arc(C.cx, C.cy, J, At(C.y01, C.x01), At(O.y01, O.x01), !w) : (o.arc(C.cx, C.cy, J, At(C.y01, C.x01), At(C.y11, C.x11), !w), o.arc(0, 0, c, At(C.cy + C.y11, C.cx + C.x11), At(O.cy + O.y11, O.cx + O.x11), w), o.arc(O.cx, O.cy, J, At(O.y11, O.x11), At(O.y01, O.x01), !w))) : o.arc(0, 0, c, E, x, w);
    }
    if (o.closePath(), l) return o = null, l + "" || null;
  }
  return u.centroid = function() {
    var l = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - pn / 2;
    return [Ee(h) * l, Zt(h) * l];
  }, u.innerRadius = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Rt(+l), u) : t;
  }, u.outerRadius = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Rt(+l), u) : e;
  }, u.cornerRadius = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Rt(+l), u) : n;
  }, u.padRadius = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : Rt(+l), u) : r;
  }, u.startAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Rt(+l), u) : i;
  }, u.endAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : Rt(+l), u) : s;
  }, u.padAngle = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : Rt(+l), u) : a;
  }, u.context = function(l) {
    return arguments.length ? (o = l ?? null, u) : o;
  }, u;
}
function Pc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Dc(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ic(t) {
  return t;
}
function Sr() {
  var t = Ic, e = Dc, n = null, r = Rt(0), i = Rt(In), s = Rt(0);
  function a(o) {
    var f, u = (o = Pc(o)).length, l, h, c = 0, d = new Array(u), p = new Array(u), _ = +r.apply(this, arguments), m = Math.min(In, Math.max(-In, i.apply(this, arguments) - _)), w, $ = Math.min(Math.abs(m) / u, s.apply(this, arguments)), y = $ * (m < 0 ? -1 : 1), x;
    for (f = 0; f < u; ++f)
      (x = p[d[f] = f] = +t(o[f], f, o)) > 0 && (c += x);
    for (e != null ? d.sort(function(E, b) {
      return e(p[E], p[b]);
    }) : n != null && d.sort(function(E, b) {
      return n(o[E], o[b]);
    }), f = 0, h = c ? (m - u * y) / c : 0; f < u; ++f, _ = w)
      l = d[f], x = p[l], w = _ + (x > 0 ? x * h : 0) + y, p[l] = {
        data: o[l],
        index: f,
        value: x,
        startAngle: _,
        endAngle: w,
        padAngle: $
      };
    return p;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Rt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Rt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Rt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Rt(+o), a) : s;
  }, a;
}
function sn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
sn.prototype = {
  constructor: sn,
  scale: function(t) {
    return t === 1 ? this : new sn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new sn(this.k, this.x + this.k * t, this.y + this.k * e);
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
sn.prototype;
const Ne = {}, Kr = "No Further Rankings";
function ir(t, e) {
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
function ha(t, e, n) {
  if (e < 1)
    return [];
  const r = t.results[e - 1].tallyResults, i = [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s][n];
    a != null && i.push(a);
  }
  return i;
}
function sr(t, e) {
  return ha(t, e, "eliminated");
}
function ar(t, e) {
  let n = [];
  for (let r = 1; r <= e; r++)
    n = n.concat(ha(t, r, "elected"));
  return n;
}
var Fc = /* @__PURE__ */ Io('<svg><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const Lc = { hash: "svelte-3kpd", code: "" };
function va(t, e) {
  mn(e, !0), gr(t, Lc);
  let n = wt(e, "jsonData", 7), r = wt(e, "round", 15), i = wt(e, "mouseEventType", 15), s = wt(e, "mouseData", 15), a = wt(e, "mouseY", 15), o = wt(e, "animateOneRound", 15), f = wt(e, "animateOnePhase", 15), u = wt(e, "runFullAnimation", 15), l = wt(e, "setRound", 15);
  const h = 800, c = 800, d = Math.min(h, c) * 0.3, p = h / 2, _ = c / 2, m = "Pie", w = "Donut", $ = "TextLayer", y = "#transfer", x = "url(#cross-hatch)", E = 1.15, b = 0.1, T = 750, P = 800;
  let K = [], rt = [], J = [], ot = 0, C = st(0), O = st(null);
  function xt() {
    const g = bt(v(O));
    g.select("#" + m).remove(), g.select("#" + w).remove(), g.select("#" + $).remove();
  }
  function _t() {
    xt(), J = yt(), K = ba(m, J, p, _, 0, pt());
  }
  ui(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), o($t), f(ht), u(dt), l(we), ct(), _t();
  });
  function yt() {
    const g = j(r());
    return ot = ut(r()), g;
  }
  function pt() {
    return d;
  }
  function Lt() {
    return pt() * 1.41;
  }
  function R(g, k) {
    if (g === "exhausted") return ir(n(), k);
    {
      const S = n().results[k - 1].tally;
      return Number(S[g]);
    }
  }
  function q(g, k) {
    return R(g, k).toLocaleString("en-US");
  }
  function N(g, k) {
    return (R(g, k) / ot).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function ut(g) {
    const k = n().results[g - 1].tally;
    let S = 0;
    for (let [Y, D] of Object.entries(k))
      S += Number(D);
    return S;
  }
  function U(g, k) {
    const S = n().results[k - 1].tallyResults;
    let Y = 0;
    const D = S.findIndex((B) => (B == null ? void 0 : B.elected) && g == B.elected);
    if (D >= 0) {
      const B = S[D].transfers;
      if (B)
        for (let [H, L] of Object.entries(B)) Y += Number(L);
    } else
      return 0;
    return Y;
  }
  function j(g) {
    const k = n().results;
    let S = k[Math.max(0, g - 2)].tally;
    const Y = [], D = [];
    for (let [H, L] of Object.entries(S))
      Y.push({ label: H, value: 0 });
    S = k[g - 1].tally;
    for (let H of Y) {
      const L = Number(S[H.label]), G = U(H.label, g);
      G > 0 ? (D.push({
        label: H.label + y,
        value: G
      }), H.value = L - G, D.push(H)) : (H.value = L, D.push(H));
    }
    const B = ir(n(), g);
    return D.push({ label: "exhausted", value: B }), D;
  }
  function ct() {
    const g = bt(v(O)).select("defs").select("#cross-hatch");
    let k = 0;
    for (let [S, Y] of Object.entries(n().results[0].tally)) {
      k < 10 ? Ne[S] = Ac[k] : Ne[S] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"), k++;
      {
        const D = g.clone(!0);
        D.attr("id", S.replaceAll(" ", "-")).select("rect").attr("fill", Ne[S]), D.select("path").attr("stroke", "#505050");
      }
    }
    Ne.exhausted = x;
  }
  function W() {
    bt(v(O)).select("#" + w).remove();
  }
  function ft(g) {
    console.log("animate phase 1");
    const k = Dn("global").duration(P);
    g && k.on("end", g), W(), Le(), $a(), ka(0, pt()), mi();
  }
  function St(g) {
    console.log("animate phase 2");
    const k = Dn("global").duration(P);
    g && k.on("end", g), ae();
  }
  function A(g) {
    console.log("animate phase 3");
    const k = Dn("global").duration(P);
    g && k.on("end", g), Jo(r), qt(r()), Fe(pt());
  }
  function z() {
    it = !1;
  }
  let it = !1;
  function dt() {
    if (it) {
      console.log("buttons locked out");
      return;
    }
    it = !0, X();
  }
  function X() {
    const g = r() < n().results.length - 1 ? X : z;
    ft(() => {
      St(() => {
        A(g);
      });
    });
  }
  function $t() {
    if (it) {
      console.log("buttons locked out");
      return;
    }
    if (r() >= n().results.length) {
      it = !1;
      return;
    }
    it = !0, ft(() => {
      St(() => {
        A(z);
      });
    });
  }
  function ht() {
    if (r() >= n().results.length) {
      mi(), console.log("Finished at round ", r());
      return;
    }
    M(C, (v(C) + 1) % 3), it = !0, v(C) === 1 ? ft(z) : v(C) === 2 ? St(z) : v(C) === 0 ? A(z) : (it = !1, console.warn("displayPhase out of range at ", v(C)));
  }
  function qt(g) {
    J = j(g), K = Ea(m, J, 0, pt(), !0);
  }
  function we(g) {
    if (it) {
      console.log("buttons locked out");
      return;
    }
    r(g), _t();
  }
  function Fe(g, k) {
    Sr().sort(null).value((L) => L.value);
    const S = bt(v(O)).select("#" + w), Y = le().outerRadius(g).innerRadius(g - 1), D = S.selectAll(".slice");
    let B = D.size();
    function H() {
      B--, B === 0 && Aa();
    }
    D.select("path").transition("global").duration(T).attr("d", (L) => Y(L)).on("end", (L) => H());
  }
  function Le() {
    const g = ma(K);
    rt = yi(w, g, p, _, pt(), Lt(), !1, !0);
  }
  function ae() {
    const g = wa(rt, K);
    rt = wi(
      w,
      g,
      /* previousDonutInfoGlobal, */
      pt(),
      Lt(),
      !1
    );
  }
  function ke(g) {
    const k = g.data.label;
    return Ne[k.split("#")[0]];
  }
  function _a() {
    const g = {}, k = n().results[r() - 1].tallyResults;
    for (let S = 0; S < k.length; S++) {
      let Y = k[S].eliminated;
      if (Y === void 0 && (Y = k[S].elected), Y === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const D = k[S].transfers;
      if (D === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [B, H] of Object.entries(D))
        g[B] === void 0 ? g[B] = Number(H) : g[B] += Number(H);
    }
    return g;
  }
  function ma(g) {
    const k = [], S = ot, Y = n().results[r() - 1].tallyResults;
    for (let D = 0; D < Y.length; D++) {
      let B = Y[D].eliminated;
      if (B === void 0 && (B = Y[D].elected), B === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const H = Y[D].transfers;
      if (H === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let L = g.find((V) => V.data.label == B + y);
      L === void 0 && (L = g.find((V) => V.data.label == B));
      let G = 0;
      if (L) G = L.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [V, Z] of Object.entries(H)) {
        let vt;
        const Jt = g.find((gt) => gt.data.label == V);
        if (Jt)
          vt = structuredClone(Jt);
        else if (V == "exhausted")
          vt = {
            data: { label: V, value: Number(Z) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (V == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", Z);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", V);
          continue;
        }
        const I = Number(Z) / S * 2 * Math.PI;
        vt.startAngle = G, G = vt.endAngle = G + I, vt.index = D, vt.data.label = `${vt.data.label}#${D}`, k.push(vt);
      }
    }
    return k;
  }
  function ya(g, k, S) {
    const Y = {};
    for (let [D, B] of Object.entries(g)) {
      const H = S.find((V) => D == V.data.label);
      if (H === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", D);
        continue;
      }
      const L = (H.startAngle + H.endAngle) / 2, G = g[H.data.label] / k * 2 * Math.PI;
      Y[H.data.label] = L - G / 2;
    }
    return Y;
  }
  function wa(g, k) {
    const S = [], Y = ot, D = _a(), B = ya(D, Y, k);
    for (let [H, L] of g.entries()) {
      const G = structuredClone(L), V = L.endAngle - L.startAngle, Z = k.find((vt) => L.data.label.indexOf(vt.data.label) === 0);
      if (Z) {
        const vt = Z.data.label;
        G.startAngle = B[vt], B[vt] += V, G.endAngle = G.startAngle + V;
      } else if (L.data.label.indexOf("exhausted") === 0)
        G.startAngle = L.startAngle, G.endAngle = L.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", L.data.label);
        continue;
      }
      G.index = H, S.push(G);
    }
    return S;
  }
  function _i(g, k, S, Y, D) {
    const H = bt(v(O)).append("g").attr("id", $).attr("transform", `translate(${k}, ${S})`), L = le().innerRadius(Y * E).outerRadius(Y * E);
    H.selectAll("text").data(g).enter().each(function(G) {
      G.endAngle - G.startAngle < b || G.data.label.includes(y) || bt(this).append("g").attr("id", (V) => V.data.label).classed("eliminated", (V) => D.includes(V.data.label.split("#")[0]) || V.data.label.includes(y)).each(function(V, Z) {
        V.data.label === "exhausted" && bt(this).on("mouseenter", (vt, Jt) => Ra(vt)).on("mouseleave", (vt, Jt) => Na());
      }).append("text").attr("transform", (V) => `translate(${L.centroid(V)})`).attr("text-anchor", (V) => xr(V.startAngle, V.endAngle)).text((V) => V.data.label === "exhausted" ? Kr : V.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((V) => q(V.data.label, r()) + " (" + N(V.data.label, r()) + ")");
    });
  }
  function xa(g, k, S) {
    const D = bt(v(O)).select("#" + $), B = D.selectAll("tspan"), H = D.selectAll("g").data(g, (Z) => Z.data.label).classed("eliminated", (Z) => S.includes(Z.data.label.split("#")[0]) || Z.data.label.includes(y)), L = le().innerRadius(k * E).outerRadius(k * E + 1);
    B.transition("global").duration(T).attr("transform", (Z) => `translate(${L.centroid(Z)})`).attr("text-anchor", (Z) => xr(Z.startAngle, Z.endAngle)), H.select("text").transition("global").duration(T).attr("transform", (Z) => `translate(${L.centroid(Z)})`).attr("text-anchor", (Z) => xr(Z.startAngle, Z.endAngle)).on("end", (Z) => V());
    let G = H.size();
    function V(Z) {
      G--, G === 0 && (D.remove(), _i(g, p, _, k, S));
    }
  }
  function ba(g, k, S, Y, D, B, H = !0, L = !1) {
    const V = Sr().sort(null).value((Z) => Z.value)(k);
    return yi(g, V, S, Y, D, B, H, L), V;
  }
  function mi() {
    bt(v(O)).select("#" + m).selectAll(".elected").style("stroke", "darkblue").style("stroke-width", "2px");
  }
  function yi(g, k, S, Y, D, B, H, L) {
    const G = sr(n(), r()), V = ar(n(), r()), Jt = bt(v(O)).attr("width", "100%").attr("height", c).attr("viewBox", `0 0 ${h} ${c}`).attr("preserveAspectRatio", "xMidYMid meet").append("g").attr("id", g).attr("transform", `translate(${S}, ${Y})`).selectAll(".slice").data(k).enter().append("g").attr("class", "slice").classed("eliminated", (I) => G.includes(I.data.label.split("#")[0]) || I.data.label.includes(y)).classed("elected", (I) => V.includes(I.data.label.split("#")[0]) && !I.data.label.includes(y)).attr("id", (I) => I.data.label).on("mouseenter", (I, gt) => $r(I, gt)).on("mouseleave", (I, gt) => Ar(I, gt)), Ze = le().outerRadius(B).innerRadius(D);
    if (L) {
      const I = le().outerRadius(D + 1).innerRadius(D);
      Jt.append("path").attr("d", I).transition("global").duration(T).attr("d", (gt) => Ze(gt)).attr("fill", (gt) => ke(gt)).on("end", (gt) => br());
    } else
      Jt.append("path").attr("d", (I) => Ze(I)).attr("fill", (I) => ke(I)), br();
    return H && _i(k, S, Y, B, G), k;
  }
  function $a() {
    const S = bt(v(O)).select("#" + $).selectAll(".eliminated");
    S.size() > 0 && S.classed("finished", !0);
  }
  function Aa() {
    const S = bt(v(O)).select("#" + $).selectAll(".finished");
    S.size() > 0 && S.remove();
  }
  function ka(g, k) {
    const D = bt(v(O)).select("#" + m).selectAll(".eliminated"), B = le().innerRadius(g), H = le().outerRadius(k);
    D.classed("finished", !0).select("path").transition("global").duration(T).attrTween("d", function(L) {
      const G = ze(k, g);
      return function(V) {
        return H.innerRadius(G(V)), H(L);
      };
    }).attr("fill", (L) => `url(#${L.data.label.split("#")[0].replaceAll(" ", "-")})`), D.clone(!0).classed("finished", !0).select("path").transition("global").duration(T).attrTween("d", function(L) {
      const G = ze(k, g);
      return function(V) {
        return B.outerRadius(G(V)), B(L);
      };
    }).attr("fill", (L) => ke(L));
  }
  function xr(g, k) {
    const S = (g + k) / 2;
    return S > Math.PI * 11 / 6 || S < Math.PI * 1 / 6 || S > Math.PI * 5 / 6 && S < Math.PI * 7 / 6 ? "middle" : S < Math.PI ? "start" : "end";
  }
  function br() {
    bt(v(O)).select("#" + $).raise().append("g").remove();
  }
  function Ea(g, k, S, Y, D) {
    const H = Sr().sort(null).value((L) => L.value)(k);
    return wi(
      g,
      H,
      /* previousPieInfo, */
      S,
      Y,
      D
    ), H;
  }
  function wi(g, k, S, Y, D) {
    const B = sr(n(), r()), H = ar(n(), r()), L = le().outerRadius(Y).innerRadius(S).startAngle((I) => I.startAngle).endAngle((I) => I.endAngle), G = le().outerRadius(Y).innerRadius(S), Z = bt(v(O)).select("#" + g);
    Z.selectAll(".slice").attr("prevStart", (I) => I.startAngle).attr("prevEnd", (I) => I.endAngle);
    const vt = Z.selectAll(".slice").data(k, (I) => I.data.label);
    vt.enter().append("g").attr("class", "slice").attr("id", (I) => I.data.label).classed("eliminated", !0).on("mouseenter", (I, gt) => $r(I, gt)).on("mouseleave", (I, gt) => Ar(I, gt)).append("path").attr("d", (I) => G(I)).attr("fill", (I) => ke(I)), vt.classed("eliminated", (I) => B.includes(I.data.label.split("#")[0])).classed("elected", (I) => H.includes(I.data.label.split("#")[0])).on("mouseenter", (I, gt) => $r(I, gt)).on("mouseleave", (I, gt) => Ar(I, gt));
    let Jt = vt.size();
    function Ze() {
      Jt--, Jt <= 0 && (br(), Z.selectAll(".finished").remove());
    }
    return vt.select("path").transition("global").duration(T).attrTween("d", function(I) {
      const gt = Number(bt(this.parentNode).attr("prevStart")), Ta = Number(bt(this.parentNode).attr("prevEnd")), Sa = ze(gt, I.startAngle), Ca = ze(Ta, I.endAngle);
      return (bi) => (L.startAngle(Sa(bi)).endAngle(Ca(bi)), L(I));
    }).on("end", Ze), D && xa(k, Y, B), k;
  }
  function $r(g, k) {
    s(k.data.label.split("#")[0]), i("enter"), a(g.clientY);
  }
  function Ar(g, k) {
    s(k.data.label.split("#")[0]), i("leave");
  }
  function Ra(g, k) {
    i("show-exhausted"), a(g.clientY);
  }
  function Na(g, k) {
    i("hide-exhausted");
  }
  var xi = Fc();
  return Kn(xi, (g) => M(O, g), () => v(O)), Nt(t, xi), yn({
    get jsonData() {
      return n();
    },
    set jsonData(g) {
      n(g), mt();
    },
    get round() {
      return r();
    },
    set round(g) {
      r(g), mt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(g) {
      i(g), mt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(g) {
      s(g), mt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(g) {
      a(g), mt();
    },
    get animateOneRound() {
      return o();
    },
    set animateOneRound(g) {
      o(g), mt();
    },
    get animateOnePhase() {
      return f();
    },
    set animateOnePhase(g) {
      f(g), mt();
    },
    get runFullAnimation() {
      return u();
    },
    set runFullAnimation(g) {
      u(g), mt();
    },
    get setRound() {
      return l();
    },
    set setRound(g) {
      l(g), mt();
    }
  });
}
_r(
  va,
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
var qc = (t, e) => e(-1), Vc = (t, e, n) => e(v(n)), Hc = (t, e, n) => e(v(n)), zc = (t, e, n) => e(t, v(n)), Bc = /* @__PURE__ */ Bt('<button type="button" role="tab" tabindex="0"> </button>'), Yc = (t, e) => e(999), Uc = /* @__PURE__ */ Bt('<div class="outer-wrapper svelte-1vvdx9e"><div class="centered-container svelte-1vvdx9e"><button type="button" class="nav-button prev-button svelte-1vvdx9e" aria-label="Previous round">&#8249;</button> <span class="round-labels-container svelte-1vvdx9e" role="tablist" aria-label="Round selector"></span> <button type="button" class="nav-button next-button svelte-1vvdx9e" aria-label="Next round">&#8250;</button></div></div>');
const Xc = {
  hash: "svelte-1vvdx9e",
  code: `.nav-button.svelte-1vvdx9e {display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;margin:0 5px;background-color:#f0f0f0;border:1px solid #ccc;border-radius:50%;cursor:pointer;font-size:1.2rem;font-weight:bolder;line-height:1;}.nav-button.svelte-1vvdx9e:disabled {opacity:0.5;cursor:not-allowed;}.nav-button.svelte-1vvdx9e:hover:not(:disabled) {background-color:#fff2cc; /* Match the hover color */}

/* doesn't appear to make any difference */.centered-container.svelte-1vvdx9e {display:inline-block;margin:0 auto;text-align:center;max-width:100%;overflow-x:auto;}

/* doesn't appear to make any difference */.round-labels-container.svelte-1vvdx9e {display:inline-flex;border:1px solid #ccc;border-radius:5px;background-color:#f9f9f9;overflow:hidden;max-width:calc(100% - 100px);overflow-x:auto;padding:2px;}.round-label.svelte-1vvdx9e {font-weight:normal;display:inline-block;padding:5px 8px;border-right:none;cursor:pointer;background-color:#f9f9f9;white-space:nowrap;min-width:30px;border:none;border-radius:5px;margin:0 1px;}.not-last-round.svelte-1vvdx9e {border-right:1px solid #ddd;}.current-round.svelte-1vvdx9e {font-weight:bold;color:white;background-color:#80b3ff; /* Paler blue */}.hovered-round.svelte-1vvdx9e {font-weight:bold;color:#0066cc;background-color:#fff2cc; /* Paler yellow */}.many-rounds.svelte-1vvdx9e {min-width:20px;}.outer-wrapper.svelte-1vvdx9e {width:100%;text-align:center;display:block;margin:0 auto;}

  /* Focus style that doesn't add borders */.round-label.svelte-1vvdx9e:focus {outline:none;}.round-label.svelte-1vvdx9e:focus-visible {outline:2px solid #0066cc;outline-offset:-2px;position:relative;z-index:1;}`
};
function pa(t, e) {
  mn(e, !0), gr(t, Xc);
  let n = wt(e, "rounds", 7, 1), r = wt(e, "currentRound", 15, 1), i = wt(e, "labelPrefix", 7, "Round "), s = wt(e, "onRoundChanged", 7, null), a = st(null), o = st(0), f;
  function u(b) {
    b !== r() && (r(b), s() && s()(r()));
  }
  function l() {
    r() > 1 && u(r() - 1);
  }
  function h() {
    r() < n() && u(r() + 1);
  }
  function c(b) {
    M(a, F(b));
  }
  function d() {
    M(a, null);
  }
  function p(b, T) {
    if (console.log("Keyboard event:", b.key, "on round:", T), (b.key === "Enter" || b.key === " ") && (b.preventDefault(), T !== void 0 ? (console.log("Activating round:", T), u(T)) : b.currentTarget instanceof HTMLElement && (b.currentTarget.classList.contains("prev-button") && r() > 1 ? (console.log("Activating previous button"), l()) : b.currentTarget.classList.contains("next-button") && r() < n() && (console.log("Activating next button"), h()))), T !== void 0 && (b.key === "ArrowLeft" || b.key === "ArrowRight")) {
      b.preventDefault();
      const P = b.key === "ArrowLeft" ? Math.max(1, T - 1) : Math.min(n(), T + 1);
      console.log("Arrow key used, moving focus to round:", P);
      const rt = Array.from(f.querySelectorAll(".round-label"))[P - 1];
      rt && rt.focus();
    }
  }
  function _(b) {
    return n() <= 10 ? `${i()}${b}` : n() <= 20 ? `R${b}` : `${b}`;
  }
  function m() {
    f && M(o, F(f.offsetWidth));
  }
  ui(() => {
    m(), window.addEventListener("resize", m);
    const b = (T) => {
      console.log("Global keydown in component:", T.key);
    };
    return f.addEventListener("keydown", b), () => {
      window.removeEventListener("resize", m), f && f.removeEventListener("keydown", b);
    };
  });
  var w = Uc(), $ = lt(w), y = lt($);
  y.__mouseover = [qc, c], y.__mouseout = d, y.__click = l, y.__keydown = p;
  var x = kt(y, 2);
  Me(
    x,
    21,
    () => [
      ...Array.from({ length: n() }, (b, T) => T + 1)
    ],
    Ce,
    (b, T) => {
      var P = Bc();
      let K;
      P.__mouseover = [Vc, c, T], P.__mouseout = d, P.__click = [Hc, u, T], P.__keydown = [zc, p, T];
      var rt = lt(P, !0);
      nt(P), Qt(
        (J) => {
          K = en(P, 1, "round-label svelte-1vvdx9e", null, K, {
            "current-round": v(T) === r(),
            "hovered-round": v(T) === v(a),
            "not-last-round": v(T) < n(),
            "not-first-round": v(T) > 1,
            "many-rounds": n() > 20
          }), Wn(P, "aria-selected", v(T) === r()), Wn(P, "aria-label", J), be(rt, J);
        },
        [() => _(v(T))]
      ), qe("focus", P, () => {
        console.log("Focus on round:", v(T)), c(v(T));
      }), qe("blur", P, d), Nt(b, P);
    }
  ), nt(x);
  var E = kt(x, 2);
  return E.__mouseover = [Yc, c], E.__mouseout = d, E.__click = h, E.__keydown = p, nt($), nt(w), Kn(w, (b) => f = b, () => f), Qt(() => {
    y.disabled = r() === 1, E.disabled = r() === n();
  }), qe("focus", y, () => c(-1)), qe("blur", y, d), qe("focus", E, () => c(999)), qe("blur", E, d), Nt(t, w), yn({
    get rounds() {
      return n();
    },
    set rounds(b = 1) {
      n(b), mt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(b = 1) {
      r(b), mt();
    },
    get labelPrefix() {
      return i();
    },
    set labelPrefix(b = "Round ") {
      i(b), mt();
    },
    get onRoundChanged() {
      return s();
    },
    set onRoundChanged(b = null) {
      s(b), mt();
    }
  });
}
Os(["mouseover", "mouseout", "click", "keydown"]);
_r(
  pa,
  {
    rounds: {},
    currentRound: {},
    labelPrefix: {},
    onRoundChanged: {}
  },
  [],
  [],
  !0
);
const Gc = (t) => t;
function ga(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Wc(t, { delay: e = 0, duration: n = 400, easing: r = Gc } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (s) => `opacity: ${s * i}`
  };
}
function Kc(t, { delay: e = 0, duration: n = 400, easing: r = ga, axis: i = "y" } = {}) {
  const s = getComputedStyle(t), a = +s.opacity, o = i === "y" ? "height" : "width", f = parseFloat(s[o]), u = i === "y" ? ["top", "bottom"] : ["left", "right"], l = u.map(
    (w) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${w[0].toUpperCase()}${w.slice(1)}`
    )
  ), h = parseFloat(s[`padding${l[0]}`]), c = parseFloat(s[`padding${l[1]}`]), d = parseFloat(s[`margin${l[0]}`]), p = parseFloat(s[`margin${l[1]}`]), _ = parseFloat(
    s[`border${l[0]}Width`]
  ), m = parseFloat(
    s[`border${l[1]}Width`]
  );
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * a};${o}: ${w * f}px;padding-${u[0]}: ${w * h}px;padding-${u[1]}: ${w * c}px;margin-${u[0]}: ${w * d}px;margin-${u[1]}: ${w * p}px;border-${u[0]}-width: ${w * _}px;border-${u[1]}-width: ${w * m}px;min-${o}: 0`
  };
}
function ts(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Jc({ fallback: t, ...e }) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function i(a, o, f) {
    const {
      delay: u = 0,
      duration: l = (
        /** @param {number} d */
        (b) => Math.sqrt(b) * 30
      ),
      easing: h = ga
    } = ts(ts({}, e), f), c = a.getBoundingClientRect(), d = o.getBoundingClientRect(), p = c.left - d.left, _ = c.top - d.top, m = c.width / d.width, w = c.height / d.height, $ = Math.sqrt(p * p + _ * _), y = getComputedStyle(o), x = y.transform === "none" ? "" : y.transform, E = +y.opacity;
    return {
      delay: u,
      duration: typeof l == "function" ? l($) : l,
      easing: h,
      css: (b, T) => `
			   opacity: ${b * E};
			   transform-origin: top left;
			   transform: ${x} translate(${T * p}px,${T * _}px) scale(${b + (1 - b) * m}, ${b + (1 - b) * w});
		   `
    };
  }
  function s(a, o, f) {
    return (u, l) => (a.set(l.key, u), () => {
      if (o.has(l.key)) {
        const h = o.get(l.key);
        return o.delete(l.key), i(
          /** @type {Element} */
          h,
          u,
          l
        );
      }
      return a.delete(l.key), t && t(u, l, f);
    });
  }
  return [s(r, n, !1), s(n, r, !0)];
}
function es(t) {
  const e = t - 1;
  return e * e * e + 1;
}
var Zc = /* @__PURE__ */ Bt('<th class="header-cell svelte-d96s0n" scope="col"><div class="diagonal-header svelte-d96s0n"> </div></th>'), jc = /* @__PURE__ */ Bt('<td class="rank-cell svelte-d96s0n"><div></div></td>'), Qc = /* @__PURE__ */ Bt("<tr><td> </td><!></tr>"), td = /* @__PURE__ */ Bt('<div><table class="choice-grid svelte-d96s0n" aria-label="Your ballot visualization"><thead class="svelte-d96s0n"><tr class="svelte-d96s0n"><th scope="col" class="svelte-d96s0n">Candidate</th><!></tr></thead><tbody class="svelte-d96s0n"></tbody></table></div>');
const ed = {
  hash: "svelte-d96s0n",
  code: `.visualization-container.svelte-d96s0n {display:flex;flex-direction:column;align-items:center;padding:0.5rem;font-size:0.9rem;}.choice-grid.svelte-d96s0n {border-collapse:separate;border-spacing:0;text-align:center;}.candidate-row.svelte-d96s0n {height:30px; /* Reduced row height */transition:background-color 0.3s ease;}.candidate-row.collapsing.svelte-d96s0n {background-color:rgba(255, 182, 193, 0.2); /* Light pink background */}.candidate-name.svelte-d96s0n {text-align:left;padding-right:8px; /* Reduced padding */max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:0.85rem;}.header-cell.svelte-d96s0n {height:65px; /* Reduced header height */position:relative;padding:0;width:26px; /* Narrower column width */}.diagonal-header.svelte-d96s0n {position:absolute;transform-origin:bottom left;transform:rotate(-45deg);bottom:15px;left:8px; /* Adjusted position */font-size:0.75rem;font-weight:bold;white-space:nowrap;color:#444;}.bubble.svelte-d96s0n {width:1rem; /* Smaller bubble size */height:1rem; /* Smaller bubble size */border-radius:50%;border:1px solid #aaa;background-color:#fff;margin:0 auto;transition:background-color 0.5s ease; /* Smooth transition for bubble color change */}.bubble.selected.svelte-d96s0n {background-color:#00b4d8;border-color:#0077b6;}.bubble.previously-ranked.svelte-d96s0n {background-color:#b3d9ff; /* Darker light blue for previously ranked positions */border-color:#6699cc;}.bubble.changed.svelte-d96s0n {
    animation: svelte-d96s0n-highlight-change 2s ease-in-out;}.choice-grid.svelte-d96s0n thead:where(.svelte-d96s0n) th:where(.svelte-d96s0n):first-child,
  .choice-grid.svelte-d96s0n tbody:where(.svelte-d96s0n) td:where(.svelte-d96s0n):first-child {position:sticky;left:0;background-color:white;z-index:1;}.choice-grid.svelte-d96s0n tbody:where(.svelte-d96s0n) td:first-child.eliminated-bg:where(.svelte-d96s0n) {background-color:rgba(255, 182, 193, 0.2); /* Light pink background */}
  
  /* Animation styles */.strikethrough.svelte-d96s0n {position:relative;}.strikethrough.svelte-d96s0n::after {content:'';position:absolute;left:0;top:50%;right:0;width:100%;height:1px;background-color:#888;
    animation: svelte-d96s0n-strikethrough 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;transform-origin:left;z-index:2;}
  
  @keyframes svelte-d96s0n-strikethrough {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
  
  @keyframes svelte-d96s0n-highlight-change {
    0%, 100% { 
      box-shadow: none; 
    }
    30%, 70% { 
      box-shadow: 0 0 12px 4px gold; 
    }
  }

  /* Make cells more compact */.rank-cell.svelte-d96s0n {padding:0 2px; /* Reduced cell padding */position:relative;}
  
  /* Add style for active ranking updates */.updating-ranks.svelte-d96s0n .bubble.changed:where(.svelte-d96s0n) {box-shadow:0 0 12px 4px gold;}`
};
function nd(t, e) {
  mn(e, !0), gr(t, ed);
  let n = wt(e, "candidates", 23, () => []), r = wt(e, "eliminatedCandidates", 23, () => []), i = wt(e, "maxRanks", 7, 3), s = wt(e, "currentRound", 7, 1), a = st(F([])), o = st(F([])), f = st(F([])), u = st(F([])), l = st(F([])), h = st(F([])), c = st(F([])), d = st(F({})), p = st(!1), _ = st(!1), m = st(1);
  const [w, $] = Jc({
    duration: 1e3,
    fallback(R, q) {
      return {
        duration: 1e3,
        easing: es,
        css: (N) => `opacity: ${N}`
      };
    }
  });
  function y(R, q) {
    if (q > R)
      throw new Error("k must be less than or equal to n");
    const N = new Array(R).fill(0), ut = Math.min(q, 2), U = Math.min(q, Math.floor(Math.random() * (q - ut + 1)) + ut), j = Array.from({ length: U }, (W, ft) => ft + 1), ct = Array.from({ length: R }, (W, ft) => ft).sort(() => Math.random() - 0.5).slice(0, U);
    for (let W = 0; W < U; W++)
      N[ct[W]] = j[W];
    return N;
  }
  function x(R, q) {
    return JSON.stringify(R) !== JSON.stringify(q) ? q : R;
  }
  function E() {
    M(h, F([...v(a)])), M(d, F({})), M(f, F(new Array(n().length).fill(!1))), M(u, F(new Array(n().length).fill(!1))), M(l, F(new Array(n().length).fill(!1)));
  }
  function b(R, q = !0) {
    if (R.length === 0) return;
    M(c, F([...v(h)]));
    const N = [...v(h)], ut = R.filter((U) => N[U] > 0).map((U) => ({ index: U, rank: N[U] }));
    ut.sort((U, j) => j.rank - U.rank);
    for (const { index: U, rank: j } of ut) {
      const ct = `candidate-${U}`;
      v(d)[ct] || (v(d)[ct] = []), N[U] > 0 && v(d)[ct].push(N[U]), N[U] = 0;
      for (let W = 0; W < N.length; W++)
        if (N[W] > j) {
          const ft = `candidate-${W}`;
          v(d)[ft] || (v(d)[ft] = []), N[W] > 0 && v(d)[ft].push(N[W]), N[W] -= 1;
        }
    }
    if (q) {
      M(_, !0);
      const U = [...v(u)];
      for (const j of R)
        U[j] = !0;
      M(u, F(x(v(u), U))), setTimeout(
        () => {
          M(h, F(x(v(h), N))), setTimeout(
            () => {
              const j = [...v(l)];
              for (const ct of R)
                j[ct] = !0;
              M(l, F(x(v(l), j))), setTimeout(
                () => {
                  M(_, !1);
                  const ct = [...v(f)], W = [...v(l)];
                  for (const ft of R)
                    ct[ft] = !0, W[ft] = !1;
                  M(f, F(x(v(f), ct))), M(l, F(x(v(l), W)));
                },
                600
              );
            },
            800
          );
        },
        800
      );
    } else {
      M(h, F(x(v(h), N)));
      const U = [...v(f)];
      for (const j of R)
        U[j] = !0;
      M(f, F(x(v(f), U)));
    }
  }
  function T(R) {
    return v(c)[R] !== v(h)[R];
  }
  function P(R, q) {
    const N = `candidate-${R}`;
    return v(d)[N] && v(d)[N].includes(q);
  }
  ui(() => {
    if (n().length > 0 && !v(p)) {
      const R = y(n().length, i());
      M(a, F([...R])), M(h, F(R)), M(c, F([...R])), M(o, F(new Array(n().length).fill(!1))), M(f, F(new Array(n().length).fill(!1))), M(u, F(new Array(n().length).fill(!1))), M(l, F(new Array(n().length).fill(!1)));
      const q = {};
      R.forEach((N, ut) => {
        N > 0 && (q[`candidate-${ut}`] = []);
      }), M(d, F(q)), M(m, s()), M(p, !0);
    }
  }), Un(() => {
    if (!v(p)) return;
    const R = Math.abs(s() - v(m)) > 1, q = s() < v(m);
    if (R || q) {
      E();
      const N = r().map((ut, U) => ut ? U : -1).filter((ut) => ut !== -1);
      b(N, !1);
    }
    M(m, s());
  }), Un(() => {
    if (!v(p) || !r().length || !v(o).length || Math.abs(s() - v(m)) > 1) return;
    const R = [];
    for (let q = 0; q < r().length; q++)
      r()[q] && !v(o)[q] && R.push(q);
    R.length > 0 && b(R, !0), M(o, F(x(v(o), [...r()])));
  });
  function K(R) {
    if (R === 0) return "";
    const q = R % 10, N = R % 100;
    return q === 1 && N !== 11 ? R + "st" : q === 2 && N !== 12 ? R + "nd" : q === 3 && N !== 13 ? R + "rd" : R + "th";
  }
  function rt() {
    return Array.from({ length: i() }, (R, q) => K(q + 1));
  }
  function J(R, q) {
    return `bubble-${R}-${q}`;
  }
  function ot(R, q) {
    const N = `candidate-${R}`;
    return v(d)[N] && v(d)[N].includes(q) ? `Previously ranked as ${K(q)} choice` : "";
  }
  var C = td();
  let O;
  var xt = lt(C), _t = lt(xt), yt = lt(_t), pt = kt(lt(yt));
  Me(pt, 17, rt, Ce, (R, q) => {
    var N = Zc(), ut = lt(N), U = lt(ut, !0);
    nt(ut), nt(N), Qt(() => be(U, v(q))), Nt(R, N);
  }), nt(yt), nt(_t);
  var Lt = kt(_t);
  return Me(Lt, 21, n, Ce, (R, q, N) => {
    var ut = Fo(), U = He(ut);
    {
      var j = (ct) => {
        var W = Qc();
        let ft;
        var St = lt(W);
        let A;
        var z = lt(St, !0);
        nt(St);
        var it = kt(St);
        Me(it, 17, () => Array.from({ length: i() }, (dt, X) => X + 1), Ce, (dt, X) => {
          var $t = jc(), ht = lt($t);
          let qt;
          nt($t), Qt(
            (we, Fe, Le, ae) => {
              qt = en(ht, 1, "bubble svelte-d96s0n", null, qt, {
                selected: v(h)[N] === v(X),
                "previously-ranked": we,
                changed: Fe
              }), Wn(ht, "style", `background-color:${Le ?? ""}`), Wn(ht, "title", ae);
            },
            [
              () => P(N, v(X)),
              () => v(_) && T(N) && (v(c)[N] === v(X) && v(h)[N] !== v(X) || v(c)[N] !== v(X) && v(h)[N] === v(X)),
              () => v(h)[N] === v(X) ? "#00b4d8" : P(N, v(X)) ? "#b3d9ff" : "",
              () => ot(N, v(X))
            ]
          ), $n(1, ht, () => $, () => ({ key: J(N, v(X)) })), $n(2, ht, () => w, () => ({ key: J(N, v(X)) })), Nt(dt, $t);
        }), nt(W), Qt(() => {
          ft = en(W, 1, "candidate-row svelte-d96s0n", null, ft, {
            strikethrough: v(u)[N] && !v(l)[N],
            collapsing: v(l)[N]
          }), A = en(St, 1, "candidate-name svelte-d96s0n", null, A, {
            eliminated: r()[N],
            "eliminated-bg": v(l)[N]
          }), be(z, v(q));
        }), $n(1, W, () => Wc, () => ({ duration: 300 })), $n(2, W, () => Kc, () => ({ duration: 600, easing: es })), Nt(ct, W);
      };
      Lr(U, (ct) => {
        v(f)[N] || ct(j);
      });
    }
    Nt(R, ut);
  }), nt(Lt), nt(xt), nt(C), Qt(() => O = en(C, 1, "visualization-container svelte-d96s0n", null, O, {
    "updating-ranks": v(_)
  })), Nt(t, C), yn({
    get candidates() {
      return n();
    },
    set candidates(R = []) {
      n(R), mt();
    },
    get eliminatedCandidates() {
      return r();
    },
    set eliminatedCandidates(R = []) {
      r(R), mt();
    },
    get maxRanks() {
      return i();
    },
    set maxRanks(R = 3) {
      i(R), mt();
    },
    get currentRound() {
      return s();
    },
    set currentRound(R = 1) {
      s(R), mt();
    }
  });
}
_r(
  nd,
  {
    candidates: {},
    eliminatedCandidates: {},
    maxRanks: {},
    currentRound: {}
  },
  [],
  [],
  !0
);
var rd = /* @__PURE__ */ Bt("<span> </span> &nbsp;", 1), id = /* @__PURE__ */ Bt("About to eliminate: <!>", 1), sd = /* @__PURE__ */ Bt("<span> </span> &nbsp;", 1), ad = /* @__PURE__ */ Bt("Elected: <!>", 1), od = /* @__PURE__ */ Bt("<span> </span> <br>", 1), ld = /* @__PURE__ */ Bt('<div class="page-container svelte-9ymq70"><div class="common-header svelte-9ymq70"><h2> </h2> <h3><!> <!></h3></div> <div class="tooltip svelte-9ymq70"><h3 class="svelte-9ymq70"> </h3> <!></div> <div class="tooltip svelte-9ymq70"> <br> these ballots have already been eliminated.</div> <div class="round-selector-container svelte-9ymq70"><!></div> <div class="animation-button-container svelte-9ymq70"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="visualizations-container svelte-9ymq70"><div class="pie-chart-container svelte-9ymq70"><!></div></div></div>');
const ud = {
  hash: "svelte-9ymq70",
  code: `.page-container.svelte-9ymq70 {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-9ymq70 {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-9ymq70 {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:1.3rem;left:50%;transform:translate(-50%);font-weight:bold;opacity:0;}.tooltip.svelte-9ymq70 h3:where(.svelte-9ymq70) {text-align:center;}.round-selector-container.svelte-9ymq70 {width:100%;display:flex;justify-content:center;margin:1rem 0;}.animation-button-container.svelte-9ymq70 {display:flex;justify-content:center;gap:10px;margin-bottom:1rem;}

/*** Use this one when you only want the pie chart and not the bubble grid visualization ***/



/***  Use this one when you want to display both the pie chart and the bubble grid visualiation
.visualizations-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
***/.pie-chart-container.svelte-9ymq70 {width:65%;min-width:800px; /* Larger minimum size */flex-grow:0; /* Don't grow beyond specified width */margin-right:40px; /* Add extra space on right */}


/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-9ymq70 {flex-direction:column;align-items:center;}.pie-chart-container.svelte-9ymq70 {width:90%;margin:0 auto;}
}`
};
function fd(t, e) {
  mn(e, !0), gr(t, ud);
  const n = 0.85;
  let r = wt(e, "electionSummary", 7), i = st(null), s = st(null), a = st(1), o = st(""), f = st(F([])), u = st(""), l = st(""), h = st(0), c = st(null), d = st(null), p = st(null), _ = st(null), m = /* @__PURE__ */ cr(() => w(r()));
  function w(A) {
    if (typeof A == "string") {
      console.log("input was a string");
      try {
        return JSON.parse(A);
      } catch (z) {
        return console.error("Failed to parse JSON string:", z), {};
      }
    }
    return A || {};
  }
  function $(A) {
    console.log("slider wants to move to round ", A), A === v(a) + 1 && v(c) ? v(c)() : v(_) && v(_)(A);
  }
  function y() {
    switch (console.log("mouse event ", v(u), v(l), v(h)), v(u)) {
      case "enter":
        ((A) => (M(f, F(A[0])), M(o, F(A[1]))))(E(v(l))), v(i) && (v(i).style.top = String(v(h) || 20) + "px", v(i).style.opacity = String(n));
        break;
      case "leave":
        v(i) && (v(i).style.opacity = "0"), M(f, F([])), M(o, "");
        break;
      case "show-exhausted":
        v(s) && (v(s).style.top = String(v(h) || 20) + "px", v(s).style.opacity = String(n));
        break;
      case "hide-exhausted":
        v(s) && (v(s).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", v(u));
        break;
    }
  }
  Un(() => y());
  function x(A, z) {
    return A == 1 ? z ? "vote was" : "vote will be" : z ? "votes were" : "votes will be";
  }
  function E(A) {
    const z = [], it = A === "exhausted" ? Kr : A;
    let dt;
    A == "exhausted" ? dt = ir(v(m), 1) : dt = v(m).results[0].tally[A], z.push(`${it} started with ${dt} votes.`);
    for (let X = 1; X <= v(a); X++) {
      X === v(a) && (A == "exhausted" ? dt = ir(v(m), v(a)) : dt = v(m).results[v(a) - 1].tally[A], z.push(`${it} has ${dt} votes at round ${v(a)}.`));
      const $t = v(m).results[X - 1].tallyResults;
      for (let ht = 0; ht < $t.length; ht++) {
        const qt = $t[ht].transfers, we = $t[ht].eliminated, Fe = $t[ht].elected;
        if (we)
          we === A && z.push(`${it} will be eliminated on round ${X}.`);
        else if (A === Fe && (z.push(`${it} was elected on round ${X}.`), qt))
          for (let [ae, ke] of Object.entries(qt))
            z.push(`${ke} ${x(Number(ke), X < v(a))} transferred to ${ae} on round ${X}.`);
        const Le = we || Fe;
        if (Le) {
          const ae = Number(qt[A]);
          ae && z.push(`${ae} ${x(ae, X < v(a))} transferred from ${Le} on round ${X}.`);
        }
      }
    }
    return [z, it];
  }
  function b() {
    let A = 0;
    for (let z = 1; z <= v(m).results.length; z++) {
      const it = v(m).results[z - 1].tallyResults;
      for (let dt = 0; dt < it.length; dt++)
        it[dt].elected && A++;
    }
    return A;
  }
  var T = ld(), P = lt(T), K = lt(P), rt = lt(K);
  nt(K);
  var J = kt(K, 2), ot = lt(J);
  {
    var C = (A) => {
      var z = id(), it = kt(He(z));
      Me(it, 17, () => sr(v(m), v(a)), Ce, (dt, X) => {
        var $t = rd(), ht = He($t), qt = lt(ht, !0);
        nt(ht), xn(), Qt(() => {
          Pi(ht, "color", Ne[v(X)]), be(qt, v(X));
        }), Nt(dt, $t);
      }), Nt(A, z);
    };
    Lr(ot, (A) => {
      sr(v(m), v(a)).length > 0 && A(C);
    });
  }
  var O = kt(ot, 2);
  {
    var xt = (A) => {
      var z = ad(), it = kt(He(z));
      Me(it, 17, () => ar(v(m), v(a)), Ce, (dt, X) => {
        var $t = sd(), ht = He($t), qt = lt(ht, !0);
        nt(ht), xn(), Qt(() => {
          Pi(ht, "color", Ne[v(X)]), be(qt, v(X));
        }), Nt(dt, $t);
      }), Nt(A, z);
    };
    Lr(O, (A) => {
      ar(v(m), v(a)).length > 0 && A(xt);
    });
  }
  nt(J), nt(P);
  var _t = kt(P, 2), yt = lt(_t), pt = lt(yt, !0);
  nt(yt);
  var Lt = kt(yt, 2);
  Me(Lt, 17, () => v(f), Ce, (A, z) => {
    var it = od(), dt = He(it), X = lt(dt, !0);
    nt(dt), xn(2), Qt(() => be(X, v(z))), Nt(A, it);
  }), nt(_t), Kn(_t, (A) => M(i, A), () => v(i));
  var R = kt(_t, 2), q = lt(R);
  q.nodeValue = `"${Kr}" means all the candidates ranked on `, xn(2), nt(R), Kn(R, (A) => M(s, A), () => v(s));
  var N = kt(R, 2), ut = lt(N);
  pa(ut, {
    get rounds() {
      return v(m).results.length;
    },
    get currentRound() {
      return v(a);
    },
    labelPrefix: "Round ",
    onRoundChanged: $
  }), nt(N);
  var U = kt(N, 2), j = lt(U);
  j.__click = function(...A) {
    var z;
    (z = v(p)) == null || z.apply(this, A);
  };
  var ct = kt(j, 2);
  ct.__click = function(...A) {
    var z;
    (z = v(d)) == null || z.apply(this, A);
  }, nt(U);
  var W = kt(U, 2), ft = lt(W), St = lt(ft);
  return va(St, {
    get jsonData() {
      return v(m);
    },
    get round() {
      return v(a);
    },
    set round(A) {
      M(a, F(A));
    },
    get mouseEventType() {
      return v(u);
    },
    set mouseEventType(A) {
      M(u, F(A));
    },
    get mouseData() {
      return v(l);
    },
    set mouseData(A) {
      M(l, F(A));
    },
    get mouseY() {
      return v(h);
    },
    set mouseY(A) {
      M(h, F(A));
    },
    get animateOneRound() {
      return v(c);
    },
    set animateOneRound(A) {
      M(c, F(A));
    },
    get animateOnePhase() {
      return v(d);
    },
    set animateOnePhase(A) {
      M(d, F(A));
    },
    get runFullAnimation() {
      return v(p);
    },
    set runFullAnimation(A) {
      M(p, F(A));
    },
    get setRound() {
      return v(_);
    },
    set setRound(A) {
      M(_, F(A));
    }
  }), nt(ft), nt(W), nt(T), Qt(
    (A) => {
      be(rt, `${v(m).config.contest ?? ""}, ${A ?? ""} to be elected, Round ${v(a) ?? ""}.`), be(pt, v(o));
    },
    [b]
  ), Nt(t, T), yn({
    get electionSummary() {
      return r();
    },
    set electionSummary(A) {
      r(A), mt();
    }
  });
}
Os(["click"]);
customElements.define("pie-chart", _r(fd, { electionSummary: {} }, [], [], !0));
