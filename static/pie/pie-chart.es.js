var Po = Object.defineProperty;
var sa = (e) => {
  throw TypeError(e);
};
var Do = (e, t, n) => t in e ? Po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => Do(e, typeof t != "symbol" ? t + "" : t, n), Qi = (e, t, n) => t.has(e) || sa("Cannot " + n);
var v = (e, t, n) => (Qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => t.has(e) ? sa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), F = (e, t, n, r) => (Qi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), be = (e, t, n) => (Qi(e, t, "access private method"), n);
var qa;
typeof window < "u" && ((qa = window.__svelte ?? (window.__svelte = {})).v ?? (qa.v = /* @__PURE__ */ new Set())).add("5");
const Io = 1, Fo = 2, za = 4, Oo = 8, Lo = 16, qo = 1, Vo = 4, Ho = 8, Yo = 16, zo = 1, Xo = 2, Ss = "[", Mi = "[!", Ns = "]", fr = {}, Te = Symbol(), Xa = "http://www.w3.org/1999/xhtml", as = !1;
var Ba = Array.isArray, Bo = Array.prototype.indexOf, cr = Array.prototype.includes, Pi = Array.from, yi = Object.keys, wi = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, Wo = Object.getOwnPropertyDescriptors, Uo = Object.prototype, Go = Array.prototype, Wa = Object.getPrototypeOf, aa = Object.isExtensible;
const Ko = () => {
};
function jo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ua() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function Jo(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ce = 2, Lr = 4, Di = 8, Ga = 1 << 24, fn = 16, xt = 32, bn = 64, Ka = 128, ft = 512, Ae = 1024, Se = 2048, wt = 4096, tt = 8192, an = 16384, yr = 32768, hr = 65536, la = 1 << 17, ja = 1 << 18, Wn = 1 << 19, Zo = 1 << 20, rn = 1 << 25, Yn = 65536, ls = 1 << 21, ks = 1 << 22, _n = 1 << 23, Ir = Symbol("$state"), Ja = Symbol("legacy props"), Qo = Symbol(""), Rn = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Va;
const eu = ((Va = globalThis.document) == null ? void 0 : /* @__PURE__ */ Va.contentType.includes("xml")) ?? !1, Kr = 3, wr = 8;
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
function lu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ou() {
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
function Ii(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function pu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let K = !1;
function sn(e) {
  K = e;
}
let z;
function Fe(e) {
  if (e === null)
    throw Ii(), fr;
  return z = e;
}
function Fi() {
  return Fe(/* @__PURE__ */ Ot(z));
}
function De(e) {
  if (K) {
    if (/* @__PURE__ */ Ot(z) !== null)
      throw Ii(), fr;
    z = e;
  }
}
function os(e = 1) {
  if (K) {
    for (var t = e, n = z; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(n);
    z = n;
  }
}
function xi(e = !0) {
  for (var t = 0, n = z; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ns) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ss || r === Mi || // "[1", "[2", etc. for if blocks
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
    throw Ii(), fr;
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
function el(e) {
  return !vu(e, this.v);
}
let gu = !1, rt = null;
function dr(e) {
  rt = e;
}
function Oi(e, t = !1, n) {
  rt = {
    p: rt,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Li(e) {
  var t = (
    /** @type {ComponentContext} */
    rt
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      El(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, rt = t.p, e ?? /** @type {T} */
  {};
}
function tl() {
  return !0;
}
let Cn = [];
function nl() {
  var e = Cn;
  Cn = [], jo(e);
}
function mn(e) {
  if (Cn.length === 0 && !Fr) {
    var t = Cn;
    queueMicrotask(() => {
      t === Cn && nl();
    });
  }
  Cn.push(e);
}
function _u() {
  for (; Cn.length > 0; )
    nl();
}
function rl(e) {
  var t = J;
  if (t === null)
    return Y.f |= _n, e;
  if ((t.f & yr) === 0 && (t.f & Lr) === 0)
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
function ge(e, t) {
  e.f = e.f & mu | t;
}
function Ms(e) {
  (e.f & ft) !== 0 || e.deps === null ? ge(e, Ae) : ge(e, wt);
}
function il(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ce) === 0 || (t.f & Yn) === 0 || (t.f ^= Yn, il(
        /** @type {Derived} */
        t.deps
      ));
}
function sl(e, t, n) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & wt) !== 0 && n.add(e), il(e.deps), ge(e, Ae);
}
const Qr = /* @__PURE__ */ new Set();
let G = null, Re = null, Be = [], qi = null, us = !1, Fr = !1;
var rr, ir, Mn, sr, Xr, Br, Pn, Zt, ar, Ft, fs, cs, al;
const js = class js {
  constructor() {
    L(this, Ft);
    pe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, Mn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    L(this, sr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, Xr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, Br, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, Pn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, Zt, /* @__PURE__ */ new Map());
    pe(this, "is_fork", !1);
    L(this, ar, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, sr) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, Zt).has(t) || v(this, Zt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = v(this, Zt).get(t);
    if (n) {
      v(this, Zt).delete(t);
      for (var r of n.d)
        ge(r, Se), mt(r);
      for (r of n.m)
        ge(r, wt), mt(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Be = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      be(this, Ft, fs).call(this, s, n, r);
    if (this.is_deferred()) {
      be(this, Ft, cs).call(this, r), be(this, Ft, cs).call(this, n);
      for (const [s, a] of v(this, Zt))
        fl(s, a);
    } else {
      for (const s of v(this, rr)) s();
      v(this, rr).clear(), v(this, Mn) === 0 && be(this, Ft, al).call(this), G = null, oa(r), oa(n), (i = v(this, Xr)) == null || i.resolve();
    }
    Re = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Te && !this.previous.has(t) && this.previous.set(t, n), (t.f & _n) === 0 && (this.current.set(t, t.v), Re == null || Re.set(t, t.v));
  }
  activate() {
    G = this, this.apply();
  }
  deactivate() {
    G === this && (G = null, Re = null);
  }
  flush() {
    if (this.activate(), Be.length > 0) {
      if (ll(), G !== null && G !== this)
        return;
    } else v(this, Mn) === 0 && this.process([]);
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
    F(this, Mn, v(this, Mn) + 1), t && F(this, sr, v(this, sr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    F(this, Mn, v(this, Mn) - 1), t && F(this, sr, v(this, sr) - 1), !v(this, ar) && (F(this, ar, !0), mn(() => {
      F(this, ar, !1), this.is_deferred() ? Be.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, Br))
      v(this, Pn).delete(t), ge(t, Se), mt(t);
    for (const t of v(this, Pn))
      ge(t, wt), mt(t);
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
    return (v(this, Xr) ?? F(this, Xr, Ua())).promise;
  }
  static ensure() {
    if (G === null) {
      const t = G = new js();
      Qr.add(G), Fr || mn(() => {
        G === t && t.flush();
      });
    }
    return G;
  }
  apply() {
  }
};
rr = new WeakMap(), ir = new WeakMap(), Mn = new WeakMap(), sr = new WeakMap(), Xr = new WeakMap(), Br = new WeakMap(), Pn = new WeakMap(), Zt = new WeakMap(), ar = new WeakMap(), Ft = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
fs = function(t, n, r) {
  t.f ^= Ae;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, l = (a & (xt | bn)) !== 0, o = l && (a & Ae) !== 0, u = o || (a & tt) !== 0 || v(this, Zt).has(i);
    if (!u && i.fn !== null) {
      l ? i.f ^= Ae : s !== null && (a & (Lr | Di | Ga)) !== 0 ? s.b.defer_effect(i) : (a & Lr) !== 0 ? n.push(i) : jr(i) && ((a & fn) !== 0 && v(this, Pn).add(i), gr(i));
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
cs = function(t) {
  for (var n = 0; n < t.length; n += 1)
    sl(t[n], v(this, Br), v(this, Pn));
}, al = function() {
  var i;
  if (Qr.size > 1) {
    this.previous.clear();
    var t = Re, n = !0;
    for (const s of Qr) {
      if (s === this) {
        n = !1;
        continue;
      }
      const a = [];
      for (const [o, u] of this.current) {
        if (s.current.has(o))
          if (n && u !== s.current.get(o))
            s.current.set(o, u);
          else
            continue;
        a.push(o);
      }
      if (a.length === 0)
        continue;
      const l = [...s.current.keys()].filter((o) => !this.current.has(o));
      if (l.length > 0) {
        var r = Be;
        Be = [];
        const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          ol(f, l, o, u);
        if (Be.length > 0) {
          G = s, s.apply();
          for (const f of Be)
            be(i = s, Ft, fs).call(i, f, [], []);
          s.deactivate();
        }
        Be = r;
      }
    }
    G = null, Re = t;
  }
  this.committed = !0, Qr.delete(this);
};
let ln = js;
function se(e) {
  var t = Fr;
  Fr = !0;
  try {
    for (var n; ; ) {
      if (_u(), Be.length === 0 && (G == null || G.flush(), Be.length === 0))
        return qi = null, /** @type {T} */
        n;
      ll();
    }
  } finally {
    Fr = t;
  }
}
function ll() {
  us = !0;
  var e = null;
  try {
    for (var t = 0; Be.length > 0; ) {
      var n = ln.ensure();
      if (t++ > 1e3) {
        var r, i;
        yu();
      }
      n.process(Be), yn.clear();
    }
  } finally {
    Be = [], us = !1, qi = null;
  }
}
function yu() {
  try {
    lu();
  } catch (e) {
    pr(e, qi);
  }
}
let vt = null;
function oa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (an | tt)) === 0 && jr(r) && (vt = /* @__PURE__ */ new Set(), gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Cl(r), (vt == null ? void 0 : vt.size) > 0)) {
        yn.clear();
        for (const i of vt) {
          if ((i.f & (an | tt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            vt.has(a) && (vt.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (an | tt)) === 0 && gr(o);
          }
        }
        vt.clear();
      }
    }
    vt = null;
  }
}
function ol(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Ce) !== 0 ? ol(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (ks | fn)) !== 0 && (s & Se) === 0 && ul(i, t, r) && (ge(i, Se), mt(
        /** @type {Effect} */
        i
      ));
    }
}
function ul(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (cr.call(t, i))
        return !0;
      if ((i.f & Ce) !== 0 && ul(
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
function mt(e) {
  for (var t = qi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (us && t === J && (n & fn) !== 0 && (n & ja) === 0)
      return;
    if ((n & (bn | xt)) !== 0) {
      if ((n & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  Be.push(t);
}
function fl(e, t) {
  if (!((e.f & xt) !== 0 && (e.f & Ae) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & wt) !== 0 && t.m.push(e), ge(e, Ae);
    for (var n = e.first; n !== null; )
      fl(n, t), n = n.next;
  }
}
function wu(e) {
  let t = 0, n = zn(0), r;
  return () => {
    Is() && (b(n), Os(() => (t === 0 && (r = Yi(() => e(() => Or(n)))), t += 1, () => {
      mn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Or(n));
      });
    })));
  };
}
var xu = hr | Wn | Ka;
function bu(e, t, n) {
  new $u(e, t, n);
}
var Qe, Wr, St, Dn, Nt, lt, ze, kt, Qt, gn, In, en, lr, Fn, or, ur, tn, Ni, ye, cl, hl, hs, li, oi, ds;
class $u {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    L(this, ye);
    /** @type {Boundary | null} */
    pe(this, "parent");
    pe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, Qe);
    /** @type {TemplateNode | null} */
    L(this, Wr, K ? z : null);
    /** @type {BoundaryProps} */
    L(this, St);
    /** @type {((anchor: Node) => void)} */
    L(this, Dn);
    /** @type {Effect} */
    L(this, Nt);
    /** @type {Effect | null} */
    L(this, lt, null);
    /** @type {Effect | null} */
    L(this, ze, null);
    /** @type {Effect | null} */
    L(this, kt, null);
    /** @type {DocumentFragment | null} */
    L(this, Qt, null);
    /** @type {TemplateNode | null} */
    L(this, gn, null);
    L(this, In, 0);
    L(this, en, 0);
    L(this, lr, !1);
    L(this, Fn, !1);
    /** @type {Set<Effect>} */
    L(this, or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, tn, null);
    L(this, Ni, wu(() => (F(this, tn, zn(v(this, In))), () => {
      F(this, tn, null);
    })));
    F(this, Qe, t), F(this, St, n), F(this, Dn, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, St).pending, F(this, Nt, Ls(() => {
      if (J.b = this, K) {
        const s = v(this, Wr);
        Fi(), /** @type {Comment} */
        s.nodeType === wr && /** @type {Comment} */
        s.data === Mi ? be(this, ye, hl).call(this) : (be(this, ye, cl).call(this), v(this, en) === 0 && (this.is_pending = !1));
      } else {
        var i = be(this, ye, hs).call(this);
        try {
          F(this, lt, ut(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, en) > 0 ? be(this, ye, oi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, gn)) == null || s.remove();
      };
    }, xu)), K && F(this, Qe, z);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    sl(t, v(this, or), v(this, ur));
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
    be(this, ye, ds).call(this, t), F(this, In, v(this, In) + t), !(!v(this, tn) || v(this, lr)) && (F(this, lr, !0), mn(() => {
      F(this, lr, !1), v(this, tn) && vr(v(this, tn), v(this, In));
    }));
  }
  get_effect_pending() {
    return v(this, Ni).call(this), b(
      /** @type {Source<number>} */
      v(this, tn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, St).onerror;
    let r = v(this, St).failed;
    if (v(this, Fn) || !n && !r)
      throw t;
    v(this, lt) && (Oe(v(this, lt)), F(this, lt, null)), v(this, ze) && (Oe(v(this, ze)), F(this, ze, null)), v(this, kt) && (Oe(v(this, kt)), F(this, kt, null)), K && (Fe(
      /** @type {TemplateNode} */
      v(this, Wr)
    ), os(), Fe(xi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        pu();
        return;
      }
      i = !0, s && du(), ln.ensure(), F(this, In, 0), v(this, kt) !== null && qn(v(this, kt), () => {
        F(this, kt, null);
      }), this.is_pending = this.has_pending_snippet(), F(this, lt, be(this, ye, li).call(this, () => (F(this, Fn, !1), ut(() => v(this, Dn).call(this, v(this, Qe)))))), v(this, en) > 0 ? be(this, ye, oi).call(this) : this.is_pending = !1;
    };
    mn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (l) {
        pr(l, v(this, Nt) && v(this, Nt).parent);
      }
      r && F(this, kt, be(this, ye, li).call(this, () => {
        ln.ensure(), F(this, Fn, !0);
        try {
          return ut(() => {
            r(
              v(this, Qe),
              () => t,
              () => a
            );
          });
        } catch (l) {
          return pr(
            l,
            /** @type {Effect} */
            v(this, Nt).parent
          ), null;
        } finally {
          F(this, Fn, !1);
        }
      }));
    });
  }
}
Qe = new WeakMap(), Wr = new WeakMap(), St = new WeakMap(), Dn = new WeakMap(), Nt = new WeakMap(), lt = new WeakMap(), ze = new WeakMap(), kt = new WeakMap(), Qt = new WeakMap(), gn = new WeakMap(), In = new WeakMap(), en = new WeakMap(), lr = new WeakMap(), Fn = new WeakMap(), or = new WeakMap(), ur = new WeakMap(), tn = new WeakMap(), Ni = new WeakMap(), ye = new WeakSet(), cl = function() {
  try {
    F(this, lt, ut(() => v(this, Dn).call(this, v(this, Qe))));
  } catch (t) {
    this.error(t);
  }
}, hl = function() {
  const t = v(this, St).pending;
  t && (F(this, ze, ut(() => t(v(this, Qe)))), mn(() => {
    var n = be(this, ye, hs).call(this);
    F(this, lt, be(this, ye, li).call(this, () => (ln.ensure(), ut(() => v(this, Dn).call(this, n))))), v(this, en) > 0 ? be(this, ye, oi).call(this) : (qn(
      /** @type {Effect} */
      v(this, ze),
      () => {
        F(this, ze, null);
      }
    ), this.is_pending = !1);
  }));
}, hs = function() {
  var t = v(this, Qe);
  return this.is_pending && (F(this, gn, nt()), v(this, Qe).before(v(this, gn)), t = v(this, gn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
li = function(t) {
  var n = J, r = Y, i = rt;
  It(v(this, Nt)), ht(v(this, Nt)), dr(v(this, Nt).ctx);
  try {
    return t();
  } catch (s) {
    return rl(s), null;
  } finally {
    It(n), ht(r), dr(i);
  }
}, oi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, St).pending
  );
  v(this, lt) !== null && (F(this, Qt, document.createDocumentFragment()), v(this, Qt).append(
    /** @type {TemplateNode} */
    v(this, gn)
  ), kl(v(this, lt), v(this, Qt))), v(this, ze) === null && F(this, ze, ut(() => t(v(this, Qe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ds = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && be(n = this.parent, ye, ds).call(n, t);
    return;
  }
  if (F(this, en, v(this, en) + t), v(this, en) === 0) {
    this.is_pending = !1;
    for (const r of v(this, or))
      ge(r, Se), mt(r);
    for (const r of v(this, ur))
      ge(r, wt), mt(r);
    v(this, or).clear(), v(this, ur).clear(), v(this, ze) && qn(v(this, ze), () => {
      F(this, ze, null);
    }), v(this, Qt) && (v(this, Qe).before(v(this, Qt)), F(this, Qt, null));
  }
};
function Au(e, t, n, r) {
  const i = Vi;
  var s = e.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = G, l = (
    /** @type {Effect} */
    J
  ), o = Eu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    o();
    try {
      r(c);
    } catch (p) {
      (l.f & an) === 0 && pr(p, l);
    }
    a == null || a.deactivate(), ps();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function h() {
    o(), Promise.all(n.map((c) => /* @__PURE__ */ Tu(c))).then((c) => f([...t.map(i), ...c])).catch((c) => pr(c, l));
  }
  u ? u.then(h) : h();
}
function Eu() {
  var e = J, t = Y, n = rt, r = G;
  return function(s = !0) {
    It(e), ht(t), dr(n), s && (r == null || r.activate());
  };
}
function ps() {
  It(null), ht(null), dr(null);
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  var t = Ce | Se, n = Y !== null && (Y.f & Ce) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return J !== null && (J.f |= Wn), {
    ctx: rt,
    deps: null,
    effects: null,
    equals: Qa,
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
function Tu(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    J
  );
  r === null && nu();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = zn(
    /** @type {V} */
    Te
  ), l = !Y, o = /* @__PURE__ */ new Map();
  return Fu(() => {
    var p;
    var u = Ua();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === G && f.committed && f.deactivate(), ps();
      });
    } catch (m) {
      u.reject(m), ps();
    }
    var f = (
      /** @type {Batch} */
      G
    );
    if (l) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = o.get(f)) == null || p.reject(Rn), o.delete(f), o.set(f, u);
    }
    const c = (m, $ = void 0) => {
      if (f.activate(), $)
        $ !== Rn && (a.f |= _n, vr(a, $));
      else {
        (a.f & _n) !== 0 && (a.f ^= _n), vr(a, m);
        for (const [_, x] of o) {
          if (o.delete(_), _ === f) break;
          x.reject(Rn);
        }
      }
      l && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (m) => c(null, m || "unknown"));
  }), Pu(() => {
    for (const u of o.values())
      u.reject(Rn);
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
function hn(e) {
  const t = /* @__PURE__ */ Vi(e);
  return Ml(t), t;
}
// @__NO_SIDE_EFFECTS__
function dl(e) {
  const t = /* @__PURE__ */ Vi(e);
  return t.equals = el, t;
}
function Ru(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Oe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Cu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ce) === 0)
      return (t.f & an) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ps(e) {
  var t, n = J;
  It(Cu(e));
  try {
    e.f &= ~Yn, Ru(e), t = Fl(e);
  } finally {
    It(n);
  }
  return t;
}
function pl(e) {
  var t = Ps(e);
  if (!e.equals(t) && (e.wv = Dl(), (!(G != null && G.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    ge(e, Ae);
    return;
  }
  xn || (Re !== null ? (Is() || G != null && G.is_fork) && Re.set(e, t) : Ms(e));
}
function Su(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Rn), r.teardown = Ko, r.ac = null, qr(r, 0), qs(r));
}
function vl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && gr(t);
}
let vs = /* @__PURE__ */ new Set();
const yn = /* @__PURE__ */ new Map();
let gl = !1;
function zn(e, t) {
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
function $e(e, t) {
  const n = zn(e);
  return Ml(n), n;
}
// @__NO_SIDE_EFFECTS__
function _l(e, t = !1, n = !0) {
  const r = zn(e);
  return t || (r.equals = el), r;
}
function ve(e, t, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || (Y.f & la) !== 0) && tl() && (Y.f & (Ce | fn | ks | la)) !== 0 && (ct === null || !cr.call(ct, e)) && hu();
  let r = n ? Sn(t) : t;
  return vr(e, r);
}
function vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    xn ? yn.set(e, t) : yn.set(e, n), e.v = t;
    var r = ln.ensure();
    if (r.capture(e, n), (e.f & Ce) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && Ps(i), Ms(i);
    }
    e.wv = Dl(), ml(e, Se), J !== null && (J.f & Ae) !== 0 && (J.f & (xt | bn)) === 0 && (at === null ? qu([e]) : at.push(e)), !r.is_fork && vs.size > 0 && !gl && Nu();
  }
  return t;
}
function Nu() {
  gl = !1;
  for (const e of vs)
    (e.f & Ae) !== 0 && ge(e, wt), jr(e) && gr(e);
  vs.clear();
}
function Or(e) {
  ve(e, e.v + 1);
}
function ml(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, l = (a & Se) === 0;
      if (l && ge(s, t), (a & Ce) !== 0) {
        var o = (
          /** @type {Derived} */
          s
        );
        Re == null || Re.delete(o), (a & Yn) === 0 && (a & ft && (s.f |= Yn), ml(o, wt));
      } else l && ((a & fn) !== 0 && vt !== null && vt.add(
        /** @type {Effect} */
        s
      ), mt(
        /** @type {Effect} */
        s
      ));
    }
}
function Sn(e) {
  if (typeof e != "object" || e === null || Ir in e)
    return e;
  const t = Wa(e);
  if (t !== Uo && t !== Go)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ba(e), i = /* @__PURE__ */ $e(0), s = Vn, a = (l) => {
    if (Vn === s)
      return l();
    var o = Y, u = Vn;
    ht(null), ca(s);
    var f = l();
    return ht(o), ca(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fu();
        var f = n.get(o);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ $e(u.value);
          return n.set(o, h), h;
        }) : ve(f, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in l) {
            const f = a(() => /* @__PURE__ */ $e(Te));
            n.set(o, f), Or(i);
          }
        } else
          ve(u, Te), Or(i);
        return !0;
      },
      get(l, o, u) {
        var p;
        if (o === Ir)
          return e;
        var f = n.get(o), h = o in l;
        if (f === void 0 && (!h || (p = Ln(l, o)) != null && p.writable) && (f = a(() => {
          var m = Sn(h ? l[o] : Te), $ = /* @__PURE__ */ $e(m);
          return $;
        }), n.set(o, f)), f !== void 0) {
          var c = b(f);
          return c === Te ? void 0 : c;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var f = n.get(o);
          f && (u.value = b(f));
        } else if (u === void 0) {
          var h = n.get(o), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== Te)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        var c;
        if (o === Ir)
          return !0;
        var u = n.get(o), f = u !== void 0 && u.v !== Te || Reflect.has(l, o);
        if (u !== void 0 || J !== null && (!f || (c = Ln(l, o)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? Sn(l[o]) : Te, m = /* @__PURE__ */ $e(p);
            return m;
          }), n.set(o, u));
          var h = b(u);
          if (h === Te)
            return !1;
        }
        return f;
      },
      set(l, o, u, f) {
        var C;
        var h = n.get(o), c = o in l;
        if (r && o === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var m = n.get(p + "");
            m !== void 0 ? ve(m, Te) : p in l && (m = a(() => /* @__PURE__ */ $e(Te)), n.set(p + "", m));
          }
        if (h === void 0)
          (!c || (C = Ln(l, o)) != null && C.writable) && (h = a(() => /* @__PURE__ */ $e(void 0)), ve(h, Sn(u)), n.set(o, h));
        else {
          c = h.v !== Te;
          var $ = a(() => Sn(u));
          ve(h, $);
        }
        var _ = Reflect.getOwnPropertyDescriptor(l, o);
        if (_ != null && _.set && _.set.call(f, u), !c) {
          if (r && typeof o == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(o);
            Number.isInteger(D) && D >= x.v && ve(x, D + 1);
          }
          Or(i);
        }
        return !0;
      },
      ownKeys(l) {
        b(i);
        var o = Reflect.ownKeys(l).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== Te;
        });
        for (var [u, f] of n)
          f.v !== Te && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        cu();
      }
    }
  );
}
var ua, yl, wl, xl;
function gs() {
  if (ua === void 0) {
    ua = window, yl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    wl = Ln(t, "firstChild").get, xl = Ln(t, "nextSibling").get, aa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), aa(n) && (n.__t = void 0);
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return (
    /** @type {TemplateNode | null} */
    wl.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return (
    /** @type {TemplateNode | null} */
    xl.call(e)
  );
}
function Ye(e, t) {
  if (!K)
    return /* @__PURE__ */ on(e);
  var n = /* @__PURE__ */ on(z);
  if (n === null)
    n = z.appendChild(nt());
  else if (t && n.nodeType !== Kr) {
    var r = nt();
    return n == null || n.before(r), Fe(r), r;
  }
  return t && Hi(
    /** @type {Text} */
    n
  ), Fe(n), n;
}
function pn(e, t = !1) {
  if (!K) {
    var n = /* @__PURE__ */ on(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ot(n) : n;
  }
  if (t) {
    if ((z == null ? void 0 : z.nodeType) !== Kr) {
      var r = nt();
      return z == null || z.before(r), Fe(r), r;
    }
    Hi(
      /** @type {Text} */
      z
    );
  }
  return z;
}
function Je(e, t = 1, n = !1) {
  let r = K ? z : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ot(r);
  if (!K)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Kr) {
      var s = nt();
      return r === null ? i == null || i.after(s) : r.before(s), Fe(s), s;
    }
    Hi(
      /** @type {Text} */
      r
    );
  }
  return Fe(r), r;
}
function bl(e) {
  e.textContent = "";
}
function $l() {
  return !1;
}
function Ds(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Xa, e, void 0)
  );
}
function Hi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Kr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Al(e) {
  var t = Y, n = J;
  ht(null), It(null);
  try {
    return e();
  } finally {
    ht(t), It(n);
  }
}
function ku(e) {
  J === null && (Y === null && au(), su()), xn && iu();
}
function Mu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lt(e, t, n) {
  var r = J;
  r !== null && (r.f & tt) !== 0 && (e |= tt);
  var i = {
    ctx: rt,
    deps: null,
    nodes: null,
    f: e | Se | ft,
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
    } catch (l) {
      throw Oe(i), l;
    }
  else t !== null && mt(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Wn) === 0 && (s = s.first, (e & fn) !== 0 && (e & hr) !== 0 && s !== null && (s.f |= hr)), s !== null && (s.parent = r, r !== null && Mu(s, r), Y !== null && (Y.f & Ce) !== 0 && (e & bn) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Is() {
  return Y !== null && !yt;
}
function Pu(e) {
  const t = Lt(Di, null, !1);
  return ge(t, Ae), t.teardown = e, t;
}
function Fs(e) {
  ku();
  var t = (
    /** @type {Effect} */
    J.f
  ), n = !Y && (t & xt) !== 0 && (t & yr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      rt
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return El(e);
}
function El(e) {
  return Lt(Lr | Zo, e, !1);
}
function Du(e) {
  ln.ensure();
  const t = Lt(bn | Wn, e, !0);
  return () => {
    Oe(t);
  };
}
function Iu(e) {
  ln.ensure();
  const t = Lt(bn | Wn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? qn(t, () => {
      Oe(t), r(void 0);
    }) : (Oe(t), r(void 0));
  });
}
function Tl(e) {
  return Lt(Lr, e, !1);
}
function Fu(e) {
  return Lt(ks | Wn, e, !0);
}
function Os(e, t = 0) {
  return Lt(Di | t, e, !0);
}
function Jt(e, t = [], n = [], r = []) {
  Au(r, t, n, (i) => {
    Lt(Di, () => e(...i.map(b)), !0);
  });
}
function Ls(e, t = 0) {
  var n = Lt(fn | t, e, !0);
  return n;
}
function ut(e) {
  return Lt(xt | Wn, e, !0);
}
function Rl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = xn, r = Y;
    fa(!0), ht(null);
    try {
      t.call(null);
    } finally {
      fa(n), ht(r);
    }
  }
}
function qs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Al(() => {
      i.abort(Rn);
    });
    var r = n.next;
    (n.f & bn) !== 0 ? n.parent = null : Oe(n, t), n = r;
  }
}
function Ou(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & xt) === 0 && Oe(t), t = n;
  }
}
function Oe(e, t = !0) {
  var n = !1;
  (t || (e.f & ja) !== 0) && e.nodes !== null && e.nodes.end !== null && (Lu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), qs(e, t && !n), qr(e, 0), ge(e, an);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Rl(e);
  var i = e.parent;
  i !== null && i.first !== null && Cl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Lu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ot(e);
    e.remove(), e = n;
  }
}
function Cl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qn(e, t, n = !0) {
  var r = [];
  Sl(e, r, !0);
  var i = () => {
    n && Oe(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of r)
      l.out(a);
  } else
    i();
}
function Sl(e, t, n) {
  if ((e.f & tt) === 0) {
    e.f ^= tt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xt) !== 0 && (e.f & fn) !== 0;
      Sl(i, t, a ? n : !1), i = s;
    }
  }
}
function Vs(e) {
  Nl(e, !0);
}
function Nl(e, t) {
  if ((e.f & tt) !== 0) {
    e.f ^= tt, (e.f & Ae) === 0 && (ge(e, Se), mt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & xt) !== 0;
      Nl(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function kl(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ot(n);
      t.append(n), n = i;
    }
}
let ui = !1, xn = !1;
function fa(e) {
  xn = e;
}
let Y = null, yt = !1;
function ht(e) {
  Y = e;
}
let J = null;
function It(e) {
  J = e;
}
let ct = null;
function Ml(e) {
  Y !== null && (ct === null ? ct = [e] : ct.push(e));
}
let We = null, Ze = 0, at = null;
function qu(e) {
  at = e;
}
let Pl = 1, Nn = 0, Vn = Nn;
function ca(e) {
  Vn = e;
}
function Dl() {
  return ++Pl;
}
function jr(e) {
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if (t & Ce && (e.f &= ~Yn), (t & wt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (jr(
        /** @type {Derived} */
        s
      ) && pl(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ft) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Re === null && ge(e, Ae);
  }
  return !1;
}
function Il(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ct !== null && cr.call(ct, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Ce) !== 0 ? Il(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? ge(s, Se) : (s.f & Ae) !== 0 && ge(s, wt), mt(
        /** @type {Effect} */
        s
      ));
    }
}
function Fl(e) {
  var $;
  var t = We, n = Ze, r = at, i = Y, s = ct, a = rt, l = yt, o = Vn, u = e.f;
  We = /** @type {null | Value[]} */
  null, Ze = 0, at = null, Y = (u & (xt | bn)) === 0 ? e : null, ct = null, dr(e.ctx), yt = !1, Vn = ++Nn, e.ac !== null && (Al(() => {
    e.ac.abort(Rn);
  }), e.ac = null);
  try {
    e.f |= ls;
    var f = (
      /** @type {Function} */
      e.fn
    ), h = f();
    e.f |= yr;
    var c = e.deps, p = G == null ? void 0 : G.is_fork;
    if (We !== null) {
      var m;
      if (p || qr(e, Ze), c !== null && Ze > 0)
        for (c.length = Ze + We.length, m = 0; m < We.length; m++)
          c[Ze + m] = We[m];
      else
        e.deps = c = We;
      if (Is() && (e.f & ft) !== 0)
        for (m = Ze; m < c.length; m++)
          (($ = c[m]).reactions ?? ($.reactions = [])).push(e);
    } else !p && c !== null && Ze < c.length && (qr(e, Ze), c.length = Ze);
    if (tl() && at !== null && !yt && c !== null && (e.f & (Ce | wt | Se)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      at.length; m++)
        Il(
          at[m],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Nn++, i.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          i.deps[_].rv = Nn;
      if (t !== null)
        for (const _ of t)
          _.rv = Nn;
      at !== null && (r === null ? r = at : r.push(.../** @type {Source[]} */
      at));
    }
    return (e.f & _n) !== 0 && (e.f ^= _n), h;
  } catch (_) {
    return rl(_);
  } finally {
    e.f ^= ls, We = t, Ze = n, at = r, Y = i, ct = s, dr(a), yt = l, Vn = o;
  }
}
function Vu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bo.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !cr.call(We, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ft) !== 0 && (s.f ^= ft, s.f &= ~Yn), Ms(s), Su(s), qr(s, 0);
  }
}
function qr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Vu(e, n[r]);
}
function gr(e) {
  var t = e.f;
  if ((t & an) === 0) {
    ge(e, Ae);
    var n = J, r = ui;
    J = e, ui = !0;
    try {
      (t & (fn | Ga)) !== 0 ? Ou(e) : qs(e), Rl(e);
      var i = Fl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Pl;
      var s;
      as && gu && (e.f & Se) !== 0 && e.deps;
    } finally {
      ui = r, J = n;
    }
  }
}
function b(e) {
  var t = e.f, n = (t & Ce) !== 0;
  if (Y !== null && !yt) {
    var r = J !== null && (J.f & an) !== 0;
    if (!r && (ct === null || !cr.call(ct, e))) {
      var i = Y.deps;
      if ((Y.f & ls) !== 0)
        e.rv < Nn && (e.rv = Nn, We === null && i !== null && i[Ze] === e ? Ze++ : We === null ? We = [e] : We.push(e));
      else {
        (Y.deps ?? (Y.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [Y] : cr.call(s, Y) || s.push(Y);
      }
    }
  }
  if (xn && yn.has(e))
    return yn.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (xn) {
      var l = a.v;
      return ((a.f & Ae) === 0 && a.reactions !== null || Ll(a)) && (l = Ps(a)), yn.set(a, l), l;
    }
    var o = (a.f & ft) === 0 && !yt && Y !== null && (ui || (Y.f & ft) !== 0), u = (a.f & yr) === 0;
    jr(a) && (o && (a.f |= ft), pl(a)), o && !u && (vl(a), Ol(a));
  }
  if (Re != null && Re.has(e))
    return Re.get(e);
  if ((e.f & _n) !== 0)
    throw e.v;
  return e.v;
}
function Ol(e) {
  if (e.f |= ft, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ce) !== 0 && (t.f & ft) === 0 && (vl(
        /** @type {Derived} */
        t
      ), Ol(
        /** @type {Derived} */
        t
      ));
}
function Ll(e) {
  if (e.v === Te) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (yn.has(t) || (t.f & Ce) !== 0 && Ll(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Yi(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const ql = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set();
function Hu(e) {
  for (var t = 0; t < e.length; t++)
    ql.add(e[t]);
  for (var n of _s)
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
  var a = 0, l = ha === e && e.__root;
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    wi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, h = J;
    ht(null), It(null);
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
      e.__root = t, delete e.currentTarget, ht(f), It(h);
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
function Yu(e) {
  return (
    /** @type {string} */
    (es == null ? void 0 : es.createHTML(e)) ?? e
  );
}
function Vl(e, t = !1) {
  var n = Ds("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? Yu(e) : e, n.content;
}
function wn(e, t) {
  var n = (
    /** @type {Effect} */
    J
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  var n = (t & zo) !== 0, r = (t & Xo) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (K)
      return wn(z, null), z;
    i === void 0 && (i = Vl(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ on(i)));
    var a = (
      /** @type {TemplateNode} */
      r || yl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ on(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      wn(l, o);
    } else
      wn(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function zu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (K)
      return wn(z, null), z;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Vl(i, !0)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ on(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ on(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return wn(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function Xu(e, t) {
  return /* @__PURE__ */ zu(e, t, "svg");
}
function pa(e = "") {
  if (!K) {
    var t = nt(e + "");
    return wn(t, t), t;
  }
  var n = z;
  return n.nodeType !== Kr ? (n.before(n = nt()), Fe(n)) : Hi(
    /** @type {Text} */
    n
  ), wn(n, n), n;
}
function Xe(e, t) {
  if (K) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & yr) === 0 || n.nodes.end === null) && (n.nodes.end = z), Fi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Bu = ["touchstart", "touchmove"];
function Wu(e) {
  return Bu.includes(e);
}
function vn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Hl(e, t) {
  return Yl(e, t);
}
function Uu(e, t) {
  gs(), t.intro = t.intro ?? !1;
  const n = t.target, r = K, i = z;
  try {
    for (var s = /* @__PURE__ */ on(n); s && (s.nodeType !== wr || /** @type {Comment} */
    s.data !== Ss); )
      s = /* @__PURE__ */ Ot(s);
    if (!s)
      throw fr;
    sn(!0), Fe(
      /** @type {Comment} */
      s
    );
    const a = Yl(e, { ...t, anchor: s });
    return sn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== fr && console.warn("Failed to hydrate: ", a), t.recover === !1 && ou(), gs(), bl(n), sn(!1), Hl(e, t);
  } finally {
    sn(r), Fe(i);
  }
}
const ei = /* @__PURE__ */ new Map();
function Yl(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  gs();
  var l = /* @__PURE__ */ new Set(), o = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!l.has(p)) {
        l.add(p);
        var m = Wu(p);
        for (const x of [t, document]) {
          var $ = ei.get(x);
          $ === void 0 && ($ = /* @__PURE__ */ new Map(), ei.set(x, $));
          var _ = $.get(p);
          _ === void 0 ? (x.addEventListener(p, da, { passive: m }), $.set(p, 1)) : $.set(p, _ + 1);
        }
      }
    }
  };
  o(Pi(ql)), _s.add(o);
  var u = void 0, f = Iu(() => {
    var h = n ?? t.appendChild(nt());
    return bu(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Oi({});
        var p = (
          /** @type {ComponentContext} */
          rt
        );
        if (s && (p.c = s), i && (r.$$events = i), K && wn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, K && (J.nodes.end = z, z === null || z.nodeType !== wr || /** @type {Comment} */
        z.data !== Ns))
          throw Ii(), fr;
        Li();
      }
    ), () => {
      var $;
      for (var c of l)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ei.get(_)
          ), m = (
            /** @type {number} */
            p.get(c)
          );
          --m == 0 ? (_.removeEventListener(c, da), p.delete(c), p.size === 0 && ei.delete(_)) : p.set(c, m);
        }
      _s.delete(o), h !== n && (($ = h.parentNode) == null || $.removeChild(h));
    };
  });
  return ms.set(u, f), u;
}
let ms = /* @__PURE__ */ new WeakMap();
function Gu(e, t) {
  const n = ms.get(e);
  return n ? (ms.delete(e), n(t)) : Promise.resolve();
}
var gt, Mt, et, On, Ur, Gr, ki;
class Ku {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, gt, /* @__PURE__ */ new Map());
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
    L(this, Mt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, et, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, On, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Ur, !0);
    L(this, Gr, () => {
      var t = (
        /** @type {Batch} */
        G
      );
      if (v(this, gt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, gt).get(t)
        ), r = v(this, Mt).get(n);
        if (r)
          Vs(r), v(this, On).delete(n);
        else {
          var i = v(this, et).get(n);
          i && (v(this, Mt).set(n, i.effect), v(this, et).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, gt)) {
          if (v(this, gt).delete(s), s === t)
            break;
          const l = v(this, et).get(a);
          l && (Oe(l.effect), v(this, et).delete(a));
        }
        for (const [s, a] of v(this, Mt)) {
          if (s === n || v(this, On).has(s)) continue;
          const l = () => {
            if (Array.from(v(this, gt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              kl(a, u), u.append(nt()), v(this, et).set(s, { effect: a, fragment: u });
            } else
              Oe(a);
            v(this, On).delete(s), v(this, Mt).delete(s);
          };
          v(this, Ur) || !r ? (v(this, On).add(s), qn(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, ki, (t) => {
      v(this, gt).delete(t);
      const n = Array.from(v(this, gt).values());
      for (const [r, i] of v(this, et))
        n.includes(r) || (Oe(i.effect), v(this, et).delete(r));
    });
    this.anchor = t, F(this, Ur, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      G
    ), i = $l();
    if (n && !v(this, Mt).has(t) && !v(this, et).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = nt();
        s.append(a), v(this, et).set(t, {
          effect: ut(() => n(a)),
          fragment: s
        });
      } else
        v(this, Mt).set(
          t,
          ut(() => n(this.anchor))
        );
    if (v(this, gt).set(r, t), i) {
      for (const [l, o] of v(this, Mt))
        l === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [l, o] of v(this, et))
        l === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(v(this, Gr)), r.ondiscard(v(this, ki));
    } else
      K && (this.anchor = z), v(this, Gr).call(this);
  }
}
gt = new WeakMap(), Mt = new WeakMap(), et = new WeakMap(), On = new WeakMap(), Ur = new WeakMap(), Gr = new WeakMap(), ki = new WeakMap();
function ju(e) {
  rt === null && tu(), Fs(() => {
    const t = Yi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function er(e, t, n = !1) {
  K && Fi();
  var r = new Ku(e), i = n ? hr : 0;
  function s(a, l) {
    if (K) {
      const f = Za(e);
      var o;
      if (f === Ss ? o = 0 : f === Mi ? o = !1 : o = parseInt(f.substring(1)), a !== o) {
        var u = xi();
        Fe(u), r.anchor = u, sn(!1), r.ensure(a, l), sn(!0);
        return;
      }
    }
    r.ensure(a, l);
  }
  Ls(() => {
    var a = !1;
    t((l, o = 0) => {
      a = !0, s(o, l);
    }), a || s(!1, null);
  }, i);
}
function fi(e, t) {
  return t;
}
function Ju(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let h = t[l];
    qn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ys(Pi(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        n
      ), f = (
        /** @type {Element} */
        u.parentNode
      );
      bl(f), f.append(u), e.items.clear();
    }
    ys(t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ys(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Oe(e[n], t);
}
var va;
function ci(e, t, n, r, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map(), o = (t & za) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      e
    );
    a = K ? Fe(/* @__PURE__ */ on(u)) : u.appendChild(nt());
  }
  K && Fi();
  var f = null, h = /* @__PURE__ */ dl(() => {
    var x = n();
    return Ba(x) ? x : x == null ? [] : Pi(x);
  }), c, p = !0;
  function m() {
    _.fallback = f, Zu(_, c, a, t, r), f !== null && (c.length === 0 ? (f.f & rn) === 0 ? Vs(f) : (f.f ^= rn, kr(f, null, a)) : qn(f, () => {
      f = null;
    }));
  }
  var $ = Ls(() => {
    c = /** @type {V[]} */
    b(h);
    var x = c.length;
    let D = !1;
    if (K) {
      var C = Za(a) === Mi;
      C !== (x === 0) && (a = xi(), Fe(a), sn(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), M = (
      /** @type {Batch} */
      G
    ), B = $l(), j = 0; j < x; j += 1) {
      K && z.nodeType === wr && /** @type {Comment} */
      z.data === Ns && (a = /** @type {Comment} */
      z, D = !0, sn(!1));
      var Q = c[j], ce = r(Q, j), X = p ? null : l.get(ce);
      X ? (X.v && vr(X.v, Q), X.i && vr(X.i, j), B && M.unskip_effect(X.e)) : (X = Qu(
        l,
        p ? a : va ?? (va = nt()),
        Q,
        ce,
        j,
        i,
        t,
        n
      ), p || (X.e.f |= rn), l.set(ce, X)), S.add(ce);
    }
    if (x === 0 && s && !f && (p ? f = ut(() => s(a)) : (f = ut(() => s(va ?? (va = nt()))), f.f |= rn)), x > S.size && ru(), K && x > 0 && Fe(xi()), !p)
      if (B) {
        for (const [ae, le] of l)
          S.has(ae) || M.skip_effect(le.e);
        M.oncommit(m), M.ondiscard(() => {
        });
      } else
        m();
    D && sn(!0), b(h);
  }), _ = { effect: $, items: l, outrogroups: null, fallback: f };
  p = !1, K && (a = z);
}
function Sr(e) {
  for (; e !== null && (e.f & xt) === 0; )
    e = e.next;
  return e;
}
function Zu(e, t, n, r, i) {
  var X, ae, le, T, q, Le, st, de, Ee;
  var s = (r & Oo) !== 0, a = t.length, l = e.items, o = Sr(e.effect.first), u, f = null, h, c = [], p = [], m, $, _, x;
  if (s)
    for (x = 0; x < a; x += 1)
      m = t[x], $ = i(m, x), _ = /** @type {EachItem} */
      l.get($).e, (_.f & rn) === 0 && ((ae = (X = _.nodes) == null ? void 0 : X.a) == null || ae.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(_));
  for (x = 0; x < a; x += 1) {
    if (m = t[x], $ = i(m, x), _ = /** @type {EachItem} */
    l.get($).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(_), ee.done.delete(_);
    if ((_.f & rn) !== 0)
      if (_.f ^= rn, _ === o)
        kr(_, null, n);
      else {
        var D = f ? f.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), dn(e, f, _), dn(e, _, D), kr(_, D, n), f = _, c = [], p = [], o = Sr(f.next);
        continue;
      }
    if ((_.f & tt) !== 0 && (Vs(_), s && ((T = (le = _.nodes) == null ? void 0 : le.a) == null || T.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(_))), _ !== o) {
      if (u !== void 0 && u.has(_)) {
        if (c.length < p.length) {
          var C = p[0], S;
          f = C.prev;
          var M = c[0], B = c[c.length - 1];
          for (S = 0; S < c.length; S += 1)
            kr(c[S], C, n);
          for (S = 0; S < p.length; S += 1)
            u.delete(p[S]);
          dn(e, M.prev, B.next), dn(e, f, M), dn(e, B, C), o = C, f = B, x -= 1, c = [], p = [];
        } else
          u.delete(_), kr(_, o, n), dn(e, _.prev, _.next), dn(e, _, f === null ? e.effect.first : f.next), dn(e, f, _), f = _;
        continue;
      }
      for (c = [], p = []; o !== null && o !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(o), p.push(o), o = Sr(o.next);
      if (o === null)
        continue;
    }
    (_.f & rn) === 0 && c.push(_), f = _, o = Sr(_.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (ys(Pi(ee.done)), (q = e.outrogroups) == null || q.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var j = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & tt) === 0 && j.push(_);
    for (; o !== null; )
      (o.f & tt) === 0 && o !== e.fallback && j.push(o), o = Sr(o.next);
    var Q = j.length;
    if (Q > 0) {
      var ce = (r & za) !== 0 && a === 0 ? n : null;
      if (s) {
        for (x = 0; x < Q; x += 1)
          (st = (Le = j[x].nodes) == null ? void 0 : Le.a) == null || st.measure();
        for (x = 0; x < Q; x += 1)
          (Ee = (de = j[x].nodes) == null ? void 0 : de.a) == null || Ee.fix();
      }
      Ju(e, j, ce);
    }
  }
  s && mn(() => {
    var ee, Pe;
    if (h !== void 0)
      for (_ of h)
        (Pe = (ee = _.nodes) == null ? void 0 : ee.a) == null || Pe.apply();
  });
}
function Qu(e, t, n, r, i, s, a, l) {
  var o = (a & Io) !== 0 ? (a & Lo) === 0 ? /* @__PURE__ */ _l(n, !1, !1) : zn(n) : null, u = (a & Fo) !== 0 ? zn(i) : null;
  return {
    v: o,
    i: u,
    e: ut(() => (s(t, o ?? n, u ?? i, l), () => {
      e.delete(r);
    }))
  };
}
function kr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & rn) === 0 ? (
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
function dn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Hs(e, t) {
  Tl(() => {
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
          var l = a + s;
          (a === 0 || ga.includes(r[a - 1])) && (l === r.length || ga.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
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
function ti(e, t, n, r, i, s) {
  var a = e.__className;
  if (K || a !== n || a === void 0) {
    var l = ef(n, r, s);
    (!K || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = n;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
function ts(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function ma(e, t, n, r) {
  var i = e.__style;
  if (K || i !== t) {
    var s = tf(t, r);
    (!K || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (ts(e, n == null ? void 0 : n[0], r[0]), ts(e, n == null ? void 0 : n[1], r[1], "important")) : ts(e, n, r));
  return r;
}
const nf = Symbol("is custom element"), rf = Symbol("is html"), sf = eu ? "link" : "LINK";
function ya(e, t, n, r) {
  var i = af(e);
  K && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === sf) || i[t] !== (i[t] = n) && (t === "loading" && (e[Qo] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && lf(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function af(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [nf]: e.nodeName.includes("-"),
      [rf]: e.namespaceURI === Xa
    })
  );
}
var wa = /* @__PURE__ */ new Map();
function lf(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wa.get(t);
  if (n) return n;
  wa.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Wo(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Wa(i);
  }
  return n;
}
function xa(e, t) {
  return e === t || (e == null ? void 0 : e[Ir]) === t;
}
function hi(e = {}, t, n, r) {
  return Tl(() => {
    var i, s;
    return Os(() => {
      i = s, s = [], Yi(() => {
        e !== n(...s) && (t(e, ...s), i && xa(n(...i), e) && t(null, ...i));
      });
    }), () => {
      mn(() => {
        s && xa(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let ni = !1;
function of(e) {
  var t = ni;
  try {
    return ni = !1, [e(), ni];
  } finally {
    ni = t;
  }
}
function fe(e, t, n, r) {
  var D;
  var i = (n & Ho) !== 0, s = (n & Yo) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, o = () => (l && (l = !1, a = s ? Yi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Ir in e || Ja in e;
    u = ((D = Ln(e, t)) == null ? void 0 : D.set) ?? (f && t in e ? (C) => e[t] = C : void 0);
  }
  var h, c = !1;
  i ? [h, c] = of(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = o(), u && (uu(), u(h)));
  var p;
  if (p = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? o() : (l = !0, C);
  }, (n & Vo) === 0)
    return p;
  if (u) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, S) {
        return arguments.length > 0 ? ((!S || m || c) && u(S ? p() : C), C) : p();
      })
    );
  }
  var $ = !1, _ = ((n & qo) !== 0 ? Vi : dl)(() => ($ = !1, p()));
  i && b(_);
  var x = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    (function(C, S) {
      if (arguments.length > 0) {
        const M = S ? b(_) : i ? Sn(C) : C;
        return ve(_, M), $ = !0, a !== void 0 && (a = M), C;
      }
      return xn && $ || (x.f & an) !== 0 ? _.v : b(_);
    })
  );
}
function uf(e) {
  return new ff(e);
}
var nn, ot;
class ff {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    L(this, nn);
    /** @type {Record<string, any>} */
    L(this, ot);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ _l(l, !1, !1);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return b(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Ja ? !0 : (b(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return ve(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    F(this, ot, (t.hydrate ? Uu : Hl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && se(), F(this, nn, i.$$events);
    for (const a of Object.keys(v(this, ot)))
      a === "$set" || a === "$destroy" || a === "$on" || wi(this, a, {
        get() {
          return v(this, ot)[a];
        },
        /** @param {any} value */
        set(l) {
          v(this, ot)[a] = l;
        },
        enumerable: !0
      });
    v(this, ot).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, ot).$destroy = () => {
      Gu(v(this, ot));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    v(this, ot).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    v(this, nn)[t] = v(this, nn)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, nn)[t].push(r), () => {
      v(this, nn)[t] = v(this, nn)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ot).$destroy();
  }
}
nn = new WeakMap(), ot = new WeakMap();
let zl;
typeof HTMLElement == "function" && (zl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    pe(this, "$$ctor");
    /** Slots */
    pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    pe(this, "$$c");
    /** Whether or not the custom element is connected */
    pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pe(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    pe(this, "$$shadowRoot", null);
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
          const l = Ds("slot");
          s !== "default" && (l.name = s), Xe(a, l);
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
        a in this.$$d || (this.$$d[a] = di(a, s.value, this.$$p_d, "toProp"));
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
        Os(() => {
          var s;
          this.$$r = !0;
          for (const a of yi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = di(
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = di(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return yi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function di(e, t, n, r) {
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
function Ys(e, t, n, r, i, s) {
  let a = class extends zl {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return yi(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return yi(t).forEach((l) => {
    wi(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var h;
        o = di(l, o, t), this.$$d[l] = o;
        var u = this.$$c;
        if (u) {
          var f = (h = Ln(u, l)) == null ? void 0 : h.get;
          f ? u[l] = o : u.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    wi(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var hf = { value: () => {
} };
function Xl() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new pi(n);
}
function pi(e) {
  this._ = e;
}
function df(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
pi.prototype = Xl.prototype = {
  constructor: pi,
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
    return new pi(e);
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
var ws = "http://www.w3.org/1999/xhtml";
const $a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ws,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $a.hasOwnProperty(t) ? { space: $a[t], local: e } : e;
}
function vf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ws && t.documentElement.namespaceURI === ws ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function gf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Bl(e) {
  var t = zi(e);
  return (t.local ? gf : vf)(t);
}
function _f() {
}
function zs(e) {
  return e == null ? _f : function() {
    return this.querySelector(e);
  };
}
function mf(e) {
  typeof e != "function" && (e = zs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l = r[i] = new Array(a), o, u, f = 0; f < a; ++f)
      (o = s[f]) && (u = e.call(o, o.__data__, f, s)) && ("__data__" in o && (u.__data__ = o.__data__), l[f] = u);
  return new it(r, this._parents);
}
function yf(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function wf() {
  return [];
}
function Wl(e) {
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
  typeof e == "function" ? e = xf(e) : e = Wl(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], l = a.length, o, u = 0; u < l; ++u)
      (o = a[u]) && (r.push(e.call(o, o.__data__, u, a)), i.push(o));
  return new it(r, i);
}
function Ul(e) {
  return function() {
    return this.matches(e);
  };
}
function Gl(e) {
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
  return this.select(e == null ? Ef : Af(typeof e == "function" ? e : Gl(e)));
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
  return this.selectAll(e == null ? Cf : Sf(typeof e == "function" ? e : Gl(e)));
}
function kf(e) {
  typeof e != "function" && (e = Ul(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l = r[i] = [], o, u = 0; u < a; ++u)
      (o = s[u]) && e.call(o, o.__data__, u, s) && l.push(o);
  return new it(r, this._parents);
}
function Kl(e) {
  return new Array(e.length);
}
function Mf() {
  return new it(this._enter || this._groups.map(Kl), this._parents);
}
function bi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
bi.prototype = {
  constructor: bi,
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
  for (var a = 0, l, o = t.length, u = s.length; a < u; ++a)
    (l = t[a]) ? (l.__data__ = s[a], r[a] = l) : n[a] = new bi(e, s[a]);
  for (; a < o; ++a)
    (l = t[a]) && (i[a] = l);
}
function If(e, t, n, r, i, s, a) {
  var l, o, u = /* @__PURE__ */ new Map(), f = t.length, h = s.length, c = new Array(f), p;
  for (l = 0; l < f; ++l)
    (o = t[l]) && (c[l] = p = a.call(o, o.__data__, l, t) + "", u.has(p) ? i[l] = o : u.set(p, o));
  for (l = 0; l < h; ++l)
    p = a.call(e, s[l], l, s) + "", (o = u.get(p)) ? (r[l] = o, o.__data__ = s[l], u.delete(p)) : n[l] = new bi(e, s[l]);
  for (l = 0; l < f; ++l)
    (o = t[l]) && u.get(c[l]) === o && (i[l] = o);
}
function Ff(e) {
  return e.__data__;
}
function Of(e, t) {
  if (!arguments.length) return Array.from(this, Ff);
  var n = t ? If : Df, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Pf(e));
  for (var s = i.length, a = new Array(s), l = new Array(s), o = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = Lf(e.call(f, f && f.__data__, u, r)), m = p.length, $ = l[u] = new Array(m), _ = a[u] = new Array(m), x = o[u] = new Array(c);
    n(f, h, $, _, x, p, t);
    for (var D = 0, C = 0, S, M; D < m; ++D)
      if (S = $[D]) {
        for (D >= C && (C = D + 1); !(M = _[C]) && ++C < m; ) ;
        S._next = M || null;
      }
  }
  return a = new it(a, r), a._enter = l, a._exit = o, a;
}
function Lf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qf() {
  return new it(this._exit || this._groups.map(Kl), this._parents);
}
function Vf(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Hf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), l = new Array(i), o = 0; o < a; ++o)
    for (var u = n[o], f = r[o], h = u.length, c = l[o] = new Array(h), p, m = 0; m < h; ++m)
      (p = u[m] || f[m]) && (c[m] = p);
  for (; o < i; ++o)
    l[o] = n[o];
  return new it(l, this._parents);
}
function Yf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function zf(e) {
  e || (e = Xf);
  function t(h, c) {
    return h && c ? e(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], l = a.length, o = i[s] = new Array(l), u, f = 0; f < l; ++f)
      (u = a[f]) && (o[f] = u);
    o.sort(t);
  }
  return new it(i, this._parents).order();
}
function Xf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bf() {
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
    for (var i = t[n], s = 0, a = i.length, l; s < a; ++s)
      (l = i[s]) && e.call(l, l.__data__, s, i);
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
  var n = zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Zf : Jf : typeof t == "function" ? n.local ? nc : tc : n.local ? ec : Qf)(n, t));
}
function jl(e) {
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
function lc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ic : typeof t == "function" ? ac : sc)(e, t, n ?? "")) : _r(this.node(), e);
}
function _r(e, t) {
  return e.style.getPropertyValue(t) || jl(e).getComputedStyle(e, null).getPropertyValue(t);
}
function oc(e) {
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
  return arguments.length > 1 ? this.each((t == null ? oc : typeof t == "function" ? fc : uc)(e, t)) : this.node()[e];
}
function Jl(e) {
  return e.trim().split(/^|\s+/);
}
function Xs(e) {
  return e.classList || new Zl(e);
}
function Zl(e) {
  this._node = e, this._names = Jl(e.getAttribute("class") || "");
}
Zl.prototype = {
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
function Ql(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function eo(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function hc(e) {
  return function() {
    Ql(this, e);
  };
}
function dc(e) {
  return function() {
    eo(this, e);
  };
}
function pc(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ql : eo)(this, e);
  };
}
function vc(e, t) {
  var n = Jl(e + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
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
  var t = typeof e == "function" ? e : Bl(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Sc() {
  return null;
}
function Nc(e, t) {
  var n = typeof e == "function" ? e : Bl(e), r = t == null ? Sc : typeof t == "function" ? t : zs(t);
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
      for (var a = 0, l = r.length; a < l; ++a)
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
    var l = this.node().__on;
    if (l) {
      for (var o = 0, u = l.length, f; o < u; ++o)
        for (i = 0, f = l[o]; i < s; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (l = t ? Vc : qc, i = 0; i < s; ++i) this.each(l(r[i], t, n));
  return this;
}
function to(e, t, n) {
  var r = jl(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Yc(e, t) {
  return function() {
    return to(this, e, t);
  };
}
function zc(e, t) {
  return function() {
    return to(this, e, t.apply(this, arguments));
  };
}
function Xc(e, t) {
  return this.each((typeof t == "function" ? zc : Yc)(e, t));
}
function* Bc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var no = [null];
function it(e, t) {
  this._groups = e, this._parents = t;
}
function xr() {
  return new it([[document.documentElement]], no);
}
function Wc() {
  return this;
}
it.prototype = xr.prototype = {
  constructor: it,
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
  call: Bf,
  nodes: Wf,
  node: Uf,
  size: Gf,
  empty: Kf,
  each: jf,
  attr: rc,
  style: lc,
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
  dispatch: Xc,
  [Symbol.iterator]: Bc
};
function he(e) {
  return typeof e == "string" ? new it([[document.querySelector(e)]], [document.documentElement]) : new it([[e]], no);
}
function Bs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ro(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Jr() {
}
var Vr = 0.7, $i = 1 / Vr, nr = "\\s*([+-]?\\d+)\\s*", Hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uc = /^#([0-9a-f]{3,8})$/, Gc = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), Kc = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), jc = new RegExp(`^rgba\\(${nr},${nr},${nr},${Hr}\\)$`), Jc = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Hr}\\)$`), Zc = new RegExp(`^hsl\\(${Hr},${Dt},${Dt}\\)$`), Qc = new RegExp(`^hsla\\(${Hr},${Dt},${Dt},${Hr}\\)$`), Aa = {
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
Bs(Jr, Xn, {
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
  return io(this).formatHsl();
}
function Ta() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Uc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ra(t) : n === 3 ? new Ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ri(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ri(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gc.exec(e)) ? new Ue(t[1], t[2], t[3], 1) : (t = Kc.exec(e)) ? new Ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = jc.exec(e)) ? ri(t[1], t[2], t[3], t[4]) : (t = Jc.exec(e)) ? ri(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Zc.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, 1) : (t = Qc.exec(e)) ? Na(t[1], t[2] / 100, t[3] / 100, t[4]) : Aa.hasOwnProperty(e) ? Ra(Aa[e]) : e === "transparent" ? new Ue(NaN, NaN, NaN, 0) : null;
}
function Ra(e) {
  return new Ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ri(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ue(e, t, n, r);
}
function nh(e) {
  return e instanceof Jr || (e = Xn(e)), e ? (e = e.rgb(), new Ue(e.r, e.g, e.b, e.opacity)) : new Ue();
}
function xs(e, t, n, r) {
  return arguments.length === 1 ? nh(e) : new Ue(e, t, n, r ?? 1);
}
function Ue(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Bs(Ue, xs, ro(Jr, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ue(Hn(this.r), Hn(this.g), Hn(this.b), Ai(this.opacity));
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
  return `#${kn(this.r)}${kn(this.g)}${kn(this.b)}`;
}
function rh() {
  return `#${kn(this.r)}${kn(this.g)}${kn(this.b)}${kn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Sa() {
  const e = Ai(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Hn(this.r)}, ${Hn(this.g)}, ${Hn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ai(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Hn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function kn(e) {
  return e = Hn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Na(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new _t(e, t, n, r);
}
function io(e) {
  if (e instanceof _t) return new _t(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jr || (e = Xn(e)), !e) return new _t();
  if (e instanceof _t) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, l = s - i, o = (s + i) / 2;
  return l ? (t === s ? a = (n - r) / l + (n < r) * 6 : n === s ? a = (r - t) / l + 2 : a = (t - n) / l + 4, l /= o < 0.5 ? s + i : 2 - s - i, a *= 60) : l = o > 0 && o < 1 ? 0 : a, new _t(a, l, o, e.opacity);
}
function ih(e, t, n, r) {
  return arguments.length === 1 ? io(e) : new _t(e, t, n, r ?? 1);
}
function _t(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Bs(_t, ih, ro(Jr, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new _t(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new _t(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Ue(
      ns(e >= 240 ? e - 240 : e + 120, i, r),
      ns(e, i, r),
      ns(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new _t(ka(this.h), ii(this.s), ii(this.l), Ai(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ai(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ka(this.h)}, ${ii(this.s) * 100}%, ${ii(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ii(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ns(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ws = (e) => () => e;
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
function lh(e) {
  return (e = +e) == 1 ? so : function(t, n) {
    return n - t ? ah(t, n, e) : Ws(isNaN(t) ? n : t);
  };
}
function so(e, t) {
  var n = t - e;
  return n ? sh(e, n) : Ws(isNaN(e) ? t : e);
}
const Ei = (function e(t) {
  var n = lh(t);
  function r(i, s) {
    var a = n((i = xs(i)).r, (s = xs(s)).r), l = n(i.g, s.g), o = n(i.b, s.b), u = so(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = l(f), i.b = o(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function oh(e, t) {
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
  for (a = 0; a < r; ++a) i[a] = jt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(l) {
    for (a = 0; a < r; ++a) s[a] = i[a](l);
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
    i in e ? n[i] = jt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var bs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(bs.source, "g");
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
function ao(e, t) {
  var n = bs.lastIndex = rs.lastIndex = 0, r, i, s, a = -1, l = [], o = [];
  for (e = e + "", t = t + ""; (r = bs.exec(e)) && (i = rs.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), l[a] ? l[a] += s : l[++a] = s), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, o.push({ i: a, x: Pt(r, i) })), n = rs.lastIndex;
  return n < t.length && (s = t.slice(n), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? o[0] ? ph(o[0].x) : dh(t) : (t = o.length, function(u) {
    for (var f = 0, h; f < t; ++f) l[(h = o[f]).i] = h.x(u);
    return l.join("");
  });
}
function jt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ws(t) : (n === "number" ? Pt : n === "string" ? (r = Xn(t)) ? (t = r, Ei) : ao : t instanceof Xn ? Ei : t instanceof Date ? ch : uh(t) ? oh : Array.isArray(t) ? fh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? hh : Pt)(e, t);
}
var Ma = 180 / Math.PI, $s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function lo(e, t, n, r, i, s) {
  var a, l, o;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (o = e * n + t * r) && (n -= e * o, r -= t * o), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, o /= l), e * r < t * n && (e = -e, t = -t, o = -o, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Ma,
    skewX: Math.atan(o) * Ma,
    scaleX: a,
    scaleY: l
  };
}
var si;
function vh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? $s : lo(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gh(e) {
  return e == null || (si || (si = document.createElementNS("http://www.w3.org/2000/svg", "g")), si.setAttribute("transform", e), !(e = si.transform.baseVal.consolidate())) ? $s : (e = e.matrix, lo(e.a, e.b, e.c, e.d, e.e, e.f));
}
function oo(e, t, n, r) {
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
  function l(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Pt(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function o(u, f, h, c, p, m) {
    if (u !== h || f !== c) {
      var $ = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: $ - 4, x: Pt(u, h) }, { i: $ - 2, x: Pt(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), l(u.skewX, f.skewX, h, c), o(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var m = -1, $ = c.length, _; ++m < $; ) h[(_ = c[m]).i] = _.x(p);
      return h.join("");
    };
  };
}
var _h = oo(vh, "px, ", "px)", "deg)"), mh = oo(gh, ", ", ")", ")"), mr = 0, Mr = 0, Nr = 0, uo = 1e3, Ti, Pr, Ri = 0, Bn = 0, Xi = 0, Yr = typeof performance == "object" && performance.now ? performance : Date, fo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Us() {
  return Bn || (fo(yh), Bn = Yr.now() + Xi);
}
function yh() {
  Bn = 0;
}
function Ci() {
  this._call = this._time = this._next = null;
}
Ci.prototype = co.prototype = {
  constructor: Ci,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Us() : +n) + (t == null ? 0 : +t), !this._next && Pr !== this && (Pr ? Pr._next = this : Ti = this, Pr = this), this._call = e, this._time = n, As();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, As());
  }
};
function co(e, t, n) {
  var r = new Ci();
  return r.restart(e, t, n), r;
}
function wh() {
  Us(), ++mr;
  for (var e = Ti, t; e; )
    (t = Bn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --mr;
}
function Pa() {
  Bn = (Ri = Yr.now()) + Xi, mr = Mr = 0;
  try {
    wh();
  } finally {
    mr = 0, bh(), Bn = 0;
  }
}
function xh() {
  var e = Yr.now(), t = e - Ri;
  t > uo && (Xi -= t, Ri = e);
}
function bh() {
  for (var e, t = Ti, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ti = n);
  Pr = e, As(r);
}
function As(e) {
  if (!mr) {
    Mr && (Mr = clearTimeout(Mr));
    var t = e - Bn;
    t > 24 ? (e < 1 / 0 && (Mr = setTimeout(Pa, e - Yr.now() - Xi)), Nr && (Nr = clearInterval(Nr))) : (Nr || (Ri = Yr.now(), Nr = setInterval(xh, uo)), mr = 1, fo(Pa));
  }
}
function Da(e, t, n) {
  var r = new Ci();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var $h = Xl("start", "end", "cancel", "interrupt"), Ah = [], ho = 0, Ia = 1, Es = 2, vi = 3, Fa = 4, Ts = 5, gi = 6;
function Bi(e, t, n, r, i, s) {
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
    state: ho
  });
}
function Gs(e, t) {
  var n = bt(e, t);
  if (n.state > ho) throw new Error("too late; already scheduled");
  return n;
}
function Vt(e, t) {
  var n = bt(e, t);
  if (n.state > vi) throw new Error("too late; already running");
  return n;
}
function bt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Eh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = co(s, 0, n.time);
  function s(u) {
    n.state = Ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Ia) return o();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === vi) return Da(a);
        p.state === Fa ? (p.state = gi, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[f]) : +f < t && (p.state = gi, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[f]);
      }
    if (Da(function() {
      n.state === vi && (n.state = Fa, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Es, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Es) {
      for (n.state = vi, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function l(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(o), n.state = Ts, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(e, f);
    n.state === Ts && (n.on.call("end", e, e.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = gi, n.timer.stop(), delete r[t];
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
      i = r.state > Es && r.state < Ts, r.state = gi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
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
      for (var a = 0, l = r.length; a < l; ++a)
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
      for (var l = { name: t, value: n }, o = 0, u = i.length; o < u; ++o)
        if (i[o].name === t) {
          i[o] = l;
          break;
        }
      o === u && i.push(l);
    }
    s.tween = i;
  };
}
function Nh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = bt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Ch : Sh)(n, e, t));
}
function Ks(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Vt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return bt(i, r).value[t];
  };
}
function po(e, t) {
  var n;
  return (typeof t == "number" ? Pt : t instanceof Xn ? Ei : (n = Xn(t)) ? (t = n, Ei) : ao)(e, t);
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
    var a, l = n(this), o;
    return l == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = t(r = a, l)));
  };
}
function Fh(e, t, n) {
  var r, i, s;
  return function() {
    var a, l = n(this), o;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), o = l + "", a === o ? null : a === r && o === i ? s : (i = o, s = t(r = a, l)));
  };
}
function Oh(e, t) {
  var n = zi(e), r = n === "transform" ? mh : po;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Fh : Ih)(n, r, Ks(this, "attr." + e, t)) : t == null ? (n.local ? Mh : kh)(n) : (n.local ? Dh : Ph)(n, r, t));
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
  var r = zi(e);
  return this.tween(n, (r.local ? Vh : Hh)(r, t));
}
function zh(e, t) {
  return function() {
    Gs(this, e).delay = +t.apply(this, arguments);
  };
}
function Xh(e, t) {
  return t = +t, function() {
    Gs(this, e).delay = t;
  };
}
function Bh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zh : Xh)(t, e)) : bt(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Wh : Uh)(t, e)) : bt(this.node(), t).duration;
}
function Kh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Vt(this, e).ease = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Kh(t, e)) : bt(this.node(), t).ease;
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
  typeof e != "function" && (e = Ul(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l = r[i] = [], o, u = 0; u < a; ++u)
      (o = s[u]) && e.call(o, o.__data__, u, s) && l.push(o);
  return new un(r, this._parents, this._name, this._id);
}
function ed(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), l = 0; l < s; ++l)
    for (var o = t[l], u = n[l], f = o.length, h = a[l] = new Array(f), c, p = 0; p < f; ++p)
      (c = o[p] || u[p]) && (h[p] = c);
  for (; l < r; ++l)
    a[l] = t[l];
  return new un(a, this._parents, this._name, this._id);
}
function td(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function nd(e, t, n) {
  var r, i, s = td(t) ? Gs : Vt;
  return function() {
    var a = s(this, e), l = a.on;
    l !== r && (i = (r = l).copy()).on(t, n), a.on = i;
  };
}
function rd(e, t) {
  var n = this._id;
  return arguments.length < 2 ? bt(this.node(), n).on.on(e) : this.each(nd(n, e, t));
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
  typeof e != "function" && (e = zs(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], o = l.length, u = s[a] = new Array(o), f, h, c = 0; c < o; ++c)
      (f = l[c]) && (h = e.call(f, f.__data__, c, l)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Bi(u[c], t, n, c, u, bt(f, n)));
  return new un(s, this._parents, t, n);
}
function ld(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Wl(e));
  for (var r = this._groups, i = r.length, s = [], a = [], l = 0; l < i; ++l)
    for (var o = r[l], u = o.length, f, h = 0; h < u; ++h)
      if (f = o[h]) {
        for (var c = e.call(f, f.__data__, h, o), p, m = bt(f, n), $ = 0, _ = c.length; $ < _; ++$)
          (p = c[$]) && Bi(p, t, n, $, c, m);
        s.push(c), a.push(f);
      }
  return new un(s, a, t, n);
}
var od = xr.prototype.constructor;
function ud() {
  return new od(this._groups, this._parents);
}
function fd(e, t) {
  var n, r, i;
  return function() {
    var s = _r(this, e), a = (this.style.removeProperty(e), _r(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function vo(e) {
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
    var a = _r(this, e), l = n(this), o = l + "";
    return l == null && (o = l = (this.style.removeProperty(e), _r(this, e))), a === o ? null : a === r && o === i ? s : (i = o, s = t(r = a, l));
  };
}
function dd(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, l;
  return function() {
    var o = Vt(this, e), u = o.on, f = o.value[s] == null ? l || (l = vo(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), o.on = r;
  };
}
function pd(e, t, n) {
  var r = (e += "") == "transform" ? _h : po;
  return t == null ? this.styleTween(e, fd(e, r)).on("end.style." + e, vo(e)) : typeof t == "function" ? this.styleTween(e, hd(e, r, Ks(this, "style." + e, t))).each(dd(this._id, e)) : this.styleTween(e, cd(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? yd(Ks(this, "text", e)) : md(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = go(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, u = 0; u < l; ++u)
      if (o = a[u]) {
        var f = bt(o, t);
        Bi(o, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new un(r, this._parents, e, n);
}
function Ed() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var l = { value: a }, o = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Vt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(o)), u.on = t;
    }), i === 0 && s();
  });
}
var Td = 0;
function un(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function _i(e) {
  return xr().transition(e);
}
function go() {
  return ++Td;
}
var Kt = xr.prototype;
un.prototype = _i.prototype = {
  constructor: un,
  select: ad,
  selectAll: ld,
  selectChild: Kt.selectChild,
  selectChildren: Kt.selectChildren,
  filter: Qh,
  merge: ed,
  selection: ud,
  transition: Ad,
  call: Kt.call,
  nodes: Kt.nodes,
  node: Kt.node,
  size: Kt.size,
  empty: Kt.empty,
  each: Kt.each,
  on: rd,
  attr: Oh,
  attrTween: Yh,
  style: pd,
  styleTween: _d,
  text: wd,
  textTween: $d,
  remove: sd,
  tween: Nh,
  delay: Bh,
  duration: Gh,
  ease: jh,
  easeVarying: Zh,
  end: Ed,
  [Symbol.iterator]: Kt[Symbol.iterator]
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
  e instanceof un ? (t = e._id, e = e._name) : (t = go(), (n = Cd).time = Us(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], l = a.length, o, u = 0; u < l; ++u)
      (o = a[u]) && Bi(o, e, t, u, a, n || Sd(o, t));
  return new un(r, this._parents, e, t);
}
xr.prototype.interrupt = Rh;
xr.prototype.transition = Nd;
const Rs = Math.PI, Cs = 2 * Rs, Tn = 1e-6, kd = Cs - Tn;
function _o(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Md(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _o;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _o : Md(t);
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
    let a = this._x1, l = this._y1, o = r - t, u = i - n, f = a - t, h = l - n, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (c > Tn) if (!(Math.abs(h * o - u * f) > Tn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = r - a, m = i - l, $ = o * o + u * u, _ = p * p + m * m, x = Math.sqrt($), D = Math.sqrt(c), C = s * Math.tan((Rs - Math.acos(($ + c - _) / (2 * x * D))) / 2), S = C / D, M = C / x;
      Math.abs(S - 1) > Tn && this._append`L${t + S * f},${n + S * h}`, this._append`A${s},${s},0,0,${+(h * p > f * m)},${this._x1 = t + M * o},${this._y1 = n + M * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), o = r * Math.sin(i), u = t + l, f = n + o, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Tn || Math.abs(this._y1 - f) > Tn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Cs + Cs), c > kd ? this._append`A${r},${r},0,1,${h},${t - l},${n - o}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > Tn && this._append`A${r},${r},0,${+(c >= Rs)},${h},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
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
function Ie(e) {
  return function() {
    return e;
  };
}
const Oa = Math.abs, Me = Math.atan2, En = Math.cos, Fd = Math.max, is = Math.min, Rt = Math.sin, tr = Math.sqrt, He = 1e-12, zr = Math.PI, Si = zr / 2, mi = 2 * zr;
function Od(e) {
  return e > 1 ? 0 : e < -1 ? zr : Math.acos(e);
}
function La(e) {
  return e >= 1 ? Si : e <= -1 ? -Si : Math.asin(e);
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
function Xd(e, t, n, r, i, s, a, l) {
  var o = n - e, u = r - t, f = a - i, h = l - s, c = h * o - f * u;
  if (!(c * c < He))
    return c = (f * (t - s) - h * (e - i)) / c, [e + c * o, t + c * u];
}
function ai(e, t, n, r, i, s, a) {
  var l = e - n, o = t - r, u = (a ? s : -s) / tr(l * l + o * o), f = u * o, h = -u * l, c = e + f, p = t + h, m = n + f, $ = r + h, _ = (c + m) / 2, x = (p + $) / 2, D = m - c, C = $ - p, S = D * D + C * C, M = i - s, B = c * $ - m * p, j = (C < 0 ? -1 : 1) * tr(Fd(0, M * M * S - B * B)), Q = (B * C - D * j) / S, ce = (-B * D - C * j) / S, X = (B * C + D * j) / S, ae = (-B * D + C * j) / S, le = Q - _, T = ce - x, q = X - _, Le = ae - x;
  return le * le + T * T > q * q + Le * Le && (Q = X, ce = ae), {
    cx: Q,
    cy: ce,
    x01: -f,
    y01: -h,
    x11: Q * (i / M - 1),
    y11: ce * (i / M - 1)
  };
}
function Ct() {
  var e = qd, t = Vd, n = Ie(0), r = null, i = Hd, s = Yd, a = zd, l = null, o = Ld(u);
  function u() {
    var f, h, c = +e.apply(this, arguments), p = +t.apply(this, arguments), m = i.apply(this, arguments) - Si, $ = s.apply(this, arguments) - Si, _ = Oa($ - m), x = $ > m;
    if (l || (l = f = o()), p < c && (h = p, p = c, c = h), !(p > He)) l.moveTo(0, 0);
    else if (_ > mi - He)
      l.moveTo(p * En(m), p * Rt(m)), l.arc(0, 0, p, m, $, !x), c > He && (l.moveTo(c * En($), c * Rt($)), l.arc(0, 0, c, $, m, x));
    else {
      var D = m, C = $, S = m, M = $, B = _, j = _, Q = a.apply(this, arguments) / 2, ce = Q > He && (r ? +r.apply(this, arguments) : tr(c * c + p * p)), X = is(Oa(p - c) / 2, +n.apply(this, arguments)), ae = X, le = X, T, q;
      if (ce > He) {
        var Le = La(ce / c * Rt(Q)), st = La(ce / p * Rt(Q));
        (B -= Le * 2) > He ? (Le *= x ? 1 : -1, S += Le, M -= Le) : (B = 0, S = M = (m + $) / 2), (j -= st * 2) > He ? (st *= x ? 1 : -1, D += st, C -= st) : (j = 0, D = C = (m + $) / 2);
      }
      var de = p * En(D), Ee = p * Rt(D), ee = c * En(M), Pe = c * Rt(M);
      if (X > He) {
        var W = p * En(C), Ne = p * Rt(C), Ht = c * En(S), ne = c * Rt(S), qe;
        if (_ < zr)
          if (qe = Xd(de, Ee, Ht, ne, W, Ne, ee, Pe)) {
            var $t = de - qe[0], At = Ee - qe[1], Yt = W - qe[0], we = Ne - qe[1], zt = 1 / Rt(Od(($t * Yt + At * we) / (tr($t * $t + At * At) * tr(Yt * Yt + we * we))) / 2), cn = tr(qe[0] * qe[0] + qe[1] * qe[1]);
            ae = is(X, (c - cn) / (zt - 1)), le = is(X, (p - cn) / (zt + 1));
          } else
            ae = le = 0;
      }
      j > He ? le > He ? (T = ai(Ht, ne, de, Ee, p, le, x), q = ai(W, Ne, ee, Pe, p, le, x), l.moveTo(T.cx + T.x01, T.cy + T.y01), le < X ? l.arc(T.cx, T.cy, le, Me(T.y01, T.x01), Me(q.y01, q.x01), !x) : (l.arc(T.cx, T.cy, le, Me(T.y01, T.x01), Me(T.y11, T.x11), !x), l.arc(0, 0, p, Me(T.cy + T.y11, T.cx + T.x11), Me(q.cy + q.y11, q.cx + q.x11), !x), l.arc(q.cx, q.cy, le, Me(q.y11, q.x11), Me(q.y01, q.x01), !x))) : (l.moveTo(de, Ee), l.arc(0, 0, p, D, C, !x)) : l.moveTo(de, Ee), !(c > He) || !(B > He) ? l.lineTo(ee, Pe) : ae > He ? (T = ai(ee, Pe, W, Ne, c, -ae, x), q = ai(de, Ee, Ht, ne, c, -ae, x), l.lineTo(T.cx + T.x01, T.cy + T.y01), ae < X ? l.arc(T.cx, T.cy, ae, Me(T.y01, T.x01), Me(q.y01, q.x01), !x) : (l.arc(T.cx, T.cy, ae, Me(T.y01, T.x01), Me(T.y11, T.x11), !x), l.arc(0, 0, c, Me(T.cy + T.y11, T.cx + T.x11), Me(q.cy + q.y11, q.cx + q.x11), x), l.arc(q.cx, q.cy, ae, Me(q.y11, q.x11), Me(q.y01, q.x01), !x))) : l.arc(0, 0, c, M, S, x);
    }
    if (l.closePath(), f) return l = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - zr / 2;
    return [En(h) * f, Rt(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), u) : e;
  }, u.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), u) : t;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Ie(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ie(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ie(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Ie(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ie(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (l = f ?? null, u) : l;
  }, u;
}
function Bd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Wd(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ud(e) {
  return e;
}
function ss() {
  var e = Ud, t = Wd, n = null, r = Ie(0), i = Ie(mi), s = Ie(0);
  function a(l) {
    var o, u = (l = Bd(l)).length, f, h, c = 0, p = new Array(u), m = new Array(u), $ = +r.apply(this, arguments), _ = Math.min(mi, Math.max(-mi, i.apply(this, arguments) - $)), x, D = Math.min(Math.abs(_) / u, s.apply(this, arguments)), C = D * (_ < 0 ? -1 : 1), S;
    for (o = 0; o < u; ++o)
      (S = m[p[o] = o] = +e(l[o], o, l)) > 0 && (c += S);
    for (t != null ? p.sort(function(M, B) {
      return t(m[M], m[B]);
    }) : n != null && p.sort(function(M, B) {
      return n(l[M], l[B]);
    }), o = 0, h = c ? (_ - u * C) / c : 0; o < u; ++o, $ = x)
      f = p[o], S = m[f], x = $ + (S > 0 ? S * h : 0) + C, m[f] = {
        data: l[f],
        index: o,
        value: S,
        startAngle: $,
        endAngle: x,
        padAngle: D
      };
    return m;
  }
  return a.value = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ie(+l), a) : e;
  }, a.sortValues = function(l) {
    return arguments.length ? (t = l, n = null, a) : t;
  }, a.sort = function(l) {
    return arguments.length ? (n = l, t = null, a) : n;
  }, a.startAngle = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Ie(+l), a) : r;
  }, a.endAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Ie(+l), a) : i;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : Ie(+l), a) : s;
  }, a;
}
function Dr(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Dr.prototype = {
  constructor: Dr,
  scale: function(e) {
    return e === 1 ? this : new Dr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Dr(this.k, this.x + this.k * e, this.y + this.k * t);
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
Dr.prototype;
var Gd = /* @__PURE__ */ Xu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Kd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function mo(e, t) {
  Oi(t, !0), Hs(e, Kd);
  let n = fe(t, "jsonData", 7), r = fe(t, "currentRound", 7, 1), i = fe(t, "mouseEventType", 15), s = fe(t, "mouseData", 15), a = fe(t, "mouseX", 15), l = fe(t, "mouseY", 15), o = fe(t, "requestRoundChange", 7, (d) => {
  }), u = fe(t, "candidateColors", 23, () => []), f = fe(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = fe(t, "firstRoundDeterminesPercentages", 7, !1), c = fe(t, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const m = 800, $ = 800, _ = Math.min(m, $) * 0.3, x = m / 2, D = $ / 2, C = "Pie", S = "PieOutline", M = "Donut", B = "TextLayer", j = "url(#cross-hatch)", Q = 1.15, ce = 0.1, X = 750, ae = 800, le = "white", T = 1, q = "#ff00ff", Le = 3;
  function st(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let de = [], Ee = [], ee = [], Pe = 0, W = 0;
  const Ne = {}, Ht = "No Further Rankings";
  let ne = /* @__PURE__ */ $e(null);
  function qe() {
    const d = he(b(ne));
    d.select("#" + C).remove(), d.select("#" + S).remove(), d.select("#" + M).remove(), d.select("#" + B).remove();
  }
  function $t(d) {
    o() && (oe = d, o()(d));
  }
  function At(d) {
    qe(), ee = Yt(d), de = Zs(d, C, ee, x, D, 0, we()), Zs(d, S, ee, x, D, 0, we(), !1, !1, !0), Rr();
  }
  ju(() => {
    Ve(), setTimeout(
      () => {
        At(r());
      },
      0
    );
  });
  function Yt(d) {
    const g = _e(d);
    return Pe = br(d), g;
  }
  function we() {
    return _;
  }
  function zt() {
    return we() * 1.41;
  }
  function cn(d) {
    let g = 0;
    for (let y = 1; y < d; y++) {
      const E = n().results[y - 1].tallyResults;
      for (let A = 0; A < E.length; A++) {
        const N = E[A].transfers;
        if (N) {
          const I = N.exhausted;
          I && (g += Number(I));
        }
      }
    }
    return g;
  }
  function Zr(d, g) {
    if (d === "exhausted") return cn(g);
    {
      const y = n().results[g - 1].tally;
      return Number(y[d]);
    }
  }
  function Wi(d, g) {
    return Zr(d, g).toLocaleString("en-US");
  }
  function Un(d, g) {
    const y = h() ? Pe : Ui(g);
    return (Zr(d, g) / y).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function br(d) {
    const g = n().results[d - 1].tally;
    let y = 0;
    for (let [E, A] of Object.entries(g))
      y += Number(A);
    return y;
  }
  function $r(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Ui(d) {
    const g = n().results[d - 1].tally;
    let y = 0;
    for (let [E, A] of Object.entries(g))
      $r(E) || (y += Number(A));
    return y;
  }
  function Gn(d, g) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const y = n().results[d - 1].tallyResults, E = [];
    for (let A = 0; A < y.length; A++) {
      const N = y[A][g];
      N != null && E.push(N);
    }
    return E;
  }
  function Kn(d) {
    return Gn(d, "eliminated");
  }
  function w(d) {
    let g = [];
    for (let y = 1; y <= d; y++) g = g.concat(Gn(y, "elected"));
    return [...new Set(g)];
  }
  function V(d, g) {
    const y = n().results[g - 1].tallyResults;
    let E = 0;
    const A = y.findIndex((N) => (N == null ? void 0 : N.elected) && d == N.elected);
    if (A >= 0) {
      const N = y[A].transfers;
      if (N)
        for (let [I, H] of Object.entries(N)) E += Number(H);
    } else
      return 0;
    return E;
  }
  function Z(d, g) {
    d.some((y) => $r(y.label)) || d.push({ label: "exhausted", value: cn(g) });
  }
  function _e(d) {
    const g = [];
    for (let [y, E] of Object.entries(n().results[d - 1].tally))
      g.push({ label: y, value: Number(E) });
    return Z(g, d), g;
  }
  function xe(d) {
    const g = n().results[Math.max(0, d - 2)].tally, y = n().results[d - 1].tally, E = [];
    for (let [A] of Object.entries(g))
      E.push({ label: A, value: Number(y[A] ?? 0) });
    return Z(E, d), E;
  }
  function ie(d, g) {
    const y = [];
    for (const E of d) {
      if (E.label === "exhausted" || E.isTransfer) {
        y.push(E);
        continue;
      }
      const A = V(E.label, g);
      A > 0 ? (y.push({
        label: E.label,
        value: A,
        isTransfer: !0
      }), y.push({ ...E, value: E.value - A })) : y.push(E);
    }
    return y;
  }
  function Ve() {
    const d = he(b(ne)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [y, E] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Ne[y] = Id[g] : Ne[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Ne[y] = u()[g % u().length], g++;
      {
        const A = d.clone(!0);
        A.attr("id", st(y)).select("rect").attr("fill", Ne[y]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    Ne.exhausted = j, Ne["Inactive Ballots"] = j;
  }
  function Xt() {
    he(b(ne)).select("#" + M).remove();
  }
  function Ge(d, g) {
    const y = _i("global").duration(ae);
    g && y.on("end", g);
    const E = ie(ee, d), N = ss().sort(null).value((I) => I.value)(E);
    na(d, C, N, 0, we()), na(d, S, N, 0, we(), !0), ee = E, de = N, Xt(), Ut(d), Eo(), Ro(0, we()), Rr();
  }
  function dt(d, g) {
    const y = _i("global").duration(ae);
    g && y.on("end", g), Gi(d);
  }
  function Ke(d, g) {
    const y = _i("global").duration(ae);
    g && y.on("end", g), Er(d), Wt(we(), zt());
  }
  let te = !1, ke = [];
  function me() {
    Rr(), te = !1, pt();
  }
  function pt() {
    if (ke.length === 0) {
      oe !== r() && (r() === oe + 1 && oe > 0 && r() <= n().results.length ? (oe = r(), $n(r())) : r() >= 1 && r() <= n().results.length && (oe = r(), c(0), At(r())));
      return;
    }
    const d = ke.shift();
    switch (d.type) {
      case "round": {
        const g = d.round;
        g === oe + 1 && oe > 0 && g <= n().results.length ? (oe = g, $n(g)) : (g !== oe && g >= 1 && g <= n().results.length && (oe = g, c(0), At(g)), pt());
        break;
      }
      case "step":
        Zn();
        break;
    }
  }
  function $n(d) {
    if (d <= 1 || d > n().results.length) {
      pt();
      return;
    }
    te = !0, W = d, c(0), Ge(W - 1, () => {
      c(1), dt(W - 1, () => {
        c(2), Ke(W, () => {
          c(0), me();
        });
      });
    });
  }
  function jn() {
    te || (te = !0, W = r(), An());
  }
  function An() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), ke.length > 0) {
      me();
      return;
    }
    const d = W < n().results.length - 1 ? An : () => {
      c(0), me();
    };
    Ge(W, () => {
      c(1), dt(W, () => {
        c(2), W++, $t(W), Ke(W, d);
      });
    });
  }
  Fs(() => {
    Bt();
  });
  let oe = 0;
  function Bt() {
    if (oe != r()) {
      if (te) {
        ke.push({ type: "round", round: r() });
        return;
      }
      oe == r() - 1 && oe > 0 ? Ar() : Jn(r()), oe = r();
    }
  }
  function Jn(d) {
    if (te) {
      ke.push({ type: "round", round: d });
      return;
    }
    c(0), At(d);
  }
  function Ar() {
    if (te) {
      ke.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (W = r(), W > n().results.length) {
      Rr(), te = !1;
      return;
    }
    te = !0, c() === 0 ? Ge(W - 1, () => {
      c(1), dt(W - 1, () => {
        c(2), Ke(W, () => {
          c(0), me();
        });
      });
    }) : c() === 1 ? dt(W - 1, () => {
      c(2), Ke(W, () => {
        c(0), me();
      });
    }) : c() === 2 && Ke(W, () => {
      c(0), me();
    });
  }
  function Zn() {
    if (r() > n().results.length) {
      Rr(), te = !1;
      return;
    }
    if (te) {
      ke.push({ type: "step" });
      return;
    }
    te = !0, W = r(), c() === 0 ? Ge(W, () => {
      c(1), me();
    }) : c() === 1 ? dt(W, () => {
      c(2), me();
    }) : c() === 2 ? (W++, $t(W), Ke(W, () => {
      c(0), me();
    })) : (te = !1, console.warn("displayPhase out of range at ", c()));
  }
  function Er(d) {
    ee = xe(d), de = ea(d, C, ee, 0, we(), !0), ea(d, S, ee, 0, we(), !1, !0), he(b(ne)).select("#" + S).selectAll(".eliminated").remove();
  }
  function Wt(d, g) {
    const y = he(b(ne)).select("#" + M), A = he(b(ne)).select("#" + C), N = {};
    for (const k of de) {
      const P = k.data.label;
      if (k.data.isTransfer) continue;
      const R = A.select("#" + CSS.escape(p(k.data)));
      R.empty() || (N[P] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: k.startAngle,
        newEnd: k.endAngle
      });
    }
    const I = y.selectAll(".slice");
    let H = I.size();
    function O() {
      H--, H === 0 && To();
    }
    I.select("path").transition("global").duration(X).attrTween("d", function(k) {
      const P = k.startAngle, R = k.endAngle, U = R - P, je = N[k.data.label];
      let re, Et;
      if (je) {
        const Qn = (je.oldStart + je.oldEnd) / 2, ko = (je.newStart + je.newEnd) / 2, Mo = P - Qn;
        re = ko + Mo, Et = re + U;
      } else
        re = P, Et = R;
      const ue = jt(P, re), Tt = jt(R, Et), Gt = jt(g, d), Cr = Ct();
      return function(Qn) {
        return Cr.innerRadius(Math.min(Gt(Qn), d) - 1).outerRadius(Gt(Qn)).startAngle(ue(Qn)).endAngle(Tt(Qn)), Cr(k);
      };
    }).on("end", (k) => O());
  }
  function Ut(d) {
    const g = xo(d, de);
    Ee = Qs(d, M, g, x, D, we(), zt(), !1, !0);
    const y = he(b(ne));
    y.select("#" + C).raise(), y.select("#" + S).raise();
  }
  function Gi(d) {
    const g = $o(d, Ee, de);
    Ee = ra(d, M, g, we(), zt(), !1);
  }
  function Tr(d) {
    return Ne[d.data.label];
  }
  function wo(d) {
    const g = {}, y = n().results[d - 1].tallyResults;
    for (let E = 0; E < y.length; E++) {
      let A = y[E].eliminated;
      if (A === void 0 && (A = y[E].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const N = y[E].transfers;
      if (N === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [I, H] of Object.entries(N))
        g[I] === void 0 ? g[I] = Number(H) : g[I] += Number(H);
    }
    return g;
  }
  function xo(d, g) {
    const y = [], E = Pe, A = n().results[d - 1].tallyResults;
    for (let N = 0; N < A.length; N++) {
      let I = A[N].eliminated;
      if (I === void 0 && (I = A[N].elected), I === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const H = A[N].transfers;
      if (H === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let O = g.find((P) => P.data.label == I && P.data.isTransfer);
      O === void 0 && (O = g.find((P) => P.data.label == I && !P.data.isTransfer));
      let k = 0;
      if (O) k = O.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [P, R] of Object.entries(H)) {
        let U;
        const je = g.find((ue) => ue.data.label == P);
        if (je)
          U = structuredClone(je);
        else if (P == "exhausted")
          U = {
            data: { label: P, value: Number(R) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (P == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", R);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", P);
          continue;
        }
        const Et = Number(R) / E * 2 * Math.PI;
        U.startAngle = k, k = U.endAngle = k + Et, U.index = N, U.data.transferIndex = N, y.push(U);
      }
    }
    return y;
  }
  function bo(d, g, y) {
    const E = {};
    for (let [A, N] of Object.entries(d)) {
      const I = y.find((k) => A == k.data.label);
      if (I === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const H = (I.startAngle + I.endAngle) / 2, O = d[I.data.label] / g * 2 * Math.PI;
      E[I.data.label] = H - O / 2;
    }
    return E;
  }
  function $o(d, g, y) {
    const E = [], A = Pe, N = wo(d), I = bo(N, A, y);
    for (let [H, O] of g.entries()) {
      const k = structuredClone(O), P = O.endAngle - O.startAngle, R = y.find((U) => O.data.label === U.data.label && !U.data.isTransfer);
      if (R) {
        const U = R.data.label;
        k.startAngle = I[U], I[U] += P, k.endAngle = k.startAngle + P;
      } else if (O.data.label === "exhausted")
        k.startAngle = O.startAngle, k.endAngle = O.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", O.data.label);
        continue;
      }
      k.index = H, E.push(k);
    }
    return E;
  }
  function Js(d, g, y, E, A, N) {
    const H = he(b(ne)).append("g").attr("id", B).attr("transform", `translate(${y}, ${E})`), O = Ct().innerRadius(A * Q).outerRadius(A * Q);
    H.selectAll("text").data(g).enter().each(function(k) {
      k.endAngle - k.startAngle < ce || k.data.isTransfer || he(this).append("g").attr("id", (P) => p(P.data)).classed("eliminated", (P) => N.includes(P.data.label) || P.data.isTransfer === !0).each(function(P, R) {
        P.data.label === "exhausted" && he(this).on("mouseenter", (U, je) => Co(U)).on("mouseleave", (U, je) => So());
      }).append("text").attr("transform", (P) => `translate(${O.centroid(P)})`).attr("text-anchor", (P) => Ki(P.startAngle, P.endAngle)).text((P) => P.data.label === "exhausted" ? Ht : P.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((P) => {
        const R = Wi(P.data.label, d);
        return !h() && $r(P.data.label) ? R : R + " (" + Un(P.data.label, d) + ")";
      });
    });
  }
  function Ao(d, g, y, E) {
    const N = he(b(ne)).select("#" + B), I = N.selectAll("tspan"), H = N.selectAll("g").data(g, (R) => p(R.data)).classed("eliminated", (R) => E.includes(R.data.label) || R.data.isTransfer === !0), O = Ct().innerRadius(y * Q).outerRadius(y * Q + 1);
    I.transition("global").duration(X).attr("transform", (R) => `translate(${O.centroid(R)})`).attr("text-anchor", (R) => Ki(R.startAngle, R.endAngle)), H.select("text").transition("global").duration(X).attr("transform", (R) => `translate(${O.centroid(R)})`).attr("text-anchor", (R) => Ki(R.startAngle, R.endAngle)).on("end", (R) => P());
    let k = H.size();
    function P(R) {
      k--, k === 0 && (N.remove(), Js(d, g, x, D, y, E));
    }
  }
  function Zs(d, g, y, E, A, N, I, H = !0, O = !1, k = !1) {
    const R = ss().sort(null).value((U) => U.value)(y);
    return Qs(d, g, R, E, A, N, I, H, O, k), R;
  }
  function Rr() {
    he(b(ne)).select("#" + S).selectAll(".elected").select("path").style("stroke", q).style("stroke-width", `${Le}px`);
  }
  function Qs(d, g, y, E, A, N, I, H, O, k = !1) {
    const P = Kn(d), R = w(d), re = he(b(ne)).attr("viewBox", `0 0 ${m} ${$}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${E}, ${A})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (ue) => P.includes(ue.data.label) || ue.data.isTransfer === !0).classed("elected", (ue) => R.includes(ue.data.label) && !ue.data.isTransfer).attr("id", (ue) => p(ue.data));
    k ? re.style("pointer-events", "none") : re.on("mouseenter", (ue, Tt) => Ji(ue, Tt)).on("mouseleave", (ue, Tt) => Zi(ue, Tt));
    const Et = Ct().outerRadius(I).innerRadius(N);
    if (O) {
      const ue = Ct().outerRadius(N + 1).innerRadius(N), Tt = re.append("path").attr("d", ue).attr("stroke", k ? "none" : le).attr("stroke-width", k ? 0 : T).attr("fill", "none").transition("global").duration(X).attr("d", (Gt) => Et(Gt)).on("end", (Gt) => {
        k || ji();
      });
      k ? Tt.attr("fill", "none") : Tt.attr("fill", (Gt) => Tr(Gt));
    } else
      re.append("path").attr("d", (ue) => Et(ue)).attr("fill", k ? "none" : (ue) => Tr(ue)).attr("stroke", k ? "none" : le).attr("stroke-width", k ? 0 : T), k || ji();
    return H && !k && Js(d, y, E, A, I, P), y;
  }
  function Eo() {
    const y = he(b(ne)).select("#" + B).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function To() {
    const y = he(b(ne)).select("#" + B).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function Ro(d, g) {
    const A = he(b(ne)).select("#" + C).selectAll(".eliminated"), N = Ct().innerRadius(d), I = Ct().outerRadius(g);
    A.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(X).attrTween("d", function(H) {
      const O = jt(g, d);
      return function(k) {
        return I.innerRadius(O(k)), I(H);
      };
    }).attr("fill", (H) => `url(#${st(H.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(X).attrTween("d", function(H) {
      const O = jt(g, d);
      return function(k) {
        return N.outerRadius(O(k)), N(H);
      };
    }).attr("fill", (H) => Tr(H));
  }
  function Ki(d, g) {
    const y = (d + g) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function ji() {
    he(b(
      ne
      // force redisplay of text labels
    )).select("#" + B).raise().append("g").remove();
  }
  function ea(d, g, y, E, A, N, I = !1) {
    const O = ss().sort(null).value((k) => k.value)(y);
    return ra(d, g, O, E, A, N, I), O;
  }
  function ta(d, g, y, E, A = !1) {
    const N = Kn(d), I = w(d), k = he(b(ne)).select("#" + g).selectAll(".slice").data(y, (R) => p(R.data)), P = k.enter().append("g").attr("class", "slice").attr("id", (R) => p(R.data)).classed("eliminated", !0);
    return A ? P.style("pointer-events", "none") : P.on("mouseenter", (R, U) => Ji(R, U)).on("mouseleave", (R, U) => Zi(R, U)), P.append("path").attr("d", (R) => E(R)).attr("fill", A ? "none" : (R) => Tr(R)).attr("stroke", A ? "none" : le).attr("stroke-width", A ? 0 : T), k.classed("eliminated", (R) => N.includes(R.data.label)).classed("elected", (R) => I.includes(R.data.label)), A || k.on("mouseenter", (R, U) => Ji(R, U)).on("mouseleave", (R, U) => Zi(R, U)), k;
  }
  function na(d, g, y, E, A, N = !1) {
    const I = Ct().outerRadius(A).innerRadius(E);
    ta(d, g, y, I, N).select("path").attr("d", (O) => I(O)).attr("fill", N ? "none" : (O) => Tr(O));
  }
  function ra(d, g, y, E, A, N, I = !1) {
    const H = Ct().outerRadius(A).innerRadius(E).startAngle((re) => re.startAngle).endAngle((re) => re.endAngle), O = Ct().outerRadius(A).innerRadius(E), P = he(b(ne)).select("#" + g);
    P.selectAll(".slice").attr("prevStart", (re) => re.startAngle).attr("prevEnd", (re) => re.endAngle);
    const R = ta(d, g, y, O, I);
    let U = R.size();
    function je() {
      U--, U <= 0 && (I || ji(), P.selectAll(".finished").remove());
    }
    return R.select("path").transition("global").duration(X).attrTween("d", function(re) {
      const Et = Number(he(this.parentNode).attr("prevStart")), ue = Number(he(this.parentNode).attr("prevEnd")), Tt = jt(Et, re.startAngle), Gt = jt(ue, re.endAngle);
      return (Cr) => (H.startAngle(Tt(Cr)).endAngle(Gt(Cr)), H(re));
    }).on("end", function(re) {
      re.startAngle === re.endAngle && he(this).attr("stroke", "none"), je();
    }), N && !I && Ao(d, y, A, Kn(d)), y;
  }
  function Ji(d, g) {
    s(g.data.label), i("enter"), a(d.clientX), l(d.clientY);
  }
  function Zi(d, g) {
    s(g.data.label), i("leave");
  }
  function Co(d, g) {
    i("show-exhausted"), a(d.clientX), l(d.clientY);
  }
  function So(d, g) {
    i("hide-exhausted");
  }
  var No = {
    pieColors: Ne,
    exhaustedLabel: Ht,
    countExhaustedVotes: cn,
    getEliminatedCandidates: Kn,
    getElectedCandidates: w,
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
      return l();
    },
    set mouseY(d) {
      l(d), se();
    },
    get requestRoundChange() {
      return o();
    },
    set requestRoundChange(d = (g) => {
    }) {
      o(d), se();
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
  return hi(ia, (d) => ve(ne, d), () => b(ne)), Xe(e, ia), Li(No);
}
Ys(
  mo,
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
function yo(e, t) {
  Oi(t, !0), Hs(e, Qd);
  let n = fe(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = fe(t, "currentStep", 7, 0), i = fe(t, "disabled", 7, !1), s = fe(t, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function l(h) {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), a());
  }
  var o = {
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
  return u.__click = a, u.__keydown = l, ci(u, 21, n, fi, (h, c, p) => {
    var m = Jd(), $ = pn(m);
    {
      var _ = (j) => {
        var Q = jd();
        let ce;
        Jt(() => ce = ti(Q, 1, "connector svelte-1l4eyw0", null, ce, { completed: !i() && p <= r() })), Xe(j, Q);
      };
      er($, (j) => {
        p > 0 && j(_);
      });
    }
    var x = Je($, 2), D = Ye(x);
    let C;
    var S = Je(D, 2);
    let M;
    var B = Ye(S, !0);
    De(S), De(x), Jt(() => {
      C = ti(D, 1, "dot svelte-1l4eyw0", null, C, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), M = ti(S, 1, "label svelte-1l4eyw0", null, M, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), vn(B, b(c));
    }), Xe(h, m);
  }), De(u), Jt(() => {
    f = ti(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), ya(u, "tabindex", i() ? -1 : 0), ya(u, "aria-disabled", i());
  }), Xe(e, u), Li(o);
}
Hu(["click", "keydown"]);
Ys(yo, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var ep = /* @__PURE__ */ qt("<span> </span> <!>", 1), tp = /* @__PURE__ */ qt("About to eliminate: <!>", 1), np = /* @__PURE__ */ qt("<span> </span> <!>", 1), rp = /* @__PURE__ */ qt(" <!>", 1), ip = /* @__PURE__ */ qt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), sp = /* @__PURE__ */ qt("<span> </span> <br/>", 1), ap = /* @__PURE__ */ qt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const lp = {
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
function op(e, t) {
  Oi(t, !0), Hs(e, lp);
  const n = 0.85;
  let r = fe(t, "electionSummary", 7), i = fe(t, "currentRound", 7, 1), s = fe(t, "requestRoundChange", 7, (w) => {
  }), a = fe(t, "candidateColors", 23, () => []), l = fe(t, "textForWinner", 7, "elected"), o = fe(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = fe(t, "firstRoundDeterminesPercentages", 7, !1), f = fe(t, "showCaptions", 7, !1);
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
  let c = /* @__PURE__ */ hn(() => h[l()] ?? h.elected), p = /* @__PURE__ */ $e(null), m = /* @__PURE__ */ $e(null), $ = /* @__PURE__ */ $e(""), _ = /* @__PURE__ */ $e(Sn([])), x = /* @__PURE__ */ $e(""), D = /* @__PURE__ */ $e(""), C = /* @__PURE__ */ $e(0), S = /* @__PURE__ */ $e(0), M = /* @__PURE__ */ hn(() => B(r()));
  function B(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (V) {
        return console.error("Failed to parse JSON string:", V), {};
      }
    return w || {};
  }
  function j(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Q(w, V, Z) {
    w.style.left = V + "px", w.style.top = Z + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const ie = w.getBoundingClientRect();
      let Ve = V, Xt = Z + 20;
      Ve + ie.width > window.innerWidth - 12 && (Ve = window.innerWidth - ie.width - 12), Ve < 12 && (Ve = 12), Xt + ie.height > window.innerHeight - 12 && (Xt = Z - ie.height - 12), w.style.left = Ve + "px", w.style.top = Xt + "px";
    });
  }
  function ce() {
    switch (b(x)) {
      case "enter":
        ((w) => {
          var V = Jo(w, 2);
          ve(_, V[0], !0), ve($, V[1], !0);
        })(ae(b(D), i())), b(p) && (Q(b(p), b(C) || 0, b(S) || 0), b(p).style.opacity = String(n));
        break;
      case "leave":
        b(p) && (b(p).style.opacity = "0"), ve(_, [], !0), ve($, "");
        break;
      case "show-exhausted":
        b(m) && (Q(b(m), b(C) || 0, b(S) || 0), b(m).style.opacity = String(n));
        break;
      case "hide-exhausted":
        b(m) && (b(m).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", b(x));
        break;
    }
  }
  Fs(() => ce());
  function X(w, V) {
    return w === 1 ? V ? "vote was" : "vote will be" : V ? "votes were" : "votes will be";
  }
  function ae(w, V) {
    const Z = [], _e = w === "exhausted" ? Ne() : w;
    let xe;
    w === "exhausted" ? xe = Pe(1) : xe = b(M).results[0].tally[w], Z.push(`${_e} started with ${xe} votes.`);
    for (let ie = 1; ie <= V; ie++) {
      ie === V && (w === "exhausted" ? xe = Pe(V) : xe = b(M).results[V - 1].tally[w], Z.push(`${_e} has ${xe} votes at round ${V}.`));
      const Ve = b(M).results[ie - 1].tallyResults, Xt = de(ie);
      for (let Ge = 0; Ge < Ve.length; Ge++) {
        const dt = Ve[Ge].transfers, Ke = Ve[Ge].eliminated, te = Ve[Ge].elected;
        if (!Xt) {
          if (Ke)
            Ke === w && Z.push(`${_e} will be eliminated on round ${ie}.`);
          else if (w === te && (Z.push(`${_e} ${b(c).event} on round ${ie}.`), dt))
            for (let [me, pt] of Object.entries(dt))
              Z.push(`${pt} ${X(Number(pt), ie < V)} transferred to ${me} on round ${ie}.`);
        }
        const ke = Ke || te;
        if (ke) {
          const me = Number(dt[w]);
          me && Z.push(`${me} ${X(me, ie < V)} transferred from ${ke} on round ${ie}.`);
        }
      }
    }
    return [Z, _e];
  }
  function le() {
    let w = 0;
    for (let V = 1; V <= b(M).results.length; V++) {
      if (de(V)) continue;
      const Z = b(M).results[V - 1].tallyResults;
      for (let _e = 0; _e < Z.length; _e++)
        Z[_e].elected && w++;
    }
    return w;
  }
  let T, q = /* @__PURE__ */ $e(0);
  function Le(w) {
    var xe;
    return !((xe = b(M)) != null && xe.results) || w < 2 || w > b(M).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [b(M).results[w - 2].tallyResults.some((ie) => ie.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function st(w) {
    var Z;
    if (!((Z = b(M)) != null && Z.results) || w < 2 || w > b(M).results.length || w === b(M).results.length) return !0;
    const V = b(M).results[w - 2].tallyResults;
    return V.length === 0 || V.every((_e) => Object.keys(_e.transfers).length === 0);
  }
  function de(w) {
    return o() && b(M).results && w === b(M).results.length;
  }
  function Ee(w) {
    return de(w) ? [] : T ? T.getEliminatedCandidates(w) : [];
  }
  function ee(w) {
    return de(w) ? [] : T ? T.getElectedCandidates(w) : [];
  }
  function Pe(w) {
    return T ? T.countExhaustedVotes(w) : 0;
  }
  function W() {
    T && T.animateOnePhaseFn && T.animateOnePhaseFn();
  }
  function Ne() {
    return T ? T.exhaustedLabel : "";
  }
  function Ht() {
    return T ? T.pieColors : {};
  }
  var ne = {
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
    set requestRoundChange(w = (V) => {
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
      return l();
    },
    set textForWinner(w = "elected") {
      l(w), se();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return o();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      o(w), se();
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
  }, qe = ap(), $t = pn(qe), At = Ye($t);
  {
    let w = /* @__PURE__ */ hn(() => Le(i())), V = /* @__PURE__ */ hn(() => st(i()));
    yo(At, {
      get labels() {
        return b(w);
      },
      get currentStep() {
        return b(q);
      },
      get disabled() {
        return b(V);
      },
      onAdvance: W
    });
  }
  De($t);
  var Yt = Je($t, 4), we = Ye(Yt), zt = Ye(we), cn = Ye(zt);
  hi(
    mo(cn, {
      get jsonData() {
        return b(M);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: j,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return o();
      },
      get firstRoundDeterminesPercentages() {
        return u();
      },
      get mouseEventType() {
        return b(x);
      },
      set mouseEventType(w) {
        ve(x, w, !0);
      },
      get mouseData() {
        return b(D);
      },
      set mouseData(w) {
        ve(D, w, !0);
      },
      get mouseX() {
        return b(C);
      },
      set mouseX(w) {
        ve(C, w, !0);
      },
      get mouseY() {
        return b(S);
      },
      set mouseY(w) {
        ve(S, w, !0);
      },
      get displayPhase() {
        return b(q);
      },
      set displayPhase(w) {
        ve(q, w, !0);
      }
    }),
    (w) => T = w,
    () => T
  ), De(zt), De(we);
  var Zr = Je(we, 2);
  {
    var Wi = (w) => {
      var V = ip(), Z = pn(V), _e = Ye(Z);
      De(Z);
      var xe = Je(Z, 2), ie = Ye(xe);
      {
        var Ve = (te) => {
          var ke = tp(), me = Je(pn(ke));
          ci(me, 17, () => Ee(i()), fi, (pt, $n, jn) => {
            var An = ep(), oe = pn(An);
            let Bt;
            var Jn = Ye(oe, !0);
            De(oe);
            var Ar = Je(oe, 2);
            {
              var Zn = (Wt) => {
                var Ut = pa(", ");
                Xe(Wt, Ut);
              }, Er = /* @__PURE__ */ hn(() => jn < Ee(i()).length - 1);
              er(Ar, (Wt) => {
                b(Er) && Wt(Zn);
              });
            }
            Jt(
              (Wt) => {
                Bt = ma(oe, "", Bt, Wt), vn(Jn, b($n));
              },
              [() => ({ color: Ht()[b($n)] })]
            ), Xe(pt, An);
          }), Xe(te, ke);
        }, Xt = /* @__PURE__ */ hn(() => Ee(i()).length > 0);
        er(ie, (te) => {
          b(Xt) && te(Ve);
        });
      }
      var Ge = Je(ie, 2);
      {
        var dt = (te) => {
          var ke = rp(), me = pn(ke), pt = Je(me);
          ci(pt, 17, () => ee(i()), fi, ($n, jn, An) => {
            var oe = np(), Bt = pn(oe);
            let Jn;
            var Ar = Ye(Bt, !0);
            De(Bt);
            var Zn = Je(Bt, 2);
            {
              var Er = (Ut) => {
                var Gi = pa(", ");
                Xe(Ut, Gi);
              }, Wt = /* @__PURE__ */ hn(() => An < ee(i()).length - 1);
              er(Zn, (Ut) => {
                b(Wt) && Ut(Er);
              });
            }
            Jt(
              (Ut) => {
                Jn = ma(Bt, "", Jn, Ut), vn(Ar, b(jn));
              },
              [() => ({ color: Ht()[b(jn)] })]
            ), Xe($n, oe);
          }), Jt(() => vn(me, `${b(c).caption ?? ""}: `)), Xe(te, ke);
        }, Ke = /* @__PURE__ */ hn(() => ee(i()).length > 0);
        er(Ge, (te) => {
          b(Ke) && te(dt);
        });
      }
      De(xe), Jt((te) => vn(_e, `${b(M).config.contest ?? ""}, ${te ?? ""} ${b(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [le]), Xe(w, V);
    };
    er(Zr, (w) => {
      f() && w(Wi);
    });
  }
  De(Yt);
  var Un = Je(Yt, 2), br = Ye(Un), $r = Ye(br, !0);
  De(br);
  var Ui = Je(br, 2);
  ci(Ui, 17, () => b(_), fi, (w, V) => {
    var Z = sp(), _e = pn(Z), xe = Ye(_e, !0);
    De(_e), os(2), Jt(() => vn(xe, b(V))), Xe(w, Z);
  }), De(Un), hi(Un, (w) => ve(p, w), () => b(p));
  var Gn = Je(Un, 2), Kn = Ye(Gn);
  return os(2), De(Gn), hi(Gn, (w) => ve(m, w), () => b(m)), Jt(
    (w) => {
      vn($r, b($)), vn(Kn, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Ne]
  ), Xe(e, qe), Li(ne);
}
customElements.define("pie-chart", Ys(
  op,
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
