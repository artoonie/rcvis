var Fl = Object.defineProperty;
var oa = (t) => {
  throw TypeError(t);
};
var Ll = (t, e, n) => e in t ? Fl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ct = (t, e, n) => Ll(t, typeof e != "symbol" ? e + "" : e, n), ts = (t, e, n) => e.has(t) || oa("Cannot " + n);
var v = (t, e, n) => (ts(t, e, "read from private field"), n ? n.call(t) : e.get(t)), H = (t, e, n) => e.has(t) ? oa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), V = (t, e, n, r) => (ts(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), xt = (t, e, n) => (ts(t, e, "access private method"), n);
var za;
typeof window < "u" && ((za = window.__svelte ?? (window.__svelte = {})).v ?? (za.v = /* @__PURE__ */ new Set())).add("5");
const ql = 1, Vl = 2, Xa = 4, zl = 8, Hl = 16, Yl = 1, Bl = 4, Xl = 8, Wl = 16, Ul = 1, Gl = 2, Ns = "[", Oi = "[!", ks = "]", ur = {}, Tt = Symbol(), Wa = "http://www.w3.org/1999/xhtml", os = !1;
var Ua = Array.isArray, Kl = Array.prototype.indexOf, fr = Array.prototype.includes, Ii = Array.from, bi = Object.keys, $i = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, jl = Object.getOwnPropertyDescriptors, Jl = Object.prototype, Zl = Array.prototype, Ga = Object.getPrototypeOf, la = Object.isExtensible;
const Ql = () => {
};
function tu(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ka() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function eu(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Rt = 2, Or = 4, Fi = 8, ja = 1 << 24, hn = 16, Te = 32, En = 64, Ja = 128, he = 512, $t = 1024, St = 2048, Ee = 4096, ee = 8192, ln = 16384, mr = 32768, cr = 65536, ua = 1 << 17, Za = 1 << 18, jn = 1 << 19, nu = 1 << 20, an = 1 << 25, Wn = 65536, ls = 1 << 21, Ms = 1 << 22, wn = 1 << 23, Mr = Symbol("$state"), Qa = Symbol("legacy props"), ru = Symbol(""), kn = new class extends Error {
  constructor() {
    super(...arguments);
    ct(this, "name", "StaleReactionError");
    ct(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ha;
const iu = ((Ha = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ha.contentType.includes("xml")) ?? !1, Wr = 3, yr = 8;
function su(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function au() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ou(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function lu(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function uu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fu(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function hu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function du(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function pu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function vu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _u() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Li(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let K = !1;
function on(t) {
  K = t;
}
let X;
function Lt(t) {
  if (t === null)
    throw Li(), ur;
  return X = t;
}
function qi() {
  return Lt(/* @__PURE__ */ He(X));
}
function It(t) {
  if (K) {
    if (/* @__PURE__ */ He(X) !== null)
      throw Li(), ur;
    X = t;
  }
}
function us(t = 1) {
  if (K) {
    for (var e = t, n = X; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ He(n);
    X = n;
  }
}
function Ai(t = !0) {
  for (var e = 0, n = X; ; ) {
    if (n.nodeType === yr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Ns || r === Oi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ He(n)
    );
    t && n.remove(), n = i;
  }
}
function to(t) {
  if (!t || t.nodeType !== yr)
    throw Li(), ur;
  return (
    /** @type {Comment} */
    t.data
  );
}
function eo(t) {
  return t === this.v;
}
function yu(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function no(t) {
  return !yu(t, this.v);
}
let wu = !1, re = null;
function hr(t) {
  re = t;
}
function Vi(t, e = !1, n) {
  re = {
    p: re,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function zi(t) {
  var e = (
    /** @type {ComponentContext} */
    re
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ro(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, re = e.p, t ?? /** @type {T} */
  {};
}
function ro() {
  return !0;
}
let Mn = [];
function io() {
  var t = Mn;
  Mn = [], tu(t);
}
function xn(t) {
  if (Mn.length === 0 && !Pr) {
    var e = Mn;
    queueMicrotask(() => {
      e === Mn && io();
    });
  }
  Mn.push(t);
}
function xu() {
  for (; Mn.length > 0; )
    io();
}
function so(t) {
  var e = j;
  if (e === null)
    return B.f |= wn, t;
  if ((e.f & mr) === 0 && (e.f & Or) === 0)
    throw t;
  dr(t, e);
}
function dr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ja) !== 0) {
      if ((e.f & mr) === 0)
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
const bu = -7169;
function dt(t, e) {
  t.f = t.f & bu | e;
}
function Ps(t) {
  (t.f & he) !== 0 || t.deps === null ? dt(t, $t) : dt(t, Ee);
}
function ao(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Rt) === 0 || (e.f & Wn) === 0 || (e.f ^= Wn, ao(
        /** @type {Derived} */
        e.deps
      ));
}
function oo(t, e, n) {
  (t.f & St) !== 0 ? e.add(t) : (t.f & Ee) !== 0 && n.add(t), ao(t.deps), dt(t, $t);
}
const ni = /* @__PURE__ */ new Set();
let G = null, Ct = null, Ut = [], Hi = null, fs = !1, Pr = !1;
var nr, rr, In, ir, zr, Hr, Fn, tn, sr, ze, cs, hs, lo;
const Js = class Js {
  constructor() {
    H(this, ze);
    ct(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ct(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ct(this, "previous", /* @__PURE__ */ new Map());
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
    H(this, In, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    H(this, ir, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, zr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, Hr, /* @__PURE__ */ new Set());
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
    H(this, tn, /* @__PURE__ */ new Map());
    ct(this, "is_fork", !1);
    H(this, sr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, ir) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, tn).has(e) || v(this, tn).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, tn).get(e);
    if (n) {
      v(this, tn).delete(e);
      for (var r of n.d)
        dt(r, St), $e(r);
      for (r of n.m)
        dt(r, Ee), $e(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Ut = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      xt(this, ze, cs).call(this, s, n, r);
    if (this.is_deferred()) {
      xt(this, ze, hs).call(this, r), xt(this, ze, hs).call(this, n);
      for (const [s, a] of v(this, tn))
        ho(s, a);
    } else {
      for (const s of v(this, nr)) s();
      v(this, nr).clear(), v(this, In) === 0 && xt(this, ze, lo).call(this), G = null, fa(r), fa(n), (i = v(this, zr)) == null || i.resolve();
    }
    Ct = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== Tt && !this.previous.has(e) && this.previous.set(e, n), (e.f & wn) === 0 && (this.current.set(e, e.v), Ct == null || Ct.set(e, e.v));
  }
  activate() {
    G = this, this.apply();
  }
  deactivate() {
    G === this && (G = null, Ct = null);
  }
  flush() {
    if (this.activate(), Ut.length > 0) {
      if (uo(), G !== null && G !== this)
        return;
    } else v(this, In) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, rr)) e(this);
    v(this, rr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    V(this, In, v(this, In) + 1), e && V(this, ir, v(this, ir) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    V(this, In, v(this, In) - 1), e && V(this, ir, v(this, ir) - 1), !v(this, sr) && (V(this, sr, !0), xn(() => {
      V(this, sr, !1), this.is_deferred() ? Ut.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Hr))
      v(this, Fn).delete(e), dt(e, St), $e(e);
    for (const e of v(this, Fn))
      dt(e, Ee), $e(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, nr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, rr).add(e);
  }
  settled() {
    return (v(this, zr) ?? V(this, zr, Ka())).promise;
  }
  static ensure() {
    if (G === null) {
      const e = G = new Js();
      ni.add(G), Pr || xn(() => {
        G === e && e.flush();
      });
    }
    return G;
  }
  apply() {
  }
};
nr = new WeakMap(), rr = new WeakMap(), In = new WeakMap(), ir = new WeakMap(), zr = new WeakMap(), Hr = new WeakMap(), Fn = new WeakMap(), tn = new WeakMap(), sr = new WeakMap(), ze = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cs = function(e, n, r) {
  e.f ^= $t;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Te | En)) !== 0, l = o && (a & $t) !== 0, u = l || (a & ee) !== 0 || v(this, tn).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= $t : s !== null && (a & (Or | Fi | ja)) !== 0 ? s.b.defer_effect(i) : (a & Or) !== 0 ? n.push(i) : Ur(i) && ((a & hn) !== 0 && v(this, Fn).add(i), vr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var d = i.parent;
    for (i = i.next; i === null && d !== null; )
      d === s && (s = null), i = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
hs = function(e) {
  for (var n = 0; n < e.length; n += 1)
    oo(e[n], v(this, Hr), v(this, Fn));
}, lo = function() {
  var i;
  if (ni.size > 1) {
    this.previous.clear();
    var e = Ct, n = !0;
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
        var r = Ut;
        Ut = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          fo(f, o, l, u);
        if (Ut.length > 0) {
          G = s, s.apply();
          for (const f of Ut)
            xt(i = s, ze, cs).call(i, f, [], []);
          s.deactivate();
        }
        Ut = r;
      }
    }
    G = null, Ct = e;
  }
  this.committed = !0, ni.delete(this);
};
let un = Js;
function rt(t) {
  var e = Pr;
  Pr = !0;
  try {
    for (var n; ; ) {
      if (xu(), Ut.length === 0 && (G == null || G.flush(), Ut.length === 0))
        return Hi = null, /** @type {T} */
        n;
      uo();
    }
  } finally {
    Pr = e;
  }
}
function uo() {
  fs = !0;
  var t = null;
  try {
    for (var e = 0; Ut.length > 0; ) {
      var n = un.ensure();
      if (e++ > 1e3) {
        var r, i;
        $u();
      }
      n.process(Ut), bn.clear();
    }
  } finally {
    Ut = [], fs = !1, Hi = null;
  }
}
function $u() {
  try {
    cu();
  } catch (t) {
    dr(t, Hi);
  }
}
let we = null;
function fa(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (ln | ee)) === 0 && Ur(r) && (we = /* @__PURE__ */ new Set(), vr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ko(r), (we == null ? void 0 : we.size) > 0)) {
        bn.clear();
        for (const i of we) {
          if ((i.f & (ln | ee)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            we.has(a) && (we.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ln | ee)) === 0 && vr(l);
          }
        }
        we.clear();
      }
    }
    we = null;
  }
}
function fo(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Rt) !== 0 ? fo(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Ms | hn)) !== 0 && (s & St) === 0 && co(i, e, r) && (dt(i, St), $e(
        /** @type {Effect} */
        i
      ));
    }
}
function co(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (fr.call(e, i))
        return !0;
      if ((i.f & Rt) !== 0 && co(
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
function $e(t) {
  for (var e = Hi = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === j && (n & hn) !== 0 && (n & Za) === 0)
      return;
    if ((n & (En | Te)) !== 0) {
      if ((n & $t) === 0) return;
      e.f ^= $t;
    }
  }
  Ut.push(e);
}
function ho(t, e) {
  if (!((t.f & Te) !== 0 && (t.f & $t) !== 0)) {
    (t.f & St) !== 0 ? e.d.push(t) : (t.f & Ee) !== 0 && e.m.push(t), dt(t, $t);
    for (var n = t.first; n !== null; )
      ho(n, e), n = n.next;
  }
}
function Au(t) {
  let e = 0, n = Un(0), r;
  return () => {
    Is() && (x(n), Ls(() => (e === 0 && (r = Xi(() => t(() => Dr(n)))), e += 1, () => {
      xn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Dr(n));
      });
    })));
  };
}
var Eu = cr | jn | Ja;
function Tu(t, e, n) {
  new Cu(t, e, n);
}
var Qt, Yr, De, Ln, Oe, ue, Xt, Ie, en, yn, qn, nn, ar, Vn, or, lr, rn, Pi, gt, po, vo, ds, fi, ci, ps;
class Cu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    H(this, gt);
    /** @type {Boundary | null} */
    ct(this, "parent");
    ct(this, "is_pending", !1);
    /** @type {TemplateNode} */
    H(this, Qt);
    /** @type {TemplateNode | null} */
    H(this, Yr, K ? X : null);
    /** @type {BoundaryProps} */
    H(this, De);
    /** @type {((anchor: Node) => void)} */
    H(this, Ln);
    /** @type {Effect} */
    H(this, Oe);
    /** @type {Effect | null} */
    H(this, ue, null);
    /** @type {Effect | null} */
    H(this, Xt, null);
    /** @type {Effect | null} */
    H(this, Ie, null);
    /** @type {DocumentFragment | null} */
    H(this, en, null);
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
    H(this, Pi, Au(() => (V(this, rn, Un(v(this, qn))), () => {
      V(this, rn, null);
    })));
    V(this, Qt, e), V(this, De, n), V(this, Ln, r), this.parent = /** @type {Effect} */
    j.b, this.is_pending = !!v(this, De).pending, V(this, Oe, qs(() => {
      if (j.b = this, K) {
        const s = v(this, Yr);
        qi(), /** @type {Comment} */
        s.nodeType === yr && /** @type {Comment} */
        s.data === Oi ? xt(this, gt, vo).call(this) : (xt(this, gt, po).call(this), v(this, nn) === 0 && (this.is_pending = !1));
      } else {
        var i = xt(this, gt, ds).call(this);
        try {
          V(this, ue, ce(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, nn) > 0 ? xt(this, gt, ci).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, yn)) == null || s.remove();
      };
    }, Eu)), K && V(this, Qt, X);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    oo(e, v(this, or), v(this, lr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, De).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    xt(this, gt, ps).call(this, e), V(this, qn, v(this, qn) + e), !(!v(this, rn) || v(this, ar)) && (V(this, ar, !0), xn(() => {
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
  error(e) {
    var n = v(this, De).onerror;
    let r = v(this, De).failed;
    if (v(this, Vn) || !n && !r)
      throw e;
    v(this, ue) && (qt(v(this, ue)), V(this, ue, null)), v(this, Xt) && (qt(v(this, Xt)), V(this, Xt, null)), v(this, Ie) && (qt(v(this, Ie)), V(this, Ie, null)), K && (Lt(
      /** @type {TemplateNode} */
      v(this, Yr)
    ), us(), Lt(Ai()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        mu();
        return;
      }
      i = !0, s && _u(), un.ensure(), V(this, qn, 0), v(this, Ie) !== null && Yn(v(this, Ie), () => {
        V(this, Ie, null);
      }), this.is_pending = this.has_pending_snippet(), V(this, ue, xt(this, gt, fi).call(this, () => (V(this, Vn, !1), ce(() => v(this, Ln).call(this, v(this, Qt)))))), v(this, nn) > 0 ? xt(this, gt, ci).call(this) : this.is_pending = !1;
    };
    xn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        dr(o, v(this, Oe) && v(this, Oe).parent);
      }
      r && V(this, Ie, xt(this, gt, fi).call(this, () => {
        un.ensure(), V(this, Vn, !0);
        try {
          return ce(() => {
            r(
              v(this, Qt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return dr(
            o,
            /** @type {Effect} */
            v(this, Oe).parent
          ), null;
        } finally {
          V(this, Vn, !1);
        }
      }));
    });
  }
}
Qt = new WeakMap(), Yr = new WeakMap(), De = new WeakMap(), Ln = new WeakMap(), Oe = new WeakMap(), ue = new WeakMap(), Xt = new WeakMap(), Ie = new WeakMap(), en = new WeakMap(), yn = new WeakMap(), qn = new WeakMap(), nn = new WeakMap(), ar = new WeakMap(), Vn = new WeakMap(), or = new WeakMap(), lr = new WeakMap(), rn = new WeakMap(), Pi = new WeakMap(), gt = new WeakSet(), po = function() {
  try {
    V(this, ue, ce(() => v(this, Ln).call(this, v(this, Qt))));
  } catch (e) {
    this.error(e);
  }
}, vo = function() {
  const e = v(this, De).pending;
  e && (V(this, Xt, ce(() => e(v(this, Qt)))), xn(() => {
    var n = xt(this, gt, ds).call(this);
    V(this, ue, xt(this, gt, fi).call(this, () => (un.ensure(), ce(() => v(this, Ln).call(this, n))))), v(this, nn) > 0 ? xt(this, gt, ci).call(this) : (Yn(
      /** @type {Effect} */
      v(this, Xt),
      () => {
        V(this, Xt, null);
      }
    ), this.is_pending = !1);
  }));
}, ds = function() {
  var e = v(this, Qt);
  return this.is_pending && (V(this, yn, ne()), v(this, Qt).before(v(this, yn)), e = v(this, yn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
fi = function(e) {
  var n = j, r = B, i = re;
  Ve(v(this, Oe)), pe(v(this, Oe)), hr(v(this, Oe).ctx);
  try {
    return e();
  } catch (s) {
    return so(s), null;
  } finally {
    Ve(n), pe(r), hr(i);
  }
}, ci = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, De).pending
  );
  v(this, ue) !== null && (V(this, en, document.createDocumentFragment()), v(this, en).append(
    /** @type {TemplateNode} */
    v(this, yn)
  ), Do(v(this, ue), v(this, en))), v(this, Xt) === null && V(this, Xt, ce(() => e(v(this, Qt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && xt(n = this.parent, gt, ps).call(n, e);
    return;
  }
  if (V(this, nn, v(this, nn) + e), v(this, nn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, or))
      dt(r, St), $e(r);
    for (const r of v(this, lr))
      dt(r, Ee), $e(r);
    v(this, or).clear(), v(this, lr).clear(), v(this, Xt) && Yn(v(this, Xt), () => {
      V(this, Xt, null);
    }), v(this, en) && (v(this, Qt).before(v(this, en)), V(this, en, null));
  }
};
function Ru(t, e, n, r) {
  const i = Yi;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = G, o = (
    /** @type {Effect} */
    j
  ), l = Su(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & ln) === 0 && dr(p, o);
    }
    a == null || a.deactivate(), vs();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ Nu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => dr(c, o));
  }
  u ? u.then(d) : d();
}
function Su() {
  var t = j, e = B, n = re, r = G;
  return function(s = !0) {
    Ve(t), pe(e), hr(n), s && (r == null || r.activate());
  };
}
function vs() {
  Ve(null), pe(null), hr(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(t) {
  var e = Rt | St, n = B !== null && (B.f & Rt) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return j !== null && (j.f |= jn), {
    ctx: re,
    deps: null,
    effects: null,
    equals: eo,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Tt
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Nu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    j
  );
  r === null && au();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Un(
    /** @type {V} */
    Tt
  ), o = !B, l = /* @__PURE__ */ new Map();
  return Vu(() => {
    var p;
    var u = Ka();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === G && f.committed && f.deactivate(), vs();
      });
    } catch (y) {
      u.reject(y), vs();
    }
    var f = (
      /** @type {Batch} */
      G
    );
    if (o) {
      var d = i.is_rendered();
      i.update_pending_count(1), f.increment(d), (p = l.get(f)) == null || p.reject(kn), l.delete(f), l.set(f, u);
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
      o && (i.update_pending_count(-1), f.decrement(d));
    };
    u.promise.then(c, (y) => c(null, y || "unknown"));
  }), Fu(() => {
    for (const u of l.values())
      u.reject(kn);
  }), new Promise((u) => {
    function f(d) {
      function c() {
        d === s ? u(a) : f(s);
      }
      d.then(c, c);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function vn(t) {
  const e = /* @__PURE__ */ Yi(t);
  return Oo(e), e;
}
// @__NO_SIDE_EFFECTS__
function go(t) {
  const e = /* @__PURE__ */ Yi(t);
  return e.equals = no, e;
}
function ku(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      qt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Mu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Rt) === 0)
      return (e.f & ln) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ds(t) {
  var e, n = j;
  Ve(Mu(t));
  try {
    t.f &= ~Wn, ku(t), e = qo(t);
  } finally {
    Ve(n);
  }
  return e;
}
function _o(t) {
  var e = Ds(t);
  if (!t.equals(e) && (t.wv = Fo(), (!(G != null && G.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    dt(t, $t);
    return;
  }
  An || (Ct !== null ? (Is() || G != null && G.is_fork) && Ct.set(t, e) : Ps(t));
}
function Pu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(kn), r.teardown = Ql, r.ac = null, Ir(r, 0), Vs(r));
}
function mo(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && vr(e);
}
let gs = /* @__PURE__ */ new Set();
const bn = /* @__PURE__ */ new Map();
let yo = !1;
function Un(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: eo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function bt(t, e) {
  const n = Un(t);
  return Oo(n), n;
}
// @__NO_SIDE_EFFECTS__
function wo(t, e = !1, n = !0) {
  const r = Un(t);
  return e || (r.equals = no), r;
}
function ht(t, e, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ae || (B.f & ua) !== 0) && ro() && (B.f & (Rt | hn | Ms | ua)) !== 0 && (de === null || !fr.call(de, t)) && gu();
  let r = n ? Pn(e) : e;
  return pr(t, r);
}
function pr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    An ? bn.set(t, e) : bn.set(t, n), t.v = e;
    var r = un.ensure();
    if (r.capture(t, n), (t.f & Rt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & St) !== 0 && Ds(i), Ps(i);
    }
    t.wv = Fo(), xo(t, St), j !== null && (j.f & $t) !== 0 && (j.f & (Te | En)) === 0 && (le === null ? Yu([t]) : le.push(t)), !r.is_fork && gs.size > 0 && !yo && Du();
  }
  return e;
}
function Du() {
  yo = !1;
  for (const t of gs)
    (t.f & $t) !== 0 && dt(t, Ee), Ur(t) && vr(t);
  gs.clear();
}
function Dr(t) {
  ht(t, t.v + 1);
}
function xo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & St) === 0;
      if (o && dt(s, e), (a & Rt) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Ct == null || Ct.delete(l), (a & Wn) === 0 && (a & he && (s.f |= Wn), xo(l, Ee));
      } else o && ((a & hn) !== 0 && we !== null && we.add(
        /** @type {Effect} */
        s
      ), $e(
        /** @type {Effect} */
        s
      ));
    }
}
function Pn(t) {
  if (typeof t != "object" || t === null || Mr in t)
    return t;
  const e = Ga(t);
  if (e !== Jl && e !== Zl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ua(t), i = /* @__PURE__ */ bt(0), s = Bn, a = (o) => {
    if (Bn === s)
      return o();
    var l = B, u = Bn;
    pe(null), da(s);
    var f = o();
    return pe(l), da(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ bt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && pu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var d = /* @__PURE__ */ bt(u.value);
          return n.set(l, d), d;
        }) : ht(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ bt(Tt));
            n.set(l, f), Dr(i);
          }
        } else
          ht(u, Tt), Dr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Mr)
          return t;
        var f = n.get(l), d = l in o;
        if (f === void 0 && (!d || (p = Hn(o, l)) != null && p.writable) && (f = a(() => {
          var y = Pn(d ? o[l] : Tt), b = /* @__PURE__ */ bt(y);
          return b;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === Tt ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var d = n.get(l), c = d == null ? void 0 : d.v;
          if (d !== void 0 && c !== Tt)
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
        if (l === Mr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Tt || Reflect.has(o, l);
        if (u !== void 0 || j !== null && (!f || (c = Hn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? Pn(o[l]) : Tt, y = /* @__PURE__ */ bt(p);
            return y;
          }), n.set(l, u));
          var d = x(u);
          if (d === Tt)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var M;
        var d = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var y = n.get(p + "");
            y !== void 0 ? ht(y, Tt) : p in o && (y = a(() => /* @__PURE__ */ bt(Tt)), n.set(p + "", y));
          }
        if (d === void 0)
          (!c || (M = Hn(o, l)) != null && M.writable) && (d = a(() => /* @__PURE__ */ bt(void 0)), ht(d, Pn(u)), n.set(l, d));
        else {
          c = d.v !== Tt;
          var b = a(() => Pn(u));
          ht(d, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= $.v && ht($, D + 1);
          }
          Dr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var c = n.get(d);
          return c === void 0 || c.v !== Tt;
        });
        for (var [u, f] of n)
          f.v !== Tt && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        vu();
      }
    }
  );
}
var ca, bo, $o, Ao;
function _s() {
  if (ca === void 0) {
    ca = window, bo = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    $o = Hn(e, "firstChild").get, Ao = Hn(e, "nextSibling").get, la(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), la(n) && (n.__t = void 0);
  }
}
function ne(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function fn(t) {
  return (
    /** @type {TemplateNode | null} */
    $o.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function He(t) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(t)
  );
}
function Bt(t, e) {
  if (!K)
    return /* @__PURE__ */ fn(t);
  var n = /* @__PURE__ */ fn(X);
  if (n === null)
    n = X.appendChild(ne());
  else if (e && n.nodeType !== Wr) {
    var r = ne();
    return n == null || n.before(r), Lt(r), r;
  }
  return e && Bi(
    /** @type {Text} */
    n
  ), Lt(n), n;
}
function _n(t, e = !1) {
  if (!K) {
    var n = /* @__PURE__ */ fn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ He(n) : n;
  }
  if (e) {
    if ((X == null ? void 0 : X.nodeType) !== Wr) {
      var r = ne();
      return X == null || X.before(r), Lt(r), r;
    }
    Bi(
      /** @type {Text} */
      X
    );
  }
  return X;
}
function Jt(t, e = 1, n = !1) {
  let r = K ? X : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ He(r);
  if (!K)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Wr) {
      var s = ne();
      return r === null ? i == null || i.after(s) : r.before(s), Lt(s), s;
    }
    Bi(
      /** @type {Text} */
      r
    );
  }
  return Lt(r), r;
}
function Eo(t) {
  t.textContent = "";
}
function To() {
  return !1;
}
function Os(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Wa, t, void 0)
  );
}
function Bi(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Wr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function Co(t) {
  var e = B, n = j;
  pe(null), Ve(null);
  try {
    return t();
  } finally {
    pe(e), Ve(n);
  }
}
function Ou(t) {
  j === null && (B === null && fu(), uu()), An && lu();
}
function Iu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ye(t, e, n) {
  var r = j;
  r !== null && (r.f & ee) !== 0 && (t |= ee);
  var i = {
    ctx: re,
    deps: null,
    nodes: null,
    f: t | St | he,
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
      vr(i);
    } catch (o) {
      throw qt(i), o;
    }
  else e !== null && $e(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & jn) === 0 && (s = s.first, (t & hn) !== 0 && (t & cr) !== 0 && s !== null && (s.f |= cr)), s !== null && (s.parent = r, r !== null && Iu(s, r), B !== null && (B.f & Rt) !== 0 && (t & En) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Is() {
  return B !== null && !Ae;
}
function Fu(t) {
  const e = Ye(Fi, null, !1);
  return dt(e, $t), e.teardown = t, e;
}
function Fs(t) {
  Ou();
  var e = (
    /** @type {Effect} */
    j.f
  ), n = !B && (e & Te) !== 0 && (e & mr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ro(t);
}
function Ro(t) {
  return Ye(Or | nu, t, !1);
}
function Lu(t) {
  un.ensure();
  const e = Ye(En | jn, t, !0);
  return () => {
    qt(e);
  };
}
function qu(t) {
  un.ensure();
  const e = Ye(En | jn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yn(e, () => {
      qt(e), r(void 0);
    }) : (qt(e), r(void 0));
  });
}
function So(t) {
  return Ye(Or, t, !1);
}
function Vu(t) {
  return Ye(Ms | jn, t, !0);
}
function Ls(t, e = 0) {
  return Ye(Fi | e, t, !0);
}
function Qe(t, e = [], n = [], r = []) {
  Ru(r, e, n, (i) => {
    Ye(Fi, () => t(...i.map(x)), !0);
  });
}
function qs(t, e = 0) {
  var n = Ye(hn | e, t, !0);
  return n;
}
function ce(t) {
  return Ye(Te | jn, t, !0);
}
function No(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = An, r = B;
    ha(!0), pe(null);
    try {
      e.call(null);
    } finally {
      ha(n), pe(r);
    }
  }
}
function Vs(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Co(() => {
      i.abort(kn);
    });
    var r = n.next;
    (n.f & En) !== 0 ? n.parent = null : qt(n, e), n = r;
  }
}
function zu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Te) === 0 && qt(e), e = n;
  }
}
function qt(t, e = !0) {
  var n = !1;
  (e || (t.f & Za) !== 0) && t.nodes !== null && t.nodes.end !== null && (Hu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Vs(t, e && !n), Ir(t, 0), dt(t, ln);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  No(t);
  var i = t.parent;
  i !== null && i.first !== null && ko(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Hu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ He(t);
    t.remove(), t = n;
  }
}
function ko(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Yn(t, e, n = !0) {
  var r = [];
  Mo(t, r, !0);
  var i = () => {
    n && qt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Mo(t, e, n) {
  if ((t.f & ee) === 0) {
    t.f ^= ee;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & cr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Te) !== 0 && (t.f & hn) !== 0;
      Mo(i, e, a ? n : !1), i = s;
    }
  }
}
function zs(t) {
  Po(t, !0);
}
function Po(t, e) {
  if ((t.f & ee) !== 0) {
    t.f ^= ee, (t.f & $t) === 0 && (dt(t, St), $e(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & cr) !== 0 || (n.f & Te) !== 0;
      Po(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Do(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ He(n);
      e.append(n), n = i;
    }
}
let hi = !1, An = !1;
function ha(t) {
  An = t;
}
let B = null, Ae = !1;
function pe(t) {
  B = t;
}
let j = null;
function Ve(t) {
  j = t;
}
let de = null;
function Oo(t) {
  B !== null && (de === null ? de = [t] : de.push(t));
}
let Gt = null, Zt = 0, le = null;
function Yu(t) {
  le = t;
}
let Io = 1, Dn = 0, Bn = Dn;
function da(t) {
  Bn = t;
}
function Fo() {
  return ++Io;
}
function Ur(t) {
  var e = t.f;
  if ((e & St) !== 0)
    return !0;
  if (e & Rt && (t.f &= ~Wn), (e & Ee) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Ur(
        /** @type {Derived} */
        s
      ) && _o(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & he) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ct === null && dt(t, $t);
  }
  return !1;
}
function Lo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(de !== null && fr.call(de, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Rt) !== 0 ? Lo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? dt(s, St) : (s.f & $t) !== 0 && dt(s, Ee), $e(
        /** @type {Effect} */
        s
      ));
    }
}
function qo(t) {
  var b;
  var e = Gt, n = Zt, r = le, i = B, s = de, a = re, o = Ae, l = Bn, u = t.f;
  Gt = /** @type {null | Value[]} */
  null, Zt = 0, le = null, B = (u & (Te | En)) === 0 ? t : null, de = null, hr(t.ctx), Ae = !1, Bn = ++Dn, t.ac !== null && (Co(() => {
    t.ac.abort(kn);
  }), t.ac = null);
  try {
    t.f |= ls;
    var f = (
      /** @type {Function} */
      t.fn
    ), d = f();
    t.f |= mr;
    var c = t.deps, p = G == null ? void 0 : G.is_fork;
    if (Gt !== null) {
      var y;
      if (p || Ir(t, Zt), c !== null && Zt > 0)
        for (c.length = Zt + Gt.length, y = 0; y < Gt.length; y++)
          c[Zt + y] = Gt[y];
      else
        t.deps = c = Gt;
      if (Is() && (t.f & he) !== 0)
        for (y = Zt; y < c.length; y++)
          ((b = c[y]).reactions ?? (b.reactions = [])).push(t);
    } else !p && c !== null && Zt < c.length && (Ir(t, Zt), c.length = Zt);
    if (ro() && le !== null && !Ae && c !== null && (t.f & (Rt | Ee | St)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      le.length; y++)
        Lo(
          le[y],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (Dn++, i.deps !== null)
        for (let m = 0; m < n; m += 1)
          i.deps[m].rv = Dn;
      if (e !== null)
        for (const m of e)
          m.rv = Dn;
      le !== null && (r === null ? r = le : r.push(.../** @type {Source[]} */
      le));
    }
    return (t.f & wn) !== 0 && (t.f ^= wn), d;
  } catch (m) {
    return so(m);
  } finally {
    t.f ^= ls, Gt = e, Zt = n, le = r, B = i, de = s, hr(a), Ae = o, Bn = l;
  }
}
function Bu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Kl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Rt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Gt === null || !fr.call(Gt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & he) !== 0 && (s.f ^= he, s.f &= ~Wn), Ps(s), Pu(s), Ir(s, 0);
  }
}
function Ir(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Bu(t, n[r]);
}
function vr(t) {
  var e = t.f;
  if ((e & ln) === 0) {
    dt(t, $t);
    var n = j, r = hi;
    j = t, hi = !0;
    try {
      (e & (hn | ja)) !== 0 ? zu(t) : Vs(t), No(t);
      var i = qo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Io;
      var s;
      os && wu && (t.f & St) !== 0 && t.deps;
    } finally {
      hi = r, j = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & Rt) !== 0;
  if (B !== null && !Ae) {
    var r = j !== null && (j.f & ln) !== 0;
    if (!r && (de === null || !fr.call(de, t))) {
      var i = B.deps;
      if ((B.f & ls) !== 0)
        t.rv < Dn && (t.rv = Dn, Gt === null && i !== null && i[Zt] === t ? Zt++ : Gt === null ? Gt = [t] : Gt.push(t));
      else {
        (B.deps ?? (B.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [B] : fr.call(s, B) || s.push(B);
      }
    }
  }
  if (An && bn.has(t))
    return bn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (An) {
      var o = a.v;
      return ((a.f & $t) === 0 && a.reactions !== null || zo(a)) && (o = Ds(a)), bn.set(a, o), o;
    }
    var l = (a.f & he) === 0 && !Ae && B !== null && (hi || (B.f & he) !== 0), u = (a.f & mr) === 0;
    Ur(a) && (l && (a.f |= he), _o(a)), l && !u && (mo(a), Vo(a));
  }
  if (Ct != null && Ct.has(t))
    return Ct.get(t);
  if ((t.f & wn) !== 0)
    throw t.v;
  return t.v;
}
function Vo(t) {
  if (t.f |= he, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Rt) !== 0 && (e.f & he) === 0 && (mo(
        /** @type {Derived} */
        e
      ), Vo(
        /** @type {Derived} */
        e
      ));
}
function zo(t) {
  if (t.v === Tt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (bn.has(e) || (e.f & Rt) !== 0 && zo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Xi(t) {
  var e = Ae;
  try {
    return Ae = !0, t();
  } finally {
    Ae = e;
  }
}
const Ho = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Xu(t) {
  for (var e = 0; e < t.length; e++)
    Ho.add(t[e]);
  for (var n of ms)
    n(t);
}
let pa = null;
function va(t) {
  var m;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((m = t.composedPath) == null ? void 0 : m.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  pa = t;
  var a = 0, o = pa === t && t.__root;
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
    $i(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = B, d = j;
    pe(null), Ve(null);
    try {
      for (var c, p = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + r];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && b.call(s, t);
        } catch ($) {
          c ? p.push($) : c = $;
        }
        if (t.cancelBubble || y === e || y === null)
          break;
        s = y;
      }
      if (c) {
        for (let $ of p)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, pe(f), Ve(d);
    }
  }
}
var Ya, Ba;
const es = (Ba = (Ya = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ya.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ba.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Wu(t) {
  return (
    /** @type {string} */
    (es == null ? void 0 : es.createHTML(t)) ?? t
  );
}
function Yo(t, e = !1) {
  var n = Os("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Wu(t) : t, n.content;
}
function $n(t, e) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Be(t, e) {
  var n = (e & Ul) !== 0, r = (e & Gl) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (K)
      return $n(X, null), X;
    i === void 0 && (i = Yo(s ? t : "<!>" + t, !0), n || (i = /** @type {TemplateNode} */
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
function Uu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (K)
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
function Gu(t, e) {
  return /* @__PURE__ */ Uu(t, e, "svg");
}
function ga(t = "") {
  if (!K) {
    var e = ne(t + "");
    return $n(e, e), e;
  }
  var n = X;
  return n.nodeType !== Wr ? (n.before(n = ne()), Lt(n)) : Bi(
    /** @type {Text} */
    n
  ), $n(n, n), n;
}
function Wt(t, e) {
  if (K) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((n.f & mr) === 0 || n.nodes.end === null) && (n.nodes.end = X), qi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Ku = ["touchstart", "touchmove"];
function ju(t) {
  return Ku.includes(t);
}
function mn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Bo(t, e) {
  return Xo(t, e);
}
function Ju(t, e) {
  _s(), e.intro = e.intro ?? !1;
  const n = e.target, r = K, i = X;
  try {
    for (var s = /* @__PURE__ */ fn(n); s && (s.nodeType !== yr || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ He(s);
    if (!s)
      throw ur;
    on(!0), Lt(
      /** @type {Comment} */
      s
    );
    const a = Xo(t, { ...e, anchor: s });
    return on(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ur && console.warn("Failed to hydrate: ", a), e.recover === !1 && hu(), _s(), Eo(n), on(!1), Bo(t, e);
  } finally {
    on(r), Lt(i);
  }
}
const ri = /* @__PURE__ */ new Map();
function Xo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _s();
  var o = /* @__PURE__ */ new Set(), l = (d) => {
    for (var c = 0; c < d.length; c++) {
      var p = d[c];
      if (!o.has(p)) {
        o.add(p);
        var y = ju(p);
        for (const $ of [e, document]) {
          var b = ri.get($);
          b === void 0 && (b = /* @__PURE__ */ new Map(), ri.set($, b));
          var m = b.get(p);
          m === void 0 ? ($.addEventListener(p, va, { passive: y }), b.set(p, 1)) : b.set(p, m + 1);
        }
      }
    }
  };
  l(Ii(Ho)), ms.add(l);
  var u = void 0, f = qu(() => {
    var d = n ?? e.appendChild(ne());
    return Tu(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        Vi({});
        var p = (
          /** @type {ComponentContext} */
          re
        );
        if (s && (p.c = s), i && (r.$$events = i), K && $n(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, K && (j.nodes.end = X, X === null || X.nodeType !== yr || /** @type {Comment} */
        X.data !== ks))
          throw Li(), ur;
        zi();
      }
    ), () => {
      var b;
      for (var c of o)
        for (const m of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ri.get(m)
          ), y = (
            /** @type {number} */
            p.get(c)
          );
          --y == 0 ? (m.removeEventListener(c, va), p.delete(c), p.size === 0 && ri.delete(m)) : p.set(c, y);
        }
      ms.delete(l), d !== n && ((b = d.parentNode) == null || b.removeChild(d));
    };
  });
  return ys.set(u, f), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function Zu(t, e) {
  const n = ys.get(t);
  return n ? (ys.delete(t), n(e)) : Promise.resolve();
}
var xe, Fe, te, zn, Br, Xr, Di;
class Qu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    ct(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, xe, /* @__PURE__ */ new Map());
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
    H(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, zn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, Br, !0);
    H(this, Xr, () => {
      var e = (
        /** @type {Batch} */
        G
      );
      if (v(this, xe).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, xe).get(e)
        ), r = v(this, Fe).get(n);
        if (r)
          zs(r), v(this, zn).delete(n);
        else {
          var i = v(this, te).get(n);
          i && (v(this, Fe).set(n, i.effect), v(this, te).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, xe)) {
          if (v(this, xe).delete(s), s === e)
            break;
          const o = v(this, te).get(a);
          o && (qt(o.effect), v(this, te).delete(a));
        }
        for (const [s, a] of v(this, Fe)) {
          if (s === n || v(this, zn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, xe).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Do(a, u), u.append(ne()), v(this, te).set(s, { effect: a, fragment: u });
            } else
              qt(a);
            v(this, zn).delete(s), v(this, Fe).delete(s);
          };
          v(this, Br) || !r ? (v(this, zn).add(s), Yn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, Di, (e) => {
      v(this, xe).delete(e);
      const n = Array.from(v(this, xe).values());
      for (const [r, i] of v(this, te))
        n.includes(r) || (qt(i.effect), v(this, te).delete(r));
    });
    this.anchor = e, V(this, Br, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      G
    ), i = To();
    if (n && !v(this, Fe).has(e) && !v(this, te).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = ne();
        s.append(a), v(this, te).set(e, {
          effect: ce(() => n(a)),
          fragment: s
        });
      } else
        v(this, Fe).set(
          e,
          ce(() => n(this.anchor))
        );
    if (v(this, xe).set(r, e), i) {
      for (const [o, l] of v(this, Fe))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, te))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Xr)), r.ondiscard(v(this, Di));
    } else
      K && (this.anchor = X), v(this, Xr).call(this);
  }
}
xe = new WeakMap(), Fe = new WeakMap(), te = new WeakMap(), zn = new WeakMap(), Br = new WeakMap(), Xr = new WeakMap(), Di = new WeakMap();
function tf(t) {
  re === null && su(), Fs(() => {
    const e = Xi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Qn(t, e, n = !1) {
  K && qi();
  var r = new Qu(t), i = n ? cr : 0;
  function s(a, o) {
    if (K) {
      const f = to(t);
      var l;
      if (f === Ns ? l = 0 : f === Oi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ai();
        Lt(u), r.anchor = u, on(!1), r.ensure(a, o), on(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  qs(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function di(t, e) {
  return e;
}
function ef(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let d = e[o];
    Yn(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            ws(Ii(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      Eo(f), f.append(u), t.items.clear();
    }
    ws(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ws(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    qt(t[n], e);
}
var _a;
function pi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & Xa) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    a = K ? Lt(/* @__PURE__ */ fn(u)) : u.appendChild(ne());
  }
  K && qi();
  var f = null, d = /* @__PURE__ */ go(() => {
    var $ = n();
    return Ua($) ? $ : $ == null ? [] : Ii($);
  }), c, p = !0;
  function y() {
    m.fallback = f, nf(m, c, a, e, r), f !== null && (c.length === 0 ? (f.f & an) === 0 ? zs(f) : (f.f ^= an, Rr(f, null, a)) : Yn(f, () => {
      f = null;
    }));
  }
  var b = qs(() => {
    c = /** @type {V[]} */
    x(d);
    var $ = c.length;
    let D = !1;
    if (K) {
      var M = to(a) === Oi;
      M !== ($ === 0) && (a = Ai(), Lt(a), on(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), F = (
      /** @type {Batch} */
      G
    ), L = To(), W = 0; W < $; W += 1) {
      K && X.nodeType === yr && /** @type {Comment} */
      X.data === ks && (a = /** @type {Comment} */
      X, D = !0, on(!1));
      var ot = c[W], Z = r(ot, W), U = p ? null : o.get(Z);
      U ? (U.v && pr(U.v, ot), U.i && pr(U.i, W), L && F.unskip_effect(U.e)) : (U = rf(
        o,
        p ? a : _a ?? (_a = ne()),
        ot,
        Z,
        W,
        i,
        e,
        n
      ), p || (U.e.f |= an), o.set(Z, U)), S.add(Z);
    }
    if ($ === 0 && s && !f && (p ? f = ce(() => s(a)) : (f = ce(() => s(_a ?? (_a = ne()))), f.f |= an)), $ > S.size && ou(), K && $ > 0 && Lt(Ai()), !p)
      if (L) {
        for (const [lt, ut] of o)
          S.has(lt) || F.skip_effect(ut.e);
        F.oncommit(y), F.ondiscard(() => {
        });
      } else
        y();
    D && on(!0), x(d);
  }), m = { effect: b, items: o, outrogroups: null, fallback: f };
  p = !1, K && (a = X);
}
function Tr(t) {
  for (; t !== null && (t.f & Te) === 0; )
    t = t.next;
  return t;
}
function nf(t, e, n, r, i) {
  var U, lt, ut, O, I, Nt, se, mt, yt;
  var s = (r & zl) !== 0, a = e.length, o = t.items, l = Tr(t.effect.first), u, f = null, d, c = [], p = [], y, b, m, $;
  if (s)
    for ($ = 0; $ < a; $ += 1)
      y = e[$], b = i(y, $), m = /** @type {EachItem} */
      o.get(b).e, (m.f & an) === 0 && ((lt = (U = m.nodes) == null ? void 0 : U.a) == null || lt.measure(), (d ?? (d = /* @__PURE__ */ new Set())).add(m));
  for ($ = 0; $ < a; $ += 1) {
    if (y = e[$], b = i(y, $), m = /** @type {EachItem} */
    o.get(b).e, t.outrogroups !== null)
      for (const Q of t.outrogroups)
        Q.pending.delete(m), Q.done.delete(m);
    if ((m.f & an) !== 0)
      if (m.f ^= an, m === l)
        Rr(m, null, n);
      else {
        var D = f ? f.next : l;
        m === t.effect.last && (t.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), gn(t, f, m), gn(t, m, D), Rr(m, D, n), f = m, c = [], p = [], l = Tr(f.next);
        continue;
      }
    if ((m.f & ee) !== 0 && (zs(m), s && ((O = (ut = m.nodes) == null ? void 0 : ut.a) == null || O.unfix(), (d ?? (d = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (c.length < p.length) {
          var M = p[0], S;
          f = M.prev;
          var F = c[0], L = c[c.length - 1];
          for (S = 0; S < c.length; S += 1)
            Rr(c[S], M, n);
          for (S = 0; S < p.length; S += 1)
            u.delete(p[S]);
          gn(t, F.prev, L.next), gn(t, f, F), gn(t, L, M), l = M, f = L, $ -= 1, c = [], p = [];
        } else
          u.delete(m), Rr(m, l, n), gn(t, m.prev, m.next), gn(t, m, f === null ? t.effect.first : f.next), gn(t, f, m), f = m;
        continue;
      }
      for (c = [], p = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), p.push(l), l = Tr(l.next);
      if (l === null)
        continue;
    }
    (m.f & an) === 0 && c.push(m), f = m, l = Tr(m.next);
  }
  if (t.outrogroups !== null) {
    for (const Q of t.outrogroups)
      Q.pending.size === 0 && (ws(Ii(Q.done)), (I = t.outrogroups) == null || I.delete(Q));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var W = [];
    if (u !== void 0)
      for (m of u)
        (m.f & ee) === 0 && W.push(m);
    for (; l !== null; )
      (l.f & ee) === 0 && l !== t.fallback && W.push(l), l = Tr(l.next);
    var ot = W.length;
    if (ot > 0) {
      var Z = (r & Xa) !== 0 && a === 0 ? n : null;
      if (s) {
        for ($ = 0; $ < ot; $ += 1)
          (se = (Nt = W[$].nodes) == null ? void 0 : Nt.a) == null || se.measure();
        for ($ = 0; $ < ot; $ += 1)
          (yt = (mt = W[$].nodes) == null ? void 0 : mt.a) == null || yt.fix();
      }
      ef(t, W, Z);
    }
  }
  s && xn(() => {
    var Q, kt;
    if (d !== void 0)
      for (m of d)
        (kt = (Q = m.nodes) == null ? void 0 : Q.a) == null || kt.apply();
  });
}
function rf(t, e, n, r, i, s, a, o) {
  var l = (a & ql) !== 0 ? (a & Hl) === 0 ? /* @__PURE__ */ wo(n, !1, !1) : Un(n) : null, u = (a & Vl) !== 0 ? Un(i) : null;
  return {
    v: l,
    i: u,
    e: ce(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Rr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & an) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function gn(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Hs(t, e) {
  So(() => {
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
      const i = Os("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
const ma = [...` 	
\r\f \v\uFEFF`];
function sf(t, e, n) {
  var r = t == null ? "" : "" + t;
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
function ya(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function af(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += ya(r)), i && (n += ya(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function ii(t, e, n, r, i, s) {
  var a = t.__className;
  if (K || a !== n || a === void 0) {
    var o = sf(n, r, s);
    (!K || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function ns(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function wa(t, e, n, r) {
  var i = t.__style;
  if (K || i !== e) {
    var s = af(e, r);
    (!K || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (ns(t, n == null ? void 0 : n[0], r[0]), ns(t, n == null ? void 0 : n[1], r[1], "important")) : ns(t, n, r));
  return r;
}
const of = Symbol("is custom element"), lf = Symbol("is html"), uf = iu ? "link" : "LINK";
function xa(t, e, n, r) {
  var i = ff(t);
  K && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === uf) || i[e] !== (i[e] = n) && (e === "loading" && (t[ru] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && cf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function ff(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [of]: t.nodeName.includes("-"),
      [lf]: t.namespaceURI === Wa
    })
  );
}
var ba = /* @__PURE__ */ new Map();
function cf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = ba.get(e);
  if (n) return n;
  ba.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = jl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ga(i);
  }
  return n;
}
function $a(t, e) {
  return t === e || (t == null ? void 0 : t[Mr]) === e;
}
function vi(t = {}, e, n, r) {
  return So(() => {
    var i, s;
    return Ls(() => {
      i = s, s = [], Xi(() => {
        t !== n(...s) && (e(t, ...s), i && $a(n(...i), t) && e(null, ...i));
      });
    }), () => {
      xn(() => {
        s && $a(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let si = !1;
function hf(t) {
  var e = si;
  try {
    return si = !1, [t(), si];
  } finally {
    si = e;
  }
}
function at(t, e, n, r) {
  var D;
  var i = (n & Xl) !== 0, s = (n & Wl) !== 0, a = (
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
    var f = Mr in t || Qa in t;
    u = ((D = Hn(t, e)) == null ? void 0 : D.set) ?? (f && e in t ? (M) => t[e] = M : void 0);
  }
  var d, c = !1;
  i ? [d, c] = hf(() => (
    /** @type {V} */
    t[e]
  )) : d = /** @type {V} */
  t[e], d === void 0 && r !== void 0 && (d = l(), u && (du(), u(d)));
  var p;
  if (p = () => {
    var M = (
      /** @type {V} */
      t[e]
    );
    return M === void 0 ? l() : (o = !0, M);
  }, (n & Bl) === 0)
    return p;
  if (u) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, S) {
        return arguments.length > 0 ? ((!S || y || c) && u(S ? p() : M), M) : p();
      })
    );
  }
  var b = !1, m = ((n & Yl) !== 0 ? Yi : go)(() => (b = !1, p()));
  i && x(m);
  var $ = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(M, S) {
      if (arguments.length > 0) {
        const F = S ? x(m) : i ? Pn(M) : M;
        return ht(m, F), b = !0, a !== void 0 && (a = F), M;
      }
      return An && b || ($.f & ln) !== 0 ? m.v : x(m);
    })
  );
}
function df(t) {
  return new pf(t);
}
var sn, fe;
class pf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    H(this, sn);
    /** @type {Record<string, any>} */
    H(this, fe);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ wo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Qa ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ht(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    V(this, fe, (e.hydrate ? Ju : Bo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && rt(), V(this, sn, i.$$events);
    for (const a of Object.keys(v(this, fe)))
      a === "$set" || a === "$destroy" || a === "$on" || $i(this, a, {
        get() {
          return v(this, fe)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, fe)[a] = o;
        },
        enumerable: !0
      });
    v(this, fe).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, fe).$destroy = () => {
      Zu(v(this, fe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, fe).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, sn)[e] = v(this, sn)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, sn)[e].push(r), () => {
      v(this, sn)[e] = v(this, sn)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, fe).$destroy();
  }
}
sn = new WeakMap(), fe = new WeakMap();
let Wo;
typeof HTMLElement == "function" && (Wo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    ct(this, "$$ctor");
    /** Slots */
    ct(this, "$$s");
    /** @type {any} The Svelte component instance */
    ct(this, "$$c");
    /** Whether or not the custom element is connected */
    ct(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ct(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ct(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ct(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ct(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ct(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ct(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ct(this, "$$shadowRoot", null);
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
          const o = Os("slot");
          s !== "default" && (o.name = s), Wt(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = vf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = gi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = df({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Lu(() => {
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
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = gi(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return bi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function gi(t, e, n, r) {
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
function vf(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Ys(t, e, n, r, i, s) {
  let a = class extends Wo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return bi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return bi(e).forEach((o) => {
    $i(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var d;
        l = gi(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (d = Hn(u, o)) == null ? void 0 : d.get;
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
  }), t.element = /** @type {any} */
  a, a;
}
var gf = { value: () => {
} };
function Uo() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _i(n);
}
function _i(t) {
  this._ = t;
}
function _f(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
_i.prototype = Uo.prototype = {
  constructor: _i,
  on: function(t, e) {
    var n = this._, r = _f(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = mf(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = Aa(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Aa(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new _i(t);
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
function mf(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Aa(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = gf, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var xs = "http://www.w3.org/1999/xhtml";
const Ea = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Ea.hasOwnProperty(e) ? { space: Ea[e], local: t } : t;
}
function yf(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === xs && e.documentElement.namespaceURI === xs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function wf(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Go(t) {
  var e = Wi(t);
  return (e.local ? wf : yf)(e);
}
function xf() {
}
function Bs(t) {
  return t == null ? xf : function() {
    return this.querySelector(t);
  };
}
function bf(t) {
  typeof t != "function" && (t = Bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ie(r, this._parents);
}
function $f(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Af() {
  return [];
}
function Ko(t) {
  return t == null ? Af : function() {
    return this.querySelectorAll(t);
  };
}
function Ef(t) {
  return function() {
    return $f(t.apply(this, arguments));
  };
}
function Tf(t) {
  typeof t == "function" ? t = Ef(t) : t = Ko(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new ie(r, i);
}
function jo(t) {
  return function() {
    return this.matches(t);
  };
}
function Jo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Cf = Array.prototype.find;
function Rf(t) {
  return function() {
    return Cf.call(this.children, t);
  };
}
function Sf() {
  return this.firstElementChild;
}
function Nf(t) {
  return this.select(t == null ? Sf : Rf(typeof t == "function" ? t : Jo(t)));
}
var kf = Array.prototype.filter;
function Mf() {
  return Array.from(this.children);
}
function Pf(t) {
  return function() {
    return kf.call(this.children, t);
  };
}
function Df(t) {
  return this.selectAll(t == null ? Mf : Pf(typeof t == "function" ? t : Jo(t)));
}
function Of(t) {
  typeof t != "function" && (t = jo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new ie(r, this._parents);
}
function Zo(t) {
  return new Array(t.length);
}
function If() {
  return new ie(this._enter || this._groups.map(Zo), this._parents);
}
function Ei(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ei.prototype = {
  constructor: Ei,
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
function Ff(t) {
  return function() {
    return t;
  };
}
function Lf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ei(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function qf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, d = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < d; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new Ei(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function Vf(t) {
  return t.__data__;
}
function zf(t, e) {
  if (!arguments.length) return Array.from(this, Vf);
  var n = e ? qf : Lf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ff(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], d = i[u], c = d.length, p = Hf(t.call(f, f && f.__data__, u, r)), y = p.length, b = o[u] = new Array(y), m = a[u] = new Array(y), $ = l[u] = new Array(c);
    n(f, d, b, m, $, p, e);
    for (var D = 0, M = 0, S, F; D < y; ++D)
      if (S = b[D]) {
        for (D >= M && (M = D + 1); !(F = m[M]) && ++M < y; ) ;
        S._next = F || null;
      }
  }
  return a = new ie(a, r), a._enter = o, a._exit = l, a;
}
function Hf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Yf() {
  return new ie(this._exit || this._groups.map(Zo), this._parents);
}
function Bf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Xf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], d = u.length, c = o[l] = new Array(d), p, y = 0; y < d; ++y)
      (p = u[y] || f[y]) && (c[y] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new ie(o, this._parents);
}
function Wf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Uf(t) {
  t || (t = Gf);
  function e(d, c) {
    return d && c ? t(d.__data__, c.__data__) : !d - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new ie(i, this._parents).order();
}
function Gf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Kf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function jf() {
  return Array.from(this);
}
function Jf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Zf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Qf() {
  return !this.node();
}
function tc(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function ec(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function rc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ic(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function sc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ac(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function oc(t, e) {
  var n = Wi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? nc : ec : typeof e == "function" ? n.local ? ac : sc : n.local ? ic : rc)(n, e));
}
function Qo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function lc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function uc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function fc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function cc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? lc : typeof e == "function" ? fc : uc)(t, e, n ?? "")) : gr(this.node(), t);
}
function gr(t, e) {
  return t.style.getPropertyValue(e) || Qo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function hc(t) {
  return function() {
    delete this[t];
  };
}
function dc(t, e) {
  return function() {
    this[t] = e;
  };
}
function pc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function vc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? hc : typeof e == "function" ? pc : dc)(t, e)) : this.node()[t];
}
function tl(t) {
  return t.trim().split(/^|\s+/);
}
function Xs(t) {
  return t.classList || new el(t);
}
function el(t) {
  this._node = t, this._names = tl(t.getAttribute("class") || "");
}
el.prototype = {
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
function nl(t, e) {
  for (var n = Xs(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function rl(t, e) {
  for (var n = Xs(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function gc(t) {
  return function() {
    nl(this, t);
  };
}
function _c(t) {
  return function() {
    rl(this, t);
  };
}
function mc(t, e) {
  return function() {
    (e.apply(this, arguments) ? nl : rl)(this, t);
  };
}
function yc(t, e) {
  var n = tl(t + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? mc : e ? gc : _c)(n, e));
}
function wc() {
  this.textContent = "";
}
function xc(t) {
  return function() {
    this.textContent = t;
  };
}
function bc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function $c(t) {
  return arguments.length ? this.each(t == null ? wc : (typeof t == "function" ? bc : xc)(t)) : this.node().textContent;
}
function Ac() {
  this.innerHTML = "";
}
function Ec(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Tc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Cc(t) {
  return arguments.length ? this.each(t == null ? Ac : (typeof t == "function" ? Tc : Ec)(t)) : this.node().innerHTML;
}
function Rc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Sc() {
  return this.each(Rc);
}
function Nc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kc() {
  return this.each(Nc);
}
function Mc(t) {
  var e = typeof t == "function" ? t : Go(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Pc() {
  return null;
}
function Dc(t, e) {
  var n = typeof t == "function" ? t : Go(t), r = e == null ? Pc : typeof e == "function" ? e : Bs(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Oc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ic() {
  return this.each(Oc);
}
function Fc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Lc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function qc(t) {
  return this.select(t ? Lc : Fc);
}
function Vc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function zc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Hc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Yc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Bc(t, e, n) {
  return function() {
    var r = this.__on, i, s = zc(e);
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
function Xc(t, e, n) {
  var r = Hc(t + ""), i, s = r.length, a;
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
  for (o = e ? Bc : Yc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function il(t, e, n) {
  var r = Qo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Wc(t, e) {
  return function() {
    return il(this, t, e);
  };
}
function Uc(t, e) {
  return function() {
    return il(this, t, e.apply(this, arguments));
  };
}
function Gc(t, e) {
  return this.each((typeof e == "function" ? Uc : Wc)(t, e));
}
function* Kc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var sl = [null];
function ie(t, e) {
  this._groups = t, this._parents = e;
}
function wr() {
  return new ie([[document.documentElement]], sl);
}
function jc() {
  return this;
}
ie.prototype = wr.prototype = {
  constructor: ie,
  select: bf,
  selectAll: Tf,
  selectChild: Nf,
  selectChildren: Df,
  filter: Of,
  data: zf,
  enter: If,
  exit: Yf,
  join: Bf,
  merge: Xf,
  selection: jc,
  order: Wf,
  sort: Uf,
  call: Kf,
  nodes: jf,
  node: Jf,
  size: Zf,
  empty: Qf,
  each: tc,
  attr: oc,
  style: cc,
  property: vc,
  classed: yc,
  text: $c,
  html: Cc,
  raise: Sc,
  lower: kc,
  append: Mc,
  insert: Dc,
  remove: Ic,
  clone: qc,
  datum: Vc,
  on: Xc,
  dispatch: Gc,
  [Symbol.iterator]: Kc
};
function ft(t) {
  return typeof t == "string" ? new ie([[document.querySelector(t)]], [document.documentElement]) : new ie([[t]], sl);
}
function Ws(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function al(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Gr() {
}
var Fr = 0.7, Ti = 1 / Fr, er = "\\s*([+-]?\\d+)\\s*", Lr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Jc = /^#([0-9a-f]{3,8})$/, Zc = new RegExp(`^rgb\\(${er},${er},${er}\\)$`), Qc = new RegExp(`^rgb\\(${qe},${qe},${qe}\\)$`), th = new RegExp(`^rgba\\(${er},${er},${er},${Lr}\\)$`), eh = new RegExp(`^rgba\\(${qe},${qe},${qe},${Lr}\\)$`), nh = new RegExp(`^hsl\\(${Lr},${qe},${qe}\\)$`), rh = new RegExp(`^hsla\\(${Lr},${qe},${qe},${Lr}\\)$`), Ta = {
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
Ws(Gr, Gn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: ih,
  formatHsl: sh,
  formatRgb: Ra,
  toString: Ra
});
function Ca() {
  return this.rgb().formatHex();
}
function ih() {
  return this.rgb().formatHex8();
}
function sh() {
  return ol(this).formatHsl();
}
function Ra() {
  return this.rgb().formatRgb();
}
function Gn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Jc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Sa(e) : n === 3 ? new Kt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ai(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ai(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Zc.exec(t)) ? new Kt(e[1], e[2], e[3], 1) : (e = Qc.exec(t)) ? new Kt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = th.exec(t)) ? ai(e[1], e[2], e[3], e[4]) : (e = eh.exec(t)) ? ai(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = nh.exec(t)) ? Ma(e[1], e[2] / 100, e[3] / 100, 1) : (e = rh.exec(t)) ? Ma(e[1], e[2] / 100, e[3] / 100, e[4]) : Ta.hasOwnProperty(t) ? Sa(Ta[t]) : t === "transparent" ? new Kt(NaN, NaN, NaN, 0) : null;
}
function Sa(t) {
  return new Kt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ai(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Kt(t, e, n, r);
}
function ah(t) {
  return t instanceof Gr || (t = Gn(t)), t ? (t = t.rgb(), new Kt(t.r, t.g, t.b, t.opacity)) : new Kt();
}
function bs(t, e, n, r) {
  return arguments.length === 1 ? ah(t) : new Kt(t, e, n, r ?? 1);
}
function Kt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ws(Kt, bs, al(Gr, {
  brighter(t) {
    return t = t == null ? Ti : Math.pow(Ti, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Kt(Xn(this.r), Xn(this.g), Xn(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Na,
  // Deprecated! Use color.formatHex.
  formatHex: Na,
  formatHex8: oh,
  formatRgb: ka,
  toString: ka
}));
function Na() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function oh() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ka() {
  const t = Ci(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Xn(this.r)}, ${Xn(this.g)}, ${Xn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ci(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Xn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function On(t) {
  return t = Xn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ma(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new be(t, e, n, r);
}
function ol(t) {
  if (t instanceof be) return new be(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gr || (t = Gn(t)), !t) return new be();
  if (t instanceof be) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new be(a, o, l, t.opacity);
}
function lh(t, e, n, r) {
  return arguments.length === 1 ? ol(t) : new be(t, e, n, r ?? 1);
}
function be(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ws(be, lh, al(Gr, {
  brighter(t) {
    return t = t == null ? Ti : Math.pow(Ti, t), new be(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new be(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Kt(
      rs(t >= 240 ? t - 240 : t + 120, i, r),
      rs(t, i, r),
      rs(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new be(Pa(this.h), oi(this.s), oi(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ci(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Pa(this.h)}, ${oi(this.s) * 100}%, ${oi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Pa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function oi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function rs(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Us = (t) => () => t;
function uh(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function fh(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ch(t) {
  return (t = +t) == 1 ? ll : function(e, n) {
    return n - e ? fh(e, n, t) : Us(isNaN(e) ? n : e);
  };
}
function ll(t, e) {
  var n = e - t;
  return n ? uh(t, n) : Us(isNaN(t) ? e : t);
}
const Ri = (function t(e) {
  var n = ch(e);
  function r(i, s) {
    var a = n((i = bs(i)).r, (s = bs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ll(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function hh(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function dh(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ph(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ze(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function vh(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Le(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function gh(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ze(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var $s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, is = new RegExp($s.source, "g");
function _h(t) {
  return function() {
    return t;
  };
}
function mh(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ul(t, e) {
  var n = $s.lastIndex = is.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = $s.exec(t)) && (i = is.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Le(r, i) })), n = is.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? mh(l[0].x) : _h(e) : (e = l.length, function(u) {
    for (var f = 0, d; f < e; ++f) o[(d = l[f]).i] = d.x(u);
    return o.join("");
  });
}
function Ze(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Us(e) : (n === "number" ? Le : n === "string" ? (r = Gn(e)) ? (e = r, Ri) : ul : e instanceof Gn ? Ri : e instanceof Date ? vh : dh(e) ? hh : Array.isArray(e) ? ph : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? gh : Le)(t, e);
}
var Da = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function fl(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Da,
    skewX: Math.atan(l) * Da,
    scaleX: a,
    scaleY: o
  };
}
var li;
function yh(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? As : fl(e.a, e.b, e.c, e.d, e.e, e.f);
}
function wh(t) {
  return t == null || (li || (li = document.createElementNS("http://www.w3.org/2000/svg", "g")), li.setAttribute("transform", t), !(t = li.transform.baseVal.consolidate())) ? As : (t = t.matrix, fl(t.a, t.b, t.c, t.d, t.e, t.f));
}
function cl(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, d, c, p, y) {
    if (u !== d || f !== c) {
      var b = p.push("translate(", null, e, null, n);
      y.push({ i: b - 4, x: Le(u, d) }, { i: b - 2, x: Le(f, c) });
    } else (d || c) && p.push("translate(" + d + e + c + n);
  }
  function a(u, f, d, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Le(u, f) })) : f && d.push(i(d) + "rotate(" + f + r);
  }
  function o(u, f, d, c) {
    u !== f ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Le(u, f) }) : f && d.push(i(d) + "skewX(" + f + r);
  }
  function l(u, f, d, c, p, y) {
    if (u !== d || f !== c) {
      var b = p.push(i(p) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: Le(u, d) }, { i: b - 2, x: Le(f, c) });
    } else (d !== 1 || c !== 1) && p.push(i(p) + "scale(" + d + "," + c + ")");
  }
  return function(u, f) {
    var d = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, d, c), a(u.rotate, f.rotate, d, c), o(u.skewX, f.skewX, d, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, c), u = f = null, function(p) {
      for (var y = -1, b = c.length, m; ++y < b; ) d[(m = c[y]).i] = m.x(p);
      return d.join("");
    };
  };
}
var xh = cl(yh, "px, ", "px)", "deg)"), bh = cl(wh, ", ", ")", ")"), _r = 0, Sr = 0, Cr = 0, hl = 1e3, Si, Nr, Ni = 0, Kn = 0, Ui = 0, qr = typeof performance == "object" && performance.now ? performance : Date, dl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Gs() {
  return Kn || (dl($h), Kn = qr.now() + Ui);
}
function $h() {
  Kn = 0;
}
function ki() {
  this._call = this._time = this._next = null;
}
ki.prototype = pl.prototype = {
  constructor: ki,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (e == null ? 0 : +e), !this._next && Nr !== this && (Nr ? Nr._next = this : Si = this, Nr = this), this._call = t, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function pl(t, e, n) {
  var r = new ki();
  return r.restart(t, e, n), r;
}
function Ah() {
  Gs(), ++_r;
  for (var t = Si, e; t; )
    (e = Kn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --_r;
}
function Oa() {
  Kn = (Ni = qr.now()) + Ui, _r = Sr = 0;
  try {
    Ah();
  } finally {
    _r = 0, Th(), Kn = 0;
  }
}
function Eh() {
  var t = qr.now(), e = t - Ni;
  e > hl && (Ui -= e, Ni = t);
}
function Th() {
  for (var t, e = Si, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Si = n);
  Nr = t, Es(r);
}
function Es(t) {
  if (!_r) {
    Sr && (Sr = clearTimeout(Sr));
    var e = t - Kn;
    e > 24 ? (t < 1 / 0 && (Sr = setTimeout(Oa, t - qr.now() - Ui)), Cr && (Cr = clearInterval(Cr))) : (Cr || (Ni = qr.now(), Cr = setInterval(Eh, hl)), _r = 1, dl(Oa));
  }
}
function Ia(t, e, n) {
  var r = new ki();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Ch = Uo("start", "end", "cancel", "interrupt"), Rh = [], vl = 0, Fa = 1, Ts = 2, mi = 3, La = 4, Cs = 5, yi = 6;
function Gi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Sh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ch,
    tween: Rh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: vl
  });
}
function Ks(t, e) {
  var n = Ce(t, e);
  if (n.state > vl) throw new Error("too late; already scheduled");
  return n;
}
function Xe(t, e) {
  var n = Ce(t, e);
  if (n.state > mi) throw new Error("too late; already running");
  return n;
}
function Ce(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Sh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = pl(s, 0, n.time);
  function s(u) {
    n.state = Fa, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, d, c, p;
    if (n.state !== Fa) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === mi) return Ia(a);
        p.state === La ? (p.state = yi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = yi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Ia(function() {
      n.state === mi && (n.state = La, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ts, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ts) {
      for (n.state = mi, i = new Array(c = n.tween.length), f = 0, d = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Cs, 1), d = -1, c = i.length; ++d < c; )
      i[d].call(t, f);
    n.state === Cs && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = yi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Nh(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Ts && r.state < Cs, r.state = yi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function kh(t) {
  return this.each(function() {
    Nh(this, t);
  });
}
function Mh(t, e) {
  var n, r;
  return function() {
    var i = Xe(this, t), s = i.tween;
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
function Ph(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Xe(this, t), a = s.tween;
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
function Dh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ce(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Mh : Ph)(n, t, e));
}
function js(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Xe(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ce(i, r).value[e];
  };
}
function gl(t, e) {
  var n;
  return (typeof e == "number" ? Le : e instanceof Gn ? Ri : (n = Gn(e)) ? (e = n, Ri) : ul)(t, e);
}
function Oh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ih(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Lh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function qh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function Vh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function zh(t, e) {
  var n = Wi(t), r = n === "transform" ? bh : gl;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Vh : qh)(n, r, js(this, "attr." + t, e)) : e == null ? (n.local ? Ih : Oh)(n) : (n.local ? Lh : Fh)(n, r, e));
}
function Hh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Yh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Bh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Yh(t, s)), n;
  }
  return i._value = e, i;
}
function Xh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Hh(t, s)), n;
  }
  return i._value = e, i;
}
function Wh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Wi(t);
  return this.tween(n, (r.local ? Bh : Xh)(r, e));
}
function Uh(t, e) {
  return function() {
    Ks(this, t).delay = +e.apply(this, arguments);
  };
}
function Gh(t, e) {
  return e = +e, function() {
    Ks(this, t).delay = e;
  };
}
function Kh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Uh : Gh)(e, t)) : Ce(this.node(), e).delay;
}
function jh(t, e) {
  return function() {
    Xe(this, t).duration = +e.apply(this, arguments);
  };
}
function Jh(t, e) {
  return e = +e, function() {
    Xe(this, t).duration = e;
  };
}
function Zh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? jh : Jh)(e, t)) : Ce(this.node(), e).duration;
}
function Qh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Xe(this, t).ease = e;
  };
}
function td(t) {
  var e = this._id;
  return arguments.length ? this.each(Qh(e, t)) : Ce(this.node(), e).ease;
}
function ed(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Xe(this, t).ease = n;
  };
}
function nd(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ed(this._id, t));
}
function rd(t) {
  typeof t != "function" && (t = jo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new cn(r, this._parents, this._name, this._id);
}
function id(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, d = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (d[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new cn(a, this._parents, this._name, this._id);
}
function sd(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ad(t, e, n) {
  var r, i, s = sd(e) ? Ks : Xe;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function od(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ce(this.node(), n).on.on(t) : this.each(ad(n, t, e));
}
function ld(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ud() {
  return this.on("end.remove", ld(this._id));
}
function fd(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Bs(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, d, c = 0; c < l; ++c)
      (f = o[c]) && (d = t.call(f, f.__data__, c, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[c] = d, Gi(u[c], e, n, c, u, Ce(f, n)));
  return new cn(s, this._parents, e, n);
}
function cd(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ko(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var c = t.call(f, f.__data__, d, l), p, y = Ce(f, n), b = 0, m = c.length; b < m; ++b)
          (p = c[b]) && Gi(p, e, n, b, c, y);
        s.push(c), a.push(f);
      }
  return new cn(s, a, e, n);
}
var hd = wr.prototype.constructor;
function dd() {
  return new hd(this._groups, this._parents);
}
function pd(t, e) {
  var n, r, i;
  return function() {
    var s = gr(this, t), a = (this.style.removeProperty(t), gr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function _l(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vd(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = gr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function gd(t, e, n) {
  var r, i, s;
  return function() {
    var a = gr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), gr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function _d(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Xe(this, t), u = l.on, f = l.value[s] == null ? o || (o = _l(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function md(t, e, n) {
  var r = (t += "") == "transform" ? xh : gl;
  return e == null ? this.styleTween(t, pd(t, r)).on("end.style." + t, _l(t)) : typeof e == "function" ? this.styleTween(t, gd(t, r, js(this, "style." + t, e))).each(_d(this._id, t)) : this.styleTween(t, vd(t, r, e), n).on("end.style." + t, null);
}
function yd(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function wd(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && yd(t, a, n)), r;
  }
  return s._value = e, s;
}
function xd(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, wd(t, e, n ?? ""));
}
function bd(t) {
  return function() {
    this.textContent = t;
  };
}
function $d(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ad(t) {
  return this.tween("text", typeof t == "function" ? $d(js(this, "text", t)) : bd(t == null ? "" : t + ""));
}
function Ed(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Td(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ed(i)), e;
  }
  return r._value = t, r;
}
function Cd(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Td(t));
}
function Rd() {
  for (var t = this._name, e = this._id, n = ml(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Ce(l, e);
        Gi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new cn(r, this._parents, t, n);
}
function Sd() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Xe(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Nd = 0;
function cn(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function wi(t) {
  return wr().transition(t);
}
function ml() {
  return ++Nd;
}
var Je = wr.prototype;
cn.prototype = wi.prototype = {
  constructor: cn,
  select: fd,
  selectAll: cd,
  selectChild: Je.selectChild,
  selectChildren: Je.selectChildren,
  filter: rd,
  merge: id,
  selection: dd,
  transition: Rd,
  call: Je.call,
  nodes: Je.nodes,
  node: Je.node,
  size: Je.size,
  empty: Je.empty,
  each: Je.each,
  on: od,
  attr: zh,
  attrTween: Wh,
  style: md,
  styleTween: xd,
  text: Ad,
  textTween: Cd,
  remove: ud,
  tween: Dh,
  delay: Kh,
  duration: Zh,
  ease: td,
  easeVarying: nd,
  end: Sd,
  [Symbol.iterator]: Je[Symbol.iterator]
};
function kd(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Md = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: kd
};
function Pd(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Dd(t) {
  var e, n;
  t instanceof cn ? (e = t._id, t = t._name) : (e = ml(), (n = Md).time = Gs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Gi(l, t, e, u, a, n || Pd(l, e));
  return new cn(r, this._parents, t, e);
}
wr.prototype.interrupt = kh;
wr.prototype.transition = Dd;
const Rs = Math.PI, Ss = 2 * Rs, Nn = 1e-6, Od = Ss - Nn;
function yl(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Id(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return yl;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Fd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? yl : Id(e);
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
    else if (c > Nn) if (!(Math.abs(d * l - u * f) > Nn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, y = i - o, b = l * l + u * u, m = p * p + y * y, $ = Math.sqrt(b), D = Math.sqrt(c), M = s * Math.tan((Rs - Math.acos((b + c - m) / (2 * $ * D))) / 2), S = M / D, F = M / $;
      Math.abs(S - 1) > Nn && this._append`L${e + S * f},${n + S * d}`, this._append`A${s},${s},0,0,${+(d * p > f * y)},${this._x1 = e + F * l},${this._y1 = n + F * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, d = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Nn || Math.abs(this._y1 - f) > Nn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Ss + Ss), c > Od ? this._append`A${r},${r},0,1,${d},${e - o},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = f}` : c > Nn && this._append`A${r},${r},0,${+(c >= Rs)},${d},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Ld(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const qd = Ld("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Ft(t) {
  return function() {
    return t;
  };
}
const qa = Math.abs, Dt = Math.atan2, Sn = Math.cos, Vd = Math.max, ss = Math.min, Pe = Math.sin, tr = Math.sqrt, Yt = 1e-12, Vr = Math.PI, Mi = Vr / 2, xi = 2 * Vr;
function zd(t) {
  return t > 1 ? 0 : t < -1 ? Vr : Math.acos(t);
}
function Va(t) {
  return t >= 1 ? Mi : t <= -1 ? -Mi : Math.asin(t);
}
function Hd(t) {
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
  }, () => new Fd(e);
}
function Yd(t) {
  return t.innerRadius;
}
function Bd(t) {
  return t.outerRadius;
}
function Xd(t) {
  return t.startAngle;
}
function Wd(t) {
  return t.endAngle;
}
function Ud(t) {
  return t && t.padAngle;
}
function Gd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, d = o - s, c = d * l - f * u;
  if (!(c * c < Yt))
    return c = (f * (e - s) - d * (t - i)) / c, [t + c * l, e + c * u];
}
function ui(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / tr(o * o + l * l), f = u * l, d = -u * o, c = t + f, p = e + d, y = n + f, b = r + d, m = (c + y) / 2, $ = (p + b) / 2, D = y - c, M = b - p, S = D * D + M * M, F = i - s, L = c * b - y * p, W = (M < 0 ? -1 : 1) * tr(Vd(0, F * F * S - L * L)), ot = (L * M - D * W) / S, Z = (-L * D - M * W) / S, U = (L * M + D * W) / S, lt = (-L * D + M * W) / S, ut = ot - m, O = Z - $, I = U - m, Nt = lt - $;
  return ut * ut + O * O > I * I + Nt * Nt && (ot = U, Z = lt), {
    cx: ot,
    cy: Z,
    x01: -f,
    y01: -d,
    x11: ot * (i / F - 1),
    y11: Z * (i / F - 1)
  };
}
function ye() {
  var t = Yd, e = Bd, n = Ft(0), r = null, i = Xd, s = Wd, a = Ud, o = null, l = Hd(u);
  function u() {
    var f, d, c = +t.apply(this, arguments), p = +e.apply(this, arguments), y = i.apply(this, arguments) - Mi, b = s.apply(this, arguments) - Mi, m = qa(b - y), $ = b > y;
    if (o || (o = f = l()), p < c && (d = p, p = c, c = d), !(p > Yt)) o.moveTo(0, 0);
    else if (m > xi - Yt)
      o.moveTo(p * Sn(y), p * Pe(y)), o.arc(0, 0, p, y, b, !$), c > Yt && (o.moveTo(c * Sn(b), c * Pe(b)), o.arc(0, 0, c, b, y, $));
    else {
      var D = y, M = b, S = y, F = b, L = m, W = m, ot = a.apply(this, arguments) / 2, Z = ot > Yt && (r ? +r.apply(this, arguments) : tr(c * c + p * p)), U = ss(qa(p - c) / 2, +n.apply(this, arguments)), lt = U, ut = U, O, I;
      if (Z > Yt) {
        var Nt = Va(Z / c * Pe(ot)), se = Va(Z / p * Pe(ot));
        (L -= Nt * 2) > Yt ? (Nt *= $ ? 1 : -1, S += Nt, F -= Nt) : (L = 0, S = F = (y + b) / 2), (W -= se * 2) > Yt ? (se *= $ ? 1 : -1, D += se, M -= se) : (W = 0, D = M = (y + b) / 2);
      }
      var mt = p * Sn(D), yt = p * Pe(D), Q = c * Sn(F), kt = c * Pe(F);
      if (U > Yt) {
        var et = p * Sn(M), Ot = p * Pe(M), Re = c * Sn(S), it = c * Pe(S), jt;
        if (m < Vr)
          if (jt = Gd(mt, yt, Re, it, et, Ot, Q, kt)) {
            var ve = mt - jt[0], ae = yt - jt[1], Tn = et - jt[0], _t = Ot - jt[1], Se = 1 / Pe(zd((ve * Tn + ae * _t) / (tr(ve * ve + ae * ae) * tr(Tn * Tn + _t * _t))) / 2), We = tr(jt[0] * jt[0] + jt[1] * jt[1]);
            lt = ss(U, (c - We) / (Se - 1)), ut = ss(U, (p - We) / (Se + 1));
          } else
            lt = ut = 0;
      }
      W > Yt ? ut > Yt ? (O = ui(Re, it, mt, yt, p, ut, $), I = ui(et, Ot, Q, kt, p, ut, $), o.moveTo(O.cx + O.x01, O.cy + O.y01), ut < U ? o.arc(O.cx, O.cy, ut, Dt(O.y01, O.x01), Dt(I.y01, I.x01), !$) : (o.arc(O.cx, O.cy, ut, Dt(O.y01, O.x01), Dt(O.y11, O.x11), !$), o.arc(0, 0, p, Dt(O.cy + O.y11, O.cx + O.x11), Dt(I.cy + I.y11, I.cx + I.x11), !$), o.arc(I.cx, I.cy, ut, Dt(I.y11, I.x11), Dt(I.y01, I.x01), !$))) : (o.moveTo(mt, yt), o.arc(0, 0, p, D, M, !$)) : o.moveTo(mt, yt), !(c > Yt) || !(L > Yt) ? o.lineTo(Q, kt) : lt > Yt ? (O = ui(Q, kt, et, Ot, c, -lt, $), I = ui(mt, yt, Re, it, c, -lt, $), o.lineTo(O.cx + O.x01, O.cy + O.y01), lt < U ? o.arc(O.cx, O.cy, lt, Dt(O.y01, O.x01), Dt(I.y01, I.x01), !$) : (o.arc(O.cx, O.cy, lt, Dt(O.y01, O.x01), Dt(O.y11, O.x11), !$), o.arc(0, 0, c, Dt(O.cy + O.y11, O.cx + O.x11), Dt(I.cy + I.y11, I.cx + I.x11), $), o.arc(I.cx, I.cy, lt, Dt(I.y11, I.x11), Dt(I.y01, I.x01), !$))) : o.arc(0, 0, c, F, S, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Vr / 2;
    return [Sn(d) * f, Pe(d) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ft(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ft(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Ft(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ft(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ft(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Ft(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ft(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Kd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function jd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jd(t) {
  return t;
}
function as() {
  var t = Jd, e = jd, n = null, r = Ft(0), i = Ft(xi), s = Ft(0);
  function a(o) {
    var l, u = (o = Kd(o)).length, f, d, c = 0, p = new Array(u), y = new Array(u), b = +r.apply(this, arguments), m = Math.min(xi, Math.max(-xi, i.apply(this, arguments) - b)), $, D = Math.min(Math.abs(m) / u, s.apply(this, arguments)), M = D * (m < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = y[p[l] = l] = +t(o[l], l, o)) > 0 && (c += S);
    for (e != null ? p.sort(function(F, L) {
      return e(y[F], y[L]);
    }) : n != null && p.sort(function(F, L) {
      return n(o[F], o[L]);
    }), l = 0, d = c ? (m - u * M) / c : 0; l < u; ++l, b = $)
      f = p[l], S = y[f], $ = b + (S > 0 ? S * d : 0) + M, y[f] = {
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
    return arguments.length ? (t = typeof o == "function" ? o : Ft(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Ft(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Ft(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Ft(+o), a) : s;
  }, a;
}
function kr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
kr.prototype = {
  constructor: kr,
  scale: function(t) {
    return t === 1 ? this : new kr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new kr(this.k, this.x + this.k * t, this.y + this.k * e);
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
kr.prototype;
var Zd = /* @__PURE__ */ Gu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Qd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function wl(t, e) {
  Vi(e, !0), Hs(t, Qd);
  let n = at(e, "jsonData", 7), r = at(e, "currentRound", 7, 1), i = at(e, "mouseEventType", 15), s = at(e, "mouseData", 15), a = at(e, "mouseX", 15), o = at(e, "mouseY", 15), l = at(e, "requestRoundChange", 7, (h) => {
  }), u = at(e, "candidateColors", 23, () => []), f = at(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), d = at(e, "firstRoundDeterminesPercentages", 7, !1), c = at(e, "randomizeOrder", 7, !1), p = at(e, "displayPhase", 15, 0);
  function y(h) {
    return h.isTransfer ? `${h.label}__transfer` : h.transferIndex != null ? `${h.label}__${h.transferIndex}` : h.label;
  }
  const b = 800, m = 800, $ = Math.min(b, m) * 0.3, D = b / 2, M = m / 2, S = "Pie", F = "PieOutline", L = "Donut", W = "TextLayer", ot = "url(#cross-hatch)", Z = 1.15, U = 750, lt = 800, ut = "white", O = 1, I = "#ff00ff", Nt = 3;
  function se(h) {
    return "hatch-" + h.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let mt = [], yt = [], Q = [], kt = 0, et = 0;
  const Ot = {}, Re = "No Further Rankings";
  let it = /* @__PURE__ */ bt(null);
  function jt() {
    const h = ft(x(it));
    h.select("#" + S).remove(), h.select("#" + F).remove(), h.select("#" + L).remove(), h.select("#" + W).remove();
  }
  function ve(h) {
    l() && (vt = h, l()(h));
  }
  function ae(h) {
    jt(), Q = Tn(h), mt = ta(h, S, Q, D, M, 0, _t()), ta(h, F, Q, D, M, 0, _t(), !1, !1, !0), Qr();
  }
  tf(() => {
    Cn(), setTimeout(
      () => {
        ae(r());
      },
      0
    );
  });
  function Tn(h) {
    const g = Vt(h);
    return kt = Jn(h), g;
  }
  function _t() {
    return $;
  }
  function Se() {
    return _t() * 1.41;
  }
  function We(h) {
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
  function Kr(h, g) {
    if (h === "exhausted") return We(g);
    {
      const _ = n().results[g - 1].tally;
      return Number(_[h]);
    }
  }
  function jr(h, g) {
    return Kr(h, g).toLocaleString("en-US");
  }
  function Jr(h, g) {
    const _ = d() ? kt : Ki(g);
    return (Kr(h, g) / _).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Jn(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      _ += Number(E);
    return _;
  }
  function Ne(h) {
    return h === "exhausted" || h === "Inactive Ballots";
  }
  function Ki(h) {
    const g = n().results[h - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      Ne(A) || (_ += Number(E));
    return _;
  }
  function Zr(h, g) {
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
    return Zr(h, "eliminated");
  }
  function xr(h) {
    let g = [];
    for (let _ = 1; _ <= h; _++) g = g.concat(Zr(_, "elected"));
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
    h.some((_) => Ne(_.label)) || h.push({ label: "exhausted", value: We(g) });
  }
  function tt(h) {
    let g = h | 0;
    return () => {
      g = g + 1831565813 | 0;
      let _ = Math.imul(g ^ g >>> 15, 1 | g);
      return _ = _ + Math.imul(_ ^ _ >>> 7, 61 | _) ^ _, ((_ ^ _ >>> 14) >>> 0) / 4294967296;
    };
  }
  function pt(h) {
    let g = 5381;
    for (let _ = 0; _ < h.length; _++)
      g = (g << 5) + g + h.charCodeAt(_) | 0;
    return g;
  }
  function wt(h) {
    var E;
    if (h.length <= 3) return h;
    const g = pt(((E = n().config) == null ? void 0 : E.contest) ?? ""), _ = tt(g), A = [...h];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(_() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function st() {
    const h = Object.keys(n().results[0].tally), g = h.filter((E) => !Ne(E)), _ = h.filter((E) => Ne(E));
    return [...c() ? wt(g) : g, ..._];
  }
  function Vt(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of st())
      A in g && _.push({ label: A, value: Number(g[A]) });
    return Y(_, h), _;
  }
  function Ue(h) {
    const g = n().results[h - 1].tally, _ = [];
    for (const A of st())
      _.push({ label: A, value: Number(g[A] ?? 0) });
    return Y(_, h), _;
  }
  function ke(h, g) {
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
    const h = ft(x(it)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [_, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Ot[_] = qd[g] : Ot[_] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Ot[_] = u()[g % u().length], g++;
      {
        const E = h.clone(!0);
        E.attr("id", se(_)).select("rect").attr("fill", Ot[_]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    Ot.exhausted = ot, Ot["Inactive Ballots"] = ot;
  }
  function pn() {
    ft(x(it)).select("#" + L).remove();
  }
  function Mt(h, g) {
    const _ = wi("global").duration(lt);
    g && _.on("end", g);
    const A = ke(Q, h), T = as().sort(null).value((P) => P.value)(A);
    ia(h, S, T, 0, _t()), ia(h, F, T, 0, _t(), !0), Q = A, mt = T, pn(), bl(h), Sl(), kl(0, _t()), Qr();
  }
  function oe(h, g) {
    const _ = wi("global").duration(lt);
    g && _.on("end", g), $l(h);
  }
  function zt(h, g) {
    const _ = wi("global").duration(lt);
    g && _.on("end", g), je(h), ji(_t(), Se());
  }
  let At = !1, ge = [];
  function _e() {
    Qr(), At = !1, Ge();
  }
  function Ge() {
    if (ge.length === 0) {
      vt !== r() && (r() === vt + 1 && vt > 0 && r() <= n().results.length ? (vt = r(), me(r())) : r() >= 1 && r() <= n().results.length && (vt = r(), p(0), ae(r())));
      return;
    }
    const h = ge.shift();
    switch (h.type) {
      case "round": {
        const g = h.round;
        g === vt + 1 && vt > 0 && g <= n().results.length ? (vt = g, me(g)) : (g !== vt && g >= 1 && g <= n().results.length && (vt = g, p(0), ae(g)), Ge());
        break;
      }
      case "step":
        Me();
        break;
    }
  }
  function me(h) {
    if (h <= 1 || h > n().results.length) {
      Ge();
      return;
    }
    At = !0, et = h, p(0), Mt(et - 1, () => {
      p(1), oe(et - 1, () => {
        p(2), zt(et, () => {
          p(0), ve(et), _e();
        });
      });
    });
  }
  function Ke() {
    At || (At = !0, et = r(), Rn());
  }
  function Rn() {
    if (p(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), ge.length > 0) {
      _e();
      return;
    }
    const h = et < n().results.length - 1 ? Rn : () => {
      p(0), _e();
    };
    Mt(et, () => {
      p(1), oe(et, () => {
        p(2), et++, ve(et), zt(et, h);
      });
    });
  }
  Fs(() => {
    br();
  });
  let vt = 0;
  function br() {
    if (vt != r()) {
      if (At) {
        ge.push({ type: "round", round: r() });
        return;
      }
      if (vt == r() - 1 && vt > 0) {
        const h = r();
        ve(vt), me(h);
      } else
        $r(r()), vt = r();
    }
  }
  function $r(h) {
    if (At) {
      ge.push({ type: "round", round: h });
      return;
    }
    p(0), ae(h);
  }
  function Me() {
    if (r() > n().results.length) {
      Qr(), At = !1;
      return;
    }
    if (At) {
      ge.push({ type: "step" });
      return;
    }
    At = !0, et = r(), p() === 0 ? Mt(et, () => {
      p(1), _e();
    }) : p() === 1 ? oe(et, () => {
      p(2), _e();
    }) : p() === 2 ? (et++, ve(et), zt(et, () => {
      p(0), _e();
    })) : (At = !1, console.warn("displayPhase out of range at ", p()));
  }
  function je(h) {
    Q = Ue(h), mt = na(h, S, Q, 0, _t(), !0), na(h, F, Q, 0, _t(), !1, !0);
  }
  function ji(h, g) {
    const _ = ft(x(it)).select("#" + L), E = ft(x(it)).select("#" + S), T = {};
    for (const N of mt) {
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
      z--, z === 0 && Nl();
    }
    P.select("path").transition("global").duration(U).attrTween("d", function(N) {
      const k = N.startAngle, C = N.endAngle, R = C - k, Pt = T[N.data.label];
      let J, Ht;
      if (Pt) {
        const Zn = (Pt.oldStart + Pt.oldEnd) / 2, Ol = (Pt.newStart + Pt.newEnd) / 2, Il = k - Zn;
        J = Ol + Il, Ht = J + R;
      } else
        J = k, Ht = C;
      const nt = Ze(k, J), Et = Ze(C, Ht), ei = Ze(g, h), Er = ye();
      return function(Zn) {
        return Er.innerRadius(Math.min(ei(Zn), h) - 1).outerRadius(ei(Zn)).startAngle(nt(Zn)).endAngle(Et(Zn)), Er(N);
      };
    }).on("end", (N) => q());
  }
  function bl(h) {
    const g = El(h, mt);
    yt = ea(h, L, g, D, M, _t(), Se(), !1, !0);
    const _ = ft(x(it));
    _.select("#" + S).raise(), _.select("#" + F).raise();
  }
  function $l(h) {
    const g = Cl(h, yt, mt);
    yt = sa(h, L, g, _t(), Se(), !1);
  }
  function Ar(h) {
    return Ot[h.data.label];
  }
  function Al(h) {
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
  function El(h, g) {
    const _ = [], A = kt, E = n().results[h - 1].tallyResults;
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
        const Pt = g.find((nt) => nt.data.label == k);
        if (Pt)
          R = structuredClone(Pt);
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
        const Ht = Number(C) / A * 2 * Math.PI;
        R.startAngle = N, N = R.endAngle = N + Ht, R.index = T, R.data.transferIndex = T, _.push(R);
      }
    }
    return _;
  }
  function Tl(h, g, _) {
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
  function Cl(h, g, _) {
    const A = [], E = kt, T = Al(h), P = Tl(T, E, _);
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
    const E = ye().innerRadius(_ * Z).outerRadius(_ * Z), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], z = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const C = k.data.label === "exhausted" ? Re : k.data.label, R = E.centroid(k), Pt = ti(k.startAngle, k.endAngle), J = jr(k.data.label, h);
      let Ht;
      !d() && Ne(k.data.label) ? Ht = J : Ht = J + " (" + Jr(k.data.label, h) + ")";
      const nt = z.append("text").attr("transform", `translate(${R})`).attr("text-anchor", Pt).text(C);
      nt.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Ht);
      const Et = nt.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Et.x + R[0], Et.y + R[1], Et.width, Et.height)
      });
    }
    z.remove(), P.sort((k, C) => C.value - k.value);
    const q = [], N = /* @__PURE__ */ new Set();
    for (const k of P)
      q.some((R) => k.bbox.left < R.right && k.bbox.right > R.left && k.bbox.top < R.bottom && k.bbox.bottom > R.top) || (N.add(k.label), q.push(k.bbox));
    return N;
  }
  function Qs(h, g, _, A, E, T) {
    const z = ft(x(it)).append("g").attr("id", W).attr("transform", `translate(${_}, ${A})`), q = ye().innerRadius(E * Z).outerRadius(E * Z), N = Zs(h, g, E, z);
    z.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && N.has(k.data.label) && ft(this).append("g").attr("id", (C) => y(C.data)).classed("eliminated", (C) => T.includes(C.data.label) || C.data.isTransfer === !0).each(function(C, R) {
        C.data.label === "exhausted" && ft(this).on("mouseenter", (Pt, J) => Ml(Pt)).on("mouseleave", (Pt, J) => Pl());
      }).append("text").attr("transform", (C) => `translate(${q.centroid(C)})`).attr("text-anchor", (C) => ti(C.startAngle, C.endAngle)).text((C) => C.data.label === "exhausted" ? Re : C.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((C) => {
        const R = jr(C.data.label, h);
        return !d() && Ne(C.data.label) ? R : R + " (" + Jr(C.data.label, h) + ")";
      });
    });
  }
  function Rl(h, g, _, A) {
    const T = ft(x(it)).select("#" + W), P = Zs(h, g, _, T);
    T.selectAll("g").each(function(R) {
      R && R.data && !R.data.isTransfer && !P.has(R.data.label) && ft(this).remove();
    });
    const z = T.selectAll("tspan"), q = T.selectAll("g").data(g, (R) => y(R.data)).classed("eliminated", (R) => A.includes(R.data.label) || R.data.isTransfer === !0), N = ye().innerRadius(_ * Z).outerRadius(_ * Z + 1);
    z.transition("global").duration(U).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ti(R.startAngle, R.endAngle)), q.select("text").transition("global").duration(U).attr("transform", (R) => `translate(${N.centroid(R)})`).attr("text-anchor", (R) => ti(R.startAngle, R.endAngle)).on("end", (R) => C());
    let k = q.size();
    function C(R) {
      k--, k === 0 && (T.remove(), Qs(h, g, D, M, _, A));
    }
  }
  function ta(h, g, _, A, E, T, P, z = !0, q = !1, N = !1) {
    const C = as().sort(null).value((R) => R.value)(_);
    return ea(h, g, C, A, E, T, P, z, q, N), C;
  }
  function Qr() {
    ft(x(it)).select("#" + F).selectAll(".elected").select("path").style("stroke", I).style("stroke-width", `${Nt}px`);
  }
  function ea(h, g, _, A, E, T, P, z, q, N = !1) {
    const k = dn(h), C = xr(h), J = ft(x(it)).attr("viewBox", `0 0 ${b} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(_).enter().append("g").attr("class", "slice").classed("eliminated", (nt) => k.includes(nt.data.label) || nt.data.isTransfer === !0).classed("elected", (nt) => C.includes(nt.data.label) && !nt.data.isTransfer).attr("id", (nt) => y(nt.data));
    N ? J.style("pointer-events", "none") : J.on("mouseenter", (nt, Et) => Zi(nt, Et)).on("mouseleave", (nt, Et) => Qi(nt, Et));
    const Ht = ye().outerRadius(P).innerRadius(T);
    if (q) {
      const nt = ye().outerRadius(T + 1).innerRadius(T);
      J.append("path").attr("d", nt).attr("stroke", N ? "none" : T === 0 ? ut : "none").attr("stroke-width", N ? 0 : T === 0 ? O : 0).attr("fill", N ? "none" : (Et) => Ar(Et)).transition("global").duration(U).attr("d", (Et) => Ht(Et)).on("end", (Et) => {
        N || Ji();
      });
    } else
      J.append("path").attr("d", (nt) => Ht(nt)).attr("fill", N ? "none" : (nt) => Ar(nt)).attr("stroke", N ? "none" : ut).attr("stroke-width", N ? 0 : O), N || Ji();
    return z && !N && Qs(h, _, A, E, P, k), _;
  }
  function Sl() {
    const _ = ft(x(it)).select("#" + W).selectAll(".eliminated");
    _.size() > 0 && _.classed("finished", !0);
  }
  function Nl() {
    const _ = ft(x(it)).select("#" + W).selectAll(".finished");
    _.size() > 0 && _.remove();
  }
  function kl(h, g) {
    const E = ft(x(it)).select("#" + S).selectAll(".eliminated"), T = ye().innerRadius(h), P = ye().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(U).attrTween("d", function(z) {
      const q = Ze(g, h);
      return function(N) {
        return P.innerRadius(q(N)), P(z);
      };
    }).attr("fill", (z) => `url(#${se(z.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(U).attrTween("d", function(z) {
      const q = Ze(g, h);
      return function(N) {
        return T.outerRadius(q(N)), T(z);
      };
    }).attr("fill", (z) => Ar(z));
  }
  function ti(h, g) {
    const _ = (h + g) / 2;
    return _ > Math.PI * 11 / 6 || _ < Math.PI * 1 / 6 || _ > Math.PI * 5 / 6 && _ < Math.PI * 7 / 6 ? "middle" : _ < Math.PI ? "start" : "end";
  }
  function Ji() {
    ft(x(
      it
      // force redisplay of text labels
    )).select("#" + W).raise().append("g").remove();
  }
  function na(h, g, _, A, E, T, P = !1) {
    const q = as().sort(null).value((N) => N.value)(_);
    return sa(h, g, q, A, E, T, P), q;
  }
  function ra(h, g, _, A, E = !1) {
    const T = dn(h), P = xr(h), N = ft(x(it)).select("#" + g).selectAll(".slice").data(_, (C) => y(C.data));
    N.exit().remove();
    const k = N.enter().append("g").attr("class", "slice").attr("id", (C) => y(C.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), k.append("path").attr("d", (C) => A(C)).attr("fill", E ? "none" : (C) => Ar(C)).attr("stroke", E ? "none" : ut).attr("stroke-width", E ? 0 : O), N.classed("eliminated", (C) => T.includes(C.data.label)).classed("elected", (C) => P.includes(C.data.label)), E || N.on("mouseenter", (C, R) => Zi(C, R)).on("mouseleave", (C, R) => Qi(C, R)), N;
  }
  function ia(h, g, _, A, E, T = !1) {
    const P = ye().outerRadius(E).innerRadius(A);
    ra(h, g, _, P, T).select("path").attr("d", (q) => P(q)).attr("fill", T ? "none" : (q) => Ar(q));
  }
  function sa(h, g, _, A, E, T, P = !1) {
    const z = ye().outerRadius(E).innerRadius(A).startAngle((J) => J.startAngle).endAngle((J) => J.endAngle), q = ye().outerRadius(E).innerRadius(A);
    ft(x(it)).select("#" + g).selectAll(".slice").attr("prevStart", (J) => J.startAngle).attr("prevEnd", (J) => J.endAngle);
    const C = ra(h, g, _, q, P);
    let R = C.size();
    function Pt() {
      R--, R <= 0 && (P || Ji());
    }
    return C.select("path").transition("global").duration(U).attrTween("d", function(J) {
      const Ht = Number(ft(this.parentNode).attr("prevStart")), nt = Number(ft(this.parentNode).attr("prevEnd")), Et = Ze(Ht, J.startAngle), ei = Ze(nt, J.endAngle);
      return (Er) => (z.startAngle(Et(Er)).endAngle(ei(Er)), z(J));
    }).on("end", function(J) {
      J.startAngle === J.endAngle && ft(this).attr("stroke", "none"), Pt();
    }), T && !P && Rl(h, _, E, dn(h)), _;
  }
  function Zi(h, g) {
    s(g.data.label), i("enter"), a(h.clientX), o(h.clientY);
  }
  function Qi(h, g) {
    s(g.data.label), i("leave");
  }
  function Ml(h, g) {
    i("show-exhausted"), a(h.clientX), o(h.clientY);
  }
  function Pl(h, g) {
    i("hide-exhausted");
  }
  var Dl = {
    pieColors: Ot,
    exhaustedLabel: Re,
    countExhaustedVotes: We,
    getEliminatedCandidates: dn,
    getElectedCandidates: xr,
    runFullAnimationFn: Ke,
    animateOnePhaseFn: Me,
    get jsonData() {
      return n();
    },
    set jsonData(h) {
      n(h), rt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(h = 1) {
      r(h), rt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(h) {
      i(h), rt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(h) {
      s(h), rt();
    },
    get mouseX() {
      return a();
    },
    set mouseX(h) {
      a(h), rt();
    },
    get mouseY() {
      return o();
    },
    set mouseY(h) {
      o(h), rt();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(h = (g) => {
    }) {
      l(h), rt();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(h = []) {
      u(h), rt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(h = !1) {
      f(h), rt();
    },
    get firstRoundDeterminesPercentages() {
      return d();
    },
    set firstRoundDeterminesPercentages(h = !1) {
      d(h), rt();
    },
    get randomizeOrder() {
      return c();
    },
    set randomizeOrder(h = !1) {
      c(h), rt();
    },
    get displayPhase() {
      return p();
    },
    set displayPhase(h = 0) {
      p(h), rt();
    }
  }, aa = Zd();
  return vi(aa, (h) => ht(it, h), () => x(it)), Wt(t, aa), zi(Dl);
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
var tp = /* @__PURE__ */ Be("<div></div>"), ep = /* @__PURE__ */ Be('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), np = /* @__PURE__ */ Be('<div role="button" aria-label="Advance animation phase"></div>');
const rp = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function xl(t, e) {
  Vi(e, !0), Hs(t, rp);
  let n = at(e, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = at(e, "currentStep", 7, 0), i = at(e, "disabled", 7, !1), s = at(e, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function o(d) {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), a());
  }
  var l = {
    get labels() {
      return n();
    },
    set labels(d = ["Eliminate", "Transfer", "Consolidate"]) {
      n(d), rt();
    },
    get currentStep() {
      return r();
    },
    set currentStep(d = 0) {
      r(d), rt();
    },
    get disabled() {
      return i();
    },
    set disabled(d = !1) {
      i(d), rt();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(d = () => {
    }) {
      s(d), rt();
    }
  }, u = np();
  let f;
  return u.__click = a, u.__keydown = o, pi(u, 21, n, di, (d, c, p) => {
    var y = ep(), b = _n(y);
    {
      var m = (W) => {
        var ot = tp();
        let Z;
        Qe(() => Z = ii(ot, 1, "connector svelte-1l4eyw0", null, Z, { completed: !i() && p <= r() })), Wt(W, ot);
      };
      Qn(b, (W) => {
        p > 0 && W(m);
      });
    }
    var $ = Jt(b, 2), D = Bt($);
    let M;
    var S = Jt(D, 2);
    let F;
    var L = Bt(S, !0);
    It(S), It($), Qe(() => {
      M = ii(D, 1, "dot svelte-1l4eyw0", null, M, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), F = ii(S, 1, "label svelte-1l4eyw0", null, F, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), mn(L, x(c));
    }), Wt(d, y);
  }), It(u), Qe(() => {
    f = ii(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), xa(u, "tabindex", i() ? -1 : 0), xa(u, "aria-disabled", i());
  }), Wt(t, u), zi(l);
}
Xu(["click", "keydown"]);
Ys(xl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var ip = /* @__PURE__ */ Be("<span> </span> <!>", 1), sp = /* @__PURE__ */ Be("About to eliminate: <!>", 1), ap = /* @__PURE__ */ Be("<span> </span> <!>", 1), op = /* @__PURE__ */ Be(" <!>", 1), lp = /* @__PURE__ */ Be('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), up = /* @__PURE__ */ Be("<span> </span> <br/>", 1), fp = /* @__PURE__ */ Be('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const cp = {
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
function hp(t, e) {
  Vi(e, !0), Hs(t, cp);
  const n = 0.85;
  let r = at(e, "electionSummary", 7), i = at(e, "currentRound", 7, 1), s = at(e, "requestRoundChange", 7, (w) => {
  }), a = at(e, "candidateColors", 23, () => []), o = at(e, "textForWinner", 7, "elected"), l = at(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = at(e, "firstRoundDeterminesPercentages", 7, !1), f = at(e, "randomizeOrder", 7, !1), d = at(e, "showCaptions", 7, !1);
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
  let p = /* @__PURE__ */ vn(() => c[o()] ?? c.elected), y = /* @__PURE__ */ bt(null), b = /* @__PURE__ */ bt(null), m = /* @__PURE__ */ bt(""), $ = /* @__PURE__ */ bt(Pn([])), D = /* @__PURE__ */ bt(""), M = /* @__PURE__ */ bt(""), S = /* @__PURE__ */ bt(0), F = /* @__PURE__ */ bt(0), L = /* @__PURE__ */ vn(() => W(r()));
  function W(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (Y) {
        return console.error("Failed to parse JSON string:", Y), {};
      }
    return w || {};
  }
  function ot(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function Z(w, Y, tt) {
    w.style.left = Y + "px", w.style.top = tt + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const st = w.getBoundingClientRect();
      let Vt = Y, Ue = tt + 20;
      Vt + st.width > window.innerWidth - 12 && (Vt = window.innerWidth - st.width - 12), Vt < 12 && (Vt = 12), Ue + st.height > window.innerHeight - 12 && (Ue = tt - st.height - 12), w.style.left = Vt + "px", w.style.top = Ue + "px";
    });
  }
  function U() {
    switch (x(D)) {
      case "enter":
        ((w) => {
          var Y = eu(w, 2);
          ht($, Y[0], !0), ht(m, Y[1], !0);
        })(ut(x(M), i())), x(y) && (Z(x(y), x(S) || 0, x(F) || 0), x(y).style.opacity = String(n));
        break;
      case "leave":
        x(y) && (x(y).style.opacity = "0"), ht($, [], !0), ht(m, "");
        break;
      case "show-exhausted":
        x(b) && (Z(x(b), x(S) || 0, x(F) || 0), x(b).style.opacity = String(n));
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
  Fs(() => U());
  function lt(w, Y) {
    return w === 1 ? Y ? "vote was" : "vote will be" : Y ? "votes were" : "votes will be";
  }
  function ut(w, Y) {
    const tt = [], pt = w === "exhausted" ? Re() : w;
    let wt;
    w === "exhausted" ? wt = et(1) : wt = x(L).results[0].tally[w], tt.push(`${pt} started with ${wt} votes.`);
    for (let st = 1; st <= Y; st++) {
      st === Y && (w === "exhausted" ? wt = et(Y) : wt = x(L).results[Y - 1].tally[w], tt.push(`${pt} has ${wt} votes at round ${Y}.`));
      const Vt = x(L).results[st - 1].tallyResults, Ue = yt(st);
      for (let ke = 0; ke < Vt.length; ke++) {
        const Cn = Vt[ke].transfers, pn = Vt[ke].eliminated, Mt = Vt[ke].elected;
        if (!Ue) {
          if (pn)
            pn === w && tt.push(`${pt} will be eliminated on round ${st}.`);
          else if (w === Mt && (tt.push(`${pt} ${x(p).event} on round ${st}.`), Cn))
            for (let [zt, At] of Object.entries(Cn))
              tt.push(`${At} ${lt(Number(At), st < Y)} transferred to ${zt} on round ${st}.`);
        }
        const oe = pn || Mt;
        if (oe) {
          const zt = Number(Cn[w]);
          zt && tt.push(`${zt} ${lt(zt, st < Y)} transferred from ${oe} on round ${st}.`);
        }
      }
    }
    return [tt, pt];
  }
  function O() {
    let w = 0;
    for (let Y = 1; Y <= x(L).results.length; Y++) {
      if (yt(Y)) continue;
      const tt = x(L).results[Y - 1].tallyResults;
      for (let pt = 0; pt < tt.length; pt++)
        tt[pt].elected && w++;
    }
    return w;
  }
  let I, Nt = /* @__PURE__ */ bt(0);
  function se(w) {
    var wt;
    return !((wt = x(L)) != null && wt.results) || w < 1 || w > x(L).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [x(L).results[w - 1].tallyResults.some((st) => st.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function mt(w) {
    var tt;
    if (!((tt = x(L)) != null && tt.results) || w < 1 || w > x(L).results.length || w === x(L).results.length) return !0;
    const Y = x(L).results[w - 1].tallyResults;
    return Y.length === 0 || Y.every((pt) => Object.keys(pt.transfers).length === 0);
  }
  function yt(w) {
    return l() && x(L).results && w === x(L).results.length;
  }
  function Q(w) {
    return yt(w) ? [] : I ? I.getEliminatedCandidates(w) : [];
  }
  function kt(w) {
    return yt(w) ? [] : I ? I.getElectedCandidates(w) : [];
  }
  function et(w) {
    return I ? I.countExhaustedVotes(w) : 0;
  }
  function Ot() {
    I && I.animateOnePhaseFn && I.animateOnePhaseFn();
  }
  function Re() {
    return I ? I.exhaustedLabel : "";
  }
  function it() {
    return I ? I.pieColors : {};
  }
  var jt = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), rt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), rt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (Y) => {
    }) {
      s(w), rt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), rt();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), rt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), rt();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), rt();
    },
    get randomizeOrder() {
      return f();
    },
    set randomizeOrder(w = !1) {
      f(w), rt();
    },
    get showCaptions() {
      return d();
    },
    set showCaptions(w = !1) {
      d(w), rt();
    }
  }, ve = fp(), ae = _n(ve), Tn = Bt(ae);
  {
    let w = /* @__PURE__ */ vn(() => se(i())), Y = /* @__PURE__ */ vn(() => mt(i()));
    xl(Tn, {
      get labels() {
        return x(w);
      },
      get currentStep() {
        return x(Nt);
      },
      get disabled() {
        return x(Y);
      },
      onAdvance: Ot
    });
  }
  It(ae);
  var _t = Jt(ae, 4), Se = Bt(_t), We = Bt(Se), Kr = Bt(We);
  vi(
    wl(Kr, {
      get jsonData() {
        return x(L);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: ot,
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
        ht(D, w, !0);
      },
      get mouseData() {
        return x(M);
      },
      set mouseData(w) {
        ht(M, w, !0);
      },
      get mouseX() {
        return x(S);
      },
      set mouseX(w) {
        ht(S, w, !0);
      },
      get mouseY() {
        return x(F);
      },
      set mouseY(w) {
        ht(F, w, !0);
      },
      get displayPhase() {
        return x(Nt);
      },
      set displayPhase(w) {
        ht(Nt, w, !0);
      }
    }),
    (w) => I = w,
    () => I
  ), It(We), It(Se);
  var jr = Jt(Se, 2);
  {
    var Jr = (w) => {
      var Y = lp(), tt = _n(Y), pt = Bt(tt);
      It(tt);
      var wt = Jt(tt, 2), st = Bt(wt);
      {
        var Vt = (Mt) => {
          var oe = sp(), zt = Jt(_n(oe));
          pi(zt, 17, () => Q(i()), di, (At, ge, _e) => {
            var Ge = ip(), me = _n(Ge);
            let Ke;
            var Rn = Bt(me, !0);
            It(me);
            var vt = Jt(me, 2);
            {
              var br = (Me) => {
                var je = ga(", ");
                Wt(Me, je);
              }, $r = /* @__PURE__ */ vn(() => _e < Q(i()).length - 1);
              Qn(vt, (Me) => {
                x($r) && Me(br);
              });
            }
            Qe(
              (Me) => {
                Ke = wa(me, "", Ke, Me), mn(Rn, x(ge));
              },
              [() => ({ color: it()[x(ge)] })]
            ), Wt(At, Ge);
          }), Wt(Mt, oe);
        }, Ue = /* @__PURE__ */ vn(() => Q(i()).length > 0);
        Qn(st, (Mt) => {
          x(Ue) && Mt(Vt);
        });
      }
      var ke = Jt(st, 2);
      {
        var Cn = (Mt) => {
          var oe = op(), zt = _n(oe), At = Jt(zt);
          pi(At, 17, () => kt(i()), di, (ge, _e, Ge) => {
            var me = ap(), Ke = _n(me);
            let Rn;
            var vt = Bt(Ke, !0);
            It(Ke);
            var br = Jt(Ke, 2);
            {
              var $r = (je) => {
                var ji = ga(", ");
                Wt(je, ji);
              }, Me = /* @__PURE__ */ vn(() => Ge < kt(i()).length - 1);
              Qn(br, (je) => {
                x(Me) && je($r);
              });
            }
            Qe(
              (je) => {
                Rn = wa(Ke, "", Rn, je), mn(vt, x(_e));
              },
              [() => ({ color: it()[x(_e)] })]
            ), Wt(ge, me);
          }), Qe(() => mn(zt, `${x(p).caption ?? ""}: `)), Wt(Mt, oe);
        }, pn = /* @__PURE__ */ vn(() => kt(i()).length > 0);
        Qn(ke, (Mt) => {
          x(pn) && Mt(Cn);
        });
      }
      It(wt), Qe((Mt) => mn(pt, `${x(L).config.contest ?? ""}, ${Mt ?? ""} ${x(p).infinitive ?? ""}, Round ${i() ?? ""}.`), [O]), Wt(w, Y);
    };
    Qn(jr, (w) => {
      d() && w(Jr);
    });
  }
  It(_t);
  var Jn = Jt(_t, 2), Ne = Bt(Jn), Ki = Bt(Ne, !0);
  It(Ne);
  var Zr = Jt(Ne, 2);
  pi(Zr, 17, () => x($), di, (w, Y) => {
    var tt = up(), pt = _n(tt), wt = Bt(pt, !0);
    It(pt), us(2), Qe(() => mn(wt, x(Y))), Wt(w, tt);
  }), It(Jn), vi(Jn, (w) => ht(y, w), () => x(y));
  var dn = Jt(Jn, 2), xr = Bt(dn);
  return us(2), It(dn), vi(dn, (w) => ht(b, w), () => x(b)), Qe(
    (w) => {
      mn(Ki, x(m)), mn(xr, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Re]
  ), Wt(t, ve), zi(jt);
}
customElements.define("pie-chart", Ys(
  hp,
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
