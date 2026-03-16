var cl = Object.defineProperty;
var Bs = (t) => {
  throw TypeError(t);
};
var hl = (t, e, n) => e in t ? cl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var at = (t, e, n) => hl(t, typeof e != "symbol" ? e + "" : e, n), zi = (t, e, n) => e.has(t) || Bs("Cannot " + n);
var p = (t, e, n) => (zi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => e.has(t) ? Bs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), P = (t, e, n, r) => (zi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (zi(t, e, "access private method"), n);
var ba;
typeof window < "u" && ((ba = window.__svelte ?? (window.__svelte = {})).v ?? (ba.v = /* @__PURE__ */ new Set())).add("5");
const dl = 1, pl = 2, vl = 16, gl = 1, _l = 4, ml = 8, yl = 16, wl = 2, ms = "[", bi = "[!", ys = "]", ir = {}, wt = Symbol(), xl = "http://www.w3.org/1999/xhtml", Ki = !1;
var Ea = Array.isArray, bl = Array.prototype.indexOf, sr = Array.prototype.includes, $i = Array.from, ui = Object.keys, fi = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, $l = Object.prototype, Al = Array.prototype, El = Object.getPrototypeOf, Us = Object.isExtensible;
const Rl = () => {
};
function Cl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ra() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Tl(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const $t = 2, kr = 4, Ai = 8, Ca = 1 << 24, je = 16, ce = 32, ln = 64, Ta = 128, Zt = 512, gt = 1024, At = 2048, fe = 4096, Ht = 8192, Xe = 16384, dr = 32768, ar = 65536, Ws = 1 << 17, Na = 1 << 18, Vn = 1 << 19, Nl = 1 << 20, rn = 1 << 25, Dn = 65536, ji = 1 << 21, ws = 1 << 22, sn = 1 << 23, Tr = Symbol("$state"), Sa = Symbol("legacy props"), mn = new class extends Error {
  constructor() {
    super(...arguments);
    at(this, "name", "StaleReactionError");
    at(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Hr = 3, pr = 8;
function Sl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function kl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ml(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Pl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ol() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Il() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ll(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ql() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ei(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Yl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Z = !1;
function We(t) {
  Z = t;
}
let H;
function Ot(t) {
  if (t === null)
    throw Ei(), ir;
  return H = t;
}
function Ri() {
  return Ot(/* @__PURE__ */ Te(H));
}
function It(t) {
  if (Z) {
    if (/* @__PURE__ */ Te(H) !== null)
      throw Ei(), ir;
    H = t;
  }
}
function Zi(t = 1) {
  if (Z) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(n);
    H = n;
  }
}
function ci(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ys) {
        if (e === 0) return n;
        e -= 1;
      } else (r === ms || r === bi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(n)
    );
    t && n.remove(), n = i;
  }
}
function ka(t) {
  if (!t || t.nodeType !== pr)
    throw Ei(), ir;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ma(t) {
  return t === this.v;
}
function Bl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Pa(t) {
  return !Bl(t, this.v);
}
let Ul = !1, Yt = null;
function or(t) {
  Yt = t;
}
function xs(t, e = !1, n) {
  Yt = {
    p: Yt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function bs(t) {
  var e = (
    /** @type {ComponentContext} */
    Yt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      io(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Yt = e.p, t ?? /** @type {T} */
  {};
}
function Da() {
  return !0;
}
let yn = [];
function Fa() {
  var t = yn;
  yn = [], Cl(t);
}
function Sn(t) {
  if (yn.length === 0 && !Nr) {
    var e = yn;
    queueMicrotask(() => {
      e === yn && Fa();
    });
  }
  yn.push(t);
}
function Wl() {
  for (; yn.length > 0; )
    Fa();
}
function Oa(t) {
  var e = K;
  if (e === null)
    return z.f |= sn, t;
  if ((e.f & dr) === 0 && (e.f & kr) === 0)
    throw t;
  lr(t, e);
}
function lr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ta) !== 0) {
      if ((e.f & dr) === 0)
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
const Xl = -7169;
function ot(t, e) {
  t.f = t.f & Xl | e;
}
function $s(t) {
  (t.f & Zt) !== 0 || t.deps === null ? ot(t, gt) : ot(t, fe);
}
function Ia(t) {
  if (t !== null)
    for (const e of t)
      (e.f & $t) === 0 || (e.f & Dn) === 0 || (e.f ^= Dn, Ia(
        /** @type {Derived} */
        e.deps
      ));
}
function La(t, e, n) {
  (t.f & At) !== 0 ? e.add(t) : (t.f & fe) !== 0 && n.add(t), Ia(t.deps), ot(t, gt);
}
const Wr = /* @__PURE__ */ new Set();
let W = null, bt = null, Pt = [], Ci = null, Ji = !1, Nr = !1;
var Zn, Jn, $n, Qn, Ir, Lr, An, ze, tr, Ce, Qi, ts, qa;
const qs = class qs {
  constructor() {
    L(this, Ce);
    at(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    at(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    at(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, Zn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, Jn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, $n, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    L(this, Qn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, Ir, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, Lr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, An, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, ze, /* @__PURE__ */ new Map());
    at(this, "is_fork", !1);
    L(this, tr, !1);
  }
  is_deferred() {
    return this.is_fork || p(this, Qn) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    p(this, ze).has(e) || p(this, ze).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = p(this, ze).get(e);
    if (n) {
      p(this, ze).delete(e);
      for (var r of n.d)
        ot(r, At), le(r);
      for (r of n.m)
        ot(r, fe), le(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Pt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      pt(this, Ce, Qi).call(this, s, n, r);
    if (this.is_deferred()) {
      pt(this, Ce, ts).call(this, r), pt(this, Ce, ts).call(this, n);
      for (const [s, a] of p(this, ze))
        Ya(s, a);
    } else {
      for (const s of p(this, Zn)) s();
      p(this, Zn).clear(), p(this, $n) === 0 && pt(this, Ce, qa).call(this), W = null, Xs(r), Xs(n), (i = p(this, Ir)) == null || i.resolve();
    }
    bt = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== wt && !this.previous.has(e) && this.previous.set(e, n), (e.f & sn) === 0 && (this.current.set(e, e.v), bt == null || bt.set(e, e.v));
  }
  activate() {
    W = this, this.apply();
  }
  deactivate() {
    W === this && (W = null, bt = null);
  }
  flush() {
    if (this.activate(), Pt.length > 0) {
      if (Va(), W !== null && W !== this)
        return;
    } else p(this, $n) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of p(this, Jn)) e(this);
    p(this, Jn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    P(this, $n, p(this, $n) + 1), e && P(this, Qn, p(this, Qn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    P(this, $n, p(this, $n) - 1), e && P(this, Qn, p(this, Qn) - 1), !p(this, tr) && (P(this, tr, !0), Sn(() => {
      P(this, tr, !1), this.is_deferred() ? Pt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of p(this, Lr))
      p(this, An).delete(e), ot(e, At), le(e);
    for (const e of p(this, An))
      ot(e, fe), le(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    p(this, Zn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    p(this, Jn).add(e);
  }
  settled() {
    return (p(this, Ir) ?? P(this, Ir, Ra())).promise;
  }
  static ensure() {
    if (W === null) {
      const e = W = new qs();
      Wr.add(W), Nr || Sn(() => {
        W === e && e.flush();
      });
    }
    return W;
  }
  apply() {
  }
};
Zn = new WeakMap(), Jn = new WeakMap(), $n = new WeakMap(), Qn = new WeakMap(), Ir = new WeakMap(), Lr = new WeakMap(), An = new WeakMap(), ze = new WeakMap(), tr = new WeakMap(), Ce = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Qi = function(e, n, r) {
  e.f ^= gt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (ce | ln)) !== 0, l = o && (a & gt) !== 0, u = l || (a & Ht) !== 0 || p(this, ze).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= gt : s !== null && (a & (kr | Ai | Ca)) !== 0 ? s.b.defer_effect(i) : (a & kr) !== 0 ? n.push(i) : Yr(i) && ((a & je) !== 0 && p(this, An).add(i), fr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === s && (s = null), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ts = function(e) {
  for (var n = 0; n < e.length; n += 1)
    La(e[n], p(this, Lr), p(this, An));
}, qa = function() {
  var i;
  if (Wr.size > 1) {
    this.previous.clear();
    var e = bt, n = !0;
    for (const s of Wr) {
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
        var r = Pt;
        Pt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          za(f, o, l, u);
        if (Pt.length > 0) {
          W = s, s.apply();
          for (const f of Pt)
            pt(i = s, Ce, Qi).call(i, f, [], []);
          s.deactivate();
        }
        Pt = r;
      }
    }
    W = null, bt = e;
  }
  this.committed = !0, Wr.delete(this);
};
let Ge = qs;
function dt(t) {
  var e = Nr;
  Nr = !0;
  try {
    for (var n; ; ) {
      if (Wl(), Pt.length === 0 && (W == null || W.flush(), Pt.length === 0))
        return Ci = null, /** @type {T} */
        n;
      Va();
    }
  } finally {
    Nr = e;
  }
}
function Va() {
  Ji = !0;
  var t = null;
  try {
    for (var e = 0; Pt.length > 0; ) {
      var n = Ge.ensure();
      if (e++ > 1e3) {
        var r, i;
        Gl();
      }
      n.process(Pt), an.clear();
    }
  } finally {
    Pt = [], Ji = !1, Ci = null;
  }
}
function Gl() {
  try {
    Ol();
  } catch (t) {
    lr(t, Ci);
  }
}
let ie = null;
function Xs(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Xe | Ht)) === 0 && Yr(r) && (ie = /* @__PURE__ */ new Set(), fr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && oo(r), (ie == null ? void 0 : ie.size) > 0)) {
        an.clear();
        for (const i of ie) {
          if ((i.f & (Xe | Ht)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            ie.has(a) && (ie.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Xe | Ht)) === 0 && fr(l);
          }
        }
        ie.clear();
      }
    }
    ie = null;
  }
}
function za(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & $t) !== 0 ? za(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (ws | je)) !== 0 && (s & At) === 0 && Ha(i, e, r) && (ot(i, At), le(
        /** @type {Effect} */
        i
      ));
    }
}
function Ha(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (sr.call(e, i))
        return !0;
      if ((i.f & $t) !== 0 && Ha(
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
function le(t) {
  for (var e = Ci = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ji && e === K && (n & je) !== 0 && (n & Na) === 0)
      return;
    if ((n & (ln | ce)) !== 0) {
      if ((n & gt) === 0) return;
      e.f ^= gt;
    }
  }
  Pt.push(e);
}
function Ya(t, e) {
  if (!((t.f & ce) !== 0 && (t.f & gt) !== 0)) {
    (t.f & At) !== 0 ? e.d.push(t) : (t.f & fe) !== 0 && e.m.push(t), ot(t, gt);
    for (var n = t.first; n !== null; )
      Ya(n, e), n = n.next;
  }
}
function Kl(t) {
  let e = 0, n = Fn(0), r;
  return () => {
    Rs() && (x(n), Ts(() => (e === 0 && (r = Si(() => t(() => Sr(n)))), e += 1, () => {
      Sn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Sr(n));
      });
    })));
  };
}
var jl = ar | Vn | Ta;
function Zl(t, e, n) {
  new Jl(t, e, n);
}
var Vt, qr, we, En, xe, Gt, Mt, be, He, nn, Rn, Ye, er, Cn, nr, rr, Be, wi, ft, Ba, Ua, es, Qr, ti, ns;
class Jl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    L(this, ft);
    /** @type {Boundary | null} */
    at(this, "parent");
    at(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, Vt);
    /** @type {TemplateNode | null} */
    L(this, qr, Z ? H : null);
    /** @type {BoundaryProps} */
    L(this, we);
    /** @type {((anchor: Node) => void)} */
    L(this, En);
    /** @type {Effect} */
    L(this, xe);
    /** @type {Effect | null} */
    L(this, Gt, null);
    /** @type {Effect | null} */
    L(this, Mt, null);
    /** @type {Effect | null} */
    L(this, be, null);
    /** @type {DocumentFragment | null} */
    L(this, He, null);
    /** @type {TemplateNode | null} */
    L(this, nn, null);
    L(this, Rn, 0);
    L(this, Ye, 0);
    L(this, er, !1);
    L(this, Cn, !1);
    /** @type {Set<Effect>} */
    L(this, nr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, rr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, Be, null);
    L(this, wi, Kl(() => (P(this, Be, Fn(p(this, Rn))), () => {
      P(this, Be, null);
    })));
    P(this, Vt, e), P(this, we, n), P(this, En, r), this.parent = /** @type {Effect} */
    K.b, this.is_pending = !!p(this, we).pending, P(this, xe, Ns(() => {
      if (K.b = this, Z) {
        const s = p(this, qr);
        Ri(), /** @type {Comment} */
        s.nodeType === pr && /** @type {Comment} */
        s.data === bi ? pt(this, ft, Ua).call(this) : (pt(this, ft, Ba).call(this), p(this, Ye) === 0 && (this.is_pending = !1));
      } else {
        var i = pt(this, ft, es).call(this);
        try {
          P(this, Gt, jt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        p(this, Ye) > 0 ? pt(this, ft, ti).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = p(this, nn)) == null || s.remove();
      };
    }, jl)), Z && P(this, Vt, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    La(e, p(this, nr), p(this, rr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!p(this, we).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    pt(this, ft, ns).call(this, e), P(this, Rn, p(this, Rn) + e), !(!p(this, Be) || p(this, er)) && (P(this, er, !0), Sn(() => {
      P(this, er, !1), p(this, Be) && ur(p(this, Be), p(this, Rn));
    }));
  }
  get_effect_pending() {
    return p(this, wi).call(this), x(
      /** @type {Source<number>} */
      p(this, Be)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = p(this, we).onerror;
    let r = p(this, we).failed;
    if (p(this, Cn) || !n && !r)
      throw e;
    p(this, Gt) && (St(p(this, Gt)), P(this, Gt, null)), p(this, Mt) && (St(p(this, Mt)), P(this, Mt, null)), p(this, be) && (St(p(this, be)), P(this, be, null)), Z && (Ot(
      /** @type {TemplateNode} */
      p(this, qr)
    ), Zi(), Ot(ci()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Yl();
        return;
      }
      i = !0, s && Hl(), Ge.ensure(), P(this, Rn, 0), p(this, be) !== null && kn(p(this, be), () => {
        P(this, be, null);
      }), this.is_pending = this.has_pending_snippet(), P(this, Gt, pt(this, ft, Qr).call(this, () => (P(this, Cn, !1), jt(() => p(this, En).call(this, p(this, Vt)))))), p(this, Ye) > 0 ? pt(this, ft, ti).call(this) : this.is_pending = !1;
    };
    Sn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        lr(o, p(this, xe) && p(this, xe).parent);
      }
      r && P(this, be, pt(this, ft, Qr).call(this, () => {
        Ge.ensure(), P(this, Cn, !0);
        try {
          return jt(() => {
            r(
              p(this, Vt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return lr(
            o,
            /** @type {Effect} */
            p(this, xe).parent
          ), null;
        } finally {
          P(this, Cn, !1);
        }
      }));
    });
  }
}
Vt = new WeakMap(), qr = new WeakMap(), we = new WeakMap(), En = new WeakMap(), xe = new WeakMap(), Gt = new WeakMap(), Mt = new WeakMap(), be = new WeakMap(), He = new WeakMap(), nn = new WeakMap(), Rn = new WeakMap(), Ye = new WeakMap(), er = new WeakMap(), Cn = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), Be = new WeakMap(), wi = new WeakMap(), ft = new WeakSet(), Ba = function() {
  try {
    P(this, Gt, jt(() => p(this, En).call(this, p(this, Vt))));
  } catch (e) {
    this.error(e);
  }
}, Ua = function() {
  const e = p(this, we).pending;
  e && (P(this, Mt, jt(() => e(p(this, Vt)))), Sn(() => {
    var n = pt(this, ft, es).call(this);
    P(this, Gt, pt(this, ft, Qr).call(this, () => (Ge.ensure(), jt(() => p(this, En).call(this, n))))), p(this, Ye) > 0 ? pt(this, ft, ti).call(this) : (kn(
      /** @type {Effect} */
      p(this, Mt),
      () => {
        P(this, Mt, null);
      }
    ), this.is_pending = !1);
  }));
}, es = function() {
  var e = p(this, Vt);
  return this.is_pending && (P(this, nn, Qt()), p(this, Vt).before(p(this, nn)), e = p(this, nn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Qr = function(e) {
  var n = K, r = z, i = Yt;
  Re(p(this, xe)), te(p(this, xe)), or(p(this, xe).ctx);
  try {
    return e();
  } catch (s) {
    return Oa(s), null;
  } finally {
    Re(n), te(r), or(i);
  }
}, ti = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    p(this, we).pending
  );
  p(this, Gt) !== null && (P(this, He, document.createDocumentFragment()), p(this, He).append(
    /** @type {TemplateNode} */
    p(this, nn)
  ), fo(p(this, Gt), p(this, He))), p(this, Mt) === null && P(this, Mt, jt(() => e(p(this, Vt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ns = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && pt(n = this.parent, ft, ns).call(n, e);
    return;
  }
  if (P(this, Ye, p(this, Ye) + e), p(this, Ye) === 0) {
    this.is_pending = !1;
    for (const r of p(this, nr))
      ot(r, At), le(r);
    for (const r of p(this, rr))
      ot(r, fe), le(r);
    p(this, nr).clear(), p(this, rr).clear(), p(this, Mt) && kn(p(this, Mt), () => {
      P(this, Mt, null);
    }), p(this, He) && (p(this, Vt).before(p(this, He)), P(this, He, null));
  }
};
function Ql(t, e, n, r) {
  const i = Ti;
  var s = t.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = W, o = (
    /** @type {Effect} */
    K
  ), l = tu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    l();
    try {
      r(h);
    } catch (v) {
      (o.f & Xe) === 0 && lr(v, o);
    }
    a == null || a.deactivate(), rs();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function c() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ eu(h))).then((h) => f([...e.map(i), ...h])).catch((h) => lr(h, o));
  }
  u ? u.then(c) : c();
}
function tu() {
  var t = K, e = z, n = Yt, r = W;
  return function(s = !0) {
    Re(t), te(e), or(n), s && (r == null || r.activate());
  };
}
function rs() {
  Re(null), te(null), or(null);
}
// @__NO_SIDE_EFFECTS__
function Ti(t) {
  var e = $t | At, n = z !== null && (z.f & $t) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return K !== null && (K.f |= Vn), {
    ctx: Yt,
    deps: null,
    effects: null,
    equals: Ma,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      wt
    ),
    wv: 0,
    parent: n ?? K,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    K
  );
  r === null && kl();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Fn(
    /** @type {V} */
    wt
  ), o = !z, l = /* @__PURE__ */ new Map();
  return cu(() => {
    var v;
    var u = Ra();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === W && f.committed && f.deactivate(), rs();
      });
    } catch (g) {
      u.reject(g), rs();
    }
    var f = (
      /** @type {Batch} */
      W
    );
    if (o) {
      var c = i.is_rendered();
      i.update_pending_count(1), f.increment(c), (v = l.get(f)) == null || v.reject(mn), l.delete(f), l.set(f, u);
    }
    const h = (g, m = void 0) => {
      if (f.activate(), m)
        m !== mn && (a.f |= sn, ur(a, m));
      else {
        (a.f & sn) !== 0 && (a.f ^= sn), ur(a, g);
        for (const [b, $] of l) {
          if (l.delete(b), b === f) break;
          $.reject(mn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(c));
    };
    u.promise.then(h, (g) => h(null, g || "unknown"));
  }), lu(() => {
    for (const u of l.values())
      u.reject(mn);
  }), new Promise((u) => {
    function f(c) {
      function h() {
        c === s ? u(a) : f(s);
      }
      c.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  const e = /* @__PURE__ */ Ti(t);
  return co(e), e;
}
// @__NO_SIDE_EFFECTS__
function Wa(t) {
  const e = /* @__PURE__ */ Ti(t);
  return e.equals = Pa, e;
}
function nu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      St(
        /** @type {Effect} */
        e[n]
      );
  }
}
function ru(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & $t) === 0)
      return (e.f & Xe) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function As(t) {
  var e, n = K;
  Re(ru(t));
  try {
    t.f &= ~Dn, nu(t), e = go(t);
  } finally {
    Re(n);
  }
  return e;
}
function Xa(t) {
  var e = As(t);
  if (!t.equals(e) && (t.wv = po(), (!(W != null && W.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    ot(t, gt);
    return;
  }
  on || (bt !== null ? (Rs() || W != null && W.is_fork) && bt.set(t, e) : $s(t));
}
function iu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(mn), r.teardown = Rl, r.ac = null, Mr(r, 0), Ss(r));
}
function Ga(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && fr(e);
}
let is = /* @__PURE__ */ new Set();
const an = /* @__PURE__ */ new Map();
let Ka = !1;
function Fn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ma,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xt(t, e) {
  const n = Fn(t);
  return co(n), n;
}
// @__NO_SIDE_EFFECTS__
function ja(t, e = !1, n = !0) {
  const r = Fn(t);
  return e || (r.equals = Pa), r;
}
function ut(t, e, n = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ue || (z.f & Ws) !== 0) && Da() && (z.f & ($t | je | ws | Ws)) !== 0 && (Jt === null || !sr.call(Jt, t)) && zl();
  let r = n ? wn(e) : e;
  return ur(t, r);
}
function ur(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    on ? an.set(t, e) : an.set(t, n), t.v = e;
    var r = Ge.ensure();
    if (r.capture(t, n), (t.f & $t) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & At) !== 0 && As(i), $s(i);
    }
    t.wv = po(), Za(t, At), K !== null && (K.f & gt) !== 0 && (K.f & (ce | ln)) === 0 && (Xt === null ? pu([t]) : Xt.push(t)), !r.is_fork && is.size > 0 && !Ka && su();
  }
  return e;
}
function su() {
  Ka = !1;
  for (const t of is)
    (t.f & gt) !== 0 && ot(t, fe), Yr(t) && fr(t);
  is.clear();
}
function Sr(t) {
  ut(t, t.v + 1);
}
function Za(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & At) === 0;
      if (o && ot(s, e), (a & $t) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        bt == null || bt.delete(l), (a & Dn) === 0 && (a & Zt && (s.f |= Dn), Za(l, fe));
      } else o && ((a & je) !== 0 && ie !== null && ie.add(
        /** @type {Effect} */
        s
      ), le(
        /** @type {Effect} */
        s
      ));
    }
}
function wn(t) {
  if (typeof t != "object" || t === null || Tr in t)
    return t;
  const e = El(t);
  if (e !== $l && e !== Al)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ea(t), i = /* @__PURE__ */ xt(0), s = Mn, a = (o) => {
    if (Mn === s)
      return o();
    var l = z, u = Mn;
    te(null), js(s);
    var f = o();
    return te(l), js(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ xt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ql();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var c = /* @__PURE__ */ xt(u.value);
          return n.set(l, c), c;
        }) : ut(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ xt(wt));
            n.set(l, f), Sr(i);
          }
        } else
          ut(u, wt), Sr(i);
        return !0;
      },
      get(o, l, u) {
        var v;
        if (l === Tr)
          return t;
        var f = n.get(l), c = l in o;
        if (f === void 0 && (!c || (v = Nn(o, l)) != null && v.writable) && (f = a(() => {
          var g = wn(c ? o[l] : wt), m = /* @__PURE__ */ xt(g);
          return m;
        }), n.set(l, f)), f !== void 0) {
          var h = x(f);
          return h === wt ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var c = n.get(l), h = c == null ? void 0 : c.v;
          if (c !== void 0 && h !== wt)
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
        if (l === Tr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== wt || Reflect.has(o, l);
        if (u !== void 0 || K !== null && (!f || (h = Nn(o, l)) != null && h.writable)) {
          u === void 0 && (u = a(() => {
            var v = f ? wn(o[l]) : wt, g = /* @__PURE__ */ xt(v);
            return g;
          }), n.set(l, u));
          var c = x(u);
          if (c === wt)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var E;
        var c = n.get(l), h = l in o;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          c.v; v += 1) {
            var g = n.get(v + "");
            g !== void 0 ? ut(g, wt) : v in o && (g = a(() => /* @__PURE__ */ xt(wt)), n.set(v + "", g));
          }
        if (c === void 0)
          (!h || (E = Nn(o, l)) != null && E.writable) && (c = a(() => /* @__PURE__ */ xt(void 0)), ut(c, wn(u)), n.set(l, c));
        else {
          h = c.v !== wt;
          var m = a(() => wn(u));
          ut(c, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, u), !h) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(l);
            Number.isInteger(R) && R >= $.v && ut($, R + 1);
          }
          Sr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((c) => {
          var h = n.get(c);
          return h === void 0 || h.v !== wt;
        });
        for (var [u, f] of n)
          f.v !== wt && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Vl();
      }
    }
  );
}
var Gs, Ja, Qa, to;
function ss() {
  if (Gs === void 0) {
    Gs = window, Ja = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Qa = Nn(e, "firstChild").get, to = Nn(e, "nextSibling").get, Us(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Us(n) && (n.__t = void 0);
  }
}
function Qt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  return (
    /** @type {TemplateNode | null} */
    Qa.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Te(t) {
  return (
    /** @type {TemplateNode | null} */
    to.call(t)
  );
}
function Lt(t, e) {
  if (!Z)
    return /* @__PURE__ */ On(t);
  var n = /* @__PURE__ */ On(H);
  if (n === null)
    n = H.appendChild(Qt());
  else if (e && n.nodeType !== Hr) {
    var r = Qt();
    return n == null || n.before(r), Ot(r), r;
  }
  return e && Ni(
    /** @type {Text} */
    n
  ), Ot(n), n;
}
function vn(t, e = !1) {
  if (!Z) {
    var n = /* @__PURE__ */ On(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Te(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Hr) {
      var r = Qt();
      return H == null || H.before(r), Ot(r), r;
    }
    Ni(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function re(t, e = 1, n = !1) {
  let r = Z ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(r);
  if (!Z)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Hr) {
      var s = Qt();
      return r === null ? i == null || i.after(s) : r.before(s), Ot(s), s;
    }
    Ni(
      /** @type {Text} */
      r
    );
  }
  return Ot(r), r;
}
function eo(t) {
  t.textContent = "";
}
function no() {
  return !1;
}
function Es(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(xl, t, void 0)
  );
}
function Ni(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Hr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function ro(t) {
  var e = z, n = K;
  te(null), Re(null);
  try {
    return t();
  } finally {
    te(e), Re(n);
  }
}
function au(t) {
  K === null && (z === null && Fl(), Dl()), on && Pl();
}
function ou(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ne(t, e, n) {
  var r = K;
  r !== null && (r.f & Ht) !== 0 && (t |= Ht);
  var i = {
    ctx: Yt,
    deps: null,
    nodes: null,
    f: t | At | Zt,
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
      fr(i);
    } catch (o) {
      throw St(i), o;
    }
  else e !== null && le(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Vn) === 0 && (s = s.first, (t & je) !== 0 && (t & ar) !== 0 && s !== null && (s.f |= ar)), s !== null && (s.parent = r, r !== null && ou(s, r), z !== null && (z.f & $t) !== 0 && (t & ln) === 0)) {
    var a = (
      /** @type {Derived} */
      z
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Rs() {
  return z !== null && !ue;
}
function lu(t) {
  const e = Ne(Ai, null, !1);
  return ot(e, gt), e.teardown = t, e;
}
function Cs(t) {
  au();
  var e = (
    /** @type {Effect} */
    K.f
  ), n = !z && (e & ce) !== 0 && (e & dr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Yt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return io(t);
}
function io(t) {
  return Ne(kr | Nl, t, !1);
}
function uu(t) {
  Ge.ensure();
  const e = Ne(ln | Vn, t, !0);
  return () => {
    St(e);
  };
}
function fu(t) {
  Ge.ensure();
  const e = Ne(ln | Vn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? kn(e, () => {
      St(e), r(void 0);
    }) : (St(e), r(void 0));
  });
}
function so(t) {
  return Ne(kr, t, !1);
}
function cu(t) {
  return Ne(ws | Vn, t, !0);
}
function Ts(t, e = 0) {
  return Ne(Ai | e, t, !0);
}
function Xn(t, e = [], n = [], r = []) {
  Ql(r, e, n, (i) => {
    Ne(Ai, () => t(...i.map(x)), !0);
  });
}
function Ns(t, e = 0) {
  var n = Ne(je | e, t, !0);
  return n;
}
function jt(t) {
  return Ne(ce | Vn, t, !0);
}
function ao(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = on, r = z;
    Ks(!0), te(null);
    try {
      e.call(null);
    } finally {
      Ks(n), te(r);
    }
  }
}
function Ss(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ro(() => {
      i.abort(mn);
    });
    var r = n.next;
    (n.f & ln) !== 0 ? n.parent = null : St(n, e), n = r;
  }
}
function hu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & ce) === 0 && St(e), e = n;
  }
}
function St(t, e = !0) {
  var n = !1;
  (e || (t.f & Na) !== 0) && t.nodes !== null && t.nodes.end !== null && (du(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ss(t, e && !n), Mr(t, 0), ot(t, Xe);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ao(t);
  var i = t.parent;
  i !== null && i.first !== null && oo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function du(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Te(t);
    t.remove(), t = n;
  }
}
function oo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function kn(t, e, n = !0) {
  var r = [];
  lo(t, r, !0);
  var i = () => {
    n && St(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function lo(t, e, n) {
  if ((t.f & Ht) === 0) {
    t.f ^= Ht;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & ar) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & ce) !== 0 && (t.f & je) !== 0;
      lo(i, e, a ? n : !1), i = s;
    }
  }
}
function ks(t) {
  uo(t, !0);
}
function uo(t, e) {
  if ((t.f & Ht) !== 0) {
    t.f ^= Ht, (t.f & gt) === 0 && (ot(t, At), le(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ar) !== 0 || (n.f & ce) !== 0;
      uo(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function fo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Te(n);
      e.append(n), n = i;
    }
}
let ei = !1, on = !1;
function Ks(t) {
  on = t;
}
let z = null, ue = !1;
function te(t) {
  z = t;
}
let K = null;
function Re(t) {
  K = t;
}
let Jt = null;
function co(t) {
  z !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Dt = null, qt = 0, Xt = null;
function pu(t) {
  Xt = t;
}
let ho = 1, xn = 0, Mn = xn;
function js(t) {
  Mn = t;
}
function po() {
  return ++ho;
}
function Yr(t) {
  var e = t.f;
  if ((e & At) !== 0)
    return !0;
  if (e & $t && (t.f &= ~Dn), (e & fe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Yr(
        /** @type {Derived} */
        s
      ) && Xa(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & Zt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    bt === null && ot(t, gt);
  }
  return !1;
}
function vo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt !== null && sr.call(Jt, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & $t) !== 0 ? vo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ot(s, At) : (s.f & gt) !== 0 && ot(s, fe), le(
        /** @type {Effect} */
        s
      ));
    }
}
function go(t) {
  var m;
  var e = Dt, n = qt, r = Xt, i = z, s = Jt, a = Yt, o = ue, l = Mn, u = t.f;
  Dt = /** @type {null | Value[]} */
  null, qt = 0, Xt = null, z = (u & (ce | ln)) === 0 ? t : null, Jt = null, or(t.ctx), ue = !1, Mn = ++xn, t.ac !== null && (ro(() => {
    t.ac.abort(mn);
  }), t.ac = null);
  try {
    t.f |= ji;
    var f = (
      /** @type {Function} */
      t.fn
    ), c = f();
    t.f |= dr;
    var h = t.deps, v = W == null ? void 0 : W.is_fork;
    if (Dt !== null) {
      var g;
      if (v || Mr(t, qt), h !== null && qt > 0)
        for (h.length = qt + Dt.length, g = 0; g < Dt.length; g++)
          h[qt + g] = Dt[g];
      else
        t.deps = h = Dt;
      if (Rs() && (t.f & Zt) !== 0)
        for (g = qt; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(t);
    } else !v && h !== null && qt < h.length && (Mr(t, qt), h.length = qt);
    if (Da() && Xt !== null && !ue && h !== null && (t.f & ($t | fe | At)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Xt.length; g++)
        vo(
          Xt[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (xn++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = xn;
      if (e !== null)
        for (const b of e)
          b.rv = xn;
      Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
      Xt));
    }
    return (t.f & sn) !== 0 && (t.f ^= sn), c;
  } catch (b) {
    return Oa(b);
  } finally {
    t.f ^= ji, Dt = e, qt = n, Xt = r, z = i, Jt = s, or(a), ue = o, Mn = l;
  }
}
function vu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = bl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & $t) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Dt === null || !sr.call(Dt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Zt) !== 0 && (s.f ^= Zt, s.f &= ~Dn), $s(s), iu(s), Mr(s, 0);
  }
}
function Mr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      vu(t, n[r]);
}
function fr(t) {
  var e = t.f;
  if ((e & Xe) === 0) {
    ot(t, gt);
    var n = K, r = ei;
    K = t, ei = !0;
    try {
      (e & (je | Ca)) !== 0 ? hu(t) : Ss(t), ao(t);
      var i = go(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ho;
      var s;
      Ki && Ul && (t.f & At) !== 0 && t.deps;
    } finally {
      ei = r, K = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (z !== null && !ue) {
    var r = K !== null && (K.f & Xe) !== 0;
    if (!r && (Jt === null || !sr.call(Jt, t))) {
      var i = z.deps;
      if ((z.f & ji) !== 0)
        t.rv < xn && (t.rv = xn, Dt === null && i !== null && i[qt] === t ? qt++ : Dt === null ? Dt = [t] : Dt.push(t));
      else {
        (z.deps ?? (z.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [z] : sr.call(s, z) || s.push(z);
      }
    }
  }
  if (on && an.has(t))
    return an.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (on) {
      var o = a.v;
      return ((a.f & gt) === 0 && a.reactions !== null || mo(a)) && (o = As(a)), an.set(a, o), o;
    }
    var l = (a.f & Zt) === 0 && !ue && z !== null && (ei || (z.f & Zt) !== 0), u = (a.f & dr) === 0;
    Yr(a) && (l && (a.f |= Zt), Xa(a)), l && !u && (Ga(a), _o(a));
  }
  if (bt != null && bt.has(t))
    return bt.get(t);
  if ((t.f & sn) !== 0)
    throw t.v;
  return t.v;
}
function _o(t) {
  if (t.f |= Zt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & $t) !== 0 && (e.f & Zt) === 0 && (Ga(
        /** @type {Derived} */
        e
      ), _o(
        /** @type {Derived} */
        e
      ));
}
function mo(t) {
  if (t.v === wt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (an.has(e) || (e.f & $t) !== 0 && mo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Si(t) {
  var e = ue;
  try {
    return ue = !0, t();
  } finally {
    ue = e;
  }
}
const yo = /* @__PURE__ */ new Set(), as = /* @__PURE__ */ new Set();
function gu(t) {
  for (var e = 0; e < t.length; e++)
    yo.add(t[e]);
  for (var n of as)
    n(t);
}
let Zs = null;
function Js(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Zs = t;
  var a = 0, o = Zs === t && t.__root;
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
    fi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = z, c = K;
    te(null), Re(null);
    try {
      for (var h, v = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch ($) {
          h ? v.push($) : h = $;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (h) {
        for (let $ of v)
          queueMicrotask(() => {
            throw $;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, te(f), Re(c);
    }
  }
}
var $a, Aa;
const Hi = (Aa = ($a = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : $a.trustedTypes) == null ? void 0 : /* @__PURE__ */ Aa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function _u(t) {
  return (
    /** @type {string} */
    (Hi == null ? void 0 : Hi.createHTML(t)) ?? t
  );
}
function wo(t, e = !1) {
  var n = Es("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? _u(t) : t, n.content;
}
function In(t, e) {
  var n = (
    /** @type {Effect} */
    K
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function zn(t, e) {
  var n = (e & wl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (Z)
      return In(H, null), H;
    r === void 0 && (r = wo(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || Ja ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      In(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function mu(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Z)
      return In(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        wo(i, !0)
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
    return In(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function yu(t, e) {
  return /* @__PURE__ */ mu(t, e, "svg");
}
function Qs(t = "") {
  if (!Z) {
    var e = Qt(t + "");
    return In(e, e), e;
  }
  var n = H;
  return n.nodeType !== Hr ? (n.before(n = Qt()), Ot(n)) : Ni(
    /** @type {Text} */
    n
  ), In(n, n), n;
}
function se(t, e) {
  if (Z) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      K
    );
    ((n.f & dr) === 0 || n.nodes.end === null) && (n.nodes.end = H), Ri();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const wu = ["touchstart", "touchmove"];
function xu(t) {
  return wu.includes(t);
}
function tn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function xo(t, e) {
  return bo(t, e);
}
function bu(t, e) {
  ss(), e.intro = e.intro ?? !1;
  const n = e.target, r = Z, i = H;
  try {
    for (var s = /* @__PURE__ */ On(n); s && (s.nodeType !== pr || /** @type {Comment} */
    s.data !== ms); )
      s = /* @__PURE__ */ Te(s);
    if (!s)
      throw ir;
    We(!0), Ot(
      /** @type {Comment} */
      s
    );
    const a = bo(t, { ...e, anchor: s });
    return We(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ir && console.warn("Failed to hydrate: ", a), e.recover === !1 && Il(), ss(), eo(n), We(!1), xo(t, e);
  } finally {
    We(r), Ot(i);
  }
}
const Xr = /* @__PURE__ */ new Map();
function bo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  ss();
  var o = /* @__PURE__ */ new Set(), l = (c) => {
    for (var h = 0; h < c.length; h++) {
      var v = c[h];
      if (!o.has(v)) {
        o.add(v);
        var g = xu(v);
        for (const $ of [e, document]) {
          var m = Xr.get($);
          m === void 0 && (m = /* @__PURE__ */ new Map(), Xr.set($, m));
          var b = m.get(v);
          b === void 0 ? ($.addEventListener(v, Js, { passive: g }), m.set(v, 1)) : m.set(v, b + 1);
        }
      }
    }
  };
  l($i(yo)), as.add(l);
  var u = void 0, f = fu(() => {
    var c = n ?? e.appendChild(Qt());
    return Zl(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (h) => {
        xs({});
        var v = (
          /** @type {ComponentContext} */
          Yt
        );
        if (s && (v.c = s), i && (r.$$events = i), Z && In(
          /** @type {TemplateNode} */
          h,
          null
        ), u = t(h, r) || {}, Z && (K.nodes.end = H, H === null || H.nodeType !== pr || /** @type {Comment} */
        H.data !== ys))
          throw Ei(), ir;
        bs();
      }
    ), () => {
      var m;
      for (var h of o)
        for (const b of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Xr.get(b)
          ), g = (
            /** @type {number} */
            v.get(h)
          );
          --g == 0 ? (b.removeEventListener(h, Js), v.delete(h), v.size === 0 && Xr.delete(b)) : v.set(h, g);
        }
      as.delete(l), c !== n && ((m = c.parentNode) == null || m.removeChild(c));
    };
  });
  return os.set(u, f), u;
}
let os = /* @__PURE__ */ new WeakMap();
function $u(t, e) {
  const n = os.get(t);
  return n ? (os.delete(t), n(e)) : Promise.resolve();
}
var ae, $e, zt, Tn, Vr, zr, xi;
class Au {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    at(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, ae, /* @__PURE__ */ new Map());
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
    L(this, $e, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, zt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, Tn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Vr, !0);
    L(this, zr, () => {
      var e = (
        /** @type {Batch} */
        W
      );
      if (p(this, ae).has(e)) {
        var n = (
          /** @type {Key} */
          p(this, ae).get(e)
        ), r = p(this, $e).get(n);
        if (r)
          ks(r), p(this, Tn).delete(n);
        else {
          var i = p(this, zt).get(n);
          i && (p(this, $e).set(n, i.effect), p(this, zt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of p(this, ae)) {
          if (p(this, ae).delete(s), s === e)
            break;
          const o = p(this, zt).get(a);
          o && (St(o.effect), p(this, zt).delete(a));
        }
        for (const [s, a] of p(this, $e)) {
          if (s === n || p(this, Tn).has(s)) continue;
          const o = () => {
            if (Array.from(p(this, ae).values()).includes(s)) {
              var u = document.createDocumentFragment();
              fo(a, u), u.append(Qt()), p(this, zt).set(s, { effect: a, fragment: u });
            } else
              St(a);
            p(this, Tn).delete(s), p(this, $e).delete(s);
          };
          p(this, Vr) || !r ? (p(this, Tn).add(s), kn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, xi, (e) => {
      p(this, ae).delete(e);
      const n = Array.from(p(this, ae).values());
      for (const [r, i] of p(this, zt))
        n.includes(r) || (St(i.effect), p(this, zt).delete(r));
    });
    this.anchor = e, P(this, Vr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      W
    ), i = no();
    if (n && !p(this, $e).has(e) && !p(this, zt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = Qt();
        s.append(a), p(this, zt).set(e, {
          effect: jt(() => n(a)),
          fragment: s
        });
      } else
        p(this, $e).set(
          e,
          jt(() => n(this.anchor))
        );
    if (p(this, ae).set(r, e), i) {
      for (const [o, l] of p(this, $e))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of p(this, zt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(p(this, zr)), r.ondiscard(p(this, xi));
    } else
      Z && (this.anchor = H), p(this, zr).call(this);
  }
}
ae = new WeakMap(), $e = new WeakMap(), zt = new WeakMap(), Tn = new WeakMap(), Vr = new WeakMap(), zr = new WeakMap(), xi = new WeakMap();
function Eu(t) {
  Yt === null && Sl(), Cs(() => {
    const e = Si(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function xr(t, e, n = !1) {
  Z && Ri();
  var r = new Au(t), i = n ? ar : 0;
  function s(a, o) {
    if (Z) {
      const f = ka(t);
      var l;
      if (f === ms ? l = 0 : f === bi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = ci();
        Ot(u), r.anchor = u, We(!1), r.ensure(a, o), We(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ns(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Yi(t, e) {
  return e;
}
function Ru(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let c = e[o];
    kn(
      c,
      () => {
        if (s) {
          if (s.pending.delete(c), s.done.add(c), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            ls($i(s.done)), h.delete(s), h.size === 0 && (t.outrogroups = null);
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
      eo(f), f.append(u), t.items.clear();
    }
    ls(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ls(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    St(t[n], e);
}
var ta;
function Bi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  Z && Ri();
  var l = null, u = /* @__PURE__ */ Wa(() => {
    var m = n();
    return Ea(m) ? m : m == null ? [] : $i(m);
  }), f, c = !0;
  function h() {
    g.fallback = l, Cu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & rn) === 0 ? ks(l) : (l.f ^= rn, Ar(l, null, a)) : kn(l, () => {
      l = null;
    }));
  }
  var v = Ns(() => {
    f = /** @type {V[]} */
    x(u);
    var m = f.length;
    let b = !1;
    if (Z) {
      var $ = ka(a) === bi;
      $ !== (m === 0) && (a = ci(), Ot(a), We(!1), b = !0);
    }
    for (var R = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      W
    ), C = no(), F = 0; F < m; F += 1) {
      Z && H.nodeType === pr && /** @type {Comment} */
      H.data === ys && (a = /** @type {Comment} */
      H, b = !0, We(!1));
      var J = f[F], ct = r(J, F), B = c ? null : o.get(ct);
      B ? (B.v && ur(B.v, J), B.i && ur(B.i, F), C && E.unskip_effect(B.e)) : (B = Tu(
        o,
        c ? a : ta ?? (ta = Qt()),
        J,
        ct,
        F,
        i,
        e,
        n
      ), c || (B.e.f |= rn), o.set(ct, B)), R.add(ct);
    }
    if (m === 0 && s && !l && (c ? l = jt(() => s(a)) : (l = jt(() => s(ta ?? (ta = Qt()))), l.f |= rn)), m > R.size && Ml(), Z && m > 0 && Ot(ci()), !c)
      if (C) {
        for (const [et, _t] of o)
          R.has(et) || E.skip_effect(_t.e);
        E.oncommit(h), E.ondiscard(() => {
        });
      } else
        h();
    b && We(!0), x(u);
  }), g = { effect: v, items: o, outrogroups: null, fallback: l };
  c = !1, Z && (a = H);
}
function br(t) {
  for (; t !== null && (t.f & ce) === 0; )
    t = t.next;
  return t;
}
function Cu(t, e, n, r, i) {
  var B;
  var s = e.length, a = t.items, o = br(t.effect.first), l, u = null, f = [], c = [], h, v, g, m;
  for (m = 0; m < s; m += 1) {
    if (h = e[m], v = i(h, m), g = /** @type {EachItem} */
    a.get(v).e, t.outrogroups !== null)
      for (const et of t.outrogroups)
        et.pending.delete(g), et.done.delete(g);
    if ((g.f & rn) !== 0)
      if (g.f ^= rn, g === o)
        Ar(g, null, n);
      else {
        var b = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), en(t, u, g), en(t, g, b), Ar(g, b, n), u = g, f = [], c = [], o = br(u.next);
        continue;
      }
    if ((g.f & Ht) !== 0 && ks(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < c.length) {
          var $ = c[0], R;
          u = $.prev;
          var E = f[0], C = f[f.length - 1];
          for (R = 0; R < f.length; R += 1)
            Ar(f[R], $, n);
          for (R = 0; R < c.length; R += 1)
            l.delete(c[R]);
          en(t, E.prev, C.next), en(t, u, E), en(t, C, $), o = $, u = C, m -= 1, f = [], c = [];
        } else
          l.delete(g), Ar(g, o, n), en(t, g.prev, g.next), en(t, g, u === null ? t.effect.first : u.next), en(t, u, g), u = g;
        continue;
      }
      for (f = [], c = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), c.push(o), o = br(o.next);
      if (o === null)
        continue;
    }
    (g.f & rn) === 0 && f.push(g), u = g, o = br(g.next);
  }
  if (t.outrogroups !== null) {
    for (const et of t.outrogroups)
      et.pending.size === 0 && (ls($i(et.done)), (B = t.outrogroups) == null || B.delete(et));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var F = [];
    if (l !== void 0)
      for (g of l)
        (g.f & Ht) === 0 && F.push(g);
    for (; o !== null; )
      (o.f & Ht) === 0 && o !== t.fallback && F.push(o), o = br(o.next);
    var J = F.length;
    if (J > 0) {
      var ct = null;
      Ru(t, F, ct);
    }
  }
}
function Tu(t, e, n, r, i, s, a, o) {
  var l = (a & dl) !== 0 ? (a & vl) === 0 ? /* @__PURE__ */ ja(n, !1, !1) : Fn(n) : null, u = (a & pl) !== 0 ? Fn(i) : null;
  return {
    v: l,
    i: u,
    e: jt(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Ar(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & rn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function en(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function $o(t, e) {
  so(() => {
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
      const i = Es("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function ea(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Nu(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += ea(r)), i && (n += ea(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Ui(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function na(t, e, n, r) {
  var i = t.__style;
  if (Z || i !== e) {
    var s = Nu(e, r);
    (!Z || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Ui(t, n == null ? void 0 : n[0], r[0]), Ui(t, n == null ? void 0 : n[1], r[1], "important")) : Ui(t, n, r));
  return r;
}
function ra(t, e) {
  return t === e || (t == null ? void 0 : t[Tr]) === e;
}
function ni(t = {}, e, n, r) {
  return so(() => {
    var i, s;
    return Ts(() => {
      i = s, s = [], Si(() => {
        t !== n(...s) && (e(t, ...s), i && ra(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Sn(() => {
        s && ra(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Gr = !1;
function Su(t) {
  var e = Gr;
  try {
    return Gr = !1, [t(), Gr];
  } finally {
    Gr = e;
  }
}
function vt(t, e, n, r) {
  var R;
  var i = (n & ml) !== 0, s = (n & yl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Si(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Tr in t || Sa in t;
    u = ((R = Nn(t, e)) == null ? void 0 : R.set) ?? (f && e in t ? (E) => t[e] = E : void 0);
  }
  var c, h = !1;
  i ? [c, h] = Su(() => (
    /** @type {V} */
    t[e]
  )) : c = /** @type {V} */
  t[e], c === void 0 && r !== void 0 && (c = l(), u && (Ll(), u(c)));
  var v;
  if (v = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? l() : (o = !0, E);
  }, (n & _l) === 0)
    return v;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, C) {
        return arguments.length > 0 ? ((!C || g || h) && u(C ? v() : E), E) : v();
      })
    );
  }
  var m = !1, b = ((n & gl) !== 0 ? Ti : Wa)(() => (m = !1, v()));
  i && x(b);
  var $ = (
    /** @type {Effect} */
    K
  );
  return (
    /** @type {() => V} */
    (function(E, C) {
      if (arguments.length > 0) {
        const F = C ? x(b) : i ? wn(E) : E;
        return ut(b, F), m = !0, a !== void 0 && (a = F), E;
      }
      return on && m || ($.f & Xe) !== 0 ? b.v : x(b);
    })
  );
}
function ku(t) {
  return new Mu(t);
}
var Ue, Kt;
class Mu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    L(this, Ue);
    /** @type {Record<string, any>} */
    L(this, Kt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ ja(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Sa ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ut(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    P(this, Kt, (e.hydrate ? bu : xo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && dt(), P(this, Ue, i.$$events);
    for (const a of Object.keys(p(this, Kt)))
      a === "$set" || a === "$destroy" || a === "$on" || fi(this, a, {
        get() {
          return p(this, Kt)[a];
        },
        /** @param {any} value */
        set(o) {
          p(this, Kt)[a] = o;
        },
        enumerable: !0
      });
    p(this, Kt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, p(this, Kt).$destroy = () => {
      $u(p(this, Kt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    p(this, Kt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    p(this, Ue)[e] = p(this, Ue)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return p(this, Ue)[e].push(r), () => {
      p(this, Ue)[e] = p(this, Ue)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    p(this, Kt).$destroy();
  }
}
Ue = new WeakMap(), Kt = new WeakMap();
let Ao;
typeof HTMLElement == "function" && (Ao = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    at(this, "$$ctor");
    /** Slots */
    at(this, "$$s");
    /** @type {any} The Svelte component instance */
    at(this, "$$c");
    /** Whether or not the custom element is connected */
    at(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    at(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    at(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    at(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    at(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    at(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    at(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    at(this, "$$shadowRoot", null);
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
          const o = Es("slot");
          s !== "default" && (o.name = s), se(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Pu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = ri(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ku({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = uu(() => {
        Ts(() => {
          var s;
          this.$$r = !0;
          for (const a of ui(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ri(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ri(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return ui(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ri(t, e, n, r) {
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
function Pu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Eo(t, e, n, r, i, s) {
  let a = class extends Ao {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ui(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ui(e).forEach((o) => {
    fi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var c;
        l = ri(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (c = Nn(u, o)) == null ? void 0 : c.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    fi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Du = { value: () => {
} };
function Ro() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ii(n);
}
function ii(t) {
  this._ = t;
}
function Fu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ii.prototype = Ro.prototype = {
  constructor: ii,
  on: function(t, e) {
    var n = this._, r = Fu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Ou(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = ia(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ia(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ii(t);
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
function Ou(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ia(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Du, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var us = "http://www.w3.org/1999/xhtml";
const sa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: us,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ki(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), sa.hasOwnProperty(e) ? { space: sa[e], local: t } : t;
}
function Iu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === us && e.documentElement.namespaceURI === us ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Lu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Co(t) {
  var e = ki(t);
  return (e.local ? Lu : Iu)(e);
}
function qu() {
}
function Ms(t) {
  return t == null ? qu : function() {
    return this.querySelector(t);
  };
}
function Vu(t) {
  typeof t != "function" && (t = Ms(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new Bt(r, this._parents);
}
function zu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Hu() {
  return [];
}
function To(t) {
  return t == null ? Hu : function() {
    return this.querySelectorAll(t);
  };
}
function Yu(t) {
  return function() {
    return zu(t.apply(this, arguments));
  };
}
function Bu(t) {
  typeof t == "function" ? t = Yu(t) : t = To(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new Bt(r, i);
}
function No(t) {
  return function() {
    return this.matches(t);
  };
}
function So(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Uu = Array.prototype.find;
function Wu(t) {
  return function() {
    return Uu.call(this.children, t);
  };
}
function Xu() {
  return this.firstElementChild;
}
function Gu(t) {
  return this.select(t == null ? Xu : Wu(typeof t == "function" ? t : So(t)));
}
var Ku = Array.prototype.filter;
function ju() {
  return Array.from(this.children);
}
function Zu(t) {
  return function() {
    return Ku.call(this.children, t);
  };
}
function Ju(t) {
  return this.selectAll(t == null ? ju : Zu(typeof t == "function" ? t : So(t)));
}
function Qu(t) {
  typeof t != "function" && (t = No(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Bt(r, this._parents);
}
function ko(t) {
  return new Array(t.length);
}
function tf() {
  return new Bt(this._enter || this._groups.map(ko), this._parents);
}
function hi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
hi.prototype = {
  constructor: hi,
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
function ef(t) {
  return function() {
    return t;
  };
}
function nf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new hi(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function rf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, c = s.length, h = new Array(f), v;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (h[o] = v = a.call(l, l.__data__, o, e) + "", u.has(v) ? i[o] = l : u.set(v, l));
  for (o = 0; o < c; ++o)
    v = a.call(t, s[o], o, s) + "", (l = u.get(v)) ? (r[o] = l, l.__data__ = s[o], u.delete(v)) : n[o] = new hi(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(h[o]) === l && (i[o] = l);
}
function sf(t) {
  return t.__data__;
}
function af(t, e) {
  if (!arguments.length) return Array.from(this, sf);
  var n = e ? rf : nf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ef(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], c = i[u], h = c.length, v = of(t.call(f, f && f.__data__, u, r)), g = v.length, m = o[u] = new Array(g), b = a[u] = new Array(g), $ = l[u] = new Array(h);
    n(f, c, m, b, $, v, e);
    for (var R = 0, E = 0, C, F; R < g; ++R)
      if (C = m[R]) {
        for (R >= E && (E = R + 1); !(F = b[E]) && ++E < g; ) ;
        C._next = F || null;
      }
  }
  return a = new Bt(a, r), a._enter = o, a._exit = l, a;
}
function of(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function lf() {
  return new Bt(this._exit || this._groups.map(ko), this._parents);
}
function uf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function ff(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], c = u.length, h = o[l] = new Array(c), v, g = 0; g < c; ++g)
      (v = u[g] || f[g]) && (h[g] = v);
  for (; l < i; ++l)
    o[l] = n[l];
  return new Bt(o, this._parents);
}
function cf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function hf(t) {
  t || (t = df);
  function e(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new Bt(i, this._parents).order();
}
function df(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function pf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function vf() {
  return Array.from(this);
}
function gf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function _f() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function mf() {
  return !this.node();
}
function yf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function wf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function bf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function $f(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Af(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ef(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Rf(t, e) {
  var n = ki(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? xf : wf : typeof e == "function" ? n.local ? Ef : Af : n.local ? $f : bf)(n, e));
}
function Mo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Cf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Tf(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Nf(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Sf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Cf : typeof e == "function" ? Nf : Tf)(t, e, n ?? "")) : cr(this.node(), t);
}
function cr(t, e) {
  return t.style.getPropertyValue(e) || Mo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function kf(t) {
  return function() {
    delete this[t];
  };
}
function Mf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Pf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Df(t, e) {
  return arguments.length > 1 ? this.each((e == null ? kf : typeof e == "function" ? Pf : Mf)(t, e)) : this.node()[t];
}
function Po(t) {
  return t.trim().split(/^|\s+/);
}
function Ps(t) {
  return t.classList || new Do(t);
}
function Do(t) {
  this._node = t, this._names = Po(t.getAttribute("class") || "");
}
Do.prototype = {
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
function Fo(t, e) {
  for (var n = Ps(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Oo(t, e) {
  for (var n = Ps(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ff(t) {
  return function() {
    Fo(this, t);
  };
}
function Of(t) {
  return function() {
    Oo(this, t);
  };
}
function If(t, e) {
  return function() {
    (e.apply(this, arguments) ? Fo : Oo)(this, t);
  };
}
function Lf(t, e) {
  var n = Po(t + "");
  if (arguments.length < 2) {
    for (var r = Ps(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? If : e ? Ff : Of)(n, e));
}
function qf() {
  this.textContent = "";
}
function Vf(t) {
  return function() {
    this.textContent = t;
  };
}
function zf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Hf(t) {
  return arguments.length ? this.each(t == null ? qf : (typeof t == "function" ? zf : Vf)(t)) : this.node().textContent;
}
function Yf() {
  this.innerHTML = "";
}
function Bf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Uf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Wf(t) {
  return arguments.length ? this.each(t == null ? Yf : (typeof t == "function" ? Uf : Bf)(t)) : this.node().innerHTML;
}
function Xf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Gf() {
  return this.each(Xf);
}
function Kf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jf() {
  return this.each(Kf);
}
function Zf(t) {
  var e = typeof t == "function" ? t : Co(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Jf() {
  return null;
}
function Qf(t, e) {
  var n = typeof t == "function" ? t : Co(t), r = e == null ? Jf : typeof e == "function" ? e : Ms(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function tc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ec() {
  return this.each(tc);
}
function nc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function rc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ic(t) {
  return this.select(t ? rc : nc);
}
function sc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ac(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function oc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function lc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function uc(t, e, n) {
  return function() {
    var r = this.__on, i, s = ac(e);
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
function fc(t, e, n) {
  var r = oc(t + ""), i, s = r.length, a;
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
  for (o = e ? uc : lc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Io(t, e, n) {
  var r = Mo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function cc(t, e) {
  return function() {
    return Io(this, t, e);
  };
}
function hc(t, e) {
  return function() {
    return Io(this, t, e.apply(this, arguments));
  };
}
function dc(t, e) {
  return this.each((typeof e == "function" ? hc : cc)(t, e));
}
function* pc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Lo = [null];
function Bt(t, e) {
  this._groups = t, this._parents = e;
}
function vr() {
  return new Bt([[document.documentElement]], Lo);
}
function vc() {
  return this;
}
Bt.prototype = vr.prototype = {
  constructor: Bt,
  select: Vu,
  selectAll: Bu,
  selectChild: Gu,
  selectChildren: Ju,
  filter: Qu,
  data: af,
  enter: tf,
  exit: lf,
  join: uf,
  merge: ff,
  selection: vc,
  order: cf,
  sort: hf,
  call: pf,
  nodes: vf,
  node: gf,
  size: _f,
  empty: mf,
  each: yf,
  attr: Rf,
  style: Sf,
  property: Df,
  classed: Lf,
  text: Hf,
  html: Wf,
  raise: Gf,
  lower: jf,
  append: Zf,
  insert: Qf,
  remove: ec,
  clone: ic,
  datum: sc,
  on: fc,
  dispatch: dc,
  [Symbol.iterator]: pc
};
function yt(t) {
  return typeof t == "string" ? new Bt([[document.querySelector(t)]], [document.documentElement]) : new Bt([[t]], Lo);
}
function Ds(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function qo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Br() {
}
var Pr = 0.7, di = 1 / Pr, jn = "\\s*([+-]?\\d+)\\s*", Dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gc = /^#([0-9a-f]{3,8})$/, _c = new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`), mc = new RegExp(`^rgb\\(${Ee},${Ee},${Ee}\\)$`), yc = new RegExp(`^rgba\\(${jn},${jn},${jn},${Dr}\\)$`), wc = new RegExp(`^rgba\\(${Ee},${Ee},${Ee},${Dr}\\)$`), xc = new RegExp(`^hsl\\(${Dr},${Ee},${Ee}\\)$`), bc = new RegExp(`^hsla\\(${Dr},${Ee},${Ee},${Dr}\\)$`), aa = {
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
Ds(Br, Ln, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: oa,
  // Deprecated! Use color.formatHex.
  formatHex: oa,
  formatHex8: $c,
  formatHsl: Ac,
  formatRgb: la,
  toString: la
});
function oa() {
  return this.rgb().formatHex();
}
function $c() {
  return this.rgb().formatHex8();
}
function Ac() {
  return Vo(this).formatHsl();
}
function la() {
  return this.rgb().formatRgb();
}
function Ln(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = gc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ua(e) : n === 3 ? new Ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Kr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Kr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _c.exec(t)) ? new Ft(e[1], e[2], e[3], 1) : (e = mc.exec(t)) ? new Ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = yc.exec(t)) ? Kr(e[1], e[2], e[3], e[4]) : (e = wc.exec(t)) ? Kr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = xc.exec(t)) ? ha(e[1], e[2] / 100, e[3] / 100, 1) : (e = bc.exec(t)) ? ha(e[1], e[2] / 100, e[3] / 100, e[4]) : aa.hasOwnProperty(t) ? ua(aa[t]) : t === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function ua(t) {
  return new Ft(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ft(t, e, n, r);
}
function Ec(t) {
  return t instanceof Br || (t = Ln(t)), t ? (t = t.rgb(), new Ft(t.r, t.g, t.b, t.opacity)) : new Ft();
}
function fs(t, e, n, r) {
  return arguments.length === 1 ? Ec(t) : new Ft(t, e, n, r ?? 1);
}
function Ft(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ds(Ft, fs, qo(Br, {
  brighter(t) {
    return t = t == null ? di : Math.pow(di, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pr : Math.pow(Pr, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft(Pn(this.r), Pn(this.g), Pn(this.b), pi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fa,
  // Deprecated! Use color.formatHex.
  formatHex: fa,
  formatHex8: Rc,
  formatRgb: ca,
  toString: ca
}));
function fa() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}`;
}
function Rc() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}${bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ca() {
  const t = pi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pn(this.r)}, ${Pn(this.g)}, ${Pn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function bn(t) {
  return t = Pn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ha(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new oe(t, e, n, r);
}
function Vo(t) {
  if (t instanceof oe) return new oe(t.h, t.s, t.l, t.opacity);
  if (t instanceof Br || (t = Ln(t)), !t) return new oe();
  if (t instanceof oe) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new oe(a, o, l, t.opacity);
}
function Cc(t, e, n, r) {
  return arguments.length === 1 ? Vo(t) : new oe(t, e, n, r ?? 1);
}
function oe(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ds(oe, Cc, qo(Br, {
  brighter(t) {
    return t = t == null ? di : Math.pow(di, t), new oe(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pr : Math.pow(Pr, t), new oe(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Ft(
      Wi(t >= 240 ? t - 240 : t + 120, i, r),
      Wi(t, i, r),
      Wi(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new oe(da(this.h), jr(this.s), jr(this.l), pi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${da(this.h)}, ${jr(this.s) * 100}%, ${jr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function da(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function jr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Wi(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Fs = (t) => () => t;
function Tc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Nc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Sc(t) {
  return (t = +t) == 1 ? zo : function(e, n) {
    return n - e ? Nc(e, n, t) : Fs(isNaN(e) ? n : e);
  };
}
function zo(t, e) {
  var n = e - t;
  return n ? Tc(t, n) : Fs(isNaN(t) ? e : t);
}
const vi = (function t(e) {
  var n = Sc(e);
  function r(i, s) {
    var a = n((i = fs(i)).r, (s = fs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = zo(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function kc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Mc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Pc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Gn(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Dc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Ae(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Fc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Gn(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var cs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(cs.source, "g");
function Oc(t) {
  return function() {
    return t;
  };
}
function Ic(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ho(t, e) {
  var n = cs.lastIndex = Xi.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = cs.exec(t)) && (i = Xi.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Ae(r, i) })), n = Xi.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Ic(l[0].x) : Oc(e) : (e = l.length, function(u) {
    for (var f = 0, c; f < e; ++f) o[(c = l[f]).i] = c.x(u);
    return o.join("");
  });
}
function Gn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Fs(e) : (n === "number" ? Ae : n === "string" ? (r = Ln(e)) ? (e = r, vi) : Ho : e instanceof Ln ? vi : e instanceof Date ? Dc : Mc(e) ? kc : Array.isArray(e) ? Pc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Fc : Ae)(t, e);
}
var pa = 180 / Math.PI, hs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * pa,
    skewX: Math.atan(l) * pa,
    scaleX: a,
    scaleY: o
  };
}
var Zr;
function Lc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? hs : Yo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function qc(t) {
  return t == null || (Zr || (Zr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zr.setAttribute("transform", t), !(t = Zr.transform.baseVal.consolidate())) ? hs : (t = t.matrix, Yo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Bo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, c, h, v, g) {
    if (u !== c || f !== h) {
      var m = v.push("translate(", null, e, null, n);
      g.push({ i: m - 4, x: Ae(u, c) }, { i: m - 2, x: Ae(f, h) });
    } else (c || h) && v.push("translate(" + c + e + h + n);
  }
  function a(u, f, c, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Ae(u, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function o(u, f, c, h) {
    u !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Ae(u, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function l(u, f, c, h, v, g) {
    if (u !== c || f !== h) {
      var m = v.push(i(v) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ae(u, c) }, { i: m - 2, x: Ae(f, h) });
    } else (c !== 1 || h !== 1) && v.push(i(v) + "scale(" + c + "," + h + ")");
  }
  return function(u, f) {
    var c = [], h = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, c, h), a(u.rotate, f.rotate, c, h), o(u.skewX, f.skewX, c, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, c, h), u = f = null, function(v) {
      for (var g = -1, m = h.length, b; ++g < m; ) c[(b = h[g]).i] = b.x(v);
      return c.join("");
    };
  };
}
var Vc = Bo(Lc, "px, ", "px)", "deg)"), zc = Bo(qc, ", ", ")", ")"), hr = 0, Er = 0, $r = 0, Uo = 1e3, gi, Rr, _i = 0, qn = 0, Mi = 0, Fr = typeof performance == "object" && performance.now ? performance : Date, Wo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Os() {
  return qn || (Wo(Hc), qn = Fr.now() + Mi);
}
function Hc() {
  qn = 0;
}
function mi() {
  this._call = this._time = this._next = null;
}
mi.prototype = Xo.prototype = {
  constructor: mi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (e == null ? 0 : +e), !this._next && Rr !== this && (Rr ? Rr._next = this : gi = this, Rr = this), this._call = t, this._time = n, ds();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ds());
  }
};
function Xo(t, e, n) {
  var r = new mi();
  return r.restart(t, e, n), r;
}
function Yc() {
  Os(), ++hr;
  for (var t = gi, e; t; )
    (e = qn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --hr;
}
function va() {
  qn = (_i = Fr.now()) + Mi, hr = Er = 0;
  try {
    Yc();
  } finally {
    hr = 0, Uc(), qn = 0;
  }
}
function Bc() {
  var t = Fr.now(), e = t - _i;
  e > Uo && (Mi -= e, _i = t);
}
function Uc() {
  for (var t, e = gi, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : gi = n);
  Rr = t, ds(r);
}
function ds(t) {
  if (!hr) {
    Er && (Er = clearTimeout(Er));
    var e = t - qn;
    e > 24 ? (t < 1 / 0 && (Er = setTimeout(va, t - Fr.now() - Mi)), $r && ($r = clearInterval($r))) : ($r || (_i = Fr.now(), $r = setInterval(Bc, Uo)), hr = 1, Wo(va));
  }
}
function ga(t, e, n) {
  var r = new mi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Wc = Ro("start", "end", "cancel", "interrupt"), Xc = [], Go = 0, _a = 1, ps = 2, si = 3, ma = 4, vs = 5, ai = 6;
function Pi(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Gc(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Wc,
    tween: Xc,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Go
  });
}
function Is(t, e) {
  var n = he(t, e);
  if (n.state > Go) throw new Error("too late; already scheduled");
  return n;
}
function Se(t, e) {
  var n = he(t, e);
  if (n.state > si) throw new Error("too late; already running");
  return n;
}
function he(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Gc(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Xo(s, 0, n.time);
  function s(u) {
    n.state = _a, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, c, h, v;
    if (n.state !== _a) return l();
    for (f in r)
      if (v = r[f], v.name === n.name) {
        if (v.state === si) return ga(a);
        v.state === ma ? (v.state = ai, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[f]) : +f < e && (v.state = ai, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[f]);
      }
    if (ga(function() {
      n.state === si && (n.state = ma, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = ps, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ps) {
      for (n.state = si, i = new Array(h = n.tween.length), f = 0, c = -1; f < h; ++f)
        (v = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++c] = v);
      i.length = c + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = vs, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    n.state === vs && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ai, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Kc(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > ps && r.state < vs, r.state = ai, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function jc(t) {
  return this.each(function() {
    Kc(this, t);
  });
}
function Zc(t, e) {
  var n, r;
  return function() {
    var i = Se(this, t), s = i.tween;
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
function Jc(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Se(this, t), a = s.tween;
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
function Qc(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = he(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Zc : Jc)(n, t, e));
}
function Ls(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Se(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return he(i, r).value[e];
  };
}
function Ko(t, e) {
  var n;
  return (typeof e == "number" ? Ae : e instanceof Ln ? vi : (n = Ln(e)) ? (e = n, vi) : Ho)(t, e);
}
function th(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function eh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function nh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function rh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ih(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function sh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function ah(t, e) {
  var n = ki(t), r = n === "transform" ? zc : Ko;
  return this.attrTween(t, typeof e == "function" ? (n.local ? sh : ih)(n, r, Ls(this, "attr." + t, e)) : e == null ? (n.local ? eh : th)(n) : (n.local ? rh : nh)(n, r, e));
}
function oh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function lh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function uh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && lh(t, s)), n;
  }
  return i._value = e, i;
}
function fh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && oh(t, s)), n;
  }
  return i._value = e, i;
}
function ch(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = ki(t);
  return this.tween(n, (r.local ? uh : fh)(r, e));
}
function hh(t, e) {
  return function() {
    Is(this, t).delay = +e.apply(this, arguments);
  };
}
function dh(t, e) {
  return e = +e, function() {
    Is(this, t).delay = e;
  };
}
function ph(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? hh : dh)(e, t)) : he(this.node(), e).delay;
}
function vh(t, e) {
  return function() {
    Se(this, t).duration = +e.apply(this, arguments);
  };
}
function gh(t, e) {
  return e = +e, function() {
    Se(this, t).duration = e;
  };
}
function _h(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vh : gh)(e, t)) : he(this.node(), e).duration;
}
function mh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Se(this, t).ease = e;
  };
}
function yh(t) {
  var e = this._id;
  return arguments.length ? this.each(mh(e, t)) : he(this.node(), e).ease;
}
function wh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Se(this, t).ease = n;
  };
}
function xh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(wh(this._id, t));
}
function bh(t) {
  typeof t != "function" && (t = No(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new Ke(r, this._parents, this._name, this._id);
}
function $h(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, c = a[o] = new Array(f), h, v = 0; v < f; ++v)
      (h = l[v] || u[v]) && (c[v] = h);
  for (; o < r; ++o)
    a[o] = e[o];
  return new Ke(a, this._parents, this._name, this._id);
}
function Ah(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Eh(t, e, n) {
  var r, i, s = Ah(e) ? Is : Se;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Rh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? he(this.node(), n).on.on(t) : this.each(Eh(n, t, e));
}
function Ch(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Th() {
  return this.on("end.remove", Ch(this._id));
}
function Nh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ms(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, c, h = 0; h < l; ++h)
      (f = o[h]) && (c = t.call(f, f.__data__, h, o)) && ("__data__" in f && (c.__data__ = f.__data__), u[h] = c, Pi(u[h], e, n, h, u, he(f, n)));
  return new Ke(s, this._parents, e, n);
}
function Sh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = To(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, c = 0; c < u; ++c)
      if (f = l[c]) {
        for (var h = t.call(f, f.__data__, c, l), v, g = he(f, n), m = 0, b = h.length; m < b; ++m)
          (v = h[m]) && Pi(v, e, n, m, h, g);
        s.push(h), a.push(f);
      }
  return new Ke(s, a, e, n);
}
var kh = vr.prototype.constructor;
function Mh() {
  return new kh(this._groups, this._parents);
}
function Ph(t, e) {
  var n, r, i;
  return function() {
    var s = cr(this, t), a = (this.style.removeProperty(t), cr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function jo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = cr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Fh(t, e, n) {
  var r, i, s;
  return function() {
    var a = cr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), cr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Oh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Se(this, t), u = l.on, f = l.value[s] == null ? o || (o = jo(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Ih(t, e, n) {
  var r = (t += "") == "transform" ? Vc : Ko;
  return e == null ? this.styleTween(t, Ph(t, r)).on("end.style." + t, jo(t)) : typeof e == "function" ? this.styleTween(t, Fh(t, r, Ls(this, "style." + t, e))).each(Oh(this._id, t)) : this.styleTween(t, Dh(t, r, e), n).on("end.style." + t, null);
}
function Lh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function qh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Lh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Vh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, qh(t, e, n ?? ""));
}
function zh(t) {
  return function() {
    this.textContent = t;
  };
}
function Hh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Yh(t) {
  return this.tween("text", typeof t == "function" ? Hh(Ls(this, "text", t)) : zh(t == null ? "" : t + ""));
}
function Bh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Uh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Bh(i)), e;
  }
  return r._value = t, r;
}
function Wh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Uh(t));
}
function Xh() {
  for (var t = this._name, e = this._id, n = Zo(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = he(l, e);
        Pi(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ke(r, this._parents, t, n);
}
function Gh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Se(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Kh = 0;
function Ke(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function oi(t) {
  return vr().transition(t);
}
function Zo() {
  return ++Kh;
}
var qe = vr.prototype;
Ke.prototype = oi.prototype = {
  constructor: Ke,
  select: Nh,
  selectAll: Sh,
  selectChild: qe.selectChild,
  selectChildren: qe.selectChildren,
  filter: bh,
  merge: $h,
  selection: Mh,
  transition: Xh,
  call: qe.call,
  nodes: qe.nodes,
  node: qe.node,
  size: qe.size,
  empty: qe.empty,
  each: qe.each,
  on: Rh,
  attr: ah,
  attrTween: ch,
  style: Ih,
  styleTween: Vh,
  text: Yh,
  textTween: Wh,
  remove: Th,
  tween: Qc,
  delay: ph,
  duration: _h,
  ease: yh,
  easeVarying: xh,
  end: Gh,
  [Symbol.iterator]: qe[Symbol.iterator]
};
function jh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Zh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: jh
};
function Jh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Qh(t) {
  var e, n;
  t instanceof Ke ? (e = t._id, t = t._name) : (e = Zo(), (n = Zh).time = Os(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Pi(l, t, e, u, a, n || Jh(l, e));
  return new Ke(r, this._parents, t, e);
}
vr.prototype.interrupt = jc;
vr.prototype.transition = Qh;
const gs = Math.PI, _s = 2 * gs, _n = 1e-6, td = _s - _n;
function Jo(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function ed(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Jo;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class nd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Jo : ed(e);
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
    let a = this._x1, o = this._y1, l = r - e, u = i - n, f = a - e, c = o - n, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > _n) if (!(Math.abs(c * l - u * f) > _n) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let v = r - a, g = i - o, m = l * l + u * u, b = v * v + g * g, $ = Math.sqrt(m), R = Math.sqrt(h), E = s * Math.tan((gs - Math.acos((m + h - b) / (2 * $ * R))) / 2), C = E / R, F = E / $;
      Math.abs(C - 1) > _n && this._append`L${e + C * f},${n + C * c}`, this._append`A${s},${s},0,0,${+(c * v > f * g)},${this._x1 = e + F * l},${this._y1 = n + F * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, c = 1 ^ a, h = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > _n || Math.abs(this._y1 - f) > _n) && this._append`L${u},${f}`, r && (h < 0 && (h = h % _s + _s), h > td ? this._append`A${r},${r},0,1,${c},${e - o},${n - l}A${r},${r},0,1,${c},${this._x1 = u},${this._y1 = f}` : h > _n && this._append`A${r},${r},0,${+(h >= gs)},${c},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function rd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const id = rd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Nt(t) {
  return function() {
    return t;
  };
}
const ya = Math.abs, Rt = Math.atan2, gn = Math.cos, sd = Math.max, Gi = Math.min, ye = Math.sin, Kn = Math.sqrt, kt = 1e-12, Or = Math.PI, yi = Or / 2, li = 2 * Or;
function ad(t) {
  return t > 1 ? 0 : t < -1 ? Or : Math.acos(t);
}
function wa(t) {
  return t >= 1 ? yi : t <= -1 ? -yi : Math.asin(t);
}
function od(t) {
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
  }, () => new nd(e);
}
function ld(t) {
  return t.innerRadius;
}
function ud(t) {
  return t.outerRadius;
}
function fd(t) {
  return t.startAngle;
}
function cd(t) {
  return t.endAngle;
}
function hd(t) {
  return t && t.padAngle;
}
function dd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, c = o - s, h = c * l - f * u;
  if (!(h * h < kt))
    return h = (f * (e - s) - c * (t - i)) / h, [t + h * l, e + h * u];
}
function Jr(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Kn(o * o + l * l), f = u * l, c = -u * o, h = t + f, v = e + c, g = n + f, m = r + c, b = (h + g) / 2, $ = (v + m) / 2, R = g - h, E = m - v, C = R * R + E * E, F = i - s, J = h * m - g * v, ct = (E < 0 ? -1 : 1) * Kn(sd(0, F * F * C - J * J)), B = (J * E - R * ct) / C, et = (-J * R - E * ct) / C, _t = (J * E + R * ct) / C, ht = (-J * R + E * ct) / C, U = B - b, S = et - $, I = _t - b, q = ht - $;
  return U * U + S * S > I * I + q * q && (B = _t, et = ht), {
    cx: B,
    cy: et,
    x01: -f,
    y01: -c,
    x11: B * (i / F - 1),
    y11: et * (i / F - 1)
  };
}
function Ve() {
  var t = ld, e = ud, n = Nt(0), r = null, i = fd, s = cd, a = hd, o = null, l = od(u);
  function u() {
    var f, c, h = +t.apply(this, arguments), v = +e.apply(this, arguments), g = i.apply(this, arguments) - yi, m = s.apply(this, arguments) - yi, b = ya(m - g), $ = m > g;
    if (o || (o = f = l()), v < h && (c = v, v = h, h = c), !(v > kt)) o.moveTo(0, 0);
    else if (b > li - kt)
      o.moveTo(v * gn(g), v * ye(g)), o.arc(0, 0, v, g, m, !$), h > kt && (o.moveTo(h * gn(m), h * ye(m)), o.arc(0, 0, h, m, g, $));
    else {
      var R = g, E = m, C = g, F = m, J = b, ct = b, B = a.apply(this, arguments) / 2, et = B > kt && (r ? +r.apply(this, arguments) : Kn(h * h + v * v)), _t = Gi(ya(v - h) / 2, +n.apply(this, arguments)), ht = _t, U = _t, S, I;
      if (et > kt) {
        var q = wa(et / h * ye(B)), mt = wa(et / v * ye(B));
        (J -= q * 2) > kt ? (q *= $ ? 1 : -1, C += q, F -= q) : (J = 0, C = F = (g + m) / 2), (ct -= mt * 2) > kt ? (mt *= $ ? 1 : -1, R += mt, E -= mt) : (ct = 0, R = E = (g + m) / 2);
      }
      var Ut = v * gn(R), tt = v * ye(R), ke = h * gn(F), de = h * ye(F);
      if (_t > kt) {
        var ee = v * gn(E), Me = v * ye(E), Ct = h * gn(C), pe = h * ye(C), Tt;
        if (b < Or)
          if (Tt = dd(Ut, tt, Ct, pe, ee, Me, ke, de)) {
            var ve = Ut - Tt[0], Pe = tt - Tt[1], Ze = ee - Tt[0], un = Me - Tt[1], fn = 1 / ye(ad((ve * Ze + Pe * un) / (Kn(ve * ve + Pe * Pe) * Kn(Ze * Ze + un * un))) / 2), Hn = Kn(Tt[0] * Tt[0] + Tt[1] * Tt[1]);
            ht = Gi(_t, (h - Hn) / (fn - 1)), U = Gi(_t, (v - Hn) / (fn + 1));
          } else
            ht = U = 0;
      }
      ct > kt ? U > kt ? (S = Jr(Ct, pe, Ut, tt, v, U, $), I = Jr(ee, Me, ke, de, v, U, $), o.moveTo(S.cx + S.x01, S.cy + S.y01), U < _t ? o.arc(S.cx, S.cy, U, Rt(S.y01, S.x01), Rt(I.y01, I.x01), !$) : (o.arc(S.cx, S.cy, U, Rt(S.y01, S.x01), Rt(S.y11, S.x11), !$), o.arc(0, 0, v, Rt(S.cy + S.y11, S.cx + S.x11), Rt(I.cy + I.y11, I.cx + I.x11), !$), o.arc(I.cx, I.cy, U, Rt(I.y11, I.x11), Rt(I.y01, I.x01), !$))) : (o.moveTo(Ut, tt), o.arc(0, 0, v, R, E, !$)) : o.moveTo(Ut, tt), !(h > kt) || !(J > kt) ? o.lineTo(ke, de) : ht > kt ? (S = Jr(ke, de, ee, Me, h, -ht, $), I = Jr(Ut, tt, Ct, pe, h, -ht, $), o.lineTo(S.cx + S.x01, S.cy + S.y01), ht < _t ? o.arc(S.cx, S.cy, ht, Rt(S.y01, S.x01), Rt(I.y01, I.x01), !$) : (o.arc(S.cx, S.cy, ht, Rt(S.y01, S.x01), Rt(S.y11, S.x11), !$), o.arc(0, 0, h, Rt(S.cy + S.y11, S.cx + S.x11), Rt(I.cy + I.y11, I.cx + I.x11), $), o.arc(I.cx, I.cy, ht, Rt(I.y11, I.x11), Rt(I.y01, I.x01), !$))) : o.arc(0, 0, h, F, C, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, c = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Or / 2;
    return [gn(c) * f, ye(c) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Nt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Nt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Nt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Nt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Nt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Nt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Nt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function pd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function gd(t) {
  return t;
}
function xa() {
  var t = gd, e = vd, n = null, r = Nt(0), i = Nt(li), s = Nt(0);
  function a(o) {
    var l, u = (o = pd(o)).length, f, c, h = 0, v = new Array(u), g = new Array(u), m = +r.apply(this, arguments), b = Math.min(li, Math.max(-li, i.apply(this, arguments) - m)), $, R = Math.min(Math.abs(b) / u, s.apply(this, arguments)), E = R * (b < 0 ? -1 : 1), C;
    for (l = 0; l < u; ++l)
      (C = g[v[l] = l] = +t(o[l], l, o)) > 0 && (h += C);
    for (e != null ? v.sort(function(F, J) {
      return e(g[F], g[J]);
    }) : n != null && v.sort(function(F, J) {
      return n(o[F], o[J]);
    }), l = 0, c = h ? (b - u * E) / h : 0; l < u; ++l, m = $)
      f = v[l], C = g[f], $ = m + (C > 0 ? C * c : 0) + E, g[f] = {
        data: o[f],
        index: l,
        value: C,
        startAngle: m,
        endAngle: $,
        padAngle: R
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Nt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Nt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Nt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Nt(+o), a) : s;
  }, a;
}
function Cr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Cr.prototype = {
  constructor: Cr,
  scale: function(t) {
    return t === 1 ? this : new Cr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Cr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Cr.prototype;
var _d = /* @__PURE__ */ yu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const md = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function Qo(t, e) {
  xs(e, !0), $o(t, md);
  let n = vt(e, "jsonData", 7), r = vt(e, "currentRound", 7, 1), i = vt(e, "mouseEventType", 15), s = vt(e, "mouseData", 15), a = vt(e, "mouseY", 15), o = vt(e, "requestRoundChange", 7, (d) => {
  }), l = vt(e, "candidateColors", 23, () => []), u = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), f = vt(e, "firstRoundDeterminesPercentages", 7, !1), c = vt(e, "displayPhase", 15, 0);
  function h(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const v = 800, g = 800, m = Math.min(v, g) * 0.3, b = v / 2, $ = g / 2, R = "Pie", E = "Donut", C = "TextLayer", F = "url(#cross-hatch)", J = 1.15, ct = 0.1, B = 750, et = 800;
  function _t(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let ht = [], U = [], S = [], I = 0, q = 0;
  const mt = {}, Ut = "No Further Rankings";
  let tt = /* @__PURE__ */ xt(null);
  function ke() {
    const d = yt(x(tt));
    d.select("#" + R).remove(), d.select("#" + E).remove(), d.select("#" + C).remove();
  }
  function de(d) {
    o() && (j = d, o()(d));
  }
  function ee(d) {
    ke(), S = Me(d), ht = tl(d, R, S, b, $, 0, Ct());
  }
  Eu(() => {
    Fi(), setTimeout(
      () => {
        ee(r());
      },
      0
    );
  });
  function Me(d) {
    const _ = Yn(d);
    return I = un(d), _;
  }
  function Ct() {
    return m;
  }
  function pe() {
    return Ct() * 1.41;
  }
  function Tt(d) {
    let _ = 0;
    for (let y = 1; y < d; y++) {
      const M = n().results[y - 1].tallyResults;
      for (let A = 0; A < M.length; A++) {
        const T = M[A].transfers;
        if (T) {
          const k = T.exhausted;
          k && (_ += Number(k));
        }
      }
    }
    return _;
  }
  function ve(d, _) {
    if (d === "exhausted") return Tt(_);
    {
      const y = n().results[_ - 1].tally;
      return Number(y[d]);
    }
  }
  function Pe(d, _) {
    return ve(d, _).toLocaleString("en-US");
  }
  function Ze(d, _) {
    const y = f() ? I : Hn(_);
    return (ve(d, _) / y).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function un(d) {
    const _ = n().results[d - 1].tally;
    let y = 0;
    for (let [M, A] of Object.entries(_))
      y += Number(A);
    return y;
  }
  function fn(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Hn(d) {
    const _ = n().results[d - 1].tally;
    let y = 0;
    for (let [M, A] of Object.entries(_))
      fn(M) || (y += Number(A));
    return y;
  }
  function cn(d, _) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    if (u() && d === n().results.length)
      return [];
    const y = n().results[d - 1].tallyResults, M = [];
    for (let A = 0; A < y.length; A++) {
      const T = y[A][_];
      T != null && M.push(T);
    }
    return M;
  }
  function hn(d) {
    return cn(d, "eliminated");
  }
  function gr(d) {
    let _ = [];
    for (let y = 1; y <= d; y++) _ = _.concat(cn(y, "elected"));
    return _;
  }
  function Di(d, _) {
    const y = n().results[_ - 1].tallyResults;
    let M = 0;
    const A = y.findIndex((T) => (T == null ? void 0 : T.elected) && d == T.elected);
    if (A >= 0) {
      const T = y[A].transfers;
      if (T)
        for (let [k, O] of Object.entries(T)) M += Number(O);
    } else
      return 0;
    return M;
  }
  function Yn(d) {
    const _ = n().results;
    let y = _[Math.max(0, d - 2)].tally;
    const M = [], A = [];
    for (let [k, O] of Object.entries(y))
      M.push({ label: k, value: 0 });
    y = _[d - 1].tally;
    for (let k of M) {
      const O = Number(y[k.label]), V = Di(k.label, d);
      V > 0 ? (A.push({
        label: k.label,
        value: V,
        isTransfer: !0
      }), k.value = O - V, A.push(k)) : (k.value = O, A.push(k));
    }
    const T = Tt(d);
    return A.push({ label: "exhausted", value: T }), A;
  }
  function Fi() {
    const d = yt(x(tt)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [y, M] of Object.entries(n().results[0].tally)) {
      !l() || l().length === 0 ? _ < 10 ? mt[y] = id[_] : mt[y] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : mt[y] = l()[_ % l().length], _++;
      {
        const A = d.clone(!0);
        A.attr("id", _t(y)).select("rect").attr("fill", mt[y]), A.selectAll("circle").attr("fill", "#383838");
      }
    }
    mt.exhausted = F, mt["Inactive Ballots"] = F;
  }
  function w() {
    yt(x(tt)).select("#" + E).remove();
  }
  function X(d, _) {
    const y = oi("global").duration(et);
    _ && y.on("end", _), w(), Fe(d), el(), rl(0, Ct()), Ur();
  }
  function nt(d, _) {
    const y = oi("global").duration(et);
    _ && y.on("end", _), Oe(d);
  }
  function st(d, _) {
    const y = oi("global").duration(et);
    _ && y.on("end", _), Bn(d), Un(Ct());
  }
  let Q = !1, rt = [];
  function Et() {
    Ur(), Q = !1, Je();
  }
  function Je() {
    if (rt.length === 0) {
      j !== r() && (r() === j + 1 && j > 0 && r() <= n().results.length ? (j = r(), ne(r())) : r() >= 1 && r() <= n().results.length && (j = r(), c(0), ee(r())));
      return;
    }
    const d = rt.shift();
    switch (d.type) {
      case "round": {
        const _ = d.round;
        _ === j + 1 && j > 0 && _ <= n().results.length ? (j = _, ne(_)) : (_ !== j && _ >= 1 && _ <= n().results.length && (j = _, c(0), ee(_)), Je());
        break;
      }
      case "step":
        pn();
        break;
    }
  }
  function ne(d) {
    if (d <= 1 || d > n().results.length) {
      Je();
      return;
    }
    Q = !0, q = d, c(0), X(q - 1, () => {
      nt(q - 1, () => {
        st(q, Et);
      });
    });
  }
  function dn() {
    Q || (Q = !0, q = r(), De());
  }
  function De() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), rt.length > 0) {
      Et();
      return;
    }
    const d = q < n().results.length - 1 ? De : Et;
    X(q, () => {
      nt(q, () => {
        q++, de(q), st(q, d);
      });
    });
  }
  Cs(() => {
    ge();
  });
  let j = 0;
  function ge() {
    if (j != r()) {
      if (Q) {
        rt.push({ type: "round", round: r() });
        return;
      }
      j == r() - 1 && j > 0 ? Qe() : Wt(r()), j = r();
    }
  }
  function Wt(d) {
    if (Q) {
      rt.push({ type: "round", round: d });
      return;
    }
    c(0), ee(d);
  }
  function Qe() {
    if (Q) {
      rt.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (q = r(), q > n().results.length) {
      Ur(), Q = !1;
      return;
    }
    Q = !0, c() === 0 ? X(q - 1, () => {
      nt(q - 1, () => {
        st(q, Et);
      });
    }) : c() === 1 ? nt(q - 1, () => {
      st(q, Et);
    }) : c() === 2 && st(q, Et), c(0);
  }
  function pn() {
    if (r() > n().results.length) {
      Ur(), Q = !1;
      return;
    }
    if (Q) {
      rt.push({ type: "step" });
      return;
    }
    Q = !0, c((c() + 1) % 3), q = r(), c() === 1 ? X(q, Et) : c() === 2 ? nt(q, Et) : c() === 0 ? (q++, de(q), st(q, Et)) : (Q = !1, console.warn("displayPhase out of range at ", c()));
  }
  function Bn(d) {
    S = Yn(d), ht = il(d, R, S, 0, Ct(), !0);
  }
  function Un(d, _) {
    const y = yt(x(tt)).select("#" + E), M = Ve().outerRadius(d).innerRadius(d - 1), A = y.selectAll(".slice");
    let T = A.size();
    function k() {
      T--, T === 0 && nl();
    }
    A.select("path").transition("global").duration(B).attr("d", (O) => M(O)).on("end", (O) => k());
  }
  function Fe(d) {
    const _ = mr(d, ht);
    U = Vs(d, E, _, b, $, Ct(), pe(), !1, !0);
  }
  function Oe(d) {
    const _ = Le(d, U, ht);
    U = zs(d, E, _, Ct(), pe(), !1);
  }
  function Ie(d) {
    return mt[d.data.label];
  }
  function _r(d) {
    const _ = {}, y = n().results[d - 1].tallyResults;
    for (let M = 0; M < y.length; M++) {
      let A = y[M].eliminated;
      if (A === void 0 && (A = y[M].elected), A === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = y[M].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [k, O] of Object.entries(T))
        _[k] === void 0 ? _[k] = Number(O) : _[k] += Number(O);
    }
    return _;
  }
  function mr(d, _) {
    const y = [], M = I, A = n().results[d - 1].tallyResults;
    for (let T = 0; T < A.length; T++) {
      let k = A[T].eliminated;
      if (k === void 0 && (k = A[T].elected), k === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const O = A[T].transfers;
      if (O === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let V = _.find((D) => D.data.label == k && D.data.isTransfer);
      V === void 0 && (V = _.find((D) => D.data.label == k && !D.data.isTransfer));
      let G = 0;
      if (V) G = V.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [D, Y] of Object.entries(O)) {
        let it;
        const me = _.find((lt) => lt.data.label == D);
        if (me)
          it = structuredClone(me);
        else if (D == "exhausted")
          it = {
            data: { label: D, value: Number(Y) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (D == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", Y);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", D);
          continue;
        }
        const N = Number(Y) / M * 2 * Math.PI;
        it.startAngle = G, G = it.endAngle = G + N, it.index = T, it.data.transferIndex = T, y.push(it);
      }
    }
    return y;
  }
  function yr(d, _, y) {
    const M = {};
    for (let [A, T] of Object.entries(d)) {
      const k = y.find((G) => A == G.data.label);
      if (k === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", A);
        continue;
      }
      const O = (k.startAngle + k.endAngle) / 2, V = d[k.data.label] / _ * 2 * Math.PI;
      M[k.data.label] = O - V / 2;
    }
    return M;
  }
  function Le(d, _, y) {
    const M = [], A = I, T = _r(d), k = yr(T, A, y);
    for (let [O, V] of _.entries()) {
      const G = structuredClone(V), D = V.endAngle - V.startAngle, Y = y.find((it) => V.data.label === it.data.label && !it.data.isTransfer);
      if (Y) {
        const it = Y.data.label;
        G.startAngle = k[it], k[it] += D, G.endAngle = G.startAngle + D;
      } else if (V.data.label === "exhausted")
        G.startAngle = V.startAngle, G.endAngle = V.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", V.data.label);
        continue;
      }
      G.index = O, M.push(G);
    }
    return M;
  }
  function _e(d, _, y, M, A, T) {
    const O = yt(x(tt)).append("g").attr("id", C).attr("transform", `translate(${y}, ${M})`), V = Ve().innerRadius(A * J).outerRadius(A * J);
    O.selectAll("text").data(_).enter().each(function(G) {
      G.endAngle - G.startAngle < ct || G.data.isTransfer || yt(this).append("g").attr("id", (D) => h(D.data)).classed("eliminated", (D) => T.includes(D.data.label) || D.data.isTransfer === !0).each(function(D, Y) {
        D.data.label === "exhausted" && yt(this).on("mouseenter", (it, me) => sl(it)).on("mouseleave", (it, me) => al());
      }).append("text").attr("transform", (D) => `translate(${V.centroid(D)})`).attr("text-anchor", (D) => Ii(D.startAngle, D.endAngle)).text((D) => D.data.label === "exhausted" ? Ut : D.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((D) => {
        const Y = Pe(D.data.label, d);
        return !f() && fn(D.data.label) ? Y : Y + " (" + Ze(D.data.label, d) + ")";
      });
    });
  }
  function Oi(d, _, y, M) {
    const T = yt(x(tt)).select("#" + C), k = T.selectAll("tspan"), O = T.selectAll("g").data(_, (Y) => h(Y.data)).classed("eliminated", (Y) => M.includes(Y.data.label) || Y.data.isTransfer === !0), V = Ve().innerRadius(y * J).outerRadius(y * J + 1);
    k.transition("global").duration(B).attr("transform", (Y) => `translate(${V.centroid(Y)})`).attr("text-anchor", (Y) => Ii(Y.startAngle, Y.endAngle)), O.select("text").transition("global").duration(B).attr("transform", (Y) => `translate(${V.centroid(Y)})`).attr("text-anchor", (Y) => Ii(Y.startAngle, Y.endAngle)).on("end", (Y) => D());
    let G = O.size();
    function D(Y) {
      G--, G === 0 && (T.remove(), _e(d, _, b, $, y, M));
    }
  }
  function tl(d, _, y, M, A, T, k, O = !0, V = !1) {
    const D = xa().sort(null).value((Y) => Y.value)(y);
    return Vs(d, _, D, M, A, T, k, O, V), D;
  }
  function Ur() {
    yt(x(tt)).select("#" + R).selectAll(".elected").style("stroke", "yellow").style("stroke-width", "2px");
  }
  function Vs(d, _, y, M, A, T, k, O, V) {
    const G = hn(d), D = gr(d), me = yt(x(tt)).attr("viewBox", `0 0 ${v} ${g}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${M}, ${A})`).selectAll(".slice").data(y).enter().append("g").attr("class", "slice").classed("eliminated", (N) => G.includes(N.data.label) || N.data.isTransfer === !0).classed("elected", (N) => D.includes(N.data.label) && !N.data.isTransfer).attr("id", (N) => h(N.data)).on("mouseenter", (N, lt) => qi(N, lt)).on("mouseleave", (N, lt) => Vi(N, lt)), wr = Ve().outerRadius(k).innerRadius(T);
    if (V) {
      const N = Ve().outerRadius(T + 1).innerRadius(T);
      me.append("path").attr("d", N).transition("global").duration(B).attr("d", (lt) => wr(lt)).attr("fill", (lt) => Ie(lt)).on("end", (lt) => Li());
    } else
      me.append("path").attr("d", (N) => wr(N)).attr("fill", (N) => Ie(N)), Li();
    return O && _e(d, y, M, A, k, G), y;
  }
  function el() {
    const y = yt(x(tt)).select("#" + C).selectAll(".eliminated");
    y.size() > 0 && y.classed("finished", !0);
  }
  function nl() {
    const y = yt(x(tt)).select("#" + C).selectAll(".finished");
    y.size() > 0 && y.remove();
  }
  function rl(d, _) {
    const A = yt(x(tt)).select("#" + R).selectAll(".eliminated"), T = Ve().innerRadius(d), k = Ve().outerRadius(_);
    A.classed("finished", !0).select("path").transition("global").duration(B).attrTween("d", function(O) {
      const V = Gn(_, d);
      return function(G) {
        return k.innerRadius(V(G)), k(O);
      };
    }).attr("fill", (O) => `url(#${_t(O.data.label)})`), A.clone(!0).classed("finished", !0).select("path").transition("global").duration(B).attrTween("d", function(O) {
      const V = Gn(_, d);
      return function(G) {
        return T.outerRadius(V(G)), T(O);
      };
    }).attr("fill", (O) => Ie(O));
  }
  function Ii(d, _) {
    const y = (d + _) / 2;
    return y > Math.PI * 11 / 6 || y < Math.PI * 1 / 6 || y > Math.PI * 5 / 6 && y < Math.PI * 7 / 6 ? "middle" : y < Math.PI ? "start" : "end";
  }
  function Li() {
    yt(x(
      tt
      // force redisplay of text labels
    )).select("#" + C).raise().append("g").remove();
  }
  function il(d, _, y, M, A, T) {
    const O = xa().sort(null).value((V) => V.value)(y);
    return zs(d, _, O, M, A, T), O;
  }
  function zs(d, _, y, M, A, T) {
    const k = hn(d), O = gr(d), V = Ve().outerRadius(A).innerRadius(M).startAngle((N) => N.startAngle).endAngle((N) => N.endAngle), G = Ve().outerRadius(A).innerRadius(M), Y = yt(x(tt)).select("#" + _);
    Y.selectAll(".slice").attr("prevStart", (N) => N.startAngle).attr("prevEnd", (N) => N.endAngle);
    const it = Y.selectAll(".slice").data(y, (N) => h(N.data));
    it.enter().append("g").attr("class", "slice").attr("id", (N) => h(N.data)).classed("eliminated", !0).on("mouseenter", (N, lt) => qi(N, lt)).on("mouseleave", (N, lt) => Vi(N, lt)).append("path").attr("d", (N) => G(N)).attr("fill", (N) => Ie(N)), it.classed("eliminated", (N) => k.includes(N.data.label)).classed("elected", (N) => O.includes(N.data.label)).on("mouseenter", (N, lt) => qi(N, lt)).on("mouseleave", (N, lt) => Vi(N, lt));
    let me = it.size();
    function wr() {
      me--, me <= 0 && (Li(), Y.selectAll(".finished").remove());
    }
    return it.select("path").transition("global").duration(B).attrTween("d", function(N) {
      const lt = Number(yt(this.parentNode).attr("prevStart")), ll = Number(yt(this.parentNode).attr("prevEnd")), ul = Gn(lt, N.startAngle), fl = Gn(ll, N.endAngle);
      return (Ys) => (V.startAngle(ul(Ys)).endAngle(fl(Ys)), V(N));
    }).on("end", wr), T && Oi(d, y, A, k), y;
  }
  function qi(d, _) {
    s(_.data.label), i("enter"), a(d.clientY);
  }
  function Vi(d, _) {
    s(_.data.label), i("leave");
  }
  function sl(d, _) {
    i("show-exhausted"), a(d.clientY);
  }
  function al(d, _) {
    i("hide-exhausted");
  }
  var ol = {
    pieColors: mt,
    exhaustedLabel: Ut,
    countExhaustedVotes: Tt,
    getEliminatedCandidates: hn,
    getElectedCandidates: gr,
    runFullAnimationFn: dn,
    animateOnePhaseFn: pn,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), dt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), dt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), dt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), dt();
    },
    get mouseY() {
      return a();
    },
    set mouseY(d) {
      a(d), dt();
    },
    get requestRoundChange() {
      return o();
    },
    set requestRoundChange(d = (_) => {
    }) {
      o(d), dt();
    },
    get candidateColors() {
      return l();
    },
    set candidateColors(d = []) {
      l(d), dt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return u();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      u(d), dt();
    },
    get firstRoundDeterminesPercentages() {
      return f();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      f(d), dt();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), dt();
    }
  }, Hs = _d();
  return ni(Hs, (d) => ut(tt, d), () => x(tt)), se(t, Hs), bs(ol);
}
Eo(
  Qo,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
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
var yd = /* @__PURE__ */ zn("<span> </span> <!>", 1), wd = /* @__PURE__ */ zn("About to eliminate: <!>", 1), xd = /* @__PURE__ */ zn("<span> </span> <!>", 1), bd = /* @__PURE__ */ zn(" <!>", 1), $d = /* @__PURE__ */ zn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Ad = /* @__PURE__ */ zn("<span> </span> <br/>", 1), Ed = /* @__PURE__ */ zn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const Rd = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;left:50%;transform:translate(-50%);font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl) {background-color:#4747ff;color:#fff;padding:1px 7px;font-size:0.67rem;min-width:107px;border:none;border-radius:3px;cursor:pointer;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl):hover {background-color:#4747c2;}.pie-chart-container.svelte-1r6y5gl {
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
function Cd(t, e) {
  xs(e, !0), $o(t, Rd);
  const n = 0.85;
  let r = vt(e, "electionSummary", 7), i = vt(e, "currentRound", 7, 1), s = vt(e, "requestRoundChange", 7, (w) => {
  }), a = vt(e, "candidateColors", 23, () => []), o = vt(e, "textForWinner", 7, "elected"), l = vt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = vt(e, "firstRoundDeterminesPercentages", 7, !1), f = vt(e, "showCaptions", 7, !1);
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
  let h = /* @__PURE__ */ Wn(() => c[o()] ?? c.elected), v = /* @__PURE__ */ xt(null), g = /* @__PURE__ */ xt(null), m = /* @__PURE__ */ xt(""), b = /* @__PURE__ */ xt(wn([])), $ = /* @__PURE__ */ xt(""), R = /* @__PURE__ */ xt(""), E = /* @__PURE__ */ xt(0), C = /* @__PURE__ */ Wn(() => F(r()));
  function F(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (X) {
        return console.error("Failed to parse JSON string:", X), {};
      }
    return w || {};
  }
  function J(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function ct() {
    switch (x($)) {
      case "enter":
        ((w) => {
          var X = Tl(w, 2);
          ut(b, X[0], !0), ut(m, X[1], !0);
        })(et(x(R), i())), x(v) && (x(v).style.top = String((x(E) || 0) + 20) + "px", x(v).style.opacity = String(n));
        break;
      case "leave":
        x(v) && (x(v).style.opacity = "0"), ut(b, [], !0), ut(m, "");
        break;
      case "show-exhausted":
        x(g) && (x(g).style.top = String((x(E) || 0) + 20) + "px", x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x($));
        break;
    }
  }
  Cs(() => ct());
  function B(w, X) {
    return w == 1 ? X ? "vote was" : "vote will be" : X ? "votes were" : "votes will be";
  }
  function et(w, X) {
    const nt = [], st = w === "exhausted" ? ke() : w;
    let Q;
    w == "exhausted" ? Q = Ut(1) : Q = x(C).results[0].tally[w], nt.push(`${st} started with ${Q} votes.`);
    for (let rt = 1; rt <= X; rt++) {
      rt === X && (w == "exhausted" ? Q = Ut(X) : Q = x(C).results[X - 1].tally[w], nt.push(`${st} has ${Q} votes at round ${X}.`));
      const Et = x(C).results[rt - 1].tallyResults, Je = I(rt);
      for (let ne = 0; ne < Et.length; ne++) {
        const dn = Et[ne].transfers, De = Et[ne].eliminated, j = Et[ne].elected;
        if (!Je) {
          if (De)
            De === w && nt.push(`${st} will be eliminated on round ${rt}.`);
          else if (w === j && (nt.push(`${st} ${x(h).event} on round ${rt}.`), dn))
            for (let [Wt, Qe] of Object.entries(dn))
              nt.push(`${Qe} ${B(Number(Qe), rt < X)} transferred to ${Wt} on round ${rt}.`);
        }
        const ge = De || j;
        if (ge) {
          const Wt = Number(dn[w]);
          Wt && nt.push(`${Wt} ${B(Wt, rt < X)} transferred from ${ge} on round ${rt}.`);
        }
      }
    }
    return [nt, st];
  }
  function _t() {
    let w = 0;
    for (let X = 1; X <= x(C).results.length; X++) {
      if (I(X)) continue;
      const nt = x(C).results[X - 1].tallyResults;
      for (let st = 0; st < nt.length; st++)
        nt[st].elected && w++;
    }
    return w;
  }
  const ht = ["Eliminate", "Transfer", "Consolidate"];
  let U, S = /* @__PURE__ */ xt(0);
  function I(w) {
    return l() && x(C).results && w === x(C).results.length;
  }
  function q(w) {
    return I(w) ? [] : U ? U.getEliminatedCandidates(w) : [];
  }
  function mt(w) {
    return I(w) ? [] : U ? U.getElectedCandidates(w) : [];
  }
  function Ut(w) {
    return U ? U.countExhaustedVotes(w) : 0;
  }
  function tt() {
    U && U.animateOnePhaseFn && U.animateOnePhaseFn();
  }
  function ke() {
    return U ? U.exhaustedLabel : "";
  }
  function de() {
    return U ? U.pieColors : {};
  }
  var ee = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), dt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), dt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (X) => {
    }) {
      s(w), dt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), dt();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), dt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), dt();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), dt();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), dt();
    }
  }, Me = Ed(), Ct = vn(Me), pe = Lt(Ct);
  pe.__click = tt;
  var Tt = Lt(pe, !0);
  It(pe), It(Ct);
  var ve = re(Ct, 4), Pe = Lt(ve), Ze = Lt(Pe), un = Lt(Ze);
  ni(
    Qo(un, {
      get jsonData() {
        return x(C);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: J,
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
        ut($, w, !0);
      },
      get mouseData() {
        return x(R);
      },
      set mouseData(w) {
        ut(R, w, !0);
      },
      get mouseY() {
        return x(E);
      },
      set mouseY(w) {
        ut(E, w, !0);
      },
      get displayPhase() {
        return x(S);
      },
      set displayPhase(w) {
        ut(S, w, !0);
      }
    }),
    (w) => U = w,
    () => U
  ), It(Ze), It(Pe);
  var fn = re(Pe, 2);
  {
    var Hn = (w) => {
      var X = $d(), nt = vn(X), st = Lt(nt);
      It(nt);
      var Q = re(nt, 2), rt = Lt(Q);
      {
        var Et = (j) => {
          var ge = wd(), Wt = re(vn(ge));
          Bi(Wt, 17, () => q(i()), Yi, (Qe, pn, Bn) => {
            var Un = yd(), Fe = vn(Un);
            let Oe;
            var Ie = Lt(Fe, !0);
            It(Fe);
            var _r = re(Fe, 2);
            {
              var mr = (Le) => {
                var _e = Qs(", ");
                se(Le, _e);
              }, yr = /* @__PURE__ */ Wn(() => Bn < q(i()).length - 1);
              xr(_r, (Le) => {
                x(yr) && Le(mr);
              });
            }
            Xn(
              (Le) => {
                Oe = na(Fe, "", Oe, Le), tn(Ie, x(pn));
              },
              [() => ({ color: de()[x(pn)] })]
            ), se(Qe, Un);
          }), se(j, ge);
        }, Je = /* @__PURE__ */ Wn(() => q(i()).length > 0);
        xr(rt, (j) => {
          x(Je) && j(Et);
        });
      }
      var ne = re(rt, 2);
      {
        var dn = (j) => {
          var ge = bd(), Wt = vn(ge), Qe = re(Wt);
          Bi(Qe, 17, () => mt(i()), Yi, (pn, Bn, Un) => {
            var Fe = xd(), Oe = vn(Fe);
            let Ie;
            var _r = Lt(Oe, !0);
            It(Oe);
            var mr = re(Oe, 2);
            {
              var yr = (_e) => {
                var Oi = Qs(", ");
                se(_e, Oi);
              }, Le = /* @__PURE__ */ Wn(() => Un < mt(i()).length - 1);
              xr(mr, (_e) => {
                x(Le) && _e(yr);
              });
            }
            Xn(
              (_e) => {
                Ie = na(Oe, "", Ie, _e), tn(_r, x(Bn));
              },
              [() => ({ color: de()[x(Bn)] })]
            ), se(pn, Fe);
          }), Xn(() => tn(Wt, `${x(h).caption ?? ""}: `)), se(j, ge);
        }, De = /* @__PURE__ */ Wn(() => mt(i()).length > 0);
        xr(ne, (j) => {
          x(De) && j(dn);
        });
      }
      It(Q), Xn((j) => tn(st, `${x(C).config.contest ?? ""}, ${j ?? ""} ${x(h).infinitive ?? ""}, Round ${i() ?? ""}.`), [_t]), se(w, X);
    };
    xr(fn, (w) => {
      f() && w(Hn);
    });
  }
  It(ve);
  var cn = re(ve, 2), hn = Lt(cn), gr = Lt(hn, !0);
  It(hn);
  var Di = re(hn, 2);
  Bi(Di, 17, () => x(b), Yi, (w, X) => {
    var nt = Ad(), st = vn(nt), Q = Lt(st, !0);
    It(st), Zi(2), Xn(() => tn(Q, x(X))), se(w, nt);
  }), It(cn), ni(cn, (w) => ut(v, w), () => x(v));
  var Yn = re(cn, 2), Fi = Lt(Yn);
  return Zi(2), It(Yn), ni(Yn, (w) => ut(g, w), () => x(g)), Xn(
    (w) => {
      tn(Tt, ht[x(S)]), tn(gr, x(m)), tn(Fi, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [ke]
  ), se(t, Me), bs(ee);
}
gu(["click"]);
customElements.define("pie-chart", Eo(
  Cd,
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
