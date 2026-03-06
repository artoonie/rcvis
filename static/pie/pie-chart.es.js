var ll = Object.defineProperty;
var zs = (t) => {
  throw TypeError(t);
};
var ul = (t, e, n) => e in t ? ll(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var lt = (t, e, n) => ul(t, typeof e != "symbol" ? e + "" : e, n), Li = (t, e, n) => e.has(t) || zs("Cannot " + n);
var d = (t, e, n) => (Li(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => e.has(t) ? zs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), D = (t, e, n, r) => (Li(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (Li(t, e, "access private method"), n);
var ya;
typeof window < "u" && ((ya = window.__svelte ?? (window.__svelte = {})).v ?? (ya.v = /* @__PURE__ */ new Set())).add("5");
const fl = 1, cl = 2, hl = 16, dl = 1, pl = 4, vl = 8, gl = 16, _l = 2, vs = "[", yi = "[!", gs = "]", nr = {}, _t = Symbol(), ml = "http://www.w3.org/1999/xhtml", Wi = !1;
var ba = Array.isArray, yl = Array.prototype.indexOf, rr = Array.prototype.includes, wi = Array.from, ai = Object.keys, oi = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, wl = Object.prototype, xl = Array.prototype, bl = Object.getPrototypeOf, Hs = Object.isExtensible;
const $l = () => {
};
function Al(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function $a() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function El(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const xt = 2, Tr = 4, xi = 8, Aa = 1 << 24, je = 16, he = 32, on = 64, Ea = 128, jt = 512, vt = 1024, bt = 2048, ce = 4096, qt = 8192, Xe = 16384, cr = 32768, ir = 65536, Ys = 1 << 17, Ra = 1 << 18, qn = 1 << 19, Rl = 1 << 20, nn = 1 << 25, Pn = 65536, Xi = 1 << 21, _s = 1 << 22, rn = 1 << 23, Er = Symbol("$state"), Ca = Symbol("legacy props"), _n = new class extends Error {
  constructor() {
    super(...arguments);
    lt(this, "name", "StaleReactionError");
    lt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), qr = 3, hr = 8;
function Cl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Tl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Nl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Sl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ml(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Dl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fl(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Il() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ll() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ql() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function bi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Vl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function We(t) {
  j = t;
}
let z;
function Ft(t) {
  if (t === null)
    throw bi(), nr;
  return z = t;
}
function $i() {
  return Ft(/* @__PURE__ */ Ne(z));
}
function Bt(t) {
  if (j) {
    if (/* @__PURE__ */ Ne(z) !== null)
      throw bi(), nr;
    z = t;
  }
}
function Gi(t = 1) {
  if (j) {
    for (var e = t, n = z; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(n);
    z = n;
  }
}
function li(t = !0) {
  for (var e = 0, n = z; ; ) {
    if (n.nodeType === hr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === gs) {
        if (e === 0) return n;
        e -= 1;
      } else (r === vs || r === yi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(n)
    );
    t && n.remove(), n = i;
  }
}
function Ta(t) {
  if (!t || t.nodeType !== hr)
    throw bi(), nr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Na(t) {
  return t === this.v;
}
function zl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Sa(t) {
  return !zl(t, this.v);
}
let Hl = !1, Vt = null;
function sr(t) {
  Vt = t;
}
function ms(t, e = !1, n) {
  Vt = {
    p: Vt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function ys(t) {
  var e = (
    /** @type {ComponentContext} */
    Vt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      eo(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Vt = e.p, t ?? /** @type {T} */
  {};
}
function ka() {
  return !0;
}
let mn = [];
function Ma() {
  var t = mn;
  mn = [], Al(t);
}
function Nn(t) {
  if (mn.length === 0 && !Rr) {
    var e = mn;
    queueMicrotask(() => {
      e === mn && Ma();
    });
  }
  mn.push(t);
}
function Yl() {
  for (; mn.length > 0; )
    Ma();
}
function Pa(t) {
  var e = X;
  if (e === null)
    return V.f |= rn, t;
  if ((e.f & cr) === 0 && (e.f & Tr) === 0)
    throw t;
  ar(t, e);
}
function ar(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ea) !== 0) {
      if ((e.f & cr) === 0)
        throw t;
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    }
    e = e.parent;
  }
  throw t;
}
const Bl = -7169;
function ut(t, e) {
  t.f = t.f & Bl | e;
}
function ws(t) {
  (t.f & jt) !== 0 || t.deps === null ? ut(t, vt) : ut(t, ce);
}
function Da(t) {
  if (t !== null)
    for (const e of t)
      (e.f & xt) === 0 || (e.f & Pn) === 0 || (e.f ^= Pn, Da(
        /** @type {Derived} */
        e.deps
      ));
}
function Fa(t, e, n) {
  (t.f & bt) !== 0 ? e.add(t) : (t.f & ce) !== 0 && n.add(t), Da(t.deps), ut(t, vt);
}
const Yr = /* @__PURE__ */ new Set();
let Y = null, wt = null, Mt = [], Ai = null, Ki = !1, Rr = !1;
var Kn, jn, bn, Zn, Dr, Fr, $n, ze, Jn, Te, ji, Zi, Oa;
const Os = class Os {
  constructor() {
    L(this, Te);
    lt(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    lt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    lt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, Kn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, jn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, bn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    L(this, Zn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, Dr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, Fr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, $n, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, ze, /* @__PURE__ */ new Map());
    lt(this, "is_fork", !1);
    L(this, Jn, !1);
  }
  is_deferred() {
    return this.is_fork || d(this, Zn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    d(this, ze).has(e) || d(this, ze).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = d(this, ze).get(e);
    if (n) {
      d(this, ze).delete(e);
      for (var r of n.d)
        ut(r, bt), ue(r);
      for (r of n.m)
        ut(r, ce), ue(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Mt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      pt(this, Te, ji).call(this, s, n, r);
    if (this.is_deferred()) {
      pt(this, Te, Zi).call(this, r), pt(this, Te, Zi).call(this, n);
      for (const [s, a] of d(this, ze))
        Va(s, a);
    } else {
      for (const s of d(this, Kn)) s();
      d(this, Kn).clear(), d(this, bn) === 0 && pt(this, Te, Oa).call(this), Y = null, Bs(r), Bs(n), (i = d(this, Dr)) == null || i.resolve();
    }
    wt = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== _t && !this.previous.has(e) && this.previous.set(e, n), (e.f & rn) === 0 && (this.current.set(e, e.v), wt == null || wt.set(e, e.v));
  }
  activate() {
    Y = this, this.apply();
  }
  deactivate() {
    Y === this && (Y = null, wt = null);
  }
  flush() {
    if (this.activate(), Mt.length > 0) {
      if (Ia(), Y !== null && Y !== this)
        return;
    } else d(this, bn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of d(this, jn)) e(this);
    d(this, jn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    D(this, bn, d(this, bn) + 1), e && D(this, Zn, d(this, Zn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    D(this, bn, d(this, bn) - 1), e && D(this, Zn, d(this, Zn) - 1), !d(this, Jn) && (D(this, Jn, !0), Nn(() => {
      D(this, Jn, !1), this.is_deferred() ? Mt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of d(this, Fr))
      d(this, $n).delete(e), ut(e, bt), ue(e);
    for (const e of d(this, $n))
      ut(e, ce), ue(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    d(this, Kn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    d(this, jn).add(e);
  }
  settled() {
    return (d(this, Dr) ?? D(this, Dr, $a())).promise;
  }
  static ensure() {
    if (Y === null) {
      const e = Y = new Os();
      Yr.add(Y), Rr || Nn(() => {
        Y === e && e.flush();
      });
    }
    return Y;
  }
  apply() {
  }
};
Kn = new WeakMap(), jn = new WeakMap(), bn = new WeakMap(), Zn = new WeakMap(), Dr = new WeakMap(), Fr = new WeakMap(), $n = new WeakMap(), ze = new WeakMap(), Jn = new WeakMap(), Te = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ji = function(e, n, r) {
  e.f ^= vt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (he | on)) !== 0, l = o && (a & vt) !== 0, u = l || (a & qt) !== 0 || d(this, ze).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= vt : s !== null && (a & (Tr | xi | Aa)) !== 0 ? s.b.defer_effect(i) : (a & Tr) !== 0 ? n.push(i) : Vr(i) && ((a & je) !== 0 && d(this, $n).add(i), lr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var h = i.parent;
    for (i = i.next; i === null && h !== null; )
      h === s && (s = null), i = h.next, h = h.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Zi = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Fa(e[n], d(this, Fr), d(this, $n));
}, Oa = function() {
  var i;
  if (Yr.size > 1) {
    this.previous.clear();
    var e = wt, n = !0;
    for (const s of Yr) {
      if (s === this) {
        n = !1;
        continue;
      }
      const a = [];
      for (const [l, u] of this.current) {
        if (s.current.has(l))
          if (n && u !== s.current.get(l))
            s.current.set(l, u);
          else
            continue;
        a.push(l);
      }
      if (a.length === 0)
        continue;
      const o = [...s.current.keys()].filter((l) => !this.current.has(l));
      if (o.length > 0) {
        var r = Mt;
        Mt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          La(f, o, l, u);
        if (Mt.length > 0) {
          Y = s, s.apply();
          for (const f of Mt)
            pt(i = s, Te, ji).call(i, f, [], []);
          s.deactivate();
        }
        Mt = r;
      }
    }
    Y = null, wt = e;
  }
  this.committed = !0, Yr.delete(this);
};
let Ge = Os;
function mt(t) {
  var e = Rr;
  Rr = !0;
  try {
    for (var n; ; ) {
      if (Yl(), Mt.length === 0 && (Y == null || Y.flush(), Mt.length === 0))
        return Ai = null, /** @type {T} */
        n;
      Ia();
    }
  } finally {
    Rr = e;
  }
}
function Ia() {
  Ki = !0;
  var t = null;
  try {
    for (var e = 0; Mt.length > 0; ) {
      var n = Ge.ensure();
      if (e++ > 1e3) {
        var r, i;
        Ul();
      }
      n.process(Mt), sn.clear();
    }
  } finally {
    Mt = [], Ki = !1, Ai = null;
  }
}
function Ul() {
  try {
    Pl();
  } catch (t) {
    ar(t, Ai);
  }
}
let se = null;
function Bs(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Xe | qt)) === 0 && Vr(r) && (se = /* @__PURE__ */ new Set(), lr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && io(r), (se == null ? void 0 : se.size) > 0)) {
        sn.clear();
        for (const i of se) {
          if ((i.f & (Xe | qt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            se.has(a) && (se.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Xe | qt)) === 0 && lr(l);
          }
        }
        se.clear();
      }
    }
    se = null;
  }
}
function La(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & xt) !== 0 ? La(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (_s | je)) !== 0 && (s & bt) === 0 && qa(i, e, r) && (ut(i, bt), ue(
        /** @type {Effect} */
        i
      ));
    }
}
function qa(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (rr.call(e, i))
        return !0;
      if ((i.f & xt) !== 0 && qa(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function ue(t) {
  for (var e = Ai = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ki && e === X && (n & je) !== 0 && (n & Ra) === 0)
      return;
    if ((n & (on | he)) !== 0) {
      if ((n & vt) === 0) return;
      e.f ^= vt;
    }
  }
  Mt.push(e);
}
function Va(t, e) {
  if (!((t.f & he) !== 0 && (t.f & vt) !== 0)) {
    (t.f & bt) !== 0 ? e.d.push(t) : (t.f & ce) !== 0 && e.m.push(t), ut(t, vt);
    for (var n = t.first; n !== null; )
      Va(n, e), n = n.next;
  }
}
function Wl(t) {
  let e = 0, n = Dn(0), r;
  return () => {
    $s() && (w(n), Es(() => (e === 0 && (r = Ci(() => t(() => Cr(n)))), e += 1, () => {
      Nn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Cr(n));
      });
    })));
  };
}
var Xl = ir | qn | Ea;
function Gl(t, e, n) {
  new Kl(t, e, n);
}
var It, Or, xe, An, be, Xt, kt, $e, He, en, En, Ye, Qn, Rn, tr, er, Be, _i, ct, za, Ha, Ji, jr, Zr, Qi;
class Kl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    L(this, ct);
    /** @type {Boundary | null} */
    lt(this, "parent");
    lt(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, It);
    /** @type {TemplateNode | null} */
    L(this, Or, j ? z : null);
    /** @type {BoundaryProps} */
    L(this, xe);
    /** @type {((anchor: Node) => void)} */
    L(this, An);
    /** @type {Effect} */
    L(this, be);
    /** @type {Effect | null} */
    L(this, Xt, null);
    /** @type {Effect | null} */
    L(this, kt, null);
    /** @type {Effect | null} */
    L(this, $e, null);
    /** @type {DocumentFragment | null} */
    L(this, He, null);
    /** @type {TemplateNode | null} */
    L(this, en, null);
    L(this, En, 0);
    L(this, Ye, 0);
    L(this, Qn, !1);
    L(this, Rn, !1);
    /** @type {Set<Effect>} */
    L(this, tr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, er, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, Be, null);
    L(this, _i, Wl(() => (D(this, Be, Dn(d(this, En))), () => {
      D(this, Be, null);
    })));
    D(this, It, e), D(this, xe, n), D(this, An, r), this.parent = /** @type {Effect} */
    X.b, this.is_pending = !!d(this, xe).pending, D(this, be, Rs(() => {
      if (X.b = this, j) {
        const s = d(this, Or);
        $i(), /** @type {Comment} */
        s.nodeType === hr && /** @type {Comment} */
        s.data === yi ? pt(this, ct, Ha).call(this) : (pt(this, ct, za).call(this), d(this, Ye) === 0 && (this.is_pending = !1));
      } else {
        var i = pt(this, ct, Ji).call(this);
        try {
          D(this, Xt, Kt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        d(this, Ye) > 0 ? pt(this, ct, Zr).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = d(this, en)) == null || s.remove();
      };
    }, Xl)), j && D(this, It, z);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Fa(e, d(this, tr), d(this, er));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!d(this, xe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    pt(this, ct, Qi).call(this, e), D(this, En, d(this, En) + e), !(!d(this, Be) || d(this, Qn)) && (D(this, Qn, !0), Nn(() => {
      D(this, Qn, !1), d(this, Be) && or(d(this, Be), d(this, En));
    }));
  }
  get_effect_pending() {
    return d(this, _i).call(this), w(
      /** @type {Source<number>} */
      d(this, Be)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = d(this, xe).onerror;
    let r = d(this, xe).failed;
    if (d(this, Rn) || !n && !r)
      throw e;
    d(this, Xt) && (Tt(d(this, Xt)), D(this, Xt, null)), d(this, kt) && (Tt(d(this, kt)), D(this, kt, null)), d(this, $e) && (Tt(d(this, $e)), D(this, $e, null)), j && (Ft(
      /** @type {TemplateNode} */
      d(this, Or)
    ), Gi(), Ft(li()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Vl();
        return;
      }
      i = !0, s && ql(), Ge.ensure(), D(this, En, 0), d(this, $e) !== null && Sn(d(this, $e), () => {
        D(this, $e, null);
      }), this.is_pending = this.has_pending_snippet(), D(this, Xt, pt(this, ct, jr).call(this, () => (D(this, Rn, !1), Kt(() => d(this, An).call(this, d(this, It)))))), d(this, Ye) > 0 ? pt(this, ct, Zr).call(this) : this.is_pending = !1;
    };
    Nn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        ar(o, d(this, be) && d(this, be).parent);
      }
      r && D(this, $e, pt(this, ct, jr).call(this, () => {
        Ge.ensure(), D(this, Rn, !0);
        try {
          return Kt(() => {
            r(
              d(this, It),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return ar(
            o,
            /** @type {Effect} */
            d(this, be).parent
          ), null;
        } finally {
          D(this, Rn, !1);
        }
      }));
    });
  }
}
It = new WeakMap(), Or = new WeakMap(), xe = new WeakMap(), An = new WeakMap(), be = new WeakMap(), Xt = new WeakMap(), kt = new WeakMap(), $e = new WeakMap(), He = new WeakMap(), en = new WeakMap(), En = new WeakMap(), Ye = new WeakMap(), Qn = new WeakMap(), Rn = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), Be = new WeakMap(), _i = new WeakMap(), ct = new WeakSet(), za = function() {
  try {
    D(this, Xt, Kt(() => d(this, An).call(this, d(this, It))));
  } catch (e) {
    this.error(e);
  }
}, Ha = function() {
  const e = d(this, xe).pending;
  e && (D(this, kt, Kt(() => e(d(this, It)))), Nn(() => {
    var n = pt(this, ct, Ji).call(this);
    D(this, Xt, pt(this, ct, jr).call(this, () => (Ge.ensure(), Kt(() => d(this, An).call(this, n))))), d(this, Ye) > 0 ? pt(this, ct, Zr).call(this) : (Sn(
      /** @type {Effect} */
      d(this, kt),
      () => {
        D(this, kt, null);
      }
    ), this.is_pending = !1);
  }));
}, Ji = function() {
  var e = d(this, It);
  return this.is_pending && (D(this, en, Jt()), d(this, It).before(d(this, en)), e = d(this, en)), e;
}, /**
 * @param {() => Effect | null} fn
 */
jr = function(e) {
  var n = X, r = V, i = Vt;
  Ce(d(this, be)), Qt(d(this, be)), sr(d(this, be).ctx);
  try {
    return e();
  } catch (s) {
    return Pa(s), null;
  } finally {
    Ce(n), Qt(r), sr(i);
  }
}, Zr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    d(this, xe).pending
  );
  d(this, Xt) !== null && (D(this, He, document.createDocumentFragment()), d(this, He).append(
    /** @type {TemplateNode} */
    d(this, en)
  ), oo(d(this, Xt), d(this, He))), d(this, kt) === null && D(this, kt, Kt(() => e(d(this, It))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Qi = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pt(n = this.parent, ct, Qi).call(n, e);
    return;
  }
  if (D(this, Ye, d(this, Ye) + e), d(this, Ye) === 0) {
    this.is_pending = !1;
    for (const r of d(this, tr))
      ut(r, bt), ue(r);
    for (const r of d(this, er))
      ut(r, ce), ue(r);
    d(this, tr).clear(), d(this, er).clear(), d(this, kt) && Sn(d(this, kt), () => {
      D(this, kt, null);
    }), d(this, He) && (d(this, It).before(d(this, He)), D(this, He, null));
  }
};
function jl(t, e, n, r) {
  const i = Ei;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = Y, o = (
    /** @type {Effect} */
    X
  ), l = Zl(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (v) {
      (o.f & Xe) === 0 && ar(v, o);
    }
    a == null || a.deactivate(), ts();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ Jl(c))).then((c) => f([...e.map(i), ...c])).catch((c) => ar(c, o));
  }
  u ? u.then(h) : h();
}
function Zl() {
  var t = X, e = V, n = Vt, r = Y;
  return function(s = !0) {
    Ce(t), Qt(e), sr(n), s && (r == null || r.activate());
  };
}
function ts() {
  Ce(null), Qt(null), sr(null);
}
// @__NO_SIDE_EFFECTS__
function Ei(t) {
  var e = xt | bt, n = V !== null && (V.f & xt) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return X !== null && (X.f |= qn), {
    ctx: Vt,
    deps: null,
    effects: null,
    equals: Na,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      _t
    ),
    wv: 0,
    parent: n ?? X,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Jl(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    X
  );
  r === null && Tl();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Dn(
    /** @type {V} */
    _t
  ), o = !V, l = /* @__PURE__ */ new Map();
  return lu(() => {
    var v;
    var u = $a();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === Y && f.committed && f.deactivate(), ts();
      });
    } catch (g) {
      u.reject(g), ts();
    }
    var f = (
      /** @type {Batch} */
      Y
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (v = l.get(f)) == null || v.reject(_n), l.delete(f), l.set(f, u);
    }
    const c = (g, m = void 0) => {
      if (f.activate(), m)
        m !== _n && (a.f |= rn, or(a, m));
      else {
        (a.f & rn) !== 0 && (a.f ^= rn), or(a, g);
        for (const [b, $] of l) {
          if (l.delete(b), b === f) break;
          $.reject(_n);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), su(() => {
    for (const u of l.values())
      u.reject(_n);
  }), new Promise((u) => {
    function f(h) {
      function c() {
        h === s ? u(a) : f(s);
      }
      h.then(c, c);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Bn(t) {
  const e = /* @__PURE__ */ Ei(t);
  return lo(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ya(t) {
  const e = /* @__PURE__ */ Ei(t);
  return e.equals = Sa, e;
}
function Ql(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Tt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function tu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & xt) === 0)
      return (e.f & Xe) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function xs(t) {
  var e, n = X;
  Ce(tu(t));
  try {
    t.f &= ~Pn, Ql(t), e = ho(t);
  } finally {
    Ce(n);
  }
  return e;
}
function Ba(t) {
  var e = xs(t);
  if (!t.equals(e) && (t.wv = fo(), (!(Y != null && Y.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    ut(t, vt);
    return;
  }
  an || (wt !== null ? ($s() || Y != null && Y.is_fork) && wt.set(t, e) : ws(t));
}
function eu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(_n), r.teardown = $l, r.ac = null, Nr(r, 0), Cs(r));
}
function Ua(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && lr(e);
}
let es = /* @__PURE__ */ new Set();
const sn = /* @__PURE__ */ new Map();
let Wa = !1;
function Dn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Na,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function yt(t, e) {
  const n = Dn(t);
  return lo(n), n;
}
// @__NO_SIDE_EFFECTS__
function Xa(t, e = !1, n = !0) {
  const r = Dn(t);
  return e || (r.equals = Sa), r;
}
function Q(t, e, n = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!fe || (V.f & Ys) !== 0) && ka() && (V.f & (xt | je | _s | Ys)) !== 0 && (Zt === null || !rr.call(Zt, t)) && Ll();
  let r = n ? yn(e) : e;
  return or(t, r);
}
function or(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    an ? sn.set(t, e) : sn.set(t, n), t.v = e;
    var r = Ge.ensure();
    if (r.capture(t, n), (t.f & xt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & bt) !== 0 && xs(i), ws(i);
    }
    t.wv = fo(), Ga(t, bt), X !== null && (X.f & vt) !== 0 && (X.f & (he | on)) === 0 && (Wt === null ? cu([t]) : Wt.push(t)), !r.is_fork && es.size > 0 && !Wa && nu();
  }
  return e;
}
function nu() {
  Wa = !1;
  for (const t of es)
    (t.f & vt) !== 0 && ut(t, ce), Vr(t) && lr(t);
  es.clear();
}
function Cr(t) {
  Q(t, t.v + 1);
}
function Ga(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & bt) === 0;
      if (o && ut(s, e), (a & xt) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        wt == null || wt.delete(l), (a & Pn) === 0 && (a & jt && (s.f |= Pn), Ga(l, ce));
      } else o && ((a & je) !== 0 && se !== null && se.add(
        /** @type {Effect} */
        s
      ), ue(
        /** @type {Effect} */
        s
      ));
    }
}
function yn(t) {
  if (typeof t != "object" || t === null || Er in t)
    return t;
  const e = bl(t);
  if (e !== wl && e !== xl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ba(t), i = /* @__PURE__ */ yt(0), s = kn, a = (o) => {
    if (kn === s)
      return o();
    var l = V, u = kn;
    Qt(null), Xs(s);
    var f = o();
    return Qt(l), Xs(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ yt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ol();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ yt(u.value);
          return n.set(l, h), h;
        }) : Q(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ yt(_t));
            n.set(l, f), Cr(i);
          }
        } else
          Q(u, _t), Cr(i);
        return !0;
      },
      get(o, l, u) {
        var v;
        if (l === Er)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (v = Tn(o, l)) != null && v.writable) && (f = a(() => {
          var g = yn(h ? o[l] : _t), m = /* @__PURE__ */ yt(g);
          return m;
        }), n.set(l, f)), f !== void 0) {
          var c = w(f);
          return c === _t ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = w(f));
        } else if (u === void 0) {
          var h = n.get(l), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== _t)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var c;
        if (l === Er)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== _t || Reflect.has(o, l);
        if (u !== void 0 || X !== null && (!f || (c = Tn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var v = f ? yn(o[l]) : _t, g = /* @__PURE__ */ yt(v);
            return g;
          }), n.set(l, u));
          var h = w(u);
          if (h === _t)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var T;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = n.get(v + "");
            g !== void 0 ? Q(g, _t) : v in o && (g = a(() => /* @__PURE__ */ yt(_t)), n.set(v + "", g));
          }
        if (h === void 0)
          (!c || (T = Tn(o, l)) != null && T.writable) && (h = a(() => /* @__PURE__ */ yt(void 0)), Q(h, yn(u)), n.set(l, h));
        else {
          c = h.v !== _t;
          var m = a(() => yn(u));
          Q(h, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= $.v && Q($, C + 1);
          }
          Cr(i);
        }
        return !0;
      },
      ownKeys(o) {
        w(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== _t;
        });
        for (var [u, f] of n)
          f.v !== _t && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Il();
      }
    }
  );
}
var Us, Ka, ja, Za;
function ns() {
  if (Us === void 0) {
    Us = window, Ka = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ja = Tn(e, "firstChild").get, Za = Tn(e, "nextSibling").get, Hs(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Hs(n) && (n.__t = void 0);
  }
}
function Jt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Fn(t) {
  return (
    /** @type {TemplateNode | null} */
    ja.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ne(t) {
  return (
    /** @type {TemplateNode | null} */
    Za.call(t)
  );
}
function Ut(t, e) {
  if (!j)
    return /* @__PURE__ */ Fn(t);
  var n = /* @__PURE__ */ Fn(z);
  if (n === null)
    n = z.appendChild(Jt());
  else if (e && n.nodeType !== qr) {
    var r = Jt();
    return n == null || n.before(r), Ft(r), r;
  }
  return e && Ri(
    /** @type {Text} */
    n
  ), Ft(n), n;
}
function dn(t, e = !1) {
  if (!j) {
    var n = /* @__PURE__ */ Fn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ne(n) : n;
  }
  if (e) {
    if ((z == null ? void 0 : z.nodeType) !== qr) {
      var r = Jt();
      return z == null || z.before(r), Ft(r), r;
    }
    Ri(
      /** @type {Text} */
      z
    );
  }
  return z;
}
function ie(t, e = 1, n = !1) {
  let r = j ? z : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== qr) {
      var s = Jt();
      return r === null ? i == null || i.after(s) : r.before(s), Ft(s), s;
    }
    Ri(
      /** @type {Text} */
      r
    );
  }
  return Ft(r), r;
}
function Ja(t) {
  t.textContent = "";
}
function Qa() {
  return !1;
}
function bs(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ml, t, void 0)
  );
}
function Ri(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === qr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function to(t) {
  var e = V, n = X;
  Qt(null), Ce(null);
  try {
    return t();
  } finally {
    Qt(e), Ce(n);
  }
}
function ru(t) {
  X === null && (V === null && Ml(), kl()), an && Sl();
}
function iu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Se(t, e, n) {
  var r = X;
  r !== null && (r.f & qt) !== 0 && (t |= qt);
  var i = {
    ctx: Vt,
    deps: null,
    nodes: null,
    f: t | bt | jt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      lr(i);
    } catch (o) {
      throw Tt(i), o;
    }
  else e !== null && ue(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & qn) === 0 && (s = s.first, (t & je) !== 0 && (t & ir) !== 0 && s !== null && (s.f |= ir)), s !== null && (s.parent = r, r !== null && iu(s, r), V !== null && (V.f & xt) !== 0 && (t & on) === 0)) {
    var a = (
      /** @type {Derived} */
      V
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function $s() {
  return V !== null && !fe;
}
function su(t) {
  const e = Se(xi, null, !1);
  return ut(e, vt), e.teardown = t, e;
}
function As(t) {
  ru();
  var e = (
    /** @type {Effect} */
    X.f
  ), n = !V && (e & he) !== 0 && (e & cr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Vt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return eo(t);
}
function eo(t) {
  return Se(Tr | Rl, t, !1);
}
function au(t) {
  Ge.ensure();
  const e = Se(on | qn, t, !0);
  return () => {
    Tt(e);
  };
}
function ou(t) {
  Ge.ensure();
  const e = Se(on | qn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sn(e, () => {
      Tt(e), r(void 0);
    }) : (Tt(e), r(void 0));
  });
}
function no(t) {
  return Se(Tr, t, !1);
}
function lu(t) {
  return Se(_s | qn, t, !0);
}
function Es(t, e = 0) {
  return Se(xi | e, t, !0);
}
function Un(t, e = [], n = [], r = []) {
  jl(r, e, n, (i) => {
    Se(xi, () => t(...i.map(w)), !0);
  });
}
function Rs(t, e = 0) {
  var n = Se(je | e, t, !0);
  return n;
}
function Kt(t) {
  return Se(he | qn, t, !0);
}
function ro(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = an, r = V;
    Ws(!0), Qt(null);
    try {
      e.call(null);
    } finally {
      Ws(n), Qt(r);
    }
  }
}
function Cs(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && to(() => {
      i.abort(_n);
    });
    var r = n.next;
    (n.f & on) !== 0 ? n.parent = null : Tt(n, e), n = r;
  }
}
function uu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & he) === 0 && Tt(e), e = n;
  }
}
function Tt(t, e = !0) {
  var n = !1;
  (e || (t.f & Ra) !== 0) && t.nodes !== null && t.nodes.end !== null && (fu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Cs(t, e && !n), Nr(t, 0), ut(t, Xe);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ro(t);
  var i = t.parent;
  i !== null && i.first !== null && io(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function fu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Ne(t);
    t.remove(), t = n;
  }
}
function io(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Sn(t, e, n = !0) {
  var r = [];
  so(t, r, !0);
  var i = () => {
    n && Tt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function so(t, e, n) {
  if ((t.f & qt) === 0) {
    t.f ^= qt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & ir) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & he) !== 0 && (t.f & je) !== 0;
      so(i, e, a ? n : !1), i = s;
    }
  }
}
function Ts(t) {
  ao(t, !0);
}
function ao(t, e) {
  if ((t.f & qt) !== 0) {
    t.f ^= qt, (t.f & vt) === 0 && (ut(t, bt), ue(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ir) !== 0 || (n.f & he) !== 0;
      ao(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function oo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ne(n);
      e.append(n), n = i;
    }
}
let Jr = !1, an = !1;
function Ws(t) {
  an = t;
}
let V = null, fe = !1;
function Qt(t) {
  V = t;
}
let X = null;
function Ce(t) {
  X = t;
}
let Zt = null;
function lo(t) {
  V !== null && (Zt === null ? Zt = [t] : Zt.push(t));
}
let Pt = null, Ot = 0, Wt = null;
function cu(t) {
  Wt = t;
}
let uo = 1, wn = 0, kn = wn;
function Xs(t) {
  kn = t;
}
function fo() {
  return ++uo;
}
function Vr(t) {
  var e = t.f;
  if ((e & bt) !== 0)
    return !0;
  if (e & xt && (t.f &= ~Pn), (e & ce) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Vr(
        /** @type {Derived} */
        s
      ) && Ba(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & jt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    wt === null && ut(t, vt);
  }
  return !1;
}
function co(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Zt !== null && rr.call(Zt, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & xt) !== 0 ? co(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ut(s, bt) : (s.f & vt) !== 0 && ut(s, ce), ue(
        /** @type {Effect} */
        s
      ));
    }
}
function ho(t) {
  var m;
  var e = Pt, n = Ot, r = Wt, i = V, s = Zt, a = Vt, o = fe, l = kn, u = t.f;
  Pt = /** @type {null | Value[]} */
  null, Ot = 0, Wt = null, V = (u & (he | on)) === 0 ? t : null, Zt = null, sr(t.ctx), fe = !1, kn = ++wn, t.ac !== null && (to(() => {
    t.ac.abort(_n);
  }), t.ac = null);
  try {
    t.f |= Xi;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= cr;
    var c = t.deps, v = Y == null ? void 0 : Y.is_fork;
    if (Pt !== null) {
      var g;
      if (v || Nr(t, Ot), c !== null && Ot > 0)
        for (c.length = Ot + Pt.length, g = 0; g < Pt.length; g++)
          c[Ot + g] = Pt[g];
      else
        t.deps = c = Pt;
      if ($s() && (t.f & jt) !== 0)
        for (g = Ot; g < c.length; g++)
          ((m = c[g]).reactions ?? (m.reactions = [])).push(t);
    } else !v && c !== null && Ot < c.length && (Nr(t, Ot), c.length = Ot);
    if (ka() && Wt !== null && !fe && c !== null && (t.f & (xt | ce | bt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Wt.length; g++)
        co(
          Wt[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (wn++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = wn;
      if (e !== null)
        for (const b of e)
          b.rv = wn;
      Wt !== null && (r === null ? r = Wt : r.push(.../** @type {Source[]} */
      Wt));
    }
    return (t.f & rn) !== 0 && (t.f ^= rn), h;
  } catch (b) {
    return Pa(b);
  } finally {
    t.f ^= Xi, Pt = e, Ot = n, Wt = r, V = i, Zt = s, sr(a), fe = o, kn = l;
  }
}
function hu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = yl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & xt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pt === null || !rr.call(Pt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & jt) !== 0 && (s.f ^= jt, s.f &= ~Pn), ws(s), eu(s), Nr(s, 0);
  }
}
function Nr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      hu(t, n[r]);
}
function lr(t) {
  var e = t.f;
  if ((e & Xe) === 0) {
    ut(t, vt);
    var n = X, r = Jr;
    X = t, Jr = !0;
    try {
      (e & (je | Aa)) !== 0 ? uu(t) : Cs(t), ro(t);
      var i = ho(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = uo;
      var s;
      Wi && Hl && (t.f & bt) !== 0 && t.deps;
    } finally {
      Jr = r, X = n;
    }
  }
}
function w(t) {
  var e = t.f, n = (e & xt) !== 0;
  if (V !== null && !fe) {
    var r = X !== null && (X.f & Xe) !== 0;
    if (!r && (Zt === null || !rr.call(Zt, t))) {
      var i = V.deps;
      if ((V.f & Xi) !== 0)
        t.rv < wn && (t.rv = wn, Pt === null && i !== null && i[Ot] === t ? Ot++ : Pt === null ? Pt = [t] : Pt.push(t));
      else {
        (V.deps ?? (V.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [V] : rr.call(s, V) || s.push(V);
      }
    }
  }
  if (an && sn.has(t))
    return sn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (an) {
      var o = a.v;
      return ((a.f & vt) === 0 && a.reactions !== null || vo(a)) && (o = xs(a)), sn.set(a, o), o;
    }
    var l = (a.f & jt) === 0 && !fe && V !== null && (Jr || (V.f & jt) !== 0), u = (a.f & cr) === 0;
    Vr(a) && (l && (a.f |= jt), Ba(a)), l && !u && (Ua(a), po(a));
  }
  if (wt != null && wt.has(t))
    return wt.get(t);
  if ((t.f & rn) !== 0)
    throw t.v;
  return t.v;
}
function po(t) {
  if (t.f |= jt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & xt) !== 0 && (e.f & jt) === 0 && (Ua(
        /** @type {Derived} */
        e
      ), po(
        /** @type {Derived} */
        e
      ));
}
function vo(t) {
  if (t.v === _t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (sn.has(e) || (e.f & xt) !== 0 && vo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ci(t) {
  var e = fe;
  try {
    return fe = !0, t();
  } finally {
    fe = e;
  }
}
const go = /* @__PURE__ */ new Set(), rs = /* @__PURE__ */ new Set();
function du(t) {
  for (var e = 0; e < t.length; e++)
    go.add(t[e]);
  for (var n of rs)
    n(t);
}
let Gs = null;
function Ks(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Gs = t;
  var a = 0, o = Gs === t && t.__root;
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
    oi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = V, h = X;
    Qt(null), Ce(null);
    try {
      for (var c, v = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch ($) {
          c ? v.push($) : c = $;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let $ of v)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Qt(f), Ce(h);
    }
  }
}
var wa, xa;
const qi = (xa = (wa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : wa.trustedTypes) == null ? void 0 : /* @__PURE__ */ xa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function pu(t) {
  return (
    /** @type {string} */
    (qi == null ? void 0 : qi.createHTML(t)) ?? t
  );
}
function _o(t, e = !1) {
  var n = bs("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? pu(t) : t, n.content;
}
function On(t, e) {
  var n = (
    /** @type {Effect} */
    X
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Vn(t, e) {
  var n = (e & _l) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (j)
      return On(z, null), z;
    r === void 0 && (r = _o(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || Ka ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fn(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      On(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function vu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (j)
      return On(z, null), z;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        _o(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Fn(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Fn(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return On(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function gu(t, e) {
  return /* @__PURE__ */ vu(t, e, "svg");
}
function js(t = "") {
  if (!j) {
    var e = Jt(t + "");
    return On(e, e), e;
  }
  var n = z;
  return n.nodeType !== qr ? (n.before(n = Jt()), Ft(n)) : Ri(
    /** @type {Text} */
    n
  ), On(n, n), n;
}
function ae(t, e) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      X
    );
    ((n.f & cr) === 0 || n.nodes.end === null) && (n.nodes.end = z), $i();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const _u = ["touchstart", "touchmove"];
function mu(t) {
  return _u.includes(t);
}
function pn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function mo(t, e) {
  return yo(t, e);
}
function yu(t, e) {
  ns(), e.intro = e.intro ?? !1;
  const n = e.target, r = j, i = z;
  try {
    for (var s = /* @__PURE__ */ Fn(n); s && (s.nodeType !== hr || /** @type {Comment} */
    s.data !== vs); )
      s = /* @__PURE__ */ Ne(s);
    if (!s)
      throw nr;
    We(!0), Ft(
      /** @type {Comment} */
      s
    );
    const a = yo(t, { ...e, anchor: s });
    return We(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== nr && console.warn("Failed to hydrate: ", a), e.recover === !1 && Dl(), ns(), Ja(n), We(!1), mo(t, e);
  } finally {
    We(r), Ft(i);
  }
}
const Br = /* @__PURE__ */ new Map();
function yo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  ns();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var v = h[c];
      if (!o.has(v)) {
        o.add(v);
        var g = mu(v);
        for (const $ of [e, document]) {
          var m = Br.get($);
          m === void 0 && (m = /* @__PURE__ */ new Map(), Br.set($, m));
          var b = m.get(v);
          b === void 0 ? ($.addEventListener(v, Ks, { passive: g }), m.set(v, 1)) : m.set(v, b + 1);
        }
      }
    }
  };
  l(wi(go)), rs.add(l);
  var u = void 0, f = ou(() => {
    var h = n ?? e.appendChild(Jt());
    return Gl(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        ms({});
        var v = (
          /** @type {ComponentContext} */
          Vt
        );
        if (s && (v.c = s), i && (r.$$events = i), j && On(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, j && (X.nodes.end = z, z === null || z.nodeType !== hr || /** @type {Comment} */
        z.data !== gs))
          throw bi(), nr;
        ys();
      }
    ), () => {
      var m;
      for (var c of o)
        for (const b of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Br.get(b)
          ), g = (
            /** @type {number} */
            v.get(c)
          );
          --g == 0 ? (b.removeEventListener(c, Ks), v.delete(c), v.size === 0 && Br.delete(b)) : v.set(c, g);
        }
      rs.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return is.set(u, f), u;
}
let is = /* @__PURE__ */ new WeakMap();
function wu(t, e) {
  const n = is.get(t);
  return n ? (is.delete(t), n(e)) : Promise.resolve();
}
var oe, Ae, Lt, Cn, Ir, Lr, mi;
class xu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    lt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, oe, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    L(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, Lt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, Cn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Ir, !0);
    L(this, Lr, () => {
      var e = (
        /** @type {Batch} */
        Y
      );
      if (d(this, oe).has(e)) {
        var n = (
          /** @type {Key} */
          d(this, oe).get(e)
        ), r = d(this, Ae).get(n);
        if (r)
          Ts(r), d(this, Cn).delete(n);
        else {
          var i = d(this, Lt).get(n);
          i && (d(this, Ae).set(n, i.effect), d(this, Lt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of d(this, oe)) {
          if (d(this, oe).delete(s), s === e)
            break;
          const o = d(this, Lt).get(a);
          o && (Tt(o.effect), d(this, Lt).delete(a));
        }
        for (const [s, a] of d(this, Ae)) {
          if (s === n || d(this, Cn).has(s)) continue;
          const o = () => {
            if (Array.from(d(this, oe).values()).includes(s)) {
              var u = document.createDocumentFragment();
              oo(a, u), u.append(Jt()), d(this, Lt).set(s, { effect: a, fragment: u });
            } else
              Tt(a);
            d(this, Cn).delete(s), d(this, Ae).delete(s);
          };
          d(this, Ir) || !r ? (d(this, Cn).add(s), Sn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, mi, (e) => {
      d(this, oe).delete(e);
      const n = Array.from(d(this, oe).values());
      for (const [r, i] of d(this, Lt))
        n.includes(r) || (Tt(i.effect), d(this, Lt).delete(r));
    });
    this.anchor = e, D(this, Ir, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Y
    ), i = Qa();
    if (n && !d(this, Ae).has(e) && !d(this, Lt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = Jt();
        s.append(a), d(this, Lt).set(e, {
          effect: Kt(() => n(a)),
          fragment: s
        });
      } else
        d(this, Ae).set(
          e,
          Kt(() => n(this.anchor))
        );
    if (d(this, oe).set(r, e), i) {
      for (const [o, l] of d(this, Ae))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of d(this, Lt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(d(this, Lr)), r.ondiscard(d(this, mi));
    } else
      j && (this.anchor = z), d(this, Lr).call(this);
  }
}
oe = new WeakMap(), Ae = new WeakMap(), Lt = new WeakMap(), Cn = new WeakMap(), Ir = new WeakMap(), Lr = new WeakMap(), mi = new WeakMap();
function bu(t) {
  Vt === null && Cl(), As(() => {
    const e = Ci(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function mr(t, e, n = !1) {
  j && $i();
  var r = new xu(t), i = n ? ir : 0;
  function s(a, o) {
    if (j) {
      const f = Ta(t);
      var l;
      if (f === vs ? l = 0 : f === yi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = li();
        Ft(u), r.anchor = u, We(!1), r.ensure(a, o), We(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Rs(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Vi(t, e) {
  return e;
}
function $u(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    Sn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            ss(wi(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), f = (
        /** @type {Element} */
        u.parentNode
      );
      Ja(f), f.append(u), t.items.clear();
    }
    ss(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ss(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Tt(t[n], e);
}
var Zs;
function zi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  j && $i();
  var l = null, u = /* @__PURE__ */ Ya(() => {
    var m = n();
    return ba(m) ? m : m == null ? [] : wi(m);
  }), f, h = !0;
  function c() {
    g.fallback = l, Au(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & nn) === 0 ? Ts(l) : (l.f ^= nn, xr(l, null, a)) : Sn(l, () => {
      l = null;
    }));
  }
  var v = Rs(() => {
    f = /** @type {V[]} */
    w(u);
    var m = f.length;
    let b = !1;
    if (j) {
      var $ = Ta(a) === yi;
      $ !== (m === 0) && (a = li(), Ft(a), We(!1), b = !0);
    }
    for (var C = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      Y
    ), N = Qa(), I = 0; I < m; I += 1) {
      j && z.nodeType === hr && /** @type {Comment} */
      z.data === gs && (a = /** @type {Comment} */
      z, b = !0, We(!1));
      var G = f[I], at = r(G, I), Z = h ? null : o.get(at);
      Z ? (Z.v && or(Z.v, G), Z.i && or(Z.i, I), N && T.unskip_effect(Z.e)) : (Z = Eu(
        o,
        h ? a : Zs ?? (Zs = Jt()),
        G,
        at,
        I,
        i,
        e,
        n
      ), h || (Z.e.f |= nn), o.set(at, Z)), C.add(at);
    }
    if (m === 0 && s && !l && (h ? l = Kt(() => s(a)) : (l = Kt(() => s(Zs ?? (Zs = Jt()))), l.f |= nn)), m > C.size && Nl(), j && m > 0 && Ft(li()), !h)
      if (N) {
        for (const [et, dt] of o)
          C.has(et) || T.skip_effect(dt.e);
        T.oncommit(c), T.ondiscard(() => {
        });
      } else
        c();
    b && We(!0), w(u);
  }), g = { effect: v, items: o, outrogroups: null, fallback: l };
  h = !1, j && (a = z);
}
function yr(t) {
  for (; t !== null && (t.f & he) === 0; )
    t = t.next;
  return t;
}
function Au(t, e, n, r, i) {
  var Z;
  var s = e.length, a = t.items, o = yr(t.effect.first), l, u = null, f = [], h = [], c, v, g, m;
  for (m = 0; m < s; m += 1) {
    if (c = e[m], v = i(c, m), g = /** @type {EachItem} */
    a.get(v).e, t.outrogroups !== null)
      for (const et of t.outrogroups)
        et.pending.delete(g), et.done.delete(g);
    if ((g.f & nn) !== 0)
      if (g.f ^= nn, g === o)
        xr(g, null, n);
      else {
        var b = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), tn(t, u, g), tn(t, g, b), xr(g, b, n), u = g, f = [], h = [], o = yr(u.next);
        continue;
      }
    if ((g.f & qt) !== 0 && Ts(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var $ = h[0], C;
          u = $.prev;
          var T = f[0], N = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            xr(f[C], $, n);
          for (C = 0; C < h.length; C += 1)
            l.delete(h[C]);
          tn(t, T.prev, N.next), tn(t, u, T), tn(t, N, $), o = $, u = N, m -= 1, f = [], h = [];
        } else
          l.delete(g), xr(g, o, n), tn(t, g.prev, g.next), tn(t, g, u === null ? t.effect.first : u.next), tn(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = yr(o.next);
      if (o === null)
        continue;
    }
    (g.f & nn) === 0 && f.push(g), u = g, o = yr(g.next);
  }
  if (t.outrogroups !== null) {
    for (const et of t.outrogroups)
      et.pending.size === 0 && (ss(wi(et.done)), (Z = t.outrogroups) == null || Z.delete(et));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var I = [];
    if (l !== void 0)
      for (g of l)
        (g.f & qt) === 0 && I.push(g);
    for (; o !== null; )
      (o.f & qt) === 0 && o !== t.fallback && I.push(o), o = yr(o.next);
    var G = I.length;
    if (G > 0) {
      var at = null;
      $u(t, I, at);
    }
  }
}
function Eu(t, e, n, r, i, s, a, o) {
  var l = (a & fl) !== 0 ? (a & hl) === 0 ? /* @__PURE__ */ Xa(n, !1, !1) : Dn(n) : null, u = (a & cl) !== 0 ? Dn(i) : null;
  return {
    v: l,
    i: u,
    e: Kt(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function xr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & nn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function tn(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function wo(t, e) {
  no(() => {
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
      const i = bs("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function Js(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Ru(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += Js(r)), i && (n += Js(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Hi(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function Qs(t, e, n, r) {
  var i = t.__style;
  if (j || i !== e) {
    var s = Ru(e, r);
    (!j || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Hi(t, n == null ? void 0 : n[0], r[0]), Hi(t, n == null ? void 0 : n[1], r[1], "important")) : Hi(t, n, r));
  return r;
}
function ta(t, e) {
  return t === e || (t == null ? void 0 : t[Er]) === e;
}
function Qr(t = {}, e, n, r) {
  return no(() => {
    var i, s;
    return Es(() => {
      i = s, s = [], Ci(() => {
        t !== n(...s) && (e(t, ...s), i && ta(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Nn(() => {
        s && ta(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Ur = !1;
function Cu(t) {
  var e = Ur;
  try {
    return Ur = !1, [t(), Ur];
  } finally {
    Ur = e;
  }
}
function Et(t, e, n, r) {
  var C;
  var i = (n & vl) !== 0, s = (n & gl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Ci(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Er in t || Ca in t;
    u = ((C = Tn(t, e)) == null ? void 0 : C.set) ?? (f && e in t ? (T) => t[e] = T : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Cu(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (Fl(), u(h)));
  var v;
  if (v = () => {
    var T = (
      /** @type {V} */
      t[e]
    );
    return T === void 0 ? l() : (o = !0, T);
  }, (n & pl) === 0)
    return v;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(T, N) {
        return arguments.length > 0 ? ((!N || g || c) && u(N ? v() : T), T) : v();
      })
    );
  }
  var m = !1, b = ((n & dl) !== 0 ? Ei : Ya)(() => (m = !1, v()));
  i && w(b);
  var $ = (
    /** @type {Effect} */
    X
  );
  return (
    /** @type {() => V} */
    (function(T, N) {
      if (arguments.length > 0) {
        const I = N ? w(b) : i ? yn(T) : T;
        return Q(b, I), m = !0, a !== void 0 && (a = I), T;
      }
      return an && m || ($.f & Xe) !== 0 ? b.v : w(b);
    })
  );
}
function Tu(t) {
  return new Nu(t);
}
var Ue, Gt;
class Nu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    L(this, Ue);
    /** @type {Record<string, any>} */
    L(this, Gt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Xa(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return w(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ca ? !0 : (w(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return Q(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    D(this, Gt, (e.hydrate ? yu : mo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && mt(), D(this, Ue, i.$$events);
    for (const a of Object.keys(d(this, Gt)))
      a === "$set" || a === "$destroy" || a === "$on" || oi(this, a, {
        get() {
          return d(this, Gt)[a];
        },
        /** @param {any} value */
        set(o) {
          d(this, Gt)[a] = o;
        },
        enumerable: !0
      });
    d(this, Gt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, d(this, Gt).$destroy = () => {
      wu(d(this, Gt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    d(this, Gt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    d(this, Ue)[e] = d(this, Ue)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return d(this, Ue)[e].push(r), () => {
      d(this, Ue)[e] = d(this, Ue)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    d(this, Gt).$destroy();
  }
}
Ue = new WeakMap(), Gt = new WeakMap();
let xo;
typeof HTMLElement == "function" && (xo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    lt(this, "$$ctor");
    /** Slots */
    lt(this, "$$s");
    /** @type {any} The Svelte component instance */
    lt(this, "$$c");
    /** Whether or not the custom element is connected */
    lt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    lt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    lt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    lt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    lt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    lt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    lt(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    lt(this, "$$shadowRoot", null);
    this.$$ctor = e, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
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
          const o = bs("slot");
          s !== "default" && (o.name = s), ae(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Su(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = ti(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Tu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = au(() => {
        Es(() => {
          var s;
          this.$$r = !0;
          for (const a of ai(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ti(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ti(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return ai(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ti(t, e, n, r) {
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
function Su(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function bo(t, e, n, r, i, s) {
  let a = class extends xo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ai(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ai(e).forEach((o) => {
    oi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = ti(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Tn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    oi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var ku = { value: () => {
} };
function $o() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ei(n);
}
function ei(t) {
  this._ = t;
}
function Mu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ei.prototype = $o.prototype = {
  constructor: ei,
  on: function(t, e) {
    var n = this._, r = Mu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Pu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = ea(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ea(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ei(t);
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
function Pu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ea(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ku, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var as = "http://www.w3.org/1999/xhtml";
const na = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: as,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ti(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), na.hasOwnProperty(e) ? { space: na[e], local: t } : t;
}
function Du(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === as && e.documentElement.namespaceURI === as ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Fu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ao(t) {
  var e = Ti(t);
  return (e.local ? Fu : Du)(e);
}
function Ou() {
}
function Ns(t) {
  return t == null ? Ou : function() {
    return this.querySelector(t);
  };
}
function Iu(t) {
  typeof t != "function" && (t = Ns(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new zt(r, this._parents);
}
function Lu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function qu() {
  return [];
}
function Eo(t) {
  return t == null ? qu : function() {
    return this.querySelectorAll(t);
  };
}
function Vu(t) {
  return function() {
    return Lu(t.apply(this, arguments));
  };
}
function zu(t) {
  typeof t == "function" ? t = Vu(t) : t = Eo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new zt(r, i);
}
function Ro(t) {
  return function() {
    return this.matches(t);
  };
}
function Co(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Hu = Array.prototype.find;
function Yu(t) {
  return function() {
    return Hu.call(this.children, t);
  };
}
function Bu() {
  return this.firstElementChild;
}
function Uu(t) {
  return this.select(t == null ? Bu : Yu(typeof t == "function" ? t : Co(t)));
}
var Wu = Array.prototype.filter;
function Xu() {
  return Array.from(this.children);
}
function Gu(t) {
  return function() {
    return Wu.call(this.children, t);
  };
}
function Ku(t) {
  return this.selectAll(t == null ? Xu : Gu(typeof t == "function" ? t : Co(t)));
}
function ju(t) {
  typeof t != "function" && (t = Ro(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new zt(r, this._parents);
}
function To(t) {
  return new Array(t.length);
}
function Zu() {
  return new zt(this._enter || this._groups.map(To), this._parents);
}
function ui(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ui.prototype = {
  constructor: ui,
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
function Ju(t) {
  return function() {
    return t;
  };
}
function Qu(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new ui(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function tf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), v;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = v = a.call(l, l.__data__, o, e) + "", u.has(v) ? i[o] = l : u.set(v, l));
  for (o = 0; o < h; ++o)
    v = a.call(t, s[o], o, s) + "", (l = u.get(v)) ? (r[o] = l, l.__data__ = s[o], u.delete(v)) : n[o] = new ui(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function ef(t) {
  return t.__data__;
}
function nf(t, e) {
  if (!arguments.length) return Array.from(this, ef);
  var n = e ? tf : Qu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ju(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, v = rf(t.call(f, f && f.__data__, u, r)), g = v.length, m = o[u] = new Array(g), b = a[u] = new Array(g), $ = l[u] = new Array(c);
    n(f, h, m, b, $, v, e);
    for (var C = 0, T = 0, N, I; C < g; ++C)
      if (N = m[C]) {
        for (C >= T && (T = C + 1); !(I = b[T]) && ++T < g; ) ;
        N._next = I || null;
      }
  }
  return a = new zt(a, r), a._enter = o, a._exit = l, a;
}
function rf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function sf() {
  return new zt(this._exit || this._groups.map(To), this._parents);
}
function af(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function of(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), v, g = 0; g < h; ++g)
      (v = u[g] || f[g]) && (c[g] = v);
  for (; l < i; ++l)
    o[l] = n[l];
  return new zt(o, this._parents);
}
function lf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function uf(t) {
  t || (t = ff);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new zt(i, this._parents).order();
}
function ff(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function cf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function hf() {
  return Array.from(this);
}
function df() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function pf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function vf() {
  return !this.node();
}
function gf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function _f(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function mf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function yf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function wf(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function xf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function bf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function $f(t, e) {
  var n = Ti(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? mf : _f : typeof e == "function" ? n.local ? bf : xf : n.local ? wf : yf)(n, e));
}
function No(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Af(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ef(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Rf(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Cf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Af : typeof e == "function" ? Rf : Ef)(t, e, n ?? "")) : ur(this.node(), t);
}
function ur(t, e) {
  return t.style.getPropertyValue(e) || No(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Tf(t) {
  return function() {
    delete this[t];
  };
}
function Nf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Sf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function kf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Tf : typeof e == "function" ? Sf : Nf)(t, e)) : this.node()[t];
}
function So(t) {
  return t.trim().split(/^|\s+/);
}
function Ss(t) {
  return t.classList || new ko(t);
}
function ko(t) {
  this._node = t, this._names = So(t.getAttribute("class") || "");
}
ko.prototype = {
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
function Mo(t, e) {
  for (var n = Ss(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Po(t, e) {
  for (var n = Ss(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Mf(t) {
  return function() {
    Mo(this, t);
  };
}
function Pf(t) {
  return function() {
    Po(this, t);
  };
}
function Df(t, e) {
  return function() {
    (e.apply(this, arguments) ? Mo : Po)(this, t);
  };
}
function Ff(t, e) {
  var n = So(t + "");
  if (arguments.length < 2) {
    for (var r = Ss(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Df : e ? Mf : Pf)(n, e));
}
function Of() {
  this.textContent = "";
}
function If(t) {
  return function() {
    this.textContent = t;
  };
}
function Lf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function qf(t) {
  return arguments.length ? this.each(t == null ? Of : (typeof t == "function" ? Lf : If)(t)) : this.node().textContent;
}
function Vf() {
  this.innerHTML = "";
}
function zf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Hf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Yf(t) {
  return arguments.length ? this.each(t == null ? Vf : (typeof t == "function" ? Hf : zf)(t)) : this.node().innerHTML;
}
function Bf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Uf() {
  return this.each(Bf);
}
function Wf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xf() {
  return this.each(Wf);
}
function Gf(t) {
  var e = typeof t == "function" ? t : Ao(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Kf() {
  return null;
}
function jf(t, e) {
  var n = typeof t == "function" ? t : Ao(t), r = e == null ? Kf : typeof e == "function" ? e : Ns(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zf() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Jf() {
  return this.each(Zf);
}
function Qf() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function tc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ec(t) {
  return this.select(t ? tc : Qf);
}
function nc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function rc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ic(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function sc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ac(t, e, n) {
  return function() {
    var r = this.__on, i, s = rc(e);
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
function oc(t, e, n) {
  var r = ic(t + ""), i, s = r.length, a;
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
  for (o = e ? ac : sc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Do(t, e, n) {
  var r = No(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function lc(t, e) {
  return function() {
    return Do(this, t, e);
  };
}
function uc(t, e) {
  return function() {
    return Do(this, t, e.apply(this, arguments));
  };
}
function fc(t, e) {
  return this.each((typeof e == "function" ? uc : lc)(t, e));
}
function* cc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Fo = [null];
function zt(t, e) {
  this._groups = t, this._parents = e;
}
function dr() {
  return new zt([[document.documentElement]], Fo);
}
function hc() {
  return this;
}
zt.prototype = dr.prototype = {
  constructor: zt,
  select: Iu,
  selectAll: zu,
  selectChild: Uu,
  selectChildren: Ku,
  filter: ju,
  data: nf,
  enter: Zu,
  exit: sf,
  join: af,
  merge: of,
  selection: hc,
  order: lf,
  sort: uf,
  call: cf,
  nodes: hf,
  node: df,
  size: pf,
  empty: vf,
  each: gf,
  attr: $f,
  style: Cf,
  property: kf,
  classed: Ff,
  text: qf,
  html: Yf,
  raise: Uf,
  lower: Xf,
  append: Gf,
  insert: jf,
  remove: Jf,
  clone: ec,
  datum: nc,
  on: oc,
  dispatch: fc,
  [Symbol.iterator]: cc
};
function gt(t) {
  return typeof t == "string" ? new zt([[document.querySelector(t)]], [document.documentElement]) : new zt([[t]], Fo);
}
function ks(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Oo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function zr() {
}
var Sr = 0.7, fi = 1 / Sr, Gn = "\\s*([+-]?\\d+)\\s*", kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Re = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", dc = /^#([0-9a-f]{3,8})$/, pc = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), vc = new RegExp(`^rgb\\(${Re},${Re},${Re}\\)$`), gc = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${kr}\\)$`), _c = new RegExp(`^rgba\\(${Re},${Re},${Re},${kr}\\)$`), mc = new RegExp(`^hsl\\(${kr},${Re},${Re}\\)$`), yc = new RegExp(`^hsla\\(${kr},${Re},${Re},${kr}\\)$`), ra = {
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
ks(zr, In, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ia,
  // Deprecated! Use color.formatHex.
  formatHex: ia,
  formatHex8: wc,
  formatHsl: xc,
  formatRgb: sa,
  toString: sa
});
function ia() {
  return this.rgb().formatHex();
}
function wc() {
  return this.rgb().formatHex8();
}
function xc() {
  return Io(this).formatHsl();
}
function sa() {
  return this.rgb().formatRgb();
}
function In(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = dc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? aa(e) : n === 3 ? new Dt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Wr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Wr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = pc.exec(t)) ? new Dt(e[1], e[2], e[3], 1) : (e = vc.exec(t)) ? new Dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = gc.exec(t)) ? Wr(e[1], e[2], e[3], e[4]) : (e = _c.exec(t)) ? Wr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = mc.exec(t)) ? ua(e[1], e[2] / 100, e[3] / 100, 1) : (e = yc.exec(t)) ? ua(e[1], e[2] / 100, e[3] / 100, e[4]) : ra.hasOwnProperty(t) ? aa(ra[t]) : t === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function aa(t) {
  return new Dt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Wr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Dt(t, e, n, r);
}
function bc(t) {
  return t instanceof zr || (t = In(t)), t ? (t = t.rgb(), new Dt(t.r, t.g, t.b, t.opacity)) : new Dt();
}
function os(t, e, n, r) {
  return arguments.length === 1 ? bc(t) : new Dt(t, e, n, r ?? 1);
}
function Dt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ks(Dt, os, Oo(zr, {
  brighter(t) {
    return t = t == null ? fi : Math.pow(fi, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Sr : Math.pow(Sr, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Dt(Mn(this.r), Mn(this.g), Mn(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: oa,
  // Deprecated! Use color.formatHex.
  formatHex: oa,
  formatHex8: $c,
  formatRgb: la,
  toString: la
}));
function oa() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}`;
}
function $c() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}${xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function la() {
  const t = ci(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ci(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xn(t) {
  return t = Mn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ua(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new le(t, e, n, r);
}
function Io(t) {
  if (t instanceof le) return new le(t.h, t.s, t.l, t.opacity);
  if (t instanceof zr || (t = In(t)), !t) return new le();
  if (t instanceof le) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new le(a, o, l, t.opacity);
}
function Ac(t, e, n, r) {
  return arguments.length === 1 ? Io(t) : new le(t, e, n, r ?? 1);
}
function le(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ks(le, Ac, Oo(zr, {
  brighter(t) {
    return t = t == null ? fi : Math.pow(fi, t), new le(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Sr : Math.pow(Sr, t), new le(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Dt(
      Yi(t >= 240 ? t - 240 : t + 120, i, r),
      Yi(t, i, r),
      Yi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new le(fa(this.h), Xr(this.s), Xr(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ci(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${fa(this.h)}, ${Xr(this.s) * 100}%, ${Xr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function fa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Xr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Yi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Ms = (t) => () => t;
function Ec(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Rc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Cc(t) {
  return (t = +t) == 1 ? Lo : function(e, n) {
    return n - e ? Rc(e, n, t) : Ms(isNaN(e) ? n : e);
  };
}
function Lo(t, e) {
  var n = e - t;
  return n ? Ec(t, n) : Ms(isNaN(t) ? e : t);
}
const hi = (function t(e) {
  var n = Cc(e);
  function r(i, s) {
    var a = n((i = os(i)).r, (s = os(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Lo(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Tc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Nc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Sc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Wn(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function kc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Ee(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Mc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Wn(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ls = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bi = new RegExp(ls.source, "g");
function Pc(t) {
  return function() {
    return t;
  };
}
function Dc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function qo(t, e) {
  var n = ls.lastIndex = Bi.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = ls.exec(t)) && (i = Bi.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Ee(r, i) })), n = Bi.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Dc(l[0].x) : Pc(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Wn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Ms(e) : (n === "number" ? Ee : n === "string" ? (r = In(e)) ? (e = r, hi) : qo : e instanceof In ? hi : e instanceof Date ? kc : Nc(e) ? Tc : Array.isArray(e) ? Sc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Mc : Ee)(t, e);
}
var ca = 180 / Math.PI, us = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Vo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * ca,
    skewX: Math.atan(l) * ca,
    scaleX: a,
    scaleY: o
  };
}
var Gr;
function Fc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? us : Vo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Oc(t) {
  return t == null || (Gr || (Gr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Gr.setAttribute("transform", t), !(t = Gr.transform.baseVal.consolidate())) ? us : (t = t.matrix, Vo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function zo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, v, g) {
    if (u !== h || f !== c) {
      var m = v.push("translate(", null, e, null, n);
      g.push({ i: m - 4, x: Ee(u, h) }, { i: m - 2, x: Ee(f, c) });
    } else (h || c) && v.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Ee(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Ee(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, v, g) {
    if (u !== h || f !== c) {
      var m = v.push(i(v) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ee(u, h) }, { i: m - 2, x: Ee(f, c) });
    } else (h !== 1 || c !== 1) && v.push(i(v) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(v) {
      for (var g = -1, m = c.length, b; ++g < m; ) h[(b = c[g]).i] = b.x(v);
      return h.join("");
    };
  };
}
var Ic = zo(Fc, "px, ", "px)", "deg)"), Lc = zo(Oc, ", ", ")", ")"), fr = 0, br = 0, wr = 0, Ho = 1e3, di, $r, pi = 0, Ln = 0, Ni = 0, Mr = typeof performance == "object" && performance.now ? performance : Date, Yo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ps() {
  return Ln || (Yo(qc), Ln = Mr.now() + Ni);
}
function qc() {
  Ln = 0;
}
function vi() {
  this._call = this._time = this._next = null;
}
vi.prototype = Bo.prototype = {
  constructor: vi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ps() : +n) + (e == null ? 0 : +e), !this._next && $r !== this && ($r ? $r._next = this : di = this, $r = this), this._call = t, this._time = n, fs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, fs());
  }
};
function Bo(t, e, n) {
  var r = new vi();
  return r.restart(t, e, n), r;
}
function Vc() {
  Ps(), ++fr;
  for (var t = di, e; t; )
    (e = Ln - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --fr;
}
function ha() {
  Ln = (pi = Mr.now()) + Ni, fr = br = 0;
  try {
    Vc();
  } finally {
    fr = 0, Hc(), Ln = 0;
  }
}
function zc() {
  var t = Mr.now(), e = t - pi;
  e > Ho && (Ni -= e, pi = t);
}
function Hc() {
  for (var t, e = di, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : di = n);
  $r = t, fs(r);
}
function fs(t) {
  if (!fr) {
    br && (br = clearTimeout(br));
    var e = t - Ln;
    e > 24 ? (t < 1 / 0 && (br = setTimeout(ha, t - Mr.now() - Ni)), wr && (wr = clearInterval(wr))) : (wr || (pi = Mr.now(), wr = setInterval(zc, Ho)), fr = 1, Yo(ha));
  }
}
function da(t, e, n) {
  var r = new vi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Yc = $o("start", "end", "cancel", "interrupt"), Bc = [], Uo = 0, pa = 1, cs = 2, ni = 3, va = 4, hs = 5, ri = 6;
function Si(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Uc(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Yc,
    tween: Bc,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Uo
  });
}
function Ds(t, e) {
  var n = de(t, e);
  if (n.state > Uo) throw new Error("too late; already scheduled");
  return n;
}
function ke(t, e) {
  var n = de(t, e);
  if (n.state > ni) throw new Error("too late; already running");
  return n;
}
function de(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Uc(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Bo(s, 0, n.time);
  function s(u) {
    n.state = pa, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, v;
    if (n.state !== pa) return l();
    for (f in r)
      if (v = r[f], v.name === n.name) {
        if (v.state === ni) return da(a);
        v.state === va ? (v.state = ri, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[f]) : +f < e && (v.state = ri, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[f]);
      }
    if (da(function() {
      n.state === ni && (n.state = va, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = cs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === cs) {
      for (n.state = ni, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (v = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = v);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = hs, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === hs && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ri, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Wc(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > cs && r.state < hs, r.state = ri, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Xc(t) {
  return this.each(function() {
    Wc(this, t);
  });
}
function Gc(t, e) {
  var n, r;
  return function() {
    var i = ke(this, t), s = i.tween;
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
function Kc(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = ke(this, t), a = s.tween;
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
function jc(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = de(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Gc : Kc)(n, t, e));
}
function Fs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ke(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return de(i, r).value[e];
  };
}
function Wo(t, e) {
  var n;
  return (typeof e == "number" ? Ee : e instanceof In ? hi : (n = In(e)) ? (e = n, hi) : qo)(t, e);
}
function Zc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Jc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qc(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function th(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function eh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function nh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function rh(t, e) {
  var n = Ti(t), r = n === "transform" ? Lc : Wo;
  return this.attrTween(t, typeof e == "function" ? (n.local ? nh : eh)(n, r, Fs(this, "attr." + t, e)) : e == null ? (n.local ? Jc : Zc)(n) : (n.local ? th : Qc)(n, r, e));
}
function ih(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function sh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function ah(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && sh(t, s)), n;
  }
  return i._value = e, i;
}
function oh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && ih(t, s)), n;
  }
  return i._value = e, i;
}
function lh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ti(t);
  return this.tween(n, (r.local ? ah : oh)(r, e));
}
function uh(t, e) {
  return function() {
    Ds(this, t).delay = +e.apply(this, arguments);
  };
}
function fh(t, e) {
  return e = +e, function() {
    Ds(this, t).delay = e;
  };
}
function ch(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? uh : fh)(e, t)) : de(this.node(), e).delay;
}
function hh(t, e) {
  return function() {
    ke(this, t).duration = +e.apply(this, arguments);
  };
}
function dh(t, e) {
  return e = +e, function() {
    ke(this, t).duration = e;
  };
}
function ph(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? hh : dh)(e, t)) : de(this.node(), e).duration;
}
function vh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ke(this, t).ease = e;
  };
}
function gh(t) {
  var e = this._id;
  return arguments.length ? this.each(vh(e, t)) : de(this.node(), e).ease;
}
function _h(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ke(this, t).ease = n;
  };
}
function mh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(_h(this._id, t));
}
function yh(t) {
  typeof t != "function" && (t = Ro(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Ke(r, this._parents, this._name, this._id);
}
function wh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, v = 0; v < f; ++v)
      (c = l[v] || u[v]) && (h[v] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new Ke(a, this._parents, this._name, this._id);
}
function xh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function bh(t, e, n) {
  var r, i, s = xh(e) ? Ds : ke;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function $h(t, e) {
  var n = this._id;
  return arguments.length < 2 ? de(this.node(), n).on.on(t) : this.each(bh(n, t, e));
}
function Ah(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Eh() {
  return this.on("end.remove", Ah(this._id));
}
function Rh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ns(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Si(u[c], e, n, c, u, de(f, n)));
  return new Ke(s, this._parents, e, n);
}
function Ch(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Eo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), v, g = de(f, n), m = 0, b = c.length; m < b; ++m)
          (v = c[m]) && Si(v, e, n, m, c, g);
        s.push(c), a.push(f);
      }
  return new Ke(s, a, e, n);
}
var Th = dr.prototype.constructor;
function Nh() {
  return new Th(this._groups, this._parents);
}
function Sh(t, e) {
  var n, r, i;
  return function() {
    var s = ur(this, t), a = (this.style.removeProperty(t), ur(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Xo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function kh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = ur(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Mh(t, e, n) {
  var r, i, s;
  return function() {
    var a = ur(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), ur(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Ph(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = ke(this, t), u = l.on, f = l.value[s] == null ? o || (o = Xo(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Dh(t, e, n) {
  var r = (t += "") == "transform" ? Ic : Wo;
  return e == null ? this.styleTween(t, Sh(t, r)).on("end.style." + t, Xo(t)) : typeof e == "function" ? this.styleTween(t, Mh(t, r, Fs(this, "style." + t, e))).each(Ph(this._id, t)) : this.styleTween(t, kh(t, r, e), n).on("end.style." + t, null);
}
function Fh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Oh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Fh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ih(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Oh(t, e, n ?? ""));
}
function Lh(t) {
  return function() {
    this.textContent = t;
  };
}
function qh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Vh(t) {
  return this.tween("text", typeof t == "function" ? qh(Fs(this, "text", t)) : Lh(t == null ? "" : t + ""));
}
function zh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Hh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && zh(i)), e;
  }
  return r._value = t, r;
}
function Yh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Hh(t));
}
function Bh() {
  for (var t = this._name, e = this._id, n = Go(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = de(l, e);
        Si(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ke(r, this._parents, t, n);
}
function Uh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = ke(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Wh = 0;
function Ke(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ii(t) {
  return dr().transition(t);
}
function Go() {
  return ++Wh;
}
var qe = dr.prototype;
Ke.prototype = ii.prototype = {
  constructor: Ke,
  select: Rh,
  selectAll: Ch,
  selectChild: qe.selectChild,
  selectChildren: qe.selectChildren,
  filter: yh,
  merge: wh,
  selection: Nh,
  transition: Bh,
  call: qe.call,
  nodes: qe.nodes,
  node: qe.node,
  size: qe.size,
  empty: qe.empty,
  each: qe.each,
  on: $h,
  attr: rh,
  attrTween: lh,
  style: Dh,
  styleTween: Ih,
  text: Vh,
  textTween: Yh,
  remove: Eh,
  tween: jc,
  delay: ch,
  duration: ph,
  ease: gh,
  easeVarying: mh,
  end: Uh,
  [Symbol.iterator]: qe[Symbol.iterator]
};
function Xh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Gh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Xh
};
function Kh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function jh(t) {
  var e, n;
  t instanceof Ke ? (e = t._id, t = t._name) : (e = Go(), (n = Gh).time = Ps(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Si(l, t, e, u, a, n || Kh(l, e));
  return new Ke(r, this._parents, t, e);
}
dr.prototype.interrupt = Xc;
dr.prototype.transition = jh;
const ds = Math.PI, ps = 2 * ds, gn = 1e-6, Zh = ps - gn;
function Ko(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Jh(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Ko;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Qh {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ko : Jh(e);
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
    let a = this._x1, o = this._y1, l = r - e, u = i - n, f = a - e, h = o - n, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > gn) if (!(Math.abs(h * l - u * f) > gn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let v = r - a, g = i - o, m = l * l + u * u, b = v * v + g * g, $ = Math.sqrt(m), C = Math.sqrt(c), T = s * Math.tan((ds - Math.acos((m + c - b) / (2 * $ * C))) / 2), N = T / C, I = T / $;
      Math.abs(N - 1) > gn && this._append`L${e + N * f},${n + N * h}`, this._append`A${s},${s},0,0,${+(h * v > f * g)},${this._x1 = e + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > gn || Math.abs(this._y1 - f) > gn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % ps + ps), c > Zh ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > gn && this._append`A${r},${r},0,${+(c >= ds)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function td(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const ed = td("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Ct(t) {
  return function() {
    return t;
  };
}
const ga = Math.abs, At = Math.atan2, vn = Math.cos, nd = Math.max, Ui = Math.min, we = Math.sin, Xn = Math.sqrt, St = 1e-12, Pr = Math.PI, gi = Pr / 2, si = 2 * Pr;
function rd(t) {
  return t > 1 ? 0 : t < -1 ? Pr : Math.acos(t);
}
function _a(t) {
  return t >= 1 ? gi : t <= -1 ? -gi : Math.asin(t);
}
function id(t) {
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
  }, () => new Qh(e);
}
function sd(t) {
  return t.innerRadius;
}
function ad(t) {
  return t.outerRadius;
}
function od(t) {
  return t.startAngle;
}
function ld(t) {
  return t.endAngle;
}
function ud(t) {
  return t && t.padAngle;
}
function fd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < St))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function Kr(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Xn(o * o + l * l), f = u * l, h = -u * o, c = t + f, v = e + h, g = n + f, m = r + h, b = (c + g) / 2, $ = (v + m) / 2, C = g - c, T = m - v, N = C * C + T * T, I = i - s, G = c * m - g * v, at = (T < 0 ? -1 : 1) * Xn(nd(0, I * I * N - G * G)), Z = (G * T - C * at) / N, et = (-G * C - T * at) / N, dt = (G * T + C * at) / N, H = (-G * C + T * at) / N, it = Z - b, A = et - $, E = dt - b, ht = H - $;
  return it * it + A * A > E * E + ht * ht && (Z = dt, et = H), {
    cx: Z,
    cy: et,
    x01: -f,
    y01: -h,
    x11: Z * (i / I - 1),
    y11: et * (i / I - 1)
  };
}
function Ve() {
  var t = sd, e = ad, n = Ct(0), r = null, i = od, s = ld, a = ud, o = null, l = id(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), v = +e.apply(this, arguments), g = i.apply(this, arguments) - gi, m = s.apply(this, arguments) - gi, b = ga(m - g), $ = m > g;
    if (o || (o = f = l()), v < c && (h = v, v = c, c = h), !(v > St)) o.moveTo(0, 0);
    else if (b > si - St)
      o.moveTo(v * vn(g), v * we(g)), o.arc(0, 0, v, g, m, !$), c > St && (o.moveTo(c * vn(m), c * we(m)), o.arc(0, 0, c, m, g, $));
    else {
      var C = g, T = m, N = g, I = m, G = b, at = b, Z = a.apply(this, arguments) / 2, et = Z > St && (r ? +r.apply(this, arguments) : Xn(c * c + v * v)), dt = Ui(ga(v - c) / 2, +n.apply(this, arguments)), H = dt, it = dt, A, E;
      if (et > St) {
        var ht = _a(et / c * we(Z)), Me = _a(et / v * we(Z));
        (G -= ht * 2) > St ? (ht *= $ ? 1 : -1, N += ht, I -= ht) : (G = 0, N = I = (g + m) / 2), (at -= Me * 2) > St ? (Me *= $ ? 1 : -1, C += Me, T -= Me) : (at = 0, C = T = (g + m) / 2);
      }
      var tt = v * vn(C), te = v * we(C), Pe = c * vn(I), Ht = c * we(I);
      if (dt > St) {
        var pe = v * vn(T), Nt = v * we(T), ve = c * vn(N), ee = c * we(N), Rt;
        if (b < Pr)
          if (Rt = fd(tt, te, ve, ee, pe, Nt, Pe, Ht)) {
            var ln = tt - Rt[0], un = te - Rt[1], fn = pe - Rt[0], ne = Nt - Rt[1], ge = 1 / we(rd((ln * fn + un * ne) / (Xn(ln * ln + un * un) * Xn(fn * fn + ne * ne))) / 2), Ze = Xn(Rt[0] * Rt[0] + Rt[1] * Rt[1]);
            H = Ui(dt, (c - Ze) / (ge - 1)), it = Ui(dt, (v - Ze) / (ge + 1));
          } else
            H = it = 0;
      }
      at > St ? it > St ? (A = Kr(ve, ee, tt, te, v, it, $), E = Kr(pe, Nt, Pe, Ht, v, it, $), o.moveTo(A.cx + A.x01, A.cy + A.y01), it < dt ? o.arc(A.cx, A.cy, it, At(A.y01, A.x01), At(E.y01, E.x01), !$) : (o.arc(A.cx, A.cy, it, At(A.y01, A.x01), At(A.y11, A.x11), !$), o.arc(0, 0, v, At(A.cy + A.y11, A.cx + A.x11), At(E.cy + E.y11, E.cx + E.x11), !$), o.arc(E.cx, E.cy, it, At(E.y11, E.x11), At(E.y01, E.x01), !$))) : (o.moveTo(tt, te), o.arc(0, 0, v, C, T, !$)) : o.moveTo(tt, te), !(c > St) || !(G > St) ? o.lineTo(Pe, Ht) : H > St ? (A = Kr(Pe, Ht, pe, Nt, c, -H, $), E = Kr(tt, te, ve, ee, c, -H, $), o.lineTo(A.cx + A.x01, A.cy + A.y01), H < dt ? o.arc(A.cx, A.cy, H, At(A.y01, A.x01), At(E.y01, E.x01), !$) : (o.arc(A.cx, A.cy, H, At(A.y01, A.x01), At(A.y11, A.x11), !$), o.arc(0, 0, c, At(A.cy + A.y11, A.cx + A.x11), At(E.cy + E.y11, E.cx + E.x11), $), o.arc(E.cx, E.cy, H, At(E.y11, E.x11), At(E.y01, E.x01), !$))) : o.arc(0, 0, c, I, N, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Pr / 2;
    return [vn(h) * f, we(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ct(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ct(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Ct(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ct(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ct(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Ct(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ct(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function cd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function hd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dd(t) {
  return t;
}
function ma() {
  var t = dd, e = hd, n = null, r = Ct(0), i = Ct(si), s = Ct(0);
  function a(o) {
    var l, u = (o = cd(o)).length, f, h, c = 0, v = new Array(u), g = new Array(u), m = +r.apply(this, arguments), b = Math.min(si, Math.max(-si, i.apply(this, arguments) - m)), $, C = Math.min(Math.abs(b) / u, s.apply(this, arguments)), T = C * (b < 0 ? -1 : 1), N;
    for (l = 0; l < u; ++l)
      (N = g[v[l] = l] = +t(o[l], l, o)) > 0 && (c += N);
    for (e != null ? v.sort(function(I, G) {
      return e(g[I], g[G]);
    }) : n != null && v.sort(function(I, G) {
      return n(o[I], o[G]);
    }), l = 0, h = c ? (b - u * T) / c : 0; l < u; ++l, m = $)
      f = v[l], N = g[f], $ = m + (N > 0 ? N * h : 0) + T, g[f] = {
        data: o[f],
        index: l,
        value: N,
        startAngle: m,
        endAngle: $,
        padAngle: C
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ct(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Ct(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Ct(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Ct(+o), a) : s;
  }, a;
}
function Ar(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ar.prototype = {
  constructor: Ar,
  scale: function(t) {
    return t === 1 ? this : new Ar(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ar(this.k, this.x + this.k * t, this.y + this.k * e);
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
Ar.prototype;
var pd = /* @__PURE__ */ gu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const vd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function jo(t, e) {
  ms(e, !0), wo(t, vd);
  let n = Et(e, "jsonData", 7), r = Et(e, "currentRound", 7, 1), i = Et(e, "mouseEventType", 15), s = Et(e, "mouseData", 15), a = Et(e, "mouseY", 15), o = Et(e, "requestRoundChange", 7, (p) => {
  }), l = Et(e, "candidateColors", 23, () => []), u = Et(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1);
  function f(p) {
    return p.isTransfer ? `${p.label}__transfer` : p.transferIndex != null ? `${p.label}__${p.transferIndex}` : p.label;
  }
  const h = 800, c = 800, v = Math.min(h, c) * 0.3, g = h / 2, m = c / 2, b = "Pie", $ = "Donut", C = "TextLayer", T = "url(#cross-hatch)", N = 1.15, I = 0.1, G = 750, at = 800;
  function Z(p) {
    return "hatch-" + p.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let et = [], dt = [], H = [], it = 0, A = /* @__PURE__ */ yt(
    0
    // $state just to make it inspectable
  ), E = 0;
  const ht = {}, Me = "No Further Rankings";
  let tt = /* @__PURE__ */ yt(null);
  function te() {
    const p = gt(w(tt));
    p.select("#" + b).remove(), p.select("#" + $).remove(), p.select("#" + C).remove();
  }
  function Pe(p) {
    o() && (K = p, o()(p));
  }
  function Ht(p) {
    te(), H = pe(p), et = Zo(p, b, H, g, m, 0, Nt());
  }
  bu(() => {
    Mi(), setTimeout(
      () => {
        Ht(r());
      },
      0
    );
  });
  function pe(p) {
    const _ = zn(p);
    return it = fn(p), _;
  }
  function Nt() {
    return v;
  }
  function ve() {
    return Nt() * 1.41;
  }
  function ee(p) {
    let _ = 0;
    for (let y = 1; y < p; y++) {
      const P = n().results[y - 1].tallyResults;
      for (let R = 0; R < P.length; R++) {
        const S = P[R].transfers;
        if (S) {
          const M = S.exhausted;
          M && (_ += Number(M));
        }
      }
    }
    return _;
  }
  function Rt(p, _) {
    if (p === "exhausted") return ee(_);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[p]);
    }
  }
  function ln(p, _) {
    return Rt(p, _).toLocaleString("en-US");
  }
  function un(p, _) {
    return (Rt(p, _) / it).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function fn(p) {
    const _ = n().results[p - 1].tally;
    let y = 0;
    for (let [P, R] of Object.entries(_))
      y += Number(R);
    return y;
  }
  function ne(p, _) {
    if (!p || p < 1 || p > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    if (u() && p === n().results.length)
      return [];
    const y = n().results[p - 1].tallyResults, P = [];
    for (let R = 0; R < y.length; R++) {
      const S = y[R][_];
      S != null && P.push(S);
    }
    return P;
  }
  function ge(p) {
    return ne(p, "eliminated");
  }
  function Ze(p) {
    let _ = [];
    for (let y = 1; y <= p; y++) _ = _.concat(ne(y, "elected"));
    return _;
  }
  function ki(p, _) {
    const y = n().results[_ - 1].tallyResults;
    let P = 0;
    const R = y.findIndex((S) => (S == null ? void 0 : S.elected) && p == S.elected);
    if (R >= 0) {
      const S = y[R].transfers;
      if (S)
        for (let [M, F] of Object.entries(S)) P += Number(F);
    } else
      return 0;
    return P;
  }
  function zn(p) {
    const _ = n().results;
    let y = _[Math.max(0, p - 2)].tally;
    const P = [], R = [];
    for (let [M, F] of Object.entries(y))
      P.push({ label: M, value: 0 });
    y = _[p - 1].tally;
    for (let M of P) {
      const F = Number(y[M.label]), q = ki(M.label, p);
      q > 0 ? (R.push({
        label: M.label,
        value: q,
        isTransfer: !0
      }), M.value = F - q, R.push(M)) : (M.value = F, R.push(M));
    }
    const S = ee(p);
    return R.push({ label: "exhausted", value: S }), R;
  }
  function Mi() {
    const p = gt(w(tt)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, P] of Object.entries(n().results[0].tally)) {
      !l() || l().length === 0 ? _ < 10 ? ht[y] = ed[_] : ht[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : ht[y] = l()[_ % l().length], _++;
      {
        const R = p.clone(!0);
        R.attr("id", Z(y)).select("rect").attr("fill", ht[y]), R.selectAll("circle").attr("fill", "#383838");
      }
    }
    ht.exhausted = T, ht["Inactive Ballots"] = T;
  }
  function x() {
    gt(w(tt)).select("#" + $).remove();
  }
  function B(p, _) {
    const y = ii("global").duration(at);
    _ && y.on("end", _), x(), Fe(p), Jo(), tl(0, Nt()), Hr();
  }
  function nt(p, _) {
    const y = ii("global").duration(at);
    _ && y.on("end", _), Oe(p);
  }
  function ot(p, _) {
    const y = ii("global").duration(at);
    _ && y.on("end", _), Hn(p), Yn(Nt());
  }
  let J = !1, rt = [];
  function $t() {
    Hr(), J = !1, Je();
  }
  function Je() {
    if (rt.length === 0) {
      K !== r() && (r() === K + 1 && K > 0 && r() <= n().results.length ? (K = r(), re(r())) : r() >= 1 && r() <= n().results.length && (K = r(), Q(A, 0), Ht(r())));
      return;
    }
    const p = rt.shift();
    switch (p.type) {
      case "round": {
        const _ = p.round;
        _ === K + 1 && K > 0 && _ <= n().results.length ? (K = _, re(_)) : (_ !== K && _ >= 1 && _ <= n().results.length && (K = _, Q(A, 0), Ht(_)), Je());
        break;
      }
      case "step":
        hn();
        break;
    }
  }
  function re(p) {
    if (p <= 1 || p > n().results.length) {
      Je();
      return;
    }
    J = !0, E = p, Q(A, 0), B(E - 1, () => {
      nt(E - 1, () => {
        ot(E, $t);
      });
    });
  }
  function cn() {
    J || (J = !0, E = r(), De());
  }
  function De() {
    if (Q(
      A,
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), rt.length > 0) {
      $t();
      return;
    }
    const p = E < n().results.length - 1 ? De : $t;
    B(E, () => {
      nt(E, () => {
        E++, Pe(E), ot(E, p);
      });
    });
  }
  As(() => {
    _e();
  });
  let K = 0;
  function _e() {
    if (K != r()) {
      if (J) {
        rt.push({ type: "round", round: r() });
        return;
      }
      K == r() - 1 && K > 0 ? Qe() : Yt(r()), K = r();
    }
  }
  function Yt(p) {
    if (J) {
      rt.push({ type: "round", round: p });
      return;
    }
    Q(A, 0), Ht(p);
  }
  function Qe() {
    if (J) {
      rt.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (E = r(), E > n().results.length) {
      Hr(), J = !1;
      return;
    }
    J = !0, w(A) === 0 ? B(E - 1, () => {
      nt(E - 1, () => {
        ot(E, $t);
      });
    }) : w(A) === 1 ? nt(E - 1, () => {
      ot(E, $t);
    }) : w(A) === 2 && ot(E, $t), Q(A, 0);
  }
  function hn() {
    if (r() > n().results.length) {
      Hr(), J = !1;
      return;
    }
    if (J) {
      rt.push({ type: "step" });
      return;
    }
    J = !0, Q(A, (w(A) + 1) % 3), E = r(), w(A) === 1 ? B(E, $t) : w(A) === 2 ? nt(E, $t) : w(A) === 0 ? (E++, Pe(E), ot(E, $t)) : (J = !1, console.warn("displayPhase out of range at ", w(A)));
  }
  function Hn(p) {
    H = zn(p), et = el(p, b, H, 0, Nt(), !0);
  }
  function Yn(p, _) {
    const y = gt(w(tt)).select("#" + $), P = Ve().outerRadius(p).innerRadius(p - 1), R = y.selectAll(".slice");
    let S = R.size();
    function M() {
      S--, S === 0 && Qo();
    }
    R.select("path").transition("global").duration(G).attr("d", (F) => P(F)).on("end", (F) => M());
  }
  function Fe(p) {
    const _ = vr(p, et);
    dt = Is(p, $, _, g, m, Nt(), ve(), !1, !0);
  }
  function Oe(p) {
    const _ = Le(p, dt, et);
    dt = Ls(p, $, _, Nt(), ve(), !1);
  }
  function Ie(p) {
    return ht[p.data.label];
  }
  function pr(p) {
    const _ = {}, y = n().results[p - 1].tallyResults;
    for (let P = 0; P < y.length; P++) {
      let R = y[P].eliminated;
      if (R === void 0 && (R = y[P].elected), R === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const S = y[P].transfers;
      if (S === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [M, F] of Object.entries(S))
        _[M] === void 0 ? _[M] = Number(F) : _[M] += Number(F);
    }
    return _;
  }
  function vr(p, _) {
    const y = [], P = it, R = n().results[p - 1].tallyResults;
    for (let S = 0; S < R.length; S++) {
      let M = R[S].eliminated;
      if (M === void 0 && (M = R[S].elected), M === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const F = R[S].transfers;
      if (F === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let q = _.find((O) => O.data.label == M && O.data.isTransfer);
      q === void 0 && (q = _.find((O) => O.data.label == M && !O.data.isTransfer));
      let U = 0;
      if (q) U = q.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [O, W] of Object.entries(F)) {
        let st;
        const ye = _.find((ft) => ft.data.label == O);
        if (ye)
          st = structuredClone(ye);
        else if (O == "exhausted")
          st = {
            data: { label: O, value: Number(W) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (O == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", W);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", O);
          continue;
        }
        const k = Number(W) / P * 2 * Math.PI;
        st.startAngle = U, U = st.endAngle = U + k, st.index = S, st.data.transferIndex = S, y.push(st);
      }
    }
    return y;
  }
  function gr(p, _, y) {
    const P = {};
    for (let [R, S] of Object.entries(p)) {
      const M = y.find((U) => R == U.data.label);
      if (M === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", R);
        continue;
      }
      const F = (M.startAngle + M.endAngle) / 2, q = p[M.data.label] / _ * 2 * Math.PI;
      P[M.data.label] = F - q / 2;
    }
    return P;
  }
  function Le(p, _, y) {
    const P = [], R = it, S = pr(p), M = gr(S, R, y);
    for (let [F, q] of _.entries()) {
      const U = structuredClone(q), O = q.endAngle - q.startAngle, W = y.find((st) => q.data.label === st.data.label && !st.data.isTransfer);
      if (W) {
        const st = W.data.label;
        U.startAngle = M[st], M[st] += O, U.endAngle = U.startAngle + O;
      } else if (q.data.label === "exhausted")
        U.startAngle = q.startAngle, U.endAngle = q.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", q.data.label);
        continue;
      }
      U.index = F, P.push(U);
    }
    return P;
  }
  function me(p, _, y, P, R, S) {
    const F = gt(w(tt)).append("g").attr("id", C).attr("transform", `translate(${y}, ${P})`), q = Ve().innerRadius(R * N).outerRadius(R * N);
    F.selectAll("text").data(_).enter().each(function(U) {
      U.endAngle - U.startAngle < I || U.data.isTransfer || gt(this).append("g").attr("id", (O) => f(O.data)).classed("eliminated", (O) => S.includes(O.data.label) || O.data.isTransfer === !0).each(function(O, W) {
        O.data.label === "exhausted" && gt(this).on("mouseenter", (st, ye) => nl(st)).on("mouseleave", (st, ye) => rl());
      }).append("text").attr("transform", (O) => `translate(${q.centroid(O)})`).attr("text-anchor", (O) => Di(O.startAngle, O.endAngle)).text((O) => O.data.label === "exhausted" ? Me : O.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((O) => ln(O.data.label, p) + " (" + un(O.data.label, p) + ")");
    });
  }
  function Pi(p, _, y, P) {
    const S = gt(w(tt)).select("#" + C), M = S.selectAll("tspan"), F = S.selectAll("g").data(_, (W) => f(W.data)).classed("eliminated", (W) => P.includes(W.data.label) || W.data.isTransfer === !0), q = Ve().innerRadius(y * N).outerRadius(y * N + 1);
    M.transition("global").duration(G).attr("transform", (W) => `translate(${q.centroid(W)})`).attr("text-anchor", (W) => Di(W.startAngle, W.endAngle)), F.select("text").transition("global").duration(G).attr("transform", (W) => `translate(${q.centroid(W)})`).attr("text-anchor", (W) => Di(W.startAngle, W.endAngle)).on("end", (W) => O());
    let U = F.size();
    function O(W) {
      U--, U === 0 && (S.remove(), me(p, _, g, m, y, P));
    }
  }
  function Zo(p, _, y, P, R, S, M, F = !0, q = !1) {
    const O = ma().sort(null).value((W) => W.value)(y);
    return Is(p, _, O, P, R, S, M, F, q), O;
  }
  function Hr() {
    gt(w(tt)).select("#" + b).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function Is(p, _, y, P, R, S, M, F, q) {
    const U = ge(p), O = Ze(p), ye = gt(w(tt)).attr("viewBox", `0 0 ${h} ${c}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${P}, ${R})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (k) => U.includes(k.data.label) || k.data.isTransfer === !0).classed("elected", (k) => O.includes(k.data.label) && !k.data.isTransfer).attr("id", (k) => f(k.data)).on("mouseenter", (k, ft) => Oi(k, ft)).on("mouseleave", (k, ft) => Ii(k, ft)), _r = Ve().outerRadius(M).innerRadius(S);
    if (q) {
      const k = Ve().outerRadius(S + 1).innerRadius(S);
      ye.append("path").attr("d", k).transition("global").duration(G).attr("d", (ft) => _r(ft)).attr("fill", (ft) => Ie(ft)).on("end", (ft) => Fi());
    } else
      ye.append("path").attr("d", (k) => _r(k)).attr("fill", (k) => Ie(k)), Fi();
    return F && me(p, y, P, R, M, U), y;
  }
  function Jo() {
    const y = gt(w(tt)).select("#" + C).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function Qo() {
    const y = gt(w(tt)).select("#" + C).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function tl(p, _) {
    const R = gt(w(tt)).select("#" + b).selectAll(".eliminated"), S = Ve().innerRadius(p), M = Ve().outerRadius(_);
    R.classed("finished", !0).select("path").transition("global").duration(G).attrTween("d", function(F) {
      const q = Wn(_, p);
      return function(U) {
        return M.innerRadius(q(U)), M(F);
      };
    }).attr("fill", (F) => `url(#${Z(F.data.label)})`), R.clone(!0).classed("finished", !0).select("path").transition("global").duration(G).attrTween("d", function(F) {
      const q = Wn(_, p);
      return function(U) {
        return S.outerRadius(q(U)), S(F);
      };
    }).attr("fill", (F) => Ie(F));
  }
  function Di(p, _) {
    const y = (p + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Fi() {
    gt(w(
      tt
      // force redisplay of text labels
    )).select("#" + C).raise().append("g").remove();
  }
  function el(p, _, y, P, R, S) {
    const F = ma().sort(null).value((q) => q.value)(y);
    return Ls(p, _, F, P, R, S), F;
  }
  function Ls(p, _, y, P, R, S) {
    const M = ge(p), F = Ze(p), q = Ve().outerRadius(R).innerRadius(P).startAngle((k) => k.startAngle).endAngle((k) => k.endAngle), U = Ve().outerRadius(R).innerRadius(P), W = gt(w(tt)).select("#" + _);
    W.selectAll(".slice").attr("prevStart", (k) => k.startAngle).attr("prevEnd", (k) => k.endAngle);
    const st = W.selectAll(".slice").data(y, (k) => f(k.data));
    st.enter().append("g").attr("class", "slice").attr("id", (k) => f(k.data)).classed("eliminated", !0).on("mouseenter", (k, ft) => Oi(k, ft)).on("mouseleave", (k, ft) => Ii(k, ft)).append("path").attr("d", (k) => U(k)).attr("fill", (k) => Ie(k)), st.classed("eliminated", (k) => M.includes(k.data.label)).classed("elected", (k) => F.includes(k.data.label)).on("mouseenter", (k, ft) => Oi(k, ft)).on("mouseleave", (k, ft) => Ii(k, ft));
    let ye = st.size();
    function _r() {
      ye--, ye <= 0 && (Fi(), W.selectAll(".finished").remove());
    }
    return st.select("path").transition("global").duration(G).attrTween("d", function(k) {
      const ft = Number(gt(this.parentNode).attr("prevStart")), sl = Number(gt(this.parentNode).attr("prevEnd")), al = Wn(ft, k.startAngle), ol = Wn(sl, k.endAngle);
      return (Vs) => (q.startAngle(al(Vs)).endAngle(ol(Vs)), q(k));
    }).on("end", _r), S && Pi(p, y, R, M), y;
  }
  function Oi(p, _) {
    s(_.data.label), i("enter"), a(p.clientY);
  }
  function Ii(p, _) {
    s(_.data.label), i("leave");
  }
  function nl(p, _) {
    i("show-exhausted"), a(p.clientY);
  }
  function rl(p, _) {
    i("hide-exhausted");
  }
  var il = {
    pieColors: ht,
    exhaustedLabel: Me,
    countExhaustedVotes: ee,
    getEliminatedCandidates: ge,
    getElectedCandidates: Ze,
    runFullAnimationFn: cn,
    animateOnePhaseFn: hn,
    get jsonData() {
      return n();
    },
    set jsonData(p) {
      n(p), mt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(p = 1) {
      r(p), mt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(p) {
      i(p), mt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(p) {
      s(p), mt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(p) {
      a(p), mt();
    },
    get requestRoundChange() {
      return o();
    },
    set requestRoundChange(p = (_) => {
    }) {
      o(p), mt();
    },
    get candidateColors() {
      return l();
    },
    set candidateColors(p = []) {
      l(p), mt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return u();
    },
    set excludeFinalWinnerAndEliminatedCandidate(p = !1) {
      u(p), mt();
    }
  }, qs = pd();
  return Qr(qs, (p) => Q(tt, p), () => w(tt)), ae(t, qs), ys(il);
}
bo(
  jo,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseY: {},
    requestRoundChange: {},
    candidateColors: {},
    excludeFinalWinnerAndEliminatedCandidate: {}
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
  { mode: "open" }
);
var gd = /* @__PURE__ */ Vn("<span> </span> <!>", 1), _d = /* @__PURE__ */ Vn("About to eliminate: <!>", 1), md = /* @__PURE__ */ Vn("<span> </span> <!>", 1), yd = /* @__PURE__ */ Vn(" <!>", 1), wd = /* @__PURE__ */ Vn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), xd = /* @__PURE__ */ Vn("<span> </span> <br/>", 1), bd = /* @__PURE__ */ Vn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button">One Small Step</button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const $d = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;left:50%;transform:translate(-50%);font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.pie-chart-container.svelte-1r6y5gl {
  /* width: 90%; */
  /* min-width: 800px; /* Larger minimum size */width:100%; /* Change from 90% to 100% */min-width:auto; /* Remove the 800px minimum */flex-grow:0; /* Don't grow beyond specified width */margin:0 auto;margin-right:40px; /* Add extra space on right */margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;
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
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function Ad(t, e) {
  ms(e, !0), wo(t, $d);
  const n = 0.85;
  let r = Et(e, "electionSummary", 7), i = Et(e, "currentRound", 7, 1), s = Et(e, "requestRoundChange", 7, (x) => {
  }), a = Et(e, "candidateColors", 23, () => []), o = Et(e, "textForWinner", 7, "elected"), l = Et(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = Et(e, "firstRoundDeterminesPercentages", 7, !0), f = Et(e, "showCaptions", 7, !1);
  const h = {
    elected: {
      caption: "Elected",
      event: "was elected",
      infinitive: "to be elected"
    },
    won: { caption: "Won", event: "won", infinitive: "to win" },
    advanced: {
      caption: "Advanced",
      event: "advanced to the general",
      infinitive: "to advance to the general"
    },
    leading: {
      caption: "Leading",
      event: "is in the lead",
      infinitive: "to take the lead"
    }
  };
  let c = /* @__PURE__ */ Bn(() => h[o()] ?? h.elected), v = /* @__PURE__ */ yt(null), g = /* @__PURE__ */ yt(null), m = /* @__PURE__ */ yt(""), b = /* @__PURE__ */ yt(yn([])), $ = /* @__PURE__ */ yt(""), C = /* @__PURE__ */ yt(""), T = /* @__PURE__ */ yt(0), N = /* @__PURE__ */ Bn(() => I(r()));
  function I(x) {
    if (typeof x == "string")
      try {
        x = JSON.parse(x);
      } catch (B) {
        return console.error("Failed to parse JSON string:", B), {};
      }
    return x || {};
  }
  function G(x) {
    s() ? s()(x) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function at() {
    switch (w($)) {
      case "enter":
        ((x) => {
          var B = El(x, 2);
          Q(b, B[0], !0), Q(m, B[1], !0);
        })(et(w(C), i())), w(v) && (w(v).style.top = String((w(T) || 0) + 20) + "px", w(v).style.opacity = String(n));
        break;
      case "leave":
        w(v) && (w(v).style.opacity = "0"), Q(b, [], !0), Q(m, "");
        break;
      case "show-exhausted":
        w(g) && (w(g).style.top = String((w(T) || 0) + 20) + "px", w(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        w(g) && (w(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", w($));
        break;
    }
  }
  As(() => at());
  function Z(x, B) {
    return x == 1 ? B ? "vote was" : "vote will be" : B ? "votes were" : "votes will be";
  }
  function et(x, B) {
    const nt = [], ot = x === "exhausted" ? tt() : x;
    let J;
    x == "exhausted" ? J = ht(1) : J = w(N).results[0].tally[x], nt.push(`${ot} started with ${J} votes.`);
    for (let rt = 1; rt <= B; rt++) {
      rt === B && (x == "exhausted" ? J = ht(B) : J = w(N).results[B - 1].tally[x], nt.push(`${ot} has ${J} votes at round ${B}.`));
      const $t = w(N).results[rt - 1].tallyResults, Je = it(rt);
      for (let re = 0; re < $t.length; re++) {
        const cn = $t[re].transfers, De = $t[re].eliminated, K = $t[re].elected;
        if (!Je) {
          if (De)
            De === x && nt.push(`${ot} will be eliminated on round ${rt}.`);
          else if (x === K && (nt.push(`${ot} ${w(c).event} on round ${rt}.`), cn))
            for (let [Yt, Qe] of Object.entries(cn))
              nt.push(`${Qe} ${Z(Number(Qe), rt < B)} transferred to ${Yt} on round ${rt}.`);
        }
        const _e = De || K;
        if (_e) {
          const Yt = Number(cn[x]);
          Yt && nt.push(`${Yt} ${Z(Yt, rt < B)} transferred from ${_e} on round ${rt}.`);
        }
      }
    }
    return [nt, ot];
  }
  function dt() {
    let x = 0;
    for (let B = 1; B <= w(N).results.length; B++) {
      if (it(B)) continue;
      const nt = w(N).results[B - 1].tallyResults;
      for (let ot = 0; ot < nt.length; ot++)
        nt[ot].elected && x++;
    }
    return x;
  }
  let H;
  function it(x) {
    return l() && w(N).results && x === w(N).results.length;
  }
  function A(x) {
    return it(x) ? [] : H ? H.getEliminatedCandidates(x) : [];
  }
  function E(x) {
    return it(x) ? [] : H ? H.getElectedCandidates(x) : [];
  }
  function ht(x) {
    return H ? H.countExhaustedVotes(x) : 0;
  }
  function Me() {
    H && H.animateOnePhaseFn && H.animateOnePhaseFn();
  }
  function tt() {
    return H ? H.exhaustedLabel : "";
  }
  function te() {
    return H ? H.pieColors : {};
  }
  var Pe = {
    get electionSummary() {
      return r();
    },
    set electionSummary(x) {
      r(x), mt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(x = 1) {
      i(x), mt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(x = (B) => {
    }) {
      s(x), mt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(x = []) {
      a(x), mt();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(x = "elected") {
      o(x), mt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(x = !1) {
      l(x), mt();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(x = !0) {
      u(x), mt();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(x = !1) {
      f(x), mt();
    }
  }, Ht = bd(), pe = dn(Ht), Nt = Ut(pe);
  Nt.__click = Me, Bt(pe);
  var ve = ie(pe, 4), ee = Ut(ve), Rt = Ut(ee), ln = Ut(Rt);
  Qr(
    jo(ln, {
      get jsonData() {
        return w(N);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: G,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return l();
      },
      get mouseEventType() {
        return w($);
      },
      set mouseEventType(x) {
        Q($, x, !0);
      },
      get mouseData() {
        return w(C);
      },
      set mouseData(x) {
        Q(C, x, !0);
      },
      get mouseY() {
        return w(T);
      },
      set mouseY(x) {
        Q(T, x, !0);
      }
    }),
    (x) => H = x,
    () => H
  ), Bt(Rt), Bt(ee);
  var un = ie(ee, 2);
  {
    var fn = (x) => {
      var B = wd(), nt = dn(B), ot = Ut(nt);
      Bt(nt);
      var J = ie(nt, 2), rt = Ut(J);
      {
        var $t = (K) => {
          var _e = _d(), Yt = ie(dn(_e));
          zi(Yt, 17, () => A(i()), Vi, (Qe, hn, Hn) => {
            var Yn = gd(), Fe = dn(Yn);
            let Oe;
            var Ie = Ut(Fe, !0);
            Bt(Fe);
            var pr = ie(Fe, 2);
            {
              var vr = (Le) => {
                var me = js(", ");
                ae(Le, me);
              }, gr = /* @__PURE__ */ Bn(() => Hn < A(i()).length - 1);
              mr(pr, (Le) => {
                w(gr) && Le(vr);
              });
            }
            Un(
              (Le) => {
                Oe = Qs(Fe, "", Oe, Le), pn(Ie, w(hn));
              },
              [() => ({ color: te()[w(hn)] })]
            ), ae(Qe, Yn);
          }), ae(K, _e);
        }, Je = /* @__PURE__ */ Bn(() => A(i()).length > 0);
        mr(rt, (K) => {
          w(Je) && K($t);
        });
      }
      var re = ie(rt, 2);
      {
        var cn = (K) => {
          var _e = yd(), Yt = dn(_e), Qe = ie(Yt);
          zi(Qe, 17, () => E(i()), Vi, (hn, Hn, Yn) => {
            var Fe = md(), Oe = dn(Fe);
            let Ie;
            var pr = Ut(Oe, !0);
            Bt(Oe);
            var vr = ie(Oe, 2);
            {
              var gr = (me) => {
                var Pi = js(", ");
                ae(me, Pi);
              }, Le = /* @__PURE__ */ Bn(() => Yn < E(i()).length - 1);
              mr(vr, (me) => {
                w(Le) && me(gr);
              });
            }
            Un(
              (me) => {
                Ie = Qs(Oe, "", Ie, me), pn(pr, w(Hn));
              },
              [() => ({ color: te()[w(Hn)] })]
            ), ae(hn, Fe);
          }), Un(() => pn(Yt, `${w(c).caption ?? ""}: `)), ae(K, _e);
        }, De = /* @__PURE__ */ Bn(() => E(i()).length > 0);
        mr(re, (K) => {
          w(De) && K(cn);
        });
      }
      Bt(J), Un((K) => pn(ot, `${w(N).config.contest ?? ""}, ${K ?? ""} ${w(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [dt]), ae(x, B);
    };
    mr(un, (x) => {
      f() && x(fn);
    });
  }
  Bt(ve);
  var ne = ie(ve, 2), ge = Ut(ne), Ze = Ut(ge, !0);
  Bt(ge);
  var ki = ie(ge, 2);
  zi(ki, 17, () => w(b), Vi, (x, B) => {
    var nt = xd(), ot = dn(nt), J = Ut(ot, !0);
    Bt(ot), Gi(2), Un(() => pn(J, w(B))), ae(x, nt);
  }), Bt(ne), Qr(ne, (x) => Q(v, x), () => w(v));
  var zn = ie(ne, 2), Mi = Ut(zn);
  return Gi(2), Bt(zn), Qr(zn, (x) => Q(g, x), () => w(g)), Un(
    (x) => {
      pn(Ze, w(m)), pn(Mi, `"${x ?? ""}" means all the candidates ranked on `);
    },
    [tt]
  ), ae(t, Ht), ys(Pe);
}
du(["click"]);
customElements.define("pie-chart", bo(
  Ad,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    candidateColors: {},
    textForWinner: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    showCaptions: {}
  },
  [],
  [],
  { mode: "open" }
));
