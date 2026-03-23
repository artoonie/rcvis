var yl = Object.defineProperty;
var js = (t) => {
  throw TypeError(t);
};
var wl = (t, e, n) => e in t ? yl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var st = (t, e, n) => wl(t, typeof e != "symbol" ? e + "" : e, n), Bi = (t, e, n) => e.has(t) || js("Cannot " + n);
var v = (t, e, n) => (Bi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), q = (t, e, n) => e.has(t) ? js("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), F = (t, e, n, r) => (Bi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), gt = (t, e, n) => (Bi(t, e, "access private method"), n);
var Na;
typeof window < "u" && ((Na = window.__svelte ?? (window.__svelte = {})).v ?? (Na.v = /* @__PURE__ */ new Set())).add("5");
const xl = 1, bl = 2, $l = 16, Al = 1, El = 4, Rl = 8, Cl = 16, Tl = 2, bs = "[", Ri = "[!", $s = "]", ar = {}, $t = Symbol(), Nl = "http://www.w3.org/1999/xhtml", Qi = !1;
var Ma = Array.isArray, Sl = Array.prototype.indexOf, or = Array.prototype.includes, Ci = Array.from, di = Object.keys, pi = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, kl = Object.prototype, Ml = Array.prototype, Pl = Object.getPrototypeOf, Js = Object.isExtensible;
const Dl = () => {
};
function Fl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Pa() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Il(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, Pr = 4, Ti = 8, Da = 1 << 24, nn = 16, be = 32, pn = 64, Fa = 128, oe = 512, yt = 1024, Rt = 2048, xe = 4096, jt = 8192, Qe = 16384, vr = 32768, lr = 65536, Qs = 1 << 17, Ia = 1 << 18, Yn = 1 << 19, Ol = 1 << 20, fn = 1 << 25, Fn = 65536, ts = 1 << 21, As = 1 << 22, cn = 1 << 23, Sr = Symbol("$state"), Oa = Symbol("legacy props"), yn = new class extends Error {
  constructor() {
    super(...arguments);
    st(this, "name", "StaleReactionError");
    st(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xr = 3, gr = 8;
function Ll(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ql() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Yl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wl(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Kl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ni(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function jl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Z = !1;
function Je(t) {
  Z = t;
}
let H;
function zt(t) {
  if (t === null)
    throw Ni(), ar;
  return H = t;
}
function Si() {
  return zt(/* @__PURE__ */ Ie(H));
}
function Wt(t) {
  if (Z) {
    if (/* @__PURE__ */ Ie(H) !== null)
      throw Ni(), ar;
    H = t;
  }
}
function es(t = 1) {
  if (Z) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(n);
    H = n;
  }
}
function vi(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === gr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === $s) {
        if (e === 0) return n;
        e -= 1;
      } else (r === bs || r === Ri || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(n)
    );
    t && n.remove(), n = i;
  }
}
function La(t) {
  if (!t || t.nodeType !== gr)
    throw Ni(), ar;
  return (
    /** @type {Comment} */
    t.data
  );
}
function qa(t) {
  return t === this.v;
}
function Jl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Va(t) {
  return !Jl(t, this.v);
}
let Ql = !1, Jt = null;
function ur(t) {
  Jt = t;
}
function Es(t, e = !1, n) {
  Jt = {
    p: Jt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Rs(t) {
  var e = (
    /** @type {ComponentContext} */
    Jt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      co(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Jt = e.p, t ?? /** @type {T} */
  {};
}
function Ya() {
  return !0;
}
let wn = [];
function Ha() {
  var t = wn;
  wn = [], Fl(t);
}
function kn(t) {
  if (wn.length === 0 && !kr) {
    var e = wn;
    queueMicrotask(() => {
      e === wn && Ha();
    });
  }
  wn.push(t);
}
function tu() {
  for (; wn.length > 0; )
    Ha();
}
function za(t) {
  var e = U;
  if (e === null)
    return Y.f |= cn, t;
  if ((e.f & vr) === 0 && (e.f & Pr) === 0)
    throw t;
  fr(t, e);
}
function fr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Fa) !== 0) {
      if ((e.f & vr) === 0)
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
const eu = -7169;
function ot(t, e) {
  t.f = t.f & eu | e;
}
function Cs(t) {
  (t.f & oe) !== 0 || t.deps === null ? ot(t, yt) : ot(t, xe);
}
function Xa(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Et) === 0 || (e.f & Fn) === 0 || (e.f ^= Fn, Xa(
        /** @type {Derived} */
        e.deps
      ));
}
function Ba(t, e, n) {
  (t.f & Rt) !== 0 ? e.add(t) : (t.f & xe) !== 0 && n.add(t), Xa(t.deps), ot(t, yt);
}
const Zr = /* @__PURE__ */ new Set();
let B = null, At = null, Vt = [], ki = null, ns = !1, kr = !1;
var Qn, tr, An, er, qr, Vr, En, Ue, nr, Fe, rs, is, Wa;
const zs = class zs {
  constructor() {
    q(this, Fe);
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
    q(this, Qn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, tr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, An, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    q(this, er, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, qr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, Vr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    q(this, En, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    q(this, Ue, /* @__PURE__ */ new Map());
    st(this, "is_fork", !1);
    q(this, nr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, er) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Ue).has(e) || v(this, Ue).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, Ue).get(e);
    if (n) {
      v(this, Ue).delete(e);
      for (var r of n.d)
        ot(r, Rt), ye(r);
      for (r of n.m)
        ot(r, xe), ye(r);
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
      gt(this, Fe, rs).call(this, s, n, r);
    if (this.is_deferred()) {
      gt(this, Fe, is).call(this, r), gt(this, Fe, is).call(this, n);
      for (const [s, a] of v(this, Ue))
        Za(s, a);
    } else {
      for (const s of v(this, Qn)) s();
      v(this, Qn).clear(), v(this, An) === 0 && gt(this, Fe, Wa).call(this), B = null, ta(r), ta(n), (i = v(this, qr)) == null || i.resolve();
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
    n !== $t && !this.previous.has(e) && this.previous.set(e, n), (e.f & cn) === 0 && (this.current.set(e, e.v), At == null || At.set(e, e.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, At = null);
  }
  flush() {
    if (this.activate(), Vt.length > 0) {
      if (Ua(), B !== null && B !== this)
        return;
    } else v(this, An) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, tr)) e(this);
    v(this, tr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    F(this, An, v(this, An) + 1), e && F(this, er, v(this, er) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    F(this, An, v(this, An) - 1), e && F(this, er, v(this, er) - 1), !v(this, nr) && (F(this, nr, !0), kn(() => {
      F(this, nr, !1), this.is_deferred() ? Vt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Vr))
      v(this, En).delete(e), ot(e, Rt), ye(e);
    for (const e of v(this, En))
      ot(e, xe), ye(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, Qn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, tr).add(e);
  }
  settled() {
    return (v(this, qr) ?? F(this, qr, Pa())).promise;
  }
  static ensure() {
    if (B === null) {
      const e = B = new zs();
      Zr.add(B), kr || kn(() => {
        B === e && e.flush();
      });
    }
    return B;
  }
  apply() {
  }
};
Qn = new WeakMap(), tr = new WeakMap(), An = new WeakMap(), er = new WeakMap(), qr = new WeakMap(), Vr = new WeakMap(), En = new WeakMap(), Ue = new WeakMap(), nr = new WeakMap(), Fe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
rs = function(e, n, r) {
  e.f ^= yt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (be | pn)) !== 0, l = o && (a & yt) !== 0, u = l || (a & jt) !== 0 || v(this, Ue).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= yt : s !== null && (a & (Pr | Ti | Da)) !== 0 ? s.b.defer_effect(i) : (a & Pr) !== 0 ? n.push(i) : Br(i) && ((a & nn) !== 0 && v(this, En).add(i), hr(i));
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
is = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ba(e[n], v(this, Vr), v(this, En));
}, Wa = function() {
  var i;
  if (Zr.size > 1) {
    this.previous.clear();
    var e = At, n = !0;
    for (const s of Zr) {
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
          Ga(f, o, l, u);
        if (Vt.length > 0) {
          B = s, s.apply();
          for (const f of Vt)
            gt(i = s, Fe, rs).call(i, f, [], []);
          s.deactivate();
        }
        Vt = r;
      }
    }
    B = null, At = e;
  }
  this.committed = !0, Zr.delete(this);
};
let tn = zs;
function ft(t) {
  var e = kr;
  kr = !0;
  try {
    for (var n; ; ) {
      if (tu(), Vt.length === 0 && (B == null || B.flush(), Vt.length === 0))
        return ki = null, /** @type {T} */
        n;
      Ua();
    }
  } finally {
    kr = e;
  }
}
function Ua() {
  ns = !0;
  var t = null;
  try {
    for (var e = 0; Vt.length > 0; ) {
      var n = tn.ensure();
      if (e++ > 1e3) {
        var r, i;
        nu();
      }
      n.process(Vt), hn.clear();
    }
  } finally {
    Vt = [], ns = !1, ki = null;
  }
}
function nu() {
  try {
    Xl();
  } catch (t) {
    fr(t, ki);
  }
}
let ve = null;
function ta(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Qe | jt)) === 0 && Br(r) && (ve = /* @__PURE__ */ new Set(), hr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && vo(r), (ve == null ? void 0 : ve.size) > 0)) {
        hn.clear();
        for (const i of ve) {
          if ((i.f & (Qe | jt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            ve.has(a) && (ve.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Qe | jt)) === 0 && hr(l);
          }
        }
        ve.clear();
      }
    }
    ve = null;
  }
}
function Ga(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Et) !== 0 ? Ga(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (As | nn)) !== 0 && (s & Rt) === 0 && Ka(i, e, r) && (ot(i, Rt), ye(
        /** @type {Effect} */
        i
      ));
    }
}
function Ka(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (or.call(e, i))
        return !0;
      if ((i.f & Et) !== 0 && Ka(
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
function ye(t) {
  for (var e = ki = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ns && e === U && (n & nn) !== 0 && (n & Ia) === 0)
      return;
    if ((n & (pn | be)) !== 0) {
      if ((n & yt) === 0) return;
      e.f ^= yt;
    }
  }
  Vt.push(e);
}
function Za(t, e) {
  if (!((t.f & be) !== 0 && (t.f & yt) !== 0)) {
    (t.f & Rt) !== 0 ? e.d.push(t) : (t.f & xe) !== 0 && e.m.push(t), ot(t, yt);
    for (var n = t.first; n !== null; )
      Za(n, e), n = n.next;
  }
}
function ru(t) {
  let e = 0, n = In(0), r;
  return () => {
    Ss() && (x(n), Ms(() => (e === 0 && (r = Di(() => t(() => Mr(n)))), e += 1, () => {
      kn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Mr(n));
      });
    })));
  };
}
var iu = lr | Yn | Fa;
function su(t, e, n) {
  new au(t, e, n);
}
var Kt, Yr, Te, Rn, Ne, ie, qt, Se, Ge, un, Cn, Ke, rr, Tn, ir, sr, Ze, Ai, ct, ja, Ja, ss, ri, ii, as;
class au {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    q(this, ct);
    /** @type {Boundary | null} */
    st(this, "parent");
    st(this, "is_pending", !1);
    /** @type {TemplateNode} */
    q(this, Kt);
    /** @type {TemplateNode | null} */
    q(this, Yr, Z ? H : null);
    /** @type {BoundaryProps} */
    q(this, Te);
    /** @type {((anchor: Node) => void)} */
    q(this, Rn);
    /** @type {Effect} */
    q(this, Ne);
    /** @type {Effect | null} */
    q(this, ie, null);
    /** @type {Effect | null} */
    q(this, qt, null);
    /** @type {Effect | null} */
    q(this, Se, null);
    /** @type {DocumentFragment | null} */
    q(this, Ge, null);
    /** @type {TemplateNode | null} */
    q(this, un, null);
    q(this, Cn, 0);
    q(this, Ke, 0);
    q(this, rr, !1);
    q(this, Tn, !1);
    /** @type {Set<Effect>} */
    q(this, ir, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, sr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, Ze, null);
    q(this, Ai, ru(() => (F(this, Ze, In(v(this, Cn))), () => {
      F(this, Ze, null);
    })));
    F(this, Kt, e), F(this, Te, n), F(this, Rn, r), this.parent = /** @type {Effect} */
    U.b, this.is_pending = !!v(this, Te).pending, F(this, Ne, Ps(() => {
      if (U.b = this, Z) {
        const s = v(this, Yr);
        Si(), /** @type {Comment} */
        s.nodeType === gr && /** @type {Comment} */
        s.data === Ri ? gt(this, ct, Ja).call(this) : (gt(this, ct, ja).call(this), v(this, Ke) === 0 && (this.is_pending = !1));
      } else {
        var i = gt(this, ct, ss).call(this);
        try {
          F(this, ie, ae(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, Ke) > 0 ? gt(this, ct, ii).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, un)) == null || s.remove();
      };
    }, iu)), Z && F(this, Kt, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ba(e, v(this, ir), v(this, sr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Te).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    gt(this, ct, as).call(this, e), F(this, Cn, v(this, Cn) + e), !(!v(this, Ze) || v(this, rr)) && (F(this, rr, !0), kn(() => {
      F(this, rr, !1), v(this, Ze) && cr(v(this, Ze), v(this, Cn));
    }));
  }
  get_effect_pending() {
    return v(this, Ai).call(this), x(
      /** @type {Source<number>} */
      v(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Te).onerror;
    let r = v(this, Te).failed;
    if (v(this, Tn) || !n && !r)
      throw e;
    v(this, ie) && (Dt(v(this, ie)), F(this, ie, null)), v(this, qt) && (Dt(v(this, qt)), F(this, qt, null)), v(this, Se) && (Dt(v(this, Se)), F(this, Se, null)), Z && (zt(
      /** @type {TemplateNode} */
      v(this, Yr)
    ), es(), zt(vi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        jl();
        return;
      }
      i = !0, s && Zl(), tn.ensure(), F(this, Cn, 0), v(this, Se) !== null && Mn(v(this, Se), () => {
        F(this, Se, null);
      }), this.is_pending = this.has_pending_snippet(), F(this, ie, gt(this, ct, ri).call(this, () => (F(this, Tn, !1), ae(() => v(this, Rn).call(this, v(this, Kt)))))), v(this, Ke) > 0 ? gt(this, ct, ii).call(this) : this.is_pending = !1;
    };
    kn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        fr(o, v(this, Ne) && v(this, Ne).parent);
      }
      r && F(this, Se, gt(this, ct, ri).call(this, () => {
        tn.ensure(), F(this, Tn, !0);
        try {
          return ae(() => {
            r(
              v(this, Kt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return fr(
            o,
            /** @type {Effect} */
            v(this, Ne).parent
          ), null;
        } finally {
          F(this, Tn, !1);
        }
      }));
    });
  }
}
Kt = new WeakMap(), Yr = new WeakMap(), Te = new WeakMap(), Rn = new WeakMap(), Ne = new WeakMap(), ie = new WeakMap(), qt = new WeakMap(), Se = new WeakMap(), Ge = new WeakMap(), un = new WeakMap(), Cn = new WeakMap(), Ke = new WeakMap(), rr = new WeakMap(), Tn = new WeakMap(), ir = new WeakMap(), sr = new WeakMap(), Ze = new WeakMap(), Ai = new WeakMap(), ct = new WeakSet(), ja = function() {
  try {
    F(this, ie, ae(() => v(this, Rn).call(this, v(this, Kt))));
  } catch (e) {
    this.error(e);
  }
}, Ja = function() {
  const e = v(this, Te).pending;
  e && (F(this, qt, ae(() => e(v(this, Kt)))), kn(() => {
    var n = gt(this, ct, ss).call(this);
    F(this, ie, gt(this, ct, ri).call(this, () => (tn.ensure(), ae(() => v(this, Rn).call(this, n))))), v(this, Ke) > 0 ? gt(this, ct, ii).call(this) : (Mn(
      /** @type {Effect} */
      v(this, qt),
      () => {
        F(this, qt, null);
      }
    ), this.is_pending = !1);
  }));
}, ss = function() {
  var e = v(this, Kt);
  return this.is_pending && (F(this, un, ue()), v(this, Kt).before(v(this, un)), e = v(this, un)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ri = function(e) {
  var n = U, r = Y, i = Jt;
  De(v(this, Ne)), fe(v(this, Ne)), ur(v(this, Ne).ctx);
  try {
    return e();
  } catch (s) {
    return za(s), null;
  } finally {
    De(n), fe(r), ur(i);
  }
}, ii = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Te).pending
  );
  v(this, ie) !== null && (F(this, Ge, document.createDocumentFragment()), v(this, Ge).append(
    /** @type {TemplateNode} */
    v(this, un)
  ), mo(v(this, ie), v(this, Ge))), v(this, qt) === null && F(this, qt, ae(() => e(v(this, Kt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
as = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && gt(n = this.parent, ct, as).call(n, e);
    return;
  }
  if (F(this, Ke, v(this, Ke) + e), v(this, Ke) === 0) {
    this.is_pending = !1;
    for (const r of v(this, ir))
      ot(r, Rt), ye(r);
    for (const r of v(this, sr))
      ot(r, xe), ye(r);
    v(this, ir).clear(), v(this, sr).clear(), v(this, qt) && Mn(v(this, qt), () => {
      F(this, qt, null);
    }), v(this, Ge) && (v(this, Kt).before(v(this, Ge)), F(this, Ge, null));
  }
};
function ou(t, e, n, r) {
  const i = Mi;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = B, o = (
    /** @type {Effect} */
    U
  ), l = lu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & Qe) === 0 && fr(p, o);
    }
    a == null || a.deactivate(), os();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ uu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => fr(c, o));
  }
  u ? u.then(h) : h();
}
function lu() {
  var t = U, e = Y, n = Jt, r = B;
  return function(s = !0) {
    De(t), fe(e), ur(n), s && (r == null || r.activate());
  };
}
function os() {
  De(null), fe(null), ur(null);
}
// @__NO_SIDE_EFFECTS__
function Mi(t) {
  var e = Et | Rt, n = Y !== null && (Y.f & Et) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return U !== null && (U.f |= Yn), {
    ctx: Jt,
    deps: null,
    effects: null,
    equals: qa,
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
function uu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && ql();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = In(
    /** @type {V} */
    $t
  ), o = !Y, l = /* @__PURE__ */ new Map();
  return yu(() => {
    var p;
    var u = Pa();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === B && f.committed && f.deactivate(), os();
      });
    } catch (g) {
      u.reject(g), os();
    }
    var f = (
      /** @type {Batch} */
      B
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = l.get(f)) == null || p.reject(yn), l.delete(f), l.set(f, u);
    }
    const c = (g, m = void 0) => {
      if (f.activate(), m)
        m !== yn && (a.f |= cn, cr(a, m));
      else {
        (a.f & cn) !== 0 && (a.f ^= cn), cr(a, g);
        for (const [b, $] of l) {
          if (l.delete(b), b === f) break;
          $.reject(yn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), gu(() => {
    for (const u of l.values())
      u.reject(yn);
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
function Gn(t) {
  const e = /* @__PURE__ */ Mi(t);
  return yo(e), e;
}
// @__NO_SIDE_EFFECTS__
function Qa(t) {
  const e = /* @__PURE__ */ Mi(t);
  return e.equals = Va, e;
}
function fu(t) {
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
function cu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & Qe) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ts(t) {
  var e, n = U;
  De(cu(t));
  try {
    t.f &= ~Fn, fu(t), e = $o(t);
  } finally {
    De(n);
  }
  return e;
}
function to(t) {
  var e = Ts(t);
  if (!t.equals(e) && (t.wv = xo(), (!(B != null && B.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    ot(t, yt);
    return;
  }
  dn || (At !== null ? (Ss() || B != null && B.is_fork) && At.set(t, e) : Cs(t));
}
function hu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(yn), r.teardown = Dl, r.ac = null, Dr(r, 0), Ds(r));
}
function eo(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && hr(e);
}
let ls = /* @__PURE__ */ new Set();
const hn = /* @__PURE__ */ new Map();
let no = !1;
function In(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: qa,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function mt(t, e) {
  const n = In(t);
  return yo(n), n;
}
// @__NO_SIDE_EFFECTS__
function ro(t, e = !1, n = !0) {
  const r = In(t);
  return e || (r.equals = Va), r;
}
function at(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (Y.f & Qs) !== 0) && Ya() && (Y.f & (Et | nn | As | Qs)) !== 0 && (le === null || !or.call(le, t)) && Kl();
  let r = n ? xn(e) : e;
  return cr(t, r);
}
function cr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    dn ? hn.set(t, e) : hn.set(t, n), t.v = e;
    var r = tn.ensure();
    if (r.capture(t, n), (t.f & Et) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Rt) !== 0 && Ts(i), Cs(i);
    }
    t.wv = xo(), io(t, Rt), U !== null && (U.f & yt) !== 0 && (U.f & (be | pn)) === 0 && (re === null ? bu([t]) : re.push(t)), !r.is_fork && ls.size > 0 && !no && du();
  }
  return e;
}
function du() {
  no = !1;
  for (const t of ls)
    (t.f & yt) !== 0 && ot(t, xe), Br(t) && hr(t);
  ls.clear();
}
function Mr(t) {
  at(t, t.v + 1);
}
function io(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Rt) === 0;
      if (o && ot(s, e), (a & Et) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        At == null || At.delete(l), (a & Fn) === 0 && (a & oe && (s.f |= Fn), io(l, xe));
      } else o && ((a & nn) !== 0 && ve !== null && ve.add(
        /** @type {Effect} */
        s
      ), ye(
        /** @type {Effect} */
        s
      ));
    }
}
function xn(t) {
  if (typeof t != "object" || t === null || Sr in t)
    return t;
  const e = Pl(t);
  if (e !== kl && e !== Ml)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ma(t), i = /* @__PURE__ */ mt(0), s = Pn, a = (o) => {
    if (Pn === s)
      return o();
    var l = Y, u = Pn;
    fe(null), ra(s);
    var f = o();
    return fe(l), ra(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ mt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ul();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ mt(u.value);
          return n.set(l, h), h;
        }) : at(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ mt($t));
            n.set(l, f), Mr(i);
          }
        } else
          at(u, $t), Mr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Sr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Sn(o, l)) != null && p.writable) && (f = a(() => {
          var g = xn(h ? o[l] : $t), m = /* @__PURE__ */ mt(g);
          return m;
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
          var h = n.get(l), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== $t)
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
        if (l === Sr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== $t || Reflect.has(o, l);
        if (u !== void 0 || U !== null && (!f || (c = Sn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? xn(o[l]) : $t, g = /* @__PURE__ */ mt(p);
            return g;
          }), n.set(l, u));
          var h = x(u);
          if (h === $t)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var E;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var g = n.get(p + "");
            g !== void 0 ? at(g, $t) : p in o && (g = a(() => /* @__PURE__ */ mt($t)), n.set(p + "", g));
          }
        if (h === void 0)
          (!c || (E = Sn(o, l)) != null && E.writable) && (h = a(() => /* @__PURE__ */ mt(void 0)), at(h, xn(u)), n.set(l, h));
        else {
          c = h.v !== $t;
          var m = a(() => xn(u));
          at(h, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= $.v && at($, C + 1);
          }
          Mr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== $t;
        });
        for (var [u, f] of n)
          f.v !== $t && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Gl();
      }
    }
  );
}
var ea, so, ao, oo;
function us() {
  if (ea === void 0) {
    ea = window, so = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ao = Sn(e, "firstChild").get, oo = Sn(e, "nextSibling").get, Js(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Js(n) && (n.__t = void 0);
  }
}
function ue(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  return (
    /** @type {TemplateNode | null} */
    ao.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return (
    /** @type {TemplateNode | null} */
    oo.call(t)
  );
}
function Ut(t, e) {
  if (!Z)
    return /* @__PURE__ */ On(t);
  var n = /* @__PURE__ */ On(H);
  if (n === null)
    n = H.appendChild(ue());
  else if (e && n.nodeType !== Xr) {
    var r = ue();
    return n == null || n.before(r), zt(r), r;
  }
  return e && Pi(
    /** @type {Text} */
    n
  ), zt(n), n;
}
function gn(t, e = !1) {
  if (!Z) {
    var n = /* @__PURE__ */ On(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ie(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Xr) {
      var r = ue();
      return H == null || H.before(r), zt(r), r;
    }
    Pi(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function pe(t, e = 1, n = !1) {
  let r = Z ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(r);
  if (!Z)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Xr) {
      var s = ue();
      return r === null ? i == null || i.after(s) : r.before(s), zt(s), s;
    }
    Pi(
      /** @type {Text} */
      r
    );
  }
  return zt(r), r;
}
function lo(t) {
  t.textContent = "";
}
function uo() {
  return !1;
}
function Ns(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Nl, t, void 0)
  );
}
function Pi(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Xr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function fo(t) {
  var e = Y, n = U;
  fe(null), De(null);
  try {
    return t();
  } finally {
    fe(e), De(n);
  }
}
function pu(t) {
  U === null && (Y === null && zl(), Hl()), dn && Yl();
}
function vu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Oe(t, e, n) {
  var r = U;
  r !== null && (r.f & jt) !== 0 && (t |= jt);
  var i = {
    ctx: Jt,
    deps: null,
    nodes: null,
    f: t | Rt | oe,
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
      hr(i);
    } catch (o) {
      throw Dt(i), o;
    }
  else e !== null && ye(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Yn) === 0 && (s = s.first, (t & nn) !== 0 && (t & lr) !== 0 && s !== null && (s.f |= lr)), s !== null && (s.parent = r, r !== null && vu(s, r), Y !== null && (Y.f & Et) !== 0 && (t & pn) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ss() {
  return Y !== null && !we;
}
function gu(t) {
  const e = Oe(Ti, null, !1);
  return ot(e, yt), e.teardown = t, e;
}
function ks(t) {
  pu();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !Y && (e & be) !== 0 && (e & vr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Jt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return co(t);
}
function co(t) {
  return Oe(Pr | Ol, t, !1);
}
function _u(t) {
  tn.ensure();
  const e = Oe(pn | Yn, t, !0);
  return () => {
    Dt(e);
  };
}
function mu(t) {
  tn.ensure();
  const e = Oe(pn | Yn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mn(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function ho(t) {
  return Oe(Pr, t, !1);
}
function yu(t) {
  return Oe(As | Yn, t, !0);
}
function Ms(t, e = 0) {
  return Oe(Ti | e, t, !0);
}
function Kn(t, e = [], n = [], r = []) {
  ou(r, e, n, (i) => {
    Oe(Ti, () => t(...i.map(x)), !0);
  });
}
function Ps(t, e = 0) {
  var n = Oe(nn | e, t, !0);
  return n;
}
function ae(t) {
  return Oe(be | Yn, t, !0);
}
function po(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = dn, r = Y;
    na(!0), fe(null);
    try {
      e.call(null);
    } finally {
      na(n), fe(r);
    }
  }
}
function Ds(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && fo(() => {
      i.abort(yn);
    });
    var r = n.next;
    (n.f & pn) !== 0 ? n.parent = null : Dt(n, e), n = r;
  }
}
function wu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & be) === 0 && Dt(e), e = n;
  }
}
function Dt(t, e = !0) {
  var n = !1;
  (e || (t.f & Ia) !== 0) && t.nodes !== null && t.nodes.end !== null && (xu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ds(t, e && !n), Dr(t, 0), ot(t, Qe);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  po(t);
  var i = t.parent;
  i !== null && i.first !== null && vo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function xu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Ie(t);
    t.remove(), t = n;
  }
}
function vo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Mn(t, e, n = !0) {
  var r = [];
  go(t, r, !0);
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
function go(t, e, n) {
  if ((t.f & jt) === 0) {
    t.f ^= jt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & lr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & be) !== 0 && (t.f & nn) !== 0;
      go(i, e, a ? n : !1), i = s;
    }
  }
}
function Fs(t) {
  _o(t, !0);
}
function _o(t, e) {
  if ((t.f & jt) !== 0) {
    t.f ^= jt, (t.f & yt) === 0 && (ot(t, Rt), ye(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & lr) !== 0 || (n.f & be) !== 0;
      _o(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function mo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ie(n);
      e.append(n), n = i;
    }
}
let si = !1, dn = !1;
function na(t) {
  dn = t;
}
let Y = null, we = !1;
function fe(t) {
  Y = t;
}
let U = null;
function De(t) {
  U = t;
}
let le = null;
function yo(t) {
  Y !== null && (le === null ? le = [t] : le.push(t));
}
let Yt = null, Gt = 0, re = null;
function bu(t) {
  re = t;
}
let wo = 1, bn = 0, Pn = bn;
function ra(t) {
  Pn = t;
}
function xo() {
  return ++wo;
}
function Br(t) {
  var e = t.f;
  if ((e & Rt) !== 0)
    return !0;
  if (e & Et && (t.f &= ~Fn), (e & xe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Br(
        /** @type {Derived} */
        s
      ) && to(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & oe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    At === null && ot(t, yt);
  }
  return !1;
}
function bo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(le !== null && or.call(le, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Et) !== 0 ? bo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ot(s, Rt) : (s.f & yt) !== 0 && ot(s, xe), ye(
        /** @type {Effect} */
        s
      ));
    }
}
function $o(t) {
  var m;
  var e = Yt, n = Gt, r = re, i = Y, s = le, a = Jt, o = we, l = Pn, u = t.f;
  Yt = /** @type {null | Value[]} */
  null, Gt = 0, re = null, Y = (u & (be | pn)) === 0 ? t : null, le = null, ur(t.ctx), we = !1, Pn = ++bn, t.ac !== null && (fo(() => {
    t.ac.abort(yn);
  }), t.ac = null);
  try {
    t.f |= ts;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= vr;
    var c = t.deps, p = B == null ? void 0 : B.is_fork;
    if (Yt !== null) {
      var g;
      if (p || Dr(t, Gt), c !== null && Gt > 0)
        for (c.length = Gt + Yt.length, g = 0; g < Yt.length; g++)
          c[Gt + g] = Yt[g];
      else
        t.deps = c = Yt;
      if (Ss() && (t.f & oe) !== 0)
        for (g = Gt; g < c.length; g++)
          ((m = c[g]).reactions ?? (m.reactions = [])).push(t);
    } else !p && c !== null && Gt < c.length && (Dr(t, Gt), c.length = Gt);
    if (Ya() && re !== null && !we && c !== null && (t.f & (Et | xe | Rt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      re.length; g++)
        bo(
          re[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (bn++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = bn;
      if (e !== null)
        for (const b of e)
          b.rv = bn;
      re !== null && (r === null ? r = re : r.push(.../** @type {Source[]} */
      re));
    }
    return (t.f & cn) !== 0 && (t.f ^= cn), h;
  } catch (b) {
    return za(b);
  } finally {
    t.f ^= ts, Yt = e, Gt = n, re = r, Y = i, le = s, ur(a), we = o, Pn = l;
  }
}
function $u(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Sl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !or.call(Yt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & oe) !== 0 && (s.f ^= oe, s.f &= ~Fn), Cs(s), hu(s), Dr(s, 0);
  }
}
function Dr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      $u(t, n[r]);
}
function hr(t) {
  var e = t.f;
  if ((e & Qe) === 0) {
    ot(t, yt);
    var n = U, r = si;
    U = t, si = !0;
    try {
      (e & (nn | Da)) !== 0 ? wu(t) : Ds(t), po(t);
      var i = $o(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = wo;
      var s;
      Qi && Ql && (t.f & Rt) !== 0 && t.deps;
    } finally {
      si = r, U = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Y !== null && !we) {
    var r = U !== null && (U.f & Qe) !== 0;
    if (!r && (le === null || !or.call(le, t))) {
      var i = Y.deps;
      if ((Y.f & ts) !== 0)
        t.rv < bn && (t.rv = bn, Yt === null && i !== null && i[Gt] === t ? Gt++ : Yt === null ? Yt = [t] : Yt.push(t));
      else {
        (Y.deps ?? (Y.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Y] : or.call(s, Y) || s.push(Y);
      }
    }
  }
  if (dn && hn.has(t))
    return hn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (dn) {
      var o = a.v;
      return ((a.f & yt) === 0 && a.reactions !== null || Eo(a)) && (o = Ts(a)), hn.set(a, o), o;
    }
    var l = (a.f & oe) === 0 && !we && Y !== null && (si || (Y.f & oe) !== 0), u = (a.f & vr) === 0;
    Br(a) && (l && (a.f |= oe), to(a)), l && !u && (eo(a), Ao(a));
  }
  if (At != null && At.has(t))
    return At.get(t);
  if ((t.f & cn) !== 0)
    throw t.v;
  return t.v;
}
function Ao(t) {
  if (t.f |= oe, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Et) !== 0 && (e.f & oe) === 0 && (eo(
        /** @type {Derived} */
        e
      ), Ao(
        /** @type {Derived} */
        e
      ));
}
function Eo(t) {
  if (t.v === $t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (hn.has(e) || (e.f & Et) !== 0 && Eo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Di(t) {
  var e = we;
  try {
    return we = !0, t();
  } finally {
    we = e;
  }
}
const Ro = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
function Au(t) {
  for (var e = 0; e < t.length; e++)
    Ro.add(t[e]);
  for (var n of fs)
    n(t);
}
let ia = null;
function sa(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ia = t;
  var a = 0, o = ia === t && t.__root;
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
    pi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, h = U;
    fe(null), De(null);
    try {
      for (var c, p = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch ($) {
          c ? p.push($) : c = $;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let $ of p)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fe(f), De(h);
    }
  }
}
var Sa, ka;
const Wi = (ka = (Sa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Sa.trustedTypes) == null ? void 0 : /* @__PURE__ */ ka.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Eu(t) {
  return (
    /** @type {string} */
    (Wi == null ? void 0 : Wi.createHTML(t)) ?? t
  );
}
function Co(t, e = !1) {
  var n = Ns("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Eu(t) : t, n.content;
}
function Ln(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Hn(t, e) {
  var n = (e & Tl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return Ln(H, null), H;
    r === void 0 && (r = Co(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || so ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ln(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ru(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return Ln(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Co(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ On(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ On(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ln(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Cu(t, e) {
  return /* @__PURE__ */ Ru(t, e, "svg");
}
function aa(t = "") {
  if (!Z) {
    var e = ue(t + "");
    return Ln(e, e), e;
  }
  var n = H;
  return n.nodeType !== Xr ? (n.before(n = ue()), zt(n)) : Pi(
    /** @type {Text} */
    n
  ), Ln(n, n), n;
}
function ge(t, e) {
  if (Z) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      U
    );
    ((n.f & vr) === 0 || n.nodes.end === null) && (n.nodes.end = H), Si();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Tu = ["touchstart", "touchmove"];
function Nu(t) {
  return Tu.includes(t);
}
function on(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function To(t, e) {
  return No(t, e);
}
function Su(t, e) {
  us(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = H;
  try {
    for (var s = /* @__PURE__ */ On(n); s && (s.nodeType !== gr || /** @type {Comment} */
    s.data !== bs); )
      s = /* @__PURE__ */ Ie(s);
    if (!s)
      throw ar;
    Je(!0), zt(
      /** @type {Comment} */
      s
    );
    const a = No(t, { ...e, anchor: s });
    return Je(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ar && console.warn("Failed to hydrate: ", a), e.recover === !1 && Bl(), us(), lo(n), Je(!1), To(t, e);
  } finally {
    Je(r), zt(i);
  }
}
const jr = /* @__PURE__ */ new Map();
function No(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  us();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var g = Nu(p);
        for (const $ of [e, document]) {
          var m = jr.get($);
          m === void 0 && (m = /* @__PURE__ */ new Map(), jr.set($, m));
          var b = m.get(p);
          b === void 0 ? ($.addEventListener(p, sa, { passive: g }), m.set(p, 1)) : m.set(p, b + 1);
        }
      }
    }
  };
  l(Ci(Ro)), fs.add(l);
  var u = void 0, f = mu(() => {
    var h = n ?? e.appendChild(ue());
    return su(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Es({});
        var p = (
          /** @type {ComponentContext} */
          Jt
        );
        if (s && (p.c = s), i && (r.$$events = i), Z && Ln(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, Z && (U.nodes.end = H, H === null || H.nodeType !== gr || /** @type {Comment} */
        H.data !== $s))
          throw Ni(), ar;
        Rs();
      }
    ), () => {
      var m;
      for (var c of o)
        for (const b of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            jr.get(b)
          ), g = (
            /** @type {number} */
            p.get(c)
          );
          --g == 0 ? (b.removeEventListener(c, sa), p.delete(c), p.size === 0 && jr.delete(b)) : p.set(c, g);
        }
      fs.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return cs.set(u, f), u;
}
let cs = /* @__PURE__ */ new WeakMap();
function ku(t, e) {
  const n = cs.get(t);
  return n ? (cs.delete(t), n(e)) : Promise.resolve();
}
var _e, ke, Zt, Nn, Hr, zr, Ei;
class Mu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    st(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, _e, /* @__PURE__ */ new Map());
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
    q(this, ke, /* @__PURE__ */ new Map());
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
    q(this, Nn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, Hr, !0);
    q(this, zr, () => {
      var e = (
        /** @type {Batch} */
        B
      );
      if (v(this, _e).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, _e).get(e)
        ), r = v(this, ke).get(n);
        if (r)
          Fs(r), v(this, Nn).delete(n);
        else {
          var i = v(this, Zt).get(n);
          i && (v(this, ke).set(n, i.effect), v(this, Zt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, _e)) {
          if (v(this, _e).delete(s), s === e)
            break;
          const o = v(this, Zt).get(a);
          o && (Dt(o.effect), v(this, Zt).delete(a));
        }
        for (const [s, a] of v(this, ke)) {
          if (s === n || v(this, Nn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, _e).values()).includes(s)) {
              var u = document.createDocumentFragment();
              mo(a, u), u.append(ue()), v(this, Zt).set(s, { effect: a, fragment: u });
            } else
              Dt(a);
            v(this, Nn).delete(s), v(this, ke).delete(s);
          };
          v(this, Hr) || !r ? (v(this, Nn).add(s), Mn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    q(this, Ei, (e) => {
      v(this, _e).delete(e);
      const n = Array.from(v(this, _e).values());
      for (const [r, i] of v(this, Zt))
        n.includes(r) || (Dt(i.effect), v(this, Zt).delete(r));
    });
    this.anchor = e, F(this, Hr, n);
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
    ), i = uo();
    if (n && !v(this, ke).has(e) && !v(this, Zt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = ue();
        s.append(a), v(this, Zt).set(e, {
          effect: ae(() => n(a)),
          fragment: s
        });
      } else
        v(this, ke).set(
          e,
          ae(() => n(this.anchor))
        );
    if (v(this, _e).set(r, e), i) {
      for (const [o, l] of v(this, ke))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, Zt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, zr)), r.ondiscard(v(this, Ei));
    } else
      Z && (this.anchor = H), v(this, zr).call(this);
  }
}
_e = new WeakMap(), ke = new WeakMap(), Zt = new WeakMap(), Nn = new WeakMap(), Hr = new WeakMap(), zr = new WeakMap(), Ei = new WeakMap();
function Pu(t) {
  Jt === null && Ll(), ks(() => {
    const e = Di(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function $r(t, e, n = !1) {
  Z && Si();
  var r = new Mu(t), i = n ? lr : 0;
  function s(a, o) {
    if (Z) {
      const f = La(t);
      var l;
      if (f === bs ? l = 0 : f === Ri ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = vi();
        zt(u), r.anchor = u, Je(!1), r.ensure(a, o), Je(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ps(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Ui(t, e) {
  return e;
}
function Du(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    Mn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            hs(Ci(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
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
      lo(f), f.append(u), t.items.clear();
    }
    hs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function hs(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Dt(t[n], e);
}
var oa;
function Gi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  Z && Si();
  var l = null, u = /* @__PURE__ */ Qa(() => {
    var m = n();
    return Ma(m) ? m : m == null ? [] : Ci(m);
  }), f, h = !0;
  function c() {
    g.fallback = l, Fu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & fn) === 0 ? Fs(l) : (l.f ^= fn, Rr(l, null, a)) : Mn(l, () => {
      l = null;
    }));
  }
  var p = Ps(() => {
    f = /** @type {V[]} */
    x(u);
    var m = f.length;
    let b = !1;
    if (Z) {
      var $ = La(a) === Ri;
      $ !== (m === 0) && (a = vi(), zt(a), Je(!1), b = !0);
    }
    for (var C = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      B
    ), S = uo(), T = 0; T < m; T += 1) {
      Z && H.nodeType === gr && /** @type {Comment} */
      H.data === $s && (a = /** @type {Comment} */
      H, b = !0, Je(!1));
      var G = f[T], lt = r(G, T), K = h ? null : o.get(lt);
      K ? (K.v && cr(K.v, G), K.i && cr(K.i, T), S && E.unskip_effect(K.e)) : (K = Iu(
        o,
        h ? a : oa ?? (oa = ue()),
        G,
        lt,
        T,
        i,
        e,
        n
      ), h || (K.e.f |= fn), o.set(lt, K)), C.add(lt);
    }
    if (m === 0 && s && !l && (h ? l = ae(() => s(a)) : (l = ae(() => s(oa ?? (oa = ue()))), l.f |= fn)), m > C.size && Vl(), Z && m > 0 && zt(vi()), !h)
      if (S) {
        for (const [rt, Q] of o)
          C.has(rt) || E.skip_effect(Q.e);
        E.oncommit(c), E.ondiscard(() => {
        });
      } else
        c();
    b && Je(!0), x(u);
  }), g = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, Z && (a = H);
}
function Ar(t) {
  for (; t !== null && (t.f & be) === 0; )
    t = t.next;
  return t;
}
function Fu(t, e, n, r, i) {
  var K;
  var s = e.length, a = t.items, o = Ar(t.effect.first), l, u = null, f = [], h = [], c, p, g, m;
  for (m = 0; m < s; m += 1) {
    if (c = e[m], p = i(c, m), g = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const rt of t.outrogroups)
        rt.pending.delete(g), rt.done.delete(g);
    if ((g.f & fn) !== 0)
      if (g.f ^= fn, g === o)
        Rr(g, null, n);
      else {
        var b = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ln(t, u, g), ln(t, g, b), Rr(g, b, n), u = g, f = [], h = [], o = Ar(u.next);
        continue;
      }
    if ((g.f & jt) !== 0 && Fs(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var $ = h[0], C;
          u = $.prev;
          var E = f[0], S = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            Rr(f[C], $, n);
          for (C = 0; C < h.length; C += 1)
            l.delete(h[C]);
          ln(t, E.prev, S.next), ln(t, u, E), ln(t, S, $), o = $, u = S, m -= 1, f = [], h = [];
        } else
          l.delete(g), Rr(g, o, n), ln(t, g.prev, g.next), ln(t, g, u === null ? t.effect.first : u.next), ln(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = Ar(o.next);
      if (o === null)
        continue;
    }
    (g.f & fn) === 0 && f.push(g), u = g, o = Ar(g.next);
  }
  if (t.outrogroups !== null) {
    for (const rt of t.outrogroups)
      rt.pending.size === 0 && (hs(Ci(rt.done)), (K = t.outrogroups) == null || K.delete(rt));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var T = [];
    if (l !== void 0)
      for (g of l)
        (g.f & jt) === 0 && T.push(g);
    for (; o !== null; )
      (o.f & jt) === 0 && o !== t.fallback && T.push(o), o = Ar(o.next);
    var G = T.length;
    if (G > 0) {
      var lt = null;
      Du(t, T, lt);
    }
  }
}
function Iu(t, e, n, r, i, s, a, o) {
  var l = (a & xl) !== 0 ? (a & $l) === 0 ? /* @__PURE__ */ ro(n, !1, !1) : In(n) : null, u = (a & bl) !== 0 ? In(i) : null;
  return {
    v: l,
    i: u,
    e: ae(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Rr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & fn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function ln(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function So(t, e) {
  ho(() => {
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
      const i = Ns("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function la(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Ou(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += la(r)), i && (n += la(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Ki(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function ua(t, e, n, r) {
  var i = t.__style;
  if (Z || i !== e) {
    var s = Ou(e, r);
    (!Z || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Ki(t, n == null ? void 0 : n[0], r[0]), Ki(t, n == null ? void 0 : n[1], r[1], "important")) : Ki(t, n, r));
  return r;
}
function fa(t, e) {
  return t === e || (t == null ? void 0 : t[Sr]) === e;
}
function ai(t = {}, e, n, r) {
  return ho(() => {
    var i, s;
    return Ms(() => {
      i = s, s = [], Di(() => {
        t !== n(...s) && (e(t, ...s), i && fa(n(...i), t) && e(null, ...i));
      });
    }), () => {
      kn(() => {
        s && fa(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Jr = !1;
function Lu(t) {
  var e = Jr;
  try {
    return Jr = !1, [t(), Jr];
  } finally {
    Jr = e;
  }
}
function ht(t, e, n, r) {
  var C;
  var i = (n & Rl) !== 0, s = (n & Cl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Di(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Sr in t || Oa in t;
    u = ((C = Sn(t, e)) == null ? void 0 : C.set) ?? (f && e in t ? (E) => t[e] = E : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Lu(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (Wl(), u(h)));
  var p;
  if (p = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? l() : (o = !0, E);
  }, (n & El) === 0)
    return p;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, S) {
        return arguments.length > 0 ? ((!S || g || c) && u(S ? p() : E), E) : p();
      })
    );
  }
  var m = !1, b = ((n & Al) !== 0 ? Mi : Qa)(() => (m = !1, p()));
  i && x(b);
  var $ = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(E, S) {
      if (arguments.length > 0) {
        const T = S ? x(b) : i ? xn(E) : E;
        return at(b, T), m = !0, a !== void 0 && (a = T), E;
      }
      return dn && m || ($.f & Qe) !== 0 ? b.v : x(b);
    })
  );
}
function qu(t) {
  return new Vu(t);
}
var je, se;
class Vu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    q(this, je);
    /** @type {Record<string, any>} */
    q(this, se);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ ro(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Oa ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return at(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    F(this, se, (e.hydrate ? Su : To)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ft(), F(this, je, i.$$events);
    for (const a of Object.keys(v(this, se)))
      a === "$set" || a === "$destroy" || a === "$on" || pi(this, a, {
        get() {
          return v(this, se)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, se)[a] = o;
        },
        enumerable: !0
      });
    v(this, se).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, se).$destroy = () => {
      ku(v(this, se));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, se).$set(e);
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
    v(this, se).$destroy();
  }
}
je = new WeakMap(), se = new WeakMap();
let ko;
typeof HTMLElement == "function" && (ko = class extends HTMLElement {
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
          const o = Ns("slot");
          s !== "default" && (o.name = s), ge(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Yu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = oi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = qu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = _u(() => {
        Ms(() => {
          var s;
          this.$$r = !0;
          for (const a of di(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = oi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = oi(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return di(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function oi(t, e, n, r) {
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
function Yu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Mo(t, e, n, r, i, s) {
  let a = class extends ko {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return di(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return di(e).forEach((o) => {
    pi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = oi(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Sn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    pi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Hu = { value: () => {
} };
function Po() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new li(n);
}
function li(t) {
  this._ = t;
}
function zu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
li.prototype = Po.prototype = {
  constructor: li,
  on: function(t, e) {
    var n = this._, r = zu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Xu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = ca(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ca(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new li(t);
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
function Xu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ca(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Hu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ds = "http://www.w3.org/1999/xhtml";
const ha = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fi(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ha.hasOwnProperty(e) ? { space: ha[e], local: t } : t;
}
function Bu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ds && e.documentElement.namespaceURI === ds ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Wu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Do(t) {
  var e = Fi(t);
  return (e.local ? Wu : Bu)(e);
}
function Uu() {
}
function Is(t) {
  return t == null ? Uu : function() {
    return this.querySelector(t);
  };
}
function Gu(t) {
  typeof t != "function" && (t = Is(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new Qt(r, this._parents);
}
function Ku(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Zu() {
  return [];
}
function Fo(t) {
  return t == null ? Zu : function() {
    return this.querySelectorAll(t);
  };
}
function ju(t) {
  return function() {
    return Ku(t.apply(this, arguments));
  };
}
function Ju(t) {
  typeof t == "function" ? t = ju(t) : t = Fo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new Qt(r, i);
}
function Io(t) {
  return function() {
    return this.matches(t);
  };
}
function Oo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Qu = Array.prototype.find;
function tf(t) {
  return function() {
    return Qu.call(this.children, t);
  };
}
function ef() {
  return this.firstElementChild;
}
function nf(t) {
  return this.select(t == null ? ef : tf(typeof t == "function" ? t : Oo(t)));
}
var rf = Array.prototype.filter;
function sf() {
  return Array.from(this.children);
}
function af(t) {
  return function() {
    return rf.call(this.children, t);
  };
}
function of(t) {
  return this.selectAll(t == null ? sf : af(typeof t == "function" ? t : Oo(t)));
}
function lf(t) {
  typeof t != "function" && (t = Io(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Qt(r, this._parents);
}
function Lo(t) {
  return new Array(t.length);
}
function uf() {
  return new Qt(this._enter || this._groups.map(Lo), this._parents);
}
function gi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
gi.prototype = {
  constructor: gi,
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
function ff(t) {
  return function() {
    return t;
  };
}
function cf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new gi(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function hf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new gi(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function df(t) {
  return t.__data__;
}
function pf(t, e) {
  if (!arguments.length) return Array.from(this, df);
  var n = e ? hf : cf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ff(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = vf(t.call(f, f && f.__data__, u, r)), g = p.length, m = o[u] = new Array(g), b = a[u] = new Array(g), $ = l[u] = new Array(c);
    n(f, h, m, b, $, p, e);
    for (var C = 0, E = 0, S, T; C < g; ++C)
      if (S = m[C]) {
        for (C >= E && (E = C + 1); !(T = b[E]) && ++E < g; ) ;
        S._next = T || null;
      }
  }
  return a = new Qt(a, r), a._enter = o, a._exit = l, a;
}
function vf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function gf() {
  return new Qt(this._exit || this._groups.map(Lo), this._parents);
}
function _f(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function mf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || f[g]) && (c[g] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new Qt(o, this._parents);
}
function yf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function wf(t) {
  t || (t = xf);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new Qt(i, this._parents).order();
}
function xf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function bf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $f() {
  return Array.from(this);
}
function Af() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ef() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Rf() {
  return !this.node();
}
function Cf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function Tf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Nf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Sf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function kf(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Mf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Pf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Df(t, e) {
  var n = Fi(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Nf : Tf : typeof e == "function" ? n.local ? Pf : Mf : n.local ? kf : Sf)(n, e));
}
function qo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ff(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function If(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Of(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Lf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ff : typeof e == "function" ? Of : If)(t, e, n ?? "")) : dr(this.node(), t);
}
function dr(t, e) {
  return t.style.getPropertyValue(e) || qo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function qf(t) {
  return function() {
    delete this[t];
  };
}
function Vf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Yf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Hf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? qf : typeof e == "function" ? Yf : Vf)(t, e)) : this.node()[t];
}
function Vo(t) {
  return t.trim().split(/^|\s+/);
}
function Os(t) {
  return t.classList || new Yo(t);
}
function Yo(t) {
  this._node = t, this._names = Vo(t.getAttribute("class") || "");
}
Yo.prototype = {
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
function Ho(t, e) {
  for (var n = Os(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function zo(t, e) {
  for (var n = Os(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function zf(t) {
  return function() {
    Ho(this, t);
  };
}
function Xf(t) {
  return function() {
    zo(this, t);
  };
}
function Bf(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ho : zo)(this, t);
  };
}
function Wf(t, e) {
  var n = Vo(t + "");
  if (arguments.length < 2) {
    for (var r = Os(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Bf : e ? zf : Xf)(n, e));
}
function Uf() {
  this.textContent = "";
}
function Gf(t) {
  return function() {
    this.textContent = t;
  };
}
function Kf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Zf(t) {
  return arguments.length ? this.each(t == null ? Uf : (typeof t == "function" ? Kf : Gf)(t)) : this.node().textContent;
}
function jf() {
  this.innerHTML = "";
}
function Jf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Qf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? jf : (typeof t == "function" ? Qf : Jf)(t)) : this.node().innerHTML;
}
function ec() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nc() {
  return this.each(ec);
}
function rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ic() {
  return this.each(rc);
}
function sc(t) {
  var e = typeof t == "function" ? t : Do(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ac() {
  return null;
}
function oc(t, e) {
  var n = typeof t == "function" ? t : Do(t), r = e == null ? ac : typeof e == "function" ? e : Is(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function uc() {
  return this.each(lc);
}
function fc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function cc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function hc(t) {
  return this.select(t ? cc : fc);
}
function dc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function pc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function vc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function gc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function _c(t, e, n) {
  return function() {
    var r = this.__on, i, s = pc(e);
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
function mc(t, e, n) {
  var r = vc(t + ""), i, s = r.length, a;
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
  for (o = e ? _c : gc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Xo(t, e, n) {
  var r = qo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function yc(t, e) {
  return function() {
    return Xo(this, t, e);
  };
}
function wc(t, e) {
  return function() {
    return Xo(this, t, e.apply(this, arguments));
  };
}
function xc(t, e) {
  return this.each((typeof e == "function" ? wc : yc)(t, e));
}
function* bc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Bo = [null];
function Qt(t, e) {
  this._groups = t, this._parents = e;
}
function _r() {
  return new Qt([[document.documentElement]], Bo);
}
function $c() {
  return this;
}
Qt.prototype = _r.prototype = {
  constructor: Qt,
  select: Gu,
  selectAll: Ju,
  selectChild: nf,
  selectChildren: of,
  filter: lf,
  data: pf,
  enter: uf,
  exit: gf,
  join: _f,
  merge: mf,
  selection: $c,
  order: yf,
  sort: wf,
  call: bf,
  nodes: $f,
  node: Af,
  size: Ef,
  empty: Rf,
  each: Cf,
  attr: Df,
  style: Lf,
  property: Hf,
  classed: Wf,
  text: Zf,
  html: tc,
  raise: nc,
  lower: ic,
  append: sc,
  insert: oc,
  remove: uc,
  clone: hc,
  datum: dc,
  on: mc,
  dispatch: xc,
  [Symbol.iterator]: bc
};
function _t(t) {
  return typeof t == "string" ? new Qt([[document.querySelector(t)]], [document.documentElement]) : new Qt([[t]], Bo);
}
function Ls(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Wo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Wr() {
}
var Fr = 0.7, _i = 1 / Fr, Jn = "\\s*([+-]?\\d+)\\s*", Ir = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ac = /^#([0-9a-f]{3,8})$/, Ec = new RegExp(`^rgb\\(${Jn},${Jn},${Jn}\\)$`), Rc = new RegExp(`^rgb\\(${Pe},${Pe},${Pe}\\)$`), Cc = new RegExp(`^rgba\\(${Jn},${Jn},${Jn},${Ir}\\)$`), Tc = new RegExp(`^rgba\\(${Pe},${Pe},${Pe},${Ir}\\)$`), Nc = new RegExp(`^hsl\\(${Ir},${Pe},${Pe}\\)$`), Sc = new RegExp(`^hsla\\(${Ir},${Pe},${Pe},${Ir}\\)$`), da = {
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
Ls(Wr, qn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pa,
  // Deprecated! Use color.formatHex.
  formatHex: pa,
  formatHex8: kc,
  formatHsl: Mc,
  formatRgb: va,
  toString: va
});
function pa() {
  return this.rgb().formatHex();
}
function kc() {
  return this.rgb().formatHex8();
}
function Mc() {
  return Uo(this).formatHsl();
}
function va() {
  return this.rgb().formatRgb();
}
function qn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ac.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ga(e) : n === 3 ? new Ht(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Qr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Qr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Ec.exec(t)) ? new Ht(e[1], e[2], e[3], 1) : (e = Rc.exec(t)) ? new Ht(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Cc.exec(t)) ? Qr(e[1], e[2], e[3], e[4]) : (e = Tc.exec(t)) ? Qr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Nc.exec(t)) ? ya(e[1], e[2] / 100, e[3] / 100, 1) : (e = Sc.exec(t)) ? ya(e[1], e[2] / 100, e[3] / 100, e[4]) : da.hasOwnProperty(t) ? ga(da[t]) : t === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function ga(t) {
  return new Ht(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ht(t, e, n, r);
}
function Pc(t) {
  return t instanceof Wr || (t = qn(t)), t ? (t = t.rgb(), new Ht(t.r, t.g, t.b, t.opacity)) : new Ht();
}
function ps(t, e, n, r) {
  return arguments.length === 1 ? Pc(t) : new Ht(t, e, n, r ?? 1);
}
function Ht(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ls(Ht, ps, Wo(Wr, {
  brighter(t) {
    return t = t == null ? _i : Math.pow(_i, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(Dn(this.r), Dn(this.g), Dn(this.b), mi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _a,
  // Deprecated! Use color.formatHex.
  formatHex: _a,
  formatHex8: Dc,
  formatRgb: ma,
  toString: ma
}));
function _a() {
  return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}`;
}
function Dc() {
  return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}${$n((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ma() {
  const t = mi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Dn(this.r)}, ${Dn(this.g)}, ${Dn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function mi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Dn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function $n(t) {
  return t = Dn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ya(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new me(t, e, n, r);
}
function Uo(t) {
  if (t instanceof me) return new me(t.h, t.s, t.l, t.opacity);
  if (t instanceof Wr || (t = qn(t)), !t) return new me();
  if (t instanceof me) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new me(a, o, l, t.opacity);
}
function Fc(t, e, n, r) {
  return arguments.length === 1 ? Uo(t) : new me(t, e, n, r ?? 1);
}
function me(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ls(me, Fc, Wo(Wr, {
  brighter(t) {
    return t = t == null ? _i : Math.pow(_i, t), new me(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new me(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Ht(
      Zi(t >= 240 ? t - 240 : t + 120, i, r),
      Zi(t, i, r),
      Zi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new me(wa(this.h), ti(this.s), ti(this.l), mi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = mi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wa(this.h)}, ${ti(this.s) * 100}%, ${ti(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ti(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Zi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const qs = (t) => () => t;
function Ic(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Oc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Lc(t) {
  return (t = +t) == 1 ? Go : function(e, n) {
    return n - e ? Oc(e, n, t) : qs(isNaN(e) ? n : e);
  };
}
function Go(t, e) {
  var n = e - t;
  return n ? Ic(t, n) : qs(isNaN(t) ? e : t);
}
const yi = (function t(e) {
  var n = Lc(e);
  function r(i, s) {
    var a = n((i = ps(i)).r, (s = ps(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Go(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function qc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Vc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Yc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Zn(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Hc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Me(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function zc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Zn(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ji = new RegExp(vs.source, "g");
function Xc(t) {
  return function() {
    return t;
  };
}
function Bc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ko(t, e) {
  var n = vs.lastIndex = ji.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = vs.exec(t)) && (i = ji.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Me(r, i) })), n = ji.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Bc(l[0].x) : Xc(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Zn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? qs(e) : (n === "number" ? Me : n === "string" ? (r = qn(e)) ? (e = r, yi) : Ko : e instanceof qn ? yi : e instanceof Date ? Hc : Vc(e) ? qc : Array.isArray(e) ? Yc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? zc : Me)(t, e);
}
var xa = 180 / Math.PI, gs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * xa,
    skewX: Math.atan(l) * xa,
    scaleX: a,
    scaleY: o
  };
}
var ei;
function Wc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? gs : Zo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Uc(t) {
  return t == null || (ei || (ei = document.createElementNS("http://www.w3.org/2000/svg", "g")), ei.setAttribute("transform", t), !(t = ei.transform.baseVal.consolidate())) ? gs : (t = t.matrix, Zo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var m = p.push("translate(", null, e, null, n);
      g.push({ i: m - 4, x: Me(u, h) }, { i: m - 2, x: Me(f, c) });
    } else (h || c) && p.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Me(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Me(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Me(u, h) }, { i: m - 2, x: Me(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var g = -1, m = c.length, b; ++g < m; ) h[(b = c[g]).i] = b.x(p);
      return h.join("");
    };
  };
}
var Gc = jo(Wc, "px, ", "px)", "deg)"), Kc = jo(Uc, ", ", ")", ")"), pr = 0, Cr = 0, Er = 0, Jo = 1e3, wi, Tr, xi = 0, Vn = 0, Ii = 0, Or = typeof performance == "object" && performance.now ? performance : Date, Qo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Vs() {
  return Vn || (Qo(Zc), Vn = Or.now() + Ii);
}
function Zc() {
  Vn = 0;
}
function bi() {
  this._call = this._time = this._next = null;
}
bi.prototype = tl.prototype = {
  constructor: bi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vs() : +n) + (e == null ? 0 : +e), !this._next && Tr !== this && (Tr ? Tr._next = this : wi = this, Tr = this), this._call = t, this._time = n, _s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, _s());
  }
};
function tl(t, e, n) {
  var r = new bi();
  return r.restart(t, e, n), r;
}
function jc() {
  Vs(), ++pr;
  for (var t = wi, e; t; )
    (e = Vn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --pr;
}
function ba() {
  Vn = (xi = Or.now()) + Ii, pr = Cr = 0;
  try {
    jc();
  } finally {
    pr = 0, Qc(), Vn = 0;
  }
}
function Jc() {
  var t = Or.now(), e = t - xi;
  e > Jo && (Ii -= e, xi = t);
}
function Qc() {
  for (var t, e = wi, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : wi = n);
  Tr = t, _s(r);
}
function _s(t) {
  if (!pr) {
    Cr && (Cr = clearTimeout(Cr));
    var e = t - Vn;
    e > 24 ? (t < 1 / 0 && (Cr = setTimeout(ba, t - Or.now() - Ii)), Er && (Er = clearInterval(Er))) : (Er || (xi = Or.now(), Er = setInterval(Jc, Jo)), pr = 1, Qo(ba));
  }
}
function $a(t, e, n) {
  var r = new bi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var th = Po("start", "end", "cancel", "interrupt"), eh = [], el = 0, Aa = 1, ms = 2, ui = 3, Ea = 4, ys = 5, fi = 6;
function Oi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  nh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: th,
    tween: eh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: el
  });
}
function Ys(t, e) {
  var n = $e(t, e);
  if (n.state > el) throw new Error("too late; already scheduled");
  return n;
}
function Le(t, e) {
  var n = $e(t, e);
  if (n.state > ui) throw new Error("too late; already running");
  return n;
}
function $e(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function nh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = tl(s, 0, n.time);
  function s(u) {
    n.state = Aa, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Aa) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === ui) return $a(a);
        p.state === Ea ? (p.state = fi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = fi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if ($a(function() {
      n.state === ui && (n.state = Ea, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = ms, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ms) {
      for (n.state = ui, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ys, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === ys && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = fi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function rh(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > ms && r.state < ys, r.state = fi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function ih(t) {
  return this.each(function() {
    rh(this, t);
  });
}
function sh(t, e) {
  var n, r;
  return function() {
    var i = Le(this, t), s = i.tween;
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
function ah(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Le(this, t), a = s.tween;
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
function oh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = $e(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? sh : ah)(n, t, e));
}
function Hs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Le(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return $e(i, r).value[e];
  };
}
function nl(t, e) {
  var n;
  return (typeof e == "number" ? Me : e instanceof qn ? yi : (n = qn(e)) ? (e = n, yi) : Ko)(t, e);
}
function lh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ch(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function hh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function dh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function ph(t, e) {
  var n = Fi(t), r = n === "transform" ? Kc : nl;
  return this.attrTween(t, typeof e == "function" ? (n.local ? dh : hh)(n, r, Hs(this, "attr." + t, e)) : e == null ? (n.local ? uh : lh)(n) : (n.local ? ch : fh)(n, r, e));
}
function vh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function gh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function _h(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && gh(t, s)), n;
  }
  return i._value = e, i;
}
function mh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && vh(t, s)), n;
  }
  return i._value = e, i;
}
function yh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Fi(t);
  return this.tween(n, (r.local ? _h : mh)(r, e));
}
function wh(t, e) {
  return function() {
    Ys(this, t).delay = +e.apply(this, arguments);
  };
}
function xh(t, e) {
  return e = +e, function() {
    Ys(this, t).delay = e;
  };
}
function bh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? wh : xh)(e, t)) : $e(this.node(), e).delay;
}
function $h(t, e) {
  return function() {
    Le(this, t).duration = +e.apply(this, arguments);
  };
}
function Ah(t, e) {
  return e = +e, function() {
    Le(this, t).duration = e;
  };
}
function Eh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $h : Ah)(e, t)) : $e(this.node(), e).duration;
}
function Rh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Le(this, t).ease = e;
  };
}
function Ch(t) {
  var e = this._id;
  return arguments.length ? this.each(Rh(e, t)) : $e(this.node(), e).ease;
}
function Th(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Le(this, t).ease = n;
  };
}
function Nh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Th(this._id, t));
}
function Sh(t) {
  typeof t != "function" && (t = Io(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new en(r, this._parents, this._name, this._id);
}
function kh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new en(a, this._parents, this._name, this._id);
}
function Mh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ph(t, e, n) {
  var r, i, s = Mh(e) ? Ys : Le;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Dh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? $e(this.node(), n).on.on(t) : this.each(Ph(n, t, e));
}
function Fh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ih() {
  return this.on("end.remove", Fh(this._id));
}
function Oh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Is(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Oi(u[c], e, n, c, u, $e(f, n)));
  return new en(s, this._parents, e, n);
}
function Lh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Fo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, g = $e(f, n), m = 0, b = c.length; m < b; ++m)
          (p = c[m]) && Oi(p, e, n, m, c, g);
        s.push(c), a.push(f);
      }
  return new en(s, a, e, n);
}
var qh = _r.prototype.constructor;
function Vh() {
  return new qh(this._groups, this._parents);
}
function Yh(t, e) {
  var n, r, i;
  return function() {
    var s = dr(this, t), a = (this.style.removeProperty(t), dr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function rl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = dr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function zh(t, e, n) {
  var r, i, s;
  return function() {
    var a = dr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), dr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Xh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Le(this, t), u = l.on, f = l.value[s] == null ? o || (o = rl(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Bh(t, e, n) {
  var r = (t += "") == "transform" ? Gc : nl;
  return e == null ? this.styleTween(t, Yh(t, r)).on("end.style." + t, rl(t)) : typeof e == "function" ? this.styleTween(t, zh(t, r, Hs(this, "style." + t, e))).each(Xh(this._id, t)) : this.styleTween(t, Hh(t, r, e), n).on("end.style." + t, null);
}
function Wh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Uh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Wh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Gh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Uh(t, e, n ?? ""));
}
function Kh(t) {
  return function() {
    this.textContent = t;
  };
}
function Zh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function jh(t) {
  return this.tween("text", typeof t == "function" ? Zh(Hs(this, "text", t)) : Kh(t == null ? "" : t + ""));
}
function Jh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Qh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Jh(i)), e;
  }
  return r._value = t, r;
}
function td(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Qh(t));
}
function ed() {
  for (var t = this._name, e = this._id, n = il(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = $e(l, e);
        Oi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new en(r, this._parents, t, n);
}
function nd() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Le(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var rd = 0;
function en(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ci(t) {
  return _r().transition(t);
}
function il() {
  return ++rd;
}
var Be = _r.prototype;
en.prototype = ci.prototype = {
  constructor: en,
  select: Oh,
  selectAll: Lh,
  selectChild: Be.selectChild,
  selectChildren: Be.selectChildren,
  filter: Sh,
  merge: kh,
  selection: Vh,
  transition: ed,
  call: Be.call,
  nodes: Be.nodes,
  node: Be.node,
  size: Be.size,
  empty: Be.empty,
  each: Be.each,
  on: Dh,
  attr: ph,
  attrTween: yh,
  style: Bh,
  styleTween: Gh,
  text: jh,
  textTween: td,
  remove: Ih,
  tween: oh,
  delay: bh,
  duration: Eh,
  ease: Ch,
  easeVarying: Nh,
  end: nd,
  [Symbol.iterator]: Be[Symbol.iterator]
};
function id(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var sd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: id
};
function ad(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function od(t) {
  var e, n;
  t instanceof en ? (e = t._id, t = t._name) : (e = il(), (n = sd).time = Vs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Oi(l, t, e, u, a, n || ad(l, e));
  return new en(r, this._parents, t, e);
}
_r.prototype.interrupt = ih;
_r.prototype.transition = od;
const ws = Math.PI, xs = 2 * ws, mn = 1e-6, ld = xs - mn;
function sl(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function ud(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return sl;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class fd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? sl : ud(e);
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
    else if (c > mn) if (!(Math.abs(h * l - u * f) > mn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, g = i - o, m = l * l + u * u, b = p * p + g * g, $ = Math.sqrt(m), C = Math.sqrt(c), E = s * Math.tan((ws - Math.acos((m + c - b) / (2 * $ * C))) / 2), S = E / C, T = E / $;
      Math.abs(S - 1) > mn && this._append`L${e + S * f},${n + S * h}`, this._append`A${s},${s},0,0,${+(h * p > f * g)},${this._x1 = e + T * l},${this._y1 = n + T * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > mn || Math.abs(this._y1 - f) > mn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % xs + xs), c > ld ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > mn && this._append`A${r},${r},0,${+(c >= ws)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function cd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const hd = cd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Pt(t) {
  return function() {
    return t;
  };
}
const Ra = Math.abs, Nt = Math.atan2, _n = Math.cos, dd = Math.max, Ji = Math.min, Ce = Math.sin, jn = Math.sqrt, Lt = 1e-12, Lr = Math.PI, $i = Lr / 2, hi = 2 * Lr;
function pd(t) {
  return t > 1 ? 0 : t < -1 ? Lr : Math.acos(t);
}
function Ca(t) {
  return t >= 1 ? $i : t <= -1 ? -$i : Math.asin(t);
}
function vd(t) {
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
  }, () => new fd(e);
}
function gd(t) {
  return t.innerRadius;
}
function _d(t) {
  return t.outerRadius;
}
function md(t) {
  return t.startAngle;
}
function yd(t) {
  return t.endAngle;
}
function wd(t) {
  return t && t.padAngle;
}
function xd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Lt))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function ni(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / jn(o * o + l * l), f = u * l, h = -u * o, c = t + f, p = e + h, g = n + f, m = r + h, b = (c + g) / 2, $ = (p + m) / 2, C = g - c, E = m - p, S = C * C + E * E, T = i - s, G = c * m - g * p, lt = (E < 0 ? -1 : 1) * jn(dd(0, T * T * S - G * G)), K = (G * E - C * lt) / S, rt = (-G * C - E * lt) / S, Q = (G * E + C * lt) / S, dt = (-G * C + E * lt) / S, pt = K - b, M = rt - $, P = Q - b, Xt = dt - $;
  return pt * pt + M * M > P * P + Xt * Xt && (K = Q, rt = dt), {
    cx: K,
    cy: rt,
    x01: -f,
    y01: -h,
    x11: K * (i / T - 1),
    y11: rt * (i / T - 1)
  };
}
function We() {
  var t = gd, e = _d, n = Pt(0), r = null, i = md, s = yd, a = wd, o = null, l = vd(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), p = +e.apply(this, arguments), g = i.apply(this, arguments) - $i, m = s.apply(this, arguments) - $i, b = Ra(m - g), $ = m > g;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > Lt)) o.moveTo(0, 0);
    else if (b > hi - Lt)
      o.moveTo(p * _n(g), p * Ce(g)), o.arc(0, 0, p, g, m, !$), c > Lt && (o.moveTo(c * _n(m), c * Ce(m)), o.arc(0, 0, c, m, g, $));
    else {
      var C = g, E = m, S = g, T = m, G = b, lt = b, K = a.apply(this, arguments) / 2, rt = K > Lt && (r ? +r.apply(this, arguments) : jn(c * c + p * p)), Q = Ji(Ra(p - c) / 2, +n.apply(this, arguments)), dt = Q, pt = Q, M, P;
      if (rt > Lt) {
        var Xt = Ca(rt / c * Ce(K)), te = Ca(rt / p * Ce(K));
        (G -= Xt * 2) > Lt ? (Xt *= $ ? 1 : -1, S += Xt, T -= Xt) : (G = 0, S = T = (g + m) / 2), (lt -= te * 2) > Lt ? (te *= $ ? 1 : -1, C += te, E -= te) : (lt = 0, C = E = (g + m) / 2);
      }
      var St = p * _n(C), Ft = p * Ce(C), It = c * _n(T), ce = c * Ce(T);
      if (Q > Lt) {
        var z = p * _n(E), Ct = p * Ce(E), rn = c * _n(S), tt = c * Ce(S), kt;
        if (b < Lr)
          if (kt = xd(St, Ft, rn, tt, z, Ct, It, ce)) {
            var Ae = St - kt[0], Ee = Ft - kt[1], qe = z - kt[0], wt = Ct - kt[1], sn = 1 / Ce(pd((Ae * qe + Ee * wt) / (jn(Ae * Ae + Ee * Ee) * jn(qe * qe + wt * wt))) / 2), an = jn(kt[0] * kt[0] + kt[1] * kt[1]);
            dt = Ji(Q, (c - an) / (sn - 1)), pt = Ji(Q, (p - an) / (sn + 1));
          } else
            dt = pt = 0;
      }
      lt > Lt ? pt > Lt ? (M = ni(rn, tt, St, Ft, p, pt, $), P = ni(z, Ct, It, ce, p, pt, $), o.moveTo(M.cx + M.x01, M.cy + M.y01), pt < Q ? o.arc(M.cx, M.cy, pt, Nt(M.y01, M.x01), Nt(P.y01, P.x01), !$) : (o.arc(M.cx, M.cy, pt, Nt(M.y01, M.x01), Nt(M.y11, M.x11), !$), o.arc(0, 0, p, Nt(M.cy + M.y11, M.cx + M.x11), Nt(P.cy + P.y11, P.cx + P.x11), !$), o.arc(P.cx, P.cy, pt, Nt(P.y11, P.x11), Nt(P.y01, P.x01), !$))) : (o.moveTo(St, Ft), o.arc(0, 0, p, C, E, !$)) : o.moveTo(St, Ft), !(c > Lt) || !(G > Lt) ? o.lineTo(It, ce) : dt > Lt ? (M = ni(It, ce, z, Ct, c, -dt, $), P = ni(St, Ft, rn, tt, c, -dt, $), o.lineTo(M.cx + M.x01, M.cy + M.y01), dt < Q ? o.arc(M.cx, M.cy, dt, Nt(M.y01, M.x01), Nt(P.y01, P.x01), !$) : (o.arc(M.cx, M.cy, dt, Nt(M.y01, M.x01), Nt(M.y11, M.x11), !$), o.arc(0, 0, c, Nt(M.cy + M.y11, M.cx + M.x11), Nt(P.cy + P.y11, P.cx + P.x11), $), o.arc(P.cx, P.cy, dt, Nt(P.y11, P.x11), Nt(P.y01, P.x01), !$))) : o.arc(0, 0, c, T, S, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Lr / 2;
    return [_n(h) * f, Ce(h) * f];
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
function bd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function $d(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ad(t) {
  return t;
}
function Ta() {
  var t = Ad, e = $d, n = null, r = Pt(0), i = Pt(hi), s = Pt(0);
  function a(o) {
    var l, u = (o = bd(o)).length, f, h, c = 0, p = new Array(u), g = new Array(u), m = +r.apply(this, arguments), b = Math.min(hi, Math.max(-hi, i.apply(this, arguments) - m)), $, C = Math.min(Math.abs(b) / u, s.apply(this, arguments)), E = C * (b < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = g[p[l] = l] = +t(o[l], l, o)) > 0 && (c += S);
    for (e != null ? p.sort(function(T, G) {
      return e(g[T], g[G]);
    }) : n != null && p.sort(function(T, G) {
      return n(o[T], o[G]);
    }), l = 0, h = c ? (b - u * E) / c : 0; l < u; ++l, m = $)
      f = p[l], S = g[f], $ = m + (S > 0 ? S * h : 0) + E, g[f] = {
        data: o[f],
        index: l,
        value: S,
        startAngle: m,
        endAngle: $,
        padAngle: C
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
function Nr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Nr.prototype = {
  constructor: Nr,
  scale: function(t) {
    return t === 1 ? this : new Nr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Nr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Nr.prototype;
var Ed = /* @__PURE__ */ Cu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Rd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function al(t, e) {
  Es(e, !0), So(t, Rd);
  let n = ht(e, "jsonData", 7), r = ht(e, "currentRound", 7, 1), i = ht(e, "mouseEventType", 15), s = ht(e, "mouseData", 15), a = ht(e, "mouseX", 15), o = ht(e, "mouseY", 15), l = ht(e, "requestRoundChange", 7, (d) => {
  }), u = ht(e, "candidateColors", 23, () => []), f = ht(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = ht(e, "firstRoundDeterminesPercentages", 7, !1), c = ht(e, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const g = 800, m = 800, b = Math.min(g, m) * 0.3, $ = g / 2, C = m / 2, E = "Pie", S = "PieOutline", T = "Donut", G = "TextLayer", lt = "url(#cross-hatch)", K = 1.15, rt = 0.1, Q = 750, dt = 800, pt = "white", M = 1, P = "#ff00ff", Xt = 3;
  function te(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let St = [], Ft = [], It = [], ce = 0, z = 0;
  const Ct = {}, rn = "No Further Rankings";
  let tt = /* @__PURE__ */ mt(null);
  function kt() {
    const d = _t(x(tt));
    d.select("#" + E).remove(), d.select("#" + S).remove(), d.select("#" + T).remove(), d.select("#" + G).remove();
  }
  function Ae(d) {
    l() && (ut = d, l()(d));
  }
  function Ee(d) {
    kt(), It = qe(d), St = Bs(d, E, It, $, C, 0, wt()), Bs(d, S, It, $, C, 0, wt(), !1, !1, !0);
  }
  Pu(() => {
    xt(), setTimeout(
      () => {
        Ee(r());
      },
      0
    );
  });
  function qe(d) {
    const _ = J(d);
    return ce = mr(d), _;
  }
  function wt() {
    return b;
  }
  function sn() {
    return wt() * 1.41;
  }
  function an(d) {
    let _ = 0;
    for (let y = 1; y < d; y++) {
      const k = n().results[y - 1].tallyResults;
      for (let A = 0; A < k.length; A++) {
        const N = k[A].transfers;
        if (N) {
          const R = N.exhausted;
          R && (_ += Number(R));
        }
      }
    }
    return _;
  }
  function Ur(d, _) {
    if (d === "exhausted") return an(_);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[d]);
    }
  }
  function Li(d, _) {
    return Ur(d, _).toLocaleString("en-US");
  }
  function zn(d, _) {
    const y = h() ? ce : qi(_);
    return (Ur(d, _) / y).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function mr(d) {
    const _ = n().results[d - 1].tally;
    let y = 0;
    for (let [k, A] of Object.entries(_))
      y += Number(A);
    return y;
  }
  function Gr(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function qi(d) {
    const _ = n().results[d - 1].tally;
    let y = 0;
    for (let [k, A] of Object.entries(_))
      Gr(k) || (y += Number(A));
    return y;
  }
  function Xn(d, _) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const y = n().results[d - 1].tallyResults, k = [];
    for (let A = 0; A < y.length; A++) {
      const N = y[A][_];
      N != null && k.push(N);
    }
    return k;
  }
  function yr(d) {
    return Xn(d, "eliminated");
  }
  function w(d) {
    let _ = [];
    for (let y = 1; y <= d; y++) _ = _.concat(Xn(y, "elected"));
    return _;
  }
  function W(d, _) {
    const y = n().results[_ - 1].tallyResults;
    let k = 0;
    const A = y.findIndex((N) => (N == null ? void 0 : N.elected) && d == N.elected);
    if (A >= 0) {
      const N = y[A].transfers;
      if (N)
        for (let [R, L] of Object.entries(N)) k += Number(L);
    } else
      return 0;
    return k;
  }
  function J(d) {
    const _ = n().results;
    let y = _[Math.max(0, d - 2)].tally;
    const k = [], A = [];
    for (let [R, L] of Object.entries(y))
      k.push({ label: R, value: 0 });
    y = _[d - 1].tally;
    for (let R of k) {
      const L = Number(y[R.label]), V = W(R.label, d);
      V > 0 ? (A.push({
        label: R.label,
        value: V,
        isTransfer: !0
      }), R.value = L - V, A.push(R)) : (R.value = L, A.push(R));
    }
    const N = an(d);
    return A.push({ label: "exhausted", value: N }), A;
  }
  function xt() {
    const d = _t(x(tt)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, k] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? _ < 10 ? Ct[y] = hd[_] : Ct[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Ct[y] = u()[_ % u().length], _++;
      {
        const A = d.clone(!0);
        A.attr("id", te(y)).select("rect").attr("fill", Ct[y]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    Ct.exhausted = lt, Ct["Inactive Ballots"] = lt;
  }
  function Mt() {
    _t(x(tt)).select("#" + T).remove();
  }
  function j(d, _) {
    const y = ci("global").duration(dt);
    _ && y.on("end", _), Mt(), xr(d), fl(), hl(0, wt()), Kr();
  }
  function vt(d, _) {
    const y = ci("global").duration(dt);
    _ && y.on("end", _), br(d);
  }
  function Ot(d, _) {
    const y = ci("global").duration(dt);
    _ && y.on("end", _), Un(d), wr(wt());
  }
  let nt = !1, Bt = [];
  function Tt() {
    Kr(), nt = !1, bt();
  }
  function bt() {
    if (Bt.length === 0) {
      ut !== r() && (r() === ut + 1 && ut > 0 && r() <= n().results.length ? (ut = r(), he(r())) : r() >= 1 && r() <= n().results.length && (ut = r(), c(0), Ee(r())));
      return;
    }
    const d = Bt.shift();
    switch (d.type) {
      case "round": {
        const _ = d.round;
        _ === ut + 1 && ut > 0 && _ <= n().results.length ? (ut = _, he(_)) : (_ !== ut && _ >= 1 && _ <= n().results.length && (ut = _, c(0), Ee(_)), bt());
        break;
      }
      case "step":
        Re();
        break;
    }
  }
  function he(d) {
    if (d <= 1 || d > n().results.length) {
      bt();
      return;
    }
    nt = !0, z = d, c(0), j(z - 1, () => {
      vt(z - 1, () => {
        Ot(z, Tt);
      });
    });
  }
  function ee() {
    nt || (nt = !0, z = r(), Ve());
  }
  function Ve() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), Bt.length > 0) {
      Tt();
      return;
    }
    const d = z < n().results.length - 1 ? Ve : Tt;
    j(z, () => {
      vt(z, () => {
        z++, Ae(z), Ot(z, d);
      });
    });
  }
  ks(() => {
    Bn();
  });
  let ut = 0;
  function Bn() {
    if (ut != r()) {
      if (nt) {
        Bt.push({ type: "round", round: r() });
        return;
      }
      ut == r() - 1 && ut > 0 ? Ye() : Wn(r()), ut = r();
    }
  }
  function Wn(d) {
    if (nt) {
      Bt.push({ type: "round", round: d });
      return;
    }
    c(0), Ee(d);
  }
  function Ye() {
    if (nt) {
      Bt.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      Kr(), nt = !1;
      return;
    }
    nt = !0, c() === 0 ? j(z - 1, () => {
      vt(z - 1, () => {
        Ot(z, Tt);
      });
    }) : c() === 1 ? vt(z - 1, () => {
      Ot(z, Tt);
    }) : c() === 2 && Ot(z, Tt), c(0);
  }
  function Re() {
    if (r() > n().results.length) {
      Kr(), nt = !1;
      return;
    }
    if (nt) {
      Bt.push({ type: "step" });
      return;
    }
    nt = !0, c((c() + 1) % 3), z = r(), c() === 1 ? j(z, Tt) : c() === 2 ? vt(z, Tt) : c() === 0 ? (z++, Ae(z), Ot(z, Tt)) : (nt = !1, console.warn("displayPhase out of range at ", c()));
  }
  function Un(d) {
    It = J(d), St = Us(d, E, It, 0, wt(), !0), Us(d, S, It, 0, wt(), !1, !0);
  }
  function wr(d, _) {
    const y = _t(x(tt)).select("#" + T), k = We().outerRadius(d).innerRadius(d - 1), A = y.selectAll(".slice");
    let N = A.size();
    function R() {
      N--, N === 0 && cl();
    }
    A.select("path").transition("global").duration(Q).attr("d", (L) => k(L)).on("end", (L) => R());
  }
  function xr(d) {
    const _ = Vi(d, St);
    Ft = Ws(d, T, _, $, C, wt(), sn(), !1, !0);
    const y = _t(x(tt));
    y.select("#" + E).raise(), y.select("#" + S).raise();
  }
  function br(d) {
    const _ = ll(d, Ft, St);
    Ft = Gs(d, T, _, wt(), sn(), !1);
  }
  function ne(d) {
    return Ct[d.data.label];
  }
  function He(d) {
    const _ = {}, y = n().results[d - 1].tallyResults;
    for (let k = 0; k < y.length; k++) {
      let A = y[k].eliminated;
      if (A === void 0 && (A = y[k].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const N = y[k].transfers;
      if (N === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [R, L] of Object.entries(N))
        _[R] === void 0 ? _[R] = Number(L) : _[R] += Number(L);
    }
    return _;
  }
  function Vi(d, _) {
    const y = [], k = ce, A = n().results[d - 1].tallyResults;
    for (let N = 0; N < A.length; N++) {
      let R = A[N].eliminated;
      if (R === void 0 && (R = A[N].elected), R === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const L = A[N].transfers;
      if (L === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let V = _.find((I) => I.data.label == R && I.data.isTransfer);
      V === void 0 && (V = _.find((I) => I.data.label == R && !I.data.isTransfer));
      let D = 0;
      if (V) D = V.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [I, X] of Object.entries(L)) {
        let et;
        const de = _.find((it) => it.data.label == I);
        if (de)
          et = structuredClone(de);
        else if (I == "exhausted")
          et = {
            data: { label: I, value: Number(X) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (I == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", X);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", I);
          continue;
        }
        const vn = Number(X) / k * 2 * Math.PI;
        et.startAngle = D, D = et.endAngle = D + vn, et.index = N, et.data.transferIndex = N, y.push(et);
      }
    }
    return y;
  }
  function ol(d, _, y) {
    const k = {};
    for (let [A, N] of Object.entries(d)) {
      const R = y.find((D) => A == D.data.label);
      if (R === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const L = (R.startAngle + R.endAngle) / 2, V = d[R.data.label] / _ * 2 * Math.PI;
      k[R.data.label] = L - V / 2;
    }
    return k;
  }
  function ll(d, _, y) {
    const k = [], A = ce, N = He(d), R = ol(N, A, y);
    for (let [L, V] of _.entries()) {
      const D = structuredClone(V), I = V.endAngle - V.startAngle, X = y.find((et) => V.data.label === et.data.label && !et.data.isTransfer);
      if (X) {
        const et = X.data.label;
        D.startAngle = R[et], R[et] += I, D.endAngle = D.startAngle + I;
      } else if (V.data.label === "exhausted")
        D.startAngle = V.startAngle, D.endAngle = V.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", V.data.label);
        continue;
      }
      D.index = L, k.push(D);
    }
    return k;
  }
  function Xs(d, _, y, k, A, N) {
    const L = _t(x(tt)).append("g").attr("id", G).attr("transform", `translate(${y}, ${k})`), V = We().innerRadius(A * K).outerRadius(A * K);
    L.selectAll("text").data(_).enter().each(function(D) {
      D.endAngle - D.startAngle < rt || D.data.isTransfer || _t(this).append("g").attr("id", (I) => p(I.data)).classed("eliminated", (I) => N.includes(I.data.label) || I.data.isTransfer === !0).each(function(I, X) {
        I.data.label === "exhausted" && _t(this).on("mouseenter", (et, de) => dl(et)).on("mouseleave", (et, de) => pl());
      }).append("text").attr("transform", (I) => `translate(${V.centroid(I)})`).attr("text-anchor", (I) => Yi(I.startAngle, I.endAngle)).text((I) => I.data.label === "exhausted" ? rn : I.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((I) => {
        const X = Li(I.data.label, d);
        return !h() && Gr(I.data.label) ? X : X + " (" + zn(I.data.label, d) + ")";
      });
    });
  }
  function ul(d, _, y, k) {
    const N = _t(x(tt)).select("#" + G), R = N.selectAll("tspan"), L = N.selectAll("g").data(_, (X) => p(X.data)).classed("eliminated", (X) => k.includes(X.data.label) || X.data.isTransfer === !0), V = We().innerRadius(y * K).outerRadius(y * K + 1);
    R.transition("global").duration(Q).attr("transform", (X) => `translate(${V.centroid(X)})`).attr("text-anchor", (X) => Yi(X.startAngle, X.endAngle)), L.select("text").transition("global").duration(Q).attr("transform", (X) => `translate(${V.centroid(X)})`).attr("text-anchor", (X) => Yi(X.startAngle, X.endAngle)).on("end", (X) => I());
    let D = L.size();
    function I(X) {
      D--, D === 0 && (N.remove(), Xs(d, _, $, C, y, k));
    }
  }
  function Bs(d, _, y, k, A, N, R, L = !0, V = !1, D = !1) {
    const X = Ta().sort(null).value((et) => et.value)(y);
    return Ws(d, _, X, k, A, N, R, L, V, D), X;
  }
  function Kr() {
    _t(x(tt)).select("#" + S).selectAll(".elected").select("path").style("stroke", P).style("stroke-width", `${Xt}px`);
  }
  function Ws(d, _, y, k, A, N, R, L, V, D = !1) {
    const I = yr(d), X = w(d), ze = _t(x(tt)).attr("viewBox", `0 0 ${g} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${k}, ${A})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (it) => I.includes(it.data.label) || it.data.isTransfer === !0).classed("elected", (it) => X.includes(it.data.label) && !it.data.isTransfer).attr("id", (it) => p(it.data));
    D ? ze.style("pointer-events", "none") : ze.on("mouseenter", (it, O) => zi(it, O)).on("mouseleave", (it, O) => Xi(it, O));
    const vn = We().outerRadius(R).innerRadius(N);
    if (V) {
      const it = We().outerRadius(N + 1).innerRadius(N);
      ze.append("path").attr("d", it).attr("stroke", D ? "none" : pt).attr("stroke-width", D ? 0 : M).attr("fill", "none").transition("global").duration(Q).attr("d", (O) => vn(O)).attr("fill", D ? "none" : (O) => ne(O)).on("end", (O) => {
        D || Hi();
      });
    } else
      ze.append("path").attr("d", (it) => vn(it)).attr("fill", D ? "none" : (it) => ne(it)).attr("stroke", D ? "none" : pt).attr("stroke-width", D ? 0 : M), D || Hi();
    return L && !D && Xs(d, y, k, A, R, I), y;
  }
  function fl() {
    const y = _t(x(tt)).select("#" + G).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function cl() {
    const y = _t(x(tt)).select("#" + G).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function hl(d, _) {
    const A = _t(x(tt)).select("#" + E).selectAll(".eliminated"), N = We().innerRadius(d), R = We().outerRadius(_);
    A.classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(L) {
      const V = Zn(_, d);
      return function(D) {
        return R.innerRadius(V(D)), R(L);
      };
    }).attr("fill", (L) => `url(#${te(L.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(L) {
      const V = Zn(_, d);
      return function(D) {
        return N.outerRadius(V(D)), N(L);
      };
    }).attr("fill", (L) => ne(L));
  }
  function Yi(d, _) {
    const y = (d + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Hi() {
    _t(x(
      tt
      // force redisplay of text labels
    )).select("#" + G).raise().append("g").remove();
  }
  function Us(d, _, y, k, A, N, R = !1) {
    const V = Ta().sort(null).value((D) => D.value)(y);
    return Gs(d, _, V, k, A, N, R), V;
  }
  function Gs(d, _, y, k, A, N, R = !1) {
    const L = yr(d), V = w(d), D = We().outerRadius(A).innerRadius(k).startAngle((O) => O.startAngle).endAngle((O) => O.endAngle), I = We().outerRadius(A).innerRadius(k), et = _t(x(tt)).select("#" + _);
    et.selectAll(".slice").attr("prevStart", (O) => O.startAngle).attr("prevEnd", (O) => O.endAngle);
    const de = et.selectAll(".slice").data(y, (O) => p(O.data)), ze = de.enter().append("g").attr("class", "slice").attr("id", (O) => p(O.data)).classed("eliminated", !0);
    R ? ze.style("pointer-events", "none") : ze.on("mouseenter", (O, Xe) => zi(O, Xe)).on("mouseleave", (O, Xe) => Xi(O, Xe)), ze.append("path").attr("d", (O) => I(O)).attr("fill", R ? "none" : (O) => ne(O)).attr("stroke", R ? "none" : pt).attr("stroke-width", R ? 0 : M), de.classed("eliminated", (O) => L.includes(O.data.label)).classed("elected", (O) => V.includes(O.data.label)), R || de.on("mouseenter", (O, Xe) => zi(O, Xe)).on("mouseleave", (O, Xe) => Xi(O, Xe));
    let vn = de.size();
    function it() {
      vn--, vn <= 0 && (R || Hi(), et.selectAll(".finished").remove());
    }
    return de.select("path").transition("global").duration(Q).attrTween("d", function(O) {
      const Xe = Number(_t(this.parentNode).attr("prevStart")), gl = Number(_t(this.parentNode).attr("prevEnd")), _l = Zn(Xe, O.startAngle), ml = Zn(gl, O.endAngle);
      return (Zs) => (D.startAngle(_l(Zs)).endAngle(ml(Zs)), D(O));
    }).on("end", it), N && !R && ul(d, y, A, L), y;
  }
  function zi(d, _) {
    s(_.data.label), i("enter"), a(d.clientX), o(d.clientY);
  }
  function Xi(d, _) {
    s(_.data.label), i("leave");
  }
  function dl(d, _) {
    i("show-exhausted"), a(d.clientX), o(d.clientY);
  }
  function pl(d, _) {
    i("hide-exhausted");
  }
  var vl = {
    pieColors: Ct,
    exhaustedLabel: rn,
    countExhaustedVotes: an,
    getEliminatedCandidates: yr,
    getElectedCandidates: w,
    runFullAnimationFn: ee,
    animateOnePhaseFn: Re,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), ft();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), ft();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), ft();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), ft();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), ft();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), ft();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (_) => {
    }) {
      l(d), ft();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), ft();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), ft();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), ft();
    }
  }, Ks = Ed();
  return ai(Ks, (d) => at(tt, d), () => x(tt)), ge(t, Ks), Rs(vl);
}
Mo(
  al,
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
var Cd = /* @__PURE__ */ Hn("<span> </span> <!>", 1), Td = /* @__PURE__ */ Hn("About to eliminate: <!>", 1), Nd = /* @__PURE__ */ Hn("<span> </span> <!>", 1), Sd = /* @__PURE__ */ Hn(" <!>", 1), kd = /* @__PURE__ */ Hn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Md = /* @__PURE__ */ Hn("<span> </span> <br/>", 1), Pd = /* @__PURE__ */ Hn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const Dd = {
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
function Fd(t, e) {
  Es(e, !0), So(t, Dd);
  const n = 0.85;
  let r = ht(e, "electionSummary", 7), i = ht(e, "currentRound", 7, 1), s = ht(e, "requestRoundChange", 7, (w) => {
  }), a = ht(e, "candidateColors", 23, () => []), o = ht(e, "textForWinner", 7, "elected"), l = ht(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = ht(e, "firstRoundDeterminesPercentages", 7, !1), f = ht(e, "showCaptions", 7, !1);
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
  let c = /* @__PURE__ */ Gn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ mt(null), g = /* @__PURE__ */ mt(null), m = /* @__PURE__ */ mt(""), b = /* @__PURE__ */ mt(xn([])), $ = /* @__PURE__ */ mt(""), C = /* @__PURE__ */ mt(""), E = /* @__PURE__ */ mt(0), S = /* @__PURE__ */ mt(0), T = /* @__PURE__ */ Gn(() => G(r()));
  function G(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (W) {
        return console.error("Failed to parse JSON string:", W), {};
      }
    return w || {};
  }
  function lt(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function K(w, W, J) {
    w.style.left = W + "px", w.style.top = J + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const j = w.getBoundingClientRect();
      let vt = W, Ot = J + 20;
      vt + j.width > window.innerWidth - 12 && (vt = window.innerWidth - j.width - 12), vt < 12 && (vt = 12), Ot + j.height > window.innerHeight - 12 && (Ot = J - j.height - 12), w.style.left = vt + "px", w.style.top = Ot + "px";
    });
  }
  function rt() {
    switch (x($)) {
      case "enter":
        ((w) => {
          var W = Il(w, 2);
          at(b, W[0], !0), at(m, W[1], !0);
        })(dt(x(C), i())), x(p) && (K(x(p), x(E) || 0, x(S) || 0), x(p).style.opacity = String(n));
        break;
      case "leave":
        x(p) && (x(p).style.opacity = "0"), at(b, [], !0), at(m, "");
        break;
      case "show-exhausted":
        x(g) && (K(x(g), x(E) || 0, x(S) || 0), x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x($));
        break;
    }
  }
  ks(() => rt());
  function Q(w, W) {
    return w == 1 ? W ? "vote was" : "vote will be" : W ? "votes were" : "votes will be";
  }
  function dt(w, W) {
    const J = [], xt = w === "exhausted" ? z() : w;
    let Mt;
    w == "exhausted" ? Mt = It(1) : Mt = x(T).results[0].tally[w], J.push(`${xt} started with ${Mt} votes.`);
    for (let j = 1; j <= W; j++) {
      j === W && (w == "exhausted" ? Mt = It(W) : Mt = x(T).results[W - 1].tally[w], J.push(`${xt} has ${Mt} votes at round ${W}.`));
      const vt = x(T).results[j - 1].tallyResults, Ot = te(j);
      for (let nt = 0; nt < vt.length; nt++) {
        const Bt = vt[nt].transfers, Tt = vt[nt].eliminated, bt = vt[nt].elected;
        if (!Ot) {
          if (Tt)
            Tt === w && J.push(`${xt} will be eliminated on round ${j}.`);
          else if (w === bt && (J.push(`${xt} ${x(c).event} on round ${j}.`), Bt))
            for (let [ee, Ve] of Object.entries(Bt))
              J.push(`${Ve} ${Q(Number(Ve), j < W)} transferred to ${ee} on round ${j}.`);
        }
        const he = Tt || bt;
        if (he) {
          const ee = Number(Bt[w]);
          ee && J.push(`${ee} ${Q(ee, j < W)} transferred from ${he} on round ${j}.`);
        }
      }
    }
    return [J, xt];
  }
  function pt() {
    let w = 0;
    for (let W = 1; W <= x(T).results.length; W++) {
      if (te(W)) continue;
      const J = x(T).results[W - 1].tallyResults;
      for (let xt = 0; xt < J.length; xt++)
        J[xt].elected && w++;
    }
    return w;
  }
  const M = ["Eliminate", "Transfer", "Consolidate"];
  let P, Xt = /* @__PURE__ */ mt(0);
  function te(w) {
    return l() && x(T).results && w === x(T).results.length;
  }
  function St(w) {
    return te(w) ? [] : P ? P.getEliminatedCandidates(w) : [];
  }
  function Ft(w) {
    return te(w) ? [] : P ? P.getElectedCandidates(w) : [];
  }
  function It(w) {
    return P ? P.countExhaustedVotes(w) : 0;
  }
  function ce() {
    P && P.animateOnePhaseFn && P.animateOnePhaseFn();
  }
  function z() {
    return P ? P.exhaustedLabel : "";
  }
  function Ct() {
    return P ? P.pieColors : {};
  }
  var rn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ft();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ft();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (W) => {
    }) {
      s(w), ft();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), ft();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), ft();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), ft();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), ft();
    }
  }, tt = Pd(), kt = gn(tt), Ae = Ut(kt);
  Ae.__click = ce;
  var Ee = Ut(Ae, !0);
  Wt(Ae), Wt(kt);
  var qe = pe(kt, 4), wt = Ut(qe), sn = Ut(wt), an = Ut(sn);
  ai(
    al(an, {
      get jsonData() {
        return x(T);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: lt,
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
        return x($);
      },
      set mouseEventType(w) {
        at($, w, !0);
      },
      get mouseData() {
        return x(C);
      },
      set mouseData(w) {
        at(C, w, !0);
      },
      get mouseX() {
        return x(E);
      },
      set mouseX(w) {
        at(E, w, !0);
      },
      get mouseY() {
        return x(S);
      },
      set mouseY(w) {
        at(S, w, !0);
      },
      get displayPhase() {
        return x(Xt);
      },
      set displayPhase(w) {
        at(Xt, w, !0);
      }
    }),
    (w) => P = w,
    () => P
  ), Wt(sn), Wt(wt);
  var Ur = pe(wt, 2);
  {
    var Li = (w) => {
      var W = kd(), J = gn(W), xt = Ut(J);
      Wt(J);
      var Mt = pe(J, 2), j = Ut(Mt);
      {
        var vt = (bt) => {
          var he = Td(), ee = pe(gn(he));
          Gi(ee, 17, () => St(i()), Ui, (Ve, ut, Bn) => {
            var Wn = Cd(), Ye = gn(Wn);
            let Re;
            var Un = Ut(Ye, !0);
            Wt(Ye);
            var wr = pe(Ye, 2);
            {
              var xr = (ne) => {
                var He = aa(", ");
                ge(ne, He);
              }, br = /* @__PURE__ */ Gn(() => Bn < St(i()).length - 1);
              $r(wr, (ne) => {
                x(br) && ne(xr);
              });
            }
            Kn(
              (ne) => {
                Re = ua(Ye, "", Re, ne), on(Un, x(ut));
              },
              [() => ({ color: Ct()[x(ut)] })]
            ), ge(Ve, Wn);
          }), ge(bt, he);
        }, Ot = /* @__PURE__ */ Gn(() => St(i()).length > 0);
        $r(j, (bt) => {
          x(Ot) && bt(vt);
        });
      }
      var nt = pe(j, 2);
      {
        var Bt = (bt) => {
          var he = Sd(), ee = gn(he), Ve = pe(ee);
          Gi(Ve, 17, () => Ft(i()), Ui, (ut, Bn, Wn) => {
            var Ye = Nd(), Re = gn(Ye);
            let Un;
            var wr = Ut(Re, !0);
            Wt(Re);
            var xr = pe(Re, 2);
            {
              var br = (He) => {
                var Vi = aa(", ");
                ge(He, Vi);
              }, ne = /* @__PURE__ */ Gn(() => Wn < Ft(i()).length - 1);
              $r(xr, (He) => {
                x(ne) && He(br);
              });
            }
            Kn(
              (He) => {
                Un = ua(Re, "", Un, He), on(wr, x(Bn));
              },
              [() => ({ color: Ct()[x(Bn)] })]
            ), ge(ut, Ye);
          }), Kn(() => on(ee, `${x(c).caption ?? ""}: `)), ge(bt, he);
        }, Tt = /* @__PURE__ */ Gn(() => Ft(i()).length > 0);
        $r(nt, (bt) => {
          x(Tt) && bt(Bt);
        });
      }
      Wt(Mt), Kn((bt) => on(xt, `${x(T).config.contest ?? ""}, ${bt ?? ""} ${x(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [pt]), ge(w, W);
    };
    $r(Ur, (w) => {
      f() && w(Li);
    });
  }
  Wt(qe);
  var zn = pe(qe, 2), mr = Ut(zn), Gr = Ut(mr, !0);
  Wt(mr);
  var qi = pe(mr, 2);
  Gi(qi, 17, () => x(b), Ui, (w, W) => {
    var J = Md(), xt = gn(J), Mt = Ut(xt, !0);
    Wt(xt), es(2), Kn(() => on(Mt, x(W))), ge(w, J);
  }), Wt(zn), ai(zn, (w) => at(p, w), () => x(p));
  var Xn = pe(zn, 2), yr = Ut(Xn);
  return es(2), Wt(Xn), ai(Xn, (w) => at(g, w), () => x(g)), Kn(
    (w) => {
      on(Ee, M[x(Xt)]), on(Gr, x(m)), on(yr, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [z]
  ), ge(t, tt), Rs(rn);
}
Au(["click"]);
customElements.define("pie-chart", Mo(
  Fd,
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
