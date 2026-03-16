var hl = Object.defineProperty;
var Ws = (t) => {
  throw TypeError(t);
};
var dl = (t, e, n) => e in t ? hl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var at = (t, e, n) => dl(t, typeof e != "symbol" ? e + "" : e, n), zi = (t, e, n) => e.has(t) || Ws("Cannot " + n);
var v = (t, e, n) => (zi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => e.has(t) ? Ws("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), F = (t, e, n, r) => (zi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), gt = (t, e, n) => (zi(t, e, "access private method"), n);
var Aa;
typeof window < "u" && ((Aa = window.__svelte ?? (window.__svelte = {})).v ?? (Aa.v = /* @__PURE__ */ new Set())).add("5");
const pl = 1, vl = 2, gl = 16, _l = 1, ml = 4, yl = 8, wl = 16, xl = 2, ws = "[", $i = "[!", xs = "]", rr = {}, bt = Symbol(), bl = "http://www.w3.org/1999/xhtml", ji = !1;
var Ca = Array.isArray, $l = Array.prototype.indexOf, ir = Array.prototype.includes, Ai = Array.from, fi = Object.keys, ci = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Al = Object.prototype, El = Array.prototype, Rl = Object.getPrototypeOf, Us = Object.isExtensible;
const Cl = () => {
};
function Tl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ta() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Nl(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const At = 2, Sr = 4, Ei = 8, Na = 1 << 24, Ze = 16, pe = 32, un = 64, Sa = 128, ee = 512, mt = 1024, Et = 2048, de = 4096, Bt = 8192, Ue = 16384, hr = 32768, sr = 65536, Gs = 1 << 17, ka = 1 << 18, qn = 1 << 19, Sl = 1 << 20, sn = 1 << 25, Pn = 65536, Ji = 1 << 21, bs = 1 << 22, an = 1 << 23, Cr = Symbol("$state"), Ma = Symbol("legacy props"), _n = new class extends Error {
  constructor() {
    super(...arguments);
    at(this, "name", "StaleReactionError");
    at(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Yr = 3, dr = 8;
function kl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ml() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Dl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ol(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Il() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ll() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ql(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ri(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function We(t) {
  j = t;
}
let Y;
function Lt(t) {
  if (t === null)
    throw Ri(), rr;
  return Y = t;
}
function Ci() {
  return Lt(/* @__PURE__ */ ke(Y));
}
function Vt(t) {
  if (j) {
    if (/* @__PURE__ */ ke(Y) !== null)
      throw Ri(), rr;
    Y = t;
  }
}
function Qi(t = 1) {
  if (j) {
    for (var e = t, n = Y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(n);
    Y = n;
  }
}
function hi(t = !0) {
  for (var e = 0, n = Y; ; ) {
    if (n.nodeType === dr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === xs) {
        if (e === 0) return n;
        e -= 1;
      } else (r === ws || r === $i || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ke(n)
    );
    t && n.remove(), n = i;
  }
}
function Pa(t) {
  if (!t || t.nodeType !== dr)
    throw Ri(), rr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Da(t) {
  return t === this.v;
}
function Bl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Fa(t) {
  return !Bl(t, this.v);
}
let Wl = !1, Wt = null;
function ar(t) {
  Wt = t;
}
function $s(t, e = !1, n) {
  Wt = {
    p: Wt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function As(t) {
  var e = (
    /** @type {ComponentContext} */
    Wt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ao(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Wt = e.p, t ?? /** @type {T} */
  {};
}
function Oa() {
  return !0;
}
let mn = [];
function Ia() {
  var t = mn;
  mn = [], Tl(t);
}
function Nn(t) {
  if (mn.length === 0 && !Tr) {
    var e = mn;
    queueMicrotask(() => {
      e === mn && Ia();
    });
  }
  mn.push(t);
}
function Ul() {
  for (; mn.length > 0; )
    Ia();
}
function La(t) {
  var e = U;
  if (e === null)
    return V.f |= an, t;
  if ((e.f & hr) === 0 && (e.f & Sr) === 0)
    throw t;
  or(t, e);
}
function or(t, e) {
  for (; e !== null; ) {
    if ((e.f & Sa) !== 0) {
      if ((e.f & hr) === 0)
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
const Gl = -7169;
function lt(t, e) {
  t.f = t.f & Gl | e;
}
function Es(t) {
  (t.f & ee) !== 0 || t.deps === null ? lt(t, mt) : lt(t, de);
}
function qa(t) {
  if (t !== null)
    for (const e of t)
      (e.f & At) === 0 || (e.f & Pn) === 0 || (e.f ^= Pn, qa(
        /** @type {Derived} */
        e.deps
      ));
}
function Va(t, e, n) {
  (t.f & Et) !== 0 ? e.add(t) : (t.f & de) !== 0 && n.add(t), qa(t.deps), lt(t, mt);
}
const Ur = /* @__PURE__ */ new Set();
let B = null, $t = null, Ft = [], Ti = null, ts = !1, Tr = !1;
var Zn, jn, bn, Jn, Or, Ir, $n, Ye, Qn, Se, es, ns, Ya;
const Ys = class Ys {
  constructor() {
    L(this, Se);
    at(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    at(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    at(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, Zn, /* @__PURE__ */ new Set());
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
    L(this, Jn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, Or, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, Ir, /* @__PURE__ */ new Set());
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
    L(this, Ye, /* @__PURE__ */ new Map());
    at(this, "is_fork", !1);
    L(this, Qn, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, Jn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Ye).has(e) || v(this, Ye).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, Ye).get(e);
    if (n) {
      v(this, Ye).delete(e);
      for (var r of n.d)
        lt(r, Et), ce(r);
      for (r of n.m)
        lt(r, de), ce(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Ft = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      gt(this, Se, es).call(this, s, n, r);
    if (this.is_deferred()) {
      gt(this, Se, ns).call(this, r), gt(this, Se, ns).call(this, n);
      for (const [s, a] of v(this, Ye))
        Ba(s, a);
    } else {
      for (const s of v(this, Zn)) s();
      v(this, Zn).clear(), v(this, bn) === 0 && gt(this, Se, Ya).call(this), B = null, Ks(r), Ks(n), (i = v(this, Or)) == null || i.resolve();
    }
    $t = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== bt && !this.previous.has(e) && this.previous.set(e, n), (e.f & an) === 0 && (this.current.set(e, e.v), $t == null || $t.set(e, e.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, $t = null);
  }
  flush() {
    if (this.activate(), Ft.length > 0) {
      if (Ha(), B !== null && B !== this)
        return;
    } else v(this, bn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, jn)) e(this);
    v(this, jn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    F(this, bn, v(this, bn) + 1), e && F(this, Jn, v(this, Jn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    F(this, bn, v(this, bn) - 1), e && F(this, Jn, v(this, Jn) - 1), !v(this, Qn) && (F(this, Qn, !0), Nn(() => {
      F(this, Qn, !1), this.is_deferred() ? Ft.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Ir))
      v(this, $n).delete(e), lt(e, Et), ce(e);
    for (const e of v(this, $n))
      lt(e, de), ce(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, Zn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, jn).add(e);
  }
  settled() {
    return (v(this, Or) ?? F(this, Or, Ta())).promise;
  }
  static ensure() {
    if (B === null) {
      const e = B = new Ys();
      Ur.add(B), Tr || Nn(() => {
        B === e && e.flush();
      });
    }
    return B;
  }
  apply() {
  }
};
Zn = new WeakMap(), jn = new WeakMap(), bn = new WeakMap(), Jn = new WeakMap(), Or = new WeakMap(), Ir = new WeakMap(), $n = new WeakMap(), Ye = new WeakMap(), Qn = new WeakMap(), Se = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
es = function(e, n, r) {
  e.f ^= mt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (pe | un)) !== 0, l = o && (a & mt) !== 0, u = l || (a & Bt) !== 0 || v(this, Ye).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= mt : s !== null && (a & (Sr | Ei | Na)) !== 0 ? s.b.defer_effect(i) : (a & Sr) !== 0 ? n.push(i) : Hr(i) && ((a & Ze) !== 0 && v(this, $n).add(i), ur(i));
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
ns = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Va(e[n], v(this, Ir), v(this, $n));
}, Ya = function() {
  var i;
  if (Ur.size > 1) {
    this.previous.clear();
    var e = $t, n = !0;
    for (const s of Ur) {
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
        var r = Ft;
        Ft = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          za(f, o, l, u);
        if (Ft.length > 0) {
          B = s, s.apply();
          for (const f of Ft)
            gt(i = s, Se, es).call(i, f, [], []);
          s.deactivate();
        }
        Ft = r;
      }
    }
    B = null, $t = e;
  }
  this.committed = !0, Ur.delete(this);
};
let Ge = Ys;
function ft(t) {
  var e = Tr;
  Tr = !0;
  try {
    for (var n; ; ) {
      if (Ul(), Ft.length === 0 && (B == null || B.flush(), Ft.length === 0))
        return Ti = null, /** @type {T} */
        n;
      Ha();
    }
  } finally {
    Tr = e;
  }
}
function Ha() {
  ts = !0;
  var t = null;
  try {
    for (var e = 0; Ft.length > 0; ) {
      var n = Ge.ensure();
      if (e++ > 1e3) {
        var r, i;
        Kl();
      }
      n.process(Ft), on.clear();
    }
  } finally {
    Ft = [], ts = !1, Ti = null;
  }
}
function Kl() {
  try {
    Il();
  } catch (t) {
    or(t, Ti);
  }
}
let oe = null;
function Ks(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Ue | Bt)) === 0 && Hr(r) && (oe = /* @__PURE__ */ new Set(), ur(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && uo(r), (oe == null ? void 0 : oe.size) > 0)) {
        on.clear();
        for (const i of oe) {
          if ((i.f & (Ue | Bt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            oe.has(a) && (oe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Ue | Bt)) === 0 && ur(l);
          }
        }
        oe.clear();
      }
    }
    oe = null;
  }
}
function za(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & At) !== 0 ? za(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (bs | Ze)) !== 0 && (s & Et) === 0 && Xa(i, e, r) && (lt(i, Et), ce(
        /** @type {Effect} */
        i
      ));
    }
}
function Xa(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (ir.call(e, i))
        return !0;
      if ((i.f & At) !== 0 && Xa(
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
function ce(t) {
  for (var e = Ti = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ts && e === U && (n & Ze) !== 0 && (n & ka) === 0)
      return;
    if ((n & (un | pe)) !== 0) {
      if ((n & mt) === 0) return;
      e.f ^= mt;
    }
  }
  Ft.push(e);
}
function Ba(t, e) {
  if (!((t.f & pe) !== 0 && (t.f & mt) !== 0)) {
    (t.f & Et) !== 0 ? e.d.push(t) : (t.f & de) !== 0 && e.m.push(t), lt(t, mt);
    for (var n = t.first; n !== null; )
      Ba(n, e), n = n.next;
  }
}
function Zl(t) {
  let e = 0, n = Dn(0), r;
  return () => {
    Ts() && (x(n), Ss(() => (e === 0 && (r = ki(() => t(() => Nr(n)))), e += 1, () => {
      Nn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Nr(n));
      });
    })));
  };
}
var jl = sr | qn | Sa;
function Jl(t, e, n) {
  new Ql(t, e, n);
}
var zt, Lr, $e, An, Ae, Jt, Dt, Ee, He, rn, En, ze, tr, Rn, er, nr, Xe, xi, ct, Wa, Ua, rs, ti, ei, is;
class Ql {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    L(this, ct);
    /** @type {Boundary | null} */
    at(this, "parent");
    at(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, zt);
    /** @type {TemplateNode | null} */
    L(this, Lr, j ? Y : null);
    /** @type {BoundaryProps} */
    L(this, $e);
    /** @type {((anchor: Node) => void)} */
    L(this, An);
    /** @type {Effect} */
    L(this, Ae);
    /** @type {Effect | null} */
    L(this, Jt, null);
    /** @type {Effect | null} */
    L(this, Dt, null);
    /** @type {Effect | null} */
    L(this, Ee, null);
    /** @type {DocumentFragment | null} */
    L(this, He, null);
    /** @type {TemplateNode | null} */
    L(this, rn, null);
    L(this, En, 0);
    L(this, ze, 0);
    L(this, tr, !1);
    L(this, Rn, !1);
    /** @type {Set<Effect>} */
    L(this, er, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, nr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, Xe, null);
    L(this, xi, Zl(() => (F(this, Xe, Dn(v(this, En))), () => {
      F(this, Xe, null);
    })));
    F(this, zt, e), F(this, $e, n), F(this, An, r), this.parent = /** @type {Effect} */
    U.b, this.is_pending = !!v(this, $e).pending, F(this, Ae, ks(() => {
      if (U.b = this, j) {
        const s = v(this, Lr);
        Ci(), /** @type {Comment} */
        s.nodeType === dr && /** @type {Comment} */
        s.data === $i ? gt(this, ct, Ua).call(this) : (gt(this, ct, Wa).call(this), v(this, ze) === 0 && (this.is_pending = !1));
      } else {
        var i = gt(this, ct, rs).call(this);
        try {
          F(this, Jt, te(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, ze) > 0 ? gt(this, ct, ei).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, rn)) == null || s.remove();
      };
    }, jl)), j && F(this, zt, Y);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Va(e, v(this, er), v(this, nr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, $e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    gt(this, ct, is).call(this, e), F(this, En, v(this, En) + e), !(!v(this, Xe) || v(this, tr)) && (F(this, tr, !0), Nn(() => {
      F(this, tr, !1), v(this, Xe) && lr(v(this, Xe), v(this, En));
    }));
  }
  get_effect_pending() {
    return v(this, xi).call(this), x(
      /** @type {Source<number>} */
      v(this, Xe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, $e).onerror;
    let r = v(this, $e).failed;
    if (v(this, Rn) || !n && !r)
      throw e;
    v(this, Jt) && (St(v(this, Jt)), F(this, Jt, null)), v(this, Dt) && (St(v(this, Dt)), F(this, Dt, null)), v(this, Ee) && (St(v(this, Ee)), F(this, Ee, null)), j && (Lt(
      /** @type {TemplateNode} */
      v(this, Lr)
    ), Qi(), Lt(hi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Xl();
        return;
      }
      i = !0, s && zl(), Ge.ensure(), F(this, En, 0), v(this, Ee) !== null && Sn(v(this, Ee), () => {
        F(this, Ee, null);
      }), this.is_pending = this.has_pending_snippet(), F(this, Jt, gt(this, ct, ti).call(this, () => (F(this, Rn, !1), te(() => v(this, An).call(this, v(this, zt)))))), v(this, ze) > 0 ? gt(this, ct, ei).call(this) : this.is_pending = !1;
    };
    Nn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        or(o, v(this, Ae) && v(this, Ae).parent);
      }
      r && F(this, Ee, gt(this, ct, ti).call(this, () => {
        Ge.ensure(), F(this, Rn, !0);
        try {
          return te(() => {
            r(
              v(this, zt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return or(
            o,
            /** @type {Effect} */
            v(this, Ae).parent
          ), null;
        } finally {
          F(this, Rn, !1);
        }
      }));
    });
  }
}
zt = new WeakMap(), Lr = new WeakMap(), $e = new WeakMap(), An = new WeakMap(), Ae = new WeakMap(), Jt = new WeakMap(), Dt = new WeakMap(), Ee = new WeakMap(), He = new WeakMap(), rn = new WeakMap(), En = new WeakMap(), ze = new WeakMap(), tr = new WeakMap(), Rn = new WeakMap(), er = new WeakMap(), nr = new WeakMap(), Xe = new WeakMap(), xi = new WeakMap(), ct = new WeakSet(), Wa = function() {
  try {
    F(this, Jt, te(() => v(this, An).call(this, v(this, zt))));
  } catch (e) {
    this.error(e);
  }
}, Ua = function() {
  const e = v(this, $e).pending;
  e && (F(this, Dt, te(() => e(v(this, zt)))), Nn(() => {
    var n = gt(this, ct, rs).call(this);
    F(this, Jt, gt(this, ct, ti).call(this, () => (Ge.ensure(), te(() => v(this, An).call(this, n))))), v(this, ze) > 0 ? gt(this, ct, ei).call(this) : (Sn(
      /** @type {Effect} */
      v(this, Dt),
      () => {
        F(this, Dt, null);
      }
    ), this.is_pending = !1);
  }));
}, rs = function() {
  var e = v(this, zt);
  return this.is_pending && (F(this, rn, re()), v(this, zt).before(v(this, rn)), e = v(this, rn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ti = function(e) {
  var n = U, r = V, i = Wt;
  Ne(v(this, Ae)), ie(v(this, Ae)), ar(v(this, Ae).ctx);
  try {
    return e();
  } catch (s) {
    return La(s), null;
  } finally {
    Ne(n), ie(r), ar(i);
  }
}, ei = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, $e).pending
  );
  v(this, Jt) !== null && (F(this, He, document.createDocumentFragment()), v(this, He).append(
    /** @type {TemplateNode} */
    v(this, rn)
  ), ho(v(this, Jt), v(this, He))), v(this, Dt) === null && F(this, Dt, te(() => e(v(this, zt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
is = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && gt(n = this.parent, ct, is).call(n, e);
    return;
  }
  if (F(this, ze, v(this, ze) + e), v(this, ze) === 0) {
    this.is_pending = !1;
    for (const r of v(this, er))
      lt(r, Et), ce(r);
    for (const r of v(this, nr))
      lt(r, de), ce(r);
    v(this, er).clear(), v(this, nr).clear(), v(this, Dt) && Sn(v(this, Dt), () => {
      F(this, Dt, null);
    }), v(this, He) && (v(this, zt).before(v(this, He)), F(this, He, null));
  }
};
function tu(t, e, n, r) {
  const i = Ni;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = B, o = (
    /** @type {Effect} */
    U
  ), l = eu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & Ue) === 0 && or(p, o);
    }
    a == null || a.deactivate(), ss();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ nu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => or(c, o));
  }
  u ? u.then(h) : h();
}
function eu() {
  var t = U, e = V, n = Wt, r = B;
  return function(s = !0) {
    Ne(t), ie(e), ar(n), s && (r == null || r.activate());
  };
}
function ss() {
  Ne(null), ie(null), ar(null);
}
// @__NO_SIDE_EFFECTS__
function Ni(t) {
  var e = At | Et, n = V !== null && (V.f & At) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return U !== null && (U.f |= qn), {
    ctx: Wt,
    deps: null,
    effects: null,
    equals: Da,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      bt
    ),
    wv: 0,
    parent: n ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function nu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && Ml();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Dn(
    /** @type {V} */
    bt
  ), o = !V, l = /* @__PURE__ */ new Map();
  return hu(() => {
    var p;
    var u = Ta();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === B && f.committed && f.deactivate(), ss();
      });
    } catch (g) {
      u.reject(g), ss();
    }
    var f = (
      /** @type {Batch} */
      B
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = l.get(f)) == null || p.reject(_n), l.delete(f), l.set(f, u);
    }
    const c = (g, m = void 0) => {
      if (f.activate(), m)
        m !== _n && (a.f |= an, lr(a, m));
      else {
        (a.f & an) !== 0 && (a.f ^= an), lr(a, g);
        for (const [b, $] of l) {
          if (l.delete(b), b === f) break;
          $.reject(_n);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), uu(() => {
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
  const e = /* @__PURE__ */ Ni(t);
  return po(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ga(t) {
  const e = /* @__PURE__ */ Ni(t);
  return e.equals = Fa, e;
}
function ru(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      St(
        /** @type {Effect} */
        e[n]
      );
  }
}
function iu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & At) === 0)
      return (e.f & Ue) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Rs(t) {
  var e, n = U;
  Ne(iu(t));
  try {
    t.f &= ~Pn, ru(t), e = mo(t);
  } finally {
    Ne(n);
  }
  return e;
}
function Ka(t) {
  var e = Rs(t);
  if (!t.equals(e) && (t.wv = go(), (!(B != null && B.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    lt(t, mt);
    return;
  }
  ln || ($t !== null ? (Ts() || B != null && B.is_fork) && $t.set(t, e) : Es(t));
}
function su(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(_n), r.teardown = Cl, r.ac = null, kr(r, 0), Ms(r));
}
function Za(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && ur(e);
}
let as = /* @__PURE__ */ new Set();
const on = /* @__PURE__ */ new Map();
let ja = !1;
function Dn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Da,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function _t(t, e) {
  const n = Dn(t);
  return po(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ja(t, e = !1, n = !0) {
  const r = Dn(t);
  return e || (r.equals = Fa), r;
}
function ot(t, e, n = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!he || (V.f & Gs) !== 0) && Oa() && (V.f & (At | Ze | bs | Gs)) !== 0 && (ne === null || !ir.call(ne, t)) && Hl();
  let r = n ? yn(e) : e;
  return lr(t, r);
}
function lr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ln ? on.set(t, e) : on.set(t, n), t.v = e;
    var r = Ge.ensure();
    if (r.capture(t, n), (t.f & At) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Et) !== 0 && Rs(i), Es(i);
    }
    t.wv = go(), Qa(t, Et), U !== null && (U.f & mt) !== 0 && (U.f & (pe | un)) === 0 && (jt === null ? vu([t]) : jt.push(t)), !r.is_fork && as.size > 0 && !ja && au();
  }
  return e;
}
function au() {
  ja = !1;
  for (const t of as)
    (t.f & mt) !== 0 && lt(t, de), Hr(t) && ur(t);
  as.clear();
}
function Nr(t) {
  ot(t, t.v + 1);
}
function Qa(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Et) === 0;
      if (o && lt(s, e), (a & At) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        $t == null || $t.delete(l), (a & Pn) === 0 && (a & ee && (s.f |= Pn), Qa(l, de));
      } else o && ((a & Ze) !== 0 && oe !== null && oe.add(
        /** @type {Effect} */
        s
      ), ce(
        /** @type {Effect} */
        s
      ));
    }
}
function yn(t) {
  if (typeof t != "object" || t === null || Cr in t)
    return t;
  const e = Rl(t);
  if (e !== Al && e !== El)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ca(t), i = /* @__PURE__ */ _t(0), s = kn, a = (o) => {
    if (kn === s)
      return o();
    var l = V, u = kn;
    ie(null), Js(s);
    var f = o();
    return ie(l), Js(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ _t(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Vl();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ _t(u.value);
          return n.set(l, h), h;
        }) : ot(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ _t(bt));
            n.set(l, f), Nr(i);
          }
        } else
          ot(u, bt), Nr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Cr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Tn(o, l)) != null && p.writable) && (f = a(() => {
          var g = yn(h ? o[l] : bt), m = /* @__PURE__ */ _t(g);
          return m;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === bt ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var h = n.get(l), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== bt)
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
        if (l === Cr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== bt || Reflect.has(o, l);
        if (u !== void 0 || U !== null && (!f || (c = Tn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? yn(o[l]) : bt, g = /* @__PURE__ */ _t(p);
            return g;
          }), n.set(l, u));
          var h = x(u);
          if (h === bt)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var E;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var g = n.get(p + "");
            g !== void 0 ? ot(g, bt) : p in o && (g = a(() => /* @__PURE__ */ _t(bt)), n.set(p + "", g));
          }
        if (h === void 0)
          (!c || (E = Tn(o, l)) != null && E.writable) && (h = a(() => /* @__PURE__ */ _t(void 0)), ot(h, yn(u)), n.set(l, h));
        else {
          c = h.v !== bt;
          var m = a(() => yn(u));
          ot(h, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(l);
            Number.isInteger(R) && R >= $.v && ot($, R + 1);
          }
          Nr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== bt;
        });
        for (var [u, f] of n)
          f.v !== bt && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Yl();
      }
    }
  );
}
var Zs, to, eo, no;
function os() {
  if (Zs === void 0) {
    Zs = window, to = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    eo = Tn(e, "firstChild").get, no = Tn(e, "nextSibling").get, Us(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Us(n) && (n.__t = void 0);
  }
}
function re(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Fn(t) {
  return (
    /** @type {TemplateNode | null} */
    eo.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function ke(t) {
  return (
    /** @type {TemplateNode | null} */
    no.call(t)
  );
}
function Yt(t, e) {
  if (!j)
    return /* @__PURE__ */ Fn(t);
  var n = /* @__PURE__ */ Fn(Y);
  if (n === null)
    n = Y.appendChild(re());
  else if (e && n.nodeType !== Yr) {
    var r = re();
    return n == null || n.before(r), Lt(r), r;
  }
  return e && Si(
    /** @type {Text} */
    n
  ), Lt(n), n;
}
function pn(t, e = !1) {
  if (!j) {
    var n = /* @__PURE__ */ Fn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ke(n) : n;
  }
  if (e) {
    if ((Y == null ? void 0 : Y.nodeType) !== Yr) {
      var r = re();
      return Y == null || Y.before(r), Lt(r), r;
    }
    Si(
      /** @type {Text} */
      Y
    );
  }
  return Y;
}
function ae(t, e = 1, n = !1) {
  let r = j ? Y : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ke(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Yr) {
      var s = re();
      return r === null ? i == null || i.after(s) : r.before(s), Lt(s), s;
    }
    Si(
      /** @type {Text} */
      r
    );
  }
  return Lt(r), r;
}
function ro(t) {
  t.textContent = "";
}
function io() {
  return !1;
}
function Cs(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(bl, t, void 0)
  );
}
function Si(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Yr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function so(t) {
  var e = V, n = U;
  ie(null), Ne(null);
  try {
    return t();
  } finally {
    ie(e), Ne(n);
  }
}
function ou(t) {
  U === null && (V === null && Ol(), Fl()), ln && Dl();
}
function lu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Me(t, e, n) {
  var r = U;
  r !== null && (r.f & Bt) !== 0 && (t |= Bt);
  var i = {
    ctx: Wt,
    deps: null,
    nodes: null,
    f: t | Et | ee,
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
      ur(i);
    } catch (o) {
      throw St(i), o;
    }
  else e !== null && ce(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & qn) === 0 && (s = s.first, (t & Ze) !== 0 && (t & sr) !== 0 && s !== null && (s.f |= sr)), s !== null && (s.parent = r, r !== null && lu(s, r), V !== null && (V.f & At) !== 0 && (t & un) === 0)) {
    var a = (
      /** @type {Derived} */
      V
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ts() {
  return V !== null && !he;
}
function uu(t) {
  const e = Me(Ei, null, !1);
  return lt(e, mt), e.teardown = t, e;
}
function Ns(t) {
  ou();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !V && (e & pe) !== 0 && (e & hr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Wt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ao(t);
}
function ao(t) {
  return Me(Sr | Sl, t, !1);
}
function fu(t) {
  Ge.ensure();
  const e = Me(un | qn, t, !0);
  return () => {
    St(e);
  };
}
function cu(t) {
  Ge.ensure();
  const e = Me(un | qn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sn(e, () => {
      St(e), r(void 0);
    }) : (St(e), r(void 0));
  });
}
function oo(t) {
  return Me(Sr, t, !1);
}
function hu(t) {
  return Me(bs | qn, t, !0);
}
function Ss(t, e = 0) {
  return Me(Ei | e, t, !0);
}
function Wn(t, e = [], n = [], r = []) {
  tu(r, e, n, (i) => {
    Me(Ei, () => t(...i.map(x)), !0);
  });
}
function ks(t, e = 0) {
  var n = Me(Ze | e, t, !0);
  return n;
}
function te(t) {
  return Me(pe | qn, t, !0);
}
function lo(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ln, r = V;
    js(!0), ie(null);
    try {
      e.call(null);
    } finally {
      js(n), ie(r);
    }
  }
}
function Ms(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && so(() => {
      i.abort(_n);
    });
    var r = n.next;
    (n.f & un) !== 0 ? n.parent = null : St(n, e), n = r;
  }
}
function du(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & pe) === 0 && St(e), e = n;
  }
}
function St(t, e = !0) {
  var n = !1;
  (e || (t.f & ka) !== 0) && t.nodes !== null && t.nodes.end !== null && (pu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ms(t, e && !n), kr(t, 0), lt(t, Ue);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  lo(t);
  var i = t.parent;
  i !== null && i.first !== null && uo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function pu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ ke(t);
    t.remove(), t = n;
  }
}
function uo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Sn(t, e, n = !0) {
  var r = [];
  fo(t, r, !0);
  var i = () => {
    n && St(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function fo(t, e, n) {
  if ((t.f & Bt) === 0) {
    t.f ^= Bt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & sr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & pe) !== 0 && (t.f & Ze) !== 0;
      fo(i, e, a ? n : !1), i = s;
    }
  }
}
function Ps(t) {
  co(t, !0);
}
function co(t, e) {
  if ((t.f & Bt) !== 0) {
    t.f ^= Bt, (t.f & mt) === 0 && (lt(t, Et), ce(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & sr) !== 0 || (n.f & pe) !== 0;
      co(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function ho(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ ke(n);
      e.append(n), n = i;
    }
}
let ni = !1, ln = !1;
function js(t) {
  ln = t;
}
let V = null, he = !1;
function ie(t) {
  V = t;
}
let U = null;
function Ne(t) {
  U = t;
}
let ne = null;
function po(t) {
  V !== null && (ne === null ? ne = [t] : ne.push(t));
}
let Ot = null, Ht = 0, jt = null;
function vu(t) {
  jt = t;
}
let vo = 1, wn = 0, kn = wn;
function Js(t) {
  kn = t;
}
function go() {
  return ++vo;
}
function Hr(t) {
  var e = t.f;
  if ((e & Et) !== 0)
    return !0;
  if (e & At && (t.f &= ~Pn), (e & de) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Hr(
        /** @type {Derived} */
        s
      ) && Ka(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    $t === null && lt(t, mt);
  }
  return !1;
}
function _o(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ne !== null && ir.call(ne, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & At) !== 0 ? _o(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? lt(s, Et) : (s.f & mt) !== 0 && lt(s, de), ce(
        /** @type {Effect} */
        s
      ));
    }
}
function mo(t) {
  var m;
  var e = Ot, n = Ht, r = jt, i = V, s = ne, a = Wt, o = he, l = kn, u = t.f;
  Ot = /** @type {null | Value[]} */
  null, Ht = 0, jt = null, V = (u & (pe | un)) === 0 ? t : null, ne = null, ar(t.ctx), he = !1, kn = ++wn, t.ac !== null && (so(() => {
    t.ac.abort(_n);
  }), t.ac = null);
  try {
    t.f |= Ji;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= hr;
    var c = t.deps, p = B == null ? void 0 : B.is_fork;
    if (Ot !== null) {
      var g;
      if (p || kr(t, Ht), c !== null && Ht > 0)
        for (c.length = Ht + Ot.length, g = 0; g < Ot.length; g++)
          c[Ht + g] = Ot[g];
      else
        t.deps = c = Ot;
      if (Ts() && (t.f & ee) !== 0)
        for (g = Ht; g < c.length; g++)
          ((m = c[g]).reactions ?? (m.reactions = [])).push(t);
    } else !p && c !== null && Ht < c.length && (kr(t, Ht), c.length = Ht);
    if (Oa() && jt !== null && !he && c !== null && (t.f & (At | de | Et)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      jt.length; g++)
        _o(
          jt[g],
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
      jt !== null && (r === null ? r = jt : r.push(.../** @type {Source[]} */
      jt));
    }
    return (t.f & an) !== 0 && (t.f ^= an), h;
  } catch (b) {
    return La(b);
  } finally {
    t.f ^= Ji, Ot = e, Ht = n, jt = r, V = i, ne = s, ar(a), he = o, kn = l;
  }
}
function gu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = $l.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & At) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ot === null || !ir.call(Ot, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & ee) !== 0 && (s.f ^= ee, s.f &= ~Pn), Es(s), su(s), kr(s, 0);
  }
}
function kr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      gu(t, n[r]);
}
function ur(t) {
  var e = t.f;
  if ((e & Ue) === 0) {
    lt(t, mt);
    var n = U, r = ni;
    U = t, ni = !0;
    try {
      (e & (Ze | Na)) !== 0 ? du(t) : Ms(t), lo(t);
      var i = mo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = vo;
      var s;
      ji && Wl && (t.f & Et) !== 0 && t.deps;
    } finally {
      ni = r, U = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & At) !== 0;
  if (V !== null && !he) {
    var r = U !== null && (U.f & Ue) !== 0;
    if (!r && (ne === null || !ir.call(ne, t))) {
      var i = V.deps;
      if ((V.f & Ji) !== 0)
        t.rv < wn && (t.rv = wn, Ot === null && i !== null && i[Ht] === t ? Ht++ : Ot === null ? Ot = [t] : Ot.push(t));
      else {
        (V.deps ?? (V.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [V] : ir.call(s, V) || s.push(V);
      }
    }
  }
  if (ln && on.has(t))
    return on.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (ln) {
      var o = a.v;
      return ((a.f & mt) === 0 && a.reactions !== null || wo(a)) && (o = Rs(a)), on.set(a, o), o;
    }
    var l = (a.f & ee) === 0 && !he && V !== null && (ni || (V.f & ee) !== 0), u = (a.f & hr) === 0;
    Hr(a) && (l && (a.f |= ee), Ka(a)), l && !u && (Za(a), yo(a));
  }
  if ($t != null && $t.has(t))
    return $t.get(t);
  if ((t.f & an) !== 0)
    throw t.v;
  return t.v;
}
function yo(t) {
  if (t.f |= ee, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & At) !== 0 && (e.f & ee) === 0 && (Za(
        /** @type {Derived} */
        e
      ), yo(
        /** @type {Derived} */
        e
      ));
}
function wo(t) {
  if (t.v === bt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (on.has(e) || (e.f & At) !== 0 && wo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ki(t) {
  var e = he;
  try {
    return he = !0, t();
  } finally {
    he = e;
  }
}
const xo = /* @__PURE__ */ new Set(), ls = /* @__PURE__ */ new Set();
function _u(t) {
  for (var e = 0; e < t.length; e++)
    xo.add(t[e]);
  for (var n of ls)
    n(t);
}
let Qs = null;
function ta(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Qs = t;
  var a = 0, o = Qs === t && t.__root;
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
    ci(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = V, h = U;
    ie(null), Ne(null);
    try {
      for (var c, p = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch ($) {
          c ? p.push($) : c = $;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let $ of p)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ie(f), Ne(h);
    }
  }
}
var Ea, Ra;
const Xi = (Ra = (Ea = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ea.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ra.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function mu(t) {
  return (
    /** @type {string} */
    (Xi == null ? void 0 : Xi.createHTML(t)) ?? t
  );
}
function bo(t, e = !1) {
  var n = Cs("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? mu(t) : t, n.content;
}
function On(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Vn(t, e) {
  var n = (e & xl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (j)
      return On(Y, null), Y;
    r === void 0 && (r = bo(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || to ? document.importNode(r, !0) : r.cloneNode(!0)
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
function yu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (j)
      return On(Y, null), Y;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        bo(i, !0)
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
function wu(t, e) {
  return /* @__PURE__ */ yu(t, e, "svg");
}
function ea(t = "") {
  if (!j) {
    var e = re(t + "");
    return On(e, e), e;
  }
  var n = Y;
  return n.nodeType !== Yr ? (n.before(n = re()), Lt(n)) : Si(
    /** @type {Text} */
    n
  ), On(n, n), n;
}
function le(t, e) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      U
    );
    ((n.f & hr) === 0 || n.nodes.end === null) && (n.nodes.end = Y), Ci();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const xu = ["touchstart", "touchmove"];
function bu(t) {
  return xu.includes(t);
}
function en(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function $o(t, e) {
  return Ao(t, e);
}
function $u(t, e) {
  os(), e.intro = e.intro ?? !1;
  const n = e.target, r = j, i = Y;
  try {
    for (var s = /* @__PURE__ */ Fn(n); s && (s.nodeType !== dr || /** @type {Comment} */
    s.data !== ws); )
      s = /* @__PURE__ */ ke(s);
    if (!s)
      throw rr;
    We(!0), Lt(
      /** @type {Comment} */
      s
    );
    const a = Ao(t, { ...e, anchor: s });
    return We(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== rr && console.warn("Failed to hydrate: ", a), e.recover === !1 && Ll(), os(), ro(n), We(!1), $o(t, e);
  } finally {
    We(r), Lt(i);
  }
}
const Gr = /* @__PURE__ */ new Map();
function Ao(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  os();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var g = bu(p);
        for (const $ of [e, document]) {
          var m = Gr.get($);
          m === void 0 && (m = /* @__PURE__ */ new Map(), Gr.set($, m));
          var b = m.get(p);
          b === void 0 ? ($.addEventListener(p, ta, { passive: g }), m.set(p, 1)) : m.set(p, b + 1);
        }
      }
    }
  };
  l(Ai(xo)), ls.add(l);
  var u = void 0, f = cu(() => {
    var h = n ?? e.appendChild(re());
    return Jl(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        $s({});
        var p = (
          /** @type {ComponentContext} */
          Wt
        );
        if (s && (p.c = s), i && (r.$$events = i), j && On(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, j && (U.nodes.end = Y, Y === null || Y.nodeType !== dr || /** @type {Comment} */
        Y.data !== xs))
          throw Ri(), rr;
        As();
      }
    ), () => {
      var m;
      for (var c of o)
        for (const b of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Gr.get(b)
          ), g = (
            /** @type {number} */
            p.get(c)
          );
          --g == 0 ? (b.removeEventListener(c, ta), p.delete(c), p.size === 0 && Gr.delete(b)) : p.set(c, g);
        }
      ls.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return us.set(u, f), u;
}
let us = /* @__PURE__ */ new WeakMap();
function Au(t, e) {
  const n = us.get(t);
  return n ? (us.delete(t), n(e)) : Promise.resolve();
}
var ue, Re, Xt, Cn, qr, Vr, bi;
class Eu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    at(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, ue, /* @__PURE__ */ new Map());
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
    L(this, Re, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, Xt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, Cn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, qr, !0);
    L(this, Vr, () => {
      var e = (
        /** @type {Batch} */
        B
      );
      if (v(this, ue).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, ue).get(e)
        ), r = v(this, Re).get(n);
        if (r)
          Ps(r), v(this, Cn).delete(n);
        else {
          var i = v(this, Xt).get(n);
          i && (v(this, Re).set(n, i.effect), v(this, Xt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, ue)) {
          if (v(this, ue).delete(s), s === e)
            break;
          const o = v(this, Xt).get(a);
          o && (St(o.effect), v(this, Xt).delete(a));
        }
        for (const [s, a] of v(this, Re)) {
          if (s === n || v(this, Cn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, ue).values()).includes(s)) {
              var u = document.createDocumentFragment();
              ho(a, u), u.append(re()), v(this, Xt).set(s, { effect: a, fragment: u });
            } else
              St(a);
            v(this, Cn).delete(s), v(this, Re).delete(s);
          };
          v(this, qr) || !r ? (v(this, Cn).add(s), Sn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, bi, (e) => {
      v(this, ue).delete(e);
      const n = Array.from(v(this, ue).values());
      for (const [r, i] of v(this, Xt))
        n.includes(r) || (St(i.effect), v(this, Xt).delete(r));
    });
    this.anchor = e, F(this, qr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      B
    ), i = io();
    if (n && !v(this, Re).has(e) && !v(this, Xt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = re();
        s.append(a), v(this, Xt).set(e, {
          effect: te(() => n(a)),
          fragment: s
        });
      } else
        v(this, Re).set(
          e,
          te(() => n(this.anchor))
        );
    if (v(this, ue).set(r, e), i) {
      for (const [o, l] of v(this, Re))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, Xt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Vr)), r.ondiscard(v(this, bi));
    } else
      j && (this.anchor = Y), v(this, Vr).call(this);
  }
}
ue = new WeakMap(), Re = new WeakMap(), Xt = new WeakMap(), Cn = new WeakMap(), qr = new WeakMap(), Vr = new WeakMap(), bi = new WeakMap();
function Ru(t) {
  Wt === null && kl(), Ns(() => {
    const e = ki(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function wr(t, e, n = !1) {
  j && Ci();
  var r = new Eu(t), i = n ? sr : 0;
  function s(a, o) {
    if (j) {
      const f = Pa(t);
      var l;
      if (f === ws ? l = 0 : f === $i ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = hi();
        Lt(u), r.anchor = u, We(!1), r.ensure(a, o), We(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  ks(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Bi(t, e) {
  return e;
}
function Cu(t, e, n) {
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
            fs(Ai(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      ro(f), f.append(u), t.items.clear();
    }
    fs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function fs(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    St(t[n], e);
}
var na;
function Wi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  j && Ci();
  var l = null, u = /* @__PURE__ */ Ga(() => {
    var m = n();
    return Ca(m) ? m : m == null ? [] : Ai(m);
  }), f, h = !0;
  function c() {
    g.fallback = l, Tu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & sn) === 0 ? Ps(l) : (l.f ^= sn, $r(l, null, a)) : Sn(l, () => {
      l = null;
    }));
  }
  var p = ks(() => {
    f = /** @type {V[]} */
    x(u);
    var m = f.length;
    let b = !1;
    if (j) {
      var $ = Pa(a) === $i;
      $ !== (m === 0) && (a = hi(), Lt(a), We(!1), b = !0);
    }
    for (var R = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      B
    ), M = io(), C = 0; C < m; C += 1) {
      j && Y.nodeType === dr && /** @type {Comment} */
      Y.data === xs && (a = /** @type {Comment} */
      Y, b = !0, We(!1));
      var tt = f[C], nt = r(tt, C), Q = h ? null : o.get(nt);
      Q ? (Q.v && lr(Q.v, tt), Q.i && lr(Q.i, C), M && E.unskip_effect(Q.e)) : (Q = Nu(
        o,
        h ? a : na ?? (na = re()),
        tt,
        nt,
        C,
        i,
        e,
        n
      ), h || (Q.e.f |= sn), o.set(nt, Q)), R.add(nt);
    }
    if (m === 0 && s && !l && (h ? l = te(() => s(a)) : (l = te(() => s(na ?? (na = re()))), l.f |= sn)), m > R.size && Pl(), j && m > 0 && Lt(hi()), !h)
      if (M) {
        for (const [J, ht] of o)
          R.has(J) || E.skip_effect(ht.e);
        E.oncommit(c), E.ondiscard(() => {
        });
      } else
        c();
    b && We(!0), x(u);
  }), g = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, j && (a = Y);
}
function xr(t) {
  for (; t !== null && (t.f & pe) === 0; )
    t = t.next;
  return t;
}
function Tu(t, e, n, r, i) {
  var Q;
  var s = e.length, a = t.items, o = xr(t.effect.first), l, u = null, f = [], h = [], c, p, g, m;
  for (m = 0; m < s; m += 1) {
    if (c = e[m], p = i(c, m), g = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const J of t.outrogroups)
        J.pending.delete(g), J.done.delete(g);
    if ((g.f & sn) !== 0)
      if (g.f ^= sn, g === o)
        $r(g, null, n);
      else {
        var b = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), nn(t, u, g), nn(t, g, b), $r(g, b, n), u = g, f = [], h = [], o = xr(u.next);
        continue;
      }
    if ((g.f & Bt) !== 0 && Ps(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var $ = h[0], R;
          u = $.prev;
          var E = f[0], M = f[f.length - 1];
          for (R = 0; R < f.length; R += 1)
            $r(f[R], $, n);
          for (R = 0; R < h.length; R += 1)
            l.delete(h[R]);
          nn(t, E.prev, M.next), nn(t, u, E), nn(t, M, $), o = $, u = M, m -= 1, f = [], h = [];
        } else
          l.delete(g), $r(g, o, n), nn(t, g.prev, g.next), nn(t, g, u === null ? t.effect.first : u.next), nn(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = xr(o.next);
      if (o === null)
        continue;
    }
    (g.f & sn) === 0 && f.push(g), u = g, o = xr(g.next);
  }
  if (t.outrogroups !== null) {
    for (const J of t.outrogroups)
      J.pending.size === 0 && (fs(Ai(J.done)), (Q = t.outrogroups) == null || Q.delete(J));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var C = [];
    if (l !== void 0)
      for (g of l)
        (g.f & Bt) === 0 && C.push(g);
    for (; o !== null; )
      (o.f & Bt) === 0 && o !== t.fallback && C.push(o), o = xr(o.next);
    var tt = C.length;
    if (tt > 0) {
      var nt = null;
      Cu(t, C, nt);
    }
  }
}
function Nu(t, e, n, r, i, s, a, o) {
  var l = (a & pl) !== 0 ? (a & gl) === 0 ? /* @__PURE__ */ Ja(n, !1, !1) : Dn(n) : null, u = (a & vl) !== 0 ? Dn(i) : null;
  return {
    v: l,
    i: u,
    e: te(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function $r(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & sn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ke(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function nn(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Eo(t, e) {
  oo(() => {
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
      const i = Cs("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function ra(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Su(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += ra(r)), i && (n += ra(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Ui(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function ia(t, e, n, r) {
  var i = t.__style;
  if (j || i !== e) {
    var s = Su(e, r);
    (!j || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Ui(t, n == null ? void 0 : n[0], r[0]), Ui(t, n == null ? void 0 : n[1], r[1], "important")) : Ui(t, n, r));
  return r;
}
function sa(t, e) {
  return t === e || (t == null ? void 0 : t[Cr]) === e;
}
function ri(t = {}, e, n, r) {
  return oo(() => {
    var i, s;
    return Ss(() => {
      i = s, s = [], ki(() => {
        t !== n(...s) && (e(t, ...s), i && sa(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Nn(() => {
        s && sa(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Kr = !1;
function ku(t) {
  var e = Kr;
  try {
    return Kr = !1, [t(), Kr];
  } finally {
    Kr = e;
  }
}
function vt(t, e, n, r) {
  var R;
  var i = (n & yl) !== 0, s = (n & wl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? ki(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Cr in t || Ma in t;
    u = ((R = Tn(t, e)) == null ? void 0 : R.set) ?? (f && e in t ? (E) => t[e] = E : void 0);
  }
  var h, c = !1;
  i ? [h, c] = ku(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (ql(), u(h)));
  var p;
  if (p = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? l() : (o = !0, E);
  }, (n & ml) === 0)
    return p;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, M) {
        return arguments.length > 0 ? ((!M || g || c) && u(M ? p() : E), E) : p();
      })
    );
  }
  var m = !1, b = ((n & _l) !== 0 ? Ni : Ga)(() => (m = !1, p()));
  i && x(b);
  var $ = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(E, M) {
      if (arguments.length > 0) {
        const C = M ? x(b) : i ? yn(E) : E;
        return ot(b, C), m = !0, a !== void 0 && (a = C), E;
      }
      return ln && m || ($.f & Ue) !== 0 ? b.v : x(b);
    })
  );
}
function Mu(t) {
  return new Pu(t);
}
var Be, Qt;
class Pu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    L(this, Be);
    /** @type {Record<string, any>} */
    L(this, Qt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Ja(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ma ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ot(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    F(this, Qt, (e.hydrate ? $u : $o)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ft(), F(this, Be, i.$$events);
    for (const a of Object.keys(v(this, Qt)))
      a === "$set" || a === "$destroy" || a === "$on" || ci(this, a, {
        get() {
          return v(this, Qt)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, Qt)[a] = o;
        },
        enumerable: !0
      });
    v(this, Qt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, Qt).$destroy = () => {
      Au(v(this, Qt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, Qt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, Be)[e] = v(this, Be)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, Be)[e].push(r), () => {
      v(this, Be)[e] = v(this, Be)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, Qt).$destroy();
  }
}
Be = new WeakMap(), Qt = new WeakMap();
let Ro;
typeof HTMLElement == "function" && (Ro = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    at(this, "$$ctor");
    /** Slots */
    at(this, "$$s");
    /** @type {any} The Svelte component instance */
    at(this, "$$c");
    /** Whether or not the custom element is connected */
    at(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    at(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    at(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    at(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    at(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    at(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    at(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    at(this, "$$shadowRoot", null);
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
          const o = Cs("slot");
          s !== "default" && (o.name = s), le(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Du(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = ii(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Mu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = fu(() => {
        Ss(() => {
          var s;
          this.$$r = !0;
          for (const a of fi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ii(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ii(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return fi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ii(t, e, n, r) {
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
function Du(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Co(t, e, n, r, i, s) {
  let a = class extends Ro {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return fi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return fi(e).forEach((o) => {
    ci(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = ii(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Tn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    ci(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Fu = { value: () => {
} };
function To() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new si(n);
}
function si(t) {
  this._ = t;
}
function Ou(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
si.prototype = To.prototype = {
  constructor: si,
  on: function(t, e) {
    var n = this._, r = Ou(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Iu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = aa(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = aa(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new si(t);
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
function Iu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function aa(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Fu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var cs = "http://www.w3.org/1999/xhtml";
const oa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: cs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), oa.hasOwnProperty(e) ? { space: oa[e], local: t } : t;
}
function Lu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === cs && e.documentElement.namespaceURI === cs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function qu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function No(t) {
  var e = Mi(t);
  return (e.local ? qu : Lu)(e);
}
function Vu() {
}
function Ds(t) {
  return t == null ? Vu : function() {
    return this.querySelector(t);
  };
}
function Yu(t) {
  typeof t != "function" && (t = Ds(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new Ut(r, this._parents);
}
function Hu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function zu() {
  return [];
}
function So(t) {
  return t == null ? zu : function() {
    return this.querySelectorAll(t);
  };
}
function Xu(t) {
  return function() {
    return Hu(t.apply(this, arguments));
  };
}
function Bu(t) {
  typeof t == "function" ? t = Xu(t) : t = So(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new Ut(r, i);
}
function ko(t) {
  return function() {
    return this.matches(t);
  };
}
function Mo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Wu = Array.prototype.find;
function Uu(t) {
  return function() {
    return Wu.call(this.children, t);
  };
}
function Gu() {
  return this.firstElementChild;
}
function Ku(t) {
  return this.select(t == null ? Gu : Uu(typeof t == "function" ? t : Mo(t)));
}
var Zu = Array.prototype.filter;
function ju() {
  return Array.from(this.children);
}
function Ju(t) {
  return function() {
    return Zu.call(this.children, t);
  };
}
function Qu(t) {
  return this.selectAll(t == null ? ju : Ju(typeof t == "function" ? t : Mo(t)));
}
function tf(t) {
  typeof t != "function" && (t = ko(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Ut(r, this._parents);
}
function Po(t) {
  return new Array(t.length);
}
function ef() {
  return new Ut(this._enter || this._groups.map(Po), this._parents);
}
function di(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
di.prototype = {
  constructor: di,
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
function nf(t) {
  return function() {
    return t;
  };
}
function rf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new di(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function sf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new di(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function af(t) {
  return t.__data__;
}
function of(t, e) {
  if (!arguments.length) return Array.from(this, af);
  var n = e ? sf : rf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = nf(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = lf(t.call(f, f && f.__data__, u, r)), g = p.length, m = o[u] = new Array(g), b = a[u] = new Array(g), $ = l[u] = new Array(c);
    n(f, h, m, b, $, p, e);
    for (var R = 0, E = 0, M, C; R < g; ++R)
      if (M = m[R]) {
        for (R >= E && (E = R + 1); !(C = b[E]) && ++E < g; ) ;
        M._next = C || null;
      }
  }
  return a = new Ut(a, r), a._enter = o, a._exit = l, a;
}
function lf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function uf() {
  return new Ut(this._exit || this._groups.map(Po), this._parents);
}
function ff(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function cf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || f[g]) && (c[g] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new Ut(o, this._parents);
}
function hf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function df(t) {
  t || (t = pf);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new Ut(i, this._parents).order();
}
function pf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function vf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function gf() {
  return Array.from(this);
}
function _f() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function mf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function yf() {
  return !this.node();
}
function wf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function xf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function $f(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Af(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Ef(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Rf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Cf(t, e) {
  var n = Mi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? bf : xf : typeof e == "function" ? n.local ? Rf : Ef : n.local ? Af : $f)(n, e));
}
function Do(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Tf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Nf(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Sf(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function kf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Tf : typeof e == "function" ? Sf : Nf)(t, e, n ?? "")) : fr(this.node(), t);
}
function fr(t, e) {
  return t.style.getPropertyValue(e) || Do(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Mf(t) {
  return function() {
    delete this[t];
  };
}
function Pf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Df(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ff(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Mf : typeof e == "function" ? Df : Pf)(t, e)) : this.node()[t];
}
function Fo(t) {
  return t.trim().split(/^|\s+/);
}
function Fs(t) {
  return t.classList || new Oo(t);
}
function Oo(t) {
  this._node = t, this._names = Fo(t.getAttribute("class") || "");
}
Oo.prototype = {
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
function Io(t, e) {
  for (var n = Fs(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Lo(t, e) {
  for (var n = Fs(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Of(t) {
  return function() {
    Io(this, t);
  };
}
function If(t) {
  return function() {
    Lo(this, t);
  };
}
function Lf(t, e) {
  return function() {
    (e.apply(this, arguments) ? Io : Lo)(this, t);
  };
}
function qf(t, e) {
  var n = Fo(t + "");
  if (arguments.length < 2) {
    for (var r = Fs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Lf : e ? Of : If)(n, e));
}
function Vf() {
  this.textContent = "";
}
function Yf(t) {
  return function() {
    this.textContent = t;
  };
}
function Hf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function zf(t) {
  return arguments.length ? this.each(t == null ? Vf : (typeof t == "function" ? Hf : Yf)(t)) : this.node().textContent;
}
function Xf() {
  this.innerHTML = "";
}
function Bf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Wf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Uf(t) {
  return arguments.length ? this.each(t == null ? Xf : (typeof t == "function" ? Wf : Bf)(t)) : this.node().innerHTML;
}
function Gf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Kf() {
  return this.each(Gf);
}
function Zf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jf() {
  return this.each(Zf);
}
function Jf(t) {
  var e = typeof t == "function" ? t : No(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Qf() {
  return null;
}
function tc(t, e) {
  var n = typeof t == "function" ? t : No(t), r = e == null ? Qf : typeof e == "function" ? e : Ds(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ec() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function nc() {
  return this.each(ec);
}
function rc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ic() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function sc(t) {
  return this.select(t ? ic : rc);
}
function ac(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function oc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function lc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function uc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function fc(t, e, n) {
  return function() {
    var r = this.__on, i, s = oc(e);
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
function cc(t, e, n) {
  var r = lc(t + ""), i, s = r.length, a;
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
  for (o = e ? fc : uc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function qo(t, e, n) {
  var r = Do(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function hc(t, e) {
  return function() {
    return qo(this, t, e);
  };
}
function dc(t, e) {
  return function() {
    return qo(this, t, e.apply(this, arguments));
  };
}
function pc(t, e) {
  return this.each((typeof e == "function" ? dc : hc)(t, e));
}
function* vc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Vo = [null];
function Ut(t, e) {
  this._groups = t, this._parents = e;
}
function pr() {
  return new Ut([[document.documentElement]], Vo);
}
function gc() {
  return this;
}
Ut.prototype = pr.prototype = {
  constructor: Ut,
  select: Yu,
  selectAll: Bu,
  selectChild: Ku,
  selectChildren: Qu,
  filter: tf,
  data: of,
  enter: ef,
  exit: uf,
  join: ff,
  merge: cf,
  selection: gc,
  order: hf,
  sort: df,
  call: vf,
  nodes: gf,
  node: _f,
  size: mf,
  empty: yf,
  each: wf,
  attr: Cf,
  style: kf,
  property: Ff,
  classed: qf,
  text: zf,
  html: Uf,
  raise: Kf,
  lower: jf,
  append: Jf,
  insert: tc,
  remove: nc,
  clone: sc,
  datum: ac,
  on: cc,
  dispatch: pc,
  [Symbol.iterator]: vc
};
function xt(t) {
  return typeof t == "string" ? new Ut([[document.querySelector(t)]], [document.documentElement]) : new Ut([[t]], Vo);
}
function Os(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Yo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function zr() {
}
var Mr = 0.7, pi = 1 / Mr, Kn = "\\s*([+-]?\\d+)\\s*", Pr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _c = /^#([0-9a-f]{3,8})$/, mc = new RegExp(`^rgb\\(${Kn},${Kn},${Kn}\\)$`), yc = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), wc = new RegExp(`^rgba\\(${Kn},${Kn},${Kn},${Pr}\\)$`), xc = new RegExp(`^rgba\\(${Te},${Te},${Te},${Pr}\\)$`), bc = new RegExp(`^hsl\\(${Pr},${Te},${Te}\\)$`), $c = new RegExp(`^hsla\\(${Pr},${Te},${Te},${Pr}\\)$`), la = {
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
Os(zr, In, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ua,
  // Deprecated! Use color.formatHex.
  formatHex: ua,
  formatHex8: Ac,
  formatHsl: Ec,
  formatRgb: fa,
  toString: fa
});
function ua() {
  return this.rgb().formatHex();
}
function Ac() {
  return this.rgb().formatHex8();
}
function Ec() {
  return Ho(this).formatHsl();
}
function fa() {
  return this.rgb().formatRgb();
}
function In(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = _c.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ca(e) : n === 3 ? new It(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Zr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Zr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = mc.exec(t)) ? new It(e[1], e[2], e[3], 1) : (e = yc.exec(t)) ? new It(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = wc.exec(t)) ? Zr(e[1], e[2], e[3], e[4]) : (e = xc.exec(t)) ? Zr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = bc.exec(t)) ? pa(e[1], e[2] / 100, e[3] / 100, 1) : (e = $c.exec(t)) ? pa(e[1], e[2] / 100, e[3] / 100, e[4]) : la.hasOwnProperty(t) ? ca(la[t]) : t === "transparent" ? new It(NaN, NaN, NaN, 0) : null;
}
function ca(t) {
  return new It(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Zr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new It(t, e, n, r);
}
function Rc(t) {
  return t instanceof zr || (t = In(t)), t ? (t = t.rgb(), new It(t.r, t.g, t.b, t.opacity)) : new It();
}
function hs(t, e, n, r) {
  return arguments.length === 1 ? Rc(t) : new It(t, e, n, r ?? 1);
}
function It(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Os(It, hs, Yo(zr, {
  brighter(t) {
    return t = t == null ? pi : Math.pow(pi, t), new It(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Mr : Math.pow(Mr, t), new It(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new It(Mn(this.r), Mn(this.g), Mn(this.b), vi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: Cc,
  formatRgb: da,
  toString: da
}));
function ha() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}`;
}
function Cc() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}${xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function da() {
  const t = vi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function vi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xn(t) {
  return t = Mn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function pa(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new fe(t, e, n, r);
}
function Ho(t) {
  if (t instanceof fe) return new fe(t.h, t.s, t.l, t.opacity);
  if (t instanceof zr || (t = In(t)), !t) return new fe();
  if (t instanceof fe) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new fe(a, o, l, t.opacity);
}
function Tc(t, e, n, r) {
  return arguments.length === 1 ? Ho(t) : new fe(t, e, n, r ?? 1);
}
function fe(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Os(fe, Tc, Yo(zr, {
  brighter(t) {
    return t = t == null ? pi : Math.pow(pi, t), new fe(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Mr : Math.pow(Mr, t), new fe(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new It(
      Gi(t >= 240 ? t - 240 : t + 120, i, r),
      Gi(t, i, r),
      Gi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new fe(va(this.h), jr(this.s), jr(this.l), vi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = vi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${va(this.h)}, ${jr(this.s) * 100}%, ${jr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function va(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function jr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Gi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Is = (t) => () => t;
function Nc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Sc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function kc(t) {
  return (t = +t) == 1 ? zo : function(e, n) {
    return n - e ? Sc(e, n, t) : Is(isNaN(e) ? n : e);
  };
}
function zo(t, e) {
  var n = e - t;
  return n ? Nc(t, n) : Is(isNaN(t) ? e : t);
}
const gi = (function t(e) {
  var n = kc(e);
  function r(i, s) {
    var a = n((i = hs(i)).r, (s = hs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = zo(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Mc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Pc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Dc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Un(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Fc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Ce(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Oc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Un(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ds = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ki = new RegExp(ds.source, "g");
function Ic(t) {
  return function() {
    return t;
  };
}
function Lc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Xo(t, e) {
  var n = ds.lastIndex = Ki.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = ds.exec(t)) && (i = Ki.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Ce(r, i) })), n = Ki.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Lc(l[0].x) : Ic(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Un(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Is(e) : (n === "number" ? Ce : n === "string" ? (r = In(e)) ? (e = r, gi) : Xo : e instanceof In ? gi : e instanceof Date ? Fc : Pc(e) ? Mc : Array.isArray(e) ? Dc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Oc : Ce)(t, e);
}
var ga = 180 / Math.PI, ps = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * ga,
    skewX: Math.atan(l) * ga,
    scaleX: a,
    scaleY: o
  };
}
var Jr;
function qc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ps : Bo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Vc(t) {
  return t == null || (Jr || (Jr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jr.setAttribute("transform", t), !(t = Jr.transform.baseVal.consolidate())) ? ps : (t = t.matrix, Bo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Wo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var m = p.push("translate(", null, e, null, n);
      g.push({ i: m - 4, x: Ce(u, h) }, { i: m - 2, x: Ce(f, c) });
    } else (h || c) && p.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Ce(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Ce(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ce(u, h) }, { i: m - 2, x: Ce(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var g = -1, m = c.length, b; ++g < m; ) h[(b = c[g]).i] = b.x(p);
      return h.join("");
    };
  };
}
var Yc = Wo(qc, "px, ", "px)", "deg)"), Hc = Wo(Vc, ", ", ")", ")"), cr = 0, Ar = 0, br = 0, Uo = 1e3, _i, Er, mi = 0, Ln = 0, Pi = 0, Dr = typeof performance == "object" && performance.now ? performance : Date, Go = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ls() {
  return Ln || (Go(zc), Ln = Dr.now() + Pi);
}
function zc() {
  Ln = 0;
}
function yi() {
  this._call = this._time = this._next = null;
}
yi.prototype = Ko.prototype = {
  constructor: yi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ls() : +n) + (e == null ? 0 : +e), !this._next && Er !== this && (Er ? Er._next = this : _i = this, Er = this), this._call = t, this._time = n, vs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, vs());
  }
};
function Ko(t, e, n) {
  var r = new yi();
  return r.restart(t, e, n), r;
}
function Xc() {
  Ls(), ++cr;
  for (var t = _i, e; t; )
    (e = Ln - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --cr;
}
function _a() {
  Ln = (mi = Dr.now()) + Pi, cr = Ar = 0;
  try {
    Xc();
  } finally {
    cr = 0, Wc(), Ln = 0;
  }
}
function Bc() {
  var t = Dr.now(), e = t - mi;
  e > Uo && (Pi -= e, mi = t);
}
function Wc() {
  for (var t, e = _i, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : _i = n);
  Er = t, vs(r);
}
function vs(t) {
  if (!cr) {
    Ar && (Ar = clearTimeout(Ar));
    var e = t - Ln;
    e > 24 ? (t < 1 / 0 && (Ar = setTimeout(_a, t - Dr.now() - Pi)), br && (br = clearInterval(br))) : (br || (mi = Dr.now(), br = setInterval(Bc, Uo)), cr = 1, Go(_a));
  }
}
function ma(t, e, n) {
  var r = new yi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Uc = To("start", "end", "cancel", "interrupt"), Gc = [], Zo = 0, ya = 1, gs = 2, ai = 3, wa = 4, _s = 5, oi = 6;
function Di(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Kc(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Uc,
    tween: Gc,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Zo
  });
}
function qs(t, e) {
  var n = ve(t, e);
  if (n.state > Zo) throw new Error("too late; already scheduled");
  return n;
}
function Pe(t, e) {
  var n = ve(t, e);
  if (n.state > ai) throw new Error("too late; already running");
  return n;
}
function ve(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Kc(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Ko(s, 0, n.time);
  function s(u) {
    n.state = ya, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== ya) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === ai) return ma(a);
        p.state === wa ? (p.state = oi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = oi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (ma(function() {
      n.state === ai && (n.state = wa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = gs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === gs) {
      for (n.state = ai, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = _s, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === _s && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = oi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Zc(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > gs && r.state < _s, r.state = oi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function jc(t) {
  return this.each(function() {
    Zc(this, t);
  });
}
function Jc(t, e) {
  var n, r;
  return function() {
    var i = Pe(this, t), s = i.tween;
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
function Qc(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Pe(this, t), a = s.tween;
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
function th(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ve(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Jc : Qc)(n, t, e));
}
function Vs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Pe(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ve(i, r).value[e];
  };
}
function jo(t, e) {
  var n;
  return (typeof e == "number" ? Ce : e instanceof In ? gi : (n = In(e)) ? (e = n, gi) : Xo)(t, e);
}
function eh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function rh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ih(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function sh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function ah(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function oh(t, e) {
  var n = Mi(t), r = n === "transform" ? Hc : jo;
  return this.attrTween(t, typeof e == "function" ? (n.local ? ah : sh)(n, r, Vs(this, "attr." + t, e)) : e == null ? (n.local ? nh : eh)(n) : (n.local ? ih : rh)(n, r, e));
}
function lh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function uh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function fh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && uh(t, s)), n;
  }
  return i._value = e, i;
}
function ch(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && lh(t, s)), n;
  }
  return i._value = e, i;
}
function hh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Mi(t);
  return this.tween(n, (r.local ? fh : ch)(r, e));
}
function dh(t, e) {
  return function() {
    qs(this, t).delay = +e.apply(this, arguments);
  };
}
function ph(t, e) {
  return e = +e, function() {
    qs(this, t).delay = e;
  };
}
function vh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dh : ph)(e, t)) : ve(this.node(), e).delay;
}
function gh(t, e) {
  return function() {
    Pe(this, t).duration = +e.apply(this, arguments);
  };
}
function _h(t, e) {
  return e = +e, function() {
    Pe(this, t).duration = e;
  };
}
function mh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gh : _h)(e, t)) : ve(this.node(), e).duration;
}
function yh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Pe(this, t).ease = e;
  };
}
function wh(t) {
  var e = this._id;
  return arguments.length ? this.each(yh(e, t)) : ve(this.node(), e).ease;
}
function xh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Pe(this, t).ease = n;
  };
}
function bh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(xh(this._id, t));
}
function $h(t) {
  typeof t != "function" && (t = ko(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Ke(r, this._parents, this._name, this._id);
}
function Ah(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new Ke(a, this._parents, this._name, this._id);
}
function Eh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Rh(t, e, n) {
  var r, i, s = Eh(e) ? qs : Pe;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Ch(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ve(this.node(), n).on.on(t) : this.each(Rh(n, t, e));
}
function Th(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Nh() {
  return this.on("end.remove", Th(this._id));
}
function Sh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ds(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Di(u[c], e, n, c, u, ve(f, n)));
  return new Ke(s, this._parents, e, n);
}
function kh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = So(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, g = ve(f, n), m = 0, b = c.length; m < b; ++m)
          (p = c[m]) && Di(p, e, n, m, c, g);
        s.push(c), a.push(f);
      }
  return new Ke(s, a, e, n);
}
var Mh = pr.prototype.constructor;
function Ph() {
  return new Mh(this._groups, this._parents);
}
function Dh(t, e) {
  var n, r, i;
  return function() {
    var s = fr(this, t), a = (this.style.removeProperty(t), fr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Jo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = fr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Oh(t, e, n) {
  var r, i, s;
  return function() {
    var a = fr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), fr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Ih(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Pe(this, t), u = l.on, f = l.value[s] == null ? o || (o = Jo(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Lh(t, e, n) {
  var r = (t += "") == "transform" ? Yc : jo;
  return e == null ? this.styleTween(t, Dh(t, r)).on("end.style." + t, Jo(t)) : typeof e == "function" ? this.styleTween(t, Oh(t, r, Vs(this, "style." + t, e))).each(Ih(this._id, t)) : this.styleTween(t, Fh(t, r, e), n).on("end.style." + t, null);
}
function qh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Vh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && qh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Yh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Vh(t, e, n ?? ""));
}
function Hh(t) {
  return function() {
    this.textContent = t;
  };
}
function zh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Xh(t) {
  return this.tween("text", typeof t == "function" ? zh(Vs(this, "text", t)) : Hh(t == null ? "" : t + ""));
}
function Bh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Wh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Bh(i)), e;
  }
  return r._value = t, r;
}
function Uh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Wh(t));
}
function Gh() {
  for (var t = this._name, e = this._id, n = Qo(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = ve(l, e);
        Di(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ke(r, this._parents, t, n);
}
function Kh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Pe(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Zh = 0;
function Ke(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function li(t) {
  return pr().transition(t);
}
function Qo() {
  return ++Zh;
}
var qe = pr.prototype;
Ke.prototype = li.prototype = {
  constructor: Ke,
  select: Sh,
  selectAll: kh,
  selectChild: qe.selectChild,
  selectChildren: qe.selectChildren,
  filter: $h,
  merge: Ah,
  selection: Ph,
  transition: Gh,
  call: qe.call,
  nodes: qe.nodes,
  node: qe.node,
  size: qe.size,
  empty: qe.empty,
  each: qe.each,
  on: Ch,
  attr: oh,
  attrTween: hh,
  style: Lh,
  styleTween: Yh,
  text: Xh,
  textTween: Uh,
  remove: Nh,
  tween: th,
  delay: vh,
  duration: mh,
  ease: wh,
  easeVarying: bh,
  end: Kh,
  [Symbol.iterator]: qe[Symbol.iterator]
};
function jh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Jh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: jh
};
function Qh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function td(t) {
  var e, n;
  t instanceof Ke ? (e = t._id, t = t._name) : (e = Qo(), (n = Jh).time = Ls(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Di(l, t, e, u, a, n || Qh(l, e));
  return new Ke(r, this._parents, t, e);
}
pr.prototype.interrupt = jc;
pr.prototype.transition = td;
const ms = Math.PI, ys = 2 * ms, gn = 1e-6, ed = ys - gn;
function tl(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function nd(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return tl;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class rd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? tl : nd(e);
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
      let p = r - a, g = i - o, m = l * l + u * u, b = p * p + g * g, $ = Math.sqrt(m), R = Math.sqrt(c), E = s * Math.tan((ms - Math.acos((m + c - b) / (2 * $ * R))) / 2), M = E / R, C = E / $;
      Math.abs(M - 1) > gn && this._append`L${e + M * f},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * p > f * g)},${this._x1 = e + C * l},${this._y1 = n + C * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > gn || Math.abs(this._y1 - f) > gn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % ys + ys), c > ed ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > gn && this._append`A${r},${r},0,${+(c >= ms)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function id(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const sd = id("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Nt(t) {
  return function() {
    return t;
  };
}
const xa = Math.abs, Tt = Math.atan2, vn = Math.cos, ad = Math.max, Zi = Math.min, be = Math.sin, Gn = Math.sqrt, Pt = 1e-12, Fr = Math.PI, wi = Fr / 2, ui = 2 * Fr;
function od(t) {
  return t > 1 ? 0 : t < -1 ? Fr : Math.acos(t);
}
function ba(t) {
  return t >= 1 ? wi : t <= -1 ? -wi : Math.asin(t);
}
function ld(t) {
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
  }, () => new rd(e);
}
function ud(t) {
  return t.innerRadius;
}
function fd(t) {
  return t.outerRadius;
}
function cd(t) {
  return t.startAngle;
}
function hd(t) {
  return t.endAngle;
}
function dd(t) {
  return t && t.padAngle;
}
function pd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Pt))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function Qr(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Gn(o * o + l * l), f = u * l, h = -u * o, c = t + f, p = e + h, g = n + f, m = r + h, b = (c + g) / 2, $ = (p + m) / 2, R = g - c, E = m - p, M = R * R + E * E, C = i - s, tt = c * m - g * p, nt = (E < 0 ? -1 : 1) * Gn(ad(0, C * C * M - tt * tt)), Q = (tt * E - R * nt) / M, J = (-tt * R - E * nt) / M, ht = (tt * E + R * nt) / M, yt = (-tt * R + E * nt) / M, dt = Q - b, D = J - $, S = ht - b, Rt = yt - $;
  return dt * dt + D * D > S * S + Rt * Rt && (Q = ht, J = yt), {
    cx: Q,
    cy: J,
    x01: -f,
    y01: -h,
    x11: Q * (i / C - 1),
    y11: J * (i / C - 1)
  };
}
function Ve() {
  var t = ud, e = fd, n = Nt(0), r = null, i = cd, s = hd, a = dd, o = null, l = ld(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), p = +e.apply(this, arguments), g = i.apply(this, arguments) - wi, m = s.apply(this, arguments) - wi, b = xa(m - g), $ = m > g;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > Pt)) o.moveTo(0, 0);
    else if (b > ui - Pt)
      o.moveTo(p * vn(g), p * be(g)), o.arc(0, 0, p, g, m, !$), c > Pt && (o.moveTo(c * vn(m), c * be(m)), o.arc(0, 0, c, m, g, $));
    else {
      var R = g, E = m, M = g, C = m, tt = b, nt = b, Q = a.apply(this, arguments) / 2, J = Q > Pt && (r ? +r.apply(this, arguments) : Gn(c * c + p * p)), ht = Zi(xa(p - c) / 2, +n.apply(this, arguments)), yt = ht, dt = ht, D, S;
      if (J > Pt) {
        var Rt = ba(J / c * be(Q)), H = ba(J / p * be(Q));
        (tt -= Rt * 2) > Pt ? (Rt *= $ ? 1 : -1, M += Rt, C -= Rt) : (tt = 0, M = C = (g + m) / 2), (nt -= H * 2) > Pt ? (H *= $ ? 1 : -1, R += H, E -= H) : (nt = 0, R = E = (g + m) / 2);
      }
      var pt = p * vn(R), qt = p * be(R), et = c * vn(C), je = c * be(C);
      if (ht > Pt) {
        var ge = p * vn(E), Gt = p * be(E), fn = c * vn(M), kt = c * be(M), Ct;
        if (b < Fr)
          if (Ct = pd(pt, qt, fn, kt, ge, Gt, et, je)) {
            var se = pt - Ct[0], Je = qt - Ct[1], De = ge - Ct[0], Fe = Gt - Ct[1], cn = 1 / be(od((se * De + Je * Fe) / (Gn(se * se + Je * Je) * Gn(De * De + Fe * Fe))) / 2), hn = Gn(Ct[0] * Ct[0] + Ct[1] * Ct[1]);
            yt = Zi(ht, (c - hn) / (cn - 1)), dt = Zi(ht, (p - hn) / (cn + 1));
          } else
            yt = dt = 0;
      }
      nt > Pt ? dt > Pt ? (D = Qr(fn, kt, pt, qt, p, dt, $), S = Qr(ge, Gt, et, je, p, dt, $), o.moveTo(D.cx + D.x01, D.cy + D.y01), dt < ht ? o.arc(D.cx, D.cy, dt, Tt(D.y01, D.x01), Tt(S.y01, S.x01), !$) : (o.arc(D.cx, D.cy, dt, Tt(D.y01, D.x01), Tt(D.y11, D.x11), !$), o.arc(0, 0, p, Tt(D.cy + D.y11, D.cx + D.x11), Tt(S.cy + S.y11, S.cx + S.x11), !$), o.arc(S.cx, S.cy, dt, Tt(S.y11, S.x11), Tt(S.y01, S.x01), !$))) : (o.moveTo(pt, qt), o.arc(0, 0, p, R, E, !$)) : o.moveTo(pt, qt), !(c > Pt) || !(tt > Pt) ? o.lineTo(et, je) : yt > Pt ? (D = Qr(et, je, ge, Gt, c, -yt, $), S = Qr(pt, qt, fn, kt, c, -yt, $), o.lineTo(D.cx + D.x01, D.cy + D.y01), yt < ht ? o.arc(D.cx, D.cy, yt, Tt(D.y01, D.x01), Tt(S.y01, S.x01), !$) : (o.arc(D.cx, D.cy, yt, Tt(D.y01, D.x01), Tt(D.y11, D.x11), !$), o.arc(0, 0, c, Tt(D.cy + D.y11, D.cx + D.x11), Tt(S.cy + S.y11, S.cx + S.x11), $), o.arc(S.cx, S.cy, yt, Tt(S.y11, S.x11), Tt(S.y01, S.x01), !$))) : o.arc(0, 0, c, C, M, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Fr / 2;
    return [vn(h) * f, be(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Nt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Nt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Nt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Nt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Nt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Nt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Nt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function vd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function gd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _d(t) {
  return t;
}
function $a() {
  var t = _d, e = gd, n = null, r = Nt(0), i = Nt(ui), s = Nt(0);
  function a(o) {
    var l, u = (o = vd(o)).length, f, h, c = 0, p = new Array(u), g = new Array(u), m = +r.apply(this, arguments), b = Math.min(ui, Math.max(-ui, i.apply(this, arguments) - m)), $, R = Math.min(Math.abs(b) / u, s.apply(this, arguments)), E = R * (b < 0 ? -1 : 1), M;
    for (l = 0; l < u; ++l)
      (M = g[p[l] = l] = +t(o[l], l, o)) > 0 && (c += M);
    for (e != null ? p.sort(function(C, tt) {
      return e(g[C], g[tt]);
    }) : n != null && p.sort(function(C, tt) {
      return n(o[C], o[tt]);
    }), l = 0, h = c ? (b - u * E) / c : 0; l < u; ++l, m = $)
      f = p[l], M = g[f], $ = m + (M > 0 ? M * h : 0) + E, g[f] = {
        data: o[f],
        index: l,
        value: M,
        startAngle: m,
        endAngle: $,
        padAngle: R
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Nt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Nt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Nt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Nt(+o), a) : s;
  }, a;
}
function Rr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Rr.prototype = {
  constructor: Rr,
  scale: function(t) {
    return t === 1 ? this : new Rr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Rr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Rr.prototype;
var md = /* @__PURE__ */ wu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const yd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function el(t, e) {
  $s(e, !0), Eo(t, yd);
  let n = vt(e, "jsonData", 7), r = vt(e, "currentRound", 7, 1), i = vt(e, "mouseEventType", 15), s = vt(e, "mouseData", 15), a = vt(e, "mouseX", 15), o = vt(e, "mouseY", 15), l = vt(e, "requestRoundChange", 7, (d) => {
  }), u = vt(e, "candidateColors", 23, () => []), f = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = vt(e, "firstRoundDeterminesPercentages", 7, !1), c = vt(e, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const g = 800, m = 800, b = Math.min(g, m) * 0.3, $ = g / 2, R = m / 2, E = "Pie", M = "Donut", C = "TextLayer", tt = "url(#cross-hatch)", nt = 1.15, Q = 0.1, J = 750, ht = 800;
  function yt(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let dt = [], D = [], S = [], Rt = 0, H = 0;
  const pt = {}, qt = "No Further Rankings";
  let et = /* @__PURE__ */ _t(null);
  function je() {
    const d = xt(x(et));
    d.select("#" + E).remove(), d.select("#" + M).remove(), d.select("#" + C).remove();
  }
  function ge(d) {
    l() && (rt = d, l()(d));
  }
  function Gt(d) {
    je(), S = fn(d), dt = Li(d, E, S, $, R, 0, kt());
  }
  Ru(() => {
    vr(), setTimeout(
      () => {
        Gt(r());
      },
      0
    );
  });
  function fn(d) {
    const _ = Br(d);
    return Rt = cn(d), _;
  }
  function kt() {
    return b;
  }
  function Ct() {
    return kt() * 1.41;
  }
  function se(d) {
    let _ = 0;
    for (let w = 1; w < d; w++) {
      const P = n().results[w - 1].tallyResults;
      for (let A = 0; A < P.length; A++) {
        const T = P[A].transfers;
        if (T) {
          const k = T.exhausted;
          k && (_ += Number(k));
        }
      }
    }
    return _;
  }
  function Je(d, _) {
    if (d === "exhausted") return se(_);
    {
      const w = n().results[_ - 1].tally;
      return Number(w[d]);
    }
  }
  function De(d, _) {
    return Je(d, _).toLocaleString("en-US");
  }
  function Fe(d, _) {
    const w = h() ? Rt : Fi(_);
    return (Je(d, _) / w).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function cn(d) {
    const _ = n().results[d - 1].tally;
    let w = 0;
    for (let [P, A] of Object.entries(_))
      w += Number(A);
    return w;
  }
  function hn(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Fi(d) {
    const _ = n().results[d - 1].tally;
    let w = 0;
    for (let [P, A] of Object.entries(_))
      hn(P) || (w += Number(A));
    return w;
  }
  function Xr(d, _) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const w = n().results[d - 1].tallyResults, P = [];
    for (let A = 0; A < w.length; A++) {
      const T = w[A][_];
      T != null && P.push(T);
    }
    return P;
  }
  function Qe(d) {
    return Xr(d, "eliminated");
  }
  function dn(d) {
    let _ = [];
    for (let w = 1; w <= d; w++) _ = _.concat(Xr(w, "elected"));
    return _;
  }
  function Oi(d, _) {
    const w = n().results[_ - 1].tallyResults;
    let P = 0;
    const A = w.findIndex((T) => (T == null ? void 0 : T.elected) && d == T.elected);
    if (A >= 0) {
      const T = w[A].transfers;
      if (T)
        for (let [k, I] of Object.entries(T)) P += Number(I);
    } else
      return 0;
    return P;
  }
  function Br(d) {
    const _ = n().results;
    let w = _[Math.max(0, d - 2)].tally;
    const P = [], A = [];
    for (let [k, I] of Object.entries(w))
      P.push({ label: k, value: 0 });
    w = _[d - 1].tally;
    for (let k of P) {
      const I = Number(w[k.label]), q = Oi(k.label, d);
      q > 0 ? (A.push({
        label: k.label,
        value: q,
        isTransfer: !0
      }), k.value = I - q, A.push(k)) : (k.value = I, A.push(k));
    }
    const T = se(d);
    return A.push({ label: "exhausted", value: T }), A;
  }
  function vr() {
    const d = xt(x(et)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [w, P] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? _ < 10 ? pt[w] = sd[_] : pt[w] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : pt[w] = u()[_ % u().length], _++;
      {
        const A = d.clone(!0);
        A.attr("id", yt(w)).select("rect").attr("fill", pt[w]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    pt.exhausted = tt, pt["Inactive Ballots"] = tt;
  }
  function Ii() {
    xt(x(et)).select("#" + M).remove();
  }
  function y(d, _) {
    const w = li("global").duration(ht);
    _ && w.on("end", _), Ii(), zn(d), nl(), il(0, kt()), Wr();
  }
  function z(d, _) {
    const w = li("global").duration(ht);
    _ && w.on("end", _), Ie(d);
  }
  function Z(d, _) {
    const w = li("global").duration(ht);
    _ && w.on("end", _), Yn(d), Hn(kt());
  }
  let K = !1, st = [];
  function G() {
    Wr(), K = !1, wt();
  }
  function wt() {
    if (st.length === 0) {
      rt !== r() && (r() === rt + 1 && rt > 0 && r() <= n().results.length ? (rt = r(), _e(r())) : r() >= 1 && r() <= n().results.length && (rt = r(), c(0), Gt(r())));
      return;
    }
    const d = st.shift();
    switch (d.type) {
      case "round": {
        const _ = d.round;
        _ === rt + 1 && rt > 0 && _ <= n().results.length ? (rt = _, _e(_)) : (_ !== rt && _ >= 1 && _ <= n().results.length && (rt = _, c(0), Gt(_)), wt());
        break;
      }
      case "step":
        Oe();
        break;
    }
  }
  function _e(d) {
    if (d <= 1 || d > n().results.length) {
      wt();
      return;
    }
    K = !0, H = d, c(0), y(H - 1, () => {
      z(H - 1, () => {
        Z(H, G);
      });
    });
  }
  function me() {
    K || (K = !0, H = r(), tn());
  }
  function tn() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), st.length > 0) {
      G();
      return;
    }
    const d = H < n().results.length - 1 ? tn : G;
    y(H, () => {
      z(H, () => {
        H++, ge(H), Z(H, d);
      });
    });
  }
  Ns(() => {
    Mt();
  });
  let rt = 0;
  function Mt() {
    if (rt != r()) {
      if (K) {
        st.push({ type: "round", round: r() });
        return;
      }
      rt == r() - 1 && rt > 0 ? Kt() : ye(r()), rt = r();
    }
  }
  function ye(d) {
    if (K) {
      st.push({ type: "round", round: d });
      return;
    }
    c(0), Gt(d);
  }
  function Kt() {
    if (K) {
      st.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (H = r(), H > n().results.length) {
      Wr(), K = !1;
      return;
    }
    K = !0, c() === 0 ? y(H - 1, () => {
      z(H - 1, () => {
        Z(H, G);
      });
    }) : c() === 1 ? z(H - 1, () => {
      Z(H, G);
    }) : c() === 2 && Z(H, G), c(0);
  }
  function Oe() {
    if (r() > n().results.length) {
      Wr(), K = !1;
      return;
    }
    if (K) {
      st.push({ type: "step" });
      return;
    }
    K = !0, c((c() + 1) % 3), H = r(), c() === 1 ? y(H, G) : c() === 2 ? z(H, G) : c() === 0 ? (H++, ge(H), Z(H, G)) : (K = !1, console.warn("displayPhase out of range at ", c()));
  }
  function Yn(d) {
    S = Br(d), dt = sl(d, E, S, 0, kt(), !0);
  }
  function Hn(d, _) {
    const w = xt(x(et)).select("#" + M), P = Ve().outerRadius(d).innerRadius(d - 1), A = w.selectAll(".slice");
    let T = A.size();
    function k() {
      T--, T === 0 && rl();
    }
    A.select("path").transition("global").duration(J).attr("d", (I) => P(I)).on("end", (I) => k());
  }
  function zn(d) {
    const _ = gr(d, dt);
    D = Hs(d, M, _, $, R, kt(), Ct(), !1, !0);
  }
  function Ie(d) {
    const _ = mr(d, D, dt);
    D = zs(d, M, _, kt(), Ct(), !1);
  }
  function Zt(d) {
    return pt[d.data.label];
  }
  function Xn(d) {
    const _ = {}, w = n().results[d - 1].tallyResults;
    for (let P = 0; P < w.length; P++) {
      let A = w[P].eliminated;
      if (A === void 0 && (A = w[P].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = w[P].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [k, I] of Object.entries(T))
        _[k] === void 0 ? _[k] = Number(I) : _[k] += Number(I);
    }
    return _;
  }
  function gr(d, _) {
    const w = [], P = Rt, A = n().results[d - 1].tallyResults;
    for (let T = 0; T < A.length; T++) {
      let k = A[T].eliminated;
      if (k === void 0 && (k = A[T].elected), k === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const I = A[T].transfers;
      if (I === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let q = _.find((O) => O.data.label == k && O.data.isTransfer);
      q === void 0 && (q = _.find((O) => O.data.label == k && !O.data.isTransfer));
      let W = 0;
      if (q) W = q.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [O, X] of Object.entries(I)) {
        let it;
        const xe = _.find((ut) => ut.data.label == O);
        if (xe)
          it = structuredClone(xe);
        else if (O == "exhausted")
          it = {
            data: { label: O, value: Number(X) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (O == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", X);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", O);
          continue;
        }
        const N = Number(X) / P * 2 * Math.PI;
        it.startAngle = W, W = it.endAngle = W + N, it.index = T, it.data.transferIndex = T, w.push(it);
      }
    }
    return w;
  }
  function _r(d, _, w) {
    const P = {};
    for (let [A, T] of Object.entries(d)) {
      const k = w.find((W) => A == W.data.label);
      if (k === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const I = (k.startAngle + k.endAngle) / 2, q = d[k.data.label] / _ * 2 * Math.PI;
      P[k.data.label] = I - q / 2;
    }
    return P;
  }
  function mr(d, _, w) {
    const P = [], A = Rt, T = Xn(d), k = _r(T, A, w);
    for (let [I, q] of _.entries()) {
      const W = structuredClone(q), O = q.endAngle - q.startAngle, X = w.find((it) => q.data.label === it.data.label && !it.data.isTransfer);
      if (X) {
        const it = X.data.label;
        W.startAngle = k[it], k[it] += O, W.endAngle = W.startAngle + O;
      } else if (q.data.label === "exhausted")
        W.startAngle = q.startAngle, W.endAngle = q.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", q.data.label);
        continue;
      }
      W.index = I, P.push(W);
    }
    return P;
  }
  function we(d, _, w, P, A, T) {
    const I = xt(x(et)).append("g").attr("id", C).attr("transform", `translate(${w}, ${P})`), q = Ve().innerRadius(A * nt).outerRadius(A * nt);
    I.selectAll("text").data(_).enter().each(function(W) {
      W.endAngle - W.startAngle < Q || W.data.isTransfer || xt(this).append("g").attr("id", (O) => p(O.data)).classed("eliminated", (O) => T.includes(O.data.label) || O.data.isTransfer === !0).each(function(O, X) {
        O.data.label === "exhausted" && xt(this).on("mouseenter", (it, xe) => al(it)).on("mouseleave", (it, xe) => ol());
      }).append("text").attr("transform", (O) => `translate(${q.centroid(O)})`).attr("text-anchor", (O) => qi(O.startAngle, O.endAngle)).text((O) => O.data.label === "exhausted" ? qt : O.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((O) => {
        const X = De(O.data.label, d);
        return !h() && hn(O.data.label) ? X : X + " (" + Fe(O.data.label, d) + ")";
      });
    });
  }
  function Le(d, _, w, P) {
    const T = xt(x(et)).select("#" + C), k = T.selectAll("tspan"), I = T.selectAll("g").data(_, (X) => p(X.data)).classed("eliminated", (X) => P.includes(X.data.label) || X.data.isTransfer === !0), q = Ve().innerRadius(w * nt).outerRadius(w * nt + 1);
    k.transition("global").duration(J).attr("transform", (X) => `translate(${q.centroid(X)})`).attr("text-anchor", (X) => qi(X.startAngle, X.endAngle)), I.select("text").transition("global").duration(J).attr("transform", (X) => `translate(${q.centroid(X)})`).attr("text-anchor", (X) => qi(X.startAngle, X.endAngle)).on("end", (X) => O());
    let W = I.size();
    function O(X) {
      W--, W === 0 && (T.remove(), we(d, _, $, R, w, P));
    }
  }
  function Li(d, _, w, P, A, T, k, I = !0, q = !1) {
    const O = $a().sort(null).value((X) => X.value)(w);
    return Hs(d, _, O, P, A, T, k, I, q), O;
  }
  function Wr() {
    xt(x(et)).select("#" + E).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function Hs(d, _, w, P, A, T, k, I, q) {
    const W = Qe(d), O = dn(d), xe = xt(x(et)).attr("viewBox", `0 0 ${g} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${P}, ${A})`).selectAll(".slice").data(w).enter().append("g").attr("class", "slice").classed("eliminated", (N) => W.includes(N.data.label) || N.data.isTransfer === !0).classed("elected", (N) => O.includes(N.data.label) && !N.data.isTransfer).attr("id", (N) => p(N.data)).on("mouseenter", (N, ut) => Yi(N, ut)).on("mouseleave", (N, ut) => Hi(N, ut)), yr = Ve().outerRadius(k).innerRadius(T);
    if (q) {
      const N = Ve().outerRadius(T + 1).innerRadius(T);
      xe.append("path").attr("d", N).transition("global").duration(J).attr("d", (ut) => yr(ut)).attr("fill", (ut) => Zt(ut)).on("end", (ut) => Vi());
    } else
      xe.append("path").attr("d", (N) => yr(N)).attr("fill", (N) => Zt(N)), Vi();
    return I && we(d, w, P, A, k, W), w;
  }
  function nl() {
    const w = xt(x(et)).select("#" + C).selectAll(".eliminated");
    w.size() > 0 && w.classed("finished", !0);
  }
  function rl() {
    const w = xt(x(et)).select("#" + C).selectAll(".finished");
    w.size() > 0 && w.remove();
  }
  function il(d, _) {
    const A = xt(x(et)).select("#" + E).selectAll(".eliminated"), T = Ve().innerRadius(d), k = Ve().outerRadius(_);
    A.classed("finished", !0).select("path").transition("global").duration(J).attrTween("d", function(I) {
      const q = Un(_, d);
      return function(W) {
        return k.innerRadius(q(W)), k(I);
      };
    }).attr("fill", (I) => `url(#${yt(I.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(J).attrTween("d", function(I) {
      const q = Un(_, d);
      return function(W) {
        return T.outerRadius(q(W)), T(I);
      };
    }).attr("fill", (I) => Zt(I));
  }
  function qi(d, _) {
    const w = (d + _) / 2;
    return w > Math.PI * 11 / 6 || w < Math.PI * 1 / 6 || w > Math.PI * 5 / 6 && w < Math.PI * 7 / 6 ? "middle" : w < Math.PI ? "start" : "end";
  }
  function Vi() {
    xt(x(
      et
      // force redisplay of text labels
    )).select("#" + C).raise().append("g").remove();
  }
  function sl(d, _, w, P, A, T) {
    const I = $a().sort(null).value((q) => q.value)(w);
    return zs(d, _, I, P, A, T), I;
  }
  function zs(d, _, w, P, A, T) {
    const k = Qe(d), I = dn(d), q = Ve().outerRadius(A).innerRadius(P).startAngle((N) => N.startAngle).endAngle((N) => N.endAngle), W = Ve().outerRadius(A).innerRadius(P), X = xt(x(et)).select("#" + _);
    X.selectAll(".slice").attr("prevStart", (N) => N.startAngle).attr("prevEnd", (N) => N.endAngle);
    const it = X.selectAll(".slice").data(w, (N) => p(N.data));
    it.enter().append("g").attr("class", "slice").attr("id", (N) => p(N.data)).classed("eliminated", !0).on("mouseenter", (N, ut) => Yi(N, ut)).on("mouseleave", (N, ut) => Hi(N, ut)).append("path").attr("d", (N) => W(N)).attr("fill", (N) => Zt(N)), it.classed("eliminated", (N) => k.includes(N.data.label)).classed("elected", (N) => I.includes(N.data.label)).on("mouseenter", (N, ut) => Yi(N, ut)).on("mouseleave", (N, ut) => Hi(N, ut));
    let xe = it.size();
    function yr() {
      xe--, xe <= 0 && (Vi(), X.selectAll(".finished").remove());
    }
    return it.select("path").transition("global").duration(J).attrTween("d", function(N) {
      const ut = Number(xt(this.parentNode).attr("prevStart")), ul = Number(xt(this.parentNode).attr("prevEnd")), fl = Un(ut, N.startAngle), cl = Un(ul, N.endAngle);
      return (Bs) => (q.startAngle(fl(Bs)).endAngle(cl(Bs)), q(N));
    }).on("end", yr), T && Le(d, w, A, k), w;
  }
  function Yi(d, _) {
    s(_.data.label), i("enter"), a(d.clientX), o(d.clientY);
  }
  function Hi(d, _) {
    s(_.data.label), i("leave");
  }
  function al(d, _) {
    i("show-exhausted"), a(d.clientX), o(d.clientY);
  }
  function ol(d, _) {
    i("hide-exhausted");
  }
  var ll = {
    pieColors: pt,
    exhaustedLabel: qt,
    countExhaustedVotes: se,
    getEliminatedCandidates: Qe,
    getElectedCandidates: dn,
    runFullAnimationFn: me,
    animateOnePhaseFn: Oe,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), ft();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), ft();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), ft();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), ft();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), ft();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), ft();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (_) => {
    }) {
      l(d), ft();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), ft();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), ft();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), ft();
    }
  }, Xs = md();
  return ri(Xs, (d) => ot(et, d), () => x(et)), le(t, Xs), As(ll);
}
Co(
  el,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseX: {},
    mouseY: {},
    requestRoundChange: {},
    candidateColors: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    displayPhase: {}
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
var wd = /* @__PURE__ */ Vn("<span> </span> <!>", 1), xd = /* @__PURE__ */ Vn("About to eliminate: <!>", 1), bd = /* @__PURE__ */ Vn("<span> </span> <!>", 1), $d = /* @__PURE__ */ Vn(" <!>", 1), Ad = /* @__PURE__ */ Vn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Ed = /* @__PURE__ */ Vn("<span> </span> <br/>", 1), Rd = /* @__PURE__ */ Vn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const Cd = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;max-width:calc(100vw - 24px);text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl) {background-color:#4747ff;color:#fff;padding:1px 7px;font-size:0.67rem;min-width:107px;border:none;border-radius:3px;cursor:pointer;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl):hover {background-color:#4747c2;}.pie-chart-container.svelte-1r6y5gl {width:100%;min-width:auto;flex-grow:0;margin:0 auto;margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:20px;}

/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function Td(t, e) {
  $s(e, !0), Eo(t, Cd);
  const n = 0.85;
  let r = vt(e, "electionSummary", 7), i = vt(e, "currentRound", 7, 1), s = vt(e, "requestRoundChange", 7, (y) => {
  }), a = vt(e, "candidateColors", 23, () => []), o = vt(e, "textForWinner", 7, "elected"), l = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = vt(e, "firstRoundDeterminesPercentages", 7, !1), f = vt(e, "showCaptions", 7, !1);
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
  let c = /* @__PURE__ */ Bn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ _t(null), g = /* @__PURE__ */ _t(null), m = /* @__PURE__ */ _t(""), b = /* @__PURE__ */ _t(yn([])), $ = /* @__PURE__ */ _t(""), R = /* @__PURE__ */ _t(""), E = /* @__PURE__ */ _t(0), M = /* @__PURE__ */ _t(0), C = /* @__PURE__ */ Bn(() => tt(r()));
  function tt(y) {
    if (typeof y == "string")
      try {
        y = JSON.parse(y);
      } catch (z) {
        return console.error("Failed to parse JSON string:", z), {};
      }
    return y || {};
  }
  function nt(y) {
    s() ? s()(y) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(y, z, Z) {
    y.style.left = z + "px", y.style.top = Z + 20 + "px", y.style.transform = "none", requestAnimationFrame(() => {
      const G = y.getBoundingClientRect();
      let wt = z, _e = Z + 20;
      wt + G.width > window.innerWidth - 12 && (wt = window.innerWidth - G.width - 12), wt < 12 && (wt = 12), _e + G.height > window.innerHeight - 12 && (_e = Z - G.height - 12), y.style.left = wt + "px", y.style.top = _e + "px";
    });
  }
  function J() {
    switch (x($)) {
      case "enter":
        ((y) => {
          var z = Nl(y, 2);
          ot(b, z[0], !0), ot(m, z[1], !0);
        })(yt(x(R), i())), x(p) && (Q(x(p), x(E) || 0, x(M) || 0), x(p).style.opacity = String(n));
        break;
      case "leave":
        x(p) && (x(p).style.opacity = "0"), ot(b, [], !0), ot(m, "");
        break;
      case "show-exhausted":
        x(g) && (Q(x(g), x(E) || 0, x(M) || 0), x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x($));
        break;
    }
  }
  Ns(() => J());
  function ht(y, z) {
    return y == 1 ? z ? "vote was" : "vote will be" : z ? "votes were" : "votes will be";
  }
  function yt(y, z) {
    const Z = [], K = y === "exhausted" ? ge() : y;
    let st;
    y == "exhausted" ? st = et(1) : st = x(C).results[0].tally[y], Z.push(`${K} started with ${st} votes.`);
    for (let G = 1; G <= z; G++) {
      G === z && (y == "exhausted" ? st = et(z) : st = x(C).results[z - 1].tally[y], Z.push(`${K} has ${st} votes at round ${z}.`));
      const wt = x(C).results[G - 1].tallyResults, _e = H(G);
      for (let me = 0; me < wt.length; me++) {
        const tn = wt[me].transfers, rt = wt[me].eliminated, Mt = wt[me].elected;
        if (!_e) {
          if (rt)
            rt === y && Z.push(`${K} will be eliminated on round ${G}.`);
          else if (y === Mt && (Z.push(`${K} ${x(c).event} on round ${G}.`), tn))
            for (let [Kt, Oe] of Object.entries(tn))
              Z.push(`${Oe} ${ht(Number(Oe), G < z)} transferred to ${Kt} on round ${G}.`);
        }
        const ye = rt || Mt;
        if (ye) {
          const Kt = Number(tn[y]);
          Kt && Z.push(`${Kt} ${ht(Kt, G < z)} transferred from ${ye} on round ${G}.`);
        }
      }
    }
    return [Z, K];
  }
  function dt() {
    let y = 0;
    for (let z = 1; z <= x(C).results.length; z++) {
      if (H(z)) continue;
      const Z = x(C).results[z - 1].tallyResults;
      for (let K = 0; K < Z.length; K++)
        Z[K].elected && y++;
    }
    return y;
  }
  const D = ["Eliminate", "Transfer", "Consolidate"];
  let S, Rt = /* @__PURE__ */ _t(0);
  function H(y) {
    return l() && x(C).results && y === x(C).results.length;
  }
  function pt(y) {
    return H(y) ? [] : S ? S.getEliminatedCandidates(y) : [];
  }
  function qt(y) {
    return H(y) ? [] : S ? S.getElectedCandidates(y) : [];
  }
  function et(y) {
    return S ? S.countExhaustedVotes(y) : 0;
  }
  function je() {
    S && S.animateOnePhaseFn && S.animateOnePhaseFn();
  }
  function ge() {
    return S ? S.exhaustedLabel : "";
  }
  function Gt() {
    return S ? S.pieColors : {};
  }
  var fn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(y) {
      r(y), ft();
    },
    get currentRound() {
      return i();
    },
    set currentRound(y = 1) {
      i(y), ft();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(y = (z) => {
    }) {
      s(y), ft();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(y = []) {
      a(y), ft();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(y = "elected") {
      o(y), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(y = !1) {
      l(y), ft();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(y = !1) {
      u(y), ft();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(y = !1) {
      f(y), ft();
    }
  }, kt = Rd(), Ct = pn(kt), se = Yt(Ct);
  se.__click = je;
  var Je = Yt(se, !0);
  Vt(se), Vt(Ct);
  var De = ae(Ct, 4), Fe = Yt(De), cn = Yt(Fe), hn = Yt(cn);
  ri(
    el(hn, {
      get jsonData() {
        return x(C);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: nt,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return l();
      },
      get firstRoundDeterminesPercentages() {
        return u();
      },
      get mouseEventType() {
        return x($);
      },
      set mouseEventType(y) {
        ot($, y, !0);
      },
      get mouseData() {
        return x(R);
      },
      set mouseData(y) {
        ot(R, y, !0);
      },
      get mouseX() {
        return x(E);
      },
      set mouseX(y) {
        ot(E, y, !0);
      },
      get mouseY() {
        return x(M);
      },
      set mouseY(y) {
        ot(M, y, !0);
      },
      get displayPhase() {
        return x(Rt);
      },
      set displayPhase(y) {
        ot(Rt, y, !0);
      }
    }),
    (y) => S = y,
    () => S
  ), Vt(cn), Vt(Fe);
  var Fi = ae(Fe, 2);
  {
    var Xr = (y) => {
      var z = Ad(), Z = pn(z), K = Yt(Z);
      Vt(Z);
      var st = ae(Z, 2), G = Yt(st);
      {
        var wt = (Mt) => {
          var ye = xd(), Kt = ae(pn(ye));
          Wi(Kt, 17, () => pt(i()), Bi, (Oe, Yn, Hn) => {
            var zn = wd(), Ie = pn(zn);
            let Zt;
            var Xn = Yt(Ie, !0);
            Vt(Ie);
            var gr = ae(Ie, 2);
            {
              var _r = (we) => {
                var Le = ea(", ");
                le(we, Le);
              }, mr = /* @__PURE__ */ Bn(() => Hn < pt(i()).length - 1);
              wr(gr, (we) => {
                x(mr) && we(_r);
              });
            }
            Wn(
              (we) => {
                Zt = ia(Ie, "", Zt, we), en(Xn, x(Yn));
              },
              [() => ({ color: Gt()[x(Yn)] })]
            ), le(Oe, zn);
          }), le(Mt, ye);
        }, _e = /* @__PURE__ */ Bn(() => pt(i()).length > 0);
        wr(G, (Mt) => {
          x(_e) && Mt(wt);
        });
      }
      var me = ae(G, 2);
      {
        var tn = (Mt) => {
          var ye = $d(), Kt = pn(ye), Oe = ae(Kt);
          Wi(Oe, 17, () => qt(i()), Bi, (Yn, Hn, zn) => {
            var Ie = bd(), Zt = pn(Ie);
            let Xn;
            var gr = Yt(Zt, !0);
            Vt(Zt);
            var _r = ae(Zt, 2);
            {
              var mr = (Le) => {
                var Li = ea(", ");
                le(Le, Li);
              }, we = /* @__PURE__ */ Bn(() => zn < qt(i()).length - 1);
              wr(_r, (Le) => {
                x(we) && Le(mr);
              });
            }
            Wn(
              (Le) => {
                Xn = ia(Zt, "", Xn, Le), en(gr, x(Hn));
              },
              [() => ({ color: Gt()[x(Hn)] })]
            ), le(Yn, Ie);
          }), Wn(() => en(Kt, `${x(c).caption ?? ""}: `)), le(Mt, ye);
        }, rt = /* @__PURE__ */ Bn(() => qt(i()).length > 0);
        wr(me, (Mt) => {
          x(rt) && Mt(tn);
        });
      }
      Vt(st), Wn((Mt) => en(K, `${x(C).config.contest ?? ""}, ${Mt ?? ""} ${x(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [dt]), le(y, z);
    };
    wr(Fi, (y) => {
      f() && y(Xr);
    });
  }
  Vt(De);
  var Qe = ae(De, 2), dn = Yt(Qe), Oi = Yt(dn, !0);
  Vt(dn);
  var Br = ae(dn, 2);
  Wi(Br, 17, () => x(b), Bi, (y, z) => {
    var Z = Ed(), K = pn(Z), st = Yt(K, !0);
    Vt(K), Qi(2), Wn(() => en(st, x(z))), le(y, Z);
  }), Vt(Qe), ri(Qe, (y) => ot(p, y), () => x(p));
  var vr = ae(Qe, 2), Ii = Yt(vr);
  return Qi(2), Vt(vr), ri(vr, (y) => ot(g, y), () => x(g)), Wn(
    (y) => {
      en(Je, D[x(Rt)]), en(Oi, x(m)), en(Ii, `"${y ?? ""}" means all the candidates ranked on `);
    },
    [ge]
  ), le(t, kt), As(fn);
}
_u(["click"]);
customElements.define("pie-chart", Co(
  Td,
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
