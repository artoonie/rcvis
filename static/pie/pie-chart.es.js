var ql = Object.defineProperty;
var oa = (e) => {
  throw TypeError(e);
};
var Vl = (e, t, n) => t in e ? ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ce = (e, t, n) => Vl(e, typeof t != "symbol" ? t + "" : t, n), es = (e, t, n) => t.has(e) || oa("Cannot " + n);
var v = (e, t, n) => (es(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), V = (e, t, n, r) => (es(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), be = (e, t, n) => (es(e, t, "access private method"), n);
var za;
typeof window < "u" && ((za = window.__svelte ?? (window.__svelte = {})).v ?? (za.v = /* @__PURE__ */ new Set())).add("5");
const zl = 1, Hl = 2, Xa = 4, Yl = 8, Bl = 16, Xl = 1, Wl = 4, Ul = 8, Gl = 16, Kl = 1, jl = 2, Ns = "[", Fi = "[!", ks = "]", fr = {}, Te = Symbol(), Wa = "http://www.w3.org/1999/xhtml", os = !1;
var Ua = Array.isArray, Jl = Array.prototype.indexOf, cr = Array.prototype.includes, Ii = Array.from, $i = Object.keys, Ai = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Zl = Object.getOwnPropertyDescriptors, Ql = Object.prototype, eu = Array.prototype, Ga = Object.getPrototypeOf, la = Object.isExtensible;
const tu = () => {
};
function nu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ka() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function ru(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Re = 2, Fr = 4, Li = 8, ja = 1 << 24, hn = 16, Ct = 32, En = 64, Ja = 128, gt = 512, Ae = 1024, Se = 2048, Tt = 4096, at = 8192, ln = 16384, yr = 32768, hr = 65536, ua = 1 << 17, Za = 1 << 18, jn = 1 << 19, iu = 1 << 20, an = 1 << 25, Wn = 65536, ls = 1 << 21, Ms = 1 << 22, wn = 1 << 23, Pr = Symbol("$state"), Qa = Symbol("legacy props"), su = Symbol(""), kn = new class extends Error {
  constructor() {
    super(...arguments);
    ce(this, "name", "StaleReactionError");
    ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ha;
const au = ((Ha = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ha.contentType.includes("xml")) ?? !1, Ur = 3, wr = 8;
function ou(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function lu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function uu(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function cu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function du() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function gu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _u() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function mu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function yu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function qi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function wu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function on(e) {
  j = e;
}
let W;
function Ve(e) {
  if (e === null)
    throw qi(), fr;
  return W = e;
}
function Vi() {
  return Ve(/* @__PURE__ */ Yt(W));
}
function Le(e) {
  if (j) {
    if (/* @__PURE__ */ Yt(W) !== null)
      throw qi(), fr;
    W = e;
  }
}
function us(e = 1) {
  if (j) {
    for (var t = e, n = W; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n);
    W = n;
  }
}
function Ei(e = !0) {
  for (var t = 0, n = W; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ns || r === Fi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    e && n.remove(), n = i;
  }
}
function eo(e) {
  if (!e || e.nodeType !== wr)
    throw qi(), fr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function to(e) {
  return e === this.v;
}
function xu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function no(e) {
  return !xu(e, this.v);
}
let bu = !1, lt = null;
function dr(e) {
  lt = e;
}
function zi(e, t = !1, n) {
  lt = {
    p: lt,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Hi(e) {
  var t = (
    /** @type {ComponentContext} */
    lt
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ro(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, lt = t.p, e ?? /** @type {T} */
  {};
}
function ro() {
  return !0;
}
let Mn = [];
function io() {
  var e = Mn;
  Mn = [], nu(e);
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
function $u() {
  for (; Mn.length > 0; )
    io();
}
function so(e) {
  var t = J;
  if (t === null)
    return X.f |= wn, e;
  if ((t.f & yr) === 0 && (t.f & Fr) === 0)
    throw e;
  pr(e, t);
}
function pr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ja) !== 0) {
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
const Au = -7169;
function de(e, t) {
  e.f = e.f & Au | t;
}
function Ps(e) {
  (e.f & gt) !== 0 || e.deps === null ? de(e, Ae) : de(e, Tt);
}
function ao(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Re) === 0 || (t.f & Wn) === 0 || (t.f ^= Wn, ao(
        /** @type {Derived} */
        t.deps
      ));
}
function oo(e, t, n) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & Tt) !== 0 && n.add(e), ao(e.deps), de(e, Ae);
}
const ri = /* @__PURE__ */ new Set();
let K = null, Ce = null, Ge = [], Yi = null, fs = !1, Dr = !1;
var rr, ir, Fn, sr, Hr, Yr, In, en, ar, Ht, cs, hs, lo;
const Js = class Js {
  constructor() {
    H(this, Ht);
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
    H(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    H(this, Fn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    H(this, sr, 0);
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
    H(this, ar, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, sr) > 0;
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
        de(r, Se), At(r);
      for (r of n.m)
        de(r, Tt), At(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Ge = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      be(this, Ht, cs).call(this, s, n, r);
    if (this.is_deferred()) {
      be(this, Ht, hs).call(this, r), be(this, Ht, hs).call(this, n);
      for (const [s, a] of v(this, en))
        ho(s, a);
    } else {
      for (const s of v(this, rr)) s();
      v(this, rr).clear(), v(this, Fn) === 0 && be(this, Ht, lo).call(this), K = null, fa(r), fa(n), (i = v(this, Hr)) == null || i.resolve();
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
    n !== Te && !this.previous.has(t) && this.previous.set(t, n), (t.f & wn) === 0 && (this.current.set(t, t.v), Ce == null || Ce.set(t, t.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, Ce = null);
  }
  flush() {
    if (this.activate(), Ge.length > 0) {
      if (uo(), K !== null && K !== this)
        return;
    } else v(this, Fn) === 0 && this.process([]);
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
    V(this, Fn, v(this, Fn) + 1), t && V(this, sr, v(this, sr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    V(this, Fn, v(this, Fn) - 1), t && V(this, sr, v(this, sr) - 1), !v(this, ar) && (V(this, ar, !0), xn(() => {
      V(this, ar, !1), this.is_deferred() ? Ge.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, Yr))
      v(this, In).delete(t), de(t, Se), At(t);
    for (const t of v(this, In))
      de(t, Tt), At(t);
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
    return (v(this, Hr) ?? V(this, Hr, Ka())).promise;
  }
  static ensure() {
    if (K === null) {
      const t = K = new Js();
      ri.add(K), Dr || xn(() => {
        K === t && t.flush();
      });
    }
    return K;
  }
  apply() {
  }
};
rr = new WeakMap(), ir = new WeakMap(), Fn = new WeakMap(), sr = new WeakMap(), Hr = new WeakMap(), Yr = new WeakMap(), In = new WeakMap(), en = new WeakMap(), ar = new WeakMap(), Ht = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cs = function(t, n, r) {
  t.f ^= Ae;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Ct | En)) !== 0, l = o && (a & Ae) !== 0, u = l || (a & at) !== 0 || v(this, en).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Ae : s !== null && (a & (Fr | Li | ja)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Gr(i) && ((a & hn) !== 0 && v(this, In).add(i), gr(i));
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
  if (ri.size > 1) {
    this.previous.clear();
    var t = Ce, n = !0;
    for (const s of ri) {
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
        var r = Ge;
        Ge = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          fo(f, o, l, u);
        if (Ge.length > 0) {
          K = s, s.apply();
          for (const f of Ge)
            be(i = s, Ht, cs).call(i, f, [], []);
          s.deactivate();
        }
        Ge = r;
      }
    }
    K = null, Ce = t;
  }
  this.committed = !0, ri.delete(this);
};
let un = Js;
function re(e) {
  var t = Dr;
  Dr = !0;
  try {
    for (var n; ; ) {
      if ($u(), Ge.length === 0 && (K == null || K.flush(), Ge.length === 0))
        return Yi = null, /** @type {T} */
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
    for (var t = 0; Ge.length > 0; ) {
      var n = un.ensure();
      if (t++ > 1e3) {
        var r, i;
        Eu();
      }
      n.process(Ge), bn.clear();
    }
  } finally {
    Ge = [], fs = !1, Yi = null;
  }
}
function Eu() {
  try {
    du();
  } catch (e) {
    pr(e, Yi);
  }
}
let xt = null;
function fa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ln | at)) === 0 && Gr(r) && (xt = /* @__PURE__ */ new Set(), gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ko(r), (xt == null ? void 0 : xt.size) > 0)) {
        bn.clear();
        for (const i of xt) {
          if ((i.f & (ln | at)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            xt.has(a) && (xt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ln | at)) === 0 && gr(l);
          }
        }
        xt.clear();
      }
    }
    xt = null;
  }
}
function fo(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Re) !== 0 ? fo(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Ms | hn)) !== 0 && (s & Se) === 0 && co(i, t, r) && (de(i, Se), At(
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
      if (cr.call(t, i))
        return !0;
      if ((i.f & Re) !== 0 && co(
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
function At(e) {
  for (var t = Yi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (fs && t === J && (n & hn) !== 0 && (n & Za) === 0)
      return;
    if ((n & (En | Ct)) !== 0) {
      if ((n & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  Ge.push(t);
}
function ho(e, t) {
  if (!((e.f & Ct) !== 0 && (e.f & Ae) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & Tt) !== 0 && t.m.push(e), de(e, Ae);
    for (var n = e.first; n !== null; )
      ho(n, t), n = n.next;
  }
}
function Tu(e) {
  let t = 0, n = Un(0), r;
  return () => {
    Fs() && (x(n), Ls(() => (t === 0 && (r = Wi(() => e(() => Or(n)))), t += 1, () => {
      xn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Or(n));
      });
    })));
  };
}
var Cu = hr | jn | Ja;
function Ru(e, t, n) {
  new Su(e, t, n);
}
var it, Br, Ot, Ln, Ft, dt, We, It, tn, yn, qn, nn, or, Vn, lr, ur, rn, Di, ve, po, vo, ds, ci, hi, ps;
class Su {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    H(this, ve);
    /** @type {Boundary | null} */
    ce(this, "parent");
    ce(this, "is_pending", !1);
    /** @type {TemplateNode} */
    H(this, it);
    /** @type {TemplateNode | null} */
    H(this, Br, j ? W : null);
    /** @type {BoundaryProps} */
    H(this, Ot);
    /** @type {((anchor: Node) => void)} */
    H(this, Ln);
    /** @type {Effect} */
    H(this, Ft);
    /** @type {Effect | null} */
    H(this, dt, null);
    /** @type {Effect | null} */
    H(this, We, null);
    /** @type {Effect | null} */
    H(this, It, null);
    /** @type {DocumentFragment | null} */
    H(this, tn, null);
    /** @type {TemplateNode | null} */
    H(this, yn, null);
    H(this, qn, 0);
    H(this, nn, 0);
    H(this, or, !1);
    H(this, Vn, !1);
    /** @type {Set<Effect>} */
    H(this, lr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, rn, null);
    H(this, Di, Tu(() => (V(this, rn, Un(v(this, qn))), () => {
      V(this, rn, null);
    })));
    V(this, it, t), V(this, Ot, n), V(this, Ln, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, Ot).pending, V(this, Ft, qs(() => {
      if (J.b = this, j) {
        const s = v(this, Br);
        Vi(), /** @type {Comment} */
        s.nodeType === wr && /** @type {Comment} */
        s.data === Fi ? be(this, ve, vo).call(this) : (be(this, ve, po).call(this), v(this, nn) === 0 && (this.is_pending = !1));
      } else {
        var i = be(this, ve, ds).call(this);
        try {
          V(this, dt, vt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, nn) > 0 ? be(this, ve, hi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, yn)) == null || s.remove();
      };
    }, Cu)), j && V(this, it, W);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    oo(t, v(this, lr), v(this, ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Ot).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    be(this, ve, ps).call(this, t), V(this, qn, v(this, qn) + t), !(!v(this, rn) || v(this, or)) && (V(this, or, !0), xn(() => {
      V(this, or, !1), v(this, rn) && vr(v(this, rn), v(this, qn));
    }));
  }
  get_effect_pending() {
    return v(this, Di).call(this), x(
      /** @type {Source<number>} */
      v(this, rn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, Ot).onerror;
    let r = v(this, Ot).failed;
    if (v(this, Vn) || !n && !r)
      throw t;
    v(this, dt) && (ze(v(this, dt)), V(this, dt, null)), v(this, We) && (ze(v(this, We)), V(this, We, null)), v(this, It) && (ze(v(this, It)), V(this, It, null)), j && (Ve(
      /** @type {TemplateNode} */
      v(this, Br)
    ), us(), Ve(Ei()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        wu();
        return;
      }
      i = !0, s && yu(), un.ensure(), V(this, qn, 0), v(this, It) !== null && Yn(v(this, It), () => {
        V(this, It, null);
      }), this.is_pending = this.has_pending_snippet(), V(this, dt, be(this, ve, ci).call(this, () => (V(this, Vn, !1), vt(() => v(this, Ln).call(this, v(this, it)))))), v(this, nn) > 0 ? be(this, ve, hi).call(this) : this.is_pending = !1;
    };
    xn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        pr(o, v(this, Ft) && v(this, Ft).parent);
      }
      r && V(this, It, be(this, ve, ci).call(this, () => {
        un.ensure(), V(this, Vn, !0);
        try {
          return vt(() => {
            r(
              v(this, it),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return pr(
            o,
            /** @type {Effect} */
            v(this, Ft).parent
          ), null;
        } finally {
          V(this, Vn, !1);
        }
      }));
    });
  }
}
it = new WeakMap(), Br = new WeakMap(), Ot = new WeakMap(), Ln = new WeakMap(), Ft = new WeakMap(), dt = new WeakMap(), We = new WeakMap(), It = new WeakMap(), tn = new WeakMap(), yn = new WeakMap(), qn = new WeakMap(), nn = new WeakMap(), or = new WeakMap(), Vn = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), rn = new WeakMap(), Di = new WeakMap(), ve = new WeakSet(), po = function() {
  try {
    V(this, dt, vt(() => v(this, Ln).call(this, v(this, it))));
  } catch (t) {
    this.error(t);
  }
}, vo = function() {
  const t = v(this, Ot).pending;
  t && (V(this, We, vt(() => t(v(this, it)))), xn(() => {
    var n = be(this, ve, ds).call(this);
    V(this, dt, be(this, ve, ci).call(this, () => (un.ensure(), vt(() => v(this, Ln).call(this, n))))), v(this, nn) > 0 ? be(this, ve, hi).call(this) : (Yn(
      /** @type {Effect} */
      v(this, We),
      () => {
        V(this, We, null);
      }
    ), this.is_pending = !1);
  }));
}, ds = function() {
  var t = v(this, it);
  return this.is_pending && (V(this, yn, ot()), v(this, it).before(v(this, yn)), t = v(this, yn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
ci = function(t) {
  var n = J, r = X, i = lt;
  zt(v(this, Ft)), mt(v(this, Ft)), dr(v(this, Ft).ctx);
  try {
    return t();
  } catch (s) {
    return so(s), null;
  } finally {
    zt(n), mt(r), dr(i);
  }
}, hi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, Ot).pending
  );
  v(this, dt) !== null && (V(this, tn, document.createDocumentFragment()), v(this, tn).append(
    /** @type {TemplateNode} */
    v(this, yn)
  ), Do(v(this, dt), v(this, tn))), v(this, We) === null && V(this, We, vt(() => t(v(this, it))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && be(n = this.parent, ve, ps).call(n, t);
    return;
  }
  if (V(this, nn, v(this, nn) + t), v(this, nn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, lr))
      de(r, Se), At(r);
    for (const r of v(this, ur))
      de(r, Tt), At(r);
    v(this, lr).clear(), v(this, ur).clear(), v(this, We) && Yn(v(this, We), () => {
      V(this, We, null);
    }), v(this, tn) && (v(this, it).before(v(this, tn)), V(this, tn, null));
  }
};
function Nu(e, t, n, r) {
  const i = Bi;
  var s = e.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = K, o = (
    /** @type {Effect} */
    J
  ), l = ku(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    l();
    try {
      r(h);
    } catch (d) {
      (o.f & ln) === 0 && pr(d, o);
    }
    a == null || a.deactivate(), vs();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function p() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ Mu(h))).then((h) => f([...t.map(i), ...h])).catch((h) => pr(h, o));
  }
  u ? u.then(p) : p();
}
function ku() {
  var e = J, t = X, n = lt, r = K;
  return function(s = !0) {
    zt(e), mt(t), dr(n), s && (r == null || r.activate());
  };
}
function vs() {
  zt(null), mt(null), dr(null);
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  var t = Re | Se, n = X !== null && (X.f & Re) !== 0 ? (
    /** @type {Derived} */
    X
  ) : null;
  return J !== null && (J.f |= jn), {
    ctx: lt,
    deps: null,
    effects: null,
    equals: to,
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
function Mu(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    J
  );
  r === null && lu();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Un(
    /** @type {V} */
    Te
  ), o = !X, l = /* @__PURE__ */ new Map();
  return Hu(() => {
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
    const h = (y, b = void 0) => {
      if (f.activate(), b)
        b !== kn && (a.f |= wn, vr(a, b));
      else {
        (a.f & wn) !== 0 && (a.f ^= wn), vr(a, y);
        for (const [m, $] of l) {
          if (l.delete(m), m === f) break;
          $.reject(kn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(p));
    };
    u.promise.then(h, (y) => h(null, y || "unknown"));
  }), qu(() => {
    for (const u of l.values())
      u.reject(kn);
  }), new Promise((u) => {
    function f(p) {
      function h() {
        p === s ? u(a) : f(s);
      }
      p.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Bi(e);
  return Oo(t), t;
}
// @__NO_SIDE_EFFECTS__
function go(e) {
  const t = /* @__PURE__ */ Bi(e);
  return t.equals = no, t;
}
function Pu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ze(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Du(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Re) === 0)
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
  zt(Du(e));
  try {
    e.f &= ~Wn, Pu(e), t = qo(e);
  } finally {
    zt(n);
  }
  return t;
}
function _o(e) {
  var t = Ds(e);
  if (!e.equals(t) && (e.wv = Io(), (!(K != null && K.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    de(e, Ae);
    return;
  }
  An || (Ce !== null ? (Fs() || K != null && K.is_fork) && Ce.set(e, t) : Ps(e));
}
function Ou(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(kn), r.teardown = tu, r.ac = null, Ir(r, 0), Vs(r));
}
function mo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && gr(t);
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
  X !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Et || (X.f & ua) !== 0) && ro() && (X.f & (Re | hn | Ms | ua)) !== 0 && (_t === null || !cr.call(_t, e)) && mu();
  let r = n ? Pn(t) : t;
  return vr(e, r);
}
function vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    An ? bn.set(e, t) : bn.set(e, n), e.v = t;
    var r = un.ensure();
    if (r.capture(e, n), (e.f & Re) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && Ds(i), Ps(i);
    }
    e.wv = Io(), xo(e, Se), J !== null && (J.f & Ae) !== 0 && (J.f & (Ct | En)) === 0 && (ht === null ? Xu([e]) : ht.push(e)), !r.is_fork && gs.size > 0 && !yo && Fu();
  }
  return t;
}
function Fu() {
  yo = !1;
  for (const e of gs)
    (e.f & Ae) !== 0 && de(e, Tt), Gr(e) && gr(e);
  gs.clear();
}
function Or(e) {
  he(e, e.v + 1);
}
function xo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Se) === 0;
      if (o && de(s, t), (a & Re) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Ce == null || Ce.delete(l), (a & Wn) === 0 && (a & gt && (s.f |= Wn), xo(l, Tt));
      } else o && ((a & hn) !== 0 && xt !== null && xt.add(
        /** @type {Effect} */
        s
      ), At(
        /** @type {Effect} */
        s
      ));
    }
}
function Pn(e) {
  if (typeof e != "object" || e === null || Pr in e)
    return e;
  const t = Ga(e);
  if (t !== Ql && t !== eu)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ua(e), i = /* @__PURE__ */ $e(0), s = Bn, a = (o) => {
    if (Bn === s)
      return o();
    var l = X, u = Bn;
    mt(null), da(s);
    var f = o();
    return mt(l), da(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && gu();
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
            const f = a(() => /* @__PURE__ */ $e(Te));
            n.set(l, f), Or(i);
          }
        } else
          he(u, Te), Or(i);
        return !0;
      },
      get(o, l, u) {
        var d;
        if (l === Pr)
          return e;
        var f = n.get(l), p = l in o;
        if (f === void 0 && (!p || (d = Hn(o, l)) != null && d.writable) && (f = a(() => {
          var y = Pn(p ? o[l] : Te), b = /* @__PURE__ */ $e(y);
          return b;
        }), n.set(l, f)), f !== void 0) {
          var h = x(f);
          return h === Te ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var p = n.get(l), h = p == null ? void 0 : p.v;
          if (p !== void 0 && h !== Te)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var h;
        if (l === Pr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Te || Reflect.has(o, l);
        if (u !== void 0 || J !== null && (!f || (h = Hn(o, l)) != null && h.writable)) {
          u === void 0 && (u = a(() => {
            var d = f ? Pn(o[l]) : Te, y = /* @__PURE__ */ $e(d);
            return y;
          }), n.set(l, u));
          var p = x(u);
          if (p === Te)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var M;
        var p = n.get(l), h = l in o;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          p.v; d += 1) {
            var y = n.get(d + "");
            y !== void 0 ? he(y, Te) : d in o && (y = a(() => /* @__PURE__ */ $e(Te)), n.set(d + "", y));
          }
        if (p === void 0)
          (!h || (M = Hn(o, l)) != null && M.writable) && (p = a(() => /* @__PURE__ */ $e(void 0)), he(p, Pn(u)), n.set(l, p));
        else {
          h = p.v !== Te;
          var b = a(() => Pn(u));
          he(p, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(f, u), !h) {
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
          var h = n.get(p);
          return h === void 0 || h.v !== Te;
        });
        for (var [u, f] of n)
          f.v !== Te && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        _u();
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
function ot(e = "") {
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
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(e)
  );
}
function Xe(e, t) {
  if (!j)
    return /* @__PURE__ */ fn(e);
  var n = /* @__PURE__ */ fn(W);
  if (n === null)
    n = W.appendChild(ot());
  else if (t && n.nodeType !== Ur) {
    var r = ot();
    return n == null || n.before(r), Ve(r), r;
  }
  return t && Xi(
    /** @type {Text} */
    n
  ), Ve(n), n;
}
function _n(e, t = !1) {
  if (!j) {
    var n = /* @__PURE__ */ fn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
  if (t) {
    if ((W == null ? void 0 : W.nodeType) !== Ur) {
      var r = ot();
      return W == null || W.before(r), Ve(r), r;
    }
    Xi(
      /** @type {Text} */
      W
    );
  }
  return W;
}
function nt(e, t = 1, n = !1) {
  let r = j ? W : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ur) {
      var s = ot();
      return r === null ? i == null || i.after(s) : r.before(s), Ve(s), s;
    }
    Xi(
      /** @type {Text} */
      r
    );
  }
  return Ve(r), r;
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
function Xi(e) {
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
  var t = X, n = J;
  mt(null), zt(null);
  try {
    return e();
  } finally {
    mt(t), zt(n);
  }
}
function Iu(e) {
  J === null && (X === null && hu(), cu()), An && fu();
}
function Lu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Bt(e, t, n) {
  var r = J;
  r !== null && (r.f & at) !== 0 && (e |= at);
  var i = {
    ctx: lt,
    deps: null,
    nodes: null,
    f: e | Se | gt,
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
      throw ze(i), o;
    }
  else t !== null && At(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & jn) === 0 && (s = s.first, (e & hn) !== 0 && (e & hr) !== 0 && s !== null && (s.f |= hr)), s !== null && (s.parent = r, r !== null && Lu(s, r), X !== null && (X.f & Re) !== 0 && (e & En) === 0)) {
    var a = (
      /** @type {Derived} */
      X
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Fs() {
  return X !== null && !Et;
}
function qu(e) {
  const t = Bt(Li, null, !1);
  return de(t, Ae), t.teardown = e, t;
}
function Is(e) {
  Iu();
  var t = (
    /** @type {Effect} */
    J.f
  ), n = !X && (t & Ct) !== 0 && (t & yr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ro(e);
}
function Ro(e) {
  return Bt(Fr | iu, e, !1);
}
function Vu(e) {
  un.ensure();
  const t = Bt(En | jn, e, !0);
  return () => {
    ze(t);
  };
}
function zu(e) {
  un.ensure();
  const t = Bt(En | jn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yn(t, () => {
      ze(t), r(void 0);
    }) : (ze(t), r(void 0));
  });
}
function So(e) {
  return Bt(Fr, e, !1);
}
function Hu(e) {
  return Bt(Ms | jn, e, !0);
}
function Ls(e, t = 0) {
  return Bt(Li | t, e, !0);
}
function Qt(e, t = [], n = [], r = []) {
  Nu(r, t, n, (i) => {
    Bt(Li, () => e(...i.map(x)), !0);
  });
}
function qs(e, t = 0) {
  var n = Bt(hn | t, e, !0);
  return n;
}
function vt(e) {
  return Bt(Ct | jn, e, !0);
}
function No(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = An, r = X;
    ha(!0), mt(null);
    try {
      t.call(null);
    } finally {
      ha(n), mt(r);
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
    (n.f & En) !== 0 ? n.parent = null : ze(n, t), n = r;
  }
}
function Yu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ct) === 0 && ze(t), t = n;
  }
}
function ze(e, t = !0) {
  var n = !1;
  (t || (e.f & Za) !== 0) && e.nodes !== null && e.nodes.end !== null && (Bu(
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
function Bu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Yt(e);
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
    n && ze(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Mo(e, t, n) {
  if ((e.f & at) === 0) {
    e.f ^= at;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Ct) !== 0 && (e.f & hn) !== 0;
      Mo(i, t, a ? n : !1), i = s;
    }
  }
}
function zs(e) {
  Po(e, !0);
}
function Po(e, t) {
  if ((e.f & at) !== 0) {
    e.f ^= at, (e.f & Ae) === 0 && (de(e, Se), At(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & Ct) !== 0;
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
      var i = n === r ? null : /* @__PURE__ */ Yt(n);
      t.append(n), n = i;
    }
}
let di = !1, An = !1;
function ha(e) {
  An = e;
}
let X = null, Et = !1;
function mt(e) {
  X = e;
}
let J = null;
function zt(e) {
  J = e;
}
let _t = null;
function Oo(e) {
  X !== null && (_t === null ? _t = [e] : _t.push(e));
}
let Ke = null, rt = 0, ht = null;
function Xu(e) {
  ht = e;
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
  if ((t & Se) !== 0)
    return !0;
  if (t & Re && (e.f &= ~Wn), (t & Tt) !== 0) {
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
    (t & gt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ce === null && de(e, Ae);
  }
  return !1;
}
function Lo(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(_t !== null && cr.call(_t, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Re) !== 0 ? Lo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? de(s, Se) : (s.f & Ae) !== 0 && de(s, Tt), At(
        /** @type {Effect} */
        s
      ));
    }
}
function qo(e) {
  var b;
  var t = Ke, n = rt, r = ht, i = X, s = _t, a = lt, o = Et, l = Bn, u = e.f;
  Ke = /** @type {null | Value[]} */
  null, rt = 0, ht = null, X = (u & (Ct | En)) === 0 ? e : null, _t = null, dr(e.ctx), Et = !1, Bn = ++Dn, e.ac !== null && (Co(() => {
    e.ac.abort(kn);
  }), e.ac = null);
  try {
    e.f |= ls;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f();
    e.f |= yr;
    var h = e.deps, d = K == null ? void 0 : K.is_fork;
    if (Ke !== null) {
      var y;
      if (d || Ir(e, rt), h !== null && rt > 0)
        for (h.length = rt + Ke.length, y = 0; y < Ke.length; y++)
          h[rt + y] = Ke[y];
      else
        e.deps = h = Ke;
      if (Fs() && (e.f & gt) !== 0)
        for (y = rt; y < h.length; y++)
          ((b = h[y]).reactions ?? (b.reactions = [])).push(e);
    } else !d && h !== null && rt < h.length && (Ir(e, rt), h.length = rt);
    if (ro() && ht !== null && !Et && h !== null && (e.f & (Re | Tt | Se)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      ht.length; y++)
        Lo(
          ht[y],
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
      ht !== null && (r === null ? r = ht : r.push(.../** @type {Source[]} */
      ht));
    }
    return (e.f & wn) !== 0 && (e.f ^= wn), p;
  } catch (m) {
    return so(m);
  } finally {
    e.f ^= ls, Ke = t, rt = n, ht = r, X = i, _t = s, dr(a), Et = o, Bn = l;
  }
}
function Wu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Jl.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ke === null || !cr.call(Ke, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & gt) !== 0 && (s.f ^= gt, s.f &= ~Wn), Ps(s), Ou(s), Ir(s, 0);
  }
}
function Ir(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Wu(e, n[r]);
}
function gr(e) {
  var t = e.f;
  if ((t & ln) === 0) {
    de(e, Ae);
    var n = J, r = di;
    J = e, di = !0;
    try {
      (t & (hn | ja)) !== 0 ? Yu(e) : Vs(e), No(e);
      var i = qo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Fo;
      var s;
      os && bu && (e.f & Se) !== 0 && e.deps;
    } finally {
      di = r, J = n;
    }
  }
}
function x(e) {
  var t = e.f, n = (t & Re) !== 0;
  if (X !== null && !Et) {
    var r = J !== null && (J.f & ln) !== 0;
    if (!r && (_t === null || !cr.call(_t, e))) {
      var i = X.deps;
      if ((X.f & ls) !== 0)
        e.rv < Dn && (e.rv = Dn, Ke === null && i !== null && i[rt] === e ? rt++ : Ke === null ? Ke = [e] : Ke.push(e));
      else {
        (X.deps ?? (X.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [X] : cr.call(s, X) || s.push(X);
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
    var l = (a.f & gt) === 0 && !Et && X !== null && (di || (X.f & gt) !== 0), u = (a.f & yr) === 0;
    Gr(a) && (l && (a.f |= gt), _o(a)), l && !u && (mo(a), Vo(a));
  }
  if (Ce != null && Ce.has(e))
    return Ce.get(e);
  if ((e.f & wn) !== 0)
    throw e.v;
  return e.v;
}
function Vo(e) {
  if (e.f |= gt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Re) !== 0 && (t.f & gt) === 0 && (mo(
        /** @type {Derived} */
        t
      ), Vo(
        /** @type {Derived} */
        t
      ));
}
function zo(e) {
  if (e.v === Te) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (bn.has(t) || (t.f & Re) !== 0 && zo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Wi(e) {
  var t = Et;
  try {
    return Et = !0, e();
  } finally {
    Et = t;
  }
}
const Ho = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Uu(e) {
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
    Ai(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = X, p = J;
    mt(null), zt(null);
    try {
      for (var h, d = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + r];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch ($) {
          h ? d.push($) : h = $;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        s = y;
      }
      if (h) {
        for (let $ of d)
          queueMicrotask(() => {
            throw $;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, mt(f), zt(p);
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
function Gu(e) {
  return (
    /** @type {string} */
    (ts == null ? void 0 : ts.createHTML(e)) ?? e
  );
}
function Yo(e, t = !1) {
  var n = Os("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? Gu(e) : e, n.content;
}
function $n(e, t) {
  var n = (
    /** @type {Effect} */
    J
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Xt(e, t) {
  var n = (t & Kl) !== 0, r = (t & jl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (j)
      return $n(W, null), W;
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
function Ku(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (j)
      return $n(W, null), W;
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
function ju(e, t) {
  return /* @__PURE__ */ Ku(e, t, "svg");
}
function ga(e = "") {
  if (!j) {
    var t = ot(e + "");
    return $n(t, t), t;
  }
  var n = W;
  return n.nodeType !== Ur ? (n.before(n = ot()), Ve(n)) : Xi(
    /** @type {Text} */
    n
  ), $n(n, n), n;
}
function Ue(e, t) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & yr) === 0 || n.nodes.end === null) && (n.nodes.end = W), Vi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ju = ["touchstart", "touchmove"];
function Zu(e) {
  return Ju.includes(e);
}
function mn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Bo(e, t) {
  return Xo(e, t);
}
function Qu(e, t) {
  _s(), t.intro = t.intro ?? !1;
  const n = t.target, r = j, i = W;
  try {
    for (var s = /* @__PURE__ */ fn(n); s && (s.nodeType !== wr || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ Yt(s);
    if (!s)
      throw fr;
    on(!0), Ve(
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
    return a !== fr && console.warn("Failed to hydrate: ", a), t.recover === !1 && pu(), _s(), Eo(n), on(!1), Bo(e, t);
  } finally {
    on(r), Ve(i);
  }
}
const ii = /* @__PURE__ */ new Map();
function Xo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _s();
  var o = /* @__PURE__ */ new Set(), l = (p) => {
    for (var h = 0; h < p.length; h++) {
      var d = p[h];
      if (!o.has(d)) {
        o.add(d);
        var y = Zu(d);
        for (const $ of [t, document]) {
          var b = ii.get($);
          b === void 0 && (b = /* @__PURE__ */ new Map(), ii.set($, b));
          var m = b.get(d);
          m === void 0 ? ($.addEventListener(d, va, { passive: y }), b.set(d, 1)) : b.set(d, m + 1);
        }
      }
    }
  };
  l(Ii(Ho)), ms.add(l);
  var u = void 0, f = zu(() => {
    var p = n ?? t.appendChild(ot());
    return Ru(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (h) => {
        zi({});
        var d = (
          /** @type {ComponentContext} */
          lt
        );
        if (s && (d.c = s), i && (r.$$events = i), j && $n(
          /** @type {TemplateNode} */
          h,
          null
        ), u = e(h, r) || {}, j && (J.nodes.end = W, W === null || W.nodeType !== wr || /** @type {Comment} */
        W.data !== ks))
          throw qi(), fr;
        Hi();
      }
    ), () => {
      var b;
      for (var h of o)
        for (const m of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            ii.get(m)
          ), y = (
            /** @type {number} */
            d.get(h)
          );
          --y == 0 ? (m.removeEventListener(h, va), d.delete(h), d.size === 0 && ii.delete(m)) : d.set(h, y);
        }
      ms.delete(l), p !== n && ((b = p.parentNode) == null || b.removeChild(p));
    };
  });
  return ys.set(u, f), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function ef(e, t) {
  const n = ys.get(e);
  return n ? (ys.delete(e), n(t)) : Promise.resolve();
}
var bt, Lt, st, zn, Xr, Wr, Oi;
class tf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ce(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, bt, /* @__PURE__ */ new Map());
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
    H(this, Lt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, st, /* @__PURE__ */ new Map());
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
      if (v(this, bt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, bt).get(t)
        ), r = v(this, Lt).get(n);
        if (r)
          zs(r), v(this, zn).delete(n);
        else {
          var i = v(this, st).get(n);
          i && (v(this, Lt).set(n, i.effect), v(this, st).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, bt)) {
          if (v(this, bt).delete(s), s === t)
            break;
          const o = v(this, st).get(a);
          o && (ze(o.effect), v(this, st).delete(a));
        }
        for (const [s, a] of v(this, Lt)) {
          if (s === n || v(this, zn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, bt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Do(a, u), u.append(ot()), v(this, st).set(s, { effect: a, fragment: u });
            } else
              ze(a);
            v(this, zn).delete(s), v(this, Lt).delete(s);
          };
          v(this, Xr) || !r ? (v(this, zn).add(s), Yn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, Oi, (t) => {
      v(this, bt).delete(t);
      const n = Array.from(v(this, bt).values());
      for (const [r, i] of v(this, st))
        n.includes(r) || (ze(i.effect), v(this, st).delete(r));
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
    if (n && !v(this, Lt).has(t) && !v(this, st).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = ot();
        s.append(a), v(this, st).set(t, {
          effect: vt(() => n(a)),
          fragment: s
        });
      } else
        v(this, Lt).set(
          t,
          vt(() => n(this.anchor))
        );
    if (v(this, bt).set(r, t), i) {
      for (const [o, l] of v(this, Lt))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, st))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Wr)), r.ondiscard(v(this, Oi));
    } else
      j && (this.anchor = W), v(this, Wr).call(this);
  }
}
bt = new WeakMap(), Lt = new WeakMap(), st = new WeakMap(), zn = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), Oi = new WeakMap();
function nf(e) {
  lt === null && ou(), Is(() => {
    const t = Wi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function er(e, t, n = !1) {
  j && Vi();
  var r = new tf(e), i = n ? hr : 0;
  function s(a, o) {
    if (j) {
      const f = eo(e);
      var l;
      if (f === Ns ? l = 0 : f === Fi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ei();
        Ve(u), r.anchor = u, on(!1), r.ensure(a, o), on(!0);
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
function pi(e, t) {
  return t;
}
function rf(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let p = t[o];
    Yn(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ws(Ii(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
    ze(e[n], t);
}
var _a;
function vi(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Xa) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = j ? Ve(/* @__PURE__ */ fn(u)) : u.appendChild(ot());
  }
  j && Vi();
  var f = null, p = /* @__PURE__ */ go(() => {
    var $ = n();
    return Ua($) ? $ : $ == null ? [] : Ii($);
  }), h, d = !0;
  function y() {
    m.fallback = f, sf(m, h, a, t, r), f !== null && (h.length === 0 ? (f.f & an) === 0 ? zs(f) : (f.f ^= an, Sr(f, null, a)) : Yn(f, () => {
      f = null;
    }));
  }
  var b = qs(() => {
    h = /** @type {V[]} */
    x(p);
    var $ = h.length;
    let D = !1;
    if (j) {
      var M = eo(a) === Fi;
      M !== ($ === 0) && (a = Ei(), Ve(a), on(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      K
    ), L = To(), U = 0; U < $; U += 1) {
      j && W.nodeType === wr && /** @type {Comment} */
      W.data === ks && (a = /** @type {Comment} */
      W, D = !0, on(!1));
      var ae = h[U], Q = r(ae, U), G = d ? null : o.get(Q);
      G ? (G.v && vr(G.v, ae), G.i && vr(G.i, U), L && I.unskip_effect(G.e)) : (G = af(
        o,
        d ? a : _a ?? (_a = ot()),
        ae,
        Q,
        U,
        i,
        t,
        n
      ), d || (G.e.f |= an), o.set(Q, G)), S.add(Q);
    }
    if ($ === 0 && s && !f && (d ? f = vt(() => s(a)) : (f = vt(() => s(_a ?? (_a = ot()))), f.f |= an)), $ > S.size && uu(), j && $ > 0 && Ve(Ei()), !d)
      if (L) {
        for (const [oe, ue] of o)
          S.has(oe) || I.skip_effect(ue.e);
        I.oncommit(y), I.ondiscard(() => {
        });
      } else
        y();
    D && on(!0), x(p);
  }), m = { effect: b, items: o, outrogroups: null, fallback: f };
  d = !1, j && (a = W);
}
function Cr(e) {
  for (; e !== null && (e.f & Ct) === 0; )
    e = e.next;
  return e;
}
function sf(e, t, n, r, i) {
  var G, oe, ue, O, F, Ne, ft, me, ye;
  var s = (r & Yl) !== 0, a = t.length, o = e.items, l = Cr(e.effect.first), u, f = null, p, h = [], d = [], y, b, m, $;
  if (s)
    for ($ = 0; $ < a; $ += 1)
      y = t[$], b = i(y, $), m = /** @type {EachItem} */
      o.get(b).e, (m.f & an) === 0 && ((oe = (G = m.nodes) == null ? void 0 : G.a) == null || oe.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(m));
  for ($ = 0; $ < a; $ += 1) {
    if (y = t[$], b = i(y, $), m = /** @type {EachItem} */
    o.get(b).e, e.outrogroups !== null)
      for (const te of e.outrogroups)
        te.pending.delete(m), te.done.delete(m);
    if ((m.f & an) !== 0)
      if (m.f ^= an, m === l)
        Sr(m, null, n);
      else {
        var D = f ? f.next : l;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), gn(e, f, m), gn(e, m, D), Sr(m, D, n), f = m, h = [], d = [], l = Cr(f.next);
        continue;
      }
    if ((m.f & at) !== 0 && (zs(m), s && ((O = (ue = m.nodes) == null ? void 0 : ue.a) == null || O.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (h.length < d.length) {
          var M = d[0], S;
          f = M.prev;
          var I = h[0], L = h[h.length - 1];
          for (S = 0; S < h.length; S += 1)
            Sr(h[S], M, n);
          for (S = 0; S < d.length; S += 1)
            u.delete(d[S]);
          gn(e, I.prev, L.next), gn(e, f, I), gn(e, L, M), l = M, f = L, $ -= 1, h = [], d = [];
        } else
          u.delete(m), Sr(m, l, n), gn(e, m.prev, m.next), gn(e, m, f === null ? e.effect.first : f.next), gn(e, f, m), f = m;
        continue;
      }
      for (h = [], d = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Cr(l.next);
      if (l === null)
        continue;
    }
    (m.f & an) === 0 && h.push(m), f = m, l = Cr(m.next);
  }
  if (e.outrogroups !== null) {
    for (const te of e.outrogroups)
      te.pending.size === 0 && (ws(Ii(te.done)), (F = e.outrogroups) == null || F.delete(te));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var U = [];
    if (u !== void 0)
      for (m of u)
        (m.f & at) === 0 && U.push(m);
    for (; l !== null; )
      (l.f & at) === 0 && l !== e.fallback && U.push(l), l = Cr(l.next);
    var ae = U.length;
    if (ae > 0) {
      var Q = (r & Xa) !== 0 && a === 0 ? n : null;
      if (s) {
        for ($ = 0; $ < ae; $ += 1)
          (ft = (Ne = U[$].nodes) == null ? void 0 : Ne.a) == null || ft.measure();
        for ($ = 0; $ < ae; $ += 1)
          (ye = (me = U[$].nodes) == null ? void 0 : me.a) == null || ye.fix();
      }
      rf(e, U, Q);
    }
  }
  s && xn(() => {
    var te, ke;
    if (p !== void 0)
      for (m of p)
        (ke = (te = m.nodes) == null ? void 0 : te.a) == null || ke.apply();
  });
}
function af(e, t, n, r, i, s, a, o) {
  var l = (a & zl) !== 0 ? (a & Bl) === 0 ? /* @__PURE__ */ wo(n, !1, !1) : Un(n) : null, u = (a & Hl) !== 0 ? Un(i) : null;
  return {
    v: l,
    i: u,
    e: vt(() => (s(t, l ?? n, u ?? i, o), () => {
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
        /* @__PURE__ */ Yt(r)
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
function of(e, t, n) {
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
function lf(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += ya(r)), i && (n += ya(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function si(e, t, n, r, i, s) {
  var a = e.__className;
  if (j || a !== n || a === void 0) {
    var o = of(n, r, s);
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
    var s = lf(t, r);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (ns(e, n == null ? void 0 : n[0], r[0]), ns(e, n == null ? void 0 : n[1], r[1], "important")) : ns(e, n, r));
  return r;
}
const uf = Symbol("is custom element"), ff = Symbol("is html"), cf = au ? "link" : "LINK";
function xa(e, t, n, r) {
  var i = hf(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === cf) || i[t] !== (i[t] = n) && (t === "loading" && (e[su] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && df(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function hf(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [uf]: e.nodeName.includes("-"),
      [ff]: e.namespaceURI === Wa
    })
  );
}
var ba = /* @__PURE__ */ new Map();
function df(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ba.get(t);
  if (n) return n;
  ba.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Zl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ga(i);
  }
  return n;
}
function $a(e, t) {
  return e === t || (e == null ? void 0 : e[Pr]) === t;
}
function gi(e = {}, t, n, r) {
  return So(() => {
    var i, s;
    return Ls(() => {
      i = s, s = [], Wi(() => {
        e !== n(...s) && (t(e, ...s), i && $a(n(...i), e) && t(null, ...i));
      });
    }), () => {
      xn(() => {
        s && $a(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let ai = !1;
function pf(e) {
  var t = ai;
  try {
    return ai = !1, [e(), ai];
  } finally {
    ai = t;
  }
}
function se(e, t, n, r) {
  var D;
  var i = (n & Ul) !== 0, s = (n & Gl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Wi(
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
  var p, h = !1;
  i ? [p, h] = pf(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = l(), u && (vu(), u(p)));
  var d;
  if (d = () => {
    var M = (
      /** @type {V} */
      e[t]
    );
    return M === void 0 ? l() : (o = !0, M);
  }, (n & Wl) === 0)
    return d;
  if (u) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, S) {
        return arguments.length > 0 ? ((!S || y || h) && u(S ? d() : M), M) : d();
      })
    );
  }
  var b = !1, m = ((n & Xl) !== 0 ? Bi : go)(() => (b = !1, d()));
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
function vf(e) {
  return new gf(e);
}
var sn, pt;
class gf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    H(this, sn);
    /** @type {Record<string, any>} */
    H(this, pt);
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
    V(this, pt, (t.hydrate ? Qu : Bo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && re(), V(this, sn, i.$$events);
    for (const a of Object.keys(v(this, pt)))
      a === "$set" || a === "$destroy" || a === "$on" || Ai(this, a, {
        get() {
          return v(this, pt)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, pt)[a] = o;
        },
        enumerable: !0
      });
    v(this, pt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, pt).$destroy = () => {
      ef(v(this, pt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    v(this, pt).$set(t);
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
    v(this, pt).$destroy();
  }
}
sn = new WeakMap(), pt = new WeakMap();
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
          s !== "default" && (o.name = s), Ue(a, o);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = _f(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = _i(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = vf({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Vu(() => {
        Ls(() => {
          var s;
          this.$$r = !0;
          for (const a of $i(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = _i(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = _i(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return $i(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function _i(e, t, n, r) {
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
function _f(e) {
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
      return $i(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return $i(t).forEach((o) => {
    Ai(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var p;
        l = _i(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (p = Hn(u, o)) == null ? void 0 : p.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Ai(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var mf = { value: () => {
} };
function Uo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new mi(n);
}
function mi(e) {
  this._ = e;
}
function yf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
mi.prototype = Uo.prototype = {
  constructor: mi,
  on: function(e, t) {
    var n = this._, r = yf(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = wf(n[i], e.name))) return i;
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
    return new mi(e);
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
function wf(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Aa(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = mf, e = e.slice(0, r).concat(e.slice(r + 1));
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
function Ui(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ea.hasOwnProperty(t) ? { space: Ea[t], local: e } : e;
}
function xf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === xs && t.documentElement.namespaceURI === xs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function bf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Go(e) {
  var t = Ui(e);
  return (t.local ? bf : xf)(t);
}
function $f() {
}
function Bs(e) {
  return e == null ? $f : function() {
    return this.querySelector(e);
  };
}
function Af(e) {
  typeof e != "function" && (e = Bs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ut(r, this._parents);
}
function Ef(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Tf() {
  return [];
}
function Ko(e) {
  return e == null ? Tf : function() {
    return this.querySelectorAll(e);
  };
}
function Cf(e) {
  return function() {
    return Ef(e.apply(this, arguments));
  };
}
function Rf(e) {
  typeof e == "function" ? e = Cf(e) : e = Ko(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new ut(r, i);
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
var Sf = Array.prototype.find;
function Nf(e) {
  return function() {
    return Sf.call(this.children, e);
  };
}
function kf() {
  return this.firstElementChild;
}
function Mf(e) {
  return this.select(e == null ? kf : Nf(typeof e == "function" ? e : Jo(e)));
}
var Pf = Array.prototype.filter;
function Df() {
  return Array.from(this.children);
}
function Of(e) {
  return function() {
    return Pf.call(this.children, e);
  };
}
function Ff(e) {
  return this.selectAll(e == null ? Df : Of(typeof e == "function" ? e : Jo(e)));
}
function If(e) {
  typeof e != "function" && (e = jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new ut(r, this._parents);
}
function Zo(e) {
  return new Array(e.length);
}
function Lf() {
  return new ut(this._enter || this._groups.map(Zo), this._parents);
}
function Ti(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ti.prototype = {
  constructor: Ti,
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
function qf(e) {
  return function() {
    return e;
  };
}
function Vf(e, t, n, r, i, s) {
  for (var a = 0, o, l = t.length, u = s.length; a < u; ++a)
    (o = t[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ti(e, s[a]);
  for (; a < l; ++a)
    (o = t[a]) && (i[a] = o);
}
function zf(e, t, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, p = s.length, h = new Array(f), d;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (h[o] = d = a.call(l, l.__data__, o, t) + "", u.has(d) ? i[o] = l : u.set(d, l));
  for (o = 0; o < p; ++o)
    d = a.call(e, s[o], o, s) + "", (l = u.get(d)) ? (r[o] = l, l.__data__ = s[o], u.delete(d)) : n[o] = new Ti(e, s[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(h[o]) === l && (i[o] = l);
}
function Hf(e) {
  return e.__data__;
}
function Yf(e, t) {
  if (!arguments.length) return Array.from(this, Hf);
  var n = t ? zf : Vf, r = this._parents, i = this._groups;
  typeof e != "function" && (e = qf(e));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], p = i[u], h = p.length, d = Bf(e.call(f, f && f.__data__, u, r)), y = d.length, b = o[u] = new Array(y), m = a[u] = new Array(y), $ = l[u] = new Array(h);
    n(f, p, b, m, $, d, t);
    for (var D = 0, M = 0, S, I; D < y; ++D)
      if (S = b[D]) {
        for (D >= M && (M = D + 1); !(I = m[M]) && ++M < y; ) ;
        S._next = I || null;
      }
  }
  return a = new ut(a, r), a._enter = o, a._exit = l, a;
}
function Bf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xf() {
  return new ut(this._exit || this._groups.map(Zo), this._parents);
}
function Wf(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Uf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], p = u.length, h = o[l] = new Array(p), d, y = 0; y < p; ++y)
      (d = u[y] || f[y]) && (h[y] = d);
  for (; l < i; ++l)
    o[l] = n[l];
  return new ut(o, this._parents);
}
function Gf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Kf(e) {
  e || (e = jf);
  function t(p, h) {
    return p && h ? e(p.__data__, h.__data__) : !p - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(t);
  }
  return new ut(i, this._parents).order();
}
function jf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jf() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zf() {
  return Array.from(this);
}
function Qf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ec() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function tc() {
  return !this.node();
}
function nc(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && e.call(o, o.__data__, s, i);
  return this;
}
function rc(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ic(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function sc(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ac(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function oc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function uc(e, t) {
  var n = Ui(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ic : rc : typeof t == "function" ? n.local ? lc : oc : n.local ? ac : sc)(n, t));
}
function Qo(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function fc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function cc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function hc(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function dc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? fc : typeof t == "function" ? hc : cc)(e, t, n ?? "")) : _r(this.node(), e);
}
function _r(e, t) {
  return e.style.getPropertyValue(t) || Qo(e).getComputedStyle(e, null).getPropertyValue(t);
}
function pc(e) {
  return function() {
    delete this[e];
  };
}
function vc(e, t) {
  return function() {
    this[e] = t;
  };
}
function gc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function _c(e, t) {
  return arguments.length > 1 ? this.each((t == null ? pc : typeof t == "function" ? gc : vc)(e, t)) : this.node()[e];
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
function mc(e) {
  return function() {
    nl(this, e);
  };
}
function yc(e) {
  return function() {
    rl(this, e);
  };
}
function wc(e, t) {
  return function() {
    (t.apply(this, arguments) ? nl : rl)(this, e);
  };
}
function xc(e, t) {
  var n = el(e + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? wc : t ? mc : yc)(n, t));
}
function bc() {
  this.textContent = "";
}
function $c(e) {
  return function() {
    this.textContent = e;
  };
}
function Ac(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ec(e) {
  return arguments.length ? this.each(e == null ? bc : (typeof e == "function" ? Ac : $c)(e)) : this.node().textContent;
}
function Tc() {
  this.innerHTML = "";
}
function Cc(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Rc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Sc(e) {
  return arguments.length ? this.each(e == null ? Tc : (typeof e == "function" ? Rc : Cc)(e)) : this.node().innerHTML;
}
function Nc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function kc() {
  return this.each(Nc);
}
function Mc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pc() {
  return this.each(Mc);
}
function Dc(e) {
  var t = typeof e == "function" ? e : Go(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Oc() {
  return null;
}
function Fc(e, t) {
  var n = typeof e == "function" ? e : Go(e), r = t == null ? Oc : typeof t == "function" ? t : Bs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ic() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Lc() {
  return this.each(Ic);
}
function qc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zc(e) {
  return this.select(e ? Vc : qc);
}
function Hc(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Bc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Xc(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Wc(e, t, n) {
  return function() {
    var r = this.__on, i, s = Yc(t);
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
function Uc(e, t, n) {
  var r = Bc(e + ""), i, s = r.length, a;
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
  for (o = t ? Wc : Xc, i = 0; i < s; ++i) this.each(o(r[i], t, n));
  return this;
}
function il(e, t, n) {
  var r = Qo(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Gc(e, t) {
  return function() {
    return il(this, e, t);
  };
}
function Kc(e, t) {
  return function() {
    return il(this, e, t.apply(this, arguments));
  };
}
function jc(e, t) {
  return this.each((typeof t == "function" ? Kc : Gc)(e, t));
}
function* Jc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var sl = [null];
function ut(e, t) {
  this._groups = e, this._parents = t;
}
function xr() {
  return new ut([[document.documentElement]], sl);
}
function Zc() {
  return this;
}
ut.prototype = xr.prototype = {
  constructor: ut,
  select: Af,
  selectAll: Rf,
  selectChild: Mf,
  selectChildren: Ff,
  filter: If,
  data: Yf,
  enter: Lf,
  exit: Xf,
  join: Wf,
  merge: Uf,
  selection: Zc,
  order: Gf,
  sort: Kf,
  call: Jf,
  nodes: Zf,
  node: Qf,
  size: ec,
  empty: tc,
  each: nc,
  attr: uc,
  style: dc,
  property: _c,
  classed: xc,
  text: Ec,
  html: Sc,
  raise: kc,
  lower: Pc,
  append: Dc,
  insert: Fc,
  remove: Lc,
  clone: zc,
  datum: Hc,
  on: Uc,
  dispatch: jc,
  [Symbol.iterator]: Jc
};
function fe(e) {
  return typeof e == "string" ? new ut([[document.querySelector(e)]], [document.documentElement]) : new ut([[e]], sl);
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
var Lr = 0.7, Ci = 1 / Lr, nr = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qc = /^#([0-9a-f]{3,8})$/, eh = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), th = new RegExp(`^rgb\\(${Vt},${Vt},${Vt}\\)$`), nh = new RegExp(`^rgba\\(${nr},${nr},${nr},${qr}\\)$`), rh = new RegExp(`^rgba\\(${Vt},${Vt},${Vt},${qr}\\)$`), ih = new RegExp(`^hsl\\(${qr},${Vt},${Vt}\\)$`), sh = new RegExp(`^hsla\\(${qr},${Vt},${Vt},${qr}\\)$`), Ta = {
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
  formatHex8: ah,
  formatHsl: oh,
  formatRgb: Ra,
  toString: Ra
});
function Ca() {
  return this.rgb().formatHex();
}
function ah() {
  return this.rgb().formatHex8();
}
function oh() {
  return ol(this).formatHsl();
}
function Ra() {
  return this.rgb().formatRgb();
}
function Gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Qc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sa(t) : n === 3 ? new je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? oi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? oi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = eh.exec(e)) ? new je(t[1], t[2], t[3], 1) : (t = th.exec(e)) ? new je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nh.exec(e)) ? oi(t[1], t[2], t[3], t[4]) : (t = rh.exec(e)) ? oi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ih.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, 1) : (t = sh.exec(e)) ? Ma(t[1], t[2] / 100, t[3] / 100, t[4]) : Ta.hasOwnProperty(e) ? Sa(Ta[e]) : e === "transparent" ? new je(NaN, NaN, NaN, 0) : null;
}
function Sa(e) {
  return new je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function oi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new je(e, t, n, r);
}
function lh(e) {
  return e instanceof Kr || (e = Gn(e)), e ? (e = e.rgb(), new je(e.r, e.g, e.b, e.opacity)) : new je();
}
function bs(e, t, n, r) {
  return arguments.length === 1 ? lh(e) : new je(e, t, n, r ?? 1);
}
function je(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ws(je, bs, al(Kr, {
  brighter(e) {
    return e = e == null ? Ci : Math.pow(Ci, e), new je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new je(Xn(this.r), Xn(this.g), Xn(this.b), Ri(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Na,
  // Deprecated! Use color.formatHex.
  formatHex: Na,
  formatHex8: uh,
  formatRgb: ka,
  toString: ka
}));
function Na() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function uh() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ka() {
  const e = Ri(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xn(this.r)}, ${Xn(this.g)}, ${Xn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ri(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = Xn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ma(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $t(e, t, n, r);
}
function ol(e) {
  if (e instanceof $t) return new $t(e.h, e.s, e.l, e.opacity);
  if (e instanceof Kr || (e = Gn(e)), !e) return new $t();
  if (e instanceof $t) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new $t(a, o, l, e.opacity);
}
function fh(e, t, n, r) {
  return arguments.length === 1 ? ol(e) : new $t(e, t, n, r ?? 1);
}
function $t(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ws($t, fh, al(Kr, {
  brighter(e) {
    return e = e == null ? Ci : Math.pow(Ci, e), new $t(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new $t(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new je(
      rs(e >= 240 ? e - 240 : e + 120, i, r),
      rs(e, i, r),
      rs(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new $t(Pa(this.h), li(this.s), li(this.l), Ri(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ri(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Pa(this.h)}, ${li(this.s) * 100}%, ${li(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Pa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function li(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
function ch(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function hh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function dh(e) {
  return (e = +e) == 1 ? ll : function(t, n) {
    return n - t ? hh(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function ll(e, t) {
  var n = t - e;
  return n ? ch(e, n) : Us(isNaN(e) ? t : e);
}
const Si = (function e(t) {
  var n = dh(t);
  function r(i, s) {
    var a = n((i = bs(i)).r, (s = bs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ll(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function ph(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function vh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function gh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Zt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function _h(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function mh(e, t) {
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
function yh(e) {
  return function() {
    return e;
  };
}
function wh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ul(e, t) {
  var n = $s.lastIndex = is.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = $s.exec(e)) && (i = is.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: qt(r, i) })), n = is.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? wh(l[0].x) : yh(t) : (t = l.length, function(u) {
    for (var f = 0, p; f < t; ++f) o[(p = l[f]).i] = p.x(u);
    return o.join("");
  });
}
function Zt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? qt : n === "string" ? (r = Gn(t)) ? (t = r, Si) : ul : t instanceof Gn ? Si : t instanceof Date ? _h : vh(t) ? ph : Array.isArray(t) ? gh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? mh : qt)(e, t);
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
var ui;
function xh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? As : fl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function bh(e) {
  return e == null || (ui || (ui = document.createElementNS("http://www.w3.org/2000/svg", "g")), ui.setAttribute("transform", e), !(e = ui.transform.baseVal.consolidate())) ? As : (e = e.matrix, fl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cl(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, p, h, d, y) {
    if (u !== p || f !== h) {
      var b = d.push("translate(", null, t, null, n);
      y.push({ i: b - 4, x: qt(u, p) }, { i: b - 2, x: qt(f, h) });
    } else (p || h) && d.push("translate(" + p + t + h + n);
  }
  function a(u, f, p, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: qt(u, f) })) : f && p.push(i(p) + "rotate(" + f + r);
  }
  function o(u, f, p, h) {
    u !== f ? h.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: qt(u, f) }) : f && p.push(i(p) + "skewX(" + f + r);
  }
  function l(u, f, p, h, d, y) {
    if (u !== p || f !== h) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: qt(u, p) }, { i: b - 2, x: qt(f, h) });
    } else (p !== 1 || h !== 1) && d.push(i(d) + "scale(" + p + "," + h + ")");
  }
  return function(u, f) {
    var p = [], h = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, p, h), a(u.rotate, f.rotate, p, h), o(u.skewX, f.skewX, p, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, h), u = f = null, function(d) {
      for (var y = -1, b = h.length, m; ++y < b; ) p[(m = h[y]).i] = m.x(d);
      return p.join("");
    };
  };
}
var $h = cl(xh, "px, ", "px)", "deg)"), Ah = cl(bh, ", ", ")", ")"), mr = 0, Nr = 0, Rr = 0, hl = 1e3, Ni, kr, ki = 0, Kn = 0, Gi = 0, Vr = typeof performance == "object" && performance.now ? performance : Date, dl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Gs() {
  return Kn || (dl(Eh), Kn = Vr.now() + Gi);
}
function Eh() {
  Kn = 0;
}
function Mi() {
  this._call = this._time = this._next = null;
}
Mi.prototype = pl.prototype = {
  constructor: Mi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (t == null ? 0 : +t), !this._next && kr !== this && (kr ? kr._next = this : Ni = this, kr = this), this._call = e, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function pl(e, t, n) {
  var r = new Mi();
  return r.restart(e, t, n), r;
}
function Th() {
  Gs(), ++mr;
  for (var e = Ni, t; e; )
    (t = Kn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --mr;
}
function Oa() {
  Kn = (ki = Vr.now()) + Gi, mr = Nr = 0;
  try {
    Th();
  } finally {
    mr = 0, Rh(), Kn = 0;
  }
}
function Ch() {
  var e = Vr.now(), t = e - ki;
  t > hl && (Gi -= t, ki = e);
}
function Rh() {
  for (var e, t = Ni, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ni = n);
  kr = e, Es(r);
}
function Es(e) {
  if (!mr) {
    Nr && (Nr = clearTimeout(Nr));
    var t = e - Kn;
    t > 24 ? (e < 1 / 0 && (Nr = setTimeout(Oa, e - Vr.now() - Gi)), Rr && (Rr = clearInterval(Rr))) : (Rr || (ki = Vr.now(), Rr = setInterval(Ch, hl)), mr = 1, dl(Oa));
  }
}
function Fa(e, t, n) {
  var r = new Mi();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var Sh = Uo("start", "end", "cancel", "interrupt"), Nh = [], vl = 0, Ia = 1, Ts = 2, yi = 3, La = 4, Cs = 5, wi = 6;
function Ki(e, t, n, r, i, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  kh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Sh,
    tween: Nh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: vl
  });
}
function Ks(e, t) {
  var n = Rt(e, t);
  if (n.state > vl) throw new Error("too late; already scheduled");
  return n;
}
function Wt(e, t) {
  var n = Rt(e, t);
  if (n.state > yi) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function kh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = pl(s, 0, n.time);
  function s(u) {
    n.state = Ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, p, h, d;
    if (n.state !== Ia) return l();
    for (f in r)
      if (d = r[f], d.name === n.name) {
        if (d.state === yi) return Fa(a);
        d.state === La ? (d.state = wi, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete r[f]) : +f < t && (d.state = wi, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete r[f]);
      }
    if (Fa(function() {
      n.state === yi && (n.state = La, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ts, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ts) {
      for (n.state = yi, i = new Array(h = n.tween.length), f = 0, p = -1; f < h; ++f)
        (d = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = d);
      i.length = p + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Cs, 1), p = -1, h = i.length; ++p < h; )
      i[p].call(e, f);
    n.state === Cs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = wi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Mh(e, t) {
  var n = e.__transition, r, i, s = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > Ts && r.state < Cs, r.state = wi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    s && delete e.__transition;
  }
}
function Ph(e) {
  return this.each(function() {
    Mh(this, e);
  });
}
function Dh(e, t) {
  var n, r;
  return function() {
    var i = Wt(this, e), s = i.tween;
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
function Oh(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Wt(this, e), a = s.tween;
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
function Fh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Rt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Dh : Oh)(n, e, t));
}
function js(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Wt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Rt(i, r).value[t];
  };
}
function gl(e, t) {
  var n;
  return (typeof t == "number" ? qt : t instanceof Gn ? Si : (n = Gn(t)) ? (t = n, Si) : ul)(e, t);
}
function Ih(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Lh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Vh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function zh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Hh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Yh(e, t) {
  var n = Ui(e), r = n === "transform" ? Ah : gl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hh : zh)(n, r, js(this, "attr." + e, t)) : t == null ? (n.local ? Lh : Ih)(n) : (n.local ? Vh : qh)(n, r, t));
}
function Bh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Xh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Wh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Xh(e, s)), n;
  }
  return i._value = t, i;
}
function Uh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Bh(e, s)), n;
  }
  return i._value = t, i;
}
function Gh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ui(e);
  return this.tween(n, (r.local ? Wh : Uh)(r, t));
}
function Kh(e, t) {
  return function() {
    Ks(this, e).delay = +t.apply(this, arguments);
  };
}
function jh(e, t) {
  return t = +t, function() {
    Ks(this, e).delay = t;
  };
}
function Jh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kh : jh)(t, e)) : Rt(this.node(), t).delay;
}
function Zh(e, t) {
  return function() {
    Wt(this, e).duration = +t.apply(this, arguments);
  };
}
function Qh(e, t) {
  return t = +t, function() {
    Wt(this, e).duration = t;
  };
}
function ed(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zh : Qh)(t, e)) : Rt(this.node(), t).duration;
}
function td(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Wt(this, e).ease = t;
  };
}
function nd(e) {
  var t = this._id;
  return arguments.length ? this.each(td(t, e)) : Rt(this.node(), t).ease;
}
function rd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Wt(this, e).ease = n;
  };
}
function id(e) {
  if (typeof e != "function") throw new Error();
  return this.each(rd(this._id, e));
}
function sd(e) {
  typeof e != "function" && (e = jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new cn(r, this._parents, this._name, this._id);
}
function ad(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, p = a[o] = new Array(f), h, d = 0; d < f; ++d)
      (h = l[d] || u[d]) && (p[d] = h);
  for (; o < r; ++o)
    a[o] = t[o];
  return new cn(a, this._parents, this._name, this._id);
}
function od(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ld(e, t, n) {
  var r, i, s = od(t) ? Ks : Wt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function ud(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(ld(n, e, t));
}
function fd(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function cd() {
  return this.on("end.remove", fd(this._id));
}
function hd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Bs(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, p, h = 0; h < l; ++h)
      (f = o[h]) && (p = e.call(f, f.__data__, h, o)) && ("__data__" in f && (p.__data__ = f.__data__), u[h] = p, Ki(u[h], t, n, h, u, Rt(f, n)));
  return new cn(s, this._parents, t, n);
}
function dd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ko(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var h = e.call(f, f.__data__, p, l), d, y = Rt(f, n), b = 0, m = h.length; b < m; ++b)
          (d = h[b]) && Ki(d, t, n, b, h, y);
        s.push(h), a.push(f);
      }
  return new cn(s, a, t, n);
}
var pd = xr.prototype.constructor;
function vd() {
  return new pd(this._groups, this._parents);
}
function gd(e, t) {
  var n, r, i;
  return function() {
    var s = _r(this, e), a = (this.style.removeProperty(e), _r(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function _l(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function _d(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = _r(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function md(e, t, n) {
  var r, i, s;
  return function() {
    var a = _r(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), _r(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function yd(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Wt(this, e), u = l.on, f = l.value[s] == null ? o || (o = _l(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function wd(e, t, n) {
  var r = (e += "") == "transform" ? $h : gl;
  return t == null ? this.styleTween(e, gd(e, r)).on("end.style." + e, _l(e)) : typeof t == "function" ? this.styleTween(e, md(e, r, js(this, "style." + e, t))).each(yd(this._id, e)) : this.styleTween(e, _d(e, r, t), n).on("end.style." + e, null);
}
function xd(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function bd(e, t, n) {
  var r, i;
  function s() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && xd(e, a, n)), r;
  }
  return s._value = t, s;
}
function $d(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, bd(e, t, n ?? ""));
}
function Ad(e) {
  return function() {
    this.textContent = e;
  };
}
function Ed(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Td(e) {
  return this.tween("text", typeof e == "function" ? Ed(js(this, "text", e)) : Ad(e == null ? "" : e + ""));
}
function Cd(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Rd(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Cd(i)), t;
  }
  return r._value = e, r;
}
function Sd(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Rd(e));
}
function Nd() {
  for (var e = this._name, t = this._id, n = ml(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Rt(l, t);
        Ki(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new cn(r, this._parents, e, n);
}
function kd() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Wt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), i === 0 && s();
  });
}
var Md = 0;
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function xi(e) {
  return xr().transition(e);
}
function ml() {
  return ++Md;
}
var Jt = xr.prototype;
cn.prototype = xi.prototype = {
  constructor: cn,
  select: hd,
  selectAll: dd,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: sd,
  merge: ad,
  selection: vd,
  transition: Nd,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: ud,
  attr: Yh,
  attrTween: Gh,
  style: wd,
  styleTween: $d,
  text: Td,
  textTween: Sd,
  remove: cd,
  tween: Fh,
  delay: Jh,
  duration: ed,
  ease: nd,
  easeVarying: id,
  end: kd,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function Pd(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Dd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pd
};
function Od(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Fd(e) {
  var t, n;
  e instanceof cn ? (t = e._id, e = e._name) : (t = ml(), (n = Dd).time = Gs(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ki(l, e, t, u, a, n || Od(l, t));
  return new cn(r, this._parents, e, t);
}
xr.prototype.interrupt = Ph;
xr.prototype.transition = Fd;
const Rs = Math.PI, Ss = 2 * Rs, Nn = 1e-6, Id = Ss - Nn;
function yl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Ld(e) {
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
class qd {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? yl : Ld(t);
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
    let a = this._x1, o = this._y1, l = r - t, u = i - n, f = a - t, p = o - n, h = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > Nn) if (!(Math.abs(p * l - u * f) > Nn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = r - a, y = i - o, b = l * l + u * u, m = d * d + y * y, $ = Math.sqrt(b), D = Math.sqrt(h), M = s * Math.tan((Rs - Math.acos((b + h - m) / (2 * $ * D))) / 2), S = M / D, I = M / $;
      Math.abs(S - 1) > Nn && this._append`L${t + S * f},${n + S * p}`, this._append`A${s},${s},0,0,${+(p * d > f * y)},${this._x1 = t + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, p = 1 ^ a, h = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Nn || Math.abs(this._y1 - f) > Nn) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Ss + Ss), h > Id ? this._append`A${r},${r},0,1,${p},${t - o},${n - l}A${r},${r},0,1,${p},${this._x1 = u},${this._y1 = f}` : h > Nn && this._append`A${r},${r},0,${+(h >= Rs)},${p},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Vd(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; ) n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const zd = Vd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function qe(e) {
  return function() {
    return e;
  };
}
const qa = Math.abs, De = Math.atan2, Sn = Math.cos, Hd = Math.max, ss = Math.min, Dt = Math.sin, tr = Math.sqrt, Be = 1e-12, zr = Math.PI, Pi = zr / 2, bi = 2 * zr;
function Yd(e) {
  return e > 1 ? 0 : e < -1 ? zr : Math.acos(e);
}
function Va(e) {
  return e >= 1 ? Pi : e <= -1 ? -Pi : Math.asin(e);
}
function Bd(e) {
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
  }, () => new qd(t);
}
function Xd(e) {
  return e.innerRadius;
}
function Wd(e) {
  return e.outerRadius;
}
function Ud(e) {
  return e.startAngle;
}
function Gd(e) {
  return e.endAngle;
}
function Kd(e) {
  return e && e.padAngle;
}
function jd(e, t, n, r, i, s, a, o) {
  var l = n - e, u = r - t, f = a - i, p = o - s, h = p * l - f * u;
  if (!(h * h < Be))
    return h = (f * (t - s) - p * (e - i)) / h, [e + h * l, t + h * u];
}
function fi(e, t, n, r, i, s, a) {
  var o = e - n, l = t - r, u = (a ? s : -s) / tr(o * o + l * l), f = u * l, p = -u * o, h = e + f, d = t + p, y = n + f, b = r + p, m = (h + y) / 2, $ = (d + b) / 2, D = y - h, M = b - d, S = D * D + M * M, I = i - s, L = h * b - y * d, U = (M < 0 ? -1 : 1) * tr(Hd(0, I * I * S - L * L)), ae = (L * M - D * U) / S, Q = (-L * D - M * U) / S, G = (L * M + D * U) / S, oe = (-L * D + M * U) / S, ue = ae - m, O = Q - $, F = G - m, Ne = oe - $;
  return ue * ue + O * O > F * F + Ne * Ne && (ae = G, Q = oe), {
    cx: ae,
    cy: Q,
    x01: -f,
    y01: -p,
    x11: ae * (i / I - 1),
    y11: Q * (i / I - 1)
  };
}
function wt() {
  var e = Xd, t = Wd, n = qe(0), r = null, i = Ud, s = Gd, a = Kd, o = null, l = Bd(u);
  function u() {
    var f, p, h = +e.apply(this, arguments), d = +t.apply(this, arguments), y = i.apply(this, arguments) - Pi, b = s.apply(this, arguments) - Pi, m = qa(b - y), $ = b > y;
    if (o || (o = f = l()), d < h && (p = d, d = h, h = p), !(d > Be)) o.moveTo(0, 0);
    else if (m > bi - Be)
      o.moveTo(d * Sn(y), d * Dt(y)), o.arc(0, 0, d, y, b, !$), h > Be && (o.moveTo(h * Sn(b), h * Dt(b)), o.arc(0, 0, h, b, y, $));
    else {
      var D = y, M = b, S = y, I = b, L = m, U = m, ae = a.apply(this, arguments) / 2, Q = ae > Be && (r ? +r.apply(this, arguments) : tr(h * h + d * d)), G = ss(qa(d - h) / 2, +n.apply(this, arguments)), oe = G, ue = G, O, F;
      if (Q > Be) {
        var Ne = Va(Q / h * Dt(ae)), ft = Va(Q / d * Dt(ae));
        (L -= Ne * 2) > Be ? (Ne *= $ ? 1 : -1, S += Ne, I -= Ne) : (L = 0, S = I = (y + b) / 2), (U -= ft * 2) > Be ? (ft *= $ ? 1 : -1, D += ft, M -= ft) : (U = 0, D = M = (y + b) / 2);
      }
      var me = d * Sn(D), ye = d * Dt(D), te = h * Sn(I), ke = h * Dt(I);
      if (G > Be) {
        var Y = d * Sn(M), Oe = d * Dt(M), St = h * Sn(S), ie = h * Dt(S), Je;
        if (m < zr)
          if (Je = jd(me, ye, St, ie, Y, Oe, te, ke)) {
            var yt = me - Je[0], Ze = ye - Je[1], Tn = Y - Je[0], ge = Oe - Je[1], Nt = 1 / Dt(Yd((yt * Tn + Ze * ge) / (tr(yt * yt + Ze * Ze) * tr(Tn * Tn + ge * ge))) / 2), Ut = tr(Je[0] * Je[0] + Je[1] * Je[1]);
            oe = ss(G, (h - Ut) / (Nt - 1)), ue = ss(G, (d - Ut) / (Nt + 1));
          } else
            oe = ue = 0;
      }
      U > Be ? ue > Be ? (O = fi(St, ie, me, ye, d, ue, $), F = fi(Y, Oe, te, ke, d, ue, $), o.moveTo(O.cx + O.x01, O.cy + O.y01), ue < G ? o.arc(O.cx, O.cy, ue, De(O.y01, O.x01), De(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, ue, De(O.y01, O.x01), De(O.y11, O.x11), !$), o.arc(0, 0, d, De(O.cy + O.y11, O.cx + O.x11), De(F.cy + F.y11, F.cx + F.x11), !$), o.arc(F.cx, F.cy, ue, De(F.y11, F.x11), De(F.y01, F.x01), !$))) : (o.moveTo(me, ye), o.arc(0, 0, d, D, M, !$)) : o.moveTo(me, ye), !(h > Be) || !(L > Be) ? o.lineTo(te, ke) : oe > Be ? (O = fi(te, ke, Y, Oe, h, -oe, $), F = fi(me, ye, St, ie, h, -oe, $), o.lineTo(O.cx + O.x01, O.cy + O.y01), oe < G ? o.arc(O.cx, O.cy, oe, De(O.y01, O.x01), De(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, oe, De(O.y01, O.x01), De(O.y11, O.x11), !$), o.arc(0, 0, h, De(O.cy + O.y11, O.cx + O.x11), De(F.cy + F.y11, F.cx + F.x11), $), o.arc(F.cx, F.cy, oe, De(F.y11, F.x11), De(F.y01, F.x01), !$))) : o.arc(0, 0, h, I, S, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - zr / 2;
    return [Sn(p) * f, Dt(p) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : qe(+f), u) : e;
  }, u.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : qe(+f), u) : t;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : qe(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : qe(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : qe(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : qe(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : qe(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Jd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Zd(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Qd(e) {
  return e;
}
function as() {
  var e = Qd, t = Zd, n = null, r = qe(0), i = qe(bi), s = qe(0);
  function a(o) {
    var l, u = (o = Jd(o)).length, f, p, h = 0, d = new Array(u), y = new Array(u), b = +r.apply(this, arguments), m = Math.min(bi, Math.max(-bi, i.apply(this, arguments) - b)), $, D = Math.min(Math.abs(m) / u, s.apply(this, arguments)), M = D * (m < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = y[d[l] = l] = +e(o[l], l, o)) > 0 && (h += S);
    for (t != null ? d.sort(function(I, L) {
      return t(y[I], y[L]);
    }) : n != null && d.sort(function(I, L) {
      return n(o[I], o[L]);
    }), l = 0, p = h ? (m - u * M) / h : 0; l < u; ++l, b = $)
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
    return arguments.length ? (e = typeof o == "function" ? o : qe(+o), a) : e;
  }, a.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, a) : t;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, t = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : qe(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : qe(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : qe(+o), a) : s;
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
var ep = /* @__PURE__ */ ju('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const tp = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function wl(e, t) {
  zi(t, !0), Hs(e, tp);
  let n = se(t, "jsonData", 7), r = se(t, "currentRound", 7, 1), i = se(t, "mouseEventType", 15), s = se(t, "mouseData", 15), a = se(t, "mouseX", 15), o = se(t, "mouseY", 15), l = se(t, "requestRoundChange", 7, (c) => {
  }), u = se(t, "candidateColors", 23, () => []), f = se(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), p = se(t, "firstRoundDeterminesPercentages", 7, !1), h = se(t, "randomizeOrder", 7, !1), d = se(t, "displayPhase", 15, 0);
  function y(c) {
    return c.isTransfer ? `${c.label}__transfer` : c.transferIndex != null ? `${c.label}__${c.transferIndex}` : c.label;
  }
  const b = 800, m = 800, $ = Math.min(b, m) * 0.3, D = b / 2, M = m / 2, S = "Pie", I = "PieOutline", L = "Donut", U = "TextLayer", ae = "url(#cross-hatch)", Q = 1.15, G = 750, oe = 800, ue = "white", O = 1, F = "#ff00ff", Ne = 3;
  function ft(c) {
    return "hatch-" + c.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let me = [], ye = [], te = [], ke = 0, Y = 0;
  const Oe = {}, St = "No Further Rankings";
  let ie = /* @__PURE__ */ $e(null);
  function Je() {
    const c = fe(x(ie));
    c.select("#" + S).remove(), c.select("#" + I).remove(), c.select("#" + L).remove(), c.select("#" + U).remove();
  }
  function yt(c) {
    l() && (_e = c, l()(c));
  }
  function Ze(c) {
    Je(), te = Tn(c), me = ea(c, S, te, D, M, 0, ge()), ea(c, I, te, D, M, 0, ge(), !1, !1, !0), Er();
  }
  nf(() => {
    pn(), setTimeout(
      () => {
        Ze(r());
      },
      0
    );
  });
  function Tn(c) {
    const g = Gt(c);
    return ke = Jn(c), g;
  }
  function ge() {
    return $;
  }
  function Nt() {
    return ge() * 1.41;
  }
  function Ut(c) {
    let g = 0;
    for (let _ = 1; _ < c; _++) {
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
  function jr(c, g) {
    if (c === "exhausted") return Ut(g);
    {
      const _ = n().results[g - 1].tally;
      return Number(_[c]);
    }
  }
  function Jr(c, g) {
    return jr(c, g).toLocaleString("en-US");
  }
  function Zr(c, g) {
    const _ = p() ? ke : ji(g);
    return (jr(c, g) / _).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Jn(c) {
    const g = n().results[c - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      _ += Number(E);
    return _;
  }
  function kt(c) {
    return c === "exhausted" || c === "Inactive Ballots";
  }
  function ji(c) {
    const g = n().results[c - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      kt(A) || (_ += Number(E));
    return _;
  }
  function Qr(c, g) {
    if (!c || c < 1 || c > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && c === n().results.length)
      return [];
    const _ = n().results[c - 1].tallyResults, A = [];
    for (let E = 0; E < _.length; E++) {
      const T = _[E][g];
      T != null && A.push(T);
    }
    return A;
  }
  function dn(c) {
    return Qr(c, "eliminated");
  }
  function br(c) {
    let g = [];
    for (let _ = 1; _ <= c; _++) g = g.concat(Qr(_, "elected"));
    return [...new Set(g)];
  }
  function w(c, g) {
    const _ = n().results[g - 1].tallyResults;
    let A = 0;
    const E = _.findIndex((T) => (T == null ? void 0 : T.elected) && c == T.elected);
    if (E >= 0) {
      const T = _[E].transfers;
      if (T)
        for (let [P, z] of Object.entries(T)) A += Number(z);
    } else
      return 0;
    return A;
  }
  function B(c) {
    if (c < 1 || c > n().results.length) return !1;
    const g = n().results[c - 1].tallyResults;
    return g.length > 0 && g.some((_) => Object.keys(_.transfers).length > 0);
  }
  function ee(c, g) {
    c.some((_) => kt(_.label)) || c.push({ label: "exhausted", value: Ut(g) });
  }
  function pe(c) {
    let g = c | 0;
    return () => {
      g = g + 1831565813 | 0;
      let _ = Math.imul(g ^ g >>> 15, 1 | g);
      return _ = _ + Math.imul(_ ^ _ >>> 7, 61 | _) ^ _, ((_ ^ _ >>> 14) >>> 0) / 4294967296;
    };
  }
  function we(c) {
    let g = 5381;
    for (let _ = 0; _ < c.length; _++)
      g = (g << 5) + g + c.charCodeAt(_) | 0;
    return g;
  }
  function le(c) {
    var E;
    if (c.length <= 3) return c;
    const g = we(((E = n().config) == null ? void 0 : E.contest) ?? ""), _ = pe(g), A = [...c];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(_() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function Fe() {
    const c = Object.keys(n().results[0].tally), g = c.filter((E) => !kt(E)), _ = c.filter((E) => kt(E));
    return [...h() ? le(g) : g, ..._];
  }
  function Gt(c) {
    const g = n().results[c - 1].tally, _ = [];
    for (const A of Fe())
      A in g && _.push({ label: A, value: Number(g[A]) });
    return ee(_, c), _;
  }
  function Mt(c) {
    const g = n().results[c - 1].tally, _ = [];
    for (const A of Fe())
      _.push({ label: A, value: Number(g[A] ?? 0) });
    return ee(_, c), _;
  }
  function Cn(c, g) {
    const _ = [];
    for (const A of c) {
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
  function pn() {
    const c = fe(x(ie)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [_, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Oe[_] = zd[g] : Oe[_] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Oe[_] = u()[g % u().length], g++;
      {
        const E = c.clone(!0);
        E.attr("id", ft(_)).select("rect").attr("fill", Oe[_]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    Oe.exhausted = ae, Oe["Inactive Ballots"] = ae;
  }
  function He() {
    fe(x(ie)).select("#" + L).remove();
  }
  function Qe(c, g) {
    const _ = xi("global").duration(oe);
    g && _.on("end", g);
    const A = Cn(te, c), T = as().sort(null).value((P) => P.value)(A);
    ia(c, S, T, 0, ge()), ia(c, I, T, 0, ge(), !0), te = A, me = T, He(), Al(c), kl(), Pl(0, ge()), Er();
  }
  function Me(c, g) {
    const _ = xi("global").duration(oe);
    g && _.on("end", g), El(c);
  }
  function et(c, g) {
    const _ = xi("global").duration(oe);
    g && _.on("end", g), bl(c), $l(ge(), Nt());
  }
  let xe = !1, tt = [];
  function Ie() {
    Er(), xe = !1, tt.length === 0 && r() < n().results.length && !B(r()) && yt(r() + 1), ct();
  }
  function ct() {
    if (tt.length === 0) {
      _e !== r() && (r() === _e + 1 && _e > 0 && r() <= n().results.length ? (_e = r(), Pt(r())) : r() >= 1 && r() <= n().results.length && (_e = r(), d(0), Ze(r())));
      return;
    }
    const c = tt.shift();
    switch (c.type) {
      case "round": {
        const g = c.round;
        g === _e + 1 && _e > 0 && g <= n().results.length ? (_e = g, Pt(g)) : (g !== _e && g >= 1 && g <= n().results.length && (_e = g, d(0), Ze(g)), ct());
        break;
      }
      case "step":
        ei();
        break;
    }
  }
  function Pt(c) {
    if (c <= 1 || c > n().results.length) {
      ct();
      return;
    }
    xe = !0, Y = c, d(0), Qe(Y - 1, () => {
      d(1), Me(Y - 1, () => {
        d(2), et(Y, () => {
          d(0), Ie();
        });
      });
    });
  }
  function Zn() {
    xe || (xe = !0, Y = r(), Rn());
  }
  function Rn() {
    if (d(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), tt.length > 0) {
      Ie();
      return;
    }
    if (!B(Y)) {
      Y++, yt(Y), Ze(Y), Y < n().results.length ? Rn() : (d(0), Ie());
      return;
    }
    const c = Y < n().results.length - 1 ? Rn : () => {
      d(0), Ie();
    };
    Qe(Y, () => {
      d(1), Me(Y, () => {
        d(2), Y++, yt(Y), et(Y, c);
      });
    });
  }
  Is(() => {
    $r();
  });
  let _e = 0;
  function $r() {
    if (_e != r()) {
      if (xe) {
        tt.push({ type: "round", round: r() });
        return;
      }
      _e == r() - 1 && _e > 0 ? jt() : Kt(r()), _e = r();
    }
  }
  function Kt(c) {
    if (xe) {
      tt.push({ type: "round", round: c });
      return;
    }
    d(0), Ze(c);
  }
  function jt() {
    if (xe) {
      tt.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (Y = r(), Y > n().results.length) {
      Er(), xe = !1;
      return;
    }
    xe = !0, d() === 0 ? Qe(Y - 1, () => {
      d(1), Me(Y - 1, () => {
        d(2), et(Y, () => {
          d(0), Ie();
        });
      });
    }) : d() === 1 ? Me(Y - 1, () => {
      d(2), et(Y, () => {
        d(0), Ie();
      });
    }) : d() === 2 && et(Y, () => {
      d(0), Ie();
    });
  }
  function ei() {
    if (r() > n().results.length) {
      Er(), xe = !1;
      return;
    }
    if (xe) {
      tt.push({ type: "step" });
      return;
    }
    xe = !0, Y = r(), d() === 0 ? Qe(Y, () => {
      d(1), Ie();
    }) : d() === 1 ? Me(Y, () => {
      d(2), Ie();
    }) : d() === 2 ? (Y++, yt(Y), et(Y, () => {
      d(0), Ie();
    })) : (xe = !1, console.warn("displayPhase out of range at ", d()));
  }
  function bl(c) {
    te = Mt(c), me = na(c, S, te, 0, ge(), !0), na(c, I, te, 0, ge(), !1, !0);
  }
  function $l(c, g) {
    const _ = fe(x(ie)).select("#" + L), E = fe(x(ie)).select("#" + S), T = {};
    for (const N of me) {
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
      z--, z === 0 && Ml();
    }
    P.select("path").transition("global").duration(G).attrTween("d", function(N) {
      const k = N.startAngle, C = N.endAngle, R = C - k, Pe = T[N.data.label];
      let Z, Ye;
      if (Pe) {
        const Qn = (Pe.oldStart + Pe.oldEnd) / 2, Il = (Pe.newStart + Pe.newEnd) / 2, Ll = k - Qn;
        Z = Il + Ll, Ye = Z + R;
      } else
        Z = k, Ye = C;
      const ne = Zt(k, Z), Ee = Zt(C, Ye), ni = Zt(g, c), Tr = wt();
      return function(Qn) {
        return Tr.innerRadius(Math.min(ni(Qn), c) - 1).outerRadius(ni(Qn)).startAngle(ne(Qn)).endAngle(Ee(Qn)), Tr(N);
      };
    }).on("end", (N) => q());
  }
  function Al(c) {
    const g = Cl(c, me);
    ye = ta(c, L, g, D, M, ge(), Nt(), !1, !0);
    const _ = fe(x(ie));
    _.select("#" + S).raise(), _.select("#" + I).raise();
  }
  function El(c) {
    const g = Sl(c, ye, me);
    ye = sa(c, L, g, ge(), Nt(), !1);
  }
  function Ar(c) {
    return Oe[c.data.label];
  }
  function Tl(c) {
    const g = {}, _ = n().results[c - 1].tallyResults;
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
  function Cl(c, g) {
    const _ = [], A = ke, E = n().results[c - 1].tallyResults;
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
        const Pe = g.find((ne) => ne.data.label == k);
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
        const Ye = Number(C) / A * 2 * Math.PI;
        R.startAngle = N, N = R.endAngle = N + Ye, R.index = T, R.data.transferIndex = T, _.push(R);
      }
    }
    return _;
  }
  function Rl(c, g, _) {
    const A = {};
    for (let [E, T] of Object.entries(c)) {
      const P = _.find((N) => E == N.data.label);
      if (P === void 0) {
        E !== "residual surplus" && console.warn("getTransferStartAngles: mainPieObj not found for ", E);
        continue;
      }
      const z = (P.startAngle + P.endAngle) / 2, q = c[P.data.label] / g * 2 * Math.PI;
      A[P.data.label] = z - q / 2;
    }
    return A;
  }
  function Sl(c, g, _) {
    const A = [], E = ke, T = Tl(c), P = Rl(T, E, _);
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
  function Zs(c, g, _, A) {
    const E = wt().innerRadius(_ * Q).outerRadius(_ * Q), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], z = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const C = k.data.label === "exhausted" ? St : k.data.label, R = E.centroid(k), Pe = ti(k.startAngle, k.endAngle), Z = Jr(k.data.label, c);
      let Ye;
      !p() && kt(k.data.label) ? Ye = Z : Ye = Z + " (" + Zr(k.data.label, c) + ")";
      const ne = z.append("text").attr("transform", `translate(${R})`).attr("text-anchor", Pe).text(C);
      ne.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Ye);
      const Ee = ne.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Ee.x + R[0], Ee.y + R[1], Ee.width, Ee.height)
      });
    }
    z.remove(), P.sort((k, C) => C.value - k.value);
    const q = [], N = /* @__PURE__ */ new Set();
    for (const k of P)
      q.some((R) => k.bbox.left < R.right && k.bbox.right > R.left && k.bbox.top < R.bottom && k.bbox.bottom > R.top) || (N.add(k.label), q.push(k.bbox));
    return N;
  }
  function Qs(c, g, _, A, E, T) {
    const z = fe(x(ie)).append("g").attr("id", U).attr("transform", `translate(${_}, ${A})`), q = wt().innerRadius(E * Q).outerRadius(E * Q), N = Zs(c, g, E, z);
    z.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && N.has(k.data.label) && fe(this).append("g").attr("id", (C) => y(C.data)).classed("eliminated", (C) => T.includes(C.data.label) || C.data.isTransfer === !0).each(function(C, R) {
        C.data.label === "exhausted" && fe(this).on("mouseenter", (Pe, Z) => Dl(Pe)).on("mouseleave", (Pe, Z) => Ol());
      }).append("text").attr("transform", (C) => `translate(${q.centroid(C)})`).attr("text-anchor", (C) => ti(C.startAngle, C.endAngle)).text((C) => C.data.label === "exhausted" ? St : C.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((C) => {
        const R = Jr(C.data.label, c);
        return !p() && kt(C.data.label) ? R : R + " (" + Zr(C.data.label, c) + ")";
      });
    });
  }
  function Nl(c, g, _, A) {
    const T = fe(x(ie)).select("#" + U), P = Zs(c, g, _, T);
    T.selectAll("g").each(function(R) {
      R && R.data && !R.data.isTransfer && !P.has(R.data.label) && fe(this).remove();
    });
    const z = T.selectAll("tspan"), q = T.selectAll("g").data(g, (R) => y(R.data)).classed("eliminated", (R) => A.includes(R.data.label) || R.data.isTransfer === !0), N = wt().innerRadius(_ * Q).outerRadius(_ * Q + 1);
    z.transition("global").duration(G).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ti(R.startAngle, R.endAngle)), q.select("text").transition("global").duration(G).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ti(R.startAngle, R.endAngle)).on("end", (R) => C());
    let k = q.size();
    function C(R) {
      k--, k === 0 && (T.remove(), Qs(c, g, D, M, _, A));
    }
  }
  function ea(c, g, _, A, E, T, P, z = !0, q = !1, N = !1) {
    const C = as().sort(null).value((R) => R.value)(_);
    return ta(c, g, C, A, E, T, P, z, q, N), C;
  }
  function Er() {
    fe(x(ie)).select("#" + I).selectAll(".elected").select("path").style("stroke", F).style("stroke-width", `${Ne}px`);
  }
  function ta(c, g, _, A, E, T, P, z, q, N = !1) {
    const k = dn(c), C = br(c), Z = fe(x(ie)).attr("viewBox", `0 0 ${b} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(_).enter().append("g").attr("class", "slice").classed("eliminated", (ne) => k.includes(ne.data.label) || ne.data.isTransfer === !0).classed("elected", (ne) => C.includes(ne.data.label) && !ne.data.isTransfer).attr("id", (ne) => y(ne.data));
    N ? Z.style("pointer-events", "none") : Z.on("mouseenter", (ne, Ee) => Zi(ne, Ee)).on("mouseleave", (ne, Ee) => Qi(ne, Ee));
    const Ye = wt().outerRadius(P).innerRadius(T);
    if (q) {
      const ne = wt().outerRadius(T + 1).innerRadius(T);
      Z.append("path").attr("d", ne).attr("stroke", N ? "none" : T === 0 ? ue : "none").attr("stroke-width", N ? 0 : T === 0 ? O : 0).attr("fill", N ? "none" : (Ee) => Ar(Ee)).transition("global").duration(G).attr("d", (Ee) => Ye(Ee)).on("end", (Ee) => {
        N || Ji();
      });
    } else
      Z.append("path").attr("d", (ne) => Ye(ne)).attr("fill", N ? "none" : (ne) => Ar(ne)).attr("stroke", N ? "none" : ue).attr("stroke-width", N ? 0 : O), N || Ji();
    return z && !N && Qs(c, _, A, E, P, k), _;
  }
  function kl() {
    const _ = fe(x(ie)).select("#" + U).selectAll(".eliminated");
    _.size() > 0 && _.classed("finished", !0);
  }
  function Ml() {
    const _ = fe(x(ie)).select("#" + U).selectAll(".finished");
    _.size() > 0 && _.remove();
  }
  function Pl(c, g) {
    const E = fe(x(ie)).select("#" + S).selectAll(".eliminated"), T = wt().innerRadius(c), P = wt().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(G).attrTween("d", function(z) {
      const q = Zt(g, c);
      return function(N) {
        return P.innerRadius(q(N)), P(z);
      };
    }).attr("fill", (z) => `url(#${ft(z.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(G).attrTween("d", function(z) {
      const q = Zt(g, c);
      return function(N) {
        return T.outerRadius(q(N)), T(z);
      };
    }).attr("fill", (z) => Ar(z));
  }
  function ti(c, g) {
    const _ = (c + g) / 2;
    return _ > Math.PI * 11 / 6 || _ < Math.PI * 1 / 6 || _ > Math.PI * 5 / 6 && _ < Math.PI * 7 / 6 ? "middle" : _ < Math.PI ? "start" : "end";
  }
  function Ji() {
    fe(x(
      ie
      // force redisplay of text labels
    )).select("#" + U).raise().append("g").remove();
  }
  function na(c, g, _, A, E, T, P = !1) {
    const q = as().sort(null).value((N) => N.value)(_);
    return sa(c, g, q, A, E, T, P), q;
  }
  function ra(c, g, _, A, E = !1) {
    const T = dn(c), P = br(c), N = fe(x(ie)).select("#" + g).selectAll(".slice").data(_, (C) => y(C.data));
    N.exit().remove();
    const k = N.enter().append("g").attr("class", "slice").attr("id", (C) => y(C.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), k.append("path").attr("d", (C) => A(C)).attr("fill", E ? "none" : (C) => Ar(C)).attr("stroke", E ? "none" : ue).attr("stroke-width", E ? 0 : O), N.classed("eliminated", (C) => T.includes(C.data.label)).classed("elected", (C) => P.includes(C.data.label)), E || N.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), N;
  }
  function ia(c, g, _, A, E, T = !1) {
    const P = wt().outerRadius(E).innerRadius(A);
    ra(c, g, _, P, T).select("path").attr("d", (q) => P(q)).attr("fill", T ? "none" : (q) => Ar(q));
  }
  function sa(c, g, _, A, E, T, P = !1) {
    const z = wt().outerRadius(E).innerRadius(A).startAngle((Z) => Z.startAngle).endAngle((Z) => Z.endAngle), q = wt().outerRadius(E).innerRadius(A);
    fe(x(ie)).select("#" + g).selectAll(".slice").attr("prevStart", (Z) => Z.startAngle).attr("prevEnd", (Z) => Z.endAngle);
    const C = ra(c, g, _, q, P);
    let R = C.size();
    function Pe() {
      R--, R <= 0 && (P || Ji());
    }
    return C.select("path").transition("global").duration(G).attrTween("d", function(Z) {
      const Ye = Number(fe(this.parentNode).attr("prevStart")), ne = Number(fe(this.parentNode).attr("prevEnd")), Ee = Zt(Ye, Z.startAngle), ni = Zt(ne, Z.endAngle);
      return (Tr) => (z.startAngle(Ee(Tr)).endAngle(ni(Tr)), z(Z));
    }).on("end", function(Z) {
      Z.startAngle === Z.endAngle && fe(this).attr("stroke", "none"), Pe();
    }), T && !P && Nl(c, _, E, dn(c)), _;
  }
  function Zi(c, g) {
    s(g.data.label), i("enter"), a(c.clientX), o(c.clientY);
  }
  function Qi(c, g) {
    s(g.data.label), i("leave");
  }
  function Dl(c, g) {
    i("show-exhausted"), a(c.clientX), o(c.clientY);
  }
  function Ol(c, g) {
    i("hide-exhausted");
  }
  var Fl = {
    pieColors: Oe,
    exhaustedLabel: St,
    countExhaustedVotes: Ut,
    getEliminatedCandidates: dn,
    getElectedCandidates: br,
    runFullAnimationFn: Zn,
    animateOnePhaseFn: ei,
    get jsonData() {
      return n();
    },
    set jsonData(c) {
      n(c), re();
    },
    get currentRound() {
      return r();
    },
    set currentRound(c = 1) {
      r(c), re();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(c) {
      i(c), re();
    },
    get mouseData() {
      return s();
    },
    set mouseData(c) {
      s(c), re();
    },
    get mouseX() {
      return a();
    },
    set mouseX(c) {
      a(c), re();
    },
    get mouseY() {
      return o();
    },
    set mouseY(c) {
      o(c), re();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(c = (g) => {
    }) {
      l(c), re();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(c = []) {
      u(c), re();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(c = !1) {
      f(c), re();
    },
    get firstRoundDeterminesPercentages() {
      return p();
    },
    set firstRoundDeterminesPercentages(c = !1) {
      p(c), re();
    },
    get randomizeOrder() {
      return h();
    },
    set randomizeOrder(c = !1) {
      h(c), re();
    },
    get displayPhase() {
      return d();
    },
    set displayPhase(c = 0) {
      d(c), re();
    }
  }, aa = ep();
  return gi(aa, (c) => he(ie, c), () => x(ie)), Ue(e, aa), Hi(Fl);
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
var np = /* @__PURE__ */ Xt("<div></div>"), rp = /* @__PURE__ */ Xt('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), ip = /* @__PURE__ */ Xt('<div role="button" aria-label="Advance animation phase"></div>');
const sp = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function xl(e, t) {
  zi(t, !0), Hs(e, sp);
  let n = se(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = se(t, "currentStep", 7, 0), i = se(t, "disabled", 7, !1), s = se(t, "onAdvance", 7, () => {
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
  }, u = ip();
  let f;
  return u.__click = a, u.__keydown = o, vi(u, 21, n, pi, (p, h, d) => {
    var y = rp(), b = _n(y);
    {
      var m = (U) => {
        var ae = np();
        let Q;
        Qt(() => Q = si(ae, 1, "connector svelte-1l4eyw0", null, Q, { completed: !i() && d <= r() })), Ue(U, ae);
      };
      er(b, (U) => {
        d > 0 && U(m);
      });
    }
    var $ = nt(b, 2), D = Xe($);
    let M;
    var S = nt(D, 2);
    let I;
    var L = Xe(S, !0);
    Le(S), Le($), Qt(() => {
      M = si(D, 1, "dot svelte-1l4eyw0", null, M, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), I = si(S, 1, "label svelte-1l4eyw0", null, I, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), mn(L, x(h));
    }), Ue(p, y);
  }), Le(u), Qt(() => {
    f = si(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), xa(u, "tabindex", i() ? -1 : 0), xa(u, "aria-disabled", i());
  }), Ue(e, u), Hi(l);
}
Uu(["click", "keydown"]);
Ys(xl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var ap = /* @__PURE__ */ Xt("<span> </span> <!>", 1), op = /* @__PURE__ */ Xt("About to eliminate: <!>", 1), lp = /* @__PURE__ */ Xt("<span> </span> <!>", 1), up = /* @__PURE__ */ Xt(" <!>", 1), fp = /* @__PURE__ */ Xt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), cp = /* @__PURE__ */ Xt("<span> </span> <br/>", 1), hp = /* @__PURE__ */ Xt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const dp = {
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
function pp(e, t) {
  zi(t, !0), Hs(e, dp);
  const n = 0.85;
  let r = se(t, "electionSummary", 7), i = se(t, "currentRound", 7, 1), s = se(t, "requestRoundChange", 7, (w) => {
  }), a = se(t, "candidateColors", 23, () => []), o = se(t, "textForWinner", 7, "elected"), l = se(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = se(t, "firstRoundDeterminesPercentages", 7, !1), f = se(t, "randomizeOrder", 7, !1), p = se(t, "showCaptions", 7, !1);
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
  let d = /* @__PURE__ */ vn(() => h[o()] ?? h.elected), y = /* @__PURE__ */ $e(null), b = /* @__PURE__ */ $e(null), m = /* @__PURE__ */ $e(""), $ = /* @__PURE__ */ $e(Pn([])), D = /* @__PURE__ */ $e(""), M = /* @__PURE__ */ $e(""), S = /* @__PURE__ */ $e(0), I = /* @__PURE__ */ $e(0), L = /* @__PURE__ */ vn(() => U(r()));
  function U(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (B) {
        return console.error("Failed to parse JSON string:", B), {};
      }
    return w || {};
  }
  function ae(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(w, B, ee) {
    w.style.left = B + "px", w.style.top = ee + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const le = w.getBoundingClientRect();
      let Fe = B, Gt = ee + 20;
      Fe + le.width > window.innerWidth - 12 && (Fe = window.innerWidth - le.width - 12), Fe < 12 && (Fe = 12), Gt + le.height > window.innerHeight - 12 && (Gt = ee - le.height - 12), w.style.left = Fe + "px", w.style.top = Gt + "px";
    });
  }
  function G() {
    switch (x(D)) {
      case "enter":
        ((w) => {
          var B = ru(w, 2);
          he($, B[0], !0), he(m, B[1], !0);
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
  Is(() => G());
  function oe(w, B) {
    return w === 1 ? B ? "vote was" : "vote will be" : B ? "votes were" : "votes will be";
  }
  function ue(w, B) {
    const ee = [], pe = w === "exhausted" ? St() : w;
    let we;
    w === "exhausted" ? we = Y(1) : we = x(L).results[0].tally[w], ee.push(`${pe} started with ${we} votes.`);
    for (let le = 1; le <= B; le++) {
      le === B && (w === "exhausted" ? we = Y(B) : we = x(L).results[B - 1].tally[w], ee.push(`${pe} has ${we} votes at round ${B}.`));
      const Fe = x(L).results[le - 1].tallyResults, Gt = ye(le);
      for (let Mt = 0; Mt < Fe.length; Mt++) {
        const Cn = Fe[Mt].transfers, pn = Fe[Mt].eliminated, He = Fe[Mt].elected;
        if (!Gt) {
          if (pn)
            pn === w && ee.push(`${pe} will be eliminated on round ${le}.`);
          else if (w === He && (ee.push(`${pe} ${x(d).event} on round ${le}.`), Cn))
            for (let [Me, et] of Object.entries(Cn))
              ee.push(`${et} ${oe(Number(et), le < B)} transferred to ${Me} on round ${le}.`);
        }
        const Qe = pn || He;
        if (Qe) {
          const Me = Number(Cn[w]);
          Me && ee.push(`${Me} ${oe(Me, le < B)} transferred from ${Qe} on round ${le}.`);
        }
      }
    }
    return [ee, pe];
  }
  function O() {
    let w = 0;
    for (let B = 1; B <= x(L).results.length; B++) {
      if (ye(B)) continue;
      const ee = x(L).results[B - 1].tallyResults;
      for (let pe = 0; pe < ee.length; pe++)
        ee[pe].elected && w++;
    }
    return w;
  }
  let F, Ne = /* @__PURE__ */ $e(0);
  function ft(w) {
    var we;
    return !((we = x(L)) != null && we.results) || w < 1 || w > x(L).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [x(L).results[w - 1].tallyResults.some((le) => le.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function me(w) {
    var ee;
    if (!((ee = x(L)) != null && ee.results) || w < 1 || w > x(L).results.length || w === x(L).results.length) return !0;
    const B = x(L).results[w - 1].tallyResults;
    return B.length === 0 || B.every((pe) => Object.keys(pe.transfers).length === 0);
  }
  function ye(w) {
    return l() && x(L).results && w === x(L).results.length;
  }
  function te(w) {
    return ye(w) ? [] : F ? F.getEliminatedCandidates(w) : [];
  }
  function ke(w) {
    return ye(w) ? [] : F ? F.getElectedCandidates(w) : [];
  }
  function Y(w) {
    return F ? F.countExhaustedVotes(w) : 0;
  }
  function Oe() {
    F && F.animateOnePhaseFn && F.animateOnePhaseFn();
  }
  function St() {
    return F ? F.exhaustedLabel : "";
  }
  function ie() {
    return F ? F.pieColors : {};
  }
  var Je = {
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
    set requestRoundChange(w = (B) => {
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
  }, yt = hp(), Ze = _n(yt), Tn = Xe(Ze);
  {
    let w = /* @__PURE__ */ vn(() => ft(i())), B = /* @__PURE__ */ vn(() => me(i()));
    xl(Tn, {
      get labels() {
        return x(w);
      },
      get currentStep() {
        return x(Ne);
      },
      get disabled() {
        return x(B);
      },
      onAdvance: Oe
    });
  }
  Le(Ze);
  var ge = nt(Ze, 4), Nt = Xe(ge), Ut = Xe(Nt), jr = Xe(Ut);
  gi(
    wl(jr, {
      get jsonData() {
        return x(L);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: ae,
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
        return x(Ne);
      },
      set displayPhase(w) {
        he(Ne, w, !0);
      }
    }),
    (w) => F = w,
    () => F
  ), Le(Ut), Le(Nt);
  var Jr = nt(Nt, 2);
  {
    var Zr = (w) => {
      var B = fp(), ee = _n(B), pe = Xe(ee);
      Le(ee);
      var we = nt(ee, 2), le = Xe(we);
      {
        var Fe = (He) => {
          var Qe = op(), Me = nt(_n(Qe));
          vi(Me, 17, () => te(i()), pi, (et, xe, tt) => {
            var Ie = ap(), ct = _n(Ie);
            let Pt;
            var Zn = Xe(ct, !0);
            Le(ct);
            var Rn = nt(ct, 2);
            {
              var _e = (Kt) => {
                var jt = ga(", ");
                Ue(Kt, jt);
              }, $r = /* @__PURE__ */ vn(() => tt < te(i()).length - 1);
              er(Rn, (Kt) => {
                x($r) && Kt(_e);
              });
            }
            Qt(
              (Kt) => {
                Pt = wa(ct, "", Pt, Kt), mn(Zn, x(xe));
              },
              [() => ({ color: ie()[x(xe)] })]
            ), Ue(et, Ie);
          }), Ue(He, Qe);
        }, Gt = /* @__PURE__ */ vn(() => te(i()).length > 0);
        er(le, (He) => {
          x(Gt) && He(Fe);
        });
      }
      var Mt = nt(le, 2);
      {
        var Cn = (He) => {
          var Qe = up(), Me = _n(Qe), et = nt(Me);
          vi(et, 17, () => ke(i()), pi, (xe, tt, Ie) => {
            var ct = lp(), Pt = _n(ct);
            let Zn;
            var Rn = Xe(Pt, !0);
            Le(Pt);
            var _e = nt(Pt, 2);
            {
              var $r = (jt) => {
                var ei = ga(", ");
                Ue(jt, ei);
              }, Kt = /* @__PURE__ */ vn(() => Ie < ke(i()).length - 1);
              er(_e, (jt) => {
                x(Kt) && jt($r);
              });
            }
            Qt(
              (jt) => {
                Zn = wa(Pt, "", Zn, jt), mn(Rn, x(tt));
              },
              [() => ({ color: ie()[x(tt)] })]
            ), Ue(xe, ct);
          }), Qt(() => mn(Me, `${x(d).caption ?? ""}: `)), Ue(He, Qe);
        }, pn = /* @__PURE__ */ vn(() => ke(i()).length > 0);
        er(Mt, (He) => {
          x(pn) && He(Cn);
        });
      }
      Le(we), Qt((He) => mn(pe, `${x(L).config.contest ?? ""}, ${He ?? ""} ${x(d).infinitive ?? ""}, Round ${i() ?? ""}.`), [O]), Ue(w, B);
    };
    er(Jr, (w) => {
      p() && w(Zr);
    });
  }
  Le(ge);
  var Jn = nt(ge, 2), kt = Xe(Jn), ji = Xe(kt, !0);
  Le(kt);
  var Qr = nt(kt, 2);
  vi(Qr, 17, () => x($), pi, (w, B) => {
    var ee = cp(), pe = _n(ee), we = Xe(pe, !0);
    Le(pe), us(2), Qt(() => mn(we, x(B))), Ue(w, ee);
  }), Le(Jn), gi(Jn, (w) => he(y, w), () => x(y));
  var dn = nt(Jn, 2), br = Xe(dn);
  return us(2), Le(dn), gi(dn, (w) => he(b, w), () => x(b)), Qt(
    (w) => {
      mn(ji, x(m)), mn(br, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [St]
  ), Ue(e, yt), Hi(Je);
}
customElements.define("pie-chart", Ys(
  pp,
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
