var Gl = Object.defineProperty;
var ha = (e) => {
  throw TypeError(e);
};
var Kl = (e, t, n) => t in e ? Gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => Kl(e, typeof t != "symbol" ? t + "" : t, n), ss = (e, t, n) => t.has(e) || ha("Cannot " + n);
var g = (e, t, n) => (ss(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), L = (e, t, n, r) => (ss(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), we = (e, t, n) => (ss(e, t, "access private method"), n);
var Wa;
typeof window < "u" && ((Wa = window.__svelte ?? (window.__svelte = {})).v ?? (Wa.v = /* @__PURE__ */ new Set())).add("5");
const jl = 1, Jl = 2, ja = 4, Zl = 8, Ql = 16, eu = 1, tu = 4, nu = 8, ru = 16, iu = 1, su = 2, Os = "[", qi = "[!", Is = "]", pr = {}, Ae = Symbol(), Ja = "http://www.w3.org/1999/xhtml", hs = !1;
var Za = Array.isArray, au = Array.prototype.indexOf, vr = Array.prototype.includes, Vi = Array.from, Ei = Object.keys, Ti = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, ou = Object.getOwnPropertyDescriptors, lu = Object.prototype, uu = Array.prototype, Qa = Object.getPrototypeOf, da = Object.isExtensible;
const fu = () => {
};
function cu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function eo() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function hu(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Te = 2, Vr = 4, zi = 8, to = 1 << 24, hn = 16, Et = 32, Tn = 64, no = 128, pt = 512, be = 1024, Re = 2048, At = 4096, rt = 8192, ln = 16384, $r = 32768, gr = 65536, pa = 1 << 17, ro = 1 << 18, Zn = 1 << 19, du = 1 << 20, an = 1 << 25, Gn = 65536, ds = 1 << 21, Fs = 1 << 22, xn = 1 << 23, Fr = Symbol("$state"), io = Symbol("legacy props"), pu = Symbol(""), Mn = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ua;
const vu = ((Ua = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ua.contentType.includes("xml")) ?? !1, Jr = 3, Ar = 8;
function gu(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function _u() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function mu(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function yu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function wu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $u() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Au(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Eu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ru() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Su() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Hi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Cu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Z = !1;
function on(e) {
  Z = e;
}
let U;
function Fe(e) {
  if (e === null)
    throw Hi(), pr;
  return U = e;
}
function Yi() {
  return Fe(/* @__PURE__ */ Ht(U));
}
function Oe(e) {
  if (Z) {
    if (/* @__PURE__ */ Ht(U) !== null)
      throw Hi(), pr;
    U = e;
  }
}
function ps(e = 1) {
  if (Z) {
    for (var t = e, n = U; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n);
    U = n;
  }
}
function Ri(e = !0) {
  for (var t = 0, n = U; ; ) {
    if (n.nodeType === Ar) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Is) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Os || r === qi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n)
    );
    e && n.remove(), n = i;
  }
}
function so(e) {
  if (!e || e.nodeType !== Ar)
    throw Hi(), pr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ao(e) {
  return e === this.v;
}
function Nu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function oo(e) {
  return !Nu(e, this.v);
}
let ku = !1, st = null;
function _r(e) {
  st = e;
}
function Bi(e, t = !1, n) {
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
function Xi(e) {
  var t = (
    /** @type {ComponentContext} */
    st
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Mo(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, st = t.p, e ?? /** @type {T} */
  {};
}
function lo() {
  return !0;
}
let Dn = [];
function uo() {
  var e = Dn;
  Dn = [], cu(e);
}
function bn(e) {
  if (Dn.length === 0 && !Lr) {
    var t = Dn;
    queueMicrotask(() => {
      t === Dn && uo();
    });
  }
  Dn.push(e);
}
function Pu() {
  for (; Dn.length > 0; )
    uo();
}
function fo(e) {
  var t = te;
  if (t === null)
    return W.f |= xn, e;
  if ((t.f & $r) === 0 && (t.f & Vr) === 0)
    throw e;
  mr(e, t);
}
function mr(e, t) {
  for (; t !== null; ) {
    if ((t.f & no) !== 0) {
      if ((t.f & $r) === 0)
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
const Mu = -7169;
function pe(e, t) {
  e.f = e.f & Mu | t;
}
function Ls(e) {
  (e.f & pt) !== 0 || e.deps === null ? pe(e, be) : pe(e, At);
}
function co(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Te) === 0 || (t.f & Gn) === 0 || (t.f ^= Gn, co(
        /** @type {Derived} */
        t.deps
      ));
}
function ho(e, t, n) {
  (e.f & Re) !== 0 ? t.add(e) : (e.f & At) !== 0 && n.add(e), co(e.deps), pe(e, be);
}
const si = /* @__PURE__ */ new Set();
let J = null, Ee = null, Xe = [], Wi = null, vs = !1, Lr = !1;
var or, lr, Ln, ur, Wr, Ur, qn, en, fr, zt, gs, _s, po;
const ta = class ta {
  constructor() {
    H(this, zt);
    he(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    he(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    he(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    H(this, or, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, lr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    H(this, Ln, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    H(this, ur, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, Wr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, Ur, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, qn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    H(this, en, /* @__PURE__ */ new Map());
    he(this, "is_fork", !1);
    H(this, fr, !1);
  }
  is_deferred() {
    return this.is_fork || g(this, ur) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    g(this, en).has(t) || g(this, en).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = g(this, en).get(t);
    if (n) {
      g(this, en).delete(t);
      for (var r of n.d)
        pe(r, Re), bt(r);
      for (r of n.m)
        pe(r, At), bt(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Xe = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      we(this, zt, gs).call(this, s, n, r);
    if (this.is_deferred()) {
      we(this, zt, _s).call(this, r), we(this, zt, _s).call(this, n);
      for (const [s, a] of g(this, en))
        mo(s, a);
    } else {
      for (const s of g(this, or)) s();
      g(this, or).clear(), g(this, Ln) === 0 && we(this, zt, po).call(this), J = null, va(r), va(n), (i = g(this, Wr)) == null || i.resolve();
    }
    Ee = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Ae && !this.previous.has(t) && this.previous.set(t, n), (t.f & xn) === 0 && (this.current.set(t, t.v), Ee == null || Ee.set(t, t.v));
  }
  activate() {
    J = this, this.apply();
  }
  deactivate() {
    J === this && (J = null, Ee = null);
  }
  flush() {
    if (this.activate(), Xe.length > 0) {
      if (vo(), J !== null && J !== this)
        return;
    } else g(this, Ln) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of g(this, lr)) t(this);
    g(this, lr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    L(this, Ln, g(this, Ln) + 1), t && L(this, ur, g(this, ur) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    L(this, Ln, g(this, Ln) - 1), t && L(this, ur, g(this, ur) - 1), !g(this, fr) && (L(this, fr, !0), bn(() => {
      L(this, fr, !1), this.is_deferred() ? Xe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of g(this, Ur))
      g(this, qn).delete(t), pe(t, Re), bt(t);
    for (const t of g(this, qn))
      pe(t, At), bt(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    g(this, or).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    g(this, lr).add(t);
  }
  settled() {
    return (g(this, Wr) ?? L(this, Wr, eo())).promise;
  }
  static ensure() {
    if (J === null) {
      const t = J = new ta();
      si.add(J), Lr || bn(() => {
        J === t && t.flush();
      });
    }
    return J;
  }
  apply() {
  }
};
or = new WeakMap(), lr = new WeakMap(), Ln = new WeakMap(), ur = new WeakMap(), Wr = new WeakMap(), Ur = new WeakMap(), qn = new WeakMap(), en = new WeakMap(), fr = new WeakMap(), zt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
gs = function(t, n, r) {
  t.f ^= be;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Et | Tn)) !== 0, l = o && (a & be) !== 0, u = l || (a & rt) !== 0 || g(this, en).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= be : s !== null && (a & (Vr | zi | to)) !== 0 ? s.b.defer_effect(i) : (a & Vr) !== 0 ? n.push(i) : Zr(i) && ((a & hn) !== 0 && g(this, qn).add(i), wr(i));
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
_s = function(t) {
  for (var n = 0; n < t.length; n += 1)
    ho(t[n], g(this, Ur), g(this, qn));
}, po = function() {
  var i;
  if (si.size > 1) {
    this.previous.clear();
    var t = Ee, n = !0;
    for (const s of si) {
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
        var r = Xe;
        Xe = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          go(f, o, l, u);
        if (Xe.length > 0) {
          J = s, s.apply();
          for (const f of Xe)
            we(i = s, zt, gs).call(i, f, [], []);
          s.deactivate();
        }
        Xe = r;
      }
    }
    J = null, Ee = t;
  }
  this.committed = !0, si.delete(this);
};
let un = ta;
function j(e) {
  var t = Lr;
  Lr = !0;
  try {
    for (var n; ; ) {
      if (Pu(), Xe.length === 0 && (J == null || J.flush(), Xe.length === 0))
        return Wi = null, /** @type {T} */
        n;
      vo();
    }
  } finally {
    Lr = t;
  }
}
function vo() {
  vs = !0;
  var e = null;
  try {
    for (var t = 0; Xe.length > 0; ) {
      var n = un.ensure();
      if (t++ > 1e3) {
        var r, i;
        Du();
      }
      n.process(Xe), $n.clear();
    }
  } finally {
    Xe = [], vs = !1, Wi = null;
  }
}
function Du() {
  try {
    bu();
  } catch (e) {
    mr(e, Wi);
  }
}
let yt = null;
function va(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ln | rt)) === 0 && Zr(r) && (yt = /* @__PURE__ */ new Set(), wr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Io(r), (yt == null ? void 0 : yt.size) > 0)) {
        $n.clear();
        for (const i of yt) {
          if ((i.f & (ln | rt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            yt.has(a) && (yt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ln | rt)) === 0 && wr(l);
          }
        }
        yt.clear();
      }
    }
    yt = null;
  }
}
function go(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Te) !== 0 ? go(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Fs | hn)) !== 0 && (s & Re) === 0 && _o(i, t, r) && (pe(i, Re), bt(
        /** @type {Effect} */
        i
      ));
    }
}
function _o(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (vr.call(t, i))
        return !0;
      if ((i.f & Te) !== 0 && _o(
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
function bt(e) {
  for (var t = Wi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (vs && t === te && (n & hn) !== 0 && (n & ro) === 0)
      return;
    if ((n & (Tn | Et)) !== 0) {
      if ((n & be) === 0) return;
      t.f ^= be;
    }
  }
  Xe.push(t);
}
function mo(e, t) {
  if (!((e.f & Et) !== 0 && (e.f & be) !== 0)) {
    (e.f & Re) !== 0 ? t.d.push(e) : (e.f & At) !== 0 && t.m.push(e), pe(e, be);
    for (var n = e.first; n !== null; )
      mo(n, t), n = n.next;
  }
}
function Ou(e) {
  let t = 0, n = Kn(0), r;
  return () => {
    zs() && (A(n), Hs(() => (t === 0 && (r = Qr(() => e(() => qr(n)))), t += 1, () => {
      bn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, qr(n));
      });
    })));
  };
}
var Iu = gr | Zn | no;
function Fu(e, t, n) {
  new Lu(e, t, n);
}
var tt, Gr, Dt, Vn, Ot, ct, Ye, It, tn, wn, zn, nn, cr, Hn, hr, dr, rn, Fi, ve, yo, wo, ms, di, pi, ys;
class Lu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    H(this, ve);
    /** @type {Boundary | null} */
    he(this, "parent");
    he(this, "is_pending", !1);
    /** @type {TemplateNode} */
    H(this, tt);
    /** @type {TemplateNode | null} */
    H(this, Gr, Z ? U : null);
    /** @type {BoundaryProps} */
    H(this, Dt);
    /** @type {((anchor: Node) => void)} */
    H(this, Vn);
    /** @type {Effect} */
    H(this, Ot);
    /** @type {Effect | null} */
    H(this, ct, null);
    /** @type {Effect | null} */
    H(this, Ye, null);
    /** @type {Effect | null} */
    H(this, It, null);
    /** @type {DocumentFragment | null} */
    H(this, tn, null);
    /** @type {TemplateNode | null} */
    H(this, wn, null);
    H(this, zn, 0);
    H(this, nn, 0);
    H(this, cr, !1);
    H(this, Hn, !1);
    /** @type {Set<Effect>} */
    H(this, hr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, dr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, rn, null);
    H(this, Fi, Ou(() => (L(this, rn, Kn(g(this, zn))), () => {
      L(this, rn, null);
    })));
    L(this, tt, t), L(this, Dt, n), L(this, Vn, r), this.parent = /** @type {Effect} */
    te.b, this.is_pending = !!g(this, Dt).pending, L(this, Ot, Ys(() => {
      if (te.b = this, Z) {
        const s = g(this, Gr);
        Yi(), /** @type {Comment} */
        s.nodeType === Ar && /** @type {Comment} */
        s.data === qi ? we(this, ve, wo).call(this) : (we(this, ve, yo).call(this), g(this, nn) === 0 && (this.is_pending = !1));
      } else {
        var i = we(this, ve, ms).call(this);
        try {
          L(this, ct, dt(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        g(this, nn) > 0 ? we(this, ve, pi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = g(this, wn)) == null || s.remove();
      };
    }, Iu)), Z && L(this, tt, U);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ho(t, g(this, hr), g(this, dr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!g(this, Dt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    we(this, ve, ys).call(this, t), L(this, zn, g(this, zn) + t), !(!g(this, rn) || g(this, cr)) && (L(this, cr, !0), bn(() => {
      L(this, cr, !1), g(this, rn) && yr(g(this, rn), g(this, zn));
    }));
  }
  get_effect_pending() {
    return g(this, Fi).call(this), A(
      /** @type {Source<number>} */
      g(this, rn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = g(this, Dt).onerror;
    let r = g(this, Dt).failed;
    if (g(this, Hn) || !n && !r)
      throw t;
    g(this, ct) && (Le(g(this, ct)), L(this, ct, null)), g(this, Ye) && (Le(g(this, Ye)), L(this, Ye, null)), g(this, It) && (Le(g(this, It)), L(this, It, null)), Z && (Fe(
      /** @type {TemplateNode} */
      g(this, Gr)
    ), ps(), Fe(Ri()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Cu();
        return;
      }
      i = !0, s && Su(), un.ensure(), L(this, zn, 0), g(this, It) !== null && Xn(g(this, It), () => {
        L(this, It, null);
      }), this.is_pending = this.has_pending_snippet(), L(this, ct, we(this, ve, di).call(this, () => (L(this, Hn, !1), dt(() => g(this, Vn).call(this, g(this, tt)))))), g(this, nn) > 0 ? we(this, ve, pi).call(this) : this.is_pending = !1;
    };
    bn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        mr(o, g(this, Ot) && g(this, Ot).parent);
      }
      r && L(this, It, we(this, ve, di).call(this, () => {
        un.ensure(), L(this, Hn, !0);
        try {
          return dt(() => {
            r(
              g(this, tt),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return mr(
            o,
            /** @type {Effect} */
            g(this, Ot).parent
          ), null;
        } finally {
          L(this, Hn, !1);
        }
      }));
    });
  }
}
tt = new WeakMap(), Gr = new WeakMap(), Dt = new WeakMap(), Vn = new WeakMap(), Ot = new WeakMap(), ct = new WeakMap(), Ye = new WeakMap(), It = new WeakMap(), tn = new WeakMap(), wn = new WeakMap(), zn = new WeakMap(), nn = new WeakMap(), cr = new WeakMap(), Hn = new WeakMap(), hr = new WeakMap(), dr = new WeakMap(), rn = new WeakMap(), Fi = new WeakMap(), ve = new WeakSet(), yo = function() {
  try {
    L(this, ct, dt(() => g(this, Vn).call(this, g(this, tt))));
  } catch (t) {
    this.error(t);
  }
}, wo = function() {
  const t = g(this, Dt).pending;
  t && (L(this, Ye, dt(() => t(g(this, tt)))), bn(() => {
    var n = we(this, ve, ms).call(this);
    L(this, ct, we(this, ve, di).call(this, () => (un.ensure(), dt(() => g(this, Vn).call(this, n))))), g(this, nn) > 0 ? we(this, ve, pi).call(this) : (Xn(
      /** @type {Effect} */
      g(this, Ye),
      () => {
        L(this, Ye, null);
      }
    ), this.is_pending = !1);
  }));
}, ms = function() {
  var t = g(this, tt);
  return this.is_pending && (L(this, wn, it()), g(this, tt).before(g(this, wn)), t = g(this, wn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
di = function(t) {
  var n = te, r = W, i = st;
  Vt(g(this, Ot)), gt(g(this, Ot)), _r(g(this, Ot).ctx);
  try {
    return t();
  } catch (s) {
    return fo(s), null;
  } finally {
    Vt(n), gt(r), _r(i);
  }
}, pi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    g(this, Dt).pending
  );
  g(this, ct) !== null && (L(this, tn, document.createDocumentFragment()), g(this, tn).append(
    /** @type {TemplateNode} */
    g(this, wn)
  ), qo(g(this, ct), g(this, tn))), g(this, Ye) === null && L(this, Ye, dt(() => t(g(this, tt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ys = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && we(n = this.parent, ve, ys).call(n, t);
    return;
  }
  if (L(this, nn, g(this, nn) + t), g(this, nn) === 0) {
    this.is_pending = !1;
    for (const r of g(this, hr))
      pe(r, Re), bt(r);
    for (const r of g(this, dr))
      pe(r, At), bt(r);
    g(this, hr).clear(), g(this, dr).clear(), g(this, Ye) && Xn(g(this, Ye), () => {
      L(this, Ye, null);
    }), g(this, tn) && (g(this, tt).before(g(this, tn)), L(this, tn, null));
  }
};
function qu(e, t, n, r) {
  const i = Ui;
  var s = e.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = J, o = (
    /** @type {Effect} */
    te
  ), l = Vu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    l();
    try {
      r(h);
    } catch (p) {
      (o.f & ln) === 0 && mr(p, o);
    }
    a == null || a.deactivate(), ws();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ zu(h))).then((h) => f([...t.map(i), ...h])).catch((h) => mr(h, o));
  }
  u ? u.then(d) : d();
}
function Vu() {
  var e = te, t = W, n = st, r = J;
  return function(s = !0) {
    Vt(e), gt(t), _r(n), s && (r == null || r.activate());
  };
}
function ws() {
  Vt(null), gt(null), _r(null);
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  var t = Te | Re, n = W !== null && (W.f & Te) !== 0 ? (
    /** @type {Derived} */
    W
  ) : null;
  return te !== null && (te.f |= Zn), {
    ctx: st,
    deps: null,
    effects: null,
    equals: ao,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ae
    ),
    wv: 0,
    parent: n ?? te,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function zu(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    te
  );
  r === null && _u();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Kn(
    /** @type {V} */
    Ae
  ), o = !W, l = /* @__PURE__ */ new Map();
  return Ju(() => {
    var p;
    var u = eo();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === J && f.committed && f.deactivate(), ws();
      });
    } catch (y) {
      u.reject(y), ws();
    }
    var f = (
      /** @type {Batch} */
      J
    );
    if (o) {
      var d = i.is_rendered();
      i.update_pending_count(1), f.increment(d), (p = l.get(f)) == null || p.reject(Mn), l.delete(f), l.set(f, u);
    }
    const h = (y, E = void 0) => {
      if (f.activate(), E)
        E !== Mn && (a.f |= xn, yr(a, E));
      else {
        (a.f & xn) !== 0 && (a.f ^= xn), yr(a, y);
        for (const [_, x] of l) {
          if (l.delete(_), _ === f) break;
          x.reject(Mn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(d));
    };
    u.promise.then(h, (y) => h(null, y || "unknown"));
  }), Gu(() => {
    for (const u of l.values())
      u.reject(Mn);
  }), new Promise((u) => {
    function f(d) {
      function h() {
        d === s ? u(a) : f(s);
      }
      d.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  const t = /* @__PURE__ */ Ui(e);
  return Vo(t), t;
}
// @__NO_SIDE_EFFECTS__
function xo(e) {
  const t = /* @__PURE__ */ Ui(e);
  return t.equals = oo, t;
}
function Hu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Le(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Yu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Te) === 0)
      return (t.f & ln) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function qs(e) {
  var t, n = te;
  Vt(Yu(e));
  try {
    e.f &= ~Gn, Hu(e), t = Bo(e);
  } finally {
    Vt(n);
  }
  return t;
}
function bo(e) {
  var t = qs(e);
  if (!e.equals(t) && (e.wv = Ho(), (!(J != null && J.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    pe(e, be);
    return;
  }
  En || (Ee !== null ? (zs() || J != null && J.is_fork) && Ee.set(e, t) : Ls(e));
}
function Bu(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Mn), r.teardown = fu, r.ac = null, zr(r, 0), Bs(r));
}
function $o(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && wr(t);
}
let xs = /* @__PURE__ */ new Set();
const $n = /* @__PURE__ */ new Map();
let Ao = !1;
function Kn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ao,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  const n = Kn(e);
  return Vo(n), n;
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t = !1, n = !0) {
  const r = Kn(e);
  return t || (r.equals = oo), r;
}
function de(e, t, n = !1) {
  W !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$t || (W.f & pa) !== 0) && lo() && (W.f & (Te | hn | Fs | pa)) !== 0 && (vt === null || !vr.call(vt, e)) && Ru();
  let r = n ? On(t) : t;
  return yr(e, r);
}
function yr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    En ? $n.set(e, t) : $n.set(e, n), e.v = t;
    var r = un.ensure();
    if (r.capture(e, n), (e.f & Te) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Re) !== 0 && qs(i), Ls(i);
    }
    e.wv = Ho(), To(e, Re), te !== null && (te.f & be) !== 0 && (te.f & (Et | Tn)) === 0 && (ft === null ? ef([e]) : ft.push(e)), !r.is_fork && xs.size > 0 && !Ao && Xu();
  }
  return t;
}
function Xu() {
  Ao = !1;
  for (const e of xs)
    (e.f & be) !== 0 && pe(e, At), Zr(e) && wr(e);
  xs.clear();
}
function qr(e) {
  de(e, e.v + 1);
}
function To(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Re) === 0;
      if (o && pe(s, t), (a & Te) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Ee == null || Ee.delete(l), (a & Gn) === 0 && (a & pt && (s.f |= Gn), To(l, At));
      } else o && ((a & hn) !== 0 && yt !== null && yt.add(
        /** @type {Effect} */
        s
      ), bt(
        /** @type {Effect} */
        s
      ));
    }
}
function On(e) {
  if (typeof e != "object" || e === null || Fr in e)
    return e;
  const t = Qa(e);
  if (t !== lu && t !== uu)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Za(e), i = /* @__PURE__ */ xe(0), s = Wn, a = (o) => {
    if (Wn === s)
      return o();
    var l = W, u = Wn;
    gt(null), ma(s);
    var f = o();
    return gt(l), ma(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Eu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var d = /* @__PURE__ */ xe(u.value);
          return n.set(l, d), d;
        }) : de(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ xe(Ae));
            n.set(l, f), qr(i);
          }
        } else
          de(u, Ae), qr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Fr)
          return e;
        var f = n.get(l), d = l in o;
        if (f === void 0 && (!d || (p = Bn(o, l)) != null && p.writable) && (f = a(() => {
          var y = On(d ? o[l] : Ae), E = /* @__PURE__ */ xe(y);
          return E;
        }), n.set(l, f)), f !== void 0) {
          var h = A(f);
          return h === Ae ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = A(f));
        } else if (u === void 0) {
          var d = n.get(l), h = d == null ? void 0 : d.v;
          if (d !== void 0 && h !== Ae)
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
        if (l === Fr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Ae || Reflect.has(o, l);
        if (u !== void 0 || te !== null && (!f || (h = Bn(o, l)) != null && h.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? On(o[l]) : Ae, y = /* @__PURE__ */ xe(p);
            return y;
          }), n.set(l, u));
          var d = A(u);
          if (d === Ae)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var N;
        var d = n.get(l), h = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var y = n.get(p + "");
            y !== void 0 ? de(y, Ae) : p in o && (y = a(() => /* @__PURE__ */ xe(Ae)), n.set(p + "", y));
          }
        if (d === void 0)
          (!h || (N = Bn(o, l)) != null && N.writable) && (d = a(() => /* @__PURE__ */ xe(void 0)), de(d, On(u)), n.set(l, d));
        else {
          h = d.v !== Ae;
          var E = a(() => On(u));
          de(d, E);
        }
        var _ = Reflect.getOwnPropertyDescriptor(o, l);
        if (_ != null && _.set && _.set.call(f, u), !h) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= x.v && de(x, D + 1);
          }
          qr(i);
        }
        return !0;
      },
      ownKeys(o) {
        A(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var h = n.get(d);
          return h === void 0 || h.v !== Ae;
        });
        for (var [u, f] of n)
          f.v !== Ae && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Tu();
      }
    }
  );
}
var ga, Ro, So, Co;
function bs() {
  if (ga === void 0) {
    ga = window, Ro = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    So = Bn(t, "firstChild").get, Co = Bn(t, "nextSibling").get, da(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), da(n) && (n.__t = void 0);
  }
}
function it(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return (
    /** @type {TemplateNode | null} */
    So.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return (
    /** @type {TemplateNode | null} */
    Co.call(e)
  );
}
function He(e, t) {
  if (!Z)
    return /* @__PURE__ */ fn(e);
  var n = /* @__PURE__ */ fn(U);
  if (n === null)
    n = U.appendChild(it());
  else if (t && n.nodeType !== Jr) {
    var r = it();
    return n == null || n.before(r), Fe(r), r;
  }
  return t && Gi(
    /** @type {Text} */
    n
  ), Fe(n), n;
}
function mn(e, t = !1) {
  if (!Z) {
    var n = /* @__PURE__ */ fn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ht(n) : n;
  }
  if (t) {
    if ((U == null ? void 0 : U.nodeType) !== Jr) {
      var r = it();
      return U == null || U.before(r), Fe(r), r;
    }
    Gi(
      /** @type {Text} */
      U
    );
  }
  return U;
}
function Qe(e, t = 1, n = !1) {
  let r = Z ? U : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(r);
  if (!Z)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Jr) {
      var s = it();
      return r === null ? i == null || i.after(s) : r.before(s), Fe(s), s;
    }
    Gi(
      /** @type {Text} */
      r
    );
  }
  return Fe(r), r;
}
function No(e) {
  e.textContent = "";
}
function ko() {
  return !1;
}
function Vs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ja, e, void 0)
  );
}
function Gi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Jr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Po(e) {
  var t = W, n = te;
  gt(null), Vt(null);
  try {
    return e();
  } finally {
    gt(t), Vt(n);
  }
}
function Wu(e) {
  te === null && (W === null && xu(), wu()), En && yu();
}
function Uu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yt(e, t, n) {
  var r = te;
  r !== null && (r.f & rt) !== 0 && (e |= rt);
  var i = {
    ctx: st,
    deps: null,
    nodes: null,
    f: e | Re | pt,
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
      wr(i);
    } catch (o) {
      throw Le(i), o;
    }
  else t !== null && bt(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Zn) === 0 && (s = s.first, (e & hn) !== 0 && (e & gr) !== 0 && s !== null && (s.f |= gr)), s !== null && (s.parent = r, r !== null && Uu(s, r), W !== null && (W.f & Te) !== 0 && (e & Tn) === 0)) {
    var a = (
      /** @type {Derived} */
      W
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function zs() {
  return W !== null && !$t;
}
function Gu(e) {
  const t = Yt(zi, null, !1);
  return pe(t, be), t.teardown = e, t;
}
function Si(e) {
  Wu();
  var t = (
    /** @type {Effect} */
    te.f
  ), n = !W && (t & Et) !== 0 && (t & $r) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Mo(e);
}
function Mo(e) {
  return Yt(Vr | du, e, !1);
}
function Ku(e) {
  un.ensure();
  const t = Yt(Tn | Zn, e, !0);
  return () => {
    Le(t);
  };
}
function ju(e) {
  un.ensure();
  const t = Yt(Tn | Zn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xn(t, () => {
      Le(t), r(void 0);
    }) : (Le(t), r(void 0));
  });
}
function Do(e) {
  return Yt(Vr, e, !1);
}
function Ju(e) {
  return Yt(Fs | Zn, e, !0);
}
function Hs(e, t = 0) {
  return Yt(zi | t, e, !0);
}
function Qt(e, t = [], n = [], r = []) {
  qu(r, t, n, (i) => {
    Yt(zi, () => e(...i.map(A)), !0);
  });
}
function Ys(e, t = 0) {
  var n = Yt(hn | t, e, !0);
  return n;
}
function dt(e) {
  return Yt(Et | Zn, e, !0);
}
function Oo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = En, r = W;
    _a(!0), gt(null);
    try {
      t.call(null);
    } finally {
      _a(n), gt(r);
    }
  }
}
function Bs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Po(() => {
      i.abort(Mn);
    });
    var r = n.next;
    (n.f & Tn) !== 0 ? n.parent = null : Le(n, t), n = r;
  }
}
function Zu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Et) === 0 && Le(t), t = n;
  }
}
function Le(e, t = !0) {
  var n = !1;
  (t || (e.f & ro) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Bs(e, t && !n), zr(e, 0), pe(e, ln);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Oo(e);
  var i = e.parent;
  i !== null && i.first !== null && Io(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Qu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ht(e);
    e.remove(), e = n;
  }
}
function Io(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Xn(e, t, n = !0) {
  var r = [];
  Fo(e, r, !0);
  var i = () => {
    n && Le(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Fo(e, t, n) {
  if ((e.f & rt) === 0) {
    e.f ^= rt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & gr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Et) !== 0 && (e.f & hn) !== 0;
      Fo(i, t, a ? n : !1), i = s;
    }
  }
}
function Xs(e) {
  Lo(e, !0);
}
function Lo(e, t) {
  if ((e.f & rt) !== 0) {
    e.f ^= rt, (e.f & be) === 0 && (pe(e, Re), bt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & gr) !== 0 || (n.f & Et) !== 0;
      Lo(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function qo(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ht(n);
      t.append(n), n = i;
    }
}
let vi = !1, En = !1;
function _a(e) {
  En = e;
}
let W = null, $t = !1;
function gt(e) {
  W = e;
}
let te = null;
function Vt(e) {
  te = e;
}
let vt = null;
function Vo(e) {
  W !== null && (vt === null ? vt = [e] : vt.push(e));
}
let We = null, et = 0, ft = null;
function ef(e) {
  ft = e;
}
let zo = 1, In = 0, Wn = In;
function ma(e) {
  Wn = e;
}
function Ho() {
  return ++zo;
}
function Zr(e) {
  var t = e.f;
  if ((t & Re) !== 0)
    return !0;
  if (t & Te && (e.f &= ~Gn), (t & At) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Zr(
        /** @type {Derived} */
        s
      ) && bo(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & pt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ee === null && pe(e, be);
  }
  return !1;
}
function Yo(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(vt !== null && vr.call(vt, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Te) !== 0 ? Yo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? pe(s, Re) : (s.f & be) !== 0 && pe(s, At), bt(
        /** @type {Effect} */
        s
      ));
    }
}
function Bo(e) {
  var E;
  var t = We, n = et, r = ft, i = W, s = vt, a = st, o = $t, l = Wn, u = e.f;
  We = /** @type {null | Value[]} */
  null, et = 0, ft = null, W = (u & (Et | Tn)) === 0 ? e : null, vt = null, _r(e.ctx), $t = !1, Wn = ++In, e.ac !== null && (Po(() => {
    e.ac.abort(Mn);
  }), e.ac = null);
  try {
    e.f |= ds;
    var f = (
      /** @type {Function} */
      e.fn
    ), d = f();
    e.f |= $r;
    var h = e.deps, p = J == null ? void 0 : J.is_fork;
    if (We !== null) {
      var y;
      if (p || zr(e, et), h !== null && et > 0)
        for (h.length = et + We.length, y = 0; y < We.length; y++)
          h[et + y] = We[y];
      else
        e.deps = h = We;
      if (zs() && (e.f & pt) !== 0)
        for (y = et; y < h.length; y++)
          ((E = h[y]).reactions ?? (E.reactions = [])).push(e);
    } else !p && h !== null && et < h.length && (zr(e, et), h.length = et);
    if (lo() && ft !== null && !$t && h !== null && (e.f & (Te | At | Re)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      ft.length; y++)
        Yo(
          ft[y],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (In++, i.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          i.deps[_].rv = In;
      if (t !== null)
        for (const _ of t)
          _.rv = In;
      ft !== null && (r === null ? r = ft : r.push(.../** @type {Source[]} */
      ft));
    }
    return (e.f & xn) !== 0 && (e.f ^= xn), d;
  } catch (_) {
    return fo(_);
  } finally {
    e.f ^= ds, We = t, et = n, ft = r, W = i, vt = s, _r(a), $t = o, Wn = l;
  }
}
function tf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = au.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !vr.call(We, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & pt) !== 0 && (s.f ^= pt, s.f &= ~Gn), Ls(s), Bu(s), zr(s, 0);
  }
}
function zr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      tf(e, n[r]);
}
function wr(e) {
  var t = e.f;
  if ((t & ln) === 0) {
    pe(e, be);
    var n = te, r = vi;
    te = e, vi = !0;
    try {
      (t & (hn | to)) !== 0 ? Zu(e) : Bs(e), Oo(e);
      var i = Bo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = zo;
      var s;
      hs && ku && (e.f & Re) !== 0 && e.deps;
    } finally {
      vi = r, te = n;
    }
  }
}
function A(e) {
  var t = e.f, n = (t & Te) !== 0;
  if (W !== null && !$t) {
    var r = te !== null && (te.f & ln) !== 0;
    if (!r && (vt === null || !vr.call(vt, e))) {
      var i = W.deps;
      if ((W.f & ds) !== 0)
        e.rv < In && (e.rv = In, We === null && i !== null && i[et] === e ? et++ : We === null ? We = [e] : We.push(e));
      else {
        (W.deps ?? (W.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [W] : vr.call(s, W) || s.push(W);
      }
    }
  }
  if (En && $n.has(e))
    return $n.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (En) {
      var o = a.v;
      return ((a.f & be) === 0 && a.reactions !== null || Wo(a)) && (o = qs(a)), $n.set(a, o), o;
    }
    var l = (a.f & pt) === 0 && !$t && W !== null && (vi || (W.f & pt) !== 0), u = (a.f & $r) === 0;
    Zr(a) && (l && (a.f |= pt), bo(a)), l && !u && ($o(a), Xo(a));
  }
  if (Ee != null && Ee.has(e))
    return Ee.get(e);
  if ((e.f & xn) !== 0)
    throw e.v;
  return e.v;
}
function Xo(e) {
  if (e.f |= pt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Te) !== 0 && (t.f & pt) === 0 && ($o(
        /** @type {Derived} */
        t
      ), Xo(
        /** @type {Derived} */
        t
      ));
}
function Wo(e) {
  if (e.v === Ae) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if ($n.has(t) || (t.f & Te) !== 0 && Wo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Qr(e) {
  var t = $t;
  try {
    return $t = !0, e();
  } finally {
    $t = t;
  }
}
const Uo = /* @__PURE__ */ new Set(), $s = /* @__PURE__ */ new Set();
function nf(e) {
  for (var t = 0; t < e.length; t++)
    Uo.add(e[t]);
  for (var n of $s)
    n(e);
}
let ya = null;
function wa(e) {
  var _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ya = e;
  var a = 0, o = ya === e && e.__root;
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
    Ti(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = W, d = te;
    gt(null), Vt(null);
    try {
      for (var h, p = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var E = s["__" + r];
          E != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && E.call(s, e);
        } catch (x) {
          h ? p.push(x) : h = x;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        s = y;
      }
      if (h) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, gt(f), Vt(d);
    }
  }
}
var Ga, Ka;
const as = (Ka = (Ga = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ga.trustedTypes) == null ? void 0 : /* @__PURE__ */ Ka.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (e) => e
  }
);
function rf(e) {
  return (
    /** @type {string} */
    (as == null ? void 0 : as.createHTML(e)) ?? e
  );
}
function Go(e, t = !1) {
  var n = Vs("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? rf(e) : e, n.content;
}
function An(e, t) {
  var n = (
    /** @type {Effect} */
    te
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  var n = (t & iu) !== 0, r = (t & su) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (Z)
      return An(U, null), U;
    i === void 0 && (i = Go(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(i)));
    var a = (
      /** @type {TemplateNode} */
      r || Ro ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fn(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      An(o, l);
    } else
      An(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function sf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Z)
      return An(U, null), U;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Go(i, !0)
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
    return An(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function af(e, t) {
  return /* @__PURE__ */ sf(e, t, "svg");
}
function xa(e = "") {
  if (!Z) {
    var t = it(e + "");
    return An(t, t), t;
  }
  var n = U;
  return n.nodeType !== Jr ? (n.before(n = it()), Fe(n)) : Gi(
    /** @type {Text} */
    n
  ), An(n, n), n;
}
function Be(e, t) {
  if (Z) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      te
    );
    ((n.f & $r) === 0 || n.nodes.end === null) && (n.nodes.end = U), Yi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const of = ["touchstart", "touchmove"];
function lf(e) {
  return of.includes(e);
}
function yn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ko(e, t) {
  return jo(e, t);
}
function uf(e, t) {
  bs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Z, i = U;
  try {
    for (var s = /* @__PURE__ */ fn(n); s && (s.nodeType !== Ar || /** @type {Comment} */
    s.data !== Os); )
      s = /* @__PURE__ */ Ht(s);
    if (!s)
      throw pr;
    on(!0), Fe(
      /** @type {Comment} */
      s
    );
    const a = jo(e, { ...t, anchor: s });
    return on(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== pr && console.warn("Failed to hydrate: ", a), t.recover === !1 && $u(), bs(), No(n), on(!1), Ko(e, t);
  } finally {
    on(r), Fe(i);
  }
}
const ai = /* @__PURE__ */ new Map();
function jo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  bs();
  var o = /* @__PURE__ */ new Set(), l = (d) => {
    for (var h = 0; h < d.length; h++) {
      var p = d[h];
      if (!o.has(p)) {
        o.add(p);
        var y = lf(p);
        for (const x of [t, document]) {
          var E = ai.get(x);
          E === void 0 && (E = /* @__PURE__ */ new Map(), ai.set(x, E));
          var _ = E.get(p);
          _ === void 0 ? (x.addEventListener(p, wa, { passive: y }), E.set(p, 1)) : E.set(p, _ + 1);
        }
      }
    }
  };
  l(Vi(Uo)), $s.add(l);
  var u = void 0, f = ju(() => {
    var d = n ?? t.appendChild(it());
    return Fu(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Bi({});
        var p = (
          /** @type {ComponentContext} */
          st
        );
        if (s && (p.c = s), i && (r.$$events = i), Z && An(
          /** @type {TemplateNode} */
          h,
          null
        ), u = e(h, r) || {}, Z && (te.nodes.end = U, U === null || U.nodeType !== Ar || /** @type {Comment} */
        U.data !== Is))
          throw Hi(), pr;
        Xi();
      }
    ), () => {
      var E;
      for (var h of o)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ai.get(_)
          ), y = (
            /** @type {number} */
            p.get(h)
          );
          --y == 0 ? (_.removeEventListener(h, wa), p.delete(h), p.size === 0 && ai.delete(_)) : p.set(h, y);
        }
      $s.delete(l), d !== n && ((E = d.parentNode) == null || E.removeChild(d));
    };
  });
  return As.set(u, f), u;
}
let As = /* @__PURE__ */ new WeakMap();
function ff(e, t) {
  const n = As.get(e);
  return n ? (As.delete(e), n(t)) : Promise.resolve();
}
var wt, Ft, nt, Yn, Kr, jr, Li;
class cf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    he(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, wt, /* @__PURE__ */ new Map());
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
    H(this, Yn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, Kr, !0);
    H(this, jr, () => {
      var t = (
        /** @type {Batch} */
        J
      );
      if (g(this, wt).has(t)) {
        var n = (
          /** @type {Key} */
          g(this, wt).get(t)
        ), r = g(this, Ft).get(n);
        if (r)
          Xs(r), g(this, Yn).delete(n);
        else {
          var i = g(this, nt).get(n);
          i && (g(this, Ft).set(n, i.effect), g(this, nt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of g(this, wt)) {
          if (g(this, wt).delete(s), s === t)
            break;
          const o = g(this, nt).get(a);
          o && (Le(o.effect), g(this, nt).delete(a));
        }
        for (const [s, a] of g(this, Ft)) {
          if (s === n || g(this, Yn).has(s)) continue;
          const o = () => {
            if (Array.from(g(this, wt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              qo(a, u), u.append(it()), g(this, nt).set(s, { effect: a, fragment: u });
            } else
              Le(a);
            g(this, Yn).delete(s), g(this, Ft).delete(s);
          };
          g(this, Kr) || !r ? (g(this, Yn).add(s), Xn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, Li, (t) => {
      g(this, wt).delete(t);
      const n = Array.from(g(this, wt).values());
      for (const [r, i] of g(this, nt))
        n.includes(r) || (Le(i.effect), g(this, nt).delete(r));
    });
    this.anchor = t, L(this, Kr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      J
    ), i = ko();
    if (n && !g(this, Ft).has(t) && !g(this, nt).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = it();
        s.append(a), g(this, nt).set(t, {
          effect: dt(() => n(a)),
          fragment: s
        });
      } else
        g(this, Ft).set(
          t,
          dt(() => n(this.anchor))
        );
    if (g(this, wt).set(r, t), i) {
      for (const [o, l] of g(this, Ft))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of g(this, nt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(g(this, jr)), r.ondiscard(g(this, Li));
    } else
      Z && (this.anchor = U), g(this, jr).call(this);
  }
}
wt = new WeakMap(), Ft = new WeakMap(), nt = new WeakMap(), Yn = new WeakMap(), Kr = new WeakMap(), jr = new WeakMap(), Li = new WeakMap();
function hf(e) {
  st === null && gu(), Si(() => {
    const t = Qr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ir(e, t, n = !1) {
  Z && Yi();
  var r = new cf(e), i = n ? gr : 0;
  function s(a, o) {
    if (Z) {
      const f = so(e);
      var l;
      if (f === Os ? l = 0 : f === qi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ri();
        Fe(u), r.anchor = u, on(!1), r.ensure(a, o), on(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ys(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function gi(e, t) {
  return t;
}
function df(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let d = t[o];
    Xn(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Es(Vi(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
      No(f), f.append(u), e.items.clear();
    }
    Es(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Es(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Le(e[n], t);
}
var ba;
function _i(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & ja) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Z ? Fe(/* @__PURE__ */ fn(u)) : u.appendChild(it());
  }
  Z && Yi();
  var f = null, d = /* @__PURE__ */ xo(() => {
    var x = n();
    return Za(x) ? x : x == null ? [] : Vi(x);
  }), h, p = !0;
  function y() {
    _.fallback = f, pf(_, h, a, t, r), f !== null && (h.length === 0 ? (f.f & an) === 0 ? Xs(f) : (f.f ^= an, Mr(f, null, a)) : Xn(f, () => {
      f = null;
    }));
  }
  var E = Ys(() => {
    h = /** @type {V[]} */
    A(d);
    var x = h.length;
    let D = !1;
    if (Z) {
      var N = so(a) === qi;
      N !== (x === 0) && (a = Ri(), Fe(a), on(!1), D = !0);
    }
    for (var O = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      J
    ), K = ko(), V = 0; V < x; V += 1) {
      Z && U.nodeType === Ar && /** @type {Comment} */
      U.data === Is && (a = /** @type {Comment} */
      U, D = !0, on(!1));
      var Q = h[V], B = r(Q, V), G = p ? null : o.get(B);
      G ? (G.v && yr(G.v, Q), G.i && yr(G.i, V), K && I.unskip_effect(G.e)) : (G = vf(
        o,
        p ? a : ba ?? (ba = it()),
        Q,
        B,
        V,
        i,
        t,
        n
      ), p || (G.e.f |= an), o.set(B, G)), O.add(B);
    }
    if (x === 0 && s && !f && (p ? f = dt(() => s(a)) : (f = dt(() => s(ba ?? (ba = it()))), f.f |= an)), x > O.size && mu(), Z && x > 0 && Fe(Ri()), !p)
      if (K) {
        for (const [fe, ie] of o)
          O.has(fe) || I.skip_effect(ie.e);
        I.oncommit(y), I.ondiscard(() => {
        });
      } else
        y();
    D && on(!0), A(d);
  }), _ = { effect: E, items: o, outrogroups: null, fallback: f };
  p = !1, Z && (a = U);
}
function kr(e) {
  for (; e !== null && (e.f & Et) === 0; )
    e = e.next;
  return e;
}
function pf(e, t, n, r, i) {
  var G, fe, ie, M, z, Se, Ge, se, Pe;
  var s = (r & Zl) !== 0, a = t.length, o = e.items, l = kr(e.effect.first), u, f = null, d, h = [], p = [], y, E, _, x;
  if (s)
    for (x = 0; x < a; x += 1)
      y = t[x], E = i(y, x), _ = /** @type {EachItem} */
      o.get(E).e, (_.f & an) === 0 && ((fe = (G = _.nodes) == null ? void 0 : G.a) == null || fe.measure(), (d ?? (d = /* @__PURE__ */ new Set())).add(_));
  for (x = 0; x < a; x += 1) {
    if (y = t[x], E = i(y, x), _ = /** @type {EachItem} */
    o.get(E).e, e.outrogroups !== null)
      for (const ge of e.outrogroups)
        ge.pending.delete(_), ge.done.delete(_);
    if ((_.f & an) !== 0)
      if (_.f ^= an, _ === l)
        Mr(_, null, n);
      else {
        var D = f ? f.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), _n(e, f, _), _n(e, _, D), Mr(_, D, n), f = _, h = [], p = [], l = kr(f.next);
        continue;
      }
    if ((_.f & rt) !== 0 && (Xs(_), s && ((M = (ie = _.nodes) == null ? void 0 : ie.a) == null || M.unfix(), (d ?? (d = /* @__PURE__ */ new Set())).delete(_))), _ !== l) {
      if (u !== void 0 && u.has(_)) {
        if (h.length < p.length) {
          var N = p[0], O;
          f = N.prev;
          var I = h[0], K = h[h.length - 1];
          for (O = 0; O < h.length; O += 1)
            Mr(h[O], N, n);
          for (O = 0; O < p.length; O += 1)
            u.delete(p[O]);
          _n(e, I.prev, K.next), _n(e, f, I), _n(e, K, N), l = N, f = K, x -= 1, h = [], p = [];
        } else
          u.delete(_), Mr(_, l, n), _n(e, _.prev, _.next), _n(e, _, f === null ? e.effect.first : f.next), _n(e, f, _), f = _;
        continue;
      }
      for (h = [], p = []; l !== null && l !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), p.push(l), l = kr(l.next);
      if (l === null)
        continue;
    }
    (_.f & an) === 0 && h.push(_), f = _, l = kr(_.next);
  }
  if (e.outrogroups !== null) {
    for (const ge of e.outrogroups)
      ge.pending.size === 0 && (Es(Vi(ge.done)), (z = e.outrogroups) == null || z.delete(ge));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var V = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & rt) === 0 && V.push(_);
    for (; l !== null; )
      (l.f & rt) === 0 && l !== e.fallback && V.push(l), l = kr(l.next);
    var Q = V.length;
    if (Q > 0) {
      var B = (r & ja) !== 0 && a === 0 ? n : null;
      if (s) {
        for (x = 0; x < Q; x += 1)
          (Ge = (Se = V[x].nodes) == null ? void 0 : Se.a) == null || Ge.measure();
        for (x = 0; x < Q; x += 1)
          (Pe = (se = V[x].nodes) == null ? void 0 : se.a) == null || Pe.fix();
      }
      df(e, V, B);
    }
  }
  s && bn(() => {
    var ge, _e;
    if (d !== void 0)
      for (_ of d)
        (_e = (ge = _.nodes) == null ? void 0 : ge.a) == null || _e.apply();
  });
}
function vf(e, t, n, r, i, s, a, o) {
  var l = (a & jl) !== 0 ? (a & Ql) === 0 ? /* @__PURE__ */ Eo(n, !1, !1) : Kn(n) : null, u = (a & Jl) !== 0 ? Kn(i) : null;
  return {
    v: l,
    i: u,
    e: dt(() => (s(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Mr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & an) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function _n(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ws(e, t) {
  Do(() => {
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
      const i = Vs("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const $a = [...` 	
\r\f \v\uFEFF`];
function gf(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || $a.includes(r[a - 1])) && (o === r.length || $a.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Aa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function _f(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += Aa(r)), i && (n += Aa(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function oi(e, t, n, r, i, s) {
  var a = e.__className;
  if (Z || a !== n || a === void 0) {
    var o = gf(n, r, s);
    (!Z || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function os(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function Ea(e, t, n, r) {
  var i = e.__style;
  if (Z || i !== t) {
    var s = _f(t, r);
    (!Z || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (os(e, n == null ? void 0 : n[0], r[0]), os(e, n == null ? void 0 : n[1], r[1], "important")) : os(e, n, r));
  return r;
}
const mf = Symbol("is custom element"), yf = Symbol("is html"), wf = vu ? "link" : "LINK";
function Ta(e, t, n, r) {
  var i = xf(e);
  Z && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === wf) || i[t] !== (i[t] = n) && (t === "loading" && (e[pu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && bf(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xf(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [mf]: e.nodeName.includes("-"),
      [yf]: e.namespaceURI === Ja
    })
  );
}
var Ra = /* @__PURE__ */ new Map();
function bf(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ra.get(t);
  if (n) return n;
  Ra.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = ou(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Qa(i);
  }
  return n;
}
function Sa(e, t) {
  return e === t || (e == null ? void 0 : e[Fr]) === t;
}
function mi(e = {}, t, n, r) {
  return Do(() => {
    var i, s;
    return Hs(() => {
      i = s, s = [], Qr(() => {
        e !== n(...s) && (t(e, ...s), i && Sa(n(...i), e) && t(null, ...i));
      });
    }), () => {
      bn(() => {
        s && Sa(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let li = !1;
function $f(e) {
  var t = li;
  try {
    return li = !1, [e(), li];
  } finally {
    li = t;
  }
}
function ee(e, t, n, r) {
  var D;
  var i = (n & nu) !== 0, s = (n & ru) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Qr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Fr in e || io in e;
    u = ((D = Bn(e, t)) == null ? void 0 : D.set) ?? (f && t in e ? (N) => e[t] = N : void 0);
  }
  var d, h = !1;
  i ? [d, h] = $f(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && r !== void 0 && (d = l(), u && (Au(), u(d)));
  var p;
  if (p = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? l() : (o = !0, N);
  }, (n & tu) === 0)
    return p;
  if (u) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(N, O) {
        return arguments.length > 0 ? ((!O || y || h) && u(O ? p() : N), N) : p();
      })
    );
  }
  var E = !1, _ = ((n & eu) !== 0 ? Ui : xo)(() => (E = !1, p()));
  i && A(_);
  var x = (
    /** @type {Effect} */
    te
  );
  return (
    /** @type {() => V} */
    (function(N, O) {
      if (arguments.length > 0) {
        const I = O ? A(_) : i ? On(N) : N;
        return de(_, I), E = !0, a !== void 0 && (a = I), N;
      }
      return En && E || (x.f & ln) !== 0 ? _.v : A(_);
    })
  );
}
function Af(e) {
  return new Ef(e);
}
var sn, ht;
class Ef {
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
      var l = /* @__PURE__ */ Eo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return A(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === io ? !0 : (A(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return de(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    L(this, ht, (t.hydrate ? uf : Ko)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && j(), L(this, sn, i.$$events);
    for (const a of Object.keys(g(this, ht)))
      a === "$set" || a === "$destroy" || a === "$on" || Ti(this, a, {
        get() {
          return g(this, ht)[a];
        },
        /** @param {any} value */
        set(o) {
          g(this, ht)[a] = o;
        },
        enumerable: !0
      });
    g(this, ht).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, g(this, ht).$destroy = () => {
      ff(g(this, ht));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    g(this, ht).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    g(this, sn)[t] = g(this, sn)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return g(this, sn)[t].push(r), () => {
      g(this, sn)[t] = g(this, sn)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    g(this, ht).$destroy();
  }
}
sn = new WeakMap(), ht = new WeakMap();
let Jo;
typeof HTMLElement == "function" && (Jo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    he(this, "$$shadowRoot", null);
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
          const o = Vs("slot");
          s !== "default" && (o.name = s), Be(a, o);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Tf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = yi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Af({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ku(() => {
        Hs(() => {
          var s;
          this.$$r = !0;
          for (const a of Ei(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = yi(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = yi(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Ei(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function yi(e, t, n, r) {
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
function Tf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Us(e, t, n, r, i, s) {
  let a = class extends Jo {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ei(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ei(t).forEach((o) => {
    Ti(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var d;
        l = yi(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (d = Bn(u, o)) == null ? void 0 : d.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Ti(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var Rf = { value: () => {
} };
function Zo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new wi(n);
}
function wi(e) {
  this._ = e;
}
function Sf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
wi.prototype = Zo.prototype = {
  constructor: wi,
  on: function(e, t) {
    var n = this._, r = Sf(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = Cf(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (i = (e = r[s]).type) n[i] = Ca(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Ca(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new wi(e);
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
function Cf(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Ca(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = Rf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ts = "http://www.w3.org/1999/xhtml";
const Na = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ts,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ki(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Na.hasOwnProperty(t) ? { space: Na[t], local: e } : e;
}
function Nf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ts && t.documentElement.namespaceURI === Ts ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function kf(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Qo(e) {
  var t = Ki(e);
  return (t.local ? kf : Nf)(t);
}
function Pf() {
}
function Gs(e) {
  return e == null ? Pf : function() {
    return this.querySelector(e);
  };
}
function Mf(e) {
  typeof e != "function" && (e = Gs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new at(r, this._parents);
}
function Df(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Of() {
  return [];
}
function el(e) {
  return e == null ? Of : function() {
    return this.querySelectorAll(e);
  };
}
function If(e) {
  return function() {
    return Df(e.apply(this, arguments));
  };
}
function Ff(e) {
  typeof e == "function" ? e = If(e) : e = el(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new at(r, i);
}
function tl(e) {
  return function() {
    return this.matches(e);
  };
}
function nl(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Lf = Array.prototype.find;
function qf(e) {
  return function() {
    return Lf.call(this.children, e);
  };
}
function Vf() {
  return this.firstElementChild;
}
function zf(e) {
  return this.select(e == null ? Vf : qf(typeof e == "function" ? e : nl(e)));
}
var Hf = Array.prototype.filter;
function Yf() {
  return Array.from(this.children);
}
function Bf(e) {
  return function() {
    return Hf.call(this.children, e);
  };
}
function Xf(e) {
  return this.selectAll(e == null ? Yf : Bf(typeof e == "function" ? e : nl(e)));
}
function Wf(e) {
  typeof e != "function" && (e = tl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new at(r, this._parents);
}
function rl(e) {
  return new Array(e.length);
}
function Uf() {
  return new at(this._enter || this._groups.map(rl), this._parents);
}
function Ci(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ci.prototype = {
  constructor: Ci,
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
function Gf(e) {
  return function() {
    return e;
  };
}
function Kf(e, t, n, r, i, s) {
  for (var a = 0, o, l = t.length, u = s.length; a < u; ++a)
    (o = t[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ci(e, s[a]);
  for (; a < l; ++a)
    (o = t[a]) && (i[a] = o);
}
function jf(e, t, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, d = s.length, h = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (h[o] = p = a.call(l, l.__data__, o, t) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < d; ++o)
    p = a.call(e, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new Ci(e, s[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(h[o]) === l && (i[o] = l);
}
function Jf(e) {
  return e.__data__;
}
function Zf(e, t) {
  if (!arguments.length) return Array.from(this, Jf);
  var n = t ? jf : Kf, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Gf(e));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], d = i[u], h = d.length, p = Qf(e.call(f, f && f.__data__, u, r)), y = p.length, E = o[u] = new Array(y), _ = a[u] = new Array(y), x = l[u] = new Array(h);
    n(f, d, E, _, x, p, t);
    for (var D = 0, N = 0, O, I; D < y; ++D)
      if (O = E[D]) {
        for (D >= N && (N = D + 1); !(I = _[N]) && ++N < y; ) ;
        O._next = I || null;
      }
  }
  return a = new at(a, r), a._enter = o, a._exit = l, a;
}
function Qf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ec() {
  return new at(this._exit || this._groups.map(rl), this._parents);
}
function tc(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function nc(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], d = u.length, h = o[l] = new Array(d), p, y = 0; y < d; ++y)
      (p = u[y] || f[y]) && (h[y] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new at(o, this._parents);
}
function rc() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function ic(e) {
  e || (e = sc);
  function t(d, h) {
    return d && h ? e(d.__data__, h.__data__) : !d - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(t);
  }
  return new at(i, this._parents).order();
}
function sc(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ac() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function oc() {
  return Array.from(this);
}
function lc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function uc() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function fc() {
  return !this.node();
}
function cc(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && e.call(o, o.__data__, s, i);
  return this;
}
function hc(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function dc(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pc(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function vc(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function gc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function _c(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function mc(e, t) {
  var n = Ki(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? dc : hc : typeof t == "function" ? n.local ? _c : gc : n.local ? vc : pc)(n, t));
}
function il(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function yc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function xc(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function bc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? yc : typeof t == "function" ? xc : wc)(e, t, n ?? "")) : xr(this.node(), e);
}
function xr(e, t) {
  return e.style.getPropertyValue(t) || il(e).getComputedStyle(e, null).getPropertyValue(t);
}
function $c(e) {
  return function() {
    delete this[e];
  };
}
function Ac(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ec(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Tc(e, t) {
  return arguments.length > 1 ? this.each((t == null ? $c : typeof t == "function" ? Ec : Ac)(e, t)) : this.node()[e];
}
function sl(e) {
  return e.trim().split(/^|\s+/);
}
function Ks(e) {
  return e.classList || new al(e);
}
function al(e) {
  this._node = e, this._names = sl(e.getAttribute("class") || "");
}
al.prototype = {
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
function ol(e, t) {
  for (var n = Ks(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function ll(e, t) {
  for (var n = Ks(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function Rc(e) {
  return function() {
    ol(this, e);
  };
}
function Sc(e) {
  return function() {
    ll(this, e);
  };
}
function Cc(e, t) {
  return function() {
    (t.apply(this, arguments) ? ol : ll)(this, e);
  };
}
function Nc(e, t) {
  var n = sl(e + "");
  if (arguments.length < 2) {
    for (var r = Ks(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Cc : t ? Rc : Sc)(n, t));
}
function kc() {
  this.textContent = "";
}
function Pc(e) {
  return function() {
    this.textContent = e;
  };
}
function Mc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Dc(e) {
  return arguments.length ? this.each(e == null ? kc : (typeof e == "function" ? Mc : Pc)(e)) : this.node().textContent;
}
function Oc() {
  this.innerHTML = "";
}
function Ic(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Fc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Lc(e) {
  return arguments.length ? this.each(e == null ? Oc : (typeof e == "function" ? Fc : Ic)(e)) : this.node().innerHTML;
}
function qc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Vc() {
  return this.each(qc);
}
function zc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Hc() {
  return this.each(zc);
}
function Yc(e) {
  var t = typeof e == "function" ? e : Qo(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Bc() {
  return null;
}
function Xc(e, t) {
  var n = typeof e == "function" ? e : Qo(e), r = t == null ? Bc : typeof t == "function" ? t : Gs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Wc() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Uc() {
  return this.each(Wc);
}
function Gc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Kc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jc(e) {
  return this.select(e ? Kc : Gc);
}
function Jc(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Zc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Qc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function eh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function th(e, t, n) {
  return function() {
    var r = this.__on, i, s = Zc(t);
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
function nh(e, t, n) {
  var r = Qc(e + ""), i, s = r.length, a;
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
  for (o = t ? th : eh, i = 0; i < s; ++i) this.each(o(r[i], t, n));
  return this;
}
function ul(e, t, n) {
  var r = il(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function rh(e, t) {
  return function() {
    return ul(this, e, t);
  };
}
function ih(e, t) {
  return function() {
    return ul(this, e, t.apply(this, arguments));
  };
}
function sh(e, t) {
  return this.each((typeof t == "function" ? ih : rh)(e, t));
}
function* ah() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var fl = [null];
function at(e, t) {
  this._groups = e, this._parents = t;
}
function Er() {
  return new at([[document.documentElement]], fl);
}
function oh() {
  return this;
}
at.prototype = Er.prototype = {
  constructor: at,
  select: Mf,
  selectAll: Ff,
  selectChild: zf,
  selectChildren: Xf,
  filter: Wf,
  data: Zf,
  enter: Uf,
  exit: ec,
  join: tc,
  merge: nc,
  selection: oh,
  order: rc,
  sort: ic,
  call: ac,
  nodes: oc,
  node: lc,
  size: uc,
  empty: fc,
  each: cc,
  attr: mc,
  style: bc,
  property: Tc,
  classed: Nc,
  text: Dc,
  html: Lc,
  raise: Vc,
  lower: Hc,
  append: Yc,
  insert: Xc,
  remove: Uc,
  clone: jc,
  datum: Jc,
  on: nh,
  dispatch: sh,
  [Symbol.iterator]: ah
};
function ue(e) {
  return typeof e == "string" ? new at([[document.querySelector(e)]], [document.documentElement]) : new at([[e]], fl);
}
function js(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function cl(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ei() {
}
var Hr = 0.7, Ni = 1 / Hr, ar = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", lh = /^#([0-9a-f]{3,8})$/, uh = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), fh = new RegExp(`^rgb\\(${qt},${qt},${qt}\\)$`), ch = new RegExp(`^rgba\\(${ar},${ar},${ar},${Yr}\\)$`), hh = new RegExp(`^rgba\\(${qt},${qt},${qt},${Yr}\\)$`), dh = new RegExp(`^hsl\\(${Yr},${qt},${qt}\\)$`), ph = new RegExp(`^hsla\\(${Yr},${qt},${qt},${Yr}\\)$`), ka = {
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
js(ei, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pa,
  // Deprecated! Use color.formatHex.
  formatHex: Pa,
  formatHex8: vh,
  formatHsl: gh,
  formatRgb: Ma,
  toString: Ma
});
function Pa() {
  return this.rgb().formatHex();
}
function vh() {
  return this.rgb().formatHex8();
}
function gh() {
  return hl(this).formatHsl();
}
function Ma() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = lh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Da(t) : n === 3 ? new Ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ui(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ui(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uh.exec(e)) ? new Ue(t[1], t[2], t[3], 1) : (t = fh.exec(e)) ? new Ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ch.exec(e)) ? ui(t[1], t[2], t[3], t[4]) : (t = hh.exec(e)) ? ui(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = dh.exec(e)) ? Fa(t[1], t[2] / 100, t[3] / 100, 1) : (t = ph.exec(e)) ? Fa(t[1], t[2] / 100, t[3] / 100, t[4]) : ka.hasOwnProperty(e) ? Da(ka[e]) : e === "transparent" ? new Ue(NaN, NaN, NaN, 0) : null;
}
function Da(e) {
  return new Ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ui(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ue(e, t, n, r);
}
function _h(e) {
  return e instanceof ei || (e = jn(e)), e ? (e = e.rgb(), new Ue(e.r, e.g, e.b, e.opacity)) : new Ue();
}
function Rs(e, t, n, r) {
  return arguments.length === 1 ? _h(e) : new Ue(e, t, n, r ?? 1);
}
function Ue(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
js(Ue, Rs, cl(ei, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Hr : Math.pow(Hr, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ue(Un(this.r), Un(this.g), Un(this.b), ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Oa,
  // Deprecated! Use color.formatHex.
  formatHex: Oa,
  formatHex8: mh,
  formatRgb: Ia,
  toString: Ia
}));
function Oa() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function mh() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}${Fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ia() {
  const e = ki(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Un(this.r)}, ${Un(this.g)}, ${Un(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ki(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Un(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Fn(e) {
  return e = Un(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xt(e, t, n, r);
}
function hl(e) {
  if (e instanceof xt) return new xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ei || (e = jn(e)), !e) return new xt();
  if (e instanceof xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new xt(a, o, l, e.opacity);
}
function yh(e, t, n, r) {
  return arguments.length === 1 ? hl(e) : new xt(e, t, n, r ?? 1);
}
function xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
js(xt, yh, cl(ei, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Hr : Math.pow(Hr, e), new xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Ue(
      ls(e >= 240 ? e - 240 : e + 120, i, r),
      ls(e, i, r),
      ls(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new xt(La(this.h), fi(this.s), fi(this.l), ki(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ki(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${La(this.h)}, ${fi(this.s) * 100}%, ${fi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function La(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ls(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Js = (e) => () => e;
function wh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function xh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function bh(e) {
  return (e = +e) == 1 ? dl : function(t, n) {
    return n - t ? xh(t, n, e) : Js(isNaN(t) ? n : t);
  };
}
function dl(e, t) {
  var n = t - e;
  return n ? wh(e, n) : Js(isNaN(e) ? t : e);
}
const Pi = (function e(t) {
  var n = bh(t);
  function r(i, s) {
    var a = n((i = Rs(i)).r, (s = Rs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = dl(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function $h(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function Ah(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Eh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Zt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Th(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Lt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Rh(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Zt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, us = new RegExp(Ss.source, "g");
function Sh(e) {
  return function() {
    return e;
  };
}
function Ch(e) {
  return function(t) {
    return e(t) + "";
  };
}
function pl(e, t) {
  var n = Ss.lastIndex = us.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = Ss.exec(e)) && (i = us.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Lt(r, i) })), n = us.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Ch(l[0].x) : Sh(t) : (t = l.length, function(u) {
    for (var f = 0, d; f < t; ++f) o[(d = l[f]).i] = d.x(u);
    return o.join("");
  });
}
function Zt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Js(t) : (n === "number" ? Lt : n === "string" ? (r = jn(t)) ? (t = r, Pi) : pl : t instanceof jn ? Pi : t instanceof Date ? Th : Ah(t) ? $h : Array.isArray(t) ? Eh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rh : Lt)(e, t);
}
var qa = 180 / Math.PI, Cs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vl(e, t, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * qa,
    skewX: Math.atan(l) * qa,
    scaleX: a,
    scaleY: o
  };
}
var ci;
function Nh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Cs : vl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function kh(e) {
  return e == null || (ci || (ci = document.createElementNS("http://www.w3.org/2000/svg", "g")), ci.setAttribute("transform", e), !(e = ci.transform.baseVal.consolidate())) ? Cs : (e = e.matrix, vl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function gl(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, d, h, p, y) {
    if (u !== d || f !== h) {
      var E = p.push("translate(", null, t, null, n);
      y.push({ i: E - 4, x: Lt(u, d) }, { i: E - 2, x: Lt(f, h) });
    } else (d || h) && p.push("translate(" + d + t + h + n);
  }
  function a(u, f, d, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Lt(u, f) })) : f && d.push(i(d) + "rotate(" + f + r);
  }
  function o(u, f, d, h) {
    u !== f ? h.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Lt(u, f) }) : f && d.push(i(d) + "skewX(" + f + r);
  }
  function l(u, f, d, h, p, y) {
    if (u !== d || f !== h) {
      var E = p.push(i(p) + "scale(", null, ",", null, ")");
      y.push({ i: E - 4, x: Lt(u, d) }, { i: E - 2, x: Lt(f, h) });
    } else (d !== 1 || h !== 1) && p.push(i(p) + "scale(" + d + "," + h + ")");
  }
  return function(u, f) {
    var d = [], h = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, d, h), a(u.rotate, f.rotate, d, h), o(u.skewX, f.skewX, d, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, h), u = f = null, function(p) {
      for (var y = -1, E = h.length, _; ++y < E; ) d[(_ = h[y]).i] = _.x(p);
      return d.join("");
    };
  };
}
var Ph = gl(Nh, "px, ", "px)", "deg)"), Mh = gl(kh, ", ", ")", ")"), br = 0, Dr = 0, Pr = 0, _l = 1e3, Mi, Or, Di = 0, Jn = 0, ji = 0, Br = typeof performance == "object" && performance.now ? performance : Date, ml = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Zs() {
  return Jn || (ml(Dh), Jn = Br.now() + ji);
}
function Dh() {
  Jn = 0;
}
function Oi() {
  this._call = this._time = this._next = null;
}
Oi.prototype = yl.prototype = {
  constructor: Oi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Zs() : +n) + (t == null ? 0 : +t), !this._next && Or !== this && (Or ? Or._next = this : Mi = this, Or = this), this._call = e, this._time = n, Ns();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ns());
  }
};
function yl(e, t, n) {
  var r = new Oi();
  return r.restart(e, t, n), r;
}
function Oh() {
  Zs(), ++br;
  for (var e = Mi, t; e; )
    (t = Jn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --br;
}
function Va() {
  Jn = (Di = Br.now()) + ji, br = Dr = 0;
  try {
    Oh();
  } finally {
    br = 0, Fh(), Jn = 0;
  }
}
function Ih() {
  var e = Br.now(), t = e - Di;
  t > _l && (ji -= t, Di = e);
}
function Fh() {
  for (var e, t = Mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Mi = n);
  Or = e, Ns(r);
}
function Ns(e) {
  if (!br) {
    Dr && (Dr = clearTimeout(Dr));
    var t = e - Jn;
    t > 24 ? (e < 1 / 0 && (Dr = setTimeout(Va, e - Br.now() - ji)), Pr && (Pr = clearInterval(Pr))) : (Pr || (Di = Br.now(), Pr = setInterval(Ih, _l)), br = 1, ml(Va));
  }
}
function za(e, t, n) {
  var r = new Oi();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var Lh = Zo("start", "end", "cancel", "interrupt"), qh = [], wl = 0, Ha = 1, ks = 2, xi = 3, Ya = 4, Ps = 5, bi = 6;
function Ji(e, t, n, r, i, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Vh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Lh,
    tween: qh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: wl
  });
}
function Qs(e, t) {
  var n = Tt(e, t);
  if (n.state > wl) throw new Error("too late; already scheduled");
  return n;
}
function Xt(e, t) {
  var n = Tt(e, t);
  if (n.state > xi) throw new Error("too late; already running");
  return n;
}
function Tt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Vh(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = yl(s, 0, n.time);
  function s(u) {
    n.state = Ha, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, d, h, p;
    if (n.state !== Ha) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === xi) return za(a);
        p.state === Ya ? (p.state = bi, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[f]) : +f < t && (p.state = bi, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[f]);
      }
    if (za(function() {
      n.state === xi && (n.state = Ya, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = ks, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ks) {
      for (n.state = xi, i = new Array(h = n.tween.length), f = 0, d = -1; f < h; ++f)
        (p = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ps, 1), d = -1, h = i.length; ++d < h; )
      i[d].call(e, f);
    n.state === Ps && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = bi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function zh(e, t) {
  var n = e.__transition, r, i, s = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > ks && r.state < Ps, r.state = bi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    s && delete e.__transition;
  }
}
function Hh(e) {
  return this.each(function() {
    zh(this, e);
  });
}
function Yh(e, t) {
  var n, r;
  return function() {
    var i = Xt(this, e), s = i.tween;
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
function Bh(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Xt(this, e), a = s.tween;
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
function Xh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Tt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Yh : Bh)(n, e, t));
}
function ea(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Xt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Tt(i, r).value[t];
  };
}
function xl(e, t) {
  var n;
  return (typeof t == "number" ? Lt : t instanceof jn ? Pi : (n = jn(t)) ? (t = n, Pi) : pl)(e, t);
}
function Wh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Uh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Gh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Kh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function jh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Jh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Zh(e, t) {
  var n = Ki(e), r = n === "transform" ? Mh : xl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Jh : jh)(n, r, ea(this, "attr." + e, t)) : t == null ? (n.local ? Uh : Wh)(n) : (n.local ? Kh : Gh)(n, r, t));
}
function Qh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ed(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function td(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && ed(e, s)), n;
  }
  return i._value = t, i;
}
function nd(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Qh(e, s)), n;
  }
  return i._value = t, i;
}
function rd(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ki(e);
  return this.tween(n, (r.local ? td : nd)(r, t));
}
function id(e, t) {
  return function() {
    Qs(this, e).delay = +t.apply(this, arguments);
  };
}
function sd(e, t) {
  return t = +t, function() {
    Qs(this, e).delay = t;
  };
}
function ad(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? id : sd)(t, e)) : Tt(this.node(), t).delay;
}
function od(e, t) {
  return function() {
    Xt(this, e).duration = +t.apply(this, arguments);
  };
}
function ld(e, t) {
  return t = +t, function() {
    Xt(this, e).duration = t;
  };
}
function ud(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? od : ld)(t, e)) : Tt(this.node(), t).duration;
}
function fd(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Xt(this, e).ease = t;
  };
}
function cd(e) {
  var t = this._id;
  return arguments.length ? this.each(fd(t, e)) : Tt(this.node(), t).ease;
}
function hd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Xt(this, e).ease = n;
  };
}
function dd(e) {
  if (typeof e != "function") throw new Error();
  return this.each(hd(this._id, e));
}
function pd(e) {
  typeof e != "function" && (e = tl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new cn(r, this._parents, this._name, this._id);
}
function vd(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, d = a[o] = new Array(f), h, p = 0; p < f; ++p)
      (h = l[p] || u[p]) && (d[p] = h);
  for (; o < r; ++o)
    a[o] = t[o];
  return new cn(a, this._parents, this._name, this._id);
}
function gd(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function _d(e, t, n) {
  var r, i, s = gd(t) ? Qs : Xt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function md(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Tt(this.node(), n).on.on(e) : this.each(_d(n, e, t));
}
function yd(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function wd() {
  return this.on("end.remove", yd(this._id));
}
function xd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Gs(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = o[h]) && (d = e.call(f, f.__data__, h, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d, Ji(u[h], t, n, h, u, Tt(f, n)));
  return new cn(s, this._parents, t, n);
}
function bd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = el(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var h = e.call(f, f.__data__, d, l), p, y = Tt(f, n), E = 0, _ = h.length; E < _; ++E)
          (p = h[E]) && Ji(p, t, n, E, h, y);
        s.push(h), a.push(f);
      }
  return new cn(s, a, t, n);
}
var $d = Er.prototype.constructor;
function Ad() {
  return new $d(this._groups, this._parents);
}
function Ed(e, t) {
  var n, r, i;
  return function() {
    var s = xr(this, e), a = (this.style.removeProperty(e), xr(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function bl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Td(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = xr(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Rd(e, t, n) {
  var r, i, s;
  return function() {
    var a = xr(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), xr(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function Sd(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Xt(this, e), u = l.on, f = l.value[s] == null ? o || (o = bl(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Cd(e, t, n) {
  var r = (e += "") == "transform" ? Ph : xl;
  return t == null ? this.styleTween(e, Ed(e, r)).on("end.style." + e, bl(e)) : typeof t == "function" ? this.styleTween(e, Rd(e, r, ea(this, "style." + e, t))).each(Sd(this._id, e)) : this.styleTween(e, Td(e, r, t), n).on("end.style." + e, null);
}
function Nd(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function kd(e, t, n) {
  var r, i;
  function s() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Nd(e, a, n)), r;
  }
  return s._value = t, s;
}
function Pd(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, kd(e, t, n ?? ""));
}
function Md(e) {
  return function() {
    this.textContent = e;
  };
}
function Dd(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Od(e) {
  return this.tween("text", typeof e == "function" ? Dd(ea(this, "text", e)) : Md(e == null ? "" : e + ""));
}
function Id(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Fd(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Id(i)), t;
  }
  return r._value = e, r;
}
function Ld(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Fd(e));
}
function qd() {
  for (var e = this._name, t = this._id, n = $l(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Tt(l, t);
        Ji(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new cn(r, this._parents, e, n);
}
function Vd() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Xt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), i === 0 && s();
  });
}
var zd = 0;
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function $i(e) {
  return Er().transition(e);
}
function $l() {
  return ++zd;
}
var Jt = Er.prototype;
cn.prototype = $i.prototype = {
  constructor: cn,
  select: xd,
  selectAll: bd,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: pd,
  merge: vd,
  selection: Ad,
  transition: qd,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: md,
  attr: Zh,
  attrTween: rd,
  style: Cd,
  styleTween: Pd,
  text: Od,
  textTween: Ld,
  remove: wd,
  tween: Xh,
  delay: ad,
  duration: ud,
  ease: cd,
  easeVarying: dd,
  end: Vd,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function Hd(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Yd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hd
};
function Bd(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Xd(e) {
  var t, n;
  e instanceof cn ? (t = e._id, e = e._name) : (t = $l(), (n = Yd).time = Zs(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ji(l, e, t, u, a, n || Bd(l, t));
  return new cn(r, this._parents, e, t);
}
Er.prototype.interrupt = Hh;
Er.prototype.transition = Xd;
const Ms = Math.PI, Ds = 2 * Ms, Pn = 1e-6, Wd = Ds - Pn;
function Al(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Ud(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Al;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Gd {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Al : Ud(t);
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
    let a = this._x1, o = this._y1, l = r - t, u = i - n, f = a - t, d = o - n, h = f * f + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > Pn) if (!(Math.abs(d * l - u * f) > Pn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = r - a, y = i - o, E = l * l + u * u, _ = p * p + y * y, x = Math.sqrt(E), D = Math.sqrt(h), N = s * Math.tan((Ms - Math.acos((E + h - _) / (2 * x * D))) / 2), O = N / D, I = N / x;
      Math.abs(O - 1) > Pn && this._append`L${t + O * f},${n + O * d}`, this._append`A${s},${s},0,0,${+(d * p > f * y)},${this._x1 = t + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, d = 1 ^ a, h = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Pn || Math.abs(this._y1 - f) > Pn) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Ds + Ds), h > Wd ? this._append`A${r},${r},0,1,${d},${t - o},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = f}` : h > Pn && this._append`A${r},${r},0,${+(h >= Ms)},${d},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Kd(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; ) n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const jd = Kd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Ie(e) {
  return function() {
    return e;
  };
}
const Ba = Math.abs, ke = Math.atan2, kn = Math.cos, Jd = Math.max, fs = Math.min, Mt = Math.sin, sr = Math.sqrt, ze = 1e-12, Xr = Math.PI, Ii = Xr / 2, Ai = 2 * Xr;
function Zd(e) {
  return e > 1 ? 0 : e < -1 ? Xr : Math.acos(e);
}
function Xa(e) {
  return e >= 1 ? Ii : e <= -1 ? -Ii : Math.asin(e);
}
function Qd(e) {
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
  }, () => new Gd(t);
}
function ep(e) {
  return e.innerRadius;
}
function tp(e) {
  return e.outerRadius;
}
function np(e) {
  return e.startAngle;
}
function rp(e) {
  return e.endAngle;
}
function ip(e) {
  return e && e.padAngle;
}
function sp(e, t, n, r, i, s, a, o) {
  var l = n - e, u = r - t, f = a - i, d = o - s, h = d * l - f * u;
  if (!(h * h < ze))
    return h = (f * (t - s) - d * (e - i)) / h, [e + h * l, t + h * u];
}
function hi(e, t, n, r, i, s, a) {
  var o = e - n, l = t - r, u = (a ? s : -s) / sr(o * o + l * l), f = u * l, d = -u * o, h = e + f, p = t + d, y = n + f, E = r + d, _ = (h + y) / 2, x = (p + E) / 2, D = y - h, N = E - p, O = D * D + N * N, I = i - s, K = h * E - y * p, V = (N < 0 ? -1 : 1) * sr(Jd(0, I * I * O - K * K)), Q = (K * N - D * V) / O, B = (-K * D - N * V) / O, G = (K * N + D * V) / O, fe = (-K * D + N * V) / O, ie = Q - _, M = B - x, z = G - _, Se = fe - x;
  return ie * ie + M * M > z * z + Se * Se && (Q = G, B = fe), {
    cx: Q,
    cy: B,
    x01: -f,
    y01: -d,
    x11: Q * (i / I - 1),
    y11: B * (i / I - 1)
  };
}
function mt() {
  var e = ep, t = tp, n = Ie(0), r = null, i = np, s = rp, a = ip, o = null, l = Qd(u);
  function u() {
    var f, d, h = +e.apply(this, arguments), p = +t.apply(this, arguments), y = i.apply(this, arguments) - Ii, E = s.apply(this, arguments) - Ii, _ = Ba(E - y), x = E > y;
    if (o || (o = f = l()), p < h && (d = p, p = h, h = d), !(p > ze)) o.moveTo(0, 0);
    else if (_ > Ai - ze)
      o.moveTo(p * kn(y), p * Mt(y)), o.arc(0, 0, p, y, E, !x), h > ze && (o.moveTo(h * kn(E), h * Mt(E)), o.arc(0, 0, h, E, y, x));
    else {
      var D = y, N = E, O = y, I = E, K = _, V = _, Q = a.apply(this, arguments) / 2, B = Q > ze && (r ? +r.apply(this, arguments) : sr(h * h + p * p)), G = fs(Ba(p - h) / 2, +n.apply(this, arguments)), fe = G, ie = G, M, z;
      if (B > ze) {
        var Se = Xa(B / h * Mt(Q)), Ge = Xa(B / p * Mt(Q));
        (K -= Se * 2) > ze ? (Se *= x ? 1 : -1, O += Se, I -= Se) : (K = 0, O = I = (y + E) / 2), (V -= Ge * 2) > ze ? (Ge *= x ? 1 : -1, D += Ge, N -= Ge) : (V = 0, D = N = (y + E) / 2);
      }
      var se = p * kn(D), Pe = p * Mt(D), ge = h * kn(I), _e = h * Mt(I);
      if (G > ze) {
        var ot = p * kn(N), Ce = p * Mt(N), Rt = h * kn(O), St = h * Mt(O), Y;
        if (_ < Xr)
          if (Y = sp(se, Pe, Rt, St, ot, Ce, ge, _e)) {
            var Me = se - Y[0], Wt = Pe - Y[1], ae = ot - Y[0], Ut = Ce - Y[1], Rn = 1 / Mt(Zd((Me * ae + Wt * Ut) / (sr(Me * Me + Wt * Wt) * sr(ae * ae + Ut * Ut))) / 2), Gt = sr(Y[0] * Y[0] + Y[1] * Y[1]);
            fe = fs(G, (h - Gt) / (Rn - 1)), ie = fs(G, (p - Gt) / (Rn + 1));
          } else
            fe = ie = 0;
      }
      V > ze ? ie > ze ? (M = hi(Rt, St, se, Pe, p, ie, x), z = hi(ot, Ce, ge, _e, p, ie, x), o.moveTo(M.cx + M.x01, M.cy + M.y01), ie < G ? o.arc(M.cx, M.cy, ie, ke(M.y01, M.x01), ke(z.y01, z.x01), !x) : (o.arc(M.cx, M.cy, ie, ke(M.y01, M.x01), ke(M.y11, M.x11), !x), o.arc(0, 0, p, ke(M.cy + M.y11, M.cx + M.x11), ke(z.cy + z.y11, z.cx + z.x11), !x), o.arc(z.cx, z.cy, ie, ke(z.y11, z.x11), ke(z.y01, z.x01), !x))) : (o.moveTo(se, Pe), o.arc(0, 0, p, D, N, !x)) : o.moveTo(se, Pe), !(h > ze) || !(K > ze) ? o.lineTo(ge, _e) : fe > ze ? (M = hi(ge, _e, ot, Ce, h, -fe, x), z = hi(se, Pe, Rt, St, h, -fe, x), o.lineTo(M.cx + M.x01, M.cy + M.y01), fe < G ? o.arc(M.cx, M.cy, fe, ke(M.y01, M.x01), ke(z.y01, z.x01), !x) : (o.arc(M.cx, M.cy, fe, ke(M.y01, M.x01), ke(M.y11, M.x11), !x), o.arc(0, 0, h, ke(M.cy + M.y11, M.cx + M.x11), ke(z.cy + z.y11, z.cx + z.x11), x), o.arc(z.cx, z.cy, fe, ke(z.y11, z.x11), ke(z.y01, z.x01), !x))) : o.arc(0, 0, h, I, O, x);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Xr / 2;
    return [kn(d) * f, Mt(d) * f];
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
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function ap(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function op(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function lp(e) {
  return e;
}
function cs() {
  var e = lp, t = op, n = null, r = Ie(0), i = Ie(Ai), s = Ie(0);
  function a(o) {
    var l, u = (o = ap(o)).length, f, d, h = 0, p = new Array(u), y = new Array(u), E = +r.apply(this, arguments), _ = Math.min(Ai, Math.max(-Ai, i.apply(this, arguments) - E)), x, D = Math.min(Math.abs(_) / u, s.apply(this, arguments)), N = D * (_ < 0 ? -1 : 1), O;
    for (l = 0; l < u; ++l)
      (O = y[p[l] = l] = +e(o[l], l, o)) > 0 && (h += O);
    for (t != null ? p.sort(function(I, K) {
      return t(y[I], y[K]);
    }) : n != null && p.sort(function(I, K) {
      return n(o[I], o[K]);
    }), l = 0, d = h ? (_ - u * N) / h : 0; l < u; ++l, E = x)
      f = p[l], O = y[f], x = E + (O > 0 ? O * d : 0) + N, y[f] = {
        data: o[f],
        index: l,
        value: O,
        startAngle: E,
        endAngle: x,
        padAngle: D
      };
    return y;
  }
  return a.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(+o), a) : e;
  }, a.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, a) : t;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, t = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Ie(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Ie(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Ie(+o), a) : s;
  }, a;
}
function Ir(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Ir.prototype = {
  constructor: Ir,
  scale: function(e) {
    return e === 1 ? this : new Ir(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ir(this.k, this.x + this.k * e, this.y + this.k * t);
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
Ir.prototype;
var up = /* @__PURE__ */ af('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const fp = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function El(e, t) {
  Bi(t, !0), Ws(e, fp);
  let n = ee(t, "jsonData", 7), r = ee(t, "currentRound", 7, 1), i = ee(t, "mouseEventType", 15), s = ee(t, "mouseData", 15), a = ee(t, "mouseX", 15), o = ee(t, "mouseY", 15), l = ee(t, "requestRoundChange", 7, (c) => {
  }), u = ee(t, "requestSkipToRound", 7, (c) => {
  }), f = ee(t, "candidateColors", 23, () => []), d = ee(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = ee(t, "firstRoundDeterminesPercentages", 7, !1), p = ee(t, "showVotes", 7, !0), y = ee(t, "showPercent", 7, !0), E = ee(t, "randomizeOrder", 7, !1), _ = ee(t, "displayPhase", 15, 0);
  function x(c) {
    return c.isTransfer ? `${c.label}__transfer` : c.transferIndex != null ? `${c.label}__${c.transferIndex}` : c.label;
  }
  const D = 800, N = 800, O = Math.min(D, N) * 0.3, I = D / 2, K = N / 2, V = "Pie", Q = "PieOutline", B = "Donut", G = "TextLayer", fe = "url(#cross-hatch)", ie = 1.15, M = 750, z = 800, Se = "white", Ge = 1, se = "#ff00ff", Pe = 3;
  function ge(c) {
    return "hatch-" + c.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let _e = [], ot = [], Ce = [], Rt = null, St = 0, Y = 0;
  const Me = {}, Wt = "No Further Rankings";
  let ae = /* @__PURE__ */ xe(null);
  function Ut() {
    const c = ue(A(ae));
    c.select("#" + V).remove(), c.select("#" + Q).remove(), c.select("#" + B).remove(), c.select("#" + G).remove();
  }
  function Rn(c) {
    l() && ($e = c, l()(c));
  }
  function Gt(c) {
    var m;
    if (!((m = n()) != null && m.results) || c < 1 || c > n().results.length) return !1;
    const v = n().results[c - 1].tallyResults;
    return v.length > 0 && v.some(($) => Object.keys($.transfers).length > 0);
  }
  function Tr(c) {
    for (let v = c; v < n().results.length; v++)
      if (Gt(v)) return v;
    return n().results.length;
  }
  function Sn(c) {
    Ut(), Ce = Zi(c), _e = sa(c, V, Ce, I, K, 0, Ke()), sa(c, Q, Ce, I, K, 0, Ke(), !1, !1, !0), Cr();
  }
  hf(() => {
    tr(), setTimeout(
      () => {
        Sn(r());
      },
      0
    );
  });
  function Zi(c) {
    const v = kt(c);
    return St = es(1), v;
  }
  function Ke() {
    return O;
  }
  function Rr() {
    return Ke() * 1.41;
  }
  function dn(c) {
    let v = 0;
    for (let m = 1; m < c; m++) {
      const $ = n().results[m - 1].tallyResults;
      for (let b = 0; b < $.length; b++) {
        const T = $[b].transfers;
        if (T) {
          const P = T.exhausted;
          P && (v += Number(P));
        }
      }
    }
    return v;
  }
  function Qn(c, v) {
    if (c === "exhausted") return dn(v);
    {
      const m = n().results[v - 1].tally;
      return Number(m[c]);
    }
  }
  function Qi(c, v) {
    return Qn(c, v).toLocaleString("en-US");
  }
  function ti(c, v) {
    const m = h() ? St : le(v);
    return (Qn(c, v) / m).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function er(c, v) {
    const m = Qi(c, v), $ = w(c) && !h(), b = y() && !$;
    return p() && b ? m + " (" + ti(c, v) + ")" : b ? ti(c, v) : m;
  }
  function es(c) {
    const v = n().results[c - 1].tally;
    let m = 0;
    for (let [$, b] of Object.entries(v))
      m += Number(b);
    return m;
  }
  function w(c) {
    return c === "exhausted" || c === "Inactive Ballots";
  }
  function X(c) {
    return c.toLowerCase() === "residual surplus";
  }
  function le(c) {
    const v = n().results[c - 1].tally;
    let m = 0;
    for (let [$, b] of Object.entries(v))
      !w($) && !X($) && (m += Number(b));
    return m;
  }
  function me(c, v) {
    if (!c || c < 1 || c > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (d() && c === n().results.length)
      return [];
    const m = n().results[c - 1].tallyResults, $ = [];
    for (let b = 0; b < m.length; b++) {
      const T = m[b][v];
      T != null && $.push(T);
    }
    return $;
  }
  function ce(c) {
    return me(c, "eliminated");
  }
  function oe(c) {
    let v = [];
    for (let m = 1; m <= c; m++) v = v.concat(me(m, "elected"));
    return [...new Set(v)];
  }
  function qe(c, v) {
    const m = n().results[v - 1].tallyResults;
    let $ = 0;
    const b = m.findIndex((T) => (T == null ? void 0 : T.elected) && c == T.elected);
    if (b >= 0) {
      const T = m[b].transfers;
      if (T)
        for (let [P, q] of Object.entries(T)) $ += Number(q);
    } else
      return 0;
    return $;
  }
  function Ct(c, v) {
    c.some((m) => w(m.label)) || c.push({ label: "exhausted", value: dn(v) });
  }
  function Nt(c) {
    let v = c | 0;
    return () => {
      v = v + 1831565813 | 0;
      let m = Math.imul(v ^ v >>> 15, 1 | v);
      return m = m + Math.imul(m ^ m >>> 7, 61 | m) ^ m, ((m ^ m >>> 14) >>> 0) / 4294967296;
    };
  }
  function Cn(c) {
    let v = 5381;
    for (let m = 0; m < c.length; m++)
      v = (v << 5) + v + c.charCodeAt(m) | 0;
    return v;
  }
  function pn(c) {
    var b;
    if (c.length <= 3) return c;
    const v = Cn(((b = n().config) == null ? void 0 : b.contest) ?? ""), m = Nt(v), $ = [...c];
    for (let T = $.length - 1; T > 0; T--) {
      const P = Math.floor(m() * (T + 1));
      [$[T], $[P]] = [$[P], $[T]];
    }
    return $;
  }
  function De() {
    const c = Object.keys(n().results[0].tally).filter((b) => !X(b)), v = c.filter((b) => !w(b)), m = c.filter((b) => w(b));
    return [...E() ? pn(v) : v, ...m];
  }
  function kt(c) {
    const v = n().results[c - 1].tally, m = [];
    for (const $ of De())
      $ in v && m.push({ label: $, value: Number(v[$]) });
    return Ct(m, c), m;
  }
  function lt(c) {
    const v = n().results[c - 1].tally, m = [];
    for (const $ of De())
      m.push({ label: $, value: Number(v[$] ?? 0) });
    return Ct(m, c), m;
  }
  function vn(c, v) {
    const m = [];
    for (const $ of c) {
      if ($.label === "exhausted" || $.isTransfer) {
        m.push($);
        continue;
      }
      const b = qe($.label, v);
      b > 0 ? (m.push({
        label: $.label,
        value: b,
        isTransfer: !0
      }), m.push({ ...$, value: $.value - b })) : m.push($);
    }
    return m;
  }
  function tr() {
    const c = ue(A(ae)).select("defs").select("#cross-hatch");
    let v = 0;
    for (let [m, $] of Object.entries(n().results[0].tally)) {
      !f() || f().length === 0 ? v < 10 ? Me[m] = jd[v] : Me[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Me[m] = f()[v % f().length], v++;
      {
        const b = c.clone(!0);
        b.attr("id", ge(m)).select("rect").attr("fill", Me[m]), b.selectAll("circle").attr("fill", "#383838");
      }
    }
    Me.exhausted = fe, Me["Inactive Ballots"] = fe;
  }
  function nr() {
    ue(A(ae)).select("#" + B).remove();
  }
  function Kt(c, v) {
    const m = $i("global").duration(z);
    v && m.on("end", v);
    const $ = vn(Ce, c), T = cs().sort(null).value((P) => P.value)($);
    ua(c, V, T, 0, Ke()), ua(c, Q, T, 0, Ke(), !0), Ce = $, _e = T, nr(), Ml(c), Vl(), Hl(0, Ke()), Cr();
  }
  function je(c, v) {
    const m = $i("global").duration(z);
    v && m.on("end", v), Dl(c);
  }
  function Ve(c, v) {
    const m = $i("global").duration(z);
    v && m.on("end", v), kl(c), Pl(Ke(), Rr());
  }
  let ye = !1, _t = [];
  function Je() {
    Cr(), ye = !1, gn();
  }
  function gn() {
    if (_t.length === 0) {
      $e !== r() && (r() === $e + 1 && $e > 0 && r() <= n().results.length ? ($e = r(), Pt(r())) : r() >= 1 && r() <= n().results.length && ($e = r(), _(0), Sn(r())));
      return;
    }
    const c = _t.shift();
    switch (c.type) {
      case "round": {
        const v = c.round;
        v === $e + 1 && $e > 0 && v <= n().results.length ? ($e = v, Pt(v)) : (v !== $e && v >= 1 && v <= n().results.length && ($e = v, _(0), Sn(v)), gn());
        break;
      }
      case "step":
        ra();
        break;
    }
  }
  function Pt(c) {
    if (c <= 1 || c > n().results.length) {
      gn();
      return;
    }
    ye = !0, Y = c, _(0), Kt(Y - 1, () => {
      _(1), je(Y - 1, () => {
        _(2), Ve(Y, () => {
          _(0), Je();
        });
      });
    });
  }
  function jt() {
    ye || (ye = !0, Y = r(), ni());
  }
  function ni() {
    if (_(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), _t.length > 0) {
      Je();
      return;
    }
    const c = Y < n().results.length - 1 ? ni : () => {
      _(0), Je();
    };
    Kt(Y, () => {
      _(1), je(Y, () => {
        _(2), Y++, Rn(Y), Ve(Y, c);
      });
    });
  }
  Si(() => {
    Sl();
  });
  function Rl() {
    if (!Rt) return;
    ue(A(ae)).select("#" + G).remove();
    const c = Rt;
    ts(c.round, c.pieInfo, c.x, c.y, c.outerRadius, c.eliminated);
  }
  let na = !1;
  Si(() => {
    if (h(), p(), y(), !na) {
      na = !0;
      return;
    }
    ye || Qr(() => Rl());
  });
  let $e = 0;
  function Sl() {
    if ($e != r()) {
      if (ye) {
        _t.push({ type: "round", round: r() });
        return;
      }
      if ($e == r() - 1 && $e > 0)
        if (Gt($e))
          Nl();
        else {
          const c = Tr(r());
          if (u()) {
            $e = c, c < n().results.length ? u()(c + 1) : u()(c);
            return;
          }
        }
      else
        Cl(r());
      $e = r();
    }
  }
  function Cl(c) {
    if (ye) {
      _t.push({ type: "round", round: c });
      return;
    }
    _(0), Sn(c);
  }
  function Nl() {
    if (ye) {
      _t.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (Y = r(), Y > n().results.length) {
      Cr(), ye = !1;
      return;
    }
    ye = !0, _() === 0 ? Kt(Y - 1, () => {
      _(1), je(Y - 1, () => {
        _(2), Ve(Y, () => {
          _(0), Je();
        });
      });
    }) : _() === 1 ? je(Y - 1, () => {
      _(2), Ve(Y, () => {
        _(0), Je();
      });
    }) : _() === 2 && Ve(Y, () => {
      _(0), Je();
    });
  }
  function ra() {
    if (r() > n().results.length) {
      Cr(), ye = !1;
      return;
    }
    if (ye) {
      _t.push({ type: "step" });
      return;
    }
    ye = !0, Y = r(), _() === 0 ? Kt(Y, () => {
      _(1), Je();
    }) : _() === 1 ? je(Y, () => {
      _(2), Je();
    }) : _() === 2 ? (Y++, Rn(Y), Ve(Y, () => {
      _(0), Je();
    })) : (ye = !1, console.warn("displayPhase out of range at ", _()));
  }
  function kl(c) {
    const v = lt(c), m = new Set(Ce.filter((b) => b.isTransfer).map((b) => b.label)), $ = [];
    for (const b of v)
      m.has(b.label) && $.push({ label: b.label, value: 0, isTransfer: !0 }), $.push(b);
    Ce = v, _e = oa(c, V, $, 0, Ke(), !0), oa(c, Q, $, 0, Ke(), !1, !0);
  }
  function Pl(c, v) {
    const m = ue(A(ae)).select("#" + B), b = ue(A(ae)).select("#" + V), T = {};
    for (const C of _e) {
      const k = C.data.label;
      if (C.data.isTransfer) continue;
      const R = b.select("#" + CSS.escape(x(C.data)));
      R.empty() || (T[k] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: C.startAngle,
        newEnd: C.endAngle
      });
    }
    const P = m.selectAll(".slice");
    let q = P.size();
    function F() {
      q--, q === 0 && zl();
    }
    P.select("path").transition("global").duration(M).attrTween("d", function(C) {
      const k = C.startAngle, R = C.endAngle, S = R - k, Ne = T[C.data.label];
      let ne, Ze;
      if (Ne) {
        const rr = (Ne.oldStart + Ne.oldEnd) / 2, Wl = (Ne.newStart + Ne.newEnd) / 2, Ul = k - rr;
        ne = Wl + Ul, Ze = ne + S;
      } else
        ne = k, Ze = R;
      const re = Zt(k, ne), ut = Zt(R, Ze), ii = Zt(v, c), Nr = mt();
      return function(rr) {
        return Nr.innerRadius(Math.min(ii(rr), c) - 1).outerRadius(ii(rr)).startAngle(re(rr)).endAngle(ut(rr)), Nr(C);
      };
    }).on("end", (C) => F());
  }
  function Ml(c) {
    const v = Il(c, _e);
    ot = aa(c, B, v, I, K, Ke(), Rr(), !1, !0);
    const m = ue(A(ae));
    m.select("#" + V).raise(), m.select("#" + Q).raise();
  }
  function Dl(c) {
    const v = Ll(c, ot, _e);
    ot = fa(c, B, v, Ke(), Rr(), !1);
  }
  function Sr(c) {
    return Me[c.data.label];
  }
  function Ol(c) {
    const v = {}, m = n().results[c - 1].tallyResults;
    for (let $ = 0; $ < m.length; $++) {
      let b = m[$].eliminated;
      if (b === void 0 && (b = m[$].elected), b === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = m[$].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [P, q] of Object.entries(T))
        v[P] === void 0 ? v[P] = Number(q) : v[P] += Number(q);
    }
    return v;
  }
  function Il(c, v) {
    const m = [], $ = St, b = n().results[c - 1].tallyResults;
    for (let T = 0; T < b.length; T++) {
      let P = b[T].eliminated;
      if (P === void 0 && (P = b[T].elected), P === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const q = b[T].transfers;
      if (q === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let F = v.find((k) => k.data.label == P && k.data.isTransfer);
      F === void 0 && (F = v.find((k) => k.data.label == P && !k.data.isTransfer));
      let C = 0;
      if (F) C = F.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, R] of Object.entries(q)) {
        let S;
        const Ne = v.find((re) => re.data.label == k);
        if (Ne)
          S = structuredClone(Ne);
        else if (k == "exhausted")
          S = {
            data: { label: k, value: Number(R) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else {
          if (X(k))
            continue;
          console.warn("makeDonutInfo: unrecognized name in transfers ", k);
          continue;
        }
        const Ze = Number(R) / $ * 2 * Math.PI;
        S.startAngle = C, C = S.endAngle = C + Ze, S.index = T, S.data.transferIndex = T, m.push(S);
      }
    }
    return m;
  }
  function Fl(c, v, m) {
    const $ = {};
    for (let [b, T] of Object.entries(c)) {
      const P = m.find((C) => b == C.data.label);
      if (P === void 0) {
        X(b) || console.warn("getTransferStartAngles: mainPieObj not found for ", b);
        continue;
      }
      const q = (P.startAngle + P.endAngle) / 2, F = c[P.data.label] / v * 2 * Math.PI;
      $[P.data.label] = q - F / 2;
    }
    return $;
  }
  function Ll(c, v, m) {
    const $ = [], b = St, T = Ol(c), P = Fl(T, b, m);
    for (let [q, F] of v.entries()) {
      const C = structuredClone(F), k = F.endAngle - F.startAngle, R = m.find((S) => F.data.label === S.data.label && !S.data.isTransfer);
      if (R) {
        const S = R.data.label;
        C.startAngle = P[S], P[S] += k, C.endAngle = C.startAngle + k;
      } else if (F.data.label === "exhausted")
        C.startAngle = F.startAngle, C.endAngle = F.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", F.data.label);
        continue;
      }
      C.index = q, $.push(C);
    }
    return $;
  }
  function ia(c, v, m, $) {
    const b = mt().innerRadius(m * ie).outerRadius(m * ie), T = v.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], q = $.append("g").attr("opacity", 0);
    for (const k of T) {
      const R = k.data.label === "exhausted" ? Wt : k.data.label, S = b.centroid(k), Ne = ri(k.startAngle, k.endAngle), ne = er(k.data.label, c), Ze = q.append("text").attr("transform", `translate(${S})`).attr("text-anchor", Ne).text(R);
      Ze.append("tspan").attr("x", 0).attr("dy", "1.2em").text(ne);
      const re = Ze.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(re.x + S[0], re.y + S[1], re.width, re.height)
      });
    }
    q.remove(), P.sort((k, R) => R.value - k.value);
    const F = [], C = /* @__PURE__ */ new Set();
    for (const k of P)
      F.some((S) => k.bbox.left < S.right && k.bbox.right > S.left && k.bbox.top < S.bottom && k.bbox.bottom > S.top) || (C.add(k.label), F.push(k.bbox));
    return C;
  }
  function ts(c, v, m, $, b, T) {
    Rt = {
      round: c,
      pieInfo: v,
      x: m,
      y: $,
      outerRadius: b,
      eliminated: T
    };
    const q = ue(A(ae)).append("g").attr("id", G).attr("transform", `translate(${m}, ${$})`), F = mt().innerRadius(b * ie).outerRadius(b * ie), C = ia(c, v, b, q);
    q.selectAll("text").data(v).enter().each(function(k) {
      !k.data.isTransfer && C.has(k.data.label) && ue(this).append("g").attr("id", (R) => x(R.data)).classed("eliminated", (R) => T.includes(R.data.label) || R.data.isTransfer === !0).each(function(R, S) {
        R.data.label === "exhausted" && ue(this).on("mouseenter", (Ne, ne) => Yl(Ne)).on("mouseleave", (Ne, ne) => Bl());
      }).append("text").attr("transform", (R) => `translate(${F.centroid(R)})`).attr("text-anchor", (R) => ri(R.startAngle, R.endAngle)).text((R) => R.data.label === "exhausted" ? Wt : R.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((R) => er(R.data.label, c));
    });
  }
  function ql(c, v, m, $) {
    const T = ue(A(ae)).select("#" + G), P = ia(c, v, m, T);
    T.selectAll("g").each(function(S) {
      S && S.data && !S.data.isTransfer && !P.has(S.data.label) && ue(this).remove();
    });
    const q = T.selectAll("tspan"), F = T.selectAll("g").data(v, (S) => x(S.data)).classed("eliminated", (S) => $.includes(S.data.label) || S.data.isTransfer === !0), C = mt().innerRadius(m * ie).outerRadius(m * ie + 1);
    q.transition("global").duration(M).attr("transform", (S) => `translate(${C.centroid(S)})`).attr("text-anchor", (S) => ri(S.startAngle, S.endAngle)), F.select("text").transition("global").duration(M).attr("transform", (S) => `translate(${C.centroid(S)})`).attr("text-anchor", (S) => ri(S.startAngle, S.endAngle)).on("end", (S) => R());
    let k = F.size();
    function R(S) {
      k--, k === 0 && (T.remove(), ts(c, v, I, K, m, $));
    }
  }
  function sa(c, v, m, $, b, T, P, q = !0, F = !1, C = !1) {
    const R = cs().sort(null).value((S) => S.value)(m);
    return aa(c, v, R, $, b, T, P, q, F, C), R;
  }
  function Cr() {
    ue(A(ae)).select("#" + Q).selectAll(".elected").select("path").style("stroke", se).style("stroke-width", `${Pe}px`);
  }
  function aa(c, v, m, $, b, T, P, q, F, C = !1) {
    const k = ce(c), R = oe(c), ne = ue(A(ae)).attr("viewBox", `0 0 ${D} ${N}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", v).attr("transform", `translate(${$}, ${b})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (re) => k.includes(re.data.label) || re.data.isTransfer === !0).classed("elected", (re) => R.includes(re.data.label) && !re.data.isTransfer).attr("id", (re) => x(re.data));
    C ? ne.style("pointer-events", "none") : ne.on("mouseenter", (re, ut) => rs(re, ut)).on("mouseleave", (re, ut) => is(re, ut));
    const Ze = mt().outerRadius(P).innerRadius(T);
    if (F) {
      const re = mt().outerRadius(T + 1).innerRadius(T);
      ne.append("path").attr("d", re).attr("stroke", C ? "none" : T === 0 ? Se : "none").attr("stroke-width", C ? 0 : T === 0 ? Ge : 0).attr("fill", C ? "none" : (ut) => Sr(ut)).transition("global").duration(M).attr("d", (ut) => Ze(ut)).on("end", (ut) => {
        C || ns();
      });
    } else
      ne.append("path").attr("d", (re) => Ze(re)).attr("fill", C ? "none" : (re) => Sr(re)).attr("stroke", C ? "none" : Se).attr("stroke-width", C ? 0 : Ge), C || ns();
    return q && !C && ts(c, m, $, b, P, k), m;
  }
  function Vl() {
    const m = ue(A(ae)).select("#" + G).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function zl() {
    const m = ue(A(ae)).select("#" + G).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function Hl(c, v) {
    const b = ue(A(ae)).select("#" + V).selectAll(".eliminated"), T = mt().innerRadius(c), P = mt().outerRadius(v);
    b.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(M).attrTween("d", function(q) {
      const F = Zt(v, c);
      return function(C) {
        return P.innerRadius(F(C)), P(q);
      };
    }).attr("fill", (q) => `url(#${ge(q.data.label)})`), b.clone(!0).classed("finished", !0).select("path").transition("global").duration(M).attrTween("d", function(q) {
      const F = Zt(v, c);
      return function(C) {
        return T.outerRadius(F(C)), T(q);
      };
    }).attr("fill", (q) => Sr(q));
  }
  function ri(c, v) {
    const m = (c + v) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function ns() {
    ue(A(
      ae
      // force redisplay of text labels
    )).select("#" + G).raise().append("g").remove();
  }
  function oa(c, v, m, $, b, T, P = !1) {
    const F = cs().sort(null).value((C) => C.value)(m);
    return fa(c, v, F, $, b, T, P), F;
  }
  function la(c, v, m, $, b = !1) {
    const T = ce(c), P = oe(c), C = ue(A(ae)).select("#" + v).selectAll(".slice").data(m, (R) => x(R.data));
    C.exit().remove();
    const k = C.enter().append("g").attr("class", "slice").attr("id", (R) => x(R.data)).classed("eliminated", !0);
    return b ? k.style("pointer-events", "none") : k.on("mouseenter", (R, S) => rs(R, S)).on("mouseleave", (R, S) => is(R, S)), k.append("path").attr("d", (R) => $(R)).attr("fill", b ? "none" : (R) => Sr(R)).attr("stroke", b ? "none" : Se).attr("stroke-width", b ? 0 : Ge), C.classed("eliminated", (R) => T.includes(R.data.label)).classed("elected", (R) => P.includes(R.data.label)), b || C.on("mouseenter", (R, S) => rs(R, S)).on("mouseleave", (R, S) => is(R, S)), C;
  }
  function ua(c, v, m, $, b, T = !1) {
    const P = mt().outerRadius(b).innerRadius($);
    la(c, v, m, P, T).select("path").attr("d", (F) => P(F)).attr("fill", T ? "none" : (F) => Sr(F));
  }
  function fa(c, v, m, $, b, T, P = !1) {
    const q = mt().outerRadius(b).innerRadius($).startAngle((ne) => ne.startAngle).endAngle((ne) => ne.endAngle), F = mt().outerRadius(b).innerRadius($);
    ue(A(ae)).select("#" + v).selectAll(".slice").attr("prevStart", (ne) => ne.startAngle).attr("prevEnd", (ne) => ne.endAngle);
    const R = la(c, v, m, F, P);
    let S = R.size();
    function Ne() {
      S--, S <= 0 && (P || ns());
    }
    return R.select("path").transition("global").duration(M).attrTween("d", function(ne) {
      const Ze = Number(ue(this.parentNode).attr("prevStart")), re = Number(ue(this.parentNode).attr("prevEnd")), ut = Zt(Ze, ne.startAngle), ii = Zt(re, ne.endAngle);
      return (Nr) => (q.startAngle(ut(Nr)).endAngle(ii(Nr)), q(ne));
    }).on("end", function(ne) {
      ne.startAngle === ne.endAngle && ue(this).attr("stroke", "none"), Ne();
    }), T && !P && ql(c, m, b, ce(c)), m;
  }
  function rs(c, v) {
    s(v.data.label), i("enter"), a(c.clientX), o(c.clientY);
  }
  function is(c, v) {
    s(v.data.label), i("leave");
  }
  function Yl(c, v) {
    i("show-exhausted"), a(c.clientX), o(c.clientY);
  }
  function Bl(c, v) {
    i("hide-exhausted");
  }
  var Xl = {
    pieColors: Me,
    exhaustedLabel: Wt,
    countExhaustedVotes: dn,
    getEliminatedCandidates: ce,
    getElectedCandidates: oe,
    runFullAnimationFn: jt,
    animateOnePhaseFn: ra,
    get jsonData() {
      return n();
    },
    set jsonData(c) {
      n(c), j();
    },
    get currentRound() {
      return r();
    },
    set currentRound(c = 1) {
      r(c), j();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(c) {
      i(c), j();
    },
    get mouseData() {
      return s();
    },
    set mouseData(c) {
      s(c), j();
    },
    get mouseX() {
      return a();
    },
    set mouseX(c) {
      a(c), j();
    },
    get mouseY() {
      return o();
    },
    set mouseY(c) {
      o(c), j();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(c = (v) => {
    }) {
      l(c), j();
    },
    get requestSkipToRound() {
      return u();
    },
    set requestSkipToRound(c = (v) => {
    }) {
      u(c), j();
    },
    get candidateColors() {
      return f();
    },
    set candidateColors(c = []) {
      f(c), j();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return d();
    },
    set excludeFinalWinnerAndEliminatedCandidate(c = !1) {
      d(c), j();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(c = !1) {
      h(c), j();
    },
    get showVotes() {
      return p();
    },
    set showVotes(c = !0) {
      p(c), j();
    },
    get showPercent() {
      return y();
    },
    set showPercent(c = !0) {
      y(c), j();
    },
    get randomizeOrder() {
      return E();
    },
    set randomizeOrder(c = !1) {
      E(c), j();
    },
    get displayPhase() {
      return _();
    },
    set displayPhase(c = 0) {
      _(c), j();
    }
  }, ca = up();
  return mi(ca, (c) => de(ae, c), () => A(ae)), Be(e, ca), Xi(Xl);
}
Us(
  El,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseX: {},
    mouseY: {},
    requestRoundChange: {},
    requestSkipToRound: {},
    candidateColors: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    showVotes: {},
    showPercent: {},
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
var cp = /* @__PURE__ */ Bt("<div></div>"), hp = /* @__PURE__ */ Bt('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), dp = /* @__PURE__ */ Bt('<div role="button" aria-label="Advance animation phase"></div>');
const pp = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function Tl(e, t) {
  Bi(t, !0), Ws(e, pp);
  let n = ee(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = ee(t, "currentStep", 7, 0), i = ee(t, "disabled", 7, !1), s = ee(t, "onAdvance", 7, () => {
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
      n(d), j();
    },
    get currentStep() {
      return r();
    },
    set currentStep(d = 0) {
      r(d), j();
    },
    get disabled() {
      return i();
    },
    set disabled(d = !1) {
      i(d), j();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(d = () => {
    }) {
      s(d), j();
    }
  }, u = dp();
  let f;
  return u.__click = a, u.__keydown = o, _i(u, 21, n, gi, (d, h, p) => {
    var y = hp(), E = mn(y);
    {
      var _ = (V) => {
        var Q = cp();
        let B;
        Qt(() => B = oi(Q, 1, "connector svelte-1l4eyw0", null, B, { completed: !i() && p <= r() })), Be(V, Q);
      };
      ir(E, (V) => {
        p > 0 && V(_);
      });
    }
    var x = Qe(E, 2), D = He(x);
    let N;
    var O = Qe(D, 2);
    let I;
    var K = He(O, !0);
    Oe(O), Oe(x), Qt(() => {
      N = oi(D, 1, "dot svelte-1l4eyw0", null, N, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), I = oi(O, 1, "label svelte-1l4eyw0", null, I, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), yn(K, A(h));
    }), Be(d, y);
  }), Oe(u), Qt(() => {
    f = oi(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), Ta(u, "tabindex", i() ? -1 : 0), Ta(u, "aria-disabled", i());
  }), Be(e, u), Xi(l);
}
nf(["click", "keydown"]);
Us(Tl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var vp = /* @__PURE__ */ Bt("<span> </span> <!>", 1), gp = /* @__PURE__ */ Bt("About to eliminate: <!>", 1), _p = /* @__PURE__ */ Bt("<span> </span> <!>", 1), mp = /* @__PURE__ */ Bt(" <!>", 1), yp = /* @__PURE__ */ Bt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), wp = /* @__PURE__ */ Bt("<span> </span> <br/>", 1), xp = /* @__PURE__ */ Bt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const bp = {
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
function $p(e, t) {
  Bi(t, !0), Ws(e, bp);
  const n = 0.85;
  let r = ee(t, "electionSummary", 7), i = ee(t, "currentRound", 7, 1), s = ee(t, "requestRoundChange", 7, (w) => {
  }), a = ee(t, "requestSkipToRound", 7, (w) => {
  }), o = ee(t, "candidateColors", 23, () => []), l = ee(t, "textForWinner", 7, "won"), u = ee(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), f = ee(t, "firstRoundDeterminesPercentages", 7, !1), d = ee(t, "showVotes", 7, !0), h = ee(t, "showPercent", 7, !0), p = ee(t, "randomizeOrder", 7, !1), y = ee(t, "showCaptions", 7, !1);
  const E = {
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
  let _ = /* @__PURE__ */ Nn(() => E[l()] ?? E.won), x = /* @__PURE__ */ xe(null), D = /* @__PURE__ */ xe(null), N = /* @__PURE__ */ xe(""), O = /* @__PURE__ */ xe(On([])), I = /* @__PURE__ */ xe(""), K = /* @__PURE__ */ xe(""), V = /* @__PURE__ */ xe(0), Q = /* @__PURE__ */ xe(0), B = /* @__PURE__ */ Nn(() => G(r()));
  function G(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (X) {
        return console.error("Failed to parse JSON string:", X), {};
      }
    return w || {};
  }
  function fe(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function ie(w, X, le) {
    w.style.left = X + "px", w.style.top = le + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const oe = w.getBoundingClientRect();
      let qe = X, Ct = le + 20;
      qe + oe.width > window.innerWidth - 12 && (qe = window.innerWidth - oe.width - 12), qe < 12 && (qe = 12), Ct + oe.height > window.innerHeight - 12 && (Ct = le - oe.height - 12), w.style.left = qe + "px", w.style.top = Ct + "px";
    });
  }
  function M() {
    switch (A(I)) {
      case "enter":
        ((w) => {
          var X = hu(w, 2);
          de(O, X[0], !0), de(N, X[1], !0);
        })(Se(A(K), i())), A(x) && (ie(A(x), A(V) || 0, A(Q) || 0), A(x).style.opacity = String(n));
        break;
      case "leave":
        A(x) && (A(x).style.opacity = "0"), de(O, [], !0), de(N, "");
        break;
      case "show-exhausted":
        A(D) && (ie(A(D), A(V) || 0, A(Q) || 0), A(D).style.opacity = String(n));
        break;
      case "hide-exhausted":
        A(D) && (A(D).style.opacity = "0");
        break;
      case "":
        break;
      default:
        console.log("Unknown mouse event: ", A(I));
        break;
    }
  }
  Si(() => M());
  function z(w, X) {
    return w === 1 ? X ? "vote was" : "vote will be" : X ? "votes were" : "votes will be";
  }
  function Se(w, X) {
    const le = [], me = w === "exhausted" ? Y() : w;
    let ce;
    w === "exhausted" ? ce = Rt(1) : ce = A(B).results[0].tally[w], le.push(`${me} started with ${ce} votes.`);
    for (let oe = 1; oe <= X; oe++) {
      oe === X && (w === "exhausted" ? ce = Rt(X) : ce = A(B).results[X - 1].tally[w], le.push(`${me} has ${ce} votes at round ${X}.`));
      const qe = A(B).results[oe - 1].tallyResults, Ct = _e(oe);
      for (let Nt = 0; Nt < qe.length; Nt++) {
        const Cn = qe[Nt].transfers, pn = qe[Nt].eliminated, De = qe[Nt].elected;
        if (!Ct) {
          if (pn)
            pn === w && le.push(`${me} will be eliminated on round ${oe}.`);
          else if (w === De && (le.push(`${me} ${A(_).event} on round ${oe}.`), Cn))
            for (let [lt, vn] of Object.entries(Cn))
              le.push(`${vn} ${z(Number(vn), oe < X)} transferred to ${lt} on round ${oe}.`);
        }
        const kt = pn || De;
        if (kt) {
          const lt = Number(Cn[w]);
          lt && le.push(`${lt} ${z(lt, oe < X)} transferred from ${kt} on round ${oe}.`);
        }
      }
    }
    return [le, me];
  }
  function Ge() {
    let w = 0;
    for (let X = 1; X <= A(B).results.length; X++) {
      if (_e(X)) continue;
      const le = A(B).results[X - 1].tallyResults;
      for (let me = 0; me < le.length; me++)
        le[me].elected && w++;
    }
    return w;
  }
  let se, Pe = /* @__PURE__ */ xe(0);
  function ge(w) {
    var ce;
    return !((ce = A(B)) != null && ce.results) || w < 1 || w > A(B).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [A(B).results[w - 1].tallyResults.some((oe) => oe.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function _e(w) {
    return u() && A(B).results && w === A(B).results.length;
  }
  function ot(w) {
    return _e(w) ? [] : se ? se.getEliminatedCandidates(w) : [];
  }
  function Ce(w) {
    return _e(w) ? [] : se ? se.getElectedCandidates(w) : [];
  }
  function Rt(w) {
    return se ? se.countExhaustedVotes(w) : 0;
  }
  function St() {
    se && se.animateOnePhaseFn && se.animateOnePhaseFn();
  }
  function Y() {
    return se ? se.exhaustedLabel : "";
  }
  function Me() {
    return se ? se.pieColors : {};
  }
  var Wt = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), j();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), j();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (X) => {
    }) {
      s(w), j();
    },
    get requestSkipToRound() {
      return a();
    },
    set requestSkipToRound(w = (X) => {
    }) {
      a(w), j();
    },
    get candidateColors() {
      return o();
    },
    set candidateColors(w = []) {
      o(w), j();
    },
    get textForWinner() {
      return l();
    },
    set textForWinner(w = "won") {
      l(w), j();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return u();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      u(w), j();
    },
    get firstRoundDeterminesPercentages() {
      return f();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      f(w), j();
    },
    get showVotes() {
      return d();
    },
    set showVotes(w = !0) {
      d(w), j();
    },
    get showPercent() {
      return h();
    },
    set showPercent(w = !0) {
      h(w), j();
    },
    get randomizeOrder() {
      return p();
    },
    set randomizeOrder(w = !1) {
      p(w), j();
    },
    get showCaptions() {
      return y();
    },
    set showCaptions(w = !1) {
      y(w), j();
    }
  }, ae = xp(), Ut = mn(ae), Rn = He(Ut);
  {
    let w = /* @__PURE__ */ Nn(() => ge(i()));
    Tl(Rn, {
      get labels() {
        return A(w);
      },
      get currentStep() {
        return A(Pe);
      },
      disabled: !1,
      onAdvance: St
    });
  }
  Oe(Ut);
  var Gt = Qe(Ut, 4), Tr = He(Gt), Sn = He(Tr), Zi = He(Sn);
  mi(
    El(Zi, {
      get jsonData() {
        return A(B);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: fe,
      get requestSkipToRound() {
        return a();
      },
      get candidateColors() {
        return o();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return u();
      },
      get firstRoundDeterminesPercentages() {
        return f();
      },
      get showVotes() {
        return d();
      },
      get showPercent() {
        return h();
      },
      get randomizeOrder() {
        return p();
      },
      get mouseEventType() {
        return A(I);
      },
      set mouseEventType(w) {
        de(I, w, !0);
      },
      get mouseData() {
        return A(K);
      },
      set mouseData(w) {
        de(K, w, !0);
      },
      get mouseX() {
        return A(V);
      },
      set mouseX(w) {
        de(V, w, !0);
      },
      get mouseY() {
        return A(Q);
      },
      set mouseY(w) {
        de(Q, w, !0);
      },
      get displayPhase() {
        return A(Pe);
      },
      set displayPhase(w) {
        de(Pe, w, !0);
      }
    }),
    (w) => se = w,
    () => se
  ), Oe(Sn), Oe(Tr);
  var Ke = Qe(Tr, 2);
  {
    var Rr = (w) => {
      var X = yp(), le = mn(X), me = He(le);
      Oe(le);
      var ce = Qe(le, 2), oe = He(ce);
      {
        var qe = (De) => {
          var kt = gp(), lt = Qe(mn(kt));
          _i(lt, 17, () => ot(i()), gi, (vn, tr, nr) => {
            var Kt = vp(), je = mn(Kt);
            let Ve;
            var ye = He(je, !0);
            Oe(je);
            var _t = Qe(je, 2);
            {
              var Je = (Pt) => {
                var jt = xa(", ");
                Be(Pt, jt);
              }, gn = /* @__PURE__ */ Nn(() => nr < ot(i()).length - 1);
              ir(_t, (Pt) => {
                A(gn) && Pt(Je);
              });
            }
            Qt(
              (Pt) => {
                Ve = Ea(je, "", Ve, Pt), yn(ye, A(tr));
              },
              [() => ({ color: Me()[A(tr)] })]
            ), Be(vn, Kt);
          }), Be(De, kt);
        }, Ct = /* @__PURE__ */ Nn(() => ot(i()).length > 0);
        ir(oe, (De) => {
          A(Ct) && De(qe);
        });
      }
      var Nt = Qe(oe, 2);
      {
        var Cn = (De) => {
          var kt = mp(), lt = mn(kt), vn = Qe(lt);
          _i(vn, 17, () => Ce(i()), gi, (tr, nr, Kt) => {
            var je = _p(), Ve = mn(je);
            let ye;
            var _t = He(Ve, !0);
            Oe(Ve);
            var Je = Qe(Ve, 2);
            {
              var gn = (jt) => {
                var ni = xa(", ");
                Be(jt, ni);
              }, Pt = /* @__PURE__ */ Nn(() => Kt < Ce(i()).length - 1);
              ir(Je, (jt) => {
                A(Pt) && jt(gn);
              });
            }
            Qt(
              (jt) => {
                ye = Ea(Ve, "", ye, jt), yn(_t, A(nr));
              },
              [() => ({ color: Me()[A(nr)] })]
            ), Be(tr, je);
          }), Qt(() => yn(lt, `${A(_).caption ?? ""}: `)), Be(De, kt);
        }, pn = /* @__PURE__ */ Nn(() => Ce(i()).length > 0);
        ir(Nt, (De) => {
          A(pn) && De(Cn);
        });
      }
      Oe(ce), Qt((De) => yn(me, `${A(B).config.contest ?? ""}, ${De ?? ""} ${A(_).infinitive ?? ""}, Round ${i() ?? ""}.`), [Ge]), Be(w, X);
    };
    ir(Ke, (w) => {
      y() && w(Rr);
    });
  }
  Oe(Gt);
  var dn = Qe(Gt, 2), Qn = He(dn), Qi = He(Qn, !0);
  Oe(Qn);
  var ti = Qe(Qn, 2);
  _i(ti, 17, () => A(O), gi, (w, X) => {
    var le = wp(), me = mn(le), ce = He(me, !0);
    Oe(me), ps(2), Qt(() => yn(ce, A(X))), Be(w, le);
  }), Oe(dn), mi(dn, (w) => de(x, w), () => A(x));
  var er = Qe(dn, 2), es = He(er);
  return ps(2), Oe(er), mi(er, (w) => de(D, w), () => A(D)), Qt(
    (w) => {
      yn(Qi, A(N)), yn(es, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Y]
  ), Be(e, ae), Xi(Wt);
}
customElements.define("pie-chart", Us(
  $p,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    requestSkipToRound: {},
    candidateColors: {},
    textForWinner: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    showVotes: {},
    showPercent: {},
    randomizeOrder: {},
    showCaptions: {}
  },
  [],
  [],
  { mode: "open" }
));
