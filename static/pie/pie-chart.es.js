var Al = Object.defineProperty;
var na = (t) => {
  throw TypeError(t);
};
var El = (t, e, n) => e in t ? Al(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => El(t, typeof e != "symbol" ? e + "" : e, n), Gi = (t, e, n) => e.has(t) || na("Cannot " + n);
var v = (t, e, n) => (Gi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), q = (t, e, n) => e.has(t) ? na("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), O = (t, e, n, r) => (Gi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), mt = (t, e, n) => (Gi(t, e, "access private method"), n);
var Pa;
typeof window < "u" && ((Pa = window.__svelte ?? (window.__svelte = {})).v ?? (Pa.v = /* @__PURE__ */ new Set())).add("5");
const Rl = 1, Cl = 2, Tl = 16, Sl = 1, Nl = 4, kl = 8, Ml = 16, Pl = 2, Rs = "[", Si = "[!", Cs = "]", ur = {}, $t = Symbol(), Dl = "http://www.w3.org/1999/xhtml", rs = !1;
var Ia = Array.isArray, Fl = Array.prototype.indexOf, fr = Array.prototype.includes, Ni = Array.from, gi = Object.keys, _i = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, Il = Object.prototype, Ol = Array.prototype, Ll = Object.getPrototypeOf, ra = Object.isExtensible;
const ql = () => {
};
function Vl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Oa() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Yl(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, Lr = 4, ki = 8, La = 1 << 24, sn = 16, xe = 32, vn = 64, qa = 128, ae = 512, wt = 1024, Rt = 2048, we = 4096, jt = 8192, en = 16384, mr = 32768, cr = 65536, ia = 1 << 17, Va = 1 << 18, zn = 1 << 19, Hl = 1 << 20, cn = 1 << 25, On = 65536, is = 1 << 21, Ts = 1 << 22, hn = 1 << 23, Fr = Symbol("$state"), Ya = Symbol("legacy props"), xn = new class extends Error {
  constructor() {
    super(...arguments);
    ot(this, "name", "StaleReactionError");
    ot(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Kr = 3, yr = 8;
function zl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Xl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Wl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ul() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Zl(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ql() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function eu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Mi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function nu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let J = !1;
function tn(t) {
  J = t;
}
let H;
function Ht(t) {
  if (t === null)
    throw Mi(), ur;
  return H = t;
}
function Pi() {
  return Ht(/* @__PURE__ */ Oe(H));
}
function Ut(t) {
  if (J) {
    if (/* @__PURE__ */ Oe(H) !== null)
      throw Mi(), ur;
    H = t;
  }
}
function ss(t = 1) {
  if (J) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n);
    H = n;
  }
}
function mi(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === yr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Cs) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Rs || r === Si || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n)
    );
    t && n.remove(), n = i;
  }
}
function Ha(t) {
  if (!t || t.nodeType !== yr)
    throw Mi(), ur;
  return (
    /** @type {Comment} */
    t.data
  );
}
function za(t) {
  return t === this.v;
}
function ru(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Xa(t) {
  return !ru(t, this.v);
}
let iu = !1, Qt = null;
function hr(t) {
  Qt = t;
}
function Ss(t, e = !1, n) {
  Qt = {
    p: Qt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Ns(t) {
  var e = (
    /** @type {ComponentContext} */
    Qt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      go(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Qt = e.p, t ?? /** @type {T} */
  {};
}
function Ba() {
  return !0;
}
let bn = [];
function Wa() {
  var t = bn;
  bn = [], Vl(t);
}
function Pn(t) {
  if (bn.length === 0 && !Ir) {
    var e = bn;
    queueMicrotask(() => {
      e === bn && Wa();
    });
  }
  bn.push(t);
}
function su() {
  for (; bn.length > 0; )
    Wa();
}
function Ua(t) {
  var e = U;
  if (e === null)
    return Y.f |= hn, t;
  if ((e.f & mr) === 0 && (e.f & Lr) === 0)
    throw t;
  dr(t, e);
}
function dr(t, e) {
  for (; e !== null; ) {
    if ((e.f & qa) !== 0) {
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
const au = -7169;
function ut(t, e) {
  t.f = t.f & au | e;
}
function ks(t) {
  (t.f & ae) !== 0 || t.deps === null ? ut(t, wt) : ut(t, we);
}
function Ga(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Et) === 0 || (e.f & On) === 0 || (e.f ^= On, Ga(
        /** @type {Derived} */
        e.deps
      ));
}
function Ka(t, e, n) {
  (t.f & Rt) !== 0 ? e.add(t) : (t.f & we) !== 0 && n.add(t), Ga(t.deps), ut(t, wt);
}
const Qr = /* @__PURE__ */ new Set();
let B = null, At = null, qt = [], Di = null, as = !1, Ir = !1;
var nr, rr, Rn, ir, Xr, Br, Cn, Ke, sr, Ie, os, ls, Ja;
const Us = class Us {
  constructor() {
    q(this, Ie);
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
    q(this, nr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, rr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, Rn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    q(this, ir, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, Xr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, Br, /* @__PURE__ */ new Set());
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
    q(this, Ke, /* @__PURE__ */ new Map());
    ot(this, "is_fork", !1);
    q(this, sr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, ir) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Ke).has(e) || v(this, Ke).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, Ke).get(e);
    if (n) {
      v(this, Ke).delete(e);
      for (var r of n.d)
        ut(r, Rt), me(r);
      for (r of n.m)
        ut(r, we), me(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    qt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      mt(this, Ie, os).call(this, s, n, r);
    if (this.is_deferred()) {
      mt(this, Ie, ls).call(this, r), mt(this, Ie, ls).call(this, n);
      for (const [s, a] of v(this, Ke))
        to(s, a);
    } else {
      for (const s of v(this, nr)) s();
      v(this, nr).clear(), v(this, Rn) === 0 && mt(this, Ie, Ja).call(this), B = null, sa(r), sa(n), (i = v(this, Xr)) == null || i.resolve();
    }
    At = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== $t && !this.previous.has(e) && this.previous.set(e, n), (e.f & hn) === 0 && (this.current.set(e, e.v), At == null || At.set(e, e.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, At = null);
  }
  flush() {
    if (this.activate(), qt.length > 0) {
      if (Za(), B !== null && B !== this)
        return;
    } else v(this, Rn) === 0 && this.process([]);
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
    O(this, Rn, v(this, Rn) + 1), e && O(this, ir, v(this, ir) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    O(this, Rn, v(this, Rn) - 1), e && O(this, ir, v(this, ir) - 1), !v(this, sr) && (O(this, sr, !0), Pn(() => {
      O(this, sr, !1), this.is_deferred() ? qt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Br))
      v(this, Cn).delete(e), ut(e, Rt), me(e);
    for (const e of v(this, Cn))
      ut(e, we), me(e);
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
    return (v(this, Xr) ?? O(this, Xr, Oa())).promise;
  }
  static ensure() {
    if (B === null) {
      const e = B = new Us();
      Qr.add(B), Ir || Pn(() => {
        B === e && e.flush();
      });
    }
    return B;
  }
  apply() {
  }
};
nr = new WeakMap(), rr = new WeakMap(), Rn = new WeakMap(), ir = new WeakMap(), Xr = new WeakMap(), Br = new WeakMap(), Cn = new WeakMap(), Ke = new WeakMap(), sr = new WeakMap(), Ie = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
os = function(e, n, r) {
  e.f ^= wt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (xe | vn)) !== 0, l = o && (a & wt) !== 0, u = l || (a & jt) !== 0 || v(this, Ke).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= wt : s !== null && (a & (Lr | ki | La)) !== 0 ? s.b.defer_effect(i) : (a & Lr) !== 0 ? n.push(i) : Jr(i) && ((a & sn) !== 0 && v(this, Cn).add(i), vr(i));
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
ls = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ka(e[n], v(this, Br), v(this, Cn));
}, Ja = function() {
  var i;
  if (Qr.size > 1) {
    this.previous.clear();
    var e = At, n = !0;
    for (const s of Qr) {
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
        var r = qt;
        qt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          ja(f, o, l, u);
        if (qt.length > 0) {
          B = s, s.apply();
          for (const f of qt)
            mt(i = s, Ie, os).call(i, f, [], []);
          s.deactivate();
        }
        qt = r;
      }
    }
    B = null, At = e;
  }
  this.committed = !0, Qr.delete(this);
};
let nn = Us;
function ht(t) {
  var e = Ir;
  Ir = !0;
  try {
    for (var n; ; ) {
      if (su(), qt.length === 0 && (B == null || B.flush(), qt.length === 0))
        return Di = null, /** @type {T} */
        n;
      Za();
    }
  } finally {
    Ir = e;
  }
}
function Za() {
  as = !0;
  var t = null;
  try {
    for (var e = 0; qt.length > 0; ) {
      var n = nn.ensure();
      if (e++ > 1e3) {
        var r, i;
        ou();
      }
      n.process(qt), dn.clear();
    }
  } finally {
    qt = [], as = !1, Di = null;
  }
}
function ou() {
  try {
    Kl();
  } catch (t) {
    dr(t, Di);
  }
}
let pe = null;
function sa(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (en | jt)) === 0 && Jr(r) && (pe = /* @__PURE__ */ new Set(), vr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yo(r), (pe == null ? void 0 : pe.size) > 0)) {
        dn.clear();
        for (const i of pe) {
          if ((i.f & (en | jt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            pe.has(a) && (pe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (en | jt)) === 0 && vr(l);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function ja(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Et) !== 0 ? ja(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Ts | sn)) !== 0 && (s & Rt) === 0 && Qa(i, e, r) && (ut(i, Rt), me(
        /** @type {Effect} */
        i
      ));
    }
}
function Qa(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (fr.call(e, i))
        return !0;
      if ((i.f & Et) !== 0 && Qa(
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
function me(t) {
  for (var e = Di = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (as && e === U && (n & sn) !== 0 && (n & Va) === 0)
      return;
    if ((n & (vn | xe)) !== 0) {
      if ((n & wt) === 0) return;
      e.f ^= wt;
    }
  }
  qt.push(e);
}
function to(t, e) {
  if (!((t.f & xe) !== 0 && (t.f & wt) !== 0)) {
    (t.f & Rt) !== 0 ? e.d.push(t) : (t.f & we) !== 0 && e.m.push(t), ut(t, wt);
    for (var n = t.first; n !== null; )
      to(n, e), n = n.next;
  }
}
function lu(t) {
  let e = 0, n = Ln(0), r;
  return () => {
    Ds() && (x(n), Is(() => (e === 0 && (r = Oi(() => t(() => Or(n)))), e += 1, () => {
      Pn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Or(n));
      });
    })));
  };
}
var uu = cr | zn | qa;
function fu(t, e, n) {
  new cu(t, e, n);
}
var Jt, Wr, Se, Tn, Ne, re, Lt, ke, Je, fn, Sn, Ze, ar, Nn, or, lr, je, Ci, dt, eo, no, us, ai, oi, fs;
class cu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    q(this, dt);
    /** @type {Boundary | null} */
    ot(this, "parent");
    ot(this, "is_pending", !1);
    /** @type {TemplateNode} */
    q(this, Jt);
    /** @type {TemplateNode | null} */
    q(this, Wr, J ? H : null);
    /** @type {BoundaryProps} */
    q(this, Se);
    /** @type {((anchor: Node) => void)} */
    q(this, Tn);
    /** @type {Effect} */
    q(this, Ne);
    /** @type {Effect | null} */
    q(this, re, null);
    /** @type {Effect | null} */
    q(this, Lt, null);
    /** @type {Effect | null} */
    q(this, ke, null);
    /** @type {DocumentFragment | null} */
    q(this, Je, null);
    /** @type {TemplateNode | null} */
    q(this, fn, null);
    q(this, Sn, 0);
    q(this, Ze, 0);
    q(this, ar, !1);
    q(this, Nn, !1);
    /** @type {Set<Effect>} */
    q(this, or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, lr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, je, null);
    q(this, Ci, lu(() => (O(this, je, Ln(v(this, Sn))), () => {
      O(this, je, null);
    })));
    O(this, Jt, e), O(this, Se, n), O(this, Tn, r), this.parent = /** @type {Effect} */
    U.b, this.is_pending = !!v(this, Se).pending, O(this, Ne, Os(() => {
      if (U.b = this, J) {
        const s = v(this, Wr);
        Pi(), /** @type {Comment} */
        s.nodeType === yr && /** @type {Comment} */
        s.data === Si ? mt(this, dt, no).call(this) : (mt(this, dt, eo).call(this), v(this, Ze) === 0 && (this.is_pending = !1));
      } else {
        var i = mt(this, dt, us).call(this);
        try {
          O(this, re, se(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, Ze) > 0 ? mt(this, dt, oi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, fn)) == null || s.remove();
      };
    }, uu)), J && O(this, Jt, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ka(e, v(this, or), v(this, lr));
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
    mt(this, dt, fs).call(this, e), O(this, Sn, v(this, Sn) + e), !(!v(this, je) || v(this, ar)) && (O(this, ar, !0), Pn(() => {
      O(this, ar, !1), v(this, je) && pr(v(this, je), v(this, Sn));
    }));
  }
  get_effect_pending() {
    return v(this, Ci).call(this), x(
      /** @type {Source<number>} */
      v(this, je)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Se).onerror;
    let r = v(this, Se).failed;
    if (v(this, Nn) || !n && !r)
      throw e;
    v(this, re) && (Dt(v(this, re)), O(this, re, null)), v(this, Lt) && (Dt(v(this, Lt)), O(this, Lt, null)), v(this, ke) && (Dt(v(this, ke)), O(this, ke, null)), J && (Ht(
      /** @type {TemplateNode} */
      v(this, Wr)
    ), ss(), Ht(mi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        nu();
        return;
      }
      i = !0, s && eu(), nn.ensure(), O(this, Sn, 0), v(this, ke) !== null && Dn(v(this, ke), () => {
        O(this, ke, null);
      }), this.is_pending = this.has_pending_snippet(), O(this, re, mt(this, dt, ai).call(this, () => (O(this, Nn, !1), se(() => v(this, Tn).call(this, v(this, Jt)))))), v(this, Ze) > 0 ? mt(this, dt, oi).call(this) : this.is_pending = !1;
    };
    Pn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        dr(o, v(this, Ne) && v(this, Ne).parent);
      }
      r && O(this, ke, mt(this, dt, ai).call(this, () => {
        nn.ensure(), O(this, Nn, !0);
        try {
          return se(() => {
            r(
              v(this, Jt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return dr(
            o,
            /** @type {Effect} */
            v(this, Ne).parent
          ), null;
        } finally {
          O(this, Nn, !1);
        }
      }));
    });
  }
}
Jt = new WeakMap(), Wr = new WeakMap(), Se = new WeakMap(), Tn = new WeakMap(), Ne = new WeakMap(), re = new WeakMap(), Lt = new WeakMap(), ke = new WeakMap(), Je = new WeakMap(), fn = new WeakMap(), Sn = new WeakMap(), Ze = new WeakMap(), ar = new WeakMap(), Nn = new WeakMap(), or = new WeakMap(), lr = new WeakMap(), je = new WeakMap(), Ci = new WeakMap(), dt = new WeakSet(), eo = function() {
  try {
    O(this, re, se(() => v(this, Tn).call(this, v(this, Jt))));
  } catch (e) {
    this.error(e);
  }
}, no = function() {
  const e = v(this, Se).pending;
  e && (O(this, Lt, se(() => e(v(this, Jt)))), Pn(() => {
    var n = mt(this, dt, us).call(this);
    O(this, re, mt(this, dt, ai).call(this, () => (nn.ensure(), se(() => v(this, Tn).call(this, n))))), v(this, Ze) > 0 ? mt(this, dt, oi).call(this) : (Dn(
      /** @type {Effect} */
      v(this, Lt),
      () => {
        O(this, Lt, null);
      }
    ), this.is_pending = !1);
  }));
}, us = function() {
  var e = v(this, Jt);
  return this.is_pending && (O(this, fn, le()), v(this, Jt).before(v(this, fn)), e = v(this, fn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ai = function(e) {
  var n = U, r = Y, i = Qt;
  Fe(v(this, Ne)), ue(v(this, Ne)), hr(v(this, Ne).ctx);
  try {
    return e();
  } catch (s) {
    return Ua(s), null;
  } finally {
    Fe(n), ue(r), hr(i);
  }
}, oi = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Se).pending
  );
  v(this, re) !== null && (O(this, Je, document.createDocumentFragment()), v(this, Je).append(
    /** @type {TemplateNode} */
    v(this, fn)
  ), bo(v(this, re), v(this, Je))), v(this, Lt) === null && O(this, Lt, se(() => e(v(this, Jt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
fs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && mt(n = this.parent, dt, fs).call(n, e);
    return;
  }
  if (O(this, Ze, v(this, Ze) + e), v(this, Ze) === 0) {
    this.is_pending = !1;
    for (const r of v(this, or))
      ut(r, Rt), me(r);
    for (const r of v(this, lr))
      ut(r, we), me(r);
    v(this, or).clear(), v(this, lr).clear(), v(this, Lt) && Dn(v(this, Lt), () => {
      O(this, Lt, null);
    }), v(this, Je) && (v(this, Jt).before(v(this, Je)), O(this, Je, null));
  }
};
function hu(t, e, n, r) {
  const i = Fi;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = B, o = (
    /** @type {Effect} */
    U
  ), l = du(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & en) === 0 && dr(p, o);
    }
    a == null || a.deactivate(), cs();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ pu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => dr(c, o));
  }
  u ? u.then(d) : d();
}
function du() {
  var t = U, e = Y, n = Qt, r = B;
  return function(s = !0) {
    Fe(t), ue(e), hr(n), s && (r == null || r.activate());
  };
}
function cs() {
  Fe(null), ue(null), hr(null);
}
// @__NO_SIDE_EFFECTS__
function Fi(t) {
  var e = Et | Rt, n = Y !== null && (Y.f & Et) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return U !== null && (U.f |= zn), {
    ctx: Qt,
    deps: null,
    effects: null,
    equals: za,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $t
    ),
    wv: 0,
    parent: n ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function pu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && Xl();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ln(
    /** @type {V} */
    $t
  ), o = !Y, l = /* @__PURE__ */ new Map();
  return Au(() => {
    var p;
    var u = Oa();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === B && f.committed && f.deactivate(), cs();
      });
    } catch (g) {
      u.reject(g), cs();
    }
    var f = (
      /** @type {Batch} */
      B
    );
    if (o) {
      var d = i.is_rendered();
      i.update_pending_count(1), f.increment(d), (p = l.get(f)) == null || p.reject(xn), l.delete(f), l.set(f, u);
    }
    const c = (g, y = void 0) => {
      if (f.activate(), y)
        y !== xn && (a.f |= hn, pr(a, y));
      else {
        (a.f & hn) !== 0 && (a.f ^= hn), pr(a, g);
        for (const [$, E] of l) {
          if (l.delete($), $ === f) break;
          E.reject(xn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(d));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), xu(() => {
    for (const u of l.values())
      u.reject(xn);
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
function jn(t) {
  const e = /* @__PURE__ */ Fi(t);
  return $o(e), e;
}
// @__NO_SIDE_EFFECTS__
function ro(t) {
  const e = /* @__PURE__ */ Fi(t);
  return e.equals = Xa, e;
}
function vu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Dt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function gu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & en) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ms(t) {
  var e, n = U;
  Fe(gu(t));
  try {
    t.f &= ~On, vu(t), e = Co(t);
  } finally {
    Fe(n);
  }
  return e;
}
function io(t) {
  var e = Ms(t);
  if (!t.equals(e) && (t.wv = Eo(), (!(B != null && B.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    ut(t, wt);
    return;
  }
  pn || (At !== null ? (Ds() || B != null && B.is_fork) && At.set(t, e) : ks(t));
}
function _u(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(xn), r.teardown = ql, r.ac = null, qr(r, 0), Ls(r));
}
function so(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && vr(e);
}
let hs = /* @__PURE__ */ new Set();
const dn = /* @__PURE__ */ new Map();
let ao = !1;
function Ln(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: za,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function yt(t, e) {
  const n = Ln(t);
  return $o(n), n;
}
// @__NO_SIDE_EFFECTS__
function oo(t, e = !1, n = !0) {
  const r = Ln(t);
  return e || (r.equals = Xa), r;
}
function lt(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ye || (Y.f & ia) !== 0) && Ba() && (Y.f & (Et | sn | Ts | ia)) !== 0 && (oe === null || !fr.call(oe, t)) && tu();
  let r = n ? $n(e) : e;
  return pr(t, r);
}
function pr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    pn ? dn.set(t, e) : dn.set(t, n), t.v = e;
    var r = nn.ensure();
    if (r.capture(t, n), (t.f & Et) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Rt) !== 0 && Ms(i), ks(i);
    }
    t.wv = Eo(), lo(t, Rt), U !== null && (U.f & wt) !== 0 && (U.f & (xe | vn)) === 0 && (ne === null ? Cu([t]) : ne.push(t)), !r.is_fork && hs.size > 0 && !ao && mu();
  }
  return e;
}
function mu() {
  ao = !1;
  for (const t of hs)
    (t.f & wt) !== 0 && ut(t, we), Jr(t) && vr(t);
  hs.clear();
}
function Or(t) {
  lt(t, t.v + 1);
}
function lo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Rt) === 0;
      if (o && ut(s, e), (a & Et) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        At == null || At.delete(l), (a & On) === 0 && (a & ae && (s.f |= On), lo(l, we));
      } else o && ((a & sn) !== 0 && pe !== null && pe.add(
        /** @type {Effect} */
        s
      ), me(
        /** @type {Effect} */
        s
      ));
    }
}
function $n(t) {
  if (typeof t != "object" || t === null || Fr in t)
    return t;
  const e = Ll(t);
  if (e !== Il && e !== Ol)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ia(t), i = /* @__PURE__ */ yt(0), s = Fn, a = (o) => {
    if (Fn === s)
      return o();
    var l = Y, u = Fn;
    ue(null), la(s);
    var f = o();
    return ue(l), la(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ yt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && jl();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var d = /* @__PURE__ */ yt(u.value);
          return n.set(l, d), d;
        }) : lt(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ yt($t));
            n.set(l, f), Or(i);
          }
        } else
          lt(u, $t), Or(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Fr)
          return t;
        var f = n.get(l), d = l in o;
        if (f === void 0 && (!d || (p = Mn(o, l)) != null && p.writable) && (f = a(() => {
          var g = $n(d ? o[l] : $t), y = /* @__PURE__ */ yt(g);
          return y;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === $t ? void 0 : c;
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
          if (d !== void 0 && c !== $t)
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
        if (l === Fr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== $t || Reflect.has(o, l);
        if (u !== void 0 || U !== null && (!f || (c = Mn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? $n(o[l]) : $t, g = /* @__PURE__ */ yt(p);
            return g;
          }), n.set(l, u));
          var d = x(u);
          if (d === $t)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var C;
        var d = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var g = n.get(p + "");
            g !== void 0 ? lt(g, $t) : p in o && (g = a(() => /* @__PURE__ */ yt($t)), n.set(p + "", g));
          }
        if (d === void 0)
          (!c || (C = Mn(o, l)) != null && C.writable) && (d = a(() => /* @__PURE__ */ yt(void 0)), lt(d, $n(u)), n.set(l, d));
        else {
          c = d.v !== $t;
          var y = a(() => $n(u));
          lt(d, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(o, l);
        if ($ != null && $.set && $.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= E.v && lt(E, N + 1);
          }
          Or(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var c = n.get(d);
          return c === void 0 || c.v !== $t;
        });
        for (var [u, f] of n)
          f.v !== $t && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ql();
      }
    }
  );
}
var aa, uo, fo, co;
function ds() {
  if (aa === void 0) {
    aa = window, uo = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    fo = Mn(e, "firstChild").get, co = Mn(e, "nextSibling").get, ra(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ra(n) && (n.__t = void 0);
  }
}
function le(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function qn(t) {
  return (
    /** @type {TemplateNode | null} */
    fo.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  return (
    /** @type {TemplateNode | null} */
    co.call(t)
  );
}
function Gt(t, e) {
  if (!J)
    return /* @__PURE__ */ qn(t);
  var n = /* @__PURE__ */ qn(H);
  if (n === null)
    n = H.appendChild(le());
  else if (e && n.nodeType !== Kr) {
    var r = le();
    return n == null || n.before(r), Ht(r), r;
  }
  return e && Ii(
    /** @type {Text} */
    n
  ), Ht(n), n;
}
function mn(t, e = !1) {
  if (!J) {
    var n = /* @__PURE__ */ qn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Oe(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Kr) {
      var r = le();
      return H == null || H.before(r), Ht(r), r;
    }
    Ii(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function de(t, e = 1, n = !1) {
  let r = J ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(r);
  if (!J)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Kr) {
      var s = le();
      return r === null ? i == null || i.after(s) : r.before(s), Ht(s), s;
    }
    Ii(
      /** @type {Text} */
      r
    );
  }
  return Ht(r), r;
}
function ho(t) {
  t.textContent = "";
}
function po() {
  return !1;
}
function Ps(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Dl, t, void 0)
  );
}
function Ii(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Kr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function vo(t) {
  var e = Y, n = U;
  ue(null), Fe(null);
  try {
    return t();
  } finally {
    ue(e), Fe(n);
  }
}
function yu(t) {
  U === null && (Y === null && Gl(), Ul()), pn && Wl();
}
function wu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Le(t, e, n) {
  var r = U;
  r !== null && (r.f & jt) !== 0 && (t |= jt);
  var i = {
    ctx: Qt,
    deps: null,
    nodes: null,
    f: t | Rt | ae,
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
      throw Dt(i), o;
    }
  else e !== null && me(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & zn) === 0 && (s = s.first, (t & sn) !== 0 && (t & cr) !== 0 && s !== null && (s.f |= cr)), s !== null && (s.parent = r, r !== null && wu(s, r), Y !== null && (Y.f & Et) !== 0 && (t & vn) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ds() {
  return Y !== null && !ye;
}
function xu(t) {
  const e = Le(ki, null, !1);
  return ut(e, wt), e.teardown = t, e;
}
function Fs(t) {
  yu();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !Y && (e & xe) !== 0 && (e & mr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Qt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return go(t);
}
function go(t) {
  return Le(Lr | Hl, t, !1);
}
function bu(t) {
  nn.ensure();
  const e = Le(vn | zn, t, !0);
  return () => {
    Dt(e);
  };
}
function $u(t) {
  nn.ensure();
  const e = Le(vn | zn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dn(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function _o(t) {
  return Le(Lr, t, !1);
}
function Au(t) {
  return Le(Ts | zn, t, !0);
}
function Is(t, e = 0) {
  return Le(ki | e, t, !0);
}
function Qn(t, e = [], n = [], r = []) {
  hu(r, e, n, (i) => {
    Le(ki, () => t(...i.map(x)), !0);
  });
}
function Os(t, e = 0) {
  var n = Le(sn | e, t, !0);
  return n;
}
function se(t) {
  return Le(xe | zn, t, !0);
}
function mo(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = pn, r = Y;
    oa(!0), ue(null);
    try {
      e.call(null);
    } finally {
      oa(n), ue(r);
    }
  }
}
function Ls(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && vo(() => {
      i.abort(xn);
    });
    var r = n.next;
    (n.f & vn) !== 0 ? n.parent = null : Dt(n, e), n = r;
  }
}
function Eu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & xe) === 0 && Dt(e), e = n;
  }
}
function Dt(t, e = !0) {
  var n = !1;
  (e || (t.f & Va) !== 0) && t.nodes !== null && t.nodes.end !== null && (Ru(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ls(t, e && !n), qr(t, 0), ut(t, en);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  mo(t);
  var i = t.parent;
  i !== null && i.first !== null && yo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Ru(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Oe(t);
    t.remove(), t = n;
  }
}
function yo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Dn(t, e, n = !0) {
  var r = [];
  wo(t, r, !0);
  var i = () => {
    n && Dt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function wo(t, e, n) {
  if ((t.f & jt) === 0) {
    t.f ^= jt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & cr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xe) !== 0 && (t.f & sn) !== 0;
      wo(i, e, a ? n : !1), i = s;
    }
  }
}
function qs(t) {
  xo(t, !0);
}
function xo(t, e) {
  if ((t.f & jt) !== 0) {
    t.f ^= jt, (t.f & wt) === 0 && (ut(t, Rt), me(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & cr) !== 0 || (n.f & xe) !== 0;
      xo(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function bo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Oe(n);
      e.append(n), n = i;
    }
}
let li = !1, pn = !1;
function oa(t) {
  pn = t;
}
let Y = null, ye = !1;
function ue(t) {
  Y = t;
}
let U = null;
function Fe(t) {
  U = t;
}
let oe = null;
function $o(t) {
  Y !== null && (oe === null ? oe = [t] : oe.push(t));
}
let Vt = null, Kt = 0, ne = null;
function Cu(t) {
  ne = t;
}
let Ao = 1, An = 0, Fn = An;
function la(t) {
  Fn = t;
}
function Eo() {
  return ++Ao;
}
function Jr(t) {
  var e = t.f;
  if ((e & Rt) !== 0)
    return !0;
  if (e & Et && (t.f &= ~On), (e & we) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Jr(
        /** @type {Derived} */
        s
      ) && io(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & ae) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    At === null && ut(t, wt);
  }
  return !1;
}
function Ro(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(oe !== null && fr.call(oe, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Et) !== 0 ? Ro(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ut(s, Rt) : (s.f & wt) !== 0 && ut(s, we), me(
        /** @type {Effect} */
        s
      ));
    }
}
function Co(t) {
  var y;
  var e = Vt, n = Kt, r = ne, i = Y, s = oe, a = Qt, o = ye, l = Fn, u = t.f;
  Vt = /** @type {null | Value[]} */
  null, Kt = 0, ne = null, Y = (u & (xe | vn)) === 0 ? t : null, oe = null, hr(t.ctx), ye = !1, Fn = ++An, t.ac !== null && (vo(() => {
    t.ac.abort(xn);
  }), t.ac = null);
  try {
    t.f |= is;
    var f = (
      /** @type {Function} */
      t.fn
    ), d = f();
    t.f |= mr;
    var c = t.deps, p = B == null ? void 0 : B.is_fork;
    if (Vt !== null) {
      var g;
      if (p || qr(t, Kt), c !== null && Kt > 0)
        for (c.length = Kt + Vt.length, g = 0; g < Vt.length; g++)
          c[Kt + g] = Vt[g];
      else
        t.deps = c = Vt;
      if (Ds() && (t.f & ae) !== 0)
        for (g = Kt; g < c.length; g++)
          ((y = c[g]).reactions ?? (y.reactions = [])).push(t);
    } else !p && c !== null && Kt < c.length && (qr(t, Kt), c.length = Kt);
    if (Ba() && ne !== null && !ye && c !== null && (t.f & (Et | we | Rt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ne.length; g++)
        Ro(
          ne[g],
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
      ne !== null && (r === null ? r = ne : r.push(.../** @type {Source[]} */
      ne));
    }
    return (t.f & hn) !== 0 && (t.f ^= hn), d;
  } catch ($) {
    return Ua($);
  } finally {
    t.f ^= is, Vt = e, Kt = n, ne = r, Y = i, oe = s, hr(a), ye = o, Fn = l;
  }
}
function Tu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Vt === null || !fr.call(Vt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & ae) !== 0 && (s.f ^= ae, s.f &= ~On), ks(s), _u(s), qr(s, 0);
  }
}
function qr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Tu(t, n[r]);
}
function vr(t) {
  var e = t.f;
  if ((e & en) === 0) {
    ut(t, wt);
    var n = U, r = li;
    U = t, li = !0;
    try {
      (e & (sn | La)) !== 0 ? Eu(t) : Ls(t), mo(t);
      var i = Co(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ao;
      var s;
      rs && iu && (t.f & Rt) !== 0 && t.deps;
    } finally {
      li = r, U = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Y !== null && !ye) {
    var r = U !== null && (U.f & en) !== 0;
    if (!r && (oe === null || !fr.call(oe, t))) {
      var i = Y.deps;
      if ((Y.f & is) !== 0)
        t.rv < An && (t.rv = An, Vt === null && i !== null && i[Kt] === t ? Kt++ : Vt === null ? Vt = [t] : Vt.push(t));
      else {
        (Y.deps ?? (Y.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Y] : fr.call(s, Y) || s.push(Y);
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
      return ((a.f & wt) === 0 && a.reactions !== null || So(a)) && (o = Ms(a)), dn.set(a, o), o;
    }
    var l = (a.f & ae) === 0 && !ye && Y !== null && (li || (Y.f & ae) !== 0), u = (a.f & mr) === 0;
    Jr(a) && (l && (a.f |= ae), io(a)), l && !u && (so(a), To(a));
  }
  if (At != null && At.has(t))
    return At.get(t);
  if ((t.f & hn) !== 0)
    throw t.v;
  return t.v;
}
function To(t) {
  if (t.f |= ae, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Et) !== 0 && (e.f & ae) === 0 && (so(
        /** @type {Derived} */
        e
      ), To(
        /** @type {Derived} */
        e
      ));
}
function So(t) {
  if (t.v === $t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (dn.has(e) || (e.f & Et) !== 0 && So(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Oi(t) {
  var e = ye;
  try {
    return ye = !0, t();
  } finally {
    ye = e;
  }
}
const No = /* @__PURE__ */ new Set(), ps = /* @__PURE__ */ new Set();
function Su(t) {
  for (var e = 0; e < t.length; e++)
    No.add(t[e]);
  for (var n of ps)
    n(t);
}
let ua = null;
function fa(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ua = t;
  var a = 0, o = ua === t && t.__root;
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
    _i(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, d = U;
    ue(null), Fe(null);
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
        } catch (E) {
          c ? p.push(E) : c = E;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let E of p)
          queueMicrotask(() => {
            throw E;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ue(f), Fe(d);
    }
  }
}
var Da, Fa;
const Ki = (Fa = (Da = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Da.trustedTypes) == null ? void 0 : /* @__PURE__ */ Fa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Nu(t) {
  return (
    /** @type {string} */
    (Ki == null ? void 0 : Ki.createHTML(t)) ?? t
  );
}
function ko(t, e = !1) {
  var n = Ps("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Nu(t) : t, n.content;
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
  var n = (e & Pl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (J)
      return Vn(H, null), H;
    r === void 0 && (r = ko(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || uo ? document.importNode(r, !0) : r.cloneNode(!0)
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
function ku(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (J)
      return Vn(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ko(i, !0)
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
function Mu(t, e) {
  return /* @__PURE__ */ ku(t, e, "svg");
}
function ca(t = "") {
  if (!J) {
    var e = le(t + "");
    return Vn(e, e), e;
  }
  var n = H;
  return n.nodeType !== Kr ? (n.before(n = le()), Ht(n)) : Ii(
    /** @type {Text} */
    n
  ), Vn(n, n), n;
}
function ve(t, e) {
  if (J) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      U
    );
    ((n.f & mr) === 0 || n.nodes.end === null) && (n.nodes.end = H), Pi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Pu = ["touchstart", "touchmove"];
function Du(t) {
  return Pu.includes(t);
}
function ln(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Mo(t, e) {
  return Po(t, e);
}
function Fu(t, e) {
  ds(), e.intro = e.intro ?? !1;
  const n = e.target, r = J, i = H;
  try {
    for (var s = /* @__PURE__ */ qn(n); s && (s.nodeType !== yr || /** @type {Comment} */
    s.data !== Rs); )
      s = /* @__PURE__ */ Oe(s);
    if (!s)
      throw ur;
    tn(!0), Ht(
      /** @type {Comment} */
      s
    );
    const a = Po(t, { ...e, anchor: s });
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ur && console.warn("Failed to hydrate: ", a), e.recover === !1 && Jl(), ds(), ho(n), tn(!1), Mo(t, e);
  } finally {
    tn(r), Ht(i);
  }
}
const ti = /* @__PURE__ */ new Map();
function Po(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  ds();
  var o = /* @__PURE__ */ new Set(), l = (d) => {
    for (var c = 0; c < d.length; c++) {
      var p = d[c];
      if (!o.has(p)) {
        o.add(p);
        var g = Du(p);
        for (const E of [e, document]) {
          var y = ti.get(E);
          y === void 0 && (y = /* @__PURE__ */ new Map(), ti.set(E, y));
          var $ = y.get(p);
          $ === void 0 ? (E.addEventListener(p, fa, { passive: g }), y.set(p, 1)) : y.set(p, $ + 1);
        }
      }
    }
  };
  l(Ni(No)), ps.add(l);
  var u = void 0, f = $u(() => {
    var d = n ?? e.appendChild(le());
    return fu(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        Ss({});
        var p = (
          /** @type {ComponentContext} */
          Qt
        );
        if (s && (p.c = s), i && (r.$$events = i), J && Vn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, J && (U.nodes.end = H, H === null || H.nodeType !== yr || /** @type {Comment} */
        H.data !== Cs))
          throw Mi(), ur;
        Ns();
      }
    ), () => {
      var y;
      for (var c of o)
        for (const $ of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ti.get($)
          ), g = (
            /** @type {number} */
            p.get(c)
          );
          --g == 0 ? ($.removeEventListener(c, fa), p.delete(c), p.size === 0 && ti.delete($)) : p.set(c, g);
        }
      ps.delete(l), d !== n && ((y = d.parentNode) == null || y.removeChild(d));
    };
  });
  return vs.set(u, f), u;
}
let vs = /* @__PURE__ */ new WeakMap();
function Iu(t, e) {
  const n = vs.get(t);
  return n ? (vs.delete(t), n(e)) : Promise.resolve();
}
var ge, Me, Zt, kn, Ur, Gr, Ti;
class Ou {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    ot(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, ge, /* @__PURE__ */ new Map());
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
    q(this, Me, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    q(this, Zt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, kn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, Ur, !0);
    q(this, Gr, () => {
      var e = (
        /** @type {Batch} */
        B
      );
      if (v(this, ge).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, ge).get(e)
        ), r = v(this, Me).get(n);
        if (r)
          qs(r), v(this, kn).delete(n);
        else {
          var i = v(this, Zt).get(n);
          i && (v(this, Me).set(n, i.effect), v(this, Zt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, ge)) {
          if (v(this, ge).delete(s), s === e)
            break;
          const o = v(this, Zt).get(a);
          o && (Dt(o.effect), v(this, Zt).delete(a));
        }
        for (const [s, a] of v(this, Me)) {
          if (s === n || v(this, kn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              bo(a, u), u.append(le()), v(this, Zt).set(s, { effect: a, fragment: u });
            } else
              Dt(a);
            v(this, kn).delete(s), v(this, Me).delete(s);
          };
          v(this, Ur) || !r ? (v(this, kn).add(s), Dn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    q(this, Ti, (e) => {
      v(this, ge).delete(e);
      const n = Array.from(v(this, ge).values());
      for (const [r, i] of v(this, Zt))
        n.includes(r) || (Dt(i.effect), v(this, Zt).delete(r));
    });
    this.anchor = e, O(this, Ur, n);
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
    ), i = po();
    if (n && !v(this, Me).has(e) && !v(this, Zt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = le();
        s.append(a), v(this, Zt).set(e, {
          effect: se(() => n(a)),
          fragment: s
        });
      } else
        v(this, Me).set(
          e,
          se(() => n(this.anchor))
        );
    if (v(this, ge).set(r, e), i) {
      for (const [o, l] of v(this, Me))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, Zt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Gr)), r.ondiscard(v(this, Ti));
    } else
      J && (this.anchor = H), v(this, Gr).call(this);
  }
}
ge = new WeakMap(), Me = new WeakMap(), Zt = new WeakMap(), kn = new WeakMap(), Ur = new WeakMap(), Gr = new WeakMap(), Ti = new WeakMap();
function Lu(t) {
  Qt === null && zl(), Fs(() => {
    const e = Oi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Tr(t, e, n = !1) {
  J && Pi();
  var r = new Ou(t), i = n ? cr : 0;
  function s(a, o) {
    if (J) {
      const f = Ha(t);
      var l;
      if (f === Rs ? l = 0 : f === Si ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = mi();
        Ht(u), r.anchor = u, tn(!1), r.ensure(a, o), tn(!0);
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
function Ji(t, e) {
  return e;
}
function qu(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let d = e[o];
    Dn(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            gs(Ni(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      ho(f), f.append(u), t.items.clear();
    }
    gs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function gs(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Dt(t[n], e);
}
var ha;
function Zi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  J && Pi();
  var l = null, u = /* @__PURE__ */ ro(() => {
    var y = n();
    return Ia(y) ? y : y == null ? [] : Ni(y);
  }), f, d = !0;
  function c() {
    g.fallback = l, Vu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & cn) === 0 ? qs(l) : (l.f ^= cn, kr(l, null, a)) : Dn(l, () => {
      l = null;
    }));
  }
  var p = Os(() => {
    f = /** @type {V[]} */
    x(u);
    var y = f.length;
    let $ = !1;
    if (J) {
      var E = Ha(a) === Si;
      E !== (y === 0) && (a = mi(), Ht(a), tn(!1), $ = !0);
    }
    for (var N = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      B
    ), P = po(), M = 0; M < y; M += 1) {
      J && H.nodeType === yr && /** @type {Comment} */
      H.data === Cs && (a = /** @type {Comment} */
      H, $ = !0, tn(!1));
      var G = f[M], ft = r(G, M), K = d ? null : o.get(ft);
      K ? (K.v && pr(K.v, G), K.i && pr(K.i, M), P && C.unskip_effect(K.e)) : (K = Yu(
        o,
        d ? a : ha ?? (ha = le()),
        G,
        ft,
        M,
        i,
        e,
        n
      ), d || (K.e.f |= cn), o.set(ft, K)), N.add(ft);
    }
    if (y === 0 && s && !l && (d ? l = se(() => s(a)) : (l = se(() => s(ha ?? (ha = le()))), l.f |= cn)), y > N.size && Bl(), J && y > 0 && Ht(mi()), !d)
      if (P) {
        for (const [at, et] of o)
          N.has(at) || C.skip_effect(et.e);
        C.oncommit(c), C.ondiscard(() => {
        });
      } else
        c();
    $ && tn(!0), x(u);
  }), g = { effect: p, items: o, outrogroups: null, fallback: l };
  d = !1, J && (a = H);
}
function Sr(t) {
  for (; t !== null && (t.f & xe) === 0; )
    t = t.next;
  return t;
}
function Vu(t, e, n, r, i) {
  var K;
  var s = e.length, a = t.items, o = Sr(t.effect.first), l, u = null, f = [], d = [], c, p, g, y;
  for (y = 0; y < s; y += 1) {
    if (c = e[y], p = i(c, y), g = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const at of t.outrogroups)
        at.pending.delete(g), at.done.delete(g);
    if ((g.f & cn) !== 0)
      if (g.f ^= cn, g === o)
        kr(g, null, n);
      else {
        var $ = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), un(t, u, g), un(t, g, $), kr(g, $, n), u = g, f = [], d = [], o = Sr(u.next);
        continue;
      }
    if ((g.f & jt) !== 0 && qs(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < d.length) {
          var E = d[0], N;
          u = E.prev;
          var C = f[0], P = f[f.length - 1];
          for (N = 0; N < f.length; N += 1)
            kr(f[N], E, n);
          for (N = 0; N < d.length; N += 1)
            l.delete(d[N]);
          un(t, C.prev, P.next), un(t, u, C), un(t, P, E), o = E, u = P, y -= 1, f = [], d = [];
        } else
          l.delete(g), kr(g, o, n), un(t, g.prev, g.next), un(t, g, u === null ? t.effect.first : u.next), un(t, u, g), u = g;
        continue;
      }
      for (f = [], d = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), d.push(o), o = Sr(o.next);
      if (o === null)
        continue;
    }
    (g.f & cn) === 0 && f.push(g), u = g, o = Sr(g.next);
  }
  if (t.outrogroups !== null) {
    for (const at of t.outrogroups)
      at.pending.size === 0 && (gs(Ni(at.done)), (K = t.outrogroups) == null || K.delete(at));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var M = [];
    if (l !== void 0)
      for (g of l)
        (g.f & jt) === 0 && M.push(g);
    for (; o !== null; )
      (o.f & jt) === 0 && o !== t.fallback && M.push(o), o = Sr(o.next);
    var G = M.length;
    if (G > 0) {
      var ft = null;
      qu(t, M, ft);
    }
  }
}
function Yu(t, e, n, r, i, s, a, o) {
  var l = (a & Rl) !== 0 ? (a & Tl) === 0 ? /* @__PURE__ */ oo(n, !1, !1) : Ln(n) : null, u = (a & Cl) !== 0 ? Ln(i) : null;
  return {
    v: l,
    i: u,
    e: se(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function kr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & cn) === 0 ? (
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
function un(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Do(t, e) {
  _o(() => {
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
function da(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Hu(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += da(r)), i && (n += da(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function ji(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function pa(t, e, n, r) {
  var i = t.__style;
  if (J || i !== e) {
    var s = Hu(e, r);
    (!J || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (ji(t, n == null ? void 0 : n[0], r[0]), ji(t, n == null ? void 0 : n[1], r[1], "important")) : ji(t, n, r));
  return r;
}
function va(t, e) {
  return t === e || (t == null ? void 0 : t[Fr]) === e;
}
function ui(t = {}, e, n, r) {
  return _o(() => {
    var i, s;
    return Is(() => {
      i = s, s = [], Oi(() => {
        t !== n(...s) && (e(t, ...s), i && va(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Pn(() => {
        s && va(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let ei = !1;
function zu(t) {
  var e = ei;
  try {
    return ei = !1, [t(), ei];
  } finally {
    ei = e;
  }
}
function vt(t, e, n, r) {
  var N;
  var i = (n & kl) !== 0, s = (n & Ml) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Oi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Fr in t || Ya in t;
    u = ((N = Mn(t, e)) == null ? void 0 : N.set) ?? (f && e in t ? (C) => t[e] = C : void 0);
  }
  var d, c = !1;
  i ? [d, c] = zu(() => (
    /** @type {V} */
    t[e]
  )) : d = /** @type {V} */
  t[e], d === void 0 && r !== void 0 && (d = l(), u && (Zl(), u(d)));
  var p;
  if (p = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C === void 0 ? l() : (o = !0, C);
  }, (n & Nl) === 0)
    return p;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, P) {
        return arguments.length > 0 ? ((!P || g || c) && u(P ? p() : C), C) : p();
      })
    );
  }
  var y = !1, $ = ((n & Sl) !== 0 ? Fi : ro)(() => (y = !1, p()));
  i && x($);
  var E = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(C, P) {
      if (arguments.length > 0) {
        const M = P ? x($) : i ? $n(C) : C;
        return lt($, M), y = !0, a !== void 0 && (a = M), C;
      }
      return pn && y || (E.f & en) !== 0 ? $.v : x($);
    })
  );
}
function Xu(t) {
  return new Bu(t);
}
var Qe, ie;
class Bu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    q(this, Qe);
    /** @type {Record<string, any>} */
    q(this, ie);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ oo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ya ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return lt(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    O(this, ie, (e.hydrate ? Fu : Mo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ht(), O(this, Qe, i.$$events);
    for (const a of Object.keys(v(this, ie)))
      a === "$set" || a === "$destroy" || a === "$on" || _i(this, a, {
        get() {
          return v(this, ie)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, ie)[a] = o;
        },
        enumerable: !0
      });
    v(this, ie).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, ie).$destroy = () => {
      Iu(v(this, ie));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, ie).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, Qe)[e] = v(this, Qe)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, Qe)[e].push(r), () => {
      v(this, Qe)[e] = v(this, Qe)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ie).$destroy();
  }
}
Qe = new WeakMap(), ie = new WeakMap();
let Fo;
typeof HTMLElement == "function" && (Fo = class extends HTMLElement {
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
          const o = Ps("slot");
          s !== "default" && (o.name = s), ve(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Wu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = fi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Xu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = bu(() => {
        Is(() => {
          var s;
          this.$$r = !0;
          for (const a of gi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = fi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = fi(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return gi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function fi(t, e, n, r) {
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
function Wu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Io(t, e, n, r, i, s) {
  let a = class extends Fo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return gi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return gi(e).forEach((o) => {
    _i(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var d;
        l = fi(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (d = Mn(u, o)) == null ? void 0 : d.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    _i(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Uu = { value: () => {
} };
function Oo() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ci(n);
}
function ci(t) {
  this._ = t;
}
function Gu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ci.prototype = Oo.prototype = {
  constructor: ci,
  on: function(t, e) {
    var n = this._, r = Gu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Ku(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = ga(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ga(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ci(t);
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
function Ku(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ga(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Uu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var _s = "http://www.w3.org/1999/xhtml";
const _a = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _s,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Li(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), _a.hasOwnProperty(e) ? { space: _a[e], local: t } : t;
}
function Ju(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === _s && e.documentElement.namespaceURI === _s ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Zu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Lo(t) {
  var e = Li(t);
  return (e.local ? Zu : Ju)(e);
}
function ju() {
}
function Vs(t) {
  return t == null ? ju : function() {
    return this.querySelector(t);
  };
}
function Qu(t) {
  typeof t != "function" && (t = Vs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new te(r, this._parents);
}
function tf(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ef() {
  return [];
}
function qo(t) {
  return t == null ? ef : function() {
    return this.querySelectorAll(t);
  };
}
function nf(t) {
  return function() {
    return tf(t.apply(this, arguments));
  };
}
function rf(t) {
  typeof t == "function" ? t = nf(t) : t = qo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new te(r, i);
}
function Vo(t) {
  return function() {
    return this.matches(t);
  };
}
function Yo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var sf = Array.prototype.find;
function af(t) {
  return function() {
    return sf.call(this.children, t);
  };
}
function of() {
  return this.firstElementChild;
}
function lf(t) {
  return this.select(t == null ? of : af(typeof t == "function" ? t : Yo(t)));
}
var uf = Array.prototype.filter;
function ff() {
  return Array.from(this.children);
}
function cf(t) {
  return function() {
    return uf.call(this.children, t);
  };
}
function hf(t) {
  return this.selectAll(t == null ? ff : cf(typeof t == "function" ? t : Yo(t)));
}
function df(t) {
  typeof t != "function" && (t = Vo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new te(r, this._parents);
}
function Ho(t) {
  return new Array(t.length);
}
function pf() {
  return new te(this._enter || this._groups.map(Ho), this._parents);
}
function yi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
yi.prototype = {
  constructor: yi,
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
function vf(t) {
  return function() {
    return t;
  };
}
function gf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new yi(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function _f(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, d = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < d; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new yi(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function mf(t) {
  return t.__data__;
}
function yf(t, e) {
  if (!arguments.length) return Array.from(this, mf);
  var n = e ? _f : gf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = vf(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], d = i[u], c = d.length, p = wf(t.call(f, f && f.__data__, u, r)), g = p.length, y = o[u] = new Array(g), $ = a[u] = new Array(g), E = l[u] = new Array(c);
    n(f, d, y, $, E, p, e);
    for (var N = 0, C = 0, P, M; N < g; ++N)
      if (P = y[N]) {
        for (N >= C && (C = N + 1); !(M = $[C]) && ++C < g; ) ;
        P._next = M || null;
      }
  }
  return a = new te(a, r), a._enter = o, a._exit = l, a;
}
function wf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function xf() {
  return new te(this._exit || this._groups.map(Ho), this._parents);
}
function bf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function $f(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], d = u.length, c = o[l] = new Array(d), p, g = 0; g < d; ++g)
      (p = u[g] || f[g]) && (c[g] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new te(o, this._parents);
}
function Af() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Ef(t) {
  t || (t = Rf);
  function e(d, c) {
    return d && c ? t(d.__data__, c.__data__) : !d - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new te(i, this._parents).order();
}
function Rf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Cf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tf() {
  return Array.from(this);
}
function Sf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Nf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function kf() {
  return !this.node();
}
function Mf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function Pf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Df(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ff(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function If(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Of(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Lf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function qf(t, e) {
  var n = Li(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Df : Pf : typeof e == "function" ? n.local ? Lf : Of : n.local ? If : Ff)(n, e));
}
function zo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yf(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Hf(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function zf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Vf : typeof e == "function" ? Hf : Yf)(t, e, n ?? "")) : gr(this.node(), t);
}
function gr(t, e) {
  return t.style.getPropertyValue(e) || zo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Xf(t) {
  return function() {
    delete this[t];
  };
}
function Bf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Wf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Uf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Xf : typeof e == "function" ? Wf : Bf)(t, e)) : this.node()[t];
}
function Xo(t) {
  return t.trim().split(/^|\s+/);
}
function Ys(t) {
  return t.classList || new Bo(t);
}
function Bo(t) {
  this._node = t, this._names = Xo(t.getAttribute("class") || "");
}
Bo.prototype = {
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
function Wo(t, e) {
  for (var n = Ys(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Uo(t, e) {
  for (var n = Ys(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Gf(t) {
  return function() {
    Wo(this, t);
  };
}
function Kf(t) {
  return function() {
    Uo(this, t);
  };
}
function Jf(t, e) {
  return function() {
    (e.apply(this, arguments) ? Wo : Uo)(this, t);
  };
}
function Zf(t, e) {
  var n = Xo(t + "");
  if (arguments.length < 2) {
    for (var r = Ys(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Jf : e ? Gf : Kf)(n, e));
}
function jf() {
  this.textContent = "";
}
function Qf(t) {
  return function() {
    this.textContent = t;
  };
}
function tc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ec(t) {
  return arguments.length ? this.each(t == null ? jf : (typeof t == "function" ? tc : Qf)(t)) : this.node().textContent;
}
function nc() {
  this.innerHTML = "";
}
function rc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ic(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function sc(t) {
  return arguments.length ? this.each(t == null ? nc : (typeof t == "function" ? ic : rc)(t)) : this.node().innerHTML;
}
function ac() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function oc() {
  return this.each(ac);
}
function lc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function uc() {
  return this.each(lc);
}
function fc(t) {
  var e = typeof t == "function" ? t : Lo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function cc() {
  return null;
}
function hc(t, e) {
  var n = typeof t == "function" ? t : Lo(t), r = e == null ? cc : typeof e == "function" ? e : Vs(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function pc() {
  return this.each(dc);
}
function vc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function gc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function _c(t) {
  return this.select(t ? gc : vc);
}
function mc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function yc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function wc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function xc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function bc(t, e, n) {
  return function() {
    var r = this.__on, i, s = yc(e);
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
function $c(t, e, n) {
  var r = wc(t + ""), i, s = r.length, a;
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
  for (o = e ? bc : xc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Go(t, e, n) {
  var r = zo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Ac(t, e) {
  return function() {
    return Go(this, t, e);
  };
}
function Ec(t, e) {
  return function() {
    return Go(this, t, e.apply(this, arguments));
  };
}
function Rc(t, e) {
  return this.each((typeof e == "function" ? Ec : Ac)(t, e));
}
function* Cc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ko = [null];
function te(t, e) {
  this._groups = t, this._parents = e;
}
function wr() {
  return new te([[document.documentElement]], Ko);
}
function Tc() {
  return this;
}
te.prototype = wr.prototype = {
  constructor: te,
  select: Qu,
  selectAll: rf,
  selectChild: lf,
  selectChildren: hf,
  filter: df,
  data: yf,
  enter: pf,
  exit: xf,
  join: bf,
  merge: $f,
  selection: Tc,
  order: Af,
  sort: Ef,
  call: Cf,
  nodes: Tf,
  node: Sf,
  size: Nf,
  empty: kf,
  each: Mf,
  attr: qf,
  style: zf,
  property: Uf,
  classed: Zf,
  text: ec,
  html: sc,
  raise: oc,
  lower: uc,
  append: fc,
  insert: hc,
  remove: pc,
  clone: _c,
  datum: mc,
  on: $c,
  dispatch: Rc,
  [Symbol.iterator]: Cc
};
function st(t) {
  return typeof t == "string" ? new te([[document.querySelector(t)]], [document.documentElement]) : new te([[t]], Ko);
}
function Hs(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Jo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Zr() {
}
var Vr = 0.7, wi = 1 / Vr, er = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", De = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sc = /^#([0-9a-f]{3,8})$/, Nc = new RegExp(`^rgb\\(${er},${er},${er}\\)$`), kc = new RegExp(`^rgb\\(${De},${De},${De}\\)$`), Mc = new RegExp(`^rgba\\(${er},${er},${er},${Yr}\\)$`), Pc = new RegExp(`^rgba\\(${De},${De},${De},${Yr}\\)$`), Dc = new RegExp(`^hsl\\(${Yr},${De},${De}\\)$`), Fc = new RegExp(`^hsla\\(${Yr},${De},${De},${Yr}\\)$`), ma = {
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
Hs(Zr, Yn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ya,
  // Deprecated! Use color.formatHex.
  formatHex: ya,
  formatHex8: Ic,
  formatHsl: Oc,
  formatRgb: wa,
  toString: wa
});
function ya() {
  return this.rgb().formatHex();
}
function Ic() {
  return this.rgb().formatHex8();
}
function Oc() {
  return Zo(this).formatHsl();
}
function wa() {
  return this.rgb().formatRgb();
}
function Yn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Sc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? xa(e) : n === 3 ? new Yt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ni(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ni(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Nc.exec(t)) ? new Yt(e[1], e[2], e[3], 1) : (e = kc.exec(t)) ? new Yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Mc.exec(t)) ? ni(e[1], e[2], e[3], e[4]) : (e = Pc.exec(t)) ? ni(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Dc.exec(t)) ? Aa(e[1], e[2] / 100, e[3] / 100, 1) : (e = Fc.exec(t)) ? Aa(e[1], e[2] / 100, e[3] / 100, e[4]) : ma.hasOwnProperty(t) ? xa(ma[t]) : t === "transparent" ? new Yt(NaN, NaN, NaN, 0) : null;
}
function xa(t) {
  return new Yt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ni(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Yt(t, e, n, r);
}
function Lc(t) {
  return t instanceof Zr || (t = Yn(t)), t ? (t = t.rgb(), new Yt(t.r, t.g, t.b, t.opacity)) : new Yt();
}
function ms(t, e, n, r) {
  return arguments.length === 1 ? Lc(t) : new Yt(t, e, n, r ?? 1);
}
function Yt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Hs(Yt, ms, Jo(Zr, {
  brighter(t) {
    return t = t == null ? wi : Math.pow(wi, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vr : Math.pow(Vr, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Yt(In(this.r), In(this.g), In(this.b), xi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ba,
  // Deprecated! Use color.formatHex.
  formatHex: ba,
  formatHex8: qc,
  formatRgb: $a,
  toString: $a
}));
function ba() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}`;
}
function qc() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}${En((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $a() {
  const t = xi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function In(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function En(t) {
  return t = In(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Aa(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new _e(t, e, n, r);
}
function Zo(t) {
  if (t instanceof _e) return new _e(t.h, t.s, t.l, t.opacity);
  if (t instanceof Zr || (t = Yn(t)), !t) return new _e();
  if (t instanceof _e) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new _e(a, o, l, t.opacity);
}
function Vc(t, e, n, r) {
  return arguments.length === 1 ? Zo(t) : new _e(t, e, n, r ?? 1);
}
function _e(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Hs(_e, Vc, Jo(Zr, {
  brighter(t) {
    return t = t == null ? wi : Math.pow(wi, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vr : Math.pow(Vr, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Yt(
      Qi(t >= 240 ? t - 240 : t + 120, i, r),
      Qi(t, i, r),
      Qi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new _e(Ea(this.h), ri(this.s), ri(this.l), xi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ea(this.h)}, ${ri(this.s) * 100}%, ${ri(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ea(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ri(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Qi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const zs = (t) => () => t;
function Yc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Hc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function zc(t) {
  return (t = +t) == 1 ? jo : function(e, n) {
    return n - e ? Hc(e, n, t) : zs(isNaN(e) ? n : e);
  };
}
function jo(t, e) {
  var n = e - t;
  return n ? Yc(t, n) : zs(isNaN(t) ? e : t);
}
const bi = (function t(e) {
  var n = zc(e);
  function r(i, s) {
    var a = n((i = ms(i)).r, (s = ms(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = jo(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Xc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Bc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Wc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ge(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Uc(t, e) {
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
function Gc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ge(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ts = new RegExp(ys.source, "g");
function Kc(t) {
  return function() {
    return t;
  };
}
function Jc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Qo(t, e) {
  var n = ys.lastIndex = ts.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = ys.exec(t)) && (i = ts.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Pe(r, i) })), n = ts.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Jc(l[0].x) : Kc(e) : (e = l.length, function(u) {
    for (var f = 0, d; f < e; ++f) o[(d = l[f]).i] = d.x(u);
    return o.join("");
  });
}
function Ge(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? zs(e) : (n === "number" ? Pe : n === "string" ? (r = Yn(e)) ? (e = r, bi) : Qo : e instanceof Yn ? bi : e instanceof Date ? Uc : Bc(e) ? Xc : Array.isArray(e) ? Wc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Gc : Pe)(t, e);
}
var Ra = 180 / Math.PI, ws = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tl(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Ra,
    skewX: Math.atan(l) * Ra,
    scaleX: a,
    scaleY: o
  };
}
var ii;
function Zc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ws : tl(e.a, e.b, e.c, e.d, e.e, e.f);
}
function jc(t) {
  return t == null || (ii || (ii = document.createElementNS("http://www.w3.org/2000/svg", "g")), ii.setAttribute("transform", t), !(t = ii.transform.baseVal.consolidate())) ? ws : (t = t.matrix, tl(t.a, t.b, t.c, t.d, t.e, t.f));
}
function el(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, d, c, p, g) {
    if (u !== d || f !== c) {
      var y = p.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: Pe(u, d) }, { i: y - 2, x: Pe(f, c) });
    } else (d || c) && p.push("translate(" + d + e + c + n);
  }
  function a(u, f, d, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Pe(u, f) })) : f && d.push(i(d) + "rotate(" + f + r);
  }
  function o(u, f, d, c) {
    u !== f ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Pe(u, f) }) : f && d.push(i(d) + "skewX(" + f + r);
  }
  function l(u, f, d, c, p, g) {
    if (u !== d || f !== c) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: Pe(u, d) }, { i: y - 2, x: Pe(f, c) });
    } else (d !== 1 || c !== 1) && p.push(i(p) + "scale(" + d + "," + c + ")");
  }
  return function(u, f) {
    var d = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, d, c), a(u.rotate, f.rotate, d, c), o(u.skewX, f.skewX, d, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, c), u = f = null, function(p) {
      for (var g = -1, y = c.length, $; ++g < y; ) d[($ = c[g]).i] = $.x(p);
      return d.join("");
    };
  };
}
var Qc = el(Zc, "px, ", "px)", "deg)"), th = el(jc, ", ", ")", ")"), _r = 0, Mr = 0, Nr = 0, nl = 1e3, $i, Pr, Ai = 0, Hn = 0, qi = 0, Hr = typeof performance == "object" && performance.now ? performance : Date, rl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Xs() {
  return Hn || (rl(eh), Hn = Hr.now() + qi);
}
function eh() {
  Hn = 0;
}
function Ei() {
  this._call = this._time = this._next = null;
}
Ei.prototype = il.prototype = {
  constructor: Ei,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Xs() : +n) + (e == null ? 0 : +e), !this._next && Pr !== this && (Pr ? Pr._next = this : $i = this, Pr = this), this._call = t, this._time = n, xs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xs());
  }
};
function il(t, e, n) {
  var r = new Ei();
  return r.restart(t, e, n), r;
}
function nh() {
  Xs(), ++_r;
  for (var t = $i, e; t; )
    (e = Hn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --_r;
}
function Ca() {
  Hn = (Ai = Hr.now()) + qi, _r = Mr = 0;
  try {
    nh();
  } finally {
    _r = 0, ih(), Hn = 0;
  }
}
function rh() {
  var t = Hr.now(), e = t - Ai;
  e > nl && (qi -= e, Ai = t);
}
function ih() {
  for (var t, e = $i, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : $i = n);
  Pr = t, xs(r);
}
function xs(t) {
  if (!_r) {
    Mr && (Mr = clearTimeout(Mr));
    var e = t - Hn;
    e > 24 ? (t < 1 / 0 && (Mr = setTimeout(Ca, t - Hr.now() - qi)), Nr && (Nr = clearInterval(Nr))) : (Nr || (Ai = Hr.now(), Nr = setInterval(rh, nl)), _r = 1, rl(Ca));
  }
}
function Ta(t, e, n) {
  var r = new Ei();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var sh = Oo("start", "end", "cancel", "interrupt"), ah = [], sl = 0, Sa = 1, bs = 2, hi = 3, Na = 4, $s = 5, di = 6;
function Vi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  oh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: sh,
    tween: ah,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: sl
  });
}
function Bs(t, e) {
  var n = be(t, e);
  if (n.state > sl) throw new Error("too late; already scheduled");
  return n;
}
function qe(t, e) {
  var n = be(t, e);
  if (n.state > hi) throw new Error("too late; already running");
  return n;
}
function be(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function oh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = il(s, 0, n.time);
  function s(u) {
    n.state = Sa, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, d, c, p;
    if (n.state !== Sa) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === hi) return Ta(a);
        p.state === Na ? (p.state = di, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = di, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Ta(function() {
      n.state === hi && (n.state = Na, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = bs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === bs) {
      for (n.state = hi, i = new Array(c = n.tween.length), f = 0, d = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = $s, 1), d = -1, c = i.length; ++d < c; )
      i[d].call(t, f);
    n.state === $s && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = di, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function lh(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > bs && r.state < $s, r.state = di, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function uh(t) {
  return this.each(function() {
    lh(this, t);
  });
}
function fh(t, e) {
  var n, r;
  return function() {
    var i = qe(this, t), s = i.tween;
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
function ch(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = qe(this, t), a = s.tween;
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
function hh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = be(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? fh : ch)(n, t, e));
}
function Ws(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = qe(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return be(i, r).value[e];
  };
}
function al(t, e) {
  var n;
  return (typeof e == "number" ? Pe : e instanceof Yn ? bi : (n = Yn(e)) ? (e = n, bi) : Qo)(t, e);
}
function dh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ph(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function vh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function gh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function _h(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function mh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function yh(t, e) {
  var n = Li(t), r = n === "transform" ? th : al;
  return this.attrTween(t, typeof e == "function" ? (n.local ? mh : _h)(n, r, Ws(this, "attr." + t, e)) : e == null ? (n.local ? ph : dh)(n) : (n.local ? gh : vh)(n, r, e));
}
function wh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function xh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function bh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && xh(t, s)), n;
  }
  return i._value = e, i;
}
function $h(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && wh(t, s)), n;
  }
  return i._value = e, i;
}
function Ah(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Li(t);
  return this.tween(n, (r.local ? bh : $h)(r, e));
}
function Eh(t, e) {
  return function() {
    Bs(this, t).delay = +e.apply(this, arguments);
  };
}
function Rh(t, e) {
  return e = +e, function() {
    Bs(this, t).delay = e;
  };
}
function Ch(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Eh : Rh)(e, t)) : be(this.node(), e).delay;
}
function Th(t, e) {
  return function() {
    qe(this, t).duration = +e.apply(this, arguments);
  };
}
function Sh(t, e) {
  return e = +e, function() {
    qe(this, t).duration = e;
  };
}
function Nh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Th : Sh)(e, t)) : be(this.node(), e).duration;
}
function kh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    qe(this, t).ease = e;
  };
}
function Mh(t) {
  var e = this._id;
  return arguments.length ? this.each(kh(e, t)) : be(this.node(), e).ease;
}
function Ph(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    qe(this, t).ease = n;
  };
}
function Dh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Ph(this._id, t));
}
function Fh(t) {
  typeof t != "function" && (t = Vo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new rn(r, this._parents, this._name, this._id);
}
function Ih(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, d = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (d[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new rn(a, this._parents, this._name, this._id);
}
function Oh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Lh(t, e, n) {
  var r, i, s = Oh(e) ? Bs : qe;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function qh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? be(this.node(), n).on.on(t) : this.each(Lh(n, t, e));
}
function Vh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Yh() {
  return this.on("end.remove", Vh(this._id));
}
function Hh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Vs(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, d, c = 0; c < l; ++c)
      (f = o[c]) && (d = t.call(f, f.__data__, c, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[c] = d, Vi(u[c], e, n, c, u, be(f, n)));
  return new rn(s, this._parents, e, n);
}
function zh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var c = t.call(f, f.__data__, d, l), p, g = be(f, n), y = 0, $ = c.length; y < $; ++y)
          (p = c[y]) && Vi(p, e, n, y, c, g);
        s.push(c), a.push(f);
      }
  return new rn(s, a, e, n);
}
var Xh = wr.prototype.constructor;
function Bh() {
  return new Xh(this._groups, this._parents);
}
function Wh(t, e) {
  var n, r, i;
  return function() {
    var s = gr(this, t), a = (this.style.removeProperty(t), gr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function ol(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Uh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = gr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Gh(t, e, n) {
  var r, i, s;
  return function() {
    var a = gr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), gr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Kh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = qe(this, t), u = l.on, f = l.value[s] == null ? o || (o = ol(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Jh(t, e, n) {
  var r = (t += "") == "transform" ? Qc : al;
  return e == null ? this.styleTween(t, Wh(t, r)).on("end.style." + t, ol(t)) : typeof e == "function" ? this.styleTween(t, Gh(t, r, Ws(this, "style." + t, e))).each(Kh(this._id, t)) : this.styleTween(t, Uh(t, r, e), n).on("end.style." + t, null);
}
function Zh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function jh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Zh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Qh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, jh(t, e, n ?? ""));
}
function td(t) {
  return function() {
    this.textContent = t;
  };
}
function ed(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function nd(t) {
  return this.tween("text", typeof t == "function" ? ed(Ws(this, "text", t)) : td(t == null ? "" : t + ""));
}
function rd(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function id(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && rd(i)), e;
  }
  return r._value = t, r;
}
function sd(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, id(t));
}
function ad() {
  for (var t = this._name, e = this._id, n = ll(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = be(l, e);
        Vi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new rn(r, this._parents, t, n);
}
function od() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = qe(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var ld = 0;
function rn(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function pi(t) {
  return wr().transition(t);
}
function ll() {
  return ++ld;
}
var Ue = wr.prototype;
rn.prototype = pi.prototype = {
  constructor: rn,
  select: Hh,
  selectAll: zh,
  selectChild: Ue.selectChild,
  selectChildren: Ue.selectChildren,
  filter: Fh,
  merge: Ih,
  selection: Bh,
  transition: ad,
  call: Ue.call,
  nodes: Ue.nodes,
  node: Ue.node,
  size: Ue.size,
  empty: Ue.empty,
  each: Ue.each,
  on: qh,
  attr: yh,
  attrTween: Ah,
  style: Jh,
  styleTween: Qh,
  text: nd,
  textTween: sd,
  remove: Yh,
  tween: hh,
  delay: Ch,
  duration: Nh,
  ease: Mh,
  easeVarying: Dh,
  end: od,
  [Symbol.iterator]: Ue[Symbol.iterator]
};
function ud(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var fd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ud
};
function cd(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function hd(t) {
  var e, n;
  t instanceof rn ? (e = t._id, t = t._name) : (e = ll(), (n = fd).time = Xs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Vi(l, t, e, u, a, n || cd(l, e));
  return new rn(r, this._parents, t, e);
}
wr.prototype.interrupt = uh;
wr.prototype.transition = hd;
const As = Math.PI, Es = 2 * As, wn = 1e-6, dd = Es - wn;
function ul(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function pd(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return ul;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class vd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ul : pd(e);
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
    else if (c > wn) if (!(Math.abs(d * l - u * f) > wn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, g = i - o, y = l * l + u * u, $ = p * p + g * g, E = Math.sqrt(y), N = Math.sqrt(c), C = s * Math.tan((As - Math.acos((y + c - $) / (2 * E * N))) / 2), P = C / N, M = C / E;
      Math.abs(P - 1) > wn && this._append`L${e + P * f},${n + P * d}`, this._append`A${s},${s},0,0,${+(d * p > f * g)},${this._x1 = e + M * l},${this._y1 = n + M * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, d = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > wn || Math.abs(this._y1 - f) > wn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Es + Es), c > dd ? this._append`A${r},${r},0,1,${d},${e - o},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = f}` : c > wn && this._append`A${r},${r},0,${+(c >= As)},${d},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function gd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const _d = gd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Pt(t) {
  return function() {
    return t;
  };
}
const ka = Math.abs, Nt = Math.atan2, yn = Math.cos, md = Math.max, es = Math.min, Ce = Math.sin, tr = Math.sqrt, Ot = 1e-12, zr = Math.PI, Ri = zr / 2, vi = 2 * zr;
function yd(t) {
  return t > 1 ? 0 : t < -1 ? zr : Math.acos(t);
}
function Ma(t) {
  return t >= 1 ? Ri : t <= -1 ? -Ri : Math.asin(t);
}
function wd(t) {
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
  }, () => new vd(e);
}
function xd(t) {
  return t.innerRadius;
}
function bd(t) {
  return t.outerRadius;
}
function $d(t) {
  return t.startAngle;
}
function Ad(t) {
  return t.endAngle;
}
function Ed(t) {
  return t && t.padAngle;
}
function Rd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, d = o - s, c = d * l - f * u;
  if (!(c * c < Ot))
    return c = (f * (e - s) - d * (t - i)) / c, [t + c * l, e + c * u];
}
function si(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / tr(o * o + l * l), f = u * l, d = -u * o, c = t + f, p = e + d, g = n + f, y = r + d, $ = (c + g) / 2, E = (p + y) / 2, N = g - c, C = y - p, P = N * N + C * C, M = i - s, G = c * y - g * p, ft = (C < 0 ? -1 : 1) * tr(md(0, M * M * P - G * G)), K = (G * C - N * ft) / P, at = (-G * N - C * ft) / P, et = (G * C + N * ft) / P, gt = (-G * N + C * ft) / P, _t = K - $, F = at - E, I = et - $, zt = gt - E;
  return _t * _t + F * F > I * I + zt * zt && (K = et, at = gt), {
    cx: K,
    cy: at,
    x01: -f,
    y01: -d,
    x11: K * (i / M - 1),
    y11: at * (i / M - 1)
  };
}
function Te() {
  var t = xd, e = bd, n = Pt(0), r = null, i = $d, s = Ad, a = Ed, o = null, l = wd(u);
  function u() {
    var f, d, c = +t.apply(this, arguments), p = +e.apply(this, arguments), g = i.apply(this, arguments) - Ri, y = s.apply(this, arguments) - Ri, $ = ka(y - g), E = y > g;
    if (o || (o = f = l()), p < c && (d = p, p = c, c = d), !(p > Ot)) o.moveTo(0, 0);
    else if ($ > vi - Ot)
      o.moveTo(p * yn(g), p * Ce(g)), o.arc(0, 0, p, g, y, !E), c > Ot && (o.moveTo(c * yn(y), c * Ce(y)), o.arc(0, 0, c, y, g, E));
    else {
      var N = g, C = y, P = g, M = y, G = $, ft = $, K = a.apply(this, arguments) / 2, at = K > Ot && (r ? +r.apply(this, arguments) : tr(c * c + p * p)), et = es(ka(p - c) / 2, +n.apply(this, arguments)), gt = et, _t = et, F, I;
      if (at > Ot) {
        var zt = Ma(at / c * Ce(K)), ee = Ma(at / p * Ce(K));
        (G -= zt * 2) > Ot ? (zt *= E ? 1 : -1, P += zt, M -= zt) : (G = 0, P = M = (g + y) / 2), (ft -= ee * 2) > Ot ? (ee *= E ? 1 : -1, N += ee, C -= ee) : (ft = 0, N = C = (g + y) / 2);
      }
      var xt = p * yn(N), Ft = p * Ce(N), Ct = c * yn(M), fe = c * Ce(M);
      if (et > Ot) {
        var z = p * yn(C), Tt = p * Ce(C), an = c * yn(P), Z = c * Ce(P), kt;
        if ($ < zr)
          if (kt = Rd(xt, Ft, an, Z, z, Tt, Ct, fe)) {
            var $e = xt - kt[0], Ae = Ft - kt[1], Ve = z - kt[0], pt = Tt - kt[1], Ye = 1 / Ce(yd(($e * Ve + Ae * pt) / (tr($e * $e + Ae * Ae) * tr(Ve * Ve + pt * pt))) / 2), on = tr(kt[0] * kt[0] + kt[1] * kt[1]);
            gt = es(et, (c - on) / (Ye - 1)), _t = es(et, (p - on) / (Ye + 1));
          } else
            gt = _t = 0;
      }
      ft > Ot ? _t > Ot ? (F = si(an, Z, xt, Ft, p, _t, E), I = si(z, Tt, Ct, fe, p, _t, E), o.moveTo(F.cx + F.x01, F.cy + F.y01), _t < et ? o.arc(F.cx, F.cy, _t, Nt(F.y01, F.x01), Nt(I.y01, I.x01), !E) : (o.arc(F.cx, F.cy, _t, Nt(F.y01, F.x01), Nt(F.y11, F.x11), !E), o.arc(0, 0, p, Nt(F.cy + F.y11, F.cx + F.x11), Nt(I.cy + I.y11, I.cx + I.x11), !E), o.arc(I.cx, I.cy, _t, Nt(I.y11, I.x11), Nt(I.y01, I.x01), !E))) : (o.moveTo(xt, Ft), o.arc(0, 0, p, N, C, !E)) : o.moveTo(xt, Ft), !(c > Ot) || !(G > Ot) ? o.lineTo(Ct, fe) : gt > Ot ? (F = si(Ct, fe, z, Tt, c, -gt, E), I = si(xt, Ft, an, Z, c, -gt, E), o.lineTo(F.cx + F.x01, F.cy + F.y01), gt < et ? o.arc(F.cx, F.cy, gt, Nt(F.y01, F.x01), Nt(I.y01, I.x01), !E) : (o.arc(F.cx, F.cy, gt, Nt(F.y01, F.x01), Nt(F.y11, F.x11), !E), o.arc(0, 0, c, Nt(F.cy + F.y11, F.cx + F.x11), Nt(I.cy + I.y11, I.cx + I.x11), E), o.arc(I.cx, I.cy, gt, Nt(I.y11, I.x11), Nt(I.y01, I.x01), !E))) : o.arc(0, 0, c, M, P, E);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - zr / 2;
    return [yn(d) * f, Ce(d) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Pt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Pt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Pt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Pt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Pt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Pt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Pt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Cd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Td(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Sd(t) {
  return t;
}
function ns() {
  var t = Sd, e = Td, n = null, r = Pt(0), i = Pt(vi), s = Pt(0);
  function a(o) {
    var l, u = (o = Cd(o)).length, f, d, c = 0, p = new Array(u), g = new Array(u), y = +r.apply(this, arguments), $ = Math.min(vi, Math.max(-vi, i.apply(this, arguments) - y)), E, N = Math.min(Math.abs($) / u, s.apply(this, arguments)), C = N * ($ < 0 ? -1 : 1), P;
    for (l = 0; l < u; ++l)
      (P = g[p[l] = l] = +t(o[l], l, o)) > 0 && (c += P);
    for (e != null ? p.sort(function(M, G) {
      return e(g[M], g[G]);
    }) : n != null && p.sort(function(M, G) {
      return n(o[M], o[G]);
    }), l = 0, d = c ? ($ - u * C) / c : 0; l < u; ++l, y = E)
      f = p[l], P = g[f], E = y + (P > 0 ? P * d : 0) + C, g[f] = {
        data: o[f],
        index: l,
        value: P,
        startAngle: y,
        endAngle: E,
        padAngle: N
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Pt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Pt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Pt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Pt(+o), a) : s;
  }, a;
}
function Dr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Dr.prototype = {
  constructor: Dr,
  scale: function(t) {
    return t === 1 ? this : new Dr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Dr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Dr.prototype;
var Nd = /* @__PURE__ */ Mu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const kd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function fl(t, e) {
  Ss(e, !0), Do(t, kd);
  let n = vt(e, "jsonData", 7), r = vt(e, "currentRound", 7, 1), i = vt(e, "mouseEventType", 15), s = vt(e, "mouseData", 15), a = vt(e, "mouseX", 15), o = vt(e, "mouseY", 15), l = vt(e, "requestRoundChange", 7, (h) => {
  }), u = vt(e, "candidateColors", 23, () => []), f = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), d = vt(e, "firstRoundDeterminesPercentages", 7, !1), c = vt(e, "displayPhase", 15, 0);
  function p(h) {
    return h.isTransfer ? `${h.label}__transfer` : h.transferIndex != null ? `${h.label}__${h.transferIndex}` : h.label;
  }
  const g = 800, y = 800, $ = Math.min(g, y) * 0.3, E = g / 2, N = y / 2, C = "Pie", P = "PieOutline", M = "Donut", G = "TextLayer", ft = "url(#cross-hatch)", K = 1.15, at = 0.1, et = 750, gt = 800, _t = "white", F = 1, I = "#ff00ff", zt = 3;
  function ee(h) {
    return "hatch-" + h.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let xt = [], Ft = [], Ct = [], fe = 0, z = 0;
  const Tt = {}, an = "No Further Rankings";
  let Z = /* @__PURE__ */ yt(null);
  function kt() {
    const h = st(x(Z));
    h.select("#" + C).remove(), h.select("#" + P).remove(), h.select("#" + M).remove(), h.select("#" + G).remove();
  }
  function $e(h) {
    l() && (nt = h, l()(h));
  }
  function Ae(h) {
    kt(), Ct = Ve(h), xt = Ks(h, C, Ct, E, N, 0, pt()), Ks(h, P, Ct, E, N, 0, pt(), !1, !1, !0), Rr();
  }
  Lu(() => {
    It(), setTimeout(
      () => {
        Ae(r());
      },
      0
    );
  });
  function Ve(h) {
    const _ = bt(h);
    return fe = xr(h), _;
  }
  function pt() {
    return $;
  }
  function Ye() {
    return pt() * 1.41;
  }
  function on(h) {
    let _ = 0;
    for (let m = 1; m < h; m++) {
      const A = n().results[m - 1].tallyResults;
      for (let b = 0; b < A.length; b++) {
        const T = A[b].transfers;
        if (T) {
          const D = T.exhausted;
          D && (_ += Number(D));
        }
      }
    }
    return _;
  }
  function jr(h, _) {
    if (h === "exhausted") return on(_);
    {
      const m = n().results[_ - 1].tally;
      return Number(m[h]);
    }
  }
  function Yi(h, _) {
    return jr(h, _).toLocaleString("en-US");
  }
  function Bn(h, _) {
    const m = d() ? fe : Hi(_);
    return (jr(h, _) / m).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function xr(h) {
    const _ = n().results[h - 1].tally;
    let m = 0;
    for (let [A, b] of Object.entries(_))
      m += Number(b);
    return m;
  }
  function br(h) {
    return h === "exhausted" || h === "Inactive Ballots";
  }
  function Hi(h) {
    const _ = n().results[h - 1].tally;
    let m = 0;
    for (let [A, b] of Object.entries(_))
      br(A) || (m += Number(b));
    return m;
  }
  function Wn(h, _) {
    if (!h || h < 1 || h > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && h === n().results.length)
      return [];
    const m = n().results[h - 1].tallyResults, A = [];
    for (let b = 0; b < m.length; b++) {
      const T = m[b][_];
      T != null && A.push(T);
    }
    return A;
  }
  function Un(h) {
    return Wn(h, "eliminated");
  }
  function w(h) {
    let _ = [];
    for (let m = 1; m <= h; m++) _ = _.concat(Wn(m, "elected"));
    return [...new Set(_)];
  }
  function W(h, _) {
    const m = n().results[_ - 1].tallyResults;
    let A = 0;
    const b = m.findIndex((T) => (T == null ? void 0 : T.elected) && h == T.elected);
    if (b >= 0) {
      const T = m[b].transfers;
      if (T)
        for (let [D, V] of Object.entries(T)) A += Number(V);
    } else
      return 0;
    return A;
  }
  function tt(h, _) {
    h.some((m) => br(m.label)) || h.push({ label: "exhausted", value: on(_) });
  }
  function bt(h) {
    const _ = [];
    for (let [m, A] of Object.entries(n().results[h - 1].tally))
      _.push({ label: m, value: Number(A) });
    return tt(_, h), _;
  }
  function Mt(h) {
    const _ = n().results[Math.max(0, h - 2)].tally, m = n().results[h - 1].tally, A = [];
    for (let [b] of Object.entries(_))
      A.push({ label: b, value: Number(m[b] ?? 0) });
    return tt(A, h), A;
  }
  function it(h, _) {
    const m = [];
    for (const A of h) {
      if (A.label === "exhausted" || A.isTransfer) {
        m.push(A);
        continue;
      }
      const b = W(A.label, _);
      b > 0 ? (m.push({
        label: A.label,
        value: b,
        isTransfer: !0
      }), m.push({ ...A, value: A.value - b })) : m.push(A);
    }
    return m;
  }
  function It() {
    const h = st(x(Z)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [m, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? _ < 10 ? Tt[m] = _d[_] : Tt[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Tt[m] = u()[_ % u().length], _++;
      {
        const b = h.clone(!0);
        b.attr("id", ee(m)).select("rect").attr("fill", Tt[m]), b.selectAll("circle").attr("fill", "#383838");
      }
    }
    Tt.exhausted = ft, Tt["Inactive Ballots"] = ft;
  }
  function He() {
    st(x(Z)).select("#" + M).remove();
  }
  function Xt(h, _) {
    const m = pi("global").duration(gt);
    _ && m.on("end", _);
    const A = it(Ct, h), T = ns().sort(null).value((D) => D.value)(A);
    Qs(h, C, T, 0, pt()), Qs(h, P, T, 0, pt(), !0), Ct = A, xt = T, He(), Be(h), gl(), ml(0, pt()), Rr();
  }
  function ce(h, _) {
    const m = pi("global").duration(gt);
    _ && m.on("end", _), zi(h);
  }
  function Bt(h, _) {
    const m = pi("global").duration(gt);
    _ && m.on("end", _), Ar(h), Xe(pt(), Ye());
  }
  let j = !1, St = [];
  function ct() {
    Rr(), j = !1, he();
  }
  function he() {
    if (St.length === 0) {
      nt !== r() && (r() === nt + 1 && nt > 0 && r() <= n().results.length ? (nt = r(), gn(r())) : r() >= 1 && r() <= n().results.length && (nt = r(), c(0), Ae(r())));
      return;
    }
    const h = St.shift();
    switch (h.type) {
      case "round": {
        const _ = h.round;
        _ === nt + 1 && nt > 0 && _ <= n().results.length ? (nt = _, gn(_)) : (_ !== nt && _ >= 1 && _ <= n().results.length && (nt = _, c(0), Ae(_)), he());
        break;
      }
      case "step":
        Jn();
        break;
    }
  }
  function gn(h) {
    if (h <= 1 || h > n().results.length) {
      he();
      return;
    }
    j = !0, z = h, c(0), Xt(z - 1, () => {
      ce(z - 1, () => {
        Bt(z, ct);
      });
    });
  }
  function Gn() {
    j || (j = !0, z = r(), _n());
  }
  function _n() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), St.length > 0) {
      ct();
      return;
    }
    const h = z < n().results.length - 1 ? _n : ct;
    Xt(z, () => {
      ce(z, () => {
        z++, $e(z), Bt(z, h);
      });
    });
  }
  Fs(() => {
    ze();
  });
  let nt = 0;
  function ze() {
    if (nt != r()) {
      if (j) {
        St.push({ type: "round", round: r() });
        return;
      }
      nt == r() - 1 && nt > 0 ? $r() : Kn(r()), nt = r();
    }
  }
  function Kn(h) {
    if (j) {
      St.push({ type: "round", round: h });
      return;
    }
    c(0), Ae(h);
  }
  function $r() {
    if (j) {
      St.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      Rr(), j = !1;
      return;
    }
    j = !0, c() === 0 ? Xt(z - 1, () => {
      ce(z - 1, () => {
        Bt(z, ct);
      });
    }) : c() === 1 ? ce(z - 1, () => {
      Bt(z, ct);
    }) : c() === 2 && Bt(z, ct), c(0);
  }
  function Jn() {
    if (r() > n().results.length) {
      Rr(), j = !1;
      return;
    }
    if (j) {
      St.push({ type: "step" });
      return;
    }
    j = !0, c((c() + 1) % 3), z = r(), c() === 1 ? Xt(z, ct) : c() === 2 ? ce(z, ct) : c() === 0 ? (z++, $e(z), Bt(z, ct)) : (j = !1, console.warn("displayPhase out of range at ", c()));
  }
  function Ar(h) {
    Ct = Mt(h), xt = Zs(h, C, Ct, 0, pt(), !0), Zs(h, P, Ct, 0, pt(), !1, !0), st(x(Z)).select("#" + P).selectAll(".eliminated").remove();
  }
  function Xe(h, _) {
    const m = st(x(Z)).select("#" + M), b = st(x(Z)).select("#" + C), T = {};
    for (const S of xt) {
      const k = S.data.label;
      if (S.data.isTransfer) continue;
      const R = b.select("#" + CSS.escape(p(S.data)));
      R.empty() || (T[k] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: S.startAngle,
        newEnd: S.endAngle
      });
    }
    const D = m.selectAll(".slice");
    let V = D.size();
    function L() {
      V--, V === 0 && _l();
    }
    D.select("path").transition("global").duration(et).attrTween("d", function(S) {
      const k = S.startAngle, R = S.endAngle, X = R - k, Wt = T[S.data.label];
      let Q, Ee;
      if (Wt) {
        const Zn = (Wt.oldStart + Wt.oldEnd) / 2, bl = (Wt.newStart + Wt.newEnd) / 2, $l = k - Zn;
        Q = bl + $l, Ee = Q + X;
      } else
        Q = k, Ee = R;
      const rt = Ge(k, Q), Re = Ge(R, Ee), We = Ge(_, h), Cr = Te();
      return function(Zn) {
        return Cr.innerRadius(Math.min(We(Zn), h) - 1).outerRadius(We(Zn)).startAngle(rt(Zn)).endAngle(Re(Zn)), Cr(S);
      };
    }).on("end", (S) => L());
  }
  function Be(h) {
    const _ = hl(h, xt);
    Ft = Js(h, M, _, E, N, pt(), Ye(), !1, !0);
    const m = st(x(Z));
    m.select("#" + C).raise(), m.select("#" + P).raise();
  }
  function zi(h) {
    const _ = pl(h, Ft, xt);
    Ft = ta(h, M, _, pt(), Ye(), !1);
  }
  function Er(h) {
    return Tt[h.data.label];
  }
  function cl(h) {
    const _ = {}, m = n().results[h - 1].tallyResults;
    for (let A = 0; A < m.length; A++) {
      let b = m[A].eliminated;
      if (b === void 0 && (b = m[A].elected), b === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = m[A].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [D, V] of Object.entries(T))
        _[D] === void 0 ? _[D] = Number(V) : _[D] += Number(V);
    }
    return _;
  }
  function hl(h, _) {
    const m = [], A = fe, b = n().results[h - 1].tallyResults;
    for (let T = 0; T < b.length; T++) {
      let D = b[T].eliminated;
      if (D === void 0 && (D = b[T].elected), D === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const V = b[T].transfers;
      if (V === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let L = _.find((k) => k.data.label == D && k.data.isTransfer);
      L === void 0 && (L = _.find((k) => k.data.label == D && !k.data.isTransfer));
      let S = 0;
      if (L) S = L.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, R] of Object.entries(V)) {
        let X;
        const Wt = _.find((rt) => rt.data.label == k);
        if (Wt)
          X = structuredClone(Wt);
        else if (k == "exhausted")
          X = {
            data: { label: k, value: Number(R) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (k == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", R);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", k);
          continue;
        }
        const Ee = Number(R) / A * 2 * Math.PI;
        X.startAngle = S, S = X.endAngle = S + Ee, X.index = T, X.data.transferIndex = T, m.push(X);
      }
    }
    return m;
  }
  function dl(h, _, m) {
    const A = {};
    for (let [b, T] of Object.entries(h)) {
      const D = m.find((S) => b == S.data.label);
      if (D === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", b);
        continue;
      }
      const V = (D.startAngle + D.endAngle) / 2, L = h[D.data.label] / _ * 2 * Math.PI;
      A[D.data.label] = V - L / 2;
    }
    return A;
  }
  function pl(h, _, m) {
    const A = [], b = fe, T = cl(h), D = dl(T, b, m);
    for (let [V, L] of _.entries()) {
      const S = structuredClone(L), k = L.endAngle - L.startAngle, R = m.find((X) => L.data.label === X.data.label && !X.data.isTransfer);
      if (R) {
        const X = R.data.label;
        S.startAngle = D[X], D[X] += k, S.endAngle = S.startAngle + k;
      } else if (L.data.label === "exhausted")
        S.startAngle = L.startAngle, S.endAngle = L.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", L.data.label);
        continue;
      }
      S.index = V, A.push(S);
    }
    return A;
  }
  function Gs(h, _, m, A, b, T) {
    const V = st(x(Z)).append("g").attr("id", G).attr("transform", `translate(${m}, ${A})`), L = Te().innerRadius(b * K).outerRadius(b * K);
    V.selectAll("text").data(_).enter().each(function(S) {
      S.endAngle - S.startAngle < at || S.data.isTransfer || st(this).append("g").attr("id", (k) => p(k.data)).classed("eliminated", (k) => T.includes(k.data.label) || k.data.isTransfer === !0).each(function(k, R) {
        k.data.label === "exhausted" && st(this).on("mouseenter", (X, Wt) => yl(X)).on("mouseleave", (X, Wt) => wl());
      }).append("text").attr("transform", (k) => `translate(${L.centroid(k)})`).attr("text-anchor", (k) => Xi(k.startAngle, k.endAngle)).text((k) => k.data.label === "exhausted" ? an : k.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((k) => {
        const R = Yi(k.data.label, h);
        return !d() && br(k.data.label) ? R : R + " (" + Bn(k.data.label, h) + ")";
      });
    });
  }
  function vl(h, _, m, A) {
    const T = st(x(Z)).select("#" + G), D = T.selectAll("tspan"), V = T.selectAll("g").data(_, (R) => p(R.data)).classed("eliminated", (R) => A.includes(R.data.label) || R.data.isTransfer === !0), L = Te().innerRadius(m * K).outerRadius(m * K + 1);
    D.transition("global").duration(et).attr("transform", (R) => `translate(${L.centroid(R)})`).attr("text-anchor", (R) => Xi(R.startAngle, R.endAngle)), V.select("text").transition("global").duration(et).attr("transform", (R) => `translate(${L.centroid(R)})`).attr("text-anchor", (R) => Xi(R.startAngle, R.endAngle)).on("end", (R) => k());
    let S = V.size();
    function k(R) {
      S--, S === 0 && (T.remove(), Gs(h, _, E, N, m, A));
    }
  }
  function Ks(h, _, m, A, b, T, D, V = !0, L = !1, S = !1) {
    const R = ns().sort(null).value((X) => X.value)(m);
    return Js(h, _, R, A, b, T, D, V, L, S), R;
  }
  function Rr() {
    st(x(Z)).select("#" + P).selectAll(".elected").select("path").style("stroke", I).style("stroke-width", `${zt}px`);
  }
  function Js(h, _, m, A, b, T, D, V, L, S = !1) {
    const k = Un(h), R = w(h), Q = st(x(Z)).attr("viewBox", `0 0 ${g} ${y}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${A}, ${b})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (rt) => k.includes(rt.data.label) || rt.data.isTransfer === !0).classed("elected", (rt) => R.includes(rt.data.label) && !rt.data.isTransfer).attr("id", (rt) => p(rt.data));
    S ? Q.style("pointer-events", "none") : Q.on("mouseenter", (rt, Re) => Wi(rt, Re)).on("mouseleave", (rt, Re) => Ui(rt, Re));
    const Ee = Te().outerRadius(D).innerRadius(T);
    if (L) {
      const rt = Te().outerRadius(T + 1).innerRadius(T), Re = Q.append("path").attr("d", rt).attr("stroke", S ? "none" : _t).attr("stroke-width", S ? 0 : F).attr("fill", "none").transition("global").duration(et).attr("d", (We) => Ee(We)).on("end", (We) => {
        S || Bi();
      });
      S ? Re.attr("fill", "none") : Re.attr("fill", (We) => Er(We));
    } else
      Q.append("path").attr("d", (rt) => Ee(rt)).attr("fill", S ? "none" : (rt) => Er(rt)).attr("stroke", S ? "none" : _t).attr("stroke-width", S ? 0 : F), S || Bi();
    return V && !S && Gs(h, m, A, b, D, k), m;
  }
  function gl() {
    const m = st(x(Z)).select("#" + G).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function _l() {
    const m = st(x(Z)).select("#" + G).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function ml(h, _) {
    const b = st(x(Z)).select("#" + C).selectAll(".eliminated"), T = Te().innerRadius(h), D = Te().outerRadius(_);
    b.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(et).attrTween("d", function(V) {
      const L = Ge(_, h);
      return function(S) {
        return D.innerRadius(L(S)), D(V);
      };
    }).attr("fill", (V) => `url(#${ee(V.data.label)})`), b.clone(!0).classed("finished", !0).select("path").transition("global").duration(et).attrTween("d", function(V) {
      const L = Ge(_, h);
      return function(S) {
        return T.outerRadius(L(S)), T(V);
      };
    }).attr("fill", (V) => Er(V));
  }
  function Xi(h, _) {
    const m = (h + _) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function Bi() {
    st(x(
      Z
      // force redisplay of text labels
    )).select("#" + G).raise().append("g").remove();
  }
  function Zs(h, _, m, A, b, T, D = !1) {
    const L = ns().sort(null).value((S) => S.value)(m);
    return ta(h, _, L, A, b, T, D), L;
  }
  function js(h, _, m, A, b = !1) {
    const T = Un(h), D = w(h), S = st(x(Z)).select("#" + _).selectAll(".slice").data(m, (R) => p(R.data)), k = S.enter().append("g").attr("class", "slice").attr("id", (R) => p(R.data)).classed("eliminated", !0);
    return b ? k.style("pointer-events", "none") : k.on("mouseenter", (R, X) => Wi(R, X)).on("mouseleave", (R, X) => Ui(R, X)), k.append("path").attr("d", (R) => A(R)).attr("fill", b ? "none" : (R) => Er(R)).attr("stroke", b ? "none" : _t).attr("stroke-width", b ? 0 : F), S.classed("eliminated", (R) => T.includes(R.data.label)).classed("elected", (R) => D.includes(R.data.label)), b || S.on("mouseenter", (R, X) => Wi(R, X)).on("mouseleave", (R, X) => Ui(R, X)), S;
  }
  function Qs(h, _, m, A, b, T = !1) {
    const D = Te().outerRadius(b).innerRadius(A);
    js(h, _, m, D, T).select("path").attr("d", (L) => D(L)).attr("fill", T ? "none" : (L) => Er(L));
  }
  function ta(h, _, m, A, b, T, D = !1) {
    const V = Te().outerRadius(b).innerRadius(A).startAngle((Q) => Q.startAngle).endAngle((Q) => Q.endAngle), L = Te().outerRadius(b).innerRadius(A), k = st(x(Z)).select("#" + _);
    k.selectAll(".slice").attr("prevStart", (Q) => Q.startAngle).attr("prevEnd", (Q) => Q.endAngle);
    const R = js(h, _, m, L, D);
    let X = R.size();
    function Wt() {
      X--, X <= 0 && (D || Bi(), k.selectAll(".finished").remove());
    }
    return R.select("path").transition("global").duration(et).attrTween("d", function(Q) {
      const Ee = Number(st(this.parentNode).attr("prevStart")), rt = Number(st(this.parentNode).attr("prevEnd")), Re = Ge(Ee, Q.startAngle), We = Ge(rt, Q.endAngle);
      return (Cr) => (V.startAngle(Re(Cr)).endAngle(We(Cr)), V(Q));
    }).on("end", function(Q) {
      Q.startAngle === Q.endAngle && st(this).attr("stroke", "none"), Wt();
    }), T && !D && vl(h, m, b, Un(h)), m;
  }
  function Wi(h, _) {
    s(_.data.label), i("enter"), a(h.clientX), o(h.clientY);
  }
  function Ui(h, _) {
    s(_.data.label), i("leave");
  }
  function yl(h, _) {
    i("show-exhausted"), a(h.clientX), o(h.clientY);
  }
  function wl(h, _) {
    i("hide-exhausted");
  }
  var xl = {
    pieColors: Tt,
    exhaustedLabel: an,
    countExhaustedVotes: on,
    getEliminatedCandidates: Un,
    getElectedCandidates: w,
    runFullAnimationFn: Gn,
    animateOnePhaseFn: Jn,
    get jsonData() {
      return n();
    },
    set jsonData(h) {
      n(h), ht();
    },
    get currentRound() {
      return r();
    },
    set currentRound(h = 1) {
      r(h), ht();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(h) {
      i(h), ht();
    },
    get mouseData() {
      return s();
    },
    set mouseData(h) {
      s(h), ht();
    },
    get mouseX() {
      return a();
    },
    set mouseX(h) {
      a(h), ht();
    },
    get mouseY() {
      return o();
    },
    set mouseY(h) {
      o(h), ht();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(h = (_) => {
    }) {
      l(h), ht();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(h = []) {
      u(h), ht();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(h = !1) {
      f(h), ht();
    },
    get firstRoundDeterminesPercentages() {
      return d();
    },
    set firstRoundDeterminesPercentages(h = !1) {
      d(h), ht();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(h = 0) {
      c(h), ht();
    }
  }, ea = Nd();
  return ui(ea, (h) => lt(Z, h), () => x(Z)), ve(t, ea), Ns(xl);
}
Io(
  fl,
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
var Md = /* @__PURE__ */ Xn("<span> </span> <!>", 1), Pd = /* @__PURE__ */ Xn("About to eliminate: <!>", 1), Dd = /* @__PURE__ */ Xn("<span> </span> <!>", 1), Fd = /* @__PURE__ */ Xn(" <!>", 1), Id = /* @__PURE__ */ Xn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Od = /* @__PURE__ */ Xn("<span> </span> <br/>", 1), Ld = /* @__PURE__ */ Xn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const qd = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;max-width:calc(100vw - 24px);text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl) {background-color:#4747ff;color:#fff;padding:4px 10px;font-size:0.8rem;min-width:107px;border:none;border-radius:3px;cursor:pointer;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl):hover {background-color:#4747c2;}.pie-chart-container.svelte-1r6y5gl {width:100%;min-width:auto;flex-grow:0;margin:0 auto;margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:20px;}

/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function Vd(t, e) {
  Ss(e, !0), Do(t, qd);
  const n = 0.85;
  let r = vt(e, "electionSummary", 7), i = vt(e, "currentRound", 7, 1), s = vt(e, "requestRoundChange", 7, (w) => {
  }), a = vt(e, "candidateColors", 23, () => []), o = vt(e, "textForWinner", 7, "elected"), l = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = vt(e, "firstRoundDeterminesPercentages", 7, !1), f = vt(e, "showCaptions", 7, !1);
  const d = {
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
  let c = /* @__PURE__ */ jn(() => d[o()] ?? d.elected), p = /* @__PURE__ */ yt(null), g = /* @__PURE__ */ yt(null), y = /* @__PURE__ */ yt(""), $ = /* @__PURE__ */ yt($n([])), E = /* @__PURE__ */ yt(""), N = /* @__PURE__ */ yt(""), C = /* @__PURE__ */ yt(0), P = /* @__PURE__ */ yt(0), M = /* @__PURE__ */ jn(() => G(r()));
  function G(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (W) {
        return console.error("Failed to parse JSON string:", W), {};
      }
    return w || {};
  }
  function ft(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function K(w, W, tt) {
    w.style.left = W + "px", w.style.top = tt + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const it = w.getBoundingClientRect();
      let It = W, He = tt + 20;
      It + it.width > window.innerWidth - 12 && (It = window.innerWidth - it.width - 12), It < 12 && (It = 12), He + it.height > window.innerHeight - 12 && (He = tt - it.height - 12), w.style.left = It + "px", w.style.top = He + "px";
    });
  }
  function at() {
    switch (x(E)) {
      case "enter":
        ((w) => {
          var W = Yl(w, 2);
          lt($, W[0], !0), lt(y, W[1], !0);
        })(gt(x(N), i())), x(p) && (K(x(p), x(C) || 0, x(P) || 0), x(p).style.opacity = String(n));
        break;
      case "leave":
        x(p) && (x(p).style.opacity = "0"), lt($, [], !0), lt(y, "");
        break;
      case "show-exhausted":
        x(g) && (K(x(g), x(C) || 0, x(P) || 0), x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x(E));
        break;
    }
  }
  Fs(() => at());
  function et(w, W) {
    return w === 1 ? W ? "vote was" : "vote will be" : W ? "votes were" : "votes will be";
  }
  function gt(w, W) {
    const tt = [], bt = w === "exhausted" ? z() : w;
    let Mt;
    w === "exhausted" ? Mt = Ct(1) : Mt = x(M).results[0].tally[w], tt.push(`${bt} started with ${Mt} votes.`);
    for (let it = 1; it <= W; it++) {
      it === W && (w === "exhausted" ? Mt = Ct(W) : Mt = x(M).results[W - 1].tally[w], tt.push(`${bt} has ${Mt} votes at round ${W}.`));
      const It = x(M).results[it - 1].tallyResults, He = ee(it);
      for (let Xt = 0; Xt < It.length; Xt++) {
        const ce = It[Xt].transfers, Bt = It[Xt].eliminated, j = It[Xt].elected;
        if (!He) {
          if (Bt)
            Bt === w && tt.push(`${bt} will be eliminated on round ${it}.`);
          else if (w === j && (tt.push(`${bt} ${x(c).event} on round ${it}.`), ce))
            for (let [ct, he] of Object.entries(ce))
              tt.push(`${he} ${et(Number(he), it < W)} transferred to ${ct} on round ${it}.`);
        }
        const St = Bt || j;
        if (St) {
          const ct = Number(ce[w]);
          ct && tt.push(`${ct} ${et(ct, it < W)} transferred from ${St} on round ${it}.`);
        }
      }
    }
    return [tt, bt];
  }
  function _t() {
    let w = 0;
    for (let W = 1; W <= x(M).results.length; W++) {
      if (ee(W)) continue;
      const tt = x(M).results[W - 1].tallyResults;
      for (let bt = 0; bt < tt.length; bt++)
        tt[bt].elected && w++;
    }
    return w;
  }
  const F = ["Eliminate", "Transfer", "Consolidate"];
  let I, zt = /* @__PURE__ */ yt(0);
  function ee(w) {
    return l() && x(M).results && w === x(M).results.length;
  }
  function xt(w) {
    return ee(w) ? [] : I ? I.getEliminatedCandidates(w) : [];
  }
  function Ft(w) {
    return ee(w) ? [] : I ? I.getElectedCandidates(w) : [];
  }
  function Ct(w) {
    return I ? I.countExhaustedVotes(w) : 0;
  }
  function fe() {
    I && I.animateOnePhaseFn && I.animateOnePhaseFn();
  }
  function z() {
    return I ? I.exhaustedLabel : "";
  }
  function Tt() {
    return I ? I.pieColors : {};
  }
  var an = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ht();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ht();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (W) => {
    }) {
      s(w), ht();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), ht();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), ht();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), ht();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), ht();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), ht();
    }
  }, Z = Ld(), kt = mn(Z), $e = Gt(kt);
  $e.__click = fe;
  var Ae = Gt($e, !0);
  Ut($e), Ut(kt);
  var Ve = de(kt, 4), pt = Gt(Ve), Ye = Gt(pt), on = Gt(Ye);
  ui(
    fl(on, {
      get jsonData() {
        return x(M);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: ft,
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
        return x(E);
      },
      set mouseEventType(w) {
        lt(E, w, !0);
      },
      get mouseData() {
        return x(N);
      },
      set mouseData(w) {
        lt(N, w, !0);
      },
      get mouseX() {
        return x(C);
      },
      set mouseX(w) {
        lt(C, w, !0);
      },
      get mouseY() {
        return x(P);
      },
      set mouseY(w) {
        lt(P, w, !0);
      },
      get displayPhase() {
        return x(zt);
      },
      set displayPhase(w) {
        lt(zt, w, !0);
      }
    }),
    (w) => I = w,
    () => I
  ), Ut(Ye), Ut(pt);
  var jr = de(pt, 2);
  {
    var Yi = (w) => {
      var W = Id(), tt = mn(W), bt = Gt(tt);
      Ut(tt);
      var Mt = de(tt, 2), it = Gt(Mt);
      {
        var It = (j) => {
          var St = Pd(), ct = de(mn(St));
          Zi(ct, 17, () => xt(i()), Ji, (he, gn, Gn) => {
            var _n = Md(), nt = mn(_n);
            let ze;
            var Kn = Gt(nt, !0);
            Ut(nt);
            var $r = de(nt, 2);
            {
              var Jn = (Xe) => {
                var Be = ca(", ");
                ve(Xe, Be);
              }, Ar = /* @__PURE__ */ jn(() => Gn < xt(i()).length - 1);
              Tr($r, (Xe) => {
                x(Ar) && Xe(Jn);
              });
            }
            Qn(
              (Xe) => {
                ze = pa(nt, "", ze, Xe), ln(Kn, x(gn));
              },
              [() => ({ color: Tt()[x(gn)] })]
            ), ve(he, _n);
          }), ve(j, St);
        }, He = /* @__PURE__ */ jn(() => xt(i()).length > 0);
        Tr(it, (j) => {
          x(He) && j(It);
        });
      }
      var Xt = de(it, 2);
      {
        var ce = (j) => {
          var St = Fd(), ct = mn(St), he = de(ct);
          Zi(he, 17, () => Ft(i()), Ji, (gn, Gn, _n) => {
            var nt = Dd(), ze = mn(nt);
            let Kn;
            var $r = Gt(ze, !0);
            Ut(ze);
            var Jn = de(ze, 2);
            {
              var Ar = (Be) => {
                var zi = ca(", ");
                ve(Be, zi);
              }, Xe = /* @__PURE__ */ jn(() => _n < Ft(i()).length - 1);
              Tr(Jn, (Be) => {
                x(Xe) && Be(Ar);
              });
            }
            Qn(
              (Be) => {
                Kn = pa(ze, "", Kn, Be), ln($r, x(Gn));
              },
              [() => ({ color: Tt()[x(Gn)] })]
            ), ve(gn, nt);
          }), Qn(() => ln(ct, `${x(c).caption ?? ""}: `)), ve(j, St);
        }, Bt = /* @__PURE__ */ jn(() => Ft(i()).length > 0);
        Tr(Xt, (j) => {
          x(Bt) && j(ce);
        });
      }
      Ut(Mt), Qn((j) => ln(bt, `${x(M).config.contest ?? ""}, ${j ?? ""} ${x(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [_t]), ve(w, W);
    };
    Tr(jr, (w) => {
      f() && w(Yi);
    });
  }
  Ut(Ve);
  var Bn = de(Ve, 2), xr = Gt(Bn), br = Gt(xr, !0);
  Ut(xr);
  var Hi = de(xr, 2);
  Zi(Hi, 17, () => x($), Ji, (w, W) => {
    var tt = Od(), bt = mn(tt), Mt = Gt(bt, !0);
    Ut(bt), ss(2), Qn(() => ln(Mt, x(W))), ve(w, tt);
  }), Ut(Bn), ui(Bn, (w) => lt(p, w), () => x(p));
  var Wn = de(Bn, 2), Un = Gt(Wn);
  return ss(2), Ut(Wn), ui(Wn, (w) => lt(g, w), () => x(g)), Qn(
    (w) => {
      ln(Ae, F[x(zt)]), ln(br, x(y)), ln(Un, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [z]
  ), ve(t, Z), Ns(an);
}
Su(["click"]);
customElements.define("pie-chart", Io(
  Vd,
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
