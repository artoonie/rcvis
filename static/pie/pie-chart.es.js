var Pl = Object.defineProperty;
var sa = (t) => {
  throw TypeError(t);
};
var Dl = (t, e, n) => e in t ? Pl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ht = (t, e, n) => Dl(t, typeof e != "symbol" ? e + "" : e, n), Zi = (t, e, n) => e.has(t) || sa("Cannot " + n);
var v = (t, e, n) => (Zi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), V = (t, e, n) => e.has(t) ? sa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), L = (t, e, n, r) => (Zi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), At = (t, e, n) => (Zi(t, e, "access private method"), n);
var qa;
typeof window < "u" && ((qa = window.__svelte ?? (window.__svelte = {})).v ?? (qa.v = /* @__PURE__ */ new Set())).add("5");
const Il = 1, Fl = 2, za = 4, Ol = 8, Ll = 16, ql = 1, Vl = 4, Hl = 8, Yl = 16, zl = 1, Bl = 2, Cs = "[", Di = "[!", Ss = "]", fr = {}, Ct = Symbol(), Ba = "http://www.w3.org/1999/xhtml", ss = !1;
var Xa = Array.isArray, Xl = Array.prototype.indexOf, cr = Array.prototype.includes, Ii = Array.from, xi = Object.keys, bi = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Wl = Object.getOwnPropertyDescriptors, Ul = Object.prototype, Gl = Array.prototype, Wa = Object.getPrototypeOf, aa = Object.isExtensible;
const Kl = () => {
};
function jl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ua() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Jl(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Nt = 2, Fr = 4, Fi = 8, Ga = 1 << 24, ln = 16, Te = 32, xn = 64, Ka = 128, pe = 512, Tt = 1024, kt = 2048, Ee = 4096, re = 8192, rn = 16384, yr = 32768, hr = 65536, oa = 1 << 17, ja = 1 << 18, Gn = 1 << 19, Zl = 1 << 20, en = 1 << 25, Bn = 65536, as = 1 << 21, Ns = 1 << 22, gn = 1 << 23, Pr = Symbol("$state"), Ja = Symbol("legacy props"), Ql = Symbol(""), Sn = new class extends Error {
  constructor() {
    super(...arguments);
    ht(this, "name", "StaleReactionError");
    ht(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Va;
const tu = ((Va = globalThis.document) == null ? void 0 : /* @__PURE__ */ Va.contentType.includes("xml")) ?? !1, Ur = 3, wr = 8;
function eu(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function nu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ru(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function iu(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function su() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function au(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ou() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function lu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function uu(t) {
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
function Oi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function pu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let G = !1;
function nn(t) {
  G = t;
}
let X;
function Ht(t) {
  if (t === null)
    throw Oi(), fr;
  return X = t;
}
function Li() {
  return Ht(/* @__PURE__ */ Oe(X));
}
function qt(t) {
  if (G) {
    if (/* @__PURE__ */ Oe(X) !== null)
      throw Oi(), fr;
    X = t;
  }
}
function os(t = 1) {
  if (G) {
    for (var e = t, n = X; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n);
    X = n;
  }
}
function $i(t = !0) {
  for (var e = 0, n = X; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ss) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Cs || r === Di || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n)
    );
    t && n.remove(), n = i;
  }
}
function Za(t) {
  if (!t || t.nodeType !== wr)
    throw Oi(), fr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Qa(t) {
  return t === this.v;
}
function vu(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function to(t) {
  return !vu(t, this.v);
}
let gu = !1, se = null;
function dr(t) {
  se = t;
}
function qi(t, e = !1, n) {
  se = {
    p: se,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Vi(t) {
  var e = (
    /** @type {ComponentContext} */
    se
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      To(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, se = e.p, t ?? /** @type {T} */
  {};
}
function eo() {
  return !0;
}
let Nn = [];
function no() {
  var t = Nn;
  Nn = [], jl(t);
}
function _n(t) {
  if (Nn.length === 0 && !Dr) {
    var e = Nn;
    queueMicrotask(() => {
      e === Nn && no();
    });
  }
  Nn.push(t);
}
function _u() {
  for (; Nn.length > 0; )
    no();
}
function ro(t) {
  var e = j;
  if (e === null)
    return B.f |= gn, t;
  if ((e.f & yr) === 0 && (e.f & Fr) === 0)
    throw t;
  pr(t, e);
}
function pr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ka) !== 0) {
      if ((e.f & yr) === 0)
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
const mu = -7169;
function pt(t, e) {
  t.f = t.f & mu | e;
}
function ks(t) {
  (t.f & pe) !== 0 || t.deps === null ? pt(t, Tt) : pt(t, Ee);
}
function io(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Nt) === 0 || (e.f & Bn) === 0 || (e.f ^= Bn, io(
        /** @type {Derived} */
        e.deps
      ));
}
function so(t, e, n) {
  (t.f & kt) !== 0 ? e.add(t) : (t.f & Ee) !== 0 && n.add(t), io(t.deps), pt(t, Tt);
}
const ei = /* @__PURE__ */ new Set();
let U = null, St = null, jt = [], Hi = null, ls = !1, Dr = !1;
var rr, ir, Dn, sr, Yr, zr, In, je, ar, Fe, us, fs, ao;
const Ks = class Ks {
  constructor() {
    V(this, Fe);
    ht(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ht(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ht(this, "previous", /* @__PURE__ */ new Map());
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
    V(this, je, /* @__PURE__ */ new Map());
    ht(this, "is_fork", !1);
    V(this, ar, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, sr) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, je).has(e) || v(this, je).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, je).get(e);
    if (n) {
      v(this, je).delete(e);
      for (var r of n.d)
        pt(r, kt), $e(r);
      for (r of n.m)
        pt(r, Ee), $e(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    jt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      At(this, Fe, us).call(this, s, n, r);
    if (this.is_deferred()) {
      At(this, Fe, fs).call(this, r), At(this, Fe, fs).call(this, n);
      for (const [s, a] of v(this, je))
        fo(s, a);
    } else {
      for (const s of v(this, rr)) s();
      v(this, rr).clear(), v(this, Dn) === 0 && At(this, Fe, ao).call(this), U = null, la(r), la(n), (i = v(this, Yr)) == null || i.resolve();
    }
    St = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== Ct && !this.previous.has(e) && this.previous.set(e, n), (e.f & gn) === 0 && (this.current.set(e, e.v), St == null || St.set(e, e.v));
  }
  activate() {
    U = this, this.apply();
  }
  deactivate() {
    U === this && (U = null, St = null);
  }
  flush() {
    if (this.activate(), jt.length > 0) {
      if (oo(), U !== null && U !== this)
        return;
    } else v(this, Dn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, ir)) e(this);
    v(this, ir).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    L(this, Dn, v(this, Dn) + 1), e && L(this, sr, v(this, sr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    L(this, Dn, v(this, Dn) - 1), e && L(this, sr, v(this, sr) - 1), !v(this, ar) && (L(this, ar, !0), _n(() => {
      L(this, ar, !1), this.is_deferred() ? jt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, zr))
      v(this, In).delete(e), pt(e, kt), $e(e);
    for (const e of v(this, In))
      pt(e, Ee), $e(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, rr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, ir).add(e);
  }
  settled() {
    return (v(this, Yr) ?? L(this, Yr, Ua())).promise;
  }
  static ensure() {
    if (U === null) {
      const e = U = new Ks();
      ei.add(U), Dr || _n(() => {
        U === e && e.flush();
      });
    }
    return U;
  }
  apply() {
  }
};
rr = new WeakMap(), ir = new WeakMap(), Dn = new WeakMap(), sr = new WeakMap(), Yr = new WeakMap(), zr = new WeakMap(), In = new WeakMap(), je = new WeakMap(), ar = new WeakMap(), Fe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
us = function(e, n, r) {
  e.f ^= Tt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Te | xn)) !== 0, l = o && (a & Tt) !== 0, u = l || (a & re) !== 0 || v(this, je).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Tt : s !== null && (a & (Fr | Fi | Ga)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Gr(i) && ((a & ln) !== 0 && v(this, In).add(i), gr(i));
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
fs = function(e) {
  for (var n = 0; n < e.length; n += 1)
    so(e[n], v(this, zr), v(this, In));
}, ao = function() {
  var i;
  if (ei.size > 1) {
    this.previous.clear();
    var e = St, n = !0;
    for (const s of ei) {
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
        var r = jt;
        jt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          lo(f, o, l, u);
        if (jt.length > 0) {
          U = s, s.apply();
          for (const f of jt)
            At(i = s, Fe, us).call(i, f, [], []);
          s.deactivate();
        }
        jt = r;
      }
    }
    U = null, St = e;
  }
  this.committed = !0, ei.delete(this);
};
let sn = Ks;
function st(t) {
  var e = Dr;
  Dr = !0;
  try {
    for (var n; ; ) {
      if (_u(), jt.length === 0 && (U == null || U.flush(), jt.length === 0))
        return Hi = null, /** @type {T} */
        n;
      oo();
    }
  } finally {
    Dr = e;
  }
}
function oo() {
  ls = !0;
  var t = null;
  try {
    for (var e = 0; jt.length > 0; ) {
      var n = sn.ensure();
      if (e++ > 1e3) {
        var r, i;
        yu();
      }
      n.process(jt), mn.clear();
    }
  } finally {
    jt = [], ls = !1, Hi = null;
  }
}
function yu() {
  try {
    ou();
  } catch (t) {
    pr(t, Hi);
  }
}
let we = null;
function la(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (rn | re)) === 0 && Gr(r) && (we = /* @__PURE__ */ new Set(), gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && So(r), (we == null ? void 0 : we.size) > 0)) {
        mn.clear();
        for (const i of we) {
          if ((i.f & (rn | re)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            we.has(a) && (we.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (rn | re)) === 0 && gr(l);
          }
        }
        we.clear();
      }
    }
    we = null;
  }
}
function lo(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Nt) !== 0 ? lo(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Ns | ln)) !== 0 && (s & kt) === 0 && uo(i, e, r) && (pt(i, kt), $e(
        /** @type {Effect} */
        i
      ));
    }
}
function uo(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (cr.call(e, i))
        return !0;
      if ((i.f & Nt) !== 0 && uo(
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
    if (ls && e === j && (n & ln) !== 0 && (n & ja) === 0)
      return;
    if ((n & (xn | Te)) !== 0) {
      if ((n & Tt) === 0) return;
      e.f ^= Tt;
    }
  }
  jt.push(e);
}
function fo(t, e) {
  if (!((t.f & Te) !== 0 && (t.f & Tt) !== 0)) {
    (t.f & kt) !== 0 ? e.d.push(t) : (t.f & Ee) !== 0 && e.m.push(t), pt(t, Tt);
    for (var n = t.first; n !== null; )
      fo(n, e), n = n.next;
  }
}
function wu(t) {
  let e = 0, n = Xn(0), r;
  return () => {
    Ds() && (b(n), Fs(() => (e === 0 && (r = Bi(() => t(() => Ir(n)))), e += 1, () => {
      _n(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ir(n));
      });
    })));
  };
}
var xu = hr | Gn | Ka;
function bu(t, e, n) {
  new $u(t, e, n);
}
var ee, Br, Se, Fn, Ne, ce, Gt, ke, Je, vn, On, Ze, or, Ln, lr, ur, Qe, Mi, yt, co, ho, cs, ui, fi, hs;
class $u {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    V(this, yt);
    /** @type {Boundary | null} */
    ht(this, "parent");
    ht(this, "is_pending", !1);
    /** @type {TemplateNode} */
    V(this, ee);
    /** @type {TemplateNode | null} */
    V(this, Br, G ? X : null);
    /** @type {BoundaryProps} */
    V(this, Se);
    /** @type {((anchor: Node) => void)} */
    V(this, Fn);
    /** @type {Effect} */
    V(this, Ne);
    /** @type {Effect | null} */
    V(this, ce, null);
    /** @type {Effect | null} */
    V(this, Gt, null);
    /** @type {Effect | null} */
    V(this, ke, null);
    /** @type {DocumentFragment | null} */
    V(this, Je, null);
    /** @type {TemplateNode | null} */
    V(this, vn, null);
    V(this, On, 0);
    V(this, Ze, 0);
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
    V(this, Qe, null);
    V(this, Mi, wu(() => (L(this, Qe, Xn(v(this, On))), () => {
      L(this, Qe, null);
    })));
    L(this, ee, e), L(this, Se, n), L(this, Fn, r), this.parent = /** @type {Effect} */
    j.b, this.is_pending = !!v(this, Se).pending, L(this, Ne, Os(() => {
      if (j.b = this, G) {
        const s = v(this, Br);
        Li(), /** @type {Comment} */
        s.nodeType === wr && /** @type {Comment} */
        s.data === Di ? At(this, yt, ho).call(this) : (At(this, yt, co).call(this), v(this, Ze) === 0 && (this.is_pending = !1));
      } else {
        var i = At(this, yt, cs).call(this);
        try {
          L(this, ce, de(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, Ze) > 0 ? At(this, yt, fi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, vn)) == null || s.remove();
      };
    }, xu)), G && L(this, ee, X);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    so(e, v(this, lr), v(this, ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Se).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    At(this, yt, hs).call(this, e), L(this, On, v(this, On) + e), !(!v(this, Qe) || v(this, or)) && (L(this, or, !0), _n(() => {
      L(this, or, !1), v(this, Qe) && vr(v(this, Qe), v(this, On));
    }));
  }
  get_effect_pending() {
    return v(this, Mi).call(this), b(
      /** @type {Source<number>} */
      v(this, Qe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Se).onerror;
    let r = v(this, Se).failed;
    if (v(this, Ln) || !n && !r)
      throw e;
    v(this, ce) && (Yt(v(this, ce)), L(this, ce, null)), v(this, Gt) && (Yt(v(this, Gt)), L(this, Gt, null)), v(this, ke) && (Yt(v(this, ke)), L(this, ke, null)), G && (Ht(
      /** @type {TemplateNode} */
      v(this, Br)
    ), os(), Ht($i()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        pu();
        return;
      }
      i = !0, s && du(), sn.ensure(), L(this, On, 0), v(this, ke) !== null && Hn(v(this, ke), () => {
        L(this, ke, null);
      }), this.is_pending = this.has_pending_snippet(), L(this, ce, At(this, yt, ui).call(this, () => (L(this, Ln, !1), de(() => v(this, Fn).call(this, v(this, ee)))))), v(this, Ze) > 0 ? At(this, yt, fi).call(this) : this.is_pending = !1;
    };
    _n(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        pr(o, v(this, Ne) && v(this, Ne).parent);
      }
      r && L(this, ke, At(this, yt, ui).call(this, () => {
        sn.ensure(), L(this, Ln, !0);
        try {
          return de(() => {
            r(
              v(this, ee),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return pr(
            o,
            /** @type {Effect} */
            v(this, Ne).parent
          ), null;
        } finally {
          L(this, Ln, !1);
        }
      }));
    });
  }
}
ee = new WeakMap(), Br = new WeakMap(), Se = new WeakMap(), Fn = new WeakMap(), Ne = new WeakMap(), ce = new WeakMap(), Gt = new WeakMap(), ke = new WeakMap(), Je = new WeakMap(), vn = new WeakMap(), On = new WeakMap(), Ze = new WeakMap(), or = new WeakMap(), Ln = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), Qe = new WeakMap(), Mi = new WeakMap(), yt = new WeakSet(), co = function() {
  try {
    L(this, ce, de(() => v(this, Fn).call(this, v(this, ee))));
  } catch (e) {
    this.error(e);
  }
}, ho = function() {
  const e = v(this, Se).pending;
  e && (L(this, Gt, de(() => e(v(this, ee)))), _n(() => {
    var n = At(this, yt, cs).call(this);
    L(this, ce, At(this, yt, ui).call(this, () => (sn.ensure(), de(() => v(this, Fn).call(this, n))))), v(this, Ze) > 0 ? At(this, yt, fi).call(this) : (Hn(
      /** @type {Effect} */
      v(this, Gt),
      () => {
        L(this, Gt, null);
      }
    ), this.is_pending = !1);
  }));
}, cs = function() {
  var e = v(this, ee);
  return this.is_pending && (L(this, vn, ie()), v(this, ee).before(v(this, vn)), e = v(this, vn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ui = function(e) {
  var n = j, r = B, i = se;
  Ie(v(this, Ne)), ge(v(this, Ne)), dr(v(this, Ne).ctx);
  try {
    return e();
  } catch (s) {
    return ro(s), null;
  } finally {
    Ie(n), ge(r), dr(i);
  }
}, fi = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Se).pending
  );
  v(this, ce) !== null && (L(this, Je, document.createDocumentFragment()), v(this, Je).append(
    /** @type {TemplateNode} */
    v(this, vn)
  ), Mo(v(this, ce), v(this, Je))), v(this, Gt) === null && L(this, Gt, de(() => e(v(this, ee))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
hs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && At(n = this.parent, yt, hs).call(n, e);
    return;
  }
  if (L(this, Ze, v(this, Ze) + e), v(this, Ze) === 0) {
    this.is_pending = !1;
    for (const r of v(this, lr))
      pt(r, kt), $e(r);
    for (const r of v(this, ur))
      pt(r, Ee), $e(r);
    v(this, lr).clear(), v(this, ur).clear(), v(this, Gt) && Hn(v(this, Gt), () => {
      L(this, Gt, null);
    }), v(this, Je) && (v(this, ee).before(v(this, Je)), L(this, Je, null));
  }
};
function Au(t, e, n, r) {
  const i = Yi;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
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
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ Tu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => pr(c, o));
  }
  u ? u.then(h) : h();
}
function Eu() {
  var t = j, e = B, n = se, r = U;
  return function(s = !0) {
    Ie(t), ge(e), dr(n), s && (r == null || r.activate());
  };
}
function ds() {
  Ie(null), ge(null), dr(null);
}
// @__NO_SIDE_EFFECTS__
function Yi(t) {
  var e = Nt | kt, n = B !== null && (B.f & Nt) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return j !== null && (j.f |= Gn), {
    ctx: se,
    deps: null,
    effects: null,
    equals: Qa,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ct
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Tu(t, e, n) {
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
    Ct
  ), o = !B, l = /* @__PURE__ */ new Map();
  return Fu(() => {
    var p;
    var u = Ua();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
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
function cn(t) {
  const e = /* @__PURE__ */ Yi(t);
  return Po(e), e;
}
// @__NO_SIDE_EFFECTS__
function po(t) {
  const e = /* @__PURE__ */ Yi(t);
  return e.equals = to, e;
}
function Ru(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Yt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Cu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Nt) === 0)
      return (e.f & rn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ms(t) {
  var e, n = j;
  Ie(Cu(t));
  try {
    t.f &= ~Bn, Ru(t), e = Oo(t);
  } finally {
    Ie(n);
  }
  return e;
}
function vo(t) {
  var e = Ms(t);
  if (!t.equals(e) && (t.wv = Io(), (!(U != null && U.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    pt(t, Tt);
    return;
  }
  wn || (St !== null ? (Ds() || U != null && U.is_fork) && St.set(t, e) : ks(t));
}
function Su(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(Sn), r.teardown = Kl, r.ac = null, Or(r, 0), Ls(r));
}
function go(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && gr(e);
}
let ps = /* @__PURE__ */ new Set();
const mn = /* @__PURE__ */ new Map();
let _o = !1;
function Xn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Qa,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Et(t, e) {
  const n = Xn(t);
  return Po(n), n;
}
// @__NO_SIDE_EFFECTS__
function mo(t, e = !1, n = !0) {
  const r = Xn(t);
  return e || (r.equals = to), r;
}
function dt(t, e, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ae || (B.f & oa) !== 0) && eo() && (B.f & (Nt | ln | Ns | oa)) !== 0 && (ve === null || !cr.call(ve, t)) && hu();
  let r = n ? kn(e) : e;
  return vr(t, r);
}
function vr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    wn ? mn.set(t, e) : mn.set(t, n), t.v = e;
    var r = sn.ensure();
    if (r.capture(t, n), (t.f & Nt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & kt) !== 0 && Ms(i), ks(i);
    }
    t.wv = Io(), yo(t, kt), j !== null && (j.f & Tt) !== 0 && (j.f & (Te | xn)) === 0 && (fe === null ? qu([t]) : fe.push(t)), !r.is_fork && ps.size > 0 && !_o && Nu();
  }
  return e;
}
function Nu() {
  _o = !1;
  for (const t of ps)
    (t.f & Tt) !== 0 && pt(t, Ee), Gr(t) && gr(t);
  ps.clear();
}
function Ir(t) {
  dt(t, t.v + 1);
}
function yo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & kt) === 0;
      if (o && pt(s, e), (a & Nt) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        St == null || St.delete(l), (a & Bn) === 0 && (a & pe && (s.f |= Bn), yo(l, Ee));
      } else o && ((a & ln) !== 0 && we !== null && we.add(
        /** @type {Effect} */
        s
      ), $e(
        /** @type {Effect} */
        s
      ));
    }
}
function kn(t) {
  if (typeof t != "object" || t === null || Pr in t)
    return t;
  const e = Wa(t);
  if (e !== Ul && e !== Gl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Xa(t), i = /* @__PURE__ */ Et(0), s = Yn, a = (o) => {
    if (Yn === s)
      return o();
    var l = B, u = Yn;
    ge(null), ca(s);
    var f = o();
    return ge(l), ca(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ Et(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ Et(u.value);
          return n.set(l, h), h;
        }) : dt(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ Et(Ct));
            n.set(l, f), Ir(i);
          }
        } else
          dt(u, Ct), Ir(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Pr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Vn(o, l)) != null && p.writable) && (f = a(() => {
          var m = kn(h ? o[l] : Ct), $ = /* @__PURE__ */ Et(m);
          return $;
        }), n.set(l, f)), f !== void 0) {
          var c = b(f);
          return c === Ct ? void 0 : c;
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
          if (h !== void 0 && c !== Ct)
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
        var u = n.get(l), f = u !== void 0 && u.v !== Ct || Reflect.has(o, l);
        if (u !== void 0 || j !== null && (!f || (c = Vn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? kn(o[l]) : Ct, m = /* @__PURE__ */ Et(p);
            return m;
          }), n.set(l, u));
          var h = b(u);
          if (h === Ct)
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
            m !== void 0 ? dt(m, Ct) : p in o && (m = a(() => /* @__PURE__ */ Et(Ct)), n.set(p + "", m));
          }
        if (h === void 0)
          (!c || (S = Vn(o, l)) != null && S.writable) && (h = a(() => /* @__PURE__ */ Et(void 0)), dt(h, kn(u)), n.set(l, h));
        else {
          c = h.v !== Ct;
          var $ = a(() => kn(u));
          dt(h, $);
        }
        var _ = Reflect.getOwnPropertyDescriptor(o, l);
        if (_ != null && _.set && _.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(l);
            Number.isInteger(F) && F >= x.v && dt(x, F + 1);
          }
          Ir(i);
        }
        return !0;
      },
      ownKeys(o) {
        b(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== Ct;
        });
        for (var [u, f] of n)
          f.v !== Ct && !(u in o) && l.push(u);
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
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    xo = Vn(e, "firstChild").get, bo = Vn(e, "nextSibling").get, aa(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), aa(n) && (n.__t = void 0);
  }
}
function ie(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function an(t) {
  return (
    /** @type {TemplateNode | null} */
    xo.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  return (
    /** @type {TemplateNode | null} */
    bo.call(t)
  );
}
function Ut(t, e) {
  if (!G)
    return /* @__PURE__ */ an(t);
  var n = /* @__PURE__ */ an(X);
  if (n === null)
    n = X.appendChild(ie());
  else if (e && n.nodeType !== Ur) {
    var r = ie();
    return n == null || n.before(r), Ht(r), r;
  }
  return e && zi(
    /** @type {Text} */
    n
  ), Ht(n), n;
}
function dn(t, e = !1) {
  if (!G) {
    var n = /* @__PURE__ */ an(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Oe(n) : n;
  }
  if (e) {
    if ((X == null ? void 0 : X.nodeType) !== Ur) {
      var r = ie();
      return X == null || X.before(r), Ht(r), r;
    }
    zi(
      /** @type {Text} */
      X
    );
  }
  return X;
}
function Qt(t, e = 1, n = !1) {
  let r = G ? X : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(r);
  if (!G)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ur) {
      var s = ie();
      return r === null ? i == null || i.after(s) : r.before(s), Ht(s), s;
    }
    zi(
      /** @type {Text} */
      r
    );
  }
  return Ht(r), r;
}
function $o(t) {
  t.textContent = "";
}
function Ao() {
  return !1;
}
function Ps(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ba, t, void 0)
  );
}
function zi(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Ur; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function Eo(t) {
  var e = B, n = j;
  ge(null), Ie(null);
  try {
    return t();
  } finally {
    ge(e), Ie(n);
  }
}
function ku(t) {
  j === null && (B === null && au(), su()), wn && iu();
}
function Mu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Le(t, e, n) {
  var r = j;
  r !== null && (r.f & re) !== 0 && (t |= re);
  var i = {
    ctx: se,
    deps: null,
    nodes: null,
    f: t | kt | pe,
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
      gr(i);
    } catch (o) {
      throw Yt(i), o;
    }
  else e !== null && $e(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Gn) === 0 && (s = s.first, (t & ln) !== 0 && (t & hr) !== 0 && s !== null && (s.f |= hr)), s !== null && (s.parent = r, r !== null && Mu(s, r), B !== null && (B.f & Nt) !== 0 && (t & xn) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ds() {
  return B !== null && !Ae;
}
function Pu(t) {
  const e = Le(Fi, null, !1);
  return pt(e, Tt), e.teardown = t, e;
}
function Is(t) {
  ku();
  var e = (
    /** @type {Effect} */
    j.f
  ), n = !B && (e & Te) !== 0 && (e & yr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      se
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return To(t);
}
function To(t) {
  return Le(Fr | Zl, t, !1);
}
function Du(t) {
  sn.ensure();
  const e = Le(xn | Gn, t, !0);
  return () => {
    Yt(e);
  };
}
function Iu(t) {
  sn.ensure();
  const e = Le(xn | Gn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hn(e, () => {
      Yt(e), r(void 0);
    }) : (Yt(e), r(void 0));
  });
}
function Ro(t) {
  return Le(Fr, t, !1);
}
function Fu(t) {
  return Le(Ns | Gn, t, !0);
}
function Fs(t, e = 0) {
  return Le(Fi | e, t, !0);
}
function Ke(t, e = [], n = [], r = []) {
  Au(r, e, n, (i) => {
    Le(Fi, () => t(...i.map(b)), !0);
  });
}
function Os(t, e = 0) {
  var n = Le(ln | e, t, !0);
  return n;
}
function de(t) {
  return Le(Te | Gn, t, !0);
}
function Co(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = wn, r = B;
    fa(!0), ge(null);
    try {
      e.call(null);
    } finally {
      fa(n), ge(r);
    }
  }
}
function Ls(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Eo(() => {
      i.abort(Sn);
    });
    var r = n.next;
    (n.f & xn) !== 0 ? n.parent = null : Yt(n, e), n = r;
  }
}
function Ou(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Te) === 0 && Yt(e), e = n;
  }
}
function Yt(t, e = !0) {
  var n = !1;
  (e || (t.f & ja) !== 0) && t.nodes !== null && t.nodes.end !== null && (Lu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ls(t, e && !n), Or(t, 0), pt(t, rn);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Co(t);
  var i = t.parent;
  i !== null && i.first !== null && So(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Lu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Oe(t);
    t.remove(), t = n;
  }
}
function So(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Hn(t, e, n = !0) {
  var r = [];
  No(t, r, !0);
  var i = () => {
    n && Yt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function No(t, e, n) {
  if ((t.f & re) === 0) {
    t.f ^= re;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Te) !== 0 && (t.f & ln) !== 0;
      No(i, e, a ? n : !1), i = s;
    }
  }
}
function qs(t) {
  ko(t, !0);
}
function ko(t, e) {
  if ((t.f & re) !== 0) {
    t.f ^= re, (t.f & Tt) === 0 && (pt(t, kt), $e(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & Te) !== 0;
      ko(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Mo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Oe(n);
      e.append(n), n = i;
    }
}
let ci = !1, wn = !1;
function fa(t) {
  wn = t;
}
let B = null, Ae = !1;
function ge(t) {
  B = t;
}
let j = null;
function Ie(t) {
  j = t;
}
let ve = null;
function Po(t) {
  B !== null && (ve === null ? ve = [t] : ve.push(t));
}
let Jt = null, te = 0, fe = null;
function qu(t) {
  fe = t;
}
let Do = 1, Mn = 0, Yn = Mn;
function ca(t) {
  Yn = t;
}
function Io() {
  return ++Do;
}
function Gr(t) {
  var e = t.f;
  if ((e & kt) !== 0)
    return !0;
  if (e & Nt && (t.f &= ~Bn), (e & Ee) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gr(
        /** @type {Derived} */
        s
      ) && vo(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & pe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    St === null && pt(t, Tt);
  }
  return !1;
}
function Fo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ve !== null && cr.call(ve, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Nt) !== 0 ? Fo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? pt(s, kt) : (s.f & Tt) !== 0 && pt(s, Ee), $e(
        /** @type {Effect} */
        s
      ));
    }
}
function Oo(t) {
  var $;
  var e = Jt, n = te, r = fe, i = B, s = ve, a = se, o = Ae, l = Yn, u = t.f;
  Jt = /** @type {null | Value[]} */
  null, te = 0, fe = null, B = (u & (Te | xn)) === 0 ? t : null, ve = null, dr(t.ctx), Ae = !1, Yn = ++Mn, t.ac !== null && (Eo(() => {
    t.ac.abort(Sn);
  }), t.ac = null);
  try {
    t.f |= as;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= yr;
    var c = t.deps, p = U == null ? void 0 : U.is_fork;
    if (Jt !== null) {
      var m;
      if (p || Or(t, te), c !== null && te > 0)
        for (c.length = te + Jt.length, m = 0; m < Jt.length; m++)
          c[te + m] = Jt[m];
      else
        t.deps = c = Jt;
      if (Ds() && (t.f & pe) !== 0)
        for (m = te; m < c.length; m++)
          (($ = c[m]).reactions ?? ($.reactions = [])).push(t);
    } else !p && c !== null && te < c.length && (Or(t, te), c.length = te);
    if (eo() && fe !== null && !Ae && c !== null && (t.f & (Nt | Ee | kt)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      fe.length; m++)
        Fo(
          fe[m],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (Mn++, i.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          i.deps[_].rv = Mn;
      if (e !== null)
        for (const _ of e)
          _.rv = Mn;
      fe !== null && (r === null ? r = fe : r.push(.../** @type {Source[]} */
      fe));
    }
    return (t.f & gn) !== 0 && (t.f ^= gn), h;
  } catch (_) {
    return ro(_);
  } finally {
    t.f ^= as, Jt = e, te = n, fe = r, B = i, ve = s, dr(a), Ae = o, Yn = l;
  }
}
function Vu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Xl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Nt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Jt === null || !cr.call(Jt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & pe) !== 0 && (s.f ^= pe, s.f &= ~Bn), ks(s), Su(s), Or(s, 0);
  }
}
function Or(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Vu(t, n[r]);
}
function gr(t) {
  var e = t.f;
  if ((e & rn) === 0) {
    pt(t, Tt);
    var n = j, r = ci;
    j = t, ci = !0;
    try {
      (e & (ln | Ga)) !== 0 ? Ou(t) : Ls(t), Co(t);
      var i = Oo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Do;
      var s;
      ss && gu && (t.f & kt) !== 0 && t.deps;
    } finally {
      ci = r, j = n;
    }
  }
}
function b(t) {
  var e = t.f, n = (e & Nt) !== 0;
  if (B !== null && !Ae) {
    var r = j !== null && (j.f & rn) !== 0;
    if (!r && (ve === null || !cr.call(ve, t))) {
      var i = B.deps;
      if ((B.f & as) !== 0)
        t.rv < Mn && (t.rv = Mn, Jt === null && i !== null && i[te] === t ? te++ : Jt === null ? Jt = [t] : Jt.push(t));
      else {
        (B.deps ?? (B.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [B] : cr.call(s, B) || s.push(B);
      }
    }
  }
  if (wn && mn.has(t))
    return mn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (wn) {
      var o = a.v;
      return ((a.f & Tt) === 0 && a.reactions !== null || qo(a)) && (o = Ms(a)), mn.set(a, o), o;
    }
    var l = (a.f & pe) === 0 && !Ae && B !== null && (ci || (B.f & pe) !== 0), u = (a.f & yr) === 0;
    Gr(a) && (l && (a.f |= pe), vo(a)), l && !u && (go(a), Lo(a));
  }
  if (St != null && St.has(t))
    return St.get(t);
  if ((t.f & gn) !== 0)
    throw t.v;
  return t.v;
}
function Lo(t) {
  if (t.f |= pe, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Nt) !== 0 && (e.f & pe) === 0 && (go(
        /** @type {Derived} */
        e
      ), Lo(
        /** @type {Derived} */
        e
      ));
}
function qo(t) {
  if (t.v === Ct) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (mn.has(e) || (e.f & Nt) !== 0 && qo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Bi(t) {
  var e = Ae;
  try {
    return Ae = !0, t();
  } finally {
    Ae = e;
  }
}
const Vo = /* @__PURE__ */ new Set(), gs = /* @__PURE__ */ new Set();
function Hu(t) {
  for (var e = 0; e < t.length; e++)
    Vo.add(t[e]);
  for (var n of gs)
    n(t);
}
let ha = null;
function da(t) {
  var _;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((_ = t.composedPath) == null ? void 0 : _.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ha = t;
  var a = 0, o = ha === t && t.__root;
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
    bi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = B, h = j;
    ge(null), Ie(null);
    try {
      for (var c, p = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var $ = s["__" + r];
          $ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && $.call(s, t);
        } catch (x) {
          c ? p.push(x) : c = x;
        }
        if (t.cancelBubble || m === e || m === null)
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
      t.__root = e, delete t.currentTarget, ge(f), Ie(h);
    }
  }
}
var Ha, Ya;
const Qi = (Ya = (Ha = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ha.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ya.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Yu(t) {
  return (
    /** @type {string} */
    (Qi == null ? void 0 : Qi.createHTML(t)) ?? t
  );
}
function Ho(t, e = !1) {
  var n = Ps("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Yu(t) : t, n.content;
}
function yn(t, e) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function qe(t, e) {
  var n = (e & zl) !== 0, r = (e & Bl) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (G)
      return yn(X, null), X;
    i === void 0 && (i = Ho(s ? t : "<!>" + t, !0), n || (i = /** @type {TemplateNode} */
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
function zu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
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
function Bu(t, e) {
  return /* @__PURE__ */ zu(t, e, "svg");
}
function pa(t = "") {
  if (!G) {
    var e = ie(t + "");
    return yn(e, e), e;
  }
  var n = X;
  return n.nodeType !== Ur ? (n.before(n = ie()), Ht(n)) : zi(
    /** @type {Text} */
    n
  ), yn(n, n), n;
}
function Kt(t, e) {
  if (G) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((n.f & yr) === 0 || n.nodes.end === null) && (n.nodes.end = X), Li();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Xu = ["touchstart", "touchmove"];
function Wu(t) {
  return Xu.includes(t);
}
function pn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Yo(t, e) {
  return zo(t, e);
}
function Uu(t, e) {
  vs(), e.intro = e.intro ?? !1;
  const n = e.target, r = G, i = X;
  try {
    for (var s = /* @__PURE__ */ an(n); s && (s.nodeType !== wr || /** @type {Comment} */
    s.data !== Cs); )
      s = /* @__PURE__ */ Oe(s);
    if (!s)
      throw fr;
    nn(!0), Ht(
      /** @type {Comment} */
      s
    );
    const a = zo(t, { ...e, anchor: s });
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== fr && console.warn("Failed to hydrate: ", a), e.recover === !1 && lu(), vs(), $o(n), nn(!1), Yo(t, e);
  } finally {
    nn(r), Ht(i);
  }
}
const ni = /* @__PURE__ */ new Map();
function zo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  vs();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var m = Wu(p);
        for (const x of [e, document]) {
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
    var h = n ?? e.appendChild(ie());
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
          se
        );
        if (s && (p.c = s), i && (r.$$events = i), G && yn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, G && (j.nodes.end = X, X === null || X.nodeType !== wr || /** @type {Comment} */
        X.data !== Ss))
          throw Oi(), fr;
        Vi();
      }
    ), () => {
      var $;
      for (var c of o)
        for (const _ of [e, document]) {
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
function Gu(t, e) {
  const n = _s.get(t);
  return n ? (_s.delete(t), n(e)) : Promise.resolve();
}
var xe, Me, ne, qn, Xr, Wr, Pi;
class Ku {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    ht(this, "anchor");
    /** @type {Map<Batch, Key>} */
    V(this, xe, /* @__PURE__ */ new Map());
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
    V(this, Me, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    V(this, ne, /* @__PURE__ */ new Map());
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
      var e = (
        /** @type {Batch} */
        U
      );
      if (v(this, xe).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, xe).get(e)
        ), r = v(this, Me).get(n);
        if (r)
          qs(r), v(this, qn).delete(n);
        else {
          var i = v(this, ne).get(n);
          i && (v(this, Me).set(n, i.effect), v(this, ne).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, xe)) {
          if (v(this, xe).delete(s), s === e)
            break;
          const o = v(this, ne).get(a);
          o && (Yt(o.effect), v(this, ne).delete(a));
        }
        for (const [s, a] of v(this, Me)) {
          if (s === n || v(this, qn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, xe).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Mo(a, u), u.append(ie()), v(this, ne).set(s, { effect: a, fragment: u });
            } else
              Yt(a);
            v(this, qn).delete(s), v(this, Me).delete(s);
          };
          v(this, Xr) || !r ? (v(this, qn).add(s), Hn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    V(this, Pi, (e) => {
      v(this, xe).delete(e);
      const n = Array.from(v(this, xe).values());
      for (const [r, i] of v(this, ne))
        n.includes(r) || (Yt(i.effect), v(this, ne).delete(r));
    });
    this.anchor = e, L(this, Xr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      U
    ), i = Ao();
    if (n && !v(this, Me).has(e) && !v(this, ne).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = ie();
        s.append(a), v(this, ne).set(e, {
          effect: de(() => n(a)),
          fragment: s
        });
      } else
        v(this, Me).set(
          e,
          de(() => n(this.anchor))
        );
    if (v(this, xe).set(r, e), i) {
      for (const [o, l] of v(this, Me))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, ne))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Wr)), r.ondiscard(v(this, Pi));
    } else
      G && (this.anchor = X), v(this, Wr).call(this);
  }
}
xe = new WeakMap(), Me = new WeakMap(), ne = new WeakMap(), qn = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), Pi = new WeakMap();
function ju(t) {
  se === null && eu(), Is(() => {
    const e = Bi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function tr(t, e, n = !1) {
  G && Li();
  var r = new Ku(t), i = n ? hr : 0;
  function s(a, o) {
    if (G) {
      const f = Za(t);
      var l;
      if (f === Cs ? l = 0 : f === Di ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = $i();
        Ht(u), r.anchor = u, nn(!1), r.ensure(a, o), nn(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Os(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function hi(t, e) {
  return e;
}
function Ju(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    Hn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            ms(Ii(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      $o(f), f.append(u), t.items.clear();
    }
    ms(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ms(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Yt(t[n], e);
}
var va;
function di(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & za) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    a = G ? Ht(/* @__PURE__ */ an(u)) : u.appendChild(ie());
  }
  G && Li();
  var f = null, h = /* @__PURE__ */ po(() => {
    var x = n();
    return Xa(x) ? x : x == null ? [] : Ii(x);
  }), c, p = !0;
  function m() {
    _.fallback = f, Zu(_, c, a, e, r), f !== null && (c.length === 0 ? (f.f & en) === 0 ? qs(f) : (f.f ^= en, Sr(f, null, a)) : Hn(f, () => {
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
      S !== (x === 0) && (a = $i(), Ht(a), nn(!1), F = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), D = (
      /** @type {Batch} */
      U
    ), W = Ao(), K = 0; K < x; K += 1) {
      G && X.nodeType === wr && /** @type {Comment} */
      X.data === Ss && (a = /** @type {Comment} */
      X, F = !0, nn(!1));
      var Q = c[K], tt = r(Q, K), J = p ? null : o.get(tt);
      J ? (J.v && vr(J.v, Q), J.i && vr(J.i, K), W && D.unskip_effect(J.e)) : (J = Qu(
        o,
        p ? a : va ?? (va = ie()),
        Q,
        tt,
        K,
        i,
        e,
        n
      ), p || (J.e.f |= en), o.set(tt, J)), M.add(tt);
    }
    if (x === 0 && s && !f && (p ? f = de(() => s(a)) : (f = de(() => s(va ?? (va = ie()))), f.f |= en)), x > M.size && ru(), G && x > 0 && Ht($i()), !p)
      if (W) {
        for (const [at, ot] of o)
          M.has(at) || D.skip_effect(ot.e);
        D.oncommit(m), D.ondiscard(() => {
        });
      } else
        m();
    F && nn(!0), b(h);
  }), _ = { effect: $, items: o, outrogroups: null, fallback: f };
  p = !1, G && (a = X);
}
function Rr(t) {
  for (; t !== null && (t.f & Te) === 0; )
    t = t.next;
  return t;
}
function Zu(t, e, n, r, i) {
  var J, at, ot, N, H, It, Mt, xt, ft;
  var s = (r & Ol) !== 0, a = e.length, o = t.items, l = Rr(t.effect.first), u, f = null, h, c = [], p = [], m, $, _, x;
  if (s)
    for (x = 0; x < a; x += 1)
      m = e[x], $ = i(m, x), _ = /** @type {EachItem} */
      o.get($).e, (_.f & en) === 0 && ((at = (J = _.nodes) == null ? void 0 : J.a) == null || at.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(_));
  for (x = 0; x < a; x += 1) {
    if (m = e[x], $ = i(m, x), _ = /** @type {EachItem} */
    o.get($).e, t.outrogroups !== null)
      for (const lt of t.outrogroups)
        lt.pending.delete(_), lt.done.delete(_);
    if ((_.f & en) !== 0)
      if (_.f ^= en, _ === l)
        Sr(_, null, n);
      else {
        var F = f ? f.next : l;
        _ === t.effect.last && (t.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), hn(t, f, _), hn(t, _, F), Sr(_, F, n), f = _, c = [], p = [], l = Rr(f.next);
        continue;
      }
    if ((_.f & re) !== 0 && (qs(_), s && ((N = (ot = _.nodes) == null ? void 0 : ot.a) == null || N.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(_))), _ !== l) {
      if (u !== void 0 && u.has(_)) {
        if (c.length < p.length) {
          var S = p[0], M;
          f = S.prev;
          var D = c[0], W = c[c.length - 1];
          for (M = 0; M < c.length; M += 1)
            Sr(c[M], S, n);
          for (M = 0; M < p.length; M += 1)
            u.delete(p[M]);
          hn(t, D.prev, W.next), hn(t, f, D), hn(t, W, S), l = S, f = W, x -= 1, c = [], p = [];
        } else
          u.delete(_), Sr(_, l, n), hn(t, _.prev, _.next), hn(t, _, f === null ? t.effect.first : f.next), hn(t, f, _), f = _;
        continue;
      }
      for (c = [], p = []; l !== null && l !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), p.push(l), l = Rr(l.next);
      if (l === null)
        continue;
    }
    (_.f & en) === 0 && c.push(_), f = _, l = Rr(_.next);
  }
  if (t.outrogroups !== null) {
    for (const lt of t.outrogroups)
      lt.pending.size === 0 && (ms(Ii(lt.done)), (H = t.outrogroups) == null || H.delete(lt));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var K = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & re) === 0 && K.push(_);
    for (; l !== null; )
      (l.f & re) === 0 && l !== t.fallback && K.push(l), l = Rr(l.next);
    var Q = K.length;
    if (Q > 0) {
      var tt = (r & za) !== 0 && a === 0 ? n : null;
      if (s) {
        for (x = 0; x < Q; x += 1)
          (Mt = (It = K[x].nodes) == null ? void 0 : It.a) == null || Mt.measure();
        for (x = 0; x < Q; x += 1)
          (ft = (xt = K[x].nodes) == null ? void 0 : xt.a) == null || ft.fix();
      }
      Ju(t, K, tt);
    }
  }
  s && _n(() => {
    var lt, z;
    if (h !== void 0)
      for (_ of h)
        (z = (lt = _.nodes) == null ? void 0 : lt.a) == null || z.apply();
  });
}
function Qu(t, e, n, r, i, s, a, o) {
  var l = (a & Il) !== 0 ? (a & Ll) === 0 ? /* @__PURE__ */ mo(n, !1, !1) : Xn(n) : null, u = (a & Fl) !== 0 ? Xn(i) : null;
  return {
    v: l,
    i: u,
    e: de(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Sr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & en) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oe(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function hn(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Vs(t, e) {
  Ro(() => {
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
      const i = Ps("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
const ga = [...` 	
\r\f \v\uFEFF`];
function tf(t, e, n) {
  var r = t == null ? "" : "" + t;
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
function _a(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function ef(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += _a(r)), i && (n += _a(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function ri(t, e, n, r, i, s) {
  var a = t.__className;
  if (G || a !== n || a === void 0) {
    var o = tf(n, r, s);
    (!G || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function ts(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function ma(t, e, n, r) {
  var i = t.__style;
  if (G || i !== e) {
    var s = ef(e, r);
    (!G || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (ts(t, n == null ? void 0 : n[0], r[0]), ts(t, n == null ? void 0 : n[1], r[1], "important")) : ts(t, n, r));
  return r;
}
const nf = Symbol("is custom element"), rf = Symbol("is html"), sf = tu ? "link" : "LINK";
function ya(t, e, n, r) {
  var i = af(t);
  G && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === sf) || i[e] !== (i[e] = n) && (e === "loading" && (t[Ql] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && of(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function af(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [nf]: t.nodeName.includes("-"),
      [rf]: t.namespaceURI === Ba
    })
  );
}
var wa = /* @__PURE__ */ new Map();
function of(t) {
  var e = t.getAttribute("is") || t.nodeName, n = wa.get(e);
  if (n) return n;
  wa.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Wl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Wa(i);
  }
  return n;
}
function xa(t, e) {
  return t === e || (t == null ? void 0 : t[Pr]) === e;
}
function pi(t = {}, e, n, r) {
  return Ro(() => {
    var i, s;
    return Fs(() => {
      i = s, s = [], Bi(() => {
        t !== n(...s) && (e(t, ...s), i && xa(n(...i), t) && e(null, ...i));
      });
    }), () => {
      _n(() => {
        s && xa(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let ii = !1;
function lf(t) {
  var e = ii;
  try {
    return ii = !1, [t(), ii];
  } finally {
    ii = e;
  }
}
function ut(t, e, n, r) {
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
    var f = Pr in t || Ja in t;
    u = ((F = Vn(t, e)) == null ? void 0 : F.set) ?? (f && e in t ? (S) => t[e] = S : void 0);
  }
  var h, c = !1;
  i ? [h, c] = lf(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (uu(), u(h)));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S === void 0 ? l() : (o = !0, S);
  }, (n & Vl) === 0)
    return p;
  if (u) {
    var m = t.$$legacy;
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
        return dt(_, D), $ = !0, a !== void 0 && (a = D), S;
      }
      return wn && $ || (x.f & rn) !== 0 ? _.v : b(_);
    })
  );
}
function uf(t) {
  return new ff(t);
}
var tn, he;
class ff {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    V(this, tn);
    /** @type {Record<string, any>} */
    V(this, he);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ mo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return b(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ja ? !0 : (b(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return dt(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    L(this, he, (e.hydrate ? Uu : Yo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && st(), L(this, tn, i.$$events);
    for (const a of Object.keys(v(this, he)))
      a === "$set" || a === "$destroy" || a === "$on" || bi(this, a, {
        get() {
          return v(this, he)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, he)[a] = o;
        },
        enumerable: !0
      });
    v(this, he).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, he).$destroy = () => {
      Gu(v(this, he));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, he).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, tn)[e] = v(this, tn)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, tn)[e].push(r), () => {
      v(this, tn)[e] = v(this, tn)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, he).$destroy();
  }
}
tn = new WeakMap(), he = new WeakMap();
let Bo;
typeof HTMLElement == "function" && (Bo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    ht(this, "$$ctor");
    /** Slots */
    ht(this, "$$s");
    /** @type {any} The Svelte component instance */
    ht(this, "$$c");
    /** Whether or not the custom element is connected */
    ht(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ht(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ht(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ht(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ht(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ht(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ht(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ht(this, "$$shadowRoot", null);
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
          const o = Ps("slot");
          s !== "default" && (o.name = s), Kt(a, o);
        };
      };
      var e = n;
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
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = vi(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return xi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function vi(t, e, n, r) {
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
function cf(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Hs(t, e, n, r, i, s) {
  let a = class extends Bo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return xi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return xi(e).forEach((o) => {
    bi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = vi(o, l, e), this.$$d[o] = l;
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
  }), t.element = /** @type {any} */
  a, a;
}
var hf = { value: () => {
} };
function Xo() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new gi(n);
}
function gi(t) {
  this._ = t;
}
function df(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
gi.prototype = Xo.prototype = {
  constructor: gi,
  on: function(t, e) {
    var n = this._, r = df(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = pf(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = ba(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ba(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new gi(t);
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
function pf(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ba(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = hf, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ys = "http://www.w3.org/1999/xhtml";
const $a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ys,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), $a.hasOwnProperty(e) ? { space: $a[e], local: t } : t;
}
function vf(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ys && e.documentElement.namespaceURI === ys ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function gf(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Wo(t) {
  var e = Xi(t);
  return (e.local ? gf : vf)(e);
}
function _f() {
}
function Ys(t) {
  return t == null ? _f : function() {
    return this.querySelector(t);
  };
}
function mf(t) {
  typeof t != "function" && (t = Ys(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ae(r, this._parents);
}
function yf(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function wf() {
  return [];
}
function Uo(t) {
  return t == null ? wf : function() {
    return this.querySelectorAll(t);
  };
}
function xf(t) {
  return function() {
    return yf(t.apply(this, arguments));
  };
}
function bf(t) {
  typeof t == "function" ? t = xf(t) : t = Uo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new ae(r, i);
}
function Go(t) {
  return function() {
    return this.matches(t);
  };
}
function Ko(t) {
  return function(e) {
    return e.matches(t);
  };
}
var $f = Array.prototype.find;
function Af(t) {
  return function() {
    return $f.call(this.children, t);
  };
}
function Ef() {
  return this.firstElementChild;
}
function Tf(t) {
  return this.select(t == null ? Ef : Af(typeof t == "function" ? t : Ko(t)));
}
var Rf = Array.prototype.filter;
function Cf() {
  return Array.from(this.children);
}
function Sf(t) {
  return function() {
    return Rf.call(this.children, t);
  };
}
function Nf(t) {
  return this.selectAll(t == null ? Cf : Sf(typeof t == "function" ? t : Ko(t)));
}
function kf(t) {
  typeof t != "function" && (t = Go(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new ae(r, this._parents);
}
function jo(t) {
  return new Array(t.length);
}
function Mf() {
  return new ae(this._enter || this._groups.map(jo), this._parents);
}
function Ai(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ai.prototype = {
  constructor: Ai,
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
function Pf(t) {
  return function() {
    return t;
  };
}
function Df(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ai(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function If(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new Ai(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function Ff(t) {
  return t.__data__;
}
function Of(t, e) {
  if (!arguments.length) return Array.from(this, Ff);
  var n = e ? If : Df, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Pf(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = Lf(t.call(f, f && f.__data__, u, r)), m = p.length, $ = o[u] = new Array(m), _ = a[u] = new Array(m), x = l[u] = new Array(c);
    n(f, h, $, _, x, p, e);
    for (var F = 0, S = 0, M, D; F < m; ++F)
      if (M = $[F]) {
        for (F >= S && (S = F + 1); !(D = _[S]) && ++S < m; ) ;
        M._next = D || null;
      }
  }
  return a = new ae(a, r), a._enter = o, a._exit = l, a;
}
function Lf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function qf() {
  return new ae(this._exit || this._groups.map(jo), this._parents);
}
function Vf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Hf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, m = 0; m < h; ++m)
      (p = u[m] || f[m]) && (c[m] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new ae(o, this._parents);
}
function Yf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function zf(t) {
  t || (t = Bf);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new ae(i, this._parents).order();
}
function Bf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Xf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Wf() {
  return Array.from(this);
}
function Uf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Gf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Kf() {
  return !this.node();
}
function jf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function Jf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function tc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ec(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function nc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function rc(t, e) {
  var n = Xi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Zf : Jf : typeof e == "function" ? n.local ? nc : ec : n.local ? tc : Qf)(n, e));
}
function Jo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ic(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function sc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ac(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function oc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ic : typeof e == "function" ? ac : sc)(t, e, n ?? "")) : _r(this.node(), t);
}
function _r(t, e) {
  return t.style.getPropertyValue(e) || Jo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function lc(t) {
  return function() {
    delete this[t];
  };
}
function uc(t, e) {
  return function() {
    this[t] = e;
  };
}
function fc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function cc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? lc : typeof e == "function" ? fc : uc)(t, e)) : this.node()[t];
}
function Zo(t) {
  return t.trim().split(/^|\s+/);
}
function zs(t) {
  return t.classList || new Qo(t);
}
function Qo(t) {
  this._node = t, this._names = Zo(t.getAttribute("class") || "");
}
Qo.prototype = {
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
function tl(t, e) {
  for (var n = zs(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function el(t, e) {
  for (var n = zs(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function hc(t) {
  return function() {
    tl(this, t);
  };
}
function dc(t) {
  return function() {
    el(this, t);
  };
}
function pc(t, e) {
  return function() {
    (e.apply(this, arguments) ? tl : el)(this, t);
  };
}
function vc(t, e) {
  var n = Zo(t + "");
  if (arguments.length < 2) {
    for (var r = zs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? pc : e ? hc : dc)(n, e));
}
function gc() {
  this.textContent = "";
}
function _c(t) {
  return function() {
    this.textContent = t;
  };
}
function mc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function yc(t) {
  return arguments.length ? this.each(t == null ? gc : (typeof t == "function" ? mc : _c)(t)) : this.node().textContent;
}
function wc() {
  this.innerHTML = "";
}
function xc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function bc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function $c(t) {
  return arguments.length ? this.each(t == null ? wc : (typeof t == "function" ? bc : xc)(t)) : this.node().innerHTML;
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
function Cc(t) {
  var e = typeof t == "function" ? t : Wo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Sc() {
  return null;
}
function Nc(t, e) {
  var n = typeof t == "function" ? t : Wo(t), r = e == null ? Sc : typeof e == "function" ? e : Ys(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function kc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Mc() {
  return this.each(kc);
}
function Pc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Dc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ic(t) {
  return this.select(t ? Dc : Pc);
}
function Fc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Oc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Lc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function qc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Vc(t, e, n) {
  return function() {
    var r = this.__on, i, s = Oc(e);
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
function Hc(t, e, n) {
  var r = Lc(t + ""), i, s = r.length, a;
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
  for (o = e ? Vc : qc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function nl(t, e, n) {
  var r = Jo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Yc(t, e) {
  return function() {
    return nl(this, t, e);
  };
}
function zc(t, e) {
  return function() {
    return nl(this, t, e.apply(this, arguments));
  };
}
function Bc(t, e) {
  return this.each((typeof e == "function" ? zc : Yc)(t, e));
}
function* Xc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var rl = [null];
function ae(t, e) {
  this._groups = t, this._parents = e;
}
function xr() {
  return new ae([[document.documentElement]], rl);
}
function Wc() {
  return this;
}
ae.prototype = xr.prototype = {
  constructor: ae,
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
function ct(t) {
  return typeof t == "string" ? new ae([[document.querySelector(t)]], [document.documentElement]) : new ae([[t]], rl);
}
function Bs(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function il(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Kr() {
}
var Lr = 0.7, Ei = 1 / Lr, nr = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", De = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uc = /^#([0-9a-f]{3,8})$/, Gc = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), Kc = new RegExp(`^rgb\\(${De},${De},${De}\\)$`), jc = new RegExp(`^rgba\\(${nr},${nr},${nr},${qr}\\)$`), Jc = new RegExp(`^rgba\\(${De},${De},${De},${qr}\\)$`), Zc = new RegExp(`^hsl\\(${qr},${De},${De}\\)$`), Qc = new RegExp(`^hsla\\(${qr},${De},${De},${qr}\\)$`), Aa = {
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
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ea,
  // Deprecated! Use color.formatHex.
  formatHex: Ea,
  formatHex8: th,
  formatHsl: eh,
  formatRgb: Ta,
  toString: Ta
});
function Ea() {
  return this.rgb().formatHex();
}
function th() {
  return this.rgb().formatHex8();
}
function eh() {
  return sl(this).formatHsl();
}
function Ta() {
  return this.rgb().formatRgb();
}
function Wn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Uc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Ra(e) : n === 3 ? new Zt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? si(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? si(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Gc.exec(t)) ? new Zt(e[1], e[2], e[3], 1) : (e = Kc.exec(t)) ? new Zt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = jc.exec(t)) ? si(e[1], e[2], e[3], e[4]) : (e = Jc.exec(t)) ? si(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Zc.exec(t)) ? Na(e[1], e[2] / 100, e[3] / 100, 1) : (e = Qc.exec(t)) ? Na(e[1], e[2] / 100, e[3] / 100, e[4]) : Aa.hasOwnProperty(t) ? Ra(Aa[t]) : t === "transparent" ? new Zt(NaN, NaN, NaN, 0) : null;
}
function Ra(t) {
  return new Zt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function si(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Zt(t, e, n, r);
}
function nh(t) {
  return t instanceof Kr || (t = Wn(t)), t ? (t = t.rgb(), new Zt(t.r, t.g, t.b, t.opacity)) : new Zt();
}
function ws(t, e, n, r) {
  return arguments.length === 1 ? nh(t) : new Zt(t, e, n, r ?? 1);
}
function Zt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Bs(Zt, ws, il(Kr, {
  brighter(t) {
    return t = t == null ? Ei : Math.pow(Ei, t), new Zt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new Zt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Zt(zn(this.r), zn(this.g), zn(this.b), Ti(this.opacity));
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
  const t = Ti(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${zn(this.r)}, ${zn(this.g)}, ${zn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ti(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function zn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pn(t) {
  return t = zn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Na(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new be(t, e, n, r);
}
function sl(t) {
  if (t instanceof be) return new be(t.h, t.s, t.l, t.opacity);
  if (t instanceof Kr || (t = Wn(t)), !t) return new be();
  if (t instanceof be) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new be(a, o, l, t.opacity);
}
function ih(t, e, n, r) {
  return arguments.length === 1 ? sl(t) : new be(t, e, n, r ?? 1);
}
function be(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Bs(be, ih, il(Kr, {
  brighter(t) {
    return t = t == null ? Ei : Math.pow(Ei, t), new be(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new be(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Zt(
      es(t >= 240 ? t - 240 : t + 120, i, r),
      es(t, i, r),
      es(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new be(ka(this.h), ai(this.s), ai(this.l), Ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ti(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ka(this.h)}, ${ai(this.s) * 100}%, ${ai(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ka(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ai(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function es(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Xs = (t) => () => t;
function sh(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ah(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function oh(t) {
  return (t = +t) == 1 ? al : function(e, n) {
    return n - e ? ah(e, n, t) : Xs(isNaN(e) ? n : e);
  };
}
function al(t, e) {
  var n = e - t;
  return n ? sh(t, n) : Xs(isNaN(t) ? e : t);
}
const Ri = (function t(e) {
  var n = oh(e);
  function r(i, s) {
    var a = n((i = ws(i)).r, (s = ws(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = al(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function lh(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function uh(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function fh(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ge(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function ch(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Pe(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function hh(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ge(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ns = new RegExp(xs.source, "g");
function dh(t) {
  return function() {
    return t;
  };
}
function ph(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ol(t, e) {
  var n = xs.lastIndex = ns.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = xs.exec(t)) && (i = ns.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Pe(r, i) })), n = ns.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? ph(l[0].x) : dh(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Ge(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Xs(e) : (n === "number" ? Pe : n === "string" ? (r = Wn(e)) ? (e = r, Ri) : ol : e instanceof Wn ? Ri : e instanceof Date ? ch : uh(e) ? lh : Array.isArray(e) ? fh : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? hh : Pe)(t, e);
}
var Ma = 180 / Math.PI, bs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ll(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: a,
    scaleY: o
  };
}
var oi;
function vh(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? bs : ll(e.a, e.b, e.c, e.d, e.e, e.f);
}
function gh(t) {
  return t == null || (oi || (oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), oi.setAttribute("transform", t), !(t = oi.transform.baseVal.consolidate())) ? bs : (t = t.matrix, ll(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ul(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, m) {
    if (u !== h || f !== c) {
      var $ = p.push("translate(", null, e, null, n);
      m.push({ i: $ - 4, x: Pe(u, h) }, { i: $ - 2, x: Pe(f, c) });
    } else (h || c) && p.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Pe(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Pe(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, m) {
    if (u !== h || f !== c) {
      var $ = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: $ - 4, x: Pe(u, h) }, { i: $ - 2, x: Pe(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var m = -1, $ = c.length, _; ++m < $; ) h[(_ = c[m]).i] = _.x(p);
      return h.join("");
    };
  };
}
var _h = ul(vh, "px, ", "px)", "deg)"), mh = ul(gh, ", ", ")", ")"), mr = 0, Nr = 0, Cr = 0, fl = 1e3, Ci, kr, Si = 0, Un = 0, Wi = 0, Vr = typeof performance == "object" && performance.now ? performance : Date, cl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
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
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ws() : +n) + (e == null ? 0 : +e), !this._next && kr !== this && (kr ? kr._next = this : Ci = this, kr = this), this._call = t, this._time = n, $s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $s());
  }
};
function hl(t, e, n) {
  var r = new Ni();
  return r.restart(t, e, n), r;
}
function wh() {
  Ws(), ++mr;
  for (var t = Ci, e; t; )
    (e = Un - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
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
  var t = Vr.now(), e = t - Si;
  e > fl && (Wi -= e, Si = t);
}
function bh() {
  for (var t, e = Ci, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ci = n);
  kr = t, $s(r);
}
function $s(t) {
  if (!mr) {
    Nr && (Nr = clearTimeout(Nr));
    var e = t - Un;
    e > 24 ? (t < 1 / 0 && (Nr = setTimeout(Pa, t - Vr.now() - Wi)), Cr && (Cr = clearInterval(Cr))) : (Cr || (Si = Vr.now(), Cr = setInterval(xh, fl)), mr = 1, cl(Pa));
  }
}
function Da(t, e, n) {
  var r = new Ni();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var $h = Xo("start", "end", "cancel", "interrupt"), Ah = [], dl = 0, Ia = 1, As = 2, _i = 3, Fa = 4, Es = 5, mi = 6;
function Ui(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Eh(t, n, {
    name: e,
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
function Us(t, e) {
  var n = Re(t, e);
  if (n.state > dl) throw new Error("too late; already scheduled");
  return n;
}
function Ve(t, e) {
  var n = Re(t, e);
  if (n.state > _i) throw new Error("too late; already running");
  return n;
}
function Re(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Eh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = hl(s, 0, n.time);
  function s(u) {
    n.state = Ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Ia) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === _i) return Da(a);
        p.state === Fa ? (p.state = mi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = mi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Da(function() {
      n.state === _i && (n.state = Fa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = As, n.on.call("start", t, t.__data__, n.index, n.group), n.state === As) {
      for (n.state = _i, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Es, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === Es && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = mi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Th(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > As && r.state < Es, r.state = mi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Rh(t) {
  return this.each(function() {
    Th(this, t);
  });
}
function Ch(t, e) {
  var n, r;
  return function() {
    var i = Ve(this, t), s = i.tween;
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
function Sh(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Ve(this, t), a = s.tween;
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
function Nh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Re(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ch : Sh)(n, t, e));
}
function Gs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ve(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Re(i, r).value[e];
  };
}
function pl(t, e) {
  var n;
  return (typeof e == "number" ? Pe : e instanceof Wn ? Ri : (n = Wn(e)) ? (e = n, Ri) : ol)(t, e);
}
function kh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Mh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ph(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Dh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Ih(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function Fh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function Oh(t, e) {
  var n = Xi(t), r = n === "transform" ? mh : pl;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Fh : Ih)(n, r, Gs(this, "attr." + t, e)) : e == null ? (n.local ? Mh : kh)(n) : (n.local ? Dh : Ph)(n, r, e));
}
function Lh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function qh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Vh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && qh(t, s)), n;
  }
  return i._value = e, i;
}
function Hh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Lh(t, s)), n;
  }
  return i._value = e, i;
}
function Yh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Xi(t);
  return this.tween(n, (r.local ? Vh : Hh)(r, e));
}
function zh(t, e) {
  return function() {
    Us(this, t).delay = +e.apply(this, arguments);
  };
}
function Bh(t, e) {
  return e = +e, function() {
    Us(this, t).delay = e;
  };
}
function Xh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zh : Bh)(e, t)) : Re(this.node(), e).delay;
}
function Wh(t, e) {
  return function() {
    Ve(this, t).duration = +e.apply(this, arguments);
  };
}
function Uh(t, e) {
  return e = +e, function() {
    Ve(this, t).duration = e;
  };
}
function Gh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wh : Uh)(e, t)) : Re(this.node(), e).duration;
}
function Kh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ve(this, t).ease = e;
  };
}
function jh(t) {
  var e = this._id;
  return arguments.length ? this.each(Kh(e, t)) : Re(this.node(), e).ease;
}
function Jh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ve(this, t).ease = n;
  };
}
function Zh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Jh(this._id, t));
}
function Qh(t) {
  typeof t != "function" && (t = Go(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new on(r, this._parents, this._name, this._id);
}
function td(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new on(a, this._parents, this._name, this._id);
}
function ed(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function nd(t, e, n) {
  var r, i, s = ed(e) ? Us : Ve;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function rd(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Re(this.node(), n).on.on(t) : this.each(nd(n, t, e));
}
function id(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function sd() {
  return this.on("end.remove", id(this._id));
}
function ad(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ys(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Ui(u[c], e, n, c, u, Re(f, n)));
  return new on(s, this._parents, e, n);
}
function od(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Uo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, m = Re(f, n), $ = 0, _ = c.length; $ < _; ++$)
          (p = c[$]) && Ui(p, e, n, $, c, m);
        s.push(c), a.push(f);
      }
  return new on(s, a, e, n);
}
var ld = xr.prototype.constructor;
function ud() {
  return new ld(this._groups, this._parents);
}
function fd(t, e) {
  var n, r, i;
  return function() {
    var s = _r(this, t), a = (this.style.removeProperty(t), _r(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function vl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function cd(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = _r(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function hd(t, e, n) {
  var r, i, s;
  return function() {
    var a = _r(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), _r(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function dd(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Ve(this, t), u = l.on, f = l.value[s] == null ? o || (o = vl(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function pd(t, e, n) {
  var r = (t += "") == "transform" ? _h : pl;
  return e == null ? this.styleTween(t, fd(t, r)).on("end.style." + t, vl(t)) : typeof e == "function" ? this.styleTween(t, hd(t, r, Gs(this, "style." + t, e))).each(dd(this._id, t)) : this.styleTween(t, cd(t, r, e), n).on("end.style." + t, null);
}
function vd(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function gd(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && vd(t, a, n)), r;
  }
  return s._value = e, s;
}
function _d(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, gd(t, e, n ?? ""));
}
function md(t) {
  return function() {
    this.textContent = t;
  };
}
function yd(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function wd(t) {
  return this.tween("text", typeof t == "function" ? yd(Gs(this, "text", t)) : md(t == null ? "" : t + ""));
}
function xd(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function bd(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && xd(i)), e;
  }
  return r._value = t, r;
}
function $d(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, bd(t));
}
function Ad() {
  for (var t = this._name, e = this._id, n = gl(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Re(l, e);
        Ui(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new on(r, this._parents, t, n);
}
function Ed() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Ve(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Td = 0;
function on(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function yi(t) {
  return xr().transition(t);
}
function gl() {
  return ++Td;
}
var Ue = xr.prototype;
on.prototype = yi.prototype = {
  constructor: on,
  select: ad,
  selectAll: od,
  selectChild: Ue.selectChild,
  selectChildren: Ue.selectChildren,
  filter: Qh,
  merge: td,
  selection: ud,
  transition: Ad,
  call: Ue.call,
  nodes: Ue.nodes,
  node: Ue.node,
  size: Ue.size,
  empty: Ue.empty,
  each: Ue.each,
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
  [Symbol.iterator]: Ue[Symbol.iterator]
};
function Rd(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Cd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rd
};
function Sd(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Nd(t) {
  var e, n;
  t instanceof on ? (e = t._id, t = t._name) : (e = gl(), (n = Cd).time = Ws(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ui(l, t, e, u, a, n || Sd(l, e));
  return new on(r, this._parents, t, e);
}
xr.prototype.interrupt = Rh;
xr.prototype.transition = Nd;
const Ts = Math.PI, Rs = 2 * Ts, Cn = 1e-6, kd = Rs - Cn;
function _l(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Md(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return _l;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Pd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? _l : Md(e);
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
    else if (c > Cn) if (!(Math.abs(h * l - u * f) > Cn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, m = i - o, $ = l * l + u * u, _ = p * p + m * m, x = Math.sqrt($), F = Math.sqrt(c), S = s * Math.tan((Ts - Math.acos(($ + c - _) / (2 * x * F))) / 2), M = S / F, D = S / x;
      Math.abs(M - 1) > Cn && this._append`L${e + M * f},${n + M * h}`, this._append`A${s},${s},0,0,${+(h * p > f * m)},${this._x1 = e + D * l},${this._y1 = n + D * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Cn || Math.abs(this._y1 - f) > Cn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Rs + Rs), c > kd ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > Cn && this._append`A${r},${r},0,${+(c >= Ts)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Dd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Id = Dd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Vt(t) {
  return function() {
    return t;
  };
}
const Oa = Math.abs, Dt = Math.atan2, Rn = Math.cos, Fd = Math.max, rs = Math.min, Ce = Math.sin, er = Math.sqrt, Wt = 1e-12, Hr = Math.PI, ki = Hr / 2, wi = 2 * Hr;
function Od(t) {
  return t > 1 ? 0 : t < -1 ? Hr : Math.acos(t);
}
function La(t) {
  return t >= 1 ? ki : t <= -1 ? -ki : Math.asin(t);
}
function Ld(t) {
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
  }, () => new Pd(e);
}
function qd(t) {
  return t.innerRadius;
}
function Vd(t) {
  return t.outerRadius;
}
function Hd(t) {
  return t.startAngle;
}
function Yd(t) {
  return t.endAngle;
}
function zd(t) {
  return t && t.padAngle;
}
function Bd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Wt))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function li(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / er(o * o + l * l), f = u * l, h = -u * o, c = t + f, p = e + h, m = n + f, $ = r + h, _ = (c + m) / 2, x = (p + $) / 2, F = m - c, S = $ - p, M = F * F + S * S, D = i - s, W = c * $ - m * p, K = (S < 0 ? -1 : 1) * er(Fd(0, D * D * M - W * W)), Q = (W * S - F * K) / M, tt = (-W * F - S * K) / M, J = (W * S + F * K) / M, at = (-W * F + S * K) / M, ot = Q - _, N = tt - x, H = J - _, It = at - x;
  return ot * ot + N * N > H * H + It * It && (Q = J, tt = at), {
    cx: Q,
    cy: tt,
    x01: -f,
    y01: -h,
    x11: Q * (i / D - 1),
    y11: tt * (i / D - 1)
  };
}
function ye() {
  var t = qd, e = Vd, n = Vt(0), r = null, i = Hd, s = Yd, a = zd, o = null, l = Ld(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), p = +e.apply(this, arguments), m = i.apply(this, arguments) - ki, $ = s.apply(this, arguments) - ki, _ = Oa($ - m), x = $ > m;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > Wt)) o.moveTo(0, 0);
    else if (_ > wi - Wt)
      o.moveTo(p * Rn(m), p * Ce(m)), o.arc(0, 0, p, m, $, !x), c > Wt && (o.moveTo(c * Rn($), c * Ce($)), o.arc(0, 0, c, $, m, x));
    else {
      var F = m, S = $, M = m, D = $, W = _, K = _, Q = a.apply(this, arguments) / 2, tt = Q > Wt && (r ? +r.apply(this, arguments) : er(c * c + p * p)), J = rs(Oa(p - c) / 2, +n.apply(this, arguments)), at = J, ot = J, N, H;
      if (tt > Wt) {
        var It = La(tt / c * Ce(Q)), Mt = La(tt / p * Ce(Q));
        (W -= It * 2) > Wt ? (It *= x ? 1 : -1, M += It, D -= It) : (W = 0, M = D = (m + $) / 2), (K -= Mt * 2) > Wt ? (Mt *= x ? 1 : -1, F += Mt, S -= Mt) : (K = 0, F = S = (m + $) / 2);
      }
      var xt = p * Rn(F), ft = p * Ce(F), lt = c * Rn(D), z = c * Ce(D);
      if (J > Wt) {
        var Ft = p * Rn(S), _e = p * Ce(S), rt = c * Rn(M), bn = c * Ce(M), Ot;
        if (_ < Hr)
          if (Ot = Bd(xt, ft, rt, bn, Ft, _e, lt, z)) {
            var oe = xt - Ot[0], $n = ft - Ot[1], wt = Ft - Ot[0], me = _e - Ot[1], He = 1 / Ce(Od((oe * wt + $n * me) / (er(oe * oe + $n * $n) * er(wt * wt + me * me))) / 2), An = er(Ot[0] * Ot[0] + Ot[1] * Ot[1]);
            at = rs(J, (c - An) / (He - 1)), ot = rs(J, (p - An) / (He + 1));
          } else
            at = ot = 0;
      }
      K > Wt ? ot > Wt ? (N = li(rt, bn, xt, ft, p, ot, x), H = li(Ft, _e, lt, z, p, ot, x), o.moveTo(N.cx + N.x01, N.cy + N.y01), ot < J ? o.arc(N.cx, N.cy, ot, Dt(N.y01, N.x01), Dt(H.y01, H.x01), !x) : (o.arc(N.cx, N.cy, ot, Dt(N.y01, N.x01), Dt(N.y11, N.x11), !x), o.arc(0, 0, p, Dt(N.cy + N.y11, N.cx + N.x11), Dt(H.cy + H.y11, H.cx + H.x11), !x), o.arc(H.cx, H.cy, ot, Dt(H.y11, H.x11), Dt(H.y01, H.x01), !x))) : (o.moveTo(xt, ft), o.arc(0, 0, p, F, S, !x)) : o.moveTo(xt, ft), !(c > Wt) || !(W > Wt) ? o.lineTo(lt, z) : at > Wt ? (N = li(lt, z, Ft, _e, c, -at, x), H = li(xt, ft, rt, bn, c, -at, x), o.lineTo(N.cx + N.x01, N.cy + N.y01), at < J ? o.arc(N.cx, N.cy, at, Dt(N.y01, N.x01), Dt(H.y01, H.x01), !x) : (o.arc(N.cx, N.cy, at, Dt(N.y01, N.x01), Dt(N.y11, N.x11), !x), o.arc(0, 0, c, Dt(N.cy + N.y11, N.cx + N.x11), Dt(H.cy + H.y11, H.cx + H.x11), x), o.arc(H.cx, H.cy, at, Dt(H.y11, H.x11), Dt(H.y01, H.x01), !x))) : o.arc(0, 0, c, D, M, x);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Hr / 2;
    return [Rn(h) * f, Ce(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Vt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Vt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Vt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Vt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Vt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Vt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Vt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Xd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Wd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ud(t) {
  return t;
}
function is() {
  var t = Ud, e = Wd, n = null, r = Vt(0), i = Vt(wi), s = Vt(0);
  function a(o) {
    var l, u = (o = Xd(o)).length, f, h, c = 0, p = new Array(u), m = new Array(u), $ = +r.apply(this, arguments), _ = Math.min(wi, Math.max(-wi, i.apply(this, arguments) - $)), x, F = Math.min(Math.abs(_) / u, s.apply(this, arguments)), S = F * (_ < 0 ? -1 : 1), M;
    for (l = 0; l < u; ++l)
      (M = m[p[l] = l] = +t(o[l], l, o)) > 0 && (c += M);
    for (e != null ? p.sort(function(D, W) {
      return e(m[D], m[W]);
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
    return arguments.length ? (t = typeof o == "function" ? o : Vt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Vt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Vt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Vt(+o), a) : s;
  }, a;
}
function Mr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Mr.prototype = {
  constructor: Mr,
  scale: function(t) {
    return t === 1 ? this : new Mr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Mr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Mr.prototype;
var Gd = /* @__PURE__ */ Bu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Kd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function ml(t, e) {
  qi(e, !0), Vs(t, Kd);
  let n = ut(e, "jsonData", 7), r = ut(e, "currentRound", 7, 1), i = ut(e, "mouseEventType", 15), s = ut(e, "mouseData", 15), a = ut(e, "mouseX", 15), o = ut(e, "mouseY", 15), l = ut(e, "requestRoundChange", 7, (d) => {
  }), u = ut(e, "candidateColors", 23, () => []), f = ut(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = ut(e, "firstRoundDeterminesPercentages", 7, !1), c = ut(e, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const m = 800, $ = 800, _ = Math.min(m, $) * 0.3, x = m / 2, F = $ / 2, S = "Pie", M = "PieOutline", D = "Donut", W = "TextLayer", K = "url(#cross-hatch)", Q = 1.15, tt = 750, J = 800, at = "white", ot = 1, N = "#ff00ff", H = 3;
  function It(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let Mt = [], xt = [], ft = [], lt = 0, z = 0;
  const Ft = {}, _e = "No Further Rankings";
  let rt = /* @__PURE__ */ Et(null);
  function bn() {
    const d = ct(b(rt));
    d.select("#" + S).remove(), d.select("#" + M).remove(), d.select("#" + D).remove(), d.select("#" + W).remove();
  }
  function Ot(d) {
    l() && (mt = d, l()(d));
  }
  function oe(d) {
    bn(), ft = $n(d), Mt = Zs(d, S, ft, x, F, 0, wt()), Zs(d, M, ft, x, F, 0, wt(), !1, !1, !0), Er();
  }
  ju(() => {
    it(), setTimeout(
      () => {
        oe(r());
      },
      0
    );
  });
  function $n(d) {
    const g = et(d);
    return lt = Kn(d), g;
  }
  function wt() {
    return _;
  }
  function me() {
    return wt() * 1.41;
  }
  function He(d) {
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
    if (d === "exhausted") return He(g);
    {
      const y = n().results[g - 1].tally;
      return Number(y[d]);
    }
  }
  function jr(d, g) {
    return An(d, g).toLocaleString("en-US");
  }
  function Jr(d, g) {
    const y = h() ? lt : Gi(g);
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
    d.some((y) => un(y.label)) || d.push({ label: "exhausted", value: He(g) });
  }
  function et(d) {
    const g = [];
    for (let [y, E] of Object.entries(n().results[d - 1].tally))
      g.push({ label: y, value: Number(E) });
    return Y(g, d), g;
  }
  function vt(d) {
    const g = n().results[Math.max(0, d - 2)].tally, y = n().results[d - 1].tally, E = [];
    for (let [A] of Object.entries(g))
      E.push({ label: A, value: Number(y[A] ?? 0) });
    return Y(E, d), E;
  }
  function bt(d, g) {
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
  function it() {
    const d = ct(b(rt)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [y, E] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Ft[y] = Id[g] : Ft[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Ft[y] = u()[g % u().length], g++;
      {
        const A = d.clone(!0);
        A.attr("id", It(y)).select("rect").attr("fill", Ft[y]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    Ft.exhausted = K, Ft["Inactive Ballots"] = K;
  }
  function zt() {
    ct(b(rt)).select("#" + D).remove();
  }
  function le(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g);
    const E = bt(ft, d), R = is().sort(null).value((I) => I.value)(E);
    na(d, S, R, 0, wt()), na(d, M, R, 0, wt(), !0), ft = E, Mt = R, zt(), Xe(d), El(), Rl(0, wt()), Er();
  }
  function Bt(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g), We(d);
  }
  function ue(d, g) {
    const y = yi("global").duration(J);
    g && y.on("end", g), $r(d), Ar(wt(), me());
  }
  let gt = !1, _t = [];
  function $t() {
    Er(), gt = !1, Lt();
  }
  function Lt() {
    if (_t.length === 0) {
      mt !== r() && (r() === mt + 1 && mt > 0 && r() <= n().results.length ? (mt = r(), Ye(r())) : r() >= 1 && r() <= n().results.length && (mt = r(), c(0), oe(r())));
      return;
    }
    const d = _t.shift();
    switch (d.type) {
      case "round": {
        const g = d.round;
        g === mt + 1 && mt > 0 && g <= n().results.length ? (mt = g, Ye(g)) : (g !== mt && g >= 1 && g <= n().results.length && (mt = g, c(0), oe(g)), Lt());
        break;
      }
      case "step":
        Zn();
        break;
    }
  }
  function Ye(d) {
    if (d <= 1 || d > n().results.length) {
      Lt();
      return;
    }
    gt = !0, z = d, c(0), le(z - 1, () => {
      c(1), Bt(z - 1, () => {
        c(2), ue(z, () => {
          c(0), $t();
        });
      });
    });
  }
  function jn() {
    gt || (gt = !0, z = r(), En());
  }
  function En() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), _t.length > 0) {
      $t();
      return;
    }
    const d = z < n().results.length - 1 ? En : () => {
      c(0), $t();
    };
    le(z, () => {
      c(1), Bt(z, () => {
        c(2), z++, Ot(z), ue(z, d);
      });
    });
  }
  Is(() => {
    ze();
  });
  let mt = 0;
  function ze() {
    if (mt != r()) {
      if (gt) {
        _t.push({ type: "round", round: r() });
        return;
      }
      mt == r() - 1 && mt > 0 ? Jn() : Be(r()), mt = r();
    }
  }
  function Be(d) {
    if (gt) {
      _t.push({ type: "round", round: d });
      return;
    }
    c(0), oe(d);
  }
  function Jn() {
    if (gt) {
      _t.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      Er(), gt = !1;
      return;
    }
    gt = !0, c() === 0 ? le(z - 1, () => {
      c(1), Bt(z - 1, () => {
        c(2), ue(z, () => {
          c(0), $t();
        });
      });
    }) : c() === 1 ? Bt(z - 1, () => {
      c(2), ue(z, () => {
        c(0), $t();
      });
    }) : c() === 2 && ue(z, () => {
      c(0), $t();
    });
  }
  function Zn() {
    if (r() > n().results.length) {
      Er(), gt = !1;
      return;
    }
    if (gt) {
      _t.push({ type: "step" });
      return;
    }
    gt = !0, z = r(), c() === 0 ? le(z, () => {
      c(1), $t();
    }) : c() === 1 ? Bt(z, () => {
      c(2), $t();
    }) : c() === 2 ? (z++, Ot(z), ue(z, () => {
      c(0), $t();
    })) : (gt = !1, console.warn("displayPhase out of range at ", c()));
  }
  function $r(d) {
    ft = vt(d), Mt = ta(d, S, ft, 0, wt(), !0), ta(d, M, ft, 0, wt(), !1, !0);
  }
  function Ar(d, g) {
    const y = ct(b(rt)).select("#" + D), A = ct(b(rt)).select("#" + S), R = {};
    for (const k of Mt) {
      const P = k.data.label;
      if (k.data.isTransfer) continue;
      const T = A.select("#" + CSS.escape(p(k.data)));
      T.empty() || (R[P] = {
        oldStart: Number(T.attr("prevStart")),
        oldEnd: Number(T.attr("prevEnd")),
        newStart: k.startAngle,
        newEnd: k.endAngle
      });
    }
    const I = y.selectAll(".slice");
    let q = I.size();
    function O() {
      q--, q === 0 && Tl();
    }
    I.select("path").transition("global").duration(tt).attrTween("d", function(k) {
      const P = k.startAngle, T = k.endAngle, C = T - P, Pt = R[k.data.label];
      let Z, Xt;
      if (Pt) {
        const Qn = (Pt.oldStart + Pt.oldEnd) / 2, kl = (Pt.newStart + Pt.newEnd) / 2, Ml = P - Qn;
        Z = kl + Ml, Xt = Z + C;
      } else
        Z = P, Xt = T;
      const nt = Ge(P, Z), Rt = Ge(T, Xt), ti = Ge(g, d), Tr = ye();
      return function(Qn) {
        return Tr.innerRadius(Math.min(ti(Qn), d) - 1).outerRadius(ti(Qn)).startAngle(nt(Qn)).endAngle(Rt(Qn)), Tr(k);
      };
    }).on("end", (k) => O());
  }
  function Xe(d) {
    const g = xl(d, Mt);
    xt = Qs(d, D, g, x, F, wt(), me(), !1, !0);
    const y = ct(b(rt));
    y.select("#" + S).raise(), y.select("#" + M).raise();
  }
  function We(d) {
    const g = $l(d, xt, Mt);
    xt = ra(d, D, g, wt(), me(), !1);
  }
  function Tn(d) {
    return Ft[d.data.label];
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
    const y = [], E = lt, A = n().results[d - 1].tallyResults;
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
      let O = g.find((P) => P.data.label == I && P.data.isTransfer);
      O === void 0 && (O = g.find((P) => P.data.label == I && !P.data.isTransfer));
      let k = 0;
      if (O) k = O.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [P, T] of Object.entries(q)) {
        let C;
        const Pt = g.find((nt) => nt.data.label == P);
        if (Pt)
          C = structuredClone(Pt);
        else if (P == "exhausted")
          C = {
            data: { label: P, value: Number(T) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (P == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", T);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", P);
          continue;
        }
        const Xt = Number(T) / E * 2 * Math.PI;
        C.startAngle = k, k = C.endAngle = k + Xt, C.index = R, C.data.transferIndex = R, y.push(C);
      }
    }
    return y;
  }
  function bl(d, g, y) {
    const E = {};
    for (let [A, R] of Object.entries(d)) {
      const I = y.find((k) => A == k.data.label);
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
    const E = [], A = lt, R = wl(d), I = bl(R, A, y);
    for (let [q, O] of g.entries()) {
      const k = structuredClone(O), P = O.endAngle - O.startAngle, T = y.find((C) => O.data.label === C.data.label && !C.data.isTransfer);
      if (T) {
        const C = T.data.label;
        k.startAngle = I[C], I[C] += P, k.endAngle = k.startAngle + P;
      } else if (O.data.label === "exhausted")
        k.startAngle = O.startAngle, k.endAngle = O.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", O.data.label);
        continue;
      }
      k.index = q, E.push(k);
    }
    return E;
  }
  function js(d, g, y, E) {
    const A = ye().innerRadius(y * Q).outerRadius(y * Q), R = g.filter((P) => !P.data.isTransfer && P.data.value > 0), I = [], q = E.append("g").attr("opacity", 0);
    for (const P of R) {
      const T = P.data.label === "exhausted" ? _e : P.data.label, C = A.centroid(P), Pt = Qr(P.startAngle, P.endAngle), Z = jr(P.data.label, d);
      let Xt;
      !h() && un(P.data.label) ? Xt = Z : Xt = Z + " (" + Jr(P.data.label, d) + ")";
      const nt = q.append("text").attr("transform", `translate(${C})`).attr("text-anchor", Pt).text(T);
      nt.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Xt);
      const Rt = nt.node().getBBox();
      I.push({
        label: P.data.label,
        value: P.data.value,
        bbox: new DOMRect(Rt.x + C[0], Rt.y + C[1], Rt.width, Rt.height)
      });
    }
    q.remove(), I.sort((P, T) => T.value - P.value);
    const O = [], k = /* @__PURE__ */ new Set();
    for (const P of I)
      O.some((C) => P.bbox.left < C.right && P.bbox.right > C.left && P.bbox.top < C.bottom && P.bbox.bottom > C.top) || (k.add(P.label), O.push(P.bbox));
    return k;
  }
  function Js(d, g, y, E, A, R) {
    const q = ct(b(rt)).append("g").attr("id", W).attr("transform", `translate(${y}, ${E})`), O = ye().innerRadius(A * Q).outerRadius(A * Q), k = js(d, g, A, q);
    q.selectAll("text").data(g).enter().each(function(P) {
      !P.data.isTransfer && k.has(P.data.label) && ct(this).append("g").attr("id", (T) => p(T.data)).classed("eliminated", (T) => R.includes(T.data.label) || T.data.isTransfer === !0).each(function(T, C) {
        T.data.label === "exhausted" && ct(this).on("mouseenter", (Pt, Z) => Cl(Pt)).on("mouseleave", (Pt, Z) => Sl());
      }).append("text").attr("transform", (T) => `translate(${O.centroid(T)})`).attr("text-anchor", (T) => Qr(T.startAngle, T.endAngle)).text((T) => T.data.label === "exhausted" ? _e : T.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((T) => {
        const C = jr(T.data.label, d);
        return !h() && un(T.data.label) ? C : C + " (" + Jr(T.data.label, d) + ")";
      });
    });
  }
  function Al(d, g, y, E) {
    const R = ct(b(rt)).select("#" + W), I = js(d, g, y, R);
    R.selectAll("g").each(function(C) {
      C && C.data && !C.data.isTransfer && !I.has(C.data.label) && ct(this).remove();
    });
    const q = R.selectAll("tspan"), O = R.selectAll("g").data(g, (C) => p(C.data)).classed("eliminated", (C) => E.includes(C.data.label) || C.data.isTransfer === !0), k = ye().innerRadius(y * Q).outerRadius(y * Q + 1);
    q.transition("global").duration(tt).attr("transform", (C) => `translate(${k.centroid(C)})`).attr("text-anchor", (C) => Qr(C.startAngle, C.endAngle)), O.select("text").transition("global").duration(tt).attr("transform", (C) => `translate(${k.centroid(C)})`).attr("text-anchor", (C) => Qr(C.startAngle, C.endAngle)).on("end", (C) => T());
    let P = O.size();
    function T(C) {
      P--, P === 0 && (R.remove(), Js(d, g, x, F, y, E));
    }
  }
  function Zs(d, g, y, E, A, R, I, q = !0, O = !1, k = !1) {
    const T = is().sort(null).value((C) => C.value)(y);
    return Qs(d, g, T, E, A, R, I, q, O, k), T;
  }
  function Er() {
    ct(b(rt)).select("#" + M).selectAll(".elected").select("path").style("stroke", N).style("stroke-width", `${H}px`);
  }
  function Qs(d, g, y, E, A, R, I, q, O, k = !1) {
    const P = fn(d), T = br(d), Z = ct(b(rt)).attr("viewBox", `0 0 ${m} ${$}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${E}, ${A})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (nt) => P.includes(nt.data.label) || nt.data.isTransfer === !0).classed("elected", (nt) => T.includes(nt.data.label) && !nt.data.isTransfer).attr("id", (nt) => p(nt.data));
    k ? Z.style("pointer-events", "none") : Z.on("mouseenter", (nt, Rt) => ji(nt, Rt)).on("mouseleave", (nt, Rt) => Ji(nt, Rt));
    const Xt = ye().outerRadius(I).innerRadius(R);
    if (O) {
      const nt = ye().outerRadius(R + 1).innerRadius(R);
      Z.append("path").attr("d", nt).attr("stroke", k ? "none" : R === 0 ? at : "none").attr("stroke-width", k ? 0 : R === 0 ? ot : 0).attr("fill", k ? "none" : (Rt) => Tn(Rt)).transition("global").duration(tt).attr("d", (Rt) => Xt(Rt)).on("end", (Rt) => {
        k || Ki();
      });
    } else
      Z.append("path").attr("d", (nt) => Xt(nt)).attr("fill", k ? "none" : (nt) => Tn(nt)).attr("stroke", k ? "none" : at).attr("stroke-width", k ? 0 : ot), k || Ki();
    return q && !k && Js(d, y, E, A, I, P), y;
  }
  function El() {
    const y = ct(b(rt)).select("#" + W).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function Tl() {
    const y = ct(b(rt)).select("#" + W).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function Rl(d, g) {
    const A = ct(b(rt)).select("#" + S).selectAll(".eliminated"), R = ye().innerRadius(d), I = ye().outerRadius(g);
    A.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(tt).attrTween("d", function(q) {
      const O = Ge(g, d);
      return function(k) {
        return I.innerRadius(O(k)), I(q);
      };
    }).attr("fill", (q) => `url(#${It(q.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(tt).attrTween("d", function(q) {
      const O = Ge(g, d);
      return function(k) {
        return R.outerRadius(O(k)), R(q);
      };
    }).attr("fill", (q) => Tn(q));
  }
  function Qr(d, g) {
    const y = (d + g) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Ki() {
    ct(b(
      rt
      // force redisplay of text labels
    )).select("#" + W).raise().append("g").remove();
  }
  function ta(d, g, y, E, A, R, I = !1) {
    const O = is().sort(null).value((k) => k.value)(y);
    return ra(d, g, O, E, A, R, I), O;
  }
  function ea(d, g, y, E, A = !1) {
    const R = fn(d), I = br(d), k = ct(b(rt)).select("#" + g).selectAll(".slice").data(y, (T) => p(T.data));
    k.exit().remove();
    const P = k.enter().append("g").attr("class", "slice").attr("id", (T) => p(T.data)).classed("eliminated", !0);
    return A ? P.style("pointer-events", "none") : P.on("mouseenter", (T, C) => ji(T, C)).on("mouseleave", (T, C) => Ji(T, C)), P.append("path").attr("d", (T) => E(T)).attr("fill", A ? "none" : (T) => Tn(T)).attr("stroke", A ? "none" : at).attr("stroke-width", A ? 0 : ot), k.classed("eliminated", (T) => R.includes(T.data.label)).classed("elected", (T) => I.includes(T.data.label)), A || k.on("mouseenter", (T, C) => ji(T, C)).on("mouseleave", (T, C) => Ji(T, C)), k;
  }
  function na(d, g, y, E, A, R = !1) {
    const I = ye().outerRadius(A).innerRadius(E);
    ea(d, g, y, I, R).select("path").attr("d", (O) => I(O)).attr("fill", R ? "none" : (O) => Tn(O));
  }
  function ra(d, g, y, E, A, R, I = !1) {
    const q = ye().outerRadius(A).innerRadius(E).startAngle((Z) => Z.startAngle).endAngle((Z) => Z.endAngle), O = ye().outerRadius(A).innerRadius(E);
    ct(b(rt)).select("#" + g).selectAll(".slice").attr("prevStart", (Z) => Z.startAngle).attr("prevEnd", (Z) => Z.endAngle);
    const T = ea(d, g, y, O, I);
    let C = T.size();
    function Pt() {
      C--, C <= 0 && (I || Ki());
    }
    return T.select("path").transition("global").duration(tt).attrTween("d", function(Z) {
      const Xt = Number(ct(this.parentNode).attr("prevStart")), nt = Number(ct(this.parentNode).attr("prevEnd")), Rt = Ge(Xt, Z.startAngle), ti = Ge(nt, Z.endAngle);
      return (Tr) => (q.startAngle(Rt(Tr)).endAngle(ti(Tr)), q(Z));
    }).on("end", function(Z) {
      Z.startAngle === Z.endAngle && ct(this).attr("stroke", "none"), Pt();
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
    pieColors: Ft,
    exhaustedLabel: _e,
    countExhaustedVotes: He,
    getEliminatedCandidates: fn,
    getElectedCandidates: br,
    runFullAnimationFn: jn,
    animateOnePhaseFn: Zn,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), st();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), st();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), st();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), st();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), st();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), st();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (g) => {
    }) {
      l(d), st();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), st();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), st();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), st();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), st();
    }
  }, ia = Gd();
  return pi(ia, (d) => dt(rt, d), () => b(rt)), Kt(t, ia), Vi(Nl);
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
var jd = /* @__PURE__ */ qe("<div></div>"), Jd = /* @__PURE__ */ qe('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), Zd = /* @__PURE__ */ qe('<div role="button" aria-label="Advance animation phase"></div>');
const Qd = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function yl(t, e) {
  qi(e, !0), Vs(t, Qd);
  let n = ut(e, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = ut(e, "currentStep", 7, 0), i = ut(e, "disabled", 7, !1), s = ut(e, "onAdvance", 7, () => {
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
      n(h), st();
    },
    get currentStep() {
      return r();
    },
    set currentStep(h = 0) {
      r(h), st();
    },
    get disabled() {
      return i();
    },
    set disabled(h = !1) {
      i(h), st();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(h = () => {
    }) {
      s(h), st();
    }
  }, u = Zd();
  let f;
  return u.__click = a, u.__keydown = o, di(u, 21, n, hi, (h, c, p) => {
    var m = Jd(), $ = dn(m);
    {
      var _ = (K) => {
        var Q = jd();
        let tt;
        Ke(() => tt = ri(Q, 1, "connector svelte-1l4eyw0", null, tt, { completed: !i() && p <= r() })), Kt(K, Q);
      };
      tr($, (K) => {
        p > 0 && K(_);
      });
    }
    var x = Qt($, 2), F = Ut(x);
    let S;
    var M = Qt(F, 2);
    let D;
    var W = Ut(M, !0);
    qt(M), qt(x), Ke(() => {
      S = ri(F, 1, "dot svelte-1l4eyw0", null, S, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), D = ri(M, 1, "label svelte-1l4eyw0", null, D, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), pn(W, b(c));
    }), Kt(h, m);
  }), qt(u), Ke(() => {
    f = ri(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), ya(u, "tabindex", i() ? -1 : 0), ya(u, "aria-disabled", i());
  }), Kt(t, u), Vi(l);
}
Hu(["click", "keydown"]);
Hs(yl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var tp = /* @__PURE__ */ qe("<span> </span> <!>", 1), ep = /* @__PURE__ */ qe("About to eliminate: <!>", 1), np = /* @__PURE__ */ qe("<span> </span> <!>", 1), rp = /* @__PURE__ */ qe(" <!>", 1), ip = /* @__PURE__ */ qe('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), sp = /* @__PURE__ */ qe("<span> </span> <br/>", 1), ap = /* @__PURE__ */ qe('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
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
function lp(t, e) {
  qi(e, !0), Vs(t, op);
  const n = 0.85;
  let r = ut(e, "electionSummary", 7), i = ut(e, "currentRound", 7, 1), s = ut(e, "requestRoundChange", 7, (w) => {
  }), a = ut(e, "candidateColors", 23, () => []), o = ut(e, "textForWinner", 7, "elected"), l = ut(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = ut(e, "firstRoundDeterminesPercentages", 7, !1), f = ut(e, "showCaptions", 7, !1);
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
  let c = /* @__PURE__ */ cn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ Et(null), m = /* @__PURE__ */ Et(null), $ = /* @__PURE__ */ Et(""), _ = /* @__PURE__ */ Et(kn([])), x = /* @__PURE__ */ Et(""), F = /* @__PURE__ */ Et(""), S = /* @__PURE__ */ Et(0), M = /* @__PURE__ */ Et(0), D = /* @__PURE__ */ cn(() => W(r()));
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
  function Q(w, Y, et) {
    w.style.left = Y + "px", w.style.top = et + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const it = w.getBoundingClientRect();
      let zt = Y, le = et + 20;
      zt + it.width > window.innerWidth - 12 && (zt = window.innerWidth - it.width - 12), zt < 12 && (zt = 12), le + it.height > window.innerHeight - 12 && (le = et - it.height - 12), w.style.left = zt + "px", w.style.top = le + "px";
    });
  }
  function tt() {
    switch (b(x)) {
      case "enter":
        ((w) => {
          var Y = Jl(w, 2);
          dt(_, Y[0], !0), dt($, Y[1], !0);
        })(at(b(F), i())), b(p) && (Q(b(p), b(S) || 0, b(M) || 0), b(p).style.opacity = String(n));
        break;
      case "leave":
        b(p) && (b(p).style.opacity = "0"), dt(_, [], !0), dt($, "");
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
  Is(() => tt());
  function J(w, Y) {
    return w === 1 ? Y ? "vote was" : "vote will be" : Y ? "votes were" : "votes will be";
  }
  function at(w, Y) {
    const et = [], vt = w === "exhausted" ? _e() : w;
    let bt;
    w === "exhausted" ? bt = z(1) : bt = b(D).results[0].tally[w], et.push(`${vt} started with ${bt} votes.`);
    for (let it = 1; it <= Y; it++) {
      it === Y && (w === "exhausted" ? bt = z(Y) : bt = b(D).results[Y - 1].tally[w], et.push(`${vt} has ${bt} votes at round ${Y}.`));
      const zt = b(D).results[it - 1].tallyResults, le = xt(it);
      for (let Bt = 0; Bt < zt.length; Bt++) {
        const ue = zt[Bt].transfers, gt = zt[Bt].eliminated, _t = zt[Bt].elected;
        if (!le) {
          if (gt)
            gt === w && et.push(`${vt} will be eliminated on round ${it}.`);
          else if (w === _t && (et.push(`${vt} ${b(c).event} on round ${it}.`), ue))
            for (let [Lt, Ye] of Object.entries(ue))
              et.push(`${Ye} ${J(Number(Ye), it < Y)} transferred to ${Lt} on round ${it}.`);
        }
        const $t = gt || _t;
        if ($t) {
          const Lt = Number(ue[w]);
          Lt && et.push(`${Lt} ${J(Lt, it < Y)} transferred from ${$t} on round ${it}.`);
        }
      }
    }
    return [et, vt];
  }
  function ot() {
    let w = 0;
    for (let Y = 1; Y <= b(D).results.length; Y++) {
      if (xt(Y)) continue;
      const et = b(D).results[Y - 1].tallyResults;
      for (let vt = 0; vt < et.length; vt++)
        et[vt].elected && w++;
    }
    return w;
  }
  let N, H = /* @__PURE__ */ Et(0);
  function It(w) {
    var bt;
    return !((bt = b(D)) != null && bt.results) || w < 1 || w > b(D).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [b(D).results[w - 1].tallyResults.some((it) => it.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function Mt(w) {
    var et;
    if (!((et = b(D)) != null && et.results) || w < 1 || w > b(D).results.length || w === b(D).results.length) return !0;
    const Y = b(D).results[w - 1].tallyResults;
    return Y.length === 0 || Y.every((vt) => Object.keys(vt.transfers).length === 0);
  }
  function xt(w) {
    return l() && b(D).results && w === b(D).results.length;
  }
  function ft(w) {
    return xt(w) ? [] : N ? N.getEliminatedCandidates(w) : [];
  }
  function lt(w) {
    return xt(w) ? [] : N ? N.getElectedCandidates(w) : [];
  }
  function z(w) {
    return N ? N.countExhaustedVotes(w) : 0;
  }
  function Ft() {
    N && N.animateOnePhaseFn && N.animateOnePhaseFn();
  }
  function _e() {
    return N ? N.exhaustedLabel : "";
  }
  function rt() {
    return N ? N.pieColors : {};
  }
  var bn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), st();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), st();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (Y) => {
    }) {
      s(w), st();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), st();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), st();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), st();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), st();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), st();
    }
  }, Ot = ap(), oe = dn(Ot), $n = Ut(oe);
  {
    let w = /* @__PURE__ */ cn(() => It(i())), Y = /* @__PURE__ */ cn(() => Mt(i()));
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
      onAdvance: Ft
    });
  }
  qt(oe);
  var wt = Qt(oe, 4), me = Ut(wt), He = Ut(me), An = Ut(He);
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
        dt(x, w, !0);
      },
      get mouseData() {
        return b(F);
      },
      set mouseData(w) {
        dt(F, w, !0);
      },
      get mouseX() {
        return b(S);
      },
      set mouseX(w) {
        dt(S, w, !0);
      },
      get mouseY() {
        return b(M);
      },
      set mouseY(w) {
        dt(M, w, !0);
      },
      get displayPhase() {
        return b(H);
      },
      set displayPhase(w) {
        dt(H, w, !0);
      }
    }),
    (w) => N = w,
    () => N
  ), qt(He), qt(me);
  var jr = Qt(me, 2);
  {
    var Jr = (w) => {
      var Y = ip(), et = dn(Y), vt = Ut(et);
      qt(et);
      var bt = Qt(et, 2), it = Ut(bt);
      {
        var zt = (_t) => {
          var $t = ep(), Lt = Qt(dn($t));
          di(Lt, 17, () => ft(i()), hi, (Ye, jn, En) => {
            var mt = tp(), ze = dn(mt);
            let Be;
            var Jn = Ut(ze, !0);
            qt(ze);
            var Zn = Qt(ze, 2);
            {
              var $r = (Xe) => {
                var We = pa(", ");
                Kt(Xe, We);
              }, Ar = /* @__PURE__ */ cn(() => En < ft(i()).length - 1);
              tr(Zn, (Xe) => {
                b(Ar) && Xe($r);
              });
            }
            Ke(
              (Xe) => {
                Be = ma(ze, "", Be, Xe), pn(Jn, b(jn));
              },
              [() => ({ color: rt()[b(jn)] })]
            ), Kt(Ye, mt);
          }), Kt(_t, $t);
        }, le = /* @__PURE__ */ cn(() => ft(i()).length > 0);
        tr(it, (_t) => {
          b(le) && _t(zt);
        });
      }
      var Bt = Qt(it, 2);
      {
        var ue = (_t) => {
          var $t = rp(), Lt = dn($t), Ye = Qt(Lt);
          di(Ye, 17, () => lt(i()), hi, (jn, En, mt) => {
            var ze = np(), Be = dn(ze);
            let Jn;
            var Zn = Ut(Be, !0);
            qt(Be);
            var $r = Qt(Be, 2);
            {
              var Ar = (We) => {
                var Tn = pa(", ");
                Kt(We, Tn);
              }, Xe = /* @__PURE__ */ cn(() => mt < lt(i()).length - 1);
              tr($r, (We) => {
                b(Xe) && We(Ar);
              });
            }
            Ke(
              (We) => {
                Jn = ma(Be, "", Jn, We), pn(Zn, b(En));
              },
              [() => ({ color: rt()[b(En)] })]
            ), Kt(jn, ze);
          }), Ke(() => pn(Lt, `${b(c).caption ?? ""}: `)), Kt(_t, $t);
        }, gt = /* @__PURE__ */ cn(() => lt(i()).length > 0);
        tr(Bt, (_t) => {
          b(gt) && _t(ue);
        });
      }
      qt(bt), Ke((_t) => pn(vt, `${b(D).config.contest ?? ""}, ${_t ?? ""} ${b(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [ot]), Kt(w, Y);
    };
    tr(jr, (w) => {
      f() && w(Jr);
    });
  }
  qt(wt);
  var Kn = Qt(wt, 2), un = Ut(Kn), Gi = Ut(un, !0);
  qt(un);
  var Zr = Qt(un, 2);
  di(Zr, 17, () => b(_), hi, (w, Y) => {
    var et = sp(), vt = dn(et), bt = Ut(vt, !0);
    qt(vt), os(2), Ke(() => pn(bt, b(Y))), Kt(w, et);
  }), qt(Kn), pi(Kn, (w) => dt(p, w), () => b(p));
  var fn = Qt(Kn, 2), br = Ut(fn);
  return os(2), qt(fn), pi(fn, (w) => dt(m, w), () => b(m)), Ke(
    (w) => {
      pn(Gi, b($)), pn(br, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [_e]
  ), Kt(t, Ot), Vi(bn);
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
