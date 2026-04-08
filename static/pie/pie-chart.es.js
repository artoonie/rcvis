var Ll = Object.defineProperty;
var oa = (e) => {
  throw TypeError(e);
};
var ql = (e, t, n) => t in e ? Ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ce = (e, t, n) => ql(e, typeof t != "symbol" ? t + "" : t, n), es = (e, t, n) => t.has(e) || oa("Cannot " + n);
var v = (e, t, n) => (es(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), V = (e, t, n, r) => (es(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), be = (e, t, n) => (es(e, t, "access private method"), n);
var za;
typeof window < "u" && ((za = window.__svelte ?? (window.__svelte = {})).v ?? (za.v = /* @__PURE__ */ new Set())).add("5");
const Vl = 1, zl = 2, Xa = 4, Hl = 8, Yl = 16, Bl = 1, Xl = 4, Wl = 8, Ul = 16, Gl = 1, Kl = 2, Ns = "[", Oi = "[!", ks = "]", ur = {}, Re = Symbol(), Wa = "http://www.w3.org/1999/xhtml", os = !1;
var Ua = Array.isArray, jl = Array.prototype.indexOf, fr = Array.prototype.includes, Fi = Array.from, bi = Object.keys, $i = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Jl = Object.getOwnPropertyDescriptors, Zl = Object.prototype, Ql = Array.prototype, Ga = Object.getPrototypeOf, la = Object.isExtensible;
const eu = () => {
};
function tu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ka() {
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
const Ne = 2, Fr = 4, Ii = 8, ja = 1 << 24, hn = 16, At = 32, En = 64, Ja = 128, pt = 512, Ae = 1024, ke = 2048, $t = 4096, rt = 8192, ln = 16384, mr = 32768, cr = 65536, ua = 1 << 17, Za = 1 << 18, jn = 1 << 19, ru = 1 << 20, an = 1 << 25, Wn = 65536, ls = 1 << 21, Ms = 1 << 22, wn = 1 << 23, Pr = Symbol("$state"), Qa = Symbol("legacy props"), iu = Symbol(""), kn = new class extends Error {
  constructor() {
    super(...arguments);
    ce(this, "name", "StaleReactionError");
    ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ha;
const su = ((Ha = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ha.contentType.includes("xml")) ?? !1, Ur = 3, yr = 8;
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
function on(e) {
  j = e;
}
let X;
function qe(e) {
  if (e === null)
    throw Li(), ur;
  return X = e;
}
function qi() {
  return qe(/* @__PURE__ */ zt(X));
}
function Ie(e) {
  if (j) {
    if (/* @__PURE__ */ zt(X) !== null)
      throw Li(), ur;
    X = e;
  }
}
function us(e = 1) {
  if (j) {
    for (var t = e, n = X; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n);
    X = n;
  }
}
function Ai(e = !0) {
  for (var t = 0, n = X; ; ) {
    if (n.nodeType === yr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ns || r === Oi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n)
    );
    e && n.remove(), n = i;
  }
}
function eo(e) {
  if (!e || e.nodeType !== yr)
    throw Li(), ur;
  return (
    /** @type {Comment} */
    e.data
  );
}
function to(e) {
  return e === this.v;
}
function wu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function no(e) {
  return !wu(e, this.v);
}
let xu = !1, st = null;
function hr(e) {
  st = e;
}
function Vi(e, t = !1, n) {
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
function zi(e) {
  var t = (
    /** @type {ComponentContext} */
    st
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ro(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, st = t.p, e ?? /** @type {T} */
  {};
}
function ro() {
  return !0;
}
let Mn = [];
function io() {
  var e = Mn;
  Mn = [], tu(e);
}
function xn(e) {
  if (Mn.length === 0 && !Dr) {
    var t = Mn;
    queueMicrotask(() => {
      t === Mn && io();
    });
  }
  Mn.push(e);
}
function bu() {
  for (; Mn.length > 0; )
    io();
}
function so(e) {
  var t = J;
  if (t === null)
    return B.f |= wn, e;
  if ((t.f & mr) === 0 && (t.f & Fr) === 0)
    throw e;
  dr(e, t);
}
function dr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ja) !== 0) {
      if ((t.f & mr) === 0)
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
function de(e, t) {
  e.f = e.f & $u | t;
}
function Ps(e) {
  (e.f & pt) !== 0 || e.deps === null ? de(e, Ae) : de(e, $t);
}
function ao(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ne) === 0 || (t.f & Wn) === 0 || (t.f ^= Wn, ao(
        /** @type {Derived} */
        t.deps
      ));
}
function oo(e, t, n) {
  (e.f & ke) !== 0 ? t.add(e) : (e.f & $t) !== 0 && n.add(e), ao(e.deps), de(e, Ae);
}
const ni = /* @__PURE__ */ new Set();
let K = null, Se = null, Ke = [], Hi = null, fs = !1, Dr = !1;
var nr, rr, Fn, ir, Hr, Yr, In, en, sr, Vt, cs, hs, lo;
const Js = class Js {
  constructor() {
    H(this, Vt);
    ce(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ce(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ce(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    H(this, nr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, rr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    H(this, Fn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    H(this, ir, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, Hr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, Yr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, In, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    H(this, en, /* @__PURE__ */ new Map());
    ce(this, "is_fork", !1);
    H(this, sr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, ir) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, en).has(t) || v(this, en).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = v(this, en).get(t);
    if (n) {
      v(this, en).delete(t);
      for (var r of n.d)
        de(r, ke), xt(r);
      for (r of n.m)
        de(r, $t), xt(r);
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
      be(this, Vt, cs).call(this, s, n, r);
    if (this.is_deferred()) {
      be(this, Vt, hs).call(this, r), be(this, Vt, hs).call(this, n);
      for (const [s, a] of v(this, en))
        ho(s, a);
    } else {
      for (const s of v(this, nr)) s();
      v(this, nr).clear(), v(this, Fn) === 0 && be(this, Vt, lo).call(this), K = null, fa(r), fa(n), (i = v(this, Hr)) == null || i.resolve();
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
    n !== Re && !this.previous.has(t) && this.previous.set(t, n), (t.f & wn) === 0 && (this.current.set(t, t.v), Se == null || Se.set(t, t.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, Se = null);
  }
  flush() {
    if (this.activate(), Ke.length > 0) {
      if (uo(), K !== null && K !== this)
        return;
    } else v(this, Fn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, rr)) t(this);
    v(this, rr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    V(this, Fn, v(this, Fn) + 1), t && V(this, ir, v(this, ir) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    V(this, Fn, v(this, Fn) - 1), t && V(this, ir, v(this, ir) - 1), !v(this, sr) && (V(this, sr, !0), xn(() => {
      V(this, sr, !1), this.is_deferred() ? Ke.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, Yr))
      v(this, In).delete(t), de(t, ke), xt(t);
    for (const t of v(this, In))
      de(t, $t), xt(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, rr).add(t);
  }
  settled() {
    return (v(this, Hr) ?? V(this, Hr, Ka())).promise;
  }
  static ensure() {
    if (K === null) {
      const t = K = new Js();
      ni.add(K), Dr || xn(() => {
        K === t && t.flush();
      });
    }
    return K;
  }
  apply() {
  }
};
nr = new WeakMap(), rr = new WeakMap(), Fn = new WeakMap(), ir = new WeakMap(), Hr = new WeakMap(), Yr = new WeakMap(), In = new WeakMap(), en = new WeakMap(), sr = new WeakMap(), Vt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cs = function(t, n, r) {
  t.f ^= Ae;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (At | En)) !== 0, l = o && (a & Ae) !== 0, u = l || (a & rt) !== 0 || v(this, en).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Ae : s !== null && (a & (Fr | Ii | ja)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Gr(i) && ((a & hn) !== 0 && v(this, In).add(i), vr(i));
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
hs = function(t) {
  for (var n = 0; n < t.length; n += 1)
    oo(t[n], v(this, Yr), v(this, In));
}, lo = function() {
  var i;
  if (ni.size > 1) {
    this.previous.clear();
    var t = Se, n = !0;
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
          fo(f, o, l, u);
        if (Ke.length > 0) {
          K = s, s.apply();
          for (const f of Ke)
            be(i = s, Vt, cs).call(i, f, [], []);
          s.deactivate();
        }
        Ke = r;
      }
    }
    K = null, Se = t;
  }
  this.committed = !0, ni.delete(this);
};
let un = Js;
function re(e) {
  var t = Dr;
  Dr = !0;
  try {
    for (var n; ; ) {
      if (bu(), Ke.length === 0 && (K == null || K.flush(), Ke.length === 0))
        return Hi = null, /** @type {T} */
        n;
      uo();
    }
  } finally {
    Dr = t;
  }
}
function uo() {
  fs = !0;
  var e = null;
  try {
    for (var t = 0; Ke.length > 0; ) {
      var n = un.ensure();
      if (t++ > 1e3) {
        var r, i;
        Au();
      }
      n.process(Ke), bn.clear();
    }
  } finally {
    Ke = [], fs = !1, Hi = null;
  }
}
function Au() {
  try {
    hu();
  } catch (e) {
    dr(e, Hi);
  }
}
let mt = null;
function fa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ln | rt)) === 0 && Gr(r) && (mt = /* @__PURE__ */ new Set(), vr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ko(r), (mt == null ? void 0 : mt.size) > 0)) {
        bn.clear();
        for (const i of mt) {
          if ((i.f & (ln | rt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            mt.has(a) && (mt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ln | rt)) === 0 && vr(l);
          }
        }
        mt.clear();
      }
    }
    mt = null;
  }
}
function fo(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Ne) !== 0 ? fo(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Ms | hn)) !== 0 && (s & ke) === 0 && co(i, t, r) && (de(i, ke), xt(
        /** @type {Effect} */
        i
      ));
    }
}
function co(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (fr.call(t, i))
        return !0;
      if ((i.f & Ne) !== 0 && co(
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
function xt(e) {
  for (var t = Hi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (fs && t === J && (n & hn) !== 0 && (n & Za) === 0)
      return;
    if ((n & (En | At)) !== 0) {
      if ((n & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  Ke.push(t);
}
function ho(e, t) {
  if (!((e.f & At) !== 0 && (e.f & Ae) !== 0)) {
    (e.f & ke) !== 0 ? t.d.push(e) : (e.f & $t) !== 0 && t.m.push(e), de(e, Ae);
    for (var n = e.first; n !== null; )
      ho(n, t), n = n.next;
  }
}
function Eu(e) {
  let t = 0, n = Un(0), r;
  return () => {
    Fs() && (x(n), Ls(() => (t === 0 && (r = Xi(() => e(() => Or(n)))), t += 1, () => {
      xn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Or(n));
      });
    })));
  };
}
var Tu = cr | jn | Ja;
function Cu(e, t, n) {
  new Ru(e, t, n);
}
var tt, Br, Pt, Ln, Dt, ct, Ue, Ot, tn, yn, qn, nn, ar, Vn, or, lr, rn, Pi, ge, po, vo, ds, fi, ci, ps;
class Ru {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    H(this, ge);
    /** @type {Boundary | null} */
    ce(this, "parent");
    ce(this, "is_pending", !1);
    /** @type {TemplateNode} */
    H(this, tt);
    /** @type {TemplateNode | null} */
    H(this, Br, j ? X : null);
    /** @type {BoundaryProps} */
    H(this, Pt);
    /** @type {((anchor: Node) => void)} */
    H(this, Ln);
    /** @type {Effect} */
    H(this, Dt);
    /** @type {Effect | null} */
    H(this, ct, null);
    /** @type {Effect | null} */
    H(this, Ue, null);
    /** @type {Effect | null} */
    H(this, Ot, null);
    /** @type {DocumentFragment | null} */
    H(this, tn, null);
    /** @type {TemplateNode | null} */
    H(this, yn, null);
    H(this, qn, 0);
    H(this, nn, 0);
    H(this, ar, !1);
    H(this, Vn, !1);
    /** @type {Set<Effect>} */
    H(this, or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, lr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, rn, null);
    H(this, Pi, Eu(() => (V(this, rn, Un(v(this, qn))), () => {
      V(this, rn, null);
    })));
    V(this, tt, t), V(this, Pt, n), V(this, Ln, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, Pt).pending, V(this, Dt, qs(() => {
      if (J.b = this, j) {
        const s = v(this, Br);
        qi(), /** @type {Comment} */
        s.nodeType === yr && /** @type {Comment} */
        s.data === Oi ? be(this, ge, vo).call(this) : (be(this, ge, po).call(this), v(this, nn) === 0 && (this.is_pending = !1));
      } else {
        var i = be(this, ge, ds).call(this);
        try {
          V(this, ct, dt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, nn) > 0 ? be(this, ge, ci).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, yn)) == null || s.remove();
      };
    }, Tu)), j && V(this, tt, X);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    oo(t, v(this, or), v(this, lr));
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
    be(this, ge, ps).call(this, t), V(this, qn, v(this, qn) + t), !(!v(this, rn) || v(this, ar)) && (V(this, ar, !0), xn(() => {
      V(this, ar, !1), v(this, rn) && pr(v(this, rn), v(this, qn));
    }));
  }
  get_effect_pending() {
    return v(this, Pi).call(this), x(
      /** @type {Source<number>} */
      v(this, rn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, Pt).onerror;
    let r = v(this, Pt).failed;
    if (v(this, Vn) || !n && !r)
      throw t;
    v(this, ct) && (Ve(v(this, ct)), V(this, ct, null)), v(this, Ue) && (Ve(v(this, Ue)), V(this, Ue, null)), v(this, Ot) && (Ve(v(this, Ot)), V(this, Ot, null)), j && (qe(
      /** @type {TemplateNode} */
      v(this, Br)
    ), us(), qe(Ai()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        yu();
        return;
      }
      i = !0, s && mu(), un.ensure(), V(this, qn, 0), v(this, Ot) !== null && Yn(v(this, Ot), () => {
        V(this, Ot, null);
      }), this.is_pending = this.has_pending_snippet(), V(this, ct, be(this, ge, fi).call(this, () => (V(this, Vn, !1), dt(() => v(this, Ln).call(this, v(this, tt)))))), v(this, nn) > 0 ? be(this, ge, ci).call(this) : this.is_pending = !1;
    };
    xn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        dr(o, v(this, Dt) && v(this, Dt).parent);
      }
      r && V(this, Ot, be(this, ge, fi).call(this, () => {
        un.ensure(), V(this, Vn, !0);
        try {
          return dt(() => {
            r(
              v(this, tt),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return dr(
            o,
            /** @type {Effect} */
            v(this, Dt).parent
          ), null;
        } finally {
          V(this, Vn, !1);
        }
      }));
    });
  }
}
tt = new WeakMap(), Br = new WeakMap(), Pt = new WeakMap(), Ln = new WeakMap(), Dt = new WeakMap(), ct = new WeakMap(), Ue = new WeakMap(), Ot = new WeakMap(), tn = new WeakMap(), yn = new WeakMap(), qn = new WeakMap(), nn = new WeakMap(), ar = new WeakMap(), Vn = new WeakMap(), or = new WeakMap(), lr = new WeakMap(), rn = new WeakMap(), Pi = new WeakMap(), ge = new WeakSet(), po = function() {
  try {
    V(this, ct, dt(() => v(this, Ln).call(this, v(this, tt))));
  } catch (t) {
    this.error(t);
  }
}, vo = function() {
  const t = v(this, Pt).pending;
  t && (V(this, Ue, dt(() => t(v(this, tt)))), xn(() => {
    var n = be(this, ge, ds).call(this);
    V(this, ct, be(this, ge, fi).call(this, () => (un.ensure(), dt(() => v(this, Ln).call(this, n))))), v(this, nn) > 0 ? be(this, ge, ci).call(this) : (Yn(
      /** @type {Effect} */
      v(this, Ue),
      () => {
        V(this, Ue, null);
      }
    ), this.is_pending = !1);
  }));
}, ds = function() {
  var t = v(this, tt);
  return this.is_pending && (V(this, yn, it()), v(this, tt).before(v(this, yn)), t = v(this, yn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
fi = function(t) {
  var n = J, r = B, i = st;
  qt(v(this, Dt)), gt(v(this, Dt)), hr(v(this, Dt).ctx);
  try {
    return t();
  } catch (s) {
    return so(s), null;
  } finally {
    qt(n), gt(r), hr(i);
  }
}, ci = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, Pt).pending
  );
  v(this, ct) !== null && (V(this, tn, document.createDocumentFragment()), v(this, tn).append(
    /** @type {TemplateNode} */
    v(this, yn)
  ), Do(v(this, ct), v(this, tn))), v(this, Ue) === null && V(this, Ue, dt(() => t(v(this, tt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && be(n = this.parent, ge, ps).call(n, t);
    return;
  }
  if (V(this, nn, v(this, nn) + t), v(this, nn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, or))
      de(r, ke), xt(r);
    for (const r of v(this, lr))
      de(r, $t), xt(r);
    v(this, or).clear(), v(this, lr).clear(), v(this, Ue) && Yn(v(this, Ue), () => {
      V(this, Ue, null);
    }), v(this, tn) && (v(this, tt).before(v(this, tn)), V(this, tn, null));
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
      (o.f & ln) === 0 && dr(d, o);
    }
    a == null || a.deactivate(), vs();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function p() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ ku(c))).then((c) => f([...t.map(i), ...c])).catch((c) => dr(c, o));
  }
  u ? u.then(p) : p();
}
function Nu() {
  var e = J, t = B, n = st, r = K;
  return function(s = !0) {
    qt(e), gt(t), hr(n), s && (r == null || r.activate());
  };
}
function vs() {
  qt(null), gt(null), hr(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  var t = Ne | ke, n = B !== null && (B.f & Ne) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return J !== null && (J.f |= jn), {
    ctx: st,
    deps: null,
    effects: null,
    equals: to,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Re
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
  ), a = Un(
    /** @type {V} */
    Re
  ), o = !B, l = /* @__PURE__ */ new Map();
  return zu(() => {
    var d;
    var u = Ka();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === K && f.committed && f.deactivate(), vs();
      });
    } catch (y) {
      u.reject(y), vs();
    }
    var f = (
      /** @type {Batch} */
      K
    );
    if (o) {
      var p = i.is_rendered();
      i.update_pending_count(1), f.increment(p), (d = l.get(f)) == null || d.reject(kn), l.delete(f), l.set(f, u);
    }
    const c = (y, b = void 0) => {
      if (f.activate(), b)
        b !== kn && (a.f |= wn, pr(a, b));
      else {
        (a.f & wn) !== 0 && (a.f ^= wn), pr(a, y);
        for (const [m, $] of l) {
          if (l.delete(m), m === f) break;
          $.reject(kn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(p));
    };
    u.promise.then(c, (y) => c(null, y || "unknown"));
  }), Lu(() => {
    for (const u of l.values())
      u.reject(kn);
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
function vn(e) {
  const t = /* @__PURE__ */ Yi(e);
  return Oo(t), t;
}
// @__NO_SIDE_EFFECTS__
function go(e) {
  const t = /* @__PURE__ */ Yi(e);
  return t.equals = no, t;
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
    if ((t.f & Ne) === 0)
      return (t.f & ln) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ds(e) {
  var t, n = J;
  qt(Pu(e));
  try {
    e.f &= ~Wn, Mu(e), t = qo(e);
  } finally {
    qt(n);
  }
  return t;
}
function _o(e) {
  var t = Ds(e);
  if (!e.equals(t) && (e.wv = Io(), (!(K != null && K.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, Ae);
    return;
  }
  An || (Se !== null ? (Fs() || K != null && K.is_fork) && Se.set(e, t) : Ps(e));
}
function Du(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(kn), r.teardown = eu, r.ac = null, Ir(r, 0), Vs(r));
}
function mo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && vr(t);
}
let gs = /* @__PURE__ */ new Set();
const bn = /* @__PURE__ */ new Map();
let yo = !1;
function Un(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: to,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  const n = Un(e);
  return Oo(n), n;
}
// @__NO_SIDE_EFFECTS__
function wo(e, t = !1, n = !0) {
  const r = Un(e);
  return t || (r.equals = no), r;
}
function he(e, t, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!bt || (B.f & ua) !== 0) && ro() && (B.f & (Ne | hn | Ms | ua)) !== 0 && (vt === null || !fr.call(vt, e)) && _u();
  let r = n ? Pn(t) : t;
  return pr(e, r);
}
function pr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    An ? bn.set(e, t) : bn.set(e, n), e.v = t;
    var r = un.ensure();
    if (r.capture(e, n), (e.f & Ne) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ke) !== 0 && Ds(i), Ps(i);
    }
    e.wv = Io(), xo(e, ke), J !== null && (J.f & Ae) !== 0 && (J.f & (At | En)) === 0 && (ft === null ? Bu([e]) : ft.push(e)), !r.is_fork && gs.size > 0 && !yo && Ou();
  }
  return t;
}
function Ou() {
  yo = !1;
  for (const e of gs)
    (e.f & Ae) !== 0 && de(e, $t), Gr(e) && vr(e);
  gs.clear();
}
function Or(e) {
  he(e, e.v + 1);
}
function xo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & ke) === 0;
      if (o && de(s, t), (a & Ne) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Se == null || Se.delete(l), (a & Wn) === 0 && (a & pt && (s.f |= Wn), xo(l, $t));
      } else o && ((a & hn) !== 0 && mt !== null && mt.add(
        /** @type {Effect} */
        s
      ), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function Pn(e) {
  if (typeof e != "object" || e === null || Pr in e)
    return e;
  const t = Ga(e);
  if (t !== Zl && t !== Ql)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ua(e), i = /* @__PURE__ */ $e(0), s = Bn, a = (o) => {
    if (Bn === s)
      return o();
    var l = B, u = Bn;
    gt(null), da(s);
    var f = o();
    return gt(l), da(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
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
          var p = /* @__PURE__ */ $e(u.value);
          return n.set(l, p), p;
        }) : he(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ $e(Re));
            n.set(l, f), Or(i);
          }
        } else
          he(u, Re), Or(i);
        return !0;
      },
      get(o, l, u) {
        var d;
        if (l === Pr)
          return e;
        var f = n.get(l), p = l in o;
        if (f === void 0 && (!p || (d = Hn(o, l)) != null && d.writable) && (f = a(() => {
          var y = Pn(p ? o[l] : Re), b = /* @__PURE__ */ $e(y);
          return b;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === Re ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var p = n.get(l), c = p == null ? void 0 : p.v;
          if (p !== void 0 && c !== Re)
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
        var u = n.get(l), f = u !== void 0 && u.v !== Re || Reflect.has(o, l);
        if (u !== void 0 || J !== null && (!f || (c = Hn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var d = f ? Pn(o[l]) : Re, y = /* @__PURE__ */ $e(d);
            return y;
          }), n.set(l, u));
          var p = x(u);
          if (p === Re)
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
            y !== void 0 ? he(y, Re) : d in o && (y = a(() => /* @__PURE__ */ $e(Re)), n.set(d + "", y));
          }
        if (p === void 0)
          (!c || (M = Hn(o, l)) != null && M.writable) && (p = a(() => /* @__PURE__ */ $e(void 0)), he(p, Pn(u)), n.set(l, p));
        else {
          c = p.v !== Re;
          var b = a(() => Pn(u));
          he(p, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= $.v && he($, D + 1);
          }
          Or(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((p) => {
          var c = n.get(p);
          return c === void 0 || c.v !== Re;
        });
        for (var [u, f] of n)
          f.v !== Re && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        gu();
      }
    }
  );
}
var ca, bo, $o, Ao;
function _s() {
  if (ca === void 0) {
    ca = window, bo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $o = Hn(t, "firstChild").get, Ao = Hn(t, "nextSibling").get, la(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), la(n) && (n.__t = void 0);
  }
}
function it(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return (
    /** @type {TemplateNode | null} */
    $o.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(e)
  );
}
function We(e, t) {
  if (!j)
    return /* @__PURE__ */ fn(e);
  var n = /* @__PURE__ */ fn(X);
  if (n === null)
    n = X.appendChild(it());
  else if (t && n.nodeType !== Ur) {
    var r = it();
    return n == null || n.before(r), qe(r), r;
  }
  return t && Bi(
    /** @type {Text} */
    n
  ), qe(n), n;
}
function _n(e, t = !1) {
  if (!j) {
    var n = /* @__PURE__ */ fn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ zt(n) : n;
  }
  if (t) {
    if ((X == null ? void 0 : X.nodeType) !== Ur) {
      var r = it();
      return X == null || X.before(r), qe(r), r;
    }
    Bi(
      /** @type {Text} */
      X
    );
  }
  return X;
}
function Qe(e, t = 1, n = !1) {
  let r = j ? X : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ zt(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ur) {
      var s = it();
      return r === null ? i == null || i.after(s) : r.before(s), qe(s), s;
    }
    Bi(
      /** @type {Text} */
      r
    );
  }
  return qe(r), r;
}
function Eo(e) {
  e.textContent = "";
}
function To() {
  return !1;
}
function Os(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Wa, e, void 0)
  );
}
function Bi(e) {
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
function Co(e) {
  var t = B, n = J;
  gt(null), qt(null);
  try {
    return e();
  } finally {
    gt(t), qt(n);
  }
}
function Fu(e) {
  J === null && (B === null && cu(), fu()), An && uu();
}
function Iu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ht(e, t, n) {
  var r = J;
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
      vr(i);
    } catch (o) {
      throw Ve(i), o;
    }
  else t !== null && xt(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & jn) === 0 && (s = s.first, (e & hn) !== 0 && (e & cr) !== 0 && s !== null && (s.f |= cr)), s !== null && (s.parent = r, r !== null && Iu(s, r), B !== null && (B.f & Ne) !== 0 && (e & En) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Fs() {
  return B !== null && !bt;
}
function Lu(e) {
  const t = Ht(Ii, null, !1);
  return de(t, Ae), t.teardown = e, t;
}
function Is(e) {
  Fu();
  var t = (
    /** @type {Effect} */
    J.f
  ), n = !B && (t & At) !== 0 && (t & mr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ro(e);
}
function Ro(e) {
  return Ht(Fr | ru, e, !1);
}
function qu(e) {
  un.ensure();
  const t = Ht(En | jn, e, !0);
  return () => {
    Ve(t);
  };
}
function Vu(e) {
  un.ensure();
  const t = Ht(En | jn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yn(t, () => {
      Ve(t), r(void 0);
    }) : (Ve(t), r(void 0));
  });
}
function So(e) {
  return Ht(Fr, e, !1);
}
function zu(e) {
  return Ht(Ms | jn, e, !0);
}
function Ls(e, t = 0) {
  return Ht(Ii | t, e, !0);
}
function Qt(e, t = [], n = [], r = []) {
  Su(r, t, n, (i) => {
    Ht(Ii, () => e(...i.map(x)), !0);
  });
}
function qs(e, t = 0) {
  var n = Ht(hn | t, e, !0);
  return n;
}
function dt(e) {
  return Ht(At | jn, e, !0);
}
function No(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = An, r = B;
    ha(!0), gt(null);
    try {
      t.call(null);
    } finally {
      ha(n), gt(r);
    }
  }
}
function Vs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Co(() => {
      i.abort(kn);
    });
    var r = n.next;
    (n.f & En) !== 0 ? n.parent = null : Ve(n, t), n = r;
  }
}
function Hu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & At) === 0 && Ve(t), t = n;
  }
}
function Ve(e, t = !0) {
  var n = !1;
  (t || (e.f & Za) !== 0) && e.nodes !== null && e.nodes.end !== null && (Yu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Vs(e, t && !n), Ir(e, 0), de(e, ln);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  No(e);
  var i = e.parent;
  i !== null && i.first !== null && ko(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Yu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ zt(e);
    e.remove(), e = n;
  }
}
function ko(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Yn(e, t, n = !0) {
  var r = [];
  Mo(e, r, !0);
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
function Mo(e, t, n) {
  if ((e.f & rt) === 0) {
    e.f ^= rt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & cr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & At) !== 0 && (e.f & hn) !== 0;
      Mo(i, t, a ? n : !1), i = s;
    }
  }
}
function zs(e) {
  Po(e, !0);
}
function Po(e, t) {
  if ((e.f & rt) !== 0) {
    e.f ^= rt, (e.f & Ae) === 0 && (de(e, ke), xt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & cr) !== 0 || (n.f & At) !== 0;
      Po(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Do(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ zt(n);
      t.append(n), n = i;
    }
}
let hi = !1, An = !1;
function ha(e) {
  An = e;
}
let B = null, bt = !1;
function gt(e) {
  B = e;
}
let J = null;
function qt(e) {
  J = e;
}
let vt = null;
function Oo(e) {
  B !== null && (vt === null ? vt = [e] : vt.push(e));
}
let je = null, et = 0, ft = null;
function Bu(e) {
  ft = e;
}
let Fo = 1, Dn = 0, Bn = Dn;
function da(e) {
  Bn = e;
}
function Io() {
  return ++Fo;
}
function Gr(e) {
  var t = e.f;
  if ((t & ke) !== 0)
    return !0;
  if (t & Ne && (e.f &= ~Wn), (t & $t) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gr(
        /** @type {Derived} */
        s
      ) && _o(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & pt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Se === null && de(e, Ae);
  }
  return !1;
}
function Lo(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(vt !== null && fr.call(vt, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Ne) !== 0 ? Lo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? de(s, ke) : (s.f & Ae) !== 0 && de(s, $t), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function qo(e) {
  var b;
  var t = je, n = et, r = ft, i = B, s = vt, a = st, o = bt, l = Bn, u = e.f;
  je = /** @type {null | Value[]} */
  null, et = 0, ft = null, B = (u & (At | En)) === 0 ? e : null, vt = null, hr(e.ctx), bt = !1, Bn = ++Dn, e.ac !== null && (Co(() => {
    e.ac.abort(kn);
  }), e.ac = null);
  try {
    e.f |= ls;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f();
    e.f |= mr;
    var c = e.deps, d = K == null ? void 0 : K.is_fork;
    if (je !== null) {
      var y;
      if (d || Ir(e, et), c !== null && et > 0)
        for (c.length = et + je.length, y = 0; y < je.length; y++)
          c[et + y] = je[y];
      else
        e.deps = c = je;
      if (Fs() && (e.f & pt) !== 0)
        for (y = et; y < c.length; y++)
          ((b = c[y]).reactions ?? (b.reactions = [])).push(e);
    } else !d && c !== null && et < c.length && (Ir(e, et), c.length = et);
    if (ro() && ft !== null && !bt && c !== null && (e.f & (Ne | $t | ke)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      ft.length; y++)
        Lo(
          ft[y],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Dn++, i.deps !== null)
        for (let m = 0; m < n; m += 1)
          i.deps[m].rv = Dn;
      if (t !== null)
        for (const m of t)
          m.rv = Dn;
      ft !== null && (r === null ? r = ft : r.push(.../** @type {Source[]} */
      ft));
    }
    return (e.f & wn) !== 0 && (e.f ^= wn), p;
  } catch (m) {
    return so(m);
  } finally {
    e.f ^= ls, je = t, et = n, ft = r, B = i, vt = s, hr(a), bt = o, Bn = l;
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
  if (n === null && (t.f & Ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !fr.call(je, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & pt) !== 0 && (s.f ^= pt, s.f &= ~Wn), Ps(s), Du(s), Ir(s, 0);
  }
}
function Ir(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Xu(e, n[r]);
}
function vr(e) {
  var t = e.f;
  if ((t & ln) === 0) {
    de(e, Ae);
    var n = J, r = hi;
    J = e, hi = !0;
    try {
      (t & (hn | ja)) !== 0 ? Hu(e) : Vs(e), No(e);
      var i = qo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Fo;
      var s;
      os && xu && (e.f & ke) !== 0 && e.deps;
    } finally {
      hi = r, J = n;
    }
  }
}
function x(e) {
  var t = e.f, n = (t & Ne) !== 0;
  if (B !== null && !bt) {
    var r = J !== null && (J.f & ln) !== 0;
    if (!r && (vt === null || !fr.call(vt, e))) {
      var i = B.deps;
      if ((B.f & ls) !== 0)
        e.rv < Dn && (e.rv = Dn, je === null && i !== null && i[et] === e ? et++ : je === null ? je = [e] : je.push(e));
      else {
        (B.deps ?? (B.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [B] : fr.call(s, B) || s.push(B);
      }
    }
  }
  if (An && bn.has(e))
    return bn.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (An) {
      var o = a.v;
      return ((a.f & Ae) === 0 && a.reactions !== null || zo(a)) && (o = Ds(a)), bn.set(a, o), o;
    }
    var l = (a.f & pt) === 0 && !bt && B !== null && (hi || (B.f & pt) !== 0), u = (a.f & mr) === 0;
    Gr(a) && (l && (a.f |= pt), _o(a)), l && !u && (mo(a), Vo(a));
  }
  if (Se != null && Se.has(e))
    return Se.get(e);
  if ((e.f & wn) !== 0)
    throw e.v;
  return e.v;
}
function Vo(e) {
  if (e.f |= pt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ne) !== 0 && (t.f & pt) === 0 && (mo(
        /** @type {Derived} */
        t
      ), Vo(
        /** @type {Derived} */
        t
      ));
}
function zo(e) {
  if (e.v === Re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (bn.has(t) || (t.f & Ne) !== 0 && zo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xi(e) {
  var t = bt;
  try {
    return bt = !0, e();
  } finally {
    bt = t;
  }
}
const Ho = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Wu(e) {
  for (var t = 0; t < e.length; t++)
    Ho.add(e[t]);
  for (var n of ms)
    n(e);
}
let pa = null;
function va(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  pa = e;
  var a = 0, o = pa === e && e.__root;
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
    var f = B, p = J;
    gt(null), qt(null);
    try {
      for (var c, d = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + r];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch ($) {
          c ? d.push($) : c = $;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        s = y;
      }
      if (c) {
        for (let $ of d)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, gt(f), qt(p);
    }
  }
}
var Ya, Ba;
const ts = (Ba = (Ya = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ya.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ba.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (e) => e
  }
);
function Uu(e) {
  return (
    /** @type {string} */
    (ts == null ? void 0 : ts.createHTML(e)) ?? e
  );
}
function Yo(e, t = !1) {
  var n = Os("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? Uu(e) : e, n.content;
}
function $n(e, t) {
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
      return $n(X, null), X;
    i === void 0 && (i = Yo(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(i)));
    var a = (
      /** @type {TemplateNode} */
      r || bo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fn(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $n(o, l);
    } else
      $n(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Gu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (j)
      return $n(X, null), X;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Yo(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ fn(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ fn(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return $n(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ku(e, t) {
  return /* @__PURE__ */ Gu(e, t, "svg");
}
function ga(e = "") {
  if (!j) {
    var t = it(e + "");
    return $n(t, t), t;
  }
  var n = X;
  return n.nodeType !== Ur ? (n.before(n = it()), qe(n)) : Bi(
    /** @type {Text} */
    n
  ), $n(n, n), n;
}
function Ge(e, t) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & mr) === 0 || n.nodes.end === null) && (n.nodes.end = X), qi();
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
function mn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Bo(e, t) {
  return Xo(e, t);
}
function Zu(e, t) {
  _s(), t.intro = t.intro ?? !1;
  const n = t.target, r = j, i = X;
  try {
    for (var s = /* @__PURE__ */ fn(n); s && (s.nodeType !== yr || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ zt(s);
    if (!s)
      throw ur;
    on(!0), qe(
      /** @type {Comment} */
      s
    );
    const a = Xo(e, { ...t, anchor: s });
    return on(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ur && console.warn("Failed to hydrate: ", a), t.recover === !1 && du(), _s(), Eo(n), on(!1), Bo(e, t);
  } finally {
    on(r), qe(i);
  }
}
const ri = /* @__PURE__ */ new Map();
function Xo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _s();
  var o = /* @__PURE__ */ new Set(), l = (p) => {
    for (var c = 0; c < p.length; c++) {
      var d = p[c];
      if (!o.has(d)) {
        o.add(d);
        var y = Ju(d);
        for (const $ of [t, document]) {
          var b = ri.get($);
          b === void 0 && (b = /* @__PURE__ */ new Map(), ri.set($, b));
          var m = b.get(d);
          m === void 0 ? ($.addEventListener(d, va, { passive: y }), b.set(d, 1)) : b.set(d, m + 1);
        }
      }
    }
  };
  l(Fi(Ho)), ms.add(l);
  var u = void 0, f = Vu(() => {
    var p = n ?? t.appendChild(it());
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
          st
        );
        if (s && (d.c = s), i && (r.$$events = i), j && $n(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, j && (J.nodes.end = X, X === null || X.nodeType !== yr || /** @type {Comment} */
        X.data !== ks))
          throw Li(), ur;
        zi();
      }
    ), () => {
      var b;
      for (var c of o)
        for (const m of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            ri.get(m)
          ), y = (
            /** @type {number} */
            d.get(c)
          );
          --y == 0 ? (m.removeEventListener(c, va), d.delete(c), d.size === 0 && ri.delete(m)) : d.set(c, y);
        }
      ms.delete(l), p !== n && ((b = p.parentNode) == null || b.removeChild(p));
    };
  });
  return ys.set(u, f), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function Qu(e, t) {
  const n = ys.get(e);
  return n ? (ys.delete(e), n(t)) : Promise.resolve();
}
var yt, Ft, nt, zn, Xr, Wr, Di;
class ef {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ce(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, yt, /* @__PURE__ */ new Map());
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
    H(this, nt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, zn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, Xr, !0);
    H(this, Wr, () => {
      var t = (
        /** @type {Batch} */
        K
      );
      if (v(this, yt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, yt).get(t)
        ), r = v(this, Ft).get(n);
        if (r)
          zs(r), v(this, zn).delete(n);
        else {
          var i = v(this, nt).get(n);
          i && (v(this, Ft).set(n, i.effect), v(this, nt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, yt)) {
          if (v(this, yt).delete(s), s === t)
            break;
          const o = v(this, nt).get(a);
          o && (Ve(o.effect), v(this, nt).delete(a));
        }
        for (const [s, a] of v(this, Ft)) {
          if (s === n || v(this, zn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, yt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Do(a, u), u.append(it()), v(this, nt).set(s, { effect: a, fragment: u });
            } else
              Ve(a);
            v(this, zn).delete(s), v(this, Ft).delete(s);
          };
          v(this, Xr) || !r ? (v(this, zn).add(s), Yn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, Di, (t) => {
      v(this, yt).delete(t);
      const n = Array.from(v(this, yt).values());
      for (const [r, i] of v(this, nt))
        n.includes(r) || (Ve(i.effect), v(this, nt).delete(r));
    });
    this.anchor = t, V(this, Xr, n);
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
    ), i = To();
    if (n && !v(this, Ft).has(t) && !v(this, nt).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = it();
        s.append(a), v(this, nt).set(t, {
          effect: dt(() => n(a)),
          fragment: s
        });
      } else
        v(this, Ft).set(
          t,
          dt(() => n(this.anchor))
        );
    if (v(this, yt).set(r, t), i) {
      for (const [o, l] of v(this, Ft))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, nt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Wr)), r.ondiscard(v(this, Di));
    } else
      j && (this.anchor = X), v(this, Wr).call(this);
  }
}
yt = new WeakMap(), Ft = new WeakMap(), nt = new WeakMap(), zn = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), Di = new WeakMap();
function tf(e) {
  st === null && au(), Is(() => {
    const t = Xi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Qn(e, t, n = !1) {
  j && qi();
  var r = new ef(e), i = n ? cr : 0;
  function s(a, o) {
    if (j) {
      const f = eo(e);
      var l;
      if (f === Ns ? l = 0 : f === Oi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ai();
        qe(u), r.anchor = u, on(!1), r.ensure(a, o), on(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  qs(() => {
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
    Yn(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ws(Fi(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
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
      Eo(f), f.append(u), e.items.clear();
    }
    ws(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ws(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ve(e[n], t);
}
var _a;
function pi(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Xa) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = j ? qe(/* @__PURE__ */ fn(u)) : u.appendChild(it());
  }
  j && qi();
  var f = null, p = /* @__PURE__ */ go(() => {
    var $ = n();
    return Ua($) ? $ : $ == null ? [] : Fi($);
  }), c, d = !0;
  function y() {
    m.fallback = f, rf(m, c, a, t, r), f !== null && (c.length === 0 ? (f.f & an) === 0 ? zs(f) : (f.f ^= an, Sr(f, null, a)) : Yn(f, () => {
      f = null;
    }));
  }
  var b = qs(() => {
    c = /** @type {V[]} */
    x(p);
    var $ = c.length;
    let D = !1;
    if (j) {
      var M = eo(a) === Oi;
      M !== ($ === 0) && (a = Ai(), qe(a), on(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      K
    ), L = To(), W = 0; W < $; W += 1) {
      j && X.nodeType === yr && /** @type {Comment} */
      X.data === ks && (a = /** @type {Comment} */
      X, D = !0, on(!1));
      var oe = c[W], Q = r(oe, W), U = d ? null : o.get(Q);
      U ? (U.v && pr(U.v, oe), U.i && pr(U.i, W), L && I.unskip_effect(U.e)) : (U = sf(
        o,
        d ? a : _a ?? (_a = it()),
        oe,
        Q,
        W,
        i,
        t,
        n
      ), d || (U.e.f |= an), o.set(Q, U)), S.add(Q);
    }
    if ($ === 0 && s && !f && (d ? f = dt(() => s(a)) : (f = dt(() => s(_a ?? (_a = it()))), f.f |= an)), $ > S.size && lu(), j && $ > 0 && qe(Ai()), !d)
      if (L) {
        for (const [le, ue] of o)
          S.has(le) || I.skip_effect(ue.e);
        I.oncommit(y), I.ondiscard(() => {
        });
      } else
        y();
    D && on(!0), x(p);
  }), m = { effect: b, items: o, outrogroups: null, fallback: f };
  d = !1, j && (a = X);
}
function Cr(e) {
  for (; e !== null && (e.f & At) === 0; )
    e = e.next;
  return e;
}
function rf(e, t, n, r, i) {
  var U, le, ue, O, F, Me, ot, ye, we;
  var s = (r & Hl) !== 0, a = t.length, o = e.items, l = Cr(e.effect.first), u, f = null, p, c = [], d = [], y, b, m, $;
  if (s)
    for ($ = 0; $ < a; $ += 1)
      y = t[$], b = i(y, $), m = /** @type {EachItem} */
      o.get(b).e, (m.f & an) === 0 && ((le = (U = m.nodes) == null ? void 0 : U.a) == null || le.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(m));
  for ($ = 0; $ < a; $ += 1) {
    if (y = t[$], b = i(y, $), m = /** @type {EachItem} */
    o.get(b).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(m), ee.done.delete(m);
    if ((m.f & an) !== 0)
      if (m.f ^= an, m === l)
        Sr(m, null, n);
      else {
        var D = f ? f.next : l;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), gn(e, f, m), gn(e, m, D), Sr(m, D, n), f = m, c = [], d = [], l = Cr(f.next);
        continue;
      }
    if ((m.f & rt) !== 0 && (zs(m), s && ((O = (ue = m.nodes) == null ? void 0 : ue.a) == null || O.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (c.length < d.length) {
          var M = d[0], S;
          f = M.prev;
          var I = c[0], L = c[c.length - 1];
          for (S = 0; S < c.length; S += 1)
            Sr(c[S], M, n);
          for (S = 0; S < d.length; S += 1)
            u.delete(d[S]);
          gn(e, I.prev, L.next), gn(e, f, I), gn(e, L, M), l = M, f = L, $ -= 1, c = [], d = [];
        } else
          u.delete(m), Sr(m, l, n), gn(e, m.prev, m.next), gn(e, m, f === null ? e.effect.first : f.next), gn(e, f, m), f = m;
        continue;
      }
      for (c = [], d = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Cr(l.next);
      if (l === null)
        continue;
    }
    (m.f & an) === 0 && c.push(m), f = m, l = Cr(m.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (ws(Fi(ee.done)), (F = e.outrogroups) == null || F.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var W = [];
    if (u !== void 0)
      for (m of u)
        (m.f & rt) === 0 && W.push(m);
    for (; l !== null; )
      (l.f & rt) === 0 && l !== e.fallback && W.push(l), l = Cr(l.next);
    var oe = W.length;
    if (oe > 0) {
      var Q = (r & Xa) !== 0 && a === 0 ? n : null;
      if (s) {
        for ($ = 0; $ < oe; $ += 1)
          (ot = (Me = W[$].nodes) == null ? void 0 : Me.a) == null || ot.measure();
        for ($ = 0; $ < oe; $ += 1)
          (we = (ye = W[$].nodes) == null ? void 0 : ye.a) == null || we.fix();
      }
      nf(e, W, Q);
    }
  }
  s && xn(() => {
    var ee, Pe;
    if (p !== void 0)
      for (m of p)
        (Pe = (ee = m.nodes) == null ? void 0 : ee.a) == null || Pe.apply();
  });
}
function sf(e, t, n, r, i, s, a, o) {
  var l = (a & Vl) !== 0 ? (a & Yl) === 0 ? /* @__PURE__ */ wo(n, !1, !1) : Un(n) : null, u = (a & zl) !== 0 ? Un(i) : null;
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
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & an) === 0 ? (
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
function gn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Hs(e, t) {
  So(() => {
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
      const i = Os("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const ma = [...` 	
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
          (a === 0 || ma.includes(r[a - 1])) && (o === r.length || ma.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function ya(e, t = !1) {
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
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += ya(r)), i && (n += ya(i, !0)), n = n.trim(), n === "" ? null : n;
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
function ns(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function wa(e, t, n, r) {
  var i = e.__style;
  if (j || i !== t) {
    var s = of(t, r);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (ns(e, n == null ? void 0 : n[0], r[0]), ns(e, n == null ? void 0 : n[1], r[1], "important")) : ns(e, n, r));
  return r;
}
const lf = Symbol("is custom element"), uf = Symbol("is html"), ff = su ? "link" : "LINK";
function xa(e, t, n, r) {
  var i = cf(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ff) || i[t] !== (i[t] = n) && (t === "loading" && (e[iu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && hf(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function cf(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [lf]: e.nodeName.includes("-"),
      [uf]: e.namespaceURI === Wa
    })
  );
}
var ba = /* @__PURE__ */ new Map();
function hf(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ba.get(t);
  if (n) return n;
  ba.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Jl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ga(i);
  }
  return n;
}
function $a(e, t) {
  return e === t || (e == null ? void 0 : e[Pr]) === t;
}
function vi(e = {}, t, n, r) {
  return So(() => {
    var i, s;
    return Ls(() => {
      i = s, s = [], Xi(() => {
        e !== n(...s) && (t(e, ...s), i && $a(n(...i), e) && t(null, ...i));
      });
    }), () => {
      xn(() => {
        s && $a(n(...s), e) && t(null, ...s);
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
function ae(e, t, n, r) {
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
    var f = Pr in e || Qa in e;
    u = ((D = Hn(e, t)) == null ? void 0 : D.set) ?? (f && t in e ? (M) => e[t] = M : void 0);
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
  var b = !1, m = ((n & Bl) !== 0 ? Yi : go)(() => (b = !1, d()));
  i && x(m);
  var $ = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    (function(M, S) {
      if (arguments.length > 0) {
        const I = S ? x(m) : i ? Pn(M) : M;
        return he(m, I), b = !0, a !== void 0 && (a = I), M;
      }
      return An && b || ($.f & ln) !== 0 ? m.v : x(m);
    })
  );
}
function pf(e) {
  return new vf(e);
}
var sn, ht;
class vf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    H(this, sn);
    /** @type {Record<string, any>} */
    H(this, ht);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ wo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Qa ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return he(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    V(this, ht, (t.hydrate ? Zu : Bo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && re(), V(this, sn, i.$$events);
    for (const a of Object.keys(v(this, ht)))
      a === "$set" || a === "$destroy" || a === "$on" || $i(this, a, {
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
      Qu(v(this, ht));
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
    v(this, sn)[t] = v(this, sn)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, sn)[t].push(r), () => {
      v(this, sn)[t] = v(this, sn)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ht).$destroy();
  }
}
sn = new WeakMap(), ht = new WeakMap();
let Wo;
typeof HTMLElement == "function" && (Wo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    ce(this, "$$ctor");
    /** Slots */
    ce(this, "$$s");
    /** @type {any} The Svelte component instance */
    ce(this, "$$c");
    /** Whether or not the custom element is connected */
    ce(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ce(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ce(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ce(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ce(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ce(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ce(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ce(this, "$$shadowRoot", null);
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
          const o = Os("slot");
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
        Ls(() => {
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
function Ys(e, t, n, r, i, s) {
  let a = class extends Wo {
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
          var f = (p = Hn(u, o)) == null ? void 0 : p.get;
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
function Uo() {
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
_i.prototype = Uo.prototype = {
  constructor: _i,
  on: function(e, t) {
    var n = this._, r = mf(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = yf(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (i = (e = r[s]).type) n[i] = Aa(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Aa(n[i], e.name, null);
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
function Aa(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = _f, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var xs = "http://www.w3.org/1999/xhtml";
const Ea = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ea.hasOwnProperty(t) ? { space: Ea[t], local: e } : e;
}
function wf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === xs && t.documentElement.namespaceURI === xs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Go(e) {
  var t = Wi(e);
  return (t.local ? xf : wf)(t);
}
function bf() {
}
function Bs(e) {
  return e == null ? bf : function() {
    return this.querySelector(e);
  };
}
function $f(e) {
  typeof e != "function" && (e = Bs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new at(r, this._parents);
}
function Af(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ef() {
  return [];
}
function Ko(e) {
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
  typeof e == "function" ? e = Tf(e) : e = Ko(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new at(r, i);
}
function jo(e) {
  return function() {
    return this.matches(e);
  };
}
function Jo(e) {
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
  return this.select(e == null ? Nf : Sf(typeof e == "function" ? e : Jo(e)));
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
  return this.selectAll(e == null ? Pf : Df(typeof e == "function" ? e : Jo(e)));
}
function Ff(e) {
  typeof e != "function" && (e = jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new at(r, this._parents);
}
function Zo(e) {
  return new Array(e.length);
}
function If() {
  return new at(this._enter || this._groups.map(Zo), this._parents);
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
    var f = r[u], p = i[u], c = p.length, d = Yf(e.call(f, f && f.__data__, u, r)), y = d.length, b = o[u] = new Array(y), m = a[u] = new Array(y), $ = l[u] = new Array(c);
    n(f, p, b, m, $, d, t);
    for (var D = 0, M = 0, S, I; D < y; ++D)
      if (S = b[D]) {
        for (D >= M && (M = D + 1); !(I = m[M]) && ++M < y; ) ;
        S._next = I || null;
      }
  }
  return a = new at(a, r), a._enter = o, a._exit = l, a;
}
function Yf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Bf() {
  return new at(this._exit || this._groups.map(Zo), this._parents);
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
  return new at(o, this._parents);
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
  return new at(i, this._parents).order();
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
function Qo(e) {
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
  return arguments.length > 1 ? this.each((t == null ? uc : typeof t == "function" ? cc : fc)(e, t, n ?? "")) : gr(this.node(), e);
}
function gr(e, t) {
  return e.style.getPropertyValue(t) || Qo(e).getComputedStyle(e, null).getPropertyValue(t);
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
function el(e) {
  return e.trim().split(/^|\s+/);
}
function Xs(e) {
  return e.classList || new tl(e);
}
function tl(e) {
  this._node = e, this._names = el(e.getAttribute("class") || "");
}
tl.prototype = {
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
function nl(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function rl(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function _c(e) {
  return function() {
    nl(this, e);
  };
}
function mc(e) {
  return function() {
    rl(this, e);
  };
}
function yc(e, t) {
  return function() {
    (t.apply(this, arguments) ? nl : rl)(this, e);
  };
}
function wc(e, t) {
  var n = el(e + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
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
  var t = typeof e == "function" ? e : Go(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Dc() {
  return null;
}
function Oc(e, t) {
  var n = typeof e == "function" ? e : Go(e), r = t == null ? Dc : typeof t == "function" ? t : Bs(t);
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
function il(e, t, n) {
  var r = Qo(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Uc(e, t) {
  return function() {
    return il(this, e, t);
  };
}
function Gc(e, t) {
  return function() {
    return il(this, e, t.apply(this, arguments));
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
var sl = [null];
function at(e, t) {
  this._groups = e, this._parents = t;
}
function wr() {
  return new at([[document.documentElement]], sl);
}
function Jc() {
  return this;
}
at.prototype = wr.prototype = {
  constructor: at,
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
  return typeof e == "string" ? new at([[document.querySelector(e)]], [document.documentElement]) : new at([[e]], sl);
}
function Ws(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function al(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Kr() {
}
var Lr = 0.7, Ti = 1 / Lr, tr = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zc = /^#([0-9a-f]{3,8})$/, Qc = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), eh = new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`), th = new RegExp(`^rgba\\(${tr},${tr},${tr},${qr}\\)$`), nh = new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${qr}\\)$`), rh = new RegExp(`^hsl\\(${qr},${Lt},${Lt}\\)$`), ih = new RegExp(`^hsla\\(${qr},${Lt},${Lt},${qr}\\)$`), Ta = {
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
Ws(Kr, Gn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: sh,
  formatHsl: ah,
  formatRgb: Ra,
  toString: Ra
});
function Ca() {
  return this.rgb().formatHex();
}
function sh() {
  return this.rgb().formatHex8();
}
function ah() {
  return ol(this).formatHsl();
}
function Ra() {
  return this.rgb().formatRgb();
}
function Gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sa(t) : n === 3 ? new Je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ai(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ai(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qc.exec(e)) ? new Je(t[1], t[2], t[3], 1) : (t = eh.exec(e)) ? new Je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = th.exec(e)) ? ai(t[1], t[2], t[3], t[4]) : (t = nh.exec(e)) ? ai(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rh.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, 1) : (t = ih.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, t[4]) : Ta.hasOwnProperty(e) ? Sa(Ta[e]) : e === "transparent" ? new Je(NaN, NaN, NaN, 0) : null;
}
function Sa(e) {
  return new Je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ai(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Je(e, t, n, r);
}
function oh(e) {
  return e instanceof Kr || (e = Gn(e)), e ? (e = e.rgb(), new Je(e.r, e.g, e.b, e.opacity)) : new Je();
}
function bs(e, t, n, r) {
  return arguments.length === 1 ? oh(e) : new Je(e, t, n, r ?? 1);
}
function Je(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ws(Je, bs, al(Kr, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Je(Xn(this.r), Xn(this.g), Xn(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Na,
  // Deprecated! Use color.formatHex.
  formatHex: Na,
  formatHex8: lh,
  formatRgb: ka,
  toString: ka
}));
function Na() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function lh() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ka() {
  const e = Ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xn(this.r)}, ${Xn(this.g)}, ${Xn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = Xn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ma(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new wt(e, t, n, r);
}
function ol(e) {
  if (e instanceof wt) return new wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Kr || (e = Gn(e)), !e) return new wt();
  if (e instanceof wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new wt(a, o, l, e.opacity);
}
function uh(e, t, n, r) {
  return arguments.length === 1 ? ol(e) : new wt(e, t, n, r ?? 1);
}
function wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ws(wt, uh, al(Kr, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Je(
      rs(e >= 240 ? e - 240 : e + 120, i, r),
      rs(e, i, r),
      rs(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new wt(Pa(this.h), oi(this.s), oi(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Pa(this.h)}, ${oi(this.s) * 100}%, ${oi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Pa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function oi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
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
  return (e = +e) == 1 ? ll : function(t, n) {
    return n - t ? ch(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function ll(e, t) {
  var n = t - e;
  return n ? fh(e, n) : Us(isNaN(e) ? t : e);
}
const Ri = (function e(t) {
  var n = hh(t);
  function r(i, s) {
    var a = n((i = bs(i)).r, (s = bs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ll(i.opacity, s.opacity);
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
  for (a = 0; a < r; ++a) i[a] = Zt(e[a], t[a]);
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
    i in e ? n[i] = Zt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var $s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, is = new RegExp($s.source, "g");
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
function ul(e, t) {
  var n = $s.lastIndex = is.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = $s.exec(e)) && (i = is.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: It(r, i) })), n = is.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? yh(l[0].x) : mh(t) : (t = l.length, function(u) {
    for (var f = 0, p; f < t; ++f) o[(p = l[f]).i] = p.x(u);
    return o.join("");
  });
}
function Zt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? It : n === "string" ? (r = Gn(t)) ? (t = r, Ri) : ul : t instanceof Gn ? Ri : t instanceof Date ? gh : ph(t) ? dh : Array.isArray(t) ? vh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _h : It)(e, t);
}
var Da = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function fl(e, t, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Da,
    skewX: Math.atan(l) * Da,
    scaleX: a,
    scaleY: o
  };
}
var li;
function wh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? As : fl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function xh(e) {
  return e == null || (li || (li = document.createElementNS("http://www.w3.org/2000/svg", "g")), li.setAttribute("transform", e), !(e = li.transform.baseVal.consolidate())) ? As : (e = e.matrix, fl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cl(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, p, c, d, y) {
    if (u !== p || f !== c) {
      var b = d.push("translate(", null, t, null, n);
      y.push({ i: b - 4, x: It(u, p) }, { i: b - 2, x: It(f, c) });
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
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: It(u, p) }, { i: b - 2, x: It(f, c) });
    } else (p !== 1 || c !== 1) && d.push(i(d) + "scale(" + p + "," + c + ")");
  }
  return function(u, f) {
    var p = [], c = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, p, c), a(u.rotate, f.rotate, p, c), o(u.skewX, f.skewX, p, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, c), u = f = null, function(d) {
      for (var y = -1, b = c.length, m; ++y < b; ) p[(m = c[y]).i] = m.x(d);
      return p.join("");
    };
  };
}
var bh = cl(wh, "px, ", "px)", "deg)"), $h = cl(xh, ", ", ")", ")"), _r = 0, Nr = 0, Rr = 0, hl = 1e3, Si, kr, Ni = 0, Kn = 0, Ui = 0, Vr = typeof performance == "object" && performance.now ? performance : Date, dl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Gs() {
  return Kn || (dl(Ah), Kn = Vr.now() + Ui);
}
function Ah() {
  Kn = 0;
}
function ki() {
  this._call = this._time = this._next = null;
}
ki.prototype = pl.prototype = {
  constructor: ki,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (t == null ? 0 : +t), !this._next && kr !== this && (kr ? kr._next = this : Si = this, kr = this), this._call = e, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function pl(e, t, n) {
  var r = new ki();
  return r.restart(e, t, n), r;
}
function Eh() {
  Gs(), ++_r;
  for (var e = Si, t; e; )
    (t = Kn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --_r;
}
function Oa() {
  Kn = (Ni = Vr.now()) + Ui, _r = Nr = 0;
  try {
    Eh();
  } finally {
    _r = 0, Ch(), Kn = 0;
  }
}
function Th() {
  var e = Vr.now(), t = e - Ni;
  t > hl && (Ui -= t, Ni = e);
}
function Ch() {
  for (var e, t = Si, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Si = n);
  kr = e, Es(r);
}
function Es(e) {
  if (!_r) {
    Nr && (Nr = clearTimeout(Nr));
    var t = e - Kn;
    t > 24 ? (e < 1 / 0 && (Nr = setTimeout(Oa, e - Vr.now() - Ui)), Rr && (Rr = clearInterval(Rr))) : (Rr || (Ni = Vr.now(), Rr = setInterval(Th, hl)), _r = 1, dl(Oa));
  }
}
function Fa(e, t, n) {
  var r = new ki();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var Rh = Uo("start", "end", "cancel", "interrupt"), Sh = [], vl = 0, Ia = 1, Ts = 2, mi = 3, La = 4, Cs = 5, yi = 6;
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
    state: vl
  });
}
function Ks(e, t) {
  var n = Et(e, t);
  if (n.state > vl) throw new Error("too late; already scheduled");
  return n;
}
function Bt(e, t) {
  var n = Et(e, t);
  if (n.state > mi) throw new Error("too late; already running");
  return n;
}
function Et(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Nh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = pl(s, 0, n.time);
  function s(u) {
    n.state = Ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, p, c, d;
    if (n.state !== Ia) return l();
    for (f in r)
      if (d = r[f], d.name === n.name) {
        if (d.state === mi) return Fa(a);
        d.state === La ? (d.state = yi, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete r[f]) : +f < t && (d.state = yi, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete r[f]);
      }
    if (Fa(function() {
      n.state === mi && (n.state = La, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ts, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ts) {
      for (n.state = mi, i = new Array(c = n.tween.length), f = 0, p = -1; f < c; ++f)
        (d = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = d);
      i.length = p + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Cs, 1), p = -1, c = i.length; ++p < c; )
      i[p].call(e, f);
    n.state === Cs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      i = r.state > Ts && r.state < Cs, r.state = yi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
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
    for (var r = Et(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Ph : Dh)(n, e, t));
}
function js(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Bt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Et(i, r).value[t];
  };
}
function gl(e, t) {
  var n;
  return (typeof t == "number" ? It : t instanceof Gn ? Ri : (n = Gn(t)) ? (t = n, Ri) : ul)(e, t);
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
  var n = Wi(e), r = n === "transform" ? $h : gl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zh : Vh)(n, r, js(this, "attr." + e, t)) : t == null ? (n.local ? Ih : Fh)(n) : (n.local ? qh : Lh)(n, r, t));
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
    Ks(this, e).delay = +t.apply(this, arguments);
  };
}
function Kh(e, t) {
  return t = +t, function() {
    Ks(this, e).delay = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gh : Kh)(t, e)) : Et(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Jh : Zh)(t, e)) : Et(this.node(), t).duration;
}
function ed(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Bt(this, e).ease = t;
  };
}
function td(e) {
  var t = this._id;
  return arguments.length ? this.each(ed(t, e)) : Et(this.node(), t).ease;
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
  typeof e != "function" && (e = jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new cn(r, this._parents, this._name, this._id);
}
function sd(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, p = a[o] = new Array(f), c, d = 0; d < f; ++d)
      (c = l[d] || u[d]) && (p[d] = c);
  for (; o < r; ++o)
    a[o] = t[o];
  return new cn(a, this._parents, this._name, this._id);
}
function ad(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function od(e, t, n) {
  var r, i, s = ad(t) ? Ks : Bt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function ld(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Et(this.node(), n).on.on(e) : this.each(od(n, e, t));
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
  typeof e != "function" && (e = Bs(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, p, c = 0; c < l; ++c)
      (f = o[c]) && (p = e.call(f, f.__data__, c, o)) && ("__data__" in f && (p.__data__ = f.__data__), u[c] = p, Gi(u[c], t, n, c, u, Et(f, n)));
  return new cn(s, this._parents, t, n);
}
function hd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ko(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var c = e.call(f, f.__data__, p, l), d, y = Et(f, n), b = 0, m = c.length; b < m; ++b)
          (d = c[b]) && Gi(d, t, n, b, c, y);
        s.push(c), a.push(f);
      }
  return new cn(s, a, t, n);
}
var dd = wr.prototype.constructor;
function pd() {
  return new dd(this._groups, this._parents);
}
function vd(e, t) {
  var n, r, i;
  return function() {
    var s = gr(this, e), a = (this.style.removeProperty(e), gr(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function _l(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gd(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = gr(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function _d(e, t, n) {
  var r, i, s;
  return function() {
    var a = gr(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), gr(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function md(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Bt(this, e), u = l.on, f = l.value[s] == null ? o || (o = _l(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function yd(e, t, n) {
  var r = (e += "") == "transform" ? bh : gl;
  return t == null ? this.styleTween(e, vd(e, r)).on("end.style." + e, _l(e)) : typeof t == "function" ? this.styleTween(e, _d(e, r, js(this, "style." + e, t))).each(md(this._id, e)) : this.styleTween(e, gd(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? Ad(js(this, "text", e)) : $d(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = ml(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Et(l, t);
        Gi(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new cn(r, this._parents, e, n);
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
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function wi(e) {
  return wr().transition(e);
}
function ml() {
  return ++kd;
}
var Jt = wr.prototype;
cn.prototype = wi.prototype = {
  constructor: cn,
  select: cd,
  selectAll: hd,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: id,
  merge: sd,
  selection: pd,
  transition: Sd,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
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
  [Symbol.iterator]: Jt[Symbol.iterator]
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
  e instanceof cn ? (t = e._id, e = e._name) : (t = ml(), (n = Pd).time = Gs(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Gi(l, e, t, u, a, n || Dd(l, t));
  return new cn(r, this._parents, e, t);
}
wr.prototype.interrupt = Mh;
wr.prototype.transition = Od;
const Rs = Math.PI, Ss = 2 * Rs, Nn = 1e-6, Fd = Ss - Nn;
function yl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Id(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return yl;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? yl : Id(t);
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
    else if (c > Nn) if (!(Math.abs(p * l - u * f) > Nn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = r - a, y = i - o, b = l * l + u * u, m = d * d + y * y, $ = Math.sqrt(b), D = Math.sqrt(c), M = s * Math.tan((Rs - Math.acos((b + c - m) / (2 * $ * D))) / 2), S = M / D, I = M / $;
      Math.abs(S - 1) > Nn && this._append`L${t + S * f},${n + S * p}`, this._append`A${s},${s},0,0,${+(p * d > f * y)},${this._x1 = t + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, p = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Nn || Math.abs(this._y1 - f) > Nn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Ss + Ss), c > Fd ? this._append`A${r},${r},0,1,${p},${t - o},${n - l}A${r},${r},0,1,${p},${this._x1 = u},${this._y1 = f}` : c > Nn && this._append`A${r},${r},0,${+(c >= Rs)},${p},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
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
const qa = Math.abs, Oe = Math.atan2, Sn = Math.cos, zd = Math.max, ss = Math.min, Mt = Math.sin, er = Math.sqrt, Xe = 1e-12, zr = Math.PI, Mi = zr / 2, xi = 2 * zr;
function Hd(e) {
  return e > 1 ? 0 : e < -1 ? zr : Math.acos(e);
}
function Va(e) {
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
  var o = e - n, l = t - r, u = (a ? s : -s) / er(o * o + l * l), f = u * l, p = -u * o, c = e + f, d = t + p, y = n + f, b = r + p, m = (c + y) / 2, $ = (d + b) / 2, D = y - c, M = b - d, S = D * D + M * M, I = i - s, L = c * b - y * d, W = (M < 0 ? -1 : 1) * er(zd(0, I * I * S - L * L)), oe = (L * M - D * W) / S, Q = (-L * D - M * W) / S, U = (L * M + D * W) / S, le = (-L * D + M * W) / S, ue = oe - m, O = Q - $, F = U - m, Me = le - $;
  return ue * ue + O * O > F * F + Me * Me && (oe = U, Q = le), {
    cx: oe,
    cy: Q,
    x01: -f,
    y01: -p,
    x11: oe * (i / I - 1),
    y11: Q * (i / I - 1)
  };
}
function _t() {
  var e = Bd, t = Xd, n = Le(0), r = null, i = Wd, s = Ud, a = Gd, o = null, l = Yd(u);
  function u() {
    var f, p, c = +e.apply(this, arguments), d = +t.apply(this, arguments), y = i.apply(this, arguments) - Mi, b = s.apply(this, arguments) - Mi, m = qa(b - y), $ = b > y;
    if (o || (o = f = l()), d < c && (p = d, d = c, c = p), !(d > Xe)) o.moveTo(0, 0);
    else if (m > xi - Xe)
      o.moveTo(d * Sn(y), d * Mt(y)), o.arc(0, 0, d, y, b, !$), c > Xe && (o.moveTo(c * Sn(b), c * Mt(b)), o.arc(0, 0, c, b, y, $));
    else {
      var D = y, M = b, S = y, I = b, L = m, W = m, oe = a.apply(this, arguments) / 2, Q = oe > Xe && (r ? +r.apply(this, arguments) : er(c * c + d * d)), U = ss(qa(d - c) / 2, +n.apply(this, arguments)), le = U, ue = U, O, F;
      if (Q > Xe) {
        var Me = Va(Q / c * Mt(oe)), ot = Va(Q / d * Mt(oe));
        (L -= Me * 2) > Xe ? (Me *= $ ? 1 : -1, S += Me, I -= Me) : (L = 0, S = I = (y + b) / 2), (W -= ot * 2) > Xe ? (ot *= $ ? 1 : -1, D += ot, M -= ot) : (W = 0, D = M = (y + b) / 2);
      }
      var ye = d * Sn(D), we = d * Mt(D), ee = c * Sn(I), Pe = c * Mt(I);
      if (U > Xe) {
        var G = d * Sn(M), Fe = d * Mt(M), Tt = c * Sn(S), ie = c * Mt(S), Ze;
        if (m < zr)
          if (Ze = Kd(ye, we, Tt, ie, G, Fe, ee, Pe)) {
            var Xt = ye - Ze[0], lt = we - Ze[1], Tn = G - Ze[0], _e = Fe - Ze[1], Ct = 1 / Mt(Hd((Xt * Tn + lt * _e) / (er(Xt * Xt + lt * lt) * er(Tn * Tn + _e * _e))) / 2), Wt = er(Ze[0] * Ze[0] + Ze[1] * Ze[1]);
            le = ss(U, (c - Wt) / (Ct - 1)), ue = ss(U, (d - Wt) / (Ct + 1));
          } else
            le = ue = 0;
      }
      W > Xe ? ue > Xe ? (O = ui(Tt, ie, ye, we, d, ue, $), F = ui(G, Fe, ee, Pe, d, ue, $), o.moveTo(O.cx + O.x01, O.cy + O.y01), ue < U ? o.arc(O.cx, O.cy, ue, Oe(O.y01, O.x01), Oe(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, ue, Oe(O.y01, O.x01), Oe(O.y11, O.x11), !$), o.arc(0, 0, d, Oe(O.cy + O.y11, O.cx + O.x11), Oe(F.cy + F.y11, F.cx + F.x11), !$), o.arc(F.cx, F.cy, ue, Oe(F.y11, F.x11), Oe(F.y01, F.x01), !$))) : (o.moveTo(ye, we), o.arc(0, 0, d, D, M, !$)) : o.moveTo(ye, we), !(c > Xe) || !(L > Xe) ? o.lineTo(ee, Pe) : le > Xe ? (O = ui(ee, Pe, G, Fe, c, -le, $), F = ui(ye, we, Tt, ie, c, -le, $), o.lineTo(O.cx + O.x01, O.cy + O.y01), le < U ? o.arc(O.cx, O.cy, le, Oe(O.y01, O.x01), Oe(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, le, Oe(O.y01, O.x01), Oe(O.y11, O.x11), !$), o.arc(0, 0, c, Oe(O.cy + O.y11, O.cx + O.x11), Oe(F.cy + F.y11, F.cx + F.x11), $), o.arc(F.cx, F.cy, le, Oe(F.y11, F.x11), Oe(F.y01, F.x01), !$))) : o.arc(0, 0, c, I, S, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - zr / 2;
    return [Sn(p) * f, Mt(p) * f];
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
function as() {
  var e = Zd, t = Jd, n = null, r = Le(0), i = Le(xi), s = Le(0);
  function a(o) {
    var l, u = (o = jd(o)).length, f, p, c = 0, d = new Array(u), y = new Array(u), b = +r.apply(this, arguments), m = Math.min(xi, Math.max(-xi, i.apply(this, arguments) - b)), $, D = Math.min(Math.abs(m) / u, s.apply(this, arguments)), M = D * (m < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = y[d[l] = l] = +e(o[l], l, o)) > 0 && (c += S);
    for (t != null ? d.sort(function(I, L) {
      return t(y[I], y[L]);
    }) : n != null && d.sort(function(I, L) {
      return n(o[I], o[L]);
    }), l = 0, p = c ? (m - u * M) / c : 0; l < u; ++l, b = $)
      f = d[l], S = y[f], $ = b + (S > 0 ? S * p : 0) + M, y[f] = {
        data: o[f],
        index: l,
        value: S,
        startAngle: b,
        endAngle: $,
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
var Qd = /* @__PURE__ */ Ku('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const ep = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function wl(e, t) {
  Vi(t, !0), Hs(e, ep);
  let n = ae(t, "jsonData", 7), r = ae(t, "currentRound", 7, 1), i = ae(t, "mouseEventType", 15), s = ae(t, "mouseData", 15), a = ae(t, "mouseX", 15), o = ae(t, "mouseY", 15), l = ae(t, "requestRoundChange", 7, (h) => {
  }), u = ae(t, "candidateColors", 23, () => []), f = ae(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), p = ae(t, "firstRoundDeterminesPercentages", 7, !1), c = ae(t, "randomizeOrder", 7, !1), d = ae(t, "displayPhase", 15, 0);
  function y(h) {
    return h.isTransfer ? `${h.label}__transfer` : h.transferIndex != null ? `${h.label}__${h.transferIndex}` : h.label;
  }
  const b = 800, m = 800, $ = Math.min(b, m) * 0.3, D = b / 2, M = m / 2, S = "Pie", I = "PieOutline", L = "Donut", W = "TextLayer", oe = "url(#cross-hatch)", Q = 1.15, U = 750, le = 800, ue = "white", O = 1, F = "#ff00ff", Me = 3;
  function ot(h) {
    return "hatch-" + h.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let ye = [], we = [], ee = [], Pe = 0, G = 0;
  const Fe = {}, Tt = "No Further Rankings";
  let ie = /* @__PURE__ */ $e(null);
  function Ze() {
    const h = fe(x(ie));
    h.select("#" + S).remove(), h.select("#" + I).remove(), h.select("#" + L).remove(), h.select("#" + W).remove();
  }
  function Xt(h) {
    l() && (me = h, l()(h));
  }
  function lt(h) {
    Ze(), ee = Tn(h), ye = ea(h, S, ee, D, M, 0, _e()), ea(h, I, ee, D, M, 0, _e(), !1, !1, !0), Er();
  }
  tf(() => {
    Cn(), setTimeout(
      () => {
        lt(r());
      },
      0
    );
  });
  function Tn(h) {
    const g = ze(h);
    return Pe = Jn(h), g;
  }
  function _e() {
    return $;
  }
  function Ct() {
    return _e() * 1.41;
  }
  function Wt(h) {
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
  function jr(h, g) {
    if (h === "exhausted") return Wt(g);
    {
      const _ = n().results[g - 1].tally;
      return Number(_[h]);
    }
  }
  function Jr(h, g) {
    return jr(h, g).toLocaleString("en-US");
  }
  function Zr(h, g) {
    const _ = p() ? Pe : Ki(g);
    return (jr(h, g) / _).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Jn(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      _ += Number(E);
    return _;
  }
  function Rt(h) {
    return h === "exhausted" || h === "Inactive Ballots";
  }
  function Ki(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      Rt(A) || (_ += Number(E));
    return _;
  }
  function Qr(h, g) {
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
  function dn(h) {
    return Qr(h, "eliminated");
  }
  function xr(h) {
    let g = [];
    for (let _ = 1; _ <= h; _++) g = g.concat(Qr(_, "elected"));
    return [...new Set(g)];
  }
  function w(h, g) {
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
  function Y(h, g) {
    h.some((_) => Rt(_.label)) || h.push({ label: "exhausted", value: Wt(g) });
  }
  function te(h) {
    let g = h | 0;
    return () => {
      g = g + 1831565813 | 0;
      let _ = Math.imul(g ^ g >>> 15, 1 | g);
      return _ = _ + Math.imul(_ ^ _ >>> 7, 61 | _) ^ _, ((_ ^ _ >>> 14) >>> 0) / 4294967296;
    };
  }
  function pe(h) {
    let g = 5381;
    for (let _ = 0; _ < h.length; _++)
      g = (g << 5) + g + h.charCodeAt(_) | 0;
    return g;
  }
  function xe(h) {
    var E;
    if (h.length <= 3) return h;
    const g = pe(((E = n().config) == null ? void 0 : E.contest) ?? ""), _ = te(g), A = [...h];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(_() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function se() {
    const h = Object.keys(n().results[0].tally), g = h.filter((E) => !Rt(E)), _ = h.filter((E) => Rt(E));
    return [...c() ? xe(g) : g, ..._];
  }
  function ze(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of se())
      A in g && _.push({ label: A, value: Number(g[A]) });
    return Y(_, h), _;
  }
  function Ut(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of se())
      _.push({ label: A, value: Number(g[A] ?? 0) });
    return Y(_, h), _;
  }
  function St(h, g) {
    const _ = [];
    for (const A of h) {
      if (A.label === "exhausted" || A.isTransfer) {
        _.push(A);
        continue;
      }
      const E = w(A.label, g);
      E > 0 ? (_.push({
        label: A.label,
        value: E,
        isTransfer: !0
      }), _.push({ ...A, value: A.value - E })) : _.push(A);
    }
    return _;
  }
  function Cn() {
    const h = fe(x(ie)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [_, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Fe[_] = Vd[g] : Fe[_] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Fe[_] = u()[g % u().length], g++;
      {
        const E = h.clone(!0);
        E.attr("id", ot(_)).select("rect").attr("fill", Fe[_]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    Fe.exhausted = oe, Fe["Inactive Ballots"] = oe;
  }
  function pn() {
    fe(x(ie)).select("#" + L).remove();
  }
  function Ee(h, g) {
    const _ = wi("global").duration(le);
    g && _.on("end", g);
    const A = St(ee, h), T = as().sort(null).value((P) => P.value)(A);
    ia(h, S, T, 0, _e()), ia(h, I, T, 0, _e(), !0), ee = A, ye = T, pn(), $l(h), Nl(), Ml(0, _e()), Er();
  }
  function He(h, g) {
    const _ = wi("global").duration(le);
    g && _.on("end", g), Al(h);
  }
  function Te(h, g) {
    const _ = wi("global").duration(le);
    g && _.on("end", g), ji(h), bl(_e(), Ct());
  }
  let ve = !1, ut = [];
  function Ye() {
    Er(), ve = !1, Gt();
  }
  function Gt() {
    if (ut.length === 0) {
      me !== r() && (r() === me + 1 && me > 0 && r() <= n().results.length ? (me = r(), Nt(r())) : r() >= 1 && r() <= n().results.length && (me = r(), d(0), lt(r())));
      return;
    }
    const h = ut.shift();
    switch (h.type) {
      case "round": {
        const g = h.round;
        g === me + 1 && me > 0 && g <= n().results.length ? (me = g, Nt(g)) : (g !== me && g >= 1 && g <= n().results.length && (me = g, d(0), lt(g)), Gt());
        break;
      }
      case "step":
        kt();
        break;
    }
  }
  function Nt(h) {
    if (h <= 1 || h > n().results.length) {
      Gt();
      return;
    }
    ve = !0, G = h, d(0), Ee(G - 1, () => {
      d(1), He(G - 1, () => {
        d(2), Te(G, () => {
          d(0), Ye();
        });
      });
    });
  }
  function Kt() {
    ve || (ve = !0, G = r(), Rn());
  }
  function Rn() {
    if (d(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), ut.length > 0) {
      Ye();
      return;
    }
    const h = G < n().results.length - 1 ? Rn : () => {
      d(0), Ye();
    };
    Ee(G, () => {
      d(1), He(G, () => {
        d(2), G++, Xt(G), Te(G, h);
      });
    });
  }
  Is(() => {
    br();
  });
  let me = 0;
  function br() {
    if (me != r()) {
      if (ve) {
        ut.push({ type: "round", round: r() });
        return;
      }
      me == r() - 1 && me > 0 ? jt() : $r(r()), me = r();
    }
  }
  function $r(h) {
    if (ve) {
      ut.push({ type: "round", round: h });
      return;
    }
    d(0), lt(h);
  }
  function jt() {
    if (ve) {
      ut.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (G = r(), G > n().results.length) {
      Er(), ve = !1;
      return;
    }
    ve = !0, d() === 0 ? Ee(G - 1, () => {
      d(1), He(G - 1, () => {
        d(2), Te(G, () => {
          d(0), Ye();
        });
      });
    }) : d() === 1 ? He(G - 1, () => {
      d(2), Te(G, () => {
        d(0), Ye();
      });
    }) : d() === 2 && Te(G, () => {
      d(0), Ye();
    });
  }
  function kt() {
    if (r() > n().results.length) {
      Er(), ve = !1;
      return;
    }
    if (ve) {
      ut.push({ type: "step" });
      return;
    }
    ve = !0, G = r(), d() === 0 ? Ee(G, () => {
      d(1), Ye();
    }) : d() === 1 ? He(G, () => {
      d(2), Ye();
    }) : d() === 2 ? (G++, Xt(G), Te(G, () => {
      d(0), Ye();
    })) : (ve = !1, console.warn("displayPhase out of range at ", d()));
  }
  function ji(h) {
    ee = Ut(h), ye = na(h, S, ee, 0, _e(), !0), na(h, I, ee, 0, _e(), !1, !0);
  }
  function bl(h, g) {
    const _ = fe(x(ie)).select("#" + L), E = fe(x(ie)).select("#" + S), T = {};
    for (const N of ye) {
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
    function q() {
      z--, z === 0 && kl();
    }
    P.select("path").transition("global").duration(U).attrTween("d", function(N) {
      const k = N.startAngle, C = N.endAngle, R = C - k, De = T[N.data.label];
      let Z, Be;
      if (De) {
        const Zn = (De.oldStart + De.oldEnd) / 2, Fl = (De.newStart + De.newEnd) / 2, Il = k - Zn;
        Z = Fl + Il, Be = Z + R;
      } else
        Z = k, Be = C;
      const ne = Zt(k, Z), Ce = Zt(C, Be), ti = Zt(g, h), Tr = _t();
      return function(Zn) {
        return Tr.innerRadius(Math.min(ti(Zn), h) - 1).outerRadius(ti(Zn)).startAngle(ne(Zn)).endAngle(Ce(Zn)), Tr(N);
      };
    }).on("end", (N) => q());
  }
  function $l(h) {
    const g = Tl(h, ye);
    we = ta(h, L, g, D, M, _e(), Ct(), !1, !0);
    const _ = fe(x(ie));
    _.select("#" + S).raise(), _.select("#" + I).raise();
  }
  function Al(h) {
    const g = Rl(h, we, ye);
    we = sa(h, L, g, _e(), Ct(), !1);
  }
  function Ar(h) {
    return Fe[h.data.label];
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
    const _ = [], A = Pe, E = n().results[h - 1].tallyResults;
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
      let q = g.find((k) => k.data.label == P && k.data.isTransfer);
      q === void 0 && (q = g.find((k) => k.data.label == P && !k.data.isTransfer));
      let N = 0;
      if (q) N = q.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, C] of Object.entries(z)) {
        let R;
        const De = g.find((ne) => ne.data.label == k);
        if (De)
          R = structuredClone(De);
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
      const z = (P.startAngle + P.endAngle) / 2, q = h[P.data.label] / g * 2 * Math.PI;
      A[P.data.label] = z - q / 2;
    }
    return A;
  }
  function Rl(h, g, _) {
    const A = [], E = Pe, T = El(h), P = Cl(T, E, _);
    for (let [z, q] of g.entries()) {
      const N = structuredClone(q), k = q.endAngle - q.startAngle, C = _.find((R) => q.data.label === R.data.label && !R.data.isTransfer);
      if (C) {
        const R = C.data.label;
        N.startAngle = P[R], P[R] += k, N.endAngle = N.startAngle + k;
      } else if (q.data.label === "exhausted")
        N.startAngle = q.startAngle, N.endAngle = q.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", q.data.label);
        continue;
      }
      N.index = z, A.push(N);
    }
    return A;
  }
  function Zs(h, g, _, A) {
    const E = _t().innerRadius(_ * Q).outerRadius(_ * Q), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], z = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const C = k.data.label === "exhausted" ? Tt : k.data.label, R = E.centroid(k), De = ei(k.startAngle, k.endAngle), Z = Jr(k.data.label, h);
      let Be;
      !p() && Rt(k.data.label) ? Be = Z : Be = Z + " (" + Zr(k.data.label, h) + ")";
      const ne = z.append("text").attr("transform", `translate(${R})`).attr("text-anchor", De).text(C);
      ne.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Be);
      const Ce = ne.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Ce.x + R[0], Ce.y + R[1], Ce.width, Ce.height)
      });
    }
    z.remove(), P.sort((k, C) => C.value - k.value);
    const q = [], N = /* @__PURE__ */ new Set();
    for (const k of P)
      q.some((R) => k.bbox.left < R.right && k.bbox.right > R.left && k.bbox.top < R.bottom && k.bbox.bottom > R.top) || (N.add(k.label), q.push(k.bbox));
    return N;
  }
  function Qs(h, g, _, A, E, T) {
    const z = fe(x(ie)).append("g").attr("id", W).attr("transform", `translate(${_}, ${A})`), q = _t().innerRadius(E * Q).outerRadius(E * Q), N = Zs(h, g, E, z);
    z.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && N.has(k.data.label) && fe(this).append("g").attr("id", (C) => y(C.data)).classed("eliminated", (C) => T.includes(C.data.label) || C.data.isTransfer === !0).each(function(C, R) {
        C.data.label === "exhausted" && fe(this).on("mouseenter", (De, Z) => Pl(De)).on("mouseleave", (De, Z) => Dl());
      }).append("text").attr("transform", (C) => `translate(${q.centroid(C)})`).attr("text-anchor", (C) => ei(C.startAngle, C.endAngle)).text((C) => C.data.label === "exhausted" ? Tt : C.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((C) => {
        const R = Jr(C.data.label, h);
        return !p() && Rt(C.data.label) ? R : R + " (" + Zr(C.data.label, h) + ")";
      });
    });
  }
  function Sl(h, g, _, A) {
    const T = fe(x(ie)).select("#" + W), P = Zs(h, g, _, T);
    T.selectAll("g").each(function(R) {
      R && R.data && !R.data.isTransfer && !P.has(R.data.label) && fe(this).remove();
    });
    const z = T.selectAll("tspan"), q = T.selectAll("g").data(g, (R) => y(R.data)).classed("eliminated", (R) => A.includes(R.data.label) || R.data.isTransfer === !0), N = _t().innerRadius(_ * Q).outerRadius(_ * Q + 1);
    z.transition("global").duration(U).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ei(R.startAngle, R.endAngle)), q.select("text").transition("global").duration(U).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ei(R.startAngle, R.endAngle)).on("end", (R) => C());
    let k = q.size();
    function C(R) {
      k--, k === 0 && (T.remove(), Qs(h, g, D, M, _, A));
    }
  }
  function ea(h, g, _, A, E, T, P, z = !0, q = !1, N = !1) {
    const C = as().sort(null).value((R) => R.value)(_);
    return ta(h, g, C, A, E, T, P, z, q, N), C;
  }
  function Er() {
    fe(x(ie)).select("#" + I).selectAll(".elected").select("path").style("stroke", F).style("stroke-width", `${Me}px`);
  }
  function ta(h, g, _, A, E, T, P, z, q, N = !1) {
    const k = dn(h), C = xr(h), Z = fe(x(ie)).attr("viewBox", `0 0 ${b} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(_).enter().append("g").attr("class", "slice").classed("eliminated", (ne) => k.includes(ne.data.label) || ne.data.isTransfer === !0).classed("elected", (ne) => C.includes(ne.data.label) && !ne.data.isTransfer).attr("id", (ne) => y(ne.data));
    N ? Z.style("pointer-events", "none") : Z.on("mouseenter", (ne, Ce) => Zi(ne, Ce)).on("mouseleave", (ne, Ce) => Qi(ne, Ce));
    const Be = _t().outerRadius(P).innerRadius(T);
    if (q) {
      const ne = _t().outerRadius(T + 1).innerRadius(T);
      Z.append("path").attr("d", ne).attr("stroke", N ? "none" : T === 0 ? ue : "none").attr("stroke-width", N ? 0 : T === 0 ? O : 0).attr("fill", N ? "none" : (Ce) => Ar(Ce)).transition("global").duration(U).attr("d", (Ce) => Be(Ce)).on("end", (Ce) => {
        N || Ji();
      });
    } else
      Z.append("path").attr("d", (ne) => Be(ne)).attr("fill", N ? "none" : (ne) => Ar(ne)).attr("stroke", N ? "none" : ue).attr("stroke-width", N ? 0 : O), N || Ji();
    return z && !N && Qs(h, _, A, E, P, k), _;
  }
  function Nl() {
    const _ = fe(x(ie)).select("#" + W).selectAll(".eliminated");
    _.size() > 0 && _.classed("finished", !0);
  }
  function kl() {
    const _ = fe(x(ie)).select("#" + W).selectAll(".finished");
    _.size() > 0 && _.remove();
  }
  function Ml(h, g) {
    const E = fe(x(ie)).select("#" + S).selectAll(".eliminated"), T = _t().innerRadius(h), P = _t().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(U).attrTween("d", function(z) {
      const q = Zt(g, h);
      return function(N) {
        return P.innerRadius(q(N)), P(z);
      };
    }).attr("fill", (z) => `url(#${ot(z.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(U).attrTween("d", function(z) {
      const q = Zt(g, h);
      return function(N) {
        return T.outerRadius(q(N)), T(z);
      };
    }).attr("fill", (z) => Ar(z));
  }
  function ei(h, g) {
    const _ = (h + g) / 2;
    return _ > Math.PI * 11 / 6 || _ < Math.PI * 1 / 6 || _ > Math.PI * 5 / 6 && _ < Math.PI * 7 / 6 ? "middle" : _ < Math.PI ? "start" : "end";
  }
  function Ji() {
    fe(x(
      ie
      // force redisplay of text labels
    )).select("#" + W).raise().append("g").remove();
  }
  function na(h, g, _, A, E, T, P = !1) {
    const q = as().sort(null).value((N) => N.value)(_);
    return sa(h, g, q, A, E, T, P), q;
  }
  function ra(h, g, _, A, E = !1) {
    const T = dn(h), P = xr(h), N = fe(x(ie)).select("#" + g).selectAll(".slice").data(_, (C) => y(C.data));
    N.exit().remove();
    const k = N.enter().append("g").attr("class", "slice").attr("id", (C) => y(C.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), k.append("path").attr("d", (C) => A(C)).attr("fill", E ? "none" : (C) => Ar(C)).attr("stroke", E ? "none" : ue).attr("stroke-width", E ? 0 : O), N.classed("eliminated", (C) => T.includes(C.data.label)).classed("elected", (C) => P.includes(C.data.label)), E || N.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), N;
  }
  function ia(h, g, _, A, E, T = !1) {
    const P = _t().outerRadius(E).innerRadius(A);
    ra(h, g, _, P, T).select("path").attr("d", (q) => P(q)).attr("fill", T ? "none" : (q) => Ar(q));
  }
  function sa(h, g, _, A, E, T, P = !1) {
    const z = _t().outerRadius(E).innerRadius(A).startAngle((Z) => Z.startAngle).endAngle((Z) => Z.endAngle), q = _t().outerRadius(E).innerRadius(A);
    fe(x(ie)).select("#" + g).selectAll(".slice").attr("prevStart", (Z) => Z.startAngle).attr("prevEnd", (Z) => Z.endAngle);
    const C = ra(h, g, _, q, P);
    let R = C.size();
    function De() {
      R--, R <= 0 && (P || Ji());
    }
    return C.select("path").transition("global").duration(U).attrTween("d", function(Z) {
      const Be = Number(fe(this.parentNode).attr("prevStart")), ne = Number(fe(this.parentNode).attr("prevEnd")), Ce = Zt(Be, Z.startAngle), ti = Zt(ne, Z.endAngle);
      return (Tr) => (z.startAngle(Ce(Tr)).endAngle(ti(Tr)), z(Z));
    }).on("end", function(Z) {
      Z.startAngle === Z.endAngle && fe(this).attr("stroke", "none"), De();
    }), T && !P && Sl(h, _, E, dn(h)), _;
  }
  function Zi(h, g) {
    s(g.data.label), i("enter"), a(h.clientX), o(h.clientY);
  }
  function Qi(h, g) {
    s(g.data.label), i("leave");
  }
  function Pl(h, g) {
    i("show-exhausted"), a(h.clientX), o(h.clientY);
  }
  function Dl(h, g) {
    i("hide-exhausted");
  }
  var Ol = {
    pieColors: Fe,
    exhaustedLabel: Tt,
    countExhaustedVotes: Wt,
    getEliminatedCandidates: dn,
    getElectedCandidates: xr,
    runFullAnimationFn: Kt,
    animateOnePhaseFn: kt,
    get jsonData() {
      return n();
    },
    set jsonData(h) {
      n(h), re();
    },
    get currentRound() {
      return r();
    },
    set currentRound(h = 1) {
      r(h), re();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(h) {
      i(h), re();
    },
    get mouseData() {
      return s();
    },
    set mouseData(h) {
      s(h), re();
    },
    get mouseX() {
      return a();
    },
    set mouseX(h) {
      a(h), re();
    },
    get mouseY() {
      return o();
    },
    set mouseY(h) {
      o(h), re();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(h = (g) => {
    }) {
      l(h), re();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(h = []) {
      u(h), re();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(h = !1) {
      f(h), re();
    },
    get firstRoundDeterminesPercentages() {
      return p();
    },
    set firstRoundDeterminesPercentages(h = !1) {
      p(h), re();
    },
    get randomizeOrder() {
      return c();
    },
    set randomizeOrder(h = !1) {
      c(h), re();
    },
    get displayPhase() {
      return d();
    },
    set displayPhase(h = 0) {
      d(h), re();
    }
  }, aa = Qd();
  return vi(aa, (h) => he(ie, h), () => x(ie)), Ge(e, aa), zi(Ol);
}
Ys(
  wl,
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
function xl(e, t) {
  Vi(t, !0), Hs(e, ip);
  let n = ae(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = ae(t, "currentStep", 7, 0), i = ae(t, "disabled", 7, !1), s = ae(t, "onAdvance", 7, () => {
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
      n(p), re();
    },
    get currentStep() {
      return r();
    },
    set currentStep(p = 0) {
      r(p), re();
    },
    get disabled() {
      return i();
    },
    set disabled(p = !1) {
      i(p), re();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(p = () => {
    }) {
      s(p), re();
    }
  }, u = rp();
  let f;
  return u.__click = a, u.__keydown = o, pi(u, 21, n, di, (p, c, d) => {
    var y = np(), b = _n(y);
    {
      var m = (W) => {
        var oe = tp();
        let Q;
        Qt(() => Q = ii(oe, 1, "connector svelte-1l4eyw0", null, Q, { completed: !i() && d <= r() })), Ge(W, oe);
      };
      Qn(b, (W) => {
        d > 0 && W(m);
      });
    }
    var $ = Qe(b, 2), D = We($);
    let M;
    var S = Qe(D, 2);
    let I;
    var L = We(S, !0);
    Ie(S), Ie($), Qt(() => {
      M = ii(D, 1, "dot svelte-1l4eyw0", null, M, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), I = ii(S, 1, "label svelte-1l4eyw0", null, I, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), mn(L, x(c));
    }), Ge(p, y);
  }), Ie(u), Qt(() => {
    f = ii(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), xa(u, "tabindex", i() ? -1 : 0), xa(u, "aria-disabled", i());
  }), Ge(e, u), zi(l);
}
Wu(["click", "keydown"]);
Ys(xl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
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
  Vi(t, !0), Hs(e, hp);
  const n = 0.85;
  let r = ae(t, "electionSummary", 7), i = ae(t, "currentRound", 7, 1), s = ae(t, "requestRoundChange", 7, (w) => {
  }), a = ae(t, "candidateColors", 23, () => []), o = ae(t, "textForWinner", 7, "elected"), l = ae(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = ae(t, "firstRoundDeterminesPercentages", 7, !1), f = ae(t, "randomizeOrder", 7, !1), p = ae(t, "showCaptions", 7, !1);
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
  let d = /* @__PURE__ */ vn(() => c[o()] ?? c.elected), y = /* @__PURE__ */ $e(null), b = /* @__PURE__ */ $e(null), m = /* @__PURE__ */ $e(""), $ = /* @__PURE__ */ $e(Pn([])), D = /* @__PURE__ */ $e(""), M = /* @__PURE__ */ $e(""), S = /* @__PURE__ */ $e(0), I = /* @__PURE__ */ $e(0), L = /* @__PURE__ */ vn(() => W(r()));
  function W(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (Y) {
        return console.error("Failed to parse JSON string:", Y), {};
      }
    return w || {};
  }
  function oe(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(w, Y, te) {
    w.style.left = Y + "px", w.style.top = te + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const se = w.getBoundingClientRect();
      let ze = Y, Ut = te + 20;
      ze + se.width > window.innerWidth - 12 && (ze = window.innerWidth - se.width - 12), ze < 12 && (ze = 12), Ut + se.height > window.innerHeight - 12 && (Ut = te - se.height - 12), w.style.left = ze + "px", w.style.top = Ut + "px";
    });
  }
  function U() {
    switch (x(D)) {
      case "enter":
        ((w) => {
          var Y = nu(w, 2);
          he($, Y[0], !0), he(m, Y[1], !0);
        })(ue(x(M), i())), x(y) && (Q(x(y), x(S) || 0, x(I) || 0), x(y).style.opacity = String(n));
        break;
      case "leave":
        x(y) && (x(y).style.opacity = "0"), he($, [], !0), he(m, "");
        break;
      case "show-exhausted":
        x(b) && (Q(x(b), x(S) || 0, x(I) || 0), x(b).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(b) && (x(b).style.opacity = "0");
        break;
      case "":
        break;
      default:
        console.log("Unknown mouse event: ", x(D));
        break;
    }
  }
  Is(() => U());
  function le(w, Y) {
    return w === 1 ? Y ? "vote was" : "vote will be" : Y ? "votes were" : "votes will be";
  }
  function ue(w, Y) {
    const te = [], pe = w === "exhausted" ? Tt() : w;
    let xe;
    w === "exhausted" ? xe = G(1) : xe = x(L).results[0].tally[w], te.push(`${pe} started with ${xe} votes.`);
    for (let se = 1; se <= Y; se++) {
      se === Y && (w === "exhausted" ? xe = G(Y) : xe = x(L).results[Y - 1].tally[w], te.push(`${pe} has ${xe} votes at round ${Y}.`));
      const ze = x(L).results[se - 1].tallyResults, Ut = we(se);
      for (let St = 0; St < ze.length; St++) {
        const Cn = ze[St].transfers, pn = ze[St].eliminated, Ee = ze[St].elected;
        if (!Ut) {
          if (pn)
            pn === w && te.push(`${pe} will be eliminated on round ${se}.`);
          else if (w === Ee && (te.push(`${pe} ${x(d).event} on round ${se}.`), Cn))
            for (let [Te, ve] of Object.entries(Cn))
              te.push(`${ve} ${le(Number(ve), se < Y)} transferred to ${Te} on round ${se}.`);
        }
        const He = pn || Ee;
        if (He) {
          const Te = Number(Cn[w]);
          Te && te.push(`${Te} ${le(Te, se < Y)} transferred from ${He} on round ${se}.`);
        }
      }
    }
    return [te, pe];
  }
  function O() {
    let w = 0;
    for (let Y = 1; Y <= x(L).results.length; Y++) {
      if (we(Y)) continue;
      const te = x(L).results[Y - 1].tallyResults;
      for (let pe = 0; pe < te.length; pe++)
        te[pe].elected && w++;
    }
    return w;
  }
  let F, Me = /* @__PURE__ */ $e(0);
  function ot(w) {
    var xe;
    return !((xe = x(L)) != null && xe.results) || w < 1 || w > x(L).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [x(L).results[w - 1].tallyResults.some((se) => se.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function ye(w) {
    var te;
    if (!((te = x(L)) != null && te.results) || w < 1 || w > x(L).results.length || w === x(L).results.length) return !0;
    const Y = x(L).results[w - 1].tallyResults;
    return Y.length === 0 || Y.every((pe) => Object.keys(pe.transfers).length === 0);
  }
  function we(w) {
    return l() && x(L).results && w === x(L).results.length;
  }
  function ee(w) {
    return we(w) ? [] : F ? F.getEliminatedCandidates(w) : [];
  }
  function Pe(w) {
    return we(w) ? [] : F ? F.getElectedCandidates(w) : [];
  }
  function G(w) {
    return F ? F.countExhaustedVotes(w) : 0;
  }
  function Fe() {
    F && F.animateOnePhaseFn && F.animateOnePhaseFn();
  }
  function Tt() {
    return F ? F.exhaustedLabel : "";
  }
  function ie() {
    return F ? F.pieColors : {};
  }
  var Ze = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), re();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), re();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (Y) => {
    }) {
      s(w), re();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), re();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), re();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), re();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), re();
    },
    get randomizeOrder() {
      return f();
    },
    set randomizeOrder(w = !1) {
      f(w), re();
    },
    get showCaptions() {
      return p();
    },
    set showCaptions(w = !1) {
      p(w), re();
    }
  }, Xt = cp(), lt = _n(Xt), Tn = We(lt);
  {
    let w = /* @__PURE__ */ vn(() => ot(i())), Y = /* @__PURE__ */ vn(() => ye(i()));
    xl(Tn, {
      get labels() {
        return x(w);
      },
      get currentStep() {
        return x(Me);
      },
      get disabled() {
        return x(Y);
      },
      onAdvance: Fe
    });
  }
  Ie(lt);
  var _e = Qe(lt, 4), Ct = We(_e), Wt = We(Ct), jr = We(Wt);
  vi(
    wl(jr, {
      get jsonData() {
        return x(L);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: oe,
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
        return x(D);
      },
      set mouseEventType(w) {
        he(D, w, !0);
      },
      get mouseData() {
        return x(M);
      },
      set mouseData(w) {
        he(M, w, !0);
      },
      get mouseX() {
        return x(S);
      },
      set mouseX(w) {
        he(S, w, !0);
      },
      get mouseY() {
        return x(I);
      },
      set mouseY(w) {
        he(I, w, !0);
      },
      get displayPhase() {
        return x(Me);
      },
      set displayPhase(w) {
        he(Me, w, !0);
      }
    }),
    (w) => F = w,
    () => F
  ), Ie(Wt), Ie(Ct);
  var Jr = Qe(Ct, 2);
  {
    var Zr = (w) => {
      var Y = up(), te = _n(Y), pe = We(te);
      Ie(te);
      var xe = Qe(te, 2), se = We(xe);
      {
        var ze = (Ee) => {
          var He = ap(), Te = Qe(_n(He));
          pi(Te, 17, () => ee(i()), di, (ve, ut, Ye) => {
            var Gt = sp(), Nt = _n(Gt);
            let Kt;
            var Rn = We(Nt, !0);
            Ie(Nt);
            var me = Qe(Nt, 2);
            {
              var br = (jt) => {
                var kt = ga(", ");
                Ge(jt, kt);
              }, $r = /* @__PURE__ */ vn(() => Ye < ee(i()).length - 1);
              Qn(me, (jt) => {
                x($r) && jt(br);
              });
            }
            Qt(
              (jt) => {
                Kt = wa(Nt, "", Kt, jt), mn(Rn, x(ut));
              },
              [() => ({ color: ie()[x(ut)] })]
            ), Ge(ve, Gt);
          }), Ge(Ee, He);
        }, Ut = /* @__PURE__ */ vn(() => ee(i()).length > 0);
        Qn(se, (Ee) => {
          x(Ut) && Ee(ze);
        });
      }
      var St = Qe(se, 2);
      {
        var Cn = (Ee) => {
          var He = lp(), Te = _n(He), ve = Qe(Te);
          pi(ve, 17, () => Pe(i()), di, (ut, Ye, Gt) => {
            var Nt = op(), Kt = _n(Nt);
            let Rn;
            var me = We(Kt, !0);
            Ie(Kt);
            var br = Qe(Kt, 2);
            {
              var $r = (kt) => {
                var ji = ga(", ");
                Ge(kt, ji);
              }, jt = /* @__PURE__ */ vn(() => Gt < Pe(i()).length - 1);
              Qn(br, (kt) => {
                x(jt) && kt($r);
              });
            }
            Qt(
              (kt) => {
                Rn = wa(Kt, "", Rn, kt), mn(me, x(Ye));
              },
              [() => ({ color: ie()[x(Ye)] })]
            ), Ge(ut, Nt);
          }), Qt(() => mn(Te, `${x(d).caption ?? ""}: `)), Ge(Ee, He);
        }, pn = /* @__PURE__ */ vn(() => Pe(i()).length > 0);
        Qn(St, (Ee) => {
          x(pn) && Ee(Cn);
        });
      }
      Ie(xe), Qt((Ee) => mn(pe, `${x(L).config.contest ?? ""}, ${Ee ?? ""} ${x(d).infinitive ?? ""}, Round ${i() ?? ""}.`), [O]), Ge(w, Y);
    };
    Qn(Jr, (w) => {
      p() && w(Zr);
    });
  }
  Ie(_e);
  var Jn = Qe(_e, 2), Rt = We(Jn), Ki = We(Rt, !0);
  Ie(Rt);
  var Qr = Qe(Rt, 2);
  pi(Qr, 17, () => x($), di, (w, Y) => {
    var te = fp(), pe = _n(te), xe = We(pe, !0);
    Ie(pe), us(2), Qt(() => mn(xe, x(Y))), Ge(w, te);
  }), Ie(Jn), vi(Jn, (w) => he(y, w), () => x(y));
  var dn = Qe(Jn, 2), xr = We(dn);
  return us(2), Ie(dn), vi(dn, (w) => he(b, w), () => x(b)), Qt(
    (w) => {
      mn(Ki, x(m)), mn(xr, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Tt]
  ), Ge(e, Xt), zi(Ze);
}
customElements.define("pie-chart", Ys(
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
