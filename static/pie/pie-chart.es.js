var ca = Object.defineProperty;
var oi = (t) => {
  throw TypeError(t);
};
var ha = (t, e, n) => e in t ? ca(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ft = (t, e, n) => ha(t, typeof e != "symbol" ? e + "" : e, n), ui = (t, e, n) => e.has(t) || oi("Cannot " + n);
var ht = (t, e, n) => (ui(t, e, "read from private field"), n ? n.call(t) : e.get(t)), fr = (t, e, n) => e.has(t) ? oi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), cr = (t, e, n, r) => (ui(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const da = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(da);
const va = 1, pa = 2, ga = 16, _a = 1, ma = 4, ya = 8, wa = 16, xa = 2, Li = "[", Mr = "[!", Or = "]", tn = {}, dt = Symbol(), fi = !1, Vt = 2, qi = 4, Pr = 8, Dr = 16, ce = 32, Ye = 64, Mn = 128, Mt = 256, On = 512, _t = 1024, he = 2048, ze = 4096, le = 8192, Jn = 16384, ba = 32768, Fr = 65536, $a = 1 << 19, Vi = 1 << 20, en = Symbol("$state"), Bi = Symbol("legacy props");
var Ir = Array.isArray, Aa = Array.prototype.indexOf, Lr = Array.from, Pn = Object.keys, Dn = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, Ra = Object.prototype, Ea = Array.prototype, Ca = Object.getPrototypeOf;
function Hi(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let rn = [], mr = [];
function Yi() {
  var t = rn;
  rn = [], Hi(t);
}
function Na() {
  var t = mr;
  mr = [], Hi(t);
}
function zi(t) {
  rn.length === 0 && queueMicrotask(Yi), rn.push(t);
}
function ci() {
  rn.length > 0 && Yi(), mr.length > 0 && Na();
}
function Ui(t) {
  return t === this.v;
}
function Ta(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function qr(t) {
  return !Ta(t, this.v);
}
function Sa(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ma(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Oa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Da(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function La() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Va = !1;
function St(t, e) {
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
function re(t) {
  return /* @__PURE__ */ Ba(St(t));
}
// @__NO_SIDE_EFFECTS__
function Vr(t, e = !1) {
  const n = St(t);
  return e || (n.equals = qr), n;
}
// @__NO_SIDE_EFFECTS__
function Ba(t) {
  return j !== null && !Lt && j.f & Vt && (Kt === null ? Ua([t]) : Kt.push(t)), t;
}
function W(t, e) {
  return j !== null && !Lt && cs() && j.f & (Vt | Dr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Kt === null || !Kt.includes(t)) && qa(), ji(t, e);
}
function ji(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = es(), Xi(t, he), X !== null && X.f & _t && !(X.f & (ce | Ye)) && (ie === null ? ja([t]) : ie.push(t))), e;
}
function Xi(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f;
      a & he || (oe(s, e), a & (_t | Mt) && (a & Vt ? Xi(
        /** @type {Derived} */
        s,
        ze
      ) : er(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Zn(t) {
  var e = Vt | he, n = j !== null && j.f & Vt ? (
    /** @type {Derived} */
    j
  ) : null;
  return X === null || n !== null && n.f & Mt ? e |= Mt : X.f |= Vi, {
    ctx: gt,
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
function Ha(t) {
  const e = /* @__PURE__ */ Zn(t);
  return e.equals = qr, e;
}
function Gi(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      ue(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ya(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Vt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function za(t) {
  var e, n = X;
  Ve(Ya(t));
  try {
    Gi(t), e = rs(t);
  } finally {
    Ve(n);
  }
  return e;
}
function Ki(t) {
  var e = za(t), n = (ye || t.f & Mt) && t.deps !== null ? ze : _t;
  oe(t, n), t.equals(e) || (t.v = e, t.wv = es());
}
function Br(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let tt = !1;
function ae(t) {
  tt = t;
}
let U;
function Bt(t) {
  if (t === null)
    throw Br(), tn;
  return U = t;
}
function Qn() {
  return Bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ de(U)
  );
}
function Et(t) {
  if (tt) {
    if (/* @__PURE__ */ de(U) !== null)
      throw Br(), tn;
    U = t;
  }
}
function hi(t = 1) {
  if (tt) {
    for (var e = t, n = U; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ de(n);
    U = n;
  }
}
function yr() {
  for (var t = 0, e = U; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Or) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Li || n === Mr) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ de(e)
    );
    e.remove(), e = r;
  }
}
function $t(t, e = null, n) {
  if (typeof t != "object" || t === null || en in t)
    return t;
  const r = Ca(t);
  if (r !== Ra && r !== Ea)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Ir(t), a = St(0);
  s && i.set("length", St(
    /** @type {any[]} */
    t.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Fa();
        var h = i.get(f);
        return h === void 0 ? (h = St(o.value), i.set(f, h)) : W(h, $t(o.value, l)), !0;
      },
      deleteProperty(u, f) {
        var o = i.get(f);
        if (o === void 0)
          f in u && i.set(f, St(dt));
        else {
          if (s && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(f);
            Number.isInteger(c) && c < h.v && W(h, c);
          }
          W(o, dt), di(a);
        }
        return !0;
      },
      get(u, f, o) {
        var p;
        if (f === en)
          return t;
        var h = i.get(f), c = f in u;
        if (h === void 0 && (!c || (p = Re(u, f)) != null && p.writable) && (h = St($t(c ? u[f] : dt, l)), i.set(f, h)), h !== void 0) {
          var d = w(h);
          return d === dt ? void 0 : d;
        }
        return Reflect.get(u, f, o);
      },
      getOwnPropertyDescriptor(u, f) {
        var o = Reflect.getOwnPropertyDescriptor(u, f);
        if (o && "value" in o) {
          var h = i.get(f);
          h && (o.value = w(h));
        } else if (o === void 0) {
          var c = i.get(f), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== dt)
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
        if (f === en)
          return !0;
        var o = i.get(f), h = o !== void 0 && o.v !== dt || Reflect.has(u, f);
        if (o !== void 0 || X !== null && (!h || (d = Re(u, f)) != null && d.writable)) {
          o === void 0 && (o = St(h ? $t(u[f], l) : dt), i.set(f, o));
          var c = w(o);
          if (c === dt)
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
            y !== void 0 ? W(y, dt) : p in u && (y = St(dt), i.set(p + "", y));
          }
        c === void 0 ? (!d || (T = Re(u, f)) != null && T.writable) && (c = St(void 0), W(c, $t(o, l)), i.set(f, c)) : (d = c.v !== dt, W(c, $t(o, l)));
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
        w(a);
        var f = Reflect.ownKeys(u).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== dt;
        });
        for (var [o, h] of i)
          h.v !== dt && !(o in u) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        Ia();
      }
    }
  );
}
function di(t, e = 1) {
  W(t, t.v + e);
}
var vi, Wi, Ji, Zi;
function wr() {
  if (vi === void 0) {
    vi = window, Wi = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Ji = Re(e, "firstChild").get, Zi = Re(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Le(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ce(t) {
  return Ji.call(t);
}
// @__NO_SIDE_EFFECTS__
function de(t) {
  return Zi.call(t);
}
function Ct(t, e) {
  if (!tt)
    return /* @__PURE__ */ Ce(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(U)
  );
  if (n === null)
    n = U.appendChild(Le());
  else if (e && n.nodeType !== 3) {
    var r = Le();
    return n == null || n.before(r), Bt(r), r;
  }
  return Bt(n), n;
}
function Me(t, e) {
  if (!tt) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ce(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ de(n) : n;
  }
  return U;
}
function Nt(t, e = 1, n = !1) {
  let r = tt ? U : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ de(r);
  if (!tt)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = Le();
    return r === null ? i == null || i.after(a) : r.before(a), Bt(a), a;
  }
  return Bt(r), /** @type {TemplateNode} */
  r;
}
function Qi(t) {
  t.textContent = "";
}
let $n = !1, Fn = !1, In = null, An = !1, Hr = !1;
function pi(t) {
  Hr = t;
}
let nn = [];
let j = null, Lt = !1;
function qe(t) {
  j = t;
}
let X = null;
function Ve(t) {
  X = t;
}
let Kt = null;
function Ua(t) {
  Kt = t;
}
let ut = null, bt = 0, ie = null;
function ja(t) {
  ie = t;
}
let ts = 1, Ln = 0, ye = !1;
function es() {
  return ++ts;
}
function fn(t) {
  var h;
  var e = t.f;
  if (e & he)
    return !0;
  if (e & ze) {
    var n = t.deps, r = (e & Mt) !== 0;
    if (n !== null) {
      var i, s, a = (e & On) !== 0, l = r && X !== null && !ye, u = n.length;
      if (a || l) {
        var f = (
          /** @type {Derived} */
          t
        ), o = f.parent;
        for (i = 0; i < u; i++)
          s = n[i], (a || !((h = s == null ? void 0 : s.reactions) != null && h.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        a && (f.f ^= On), l && o !== null && !(o.f & Mt) && (f.f ^= Mt);
      }
      for (i = 0; i < u; i++)
        if (s = n[i], fn(
          /** @type {Derived} */
          s
        ) && Ki(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || X !== null && !ye) && oe(t, _t);
  }
  return !1;
}
function Xa(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & Mn)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Mn;
      }
    n = n.parent;
  }
  throw $n = !1, t;
}
function Ga(t) {
  return (t.f & Jn) === 0 && (t.parent === null || (t.parent.f & Mn) === 0);
}
function tr(t, e, n, r) {
  if ($n) {
    if (n === null && ($n = !1), Ga(e))
      throw t;
    return;
  }
  n !== null && ($n = !0);
  {
    Xa(t, e);
    return;
  }
}
function ns(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Vt ? ns(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? oe(s, he) : s.f & _t && oe(s, ze), er(
        /** @type {Effect} */
        s
      ));
    }
}
function rs(t) {
  var d;
  var e = ut, n = bt, r = ie, i = j, s = ye, a = Kt, l = gt, u = Lt, f = t.f;
  ut = /** @type {null | Value[]} */
  null, bt = 0, ie = null, ye = (f & Mt) !== 0 && (Lt || !An || j === null), j = f & (ce | Ye) ? null : t, Kt = null, gi(t.ctx), Lt = !1, Ln++;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), h = t.deps;
    if (ut !== null) {
      var c;
      if (qn(t, bt), h !== null && bt > 0)
        for (h.length = bt + ut.length, c = 0; c < ut.length; c++)
          h[bt + c] = ut[c];
      else
        t.deps = h = ut;
      if (!ye)
        for (c = bt; c < h.length; c++)
          ((d = h[c]).reactions ?? (d.reactions = [])).push(t);
    } else h !== null && bt < h.length && (qn(t, bt), h.length = bt);
    if (cs() && ie !== null && !Lt && h !== null && !(t.f & (Vt | ze | he)))
      for (c = 0; c < /** @type {Source[]} */
      ie.length; c++)
        ns(
          ie[c],
          /** @type {Effect} */
          t
        );
    return i !== null && Ln++, o;
  } finally {
    ut = e, bt = n, ie = r, j = i, ye = s, Kt = a, gi(l), Lt = u;
  }
}
function Ka(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Aa.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Vt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ut === null || !ut.includes(e)) && (oe(e, ze), e.f & (Mt | On) || (e.f ^= On), Gi(
    /** @type {Derived} **/
    e
  ), qn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function qn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ka(t, n[r]);
}
function Yr(t) {
  var e = t.f;
  if (!(e & Jn)) {
    oe(t, _t);
    var n = X, r = gt, i = An;
    X = t, An = !0;
    try {
      e & Dr ? il(t) : ls(t), as(t);
      var s = rs(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = ts;
      var a = t.deps, l;
      fi && Va && t.f & he;
    } catch (u) {
      tr(u, t, n, r || t.ctx);
    } finally {
      An = i, X = n;
    }
  }
}
function Wa() {
  try {
    Oa();
  } catch (t) {
    if (In !== null)
      tr(t, In, null);
    else
      throw t;
  }
}
function is() {
  try {
    for (var t = 0; nn.length > 0; ) {
      t++ > 1e3 && Wa();
      var e = nn, n = e.length;
      nn = [];
      for (var r = 0; r < n; r++) {
        var i = e[r];
        i.f & _t || (i.f ^= _t);
        var s = Za(i);
        Ja(s);
      }
    }
  } finally {
    Fn = !1, In = null;
  }
}
function Ja(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Jn | le)))
        try {
          fn(r) && (Yr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? os(r) : r.fn = null));
        } catch (i) {
          tr(i, r, null, r.ctx);
        }
    }
}
function er(t) {
  Fn || (Fn = !0, queueMicrotask(is));
  for (var e = In = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (Ye | ce)) {
      if (!(n & _t)) return;
      e.f ^= _t;
    }
  }
  nn.push(e);
}
function Za(t) {
  for (var e = [], n = t.first; n !== null; ) {
    var r = n.f, i = (r & ce) !== 0, s = i && (r & _t) !== 0;
    if (!s && !(r & le)) {
      if (r & qi)
        e.push(n);
      else if (i)
        n.f ^= _t;
      else {
        var a = j;
        try {
          j = n, fn(n) && Yr(n);
        } catch (f) {
          tr(f, n, null, n.ctx);
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
function kt(t) {
  var e;
  for (ci(); nn.length > 0; )
    Fn = !0, is(), ci();
  return (
    /** @type {T} */
    e
  );
}
function w(t) {
  var e = t.f, n = (e & Vt) !== 0;
  if (j !== null && !Lt) {
    Kt !== null && Kt.includes(t) && La();
    var r = j.deps;
    t.rv < Ln && (t.rv = Ln, ut === null && r !== null && r[bt] === t ? bt++ : ut === null ? ut = [t] : (!ye || !ut.includes(t)) && ut.push(t));
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), s = i.parent;
    s !== null && !(s.f & Mt) && (i.f ^= Mt);
  }
  return n && (i = /** @type {Derived} */
  t, fn(i) && Ki(i)), t.v;
}
function Vn(t) {
  var e = Lt;
  try {
    return Lt = !0, t();
  } finally {
    Lt = e;
  }
}
const Qa = -7169;
function oe(t, e) {
  t.f = t.f & Qa | e;
}
function tl(t) {
  X === null && j === null && Ma(), j !== null && j.f & Mt && X === null && ka(), Hr && Sa();
}
function el(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ue(t, e, n, r = !0) {
  var i = (t & Ye) !== 0, s = X, a = {
    ctx: gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | he,
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
      Yr(a), a.f |= ba;
    } catch (f) {
      throw ue(a), f;
    }
  else e !== null && er(a);
  var l = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Vi | Mn)) === 0;
  if (!l && !i && r && (s !== null && el(a, s), j !== null && j.f & Vt)) {
    var u = (
      /** @type {Derived} */
      j
    );
    (u.effects ?? (u.effects = [])).push(a);
  }
  return a;
}
function zr(t) {
  tl();
  var e = X !== null && (X.f & ce) !== 0 && gt !== null && !gt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      gt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: X,
      reaction: j
    });
  } else {
    var r = Ur(t);
    return r;
  }
}
function nl(t) {
  const e = Ue(Ye, t, !0);
  return () => {
    ue(e);
  };
}
function rl(t) {
  const e = Ue(Ye, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Bn(e, () => {
      ue(e), r(void 0);
    }) : (ue(e), r(void 0));
  });
}
function Ur(t) {
  return Ue(qi, t, !1);
}
function ss(t) {
  return Ue(Pr, t, !0);
}
function pn(t, e = [], n = Zn) {
  const r = e.map(n);
  return jr(() => t(...r.map(w)));
}
function jr(t, e = 0) {
  return Ue(Pr | Dr | e, t, !0);
}
function sn(t, e = !0) {
  return Ue(Pr | ce, t, !0, e);
}
function as(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Hr, r = j;
    pi(!0), qe(null);
    try {
      e.call(null);
    } finally {
      pi(n), qe(r);
    }
  }
}
function ls(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    ue(n, e), n = r;
  }
}
function il(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ce || ue(e), e = n;
  }
}
function ue(t, e = !0) {
  var n = !1;
  if ((e || t.f & $a) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ de(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  ls(t, e && !n), qn(t, 0), oe(t, Jn);
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
function Bn(t, e) {
  var n = [];
  Xr(t, n, !0), us(n, () => {
    ue(t), e && e();
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
function Xr(t, e, n) {
  if (!(t.f & le)) {
    if (t.f ^= le, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Fr) !== 0 || (r.f & ce) !== 0;
      Xr(r, e, s ? n : !1), r = i;
    }
  }
}
function Hn(t) {
  fs(t, !0);
}
function fs(t, e) {
  if (t.f & le) {
    t.f ^= le, t.f & _t || (t.f ^= _t), fn(t) && (oe(t, he), er(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Fr) !== 0 || (n.f & ce) !== 0;
      fs(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function sl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let gt = null;
function gi(t) {
  gt = t;
}
function Gr(t, e = !1, n) {
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
function Kr(t) {
  const e = gt;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = X, r = j;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Ve(s.effect), qe(s.reaction), Ur(s.fn);
        }
      } finally {
        Ve(n), qe(r);
      }
    }
    gt = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function cs() {
  return !0;
}
const al = ["touchstart", "touchmove"];
function ll(t) {
  return al.includes(t);
}
const hs = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Set();
function ol(t) {
  for (var e = 0; e < t.length; e++)
    hs.add(t[e]);
  for (var n of xr)
    n(t);
}
function gn(t) {
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
    Dn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = j, h = X;
    qe(null), Ve(null);
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
            if (Ir(y)) {
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
      t.__root = e, delete t.currentTarget, qe(o), Ve(h);
    }
  }
}
function ds(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ne(t, e) {
  var n = (
    /** @type {Effect} */
    X
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function je(t, e) {
  var n = (e & xa) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (tt)
      return Ne(U, null), U;
    r === void 0 && (r = ds(i ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || Wi ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ne(a, l);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ul(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (tt)
      return Ne(U, null), U;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ds(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ce(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Ce(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ne(u, u), u;
  };
}
function _i(t = "") {
  if (!tt) {
    var e = Le(t + "");
    return Ne(e, e), e;
  }
  var n = U;
  return n.nodeType !== 3 && (n.before(n = Le()), Bt(n)), Ne(n, n), n;
}
function Xt(t, e) {
  if (tt) {
    X.nodes_end = U, Qn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Oe(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function vs(t, e) {
  return ps(t, e);
}
function fl(t, e) {
  wr(), e.intro = e.intro ?? !1;
  const n = e.target, r = tt, i = U;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Li); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ de(s);
    if (!s)
      throw tn;
    ae(!0), Bt(
      /** @type {Comment} */
      s
    ), Qn();
    const a = ps(t, { ...e, anchor: s });
    if (U === null || U.nodeType !== 8 || /** @type {Comment} */
    U.data !== Or)
      throw Br(), tn;
    return ae(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === tn)
      return e.recover === !1 && Pa(), wr(), Qi(n), ae(!1), vs(t, e);
    throw a;
  } finally {
    ae(r), Bt(i);
  }
}
const Pe = /* @__PURE__ */ new Map();
function ps(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  wr();
  var l = /* @__PURE__ */ new Set(), u = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!l.has(d)) {
        l.add(d);
        var p = ll(d);
        e.addEventListener(d, gn, { passive: p });
        var y = Pe.get(d);
        y === void 0 ? (document.addEventListener(d, gn, { passive: p }), Pe.set(d, 1)) : Pe.set(d, y + 1);
      }
    }
  };
  u(Lr(hs)), xr.add(u);
  var f = void 0, o = rl(() => {
    var h = n ?? e.appendChild(Le());
    return sn(() => {
      if (s) {
        Gr({});
        var c = (
          /** @type {ComponentContext} */
          gt
        );
        c.c = s;
      }
      i && (r.$$events = i), tt && Ne(
        /** @type {TemplateNode} */
        h,
        null
      ), f = t(h, r) || {}, tt && (X.nodes_end = U), s && Kr();
    }), () => {
      var p;
      for (var c of l) {
        e.removeEventListener(c, gn);
        var d = (
          /** @type {number} */
          Pe.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, gn), Pe.delete(c)) : Pe.set(c, d);
      }
      xr.delete(u), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return br.set(f, o), f;
}
let br = /* @__PURE__ */ new WeakMap();
function cl(t, e) {
  const n = br.get(t);
  return n ? (br.delete(t), n(e)) : Promise.resolve();
}
function _n(t, e, n = !1) {
  tt && Qn();
  var r = t, i = null, s = null, a = dt, l = n ? Fr : 0, u = !1;
  const f = (h, c = !0) => {
    u = !0, o(c, h);
  }, o = (h, c) => {
    if (a === (a = h)) return;
    let d = !1;
    if (tt) {
      const p = (
        /** @type {Comment} */
        r.data === Mr
      );
      !!a === p && (r = yr(), Bt(r), ae(!1), d = !0);
    }
    a ? (i ? Hn(i) : c && (i = sn(() => c(r))), s && Bn(s, () => {
      s = null;
    })) : (s ? Hn(s) : c && (s = sn(() => c(r))), i && Bn(i, () => {
      i = null;
    })), d && ae(!0);
  };
  jr(() => {
    u = !1, e(f), u || o(null, null);
  }, l), tt && (r = U);
}
function hr(t, e) {
  return e;
}
function hl(t, e, n, r) {
  for (var i = [], s = e.length, a = 0; a < s; a++)
    Xr(e[a].e, i, !0);
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
    ), r.clear(), me(t, e[0].prev, e[s - 1].next);
  }
  us(i, () => {
    for (var f = 0; f < s; f++) {
      var o = e[f];
      l || (r.delete(o.k), me(t, o.prev, o.next)), ue(o.e, !l);
    }
  });
}
function dr(t, e, n, r, i, s = null) {
  var a = t, l = { items: /* @__PURE__ */ new Map(), first: null };
  tt && Qn();
  var u = null, f = !1, o = /* @__PURE__ */ Ha(() => {
    var h = n();
    return Ir(h) ? h : h == null ? [] : Lr(h);
  });
  jr(() => {
    var h = w(o), c = h.length;
    if (f && c === 0)
      return;
    f = c === 0;
    let d = !1;
    if (tt) {
      var p = (
        /** @type {Comment} */
        a.data === Mr
      );
      p !== (c === 0) && (a = yr(), Bt(a), ae(!1), d = !0);
    }
    if (tt) {
      for (var y = null, R, _ = 0; _ < c; _++) {
        if (U.nodeType === 8 && /** @type {Comment} */
        U.data === Or) {
          a = /** @type {Comment} */
          U, d = !0, ae(!1);
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
      c > 0 && Bt(yr());
    }
    tt || dl(h, l, a, i, e, r, n), s !== null && (c === 0 ? u ? Hn(u) : u = sn(() => s(a)) : u !== null && Bn(u, () => {
      u = null;
    })), d && ae(!0), w(o);
  }), tt && (a = U);
}
function dl(t, e, n, r, i, s, a) {
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
    if (vl(_, y, $), _.e.f & le && Hn(_.e), _ !== o) {
      if (h !== void 0 && h.has(_)) {
        if (d.length < p.length) {
          var M = p[0], b;
          c = M.prev;
          var P = d[0], Y = d[d.length - 1];
          for (b = 0; b < d.length; b += 1)
            mi(d[b], M, n);
          for (b = 0; b < p.length; b += 1)
            h.delete(p[b]);
          me(e, P.prev, Y.next), me(e, c, P), me(e, Y, M), o = M, c = Y, $ -= 1, d = [], p = [];
        } else
          h.delete(_), mi(_, o, n), me(e, _.prev, _.next), me(e, _, c === null ? e.first : c.next), me(e, c, _), c = _;
        continue;
      }
      for (d = [], p = []; o !== null && o.k !== R; )
        o.e.f & le || (h ?? (h = /* @__PURE__ */ new Set())).add(o), p.push(o), o = o.next;
      if (o === null)
        continue;
      _ = o;
    }
    d.push(_), c = _, o = _.next;
  }
  if (o !== null || h !== void 0) {
    for (var J = h === void 0 ? [] : Lr(h); o !== null; )
      o.e.f & le || J.push(o), o = o.next;
    var it = J.length;
    if (it > 0) {
      var rt = null;
      hl(e, J, rt, u);
    }
  }
  X.first = e.first && e.first.e, X.last = c && c.e;
}
function vl(t, e, n, r) {
  ji(t.v, e), t.i = n;
}
function gs(t, e, n, r, i, s, a, l, u, f) {
  var o = (u & va) !== 0, h = (u & ga) === 0, c = o ? h ? /* @__PURE__ */ Vr(i) : St(i) : i, d = u & pa ? St(a) : a, p = {
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
    return p.e = sn(() => l(t, c, d, f), tt), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? e.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
      /* @__PURE__ */ de(s)
    );
    i.before(s), s = a;
  }
}
function me(t, e, n) {
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
  return t === e || (t == null ? void 0 : t[en]) === e;
}
function Rn(t = {}, e, n, r) {
  return Ur(() => {
    var i, s;
    return ss(() => {
      i = s, s = [], Vn(() => {
        t !== n(...s) && (e(t, ...s), i && wi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      zi(() => {
        s && wi(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function pl(t) {
  gt === null && sl(), zr(() => {
    const e = Vn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
let mn = !1;
function gl(t) {
  var e = mn;
  try {
    return mn = !1, [t(), mn];
  } finally {
    mn = e;
  }
}
function It(t, e, n, r) {
  var b;
  var i = (n & _a) !== 0, s = !0, a = (n & ya) !== 0, l = (n & wa) !== 0, u = !1, f;
  a ? [f, u] = gl(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e];
  var o = en in t || Bi in t, h = a && (((b = Re(t, e)) == null ? void 0 : b.set) ?? (o && e in t && ((P) => t[e] = P))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, p = !1, y = () => (p = !0, d && (d = !1, l ? c = Vn(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  f === void 0 && r !== void 0 && (h && s && Da(), f = y(), h && h(f));
  var R;
  if (R = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? y() : (d = !0, p = !1, P);
  }, !(n & ma))
    return R;
  if (h) {
    var _ = t.$$legacy;
    return function(P, Y) {
      return arguments.length > 0 ? ((!Y || _ || u) && h(Y ? R() : P), P) : R();
    };
  }
  var $ = !1, T = /* @__PURE__ */ Vr(f), M = /* @__PURE__ */ Zn(() => {
    var P = R(), Y = w(T);
    return $ ? ($ = !1, Y) : T.v = P;
  });
  return i || (M.equals = qr), function(P, Y) {
    if (arguments.length > 0) {
      const J = Y ? w(M) : a ? $t(P) : P;
      return M.equals(J) || ($ = !0, W(T, J), p && c !== void 0 && (c = J), Vn(() => w(M))), P;
    }
    return w(M);
  };
}
function _l(t) {
  return new ml(t);
}
var se, Tt;
class ml {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    fr(this, se);
    /** @type {Record<string, any>} */
    fr(this, Tt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var u = /* @__PURE__ */ Vr(l);
      return n.set(a, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, l) {
          return w(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Bi ? !0 : (w(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, u) {
          return W(n.get(l) ?? r(l, u), u), Reflect.set(a, l, u);
        }
      }
    );
    cr(this, Tt, (e.hydrate ? fl : vs)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && kt(), cr(this, se, i.$$events);
    for (const a of Object.keys(ht(this, Tt)))
      a === "$set" || a === "$destroy" || a === "$on" || Dn(this, a, {
        get() {
          return ht(this, Tt)[a];
        },
        /** @param {any} value */
        set(l) {
          ht(this, Tt)[a] = l;
        },
        enumerable: !0
      });
    ht(this, Tt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ht(this, Tt).$destroy = () => {
      cl(ht(this, Tt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ht(this, Tt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    ht(this, se)[e] = ht(this, se)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return ht(this, se)[e].push(r), () => {
      ht(this, se)[e] = ht(this, se)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    ht(this, Tt).$destroy();
  }
}
se = new WeakMap(), Tt = new WeakMap();
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
    Ft(this, "$$ctor");
    /** Slots */
    Ft(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ft(this, "$$c");
    /** Whether or not the custom element is connected */
    Ft(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ft(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ft(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ft(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ft(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ft(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ft(this, "$$me");
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
          s !== "default" && (l.name = s), Xt(a, l);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = yl(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = En(a, s.value, this.$$p_d, "toProp"));
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
      }), this.$$me = nl(() => {
        ss(() => {
          var s;
          this.$$r = !0;
          for (const a of Pn(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = En(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = En(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Pn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function En(t, e, n, r) {
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
function yl(t) {
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
      return Pn(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Pn(e).forEach((l) => {
    Dn(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var h;
        u = En(l, u, e), this.$$d[l] = u;
        var f = this.$$c;
        if (f) {
          var o = (h = Re(f, l)) == null ? void 0 : h.get;
          o ? f[l] = u : f.$set({ [l]: u });
        }
      }
    });
  }), r.forEach((l) => {
    Dn(a.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var wl = { value: () => {
} };
function ws() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Cn(n);
}
function Cn(t) {
  this._ = t;
}
function xl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Cn.prototype = ws.prototype = {
  constructor: Cn,
  on: function(t, e) {
    var n = this._, r = xl(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = bl(n[i], t.name))) return i;
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
    return new Cn(t);
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
function bl(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function xi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = wl, t = t.slice(0, r).concat(t.slice(r + 1));
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
function nr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), bi.hasOwnProperty(e) ? { space: bi[e], local: t } : t;
}
function $l(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === $r && e.documentElement.namespaceURI === $r ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Al(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function xs(t) {
  var e = nr(t);
  return (e.local ? Al : $l)(e);
}
function Rl() {
}
function Wr(t) {
  return t == null ? Rl : function() {
    return this.querySelector(t);
  };
}
function El(t) {
  typeof t != "function" && (t = Wr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = new Array(a), u, f, o = 0; o < a; ++o)
      (u = s[o]) && (f = t.call(u, u.__data__, o, s)) && ("__data__" in u && (f.__data__ = u.__data__), l[o] = f);
  return new At(r, this._parents);
}
function Cl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Nl() {
  return [];
}
function bs(t) {
  return t == null ? Nl : function() {
    return this.querySelectorAll(t);
  };
}
function Tl(t) {
  return function() {
    return Cl(t.apply(this, arguments));
  };
}
function Sl(t) {
  typeof t == "function" ? t = Tl(t) : t = bs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], l = a.length, u, f = 0; f < l; ++f)
      (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
  return new At(r, i);
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
var kl = Array.prototype.find;
function Ml(t) {
  return function() {
    return kl.call(this.children, t);
  };
}
function Ol() {
  return this.firstElementChild;
}
function Pl(t) {
  return this.select(t == null ? Ol : Ml(typeof t == "function" ? t : As(t)));
}
var Dl = Array.prototype.filter;
function Fl() {
  return Array.from(this.children);
}
function Il(t) {
  return function() {
    return Dl.call(this.children, t);
  };
}
function Ll(t) {
  return this.selectAll(t == null ? Fl : Il(typeof t == "function" ? t : As(t)));
}
function ql(t) {
  typeof t != "function" && (t = $s(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], u, f = 0; f < a; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && l.push(u);
  return new At(r, this._parents);
}
function Rs(t) {
  return new Array(t.length);
}
function Vl() {
  return new At(this._enter || this._groups.map(Rs), this._parents);
}
function Yn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Yn.prototype = {
  constructor: Yn,
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
function Bl(t) {
  return function() {
    return t;
  };
}
function Hl(t, e, n, r, i, s) {
  for (var a = 0, l, u = e.length, f = s.length; a < f; ++a)
    (l = e[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new Yn(t, s[a]);
  for (; a < u; ++a)
    (l = e[a]) && (i[a] = l);
}
function Yl(t, e, n, r, i, s, a) {
  var l, u, f = /* @__PURE__ */ new Map(), o = e.length, h = s.length, c = new Array(o), d;
  for (l = 0; l < o; ++l)
    (u = e[l]) && (c[l] = d = a.call(u, u.__data__, l, e) + "", f.has(d) ? i[l] = u : f.set(d, u));
  for (l = 0; l < h; ++l)
    d = a.call(t, s[l], l, s) + "", (u = f.get(d)) ? (r[l] = u, u.__data__ = s[l], f.delete(d)) : n[l] = new Yn(t, s[l]);
  for (l = 0; l < o; ++l)
    (u = e[l]) && f.get(c[l]) === u && (i[l] = u);
}
function zl(t) {
  return t.__data__;
}
function Ul(t, e) {
  if (!arguments.length) return Array.from(this, zl);
  var n = e ? Yl : Hl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Bl(t));
  for (var s = i.length, a = new Array(s), l = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var o = r[f], h = i[f], c = h.length, d = jl(t.call(o, o && o.__data__, f, r)), p = d.length, y = l[f] = new Array(p), R = a[f] = new Array(p), _ = u[f] = new Array(c);
    n(o, h, y, R, _, d, e);
    for (var $ = 0, T = 0, M, b; $ < p; ++$)
      if (M = y[$]) {
        for ($ >= T && (T = $ + 1); !(b = R[T]) && ++T < p; ) ;
        M._next = b || null;
      }
  }
  return a = new At(a, r), a._enter = l, a._exit = u, a;
}
function jl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xl() {
  return new At(this._exit || this._groups.map(Rs), this._parents);
}
function Gl(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Kl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), u = 0; u < a; ++u)
    for (var f = n[u], o = r[u], h = f.length, c = l[u] = new Array(h), d, p = 0; p < h; ++p)
      (d = f[p] || o[p]) && (c[p] = d);
  for (; u < i; ++u)
    l[u] = n[u];
  return new At(l, this._parents);
}
function Wl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Jl(t) {
  t || (t = Zl);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], l = a.length, u = i[s] = new Array(l), f, o = 0; o < l; ++o)
      (f = a[o]) && (u[o] = f);
    u.sort(e);
  }
  return new At(i, this._parents).order();
}
function Zl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ql() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function to() {
  return Array.from(this);
}
function eo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function no() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ro() {
  return !this.node();
}
function io(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, l; s < a; ++s)
      (l = i[s]) && t.call(l, l.__data__, s, i);
  return this;
}
function so(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ao(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function oo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function uo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function fo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function co(t, e) {
  var n = nr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ao : so : typeof e == "function" ? n.local ? fo : uo : n.local ? oo : lo)(n, e));
}
function Es(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ho(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vo(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function po(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function go(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ho : typeof e == "function" ? po : vo)(t, e, n ?? "")) : Be(this.node(), t);
}
function Be(t, e) {
  return t.style.getPropertyValue(e) || Es(t).getComputedStyle(t, null).getPropertyValue(e);
}
function _o(t) {
  return function() {
    delete this[t];
  };
}
function mo(t, e) {
  return function() {
    this[t] = e;
  };
}
function yo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function wo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? _o : typeof e == "function" ? yo : mo)(t, e)) : this.node()[t];
}
function Cs(t) {
  return t.trim().split(/^|\s+/);
}
function Jr(t) {
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
  for (var n = Jr(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ss(t, e) {
  for (var n = Jr(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function xo(t) {
  return function() {
    Ts(this, t);
  };
}
function bo(t) {
  return function() {
    Ss(this, t);
  };
}
function $o(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ts : Ss)(this, t);
  };
}
function Ao(t, e) {
  var n = Cs(t + "");
  if (arguments.length < 2) {
    for (var r = Jr(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? $o : e ? xo : bo)(n, e));
}
function Ro() {
  this.textContent = "";
}
function Eo(t) {
  return function() {
    this.textContent = t;
  };
}
function Co(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function No(t) {
  return arguments.length ? this.each(t == null ? Ro : (typeof t == "function" ? Co : Eo)(t)) : this.node().textContent;
}
function To() {
  this.innerHTML = "";
}
function So(t) {
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
function Mo(t) {
  return arguments.length ? this.each(t == null ? To : (typeof t == "function" ? ko : So)(t)) : this.node().innerHTML;
}
function Oo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Po() {
  return this.each(Oo);
}
function Do() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Fo() {
  return this.each(Do);
}
function Io(t) {
  var e = typeof t == "function" ? t : xs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Lo() {
  return null;
}
function qo(t, e) {
  var n = typeof t == "function" ? t : xs(t), r = e == null ? Lo : typeof e == "function" ? e : Wr(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Vo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Bo() {
  return this.each(Vo);
}
function Ho() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Yo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function zo(t) {
  return this.select(t ? Yo : Ho);
}
function Uo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function jo(t) {
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
    var r = this.__on, i, s = jo(e);
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
function Wo(t, e, n) {
  var r = Xo(t + ""), i, s = r.length, a;
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
  for (l = e ? Ko : Go, i = 0; i < s; ++i) this.each(l(r[i], e, n));
  return this;
}
function ks(t, e, n) {
  var r = Es(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Jo(t, e) {
  return function() {
    return ks(this, t, e);
  };
}
function Zo(t, e) {
  return function() {
    return ks(this, t, e.apply(this, arguments));
  };
}
function Qo(t, e) {
  return this.each((typeof e == "function" ? Zo : Jo)(t, e));
}
function* tu() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ms = [null];
function At(t, e) {
  this._groups = t, this._parents = e;
}
function Xe() {
  return new At([[document.documentElement]], Ms);
}
function eu() {
  return this;
}
At.prototype = Xe.prototype = {
  constructor: At,
  select: El,
  selectAll: Sl,
  selectChild: Pl,
  selectChildren: Ll,
  filter: ql,
  data: Ul,
  enter: Vl,
  exit: Xl,
  join: Gl,
  merge: Kl,
  selection: eu,
  order: Wl,
  sort: Jl,
  call: Ql,
  nodes: to,
  node: eo,
  size: no,
  empty: ro,
  each: io,
  attr: co,
  style: go,
  property: wo,
  classed: Ao,
  text: No,
  html: Mo,
  raise: Po,
  lower: Fo,
  append: Io,
  insert: qo,
  remove: Bo,
  clone: zo,
  datum: Uo,
  on: Wo,
  dispatch: Qo,
  [Symbol.iterator]: tu
};
function at(t) {
  return typeof t == "string" ? new At([[document.querySelector(t)]], [document.documentElement]) : new At([[t]], Ms);
}
function Zr(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Os(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function cn() {
}
var an = 0.7, zn = 1 / an, Ie = "\\s*([+-]?\\d+)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nu = /^#([0-9a-f]{3,8})$/, ru = new RegExp(`^rgb\\(${Ie},${Ie},${Ie}\\)$`), iu = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), su = new RegExp(`^rgba\\(${Ie},${Ie},${Ie},${ln}\\)$`), au = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${ln}\\)$`), lu = new RegExp(`^hsl\\(${ln},${Wt},${Wt}\\)$`), ou = new RegExp(`^hsla\\(${ln},${Wt},${Wt},${ln}\\)$`), $i = {
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
Zr(cn, Te, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ai,
  // Deprecated! Use color.formatHex.
  formatHex: Ai,
  formatHex8: uu,
  formatHsl: fu,
  formatRgb: Ri,
  toString: Ri
});
function Ai() {
  return this.rgb().formatHex();
}
function uu() {
  return this.rgb().formatHex8();
}
function fu() {
  return Ps(this).formatHsl();
}
function Ri() {
  return this.rgb().formatRgb();
}
function Te(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = nu.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ei(e) : n === 3 ? new pt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? yn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? yn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ru.exec(t)) ? new pt(e[1], e[2], e[3], 1) : (e = iu.exec(t)) ? new pt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = su.exec(t)) ? yn(e[1], e[2], e[3], e[4]) : (e = au.exec(t)) ? yn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = lu.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, 1) : (e = ou.exec(t)) ? Ti(e[1], e[2] / 100, e[3] / 100, e[4]) : $i.hasOwnProperty(t) ? Ei($i[t]) : t === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function Ei(t) {
  return new pt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function yn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new pt(t, e, n, r);
}
function cu(t) {
  return t instanceof cn || (t = Te(t)), t ? (t = t.rgb(), new pt(t.r, t.g, t.b, t.opacity)) : new pt();
}
function Ar(t, e, n, r) {
  return arguments.length === 1 ? cu(t) : new pt(t, e, n, r ?? 1);
}
function pt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Zr(pt, Ar, Os(cn, {
  brighter(t) {
    return t = t == null ? zn : Math.pow(zn, t), new pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? an : Math.pow(an, t), new pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Ee(this.r), Ee(this.g), Ee(this.b), Un(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ci,
  // Deprecated! Use color.formatHex.
  formatHex: Ci,
  formatHex8: hu,
  formatRgb: Ni,
  toString: Ni
}));
function Ci() {
  return `#${Ae(this.r)}${Ae(this.g)}${Ae(this.b)}`;
}
function hu() {
  return `#${Ae(this.r)}${Ae(this.g)}${Ae(this.b)}${Ae((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ni() {
  const t = Un(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ee(this.r)}, ${Ee(this.g)}, ${Ee(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Un(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ee(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ae(t) {
  return t = Ee(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ti(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new qt(t, e, n, r);
}
function Ps(t) {
  if (t instanceof qt) return new qt(t.h, t.s, t.l, t.opacity);
  if (t instanceof cn || (t = Te(t)), !t) return new qt();
  if (t instanceof qt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, l = s - i, u = (s + i) / 2;
  return l ? (e === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - e) / l + 2 : a = (e - n) / l + 4, l /= u < 0.5 ? s + i : 2 - s - i, a *= 60) : l = u > 0 && u < 1 ? 0 : a, new qt(a, l, u, t.opacity);
}
function du(t, e, n, r) {
  return arguments.length === 1 ? Ps(t) : new qt(t, e, n, r ?? 1);
}
function qt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Zr(qt, du, Os(cn, {
  brighter(t) {
    return t = t == null ? zn : Math.pow(zn, t), new qt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? an : Math.pow(an, t), new qt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new pt(
      vr(t >= 240 ? t - 240 : t + 120, i, r),
      vr(t, i, r),
      vr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new qt(Si(this.h), wn(this.s), wn(this.l), Un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Un(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Si(this.h)}, ${wn(this.s) * 100}%, ${wn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Si(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function wn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function vr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Qr = (t) => () => t;
function vu(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function pu(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function gu(t) {
  return (t = +t) == 1 ? Ds : function(e, n) {
    return n - e ? pu(e, n, t) : Qr(isNaN(e) ? n : e);
  };
}
function Ds(t, e) {
  var n = e - t;
  return n ? vu(t, n) : Qr(isNaN(t) ? e : t);
}
const jn = function t(e) {
  var n = gu(e);
  function r(i, s) {
    var a = n((i = Ar(i)).r, (s = Ar(s)).r), l = n(i.g, s.g), u = n(i.b, s.b), f = Ds(i.opacity, s.opacity);
    return function(o) {
      return i.r = a(o), i.g = l(o), i.b = u(o), i.opacity = f(o), i + "";
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
function mu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function yu(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = De(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(l) {
    for (a = 0; a < r; ++a) s[a] = i[a](l);
    return s;
  };
}
function wu(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Gt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function xu(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = De(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Rr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pr = new RegExp(Rr.source, "g");
function bu(t) {
  return function() {
    return t;
  };
}
function $u(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Fs(t, e) {
  var n = Rr.lastIndex = pr.lastIndex = 0, r, i, s, a = -1, l = [], u = [];
  for (t = t + "", e = e + ""; (r = Rr.exec(t)) && (i = pr.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, u.push({ i: a, x: Gt(r, i) })), n = pr.lastIndex;
  return n < e.length && (s = e.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? u[0] ? $u(u[0].x) : bu(e) : (e = u.length, function(f) {
    for (var o = 0, h; o < e; ++o) l[(h = u[o]).i] = h.x(f);
    return l.join("");
  });
}
function De(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Qr(e) : (n === "number" ? Gt : n === "string" ? (r = Te(e)) ? (e = r, jn) : Fs : e instanceof Te ? jn : e instanceof Date ? wu : mu(e) ? _u : Array.isArray(e) ? yu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xu : Gt)(t, e);
}
var ki = 180 / Math.PI, Er = {
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
var xn;
function Au(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Er : Is(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ru(t) {
  return t == null || (xn || (xn = document.createElementNS("http://www.w3.org/2000/svg", "g")), xn.setAttribute("transform", t), !(t = xn.transform.baseVal.consolidate())) ? Er : (t = t.matrix, Is(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ls(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, o, h, c, d, p) {
    if (f !== h || o !== c) {
      var y = d.push("translate(", null, e, null, n);
      p.push({ i: y - 4, x: Gt(f, h) }, { i: y - 2, x: Gt(o, c) });
    } else (h || c) && d.push("translate(" + h + e + c + n);
  }
  function a(f, o, h, c) {
    f !== o ? (f - o > 180 ? o += 360 : o - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Gt(f, o) })) : o && h.push(i(h) + "rotate(" + o + r);
  }
  function l(f, o, h, c) {
    f !== o ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Gt(f, o) }) : o && h.push(i(h) + "skewX(" + o + r);
  }
  function u(f, o, h, c, d, p) {
    if (f !== h || o !== c) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: y - 4, x: Gt(f, h) }, { i: y - 2, x: Gt(o, c) });
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
var Eu = Ls(Au, "px, ", "px)", "deg)"), Cu = Ls(Ru, ", ", ")", ")"), He = 0, Je = 0, We = 0, qs = 1e3, Xn, Ze, Gn = 0, Se = 0, rr = 0, on = typeof performance == "object" && performance.now ? performance : Date, Vs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ti() {
  return Se || (Vs(Nu), Se = on.now() + rr);
}
function Nu() {
  Se = 0;
}
function Kn() {
  this._call = this._time = this._next = null;
}
Kn.prototype = Bs.prototype = {
  constructor: Kn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ti() : +n) + (e == null ? 0 : +e), !this._next && Ze !== this && (Ze ? Ze._next = this : Xn = this, Ze = this), this._call = t, this._time = n, Cr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cr());
  }
};
function Bs(t, e, n) {
  var r = new Kn();
  return r.restart(t, e, n), r;
}
function Tu() {
  ti(), ++He;
  for (var t = Xn, e; t; )
    (e = Se - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --He;
}
function Mi() {
  Se = (Gn = on.now()) + rr, He = Je = 0;
  try {
    Tu();
  } finally {
    He = 0, ku(), Se = 0;
  }
}
function Su() {
  var t = on.now(), e = t - Gn;
  e > qs && (rr -= e, Gn = t);
}
function ku() {
  for (var t, e = Xn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Xn = n);
  Ze = t, Cr(r);
}
function Cr(t) {
  if (!He) {
    Je && (Je = clearTimeout(Je));
    var e = t - Se;
    e > 24 ? (t < 1 / 0 && (Je = setTimeout(Mi, t - on.now() - rr)), We && (We = clearInterval(We))) : (We || (Gn = on.now(), We = setInterval(Su, qs)), He = 1, Vs(Mi));
  }
}
function Oi(t, e, n) {
  var r = new Kn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Mu = ws("start", "end", "cancel", "interrupt"), Ou = [], Hs = 0, Pi = 1, Nr = 2, Nn = 3, Di = 4, Tr = 5, Tn = 6;
function ir(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Pu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Mu,
    tween: Ou,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Hs
  });
}
function ei(t, e) {
  var n = Ht(t, e);
  if (n.state > Hs) throw new Error("too late; already scheduled");
  return n;
}
function Jt(t, e) {
  var n = Ht(t, e);
  if (n.state > Nn) throw new Error("too late; already running");
  return n;
}
function Ht(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Pu(t, e, n) {
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
        if (d.state === Nn) return Oi(a);
        d.state === Di ? (d.state = Tn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[o]) : +o < e && (d.state = Tn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[o]);
      }
    if (Oi(function() {
      n.state === Nn && (n.state = Di, n.timer.restart(l, n.delay, n.time), l(f));
    }), n.state = Nr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Nr) {
      for (n.state = Nn, i = new Array(c = n.tween.length), o = 0, h = -1; o < c; ++o)
        (d = n.tween[o].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(f) {
    for (var o = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(u), n.state = Tr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, o);
    n.state === Tr && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Tn, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Du(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Nr && r.state < Tr, r.state = Tn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Fu(t) {
  return this.each(function() {
    Du(this, t);
  });
}
function Iu(t, e) {
  var n, r;
  return function() {
    var i = Jt(this, t), s = i.tween;
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
function Lu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Jt(this, t), a = s.tween;
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
function qu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ht(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Iu : Lu)(n, t, e));
}
function ni(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Jt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ht(i, r).value[e];
  };
}
function Ys(t, e) {
  var n;
  return (typeof e == "number" ? Gt : e instanceof Te ? jn : (n = Te(e)) ? (e = n, jn) : Fs)(t, e);
}
function Vu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bu(t) {
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
function zu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), u;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = l + "", a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l)));
  };
}
function Uu(t, e, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), u;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = l + "", a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l)));
  };
}
function ju(t, e) {
  var n = nr(t), r = n === "transform" ? Cu : Ys;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Uu : zu)(n, r, ni(this, "attr." + t, e)) : e == null ? (n.local ? Bu : Vu)(n) : (n.local ? Yu : Hu)(n, r, e));
}
function Xu(t, e) {
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
function Wu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Xu(t, s)), n;
  }
  return i._value = e, i;
}
function Ju(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = nr(t);
  return this.tween(n, (r.local ? Ku : Wu)(r, e));
}
function Zu(t, e) {
  return function() {
    ei(this, t).delay = +e.apply(this, arguments);
  };
}
function Qu(t, e) {
  return e = +e, function() {
    ei(this, t).delay = e;
  };
}
function tf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zu : Qu)(e, t)) : Ht(this.node(), e).delay;
}
function ef(t, e) {
  return function() {
    Jt(this, t).duration = +e.apply(this, arguments);
  };
}
function nf(t, e) {
  return e = +e, function() {
    Jt(this, t).duration = e;
  };
}
function rf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ef : nf)(e, t)) : Ht(this.node(), e).duration;
}
function sf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Jt(this, t).ease = e;
  };
}
function af(t) {
  var e = this._id;
  return arguments.length ? this.each(sf(e, t)) : Ht(this.node(), e).ease;
}
function lf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Jt(this, t).ease = n;
  };
}
function of(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lf(this._id, t));
}
function uf(t) {
  typeof t != "function" && (t = $s(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l = r[i] = [], u, f = 0; f < a; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && l.push(u);
  return new fe(r, this._parents, this._name, this._id);
}
function ff(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var u = e[l], f = n[l], o = u.length, h = a[l] = new Array(o), c, d = 0; d < o; ++d)
      (c = u[d] || f[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = e[l];
  return new fe(a, this._parents, this._name, this._id);
}
function cf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function hf(t, e, n) {
  var r, i, s = cf(e) ? ei : Jt;
  return function() {
    var a = s(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(e, n), a.on = i;
  };
}
function df(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ht(this.node(), n).on.on(t) : this.each(hf(n, t, e));
}
function vf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function pf() {
  return this.on("end.remove", vf(this._id));
}
function gf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Wr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], u = l.length, f = s[a] = new Array(u), o, h, c = 0; c < u; ++c)
      (o = l[c]) && (h = t.call(o, o.__data__, c, l)) && ("__data__" in o && (h.__data__ = o.__data__), f[c] = h, ir(f[c], e, n, c, f, Ht(o, n)));
  return new fe(s, this._parents, e, n);
}
function _f(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bs(t));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var u = r[l], f = u.length, o, h = 0; h < f; ++h)
      if (o = u[h]) {
        for (var c = t.call(o, o.__data__, h, u), d, p = Ht(o, n), y = 0, R = c.length; y < R; ++y)
          (d = c[y]) && ir(d, e, n, y, c, p);
        s.push(c), a.push(o);
      }
  return new fe(s, a, e, n);
}
var mf = Xe.prototype.constructor;
function yf() {
  return new mf(this._groups, this._parents);
}
function wf(t, e) {
  var n, r, i;
  return function() {
    var s = Be(this, t), a = (this.style.removeProperty(t), Be(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function zs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xf(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Be(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function bf(t, e, n) {
  var r, i, s;
  return function() {
    var a = Be(this, t), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(t), Be(this, t))), a === u ? null : a === r && u === i ? s : (i = u, s = e(r = a, l));
  };
}
function $f(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, l;
  return function() {
    var u = Jt(this, t), f = u.on, o = u.value[s] == null ? l || (l = zs(e)) : void 0;
    (f !== n || i !== o) && (r = (n = f).copy()).on(a, i = o), u.on = r;
  };
}
function Af(t, e, n) {
  var r = (t += "") == "transform" ? Eu : Ys;
  return e == null ? this.styleTween(t, wf(t, r)).on("end.style." + t, zs(t)) : typeof e == "function" ? this.styleTween(t, bf(t, r, ni(this, "style." + t, e))).each($f(this._id, t)) : this.styleTween(t, xf(t, r, e), n).on("end.style." + t, null);
}
function Rf(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Ef(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Rf(t, a, n)), r;
  }
  return s._value = e, s;
}
function Cf(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Ef(t, e, n ?? ""));
}
function Nf(t) {
  return function() {
    this.textContent = t;
  };
}
function Tf(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Sf(t) {
  return this.tween("text", typeof t == "function" ? Tf(ni(this, "text", t)) : Nf(t == null ? "" : t + ""));
}
function kf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Mf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && kf(i)), e;
  }
  return r._value = t, r;
}
function Of(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Mf(t));
}
function Pf() {
  for (var t = this._name, e = this._id, n = Us(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, u, f = 0; f < l; ++f)
      if (u = a[f]) {
        var o = Ht(u, e);
        ir(u, t, n, f, a, {
          time: o.time + o.delay + o.duration,
          delay: 0,
          duration: o.duration,
          ease: o.ease
        });
      }
  return new fe(r, this._parents, t, n);
}
function Df() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var l = { value: a }, u = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var f = Jt(this, r), o = f.on;
      o !== t && (e = (t = o).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(u)), f.on = e;
    }), i === 0 && s();
  });
}
var Ff = 0;
function fe(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Sn(t) {
  return Xe().transition(t);
}
function Us() {
  return ++Ff;
}
var ee = Xe.prototype;
fe.prototype = Sn.prototype = {
  constructor: fe,
  select: gf,
  selectAll: _f,
  selectChild: ee.selectChild,
  selectChildren: ee.selectChildren,
  filter: uf,
  merge: ff,
  selection: yf,
  transition: Pf,
  call: ee.call,
  nodes: ee.nodes,
  node: ee.node,
  size: ee.size,
  empty: ee.empty,
  each: ee.each,
  on: df,
  attr: ju,
  attrTween: Ju,
  style: Af,
  styleTween: Cf,
  text: Sf,
  textTween: Of,
  remove: pf,
  tween: qu,
  delay: tf,
  duration: rf,
  ease: af,
  easeVarying: of,
  end: Df,
  [Symbol.iterator]: ee[Symbol.iterator]
};
function If(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Lf = {
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
function Vf(t) {
  var e, n;
  t instanceof fe ? (e = t._id, t = t._name) : (e = Us(), (n = Lf).time = ti(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, u, f = 0; f < l; ++f)
      (u = a[f]) && ir(u, t, e, f, a, n || qf(u, e));
  return new fe(r, this._parents, t, e);
}
Xe.prototype.interrupt = Fu;
Xe.prototype.transition = Vf;
const Sr = Math.PI, kr = 2 * Sr, $e = 1e-6, Bf = kr - $e;
function js(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Hf(t) {
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
class Yf {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? js : Hf(e);
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
    else if (c > $e) if (!(Math.abs(h * u - f * o) > $e) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, p = i - l, y = u * u + f * f, R = d * d + p * p, _ = Math.sqrt(y), $ = Math.sqrt(c), T = s * Math.tan((Sr - Math.acos((y + c - R) / (2 * _ * $))) / 2), M = T / $, b = T / _;
      Math.abs(M - 1) > $e && this._append`L${e + M * o},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * d > o * p)},${this._x1 = e + b * u},${this._y1 = n + b * f}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), u = r * Math.sin(i), f = e + l, o = n + u, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${o}` : (Math.abs(this._x1 - f) > $e || Math.abs(this._y1 - o) > $e) && this._append`L${f},${o}`, r && (c < 0 && (c = c % kr + kr), c > Bf ? this._append`A${r},${r},0,1,${h},${e - l},${n - u}A${r},${r},0,1,${h},${this._x1 = f},${this._y1 = o}` : c > $e && this._append`A${r},${r},0,${+(c >= Sr)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function zf(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Uf = zf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function ft(t) {
  return function() {
    return t;
  };
}
const Fi = Math.abs, ot = Math.atan2, be = Math.cos, jf = Math.max, gr = Math.min, jt = Math.sin, Fe = Math.sqrt, vt = 1e-12, un = Math.PI, Wn = un / 2, kn = 2 * un;
function Xf(t) {
  return t > 1 ? 0 : t < -1 ? un : Math.acos(t);
}
function Ii(t) {
  return t >= 1 ? Wn : t <= -1 ? -Wn : Math.asin(t);
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
function Wf(t) {
  return t.outerRadius;
}
function Jf(t) {
  return t.startAngle;
}
function Zf(t) {
  return t.endAngle;
}
function Qf(t) {
  return t && t.padAngle;
}
function tc(t, e, n, r, i, s, a, l) {
  var u = n - t, f = r - e, o = a - i, h = l - s, c = h * u - o * f;
  if (!(c * c < vt))
    return c = (o * (e - s) - h * (t - i)) / c, [t + c * u, e + c * f];
}
function bn(t, e, n, r, i, s, a) {
  var l = t - n, u = e - r, f = (a ? s : -s) / Fe(l * l + u * u), o = f * u, h = -f * l, c = t + o, d = e + h, p = n + o, y = r + h, R = (c + p) / 2, _ = (d + y) / 2, $ = p - c, T = y - d, M = $ * $ + T * T, b = i - s, P = c * y - p * d, Y = (T < 0 ? -1 : 1) * Fe(jf(0, b * b * M - P * P)), J = (P * T - $ * Y) / M, it = (-P * $ - T * Y) / M, rt = (P * T + $ * Y) / M, H = (-P * $ + T * Y) / M, F = J - R, E = it - _, L = rt - R, G = H - _;
  return F * F + E * E > L * L + G * G && (J = rt, it = H), {
    cx: J,
    cy: it,
    x01: -o,
    y01: -h,
    x11: J * (i / b - 1),
    y11: it * (i / b - 1)
  };
}
function ne() {
  var t = Kf, e = Wf, n = ft(0), r = null, i = Jf, s = Zf, a = Qf, l = null, u = Gf(f);
  function f() {
    var o, h, c = +t.apply(this, arguments), d = +e.apply(this, arguments), p = i.apply(this, arguments) - Wn, y = s.apply(this, arguments) - Wn, R = Fi(y - p), _ = y > p;
    if (l || (l = o = u()), d < c && (h = d, d = c, c = h), !(d > vt)) l.moveTo(0, 0);
    else if (R > kn - vt)
      l.moveTo(d * be(p), d * jt(p)), l.arc(0, 0, d, p, y, !_), c > vt && (l.moveTo(c * be(y), c * jt(y)), l.arc(0, 0, c, y, p, _));
    else {
      var $ = p, T = y, M = p, b = y, P = R, Y = R, J = a.apply(this, arguments) / 2, it = J > vt && (r ? +r.apply(this, arguments) : Fe(c * c + d * d)), rt = gr(Fi(d - c) / 2, +n.apply(this, arguments)), H = rt, F = rt, E, L;
      if (it > vt) {
        var G = Ii(it / c * jt(J)), ve = Ii(it / d * jt(J));
        (P -= G * 2) > vt ? (G *= _ ? 1 : -1, M += G, b -= G) : (P = 0, M = b = (p + y) / 2), (Y -= ve * 2) > vt ? (ve *= _ ? 1 : -1, $ += ve, T -= ve) : (Y = 0, $ = T = (p + y) / 2);
      }
      var mt = d * be($), yt = d * jt($), Zt = c * be(b), ct = c * jt(b);
      if (rt > vt) {
        var Ot = d * be(T), Yt = d * jt(T), Qt = c * be(M), pe = c * jt(M), wt;
        if (R < un)
          if (wt = tc(mt, yt, Qt, pe, Ot, Yt, Zt, ct)) {
            var we = mt - wt[0], ge = yt - wt[1], Rt = Ot - wt[0], Pt = Yt - wt[1], ke = 1 / jt(Xf((we * Rt + ge * Pt) / (Fe(we * we + ge * ge) * Fe(Rt * Rt + Pt * Pt))) / 2), xe = Fe(wt[0] * wt[0] + wt[1] * wt[1]);
            H = gr(rt, (c - xe) / (ke - 1)), F = gr(rt, (d - xe) / (ke + 1));
          } else
            H = F = 0;
      }
      Y > vt ? F > vt ? (E = bn(Qt, pe, mt, yt, d, F, _), L = bn(Ot, Yt, Zt, ct, d, F, _), l.moveTo(E.cx + E.x01, E.cy + E.y01), F < rt ? l.arc(E.cx, E.cy, F, ot(E.y01, E.x01), ot(L.y01, L.x01), !_) : (l.arc(E.cx, E.cy, F, ot(E.y01, E.x01), ot(E.y11, E.x11), !_), l.arc(0, 0, d, ot(E.cy + E.y11, E.cx + E.x11), ot(L.cy + L.y11, L.cx + L.x11), !_), l.arc(L.cx, L.cy, F, ot(L.y11, L.x11), ot(L.y01, L.x01), !_))) : (l.moveTo(mt, yt), l.arc(0, 0, d, $, T, !_)) : l.moveTo(mt, yt), !(c > vt) || !(P > vt) ? l.lineTo(Zt, ct) : H > vt ? (E = bn(Zt, ct, Ot, Yt, c, -H, _), L = bn(mt, yt, Qt, pe, c, -H, _), l.lineTo(E.cx + E.x01, E.cy + E.y01), H < rt ? l.arc(E.cx, E.cy, H, ot(E.y01, E.x01), ot(L.y01, L.x01), !_) : (l.arc(E.cx, E.cy, H, ot(E.y01, E.x01), ot(E.y11, E.x11), !_), l.arc(0, 0, c, ot(E.cy + E.y11, E.cx + E.x11), ot(L.cy + L.y11, L.cx + L.x11), _), l.arc(L.cx, L.cy, H, ot(L.y11, L.x11), ot(L.y01, L.x01), !_))) : l.arc(0, 0, c, b, M, _);
    }
    if (l.closePath(), o) return l = null, o + "" || null;
  }
  return f.centroid = function() {
    var o = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - un / 2;
    return [be(h) * o, jt(h) * o];
  }, f.innerRadius = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : ft(+o), f) : t;
  }, f.outerRadius = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : ft(+o), f) : e;
  }, f.cornerRadius = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : ft(+o), f) : n;
  }, f.padRadius = function(o) {
    return arguments.length ? (r = o == null ? null : typeof o == "function" ? o : ft(+o), f) : r;
  }, f.startAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : ft(+o), f) : i;
  }, f.endAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : ft(+o), f) : s;
  }, f.padAngle = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : ft(+o), f) : a;
  }, f.context = function(o) {
    return arguments.length ? (l = o ?? null, f) : l;
  }, f;
}
function ec(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function nc(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function rc(t) {
  return t;
}
function _r() {
  var t = rc, e = nc, n = null, r = ft(0), i = ft(kn), s = ft(0);
  function a(l) {
    var u, f = (l = ec(l)).length, o, h, c = 0, d = new Array(f), p = new Array(f), y = +r.apply(this, arguments), R = Math.min(kn, Math.max(-kn, i.apply(this, arguments) - y)), _, $ = Math.min(Math.abs(R) / f, s.apply(this, arguments)), T = $ * (R < 0 ? -1 : 1), M;
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
    return arguments.length ? (t = typeof l == "function" ? l : ft(+l), a) : t;
  }, a.sortValues = function(l) {
    return arguments.length ? (e = l, n = null, a) : e;
  }, a.sort = function(l) {
    return arguments.length ? (n = l, e = null, a) : n;
  }, a.startAngle = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : ft(+l), a) : r;
  }, a.endAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : ft(+l), a) : i;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : ft(+l), a) : s;
  }, a;
}
function Qe(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Qe.prototype = {
  constructor: Qe,
  scale: function(t) {
    return t === 1 ? this : new Qe(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Qe(this.k, this.x + this.k * t, this.y + this.k * e);
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
Qe.prototype;
var ic = /* @__PURE__ */ ul('<svg class="pie-chart-svg svelte-42cyhy"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="transparent"></rect><path d="M0,0 l10,10 M0,10 l10,-10" stroke="lightgray" stroke-width="2"></path></pattern></defs></svg>');
const sc = {
  hash: "svelte-42cyhy",
  code: `.pie-chart-svg.svelte-42cyhy {font-size: 1.5em; overflow: visible;width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-42cyhy {max-height:50vh; /* Smaller maximum height on mobile */}
}

@media (max-width: 768px) {.pie-chart-svg.svelte-42cyhy {max-height:60vh; /* Increase from 50vh to use more screen space */}
}`
};
function Xs(t, e) {
  Gr(e, !0), _s(t, sc);
  let n = It(e, "jsonData", 7), r = It(e, "currentRound", 7, 1), i = It(e, "mouseEventType", 15), s = It(e, "mouseData", 15), a = It(e, "mouseY", 15), l = It(e, "requestRoundChange", 7, (v) => {
  }), u = It(e, "candidateColors", 23, () => []);
  const f = 800, o = 800, h = Math.min(f, o) * 0.3, c = f / 2, d = o / 2, p = "Pie", y = "Donut", R = "TextLayer", _ = "#transfer", $ = "url(#cross-hatch)", T = 1.15, M = 0.1, b = 750, P = 800;
  let Y = [], J = [], it = [], rt = 0, H = re(0), F = 0;
  const E = {}, L = "No Further Rankings";
  let G = re(null);
  function ve() {
    const v = at(w(G));
    v.select("#" + p).remove(), v.select("#" + y).remove(), v.select("#" + R).remove();
  }
  function mt(v) {
    l() && (Q = v, l()(v));
  }
  function yt(v) {
    ve(), it = Zt(v), Y = ea(v, p, it, c, d, 0, ct());
  }
  pl(() => {
    console.log("PieChartGraphics component loaded and initialized"), console.log("jsonData is: ", n()), Ge(), setTimeout(
      () => {
        yt(r());
      },
      0
    );
  });
  function Zt(v) {
    const g = xe(v);
    return rt = we(v), g;
  }
  function ct() {
    return h;
  }
  function Ot() {
    return ct() * 1.41;
  }
  function Yt(v) {
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
  function Qt(v, g) {
    if (v === "exhausted") return Yt(g);
    {
      const m = n().results[g - 1].tally;
      return Number(m[v]);
    }
  }
  function pe(v, g) {
    return Qt(v, g).toLocaleString("en-US");
  }
  function wt(v, g) {
    return (Qt(v, g) / rt).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function we(v) {
    const g = n().results[v - 1].tally;
    let m = 0;
    for (let [k, A] of Object.entries(g))
      m += Number(A);
    return m;
  }
  function ge(v, g) {
    if (!v || v < 1 || v > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    const m = n().results[v - 1].tallyResults, k = [];
    for (let A = 0; A < m.length; A++) {
      const C = m[A][g];
      C != null && k.push(C);
    }
    return k;
  }
  function Rt(v) {
    return ge(v, "eliminated");
  }
  function Pt(v) {
    let g = [];
    for (let m = 1; m <= v; m++) g = g.concat(ge(m, "elected"));
    return g;
  }
  function ke(v, g) {
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
  function xe(v) {
    const g = n().results;
    let m = g[Math.max(0, v - 2)].tally;
    const k = [], A = [];
    for (let [S, O] of Object.entries(m))
      k.push({ label: S, value: 0 });
    m = g[v - 1].tally;
    for (let S of k) {
      const O = Number(m[S.label]), I = ke(S.label, v);
      I > 0 ? (A.push({
        label: S.label + _,
        value: I
      }), S.value = O - I, A.push(S)) : (S.value = O, A.push(S));
    }
    const C = Yt(v);
    return A.push({ label: "exhausted", value: C }), A;
  }
  function Ge() {
    const v = at(w(G)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [m, k] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? E[m] = Uf[g] : E[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : E[m] = u()[g % u().length], g++;
      {
        const A = v.clone(!0);
        A.attr("id", m.replaceAll(" ", "-")).select("rect").attr("fill", E[m]), A.select("path").attr("stroke", "#505050");
      }
    }
    E.exhausted = $, E["Inactive Ballots"] = $;
  }
  function sr() {
    at(w(G)).select("#" + y).remove();
  }
  function x(v, g) {
    const m = Sn("global").duration(P);
    g && m.on("end", g), sr(), Gs(v), na(), ia(0, ct()), vn();
  }
  function q(v, g) {
    const m = Sn("global").duration(P);
    g && m.on("end", g), Ks(v);
  }
  function Z(v, g) {
    const m = Sn("global").duration(P);
    g && m.on("end", g), Dt(v), hn(ct());
  }
  function K() {
    vn(), z = !1;
  }
  let z = !1;
  function st() {
    if (z) {
      console.warn("busy animating");
      return;
    }
    z = !0, F = r(), xt();
  }
  function xt() {
    W(H, 0);
    const v = F < n().results.length - 1 ? xt : K;
    x(F, () => {
      q(F, () => {
        F++, mt(F), Z(F, v);
      });
    });
  }
  zr(() => {
    te();
  });
  let Q = 0;
  function te() {
    if (console.log(`previous round was ${Q}, currentRound is ${r()}`), z) {
      console.log("gotoNextRound: busy animating");
      return;
    }
    Q != r() && (Q == r() - 1 && Q > 0 ? _e() : zt(r()), Q = r());
  }
  function zt(v) {
    if (console.log("setRoundFn called"), z) {
      console.warn("busy animating");
      return;
    }
    W(H, 0), yt(v);
  }
  function _e() {
    if (console.log("animateOneRoundFn called"), z) {
      console.warn("busy animating");
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't anitmate to round ${r()}`);
      return;
    }
    if (F = r(), F > n().results.length) {
      vn(), z = !1;
      return;
    }
    z = !0, w(H) === 0 ? x(F - 1, () => {
      q(F - 1, () => {
        Z(F, K);
      });
    }) : w(H) === 1 ? q(F - 1, () => {
      Z(F, K);
    }) : w(H) === 2 && Z(F, K), W(H, 0);
  }
  function lt() {
    if (console.log(`animateOnePhaseFn called, currentRound = ${r()}, displayPhase = ${w(H)}`), r() > n().results.length) {
      vn(), z = !1;
      return;
    }
    z || (z = !0, W(H, (w(H) + 1) % 3), F = r(), w(H) === 1 ? x(F, K) : w(H) === 2 ? q(F, K) : w(H) === 0 ? (F++, mt(F), Z(F, K)) : (z = !1, console.warn("displayPhase out of range at ", w(H))));
  }
  function Dt(v) {
    it = xe(v), Y = sa(v, p, it, 0, ct(), !0);
  }
  function hn(v, g) {
    _r().sort(null).value((O) => O.value);
    const m = at(w(G)).select("#" + y), k = ne().outerRadius(v).innerRadius(v - 1), A = m.selectAll(".slice");
    let C = A.size();
    function S() {
      C--, C === 0 && ra();
    }
    A.select("path").transition("global").duration(b).attr("d", (O) => k(O)).on("end", (O) => S());
  }
  function Gs(v) {
    const g = Js(v, Y);
    J = ii(v, y, g, c, d, ct(), Ot(), !1, !0);
  }
  function Ks(v) {
    const g = Qs(v, J, Y);
    J = si(
      v,
      y,
      g,
      /* previousDonutInfoGlobal, */
      ct(),
      Ot(),
      !1
    );
  }
  function dn(v) {
    const g = v.data.label;
    return E[g.split("#")[0]];
  }
  function Ws(v) {
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
  function Js(v, g) {
    const m = [], k = rt, A = n().results[v - 1].tallyResults;
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
        let et;
        const Ut = g.find((nt) => nt.data.label == D);
        if (Ut)
          et = structuredClone(Ut);
        else if (D == "exhausted")
          et = {
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
        et.startAngle = V, V = et.endAngle = V + N, et.index = C, et.data.label = `${et.data.label}#${C}`, m.push(et);
      }
    }
    return m;
  }
  function Zs(v, g, m) {
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
  function Qs(v, g, m) {
    const k = [], A = rt, C = Ws(v), S = Zs(C, A, m);
    for (let [O, I] of g.entries()) {
      const V = structuredClone(I), D = I.endAngle - I.startAngle, B = m.find((et) => I.data.label.indexOf(et.data.label) === 0);
      if (B) {
        const et = B.data.label;
        V.startAngle = S[et], S[et] += D, V.endAngle = V.startAngle + D;
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
  function ri(v, g, m, k, A, C) {
    const O = at(w(G)).append("g").attr("id", R).attr("transform", `translate(${m}, ${k})`), I = ne().innerRadius(A * T).outerRadius(A * T);
    O.selectAll("text").data(g).enter().each(function(V) {
      V.endAngle - V.startAngle < M || V.data.label.includes(_) || at(this).append("g").attr("id", (D) => D.data.label).classed("eliminated", (D) => C.includes(D.data.label.split("#")[0]) || D.data.label.includes(_)).each(function(D, B) {
        D.data.label === "exhausted" && at(this).on("mouseenter", (et, Ut) => aa(et)).on("mouseleave", (et, Ut) => la());
      }).append("text").attr("transform", (D) => `translate(${I.centroid(D)})`).attr("text-anchor", (D) => ar(D.startAngle, D.endAngle)).text((D) => D.data.label === "exhausted" ? L : D.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((D) => pe(D.data.label, v) + " (" + wt(D.data.label, v) + ")");
    });
  }
  function ta(v, g, m, k) {
    const C = at(w(G)).select("#" + R), S = C.selectAll("tspan"), O = C.selectAll("g").data(g, (B) => B.data.label).classed("eliminated", (B) => k.includes(B.data.label.split("#")[0]) || B.data.label.includes(_)), I = ne().innerRadius(m * T).outerRadius(m * T + 1);
    S.transition("global").duration(b).attr("transform", (B) => `translate(${I.centroid(B)})`).attr("text-anchor", (B) => ar(B.startAngle, B.endAngle)), O.select("text").transition("global").duration(b).attr("transform", (B) => `translate(${I.centroid(B)})`).attr("text-anchor", (B) => ar(B.startAngle, B.endAngle)).on("end", (B) => D());
    let V = O.size();
    function D(B) {
      V--, V === 0 && (C.remove(), ri(v, g, c, d, m, k));
    }
  }
  function ea(v, g, m, k, A, C, S, O = !0, I = !1) {
    const D = _r().sort(null).value((B) => B.value)(m);
    return ii(v, g, D, k, A, C, S, O, I), D;
  }
  function vn() {
    at(w(G)).select("#" + p).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function ii(v, g, m, k, A, C, S, O, I) {
    const V = Rt(v), D = Pt(v), Ut = at(w(G)).attr("viewBox", `0 0 ${f} ${o}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${k}, ${A})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (N) => V.includes(N.data.label.split("#")[0]) || N.data.label.includes(_)).classed("elected", (N) => D.includes(N.data.label.split("#")[0]) && !N.data.label.includes(_)).attr("id", (N) => N.data.label).on("mouseenter", (N, nt) => or(N, nt)).on("mouseleave", (N, nt) => ur(N, nt)), Ke = ne().outerRadius(S).innerRadius(C);
    if (I) {
      const N = ne().outerRadius(C + 1).innerRadius(C);
      Ut.append("path").attr("d", N).transition("global").duration(b).attr("d", (nt) => Ke(nt)).attr("fill", (nt) => candidateColors[nt]).on("end", (nt) => lr());
    } else {
      const color = candidateColors;
      Ut.append("path").attr("d", (N) => Ke(N)).attr("fill", (N) => dn(N)), lr();
    }
    return O && ri(v, m, k, A, S, V), m;
  }
  function na() {
    const m = at(w(G)).select("#" + R).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function ra() {
    const m = at(w(G)).select("#" + R).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function ia(v, g) {
    const A = at(w(G)).select("#" + p).selectAll(".eliminated"), C = ne().innerRadius(v), S = ne().outerRadius(g);
    A.classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(O) {
      const I = De(g, v);
      return function(V) {
        return S.innerRadius(I(V)), S(O);
      };
    }).attr("fill", (O) => `url(#${O.data.label.split("#")[0].replaceAll(" ", "-")})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(b).attrTween("d", function(O) {
      const I = De(g, v);
      return function(V) {
        return C.outerRadius(I(V)), C(O);
      };
    }).attr("fill", (O) => dn(O));
  }
  function ar(v, g) {
    const m = (v + g) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function lr() {
    at(w(G)).select("#" + R).raise().append("g").remove();
  }
  function sa(v, g, m, k, A, C) {
    const O = _r().sort(null).value((I) => I.value)(m);
    return si(
      v,
      g,
      O,
      /* previousPieInfo, */
      k,
      A,
      C
    ), O;
  }
  function si(v, g, m, k, A, C) {
    const S = Rt(v), O = Pt(v), I = ne().outerRadius(A).innerRadius(k).startAngle((N) => N.startAngle).endAngle((N) => N.endAngle), V = ne().outerRadius(A).innerRadius(k), B = at(w(G)).select("#" + g);
    B.selectAll(".slice").attr("prevStart", (N) => N.startAngle).attr("prevEnd", (N) => N.endAngle);
    const et = B.selectAll(".slice").data(m, (N) => N.data.label);
    et.enter().append("g").attr("class", "slice").attr("id", (N) => N.data.label).classed("eliminated", !0).on("mouseenter", (N, nt) => or(N, nt)).on("mouseleave", (N, nt) => ur(N, nt)).append("path").attr("d", (N) => V(N)).attr("fill", (N) => dn(N)), et.classed("eliminated", (N) => S.includes(N.data.label.split("#")[0])).classed("elected", (N) => O.includes(N.data.label.split("#")[0])).on("mouseenter", (N, nt) => or(N, nt)).on("mouseleave", (N, nt) => ur(N, nt));
    let Ut = et.size();
    function Ke() {
      Ut--, Ut <= 0 && (lr(), B.selectAll(".finished").remove());
    }
    return et.select("path").transition("global").duration(b).attrTween("d", function(N) {
      const nt = Number(at(this.parentNode).attr("prevStart")), oa = Number(at(this.parentNode).attr("prevEnd")), ua = De(nt, N.startAngle), fa = De(oa, N.endAngle);
      return (li) => (I.startAngle(ua(li)).endAngle(fa(li)), I(N));
    }).on("end", Ke), C && ta(v, m, A, S), m;
  }
  function or(v, g) {
    s(g.data.label.split("#")[0]), i("enter"), a(v.clientY);
  }
  function ur(v, g) {
    s(g.data.label.split("#")[0]), i("leave");
  }
  function aa(v, g) {
    i("show-exhausted"), a(v.clientY);
  }
  function la(v, g) {
    i("hide-exhausted");
  }
  var ai = ic();
  return Rn(ai, (v) => W(G, v), () => w(G)), Xt(t, ai), Kr({
    pieColors: E,
    exhaustedLabel: L,
    countExhaustedVotes: Yt,
    getEliminatedCandidates: Rt,
    getElectedCandidates: Pt,
    runFullAnimationFn: st,
    animateOnePhaseFn: lt,
    get jsonData() {
      return n();
    },
    set jsonData(v) {
      n(v), kt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(v = 1) {
      r(v), kt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(v) {
      i(v), kt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(v) {
      s(v), kt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(v) {
      a(v), kt();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(v = (g) => {
    }) {
      l(v), kt();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(v = []) {
      u(v), kt();
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
function ac(t) {
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
var lc = /* @__PURE__ */ je("<span> </span> <!>", 1), oc = /* @__PURE__ */ je("About to eliminate: <!>", 1), uc = /* @__PURE__ */ je("<span> </span> <!>", 1), fc = /* @__PURE__ */ je("Elected: <!>", 1), cc = /* @__PURE__ */ je("<span> </span> <br>", 1), hc = /* @__PURE__ */ je('<div class="animation-button-container svelte-e07ae5"><button class="next-button">Animate All</button> <button class="next-button">One Small Step</button></div> <div class="common-header svelte-e07ae5"></div> <div class="page-container svelte-e07ae5"><div class="visualizations-container svelte-e07ae5"><div class="pie-chart-container svelte-e07ae5"><!></div></div> <h3 class="svelte-e07ae5"> </h3> <h4 class="svelte-e07ae5"><!> <!></h4></div> <div class="tooltip svelte-e07ae5"><h3 class="svelte-e07ae5"> </h3> <!></div> <div class="tooltip svelte-e07ae5"> <br> these ballots have already been eliminated.</div>', 1);
const dc = {
  hash: "svelte-e07ae5",
  code: `.page-container.svelte-e07ae5 {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-e07ae5 {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-e07ae5 {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;left:50%;transform:translate(-50%);font-weight:normal;opacity:0;}.tooltip.svelte-e07ae5 h3:where(.svelte-e07ae5) {text-align:center;}.animation-button-container.svelte-e07ae5 {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.pie-chart-container.svelte-e07ae5 {
  /* width: 90%; */
  /* min-width: 800px; /* Larger minimum size */width:100%; /* Change from 90% to 100% */min-width:auto; /* Remove the 800px minimum */flex-grow:0; /* Don't grow beyond specified width */margin:0 auto;margin-right:40px; /* Add extra space on right */margin-top:-3vh;}.visualizations-container.svelte-e07ae5 {display:flex;justify-content:space-between;width:100%;padding:0 20px;
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
@media (max-width: 1300px) {.visualizations-container.svelte-e07ae5 {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-e07ae5 {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-e07ae5 {padding:0; /* Remove padding on small screens */}
}h3.svelte-e07ae5, h4.svelte-e07ae5 {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-e07ae5 {margin-bottom:0.5rem;}h3.svelte-e07ae5, h4.svelte-e07ae5 {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function vc(t, e) {
  Gr(e, !0), _s(t, dc);
  const n = 0.85;
  let r = It(e, "electionSummary", 7), i = It(e, "currentRound", 7, 1), s = It(e, "requestRoundChange", 7, (x) => {
  }), a = It(e, "candidateColors", 23, () => []), l = re(null), u = re(null), f = re(""), o = re($t([])), h = re(""), c = re(""), d = re(0), p = /* @__PURE__ */ Zn(() => y(r()));
  function y(x) {
    if (typeof x == "string")
      try {
        x = JSON.parse(x);
      } catch (q) {
        return console.error("Failed to parse JSON string:", q), {};
      }
    return console.log("RCtabSummary object status: ", ac(x)), x || {};
  }
  function R(x) {
    s() ? (console.log("onRoundChange in PieChart: passing on request for round ", x), s()(x)) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function _() {
    switch (w(h)) {
      case "enter":
        ((x) => (W(o, $t(x[0])), W(f, $t(x[1]))))(T(w(c), i())), w(l) && (w(l).style.top = String(w(d) || 20) + "px", w(l).style.opacity = String(n));
        break;
      case "leave":
        w(l) && (w(l).style.opacity = "0"), W(o, $t([])), W(f, "");
        break;
      case "show-exhausted":
        w(u) && (w(u).style.top = String(w(d) || 20) + "px", w(u).style.opacity = String(n));
        break;
      case "hide-exhausted":
        w(u) && (w(u).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", w(h));
        break;
    }
  }
  zr(() => _());
  function $(x, q) {
    return x == 1 ? q ? "vote was" : "vote will be" : q ? "votes were" : "votes will be";
  }
  function T(x, q) {
    const Z = [], K = x === "exhausted" ? H() : x;
    let z;
    x == "exhausted" ? z = J(1) : z = w(p).results[0].tally[x], Z.push(`${K} started with ${z} votes.`);
    for (let st = 1; st <= q; st++) {
      st === q && (x == "exhausted" ? z = J(q) : z = w(p).results[q - 1].tally[x], Z.push(`${K} has ${z} votes at round ${q}.`));
      const xt = w(p).results[st - 1].tallyResults;
      for (let Q = 0; Q < xt.length; Q++) {
        const te = xt[Q].transfers, zt = xt[Q].eliminated, _e = xt[Q].elected;
        if (zt)
          zt === x && Z.push(`${K} will be eliminated on round ${st}.`);
        else if (x === _e && (Z.push(`${K} was elected on round ${st}.`), te))
          for (let [Dt, hn] of Object.entries(te))
            Z.push(`${hn} ${$(Number(hn), st < q)} transferred to ${Dt} on round ${st}.`);
        const lt = zt || _e;
        if (lt) {
          const Dt = Number(te[x]);
          Dt && Z.push(`${Dt} ${$(Dt, st < q)} transferred from ${lt} on round ${st}.`);
        }
      }
    }
    return [Z, K];
  }
  function M() {
    let x = 0;
    for (let q = 1; q <= w(p).results.length; q++) {
      const Z = w(p).results[q - 1].tallyResults;
      for (let K = 0; K < Z.length; K++)
        Z[K].elected && x++;
    }
    return x;
  }
  let b;
  function P(x) {
    return b ? b.getEliminatedCandidates(x) : [];
  }
  function Y(x) {
    return b ? b.getElectedCandidates(x) : [];
  }
  function J(x) {
    return b ? b.countExhaustedVotes(x) : 0;
  }
  function it() {
    b && b.animateOnePhaseFn && b.animateOnePhaseFn();
  }
  function rt() {
    b && b.runFullAnimationFn && b.runFullAnimationFn();
  }
  function H() {
    return b ? b.exhaustedLabel : "";
  }
  function F() {
    return b ? b.pieColors : {};
  }
  var E = hc(), L = Me(E), G = Ct(L);
  G.__click = rt;
  var ve = Nt(G, 2);
  ve.__click = it, Et(L);
  var mt = Nt(L, 4), yt = Ct(mt), Zt = Ct(yt), ct = Ct(Zt);
  Rn(
    Xs(ct, {
      get jsonData() {
        return w(p);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: R,
      get candidateColors() {
        return a();
      },
      get mouseEventType() {
        return w(h);
      },
      set mouseEventType(x) {
        W(h, $t(x));
      },
      get mouseData() {
        return w(c);
      },
      set mouseData(x) {
        W(c, $t(x));
      },
      get mouseY() {
        return w(d);
      },
      set mouseY(x) {
        W(d, $t(x));
      }
    }),
    (x) => b = x,
    () => b
  ), Et(Zt), Et(yt);
  var Ot = Nt(yt, 2), Yt = Ct(Ot);
  Et(Ot);
  var Qt = Nt(Ot, 2), pe = Ct(Qt);
  {
    var wt = (x) => {
      var q = oc(), Z = Nt(Me(q));
      dr(Z, 17, () => P(i()), hr, (K, z, st) => {
        var xt = lc(), Q = Me(xt), te = Ct(Q, !0);
        Et(Q);
        var zt = Nt(Q, 2);
        {
          var _e = (lt) => {
            var Dt = _i(", ");
            Xt(lt, Dt);
          };
          _n(zt, (lt) => {
            st < P(i()).length - 1 && lt(_e);
          });
        }
        pn(
          (lt) => {
            yi(Q, "color", lt), Oe(te, w(z));
          },
          [() => F()[w(z)]]
        ), Xt(K, xt);
      }), Xt(x, q);
    };
    _n(pe, (x) => {
      P(i()).length > 0 && x(wt);
    });
  }
  var we = Nt(pe, 2);
  {
    var ge = (x) => {
      var q = fc(), Z = Nt(Me(q));
      dr(Z, 17, () => Y(i()), hr, (K, z, st) => {
        var xt = uc(), Q = Me(xt), te = Ct(Q, !0);
        Et(Q);
        var zt = Nt(Q, 2);
        {
          var _e = (lt) => {
            var Dt = _i(", ");
            Xt(lt, Dt);
          };
          _n(zt, (lt) => {
            st < Y(i()).length - 1 && lt(_e);
          });
        }
        pn(
          (lt) => {
            yi(Q, "color", lt), Oe(te, w(z));
          },
          [() => F()[w(z)]]
        ), Xt(K, xt);
      }), Xt(x, q);
    };
    _n(we, (x) => {
      Y(i()).length > 0 && x(ge);
    });
  }
  Et(Qt), Et(mt);
  var Rt = Nt(mt, 2), Pt = Ct(Rt), ke = Ct(Pt, !0);
  Et(Pt);
  var xe = Nt(Pt, 2);
  dr(xe, 17, () => w(o), hr, (x, q) => {
    var Z = cc(), K = Me(Z), z = Ct(K, !0);
    Et(K), hi(2), pn(() => Oe(z, w(q))), Xt(x, Z);
  }), Et(Rt), Rn(Rt, (x) => W(l, x), () => w(l));
  var Ge = Nt(Rt, 2), sr = Ct(Ge);
  return hi(2), Et(Ge), Rn(Ge, (x) => W(u, x), () => w(u)), pn(
    (x, q) => {
      Oe(Yt, `${w(p).config.contest ?? ""}, ${x ?? ""} to be elected, Round ${i() ?? ""}.`), Oe(ke, w(f)), Oe(sr, `"${q ?? ""}" means all the candidates ranked on `);
    },
    [M, H]
  ), Xt(t, E), Kr({
    get electionSummary() {
      return r();
    },
    set electionSummary(x) {
      r(x), kt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(x = 1) {
      i(x), kt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(x = (q) => {
    }) {
      s(x), kt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(x = []) {
      a(x), kt();
    }
  });
}
ol(["click"]);
customElements.define("pie-chart", ys(
  vc,
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
