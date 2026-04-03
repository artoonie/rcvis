var Pl = Object.defineProperty;
var sa = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, n) => t in e ? Pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => Dl(e, typeof t != "symbol" ? t + "" : t, n), Zi = (e, t, n) => t.has(e) || sa("Cannot " + n);
var v = (e, t, n) => (Zi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), V = (e, t, n) => t.has(e) ? sa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), L = (e, t, n, r) => (Zi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ae = (e, t, n) => (Zi(e, t, "access private method"), n);
var qa;
typeof window < "u" && ((qa = window.__svelte ?? (window.__svelte = {})).v ?? (qa.v = /* @__PURE__ */ new Set())).add("5");
const Il = 1, Fl = 2, za = 4, Ol = 8, Ll = 16, ql = 1, Vl = 4, Hl = 8, Yl = 16, zl = 1, Bl = 2, Cs = "[", Di = "[!", Ss = "]", fr = {}, Ce = Symbol(), Ba = "http://www.w3.org/1999/xhtml", ss = !1;
var Xa = Array.isArray, Xl = Array.prototype.indexOf, cr = Array.prototype.includes, Ii = Array.from, xi = Object.keys, bi = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Wl = Object.getOwnPropertyDescriptors, Ul = Object.prototype, Gl = Array.prototype, Wa = Object.getPrototypeOf, aa = Object.isExtensible;
const Kl = () => {
};
function jl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ua() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function Jl(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ne = 2, Fr = 4, Fi = 8, Ga = 1 << 24, ln = 16, Tt = 32, xn = 64, Ka = 128, pt = 512, Te = 1024, ke = 2048, Et = 4096, rt = 8192, rn = 16384, yr = 32768, hr = 65536, oa = 1 << 17, ja = 1 << 18, Gn = 1 << 19, Zl = 1 << 20, tn = 1 << 25, Bn = 65536, as = 1 << 21, Ns = 1 << 22, gn = 1 << 23, Pr = Symbol("$state"), Ja = Symbol("legacy props"), Ql = Symbol(""), Sn = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Va;
const eu = ((Va = globalThis.document) == null ? void 0 : /* @__PURE__ */ Va.contentType.includes("xml")) ?? !1, Ur = 3, wr = 8;
function tu(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function nu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ru(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function iu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function su() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function au(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ou() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function lu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function uu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function fu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function du() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Oi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function pu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let G = !1;
function nn(e) {
  G = e;
}
let X;
function He(e) {
  if (e === null)
    throw Oi(), fr;
  return X = e;
}
function Li() {
  return He(/* @__PURE__ */ Ot(X));
}
function qe(e) {
  if (G) {
    if (/* @__PURE__ */ Ot(X) !== null)
      throw Oi(), fr;
    X = e;
  }
}
function os(e = 1) {
  if (G) {
    for (var t = e, n = X; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(n);
    X = n;
  }
}
function $i(e = !0) {
  for (var t = 0, n = X; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ss) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Cs || r === Di || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(n)
    );
    e && n.remove(), n = i;
  }
}
function Za(e) {
  if (!e || e.nodeType !== wr)
    throw Oi(), fr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Qa(e) {
  return e === this.v;
}
function vu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function eo(e) {
  return !vu(e, this.v);
}
let gu = !1, st = null;
function dr(e) {
  st = e;
}
function qi(e, t = !1, n) {
  st = {
    p: st,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Vi(e) {
  var t = (
    /** @type {ComponentContext} */
    st
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      To(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, st = t.p, e ?? /** @type {T} */
  {};
}
function to() {
  return !0;
}
let Nn = [];
function no() {
  var e = Nn;
  Nn = [], jl(e);
}
function _n(e) {
  if (Nn.length === 0 && !Dr) {
    var t = Nn;
    queueMicrotask(() => {
      t === Nn && no();
    });
  }
  Nn.push(e);
}
function _u() {
  for (; Nn.length > 0; )
    no();
}
function ro(e) {
  var t = j;
  if (t === null)
    return B.f |= gn, e;
  if ((t.f & yr) === 0 && (t.f & Fr) === 0)
    throw e;
  pr(e, t);
}
function pr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ka) !== 0) {
      if ((t.f & yr) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const mu = -7169;
function pe(e, t) {
  e.f = e.f & mu | t;
}
function ks(e) {
  (e.f & pt) !== 0 || e.deps === null ? pe(e, Te) : pe(e, Et);
}
function io(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ne) === 0 || (t.f & Bn) === 0 || (t.f ^= Bn, io(
        /** @type {Derived} */
        t.deps
      ));
}
function so(e, t, n) {
  (e.f & ke) !== 0 ? t.add(e) : (e.f & Et) !== 0 && n.add(e), io(e.deps), pe(e, Te);
}
const ti = /* @__PURE__ */ new Set();
let U = null, Se = null, je = [], Hi = null, ls = !1, Dr = !1;
var rr, ir, Dn, sr, Yr, zr, In, jt, ar, Ft, us, fs, ao;
const Ks = class Ks {
  constructor() {
    V(this, Ft);
    he(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    he(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    he(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    V(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    V(this, ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    V(this, Dn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    V(this, sr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    V(this, Yr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    V(this, zr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    V(this, In, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    V(this, jt, /* @__PURE__ */ new Map());
    he(this, "is_fork", !1);
    V(this, ar, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, sr) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, jt).has(t) || v(this, jt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = v(this, jt).get(t);
    if (n) {
      v(this, jt).delete(t);
      for (var r of n.d)
        pe(r, ke), $t(r);
      for (r of n.m)
        pe(r, Et), $t(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    je = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      Ae(this, Ft, us).call(this, s, n, r);
    if (this.is_deferred()) {
      Ae(this, Ft, fs).call(this, r), Ae(this, Ft, fs).call(this, n);
      for (const [s, a] of v(this, jt))
        fo(s, a);
    } else {
      for (const s of v(this, rr)) s();
      v(this, rr).clear(), v(this, Dn) === 0 && Ae(this, Ft, ao).call(this), U = null, la(r), la(n), (i = v(this, Yr)) == null || i.resolve();
    }
    Se = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Ce && !this.previous.has(t) && this.previous.set(t, n), (t.f & gn) === 0 && (this.current.set(t, t.v), Se == null || Se.set(t, t.v));
  }
  activate() {
    U = this, this.apply();
  }
  deactivate() {
    U === this && (U = null, Se = null);
  }
  flush() {
    if (this.activate(), je.length > 0) {
      if (oo(), U !== null && U !== this)
        return;
    } else v(this, Dn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, ir)) t(this);
    v(this, ir).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    L(this, Dn, v(this, Dn) + 1), t && L(this, sr, v(this, sr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    L(this, Dn, v(this, Dn) - 1), t && L(this, sr, v(this, sr) - 1), !v(this, ar) && (L(this, ar, !0), _n(() => {
      L(this, ar, !1), this.is_deferred() ? je.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, zr))
      v(this, In).delete(t), pe(t, ke), $t(t);
    for (const t of v(this, In))
      pe(t, Et), $t(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, rr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, ir).add(t);
  }
  settled() {
    return (v(this, Yr) ?? L(this, Yr, Ua())).promise;
  }
  static ensure() {
    if (U === null) {
      const t = U = new Ks();
      ti.add(U), Dr || _n(() => {
        U === t && t.flush();
      });
    }
    return U;
  }
  apply() {
  }
};
rr = new WeakMap(), ir = new WeakMap(), Dn = new WeakMap(), sr = new WeakMap(), Yr = new WeakMap(), zr = new WeakMap(), In = new WeakMap(), jt = new WeakMap(), ar = new WeakMap(), Ft = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
us = function(t, n, r) {
  t.f ^= Te;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Tt | xn)) !== 0, l = o && (a & Te) !== 0, u = l || (a & rt) !== 0 || v(this, jt).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Te : s !== null && (a & (Fr | Fi | Ga)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Gr(i) && ((a & ln) !== 0 && v(this, In).add(i), gr(i));
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
fs = function(t) {
  for (var n = 0; n < t.length; n += 1)
    so(t[n], v(this, zr), v(this, In));
}, ao = function() {
  var i;
  if (ti.size > 1) {
    this.previous.clear();
    var t = Se, n = !0;
    for (const s of ti) {
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
        var r = je;
        je = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          lo(f, o, l, u);
        if (je.length > 0) {
          U = s, s.apply();
          for (const f of je)
            Ae(i = s, Ft, us).call(i, f, [], []);
          s.deactivate();
        }
        je = r;
      }
    }
    U = null, Se = t;
  }
  this.committed = !0, ti.delete(this);
};
let sn = Ks;
function se(e) {
  var t = Dr;
  Dr = !0;
  try {
    for (var n; ; ) {
      if (_u(), je.length === 0 && (U == null || U.flush(), je.length === 0))
        return Hi = null, /** @type {T} */
        n;
      oo();
    }
  } finally {
    Dr = t;
  }
}
function oo() {
  ls = !0;
  var e = null;
  try {
    for (var t = 0; je.length > 0; ) {
      var n = sn.ensure();
      if (t++ > 1e3) {
        var r, i;
        yu();
      }
      n.process(je), mn.clear();
    }
  } finally {
    je = [], ls = !1, Hi = null;
  }
}
function yu() {
  try {
    ou();
  } catch (e) {
    pr(e, Hi);
  }
}
let wt = null;
function la(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (rn | rt)) === 0 && Gr(r) && (wt = /* @__PURE__ */ new Set(), gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && So(r), (wt == null ? void 0 : wt.size) > 0)) {
        mn.clear();
        for (const i of wt) {
          if ((i.f & (rn | rt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            wt.has(a) && (wt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (rn | rt)) === 0 && gr(l);
          }
        }
        wt.clear();
      }
    }
    wt = null;
  }
}
function lo(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Ne) !== 0 ? lo(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Ns | ln)) !== 0 && (s & ke) === 0 && uo(i, t, r) && (pe(i, ke), $t(
        /** @type {Effect} */
        i
      ));
    }
}
function uo(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (cr.call(t, i))
        return !0;
      if ((i.f & Ne) !== 0 && uo(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function $t(e) {
  for (var t = Hi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ls && t === j && (n & ln) !== 0 && (n & ja) === 0)
      return;
    if ((n & (xn | Tt)) !== 0) {
      if ((n & Te) === 0) return;
      t.f ^= Te;
    }
  }
  je.push(t);
}
function fo(e, t) {
  if (!((e.f & Tt) !== 0 && (e.f & Te) !== 0)) {
    (e.f & ke) !== 0 ? t.d.push(e) : (e.f & Et) !== 0 && t.m.push(e), pe(e, Te);
    for (var n = e.first; n !== null; )
      fo(n, t), n = n.next;
  }
}
function wu(e) {
  let t = 0, n = Xn(0), r;
  return () => {
    Ds() && (b(n), Fs(() => (t === 0 && (r = Bi(() => e(() => Ir(n)))), t += 1, () => {
      _n(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Ir(n));
      });
    })));
  };
}
var xu = hr | Gn | Ka;
function bu(e, t, n) {
  new $u(e, t, n);
}
var tt, Br, St, Fn, Nt, ct, Ge, kt, Jt, vn, On, Zt, or, Ln, lr, ur, Qt, Mi, ye, co, ho, cs, ui, fi, hs;
class $u {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    V(this, ye);
    /** @type {Boundary | null} */
    he(this, "parent");
    he(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, tt);
    /** @type {TemplateNode | null} */
    V(this, Br, G ? X : null);
    /** @type {BoundaryProps} */
    V(this, St);
    /** @type {((anchor: Node) => void)} */
    V(this, Fn);
    /** @type {Effect} */
    V(this, Nt);
    /** @type {Effect | null} */
    V(this, ct, null);
    /** @type {Effect | null} */
    V(this, Ge, null);
    /** @type {Effect | null} */
    V(this, kt, null);
    /** @type {DocumentFragment | null} */
    V(this, Jt, null);
    /** @type {TemplateNode | null} */
    V(this, vn, null);
    V(this, On, 0);
    V(this, Zt, 0);
    V(this, or, !1);
    V(this, Ln, !1);
    /** @type {Set<Effect>} */
    V(this, lr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    V(this, ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    V(this, Qt, null);
    V(this, Mi, wu(() => (L(this, Qt, Xn(v(this, On))), () => {
      L(this, Qt, null);
    })));
    L(this, tt, t), L(this, St, n), L(this, Fn, r), this.parent = /** @type {Effect} */
    j.b, this.is_pending = !!v(this, St).pending, L(this, Nt, Os(() => {
      if (j.b = this, G) {
        const s = v(this, Br);
        Li(), /** @type {Comment} */
        s.nodeType === wr && /** @type {Comment} */
        s.data === Di ? Ae(this, ye, ho).call(this) : (Ae(this, ye, co).call(this), v(this, Zt) === 0 && (this.is_pending = !1));
      } else {
        var i = Ae(this, ye, cs).call(this);
        try {
          L(this, ct, dt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, Zt) > 0 ? Ae(this, ye, fi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, vn)) == null || s.remove();
      };
    }, xu)), G && L(this, tt, X);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    so(t, v(this, lr), v(this, ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, St).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Ae(this, ye, hs).call(this, t), L(this, On, v(this, On) + t), !(!v(this, Qt) || v(this, or)) && (L(this, or, !0), _n(() => {
      L(this, or, !1), v(this, Qt) && vr(v(this, Qt), v(this, On));
    }));
  }
  get_effect_pending() {
    return v(this, Mi).call(this), b(
      /** @type {Source<number>} */
      v(this, Qt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, St).onerror;
    let r = v(this, St).failed;
    if (v(this, Ln) || !n && !r)
      throw t;
    v(this, ct) && (Ye(v(this, ct)), L(this, ct, null)), v(this, Ge) && (Ye(v(this, Ge)), L(this, Ge, null)), v(this, kt) && (Ye(v(this, kt)), L(this, kt, null)), G && (He(
      /** @type {TemplateNode} */
      v(this, Br)
    ), os(), He($i()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        pu();
        return;
      }
      i = !0, s && du(), sn.ensure(), L(this, On, 0), v(this, kt) !== null && Hn(v(this, kt), () => {
        L(this, kt, null);
      }), this.is_pending = this.has_pending_snippet(), L(this, ct, Ae(this, ye, ui).call(this, () => (L(this, Ln, !1), dt(() => v(this, Fn).call(this, v(this, tt)))))), v(this, Zt) > 0 ? Ae(this, ye, fi).call(this) : this.is_pending = !1;
    };
    _n(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        pr(o, v(this, Nt) && v(this, Nt).parent);
      }
      r && L(this, kt, Ae(this, ye, ui).call(this, () => {
        sn.ensure(), L(this, Ln, !0);
        try {
          return dt(() => {
            r(
              v(this, tt),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return pr(
            o,
            /** @type {Effect} */
            v(this, Nt).parent
          ), null;
        } finally {
          L(this, Ln, !1);
        }
      }));
    });
  }
}
tt = new WeakMap(), Br = new WeakMap(), St = new WeakMap(), Fn = new WeakMap(), Nt = new WeakMap(), ct = new WeakMap(), Ge = new WeakMap(), kt = new WeakMap(), Jt = new WeakMap(), vn = new WeakMap(), On = new WeakMap(), Zt = new WeakMap(), or = new WeakMap(), Ln = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), Qt = new WeakMap(), Mi = new WeakMap(), ye = new WeakSet(), co = function() {
  try {
    L(this, ct, dt(() => v(this, Fn).call(this, v(this, tt))));
  } catch (t) {
    this.error(t);
  }
}, ho = function() {
  const t = v(this, St).pending;
  t && (L(this, Ge, dt(() => t(v(this, tt)))), _n(() => {
    var n = Ae(this, ye, cs).call(this);
    L(this, ct, Ae(this, ye, ui).call(this, () => (sn.ensure(), dt(() => v(this, Fn).call(this, n))))), v(this, Zt) > 0 ? Ae(this, ye, fi).call(this) : (Hn(
      /** @type {Effect} */
      v(this, Ge),
      () => {
        L(this, Ge, null);
      }
    ), this.is_pending = !1);
  }));
}, cs = function() {
  var t = v(this, tt);
  return this.is_pending && (L(this, vn, it()), v(this, tt).before(v(this, vn)), t = v(this, vn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
ui = function(t) {
  var n = j, r = B, i = st;
  It(v(this, Nt)), gt(v(this, Nt)), dr(v(this, Nt).ctx);
  try {
    return t();
  } catch (s) {
    return ro(s), null;
  } finally {
    It(n), gt(r), dr(i);
  }
}, fi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, St).pending
  );
  v(this, ct) !== null && (L(this, Jt, document.createDocumentFragment()), v(this, Jt).append(
    /** @type {TemplateNode} */
    v(this, vn)
  ), Mo(v(this, ct), v(this, Jt))), v(this, Ge) === null && L(this, Ge, dt(() => t(v(this, tt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
hs = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ae(n = this.parent, ye, hs).call(n, t);
    return;
  }
  if (L(this, Zt, v(this, Zt) + t), v(this, Zt) === 0) {
    this.is_pending = !1;
    for (const r of v(this, lr))
      pe(r, ke), $t(r);
    for (const r of v(this, ur))
      pe(r, Et), $t(r);
    v(this, lr).clear(), v(this, ur).clear(), v(this, Ge) && Hn(v(this, Ge), () => {
      L(this, Ge, null);
    }), v(this, Jt) && (v(this, tt).before(v(this, Jt)), L(this, Jt, null));
  }
};
function Au(e, t, n, r) {
  const i = Yi;
  var s = e.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = U, o = (
    /** @type {Effect} */
    j
  ), l = Eu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & rn) === 0 && pr(p, o);
    }
    a == null || a.deactivate(), ds();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ Tu(c))).then((c) => f([...t.map(i), ...c])).catch((c) => pr(c, o));
  }
  u ? u.then(h) : h();
}
function Eu() {
  var e = j, t = B, n = st, r = U;
  return function(s = !0) {
    It(e), gt(t), dr(n), s && (r == null || r.activate());
  };
}
function ds() {
  It(null), gt(null), dr(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  var t = Ne | ke, n = B !== null && (B.f & Ne) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return j !== null && (j.f |= Gn), {
    ctx: st,
    deps: null,
    effects: null,
    equals: Qa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ce
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Tu(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    j
  );
  r === null && nu();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Xn(
    /** @type {V} */
    Ce
  ), o = !B, l = /* @__PURE__ */ new Map();
  return Fu(() => {
    var p;
    var u = Ua();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === U && f.committed && f.deactivate(), ds();
      });
    } catch (m) {
      u.reject(m), ds();
    }
    var f = (
      /** @type {Batch} */
      U
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = l.get(f)) == null || p.reject(Sn), l.delete(f), l.set(f, u);
    }
    const c = (m, $ = void 0) => {
      if (f.activate(), $)
        $ !== Sn && (a.f |= gn, vr(a, $));
      else {
        (a.f & gn) !== 0 && (a.f ^= gn), vr(a, m);
        for (const [_, x] of l) {
          if (l.delete(_), _ === f) break;
          x.reject(Sn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (m) => c(null, m || "unknown"));
  }), Pu(() => {
    for (const u of l.values())
      u.reject(Sn);
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
function cn(e) {
  const t = /* @__PURE__ */ Yi(e);
  return Po(t), t;
}
// @__NO_SIDE_EFFECTS__
function po(e) {
  const t = /* @__PURE__ */ Yi(e);
  return t.equals = eo, t;
}
function Ru(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ye(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Cu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ne) === 0)
      return (t.f & rn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ms(e) {
  var t, n = j;
  It(Cu(e));
  try {
    e.f &= ~Bn, Ru(e), t = Oo(e);
  } finally {
    It(n);
  }
  return t;
}
function vo(e) {
  var t = Ms(e);
  if (!e.equals(t) && (e.wv = Io(), (!(U != null && U.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    pe(e, Te);
    return;
  }
  wn || (Se !== null ? (Ds() || U != null && U.is_fork) && Se.set(e, t) : ks(e));
}
function Su(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Sn), r.teardown = Kl, r.ac = null, Or(r, 0), Ls(r));
}
function go(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && gr(t);
}
let ps = /* @__PURE__ */ new Set();
const mn = /* @__PURE__ */ new Map();
let _o = !1;
function Xn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qa,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = Xn(e);
  return Po(n), n;
}
// @__NO_SIDE_EFFECTS__
function mo(e, t = !1, n = !0) {
  const r = Xn(e);
  return t || (r.equals = eo), r;
}
function de(e, t, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!At || (B.f & oa) !== 0) && to() && (B.f & (Ne | ln | Ns | oa)) !== 0 && (vt === null || !cr.call(vt, e)) && hu();
  let r = n ? kn(t) : t;
  return vr(e, r);
}
function vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    wn ? mn.set(e, t) : mn.set(e, n), e.v = t;
    var r = sn.ensure();
    if (r.capture(e, n), (e.f & Ne) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ke) !== 0 && Ms(i), ks(i);
    }
    e.wv = Io(), yo(e, ke), j !== null && (j.f & Te) !== 0 && (j.f & (Tt | xn)) === 0 && (ft === null ? qu([e]) : ft.push(e)), !r.is_fork && ps.size > 0 && !_o && Nu();
  }
  return t;
}
function Nu() {
  _o = !1;
  for (const e of ps)
    (e.f & Te) !== 0 && pe(e, Et), Gr(e) && gr(e);
  ps.clear();
}
function Ir(e) {
  de(e, e.v + 1);
}
function yo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & ke) === 0;
      if (o && pe(s, t), (a & Ne) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Se == null || Se.delete(l), (a & Bn) === 0 && (a & pt && (s.f |= Bn), yo(l, Et));
      } else o && ((a & ln) !== 0 && wt !== null && wt.add(
        /** @type {Effect} */
        s
      ), $t(
        /** @type {Effect} */
        s
      ));
    }
}
function kn(e) {
  if (typeof e != "object" || e === null || Pr in e)
    return e;
  const t = Wa(e);
  if (t !== Ul && t !== Gl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Xa(e), i = /* @__PURE__ */ Ee(0), s = Yn, a = (o) => {
    if (Yn === s)
      return o();
    var l = B, u = Yn;
    gt(null), ca(s);
    var f = o();
    return gt(l), ca(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ Ee(u.value);
          return n.set(l, h), h;
        }) : de(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ Ee(Ce));
            n.set(l, f), Ir(i);
          }
        } else
          de(u, Ce), Ir(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Pr)
          return e;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Vn(o, l)) != null && p.writable) && (f = a(() => {
          var m = kn(h ? o[l] : Ce), $ = /* @__PURE__ */ Ee(m);
          return $;
        }), n.set(l, f)), f !== void 0) {
          var c = b(f);
          return c === Ce ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = b(f));
        } else if (u === void 0) {
          var h = n.get(l), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== Ce)
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
        if (l === Pr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Ce || Reflect.has(o, l);
        if (u !== void 0 || j !== null && (!f || (c = Vn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? kn(o[l]) : Ce, m = /* @__PURE__ */ Ee(p);
            return m;
          }), n.set(l, u));
          var h = b(u);
          if (h === Ce)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var S;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var m = n.get(p + "");
            m !== void 0 ? de(m, Ce) : p in o && (m = a(() => /* @__PURE__ */ Ee(Ce)), n.set(p + "", m));
          }
        if (h === void 0)
          (!c || (S = Vn(o, l)) != null && S.writable) && (h = a(() => /* @__PURE__ */ Ee(void 0)), de(h, kn(u)), n.set(l, h));
        else {
          c = h.v !== Ce;
          var $ = a(() => kn(u));
          de(h, $);
        }
        var _ = Reflect.getOwnPropertyDescriptor(o, l);
        if (_ != null && _.set && _.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(l);
            Number.isInteger(F) && F >= x.v && de(x, F + 1);
          }
          Ir(i);
        }
        return !0;
      },
      ownKeys(o) {
        b(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== Ce;
        });
        for (var [u, f] of n)
          f.v !== Ce && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        cu();
      }
    }
  );
}
var ua, wo, xo, bo;
function vs() {
  if (ua === void 0) {
    ua = window, wo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xo = Vn(t, "firstChild").get, bo = Vn(t, "nextSibling").get, aa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), aa(n) && (n.__t = void 0);
  }
}
function it(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return (
    /** @type {TemplateNode | null} */
    xo.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return (
    /** @type {TemplateNode | null} */
    bo.call(e)
  );
}
function Ue(e, t) {
  if (!G)
    return /* @__PURE__ */ an(e);
  var n = /* @__PURE__ */ an(X);
  if (n === null)
    n = X.appendChild(it());
  else if (t && n.nodeType !== Ur) {
    var r = it();
    return n == null || n.before(r), He(r), r;
  }
  return t && zi(
    /** @type {Text} */
    n
  ), He(n), n;
}
function dn(e, t = !1) {
  if (!G) {
    var n = /* @__PURE__ */ an(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ot(n) : n;
  }
  if (t) {
    if ((X == null ? void 0 : X.nodeType) !== Ur) {
      var r = it();
      return X == null || X.before(r), He(r), r;
    }
    zi(
      /** @type {Text} */
      X
    );
  }
  return X;
}
function Qe(e, t = 1, n = !1) {
  let r = G ? X : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ot(r);
  if (!G)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ur) {
      var s = it();
      return r === null ? i == null || i.after(s) : r.before(s), He(s), s;
    }
    zi(
      /** @type {Text} */
      r
    );
  }
  return He(r), r;
}
function $o(e) {
  e.textContent = "";
}
function Ao() {
  return !1;
}
function Ps(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ba, e, void 0)
  );
}
function zi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Ur; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Eo(e) {
  var t = B, n = j;
  gt(null), It(null);
  try {
    return e();
  } finally {
    gt(t), It(n);
  }
}
function ku(e) {
  j === null && (B === null && au(), su()), wn && iu();
}
function Mu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lt(e, t, n) {
  var r = j;
  r !== null && (r.f & rt) !== 0 && (e |= rt);
  var i = {
    ctx: st,
    deps: null,
    nodes: null,
    f: e | ke | pt,
    first: null,
    fn: t,
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
      gr(i);
    } catch (o) {
      throw Ye(i), o;
    }
  else t !== null && $t(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Gn) === 0 && (s = s.first, (e & ln) !== 0 && (e & hr) !== 0 && s !== null && (s.f |= hr)), s !== null && (s.parent = r, r !== null && Mu(s, r), B !== null && (B.f & Ne) !== 0 && (e & xn) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ds() {
  return B !== null && !At;
}
function Pu(e) {
  const t = Lt(Fi, null, !1);
  return pe(t, Te), t.teardown = e, t;
}
function Is(e) {
  ku();
  var t = (
    /** @type {Effect} */
    j.f
  ), n = !B && (t & Tt) !== 0 && (t & yr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return To(e);
}
function To(e) {
  return Lt(Fr | Zl, e, !1);
}
function Du(e) {
  sn.ensure();
  const t = Lt(xn | Gn, e, !0);
  return () => {
    Ye(t);
  };
}
function Iu(e) {
  sn.ensure();
  const t = Lt(xn | Gn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hn(t, () => {
      Ye(t), r(void 0);
    }) : (Ye(t), r(void 0));
  });
}
function Ro(e) {
  return Lt(Fr, e, !1);
}
function Fu(e) {
  return Lt(Ns | Gn, e, !0);
}
function Fs(e, t = 0) {
  return Lt(Fi | t, e, !0);
}
function Kt(e, t = [], n = [], r = []) {
  Au(r, t, n, (i) => {
    Lt(Fi, () => e(...i.map(b)), !0);
  });
}
function Os(e, t = 0) {
  var n = Lt(ln | t, e, !0);
  return n;
}
function dt(e) {
  return Lt(Tt | Gn, e, !0);
}
function Co(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = wn, r = B;
    fa(!0), gt(null);
    try {
      t.call(null);
    } finally {
      fa(n), gt(r);
    }
  }
}
function Ls(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Eo(() => {
      i.abort(Sn);
    });
    var r = n.next;
    (n.f & xn) !== 0 ? n.parent = null : Ye(n, t), n = r;
  }
}
function Ou(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Tt) === 0 && Ye(t), t = n;
  }
}
function Ye(e, t = !0) {
  var n = !1;
  (t || (e.f & ja) !== 0) && e.nodes !== null && e.nodes.end !== null && (Lu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Ls(e, t && !n), Or(e, 0), pe(e, rn);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Co(e);
  var i = e.parent;
  i !== null && i.first !== null && So(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Lu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ot(e);
    e.remove(), e = n;
  }
}
function So(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hn(e, t, n = !0) {
  var r = [];
  No(e, r, !0);
  var i = () => {
    n && Ye(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function No(e, t, n) {
  if ((e.f & rt) === 0) {
    e.f ^= rt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Tt) !== 0 && (e.f & ln) !== 0;
      No(i, t, a ? n : !1), i = s;
    }
  }
}
function qs(e) {
  ko(e, !0);
}
function ko(e, t) {
  if ((e.f & rt) !== 0) {
    e.f ^= rt, (e.f & Te) === 0 && (pe(e, ke), $t(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & Tt) !== 0;
      ko(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Mo(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ot(n);
      t.append(n), n = i;
    }
}
let ci = !1, wn = !1;
function fa(e) {
  wn = e;
}
let B = null, At = !1;
function gt(e) {
  B = e;
}
let j = null;
function It(e) {
  j = e;
}
let vt = null;
function Po(e) {
  B !== null && (vt === null ? vt = [e] : vt.push(e));
}
let Je = null, et = 0, ft = null;
function qu(e) {
  ft = e;
}
let Do = 1, Mn = 0, Yn = Mn;
function ca(e) {
  Yn = e;
}
function Io() {
  return ++Do;
}
function Gr(e) {
  var t = e.f;
  if ((t & ke) !== 0)
    return !0;
  if (t & Ne && (e.f &= ~Bn), (t & Et) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gr(
        /** @type {Derived} */
        s
      ) && vo(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & pt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Se === null && pe(e, Te);
  }
  return !1;
}
function Fo(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(vt !== null && cr.call(vt, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Ne) !== 0 ? Fo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? pe(s, ke) : (s.f & Te) !== 0 && pe(s, Et), $t(
        /** @type {Effect} */
        s
      ));
    }
}
function Oo(e) {
  var $;
  var t = Je, n = et, r = ft, i = B, s = vt, a = st, o = At, l = Yn, u = e.f;
  Je = /** @type {null | Value[]} */
  null, et = 0, ft = null, B = (u & (Tt | xn)) === 0 ? e : null, vt = null, dr(e.ctx), At = !1, Yn = ++Mn, e.ac !== null && (Eo(() => {
    e.ac.abort(Sn);
  }), e.ac = null);
  try {
    e.f |= as;
    var f = (
      /** @type {Function} */
      e.fn
    ), h = f();
    e.f |= yr;
    var c = e.deps, p = U == null ? void 0 : U.is_fork;
    if (Je !== null) {
      var m;
      if (p || Or(e, et), c !== null && et > 0)
        for (c.length = et + Je.length, m = 0; m < Je.length; m++)
          c[et + m] = Je[m];
      else
        e.deps = c = Je;
      if (Ds() && (e.f & pt) !== 0)
        for (m = et; m < c.length; m++)
          (($ = c[m]).reactions ?? ($.reactions = [])).push(e);
    } else !p && c !== null && et < c.length && (Or(e, et), c.length = et);
    if (to() && ft !== null && !At && c !== null && (e.f & (Ne | Et | ke)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      ft.length; m++)
        Fo(
          ft[m],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Mn++, i.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          i.deps[_].rv = Mn;
      if (t !== null)
        for (const _ of t)
          _.rv = Mn;
      ft !== null && (r === null ? r = ft : r.push(.../** @type {Source[]} */
      ft));
    }
    return (e.f & gn) !== 0 && (e.f ^= gn), h;
  } catch (_) {
    return ro(_);
  } finally {
    e.f ^= as, Je = t, et = n, ft = r, B = i, vt = s, dr(a), At = o, Yn = l;
  }
}
function Vu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xl.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Je === null || !cr.call(Je, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & pt) !== 0 && (s.f ^= pt, s.f &= ~Bn), ks(s), Su(s), Or(s, 0);
  }
}
function Or(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Vu(e, n[r]);
}
function gr(e) {
  var t = e.f;
  if ((t & rn) === 0) {
    pe(e, Te);
    var n = j, r = ci;
    j = e, ci = !0;
    try {
      (t & (ln | Ga)) !== 0 ? Ou(e) : Ls(e), Co(e);
      var i = Oo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Do;
      var s;
      ss && gu && (e.f & ke) !== 0 && e.deps;
    } finally {
      ci = r, j = n;
    }
  }
}
function b(e) {
  var t = e.f, n = (t & Ne) !== 0;
  if (B !== null && !At) {
    var r = j !== null && (j.f & rn) !== 0;
    if (!r && (vt === null || !cr.call(vt, e))) {
      var i = B.deps;
      if ((B.f & as) !== 0)
        e.rv < Mn && (e.rv = Mn, Je === null && i !== null && i[et] === e ? et++ : Je === null ? Je = [e] : Je.push(e));
      else {
        (B.deps ?? (B.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [B] : cr.call(s, B) || s.push(B);
      }
    }
  }
  if (wn && mn.has(e))
    return mn.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (wn) {
      var o = a.v;
      return ((a.f & Te) === 0 && a.reactions !== null || qo(a)) && (o = Ms(a)), mn.set(a, o), o;
    }
    var l = (a.f & pt) === 0 && !At && B !== null && (ci || (B.f & pt) !== 0), u = (a.f & yr) === 0;
    Gr(a) && (l && (a.f |= pt), vo(a)), l && !u && (go(a), Lo(a));
  }
  if (Se != null && Se.has(e))
    return Se.get(e);
  if ((e.f & gn) !== 0)
    throw e.v;
  return e.v;
}
function Lo(e) {
  if (e.f |= pt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ne) !== 0 && (t.f & pt) === 0 && (go(
        /** @type {Derived} */
        t
      ), Lo(
        /** @type {Derived} */
        t
      ));
}
function qo(e) {
  if (e.v === Ce) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (mn.has(t) || (t.f & Ne) !== 0 && qo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Bi(e) {
  var t = At;
  try {
    return At = !0, e();
  } finally {
    At = t;
  }
}
const Vo = /* @__PURE__ */ new Set(), gs = /* @__PURE__ */ new Set();
function Hu(e) {
  for (var t = 0; t < e.length; t++)
    Vo.add(e[t]);
  for (var n of gs)
    n(e);
}
let ha = null;
function da(e) {
  var _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ha = e;
  var a = 0, o = ha === e && e.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    bi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = B, h = j;
    gt(null), It(null);
    try {
      for (var c, p = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var $ = s["__" + r];
          $ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && $.call(s, e);
        } catch (x) {
          c ? p.push(x) : c = x;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        s = m;
      }
      if (c) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, gt(f), It(h);
    }
  }
}
var Ha, Ya;
const Qi = (Ya = (Ha = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ha.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ya.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (e) => e
  }
);
function Yu(e) {
  return (
    /** @type {string} */
    (Qi == null ? void 0 : Qi.createHTML(e)) ?? e
  );
}
function Ho(e, t = !1) {
  var n = Ps("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? Yu(e) : e, n.content;
}
function yn(e, t) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  var n = (t & zl) !== 0, r = (t & Bl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (G)
      return yn(X, null), X;
    i === void 0 && (i = Ho(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ an(i)));
    var a = (
      /** @type {TemplateNode} */
      r || wo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ an(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      yn(o, l);
    } else
      yn(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function zu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (G)
      return yn(X, null), X;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ho(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ an(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ an(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return yn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Bu(e, t) {
  return /* @__PURE__ */ zu(e, t, "svg");
}
function pa(e = "") {
  if (!G) {
    var t = it(e + "");
    return yn(t, t), t;
  }
  var n = X;
  return n.nodeType !== Ur ? (n.before(n = it()), He(n)) : zi(
    /** @type {Text} */
    n
  ), yn(n, n), n;
}
function Ke(e, t) {
  if (G) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((n.f & yr) === 0 || n.nodes.end === null) && (n.nodes.end = X), Li();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Xu = ["touchstart", "touchmove"];
function Wu(e) {
  return Xu.includes(e);
}
function pn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Yo(e, t) {
  return zo(e, t);
}
function Uu(e, t) {
  vs(), t.intro = t.intro ?? !1;
  const n = t.target, r = G, i = X;
  try {
    for (var s = /* @__PURE__ */ an(n); s && (s.nodeType !== wr || /** @type {Comment} */
    s.data !== Cs); )
      s = /* @__PURE__ */ Ot(s);
    if (!s)
      throw fr;
    nn(!0), He(
      /** @type {Comment} */
      s
    );
    const a = zo(e, { ...t, anchor: s });
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== fr && console.warn("Failed to hydrate: ", a), t.recover === !1 && lu(), vs(), $o(n), nn(!1), Yo(e, t);
  } finally {
    nn(r), He(i);
  }
}
const ni = /* @__PURE__ */ new Map();
function zo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  vs();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var m = Wu(p);
        for (const x of [t, document]) {
          var $ = ni.get(x);
          $ === void 0 && ($ = /* @__PURE__ */ new Map(), ni.set(x, $));
          var _ = $.get(p);
          _ === void 0 ? (x.addEventListener(p, da, { passive: m }), $.set(p, 1)) : $.set(p, _ + 1);
        }
      }
    }
  };
  l(Ii(Vo)), gs.add(l);
  var u = void 0, f = Iu(() => {
    var h = n ?? t.appendChild(it());
    return bu(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        qi({});
        var p = (
          /** @type {ComponentContext} */
          st
        );
        if (s && (p.c = s), i && (r.$$events = i), G && yn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, G && (j.nodes.end = X, X === null || X.nodeType !== wr || /** @type {Comment} */
        X.data !== Ss))
          throw Oi(), fr;
        Vi();
      }
    ), () => {
      var $;
      for (var c of o)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ni.get(_)
          ), m = (
            /** @type {number} */
            p.get(c)
          );
          --m == 0 ? (_.removeEventListener(c, da), p.delete(c), p.size === 0 && ni.delete(_)) : p.set(c, m);
        }
      gs.delete(l), h !== n && (($ = h.parentNode) == null || $.removeChild(h));
    };
  });
  return _s.set(u, f), u;
}
let _s = /* @__PURE__ */ new WeakMap();
function Gu(e, t) {
  const n = _s.get(e);
  return n ? (_s.delete(e), n(t)) : Promise.resolve();
}
var xt, Mt, nt, qn, Xr, Wr, Pi;
class Ku {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    he(this, "anchor");
    /** @type {Map<Batch, Key>} */
    V(this, xt, /* @__PURE__ */ new Map());
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
    V(this, Mt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    V(this, nt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    V(this, qn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    V(this, Xr, !0);
    V(this, Wr, () => {
      var t = (
        /** @type {Batch} */
        U
      );
      if (v(this, xt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, xt).get(t)
        ), r = v(this, Mt).get(n);
        if (r)
          qs(r), v(this, qn).delete(n);
        else {
          var i = v(this, nt).get(n);
          i && (v(this, Mt).set(n, i.effect), v(this, nt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, xt)) {
          if (v(this, xt).delete(s), s === t)
            break;
          const o = v(this, nt).get(a);
          o && (Ye(o.effect), v(this, nt).delete(a));
        }
        for (const [s, a] of v(this, Mt)) {
          if (s === n || v(this, qn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, xt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Mo(a, u), u.append(it()), v(this, nt).set(s, { effect: a, fragment: u });
            } else
              Ye(a);
            v(this, qn).delete(s), v(this, Mt).delete(s);
          };
          v(this, Xr) || !r ? (v(this, qn).add(s), Hn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    V(this, Pi, (t) => {
      v(this, xt).delete(t);
      const n = Array.from(v(this, xt).values());
      for (const [r, i] of v(this, nt))
        n.includes(r) || (Ye(i.effect), v(this, nt).delete(r));
    });
    this.anchor = t, L(this, Xr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      U
    ), i = Ao();
    if (n && !v(this, Mt).has(t) && !v(this, nt).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = it();
        s.append(a), v(this, nt).set(t, {
          effect: dt(() => n(a)),
          fragment: s
        });
      } else
        v(this, Mt).set(
          t,
          dt(() => n(this.anchor))
        );
    if (v(this, xt).set(r, t), i) {
      for (const [o, l] of v(this, Mt))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, nt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Wr)), r.ondiscard(v(this, Pi));
    } else
      G && (this.anchor = X), v(this, Wr).call(this);
  }
}
xt = new WeakMap(), Mt = new WeakMap(), nt = new WeakMap(), qn = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), Pi = new WeakMap();
function ju(e) {
  st === null && tu(), Is(() => {
    const t = Bi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function er(e, t, n = !1) {
  G && Li();
  var r = new Ku(e), i = n ? hr : 0;
  function s(a, o) {
    if (G) {
      const f = Za(e);
      var l;
      if (f === Cs ? l = 0 : f === Di ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = $i();
        He(u), r.anchor = u, nn(!1), r.ensure(a, o), nn(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Os(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function hi(e, t) {
  return t;
}
function Ju(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let h = t[o];
    Hn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ms(Ii(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
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
      $o(f), f.append(u), e.items.clear();
    }
    ms(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ms(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ye(e[n], t);
}
var va;
function di(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & za) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = G ? He(/* @__PURE__ */ an(u)) : u.appendChild(it());
  }
  G && Li();
  var f = null, h = /* @__PURE__ */ po(() => {
    var x = n();
    return Xa(x) ? x : x == null ? [] : Ii(x);
  }), c, p = !0;
  function m() {
    _.fallback = f, Zu(_, c, a, t, r), f !== null && (c.length === 0 ? (f.f & tn) === 0 ? qs(f) : (f.f ^= tn, Sr(f, null, a)) : Hn(f, () => {
      f = null;
    }));
  }
  var $ = Os(() => {
    c = /** @type {V[]} */
    b(h);
    var x = c.length;
    let F = !1;
    if (G) {
      var S = Za(a) === Di;
      S !== (x === 0) && (a = $i(), He(a), nn(!1), F = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), D = (
      /** @type {Batch} */
      U
    ), W = Ao(), K = 0; K < x; K += 1) {
      G && X.nodeType === wr && /** @type {Comment} */
      X.data === Ss && (a = /** @type {Comment} */
      X, F = !0, nn(!1));
      var Q = c[K], ee = r(Q, K), J = p ? null : o.get(ee);
      J ? (J.v && vr(J.v, Q), J.i && vr(J.i, K), W && D.unskip_effect(J.e)) : (J = Qu(
        o,
        p ? a : va ?? (va = it()),
        Q,
        ee,
        K,
        i,
        t,
        n
      ), p || (J.e.f |= tn), o.set(ee, J)), M.add(ee);
    }
    if (x === 0 && s && !f && (p ? f = dt(() => s(a)) : (f = dt(() => s(va ?? (va = it()))), f.f |= tn)), x > M.size && ru(), G && x > 0 && He($i()), !p)
      if (W) {
        for (const [ae, oe] of o)
          M.has(ae) || D.skip_effect(oe.e);
        D.oncommit(m), D.ondiscard(() => {
        });
      } else
        m();
    F && nn(!0), b(h);
  }), _ = { effect: $, items: o, outrogroups: null, fallback: f };
  p = !1, G && (a = X);
}
function Rr(e) {
  for (; e !== null && (e.f & Tt) === 0; )
    e = e.next;
  return e;
}
function Zu(e, t, n, r, i) {
  var J, ae, oe, N, H, Ie, Me, xe, ce;
  var s = (r & Ol) !== 0, a = t.length, o = e.items, l = Rr(e.effect.first), u, f = null, h, c = [], p = [], m, $, _, x;
  if (s)
    for (x = 0; x < a; x += 1)
      m = t[x], $ = i(m, x), _ = /** @type {EachItem} */
      o.get($).e, (_.f & tn) === 0 && ((ae = (J = _.nodes) == null ? void 0 : J.a) == null || ae.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(_));
  for (x = 0; x < a; x += 1) {
    if (m = t[x], $ = i(m, x), _ = /** @type {EachItem} */
    o.get($).e, e.outrogroups !== null)
      for (const le of e.outrogroups)
        le.pending.delete(_), le.done.delete(_);
    if ((_.f & tn) !== 0)
      if (_.f ^= tn, _ === l)
        Sr(_, null, n);
      else {
        var F = f ? f.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), hn(e, f, _), hn(e, _, F), Sr(_, F, n), f = _, c = [], p = [], l = Rr(f.next);
        continue;
      }
    if ((_.f & rt) !== 0 && (qs(_), s && ((N = (oe = _.nodes) == null ? void 0 : oe.a) == null || N.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(_))), _ !== l) {
      if (u !== void 0 && u.has(_)) {
        if (c.length < p.length) {
          var S = p[0], M;
          f = S.prev;
          var D = c[0], W = c[c.length - 1];
          for (M = 0; M < c.length; M += 1)
            Sr(c[M], S, n);
          for (M = 0; M < p.length; M += 1)
            u.delete(p[M]);
          hn(e, D.prev, W.next), hn(e, f, D), hn(e, W, S), l = S, f = W, x -= 1, c = [], p = [];
        } else
          u.delete(_), Sr(_, l, n), hn(e, _.prev, _.next), hn(e, _, f === null ? e.effect.first : f.next), hn(e, f, _), f = _;
        continue;
      }
      for (c = [], p = []; l !== null && l !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), p.push(l), l = Rr(l.next);
      if (l === null)
        continue;
    }
    (_.f & tn) === 0 && c.push(_), f = _, l = Rr(_.next);
  }
  if (e.outrogroups !== null) {
    for (const le of e.outrogroups)
      le.pending.size === 0 && (ms(Ii(le.done)), (H = e.outrogroups) == null || H.delete(le));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var K = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & rt) === 0 && K.push(_);
    for (; l !== null; )
      (l.f & rt) === 0 && l !== e.fallback && K.push(l), l = Rr(l.next);
    var Q = K.length;
    if (Q > 0) {
      var ee = (r & za) !== 0 && a === 0 ? n : null;
      if (s) {
        for (x = 0; x < Q; x += 1)
          (Me = (Ie = K[x].nodes) == null ? void 0 : Ie.a) == null || Me.measure();
        for (x = 0; x < Q; x += 1)
          (ce = (xe = K[x].nodes) == null ? void 0 : xe.a) == null || ce.fix();
      }
      Ju(e, K, ee);
    }
  }
  s && _n(() => {
    var le, z;
    if (h !== void 0)
      for (_ of h)
        (z = (le = _.nodes) == null ? void 0 : le.a) == null || z.apply();
  });
}
function Qu(e, t, n, r, i, s, a, o) {
  var l = (a & Il) !== 0 ? (a & Ll) === 0 ? /* @__PURE__ */ mo(n, !1, !1) : Xn(n) : null, u = (a & Fl) !== 0 ? Xn(i) : null;
  return {
    v: l,
    i: u,
    e: dt(() => (s(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Sr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & tn) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ot(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function hn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Vs(e, t) {
  Ro(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const i = Ps("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const ga = [...` 	
\r\f \v\uFEFF`];
function ef(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ga.includes(r[a - 1])) && (o === r.length || ga.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function _a(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function tf(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += _a(r)), i && (n += _a(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function ri(e, t, n, r, i, s) {
  var a = e.__className;
  if (G || a !== n || a === void 0) {
    var o = ef(n, r, s);
    (!G || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function es(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function ma(e, t, n, r) {
  var i = e.__style;
  if (G || i !== t) {
    var s = tf(t, r);
    (!G || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (es(e, n == null ? void 0 : n[0], r[0]), es(e, n == null ? void 0 : n[1], r[1], "important")) : es(e, n, r));
  return r;
}
const nf = Symbol("is custom element"), rf = Symbol("is html"), sf = eu ? "link" : "LINK";
function ya(e, t, n, r) {
  var i = af(e);
  G && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === sf) || i[t] !== (i[t] = n) && (t === "loading" && (e[Ql] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && of(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function af(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [nf]: e.nodeName.includes("-"),
      [rf]: e.namespaceURI === Ba
    })
  );
}
var wa = /* @__PURE__ */ new Map();
function of(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wa.get(t);
  if (n) return n;
  wa.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Wl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Wa(i);
  }
  return n;
}
function xa(e, t) {
  return e === t || (e == null ? void 0 : e[Pr]) === t;
}
function pi(e = {}, t, n, r) {
  return Ro(() => {
    var i, s;
    return Fs(() => {
      i = s, s = [], Bi(() => {
        e !== n(...s) && (t(e, ...s), i && xa(n(...i), e) && t(null, ...i));
      });
    }), () => {
      _n(() => {
        s && xa(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let ii = !1;
function lf(e) {
  var t = ii;
  try {
    return ii = !1, [e(), ii];
  } finally {
    ii = t;
  }
}
function fe(e, t, n, r) {
  var F;
  var i = (n & Hl) !== 0, s = (n & Yl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Bi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Pr in e || Ja in e;
    u = ((F = Vn(e, t)) == null ? void 0 : F.set) ?? (f && t in e ? (S) => e[t] = S : void 0);
  }
  var h, c = !1;
  i ? [h, c] = lf(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = l(), u && (uu(), u(h)));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? l() : (o = !0, S);
  }, (n & Vl) === 0)
    return p;
  if (u) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, M) {
        return arguments.length > 0 ? ((!M || m || c) && u(M ? p() : S), S) : p();
      })
    );
  }
  var $ = !1, _ = ((n & ql) !== 0 ? Yi : po)(() => ($ = !1, p()));
  i && b(_);
  var x = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(S, M) {
      if (arguments.length > 0) {
        const D = M ? b(_) : i ? kn(S) : S;
        return de(_, D), $ = !0, a !== void 0 && (a = D), S;
      }
      return wn && $ || (x.f & rn) !== 0 ? _.v : b(_);
    })
  );
}
function uf(e) {
  return new ff(e);
}
var en, ht;
class ff {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    V(this, en);
    /** @type {Record<string, any>} */
    V(this, ht);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ mo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return b(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ja ? !0 : (b(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return de(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    L(this, ht, (t.hydrate ? Uu : Yo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && se(), L(this, en, i.$$events);
    for (const a of Object.keys(v(this, ht)))
      a === "$set" || a === "$destroy" || a === "$on" || bi(this, a, {
        get() {
          return v(this, ht)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, ht)[a] = o;
        },
        enumerable: !0
      });
    v(this, ht).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, ht).$destroy = () => {
      Gu(v(this, ht));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    v(this, ht).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    v(this, en)[t] = v(this, en)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, en)[t].push(r), () => {
      v(this, en)[t] = v(this, en)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ht).$destroy();
  }
}
en = new WeakMap(), ht = new WeakMap();
let Bo;
typeof HTMLElement == "function" && (Bo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    he(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (a) => {
          const o = Ps("slot");
          s !== "default" && (o.name = s), Ke(a, o);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = cf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = vi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = uf({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Du(() => {
        Fs(() => {
          var s;
          this.$$r = !0;
          for (const a of xi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = vi(
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = vi(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return xi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function vi(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function cf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Hs(e, t, n, r, i, s) {
  let a = class extends Bo {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xi(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return xi(t).forEach((o) => {
    bi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = vi(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Vn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    bi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var hf = { value: () => {
} };
function Xo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new gi(n);
}
function gi(e) {
  this._ = e;
}
function df(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
gi.prototype = Xo.prototype = {
  constructor: gi,
  on: function(e, t) {
    var n = this._, r = df(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = pf(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (i = (e = r[s]).type) n[i] = ba(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = ba(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new gi(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], r = 0, i = s.length; r < i; ++r) s[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, s = r.length; i < s; ++i) r[i].value.apply(t, n);
  }
};
function pf(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function ba(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = hf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ys = "http://www.w3.org/1999/xhtml";
const $a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ys,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $a.hasOwnProperty(t) ? { space: $a[t], local: e } : e;
}
function vf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ys && t.documentElement.namespaceURI === ys ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function gf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Wo(e) {
  var t = Xi(e);
  return (t.local ? gf : vf)(t);
}
function _f() {
}
function Ys(e) {
  return e == null ? _f : function() {
    return this.querySelector(e);
  };
}
function mf(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new at(r, this._parents);
}
function yf(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function wf() {
  return [];
}
function Uo(e) {
  return e == null ? wf : function() {
    return this.querySelectorAll(e);
  };
}
function xf(e) {
  return function() {
    return yf(e.apply(this, arguments));
  };
}
function bf(e) {
  typeof e == "function" ? e = xf(e) : e = Uo(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new at(r, i);
}
function Go(e) {
  return function() {
    return this.matches(e);
  };
}
function Ko(e) {
  return function(t) {
    return t.matches(e);
  };
}
var $f = Array.prototype.find;
function Af(e) {
  return function() {
    return $f.call(this.children, e);
  };
}
function Ef() {
  return this.firstElementChild;
}
function Tf(e) {
  return this.select(e == null ? Ef : Af(typeof e == "function" ? e : Ko(e)));
}
var Rf = Array.prototype.filter;
function Cf() {
  return Array.from(this.children);
}
function Sf(e) {
  return function() {
    return Rf.call(this.children, e);
  };
}
function Nf(e) {
  return this.selectAll(e == null ? Cf : Sf(typeof e == "function" ? e : Ko(e)));
}
function kf(e) {
  typeof e != "function" && (e = Go(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new at(r, this._parents);
}
function jo(e) {
  return new Array(e.length);
}
function Mf() {
  return new at(this._enter || this._groups.map(jo), this._parents);
}
function Ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ai.prototype = {
  constructor: Ai,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Pf(e) {
  return function() {
    return e;
  };
}
function Df(e, t, n, r, i, s) {
  for (var a = 0, o, l = t.length, u = s.length; a < u; ++a)
    (o = t[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ai(e, s[a]);
  for (; a < l; ++a)
    (o = t[a]) && (i[a] = o);
}
function If(e, t, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (c[o] = p = a.call(l, l.__data__, o, t) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(e, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new Ai(e, s[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(c[o]) === l && (i[o] = l);
}
function Ff(e) {
  return e.__data__;
}
function Of(e, t) {
  if (!arguments.length) return Array.from(this, Ff);
  var n = t ? If : Df, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Pf(e));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = Lf(e.call(f, f && f.__data__, u, r)), m = p.length, $ = o[u] = new Array(m), _ = a[u] = new Array(m), x = l[u] = new Array(c);
    n(f, h, $, _, x, p, t);
    for (var F = 0, S = 0, M, D; F < m; ++F)
      if (M = $[F]) {
        for (F >= S && (S = F + 1); !(D = _[S]) && ++S < m; ) ;
        M._next = D || null;
      }
  }
  return a = new at(a, r), a._enter = o, a._exit = l, a;
}
function Lf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qf() {
  return new at(this._exit || this._groups.map(jo), this._parents);
}
function Vf(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Hf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, m = 0; m < h; ++m)
      (p = u[m] || f[m]) && (c[m] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new at(o, this._parents);
}
function Yf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function zf(e) {
  e || (e = Bf);
  function t(h, c) {
    return h && c ? e(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(t);
  }
  return new at(i, this._parents).order();
}
function Bf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xf() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Wf() {
  return Array.from(this);
}
function Uf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Gf() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Kf() {
  return !this.node();
}
function jf(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && e.call(o, o.__data__, s, i);
  return this;
}
function Jf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Zf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Qf(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ec(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function tc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function nc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function rc(e, t) {
  var n = Xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Zf : Jf : typeof t == "function" ? n.local ? nc : tc : n.local ? ec : Qf)(n, t));
}
function Jo(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ic(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function ac(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function oc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ic : typeof t == "function" ? ac : sc)(e, t, n ?? "")) : _r(this.node(), e);
}
function _r(e, t) {
  return e.style.getPropertyValue(t) || Jo(e).getComputedStyle(e, null).getPropertyValue(t);
}
function lc(e) {
  return function() {
    delete this[e];
  };
}
function uc(e, t) {
  return function() {
    this[e] = t;
  };
}
function fc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function cc(e, t) {
  return arguments.length > 1 ? this.each((t == null ? lc : typeof t == "function" ? fc : uc)(e, t)) : this.node()[e];
}
function Zo(e) {
  return e.trim().split(/^|\s+/);
}
function zs(e) {
  return e.classList || new Qo(e);
}
function Qo(e) {
  this._node = e, this._names = Zo(e.getAttribute("class") || "");
}
Qo.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function el(e, t) {
  for (var n = zs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function tl(e, t) {
  for (var n = zs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function hc(e) {
  return function() {
    el(this, e);
  };
}
function dc(e) {
  return function() {
    tl(this, e);
  };
}
function pc(e, t) {
  return function() {
    (t.apply(this, arguments) ? el : tl)(this, e);
  };
}
function vc(e, t) {
  var n = Zo(e + "");
  if (arguments.length < 2) {
    for (var r = zs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? pc : t ? hc : dc)(n, t));
}
function gc() {
  this.textContent = "";
}
function _c(e) {
  return function() {
    this.textContent = e;
  };
}
function mc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function yc(e) {
  return arguments.length ? this.each(e == null ? gc : (typeof e == "function" ? mc : _c)(e)) : this.node().textContent;
}
function wc() {
  this.innerHTML = "";
}
function xc(e) {
  return function() {
    this.innerHTML = e;
  };
}
function bc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function $c(e) {
  return arguments.length ? this.each(e == null ? wc : (typeof e == "function" ? bc : xc)(e)) : this.node().innerHTML;
}
function Ac() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ec() {
  return this.each(Ac);
}
function Tc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rc() {
  return this.each(Tc);
}
function Cc(e) {
  var t = typeof e == "function" ? e : Wo(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Sc() {
  return null;
}
function Nc(e, t) {
  var n = typeof e == "function" ? e : Wo(e), r = t == null ? Sc : typeof t == "function" ? t : Ys(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function kc() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Mc() {
  return this.each(kc);
}
function Pc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Dc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ic(e) {
  return this.select(e ? Dc : Pc);
}
function Fc(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Oc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Lc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function qc(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Vc(e, t, n) {
  return function() {
    var r = this.__on, i, s = Oc(t);
    if (r) {
      for (var a = 0, o = r.length; a < o; ++a)
        if ((i = r[a]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, n), i = { type: e.type, name: e.name, value: t, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Hc(e, t, n) {
  var r = Lc(e + ""), i, s = r.length, a;
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
  for (o = t ? Vc : qc, i = 0; i < s; ++i) this.each(o(r[i], t, n));
  return this;
}
function nl(e, t, n) {
  var r = Jo(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Yc(e, t) {
  return function() {
    return nl(this, e, t);
  };
}
function zc(e, t) {
  return function() {
    return nl(this, e, t.apply(this, arguments));
  };
}
function Bc(e, t) {
  return this.each((typeof t == "function" ? zc : Yc)(e, t));
}
function* Xc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var rl = [null];
function at(e, t) {
  this._groups = e, this._parents = t;
}
function xr() {
  return new at([[document.documentElement]], rl);
}
function Wc() {
  return this;
}
at.prototype = xr.prototype = {
  constructor: at,
  select: mf,
  selectAll: bf,
  selectChild: Tf,
  selectChildren: Nf,
  filter: kf,
  data: Of,
  enter: Mf,
  exit: qf,
  join: Vf,
  merge: Hf,
  selection: Wc,
  order: Yf,
  sort: zf,
  call: Xf,
  nodes: Wf,
  node: Uf,
  size: Gf,
  empty: Kf,
  each: jf,
  attr: rc,
  style: oc,
  property: cc,
  classed: vc,
  text: yc,
  html: $c,
  raise: Ec,
  lower: Rc,
  append: Cc,
  insert: Nc,
  remove: Mc,
  clone: Ic,
  datum: Fc,
  on: Hc,
  dispatch: Bc,
  [Symbol.iterator]: Xc
};
function ue(e) {
  return typeof e == "string" ? new at([[document.querySelector(e)]], [document.documentElement]) : new at([[e]], rl);
}
function Bs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function il(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Kr() {
}
var Lr = 0.7, Ei = 1 / Lr, nr = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uc = /^#([0-9a-f]{3,8})$/, Gc = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), Kc = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), jc = new RegExp(`^rgba\\(${nr},${nr},${nr},${qr}\\)$`), Jc = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${qr}\\)$`), Zc = new RegExp(`^hsl\\(${qr},${Dt},${Dt}\\)$`), Qc = new RegExp(`^hsla\\(${qr},${Dt},${Dt},${qr}\\)$`), Aa = {
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
Bs(Kr, Wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ea,
  // Deprecated! Use color.formatHex.
  formatHex: Ea,
  formatHex8: eh,
  formatHsl: th,
  formatRgb: Ta,
  toString: Ta
});
function Ea() {
  return this.rgb().formatHex();
}
function eh() {
  return this.rgb().formatHex8();
}
function th() {
  return sl(this).formatHsl();
}
function Ta() {
  return this.rgb().formatRgb();
}
function Wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Uc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ra(t) : n === 3 ? new Ze(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? si(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? si(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gc.exec(e)) ? new Ze(t[1], t[2], t[3], 1) : (t = Kc.exec(e)) ? new Ze(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = jc.exec(e)) ? si(t[1], t[2], t[3], t[4]) : (t = Jc.exec(e)) ? si(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Zc.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, 1) : (t = Qc.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, t[4]) : Aa.hasOwnProperty(e) ? Ra(Aa[e]) : e === "transparent" ? new Ze(NaN, NaN, NaN, 0) : null;
}
function Ra(e) {
  return new Ze(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function si(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ze(e, t, n, r);
}
function nh(e) {
  return e instanceof Kr || (e = Wn(e)), e ? (e = e.rgb(), new Ze(e.r, e.g, e.b, e.opacity)) : new Ze();
}
function ws(e, t, n, r) {
  return arguments.length === 1 ? nh(e) : new Ze(e, t, n, r ?? 1);
}
function Ze(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Bs(Ze, ws, il(Kr, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new Ze(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new Ze(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ze(zn(this.r), zn(this.g), zn(this.b), Ti(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: rh,
  formatRgb: Sa,
  toString: Sa
}));
function Ca() {
  return `#${Pn(this.r)}${Pn(this.g)}${Pn(this.b)}`;
}
function rh() {
  return `#${Pn(this.r)}${Pn(this.g)}${Pn(this.b)}${Pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Sa() {
  const e = Ti(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${zn(this.r)}, ${zn(this.g)}, ${zn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ti(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function zn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pn(e) {
  return e = zn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Na(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new bt(e, t, n, r);
}
function sl(e) {
  if (e instanceof bt) return new bt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Kr || (e = Wn(e)), !e) return new bt();
  if (e instanceof bt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new bt(a, o, l, e.opacity);
}
function ih(e, t, n, r) {
  return arguments.length === 1 ? sl(e) : new bt(e, t, n, r ?? 1);
}
function bt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Bs(bt, ih, il(Kr, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new bt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new bt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Ze(
      ts(e >= 240 ? e - 240 : e + 120, i, r),
      ts(e, i, r),
      ts(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new bt(ka(this.h), ai(this.s), ai(this.l), Ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ti(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ka(this.h)}, ${ai(this.s) * 100}%, ${ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ts(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Xs = (e) => () => e;
function sh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ah(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function oh(e) {
  return (e = +e) == 1 ? al : function(t, n) {
    return n - t ? ah(t, n, e) : Xs(isNaN(t) ? n : t);
  };
}
function al(e, t) {
  var n = t - e;
  return n ? sh(e, n) : Xs(isNaN(e) ? t : e);
}
const Ri = (function e(t) {
  var n = oh(t);
  function r(i, s) {
    var a = n((i = ws(i)).r, (s = ws(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = al(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function lh(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function uh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function fh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Gt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function ch(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Pt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function hh(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Gt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ns = new RegExp(xs.source, "g");
function dh(e) {
  return function() {
    return e;
  };
}
function ph(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ol(e, t) {
  var n = xs.lastIndex = ns.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = xs.exec(e)) && (i = ns.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Pt(r, i) })), n = ns.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? ph(l[0].x) : dh(t) : (t = l.length, function(u) {
    for (var f = 0, h; f < t; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Gt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Xs(t) : (n === "number" ? Pt : n === "string" ? (r = Wn(t)) ? (t = r, Ri) : ol : t instanceof Wn ? Ri : t instanceof Date ? ch : uh(t) ? lh : Array.isArray(t) ? fh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? hh : Pt)(e, t);
}
var Ma = 180 / Math.PI, bs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ll(e, t, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: a,
    scaleY: o
  };
}
var oi;
function vh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? bs : ll(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gh(e) {
  return e == null || (oi || (oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), oi.setAttribute("transform", e), !(e = oi.transform.baseVal.consolidate())) ? bs : (e = e.matrix, ll(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ul(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, m) {
    if (u !== h || f !== c) {
      var $ = p.push("translate(", null, t, null, n);
      m.push({ i: $ - 4, x: Pt(u, h) }, { i: $ - 2, x: Pt(f, c) });
    } else (h || c) && p.push("translate(" + h + t + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Pt(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Pt(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, m) {
    if (u !== h || f !== c) {
      var $ = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: $ - 4, x: Pt(u, h) }, { i: $ - 2, x: Pt(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var m = -1, $ = c.length, _; ++m < $; ) h[(_ = c[m]).i] = _.x(p);
      return h.join("");
    };
  };
}
var _h = ul(vh, "px, ", "px)", "deg)"), mh = ul(gh, ", ", ")", ")"), mr = 0, Nr = 0, Cr = 0, fl = 1e3, Ci, kr, Si = 0, Un = 0, Wi = 0, Vr = typeof performance == "object" && performance.now ? performance : Date, cl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ws() {
  return Un || (cl(yh), Un = Vr.now() + Wi);
}
function yh() {
  Un = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = hl.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ws() : +n) + (t == null ? 0 : +t), !this._next && kr !== this && (kr ? kr._next = this : Ci = this, kr = this), this._call = e, this._time = n, $s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $s());
  }
};
function hl(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function wh() {
  Ws(), ++mr;
  for (var e = Ci, t; e; )
    (t = Un - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --mr;
}
function Pa() {
  Un = (Si = Vr.now()) + Wi, mr = Nr = 0;
  try {
    wh();
  } finally {
    mr = 0, bh(), Un = 0;
  }
}
function xh() {
  var e = Vr.now(), t = e - Si;
  t > fl && (Wi -= t, Si = e);
}
function bh() {
  for (var e, t = Ci, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ci = n);
  kr = e, $s(r);
}
function $s(e) {
  if (!mr) {
    Nr && (Nr = clearTimeout(Nr));
    var t = e - Un;
    t > 24 ? (e < 1 / 0 && (Nr = setTimeout(Pa, e - Vr.now() - Wi)), Cr && (Cr = clearInterval(Cr))) : (Cr || (Si = Vr.now(), Cr = setInterval(xh, fl)), mr = 1, cl(Pa));
  }
}
function Da(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var $h = Xo("start", "end", "cancel", "interrupt"), Ah = [], dl = 0, Ia = 1, As = 2, _i = 3, Fa = 4, Es = 5, mi = 6;
function Ui(e, t, n, r, i, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Eh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: $h,
    tween: Ah,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: dl
  });
}
function Us(e, t) {
  var n = Rt(e, t);
  if (n.state > dl) throw new Error("too late; already scheduled");
  return n;
}
function Vt(e, t) {
  var n = Rt(e, t);
  if (n.state > _i) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Eh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = hl(s, 0, n.time);
  function s(u) {
    n.state = Ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Ia) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === _i) return Da(a);
        p.state === Fa ? (p.state = mi, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[f]) : +f < t && (p.state = mi, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[f]);
      }
    if (Da(function() {
      n.state === _i && (n.state = Fa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = As, n.on.call("start", e, e.__data__, n.index, n.group), n.state === As) {
      for (n.state = _i, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Es, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(e, f);
    n.state === Es && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = mi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Th(e, t) {
  var n = e.__transition, r, i, s = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > As && r.state < Es, r.state = mi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    s && delete e.__transition;
  }
}
function Rh(e) {
  return this.each(function() {
    Th(this, e);
  });
}
function Ch(e, t) {
  var n, r;
  return function() {
    var i = Vt(this, e), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, o = r.length; a < o; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Sh(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Vt(this, e), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === t) {
          i[l] = o;
          break;
        }
      l === u && i.push(o);
    }
    s.tween = i;
  };
}
function Nh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Rt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Ch : Sh)(n, e, t));
}
function Gs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Vt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Rt(i, r).value[t];
  };
}
function pl(e, t) {
  var n;
  return (typeof t == "number" ? Pt : t instanceof Wn ? Ri : (n = Wn(t)) ? (t = n, Ri) : ol)(e, t);
}
function kh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Mh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ph(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Dh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Ih(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Fh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Oh(e, t) {
  var n = Xi(e), r = n === "transform" ? mh : pl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Fh : Ih)(n, r, Gs(this, "attr." + e, t)) : t == null ? (n.local ? Mh : kh)(n) : (n.local ? Dh : Ph)(n, r, t));
}
function Lh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function qh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Vh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && qh(e, s)), n;
  }
  return i._value = t, i;
}
function Hh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Lh(e, s)), n;
  }
  return i._value = t, i;
}
function Yh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? Vh : Hh)(r, t));
}
function zh(e, t) {
  return function() {
    Us(this, e).delay = +t.apply(this, arguments);
  };
}
function Bh(e, t) {
  return t = +t, function() {
    Us(this, e).delay = t;
  };
}
function Xh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zh : Bh)(t, e)) : Rt(this.node(), t).delay;
}
function Wh(e, t) {
  return function() {
    Vt(this, e).duration = +t.apply(this, arguments);
  };
}
function Uh(e, t) {
  return t = +t, function() {
    Vt(this, e).duration = t;
  };
}
function Gh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wh : Uh)(t, e)) : Rt(this.node(), t).duration;
}
function Kh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Vt(this, e).ease = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Kh(t, e)) : Rt(this.node(), t).ease;
}
function Jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Vt(this, e).ease = n;
  };
}
function Zh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Jh(this._id, e));
}
function Qh(e) {
  typeof e != "function" && (e = Go(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new on(r, this._parents, this._name, this._id);
}
function ed(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = t[o];
  return new on(a, this._parents, this._name, this._id);
}
function td(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function nd(e, t, n) {
  var r, i, s = td(t) ? Us : Vt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function rd(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(nd(n, e, t));
}
function id(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function sd() {
  return this.on("end.remove", id(this._id));
}
function ad(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ys(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = e.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Ui(u[c], t, n, c, u, Rt(f, n)));
  return new on(s, this._parents, t, n);
}
function od(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Uo(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = e.call(f, f.__data__, h, l), p, m = Rt(f, n), $ = 0, _ = c.length; $ < _; ++$)
          (p = c[$]) && Ui(p, t, n, $, c, m);
        s.push(c), a.push(f);
      }
  return new on(s, a, t, n);
}
var ld = xr.prototype.constructor;
function ud() {
  return new ld(this._groups, this._parents);
}
function fd(e, t) {
  var n, r, i;
  return function() {
    var s = _r(this, e), a = (this.style.removeProperty(e), _r(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function vl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function cd(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = _r(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function hd(e, t, n) {
  var r, i, s;
  return function() {
    var a = _r(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), _r(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function dd(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Vt(this, e), u = l.on, f = l.value[s] == null ? o || (o = vl(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function pd(e, t, n) {
  var r = (e += "") == "transform" ? _h : pl;
  return t == null ? this.styleTween(e, fd(e, r)).on("end.style." + e, vl(e)) : typeof t == "function" ? this.styleTween(e, hd(e, r, Gs(this, "style." + e, t))).each(dd(this._id, e)) : this.styleTween(e, cd(e, r, t), n).on("end.style." + e, null);
}
function vd(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function gd(e, t, n) {
  var r, i;
  function s() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && vd(e, a, n)), r;
  }
  return s._value = t, s;
}
function _d(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, gd(e, t, n ?? ""));
}
function md(e) {
  return function() {
    this.textContent = e;
  };
}
function yd(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function wd(e) {
  return this.tween("text", typeof e == "function" ? yd(Gs(this, "text", e)) : md(e == null ? "" : e + ""));
}
function xd(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function bd(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && xd(i)), t;
  }
  return r._value = e, r;
}
function $d(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, bd(e));
}
function Ad() {
  for (var e = this._name, t = this._id, n = gl(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Rt(l, t);
        Ui(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new on(r, this._parents, e, n);
}
function Ed() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Vt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), i === 0 && s();
  });
}
var Td = 0;
function on(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function yi(e) {
  return xr().transition(e);
}
function gl() {
  return ++Td;
}
var Ut = xr.prototype;
on.prototype = yi.prototype = {
  constructor: on,
  select: ad,
  selectAll: od,
  selectChild: Ut.selectChild,
  selectChildren: Ut.selectChildren,
  filter: Qh,
  merge: ed,
  selection: ud,
  transition: Ad,
  call: Ut.call,
  nodes: Ut.nodes,
  node: Ut.node,
  size: Ut.size,
  empty: Ut.empty,
  each: Ut.each,
  on: rd,
  attr: Oh,
  attrTween: Yh,
  style: pd,
  styleTween: _d,
  text: wd,
  textTween: $d,
  remove: sd,
  tween: Nh,
  delay: Xh,
  duration: Gh,
  ease: jh,
  easeVarying: Zh,
  end: Ed,
  [Symbol.iterator]: Ut[Symbol.iterator]
};
function Rd(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Cd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rd
};
function Sd(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Nd(e) {
  var t, n;
  e instanceof on ? (t = e._id, e = e._name) : (t = gl(), (n = Cd).time = Ws(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ui(l, e, t, u, a, n || Sd(l, t));
  return new on(r, this._parents, e, t);
}
xr.prototype.interrupt = Rh;
xr.prototype.transition = Nd;
const Ts = Math.PI, Rs = 2 * Ts, Cn = 1e-6, kd = Rs - Cn;
function _l(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Md(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _l;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Pd {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _l : Md(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(t, n, r, i, s, a) {
    this._append`C${+t},${+n},${+r},${+i},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(t, n, r, i, s) {
    if (t = +t, n = +n, r = +r, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, o = this._y1, l = r - t, u = i - n, f = a - t, h = o - n, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (c > Cn) if (!(Math.abs(h * l - u * f) > Cn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = r - a, m = i - o, $ = l * l + u * u, _ = p * p + m * m, x = Math.sqrt($), F = Math.sqrt(c), S = s * Math.tan((Ts - Math.acos(($ + c - _) / (2 * x * F))) / 2), M = S / F, D = S / x;
      Math.abs(M - 1) > Cn && this._append`L${t + M * f},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * p > f * m)},${this._x1 = t + D * l},${this._y1 = n + D * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Cn || Math.abs(this._y1 - f) > Cn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Rs + Rs), c > kd ? this._append`A${r},${r},0,1,${h},${t - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > Cn && this._append`A${r},${r},0,${+(c >= Ts)},${h},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Dd(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; ) n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const Id = Dd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Ve(e) {
  return function() {
    return e;
  };
}
const Oa = Math.abs, De = Math.atan2, Rn = Math.cos, Fd = Math.max, rs = Math.min, Ct = Math.sin, tr = Math.sqrt, We = 1e-12, Hr = Math.PI, ki = Hr / 2, wi = 2 * Hr;
function Od(e) {
  return e > 1 ? 0 : e < -1 ? Hr : Math.acos(e);
}
function La(e) {
  return e >= 1 ? ki : e <= -1 ? -ki : Math.asin(e);
}
function Ld(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new Pd(t);
}
function qd(e) {
  return e.innerRadius;
}
function Vd(e) {
  return e.outerRadius;
}
function Hd(e) {
  return e.startAngle;
}
function Yd(e) {
  return e.endAngle;
}
function zd(e) {
  return e && e.padAngle;
}
function Bd(e, t, n, r, i, s, a, o) {
  var l = n - e, u = r - t, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < We))
    return c = (f * (t - s) - h * (e - i)) / c, [e + c * l, t + c * u];
}
function li(e, t, n, r, i, s, a) {
  var o = e - n, l = t - r, u = (a ? s : -s) / tr(o * o + l * l), f = u * l, h = -u * o, c = e + f, p = t + h, m = n + f, $ = r + h, _ = (c + m) / 2, x = (p + $) / 2, F = m - c, S = $ - p, M = F * F + S * S, D = i - s, W = c * $ - m * p, K = (S < 0 ? -1 : 1) * tr(Fd(0, D * D * M - W * W)), Q = (W * S - F * K) / M, ee = (-W * F - S * K) / M, J = (W * S + F * K) / M, ae = (-W * F + S * K) / M, oe = Q - _, N = ee - x, H = J - _, Ie = ae - x;
  return oe * oe + N * N > H * H + Ie * Ie && (Q = J, ee = ae), {
    cx: Q,
    cy: ee,
    x01: -f,
    y01: -h,
    x11: Q * (i / D - 1),
    y11: ee * (i / D - 1)
  };
}
function yt() {
  var e = qd, t = Vd, n = Ve(0), r = null, i = Hd, s = Yd, a = zd, o = null, l = Ld(u);
  function u() {
    var f, h, c = +e.apply(this, arguments), p = +t.apply(this, arguments), m = i.apply(this, arguments) - ki, $ = s.apply(this, arguments) - ki, _ = Oa($ - m), x = $ > m;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > We)) o.moveTo(0, 0);
    else if (_ > wi - We)
      o.moveTo(p * Rn(m), p * Ct(m)), o.arc(0, 0, p, m, $, !x), c > We && (o.moveTo(c * Rn($), c * Ct($)), o.arc(0, 0, c, $, m, x));
    else {
      var F = m, S = $, M = m, D = $, W = _, K = _, Q = a.apply(this, arguments) / 2, ee = Q > We && (r ? +r.apply(this, arguments) : tr(c * c + p * p)), J = rs(Oa(p - c) / 2, +n.apply(this, arguments)), ae = J, oe = J, N, H;
      if (ee > We) {
        var Ie = La(ee / c * Ct(Q)), Me = La(ee / p * Ct(Q));
        (W -= Ie * 2) > We ? (Ie *= x ? 1 : -1, M += Ie, D -= Ie) : (W = 0, M = D = (m + $) / 2), (K -= Me * 2) > We ? (Me *= x ? 1 : -1, F += Me, S -= Me) : (K = 0, F = S = (m + $) / 2);
      }
      var xe = p * Rn(F), ce = p * Ct(F), le = c * Rn(D), z = c * Ct(D);
      if (J > We) {
        var Fe = p * Rn(S), _t = p * Ct(S), ne = c * Rn(M), bn = c * Ct(M), Oe;
        if (_ < Hr)
          if (Oe = Bd(xe, ce, ne, bn, Fe, _t, le, z)) {
            var ot = xe - Oe[0], $n = ce - Oe[1], we = Fe - Oe[0], mt = _t - Oe[1], Ht = 1 / Ct(Od((ot * we + $n * mt) / (tr(ot * ot + $n * $n) * tr(we * we + mt * mt))) / 2), An = tr(Oe[0] * Oe[0] + Oe[1] * Oe[1]);
            ae = rs(J, (c - An) / (Ht - 1)), oe = rs(J, (p - An) / (Ht + 1));
          } else
            ae = oe = 0;
      }
      K > We ? oe > We ? (N = li(ne, bn, xe, ce, p, oe, x), H = li(Fe, _t, le, z, p, oe, x), o.moveTo(N.cx + N.x01, N.cy + N.y01), oe < J ? o.arc(N.cx, N.cy, oe, De(N.y01, N.x01), De(H.y01, H.x01), !x) : (o.arc(N.cx, N.cy, oe, De(N.y01, N.x01), De(N.y11, N.x11), !x), o.arc(0, 0, p, De(N.cy + N.y11, N.cx + N.x11), De(H.cy + H.y11, H.cx + H.x11), !x), o.arc(H.cx, H.cy, oe, De(H.y11, H.x11), De(H.y01, H.x01), !x))) : (o.moveTo(xe, ce), o.arc(0, 0, p, F, S, !x)) : o.moveTo(xe, ce), !(c > We) || !(W > We) ? o.lineTo(le, z) : ae > We ? (N = li(le, z, Fe, _t, c, -ae, x), H = li(xe, ce, ne, bn, c, -ae, x), o.lineTo(N.cx + N.x01, N.cy + N.y01), ae < J ? o.arc(N.cx, N.cy, ae, De(N.y01, N.x01), De(H.y01, H.x01), !x) : (o.arc(N.cx, N.cy, ae, De(N.y01, N.x01), De(N.y11, N.x11), !x), o.arc(0, 0, c, De(N.cy + N.y11, N.cx + N.x11), De(H.cy + H.y11, H.cx + H.x11), x), o.arc(H.cx, H.cy, ae, De(H.y11, H.x11), De(H.y01, H.x01), !x))) : o.arc(0, 0, c, D, M, x);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Hr / 2;
    return [Rn(h) * f, Ct(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ve(+f), u) : e;
  }, u.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ve(+f), u) : t;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Ve(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ve(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ve(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Ve(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ve(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Xd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Wd(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ud(e) {
  return e;
}
function is() {
  var e = Ud, t = Wd, n = null, r = Ve(0), i = Ve(wi), s = Ve(0);
  function a(o) {
    var l, u = (o = Xd(o)).length, f, h, c = 0, p = new Array(u), m = new Array(u), $ = +r.apply(this, arguments), _ = Math.min(wi, Math.max(-wi, i.apply(this, arguments) - $)), x, F = Math.min(Math.abs(_) / u, s.apply(this, arguments)), S = F * (_ < 0 ? -1 : 1), M;
    for (l = 0; l < u; ++l)
      (M = m[p[l] = l] = +e(o[l], l, o)) > 0 && (c += M);
    for (t != null ? p.sort(function(D, W) {
      return t(m[D], m[W]);
    }) : n != null && p.sort(function(D, W) {
      return n(o[D], o[W]);
    }), l = 0, h = c ? (_ - u * S) / c : 0; l < u; ++l, $ = x)
      f = p[l], M = m[f], x = $ + (M > 0 ? M * h : 0) + S, m[f] = {
        data: o[f],
        index: l,
        value: M,
        startAngle: $,
        endAngle: x,
        padAngle: F
      };
    return m;
  }
  return a.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ve(+o), a) : e;
  }, a.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, a) : t;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, t = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Ve(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Ve(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Ve(+o), a) : s;
  }, a;
}
function Mr(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mr.prototype = {
  constructor: Mr,
  scale: function(e) {
    return e === 1 ? this : new Mr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mr(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Mr.prototype;
var Gd = /* @__PURE__ */ Bu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Kd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function ml(e, t) {
  qi(t, !0), Vs(e, Kd);
  let n = fe(t, "jsonData", 7), r = fe(t, "currentRound", 7, 1), i = fe(t, "mouseEventType", 15), s = fe(t, "mouseData", 15), a = fe(t, "mouseX", 15), o = fe(t, "mouseY", 15), l = fe(t, "requestRoundChange", 7, (d) => {
  }), u = fe(t, "candidateColors", 23, () => []), f = fe(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = fe(t, "firstRoundDeterminesPercentages", 7, !1), c = fe(t, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const m = 800, $ = 800, _ = Math.min(m, $) * 0.3, x = m / 2, F = $ / 2, S = "Pie", M = "PieOutline", D = "Donut", W = "TextLayer", K = "url(#cross-hatch)", Q = 1.15, ee = 750, J = 800, ae = "white", oe = 1, N = "#ff00ff", H = 3;
  function Ie(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let Me = [], xe = [], ce = [], le = 0, z = 0;
  const Fe = {}, _t = "No Further Rankings";
  let ne = /* @__PURE__ */ Ee(null);
  function bn() {
    const d = ue(b(ne));
    d.select("#" + S).remove(), d.select("#" + M).remove(), d.select("#" + D).remove(), d.select("#" + W).remove();
  }
  function Oe(d) {
    l() && (me = d, l()(d));
  }
  function ot(d) {
    bn(), ce = $n(d), Me = Zs(d, S, ce, x, F, 0, we()), Zs(d, M, ce, x, F, 0, we(), !1, !1, !0), Er();
  }
  ju(() => {
    ie(), setTimeout(
      () => {
        ot(r());
      },
      0
    );
  });
  function $n(d) {
    const g = te(d);
    return le = Kn(d), g;
  }
  function we() {
    return _;
  }
  function mt() {
    return we() * 1.41;
  }
  function Ht(d) {
    let g = 0;
    for (let y = 1; y < d; y++) {
      const E = n().results[y - 1].tallyResults;
      for (let A = 0; A < E.length; A++) {
        const R = E[A].transfers;
        if (R) {
          const I = R.exhausted;
          I && (g += Number(I));
        }
      }
    }
    return g;
  }
  function An(d, g) {
    if (d === "exhausted") return Ht(g);
    {
      const y = n().results[g - 1].tally;
      return Number(y[d]);
    }
  }
  function jr(d, g) {
    return An(d, g).toLocaleString("en-US");
  }
  function Jr(d, g) {
    const y = h() ? le : Gi(g);
    return (An(d, g) / y).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Kn(d) {
    const g = n().results[d - 1].tally;
    let y = 0;
    for (let [E, A] of Object.entries(g))
      y += Number(A);
    return y;
  }
  function un(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Gi(d) {
    const g = n().results[d - 1].tally;
    let y = 0;
    for (let [E, A] of Object.entries(g))
      un(E) || (y += Number(A));
    return y;
  }
  function Zr(d, g) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const y = n().results[d - 1].tallyResults, E = [];
    for (let A = 0; A < y.length; A++) {
      const R = y[A][g];
      R != null && E.push(R);
    }
    return E;
  }
  function fn(d) {
    return Zr(d, "eliminated");
  }
  function br(d) {
    let g = [];
    for (let y = 1; y <= d; y++) g = g.concat(Zr(y, "elected"));
    return [...new Set(g)];
  }
  function w(d, g) {
    const y = n().results[g - 1].tallyResults;
    let E = 0;
    const A = y.findIndex((R) => (R == null ? void 0 : R.elected) && d == R.elected);
    if (A >= 0) {
      const R = y[A].transfers;
      if (R)
        for (let [I, q] of Object.entries(R)) E += Number(q);
    } else
      return 0;
    return E;
  }
  function Y(d, g) {
    d.some((y) => un(y.label)) || d.push({ label: "exhausted", value: Ht(g) });
  }
  function te(d) {
    const g = [];
    for (let [y, E] of Object.entries(n().results[d - 1].tally))
      g.push({ label: y, value: Number(E) });
    return Y(g, d), g;
  }
  function ve(d) {
    const g = n().results[Math.max(0, d - 2)].tally, y = n().results[d - 1].tally, E = [];
    for (let [A] of Object.entries(g))
      E.push({ label: A, value: Number(y[A] ?? 0) });
    return Y(E, d), E;
  }
  function be(d, g) {
    const y = [];
    for (const E of d) {
      if (E.label === "exhausted" || E.isTransfer) {
        y.push(E);
        continue;
      }
      const A = w(E.label, g);
      A > 0 ? (y.push({
        label: E.label,
        value: A,
        isTransfer: !0
      }), y.push({ ...E, value: E.value - A })) : y.push(E);
    }
    return y;
  }
  function ie() {
    const d = ue(b(ne)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [y, E] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Fe[y] = Id[g] : Fe[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Fe[y] = u()[g % u().length], g++;
      {
        const A = d.clone(!0);
        A.attr("id", Ie(y)).select("rect").attr("fill", Fe[y]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    Fe.exhausted = K, Fe["Inactive Ballots"] = K;
  }
  function ze() {
    ue(b(ne)).select("#" + D).remove();
  }
  function lt(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g);
    const E = be(ce, d), R = is().sort(null).value((I) => I.value)(E);
    na(d, S, R, 0, we()), na(d, M, R, 0, we(), !0), ce = E, Me = R, ze(), Xt(d), El(), Rl(0, we()), Er();
  }
  function Be(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g), Wt(d);
  }
  function ut(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g), $r(d), Ar(we(), mt());
  }
  let ge = !1, _e = [];
  function $e() {
    Er(), ge = !1, Le();
  }
  function Le() {
    if (_e.length === 0) {
      me !== r() && (r() === me + 1 && me > 0 && r() <= n().results.length ? (me = r(), Yt(r())) : r() >= 1 && r() <= n().results.length && (me = r(), c(0), ot(r())));
      return;
    }
    const d = _e.shift();
    switch (d.type) {
      case "round": {
        const g = d.round;
        g === me + 1 && me > 0 && g <= n().results.length ? (me = g, Yt(g)) : (g !== me && g >= 1 && g <= n().results.length && (me = g, c(0), ot(g)), Le());
        break;
      }
      case "step":
        Zn();
        break;
    }
  }
  function Yt(d) {
    if (d <= 1 || d > n().results.length) {
      Le();
      return;
    }
    ge = !0, z = d, c(0), lt(z - 1, () => {
      c(1), Be(z - 1, () => {
        c(2), ut(z, () => {
          c(0), $e();
        });
      });
    });
  }
  function jn() {
    ge || (ge = !0, z = r(), En());
  }
  function En() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), _e.length > 0) {
      $e();
      return;
    }
    const d = z < n().results.length - 1 ? En : () => {
      c(0), $e();
    };
    lt(z, () => {
      c(1), Be(z, () => {
        c(2), z++, Oe(z), ut(z, d);
      });
    });
  }
  Is(() => {
    zt();
  });
  let me = 0;
  function zt() {
    if (me != r()) {
      if (ge) {
        _e.push({ type: "round", round: r() });
        return;
      }
      me == r() - 1 && me > 0 ? Jn() : Bt(r()), me = r();
    }
  }
  function Bt(d) {
    if (ge) {
      _e.push({ type: "round", round: d });
      return;
    }
    c(0), ot(d);
  }
  function Jn() {
    if (ge) {
      _e.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      Er(), ge = !1;
      return;
    }
    ge = !0, c() === 0 ? lt(z - 1, () => {
      c(1), Be(z - 1, () => {
        c(2), ut(z, () => {
          c(0), $e();
        });
      });
    }) : c() === 1 ? Be(z - 1, () => {
      c(2), ut(z, () => {
        c(0), $e();
      });
    }) : c() === 2 && ut(z, () => {
      c(0), $e();
    });
  }
  function Zn() {
    if (r() > n().results.length) {
      Er(), ge = !1;
      return;
    }
    if (ge) {
      _e.push({ type: "step" });
      return;
    }
    ge = !0, z = r(), c() === 0 ? lt(z, () => {
      c(1), $e();
    }) : c() === 1 ? Be(z, () => {
      c(2), $e();
    }) : c() === 2 ? (z++, Oe(z), ut(z, () => {
      c(0), $e();
    })) : (ge = !1, console.warn("displayPhase out of range at ", c()));
  }
  function $r(d) {
    ce = ve(d), Me = ea(d, S, ce, 0, we(), !0), ea(d, M, ce, 0, we(), !1, !0), ue(b(ne)).select("#" + M).selectAll(".eliminated").remove();
  }
  function Ar(d, g) {
    const y = ue(b(ne)).select("#" + D), A = ue(b(ne)).select("#" + S), R = {};
    for (const P of Me) {
      const k = P.data.label;
      if (P.data.isTransfer) continue;
      const T = A.select("#" + CSS.escape(p(P.data)));
      T.empty() || (R[k] = {
        oldStart: Number(T.attr("prevStart")),
        oldEnd: Number(T.attr("prevEnd")),
        newStart: P.startAngle,
        newEnd: P.endAngle
      });
    }
    const I = y.selectAll(".slice");
    let q = I.size();
    function O() {
      q--, q === 0 && Tl();
    }
    I.select("path").transition("global").duration(ee).attrTween("d", function(P) {
      const k = P.startAngle, T = P.endAngle, C = T - k, Pe = R[P.data.label];
      let Z, Xe;
      if (Pe) {
        const Qn = (Pe.oldStart + Pe.oldEnd) / 2, kl = (Pe.newStart + Pe.newEnd) / 2, Ml = k - Qn;
        Z = kl + Ml, Xe = Z + C;
      } else
        Z = k, Xe = T;
      const re = Gt(k, Z), Re = Gt(T, Xe), ei = Gt(g, d), Tr = yt();
      return function(Qn) {
        return Tr.innerRadius(Math.min(ei(Qn), d) - 1).outerRadius(ei(Qn)).startAngle(re(Qn)).endAngle(Re(Qn)), Tr(P);
      };
    }).on("end", (P) => O());
  }
  function Xt(d) {
    const g = xl(d, Me);
    xe = Qs(d, D, g, x, F, we(), mt(), !1, !0);
    const y = ue(b(ne));
    y.select("#" + S).raise(), y.select("#" + M).raise();
  }
  function Wt(d) {
    const g = $l(d, xe, Me);
    xe = ra(d, D, g, we(), mt(), !1);
  }
  function Tn(d) {
    return Fe[d.data.label];
  }
  function wl(d) {
    const g = {}, y = n().results[d - 1].tallyResults;
    for (let E = 0; E < y.length; E++) {
      let A = y[E].eliminated;
      if (A === void 0 && (A = y[E].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const R = y[E].transfers;
      if (R === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [I, q] of Object.entries(R))
        g[I] === void 0 ? g[I] = Number(q) : g[I] += Number(q);
    }
    return g;
  }
  function xl(d, g) {
    const y = [], E = le, A = n().results[d - 1].tallyResults;
    for (let R = 0; R < A.length; R++) {
      let I = A[R].eliminated;
      if (I === void 0 && (I = A[R].elected), I === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const q = A[R].transfers;
      if (q === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let O = g.find((k) => k.data.label == I && k.data.isTransfer);
      O === void 0 && (O = g.find((k) => k.data.label == I && !k.data.isTransfer));
      let P = 0;
      if (O) P = O.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, T] of Object.entries(q)) {
        let C;
        const Pe = g.find((re) => re.data.label == k);
        if (Pe)
          C = structuredClone(Pe);
        else if (k == "exhausted")
          C = {
            data: { label: k, value: Number(T) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (k == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", T);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", k);
          continue;
        }
        const Xe = Number(T) / E * 2 * Math.PI;
        C.startAngle = P, P = C.endAngle = P + Xe, C.index = R, C.data.transferIndex = R, y.push(C);
      }
    }
    return y;
  }
  function bl(d, g, y) {
    const E = {};
    for (let [A, R] of Object.entries(d)) {
      const I = y.find((P) => A == P.data.label);
      if (I === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const q = (I.startAngle + I.endAngle) / 2, O = d[I.data.label] / g * 2 * Math.PI;
      E[I.data.label] = q - O / 2;
    }
    return E;
  }
  function $l(d, g, y) {
    const E = [], A = le, R = wl(d), I = bl(R, A, y);
    for (let [q, O] of g.entries()) {
      const P = structuredClone(O), k = O.endAngle - O.startAngle, T = y.find((C) => O.data.label === C.data.label && !C.data.isTransfer);
      if (T) {
        const C = T.data.label;
        P.startAngle = I[C], I[C] += k, P.endAngle = P.startAngle + k;
      } else if (O.data.label === "exhausted")
        P.startAngle = O.startAngle, P.endAngle = O.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", O.data.label);
        continue;
      }
      P.index = q, E.push(P);
    }
    return E;
  }
  function js(d, g, y, E) {
    const A = yt().innerRadius(y * Q).outerRadius(y * Q), R = g.filter((k) => !k.data.isTransfer && k.data.value > 0), I = [], q = E.append("g").attr("opacity", 0);
    for (const k of R) {
      const T = k.data.label === "exhausted" ? _t : k.data.label, C = A.centroid(k), Pe = Qr(k.startAngle, k.endAngle), Z = jr(k.data.label, d);
      let Xe;
      !h() && un(k.data.label) ? Xe = Z : Xe = Z + " (" + Jr(k.data.label, d) + ")";
      const re = q.append("text").attr("transform", `translate(${C})`).attr("text-anchor", Pe).text(T);
      re.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Xe);
      const Re = re.node().getBBox();
      I.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Re.x + C[0], Re.y + C[1], Re.width, Re.height)
      });
    }
    q.remove(), I.sort((k, T) => T.value - k.value);
    const O = [], P = /* @__PURE__ */ new Set();
    for (const k of I)
      O.some((C) => k.bbox.left < C.right && k.bbox.right > C.left && k.bbox.top < C.bottom && k.bbox.bottom > C.top) || (P.add(k.label), O.push(k.bbox));
    return P;
  }
  function Js(d, g, y, E, A, R) {
    const q = ue(b(ne)).append("g").attr("id", W).attr("transform", `translate(${y}, ${E})`), O = yt().innerRadius(A * Q).outerRadius(A * Q), P = js(d, g, A, q);
    q.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && P.has(k.data.label) && ue(this).append("g").attr("id", (T) => p(T.data)).classed("eliminated", (T) => R.includes(T.data.label) || T.data.isTransfer === !0).each(function(T, C) {
        T.data.label === "exhausted" && ue(this).on("mouseenter", (Pe, Z) => Cl(Pe)).on("mouseleave", (Pe, Z) => Sl());
      }).append("text").attr("transform", (T) => `translate(${O.centroid(T)})`).attr("text-anchor", (T) => Qr(T.startAngle, T.endAngle)).text((T) => T.data.label === "exhausted" ? _t : T.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((T) => {
        const C = jr(T.data.label, d);
        return !h() && un(T.data.label) ? C : C + " (" + Jr(T.data.label, d) + ")";
      });
    });
  }
  function Al(d, g, y, E) {
    const R = ue(b(ne)).select("#" + W), I = js(d, g, y, R);
    R.selectAll("g").each(function(C) {
      C && C.data && !C.data.isTransfer && !I.has(C.data.label) && ue(this).remove();
    });
    const q = R.selectAll("tspan"), O = R.selectAll("g").data(g, (C) => p(C.data)).classed("eliminated", (C) => E.includes(C.data.label) || C.data.isTransfer === !0), P = yt().innerRadius(y * Q).outerRadius(y * Q + 1);
    q.transition("global").duration(ee).attr("transform", (C) => `translate(${P.centroid(C)})`).attr("text-anchor", (C) => Qr(C.startAngle, C.endAngle)), O.select("text").transition("global").duration(ee).attr("transform", (C) => `translate(${P.centroid(C)})`).attr("text-anchor", (C) => Qr(C.startAngle, C.endAngle)).on("end", (C) => T());
    let k = O.size();
    function T(C) {
      k--, k === 0 && (R.remove(), Js(d, g, x, F, y, E));
    }
  }
  function Zs(d, g, y, E, A, R, I, q = !0, O = !1, P = !1) {
    const T = is().sort(null).value((C) => C.value)(y);
    return Qs(d, g, T, E, A, R, I, q, O, P), T;
  }
  function Er() {
    ue(b(ne)).select("#" + M).selectAll(".elected").select("path").style("stroke", N).style("stroke-width", `${H}px`);
  }
  function Qs(d, g, y, E, A, R, I, q, O, P = !1) {
    const k = fn(d), T = br(d), Z = ue(b(ne)).attr("viewBox", `0 0 ${m} ${$}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${E}, ${A})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (re) => k.includes(re.data.label) || re.data.isTransfer === !0).classed("elected", (re) => T.includes(re.data.label) && !re.data.isTransfer).attr("id", (re) => p(re.data));
    P ? Z.style("pointer-events", "none") : Z.on("mouseenter", (re, Re) => ji(re, Re)).on("mouseleave", (re, Re) => Ji(re, Re));
    const Xe = yt().outerRadius(I).innerRadius(R);
    if (O) {
      const re = yt().outerRadius(R + 1).innerRadius(R);
      Z.append("path").attr("d", re).attr("stroke", P ? "none" : R === 0 ? ae : "none").attr("stroke-width", P ? 0 : R === 0 ? oe : 0).attr("fill", P ? "none" : (Re) => Tn(Re)).transition("global").duration(ee).attr("d", (Re) => Xe(Re)).on("end", (Re) => {
        P || Ki();
      });
    } else
      Z.append("path").attr("d", (re) => Xe(re)).attr("fill", P ? "none" : (re) => Tn(re)).attr("stroke", P ? "none" : ae).attr("stroke-width", P ? 0 : oe), P || Ki();
    return q && !P && Js(d, y, E, A, I, k), y;
  }
  function El() {
    const y = ue(b(ne)).select("#" + W).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function Tl() {
    const y = ue(b(ne)).select("#" + W).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function Rl(d, g) {
    const A = ue(b(ne)).select("#" + S).selectAll(".eliminated"), R = yt().innerRadius(d), I = yt().outerRadius(g);
    A.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(ee).attrTween("d", function(q) {
      const O = Gt(g, d);
      return function(P) {
        return I.innerRadius(O(P)), I(q);
      };
    }).attr("fill", (q) => `url(#${Ie(q.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(ee).attrTween("d", function(q) {
      const O = Gt(g, d);
      return function(P) {
        return R.outerRadius(O(P)), R(q);
      };
    }).attr("fill", (q) => Tn(q));
  }
  function Qr(d, g) {
    const y = (d + g) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Ki() {
    ue(b(
      ne
      // force redisplay of text labels
    )).select("#" + W).raise().append("g").remove();
  }
  function ea(d, g, y, E, A, R, I = !1) {
    const O = is().sort(null).value((P) => P.value)(y);
    return ra(d, g, O, E, A, R, I), O;
  }
  function ta(d, g, y, E, A = !1) {
    const R = fn(d), I = br(d), P = ue(b(ne)).select("#" + g).selectAll(".slice").data(y, (T) => p(T.data)), k = P.enter().append("g").attr("class", "slice").attr("id", (T) => p(T.data)).classed("eliminated", !0);
    return A ? k.style("pointer-events", "none") : k.on("mouseenter", (T, C) => ji(T, C)).on("mouseleave", (T, C) => Ji(T, C)), k.append("path").attr("d", (T) => E(T)).attr("fill", A ? "none" : (T) => Tn(T)).attr("stroke", A ? "none" : ae).attr("stroke-width", A ? 0 : oe), P.classed("eliminated", (T) => R.includes(T.data.label)).classed("elected", (T) => I.includes(T.data.label)), A || P.on("mouseenter", (T, C) => ji(T, C)).on("mouseleave", (T, C) => Ji(T, C)), P;
  }
  function na(d, g, y, E, A, R = !1) {
    const I = yt().outerRadius(A).innerRadius(E);
    ta(d, g, y, I, R).select("path").attr("d", (O) => I(O)).attr("fill", R ? "none" : (O) => Tn(O));
  }
  function ra(d, g, y, E, A, R, I = !1) {
    const q = yt().outerRadius(A).innerRadius(E).startAngle((Z) => Z.startAngle).endAngle((Z) => Z.endAngle), O = yt().outerRadius(A).innerRadius(E), k = ue(b(ne)).select("#" + g);
    k.selectAll(".slice").attr("prevStart", (Z) => Z.startAngle).attr("prevEnd", (Z) => Z.endAngle);
    const T = ta(d, g, y, O, I);
    let C = T.size();
    function Pe() {
      C--, C <= 0 && (I || Ki(), k.selectAll(".finished").remove());
    }
    return T.select("path").transition("global").duration(ee).attrTween("d", function(Z) {
      const Xe = Number(ue(this.parentNode).attr("prevStart")), re = Number(ue(this.parentNode).attr("prevEnd")), Re = Gt(Xe, Z.startAngle), ei = Gt(re, Z.endAngle);
      return (Tr) => (q.startAngle(Re(Tr)).endAngle(ei(Tr)), q(Z));
    }).on("end", function(Z) {
      Z.startAngle === Z.endAngle && ue(this).attr("stroke", "none"), Pe();
    }), R && !I && Al(d, y, A, fn(d)), y;
  }
  function ji(d, g) {
    s(g.data.label), i("enter"), a(d.clientX), o(d.clientY);
  }
  function Ji(d, g) {
    s(g.data.label), i("leave");
  }
  function Cl(d, g) {
    i("show-exhausted"), a(d.clientX), o(d.clientY);
  }
  function Sl(d, g) {
    i("hide-exhausted");
  }
  var Nl = {
    pieColors: Fe,
    exhaustedLabel: _t,
    countExhaustedVotes: Ht,
    getEliminatedCandidates: fn,
    getElectedCandidates: br,
    runFullAnimationFn: jn,
    animateOnePhaseFn: Zn,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), se();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), se();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), se();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), se();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), se();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), se();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (g) => {
    }) {
      l(d), se();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), se();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), se();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), se();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), se();
    }
  }, ia = Gd();
  return pi(ia, (d) => de(ne, d), () => b(ne)), Ke(e, ia), Vi(Nl);
}
Hs(
  ml,
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
var jd = /* @__PURE__ */ qt("<div></div>"), Jd = /* @__PURE__ */ qt('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), Zd = /* @__PURE__ */ qt('<div role="button" aria-label="Advance animation phase"></div>');
const Qd = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function yl(e, t) {
  qi(t, !0), Vs(e, Qd);
  let n = fe(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = fe(t, "currentStep", 7, 0), i = fe(t, "disabled", 7, !1), s = fe(t, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function o(h) {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), a());
  }
  var l = {
    get labels() {
      return n();
    },
    set labels(h = ["Eliminate", "Transfer", "Consolidate"]) {
      n(h), se();
    },
    get currentStep() {
      return r();
    },
    set currentStep(h = 0) {
      r(h), se();
    },
    get disabled() {
      return i();
    },
    set disabled(h = !1) {
      i(h), se();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(h = () => {
    }) {
      s(h), se();
    }
  }, u = Zd();
  let f;
  return u.__click = a, u.__keydown = o, di(u, 21, n, hi, (h, c, p) => {
    var m = Jd(), $ = dn(m);
    {
      var _ = (K) => {
        var Q = jd();
        let ee;
        Kt(() => ee = ri(Q, 1, "connector svelte-1l4eyw0", null, ee, { completed: !i() && p <= r() })), Ke(K, Q);
      };
      er($, (K) => {
        p > 0 && K(_);
      });
    }
    var x = Qe($, 2), F = Ue(x);
    let S;
    var M = Qe(F, 2);
    let D;
    var W = Ue(M, !0);
    qe(M), qe(x), Kt(() => {
      S = ri(F, 1, "dot svelte-1l4eyw0", null, S, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), D = ri(M, 1, "label svelte-1l4eyw0", null, D, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), pn(W, b(c));
    }), Ke(h, m);
  }), qe(u), Kt(() => {
    f = ri(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), ya(u, "tabindex", i() ? -1 : 0), ya(u, "aria-disabled", i());
  }), Ke(e, u), Vi(l);
}
Hu(["click", "keydown"]);
Hs(yl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var ep = /* @__PURE__ */ qt("<span> </span> <!>", 1), tp = /* @__PURE__ */ qt("About to eliminate: <!>", 1), np = /* @__PURE__ */ qt("<span> </span> <!>", 1), rp = /* @__PURE__ */ qt(" <!>", 1), ip = /* @__PURE__ */ qt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), sp = /* @__PURE__ */ qt("<span> </span> <br/>", 1), ap = /* @__PURE__ */ qt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const op = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;max-width:calc(100vw - 24px);text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.pie-chart-container.svelte-1r6y5gl {width:100%;min-width:auto;flex-grow:0;margin:0 auto;margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:20px;}

/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function lp(e, t) {
  qi(t, !0), Vs(e, op);
  const n = 0.85;
  let r = fe(t, "electionSummary", 7), i = fe(t, "currentRound", 7, 1), s = fe(t, "requestRoundChange", 7, (w) => {
  }), a = fe(t, "candidateColors", 23, () => []), o = fe(t, "textForWinner", 7, "elected"), l = fe(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = fe(t, "firstRoundDeterminesPercentages", 7, !1), f = fe(t, "showCaptions", 7, !1);
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
  let c = /* @__PURE__ */ cn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ Ee(null), m = /* @__PURE__ */ Ee(null), $ = /* @__PURE__ */ Ee(""), _ = /* @__PURE__ */ Ee(kn([])), x = /* @__PURE__ */ Ee(""), F = /* @__PURE__ */ Ee(""), S = /* @__PURE__ */ Ee(0), M = /* @__PURE__ */ Ee(0), D = /* @__PURE__ */ cn(() => W(r()));
  function W(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (Y) {
        return console.error("Failed to parse JSON string:", Y), {};
      }
    return w || {};
  }
  function K(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(w, Y, te) {
    w.style.left = Y + "px", w.style.top = te + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const ie = w.getBoundingClientRect();
      let ze = Y, lt = te + 20;
      ze + ie.width > window.innerWidth - 12 && (ze = window.innerWidth - ie.width - 12), ze < 12 && (ze = 12), lt + ie.height > window.innerHeight - 12 && (lt = te - ie.height - 12), w.style.left = ze + "px", w.style.top = lt + "px";
    });
  }
  function ee() {
    switch (b(x)) {
      case "enter":
        ((w) => {
          var Y = Jl(w, 2);
          de(_, Y[0], !0), de($, Y[1], !0);
        })(ae(b(F), i())), b(p) && (Q(b(p), b(S) || 0, b(M) || 0), b(p).style.opacity = String(n));
        break;
      case "leave":
        b(p) && (b(p).style.opacity = "0"), de(_, [], !0), de($, "");
        break;
      case "show-exhausted":
        b(m) && (Q(b(m), b(S) || 0, b(M) || 0), b(m).style.opacity = String(n));
        break;
      case "hide-exhausted":
        b(m) && (b(m).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", b(x));
        break;
    }
  }
  Is(() => ee());
  function J(w, Y) {
    return w === 1 ? Y ? "vote was" : "vote will be" : Y ? "votes were" : "votes will be";
  }
  function ae(w, Y) {
    const te = [], ve = w === "exhausted" ? _t() : w;
    let be;
    w === "exhausted" ? be = z(1) : be = b(D).results[0].tally[w], te.push(`${ve} started with ${be} votes.`);
    for (let ie = 1; ie <= Y; ie++) {
      ie === Y && (w === "exhausted" ? be = z(Y) : be = b(D).results[Y - 1].tally[w], te.push(`${ve} has ${be} votes at round ${Y}.`));
      const ze = b(D).results[ie - 1].tallyResults, lt = xe(ie);
      for (let Be = 0; Be < ze.length; Be++) {
        const ut = ze[Be].transfers, ge = ze[Be].eliminated, _e = ze[Be].elected;
        if (!lt) {
          if (ge)
            ge === w && te.push(`${ve} will be eliminated on round ${ie}.`);
          else if (w === _e && (te.push(`${ve} ${b(c).event} on round ${ie}.`), ut))
            for (let [Le, Yt] of Object.entries(ut))
              te.push(`${Yt} ${J(Number(Yt), ie < Y)} transferred to ${Le} on round ${ie}.`);
        }
        const $e = ge || _e;
        if ($e) {
          const Le = Number(ut[w]);
          Le && te.push(`${Le} ${J(Le, ie < Y)} transferred from ${$e} on round ${ie}.`);
        }
      }
    }
    return [te, ve];
  }
  function oe() {
    let w = 0;
    for (let Y = 1; Y <= b(D).results.length; Y++) {
      if (xe(Y)) continue;
      const te = b(D).results[Y - 1].tallyResults;
      for (let ve = 0; ve < te.length; ve++)
        te[ve].elected && w++;
    }
    return w;
  }
  let N, H = /* @__PURE__ */ Ee(0);
  function Ie(w) {
    var be;
    return !((be = b(D)) != null && be.results) || w < 1 || w > b(D).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [b(D).results[w - 1].tallyResults.some((ie) => ie.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function Me(w) {
    var te;
    if (!((te = b(D)) != null && te.results) || w < 1 || w > b(D).results.length || w === b(D).results.length) return !0;
    const Y = b(D).results[w - 1].tallyResults;
    return Y.length === 0 || Y.every((ve) => Object.keys(ve.transfers).length === 0);
  }
  function xe(w) {
    return l() && b(D).results && w === b(D).results.length;
  }
  function ce(w) {
    return xe(w) ? [] : N ? N.getEliminatedCandidates(w) : [];
  }
  function le(w) {
    return xe(w) ? [] : N ? N.getElectedCandidates(w) : [];
  }
  function z(w) {
    return N ? N.countExhaustedVotes(w) : 0;
  }
  function Fe() {
    N && N.animateOnePhaseFn && N.animateOnePhaseFn();
  }
  function _t() {
    return N ? N.exhaustedLabel : "";
  }
  function ne() {
    return N ? N.pieColors : {};
  }
  var bn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), se();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), se();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (Y) => {
    }) {
      s(w), se();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), se();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), se();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), se();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), se();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), se();
    }
  }, Oe = ap(), ot = dn(Oe), $n = Ue(ot);
  {
    let w = /* @__PURE__ */ cn(() => Ie(i())), Y = /* @__PURE__ */ cn(() => Me(i()));
    yl($n, {
      get labels() {
        return b(w);
      },
      get currentStep() {
        return b(H);
      },
      get disabled() {
        return b(Y);
      },
      onAdvance: Fe
    });
  }
  qe(ot);
  var we = Qe(ot, 4), mt = Ue(we), Ht = Ue(mt), An = Ue(Ht);
  pi(
    ml(An, {
      get jsonData() {
        return b(D);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: K,
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
        return b(x);
      },
      set mouseEventType(w) {
        de(x, w, !0);
      },
      get mouseData() {
        return b(F);
      },
      set mouseData(w) {
        de(F, w, !0);
      },
      get mouseX() {
        return b(S);
      },
      set mouseX(w) {
        de(S, w, !0);
      },
      get mouseY() {
        return b(M);
      },
      set mouseY(w) {
        de(M, w, !0);
      },
      get displayPhase() {
        return b(H);
      },
      set displayPhase(w) {
        de(H, w, !0);
      }
    }),
    (w) => N = w,
    () => N
  ), qe(Ht), qe(mt);
  var jr = Qe(mt, 2);
  {
    var Jr = (w) => {
      var Y = ip(), te = dn(Y), ve = Ue(te);
      qe(te);
      var be = Qe(te, 2), ie = Ue(be);
      {
        var ze = (_e) => {
          var $e = tp(), Le = Qe(dn($e));
          di(Le, 17, () => ce(i()), hi, (Yt, jn, En) => {
            var me = ep(), zt = dn(me);
            let Bt;
            var Jn = Ue(zt, !0);
            qe(zt);
            var Zn = Qe(zt, 2);
            {
              var $r = (Xt) => {
                var Wt = pa(", ");
                Ke(Xt, Wt);
              }, Ar = /* @__PURE__ */ cn(() => En < ce(i()).length - 1);
              er(Zn, (Xt) => {
                b(Ar) && Xt($r);
              });
            }
            Kt(
              (Xt) => {
                Bt = ma(zt, "", Bt, Xt), pn(Jn, b(jn));
              },
              [() => ({ color: ne()[b(jn)] })]
            ), Ke(Yt, me);
          }), Ke(_e, $e);
        }, lt = /* @__PURE__ */ cn(() => ce(i()).length > 0);
        er(ie, (_e) => {
          b(lt) && _e(ze);
        });
      }
      var Be = Qe(ie, 2);
      {
        var ut = (_e) => {
          var $e = rp(), Le = dn($e), Yt = Qe(Le);
          di(Yt, 17, () => le(i()), hi, (jn, En, me) => {
            var zt = np(), Bt = dn(zt);
            let Jn;
            var Zn = Ue(Bt, !0);
            qe(Bt);
            var $r = Qe(Bt, 2);
            {
              var Ar = (Wt) => {
                var Tn = pa(", ");
                Ke(Wt, Tn);
              }, Xt = /* @__PURE__ */ cn(() => me < le(i()).length - 1);
              er($r, (Wt) => {
                b(Xt) && Wt(Ar);
              });
            }
            Kt(
              (Wt) => {
                Jn = ma(Bt, "", Jn, Wt), pn(Zn, b(En));
              },
              [() => ({ color: ne()[b(En)] })]
            ), Ke(jn, zt);
          }), Kt(() => pn(Le, `${b(c).caption ?? ""}: `)), Ke(_e, $e);
        }, ge = /* @__PURE__ */ cn(() => le(i()).length > 0);
        er(Be, (_e) => {
          b(ge) && _e(ut);
        });
      }
      qe(be), Kt((_e) => pn(ve, `${b(D).config.contest ?? ""}, ${_e ?? ""} ${b(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [oe]), Ke(w, Y);
    };
    er(jr, (w) => {
      f() && w(Jr);
    });
  }
  qe(we);
  var Kn = Qe(we, 2), un = Ue(Kn), Gi = Ue(un, !0);
  qe(un);
  var Zr = Qe(un, 2);
  di(Zr, 17, () => b(_), hi, (w, Y) => {
    var te = sp(), ve = dn(te), be = Ue(ve, !0);
    qe(ve), os(2), Kt(() => pn(be, b(Y))), Ke(w, te);
  }), qe(Kn), pi(Kn, (w) => de(p, w), () => b(p));
  var fn = Qe(Kn, 2), br = Ue(fn);
  return os(2), qe(fn), pi(fn, (w) => de(m, w), () => b(m)), Kt(
    (w) => {
      pn(Gi, b($)), pn(br, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [_t]
  ), Ke(e, Oe), Vi(bn);
}
customElements.define("pie-chart", Hs(
  lp,
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
