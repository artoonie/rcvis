var bl = Object.defineProperty;
var ea = (t) => {
  throw TypeError(t);
};
var $l = (t, e, n) => e in t ? bl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var st = (t, e, n) => $l(t, typeof e != "symbol" ? e + "" : e, n), Ui = (t, e, n) => e.has(t) || ea("Cannot " + n);
var v = (t, e, n) => (Ui(t, e, "read from private field"), n ? n.call(t) : e.get(t)), q = (t, e, n) => e.has(t) ? ea("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), O = (t, e, n, r) => (Ui(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), mt = (t, e, n) => (Ui(t, e, "access private method"), n);
var Ma;
typeof window < "u" && ((Ma = window.__svelte ?? (window.__svelte = {})).v ?? (Ma.v = /* @__PURE__ */ new Set())).add("5");
const Al = 1, El = 2, Rl = 16, Cl = 1, Tl = 4, Sl = 8, Nl = 16, kl = 2, Es = "[", Ti = "[!", Rs = "]", or = {}, At = Symbol(), Ml = "http://www.w3.org/1999/xhtml", ns = !1;
var Fa = Array.isArray, Pl = Array.prototype.indexOf, lr = Array.prototype.includes, Si = Array.from, vi = Object.keys, gi = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, Dl = Object.prototype, Fl = Array.prototype, Il = Object.getPrototypeOf, na = Object.isExtensible;
const Ol = () => {
};
function Ll(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ia() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function ql(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Rt = 2, Fr = 4, Ni = 8, Oa = 1 << 24, rn = 16, $e = 32, vn = 64, La = 128, fe = 512, wt = 1024, Ct = 2048, be = 4096, ee = 8192, tn = 16384, gr = 32768, ur = 65536, ra = 1 << 17, qa = 1 << 18, zn = 1 << 19, Vl = 1 << 20, cn = 1 << 25, On = 65536, rs = 1 << 21, Cs = 1 << 22, hn = 1 << 23, Mr = Symbol("$state"), Va = Symbol("legacy props"), xn = new class extends Error {
  constructor() {
    super(...arguments);
    st(this, "name", "StaleReactionError");
    st(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Wr = 3, _r = 8;
function Yl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Hl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Xl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ul() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Kl(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ql() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ki(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function tu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let J = !1;
function Qe(t) {
  J = t;
}
let H;
function zt(t) {
  if (t === null)
    throw ki(), or;
  return H = t;
}
function Mi() {
  return zt(/* @__PURE__ */ Le(H));
}
function Jt(t) {
  if (J) {
    if (/* @__PURE__ */ Le(H) !== null)
      throw ki(), or;
    H = t;
  }
}
function is(t = 1) {
  if (J) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Le(n);
    H = n;
  }
}
function _i(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === _r) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Rs) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Es || r === Ti || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(n)
    );
    t && n.remove(), n = i;
  }
}
function Ya(t) {
  if (!t || t.nodeType !== _r)
    throw ki(), or;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ha(t) {
  return t === this.v;
}
function eu(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function za(t) {
  return !eu(t, this.v);
}
let nu = !1, ne = null;
function fr(t) {
  ne = t;
}
function Ts(t, e = !1, n) {
  ne = {
    p: ne,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Ss(t) {
  var e = (
    /** @type {ComponentContext} */
    ne
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      vo(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ne = e.p, t ?? /** @type {T} */
  {};
}
function Xa() {
  return !0;
}
let bn = [];
function Ba() {
  var t = bn;
  bn = [], Ll(t);
}
function Pn(t) {
  if (bn.length === 0 && !Pr) {
    var e = bn;
    queueMicrotask(() => {
      e === bn && Ba();
    });
  }
  bn.push(t);
}
function ru() {
  for (; bn.length > 0; )
    Ba();
}
function Wa(t) {
  var e = U;
  if (e === null)
    return Y.f |= hn, t;
  if ((e.f & gr) === 0 && (e.f & Fr) === 0)
    throw t;
  cr(t, e);
}
function cr(t, e) {
  for (; e !== null; ) {
    if ((e.f & La) !== 0) {
      if ((e.f & gr) === 0)
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
const iu = -7169;
function lt(t, e) {
  t.f = t.f & iu | e;
}
function Ns(t) {
  (t.f & fe) !== 0 || t.deps === null ? lt(t, wt) : lt(t, be);
}
function Ua(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Rt) === 0 || (e.f & On) === 0 || (e.f ^= On, Ua(
        /** @type {Derived} */
        e.deps
      ));
}
function Ga(t, e, n) {
  (t.f & Ct) !== 0 ? e.add(t) : (t.f & be) !== 0 && n.add(t), Ua(t.deps), lt(t, wt);
}
const jr = /* @__PURE__ */ new Set();
let B = null, Et = null, Vt = [], Pi = null, ss = !1, Pr = !1;
var tr, er, Rn, nr, Yr, Hr, Cn, Ge, rr, Oe, as, os, Ka;
const Ws = class Ws {
  constructor() {
    q(this, Oe);
    st(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    st(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    st(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    q(this, tr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, er, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, Rn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    q(this, nr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, Yr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, Hr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    q(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    q(this, Ge, /* @__PURE__ */ new Map());
    st(this, "is_fork", !1);
    q(this, rr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, nr) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Ge).has(e) || v(this, Ge).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, Ge).get(e);
    if (n) {
      v(this, Ge).delete(e);
      for (var r of n.d)
        lt(r, Ct), we(r);
      for (r of n.m)
        lt(r, be), we(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Vt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      mt(this, Oe, as).call(this, s, n, r);
    if (this.is_deferred()) {
      mt(this, Oe, os).call(this, r), mt(this, Oe, os).call(this, n);
      for (const [s, a] of v(this, Ge))
        Qa(s, a);
    } else {
      for (const s of v(this, tr)) s();
      v(this, tr).clear(), v(this, Rn) === 0 && mt(this, Oe, Ka).call(this), B = null, ia(r), ia(n), (i = v(this, Yr)) == null || i.resolve();
    }
    Et = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== At && !this.previous.has(e) && this.previous.set(e, n), (e.f & hn) === 0 && (this.current.set(e, e.v), Et == null || Et.set(e, e.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, Et = null);
  }
  flush() {
    if (this.activate(), Vt.length > 0) {
      if (Ja(), B !== null && B !== this)
        return;
    } else v(this, Rn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, er)) e(this);
    v(this, er).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    O(this, Rn, v(this, Rn) + 1), e && O(this, nr, v(this, nr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    O(this, Rn, v(this, Rn) - 1), e && O(this, nr, v(this, nr) - 1), !v(this, rr) && (O(this, rr, !0), Pn(() => {
      O(this, rr, !1), this.is_deferred() ? Vt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Hr))
      v(this, Cn).delete(e), lt(e, Ct), we(e);
    for (const e of v(this, Cn))
      lt(e, be), we(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, tr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, er).add(e);
  }
  settled() {
    return (v(this, Yr) ?? O(this, Yr, Ia())).promise;
  }
  static ensure() {
    if (B === null) {
      const e = B = new Ws();
      jr.add(B), Pr || Pn(() => {
        B === e && e.flush();
      });
    }
    return B;
  }
  apply() {
  }
};
tr = new WeakMap(), er = new WeakMap(), Rn = new WeakMap(), nr = new WeakMap(), Yr = new WeakMap(), Hr = new WeakMap(), Cn = new WeakMap(), Ge = new WeakMap(), rr = new WeakMap(), Oe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
as = function(e, n, r) {
  e.f ^= wt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & ($e | vn)) !== 0, l = o && (a & wt) !== 0, u = l || (a & ee) !== 0 || v(this, Ge).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= wt : s !== null && (a & (Fr | Ni | Oa)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Ur(i) && ((a & rn) !== 0 && v(this, Cn).add(i), dr(i));
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
os = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ga(e[n], v(this, Hr), v(this, Cn));
}, Ka = function() {
  var i;
  if (jr.size > 1) {
    this.previous.clear();
    var e = Et, n = !0;
    for (const s of jr) {
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
        var r = Vt;
        Vt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          Za(f, o, l, u);
        if (Vt.length > 0) {
          B = s, s.apply();
          for (const f of Vt)
            mt(i = s, Oe, as).call(i, f, [], []);
          s.deactivate();
        }
        Vt = r;
      }
    }
    B = null, Et = e;
  }
  this.committed = !0, jr.delete(this);
};
let en = Ws;
function ct(t) {
  var e = Pr;
  Pr = !0;
  try {
    for (var n; ; ) {
      if (ru(), Vt.length === 0 && (B == null || B.flush(), Vt.length === 0))
        return Pi = null, /** @type {T} */
        n;
      Ja();
    }
  } finally {
    Pr = e;
  }
}
function Ja() {
  ss = !0;
  var t = null;
  try {
    for (var e = 0; Vt.length > 0; ) {
      var n = en.ensure();
      if (e++ > 1e3) {
        var r, i;
        su();
      }
      n.process(Vt), dn.clear();
    }
  } finally {
    Vt = [], ss = !1, Pi = null;
  }
}
function su() {
  try {
    Ul();
  } catch (t) {
    cr(t, Pi);
  }
}
let ge = null;
function ia(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (tn | ee)) === 0 && Ur(r) && (ge = /* @__PURE__ */ new Set(), dr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && mo(r), (ge == null ? void 0 : ge.size) > 0)) {
        dn.clear();
        for (const i of ge) {
          if ((i.f & (tn | ee)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            ge.has(a) && (ge.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (tn | ee)) === 0 && dr(l);
          }
        }
        ge.clear();
      }
    }
    ge = null;
  }
}
function Za(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Rt) !== 0 ? Za(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Cs | rn)) !== 0 && (s & Ct) === 0 && ja(i, e, r) && (lt(i, Ct), we(
        /** @type {Effect} */
        i
      ));
    }
}
function ja(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (lr.call(e, i))
        return !0;
      if ((i.f & Rt) !== 0 && ja(
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
function we(t) {
  for (var e = Pi = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ss && e === U && (n & rn) !== 0 && (n & qa) === 0)
      return;
    if ((n & (vn | $e)) !== 0) {
      if ((n & wt) === 0) return;
      e.f ^= wt;
    }
  }
  Vt.push(e);
}
function Qa(t, e) {
  if (!((t.f & $e) !== 0 && (t.f & wt) !== 0)) {
    (t.f & Ct) !== 0 ? e.d.push(t) : (t.f & be) !== 0 && e.m.push(t), lt(t, wt);
    for (var n = t.first; n !== null; )
      Qa(n, e), n = n.next;
  }
}
function au(t) {
  let e = 0, n = Ln(0), r;
  return () => {
    Ps() && (x(n), Fs(() => (e === 0 && (r = Ii(() => t(() => Dr(n)))), e += 1, () => {
      Pn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Dr(n));
      });
    })));
  };
}
var ou = ur | zn | La;
function lu(t, e, n) {
  new uu(t, e, n);
}
var Qt, zr, Ne, Tn, ke, oe, qt, Me, Ke, fn, Sn, Je, ir, Nn, sr, ar, Ze, Ri, ht, to, eo, ls, si, ai, us;
class uu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    q(this, ht);
    /** @type {Boundary | null} */
    st(this, "parent");
    st(this, "is_pending", !1);
    /** @type {TemplateNode} */
    q(this, Qt);
    /** @type {TemplateNode | null} */
    q(this, zr, J ? H : null);
    /** @type {BoundaryProps} */
    q(this, Ne);
    /** @type {((anchor: Node) => void)} */
    q(this, Tn);
    /** @type {Effect} */
    q(this, ke);
    /** @type {Effect | null} */
    q(this, oe, null);
    /** @type {Effect | null} */
    q(this, qt, null);
    /** @type {Effect | null} */
    q(this, Me, null);
    /** @type {DocumentFragment | null} */
    q(this, Ke, null);
    /** @type {TemplateNode | null} */
    q(this, fn, null);
    q(this, Sn, 0);
    q(this, Je, 0);
    q(this, ir, !1);
    q(this, Nn, !1);
    /** @type {Set<Effect>} */
    q(this, sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, Ze, null);
    q(this, Ri, au(() => (O(this, Ze, Ln(v(this, Sn))), () => {
      O(this, Ze, null);
    })));
    O(this, Qt, e), O(this, Ne, n), O(this, Tn, r), this.parent = /** @type {Effect} */
    U.b, this.is_pending = !!v(this, Ne).pending, O(this, ke, Is(() => {
      if (U.b = this, J) {
        const s = v(this, zr);
        Mi(), /** @type {Comment} */
        s.nodeType === _r && /** @type {Comment} */
        s.data === Ti ? mt(this, ht, eo).call(this) : (mt(this, ht, to).call(this), v(this, Je) === 0 && (this.is_pending = !1));
      } else {
        var i = mt(this, ht, ls).call(this);
        try {
          O(this, oe, ue(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, Je) > 0 ? mt(this, ht, ai).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, fn)) == null || s.remove();
      };
    }, ou)), J && O(this, Qt, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ga(e, v(this, sr), v(this, ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    mt(this, ht, us).call(this, e), O(this, Sn, v(this, Sn) + e), !(!v(this, Ze) || v(this, ir)) && (O(this, ir, !0), Pn(() => {
      O(this, ir, !1), v(this, Ze) && hr(v(this, Ze), v(this, Sn));
    }));
  }
  get_effect_pending() {
    return v(this, Ri).call(this), x(
      /** @type {Source<number>} */
      v(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Ne).onerror;
    let r = v(this, Ne).failed;
    if (v(this, Nn) || !n && !r)
      throw e;
    v(this, oe) && (Ft(v(this, oe)), O(this, oe, null)), v(this, qt) && (Ft(v(this, qt)), O(this, qt, null)), v(this, Me) && (Ft(v(this, Me)), O(this, Me, null)), J && (zt(
      /** @type {TemplateNode} */
      v(this, zr)
    ), is(), zt(_i()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        tu();
        return;
      }
      i = !0, s && Ql(), en.ensure(), O(this, Sn, 0), v(this, Me) !== null && Dn(v(this, Me), () => {
        O(this, Me, null);
      }), this.is_pending = this.has_pending_snippet(), O(this, oe, mt(this, ht, si).call(this, () => (O(this, Nn, !1), ue(() => v(this, Tn).call(this, v(this, Qt)))))), v(this, Je) > 0 ? mt(this, ht, ai).call(this) : this.is_pending = !1;
    };
    Pn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        cr(o, v(this, ke) && v(this, ke).parent);
      }
      r && O(this, Me, mt(this, ht, si).call(this, () => {
        en.ensure(), O(this, Nn, !0);
        try {
          return ue(() => {
            r(
              v(this, Qt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return cr(
            o,
            /** @type {Effect} */
            v(this, ke).parent
          ), null;
        } finally {
          O(this, Nn, !1);
        }
      }));
    });
  }
}
Qt = new WeakMap(), zr = new WeakMap(), Ne = new WeakMap(), Tn = new WeakMap(), ke = new WeakMap(), oe = new WeakMap(), qt = new WeakMap(), Me = new WeakMap(), Ke = new WeakMap(), fn = new WeakMap(), Sn = new WeakMap(), Je = new WeakMap(), ir = new WeakMap(), Nn = new WeakMap(), sr = new WeakMap(), ar = new WeakMap(), Ze = new WeakMap(), Ri = new WeakMap(), ht = new WeakSet(), to = function() {
  try {
    O(this, oe, ue(() => v(this, Tn).call(this, v(this, Qt))));
  } catch (e) {
    this.error(e);
  }
}, eo = function() {
  const e = v(this, Ne).pending;
  e && (O(this, qt, ue(() => e(v(this, Qt)))), Pn(() => {
    var n = mt(this, ht, ls).call(this);
    O(this, oe, mt(this, ht, si).call(this, () => (en.ensure(), ue(() => v(this, Tn).call(this, n))))), v(this, Je) > 0 ? mt(this, ht, ai).call(this) : (Dn(
      /** @type {Effect} */
      v(this, qt),
      () => {
        O(this, qt, null);
      }
    ), this.is_pending = !1);
  }));
}, ls = function() {
  var e = v(this, Qt);
  return this.is_pending && (O(this, fn, he()), v(this, Qt).before(v(this, fn)), e = v(this, fn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
si = function(e) {
  var n = U, r = Y, i = ne;
  Ie(v(this, ke)), de(v(this, ke)), fr(v(this, ke).ctx);
  try {
    return e();
  } catch (s) {
    return Wa(s), null;
  } finally {
    Ie(n), de(r), fr(i);
  }
}, ai = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Ne).pending
  );
  v(this, oe) !== null && (O(this, Ke, document.createDocumentFragment()), v(this, Ke).append(
    /** @type {TemplateNode} */
    v(this, fn)
  ), xo(v(this, oe), v(this, Ke))), v(this, qt) === null && O(this, qt, ue(() => e(v(this, Qt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
us = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && mt(n = this.parent, ht, us).call(n, e);
    return;
  }
  if (O(this, Je, v(this, Je) + e), v(this, Je) === 0) {
    this.is_pending = !1;
    for (const r of v(this, sr))
      lt(r, Ct), we(r);
    for (const r of v(this, ar))
      lt(r, be), we(r);
    v(this, sr).clear(), v(this, ar).clear(), v(this, qt) && Dn(v(this, qt), () => {
      O(this, qt, null);
    }), v(this, Ke) && (v(this, Qt).before(v(this, Ke)), O(this, Ke, null));
  }
};
function fu(t, e, n, r) {
  const i = Di;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = B, o = (
    /** @type {Effect} */
    U
  ), l = cu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & tn) === 0 && cr(p, o);
    }
    a == null || a.deactivate(), fs();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ hu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => cr(c, o));
  }
  u ? u.then(h) : h();
}
function cu() {
  var t = U, e = Y, n = ne, r = B;
  return function(s = !0) {
    Ie(t), de(e), fr(n), s && (r == null || r.activate());
  };
}
function fs() {
  Ie(null), de(null), fr(null);
}
// @__NO_SIDE_EFFECTS__
function Di(t) {
  var e = Rt | Ct, n = Y !== null && (Y.f & Rt) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return U !== null && (U.f |= zn), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Ha,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      At
    ),
    wv: 0,
    parent: n ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && Hl();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ln(
    /** @type {V} */
    At
  ), o = !Y, l = /* @__PURE__ */ new Map();
  return bu(() => {
    var p;
    var u = Ia();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === B && f.committed && f.deactivate(), fs();
      });
    } catch (g) {
      u.reject(g), fs();
    }
    var f = (
      /** @type {Batch} */
      B
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = l.get(f)) == null || p.reject(xn), l.delete(f), l.set(f, u);
    }
    const c = (g, y = void 0) => {
      if (f.activate(), y)
        y !== xn && (a.f |= hn, hr(a, y));
      else {
        (a.f & hn) !== 0 && (a.f ^= hn), hr(a, g);
        for (const [$, A] of l) {
          if (l.delete($), $ === f) break;
          A.reject(xn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), yu(() => {
    for (const u of l.values())
      u.reject(xn);
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
function Jn(t) {
  const e = /* @__PURE__ */ Di(t);
  return bo(e), e;
}
// @__NO_SIDE_EFFECTS__
function no(t) {
  const e = /* @__PURE__ */ Di(t);
  return e.equals = za, e;
}
function du(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ft(
        /** @type {Effect} */
        e[n]
      );
  }
}
function pu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Rt) === 0)
      return (e.f & tn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function ks(t) {
  var e, n = U;
  Ie(pu(t));
  try {
    t.f &= ~On, du(t), e = Ro(t);
  } finally {
    Ie(n);
  }
  return e;
}
function ro(t) {
  var e = ks(t);
  if (!t.equals(e) && (t.wv = Ao(), (!(B != null && B.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    lt(t, wt);
    return;
  }
  pn || (Et !== null ? (Ps() || B != null && B.is_fork) && Et.set(t, e) : Ns(t));
}
function vu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(xn), r.teardown = Ol, r.ac = null, Ir(r, 0), Os(r));
}
function io(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && dr(e);
}
let cs = /* @__PURE__ */ new Set();
const dn = /* @__PURE__ */ new Map();
let so = !1;
function Ln(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ha,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function yt(t, e) {
  const n = Ln(t);
  return bo(n), n;
}
// @__NO_SIDE_EFFECTS__
function ao(t, e = !1, n = !0) {
  const r = Ln(t);
  return e || (r.equals = za), r;
}
function ot(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (Y.f & ra) !== 0) && Xa() && (Y.f & (Rt | rn | Cs | ra)) !== 0 && (ce === null || !lr.call(ce, t)) && jl();
  let r = n ? $n(e) : e;
  return hr(t, r);
}
function hr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    pn ? dn.set(t, e) : dn.set(t, n), t.v = e;
    var r = en.ensure();
    if (r.capture(t, n), (t.f & Rt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Ct) !== 0 && ks(i), Ns(i);
    }
    t.wv = Ao(), oo(t, Ct), U !== null && (U.f & wt) !== 0 && (U.f & ($e | vn)) === 0 && (ae === null ? Eu([t]) : ae.push(t)), !r.is_fork && cs.size > 0 && !so && gu();
  }
  return e;
}
function gu() {
  so = !1;
  for (const t of cs)
    (t.f & wt) !== 0 && lt(t, be), Ur(t) && dr(t);
  cs.clear();
}
function Dr(t) {
  ot(t, t.v + 1);
}
function oo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Ct) === 0;
      if (o && lt(s, e), (a & Rt) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Et == null || Et.delete(l), (a & On) === 0 && (a & fe && (s.f |= On), oo(l, be));
      } else o && ((a & rn) !== 0 && ge !== null && ge.add(
        /** @type {Effect} */
        s
      ), we(
        /** @type {Effect} */
        s
      ));
    }
}
function $n(t) {
  if (typeof t != "object" || t === null || Mr in t)
    return t;
  const e = Il(t);
  if (e !== Dl && e !== Fl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Fa(t), i = /* @__PURE__ */ yt(0), s = Fn, a = (o) => {
    if (Fn === s)
      return o();
    var l = Y, u = Fn;
    de(null), oa(s);
    var f = o();
    return de(l), oa(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ yt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Jl();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ yt(u.value);
          return n.set(l, h), h;
        }) : ot(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ yt(At));
            n.set(l, f), Dr(i);
          }
        } else
          ot(u, At), Dr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Mr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Mn(o, l)) != null && p.writable) && (f = a(() => {
          var g = $n(h ? o[l] : At), y = /* @__PURE__ */ yt(g);
          return y;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === At ? void 0 : c;
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
          if (h !== void 0 && c !== At)
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
        var u = n.get(l), f = u !== void 0 && u.v !== At || Reflect.has(o, l);
        if (u !== void 0 || U !== null && (!f || (c = Mn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? $n(o[l]) : At, g = /* @__PURE__ */ yt(p);
            return g;
          }), n.set(l, u));
          var h = x(u);
          if (h === At)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var C;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var g = n.get(p + "");
            g !== void 0 ? ot(g, At) : p in o && (g = a(() => /* @__PURE__ */ yt(At)), n.set(p + "", g));
          }
        if (h === void 0)
          (!c || (C = Mn(o, l)) != null && C.writable) && (h = a(() => /* @__PURE__ */ yt(void 0)), ot(h, $n(u)), n.set(l, h));
        else {
          c = h.v !== At;
          var y = a(() => $n(u));
          ot(h, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(o, l);
        if ($ != null && $.set && $.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= A.v && ot(A, k + 1);
          }
          Dr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== At;
        });
        for (var [u, f] of n)
          f.v !== At && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Zl();
      }
    }
  );
}
var sa, lo, uo, fo;
function hs() {
  if (sa === void 0) {
    sa = window, lo = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    uo = Mn(e, "firstChild").get, fo = Mn(e, "nextSibling").get, na(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), na(n) && (n.__t = void 0);
  }
}
function he(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function qn(t) {
  return (
    /** @type {TemplateNode | null} */
    uo.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Le(t) {
  return (
    /** @type {TemplateNode | null} */
    fo.call(t)
  );
}
function Zt(t, e) {
  if (!J)
    return /* @__PURE__ */ qn(t);
  var n = /* @__PURE__ */ qn(H);
  if (n === null)
    n = H.appendChild(he());
  else if (e && n.nodeType !== Wr) {
    var r = he();
    return n == null || n.before(r), zt(r), r;
  }
  return e && Fi(
    /** @type {Text} */
    n
  ), zt(n), n;
}
function mn(t, e = !1) {
  if (!J) {
    var n = /* @__PURE__ */ qn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Le(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Wr) {
      var r = he();
      return H == null || H.before(r), zt(r), r;
    }
    Fi(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function ve(t, e = 1, n = !1) {
  let r = J ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Le(r);
  if (!J)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Wr) {
      var s = he();
      return r === null ? i == null || i.after(s) : r.before(s), zt(s), s;
    }
    Fi(
      /** @type {Text} */
      r
    );
  }
  return zt(r), r;
}
function co(t) {
  t.textContent = "";
}
function ho() {
  return !1;
}
function Ms(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ml, t, void 0)
  );
}
function Fi(t) {
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
function po(t) {
  var e = Y, n = U;
  de(null), Ie(null);
  try {
    return t();
  } finally {
    de(e), Ie(n);
  }
}
function _u(t) {
  U === null && (Y === null && Wl(), Bl()), pn && Xl();
}
function mu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function qe(t, e, n) {
  var r = U;
  r !== null && (r.f & ee) !== 0 && (t |= ee);
  var i = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: t | Ct | fe,
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
      dr(i);
    } catch (o) {
      throw Ft(i), o;
    }
  else e !== null && we(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & zn) === 0 && (s = s.first, (t & rn) !== 0 && (t & ur) !== 0 && s !== null && (s.f |= ur)), s !== null && (s.parent = r, r !== null && mu(s, r), Y !== null && (Y.f & Rt) !== 0 && (t & vn) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ps() {
  return Y !== null && !xe;
}
function yu(t) {
  const e = qe(Ni, null, !1);
  return lt(e, wt), e.teardown = t, e;
}
function Ds(t) {
  _u();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !Y && (e & $e) !== 0 && (e & gr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return vo(t);
}
function vo(t) {
  return qe(Fr | Vl, t, !1);
}
function wu(t) {
  en.ensure();
  const e = qe(vn | zn, t, !0);
  return () => {
    Ft(e);
  };
}
function xu(t) {
  en.ensure();
  const e = qe(vn | zn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dn(e, () => {
      Ft(e), r(void 0);
    }) : (Ft(e), r(void 0));
  });
}
function go(t) {
  return qe(Fr, t, !1);
}
function bu(t) {
  return qe(Cs | zn, t, !0);
}
function Fs(t, e = 0) {
  return qe(Ni | e, t, !0);
}
function Zn(t, e = [], n = [], r = []) {
  fu(r, e, n, (i) => {
    qe(Ni, () => t(...i.map(x)), !0);
  });
}
function Is(t, e = 0) {
  var n = qe(rn | e, t, !0);
  return n;
}
function ue(t) {
  return qe($e | zn, t, !0);
}
function _o(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = pn, r = Y;
    aa(!0), de(null);
    try {
      e.call(null);
    } finally {
      aa(n), de(r);
    }
  }
}
function Os(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && po(() => {
      i.abort(xn);
    });
    var r = n.next;
    (n.f & vn) !== 0 ? n.parent = null : Ft(n, e), n = r;
  }
}
function $u(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & $e) === 0 && Ft(e), e = n;
  }
}
function Ft(t, e = !0) {
  var n = !1;
  (e || (t.f & qa) !== 0) && t.nodes !== null && t.nodes.end !== null && (Au(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Os(t, e && !n), Ir(t, 0), lt(t, tn);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  _o(t);
  var i = t.parent;
  i !== null && i.first !== null && mo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Au(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Le(t);
    t.remove(), t = n;
  }
}
function mo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Dn(t, e, n = !0) {
  var r = [];
  yo(t, r, !0);
  var i = () => {
    n && Ft(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function yo(t, e, n) {
  if ((t.f & ee) === 0) {
    t.f ^= ee;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & ur) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & $e) !== 0 && (t.f & rn) !== 0;
      yo(i, e, a ? n : !1), i = s;
    }
  }
}
function Ls(t) {
  wo(t, !0);
}
function wo(t, e) {
  if ((t.f & ee) !== 0) {
    t.f ^= ee, (t.f & wt) === 0 && (lt(t, Ct), we(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ur) !== 0 || (n.f & $e) !== 0;
      wo(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function xo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Le(n);
      e.append(n), n = i;
    }
}
let oi = !1, pn = !1;
function aa(t) {
  pn = t;
}
let Y = null, xe = !1;
function de(t) {
  Y = t;
}
let U = null;
function Ie(t) {
  U = t;
}
let ce = null;
function bo(t) {
  Y !== null && (ce === null ? ce = [t] : ce.push(t));
}
let Yt = null, jt = 0, ae = null;
function Eu(t) {
  ae = t;
}
let $o = 1, An = 0, Fn = An;
function oa(t) {
  Fn = t;
}
function Ao() {
  return ++$o;
}
function Ur(t) {
  var e = t.f;
  if ((e & Ct) !== 0)
    return !0;
  if (e & Rt && (t.f &= ~On), (e & be) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Ur(
        /** @type {Derived} */
        s
      ) && ro(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Et === null && lt(t, wt);
  }
  return !1;
}
function Eo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ce !== null && lr.call(ce, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Rt) !== 0 ? Eo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? lt(s, Ct) : (s.f & wt) !== 0 && lt(s, be), we(
        /** @type {Effect} */
        s
      ));
    }
}
function Ro(t) {
  var y;
  var e = Yt, n = jt, r = ae, i = Y, s = ce, a = ne, o = xe, l = Fn, u = t.f;
  Yt = /** @type {null | Value[]} */
  null, jt = 0, ae = null, Y = (u & ($e | vn)) === 0 ? t : null, ce = null, fr(t.ctx), xe = !1, Fn = ++An, t.ac !== null && (po(() => {
    t.ac.abort(xn);
  }), t.ac = null);
  try {
    t.f |= rs;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= gr;
    var c = t.deps, p = B == null ? void 0 : B.is_fork;
    if (Yt !== null) {
      var g;
      if (p || Ir(t, jt), c !== null && jt > 0)
        for (c.length = jt + Yt.length, g = 0; g < Yt.length; g++)
          c[jt + g] = Yt[g];
      else
        t.deps = c = Yt;
      if (Ps() && (t.f & fe) !== 0)
        for (g = jt; g < c.length; g++)
          ((y = c[g]).reactions ?? (y.reactions = [])).push(t);
    } else !p && c !== null && jt < c.length && (Ir(t, jt), c.length = jt);
    if (Xa() && ae !== null && !xe && c !== null && (t.f & (Rt | be | Ct)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ae.length; g++)
        Eo(
          ae[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (An++, i.deps !== null)
        for (let $ = 0; $ < n; $ += 1)
          i.deps[$].rv = An;
      if (e !== null)
        for (const $ of e)
          $.rv = An;
      ae !== null && (r === null ? r = ae : r.push(.../** @type {Source[]} */
      ae));
    }
    return (t.f & hn) !== 0 && (t.f ^= hn), h;
  } catch ($) {
    return Wa($);
  } finally {
    t.f ^= rs, Yt = e, jt = n, ae = r, Y = i, ce = s, fr(a), xe = o, Fn = l;
  }
}
function Ru(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Pl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Rt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !lr.call(Yt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & fe) !== 0 && (s.f ^= fe, s.f &= ~On), Ns(s), vu(s), Ir(s, 0);
  }
}
function Ir(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ru(t, n[r]);
}
function dr(t) {
  var e = t.f;
  if ((e & tn) === 0) {
    lt(t, wt);
    var n = U, r = oi;
    U = t, oi = !0;
    try {
      (e & (rn | Oa)) !== 0 ? $u(t) : Os(t), _o(t);
      var i = Ro(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = $o;
      var s;
      ns && nu && (t.f & Ct) !== 0 && t.deps;
    } finally {
      oi = r, U = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & Rt) !== 0;
  if (Y !== null && !xe) {
    var r = U !== null && (U.f & tn) !== 0;
    if (!r && (ce === null || !lr.call(ce, t))) {
      var i = Y.deps;
      if ((Y.f & rs) !== 0)
        t.rv < An && (t.rv = An, Yt === null && i !== null && i[jt] === t ? jt++ : Yt === null ? Yt = [t] : Yt.push(t));
      else {
        (Y.deps ?? (Y.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Y] : lr.call(s, Y) || s.push(Y);
      }
    }
  }
  if (pn && dn.has(t))
    return dn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (pn) {
      var o = a.v;
      return ((a.f & wt) === 0 && a.reactions !== null || To(a)) && (o = ks(a)), dn.set(a, o), o;
    }
    var l = (a.f & fe) === 0 && !xe && Y !== null && (oi || (Y.f & fe) !== 0), u = (a.f & gr) === 0;
    Ur(a) && (l && (a.f |= fe), ro(a)), l && !u && (io(a), Co(a));
  }
  if (Et != null && Et.has(t))
    return Et.get(t);
  if ((t.f & hn) !== 0)
    throw t.v;
  return t.v;
}
function Co(t) {
  if (t.f |= fe, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Rt) !== 0 && (e.f & fe) === 0 && (io(
        /** @type {Derived} */
        e
      ), Co(
        /** @type {Derived} */
        e
      ));
}
function To(t) {
  if (t.v === At) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (dn.has(e) || (e.f & Rt) !== 0 && To(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ii(t) {
  var e = xe;
  try {
    return xe = !0, t();
  } finally {
    xe = e;
  }
}
const So = /* @__PURE__ */ new Set(), ds = /* @__PURE__ */ new Set();
function Cu(t) {
  for (var e = 0; e < t.length; e++)
    So.add(t[e]);
  for (var n of ds)
    n(t);
}
let la = null;
function ua(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  la = t;
  var a = 0, o = la === t && t.__root;
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
    gi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, h = U;
    de(null), Ie(null);
    try {
      for (var c, p = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && y.call(s, t);
        } catch (A) {
          c ? p.push(A) : c = A;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let A of p)
          queueMicrotask(() => {
            throw A;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, de(f), Ie(h);
    }
  }
}
var Pa, Da;
const Gi = (Da = (Pa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Pa.trustedTypes) == null ? void 0 : /* @__PURE__ */ Da.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Tu(t) {
  return (
    /** @type {string} */
    (Gi == null ? void 0 : Gi.createHTML(t)) ?? t
  );
}
function No(t, e = !1) {
  var n = Ms("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Tu(t) : t, n.content;
}
function Vn(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Xn(t, e) {
  var n = (e & kl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (J)
      return Vn(H, null), H;
    r === void 0 && (r = No(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || lo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qn(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Vn(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Su(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (J)
      return Vn(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        No(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ qn(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ qn(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Vn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Nu(t, e) {
  return /* @__PURE__ */ Su(t, e, "svg");
}
function fa(t = "") {
  if (!J) {
    var e = he(t + "");
    return Vn(e, e), e;
  }
  var n = H;
  return n.nodeType !== Wr ? (n.before(n = he()), zt(n)) : Fi(
    /** @type {Text} */
    n
  ), Vn(n, n), n;
}
function _e(t, e) {
  if (J) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      U
    );
    ((n.f & gr) === 0 || n.nodes.end === null) && (n.nodes.end = H), Mi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const ku = ["touchstart", "touchmove"];
function Mu(t) {
  return ku.includes(t);
}
function ln(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function ko(t, e) {
  return Mo(t, e);
}
function Pu(t, e) {
  hs(), e.intro = e.intro ?? !1;
  const n = e.target, r = J, i = H;
  try {
    for (var s = /* @__PURE__ */ qn(n); s && (s.nodeType !== _r || /** @type {Comment} */
    s.data !== Es); )
      s = /* @__PURE__ */ Le(s);
    if (!s)
      throw or;
    Qe(!0), zt(
      /** @type {Comment} */
      s
    );
    const a = Mo(t, { ...e, anchor: s });
    return Qe(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== or && console.warn("Failed to hydrate: ", a), e.recover === !1 && Gl(), hs(), co(n), Qe(!1), ko(t, e);
  } finally {
    Qe(r), zt(i);
  }
}
const Qr = /* @__PURE__ */ new Map();
function Mo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  hs();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var g = Mu(p);
        for (const A of [e, document]) {
          var y = Qr.get(A);
          y === void 0 && (y = /* @__PURE__ */ new Map(), Qr.set(A, y));
          var $ = y.get(p);
          $ === void 0 ? (A.addEventListener(p, ua, { passive: g }), y.set(p, 1)) : y.set(p, $ + 1);
        }
      }
    }
  };
  l(Si(So)), ds.add(l);
  var u = void 0, f = xu(() => {
    var h = n ?? e.appendChild(he());
    return lu(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Ts({});
        var p = (
          /** @type {ComponentContext} */
          ne
        );
        if (s && (p.c = s), i && (r.$$events = i), J && Vn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, J && (U.nodes.end = H, H === null || H.nodeType !== _r || /** @type {Comment} */
        H.data !== Rs))
          throw ki(), or;
        Ss();
      }
    ), () => {
      var y;
      for (var c of o)
        for (const $ of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Qr.get($)
          ), g = (
            /** @type {number} */
            p.get(c)
          );
          --g == 0 ? ($.removeEventListener(c, ua), p.delete(c), p.size === 0 && Qr.delete($)) : p.set(c, g);
        }
      ds.delete(l), h !== n && ((y = h.parentNode) == null || y.removeChild(h));
    };
  });
  return ps.set(u, f), u;
}
let ps = /* @__PURE__ */ new WeakMap();
function Du(t, e) {
  const n = ps.get(t);
  return n ? (ps.delete(t), n(e)) : Promise.resolve();
}
var me, Pe, te, kn, Xr, Br, Ci;
class Fu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    st(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, me, /* @__PURE__ */ new Map());
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
    q(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    q(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, kn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, Xr, !0);
    q(this, Br, () => {
      var e = (
        /** @type {Batch} */
        B
      );
      if (v(this, me).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, me).get(e)
        ), r = v(this, Pe).get(n);
        if (r)
          Ls(r), v(this, kn).delete(n);
        else {
          var i = v(this, te).get(n);
          i && (v(this, Pe).set(n, i.effect), v(this, te).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, me)) {
          if (v(this, me).delete(s), s === e)
            break;
          const o = v(this, te).get(a);
          o && (Ft(o.effect), v(this, te).delete(a));
        }
        for (const [s, a] of v(this, Pe)) {
          if (s === n || v(this, kn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, me).values()).includes(s)) {
              var u = document.createDocumentFragment();
              xo(a, u), u.append(he()), v(this, te).set(s, { effect: a, fragment: u });
            } else
              Ft(a);
            v(this, kn).delete(s), v(this, Pe).delete(s);
          };
          v(this, Xr) || !r ? (v(this, kn).add(s), Dn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    q(this, Ci, (e) => {
      v(this, me).delete(e);
      const n = Array.from(v(this, me).values());
      for (const [r, i] of v(this, te))
        n.includes(r) || (Ft(i.effect), v(this, te).delete(r));
    });
    this.anchor = e, O(this, Xr, n);
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
    ), i = ho();
    if (n && !v(this, Pe).has(e) && !v(this, te).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = he();
        s.append(a), v(this, te).set(e, {
          effect: ue(() => n(a)),
          fragment: s
        });
      } else
        v(this, Pe).set(
          e,
          ue(() => n(this.anchor))
        );
    if (v(this, me).set(r, e), i) {
      for (const [o, l] of v(this, Pe))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, te))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Br)), r.ondiscard(v(this, Ci));
    } else
      J && (this.anchor = H), v(this, Br).call(this);
  }
}
me = new WeakMap(), Pe = new WeakMap(), te = new WeakMap(), kn = new WeakMap(), Xr = new WeakMap(), Br = new WeakMap(), Ci = new WeakMap();
function Iu(t) {
  ne === null && Yl(), Ds(() => {
    const e = Ii(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Er(t, e, n = !1) {
  J && Mi();
  var r = new Fu(t), i = n ? ur : 0;
  function s(a, o) {
    if (J) {
      const f = Ya(t);
      var l;
      if (f === Es ? l = 0 : f === Ti ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = _i();
        zt(u), r.anchor = u, Qe(!1), r.ensure(a, o), Qe(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Is(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Ki(t, e) {
  return e;
}
function Ou(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    Dn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            vs(Si(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      co(f), f.append(u), t.items.clear();
    }
    vs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vs(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Ft(t[n], e);
}
var ca;
function Ji(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  J && Mi();
  var l = null, u = /* @__PURE__ */ no(() => {
    var y = n();
    return Fa(y) ? y : y == null ? [] : Si(y);
  }), f, h = !0;
  function c() {
    g.fallback = l, Lu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & cn) === 0 ? Ls(l) : (l.f ^= cn, Tr(l, null, a)) : Dn(l, () => {
      l = null;
    }));
  }
  var p = Is(() => {
    f = /** @type {V[]} */
    x(u);
    var y = f.length;
    let $ = !1;
    if (J) {
      var A = Ya(a) === Ti;
      A !== (y === 0) && (a = _i(), zt(a), Qe(!1), $ = !0);
    }
    for (var k = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      B
    ), D = ho(), P = 0; P < y; P += 1) {
      J && H.nodeType === _r && /** @type {Comment} */
      H.data === Rs && (a = /** @type {Comment} */
      H, $ = !0, Qe(!1));
      var G = f[P], ut = r(G, P), K = h ? null : o.get(ut);
      K ? (K.v && hr(K.v, G), K.i && hr(K.i, P), D && C.unskip_effect(K.e)) : (K = qu(
        o,
        h ? a : ca ?? (ca = he()),
        G,
        ut,
        P,
        i,
        e,
        n
      ), h || (K.e.f |= cn), o.set(ut, K)), k.add(ut);
    }
    if (y === 0 && s && !l && (h ? l = ue(() => s(a)) : (l = ue(() => s(ca ?? (ca = he()))), l.f |= cn)), y > k.size && zl(), J && y > 0 && zt(_i()), !h)
      if (D) {
        for (const [it, Q] of o)
          k.has(it) || C.skip_effect(Q.e);
        C.oncommit(c), C.ondiscard(() => {
        });
      } else
        c();
    $ && Qe(!0), x(u);
  }), g = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, J && (a = H);
}
function Rr(t) {
  for (; t !== null && (t.f & $e) === 0; )
    t = t.next;
  return t;
}
function Lu(t, e, n, r, i) {
  var K;
  var s = e.length, a = t.items, o = Rr(t.effect.first), l, u = null, f = [], h = [], c, p, g, y;
  for (y = 0; y < s; y += 1) {
    if (c = e[y], p = i(c, y), g = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const it of t.outrogroups)
        it.pending.delete(g), it.done.delete(g);
    if ((g.f & cn) !== 0)
      if (g.f ^= cn, g === o)
        Tr(g, null, n);
      else {
        var $ = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), un(t, u, g), un(t, g, $), Tr(g, $, n), u = g, f = [], h = [], o = Rr(u.next);
        continue;
      }
    if ((g.f & ee) !== 0 && Ls(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var A = h[0], k;
          u = A.prev;
          var C = f[0], D = f[f.length - 1];
          for (k = 0; k < f.length; k += 1)
            Tr(f[k], A, n);
          for (k = 0; k < h.length; k += 1)
            l.delete(h[k]);
          un(t, C.prev, D.next), un(t, u, C), un(t, D, A), o = A, u = D, y -= 1, f = [], h = [];
        } else
          l.delete(g), Tr(g, o, n), un(t, g.prev, g.next), un(t, g, u === null ? t.effect.first : u.next), un(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = Rr(o.next);
      if (o === null)
        continue;
    }
    (g.f & cn) === 0 && f.push(g), u = g, o = Rr(g.next);
  }
  if (t.outrogroups !== null) {
    for (const it of t.outrogroups)
      it.pending.size === 0 && (vs(Si(it.done)), (K = t.outrogroups) == null || K.delete(it));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var P = [];
    if (l !== void 0)
      for (g of l)
        (g.f & ee) === 0 && P.push(g);
    for (; o !== null; )
      (o.f & ee) === 0 && o !== t.fallback && P.push(o), o = Rr(o.next);
    var G = P.length;
    if (G > 0) {
      var ut = null;
      Ou(t, P, ut);
    }
  }
}
function qu(t, e, n, r, i, s, a, o) {
  var l = (a & Al) !== 0 ? (a & Rl) === 0 ? /* @__PURE__ */ ao(n, !1, !1) : Ln(n) : null, u = (a & El) !== 0 ? Ln(i) : null;
  return {
    v: l,
    i: u,
    e: ue(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Tr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & cn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function un(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Po(t, e) {
  go(() => {
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
      const i = Ms("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function ha(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Vu(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += ha(r)), i && (n += ha(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Zi(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function da(t, e, n, r) {
  var i = t.__style;
  if (J || i !== e) {
    var s = Vu(e, r);
    (!J || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Zi(t, n == null ? void 0 : n[0], r[0]), Zi(t, n == null ? void 0 : n[1], r[1], "important")) : Zi(t, n, r));
  return r;
}
function pa(t, e) {
  return t === e || (t == null ? void 0 : t[Mr]) === e;
}
function li(t = {}, e, n, r) {
  return go(() => {
    var i, s;
    return Fs(() => {
      i = s, s = [], Ii(() => {
        t !== n(...s) && (e(t, ...s), i && pa(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Pn(() => {
        s && pa(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let ti = !1;
function Yu(t) {
  var e = ti;
  try {
    return ti = !1, [t(), ti];
  } finally {
    ti = e;
  }
}
function vt(t, e, n, r) {
  var k;
  var i = (n & Sl) !== 0, s = (n & Nl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Ii(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Mr in t || Va in t;
    u = ((k = Mn(t, e)) == null ? void 0 : k.set) ?? (f && e in t ? (C) => t[e] = C : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Yu(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (Kl(), u(h)));
  var p;
  if (p = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C === void 0 ? l() : (o = !0, C);
  }, (n & Tl) === 0)
    return p;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, D) {
        return arguments.length > 0 ? ((!D || g || c) && u(D ? p() : C), C) : p();
      })
    );
  }
  var y = !1, $ = ((n & Cl) !== 0 ? Di : no)(() => (y = !1, p()));
  i && x($);
  var A = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(C, D) {
      if (arguments.length > 0) {
        const P = D ? x($) : i ? $n(C) : C;
        return ot($, P), y = !0, a !== void 0 && (a = P), C;
      }
      return pn && y || (A.f & tn) !== 0 ? $.v : x($);
    })
  );
}
function Hu(t) {
  return new zu(t);
}
var je, le;
class zu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    q(this, je);
    /** @type {Record<string, any>} */
    q(this, le);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ ao(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Va ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ot(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    O(this, le, (e.hydrate ? Pu : ko)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ct(), O(this, je, i.$$events);
    for (const a of Object.keys(v(this, le)))
      a === "$set" || a === "$destroy" || a === "$on" || gi(this, a, {
        get() {
          return v(this, le)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, le)[a] = o;
        },
        enumerable: !0
      });
    v(this, le).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, le).$destroy = () => {
      Du(v(this, le));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, le).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, je)[e] = v(this, je)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, je)[e].push(r), () => {
      v(this, je)[e] = v(this, je)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, le).$destroy();
  }
}
je = new WeakMap(), le = new WeakMap();
let Do;
typeof HTMLElement == "function" && (Do = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    st(this, "$$ctor");
    /** Slots */
    st(this, "$$s");
    /** @type {any} The Svelte component instance */
    st(this, "$$c");
    /** Whether or not the custom element is connected */
    st(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    st(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    st(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    st(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    st(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    st(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    st(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    st(this, "$$shadowRoot", null);
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
          const o = Ms("slot");
          s !== "default" && (o.name = s), _e(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Xu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = ui(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Hu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wu(() => {
        Fs(() => {
          var s;
          this.$$r = !0;
          for (const a of vi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ui(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ui(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return vi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ui(t, e, n, r) {
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
function Xu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Fo(t, e, n, r, i, s) {
  let a = class extends Do {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return vi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return vi(e).forEach((o) => {
    gi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = ui(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Mn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    gi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Bu = { value: () => {
} };
function Io() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new fi(n);
}
function fi(t) {
  this._ = t;
}
function Wu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
fi.prototype = Io.prototype = {
  constructor: fi,
  on: function(t, e) {
    var n = this._, r = Wu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Uu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = va(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = va(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new fi(t);
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
function Uu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function va(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Bu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var gs = "http://www.w3.org/1999/xhtml";
const ga = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ga.hasOwnProperty(e) ? { space: ga[e], local: t } : t;
}
function Gu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === gs && e.documentElement.namespaceURI === gs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ku(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Oo(t) {
  var e = Oi(t);
  return (e.local ? Ku : Gu)(e);
}
function Ju() {
}
function qs(t) {
  return t == null ? Ju : function() {
    return this.querySelector(t);
  };
}
function Zu(t) {
  typeof t != "function" && (t = qs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new re(r, this._parents);
}
function ju(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Qu() {
  return [];
}
function Lo(t) {
  return t == null ? Qu : function() {
    return this.querySelectorAll(t);
  };
}
function tf(t) {
  return function() {
    return ju(t.apply(this, arguments));
  };
}
function ef(t) {
  typeof t == "function" ? t = tf(t) : t = Lo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new re(r, i);
}
function qo(t) {
  return function() {
    return this.matches(t);
  };
}
function Vo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var nf = Array.prototype.find;
function rf(t) {
  return function() {
    return nf.call(this.children, t);
  };
}
function sf() {
  return this.firstElementChild;
}
function af(t) {
  return this.select(t == null ? sf : rf(typeof t == "function" ? t : Vo(t)));
}
var of = Array.prototype.filter;
function lf() {
  return Array.from(this.children);
}
function uf(t) {
  return function() {
    return of.call(this.children, t);
  };
}
function ff(t) {
  return this.selectAll(t == null ? lf : uf(typeof t == "function" ? t : Vo(t)));
}
function cf(t) {
  typeof t != "function" && (t = qo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new re(r, this._parents);
}
function Yo(t) {
  return new Array(t.length);
}
function hf() {
  return new re(this._enter || this._groups.map(Yo), this._parents);
}
function mi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
mi.prototype = {
  constructor: mi,
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
function df(t) {
  return function() {
    return t;
  };
}
function pf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new mi(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function vf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new mi(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function gf(t) {
  return t.__data__;
}
function _f(t, e) {
  if (!arguments.length) return Array.from(this, gf);
  var n = e ? vf : pf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = df(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = mf(t.call(f, f && f.__data__, u, r)), g = p.length, y = o[u] = new Array(g), $ = a[u] = new Array(g), A = l[u] = new Array(c);
    n(f, h, y, $, A, p, e);
    for (var k = 0, C = 0, D, P; k < g; ++k)
      if (D = y[k]) {
        for (k >= C && (C = k + 1); !(P = $[C]) && ++C < g; ) ;
        D._next = P || null;
      }
  }
  return a = new re(a, r), a._enter = o, a._exit = l, a;
}
function mf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function yf() {
  return new re(this._exit || this._groups.map(Yo), this._parents);
}
function wf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function xf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || f[g]) && (c[g] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new re(o, this._parents);
}
function bf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function $f(t) {
  t || (t = Af);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new re(i, this._parents).order();
}
function Af(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ef() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Rf() {
  return Array.from(this);
}
function Cf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Tf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Sf() {
  return !this.node();
}
function Nf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function kf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Mf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Pf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Df(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Ff(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function If(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Of(t, e) {
  var n = Oi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Mf : kf : typeof e == "function" ? n.local ? If : Ff : n.local ? Df : Pf)(n, e));
}
function Ho(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Lf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function qf(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Vf(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Yf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Lf : typeof e == "function" ? Vf : qf)(t, e, n ?? "")) : pr(this.node(), t);
}
function pr(t, e) {
  return t.style.getPropertyValue(e) || Ho(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Hf(t) {
  return function() {
    delete this[t];
  };
}
function zf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Xf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Bf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Hf : typeof e == "function" ? Xf : zf)(t, e)) : this.node()[t];
}
function zo(t) {
  return t.trim().split(/^|\s+/);
}
function Vs(t) {
  return t.classList || new Xo(t);
}
function Xo(t) {
  this._node = t, this._names = zo(t.getAttribute("class") || "");
}
Xo.prototype = {
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
function Bo(t, e) {
  for (var n = Vs(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Wo(t, e) {
  for (var n = Vs(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Wf(t) {
  return function() {
    Bo(this, t);
  };
}
function Uf(t) {
  return function() {
    Wo(this, t);
  };
}
function Gf(t, e) {
  return function() {
    (e.apply(this, arguments) ? Bo : Wo)(this, t);
  };
}
function Kf(t, e) {
  var n = zo(t + "");
  if (arguments.length < 2) {
    for (var r = Vs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Gf : e ? Wf : Uf)(n, e));
}
function Jf() {
  this.textContent = "";
}
function Zf(t) {
  return function() {
    this.textContent = t;
  };
}
function jf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Qf(t) {
  return arguments.length ? this.each(t == null ? Jf : (typeof t == "function" ? jf : Zf)(t)) : this.node().textContent;
}
function tc() {
  this.innerHTML = "";
}
function ec(t) {
  return function() {
    this.innerHTML = t;
  };
}
function nc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function rc(t) {
  return arguments.length ? this.each(t == null ? tc : (typeof t == "function" ? nc : ec)(t)) : this.node().innerHTML;
}
function ic() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sc() {
  return this.each(ic);
}
function ac() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function oc() {
  return this.each(ac);
}
function lc(t) {
  var e = typeof t == "function" ? t : Oo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function uc() {
  return null;
}
function fc(t, e) {
  var n = typeof t == "function" ? t : Oo(t), r = e == null ? uc : typeof e == "function" ? e : qs(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function hc() {
  return this.each(cc);
}
function dc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function pc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function vc(t) {
  return this.select(t ? pc : dc);
}
function gc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function _c(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function mc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function yc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function wc(t, e, n) {
  return function() {
    var r = this.__on, i, s = _c(e);
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
function xc(t, e, n) {
  var r = mc(t + ""), i, s = r.length, a;
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
  for (o = e ? wc : yc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Uo(t, e, n) {
  var r = Ho(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function bc(t, e) {
  return function() {
    return Uo(this, t, e);
  };
}
function $c(t, e) {
  return function() {
    return Uo(this, t, e.apply(this, arguments));
  };
}
function Ac(t, e) {
  return this.each((typeof e == "function" ? $c : bc)(t, e));
}
function* Ec() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Go = [null];
function re(t, e) {
  this._groups = t, this._parents = e;
}
function mr() {
  return new re([[document.documentElement]], Go);
}
function Rc() {
  return this;
}
re.prototype = mr.prototype = {
  constructor: re,
  select: Zu,
  selectAll: ef,
  selectChild: af,
  selectChildren: ff,
  filter: cf,
  data: _f,
  enter: hf,
  exit: yf,
  join: wf,
  merge: xf,
  selection: Rc,
  order: bf,
  sort: $f,
  call: Ef,
  nodes: Rf,
  node: Cf,
  size: Tf,
  empty: Sf,
  each: Nf,
  attr: Of,
  style: Yf,
  property: Bf,
  classed: Kf,
  text: Qf,
  html: rc,
  raise: sc,
  lower: oc,
  append: lc,
  insert: fc,
  remove: hc,
  clone: vc,
  datum: gc,
  on: xc,
  dispatch: Ac,
  [Symbol.iterator]: Ec
};
function at(t) {
  return typeof t == "string" ? new re([[document.querySelector(t)]], [document.documentElement]) : new re([[t]], Go);
}
function Ys(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ko(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Gr() {
}
var Or = 0.7, yi = 1 / Or, Qn = "\\s*([+-]?\\d+)\\s*", Lr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Fe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Cc = /^#([0-9a-f]{3,8})$/, Tc = new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`), Sc = new RegExp(`^rgb\\(${Fe},${Fe},${Fe}\\)$`), Nc = new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${Lr}\\)$`), kc = new RegExp(`^rgba\\(${Fe},${Fe},${Fe},${Lr}\\)$`), Mc = new RegExp(`^hsl\\(${Lr},${Fe},${Fe}\\)$`), Pc = new RegExp(`^hsla\\(${Lr},${Fe},${Fe},${Lr}\\)$`), _a = {
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
Ys(Gr, Yn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ma,
  // Deprecated! Use color.formatHex.
  formatHex: ma,
  formatHex8: Dc,
  formatHsl: Fc,
  formatRgb: ya,
  toString: ya
});
function ma() {
  return this.rgb().formatHex();
}
function Dc() {
  return this.rgb().formatHex8();
}
function Fc() {
  return Jo(this).formatHsl();
}
function ya() {
  return this.rgb().formatRgb();
}
function Yn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Cc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? wa(e) : n === 3 ? new Ht(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ei(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ei(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Tc.exec(t)) ? new Ht(e[1], e[2], e[3], 1) : (e = Sc.exec(t)) ? new Ht(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Nc.exec(t)) ? ei(e[1], e[2], e[3], e[4]) : (e = kc.exec(t)) ? ei(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Mc.exec(t)) ? $a(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pc.exec(t)) ? $a(e[1], e[2] / 100, e[3] / 100, e[4]) : _a.hasOwnProperty(t) ? wa(_a[t]) : t === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function wa(t) {
  return new Ht(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ei(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ht(t, e, n, r);
}
function Ic(t) {
  return t instanceof Gr || (t = Yn(t)), t ? (t = t.rgb(), new Ht(t.r, t.g, t.b, t.opacity)) : new Ht();
}
function _s(t, e, n, r) {
  return arguments.length === 1 ? Ic(t) : new Ht(t, e, n, r ?? 1);
}
function Ht(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ys(Ht, _s, Ko(Gr, {
  brighter(t) {
    return t = t == null ? yi : Math.pow(yi, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Or : Math.pow(Or, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(In(this.r), In(this.g), In(this.b), wi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xa,
  // Deprecated! Use color.formatHex.
  formatHex: xa,
  formatHex8: Oc,
  formatRgb: ba,
  toString: ba
}));
function xa() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}`;
}
function Oc() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}${En((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ba() {
  const t = wi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function wi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function In(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function En(t) {
  return t = In(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $a(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ye(t, e, n, r);
}
function Jo(t) {
  if (t instanceof ye) return new ye(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gr || (t = Yn(t)), !t) return new ye();
  if (t instanceof ye) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new ye(a, o, l, t.opacity);
}
function Lc(t, e, n, r) {
  return arguments.length === 1 ? Jo(t) : new ye(t, e, n, r ?? 1);
}
function ye(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ys(ye, Lc, Ko(Gr, {
  brighter(t) {
    return t = t == null ? yi : Math.pow(yi, t), new ye(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Or : Math.pow(Or, t), new ye(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Ht(
      ji(t >= 240 ? t - 240 : t + 120, i, r),
      ji(t, i, r),
      ji(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ye(Aa(this.h), ni(this.s), ni(this.l), wi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = wi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Aa(this.h)}, ${ni(this.s) * 100}%, ${ni(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Aa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ni(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ji(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Hs = (t) => () => t;
function qc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Vc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Yc(t) {
  return (t = +t) == 1 ? Zo : function(e, n) {
    return n - e ? Vc(e, n, t) : Hs(isNaN(e) ? n : e);
  };
}
function Zo(t, e) {
  var n = e - t;
  return n ? qc(t, n) : Hs(isNaN(t) ? e : t);
}
const xi = (function t(e) {
  var n = Yc(e);
  function r(i, s) {
    var a = n((i = _s(i)).r, (s = _s(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Zo(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Hc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function zc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Xc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ue(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Bc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function De(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Wc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ue(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qi = new RegExp(ms.source, "g");
function Uc(t) {
  return function() {
    return t;
  };
}
function Gc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function jo(t, e) {
  var n = ms.lastIndex = Qi.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = ms.exec(t)) && (i = Qi.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: De(r, i) })), n = Qi.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Gc(l[0].x) : Uc(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Ue(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Hs(e) : (n === "number" ? De : n === "string" ? (r = Yn(e)) ? (e = r, xi) : jo : e instanceof Yn ? xi : e instanceof Date ? Bc : zc(e) ? Hc : Array.isArray(e) ? Xc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Wc : De)(t, e);
}
var Ea = 180 / Math.PI, ys = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Ea,
    skewX: Math.atan(l) * Ea,
    scaleX: a,
    scaleY: o
  };
}
var ri;
function Kc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ys : Qo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Jc(t) {
  return t == null || (ri || (ri = document.createElementNS("http://www.w3.org/2000/svg", "g")), ri.setAttribute("transform", t), !(t = ri.transform.baseVal.consolidate())) ? ys : (t = t.matrix, Qo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function tl(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var y = p.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: De(u, h) }, { i: y - 2, x: De(f, c) });
    } else (h || c) && p.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: De(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: De(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: De(u, h) }, { i: y - 2, x: De(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var g = -1, y = c.length, $; ++g < y; ) h[($ = c[g]).i] = $.x(p);
      return h.join("");
    };
  };
}
var Zc = tl(Kc, "px, ", "px)", "deg)"), jc = tl(Jc, ", ", ")", ")"), vr = 0, Sr = 0, Cr = 0, el = 1e3, bi, Nr, $i = 0, Hn = 0, Li = 0, qr = typeof performance == "object" && performance.now ? performance : Date, nl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function zs() {
  return Hn || (nl(Qc), Hn = qr.now() + Li);
}
function Qc() {
  Hn = 0;
}
function Ai() {
  this._call = this._time = this._next = null;
}
Ai.prototype = rl.prototype = {
  constructor: Ai,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? zs() : +n) + (e == null ? 0 : +e), !this._next && Nr !== this && (Nr ? Nr._next = this : bi = this, Nr = this), this._call = t, this._time = n, ws();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ws());
  }
};
function rl(t, e, n) {
  var r = new Ai();
  return r.restart(t, e, n), r;
}
function th() {
  zs(), ++vr;
  for (var t = bi, e; t; )
    (e = Hn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --vr;
}
function Ra() {
  Hn = ($i = qr.now()) + Li, vr = Sr = 0;
  try {
    th();
  } finally {
    vr = 0, nh(), Hn = 0;
  }
}
function eh() {
  var t = qr.now(), e = t - $i;
  e > el && (Li -= e, $i = t);
}
function nh() {
  for (var t, e = bi, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : bi = n);
  Nr = t, ws(r);
}
function ws(t) {
  if (!vr) {
    Sr && (Sr = clearTimeout(Sr));
    var e = t - Hn;
    e > 24 ? (t < 1 / 0 && (Sr = setTimeout(Ra, t - qr.now() - Li)), Cr && (Cr = clearInterval(Cr))) : (Cr || ($i = qr.now(), Cr = setInterval(eh, el)), vr = 1, nl(Ra));
  }
}
function Ca(t, e, n) {
  var r = new Ai();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var rh = Io("start", "end", "cancel", "interrupt"), ih = [], il = 0, Ta = 1, xs = 2, ci = 3, Sa = 4, bs = 5, hi = 6;
function qi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  sh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: rh,
    tween: ih,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: il
  });
}
function Xs(t, e) {
  var n = Ae(t, e);
  if (n.state > il) throw new Error("too late; already scheduled");
  return n;
}
function Ve(t, e) {
  var n = Ae(t, e);
  if (n.state > ci) throw new Error("too late; already running");
  return n;
}
function Ae(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function sh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = rl(s, 0, n.time);
  function s(u) {
    n.state = Ta, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Ta) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === ci) return Ca(a);
        p.state === Sa ? (p.state = hi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = hi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Ca(function() {
      n.state === ci && (n.state = Sa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = xs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === xs) {
      for (n.state = ci, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = bs, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === bs && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = hi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ah(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > xs && r.state < bs, r.state = hi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function oh(t) {
  return this.each(function() {
    ah(this, t);
  });
}
function lh(t, e) {
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
function uh(t, e, n) {
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
function fh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ae(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? lh : uh)(n, t, e));
}
function Bs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ve(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ae(i, r).value[e];
  };
}
function sl(t, e) {
  var n;
  return (typeof e == "number" ? De : e instanceof Yn ? xi : (n = Yn(e)) ? (e = n, xi) : jo)(t, e);
}
function ch(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function hh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function dh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ph(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function vh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function gh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function _h(t, e) {
  var n = Oi(t), r = n === "transform" ? jc : sl;
  return this.attrTween(t, typeof e == "function" ? (n.local ? gh : vh)(n, r, Bs(this, "attr." + t, e)) : e == null ? (n.local ? hh : ch)(n) : (n.local ? ph : dh)(n, r, e));
}
function mh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function yh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function wh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && yh(t, s)), n;
  }
  return i._value = e, i;
}
function xh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && mh(t, s)), n;
  }
  return i._value = e, i;
}
function bh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Oi(t);
  return this.tween(n, (r.local ? wh : xh)(r, e));
}
function $h(t, e) {
  return function() {
    Xs(this, t).delay = +e.apply(this, arguments);
  };
}
function Ah(t, e) {
  return e = +e, function() {
    Xs(this, t).delay = e;
  };
}
function Eh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $h : Ah)(e, t)) : Ae(this.node(), e).delay;
}
function Rh(t, e) {
  return function() {
    Ve(this, t).duration = +e.apply(this, arguments);
  };
}
function Ch(t, e) {
  return e = +e, function() {
    Ve(this, t).duration = e;
  };
}
function Th(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Rh : Ch)(e, t)) : Ae(this.node(), e).duration;
}
function Sh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ve(this, t).ease = e;
  };
}
function Nh(t) {
  var e = this._id;
  return arguments.length ? this.each(Sh(e, t)) : Ae(this.node(), e).ease;
}
function kh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ve(this, t).ease = n;
  };
}
function Mh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(kh(this._id, t));
}
function Ph(t) {
  typeof t != "function" && (t = qo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new nn(r, this._parents, this._name, this._id);
}
function Dh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new nn(a, this._parents, this._name, this._id);
}
function Fh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ih(t, e, n) {
  var r, i, s = Fh(e) ? Xs : Ve;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Oh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ae(this.node(), n).on.on(t) : this.each(Ih(n, t, e));
}
function Lh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function qh() {
  return this.on("end.remove", Lh(this._id));
}
function Vh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qs(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, qi(u[c], e, n, c, u, Ae(f, n)));
  return new nn(s, this._parents, e, n);
}
function Yh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Lo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, g = Ae(f, n), y = 0, $ = c.length; y < $; ++y)
          (p = c[y]) && qi(p, e, n, y, c, g);
        s.push(c), a.push(f);
      }
  return new nn(s, a, e, n);
}
var Hh = mr.prototype.constructor;
function zh() {
  return new Hh(this._groups, this._parents);
}
function Xh(t, e) {
  var n, r, i;
  return function() {
    var s = pr(this, t), a = (this.style.removeProperty(t), pr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function al(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Bh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = pr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Wh(t, e, n) {
  var r, i, s;
  return function() {
    var a = pr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), pr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Uh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Ve(this, t), u = l.on, f = l.value[s] == null ? o || (o = al(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Gh(t, e, n) {
  var r = (t += "") == "transform" ? Zc : sl;
  return e == null ? this.styleTween(t, Xh(t, r)).on("end.style." + t, al(t)) : typeof e == "function" ? this.styleTween(t, Wh(t, r, Bs(this, "style." + t, e))).each(Uh(this._id, t)) : this.styleTween(t, Bh(t, r, e), n).on("end.style." + t, null);
}
function Kh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Jh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Kh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Zh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Jh(t, e, n ?? ""));
}
function jh(t) {
  return function() {
    this.textContent = t;
  };
}
function Qh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function td(t) {
  return this.tween("text", typeof t == "function" ? Qh(Bs(this, "text", t)) : jh(t == null ? "" : t + ""));
}
function ed(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function nd(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && ed(i)), e;
  }
  return r._value = t, r;
}
function rd(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, nd(t));
}
function id() {
  for (var t = this._name, e = this._id, n = ol(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Ae(l, e);
        qi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new nn(r, this._parents, t, n);
}
function sd() {
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
var ad = 0;
function nn(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function di(t) {
  return mr().transition(t);
}
function ol() {
  return ++ad;
}
var We = mr.prototype;
nn.prototype = di.prototype = {
  constructor: nn,
  select: Vh,
  selectAll: Yh,
  selectChild: We.selectChild,
  selectChildren: We.selectChildren,
  filter: Ph,
  merge: Dh,
  selection: zh,
  transition: id,
  call: We.call,
  nodes: We.nodes,
  node: We.node,
  size: We.size,
  empty: We.empty,
  each: We.each,
  on: Oh,
  attr: _h,
  attrTween: bh,
  style: Gh,
  styleTween: Zh,
  text: td,
  textTween: rd,
  remove: qh,
  tween: fh,
  delay: Eh,
  duration: Th,
  ease: Nh,
  easeVarying: Mh,
  end: sd,
  [Symbol.iterator]: We[Symbol.iterator]
};
function od(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ld = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: od
};
function ud(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function fd(t) {
  var e, n;
  t instanceof nn ? (e = t._id, t = t._name) : (e = ol(), (n = ld).time = zs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && qi(l, t, e, u, a, n || ud(l, e));
  return new nn(r, this._parents, t, e);
}
mr.prototype.interrupt = oh;
mr.prototype.transition = fd;
const $s = Math.PI, As = 2 * $s, wn = 1e-6, cd = As - wn;
function ll(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function hd(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return ll;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class dd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ll : hd(e);
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
    else if (c > wn) if (!(Math.abs(h * l - u * f) > wn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, g = i - o, y = l * l + u * u, $ = p * p + g * g, A = Math.sqrt(y), k = Math.sqrt(c), C = s * Math.tan(($s - Math.acos((y + c - $) / (2 * A * k))) / 2), D = C / k, P = C / A;
      Math.abs(D - 1) > wn && this._append`L${e + D * f},${n + D * h}`, this._append`A${s},${s},0,0,${+(h * p > f * g)},${this._x1 = e + P * l},${this._y1 = n + P * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > wn || Math.abs(this._y1 - f) > wn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % As + As), c > cd ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > wn && this._append`A${r},${r},0,${+(c >= $s)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function pd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const vd = pd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Dt(t) {
  return function() {
    return t;
  };
}
const Na = Math.abs, Nt = Math.atan2, yn = Math.cos, gd = Math.max, ts = Math.min, Te = Math.sin, jn = Math.sqrt, Lt = 1e-12, Vr = Math.PI, Ei = Vr / 2, pi = 2 * Vr;
function _d(t) {
  return t > 1 ? 0 : t < -1 ? Vr : Math.acos(t);
}
function ka(t) {
  return t >= 1 ? Ei : t <= -1 ? -Ei : Math.asin(t);
}
function md(t) {
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
  }, () => new dd(e);
}
function yd(t) {
  return t.innerRadius;
}
function wd(t) {
  return t.outerRadius;
}
function xd(t) {
  return t.startAngle;
}
function bd(t) {
  return t.endAngle;
}
function $d(t) {
  return t && t.padAngle;
}
function Ad(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Lt))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function ii(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / jn(o * o + l * l), f = u * l, h = -u * o, c = t + f, p = e + h, g = n + f, y = r + h, $ = (c + g) / 2, A = (p + y) / 2, k = g - c, C = y - p, D = k * k + C * C, P = i - s, G = c * y - g * p, ut = (C < 0 ? -1 : 1) * jn(gd(0, P * P * D - G * G)), K = (G * C - k * ut) / D, it = (-G * k - C * ut) / D, Q = (G * C + k * ut) / D, gt = (-G * k + C * ut) / D, _t = K - $, F = it - A, I = Q - $, Xt = gt - A;
  return _t * _t + F * F > I * I + Xt * Xt && (K = Q, it = gt), {
    cx: K,
    cy: it,
    x01: -f,
    y01: -h,
    x11: K * (i / P - 1),
    y11: it * (i / P - 1)
  };
}
function Se() {
  var t = yd, e = wd, n = Dt(0), r = null, i = xd, s = bd, a = $d, o = null, l = md(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), p = +e.apply(this, arguments), g = i.apply(this, arguments) - Ei, y = s.apply(this, arguments) - Ei, $ = Na(y - g), A = y > g;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > Lt)) o.moveTo(0, 0);
    else if ($ > pi - Lt)
      o.moveTo(p * yn(g), p * Te(g)), o.arc(0, 0, p, g, y, !A), c > Lt && (o.moveTo(c * yn(y), c * Te(y)), o.arc(0, 0, c, y, g, A));
    else {
      var k = g, C = y, D = g, P = y, G = $, ut = $, K = a.apply(this, arguments) / 2, it = K > Lt && (r ? +r.apply(this, arguments) : jn(c * c + p * p)), Q = ts(Na(p - c) / 2, +n.apply(this, arguments)), gt = Q, _t = Q, F, I;
      if (it > Lt) {
        var Xt = ka(it / c * Te(K)), ie = ka(it / p * Te(K));
        (G -= Xt * 2) > Lt ? (Xt *= A ? 1 : -1, D += Xt, P -= Xt) : (G = 0, D = P = (g + y) / 2), (ut -= ie * 2) > Lt ? (ie *= A ? 1 : -1, k += ie, C -= ie) : (ut = 0, k = C = (g + y) / 2);
      }
      var xt = p * yn(k), It = p * Te(k), Tt = c * yn(P), pe = c * Te(P);
      if (Q > Lt) {
        var z = p * yn(C), St = p * Te(C), sn = c * yn(D), Z = c * Te(D), kt;
        if ($ < Vr)
          if (kt = Ad(xt, It, sn, Z, z, St, Tt, pe)) {
            var Ee = xt - kt[0], Re = It - kt[1], Ye = z - kt[0], dt = St - kt[1], He = 1 / Te(_d((Ee * Ye + Re * dt) / (jn(Ee * Ee + Re * Re) * jn(Ye * Ye + dt * dt))) / 2), an = jn(kt[0] * kt[0] + kt[1] * kt[1]);
            gt = ts(Q, (c - an) / (He - 1)), _t = ts(Q, (p - an) / (He + 1));
          } else
            gt = _t = 0;
      }
      ut > Lt ? _t > Lt ? (F = ii(sn, Z, xt, It, p, _t, A), I = ii(z, St, Tt, pe, p, _t, A), o.moveTo(F.cx + F.x01, F.cy + F.y01), _t < Q ? o.arc(F.cx, F.cy, _t, Nt(F.y01, F.x01), Nt(I.y01, I.x01), !A) : (o.arc(F.cx, F.cy, _t, Nt(F.y01, F.x01), Nt(F.y11, F.x11), !A), o.arc(0, 0, p, Nt(F.cy + F.y11, F.cx + F.x11), Nt(I.cy + I.y11, I.cx + I.x11), !A), o.arc(I.cx, I.cy, _t, Nt(I.y11, I.x11), Nt(I.y01, I.x01), !A))) : (o.moveTo(xt, It), o.arc(0, 0, p, k, C, !A)) : o.moveTo(xt, It), !(c > Lt) || !(G > Lt) ? o.lineTo(Tt, pe) : gt > Lt ? (F = ii(Tt, pe, z, St, c, -gt, A), I = ii(xt, It, sn, Z, c, -gt, A), o.lineTo(F.cx + F.x01, F.cy + F.y01), gt < Q ? o.arc(F.cx, F.cy, gt, Nt(F.y01, F.x01), Nt(I.y01, I.x01), !A) : (o.arc(F.cx, F.cy, gt, Nt(F.y01, F.x01), Nt(F.y11, F.x11), !A), o.arc(0, 0, c, Nt(F.cy + F.y11, F.cx + F.x11), Nt(I.cy + I.y11, I.cx + I.x11), A), o.arc(I.cx, I.cy, gt, Nt(I.y11, I.x11), Nt(I.y01, I.x01), !A))) : o.arc(0, 0, c, P, D, A);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Vr / 2;
    return [yn(h) * f, Te(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Dt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Dt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Dt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Dt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Dt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Dt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Dt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Ed(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Rd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Cd(t) {
  return t;
}
function es() {
  var t = Cd, e = Rd, n = null, r = Dt(0), i = Dt(pi), s = Dt(0);
  function a(o) {
    var l, u = (o = Ed(o)).length, f, h, c = 0, p = new Array(u), g = new Array(u), y = +r.apply(this, arguments), $ = Math.min(pi, Math.max(-pi, i.apply(this, arguments) - y)), A, k = Math.min(Math.abs($) / u, s.apply(this, arguments)), C = k * ($ < 0 ? -1 : 1), D;
    for (l = 0; l < u; ++l)
      (D = g[p[l] = l] = +t(o[l], l, o)) > 0 && (c += D);
    for (e != null ? p.sort(function(P, G) {
      return e(g[P], g[G]);
    }) : n != null && p.sort(function(P, G) {
      return n(o[P], o[G]);
    }), l = 0, h = c ? ($ - u * C) / c : 0; l < u; ++l, y = A)
      f = p[l], D = g[f], A = y + (D > 0 ? D * h : 0) + C, g[f] = {
        data: o[f],
        index: l,
        value: D,
        startAngle: y,
        endAngle: A,
        padAngle: k
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Dt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Dt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Dt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Dt(+o), a) : s;
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
var Td = /* @__PURE__ */ Nu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Sd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function ul(t, e) {
  Ts(e, !0), Po(t, Sd);
  let n = vt(e, "jsonData", 7), r = vt(e, "currentRound", 7, 1), i = vt(e, "mouseEventType", 15), s = vt(e, "mouseData", 15), a = vt(e, "mouseX", 15), o = vt(e, "mouseY", 15), l = vt(e, "requestRoundChange", 7, (d) => {
  }), u = vt(e, "candidateColors", 23, () => []), f = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = vt(e, "firstRoundDeterminesPercentages", 7, !1), c = vt(e, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const g = 800, y = 800, $ = Math.min(g, y) * 0.3, A = g / 2, k = y / 2, C = "Pie", D = "PieOutline", P = "Donut", G = "TextLayer", ut = "url(#cross-hatch)", K = 1.15, it = 0.1, Q = 750, gt = 800, _t = "white", F = 1, I = "#ff00ff", Xt = 3;
  function ie(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let xt = [], It = [], Tt = [], pe = 0, z = 0;
  const St = {}, sn = "No Further Rankings";
  let Z = /* @__PURE__ */ yt(null);
  function kt() {
    const d = at(x(Z));
    d.select("#" + C).remove(), d.select("#" + D).remove(), d.select("#" + P).remove(), d.select("#" + G).remove();
  }
  function Ee(d) {
    l() && (ft = d, l()(d));
  }
  function Re(d) {
    kt(), Tt = Ye(d), xt = Gs(d, C, Tt, A, k, 0, dt()), Gs(d, D, Tt, A, k, 0, dt(), !1, !1, !0), $r();
  }
  Iu(() => {
    Mt(), setTimeout(
      () => {
        Re(r());
      },
      0
    );
  });
  function Ye(d) {
    const _ = j(d);
    return pe = yr(d), _;
  }
  function dt() {
    return $;
  }
  function He() {
    return dt() * 1.41;
  }
  function an(d) {
    let _ = 0;
    for (let m = 1; m < d; m++) {
      const E = n().results[m - 1].tallyResults;
      for (let b = 0; b < E.length; b++) {
        const T = E[b].transfers;
        if (T) {
          const N = T.exhausted;
          N && (_ += Number(N));
        }
      }
    }
    return _;
  }
  function Kr(d, _) {
    if (d === "exhausted") return an(_);
    {
      const m = n().results[_ - 1].tally;
      return Number(m[d]);
    }
  }
  function Vi(d, _) {
    return Kr(d, _).toLocaleString("en-US");
  }
  function Bn(d, _) {
    const m = h() ? pe : Yi(_);
    return (Kr(d, _) / m).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function yr(d) {
    const _ = n().results[d - 1].tally;
    let m = 0;
    for (let [E, b] of Object.entries(_))
      m += Number(b);
    return m;
  }
  function Jr(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Yi(d) {
    const _ = n().results[d - 1].tally;
    let m = 0;
    for (let [E, b] of Object.entries(_))
      Jr(E) || (m += Number(b));
    return m;
  }
  function Wn(d, _) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const m = n().results[d - 1].tallyResults, E = [];
    for (let b = 0; b < m.length; b++) {
      const T = m[b][_];
      T != null && E.push(T);
    }
    return E;
  }
  function Un(d) {
    return Wn(d, "eliminated");
  }
  function w(d) {
    let _ = [];
    for (let m = 1; m <= d; m++) _ = _.concat(Wn(m, "elected"));
    return [...new Set(_)];
  }
  function W(d, _) {
    const m = n().results[_ - 1].tallyResults;
    let E = 0;
    const b = m.findIndex((T) => (T == null ? void 0 : T.elected) && d == T.elected);
    if (b >= 0) {
      const T = m[b].transfers;
      if (T)
        for (let [N, V] of Object.entries(T)) E += Number(V);
    } else
      return 0;
    return E;
  }
  function j(d) {
    const _ = n().results;
    let m = _[Math.max(0, d - 2)].tally;
    const E = [], b = [];
    for (let [N, V] of Object.entries(m))
      E.push({ label: N, value: 0 });
    m = _[d - 1].tally;
    for (let N of E)
      N.value = Number(m[N.label]), b.push(N);
    const T = an(d);
    return b.push({ label: "exhausted", value: T }), b;
  }
  function bt(d, _) {
    const m = [];
    for (const E of d) {
      if (E.label === "exhausted" || E.isTransfer) {
        m.push(E);
        continue;
      }
      const b = W(E.label, _);
      b > 0 ? (m.push({
        label: E.label,
        value: b,
        isTransfer: !0
      }), m.push({ ...E, value: E.value - b })) : m.push(E);
    }
    return m;
  }
  function Mt() {
    const d = at(x(Z)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [m, E] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? _ < 10 ? St[m] = vd[_] : St[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : St[m] = u()[_ % u().length], _++;
      {
        const b = d.clone(!0);
        b.attr("id", ie(m)).select("rect").attr("fill", St[m]), b.selectAll("circle").attr("fill", "#383838");
      }
    }
    St.exhausted = ut, St["Inactive Ballots"] = ut;
  }
  function et() {
    at(x(Z)).select("#" + P).remove();
  }
  function $t(d, _) {
    const m = di("global").duration(gt);
    _ && m.on("end", _);
    const E = bt(Tt, d), T = es().sort(null).value((N) => N.value)(E);
    js(d, C, T, 0, dt()), js(d, D, T, 0, dt(), !0), Tt = E, xt = T, et(), br(d), pl(), gl(0, dt()), $r();
  }
  function Bt(d, _) {
    const m = di("global").duration(gt);
    _ && m.on("end", _), Be(d);
  }
  function Pt(d, _) {
    const m = di("global").duration(gt);
    _ && m.on("end", _), wr(d), xr(dt(), He());
  }
  let pt = !1, Ot = [];
  function nt() {
    $r(), pt = !1, Wt();
  }
  function Wt() {
    if (Ot.length === 0) {
      ft !== r() && (r() === ft + 1 && ft > 0 && r() <= n().results.length ? (ft = r(), Ut(r())) : r() >= 1 && r() <= n().results.length && (ft = r(), c(0), Re(r())));
      return;
    }
    const d = Ot.shift();
    switch (d.type) {
      case "round": {
        const _ = d.round;
        _ === ft + 1 && ft > 0 && _ <= n().results.length ? (ft = _, Ut(_)) : (_ !== ft && _ >= 1 && _ <= n().results.length && (ft = _, c(0), Re(_)), Wt());
        break;
      }
      case "step":
        _n();
        break;
    }
  }
  function Ut(d) {
    if (d <= 1 || d > n().results.length) {
      Wt();
      return;
    }
    pt = !0, z = d, c(0), $t(z - 1, () => {
      Bt(z - 1, () => {
        Pt(z, nt);
      });
    });
  }
  function on() {
    pt || (pt = !0, z = r(), gn());
  }
  function gn() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), Ot.length > 0) {
      nt();
      return;
    }
    const d = z < n().results.length - 1 ? gn : nt;
    $t(z, () => {
      Bt(z, () => {
        z++, Ee(z), Pt(z, d);
      });
    });
  }
  Ds(() => {
    Gn();
  });
  let ft = 0;
  function Gn() {
    if (ft != r()) {
      if (pt) {
        Ot.push({ type: "round", round: r() });
        return;
      }
      ft == r() - 1 && ft > 0 ? Xe() : ze(r()), ft = r();
    }
  }
  function ze(d) {
    if (pt) {
      Ot.push({ type: "round", round: d });
      return;
    }
    c(0), Re(d);
  }
  function Xe() {
    if (pt) {
      Ot.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      $r(), pt = !1;
      return;
    }
    pt = !0, c() === 0 ? $t(z - 1, () => {
      Bt(z - 1, () => {
        Pt(z, nt);
      });
    }) : c() === 1 ? Bt(z - 1, () => {
      Pt(z, nt);
    }) : c() === 2 && Pt(z, nt), c(0);
  }
  function _n() {
    if (r() > n().results.length) {
      $r(), pt = !1;
      return;
    }
    if (pt) {
      Ot.push({ type: "step" });
      return;
    }
    pt = !0, c((c() + 1) % 3), z = r(), c() === 1 ? $t(z, nt) : c() === 2 ? Bt(z, nt) : c() === 0 ? (z++, Ee(z), Pt(z, nt)) : (pt = !1, console.warn("displayPhase out of range at ", c()));
  }
  function wr(d) {
    Tt = j(d), xt = Js(d, C, Tt, 0, dt(), !0), Js(d, D, Tt, 0, dt(), !1, !0), at(x(Z)).select("#" + D).selectAll(".eliminated").remove();
  }
  function xr(d, _) {
    const m = at(x(Z)).select("#" + P), b = at(x(Z)).select("#" + C), T = {};
    for (const S of xt) {
      const M = S.data.label;
      if (S.data.isTransfer) continue;
      const R = b.select("#" + CSS.escape(p(S.data)));
      R.empty() || (T[M] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: S.startAngle,
        newEnd: S.endAngle
      });
    }
    const N = m.selectAll(".slice");
    let V = N.size();
    function L() {
      V--, V === 0 && vl();
    }
    N.select("path").transition("global").duration(Q).attrTween("d", function(S) {
      const M = S.startAngle, R = S.endAngle, X = R - M, Kt = T[S.data.label];
      let rt, Ce;
      if (Kt) {
        const Kn = (Kt.oldStart + Kt.oldEnd) / 2, wl = (Kt.newStart + Kt.newEnd) / 2, xl = M - Kn;
        rt = wl + xl, Ce = rt + X;
      } else
        rt = M, Ce = R;
      const tt = Ue(M, rt), se = Ue(R, Ce), Zr = Ue(_, d), Ar = Se();
      return function(Kn) {
        return Ar.innerRadius(Math.min(Zr(Kn), d) - 1).outerRadius(Zr(Kn)).startAngle(tt(Kn)).endAngle(se(Kn)), Ar(S);
      };
    }).on("end", (S) => L());
  }
  function br(d) {
    const _ = fl(d, xt);
    It = Ks(d, P, _, A, k, dt(), He(), !1, !0);
    const m = at(x(Z));
    m.select("#" + C).raise(), m.select("#" + D).raise();
  }
  function Be(d) {
    const _ = hl(d, It, xt);
    It = Qs(d, P, _, dt(), He(), !1);
  }
  function Gt(d) {
    return St[d.data.label];
  }
  function Hi(d) {
    const _ = {}, m = n().results[d - 1].tallyResults;
    for (let E = 0; E < m.length; E++) {
      let b = m[E].eliminated;
      if (b === void 0 && (b = m[E].elected), b === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = m[E].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [N, V] of Object.entries(T))
        _[N] === void 0 ? _[N] = Number(V) : _[N] += Number(V);
    }
    return _;
  }
  function fl(d, _) {
    const m = [], E = pe, b = n().results[d - 1].tallyResults;
    for (let T = 0; T < b.length; T++) {
      let N = b[T].eliminated;
      if (N === void 0 && (N = b[T].elected), N === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const V = b[T].transfers;
      if (V === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let L = _.find((M) => M.data.label == N && M.data.isTransfer);
      L === void 0 && (L = _.find((M) => M.data.label == N && !M.data.isTransfer));
      let S = 0;
      if (L) S = L.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [M, R] of Object.entries(V)) {
        let X;
        const Kt = _.find((tt) => tt.data.label == M);
        if (Kt)
          X = structuredClone(Kt);
        else if (M == "exhausted")
          X = {
            data: { label: M, value: Number(R) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (M == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", R);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", M);
          continue;
        }
        const Ce = Number(R) / E * 2 * Math.PI;
        X.startAngle = S, S = X.endAngle = S + Ce, X.index = T, X.data.transferIndex = T, m.push(X);
      }
    }
    return m;
  }
  function cl(d, _, m) {
    const E = {};
    for (let [b, T] of Object.entries(d)) {
      const N = m.find((S) => b == S.data.label);
      if (N === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", b);
        continue;
      }
      const V = (N.startAngle + N.endAngle) / 2, L = d[N.data.label] / _ * 2 * Math.PI;
      E[N.data.label] = V - L / 2;
    }
    return E;
  }
  function hl(d, _, m) {
    const E = [], b = pe, T = Hi(d), N = cl(T, b, m);
    for (let [V, L] of _.entries()) {
      const S = structuredClone(L), M = L.endAngle - L.startAngle, R = m.find((X) => L.data.label === X.data.label && !X.data.isTransfer);
      if (R) {
        const X = R.data.label;
        S.startAngle = N[X], N[X] += M, S.endAngle = S.startAngle + M;
      } else if (L.data.label === "exhausted")
        S.startAngle = L.startAngle, S.endAngle = L.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", L.data.label);
        continue;
      }
      S.index = V, E.push(S);
    }
    return E;
  }
  function Us(d, _, m, E, b, T) {
    const V = at(x(Z)).append("g").attr("id", G).attr("transform", `translate(${m}, ${E})`), L = Se().innerRadius(b * K).outerRadius(b * K);
    V.selectAll("text").data(_).enter().each(function(S) {
      S.endAngle - S.startAngle < it || S.data.isTransfer || at(this).append("g").attr("id", (M) => p(M.data)).classed("eliminated", (M) => T.includes(M.data.label) || M.data.isTransfer === !0).each(function(M, R) {
        M.data.label === "exhausted" && at(this).on("mouseenter", (X, Kt) => _l(X)).on("mouseleave", (X, Kt) => ml());
      }).append("text").attr("transform", (M) => `translate(${L.centroid(M)})`).attr("text-anchor", (M) => zi(M.startAngle, M.endAngle)).text((M) => M.data.label === "exhausted" ? sn : M.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((M) => {
        const R = Vi(M.data.label, d);
        return !h() && Jr(M.data.label) ? R : R + " (" + Bn(M.data.label, d) + ")";
      });
    });
  }
  function dl(d, _, m, E) {
    const T = at(x(Z)).select("#" + G), N = T.selectAll("tspan"), V = T.selectAll("g").data(_, (R) => p(R.data)).classed("eliminated", (R) => E.includes(R.data.label) || R.data.isTransfer === !0), L = Se().innerRadius(m * K).outerRadius(m * K + 1);
    N.transition("global").duration(Q).attr("transform", (R) => `translate(${L.centroid(R)})`).attr("text-anchor", (R) => zi(R.startAngle, R.endAngle)), V.select("text").transition("global").duration(Q).attr("transform", (R) => `translate(${L.centroid(R)})`).attr("text-anchor", (R) => zi(R.startAngle, R.endAngle)).on("end", (R) => M());
    let S = V.size();
    function M(R) {
      S--, S === 0 && (T.remove(), Us(d, _, A, k, m, E));
    }
  }
  function Gs(d, _, m, E, b, T, N, V = !0, L = !1, S = !1) {
    const R = es().sort(null).value((X) => X.value)(m);
    return Ks(d, _, R, E, b, T, N, V, L, S), R;
  }
  function $r() {
    at(x(Z)).select("#" + D).selectAll(".elected").select("path").style("stroke", I).style("stroke-width", `${Xt}px`);
  }
  function Ks(d, _, m, E, b, T, N, V, L, S = !1) {
    const M = Un(d), R = w(d), rt = at(x(Z)).attr("viewBox", `0 0 ${g} ${y}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${E}, ${b})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (tt) => M.includes(tt.data.label) || tt.data.isTransfer === !0).classed("elected", (tt) => R.includes(tt.data.label) && !tt.data.isTransfer).attr("id", (tt) => p(tt.data));
    S ? rt.style("pointer-events", "none") : rt.on("mouseenter", (tt, se) => Bi(tt, se)).on("mouseleave", (tt, se) => Wi(tt, se));
    const Ce = Se().outerRadius(N).innerRadius(T);
    if (L) {
      const tt = Se().outerRadius(T + 1).innerRadius(T);
      rt.append("path").attr("d", tt).attr("stroke", S ? "none" : _t).attr("stroke-width", S ? 0 : F).attr("fill", "none").transition("global").duration(Q).attr("d", (se) => Ce(se)).attr("fill", S ? "none" : (se) => Gt(se)).on("end", (se) => {
        S || Xi();
      });
    } else
      rt.append("path").attr("d", (tt) => Ce(tt)).attr("fill", S ? "none" : (tt) => Gt(tt)).attr("stroke", S ? "none" : _t).attr("stroke-width", S ? 0 : F), S || Xi();
    return V && !S && Us(d, m, E, b, N, M), m;
  }
  function pl() {
    const m = at(x(Z)).select("#" + G).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function vl() {
    const m = at(x(Z)).select("#" + G).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function gl(d, _) {
    const b = at(x(Z)).select("#" + C).selectAll(".eliminated"), T = Se().innerRadius(d), N = Se().outerRadius(_);
    b.classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(V) {
      const L = Ue(_, d);
      return function(S) {
        return N.innerRadius(L(S)), N(V);
      };
    }).attr("fill", (V) => `url(#${ie(V.data.label)})`), b.clone(!0).classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(V) {
      const L = Ue(_, d);
      return function(S) {
        return T.outerRadius(L(S)), T(V);
      };
    }).attr("fill", (V) => Gt(V));
  }
  function zi(d, _) {
    const m = (d + _) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function Xi() {
    at(x(
      Z
      // force redisplay of text labels
    )).select("#" + G).raise().append("g").remove();
  }
  function Js(d, _, m, E, b, T, N = !1) {
    const L = es().sort(null).value((S) => S.value)(m);
    return Qs(d, _, L, E, b, T, N), L;
  }
  function Zs(d, _, m, E, b = !1) {
    const T = Un(d), N = w(d), S = at(x(Z)).select("#" + _).selectAll(".slice").data(m, (R) => p(R.data)), M = S.enter().append("g").attr("class", "slice").attr("id", (R) => p(R.data)).classed("eliminated", !0);
    return b ? M.style("pointer-events", "none") : M.on("mouseenter", (R, X) => Bi(R, X)).on("mouseleave", (R, X) => Wi(R, X)), M.append("path").attr("d", (R) => E(R)).attr("fill", b ? "none" : (R) => Gt(R)).attr("stroke", b ? "none" : _t).attr("stroke-width", b ? 0 : F), S.classed("eliminated", (R) => T.includes(R.data.label)).classed("elected", (R) => N.includes(R.data.label)), b || S.on("mouseenter", (R, X) => Bi(R, X)).on("mouseleave", (R, X) => Wi(R, X)), S;
  }
  function js(d, _, m, E, b, T = !1) {
    const N = Se().outerRadius(b).innerRadius(E);
    Zs(d, _, m, N, T).select("path").attr("d", (L) => N(L)).attr("fill", T ? "none" : (L) => Gt(L));
  }
  function Qs(d, _, m, E, b, T, N = !1) {
    const V = Se().outerRadius(b).innerRadius(E).startAngle((rt) => rt.startAngle).endAngle((rt) => rt.endAngle), L = Se().outerRadius(b).innerRadius(E), M = at(x(Z)).select("#" + _);
    M.selectAll(".slice").attr("prevStart", (rt) => rt.startAngle).attr("prevEnd", (rt) => rt.endAngle);
    const R = Zs(d, _, m, L, N);
    let X = R.size();
    function Kt() {
      X--, X <= 0 && (N || Xi(), M.selectAll(".finished").remove());
    }
    return R.select("path").transition("global").duration(Q).attrTween("d", function(rt) {
      const Ce = Number(at(this.parentNode).attr("prevStart")), tt = Number(at(this.parentNode).attr("prevEnd")), se = Ue(Ce, rt.startAngle), Zr = Ue(tt, rt.endAngle);
      return (Ar) => (V.startAngle(se(Ar)).endAngle(Zr(Ar)), V(rt));
    }).on("end", Kt), T && !N && dl(d, m, b, Un(d)), m;
  }
  function Bi(d, _) {
    s(_.data.label), i("enter"), a(d.clientX), o(d.clientY);
  }
  function Wi(d, _) {
    s(_.data.label), i("leave");
  }
  function _l(d, _) {
    i("show-exhausted"), a(d.clientX), o(d.clientY);
  }
  function ml(d, _) {
    i("hide-exhausted");
  }
  var yl = {
    pieColors: St,
    exhaustedLabel: sn,
    countExhaustedVotes: an,
    getEliminatedCandidates: Un,
    getElectedCandidates: w,
    runFullAnimationFn: on,
    animateOnePhaseFn: _n,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), ct();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), ct();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), ct();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), ct();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), ct();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), ct();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (_) => {
    }) {
      l(d), ct();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), ct();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), ct();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), ct();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), ct();
    }
  }, ta = Td();
  return li(ta, (d) => ot(Z, d), () => x(Z)), _e(t, ta), Ss(yl);
}
Fo(
  ul,
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
var Nd = /* @__PURE__ */ Xn("<span> </span> <!>", 1), kd = /* @__PURE__ */ Xn("About to eliminate: <!>", 1), Md = /* @__PURE__ */ Xn("<span> </span> <!>", 1), Pd = /* @__PURE__ */ Xn(" <!>", 1), Dd = /* @__PURE__ */ Xn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Fd = /* @__PURE__ */ Xn("<span> </span> <br/>", 1), Id = /* @__PURE__ */ Xn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const Od = {
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
function Ld(t, e) {
  Ts(e, !0), Po(t, Od);
  const n = 0.85;
  let r = vt(e, "electionSummary", 7), i = vt(e, "currentRound", 7, 1), s = vt(e, "requestRoundChange", 7, (w) => {
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
  let c = /* @__PURE__ */ Jn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ yt(null), g = /* @__PURE__ */ yt(null), y = /* @__PURE__ */ yt(""), $ = /* @__PURE__ */ yt($n([])), A = /* @__PURE__ */ yt(""), k = /* @__PURE__ */ yt(""), C = /* @__PURE__ */ yt(0), D = /* @__PURE__ */ yt(0), P = /* @__PURE__ */ Jn(() => G(r()));
  function G(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (W) {
        return console.error("Failed to parse JSON string:", W), {};
      }
    return w || {};
  }
  function ut(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function K(w, W, j) {
    w.style.left = W + "px", w.style.top = j + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const et = w.getBoundingClientRect();
      let $t = W, Bt = j + 20;
      $t + et.width > window.innerWidth - 12 && ($t = window.innerWidth - et.width - 12), $t < 12 && ($t = 12), Bt + et.height > window.innerHeight - 12 && (Bt = j - et.height - 12), w.style.left = $t + "px", w.style.top = Bt + "px";
    });
  }
  function it() {
    switch (x(A)) {
      case "enter":
        ((w) => {
          var W = ql(w, 2);
          ot($, W[0], !0), ot(y, W[1], !0);
        })(gt(x(k), i())), x(p) && (K(x(p), x(C) || 0, x(D) || 0), x(p).style.opacity = String(n));
        break;
      case "leave":
        x(p) && (x(p).style.opacity = "0"), ot($, [], !0), ot(y, "");
        break;
      case "show-exhausted":
        x(g) && (K(x(g), x(C) || 0, x(D) || 0), x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x(A));
        break;
    }
  }
  Ds(() => it());
  function Q(w, W) {
    return w === 1 ? W ? "vote was" : "vote will be" : W ? "votes were" : "votes will be";
  }
  function gt(w, W) {
    const j = [], bt = w === "exhausted" ? z() : w;
    let Mt;
    w === "exhausted" ? Mt = Tt(1) : Mt = x(P).results[0].tally[w], j.push(`${bt} started with ${Mt} votes.`);
    for (let et = 1; et <= W; et++) {
      et === W && (w === "exhausted" ? Mt = Tt(W) : Mt = x(P).results[W - 1].tally[w], j.push(`${bt} has ${Mt} votes at round ${W}.`));
      const $t = x(P).results[et - 1].tallyResults, Bt = ie(et);
      for (let Pt = 0; Pt < $t.length; Pt++) {
        const pt = $t[Pt].transfers, Ot = $t[Pt].eliminated, nt = $t[Pt].elected;
        if (!Bt) {
          if (Ot)
            Ot === w && j.push(`${bt} will be eliminated on round ${et}.`);
          else if (w === nt && (j.push(`${bt} ${x(c).event} on round ${et}.`), pt))
            for (let [Ut, on] of Object.entries(pt))
              j.push(`${on} ${Q(Number(on), et < W)} transferred to ${Ut} on round ${et}.`);
        }
        const Wt = Ot || nt;
        if (Wt) {
          const Ut = Number(pt[w]);
          Ut && j.push(`${Ut} ${Q(Ut, et < W)} transferred from ${Wt} on round ${et}.`);
        }
      }
    }
    return [j, bt];
  }
  function _t() {
    let w = 0;
    for (let W = 1; W <= x(P).results.length; W++) {
      if (ie(W)) continue;
      const j = x(P).results[W - 1].tallyResults;
      for (let bt = 0; bt < j.length; bt++)
        j[bt].elected && w++;
    }
    return w;
  }
  const F = ["Eliminate", "Transfer", "Consolidate"];
  let I, Xt = /* @__PURE__ */ yt(0);
  function ie(w) {
    return l() && x(P).results && w === x(P).results.length;
  }
  function xt(w) {
    return ie(w) ? [] : I ? I.getEliminatedCandidates(w) : [];
  }
  function It(w) {
    return ie(w) ? [] : I ? I.getElectedCandidates(w) : [];
  }
  function Tt(w) {
    return I ? I.countExhaustedVotes(w) : 0;
  }
  function pe() {
    I && I.animateOnePhaseFn && I.animateOnePhaseFn();
  }
  function z() {
    return I ? I.exhaustedLabel : "";
  }
  function St() {
    return I ? I.pieColors : {};
  }
  var sn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ct();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ct();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (W) => {
    }) {
      s(w), ct();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), ct();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), ct();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), ct();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), ct();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), ct();
    }
  }, Z = Id(), kt = mn(Z), Ee = Zt(kt);
  Ee.__click = pe;
  var Re = Zt(Ee, !0);
  Jt(Ee), Jt(kt);
  var Ye = ve(kt, 4), dt = Zt(Ye), He = Zt(dt), an = Zt(He);
  li(
    ul(an, {
      get jsonData() {
        return x(P);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: ut,
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
        return x(A);
      },
      set mouseEventType(w) {
        ot(A, w, !0);
      },
      get mouseData() {
        return x(k);
      },
      set mouseData(w) {
        ot(k, w, !0);
      },
      get mouseX() {
        return x(C);
      },
      set mouseX(w) {
        ot(C, w, !0);
      },
      get mouseY() {
        return x(D);
      },
      set mouseY(w) {
        ot(D, w, !0);
      },
      get displayPhase() {
        return x(Xt);
      },
      set displayPhase(w) {
        ot(Xt, w, !0);
      }
    }),
    (w) => I = w,
    () => I
  ), Jt(He), Jt(dt);
  var Kr = ve(dt, 2);
  {
    var Vi = (w) => {
      var W = Dd(), j = mn(W), bt = Zt(j);
      Jt(j);
      var Mt = ve(j, 2), et = Zt(Mt);
      {
        var $t = (nt) => {
          var Wt = kd(), Ut = ve(mn(Wt));
          Ji(Ut, 17, () => xt(i()), Ki, (on, gn, ft) => {
            var Gn = Nd(), ze = mn(Gn);
            let Xe;
            var _n = Zt(ze, !0);
            Jt(ze);
            var wr = ve(ze, 2);
            {
              var xr = (Be) => {
                var Gt = fa(", ");
                _e(Be, Gt);
              }, br = /* @__PURE__ */ Jn(() => ft < xt(i()).length - 1);
              Er(wr, (Be) => {
                x(br) && Be(xr);
              });
            }
            Zn(
              (Be) => {
                Xe = da(ze, "", Xe, Be), ln(_n, x(gn));
              },
              [() => ({ color: St()[x(gn)] })]
            ), _e(on, Gn);
          }), _e(nt, Wt);
        }, Bt = /* @__PURE__ */ Jn(() => xt(i()).length > 0);
        Er(et, (nt) => {
          x(Bt) && nt($t);
        });
      }
      var Pt = ve(et, 2);
      {
        var pt = (nt) => {
          var Wt = Pd(), Ut = mn(Wt), on = ve(Ut);
          Ji(on, 17, () => It(i()), Ki, (gn, ft, Gn) => {
            var ze = Md(), Xe = mn(ze);
            let _n;
            var wr = Zt(Xe, !0);
            Jt(Xe);
            var xr = ve(Xe, 2);
            {
              var br = (Gt) => {
                var Hi = fa(", ");
                _e(Gt, Hi);
              }, Be = /* @__PURE__ */ Jn(() => Gn < It(i()).length - 1);
              Er(xr, (Gt) => {
                x(Be) && Gt(br);
              });
            }
            Zn(
              (Gt) => {
                _n = da(Xe, "", _n, Gt), ln(wr, x(ft));
              },
              [() => ({ color: St()[x(ft)] })]
            ), _e(gn, ze);
          }), Zn(() => ln(Ut, `${x(c).caption ?? ""}: `)), _e(nt, Wt);
        }, Ot = /* @__PURE__ */ Jn(() => It(i()).length > 0);
        Er(Pt, (nt) => {
          x(Ot) && nt(pt);
        });
      }
      Jt(Mt), Zn((nt) => ln(bt, `${x(P).config.contest ?? ""}, ${nt ?? ""} ${x(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [_t]), _e(w, W);
    };
    Er(Kr, (w) => {
      f() && w(Vi);
    });
  }
  Jt(Ye);
  var Bn = ve(Ye, 2), yr = Zt(Bn), Jr = Zt(yr, !0);
  Jt(yr);
  var Yi = ve(yr, 2);
  Ji(Yi, 17, () => x($), Ki, (w, W) => {
    var j = Fd(), bt = mn(j), Mt = Zt(bt, !0);
    Jt(bt), is(2), Zn(() => ln(Mt, x(W))), _e(w, j);
  }), Jt(Bn), li(Bn, (w) => ot(p, w), () => x(p));
  var Wn = ve(Bn, 2), Un = Zt(Wn);
  return is(2), Jt(Wn), li(Wn, (w) => ot(g, w), () => x(g)), Zn(
    (w) => {
      ln(Re, F[x(Xt)]), ln(Jr, x(y)), ln(Un, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [z]
  ), _e(t, Z), Ss(sn);
}
Cu(["click"]);
customElements.define("pie-chart", Fo(
  Ld,
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
