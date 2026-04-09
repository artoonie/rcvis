var Ll = Object.defineProperty;
var aa = (e) => {
  throw TypeError(e);
};
var ql = (e, t, n) => t in e ? Ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => ql(e, typeof t != "symbol" ? t + "" : t, n), Qi = (e, t, n) => t.has(e) || aa("Cannot " + n);
var v = (e, t, n) => (Qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? aa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), V = (e, t, n, r) => (Qi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), xe = (e, t, n) => (Qi(e, t, "access private method"), n);
var Va;
typeof window < "u" && ((Va = window.__svelte ?? (window.__svelte = {})).v ?? (Va.v = /* @__PURE__ */ new Set())).add("5");
const Vl = 1, zl = 2, Ba = 4, Hl = 8, Yl = 16, Bl = 1, Xl = 4, Wl = 8, Ul = 16, Gl = 1, Kl = 2, Ss = "[", Oi = "[!", Ns = "]", cr = {}, Te = Symbol(), Xa = "http://www.w3.org/1999/xhtml", as = !1;
var Wa = Array.isArray, jl = Array.prototype.indexOf, hr = Array.prototype.includes, Fi = Array.from, bi = Object.keys, $i = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, Jl = Object.getOwnPropertyDescriptors, Zl = Object.prototype, Ql = Array.prototype, Ua = Object.getPrototypeOf, oa = Object.isExtensible;
const eu = () => {
};
function tu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ga() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function nu(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Re = 2, Ir = 4, Ii = 8, Ka = 1 << 24, cn = 16, Et = 32, An = 64, ja = 128, vt = 512, $e = 1024, Se = 2048, At = 4096, it = 8192, on = 16384, wr = 32768, dr = 65536, la = 1 << 17, Ja = 1 << 18, Kn = 1 << 19, ru = 1 << 20, sn = 1 << 25, Xn = 65536, os = 1 << 21, ks = 1 << 22, yn = 1 << 23, Dr = Symbol("$state"), Za = Symbol("legacy props"), iu = Symbol(""), Nn = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var za;
const su = ((za = globalThis.document) == null ? void 0 : /* @__PURE__ */ za.contentType.includes("xml")) ?? !1, Gr = 3, xr = 8;
function au(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ou() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function lu(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function uu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function du() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _u() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Li(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function yu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function an(e) {
  j = e;
}
let B;
function qe(e) {
  if (e === null)
    throw Li(), cr;
  return B = e;
}
function qi() {
  return qe(/* @__PURE__ */ zt(B));
}
function Ie(e) {
  if (j) {
    if (/* @__PURE__ */ zt(B) !== null)
      throw Li(), cr;
    B = e;
  }
}
function ls(e = 1) {
  if (j) {
    for (var t = e, n = B; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n);
    B = n;
  }
}
function Ai(e = !0) {
  for (var t = 0, n = B; ; ) {
    if (n.nodeType === xr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ns) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ss || r === Oi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n)
    );
    e && n.remove(), n = i;
  }
}
function Qa(e) {
  if (!e || e.nodeType !== xr)
    throw Li(), cr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function eo(e) {
  return e === this.v;
}
function wu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function to(e) {
  return !wu(e, this.v);
}
let xu = !1, at = null;
function pr(e) {
  at = e;
}
function Vi(e, t = !1, n) {
  at = {
    p: at,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function zi(e) {
  var t = (
    /** @type {ComponentContext} */
    at
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Co(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, at = t.p, e ?? /** @type {T} */
  {};
}
function no() {
  return !0;
}
let kn = [];
function ro() {
  var e = kn;
  kn = [], tu(e);
}
function wn(e) {
  if (kn.length === 0 && !Or) {
    var t = kn;
    queueMicrotask(() => {
      t === kn && ro();
    });
  }
  kn.push(e);
}
function bu() {
  for (; kn.length > 0; )
    ro();
}
function io(e) {
  var t = J;
  if (t === null)
    return Y.f |= yn, e;
  if ((t.f & wr) === 0 && (t.f & Ir) === 0)
    throw e;
  vr(e, t);
}
function vr(e, t) {
  for (; t !== null; ) {
    if ((t.f & ja) !== 0) {
      if ((t.f & wr) === 0)
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
const $u = -7169;
function pe(e, t) {
  e.f = e.f & $u | t;
}
function Ms(e) {
  (e.f & vt) !== 0 || e.deps === null ? pe(e, $e) : pe(e, At);
}
function so(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Re) === 0 || (t.f & Xn) === 0 || (t.f ^= Xn, so(
        /** @type {Derived} */
        t.deps
      ));
}
function ao(e, t, n) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & At) !== 0 && n.add(e), so(e.deps), pe(e, $e);
}
const ni = /* @__PURE__ */ new Set();
let K = null, Ce = null, Ke = [], Hi = null, us = !1, Or = !1;
var ir, sr, On, ar, Yr, Br, Fn, Qt, or, Vt, fs, cs, oo;
const js = class js {
  constructor() {
    H(this, Vt);
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
    H(this, ir, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, sr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    H(this, On, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    H(this, ar, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, Yr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, Br, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, Fn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    H(this, Qt, /* @__PURE__ */ new Map());
    he(this, "is_fork", !1);
    H(this, or, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, ar) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, Qt).has(t) || v(this, Qt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = v(this, Qt).get(t);
    if (n) {
      v(this, Qt).delete(t);
      for (var r of n.d)
        pe(r, Se), bt(r);
      for (r of n.m)
        pe(r, At), bt(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Ke = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      xe(this, Vt, fs).call(this, s, n, r);
    if (this.is_deferred()) {
      xe(this, Vt, cs).call(this, r), xe(this, Vt, cs).call(this, n);
      for (const [s, a] of v(this, Qt))
        co(s, a);
    } else {
      for (const s of v(this, ir)) s();
      v(this, ir).clear(), v(this, On) === 0 && xe(this, Vt, oo).call(this), K = null, ua(r), ua(n), (i = v(this, Yr)) == null || i.resolve();
    }
    Ce = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Te && !this.previous.has(t) && this.previous.set(t, n), (t.f & yn) === 0 && (this.current.set(t, t.v), Ce == null || Ce.set(t, t.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, Ce = null);
  }
  flush() {
    if (this.activate(), Ke.length > 0) {
      if (lo(), K !== null && K !== this)
        return;
    } else v(this, On) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, sr)) t(this);
    v(this, sr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    V(this, On, v(this, On) + 1), t && V(this, ar, v(this, ar) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    V(this, On, v(this, On) - 1), t && V(this, ar, v(this, ar) - 1), !v(this, or) && (V(this, or, !0), wn(() => {
      V(this, or, !1), this.is_deferred() ? Ke.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, Br))
      v(this, Fn).delete(t), pe(t, Se), bt(t);
    for (const t of v(this, Fn))
      pe(t, At), bt(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, ir).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, sr).add(t);
  }
  settled() {
    return (v(this, Yr) ?? V(this, Yr, Ga())).promise;
  }
  static ensure() {
    if (K === null) {
      const t = K = new js();
      ni.add(K), Or || wn(() => {
        K === t && t.flush();
      });
    }
    return K;
  }
  apply() {
  }
};
ir = new WeakMap(), sr = new WeakMap(), On = new WeakMap(), ar = new WeakMap(), Yr = new WeakMap(), Br = new WeakMap(), Fn = new WeakMap(), Qt = new WeakMap(), or = new WeakMap(), Vt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
fs = function(t, n, r) {
  t.f ^= $e;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Et | An)) !== 0, l = o && (a & $e) !== 0, u = l || (a & it) !== 0 || v(this, Qt).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= $e : s !== null && (a & (Ir | Ii | Ka)) !== 0 ? s.b.defer_effect(i) : (a & Ir) !== 0 ? n.push(i) : Kr(i) && ((a & cn) !== 0 && v(this, Fn).add(i), _r(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var p = i.parent;
    for (i = i.next; i === null && p !== null; )
      p === s && (s = null), i = p.next, p = p.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
cs = function(t) {
  for (var n = 0; n < t.length; n += 1)
    ao(t[n], v(this, Br), v(this, Fn));
}, oo = function() {
  var i;
  if (ni.size > 1) {
    this.previous.clear();
    var t = Ce, n = !0;
    for (const s of ni) {
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
        var r = Ke;
        Ke = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          uo(f, o, l, u);
        if (Ke.length > 0) {
          K = s, s.apply();
          for (const f of Ke)
            xe(i = s, Vt, fs).call(i, f, [], []);
          s.deactivate();
        }
        Ke = r;
      }
    }
    K = null, Ce = t;
  }
  this.committed = !0, ni.delete(this);
};
let ln = js;
function ne(e) {
  var t = Or;
  Or = !0;
  try {
    for (var n; ; ) {
      if (bu(), Ke.length === 0 && (K == null || K.flush(), Ke.length === 0))
        return Hi = null, /** @type {T} */
        n;
      lo();
    }
  } finally {
    Or = t;
  }
}
function lo() {
  us = !0;
  var e = null;
  try {
    for (var t = 0; Ke.length > 0; ) {
      var n = ln.ensure();
      if (t++ > 1e3) {
        var r, i;
        Au();
      }
      n.process(Ke), xn.clear();
    }
  } finally {
    Ke = [], us = !1, Hi = null;
  }
}
function Au() {
  try {
    hu();
  } catch (e) {
    vr(e, Hi);
  }
}
let yt = null;
function ua(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (on | it)) === 0 && Kr(r) && (yt = /* @__PURE__ */ new Set(), _r(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && No(r), (yt == null ? void 0 : yt.size) > 0)) {
        xn.clear();
        for (const i of yt) {
          if ((i.f & (on | it)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            yt.has(a) && (yt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (on | it)) === 0 && _r(l);
          }
        }
        yt.clear();
      }
    }
    yt = null;
  }
}
function uo(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Re) !== 0 ? uo(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (ks | cn)) !== 0 && (s & Se) === 0 && fo(i, t, r) && (pe(i, Se), bt(
        /** @type {Effect} */
        i
      ));
    }
}
function fo(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (hr.call(t, i))
        return !0;
      if ((i.f & Re) !== 0 && fo(
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
function bt(e) {
  for (var t = Hi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (us && t === J && (n & cn) !== 0 && (n & Ja) === 0)
      return;
    if ((n & (An | Et)) !== 0) {
      if ((n & $e) === 0) return;
      t.f ^= $e;
    }
  }
  Ke.push(t);
}
function co(e, t) {
  if (!((e.f & Et) !== 0 && (e.f & $e) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & At) !== 0 && t.m.push(e), pe(e, $e);
    for (var n = e.first; n !== null; )
      co(n, t), n = n.next;
  }
}
function Eu(e) {
  let t = 0, n = Wn(0), r;
  return () => {
    Os() && ($(n), Is(() => (t === 0 && (r = Xi(() => e(() => Fr(n)))), t += 1, () => {
      wn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Fr(n));
      });
    })));
  };
}
var Tu = dr | Kn | ja;
function Cu(e, t, n) {
  new Ru(e, t, n);
}
var nt, Xr, Pt, In, Dt, ht, Ue, Ot, en, mn, Ln, tn, lr, qn, ur, fr, nn, Pi, ve, ho, po, hs, fi, ci, ds;
class Ru {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    H(this, ve);
    /** @type {Boundary | null} */
    he(this, "parent");
    he(this, "is_pending", !1);
    /** @type {TemplateNode} */
    H(this, nt);
    /** @type {TemplateNode | null} */
    H(this, Xr, j ? B : null);
    /** @type {BoundaryProps} */
    H(this, Pt);
    /** @type {((anchor: Node) => void)} */
    H(this, In);
    /** @type {Effect} */
    H(this, Dt);
    /** @type {Effect | null} */
    H(this, ht, null);
    /** @type {Effect | null} */
    H(this, Ue, null);
    /** @type {Effect | null} */
    H(this, Ot, null);
    /** @type {DocumentFragment | null} */
    H(this, en, null);
    /** @type {TemplateNode | null} */
    H(this, mn, null);
    H(this, Ln, 0);
    H(this, tn, 0);
    H(this, lr, !1);
    H(this, qn, !1);
    /** @type {Set<Effect>} */
    H(this, ur, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, fr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, nn, null);
    H(this, Pi, Eu(() => (V(this, nn, Wn(v(this, Ln))), () => {
      V(this, nn, null);
    })));
    V(this, nt, t), V(this, Pt, n), V(this, In, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, Pt).pending, V(this, Dt, Ls(() => {
      if (J.b = this, j) {
        const s = v(this, Xr);
        qi(), /** @type {Comment} */
        s.nodeType === xr && /** @type {Comment} */
        s.data === Oi ? xe(this, ve, po).call(this) : (xe(this, ve, ho).call(this), v(this, tn) === 0 && (this.is_pending = !1));
      } else {
        var i = xe(this, ve, hs).call(this);
        try {
          V(this, ht, pt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, tn) > 0 ? xe(this, ve, ci).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, mn)) == null || s.remove();
      };
    }, Tu)), j && V(this, nt, B);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ao(t, v(this, ur), v(this, fr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Pt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    xe(this, ve, ds).call(this, t), V(this, Ln, v(this, Ln) + t), !(!v(this, nn) || v(this, lr)) && (V(this, lr, !0), wn(() => {
      V(this, lr, !1), v(this, nn) && gr(v(this, nn), v(this, Ln));
    }));
  }
  get_effect_pending() {
    return v(this, Pi).call(this), $(
      /** @type {Source<number>} */
      v(this, nn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, Pt).onerror;
    let r = v(this, Pt).failed;
    if (v(this, qn) || !n && !r)
      throw t;
    v(this, ht) && (Ve(v(this, ht)), V(this, ht, null)), v(this, Ue) && (Ve(v(this, Ue)), V(this, Ue, null)), v(this, Ot) && (Ve(v(this, Ot)), V(this, Ot, null)), j && (qe(
      /** @type {TemplateNode} */
      v(this, Xr)
    ), ls(), qe(Ai()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        yu();
        return;
      }
      i = !0, s && mu(), ln.ensure(), V(this, Ln, 0), v(this, Ot) !== null && Hn(v(this, Ot), () => {
        V(this, Ot, null);
      }), this.is_pending = this.has_pending_snippet(), V(this, ht, xe(this, ve, fi).call(this, () => (V(this, qn, !1), pt(() => v(this, In).call(this, v(this, nt)))))), v(this, tn) > 0 ? xe(this, ve, ci).call(this) : this.is_pending = !1;
    };
    wn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        vr(o, v(this, Dt) && v(this, Dt).parent);
      }
      r && V(this, Ot, xe(this, ve, fi).call(this, () => {
        ln.ensure(), V(this, qn, !0);
        try {
          return pt(() => {
            r(
              v(this, nt),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return vr(
            o,
            /** @type {Effect} */
            v(this, Dt).parent
          ), null;
        } finally {
          V(this, qn, !1);
        }
      }));
    });
  }
}
nt = new WeakMap(), Xr = new WeakMap(), Pt = new WeakMap(), In = new WeakMap(), Dt = new WeakMap(), ht = new WeakMap(), Ue = new WeakMap(), Ot = new WeakMap(), en = new WeakMap(), mn = new WeakMap(), Ln = new WeakMap(), tn = new WeakMap(), lr = new WeakMap(), qn = new WeakMap(), ur = new WeakMap(), fr = new WeakMap(), nn = new WeakMap(), Pi = new WeakMap(), ve = new WeakSet(), ho = function() {
  try {
    V(this, ht, pt(() => v(this, In).call(this, v(this, nt))));
  } catch (t) {
    this.error(t);
  }
}, po = function() {
  const t = v(this, Pt).pending;
  t && (V(this, Ue, pt(() => t(v(this, nt)))), wn(() => {
    var n = xe(this, ve, hs).call(this);
    V(this, ht, xe(this, ve, fi).call(this, () => (ln.ensure(), pt(() => v(this, In).call(this, n))))), v(this, tn) > 0 ? xe(this, ve, ci).call(this) : (Hn(
      /** @type {Effect} */
      v(this, Ue),
      () => {
        V(this, Ue, null);
      }
    ), this.is_pending = !1);
  }));
}, hs = function() {
  var t = v(this, nt);
  return this.is_pending && (V(this, mn, st()), v(this, nt).before(v(this, mn)), t = v(this, mn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
fi = function(t) {
  var n = J, r = Y, i = at;
  qt(v(this, Dt)), _t(v(this, Dt)), pr(v(this, Dt).ctx);
  try {
    return t();
  } catch (s) {
    return io(s), null;
  } finally {
    qt(n), _t(r), pr(i);
  }
}, ci = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, Pt).pending
  );
  v(this, ht) !== null && (V(this, en, document.createDocumentFragment()), v(this, en).append(
    /** @type {TemplateNode} */
    v(this, mn)
  ), Po(v(this, ht), v(this, en))), v(this, Ue) === null && V(this, Ue, pt(() => t(v(this, nt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ds = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && xe(n = this.parent, ve, ds).call(n, t);
    return;
  }
  if (V(this, tn, v(this, tn) + t), v(this, tn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, ur))
      pe(r, Se), bt(r);
    for (const r of v(this, fr))
      pe(r, At), bt(r);
    v(this, ur).clear(), v(this, fr).clear(), v(this, Ue) && Hn(v(this, Ue), () => {
      V(this, Ue, null);
    }), v(this, en) && (v(this, nt).before(v(this, en)), V(this, en, null));
  }
};
function Su(e, t, n, r) {
  const i = Yi;
  var s = e.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = K, o = (
    /** @type {Effect} */
    J
  ), l = Nu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (d) {
      (o.f & on) === 0 && vr(d, o);
    }
    a == null || a.deactivate(), ps();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function p() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ ku(c))).then((c) => f([...t.map(i), ...c])).catch((c) => vr(c, o));
  }
  u ? u.then(p) : p();
}
function Nu() {
  var e = J, t = Y, n = at, r = K;
  return function(s = !0) {
    qt(e), _t(t), pr(n), s && (r == null || r.activate());
  };
}
function ps() {
  qt(null), _t(null), pr(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  var t = Re | Se, n = Y !== null && (Y.f & Re) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return J !== null && (J.f |= Kn), {
    ctx: at,
    deps: null,
    effects: null,
    equals: eo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Te
    ),
    wv: 0,
    parent: n ?? J,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ku(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    J
  );
  r === null && ou();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Wn(
    /** @type {V} */
    Te
  ), o = !Y, l = /* @__PURE__ */ new Map();
  return zu(() => {
    var d;
    var u = Ga();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === K && f.committed && f.deactivate(), ps();
      });
    } catch (y) {
      u.reject(y), ps();
    }
    var f = (
      /** @type {Batch} */
      K
    );
    if (o) {
      var p = i.is_rendered();
      i.update_pending_count(1), f.increment(p), (d = l.get(f)) == null || d.reject(Nn), l.delete(f), l.set(f, u);
    }
    const c = (y, x = void 0) => {
      if (f.activate(), x)
        x !== Nn && (a.f |= yn, gr(a, x));
      else {
        (a.f & yn) !== 0 && (a.f ^= yn), gr(a, y);
        for (const [m, b] of l) {
          if (l.delete(m), m === f) break;
          b.reject(Nn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(p));
    };
    u.promise.then(c, (y) => c(null, y || "unknown"));
  }), Lu(() => {
    for (const u of l.values())
      u.reject(Nn);
  }), new Promise((u) => {
    function f(p) {
      function c() {
        p === s ? u(a) : f(s);
      }
      p.then(c, c);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  const t = /* @__PURE__ */ Yi(e);
  return Do(t), t;
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  const t = /* @__PURE__ */ Yi(e);
  return t.equals = to, t;
}
function Mu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ve(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Pu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Re) === 0)
      return (t.f & on) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ps(e) {
  var t, n = J;
  qt(Pu(e));
  try {
    e.f &= ~Xn, Mu(e), t = Lo(e);
  } finally {
    qt(n);
  }
  return t;
}
function go(e) {
  var t = Ps(e);
  if (!e.equals(t) && (e.wv = Fo(), (!(K != null && K.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    pe(e, $e);
    return;
  }
  $n || (Ce !== null ? (Os() || K != null && K.is_fork) && Ce.set(e, t) : Ms(e));
}
function Du(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Nn), r.teardown = eu, r.ac = null, Lr(r, 0), qs(r));
}
function _o(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && _r(t);
}
let vs = /* @__PURE__ */ new Set();
const xn = /* @__PURE__ */ new Map();
let mo = !1;
function Wn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: eo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  const n = Wn(e);
  return Do(n), n;
}
// @__NO_SIDE_EFFECTS__
function yo(e, t = !1, n = !0) {
  const r = Wn(e);
  return t || (r.equals = to), r;
}
function de(e, t, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$t || (Y.f & la) !== 0) && no() && (Y.f & (Re | cn | ks | la)) !== 0 && (gt === null || !hr.call(gt, e)) && _u();
  let r = n ? Mn(t) : t;
  return gr(e, r);
}
function gr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    $n ? xn.set(e, t) : xn.set(e, n), e.v = t;
    var r = ln.ensure();
    if (r.capture(e, n), (e.f & Re) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && Ps(i), Ms(i);
    }
    e.wv = Fo(), wo(e, Se), J !== null && (J.f & $e) !== 0 && (J.f & (Et | An)) === 0 && (ct === null ? Bu([e]) : ct.push(e)), !r.is_fork && vs.size > 0 && !mo && Ou();
  }
  return t;
}
function Ou() {
  mo = !1;
  for (const e of vs)
    (e.f & $e) !== 0 && pe(e, At), Kr(e) && _r(e);
  vs.clear();
}
function Fr(e) {
  de(e, e.v + 1);
}
function wo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Se) === 0;
      if (o && pe(s, t), (a & Re) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Ce == null || Ce.delete(l), (a & Xn) === 0 && (a & vt && (s.f |= Xn), wo(l, At));
      } else o && ((a & cn) !== 0 && yt !== null && yt.add(
        /** @type {Effect} */
        s
      ), bt(
        /** @type {Effect} */
        s
      ));
    }
}
function Mn(e) {
  if (typeof e != "object" || e === null || Dr in e)
    return e;
  const t = Ua(e);
  if (t !== Zl && t !== Ql)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wa(e), i = /* @__PURE__ */ be(0), s = Yn, a = (o) => {
    if (Yn === s)
      return o();
    var l = Y, u = Yn;
    _t(null), ha(s);
    var f = o();
    return _t(l), ha(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ be(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var p = /* @__PURE__ */ be(u.value);
          return n.set(l, p), p;
        }) : de(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ be(Te));
            n.set(l, f), Fr(i);
          }
        } else
          de(u, Te), Fr(i);
        return !0;
      },
      get(o, l, u) {
        var d;
        if (l === Dr)
          return e;
        var f = n.get(l), p = l in o;
        if (f === void 0 && (!p || (d = zn(o, l)) != null && d.writable) && (f = a(() => {
          var y = Mn(p ? o[l] : Te), x = /* @__PURE__ */ be(y);
          return x;
        }), n.set(l, f)), f !== void 0) {
          var c = $(f);
          return c === Te ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = $(f));
        } else if (u === void 0) {
          var p = n.get(l), c = p == null ? void 0 : p.v;
          if (p !== void 0 && c !== Te)
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
        if (l === Dr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Te || Reflect.has(o, l);
        if (u !== void 0 || J !== null && (!f || (c = zn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var d = f ? Mn(o[l]) : Te, y = /* @__PURE__ */ be(d);
            return y;
          }), n.set(l, u));
          var p = $(u);
          if (p === Te)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var M;
        var p = n.get(l), c = l in o;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          p.v; d += 1) {
            var y = n.get(d + "");
            y !== void 0 ? de(y, Te) : d in o && (y = a(() => /* @__PURE__ */ be(Te)), n.set(d + "", y));
          }
        if (p === void 0)
          (!c || (M = zn(o, l)) != null && M.writable) && (p = a(() => /* @__PURE__ */ be(void 0)), de(p, Mn(u)), n.set(l, p));
        else {
          c = p.v !== Te;
          var x = a(() => Mn(u));
          de(p, x);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= b.v && de(b, D + 1);
          }
          Fr(i);
        }
        return !0;
      },
      ownKeys(o) {
        $(i);
        var l = Reflect.ownKeys(o).filter((p) => {
          var c = n.get(p);
          return c === void 0 || c.v !== Te;
        });
        for (var [u, f] of n)
          f.v !== Te && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        gu();
      }
    }
  );
}
var fa, xo, bo, $o;
function gs() {
  if (fa === void 0) {
    fa = window, xo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    bo = zn(t, "firstChild").get, $o = zn(t, "nextSibling").get, oa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), oa(n) && (n.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return (
    /** @type {TemplateNode | null} */
    bo.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return (
    /** @type {TemplateNode | null} */
    $o.call(e)
  );
}
function We(e, t) {
  if (!j)
    return /* @__PURE__ */ un(e);
  var n = /* @__PURE__ */ un(B);
  if (n === null)
    n = B.appendChild(st());
  else if (t && n.nodeType !== Gr) {
    var r = st();
    return n == null || n.before(r), qe(r), r;
  }
  return t && Bi(
    /** @type {Text} */
    n
  ), qe(n), n;
}
function gn(e, t = !1) {
  if (!j) {
    var n = /* @__PURE__ */ un(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ zt(n) : n;
  }
  if (t) {
    if ((B == null ? void 0 : B.nodeType) !== Gr) {
      var r = st();
      return B == null || B.before(r), qe(r), r;
    }
    Bi(
      /** @type {Text} */
      B
    );
  }
  return B;
}
function et(e, t = 1, n = !1) {
  let r = j ? B : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ zt(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Gr) {
      var s = st();
      return r === null ? i == null || i.after(s) : r.before(s), qe(s), s;
    }
    Bi(
      /** @type {Text} */
      r
    );
  }
  return qe(r), r;
}
function Ao(e) {
  e.textContent = "";
}
function Eo() {
  return !1;
}
function Ds(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Xa, e, void 0)
  );
}
function Bi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Gr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function To(e) {
  var t = Y, n = J;
  _t(null), qt(null);
  try {
    return e();
  } finally {
    _t(t), qt(n);
  }
}
function Fu(e) {
  J === null && (Y === null && cu(), fu()), $n && uu();
}
function Iu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ht(e, t, n) {
  var r = J;
  r !== null && (r.f & it) !== 0 && (e |= it);
  var i = {
    ctx: at,
    deps: null,
    nodes: null,
    f: e | Se | vt,
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
      _r(i);
    } catch (o) {
      throw Ve(i), o;
    }
  else t !== null && bt(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Kn) === 0 && (s = s.first, (e & cn) !== 0 && (e & dr) !== 0 && s !== null && (s.f |= dr)), s !== null && (s.parent = r, r !== null && Iu(s, r), Y !== null && (Y.f & Re) !== 0 && (e & An) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Os() {
  return Y !== null && !$t;
}
function Lu(e) {
  const t = Ht(Ii, null, !1);
  return pe(t, $e), t.teardown = e, t;
}
function Fs(e) {
  Fu();
  var t = (
    /** @type {Effect} */
    J.f
  ), n = !Y && (t & Et) !== 0 && (t & wr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      at
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Co(e);
}
function Co(e) {
  return Ht(Ir | ru, e, !1);
}
function qu(e) {
  ln.ensure();
  const t = Ht(An | Kn, e, !0);
  return () => {
    Ve(t);
  };
}
function Vu(e) {
  ln.ensure();
  const t = Ht(An | Kn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hn(t, () => {
      Ve(t), r(void 0);
    }) : (Ve(t), r(void 0));
  });
}
function Ro(e) {
  return Ht(Ir, e, !1);
}
function zu(e) {
  return Ht(ks | Kn, e, !0);
}
function Is(e, t = 0) {
  return Ht(Ii | t, e, !0);
}
function Zt(e, t = [], n = [], r = []) {
  Su(r, t, n, (i) => {
    Ht(Ii, () => e(...i.map($)), !0);
  });
}
function Ls(e, t = 0) {
  var n = Ht(cn | t, e, !0);
  return n;
}
function pt(e) {
  return Ht(Et | Kn, e, !0);
}
function So(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $n, r = Y;
    ca(!0), _t(null);
    try {
      t.call(null);
    } finally {
      ca(n), _t(r);
    }
  }
}
function qs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && To(() => {
      i.abort(Nn);
    });
    var r = n.next;
    (n.f & An) !== 0 ? n.parent = null : Ve(n, t), n = r;
  }
}
function Hu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Et) === 0 && Ve(t), t = n;
  }
}
function Ve(e, t = !0) {
  var n = !1;
  (t || (e.f & Ja) !== 0) && e.nodes !== null && e.nodes.end !== null && (Yu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), qs(e, t && !n), Lr(e, 0), pe(e, on);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  So(e);
  var i = e.parent;
  i !== null && i.first !== null && No(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Yu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ zt(e);
    e.remove(), e = n;
  }
}
function No(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hn(e, t, n = !0) {
  var r = [];
  ko(e, r, !0);
  var i = () => {
    n && Ve(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function ko(e, t, n) {
  if ((e.f & it) === 0) {
    e.f ^= it;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & dr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Et) !== 0 && (e.f & cn) !== 0;
      ko(i, t, a ? n : !1), i = s;
    }
  }
}
function Vs(e) {
  Mo(e, !0);
}
function Mo(e, t) {
  if ((e.f & it) !== 0) {
    e.f ^= it, (e.f & $e) === 0 && (pe(e, Se), bt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & dr) !== 0 || (n.f & Et) !== 0;
      Mo(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Po(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ zt(n);
      t.append(n), n = i;
    }
}
let hi = !1, $n = !1;
function ca(e) {
  $n = e;
}
let Y = null, $t = !1;
function _t(e) {
  Y = e;
}
let J = null;
function qt(e) {
  J = e;
}
let gt = null;
function Do(e) {
  Y !== null && (gt === null ? gt = [e] : gt.push(e));
}
let je = null, tt = 0, ct = null;
function Bu(e) {
  ct = e;
}
let Oo = 1, Pn = 0, Yn = Pn;
function ha(e) {
  Yn = e;
}
function Fo() {
  return ++Oo;
}
function Kr(e) {
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if (t & Re && (e.f &= ~Xn), (t & At) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Kr(
        /** @type {Derived} */
        s
      ) && go(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & vt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ce === null && pe(e, $e);
  }
  return !1;
}
function Io(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(gt !== null && hr.call(gt, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Re) !== 0 ? Io(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? pe(s, Se) : (s.f & $e) !== 0 && pe(s, At), bt(
        /** @type {Effect} */
        s
      ));
    }
}
function Lo(e) {
  var x;
  var t = je, n = tt, r = ct, i = Y, s = gt, a = at, o = $t, l = Yn, u = e.f;
  je = /** @type {null | Value[]} */
  null, tt = 0, ct = null, Y = (u & (Et | An)) === 0 ? e : null, gt = null, pr(e.ctx), $t = !1, Yn = ++Pn, e.ac !== null && (To(() => {
    e.ac.abort(Nn);
  }), e.ac = null);
  try {
    e.f |= os;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f();
    e.f |= wr;
    var c = e.deps, d = K == null ? void 0 : K.is_fork;
    if (je !== null) {
      var y;
      if (d || Lr(e, tt), c !== null && tt > 0)
        for (c.length = tt + je.length, y = 0; y < je.length; y++)
          c[tt + y] = je[y];
      else
        e.deps = c = je;
      if (Os() && (e.f & vt) !== 0)
        for (y = tt; y < c.length; y++)
          ((x = c[y]).reactions ?? (x.reactions = [])).push(e);
    } else !d && c !== null && tt < c.length && (Lr(e, tt), c.length = tt);
    if (no() && ct !== null && !$t && c !== null && (e.f & (Re | At | Se)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      ct.length; y++)
        Io(
          ct[y],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Pn++, i.deps !== null)
        for (let m = 0; m < n; m += 1)
          i.deps[m].rv = Pn;
      if (t !== null)
        for (const m of t)
          m.rv = Pn;
      ct !== null && (r === null ? r = ct : r.push(.../** @type {Source[]} */
      ct));
    }
    return (e.f & yn) !== 0 && (e.f ^= yn), p;
  } catch (m) {
    return io(m);
  } finally {
    e.f ^= os, je = t, tt = n, ct = r, Y = i, gt = s, pr(a), $t = o, Yn = l;
  }
}
function Xu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = jl.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !hr.call(je, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & vt) !== 0 && (s.f ^= vt, s.f &= ~Xn), Ms(s), Du(s), Lr(s, 0);
  }
}
function Lr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Xu(e, n[r]);
}
function _r(e) {
  var t = e.f;
  if ((t & on) === 0) {
    pe(e, $e);
    var n = J, r = hi;
    J = e, hi = !0;
    try {
      (t & (cn | Ka)) !== 0 ? Hu(e) : qs(e), So(e);
      var i = Lo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Oo;
      var s;
      as && xu && (e.f & Se) !== 0 && e.deps;
    } finally {
      hi = r, J = n;
    }
  }
}
function $(e) {
  var t = e.f, n = (t & Re) !== 0;
  if (Y !== null && !$t) {
    var r = J !== null && (J.f & on) !== 0;
    if (!r && (gt === null || !hr.call(gt, e))) {
      var i = Y.deps;
      if ((Y.f & os) !== 0)
        e.rv < Pn && (e.rv = Pn, je === null && i !== null && i[tt] === e ? tt++ : je === null ? je = [e] : je.push(e));
      else {
        (Y.deps ?? (Y.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [Y] : hr.call(s, Y) || s.push(Y);
      }
    }
  }
  if ($n && xn.has(e))
    return xn.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if ($n) {
      var o = a.v;
      return ((a.f & $e) === 0 && a.reactions !== null || Vo(a)) && (o = Ps(a)), xn.set(a, o), o;
    }
    var l = (a.f & vt) === 0 && !$t && Y !== null && (hi || (Y.f & vt) !== 0), u = (a.f & wr) === 0;
    Kr(a) && (l && (a.f |= vt), go(a)), l && !u && (_o(a), qo(a));
  }
  if (Ce != null && Ce.has(e))
    return Ce.get(e);
  if ((e.f & yn) !== 0)
    throw e.v;
  return e.v;
}
function qo(e) {
  if (e.f |= vt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Re) !== 0 && (t.f & vt) === 0 && (_o(
        /** @type {Derived} */
        t
      ), qo(
        /** @type {Derived} */
        t
      ));
}
function Vo(e) {
  if (e.v === Te) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (xn.has(t) || (t.f & Re) !== 0 && Vo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xi(e) {
  var t = $t;
  try {
    return $t = !0, e();
  } finally {
    $t = t;
  }
}
const zo = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set();
function Wu(e) {
  for (var t = 0; t < e.length; t++)
    zo.add(e[t]);
  for (var n of _s)
    n(e);
}
let da = null;
function pa(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  da = e;
  var a = 0, o = da === e && e.__root;
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
    $i(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, p = J;
    _t(null), qt(null);
    try {
      for (var c, d = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && x.call(s, e);
        } catch (b) {
          c ? d.push(b) : c = b;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        s = y;
      }
      if (c) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _t(f), qt(p);
    }
  }
}
var Ha, Ya;
const es = (Ya = (Ha = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ha.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ya.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (e) => e
  }
);
function Uu(e) {
  return (
    /** @type {string} */
    (es == null ? void 0 : es.createHTML(e)) ?? e
  );
}
function Ho(e, t = !1) {
  var n = Ds("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? Uu(e) : e, n.content;
}
function bn(e, t) {
  var n = (
    /** @type {Effect} */
    J
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Yt(e, t) {
  var n = (t & Gl) !== 0, r = (t & Kl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (j)
      return bn(B, null), B;
    i === void 0 && (i = Ho(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ un(i)));
    var a = (
      /** @type {TemplateNode} */
      r || xo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ un(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      bn(o, l);
    } else
      bn(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Gu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (j)
      return bn(B, null), B;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ho(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ un(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ un(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return bn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ku(e, t) {
  return /* @__PURE__ */ Gu(e, t, "svg");
}
function va(e = "") {
  if (!j) {
    var t = st(e + "");
    return bn(t, t), t;
  }
  var n = B;
  return n.nodeType !== Gr ? (n.before(n = st()), qe(n)) : Bi(
    /** @type {Text} */
    n
  ), bn(n, n), n;
}
function Ge(e, t) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & wr) === 0 || n.nodes.end === null) && (n.nodes.end = B), qi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ju = ["touchstart", "touchmove"];
function Ju(e) {
  return ju.includes(e);
}
function _n(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Yo(e, t) {
  return Bo(e, t);
}
function Zu(e, t) {
  gs(), t.intro = t.intro ?? !1;
  const n = t.target, r = j, i = B;
  try {
    for (var s = /* @__PURE__ */ un(n); s && (s.nodeType !== xr || /** @type {Comment} */
    s.data !== Ss); )
      s = /* @__PURE__ */ zt(s);
    if (!s)
      throw cr;
    an(!0), qe(
      /** @type {Comment} */
      s
    );
    const a = Bo(e, { ...t, anchor: s });
    return an(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== cr && console.warn("Failed to hydrate: ", a), t.recover === !1 && du(), gs(), Ao(n), an(!1), Yo(e, t);
  } finally {
    an(r), qe(i);
  }
}
const ri = /* @__PURE__ */ new Map();
function Bo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  gs();
  var o = /* @__PURE__ */ new Set(), l = (p) => {
    for (var c = 0; c < p.length; c++) {
      var d = p[c];
      if (!o.has(d)) {
        o.add(d);
        var y = Ju(d);
        for (const b of [t, document]) {
          var x = ri.get(b);
          x === void 0 && (x = /* @__PURE__ */ new Map(), ri.set(b, x));
          var m = x.get(d);
          m === void 0 ? (b.addEventListener(d, pa, { passive: y }), x.set(d, 1)) : x.set(d, m + 1);
        }
      }
    }
  };
  l(Fi(zo)), _s.add(l);
  var u = void 0, f = Vu(() => {
    var p = n ?? t.appendChild(st());
    return Cu(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (c) => {
        Vi({});
        var d = (
          /** @type {ComponentContext} */
          at
        );
        if (s && (d.c = s), i && (r.$$events = i), j && bn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, j && (J.nodes.end = B, B === null || B.nodeType !== xr || /** @type {Comment} */
        B.data !== Ns))
          throw Li(), cr;
        zi();
      }
    ), () => {
      var x;
      for (var c of o)
        for (const m of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            ri.get(m)
          ), y = (
            /** @type {number} */
            d.get(c)
          );
          --y == 0 ? (m.removeEventListener(c, pa), d.delete(c), d.size === 0 && ri.delete(m)) : d.set(c, y);
        }
      _s.delete(l), p !== n && ((x = p.parentNode) == null || x.removeChild(p));
    };
  });
  return ms.set(u, f), u;
}
let ms = /* @__PURE__ */ new WeakMap();
function Qu(e, t) {
  const n = ms.get(e);
  return n ? (ms.delete(e), n(t)) : Promise.resolve();
}
var wt, Ft, rt, Vn, Wr, Ur, Di;
class ef {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    he(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, wt, /* @__PURE__ */ new Map());
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
    H(this, Ft, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, rt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, Vn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, Wr, !0);
    H(this, Ur, () => {
      var t = (
        /** @type {Batch} */
        K
      );
      if (v(this, wt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, wt).get(t)
        ), r = v(this, Ft).get(n);
        if (r)
          Vs(r), v(this, Vn).delete(n);
        else {
          var i = v(this, rt).get(n);
          i && (v(this, Ft).set(n, i.effect), v(this, rt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, wt)) {
          if (v(this, wt).delete(s), s === t)
            break;
          const o = v(this, rt).get(a);
          o && (Ve(o.effect), v(this, rt).delete(a));
        }
        for (const [s, a] of v(this, Ft)) {
          if (s === n || v(this, Vn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, wt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Po(a, u), u.append(st()), v(this, rt).set(s, { effect: a, fragment: u });
            } else
              Ve(a);
            v(this, Vn).delete(s), v(this, Ft).delete(s);
          };
          v(this, Wr) || !r ? (v(this, Vn).add(s), Hn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, Di, (t) => {
      v(this, wt).delete(t);
      const n = Array.from(v(this, wt).values());
      for (const [r, i] of v(this, rt))
        n.includes(r) || (Ve(i.effect), v(this, rt).delete(r));
    });
    this.anchor = t, V(this, Wr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      K
    ), i = Eo();
    if (n && !v(this, Ft).has(t) && !v(this, rt).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = st();
        s.append(a), v(this, rt).set(t, {
          effect: pt(() => n(a)),
          fragment: s
        });
      } else
        v(this, Ft).set(
          t,
          pt(() => n(this.anchor))
        );
    if (v(this, wt).set(r, t), i) {
      for (const [o, l] of v(this, Ft))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, rt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Ur)), r.ondiscard(v(this, Di));
    } else
      j && (this.anchor = B), v(this, Ur).call(this);
  }
}
wt = new WeakMap(), Ft = new WeakMap(), rt = new WeakMap(), Vn = new WeakMap(), Wr = new WeakMap(), Ur = new WeakMap(), Di = new WeakMap();
function tf(e) {
  at === null && au(), Fs(() => {
    const t = Xi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function tr(e, t, n = !1) {
  j && qi();
  var r = new ef(e), i = n ? dr : 0;
  function s(a, o) {
    if (j) {
      const f = Qa(e);
      var l;
      if (f === Ss ? l = 0 : f === Oi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ai();
        qe(u), r.anchor = u, an(!1), r.ensure(a, o), an(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ls(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function di(e, t) {
  return t;
}
function nf(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let p = t[o];
    Hn(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ys(Fi(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
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
      Ao(f), f.append(u), e.items.clear();
    }
    ys(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ys(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ve(e[n], t);
}
var ga;
function pi(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Ba) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = j ? qe(/* @__PURE__ */ un(u)) : u.appendChild(st());
  }
  j && qi();
  var f = null, p = /* @__PURE__ */ vo(() => {
    var b = n();
    return Wa(b) ? b : b == null ? [] : Fi(b);
  }), c, d = !0;
  function y() {
    m.fallback = f, rf(m, c, a, t, r), f !== null && (c.length === 0 ? (f.f & sn) === 0 ? Vs(f) : (f.f ^= sn, Nr(f, null, a)) : Hn(f, () => {
      f = null;
    }));
  }
  var x = Ls(() => {
    c = /** @type {V[]} */
    $(p);
    var b = c.length;
    let D = !1;
    if (j) {
      var M = Qa(a) === Oi;
      M !== (b === 0) && (a = Ai(), qe(a), an(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      K
    ), q = Eo(), X = 0; X < b; X += 1) {
      j && B.nodeType === xr && /** @type {Comment} */
      B.data === Ns && (a = /** @type {Comment} */
      B, D = !0, an(!1));
      var se = c[X], Q = r(se, X), W = d ? null : o.get(Q);
      W ? (W.v && gr(W.v, se), W.i && gr(W.i, X), q && I.unskip_effect(W.e)) : (W = sf(
        o,
        d ? a : ga ?? (ga = st()),
        se,
        Q,
        X,
        i,
        t,
        n
      ), d || (W.e.f |= sn), o.set(Q, W)), S.add(Q);
    }
    if (b === 0 && s && !f && (d ? f = pt(() => s(a)) : (f = pt(() => s(ga ?? (ga = st()))), f.f |= sn)), b > S.size && lu(), j && b > 0 && qe(Ai()), !d)
      if (q) {
        for (const [ae, ue] of o)
          S.has(ae) || I.skip_effect(ue.e);
        I.oncommit(y), I.ondiscard(() => {
        });
      } else
        y();
    D && an(!0), $(p);
  }), m = { effect: x, items: o, outrogroups: null, fallback: f };
  d = !1, j && (a = B);
}
function Rr(e) {
  for (; e !== null && (e.f & Et) === 0; )
    e = e.next;
  return e;
}
function rf(e, t, n, r, i) {
  var W, ae, ue, O, F, Ne, lt, ce, Ae;
  var s = (r & Hl) !== 0, a = t.length, o = e.items, l = Rr(e.effect.first), u, f = null, p, c = [], d = [], y, x, m, b;
  if (s)
    for (b = 0; b < a; b += 1)
      y = t[b], x = i(y, b), m = /** @type {EachItem} */
      o.get(x).e, (m.f & sn) === 0 && ((ae = (W = m.nodes) == null ? void 0 : W.a) == null || ae.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(m));
  for (b = 0; b < a; b += 1) {
    if (y = t[b], x = i(y, b), m = /** @type {EachItem} */
    o.get(x).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(m), ee.done.delete(m);
    if ((m.f & sn) !== 0)
      if (m.f ^= sn, m === l)
        Nr(m, null, n);
      else {
        var D = f ? f.next : l;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), vn(e, f, m), vn(e, m, D), Nr(m, D, n), f = m, c = [], d = [], l = Rr(f.next);
        continue;
      }
    if ((m.f & it) !== 0 && (Vs(m), s && ((O = (ue = m.nodes) == null ? void 0 : ue.a) == null || O.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (c.length < d.length) {
          var M = d[0], S;
          f = M.prev;
          var I = c[0], q = c[c.length - 1];
          for (S = 0; S < c.length; S += 1)
            Nr(c[S], M, n);
          for (S = 0; S < d.length; S += 1)
            u.delete(d[S]);
          vn(e, I.prev, q.next), vn(e, f, I), vn(e, q, M), l = M, f = q, b -= 1, c = [], d = [];
        } else
          u.delete(m), Nr(m, l, n), vn(e, m.prev, m.next), vn(e, m, f === null ? e.effect.first : f.next), vn(e, f, m), f = m;
        continue;
      }
      for (c = [], d = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Rr(l.next);
      if (l === null)
        continue;
    }
    (m.f & sn) === 0 && c.push(m), f = m, l = Rr(m.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (ys(Fi(ee.done)), (F = e.outrogroups) == null || F.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var X = [];
    if (u !== void 0)
      for (m of u)
        (m.f & it) === 0 && X.push(m);
    for (; l !== null; )
      (l.f & it) === 0 && l !== e.fallback && X.push(l), l = Rr(l.next);
    var se = X.length;
    if (se > 0) {
      var Q = (r & Ba) !== 0 && a === 0 ? n : null;
      if (s) {
        for (b = 0; b < se; b += 1)
          (lt = (Ne = X[b].nodes) == null ? void 0 : Ne.a) == null || lt.measure();
        for (b = 0; b < se; b += 1)
          (Ae = (ce = X[b].nodes) == null ? void 0 : ce.a) == null || Ae.fix();
      }
      nf(e, X, Q);
    }
  }
  s && wn(() => {
    var ee, Oe;
    if (p !== void 0)
      for (m of p)
        (Oe = (ee = m.nodes) == null ? void 0 : ee.a) == null || Oe.apply();
  });
}
function sf(e, t, n, r, i, s, a, o) {
  var l = (a & Vl) !== 0 ? (a & Yl) === 0 ? /* @__PURE__ */ yo(n, !1, !1) : Wn(n) : null, u = (a & zl) !== 0 ? Wn(i) : null;
  return {
    v: l,
    i: u,
    e: pt(() => (s(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Nr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & sn) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function vn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function zs(e, t) {
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
      const i = Ds("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const _a = [...` 	
\r\f \v\uFEFF`];
function af(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || _a.includes(r[a - 1])) && (o === r.length || _a.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function ma(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function of(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += ma(r)), i && (n += ma(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function ii(e, t, n, r, i, s) {
  var a = e.__className;
  if (j || a !== n || a === void 0) {
    var o = af(n, r, s);
    (!j || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function ts(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function ya(e, t, n, r) {
  var i = e.__style;
  if (j || i !== t) {
    var s = of(t, r);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (ts(e, n == null ? void 0 : n[0], r[0]), ts(e, n == null ? void 0 : n[1], r[1], "important")) : ts(e, n, r));
  return r;
}
const lf = Symbol("is custom element"), uf = Symbol("is html"), ff = su ? "link" : "LINK";
function wa(e, t, n, r) {
  var i = cf(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ff) || i[t] !== (i[t] = n) && (t === "loading" && (e[iu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && hf(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function cf(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [lf]: e.nodeName.includes("-"),
      [uf]: e.namespaceURI === Xa
    })
  );
}
var xa = /* @__PURE__ */ new Map();
function hf(e) {
  var t = e.getAttribute("is") || e.nodeName, n = xa.get(t);
  if (n) return n;
  xa.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Jl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ua(i);
  }
  return n;
}
function ba(e, t) {
  return e === t || (e == null ? void 0 : e[Dr]) === t;
}
function vi(e = {}, t, n, r) {
  return Ro(() => {
    var i, s;
    return Is(() => {
      i = s, s = [], Xi(() => {
        e !== n(...s) && (t(e, ...s), i && ba(n(...i), e) && t(null, ...i));
      });
    }), () => {
      wn(() => {
        s && ba(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let si = !1;
function df(e) {
  var t = si;
  try {
    return si = !1, [e(), si];
  } finally {
    si = t;
  }
}
function ie(e, t, n, r) {
  var D;
  var i = (n & Wl) !== 0, s = (n & Ul) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Xi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Dr in e || Za in e;
    u = ((D = zn(e, t)) == null ? void 0 : D.set) ?? (f && t in e ? (M) => e[t] = M : void 0);
  }
  var p, c = !1;
  i ? [p, c] = df(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = l(), u && (pu(), u(p)));
  var d;
  if (d = () => {
    var M = (
      /** @type {V} */
      e[t]
    );
    return M === void 0 ? l() : (o = !0, M);
  }, (n & Xl) === 0)
    return d;
  if (u) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, S) {
        return arguments.length > 0 ? ((!S || y || c) && u(S ? d() : M), M) : d();
      })
    );
  }
  var x = !1, m = ((n & Bl) !== 0 ? Yi : vo)(() => (x = !1, d()));
  i && $(m);
  var b = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    (function(M, S) {
      if (arguments.length > 0) {
        const I = S ? $(m) : i ? Mn(M) : M;
        return de(m, I), x = !0, a !== void 0 && (a = I), M;
      }
      return $n && x || (b.f & on) !== 0 ? m.v : $(m);
    })
  );
}
function pf(e) {
  return new vf(e);
}
var rn, dt;
class vf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    H(this, rn);
    /** @type {Record<string, any>} */
    H(this, dt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ yo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return $(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Za ? !0 : ($(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return de(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    V(this, dt, (t.hydrate ? Zu : Yo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && ne(), V(this, rn, i.$$events);
    for (const a of Object.keys(v(this, dt)))
      a === "$set" || a === "$destroy" || a === "$on" || $i(this, a, {
        get() {
          return v(this, dt)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, dt)[a] = o;
        },
        enumerable: !0
      });
    v(this, dt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, dt).$destroy = () => {
      Qu(v(this, dt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    v(this, dt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    v(this, rn)[t] = v(this, rn)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, rn)[t].push(r), () => {
      v(this, rn)[t] = v(this, rn)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, dt).$destroy();
  }
}
rn = new WeakMap(), dt = new WeakMap();
let Xo;
typeof HTMLElement == "function" && (Xo = class extends HTMLElement {
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
          const o = Ds("slot");
          s !== "default" && (o.name = s), Ge(a, o);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = gf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = gi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = pf({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = qu(() => {
        Is(() => {
          var s;
          this.$$r = !0;
          for (const a of bi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = gi(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = gi(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return bi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function gi(e, t, n, r) {
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
function gf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Hs(e, t, n, r, i, s) {
  let a = class extends Xo {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return bi(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return bi(t).forEach((o) => {
    $i(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var p;
        l = gi(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (p = zn(u, o)) == null ? void 0 : p.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    $i(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var _f = { value: () => {
} };
function Wo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _i(n);
}
function _i(e) {
  this._ = e;
}
function mf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
_i.prototype = Wo.prototype = {
  constructor: _i,
  on: function(e, t) {
    var n = this._, r = mf(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = yf(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (i = (e = r[s]).type) n[i] = $a(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = $a(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new _i(e);
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
function yf(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function $a(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = _f, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ws = "http://www.w3.org/1999/xhtml";
const Aa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ws,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Aa.hasOwnProperty(t) ? { space: Aa[t], local: e } : e;
}
function wf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ws && t.documentElement.namespaceURI === ws ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Uo(e) {
  var t = Wi(e);
  return (t.local ? xf : wf)(t);
}
function bf() {
}
function Ys(e) {
  return e == null ? bf : function() {
    return this.querySelector(e);
  };
}
function $f(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ot(r, this._parents);
}
function Af(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ef() {
  return [];
}
function Go(e) {
  return e == null ? Ef : function() {
    return this.querySelectorAll(e);
  };
}
function Tf(e) {
  return function() {
    return Af(e.apply(this, arguments));
  };
}
function Cf(e) {
  typeof e == "function" ? e = Tf(e) : e = Go(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new ot(r, i);
}
function Ko(e) {
  return function() {
    return this.matches(e);
  };
}
function jo(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Rf = Array.prototype.find;
function Sf(e) {
  return function() {
    return Rf.call(this.children, e);
  };
}
function Nf() {
  return this.firstElementChild;
}
function kf(e) {
  return this.select(e == null ? Nf : Sf(typeof e == "function" ? e : jo(e)));
}
var Mf = Array.prototype.filter;
function Pf() {
  return Array.from(this.children);
}
function Df(e) {
  return function() {
    return Mf.call(this.children, e);
  };
}
function Of(e) {
  return this.selectAll(e == null ? Pf : Df(typeof e == "function" ? e : jo(e)));
}
function Ff(e) {
  typeof e != "function" && (e = Ko(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new ot(r, this._parents);
}
function Jo(e) {
  return new Array(e.length);
}
function If() {
  return new ot(this._enter || this._groups.map(Jo), this._parents);
}
function Ei(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ei.prototype = {
  constructor: Ei,
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
function Lf(e) {
  return function() {
    return e;
  };
}
function qf(e, t, n, r, i, s) {
  for (var a = 0, o, l = t.length, u = s.length; a < u; ++a)
    (o = t[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ei(e, s[a]);
  for (; a < l; ++a)
    (o = t[a]) && (i[a] = o);
}
function Vf(e, t, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, p = s.length, c = new Array(f), d;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (c[o] = d = a.call(l, l.__data__, o, t) + "", u.has(d) ? i[o] = l : u.set(d, l));
  for (o = 0; o < p; ++o)
    d = a.call(e, s[o], o, s) + "", (l = u.get(d)) ? (r[o] = l, l.__data__ = s[o], u.delete(d)) : n[o] = new Ei(e, s[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(c[o]) === l && (i[o] = l);
}
function zf(e) {
  return e.__data__;
}
function Hf(e, t) {
  if (!arguments.length) return Array.from(this, zf);
  var n = t ? Vf : qf, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Lf(e));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], p = i[u], c = p.length, d = Yf(e.call(f, f && f.__data__, u, r)), y = d.length, x = o[u] = new Array(y), m = a[u] = new Array(y), b = l[u] = new Array(c);
    n(f, p, x, m, b, d, t);
    for (var D = 0, M = 0, S, I; D < y; ++D)
      if (S = x[D]) {
        for (D >= M && (M = D + 1); !(I = m[M]) && ++M < y; ) ;
        S._next = I || null;
      }
  }
  return a = new ot(a, r), a._enter = o, a._exit = l, a;
}
function Yf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Bf() {
  return new ot(this._exit || this._groups.map(Jo), this._parents);
}
function Xf(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Wf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], p = u.length, c = o[l] = new Array(p), d, y = 0; y < p; ++y)
      (d = u[y] || f[y]) && (c[y] = d);
  for (; l < i; ++l)
    o[l] = n[l];
  return new ot(o, this._parents);
}
function Uf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Gf(e) {
  e || (e = Kf);
  function t(p, c) {
    return p && c ? e(p.__data__, c.__data__) : !p - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(t);
  }
  return new ot(i, this._parents).order();
}
function Kf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function jf() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Jf() {
  return Array.from(this);
}
function Zf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Qf() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ec() {
  return !this.node();
}
function tc(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && e.call(o, o.__data__, s, i);
  return this;
}
function nc(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rc(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ic(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sc(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ac(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function oc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function lc(e, t) {
  var n = Wi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? rc : nc : typeof t == "function" ? n.local ? oc : ac : n.local ? sc : ic)(n, t));
}
function Zo(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function uc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function cc(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function hc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? uc : typeof t == "function" ? cc : fc)(e, t, n ?? "")) : mr(this.node(), e);
}
function mr(e, t) {
  return e.style.getPropertyValue(t) || Zo(e).getComputedStyle(e, null).getPropertyValue(t);
}
function dc(e) {
  return function() {
    delete this[e];
  };
}
function pc(e, t) {
  return function() {
    this[e] = t;
  };
}
function vc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function gc(e, t) {
  return arguments.length > 1 ? this.each((t == null ? dc : typeof t == "function" ? vc : pc)(e, t)) : this.node()[e];
}
function Qo(e) {
  return e.trim().split(/^|\s+/);
}
function Bs(e) {
  return e.classList || new el(e);
}
function el(e) {
  this._node = e, this._names = Qo(e.getAttribute("class") || "");
}
el.prototype = {
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
function tl(e, t) {
  for (var n = Bs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function nl(e, t) {
  for (var n = Bs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function _c(e) {
  return function() {
    tl(this, e);
  };
}
function mc(e) {
  return function() {
    nl(this, e);
  };
}
function yc(e, t) {
  return function() {
    (t.apply(this, arguments) ? tl : nl)(this, e);
  };
}
function wc(e, t) {
  var n = Qo(e + "");
  if (arguments.length < 2) {
    for (var r = Bs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? yc : t ? _c : mc)(n, t));
}
function xc() {
  this.textContent = "";
}
function bc(e) {
  return function() {
    this.textContent = e;
  };
}
function $c(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ac(e) {
  return arguments.length ? this.each(e == null ? xc : (typeof e == "function" ? $c : bc)(e)) : this.node().textContent;
}
function Ec() {
  this.innerHTML = "";
}
function Tc(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Cc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Rc(e) {
  return arguments.length ? this.each(e == null ? Ec : (typeof e == "function" ? Cc : Tc)(e)) : this.node().innerHTML;
}
function Sc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Nc() {
  return this.each(Sc);
}
function kc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mc() {
  return this.each(kc);
}
function Pc(e) {
  var t = typeof e == "function" ? e : Uo(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Dc() {
  return null;
}
function Oc(e, t) {
  var n = typeof e == "function" ? e : Uo(e), r = t == null ? Dc : typeof t == "function" ? t : Ys(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Fc() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ic() {
  return this.each(Fc);
}
function Lc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function qc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vc(e) {
  return this.select(e ? qc : Lc);
}
function zc(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Hc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Yc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Bc(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Xc(e, t, n) {
  return function() {
    var r = this.__on, i, s = Hc(t);
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
function Wc(e, t, n) {
  var r = Yc(e + ""), i, s = r.length, a;
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
  for (o = t ? Xc : Bc, i = 0; i < s; ++i) this.each(o(r[i], t, n));
  return this;
}
function rl(e, t, n) {
  var r = Zo(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Uc(e, t) {
  return function() {
    return rl(this, e, t);
  };
}
function Gc(e, t) {
  return function() {
    return rl(this, e, t.apply(this, arguments));
  };
}
function Kc(e, t) {
  return this.each((typeof t == "function" ? Gc : Uc)(e, t));
}
function* jc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var il = [null];
function ot(e, t) {
  this._groups = e, this._parents = t;
}
function br() {
  return new ot([[document.documentElement]], il);
}
function Jc() {
  return this;
}
ot.prototype = br.prototype = {
  constructor: ot,
  select: $f,
  selectAll: Cf,
  selectChild: kf,
  selectChildren: Of,
  filter: Ff,
  data: Hf,
  enter: If,
  exit: Bf,
  join: Xf,
  merge: Wf,
  selection: Jc,
  order: Uf,
  sort: Gf,
  call: jf,
  nodes: Jf,
  node: Zf,
  size: Qf,
  empty: ec,
  each: tc,
  attr: lc,
  style: hc,
  property: gc,
  classed: wc,
  text: Ac,
  html: Rc,
  raise: Nc,
  lower: Mc,
  append: Pc,
  insert: Oc,
  remove: Ic,
  clone: Vc,
  datum: zc,
  on: Wc,
  dispatch: Kc,
  [Symbol.iterator]: jc
};
function fe(e) {
  return typeof e == "string" ? new ot([[document.querySelector(e)]], [document.documentElement]) : new ot([[e]], il);
}
function Xs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function sl(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function jr() {
}
var qr = 0.7, Ti = 1 / qr, rr = "\\s*([+-]?\\d+)\\s*", Vr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zc = /^#([0-9a-f]{3,8})$/, Qc = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), eh = new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`), th = new RegExp(`^rgba\\(${rr},${rr},${rr},${Vr}\\)$`), nh = new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${Vr}\\)$`), rh = new RegExp(`^hsl\\(${Vr},${Lt},${Lt}\\)$`), ih = new RegExp(`^hsla\\(${Vr},${Lt},${Lt},${Vr}\\)$`), Ea = {
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
Xs(jr, Un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ta,
  // Deprecated! Use color.formatHex.
  formatHex: Ta,
  formatHex8: sh,
  formatHsl: ah,
  formatRgb: Ca,
  toString: Ca
});
function Ta() {
  return this.rgb().formatHex();
}
function sh() {
  return this.rgb().formatHex8();
}
function ah() {
  return al(this).formatHsl();
}
function Ca() {
  return this.rgb().formatRgb();
}
function Un(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ra(t) : n === 3 ? new Je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ai(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ai(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qc.exec(e)) ? new Je(t[1], t[2], t[3], 1) : (t = eh.exec(e)) ? new Je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = th.exec(e)) ? ai(t[1], t[2], t[3], t[4]) : (t = nh.exec(e)) ? ai(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rh.exec(e)) ? ka(t[1], t[2] / 100, t[3] / 100, 1) : (t = ih.exec(e)) ? ka(t[1], t[2] / 100, t[3] / 100, t[4]) : Ea.hasOwnProperty(e) ? Ra(Ea[e]) : e === "transparent" ? new Je(NaN, NaN, NaN, 0) : null;
}
function Ra(e) {
  return new Je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ai(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Je(e, t, n, r);
}
function oh(e) {
  return e instanceof jr || (e = Un(e)), e ? (e = e.rgb(), new Je(e.r, e.g, e.b, e.opacity)) : new Je();
}
function xs(e, t, n, r) {
  return arguments.length === 1 ? oh(e) : new Je(e, t, n, r ?? 1);
}
function Je(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Xs(Je, xs, sl(jr, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Je(Bn(this.r), Bn(this.g), Bn(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sa,
  // Deprecated! Use color.formatHex.
  formatHex: Sa,
  formatHex8: lh,
  formatRgb: Na,
  toString: Na
}));
function Sa() {
  return `#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}`;
}
function lh() {
  return `#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}${Dn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Na() {
  const e = Ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Bn(this.r)}, ${Bn(this.g)}, ${Bn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Bn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Dn(e) {
  return e = Bn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ka(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xt(e, t, n, r);
}
function al(e) {
  if (e instanceof xt) return new xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof jr || (e = Un(e)), !e) return new xt();
  if (e instanceof xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new xt(a, o, l, e.opacity);
}
function uh(e, t, n, r) {
  return arguments.length === 1 ? al(e) : new xt(e, t, n, r ?? 1);
}
function xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Xs(xt, uh, sl(jr, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Je(
      ns(e >= 240 ? e - 240 : e + 120, i, r),
      ns(e, i, r),
      ns(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new xt(Ma(this.h), oi(this.s), oi(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ma(this.h)}, ${oi(this.s) * 100}%, ${oi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ma(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function oi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ns(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ws = (e) => () => e;
function fh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ch(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function hh(e) {
  return (e = +e) == 1 ? ol : function(t, n) {
    return n - t ? ch(t, n, e) : Ws(isNaN(t) ? n : t);
  };
}
function ol(e, t) {
  var n = t - e;
  return n ? fh(e, n) : Ws(isNaN(e) ? t : e);
}
const Ri = (function e(t) {
  var n = hh(t);
  function r(i, s) {
    var a = n((i = xs(i)).r, (s = xs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ol(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function dh(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function ph(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function vh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Jt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function gh(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function It(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function _h(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Jt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var bs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(bs.source, "g");
function mh(e) {
  return function() {
    return e;
  };
}
function yh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ll(e, t) {
  var n = bs.lastIndex = rs.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = bs.exec(e)) && (i = rs.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: It(r, i) })), n = rs.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? yh(l[0].x) : mh(t) : (t = l.length, function(u) {
    for (var f = 0, p; f < t; ++f) o[(p = l[f]).i] = p.x(u);
    return o.join("");
  });
}
function Jt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ws(t) : (n === "number" ? It : n === "string" ? (r = Un(t)) ? (t = r, Ri) : ll : t instanceof Un ? Ri : t instanceof Date ? gh : ph(t) ? dh : Array.isArray(t) ? vh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _h : It)(e, t);
}
var Pa = 180 / Math.PI, $s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ul(e, t, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Pa,
    skewX: Math.atan(l) * Pa,
    scaleX: a,
    scaleY: o
  };
}
var li;
function wh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? $s : ul(t.a, t.b, t.c, t.d, t.e, t.f);
}
function xh(e) {
  return e == null || (li || (li = document.createElementNS("http://www.w3.org/2000/svg", "g")), li.setAttribute("transform", e), !(e = li.transform.baseVal.consolidate())) ? $s : (e = e.matrix, ul(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fl(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, p, c, d, y) {
    if (u !== p || f !== c) {
      var x = d.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: It(u, p) }, { i: x - 2, x: It(f, c) });
    } else (p || c) && d.push("translate(" + p + t + c + n);
  }
  function a(u, f, p, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: It(u, f) })) : f && p.push(i(p) + "rotate(" + f + r);
  }
  function o(u, f, p, c) {
    u !== f ? c.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: It(u, f) }) : f && p.push(i(p) + "skewX(" + f + r);
  }
  function l(u, f, p, c, d, y) {
    if (u !== p || f !== c) {
      var x = d.push(i(d) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: It(u, p) }, { i: x - 2, x: It(f, c) });
    } else (p !== 1 || c !== 1) && d.push(i(d) + "scale(" + p + "," + c + ")");
  }
  return function(u, f) {
    var p = [], c = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, p, c), a(u.rotate, f.rotate, p, c), o(u.skewX, f.skewX, p, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, c), u = f = null, function(d) {
      for (var y = -1, x = c.length, m; ++y < x; ) p[(m = c[y]).i] = m.x(d);
      return p.join("");
    };
  };
}
var bh = fl(wh, "px, ", "px)", "deg)"), $h = fl(xh, ", ", ")", ")"), yr = 0, kr = 0, Sr = 0, cl = 1e3, Si, Mr, Ni = 0, Gn = 0, Ui = 0, zr = typeof performance == "object" && performance.now ? performance : Date, hl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Us() {
  return Gn || (hl(Ah), Gn = zr.now() + Ui);
}
function Ah() {
  Gn = 0;
}
function ki() {
  this._call = this._time = this._next = null;
}
ki.prototype = dl.prototype = {
  constructor: ki,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Us() : +n) + (t == null ? 0 : +t), !this._next && Mr !== this && (Mr ? Mr._next = this : Si = this, Mr = this), this._call = e, this._time = n, As();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, As());
  }
};
function dl(e, t, n) {
  var r = new ki();
  return r.restart(e, t, n), r;
}
function Eh() {
  Us(), ++yr;
  for (var e = Si, t; e; )
    (t = Gn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --yr;
}
function Da() {
  Gn = (Ni = zr.now()) + Ui, yr = kr = 0;
  try {
    Eh();
  } finally {
    yr = 0, Ch(), Gn = 0;
  }
}
function Th() {
  var e = zr.now(), t = e - Ni;
  t > cl && (Ui -= t, Ni = e);
}
function Ch() {
  for (var e, t = Si, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Si = n);
  Mr = e, As(r);
}
function As(e) {
  if (!yr) {
    kr && (kr = clearTimeout(kr));
    var t = e - Gn;
    t > 24 ? (e < 1 / 0 && (kr = setTimeout(Da, e - zr.now() - Ui)), Sr && (Sr = clearInterval(Sr))) : (Sr || (Ni = zr.now(), Sr = setInterval(Th, cl)), yr = 1, hl(Da));
  }
}
function Oa(e, t, n) {
  var r = new ki();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var Rh = Wo("start", "end", "cancel", "interrupt"), Sh = [], pl = 0, Fa = 1, Es = 2, mi = 3, Ia = 4, Ts = 5, yi = 6;
function Gi(e, t, n, r, i, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Nh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Rh,
    tween: Sh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: pl
  });
}
function Gs(e, t) {
  var n = Tt(e, t);
  if (n.state > pl) throw new Error("too late; already scheduled");
  return n;
}
function Bt(e, t) {
  var n = Tt(e, t);
  if (n.state > mi) throw new Error("too late; already running");
  return n;
}
function Tt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Nh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = dl(s, 0, n.time);
  function s(u) {
    n.state = Fa, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, p, c, d;
    if (n.state !== Fa) return l();
    for (f in r)
      if (d = r[f], d.name === n.name) {
        if (d.state === mi) return Oa(a);
        d.state === Ia ? (d.state = yi, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete r[f]) : +f < t && (d.state = yi, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete r[f]);
      }
    if (Oa(function() {
      n.state === mi && (n.state = Ia, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Es, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Es) {
      for (n.state = mi, i = new Array(c = n.tween.length), f = 0, p = -1; f < c; ++f)
        (d = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = d);
      i.length = p + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ts, 1), p = -1, c = i.length; ++p < c; )
      i[p].call(e, f);
    n.state === Ts && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = yi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function kh(e, t) {
  var n = e.__transition, r, i, s = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > Es && r.state < Ts, r.state = yi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    s && delete e.__transition;
  }
}
function Mh(e) {
  return this.each(function() {
    kh(this, e);
  });
}
function Ph(e, t) {
  var n, r;
  return function() {
    var i = Bt(this, e), s = i.tween;
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
function Dh(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Bt(this, e), a = s.tween;
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
function Oh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Tt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Ph : Dh)(n, e, t));
}
function Ks(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Bt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Tt(i, r).value[t];
  };
}
function vl(e, t) {
  var n;
  return (typeof t == "number" ? It : t instanceof Un ? Ri : (n = Un(t)) ? (t = n, Ri) : ll)(e, t);
}
function Fh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ih(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function qh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Vh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function zh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Hh(e, t) {
  var n = Wi(e), r = n === "transform" ? $h : vl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zh : Vh)(n, r, Ks(this, "attr." + e, t)) : t == null ? (n.local ? Ih : Fh)(n) : (n.local ? qh : Lh)(n, r, t));
}
function Yh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Bh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Xh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Bh(e, s)), n;
  }
  return i._value = t, i;
}
function Wh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Yh(e, s)), n;
  }
  return i._value = t, i;
}
function Uh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Wi(e);
  return this.tween(n, (r.local ? Xh : Wh)(r, t));
}
function Gh(e, t) {
  return function() {
    Gs(this, e).delay = +t.apply(this, arguments);
  };
}
function Kh(e, t) {
  return t = +t, function() {
    Gs(this, e).delay = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gh : Kh)(t, e)) : Tt(this.node(), t).delay;
}
function Jh(e, t) {
  return function() {
    Bt(this, e).duration = +t.apply(this, arguments);
  };
}
function Zh(e, t) {
  return t = +t, function() {
    Bt(this, e).duration = t;
  };
}
function Qh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Jh : Zh)(t, e)) : Tt(this.node(), t).duration;
}
function ed(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Bt(this, e).ease = t;
  };
}
function td(e) {
  var t = this._id;
  return arguments.length ? this.each(ed(t, e)) : Tt(this.node(), t).ease;
}
function nd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Bt(this, e).ease = n;
  };
}
function rd(e) {
  if (typeof e != "function") throw new Error();
  return this.each(nd(this._id, e));
}
function id(e) {
  typeof e != "function" && (e = Ko(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new fn(r, this._parents, this._name, this._id);
}
function sd(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, p = a[o] = new Array(f), c, d = 0; d < f; ++d)
      (c = l[d] || u[d]) && (p[d] = c);
  for (; o < r; ++o)
    a[o] = t[o];
  return new fn(a, this._parents, this._name, this._id);
}
function ad(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function od(e, t, n) {
  var r, i, s = ad(t) ? Gs : Bt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function ld(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Tt(this.node(), n).on.on(e) : this.each(od(n, e, t));
}
function ud(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function fd() {
  return this.on("end.remove", ud(this._id));
}
function cd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ys(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, p, c = 0; c < l; ++c)
      (f = o[c]) && (p = e.call(f, f.__data__, c, o)) && ("__data__" in f && (p.__data__ = f.__data__), u[c] = p, Gi(u[c], t, n, c, u, Tt(f, n)));
  return new fn(s, this._parents, t, n);
}
function hd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Go(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var c = e.call(f, f.__data__, p, l), d, y = Tt(f, n), x = 0, m = c.length; x < m; ++x)
          (d = c[x]) && Gi(d, t, n, x, c, y);
        s.push(c), a.push(f);
      }
  return new fn(s, a, t, n);
}
var dd = br.prototype.constructor;
function pd() {
  return new dd(this._groups, this._parents);
}
function vd(e, t) {
  var n, r, i;
  return function() {
    var s = mr(this, e), a = (this.style.removeProperty(e), mr(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function gl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gd(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = mr(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function _d(e, t, n) {
  var r, i, s;
  return function() {
    var a = mr(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), mr(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function md(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Bt(this, e), u = l.on, f = l.value[s] == null ? o || (o = gl(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function yd(e, t, n) {
  var r = (e += "") == "transform" ? bh : vl;
  return t == null ? this.styleTween(e, vd(e, r)).on("end.style." + e, gl(e)) : typeof t == "function" ? this.styleTween(e, _d(e, r, Ks(this, "style." + e, t))).each(md(this._id, e)) : this.styleTween(e, gd(e, r, t), n).on("end.style." + e, null);
}
function wd(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function xd(e, t, n) {
  var r, i;
  function s() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && wd(e, a, n)), r;
  }
  return s._value = t, s;
}
function bd(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, xd(e, t, n ?? ""));
}
function $d(e) {
  return function() {
    this.textContent = e;
  };
}
function Ad(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Ed(e) {
  return this.tween("text", typeof e == "function" ? Ad(Ks(this, "text", e)) : $d(e == null ? "" : e + ""));
}
function Td(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Cd(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Td(i)), t;
  }
  return r._value = e, r;
}
function Rd(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Cd(e));
}
function Sd() {
  for (var e = this._name, t = this._id, n = _l(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Tt(l, t);
        Gi(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new fn(r, this._parents, e, n);
}
function Nd() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Bt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), i === 0 && s();
  });
}
var kd = 0;
function fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function wi(e) {
  return br().transition(e);
}
function _l() {
  return ++kd;
}
var jt = br.prototype;
fn.prototype = wi.prototype = {
  constructor: fn,
  select: cd,
  selectAll: hd,
  selectChild: jt.selectChild,
  selectChildren: jt.selectChildren,
  filter: id,
  merge: sd,
  selection: pd,
  transition: Sd,
  call: jt.call,
  nodes: jt.nodes,
  node: jt.node,
  size: jt.size,
  empty: jt.empty,
  each: jt.each,
  on: ld,
  attr: Hh,
  attrTween: Uh,
  style: yd,
  styleTween: bd,
  text: Ed,
  textTween: Rd,
  remove: fd,
  tween: Oh,
  delay: jh,
  duration: Qh,
  ease: td,
  easeVarying: rd,
  end: Nd,
  [Symbol.iterator]: jt[Symbol.iterator]
};
function Md(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Pd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Md
};
function Dd(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Od(e) {
  var t, n;
  e instanceof fn ? (t = e._id, e = e._name) : (t = _l(), (n = Pd).time = Us(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Gi(l, e, t, u, a, n || Dd(l, t));
  return new fn(r, this._parents, e, t);
}
br.prototype.interrupt = Mh;
br.prototype.transition = Od;
const Cs = Math.PI, Rs = 2 * Cs, Sn = 1e-6, Fd = Rs - Sn;
function ml(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Id(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ml;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Ld {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ml : Id(t);
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
    let a = this._x1, o = this._y1, l = r - t, u = i - n, f = a - t, p = o - n, c = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (c > Sn) if (!(Math.abs(p * l - u * f) > Sn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = r - a, y = i - o, x = l * l + u * u, m = d * d + y * y, b = Math.sqrt(x), D = Math.sqrt(c), M = s * Math.tan((Cs - Math.acos((x + c - m) / (2 * b * D))) / 2), S = M / D, I = M / b;
      Math.abs(S - 1) > Sn && this._append`L${t + S * f},${n + S * p}`, this._append`A${s},${s},0,0,${+(p * d > f * y)},${this._x1 = t + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, p = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Sn || Math.abs(this._y1 - f) > Sn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Rs + Rs), c > Fd ? this._append`A${r},${r},0,1,${p},${t - o},${n - l}A${r},${r},0,1,${p},${this._x1 = u},${this._y1 = f}` : c > Sn && this._append`A${r},${r},0,${+(c >= Cs)},${p},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function qd(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; ) n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const Vd = qd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Le(e) {
  return function() {
    return e;
  };
}
const La = Math.abs, De = Math.atan2, Rn = Math.cos, zd = Math.max, is = Math.min, Mt = Math.sin, nr = Math.sqrt, Xe = 1e-12, Hr = Math.PI, Mi = Hr / 2, xi = 2 * Hr;
function Hd(e) {
  return e > 1 ? 0 : e < -1 ? Hr : Math.acos(e);
}
function qa(e) {
  return e >= 1 ? Mi : e <= -1 ? -Mi : Math.asin(e);
}
function Yd(e) {
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
  }, () => new Ld(t);
}
function Bd(e) {
  return e.innerRadius;
}
function Xd(e) {
  return e.outerRadius;
}
function Wd(e) {
  return e.startAngle;
}
function Ud(e) {
  return e.endAngle;
}
function Gd(e) {
  return e && e.padAngle;
}
function Kd(e, t, n, r, i, s, a, o) {
  var l = n - e, u = r - t, f = a - i, p = o - s, c = p * l - f * u;
  if (!(c * c < Xe))
    return c = (f * (t - s) - p * (e - i)) / c, [e + c * l, t + c * u];
}
function ui(e, t, n, r, i, s, a) {
  var o = e - n, l = t - r, u = (a ? s : -s) / nr(o * o + l * l), f = u * l, p = -u * o, c = e + f, d = t + p, y = n + f, x = r + p, m = (c + y) / 2, b = (d + x) / 2, D = y - c, M = x - d, S = D * D + M * M, I = i - s, q = c * x - y * d, X = (M < 0 ? -1 : 1) * nr(zd(0, I * I * S - q * q)), se = (q * M - D * X) / S, Q = (-q * D - M * X) / S, W = (q * M + D * X) / S, ae = (-q * D + M * X) / S, ue = se - m, O = Q - b, F = W - m, Ne = ae - b;
  return ue * ue + O * O > F * F + Ne * Ne && (se = W, Q = ae), {
    cx: se,
    cy: Q,
    x01: -f,
    y01: -p,
    x11: se * (i / I - 1),
    y11: Q * (i / I - 1)
  };
}
function mt() {
  var e = Bd, t = Xd, n = Le(0), r = null, i = Wd, s = Ud, a = Gd, o = null, l = Yd(u);
  function u() {
    var f, p, c = +e.apply(this, arguments), d = +t.apply(this, arguments), y = i.apply(this, arguments) - Mi, x = s.apply(this, arguments) - Mi, m = La(x - y), b = x > y;
    if (o || (o = f = l()), d < c && (p = d, d = c, c = p), !(d > Xe)) o.moveTo(0, 0);
    else if (m > xi - Xe)
      o.moveTo(d * Rn(y), d * Mt(y)), o.arc(0, 0, d, y, x, !b), c > Xe && (o.moveTo(c * Rn(x), c * Mt(x)), o.arc(0, 0, c, x, y, b));
    else {
      var D = y, M = x, S = y, I = x, q = m, X = m, se = a.apply(this, arguments) / 2, Q = se > Xe && (r ? +r.apply(this, arguments) : nr(c * c + d * d)), W = is(La(d - c) / 2, +n.apply(this, arguments)), ae = W, ue = W, O, F;
      if (Q > Xe) {
        var Ne = qa(Q / c * Mt(se)), lt = qa(Q / d * Mt(se));
        (q -= Ne * 2) > Xe ? (Ne *= b ? 1 : -1, S += Ne, I -= Ne) : (q = 0, S = I = (y + x) / 2), (X -= lt * 2) > Xe ? (lt *= b ? 1 : -1, D += lt, M -= lt) : (X = 0, D = M = (y + x) / 2);
      }
      var ce = d * Rn(D), Ae = d * Mt(D), ee = c * Rn(I), Oe = c * Mt(I);
      if (W > Xe) {
        var U = d * Rn(M), ke = d * Mt(M), Ct = c * Rn(S), oe = c * Mt(S), ze;
        if (m < Hr)
          if (ze = Kd(ce, Ae, Ct, oe, U, ke, ee, Oe)) {
            var Rt = ce - ze[0], St = Ae - ze[1], Xt = U - ze[0], ge = ke - ze[1], Wt = 1 / Mt(Hd((Rt * Xt + St * ge) / (nr(Rt * Rt + St * St) * nr(Xt * Xt + ge * ge))) / 2), hn = nr(ze[0] * ze[0] + ze[1] * ze[1]);
            ae = is(W, (c - hn) / (Wt - 1)), ue = is(W, (d - hn) / (Wt + 1));
          } else
            ae = ue = 0;
      }
      X > Xe ? ue > Xe ? (O = ui(Ct, oe, ce, Ae, d, ue, b), F = ui(U, ke, ee, Oe, d, ue, b), o.moveTo(O.cx + O.x01, O.cy + O.y01), ue < W ? o.arc(O.cx, O.cy, ue, De(O.y01, O.x01), De(F.y01, F.x01), !b) : (o.arc(O.cx, O.cy, ue, De(O.y01, O.x01), De(O.y11, O.x11), !b), o.arc(0, 0, d, De(O.cy + O.y11, O.cx + O.x11), De(F.cy + F.y11, F.cx + F.x11), !b), o.arc(F.cx, F.cy, ue, De(F.y11, F.x11), De(F.y01, F.x01), !b))) : (o.moveTo(ce, Ae), o.arc(0, 0, d, D, M, !b)) : o.moveTo(ce, Ae), !(c > Xe) || !(q > Xe) ? o.lineTo(ee, Oe) : ae > Xe ? (O = ui(ee, Oe, U, ke, c, -ae, b), F = ui(ce, Ae, Ct, oe, c, -ae, b), o.lineTo(O.cx + O.x01, O.cy + O.y01), ae < W ? o.arc(O.cx, O.cy, ae, De(O.y01, O.x01), De(F.y01, F.x01), !b) : (o.arc(O.cx, O.cy, ae, De(O.y01, O.x01), De(O.y11, O.x11), !b), o.arc(0, 0, c, De(O.cy + O.y11, O.cx + O.x11), De(F.cy + F.y11, F.cx + F.x11), b), o.arc(F.cx, F.cy, ae, De(F.y11, F.x11), De(F.y01, F.x01), !b))) : o.arc(0, 0, c, I, S, b);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Hr / 2;
    return [Rn(p) * f, Mt(p) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Le(+f), u) : e;
  }, u.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Le(+f), u) : t;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Le(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Le(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Le(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Le(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Le(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function jd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Jd(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zd(e) {
  return e;
}
function ss() {
  var e = Zd, t = Jd, n = null, r = Le(0), i = Le(xi), s = Le(0);
  function a(o) {
    var l, u = (o = jd(o)).length, f, p, c = 0, d = new Array(u), y = new Array(u), x = +r.apply(this, arguments), m = Math.min(xi, Math.max(-xi, i.apply(this, arguments) - x)), b, D = Math.min(Math.abs(m) / u, s.apply(this, arguments)), M = D * (m < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = y[d[l] = l] = +e(o[l], l, o)) > 0 && (c += S);
    for (t != null ? d.sort(function(I, q) {
      return t(y[I], y[q]);
    }) : n != null && d.sort(function(I, q) {
      return n(o[I], o[q]);
    }), l = 0, p = c ? (m - u * M) / c : 0; l < u; ++l, x = b)
      f = d[l], S = y[f], b = x + (S > 0 ? S * p : 0) + M, y[f] = {
        data: o[f],
        index: l,
        value: S,
        startAngle: x,
        endAngle: b,
        padAngle: D
      };
    return y;
  }
  return a.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Le(+o), a) : e;
  }, a.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, a) : t;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, t = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Le(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Le(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Le(+o), a) : s;
  }, a;
}
function Pr(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Pr.prototype = {
  constructor: Pr,
  scale: function(e) {
    return e === 1 ? this : new Pr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Pr(this.k, this.x + this.k * e, this.y + this.k * t);
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
Pr.prototype;
var Qd = /* @__PURE__ */ Ku('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const ep = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function yl(e, t) {
  Vi(t, !0), zs(e, ep);
  let n = ie(t, "jsonData", 7), r = ie(t, "currentRound", 7, 1), i = ie(t, "mouseEventType", 15), s = ie(t, "mouseData", 15), a = ie(t, "mouseX", 15), o = ie(t, "mouseY", 15), l = ie(t, "requestRoundChange", 7, (h) => {
  }), u = ie(t, "candidateColors", 23, () => []), f = ie(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), p = ie(t, "firstRoundDeterminesPercentages", 7, !1), c = ie(t, "randomizeOrder", 7, !1), d = ie(t, "displayPhase", 15, 0);
  function y(h) {
    return h.isTransfer ? `${h.label}__transfer` : h.transferIndex != null ? `${h.label}__${h.transferIndex}` : h.label;
  }
  const x = 800, m = 800, b = Math.min(x, m) * 0.3, D = x / 2, M = m / 2, S = "Pie", I = "PieOutline", q = "Donut", X = "TextLayer", se = "url(#cross-hatch)", Q = 1.15, W = 750, ae = 800, ue = "white", O = 1, F = "#ff00ff", Ne = 3;
  function lt(h) {
    return "hatch-" + h.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let ce = [], Ae = [], ee = [], Oe = 0, U = 0;
  const ke = {}, Ct = "No Further Rankings";
  let oe = /* @__PURE__ */ be(null);
  function ze() {
    const h = fe($(oe));
    h.select("#" + S).remove(), h.select("#" + I).remove(), h.select("#" + q).remove(), h.select("#" + X).remove();
  }
  function Rt(h) {
    l() && (_e = h, l()(h));
  }
  function St(h) {
    ze(), ee = Xt(h), ce = Qs(h, S, ee, D, M, 0, ge()), Qs(h, I, ee, D, M, 0, ge(), !1, !1, !0), Tr();
  }
  tf(() => {
    pn(), setTimeout(
      () => {
        St(r());
      },
      0
    );
  });
  function Xt(h) {
    const g = Ut(h);
    return Oe = $r(h), g;
  }
  function ge() {
    return b;
  }
  function Wt() {
    return ge() * 1.41;
  }
  function hn(h) {
    let g = 0;
    for (let _ = 1; _ < h; _++) {
      const A = n().results[_ - 1].tallyResults;
      for (let E = 0; E < A.length; E++) {
        const T = A[E].transfers;
        if (T) {
          const P = T.exhausted;
          P && (g += Number(P));
        }
      }
    }
    return g;
  }
  function Jr(h, g) {
    if (h === "exhausted") return hn(g);
    {
      const _ = n().results[g - 1].tally;
      return Number(_[h]);
    }
  }
  function Zr(h, g) {
    return Jr(h, g).toLocaleString("en-US");
  }
  function En(h, g) {
    const _ = p() ? Oe : Ki(g);
    return (Jr(h, g) / _).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function $r(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      _ += Number(E);
    return _;
  }
  function dn(h) {
    return h === "exhausted" || h === "Inactive Ballots";
  }
  function Ki(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      dn(A) || (_ += Number(E));
    return _;
  }
  function jn(h, g) {
    if (!h || h < 1 || h > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && h === n().results.length)
      return [];
    const _ = n().results[h - 1].tallyResults, A = [];
    for (let E = 0; E < _.length; E++) {
      const T = _[E][g];
      T != null && A.push(T);
    }
    return A;
  }
  function Jn(h) {
    return jn(h, "eliminated");
  }
  function w(h) {
    let g = [];
    for (let _ = 1; _ <= h; _++) g = g.concat(jn(_, "elected"));
    return [...new Set(g)];
  }
  function G(h, g) {
    const _ = n().results[g - 1].tallyResults;
    let A = 0;
    const E = _.findIndex((T) => (T == null ? void 0 : T.elected) && h == T.elected);
    if (E >= 0) {
      const T = _[E].transfers;
      if (T)
        for (let [P, z] of Object.entries(T)) A += Number(z);
    } else
      return 0;
    return A;
  }
  function re(h, g) {
    h.some((_) => dn(_.label)) || h.push({ label: "exhausted", value: hn(g) });
  }
  function me(h) {
    let g = h | 0;
    return () => {
      g = g + 1831565813 | 0;
      let _ = Math.imul(g ^ g >>> 15, 1 | g);
      return _ = _ + Math.imul(_ ^ _ >>> 7, 61 | _) ^ _, ((_ ^ _ >>> 14) >>> 0) / 4294967296;
    };
  }
  function ye(h) {
    let g = 5381;
    for (let _ = 0; _ < h.length; _++)
      g = (g << 5) + g + h.charCodeAt(_) | 0;
    return g;
  }
  function le(h) {
    var E;
    if (h.length <= 3) return h;
    const g = ye(((E = n().config) == null ? void 0 : E.contest) ?? ""), _ = me(g), A = [...h];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(_() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function Fe() {
    const h = Object.keys(n().results[0].tally), g = h.filter((E) => !dn(E)), _ = h.filter((E) => dn(E));
    return [...c() ? le(g) : g, ..._];
  }
  function Ut(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of Fe())
      A in g && _.push({ label: A, value: Number(g[A]) });
    return re(_, h), _;
  }
  function Nt(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of Fe())
      _.push({ label: A, value: Number(g[A] ?? 0) });
    return re(_, h), _;
  }
  function Tn(h, g) {
    const _ = [];
    for (const A of h) {
      if (A.label === "exhausted" || A.isTransfer) {
        _.push(A);
        continue;
      }
      const E = G(A.label, g);
      E > 0 ? (_.push({
        label: A.label,
        value: E,
        isTransfer: !0
      }), _.push({ ...A, value: A.value - E })) : _.push(A);
    }
    return _;
  }
  function pn() {
    const h = fe($(oe)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [_, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? ke[_] = Vd[g] : ke[_] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : ke[_] = u()[g % u().length], g++;
      {
        const E = h.clone(!0);
        E.attr("id", lt(_)).select("rect").attr("fill", ke[_]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    ke.exhausted = se, ke["Inactive Ballots"] = se;
  }
  function He() {
    fe($(oe)).select("#" + q).remove();
  }
  function Ze(h, g) {
    const _ = wi("global").duration(ae);
    g && _.on("end", g);
    const A = Tn(ee, h), T = ss().sort(null).value((P) => P.value)(A);
    ra(h, S, T, 0, ge()), ra(h, I, T, 0, ge(), !0), ee = A, ce = T, He(), $l(h), Nl(), Ml(0, ge()), Tr();
  }
  function Me(h, g) {
    const _ = wi("global").duration(ae);
    g && _.on("end", g), Al(h);
  }
  function Qe(h, g) {
    const _ = wi("global").duration(ae);
    g && _.on("end", g), xl(h), bl(ge(), Wt());
  }
  let we = !1, ut = [];
  function Ye() {
    Tr(), we = !1, ft();
  }
  function ft() {
    if (ut.length === 0) {
      _e !== r() && (r() === _e + 1 && _e > 0 && r() <= n().results.length ? (_e = r(), kt(r())) : r() >= 1 && r() <= n().results.length && (_e = r(), d(0), St(r())));
      return;
    }
    const h = ut.shift();
    switch (h.type) {
      case "round": {
        const g = h.round;
        g === _e + 1 && _e > 0 && g <= n().results.length ? (_e = g, kt(g)) : (g !== _e && g >= 1 && g <= n().results.length && (_e = g, d(0), St(g)), ft());
        break;
      }
      case "step":
        Qr();
        break;
    }
  }
  function kt(h) {
    if (h <= 1 || h > n().results.length) {
      ft();
      return;
    }
    we = !0, U = h, d(0), Ze(U - 1, () => {
      d(1), Me(U - 1, () => {
        d(2), Qe(U, () => {
          d(0), Ye();
        });
      });
    });
  }
  function Zn() {
    we || (we = !0, U = r(), Qn());
  }
  function Qn() {
    if (d(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), ut.length > 0) {
      Ye();
      return;
    }
    const h = U < n().results.length - 1 ? Qn : () => {
      d(0), Ye();
    };
    Ze(U, () => {
      d(1), Me(U, () => {
        d(2), U++, Rt(U), Qe(U, h);
      });
    });
  }
  Fs(() => {
    Ar();
  });
  let _e = 0;
  function Ar() {
    if (_e != r()) {
      if (we) {
        ut.push({ type: "round", round: r() });
        return;
      }
      _e == r() - 1 && _e > 0 ? Kt() : Gt(r()), _e = r();
    }
  }
  function Gt(h) {
    if (we) {
      ut.push({ type: "round", round: h });
      return;
    }
    d(0), St(h);
  }
  function Kt() {
    if (we) {
      ut.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (U = r(), U > n().results.length) {
      Tr(), we = !1;
      return;
    }
    we = !0, d() === 0 ? Ze(U - 1, () => {
      d(1), Me(U - 1, () => {
        d(2), Qe(U, () => {
          d(0), Ye();
        });
      });
    }) : d() === 1 ? Me(U - 1, () => {
      d(2), Qe(U, () => {
        d(0), Ye();
      });
    }) : d() === 2 && Qe(U, () => {
      d(0), Ye();
    });
  }
  function Qr() {
    if (r() > n().results.length) {
      Tr(), we = !1;
      return;
    }
    if (we) {
      ut.push({ type: "step" });
      return;
    }
    we = !0, U = r(), d() === 0 ? Ze(U, () => {
      d(1), Ye();
    }) : d() === 1 ? Me(U, () => {
      d(2), Ye();
    }) : d() === 2 ? (U++, Rt(U), Qe(U, () => {
      d(0), Ye();
    })) : (we = !1, console.warn("displayPhase out of range at ", d()));
  }
  function xl(h) {
    ee = Nt(h), ce = ta(h, S, ee, 0, ge(), !0), ta(h, I, ee, 0, ge(), !1, !0);
  }
  function bl(h, g) {
    const _ = fe($(oe)).select("#" + q), E = fe($(oe)).select("#" + S), T = {};
    for (const N of ce) {
      const k = N.data.label;
      if (N.data.isTransfer) continue;
      const C = E.select("#" + CSS.escape(y(N.data)));
      C.empty() || (T[k] = {
        oldStart: Number(C.attr("prevStart")),
        oldEnd: Number(C.attr("prevEnd")),
        newStart: N.startAngle,
        newEnd: N.endAngle
      });
    }
    const P = _.selectAll(".slice");
    let z = P.size();
    function L() {
      z--, z === 0 && kl();
    }
    P.select("path").transition("global").duration(W).attrTween("d", function(N) {
      const k = N.startAngle, C = N.endAngle, R = C - k, Pe = T[N.data.label];
      let Z, Be;
      if (Pe) {
        const er = (Pe.oldStart + Pe.oldEnd) / 2, Fl = (Pe.newStart + Pe.newEnd) / 2, Il = k - er;
        Z = Fl + Il, Be = Z + R;
      } else
        Z = k, Be = C;
      const te = Jt(k, Z), Ee = Jt(C, Be), ti = Jt(g, h), Cr = mt();
      return function(er) {
        return Cr.innerRadius(Math.min(ti(er), h) - 1).outerRadius(ti(er)).startAngle(te(er)).endAngle(Ee(er)), Cr(N);
      };
    }).on("end", (N) => L());
  }
  function $l(h) {
    const g = Tl(h, ce);
    Ae = ea(h, q, g, D, M, ge(), Wt(), !1, !0);
    const _ = fe($(oe));
    _.select("#" + S).raise(), _.select("#" + I).raise();
  }
  function Al(h) {
    const g = Rl(h, Ae, ce);
    Ae = ia(h, q, g, ge(), Wt(), !1);
  }
  function Er(h) {
    return ke[h.data.label];
  }
  function El(h) {
    const g = {}, _ = n().results[h - 1].tallyResults;
    for (let A = 0; A < _.length; A++) {
      let E = _[A].eliminated;
      if (E === void 0 && (E = _[A].elected), E === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = _[A].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [P, z] of Object.entries(T))
        g[P] === void 0 ? g[P] = Number(z) : g[P] += Number(z);
    }
    return g;
  }
  function Tl(h, g) {
    const _ = [], A = Oe, E = n().results[h - 1].tallyResults;
    for (let T = 0; T < E.length; T++) {
      let P = E[T].eliminated;
      if (P === void 0 && (P = E[T].elected), P === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const z = E[T].transfers;
      if (z === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let L = g.find((k) => k.data.label == P && k.data.isTransfer);
      L === void 0 && (L = g.find((k) => k.data.label == P && !k.data.isTransfer));
      let N = 0;
      if (L) N = L.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, C] of Object.entries(z)) {
        let R;
        const Pe = g.find((te) => te.data.label == k);
        if (Pe)
          R = structuredClone(Pe);
        else if (k == "exhausted")
          R = {
            data: { label: k, value: Number(C) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else {
          if (k == "residual surplus")
            continue;
          console.warn("makeDonutInfo: unrecognized name in transfers ", k);
          continue;
        }
        const Be = Number(C) / A * 2 * Math.PI;
        R.startAngle = N, N = R.endAngle = N + Be, R.index = T, R.data.transferIndex = T, _.push(R);
      }
    }
    return _;
  }
  function Cl(h, g, _) {
    const A = {};
    for (let [E, T] of Object.entries(h)) {
      const P = _.find((N) => E == N.data.label);
      if (P === void 0) {
        E !== "residual surplus" && console.warn("getTransferStartAngles: mainPieObj not found for ", E);
        continue;
      }
      const z = (P.startAngle + P.endAngle) / 2, L = h[P.data.label] / g * 2 * Math.PI;
      A[P.data.label] = z - L / 2;
    }
    return A;
  }
  function Rl(h, g, _) {
    const A = [], E = Oe, T = El(h), P = Cl(T, E, _);
    for (let [z, L] of g.entries()) {
      const N = structuredClone(L), k = L.endAngle - L.startAngle, C = _.find((R) => L.data.label === R.data.label && !R.data.isTransfer);
      if (C) {
        const R = C.data.label;
        N.startAngle = P[R], P[R] += k, N.endAngle = N.startAngle + k;
      } else if (L.data.label === "exhausted")
        N.startAngle = L.startAngle, N.endAngle = L.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", L.data.label);
        continue;
      }
      N.index = z, A.push(N);
    }
    return A;
  }
  function Js(h, g, _, A) {
    const E = mt().innerRadius(_ * Q).outerRadius(_ * Q), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], z = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const C = k.data.label === "exhausted" ? Ct : k.data.label, R = E.centroid(k), Pe = ei(k.startAngle, k.endAngle), Z = Zr(k.data.label, h);
      let Be;
      !p() && dn(k.data.label) ? Be = Z : Be = Z + " (" + En(k.data.label, h) + ")";
      const te = z.append("text").attr("transform", `translate(${R})`).attr("text-anchor", Pe).text(C);
      te.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Be);
      const Ee = te.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Ee.x + R[0], Ee.y + R[1], Ee.width, Ee.height)
      });
    }
    z.remove(), P.sort((k, C) => C.value - k.value);
    const L = [], N = /* @__PURE__ */ new Set();
    for (const k of P)
      L.some((R) => k.bbox.left < R.right && k.bbox.right > R.left && k.bbox.top < R.bottom && k.bbox.bottom > R.top) || (N.add(k.label), L.push(k.bbox));
    return N;
  }
  function Zs(h, g, _, A, E, T) {
    const z = fe($(oe)).append("g").attr("id", X).attr("transform", `translate(${_}, ${A})`), L = mt().innerRadius(E * Q).outerRadius(E * Q), N = Js(h, g, E, z);
    z.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && N.has(k.data.label) && fe(this).append("g").attr("id", (C) => y(C.data)).classed("eliminated", (C) => T.includes(C.data.label) || C.data.isTransfer === !0).each(function(C, R) {
        C.data.label === "exhausted" && fe(this).on("mouseenter", (Pe, Z) => Pl(Pe)).on("mouseleave", (Pe, Z) => Dl());
      }).append("text").attr("transform", (C) => `translate(${L.centroid(C)})`).attr("text-anchor", (C) => ei(C.startAngle, C.endAngle)).text((C) => C.data.label === "exhausted" ? Ct : C.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((C) => {
        const R = Zr(C.data.label, h);
        return !p() && dn(C.data.label) ? R : R + " (" + En(C.data.label, h) + ")";
      });
    });
  }
  function Sl(h, g, _, A) {
    const T = fe($(oe)).select("#" + X), P = Js(h, g, _, T);
    T.selectAll("g").each(function(R) {
      R && R.data && !R.data.isTransfer && !P.has(R.data.label) && fe(this).remove();
    });
    const z = T.selectAll("tspan"), L = T.selectAll("g").data(g, (R) => y(R.data)).classed("eliminated", (R) => A.includes(R.data.label) || R.data.isTransfer === !0), N = mt().innerRadius(_ * Q).outerRadius(_ * Q + 1);
    z.transition("global").duration(W).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ei(R.startAngle, R.endAngle)), L.select("text").transition("global").duration(W).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ei(R.startAngle, R.endAngle)).on("end", (R) => C());
    let k = L.size();
    function C(R) {
      k--, k === 0 && (T.remove(), Zs(h, g, D, M, _, A));
    }
  }
  function Qs(h, g, _, A, E, T, P, z = !0, L = !1, N = !1) {
    const C = ss().sort(null).value((R) => R.value)(_);
    return ea(h, g, C, A, E, T, P, z, L, N), C;
  }
  function Tr() {
    fe($(oe)).select("#" + I).selectAll(".elected").select("path").style("stroke", F).style("stroke-width", `${Ne}px`);
  }
  function ea(h, g, _, A, E, T, P, z, L, N = !1) {
    const k = Jn(h), C = w(h), Z = fe($(oe)).attr("viewBox", `0 0 ${x} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(_).enter().append("g").attr("class", "slice").classed("eliminated", (te) => k.includes(te.data.label) || te.data.isTransfer === !0).classed("elected", (te) => C.includes(te.data.label) && !te.data.isTransfer).attr("id", (te) => y(te.data));
    N ? Z.style("pointer-events", "none") : Z.on("mouseenter", (te, Ee) => Ji(te, Ee)).on("mouseleave", (te, Ee) => Zi(te, Ee));
    const Be = mt().outerRadius(P).innerRadius(T);
    if (L) {
      const te = mt().outerRadius(T + 1).innerRadius(T);
      Z.append("path").attr("d", te).attr("stroke", N ? "none" : T === 0 ? ue : "none").attr("stroke-width", N ? 0 : T === 0 ? O : 0).attr("fill", N ? "none" : (Ee) => Er(Ee)).transition("global").duration(W).attr("d", (Ee) => Be(Ee)).on("end", (Ee) => {
        N || ji();
      });
    } else
      Z.append("path").attr("d", (te) => Be(te)).attr("fill", N ? "none" : (te) => Er(te)).attr("stroke", N ? "none" : ue).attr("stroke-width", N ? 0 : O), N || ji();
    return z && !N && Zs(h, _, A, E, P, k), _;
  }
  function Nl() {
    const _ = fe($(oe)).select("#" + X).selectAll(".eliminated");
    _.size() > 0 && _.classed("finished", !0);
  }
  function kl() {
    const _ = fe($(oe)).select("#" + X).selectAll(".finished");
    _.size() > 0 && _.remove();
  }
  function Ml(h, g) {
    const E = fe($(oe)).select("#" + S).selectAll(".eliminated"), T = mt().innerRadius(h), P = mt().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(W).attrTween("d", function(z) {
      const L = Jt(g, h);
      return function(N) {
        return P.innerRadius(L(N)), P(z);
      };
    }).attr("fill", (z) => `url(#${lt(z.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(W).attrTween("d", function(z) {
      const L = Jt(g, h);
      return function(N) {
        return T.outerRadius(L(N)), T(z);
      };
    }).attr("fill", (z) => Er(z));
  }
  function ei(h, g) {
    const _ = (h + g) / 2;
    return _ > Math.PI * 11 / 6 || _ < Math.PI * 1 / 6 || _ > Math.PI * 5 / 6 && _ < Math.PI * 7 / 6 ? "middle" : _ < Math.PI ? "start" : "end";
  }
  function ji() {
    fe($(
      oe
      // force redisplay of text labels
    )).select("#" + X).raise().append("g").remove();
  }
  function ta(h, g, _, A, E, T, P = !1) {
    const L = ss().sort(null).value((N) => N.value)(_);
    return ia(h, g, L, A, E, T, P), L;
  }
  function na(h, g, _, A, E = !1) {
    const T = Jn(h), P = w(h), N = fe($(oe)).select("#" + g).selectAll(".slice").data(_, (C) => y(C.data));
    N.exit().remove();
    const k = N.enter().append("g").attr("class", "slice").attr("id", (C) => y(C.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (C, R) => Ji(C, R)).on("mouseleave", (C, R) => Zi(C, R)), k.append("path").attr("d", (C) => A(C)).attr("fill", E ? "none" : (C) => Er(C)).attr("stroke", E ? "none" : ue).attr("stroke-width", E ? 0 : O), N.classed("eliminated", (C) => T.includes(C.data.label)).classed("elected", (C) => P.includes(C.data.label)), E || N.on("mouseenter", (C, R) => Ji(C, R)).on("mouseleave", (C, R) => Zi(C, R)), N;
  }
  function ra(h, g, _, A, E, T = !1) {
    const P = mt().outerRadius(E).innerRadius(A);
    na(h, g, _, P, T).select("path").attr("d", (L) => P(L)).attr("fill", T ? "none" : (L) => Er(L));
  }
  function ia(h, g, _, A, E, T, P = !1) {
    const z = mt().outerRadius(E).innerRadius(A).startAngle((Z) => Z.startAngle).endAngle((Z) => Z.endAngle), L = mt().outerRadius(E).innerRadius(A);
    fe($(oe)).select("#" + g).selectAll(".slice").attr("prevStart", (Z) => Z.startAngle).attr("prevEnd", (Z) => Z.endAngle);
    const C = na(h, g, _, L, P);
    let R = C.size();
    function Pe() {
      R--, R <= 0 && (P || ji());
    }
    return C.select("path").transition("global").duration(W).attrTween("d", function(Z) {
      const Be = Number(fe(this.parentNode).attr("prevStart")), te = Number(fe(this.parentNode).attr("prevEnd")), Ee = Jt(Be, Z.startAngle), ti = Jt(te, Z.endAngle);
      return (Cr) => (z.startAngle(Ee(Cr)).endAngle(ti(Cr)), z(Z));
    }).on("end", function(Z) {
      Z.startAngle === Z.endAngle && fe(this).attr("stroke", "none"), Pe();
    }), T && !P && Sl(h, _, E, Jn(h)), _;
  }
  function Ji(h, g) {
    s(g.data.label), i("enter"), a(h.clientX), o(h.clientY);
  }
  function Zi(h, g) {
    s(g.data.label), i("leave");
  }
  function Pl(h, g) {
    i("show-exhausted"), a(h.clientX), o(h.clientY);
  }
  function Dl(h, g) {
    i("hide-exhausted");
  }
  var Ol = {
    pieColors: ke,
    exhaustedLabel: Ct,
    countExhaustedVotes: hn,
    getEliminatedCandidates: Jn,
    getElectedCandidates: w,
    runFullAnimationFn: Zn,
    animateOnePhaseFn: Qr,
    get jsonData() {
      return n();
    },
    set jsonData(h) {
      n(h), ne();
    },
    get currentRound() {
      return r();
    },
    set currentRound(h = 1) {
      r(h), ne();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(h) {
      i(h), ne();
    },
    get mouseData() {
      return s();
    },
    set mouseData(h) {
      s(h), ne();
    },
    get mouseX() {
      return a();
    },
    set mouseX(h) {
      a(h), ne();
    },
    get mouseY() {
      return o();
    },
    set mouseY(h) {
      o(h), ne();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(h = (g) => {
    }) {
      l(h), ne();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(h = []) {
      u(h), ne();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(h = !1) {
      f(h), ne();
    },
    get firstRoundDeterminesPercentages() {
      return p();
    },
    set firstRoundDeterminesPercentages(h = !1) {
      p(h), ne();
    },
    get randomizeOrder() {
      return c();
    },
    set randomizeOrder(h = !1) {
      c(h), ne();
    },
    get displayPhase() {
      return d();
    },
    set displayPhase(h = 0) {
      d(h), ne();
    }
  }, sa = Qd();
  return vi(sa, (h) => de(oe, h), () => $(oe)), Ge(e, sa), zi(Ol);
}
Hs(
  yl,
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
    randomizeOrder: {},
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
var tp = /* @__PURE__ */ Yt("<div></div>"), np = /* @__PURE__ */ Yt('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), rp = /* @__PURE__ */ Yt('<div role="button" aria-label="Advance animation phase"></div>');
const ip = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function wl(e, t) {
  Vi(t, !0), zs(e, ip);
  let n = ie(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = ie(t, "currentStep", 7, 0), i = ie(t, "disabled", 7, !1), s = ie(t, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function o(p) {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), a());
  }
  var l = {
    get labels() {
      return n();
    },
    set labels(p = ["Eliminate", "Transfer", "Consolidate"]) {
      n(p), ne();
    },
    get currentStep() {
      return r();
    },
    set currentStep(p = 0) {
      r(p), ne();
    },
    get disabled() {
      return i();
    },
    set disabled(p = !1) {
      i(p), ne();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(p = () => {
    }) {
      s(p), ne();
    }
  }, u = rp();
  let f;
  return u.__click = a, u.__keydown = o, pi(u, 21, n, di, (p, c, d) => {
    var y = np(), x = gn(y);
    {
      var m = (X) => {
        var se = tp();
        let Q;
        Zt(() => Q = ii(se, 1, "connector svelte-1l4eyw0", null, Q, { completed: !i() && d <= r() })), Ge(X, se);
      };
      tr(x, (X) => {
        d > 0 && X(m);
      });
    }
    var b = et(x, 2), D = We(b);
    let M;
    var S = et(D, 2);
    let I;
    var q = We(S, !0);
    Ie(S), Ie(b), Zt(() => {
      M = ii(D, 1, "dot svelte-1l4eyw0", null, M, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), I = ii(S, 1, "label svelte-1l4eyw0", null, I, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), _n(q, $(c));
    }), Ge(p, y);
  }), Ie(u), Zt(() => {
    f = ii(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), wa(u, "tabindex", i() ? -1 : 0), wa(u, "aria-disabled", i());
  }), Ge(e, u), zi(l);
}
Wu(["click", "keydown"]);
Hs(wl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var sp = /* @__PURE__ */ Yt("<span> </span> <!>", 1), ap = /* @__PURE__ */ Yt("About to eliminate: <!>", 1), op = /* @__PURE__ */ Yt("<span> </span> <!>", 1), lp = /* @__PURE__ */ Yt(" <!>", 1), up = /* @__PURE__ */ Yt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), fp = /* @__PURE__ */ Yt("<span> </span> <br/>", 1), cp = /* @__PURE__ */ Yt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const hp = {
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
function dp(e, t) {
  Vi(t, !0), zs(e, hp);
  const n = 0.85;
  let r = ie(t, "electionSummary", 7), i = ie(t, "currentRound", 7, 1), s = ie(t, "requestRoundChange", 7, (w) => {
  }), a = ie(t, "candidateColors", 23, () => []), o = ie(t, "textForWinner", 7, "elected"), l = ie(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = ie(t, "firstRoundDeterminesPercentages", 7, !1), f = ie(t, "randomizeOrder", 7, !1), p = ie(t, "showCaptions", 7, !1);
  const c = {
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
  let d = /* @__PURE__ */ Cn(() => c[o()] ?? c.elected), y = /* @__PURE__ */ be(null), x = /* @__PURE__ */ be(null), m = /* @__PURE__ */ be(""), b = /* @__PURE__ */ be(Mn([])), D = /* @__PURE__ */ be(""), M = /* @__PURE__ */ be(""), S = /* @__PURE__ */ be(0), I = /* @__PURE__ */ be(0), q = /* @__PURE__ */ Cn(() => X(r()));
  function X(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (G) {
        return console.error("Failed to parse JSON string:", G), {};
      }
    return w || {};
  }
  function se(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(w, G, re) {
    w.style.left = G + "px", w.style.top = re + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const le = w.getBoundingClientRect();
      let Fe = G, Ut = re + 20;
      Fe + le.width > window.innerWidth - 12 && (Fe = window.innerWidth - le.width - 12), Fe < 12 && (Fe = 12), Ut + le.height > window.innerHeight - 12 && (Ut = re - le.height - 12), w.style.left = Fe + "px", w.style.top = Ut + "px";
    });
  }
  function W() {
    switch ($(D)) {
      case "enter":
        ((w) => {
          var G = nu(w, 2);
          de(b, G[0], !0), de(m, G[1], !0);
        })(ue($(M), i())), $(y) && (Q($(y), $(S) || 0, $(I) || 0), $(y).style.opacity = String(n));
        break;
      case "leave":
        $(y) && ($(y).style.opacity = "0"), de(b, [], !0), de(m, "");
        break;
      case "show-exhausted":
        $(x) && (Q($(x), $(S) || 0, $(I) || 0), $(x).style.opacity = String(n));
        break;
      case "hide-exhausted":
        $(x) && ($(x).style.opacity = "0");
        break;
      case "":
        break;
      default:
        console.log("Unknown mouse event: ", $(D));
        break;
    }
  }
  Fs(() => W());
  function ae(w, G) {
    return w === 1 ? G ? "vote was" : "vote will be" : G ? "votes were" : "votes will be";
  }
  function ue(w, G) {
    const re = [], me = w === "exhausted" ? ke() : w;
    let ye;
    w === "exhausted" ? ye = Oe(1) : ye = $(q).results[0].tally[w], re.push(`${me} started with ${ye} votes.`);
    for (let le = 1; le <= G; le++) {
      le === G && (w === "exhausted" ? ye = Oe(G) : ye = $(q).results[G - 1].tally[w], re.push(`${me} has ${ye} votes at round ${G}.`));
      const Fe = $(q).results[le - 1].tallyResults, Ut = ce(le);
      for (let Nt = 0; Nt < Fe.length; Nt++) {
        const Tn = Fe[Nt].transfers, pn = Fe[Nt].eliminated, He = Fe[Nt].elected;
        if (!Ut) {
          if (pn)
            pn === w && re.push(`${me} will be eliminated on round ${le}.`);
          else if (w === He && (re.push(`${me} ${$(d).event} on round ${le}.`), Tn))
            for (let [Me, Qe] of Object.entries(Tn))
              re.push(`${Qe} ${ae(Number(Qe), le < G)} transferred to ${Me} on round ${le}.`);
        }
        const Ze = pn || He;
        if (Ze) {
          const Me = Number(Tn[w]);
          Me && re.push(`${Me} ${ae(Me, le < G)} transferred from ${Ze} on round ${le}.`);
        }
      }
    }
    return [re, me];
  }
  function O() {
    let w = 0;
    for (let G = 1; G <= $(q).results.length; G++) {
      if (ce(G)) continue;
      const re = $(q).results[G - 1].tallyResults;
      for (let me = 0; me < re.length; me++)
        re[me].elected && w++;
    }
    return w;
  }
  let F, Ne = /* @__PURE__ */ be(0);
  function lt(w) {
    var ye;
    return !((ye = $(q)) != null && ye.results) || w < 1 || w > $(q).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [$(q).results[w - 1].tallyResults.some((le) => le.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function ce(w) {
    return l() && $(q).results && w === $(q).results.length;
  }
  function Ae(w) {
    return ce(w) ? [] : F ? F.getEliminatedCandidates(w) : [];
  }
  function ee(w) {
    return ce(w) ? [] : F ? F.getElectedCandidates(w) : [];
  }
  function Oe(w) {
    return F ? F.countExhaustedVotes(w) : 0;
  }
  function U() {
    F && F.animateOnePhaseFn && F.animateOnePhaseFn();
  }
  function ke() {
    return F ? F.exhaustedLabel : "";
  }
  function Ct() {
    return F ? F.pieColors : {};
  }
  var oe = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ne();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ne();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (G) => {
    }) {
      s(w), ne();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), ne();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), ne();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), ne();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), ne();
    },
    get randomizeOrder() {
      return f();
    },
    set randomizeOrder(w = !1) {
      f(w), ne();
    },
    get showCaptions() {
      return p();
    },
    set showCaptions(w = !1) {
      p(w), ne();
    }
  }, ze = cp(), Rt = gn(ze), St = We(Rt);
  {
    let w = /* @__PURE__ */ Cn(() => lt(i()));
    wl(St, {
      get labels() {
        return $(w);
      },
      get currentStep() {
        return $(Ne);
      },
      disabled: !1,
      onAdvance: U
    });
  }
  Ie(Rt);
  var Xt = et(Rt, 4), ge = We(Xt), Wt = We(ge), hn = We(Wt);
  vi(
    yl(hn, {
      get jsonData() {
        return $(q);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: se,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return l();
      },
      get firstRoundDeterminesPercentages() {
        return u();
      },
      get randomizeOrder() {
        return f();
      },
      get mouseEventType() {
        return $(D);
      },
      set mouseEventType(w) {
        de(D, w, !0);
      },
      get mouseData() {
        return $(M);
      },
      set mouseData(w) {
        de(M, w, !0);
      },
      get mouseX() {
        return $(S);
      },
      set mouseX(w) {
        de(S, w, !0);
      },
      get mouseY() {
        return $(I);
      },
      set mouseY(w) {
        de(I, w, !0);
      },
      get displayPhase() {
        return $(Ne);
      },
      set displayPhase(w) {
        de(Ne, w, !0);
      }
    }),
    (w) => F = w,
    () => F
  ), Ie(Wt), Ie(ge);
  var Jr = et(ge, 2);
  {
    var Zr = (w) => {
      var G = up(), re = gn(G), me = We(re);
      Ie(re);
      var ye = et(re, 2), le = We(ye);
      {
        var Fe = (He) => {
          var Ze = ap(), Me = et(gn(Ze));
          pi(Me, 17, () => Ae(i()), di, (Qe, we, ut) => {
            var Ye = sp(), ft = gn(Ye);
            let kt;
            var Zn = We(ft, !0);
            Ie(ft);
            var Qn = et(ft, 2);
            {
              var _e = (Gt) => {
                var Kt = va(", ");
                Ge(Gt, Kt);
              }, Ar = /* @__PURE__ */ Cn(() => ut < Ae(i()).length - 1);
              tr(Qn, (Gt) => {
                $(Ar) && Gt(_e);
              });
            }
            Zt(
              (Gt) => {
                kt = ya(ft, "", kt, Gt), _n(Zn, $(we));
              },
              [() => ({ color: Ct()[$(we)] })]
            ), Ge(Qe, Ye);
          }), Ge(He, Ze);
        }, Ut = /* @__PURE__ */ Cn(() => Ae(i()).length > 0);
        tr(le, (He) => {
          $(Ut) && He(Fe);
        });
      }
      var Nt = et(le, 2);
      {
        var Tn = (He) => {
          var Ze = lp(), Me = gn(Ze), Qe = et(Me);
          pi(Qe, 17, () => ee(i()), di, (we, ut, Ye) => {
            var ft = op(), kt = gn(ft);
            let Zn;
            var Qn = We(kt, !0);
            Ie(kt);
            var _e = et(kt, 2);
            {
              var Ar = (Kt) => {
                var Qr = va(", ");
                Ge(Kt, Qr);
              }, Gt = /* @__PURE__ */ Cn(() => Ye < ee(i()).length - 1);
              tr(_e, (Kt) => {
                $(Gt) && Kt(Ar);
              });
            }
            Zt(
              (Kt) => {
                Zn = ya(kt, "", Zn, Kt), _n(Qn, $(ut));
              },
              [() => ({ color: Ct()[$(ut)] })]
            ), Ge(we, ft);
          }), Zt(() => _n(Me, `${$(d).caption ?? ""}: `)), Ge(He, Ze);
        }, pn = /* @__PURE__ */ Cn(() => ee(i()).length > 0);
        tr(Nt, (He) => {
          $(pn) && He(Tn);
        });
      }
      Ie(ye), Zt((He) => _n(me, `${$(q).config.contest ?? ""}, ${He ?? ""} ${$(d).infinitive ?? ""}, Round ${i() ?? ""}.`), [O]), Ge(w, G);
    };
    tr(Jr, (w) => {
      p() && w(Zr);
    });
  }
  Ie(Xt);
  var En = et(Xt, 2), $r = We(En), dn = We($r, !0);
  Ie($r);
  var Ki = et($r, 2);
  pi(Ki, 17, () => $(b), di, (w, G) => {
    var re = fp(), me = gn(re), ye = We(me, !0);
    Ie(me), ls(2), Zt(() => _n(ye, $(G))), Ge(w, re);
  }), Ie(En), vi(En, (w) => de(y, w), () => $(y));
  var jn = et(En, 2), Jn = We(jn);
  return ls(2), Ie(jn), vi(jn, (w) => de(x, w), () => $(x)), Zt(
    (w) => {
      _n(dn, $(m)), _n(Jn, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [ke]
  ), Ge(e, ze), zi(oe);
}
customElements.define("pie-chart", Hs(
  dp,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    candidateColors: {},
    textForWinner: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    randomizeOrder: {},
    showCaptions: {}
  },
  [],
  [],
  { mode: "open" }
));
