var ol = Object.defineProperty;
var ks = (t) => {
  throw TypeError(t);
};
var ll = (t, e, n) => e in t ? ol(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => ll(t, typeof e != "symbol" ? e + "" : e, n), Ti = (t, e, n) => e.has(t) || ks("Cannot " + n);
var d = (t, e, n) => (Ti(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => e.has(t) ? ks("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), O = (t, e, n, r) => (Ti(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (Ti(t, e, "access private method"), n);
var ua;
typeof window < "u" && ((ua = window.__svelte ?? (window.__svelte = {})).v ?? (ua.v = /* @__PURE__ */ new Set())).add("5");
const ul = 1, fl = 2, cl = 16, hl = 1, dl = 4, pl = 8, vl = 16, gl = 2, is = "[", fi = "[!", ss = "]", Bn = {}, _t = Symbol(), _l = "http://www.w3.org/1999/xhtml", Di = !1;
var ha = Array.isArray, ml = Array.prototype.indexOf, Un = Array.prototype.includes, ci = Array.from, Zr = Object.keys, Jr = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, yl = Object.prototype, wl = Array.prototype, xl = Object.getPrototypeOf, Ms = Object.isExtensible;
const bl = () => {
};
function $l(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function da() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Al(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const wt = 2, vr = 4, hi = 8, pa = 1 << 24, Ue = 16, pe = 32, en = 64, va = 128, Jt = 512, vt = 1024, xt = 2048, de = 4096, Lt = 8192, He = 16384, Qn = 32768, Xn = 65536, Ps = 1 << 17, ga = 1 << 18, Nn = 1 << 19, El = 1 << 20, Ze = 1 << 25, $n = 65536, Ii = 1 << 21, as = 1 << 22, Je = 1 << 23, hr = Symbol("$state"), _a = Symbol("legacy props"), on = new class extends Error {
  constructor() {
    super(...arguments);
    ot(this, "name", "StaleReactionError");
    ot(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Rr = 3, tr = 8;
function Rl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Tl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Cl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Nl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ml() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ol(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Dl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Il() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ll() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function di(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ql() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Z = !1;
function ze(t) {
  Z = t;
}
let H;
function Pt(t) {
  if (t === null)
    throw di(), Bn;
  return H = t;
}
function pi() {
  return Pt(/* @__PURE__ */ ke(H));
}
function Ut(t) {
  if (Z) {
    if (/* @__PURE__ */ ke(H) !== null)
      throw di(), Bn;
    H = t;
  }
}
function Fi(t = 1) {
  if (Z) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(n);
    H = n;
  }
}
function Qr(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === tr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ss) {
        if (e === 0) return n;
        e -= 1;
      } else (r === is || r === fi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ke(n)
    );
    t && n.remove(), n = i;
  }
}
function ma(t) {
  if (!t || t.nodeType !== tr)
    throw di(), Bn;
  return (
    /** @type {Comment} */
    t.data
  );
}
function ya(t) {
  return t === this.v;
}
function Vl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function wa(t) {
  return !Vl(t, this.v);
}
let zl = !1, qt = null;
function Gn(t) {
  qt = t;
}
function os(t, e = !1, n) {
  qt = {
    p: qt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function ls(t) {
  var e = (
    /** @type {ComponentContext} */
    qt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ua(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, qt = e.p, t ?? /** @type {T} */
  {};
}
function xa() {
  return !0;
}
let ln = [];
function ba() {
  var t = ln;
  ln = [], $l(t);
}
function yn(t) {
  if (ln.length === 0 && !dr) {
    var e = ln;
    queueMicrotask(() => {
      e === ln && ba();
    });
  }
  ln.push(t);
}
function Hl() {
  for (; ln.length > 0; )
    ba();
}
function $a(t) {
  var e = X;
  if (e === null)
    return z.f |= Je, t;
  if ((e.f & Qn) === 0 && (e.f & vr) === 0)
    throw t;
  Kn(t, e);
}
function Kn(t, e) {
  for (; e !== null; ) {
    if ((e.f & va) !== 0) {
      if ((e.f & Qn) === 0)
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
const Yl = -7169;
function lt(t, e) {
  t.f = t.f & Yl | e;
}
function us(t) {
  (t.f & Jt) !== 0 || t.deps === null ? lt(t, vt) : lt(t, de);
}
function Aa(t) {
  if (t !== null)
    for (const e of t)
      (e.f & wt) === 0 || (e.f & $n) === 0 || (e.f ^= $n, Aa(
        /** @type {Derived} */
        e.deps
      ));
}
function Ea(t, e, n) {
  (t.f & xt) !== 0 ? e.add(t) : (t.f & de) !== 0 && n.add(t), Aa(t.deps), lt(t, vt);
}
const Mr = /* @__PURE__ */ new Set();
let Y = null, yt = null, St = [], vi = null, Li = !1, dr = !1;
var Fn, Ln, hn, qn, xr, br, dn, Ie, Vn, Se, qi, Vi, Ra;
const Es = class Es {
  constructor() {
    L(this, Se);
    ot(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ot(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ot(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, Fn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, Ln, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, hn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    L(this, qn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, xr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, br, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, dn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, Ie, /* @__PURE__ */ new Map());
    ot(this, "is_fork", !1);
    L(this, Vn, !1);
  }
  is_deferred() {
    return this.is_fork || d(this, qn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    d(this, Ie).has(e) || d(this, Ie).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = d(this, Ie).get(e);
    if (n) {
      d(this, Ie).delete(e);
      for (var r of n.d)
        lt(r, xt), ce(r);
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
    St = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      pt(this, Se, qi).call(this, s, n, r);
    if (this.is_deferred()) {
      pt(this, Se, Vi).call(this, r), pt(this, Se, Vi).call(this, n);
      for (const [s, a] of d(this, Ie))
        Sa(s, a);
    } else {
      for (const s of d(this, Fn)) s();
      d(this, Fn).clear(), d(this, hn) === 0 && pt(this, Se, Ra).call(this), Y = null, Os(r), Os(n), (i = d(this, xr)) == null || i.resolve();
    }
    yt = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== _t && !this.previous.has(e) && this.previous.set(e, n), (e.f & Je) === 0 && (this.current.set(e, e.v), yt == null || yt.set(e, e.v));
  }
  activate() {
    Y = this, this.apply();
  }
  deactivate() {
    Y === this && (Y = null, yt = null);
  }
  flush() {
    if (this.activate(), St.length > 0) {
      if (Ta(), Y !== null && Y !== this)
        return;
    } else d(this, hn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of d(this, Ln)) e(this);
    d(this, Ln).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    O(this, hn, d(this, hn) + 1), e && O(this, qn, d(this, qn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    O(this, hn, d(this, hn) - 1), e && O(this, qn, d(this, qn) - 1), !d(this, Vn) && (O(this, Vn, !0), yn(() => {
      O(this, Vn, !1), this.is_deferred() ? St.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of d(this, br))
      d(this, dn).delete(e), lt(e, xt), ce(e);
    for (const e of d(this, dn))
      lt(e, de), ce(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    d(this, Fn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    d(this, Ln).add(e);
  }
  settled() {
    return (d(this, xr) ?? O(this, xr, da())).promise;
  }
  static ensure() {
    if (Y === null) {
      const e = Y = new Es();
      Mr.add(Y), dr || yn(() => {
        Y === e && e.flush();
      });
    }
    return Y;
  }
  apply() {
  }
};
Fn = new WeakMap(), Ln = new WeakMap(), hn = new WeakMap(), qn = new WeakMap(), xr = new WeakMap(), br = new WeakMap(), dn = new WeakMap(), Ie = new WeakMap(), Vn = new WeakMap(), Se = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
qi = function(e, n, r) {
  e.f ^= vt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (pe | en)) !== 0, l = o && (a & vt) !== 0, u = l || (a & Lt) !== 0 || d(this, Ie).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= vt : s !== null && (a & (vr | hi | pa)) !== 0 ? s.b.defer_effect(i) : (a & vr) !== 0 ? n.push(i) : Tr(i) && ((a & Ue) !== 0 && d(this, dn).add(i), jn(i));
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
Vi = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ea(e[n], d(this, br), d(this, dn));
}, Ra = function() {
  var i;
  if (Mr.size > 1) {
    this.previous.clear();
    var e = yt, n = !0;
    for (const s of Mr) {
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
        var r = St;
        St = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          Ca(f, o, l, u);
        if (St.length > 0) {
          Y = s, s.apply();
          for (const f of St)
            pt(i = s, Se, qi).call(i, f, [], []);
          s.deactivate();
        }
        St = r;
      }
    }
    Y = null, yt = e;
  }
  this.committed = !0, Mr.delete(this);
};
let Ye = Es;
function jt(t) {
  var e = dr;
  dr = !0;
  try {
    for (var n; ; ) {
      if (Hl(), St.length === 0 && (Y == null || Y.flush(), St.length === 0))
        return vi = null, /** @type {T} */
        n;
      Ta();
    }
  } finally {
    dr = e;
  }
}
function Ta() {
  Li = !0;
  var t = null;
  try {
    for (var e = 0; St.length > 0; ) {
      var n = Ye.ensure();
      if (e++ > 1e3) {
        var r, i;
        Bl();
      }
      n.process(St), Qe.clear();
    }
  } finally {
    St = [], Li = !1, vi = null;
  }
}
function Bl() {
  try {
    Ml();
  } catch (t) {
    Kn(t, vi);
  }
}
let oe = null;
function Os(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (He | Lt)) === 0 && Tr(r) && (oe = /* @__PURE__ */ new Set(), jn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ka(r), (oe == null ? void 0 : oe.size) > 0)) {
        Qe.clear();
        for (const i of oe) {
          if ((i.f & (He | Lt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            oe.has(a) && (oe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (He | Lt)) === 0 && jn(l);
          }
        }
        oe.clear();
      }
    }
    oe = null;
  }
}
function Ca(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & wt) !== 0 ? Ca(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (as | Ue)) !== 0 && (s & xt) === 0 && Na(i, e, r) && (lt(i, xt), ce(
        /** @type {Effect} */
        i
      ));
    }
}
function Na(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (Un.call(e, i))
        return !0;
      if ((i.f & wt) !== 0 && Na(
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
  for (var e = vi = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Li && e === X && (n & Ue) !== 0 && (n & ga) === 0)
      return;
    if ((n & (en | pe)) !== 0) {
      if ((n & vt) === 0) return;
      e.f ^= vt;
    }
  }
  St.push(e);
}
function Sa(t, e) {
  if (!((t.f & pe) !== 0 && (t.f & vt) !== 0)) {
    (t.f & xt) !== 0 ? e.d.push(t) : (t.f & de) !== 0 && e.m.push(t), lt(t, vt);
    for (var n = t.first; n !== null; )
      Sa(n, e), n = n.next;
  }
}
function Ul(t) {
  let e = 0, n = An(0), r;
  return () => {
    hs() && (w(n), ps(() => (e === 0 && (r = mi(() => t(() => pr(n)))), e += 1, () => {
      yn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, pr(n));
      });
    })));
  };
}
var Xl = Xn | Nn | va;
function Gl(t, e, n) {
  new Kl(t, e, n);
}
var It, $r, $e, pn, Ae, Kt, Nt, Ee, Fe, je, vn, Le, zn, gn, Hn, Yn, qe, li, ht, ka, Ma, zi, zr, Hr, Hi;
class Kl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    L(this, ht);
    /** @type {Boundary | null} */
    ot(this, "parent");
    ot(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, It);
    /** @type {TemplateNode | null} */
    L(this, $r, Z ? H : null);
    /** @type {BoundaryProps} */
    L(this, $e);
    /** @type {((anchor: Node) => void)} */
    L(this, pn);
    /** @type {Effect} */
    L(this, Ae);
    /** @type {Effect | null} */
    L(this, Kt, null);
    /** @type {Effect | null} */
    L(this, Nt, null);
    /** @type {Effect | null} */
    L(this, Ee, null);
    /** @type {DocumentFragment | null} */
    L(this, Fe, null);
    /** @type {TemplateNode | null} */
    L(this, je, null);
    L(this, vn, 0);
    L(this, Le, 0);
    L(this, zn, !1);
    L(this, gn, !1);
    /** @type {Set<Effect>} */
    L(this, Hn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, Yn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, qe, null);
    L(this, li, Ul(() => (O(this, qe, An(d(this, vn))), () => {
      O(this, qe, null);
    })));
    O(this, It, e), O(this, $e, n), O(this, pn, r), this.parent = /** @type {Effect} */
    X.b, this.is_pending = !!d(this, $e).pending, O(this, Ae, vs(() => {
      if (X.b = this, Z) {
        const s = d(this, $r);
        pi(), /** @type {Comment} */
        s.nodeType === tr && /** @type {Comment} */
        s.data === fi ? pt(this, ht, Ma).call(this) : (pt(this, ht, ka).call(this), d(this, Le) === 0 && (this.is_pending = !1));
      } else {
        var i = pt(this, ht, zi).call(this);
        try {
          O(this, Kt, Zt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        d(this, Le) > 0 ? pt(this, ht, Hr).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = d(this, je)) == null || s.remove();
      };
    }, Xl)), Z && O(this, It, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ea(e, d(this, Hn), d(this, Yn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!d(this, $e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    pt(this, ht, Hi).call(this, e), O(this, vn, d(this, vn) + e), !(!d(this, qe) || d(this, zn)) && (O(this, zn, !0), yn(() => {
      O(this, zn, !1), d(this, qe) && Wn(d(this, qe), d(this, vn));
    }));
  }
  get_effect_pending() {
    return d(this, li).call(this), w(
      /** @type {Source<number>} */
      d(this, qe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = d(this, $e).onerror;
    let r = d(this, $e).failed;
    if (d(this, gn) || !n && !r)
      throw e;
    d(this, Kt) && (Rt(d(this, Kt)), O(this, Kt, null)), d(this, Nt) && (Rt(d(this, Nt)), O(this, Nt, null)), d(this, Ee) && (Rt(d(this, Ee)), O(this, Ee, null)), Z && (Pt(
      /** @type {TemplateNode} */
      d(this, $r)
    ), Fi(), Pt(Qr()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        ql();
        return;
      }
      i = !0, s && Ll(), Ye.ensure(), O(this, vn, 0), d(this, Ee) !== null && wn(d(this, Ee), () => {
        O(this, Ee, null);
      }), this.is_pending = this.has_pending_snippet(), O(this, Kt, pt(this, ht, zr).call(this, () => (O(this, gn, !1), Zt(() => d(this, pn).call(this, d(this, It)))))), d(this, Le) > 0 ? pt(this, ht, Hr).call(this) : this.is_pending = !1;
    };
    yn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        Kn(o, d(this, Ae) && d(this, Ae).parent);
      }
      r && O(this, Ee, pt(this, ht, zr).call(this, () => {
        Ye.ensure(), O(this, gn, !0);
        try {
          return Zt(() => {
            r(
              d(this, It),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return Kn(
            o,
            /** @type {Effect} */
            d(this, Ae).parent
          ), null;
        } finally {
          O(this, gn, !1);
        }
      }));
    });
  }
}
It = new WeakMap(), $r = new WeakMap(), $e = new WeakMap(), pn = new WeakMap(), Ae = new WeakMap(), Kt = new WeakMap(), Nt = new WeakMap(), Ee = new WeakMap(), Fe = new WeakMap(), je = new WeakMap(), vn = new WeakMap(), Le = new WeakMap(), zn = new WeakMap(), gn = new WeakMap(), Hn = new WeakMap(), Yn = new WeakMap(), qe = new WeakMap(), li = new WeakMap(), ht = new WeakSet(), ka = function() {
  try {
    O(this, Kt, Zt(() => d(this, pn).call(this, d(this, It))));
  } catch (e) {
    this.error(e);
  }
}, Ma = function() {
  const e = d(this, $e).pending;
  e && (O(this, Nt, Zt(() => e(d(this, It)))), yn(() => {
    var n = pt(this, ht, zi).call(this);
    O(this, Kt, pt(this, ht, zr).call(this, () => (Ye.ensure(), Zt(() => d(this, pn).call(this, n))))), d(this, Le) > 0 ? pt(this, ht, Hr).call(this) : (wn(
      /** @type {Effect} */
      d(this, Nt),
      () => {
        O(this, Nt, null);
      }
    ), this.is_pending = !1);
  }));
}, zi = function() {
  var e = d(this, It);
  return this.is_pending && (O(this, je, te()), d(this, It).before(d(this, je)), e = d(this, je)), e;
}, /**
 * @param {() => Effect | null} fn
 */
zr = function(e) {
  var n = X, r = z, i = qt;
  Ne(d(this, Ae)), ee(d(this, Ae)), Gn(d(this, Ae).ctx);
  try {
    return e();
  } catch (s) {
    return $a(s), null;
  } finally {
    Ne(n), ee(r), Gn(i);
  }
}, Hr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    d(this, $e).pending
  );
  d(this, Kt) !== null && (O(this, Fe, document.createDocumentFragment()), d(this, Fe).append(
    /** @type {TemplateNode} */
    d(this, je)
  ), Za(d(this, Kt), d(this, Fe))), d(this, Nt) === null && O(this, Nt, Zt(() => e(d(this, It))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Hi = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pt(n = this.parent, ht, Hi).call(n, e);
    return;
  }
  if (O(this, Le, d(this, Le) + e), d(this, Le) === 0) {
    this.is_pending = !1;
    for (const r of d(this, Hn))
      lt(r, xt), ce(r);
    for (const r of d(this, Yn))
      lt(r, de), ce(r);
    d(this, Hn).clear(), d(this, Yn).clear(), d(this, Nt) && wn(d(this, Nt), () => {
      O(this, Nt, null);
    }), d(this, Fe) && (d(this, It).before(d(this, Fe)), O(this, Fe, null));
  }
};
function Wl(t, e, n, r) {
  const i = gi;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = Y, o = (
    /** @type {Effect} */
    X
  ), l = jl(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (v) {
      (o.f & He) === 0 && Kn(v, o);
    }
    a == null || a.deactivate(), Yi();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ Zl(c))).then((c) => f([...e.map(i), ...c])).catch((c) => Kn(c, o));
  }
  u ? u.then(h) : h();
}
function jl() {
  var t = X, e = z, n = qt, r = Y;
  return function(s = !0) {
    Ne(t), ee(e), Gn(n), s && (r == null || r.activate());
  };
}
function Yi() {
  Ne(null), ee(null), Gn(null);
}
// @__NO_SIDE_EFFECTS__
function gi(t) {
  var e = wt | xt, n = z !== null && (z.f & wt) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return X !== null && (X.f |= Nn), {
    ctx: qt,
    deps: null,
    effects: null,
    equals: ya,
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
function Zl(t, e, n) {
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
  ), a = An(
    /** @type {V} */
    _t
  ), o = !z, l = /* @__PURE__ */ new Map();
  return ou(() => {
    var v;
    var u = da();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === Y && f.committed && f.deactivate(), Yi();
      });
    } catch (g) {
      u.reject(g), Yi();
    }
    var f = (
      /** @type {Batch} */
      Y
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (v = l.get(f)) == null || v.reject(on), l.delete(f), l.set(f, u);
    }
    const c = (g, m = void 0) => {
      if (f.activate(), m)
        m !== on && (a.f |= Je, Wn(a, m));
      else {
        (a.f & Je) !== 0 && (a.f ^= Je), Wn(a, g);
        for (const [b, A] of l) {
          if (l.delete(b), b === f) break;
          A.reject(on);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), iu(() => {
    for (const u of l.values())
      u.reject(on);
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
function sr(t) {
  const e = /* @__PURE__ */ gi(t);
  return Ja(e), e;
}
// @__NO_SIDE_EFFECTS__
function Pa(t) {
  const e = /* @__PURE__ */ gi(t);
  return e.equals = wa, e;
}
function Jl(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Rt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ql(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & wt) === 0)
      return (e.f & He) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function fs(t) {
  var e, n = X;
  Ne(Ql(t));
  try {
    t.f &= ~$n, Jl(t), e = no(t);
  } finally {
    Ne(n);
  }
  return e;
}
function Oa(t) {
  var e = fs(t);
  if (!t.equals(e) && (t.wv = to(), (!(Y != null && Y.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    lt(t, vt);
    return;
  }
  tn || (yt !== null ? (hs() || Y != null && Y.is_fork) && yt.set(t, e) : us(t));
}
function tu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(on), r.teardown = bl, r.ac = null, gr(r, 0), gs(r));
}
function Da(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && jn(e);
}
let Bi = /* @__PURE__ */ new Set();
const Qe = /* @__PURE__ */ new Map();
let Ia = !1;
function An(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ya,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function mt(t, e) {
  const n = An(t);
  return Ja(n), n;
}
// @__NO_SIDE_EFFECTS__
function Fa(t, e = !1, n = !0) {
  const r = An(t);
  return e || (r.equals = wa), r;
}
function J(t, e, n = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!he || (z.f & Ps) !== 0) && xa() && (z.f & (wt | Ue | as | Ps)) !== 0 && (Qt === null || !Un.call(Qt, t)) && Fl();
  let r = n ? un(e) : e;
  return Wn(t, r);
}
function Wn(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    tn ? Qe.set(t, e) : Qe.set(t, n), t.v = e;
    var r = Ye.ensure();
    if (r.capture(t, n), (t.f & wt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & xt) !== 0 && fs(i), us(i);
    }
    t.wv = to(), La(t, xt), X !== null && (X.f & vt) !== 0 && (X.f & (pe | en)) === 0 && (Gt === null ? fu([t]) : Gt.push(t)), !r.is_fork && Bi.size > 0 && !Ia && eu();
  }
  return e;
}
function eu() {
  Ia = !1;
  for (const t of Bi)
    (t.f & vt) !== 0 && lt(t, de), Tr(t) && jn(t);
  Bi.clear();
}
function pr(t) {
  J(t, t.v + 1);
}
function La(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & xt) === 0;
      if (o && lt(s, e), (a & wt) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        yt == null || yt.delete(l), (a & $n) === 0 && (a & Jt && (s.f |= $n), La(l, de));
      } else o && ((a & Ue) !== 0 && oe !== null && oe.add(
        /** @type {Effect} */
        s
      ), ce(
        /** @type {Effect} */
        s
      ));
    }
}
function un(t) {
  if (typeof t != "object" || t === null || hr in t)
    return t;
  const e = xl(t);
  if (e !== yl && e !== wl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ha(t), i = /* @__PURE__ */ mt(0), s = xn, a = (o) => {
    if (xn === s)
      return o();
    var l = z, u = xn;
    ee(null), Fs(s);
    var f = o();
    return ee(l), Fs(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ mt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Dl();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ mt(u.value);
          return n.set(l, h), h;
        }) : J(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ mt(_t));
            n.set(l, f), pr(i);
          }
        } else
          J(u, _t), pr(i);
        return !0;
      },
      get(o, l, u) {
        var v;
        if (l === hr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (v = mn(o, l)) != null && v.writable) && (f = a(() => {
          var g = un(h ? o[l] : _t), m = /* @__PURE__ */ mt(g);
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
        if (l === hr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== _t || Reflect.has(o, l);
        if (u !== void 0 || X !== null && (!f || (c = mn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var v = f ? un(o[l]) : _t, g = /* @__PURE__ */ mt(v);
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
            g !== void 0 ? J(g, _t) : v in o && (g = a(() => /* @__PURE__ */ mt(_t)), n.set(v + "", g));
          }
        if (h === void 0)
          (!c || (T = mn(o, l)) != null && T.writable) && (h = a(() => /* @__PURE__ */ mt(void 0)), J(h, un(u)), n.set(l, h));
        else {
          c = h.v !== _t;
          var m = a(() => un(u));
          J(h, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= A.v && J(A, S + 1);
          }
          pr(i);
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
var Ds, qa, Va, za;
function Ui() {
  if (Ds === void 0) {
    Ds = window, qa = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Va = mn(e, "firstChild").get, za = mn(e, "nextSibling").get, Ms(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Ms(n) && (n.__t = void 0);
  }
}
function te(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function En(t) {
  return (
    /** @type {TemplateNode | null} */
    Va.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function ke(t) {
  return (
    /** @type {TemplateNode | null} */
    za.call(t)
  );
}
function Xt(t, e) {
  if (!Z)
    return /* @__PURE__ */ En(t);
  var n = /* @__PURE__ */ En(H);
  if (n === null)
    n = H.appendChild(te());
  else if (e && n.nodeType !== Rr) {
    var r = te();
    return n == null || n.before(r), Pt(r), r;
  }
  return e && _i(
    /** @type {Text} */
    n
  ), Pt(n), n;
}
function Mn(t, e = !1) {
  if (!Z) {
    var n = /* @__PURE__ */ En(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ke(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Rr) {
      var r = te();
      return H == null || H.before(r), Pt(r), r;
    }
    _i(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function ae(t, e = 1, n = !1) {
  let r = Z ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ke(r);
  if (!Z)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Rr) {
      var s = te();
      return r === null ? i == null || i.after(s) : r.before(s), Pt(s), s;
    }
    _i(
      /** @type {Text} */
      r
    );
  }
  return Pt(r), r;
}
function Ha(t) {
  t.textContent = "";
}
function Ya() {
  return !1;
}
function cs(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(_l, t, void 0)
  );
}
function _i(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Rr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function Ba(t) {
  var e = z, n = X;
  ee(null), Ne(null);
  try {
    return t();
  } finally {
    ee(e), Ne(n);
  }
}
function nu(t) {
  X === null && (z === null && kl(), Sl()), tn && Nl();
}
function ru(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Me(t, e, n) {
  var r = X;
  r !== null && (r.f & Lt) !== 0 && (t |= Lt);
  var i = {
    ctx: qt,
    deps: null,
    nodes: null,
    f: t | xt | Jt,
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
      jn(i);
    } catch (o) {
      throw Rt(i), o;
    }
  else e !== null && ce(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Nn) === 0 && (s = s.first, (t & Ue) !== 0 && (t & Xn) !== 0 && s !== null && (s.f |= Xn)), s !== null && (s.parent = r, r !== null && ru(s, r), z !== null && (z.f & wt) !== 0 && (t & en) === 0)) {
    var a = (
      /** @type {Derived} */
      z
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function hs() {
  return z !== null && !he;
}
function iu(t) {
  const e = Me(hi, null, !1);
  return lt(e, vt), e.teardown = t, e;
}
function ds(t) {
  nu();
  var e = (
    /** @type {Effect} */
    X.f
  ), n = !z && (e & pe) !== 0 && (e & Qn) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      qt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ua(t);
}
function Ua(t) {
  return Me(vr | El, t, !1);
}
function su(t) {
  Ye.ensure();
  const e = Me(en | Nn, t, !0);
  return () => {
    Rt(e);
  };
}
function au(t) {
  Ye.ensure();
  const e = Me(en | Nn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? wn(e, () => {
      Rt(e), r(void 0);
    }) : (Rt(e), r(void 0));
  });
}
function Xa(t) {
  return Me(vr, t, !1);
}
function ou(t) {
  return Me(as | Nn, t, !0);
}
function ps(t, e = 0) {
  return Me(hi | e, t, !0);
}
function Pr(t, e = [], n = [], r = []) {
  Wl(r, e, n, (i) => {
    Me(hi, () => t(...i.map(w)), !0);
  });
}
function vs(t, e = 0) {
  var n = Me(Ue | e, t, !0);
  return n;
}
function Zt(t) {
  return Me(pe | Nn, t, !0);
}
function Ga(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = tn, r = z;
    Is(!0), ee(null);
    try {
      e.call(null);
    } finally {
      Is(n), ee(r);
    }
  }
}
function gs(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ba(() => {
      i.abort(on);
    });
    var r = n.next;
    (n.f & en) !== 0 ? n.parent = null : Rt(n, e), n = r;
  }
}
function lu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & pe) === 0 && Rt(e), e = n;
  }
}
function Rt(t, e = !0) {
  var n = !1;
  (e || (t.f & ga) !== 0) && t.nodes !== null && t.nodes.end !== null && (uu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), gs(t, e && !n), gr(t, 0), lt(t, He);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ga(t);
  var i = t.parent;
  i !== null && i.first !== null && Ka(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function uu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ ke(t);
    t.remove(), t = n;
  }
}
function Ka(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function wn(t, e, n = !0) {
  var r = [];
  Wa(t, r, !0);
  var i = () => {
    n && Rt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Wa(t, e, n) {
  if ((t.f & Lt) === 0) {
    t.f ^= Lt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & Xn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & pe) !== 0 && (t.f & Ue) !== 0;
      Wa(i, e, a ? n : !1), i = s;
    }
  }
}
function _s(t) {
  ja(t, !0);
}
function ja(t, e) {
  if ((t.f & Lt) !== 0) {
    t.f ^= Lt, (t.f & vt) === 0 && (lt(t, xt), ce(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Xn) !== 0 || (n.f & pe) !== 0;
      ja(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Za(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ ke(n);
      e.append(n), n = i;
    }
}
let Yr = !1, tn = !1;
function Is(t) {
  tn = t;
}
let z = null, he = !1;
function ee(t) {
  z = t;
}
let X = null;
function Ne(t) {
  X = t;
}
let Qt = null;
function Ja(t) {
  z !== null && (Qt === null ? Qt = [t] : Qt.push(t));
}
let kt = null, Dt = 0, Gt = null;
function fu(t) {
  Gt = t;
}
let Qa = 1, fn = 0, xn = fn;
function Fs(t) {
  xn = t;
}
function to() {
  return ++Qa;
}
function Tr(t) {
  var e = t.f;
  if ((e & xt) !== 0)
    return !0;
  if (e & wt && (t.f &= ~$n), (e & de) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Tr(
        /** @type {Derived} */
        s
      ) && Oa(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & Jt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    yt === null && lt(t, vt);
  }
  return !1;
}
function eo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Qt !== null && Un.call(Qt, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & wt) !== 0 ? eo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? lt(s, xt) : (s.f & vt) !== 0 && lt(s, de), ce(
        /** @type {Effect} */
        s
      ));
    }
}
function no(t) {
  var m;
  var e = kt, n = Dt, r = Gt, i = z, s = Qt, a = qt, o = he, l = xn, u = t.f;
  kt = /** @type {null | Value[]} */
  null, Dt = 0, Gt = null, z = (u & (pe | en)) === 0 ? t : null, Qt = null, Gn(t.ctx), he = !1, xn = ++fn, t.ac !== null && (Ba(() => {
    t.ac.abort(on);
  }), t.ac = null);
  try {
    t.f |= Ii;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= Qn;
    var c = t.deps, v = Y == null ? void 0 : Y.is_fork;
    if (kt !== null) {
      var g;
      if (v || gr(t, Dt), c !== null && Dt > 0)
        for (c.length = Dt + kt.length, g = 0; g < kt.length; g++)
          c[Dt + g] = kt[g];
      else
        t.deps = c = kt;
      if (hs() && (t.f & Jt) !== 0)
        for (g = Dt; g < c.length; g++)
          ((m = c[g]).reactions ?? (m.reactions = [])).push(t);
    } else !v && c !== null && Dt < c.length && (gr(t, Dt), c.length = Dt);
    if (xa() && Gt !== null && !he && c !== null && (t.f & (wt | de | xt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Gt.length; g++)
        eo(
          Gt[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (fn++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = fn;
      if (e !== null)
        for (const b of e)
          b.rv = fn;
      Gt !== null && (r === null ? r = Gt : r.push(.../** @type {Source[]} */
      Gt));
    }
    return (t.f & Je) !== 0 && (t.f ^= Je), h;
  } catch (b) {
    return $a(b);
  } finally {
    t.f ^= Ii, kt = e, Dt = n, Gt = r, z = i, Qt = s, Gn(a), he = o, xn = l;
  }
}
function cu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = ml.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & wt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (kt === null || !Un.call(kt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Jt) !== 0 && (s.f ^= Jt, s.f &= ~$n), us(s), tu(s), gr(s, 0);
  }
}
function gr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      cu(t, n[r]);
}
function jn(t) {
  var e = t.f;
  if ((e & He) === 0) {
    lt(t, vt);
    var n = X, r = Yr;
    X = t, Yr = !0;
    try {
      (e & (Ue | pa)) !== 0 ? lu(t) : gs(t), Ga(t);
      var i = no(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Qa;
      var s;
      Di && zl && (t.f & xt) !== 0 && t.deps;
    } finally {
      Yr = r, X = n;
    }
  }
}
function w(t) {
  var e = t.f, n = (e & wt) !== 0;
  if (z !== null && !he) {
    var r = X !== null && (X.f & He) !== 0;
    if (!r && (Qt === null || !Un.call(Qt, t))) {
      var i = z.deps;
      if ((z.f & Ii) !== 0)
        t.rv < fn && (t.rv = fn, kt === null && i !== null && i[Dt] === t ? Dt++ : kt === null ? kt = [t] : kt.push(t));
      else {
        (z.deps ?? (z.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [z] : Un.call(s, z) || s.push(z);
      }
    }
  }
  if (tn && Qe.has(t))
    return Qe.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (tn) {
      var o = a.v;
      return ((a.f & vt) === 0 && a.reactions !== null || io(a)) && (o = fs(a)), Qe.set(a, o), o;
    }
    var l = (a.f & Jt) === 0 && !he && z !== null && (Yr || (z.f & Jt) !== 0), u = (a.f & Qn) === 0;
    Tr(a) && (l && (a.f |= Jt), Oa(a)), l && !u && (Da(a), ro(a));
  }
  if (yt != null && yt.has(t))
    return yt.get(t);
  if ((t.f & Je) !== 0)
    throw t.v;
  return t.v;
}
function ro(t) {
  if (t.f |= Jt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & wt) !== 0 && (e.f & Jt) === 0 && (Da(
        /** @type {Derived} */
        e
      ), ro(
        /** @type {Derived} */
        e
      ));
}
function io(t) {
  if (t.v === _t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Qe.has(e) || (e.f & wt) !== 0 && io(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function mi(t) {
  var e = he;
  try {
    return he = !0, t();
  } finally {
    he = e;
  }
}
const so = /* @__PURE__ */ new Set(), Xi = /* @__PURE__ */ new Set();
function hu(t) {
  for (var e = 0; e < t.length; e++)
    so.add(t[e]);
  for (var n of Xi)
    n(t);
}
let Ls = null;
function qs(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Ls = t;
  var a = 0, o = Ls === t && t.__root;
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
    Jr(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = z, h = X;
    ee(null), Ne(null);
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
        } catch (A) {
          c ? v.push(A) : c = A;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let A of v)
          queueMicrotask(() => {
            throw A;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ee(f), Ne(h);
    }
  }
}
var fa, ca;
const Ci = (ca = (fa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : fa.trustedTypes) == null ? void 0 : /* @__PURE__ */ ca.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function du(t) {
  return (
    /** @type {string} */
    (Ci == null ? void 0 : Ci.createHTML(t)) ?? t
  );
}
function ao(t, e = !1) {
  var n = cs("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? du(t) : t, n.content;
}
function Rn(t, e) {
  var n = (
    /** @type {Effect} */
    X
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function er(t, e) {
  var n = (e & gl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return Rn(H, null), H;
    r === void 0 && (r = ao(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || qa ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ En(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Rn(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function pu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return Rn(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ao(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ En(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ En(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Rn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function vu(t, e) {
  return /* @__PURE__ */ pu(t, e, "svg");
}
function Vs(t = "") {
  if (!Z) {
    var e = te(t + "");
    return Rn(e, e), e;
  }
  var n = H;
  return n.nodeType !== Rr ? (n.before(n = te()), Pt(n)) : _i(
    /** @type {Text} */
    n
  ), Rn(n, n), n;
}
function be(t, e) {
  if (Z) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      X
    );
    ((n.f & Qn) === 0 || n.nodes.end === null) && (n.nodes.end = H), pi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const gu = ["touchstart", "touchmove"];
function _u(t) {
  return gu.includes(t);
}
function Pn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function oo(t, e) {
  return lo(t, e);
}
function mu(t, e) {
  Ui(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = H;
  try {
    for (var s = /* @__PURE__ */ En(n); s && (s.nodeType !== tr || /** @type {Comment} */
    s.data !== is); )
      s = /* @__PURE__ */ ke(s);
    if (!s)
      throw Bn;
    ze(!0), Pt(
      /** @type {Comment} */
      s
    );
    const a = lo(t, { ...e, anchor: s });
    return ze(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Bn && console.warn("Failed to hydrate: ", a), e.recover === !1 && Pl(), Ui(), Ha(n), ze(!1), oo(t, e);
  } finally {
    ze(r), Pt(i);
  }
}
const Or = /* @__PURE__ */ new Map();
function lo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  Ui();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var v = h[c];
      if (!o.has(v)) {
        o.add(v);
        var g = _u(v);
        for (const A of [e, document]) {
          var m = Or.get(A);
          m === void 0 && (m = /* @__PURE__ */ new Map(), Or.set(A, m));
          var b = m.get(v);
          b === void 0 ? (A.addEventListener(v, qs, { passive: g }), m.set(v, 1)) : m.set(v, b + 1);
        }
      }
    }
  };
  l(ci(so)), Xi.add(l);
  var u = void 0, f = au(() => {
    var h = n ?? e.appendChild(te());
    return Gl(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        os({});
        var v = (
          /** @type {ComponentContext} */
          qt
        );
        if (s && (v.c = s), i && (r.$$events = i), Z && Rn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, Z && (X.nodes.end = H, H === null || H.nodeType !== tr || /** @type {Comment} */
        H.data !== ss))
          throw di(), Bn;
        ls();
      }
    ), () => {
      var m;
      for (var c of o)
        for (const b of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Or.get(b)
          ), g = (
            /** @type {number} */
            v.get(c)
          );
          --g == 0 ? (b.removeEventListener(c, qs), v.delete(c), v.size === 0 && Or.delete(b)) : v.set(c, g);
        }
      Xi.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return Gi.set(u, f), u;
}
let Gi = /* @__PURE__ */ new WeakMap();
function yu(t, e) {
  const n = Gi.get(t);
  return n ? (Gi.delete(t), n(e)) : Promise.resolve();
}
var le, Re, Ft, _n, Ar, Er, ui;
class wu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    ot(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, le, /* @__PURE__ */ new Map());
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
    L(this, Ft, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, _n, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Ar, !0);
    L(this, Er, () => {
      var e = (
        /** @type {Batch} */
        Y
      );
      if (d(this, le).has(e)) {
        var n = (
          /** @type {Key} */
          d(this, le).get(e)
        ), r = d(this, Re).get(n);
        if (r)
          _s(r), d(this, _n).delete(n);
        else {
          var i = d(this, Ft).get(n);
          i && (d(this, Re).set(n, i.effect), d(this, Ft).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of d(this, le)) {
          if (d(this, le).delete(s), s === e)
            break;
          const o = d(this, Ft).get(a);
          o && (Rt(o.effect), d(this, Ft).delete(a));
        }
        for (const [s, a] of d(this, Re)) {
          if (s === n || d(this, _n).has(s)) continue;
          const o = () => {
            if (Array.from(d(this, le).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Za(a, u), u.append(te()), d(this, Ft).set(s, { effect: a, fragment: u });
            } else
              Rt(a);
            d(this, _n).delete(s), d(this, Re).delete(s);
          };
          d(this, Ar) || !r ? (d(this, _n).add(s), wn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, ui, (e) => {
      d(this, le).delete(e);
      const n = Array.from(d(this, le).values());
      for (const [r, i] of d(this, Ft))
        n.includes(r) || (Rt(i.effect), d(this, Ft).delete(r));
    });
    this.anchor = e, O(this, Ar, n);
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
    ), i = Ya();
    if (n && !d(this, Re).has(e) && !d(this, Ft).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = te();
        s.append(a), d(this, Ft).set(e, {
          effect: Zt(() => n(a)),
          fragment: s
        });
      } else
        d(this, Re).set(
          e,
          Zt(() => n(this.anchor))
        );
    if (d(this, le).set(r, e), i) {
      for (const [o, l] of d(this, Re))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of d(this, Ft))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(d(this, Er)), r.ondiscard(d(this, ui));
    } else
      Z && (this.anchor = H), d(this, Er).call(this);
  }
}
le = new WeakMap(), Re = new WeakMap(), Ft = new WeakMap(), _n = new WeakMap(), Ar = new WeakMap(), Er = new WeakMap(), ui = new WeakMap();
function xu(t) {
  qt === null && Rl(), ds(() => {
    const e = mi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Dr(t, e, n = !1) {
  Z && pi();
  var r = new wu(t), i = n ? Xn : 0;
  function s(a, o) {
    if (Z) {
      const f = ma(t);
      var l;
      if (f === is ? l = 0 : f === fi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Qr();
        Pt(u), r.anchor = u, ze(!1), r.ensure(a, o), ze(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  vs(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Ni(t, e) {
  return e;
}
function bu(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    wn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Ki(ci(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      Ha(f), f.append(u), t.items.clear();
    }
    Ki(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Ki(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Rt(t[n], e);
}
var zs;
function Si(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  Z && pi();
  var l = null, u = /* @__PURE__ */ Pa(() => {
    var m = n();
    return ha(m) ? m : m == null ? [] : ci(m);
  }), f, h = !0;
  function c() {
    g.fallback = l, $u(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & Ze) === 0 ? _s(l) : (l.f ^= Ze, lr(l, null, a)) : wn(l, () => {
      l = null;
    }));
  }
  var v = vs(() => {
    f = /** @type {V[]} */
    w(u);
    var m = f.length;
    let b = !1;
    if (Z) {
      var A = ma(a) === fi;
      A !== (m === 0) && (a = Qr(), Pt(a), ze(!1), b = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      Y
    ), D = Ya(), E = 0; E < m; E += 1) {
      Z && H.nodeType === tr && /** @type {Comment} */
      H.data === ss && (a = /** @type {Comment} */
      H, b = !0, ze(!1));
      var j = f[E], it = r(j, E), W = h ? null : o.get(it);
      W ? (W.v && Wn(W.v, j), W.i && Wn(W.i, E), D && T.unskip_effect(W.e)) : (W = Au(
        o,
        h ? a : zs ?? (zs = te()),
        j,
        it,
        E,
        i,
        e,
        n
      ), h || (W.e.f |= Ze), o.set(it, W)), S.add(it);
    }
    if (m === 0 && s && !l && (h ? l = Zt(() => s(a)) : (l = Zt(() => s(zs ?? (zs = te()))), l.f |= Ze)), m > S.size && Cl(), Z && m > 0 && Pt(Qr()), !h)
      if (D) {
        for (const [nt, ut] of o)
          S.has(nt) || T.skip_effect(ut.e);
        T.oncommit(c), T.ondiscard(() => {
        });
      } else
        c();
    b && ze(!0), w(u);
  }), g = { effect: v, items: o, outrogroups: null, fallback: l };
  h = !1, Z && (a = H);
}
function ar(t) {
  for (; t !== null && (t.f & pe) === 0; )
    t = t.next;
  return t;
}
function $u(t, e, n, r, i) {
  var W;
  var s = e.length, a = t.items, o = ar(t.effect.first), l, u = null, f = [], h = [], c, v, g, m;
  for (m = 0; m < s; m += 1) {
    if (c = e[m], v = i(c, m), g = /** @type {EachItem} */
    a.get(v).e, t.outrogroups !== null)
      for (const nt of t.outrogroups)
        nt.pending.delete(g), nt.done.delete(g);
    if ((g.f & Ze) !== 0)
      if (g.f ^= Ze, g === o)
        lr(g, null, n);
      else {
        var b = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), We(t, u, g), We(t, g, b), lr(g, b, n), u = g, f = [], h = [], o = ar(u.next);
        continue;
      }
    if ((g.f & Lt) !== 0 && _s(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var A = h[0], S;
          u = A.prev;
          var T = f[0], D = f[f.length - 1];
          for (S = 0; S < f.length; S += 1)
            lr(f[S], A, n);
          for (S = 0; S < h.length; S += 1)
            l.delete(h[S]);
          We(t, T.prev, D.next), We(t, u, T), We(t, D, A), o = A, u = D, m -= 1, f = [], h = [];
        } else
          l.delete(g), lr(g, o, n), We(t, g.prev, g.next), We(t, g, u === null ? t.effect.first : u.next), We(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = ar(o.next);
      if (o === null)
        continue;
    }
    (g.f & Ze) === 0 && f.push(g), u = g, o = ar(g.next);
  }
  if (t.outrogroups !== null) {
    for (const nt of t.outrogroups)
      nt.pending.size === 0 && (Ki(ci(nt.done)), (W = t.outrogroups) == null || W.delete(nt));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var E = [];
    if (l !== void 0)
      for (g of l)
        (g.f & Lt) === 0 && E.push(g);
    for (; o !== null; )
      (o.f & Lt) === 0 && o !== t.fallback && E.push(o), o = ar(o.next);
    var j = E.length;
    if (j > 0) {
      var it = null;
      bu(t, E, it);
    }
  }
}
function Au(t, e, n, r, i, s, a, o) {
  var l = (a & ul) !== 0 ? (a & cl) === 0 ? /* @__PURE__ */ Fa(n, !1, !1) : An(n) : null, u = (a & fl) !== 0 ? An(i) : null;
  return {
    v: l,
    i: u,
    e: Zt(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function lr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & Ze) === 0 ? (
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
function We(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function uo(t, e) {
  Xa(() => {
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
      const i = cs("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function Hs(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Eu(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += Hs(r)), i && (n += Hs(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function ki(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function Ys(t, e, n, r) {
  var i = t.__style;
  if (Z || i !== e) {
    var s = Eu(e, r);
    (!Z || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (ki(t, n == null ? void 0 : n[0], r[0]), ki(t, n == null ? void 0 : n[1], r[1], "important")) : ki(t, n, r));
  return r;
}
function Bs(t, e) {
  return t === e || (t == null ? void 0 : t[hr]) === e;
}
function Br(t = {}, e, n, r) {
  return Xa(() => {
    var i, s;
    return ps(() => {
      i = s, s = [], mi(() => {
        t !== n(...s) && (e(t, ...s), i && Bs(n(...i), t) && e(null, ...i));
      });
    }), () => {
      yn(() => {
        s && Bs(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Ir = !1;
function Ru(t) {
  var e = Ir;
  try {
    return Ir = !1, [t(), Ir];
  } finally {
    Ir = e;
  }
}
function ue(t, e, n, r) {
  var S;
  var i = (n & pl) !== 0, s = (n & vl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? mi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = hr in t || _a in t;
    u = ((S = mn(t, e)) == null ? void 0 : S.set) ?? (f && e in t ? (T) => t[e] = T : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Ru(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (Ol(), u(h)));
  var v;
  if (v = () => {
    var T = (
      /** @type {V} */
      t[e]
    );
    return T === void 0 ? l() : (o = !0, T);
  }, (n & dl) === 0)
    return v;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(T, D) {
        return arguments.length > 0 ? ((!D || g || c) && u(D ? v() : T), T) : v();
      })
    );
  }
  var m = !1, b = ((n & hl) !== 0 ? gi : Pa)(() => (m = !1, v()));
  i && w(b);
  var A = (
    /** @type {Effect} */
    X
  );
  return (
    /** @type {() => V} */
    (function(T, D) {
      if (arguments.length > 0) {
        const E = D ? w(b) : i ? un(T) : T;
        return J(b, E), m = !0, a !== void 0 && (a = E), T;
      }
      return tn && m || (A.f & He) !== 0 ? b.v : w(b);
    })
  );
}
function Tu(t) {
  return new Cu(t);
}
var Ve, Wt;
class Cu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    L(this, Ve);
    /** @type {Record<string, any>} */
    L(this, Wt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Fa(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return w(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _a ? !0 : (w(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return J(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    O(this, Wt, (e.hydrate ? mu : oo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && jt(), O(this, Ve, i.$$events);
    for (const a of Object.keys(d(this, Wt)))
      a === "$set" || a === "$destroy" || a === "$on" || Jr(this, a, {
        get() {
          return d(this, Wt)[a];
        },
        /** @param {any} value */
        set(o) {
          d(this, Wt)[a] = o;
        },
        enumerable: !0
      });
    d(this, Wt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, d(this, Wt).$destroy = () => {
      yu(d(this, Wt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    d(this, Wt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    d(this, Ve)[e] = d(this, Ve)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return d(this, Ve)[e].push(r), () => {
      d(this, Ve)[e] = d(this, Ve)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    d(this, Wt).$destroy();
  }
}
Ve = new WeakMap(), Wt = new WeakMap();
let fo;
typeof HTMLElement == "function" && (fo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    ot(this, "$$ctor");
    /** Slots */
    ot(this, "$$s");
    /** @type {any} The Svelte component instance */
    ot(this, "$$c");
    /** Whether or not the custom element is connected */
    ot(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ot(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ot(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ot(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ot(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ot(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ot(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ot(this, "$$shadowRoot", null);
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
          const o = cs("slot");
          s !== "default" && (o.name = s), be(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Nu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = Ur(a, s.value, this.$$p_d, "toProp"));
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
      }), this.$$me = su(() => {
        ps(() => {
          var s;
          this.$$r = !0;
          for (const a of Zr(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Ur(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ur(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return Zr(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function Ur(t, e, n, r) {
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
function Nu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function co(t, e, n, r, i, s) {
  let a = class extends fo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Zr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Zr(e).forEach((o) => {
    Jr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = Ur(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = mn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Jr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Su = { value: () => {
} };
function ho() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xr(n);
}
function Xr(t) {
  this._ = t;
}
function ku(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xr.prototype = ho.prototype = {
  constructor: Xr,
  on: function(t, e) {
    var n = this._, r = ku(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Mu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = Us(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Us(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Xr(t);
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
function Mu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Us(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Su, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Wi = "http://www.w3.org/1999/xhtml";
const Xs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function yi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Xs.hasOwnProperty(e) ? { space: Xs[e], local: t } : t;
}
function Pu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Wi && e.documentElement.namespaceURI === Wi ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ou(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function po(t) {
  var e = yi(t);
  return (e.local ? Ou : Pu)(e);
}
function Du() {
}
function ms(t) {
  return t == null ? Du : function() {
    return this.querySelector(t);
  };
}
function Iu(t) {
  typeof t != "function" && (t = ms(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new Vt(r, this._parents);
}
function Fu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Lu() {
  return [];
}
function vo(t) {
  return t == null ? Lu : function() {
    return this.querySelectorAll(t);
  };
}
function qu(t) {
  return function() {
    return Fu(t.apply(this, arguments));
  };
}
function Vu(t) {
  typeof t == "function" ? t = qu(t) : t = vo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new Vt(r, i);
}
function go(t) {
  return function() {
    return this.matches(t);
  };
}
function _o(t) {
  return function(e) {
    return e.matches(t);
  };
}
var zu = Array.prototype.find;
function Hu(t) {
  return function() {
    return zu.call(this.children, t);
  };
}
function Yu() {
  return this.firstElementChild;
}
function Bu(t) {
  return this.select(t == null ? Yu : Hu(typeof t == "function" ? t : _o(t)));
}
var Uu = Array.prototype.filter;
function Xu() {
  return Array.from(this.children);
}
function Gu(t) {
  return function() {
    return Uu.call(this.children, t);
  };
}
function Ku(t) {
  return this.selectAll(t == null ? Xu : Gu(typeof t == "function" ? t : _o(t)));
}
function Wu(t) {
  typeof t != "function" && (t = go(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Vt(r, this._parents);
}
function mo(t) {
  return new Array(t.length);
}
function ju() {
  return new Vt(this._enter || this._groups.map(mo), this._parents);
}
function ti(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ti.prototype = {
  constructor: ti,
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
function Zu(t) {
  return function() {
    return t;
  };
}
function Ju(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new ti(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function Qu(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), v;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = v = a.call(l, l.__data__, o, e) + "", u.has(v) ? i[o] = l : u.set(v, l));
  for (o = 0; o < h; ++o)
    v = a.call(t, s[o], o, s) + "", (l = u.get(v)) ? (r[o] = l, l.__data__ = s[o], u.delete(v)) : n[o] = new ti(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function tf(t) {
  return t.__data__;
}
function ef(t, e) {
  if (!arguments.length) return Array.from(this, tf);
  var n = e ? Qu : Ju, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Zu(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, v = nf(t.call(f, f && f.__data__, u, r)), g = v.length, m = o[u] = new Array(g), b = a[u] = new Array(g), A = l[u] = new Array(c);
    n(f, h, m, b, A, v, e);
    for (var S = 0, T = 0, D, E; S < g; ++S)
      if (D = m[S]) {
        for (S >= T && (T = S + 1); !(E = b[T]) && ++T < g; ) ;
        D._next = E || null;
      }
  }
  return a = new Vt(a, r), a._enter = o, a._exit = l, a;
}
function nf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function rf() {
  return new Vt(this._exit || this._groups.map(mo), this._parents);
}
function sf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function af(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), v, g = 0; g < h; ++g)
      (v = u[g] || f[g]) && (c[g] = v);
  for (; l < i; ++l)
    o[l] = n[l];
  return new Vt(o, this._parents);
}
function of() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function lf(t) {
  t || (t = uf);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new Vt(i, this._parents).order();
}
function uf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ff() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function cf() {
  return Array.from(this);
}
function hf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function df() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function pf() {
  return !this.node();
}
function vf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function gf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function _f(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function mf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function yf(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function wf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function xf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function bf(t, e) {
  var n = yi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? _f : gf : typeof e == "function" ? n.local ? xf : wf : n.local ? yf : mf)(n, e));
}
function yo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function $f(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Af(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ef(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Rf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? $f : typeof e == "function" ? Ef : Af)(t, e, n ?? "")) : Zn(this.node(), t);
}
function Zn(t, e) {
  return t.style.getPropertyValue(e) || yo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Tf(t) {
  return function() {
    delete this[t];
  };
}
function Cf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Nf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Sf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Tf : typeof e == "function" ? Nf : Cf)(t, e)) : this.node()[t];
}
function wo(t) {
  return t.trim().split(/^|\s+/);
}
function ys(t) {
  return t.classList || new xo(t);
}
function xo(t) {
  this._node = t, this._names = wo(t.getAttribute("class") || "");
}
xo.prototype = {
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
function bo(t, e) {
  for (var n = ys(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function $o(t, e) {
  for (var n = ys(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function kf(t) {
  return function() {
    bo(this, t);
  };
}
function Mf(t) {
  return function() {
    $o(this, t);
  };
}
function Pf(t, e) {
  return function() {
    (e.apply(this, arguments) ? bo : $o)(this, t);
  };
}
function Of(t, e) {
  var n = wo(t + "");
  if (arguments.length < 2) {
    for (var r = ys(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Pf : e ? kf : Mf)(n, e));
}
function Df() {
  this.textContent = "";
}
function If(t) {
  return function() {
    this.textContent = t;
  };
}
function Ff(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Lf(t) {
  return arguments.length ? this.each(t == null ? Df : (typeof t == "function" ? Ff : If)(t)) : this.node().textContent;
}
function qf() {
  this.innerHTML = "";
}
function Vf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function zf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Hf(t) {
  return arguments.length ? this.each(t == null ? qf : (typeof t == "function" ? zf : Vf)(t)) : this.node().innerHTML;
}
function Yf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bf() {
  return this.each(Yf);
}
function Uf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xf() {
  return this.each(Uf);
}
function Gf(t) {
  var e = typeof t == "function" ? t : po(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Kf() {
  return null;
}
function Wf(t, e) {
  var n = typeof t == "function" ? t : po(t), r = e == null ? Kf : typeof e == "function" ? e : ms(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jf() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Zf() {
  return this.each(jf);
}
function Jf() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Qf() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function tc(t) {
  return this.select(t ? Qf : Jf);
}
function ec(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function nc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function rc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ic(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function sc(t, e, n) {
  return function() {
    var r = this.__on, i, s = nc(e);
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
function ac(t, e, n) {
  var r = rc(t + ""), i, s = r.length, a;
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
  for (o = e ? sc : ic, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Ao(t, e, n) {
  var r = yo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function oc(t, e) {
  return function() {
    return Ao(this, t, e);
  };
}
function lc(t, e) {
  return function() {
    return Ao(this, t, e.apply(this, arguments));
  };
}
function uc(t, e) {
  return this.each((typeof e == "function" ? lc : oc)(t, e));
}
function* fc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Eo = [null];
function Vt(t, e) {
  this._groups = t, this._parents = e;
}
function nr() {
  return new Vt([[document.documentElement]], Eo);
}
function cc() {
  return this;
}
Vt.prototype = nr.prototype = {
  constructor: Vt,
  select: Iu,
  selectAll: Vu,
  selectChild: Bu,
  selectChildren: Ku,
  filter: Wu,
  data: ef,
  enter: ju,
  exit: rf,
  join: sf,
  merge: af,
  selection: cc,
  order: of,
  sort: lf,
  call: ff,
  nodes: cf,
  node: hf,
  size: df,
  empty: pf,
  each: vf,
  attr: bf,
  style: Rf,
  property: Sf,
  classed: Of,
  text: Lf,
  html: Hf,
  raise: Bf,
  lower: Xf,
  append: Gf,
  insert: Wf,
  remove: Zf,
  clone: tc,
  datum: ec,
  on: ac,
  dispatch: uc,
  [Symbol.iterator]: fc
};
function gt(t) {
  return typeof t == "string" ? new Vt([[document.querySelector(t)]], [document.documentElement]) : new Vt([[t]], Eo);
}
function ws(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ro(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Cr() {
}
var _r = 0.7, ei = 1 / _r, In = "\\s*([+-]?\\d+)\\s*", mr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hc = /^#([0-9a-f]{3,8})$/, dc = new RegExp(`^rgb\\(${In},${In},${In}\\)$`), pc = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`), vc = new RegExp(`^rgba\\(${In},${In},${In},${mr}\\)$`), gc = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${mr}\\)$`), _c = new RegExp(`^hsl\\(${mr},${Ce},${Ce}\\)$`), mc = new RegExp(`^hsla\\(${mr},${Ce},${Ce},${mr}\\)$`), Gs = {
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
ws(Cr, Tn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ks,
  // Deprecated! Use color.formatHex.
  formatHex: Ks,
  formatHex8: yc,
  formatHsl: wc,
  formatRgb: Ws,
  toString: Ws
});
function Ks() {
  return this.rgb().formatHex();
}
function yc() {
  return this.rgb().formatHex8();
}
function wc() {
  return To(this).formatHsl();
}
function Ws() {
  return this.rgb().formatRgb();
}
function Tn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = hc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? js(e) : n === 3 ? new Mt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Fr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Fr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = dc.exec(t)) ? new Mt(e[1], e[2], e[3], 1) : (e = pc.exec(t)) ? new Mt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = vc.exec(t)) ? Fr(e[1], e[2], e[3], e[4]) : (e = gc.exec(t)) ? Fr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = _c.exec(t)) ? Qs(e[1], e[2] / 100, e[3] / 100, 1) : (e = mc.exec(t)) ? Qs(e[1], e[2] / 100, e[3] / 100, e[4]) : Gs.hasOwnProperty(t) ? js(Gs[t]) : t === "transparent" ? new Mt(NaN, NaN, NaN, 0) : null;
}
function js(t) {
  return new Mt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Fr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Mt(t, e, n, r);
}
function xc(t) {
  return t instanceof Cr || (t = Tn(t)), t ? (t = t.rgb(), new Mt(t.r, t.g, t.b, t.opacity)) : new Mt();
}
function ji(t, e, n, r) {
  return arguments.length === 1 ? xc(t) : new Mt(t, e, n, r ?? 1);
}
function Mt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ws(Mt, ji, Ro(Cr, {
  brighter(t) {
    return t = t == null ? ei : Math.pow(ei, t), new Mt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new Mt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Mt(bn(this.r), bn(this.g), bn(this.b), ni(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Zs,
  // Deprecated! Use color.formatHex.
  formatHex: Zs,
  formatHex8: bc,
  formatRgb: Js,
  toString: Js
}));
function Zs() {
  return `#${cn(this.r)}${cn(this.g)}${cn(this.b)}`;
}
function bc() {
  return `#${cn(this.r)}${cn(this.g)}${cn(this.b)}${cn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Js() {
  const t = ni(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${bn(this.r)}, ${bn(this.g)}, ${bn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ni(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function bn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function cn(t) {
  return t = bn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Qs(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new fe(t, e, n, r);
}
function To(t) {
  if (t instanceof fe) return new fe(t.h, t.s, t.l, t.opacity);
  if (t instanceof Cr || (t = Tn(t)), !t) return new fe();
  if (t instanceof fe) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new fe(a, o, l, t.opacity);
}
function $c(t, e, n, r) {
  return arguments.length === 1 ? To(t) : new fe(t, e, n, r ?? 1);
}
function fe(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ws(fe, $c, Ro(Cr, {
  brighter(t) {
    return t = t == null ? ei : Math.pow(ei, t), new fe(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new fe(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Mt(
      Mi(t >= 240 ? t - 240 : t + 120, i, r),
      Mi(t, i, r),
      Mi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new fe(ta(this.h), Lr(this.s), Lr(this.l), ni(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ni(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ta(this.h)}, ${Lr(this.s) * 100}%, ${Lr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ta(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Lr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Mi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const xs = (t) => () => t;
function Ac(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ec(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Rc(t) {
  return (t = +t) == 1 ? Co : function(e, n) {
    return n - e ? Ec(e, n, t) : xs(isNaN(e) ? n : e);
  };
}
function Co(t, e) {
  var n = e - t;
  return n ? Ac(t, n) : xs(isNaN(t) ? e : t);
}
const ri = (function t(e) {
  var n = Rc(e);
  function r(i, s) {
    var a = n((i = ji(i)).r, (s = ji(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Co(i.opacity, s.opacity);
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
function Cc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Nc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = On(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Sc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Te(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function kc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = On(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Zi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pi = new RegExp(Zi.source, "g");
function Mc(t) {
  return function() {
    return t;
  };
}
function Pc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function No(t, e) {
  var n = Zi.lastIndex = Pi.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = Zi.exec(t)) && (i = Pi.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Te(r, i) })), n = Pi.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Pc(l[0].x) : Mc(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function On(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? xs(e) : (n === "number" ? Te : n === "string" ? (r = Tn(e)) ? (e = r, ri) : No : e instanceof Tn ? ri : e instanceof Date ? Sc : Cc(e) ? Tc : Array.isArray(e) ? Nc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? kc : Te)(t, e);
}
var ea = 180 / Math.PI, Ji = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function So(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * ea,
    skewX: Math.atan(l) * ea,
    scaleX: a,
    scaleY: o
  };
}
var qr;
function Oc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ji : So(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Dc(t) {
  return t == null || (qr || (qr = document.createElementNS("http://www.w3.org/2000/svg", "g")), qr.setAttribute("transform", t), !(t = qr.transform.baseVal.consolidate())) ? Ji : (t = t.matrix, So(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ko(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, v, g) {
    if (u !== h || f !== c) {
      var m = v.push("translate(", null, e, null, n);
      g.push({ i: m - 4, x: Te(u, h) }, { i: m - 2, x: Te(f, c) });
    } else (h || c) && v.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Te(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Te(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, v, g) {
    if (u !== h || f !== c) {
      var m = v.push(i(v) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Te(u, h) }, { i: m - 2, x: Te(f, c) });
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
var Ic = ko(Oc, "px, ", "px)", "deg)"), Fc = ko(Dc, ", ", ")", ")"), Jn = 0, ur = 0, or = 0, Mo = 1e3, ii, fr, si = 0, Cn = 0, wi = 0, yr = typeof performance == "object" && performance.now ? performance : Date, Po = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function bs() {
  return Cn || (Po(Lc), Cn = yr.now() + wi);
}
function Lc() {
  Cn = 0;
}
function ai() {
  this._call = this._time = this._next = null;
}
ai.prototype = Oo.prototype = {
  constructor: ai,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? bs() : +n) + (e == null ? 0 : +e), !this._next && fr !== this && (fr ? fr._next = this : ii = this, fr = this), this._call = t, this._time = n, Qi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qi());
  }
};
function Oo(t, e, n) {
  var r = new ai();
  return r.restart(t, e, n), r;
}
function qc() {
  bs(), ++Jn;
  for (var t = ii, e; t; )
    (e = Cn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Jn;
}
function na() {
  Cn = (si = yr.now()) + wi, Jn = ur = 0;
  try {
    qc();
  } finally {
    Jn = 0, zc(), Cn = 0;
  }
}
function Vc() {
  var t = yr.now(), e = t - si;
  e > Mo && (wi -= e, si = t);
}
function zc() {
  for (var t, e = ii, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ii = n);
  fr = t, Qi(r);
}
function Qi(t) {
  if (!Jn) {
    ur && (ur = clearTimeout(ur));
    var e = t - Cn;
    e > 24 ? (t < 1 / 0 && (ur = setTimeout(na, t - yr.now() - wi)), or && (or = clearInterval(or))) : (or || (si = yr.now(), or = setInterval(Vc, Mo)), Jn = 1, Po(na));
  }
}
function ra(t, e, n) {
  var r = new ai();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Hc = ho("start", "end", "cancel", "interrupt"), Yc = [], Do = 0, ia = 1, ts = 2, Gr = 3, sa = 4, es = 5, Kr = 6;
function xi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Bc(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Hc,
    tween: Yc,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Do
  });
}
function $s(t, e) {
  var n = ve(t, e);
  if (n.state > Do) throw new Error("too late; already scheduled");
  return n;
}
function Pe(t, e) {
  var n = ve(t, e);
  if (n.state > Gr) throw new Error("too late; already running");
  return n;
}
function ve(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Bc(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Oo(s, 0, n.time);
  function s(u) {
    n.state = ia, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, v;
    if (n.state !== ia) return l();
    for (f in r)
      if (v = r[f], v.name === n.name) {
        if (v.state === Gr) return ra(a);
        v.state === sa ? (v.state = Kr, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[f]) : +f < e && (v.state = Kr, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[f]);
      }
    if (ra(function() {
      n.state === Gr && (n.state = sa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = ts, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ts) {
      for (n.state = Gr, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (v = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = v);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = es, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === es && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Kr, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Uc(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > ts && r.state < es, r.state = Kr, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Xc(t) {
  return this.each(function() {
    Uc(this, t);
  });
}
function Gc(t, e) {
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
function Kc(t, e, n) {
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
function Wc(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ve(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Gc : Kc)(n, t, e));
}
function As(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Pe(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ve(i, r).value[e];
  };
}
function Io(t, e) {
  var n;
  return (typeof e == "number" ? Te : e instanceof Tn ? ri : (n = Tn(e)) ? (e = n, ri) : No)(t, e);
}
function jc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jc(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Qc(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function th(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function eh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function nh(t, e) {
  var n = yi(t), r = n === "transform" ? Fc : Io;
  return this.attrTween(t, typeof e == "function" ? (n.local ? eh : th)(n, r, As(this, "attr." + t, e)) : e == null ? (n.local ? Zc : jc)(n) : (n.local ? Qc : Jc)(n, r, e));
}
function rh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function ih(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function sh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && ih(t, s)), n;
  }
  return i._value = e, i;
}
function ah(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && rh(t, s)), n;
  }
  return i._value = e, i;
}
function oh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = yi(t);
  return this.tween(n, (r.local ? sh : ah)(r, e));
}
function lh(t, e) {
  return function() {
    $s(this, t).delay = +e.apply(this, arguments);
  };
}
function uh(t, e) {
  return e = +e, function() {
    $s(this, t).delay = e;
  };
}
function fh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? lh : uh)(e, t)) : ve(this.node(), e).delay;
}
function ch(t, e) {
  return function() {
    Pe(this, t).duration = +e.apply(this, arguments);
  };
}
function hh(t, e) {
  return e = +e, function() {
    Pe(this, t).duration = e;
  };
}
function dh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ch : hh)(e, t)) : ve(this.node(), e).duration;
}
function ph(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Pe(this, t).ease = e;
  };
}
function vh(t) {
  var e = this._id;
  return arguments.length ? this.each(ph(e, t)) : ve(this.node(), e).ease;
}
function gh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Pe(this, t).ease = n;
  };
}
function _h(t) {
  if (typeof t != "function") throw new Error();
  return this.each(gh(this._id, t));
}
function mh(t) {
  typeof t != "function" && (t = go(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Be(r, this._parents, this._name, this._id);
}
function yh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, v = 0; v < f; ++v)
      (c = l[v] || u[v]) && (h[v] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new Be(a, this._parents, this._name, this._id);
}
function wh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function xh(t, e, n) {
  var r, i, s = wh(e) ? $s : Pe;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function bh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ve(this.node(), n).on.on(t) : this.each(xh(n, t, e));
}
function $h(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ah() {
  return this.on("end.remove", $h(this._id));
}
function Eh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ms(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, xi(u[c], e, n, c, u, ve(f, n)));
  return new Be(s, this._parents, e, n);
}
function Rh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = vo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), v, g = ve(f, n), m = 0, b = c.length; m < b; ++m)
          (v = c[m]) && xi(v, e, n, m, c, g);
        s.push(c), a.push(f);
      }
  return new Be(s, a, e, n);
}
var Th = nr.prototype.constructor;
function Ch() {
  return new Th(this._groups, this._parents);
}
function Nh(t, e) {
  var n, r, i;
  return function() {
    var s = Zn(this, t), a = (this.style.removeProperty(t), Zn(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function Fo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Sh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = Zn(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function kh(t, e, n) {
  var r, i, s;
  return function() {
    var a = Zn(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), Zn(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Mh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Pe(this, t), u = l.on, f = l.value[s] == null ? o || (o = Fo(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Ph(t, e, n) {
  var r = (t += "") == "transform" ? Ic : Io;
  return e == null ? this.styleTween(t, Nh(t, r)).on("end.style." + t, Fo(t)) : typeof e == "function" ? this.styleTween(t, kh(t, r, As(this, "style." + t, e))).each(Mh(this._id, t)) : this.styleTween(t, Sh(t, r, e), n).on("end.style." + t, null);
}
function Oh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Dh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Oh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ih(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Dh(t, e, n ?? ""));
}
function Fh(t) {
  return function() {
    this.textContent = t;
  };
}
function Lh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function qh(t) {
  return this.tween("text", typeof t == "function" ? Lh(As(this, "text", t)) : Fh(t == null ? "" : t + ""));
}
function Vh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function zh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Vh(i)), e;
  }
  return r._value = t, r;
}
function Hh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, zh(t));
}
function Yh() {
  for (var t = this._name, e = this._id, n = Lo(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = ve(l, e);
        xi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Be(r, this._parents, t, n);
}
function Bh() {
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
var Uh = 0;
function Be(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Wr(t) {
  return nr().transition(t);
}
function Lo() {
  return ++Uh;
}
var Oe = nr.prototype;
Be.prototype = Wr.prototype = {
  constructor: Be,
  select: Eh,
  selectAll: Rh,
  selectChild: Oe.selectChild,
  selectChildren: Oe.selectChildren,
  filter: mh,
  merge: yh,
  selection: Ch,
  transition: Yh,
  call: Oe.call,
  nodes: Oe.nodes,
  node: Oe.node,
  size: Oe.size,
  empty: Oe.empty,
  each: Oe.each,
  on: bh,
  attr: nh,
  attrTween: oh,
  style: Ph,
  styleTween: Ih,
  text: qh,
  textTween: Hh,
  remove: Ah,
  tween: Wc,
  delay: fh,
  duration: dh,
  ease: vh,
  easeVarying: _h,
  end: Bh,
  [Symbol.iterator]: Oe[Symbol.iterator]
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
function Wh(t) {
  var e, n;
  t instanceof Be ? (e = t._id, t = t._name) : (e = Lo(), (n = Gh).time = bs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && xi(l, t, e, u, a, n || Kh(l, e));
  return new Be(r, this._parents, t, e);
}
nr.prototype.interrupt = Xc;
nr.prototype.transition = Wh;
const ns = Math.PI, rs = 2 * ns, an = 1e-6, jh = rs - an;
function qo(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Zh(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return qo;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Jh {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? qo : Zh(e);
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
    else if (c > an) if (!(Math.abs(h * l - u * f) > an) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let v = r - a, g = i - o, m = l * l + u * u, b = v * v + g * g, A = Math.sqrt(m), S = Math.sqrt(c), T = s * Math.tan((ns - Math.acos((m + c - b) / (2 * A * S))) / 2), D = T / S, E = T / A;
      Math.abs(D - 1) > an && this._append`L${e + D * f},${n + D * h}`, this._append`A${s},${s},0,0,${+(h * v > f * g)},${this._x1 = e + E * l},${this._y1 = n + E * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > an || Math.abs(this._y1 - f) > an) && this._append`L${u},${f}`, r && (c < 0 && (c = c % rs + rs), c > jh ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > an && this._append`A${r},${r},0,${+(c >= ns)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Qh(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const td = Qh("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Et(t) {
  return function() {
    return t;
  };
}
const aa = Math.abs, $t = Math.atan2, sn = Math.cos, ed = Math.max, Oi = Math.min, xe = Math.sin, Dn = Math.sqrt, Ct = 1e-12, wr = Math.PI, oi = wr / 2, jr = 2 * wr;
function nd(t) {
  return t > 1 ? 0 : t < -1 ? wr : Math.acos(t);
}
function oa(t) {
  return t >= 1 ? oi : t <= -1 ? -oi : Math.asin(t);
}
function rd(t) {
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
  }, () => new Jh(e);
}
function id(t) {
  return t.innerRadius;
}
function sd(t) {
  return t.outerRadius;
}
function ad(t) {
  return t.startAngle;
}
function od(t) {
  return t.endAngle;
}
function ld(t) {
  return t && t.padAngle;
}
function ud(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Ct))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function Vr(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Dn(o * o + l * l), f = u * l, h = -u * o, c = t + f, v = e + h, g = n + f, m = r + h, b = (c + g) / 2, A = (v + m) / 2, S = g - c, T = m - v, D = S * S + T * T, E = i - s, j = c * m - g * v, it = (T < 0 ? -1 : 1) * Dn(ed(0, E * E * D - j * j)), W = (j * T - S * it) / D, nt = (-j * S - T * it) / D, ut = (j * T + S * it) / D, ft = (-j * S + T * it) / D, G = W - b, x = nt - A, P = ut - b, zt = ft - A;
  return G * G + x * x > P * P + zt * zt && (W = ut, nt = ft), {
    cx: W,
    cy: nt,
    x01: -f,
    y01: -h,
    x11: W * (i / E - 1),
    y11: nt * (i / E - 1)
  };
}
function De() {
  var t = id, e = sd, n = Et(0), r = null, i = ad, s = od, a = ld, o = null, l = rd(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), v = +e.apply(this, arguments), g = i.apply(this, arguments) - oi, m = s.apply(this, arguments) - oi, b = aa(m - g), A = m > g;
    if (o || (o = f = l()), v < c && (h = v, v = c, c = h), !(v > Ct)) o.moveTo(0, 0);
    else if (b > jr - Ct)
      o.moveTo(v * sn(g), v * xe(g)), o.arc(0, 0, v, g, m, !A), c > Ct && (o.moveTo(c * sn(m), c * xe(m)), o.arc(0, 0, c, m, g, A));
    else {
      var S = g, T = m, D = g, E = m, j = b, it = b, W = a.apply(this, arguments) / 2, nt = W > Ct && (r ? +r.apply(this, arguments) : Dn(c * c + v * v)), ut = Oi(aa(v - c) / 2, +n.apply(this, arguments)), ft = ut, G = ut, x, P;
      if (nt > Ct) {
        var zt = oa(nt / c * xe(W)), tt = oa(nt / v * xe(W));
        (j -= zt * 2) > Ct ? (zt *= A ? 1 : -1, D += zt, E -= zt) : (j = 0, D = E = (g + m) / 2), (it -= tt * 2) > Ct ? (tt *= A ? 1 : -1, S += tt, T -= tt) : (it = 0, S = T = (g + m) / 2);
      }
      var Ht = v * sn(S), Yt = v * xe(S), ne = c * sn(E), ge = c * xe(E);
      if (ut > Ct) {
        var Tt = v * sn(T), _e = v * xe(T), me = c * sn(D), Xe = c * xe(D), Ot;
        if (b < wr)
          if (Ot = ud(Ht, Yt, me, Xe, Tt, _e, ne, ge)) {
            var nn = Ht - Ot[0], rn = Yt - Ot[1], Ge = Tt - Ot[0], Bt = _e - Ot[1], ye = 1 / xe(nd((nn * Ge + rn * Bt) / (Dn(nn * nn + rn * rn) * Dn(Ge * Ge + Bt * Bt))) / 2), Sn = Dn(Ot[0] * Ot[0] + Ot[1] * Ot[1]);
            ft = Oi(ut, (c - Sn) / (ye - 1)), G = Oi(ut, (v - Sn) / (ye + 1));
          } else
            ft = G = 0;
      }
      it > Ct ? G > Ct ? (x = Vr(me, Xe, Ht, Yt, v, G, A), P = Vr(Tt, _e, ne, ge, v, G, A), o.moveTo(x.cx + x.x01, x.cy + x.y01), G < ut ? o.arc(x.cx, x.cy, G, $t(x.y01, x.x01), $t(P.y01, P.x01), !A) : (o.arc(x.cx, x.cy, G, $t(x.y01, x.x01), $t(x.y11, x.x11), !A), o.arc(0, 0, v, $t(x.cy + x.y11, x.cx + x.x11), $t(P.cy + P.y11, P.cx + P.x11), !A), o.arc(P.cx, P.cy, G, $t(P.y11, P.x11), $t(P.y01, P.x01), !A))) : (o.moveTo(Ht, Yt), o.arc(0, 0, v, S, T, !A)) : o.moveTo(Ht, Yt), !(c > Ct) || !(j > Ct) ? o.lineTo(ne, ge) : ft > Ct ? (x = Vr(ne, ge, Tt, _e, c, -ft, A), P = Vr(Ht, Yt, me, Xe, c, -ft, A), o.lineTo(x.cx + x.x01, x.cy + x.y01), ft < ut ? o.arc(x.cx, x.cy, ft, $t(x.y01, x.x01), $t(P.y01, P.x01), !A) : (o.arc(x.cx, x.cy, ft, $t(x.y01, x.x01), $t(x.y11, x.x11), !A), o.arc(0, 0, c, $t(x.cy + x.y11, x.cx + x.x11), $t(P.cy + P.y11, P.cx + P.x11), A), o.arc(P.cx, P.cy, ft, $t(P.y11, P.x11), $t(P.y01, P.x01), !A))) : o.arc(0, 0, c, E, D, A);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - wr / 2;
    return [sn(h) * f, xe(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Et(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Et(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Et(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Et(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Et(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Et(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Et(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function fd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function cd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hd(t) {
  return t;
}
function la() {
  var t = hd, e = cd, n = null, r = Et(0), i = Et(jr), s = Et(0);
  function a(o) {
    var l, u = (o = fd(o)).length, f, h, c = 0, v = new Array(u), g = new Array(u), m = +r.apply(this, arguments), b = Math.min(jr, Math.max(-jr, i.apply(this, arguments) - m)), A, S = Math.min(Math.abs(b) / u, s.apply(this, arguments)), T = S * (b < 0 ? -1 : 1), D;
    for (l = 0; l < u; ++l)
      (D = g[v[l] = l] = +t(o[l], l, o)) > 0 && (c += D);
    for (e != null ? v.sort(function(E, j) {
      return e(g[E], g[j]);
    }) : n != null && v.sort(function(E, j) {
      return n(o[E], o[j]);
    }), l = 0, h = c ? (b - u * T) / c : 0; l < u; ++l, m = A)
      f = v[l], D = g[f], A = m + (D > 0 ? D * h : 0) + T, g[f] = {
        data: o[f],
        index: l,
        value: D,
        startAngle: m,
        endAngle: A,
        padAngle: S
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Et(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Et(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Et(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Et(+o), a) : s;
  }, a;
}
function cr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
cr.prototype = {
  constructor: cr,
  scale: function(t) {
    return t === 1 ? this : new cr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new cr(this.k, this.x + this.k * t, this.y + this.k * e);
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
cr.prototype;
var dd = /* @__PURE__ */ vu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const pd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function Vo(t, e) {
  os(e, !0), uo(t, pd);
  let n = ue(e, "jsonData", 7), r = ue(e, "currentRound", 7, 1), i = ue(e, "mouseEventType", 15), s = ue(e, "mouseData", 15), a = ue(e, "mouseY", 15), o = ue(e, "requestRoundChange", 7, (p) => {
  }), l = ue(e, "candidateColors", 23, () => []);
  function u(p) {
    return p.isTransfer ? `${p.label}__transfer` : p.transferIndex != null ? `${p.label}__${p.transferIndex}` : p.label;
  }
  const f = 800, h = 800, c = Math.min(f, h) * 0.3, v = f / 2, g = h / 2, m = "Pie", b = "Donut", A = "TextLayer", S = "url(#cross-hatch)", T = 1.15, D = 0.1, E = 750, j = 800;
  function it(p) {
    return "hatch-" + p.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let W = [], nt = [], ut = [], ft = 0, G = /* @__PURE__ */ mt(
    0
    // $state just to make it inspectable
  ), x = 0;
  const P = {}, zt = "No Further Rankings";
  let tt = /* @__PURE__ */ mt(null);
  function Ht() {
    const p = gt(w(tt));
    p.select("#" + m).remove(), p.select("#" + b).remove(), p.select("#" + A).remove();
  }
  function Yt(p) {
    o() && (st = p, o()(p));
  }
  function ne(p) {
    Ht(), ut = ge(p), W = jo(p, m, ut, v, g, 0, Tt());
  }
  xu(() => {
    rr(), setTimeout(
      () => {
        ne(r());
      },
      0
    );
  });
  function ge(p) {
    const _ = Nr(p);
    return ft = rn(p), _;
  }
  function Tt() {
    return c;
  }
  function _e() {
    return Tt() * 1.41;
  }
  function me(p) {
    let _ = 0;
    for (let y = 1; y < p; y++) {
      const M = n().results[y - 1].tallyResults;
      for (let R = 0; R < M.length; R++) {
        const C = M[R].transfers;
        if (C) {
          const k = C.exhausted;
          k && (_ += Number(k));
        }
      }
    }
    return _;
  }
  function Xe(p, _) {
    if (p === "exhausted") return me(_);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[p]);
    }
  }
  function Ot(p, _) {
    return Xe(p, _).toLocaleString("en-US");
  }
  function nn(p, _) {
    return (Xe(p, _) / ft).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function rn(p) {
    const _ = n().results[p - 1].tally;
    let y = 0;
    for (let [M, R] of Object.entries(_))
      y += Number(R);
    return y;
  }
  function Ge(p, _) {
    if (!p || p < 1 || p > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    const y = n().results[p - 1].tallyResults, M = [];
    for (let R = 0; R < y.length; R++) {
      const C = y[R][_];
      C != null && M.push(C);
    }
    return M;
  }
  function Bt(p) {
    return Ge(p, "eliminated");
  }
  function ye(p) {
    let _ = [];
    for (let y = 1; y <= p; y++) _ = _.concat(Ge(y, "elected"));
    return _;
  }
  function Sn(p, _) {
    const y = n().results[_ - 1].tallyResults;
    let M = 0;
    const R = y.findIndex((C) => (C == null ? void 0 : C.elected) && p == C.elected);
    if (R >= 0) {
      const C = y[R].transfers;
      if (C)
        for (let [k, I] of Object.entries(C)) M += Number(I);
    } else
      return 0;
    return M;
  }
  function Nr(p) {
    const _ = n().results;
    let y = _[Math.max(0, p - 2)].tally;
    const M = [], R = [];
    for (let [k, I] of Object.entries(y))
      M.push({ label: k, value: 0 });
    y = _[p - 1].tally;
    for (let k of M) {
      const I = Number(y[k.label]), q = Sn(k.label, p);
      q > 0 ? (R.push({
        label: k.label,
        value: q,
        isTransfer: !0
      }), k.value = I - q, R.push(k)) : (k.value = I, R.push(k));
    }
    const C = me(p);
    return R.push({ label: "exhausted", value: C }), R;
  }
  function rr() {
    const p = gt(w(tt)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, M] of Object.entries(n().results[0].tally)) {
      !l() || l().length === 0 ? _ < 10 ? P[y] = td[_] : P[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : P[y] = l()[_ % l().length], _++;
      {
        const R = p.clone(!0);
        R.attr("id", it(y)).select("rect").attr("fill", P[y]), R.selectAll("circle").attr("fill", "#383838");
      }
    }
    P.exhausted = S, P["Inactive Ballots"] = S;
  }
  function bi() {
    gt(w(tt)).select("#" + b).remove();
  }
  function $(p, _) {
    const y = Wr("global").duration(j);
    _ && y.on("end", _), bi(), Yo(p), Zo(), Qo(0, Tt()), kr();
  }
  function V(p, _) {
    const y = Wr("global").duration(j);
    _ && y.on("end", _), Bo(p);
  }
  function et(p, _) {
    const y = Wr("global").duration(j);
    _ && y.on("end", _), zo(p), Ho(Tt());
  }
  let K = !1, rt = [];
  function Q() {
    kr(), K = !1, At();
  }
  function At() {
    if (rt.length === 0) {
      st !== r() && (r() === st + 1 && st > 0 && r() <= n().results.length ? (st = r(), dt(r())) : r() >= 1 && r() <= n().results.length && (st = r(), J(G, 0), ne(r())));
      return;
    }
    const p = rt.shift();
    switch (p.type) {
      case "round": {
        const _ = p.round;
        _ === st + 1 && st > 0 && _ <= n().results.length ? (st = _, dt(_)) : (_ !== st && _ >= 1 && _ <= n().results.length && (st = _, J(G, 0), ne(_)), At());
        break;
      }
      case "step":
        kn();
        break;
    }
  }
  function dt(p) {
    if (p <= 1 || p > n().results.length) {
      At();
      return;
    }
    K = !0, x = p, J(G, 0), $(x - 1, () => {
      V(x - 1, () => {
        et(x, Q);
      });
    });
  }
  function re() {
    K || (K = !0, x = r(), ie());
  }
  function ie() {
    if (J(
      G,
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), rt.length > 0) {
      Q();
      return;
    }
    const p = x < n().results.length - 1 ? ie : Q;
    $(x, () => {
      V(x, () => {
        x++, Yt(x), et(x, p);
      });
    });
  }
  ds(() => {
    Ke();
  });
  let st = 0;
  function Ke() {
    if (st != r()) {
      if (K) {
        rt.push({ type: "round", round: r() });
        return;
      }
      st == r() - 1 && st > 0 ? bt() : se(r()), st = r();
    }
  }
  function se(p) {
    if (K) {
      rt.push({ type: "round", round: p });
      return;
    }
    J(G, 0), ne(p);
  }
  function bt() {
    if (K) {
      rt.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (x = r(), x > n().results.length) {
      kr(), K = !1;
      return;
    }
    K = !0, w(G) === 0 ? $(x - 1, () => {
      V(x - 1, () => {
        et(x, Q);
      });
    }) : w(G) === 1 ? V(x - 1, () => {
      et(x, Q);
    }) : w(G) === 2 && et(x, Q), J(G, 0);
  }
  function kn() {
    if (r() > n().results.length) {
      kr(), K = !1;
      return;
    }
    if (K) {
      rt.push({ type: "step" });
      return;
    }
    K = !0, J(G, (w(G) + 1) % 3), x = r(), w(G) === 1 ? $(x, Q) : w(G) === 2 ? V(x, Q) : w(G) === 0 ? (x++, Yt(x), et(x, Q)) : (K = !1, console.warn("displayPhase out of range at ", w(G)));
  }
  function zo(p) {
    ut = Nr(p), W = tl(p, m, ut, 0, Tt(), !0);
  }
  function Ho(p, _) {
    const y = gt(w(tt)).select("#" + b), M = De().outerRadius(p).innerRadius(p - 1), R = y.selectAll(".slice");
    let C = R.size();
    function k() {
      C--, C === 0 && Jo();
    }
    R.select("path").transition("global").duration(E).attr("d", (I) => M(I)).on("end", (I) => k());
  }
  function Yo(p) {
    const _ = Xo(p, W);
    nt = Ts(p, b, _, v, g, Tt(), _e(), !1, !0);
  }
  function Bo(p) {
    const _ = Ko(p, nt, W);
    nt = Cs(p, b, _, Tt(), _e(), !1);
  }
  function Sr(p) {
    return P[p.data.label];
  }
  function Uo(p) {
    const _ = {}, y = n().results[p - 1].tallyResults;
    for (let M = 0; M < y.length; M++) {
      let R = y[M].eliminated;
      if (R === void 0 && (R = y[M].elected), R === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const C = y[M].transfers;
      if (C === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [k, I] of Object.entries(C))
        _[k] === void 0 ? _[k] = Number(I) : _[k] += Number(I);
    }
    return _;
  }
  function Xo(p, _) {
    const y = [], M = ft, R = n().results[p - 1].tallyResults;
    for (let C = 0; C < R.length; C++) {
      let k = R[C].eliminated;
      if (k === void 0 && (k = R[C].elected), k === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const I = R[C].transfers;
      if (I === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let q = _.find((F) => F.data.label == k && F.data.isTransfer);
      q === void 0 && (q = _.find((F) => F.data.label == k && !F.data.isTransfer));
      let B = 0;
      if (q) B = q.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [F, U] of Object.entries(I)) {
        let at;
        const we = _.find((ct) => ct.data.label == F);
        if (we)
          at = structuredClone(we);
        else if (F == "exhausted")
          at = {
            data: { label: F, value: Number(U) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (F == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", U);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", F);
          continue;
        }
        const N = Number(U) / M * 2 * Math.PI;
        at.startAngle = B, B = at.endAngle = B + N, at.index = C, at.data.transferIndex = C, y.push(at);
      }
    }
    return y;
  }
  function Go(p, _, y) {
    const M = {};
    for (let [R, C] of Object.entries(p)) {
      const k = y.find((B) => R == B.data.label);
      if (k === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", R);
        continue;
      }
      const I = (k.startAngle + k.endAngle) / 2, q = p[k.data.label] / _ * 2 * Math.PI;
      M[k.data.label] = I - q / 2;
    }
    return M;
  }
  function Ko(p, _, y) {
    const M = [], R = ft, C = Uo(p), k = Go(C, R, y);
    for (let [I, q] of _.entries()) {
      const B = structuredClone(q), F = q.endAngle - q.startAngle, U = y.find((at) => q.data.label === at.data.label && !at.data.isTransfer);
      if (U) {
        const at = U.data.label;
        B.startAngle = k[at], k[at] += F, B.endAngle = B.startAngle + F;
      } else if (q.data.label === "exhausted")
        B.startAngle = q.startAngle, B.endAngle = q.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", q.data.label);
        continue;
      }
      B.index = I, M.push(B);
    }
    return M;
  }
  function Rs(p, _, y, M, R, C) {
    const I = gt(w(tt)).append("g").attr("id", A).attr("transform", `translate(${y}, ${M})`), q = De().innerRadius(R * T).outerRadius(R * T);
    I.selectAll("text").data(_).enter().each(function(B) {
      B.endAngle - B.startAngle < D || B.data.isTransfer || gt(this).append("g").attr("id", (F) => u(F.data)).classed("eliminated", (F) => C.includes(F.data.label) || F.data.isTransfer === !0).each(function(F, U) {
        F.data.label === "exhausted" && gt(this).on("mouseenter", (at, we) => el(at)).on("mouseleave", (at, we) => nl());
      }).append("text").attr("transform", (F) => `translate(${q.centroid(F)})`).attr("text-anchor", (F) => $i(F.startAngle, F.endAngle)).text((F) => F.data.label === "exhausted" ? zt : F.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((F) => Ot(F.data.label, p) + " (" + nn(F.data.label, p) + ")");
    });
  }
  function Wo(p, _, y, M) {
    const C = gt(w(tt)).select("#" + A), k = C.selectAll("tspan"), I = C.selectAll("g").data(_, (U) => u(U.data)).classed("eliminated", (U) => M.includes(U.data.label) || U.data.isTransfer === !0), q = De().innerRadius(y * T).outerRadius(y * T + 1);
    k.transition("global").duration(E).attr("transform", (U) => `translate(${q.centroid(U)})`).attr("text-anchor", (U) => $i(U.startAngle, U.endAngle)), I.select("text").transition("global").duration(E).attr("transform", (U) => `translate(${q.centroid(U)})`).attr("text-anchor", (U) => $i(U.startAngle, U.endAngle)).on("end", (U) => F());
    let B = I.size();
    function F(U) {
      B--, B === 0 && (C.remove(), Rs(p, _, v, g, y, M));
    }
  }
  function jo(p, _, y, M, R, C, k, I = !0, q = !1) {
    const F = la().sort(null).value((U) => U.value)(y);
    return Ts(p, _, F, M, R, C, k, I, q), F;
  }
  function kr() {
    gt(w(tt)).select("#" + m).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function Ts(p, _, y, M, R, C, k, I, q) {
    const B = Bt(p), F = ye(p), we = gt(w(tt)).attr("viewBox", `0 0 ${f} ${h}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${M}, ${R})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (N) => B.includes(N.data.label) || N.data.isTransfer === !0).classed("elected", (N) => F.includes(N.data.label) && !N.data.isTransfer).attr("id", (N) => u(N.data)).on("mouseenter", (N, ct) => Ei(N, ct)).on("mouseleave", (N, ct) => Ri(N, ct)), ir = De().outerRadius(k).innerRadius(C);
    if (q) {
      const N = De().outerRadius(C + 1).innerRadius(C);
      we.append("path").attr("d", N).transition("global").duration(E).attr("d", (ct) => ir(ct)).attr("fill", (ct) => Sr(ct)).on("end", (ct) => Ai());
    } else
      we.append("path").attr("d", (N) => ir(N)).attr("fill", (N) => Sr(N)), Ai();
    return I && Rs(p, y, M, R, k, B), y;
  }
  function Zo() {
    const y = gt(w(tt)).select("#" + A).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function Jo() {
    const y = gt(w(tt)).select("#" + A).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function Qo(p, _) {
    const R = gt(w(tt)).select("#" + m).selectAll(".eliminated"), C = De().innerRadius(p), k = De().outerRadius(_);
    R.classed("finished", !0).select("path").transition("global").duration(E).attrTween("d", function(I) {
      const q = On(_, p);
      return function(B) {
        return k.innerRadius(q(B)), k(I);
      };
    }).attr("fill", (I) => `url(#${it(I.data.label)})`), R.clone(!0).classed("finished", !0).select("path").transition("global").duration(E).attrTween("d", function(I) {
      const q = On(_, p);
      return function(B) {
        return C.outerRadius(q(B)), C(I);
      };
    }).attr("fill", (I) => Sr(I));
  }
  function $i(p, _) {
    const y = (p + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Ai() {
    gt(w(
      tt
      // force redisplay of text labels
    )).select("#" + A).raise().append("g").remove();
  }
  function tl(p, _, y, M, R, C) {
    const I = la().sort(null).value((q) => q.value)(y);
    return Cs(p, _, I, M, R, C), I;
  }
  function Cs(p, _, y, M, R, C) {
    const k = Bt(p), I = ye(p), q = De().outerRadius(R).innerRadius(M).startAngle((N) => N.startAngle).endAngle((N) => N.endAngle), B = De().outerRadius(R).innerRadius(M), U = gt(w(tt)).select("#" + _);
    U.selectAll(".slice").attr("prevStart", (N) => N.startAngle).attr("prevEnd", (N) => N.endAngle);
    const at = U.selectAll(".slice").data(y, (N) => u(N.data));
    at.enter().append("g").attr("class", "slice").attr("id", (N) => u(N.data)).classed("eliminated", !0).on("mouseenter", (N, ct) => Ei(N, ct)).on("mouseleave", (N, ct) => Ri(N, ct)).append("path").attr("d", (N) => B(N)).attr("fill", (N) => Sr(N)), at.classed("eliminated", (N) => k.includes(N.data.label)).classed("elected", (N) => I.includes(N.data.label)).on("mouseenter", (N, ct) => Ei(N, ct)).on("mouseleave", (N, ct) => Ri(N, ct));
    let we = at.size();
    function ir() {
      we--, we <= 0 && (Ai(), U.selectAll(".finished").remove());
    }
    return at.select("path").transition("global").duration(E).attrTween("d", function(N) {
      const ct = Number(gt(this.parentNode).attr("prevStart")), il = Number(gt(this.parentNode).attr("prevEnd")), sl = On(ct, N.startAngle), al = On(il, N.endAngle);
      return (Ss) => (q.startAngle(sl(Ss)).endAngle(al(Ss)), q(N));
    }).on("end", ir), C && Wo(p, y, R, k), y;
  }
  function Ei(p, _) {
    s(_.data.label), i("enter"), a(p.clientY);
  }
  function Ri(p, _) {
    s(_.data.label), i("leave");
  }
  function el(p, _) {
    i("show-exhausted"), a(p.clientY);
  }
  function nl(p, _) {
    i("hide-exhausted");
  }
  var rl = {
    pieColors: P,
    exhaustedLabel: zt,
    countExhaustedVotes: me,
    getEliminatedCandidates: Bt,
    getElectedCandidates: ye,
    runFullAnimationFn: re,
    animateOnePhaseFn: kn,
    get jsonData() {
      return n();
    },
    set jsonData(p) {
      n(p), jt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(p = 1) {
      r(p), jt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(p) {
      i(p), jt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(p) {
      s(p), jt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(p) {
      a(p), jt();
    },
    get requestRoundChange() {
      return o();
    },
    set requestRoundChange(p = (_) => {
    }) {
      o(p), jt();
    },
    get candidateColors() {
      return l();
    },
    set candidateColors(p = []) {
      l(p), jt();
    }
  }, Ns = dd();
  return Br(Ns, (p) => J(tt, p), () => w(tt)), be(t, Ns), ls(rl);
}
co(
  Vo,
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
  { mode: "open" }
);
var vd = /* @__PURE__ */ er("<span> </span> <!>", 1), gd = /* @__PURE__ */ er("About to eliminate: <!>", 1), _d = /* @__PURE__ */ er("<span> </span> <!>", 1), md = /* @__PURE__ */ er("Elected: <!>", 1), yd = /* @__PURE__ */ er("<span> </span> <br/>", 1), wd = /* @__PURE__ */ er('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button">One Small Step</button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const xd = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:absolute;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;left:50%;transform:translate(-50%);font-weight:normal;opacity:0;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.pie-chart-container.svelte-1r6y5gl {
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
function bd(t, e) {
  os(e, !0), uo(t, xd);
  const n = 0.85;
  let r = ue(e, "electionSummary", 7), i = ue(e, "currentRound", 7, 1), s = ue(e, "requestRoundChange", 7, ($) => {
  }), a = ue(e, "candidateColors", 23, () => []), o = /* @__PURE__ */ mt(null), l = /* @__PURE__ */ mt(null), u = /* @__PURE__ */ mt(""), f = /* @__PURE__ */ mt(un([])), h = /* @__PURE__ */ mt(""), c = /* @__PURE__ */ mt(""), v = /* @__PURE__ */ mt(0), g = /* @__PURE__ */ sr(() => m(r()));
  function m($) {
    if (typeof $ == "string")
      try {
        $ = JSON.parse($);
      } catch (V) {
        return console.error("Failed to parse JSON string:", V), {};
      }
    return $ || {};
  }
  function b($) {
    s() ? s()($) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function A() {
    switch (w(h)) {
      case "enter":
        (($) => {
          var V = Al($, 2);
          J(f, V[0], !0), J(u, V[1], !0);
        })(T(w(c), i())), w(o) && (w(o).style.top = String(w(v) || 20) + "px", w(o).style.opacity = String(n));
        break;
      case "leave":
        w(o) && (w(o).style.opacity = "0"), J(f, [], !0), J(u, "");
        break;
      case "show-exhausted":
        w(l) && (w(l).style.top = String(w(v) || 20) + "px", w(l).style.opacity = String(n));
        break;
      case "hide-exhausted":
        w(l) && (w(l).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", w(h));
        break;
    }
  }
  ds(() => A());
  function S($, V) {
    return $ == 1 ? V ? "vote was" : "vote will be" : V ? "votes were" : "votes will be";
  }
  function T($, V) {
    const et = [], K = $ === "exhausted" ? ut() : $;
    let rt;
    $ == "exhausted" ? rt = W(1) : rt = w(g).results[0].tally[$], et.push(`${K} started with ${rt} votes.`);
    for (let Q = 1; Q <= V; Q++) {
      Q === V && ($ == "exhausted" ? rt = W(V) : rt = w(g).results[V - 1].tally[$], et.push(`${K} has ${rt} votes at round ${V}.`));
      const At = w(g).results[Q - 1].tallyResults;
      for (let dt = 0; dt < At.length; dt++) {
        const re = At[dt].transfers, ie = At[dt].eliminated, st = At[dt].elected;
        if (ie)
          ie === $ && et.push(`${K} will be eliminated on round ${Q}.`);
        else if ($ === st && (et.push(`${K} was elected on round ${Q}.`), re))
          for (let [se, bt] of Object.entries(re))
            et.push(`${bt} ${S(Number(bt), Q < V)} transferred to ${se} on round ${Q}.`);
        const Ke = ie || st;
        if (Ke) {
          const se = Number(re[$]);
          se && et.push(`${se} ${S(se, Q < V)} transferred from ${Ke} on round ${Q}.`);
        }
      }
    }
    return [et, K];
  }
  function D() {
    let $ = 0;
    for (let V = 1; V <= w(g).results.length; V++) {
      const et = w(g).results[V - 1].tallyResults;
      for (let K = 0; K < et.length; K++)
        et[K].elected && $++;
    }
    return $;
  }
  let E;
  function j($) {
    return E ? E.getEliminatedCandidates($) : [];
  }
  function it($) {
    return E ? E.getElectedCandidates($) : [];
  }
  function W($) {
    return E ? E.countExhaustedVotes($) : 0;
  }
  function nt() {
    E && E.animateOnePhaseFn && E.animateOnePhaseFn();
  }
  function ut() {
    return E ? E.exhaustedLabel : "";
  }
  function ft() {
    return E ? E.pieColors : {};
  }
  var G = {
    get electionSummary() {
      return r();
    },
    set electionSummary($) {
      r($), jt();
    },
    get currentRound() {
      return i();
    },
    set currentRound($ = 1) {
      i($), jt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange($ = (V) => {
    }) {
      s($), jt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors($ = []) {
      a($), jt();
    }
  }, x = wd(), P = Mn(x), zt = Xt(P);
  zt.__click = nt, Ut(P);
  var tt = ae(P, 4), Ht = Xt(tt), Yt = Xt(Ht), ne = Xt(Yt);
  Br(
    Vo(ne, {
      get jsonData() {
        return w(g);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: b,
      get candidateColors() {
        return a();
      },
      get mouseEventType() {
        return w(h);
      },
      set mouseEventType($) {
        J(h, $, !0);
      },
      get mouseData() {
        return w(c);
      },
      set mouseData($) {
        J(c, $, !0);
      },
      get mouseY() {
        return w(v);
      },
      set mouseY($) {
        J(v, $, !0);
      }
    }),
    ($) => E = $,
    () => E
  ), Ut(Yt), Ut(Ht);
  var ge = ae(Ht, 2), Tt = Xt(ge);
  Ut(ge);
  var _e = ae(ge, 2), me = Xt(_e);
  {
    var Xe = ($) => {
      var V = gd(), et = ae(Mn(V));
      Si(et, 17, () => j(i()), Ni, (K, rt, Q) => {
        var At = vd(), dt = Mn(At);
        let re;
        var ie = Xt(dt, !0);
        Ut(dt);
        var st = ae(dt, 2);
        {
          var Ke = (bt) => {
            var kn = Vs(", ");
            be(bt, kn);
          }, se = /* @__PURE__ */ sr(() => Q < j(i()).length - 1);
          Dr(st, (bt) => {
            w(se) && bt(Ke);
          });
        }
        Pr(
          (bt) => {
            re = Ys(dt, "", re, bt), Pn(ie, w(rt));
          },
          [() => ({ color: ft()[w(rt)] })]
        ), be(K, At);
      }), be($, V);
    }, Ot = /* @__PURE__ */ sr(() => j(i()).length > 0);
    Dr(me, ($) => {
      w(Ot) && $(Xe);
    });
  }
  var nn = ae(me, 2);
  {
    var rn = ($) => {
      var V = md(), et = ae(Mn(V));
      Si(et, 17, () => it(i()), Ni, (K, rt, Q) => {
        var At = _d(), dt = Mn(At);
        let re;
        var ie = Xt(dt, !0);
        Ut(dt);
        var st = ae(dt, 2);
        {
          var Ke = (bt) => {
            var kn = Vs(", ");
            be(bt, kn);
          }, se = /* @__PURE__ */ sr(() => Q < it(i()).length - 1);
          Dr(st, (bt) => {
            w(se) && bt(Ke);
          });
        }
        Pr(
          (bt) => {
            re = Ys(dt, "", re, bt), Pn(ie, w(rt));
          },
          [() => ({ color: ft()[w(rt)] })]
        ), be(K, At);
      }), be($, V);
    }, Ge = /* @__PURE__ */ sr(() => it(i()).length > 0);
    Dr(nn, ($) => {
      w(Ge) && $(rn);
    });
  }
  Ut(_e), Ut(tt);
  var Bt = ae(tt, 2), ye = Xt(Bt), Sn = Xt(ye, !0);
  Ut(ye);
  var Nr = ae(ye, 2);
  Si(Nr, 17, () => w(f), Ni, ($, V) => {
    var et = yd(), K = Mn(et), rt = Xt(K, !0);
    Ut(K), Fi(2), Pr(() => Pn(rt, w(V))), be($, et);
  }), Ut(Bt), Br(Bt, ($) => J(o, $), () => w(o));
  var rr = ae(Bt, 2), bi = Xt(rr);
  return Fi(2), Ut(rr), Br(rr, ($) => J(l, $), () => w(l)), Pr(
    ($, V) => {
      Pn(Tt, `${w(g).config.contest ?? ""}, ${$ ?? ""} to be elected, Round ${i() ?? ""}.`), Pn(Sn, w(u)), Pn(bi, `"${V ?? ""}" means all the candidates ranked on `);
    },
    [D, ut]
  ), be(t, x), ls(G);
}
hu(["click"]);
customElements.define("pie-chart", co(
  bd,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    candidateColors: {}
  },
  [],
  [],
  { mode: "open" }
));
