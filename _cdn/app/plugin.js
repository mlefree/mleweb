import { jsx as e, jsxs as i, Fragment as xe } from "react/jsx-runtime";
import { ThemeProviderContext as ro, useToast as Ie, usePortalContainer as mn, useDebounce as Ss, useFetch as As, PortalContainerProvider as Ds } from "@vertesia/ui/core";
import * as ie from "react";
import { useRef as ge, useContext as Et, useEffect as M, createContext as pn, useState as g, useMemo as ce, useCallback as J, useSyncExternalStore as Ts, useLayoutEffect as Is, forwardRef as ga } from "react";
import { ModernAgentConversation as Ps, useTypeRegistry as tt, TypeRegistryProvider as ks } from "@vertesia/ui/features";
import { useLocation as fa, useNavigate as et, useParams as Mn, NestedRouterProvider as _s } from "@vertesia/ui/router";
import { useAppInstallation as Fe } from "@vertesia/ui/shell";
import { useUserSession as de } from "@vertesia/ui/session";
import { Slot as ba } from "@radix-ui/react-slot";
import { cva as hn } from "class-variance-authority";
import Ba, { clsx as Es } from "clsx";
import { twMerge as zs } from "tailwind-merge";
import { useTranslation as K, initReactI18next as Fs } from "react-i18next";
import { AgentMessageType as ct, ImageRenditionFormat as Ls, MarkdownRenditionFormat as Rs, InteractionStatus as ia, ContentObjectStatus as $s, mergePromptsSchema as Ms } from "@vertesia/common";
import { MessageSquare as In, Minimize2 as Os, Maximize2 as js, Minus as so, X as De, Loader2 as fe, Send as zi, ChevronRight as mt, Check as Me, Circle as Bs, ChevronsUpDown as Ut, Sun as Hs, Moon as Vs, Computer as qs, Palette as Gs, Globe as Ws, LayoutGrid as Ln, LogOut as Us, House as Ks, LibraryBig as Fi, Heart as On, User as gn, Users as lo, FolderSearch as Li, BotMessageSquare as Ha, TextSearch as Ri, Settings as Ys, icons as xt, Bot as Pt, ArrowLeft as Va, Play as Oo, Activity as en, CheckCircle2 as $i, XCircle as co, Clock as uo, ListFilter as Mi, FilterX as qa, Search as vt, FileText as Je, FolderOpen as st, Plus as jn, FileStack as Xs, Share2 as Qs, Link as Zs, Mail as Js, File as wt, Copy as el, Filter as Oi, ArrowUp as mo, ArrowDown as po, ArrowUpDown as ji, Image as fn, Video as Bn, Music as Hn, Archive as va, FileCode as xa, FileSearch as Mt, List as Bi, ChevronLeftIcon as tl, ChevronRightIcon as nl, ChevronDownIcon as al, CalendarIcon as ol, ChevronUp as Hi, ChevronDown as Vi, ChevronsDownUp as il, ScanSearch as rl, CalendarSearch as sl, FileCheck as ll, CloudUpload as cl, CheckCircle as dl, Upload as bn, LoaderCircle as qi, EllipsisVertical as ul, Download as ml, HeartOff as pl, FolderPlus as tn, Trash2 as ya, PanelRightClose as Gi, PanelRightOpen as Wi, Pencil as Ui, Info as hl, RotateCcw as ho, ExternalLink as go, Tag as gl, FileType as fl, Calendar as Rn, Folder as bl, Table as jo, Eye as rn, Edit as Ga, CalendarDays as vl, CalendarRange as xl, LayoutDashboard as yl, ChevronLeft as Nl, Type as wl, AlertCircle as Wa, CircleHelp as Cl, RefreshCw as Sl, EyeOff as ra, ImagePlus as Ki, Move as Al, Sparkles as Dl, CornerDownRight as Tl, Settings2 as Bo, ArrowRight as Il } from "lucide-react";
import * as fo from "@radix-ui/react-collapsible";
import * as Yi from "@radix-ui/react-separator";
import * as We from "@radix-ui/react-dialog";
import * as sn from "@radix-ui/react-tooltip";
import * as vn from "@radix-ui/react-avatar";
import * as Oe from "@radix-ui/react-dropdown-menu";
import Xi from "i18next";
import { Toaster as Pl } from "sonner";
import * as $n from "@radix-ui/react-popover";
import { motion as bt, AnimatePresence as Na } from "motion/react";
import { Command as ot } from "cmdk";
import * as Ua from "@radix-ui/react-checkbox";
import * as Qi from "@radix-ui/react-label";
import * as Ot from "@radix-ui/react-scroll-area";
import * as Zi from "@radix-ui/react-toggle-group";
import "@radix-ui/react-toggle";
import kl from "react-markdown";
import _l from "remark-gfm";
import El, { DocViewerRenderers as zl } from "react-doc-viewer";
import "docx";
import { useReactTable as Fl, getFilteredRowModel as Ll, getSortedRowModel as Rl, getCoreRowModel as $l, flexRender as Ho } from "@tanstack/react-table";
import { getDefaultClassNames as Ji, DayPicker as Ml } from "react-day-picker";
import * as Vo from "@radix-ui/react-switch";
import * as wa from "@radix-ui/react-tabs";
import Ol from "mime-types";
import { MarkdownRenderer as jl } from "@vertesia/ui/widgets";
import Bl from "dayjs";
import Hl from "dayjs/plugin/relativeTime";
import * as Kn from "@radix-ui/react-slider";
import * as qe from "@radix-ui/react-select";
const Ka = {
  default: { labelKey: "colorScheme.default", swatch: "oklch(0.21 0.034 264.665)", lightPrimary: "oklch(0.21 0.034 264.665)", darkPrimary: "oklch(0.985 0.002 247.839)" },
  red: { labelKey: "colorScheme.red", swatch: "#dc2626", lightPrimary: "oklch(0.52 0.24 25)", darkPrimary: "oklch(0.63 0.22 25)" },
  orange: { labelKey: "colorScheme.orange", swatch: "#ea580c", lightPrimary: "oklch(0.60 0.19 55)", darkPrimary: "oklch(0.70 0.17 55)" },
  yellow: { labelKey: "colorScheme.yellow", swatch: "#ca8a04", lightPrimary: "oklch(0.62 0.17 85)", darkPrimary: "oklch(0.72 0.15 85)" },
  green: { labelKey: "colorScheme.green", swatch: "#16a34a", lightPrimary: "oklch(0.49 0.16 155)", darkPrimary: "oklch(0.62 0.16 155)" },
  teal: { labelKey: "colorScheme.teal", swatch: "#0d9488", lightPrimary: "oklch(0.52 0.1 185)", darkPrimary: "oklch(0.62 0.1 185)" },
  blue: { labelKey: "colorScheme.blue", swatch: "#2563eb", lightPrimary: "oklch(0.49 0.22 260)", darkPrimary: "oklch(0.62 0.22 260)" },
  indigo: { labelKey: "colorScheme.indigo", swatch: "#4f46e5", lightPrimary: "oklch(0.44 0.24 275)", darkPrimary: "oklch(0.58 0.22 275)" },
  violet: { labelKey: "colorScheme.violet", swatch: "#9333ea", lightPrimary: "oklch(0.50 0.22 295)", darkPrimary: "oklch(0.63 0.22 295)" },
  fuchsia: { labelKey: "colorScheme.fuchsia", swatch: "#c026d3", lightPrimary: "oklch(0.52 0.24 320)", darkPrimary: "oklch(0.65 0.22 320)" },
  pink: { labelKey: "colorScheme.pink", swatch: "#db2777", lightPrimary: "oklch(0.55 0.22 345)", darkPrimary: "oklch(0.65 0.20 345)" },
  rose: { labelKey: "colorScheme.rose", swatch: "oklch(0.55 0.20 12)", lightPrimary: "oklch(0.55 0.20 12)", darkPrimary: "oklch(0.65 0.20 12)" },
  slate: { labelKey: "colorScheme.slate", swatch: "#475569", lightPrimary: "oklch(0.45 0.03 260)", darkPrimary: "oklch(0.65 0.025 260)" }
};
let er = null;
function qo(t) {
  er = t;
}
function tr() {
  return er || document.documentElement;
}
function nr(t) {
  const n = tr();
  t === "default" ? n.removeAttribute("data-scheme") : n.setAttribute("data-scheme", t);
}
function Vl() {
  return tr().getAttribute("data-scheme") || "default";
}
function ql({ children: t }) {
  const n = ge(null), { theme: a } = Et(ro);
  return M(() => (n.current && qo(n.current), () => qo(null)), []), M(() => {
    const o = n.current;
    if (o) {
      if (o.classList.remove("light", "dark"), a === "system") {
        const r = window.matchMedia("(prefers-color-scheme: dark)");
        o.classList.add(r.matches ? "dark" : "light");
        const s = (l) => {
          o.classList.remove("light", "dark"), o.classList.add(l.matches ? "dark" : "light");
        };
        return r.addEventListener("change", s), () => r.removeEventListener("change", s);
      }
      o.classList.add(a);
    }
  }, [a]), /* @__PURE__ */ e("div", { ref: n, className: "contents", children: t });
}
const ar = pn(null);
function Gl({ children: t }) {
  const [n, a] = g(!1), [o, r] = g(!1), [s, l] = g(null), [d, c] = g(null), [u, m] = g(!1), [f, p] = g(!1), h = (N) => {
    l(N), c(null), a(!0), r(!1);
  }, b = () => l(null), C = () => r(!0), y = () => {
    r(!1), m(!1);
  }, v = () => {
    a(!1), r(!1), l(null), c(null), m(!1), p(!1);
  }, x = () => p((N) => !N);
  return /* @__PURE__ */ e(
    ar.Provider,
    {
      value: {
        openChatWithQuery: h,
        isOpen: n,
        isMinimized: o,
        pendingQuery: s,
        clearPendingQuery: b,
        minimize: C,
        expand: y,
        dismiss: v,
        agentRunId: d,
        setAgentRunId: c,
        hasUnreadResponse: u,
        setHasUnreadResponse: m,
        isEnlarged: f,
        toggleEnlarged: x
      },
      children: t
    }
  );
}
const At = () => {
}, Wl = {
  openChatWithQuery: At,
  isOpen: !1,
  isMinimized: !1,
  pendingQuery: null,
  clearPendingQuery: At,
  minimize: At,
  expand: At,
  dismiss: At,
  agentRunId: null,
  setAgentRunId: At,
  hasUnreadResponse: !1,
  setHasUnreadResponse: At,
  isEnlarged: !1,
  toggleEnlarged: At
};
function or() {
  return Et(ar) ?? Wl;
}
function Ul() {
  const t = Fe();
  return ce(() => {
    const n = t?.settings?.FAVORITES_COLLECTION_TYPE;
    if (!(typeof n != "string" || n.trim().length === 0))
      return n;
  }, [t?.settings?.FAVORITES_COLLECTION_TYPE]);
}
const ir = "favorites", rr = 1e3;
async function bo(t, n) {
  const a = await t.store.collections.search({
    dynamic: !1,
    limit: 1,
    match: {
      "properties.user": n,
      [`properties.${ir}`]: !0
    }
  });
  return a.length > 0 ? a[0].id : null;
}
async function Kl(t, n, a) {
  const o = await t.store.collections.create({
    name: "Favorites",
    dynamic: !1,
    ...a ? { type: a } : {},
    properties: {
      user: n,
      [ir]: !0
    }
  }), r = [`user:${n}`];
  return await t.store.collections.updatePermissions(o.id, {
    "content:read": r,
    "content:write": r,
    "content:delete": r
  }), o.id;
}
async function Yl(t, n, a) {
  const o = await bo(t, n);
  return o || Kl(t, n, a);
}
function Xl(t, n, a) {
  return t.store.collections.addMembers(n, a);
}
function Ql(t, n, a) {
  return t.store.collections.deleteMembers(n, a);
}
async function Go(t, n) {
  return (await t.store.collections.searchMembers(n, {
    limit: rr,
    select: "id"
  })).results.map((o) => o.id);
}
async function Zl(t, n) {
  return (await t.store.collections.searchMembers(n, {
    limit: rr
  })).results;
}
const sr = pn(null);
function Jl({ children: t }) {
  const { client: n, user: a } = de(), o = Ie(), r = Ul(), [s, l] = g(/* @__PURE__ */ new Set()), [d, c] = g(!1), u = ge(null), m = a?.sub;
  M(() => {
    let v = !1;
    if (u.current = null, l(/* @__PURE__ */ new Set()), c(!1), !(!n || !m))
      return (async () => {
        try {
          const x = await bo(n, m);
          if (v) return;
          if (u.current = x, x) {
            const N = await Go(n, x);
            if (v) return;
            l(new Set(N));
          }
        } catch {
        } finally {
          v || c(!0);
        }
      })(), () => {
        v = !0;
      };
  }, [n, m]);
  const f = J(async () => {
    if (u.current)
      return u.current;
    if (!n || !m)
      throw new Error("Favorites are unavailable without a signed-in user");
    const v = await Yl(n, m, r);
    return u.current = v, v;
  }, [n, m, r]), p = J(async (v) => {
    if (v.length === 0) return;
    const x = v.filter((N) => !s.has(N));
    if (x.length !== 0) {
      l((N) => {
        const w = new Set(N);
        return x.forEach((A) => w.add(A)), w;
      });
      try {
        const N = await f();
        await Xl(n, N, x);
      } catch (N) {
        l((w) => {
          const A = new Set(w);
          return x.forEach((S) => A.delete(S)), A;
        }), o({
          status: "error",
          title: "Failed to add to favorites",
          description: N?.message,
          duration: 3e3
        });
      }
    }
  }, [n, s, f, o]), h = J(async (v) => {
    if (v.length === 0) return;
    const x = v.filter((N) => s.has(N));
    if (x.length !== 0) {
      l((N) => {
        const w = new Set(N);
        return x.forEach((A) => w.delete(A)), w;
      });
      try {
        const N = await f();
        await Ql(n, N, x);
      } catch (N) {
        l((w) => {
          const A = new Set(w);
          return x.forEach((S) => A.add(S)), A;
        }), o({
          status: "error",
          title: "Failed to remove from favorites",
          description: N?.message,
          duration: 3e3
        });
      }
    }
  }, [n, s, f, o]), b = J(async (v) => {
    s.has(v) ? await h([v]) : await p([v]);
  }, [s, p, h]), C = J(async () => {
    if (!n) return;
    const v = u.current;
    if (v)
      try {
        const x = await Go(n, v);
        l(new Set(x));
      } catch {
      }
  }, [n]), y = J((v) => s.has(v), [s]);
  return /* @__PURE__ */ e(
    sr.Provider,
    {
      value: { isReady: d, favoriteIds: s, isFavorite: y, toggleFavorite: b, addMany: p, removeMany: h, refresh: C },
      children: t
    }
  );
}
function Ca() {
  const t = Et(sr);
  if (!t)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return t;
}
function D(...t) {
  return zs(Es(t));
}
const Ya = hn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
      outline: "ring ring-input bg-background shadow-none hover:shadow-sm hover:text-accent-foreground hover:ring-primary hover:opacity-75",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-sidebar-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      icon: "border border-input rounded-full bg-contrast hover:text-accent-foreground hover:bg-sidebar-accent hover:opacity-75"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-9",
      xs: "size-6"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), z = ie.forwardRef(({ className: t, variant: n, size: a, asChild: o = !1, ...r }, s) => /* @__PURE__ */ e(o ? ba : "button", { className: D(Ya({ variant: n, size: a, className: t })), ref: s, ...r }));
z.displayName = "Button";
const sa = [
  { id: "old", label: "Old", caption: "As-is today — compact, greyscale, flat (baseline)" },
  { id: "vertesia", label: "Vertesia", caption: "Vertesia brand — royal blue + blue→violet, airy, huge radius" },
  { id: "alt", label: "Alt", caption: "Blend of Vertesia + Accor — blue + gold, glass-pill search, subtle lifted cards" },
  { id: "accor", label: "Accor", caption: "Faithful to the real Accor plugin — amber brand, white canvas, subtle cards" }
], lr = "vertesia.psea.demoThemePreset";
function ec() {
  return sa;
}
function tc() {
  const t = localStorage.getItem(lr);
  return t && sa.some((n) => n.id === t) ? t : "old";
}
function Wo(t) {
  let n = t ?? null;
  for (; n; ) {
    if (n instanceof HTMLElement && (n.classList.contains("light") || n.classList.contains("dark")))
      return n;
    const a = n.parentElement;
    if (a)
      n = a;
    else {
      const o = n.getRootNode();
      n = o instanceof ShadowRoot ? o.host : null;
    }
  }
  return document.documentElement;
}
function Uo(t, n) {
  const a = sa.find((r) => r.id === t) ?? sa[0], o = n ?? ic();
  nc(), oc(), a.id !== "old" && o.setAttribute("data-theme-preset", a.id), localStorage.setItem(lr, a.id);
}
function nc() {
  const t = (n) => {
    n.querySelectorAll("[data-theme-preset]").forEach((a) => a.removeAttribute("data-theme-preset")), n.querySelectorAll("*").forEach((a) => {
      const o = a.shadowRoot;
      o && t(o);
    });
  };
  t(document);
}
const ac = "vertesia.psea.colorScheme";
function oc() {
  const t = (n) => {
    n.querySelectorAll("[data-scheme]").forEach((a) => a.removeAttribute("data-scheme")), n.querySelectorAll("*").forEach((a) => {
      const o = a.shadowRoot;
      o && t(o);
    });
  };
  t(document);
  try {
    localStorage.removeItem(ac);
  } catch {
  }
}
function ic() {
  const t = (n) => {
    const a = n.querySelector("[data-scheme]");
    if (a && a.getRootNode() instanceof ShadowRoot)
      return a;
    for (const o of Array.from(n.querySelectorAll("*")))
      if (o.shadowRoot) {
        const r = t(o.shadowRoot);
        if (r)
          return r;
      }
    return null;
  };
  return t(document) ?? document.documentElement;
}
const rc = "vertesia.psea.demoThemeSwitcher";
function sc() {
  const t = Fe()?.settings, [n, a] = g("old"), [o, r] = g(!1), s = ge(null);
  if (M(() => {
    const c = tc();
    a(c), Uo(c, Wo(s.current));
  }, []), t?.DEMO_THEME_SWITCHER === !1 || typeof window < "u" && localStorage.getItem(rc) === "off")
    return null;
  const d = (c) => {
    a(c), Uo(c, Wo(s.current));
  };
  return /* @__PURE__ */ e("div", { ref: s, className: "fixed bottom-4 right-4 z-[9998] rounded-xl border border-border/40 bg-card/30 text-card-foreground shadow-xl backdrop-blur-md", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 px-3 py-2", children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => r((c) => !c),
        className: "text-xs font-semibold tracking-tight text-muted-foreground hover:text-foreground cursor-pointer",
        title: "Demo only — toggle theme presets",
        children: [
          "🎨 Theme ",
          o ? "▸" : "▾"
        ]
      }
    ),
    !o && /* @__PURE__ */ e("div", { className: "flex items-center gap-1", children: ec().map((c) => /* @__PURE__ */ e(
      z,
      {
        size: "sm",
        variant: n === c.id ? "default" : "outline",
        title: c.caption,
        onClick: () => d(c.id),
        className: D("h-7 px-2.5 text-xs", n === c.id && "font-semibold"),
        children: c.label
      },
      c.id
    )) })
  ] }) });
}
const Lt = { className: "!hidden", cardClassName: "!hidden" }, lc = {
  [ct.THOUGHT]: Lt,
  [ct.PLAN]: Lt,
  [ct.UPDATE]: Lt,
  [ct.SYSTEM]: Lt,
  [ct.COMPLETE]: Lt,
  [ct.IDLE]: Lt,
  [ct.TERMINATED]: Lt,
  // User turn: distinct (darker) bubble, no "User" label.
  [ct.QUESTION]: {
    cardClassName: "!bg-muted/70 !border-l-muted-foreground/30",
    contentClassName: "!bg-muted/70",
    senderClassName: "!hidden"
  }
}, cc = {
  cardClassName: "!bg-card text-card-foreground",
  contentClassName: "!bg-card",
  proseClassName: "prose-neutral [&_a]:!text-primary [&_a]:!font-medium [&_a]:underline [&_a:hover]:!text-primary/80",
  senderClassName: "!hidden",
  detailsClassName: "!hidden",
  timestampClassName: "!text-muted-foreground",
  headerClassName: "[&_svg]:!text-muted-foreground [&_button]:!text-muted-foreground"
}, dc = {
  cardClassName: "!bg-card text-card-foreground",
  contentClassName: "!bg-card",
  proseClassName: "prose-neutral"
}, uc = ["stacked"], mc = "!my-2 !ml-2 !mr-2 !py-2 !px-3 rounded-md bg-primary/10 !border-l-4 !border-l-primary [&>span]:!text-sm [&>span]:!font-semibold [&>span]:!text-foreground", La = (t) => {
  t.preventDefault(), t.stopPropagation();
};
function pc() {
  const { t } = K(["dashboard", "common"]), {
    isOpen: n,
    isMinimized: a,
    pendingQuery: o,
    clearPendingQuery: r,
    minimize: s,
    expand: l,
    dismiss: d,
    agentRunId: c,
    setAgentRunId: u,
    hasUnreadResponse: m,
    setHasUnreadResponse: f,
    isEnlarged: p,
    toggleEnlarged: h
  } = or(), { client: b } = de(), C = Fe(), [y, v] = g(!1), [x, N] = g(null), [w, A] = g(!1), [S, I] = g(""), L = ge(null), V = C?.settings?.DASHBOARD_AGENTIC_SEARCH_INTERACTION, G = J((q) => {
    const $ = q.target.closest("a");
    if (!$) return;
    const T = $.getAttribute("href") || "", X = T.match(/([0-9a-f]{24})/i);
    if (!X) return;
    q.preventDefault(), q.stopPropagation();
    const U = X[1], E = C?.manifest.name || void 0, H = E ? `/apps/${E}` : "", P = H && window.location.pathname.startsWith(H) ? H : "", B = /collection/i.test(T) ? `/collections/${U}` : `/advanced-search/${U}`;
    window.open(`${window.location.origin}${P}${B}`, "_blank", "noopener,noreferrer");
  }, [C]), R = J(async (q) => {
    if (b) {
      if (!V) {
        N(t("dashboard:aiAssistant.notConfigured"));
        return;
      }
      L.current = q, N(null), v(!0);
      try {
        const $ = {
          type: "conversation",
          interaction: V,
          data: { user_prompt: "" },
          interactive: !0,
          visibility: "project"
        }, T = await b.interactions.executeAsync($);
        if (T.agentRunId) {
          u(T.agentRunId);
          try {
            await b.agents.sendSignal(T.agentRunId, "UserInput", { message: q });
          } catch (X) {
            console.error("Failed to send initial UserInput signal", X);
          }
        } else
          N(t("dashboard:aiAssistant.noRunId"));
      } catch ($) {
        N($ instanceof Error ? $.message : t("dashboard:aiAssistant.startFailed"));
      } finally {
        v(!1);
      }
    }
  }, [b, V, u, t]);
  M(() => {
    if (!o || y || c) return;
    const q = o;
    r(), R(q);
  }, [o]);
  const j = J(async (q) => {
    const $ = q.trim();
    if (!(!$ || !c || w || !b)) {
      I(""), A(!0);
      try {
        await b.agents.sendSignal(c, "UserInput", { message: $ });
      } catch (T) {
        console.error("Failed to send message", T);
      } finally {
        A(!1);
      }
    }
  }, [c, b, w]), O = () => {
    u(null), N(null);
  }, Q = () => {
    L.current && R(L.current);
  }, ee = ge(a);
  ee.current = a;
  const te = J((q) => {
    q && ee.current && f(!0);
  }, [f]), k = ge(null), _ = J((q) => {
    if (k.current?.disconnect(), k.current = null, !q) return;
    const $ = '{"user_prompt":""}', T = (E) => (E || "").replace(/\s+/g, ""), X = () => {
      const E = Array.from(q.querySelectorAll("*")).filter(
        (B) => T(B.textContent).includes($)
      ), H = E.filter((B) => !E.some((W) => W !== B && B.contains(W)));
      let P = !1;
      for (const B of H) {
        let W = B;
        for (let le = 0; le < 8; le++) {
          const me = W.parentElement;
          if (!me || me === q || (W = me, /\d{1,2}:\d{2}/.test(W.textContent || ""))) break;
        }
        W.dataset.seedHidden || (W.style.display = "none", W.dataset.seedHidden = "1", P = !0);
      }
      return P;
    };
    if (X()) return;
    const U = new MutationObserver(() => {
      X() && U.disconnect();
    });
    U.observe(q, { childList: !0, subtree: !0, characterData: !0 }), k.current = U;
  }, []);
  return n ? /* @__PURE__ */ i(xe, { children: [
    a && /* @__PURE__ */ e("div", { className: "fixed bottom-6 right-6 z-50", children: /* @__PURE__ */ i(
      z,
      {
        onClick: l,
        className: "relative size-14 rounded-full shadow-lg [&_svg]:size-6",
        "aria-label": t("dashboard:aiAssistant.open"),
        children: [
          /* @__PURE__ */ e(In, {}),
          m && /* @__PURE__ */ i("span", { className: "absolute top-0 right-0 flex size-4", children: [
            /* @__PURE__ */ e("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" }),
            /* @__PURE__ */ e("span", { className: "relative inline-flex size-4 rounded-full bg-destructive" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ i("div", { className: `fixed z-50 flex flex-col border bg-background shadow-2xl overflow-hidden transition-all duration-200 ${p ? "w-screen h-screen bottom-0 right-0 rounded-none sm:w-[720px] sm:h-[80vh] sm:bottom-6 sm:right-6 sm:rounded-lg" : "w-[420px] h-[560px] bottom-6 right-6 rounded-lg"} ${a ? "invisible pointer-events-none" : ""}`, children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-4 py-3 border-b bg-muted/40 shrink-0", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(In, { className: "size-4 text-primary" }),
          /* @__PURE__ */ e("span", { className: "font-semibold text-sm", children: t("dashboard:aiAssistant.title") })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "xs",
              onClick: h,
              className: "text-muted-foreground",
              "aria-label": t(p ? "dashboard:aiAssistant.shrink" : "dashboard:aiAssistant.enlarge"),
              children: p ? /* @__PURE__ */ e(Os, {}) : /* @__PURE__ */ e(js, {})
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "xs",
              onClick: s,
              className: "text-muted-foreground",
              "aria-label": t("dashboard:aiAssistant.minimize"),
              children: /* @__PURE__ */ e(so, {})
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "xs",
              onClick: d,
              className: "text-muted-foreground",
              "aria-label": t("common:actions.close"),
              children: /* @__PURE__ */ e(De, {})
            }
          )
        ] })
      ] }),
      y ? /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground", children: [
        /* @__PURE__ */ e(fe, { className: "size-6 animate-spin" }),
        /* @__PURE__ */ e("span", { className: "text-sm", children: t("dashboard:aiAssistant.starting") })
      ] }) : x ? /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center", children: [
        /* @__PURE__ */ e("span", { className: "text-sm text-destructive", children: x }),
        /* @__PURE__ */ e(z, { variant: "link", onClick: Q, className: "h-auto p-0 text-xs", children: t("dashboard:aiAssistant.tryAgain") })
      ] }) : c ? /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e(
          "div",
          {
            ref: _,
            className: "flex-1 min-h-0 flex flex-col",
            onClickCapture: G,
            onDragEnterCapture: La,
            onDragOverCapture: La,
            onDropCapture: La,
            children: /* @__PURE__ */ e(
              Ps,
              {
                agentRunId: c,
                hideHeader: !0,
                hideMessageInput: !0,
                hidePlanPanel: !0,
                hideWorkstreamTabs: !0,
                showRightPanel: !1,
                hideFileUpload: !0,
                hideObjectLinking: !0,
                hideDocumentPanel: !0,
                interactive: !0,
                viewMode: "stacked",
                className: "flex-1 min-h-0",
                resetWorkflow: O,
                onShowInputChange: te,
                messageStyleOverrides: lc,
                messageItemClassNames: cc,
                streamingMessageClassNames: dc,
                hideToolCallsInViewMode: uc,
                workingIndicatorClassName: mc
              }
            )
          }
        ),
        /* @__PURE__ */ e("div", { className: "shrink-0 border-t bg-background", children: /* @__PURE__ */ i("div", { className: "flex items-end gap-2 p-3", children: [
          /* @__PURE__ */ e(
            "textarea",
            {
              value: S,
              onChange: (q) => I(q.target.value),
              onKeyDown: (q) => {
                q.key === "Enter" && !q.shiftKey && (q.preventDefault(), j(S));
              },
              placeholder: t("dashboard:aiAssistant.inputPlaceholder"),
              rows: 1,
              className: "flex-1 resize-none rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring max-h-32"
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              type: "button",
              size: "icon",
              onClick: () => {
                j(S);
              },
              disabled: !S.trim() || w,
              className: "shrink-0",
              "aria-label": t("dashboard:aiAssistant.send"),
              children: /* @__PURE__ */ e(zi, {})
            }
          )
        ] }) })
      ] }) : /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col items-center justify-center gap-2 text-muted-foreground px-6 text-center", children: [
        /* @__PURE__ */ e(In, { className: "size-8 opacity-30" }),
        /* @__PURE__ */ e("span", { className: "text-sm", children: t("dashboard:aiAssistant.empty") })
      ] })
    ] })
  ] }) : null;
}
function Bt({ ...t }) {
  return /* @__PURE__ */ e(fo.Root, { "data-slot": "collapsible", ...t });
}
function Ht({ ...t }) {
  return /* @__PURE__ */ e(fo.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...t });
}
function Vt({ ...t }) {
  return /* @__PURE__ */ e(fo.CollapsibleContent, { "data-slot": "collapsible-content", ...t });
}
const be = ie.forwardRef(
  ({ className: t, type: n, clearable: a = !1, onClear: o, ...r }, s) => {
    const [l, d] = ie.useState(r.value || ""), c = r.value !== void 0, u = c ? r.value : l, m = (h) => {
      c || d(h.target.value), r.onChange && r.onChange(h);
    }, f = () => {
      o ? o() : c || d(""), s && typeof s == "object" && s.current && s.current.focus();
    }, p = a && u && String(u).length > 0;
    return a ? /* @__PURE__ */ i("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: n,
          className: D(
            "flex h-9 w-full rounded-md border border-input bg-popover px-3 py-1 text-base shadow-none hover:border-primary transition-colors file:border-0 file:bg-transparent file:text-font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            p && "pr-8",
            t
          ),
          ref: s,
          value: u,
          onChange: m,
          ...r
        }
      ),
      p && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: f,
          className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors hover:cursor-pointer",
          tabIndex: -1,
          children: /* @__PURE__ */ e(De, { size: 16 })
        }
      )
    ] }) : /* @__PURE__ */ e(
      "input",
      {
        type: n,
        className: D(
          "flex h-9 w-full rounded-md border border-input bg-popover px-3 py-1 text-base shadow-none hover:border-primary transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          t
        ),
        ref: s,
        ...r
      }
    );
  }
);
be.displayName = "Input";
const Ee = ie.forwardRef(({ className: t, orientation: n = "horizontal", decorative: a = !0, ...o }, r) => /* @__PURE__ */ e(Yi.Root, { ref: r, decorative: a, orientation: n, className: D("shrink-0 bg-border", n === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t), ...o }));
Ee.displayName = Yi.Root.displayName;
const hc = We.Root, gc = We.Portal, cr = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(We.Overlay, { className: D("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t), ...n, ref: a }));
cr.displayName = We.Overlay.displayName;
const fc = hn("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
}), dr = ie.forwardRef(({ side: t = "right", className: n, children: a, ...o }, r) => {
  const s = mn();
  return /* @__PURE__ */ i(gc, { container: s, children: [
    /* @__PURE__ */ e(cr, {}),
    /* @__PURE__ */ i(We.Content, { ref: r, className: D(fc({ side: t }), n), ...o, children: [
      /* @__PURE__ */ i(We.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] }),
      a
    ] })
  ] });
});
dr.displayName = We.Content.displayName;
const ur = ({ className: t, ...n }) => /* @__PURE__ */ e("div", { className: D("flex flex-col space-y-2 text-center sm:text-left", t), ...n });
ur.displayName = "SheetHeader";
const mr = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(We.Title, { ref: a, className: D("text-lg font-semibold text-foreground", t), ...n }));
mr.displayName = We.Title.displayName;
const pr = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(We.Description, { ref: a, className: D("text-sm text-muted-foreground", t), ...n }));
pr.displayName = We.Description.displayName;
function Ve({ className: t, ...n }) {
  return /* @__PURE__ */ e("div", { className: D("animate-pulse rounded-md bg-primary/10", t), ...n });
}
const bc = sn.Provider, vo = sn.Root, xo = sn.Trigger, Sa = ie.forwardRef(({ className: t, sideOffset: n = 4, ...a }, o) => {
  const r = mn();
  return /* @__PURE__ */ e(sn.Portal, { container: r, children: /* @__PURE__ */ e(sn.Content, { ref: o, sideOffset: n, className: D("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t), ...a }) });
});
Sa.displayName = sn.Content.displayName;
const Ra = 768;
function vc() {
  const [t, n] = g(void 0);
  return M(() => {
    const a = window.matchMedia(`(max-width: ${Ra - 1}px)`), o = () => {
      n(window.innerWidth < Ra);
    };
    return a.addEventListener("change", o), n(window.innerWidth < Ra), () => a.removeEventListener("change", o);
  }, []), !!t;
}
const xc = "sidebar_state", yc = 3600 * 24 * 7, Nc = "14rem", wc = "18rem", Cc = "3rem", Sc = "b", hr = ie.createContext(null);
function Vn() {
  const t = ie.useContext(hr);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function Ac({
  defaultOpen: t = !0,
  open: n,
  onOpenChange: a,
  className: o,
  style: r,
  children: s,
  ...l
}) {
  const d = vc(), [c, u] = ie.useState(!1), [m, f] = ie.useState(t), p = n ?? m, h = ie.useCallback(
    (v) => {
      const x = typeof v == "function" ? v(p) : v;
      a ? a(x) : f(x), document.cookie = `${xc}=${x}; path=/; max-age=${yc}`;
    },
    [a, p]
  ), b = ie.useCallback(() => d ? u((v) => !v) : h((v) => !v), [d, h, u]);
  ie.useEffect(() => {
    const v = (x) => {
      x.key === Sc && (x.metaKey || x.ctrlKey) && (x.preventDefault(), b());
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [b]);
  const C = p ? "expanded" : "collapsed", y = ie.useMemo(
    () => ({
      state: C,
      open: p,
      setOpen: h,
      isMobile: d,
      openMobile: c,
      setOpenMobile: u,
      toggleSidebar: b
    }),
    [C, p, h, d, c, u, b]
  );
  return /* @__PURE__ */ e(hr.Provider, { value: y, children: /* @__PURE__ */ e(bc, { delayDuration: 0, children: /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Nc,
        "--sidebar-width-icon": Cc,
        ...r
      },
      className: D("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", o),
      ...l,
      children: s
    }
  ) }) });
}
function Dc({
  side: t = "left",
  variant: n = "sidebar",
  collapsible: a = "offcanvas",
  className: o,
  children: r,
  ...s
}) {
  const { isMobile: l, state: d, openMobile: c, setOpenMobile: u } = Vn();
  return a === "none" ? /* @__PURE__ */ e("div", { "data-slot": "sidebar", className: D("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", o), ...s, children: r }) : l ? /* @__PURE__ */ i(hc, { open: c, onOpenChange: u, ...s, children: [
    /* @__PURE__ */ i(ur, { className: "sr-only", children: [
      /* @__PURE__ */ e(mr, { children: "Sidebar" }),
      /* @__PURE__ */ e(pr, { children: "Displays the mobile sidebar." })
    ] }),
    /* @__PURE__ */ e(
      dr,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": wc
        },
        side: t,
        children: /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-col", children: r })
      }
    )
  ] }) : /* @__PURE__ */ i("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": d, "data-collapsible": d === "collapsed" ? a : "", "data-variant": n, "data-side": t, "data-slot": "sidebar", children: [
    /* @__PURE__ */ e("div", { className: D("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear h-[calc(100svh-var(--header-height))]", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", n === "floating" || n === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }),
    /* @__PURE__ */ e(
      "div",
      {
        className: D(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          n === "floating" || n === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o
        ),
        ...s,
        children: /* @__PURE__ */ e("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: r })
      }
    )
  ] });
}
function Tc({ className: t, ...n }) {
  return /* @__PURE__ */ e("main", { "data-slot": "sidebar-inset", className: D("relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", t), ...n });
}
function Ic({ className: t, ...n }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: D("flex flex-col gap-2 p-2", t), ...n });
}
function Pc({ className: t, ...n }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: D("flex flex-col gap-2 p-2", t), ...n });
}
function kc({ className: t, ...n }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: D("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), ...n });
}
function _c({ className: t, ...n }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: D("relative flex w-full min-w-0 flex-col p-2", t), ...n });
}
function Ec({ className: t, asChild: n = !1, ...a }) {
  return /* @__PURE__ */ e(n ? ba : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: D("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t), ...a });
}
function gr({ className: t, ...n }) {
  return /* @__PURE__ */ e("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: D("flex w-full min-w-0 flex-col gap-1", t), ...n });
}
function Xa({ className: t, ...n }) {
  return /* @__PURE__ */ e("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: D("group/menu-item relative", t), ...n });
}
const zc = hn("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function la({
  asChild: t = !1,
  isActive: n = !1,
  variant: a = "default",
  size: o = "default",
  tooltip: r,
  className: s,
  ...l
}) {
  const d = t ? ba : "button", { isMobile: c, state: u } = Vn(), m = /* @__PURE__ */ e(d, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": o, "data-active": n, className: D(zc({ variant: a, size: o }), s), ...l });
  return r ? (typeof r == "string" && (r = {
    children: r
  }), /* @__PURE__ */ i(vo, { children: [
    /* @__PURE__ */ e(xo, { asChild: !0, children: m }),
    /* @__PURE__ */ e(Sa, { side: "right", align: "center", hidden: u !== "collapsed" || c, ...r })
  ] })) : m;
}
function Fc({ className: t, ...n }) {
  return /* @__PURE__ */ e("ul", { "data-slot": "sidebar-menu-sub", "data-sidebar": "menu-sub", className: D("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", t), ...n });
}
function Lc({ className: t, ...n }) {
  return /* @__PURE__ */ e("li", { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: D("group/menu-sub-item relative", t), ...n });
}
function Rc({
  asChild: t = !1,
  size: n = "md",
  isActive: a = !1,
  className: o,
  ...r
}) {
  return /* @__PURE__ */ e(t ? ba : "a", { "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button", "data-size": n, "data-active": a, className: D("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", n === "sm" && "text-xs", n === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", o), ...r });
}
const $c = "SIDEBAR_HIDDEN_ITEMS", Mc = ["/", "/settings"];
function ca(t) {
  return Mc.includes(t);
}
function yo(t) {
  const n = t?.[$c];
  return Array.isArray(n) ? n.filter((a) => typeof a == "string") : [];
}
function Ko(t, n) {
  return !ca(t) && n.includes(t);
}
function Oc(t, n) {
  return n.some((a) => ca(a) || a === "/" ? !1 : t === a || t.startsWith(a + "/"));
}
function jc(t) {
  const n = [];
  for (const a of t)
    for (const o of a.items)
      if (n.push({ url: o.url, titleKey: o.title, locked: ca(o.url), depth: 0 }), "items" in o && Array.isArray(o.items))
        for (const r of o.items)
          n.push({ url: r.url, titleKey: r.title, locked: ca(r.url), depth: 1, parentUrl: o.url });
  return n;
}
const Bc = (t, n) => {
  const a = n.replace(/:[^/]+/g, "[^/]+").replace(/\//g, "\\/");
  return new RegExp(`^${a}$`).test(t);
};
function Yo({ section: t }) {
  const n = Fe(), a = fa(), o = et(), { state: r } = Vn(), { t: s } = K("navigation"), l = n?.manifest.name || void 0, d = l ? `/apps/${l}` : "", c = (h) => {
    window.location.hash && d && window.location.pathname.includes(d) ? (window.history.pushState(null, "", `${d}${h}`), window.location.reload()) : o(h);
  }, u = (h) => {
    const C = d && a.pathname.startsWith(d) ? `${d}${h}` : h;
    return h.includes(":") ? Bc(a.pathname, C) : h === "/" ? a.pathname === C : `${a.pathname}${window.location.hash}` === C || a.pathname.startsWith(C + "/");
  }, m = (h) => "items" in h && Array.isArray(h.items), f = yo(n?.settings), p = t.items.filter((h) => !Ko(h.url, f)).map(
    (h) => m(h) ? { ...h, items: h.items.filter((b) => !Ko(b.url, f)) } : h
  ).filter((h) => !(m(h) && h.items.length === 0));
  return p.length === 0 ? null : /* @__PURE__ */ i(_c, { children: [
    /* @__PURE__ */ e(Ec, { children: s(t.title) }),
    /* @__PURE__ */ e(gr, { children: p.map((h) => {
      if (m(h)) {
        const b = r === "collapsed", C = h.items.some((v) => u(v.url)), y = b && C;
        return /* @__PURE__ */ e(
          Bt,
          {
            asChild: !0,
            defaultOpen: !0,
            className: "group/collapsible",
            children: /* @__PURE__ */ i(Xa, { children: [
              /* @__PURE__ */ e(Ht, { asChild: !0, children: /* @__PURE__ */ i(
                la,
                {
                  tooltip: s(h.tooltip),
                  className: "hover:cursor-pointer",
                  isActive: y,
                  onClick: (v) => {
                    b && h.url && (v.preventDefault(), c(h.url));
                  },
                  children: [
                    /* @__PURE__ */ e(h.icon, {}),
                    /* @__PURE__ */ e("span", { children: s(h.title) }),
                    /* @__PURE__ */ e(mt, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                  ]
                }
              ) }),
              /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ e(Fc, { children: h.items.map((v) => /* @__PURE__ */ e(Lc, { children: /* @__PURE__ */ e(
                Rc,
                {
                  asChild: !0,
                  isActive: u(v.url),
                  className: "hover:cursor-pointer",
                  children: /* @__PURE__ */ i("div", { onClick: () => c(v.url), children: [
                    /* @__PURE__ */ e(v.icon, {}),
                    /* @__PURE__ */ e("span", { children: s(v.title) })
                  ] })
                }
              ) }, v.title)) }) })
            ] })
          },
          h.title
        );
      } else
        return /* @__PURE__ */ e(
          Xa,
          {
            children: /* @__PURE__ */ e(
              la,
              {
                asChild: !0,
                tooltip: s(h.tooltip),
                className: "hover:cursor-pointer",
                isActive: u(h.url),
                children: /* @__PURE__ */ i("div", { onClick: () => c(h.url), children: [
                  /* @__PURE__ */ e(h.icon, {}),
                  /* @__PURE__ */ e("span", { children: s(h.title) })
                ] })
              }
            )
          },
          h.title
        );
    }) })
  ] });
}
const da = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(vn.Root, { ref: a, className: D("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md", t), ...n }));
da.displayName = vn.Root.displayName;
const ua = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(vn.Image, { ref: a, className: D("aspect-square h-full w-full", t), ...n }));
ua.displayName = vn.Image.displayName;
const ma = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(vn.Fallback, { ref: a, className: D("flex h-full w-full items-center justify-center rounded-full bg-muted", t), ...n }));
ma.displayName = vn.Fallback.displayName;
const nn = Oe.Root, an = Oe.Trigger, Tn = Oe.Group, Hc = ie.forwardRef(({ className: t, inset: n, children: a, ...o }, r) => /* @__PURE__ */ i(Oe.SubTrigger, { ref: r, className: D("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", n && "pl-8", t), ...o, children: [
  a,
  /* @__PURE__ */ e(mt, { className: "ml-auto" })
] }));
Hc.displayName = Oe.SubTrigger.displayName;
const Vc = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(Oe.SubContent, { ref: a, className: D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t), ...n }));
Vc.displayName = Oe.SubContent.displayName;
const jt = ie.forwardRef(({ className: t, sideOffset: n = 4, ...a }, o) => {
  const r = mn();
  return /* @__PURE__ */ e(Oe.Portal, { container: r, children: /* @__PURE__ */ e(Oe.Content, { ref: o, sideOffset: n, className: D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t), ...a }) });
});
jt.displayName = Oe.Content.displayName;
const at = ie.forwardRef(({ className: t, inset: n, ...a }, o) => /* @__PURE__ */ e(Oe.Item, { ref: o, className: D("relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", n && "pl-8", t), ...a }));
at.displayName = Oe.Item.displayName;
const qc = ie.forwardRef(({ className: t, children: n, checked: a, ...o }, r) => /* @__PURE__ */ i(Oe.CheckboxItem, { ref: r, className: D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t), checked: a, ...o, children: [
  /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(Oe.ItemIndicator, { children: /* @__PURE__ */ e(Me, { className: "h-4 w-4" }) }) }),
  n
] }));
qc.displayName = Oe.CheckboxItem.displayName;
const Gc = ie.forwardRef(({ className: t, children: n, ...a }, o) => /* @__PURE__ */ i(Oe.RadioItem, { ref: o, className: D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t), ...a, children: [
  /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(Oe.ItemIndicator, { children: /* @__PURE__ */ e(Bs, { className: "h-2 w-2 fill-current" }) }) }),
  n
] }));
Gc.displayName = Oe.RadioItem.displayName;
const fr = ie.forwardRef(({ className: t, inset: n, ...a }, o) => /* @__PURE__ */ e(Oe.Label, { ref: o, className: D("px-2 py-1.5 text-sm font-semibold", n && "pl-8", t), ...a }));
fr.displayName = Oe.Label.displayName;
const Rt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(Oe.Separator, { ref: a, className: D("-mx-1 my-1 h-px bg-muted", t), ...n }));
Rt.displayName = Oe.Separator.displayName;
const na = "vertesia.psea.dashboardViewPreference", pa = "vertesia.psea.lastPanelState", ln = "vertesia.psea.lastViewMode", Xo = "vertesia.psea.collectionsViewMode", Ze = "vertesia.psea.renditionId", br = "vertesia.psea.recentlyViewedDocuments", vr = "vertesia.psea.language", xr = "vertesia.psea.colorScheme", Qa = /* @__PURE__ */ new Set();
function Wc(t) {
  return Qa.add(t), () => Qa.delete(t);
}
function Uc() {
  return Vl();
}
function Kc() {
  const t = Ts(Wc, Uc), n = J((a) => {
    localStorage.setItem(xr, a), nr(a), Qa.forEach((o) => o());
  }, []);
  return { colorScheme: t, setColorScheme: n };
}
const Yc = { filterPlaceholder: "Dienste filtern...", tags: "Tags", tagsPlaceholder: 'Tags durch "," getrennt eingeben. Mit Enter bestätigen', tagsHint: "z.B. Agent, Chat", version: "Version", versionPlaceholder: "Version eingeben. Mit Enter bestätigen", versionHint: "Versionsnummer eingeben", noServicesAvailable: "Keine Dienste verfügbar", noServicesHint: "Versuchen Sie, Ihre Suchkriterien anzupassen.", contactAdmin: "Wenden Sie sich an Ihren Administrator, um einige zu veröffentlichen" }, Xc = { noDescription: "Keine Beschreibung verfügbar", notFound: "Interaktion nicht gefunden", notFoundDescription: "Die gesuchte Interaktion existiert nicht", backToAgents: "Zurück zu Agenten", validationError: "Validierungsfehler", validationNameDescription: "Bitte geben Sie sowohl Name als auch Beschreibung an", validationFormErrors: "Bitte beheben Sie die Fehler im Formular", failedCreateCollection: "Berichtssammlung konnte nicht erstellt werden", failedCreateCollectionDescription: "Bitte versuchen Sie es später erneut.", failedStartReport: "Berichtserstellung konnte nicht gestartet werden", redirecting: "Sie werden in wenigen Sekunden weitergeleitet.", runAgent: "Agent ausführen", executionName: "Ausführungsname", executionNameHelp: "Geben Sie dieser Ausführung einen eindeutigen Namen zur späteren Identifikation", executionNamePlaceholder: "z.B. Kundensupport-Bot-Ausführung", executionDescription: "Ausführungsbeschreibung", executionDescriptionHelp: "Beschreiben Sie den Zweck oder Kontext dieser Ausführung", executionDescriptionPlaceholder: "z.B. Test des Kundensupport-Bots mit neuen FAQ-Daten", executionDetails: "Ausführungsdetails", executionDetailsDescription: "Name und Beschreibung dieser Ausführung", interactionLabel: "Interaktion", interactionDescription: "Der Agent, den Sie ausführen", parameters: "Parameter", parametersDescription: "Konfigurationswerte für diese Ausführung" }, Qc = { agentNotFound: "Agent nicht gefunden", agentNotFoundDescription: "Der gesuchte Agent existiert nicht", totalExecutions: "Gesamtausführungen", allTime: "Gesamtzeitraum", successful: "Erfolgreich", failed: "Fehlgeschlagen", running: "Laufend", currentlyInProgress: "Derzeit in Bearbeitung", executions: "Ausführungen", noExecutionsYet: "Noch keine Ausführungen", runFirstExecution: "Starten Sie Ihre erste Ausführung", statusCompleted: "Abgeschlossen", statusFailed: "Fehlgeschlagen", statusRunning: "Laufend", statusUnknown: "Unbekannt" }, Zc = { executionDetails: "Ausführungsdetails", executionDetailsDescription: "Geben Sie einen Namen und eine Beschreibung für diese Ausführung an", selectDocument: "Dokument auswählen", selectDocuments: "Dokumente auswählen", selectDocumentDescription: "Wählen Sie ein Dokument zur Verarbeitung", selectDocumentsDescription: "Wählen Sie Dokumente zur Verarbeitung", uploadMedia: "Medien hochladen", uploadMediaFiles: "Mediendateien hochladen", uploadMediaDescription: "Laden Sie Mediendateien zur Verarbeitung hoch", selectObject: "Objekt auswählen", selectObjects: "Objekte auswählen", selectObjectDescription: "Konfigurieren Sie die Objekteigenschaften", selectObjectsDescription: "Konfigurieren Sie die Objekteigenschaften", configureParameters: "Parameter konfigurieren", configureParametersDescription: "Legen Sie die Parameter für diese Ausführung fest", reviewExecute: "Überprüfen und ausführen", reviewExecuteDescription: "Überprüfen Sie Ihre Konfiguration und starten Sie die Ausführung", executionComplete: "Ausführung abgeschlossen", executionCompleteDescription: "Ihre Ausführung ist abgeschlossen" }, Jc = { media: "Medien", document: "Dokument", mediaFiles: "Mediendateien", documents: "Dokumente", selected: "Ausgewählt", selectItems: "{{itemType}} auswählen", clickToView: "Klicken, um {{name}} anzuzeigen", viewDocument: "Dokument anzeigen" }, ed = { documentSummarizer: { title: "Dokumentenzusammenfassung", description: "Fassen Sie lange Dokumente, Artikel und Berichte automatisch in prägnanten Übersichten zusammen" }, codeGenerator: { title: "Code-Generator", description: "Generieren Sie Code-Snippets und Vorlagen in verschiedenen Programmiersprachen" }, emailComposer: { title: "E-Mail-Verfasser", description: "Verfassen Sie professionelle E-Mails mit anpassbarem Ton und Stil" }, dataExtractor: { title: "Datenextraktor", description: "Extrahieren Sie strukturierte Daten aus unstrukturiertem Text, PDFs und Bildern" }, translationHub: { title: "Übersetzungszentrale", description: "Übersetzen Sie Inhalte kontextbezogen zwischen mehreren Sprachen" }, contentRewriter: { title: "Inhaltsumschreiber", description: "Schreiben Sie Inhalte um und paraphrasieren Sie sie unter Beibehaltung der ursprünglichen Bedeutung" }, sentimentAnalyzer: { title: "Stimmungsanalyse", description: "Analysieren Sie die Stimmung und den emotionalen Ton von Kundenfeedback und Bewertungen" }, meetingNotes: { title: "Besprechungsnotizen", description: "Erstellen Sie Besprechungszusammenfassungen und Aufgabenlisten aus Transkripten" }, researchAssistant: { title: "Recherche-Assistent", description: "Führen Sie Recherchen durch und stellen Sie Ergebnisse aus mehreren Quellen zusammen" }, socialMediaWriter: { title: "Social-Media-Texter", description: "Erstellen Sie ansprechende Social-Media-Beiträge, optimiert für jede Plattform" }, contractAnalyzer: { title: "Vertragsanalyse", description: "Prüfen Sie Verträge und Rechtsdokumente und heben Sie wichtige Klauseln und Risiken hervor" }, productDescriptions: { title: "Produktbeschreibungen", description: "Erstellen Sie überzeugende Produktbeschreibungen für E-Commerce-Angebote" }, knowledgeBase: { title: "Wissensdatenbank", description: "Durchsuchen und abrufen von Informationen aus den Dokumenten Ihrer Organisation" }, reportGenerator: { title: "Berichtsgenerator", description: "Erstellen Sie detaillierte Berichte und Analysezusammenfassungen aus Rohdaten" }, taskPlanner: { title: "Aufgabenplaner", description: "Gliedern Sie komplexe Projekte in umsetzbare Aufgaben und Zeitpläne auf" }, faqGenerator: { title: "FAQ-Generator", description: "Erstellen Sie umfassende FAQ-Bereiche aus der Produktdokumentation" }, assistant: { title: "Assistent", description: "Erhalten Sie KI-gestützte Unterstützung bei Ihren Inhalten und Aufgaben" }, seoTool: { title: "SEO-Werkzeug", description: "Erstellen und optimieren Sie SEO-Inhalte für bessere Sichtbarkeit in Suchmaschinen" }, artGeneration: { title: "Bilderzeugung", description: "Erzeugen Sie beeindruckende Kunstwerke und Bilder mit KI-Technologie" }, reverseSearch: { title: "Rückwärtssuche", description: "Suchen Sie nach ähnlichen Bildern und Inhalten mithilfe der Rückwärts-Bildersuche" }, basicAgent: { title: "Basis-Agent", description: "Chatten Sie mit einem einfachen KI-Agenten für verschiedene Aufgaben und Anfragen" } }, td = { uploadNew: "Neu hochladen", uploadMedia: "Medien hochladen", uploadDocument: "Dokument hochladen", dragDropMedia: "Mediendateien hierher ziehen und ablegen", dragDropDocuments: "Dokumente hierher ziehen und ablegen", uploading: "Wird hochgeladen...", progressComplete: "{{progress}}% abgeschlossen", selectFiles: "Dateien zum Hochladen auswählen" }, nd = {
  search: Yc,
  execution: Xc,
  dashboard: Qc,
  steps: Zc,
  media: Jc,
  tools: ed,
  upload: td
}, ad = "Sammlungen suchen...", od = "Sammlung erstellen", id = "Noch keine {{label}} Sammlungen vorhanden", rd = "Noch keine Sammlungen vorhanden", sd = "Keine {{label}} Sammlungen gefunden", ld = "Keine Sammlungen gefunden", cd = "Versuchen Sie, Ihre Suche anzupassen", dd = "Erstellen Sie Ihre erste Sammlung, um loszulegen", ud = "persönlich", md = "Organisation", pd = { notFound: "Sammlung nicht gefunden", all: "Alle", collections: "Sammlungen", collectionsCount: "Sammlungen ({{count}})", documents: "Dokumente", documentsCount: "Dokumente ({{count}})", total: "gesamt", noItems: "Keine Einträge in dieser Sammlung", noItemsHelp: "Fügen Sie Dokumente oder Sammlungen hinzu, um loszulegen", noFilterResults: "Keine {{filter}} gefunden", noFilterResultsHelp: "Versuchen Sie, den Filter zu ändern" }, hd = { title: "Zur Sammlung hinzufügen", titleWithCount: "{{count}} Dokumente zur Sammlung hinzufügen", selectExisting: "Vorhandene auswählen", createNew: "Neu erstellen", searchPlaceholder: "Sammlungen suchen...", noCollectionsFound: "Keine Sammlungen gefunden", createNewCollection: "Neue Sammlung erstellen", selectedCount_one: "{{count}} Sammlung ausgewählt", selectedCount_other: "{{count}} Sammlungen ausgewählt", nameRequired: "Name *", namePlaceholder: "Sammlungsname eingeben", descriptionLabel: "Beschreibung", descriptionPlaceholder: "Sammlungsbeschreibung eingeben (optional)", typeLabel: "Typ", typePlaceholder: "Typ auswählen (optional)", groupsLabel: "Gruppen", loadingGroups: "Gruppen werden geladen...", noGroupsAvailable: "Keine Gruppen verfügbar", successAdded: "Erfolgreich zu {{count}} {{label}} hinzugefügt", errorAdding: "Fehler beim Hinzufügen zu Sammlungen", errorCreating: "Fehler beim Erstellen der Sammlung", documentsAdded: "{{count}} {{label}} hinzugefügt", successCreatedAndAdded: 'Erfolgreich zu "{{name}}" hinzugefügt', adding: "Wird hinzugefügt...", createAndAdd: "Erstellen & Hinzufügen", addToCollectionBtn: "Zur Sammlung hinzufügen", addToCollectionsBtn: "Zu {{count}} Sammlungen hinzufügen" }, gd = {
  searchPlaceholder: ad,
  createCollection: od,
  noCollectionsYet: id,
  noCollectionsYetGeneric: rd,
  noCollectionsFound: sd,
  noCollectionsFoundGeneric: ld,
  tryAdjustingSearch: cd,
  createFirstCollection: dd,
  personal: ud,
  organization: md,
  detail: pd,
  addToCollection: hd
}, fd = { save: "Speichern", saving: "Wird gespeichert...", cancel: "Abbrechen", delete: "Löschen", deleting: "Wird gelöscht...", confirm: "Bestätigen", add: "Hinzufügen", remove: "Entfernen", search: "Suchen", filter: "Filtern", filters: "Filter", clearAll: "Alles löschen", clearFilters: "Filter zurücksetzen", close: "Schließen", back: "Zurück", continue: "Weiter", execute: "Ausführen", download: "Herunterladen", downloading: "Wird heruntergeladen...", refresh: "Aktualisieren", edit: "Bearbeiten", select: "Auswählen", showPreview: "Vorschau anzeigen", hidePreview: "Vorschau ausblenden", addToCollection: "Zur Sammlung hinzufügen", logOut: "Abmelden", done: "Fertig", addItem: "Element hinzufügen", chooseExisting: "Vorhandenes auswählen", apply: "Anwenden", reset: "Zurücksetzen", upload: "Hochladen", copyLink: "Link kopieren", copied: "Kopiert!", byEmail: "Per E-Mail", copiedToClipboard: "In die Zwischenablage kopiert", showInfo: "Info anzeigen", hideInfo: "Info ausblenden", editProperties: "Eigenschaften bearbeiten", resetChat: "Chat zurücksetzen" }, bd = { loading: "Wird geladen...", loadingMore: "Weitere werden geladen...", noResults: "Keine Ergebnisse gefunden", noMoreItems: "Keine weiteren Einträge vorhanden", empty: "Keine Einträge vorhanden", error: "Fehler", errorOccurred: "Ein Fehler ist aufgetreten", loadingPreview: "Vorschau wird geladen...", noContentAvailable: "Kein Inhalt verfügbar", notSet: "Nicht festgelegt", yes: "Ja", no: "Nein", emptyList: "Leere Liste", emptyValue: "Leer", waiting: "Warten...", uploading: "Wird hochgeladen...", uploadedSuccessfully: "Erfolgreich hochgeladen", updated: "Aktualisiert", skipped: "Übersprungen", uploadFailed: "Hochladen fehlgeschlagen", comingSoon: "Demnächst verfügbar" }, vd = { title: "404 - Seite nicht gefunden", description: "Die gesuchte Seite existiert nicht." }, xd = { label: "Design", light: "Hell", dark: "Dunkel", system: "System" }, yd = { label: "Farbschema", default: "Standard", red: "Rot", orange: "Orange", yellow: "Gelb", green: "Grün", teal: "Blaugrün", blue: "Blau", indigo: "Indigo", violet: "Violett", fuchsia: "Fuchsia", pink: "Pink", rose: "Rosa", slate: "Schiefer" }, Nd = { label: "Sprache" }, wd = { label: "Dashboard", user: "Benutzer", admin: "Admin" }, Cd = "App-Portal", Sd = "mehr", Ad = "Sammlung", Dd = "Dokument", Td = "In neuem Tab öffnen", Id = "v{{version}}", Pd = "{{count}} Eintrag", kd = "{{count}} Einträge", _d = { successTitle: "Einstellungen gespeichert", successDescription: "Anwendungseinstellungen werden aktualisiert...", errorTitle: "Einstellungen konnten nicht gespeichert werden", errorDescription: "Die Einstellungen konnten nicht aktualisiert werden. Bitte versuchen Sie es erneut." }, Ed = { sm: "Klein (sm)", smHint: ">= 640px", md: "Mittel (md)", mdHint: ">= 768px", lg: "Groß (lg)", lgHint: ">= 1024px", xl: "Sehr groß (xl)", xlHint: ">= 1280px" }, zd = { name: "Name", type: "Typ", description: "Beschreibung", createdAt: "Erstellt", updatedAt: "Aktualisiert", status: "Status", createdBy: "Erstellt von", format: "Format", modified: "Geändert", inputParameters: "Eingabeparameter", property: "Eigenschaft", label: "Bezeichnung", modifier: "Bearbeiter" }, Fd = { selectIcon: "Symbol auswählen...", searchIcons: "Symbole suchen...", noIconsFound: "Keine Symbole gefunden." }, Ld = { yes: "Ja", no: "Nein" }, Rd = { searchPlaceholder: "{{label}} suchen..." }, $d = { enable: "Aktivieren", enterField: "{{field}} eingeben", selectField: "{{field}} auswählen", noPropertiesDefined: "Keine Eigenschaften für dieses Objekt definiert", noSchemaDefined: "Kein Schema für dieses Objekt definiert", noSchemaDefinedForItems: "Kein Schema für Elemente definiert", noParametersRequired: "Diese Interaktion erfordert keine Parameter", itemIndex: "Element {{index}}", noItemsAdded: "Noch keine Elemente hinzugefügt", clickAddItem: 'Klicken Sie auf "Element hinzufügen", um einen neuen Eintrag zu erstellen', enterTextHere: "Text hier eingeben...", enterValueHere: "Wert hier eingeben...", selectOrUploadDocument: "Dokument auswählen oder hochladen...", noValue: "Kein Wert", noDocumentData: "Keine Dokumentdaten verfügbar" }, Md = { uploadDocuments: "Dokumente hochladen", uploading: "Wird hochgeladen...", uploadComplete: "Hochladen abgeschlossen", addFilesDescription: "Dateien zum Hochladen hinzufügen", uploadingFiles: "{{count}} Datei wird hochgeladen", uploadingFiles_other: "{{count}} Dateien werden hochgeladen", uploadSuccess_one: "{{count}} Datei erfolgreich hochgeladen", uploadSuccess_other: "{{count}} Dateien erfolgreich hochgeladen", clickToBrowse: "Klicken Sie zum Durchsuchen oder ziehen Sie Dateien hierher", pasteFromClipboard: "Sie können auch Dateien aus der Zwischenablage einfügen", filesSelected_one: "{{count}} Datei ausgewählt", filesSelected_other: "{{count}} Dateien ausgewählt", fileLimitReached: "Dateilimit erreicht", uploadingProgress: "Dateien werden hochgeladen...", invalidFileType: "Ungültiger Dateityp", invalidFileTypeDescription: "Keine der ausgewählten Dateien entspricht den zulässigen Dateitypen", someFilesIgnored: "Einige Dateien ignoriert", filesIgnored_one: "{{count}} Datei wurde ignoriert (nicht unterstützter Typ)", filesIgnored_other: "{{count}} Dateien wurden ignoriert (nicht unterstützter Typ)", maxFilesAllowed: "Maximal {{max}} Dateien erlaubt", failedToDownload: "Datei konnte nicht heruntergeladen werden", documentNotFound: "Dokument nicht gefunden" }, Od = { selectType: "Typ auswählen", searchTypes: "Typen suchen...", noTypeFound: "Kein Typ gefunden.", selectTypes: "Typen auswählen...", selectAgents: "Agenten auswählen...", searchAgents: "Agenten suchen...", noAgentFound: "Kein Agent gefunden.", agentsSelected: "{{count}} Agent(en) ausgewählt", typesSelected: "{{count}} Typ(en) ausgewählt", selectProperty: "Eigenschaft auswählen...", searchProperties: "Eigenschaften suchen...", noPropertyFound: "Keine Eigenschaft gefunden.", noPropertiesAvailable: "Keine Eigenschaften verfügbar", typeProperties: "Typ-Eigenschaften", commonProperties: "Gemeinsame Eigenschaften", none: "Keine" }, jd = { title: "Zuletzt angesehen", noDocuments: "Keine zuletzt angesehenen Dokumente", documentsWillAppear: "Dokumente, die Sie öffnen, werden hier angezeigt" }, Bd = { chatWithDocument: "Chatten Sie mit Ihrem Dokument", askQuestions: "Stellen Sie Fragen zu <strong>{{name}}</strong> und erhalten Sie intelligente Antworten basierend auf dem Inhalt.", errorProcessing: "Entschuldigung, bei der Verarbeitung Ihrer Anfrage ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.", errorGeneral: "Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", askPlaceholder: "Stellen Sie eine Frage zu diesem Dokument...", waitingPlaceholder: "Warte auf Antwort..." }, Hd = { noContentSource: "Keine Dokumentinhaltsquelle", chat: "Chat", properties: "Eigenschaften" }, Vd = { semanticSearch: "Semantische Suche", semanticSearchPlaceholder: "Beschreiben Sie, wonach Sie suchen", propertySearch: "Eigenschaftssuche", types: "Typen", statuses: "Status", users: "Benutzer", autoSearch: "Automatische Suche", selectDateRange: "Datumsbereich auswählen", all: "Alle", contentType: "Inhaltstyp", mimeType: "MIME-Typ", scoreLabel: "Bewertung", scoreTooltip: "Die Definition eines Relevanz-Schwellenwerts ermöglicht es Ihnen zu steuern, wie streng die Suchergebnisse sein sollen. Ein Wert von 0,60 gilt in der Regel als relevante Übereinstimmung, während niedrigere Werte als weniger relevant angesehen werden.", selectFiltersToSearch: "Filter zum Suchen auswählen", selectAtLeastOneFilter: "Bitte wählen Sie mindestens einen Wert in einem Suchfilter aus, um Ergebnisse zu sehen.", searchDocuments: "Dokumente suchen...", showMore: "{{count}} weitere anzeigen", showLess: "Weniger anzeigen" }, qd = { documents: "Dokumente", selectAll: "Alle auswählen", selectRow: "Zeile auswählen", gridView: "Rasteransicht", tableView: "Tabellenansicht", listView: "Listenansicht", items: "Einträge" }, Gd = { totalDocuments: "Dokumente gesamt", allDocuments: "Alle Dokumente im System", thisWeek: "Diese Woche", documentsThisWeek: "Diese Woche hochgeladene Dokumente", thisMonth: "Diesen Monat", documentsThisMonth: "Diesen Monat hochgeladene Dokumente", thisYear: "Dieses Jahr", documentsThisYear: "Dieses Jahr hochgeladene Dokumente" }, Wd = { title: "Schnellaktionen", uploadDocument: "Dokument hochladen", searchDocuments: "Dokumente suchen", createCollection: "Sammlung erstellen", latestAgents: "Neueste Agenten" }, Ud = { activityWillAppear: "Aktivitäten werden hier angezeigt, sobald Sie Dokumente hochladen", recentActivity: "Letzte Aktivität", noActivity: "Noch keine Aktivität" }, Kd = { title: "Bannerposition anpassen", description: "Ziehen Sie zum Neupositionieren. Der helle Bereich zeigt, was auf dem Dashboard sichtbar sein wird.", zoom: "Zoom" }, Yd = { basic: "Basis", advanced: "Erweitert", propertiesGenerating: "Eigenschaften werden gerade generiert, schauen Sie gleich noch einmal vorbei." }, Xd = { nameLabel: "Name", descriptionLabel: "Beschreibung", typeLabel: "Typ", groupsLabel: "Gruppen", loadingGroups: "Gruppen werden geladen...", noGroupsAvailable: "Keine Gruppen verfügbar", enterName: "Sammlungsname eingeben", enterDescription: "Sammlungsbeschreibung eingeben (optional)", selectType: "Typ auswählen (optional)", searchItems: "Einträge suchen", addedMembers: "Hinzugefügte Mitglieder", searchDocuments: "Dokumente suchen", searchCollections: "Sammlungen suchen", clickToAdd: "Klicken Sie auf einen Eintrag, um ihn zur Sammlung hinzuzufügen", noMembersAdded: "Noch keine Mitglieder hinzugefügt.", searchAndClick: "Suchen Sie und klicken Sie auf Einträge links, um sie hinzuzufügen.", members: "Mitglieder", saveChanges: "Änderungen speichern", createCollection: "Sammlung erstellen", saveChangesDescription: "Durch Klicken auf <strong>Änderungen speichern</strong> wird diese Sammlung aktualisiert und alle Mitgliederänderungen angewendet.", createCollectionDescription: "Durch Klicken auf <strong>Sammlung erstellen</strong> wird diese Sammlung mit den angegebenen Mitgliedern erstellt.", noDescription: "Keine Beschreibung", documentCount_one: "{{count}} Dokument", documentCount_other: "{{count}} Dokumente", subCollectionCount_one: "{{count}} Untersammlung", subCollectionCount_other: "{{count}} Untersammlungen", newCount: "+{{count}} neu", noMembers: "Keine Mitglieder in dieser Sammlung", newBadge: "neu", editCollection: "Sammlung bearbeiten", createCollectionTitle: "Sammlung erstellen", editDescription: "Sammlungseigenschaften aktualisieren und Mitglieder verwalten", createDescription: "Erstellen Sie eine neue Sammlung, um Ihre Dokumente zu organisieren", saving: "Speichern...", creating: "Erstellen...", next: "Weiter", stepDetails: "Details", stepMembers: "Mitglieder", stepReview: "Überprüfung", noDocumentsFound: "Keine Dokumente gefunden.", noCollectionsFound: "Keine Sammlungen gefunden.", typeToSearchDocuments: "Tippen Sie, um Dokumente zu suchen", typeToSearchCollections: "Tippen Sie, um Sammlungen zu suchen", itemCount_one: "{{count}} Element", itemCount_other: "{{count}} Elemente", newMemberLabel: "(neu)" }, Qd = "Dokumente", Zd = "Sammlungen", Jd = "{{count}} Dokument", eu = "{{count}} Dokumente", tu = { add: "Zu Favoriten hinzufügen", remove: "Aus Favoriten entfernen", title: "Meine Favoriten", description: "Ihre Lieblingsdokumente", empty: "Sie haben noch keine Favoriten", emptyHelp: "Fügen Sie Dokumente zu Ihren Favoriten hinzu, um sie hier zu sehen", loadError: "Favoriten konnten nicht geladen werden", descriptionUser: "Lieblingsdokumente von {{name}}" }, nu = {
  actions: fd,
  states: bd,
  notFound: vd,
  theme: xd,
  colorScheme: yd,
  language: Nd,
  dashboardView: wd,
  appPortal: Cd,
  more: Sd,
  collection: Ad,
  document: Dd,
  openInNewTab: Td,
  version: Id,
  items_one: Pd,
  items_other: kd,
  settingsToast: _d,
  gridCols: Ed,
  properties: zd,
  iconPicker: Fd,
  boolean: Ld,
  search: Rd,
  form: $d,
  upload: Md,
  inputs: Od,
  recentlyViewed: jd,
  chat: Bd,
  documentPanel: Hd,
  filters: Vd,
  tables: qd,
  stats: Gd,
  quickActions: Wd,
  activityFeed: Ud,
  bannerPosition: Kd,
  propertiesPanel: Yd,
  collectionWizard: Xd,
  documents: Qd,
  collections: Zd,
  documentCount_one: Jd,
  documentCount_other: eu,
  favorites: tu
}, au = "Willkommen in Ihrer Dokumentenbibliothek", ou = "Ihre Dokumentenverwaltungsplattform zum Suchen, Organisieren und Arbeiten mit Dateien mithilfe KI-gestützter Werkzeuge", iu = "Dokumente oder Assets suchen...", ru = "Keine Ergebnisse gefunden", su = "Suchen in:", lu = "Sammlung", cu = { everywhere: "Überall", contents: "Inhalte", title: "Titel", collections: "Sammlungen" }, du = "ECM-Landschaft", uu = "Übersicht", mu = "Aktivität", pu = "Dokumente suchen...", hu = "Rasteransicht", gu = "Listenansicht", fu = "Listenansicht demnächst verfügbar", bu = "Aktuelle Dokumente", vu = "Uploads im Zeitverlauf", xu = "Speicher nach Typ", yu = "Aktivste Mitwirkende", Nu = "Diagrammvisualisierung demnächst verfügbar", wu = "Mitwirkenden-Statistiken demnächst verfügbar", Cu = { failedToLoadMore: "Weitere Bilder konnten nicht geladen werden", failedToLoadMoreDescription: "Weitere Bilder konnten nicht abgerufen werden. Bitte versuchen Sie es erneut.", failedToLoad: "Bilder konnten nicht geladen werden", failedToLoadDescription: "Die neuesten Bilder konnten nicht abgerufen werden. Bitte versuchen Sie es erneut.", searchFailed: "Suche fehlgeschlagen", searchFailedDescription: "Die semantische Suche konnte nicht ausgeführt werden. Bitte versuchen Sie es erneut." }, Su = { ask: "KI-Assistent fragen", title: "KI-Assistent", open: "KI-Assistent öffnen", minimize: "Minimieren", enlarge: "Vergrößern", shrink: "Verkleinern", starting: "Konversation wird gestartet…", empty: "Starten Sie eine Suche, um mit dem Assistenten zu sprechen.", inputPlaceholder: "Nachricht eingeben…", notConfigured: "Für die agentische Suche ist kein Agent konfiguriert.", noRunId: "Kein Agentenlauf zurückgegeben. Der Server unterstützt diese Funktion möglicherweise nicht.", startFailed: "Konversation konnte nicht gestartet werden.", tryAgain: "Erneut versuchen", searchPrefix: "Nach Dokumenten oder Inhalten suchen zu: ", send: "Senden" }, Au = {
  defaultTitle: au,
  defaultDescription: ou,
  searchPlaceholder: iu,
  noResults: ru,
  searchIn: su,
  collection: lu,
  searchModes: cu,
  ecmLandscape: du,
  overview: uu,
  activity: mu,
  searchDocuments: pu,
  gridView: hu,
  listView: gu,
  listViewComingSoon: fu,
  recentDocuments: bu,
  uploadsOverTime: vu,
  storageByType: xu,
  topContributors: yu,
  chartComingSoon: Nu,
  contributorComingSoon: wu,
  errors: Cu,
  aiAssistant: Su
}, Du = "Meine", Tu = "Alle", Iu = "Nach Name suchen...", Pu = "Kartenansicht", ku = "Tabellenansicht", _u = "Interaktion", Eu = "Erstellt von", zu = "Erstellt am", Fu = "Name", Lu = "Beschreibung", Ru = "Keine Filter verfügbar", $u = "Ausführungen konnten nicht geladen werden: {{message}}", Mu = "Keine Ausführungen gefunden", Ou = "Ausführungs-Containertyp nicht konfiguriert", ju = "Wird geladen...", Bu = { notFound: "Ausführung nicht gefunden", notFoundDescription: "Die gesuchte Ausführung existiert nicht.", encounteredError: "Bei der Ausführung ist ein Fehler aufgetreten", contactAdmin: "Bitte kontaktieren Sie Ihren Systemadministrator für weitere Informationen", agentResponse: "Agentenantwort", completedSuccessfully: "Ausführung erfolgreich abgeschlossen", executionDetails: "Ausführungsdetails", inputParameters: "Eingabeparameter" }, Hu = {
  mine: Du,
  all: Tu,
  searchPlaceholder: Iu,
  cardView: Pu,
  tableView: ku,
  interaction: _u,
  createdBy: Eu,
  createdAt: zu,
  name: Fu,
  description: Lu,
  noFiltersAvailable: Ru,
  failedToLoad: $u,
  noExecutionsFound: Mu,
  containerTypeNotConfigured: Ou,
  documentLoading: ju,
  detail: Bu
}, Vu = "Automatische Suche", qu = "Erweitert", Gu = "Einfach", Wu = "Dokumente suchen...", Uu = { download: "Herunterladen", addToCollection: "Zur Sammlung hinzufügen", delete: "Löschen", more: "mehr", errorDownloading: "Fehler beim Herunterladen des Dokuments", errorDownloadingDescription: "Beim Herunterladen des Dokuments ist ein Fehler aufgetreten.", deleteTitle: "{{typeName}} löschen", deleteConfirm: "Sind Sie sicher, dass Sie dieses {{typeName}} löschen möchten?", deleteSuccess: "{{typeName}} gelöscht", deleteSuccessDescription: "{{typeName}} {{id}} wurde erfolgreich gelöscht", deleteError: "Fehler beim Löschen von {{typeName}}" }, Ku = { type: "Typ", typePlaceholder: "Nach Typ suchen", status: "Status", statusPlaceholder: "Nach Status suchen", createdBy: "Erstellt von", createdByPlaceholder: "Nach Ersteller suchen" }, Yu = "{{count}} ausgewählt", Xu = { title: "Keine Dokumente gefunden", description: "Passen Sie Ihre Filter oder Suchbegriffe an" }, Qu = {
  autoSearch: Vu,
  advanced: qu,
  basic: Gu,
  searchPlaceholder: Wu,
  document: Uu,
  facets: Ku,
  selectedCount: Yu,
  noDocuments: Xu
}, Zu = { application: "Anwendung", administration: "Verwaltung" }, Ju = { dashboard: { title: "Dashboard", tooltip: "Dashboard" }, advancedSearch: { title: "Erweiterte Suche", tooltip: "Erweiterte Suche", description: "Durchsuchen und erkunden Sie Ihre Dokumente" }, collections: { title: "Sammlungen", tooltip: "Sammlungen", description: "Organisieren und verwalten Sie Ihre Sammlungen" }, collectionsPersonal: { title: "Persönlich", tooltip: "Persönliche Sammlungen" }, collectionsOrganization: { title: "Organisation", tooltip: "Organisationssammlungen" }, agents: { title: "Agenten", tooltip: "Agenten", description: "Konfigurieren und verwalten Sie Ihre KI-Agenten" }, browseAgents: { title: "Agenten durchsuchen", tooltip: "Agenten durchsuchen" }, executions: { title: "Ausführungen", tooltip: "Agenten-Ausführungen" }, settings: { title: "Einstellungen", tooltip: "Einstellungen", description: "Anwendungseinstellungen und Konfigurationen verwalten" }, favorites: { title: "Favoriten", tooltip: "Favoriten", description: "Ihre Lieblingsdokumente" } }, em = {
  sections: Zu,
  items: Ju
}, tm = { application: "Anwendung", dashboard: "Dashboard", library: "Erweiterte Suche", whitelist: "Whitelist", sidebar: "Seitenleiste", agents: "Agenten", properties: "Eigenschaften", rendition: "Darstellung", search: "Suche", language: "Sprache", colorScheme: "Farbschema", favorites: "Favoriten" }, nm = { title: "Anwendung", description: "Passen Sie den Anwendungsnamen, das Symbol und das Branding in der Seitenleiste und der Breadcrumb-Navigation an.", applicationName: "Anwendungsname", applicationNamePlaceholder: "ECM", applicationNameHelp: "Passen Sie den Anwendungsnamen in der Kopfzeile der Seitenleiste an.", leaveEmptyDefault: "Leer lassen, um den Standardnamen zu verwenden: ", breadcrumbLabel: "Breadcrumb-Bezeichnung", breadcrumbPlaceholder: "Dashboard", breadcrumbHelp: "Passen Sie die Breadcrumb-Bezeichnung in der Kopfnavigation an.", applicationIcon: "Anwendungssymbol", iconTabIcon: "Symbol", iconTabImage: "Bild", uploadImage: "Bild hochladen", chooseFromLibrary: "Aus der Bibliothek auswählen", uploadFailed: "Bild konnte nicht hochgeladen werden", iconImageHelp: "Laden Sie ein Bild hoch oder wählen Sie eines aus der Bibliothek als Anwendungssymbol. Es wird auf transparentem Hintergrund angezeigt, daher eignen sich Bilder mit Transparenz (PNG) am besten.", iconBackgroundColor: "Symbol-Hintergrundfarbe", preview: "Vorschau" }, am = { title: "Dashboard", description: "Konfigurieren Sie das Erscheinungsbild und Verhalten des Benutzer-Dashboards.", titleLabel: "Titel", titlePlaceholder: "Willkommen in Ihrer Dokumentenbibliothek", titleHelp: "Wird als Hauptüberschrift auf dem Dashboard angezeigt.", descriptionLabel: "Beschreibung", descriptionPlaceholder: "Ihre Dokumentenverwaltungsplattform zum Suchen, Organisieren und Arbeiten mit Dateien mithilfe KI-gestützter Werkzeuge", descriptionHelp: "Wird unterhalb des Titels auf dem Dashboard angezeigt.", backgroundImage: "Hintergrundbild", backgroundPreviewAlt: "Dashboard-Hintergrund Vorschau", selectImage: "Bild auswählen", changeImage: "Bild ändern", adjustPosition: "Position anpassen", backgroundHelp: "Wird als Hero-Hintergrund auf dem Dashboard angezeigt. Bei fehlender Einstellung wird das Standardbild verwendet.", bannerRenditionSize: "Banner-Darstellungsgröße", bannerRenditionSizeHelp: "Maximale Breite/Höhe in Pixeln für die Banner-Darstellung. Höhere Werte erzeugen schärfere Bilder, laden aber langsamer.", bannerMaxHeight: "Maximale Bannerhöhe (px)", bannerMaxHeightHelp: "Höhe des Banners, wenn die Seite nicht gescrollt ist.", bannerMinHeight: "Minimale Bannerhöhe (px)", bannerMinHeightHelp: "Höhe des Banners im vollständig eingeklappten Zustand nach dem Scrollen.", displayMode: "Dashboard-Anzeige", displayModeOptions: { imageGrid: "Raster der neuesten Dokumente", recentlyViewed: "Zuletzt angesehen" }, displayModeHelp: { imageGrid: "Ein Raster der neuesten Dokumente mit unendlichem Scrollen anzeigen.", recentlyViewed: "Eine Liste der zuletzt vom Benutzer angesehenen Dokumente anzeigen." }, imageGridLayout: "Bildraster-Layout", imageGridLayoutHelp: "Konfigurieren Sie die Anzahl der angezeigten Elemente pro Zeile für jede Bildschirmgröße und wie viele Elemente pro Seite geladen werden.", itemsPerPage: "Elemente pro Seite", itemsPerPageHelp: "Anzahl der Elemente, die pro Suchanfrage geladen werden (für endloses Scrollen).", uploadImage: "Bild hochladen", uploadFailed: "Bild konnte nicht hochgeladen werden", invalidImage: "Bitte wählen Sie eine Bilddatei unter 20 MB.", agenticSearch: { label: "Agent für agentische Suche", placeholder: "Agent auswählen…", none: "Keiner (Schaltfläche ausblenden)", help: "Agent, der von der Schaltfläche « KI-Assistent fragen » verwendet wird. Auf Keiner lassen, um die Schaltfläche auszublenden." } }, om = { title: "Erweiterte Suche", description: "Konfigurieren Sie das Rasterlayout der erweiterten Suche für verschiedene Bildschirmgrößen.", gridLayout: "Rasterlayout", gridLayoutHelp: "Anzahl der Elemente pro Zeile, wenn das erweiterte Suchfeld geschlossen ist.", advancedSearchLayout: "Erweitertes Suchlayout", advancedSearchLayoutHelp: "Anzahl der Elemente pro Zeile, wenn das erweiterte Suchfeld geöffnet ist." }, im = { title: "Whitelist", description: "Einschränken, welche Dokumenttypen in der Bibliothek und im Dashboard sichtbar sind. Wenn leer, werden alle Typen angezeigt.", dashboardWhitelist: "Dashboard-Whitelist", dashboardWhitelistHelp: "Wenn nicht leer, werden nur diese Dokumenttypen auf dem Dashboard angezeigt.", libraryWhitelist: "Bibliothek-Whitelist", libraryWhitelistHelp: "Wenn nicht leer, werden nur diese Dokumenttypen in den Bibliotheks-Suchergebnissen angezeigt.", collectionWhitelist: "Sammlungs-Whitelist", collectionWhitelistHelp: "Wenn nicht leer, stehen nur diese Typen beim Erstellen einer Sammlung zur Verfügung.", selectTypesPlaceholder: "Typen für die Whitelist auswählen..." }, rm = { title: "Seitenleiste", description: "Wählen Sie aus, welche Elemente in der Navigationsleiste angezeigt werden. Neue Elemente werden standardmäßig angezeigt; ausgeblendete Elemente werden auch beim direkten URL-Zugriff blockiert und auf die Startseite umgeleitet.", alwaysVisible: "Immer sichtbar", help: "Startseite und Einstellungen können nicht ausgeblendet werden, damit die Seitenleiste nutzbar bleibt.", hideItem: "{{item}} ausblenden", showItem: "{{item}} anzeigen" }, sm = { title: "Agenten", description: "Verwalten Sie, welche Agenten in der Anwendung sichtbar sind. Deaktivierte Agenten werden in den Suchergebnissen ausgeblendet.", noAgentsFound: "Keine Agenten gefunden.", enabledCount: "{{enabledCount}} von {{totalCount}} Agentenversion aktiviert", enabledCount_other: "{{enabledCount}} von {{totalCount}} Agentenversionen aktiviert", columns: { enabled: "Aktiviert", agent: "Agent", versions: "Versionen" }, version_one: "{{count}} Version", version_other: "{{count}} Versionen", toggleAgent: "{{name}} umschalten", collapseVersions: "Versionen einklappen", expandVersions: "Versionen ausklappen" }, lm = { title: "Eigenschaften", description: "Konfigurieren Sie die Basis- und erweiterten Eigenschaften, die für jeden Dokumenttyp angezeigt werden. Typen ohne spezifische Konfiguration verwenden die Standardeigenschaften.", documentType: "Dokumenttyp", selectTypePlaceholder: "Dokumenttyp zur Konfiguration auswählen...", searchTypes: "Typen suchen...", noTypeFound: "Kein Typ gefunden.", selectTypeHelp: "Wählen Sie einen Dokumenttyp aus, um dessen Eigenschaften zu konfigurieren. Typen mit einem Abzeichen haben benutzerdefinierte Definitionen.", basicProperties: "Basiseigenschaften", advancedProperties: "Erweiterte Eigenschaften", addProperty: "Eigenschaft hinzufügen...", displayLabel: "Anzeigebezeichnung" }, cm = { title: "Darstellungsgrößen", description: "Konfigurieren Sie die Darstellungsgrößen für Miniaturansichten und modale Vorschauen.", thumbnailGrid: "Miniaturansichten-Raster (px)", thumbnailDefault: "Standard: 512", modalPreview: "Modale Vorschau (px)", modalDefault: "Standard: 1024" }, dm = { title: "Basisfilter", description: "Konfigurieren Sie, welche Filter in der einfachen Suchleiste der Bibliothek verfügbar sind." }, um = { title: "Erweiterte Facetten", description: "Konfigurieren Sie, welche Facetten bei erweiterten Suchen in der Bibliothek verfügbar sind.", field: "Feld", name: "Name", displayName: "Anzeigename", addFacet: "Facette hinzufügen...", filterByType: "Nach Dokumenttyp filtern", selectTypePlaceholder: "Typ auswählen, um dessen Eigenschaften zu durchsuchen...", allTypes: "Alle Typen (nur gemeinsame Eigenschaften)", typeFilterHelp: "Optional einen Dokumenttyp auswählen, um dessen spezifische Eigenschaften zu durchsuchen. Gemeinsame Eigenschaften sind immer verfügbar.", noFacetsConfigured: "Keine Facetten konfiguriert. Wählen Sie unten ein Feld aus, um zu beginnen.", addCustomFacet: "Benutzerdefinierte Facette hinzufügen", fieldPlaceholder: "Eigenschaftspfad (z. B. properties.author)" }, mm = { title: "Suchgewichtungen", description: "Konfigurieren Sie die Gewichtung jedes Einbettungstyps bei der Suche.", enableWeightedSearch: "Gewichtete Suche aktivieren", enableWeightedSearchHelp: "Wenn aktiviert, werden diese Gewichtungen auf die Einbettungs-Suchergebnisse angewendet.", text: "Text", images: "Bilder", properties: "Eigenschaften" }, pm = { title: "Sprache", description: "Konfigurieren Sie die Standardsprache der Anwendung. Benutzer können diese Einstellung individuell ändern.", defaultLanguage: "Standardsprache", defaultLanguageHelp: "Die Standardsprache, wenn ein Benutzer keine persönliche Spracheinstellung festgelegt hat." }, hm = { title: "Farbschema", description: "Konfigurieren Sie das Standard-Farbschema der Anwendung. Benutzer können diese Einstellung individuell ändern.", defaultColorScheme: "Standard-Farbschema", defaultColorSchemeHelp: "Das Standard-Farbschema, wenn ein Benutzer keine persönliche Farbschema-Einstellung festgelegt hat." }, gm = { title: "Favoriten", description: "Konfigurieren Sie, wie Favoriten der Benutzer gespeichert werden. Favoriten werden in einer benutzerspezifischen Sammlung des unten verknüpften Typs gespeichert.", quickSetup: "Schnelleinrichtung", createAndLink: "Favoritentyp erstellen & verknüpfen", createAndLinkHelp: "Erstellt einen Inhaltstyp „Favoriten“ (oder verwendet den vorhandenen) und verknüpft ihn mit der Einstellung unten.", collectionType: "Sammlungstyp für Favoriten", collectionTypePlaceholder: "Sammlungstyp auswählen", collectionTypeHelp: "Typ, der beim Erstellen der Favoritensammlung jedes Benutzers verwendet wird. Leer lassen, um sie ohne bestimmten Typ zu erstellen.", noType: "Kein bestimmter Typ", typeDescription: "Inhaltstyp für die Favoritensammlungen der Benutzer.", typeLinked: "Favoritentyp erstellt und verknüpft", typeError: "Favoritentyp konnte nicht erstellt werden" }, fm = {
  tabs: tm,
  application: nm,
  dashboard: am,
  library: om,
  whitelist: im,
  sidebar: rm,
  agents: sm,
  properties: lm,
  rendition: cm,
  basicFilters: dm,
  facets: um,
  searchWeights: mm,
  language: pm,
  colorScheme: hm,
  favorites: gm
}, bm = { filterPlaceholder: "Filter services...", tags: "Tags", tagsPlaceholder: 'Enter tags separated by ",". Press enter when done', tagsHint: "e.g. agent, chat", version: "Version", versionPlaceholder: "Enter version. Press enter when done", versionHint: "Enter version number", noServicesAvailable: "No services available", noServicesHint: "Try adjusting your search criteria.", contactAdmin: "Contact your Administrator to publish some" }, vm = { noDescription: "No description available", notFound: "Interaction Not Found", notFoundDescription: "The interaction you're looking for doesn't exist", backToAgents: "Back to Agents", validationError: "Validation Error", validationNameDescription: "Please provide both name and description", validationFormErrors: "Please fix the errors in the form", failedCreateCollection: "Failed to create report collection", failedCreateCollectionDescription: "Please try again later.", failedStartReport: "Failed to start Report Generation", redirecting: "You will be redirected in a few seconds.", runAgent: "Run Agent", executionName: "Execution Name", executionNameHelp: "Give this execution a unique name to identify it later", executionNamePlaceholder: "e.g., Customer Support Bot Execution", executionDescription: "Execution Description", executionDescriptionHelp: "Describe the purpose or context of this execution", executionDescriptionPlaceholder: "e.g., Testing the customer support bot with new FAQ data", executionDetails: "Execution Details", executionDetailsDescription: "Name and description for this execution", interactionLabel: "Interaction", interactionDescription: "The agent you are executing", parameters: "Parameters", parametersDescription: "Configuration values for this execution" }, xm = { agentNotFound: "Agent Not Found", agentNotFoundDescription: "The agent you're looking for doesn't exist", totalExecutions: "Total Executions", allTime: "All time", successful: "Successful", failed: "Failed", running: "Running", currentlyInProgress: "Currently in progress", executions: "Executions", noExecutionsYet: "No executions yet", runFirstExecution: "Run your first execution", statusCompleted: "Completed", statusFailed: "Failed", statusRunning: "Running", statusUnknown: "Unknown" }, ym = { executionDetails: "Execution Details", executionDetailsDescription: "Provide a name and description for this execution", selectDocument: "Select Document", selectDocuments: "Select Documents", selectDocumentDescription: "Choose a document to process", selectDocumentsDescription: "Choose documents to process", uploadMedia: "Upload Media", uploadMediaFiles: "Upload Media Files", uploadMediaDescription: "Upload media files for processing", selectObject: "Select Object", selectObjects: "Select Objects", selectObjectDescription: "Configure the object properties", selectObjectsDescription: "Configure the object properties", configureParameters: "Configure Parameters", configureParametersDescription: "Set the parameters for this execution", reviewExecute: "Review & Execute", reviewExecuteDescription: "Review your configuration and start the execution", executionComplete: "Execution Complete", executionCompleteDescription: "Your execution has finished" }, Nm = { media: "Media", document: "Document", mediaFiles: "Media Files", documents: "Documents", selected: "Selected", selectItems: "Select {{itemType}}", clickToView: "Click to view {{name}}", viewDocument: "View document" }, wm = { documentSummarizer: { title: "Document Summarizer", description: "Automatically summarize long documents, articles, and reports into concise overviews" }, codeGenerator: { title: "Code Generator", description: "Generate code snippets and boilerplate in multiple programming languages" }, emailComposer: { title: "Email Composer", description: "Draft professional emails with customizable tone and style" }, dataExtractor: { title: "Data Extractor", description: "Extract structured data from unstructured text, PDFs, and images" }, translationHub: { title: "Translation Hub", description: "Translate content between multiple languages with context awareness" }, contentRewriter: { title: "Content Rewriter", description: "Rewrite and paraphrase content while maintaining original meaning" }, sentimentAnalyzer: { title: "Sentiment Analyzer", description: "Analyze text sentiment and emotional tone for customer feedback and reviews" }, meetingNotes: { title: "Meeting Notes", description: "Generate meeting summaries and action items from transcripts" }, researchAssistant: { title: "Research Assistant", description: "Conduct research and compile findings from multiple sources" }, socialMediaWriter: { title: "Social Media Writer", description: "Create engaging social media posts optimized for each platform" }, contractAnalyzer: { title: "Contract Analyzer", description: "Review contracts and legal documents to highlight key terms and risks" }, productDescriptions: { title: "Product Descriptions", description: "Generate compelling product descriptions for e-commerce listings" }, knowledgeBase: { title: "Knowledge Base", description: "Query and retrieve information from your organization's documents" }, reportGenerator: { title: "Report Generator", description: "Create detailed reports and analytics summaries from raw data" }, taskPlanner: { title: "Task Planner", description: "Break down complex projects into actionable tasks and timelines" }, faqGenerator: { title: "FAQ Generator", description: "Generate comprehensive FAQ sections from product documentation" }, assistant: { title: "Assistant", description: "Get help with your content and tasks using AI-powered assistance" }, seoTool: { title: "SEO Tool", description: "Generate and optimize SEO content for better search visibility" }, artGeneration: { title: "Art Generation", description: "Generate stunning artwork and images using AI technology" }, reverseSearch: { title: "Reverse Search", description: "Search for similar images and content using reverse image search" }, basicAgent: { title: "Basic Agent", description: "Chat with a basic AI agent to assist with various tasks and queries" } }, Cm = { uploadNew: "Upload New", uploadMedia: "Upload Media", uploadDocument: "Upload Document", dragDropMedia: "Drag and drop media files here", dragDropDocuments: "Drag and drop documents here", uploading: "Uploading...", progressComplete: "{{progress}}% complete", selectFiles: "Select files to upload" }, Sm = {
  search: bm,
  execution: vm,
  dashboard: xm,
  steps: ym,
  media: Nm,
  tools: wm,
  upload: Cm
}, Am = "Search collections...", Dm = "Create Collection", Tm = "No {{label}} collections yet", Im = "No collections yet", Pm = "No {{label}} collections found", km = "No collections found", _m = "Try adjusting your search", Em = "Create your first collection to get started", zm = "personal", Fm = "organization", Lm = { notFound: "Collection not found", all: "All", collections: "Collections", collectionsCount: "Collections ({{count}})", documents: "Documents", documentsCount: "Documents ({{count}})", total: "total", noItems: "No items in this collection", noItemsHelp: "Add documents or collections to get started", noFilterResults: "No {{filter}} found", noFilterResultsHelp: "Try changing the filter" }, Rm = { title: "Add to Collection", titleWithCount: "Add {{count}} documents to Collection", selectExisting: "Select Existing", createNew: "Create New", searchPlaceholder: "Search collections...", noCollectionsFound: "No collections found", createNewCollection: "Create a new collection", selectedCount_one: "{{count}} collection selected", selectedCount_other: "{{count}} collections selected", nameRequired: "Name *", namePlaceholder: "Enter collection name", descriptionLabel: "Description", descriptionPlaceholder: "Enter collection description (optional)", typeLabel: "Type", typePlaceholder: "Select a type (optional)", groupsLabel: "Groups", loadingGroups: "Loading groups...", noGroupsAvailable: "No groups available", successAdded: "Successfully added to {{count}} {{label}}", errorAdding: "Error adding to collections", errorCreating: "Error creating collection", documentsAdded: "{{count}} {{label}} added", successCreatedAndAdded: 'Successfully added to "{{name}}"', adding: "Adding...", createAndAdd: "Create & Add", addToCollectionBtn: "Add to Collection", addToCollectionsBtn: "Add to {{count}} Collections" }, $m = {
  searchPlaceholder: Am,
  createCollection: Dm,
  noCollectionsYet: Tm,
  noCollectionsYetGeneric: Im,
  noCollectionsFound: Pm,
  noCollectionsFoundGeneric: km,
  tryAdjustingSearch: _m,
  createFirstCollection: Em,
  personal: zm,
  organization: Fm,
  detail: Lm,
  addToCollection: Rm
}, Mm = { save: "Save", saving: "Saving...", cancel: "Cancel", delete: "Delete", deleting: "Deleting...", confirm: "Confirm", add: "Add", remove: "Remove", search: "Search", filter: "Filter", filters: "Filters", clearAll: "Clear All", clearFilters: "Clear Filters", close: "Close", back: "Back", continue: "Continue", execute: "Execute", download: "Download", downloading: "Downloading...", refresh: "Refresh", edit: "Edit", select: "Select", showPreview: "Show preview", hidePreview: "Hide preview", addToCollection: "Add to Collection", logOut: "Log out", done: "Done", addItem: "Add Item", chooseExisting: "Choose Existing", apply: "Apply", reset: "Reset", upload: "Upload", copyLink: "Copy link", copied: "Copied!", byEmail: "By email", copiedToClipboard: "Copied to clipboard", showInfo: "Show Info", hideInfo: "Hide Info", editProperties: "Edit Properties", resetChat: "Reset Chat" }, Om = { loading: "Loading...", loadingMore: "Loading more...", noResults: "No results found", noMoreItems: "No more items to load", empty: "No items to display", error: "Error", errorOccurred: "An error occurred", loadingPreview: "Loading preview...", noContentAvailable: "No content available", notSet: "Not set", yes: "Yes", no: "No", emptyList: "Empty list", emptyValue: "Empty", waiting: "Waiting...", uploading: "Uploading...", uploadedSuccessfully: "Uploaded successfully", updated: "Updated", skipped: "Skipped", uploadFailed: "Upload failed", comingSoon: "Coming soon" }, jm = { title: "404 - Page Not Found", description: "The page you are looking for does not exist." }, Bm = { label: "Theme", light: "Light", dark: "Dark", system: "System" }, Hm = { label: "Color Scheme", default: "Default", red: "Red", orange: "Orange", yellow: "Yellow", green: "Green", teal: "Teal", blue: "Blue", indigo: "Indigo", violet: "Violet", fuchsia: "Fuchsia", pink: "Pink", rose: "Rose", slate: "Slate" }, Vm = { label: "Language" }, qm = { label: "Dashboard", user: "User", admin: "Admin" }, Gm = "App Portal", Wm = "more", Um = "Collection", Km = "Document", Ym = "Open in new tab", Xm = "v{{version}}", Qm = "{{count}} item", Zm = "{{count}} items", Jm = { successTitle: "Settings saved", successDescription: "Application settings being refreshed...", errorTitle: "Failed to save settings", errorDescription: "Unable to update settings. Please try again." }, ep = { sm: "Small (sm)", smHint: ">= 640px", md: "Medium (md)", mdHint: ">= 768px", lg: "Large (lg)", lgHint: ">= 1024px", xl: "Extra large (xl)", xlHint: ">= 1280px" }, tp = { name: "Name", type: "Type", description: "Description", createdAt: "Created", updatedAt: "Updated", status: "Status", createdBy: "Created by", format: "Format", modified: "Modified", inputParameters: "Input Parameters", property: "Property", label: "Label", modifier: "Modifier" }, np = { selectIcon: "Select an icon...", searchIcons: "Search icons...", noIconsFound: "No icons found." }, ap = { yes: "Yes", no: "No" }, op = { searchPlaceholder: "Search {{label}}..." }, ip = { enable: "Enable", enterField: "Enter {{field}}", selectField: "Select {{field}}", noPropertiesDefined: "No properties defined for this object", noSchemaDefined: "No schema defined for this object", noSchemaDefinedForItems: "No schema defined for items", noParametersRequired: "This interaction requires no parameters", itemIndex: "Item {{index}}", noItemsAdded: "No items added yet", clickAddItem: 'Click "Add Item" to create a new entry', enterTextHere: "Enter text here...", enterValueHere: "Enter value here...", selectOrUploadDocument: "Select or upload a document...", noValue: "No value", noDocumentData: "No document data available" }, rp = { uploadDocuments: "Upload Documents", uploading: "Uploading...", uploadComplete: "Upload Complete", addFilesDescription: "Add files to upload", uploadingFiles: "Uploading {{count}} file", uploadingFiles_other: "Uploading {{count}} files", uploadSuccess_one: "{{count}} file uploaded successfully", uploadSuccess_other: "{{count}} files uploaded successfully", clickToBrowse: "Click to browse or drag files here", pasteFromClipboard: "You can also paste files from clipboard", filesSelected_one: "{{count}} file selected", filesSelected_other: "{{count}} files selected", fileLimitReached: "File limit reached", uploadingProgress: "Uploading files...", invalidFileType: "Invalid file type", invalidFileTypeDescription: "None of the selected files match the allowed file types", someFilesIgnored: "Some files ignored", filesIgnored_one: "{{count}} file was ignored (unsupported type)", filesIgnored_other: "{{count}} files were ignored (unsupported type)", maxFilesAllowed: "Maximum {{max}} files allowed", failedToDownload: "Failed to download file", documentNotFound: "Document not found" }, sp = { selectType: "Select a type", searchTypes: "Search types...", noTypeFound: "No type found.", selectTypes: "Select types...", selectAgents: "Select agents...", searchAgents: "Search agents...", noAgentFound: "No agent found.", agentsSelected: "{{count}} agent(s) selected", typesSelected: "{{count}} type(s) selected", selectProperty: "Select a property...", searchProperties: "Search properties...", noPropertyFound: "No property found.", noPropertiesAvailable: "No properties available", typeProperties: "Type Properties", commonProperties: "Common Properties", none: "None" }, lp = { title: "Recently Viewed", noDocuments: "No recently viewed documents", documentsWillAppear: "Documents you open will appear here" }, cp = { chatWithDocument: "Chat with your document", askQuestions: "Ask questions about <strong>{{name}}</strong> and get intelligent answers based on its content.", errorProcessing: "I apologize, but I encountered an issue processing your request. Please try again.", errorGeneral: "I apologize, but I encountered an error. Please try again later.", askPlaceholder: "Ask a question about this document...", waitingPlaceholder: "Waiting for response..." }, dp = { noContentSource: "No Document content Source", chat: "Chat", properties: "Properties" }, up = { semanticSearch: "Semantic Search", semanticSearchPlaceholder: "Type what you are looking for", propertySearch: "Property Search", types: "Types", statuses: "Statuses", users: "Users", autoSearch: "Auto Search", selectDateRange: "Select a date range", all: "All", contentType: "Content Type", mimeType: "Mime Type", scoreLabel: "Score", scoreTooltip: "Defining a score relevance threshold allows you to control how strict you want the search results to be. A score of 0.60 is usually considered a relevant match, while scores below that are generally considered less relevant.", selectFiltersToSearch: "Select filters to search", selectAtLeastOneFilter: "Please select at least one value in any Search By filter to see results.", searchDocuments: "Search documents...", showMore: "Show {{count}} more", showLess: "Show less" }, mp = { documents: "Documents", selectAll: "Select all", selectRow: "Select row", gridView: "Grid view", tableView: "Table view", listView: "List view", items: "Items" }, pp = { totalDocuments: "Total Documents", allDocuments: "All documents in the system", thisWeek: "This Week", documentsThisWeek: "Documents uploaded this week", thisMonth: "This Month", documentsThisMonth: "Documents uploaded this month", thisYear: "This Year", documentsThisYear: "Documents uploaded this year" }, hp = { title: "Quick Actions", uploadDocument: "Upload Document", searchDocuments: "Search Documents", createCollection: "Create Collection", latestAgents: "Latest Agents" }, gp = { recentActivity: "Recent Activity", activityWillAppear: "Activity will appear here once you upload documents", noActivity: "No activity yet" }, fp = { title: "Adjust banner position", description: "Drag to reposition. The bright zone shows what will be visible on the dashboard.", zoom: "Zoom" }, bp = { basic: "Basic", advanced: "Advanced", propertiesGenerating: "Properties are actively being generated, check back momentarily." }, vp = { nameLabel: "Name", descriptionLabel: "Description", typeLabel: "Type", groupsLabel: "Groups", loadingGroups: "Loading groups...", noGroupsAvailable: "No groups available", enterName: "Enter collection name", enterDescription: "Enter collection description (optional)", selectType: "Select a type (optional)", searchItems: "Search Items", addedMembers: "Added Members", searchDocuments: "Search documents", searchCollections: "Search collections", clickToAdd: "Click on an item to add it to the collection", noMembersAdded: "No members added yet.", searchAndClick: "Search and click items on the left to add them.", members: "Members", saveChanges: "Save Changes", createCollection: "Create Collection", saveChangesDescription: "Clicking <strong>Save Changes</strong> will update this collection and apply all member changes.", createCollectionDescription: "Clicking <strong>Create Collection</strong> will create this collection with the specified members.", noDescription: "No description", documentCount_one: "{{count}} document", documentCount_other: "{{count}} documents", subCollectionCount_one: "{{count}} sub-collection", subCollectionCount_other: "{{count}} sub-collections", newCount: "+{{count}} new", noMembers: "No members in this collection", newBadge: "new", editCollection: "Edit Collection", createCollectionTitle: "Create Collection", editDescription: "Update the collection properties and manage members", createDescription: "Create a new collection to organize your documents", saving: "Saving...", creating: "Creating...", next: "Next", stepDetails: "Details", stepMembers: "Members", stepReview: "Review", noDocumentsFound: "No documents found.", noCollectionsFound: "No collections found.", typeToSearchDocuments: "Type to search documents", typeToSearchCollections: "Type to search collections", itemCount_one: "{{count}} item", itemCount_other: "{{count}} items", newMemberLabel: "(new)" }, xp = "Documents", yp = "Collections", Np = "{{count}} document", wp = "{{count}} documents", Cp = { add: "Add to favorites", remove: "Remove from favorites", title: "My Favorites", description: "Your favorite documents", empty: "You don’t have any favorites yet", emptyHelp: "Add documents to your favorites to see them here", loadError: "Failed to load favorites", descriptionUser: "{{name}}’s favorite documents" }, Sp = {
  actions: Mm,
  states: Om,
  notFound: jm,
  theme: Bm,
  colorScheme: Hm,
  language: Vm,
  dashboardView: qm,
  appPortal: Gm,
  more: Wm,
  collection: Um,
  document: Km,
  openInNewTab: Ym,
  version: Xm,
  items_one: Qm,
  items_other: Zm,
  settingsToast: Jm,
  gridCols: ep,
  properties: tp,
  iconPicker: np,
  boolean: ap,
  search: op,
  form: ip,
  upload: rp,
  inputs: sp,
  recentlyViewed: lp,
  chat: cp,
  documentPanel: dp,
  filters: up,
  tables: mp,
  stats: pp,
  quickActions: hp,
  activityFeed: gp,
  bannerPosition: fp,
  propertiesPanel: bp,
  collectionWizard: vp,
  documents: xp,
  collections: yp,
  documentCount_one: Np,
  documentCount_other: wp,
  favorites: Cp
}, Ap = "Welcome to your Document Library", Dp = "Your document management platform to search, organize, and work with files using AI-powered tools", Tp = "Search for documents or assets...", Ip = "No results found", Pp = "Search in:", kp = "Collection", _p = { everywhere: "Everywhere", contents: "Contents", title: "Title", collections: "Collections" }, Ep = "ECM landscape", zp = "Overview", Fp = "Activity", Lp = "Search documents...", Rp = "Grid view", $p = "List view", Mp = "List view coming soon", Op = "Recent Documents", jp = "Uploads Over Time", Bp = "Storage by Type", Hp = "Top Contributors", Vp = "Chart visualization coming soon", qp = "Contributor statistics coming soon", Gp = { failedToLoadMore: "Failed to load more images", failedToLoadMoreDescription: "Unable to fetch more images. Please try again.", failedToLoad: "Failed to load images", failedToLoadDescription: "Unable to fetch latest images. Please try again.", searchFailed: "Search failed", searchFailedDescription: "Unable to perform semantic search. Please try again." }, Wp = { ask: "Ask AI Assistant", title: "AI Assistant", open: "Open AI assistant", minimize: "Minimize", enlarge: "Enlarge", shrink: "Shrink", starting: "Starting conversation…", empty: "Start a search to talk to the assistant.", inputPlaceholder: "Type a message…", notConfigured: "No agent is configured for agentic search.", noRunId: "No agent run was returned. The server may not support this feature.", startFailed: "Failed to start the conversation.", tryAgain: "Try again", searchPrefix: "Search for documents or contents related to: ", send: "Send" }, Up = {
  defaultTitle: Ap,
  defaultDescription: Dp,
  searchPlaceholder: Tp,
  noResults: Ip,
  searchIn: Pp,
  collection: kp,
  searchModes: _p,
  ecmLandscape: Ep,
  overview: zp,
  activity: Fp,
  searchDocuments: Lp,
  gridView: Rp,
  listView: $p,
  listViewComingSoon: Mp,
  recentDocuments: Op,
  uploadsOverTime: jp,
  storageByType: Bp,
  topContributors: Hp,
  chartComingSoon: Vp,
  contributorComingSoon: qp,
  errors: Gp,
  aiAssistant: Wp
}, Kp = "Mine", Yp = "All", Xp = "Search by name...", Qp = "Card view", Zp = "Table view", Jp = "Interaction", eh = "Created by", th = "Created at", nh = "Name", ah = "Description", oh = "No filters available", ih = "Failed to load executions: {{message}}", rh = "No executions found", sh = "Execution container type not configured", lh = "Loading...", ch = { notFound: "Execution Not Found", notFoundDescription: "The execution you are looking for does not exist.", encounteredError: "Execution encountered an error", contactAdmin: "Please contact your system administrator for further information", agentResponse: "Agent Response", completedSuccessfully: "Execution completed successfully", executionDetails: "Execution Details", inputParameters: "Input Parameters" }, dh = {
  mine: Kp,
  all: Yp,
  searchPlaceholder: Xp,
  cardView: Qp,
  tableView: Zp,
  interaction: Jp,
  createdBy: eh,
  createdAt: th,
  name: nh,
  description: ah,
  noFiltersAvailable: oh,
  failedToLoad: ih,
  noExecutionsFound: rh,
  containerTypeNotConfigured: sh,
  documentLoading: lh,
  detail: ch
}, uh = "Auto Search", mh = "Advanced", ph = "Basic", hh = "Search documents...", gh = { download: "Download", addToCollection: "Add to Collection", delete: "Delete", more: "more", errorDownloading: "Error downloading document", errorDownloadingDescription: "An error occurred while downloading the document.", deleteTitle: "Delete {{typeName}}", deleteConfirm: "Are you sure you want to delete this {{typeName}}?", deleteSuccess: "{{typeName}} Deleted", deleteSuccessDescription: "{{typeName}} {{id}} has been deleted successfully", deleteError: "Error Deleting {{typeName}}" }, fh = { type: "Type", typePlaceholder: "Search by type", status: "Status", statusPlaceholder: "Search by status", createdBy: "Created By", createdByPlaceholder: "Search by creator" }, bh = "{{count}} selected", vh = { title: "No documents found", description: "Try adjusting your filters or search terms" }, xh = {
  autoSearch: uh,
  advanced: mh,
  basic: ph,
  searchPlaceholder: hh,
  document: gh,
  facets: fh,
  selectedCount: bh,
  noDocuments: vh
}, yh = { application: "Application", administration: "Administration" }, Nh = { dashboard: { title: "Dashboard", tooltip: "Dashboard" }, advancedSearch: { title: "Advanced Search", tooltip: "Advanced Search", description: "Search and explore your documents" }, collections: { title: "Collections", tooltip: "Collections", description: "Organize and manage your collections" }, collectionsPersonal: { title: "Personal", tooltip: "Personal Collections" }, collectionsOrganization: { title: "Organization", tooltip: "Organization Collections" }, agents: { title: "Agents", tooltip: "Agents", description: "Configure and manage your AI agents" }, browseAgents: { title: "Browse Agents", tooltip: "Browse Agents" }, executions: { title: "Executions", tooltip: "Agent Executions" }, settings: { title: "Settings", tooltip: "Settings", description: "Manage application settings and configurations" }, favorites: { title: "Favorites", tooltip: "Favorites", description: "Your favorite documents" } }, wh = {
  sections: yh,
  items: Nh
}, Ch = { application: "Application", dashboard: "Dashboard", library: "Advanced Search", whitelist: "Whitelist", sidebar: "Sidebar", agents: "Agents", properties: "Properties", rendition: "Rendition", search: "Search", language: "Language", colorScheme: "Color Scheme", favorites: "Favorites" }, Sh = { title: "Application", description: "Customize the application name, icon, and branding displayed in the sidebar and breadcrumb.", applicationName: "Application Name", applicationNamePlaceholder: "ECM", applicationNameHelp: "Customize the application name shown in the sidebar header.", leaveEmptyDefault: "Leave empty to use the default name: ", breadcrumbLabel: "Breadcrumb Label", breadcrumbPlaceholder: "Dashboard", breadcrumbHelp: "Customize the root breadcrumb label shown in the header navigation.", applicationIcon: "Application Icon", iconTabIcon: "Icon", iconTabImage: "Image", uploadImage: "Upload image", chooseFromLibrary: "Choose from library", uploadFailed: "Failed to upload image", iconImageHelp: "Upload an image or select one from the library to use as the application icon. It is displayed on a transparent background, so images with transparency (PNG) work best.", iconBackgroundColor: "Icon Background Color", preview: "Preview" }, Ah = { title: "Dashboard", description: "Configure the user dashboard appearance and behavior.", titleLabel: "Title", titlePlaceholder: "Welcome to your Document Library", titleHelp: "Displayed as the main heading on the dashboard.", descriptionLabel: "Description", descriptionPlaceholder: "Your document management platform to search, organize, and work with files using AI-powered tools", descriptionHelp: "Displayed below the title on the dashboard.", backgroundImage: "Background image", backgroundPreviewAlt: "Dashboard background preview", selectImage: "Select image", changeImage: "Change image", adjustPosition: "Adjust position", backgroundHelp: "Displayed as the hero background on the dashboard. Falls back to the default image when not set.", bannerRenditionSize: "Banner rendition size", bannerRenditionSizeHelp: "Maximum width/height in pixels for the banner image rendition. Higher values produce sharper images but load slower.", bannerMaxHeight: "Banner max height (px)", bannerMaxHeightHelp: "Height of the banner when the page is not scrolled.", bannerMinHeight: "Banner min height (px)", bannerMinHeightHelp: "Height of the banner when fully collapsed after scrolling.", displayMode: "Dashboard display", displayModeOptions: { imageGrid: "Latest documents grid", recentlyViewed: "Recently viewed" }, displayModeHelp: { imageGrid: "Show a grid of the latest documents with infinite scroll.", recentlyViewed: "Show a list of the documents the user recently viewed." }, imageGridLayout: "Image grid layout", imageGridLayoutHelp: "Configure the number of items displayed per row at each screen size, and how many items are fetched per page.", itemsPerPage: "Items per page", itemsPerPageHelp: "Number of items fetched per search request (used for infinite scroll pagination).", uploadImage: "Upload image", uploadFailed: "Failed to upload image", invalidImage: "Please select an image file under 20 MB.", agenticSearch: { label: "Agentic search agent", placeholder: "Select an agent…", none: "None (hide the button)", help: "Agent used by the dashboard Ask AI Assistant button. Leave as None to hide the button." } }, Dh = { title: "Advanced Search", description: "Configure the advanced search grid layout for different screen sizes.", gridLayout: "Grid layout", gridLayoutHelp: "Number of items per row when the advanced search panel is closed.", advancedSearchLayout: "Advanced search layout", advancedSearchLayoutHelp: "Number of items per row when the advanced search panel is open." }, Th = { title: "Whitelist", description: "Restrict which document types are visible in the library and dashboard. When empty, all types are shown.", dashboardWhitelist: "Dashboard whitelist", dashboardWhitelistHelp: "When non-empty, only these document types will appear on the dashboard.", libraryWhitelist: "Library whitelist", libraryWhitelistHelp: "When non-empty, only these document types will appear in library search results.", collectionWhitelist: "Collection whitelist", collectionWhitelistHelp: "When non-empty, only these types will be available when creating a collection.", selectTypesPlaceholder: "Select types to whitelist..." }, Ih = { title: "Sidebar", description: "Choose which items appear in the navigation sidebar. New items are shown by default; hidden items are also blocked from direct URL access and redirect to the home page.", alwaysVisible: "Always visible", help: "The home page and settings can't be hidden so the sidebar stays usable.", hideItem: "Hide {{item}}", showItem: "Show {{item}}" }, Ph = { title: "Agents", description: "Manage which agents are visible in the application. Disabled agents will be hidden from search results.", noAgentsFound: "No agents found.", enabledCount: "{{enabledCount}} of {{totalCount}} agent version enabled", enabledCount_other: "{{enabledCount}} of {{totalCount}} agent versions enabled", columns: { enabled: "Enabled", agent: "Agent", versions: "Versions" }, version_one: "{{count}} version", version_other: "{{count}} versions", toggleAgent: "Toggle {{name}}", collapseVersions: "Collapse versions", expandVersions: "Expand versions" }, kh = { title: "Properties", description: "Configure the basic and advanced properties displayed for each document type. Types without specific configuration will use default properties.", documentType: "Document type", selectTypePlaceholder: "Select a document type to configure...", searchTypes: "Search types...", noTypeFound: "No type found.", selectTypeHelp: "Select a document type to configure its properties. Types marked with a badge have custom definitions.", basicProperties: "Basic Properties", advancedProperties: "Advanced Properties", addProperty: "Add property...", displayLabel: "Display label" }, _h = { title: "Rendition Sizes", description: "Configure the rendition sizes used for thumbnail grids and modal previews.", thumbnailGrid: "Thumbnail Grid (px)", thumbnailDefault: "Default: 512", modalPreview: "Modal Preview (px)", modalDefault: "Default: 1024" }, Eh = { title: "Basic Filters", description: "Configure which filters are available in the basic search bar in the library." }, zh = { title: "Advanced Facets", description: "Configure which facets are available when performing advanced searches in the library.", field: "Field", name: "Name", displayName: "Display name", addFacet: "Add facet...", filterByType: "Filter by document type", selectTypePlaceholder: "Select a type to browse its properties...", allTypes: "All types (common properties only)", typeFilterHelp: "Optionally select a document type to browse its specific properties. Common properties are always available.", noFacetsConfigured: "No facets configured. Select a field below to start.", addCustomFacet: "Add custom facet", fieldPlaceholder: "Property path (e.g. properties.author)" }, Fh = { title: "Search Weights", description: "Configure the weight of each embedding type when performing searches.", enableWeightedSearch: "Enable weighted search", enableWeightedSearchHelp: "When enabled, these weights will be applied to embedding search results.", text: "Text", images: "Images", properties: "Properties" }, Lh = { title: "Language", description: "Configure the default language for the application. Users can override this preference individually.", defaultLanguage: "Default Language", defaultLanguageHelp: "The default language used when a user has not set a personal language preference." }, Rh = { title: "Color Scheme", description: "Configure the default color scheme for the application. Users can override this preference individually.", defaultColorScheme: "Default Color Scheme", defaultColorSchemeHelp: "The default color scheme used when a user has not set a personal color scheme preference." }, $h = { title: "Favorites", description: "Configure how user favorites are stored. Favorites are saved in a per-user collection of the type linked below.", quickSetup: "Quick setup", createAndLink: "Create & link favorites type", createAndLinkHelp: 'Creates a "Favorites" content type (or reuses the existing one) and links it to the setting below.', collectionType: "Favorites collection type", collectionTypePlaceholder: "Select a collection type", collectionTypeHelp: "Type used when creating each user’s favorites collection. Leave empty to create it without a specific type.", noType: "No specific type", typeDescription: "Content type used for users’ favorites collections.", typeLinked: "Favorites type created and linked", typeError: "Failed to create the favorites type" }, Mh = {
  tabs: Ch,
  application: Sh,
  dashboard: Ah,
  library: Dh,
  whitelist: Th,
  sidebar: Ih,
  agents: Ph,
  properties: kh,
  rendition: _h,
  basicFilters: Eh,
  facets: zh,
  searchWeights: Fh,
  language: Lh,
  colorScheme: Rh,
  favorites: $h
}, Oh = { filterPlaceholder: "Filtrar servicios...", tags: "Etiquetas", tagsPlaceholder: 'Ingresa etiquetas separadas por ",". Presiona enter cuando termines', tagsHint: "ej. agente, chat", version: "Version", versionPlaceholder: "Ingresa la version. Presiona enter cuando termines", versionHint: "Ingresa el numero de version", noServicesAvailable: "No hay servicios disponibles", noServicesHint: "Intenta ajustar tus criterios de busqueda.", contactAdmin: "Contacta a tu administrador para que publique algunos" }, jh = { noDescription: "Sin descripcion disponible", notFound: "Interaccion no encontrada", notFoundDescription: "La interaccion que buscas no existe", backToAgents: "Volver a agentes", validationError: "Error de validacion", validationNameDescription: "Por favor, proporciona nombre y descripcion", validationFormErrors: "Por favor, corrige los errores del formulario", failedCreateCollection: "Error al crear la coleccion de informes", failedCreateCollectionDescription: "Por favor, intentalo mas tarde.", failedStartReport: "Error al iniciar la generacion del informe", redirecting: "Serás redirigido en unos segundos.", runAgent: "Ejecutar agente", executionName: "Nombre de la ejecución", executionNameHelp: "Asigne un nombre único a esta ejecución para identificarla después", executionNamePlaceholder: "ej.: Ejecución del bot de soporte al cliente", executionDescription: "Descripción de la ejecución", executionDescriptionHelp: "Describa el propósito o contexto de esta ejecución", executionDescriptionPlaceholder: "ej.: Prueba del bot de soporte al cliente con nuevos datos de FAQ", executionDetails: "Detalles de la ejecución", executionDetailsDescription: "Nombre y descripción de esta ejecución", interactionLabel: "Interacción", interactionDescription: "El agente que está ejecutando", parameters: "Parámetros", parametersDescription: "Valores de configuración para esta ejecución" }, Bh = { agentNotFound: "Agente no encontrado", agentNotFoundDescription: "El agente que busca no existe", totalExecutions: "Total de ejecuciones", allTime: "Todo el tiempo", successful: "Exitosas", failed: "Fallidas", running: "En ejecución", currentlyInProgress: "Actualmente en curso", executions: "Ejecuciones", noExecutionsYet: "Sin ejecuciones aún", runFirstExecution: "Ejecute su primera ejecución", statusCompleted: "Completada", statusFailed: "Fallida", statusRunning: "En ejecución", statusUnknown: "Desconocido" }, Hh = { executionDetails: "Detalles de la ejecución", executionDetailsDescription: "Proporcione un nombre y una descripción para esta ejecución", selectDocument: "Seleccionar documento", selectDocuments: "Seleccionar documentos", selectDocumentDescription: "Elija un documento para procesar", selectDocumentsDescription: "Elija documentos para procesar", uploadMedia: "Subir multimedia", uploadMediaFiles: "Subir archivos multimedia", uploadMediaDescription: "Suba archivos multimedia para procesar", selectObject: "Seleccionar objeto", selectObjects: "Seleccionar objetos", selectObjectDescription: "Configure las propiedades del objeto", selectObjectsDescription: "Configure las propiedades de los objetos", configureParameters: "Configurar parámetros", configureParametersDescription: "Defina los parámetros para esta ejecución", reviewExecute: "Revisar y ejecutar", reviewExecuteDescription: "Revise su configuración e inicie la ejecución", executionComplete: "Ejecución completada", executionCompleteDescription: "Su ejecución ha finalizado" }, Vh = { media: "Multimedia", document: "Documento", mediaFiles: "Archivos multimedia", documents: "Documentos", selected: "Seleccionado", selectItems: "Seleccionar {{itemType}}", clickToView: "Clic para ver {{name}}", viewDocument: "Ver documento" }, qh = { documentSummarizer: { title: "Resumidor de documentos", description: "Resume automaticamente documentos largos, articulos e informes en resumes concisos" }, codeGenerator: { title: "Generador de codigo", description: "Genera fragmentos de codigo y plantillas en multiples lenguajes de programacion" }, emailComposer: { title: "Redactor de correos", description: "Redacta correos profesionales con tono y estilo personalizables" }, dataExtractor: { title: "Extractor de datos", description: "Extrae datos estructurados de texto no estructurado, PDFs e imagenes" }, translationHub: { title: "Centro de traduccion", description: "Traduce contenido entre multiples idiomas con reconocimiento de contexto" }, contentRewriter: { title: "Reescritor de contenido", description: "Reescribe y parafrasea contenido manteniendo el significado original" }, sentimentAnalyzer: { title: "Analizador de sentimiento", description: "Analiza el sentimiento y tono emocional del texto para comentarios y resenas de clientes" }, meetingNotes: { title: "Notas de reunion", description: "Genera resumenes de reuniones y acciones a seguir a partir de transcripciones" }, researchAssistant: { title: "Asistente de investigacion", description: "Realiza investigaciones y recopila hallazgos de multiples fuentes" }, socialMediaWriter: { title: "Redactor de redes sociales", description: "Crea publicaciones atractivas para redes sociales optimizadas para cada plataforma" }, contractAnalyzer: { title: "Analizador de contratos", description: "Revisa contratos y documentos legales para destacar terminos clave y riesgos" }, productDescriptions: { title: "Descripciones de productos", description: "Genera descripciones de productos atractivas para listados de comercio electronico" }, knowledgeBase: { title: "Base de conocimientos", description: "Consulta y recupera informacion de los documentos de tu organizacion" }, reportGenerator: { title: "Generador de informes", description: "Crea informes detallados y resumenes analiticos a partir de datos sin procesar" }, taskPlanner: { title: "Planificador de tareas", description: "Desglosa proyectos complejos en tareas ejecutables y cronogramas" }, faqGenerator: { title: "Generador de preguntas frecuentes", description: "Genera secciones completas de preguntas frecuentes a partir de la documentacion del producto" }, assistant: { title: "Asistente", description: "Obtiene ayuda con tu contenido y tareas usando asistencia impulsada por IA" }, seoTool: { title: "Herramienta SEO", description: "Genera y optimiza contenido SEO para mejorar la visibilidad en buscadores" }, artGeneration: { title: "Generacion de arte", description: "Genera arte e imagenes impresionantes usando tecnologia de IA" }, reverseSearch: { title: "Busqueda inversa", description: "Busca imagenes y contenido similar usando busqueda inversa de imagenes" }, basicAgent: { title: "Agente basico", description: "Chatea con un agente de IA basico para asistencia con diversas tareas y consultas" } }, Gh = { uploadNew: "Subir nuevo", uploadMedia: "Subir multimedia", uploadDocument: "Subir documento", dragDropMedia: "Arrastra y suelta archivos multimedia aqui", dragDropDocuments: "Arrastra y suelta documentos aqui", uploading: "Subiendo...", progressComplete: "{{progress}}% completado", selectFiles: "Selecciona archivos para subir" }, Wh = {
  search: Oh,
  execution: jh,
  dashboard: Bh,
  steps: Hh,
  media: Vh,
  tools: qh,
  upload: Gh
}, Uh = "Buscar colecciones...", Kh = "Crear coleccion", Yh = "Aun no hay colecciones {{label}}", Xh = "Aun no hay colecciones", Qh = "No se encontraron colecciones {{label}}", Zh = "No se encontraron colecciones", Jh = "Intenta ajustar tu busqueda", eg = "Crea tu primera coleccion para comenzar", tg = "personales", ng = "de la organizacion", ag = { notFound: "Coleccion no encontrada", all: "Todo", collections: "Colecciones", collectionsCount: "Colecciones ({{count}})", documents: "Documentos", documentsCount: "Documentos ({{count}})", total: "total", noItems: "No hay elementos en esta coleccion", noItemsHelp: "Agrega documentos o colecciones para comenzar", noFilterResults: "No se encontraron {{filter}}", noFilterResultsHelp: "Intenta cambiar el filtro" }, og = { title: "Agregar a coleccion", titleWithCount: "Agregar {{count}} documentos a coleccion", selectExisting: "Seleccionar existente", createNew: "Crear nueva", searchPlaceholder: "Buscar colecciones...", noCollectionsFound: "No se encontraron colecciones", createNewCollection: "Crear una nueva coleccion", selectedCount_one: "{{count}} coleccion seleccionada", selectedCount_other: "{{count}} colecciones seleccionadas", nameRequired: "Nombre *", namePlaceholder: "Ingresa el nombre de la coleccion", descriptionLabel: "Descripcion", descriptionPlaceholder: "Ingresa la descripcion de la coleccion (opcional)", typeLabel: "Tipo", typePlaceholder: "Selecciona un tipo (opcional)", groupsLabel: "Grupos", loadingGroups: "Cargando grupos...", noGroupsAvailable: "No hay grupos disponibles", successAdded: "Agregado correctamente a {{count}} {{label}}", errorAdding: "Error al agregar a colecciones", errorCreating: "Error al crear la coleccion", documentsAdded: "{{count}} {{label}} agregados", successCreatedAndAdded: 'Agregado correctamente a "{{name}}"', adding: "Agregando...", createAndAdd: "Crear y agregar", addToCollectionBtn: "Agregar a coleccion", addToCollectionsBtn: "Agregar a {{count}} colecciones" }, ig = {
  searchPlaceholder: Uh,
  createCollection: Kh,
  noCollectionsYet: Yh,
  noCollectionsYetGeneric: Xh,
  noCollectionsFound: Qh,
  noCollectionsFoundGeneric: Zh,
  tryAdjustingSearch: Jh,
  createFirstCollection: eg,
  personal: tg,
  organization: ng,
  detail: ag,
  addToCollection: og
}, rg = { save: "Guardar", saving: "Guardando...", cancel: "Cancelar", delete: "Eliminar", deleting: "Eliminando...", confirm: "Confirmar", add: "Agregar", remove: "Quitar", search: "Buscar", filter: "Filtrar", filters: "Filtros", clearAll: "Limpiar todo", clearFilters: "Limpiar filtros", close: "Cerrar", back: "Volver", continue: "Continuar", execute: "Ejecutar", download: "Descargar", downloading: "Descargando...", refresh: "Actualizar", edit: "Editar", select: "Seleccionar", showPreview: "Mostrar vista previa", hidePreview: "Ocultar vista previa", addToCollection: "Agregar a colección", logOut: "Cerrar sesión", done: "Hecho", addItem: "Agregar elemento", chooseExisting: "Elegir existente", apply: "Aplicar", reset: "Restablecer", upload: "Subir", copyLink: "Copiar enlace", copied: "¡Copiado!", byEmail: "Por correo electrónico", copiedToClipboard: "Copiado al portapapeles", showInfo: "Mostrar información", hideInfo: "Ocultar información", editProperties: "Editar propiedades", resetChat: "Restablecer chat" }, sg = { loading: "Cargando...", loadingMore: "Cargando mas...", noResults: "No se encontraron resultados", noMoreItems: "No hay mas elementos para cargar", empty: "No hay elementos para mostrar", error: "Error", errorOccurred: "Ocurrió un error", loadingPreview: "Cargando vista previa...", noContentAvailable: "No hay contenido disponible", notSet: "No definido", yes: "Sí", no: "No", emptyList: "Lista vacía", emptyValue: "Vacío", waiting: "Esperando...", uploading: "Subiendo...", uploadedSuccessfully: "Subido con éxito", updated: "Actualizado", skipped: "Omitido", uploadFailed: "Error al subir", comingSoon: "Próximamente" }, lg = { title: "404 - Pagina no encontrada", description: "La pagina que buscas no existe." }, cg = { label: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema" }, dg = { label: "Esquema de colores", default: "Predeterminado", red: "Rojo", orange: "Naranja", yellow: "Amarillo", green: "Verde", teal: "Verde azulado", blue: "Azul", indigo: "Indigo", violet: "Violeta", fuchsia: "Fucsia", pink: "Rosa fuerte", rose: "Rosa", slate: "Pizarra" }, ug = { label: "Idioma" }, mg = { label: "Panel", user: "Usuario", admin: "Administrador" }, pg = "Portal de aplicaciones", hg = "mas", gg = "Colección", fg = "Documento", bg = "Abrir en nueva pestana", vg = "v{{version}}", xg = "{{count}} elemento", yg = "{{count}} elementos", Ng = { successTitle: "Configuracion guardada", successDescription: "Actualizando la configuracion de la aplicacion...", errorTitle: "Error al guardar la configuracion", errorDescription: "No se pudo actualizar la configuracion. Por favor, intentalo de nuevo." }, wg = { sm: "Pequeno (sm)", smHint: ">= 640px", md: "Mediano (md)", mdHint: ">= 768px", lg: "Grande (lg)", lgHint: ">= 1024px", xl: "Extra grande (xl)", xlHint: ">= 1280px" }, Cg = { name: "Nombre", type: "Tipo", description: "Descripcion", createdAt: "Creado", updatedAt: "Actualizado", status: "Estado", createdBy: "Creado por", format: "Formato", modified: "Modificado", inputParameters: "Parámetros de entrada", property: "Propiedad", label: "Etiqueta", modifier: "Modificador" }, Sg = { selectIcon: "Seleccionar un icono...", searchIcons: "Buscar iconos...", noIconsFound: "No se encontraron iconos." }, Ag = { yes: "Sí", no: "No" }, Dg = { searchPlaceholder: "Buscar {{label}}..." }, Tg = { enable: "Activar", enterField: "Introducir {{field}}", selectField: "Seleccionar {{field}}", noPropertiesDefined: "No hay propiedades definidas para este objeto", noSchemaDefined: "No hay esquema definido para este objeto", noSchemaDefinedForItems: "No hay esquema definido para los elementos", noParametersRequired: "Esta interacción no requiere parámetros", itemIndex: "Elemento {{index}}", noItemsAdded: "No se han agregado elementos", clickAddItem: 'Haga clic en "Agregar elemento" para crear una nueva entrada', enterTextHere: "Introduzca texto aquí...", enterValueHere: "Introduzca un valor aquí...", selectOrUploadDocument: "Seleccionar o subir un documento...", noValue: "Sin valor", noDocumentData: "No hay datos de documento disponibles" }, Ig = { uploadDocuments: "Subir documentos", uploading: "Subiendo...", uploadComplete: "Subida completada", addFilesDescription: "Agregar archivos para subir", uploadingFiles: "Subiendo {{count}} archivo", uploadingFiles_other: "Subiendo {{count}} archivos", uploadSuccess_one: "{{count}} archivo subido con éxito", uploadSuccess_other: "{{count}} archivos subidos con éxito", clickToBrowse: "Haga clic para explorar o arrastre archivos aquí", pasteFromClipboard: "También puede pegar archivos desde el portapapeles", filesSelected_one: "{{count}} archivo seleccionado", filesSelected_other: "{{count}} archivos seleccionados", fileLimitReached: "Límite de archivos alcanzado", uploadingProgress: "Subiendo archivos...", invalidFileType: "Tipo de archivo inválido", invalidFileTypeDescription: "Ninguno de los archivos seleccionados coincide con los tipos de archivo permitidos", someFilesIgnored: "Algunos archivos ignorados", filesIgnored_one: "{{count}} archivo fue ignorado (tipo no compatible)", filesIgnored_other: "{{count}} archivos fueron ignorados (tipo no compatible)", maxFilesAllowed: "Máximo {{max}} archivos permitidos", failedToDownload: "Error al descargar el archivo", documentNotFound: "Documento no encontrado" }, Pg = { selectType: "Seleccionar un tipo", searchTypes: "Buscar tipos...", noTypeFound: "No se encontró ningún tipo.", selectTypes: "Seleccionar tipos...", selectAgents: "Seleccionar agentes...", searchAgents: "Buscar agentes...", noAgentFound: "No se encontró ningún agente.", agentsSelected: "{{count}} agente(s) seleccionado(s)", typesSelected: "{{count}} tipo(s) seleccionado(s)", selectProperty: "Seleccionar una propiedad...", searchProperties: "Buscar propiedades...", noPropertyFound: "No se encontró ninguna propiedad.", noPropertiesAvailable: "No hay propiedades disponibles", typeProperties: "Propiedades del tipo", commonProperties: "Propiedades comunes", none: "Ninguno" }, kg = { title: "Vistos recientemente", noDocuments: "No hay documentos vistos recientemente", documentsWillAppear: "Los documentos que abra aparecerán aquí" }, _g = { chatWithDocument: "Chatea con tu documento", askQuestions: "Haz preguntas sobre <strong>{{name}}</strong> y obtén respuestas inteligentes basadas en su contenido.", errorProcessing: "Disculpa, pero encontré un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.", errorGeneral: "Disculpa, pero encontré un error. Por favor, inténtalo más tarde.", askPlaceholder: "Haz una pregunta sobre este documento...", waitingPlaceholder: "Esperando respuesta..." }, Eg = { noContentSource: "Sin fuente de contenido del documento", chat: "Chat", properties: "Propiedades" }, zg = { semanticSearch: "Búsqueda semántica", semanticSearchPlaceholder: "Describe lo que estás buscando", propertySearch: "Búsqueda por propiedad", types: "Tipos", statuses: "Estados", users: "Usuarios", autoSearch: "Búsqueda automática", selectDateRange: "Seleccionar un rango de fechas", all: "Todos", contentType: "Tipo de contenido", mimeType: "Tipo MIME", scoreLabel: "Puntuación", scoreTooltip: "Definir un umbral de relevancia de puntuación le permite controlar cuán estrictos desea que sean los resultados de búsqueda. Una puntuación de 0,60 se considera generalmente una coincidencia relevante, mientras que las puntuaciones inferiores se consideran generalmente menos relevantes.", selectFiltersToSearch: "Seleccione filtros para buscar", selectAtLeastOneFilter: "Por favor, seleccione al menos un valor en cualquier filtro de búsqueda para ver resultados.", searchDocuments: "Buscar documentos...", showMore: "Mostrar {{count}} más", showLess: "Mostrar menos" }, Fg = { documents: "Documentos", selectAll: "Seleccionar todo", selectRow: "Seleccionar fila", gridView: "Vista de cuadrícula", tableView: "Vista de tabla", listView: "Vista de lista", items: "Elementos" }, Lg = { totalDocuments: "Total de documentos", allDocuments: "Todos los documentos del sistema", thisWeek: "Esta semana", documentsThisWeek: "Documentos subidos esta semana", thisMonth: "Este mes", documentsThisMonth: "Documentos subidos este mes", thisYear: "Este año", documentsThisYear: "Documentos subidos este año" }, Rg = { title: "Acciones rápidas", uploadDocument: "Subir documento", searchDocuments: "Buscar documentos", createCollection: "Crear colección", latestAgents: "Últimos agentes" }, $g = { activityWillAppear: "La actividad aparecerá aquí una vez que suba documentos", recentActivity: "Actividad reciente", noActivity: "Aún no hay actividad" }, Mg = { title: "Ajustar la posición del banner", description: "Arrastra para reposicionar. La zona clara muestra lo que será visible en el panel.", zoom: "Zoom" }, Og = { basic: "Básico", advanced: "Avanzado", propertiesGenerating: "Las propiedades se están generando, vuelva a consultar en un momento." }, jg = { nameLabel: "Nombre", descriptionLabel: "Descripción", typeLabel: "Tipo", groupsLabel: "Grupos", loadingGroups: "Cargando grupos...", noGroupsAvailable: "No hay grupos disponibles", enterName: "Introducir nombre de la colección", enterDescription: "Introducir descripción de la colección (opcional)", selectType: "Seleccionar un tipo (opcional)", searchItems: "Buscar elementos", addedMembers: "Miembros añadidos", searchDocuments: "Buscar documentos", searchCollections: "Buscar colecciones", clickToAdd: "Haga clic en un elemento para añadirlo a la colección", noMembersAdded: "No se han añadido miembros.", searchAndClick: "Busque y haga clic en los elementos de la izquierda para añadirlos.", members: "Miembros", saveChanges: "Guardar cambios", createCollection: "Crear colección", saveChangesDescription: "Al hacer clic en <strong>Guardar cambios</strong> se actualizará esta colección y se aplicarán todos los cambios de miembros.", createCollectionDescription: "Al hacer clic en <strong>Crear colección</strong> se creará esta colección con los miembros especificados.", noDescription: "Sin descripción", documentCount_one: "{{count}} documento", documentCount_other: "{{count}} documentos", subCollectionCount_one: "{{count}} subcolección", subCollectionCount_other: "{{count}} subcolecciones", newCount: "+{{count}} nuevo(s)", noMembers: "No hay miembros en esta colección", newBadge: "nuevo", editCollection: "Editar colección", createCollectionTitle: "Crear colección", editDescription: "Actualizar las propiedades de la colección y gestionar los miembros", createDescription: "Crear una nueva colección para organizar tus documentos", saving: "Guardando...", creating: "Creando...", next: "Siguiente", stepDetails: "Detalles", stepMembers: "Miembros", stepReview: "Resumen", noDocumentsFound: "No se encontraron documentos.", noCollectionsFound: "No se encontraron colecciones.", typeToSearchDocuments: "Escriba para buscar documentos", typeToSearchCollections: "Escriba para buscar colecciones", itemCount_one: "{{count}} elemento", itemCount_other: "{{count}} elementos", newMemberLabel: "(nuevo)" }, Bg = "Documentos", Hg = "Colecciones", Vg = "{{count}} documento", qg = "{{count}} documentos", Gg = { add: "Añadir a favoritos", remove: "Quitar de favoritos", title: "Mis favoritos", description: "Tus documentos favoritos", empty: "Aún no tienes favoritos", emptyHelp: "Añade documentos a tus favoritos para verlos aquí", loadError: "Error al cargar los favoritos", descriptionUser: "Documentos favoritos de {{name}}" }, Wg = {
  actions: rg,
  states: sg,
  notFound: lg,
  theme: cg,
  colorScheme: dg,
  language: ug,
  dashboardView: mg,
  appPortal: pg,
  more: hg,
  collection: gg,
  document: fg,
  openInNewTab: bg,
  version: vg,
  items_one: xg,
  items_other: yg,
  settingsToast: Ng,
  gridCols: wg,
  properties: Cg,
  iconPicker: Sg,
  boolean: Ag,
  search: Dg,
  form: Tg,
  upload: Ig,
  inputs: Pg,
  recentlyViewed: kg,
  chat: _g,
  documentPanel: Eg,
  filters: zg,
  tables: Fg,
  stats: Lg,
  quickActions: Rg,
  activityFeed: $g,
  bannerPosition: Mg,
  propertiesPanel: Og,
  collectionWizard: jg,
  documents: Bg,
  collections: Hg,
  documentCount_one: Vg,
  documentCount_other: qg,
  favorites: Gg
}, Ug = "Bienvenido a tu biblioteca de documentos", Kg = "Tu plataforma de gestion documental para buscar, organizar y trabajar con archivos usando herramientas de IA", Yg = "Buscar documentos o recursos...", Xg = "No se encontraron resultados", Qg = "Buscar en:", Zg = "Colección", Jg = { everywhere: "En todo", contents: "Contenidos", title: "Título", collections: "Colecciones" }, ef = "Panorama ECM", tf = "Resumen", nf = "Actividad", af = "Buscar documentos...", of = "Vista de cuadrícula", rf = "Vista de lista", sf = "Vista de lista próximamente", lf = "Documentos recientes", cf = "Subidas a lo largo del tiempo", df = "Almacenamiento por tipo", uf = "Principales contribuyentes", mf = "Visualización de gráficos próximamente", pf = "Estadísticas de contribuyentes próximamente", hf = { failedToLoadMore: "Error al cargar mas imagenes", failedToLoadMoreDescription: "No se pudieron obtener mas imagenes. Por favor, intentalo de nuevo.", failedToLoad: "Error al cargar imagenes", failedToLoadDescription: "No se pudieron obtener las imagenes mas recientes. Por favor, intentalo de nuevo.", searchFailed: "Error en la busqueda", searchFailedDescription: "No se pudo realizar la busqueda semantica. Por favor, intentalo de nuevo." }, gf = { ask: "Preguntar al asistente de IA", title: "Asistente de IA", open: "Abrir asistente de IA", minimize: "Minimizar", enlarge: "Ampliar", shrink: "Reducir", starting: "Iniciando conversación…", empty: "Inicia una búsqueda para hablar con el asistente.", inputPlaceholder: "Escribe un mensaje…", notConfigured: "No hay ningún agente configurado para la búsqueda con agente.", noRunId: "No se devolvió ninguna ejecución de agente. Es posible que el servidor no admita esta función.", startFailed: "No se pudo iniciar la conversación.", tryAgain: "Reintentar", searchPrefix: "Buscar documentos o contenidos relacionados con: ", send: "Enviar" }, ff = {
  defaultTitle: Ug,
  defaultDescription: Kg,
  searchPlaceholder: Yg,
  noResults: Xg,
  searchIn: Qg,
  collection: Zg,
  searchModes: Jg,
  ecmLandscape: ef,
  overview: tf,
  activity: nf,
  searchDocuments: af,
  gridView: of,
  listView: rf,
  listViewComingSoon: sf,
  recentDocuments: lf,
  uploadsOverTime: cf,
  storageByType: df,
  topContributors: uf,
  chartComingSoon: mf,
  contributorComingSoon: pf,
  errors: hf,
  aiAssistant: gf
}, bf = "Mias", vf = "Todas", xf = "Buscar por nombre...", yf = "Vista de tarjetas", Nf = "Vista de tabla", wf = "Interaccion", Cf = "Creado por", Sf = "Creado el", Af = "Nombre", Df = "Descripcion", Tf = "No hay filtros disponibles", If = "Error al cargar ejecuciones: {{message}}", Pf = "No se encontraron ejecuciones", kf = "Tipo de contenedor de ejecución no configurado", _f = "Cargando...", Ef = { notFound: "Ejecución no encontrada", notFoundDescription: "La ejecución que buscas no existe.", encounteredError: "La ejecución encontró un error", contactAdmin: "Por favor, contacte a su administrador del sistema para más información", agentResponse: "Respuesta del agente", completedSuccessfully: "Ejecución completada con éxito", executionDetails: "Detalles de la ejecución", inputParameters: "Parámetros de entrada" }, zf = {
  mine: bf,
  all: vf,
  searchPlaceholder: xf,
  cardView: yf,
  tableView: Nf,
  interaction: wf,
  createdBy: Cf,
  createdAt: Sf,
  name: Af,
  description: Df,
  noFiltersAvailable: Tf,
  failedToLoad: If,
  noExecutionsFound: Pf,
  containerTypeNotConfigured: kf,
  documentLoading: _f,
  detail: Ef
}, Ff = "Busqueda automatica", Lf = "Avanzado", Rf = "Basico", $f = "Buscar documentos...", Mf = { download: "Descargar", addToCollection: "Agregar a coleccion", delete: "Eliminar", more: "mas", errorDownloading: "Error al descargar el documento", errorDownloadingDescription: "Ocurrio un error al descargar el documento.", deleteTitle: "Eliminar {{typeName}}", deleteConfirm: "Estas seguro de que deseas eliminar este {{typeName}}?", deleteSuccess: "{{typeName}} eliminado", deleteSuccessDescription: "{{typeName}} {{id}} ha sido eliminado correctamente", deleteError: "Error al eliminar {{typeName}}" }, Of = { type: "Tipo", typePlaceholder: "Buscar por tipo", status: "Estado", statusPlaceholder: "Buscar por estado", createdBy: "Creado por", createdByPlaceholder: "Buscar por creador" }, jf = "{{count}} seleccionado(s)", Bf = { title: "No se encontraron documentos", description: "Intente ajustar sus filtros o términos de búsqueda" }, Hf = {
  autoSearch: Ff,
  advanced: Lf,
  basic: Rf,
  searchPlaceholder: $f,
  document: Mf,
  facets: Of,
  selectedCount: jf,
  noDocuments: Bf
}, Vf = { application: "Aplicacion", administration: "Administracion" }, qf = { dashboard: { title: "Panel", tooltip: "Panel" }, advancedSearch: { title: "Búsqueda avanzada", tooltip: "Búsqueda avanzada", description: "Busca y explora tus documentos" }, collections: { title: "Colecciones", tooltip: "Colecciones", description: "Organiza y gestiona tus colecciones" }, collectionsPersonal: { title: "Personal", tooltip: "Colecciones personales" }, collectionsOrganization: { title: "Organizacion", tooltip: "Colecciones de la organizacion" }, agents: { title: "Agentes", tooltip: "Agentes", description: "Configura y gestiona tus agentes de IA" }, browseAgents: { title: "Explorar agentes", tooltip: "Explorar agentes" }, executions: { title: "Ejecuciones", tooltip: "Ejecuciones de agentes" }, settings: { title: "Configuracion", tooltip: "Configuracion", description: "Gestiona la configuracion y los ajustes de la aplicacion" }, favorites: { title: "Favoritos", tooltip: "Favoritos", description: "Tus documentos favoritos" } }, Gf = {
  sections: Vf,
  items: qf
}, Wf = { application: "Aplicacion", dashboard: "Panel", library: "Búsqueda avanzada", whitelist: "Lista blanca", sidebar: "Barra lateral", agents: "Agentes", properties: "Propiedades", rendition: "Renderizado", search: "Busqueda", language: "Idioma", colorScheme: "Esquema de colores", favorites: "Favoritos" }, Uf = { title: "Aplicacion", description: "Personaliza el nombre, el icono y la marca de la aplicacion que se muestran en la barra lateral y las migas de pan.", applicationName: "Nombre de la aplicacion", applicationNamePlaceholder: "ECM", applicationNameHelp: "Personaliza el nombre de la aplicacion que se muestra en el encabezado de la barra lateral.", leaveEmptyDefault: "Deja vacio para usar el nombre predeterminado: ", breadcrumbLabel: "Etiqueta de migas de pan", breadcrumbPlaceholder: "Panel", breadcrumbHelp: "Personaliza la etiqueta raiz de las migas de pan en la navegacion del encabezado.", applicationIcon: "Icono de la aplicacion", iconTabIcon: "Icono", iconTabImage: "Imagen", uploadImage: "Subir imagen", chooseFromLibrary: "Elegir de la biblioteca", uploadFailed: "No se pudo subir la imagen", iconImageHelp: "Sube una imagen o selecciona una de la biblioteca para usarla como icono de la aplicacion. Se muestra sobre un fondo transparente, por lo que las imagenes con transparencia (PNG) funcionan mejor.", iconBackgroundColor: "Color de fondo del icono", preview: "Vista previa" }, Kf = { title: "Panel", description: "Configura la apariencia y el comportamiento del panel de usuario.", titleLabel: "Titulo", titlePlaceholder: "Bienvenido a tu biblioteca de documentos", titleHelp: "Se muestra como el titulo principal en el panel.", descriptionLabel: "Descripcion", descriptionPlaceholder: "Tu plataforma de gestion documental para buscar, organizar y trabajar con archivos usando herramientas de IA", descriptionHelp: "Se muestra debajo del titulo en el panel.", backgroundImage: "Imagen de fondo", backgroundPreviewAlt: "Vista previa del fondo del panel", selectImage: "Seleccionar imagen", changeImage: "Cambiar imagen", adjustPosition: "Ajustar posicion", backgroundHelp: "Se muestra como fondo principal en el panel. Se usa la imagen predeterminada cuando no se establece una.", bannerRenditionSize: "Tamano de renderizado del banner", bannerRenditionSizeHelp: "Ancho/alto maximo en pixeles para el renderizado de la imagen del banner. Valores mas altos producen imagenes mas nitidas pero cargan mas lento.", bannerMaxHeight: "Altura maxima del banner (px)", bannerMaxHeightHelp: "Altura del banner cuando la pagina no esta desplazada.", bannerMinHeight: "Altura minima del banner (px)", bannerMinHeightHelp: "Altura del banner cuando esta completamente colapsado despues de desplazar.", displayMode: "Visualizacion del panel", displayModeOptions: { imageGrid: "Cuadricula de documentos recientes", recentlyViewed: "Vistos recientemente" }, displayModeHelp: { imageGrid: "Mostrar una cuadricula de los documentos mas recientes con desplazamiento infinito.", recentlyViewed: "Mostrar una lista de los documentos que el usuario ha visto recientemente." }, imageGridLayout: "Diseno de cuadricula de imagenes", imageGridLayoutHelp: "Configura el numero de elementos por fila en cada tamano de pantalla y cuantos elementos se obtienen por pagina.", itemsPerPage: "Elementos por pagina", itemsPerPageHelp: "Numero de elementos obtenidos por solicitud de busqueda (usado para la paginacion con desplazamiento infinito).", uploadImage: "Subir imagen", uploadFailed: "No se pudo subir la imagen", invalidImage: "Seleccione un archivo de imagen de menos de 20 MB.", agenticSearch: { label: "Agente de búsqueda con agente", placeholder: "Seleccionar un agente…", none: "Ninguno (ocultar el botón)", help: "Agente utilizado por el botón « Preguntar al asistente de IA » del panel. Déjalo en Ninguno para ocultar el botón." } }, Yf = { title: "Búsqueda avanzada", description: "Configura el diseno de cuadricula de la busqueda avanzada para diferentes tamanos de pantalla.", gridLayout: "Diseno de cuadricula", gridLayoutHelp: "Numero de elementos por fila cuando el panel de busqueda avanzada esta cerrado.", advancedSearchLayout: "Diseno de busqueda avanzada", advancedSearchLayoutHelp: "Numero de elementos por fila cuando el panel de busqueda avanzada esta abierto." }, Xf = { title: "Lista blanca", description: "Restringe los tipos de documentos visibles en la biblioteca y el panel. Cuando esta vacia, se muestran todos los tipos.", dashboardWhitelist: "Lista blanca del panel", dashboardWhitelistHelp: "Cuando no esta vacia, solo estos tipos de documentos apareceran en el panel.", libraryWhitelist: "Lista blanca de la biblioteca", libraryWhitelistHelp: "Cuando no esta vacia, solo estos tipos de documentos apareceran en los resultados de busqueda de la biblioteca.", collectionWhitelist: "Lista blanca de colecciones", collectionWhitelistHelp: "Cuando no esta vacia, solo estos tipos estaran disponibles al crear una coleccion.", selectTypesPlaceholder: "Seleccionar tipos para la lista blanca..." }, Qf = { title: "Barra lateral", description: "Elige qué elementos aparecen en la barra de navegación. Los elementos nuevos se muestran de forma predeterminada; los elementos ocultos también se bloquean en el acceso directo por URL y redirigen a la página de inicio.", alwaysVisible: "Siempre visible", help: "La página de inicio y los ajustes no se pueden ocultar para que la barra lateral siga siendo utilizable.", hideItem: "Ocultar {{item}}", showItem: "Mostrar {{item}}" }, Zf = { title: "Agentes", description: "Gestiona los agentes visibles en la aplicacion. Los agentes deshabilitados se ocultaran de los resultados de busqueda.", noAgentsFound: "No se encontraron agentes.", enabledCount: "{{enabledCount}} de {{totalCount}} version de agente habilitada", enabledCount_other: "{{enabledCount}} de {{totalCount}} versiones de agentes habilitadas", columns: { enabled: "Habilitado", agent: "Agente", versions: "Versiones" }, version_one: "{{count}} version", version_other: "{{count}} versiones", toggleAgent: "Alternar {{name}}", collapseVersions: "Contraer versiones", expandVersions: "Expandir versiones" }, Jf = { title: "Propiedades", description: "Configura las propiedades basicas y avanzadas que se muestran para cada tipo de documento. Los tipos sin configuracion especifica usaran las propiedades predeterminadas.", documentType: "Tipo de documento", selectTypePlaceholder: "Selecciona un tipo de documento para configurar...", searchTypes: "Buscar tipos...", noTypeFound: "No se encontro ningun tipo.", selectTypeHelp: "Selecciona un tipo de documento para configurar sus propiedades. Los tipos con una insignia tienen definiciones personalizadas.", basicProperties: "Propiedades basicas", advancedProperties: "Propiedades avanzadas", addProperty: "Agregar propiedad...", displayLabel: "Etiqueta de visualizacion" }, eb = { title: "Tamanos de renderizado", description: "Configura los tamanos de renderizado usados para las cuadriculas de miniaturas y las vistas previas modales.", thumbnailGrid: "Cuadricula de miniaturas (px)", thumbnailDefault: "Predeterminado: 512", modalPreview: "Vista previa modal (px)", modalDefault: "Predeterminado: 1024" }, tb = { title: "Filtros básicos", description: "Configura qué filtros están disponibles en la barra de búsqueda básica de la biblioteca." }, nb = { title: "Facetas avanzadas", description: "Configura las facetas disponibles al realizar busquedas avanzadas en la biblioteca.", field: "Campo", name: "Nombre", displayName: "Nombre para mostrar", addFacet: "Agregar faceta...", filterByType: "Filtrar por tipo de documento", selectTypePlaceholder: "Selecciona un tipo para explorar sus propiedades...", allTypes: "Todos los tipos (solo propiedades comunes)", typeFilterHelp: "Opcionalmente selecciona un tipo de documento para explorar sus propiedades especificas. Las propiedades comunes siempre estan disponibles.", noFacetsConfigured: "No hay facetas configuradas. Selecciona un campo a continuacion para comenzar.", addCustomFacet: "Añadir faceta personalizada", fieldPlaceholder: "Ruta de la propiedad (p. ej. properties.author)" }, ab = { title: "Pesos de busqueda", description: "Configura el peso de cada tipo de embedding al realizar busquedas.", enableWeightedSearch: "Habilitar busqueda ponderada", enableWeightedSearchHelp: "Cuando esta habilitado, estos pesos se aplicaran a los resultados de busqueda por embeddings.", text: "Texto", images: "Imagenes", properties: "Propiedades" }, ob = { title: "Idioma", description: "Configura el idioma predeterminado de la aplicacion. Los usuarios pueden cambiar esta preferencia individualmente.", defaultLanguage: "Idioma predeterminado", defaultLanguageHelp: "El idioma predeterminado que se usa cuando un usuario no ha establecido una preferencia de idioma personal." }, ib = { title: "Esquema de colores", description: "Configura el esquema de colores predeterminado de la aplicacion. Los usuarios pueden cambiar esta preferencia individualmente.", defaultColorScheme: "Esquema predeterminado", defaultColorSchemeHelp: "El esquema de colores predeterminado que se usa cuando un usuario no ha establecido una preferencia personal." }, rb = { title: "Favoritos", description: "Configura cómo se almacenan los favoritos de los usuarios. Los favoritos se guardan en una colección por usuario del tipo vinculado a continuación.", quickSetup: "Configuración rápida", createAndLink: "Crear y vincular tipo de favoritos", createAndLinkHelp: "Crea un tipo de contenido «Favoritos» (o reutiliza el existente) y lo vincula al ajuste de abajo.", collectionType: "Tipo de colección de favoritos", collectionTypePlaceholder: "Selecciona un tipo de colección", collectionTypeHelp: "Tipo utilizado al crear la colección de favoritos de cada usuario. Déjalo vacío para crearla sin un tipo específico.", noType: "Sin tipo específico", typeDescription: "Tipo de contenido utilizado para las colecciones de favoritos de los usuarios.", typeLinked: "Tipo de favoritos creado y vinculado", typeError: "Error al crear el tipo de favoritos" }, sb = {
  tabs: Wf,
  application: Uf,
  dashboard: Kf,
  library: Yf,
  whitelist: Xf,
  sidebar: Qf,
  agents: Zf,
  properties: Jf,
  rendition: eb,
  basicFilters: tb,
  facets: nb,
  searchWeights: ab,
  language: ob,
  colorScheme: ib,
  favorites: rb
}, lb = { filterPlaceholder: "Filtrer les services...", tags: "Tags", tagsPlaceholder: "Saisir les tags séparés par « , ». Appuyez sur Entrée pour valider", tagsHint: "ex. agent, chat", version: "Version", versionPlaceholder: "Saisir la version. Appuyez sur Entrée pour valider", versionHint: "Saisir le numéro de version", noServicesAvailable: "Aucun service disponible", noServicesHint: "Essayez d'ajuster vos critères de recherche.", contactAdmin: "Contactez votre administrateur pour en publier" }, cb = { noDescription: "Aucune description disponible", notFound: "Interaction introuvable", notFoundDescription: "L'interaction que vous recherchez n'existe pas", backToAgents: "Retour aux agents", validationError: "Erreur de validation", validationNameDescription: "Veuillez fournir un nom et une description", validationFormErrors: "Veuillez corriger les erreurs dans le formulaire", failedCreateCollection: "Échec de la création de la collection de rapports", failedCreateCollectionDescription: "Veuillez réessayer plus tard.", failedStartReport: "Échec du lancement de la génération du rapport", redirecting: "Vous serez redirigé dans quelques secondes.", runAgent: "Lancer l'agent", executionName: "Nom de l'exécution", executionNameHelp: "Donnez un nom unique à cette exécution pour l'identifier plus tard", executionNamePlaceholder: "ex. : Exécution du bot de support client", executionDescription: "Description de l'exécution", executionDescriptionHelp: "Décrivez l'objectif ou le contexte de cette exécution", executionDescriptionPlaceholder: "ex. : Test du bot de support client avec les nouvelles données FAQ", executionDetails: "Détails de l'exécution", executionDetailsDescription: "Nom et description de cette exécution", interactionLabel: "Interaction", interactionDescription: "L'agent que vous exécutez", parameters: "Paramètres", parametersDescription: "Valeurs de configuration pour cette exécution" }, db = { agentNotFound: "Agent introuvable", agentNotFoundDescription: "L'agent que vous recherchez n'existe pas", totalExecutions: "Total des exécutions", allTime: "Depuis toujours", successful: "Réussies", failed: "Échouées", running: "En cours", currentlyInProgress: "Actuellement en cours", executions: "Exécutions", noExecutionsYet: "Aucune exécution pour le moment", runFirstExecution: "Lancez votre première exécution", statusCompleted: "Terminée", statusFailed: "Échouée", statusRunning: "En cours", statusUnknown: "Inconnu" }, ub = { executionDetails: "Détails de l'exécution", executionDetailsDescription: "Fournissez un nom et une description pour cette exécution", selectDocument: "Sélectionner un document", selectDocuments: "Sélectionner des documents", selectDocumentDescription: "Choisissez un document à traiter", selectDocumentsDescription: "Choisissez des documents à traiter", uploadMedia: "Téléverser un média", uploadMediaFiles: "Téléverser des fichiers médias", uploadMediaDescription: "Téléversez des fichiers médias pour le traitement", selectObject: "Sélectionner un objet", selectObjects: "Sélectionner des objets", selectObjectDescription: "Configurez les propriétés de l'objet", selectObjectsDescription: "Configurez les propriétés des objets", configureParameters: "Configurer les paramètres", configureParametersDescription: "Définissez les paramètres pour cette exécution", reviewExecute: "Vérifier et exécuter", reviewExecuteDescription: "Vérifiez votre configuration et lancez l'exécution", executionComplete: "Exécution terminée", executionCompleteDescription: "Votre exécution est terminée" }, mb = { media: "Média", document: "Document", mediaFiles: "Fichiers médias", documents: "Documents", selected: "Sélectionné", selectItems: "Sélectionner {{itemType}}", clickToView: "Cliquer pour voir {{name}}", viewDocument: "Voir le document" }, pb = { documentSummarizer: { title: "Résumeur de documents", description: "Résumer automatiquement de longs documents, articles et rapports en synthèses concises" }, codeGenerator: { title: "Générateur de code", description: "Générer des extraits de code et des modèles dans plusieurs langages de programmation" }, emailComposer: { title: "Rédacteur d'e-mails", description: "Rédiger des e-mails professionnels avec un ton et un style personnalisables" }, dataExtractor: { title: "Extracteur de données", description: "Extraire des données structurées à partir de textes non structurés, de PDF et d'images" }, translationHub: { title: "Centre de traduction", description: "Traduire du contenu entre plusieurs langues avec prise en compte du contexte" }, contentRewriter: { title: "Reformulateur de contenu", description: "Réécrire et reformuler du contenu tout en conservant le sens original" }, sentimentAnalyzer: { title: "Analyseur de sentiment", description: "Analyser le sentiment et le ton émotionnel des retours clients et des avis" }, meetingNotes: { title: "Notes de réunion", description: "Générer des résumés de réunion et des actions à mener à partir de transcriptions" }, researchAssistant: { title: "Assistant de recherche", description: "Mener des recherches et compiler les résultats à partir de sources multiples" }, socialMediaWriter: { title: "Rédacteur réseaux sociaux", description: "Créer des publications engageantes pour les réseaux sociaux, optimisées pour chaque plateforme" }, contractAnalyzer: { title: "Analyseur de contrats", description: "Examiner les contrats et documents juridiques pour mettre en évidence les termes clés et les risques" }, productDescriptions: { title: "Descriptions de produits", description: "Générer des descriptions de produits percutantes pour les fiches e-commerce" }, knowledgeBase: { title: "Base de connaissances", description: "Interroger et récupérer des informations à partir des documents de votre organisation" }, reportGenerator: { title: "Générateur de rapports", description: "Créer des rapports détaillés et des synthèses analytiques à partir de données brutes" }, taskPlanner: { title: "Planificateur de tâches", description: "Décomposer des projets complexes en tâches concrètes et plannings" }, faqGenerator: { title: "Générateur de FAQ", description: "Générer des sections FAQ complètes à partir de la documentation produit" }, assistant: { title: "Assistant", description: "Obtenir de l'aide pour votre contenu et vos tâches grâce à l'assistance IA" }, seoTool: { title: "Outil SEO", description: "Générer et optimiser du contenu SEO pour une meilleure visibilité dans les moteurs de recherche" }, artGeneration: { title: "Génération d'images", description: "Générer des illustrations et des images grâce à la technologie IA" }, reverseSearch: { title: "Recherche inversée", description: "Rechercher des images et du contenu similaires grâce à la recherche inversée d'images" }, basicAgent: { title: "Agent basique", description: "Discuter avec un agent IA basique pour vous aider dans diverses tâches et requêtes" } }, hb = { uploadNew: "Nouveau téléversement", uploadMedia: "Téléverser un média", uploadDocument: "Téléverser un document", dragDropMedia: "Glissez-déposez des fichiers médias ici", dragDropDocuments: "Glissez-déposez des documents ici", uploading: "Téléversement...", progressComplete: "{{progress}} % terminé", selectFiles: "Sélectionner des fichiers à téléverser" }, gb = {
  search: lb,
  execution: cb,
  dashboard: db,
  steps: ub,
  media: mb,
  tools: pb,
  upload: hb
}, fb = "Rechercher des collections...", bb = "Créer une collection", vb = "Aucune collection {{label}} pour le moment", xb = "Aucune collection pour le moment", yb = "Aucune collection {{label}} trouvée", Nb = "Aucune collection trouvée", wb = "Essayez de modifier votre recherche", Cb = "Créez votre première collection pour commencer", Sb = "personnelle", Ab = "de l'organisation", Db = { notFound: "Collection introuvable", all: "Tout", collections: "Collections", collectionsCount: "Collections ({{count}})", documents: "Documents", documentsCount: "Documents ({{count}})", total: "total", noItems: "Aucun élément dans cette collection", noItemsHelp: "Ajoutez des documents ou des collections pour commencer", noFilterResults: "Aucun {{filter}} trouvé", noFilterResultsHelp: "Essayez de changer le filtre" }, Tb = { title: "Ajouter à la collection", titleWithCount: "Ajouter {{count}} documents à la collection", selectExisting: "Sélectionner une existante", createNew: "Créer une nouvelle", searchPlaceholder: "Rechercher des collections...", noCollectionsFound: "Aucune collection trouvée", createNewCollection: "Créer une nouvelle collection", selectedCount_one: "{{count}} collection sélectionnée", selectedCount_other: "{{count}} collections sélectionnées", nameRequired: "Nom *", namePlaceholder: "Saisir le nom de la collection", descriptionLabel: "Description", descriptionPlaceholder: "Saisir la description de la collection (optionnel)", typeLabel: "Type", typePlaceholder: "Sélectionner un type (optionnel)", groupsLabel: "Groupes", loadingGroups: "Chargement des groupes...", noGroupsAvailable: "Aucun groupe disponible", successAdded: "Ajouté avec succès à {{count}} {{label}}", errorAdding: "Erreur lors de l'ajout aux collections", errorCreating: "Erreur lors de la création de la collection", documentsAdded: "{{count}} {{label}} ajouté(s)", successCreatedAndAdded: "Ajouté avec succès à « {{name}} »", adding: "Ajout en cours...", createAndAdd: "Créer et ajouter", addToCollectionBtn: "Ajouter à la collection", addToCollectionsBtn: "Ajouter à {{count}} collections" }, Ib = {
  searchPlaceholder: fb,
  createCollection: bb,
  noCollectionsYet: vb,
  noCollectionsYetGeneric: xb,
  noCollectionsFound: yb,
  noCollectionsFoundGeneric: Nb,
  tryAdjustingSearch: wb,
  createFirstCollection: Cb,
  personal: Sb,
  organization: Ab,
  detail: Db,
  addToCollection: Tb
}, Pb = { save: "Enregistrer", saving: "Enregistrement...", cancel: "Annuler", delete: "Supprimer", deleting: "Suppression...", confirm: "Confirmer", add: "Ajouter", remove: "Retirer", search: "Rechercher", filter: "Filtrer", filters: "Filtres", clearAll: "Tout effacer", clearFilters: "Effacer les filtres", close: "Fermer", back: "Retour", continue: "Continuer", execute: "Exécuter", download: "Télécharger", downloading: "Téléchargement...", refresh: "Actualiser", edit: "Modifier", select: "Sélectionner", showPreview: "Afficher l'aperçu", hidePreview: "Masquer l'aperçu", addToCollection: "Ajouter à la collection", logOut: "Se déconnecter", done: "Terminé", addItem: "Ajouter un élément", chooseExisting: "Choisir un existant", apply: "Appliquer", reset: "Réinitialiser", upload: "Téléverser", copyLink: "Copier le lien", copied: "Copié !", byEmail: "Par e-mail", copiedToClipboard: "Copié dans le presse-papiers", showInfo: "Afficher les infos", hideInfo: "Masquer les infos", editProperties: "Modifier les propriétés", resetChat: "Réinitialiser le chat" }, kb = { loading: "Chargement...", loadingMore: "Chargement en cours...", noResults: "Aucun résultat trouvé", noMoreItems: "Plus aucun élément à charger", empty: "Aucun élément à afficher", error: "Erreur", errorOccurred: "Une erreur est survenue", loadingPreview: "Chargement de l'aperçu...", noContentAvailable: "Aucun contenu disponible", notSet: "Non défini", yes: "Oui", no: "Non", emptyList: "Liste vide", emptyValue: "Vide", waiting: "En attente...", uploading: "Téléversement...", uploadedSuccessfully: "Téléversé avec succès", updated: "Mis à jour", skipped: "Ignoré", uploadFailed: "Échec du téléversement", comingSoon: "Bientôt disponible" }, _b = { title: "404 - Page introuvable", description: "La page que vous recherchez n'existe pas." }, Eb = { label: "Thème", light: "Clair", dark: "Sombre", system: "Système" }, zb = { label: "Palette de couleurs", default: "Par défaut", red: "Rouge", orange: "Orange", yellow: "Jaune", green: "Vert", teal: "Sarcelle", blue: "Bleu", indigo: "Indigo", violet: "Violet", fuchsia: "Fuchsia", pink: "Rose vif", rose: "Rose", slate: "Ardoise" }, Fb = { label: "Langue" }, Lb = { label: "Tableau de bord", user: "Utilisateur", admin: "Admin" }, Rb = "Portail d'applications", $b = "plus", Mb = "Collection", Ob = "Document", jb = "Ouvrir dans un nouvel onglet", Bb = "v{{version}}", Hb = "{{count}} élément", Vb = "{{count}} éléments", qb = { successTitle: "Paramètres enregistrés", successDescription: "Actualisation des paramètres de l'application...", errorTitle: "Échec de l'enregistrement des paramètres", errorDescription: "Impossible de mettre à jour les paramètres. Veuillez réessayer." }, Gb = { sm: "Petit (sm)", smHint: ">= 640px", md: "Moyen (md)", mdHint: ">= 768px", lg: "Grand (lg)", lgHint: ">= 1024px", xl: "Très grand (xl)", xlHint: ">= 1280px" }, Wb = { name: "Nom", type: "Type", description: "Description", createdAt: "Créé le", updatedAt: "Mis à jour le", status: "Statut", createdBy: "Créé par", format: "Format", modified: "Modifié", inputParameters: "Paramètres d'entrée", property: "Propriété", label: "Libellé", modifier: "Modificateur" }, Ub = { selectIcon: "Sélectionner une icône...", searchIcons: "Rechercher des icônes...", noIconsFound: "Aucune icône trouvée." }, Kb = { yes: "Oui", no: "Non" }, Yb = { searchPlaceholder: "Rechercher {{label}}..." }, Xb = { enable: "Activer", enterField: "Saisir {{field}}", selectField: "Sélectionner {{field}}", noPropertiesDefined: "Aucune propriété définie pour cet objet", noSchemaDefined: "Aucun schéma défini pour cet objet", noSchemaDefinedForItems: "Aucun schéma défini pour les éléments", noParametersRequired: "Cette interaction ne nécessite aucun paramètre", itemIndex: "Élément {{index}}", noItemsAdded: "Aucun élément ajouté", clickAddItem: "Cliquez sur « Ajouter un élément » pour créer une nouvelle entrée", enterTextHere: "Saisir du texte ici...", enterValueHere: "Saisir une valeur ici...", selectOrUploadDocument: "Sélectionner ou téléverser un document...", noValue: "Aucune valeur", noDocumentData: "Aucune donnée de document disponible" }, Qb = { uploadDocuments: "Téléverser des documents", uploading: "Téléversement...", uploadComplete: "Téléversement terminé", addFilesDescription: "Ajouter des fichiers à téléverser", uploadingFiles: "Téléversement de {{count}} fichier", uploadingFiles_other: "Téléversement de {{count}} fichiers", uploadSuccess_one: "{{count}} fichier téléversé avec succès", uploadSuccess_other: "{{count}} fichiers téléversés avec succès", clickToBrowse: "Cliquez pour parcourir ou glissez des fichiers ici", pasteFromClipboard: "Vous pouvez également coller des fichiers depuis le presse-papiers", filesSelected_one: "{{count}} fichier sélectionné", filesSelected_other: "{{count}} fichiers sélectionnés", fileLimitReached: "Limite de fichiers atteinte", uploadingProgress: "Téléversement des fichiers...", invalidFileType: "Type de fichier invalide", invalidFileTypeDescription: "Aucun des fichiers sélectionnés ne correspond aux types de fichiers autorisés", someFilesIgnored: "Certains fichiers ignorés", filesIgnored_one: "{{count}} fichier a été ignoré (type non pris en charge)", filesIgnored_other: "{{count}} fichiers ont été ignorés (type non pris en charge)", maxFilesAllowed: "Maximum {{max}} fichiers autorisés", failedToDownload: "Échec du téléchargement du fichier", documentNotFound: "Document introuvable" }, Zb = { selectType: "Sélectionner un type", searchTypes: "Rechercher des types...", noTypeFound: "Aucun type trouvé.", selectTypes: "Sélectionner des types...", selectAgents: "Sélectionner des agents...", searchAgents: "Rechercher des agents...", noAgentFound: "Aucun agent trouvé.", agentsSelected: "{{count}} agent(s) sélectionné(s)", typesSelected: "{{count}} type(s) sélectionné(s)", selectProperty: "Sélectionner une propriété...", searchProperties: "Rechercher des propriétés...", noPropertyFound: "Aucune propriété trouvée.", noPropertiesAvailable: "Aucune propriété disponible", typeProperties: "Propriétés du type", commonProperties: "Propriétés communes", none: "Aucun" }, Jb = { title: "Consultés récemment", noDocuments: "Aucun document consulté récemment", documentsWillAppear: "Les documents que vous ouvrez apparaîtront ici" }, ev = { chatWithDocument: "Discutez avec votre document", askQuestions: "Posez des questions sur <strong>{{name}}</strong> et obtenez des réponses intelligentes basées sur son contenu.", errorProcessing: "Je m'excuse, mais j'ai rencontré un problème lors du traitement de votre demande. Veuillez réessayer.", errorGeneral: "Je m'excuse, mais j'ai rencontré une erreur. Veuillez réessayer plus tard.", askPlaceholder: "Posez une question sur ce document...", waitingPlaceholder: "En attente de la réponse..." }, tv = { noContentSource: "Aucune source de contenu du document", chat: "Chat", properties: "Propriétés" }, nv = { semanticSearch: "Recherche sémantique", semanticSearchPlaceholder: "Décrivez ce que vous recherchez", propertySearch: "Recherche par propriété", types: "Types", statuses: "Statuts", users: "Utilisateurs", autoSearch: "Recherche automatique", selectDateRange: "Sélectionner une plage de dates", all: "Tous", contentType: "Type de contenu", mimeType: "Type MIME", scoreLabel: "Score", scoreTooltip: "Définir un seuil de pertinence du score vous permet de contrôler la rigueur des résultats de recherche. Un score de 0,60 est généralement considéré comme pertinent, tandis que les scores inférieurs sont généralement considérés comme moins pertinents.", selectFiltersToSearch: "Sélectionnez des filtres pour rechercher", selectAtLeastOneFilter: "Veuillez sélectionner au moins une valeur dans un filtre de recherche pour voir les résultats.", searchDocuments: "Rechercher des documents...", showMore: "Afficher {{count}} de plus", showLess: "Afficher moins" }, av = { documents: "Documents", selectAll: "Tout sélectionner", selectRow: "Sélectionner la ligne", gridView: "Vue en grille", tableView: "Vue en tableau", listView: "Vue en liste", items: "Éléments" }, ov = { totalDocuments: "Total des documents", allDocuments: "Tous les documents du système", thisWeek: "Cette semaine", documentsThisWeek: "Documents téléversés cette semaine", thisMonth: "Ce mois-ci", documentsThisMonth: "Documents téléversés ce mois-ci", thisYear: "Cette année", documentsThisYear: "Documents téléversés cette année" }, iv = { title: "Actions rapides", uploadDocument: "Téléverser un document", searchDocuments: "Rechercher des documents", createCollection: "Créer une collection", latestAgents: "Derniers agents" }, rv = { activityWillAppear: "L'activité apparaîtra ici une fois que vous aurez téléversé des documents", recentActivity: "Activité récente", noActivity: "Aucune activité pour le moment" }, sv = { title: "Ajuster la position de la bannière", description: "Faites glisser pour repositionner. La zone claire montre ce qui sera visible sur le tableau de bord.", zoom: "Zoom" }, lv = { basic: "De base", advanced: "Avancé", propertiesGenerating: "Les propriétés sont en cours de génération, veuillez revenir dans un instant." }, cv = { nameLabel: "Nom", descriptionLabel: "Description", typeLabel: "Type", groupsLabel: "Groupes", loadingGroups: "Chargement des groupes...", noGroupsAvailable: "Aucun groupe disponible", enterName: "Saisir le nom de la collection", enterDescription: "Saisir la description de la collection (optionnel)", selectType: "Sélectionner un type (optionnel)", searchItems: "Rechercher des éléments", addedMembers: "Membres ajoutés", searchDocuments: "Rechercher des documents", searchCollections: "Rechercher des collections", clickToAdd: "Cliquez sur un élément pour l'ajouter à la collection", noMembersAdded: "Aucun membre ajouté.", searchAndClick: "Recherchez et cliquez sur les éléments à gauche pour les ajouter.", members: "Membres", saveChanges: "Enregistrer les modifications", createCollection: "Créer la collection", saveChangesDescription: "Cliquer sur <strong>Enregistrer les modifications</strong> mettra à jour cette collection et appliquera toutes les modifications de membres.", createCollectionDescription: "Cliquer sur <strong>Créer la collection</strong> créera cette collection avec les membres spécifiés.", noDescription: "Aucune description", documentCount_one: "{{count}} document", documentCount_other: "{{count}} documents", subCollectionCount_one: "{{count}} sous-collection", subCollectionCount_other: "{{count}} sous-collections", newCount: "+{{count}} nouveau(x)", noMembers: "Aucun membre dans cette collection", newBadge: "nouveau", editCollection: "Modifier la collection", createCollectionTitle: "Créer une collection", editDescription: "Mettre à jour les propriétés de la collection et gérer les membres", createDescription: "Créer une nouvelle collection pour organiser vos documents", saving: "Enregistrement...", creating: "Création...", next: "Suivant", stepDetails: "Détails", stepMembers: "Membres", stepReview: "Résumé", noDocumentsFound: "Aucun document trouvé.", noCollectionsFound: "Aucune collection trouvée.", typeToSearchDocuments: "Tapez pour rechercher des documents", typeToSearchCollections: "Tapez pour rechercher des collections", itemCount_one: "{{count}} élément", itemCount_other: "{{count}} éléments", newMemberLabel: "(nouveau)" }, dv = "Documents", uv = "Collections", mv = "{{count}} document", pv = "{{count}} documents", hv = { add: "Ajouter aux favoris", remove: "Retirer des favoris", title: "Mes favoris", description: "Vos documents favoris", empty: "Vous n’avez pas encore de favoris", emptyHelp: "Ajoutez des documents à vos favoris pour les voir ici", loadError: "Échec du chargement des favoris", descriptionUser: "Documents favoris de {{name}}" }, gv = {
  actions: Pb,
  states: kb,
  notFound: _b,
  theme: Eb,
  colorScheme: zb,
  language: Fb,
  dashboardView: Lb,
  appPortal: Rb,
  more: $b,
  collection: Mb,
  document: Ob,
  openInNewTab: jb,
  version: Bb,
  items_one: Hb,
  items_other: Vb,
  settingsToast: qb,
  gridCols: Gb,
  properties: Wb,
  iconPicker: Ub,
  boolean: Kb,
  search: Yb,
  form: Xb,
  upload: Qb,
  inputs: Zb,
  recentlyViewed: Jb,
  chat: ev,
  documentPanel: tv,
  filters: nv,
  tables: av,
  stats: ov,
  quickActions: iv,
  activityFeed: rv,
  bannerPosition: sv,
  propertiesPanel: lv,
  collectionWizard: cv,
  documents: dv,
  collections: uv,
  documentCount_one: mv,
  documentCount_other: pv,
  favorites: hv
}, fv = "Bienvenue dans votre bibliothèque de documents", bv = "Votre plateforme de gestion documentaire pour rechercher, organiser et travailler avec vos fichiers grâce à des outils basés sur l'IA", vv = "Rechercher des documents ou des ressources...", xv = "Aucun résultat trouvé", yv = "Rechercher dans :", Nv = "Collection", wv = { everywhere: "Partout", contents: "Contenus", title: "Titre", collections: "Collections" }, Cv = "Paysage ECM", Sv = "Vue d'ensemble", Av = "Activité", Dv = "Rechercher des documents...", Tv = "Vue grille", Iv = "Vue liste", Pv = "Vue liste bientôt disponible", kv = "Documents récents", _v = "Téléversements au fil du temps", Ev = "Stockage par type", zv = "Principaux contributeurs", Fv = "Visualisation graphique bientôt disponible", Lv = "Statistiques des contributeurs bientôt disponibles", Rv = { failedToLoadMore: "Échec du chargement des images suivantes", failedToLoadMoreDescription: "Impossible de récupérer plus d'images. Veuillez réessayer.", failedToLoad: "Échec du chargement des images", failedToLoadDescription: "Impossible de récupérer les dernières images. Veuillez réessayer.", searchFailed: "La recherche a échoué", searchFailedDescription: "Impossible d'effectuer la recherche sémantique. Veuillez réessayer." }, $v = { ask: "Demander à l'assistant IA", title: "Assistant IA", open: "Ouvrir l'assistant IA", minimize: "Réduire", enlarge: "Agrandir", shrink: "Réduire la taille", starting: "Démarrage de la conversation…", empty: "Lancez une recherche pour discuter avec l'assistant.", inputPlaceholder: "Écrivez un message…", notConfigured: "Aucun agent n'est configuré pour la recherche agentique.", noRunId: "Aucune exécution d'agent renvoyée. Le serveur ne prend peut-être pas en charge cette fonctionnalité.", startFailed: "Échec du démarrage de la conversation.", tryAgain: "Réessayer", searchPrefix: "Rechercher des documents ou contenus liés à : ", send: "Envoyer" }, Mv = {
  defaultTitle: fv,
  defaultDescription: bv,
  searchPlaceholder: vv,
  noResults: xv,
  searchIn: yv,
  collection: Nv,
  searchModes: wv,
  ecmLandscape: Cv,
  overview: Sv,
  activity: Av,
  searchDocuments: Dv,
  gridView: Tv,
  listView: Iv,
  listViewComingSoon: Pv,
  recentDocuments: kv,
  uploadsOverTime: _v,
  storageByType: Ev,
  topContributors: zv,
  chartComingSoon: Fv,
  contributorComingSoon: Lv,
  errors: Rv,
  aiAssistant: $v
}, Ov = "Les miennes", jv = "Toutes", Bv = "Rechercher par nom...", Hv = "Vue cartes", Vv = "Vue tableau", qv = "Interaction", Gv = "Créé par", Wv = "Créé le", Uv = "Nom", Kv = "Description", Yv = "Aucun filtre disponible", Xv = "Échec du chargement des exécutions : {{message}}", Qv = "Aucune exécution trouvée", Zv = "Type de conteneur d'exécution non configuré", Jv = "Chargement...", ex = { notFound: "Exécution introuvable", notFoundDescription: "L'exécution que vous recherchez n'existe pas.", encounteredError: "L'exécution a rencontré une erreur", contactAdmin: "Veuillez contacter votre administrateur système pour plus d'informations", agentResponse: "Réponse de l'agent", completedSuccessfully: "Exécution terminée avec succès", executionDetails: "Détails de l'exécution", inputParameters: "Paramètres d'entrée" }, tx = {
  mine: Ov,
  all: jv,
  searchPlaceholder: Bv,
  cardView: Hv,
  tableView: Vv,
  interaction: qv,
  createdBy: Gv,
  createdAt: Wv,
  name: Uv,
  description: Kv,
  noFiltersAvailable: Yv,
  failedToLoad: Xv,
  noExecutionsFound: Qv,
  containerTypeNotConfigured: Zv,
  documentLoading: Jv,
  detail: ex
}, nx = "Recherche automatique", ax = "Avancée", ox = "Simple", ix = "Rechercher des documents...", rx = { download: "Télécharger", addToCollection: "Ajouter à la collection", delete: "Supprimer", more: "plus", errorDownloading: "Erreur lors du téléchargement du document", errorDownloadingDescription: "Une erreur est survenue lors du téléchargement du document.", deleteTitle: "Supprimer {{typeName}}", deleteConfirm: "Êtes-vous sûr de vouloir supprimer ce {{typeName}} ?", deleteSuccess: "{{typeName}} supprimé", deleteSuccessDescription: "{{typeName}} {{id}} a été supprimé avec succès", deleteError: "Erreur lors de la suppression de {{typeName}}" }, sx = { type: "Type", typePlaceholder: "Rechercher par type", status: "Statut", statusPlaceholder: "Rechercher par statut", createdBy: "Créé par", createdByPlaceholder: "Rechercher par créateur" }, lx = "{{count}} sélectionné(s)", cx = { title: "Aucun document trouvé", description: "Essayez d'ajuster vos filtres ou termes de recherche" }, dx = {
  autoSearch: nx,
  advanced: ax,
  basic: ox,
  searchPlaceholder: ix,
  document: rx,
  facets: sx,
  selectedCount: lx,
  noDocuments: cx
}, ux = { application: "Application", administration: "Administration" }, mx = { dashboard: { title: "Tableau de bord", tooltip: "Tableau de bord" }, advancedSearch: { title: "Recherche avancée", tooltip: "Recherche avancée", description: "Rechercher et explorer vos documents" }, collections: { title: "Collections", tooltip: "Collections", description: "Organiser et gérer vos collections" }, collectionsPersonal: { title: "Personnelles", tooltip: "Collections personnelles" }, collectionsOrganization: { title: "Organisation", tooltip: "Collections de l'organisation" }, agents: { title: "Agents", tooltip: "Agents", description: "Configurer et gérer vos agents IA" }, browseAgents: { title: "Parcourir les agents", tooltip: "Parcourir les agents" }, executions: { title: "Exécutions", tooltip: "Exécutions des agents" }, settings: { title: "Paramètres", tooltip: "Paramètres", description: "Gérer les paramètres et configurations de l'application" }, favorites: { title: "Favoris", tooltip: "Favoris", description: "Vos documents favoris" } }, px = {
  sections: ux,
  items: mx
}, hx = { application: "Application", dashboard: "Tableau de bord", library: "Recherche avancée", whitelist: "Liste blanche", sidebar: "Barre latérale", agents: "Agents", properties: "Propriétés", rendition: "Rendu", search: "Recherche", language: "Langue", colorScheme: "Palette de couleurs", favorites: "Favoris" }, gx = { title: "Application", description: "Personnaliser le nom, l'icône et l'image de marque de l'application affichés dans la barre latérale et le fil d'Ariane.", applicationName: "Nom de l'application", applicationNamePlaceholder: "ECM", applicationNameHelp: "Personnaliser le nom de l'application affiché dans l'en-tête de la barre latérale.", leaveEmptyDefault: "Laisser vide pour utiliser le nom par défaut : ", breadcrumbLabel: "Libellé du fil d'Ariane", breadcrumbPlaceholder: "Tableau de bord", breadcrumbHelp: "Personnaliser le libellé racine du fil d'Ariane affiché dans la navigation de l'en-tête.", applicationIcon: "Icône de l'application", iconTabIcon: "Icône", iconTabImage: "Image", uploadImage: "Téléverser une image", chooseFromLibrary: "Choisir depuis la bibliothèque", uploadFailed: "Échec du téléversement de l'image", iconImageHelp: "Téléverser une image ou en sélectionner une depuis la bibliothèque à utiliser comme icône de l'application. Elle est affichée sur un fond transparent, les images avec transparence (PNG) donnent donc le meilleur résultat.", iconBackgroundColor: "Couleur de fond de l'icône", preview: "Aperçu" }, fx = { title: "Tableau de bord", description: "Configurer l'apparence et le comportement du tableau de bord utilisateur.", titleLabel: "Titre", titlePlaceholder: "Bienvenue dans votre bibliothèque de documents", titleHelp: "Affiché comme titre principal sur le tableau de bord.", descriptionLabel: "Description", descriptionPlaceholder: "Votre plateforme de gestion documentaire pour rechercher, organiser et travailler avec vos fichiers grâce à des outils basés sur l'IA", descriptionHelp: "Affiché sous le titre sur le tableau de bord.", backgroundImage: "Image de fond", backgroundPreviewAlt: "Aperçu de l'image de fond du tableau de bord", selectImage: "Sélectionner une image", changeImage: "Changer l'image", adjustPosition: "Ajuster la position", backgroundHelp: "Affichée comme image de fond principale sur le tableau de bord. L'image par défaut est utilisée si aucune image n'est définie.", bannerRenditionSize: "Taille du rendu de la bannière", bannerRenditionSizeHelp: "Largeur/hauteur maximale en pixels pour le rendu de l'image de bannière. Des valeurs plus élevées produisent des images plus nettes mais se chargent plus lentement.", bannerMaxHeight: "Hauteur max. de la bannière (px)", bannerMaxHeightHelp: "Hauteur de la bannière lorsque la page n'est pas défilée.", bannerMinHeight: "Hauteur min. de la bannière (px)", bannerMinHeightHelp: "Hauteur de la bannière lorsqu'elle est entièrement réduite après défilement.", displayMode: "Affichage du tableau de bord", displayModeOptions: { imageGrid: "Grille des derniers documents", recentlyViewed: "Récemment consultés" }, displayModeHelp: { imageGrid: "Afficher une grille des derniers documents avec défilement infini.", recentlyViewed: "Afficher une liste des documents récemment consultés par l'utilisateur." }, imageGridLayout: "Disposition de la grille d'images", imageGridLayoutHelp: "Configurer le nombre d'éléments affichés par ligne pour chaque taille d'écran, et le nombre d'éléments récupérés par page.", itemsPerPage: "Éléments par page", itemsPerPageHelp: "Nombre d'éléments récupérés par requête de recherche (utilisé pour la pagination par défilement infini).", uploadImage: "Téléverser une image", uploadFailed: "Échec du téléversement de l'image", invalidImage: "Veuillez sélectionner un fichier image de moins de 20 Mo.", agenticSearch: { label: "Agent de recherche agentique", placeholder: "Sélectionner un agent…", none: "Aucun (masquer le bouton)", help: "Agent utilisé par le bouton « Demander à l'assistant IA » du tableau de bord. Laissez sur Aucun pour masquer le bouton." } }, bx = { title: "Recherche avancée", description: "Configurer la disposition de la grille de la recherche avancée pour différentes tailles d'écran.", gridLayout: "Disposition de la grille", gridLayoutHelp: "Nombre d'éléments par ligne lorsque le panneau de recherche avancée est fermé.", advancedSearchLayout: "Disposition de la recherche avancée", advancedSearchLayoutHelp: "Nombre d'éléments par ligne lorsque le panneau de recherche avancée est ouvert." }, vx = { title: "Liste blanche", description: "Restreindre les types de documents visibles dans la bibliothèque et le tableau de bord. Lorsque la liste est vide, tous les types sont affichés.", dashboardWhitelist: "Liste blanche du tableau de bord", dashboardWhitelistHelp: "Lorsqu'elle n'est pas vide, seuls ces types de documents apparaîtront sur le tableau de bord.", libraryWhitelist: "Liste blanche de la bibliothèque", libraryWhitelistHelp: "Lorsqu'elle n'est pas vide, seuls ces types de documents apparaîtront dans les résultats de recherche de la bibliothèque.", collectionWhitelist: "Liste blanche des collections", collectionWhitelistHelp: "Lorsqu'elle n'est pas vide, seuls ces types seront disponibles lors de la création d'une collection.", selectTypesPlaceholder: "Sélectionner les types à ajouter à la liste blanche..." }, xx = { title: "Barre latérale", description: "Choisissez les éléments affichés dans la barre de navigation. Les nouveaux éléments sont affichés par défaut ; les éléments masqués sont aussi bloqués en accès direct par URL et redirigent vers la page d'accueil.", alwaysVisible: "Toujours visible", help: "La page d'accueil et les paramètres ne peuvent pas être masqués afin de garder la barre latérale utilisable.", hideItem: "Masquer {{item}}", showItem: "Afficher {{item}}" }, yx = { title: "Agents", description: "Gérer les agents visibles dans l'application. Les agents désactivés seront masqués des résultats de recherche.", noAgentsFound: "Aucun agent trouvé.", enabledCount: "{{enabledCount}} sur {{totalCount}} version d'agent activée", enabledCount_other: "{{enabledCount}} sur {{totalCount}} versions d'agent activées", columns: { enabled: "Activé", agent: "Agent", versions: "Versions" }, version_one: "{{count}} version", version_other: "{{count}} versions", toggleAgent: "Activer/désactiver {{name}}", collapseVersions: "Réduire les versions", expandVersions: "Développer les versions" }, Nx = { title: "Propriétés", description: "Configurer les propriétés de base et avancées affichées pour chaque type de document. Les types sans configuration spécifique utiliseront les propriétés par défaut.", documentType: "Type de document", selectTypePlaceholder: "Sélectionner un type de document à configurer...", searchTypes: "Rechercher des types...", noTypeFound: "Aucun type trouvé.", selectTypeHelp: "Sélectionnez un type de document pour configurer ses propriétés. Les types marqués d'un badge ont des définitions personnalisées.", basicProperties: "Propriétés de base", advancedProperties: "Propriétés avancées", addProperty: "Ajouter une propriété...", displayLabel: "Libellé d'affichage" }, wx = { title: "Tailles de rendu", description: "Configurer les tailles de rendu utilisées pour les grilles de miniatures et les aperçus modaux.", thumbnailGrid: "Grille de miniatures (px)", thumbnailDefault: "Par défaut : 512", modalPreview: "Aperçu modal (px)", modalDefault: "Par défaut : 1024" }, Cx = { title: "Filtres de base", description: "Configurer les filtres disponibles dans la barre de recherche de base de la bibliothèque." }, Sx = { title: "Facettes avancées", description: "Configurer les facettes disponibles lors des recherches avancées dans la bibliothèque.", field: "Champ", name: "Nom", displayName: "Nom d'affichage", addFacet: "Ajouter une facette...", filterByType: "Filtrer par type de document", selectTypePlaceholder: "Sélectionner un type pour parcourir ses propriétés...", allTypes: "Tous les types (propriétés communes uniquement)", typeFilterHelp: "Sélectionnez optionnellement un type de document pour parcourir ses propriétés spécifiques. Les propriétés communes sont toujours disponibles.", noFacetsConfigured: "Aucune facette configurée. Sélectionnez un champ ci-dessous pour commencer.", addCustomFacet: "Ajouter une facette personnalisée", fieldPlaceholder: "Chemin de la propriété (ex. properties.author)" }, Ax = { title: "Pondération de la recherche", description: "Configurer la pondération de chaque type d'embedding lors des recherches.", enableWeightedSearch: "Activer la recherche pondérée", enableWeightedSearchHelp: "Lorsqu'elle est activée, ces pondérations seront appliquées aux résultats de recherche par embedding.", text: "Texte", images: "Images", properties: "Propriétés" }, Dx = { title: "Langue", description: "Configurer la langue par défaut de l'application. Les utilisateurs peuvent modifier cette préférence individuellement.", defaultLanguage: "Langue par défaut", defaultLanguageHelp: "La langue par défaut utilisée lorsqu'un utilisateur n'a pas défini de préférence linguistique personnelle." }, Tx = { title: "Palette de couleurs", description: "Configurer la palette de couleurs par défaut de l'application. Les utilisateurs peuvent modifier cette préférence individuellement.", defaultColorScheme: "Palette par défaut", defaultColorSchemeHelp: "La palette de couleurs par défaut utilisée lorsqu'un utilisateur n'a pas défini de préférence personnelle." }, Ix = { title: "Favoris", description: "Configurez le stockage des favoris des utilisateurs. Les favoris sont enregistrés dans une collection par utilisateur du type lié ci-dessous.", quickSetup: "Configuration rapide", createAndLink: "Créer et lier le type de favoris", createAndLinkHelp: "Crée un type de contenu « Favoris » (ou réutilise l’existant) et le lie au paramètre ci-dessous.", collectionType: "Type de collection des favoris", collectionTypePlaceholder: "Sélectionnez un type de collection", collectionTypeHelp: "Type utilisé lors de la création de la collection de favoris de chaque utilisateur. Laissez vide pour la créer sans type spécifique.", noType: "Aucun type spécifique", typeDescription: "Type de contenu utilisé pour les collections de favoris des utilisateurs.", typeLinked: "Type de favoris créé et lié", typeError: "Échec de la création du type de favoris" }, Px = {
  tabs: hx,
  application: gx,
  dashboard: fx,
  library: bx,
  whitelist: vx,
  sidebar: xx,
  agents: yx,
  properties: Nx,
  rendition: wx,
  basicFilters: Cx,
  facets: Sx,
  searchWeights: Ax,
  language: Dx,
  colorScheme: Tx,
  favorites: Ix
}, kx = { filterPlaceholder: "Filtra servizi...", tags: "Tag", tagsPlaceholder: 'Inserisci i tag separati da ",". Premi invio per confermare', tagsHint: "es. agente, chat", version: "Versione", versionPlaceholder: "Inserisci la versione. Premi invio per confermare", versionHint: "Inserisci il numero di versione", noServicesAvailable: "Nessun servizio disponibile", noServicesHint: "Prova a modificare i criteri di ricerca.", contactAdmin: "Contatta il tuo amministratore per pubblicarne alcuni" }, _x = { noDescription: "Nessuna descrizione disponibile", notFound: "Interazione non trovata", notFoundDescription: "L'interazione che stai cercando non esiste", backToAgents: "Torna agli agenti", validationError: "Errore di validazione", validationNameDescription: "Inserisci sia il nome che la descrizione", validationFormErrors: "Correggi gli errori nel modulo", failedCreateCollection: "Creazione della raccolta report non riuscita", failedCreateCollectionDescription: "Riprova più tardi.", failedStartReport: "Avvio della generazione del report non riuscito", redirecting: "Verrai reindirizzato tra pochi secondi.", runAgent: "Esegui agente", executionName: "Nome esecuzione", executionNameHelp: "Dai a questa esecuzione un nome univoco per identificarla in seguito", executionNamePlaceholder: "es. Esecuzione bot supporto clienti", executionDescription: "Descrizione esecuzione", executionDescriptionHelp: "Descrivi lo scopo o il contesto di questa esecuzione", executionDescriptionPlaceholder: "es. Test del bot di supporto clienti con nuovi dati FAQ", executionDetails: "Dettagli esecuzione", executionDetailsDescription: "Nome e descrizione per questa esecuzione", interactionLabel: "Interazione", interactionDescription: "L'agente che stai eseguendo", parameters: "Parametri", parametersDescription: "Valori di configurazione per questa esecuzione" }, Ex = { agentNotFound: "Agente non trovato", agentNotFoundDescription: "L'agente che stai cercando non esiste", totalExecutions: "Esecuzioni totali", allTime: "Da sempre", successful: "Riuscite", failed: "Non riuscite", running: "In esecuzione", currentlyInProgress: "Attualmente in corso", executions: "Esecuzioni", noExecutionsYet: "Nessuna esecuzione ancora", runFirstExecution: "Esegui la tua prima esecuzione", statusCompleted: "Completata", statusFailed: "Non riuscita", statusRunning: "In esecuzione", statusUnknown: "Sconosciuto" }, zx = { executionDetails: "Dettagli esecuzione", executionDetailsDescription: "Fornisci un nome e una descrizione per questa esecuzione", selectDocument: "Seleziona documento", selectDocuments: "Seleziona documenti", selectDocumentDescription: "Scegli un documento da elaborare", selectDocumentsDescription: "Scegli i documenti da elaborare", uploadMedia: "Carica media", uploadMediaFiles: "Carica file multimediali", uploadMediaDescription: "Carica file multimediali da elaborare", selectObject: "Seleziona oggetto", selectObjects: "Seleziona oggetti", selectObjectDescription: "Configura le proprietà dell'oggetto", selectObjectsDescription: "Configura le proprietà degli oggetti", configureParameters: "Configura parametri", configureParametersDescription: "Imposta i parametri per questa esecuzione", reviewExecute: "Rivedi ed esegui", reviewExecuteDescription: "Rivedi la configurazione e avvia l'esecuzione", executionComplete: "Esecuzione completata", executionCompleteDescription: "La tua esecuzione è terminata" }, Fx = { media: "Media", document: "Documento", mediaFiles: "File multimediali", documents: "Documenti", selected: "Selezionati", selectItems: "Seleziona {{itemType}}", clickToView: "Clicca per visualizzare {{name}}", viewDocument: "Visualizza documento" }, Lx = { documentSummarizer: { title: "Riassunto documenti", description: "Riassumi automaticamente documenti lunghi, articoli e report in panoramiche concise" }, codeGenerator: { title: "Generatore di codice", description: "Genera frammenti di codice e template in diversi linguaggi di programmazione" }, emailComposer: { title: "Compositore email", description: "Componi email professionali con tono e stile personalizzabili" }, dataExtractor: { title: "Estrattore dati", description: "Estrai dati strutturati da testo non strutturato, PDF e immagini" }, translationHub: { title: "Centro traduzioni", description: "Traduci contenuti tra più lingue con consapevolezza del contesto" }, contentRewriter: { title: "Riscrittura contenuti", description: "Riscrivi e parafrasa contenuti mantenendo il significato originale" }, sentimentAnalyzer: { title: "Analizzatore di sentiment", description: "Analizza il sentiment e il tono emotivo del testo per feedback e recensioni dei clienti" }, meetingNotes: { title: "Note riunione", description: "Genera riepiloghi delle riunioni e azioni da intraprendere dalle trascrizioni" }, researchAssistant: { title: "Assistente alla ricerca", description: "Conduci ricerche e compila risultati da fonti multiple" }, socialMediaWriter: { title: "Scrittore per social media", description: "Crea post coinvolgenti per i social media ottimizzati per ogni piattaforma" }, contractAnalyzer: { title: "Analizzatore contratti", description: "Esamina contratti e documenti legali per evidenziare termini chiave e rischi" }, productDescriptions: { title: "Descrizioni prodotti", description: "Genera descrizioni prodotto accattivanti per gli annunci e-commerce" }, knowledgeBase: { title: "Base di conoscenza", description: "Interroga e recupera informazioni dai documenti della tua organizzazione" }, reportGenerator: { title: "Generatore di report", description: "Crea report dettagliati e riepiloghi analitici dai dati grezzi" }, taskPlanner: { title: "Pianificatore attività", description: "Suddividi progetti complessi in attività realizzabili e tempistiche" }, faqGenerator: { title: "Generatore FAQ", description: "Genera sezioni FAQ complete dalla documentazione del prodotto" }, assistant: { title: "Assistente", description: "Ottieni aiuto con i tuoi contenuti e attività grazie all'assistenza basata sull'IA" }, seoTool: { title: "Strumento SEO", description: "Genera e ottimizza contenuti SEO per una migliore visibilità nei motori di ricerca" }, artGeneration: { title: "Generazione artistica", description: "Genera opere d'arte e immagini sorprendenti utilizzando la tecnologia IA" }, reverseSearch: { title: "Ricerca inversa", description: "Cerca immagini e contenuti simili utilizzando la ricerca inversa per immagini" }, basicAgent: { title: "Agente base", description: "Chatta con un agente IA base per assistenza con varie attività e domande" } }, Rx = { uploadNew: "Carica nuovo", uploadMedia: "Carica media", uploadDocument: "Carica documento", dragDropMedia: "Trascina e rilascia i file multimediali qui", dragDropDocuments: "Trascina e rilascia i documenti qui", uploading: "Caricamento...", progressComplete: "{{progress}}% completato", selectFiles: "Seleziona i file da caricare" }, $x = {
  search: kx,
  execution: _x,
  dashboard: Ex,
  steps: zx,
  media: Fx,
  tools: Lx,
  upload: Rx
}, Mx = "Cerca raccolte...", Ox = "Crea raccolta", jx = "Ancora nessuna raccolta {{label}}", Bx = "Ancora nessuna raccolta", Hx = "Nessuna raccolta {{label}} trovata", Vx = "Nessuna raccolta trovata", qx = "Prova a modificare la ricerca", Gx = "Crea la tua prima raccolta per iniziare", Wx = "personale", Ux = "dell'organizzazione", Kx = { notFound: "Raccolta non trovata", all: "Tutti", collections: "Raccolte", collectionsCount: "Raccolte ({{count}})", documents: "Documenti", documentsCount: "Documenti ({{count}})", total: "totale", noItems: "Nessun elemento in questa raccolta", noItemsHelp: "Aggiungi documenti o raccolte per iniziare", noFilterResults: "Nessun {{filter}} trovato", noFilterResultsHelp: "Prova a cambiare il filtro" }, Yx = { title: "Aggiungi a raccolta", titleWithCount: "Aggiungi {{count}} documenti a una raccolta", selectExisting: "Seleziona esistente", createNew: "Crea nuova", searchPlaceholder: "Cerca raccolte...", noCollectionsFound: "Nessuna raccolta trovata", createNewCollection: "Crea una nuova raccolta", selectedCount_one: "{{count}} raccolta selezionata", selectedCount_other: "{{count}} raccolte selezionate", nameRequired: "Nome *", namePlaceholder: "Inserisci il nome della raccolta", descriptionLabel: "Descrizione", descriptionPlaceholder: "Inserisci la descrizione della raccolta (opzionale)", typeLabel: "Tipo", typePlaceholder: "Seleziona un tipo (opzionale)", groupsLabel: "Gruppi", loadingGroups: "Caricamento gruppi...", noGroupsAvailable: "Nessun gruppo disponibile", successAdded: "Aggiunto con successo a {{count}} {{label}}", errorAdding: "Errore durante l'aggiunta alle raccolte", errorCreating: "Errore durante la creazione della raccolta", documentsAdded: "{{count}} {{label}} aggiunti", successCreatedAndAdded: 'Aggiunto con successo a "{{name}}"', adding: "Aggiunta...", createAndAdd: "Crea e aggiungi", addToCollectionBtn: "Aggiungi a raccolta", addToCollectionsBtn: "Aggiungi a {{count}} raccolte" }, Xx = {
  searchPlaceholder: Mx,
  createCollection: Ox,
  noCollectionsYet: jx,
  noCollectionsYetGeneric: Bx,
  noCollectionsFound: Hx,
  noCollectionsFoundGeneric: Vx,
  tryAdjustingSearch: qx,
  createFirstCollection: Gx,
  personal: Wx,
  organization: Ux,
  detail: Kx,
  addToCollection: Yx
}, Qx = { save: "Salva", saving: "Salvataggio...", cancel: "Annulla", delete: "Elimina", deleting: "Eliminazione...", confirm: "Conferma", add: "Aggiungi", remove: "Rimuovi", search: "Cerca", filter: "Filtra", filters: "Filtri", clearAll: "Cancella tutto", clearFilters: "Cancella filtri", close: "Chiudi", back: "Indietro", continue: "Continua", execute: "Esegui", download: "Scarica", downloading: "Download in corso...", refresh: "Aggiorna", edit: "Modifica", select: "Seleziona", showPreview: "Mostra anteprima", hidePreview: "Nascondi anteprima", addToCollection: "Aggiungi a raccolta", logOut: "Esci", done: "Fatto", addItem: "Aggiungi elemento", chooseExisting: "Scegli esistente", apply: "Applica", reset: "Ripristina", upload: "Carica", copyLink: "Copia link", copied: "Copiato!", byEmail: "Via email", copiedToClipboard: "Copiato negli appunti", showInfo: "Mostra informazioni", hideInfo: "Nascondi informazioni", editProperties: "Modifica proprietà", resetChat: "Ripristina chat" }, Zx = { loading: "Caricamento...", loadingMore: "Caricamento in corso...", noResults: "Nessun risultato trovato", noMoreItems: "Nessun altro elemento da caricare", empty: "Nessun elemento da visualizzare", error: "Errore", errorOccurred: "Si è verificato un errore", loadingPreview: "Caricamento anteprima...", noContentAvailable: "Nessun contenuto disponibile", notSet: "Non impostato", yes: "Sì", no: "No", emptyList: "Lista vuota", emptyValue: "Vuoto", waiting: "In attesa...", uploading: "Caricamento...", uploadedSuccessfully: "Caricato con successo", updated: "Aggiornato", skipped: "Saltato", uploadFailed: "Caricamento non riuscito", comingSoon: "Prossimamente" }, Jx = { title: "404 - Pagina non trovata", description: "La pagina che stai cercando non esiste." }, ey = { label: "Tema", light: "Chiaro", dark: "Scuro", system: "Sistema" }, ty = { label: "Schema colori", default: "Predefinito", red: "Rosso", orange: "Arancione", yellow: "Giallo", green: "Verde", teal: "Foglia di tè", blue: "Blu", indigo: "Indaco", violet: "Viola", fuchsia: "Fucsia", pink: "Rosa acceso", rose: "Rosa", slate: "Ardesia" }, ny = { label: "Lingua" }, ay = { label: "Dashboard", user: "Utente", admin: "Amministratore" }, oy = "Portale App", iy = "altro", ry = "Raccolta", sy = "Documento", ly = "Apri in una nuova scheda", cy = "v{{version}}", dy = "{{count}} elemento", uy = "{{count}} elementi", my = { successTitle: "Impostazioni salvate", successDescription: "Aggiornamento delle impostazioni dell'applicazione in corso...", errorTitle: "Salvataggio impostazioni non riuscito", errorDescription: "Impossibile aggiornare le impostazioni. Riprova." }, py = { sm: "Piccolo (sm)", smHint: ">= 640px", md: "Medio (md)", mdHint: ">= 768px", lg: "Grande (lg)", lgHint: ">= 1024px", xl: "Extra grande (xl)", xlHint: ">= 1280px" }, hy = { name: "Nome", type: "Tipo", description: "Descrizione", createdAt: "Creato", updatedAt: "Aggiornato", status: "Stato", createdBy: "Creato da", format: "Formato", modified: "Modificato", inputParameters: "Parametri di input", property: "Proprietà", label: "Etichetta", modifier: "Modificatore" }, gy = { selectIcon: "Seleziona un'icona...", searchIcons: "Cerca icone...", noIconsFound: "Nessuna icona trovata." }, fy = { yes: "Sì", no: "No" }, by = { searchPlaceholder: "Cerca {{label}}..." }, vy = { enable: "Abilita", enterField: "Inserisci {{field}}", selectField: "Seleziona {{field}}", noPropertiesDefined: "Nessuna proprietà definita per questo oggetto", noSchemaDefined: "Nessuno schema definito per questo oggetto", noSchemaDefinedForItems: "Nessuno schema definito per gli elementi", noParametersRequired: "Questa interazione non richiede parametri", itemIndex: "Elemento {{index}}", noItemsAdded: "Nessun elemento aggiunto", clickAddItem: 'Clicca "Aggiungi elemento" per creare una nuova voce', enterTextHere: "Inserisci testo qui...", enterValueHere: "Inserisci valore qui...", selectOrUploadDocument: "Seleziona o carica un documento...", noValue: "Nessun valore", noDocumentData: "Nessun dato documento disponibile" }, xy = { uploadDocuments: "Carica documenti", uploading: "Caricamento...", uploadComplete: "Caricamento completato", addFilesDescription: "Aggiungi file da caricare", uploadingFiles: "Caricamento di {{count}} file", uploadingFiles_other: "Caricamento di {{count}} file", uploadSuccess_one: "{{count}} file caricato con successo", uploadSuccess_other: "{{count}} file caricati con successo", clickToBrowse: "Clicca per sfogliare o trascina i file qui", pasteFromClipboard: "Puoi anche incollare file dagli appunti", filesSelected_one: "{{count}} file selezionato", filesSelected_other: "{{count}} file selezionati", fileLimitReached: "Limite file raggiunto", uploadingProgress: "Caricamento file in corso...", invalidFileType: "Tipo di file non valido", invalidFileTypeDescription: "Nessuno dei file selezionati corrisponde ai tipi di file consentiti", someFilesIgnored: "Alcuni file ignorati", filesIgnored_one: "{{count}} file è stato ignorato (tipo non supportato)", filesIgnored_other: "{{count}} file sono stati ignorati (tipo non supportato)", maxFilesAllowed: "Massimo {{max}} file consentiti", failedToDownload: "Download del file non riuscito", documentNotFound: "Documento non trovato" }, yy = { selectType: "Seleziona un tipo", searchTypes: "Cerca tipi...", noTypeFound: "Nessun tipo trovato.", selectTypes: "Seleziona tipi...", selectAgents: "Seleziona agenti...", searchAgents: "Cerca agenti...", noAgentFound: "Nessun agente trovato.", agentsSelected: "{{count}} agente/i selezionato/i", typesSelected: "{{count}} tipo/i selezionato/i", selectProperty: "Seleziona una proprietà...", searchProperties: "Cerca proprietà...", noPropertyFound: "Nessuna proprietà trovata.", noPropertiesAvailable: "Nessuna proprietà disponibile", typeProperties: "Proprietà del tipo", commonProperties: "Proprietà comuni", none: "Nessuno" }, Ny = { title: "Visualizzati di recente", noDocuments: "Nessun documento visualizzato di recente", documentsWillAppear: "I documenti che apri appariranno qui" }, wy = { chatWithDocument: "Chatta con il tuo documento", askQuestions: "Fai domande su <strong>{{name}}</strong> e ottieni risposte intelligenti basate sul suo contenuto.", errorProcessing: "Mi scuso, ma ho riscontrato un problema nell'elaborazione della tua richiesta. Riprova.", errorGeneral: "Mi scuso, ma ho riscontrato un errore. Riprova più tardi.", askPlaceholder: "Fai una domanda su questo documento...", waitingPlaceholder: "In attesa di risposta..." }, Cy = { noContentSource: "Nessuna fonte di contenuto del documento", chat: "Chat", properties: "Proprietà" }, Sy = { semanticSearch: "Ricerca semantica", semanticSearchPlaceholder: "Digita cosa stai cercando", propertySearch: "Ricerca per proprietà", types: "Tipi", statuses: "Stati", users: "Utenti", autoSearch: "Ricerca automatica", selectDateRange: "Seleziona un intervallo di date", all: "Tutti", contentType: "Tipo di contenuto", mimeType: "Tipo MIME", scoreLabel: "Punteggio", scoreTooltip: "Definire una soglia di pertinenza del punteggio consente di controllare quanto rigorosi devono essere i risultati di ricerca. Un punteggio di 0,60 è generalmente considerato una corrispondenza pertinente, mentre punteggi inferiori sono generalmente considerati meno pertinenti.", selectFiltersToSearch: "Seleziona filtri per cercare", selectAtLeastOneFilter: "Seleziona almeno un valore in qualsiasi filtro di ricerca per visualizzare i risultati.", searchDocuments: "Cerca documenti...", showMore: "Mostra altri {{count}}", showLess: "Mostra meno" }, Ay = { documents: "Documenti", selectAll: "Seleziona tutto", selectRow: "Seleziona riga", gridView: "Vista griglia", tableView: "Vista tabella", listView: "Vista elenco", items: "Elementi" }, Dy = { totalDocuments: "Documenti totali", allDocuments: "Tutti i documenti nel sistema", thisWeek: "Questa settimana", documentsThisWeek: "Documenti caricati questa settimana", thisMonth: "Questo mese", documentsThisMonth: "Documenti caricati questo mese", thisYear: "Quest'anno", documentsThisYear: "Documenti caricati quest'anno" }, Ty = { title: "Azioni rapide", uploadDocument: "Carica documento", searchDocuments: "Cerca documenti", createCollection: "Crea raccolta", latestAgents: "Ultimi agenti" }, Iy = { activityWillAppear: "Le attività appariranno qui dopo aver caricato i documenti", recentActivity: "Attività recente", noActivity: "Ancora nessuna attività" }, Py = { title: "Regola posizione del banner", description: "Trascina per riposizionare. La zona luminosa mostra cosa sarà visibile nella dashboard.", zoom: "Zoom" }, ky = { basic: "Base", advanced: "Avanzate", propertiesGenerating: "Le proprietà sono in fase di generazione, controlla tra poco." }, _y = { nameLabel: "Nome", descriptionLabel: "Descrizione", typeLabel: "Tipo", groupsLabel: "Gruppi", loadingGroups: "Caricamento gruppi...", noGroupsAvailable: "Nessun gruppo disponibile", enterName: "Inserisci nome raccolta", enterDescription: "Inserisci descrizione raccolta (opzionale)", selectType: "Seleziona un tipo (opzionale)", searchItems: "Cerca elementi", addedMembers: "Membri aggiunti", searchDocuments: "Cerca documenti", searchCollections: "Cerca raccolte", clickToAdd: "Clicca su un elemento per aggiungerlo alla raccolta", noMembersAdded: "Nessun membro aggiunto.", searchAndClick: "Cerca e clicca gli elementi a sinistra per aggiungerli.", members: "Membri", saveChanges: "Salva modifiche", createCollection: "Crea raccolta", saveChangesDescription: "Cliccando <strong>Salva modifiche</strong> la raccolta verrà aggiornata e tutte le modifiche ai membri verranno applicate.", createCollectionDescription: "Cliccando <strong>Crea raccolta</strong> la raccolta verrà creata con i membri specificati.", noDescription: "Nessuna descrizione", documentCount_one: "{{count}} documento", documentCount_other: "{{count}} documenti", subCollectionCount_one: "{{count}} sotto-raccolta", subCollectionCount_other: "{{count}} sotto-raccolte", newCount: "+{{count}} nuovo/i", noMembers: "Nessun membro in questa raccolta", newBadge: "nuovo", editCollection: "Modifica raccolta", createCollectionTitle: "Crea raccolta", editDescription: "Aggiorna le proprietà della raccolta e gestisci i membri", createDescription: "Crea una nuova raccolta per organizzare i tuoi documenti", saving: "Salvataggio...", creating: "Creazione...", next: "Avanti", stepDetails: "Dettagli", stepMembers: "Membri", stepReview: "Riepilogo", noDocumentsFound: "Nessun documento trovato.", noCollectionsFound: "Nessuna raccolta trovata.", typeToSearchDocuments: "Digita per cercare documenti", typeToSearchCollections: "Digita per cercare raccolte", itemCount_one: "{{count}} elemento", itemCount_other: "{{count}} elementi", newMemberLabel: "(nuovo)" }, Ey = "Documenti", zy = "Raccolte", Fy = "{{count}} documento", Ly = "{{count}} documenti", Ry = { add: "Aggiungi ai preferiti", remove: "Rimuovi dai preferiti", title: "I miei preferiti", description: "I tuoi documenti preferiti", empty: "Non hai ancora preferiti", emptyHelp: "Aggiungi documenti ai preferiti per vederli qui", loadError: "Impossibile caricare i preferiti", descriptionUser: "Documenti preferiti di {{name}}" }, $y = {
  actions: Qx,
  states: Zx,
  notFound: Jx,
  theme: ey,
  colorScheme: ty,
  language: ny,
  dashboardView: ay,
  appPortal: oy,
  more: iy,
  collection: ry,
  document: sy,
  openInNewTab: ly,
  version: cy,
  items_one: dy,
  items_other: uy,
  settingsToast: my,
  gridCols: py,
  properties: hy,
  iconPicker: gy,
  boolean: fy,
  search: by,
  form: vy,
  upload: xy,
  inputs: yy,
  recentlyViewed: Ny,
  chat: wy,
  documentPanel: Cy,
  filters: Sy,
  tables: Ay,
  stats: Dy,
  quickActions: Ty,
  activityFeed: Iy,
  bannerPosition: Py,
  propertiesPanel: ky,
  collectionWizard: _y,
  documents: Ey,
  collections: zy,
  documentCount_one: Fy,
  documentCount_other: Ly,
  favorites: Ry
}, My = "Benvenuto nella tua Libreria Documenti", Oy = "La tua piattaforma di gestione documentale per cercare, organizzare e lavorare con i file utilizzando strumenti basati sull'IA", jy = "Cerca documenti o risorse...", By = "Nessun risultato trovato", Hy = "Cerca in:", Vy = "Raccolta", qy = { everywhere: "Ovunque", contents: "Contenuti", title: "Titolo", collections: "Raccolte" }, Gy = "Panorama ECM", Wy = "Panoramica", Uy = "Attività", Ky = "Cerca documenti...", Yy = "Vista griglia", Xy = "Vista elenco", Qy = "Vista elenco prossimamente", Zy = "Documenti recenti", Jy = "Caricamenti nel tempo", eN = "Archiviazione per tipo", tN = "Principali contributori", nN = "Visualizzazione grafico prossimamente", aN = "Statistiche contributori prossimamente", oN = { failedToLoadMore: "Caricamento di altre immagini non riuscito", failedToLoadMoreDescription: "Impossibile recuperare altre immagini. Riprova.", failedToLoad: "Caricamento immagini non riuscito", failedToLoadDescription: "Impossibile recuperare le ultime immagini. Riprova.", searchFailed: "Ricerca non riuscita", searchFailedDescription: "Impossibile eseguire la ricerca semantica. Riprova." }, iN = { ask: "Chiedi all'assistente IA", title: "Assistente IA", open: "Apri l'assistente IA", minimize: "Riduci a icona", enlarge: "Ingrandisci", shrink: "Rimpicciolisci", starting: "Avvio della conversazione…", empty: "Avvia una ricerca per parlare con l'assistente.", inputPlaceholder: "Scrivi un messaggio…", notConfigured: "Nessun agente è configurato per la ricerca agentica.", noRunId: "Nessuna esecuzione dell'agente restituita. Il server potrebbe non supportare questa funzionalità.", startFailed: "Impossibile avviare la conversazione.", tryAgain: "Riprova", searchPrefix: "Cerca documenti o contenuti relativi a: ", send: "Invia" }, rN = {
  defaultTitle: My,
  defaultDescription: Oy,
  searchPlaceholder: jy,
  noResults: By,
  searchIn: Hy,
  collection: Vy,
  searchModes: qy,
  ecmLandscape: Gy,
  overview: Wy,
  activity: Uy,
  searchDocuments: Ky,
  gridView: Yy,
  listView: Xy,
  listViewComingSoon: Qy,
  recentDocuments: Zy,
  uploadsOverTime: Jy,
  storageByType: eN,
  topContributors: tN,
  chartComingSoon: nN,
  contributorComingSoon: aN,
  errors: oN,
  aiAssistant: iN
}, sN = "Le mie", lN = "Tutte", cN = "Cerca per nome...", dN = "Vista schede", uN = "Vista tabella", mN = "Interazione", pN = "Creato da", hN = "Creato il", gN = "Nome", fN = "Descrizione", bN = "Nessun filtro disponibile", vN = "Caricamento esecuzioni non riuscito: {{message}}", xN = "Nessuna esecuzione trovata", yN = "Tipo contenitore esecuzione non configurato", NN = "Caricamento...", wN = { notFound: "Esecuzione non trovata", notFoundDescription: "L'esecuzione che stai cercando non esiste.", encounteredError: "L'esecuzione ha riscontrato un errore", contactAdmin: "Contatta l'amministratore di sistema per ulteriori informazioni", agentResponse: "Risposta dell'agente", completedSuccessfully: "Esecuzione completata con successo", executionDetails: "Dettagli esecuzione", inputParameters: "Parametri di input" }, CN = {
  mine: sN,
  all: lN,
  searchPlaceholder: cN,
  cardView: dN,
  tableView: uN,
  interaction: mN,
  createdBy: pN,
  createdAt: hN,
  name: gN,
  description: fN,
  noFiltersAvailable: bN,
  failedToLoad: vN,
  noExecutionsFound: xN,
  containerTypeNotConfigured: yN,
  documentLoading: NN,
  detail: wN
}, SN = "Ricerca automatica", AN = "Avanzata", DN = "Base", TN = "Cerca documenti...", IN = { download: "Scarica", addToCollection: "Aggiungi a raccolta", delete: "Elimina", more: "altro", errorDownloading: "Errore durante il download del documento", errorDownloadingDescription: "Si è verificato un errore durante il download del documento.", deleteTitle: "Elimina {{typeName}}", deleteConfirm: "Sei sicuro di voler eliminare questo {{typeName}}?", deleteSuccess: "{{typeName}} eliminato", deleteSuccessDescription: "{{typeName}} {{id}} è stato eliminato con successo", deleteError: "Errore durante l'eliminazione di {{typeName}}" }, PN = { type: "Tipo", typePlaceholder: "Cerca per tipo", status: "Stato", statusPlaceholder: "Cerca per stato", createdBy: "Creato da", createdByPlaceholder: "Cerca per autore" }, kN = "{{count}} selezionato/i", _N = { title: "Nessun documento trovato", description: "Prova a modificare i filtri o i termini di ricerca" }, EN = {
  autoSearch: SN,
  advanced: AN,
  basic: DN,
  searchPlaceholder: TN,
  document: IN,
  facets: PN,
  selectedCount: kN,
  noDocuments: _N
}, zN = { application: "Applicazione", administration: "Amministrazione" }, FN = { dashboard: { title: "Dashboard", tooltip: "Dashboard" }, advancedSearch: { title: "Ricerca avanzata", tooltip: "Ricerca avanzata", description: "Cerca ed esplora i tuoi documenti" }, collections: { title: "Raccolte", tooltip: "Raccolte", description: "Organizza e gestisci le tue raccolte" }, collectionsPersonal: { title: "Personali", tooltip: "Raccolte personali" }, collectionsOrganization: { title: "Organizzazione", tooltip: "Raccolte dell'organizzazione" }, agents: { title: "Agenti", tooltip: "Agenti", description: "Configura e gestisci i tuoi agenti IA" }, browseAgents: { title: "Esplora agenti", tooltip: "Esplora agenti" }, executions: { title: "Esecuzioni", tooltip: "Esecuzioni agenti" }, settings: { title: "Impostazioni", tooltip: "Impostazioni", description: "Gestisci le impostazioni e le configurazioni dell'applicazione" }, favorites: { title: "Preferiti", tooltip: "Preferiti", description: "I tuoi documenti preferiti" } }, LN = {
  sections: zN,
  items: FN
}, RN = { application: "Applicazione", dashboard: "Dashboard", library: "Ricerca avanzata", whitelist: "Whitelist", sidebar: "Barra laterale", agents: "Agenti", properties: "Proprietà", rendition: "Resa grafica", search: "Ricerca", language: "Lingua", colorScheme: "Schema colori", favorites: "Preferiti" }, $N = { title: "Applicazione", description: "Personalizza il nome, l'icona e il branding dell'applicazione visualizzati nella barra laterale e nel breadcrumb.", applicationName: "Nome applicazione", applicationNamePlaceholder: "ECM", applicationNameHelp: "Personalizza il nome dell'applicazione mostrato nell'intestazione della barra laterale.", leaveEmptyDefault: "Lascia vuoto per usare il nome predefinito: ", breadcrumbLabel: "Etichetta breadcrumb", breadcrumbPlaceholder: "Dashboard", breadcrumbHelp: "Personalizza l'etichetta del breadcrumb principale mostrata nella navigazione dell'intestazione.", applicationIcon: "Icona applicazione", iconTabIcon: "Icona", iconTabImage: "Immagine", uploadImage: "Carica immagine", chooseFromLibrary: "Scegli dalla libreria", uploadFailed: "Caricamento dell'immagine non riuscito", iconImageHelp: "Carica un'immagine o selezionane una dalla libreria da usare come icona dell'applicazione. Viene visualizzata su sfondo trasparente, quindi le immagini con trasparenza (PNG) danno il risultato migliore.", iconBackgroundColor: "Colore di sfondo dell'icona", preview: "Anteprima" }, MN = { title: "Dashboard", description: "Configura l'aspetto e il comportamento della dashboard utente.", titleLabel: "Titolo", titlePlaceholder: "Benvenuto nella tua Libreria Documenti", titleHelp: "Visualizzato come intestazione principale nella dashboard.", descriptionLabel: "Descrizione", descriptionPlaceholder: "La tua piattaforma di gestione documentale per cercare, organizzare e lavorare con i file utilizzando strumenti basati sull'IA", descriptionHelp: "Visualizzata sotto il titolo nella dashboard.", backgroundImage: "Immagine di sfondo", backgroundPreviewAlt: "Anteprima sfondo dashboard", selectImage: "Seleziona immagine", changeImage: "Cambia immagine", adjustPosition: "Regola posizione", backgroundHelp: "Visualizzata come sfondo hero nella dashboard. Viene usata l'immagine predefinita se non impostata.", bannerRenditionSize: "Dimensione resa del banner", bannerRenditionSizeHelp: "Larghezza/altezza massima in pixel per la resa dell'immagine del banner. Valori più alti producono immagini più nitide ma più lente da caricare.", bannerMaxHeight: "Altezza massima banner (px)", bannerMaxHeightHelp: "Altezza del banner quando la pagina non è stata scrollata.", bannerMinHeight: "Altezza minima banner (px)", bannerMinHeightHelp: "Altezza del banner quando è completamente compresso dopo lo scroll.", displayMode: "Visualizzazione della dashboard", displayModeOptions: { imageGrid: "Griglia dei documenti più recenti", recentlyViewed: "Visualizzati di recente" }, displayModeHelp: { imageGrid: "Mostra una griglia dei documenti più recenti con scorrimento infinito.", recentlyViewed: "Mostra un elenco dei documenti visualizzati di recente dall'utente." }, imageGridLayout: "Layout griglia immagini", imageGridLayoutHelp: "Configura il numero di elementi visualizzati per riga a ogni dimensione dello schermo e quanti elementi vengono recuperati per pagina.", itemsPerPage: "Elementi per pagina", itemsPerPageHelp: "Numero di elementi recuperati per ogni richiesta di ricerca (usato per la paginazione a scorrimento infinito).", uploadImage: "Carica immagine", uploadFailed: "Caricamento dell'immagine non riuscito", invalidImage: "Seleziona un file immagine inferiore a 20 MB.", agenticSearch: { label: "Agente di ricerca agentica", placeholder: "Seleziona un agente…", none: "Nessuno (nascondi il pulsante)", help: "Agente utilizzato dal pulsante « Chiedi all'assistente IA » della dashboard. Lascia su Nessuno per nascondere il pulsante." } }, ON = { title: "Ricerca avanzata", description: "Configura il layout della griglia della ricerca avanzata per le diverse dimensioni dello schermo.", gridLayout: "Layout griglia", gridLayoutHelp: "Numero di elementi per riga quando il pannello di ricerca avanzata è chiuso.", advancedSearchLayout: "Layout ricerca avanzata", advancedSearchLayoutHelp: "Numero di elementi per riga quando il pannello di ricerca avanzata è aperto." }, jN = { title: "Whitelist", description: "Limita i tipi di documento visibili nella libreria e nella dashboard. Se vuota, tutti i tipi vengono mostrati.", dashboardWhitelist: "Whitelist dashboard", dashboardWhitelistHelp: "Se non vuota, solo questi tipi di documento appariranno nella dashboard.", libraryWhitelist: "Whitelist libreria", libraryWhitelistHelp: "Se non vuota, solo questi tipi di documento appariranno nei risultati di ricerca della libreria.", collectionWhitelist: "Whitelist raccolte", collectionWhitelistHelp: "Se non vuota, solo questi tipi saranno disponibili durante la creazione di una raccolta.", selectTypesPlaceholder: "Seleziona i tipi da inserire nella whitelist..." }, BN = { title: "Barra laterale", description: "Scegli quali elementi compaiono nella barra di navigazione. I nuovi elementi sono mostrati per impostazione predefinita; gli elementi nascosti vengono bloccati anche all'accesso diretto tramite URL e reindirizzano alla home page.", alwaysVisible: "Sempre visibile", help: "La home page e le impostazioni non possono essere nascoste per mantenere utilizzabile la barra laterale.", hideItem: "Nascondi {{item}}", showItem: "Mostra {{item}}" }, HN = { title: "Agenti", description: "Gestisci quali agenti sono visibili nell'applicazione. Gli agenti disabilitati saranno nascosti dai risultati di ricerca.", noAgentsFound: "Nessun agente trovato.", enabledCount: "{{enabledCount}} di {{totalCount}} versione agente abilitata", enabledCount_other: "{{enabledCount}} di {{totalCount}} versioni agente abilitate", columns: { enabled: "Abilitato", agent: "Agente", versions: "Versioni" }, version_one: "{{count}} versione", version_other: "{{count}} versioni", toggleAgent: "Attiva/disattiva {{name}}", collapseVersions: "Comprimi versioni", expandVersions: "Espandi versioni" }, VN = { title: "Proprietà", description: "Configura le proprietà base e avanzate visualizzate per ogni tipo di documento. I tipi senza configurazione specifica useranno le proprietà predefinite.", documentType: "Tipo di documento", selectTypePlaceholder: "Seleziona un tipo di documento da configurare...", searchTypes: "Cerca tipi...", noTypeFound: "Nessun tipo trovato.", selectTypeHelp: "Seleziona un tipo di documento per configurarne le proprietà. I tipi con un badge hanno definizioni personalizzate.", basicProperties: "Proprietà base", advancedProperties: "Proprietà avanzate", addProperty: "Aggiungi proprietà...", displayLabel: "Etichetta di visualizzazione" }, qN = { title: "Dimensioni resa grafica", description: "Configura le dimensioni di resa utilizzate per le griglie di miniature e le anteprime modali.", thumbnailGrid: "Griglia miniature (px)", thumbnailDefault: "Predefinito: 512", modalPreview: "Anteprima modale (px)", modalDefault: "Predefinito: 1024" }, GN = { title: "Filtri di base", description: "Configura quali filtri sono disponibili nella barra di ricerca di base nella libreria." }, WN = { title: "Facet avanzati", description: "Configura quali facet sono disponibili durante le ricerche avanzate nella libreria.", field: "Campo", name: "Nome", displayName: "Nome visualizzato", addFacet: "Aggiungi facet...", filterByType: "Filtra per tipo di documento", selectTypePlaceholder: "Seleziona un tipo per sfogliarne le proprietà...", allTypes: "Tutti i tipi (solo proprietà comuni)", typeFilterHelp: "Seleziona opzionalmente un tipo di documento per sfogliarne le proprietà specifiche. Le proprietà comuni sono sempre disponibili.", noFacetsConfigured: "Nessun facet configurato. Seleziona un campo qui sotto per iniziare.", addCustomFacet: "Aggiungi faccetta personalizzata", fieldPlaceholder: "Percorso della proprietà (es. properties.author)" }, UN = { title: "Pesi di ricerca", description: "Configura il peso di ogni tipo di embedding durante le ricerche.", enableWeightedSearch: "Abilita ricerca ponderata", enableWeightedSearchHelp: "Quando abilitata, questi pesi verranno applicati ai risultati di ricerca per embedding.", text: "Testo", images: "Immagini", properties: "Proprietà" }, KN = { title: "Lingua", description: "Configura la lingua predefinita dell'applicazione. Gli utenti possono sovrascrivere questa preferenza individualmente.", defaultLanguage: "Lingua predefinita", defaultLanguageHelp: "La lingua predefinita utilizzata quando un utente non ha impostato una preferenza linguistica personale." }, YN = { title: "Schema colori", description: "Configura lo schema colori predefinito dell'applicazione. Gli utenti possono sovrascrivere questa preferenza individualmente.", defaultColorScheme: "Schema predefinito", defaultColorSchemeHelp: "Lo schema colori predefinito utilizzato quando un utente non ha impostato una preferenza personale." }, XN = { title: "Preferiti", description: "Configura come vengono memorizzati i preferiti degli utenti. I preferiti sono salvati in una raccolta per utente del tipo collegato di seguito.", quickSetup: "Configurazione rapida", createAndLink: "Crea e collega il tipo dei preferiti", createAndLinkHelp: "Crea un tipo di contenuto «Preferiti» (o riusa quello esistente) e lo collega all’impostazione sottostante.", collectionType: "Tipo di raccolta dei preferiti", collectionTypePlaceholder: "Seleziona un tipo di raccolta", collectionTypeHelp: "Tipo usato durante la creazione della raccolta dei preferiti di ogni utente. Lascia vuoto per crearla senza un tipo specifico.", noType: "Nessun tipo specifico", typeDescription: "Tipo di contenuto usato per le raccolte dei preferiti degli utenti.", typeLinked: "Tipo dei preferiti creato e collegato", typeError: "Impossibile creare il tipo dei preferiti" }, QN = {
  tabs: RN,
  application: $N,
  dashboard: MN,
  library: ON,
  whitelist: jN,
  sidebar: BN,
  agents: HN,
  properties: VN,
  rendition: qN,
  basicFilters: GN,
  facets: WN,
  searchWeights: UN,
  language: KN,
  colorScheme: YN,
  favorites: XN
}, ZN = { filterPlaceholder: "Filtrar serviços...", tags: "Tags", tagsPlaceholder: 'Insira tags separadas por ",". Pressione Enter ao concluir', tagsHint: "ex: agente, chat", version: "Versão", versionPlaceholder: "Insira a versão. Pressione Enter ao concluir", versionHint: "Insira o número da versão", noServicesAvailable: "Nenhum serviço disponível", noServicesHint: "Tente ajustar seus critérios de busca.", contactAdmin: "Entre em contato com o administrador para publicar alguns" }, JN = { noDescription: "Nenhuma descrição disponível", notFound: "Interação não encontrada", notFoundDescription: "A interação que você está procurando não existe", backToAgents: "Voltar para agentes", validationError: "Erro de validação", validationNameDescription: "Forneça o nome e a descrição", validationFormErrors: "Corrija os erros no formulário", failedCreateCollection: "Falha ao criar coleção de relatório", failedCreateCollectionDescription: "Tente novamente mais tarde.", failedStartReport: "Falha ao iniciar a geração do relatório", redirecting: "Você será redirecionado em alguns segundos.", runAgent: "Executar agente", executionName: "Nome da execução", executionNameHelp: "Dê a esta execução um nome único para identificá-la depois", executionNamePlaceholder: "ex.: Execução do bot de suporte ao cliente", executionDescription: "Descrição da execução", executionDescriptionHelp: "Descreva o propósito ou contexto desta execução", executionDescriptionPlaceholder: "ex.: Testando o bot de suporte ao cliente com novos dados de FAQ", executionDetails: "Detalhes da execução", executionDetailsDescription: "Nome e descrição para esta execução", interactionLabel: "Interação", interactionDescription: "O agente que você está executando", parameters: "Parâmetros", parametersDescription: "Valores de configuração para esta execução" }, ew = { agentNotFound: "Agente não encontrado", agentNotFoundDescription: "O agente que você está procurando não existe", totalExecutions: "Total de execuções", allTime: "Todo o período", successful: "Bem-sucedidas", failed: "Falharam", running: "Em execução", currentlyInProgress: "Atualmente em andamento", executions: "Execuções", noExecutionsYet: "Nenhuma execução ainda", runFirstExecution: "Execute sua primeira execução", statusCompleted: "Concluída", statusFailed: "Falhou", statusRunning: "Em execução", statusUnknown: "Desconhecido" }, tw = { executionDetails: "Detalhes da execução", executionDetailsDescription: "Forneça um nome e uma descrição para esta execução", selectDocument: "Selecionar documento", selectDocuments: "Selecionar documentos", selectDocumentDescription: "Escolha um documento para processar", selectDocumentsDescription: "Escolha os documentos para processar", uploadMedia: "Enviar mídia", uploadMediaFiles: "Enviar arquivos de mídia", uploadMediaDescription: "Envie arquivos de mídia para processamento", selectObject: "Selecionar objeto", selectObjects: "Selecionar objetos", selectObjectDescription: "Configure as propriedades do objeto", selectObjectsDescription: "Configure as propriedades dos objetos", configureParameters: "Configurar parâmetros", configureParametersDescription: "Defina os parâmetros para esta execução", reviewExecute: "Revisar e executar", reviewExecuteDescription: "Revise sua configuração e inicie a execução", executionComplete: "Execução concluída", executionCompleteDescription: "Sua execução foi finalizada" }, nw = { media: "Mídia", document: "Documento", mediaFiles: "Arquivos de mídia", documents: "Documentos", selected: "Selecionados", selectItems: "Selecionar {{itemType}}", clickToView: "Clique para ver {{name}}", viewDocument: "Ver documento" }, aw = { documentSummarizer: { title: "Resumidor de Documentos", description: "Resuma automaticamente documentos longos, artigos e relatórios em visões gerais concisas" }, codeGenerator: { title: "Gerador de Código", description: "Gere trechos de código e modelos em várias linguagens de programação" }, emailComposer: { title: "Compositor de E-mails", description: "Redija e-mails profissionais com tom e estilo personalizáveis" }, dataExtractor: { title: "Extrator de Dados", description: "Extraia dados estruturados de textos não estruturados, PDFs e imagens" }, translationHub: { title: "Central de Tradução", description: "Traduza conteúdo entre vários idiomas com consciência de contexto" }, contentRewriter: { title: "Reescritor de Conteúdo", description: "Reescreva e parafraseie conteúdo mantendo o significado original" }, sentimentAnalyzer: { title: "Analisador de Sentimento", description: "Analise o sentimento e o tom emocional de textos para feedback e avaliações de clientes" }, meetingNotes: { title: "Notas de Reunião", description: "Gere resumos de reuniões e itens de ação a partir de transcrições" }, researchAssistant: { title: "Assistente de Pesquisa", description: "Realize pesquisas e compile descobertas de múltiplas fontes" }, socialMediaWriter: { title: "Redator de Mídias Sociais", description: "Crie publicações envolventes para redes sociais otimizadas para cada plataforma" }, contractAnalyzer: { title: "Analisador de Contratos", description: "Revise contratos e documentos jurídicos para destacar termos e riscos principais" }, productDescriptions: { title: "Descrições de Produtos", description: "Gere descrições de produtos atraentes para listagens de e-commerce" }, knowledgeBase: { title: "Base de Conhecimento", description: "Consulte e recupere informações dos documentos da sua organização" }, reportGenerator: { title: "Gerador de Relatórios", description: "Crie relatórios detalhados e resumos analíticos a partir de dados brutos" }, taskPlanner: { title: "Planejador de Tarefas", description: "Divida projetos complexos em tarefas acionáveis e cronogramas" }, faqGenerator: { title: "Gerador de FAQ", description: "Gere seções de perguntas frequentes abrangentes a partir da documentação do produto" }, assistant: { title: "Assistente", description: "Obtenha ajuda com seu conteúdo e tarefas usando assistência com IA" }, seoTool: { title: "Ferramenta de SEO", description: "Gere e otimize conteúdo SEO para melhor visibilidade nos mecanismos de busca" }, artGeneration: { title: "Geração de Arte", description: "Gere obras de arte e imagens incríveis usando tecnologia de IA" }, reverseSearch: { title: "Busca Reversa", description: "Busque imagens e conteúdos semelhantes usando busca reversa de imagens" }, basicAgent: { title: "Agente Básico", description: "Converse com um agente de IA básico para auxiliar em diversas tarefas e consultas" } }, ow = { uploadNew: "Novo upload", uploadMedia: "Enviar mídia", uploadDocument: "Enviar documento", dragDropMedia: "Arraste e solte arquivos de mídia aqui", dragDropDocuments: "Arraste e solte documentos aqui", uploading: "Enviando...", progressComplete: "{{progress}}% concluído", selectFiles: "Selecione arquivos para enviar" }, iw = {
  search: ZN,
  execution: JN,
  dashboard: ew,
  steps: tw,
  media: nw,
  tools: aw,
  upload: ow
}, rw = "Buscar coleções...", sw = "Criar coleção", lw = "Nenhuma coleção {{label}} ainda", cw = "Nenhuma coleção ainda", dw = "Nenhuma coleção {{label}} encontrada", uw = "Nenhuma coleção encontrada", mw = "Tente ajustar sua busca", pw = "Crie sua primeira coleção para começar", hw = "pessoal", gw = "da organização", fw = { notFound: "Coleção não encontrada", all: "Todos", collections: "Coleções", collectionsCount: "Coleções ({{count}})", documents: "Documentos", documentsCount: "Documentos ({{count}})", total: "total", noItems: "Nenhum item nesta coleção", noItemsHelp: "Adicione documentos ou coleções para começar", noFilterResults: "Nenhum(a) {{filter}} encontrado(a)", noFilterResultsHelp: "Tente alterar o filtro" }, bw = { title: "Adicionar à coleção", titleWithCount: "Adicionar {{count}} documentos à coleção", selectExisting: "Selecionar existente", createNew: "Criar nova", searchPlaceholder: "Buscar coleções...", noCollectionsFound: "Nenhuma coleção encontrada", createNewCollection: "Criar uma nova coleção", selectedCount_one: "{{count}} coleção selecionada", selectedCount_other: "{{count}} coleções selecionadas", nameRequired: "Nome *", namePlaceholder: "Digite o nome da coleção", descriptionLabel: "Descrição", descriptionPlaceholder: "Digite a descrição da coleção (opcional)", typeLabel: "Tipo", typePlaceholder: "Selecione um tipo (opcional)", groupsLabel: "Grupos", loadingGroups: "Carregando grupos...", noGroupsAvailable: "Nenhum grupo disponível", successAdded: "Adicionado com sucesso a {{count}} {{label}}", errorAdding: "Erro ao adicionar às coleções", errorCreating: "Erro ao criar coleção", documentsAdded: "{{count}} {{label}} adicionado(s)", successCreatedAndAdded: 'Adicionado com sucesso a "{{name}}"', adding: "Adicionando...", createAndAdd: "Criar e adicionar", addToCollectionBtn: "Adicionar à coleção", addToCollectionsBtn: "Adicionar a {{count}} coleções" }, vw = {
  searchPlaceholder: rw,
  createCollection: sw,
  noCollectionsYet: lw,
  noCollectionsYetGeneric: cw,
  noCollectionsFound: dw,
  noCollectionsFoundGeneric: uw,
  tryAdjustingSearch: mw,
  createFirstCollection: pw,
  personal: hw,
  organization: gw,
  detail: fw,
  addToCollection: bw
}, xw = { save: "Salvar", saving: "Salvando...", cancel: "Cancelar", delete: "Excluir", deleting: "Excluindo...", confirm: "Confirmar", add: "Adicionar", remove: "Remover", search: "Buscar", filter: "Filtrar", filters: "Filtros", clearAll: "Limpar tudo", clearFilters: "Limpar filtros", close: "Fechar", back: "Voltar", continue: "Continuar", execute: "Executar", download: "Baixar", downloading: "Baixando...", refresh: "Atualizar", edit: "Editar", select: "Selecionar", showPreview: "Mostrar pré-visualização", hidePreview: "Ocultar pré-visualização", addToCollection: "Adicionar à coleção", logOut: "Sair", done: "Concluído", addItem: "Adicionar item", chooseExisting: "Escolher existente", apply: "Aplicar", reset: "Redefinir", upload: "Enviar", copyLink: "Copiar link", copied: "Copiado!", byEmail: "Por e-mail", copiedToClipboard: "Copiado para a área de transferência", showInfo: "Mostrar informações", hideInfo: "Ocultar informações", editProperties: "Editar propriedades", resetChat: "Redefinir chat" }, yw = { loading: "Carregando...", loadingMore: "Carregando mais...", noResults: "Nenhum resultado encontrado", noMoreItems: "Não há mais itens para carregar", empty: "Nenhum item para exibir", error: "Erro", errorOccurred: "Ocorreu um erro", loadingPreview: "Carregando pré-visualização...", noContentAvailable: "Nenhum conteúdo disponível", notSet: "Não definido", yes: "Sim", no: "Não", emptyList: "Lista vazia", emptyValue: "Vazio", waiting: "Aguardando...", uploading: "Enviando...", uploadedSuccessfully: "Enviado com sucesso", updated: "Atualizado", skipped: "Ignorado", uploadFailed: "Falha no envio", comingSoon: "Em breve" }, Nw = { title: "404 - Página não encontrada", description: "A página que você está procurando não existe." }, ww = { label: "Tema", light: "Claro", dark: "Escuro", system: "Sistema" }, Cw = { label: "Esquema de cores", default: "Padrão", red: "Vermelho", orange: "Laranja", yellow: "Amarelo", green: "Verde", teal: "Azul-petróleo", blue: "Azul", indigo: "Índigo", violet: "Violeta", fuchsia: "Fúcsia", pink: "Rosa forte", rose: "Rosa", slate: "Ardósia" }, Sw = { label: "Idioma" }, Aw = { label: "Painel", user: "Usuário", admin: "Administrador" }, Dw = "Portal do Aplicativo", Tw = "mais", Iw = "Coleção", Pw = "Documento", kw = "Abrir em nova aba", _w = "v{{version}}", Ew = "{{count}} item", zw = "{{count}} itens", Fw = { successTitle: "Configurações salvas", successDescription: "Atualizando configurações do aplicativo...", errorTitle: "Falha ao salvar configurações", errorDescription: "Não foi possível atualizar as configurações. Tente novamente." }, Lw = { sm: "Pequeno (sm)", smHint: ">= 640px", md: "Médio (md)", mdHint: ">= 768px", lg: "Grande (lg)", lgHint: ">= 1024px", xl: "Extra grande (xl)", xlHint: ">= 1280px" }, Rw = { name: "Nome", type: "Tipo", description: "Descrição", createdAt: "Criado em", updatedAt: "Atualizado em", status: "Status", createdBy: "Criado por", format: "Formato", modified: "Modificado", inputParameters: "Parâmetros de entrada", property: "Propriedade", label: "Rótulo", modifier: "Modificador" }, $w = { selectIcon: "Selecione um ícone...", searchIcons: "Buscar ícones...", noIconsFound: "Nenhum ícone encontrado." }, Mw = { yes: "Sim", no: "Não" }, Ow = { searchPlaceholder: "Buscar {{label}}..." }, jw = { enable: "Ativar", enterField: "Inserir {{field}}", selectField: "Selecionar {{field}}", noPropertiesDefined: "Nenhuma propriedade definida para este objeto", noSchemaDefined: "Nenhum esquema definido para este objeto", noSchemaDefinedForItems: "Nenhum esquema definido para os itens", noParametersRequired: "Esta interação não requer parâmetros", itemIndex: "Item {{index}}", noItemsAdded: "Nenhum item adicionado ainda", clickAddItem: 'Clique em "Adicionar item" para criar uma nova entrada', enterTextHere: "Digite o texto aqui...", enterValueHere: "Digite o valor aqui...", selectOrUploadDocument: "Selecione ou envie um documento...", noValue: "Sem valor", noDocumentData: "Nenhum dado de documento disponível" }, Bw = { uploadDocuments: "Enviar documentos", uploading: "Enviando...", uploadComplete: "Envio concluído", addFilesDescription: "Adicionar arquivos para enviar", uploadingFiles: "Enviando {{count}} arquivo", uploadingFiles_other: "Enviando {{count}} arquivos", uploadSuccess_one: "{{count}} arquivo enviado com sucesso", uploadSuccess_other: "{{count}} arquivos enviados com sucesso", clickToBrowse: "Clique para procurar ou arraste arquivos aqui", pasteFromClipboard: "Você também pode colar arquivos da área de transferência", filesSelected_one: "{{count}} arquivo selecionado", filesSelected_other: "{{count}} arquivos selecionados", fileLimitReached: "Limite de arquivos atingido", uploadingProgress: "Enviando arquivos...", invalidFileType: "Tipo de arquivo inválido", invalidFileTypeDescription: "Nenhum dos arquivos selecionados corresponde aos tipos de arquivo permitidos", someFilesIgnored: "Alguns arquivos ignorados", filesIgnored_one: "{{count}} arquivo foi ignorado (tipo não suportado)", filesIgnored_other: "{{count}} arquivos foram ignorados (tipo não suportado)", maxFilesAllowed: "Máximo de {{max}} arquivos permitidos", failedToDownload: "Falha ao baixar o arquivo", documentNotFound: "Documento não encontrado" }, Hw = { selectType: "Selecione um tipo", searchTypes: "Buscar tipos...", noTypeFound: "Nenhum tipo encontrado.", selectTypes: "Selecione tipos...", selectAgents: "Selecione agentes...", searchAgents: "Buscar agentes...", noAgentFound: "Nenhum agente encontrado.", agentsSelected: "{{count}} agente(s) selecionado(s)", typesSelected: "{{count}} tipo(s) selecionado(s)", selectProperty: "Selecione uma propriedade...", searchProperties: "Buscar propriedades...", noPropertyFound: "Nenhuma propriedade encontrada.", noPropertiesAvailable: "Nenhuma propriedade disponível", typeProperties: "Propriedades do tipo", commonProperties: "Propriedades comuns", none: "Nenhum" }, Vw = { title: "Visualizados recentemente", noDocuments: "Nenhum documento visualizado recentemente", documentsWillAppear: "Os documentos que você abrir aparecerão aqui" }, qw = { chatWithDocument: "Converse com seu documento", askQuestions: "Faça perguntas sobre <strong>{{name}}</strong> e obtenha respostas inteligentes baseadas em seu conteúdo.", errorProcessing: "Desculpe, mas encontrei um problema ao processar sua solicitação. Tente novamente.", errorGeneral: "Desculpe, mas encontrei um erro. Tente novamente mais tarde.", askPlaceholder: "Faça uma pergunta sobre este documento...", waitingPlaceholder: "Aguardando resposta..." }, Gw = { noContentSource: "Nenhuma fonte de conteúdo do documento", chat: "Chat", properties: "Propriedades" }, Ww = { semanticSearch: "Busca semântica", semanticSearchPlaceholder: "Digite o que você está procurando", propertySearch: "Busca por propriedade", types: "Tipos", statuses: "Status", users: "Usuários", autoSearch: "Busca automática", selectDateRange: "Selecione um intervalo de datas", all: "Todos", contentType: "Tipo de conteúdo", mimeType: "Tipo MIME", scoreLabel: "Pontuação", scoreTooltip: "Definir um limite de relevância de pontuação permite controlar quão rigorosos devem ser os resultados da busca. Uma pontuação de 0,60 é geralmente considerada uma correspondência relevante, enquanto pontuações abaixo disso são geralmente consideradas menos relevantes.", selectFiltersToSearch: "Selecione filtros para buscar", selectAtLeastOneFilter: "Selecione pelo menos um valor em qualquer filtro de busca para ver os resultados.", searchDocuments: "Buscar documentos...", showMore: "Mostrar mais {{count}}", showLess: "Mostrar menos" }, Uw = { documents: "Documentos", selectAll: "Selecionar tudo", selectRow: "Selecionar linha", gridView: "Visualização em grade", tableView: "Visualização em tabela", listView: "Visualização em lista", items: "Itens" }, Kw = { totalDocuments: "Total de documentos", allDocuments: "Todos os documentos no sistema", thisWeek: "Esta semana", documentsThisWeek: "Documentos enviados esta semana", thisMonth: "Este mês", documentsThisMonth: "Documentos enviados este mês", thisYear: "Este ano", documentsThisYear: "Documentos enviados este ano" }, Yw = { title: "Ações rápidas", uploadDocument: "Enviar documento", searchDocuments: "Buscar documentos", createCollection: "Criar coleção", latestAgents: "Agentes recentes" }, Xw = { activityWillAppear: "As atividades aparecerão aqui após o envio de documentos", recentActivity: "Atividade recente", noActivity: "Ainda não há atividade" }, Qw = { title: "Ajustar posição do banner", description: "Arraste para reposicionar. A zona clara mostra o que será visível no painel.", zoom: "Zoom" }, Zw = { basic: "Básico", advanced: "Avançado", propertiesGenerating: "As propriedades estão sendo geradas, volte em instantes." }, Jw = { nameLabel: "Nome", descriptionLabel: "Descrição", typeLabel: "Tipo", groupsLabel: "Grupos", loadingGroups: "Carregando grupos...", noGroupsAvailable: "Nenhum grupo disponível", enterName: "Digite o nome da coleção", enterDescription: "Digite a descrição da coleção (opcional)", selectType: "Selecione um tipo (opcional)", searchItems: "Buscar itens", addedMembers: "Membros adicionados", searchDocuments: "Buscar documentos", searchCollections: "Buscar coleções", clickToAdd: "Clique em um item para adicioná-lo à coleção", noMembersAdded: "Nenhum membro adicionado.", searchAndClick: "Busque e clique nos itens à esquerda para adicioná-los.", members: "Membros", saveChanges: "Salvar alterações", createCollection: "Criar coleção", saveChangesDescription: "Ao clicar em <strong>Salvar alterações</strong>, esta coleção será atualizada e todas as alterações de membros serão aplicadas.", createCollectionDescription: "Ao clicar em <strong>Criar coleção</strong>, esta coleção será criada com os membros especificados.", noDescription: "Sem descrição", documentCount_one: "{{count}} documento", documentCount_other: "{{count}} documentos", subCollectionCount_one: "{{count}} subcoleção", subCollectionCount_other: "{{count}} subcoleções", newCount: "+{{count}} novo(s)", noMembers: "Nenhum membro nesta coleção", newBadge: "novo", editCollection: "Editar coleção", createCollectionTitle: "Criar coleção", editDescription: "Atualizar as propriedades da coleção e gerenciar os membros", createDescription: "Criar uma nova coleção para organizar seus documentos", saving: "Salvando...", creating: "Criando...", next: "Próximo", stepDetails: "Detalhes", stepMembers: "Membros", stepReview: "Resumo", noDocumentsFound: "Nenhum documento encontrado.", noCollectionsFound: "Nenhuma coleção encontrada.", typeToSearchDocuments: "Digite para buscar documentos", typeToSearchCollections: "Digite para buscar coleções", itemCount_one: "{{count}} item", itemCount_other: "{{count}} itens", newMemberLabel: "(novo)" }, eC = "Documentos", tC = "Coleções", nC = "{{count}} documento", aC = "{{count}} documentos", oC = { add: "Adicionar aos favoritos", remove: "Remover dos favoritos", title: "Meus favoritos", description: "Seus documentos favoritos", empty: "Você ainda não tem favoritos", emptyHelp: "Adicione documentos aos seus favoritos para vê-los aqui", loadError: "Falha ao carregar os favoritos", descriptionUser: "Documentos favoritos de {{name}}" }, iC = {
  actions: xw,
  states: yw,
  notFound: Nw,
  theme: ww,
  colorScheme: Cw,
  language: Sw,
  dashboardView: Aw,
  appPortal: Dw,
  more: Tw,
  collection: Iw,
  document: Pw,
  openInNewTab: kw,
  version: _w,
  items_one: Ew,
  items_other: zw,
  settingsToast: Fw,
  gridCols: Lw,
  properties: Rw,
  iconPicker: $w,
  boolean: Mw,
  search: Ow,
  form: jw,
  upload: Bw,
  inputs: Hw,
  recentlyViewed: Vw,
  chat: qw,
  documentPanel: Gw,
  filters: Ww,
  tables: Uw,
  stats: Kw,
  quickActions: Yw,
  activityFeed: Xw,
  bannerPosition: Qw,
  propertiesPanel: Zw,
  collectionWizard: Jw,
  documents: eC,
  collections: tC,
  documentCount_one: nC,
  documentCount_other: aC,
  favorites: oC
}, rC = "Bem-vindo à sua Biblioteca de Documentos", sC = "Sua plataforma de gestão de documentos para buscar, organizar e trabalhar com arquivos usando ferramentas de IA", lC = "Buscar documentos ou recursos...", cC = "Nenhum resultado encontrado", dC = "Pesquisar em:", uC = "Coleção", mC = { everywhere: "Em tudo", contents: "Conteúdos", title: "Título", collections: "Coleções" }, pC = "Panorama ECM", hC = "Visão geral", gC = "Atividade", fC = "Buscar documentos...", bC = "Visualização em grade", vC = "Visualização em lista", xC = "Visualização em lista em breve", yC = "Documentos recentes", NC = "Envios ao longo do tempo", wC = "Armazenamento por tipo", CC = "Principais contribuidores", SC = "Visualização de gráficos em breve", AC = "Estatísticas de contribuidores em breve", DC = { failedToLoadMore: "Falha ao carregar mais imagens", failedToLoadMoreDescription: "Não foi possível buscar mais imagens. Tente novamente.", failedToLoad: "Falha ao carregar imagens", failedToLoadDescription: "Não foi possível buscar as imagens mais recentes. Tente novamente.", searchFailed: "Falha na busca", searchFailedDescription: "Não foi possível realizar a busca semântica. Tente novamente." }, TC = { ask: "Perguntar ao assistente de IA", title: "Assistente de IA", open: "Abrir assistente de IA", minimize: "Minimizar", enlarge: "Ampliar", shrink: "Reduzir", starting: "Iniciando conversa…", empty: "Inicie uma pesquisa para falar com o assistente.", inputPlaceholder: "Digite uma mensagem…", notConfigured: "Nenhum agente está configurado para a pesquisa com agente.", noRunId: "Nenhuma execução de agente foi retornada. O servidor pode não suportar este recurso.", startFailed: "Falha ao iniciar a conversa.", tryAgain: "Tentar novamente", searchPrefix: "Pesquisar documentos ou conteúdos relacionados com: ", send: "Enviar" }, IC = {
  defaultTitle: rC,
  defaultDescription: sC,
  searchPlaceholder: lC,
  noResults: cC,
  searchIn: dC,
  collection: uC,
  searchModes: mC,
  ecmLandscape: pC,
  overview: hC,
  activity: gC,
  searchDocuments: fC,
  gridView: bC,
  listView: vC,
  listViewComingSoon: xC,
  recentDocuments: yC,
  uploadsOverTime: NC,
  storageByType: wC,
  topContributors: CC,
  chartComingSoon: SC,
  contributorComingSoon: AC,
  errors: DC,
  aiAssistant: TC
}, PC = "Minhas", kC = "Todas", _C = "Buscar por nome...", EC = "Visualização em cartões", zC = "Visualização em tabela", FC = "Interação", LC = "Criado por", RC = "Criado em", $C = "Nome", MC = "Descrição", OC = "Nenhum filtro disponível", jC = "Falha ao carregar execuções: {{message}}", BC = "Nenhuma execução encontrada", HC = "Tipo de contêiner de execução não configurado", VC = "Carregando...", qC = { notFound: "Execução não encontrada", notFoundDescription: "A execução que você está procurando não existe.", encounteredError: "A execução encontrou um erro", contactAdmin: "Entre em contato com o administrador do sistema para mais informações", agentResponse: "Resposta do agente", completedSuccessfully: "Execução concluída com sucesso", executionDetails: "Detalhes da execução", inputParameters: "Parâmetros de entrada" }, GC = {
  mine: PC,
  all: kC,
  searchPlaceholder: _C,
  cardView: EC,
  tableView: zC,
  interaction: FC,
  createdBy: LC,
  createdAt: RC,
  name: $C,
  description: MC,
  noFiltersAvailable: OC,
  failedToLoad: jC,
  noExecutionsFound: BC,
  containerTypeNotConfigured: HC,
  documentLoading: VC,
  detail: qC
}, WC = "Busca automática", UC = "Avançado", KC = "Básico", YC = "Buscar documentos...", XC = { download: "Baixar", addToCollection: "Adicionar à coleção", delete: "Excluir", more: "mais", errorDownloading: "Erro ao baixar documento", errorDownloadingDescription: "Ocorreu um erro ao baixar o documento.", deleteTitle: "Excluir {{typeName}}", deleteConfirm: "Tem certeza de que deseja excluir este(a) {{typeName}}?", deleteSuccess: "{{typeName}} excluído(a)", deleteSuccessDescription: "{{typeName}} {{id}} foi excluído(a) com sucesso", deleteError: "Erro ao excluir {{typeName}}" }, QC = { type: "Tipo", typePlaceholder: "Buscar por tipo", status: "Status", statusPlaceholder: "Buscar por status", createdBy: "Criado por", createdByPlaceholder: "Buscar por criador" }, ZC = "{{count}} selecionado(s)", JC = { title: "Nenhum documento encontrado", description: "Tente ajustar seus filtros ou termos de pesquisa" }, eS = {
  autoSearch: WC,
  advanced: UC,
  basic: KC,
  searchPlaceholder: YC,
  document: XC,
  facets: QC,
  selectedCount: ZC,
  noDocuments: JC
}, tS = { application: "Aplicação", administration: "Administração" }, nS = { dashboard: { title: "Painel", tooltip: "Painel" }, advancedSearch: { title: "Pesquisa avançada", tooltip: "Pesquisa avançada", description: "Pesquise e explore seus documentos" }, collections: { title: "Coleções", tooltip: "Coleções", description: "Organize e gerencie suas coleções" }, collectionsPersonal: { title: "Pessoais", tooltip: "Coleções pessoais" }, collectionsOrganization: { title: "Organização", tooltip: "Coleções da organização" }, agents: { title: "Agentes", tooltip: "Agentes", description: "Configure e gerencie seus agentes de IA" }, browseAgents: { title: "Explorar agentes", tooltip: "Explorar agentes" }, executions: { title: "Execuções", tooltip: "Execuções de agentes" }, settings: { title: "Configurações", tooltip: "Configurações", description: "Gerencie as configurações e definições do aplicativo" }, favorites: { title: "Favoritos", tooltip: "Favoritos", description: "Seus documentos favoritos" } }, aS = {
  sections: tS,
  items: nS
}, oS = { application: "Aplicação", dashboard: "Painel", library: "Pesquisa avançada", whitelist: "Lista permitida", sidebar: "Barra lateral", agents: "Agentes", properties: "Propriedades", rendition: "Renderização", search: "Busca", language: "Idioma", colorScheme: "Esquema de cores", favorites: "Favoritos" }, iS = { title: "Aplicação", description: "Personalize o nome, ícone e identidade visual do aplicativo exibidos na barra lateral e no breadcrumb.", applicationName: "Nome do aplicativo", applicationNamePlaceholder: "ECM", applicationNameHelp: "Personalize o nome do aplicativo exibido no cabeçalho da barra lateral.", leaveEmptyDefault: "Deixe vazio para usar o nome padrão: ", breadcrumbLabel: "Rótulo do breadcrumb", breadcrumbPlaceholder: "Painel", breadcrumbHelp: "Personalize o rótulo raiz do breadcrumb exibido na navegação do cabeçalho.", applicationIcon: "Ícone do aplicativo", iconTabIcon: "Ícone", iconTabImage: "Imagem", uploadImage: "Enviar imagem", chooseFromLibrary: "Escolher da biblioteca", uploadFailed: "Falha ao enviar a imagem", iconImageHelp: "Envie uma imagem ou selecione uma da biblioteca para usar como ícone do aplicativo. Ela é exibida sobre um fundo transparente, por isso imagens com transparência (PNG) funcionam melhor.", iconBackgroundColor: "Cor de fundo do ícone", preview: "Pré-visualização" }, rS = { title: "Painel", description: "Configure a aparência e o comportamento do painel do usuário.", titleLabel: "Título", titlePlaceholder: "Bem-vindo à sua Biblioteca de Documentos", titleHelp: "Exibido como o título principal no painel.", descriptionLabel: "Descrição", descriptionPlaceholder: "Sua plataforma de gestão de documentos para buscar, organizar e trabalhar com arquivos usando ferramentas de IA", descriptionHelp: "Exibido abaixo do título no painel.", backgroundImage: "Imagem de fundo", backgroundPreviewAlt: "Pré-visualização do fundo do painel", selectImage: "Selecionar imagem", changeImage: "Alterar imagem", adjustPosition: "Ajustar posição", backgroundHelp: "Exibida como fundo do banner no painel. Usa a imagem padrão quando não definida.", bannerRenditionSize: "Tamanho da renderização do banner", bannerRenditionSizeHelp: "Largura/altura máxima em pixels para a renderização da imagem do banner. Valores maiores produzem imagens mais nítidas, mas carregam mais lentamente.", bannerMaxHeight: "Altura máxima do banner (px)", bannerMaxHeightHelp: "Altura do banner quando a página não está rolada.", bannerMinHeight: "Altura mínima do banner (px)", bannerMinHeightHelp: "Altura do banner quando totalmente recolhido após rolagem.", displayMode: "Exibição do painel", displayModeOptions: { imageGrid: "Grade dos documentos mais recentes", recentlyViewed: "Visualizados recentemente" }, displayModeHelp: { imageGrid: "Mostrar uma grade dos documentos mais recentes com rolagem infinita.", recentlyViewed: "Mostrar uma lista dos documentos visualizados recentemente pelo usuário." }, imageGridLayout: "Layout da grade de imagens", imageGridLayoutHelp: "Configure o número de itens exibidos por linha em cada tamanho de tela e quantos itens são carregados por página.", itemsPerPage: "Itens por página", itemsPerPageHelp: "Número de itens carregados por requisição de busca (usado para paginação com rolagem infinita).", uploadImage: "Enviar imagem", uploadFailed: "Falha ao enviar a imagem", invalidImage: "Selecione um arquivo de imagem com menos de 20 MB.", agenticSearch: { label: "Agente de pesquisa com agente", placeholder: "Selecionar um agente…", none: "Nenhum (ocultar o botão)", help: "Agente usado pelo botão « Perguntar ao assistente de IA » do painel. Deixe em Nenhum para ocultar o botão." } }, sS = { title: "Pesquisa avançada", description: "Configure o layout da grade da pesquisa avançada para diferentes tamanhos de tela.", gridLayout: "Layout da grade", gridLayoutHelp: "Número de itens por linha quando o painel de busca avançada está fechado.", advancedSearchLayout: "Layout da busca avançada", advancedSearchLayoutHelp: "Número de itens por linha quando o painel de busca avançada está aberto." }, lS = { title: "Lista permitida", description: "Restrinja quais tipos de documento são visíveis na biblioteca e no painel. Quando vazia, todos os tipos são exibidos.", dashboardWhitelist: "Lista permitida do painel", dashboardWhitelistHelp: "Quando não vazia, apenas esses tipos de documento aparecerão no painel.", libraryWhitelist: "Lista permitida da biblioteca", libraryWhitelistHelp: "Quando não vazia, apenas esses tipos de documento aparecerão nos resultados de busca da biblioteca.", collectionWhitelist: "Lista permitida de coleções", collectionWhitelistHelp: "Quando não vazia, apenas esses tipos estarão disponíveis ao criar uma coleção.", selectTypesPlaceholder: "Selecione os tipos para a lista permitida..." }, cS = { title: "Barra lateral", description: "Escolha quais itens aparecem na barra de navegação. Novos itens são exibidos por padrão; itens ocultos também são bloqueados no acesso direto por URL e redirecionam para a página inicial.", alwaysVisible: "Sempre visível", help: "A página inicial e as configurações não podem ser ocultadas para manter a barra lateral utilizável.", hideItem: "Ocultar {{item}}", showItem: "Mostrar {{item}}" }, dS = { title: "Agentes", description: "Gerencie quais agentes são visíveis no aplicativo. Agentes desabilitados serão ocultados dos resultados de busca.", noAgentsFound: "Nenhum agente encontrado.", enabledCount: "{{enabledCount}} de {{totalCount}} versão de agente habilitada", enabledCount_other: "{{enabledCount}} de {{totalCount}} versões de agente habilitadas", columns: { enabled: "Habilitado", agent: "Agente", versions: "Versões" }, version_one: "{{count}} versão", version_other: "{{count}} versões", toggleAgent: "Alternar {{name}}", collapseVersions: "Recolher versões", expandVersions: "Expandir versões" }, uS = { title: "Propriedades", description: "Configure as propriedades básicas e avançadas exibidas para cada tipo de documento. Tipos sem configuração específica usarão as propriedades padrão.", documentType: "Tipo de documento", selectTypePlaceholder: "Selecione um tipo de documento para configurar...", searchTypes: "Buscar tipos...", noTypeFound: "Nenhum tipo encontrado.", selectTypeHelp: "Selecione um tipo de documento para configurar suas propriedades. Tipos com um selo possuem definições personalizadas.", basicProperties: "Propriedades básicas", advancedProperties: "Propriedades avançadas", addProperty: "Adicionar propriedade...", displayLabel: "Rótulo de exibição" }, mS = { title: "Tamanhos de renderização", description: "Configure os tamanhos de renderização usados para grades de miniaturas e pré-visualizações em modal.", thumbnailGrid: "Grade de miniaturas (px)", thumbnailDefault: "Padrão: 512", modalPreview: "Pré-visualização em modal (px)", modalDefault: "Padrão: 1024" }, pS = { title: "Filtros básicos", description: "Configure quais filtros estão disponíveis na barra de busca básica da biblioteca." }, hS = { title: "Facetas avançadas", description: "Configure quais facetas estão disponíveis ao realizar buscas avançadas na biblioteca.", field: "Campo", name: "Nome", displayName: "Nome de exibição", addFacet: "Adicionar faceta...", filterByType: "Filtrar por tipo de documento", selectTypePlaceholder: "Selecione um tipo para explorar suas propriedades...", allTypes: "Todos os tipos (apenas propriedades comuns)", typeFilterHelp: "Opcionalmente, selecione um tipo de documento para explorar suas propriedades específicas. Propriedades comuns estão sempre disponíveis.", noFacetsConfigured: "Nenhuma faceta configurada. Selecione um campo abaixo para começar.", addCustomFacet: "Adicionar faceta personalizada", fieldPlaceholder: "Caminho da propriedade (ex. properties.author)" }, gS = { title: "Pesos de busca", description: "Configure o peso de cada tipo de embedding ao realizar buscas.", enableWeightedSearch: "Habilitar busca ponderada", enableWeightedSearchHelp: "Quando habilitado, esses pesos serão aplicados aos resultados de busca por embedding.", text: "Texto", images: "Imagens", properties: "Propriedades" }, fS = { title: "Idioma", description: "Configure o idioma padrão do aplicativo. Os usuários podem substituir essa preferência individualmente.", defaultLanguage: "Idioma padrão", defaultLanguageHelp: "O idioma padrão usado quando o usuário não definiu uma preferência pessoal de idioma." }, bS = { title: "Esquema de cores", description: "Configure o esquema de cores padrão do aplicativo. Os usuários podem substituir essa preferência individualmente.", defaultColorScheme: "Esquema padrão", defaultColorSchemeHelp: "O esquema de cores padrão usado quando o usuário não definiu uma preferência pessoal." }, vS = { title: "Favoritos", description: "Configure como os favoritos dos usuários são armazenados. Os favoritos são salvos em uma coleção por usuário do tipo vinculado abaixo.", quickSetup: "Configuração rápida", createAndLink: "Criar e vincular tipo de favoritos", createAndLinkHelp: "Cria um tipo de conteúdo «Favoritos» (ou reutiliza o existente) e o vincula à configuração abaixo.", collectionType: "Tipo de coleção de favoritos", collectionTypePlaceholder: "Selecione um tipo de coleção", collectionTypeHelp: "Tipo usado ao criar a coleção de favoritos de cada usuário. Deixe vazio para criá-la sem um tipo específico.", noType: "Sem tipo específico", typeDescription: "Tipo de conteúdo usado para as coleções de favoritos dos usuários.", typeLinked: "Tipo de favoritos criado e vinculado", typeError: "Falha ao criar o tipo de favoritos" }, xS = {
  tabs: oS,
  application: iS,
  dashboard: rS,
  library: sS,
  whitelist: lS,
  sidebar: cS,
  agents: dS,
  properties: uS,
  rendition: mS,
  basicFilters: pS,
  facets: hS,
  searchWeights: gS,
  language: fS,
  colorScheme: bS,
  favorites: vS
}, yS = { filterPlaceholder: "筛选服务...", tags: "标签", tagsPlaceholder: '输入标签，用","分隔，完成后按回车', tagsHint: "例如：agent, chat", version: "版本", versionPlaceholder: "输入版本号，完成后按回车", versionHint: "输入版本号", noServicesAvailable: "暂无可用服务", noServicesHint: "请尝试调整搜索条件。", contactAdmin: "请联系管理员发布服务" }, NS = { noDescription: "暂无描述", notFound: "未找到交互", notFoundDescription: "您查找的交互不存在", backToAgents: "返回智能体", validationError: "验证错误", validationNameDescription: "请提供名称和描述", validationFormErrors: "请修正表单中的错误", failedCreateCollection: "创建报告集合失败", failedCreateCollectionDescription: "请稍后重试。", failedStartReport: "启动报告生成失败", redirecting: "几秒后将自动跳转。", runAgent: "运行智能体", executionName: "执行名称", executionNameHelp: "为此执行提供一个唯一名称以便后续识别", executionNamePlaceholder: "例如：客户支持机器人执行", executionDescription: "执行描述", executionDescriptionHelp: "描述此执行的目的或上下文", executionDescriptionPlaceholder: "例如：使用新的常见问题数据测试客户支持机器人", executionDetails: "执行详情", executionDetailsDescription: "此执行的名称和描述", interactionLabel: "交互", interactionDescription: "您正在执行的智能体", parameters: "参数", parametersDescription: "此执行的配置值" }, wS = { agentNotFound: "未找到智能体", agentNotFoundDescription: "您查找的智能体不存在", totalExecutions: "总执行次数", allTime: "全部时间", successful: "成功", failed: "失败", running: "运行中", currentlyInProgress: "当前正在进行", executions: "执行记录", noExecutionsYet: "暂无执行记录", runFirstExecution: "运行您的第一次执行", statusCompleted: "已完成", statusFailed: "失败", statusRunning: "运行中", statusUnknown: "未知" }, CS = { executionDetails: "执行详情", executionDetailsDescription: "提供此执行的名称和描述", selectDocument: "选择文档", selectDocuments: "选择文档", selectDocumentDescription: "选择要处理的文档", selectDocumentsDescription: "选择要处理的文档", uploadMedia: "上传媒体", uploadMediaFiles: "上传媒体文件", uploadMediaDescription: "上传要处理的媒体文件", selectObject: "选择对象", selectObjects: "选择对象", selectObjectDescription: "配置对象属性", selectObjectsDescription: "配置对象属性", configureParameters: "配置参数", configureParametersDescription: "设置此执行的参数", reviewExecute: "审核并执行", reviewExecuteDescription: "审核您的配置并开始执行", executionComplete: "执行完成", executionCompleteDescription: "您的执行已完成" }, SS = { media: "媒体", document: "文档", mediaFiles: "媒体文件", documents: "文档", selected: "已选择", selectItems: "选择{{itemType}}", clickToView: "点击查看{{name}}", viewDocument: "查看文档" }, AS = { documentSummarizer: { title: "文档摘要", description: "自动将长篇文档、文章和报告总结为简洁概述" }, codeGenerator: { title: "代码生成器", description: "生成多种编程语言的代码片段和模板" }, emailComposer: { title: "邮件撰写", description: "撰写可自定义语气和风格的专业邮件" }, dataExtractor: { title: "数据提取", description: "从非结构化文本、PDF 和图片中提取结构化数据" }, translationHub: { title: "翻译中心", description: "在多种语言之间进行上下文感知的内容翻译" }, contentRewriter: { title: "内容改写", description: "在保持原意的基础上改写和释义内容" }, sentimentAnalyzer: { title: "情感分析", description: "分析客户反馈和评论的文本情感和情绪基调" }, meetingNotes: { title: "会议记录", description: "从会议记录中生成会议摘要和行动项" }, researchAssistant: { title: "研究助手", description: "从多个来源进行研究并汇总发现" }, socialMediaWriter: { title: "社交媒体撰写", description: "为各平台创建引人注目的社交媒体帖子" }, contractAnalyzer: { title: "合同分析", description: "审查合同和法律文件，标注关键条款和风险" }, productDescriptions: { title: "产品描述", description: "为电商商品生成吸引人的产品描述" }, knowledgeBase: { title: "知识库", description: "从组织文档中查询和检索信息" }, reportGenerator: { title: "报告生成器", description: "根据原始数据创建详细的报告和分析摘要" }, taskPlanner: { title: "任务规划", description: "将复杂项目分解为可执行的任务和时间线" }, faqGenerator: { title: "常见问题生成器", description: "从产品文档生成全面的常见问题解答" }, assistant: { title: "智能助手", description: "借助 AI 助手处理您的内容和任务" }, seoTool: { title: "SEO 工具", description: "生成和优化 SEO 内容以提升搜索可见度" }, artGeneration: { title: "AI 绘画", description: "使用 AI 技术生成精美的艺术作品和图片" }, reverseSearch: { title: "以图搜图", description: "使用反向图片搜索查找相似的图片和内容" }, basicAgent: { title: "基础智能体", description: "与基础 AI 智能体对话，协助处理各种任务和查询" } }, DS = { uploadNew: "上传新文件", uploadMedia: "上传媒体", uploadDocument: "上传文档", dragDropMedia: "将媒体文件拖放到此处", dragDropDocuments: "将文档拖放到此处", uploading: "上传中...", progressComplete: "已完成 {{progress}}%", selectFiles: "选择要上传的文件" }, TS = {
  search: yS,
  execution: NS,
  dashboard: wS,
  steps: CS,
  media: SS,
  tools: AS,
  upload: DS
}, IS = "搜索集合...", PS = "创建集合", kS = "暂无{{label}}集合", _S = "暂无集合", ES = "未找到{{label}}集合", zS = "未找到集合", FS = "请尝试调整搜索条件", LS = "创建您的第一个集合以开始使用", RS = "个人", $S = "组织", MS = { notFound: "未找到集合", all: "全部", collections: "集合", collectionsCount: "集合 ({{count}})", documents: "文档", documentsCount: "文档 ({{count}})", total: "总计", noItems: "此集合中暂无项目", noItemsHelp: "添加文档或集合以开始使用", noFilterResults: "未找到{{filter}}", noFilterResultsHelp: "请尝试更改筛选条件" }, OS = { title: "添加到集合", titleWithCount: "将 {{count}} 个文档添加到集合", selectExisting: "选择已有集合", createNew: "新建集合", searchPlaceholder: "搜索集合...", noCollectionsFound: "未找到集合", createNewCollection: "创建新集合", selectedCount_one: "已选择 {{count}} 个集合", selectedCount_other: "已选择 {{count}} 个集合", nameRequired: "名称 *", namePlaceholder: "输入集合名称", descriptionLabel: "描述", descriptionPlaceholder: "输入集合描述（可选）", typeLabel: "类型", typePlaceholder: "选择类型（可选）", groupsLabel: "分组", loadingGroups: "加载分组中...", noGroupsAvailable: "暂无可用分组", successAdded: "已成功添加到 {{count}} 个{{label}}", errorAdding: "添加到集合时出错", errorCreating: "创建集合时出错", documentsAdded: "已添加 {{count}} 个{{label}}", successCreatedAndAdded: '已成功添加到"{{name}}"', adding: "添加中...", createAndAdd: "创建并添加", addToCollectionBtn: "添加到集合", addToCollectionsBtn: "添加到 {{count}} 个集合" }, jS = {
  searchPlaceholder: IS,
  createCollection: PS,
  noCollectionsYet: kS,
  noCollectionsYetGeneric: _S,
  noCollectionsFound: ES,
  noCollectionsFoundGeneric: zS,
  tryAdjustingSearch: FS,
  createFirstCollection: LS,
  personal: RS,
  organization: $S,
  detail: MS,
  addToCollection: OS
}, BS = { save: "保存", saving: "保存中...", cancel: "取消", delete: "删除", deleting: "删除中...", confirm: "确认", add: "添加", remove: "移除", search: "搜索", filter: "筛选", filters: "筛选条件", clearAll: "清除全部", clearFilters: "清除筛选", close: "关闭", back: "返回", continue: "继续", execute: "执行", download: "下载", downloading: "下载中...", refresh: "刷新", edit: "编辑", select: "选择", showPreview: "显示预览", hidePreview: "隐藏预览", addToCollection: "添加到集合", logOut: "退出登录", done: "完成", addItem: "添加项目", chooseExisting: "选择已有", apply: "应用", reset: "重置", upload: "上传", copyLink: "复制链接", copied: "已复制！", byEmail: "通过邮件", copiedToClipboard: "已复制到剪贴板", showInfo: "显示信息", hideInfo: "隐藏信息", editProperties: "编辑属性", resetChat: "重置聊天" }, HS = { loading: "加载中...", loadingMore: "加载更多...", noResults: "未找到结果", noMoreItems: "没有更多项目可加载", empty: "暂无内容", error: "错误", errorOccurred: "发生错误", loadingPreview: "加载预览中...", noContentAvailable: "暂无可用内容", notSet: "未设置", yes: "是", no: "否", emptyList: "空列表", emptyValue: "空", waiting: "等待中...", uploading: "上传中...", uploadedSuccessfully: "上传成功", updated: "已更新", skipped: "已跳过", uploadFailed: "上传失败", comingSoon: "即将推出" }, VS = { title: "404 - 页面未找到", description: "您访问的页面不存在。" }, qS = { label: "主题", light: "浅色", dark: "深色", system: "跟随系统" }, GS = { label: "配色方案", default: "默认", red: "红色", orange: "橙色", yellow: "黄色", green: "绿色", teal: "青色", blue: "蓝色", indigo: "靛蓝", violet: "紫罗兰", fuchsia: "品红", pink: "粉色", rose: "玫瑰色", slate: "石板灰" }, WS = { label: "语言" }, US = { label: "仪表盘", user: "用户", admin: "管理员" }, KS = "应用门户", YS = "更多", XS = "集合", QS = "文档", ZS = "在新标签页中打开", JS = "v{{version}}", eA = "{{count}} 个项目", tA = "{{count}} 个项目", nA = { successTitle: "设置已保存", successDescription: "正在刷新应用设置...", errorTitle: "保存设置失败", errorDescription: "无法更新设置，请重试。" }, aA = { sm: "小 (sm)", smHint: ">= 640px", md: "中 (md)", mdHint: ">= 768px", lg: "大 (lg)", lgHint: ">= 1024px", xl: "超大 (xl)", xlHint: ">= 1280px" }, oA = { name: "名称", type: "类型", description: "描述", createdAt: "创建时间", updatedAt: "更新时间", status: "状态", createdBy: "创建者", format: "格式", modified: "修改时间", inputParameters: "输入参数", property: "属性", label: "标签", modifier: "修改者" }, iA = { selectIcon: "选择图标...", searchIcons: "搜索图标...", noIconsFound: "未找到图标。" }, rA = { yes: "是", no: "否" }, sA = { searchPlaceholder: "搜索{{label}}..." }, lA = { enable: "启用", enterField: "输入{{field}}", selectField: "选择{{field}}", noPropertiesDefined: "此对象未定义属性", noSchemaDefined: "此对象未定义模式", noSchemaDefinedForItems: "项目未定义模式", noParametersRequired: "此交互不需要参数", itemIndex: "项目 {{index}}", noItemsAdded: "尚未添加项目", clickAddItem: '点击"添加项目"以创建新条目', enterTextHere: "在此输入文本...", enterValueHere: "在此输入值...", selectOrUploadDocument: "选择或上传文档...", noValue: "无值", noDocumentData: "无可用文档数据" }, cA = { uploadDocuments: "上传文档", uploading: "上传中...", uploadComplete: "上传完成", addFilesDescription: "添加要上传的文件", uploadingFiles: "正在上传 {{count}} 个文件", uploadingFiles_other: "正在上传 {{count}} 个文件", uploadSuccess_one: "{{count}} 个文件上传成功", uploadSuccess_other: "{{count}} 个文件上传成功", clickToBrowse: "点击浏览或将文件拖放到此处", pasteFromClipboard: "您也可以从剪贴板粘贴文件", filesSelected_one: "已选择 {{count}} 个文件", filesSelected_other: "已选择 {{count}} 个文件", fileLimitReached: "已达到文件数量限制", uploadingProgress: "正在上传文件...", invalidFileType: "无效的文件类型", invalidFileTypeDescription: "所选文件均不符合允许的文件类型", someFilesIgnored: "部分文件已忽略", filesIgnored_one: "{{count}} 个文件已被忽略（不支持的类型）", filesIgnored_other: "{{count}} 个文件已被忽略（不支持的类型）", maxFilesAllowed: "最多允许 {{max}} 个文件", failedToDownload: "文件下载失败", documentNotFound: "未找到文档" }, dA = { selectType: "选择类型", searchTypes: "搜索类型...", noTypeFound: "未找到类型。", selectTypes: "选择类型...", selectAgents: "选择智能体...", searchAgents: "搜索智能体...", noAgentFound: "未找到智能体。", agentsSelected: "已选择 {{count}} 个智能体", typesSelected: "已选择 {{count}} 个类型", selectProperty: "选择属性...", searchProperties: "搜索属性...", noPropertyFound: "未找到属性。", noPropertiesAvailable: "无可用属性", typeProperties: "类型属性", commonProperties: "通用属性", none: "无" }, uA = { title: "最近查看", noDocuments: "没有最近查看的文档", documentsWillAppear: "您打开的文档将显示在此处" }, mA = { chatWithDocument: "与您的文档对话", askQuestions: "提问关于 <strong>{{name}}</strong> 的问题，获取基于其内容的智能回答。", errorProcessing: "抱歉，处理您的请求时遇到问题。请重试。", errorGeneral: "抱歉，遇到错误。请稍后重试。", askPlaceholder: "对此文档提问...", waitingPlaceholder: "等待回复中..." }, pA = { noContentSource: "无文档内容来源", chat: "聊天", properties: "属性" }, hA = { semanticSearch: "语义搜索", semanticSearchPlaceholder: "输入您要查找的内容", propertySearch: "属性搜索", types: "类型", statuses: "状态", users: "用户", autoSearch: "自动搜索", selectDateRange: "选择日期范围", all: "全部", contentType: "内容类型", mimeType: "MIME 类型", scoreLabel: "评分", scoreTooltip: "设置评分相关性阈值可以控制搜索结果的严格程度。0.60 的评分通常被视为相关匹配，低于该分数则通常被认为相关性较低。", selectFiltersToSearch: "选择筛选条件进行搜索", selectAtLeastOneFilter: "请在任意搜索筛选中选择至少一个值以查看结果。", searchDocuments: "搜索文档...", showMore: "显示另外 {{count}} 项", showLess: "收起" }, gA = { documents: "文档", selectAll: "全选", selectRow: "选择行", gridView: "网格视图", tableView: "表格视图", listView: "列表视图", items: "项目" }, fA = { totalDocuments: "文档总数", allDocuments: "系统中的所有文档", thisWeek: "本周", documentsThisWeek: "本周上传的文档", thisMonth: "本月", documentsThisMonth: "本月上传的文档", thisYear: "今年", documentsThisYear: "今年上传的文档" }, bA = { title: "快捷操作", uploadDocument: "上传文档", searchDocuments: "搜索文档", createCollection: "创建集合", latestAgents: "最新智能体" }, vA = { activityWillAppear: "上传文档后，活动将显示在此处", recentActivity: "最近活动", noActivity: "暂无活动" }, xA = { title: "调整横幅位置", description: "拖动以重新定位。亮区显示仪表盘上可见的部分。", zoom: "缩放" }, yA = { basic: "基本", advanced: "高级", propertiesGenerating: "属性正在生成中，请稍后查看。" }, NA = { nameLabel: "名称", descriptionLabel: "描述", typeLabel: "类型", groupsLabel: "群组", loadingGroups: "加载群组中...", noGroupsAvailable: "无可用群组", enterName: "输入集合名称", enterDescription: "输入集合描述（可选）", selectType: "选择类型（可选）", searchItems: "搜索项目", addedMembers: "已添加的成员", searchDocuments: "搜索文档", searchCollections: "搜索集合", clickToAdd: "点击项目将其添加到集合", noMembersAdded: "尚未添加成员。", searchAndClick: "在左侧搜索并点击项目以添加。", members: "成员", saveChanges: "保存更改", createCollection: "创建集合", saveChangesDescription: "点击<strong>保存更改</strong>将更新此集合并应用所有成员更改。", createCollectionDescription: "点击<strong>创建集合</strong>将使用指定成员创建此集合。", noDescription: "无描述", documentCount_one: "{{count}} 个文档", documentCount_other: "{{count}} 个文档", subCollectionCount_one: "{{count}} 个子集合", subCollectionCount_other: "{{count}} 个子集合", newCount: "+{{count}} 新增", noMembers: "此集合中没有成员", newBadge: "新", editCollection: "编辑集合", createCollectionTitle: "创建集合", editDescription: "更新集合属性并管理成员", createDescription: "创建新集合来组织您的文档", saving: "保存中...", creating: "创建中...", next: "下一步", stepDetails: "详情", stepMembers: "成员", stepReview: "审核", noDocumentsFound: "未找到文档。", noCollectionsFound: "未找到集合。", typeToSearchDocuments: "输入以搜索文档", typeToSearchCollections: "输入以搜索集合", itemCount_one: "{{count}} 个项目", itemCount_other: "{{count}} 个项目", newMemberLabel: "(新)" }, wA = "文档", CA = "集合", SA = "{{count}} 个文档", AA = "{{count}} 个文档", DA = { add: "添加到收藏", remove: "从收藏中移除", title: "我的收藏", description: "您收藏的文档", empty: "您还没有任何收藏", emptyHelp: "将文档添加到收藏后即可在此查看", loadError: "加载收藏失败", descriptionUser: "{{name}} 的收藏文档" }, TA = {
  actions: BS,
  states: HS,
  notFound: VS,
  theme: qS,
  colorScheme: GS,
  language: WS,
  dashboardView: US,
  appPortal: KS,
  more: YS,
  collection: XS,
  document: QS,
  openInNewTab: ZS,
  version: JS,
  items_one: eA,
  items_other: tA,
  settingsToast: nA,
  gridCols: aA,
  properties: oA,
  iconPicker: iA,
  boolean: rA,
  search: sA,
  form: lA,
  upload: cA,
  inputs: dA,
  recentlyViewed: uA,
  chat: mA,
  documentPanel: pA,
  filters: hA,
  tables: gA,
  stats: fA,
  quickActions: bA,
  activityFeed: vA,
  bannerPosition: xA,
  propertiesPanel: yA,
  collectionWizard: NA,
  documents: wA,
  collections: CA,
  documentCount_one: SA,
  documentCount_other: AA,
  favorites: DA
}, IA = "欢迎使用您的文档库", PA = "您的文档管理平台，用于搜索、整理文件并借助 AI 工具高效协作", kA = "搜索文档或资源...", _A = "未找到结果", EA = "搜索范围：", zA = "集合", FA = { everywhere: "全部", contents: "内容", title: "标题", collections: "集合" }, LA = "ECM 全景", RA = "概览", $A = "动态", MA = "搜索文档...", OA = "网格视图", jA = "列表视图", BA = "列表视图即将推出", HA = "最近文档", VA = "上传趋势", qA = "按类型存储", GA = "主要贡献者", WA = "图表可视化即将推出", UA = "贡献者统计即将推出", KA = { failedToLoadMore: "加载更多图片失败", failedToLoadMoreDescription: "无法获取更多图片，请重试。", failedToLoad: "加载图片失败", failedToLoadDescription: "无法获取最新图片，请重试。", searchFailed: "搜索失败", searchFailedDescription: "无法执行语义搜索，请重试。" }, YA = { ask: "询问 AI 助手", title: "AI 助手", open: "打开 AI 助手", minimize: "最小化", enlarge: "放大", shrink: "缩小", starting: "正在启动对话…", empty: "开始搜索以与助手对话。", inputPlaceholder: "输入消息…", notConfigured: "未为智能体搜索配置任何智能体。", noRunId: "未返回智能体运行。服务器可能不支持此功能。", startFailed: "无法启动对话。", tryAgain: "重试", searchPrefix: "搜索与以下内容相关的文档或内容：", send: "发送" }, XA = {
  defaultTitle: IA,
  defaultDescription: PA,
  searchPlaceholder: kA,
  noResults: _A,
  searchIn: EA,
  collection: zA,
  searchModes: FA,
  ecmLandscape: LA,
  overview: RA,
  activity: $A,
  searchDocuments: MA,
  gridView: OA,
  listView: jA,
  listViewComingSoon: BA,
  recentDocuments: HA,
  uploadsOverTime: VA,
  storageByType: qA,
  topContributors: GA,
  chartComingSoon: WA,
  contributorComingSoon: UA,
  errors: KA,
  aiAssistant: YA
}, QA = "我的", ZA = "全部", JA = "按名称搜索...", e0 = "卡片视图", t0 = "表格视图", n0 = "交互", a0 = "创建者", o0 = "创建时间", i0 = "名称", r0 = "描述", s0 = "暂无可用筛选条件", l0 = "加载执行记录失败：{{message}}", c0 = "未找到执行记录", d0 = "未配置执行容器类型", u0 = "加载中...", m0 = { notFound: "未找到执行记录", notFoundDescription: "您查找的执行记录不存在。", encounteredError: "执行遇到错误", contactAdmin: "请联系系统管理员获取更多信息", agentResponse: "智能体响应", completedSuccessfully: "执行成功完成", executionDetails: "执行详情", inputParameters: "输入参数" }, p0 = {
  mine: QA,
  all: ZA,
  searchPlaceholder: JA,
  cardView: e0,
  tableView: t0,
  interaction: n0,
  createdBy: a0,
  createdAt: o0,
  name: i0,
  description: r0,
  noFiltersAvailable: s0,
  failedToLoad: l0,
  noExecutionsFound: c0,
  containerTypeNotConfigured: d0,
  documentLoading: u0,
  detail: m0
}, h0 = "自动搜索", g0 = "高级", f0 = "基本", b0 = "搜索文档...", v0 = { download: "下载", addToCollection: "添加到集合", delete: "删除", more: "更多", errorDownloading: "下载文档出错", errorDownloadingDescription: "下载文档时发生错误。", deleteTitle: "删除 {{typeName}}", deleteConfirm: "确定要删除此 {{typeName}} 吗？", deleteSuccess: "{{typeName}} 已删除", deleteSuccessDescription: "{{typeName}} {{id}} 已成功删除", deleteError: "删除 {{typeName}} 出错" }, x0 = { type: "类型", typePlaceholder: "按类型搜索", status: "状态", statusPlaceholder: "按状态搜索", createdBy: "创建者", createdByPlaceholder: "按创建者搜索" }, y0 = "已选择 {{count}} 项", N0 = { title: "未找到文档", description: "请尝试调整筛选条件或搜索词" }, w0 = {
  autoSearch: h0,
  advanced: g0,
  basic: f0,
  searchPlaceholder: b0,
  document: v0,
  facets: x0,
  selectedCount: y0,
  noDocuments: N0
}, C0 = { application: "应用", administration: "管理" }, S0 = { dashboard: { title: "仪表盘", tooltip: "仪表盘" }, advancedSearch: { title: "高级搜索", tooltip: "高级搜索", description: "搜索并浏览您的文档" }, collections: { title: "集合", tooltip: "集合", description: "组织和管理您的集合" }, collectionsPersonal: { title: "个人", tooltip: "个人集合" }, collectionsOrganization: { title: "组织", tooltip: "组织集合" }, agents: { title: "智能体", tooltip: "智能体", description: "配置和管理您的 AI 智能体" }, browseAgents: { title: "浏览智能体", tooltip: "浏览智能体" }, executions: { title: "执行记录", tooltip: "智能体执行记录" }, settings: { title: "设置", tooltip: "设置", description: "管理应用设置和配置" }, favorites: { title: "收藏", tooltip: "收藏", description: "您收藏的文档" } }, A0 = {
  sections: C0,
  items: S0
}, D0 = { application: "应用", dashboard: "仪表盘", library: "高级搜索", whitelist: "白名单", sidebar: "侧边栏", agents: "智能体", properties: "属性", rendition: "渲染", search: "搜索", language: "语言", colorScheme: "配色方案", favorites: "收藏" }, T0 = { title: "应用", description: "自定义侧边栏和面包屑中显示的应用名称、图标和品牌。", applicationName: "应用名称", applicationNamePlaceholder: "ECM", applicationNameHelp: "自定义侧边栏顶部显示的应用名称。", leaveEmptyDefault: "留空则使用默认名称：", breadcrumbLabel: "面包屑标签", breadcrumbPlaceholder: "仪表盘", breadcrumbHelp: "自定义顶部导航中显示的根面包屑标签。", applicationIcon: "应用图标", iconTabIcon: "图标", iconTabImage: "图片", uploadImage: "上传图片", chooseFromLibrary: "从库中选择", uploadFailed: "图片上传失败", iconImageHelp: "上传图片或从库中选择一张图片作为应用图标。图片显示在透明背景上，因此带透明通道的图片（PNG）效果最佳。", iconBackgroundColor: "图标背景颜色", preview: "预览" }, I0 = { title: "仪表盘", description: "配置用户仪表盘的外观和行为。", titleLabel: "标题", titlePlaceholder: "欢迎使用您的文档库", titleHelp: "在仪表盘上作为主标题显示。", descriptionLabel: "描述", descriptionPlaceholder: "您的文档管理平台，用于搜索、整理文件并借助 AI 工具高效协作", descriptionHelp: "在仪表盘标题下方显示。", backgroundImage: "背景图片", backgroundPreviewAlt: "仪表盘背景预览", selectImage: "选择图片", changeImage: "更换图片", adjustPosition: "调整位置", backgroundHelp: "在仪表盘上作为横幅背景显示。未设置时使用默认图片。", bannerRenditionSize: "横幅渲染尺寸", bannerRenditionSizeHelp: "横幅图片渲染的最大宽/高像素值。值越大图片越清晰，但加载速度越慢。", bannerMaxHeight: "横幅最大高度 (px)", bannerMaxHeightHelp: "页面未滚动时横幅的高度。", bannerMinHeight: "横幅最小高度 (px)", bannerMinHeightHelp: "滚动后横幅完全折叠时的高度。", displayMode: "仪表盘显示", displayModeOptions: { imageGrid: "最新文档网格", recentlyViewed: "最近查看" }, displayModeHelp: { imageGrid: "以无限滚动的方式显示最新文档的网格。", recentlyViewed: "显示用户最近查看的文档列表。" }, imageGridLayout: "图片网格布局", imageGridLayoutHelp: "配置各屏幕尺寸下每行显示的项目数量，以及每页获取的项目数。", itemsPerPage: "每页项目数", itemsPerPageHelp: "每次搜索请求获取的项目数量（用于无限滚动分页）。", uploadImage: "上传图片", uploadFailed: "图片上传失败", invalidImage: "请选择小于 20 MB 的图片文件。", agenticSearch: { label: "智能体搜索代理", placeholder: "选择一个智能体…", none: "无（隐藏按钮）", help: "仪表板“询问 AI 助手”按钮所使用的智能体。保留为“无”可隐藏按钮。" } }, P0 = { title: "高级搜索", description: "配置不同屏幕尺寸下的高级搜索网格布局。", gridLayout: "网格布局", gridLayoutHelp: "高级搜索面板关闭时每行显示的项目数。", advancedSearchLayout: "高级搜索布局", advancedSearchLayoutHelp: "高级搜索面板打开时每行显示的项目数。" }, k0 = { title: "白名单", description: "限制文档库和仪表盘中可见的文档类型。为空时显示所有类型。", dashboardWhitelist: "仪表盘白名单", dashboardWhitelistHelp: "非空时，仅这些文档类型会显示在仪表盘上。", libraryWhitelist: "文档库白名单", libraryWhitelistHelp: "非空时，仅这些文档类型会出现在文档库搜索结果中。", collectionWhitelist: "集合白名单", collectionWhitelistHelp: "非空时，创建集合时仅可使用这些类型。", selectTypesPlaceholder: "选择要加入白名单的类型..." }, _0 = { title: "侧边栏", description: "选择导航侧边栏中显示的项目。新项目默认显示；隐藏的项目也会被阻止通过直接 URL 访问，并重定向到主页。", alwaysVisible: "始终可见", help: "主页和设置无法隐藏，以保持侧边栏可用。", hideItem: "隐藏{{item}}", showItem: "显示{{item}}" }, E0 = { title: "智能体", description: "管理应用中可见的智能体。禁用的智能体将不会出现在搜索结果中。", noAgentsFound: "未找到智能体。", enabledCount: "已启用 {{enabledCount}} / {{totalCount}} 个智能体版本", enabledCount_other: "已启用 {{enabledCount}} / {{totalCount}} 个智能体版本", columns: { enabled: "已启用", agent: "智能体", versions: "版本" }, version_one: "{{count}} 个版本", version_other: "{{count}} 个版本", toggleAgent: "切换 {{name}}", collapseVersions: "收起版本", expandVersions: "展开版本" }, z0 = { title: "属性", description: "配置每种文档类型显示的基本属性和高级属性。未单独配置的类型将使用默认属性。", documentType: "文档类型", selectTypePlaceholder: "选择要配置的文档类型...", searchTypes: "搜索类型...", noTypeFound: "未找到类型。", selectTypeHelp: "选择要配置属性的文档类型。带有标记的类型已有自定义定义。", basicProperties: "基本属性", advancedProperties: "高级属性", addProperty: "添加属性...", displayLabel: "显示标签" }, F0 = { title: "渲染尺寸", description: "配置缩略图网格和模态预览使用的渲染尺寸。", thumbnailGrid: "缩略图网格 (px)", thumbnailDefault: "默认值：512", modalPreview: "模态预览 (px)", modalDefault: "默认值：1024" }, L0 = { title: "基础筛选项", description: "配置在文档库基础搜索栏中可用的筛选项。" }, R0 = { title: "高级筛选项", description: "配置在文档库高级搜索中可用的筛选项。", field: "字段", name: "名称", displayName: "显示名称", addFacet: "添加筛选项...", filterByType: "按文档类型筛选", selectTypePlaceholder: "选择类型以浏览其属性...", allTypes: "所有类型（仅通用属性）", typeFilterHelp: "可选择文档类型以浏览其特定属性。通用属性始终可用。", noFacetsConfigured: "未配置筛选项。请选择下方字段开始配置。", addCustomFacet: "添加自定义分面", fieldPlaceholder: "属性路径（例如 properties.author）" }, $0 = { title: "搜索权重", description: "配置搜索时各嵌入类型的权重。", enableWeightedSearch: "启用加权搜索", enableWeightedSearchHelp: "启用后，这些权重将应用于嵌入搜索结果。", text: "文本", images: "图片", properties: "属性" }, M0 = { title: "语言", description: "配置应用的默认语言。用户可以单独覆盖此偏好设置。", defaultLanguage: "默认语言", defaultLanguageHelp: "用户未设置个人语言偏好时使用的默认语言。" }, O0 = { title: "配色方案", description: "配置应用的默认配色方案。用户可以单独覆盖此偏好设置。", defaultColorScheme: "默认配色方案", defaultColorSchemeHelp: "用户未设置个人配色偏好时使用的默认配色方案。" }, j0 = { title: "收藏", description: "配置用户收藏的存储方式。收藏保存在每个用户的集合中，类型由下方关联。", quickSetup: "快速设置", createAndLink: "创建并关联收藏类型", createAndLinkHelp: "创建“收藏”内容类型（或复用现有类型）并关联到下方设置。", collectionType: "收藏集合类型", collectionTypePlaceholder: "选择集合类型", collectionTypeHelp: "创建每个用户的收藏集合时使用的类型。留空则不指定类型。", noType: "不指定类型", typeDescription: "用于用户收藏集合的内容类型。", typeLinked: "收藏类型已创建并关联", typeError: "创建收藏类型失败" }, B0 = {
  tabs: D0,
  application: T0,
  dashboard: I0,
  library: P0,
  whitelist: k0,
  sidebar: _0,
  agents: E0,
  properties: z0,
  rendition: F0,
  basicFilters: L0,
  facets: R0,
  searchWeights: $0,
  language: M0,
  colorScheme: O0,
  favorites: j0
}, Pn = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  zh: "中文"
}, H0 = "vertesia.psea.language", V0 = /* @__PURE__ */ Object.assign({
  "/src/ui/locales/de/agents.json": nd,
  "/src/ui/locales/de/collections.json": gd,
  "/src/ui/locales/de/common.json": nu,
  "/src/ui/locales/de/dashboard.json": Au,
  "/src/ui/locales/de/executions.json": Hu,
  "/src/ui/locales/de/library.json": Qu,
  "/src/ui/locales/de/navigation.json": em,
  "/src/ui/locales/de/settings.json": fm,
  "/src/ui/locales/en/agents.json": Sm,
  "/src/ui/locales/en/collections.json": $m,
  "/src/ui/locales/en/common.json": Sp,
  "/src/ui/locales/en/dashboard.json": Up,
  "/src/ui/locales/en/executions.json": dh,
  "/src/ui/locales/en/library.json": xh,
  "/src/ui/locales/en/navigation.json": wh,
  "/src/ui/locales/en/settings.json": Mh,
  "/src/ui/locales/es/agents.json": Wh,
  "/src/ui/locales/es/collections.json": ig,
  "/src/ui/locales/es/common.json": Wg,
  "/src/ui/locales/es/dashboard.json": ff,
  "/src/ui/locales/es/executions.json": zf,
  "/src/ui/locales/es/library.json": Hf,
  "/src/ui/locales/es/navigation.json": Gf,
  "/src/ui/locales/es/settings.json": sb,
  "/src/ui/locales/fr/agents.json": gb,
  "/src/ui/locales/fr/collections.json": Ib,
  "/src/ui/locales/fr/common.json": gv,
  "/src/ui/locales/fr/dashboard.json": Mv,
  "/src/ui/locales/fr/executions.json": tx,
  "/src/ui/locales/fr/library.json": dx,
  "/src/ui/locales/fr/navigation.json": px,
  "/src/ui/locales/fr/settings.json": Px,
  "/src/ui/locales/it/agents.json": $x,
  "/src/ui/locales/it/collections.json": Xx,
  "/src/ui/locales/it/common.json": $y,
  "/src/ui/locales/it/dashboard.json": rN,
  "/src/ui/locales/it/executions.json": CN,
  "/src/ui/locales/it/library.json": EN,
  "/src/ui/locales/it/navigation.json": LN,
  "/src/ui/locales/it/settings.json": QN,
  "/src/ui/locales/pt/agents.json": iw,
  "/src/ui/locales/pt/collections.json": vw,
  "/src/ui/locales/pt/common.json": iC,
  "/src/ui/locales/pt/dashboard.json": IC,
  "/src/ui/locales/pt/executions.json": GC,
  "/src/ui/locales/pt/library.json": eS,
  "/src/ui/locales/pt/navigation.json": aS,
  "/src/ui/locales/pt/settings.json": xS,
  "/src/ui/locales/zh/agents.json": TS,
  "/src/ui/locales/zh/collections.json": jS,
  "/src/ui/locales/zh/common.json": TA,
  "/src/ui/locales/zh/dashboard.json": XA,
  "/src/ui/locales/zh/executions.json": p0,
  "/src/ui/locales/zh/library.json": w0,
  "/src/ui/locales/zh/navigation.json": A0,
  "/src/ui/locales/zh/settings.json": B0
}), Za = {};
for (const [t, n] of Object.entries(V0)) {
  const a = t.split("/"), o = a[a.length - 2], r = a[a.length - 1].replace(".json", "");
  Za[o] ??= {}, Za[o][r] = n;
}
Xi.use(Fs).init({
  lng: localStorage.getItem(H0) || "en",
  fallbackLng: "en",
  supportedLngs: Object.keys(Pn),
  ns: [
    "common",
    "navigation",
    "settings",
    "dashboard",
    "library",
    "agents",
    "collections",
    "executions"
  ],
  defaultNS: "common",
  resources: Za,
  interpolation: {
    escapeValue: !1
  },
  react: {
    useSuspense: !1
  }
});
function Qo(t) {
  return t ? t.split(" ").map((o) => o.charAt(0).toUpperCase()).join("").slice(0, 2) : "U";
}
function qn(t) {
  if (!t)
    return !1;
  let n = t?.account_roles || [];
  Array.isArray(n) || (n = []);
  let a = t?.project_roles || [];
  Array.isArray(a) || (a = []);
  const o = [...n, ...a];
  return !Array.isArray(o) || o.length === 0 ? !1 : o.includes("admin") || o.includes("owner");
}
function q0() {
  const { client: t, logout: n, user: a } = de(), { state: o } = Vn(), { theme: r, setTheme: s } = Et(ro), { colorScheme: l, setColorScheme: d } = Kc(), { t: c, i18n: u } = K(), [m, f] = g(null), [p, h] = g(() => localStorage.getItem(na) === "admin"), b = qn(a), C = ce(() => {
    const x = location.pathname.split("/");
    return x.length >= 2 && x[1] === "apps";
  }, [location.pathname]), y = () => {
    n();
  }, v = () => {
    window.location.href = "/apps";
  };
  return M(() => {
    if (!t || !a || a?.sub.includes(":")) {
      f(null);
      return;
    }
    t.users.retrieve(a.sub).then((x) => {
      f(x?.picture ? x.picture : null);
    });
  }, [a, t]), /* @__PURE__ */ i(nn, { children: [
    /* @__PURE__ */ e(an, { asChild: !0, className: `hover:cursor-pointer ${o !== "collapsed" && "border"}`, children: /* @__PURE__ */ i(la, { size: "lg", className: "data-[state=open]:bg-sidebar-accent bg-background data-[state=open]:text-sidebar-accent-foreground", children: [
      /* @__PURE__ */ i(da, { className: "h-8 w-8 border rounded-lg", children: [
        m && /* @__PURE__ */ e(ua, { src: m, alt: a?.name }),
        /* @__PURE__ */ e(ma, { className: "rounded-lg", children: Qo(a?.name) })
      ] }),
      /* @__PURE__ */ i("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
        /* @__PURE__ */ e("span", { className: "truncate font-medium", children: a?.name }),
        /* @__PURE__ */ e("span", { className: "truncate text-xs", children: a?.email })
      ] }),
      /* @__PURE__ */ e(Ut, { className: "ml-auto size-4" })
    ] }) }),
    /* @__PURE__ */ i(jt, { className: "min-w-56 rounded-lg", side: "top", align: "start", sideOffset: 4, children: [
      /* @__PURE__ */ e(fr, { className: "p-0 font-normal", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
        /* @__PURE__ */ i(da, { className: "h-8 w-8 rounded-lg", children: [
          m && /* @__PURE__ */ e(ua, { src: m, alt: a?.name }),
          /* @__PURE__ */ e(ma, { className: "rounded-lg", children: Qo(a?.name) })
        ] }),
        /* @__PURE__ */ i("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
          /* @__PURE__ */ e("span", { className: "truncate font-medium", children: a?.name }),
          /* @__PURE__ */ e("span", { className: "truncate text-xs", children: a?.email })
        ] })
      ] }) }),
      /* @__PURE__ */ e(Rt, {}),
      /* @__PURE__ */ e(Tn, { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2 py-1.5", children: [
        /* @__PURE__ */ e("span", { className: "text-sm font-light", children: c("theme.label") }),
        /* @__PURE__ */ i("div", { className: "flex gap-1 rounded-md border p-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => s("light"),
              className: `p-1.5 hover:cursor-pointer rounded transition-colors ${r === "light" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`,
              title: c("theme.light"),
              children: /* @__PURE__ */ e(Hs, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => s("dark"),
              className: `p-1.5 hover:cursor-pointer rounded transition-colors ${r === "dark" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`,
              title: c("theme.dark"),
              children: /* @__PURE__ */ e(Vs, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => s("system"),
              className: `p-1.5 hover:cursor-pointer rounded transition-colors ${r === "system" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`,
              title: c("theme.system"),
              children: /* @__PURE__ */ e(qs, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e(Rt, {}),
      /* @__PURE__ */ e(Tn, { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2 py-1.5 gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-sm font-light", children: c("colorScheme.label") }),
        /* @__PURE__ */ i(nn, { children: [
          /* @__PURE__ */ e(an, { asChild: !0, children: /* @__PURE__ */ i("button", { className: "flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-xs hover:cursor-pointer hover:bg-accent transition-colors", children: [
            /* @__PURE__ */ e(Gs, { className: "h-3.5 w-3.5" }),
            c(Ka[l].labelKey)
          ] }) }),
          /* @__PURE__ */ e(jt, { align: "end", children: Object.entries(Ka).map(([x, N]) => /* @__PURE__ */ i(
            at,
            {
              onClick: () => d(x),
              className: l === x ? "bg-accent" : "",
              children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: "h-3 w-3 shrink-0 rounded-full border",
                    style: { backgroundColor: N.swatch }
                  }
                ),
                c(N.labelKey)
              ]
            },
            x
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ e(Rt, {}),
      /* @__PURE__ */ e(Tn, { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2 py-1.5", children: [
        /* @__PURE__ */ e("span", { className: "text-sm font-light", children: c("language.label") }),
        /* @__PURE__ */ i(nn, { children: [
          /* @__PURE__ */ e(an, { asChild: !0, children: /* @__PURE__ */ i("button", { className: "flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-xs hover:cursor-pointer hover:bg-accent transition-colors", children: [
            /* @__PURE__ */ e(Ws, { className: "h-3.5 w-3.5" }),
            Pn[u.language] || Pn.en
          ] }) }),
          /* @__PURE__ */ e(jt, { align: "end", children: Object.entries(Pn).map(([x, N]) => /* @__PURE__ */ e(
            at,
            {
              onClick: () => {
                u.changeLanguage(x), localStorage.setItem(vr, x);
              },
              className: u.language === x ? "bg-accent" : "",
              children: N
            },
            x
          )) })
        ] })
      ] }) }),
      b && /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e(Rt, {}),
        /* @__PURE__ */ e(Tn, { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2 py-1.5 gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-sm font-light", children: c("dashboardView.label") }),
          /* @__PURE__ */ i("div", { className: "flex gap-1 rounded-md border p-0.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  h(!1), localStorage.setItem(na, "user"), window.location.reload();
                },
                className: `px-3 py-1.5 hover:cursor-pointer rounded transition-colors text-xs ${p ? "hover:bg-accent" : "bg-primary text-primary-foreground"}`,
                title: c("dashboardView.user"),
                children: c("dashboardView.user")
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  h(!0), localStorage.setItem(na, "admin"), window.location.reload();
                },
                className: `px-3 py-1.5 hover:cursor-pointer rounded transition-colors text-xs ${p ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`,
                title: c("dashboardView.admin"),
                children: c("dashboardView.admin")
              }
            )
          ] })
        ] }) })
      ] }),
      C && /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e(Rt, {}),
        /* @__PURE__ */ e(Tn, { children: /* @__PURE__ */ i(at, { onClick: v, children: [
          /* @__PURE__ */ e(Ln, { className: "p-0.5" }),
          /* @__PURE__ */ e("div", { className: "text-sm font-light text-left", children: c("appPortal") })
        ] }) })
      ] }),
      /* @__PURE__ */ e(Rt, {}),
      /* @__PURE__ */ i(at, { onClick: y, children: [
        /* @__PURE__ */ e(Us, {}),
        c("actions.logOut")
      ] })
    ] })
  ] });
}
const yr = {
  title: "sections.application",
  items: [
    { title: "items.dashboard.title", tooltip: "items.dashboard.tooltip", url: "/", icon: Ks },
    { title: "items.advancedSearch.title", tooltip: "items.advancedSearch.tooltip", url: "/advanced-search", icon: Fi, description: "items.advancedSearch.description" },
    { title: "items.favorites.title", tooltip: "items.favorites.tooltip", url: "/favorites", icon: On, description: "items.favorites.description" },
    {
      title: "items.collections.title",
      tooltip: "items.collections.tooltip",
      url: "/collections",
      icon: Li,
      description: "items.collections.description",
      items: [
        { title: "items.collectionsPersonal.title", tooltip: "items.collectionsPersonal.tooltip", url: "/collections/personal", icon: gn },
        { title: "items.collectionsOrganization.title", tooltip: "items.collectionsOrganization.tooltip", url: "/collections/organization", icon: lo }
      ]
    },
    {
      title: "items.agents.title",
      tooltip: "items.agents.tooltip",
      url: "/agents",
      icon: Ha,
      description: "items.agents.description",
      items: [
        { title: "items.browseAgents.title", tooltip: "items.browseAgents.tooltip", url: "/agents/browse", icon: Ha },
        { title: "items.executions.title", tooltip: "items.executions.tooltip", url: "/agents/executions", icon: Ri }
      ]
    }
  ]
}, Nr = {
  title: "sections.administration",
  items: [
    { title: "items.settings.title", tooltip: "items.settings.tooltip", url: "/settings", icon: Ys, description: "items.settings.description" }
  ]
}, wr = {
  max_hw: 512,
  format: Ls.png,
  generate_if_missing: !0,
  sign_url: !0
}, G0 = "audio/", Zo = "text/html", Jo = "image/", ei = "application/markdown", ti = "application/vnd.ms-access", W0 = "application/msword", ni = "application/octet-stream", U0 = "application/vnd.openxmlformats-officedocument", ai = "application/pdf", K0 = "text/plain", oi = "text/markdown", ii = "text/x-markdown", ri = "video/", Y0 = "text/xml", X0 = (t) => t.startsWith(G0), Q0 = (t) => t === Zo || Zo.includes(t), Cr = (t) => t.startsWith(Jo) || Jo.includes(t), Z0 = (t) => t === ei || ei.includes(t), No = (t) => t === W0 || t.startsWith(ti) || ti.includes(t), Sr = (t) => t === ni || ni.includes(t), wo = (t) => t.startsWith(U0), Ar = (t) => t === ai || ai.includes(t), J0 = (t) => t === K0 || t === Y0, eD = (t) => t === oi || oi.includes(t) || t === ii || ii.includes(t), Dr = (t) => t.startsWith(ri) || ri.includes(t);
function tD() {
  const t = (/* @__PURE__ */ new Date()).getTime() / 1e3, n = [];
  for (let a = 0; a < localStorage.length; a++) {
    const o = localStorage.key(a);
    if (o && o.startsWith(Ze) && o.endsWith("_time")) {
      const r = localStorage.getItem(o);
      r && Math.abs(t - parseInt(r)) > 900 && (n.push(o), n.push(o.replace("_time", "")));
    }
  }
  n.forEach((a) => localStorage.removeItem(a));
}
function cn(t, n) {
  try {
    return localStorage.setItem(t, n), !0;
  } catch (a) {
    if (a instanceof DOMException && (a.name === "QuotaExceededError" || a.code === 22)) {
      tD();
      try {
        return localStorage.setItem(t, n), !0;
      } catch {
        const o = [];
        for (let r = 0; r < localStorage.length; r++) {
          const s = localStorage.key(r);
          s && s.startsWith(Ze) && o.push(s);
        }
        o.forEach((r) => localStorage.removeItem(r));
        try {
          return localStorage.setItem(t, n), !0;
        } catch (r) {
          return console.error("Failed to store rendition in localStorage:", r), !1;
        }
      }
    }
    return console.error("Failed to store rendition in localStorage:", a), !1;
  }
}
async function zt(t, n, a, o, r, s = 512) {
  if (!n?.content?.type || !(Cr(n.content.type) || Dr(n.content.type) || Ar(n.content.type)))
    return;
  const l = wr;
  l.max_hw = s;
  const d = (/* @__PURE__ */ new Date()).getTime() / 1e3, c = localStorage.getItem(`${Ze}_${n.id}_${l.max_hw}`), u = localStorage.getItem(`${Ze}_${n.id}_${l.max_hw}_time`);
  if (c?.length && u && Math.abs(d - parseInt(u)) <= 900)
    return a(c), o(`${n.name} Rendition`), c;
  t.objects.getRendition(n.id, l).then((m) => {
    if (m.status === "generating")
      setTimeout(zt, 6e4);
    else if (m.status === "failed")
      r({
        status: "error",
        title: "Rendition generation Error",
        description: "Failed to generate Rendition for background removal",
        duration: 4e3
      });
    else {
      if (!m.renditions || !m.renditions.length) {
        r({
          status: "error",
          title: "Rendition generation Error",
          description: "Rendition Source is Missing",
          duration: 4e3
        });
        return;
      }
      const f = m.renditions[0], p = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      cn(`${Ze}_${n.id}_${l.max_hw}`, f), cn(`${Ze}_${n.id}_${l.max_hw}_time`, p.toString()), a(f), o(`${n.name} Rendition`);
    }
  });
}
async function Gn(t, n, a, o, r, s = 512) {
  const l = (/* @__PURE__ */ new Date()).getTime() / 1e3, d = wr;
  d.max_hw = s;
  const c = localStorage.getItem(`${Ze}_${n}_${d.max_hw}`), u = localStorage.getItem(`${Ze}_${n}_${d.max_hw}_time`);
  if (c?.length && u && Math.abs(l - parseInt(u)) <= 900)
    return a(c), o(`${n} Rendition`), c;
  t.objects.getRendition(n, d).then((m) => {
    if (m.status === "generating")
      setTimeout(zt, 6e4);
    else if (m.status === "failed")
      r({
        status: "error",
        title: "Rendition generation Error",
        description: "Failed to generate Rendition for background removal",
        duration: 4e3
      });
    else {
      if (!m.renditions || !m.renditions.length) {
        r({
          status: "error",
          title: "Rendition generation Error",
          description: "Rendition Source is Missing",
          duration: 4e3
        });
        return;
      }
      const f = m.renditions[0], p = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      cn(`${Ze}_${n}_${d.max_hw}`, f), cn(`${Ze}_${n}_${d.max_hw}_time`, p.toString()), a(f), o(`${n} Rendition`);
    }
  });
}
async function nD(t, n, a, o, r, s = !0) {
  if (!n?.content?.type || !(wo(n.content.type) || No(n.content.type) || Sr(n.content.type)))
    return;
  const l = (/* @__PURE__ */ new Date()).getTime() / 1e3, d = localStorage.getItem(`${Ze}_${n.id}_pdf`), c = localStorage.getItem(`${Ze}_${n.id}_pdf_time`);
  if (d?.length && c && Math.abs(l - parseInt(c)) <= 900)
    return a(d), o("application/pdf"), d;
  t.objects.getRendition(n.id, {
    format: Rs.pdf,
    generate_if_missing: !0,
    sign_url: !0
  }).then((u) => {
    if (u.status === "generating")
      s ? t.objects.getDownloadUrl(n.content.source, void 0, "inline").then((m) => {
        a(m.url), o(n.content.type);
      }) : r({
        status: "info",
        title: "PDF Rendition Generating",
        description: "PDF rendition is being generated, please check back momentarily.",
        duration: 4e3
      });
    else if (u.status === "failed")
      s ? t.objects.getDownloadUrl(n.content.source, void 0, "inline").then((m) => {
        a(m.url), o(n.content.type);
      }) : r({
        status: "error",
        title: "PDF Rendition Error",
        description: "Failed to generate PDF rendition",
        duration: 4e3
      });
    else {
      if (!u.renditions || !u.renditions.length) {
        s ? t.objects.getDownloadUrl(n.content.source, void 0, "inline").then((p) => {
          a(p.url), o(n.content.type);
        }) : r({
          status: "error",
          title: "PDF Rendition Error",
          description: "PDF rendition source is missing",
          duration: 4e3
        });
        return;
      }
      const m = u.renditions[0], f = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      cn(`${Ze}_${n.id}_pdf`, m), cn(`${Ze}_${n.id}_pdf_time`, f.toString()), a(m), o("application/pdf");
    }
  }).catch(() => {
    s ? t.objects.getDownloadUrl(n.content.source, void 0, "inline").then((u) => {
      a(u.url), o(n.content.type);
    }) : r({
      status: "error",
      title: "PDF Rendition Error",
      description: "Error retrieving PDF rendition",
      duration: 4e3
    });
  });
}
const aD = (() => {
});
function Tr(t, n = 128) {
  const { client: a } = de(), [o, r] = g("");
  return M(() => {
    a && t ? Gn(a, t, r, () => {
    }, aD, n) : r("");
  }, [a, t, n]), o;
}
function oD(t, n) {
  const a = t.split("-").map((o) => o.charAt(0).toUpperCase() + o.slice(1)).join(" ");
  return n?.upperCase ? a.toUpperCase() : a;
}
function iD({ ...t }) {
  const n = Fe(), { toggleSidebar: a } = Vn(), { user: o } = de(), r = qn(o), s = n?.settings || {}, l = s.APPLICATION_NAME || n?.manifest.name || void 0, d = s.APPLICATION_ICON, c = s.APPLICATION_ICON_BACKGROUND || void 0, u = s.APPLICATION_ICON_IMAGE || void 0, m = Tr(u), f = d && xt[d] || Fi;
  return /* @__PURE__ */ i(Dc, { collapsible: "icon", variant: "floating", ...t, children: [
    /* @__PURE__ */ e(Ic, { children: /* @__PURE__ */ e(gr, { children: /* @__PURE__ */ e(Xa, { children: /* @__PURE__ */ i(la, { size: "lg", onClick: a, "aria-label": "Toggle Sidebar", children: [
      m ? /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center", children: /* @__PURE__ */ e("img", { src: m, alt: l || "ECM", className: "size-8 object-contain" }) }) : /* @__PURE__ */ e(
        "div",
        {
          className: "text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg",
          style: { backgroundColor: c || "#9333ea" },
          children: /* @__PURE__ */ e(f, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5 leading-none", children: [
        /* @__PURE__ */ e("span", { className: "font-medium", children: oD(l || "ECM", { upperCase: !0 }) }),
        /* @__PURE__ */ i("span", { className: "", children: [
          "v",
          "0.8.5-mle16"
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ i(kc, { children: [
      /* @__PURE__ */ e(Yo, { section: yr }),
      r && /* @__PURE__ */ e(Yo, { section: Nr })
    ] }),
    /* @__PURE__ */ e(Pc, { children: /* @__PURE__ */ e("div", { className: "flex items-end justify-center w-full h-[60px] relative", children: /* @__PURE__ */ e(q0, {}) }) })
  ] });
}
const rD = ({ ...t }) => {
  const { theme: n = "system" } = Et(ro);
  return /* @__PURE__ */ e(
    Pl,
    {
      theme: n,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg z-99",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium"
        }
      },
      ...t
    }
  );
}, Ir = pn(null);
function sD({ children: t }) {
  const [n, a] = g({}), o = J((s, l) => {
    a((d) => ({ ...d, [s]: l }));
  }, []), r = J((s) => {
    a((l) => {
      const { [s]: d, ...c } = l;
      return c;
    });
  }, []);
  return /* @__PURE__ */ e(Ir.Provider, { value: { labels: n, setLabel: o, clearLabel: r }, children: t });
}
function lD() {
  const t = Et(Ir);
  if (!t)
    throw new Error("useBreadcrumbContext must be used within a BreadcrumbProvider");
  return t;
}
function Pr(t, n) {
  const { setLabel: a, clearLabel: o } = lD();
  M(() => (t && n && a(t, n), () => {
    t && o(t);
  }), [t, n, a, o]);
}
const si = {
  DASHBOARD_BACKGROUND_POSITION_X: 50,
  DASHBOARD_BACKGROUND_POSITION_Y: 50,
  DASHBOARD_BACKGROUND_ZOOM: 100,
  DASHBOARD_BANNER_RENDITION_SIZE: 2048,
  DASHBOARD_BANNER_MAX_HEIGHT: 160,
  DASHBOARD_BANNER_MIN_HEIGHT: 64
};
function Zt(t, n) {
  const a = t?.[n];
  if (a == null) return si[n];
  const o = Number(a);
  return isNaN(o) ? si[n] : o;
}
function Co(t) {
  return {
    positionX: Zt(t, "DASHBOARD_BACKGROUND_POSITION_X"),
    positionY: Zt(t, "DASHBOARD_BACKGROUND_POSITION_Y"),
    zoom: Zt(t, "DASHBOARD_BACKGROUND_ZOOM"),
    renditionSize: Zt(t, "DASHBOARD_BANNER_RENDITION_SIZE"),
    bannerMaxHeight: Zt(t, "DASHBOARD_BANNER_MAX_HEIGHT"),
    bannerMinHeight: Zt(t, "DASHBOARD_BANNER_MIN_HEIGHT")
  };
}
const cD = ["imageGrid", "recentlyViewed"];
function kr(t) {
  const n = t?.DASHBOARD_DISPLAY_MODE;
  return n === "imageGrid" || n === "recentlyViewed" ? n : String(t?.ENABLE_DASHBOARD_RECENTLY_VIEWED_LIST).toLowerCase() === "true" ? "recentlyViewed" : "imageGrid";
}
function dD() {
  const { client: t } = de(), n = Fe(), a = Ie(), o = n?.settings?.DASHBOARD_BACKGROUND, { renditionSize: r } = Co(n?.settings);
  M(() => {
    if (!t || !o) return;
    const s = `${Ze}_${o}_${r}`, l = localStorage.getItem(s), d = localStorage.getItem(`${s}_time`), c = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    l?.length && d && Math.abs(c - parseInt(d)) <= 900 || Gn(t, o, () => {
    }, () => {
    }, a, r);
  }, [t, o, r]);
}
function uD() {
  if (typeof document > "u")
    return !0;
  const n = document.cookie.split("; ").find((o) => o.startsWith("sidebar_state="));
  return n ? n.split("=")[1] === "true" : !0;
}
function lt({ children: t }) {
  const { user: n } = de(), a = Fe(), o = fa(), r = et();
  return dD(), M(() => {
    const s = yo(a?.settings);
    if (s.length === 0)
      return;
    const l = a?.manifest?.name, d = l ? `/apps/${l}` : "";
    let c = o.pathname;
    d && c.startsWith(d) && (c = c.slice(d.length) || "/"), Oc(c, s) && r("/", { replace: !0 });
  }, [o.pathname, a?.settings, a?.manifest?.name, r]), M(() => {
    const s = localStorage.getItem(vr), l = a?.settings?.DEFAULT_LANGUAGE;
    !s && l && Xi.changeLanguage(l);
  }, [a?.settings?.DEFAULT_LANGUAGE]), M(() => {
    const s = localStorage.getItem(xr), l = a?.settings?.DEFAULT_COLOR_SCHEME;
    nr(s || l || "default");
  }, [a?.settings?.DEFAULT_COLOR_SCHEME]), n ? /* @__PURE__ */ e(sD, { children: /* @__PURE__ */ i("div", { className: "[var(--header-height):calc(theme(spacing.14))]", style: { all: "initial", fontFamily: "inherit", color: "inherit" }, children: [
    /* @__PURE__ */ e(rD, { position: "top-right", toastOptions: { style: { zIndex: 9999 } } }),
    /* @__PURE__ */ e(Ac, { defaultOpen: uD(), className: "flex flex-col", children: /* @__PURE__ */ i("div", { className: "flex max-h-[100vh]", children: [
      /* @__PURE__ */ e(iD, {}),
      /* @__PURE__ */ e(Tc, { className: "max-h-[100vh] mr-1 min-w-0", children: /* @__PURE__ */ e("div", { className: "h-full w-full min-w-0 overflow-auto", children: t }) })
    ] }) })
  ] }) }) : /* @__PURE__ */ e("main", { className: "flex-1 overflow-hidden", children: t });
}
const mD = hn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground",
      primary_outline: "text-foreground border border-2 border-primary bg-transparent",
      secondary_outline: "text-foreground border border-2 border-white bg-transparent"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function ve({ className: t, variant: n, ...a }) {
  return /* @__PURE__ */ e("div", { className: D(mD({ variant: n }), t), ...a });
}
const ye = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("ecm-surface rounded-xl border bg-card text-card-foreground shadow", t), ...n }));
ye.displayName = "Card";
const Te = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("flex flex-col p-6", t), ...n }));
Te.displayName = "CardHeader";
const ke = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("font-semibold leading-none tracking-tight", t), ...n }));
ke.displayName = "CardTitle";
const Ye = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("text-sm text-muted-foreground", t), ...n }));
Ye.displayName = "CardDescription";
const Ce = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("p-6 pt-0", t), ...n }));
Ce.displayName = "CardContent";
const it = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("flex items-center p-6 pt-0", t), ...n }));
it.displayName = "CardFooter";
const So = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ e("table", { ref: a, className: D("w-full caption-bottom text-sm", t), ...n }) }));
So.displayName = "Table";
const xn = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("thead", { ref: a, className: D("[&_tr]:border-b", t), ...n }));
xn.displayName = "TableHeader";
const yn = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: D("[&_tr:last-child]:border-0", t), ...n }));
yn.displayName = "TableBody";
const pD = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("tfoot", { ref: a, className: D("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t), ...n }));
pD.displayName = "TableFooter";
const Ke = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("tr", { ref: a, className: D("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t), ...n }));
Ke.displayName = "TableRow";
const Ge = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("th", { ref: a, className: D("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...n }));
Ge.displayName = "TableHead";
const Ae = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("td", { ref: a, className: D("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...n }));
Ae.displayName = "TableCell";
const hD = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("caption", { ref: a, className: D("mt-4 text-sm text-muted-foreground", t), ...n }));
hD.displayName = "TableCaption";
function Ct(t) {
  const n = ge(null), [, a] = g({});
  return n.current || (n.current = new gD(t)), M(() => n.current.subscribe(() => {
    a({});
  }), []), {
    getUserDisplayName: (o, r) => n.current.getUserDisplayName(o, r),
    prefetchUsers: (o) => n.current.prefetchUsers(o),
    isUserFetching: (o) => n.current.isUserFetching(o),
    isUserCached: (o) => n.current.isUserCached(o),
    getCachedUserName: (o) => n.current.getCachedUserName(o),
    clearCache: () => n.current.clearCache(),
    getCacheStats: () => n.current.getCacheStats()
  };
}
class gD {
  userCache = /* @__PURE__ */ new Map();
  fetchingUsers = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Set();
  client;
  constructor(n) {
    this.client = n;
  }
  subscribe(n) {
    return this.listeners.add(n), () => {
      this.listeners.delete(n);
    };
  }
  notifyListeners() {
    this.listeners.forEach((n) => n());
  }
  getUserDisplayName(n, a) {
    if (!n)
      return "Unknown User";
    const [o, r] = n.split(":");
    return r ? o === "user" ? this.userCache.has(n) ? this.userCache.get(n) : (this.fetchingUsers.has(n) || this.fetchUserName(n), "Loading...") : o === "system" ? "System" : o === "service_account" ? a ?? "Service Account" : o === "apikey" ? `API Key (${r})` : o === "agent:agent" ? `Agent (${r})` : "Unknown User" : "Unknown User";
  }
  async fetchUserName(n) {
    const [a, o] = n.split(":");
    if (!(a !== "user" || !o) && !(this.userCache.has(n) || this.fetchingUsers.has(n))) {
      this.fetchingUsers.add(n);
      try {
        const s = (await this.client.users.retrieve(o))?.name || "Unknown User";
        this.userCache.set(n, s), this.notifyListeners();
      } catch {
        this.userCache.set(n, "Unknown User"), this.notifyListeners();
      } finally {
        this.fetchingUsers.delete(n);
      }
    }
  }
  async prefetchUsers(n) {
    const a = new Set(
      n.filter((r) => {
        const [s] = r.split(":");
        return s === "user" && !this.userCache.has(r) && !this.fetchingUsers.has(r);
      })
    ), o = Array.from(a).map((r) => this.fetchUserName(r));
    await Promise.allSettled(o);
  }
  isUserFetching(n) {
    return this.fetchingUsers.has(n);
  }
  isUserCached(n) {
    return this.userCache.has(n);
  }
  getCachedUserName(n) {
    return this.userCache.get(n) || null;
  }
  clearCache() {
    this.userCache.clear(), this.fetchingUsers.clear(), this.notifyListeners();
  }
  getCacheStats() {
    return {
      cachedUsers: this.userCache.size,
      fetchingUsers: this.fetchingUsers.size,
      totalRequests: this.userCache.size + this.fetchingUsers.size
    };
  }
}
function aa(t) {
  return `${t.toLocaleDateString()} ${t.toLocaleTimeString()}`;
}
function qt(t) {
  const n = new Date(t), a = /* @__PURE__ */ new Date(), o = new Date(n.getFullYear(), n.getMonth(), n.getDate()), r = new Date(a.getFullYear(), a.getMonth(), a.getDate()), s = Math.floor((r.getTime() - o.getTime()) / 864e5);
  return s === 0 ? "Today" : s === 1 ? "Yesterday" : s < 7 ? `${s} days ago` : n.toLocaleDateString();
}
function fD(t) {
  if (!t)
    return { iconName: null, cleanDescription: "" };
  const n = /^\[icon:([A-Za-z0-9]+)\]\s*/, a = t.match(n);
  return a ? {
    iconName: a[1],
    cleanDescription: t.replace(n, "").trimStart()
  } : { iconName: null, cleanDescription: t };
}
function Yn({ title: t, value: n, icon: a, description: o, animateIcon: r }) {
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { className: "flex flex-row items-center justify-between pb-2", children: [
      /* @__PURE__ */ e(ke, { className: "text-sm font-medium", children: t }),
      /* @__PURE__ */ e(a, { className: D("h-4 w-4 text-muted-foreground", r && "animate-spin") })
    ] }),
    /* @__PURE__ */ i(Ce, { children: [
      /* @__PURE__ */ e("div", { className: "text-2xl font-bold", children: n }),
      o && /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o })
    ] })
  ] });
}
function bD({ execution: t, getUserDisplayName: n, onClick: a }) {
  const { t: o } = K(["agents", "common"]), { collection: r, status: s } = t, l = ce(() => {
    switch (s) {
      case "completed":
        return /* @__PURE__ */ i(ve, { className: "bg-success-background text-success", children: [
          /* @__PURE__ */ e($i, { className: "h-3 w-3 mr-1" }),
          o("agents:dashboard.statusCompleted")
        ] });
      case "failed":
        return /* @__PURE__ */ i(ve, { className: "bg-destructive-background text-destructive", children: [
          /* @__PURE__ */ e(co, { className: "h-3 w-3 mr-1" }),
          o("agents:dashboard.statusFailed")
        ] });
      case "running":
        return /* @__PURE__ */ i(ve, { className: "bg-info-background text-info", children: [
          /* @__PURE__ */ e(fe, { className: "h-3 w-3 mr-1 animate-spin" }),
          o("agents:dashboard.statusRunning")
        ] });
      default:
        return /* @__PURE__ */ e(ve, { variant: "secondary", children: o("agents:dashboard.statusUnknown") });
    }
  }, [s, o]);
  return /* @__PURE__ */ i(Ke, { className: "cursor-pointer", onClick: a, children: [
    /* @__PURE__ */ e(Ae, { className: "font-medium truncate max-w-[200px]", children: r.name }),
    /* @__PURE__ */ e(Ae, { className: "hidden md:table-cell truncate max-w-[300px] text-muted-foreground", children: r.description || "—" }),
    /* @__PURE__ */ e(Ae, { children: l }),
    /* @__PURE__ */ e(Ae, { className: "truncate max-w-[150px]", children: n(r.created_by, void 0) }),
    /* @__PURE__ */ e(Ae, { className: "text-muted-foreground whitespace-nowrap", children: aa(new Date(r.created_at)) })
  ] });
}
function vD() {
  const { t } = K(["agents", "common"]), { client: n, isLoading: a } = de(), o = Fe(), r = et(), s = Mn("id"), { getUserDisplayName: l } = Ct(n), d = o?.settings?.EXECUTION_CONTAINER || void 0, [c, u] = g(null), [m, f] = g(!0), [p, h] = g(!1), { iconName: b, cleanDescription: C } = ce(() => fD(c?.description), [c?.description]), y = ce(() => b && b in xt ? xt[b] : Pt, [b]);
  M(() => {
    !n || a || !s || (f(!0), n.interactions.retrieve(s).then((_) => {
      u(_);
    }).catch((_) => {
      _.status === 404 && h(!0);
    }).finally(() => {
      f(!1);
    }));
  }, [n, a, s]);
  const v = 20, [x, N] = g([]), [w, A] = g(!1), [S, I] = g(!1), [L, V] = g(!0), G = ge(0), R = ge(null), [j, O] = g(/* @__PURE__ */ new Map()), Q = J(async (_) => {
    if (!n || _.length === 0)
      return;
    const q = _.map(async (T) => {
      const X = T.properties || {}, U = X.run_id, E = X.workflow_id;
      if (!U || !E)
        return { id: T.id, status: "unknown" };
      try {
        const H = await n.workflows.getRunDetails(U, E);
        return H.status === "FAILED" ? { id: T.id, status: "failed" } : H.status === "COMPLETED" ? { id: T.id, status: "completed" } : { id: T.id, status: "running" };
      } catch {
        return { id: T.id, status: "unknown" };
      }
    }), $ = await Promise.allSettled(q);
    O((T) => {
      const X = new Map(T);
      for (const U of $)
        U.status === "fulfilled" && X.set(U.value.id, U.value.status);
      return X;
    });
  }, [n]), ee = J(async (_, q) => {
    if (!(!n || !d || !c)) {
      q ? A(!0) : I(!0);
      try {
        const $ = await n.store.collections.search({
          type: d,
          limit: v,
          offset: _,
          match: { "properties.interaction": c.name }
        });
        N(q ? $ : (T) => [...T, ...$]), V($.length >= v), G.current = _ + $.length, Q($);
      } finally {
        q ? A(!1) : I(!1);
      }
    }
  }, [n, d, c, Q]);
  M(() => {
    c && (G.current = 0, N([]), O(/* @__PURE__ */ new Map()), V(!0), ee(0, !0));
  }, [c, ee]), M(() => {
    const _ = R.current;
    if (!_ || !L || w)
      return;
    const q = new IntersectionObserver(
      ($) => {
        $[0].isIntersecting && L && !S && !w && ee(G.current, !1);
      },
      { threshold: 0.1 }
    );
    return q.observe(_), () => q.disconnect();
  }, [L, S, w, ee]);
  const te = ce(() => x.map((_) => ({
    collection: _,
    status: j.get(_.id) || "unknown"
  })), [x, j]), k = ce(() => {
    const _ = te.length, q = te.filter((X) => X.status === "completed").length, $ = te.filter((X) => X.status === "failed").length, T = te.filter((X) => X.status === "running").length;
    return { total: _, completed: q, failed: $, running: T };
  }, [te]);
  return a || m ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : p ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-full gap-4", children: [
    /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-foreground", children: t("agents:dashboard.agentNotFound") }),
    /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: t("agents:dashboard.agentNotFoundDescription") }),
    /* @__PURE__ */ i(z, { onClick: () => r("/agents"), children: [
      /* @__PURE__ */ e(Va, {}),
      t("agents:execution.backToAgents")
    ] })
  ] }) : c ? /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full gap-6 px-4 pt-2 pb-4", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between flex-shrink-0", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(y, { className: "size-8 text-primary", strokeWidth: 2 }),
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-foreground", children: c.name }),
          /* @__PURE__ */ i(ve, { variant: "secondary", children: [
            "v",
            c.version
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: C || t("agents:execution.noDescription") })
      ] }),
      /* @__PURE__ */ i(z, { onClick: () => r(`/agents/${s}/create`), children: [
        /* @__PURE__ */ e(Oo, { className: "h-4 w-4" }),
        t("agents:execution.runAgent")
      ] })
    ] }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "grid gap-4 grid-cols-2 lg:grid-cols-4 flex-shrink-0", children: [
      /* @__PURE__ */ e(
        Yn,
        {
          title: t("agents:dashboard.totalExecutions"),
          value: k.total,
          icon: en,
          description: t("agents:dashboard.allTime")
        }
      ),
      /* @__PURE__ */ e(
        Yn,
        {
          title: t("agents:dashboard.successful"),
          value: k.completed,
          icon: $i,
          description: k.total > 0 ? `${Math.round(k.completed / k.total * 100)}% success rate` : void 0
        }
      ),
      /* @__PURE__ */ e(
        Yn,
        {
          title: t("agents:dashboard.failed"),
          value: k.failed,
          icon: co,
          description: k.total > 0 ? `${Math.round(k.failed / k.total * 100)}% failure rate` : void 0
        }
      ),
      /* @__PURE__ */ e(
        Yn,
        {
          title: t("agents:dashboard.running"),
          value: k.running,
          icon: fe,
          description: t("agents:dashboard.currentlyInProgress"),
          animateIcon: k.running > 0
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 flex-1 min-h-0", children: [
      /* @__PURE__ */ e("h2", { className: "text-lg font-semibold flex-shrink-0", children: t("agents:dashboard.executions") }),
      w && /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }),
      !w && te.length === 0 && /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ e(uo, { className: "h-10 w-10" }),
        /* @__PURE__ */ e("p", { children: t("agents:dashboard.noExecutionsYet") }),
        /* @__PURE__ */ i(z, { variant: "outline", onClick: () => r(`/agents/${s}/create`), children: [
          /* @__PURE__ */ e(Oo, { className: "h-4 w-4" }),
          t("agents:dashboard.runFirstExecution")
        ] })
      ] }),
      !w && te.length > 0 && /* @__PURE__ */ i("div", { className: "flex-1 min-h-0 border rounded-md overflow-y-auto", children: [
        /* @__PURE__ */ i("table", { className: "w-full caption-bottom text-sm table-fixed", children: [
          /* @__PURE__ */ e(xn, { className: "sticky top-0 z-10 bg-muted shadow-[inset_0_-1px_0_var(--border)]", children: /* @__PURE__ */ i(Ke, { children: [
            /* @__PURE__ */ e(Ge, { children: t("common:properties.name") }),
            /* @__PURE__ */ e(Ge, { className: "hidden md:table-cell", children: t("common:properties.description") }),
            /* @__PURE__ */ e(Ge, { children: t("common:properties.status") }),
            /* @__PURE__ */ e(Ge, { children: t("common:properties.createdBy") }),
            /* @__PURE__ */ e(Ge, { children: t("common:properties.createdAt") })
          ] }) }),
          /* @__PURE__ */ e(yn, { children: te.map((_) => /* @__PURE__ */ e(
            bD,
            {
              execution: _,
              getUserDisplayName: l,
              onClick: () => r(`/agents/executions/${_.collection.id}`)
            },
            _.collection.id
          )) })
        ] }),
        L && /* @__PURE__ */ e("div", { ref: R, className: "flex items-center justify-center py-4", children: S && /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) })
      ] })
    ] })
  ] }) : null;
}
function xD() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(vD, {}) });
}
const yD = 3;
function ND({ tags: t }) {
  const n = ge(null), [a, o] = g(t.length);
  Is(() => {
    const l = n.current;
    if (!l) return;
    const d = Array.from(l.querySelectorAll("[data-tag]"));
    if (d.length === 0) return;
    const c = l.getBoundingClientRect().right, u = 80;
    let m = 0;
    for (const f of d) {
      const p = f.getBoundingClientRect().right, b = m < t.length - 1 ? c - u : c;
      if (p <= b)
        m++;
      else
        break;
    }
    o(Math.max(1, Math.min(m, yD)));
  }, [t]);
  const r = t.slice(0, a), s = t.slice(a);
  return /* @__PURE__ */ i("div", { ref: n, className: "mt-3 flex flex-nowrap gap-2 overflow-hidden", children: [
    r.map((l) => /* @__PURE__ */ e(ve, { "data-tag": !0, className: "text-xs px-2 py-1 rounded-full whitespace-nowrap", children: l }, l)),
    s.length > 0 && /* @__PURE__ */ i(vo, { children: [
      /* @__PURE__ */ e(xo, { asChild: !0, children: /* @__PURE__ */ i(ve, { variant: "secondary", className: "text-xs px-2 py-1 rounded-full whitespace-nowrap cursor-default", children: [
        "+",
        s.length,
        " more"
      ] }) }),
      /* @__PURE__ */ e(Sa, { className: "bg-primary-foreground border p-2", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-1", children: s.map((l) => /* @__PURE__ */ e(ve, { className: "text-xs px-2 py-1 rounded-full whitespace-nowrap", children: l }, l)) }) })
    ] })
  ] });
}
function wD(t) {
  if (!t)
    return { iconName: null, cleanDescription: "No description available" };
  const n = /^\[icon:([A-Za-z0-9]+)\]\s*/, a = t.match(n);
  return a ? {
    iconName: a[1],
    cleanDescription: t.replace(n, "").trimStart()
  } : { iconName: null, cleanDescription: t };
}
function CD({ interaction: t, showTags: n = !1 }) {
  const a = et(), { iconName: o, cleanDescription: r } = ce(() => wD(t?.description), [t?.description]), s = ce(() => o && o in xt ? xt[o] : Pt, [o]);
  return /* @__PURE__ */ e(ye, { className: "h-48 hover:shadow-lg hover:bg-muted/50 transition-all cursor-pointer hover:border-primary/50", onClick: () => a(`/agents/${t.id}`), children: /* @__PURE__ */ i(Te, { className: "h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ e(s, { className: "size-6 text-primary flex-shrink-0" }),
      /* @__PURE__ */ e(ke, { className: "text-xl truncate", children: t.name }),
      /* @__PURE__ */ i(ve, { variant: "outline", className: "text-xs p-1 flex-shrink-0", children: [
        "v",
        t.version
      ] })
    ] }),
    /* @__PURE__ */ e(Ye, { className: "text-base line-clamp-3", children: r }),
    n && t.tags && t.tags.length > 0 && /* @__PURE__ */ e(ND, { tags: t.tags })
  ] }) });
}
const gt = $n.Root, ft = $n.Trigger, ut = ie.forwardRef(({ className: t, align: n = "center", sideOffset: a = 4, ...o }, r) => {
  const s = mn();
  return /* @__PURE__ */ e($n.Portal, { container: s, children: /* @__PURE__ */ e($n.Content, { ref: r, align: n, sideOffset: a, className: D("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t), ...o }) });
});
ut.displayName = $n.Content.displayName;
const SD = () => {
  const { client: t } = de();
  return { searchInteractions: async (a, o, r, s) => {
    const l = {
      status: ia.published,
      tags: ["agent", ...a],
      version: o
    };
    t.interactions.list({ query: l }).then((d) => {
      let c = d.filter((m) => !m.tags.includes("default")).filter((m) => !r.includes(m.id));
      const u = c.reduce((m, f) => {
        const p = f.endpoint;
        return m[p] || (m[p] = []), m[p].push(f), m;
      }, {});
      c = Object.values(u).map((m) => {
        const f = m.filter((p) => p.status === ia.published);
        return f.length > 0 ? f.reduce((p, h) => h.version > p.version ? h : p) : m.reduce((p, h) => h.version > p.version ? h : p);
      }), s(c);
    });
  } };
};
function AD() {
  const { t } = K(["agents", "common"]), { client: n, isLoading: a, user: o } = de(), { searchInteractions: r } = SD(), l = Fe()?.settings?.AGENT_INTERACTIONS_EXCLUDED_LIST ?? [], [d, c] = g(!1), [u, m] = g(void 0), [f, p] = g(""), [h, b] = g([]), [C, y] = g(0), [v, x] = g(void 0), [N, w] = g([]), [A, S] = g([]), [I, L] = g(""), [V, G] = g([]), R = ce(() => V.filter((k) => {
    const _ = k.name.toLowerCase().includes(I.toLowerCase()), q = A.length === 0 || A.every(($) => k.tags?.includes($));
    return _ && q;
  }), [V, I, A]), j = () => {
    c(!1), m(void 0), p(""), b([]), y(0), x(void 0);
  }, O = (k) => {
    k.stopPropagation();
    const _ = parseFloat(k.target.value);
    y(isNaN(_) ? 0 : _);
  }, Q = (k) => {
    k.stopPropagation(), k.key === "Enter" && (c(!1), x(C), y(0));
  }, ee = (k) => {
    k.stopPropagation(), k.key === "Enter" && f.trim() !== "" && (c(!1), b(
      f.split(",").map((_) => _.trim()).filter((_) => _ !== "")
    ));
  }, te = (k) => {
    A.includes(k) ? S(A.filter((_) => _ !== k)) : S([...A, k]);
  };
  return M(() => {
    d || (m(void 0), p(""), y(0));
  }, [d]), M(() => {
    !n || a || r(h, v, l, G);
  }, [n, a, h, v, l]), M(() => {
    if (R.length === 0) {
      w([]);
      return;
    }
    const k = [...new Set(R.flatMap((_) => _.tags || []))].sort();
    w(k.filter((_) => _ !== "assistant"));
  }, [R]), !a && !o ? null : /* @__PURE__ */ i("div", { className: "w-full h-full overflow-hidden flex flex-col p-2", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-6 flex-shrink-0", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center gap-6 flex-shrink-0", children: /* @__PURE__ */ i("div", { className: "flex flex-col w-full border border-border rounded-lg p-2 gap-2", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2 flex-1", children: [
        /* @__PURE__ */ e(be, { value: I, onChange: (k) => L(k.target.value), onClear: () => L(""), placeholder: t("agents:search.filterPlaceholder"), className: "flex-1 w-full border-none focus-visible:ring-0 focus:ring-0 focus:outline-none outline-none rounded-none shadow-none resize-none" }),
        (h.length === 0 || v === void 0) && /* @__PURE__ */ i(gt, { open: d, onOpenChange: c, children: [
          /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(z, { variant: "ghost", className: `transition group flex gap-1.5 ${d ? "bg-accent text-accent-foreground" : ""}`, children: [
            /* @__PURE__ */ e(Mi, {}),
            t("common:actions.filters")
          ] }) }),
          /* @__PURE__ */ e(ut, { className: `p-1 ${u === "tags" ? "w-[350px]" : u === "version" ? "w-[150px]" : "w-[100px]"}`, align: "end", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 text-start", children: [
            !u && /* @__PURE__ */ i(xe, { children: [
              h.length === 0 && /* @__PURE__ */ e(z, { variant: "ghost", className: "flex flex-row items-center justify-end", onClick: () => m("tags"), children: t("agents:search.tags") }),
              v === void 0 && /* @__PURE__ */ e(z, { variant: "ghost", className: "flex flex-row items-center justify-end", onClick: () => m("version"), children: t("agents:search.version") })
            ] }),
            u === "tags" && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 p-2", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ e("span", { className: "text-xs italic text-muted-foreground", children: t("agents:search.tagsPlaceholder") }) }),
              /* @__PURE__ */ e(be, { value: f, onChange: (k) => p(k.target.value), onKeyDown: ee, placeholder: t("agents:search.tagsHint"), className: "w-full resize-none" })
            ] }),
            u === "version" && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 p-2", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ e("span", { className: "text-xs italic text-muted-foreground", children: t("agents:search.versionPlaceholder") }) }),
              /* @__PURE__ */ e(be, { value: C, onChange: O, onKeyDown: Q, placeholder: t("agents:search.versionHint"), type: "number", className: "w-full resize-none" })
            ] })
          ] }) })
        ] }),
        h.length !== 0 && v !== void 0 && /* @__PURE__ */ e(z, { variant: "ghost", onClick: j, children: /* @__PURE__ */ e(qa, {}) })
      ] }),
      (h.length > 0 || v !== void 0) && /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-4", children: [
        h.length > 0 && /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-0.5", children: [
          /* @__PURE__ */ e(z, { variant: "ghost", className: "text-xs bg-muted rounded-r-none rounded-l-sm h-7 w-10", children: t("agents:search.tags") }),
          h.map((k, _) => /* @__PURE__ */ e(z, { variant: "ghost", className: "text-xs bg-muted rounded-r-none rounded-l-none h-7", onClick: () => b(h.filter((q) => q !== k)), children: k }, _)),
          /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", className: "bg-muted rounded-l-none rounded-r-sm size-7", onClick: () => b([]), children: /* @__PURE__ */ e(De, {}) })
        ] }),
        v !== void 0 && /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-0.5", children: [
          /* @__PURE__ */ e(z, { variant: "ghost", className: "text-xs bg-muted rounded-r-none rounded-l-sm h-7 w-14", children: t("agents:search.version") }),
          /* @__PURE__ */ e(z, { variant: "ghost", className: "text-xs bg-muted rounded-r-none rounded-l-none h-7", children: v }),
          /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", className: "bg-muted rounded-l-none rounded-r-sm size-7", onClick: () => x(void 0), children: /* @__PURE__ */ e(De, {}) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-row gap-2 items-center py-2 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: N.map((k, _) => /* @__PURE__ */ e(ve, { onClick: () => te(k), variant: A.includes(k) ? "default" : "secondary", className: "p-2 text-xs cursor-pointer hover:bg-accent transition-colors duration-200 whitespace-nowrap flex-shrink-0", children: k }, _)) }),
    /* @__PURE__ */ e("div", { className: "flex-1 min-h-0 overflow-y-auto pb-4", children: R.length ? /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: R.map((k) => /* @__PURE__ */ e(CD, { interaction: k, showTags: !0 }, k.id)) }) : /* @__PURE__ */ i("div", { className: "h-full w-full flex items-center justify-center flex flex-col gap-1", children: [
      /* @__PURE__ */ e("span", { className: "text-xl", children: t("agents:search.noServicesAvailable") }),
      h.length || v ? /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e("span", { className: "text-xl text-muted-foreground", children: t("agents:search.noServicesHint") }),
        /* @__PURE__ */ i(z, { onClick: j, children: [
          /* @__PURE__ */ e(qa, {}),
          t("common:actions.clearFilters")
        ] })
      ] }) : /* @__PURE__ */ e("span", { className: "text-xl text-muted-foreground", children: t("agents:search.contactAdmin") })
    ] }) })
  ] });
}
function DD() {
  const t = et();
  return M(() => {
    t("/agents/browse", { replace: !0 });
  }, [t]), null;
}
function TD() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(AD, {}) });
}
function ID({ isOpen: t, onClose: n, onSuccess: a, collection: o, category: r }) {
  const { client: s, user: l } = de(), d = Ie(), c = !!o, [u, m] = g(1), [f, p] = g("forward"), [h, b] = g(""), [C, y] = g(""), [v, x] = g(""), [N, w] = g(!1), [A, S] = g([]), [I, L] = g([]), [V, G] = g(!1), [R, j] = g([]), [O, Q] = g([]), [ee, te] = g(/* @__PURE__ */ new Set()), [k, _] = g(!1), [q, $] = g("documents"), [T, X] = g(""), [U, E] = g(""), [H, P] = g([]), [B, W] = g([]), [le, me] = g(!1);
  M(() => {
    !s || !t || r !== "organization" || (G(!0), s.iam.groups.list().then((Z) => {
      S(Z);
    }).catch(() => {
      S([]);
    }).finally(() => {
      G(!1);
    }));
  }, [s, t, r]), M(() => {
    const Z = setTimeout(() => {
      E(T);
    }, 300);
    return () => clearTimeout(Z);
  }, [T]), M(() => {
    if (!(!s || !t))
      if (me(!0), q === "documents") {
        const Z = {};
        U.trim() && (Z.name = U.trim()), s.objects.find({ query: Z, limit: 50 }).then((oe) => {
          P(oe);
        }).catch(() => {
          P([]);
        }).finally(() => {
          me(!1);
        });
      } else {
        const Z = { dynamic: !1 };
        U.trim() && (Z.name = U.trim()), s.store.collections.search(Z).then((oe) => {
          W(oe.filter((Y) => Y.id !== o?.id));
        }).catch(() => {
          W([]);
        }).finally(() => {
          me(!1);
        });
      }
  }, [s, t, U, q, o?.id]), M(() => {
    t && c && s && (_(!0), Promise.all([
      s.store.collections.searchMembers(o.id, { limit: 1e3 }),
      s.store.collections.searchChildren(o.id, { limit: 1e3 })
    ]).then(([Z, oe]) => {
      const Y = [
        ...Z.results.map((F) => ({
          id: F.id,
          name: F.name || F.id,
          type: "document"
        })),
        ...oe.map((F) => ({
          id: F.id,
          name: F.name,
          type: "collection"
        }))
      ];
      j(Y);
    }).catch((Z) => {
      d({
        status: "error",
        title: "Failed to load members",
        description: Z.message || "An error occurred",
        duration: 3e3
      });
    }).finally(() => {
      _(!1);
    }));
  }, [t, c, o, s, d]), M(() => {
    t && c ? (b(o.name || ""), y(o.description || ""), x(o.type?.id || "")) : t || (m(1), p("forward"), b(""), y(""), x(""), L([]), j([]), Q([]), te(/* @__PURE__ */ new Set()), X(""), E(""), $("documents"), P([]), W([]));
  }, [t, c, o]);
  const ze = ce(() => {
    if (q === "documents") {
      const Z = /* @__PURE__ */ new Set([
        ...R.filter((oe) => oe.type === "document").map((oe) => oe.id),
        ...O.filter((oe) => oe.type === "document").map((oe) => oe.id)
      ]);
      return H.filter((oe) => !Z.has(oe.id));
    } else {
      const Z = /* @__PURE__ */ new Set([
        ...R.filter((oe) => oe.type === "collection").map((oe) => oe.id),
        ...O.filter((oe) => oe.type === "collection").map((oe) => oe.id)
      ]);
      return B.filter((oe) => !Z.has(oe.id));
    }
  }, [q, H, B, R, O]), Pe = ce(() => [...R.filter((oe) => !ee.has(oe.id)), ...O], [R, ee, O]), Ue = J((Z) => {
    const oe = "root" in Z || !("name" in Z && "type" in Z), Y = {
      id: Z.id,
      name: Z.name || Z.name || Z.id,
      type: oe ? "document" : "collection"
    };
    Y.type = q === "documents" ? "document" : "collection", Q((F) => [...F, Y]);
  }, [q]), re = J((Z) => {
    O.some((oe) => oe.id === Z.id) ? Q((oe) => oe.filter((Y) => Y.id !== Z.id)) : te((oe) => /* @__PURE__ */ new Set([...oe, Z.id]));
  }, [O]), Ne = J((Z) => {
    p(Z > u ? "forward" : "backward"), m(Z);
  }, [u]), we = J(() => {
    u < 3 && (p("forward"), m((Z) => Z + 1));
  }, [u]), Le = J(() => {
    u > 1 && (p("backward"), m((Z) => Z - 1));
  }, [u]), nt = ce(() => u === 1 ? h.trim().length > 0 : !0, [u, h]);
  return {
    // Step navigation
    currentStep: u,
    direction: f,
    goToStep: Ne,
    goNext: we,
    goBack: Le,
    canProceed: nt,
    // Form state
    name: h,
    setName: b,
    description: C,
    setDescription: y,
    typeId: v,
    setTypeId: x,
    isEditMode: c,
    // Groups (for "organization" category)
    availableGroups: A,
    selectedGroups: I,
    setSelectedGroups: L,
    isLoadingGroups: V,
    // Members
    currentMembers: Pe,
    membersToAdd: O,
    isLoadingMembers: k,
    handleAddMember: Ue,
    handleRemoveMember: re,
    // Search
    searchMode: q,
    setSearchMode: $,
    searchQuery: T,
    setSearchQuery: X,
    filteredSearchResults: ze,
    isSearching: le,
    // Submit
    isSubmitting: N,
    handleSubmit: async () => {
      if (!(!s || !h.trim())) {
        w(!0);
        try {
          let Z;
          if (c) {
            const F = {
              name: h.trim()
            };
            v && (F.type = v), F.description = C.trim() || "", await s.store.collections.update(o.id, F), Z = o.id;
          } else {
            const F = {};
            C.trim() && (F.description = C.trim()), r === "personal" && l?.sub && (F.user = l.sub);
            const ue = {
              name: h.trim(),
              dynamic: !1,
              ...v && { type: v },
              ...Object.keys(F).length > 0 && { properties: F }
            };
            Z = (await s.store.collections.create(ue)).id;
            const je = [];
            if (l?.sub && je.push(`user:${l.sub}`), r === "organization" && I.length > 0 && je.push(...I.map((rt) => `group:${rt}`)), je.length > 0) {
              const rt = {
                "content:read": je,
                "content:write": je,
                "content:delete": je
              };
              await s.store.collections.updatePermissions(Z, rt);
            }
          }
          const oe = O.filter((F) => F.type === "document").map((F) => F.id), Y = O.filter((F) => F.type === "collection").map((F) => F.id);
          if (oe.length > 0 && await s.store.collections.addMembers(Z, oe), Y.length > 0 && await s.store.collections.addChildren(Z, Y), c && ee.size > 0) {
            const F = R.filter((he) => he.type === "document" && ee.has(he.id)).map((he) => he.id), ue = R.filter((he) => he.type === "collection" && ee.has(he.id)).map((he) => he.id);
            F.length > 0 && await s.store.collections.deleteMembers(Z, F), ue.length > 0 && await s.store.collections.deleteChildren(Z, ue);
          }
          d({
            status: "success",
            title: c ? "Collection updated" : "Collection created",
            description: `"${h}" has been ${c ? "updated" : "created"} successfully`,
            duration: 2e3
          }), a?.(), n();
        } catch (Z) {
          const oe = Z instanceof Error ? Z.message : "An error occurred";
          d({
            status: "error",
            title: c ? "Failed to update collection" : "Failed to create collection",
            description: oe,
            duration: 3e3
          });
        } finally {
          w(!1);
        }
      }
    }
  };
}
function PD({
  currentStep: t,
  totalSteps: n,
  stepLabels: a = ["Details", "Members", "Review"]
}) {
  return /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-2 py-4", children: Array.from({ length: n }, (o, r) => {
    const s = r + 1, l = s < t, d = s === t;
    return /* @__PURE__ */ e(
      kD,
      {
        step: s,
        label: a[r],
        isCompleted: l,
        isCurrent: d,
        isLast: s === n
      },
      s
    );
  }) });
}
function kD({ step: t, label: n, isCompleted: a, isCurrent: o, isLast: r }) {
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: D(
            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
            a && "bg-primary text-primary-foreground",
            o && "bg-primary text-primary-foreground ring-2 ring-primary/20 ring-offset-2",
            !a && !o && "bg-muted text-muted-foreground"
          ),
          children: a ? /* @__PURE__ */ e(Me, { className: "h-4 w-4" }) : t
        }
      ),
      /* @__PURE__ */ e(
        "span",
        {
          className: D(
            "text-xs transition-colors",
            (a || o) && "text-foreground font-medium",
            !a && !o && "text-muted-foreground"
          ),
          children: n
        }
      )
    ] }),
    !r && /* @__PURE__ */ e(
      "div",
      {
        className: D(
          "h-0.5 w-12 transition-colors -mt-5",
          a ? "bg-primary" : "bg-muted"
        )
      }
    )
  ] });
}
const Wn = We.Root, _D = We.Portal, _r = ga(({ className: t, ...n }, a) => /* @__PURE__ */ e("div", { ref: a, className: D("fixed inset-0 z-40 bg-black/80 pointer-events-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t), ...n }));
_r.displayName = "DialogOverlay";
const Nn = ga(({ className: t, children: n, ...a }, o) => {
  const r = mn();
  return /* @__PURE__ */ i(_D, { container: r, children: [
    /* @__PURE__ */ e(_r, {}),
    /* @__PURE__ */ i(We.Content, { ref: o, className: D("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-secondary p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", t), ...a, children: [
      n,
      /* @__PURE__ */ i(We.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
        /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] });
});
Nn.displayName = We.Content.displayName;
const wn = ({ className: t, ...n }) => /* @__PURE__ */ e("div", { className: D("flex flex-col space-y-1.5 text-center sm:text-left", t), ...n });
wn.displayName = "DialogHeader";
const Un = ({ className: t, ...n }) => /* @__PURE__ */ e("div", { className: D("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...n });
Un.displayName = "DialogFooter";
const Cn = ga(({ className: t, ...n }, a) => /* @__PURE__ */ e(We.Title, { ref: a, className: D("text-lg font-semibold leading-none tracking-tight", t), ...n }));
Cn.displayName = We.Title.displayName;
const Ao = ga(({ className: t, ...n }, a) => /* @__PURE__ */ e(We.Description, { ref: a, className: D("text-sm text-muted-foreground", t), ...n }));
Ao.displayName = We.Description.displayName;
const Kt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(
  ot,
  {
    ref: a,
    className: D(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...n
  }
));
Kt.displayName = ot.displayName;
const Yt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ i("div", { className: "flex items-center border-b p-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ e(vt, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ e(
    ot.Input,
    {
      ref: a,
      className: D(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...n
    }
  )
] }));
Yt.displayName = ot.Input.displayName;
const Xt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(
  ot.List,
  {
    ref: a,
    className: D("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...n
  }
));
Xt.displayName = ot.List.displayName;
const Qt = ie.forwardRef((t, n) => /* @__PURE__ */ e(
  ot.Empty,
  {
    ref: n,
    className: "py-6 text-center text-sm",
    ...t
  }
));
Qt.displayName = ot.Empty.displayName;
const kt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(
  ot.Group,
  {
    ref: a,
    className: D(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...n
  }
));
kt.displayName = ot.Group.displayName;
const Er = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(
  ot.Separator,
  {
    ref: a,
    className: D("-mx-1 h-px bg-border", t),
    ...n
  }
));
Er.displayName = ot.Separator.displayName;
const yt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(
  ot.Item,
  {
    ref: a,
    className: D(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer",
      t
    ),
    ...n
  }
));
yt.displayName = ot.Item.displayName;
function Aa({
  value: t,
  onChange: n,
  placeholder: a,
  disabled: o = !1,
  allowEmpty: r = !0,
  emptyLabel: s,
  allowedTypes: l,
  refreshKey: d
}) {
  const { t: c } = K("common"), u = a ?? c("inputs.selectType"), m = s ?? c("inputs.none"), { client: f } = de(), { registry: p } = tt(), [h, b] = g([]), [C, y] = g(!0), [v, x] = g(!1), [N, w] = g("");
  M(() => {
    if (!f) return;
    (async () => {
      y(!0);
      try {
        const G = (await f.types.list()).map((R) => {
          const j = R;
          return {
            id: j.id,
            name: p?.getTypeName(j.id) || j.name || j.id
          };
        });
        G.sort((R, j) => R.name.localeCompare(j.name)), b(G);
      } catch (V) {
        console.error("Failed to fetch types:", V), b([]);
      } finally {
        y(!1);
      }
    })();
  }, [f, p, d]);
  const A = ce(() => !l || l.length === 0 ? h : h.filter((L) => l.includes(L.id)), [h, l]), S = ce(() => A.find((L) => L.id === t), [A, t]), I = (L) => {
    n(L === "__none__" ? "" : L), x(!1), w("");
  };
  return C ? /* @__PURE__ */ e("div", { className: "flex h-9 w-full items-center justify-center rounded-md border border-input bg-popover px-3 py-2", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ i(gt, { open: v, onOpenChange: x, children: [
    /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(
      z,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between font-normal bg-popover",
        disabled: o,
        children: [
          S ? S.name : t || u,
          /* @__PURE__ */ e(Ut, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(ut, { className: "p-0", align: "start", style: { width: "var(--radix-popover-trigger-width)" }, children: /* @__PURE__ */ i(Kt, { children: [
      /* @__PURE__ */ e(
        Yt,
        {
          placeholder: c("inputs.searchTypes"),
          value: N,
          onValueChange: w
        }
      ),
      /* @__PURE__ */ i(Xt, { children: [
        /* @__PURE__ */ e(Qt, { children: c("inputs.noTypeFound") }),
        /* @__PURE__ */ i(kt, { children: [
          r && /* @__PURE__ */ i(
            yt,
            {
              value: "__none__",
              onSelect: () => I("__none__"),
              children: [
                /* @__PURE__ */ e(
                  Me,
                  {
                    className: D(
                      "mr-2 h-4 w-4",
                      t ? "opacity-0" : "opacity-100"
                    )
                  }
                ),
                m
              ]
            }
          ),
          A.map((L) => /* @__PURE__ */ i(
            yt,
            {
              value: L.name,
              onSelect: () => I(L.id),
              children: [
                /* @__PURE__ */ e(
                  Me,
                  {
                    className: D(
                      "mr-2 h-4 w-4",
                      t === L.id ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                L.name
              ]
            },
            L.id
          ))
        ] })
      ] })
    ] }) })
  ] });
}
const Xe = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(Ua.Root, { ref: a, className: D("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t), ...n, children: /* @__PURE__ */ e(Ua.Indicator, { className: D("flex items-center justify-center text-current"), children: /* @__PURE__ */ e(Me, { className: "h-4 w-4" }) }) }));
Xe.displayName = Ua.Root.displayName;
const ED = hn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), ne = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(Qi.Root, { ref: a, className: D(ED(), t), ...n }));
ne.displayName = Qi.Root.displayName;
const Nt = ie.forwardRef(({ className: t, children: n, ...a }, o) => /* @__PURE__ */ i(Ot.Root, { ref: o, className: D("relative overflow-hidden", t), ...a, children: [
  /* @__PURE__ */ e(Ot.Viewport, { className: "h-full w-full rounded-[inherit]", children: n }),
  /* @__PURE__ */ e(zr, {}),
  /* @__PURE__ */ e(Ot.Corner, {})
] }));
Nt.displayName = Ot.Root.displayName;
const zr = ie.forwardRef(({ className: t, orientation: n = "vertical", ...a }, o) => /* @__PURE__ */ e(Ot.ScrollAreaScrollbar, { ref: o, orientation: n, className: D("flex touch-none select-none transition-colors", n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t), ...a, children: /* @__PURE__ */ e(Ot.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
zr.displayName = Ot.ScrollAreaScrollbar.displayName;
const pt = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e("textarea", { className: D("flex min-h-[60px] w-full rounded-md border border-input bg-popover px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: a, ...n }));
pt.displayName = "Textarea";
function Do(t) {
  const a = Fe()?.settings?.[t];
  return ce(() => {
    if (!(!a || !Array.isArray(a) || a.length === 0))
      return a;
  }, [a]);
}
function To() {
  return Do("COLLECTION_TYPES_WHITELIST");
}
function zD({
  name: t,
  setName: n,
  description: a,
  setDescription: o,
  typeId: r,
  setTypeId: s,
  disabled: l = !1,
  category: d,
  selectedGroups: c = [],
  setSelectedGroups: u,
  availableGroups: m = [],
  isLoadingGroups: f = !1
}) {
  const { t: p } = K("common"), h = To(), b = (C, y) => {
    u && u(y ? [...c, C] : c.filter((v) => v !== C));
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { htmlFor: "collection-name", children: p("collectionWizard.nameLabel") }),
      /* @__PURE__ */ e(
        be,
        {
          id: "collection-name",
          placeholder: p("collectionWizard.enterName"),
          value: t,
          onChange: (C) => n(C.target.value),
          disabled: l,
          autoFocus: !0
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { htmlFor: "collection-description", children: p("collectionWizard.descriptionLabel") }),
      /* @__PURE__ */ e(
        pt,
        {
          id: "collection-description",
          placeholder: p("collectionWizard.enterDescription"),
          value: a,
          onChange: (C) => o(C.target.value),
          disabled: l,
          rows: 3
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { children: p("collectionWizard.typeLabel") }),
      /* @__PURE__ */ e(
        Aa,
        {
          value: r,
          onChange: s,
          placeholder: p("collectionWizard.selectType"),
          disabled: l,
          allowedTypes: h
        }
      )
    ] }),
    d === "organization" && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { children: p("collectionWizard.groupsLabel") }),
      f ? /* @__PURE__ */ i("div", { className: "flex items-center gap-2 py-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin" }),
        p("collectionWizard.loadingGroups")
      ] }) : m.length === 0 ? /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground py-2", children: p("collectionWizard.noGroupsAvailable") }) : /* @__PURE__ */ e(Nt, { className: "max-h-[160px] border rounded-md", children: /* @__PURE__ */ e("div", { className: "p-2 flex flex-col gap-1", children: m.map((C) => /* @__PURE__ */ i(
        "label",
        {
          className: "flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer",
          children: [
            /* @__PURE__ */ e(
              Xe,
              {
                checked: c.includes(C.id),
                onCheckedChange: (y) => b(C.id, !!y),
                disabled: l
              }
            ),
            /* @__PURE__ */ i("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ e("span", { className: "text-sm font-medium truncate", children: C.name }),
              C.description && /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground truncate", children: C.description })
            ] })
          ]
        },
        C.id
      )) }) })
    ] })
  ] });
}
const FD = hn("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
    },
    size: {
      default: "h-9 px-2 min-w-9",
      sm: "h-8 px-1.5 min-w-8",
      lg: "h-10 px-2.5 min-w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), Fr = ie.createContext({
  size: "default",
  variant: "default"
});
function Da({ className: t, variant: n, size: a, children: o, ...r }) {
  return /* @__PURE__ */ e(Zi.Root, { "data-slot": "toggle-group", "data-variant": n, "data-size": a, className: D("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", t), ...r, children: /* @__PURE__ */ e(Fr.Provider, { value: { variant: n, size: a }, children: o }) });
}
function _t({ className: t, children: n, variant: a, size: o, ...r }) {
  const s = ie.useContext(Fr);
  return /* @__PURE__ */ e(
    Zi.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || a,
      "data-size": s.size || o,
      className: D(
        FD({
          variant: s.variant || a,
          size: s.size || o
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-sm last:rounded-r-sm focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l hover:cursor-pointer hover:text-gray-500",
        t
      ),
      ...r,
      children: n
    }
  );
}
function LD({ member: t, isNew: n, onRemove: a, disabled: o }) {
  const { t: r } = K("common");
  return /* @__PURE__ */ i(
    bt.div,
    {
      layout: !0,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      className: "flex items-center justify-between p-2 rounded-md hover:bg-muted/50 group",
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          t.type === "document" ? /* @__PURE__ */ e(Je, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ e(st, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-sm truncate", children: t.name }),
          n && /* @__PURE__ */ e("span", { className: "text-xs text-primary font-medium flex-shrink-0", children: r("collectionWizard.newMemberLabel") })
        ] }),
        /* @__PURE__ */ e(
          z,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
            onClick: () => a(t),
            disabled: o,
            children: /* @__PURE__ */ e(De, { className: "h-4 w-4 text-muted-foreground hover:text-destructive" })
          }
        )
      ]
    }
  );
}
function RD({ item: t, type: n, onSelect: a }) {
  const o = t.name || t.name || t.id;
  return /* @__PURE__ */ i(
    yt,
    {
      value: t.id,
      onSelect: () => a(t),
      className: "flex items-center justify-between",
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          n === "document" ? /* @__PURE__ */ e(Je, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ e(st, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ e("span", { className: "truncate", children: o })
        ] }),
        /* @__PURE__ */ e(jn, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })
      ]
    }
  );
}
function $D({
  searchMode: t,
  setSearchMode: n,
  searchQuery: a,
  setSearchQuery: o,
  filteredSearchResults: r,
  isSearching: s,
  currentMembers: l,
  membersToAdd: d,
  isLoadingMembers: c,
  handleAddMember: u,
  handleRemoveMember: m,
  disabled: f = !1
}) {
  const { t: p } = K("common");
  return /* @__PURE__ */ i("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-3 min-h-0", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between h-9", children: [
        /* @__PURE__ */ e(ne, { className: "text-base font-medium", children: p("collectionWizard.searchItems") }),
        /* @__PURE__ */ i(
          Da,
          {
            type: "single",
            value: t,
            onValueChange: (h) => h && n(h),
            variant: "outline",
            children: [
              /* @__PURE__ */ i(_t, { value: "documents", "aria-label": p("collectionWizard.searchDocuments"), children: [
                /* @__PURE__ */ e(Je, { className: "h-4 w-4" }),
                p("documents")
              ] }),
              /* @__PURE__ */ i(_t, { value: "collections", "aria-label": p("collectionWizard.searchCollections"), children: [
                /* @__PURE__ */ e(st, { className: "h-4 w-4" }),
                p("collections")
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i(Kt, { className: "border rounded-md flex-1 flex flex-col min-h-0", shouldFilter: !1, children: [
        /* @__PURE__ */ e(
          Yt,
          {
            placeholder: p(t === "documents" ? "collectionWizard.searchDocuments" : "collectionWizard.searchCollections"),
            value: a,
            onValueChange: o,
            disabled: f
          }
        ),
        /* @__PURE__ */ e(Xt, { className: "flex-1 max-h-none", children: s ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ i(xe, { children: [
          /* @__PURE__ */ e(Qt, { children: p(a ? t === "documents" ? "collectionWizard.noDocumentsFound" : "collectionWizard.noCollectionsFound" : t === "documents" ? "collectionWizard.typeToSearchDocuments" : "collectionWizard.typeToSearchCollections") }),
          /* @__PURE__ */ e(kt, { children: r.map((h) => /* @__PURE__ */ e(
            RD,
            {
              item: h,
              type: t === "documents" ? "document" : "collection",
              onSelect: u
            },
            h.id
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground h-4", children: p("collectionWizard.clickToAdd") })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-3 min-h-0", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between h-9", children: [
        /* @__PURE__ */ e(ne, { className: "text-base font-medium", children: p("collectionWizard.addedMembers") }),
        /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: p("collectionWizard.itemCount", { count: l.length }) })
      ] }),
      c ? /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center border rounded-md", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : l.length === 0 ? /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center border rounded-md", children: /* @__PURE__ */ i("p", { className: "text-sm text-muted-foreground text-center px-4", children: [
        p("collectionWizard.noMembersAdded"),
        /* @__PURE__ */ e("br", {}),
        p("collectionWizard.searchAndClick")
      ] }) }) : /* @__PURE__ */ e(Nt, { className: "flex-1 border rounded-md", children: /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(Na, { mode: "popLayout", children: l.map((h) => /* @__PURE__ */ e(
        LD,
        {
          member: h,
          isNew: d.some((b) => b.id === h.id),
          onRemove: m,
          disabled: f
        },
        h.id
      )) }) }) }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-4 text-xs text-muted-foreground h-4", children: l.length > 0 && /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(Je, { className: "h-3 w-3" }),
          p("collectionWizard.documentCount", { count: l.filter((h) => h.type === "document").length })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(st, { className: "h-3 w-3" }),
          p("collectionWizard.subCollectionCount", { count: l.filter((h) => h.type === "collection").length })
        ] })
      ] }) })
    ] })
  ] });
}
function MD({
  name: t,
  description: n,
  currentMembers: a,
  membersToAdd: o,
  isEditMode: r,
  category: s,
  selectedGroups: l = [],
  availableGroups: d = []
}) {
  const { t: c } = K("common"), u = a.filter((h) => h.type === "document").length, m = a.filter((h) => h.type === "collection").length, f = o.length, p = ce(() => s !== "organization" || l.length === 0 ? [] : l.map((h) => d.find((b) => b.id === h)?.name).filter(Boolean), [s, l, d]);
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 p-4 bg-muted/50 rounded-lg", children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ e(Xs, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 min-w-0 flex-1", children: [
        /* @__PURE__ */ e("h3", { className: "font-semibold text-lg truncate", children: t }),
        n ? /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground line-clamp-2", children: n }) : /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: c("collectionWizard.noDescription") })
      ] })
    ] }) }),
    s === "organization" && p.length > 0 && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(lo, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: c("collectionWizard.groupsLabel") })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-1.5", children: p.map((h) => /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs", children: h }, h)) })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(Je, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ e("span", { className: "text-sm", children: c("collectionWizard.documentCount", { count: u }) })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(st, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ e("span", { className: "text-sm", children: c("collectionWizard.subCollectionCount", { count: m }) })
      ] }),
      f > 0 && /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs", children: c("collectionWizard.newCount", { count: f }) })
    ] }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm font-medium", children: c("collectionWizard.members") }),
      a.length === 0 ? /* @__PURE__ */ e("div", { className: "text-center text-sm text-muted-foreground py-6 border rounded-md", children: c("collectionWizard.noMembers") }) : /* @__PURE__ */ e(Nt, { className: "h-[160px] border rounded-md", children: /* @__PURE__ */ e("div", { className: "p-2 flex flex-col gap-1", children: a.map((h) => /* @__PURE__ */ e(
        OD,
        {
          member: h,
          isNew: o.some((b) => b.id === h.id)
        },
        h.id
      )) }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-3 bg-muted/30 rounded-md", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r ? /* @__PURE__ */ e("span", { dangerouslySetInnerHTML: { __html: c("collectionWizard.saveChangesDescription") } }) : /* @__PURE__ */ e("span", { dangerouslySetInnerHTML: { __html: c("collectionWizard.createCollectionDescription") } }) }) })
  ] });
}
function OD({ member: t, isNew: n }) {
  const { t: a } = K("common");
  return /* @__PURE__ */ i("div", { className: "flex items-center gap-2 p-2 rounded-md", children: [
    t.type === "document" ? /* @__PURE__ */ e(Je, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ e(st, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
    /* @__PURE__ */ e("span", { className: "text-sm truncate flex-1", children: t.name }),
    n && /* @__PURE__ */ e(ve, { variant: "outline", className: "text-xs text-primary border-primary/30", children: a("collectionWizard.newBadge") })
  ] });
}
const jD = {
  enter: (t) => ({
    x: t === "forward" ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (t) => ({
    x: t === "forward" ? -50 : 50,
    opacity: 0
  })
};
function Io({
  isOpen: t,
  onClose: n,
  onSuccess: a,
  collection: o,
  category: r
}) {
  const s = ID({
    isOpen: t,
    onClose: n,
    onSuccess: a,
    collection: o,
    category: r
  }), { t: l } = K("common"), {
    currentStep: d,
    direction: c,
    goBack: u,
    goNext: m,
    canProceed: f,
    isEditMode: p,
    isSubmitting: h,
    handleSubmit: b
  } = s, C = () => {
    d === 3 ? b() : m();
  }, y = () => l(d === 3 ? h ? p ? "collectionWizard.saving" : "collectionWizard.creating" : p ? "collectionWizard.saveChanges" : "collectionWizard.createCollection" : "collectionWizard.next");
  return t ? /* @__PURE__ */ e("div", { className: "z-50 fixed inset-0 flex justify-end top-0", children: /* @__PURE__ */ i(
    bt.div,
    {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      className: "h-full w-full bg-background shadow-lg relative flex flex-col",
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: l(p ? "collectionWizard.editCollection" : "collectionWizard.createCollectionTitle") }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: l(p ? "collectionWizard.editDescription" : "collectionWizard.createDescription") })
          ] }),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "icon",
              onClick: n,
              disabled: h,
              children: /* @__PURE__ */ e(De, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ e(Ee, {}),
        /* @__PURE__ */ e("div", { className: "px-6 py-2", children: /* @__PURE__ */ e(
          PD,
          {
            currentStep: d,
            totalSteps: 3,
            stepLabels: [l("collectionWizard.stepDetails"), l("collectionWizard.stepMembers"), l("collectionWizard.stepReview")]
          }
        ) }),
        /* @__PURE__ */ e(Ee, {}),
        /* @__PURE__ */ e("div", { className: "flex-1 overflow-hidden px-6 py-6", children: /* @__PURE__ */ e(Na, { mode: "wait", custom: c, children: /* @__PURE__ */ i(
          bt.div,
          {
            custom: c,
            variants: jD,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: { duration: 0.2, ease: "easeInOut" },
            className: "h-full",
            children: [
              d === 1 && /* @__PURE__ */ e("div", { className: "max-w-xl mx-auto h-full flex flex-col justify-center", children: /* @__PURE__ */ e(
                zD,
                {
                  name: s.name,
                  setName: s.setName,
                  description: s.description,
                  setDescription: s.setDescription,
                  typeId: s.typeId,
                  setTypeId: s.setTypeId,
                  disabled: h,
                  category: r,
                  selectedGroups: s.selectedGroups,
                  setSelectedGroups: s.setSelectedGroups,
                  availableGroups: s.availableGroups,
                  isLoadingGroups: s.isLoadingGroups
                }
              ) }),
              d === 2 && /* @__PURE__ */ e(
                $D,
                {
                  searchMode: s.searchMode,
                  setSearchMode: s.setSearchMode,
                  searchQuery: s.searchQuery,
                  setSearchQuery: s.setSearchQuery,
                  filteredSearchResults: s.filteredSearchResults,
                  isSearching: s.isSearching,
                  currentMembers: s.currentMembers,
                  membersToAdd: s.membersToAdd,
                  isLoadingMembers: s.isLoadingMembers,
                  handleAddMember: s.handleAddMember,
                  handleRemoveMember: s.handleRemoveMember,
                  disabled: h
                }
              ),
              d === 3 && /* @__PURE__ */ e("div", { className: "max-w-xl mx-auto", children: /* @__PURE__ */ e(
                MD,
                {
                  name: s.name,
                  description: s.description,
                  typeId: s.typeId,
                  currentMembers: s.currentMembers,
                  membersToAdd: s.membersToAdd,
                  isEditMode: p,
                  category: r,
                  selectedGroups: s.selectedGroups,
                  availableGroups: s.availableGroups
                }
              ) })
            ]
          },
          d
        ) }) }),
        /* @__PURE__ */ e(Ee, {}),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ e(
            z,
            {
              variant: "outline",
              onClick: n,
              disabled: h,
              children: l("actions.cancel")
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex flex-row gap-2", children: [
            d > 1 && /* @__PURE__ */ e(
              z,
              {
                variant: "outline",
                onClick: u,
                disabled: h,
                children: l("actions.back")
              }
            ),
            /* @__PURE__ */ i(
              z,
              {
                onClick: C,
                disabled: !f || h,
                children: [
                  h && /* @__PURE__ */ e(fe, { className: "mr-2 h-4 w-4 animate-spin" }),
                  y()
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) }) : null;
}
function BD({ collection: t, showDetails: n = !0, onClick: a }) {
  const { client: o } = de(), { registry: r } = tt(), s = et(), [l, d] = g(0), { t: c } = K("common"), u = r?.getTypeName(t.type?.id || "") || t.type?.name || c("collection");
  return M(() => {
    if (!o || !t.id)
      return;
    (async () => {
      try {
        const h = (await o.store.collections.searchMembers(t.id, {
          limit: 1,
          facets: [{ name: "total", field: "total" }]
        })).facets?.total || 0;
        d(h);
      } catch (p) {
        console.error("Failed to fetch member count:", p), d(0);
      }
    })();
  }, [o, t.id]), /* @__PURE__ */ i(
    "div",
    {
      className: "border overflow-hidden hover:shadow-md transition-shadow cursor-pointer group rounded-sm",
      onClick: () => {
        a ? a() : s(`/collections/${t.id}`);
      },
      children: [
        /* @__PURE__ */ i("div", { className: "relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "text-muted-foreground group-hover:text-foreground transition-colors", children: /* @__PURE__ */ e(st, { className: "h-12 w-12" }) }),
          /* @__PURE__ */ e("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ e(ve, { className: "bg-primary/90 text-secondary backdrop-blur-sm shadow-lg", children: u }) }),
          /* @__PURE__ */ e("div", { className: "absolute bottom-2 left-2", children: /* @__PURE__ */ i(ve, { variant: "secondary", className: "backdrop-blur-sm", children: [
            l,
            " item",
            l !== 1 && "s"
          ] }) })
        ] }),
        n && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", title: t.name, children: t.name }),
          t.updated_at && /* @__PURE__ */ e("div", { className: "flex flex-row items-center gap-2 text-xs text-muted-foreground", children: /* @__PURE__ */ e("span", { children: qt(t.updated_at) }) })
        ] }) })
      ]
    }
  );
}
function HD({ object: t, variant: n, className: a, text: o }) {
  const { t: r } = K("common"), s = Fe(), [l, d] = g(!1), c = s?.manifest.name || void 0, u = c ? `/apps/${c}` : "", f = u && location.pathname.startsWith(u) ? u : "", p = `${window.location.origin}${f}/advanced-search/${t.id}`, h = () => {
    !t || l || (navigator.clipboard.writeText(p), d(!0), setTimeout(() => d(!1), 1500));
  }, b = () => {
    if (!t) return;
    const C = t.name || "", v = `Sharing document ${C.length > 24 ? C.substring(0, 24) + "..." : C}`, x = `Hello,

You will find document ${C} there: ${p}

Kind regards,`;
    window.location.href = `mailto:?subject=${encodeURIComponent(v)}&body=${encodeURIComponent(x)}`;
  };
  return /* @__PURE__ */ i(nn, { children: [
    /* @__PURE__ */ e(an, { asChild: !0, children: /* @__PURE__ */ i(
      z,
      {
        variant: n || "outline",
        className: D("border border-primary/50 bg-popover text-popover-foreground hover:bg-primary/50", a),
        onClick: (C) => {
          C.stopPropagation(), C.nativeEvent.stopImmediatePropagation();
        },
        children: [
          /* @__PURE__ */ e(Qs, {}),
          o && /* @__PURE__ */ e("span", { className: "hidden md:inline", children: o })
        ]
      }
    ) }),
    /* @__PURE__ */ i(jt, { side: "bottom", align: "end", className: "p-1 flex flex-col gap-1 w-[230px]", children: [
      /* @__PURE__ */ i(
        at,
        {
          onSelect: (C) => {
            C.preventDefault(), h();
          },
          children: [
            l ? /* @__PURE__ */ e(Me, { className: "text-success" }) : /* @__PURE__ */ e(Zs, {}),
            /* @__PURE__ */ e("span", { children: r(l ? "actions.copied" : "actions.copyLink") })
          ]
        }
      ),
      /* @__PURE__ */ i(at, { onClick: b, children: [
        /* @__PURE__ */ e(Js, {}),
        /* @__PURE__ */ e("span", { children: r("actions.byEmail") })
      ] })
    ] })
  ] });
}
function li({ content: t, name: n }) {
  const a = ge(null);
  return M(() => {
    if (a.current) {
      const o = a.current, r = () => {
        try {
          const l = o.contentDocument || o.contentWindow.document;
          l && l.documentElement && (o.style.height = l.documentElement.scrollHeight + "px");
        } catch (l) {
          console.warn("Unable to resize iframe:", l);
        }
      };
      o.onload = r;
      const s = setTimeout(r, 100);
      return window.addEventListener("resize", r), () => {
        window.removeEventListener("resize", r), clearTimeout(s);
      };
    }
  }, [t]), /* @__PURE__ */ e("iframe", { ref: a, srcDoc: t, height: "100%", width: "100%", title: n, style: { border: "none" } });
}
function VD({ id: t, name: n }) {
  return /* @__PURE__ */ e(ht, { documentId: t, children: /* @__PURE__ */ i(ve, { variant: "outline", className: "p-2 text-sm text-primary flex-shrink-0 flex items-center gap-2 bg-muted hover:cursor-pointer italic", children: [
    /* @__PURE__ */ e(wt, { className: "size-4" }),
    n || t,
    /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: "(click to view details)" })
  ] }) });
}
function Lr({ content: t }) {
  const n = GD(qD(t));
  return /* @__PURE__ */ e(
    kl,
    {
      remarkPlugins: [_l],
      components: {
        a: ({ ...a }) => {
          const o = a.href || "";
          if (o.startsWith("/store/objects/")) {
            const r = o.split("/store/objects/")[1];
            return /* @__PURE__ */ e(VD, { id: r, name: String(a?.children || "") });
          }
          return /* @__PURE__ */ e("a", { ...a, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:text-primary/80" });
        },
        p: ({ ...a }) => /* @__PURE__ */ e("span", { ...a, className: "my-2 block text-foreground whitespace-pre-wrap leading-relaxed" }),
        strong: ({ ...a }) => /* @__PURE__ */ e("strong", { ...a, className: "font-bold text-foreground" }),
        em: ({ ...a }) => /* @__PURE__ */ e("em", { ...a, className: "italic text-foreground" }),
        pre: ({ ...a }) => /* @__PURE__ */ e("pre", { ...a, className: "my-2 bg-muted p-3 rounded-md text-foreground overflow-x-auto border border-border" }),
        code: ({ className: a, children: o, ...r }) => {
          const s = /language-(\w+)/.exec(a || ""), l = !s, d = s ? s[1] : "";
          return /* @__PURE__ */ i(xe, { children: [
            !l && d && /* @__PURE__ */ e("div", { className: "code-language-indicator", children: d }),
            /* @__PURE__ */ e("code", { ...r, children: o })
          ] });
        },
        h1: ({ ...a }) => /* @__PURE__ */ e("h1", { ...a, className: "text-foreground font-bold text-2xl my-3" }),
        h2: ({ ...a }) => /* @__PURE__ */ e("h2", { ...a, className: "text-foreground font-bold text-xl my-2" }),
        h3: ({ ...a }) => /* @__PURE__ */ e("h3", { ...a, className: "text-foreground font-bold text-lg my-2" }),
        li: ({ ...a }) => /* @__PURE__ */ e("li", { ...a, className: "text-foreground my-2 pl-1" }),
        ul: ({ ...a }) => /* @__PURE__ */ e("ul", { ...a, className: "my-3 pl-6 list-disc space-y-1" }),
        ol: ({ ...a }) => /* @__PURE__ */ e("ol", { ...a, className: "my-3 pl-6 list-decimal space-y-1" }),
        blockquote: ({ ...a }) => /* @__PURE__ */ e("blockquote", { ...a, className: "border-l-4 border-border pl-4 italic text-muted-foreground my-3" }),
        hr: ({ ...a }) => /* @__PURE__ */ e("hr", { ...a, className: "border-border my-4" }),
        table: ({ ...a }) => /* @__PURE__ */ e("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ e("table", { ...a, className: "min-w-full border-collapse border border-border" }) }),
        th: ({ ...a }) => /* @__PURE__ */ e("th", { ...a, className: "border border-border bg-muted px-4 py-2 text-left text-muted-foreground" }),
        td: ({ ...a }) => /* @__PURE__ */ e("td", { ...a, className: "border border-border px-4 py-2 text-foreground" })
      },
      children: n
    }
  );
}
function qD(t) {
  return typeof t != "string" ? t : /\d+\.\s+.+/.test(t) && !t.includes(`

`) ? t.replace(/(\d+\.\s+.+?)(?=\s+\d+\.\s+|$)/g, `$1

`) : t;
}
function GD(t) {
  return typeof t != "string" ? t : t.replace(/\[([^\]]+)\]\(store:([a-f\d]{24})\)/gi, (n, a, o) => `[${a}](/store/objects/${o})`);
}
function WD({ uri: t }) {
  const n = ge(null), a = [{ uri: t }];
  return M(() => {
    const r = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(r);
  }, [t]), M(() => {
    if (!n.current) return;
    const o = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"));
    });
    return o.observe(n.current), () => {
      o.disconnect();
    };
  }, []), /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ e("style", { children: `
                    .doc-viewer-container {
                        flex: 1;
                        height: 100%;
                        width: 100%;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .doc-viewer-container #react-doc-viewer,
                    .doc-viewer-container #proxy-renderer,
                    .doc-viewer-container #msdoc-renderer,
                    .doc-viewer-container #msdoc-iframe,
                    .doc-viewer-container .sc-dtInlm,
                    .doc-viewer-container .sc-jXbUNg,
                    .doc-viewer-container .sc-dLMFU,
                    .doc-viewer-container .sc-eDPEul {
                        height: 100% !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        flex: 1 !important;
                    }
                    .doc-viewer-container #msdoc-iframe {
                        border: none !important;
                    }
                ` }),
    /* @__PURE__ */ e("div", { ref: n, className: "doc-viewer-container", children: /* @__PURE__ */ e(
      El,
      {
        documents: a,
        pluginRenderers: zl,
        config: {
          header: {
            disableHeader: !0,
            disableFileName: !0,
            retainURLParams: !0
          }
        },
        style: { width: "100%", height: "100%", flex: 1 }
      }
    ) })
  ] });
}
function Po(t) {
  return t.startsWith("/") ? t = t.substring(1) : t.startsWith("./") && (t = t.substring(2)), t = `../../../assets/${t}`, new URL(t, import.meta.url).href;
}
const Rr = (t) => {
  if (!t)
    return !1;
  try {
    const n = t.trim().toLowerCase();
    return [/^<!doctype\s+html/i, /^<html/i, /<html[\s>]/i, /<head[\s>]/i, /<body[\s>]/i, /<!DOCTYPE\s+html/i].some((o) => o.test(n)) || n.includes("<") && n.includes(">") && (n.includes("<html") || n.includes("<head") || n.includes("<body") || n.includes("<div"));
  } catch (n) {
    return console.error("Error reading file content:", n), !1;
  }
}, UD = Po("/placeholder.svg");
function KD({ documentId: t, name: n, type: a, url: o }) {
  const { store: r } = de(), [s, l] = g("");
  return Q0(a) ? (s.length || r.objects.getObjectText(t).then((d) => {
    l(d.text ?? "");
  }), /* @__PURE__ */ e("div", { className: "w-full h-full overflow-auto p-2", children: /* @__PURE__ */ e(li, { content: s, name: n }) })) : Dr(a) ? /* @__PURE__ */ e("div", { className: "flex w-full h-full items-center justify-center", children: /* @__PURE__ */ e(
    "video",
    {
      src: o,
      controls: !0,
      className: "max-w-full max-h-full rounded-sm border bg-muted shadow-md",
      children: /* @__PURE__ */ e("track", { kind: "captions", label: "Captions" })
    }
  ) }) : X0(a) ? /* @__PURE__ */ e("div", { className: "flex w-full h-full items-center justify-center", children: /* @__PURE__ */ e("audio", { src: o, controls: !0, className: "w-full max-w-md" }) }) : Cr(a) ? /* @__PURE__ */ e("div", { className: "flex w-full h-full items-center justify-center", children: /* @__PURE__ */ e(
    "img",
    {
      src: o,
      alt: n,
      onError: (c) => {
        c.currentTarget.onerror = null, c.currentTarget.src = UD;
      },
      className: "max-w-full max-h-full object-contain"
    }
  ) }) : Ar(a) ? /* @__PURE__ */ e(YD, { url: o, name: n }) : No(a) || wo(a) ? /* @__PURE__ */ e(WD, { uri: o }) : Z0(a) || eD(a) || J0(a) ? (s.length || r.objects.getObjectText(t).then((d) => {
    l(d.text ?? "");
  }), Rr(s) ? /* @__PURE__ */ e("div", { className: "w-full h-full overflow-auto p-2", children: /* @__PURE__ */ e(li, { content: s, name: n }) }) : /* @__PURE__ */ e("div", { className: "w-full h-full overflow-auto p-2", children: /* @__PURE__ */ e(Lr, { content: s }) })) : /* @__PURE__ */ i("span", { children: [
    "Sorry for the inconvenience but ",
    a,
    " is not supported."
  ] });
}
function YD({ url: t, name: n }) {
  const [a, o] = g(null), r = ge(null);
  return M(() => (r.current && (URL.revokeObjectURL(r.current), r.current = null), fetch(t).then((s) => s.blob()).then((s) => {
    const l = URL.createObjectURL(s);
    r.current = l, o(l);
  }).catch(() => {
    o(t);
  }), () => {
    r.current && (URL.revokeObjectURL(r.current), r.current = null);
  }), [t]), a ? /* @__PURE__ */ e("iframe", { src: a, height: "100%", width: "100%", title: `PDF viewer for ${n}` }) : /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "Loading PDF..." });
}
function XD() {
  return /* @__PURE__ */ i(
    bt.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      className: "flex items-start gap-3 p-4",
      children: [
        /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ e(Pt, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-muted px-4 py-3", children: [
          /* @__PURE__ */ e(
            bt.div,
            {
              className: "h-2 w-2 rounded-full bg-muted-foreground/50",
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 0.6, repeat: 1 / 0, delay: 0 }
            }
          ),
          /* @__PURE__ */ e(
            bt.div,
            {
              className: "h-2 w-2 rounded-full bg-muted-foreground/50",
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 0.6, repeat: 1 / 0, delay: 0.2 }
            }
          ),
          /* @__PURE__ */ e(
            bt.div,
            {
              className: "h-2 w-2 rounded-full bg-muted-foreground/50",
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 0.6, repeat: 1 / 0, delay: 0.4 }
            }
          )
        ] })
      ]
    }
  );
}
var kn = /* @__PURE__ */ ((t) => (t.USER = "user", t.ASSISTANT = "assistant", t.SYSTEM = "system", t))(kn || {});
function QD({ message: t, onCopy: n, messageRef: a }) {
  const [o, r] = g(!1), s = t.role === kn.USER, l = () => {
    n(t.content), r(!0), setTimeout(() => r(!1), 2e3);
  }, d = (c) => c.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return /* @__PURE__ */ i(
    bt.div,
    {
      ref: a,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: D(
        "flex items-start gap-3 scroll-mt-4",
        s && "flex-row-reverse"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: D(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          s ? "bg-primary" : "bg-primary/10"
        ), children: s ? /* @__PURE__ */ e(gn, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ e(Pt, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ i("div", { className: D(
          "group flex flex-col gap-1 max-w-[75%]",
          s && "items-end"
        ), children: [
          /* @__PURE__ */ e("div", { className: D(
            "rounded-2xl px-4 py-2.5",
            s ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted rounded-tl-sm"
          ), children: s ? /* @__PURE__ */ e("p", { className: "text-sm whitespace-pre-wrap", children: t.content }) : /* @__PURE__ */ e("div", { className: "text-sm prose-sm max-w-none", children: /* @__PURE__ */ e(Lr, { content: t.content }) }) }),
          /* @__PURE__ */ i("div", { className: D(
            "flex items-center gap-2 px-1",
            s && "flex-row-reverse"
          ), children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: d(t.timestamp) }),
            !s && /* @__PURE__ */ e(
              z,
              {
                variant: "ghost",
                size: "icon",
                className: "h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: l,
                children: o ? /* @__PURE__ */ e(Me, { className: "h-3 w-3 text-success" }) : /* @__PURE__ */ e(el, { className: "h-3 w-3" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ZD({ documentName: t }) {
  const { t: n } = K("common");
  return /* @__PURE__ */ i(
    bt.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "flex flex-col items-center justify-center h-full p-8 text-center",
      children: [
        /* @__PURE__ */ e("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4", children: /* @__PURE__ */ e(In, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold mb-2", children: n("chat.chatWithDocument") }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground max-w-sm", children: /* @__PURE__ */ e("span", { dangerouslySetInnerHTML: { __html: n("chat.askQuestions", { name: t }) } }) })
      ]
    }
  );
}
function JD({ document: t, interactionId: n, resetTrigger: a }) {
  const { t: o } = K("common"), { client: r } = de(), s = Ie(), [l, d] = g([]), [c, u] = g(""), [m, f] = g(!1), p = ge(null), h = ge(null), b = ge(null);
  M(() => {
    a !== void 0 && a > 0 && (d([]), u(""));
  }, [a]), M(() => {
    b.current && b.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [l]);
  const C = () => {
    if (c.trim() === "" || m)
      return;
    const w = {
      id: l.length,
      content: c.trim(),
      role: kn.USER,
      timestamp: /* @__PURE__ */ new Date()
    };
    d((A) => [...A, w]), u(""), f(!0), h.current && (h.current.style.height = "auto"), r.interactions.execute(n, {
      data: {
        documents: [`store:${t.id}`],
        chat: [...l, w]
      }
    }).then((A) => {
      const S = {
        id: l.length + 1,
        content: A.result?.[0]?.value || o("chat.errorProcessing"),
        role: kn.ASSISTANT,
        timestamp: /* @__PURE__ */ new Date()
      };
      d((I) => [...I, S]);
    }).catch(() => {
      const A = {
        id: l.length + 1,
        content: o("chat.errorGeneral"),
        role: kn.ASSISTANT,
        timestamp: /* @__PURE__ */ new Date()
      };
      d((S) => [...S, A]);
    }).finally(() => {
      f(!1);
    });
  }, y = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), C());
  }, v = (w) => {
    u(w.target.value), w.target.style.height = "auto", w.target.style.height = Math.min(w.target.scrollHeight, 120) + "px";
  }, x = (w) => {
    navigator.clipboard.writeText(w).then(() => {
      s({
        status: "success",
        title: o("actions.copiedToClipboard"),
        duration: 2e3
      });
    });
  }, N = l.length > 0;
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ e("div", { className: "flex-1 min-h-0 p-4", children: N || m ? /* @__PURE__ */ e(Nt, { ref: p, className: "h-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ i(Na, { mode: "popLayout", children: [
      l.map((w, A) => {
        const S = A === l.length - 1;
        return /* @__PURE__ */ e(
          QD,
          {
            message: w,
            onCopy: x,
            messageRef: S ? b : void 0
          },
          w.id
        );
      }),
      m && /* @__PURE__ */ e(XD, {}, "typing")
    ] }) }) }) : /* @__PURE__ */ e(ZD, { documentName: t.name }) }),
    /* @__PURE__ */ e("div", { className: "flex-shrink-0 border-t bg-background p-4", children: /* @__PURE__ */ i("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ e(
        pt,
        {
          ref: h,
          value: c,
          onChange: v,
          onKeyDown: y,
          placeholder: o(m ? "chat.waitingPlaceholder" : "chat.askPlaceholder"),
          disabled: m,
          className: "min-h-[44px] max-h-[120px] resize-none rounded-xl",
          rows: 1
        }
      ),
      /* @__PURE__ */ e(
        z,
        {
          onClick: C,
          disabled: m || !c.trim(),
          size: "icon",
          className: "h-11 w-11 shrink-0",
          children: m ? /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ e(zi, { className: "h-4 w-4" })
        }
      )
    ] }) })
  ] });
}
function Ja({ children: t }) {
  return /* @__PURE__ */ e("div", { className: "flex w-full justify-center p-2 text-muted-foreground", children: t });
}
const eT = (t) => t === "asc" ? /* @__PURE__ */ e(mo, { className: "h-4 w-4" }) : t === "desc" ? /* @__PURE__ */ e(po, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ji, { className: "h-4 w-4" });
function tT({ column: t, label: n, hideSort: a = !1, hideFilter: o = !1 }) {
  const [r, s] = g(t.getFilterValue() || ""), l = r || t.getFilterValue(), d = (c) => {
    c.key === "Enter" && t.setFilterValue(r);
  };
  return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ e("div", { className: "font-semibold truncate", children: n }),
    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
      !a && /* @__PURE__ */ e(
        z,
        {
          onClick: () => t.toggleSorting(t.getIsSorted() === "asc"),
          variant: "ghost",
          size: "icon",
          children: eT(t.getIsSorted())
        }
      ),
      !o && /* @__PURE__ */ i(gt, { children: [
        /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ e(
          "div",
          {
            className: `h-[25px] w-[25px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent ${l ? "bg-primary text-primary-foreground" : ""} cursor-pointer`,
            children: /* @__PURE__ */ e(Oi, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ i(ut, { side: "top", align: "end", className: "flex flex-row gap-1 p-1 bg-popover text-popover-foreground", children: [
          /* @__PURE__ */ e(
            be,
            {
              placeholder: `Filter ${n}s...`,
              value: r,
              onChange: (c) => s(c.target.value),
              onKeyDown: d
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              variant: "outline",
              onClick: () => {
                s(""), t.setFilterValue("");
              },
              className: "hover:opacity-75",
              children: /* @__PURE__ */ e(De, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function nT(t, n, a = {}) {
  M(
    () => {
      const o = new IntersectionObserver(
        (r) => {
          const s = r[0].isIntersecting;
          a.leave ? s || n(r[0]) : s && n(r[0]);
        },
        { threshold: a.threshold || 1 }
      );
      return t.current && o.observe(t.current), () => {
        o.disconnect();
      };
    },
    a.deps ? a.deps.concat(t) : [t]
  );
}
function aT(t, n, a, o, r) {
  const s = [];
  return t.forEach((l) => {
    const d = (u, m) => {
      try {
        return m.split(".").reduce((f, p) => f?.[p], u);
      } catch (f) {
        return console.error("Error getting nested value:", f), "No Data";
      }
    }, c = {
      accessorKey: l.key,
      header: ({ column: u }) => /* @__PURE__ */ e(
        tT,
        {
          column: u,
          label: l.label,
          hideFilter: !0
        }
      ),
      sortingFn: (u, m, f) => {
        const p = d(u.original, l.key), h = d(m.original, l.key), b = String(p || "").toLowerCase(), C = String(h || "").toLowerCase();
        return b.localeCompare(C);
      },
      cell: ({ row: u }) => {
        if (l.key === "title" || l.key === "name") {
          const f = u.original?.properties?.title || u.original?.name || u.original.id;
          return /* @__PURE__ */ e(ht, { documentId: u.original.id, children: /* @__PURE__ */ e(
            "div",
            {
              className: "truncate font-medium text-primary underline hover:text-primary/80 cursor-pointer",
              title: `Click to view ${f}`,
              children: f
            }
          ) });
        }
        const m = d(u.original, l.key);
        if (l.type === "date" && m)
          try {
            const f = new Date(m);
            if (!isNaN(f.getTime()))
              return /* @__PURE__ */ i("div", { children: [
                f.toLocaleDateString(),
                " ",
                f.toLocaleTimeString()
              ] });
          } catch {
          }
        return /* @__PURE__ */ e("div", { children: m });
      },
      size: l.size || 200,
      enableSorting: !0,
      enableColumnFilter: !1
    };
    s.push(c);
  }), s.push({
    id: "select",
    header: ({ table: l }) => {
      if (a === "single")
        return null;
      const d = l.getRowModel().rows.filter((f) => !n.includes(f.original.id)), c = d.filter((f) => f.getIsSelected()), u = d.length > 0 && c.length === d.length, m = c.length > 0 && c.length < d.length;
      return /* @__PURE__ */ e(
        Xe,
        {
          checked: u || m && "indeterminate",
          onCheckedChange: (f) => {
            d.forEach((p) => {
              p.toggleSelected(!!f);
            });
          },
          "aria-label": o
        }
      );
    },
    cell: ({ row: l }) => /* @__PURE__ */ e(
      Xe,
      {
        checked: l.getIsSelected(),
        onCheckedChange: (d) => l.toggleSelected(!!d),
        "aria-label": r,
        disabled: n.includes(l.original.id)
      }
    ),
    enableSorting: !1,
    enableHiding: !1,
    size: 50
  }), s;
}
function oT({ data: t, loading: n, loadMore: a, hasMore: o = !1, loadingMore: r = !1, onMultipleSelection: s, selection: l = [], selectedIds: d = [], hasSearched: c = !1, noFilterMatch: u = !1, columns: m, selectionMode: f = "multiple" }) {
  const { t: p } = K("common"), [h, b] = g([]), [C, y] = g([]), [v, x] = g({}), [N, w] = g({}), A = ge(null), S = ge(null), I = ge(!1), L = ce(() => aT(m, d, f, p("tables.selectAll"), p("tables.selectRow")), [m, d, f, p]), V = ce(() => new Set(l.map((k) => k.id)), [l]);
  M(() => {
    if (I.current) return;
    const k = {};
    t.forEach((_, q) => {
      V.has(_.id) && (k[q] = !0);
    }), w(k);
  }, [t, V]);
  const G = Fl({
    data: t,
    columns: L,
    onSortingChange: b,
    onColumnFiltersChange: y,
    onRowSelectionChange: (k) => {
      I.current = !0, w(k);
    },
    getCoreRowModel: $l(),
    getSortedRowModel: Rl(),
    getFilteredRowModel: Ll(),
    onColumnVisibilityChange: x,
    state: {
      sorting: h,
      columnFilters: C,
      columnVisibility: v,
      rowSelection: N
    },
    enableRowSelection: !0,
    enableMultiRowSelection: f === "multiple",
    enableMultiSort: !0,
    columnResizeMode: "onChange"
  });
  M(() => {
    if (!I.current) return;
    I.current = !1;
    const k = G.getFilteredSelectedRowModel().rows.map((_) => _.original);
    if (f === "single")
      s(k);
    else {
      const _ = new Set(t.map((T) => T.id)), q = l.filter((T) => !_.has(T.id)), $ = [
        ...q,
        ...k.filter((T) => !q.some((X) => X.id === T.id))
      ];
      s($);
    }
  }, [N, s, G, t, l, f]);
  const R = J(() => {
    if (!A.current || n || r || !o || !a)
      return;
    const { scrollTop: k, scrollHeight: _, clientHeight: q } = A.current, $ = _ - k - q, T = Math.max(50, q * 0.1);
    $ < T && a();
  }, [n, r, o, a]), j = J(() => {
    !n && !r && o && a && a();
  }, [n, r, o, a]);
  M(() => {
    const k = A.current;
    if (k)
      return k.addEventListener("scroll", R), () => {
        k.removeEventListener("scroll", R);
      };
  }, [R]), nT(S, j, {
    deps: [t.length, o, r, n],
    threshold: 0.1
  });
  const O = n && t.length === 0, Q = !O && G.getRowModel().rows?.length > 0, ee = !n && c && t.length === 0 && !u, te = !n && u;
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full w-full", children: [
    /* @__PURE__ */ e("div", { ref: A, className: "flex-1 border rounded-md border-border bg-background", style: { overflow: "auto", position: "relative" }, children: /* @__PURE__ */ e("div", { style: { minHeight: "100%" }, children: /* @__PURE__ */ i(So, { className: "w-full", style: { height: "100%" }, children: [
      /* @__PURE__ */ e(xn, { className: "bg-background after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-border", style: { position: "sticky", top: 0, zIndex: 10 }, children: G.getHeaderGroups().map((k) => /* @__PURE__ */ e(Ke, { children: k.headers.map((_) => /* @__PURE__ */ e(
        Ge,
        {
          style: {
            maxWidth: _.getSize(),
            position: "sticky",
            top: 0,
            backgroundColor: "var(--background)",
            zIndex: 10
          },
          children: _.isPlaceholder ? null : Ho(
            _.column.columnDef.header,
            _.getContext()
          )
        },
        _.id
      )) }, k.id)) }),
      /* @__PURE__ */ i(yn, { children: [
        O && /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, children: /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ e("div", { className: "w-full h-full space-y-2", children: [...Array(20)].map((k, _) => /* @__PURE__ */ e(Ve, { className: "h-12 w-full" }, _)) }) }) }) }),
        Q && G.getRowModel().rows.map((k) => /* @__PURE__ */ e(
          Ke,
          {
            "data-state": k.getIsSelected() ? "selected" : void 0,
            className: `${d.includes(k.original.id) ? "bg-muted" : ""} ${k.getIsSelected() ? "bg-selection" : ""}`,
            children: k.getVisibleCells().map((_) => /* @__PURE__ */ e(Ae, { style: { maxWidth: _.column.getSize() }, children: Ho(
              _.column.columnDef.cell,
              _.getContext()
            ) }, _.id))
          },
          k.id
        )),
        ee && /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, children: /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full", children: /* @__PURE__ */ e("p", { className: "text-muted-foreground text-center", children: "No documents found." }) }) }) }),
        te && /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, children: /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full py-8", children: /* @__PURE__ */ e("p", { className: "text-muted-foreground text-center", children: "No documents match the current filtering logic." }) }) }) }),
        !n && !c && t.length === 0 && !u && /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, children: /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full py-8", children: /* @__PURE__ */ e("p", { className: "text-muted-foreground text-center", children: p("filters.selectAtLeastOneFilter") }) }) }) }),
        r && /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, children: /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-4", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }) }) }),
        o && a && !r && t.length > 0 && /* @__PURE__ */ e(Ke, { ref: S, children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, className: "h-20 p-0" }) }),
        /* @__PURE__ */ e(Ke, { style: { height: "100%" }, children: /* @__PURE__ */ e(Ae, { colSpan: m.length + 2, style: { height: "100%", padding: 0, border: 0 } }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end space-x-2 pt-2 text-sm text-muted-foreground", children: O ? "Loading documents..." : r ? "Loading more..." : t.length === 0 && !c ? "Select filters to search..." : t.length === 0 ? "No results." : /* @__PURE__ */ i(xe, { children: [
      G.getFilteredRowModel().rows.length,
      " document",
      G.getFilteredRowModel().rows.length <= 1 ? "" : "s",
      ".",
      o ? "" : " (All results loaded)"
    ] }) })
  ] });
}
function iT({ document: t, typeRegistry: n, selected: a = !1, onToggleSelection: o, selectionEnabled: r = !1, alreadySelected: s = !1 }) {
  const { t: l } = K("common"), { client: d } = de(), c = Ie(), [u, m] = g(null), [f, p] = g(""), [h, b] = g(!1);
  M(() => {
    d && t && zt(
      d,
      t,
      m,
      p,
      c,
      512
    ).catch(() => {
      b(!0);
    });
  }, [t.id, d, c]);
  const C = () => {
    const w = t.content?.type?.toLowerCase() || "", A = t.type?.id?.toLowerCase() || "";
    return w.startsWith("image/") || A === "image" ? /* @__PURE__ */ e(fn, { className: "h-8 w-8 text-chart-2" }) : w.startsWith("video/") || A === "video" ? /* @__PURE__ */ e(Bn, { className: "h-8 w-8 text-chart-4" }) : w.startsWith("audio/") || A === "audio" ? /* @__PURE__ */ e(Hn, { className: "h-8 w-8 text-chart-5" }) : w.includes("pdf") || A === "pdf" ? /* @__PURE__ */ e(Je, { className: "h-8 w-8 text-chart-1" }) : w.includes("zip") || w.includes("tar") || w.includes("rar") || A === "archive" ? /* @__PURE__ */ e(va, { className: "h-8 w-8 text-chart-5" }) : w.includes("code") || w.includes("javascript") || w.includes("typescript") || A === "code" ? /* @__PURE__ */ e(xa, { className: "h-8 w-8 text-chart-3" }) : /* @__PURE__ */ e(wt, { className: "h-8 w-8 text-muted-foreground" });
  }, v = (() => {
    const w = t.content?.type?.toLowerCase() || "", A = t.type?.id?.toLowerCase() || "";
    return w.startsWith("image/") || A === "image" || w.startsWith("video/") || A === "video" || w.includes("pdf") || A === "pdf";
  })() && u && !h, x = (w) => {
    w.stopPropagation(), w.preventDefault(), s || o?.();
  }, N = /* @__PURE__ */ i("div", { className: D(
    "ecm-tile border overflow-hidden hover:shadow-md transition-all cursor-pointer group rounded-sm",
    a && "ring-2 ring-primary ring-offset-2",
    s && "opacity-50"
  ), children: [
    /* @__PURE__ */ i("div", { className: D(
      "relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden",
      v && "bg-transparent"
    ), children: [
      v ? /* @__PURE__ */ e(
        "img",
        {
          src: u,
          alt: f || t.name,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform",
          onError: () => b(!0)
        }
      ) : /* @__PURE__ */ e("div", { className: "text-muted-foreground group-hover:text-foreground transition-colors", children: C() }),
      r && /* @__PURE__ */ e(
        "div",
        {
          className: D(
            "absolute top-2 left-2 z-10",
            !a && !s && "opacity-50 group-hover:opacity-100 transition-opacity duration-200"
          ),
          onClick: x,
          children: s ? /* @__PURE__ */ e("div", { className: "w-6 h-6 rounded bg-muted text-muted-foreground flex items-center justify-center", children: /* @__PURE__ */ e(Me, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e(
            Xe,
            {
              checked: a,
              onCheckedChange: () => o?.(),
              onClick: (w) => w.stopPropagation(),
              className: "bg-background/80"
            }
          )
        }
      ),
      /* @__PURE__ */ e("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ e(ve, { className: "bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg text-xs", children: n?.getTypeName(t.type?.id || "") || t.type?.name || l("document") }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", title: t.name, children: t.name }),
      t.created_at && /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: qt(t.created_at) })
    ] }) })
  ] });
  return /* @__PURE__ */ e(ht, { documentId: t.id, children: N });
}
function rT({
  data: t,
  loading: n,
  loadMore: a,
  hasMore: o = !1,
  loadingMore: r = !1,
  selection: s = [],
  selectedIds: l = [],
  onToggleSelection: d,
  hasSearched: c = !1,
  noFilterMatch: u = !1,
  typeRegistry: m
}) {
  const { t: f } = K("common"), p = ge(null), h = new Set(s.map((N) => N.id)), b = J(() => {
    if (!p.current || n || r || !o || !a)
      return;
    const { scrollTop: N, scrollHeight: w, clientHeight: A } = p.current;
    w - N - A < 100 && a();
  }, [n, r, o, a]);
  M(() => {
    const N = p.current;
    if (N)
      return N.addEventListener("scroll", b), () => N.removeEventListener("scroll", b);
  }, [b]);
  const C = n && t.length === 0, y = !n && c && t.length === 0 && !u, v = !n && u, x = !n && !c && t.length === 0 && !u;
  return /* @__PURE__ */ i("div", { ref: p, className: "flex flex-col h-full w-full overflow-auto", children: [
    /* @__PURE__ */ i("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-1", children: [
      C && [...Array(20)].map((N, w) => /* @__PURE__ */ i(ye, { className: "overflow-hidden", children: [
        /* @__PURE__ */ e(Ve, { className: "w-full aspect-square" }),
        /* @__PURE__ */ i(Ce, { className: "p-3", children: [
          /* @__PURE__ */ e(Ve, { className: "h-4 w-full mb-2" }),
          /* @__PURE__ */ e(Ve, { className: "h-3 w-24" })
        ] })
      ] }, w)),
      y && /* @__PURE__ */ e("div", { className: "col-span-full", children: /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
        /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
        /* @__PURE__ */ i("div", { className: "text-center", children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: "No documents found" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Try adjusting your filters or search terms" })
        ] })
      ] }) }) }),
      v && /* @__PURE__ */ e("div", { className: "col-span-full", children: /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
        /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
        /* @__PURE__ */ i("div", { className: "text-center", children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: "No documents match" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "No documents match the current filtering logic" })
        ] })
      ] }) }) }),
      x && /* @__PURE__ */ e("div", { className: "col-span-full", children: /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
        /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
        /* @__PURE__ */ i("div", { className: "text-center", children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: f("filters.selectFiltersToSearch") }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: f("filters.selectAtLeastOneFilter") })
        ] })
      ] }) }) }),
      !C && t.map((N) => /* @__PURE__ */ e(
        iT,
        {
          document: N,
          typeRegistry: m,
          selected: h.has(N.id),
          alreadySelected: l.includes(N.id),
          onToggleSelection: () => d?.(N),
          selectionEnabled: !!d
        },
        N.id
      ))
    ] }),
    (r || n && t.length > 0) && /* @__PURE__ */ e("div", { className: "w-full flex justify-center items-center p-4", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }),
    o && a && !r && t.length > 0 && /* @__PURE__ */ e("div", { className: "h-4" }),
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end space-x-2 pt-2 pb-1 text-sm text-muted-foreground", children: C ? "Loading documents..." : r ? "Loading more..." : t.length === 0 && !c ? "Select filters to search..." : t.length === 0 ? "No results." : /* @__PURE__ */ i(xe, { children: [
      t.length,
      " document",
      t.length <= 1 ? "" : "s",
      ".",
      o ? "" : " (All results loaded)"
    ] }) })
  ] });
}
function sT({ viewMode: t, onViewModeChange: n }) {
  const { t: a } = K("common");
  return /* @__PURE__ */ i("div", { className: "flex items-center border rounded-md", children: [
    /* @__PURE__ */ e(
      z,
      {
        variant: "ghost",
        size: "sm",
        onClick: () => n("list"),
        className: D(
          "rounded-r-none px-2",
          t === "list" && "bg-muted"
        ),
        title: a("tables.listView"),
        children: /* @__PURE__ */ e(Bi, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e(
      z,
      {
        variant: "ghost",
        size: "sm",
        onClick: () => n("grid"),
        className: D(
          "rounded-l-none px-2",
          t === "grid" && "bg-muted"
        ),
        title: a("tables.gridView"),
        children: /* @__PURE__ */ e(Ln, { className: "h-4 w-4" })
      }
    )
  ] });
}
function lT({
  className: t,
  classNames: n,
  showOutsideDays: a = !0,
  captionLayout: o = "label",
  buttonVariant: r = "ghost",
  formatters: s,
  components: l,
  ...d
}) {
  const c = Ji();
  return /* @__PURE__ */ e(
    Ml,
    {
      showOutsideDays: a,
      className: D(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        t
      ),
      captionLayout: o,
      formatters: {
        formatMonthDropdown: (u) => u.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: D("w-fit", c.root),
        months: D(
          "flex gap-4 flex-col md:flex-row relative",
          c.months
        ),
        month: D("flex flex-col w-full gap-4", c.month),
        nav: D(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          c.nav
        ),
        button_previous: D(
          Ya({ variant: r }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_previous
        ),
        button_next: D(
          Ya({ variant: r }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_next
        ),
        month_caption: D(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          c.month_caption
        ),
        dropdowns: D(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          c.dropdowns
        ),
        dropdown_root: D(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          c.dropdown_root
        ),
        dropdown: D(
          "absolute bg-popover inset-0 opacity-0",
          c.dropdown
        ),
        caption_label: D(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: D("flex", c.weekdays),
        weekday: D(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          c.weekday
        ),
        week: D("flex w-full mt-2", c.week),
        week_number_header: D(
          "select-none w-(--cell-size)",
          c.week_number_header
        ),
        week_number: D(
          "text-[0.8rem] select-none text-muted-foreground",
          c.week_number
        ),
        day: D(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          c.day
        ),
        range_start: D(
          "rounded-l-md bg-accent",
          c.range_start
        ),
        range_middle: D("rounded-none", c.range_middle),
        range_end: D("rounded-r-md bg-accent", c.range_end),
        today: D(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          c.today
        ),
        outside: D(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: D(
          "text-muted-foreground opacity-50",
          c.disabled
        ),
        hidden: D("invisible", c.hidden),
        ...n
      },
      components: {
        Root: ({ className: u, rootRef: m, ...f }) => /* @__PURE__ */ e(
          "div",
          {
            "data-slot": "calendar",
            ref: m,
            className: D(u),
            ...f
          }
        ),
        Chevron: ({ className: u, orientation: m, ...f }) => m === "left" ? /* @__PURE__ */ e(tl, { className: D("size-4", u), ...f }) : m === "right" ? /* @__PURE__ */ e(
          nl,
          {
            className: D("size-4", u),
            ...f
          }
        ) : /* @__PURE__ */ e(al, { className: D("size-4", u), ...f }),
        DayButton: cT,
        WeekNumber: ({ children: u, ...m }) => /* @__PURE__ */ e("td", { ...m, children: /* @__PURE__ */ e("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: u }) }),
        ...l
      },
      ...d
    }
  );
}
function cT({
  className: t,
  day: n,
  modifiers: a,
  ...o
}) {
  const r = Ji(), s = ge(null);
  return M(() => {
    a.focused && s.current?.focus();
  }, [a.focused]), /* @__PURE__ */ e(
    z,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": n.date.toLocaleDateString(),
      "data-selected-single": a.selected && !a.range_start && !a.range_end && !a.range_middle,
      "data-range-start": a.range_start,
      "data-range-end": a.range_end,
      "data-range-middle": a.range_middle,
      className: D(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        r.day,
        t
      ),
      ...o
    }
  );
}
function dT(t, n, a) {
  return t && n ? /* @__PURE__ */ i("span", { className: "w-full", children: [
    t.toLocaleDateString(),
    " - ",
    n.toLocaleDateString()
  ] }) : t ? /* @__PURE__ */ i("span", { className: "w-full text-start", children: [
    "From: ",
    t.toLocaleDateString()
  ] }) : n ? /* @__PURE__ */ i("span", { className: "w-full text-start", children: [
    "To: ",
    n.toLocaleDateString()
  ] }) : /* @__PURE__ */ e("span", { className: "w-full text-start font-light", children: a });
}
function ci({ section: t, from: n, to: a, onClear: o, onFromValueChange: r, onToValueChange: s }) {
  const { t: l } = K("common"), [d, c] = g(!0), [u, m] = g({
    from: n ? new Date(n) : void 0,
    to: a ? new Date(a) : void 0
  }), f = (p) => {
    let h = d;
    p || (h = !h, c(h)), !h && p?.from && !p?.to && (p = {
      from: void 0,
      to: p?.from
    }), m(p);
  };
  return M(() => {
    r(u?.from), s(u?.to);
  }, [u]), M(() => {
    m(void 0);
  }, [o]), /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ e(ne, { className: "font-light", children: t }),
    /* @__PURE__ */ i("div", { className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ i(gt, { children: [
        /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(z, { variant: "outline", className: "w-full bg-background", children: [
          /* @__PURE__ */ e(ol, {}),
          dT(u?.from, u?.to, l("filters.selectDateRange"))
        ] }) }),
        /* @__PURE__ */ e(ut, { className: "w-full overflow-hidden p-0", children: /* @__PURE__ */ e(
          lT,
          {
            className: "w-full",
            mode: "range",
            defaultMonth: u?.from,
            selected: u,
            onSelect: f,
            fixedWeeks: !0,
            showOutsideDays: !0,
            disabled: {
              after: /* @__PURE__ */ new Date()
            }
          }
        ) })
      ] }),
      u && /* @__PURE__ */ e(z, { variant: "destructive", onClick: () => m(void 0), children: /* @__PURE__ */ e(De, {}) })
    ] })
  ] });
}
function uT({ section: t, Icon: n, onClear: a, onSelection: o }) {
  const [r, s] = g(void 0), [l, d] = g(void 0), [c, u] = g(void 0), [m, f] = g(void 0), p = (y) => {
    s(y?.toISOString());
  }, h = (y) => {
    d(y?.toISOString());
  }, b = (y) => {
    u(y?.toISOString());
  }, C = (y) => {
    f(y?.toISOString());
  };
  return M(() => {
    o?.(r || l || c || m ? {
      createdFrom: r,
      createdTo: l,
      updatedFrom: c,
      updatedTo: m
    } : void 0);
  }, [r, l, c, m]), /* @__PURE__ */ e("div", { className: D("relative flex w-full min-w-0 flex-col p-2 border-b border-sidebar-border"), children: /* @__PURE__ */ i(Bt, { defaultOpen: !1, className: "group/collapsible", children: [
    /* @__PURE__ */ i(Ht, { className: D("group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", "flex h-8 shrink-0 items-center rounded-md px-2 text-sm font-medium outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 hover:cursor-pointer mb-1"), children: [
      n && /* @__PURE__ */ e(n, { className: "mr-2" }),
      t,
      " ",
      /* @__PURE__ */ e(mt, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" })
    ] }),
    /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ e(ci, { section: "Created At", onClear: a, from: r, to: l, onFromValueChange: p, onToValueChange: h }),
      /* @__PURE__ */ e(ci, { section: "Updated At", onClear: a, from: c, to: m, onFromValueChange: b, onToValueChange: C })
    ] }) })
  ] }) });
}
const Xn = 6;
function _n({ label: t, items: n, selectedValue: a, onSelection: o, onClear: r, getLabelFn: s, multiple: l = !1, transform: d, client: c }) {
  const { t: u } = K("common"), [m, f] = g(""), [p, h] = g(!1), [b, C] = g(n), [y, v] = g(() => l ? Array.isArray(a) ? a : a ? [a] : [] : a ? [String(a)] : []);
  M(() => {
    v(l ? Array.isArray(a) ? a : a ? [a] : [] : a ? [String(a)] : []);
  }, [a, l]);
  const x = ge(r);
  M(() => {
    x.current !== r && (x.current = r, v([]), f(""), h(!1));
  }, [r]), M(() => {
    if (d && c) {
      const R = [...n];
      let j = 0;
      for (let O = 0; O < n.length; O++) {
        const Q = n[O];
        d(Q.name, c, (ee) => {
          R[O] = { ...Q, name: ee }, j++, j === n.length && C([...R]);
        });
      }
    } else
      C(n);
  }, [n, d, c]);
  const w = ce(() => [...b].sort((R, j) => (j.count ?? 0) - (R.count ?? 0)), [b]).filter((R) => (s ? s(R._id) : String(R.name ?? R._id)).toLowerCase().includes(m.toLowerCase())), A = m.length > 0, S = w.length > Xn, I = p || A ? w : w.slice(0, Xn), L = w.length - Xn, V = (R) => {
    let j;
    l ? y.includes(R) ? j = y.filter((O) => O !== R) : j = [...y, R] : j = y.includes(R) ? [] : [R], v(j), o?.(l ? j.length > 0 ? j : void 0 : j.length > 0 ? j[0] : void 0);
  }, G = (R) => y.includes(String(R));
  return n.length === 0 ? null : /* @__PURE__ */ e("div", { className: "border-b", children: /* @__PURE__ */ i(Bt, { defaultOpen: !1, className: "group/collapsible", children: [
    /* @__PURE__ */ i(Ht, { className: D(
      "flex h-10 w-full items-center justify-between px-4 py-2 text-sm font-medium",
      "hover:bg-accent transition-colors hover:cursor-pointer",
      "outline-none focus-visible:ring-2 focus-visible:ring-ring"
    ), children: [
      t,
      /* @__PURE__ */ e(mt, { className: "h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" })
    ] }),
    /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ i("div", { className: "flex flex-col px-4 pb-2", children: [
      n.length > Xn && /* @__PURE__ */ e(
        be,
        {
          placeholder: u("search.searchPlaceholder", { label: t.toLowerCase() }),
          value: m,
          onChange: (R) => f(R.target.value),
          className: "mb-2"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: I.map((R, j) => {
        const O = s ? s(R._id) : String(R.name ?? R._id);
        return /* @__PURE__ */ i(
          "div",
          {
            className: "flex items-center justify-between rounded-md px-2 py-2 hover:bg-accent transition-colors cursor-pointer",
            onClick: () => V(R._id),
            children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ e(
                  Xe,
                  {
                    id: `filter-${t}-${R._id}`,
                    checked: G(R._id),
                    onCheckedChange: () => V(R._id),
                    onClick: (Q) => Q.stopPropagation()
                  }
                ),
                /* @__PURE__ */ e(
                  "label",
                  {
                    htmlFor: `filter-${t}-${R._id}`,
                    className: "text-sm cursor-pointer truncate flex-1",
                    children: O
                  }
                )
              ] }),
              R.count !== void 0 && /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs ml-2 flex-shrink-0", children: R.count })
            ]
          },
          `${R._id}-${j}`
        );
      }) }),
      S && !A && /* @__PURE__ */ e(
        z,
        {
          variant: "ghost",
          size: "sm",
          className: "mt-1 h-7 text-xs text-muted-foreground",
          onClick: () => h((R) => !R),
          children: p ? /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(Hi, { className: "mr-1 h-3 w-3" }),
            u("filters.showLess")
          ] }) : /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(Vi, { className: "mr-1 h-3 w-3" }),
            u("filters.showMore", { count: L })
          ] })
        }
      )
    ] }) })
  ] }) });
}
function $r(t) {
  return t = t.replace(/_/g, " ").replace(/([a-z0-9])&([A-Z])/g, "$1 $2"), t[0].toUpperCase() + t.slice(1);
}
function En(t) {
  return t ? t.includes(" ") ? t : t.split("_").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ") : "";
}
function mT(t) {
  return t == null ? "-" : typeof t == "string" || typeof t == "number" ? new Date(t).toLocaleString() : String(t);
}
function pT(t, n) {
  return n.split(".").reduce((a, o) => {
    if (a && typeof a == "object" && !Array.isArray(a) && o in a)
      return a[o];
  }, t);
}
const hT = 1e3, di = 100, Qn = (t) => {
  const n = Object.fromEntries(
    Object.entries(t).filter(
      ([, a]) => a != null && a !== ""
    )
  );
  return Object.keys(n).length > 0 ? n : void 0;
};
function gT({ label: t, Icon: n, simpleProperties: a = [], advancedProperties: o, onSelection: r, onClear: s }) {
  const l = ge(null), [d, c] = g({}), [u, m] = g({}), [f, p] = g({}), h = (I, L) => {
    const V = { ...d, [I]: L };
    c(V), l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      const G = Qn(V);
      r?.(G);
    }, hT);
  }, b = (I, L) => {
    const V = { ...d, [I]: L };
    c(V), l.current && clearTimeout(l.current), p((R) => ({ ...R, [I]: !1 }));
    const G = Qn(V);
    r?.(G);
  }, C = (I) => {
    const L = { ...d, [I]: "" };
    c(L), l.current && clearTimeout(l.current), p((G) => ({ ...G, [I]: !1 }));
    const V = Qn(L);
    r?.(V);
  }, y = (I, L) => {
    m((V) => ({
      ...V,
      [I]: L
    }));
  }, v = (I, L) => {
    p((V) => ({ ...V, [I]: L })), L || m((V) => ({ ...V, [I]: "" }));
  }, x = ce(() => (I) => {
    const L = u[I.field]?.toLowerCase() || "";
    let V = I.values.filter(
      (G) => G && G._id !== null && G._id !== ""
    );
    return L ? V = V.filter(
      (G) => String(G._id).toLowerCase().includes(L)
    ) : V = V.sort((G, R) => (R.count || 0) - (G.count || 0)).slice(0, di), V;
  }, [u]), N = (I) => {
    const L = I.values.find((V) => !V._id || V._id === "");
    return L ? L.count : null;
  }, w = () => {
    l.current && clearTimeout(l.current);
    const I = Qn(d);
    r?.(I);
  }, A = (I) => {
    I.stopPropagation();
  }, S = (I, L) => {
    L.stopPropagation(), y(I, L.target.value);
  };
  return M(() => {
    c({}), m({}), p({}), l.current && clearTimeout(l.current);
  }, [s]), M(() => () => {
    l.current && clearTimeout(l.current);
  }, []), /* @__PURE__ */ e("div", { className: D("relative flex w-full min-w-0 flex-col p-2 border-b border-sidebar-border"), children: /* @__PURE__ */ i(Bt, { defaultOpen: !1, className: "group/collapsible", children: [
    /* @__PURE__ */ i(
      Ht,
      {
        className: D(
          "group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          "flex h-8 shrink-0 items-center rounded-md px-2 text-sm font-medium outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 hover:cursor-pointer mb-1"
        ),
        children: [
          n && /* @__PURE__ */ e(n, { className: "mr-2" }),
          t,
          " ",
          /* @__PURE__ */ e(mt, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" })
        ]
      }
    ),
    /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 pb-2 px-2", children: [
      a.map((I) => /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e(ne, { className: "text-xs", children: I.label }),
        /* @__PURE__ */ e(
          be,
          {
            value: d[I.property] || "",
            onChange: (L) => h(I.property, L.target.value),
            onKeyDown: (L) => L.key === "Enter" && w(),
            placeholder: I.placeholder,
            className: "bg-background shadow-none hover:shadow-sm"
          }
        )
      ] }, I.id)),
      o?.map((I) => {
        const L = x(I), V = u[I.field]?.length > 0, G = N(I), R = f[I.field] || !1, j = d[I.field] || "";
        return /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e(ne, { className: "text-xs", children: En(I.name) }),
          /* @__PURE__ */ i(
            gt,
            {
              open: R,
              onOpenChange: (O) => v(I.field, O),
              children: [
                /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i("div", { className: "flex flex-row border gap-2 items-center justify-center cursor-pointer hover:bg-accent rounded-md h-10 px-3 bg-background", children: [
                  /* @__PURE__ */ e("div", { className: "w-full text-sm font-light text-left text-primary truncate", children: j || `Select ${En(I.name)}` }),
                  /* @__PURE__ */ e("div", { className: "border-l pl-2", children: R ? /* @__PURE__ */ e(il, { className: "h-4 w-4 opacity-50" }) : /* @__PURE__ */ e(Ut, { className: "h-4 w-4 opacity-50" }) })
                ] }) }),
                /* @__PURE__ */ i(ut, { className: "max-w-[236px] p-2 border shadow", align: "start", children: [
                  /* @__PURE__ */ e(
                    be,
                    {
                      placeholder: `Filter ${En(I.name)}...`,
                      value: u[I.field] || "",
                      onChange: (O) => S(I.field, O),
                      onKeyDown: A,
                      onClick: (O) => O.stopPropagation(),
                      className: "mb-2"
                    }
                  ),
                  !V && /* @__PURE__ */ i("div", { className: "mb-2 text-xs text-muted-foreground px-2", children: [
                    "Showing top ",
                    Math.min(L.length, di),
                    " results. Use filter to search all."
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 max-h-[200px] overflow-y-auto", children: [
                    (!u[I.field] || u[I.field] === "") && /* @__PURE__ */ e(
                      z,
                      {
                        variant: "ghost",
                        className: "flex flex-row items-center justify-between p-2 h-auto",
                        onClick: () => C(I.field),
                        type: "button",
                        children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between w-full text-left", children: [
                          /* @__PURE__ */ e("span", { className: "truncate flex-1 mr-2 text-sm", children: "No value" }),
                          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                            G !== null && /* @__PURE__ */ i("span", { className: "text-xs text-muted-foreground shrink-0", children: [
                              "(",
                              G,
                              ")"
                            ] }),
                            j === "" && /* @__PURE__ */ e(Me, { className: "h-4 w-4" })
                          ] })
                        ] })
                      }
                    ),
                    L.length > 0 ? L.map((O) => /* @__PURE__ */ e(
                      z,
                      {
                        variant: "ghost",
                        className: "flex flex-row items-center justify-between p-2 h-auto",
                        onClick: () => b(I.field, O._id),
                        children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between w-full text-left", children: [
                          /* @__PURE__ */ e("span", { className: "truncate flex-1 mr-2 text-sm", title: O._id, children: O._id }),
                          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ i("span", { className: "text-xs text-muted-foreground shrink-50", children: [
                              "(",
                              O.count,
                              ")"
                            ] }),
                            j === O._id && /* @__PURE__ */ e(Me, { className: "h-4 w-4" })
                          ] })
                        ] })
                      },
                      O._id
                    )) : /* @__PURE__ */ e("div", { className: "p-2 text-sm text-muted-foreground text-center", children: "No options found" })
                  ] })
                ] })
              ]
            }
          )
        ] }, I.field);
      })
    ] }) })
  ] }) });
}
const fT = 1e3;
function bT({ label: t, placeholder: n, Icon: a, onSelection: o, onClear: r }) {
  const [s, l] = g(""), d = ge(null), c = () => {
    d.current && clearTimeout(d.current), o?.(s?.length ? s : void 0);
  }, u = (f) => {
    const p = f.target.value;
    l(p), d.current && clearTimeout(d.current), d.current = setTimeout(() => {
      o?.(p?.length ? p : void 0);
    }, fT);
  }, m = (f) => {
    f.stopPropagation(), f.key === "Enter" && (f.preventDefault(), c());
  };
  return M(() => {
    l(""), d.current && clearTimeout(d.current);
  }, [r]), M(() => () => {
    d.current && clearTimeout(d.current);
  }, []), /* @__PURE__ */ e("div", { className: D("relative flex w-full min-w-0 flex-col p-2 border-b border-sidebar-border"), children: /* @__PURE__ */ i(Bt, { defaultOpen: !1, className: "group/collapsible", children: [
    /* @__PURE__ */ i(Ht, { className: D("group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", "flex h-8 shrink-0 items-center rounded-md px-2 text-sm font-medium outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 hover:cursor-pointer mb-1"), children: [
      a && /* @__PURE__ */ e(a, { className: "mr-2" }),
      t,
      " ",
      /* @__PURE__ */ e(mt, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" })
    ] }),
    /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ e(
      pt,
      {
        value: s,
        onChange: u,
        onKeyDown: m,
        placeholder: n
      }
    ) })
  ] }) });
}
function Ta({ className: t, ...n }) {
  return /* @__PURE__ */ e(Vo.Root, { "data-slot": "switch", className: D("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer", t), ...n, children: /* @__PURE__ */ e(Vo.Thumb, { "data-slot": "switch-thumb", className: D("bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }) });
}
var on = /* @__PURE__ */ ((t) => (t[t.REGEX = 0] = "REGEX", t[t.EXACT = 1] = "EXACT", t[t.SELECTION_SINGLE = 2] = "SELECTION_SINGLE", t[t.SELECTION_MULTIPLE = 3] = "SELECTION_MULTIPLE", t))(on || {}), zn = /* @__PURE__ */ ((t) => (t[t.LIST = 0] = "LIST", t[t.TEXT = 1] = "TEXT", t[t.TEXT_AREA = 2] = "TEXT_AREA", t))(zn || {});
function eo(t) {
  if (!Array.isArray(t) || !t.length)
    return [];
  const n = t.map((a) => {
    const o = a._id != null ? String(a._id) : "Unknown";
    return {
      _id: a._id,
      name: o,
      count: a.count
    };
  });
  return n.sort((a, o) => String(a.name).localeCompare(String(o.name))), n;
}
function to(t, n) {
  if (!Array.isArray(t) || !t.length)
    return [];
  if (!n)
    return t;
  const a = t.map((o) => {
    const r = n.getTypeName(o._id) || "Document";
    return {
      _id: r !== "Document" ? o._id : "Document",
      name: r,
      count: o.count
    };
  });
  return a.sort((o, r) => o.name.localeCompare(r.name)), a;
}
function vT(t, n) {
  return !t || !n ? [] : n.filter((o) => o.field.startsWith("properties.")).map((o) => ({
    name: o.name,
    field: o.field,
    values: t[o.field] || [],
    match: o.match || !1
  }));
}
function ui(t, n) {
  return !t || !n ? [] : n.map((o) => {
    const r = t[o.field] || t[o.name] || [], s = /* @__PURE__ */ new Map();
    r.forEach((d) => {
      const c = d._id ?? "";
      typeof c == "string" && c.includes(",") && !c.includes(", ") ? c.split(",").map((m) => m.trim()).forEach((m) => {
        s.set(m, (s.get(m) || 0) + d.count);
      }) : s.set(c, (s.get(c) || 0) + d.count);
    });
    const l = Array.from(s.entries()).map(([d, c]) => ({ _id: d, count: c })).sort((d, c) => c.count - d.count);
    return {
      name: o.name,
      field: o.field,
      values: l,
      match: o.match || !1
    };
  });
}
function Mr(t) {
  if (!Array.isArray(t) || !t.length)
    return [];
  const n = t.filter((a) => !a._id?.startsWith("agent:agent:")).map((a) => {
    const o = a._id != null ? String(a._id) : "Unknown";
    return {
      _id: a._id,
      name: o,
      count: a.count
    };
  });
  return n.sort((a, o) => String(a.name).localeCompare(String(o.name))), n;
}
function xT(t, n, a) {
  if (!t) {
    a("Unknown User");
    return;
  }
  if (t.startsWith("agent:agent:")) {
    const l = t.substring(12).split(":"), d = l[0], c = l[1];
    n.users.retrieve(d).then((u) => {
      a(`Agent by ${u?.name || "Unknown User"} (${c})`);
    }).catch(() => {
      a(`Agent (${c})`);
    });
    return;
  }
  const o = t.indexOf(":"), r = o >= 0 ? t.substring(0, o) : t, s = o >= 0 ? t.substring(o + 1) : "";
  if (!s) {
    a("Unknown User");
    return;
  }
  r === "user" ? n.users.retrieve(s).then((l) => {
    a(l?.name || "Unknown User");
  }).catch(() => {
    a("Unknown User");
  }) : a(r === "system" ? "System" : r === "service_account" ? `Service Account (${s})` : r === "apikey" ? `API Key (${s})` : r === "agent:agent" ? `Agent (${s})` : "Unknown User");
}
const mi = "auto-search-state", pi = (t) => (n) => t.find((o) => o._id === n)?.name || String(n);
function yT({ properties: t, statuses: n, types: a, users: o, simpleProperties: r = [], onFiltersChange: s, onSearch: l, onClearFilters: d }) {
  const { t: c } = K("common"), { client: u } = de(), [m, f] = g({}), p = (I) => {
    I === void 0 ? (delete m.date, f({ ...m })) : f({ ...m, date: I });
  }, h = (I) => {
    I === void 0 ? (delete m.properties, f({ ...m })) : f({ ...m, properties: I });
  }, b = (I) => {
    I === void 0 ? (delete m.type, f({ ...m })) : f({ ...m, type: I });
  }, C = (I) => {
    I === void 0 ? (delete m.status, f({ ...m })) : f({ ...m, status: I });
  }, y = (I) => {
    I === void 0 ? (delete m.user, f({ ...m })) : f({ ...m, user: I });
  }, v = (I) => {
    I === void 0 ? (delete m.vectorText, f({ ...m })) : f({ ...m, vectorText: I });
  }, [x, N] = g(0), [w, A] = g(localStorage.getItem(mi) === "auto"), S = (I) => {
    localStorage.setItem(mi, I ? "auto" : "manual"), A(I), I && N(x + 1);
  };
  return M(() => {
    s(m), w && N(x + 1);
  }, [m]), M(() => {
    l();
  }, [x]), M(() => {
    f({});
  }, [d]), /* @__PURE__ */ i("div", { className: "h-full flex w-[var(--filterbar-width)] min-w-[var(--filterbar-width)] flex-shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border", children: [
    /* @__PURE__ */ i("div", { className: "h-full flex flex-col overflow-auto", children: [
      /* @__PURE__ */ e(bT, { label: c("filters.semanticSearch"), placeholder: c("filters.semanticSearchPlaceholder"), Icon: rl, onClear: d, onSelection: v }),
      (r.length > 0 || (t?.length ?? 0) > 0) && /* @__PURE__ */ e(gT, { label: c("filters.propertySearch"), Icon: Ri, simpleProperties: r, advancedProperties: t, onClear: d, onSelection: h }),
      /* @__PURE__ */ e(_n, { label: c("filters.types"), items: a, onClear: d, onSelection: b, getLabelFn: pi(a) }),
      /* @__PURE__ */ e(_n, { label: c("filters.statuses"), items: n, onClear: d, onSelection: C, getLabelFn: pi(n) }),
      /* @__PURE__ */ e(uT, { section: "Calendar", Icon: sl, onClear: d, onSelection: p }),
      /* @__PURE__ */ e(_n, { label: c("filters.users"), items: o, onClear: d, onSelection: y, transform: xT, client: u })
    ] }),
    /* @__PURE__ */ i("div", { className: "w-full p-2 text-center", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(Ta, { id: "search-mode", checked: w, onCheckedChange: S }),
        /* @__PURE__ */ e(ne, { htmlFor: "search-mode", className: "text-xs", children: c("filters.autoSearch") })
      ] }),
      /* @__PURE__ */ e(z, { onClick: l, disabled: w, className: "mt-2 w-full hover:cursor-pointer", children: c("actions.search") })
    ] })
  ] });
}
function NT(t) {
  return !t || typeof t != "object" ? {} : Object.fromEntries(
    Object.entries(t).filter(
      ([n, a]) => a != null && a !== "" && n !== "name"
    )
  );
}
class oa {
  _value;
  watchers = [];
  constructor(n) {
    this._value = n;
  }
  get value() {
    return this._value;
  }
  set value(n) {
    if (n !== this._value) {
      this._value = n;
      for (const a of this.watchers)
        a(n);
    }
  }
  addWatcher(n) {
    return this.watchers.push(n), () => {
      this.watchers = this.watchers.filter((a) => a !== n);
    };
  }
}
function ko(t) {
  const [n, a] = g(t.value);
  return M(() => t.addWatcher((o) => {
    a(typeof o == "function" ? () => o : o);
  }), [t]), n;
}
const wT = 100;
class CT {
  constructor(n, a = wT) {
    this.client = n, this.limit = a, this.result = new oa({
      objects: [],
      isSearching: !1,
      hasMore: !0
    });
  }
  client;
  limit;
  collectionId;
  facets = new oa({});
  result = new oa({ objects: [], isSearching: !1, hasMore: !0 });
  facetSpecs = [];
  query = {};
  _pendingSearch = !1;
  withFacets(n) {
    return this.facetSpecs = n, this;
  }
  get objects() {
    return this.result.value.objects;
  }
  get error() {
    return this.result.value.error;
  }
  get isRunning() {
    return this.result.value.isSearching;
  }
  get hasMore() {
    return this.result.value.hasMore;
  }
  getFilterValue(n) {
    return this.query[n];
  }
  setFilterValue(n, a) {
    this.query[n] = a, this.search();
  }
  clearFilters(n = !0) {
    const a = this.query.parent;
    this.query = {
      parent: a
    }, n && this.search();
  }
  getFacetBuckets(n) {
    return this.facets.value[n]?.buckets || [];
  }
  resetFacets() {
    this.query = {};
  }
  reset(n = !0) {
    this.result.value = {
      objects: [],
      isSearching: n,
      error: void 0,
      hasMore: !0
    };
  }
  _updateRunningState(n) {
    this.result.value = {
      objects: this.objects,
      isSearching: n,
      error: this.error,
      hasMore: this.hasMore
    };
  }
  _searchRequest(n, a, o, r = !0) {
    const s = {
      limit: a,
      offset: o,
      query: { ...n, all_revisions: !1 },
      facets: r ? this.facetSpecs : void 0
    };
    return this.collectionId ? this.client.collections.searchMembers(this.collectionId, s) : this.client.objects.search(s);
  }
  async _search(n = !1) {
    if (this.isRunning)
      return Promise.resolve(!1);
    this._pendingSearch = !1, this.result.value = {
      isSearching: !0,
      objects: n ? this.objects : [],
      error: void 0,
      hasMore: !0
    };
    const a = this.limit, o = this.objects.length;
    try {
      const r = await this._searchRequest(this.query, a, o, !0), s = r.results || [], l = r.facets || {};
      return this.result.value = {
        isSearching: !1,
        objects: n ? this.objects.concat(s) : s,
        hasMore: s.length === a
      }, this.facets.value = l, this._pendingSearch ? this._search(!1) : !0;
    } catch (r) {
      if (this.result.value = {
        error: r instanceof Error ? r : new Error(String(r)),
        isSearching: !1,
        objects: this.objects,
        hasMore: this.hasMore
      }, this._pendingSearch)
        return this._search(!1);
      throw r;
    }
  }
  search() {
    return this.isRunning ? (this._pendingSearch = !0, Promise.resolve(!1)) : this._search(!1);
  }
  loadMore() {
    return this.isRunning || this.query.vector ? Promise.resolve(!1) : this._search(!0);
  }
}
const Or = pn(void 0);
function jr() {
  return Et(Or);
}
function Br() {
  return ko(jr().facets);
}
function Hr() {
  const t = jr();
  return { ...ko(t.result), search: t };
}
function Vr({ children: t, limit: n, facets: a, collectionId: o }) {
  const { store: r } = de(), s = ce(() => {
    const l = a || [], d = new CT(r, n).withFacets(l);
    return d.collectionId = o, d;
  }, [o, a, n, r]);
  return /* @__PURE__ */ e(Or.Provider, { value: s, children: t });
}
const ST = [
  { key: "name", label: "Name", type: "string" },
  { key: "type.name", label: "Type", type: "string" },
  { key: "created_at", label: "Created At", type: "date" },
  { key: "updated_at", label: "Updated At", type: "date" }
], qr = [
  { name: "status", field: "status" },
  { name: "type", field: "type" },
  { name: "created_by", field: "created_by" }
];
function AT({ children: t, onMultipleSelection: n, typeRegistry: a, columns: o = ST, facetConfig: r = qr, selectionMode: s = "multiple" }) {
  const l = Ie(), { hasMore: d, search: c, isSearching: u, error: m, objects: f } = Hr(), p = Br(), h = ce(() => a?.types || [], [a?.types]), [b, C] = g("list"), [y, v] = g({}), [x, N] = g([]), [w, A] = g([]), [S, I] = g([]), [L, V] = g([]), [G, R] = g([]), [j, O] = g(!1), [Q, ee] = g(0), [te, k] = g(!1), _ = async () => {
    const E = y?.properties?.full_text, H = y?.vectorText, P = H ? { text: H, config: { text: !0, image: !0, properties: !0 } } : void 0, B = NT(y?.properties), W = y ? {
      createdFrom: y?.date?.createdFrom,
      createdTo: y?.date?.createdTo,
      updatedFrom: y?.date?.updatedFrom,
      updatedTo: y?.date?.updatedTo,
      full_text: E,
      name: y?.property?.name,
      status: y?.status,
      types: y?.type ? [y.type] : h.map((le) => le.id),
      vector: P,
      match: {
        created_by: y?.user,
        ...B
      }
    } : {};
    c.query = W, c.search(), k(!0);
  }, q = () => {
    O(!0), c.loadMore().then(() => {
      O(!1);
    }).catch(() => {
      O(!1);
    });
  }, $ = () => {
    ee(Q + 1);
  }, T = J((E) => {
    R(E);
  }, []), X = J((E) => {
    R((H) => H.some((B) => B.id === E.id) ? H.filter((B) => B.id !== E.id) : s === "single" ? [E] : [...H, E]);
  }, [s]), U = J(() => {
    n(G);
  }, [n, G]);
  return M(() => {
    m && l({
      status: "error",
      title: "Error while searching documents",
      description: m.message,
      duration: 5e3
    });
  }, [m]), M(() => {
    p?.total && delete p.total, I(to(p.type, a)), N(eo(p.status)), V(Mr(p.created_by)), A(vT(p, r));
  }, [p]), M(() => {
    _();
  }, []), /* @__PURE__ */ i("div", { className: "flex h-full w-full", children: [
    /* @__PURE__ */ e(
      yT,
      {
        properties: w,
        statuses: x,
        types: S,
        users: L,
        onFiltersChange: v,
        onSearch: () => _(),
        onClearFilters: Q
      }
    ),
    /* @__PURE__ */ i("div", { className: "w-full h-full flex flex-col gap-2", children: [
      /* @__PURE__ */ i("div", { className: "w-full flex flex-row gap-2 items-center justify-between p-2 pb-0", children: [
        /* @__PURE__ */ e("div", { className: "flex h-10 gap-2 items-center", children: /* @__PURE__ */ e(sT, { viewMode: b, onViewModeChange: C }) }),
        /* @__PURE__ */ i("div", { className: "flex h-10 gap-2 items-center", children: [
          G.length !== 0 && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ i("span", { className: "text-sm text-muted-foreground", children: [
              G.length,
              " document",
              G.length > 1 ? "s" : "",
              " selected"
            ] }),
            /* @__PURE__ */ e(z, { variant: "ghost", className: "text-muted-foreground", onClick: () => R([]), children: /* @__PURE__ */ e(De, {}) }),
            /* @__PURE__ */ i(z, { onClick: U, children: [
              /* @__PURE__ */ e(ll, {}),
              "Confirm Selection"
            ] })
          ] }),
          y && (Object.keys(y?.properties ?? {}).length > 0 || Object.keys(y?.matches ?? {}).length > 0) && /* @__PURE__ */ i(z, { onClick: $, children: [
            /* @__PURE__ */ e(qa, {}),
            "Clear Filters"
          ] }),
          t
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex-grow w-full overflow-auto px-2", children: b === "list" ? /* @__PURE__ */ e(
        oT,
        {
          columns: o,
          data: f,
          loading: u,
          loadingMore: j,
          hasMore: d,
          loadMore: q,
          onMultipleSelection: T,
          selection: G,
          hasSearched: te,
          selectionMode: s
        }
      ) : /* @__PURE__ */ e(
        rT,
        {
          data: f,
          loading: u,
          loadingMore: j,
          hasMore: d,
          loadMore: q,
          selection: G,
          onToggleSelection: X,
          hasSearched: te,
          typeRegistry: a
        }
      ) })
    ] })
  ] });
}
function Ia({ children: t, onSelection: n, columns: a, facetConfig: o, selectionMode: r = "multiple", disabled: s = !1 }) {
  const [l, d] = g(!1), { registry: c } = tt();
  return /* @__PURE__ */ i("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => !s && d(!0),
        className: `w-full align-left ${s ? "cursor-not-allowed opacity-50 pointer-events-none" : "cursor-pointer"}`,
        "aria-disabled": s,
        children: t
      }
    ),
    l && /* @__PURE__ */ e("div", { className: "z-50 fixed w-full inset-0 bg-overlay flex justify-end top-0", children: /* @__PURE__ */ e("div", { className: "h-full w-full bg-background shadow-lg p-0 relative animate-in slide-in-from-bottom duration-300", children: /* @__PURE__ */ e(Vr, { facets: o || qr, children: /* @__PURE__ */ e(
      AT,
      {
        onMultipleSelection: (m) => {
          n(m), d(!1);
        },
        typeRegistry: c,
        columns: a,
        facetConfig: o,
        selectionMode: r,
        children: /* @__PURE__ */ e(z, { onClick: () => d(!1), variant: "outline", children: /* @__PURE__ */ e(De, {}) })
      }
    ) }) }) })
  ] });
}
function Gr({ onSelection: t, onMultipleSelection: n }) {
  return /* @__PURE__ */ e(
    Ia,
    {
      onSelection: (o) => {
        n ? n(o) : t && o.length > 0 && t(o[0]);
      },
      selectionMode: n ? "multiple" : "single",
      children: /* @__PURE__ */ e(z, { variant: "outline", size: "icon", type: "button", className: "h-9 w-9", children: /* @__PURE__ */ e(Mt, { className: "h-4 w-4" }) })
    }
  );
}
const Wr = ie.forwardRef(
  ({ className: t, value: n = 0, title: a, subtitle: o, showLabel: r = !1, ...s }, l) => {
    const d = Math.max(0, Math.min(100, n));
    return r || a || o ? /* @__PURE__ */ i("div", { ref: l, className: D("flex flex-col gap-1", t), ...s, children: [
      /* @__PURE__ */ i("div", { className: "flex justify-between items-center", children: [
        a && /* @__PURE__ */ e("div", { className: "text-md font-medium", children: a }),
        o && /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground", children: o })
      ] }),
      /* @__PURE__ */ e("div", { className: "w-full bg-muted rounded-full h-2", children: /* @__PURE__ */ e(
        "div",
        {
          className: "bg-primary h-2 rounded-full transition-all duration-300 ease-out",
          style: { width: `${d}%` }
        }
      ) })
    ] }) : /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        className: D("relative h-2 w-full overflow-hidden rounded-full bg-muted", t),
        ...s,
        children: /* @__PURE__ */ e(
          "div",
          {
            className: "h-full bg-primary transition-all duration-300 ease-out",
            style: { width: `${d}%` }
          }
        )
      }
    );
  }
);
Wr.displayName = "Progress";
function DT(t, n) {
  return n.some((a) => t === a || t.startsWith(a + "/"));
}
function hi(t, n) {
  return !n || n.length === 0 ? t : t.filter((a) => DT(a.type, n));
}
const gi = 50;
function TT(t) {
  const n = t.type;
  return n.startsWith("image/") ? /* @__PURE__ */ e(fn, { className: "size-4 text-muted-foreground" }) : n.startsWith("video/") ? /* @__PURE__ */ e(Bn, { className: "size-4 text-muted-foreground" }) : n.startsWith("audio/") ? /* @__PURE__ */ e(Hn, { className: "size-4 text-muted-foreground" }) : n.includes("pdf") || n.includes("document") || n.includes("text") ? /* @__PURE__ */ e(Je, { className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ e(wt, { className: "size-4 text-muted-foreground" });
}
function IT(t) {
  return t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function PT({ file: t, onRemove: n }) {
  return /* @__PURE__ */ i("div", { className: "border flex items-center gap-3 p-2.5 bg-background rounded-lg group hover:border-primary hover:shadow-xs transition-colors", children: [
    /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: TT(t) }),
    /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", children: t.name }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: IT(t.size) })
    ] }),
    /* @__PURE__ */ e(
      z,
      {
        variant: "ghost",
        size: "xs",
        className: "opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive",
        onClick: (a) => {
          a.stopPropagation(), n();
        },
        "aria-label": `Remove ${t.name}`,
        children: /* @__PURE__ */ e(De, { className: "size-4" })
      }
    )
  ] });
}
function kT({ fileStatus: t }) {
  const { t: n } = K("common"), { file: a, status: o, message: r, action: s } = t;
  return /* @__PURE__ */ i("div", { className: D(
    "flex items-center gap-3 p-2.5 rounded-lg transition-colors",
    o === "error" ? "bg-destructive/10" : "bg-muted/50"
  ), children: [
    /* @__PURE__ */ i("div", { className: "flex-shrink-0", children: [
      o === "pending" && /* @__PURE__ */ e(wt, { className: "size-5 text-muted-foreground" }),
      o === "uploading" && /* @__PURE__ */ e(fe, { className: "size-5 animate-spin text-primary" }),
      o === "success" && /* @__PURE__ */ e(dl, { className: "size-5 text-success" }),
      o === "error" && /* @__PURE__ */ e(co, { className: "size-5 text-destructive" })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ e("p", { className: D(
        "text-sm font-medium truncate",
        o === "error" && "text-destructive"
      ), children: a.name }),
      /* @__PURE__ */ i("p", { className: "text-xs text-muted-foreground", children: [
        o === "pending" && n("states.waiting"),
        o === "uploading" && n("states.uploading"),
        o === "success" && n(s === "create" ? "states.uploadedSuccessfully" : s === "update" ? "states.updated" : "states.skipped"),
        o === "error" && (r || n("states.uploadFailed"))
      ] })
    ] })
  ] });
}
function Ur({
  open: t,
  collectionId: n,
  typeId: a,
  initialFiles: o,
  maxFiles: r,
  filteredTypes: s,
  onOpenChange: l,
  onUploadDone: d
}) {
  const { t: c } = K("common"), { client: u } = de(), m = Ie(), f = ge(null), p = ge(!1), [h, b] = g(
    "SELECT"
    /* SELECT */
  ), [C, y] = g([]), [v, x] = g([]), [N, w] = g(0), [A, S] = g(!1), [I, L] = g(null), V = ce(() => r ? C.length >= r : !1, [r, C.length]), G = h === "UPLOADING";
  M(() => {
    C.length > 0 && h === "SELECT" && x(
      C.map((H) => ({
        file: H,
        status: "pending",
        progress: 0,
        action: "create"
      }))
    );
  }, [C, h]), M(() => {
    if (v.length > 0) {
      const H = v.filter((B) => B.status === "success" || B.status === "error").length, P = Math.round(H / v.length * 100);
      w(P);
    }
  }, [v]), M(() => {
    if (t && o && o.length > 0 && !p.current) {
      p.current = !0;
      const H = hi(o, s);
      y((P) => {
        const B = [...P, ...H];
        return r && B.length > r ? B.slice(0, r) : B;
      });
    }
  }, [t, o, r, s]);
  const R = J((H) => {
    const P = hi(H, s), B = H.length - P.length;
    if (P.length === 0 && H.length > 0) {
      m({
        status: "error",
        title: c("upload.invalidFileType"),
        description: c("upload.invalidFileTypeDescription"),
        duration: 3e3
      });
      return;
    }
    B > 0 && m({
      status: "warning",
      title: c("upload.someFilesIgnored"),
      description: c("upload.filesIgnored", { count: B }),
      duration: 3e3
    }), y((W) => {
      const le = [...W, ...P];
      return r && le.length > r ? (m({
        status: "warning",
        title: c("upload.fileLimitReached"),
        description: c("upload.maxFilesAllowed", { max: r }),
        duration: 3e3
      }), le.slice(0, r)) : le;
    });
  }, [s, r, m]), j = J((H) => {
    if (V || G) return;
    const P = H.clipboardData?.items;
    if (!P) return;
    const B = [];
    for (let W = 0; W < P.length; W++) {
      const le = P[W].getAsFile();
      le && B.push(le);
    }
    B.length > 0 && R(B);
  }, [V, G, R]), O = J(() => {
    y([]), x([]), w(0), b(
      "SELECT"
      /* SELECT */
    ), L(null), p.current = !1;
  }, []), Q = J(() => {
    l(!1), O();
  }, [l, O]), ee = J((H) => {
    H.preventDefault(), !V && !G && S(!0);
  }, [V, G]), te = J((H) => {
    H.preventDefault(), S(!1);
  }, []), k = J((H) => {
    if (H.preventDefault(), S(!1), V || G) return;
    const P = Array.from(H.dataTransfer.files);
    R(P);
  }, [V, G, R]), _ = J((H) => {
    if (H.target.files) {
      const P = Array.from(H.target.files);
      R(P), H.target.value = "";
    }
  }, [R]), q = J((H) => {
    y((P) => P.filter((B, W) => W !== H));
  }, []), $ = J((H, P) => {
    x((B) => B.map((W) => W.file === H ? { ...W, ...P } : W));
  }, []), T = async (H, P) => {
    const B = [];
    for (let W = 0; W < H.length; W += gi)
      B.push(H.slice(W, W + gi));
    for (const W of B)
      await Promise.all(
        W.map(async (le) => {
          try {
            $(le, {
              status: "uploading",
              progress: 20
            });
            const me = {
              type: a || void 0,
              content: le,
              location: le.webkitRelativePath || le.name
            }, ze = {
              collection_id: n
            }, Pe = await u.store.objects.create(me, ze);
            $(le, {
              status: "success",
              progress: 100,
              id: Pe.id
            }), P.uploadedFiles.push({
              id: Pe.id,
              name: le.name,
              type: a || null,
              status: "created",
              location: Pe.location
            }), P.objects.push(Pe);
          } catch (me) {
            $(le, {
              status: "error",
              progress: 100,
              message: me instanceof Error ? me.message : "Unknown error"
            }), P.failedFiles.push({
              name: le.name,
              error: me instanceof Error ? me.message : "Unknown error",
              status: "failed",
              location: le.webkitRelativePath || le.name,
              type: a || null
            }), P.success = !1;
          }
        })
      );
  }, X = async () => {
    if (!u || !C.length) return;
    b(
      "UPLOADING"
      /* UPLOADING */
    );
    const H = {
      success: !0,
      objects: [],
      uploadedFiles: [],
      skippedFiles: [],
      failedFiles: []
    };
    try {
      await T(C, H), x((P) => {
        const B = P.filter((W) => W.status === "pending");
        return B.length > 0 && (B.forEach((W) => {
          H.failedFiles.push({
            name: W.file.name,
            error: "Upload process interrupted",
            status: "failed",
            type: a || null
          });
        }), H.success = !1), P.map(
          (W) => W.status === "pending" ? { ...W, status: "error", progress: 100, message: "Upload process interrupted" } : W
        );
      }), L(H), b(
        "DONE"
        /* DONE */
      ), d(H.objects);
    } catch (P) {
      m({
        status: "error",
        title: c("states.uploadFailed"),
        description: P instanceof Error ? P.message : "An unexpected error occurred",
        duration: 5e3
      }), b(
        "SELECT"
        /* SELECT */
      );
    }
  }, U = I?.uploadedFiles.length ?? 0, E = I?.failedFiles.length ?? 0;
  return /* @__PURE__ */ e(Wn, { open: t, onOpenChange: l, children: /* @__PURE__ */ i(Nn, { className: "max-w-xl", children: [
    /* @__PURE__ */ i(wn, { children: [
      /* @__PURE__ */ i(Cn, { children: [
        h === "SELECT" && c("upload.uploadDocuments"),
        h === "UPLOADING" && c("upload.uploading"),
        h === "DONE" && c("upload.uploadComplete")
      ] }),
      /* @__PURE__ */ i(Ao, { children: [
        h === "SELECT" && c("upload.addFilesDescription"),
        h === "UPLOADING" && c("upload.uploadingFiles", { count: C.length }),
        h === "DONE" && (E > 0 ? `${U} uploaded, ${E} failed` : c("upload.uploadSuccess", { count: U }))
      ] })
    ] }),
    h === "SELECT" && /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ i(
        "div",
        {
          onPaste: j,
          onDragOver: ee,
          onDragLeave: te,
          onDrop: k,
          onClick: () => !V && f.current?.click(),
          className: D(
            "relative flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200",
            A ? "border-primary bg-primary/5 scale-[1.01]" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50",
            V && "opacity-50 cursor-not-allowed"
          ),
          role: "button",
          tabIndex: 0,
          "aria-label": "File upload area",
          onKeyDown: (H) => {
            (H.key === "Enter" || H.key === " ") && !V && (H.preventDefault(), f.current?.click());
          },
          children: [
            /* @__PURE__ */ e("div", { className: D(
              "flex items-center justify-center size-14 rounded-full transition-colors",
              A ? "bg-primary/10" : "bg-muted"
            ), children: /* @__PURE__ */ e(cl, { className: D(
              "size-7 transition-colors",
              A ? "text-primary" : "text-muted-foreground"
            ) }) }),
            /* @__PURE__ */ i("div", { className: "text-center", children: [
              /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: A ? "Drop files here" : c("upload.clickToBrowse") }),
              /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: c("upload.pasteFromClipboard") })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: f,
                type: "file",
                className: "hidden",
                multiple: !0,
                onChange: _,
                "aria-label": "Select files to upload",
                disabled: V
              }
            )
          ]
        }
      ),
      C.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ i("span", { className: "text-muted-foreground", children: [
          c("upload.filesSelected", { count: C.length }),
          r && /* @__PURE__ */ i("span", { className: "text-muted-foreground/70", children: [
            " (max ",
            r,
            ")"
          ] })
        ] }),
        V && /* @__PURE__ */ e("span", { className: "text-attention text-xs", children: c("upload.fileLimitReached") })
      ] }),
      C.length > 0 && /* @__PURE__ */ e(Nt, { className: "max-h-56", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: C.map((H, P) => /* @__PURE__ */ e(
        PT,
        {
          file: H,
          onRemove: () => q(P)
        },
        `${H.name}-${H.size}-${P}`
      )) }) })
    ] }),
    (h === "UPLOADING" || h === "DONE") && /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ e("span", { className: "font-medium", children: c(h === "UPLOADING" ? "upload.uploadingProgress" : "upload.uploadComplete") }),
          /* @__PURE__ */ i("span", { className: "text-muted-foreground", children: [
            N,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e(Wr, { value: N, className: D(
          h === "DONE" && E > 0 && "[&>div]:bg-attention"
        ) })
      ] }),
      /* @__PURE__ */ e(Nt, { className: "max-h-72", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: v.map((H, P) => /* @__PURE__ */ e(
        kT,
        {
          fileStatus: H
        },
        `${H.file.name}-${P}`
      )) }) })
    ] }),
    /* @__PURE__ */ e(Un, { children: /* @__PURE__ */ i("div", { className: "flex justify-end items-center w-full gap-3", children: [
      h === "SELECT" && /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e(z, { variant: "outline", onClick: Q, children: c("actions.cancel") }),
        /* @__PURE__ */ i(z, { onClick: X, disabled: !C.length, children: [
          c("upload.uploadDocuments"),
          " ",
          C.length > 0 && `(${C.length})`
        ] })
      ] }),
      h === "UPLOADING" && /* @__PURE__ */ i(z, { variant: "outline", disabled: !0, children: [
        /* @__PURE__ */ e(fe, { className: "size-4 animate-spin" }),
        c("upload.uploading")
      ] }),
      h === "DONE" && /* @__PURE__ */ e(z, { onClick: Q, children: c("actions.done") })
    ] }) })
  ] }) });
}
function _o({ collectionId: t, typeId: n, onUploadDone: a }) {
  const { t: o } = K("common"), [r, s] = g(!1);
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i(z, { variant: "outline", size: "icon", onClick: () => {
      s(!0);
    }, className: "h-8 w-8 sm:h-9 sm:w-auto sm:px-3 sm:gap-2", children: [
      /* @__PURE__ */ e(bn, { className: "h-4 w-4" }),
      /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: o("actions.upload") })
    ] }),
    /* @__PURE__ */ e(Ur, { open: r, onOpenChange: s, collectionId: t, typeId: n, onUploadDone: a })
  ] });
}
function Kr({ htmlFor: t, required: n, children: a }) {
  return /* @__PURE__ */ i("label", { htmlFor: t, children: [
    a,
    n && /* @__PURE__ */ e("sup", { style: { color: "red " }, children: "*" })
  ] });
}
function Yr({ children: t }) {
  return /* @__PURE__ */ e(ne, { className: "mt-2 text-start font-light", children: t });
}
const _T = pn(void 0);
_T.Provider;
const Xr = pn(void 0);
function ET() {
  const t = Et(Xr);
  if (!t)
    throw new Error("useForm must be used within a Form element");
  return t;
}
const zT = Xr.Provider;
function FT({ object: t, components: n, onSubmit: a, children: o, onChange: r }) {
  const s = (l) => {
    l.stopPropagation(), l.preventDefault(), a?.(t.value);
  };
  return t.observer = r, /* @__PURE__ */ e(zT, { value: { object: t, components: n || {} }, children: /* @__PURE__ */ e("form", { className: "w-full", onSubmit: s, children: o }) });
}
function LT() {
  const t = ET();
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-6", children: t.object.properties.map(Qr) });
}
function RT({ children: t, ...n }) {
  return /* @__PURE__ */ i(FT, { ...n, children: [
    /* @__PURE__ */ e(LT, {}),
    t
  ] });
}
function Qr(t) {
  return t.isList ? /* @__PURE__ */ e(es, { object: t }, t.name) : t.isObject ? /* @__PURE__ */ e(Jr, { object: t }, t.name) : /* @__PURE__ */ e(Zr, { object: t }, t.name);
}
function $T(t, n) {
  return t.isList ? /* @__PURE__ */ e(es, { object: t }, t.name) : t.isObject ? /* @__PURE__ */ e(Jr, { object: t }) : /* @__PURE__ */ e(Zr, { object: t, editor: n });
}
function Zr({ object: t, editor: n }) {
  return n || (n = t.schema.editor), t.getInputType() === "checkbox" ? /* @__PURE__ */ e(OT, { object: t }) : n === "media" || n === "document" ? /* @__PURE__ */ e(BT, { object: t }) : /* @__PURE__ */ e(MT, { object: t });
}
function MT({ object: t }) {
  const { t: n } = K("common"), [a, o] = g(t.value), r = t.getInputType(), s = r === "textarea", l = (d) => {
    const { value: c } = d.target;
    o(c), t.value = t.schema.isNumber ? parseFloat(c) : c;
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5 w-full", children: [
      /* @__PURE__ */ e(ne, { htmlFor: t.name, children: t.isListItem ? "" : /* @__PURE__ */ e(Kr, { required: t.schema.isRequired, children: t.title }) }),
      s ? /* @__PURE__ */ e(pt, { id: t.name, value: a, onChange: l, placeholder: n("form.enterTextHere"), className: "w-full p-2 border border-border rounded-md h-8" }) : /* @__PURE__ */ e(be, { id: t.name, value: a, onChange: l, type: r, placeholder: n("form.enterValueHere") })
    ] }),
    t.schema.description && /* @__PURE__ */ e(Yr, { children: t.schema.description })
  ] });
}
function OT({ object: t }) {
  const [n, a] = g(t.value), o = (r) => {
    a(r), t.value = r;
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ e(Ta, { id: t.name, checked: n, onCheckedChange: o, className: `${t.isListItem ? "" : "mr-2"}` }),
      !t.isListItem && /* @__PURE__ */ e(Kr, { required: t.schema.isRequired, children: t.title })
    ] }),
    t.schema.description && /* @__PURE__ */ e(Yr, { children: t.schema.description })
  ] });
}
function jT(t) {
  if (!t.value)
    return "";
  let n = t.value;
  return n.startsWith("store:") && (n = n.substring(6)), n;
}
function BT({ object: t }) {
  const { t: n } = K("common"), { client: a } = de(), [o, r] = g(void 0), [, s] = g(jT(t)), l = (u) => {
    s(u.id), t.value = u ? `store:${u.id.toString()}` : "", r(u.name);
  }, d = (u) => {
    u.length > 0 && l(u[0]);
  }, c = () => {
    if (!t || !t.value || !a) {
      r(void 0);
      return;
    }
    let u = t.value;
    u.startsWith("store:") ? (u = u.substring(6), a.objects.retrieve(u).then((m) => {
      r(m.properties.title || m.name || `store:${u}`);
    }).catch(() => {
      r(`store:${u}`);
    })) : r(u);
  };
  return M(() => {
    c();
  }, [t.value, a]), /* @__PURE__ */ e("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-row items-center", children: /* @__PURE__ */ i("div", { className: "flex flex-col w-full gap-1", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col min-w-0 flex-1", children: /* @__PURE__ */ e(ne, { htmlFor: t.name, className: "truncate", children: /* @__PURE__ */ i("span", { className: "truncate", children: [
      t.title,
      t.schema.isRequired && /* @__PURE__ */ e("sup", { style: { color: "red " }, children: "*" })
    ] }) }) }),
    /* @__PURE__ */ i("div", { className: "flex flex-row gap-2 w-full", children: [
      /* @__PURE__ */ e(be, { value: o, placeholder: n("form.selectOrUploadDocument"), readOnly: !0 }),
      /* @__PURE__ */ i("div", { className: "flex flex-row gap-2 flex-shrink-0", children: [
        /* @__PURE__ */ e(Gr, { onSelection: l }),
        /* @__PURE__ */ e(_o, { onUploadDone: d })
      ] })
    ] }),
    t.schema.description && /* @__PURE__ */ e(ne, { className: "text-start font-light truncate text-xs text-muted-foreground", children: t.schema.description })
  ] }) }) });
}
function Jr({ object: t }) {
  return /* @__PURE__ */ i("div", { className: "border border-border rounded-lg p-4", children: [
    !t.isListItem && /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ e("span", { className: "font-semibold text-start", children: t.title }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: t.properties.map(Qr) })
  ] });
}
function es({ object: t }) {
  const n = t.schema.arraySchema.editor, [a, o] = g(t.value || []);
  if (n === "document" || n === "media")
    return /* @__PURE__ */ e(HT, { object: t });
  const r = () => {
    t.add(), o([...t.value]);
  }, s = (l) => {
    t.remove(l), o([...t.value]);
  };
  return /* @__PURE__ */ i("div", { children: [
    !t.isListItem && /* @__PURE__ */ i("div", { className: `flex flex-row items-center justify-between min-w-0 ${t.items?.length ? "mb-1" : ""}`, children: [
      /* @__PURE__ */ e("span", { className: "font-semibold text-start truncate flex-1 mr-4", children: t.title }),
      /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: r, type: "button", className: "flex items-center gap-1 flex-shrink-0", children: /* @__PURE__ */ e(jn, {}) })
    ] }),
    t.items?.length >= 1 && /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 w-full", children: t.items.map((l, d) => /* @__PURE__ */ e(VT, { object: l, list: t, onDelete: () => s(d) }, `${d}-${a[d] ?? ""}`)) })
  ] });
}
function HT({ object: t }) {
  const { t: n } = K("common"), { client: a } = de(), [o, r] = g(t.value || []), [s, l] = g([]), d = (p) => {
    p.length !== 0 && (p.forEach((h) => {
      c(h);
    }), r([...t.value]), f());
  }, c = (p) => t.items.some((h) => h.value === `store:${p.id}`) ? !1 : (t.add(), t.items[t.items.length - 1].value = `store:${p.id}`, !0), u = (p) => {
    t.remove(p), r([...t.value]), l((h) => h.filter((b, C) => C !== p));
  }, m = async (p) => {
    if (!p || !a)
      return p;
    let h = p;
    p.startsWith("store:") && (h = p.substring(6));
    try {
      const b = await a.objects.retrieve(h);
      return b.properties?.title || b.name || `store:${h}`;
    } catch (b) {
      return console.error("Failed to load document name:", b), `store:${h}`;
    }
  }, f = async () => {
    if (!a || !t.items?.length) {
      l([]);
      return;
    }
    const p = t.items.map((h) => m(h.value));
    try {
      const h = await Promise.all(p);
      l(h);
    } catch (h) {
      console.error("Failed to load document names:", h), l(t.items.map((b) => b.value));
    }
  };
  return M(() => {
    f();
  }, [t.items?.length, a]), M(() => {
    t.value = o;
  }, [o]), /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-row items-center justify-between min-w-0", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col min-w-0 flex-1 mr-4", children: [
        /* @__PURE__ */ i(ne, { htmlFor: t.name, className: "truncate", children: [
          /* @__PURE__ */ i("span", { className: "truncate", children: [
            t.title,
            t.schema.isRequired && /* @__PURE__ */ e("sup", { style: { color: "red " }, children: "*" })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground ml-1", children: "(select or upload)" })
        ] }),
        t.schema.arraySchema.description && /* @__PURE__ */ e(ne, { className: "text-start font-light truncate text-xs text-muted-foreground", children: t.schema.arraySchema.description })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-row gap-2 flex-shrink-0", children: [
        /* @__PURE__ */ e(Gr, { onMultipleSelection: d }),
        /* @__PURE__ */ e(_o, { onUploadDone: d })
      ] })
    ] }),
    t.items?.length >= 1 && /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 w-full", children: t.items.map((p, h) => /* @__PURE__ */ i("div", { className: "flex flex-row w-full gap-2 hover:bg-muted/50 hover:rounded-md min-w-0", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-1 gap-4 items-center justify-center min-w-0", children: /* @__PURE__ */ e(be, { value: s[h] || n("states.loading"), placeholder: n("form.selectOrUploadDocument"), readOnly: !0, className: "truncate" }) }),
      /* @__PURE__ */ e(z, { variant: "outline", type: "button", onClick: () => u(h), children: /* @__PURE__ */ e(De, {}) })
    ] }, `${h}-${o[h] ?? ""}`)) })
  ] });
}
function VT({ list: t, object: n, onDelete: a }) {
  return /* @__PURE__ */ i("div", { className: "flex flex-row w-full gap-4 hover:bg-muted/50 hover:rounded-md items-center", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-1 -mt-0.5", children: $T(n, t.schema.arraySchema.editor) }),
    /* @__PURE__ */ e(z, { variant: "outline", type: "button", onClick: a, children: /* @__PURE__ */ e(De, {}) })
  ] });
}
function Sn({ className: t, ...n }) {
  return /* @__PURE__ */ e(wa.Root, { "data-slot": "tabs", className: D("flex flex-col gap-2", t), ...n });
}
function An({ className: t, ...n }) {
  return /* @__PURE__ */ e(wa.List, { "data-slot": "tabs-list", className: D("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg gap-[3px] p-[3px]", t), ...n });
}
function Re({ className: t, ...n }) {
  return /* @__PURE__ */ e(
    wa.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: D(
        // Base styles
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all",
        // Default state
        "text-muted-foreground",
        // Hover state (inactive) - more distinct
        "hover:cursor-pointer hover:text-foreground hover:bg-background/60 dark:hover:bg-background/40",
        // Active state
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:border-border data-[state=active]:shadow-sm",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1",
        // Disabled state
        "disabled:pointer-events-none disabled:opacity-50",
        // SVG styles
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...n
    }
  );
}
function $e({ className: t, ...n }) {
  return /* @__PURE__ */ e(wa.Content, { "data-slot": "tabs-content", className: D("flex-1 outline-none", t), ...n });
}
function qT(t) {
  return t === "object" ? { type: "object", properties: {} } : t === "array" ? { type: "array", items: { type: "any" } } : { type: t };
}
class no {
  schema;
  properties = {};
  constructor(n) {
    this.schema = n || { type: "object", properties: {} }, this.load();
  }
  load() {
    if (this.schema.properties) {
      const n = this.schema.properties;
      Object.keys(n).forEach((a) => {
        this.loadProperty(a, n[a]);
      });
    }
  }
  hasProperties() {
    return Object.keys(this.properties).length > 0;
  }
  get title() {
    return this.schema.title ?? this.schema.name;
  }
  get description() {
    return this.schema.description;
  }
  loadProperty(n, a) {
    let o;
    return a.type === "array" ? o = new WT(this, n, a) : o = new ts(this, n, a), this.properties[n] = o, o;
  }
  get type() {
    return this.schema.type;
  }
  addProperty(n, a, o = !1) {
    this.schema.type !== "object" && (this.schema.type = "object"), this.schema.properties || (this.schema.properties = {});
    const r = typeof a == "string" ? qT(a) : a, s = this.loadProperty(n, r);
    return this.schema.properties[s.name] = s.schema, o && (s.isRequired = !0), s;
  }
  removeProperty(n) {
    this.schema.properties && (delete this.schema.properties[n], Array.isArray(this.schema.required) && (this.schema.required = this.schema.required.filter((a) => a !== n))), delete this.properties[n];
  }
  getProperty(n) {
    return this.properties[n];
  }
  get editor() {
    return this.schema.editor;
  }
}
class ts extends no {
  constructor(n, a, o) {
    if (super(o), this.parent = n, this.name = a, o.type === "array")
      throw new Error("Array property must be instantiated using ArrayPropertySchema");
    o.type === "object" && !o.properties && (o.properties = {});
  }
  parent;
  name;
  get isMulti() {
    return !1;
  }
  get isReadOnly() {
    return !!this.schema.readOnly;
  }
  set isReadOnly(n) {
    this.schema.readOnly = n;
  }
  get defaultValue() {
    return this.schema.default;
  }
  set defaultValue(n) {
    this.schema.default = n;
  }
  get enum() {
    return this.schema.enum;
  }
  set enum(n) {
    this.schema.enum = n;
  }
  get isRequired() {
    const n = this.parent.schema.required;
    return n ? n.includes(this.name) : !1;
  }
  set isRequired(n) {
    let a = Array.isArray(this.parent.schema.required) ? this.parent.schema.required : [];
    n ? a = a.concat(this.name) : a = a.filter((o) => o !== this.name), this.parent.schema.required = a;
  }
  get type() {
    return this.schema.type;
  }
  set type(n) {
    this.schema.type !== n && (this.schema.type = n, n !== "object" && (this.properties = {}, this.schema.properties = void 0));
  }
  remove() {
    this.parent.removeProperty(this.name);
  }
  get isBoolean() {
    return this.type === "boolean";
  }
  get isString() {
    return this.type === "string";
  }
  get isNumber() {
    return this.type === "number" || this.type === "integer";
  }
  get isObject() {
    return this.type === "object";
  }
}
function GT(t) {
  if (t.type !== "array")
    throw new Error("Expecting an array schema");
  if (!t.items)
    t.items = { type: "any" };
  else if (Array.isArray(t.items))
    throw new Error("Tuple arrays are not supported");
  return t.items;
}
class WT extends ts {
  arraySchema;
  constructor(n, a, o) {
    super(n, a, GT(o)), this.arraySchema = o;
  }
  get isMulti() {
    return !0;
  }
}
function ns(t, n) {
  if (n.editor)
    return n.editor;
  switch (n.type) {
    case "number":
    case "integer":
      return "number";
    case "boolean":
      return "checkbox";
    case "string":
      return "text";
    default:
      return "text";
  }
}
class Pa {
  constructor(n, a, o) {
    this.parent = n, this.schema = a, this.name = o;
  }
  parent;
  schema;
  name;
  // change observer
  observer;
  get isRoot() {
    return !this.parent;
  }
  get root() {
    return this.parent ? this.parent.root : this;
  }
  get path() {
    return this.parent ? this.parent.path.concat(this.name) : [];
  }
  get isScalar() {
    return !1;
  }
  get isListItem() {
    return !1;
  }
  get isObject() {
    return !1;
  }
  get isList() {
    return !1;
  }
  get title() {
    return this.schema.title || $r(this.name);
  }
  onChange(n) {
    this.observer && this.observer(this) === !1 || this.parent?.onChange(n);
  }
}
class Eo extends Pa {
  get isObject() {
    return !0;
  }
  getProperty(n) {
    const a = this.schema.properties[n];
    return a.isMulti ? new bi(this, a, this.getOrInitArrayProperty(n)) : a.isObject ? new ao(this, a, a.name, this.getOrInitObjectProperty(n)) : new fi(this, a);
  }
  getOrInitObjectProperty(n) {
    let a = this.value[n];
    return a || (this.value[n] = a = {}), a;
  }
  getOrInitArrayProperty(n) {
    let a = this.value[n];
    return a || (this.value[n] = a = []), a;
  }
  setPropertyValue(n, a) {
    return this.value[n] !== a ? (this.value[n] = a, !0) : !1;
  }
  getPropertyValue(n) {
    return this.value[n];
  }
  get properties() {
    const n = [];
    for (const a of Object.values(this.schema.properties))
      a.isMulti ? n.push(new bi(this, a, this.getOrInitArrayProperty(a.name))) : a.isObject ? n.push(new ao(this, a, a.name, this.getOrInitObjectProperty(a.name))) : n.push(new fi(this, a));
    return n;
  }
  [Symbol.iterator]() {
    return this.properties[Symbol.iterator]();
  }
}
class UT extends Eo {
  constructor(n, a = {}) {
    super(null, n instanceof no ? n : new no(n), "#root"), this.value = a;
  }
  value;
}
class ao extends Eo {
  constructor(n, a, o, r) {
    super(n, a, o), this.value = r;
  }
  value;
}
class fi extends Pa {
  constructor(n, a) {
    super(n, a, a.name), n.value[this.name] === void 0 && a.defaultValue !== void 0 && (n.value[this.name] = a.defaultValue);
  }
  get isScalar() {
    return !0;
  }
  set value(n) {
    this.parent.setPropertyValue(this.name, n) && this.onChange(this);
  }
  get value() {
    return this.parent.getPropertyValue(this.name);
  }
  getInputType() {
    return ns(this.name, this.schema);
  }
}
class bi extends Pa {
  constructor(n, a, o) {
    super(n, a, a.name), this.value = o;
    for (const r of this.value)
      this.add();
  }
  value;
  items = [];
  get isList() {
    return !0;
  }
  newItem(n) {
    return this.schema.isObject ? new KT(this, n) : new vi(this, n);
  }
  add() {
    const n = this.newItem(this.items.length);
    return this.items.push(n), n;
  }
  remove(n) {
    if (n < 0)
      return;
    const a = this.value;
    if (n < this.items.length) {
      this.items.splice(n, 1);
      for (let o = 0, r = this.items.length; o < r; o++) {
        const s = this.items[o];
        s.index = o, s.name = String(o);
      }
    }
    Array.isArray(a) && n < a.length && (a.splice(n, 1), this.onChange(this));
  }
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
  item(n) {
    if (n < 0 || n >= this.value.length)
      return;
    const a = this.value[n];
    return this.schema.isObject ? new ao(this, this.schema, String(n), a) : new vi(this, n);
  }
  /**
   * remove undefined items from the end of the list if any
   */
  trim() {
    for (; this.items[this.items.length - 1] === void 0; )
      this.items.pop();
  }
}
class KT extends Eo {
  constructor(n, a) {
    super(n, n.schema, String(a)), this.index = a, n.value[a] === void 0 && (n.value[a] = {}), this.key = this.name + "@" + Date.now();
  }
  index;
  key;
  get isListItem() {
    return !0;
  }
  set value(n) {
    this.parent.value[this.index] = n;
  }
  get value() {
    return this.parent.value[this.index];
  }
}
class vi extends Pa {
  constructor(n, a) {
    super(n, n.schema, String(a)), this.index = a, n.value[a] === void 0 && n.schema.defaultValue !== void 0 && (n.value[a] = n.schema.defaultValue), this.key = this.name + "@" + Date.now();
  }
  index;
  key;
  get isScalar() {
    return !0;
  }
  get isListItem() {
    return !0;
  }
  set value(n) {
    this.parent.value[this.index] = n;
  }
  get value() {
    return this.parent.value[this.index];
  }
  getInputType() {
    return ns(this.name, this.schema);
  }
}
const YT = [
  { path: "type.id", label: "Type", modifier: "type" },
  { path: "created_at", label: "Created At", modifier: "date" },
  { path: "created_by", label: "Created By", modifier: "user" },
  { path: "updated_at", label: "Updated At", modifier: "date" },
  { path: "updated_by", label: "Updated By", modifier: "user" },
  { path: "tags", label: "Tags" }
];
function XT({ value: t }) {
  const { registry: n } = tt();
  if (t == null) return /* @__PURE__ */ e("span", { children: "-" });
  const a = String(t), o = n?.getTypeName(a) || a;
  return /* @__PURE__ */ e("span", { children: o });
}
function QT({ value: t }) {
  const { client: n } = de(), a = Ct(n);
  if (t == null) return /* @__PURE__ */ e("span", { children: "-" });
  const o = String(t), r = a.getUserDisplayName(o, void 0);
  return /* @__PURE__ */ e("span", { children: r });
}
function ZT(t) {
  return t.properties?.version != null ? String(t.properties.version) : t.revision?.label != null ? t.revision.label : "initial";
}
function JT({ value: t, document: n, className: a, isEditMode: o = !1, objectSchema: r, onSave: s, onCancel: l }) {
  const { t: d } = K("common"), c = Fe(), [u, m] = g("basic"), [f, p] = g(null);
  M(() => {
    if (o && r) {
      const x = new UT(r, { ...t });
      p(x);
    }
  }, [o, r, t]);
  const h = n?.type?.id, b = h ? c?.settings?.BASIC_PROPERTIES?.[h] : void 0, C = Array.isArray(b) && b.length > 0 ? b : YT, y = h ? c?.settings?.ADVANCED_PROPERTIES?.[h] : void 0, v = () => {
    f && s?.(f.value);
  };
  return o && f ? /* @__PURE__ */ i("div", { className: Ba("flex flex-col h-full", a), children: [
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e(RT, { object: f }) }),
    /* @__PURE__ */ i("div", { className: "flex flex-row justify-end gap-2 pt-4 border-t", children: [
      /* @__PURE__ */ e(z, { onClick: l, variant: "outline", children: "Cancel" }),
      /* @__PURE__ */ e(z, { onClick: v, variant: "default", children: "Save" })
    ] })
  ] }) : /* @__PURE__ */ e("div", { className: Ba("flex flex-col gap-4", a), children: /* @__PURE__ */ i(Sn, { value: u, onValueChange: (x) => m(x), className: "w-full", children: [
    /* @__PURE__ */ i(An, { className: "grid w-full grid-cols-2", children: [
      /* @__PURE__ */ e(Re, { value: "basic", className: "text-xs sm:text-sm", children: d("propertiesPanel.basic") }),
      /* @__PURE__ */ e(Re, { value: "advanced", className: "text-xs sm:text-sm", children: d("propertiesPanel.advanced") })
    ] }),
    /* @__PURE__ */ e($e, { value: "basic", className: "mt-4", children: /* @__PURE__ */ e(
      xi,
      {
        document: n,
        properties: C
      }
    ) }),
    /* @__PURE__ */ e($e, { value: "advanced", className: "mt-4", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
      n && /* @__PURE__ */ i("div", { className: "w-full flex flex-col", children: [
        /* @__PURE__ */ e(dt, { name: "Version" }),
        /* @__PURE__ */ e("div", { className: "text-sm", children: ZT(n) })
      ] }),
      y ? /* @__PURE__ */ e(
        xi,
        {
          document: n,
          properties: y
        }
      ) : !t || Object.keys(t).length === 0 ? n?.status === $s.processing ? /* @__PURE__ */ e(Ja, { children: d("propertiesPanel.propertiesGenerating") }) : /* @__PURE__ */ e(Ja, { children: "No Properties available." }) : Object.entries(t).map(
        ([x, N]) => /* @__PURE__ */ e(ka, { name: x, value: N }, x)
      )
    ] }) })
  ] }) });
}
function xi({ document: t, properties: n }) {
  const { t: a } = K("common");
  return t ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: n.map((o) => /* @__PURE__ */ e(
    eI,
    {
      document: t,
      config: o
    },
    o.path
  )) }) : /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground", children: a("form.noDocumentData") });
}
function eI({ document: t, config: n }) {
  const { t: a } = K("common"), o = pT(t, n.path), r = n.label || n.path.split(".").pop() || n.path;
  if (o == null || o === "" || Array.isArray(o) && o.length === 0)
    return /* @__PURE__ */ i("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ e(dt, { name: r }),
      /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground italic", children: a("form.noValue") })
    ] });
  if (n.modifier)
    return /* @__PURE__ */ i("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ e(dt, { name: r }),
      /* @__PURE__ */ i("div", { className: "text-sm", children: [
        n.modifier === "type" && /* @__PURE__ */ e(XT, { value: o }),
        n.modifier === "user" && /* @__PURE__ */ e(QT, { value: o }),
        n.modifier === "date" && /* @__PURE__ */ e("span", { children: mT(o) })
      ] })
    ] });
  const l = Lo(o);
  switch (l.type) {
    case 0:
    case 1:
      return /* @__PURE__ */ i("div", { className: "w-full flex flex-col", children: [
        /* @__PURE__ */ e(dt, { name: r }),
        /* @__PURE__ */ e("div", { className: "text-sm", children: l.value })
      ] });
    case 2:
      return /* @__PURE__ */ i("div", { className: "prose", children: [
        /* @__PURE__ */ e(dt, { name: r }),
        /* @__PURE__ */ e("div", { className: "text-sm prose", children: l.value })
      ] });
    case 3:
      return /* @__PURE__ */ e(Fo, { name: r, value: l.value });
    case 4:
      return /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e(dt, { name: r }),
        /* @__PURE__ */ e(zo, { children: Object.entries(l.value).map(([d, c]) => /* @__PURE__ */ e(ka, { name: d, value: c }, d)) })
      ] });
  }
}
function dt({ name: t }) {
  return /* @__PURE__ */ e("div", { className: "text font-medium font-semibold break-all", children: $r(t) });
}
function zo({ children: t, className: n }) {
  return /* @__PURE__ */ e("div", { className: Ba("flex flex-col gap-4 py-0 pl-4 border-l-4 border-l-solid border-border", n), children: t });
}
function ka({ name: t, value: n }) {
  const a = Lo(n);
  switch (a.type) {
    case 0:
      return /* @__PURE__ */ i("div", { className: "w-full flex flex-col", children: [
        /* @__PURE__ */ e(dt, { name: t }),
        /* @__PURE__ */ e("div", { className: "text-sm", children: a.value })
      ] });
    case 1:
      return /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e(dt, { name: t }),
        /* @__PURE__ */ e("div", { className: "text-sm", children: a.value })
      ] });
    case 2:
      return /* @__PURE__ */ i("div", { className: "prose", children: [
        /* @__PURE__ */ e(dt, { name: t }),
        /* @__PURE__ */ e("div", { className: "text-sm prose", children: a.value })
      ] });
    case 3:
      return /* @__PURE__ */ e(Fo, { name: t, value: n });
    case 4:
      return /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e(dt, { name: t }),
        /* @__PURE__ */ e(zo, { children: Object.entries(n).map(([o, r]) => /* @__PURE__ */ e(ka, { name: o, value: r }, o)) })
      ] });
  }
}
function Fo({ name: t, value: n }) {
  const a = typeof n[0] == "string", o = !0;
  return a ? /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
    t && /* @__PURE__ */ e(dt, { name: t }),
    /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: n.map(
      (r, s) => /* @__PURE__ */ e("div", { onClick: () => navigator.clipboard.writeText(String(r)), className: "w-fit text-sm border border-border rounded-md p-1 gap-1 hover:bg-muted hover:cursor-pointer", children: String(r) }, s)
    ) })
  ] }) : /* @__PURE__ */ i("div", { children: [
    t && /* @__PURE__ */ e(dt, { name: t }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: n.map((r, s) => /* @__PURE__ */ e(tI, { index: s, value: r, useBullet: o }, crypto.randomUUID())) })
  ] });
}
function tI({ index: t, value: n, useBullet: a }) {
  const o = a ? /* @__PURE__ */ e("span", { className: "text-sm", children: "•" }) : /* @__PURE__ */ i("span", { className: "text-sm", children: [
    t + 1,
    "."
  ] }), r = Lo(n);
  let s;
  switch (r.type) {
    case 4:
      s = /* @__PURE__ */ e(zo, { children: Object.entries(n).map(([l, d]) => /* @__PURE__ */ e(ka, { name: l, value: d }, l)) });
      break;
    case 3:
      s = /* @__PURE__ */ e(Fo, { value: n });
      break;
    case 2:
      s = /* @__PURE__ */ e("div", { className: "text-sm prose", children: r.value });
      break;
    default:
      s = /* @__PURE__ */ e("div", { className: "text-sm", children: r.value });
      break;
  }
  return /* @__PURE__ */ i("div", { className: "flex gap-4 hover:bg-muted/50 py-2 pr-2 pl-4", children: [
    /* @__PURE__ */ e("div", { className: "font-semibold text-muted-foreground", children: o }),
    /* @__PURE__ */ e("div", { className: "text-sm muted-foreground", children: /* @__PURE__ */ e("span", { className: "flex h-full items-center", children: s }) })
  ] });
}
function Lo(t) {
  if (t == null)
    return {
      value: "-",
      type: 0
      /* Inline */
    };
  if (Array.isArray(t))
    return {
      value: t,
      type: 3
      /* Array */
    };
  const n = typeof t;
  if (n === "string") {
    const a = t, o = a.length;
    return o < 80 ? { type: 0, value: a } : o > 400 ? { type: 2, value: a } : { type: 1, value: a.replace(/(?:\n\n)+/g, `

`) };
  } else return n === "number" || n === "boolean" ? {
    value: String(t),
    type: 0
    /* Inline */
  } : {
    value: t,
    type: 4
    /* Object */
  };
}
function as({ documents: t, open: n, onActionDone: a, onOpenChange: o }) {
  const { t: r } = K(["collections", "common"]), s = Ie(), { client: l, user: d } = de(), c = To(), [u, m] = g("select"), f = 50, [p, h] = g([]), [b, C] = g(/* @__PURE__ */ new Set()), [y, v] = g(""), [x, N] = g(""), [w, A] = g(!1), [S, I] = g(!1), [L, V] = g(!1), [G, R] = g(""), [j, O] = g(""), [Q, ee] = g(""), [te, k] = g([]), [_, q] = g([]), [$, T] = g(!1), [X, U] = g(!1), E = ge(null), H = t.map((se) => se.id), P = t.length, B = P === 1 ? "document" : "documents";
  M(() => {
    !l || !n || (T(!0), l.iam.groups.list().then((se) => {
      k(se);
    }).catch(() => {
      k([]);
    }).finally(() => {
      T(!1);
    }));
  }, [l, n]), M(() => {
    const se = setTimeout(() => {
      N(y);
    }, 300);
    return () => clearTimeout(se);
  }, [y]);
  const W = async (se) => {
    if (!l) return;
    A(!0);
    const Z = { dynamic: !1, limit: f };
    se && se.trim() && (Z.name = se.trim()), l.store.collections.search(Z).then((oe) => {
      h(oe), V(oe.length >= f);
    }).finally(() => {
      A(!1);
    });
  }, le = J(async () => {
    if (!l || S || !L) return;
    I(!0);
    const se = {
      dynamic: !1,
      limit: f,
      offset: p.length
    };
    x && x.trim() && (se.name = x.trim()), l.store.collections.search(se).then((Z) => {
      h((oe) => [...oe, ...Z]), V(Z.length >= f);
    }).finally(() => {
      I(!1);
    });
  }, [l, S, L, p.length, x]), me = J(() => {
    const se = E.current;
    if (!se || !L || S) return;
    const { scrollTop: Z, scrollHeight: oe, clientHeight: Y } = se;
    Z + Y >= oe - 20 && le();
  }, [L, S, le]);
  M(() => {
    !l || !n || W();
  }, [l, n]), M(() => {
    !l || !n || W(x);
  }, [x]);
  const ze = () => {
    o(!1), m("select"), C(/* @__PURE__ */ new Set()), v(""), R(""), O(""), ee(""), q([]), V(!1);
  }, Pe = () => {
    ze(), a?.();
  }, Ue = (se) => {
    C((Z) => {
      const oe = new Set(Z);
      return oe.has(se) ? oe.delete(se) : oe.add(se), oe;
    });
  }, re = async () => {
    if (!l || b.size === 0) return;
    U(!0);
    const se = Array.from(b);
    try {
      await Promise.all(
        se.map(
          (oe) => l.store.collections.addMembers(oe, H)
        )
      );
      const Z = se.length === 1 ? "collection" : "collections";
      s({
        status: "success",
        title: r("collections:addToCollection.documentsAdded", { count: P, label: B }),
        description: r("collections:addToCollection.successAdded", { count: se.length, label: Z }),
        duration: 2e3
      }), Pe();
    } catch (Z) {
      s({
        status: "error",
        title: r("collections:addToCollection.errorAdding"),
        description: Z.message,
        duration: 2e3
      });
    } finally {
      U(!1);
    }
  }, Ne = async () => {
    if (!(!l || !G.trim())) {
      U(!0);
      try {
        const se = {};
        j.trim() && (se.description = j.trim());
        const Z = {
          name: G.trim(),
          dynamic: !1,
          ...Q && { type: Q },
          ...Object.keys(se).length > 0 && { properties: se }
        }, oe = await l.store.collections.create(Z), Y = [];
        if (d?.sub && Y.push(`user:${d.sub}`), _.length > 0 && Y.push(..._.map((F) => `group:${F}`)), Y.length > 0) {
          const F = {
            "content:read": Y,
            "content:write": Y,
            "content:delete": Y
          };
          await l.store.collections.updatePermissions(oe.id, F);
        }
        await l.store.collections.addMembers(oe.id, H), s({
          status: "success",
          title: r("collections:addToCollection.documentsAdded", { count: P, label: B }),
          description: r("collections:addToCollection.successCreatedAndAdded", { name: oe.name }),
          duration: 2e3
        }), Pe();
      } catch (se) {
        s({
          status: "error",
          title: r("collections:addToCollection.errorCreating"),
          description: se.message,
          duration: 2e3
        });
      } finally {
        U(!1);
      }
    }
  }, we = () => {
    u === "select" ? re() : Ne();
  }, Le = X || u === "select" && b.size === 0 || u === "create" && !G.trim(), nt = () => {
    if (X) return r("collections:addToCollection.adding");
    if (u === "create")
      return r("collections:addToCollection.createAndAdd");
    const se = b.size;
    return se <= 1 ? r("collections:addToCollection.addToCollectionBtn") : r("collections:addToCollection.addToCollectionsBtn", { count: se });
  };
  return /* @__PURE__ */ e(Wn, { open: n, onOpenChange: o, children: /* @__PURE__ */ i(Nn, { className: "sm:max-w-xl bg-background", children: [
    /* @__PURE__ */ e(wn, { children: /* @__PURE__ */ e(Cn, { children: P === 1 ? r("collections:addToCollection.title") : r("collections:addToCollection.titleWithCount", { count: P }) }) }),
    /* @__PURE__ */ i(Sn, { value: u, onValueChange: (se) => m(se), children: [
      /* @__PURE__ */ i(An, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ e(Re, { value: "select", children: r("collections:addToCollection.selectExisting") }),
        /* @__PURE__ */ e(Re, { value: "create", children: r("collections:addToCollection.createNew") })
      ] }),
      /* @__PURE__ */ e($e, { value: "select", className: "mt-4", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ i("div", { className: "relative", children: [
          /* @__PURE__ */ e(vt, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ e(
            be,
            {
              placeholder: r("collections:addToCollection.searchPlaceholder"),
              value: y,
              onChange: (se) => v(se.target.value),
              className: y ? "pl-9 pr-9" : "pl-9"
            }
          ),
          y && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => v(""),
              className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors",
              children: /* @__PURE__ */ e(De, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            ref: E,
            onScroll: me,
            className: "border border-border rounded-md max-h-[280px] overflow-y-auto bg-background",
            children: w ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : p.length > 0 ? /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("div", { className: "divide-y divide-border", children: p.map((se) => {
                const Z = b.has(se.id);
                return /* @__PURE__ */ i(
                  "label",
                  {
                    className: `flex items-center gap-3 p-3 cursor-pointer transition-colors ${Z ? "bg-primary/10 hover:bg-primary/15" : "hover:bg-muted/50"}`,
                    children: [
                      /* @__PURE__ */ e(
                        Xe,
                        {
                          checked: Z,
                          onCheckedChange: () => Ue(se.id)
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "flex-1 truncate text-sm text-foreground", title: se.name, children: se.name }),
                      Z && /* @__PURE__ */ e(Me, { className: "h-4 w-4 text-primary flex-shrink-0" })
                    ]
                  },
                  se.id
                );
              }) }),
              S && /* @__PURE__ */ e("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) })
            ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center p-8 text-center", children: [
              /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r("collections:addToCollection.noCollectionsFound") }),
              /* @__PURE__ */ e(
                z,
                {
                  variant: "link",
                  size: "sm",
                  onClick: () => m("create"),
                  className: "mt-2",
                  children: r("collections:addToCollection.createNewCollection")
                }
              )
            ] })
          }
        ),
        b.size > 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r("collections:addToCollection.selectedCount", { count: b.size }) })
      ] }) }),
      /* @__PURE__ */ e($e, { value: "create", className: "mt-4", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "new-collection-name", children: r("collections:addToCollection.nameRequired") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "new-collection-name",
              placeholder: r("collections:addToCollection.namePlaceholder"),
              value: G,
              onChange: (se) => R(se.target.value),
              disabled: X
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "new-collection-description", children: r("collections:addToCollection.descriptionLabel") }),
          /* @__PURE__ */ e(
            pt,
            {
              id: "new-collection-description",
              placeholder: r("collections:addToCollection.descriptionPlaceholder"),
              value: j,
              onChange: (se) => O(se.target.value),
              disabled: X,
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "new-collection-type", children: r("collections:addToCollection.typeLabel") }),
          /* @__PURE__ */ e(
            Aa,
            {
              value: Q,
              onChange: ee,
              placeholder: r("collections:addToCollection.typePlaceholder"),
              disabled: X,
              allowedTypes: c
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { children: r("collections:addToCollection.groupsLabel") }),
          $ ? /* @__PURE__ */ i("div", { className: "flex items-center gap-2 py-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin" }),
            r("collections:addToCollection.loadingGroups")
          ] }) : te.length === 0 ? /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground py-2", children: r("collections:addToCollection.noGroupsAvailable") }) : /* @__PURE__ */ e(Nt, { className: "max-h-[120px] border rounded-md", children: /* @__PURE__ */ e("div", { className: "p-2 flex flex-col gap-1", children: te.map((se) => /* @__PURE__ */ i(
            "label",
            {
              className: "flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer",
              children: [
                /* @__PURE__ */ e(
                  Xe,
                  {
                    checked: _.includes(se.id),
                    onCheckedChange: (Z) => {
                      q(Z ? [..._, se.id] : _.filter((oe) => oe !== se.id));
                    },
                    disabled: X
                  }
                ),
                /* @__PURE__ */ i("div", { className: "flex flex-col min-w-0", children: [
                  /* @__PURE__ */ e("span", { className: "text-sm font-medium truncate", children: se.name }),
                  se.description && /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground truncate", children: se.description })
                ] })
              ]
            },
            se.id
          )) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ i(Un, { children: [
      /* @__PURE__ */ e(z, { variant: "outline", onClick: ze, disabled: X, children: r("common:actions.cancel") }),
      /* @__PURE__ */ e(z, { onClick: we, disabled: Le, children: nt() })
    ] })
  ] }) });
}
function nI({ document: t, open: n, setOpen: a, onDelete: o }) {
  const { t: r } = K(["library", "common"]), { client: s } = de(), l = Ie(), [d, c] = g(!1), u = () => {
    c(!0), s.objects.delete(t.id).then(() => {
      l({
        status: "success",
        title: r("library:document.deleteSuccess"),
        description: r("library:document.deleteSuccessDescription"),
        duration: 4e3
      }), o(), a(!1);
    }).catch((m) => {
      l({
        status: "error",
        title: r("library:document.deleteError"),
        description: m.message,
        duration: 4e3
      }), c(!1);
    });
  };
  return /* @__PURE__ */ e(Wn, { open: n, onOpenChange: a, children: /* @__PURE__ */ i(Nn, { children: [
    /* @__PURE__ */ e(wn, { children: /* @__PURE__ */ e(Cn, { children: r("library:document.deleteTitle", { typeName: t?.type?.name ?? r("common:document") }) }) }),
    /* @__PURE__ */ e("p", { children: r("library:document.deleteConfirm", { typeName: t?.type?.name ?? r("common:document") }) }),
    /* @__PURE__ */ i(Un, { children: [
      /* @__PURE__ */ e(z, { variant: "destructive", onClick: () => a(!1), disabled: d, children: r("common:actions.cancel") }),
      /* @__PURE__ */ e(z, { variant: "outline", onClick: u, disabled: d, children: r(d ? "common:actions.deleting" : "common:actions.delete") })
    ] })
  ] }) });
}
function aI({ document: t, disableDeleteDocument: n = !1, onDeleteDone: a }) {
  const { t: o } = K(["library", "common"]), { client: r } = de(), s = Ie(), { isFavorite: l, toggleFavorite: d } = Ca(), c = l(t.id), [u, m] = g(!1), [f, p] = g(!1), [h, b] = g(!1), [C, y] = g(null), v = (w) => {
    y({ ...w });
  }, x = () => {
    y(null), a?.();
  };
  M(() => {
    b(!!C);
  }, [C]);
  const N = () => {
    !t?.content?.source || f || (p(!0), r.objects.getDownloadUrl(t.content.source).then(async (w) => {
      const S = await (await fetch(w.url)).blob();
      let I;
      try {
        I = await r.store.objects.getObjectText(t.id);
      } catch {
        console.error("Error fetching object text");
      }
      const L = I?.text && Rr(I.text) ? "html" : Ol.extension(t?.content?.type || "application/octet-stream") || "bin", V = t?.properties?.title || t.name || t.id, G = new RegExp(`\\.${(L ?? "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"), j = `${V.replace(G, "")}.${L}`, O = window.document.createElement("a");
      O.href = URL.createObjectURL(S), O.download = j, O.click(), window.URL.revokeObjectURL(O.href);
    }).catch((w) => {
      s({
        status: "error",
        title: o("library:document.errorDownloading"),
        description: w.message || o("library:document.errorDownloadingDescription"),
        duration: 5e3
      });
    }).finally(() => {
      p(!1);
    }));
  };
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i(nn, { children: [
      /* @__PURE__ */ e(an, { asChild: !0, disabled: f, children: /* @__PURE__ */ i(z, { className: "border border-primary/50 bg-popover text-popover-foreground hover:bg-primary/50", disabled: f, children: [
        f ? /* @__PURE__ */ e(qi, { className: "animate-spin" }) : /* @__PURE__ */ e(ul, {}),
        /* @__PURE__ */ e("span", { className: "hidden md:inline", children: o(f ? "common:actions.downloading" : "library:document.more") })
      ] }) }),
      /* @__PURE__ */ i(jt, { side: "bottom", align: "end", className: "p-1 flex flex-col gap-1 w-[230px]", children: [
        /* @__PURE__ */ i(at, { onClick: N, children: [
          /* @__PURE__ */ e(ml, {}),
          /* @__PURE__ */ e("span", { children: o("library:document.download") })
        ] }),
        /* @__PURE__ */ i(at, { onClick: () => d(t.id), children: [
          c ? /* @__PURE__ */ e(pl, {}) : /* @__PURE__ */ e(On, {}),
          /* @__PURE__ */ e("span", { children: o(c ? "common:favorites.remove" : "common:favorites.add") })
        ] }),
        /* @__PURE__ */ i(at, { onClick: () => m(!0), children: [
          /* @__PURE__ */ e(tn, {}),
          /* @__PURE__ */ e("span", { children: o("library:document.addToCollection") })
        ] }),
        !n && /* @__PURE__ */ i(at, { onClick: () => {
          v(t);
        }, children: [
          /* @__PURE__ */ e(ya, {}),
          /* @__PURE__ */ e("span", { children: o("library:document.delete") })
        ] })
      ] })
    ] }),
    !n && h && C && /* @__PURE__ */ e(nI, { document: C, open: h, setOpen: b, onDelete: x }),
    u && /* @__PURE__ */ e(as, { documents: [t], open: u, onOpenChange: m })
  ] });
}
const oI = 50, $a = new oa(0);
function Ma() {
  try {
    const t = localStorage.getItem(br);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function yi(t) {
  try {
    localStorage.setItem(br, JSON.stringify(t));
  } catch {
  }
}
function os(t) {
  const { areaName: n, limit: a = 10 } = t ?? {}, { client: o } = de(), [r, s] = g([]), [l, d] = g(!0), c = ko($a), u = J((m) => {
    const p = Ma().filter((C) => C.documentId !== m.id), b = [{
      documentId: m.id,
      viewedAt: Date.now(),
      areas: m.properties?.areas || []
    }, ...p].slice(0, oI);
    yi(b), $a.value = $a.value + 1;
  }, []);
  return M(() => {
    if (!o) {
      d(!1);
      return;
    }
    let m = !1;
    return (async () => {
      d(!0);
      let p = Ma();
      n && (p = p.filter((v) => v.areas.includes(n)));
      const h = p.slice(0, a);
      if (h.length === 0) {
        s([]), d(!1);
        return;
      }
      const b = await Promise.allSettled(
        h.map((v) => o.objects.retrieve(v.documentId))
      );
      if (m) return;
      const C = [], y = [];
      if (b.forEach((v, x) => {
        v.status === "fulfilled" && v.value ? C.push(v.value) : y.push(h[x].documentId);
      }), y.length > 0) {
        const v = Ma().filter(
          (x) => !y.includes(x.documentId)
        );
        yi(v);
      }
      s(C), d(!1);
    })(), () => {
      m = !0;
    };
  }, [o, n, a, c]), { documents: r, loading: l, recordView: u };
}
function is({ id: t, children: n, onDeleteDone: a }) {
  const { t: o } = K("common"), r = Mn(), { client: s, isLoading: l, user: d } = de(), c = et(), u = Ie(), { recordView: m } = os(), f = qn(d), p = !f, h = t || r.id, [b, C] = g(localStorage.getItem(pa) === "open"), [y, v] = g(void 0), [x, N] = g(void 0), [w, A] = g(void 0), [S, I] = g("properties"), [L, V] = g(void 0), [G, R] = g([]), [j, O] = g(0), [Q, ee] = g(!1), [te, k] = g(void 0);
  Pr(h, y?.properties?.title || y?.name);
  const _ = () => {
    c("/404");
  }, q = () => {
    !s || l || s.objects.retrieve(h).then((B) => {
      B ? (v(B), f && B.type?.id && s.store.types.retrieve(B.type.id).then((W) => {
        k(W.object_schema);
      }).catch((W) => {
        console.error("Failed to fetch type schema:", W);
      })) : _();
    }).catch(() => {
      _();
    });
  }, $ = () => {
    const B = b;
    localStorage.setItem(pa, B ? "closed" : "open"), C(!B);
  }, T = () => {
    O((B) => B + 1);
  }, X = () => {
    ee(!0), I("properties"), C(!0);
  }, U = async (B) => {
    if (!(!s || !y))
      try {
        await s.objects.update(y.id, { properties: B }), v({ ...y, properties: B }), ee(!1), u({ status: "success", title: "Properties updated", description: "Document properties have been saved successfully." });
      } catch (W) {
        console.error("Failed to update properties:", W), u({ status: "error", title: "Error", description: "Failed to save document properties." });
      }
  }, E = () => {
    ee(!1);
  };
  return M(() => {
    !s || l || y || q();
  }, [h]), M(() => {
    if (!(!s || l || !y)) {
      if (m(y), y.content) {
        const B = y.content.type;
        wo(B) || No(B) || Sr(B) ? nD(s, y, N, A, u, !0) : s.objects.getDownloadUrl(y.content.source, void 0, "inline").then((W) => {
          N(W.url), A(B);
        });
      }
      L || s.interactions.list({ query: { tags: ["chat"] } }).then((B) => {
        B.length > 0 ? V(B[0].id) : V(void 0);
      }).catch(() => {
        V(void 0);
      }), G.length || s.interactions.list({ query: { tags: ["document"] } }).then((B) => {
        R(B);
      }).catch(() => {
        R([]);
      });
    }
  }, [y]), y ? /* @__PURE__ */ i("div", { className: `flex flex-col h-full ${!t ? "p-2" : "p-2 sm:p-4 md:p-6"} gap-2 sm:gap-3 md:gap-4`, children: [
    /* @__PURE__ */ e(ye, { className: "shadow-md bg-muted/50", children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2 sm:gap-3 flex-1 min-w-0", children: /* @__PURE__ */ e("h1", { className: "text-sm sm:text-base md:text-lg font-semibold truncate", children: y?.properties?.title || y?.name || y?.id }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-1 sm:gap-2", children: [
        /* @__PURE__ */ i(
          z,
          {
            variant: "ghost",
            size: "sm",
            onClick: $,
            className: "gap-1 sm:gap-2",
            children: [
              b ? /* @__PURE__ */ e(Gi, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Wi, { className: "h-4 w-4" }),
              /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: o(b ? "actions.hideInfo" : "actions.showInfo") })
            ]
          }
        ),
        f && te && /* @__PURE__ */ i(
          z,
          {
            variant: "ghost",
            size: "sm",
            onClick: X,
            className: "gap-1 sm:gap-2",
            disabled: Q,
            children: [
              /* @__PURE__ */ e(Ui, { className: "h-4 w-4" }),
              /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: o("actions.editProperties") })
            ]
          }
        ),
        /* @__PURE__ */ e(HD, { object: y, variant: "ghost", text: "Share" }),
        /* @__PURE__ */ e(
          aI,
          {
            document: y,
            disableDeleteDocument: p,
            onDeleteDone: a
          }
        ),
        n
      ] })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "flex flex-col md:flex-row flex-1 gap-2 sm:gap-3 md:gap-4 min-h-0", children: [
      /* @__PURE__ */ e(ye, { className: `${b ? "hidden md:flex" : "flex"} flex-1 items-center justify-center shadow-md  bg-muted/50`, children: /* @__PURE__ */ e("div", { className: "w-full h-full overflow-hidden", children: x && w ? /* @__PURE__ */ e(
        KD,
        {
          documentId: y.id,
          name: y.name,
          type: w,
          url: x
        },
        `${y.id}-${b}`
      ) : y.content ? /* @__PURE__ */ e("div", { className: "text-muted-foreground flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin" }) }) : /* @__PURE__ */ e("div", { className: "text-muted-foreground flex items-center justify-center h-full", children: o("documentPanel.noContentSource") }) }) }),
      b && /* @__PURE__ */ e(ye, { className: "flex flex-col shadow-md w-full md:w-96 flex-1 md:flex-initial bg-muted/50 overflow-hidden", children: /* @__PURE__ */ i(Sn, { value: S, onValueChange: I, className: "flex flex-col h-full", children: [
        /* @__PURE__ */ e("div", { className: "p-3 sm:p-4 pb-0", children: /* @__PURE__ */ i(An, { className: "grid w-full grid-cols-2", children: [
          /* @__PURE__ */ i(Re, { value: "properties", className: "gap-1 sm:gap-2 text-xs sm:text-sm", children: [
            /* @__PURE__ */ e(hl, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
            /* @__PURE__ */ e("span", { className: "xs:inline", children: o("documentPanel.properties") })
          ] }),
          L && /* @__PURE__ */ i(Re, { value: "chat", className: "gap-1 sm:gap-2 text-xs sm:text-sm", children: [
            /* @__PURE__ */ e(In, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
            o("documentPanel.chat")
          ] })
        ] }) }),
        S === "chat" && L && /* @__PURE__ */ i(xe, { children: [
          /* @__PURE__ */ e(Ee, {}),
          /* @__PURE__ */ e("div", { className: "px-3 sm:px-4 py-2 flex justify-end", children: /* @__PURE__ */ i(
            z,
            {
              variant: "ghost",
              size: "sm",
              onClick: T,
              className: "gap-1 sm:gap-2 text-xs sm:text-sm",
              children: [
                /* @__PURE__ */ e(ho, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: o("actions.resetChat") }),
                /* @__PURE__ */ e("span", { className: "sm:hidden", children: o("actions.reset") })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e(Ee, {}),
        /* @__PURE__ */ i("div", { className: "flex-1 overflow-hidden", children: [
          /* @__PURE__ */ e($e, { value: "properties", className: "h-full m-0 p-0", children: /* @__PURE__ */ e("div", { className: "h-full overflow-y-auto p-3 sm:p-4", children: /* @__PURE__ */ e(
            JT,
            {
              value: y.properties ?? {},
              document: y,
              isEditMode: Q,
              objectSchema: te,
              onSave: U,
              onCancel: E
            }
          ) }) }),
          /* @__PURE__ */ e($e, { value: "chat", className: "h-full m-0 p-0", children: /* @__PURE__ */ e("div", { className: "h-full overflow-y-auto", children: L && y ? /* @__PURE__ */ e(
            JD,
            {
              document: y,
              interactionId: L,
              resetTrigger: j
            },
            y.id
          ) : /* @__PURE__ */ e("div", { className: "p-3 sm:p-4", children: /* @__PURE__ */ e(Ja, { children: "No Chat available for this document." }) }) }) })
        ] })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ e("div", {});
}
function ht(t) {
  const { documentId: n, onDeleteDone: a } = t, [o, r] = g(!1), s = t.isOpen !== void 0, l = s ? t.isOpen : o, d = s ? t.onClose : () => r(!1);
  return /* @__PURE__ */ i(xe, { children: [
    !s && /* @__PURE__ */ e("div", { className: D("flex items-center justify-center w-full", t.className), children: /* @__PURE__ */ e("div", { onClick: () => r(!0), className: "w-full align-left", children: t.children }) }),
    /* @__PURE__ */ e(Na, { children: l && /* @__PURE__ */ e("div", { className: "z-45 fixed w-full inset-0 bg-opacity-50 flex justify-end top-0", children: /* @__PURE__ */ e(bt.div, { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "h-full w-full bg-background shadow-lg p-0 relative", children: /* @__PURE__ */ e(is, { id: n, onDeleteDone: a, children: /* @__PURE__ */ e(z, { variant: "default", onClick: d, children: /* @__PURE__ */ e(De, {}) }) }) }) }, `overlay-${n}`) })
  ] });
}
function iI({ document: t, showDetails: n = !1, showHoverInfo: a = !1, selected: o = !1, onToggleSelection: r, selectionEnabled: s = !1, onSelect: l, onQuickAction: d }) {
  const { t: c } = K("common"), { client: u } = de(), { registry: m } = tt(), f = Ie(), p = Fe(), h = Number(p?.settings?.RENDITION_THUMBNAIL_SIZE) || 512, { getUserDisplayName: b } = Ct(u), { isFavorite: C, toggleFavorite: y } = Ca(), v = C(t.id), [x, N] = g(null), [w, A] = g(""), [S, I] = g(!1), L = t?.properties?.title || t?.name || t.id;
  M(() => {
    u && t && zt(
      u,
      t,
      N,
      A,
      f,
      h
    ).catch(() => {
      I(!0);
    });
  }, [t.id, u, f]);
  const V = () => {
    const k = t.content?.type?.toLowerCase() || "", _ = t.type?.id?.toLowerCase() || "";
    return k.startsWith("image/") || _ === "image" ? /* @__PURE__ */ e(fn, { className: "h-8 w-8" }) : k.startsWith("video/") || _ === "video" ? /* @__PURE__ */ e(Bn, { className: "h-8 w-8" }) : k.startsWith("audio/") || _ === "audio" ? /* @__PURE__ */ e(Hn, { className: "h-8 w-8" }) : k.includes("pdf") || _ === "pdf" ? /* @__PURE__ */ e(Je, { className: "h-8 w-8" }) : k.includes("zip") || k.includes("tar") || k.includes("rar") || _ === "archive" ? /* @__PURE__ */ e(va, { className: "h-8 w-8" }) : k.includes("code") || k.includes("javascript") || k.includes("typescript") || _ === "code" ? /* @__PURE__ */ e(xa, { className: "h-8 w-8" }) : /* @__PURE__ */ e(wt, { className: "h-8 w-8" });
  }, R = (() => {
    const k = t.content?.type?.toLowerCase() || "", _ = t.type?.id?.toLowerCase() || "";
    return k.startsWith("image/") || _ === "image" || k.startsWith("video/") || _ === "video" || k.includes("pdf") || _ === "pdf";
  })() && x && !S, j = t.created_at || "", O = (k) => {
    k.stopPropagation(), k.preventDefault(), r?.();
  }, Q = (k) => {
    k.stopPropagation(), k.preventDefault(), d?.();
  }, ee = (k) => {
    k.stopPropagation(), k.preventDefault(), y(t.id);
  }, te = /* @__PURE__ */ i("div", { className: D(
    "ecm-tile border-2 overflow-hidden hover:shadow-md transition-all cursor-pointer group rounded-sm",
    o ? "border-primary" : "border-border"
  ), children: [
    /* @__PURE__ */ i("div", { className: D(
      "relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden",
      R && "bg-transparent"
    ), children: [
      R ? /* @__PURE__ */ e(
        "img",
        {
          src: x,
          alt: w || t.name,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform",
          onError: () => I(!0)
        }
      ) : /* @__PURE__ */ e("div", { className: "text-muted-foreground group-hover:text-foreground transition-colors", children: V() }),
      s && /* @__PURE__ */ e(
        "div",
        {
          className: D(
            "absolute top-2 left-2 z-10",
            !o && "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          ),
          onClick: O,
          children: /* @__PURE__ */ e("div", { className: D(
            "w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all border-2",
            o ? "bg-primary text-primary-foreground border-primary" : "bg-black/60 text-white hover:bg-black/80 border-white/50 hover:border-white"
          ), children: o && /* @__PURE__ */ e(Me, { className: "h-5 w-5", strokeWidth: 3 }) })
        }
      ),
      /* @__PURE__ */ e("div", { className: "absolute top-2 left-2 right-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: /* @__PURE__ */ e(ve, { className: "bg-primary/90 text-secondary backdrop-blur-sm shadow-lg max-w-full truncate", children: m?.getTypeName(t.type?.id || "") || t.type?.name || c("document") }) }),
      d && /* @__PURE__ */ e(
        "div",
        {
          className: D(
            "absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            s && "left-12"
          ),
          onClick: Q,
          children: /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all bg-black/60 text-white hover:bg-black/80 border-2 border-white/50 hover:border-white", children: /* @__PURE__ */ e(go, { className: "h-4 w-4" }) })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: ee,
          "aria-label": c(v ? "favorites.remove" : "favorites.add"),
          className: D(
            "absolute bottom-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 hover:cursor-pointer bg-card/90 hover:bg-card border border-border",
            !v && "opacity-0 group-hover:opacity-100"
          ),
          children: /* @__PURE__ */ e(On, { className: D("h-4 w-4 transition-colors", v ? "fill-primary text-primary" : "text-muted-foreground hover:text-primary") })
        }
      ),
      a && /* Name and Date - Bottom with Background Effect */
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 pt-8", children: [
        /* @__PURE__ */ e("p", { className: "text-white text-sm font-medium truncate", title: L, children: L }),
        (t.updated_at || t.created_by) && /* @__PURE__ */ i("div", { className: "flex flex-row items-center justify-between gap-2 text-white/80 text-xs", children: [
          t.updated_at && /* @__PURE__ */ e("span", { className: "flex-shrink-0", children: qt(t.updated_at) }),
          t.created_by && /* @__PURE__ */ e("span", { className: "truncate min-w-0", children: b(t.created_by, void 0) })
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ e("div", { className: "p-3 border-t border-border bg-card", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", title: L, children: L }),
      (t.created_at || t.created_by) && /* @__PURE__ */ i("div", { className: "flex flex-row items-center justify-between gap-2 text-xs text-muted-foreground", children: [
        t.created_at && /* @__PURE__ */ e("span", { className: "flex-shrink-0", children: qt(j) }),
        t.created_by && /* @__PURE__ */ e("span", { className: "truncate min-w-0", children: b(t.created_by, void 0) })
      ] })
    ] }) })
  ] });
  return l ? /* @__PURE__ */ e("div", { onClick: () => l(t.id), className: "w-full", children: te }) : /* @__PURE__ */ e(ht, { documentId: t.id, children: te });
}
function Dn({ document: t, showDetails: n, showHoverInfo: a, selected: o, onToggleSelection: r, selectionEnabled: s }) {
  const { t: l } = K("common"), { client: d } = de(), { registry: c } = tt(), u = Ie(), m = Fe(), f = Number(m?.settings?.RENDITION_MODAL_PREVIEW_SIZE) || 1024, { getUserDisplayName: p } = Ct(d), [h, b] = g(!1), [C, y] = g(!1), [v, x] = g(null), N = t?.properties?.title || t?.name || t.id, w = c?.getTypeName(t.type?.id || "") || t.type?.name || l("document"), A = t.content?.type || "Unknown";
  M(() => {
    h && d && t && zt(d, t, x, () => {
    }, u, f);
  }, [h, d, t.id, u]);
  const S = (L) => new Date(L).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), I = () => {
    b(!1), y(!0);
  };
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ e(
      iI,
      {
        document: t,
        showDetails: n,
        showHoverInfo: a,
        selected: o,
        onToggleSelection: r,
        selectionEnabled: s,
        onSelect: () => b(!0),
        onQuickAction: () => y(!0)
      }
    ),
    /* @__PURE__ */ e(Wn, { open: h, onOpenChange: b, children: /* @__PURE__ */ i(Nn, { className: "max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0 bg-card", children: [
      /* @__PURE__ */ e(wn, { className: "p-6 pb-0", children: /* @__PURE__ */ e(Cn, { className: "truncate pr-8", title: N, children: N }) }),
      /* @__PURE__ */ e(Ee, { className: "border-b mt-6" }),
      /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col md:flex-row overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center p-6 min-h-[300px] bg-muted/30", children: v ? /* @__PURE__ */ e(
          "img",
          {
            src: v,
            alt: N,
            className: "max-w-full max-h-[60vh] object-contain rounded-sm"
          }
        ) : /* @__PURE__ */ e("div", { className: "text-muted-foreground text-sm", children: l("states.loading") }) }),
        /* @__PURE__ */ i("div", { className: "w-full md:w-64 flex-shrink-0 border-t md:border-t-0 md:border-l overflow-y-auto flex flex-col", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-col p-4 gap-4 flex-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(gl, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l("properties.type") }),
                /* @__PURE__ */ e(ve, { children: w })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(fl, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l("properties.format") }),
                /* @__PURE__ */ e("p", { className: "text-sm", children: A })
              ] })
            ] }),
            t.created_at && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Rn, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l("properties.createdAt") }),
                /* @__PURE__ */ e("p", { className: "text-sm", children: S(t.created_at) })
              ] })
            ] }),
            t.updated_at && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Rn, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l("properties.modified") }),
                /* @__PURE__ */ e("p", { className: "text-sm", children: S(t.updated_at) })
              ] })
            ] }),
            t.created_by && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(gn, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l("properties.createdBy") }),
                /* @__PURE__ */ e("p", { className: "text-sm", children: p(t.created_by, void 0) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i("div", { className: "mt-auto", children: [
            /* @__PURE__ */ e(Ee, {}),
            /* @__PURE__ */ e("div", { className: "p-4", children: /* @__PURE__ */ i(
              z,
              {
                className: "w-full",
                onClick: I,
                children: [
                  /* @__PURE__ */ e(go, { className: "h-4 w-4 mr-2" }),
                  "Open Asset"
                ]
              }
            ) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      ht,
      {
        documentId: t.id,
        isOpen: C,
        onClose: () => y(!1)
      }
    )
  ] });
}
function rI({ item: t }) {
  const { client: n } = de(), a = Ie(), [o, r] = g(null), [s, l] = g(!1), d = () => {
    if (t.itemType === "collection")
      return /* @__PURE__ */ e(bl, { className: "h-5 w-5 text-muted-foreground" });
    const m = t, f = m.content?.type?.toLowerCase() || "", p = m.type?.id?.toLowerCase() || "";
    return f.startsWith("image/") || p === "image" ? /* @__PURE__ */ e(fn, { className: "h-5 w-5 text-muted-foreground" }) : f.startsWith("video/") || p === "video" ? /* @__PURE__ */ e(Bn, { className: "h-5 w-5 text-muted-foreground" }) : f.startsWith("audio/") || p === "audio" ? /* @__PURE__ */ e(Hn, { className: "h-5 w-5 text-muted-foreground" }) : f.includes("pdf") || p === "pdf" ? /* @__PURE__ */ e(Je, { className: "h-5 w-5 text-muted-foreground" }) : f.includes("zip") || f.includes("tar") || f.includes("rar") || p === "archive" ? /* @__PURE__ */ e(va, { className: "h-5 w-5 text-muted-foreground" }) : f.includes("code") || f.includes("javascript") || f.includes("typescript") || p === "code" ? /* @__PURE__ */ e(xa, { className: "h-5 w-5 text-muted-foreground" }) : /* @__PURE__ */ e(wt, { className: "h-5 w-5 text-muted-foreground" });
  }, c = () => {
    if (t.itemType === "collection") return !1;
    const m = t, f = m.content?.type?.toLowerCase() || "", p = m.type?.id?.toLowerCase() || "";
    return f.startsWith("image/") || p === "image" || f.startsWith("video/") || p === "video" || f.includes("pdf") || p === "pdf";
  };
  return M(() => {
    n && t.itemType === "document" && c() && zt(
      n,
      t,
      r,
      () => {
      },
      // We don't need alt text for small thumbnails
      a,
      64
      // Small thumbnail size
    ).catch(() => {
      l(!0);
    });
  }, [t.id, n]), c() && o && !s ? /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded overflow-hidden bg-muted flex-shrink-0", children: /* @__PURE__ */ e(
    "img",
    {
      src: o,
      alt: "",
      className: "w-full h-full object-cover",
      onError: () => l(!0)
    }
  ) }) : /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded bg-muted/50 flex items-center justify-center flex-shrink-0", children: d() });
}
function rs({ items: t, onCollectionClick: n, loading: a, loadingMore: o, hasMore: r, loadMore: s, selectedIds: l, onToggleSelection: d, onSelectAll: c, onClearSelection: u, searchActive: m }) {
  const { t: f } = K(["collections", "common"]), { client: p } = de(), { registry: h } = tt(), { getUserDisplayName: b } = Ct(p), C = ge(null), [y, v] = g(m ? "relevance" : "name"), [x, N] = g("asc");
  M(() => {
    v(m ? "relevance" : "name"), m || N("asc");
  }, [m]);
  const w = !!d, A = t.filter(($) => $.itemType === "document"), S = l?.size ?? 0, I = A.length > 0 && A.every(($) => l?.has($.id)), L = S > 0 && !I, V = () => {
    I ? u?.() : c?.();
  }, G = ($) => {
    y === $ ? N(x === "asc" ? "desc" : "asc") : (v($), N("asc"));
  }, R = () => {
    if (!C.current || a || o || !r || !s)
      return;
    const { scrollTop: $, scrollHeight: T, clientHeight: X } = C.current;
    T - $ - X < 100 && s();
  };
  M(() => {
    const $ = C.current;
    if ($)
      return $.addEventListener("scroll", R), () => $.removeEventListener("scroll", R);
  }, [a, o, r, s]);
  const j = ce(() => y === "relevance" ? t : [...t].sort(($, T) => {
    let X = "", U = "";
    switch (y) {
      case "name":
        X = $.name?.toLowerCase() || "", U = T.name?.toLowerCase() || "";
        break;
      case "type":
        X = $.itemType === "collection" ? "collection" : $.type?.id || "", U = T.itemType === "collection" ? "collection" : T.type?.id || "";
        break;
      case "created_at":
        X = $.created_at ? new Date($.created_at).getTime() : 0, U = T.created_at ? new Date(T.created_at).getTime() : 0;
        break;
      case "updated_at":
        X = $.updated_at ? new Date($.updated_at).getTime() : 0, U = T.updated_at ? new Date(T.updated_at).getTime() : 0;
        break;
      case "created_by":
        X = $.created_by || "", U = T.created_by || "";
        break;
    }
    return X < U ? x === "asc" ? -1 : 1 : X > U ? x === "asc" ? 1 : -1 : 0;
  }), [t, y, x]), O = ($) => $ ? new Date($).toLocaleDateString() : "-", Q = ($) => {
    if ($.itemType === "collection")
      return f("common:collection");
    const T = $;
    return h?.getTypeName(T.type?.id || "") || T.type?.name || f("common:document") || "Document";
  }, ee = ($) => {
    if ($.itemType === "collection") return "-";
    const T = $;
    return T.created_by ? b(T.created_by, void 0) : "-";
  }, te = ({ field: $ }) => y !== $ ? /* @__PURE__ */ e(ji, { className: "h-3 w-3 ml-1 opacity-50" }) : x === "asc" ? /* @__PURE__ */ e(mo, { className: "h-3 w-3 ml-1" }) : /* @__PURE__ */ e(po, { className: "h-3 w-3 ml-1" }), k = ($, T) => {
    $.itemType === "collection" && n && (T.stopPropagation(), n($));
  }, _ = ($, T) => {
    $.stopPropagation(), $.preventDefault(), d?.(T);
  }, q = ($) => {
    const T = l?.has($.id) ?? !1, X = $.itemType === "document", U = $?.properties?.title || $?.name || $.id, E = /* @__PURE__ */ i(
      "div",
      {
        className: "flex items-center w-full min-w-0 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors",
        onClick: (H) => k($, H),
        children: [
          w && /* @__PURE__ */ e(
            "div",
            {
              className: "w-10 p-2 flex items-center justify-center flex-shrink-0",
              onClick: (H) => X ? _(H, $.id) : void 0,
              children: X && /* @__PURE__ */ e(
                Xe,
                {
                  checked: T,
                  onCheckedChange: () => d?.($.id),
                  onClick: (H) => H.stopPropagation()
                }
              )
            }
          ),
          /* @__PURE__ */ e("div", { className: "w-12 sm:w-14 p-2 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(rI, { item: $ }) }),
          /* @__PURE__ */ e("div", { className: "flex-1 w-0 min-w-0 p-2 font-medium truncate", title: U, children: U }),
          /* @__PURE__ */ e("div", { className: "hidden md:flex w-32 lg:w-40 p-2 flex-shrink-0", children: /* @__PURE__ */ e(ve, { variant: "outline", className: "text-xs truncate max-w-full", children: Q($) }) }),
          /* @__PURE__ */ e("div", { className: "hidden lg:block w-24 xl:w-28 p-2 text-muted-foreground text-sm flex-shrink-0", children: O($.created_at) }),
          /* @__PURE__ */ e("div", { className: "hidden xl:block w-28 p-2 text-muted-foreground text-sm flex-shrink-0", children: O($.updated_at) }),
          /* @__PURE__ */ e("div", { className: "hidden 2xl:block w-36 p-2 text-muted-foreground text-sm truncate flex-shrink-0", title: ee($), children: ee($) })
        ]
      },
      $.id
    );
    return $.itemType === "document" ? /* @__PURE__ */ e(ht, { documentId: $.id, children: E }, $.id) : E;
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full w-full max-w-full border border-border rounded-sm overflow-hidden", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center w-full min-w-0 bg-muted/50 border-b border-border flex-shrink-0", children: [
      w && /* @__PURE__ */ e("div", { className: "w-10 p-2 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(
        Xe,
        {
          checked: I,
          onCheckedChange: V,
          className: L ? "data-[state=checked]:bg-primary" : "",
          ...L && { "data-state": "indeterminate" }
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "w-12 sm:w-14 p-2 flex-shrink-0" }),
      /* @__PURE__ */ e(
        "div",
        {
          className: "flex-1 w-0 min-w-0 p-2 cursor-pointer hover:text-foreground select-none text-sm font-medium text-muted-foreground",
          onClick: () => G("name"),
          children: /* @__PURE__ */ i("span", { className: "flex items-center", children: [
            "Name",
            /* @__PURE__ */ e(te, { field: "name" })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "hidden md:flex w-32 lg:w-40 p-2 cursor-pointer hover:text-foreground select-none text-sm font-medium text-muted-foreground flex-shrink-0",
          onClick: () => G("type"),
          children: /* @__PURE__ */ i("span", { className: "flex items-center", children: [
            "Type",
            /* @__PURE__ */ e(te, { field: "type" })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "hidden lg:block w-24 xl:w-28 p-2 cursor-pointer hover:text-foreground select-none text-sm font-medium text-muted-foreground flex-shrink-0",
          onClick: () => G("created_at"),
          children: /* @__PURE__ */ i("span", { className: "flex items-center", children: [
            "Created",
            /* @__PURE__ */ e(te, { field: "created_at" })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "hidden xl:block w-28 p-2 cursor-pointer hover:text-foreground select-none text-sm font-medium text-muted-foreground flex-shrink-0",
          onClick: () => G("updated_at"),
          children: /* @__PURE__ */ i("span", { className: "flex items-center", children: [
            "Modified",
            /* @__PURE__ */ e(te, { field: "updated_at" })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "hidden 2xl:block w-36 p-2 cursor-pointer hover:text-foreground select-none text-sm font-medium text-muted-foreground flex-shrink-0",
          onClick: () => G("created_by"),
          children: /* @__PURE__ */ i("span", { className: "flex items-center", children: [
            "Creator",
            /* @__PURE__ */ e(te, { field: "created_by" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { ref: C, className: "flex-1 overflow-y-auto overflow-x-hidden bg-background", children: [
      j.map(q),
      (o || a) && t.length > 0 && /* @__PURE__ */ e("div", { className: "w-full flex justify-center items-center p-4", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }),
      r && s && !o && t.length > 0 && /* @__PURE__ */ e("div", { className: "h-4" })
    ] })
  ] });
}
function _a({ value: t, onValueChange: n }) {
  const { t: a } = K("common");
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ e(
      z,
      {
        variant: "outline",
        size: "icon",
        onClick: () => {
          n(t === "grid" ? "table" : "grid");
        },
        className: "h-8 w-8 sm:hidden",
        "aria-label": `Switch to ${t === "grid" ? "table" : "grid"} view`,
        children: t === "grid" ? /* @__PURE__ */ e(Ln, { className: "h-4 w-4" }) : /* @__PURE__ */ e(jo, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ i(
      Da,
      {
        type: "single",
        value: t,
        onValueChange: (r) => r && n(r),
        variant: "outline",
        className: "hidden sm:flex h-9",
        children: [
          /* @__PURE__ */ e(_t, { value: "grid", "aria-label": a("tables.gridView"), children: /* @__PURE__ */ e(Ln, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ e(_t, { value: "table", "aria-label": a("tables.tableView"), children: /* @__PURE__ */ e(jo, { className: "h-4 w-4" }) })
        ]
      }
    )
  ] });
}
function sI({ collectionId: t }) {
  const { t: n } = K(["collections", "common"]), { client: a } = de(), { registry: o } = tt(), r = Ie(), [s, l] = g(null), [d, c] = g([]), [u, m] = g(!0), [f, p] = g(!1), [h, b] = g(localStorage.getItem(pa) === "open"), [C, y] = g([]), [v, x] = g(t), [N, w] = g(!1), [A, S] = g("all"), [I, L] = g(!1), [V, G] = g(() => {
    const T = localStorage.getItem(ln);
    return T === "grid" || T === "table" ? T : "grid";
  }), R = (T) => {
    localStorage.setItem(ln, T), G(T);
  };
  Pr(t, s?.name);
  const j = async (T) => {
    try {
      const X = await a.store.collections.retrieve(T), U = a.store.collections.searchMembers(T, { limit: 1e3 }), E = a.store.collections.searchChildren(T, { limit: 1e3 }), [H, P] = await Promise.all([U, E]), B = [
        ...P.map((W) => ({ ...W, itemType: "collection" })),
        ...H.results.map((W) => ({ ...W, itemType: "document" }))
      ];
      N && await new Promise((W) => setTimeout(W, 150)), l(X), c(B);
    } catch (X) {
      r({
        status: "error",
        title: "Failed to load collection",
        description: X.message || "An error occurred",
        duration: 3e3
      });
    } finally {
      m(!1), p(!1), w(!1);
    }
  };
  M(() => {
    if (!a) return;
    (async () => {
      const X = await a.store.collections.retrieve(t);
      y([{ id: t, name: X.name }]), x(t);
    })();
  }, [a, t]), M(() => {
    !a || !v || (N ? p(!0) : s || m(!0), j(v));
  }, [a, v]);
  const O = () => {
    const T = h;
    localStorage.setItem(pa, T ? "closed" : "open"), b(!T);
  }, Q = (T) => {
    w(!0), S("all"), y((X) => [...X, { id: T.id, name: T.name }]), x(T.id);
  }, ee = async (T) => {
    w(!0), p(!0), S("all"), await new Promise((U) => setTimeout(U, 100));
    const X = C[T];
    y((U) => U.slice(0, T + 1)), x(X.id);
  }, te = ce(() => A === "all" ? d : A === "collections" ? d.filter((T) => T.itemType === "collection") : A === "documents" ? d.filter((T) => T.itemType === "document") : d, [d, A]), k = ce(() => d.filter((T) => T.itemType === "collection").length, [d]), _ = ce(() => d.filter((T) => T.itemType === "document").length, [d]), q = k > 0 && _ > 0, $ = o?.getTypeName(s?.type?.id || "") || s?.type?.name || n("common:collection");
  return u ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : s ? /* @__PURE__ */ i("div", { className: "flex flex-col h-full gap-2 sm:gap-3 md:gap-4 p-2", children: [
    /* @__PURE__ */ e(ye, { className: "shadow-md bg-muted/50 overflow-hidden", children: /* @__PURE__ */ i("div", { className: `flex flex-col gap-2 px-3 sm:px-4 py-2.5 sm:py-3 transition-opacity duration-200 overflow-hidden ${f ? "opacity-50" : "opacity-100"}`, children: [
      /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-2", children: [
        /* @__PURE__ */ e("h1", { className: "text-base sm:text-lg md:text-xl font-semibold truncate flex-1 w-[50px] min-w-0", title: s.name, children: s.name }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0", children: [
          q && /* @__PURE__ */ i(nn, { children: [
            /* @__PURE__ */ e(an, { asChild: !0, children: /* @__PURE__ */ i(
              z,
              {
                variant: "outline",
                size: "icon",
                className: "h-8 w-8 sm:h-9 sm:w-auto sm:px-3 sm:gap-1.5 lg:hidden",
                children: [
                  /* @__PURE__ */ e(Oi, { className: "h-4 w-4" }),
                  /* @__PURE__ */ e("span", { className: "hidden sm:inline text-xs capitalize", children: A })
                ]
              }
            ) }),
            /* @__PURE__ */ i(jt, { align: "start", children: [
              /* @__PURE__ */ i(at, { onClick: () => S("all"), children: [
                /* @__PURE__ */ e(Me, { className: `h-4 w-4 mr-2 ${A === "all" ? "opacity-100" : "opacity-0"}` }),
                n("collections:detail.all")
              ] }),
              /* @__PURE__ */ i(at, { onClick: () => S("collections"), children: [
                /* @__PURE__ */ e(Me, { className: `h-4 w-4 mr-2 ${A === "collections" ? "opacity-100" : "opacity-0"}` }),
                n("collections:detail.collectionsCount", { count: k })
              ] }),
              /* @__PURE__ */ i(at, { onClick: () => S("documents"), children: [
                /* @__PURE__ */ e(Me, { className: `h-4 w-4 mr-2 ${A === "documents" ? "opacity-100" : "opacity-0"}` }),
                n("collections:detail.documentsCount", { count: _ })
              ] })
            ] })
          ] }),
          q && /* @__PURE__ */ i("div", { className: "hidden lg:flex items-center gap-1 border rounded-md p-1 bg-background", children: [
            /* @__PURE__ */ e(
              z,
              {
                variant: A === "all" ? "default" : "ghost",
                size: "sm",
                onClick: () => S("all"),
                className: "h-7 px-2 text-xs",
                children: n("collections:detail.all")
              }
            ),
            /* @__PURE__ */ e(
              z,
              {
                variant: A === "collections" ? "default" : "ghost",
                size: "sm",
                onClick: () => S("collections"),
                className: "h-7 px-2 text-xs",
                children: n("collections:detail.collections")
              }
            ),
            /* @__PURE__ */ e(
              z,
              {
                variant: A === "documents" ? "default" : "ghost",
                size: "sm",
                onClick: () => S("documents"),
                className: "h-7 px-2 text-xs",
                children: n("collections:detail.documents")
              }
            )
          ] }),
          /* @__PURE__ */ e(_a, { value: V, onValueChange: R }),
          /* @__PURE__ */ i(
            z,
            {
              onClick: () => L(!0),
              size: "icon",
              className: "h-8 w-8 sm:h-9 sm:w-auto sm:px-3 sm:gap-1.5 border border-primary/50 bg-popover text-popover-foreground hover:bg-primary/50",
              children: [
                /* @__PURE__ */ e(Ui, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: n("common:actions.edit") })
              ]
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "icon",
              onClick: O,
              className: "h-8 w-8 sm:h-9 sm:w-9",
              children: h ? /* @__PURE__ */ e(Gi, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Wi, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      C.length > 1 && /* @__PURE__ */ e("div", { className: "flex items-center gap-1 text-xs text-muted-foreground overflow-x-auto hide-scrollbar -mx-1 px-1", children: C.map((T, X) => /* @__PURE__ */ i("div", { className: "flex items-center gap-1 flex-shrink-0 max-w-[120px] sm:max-w-[180px] md:max-w-[220px]", children: [
        X > 0 && /* @__PURE__ */ e(mt, { className: "h-3 w-3 flex-shrink-0 text-muted-foreground/60" }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => ee(X),
            className: `truncate min-w-0 hover:cursor-pointer hover:text-foreground transition-colors ${X === C.length - 1 ? "font-medium text-foreground" : "hover:underline"}`,
            disabled: X === C.length - 1 || f,
            title: T.name,
            children: T.name
          }
        )
      ] }, T.id)) })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "flex flex-col md:flex-row flex-1 gap-2 sm:gap-3 md:gap-4 min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ e("div", { className: `${h ? "hidden md:flex" : "flex"} flex-1 min-w-0 overflow-hidden`, children: /* @__PURE__ */ e("div", { className: `w-full h-full min-w-0 overflow-auto transition-opacity duration-200 ${f ? "opacity-0" : "opacity-100"}`, children: te.length === 0 ? /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground", children: d.length === 0 ? /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e("p", { children: n("collections:detail.noItems") }),
        /* @__PURE__ */ e("p", { className: "text-sm mt-1", children: n("collections:detail.noItemsHelp") })
      ] }) : /* @__PURE__ */ i(xe, { children: [
        /* @__PURE__ */ e("p", { children: n("collections:detail.noFilterResults", { filter: A === "collections" ? n("collections:detail.collections").toLowerCase() : n("collections:detail.documents").toLowerCase() }) }),
        /* @__PURE__ */ e("p", { className: "text-sm mt-1", children: n("collections:detail.noFilterResultsHelp") })
      ] }) }) : V === "grid" ? /* @__PURE__ */ e("div", { className: `grid gap-4 ${h ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"} items-start`, children: te.map((T) => T.itemType === "collection" ? /* @__PURE__ */ e(
        BD,
        {
          collection: T,
          showDetails: !0,
          onClick: () => Q(T)
        },
        T.id
      ) : /* @__PURE__ */ e(
        Dn,
        {
          document: T,
          showDetails: !0,
          showHoverInfo: !1
        },
        T.id
      )) }) : /* @__PURE__ */ e(
        rs,
        {
          items: te,
          onCollectionClick: Q
        }
      ) }) }),
      h && /* @__PURE__ */ i(ye, { className: "flex flex-col shadow-md w-full md:w-80 lg:w-96 flex-shrink-0 bg-muted/50 overflow-auto", children: [
        /* @__PURE__ */ e(Te, { children: /* @__PURE__ */ e(ke, { children: n("common:documentPanel.properties") }) }),
        /* @__PURE__ */ i(Ce, { className: `space-y-4 transition-opacity duration-200 ${f ? "opacity-50" : "opacity-100"}`, children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e(Jt, { children: n("common:properties.name") }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: s.name })
          ] }),
          /* @__PURE__ */ e(Ee, {}),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e(Jt, { children: n("common:properties.type") }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: $ })
          ] }),
          /* @__PURE__ */ e(Ee, {}),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e(Jt, { children: n("common:items", { count: d.length }) }),
            /* @__PURE__ */ i("p", { className: "text-sm text-muted-foreground", children: [
              d.length,
              " ",
              n("collections:detail.total"),
              q && /* @__PURE__ */ i("span", { className: "text-xs ml-1", children: [
                "(",
                n("collections:detail.collectionsCount", { count: k }),
                ", ",
                n("collections:detail.documentsCount", { count: _ }),
                ")"
              ] })
            ] })
          ] }),
          s.created_at && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(Ee, {}),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Jt, { children: n("common:properties.createdAt") }),
              /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: new Date(s.created_at).toLocaleString() })
            ] })
          ] }),
          s.updated_at && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(Ee, {}),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Jt, { children: n("common:properties.updatedAt") }),
              /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: new Date(s.updated_at).toLocaleString() })
            ] })
          ] }),
          s?.description && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(Ee, {}),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Jt, { children: n("common:properties.description") }),
              /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: s.description })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      Io,
      {
        isOpen: I,
        onClose: () => L(!1),
        collection: s,
        onSuccess: () => j(v)
      }
    )
  ] }) : /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: n("collections:detail.notFound") }) });
}
function Jt({ children: t }) {
  return /* @__PURE__ */ e("p", { className: "text-sm font-medium mb-1", children: t });
}
function lI() {
  const t = Mn(), n = et(), a = t.id;
  return a ? /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(sI, { collectionId: a }) }) : (n("/collections"), null);
}
function cI({ collection: t, onClick: n }) {
  const { t: a } = K("common"), { client: o } = de(), { registry: r } = tt(), s = Ie(), [l, d] = g(0), c = t.properties?.image, [u, m] = g(""), f = r?.getTypeName(t.type?.id || "") || t.type?.name || a("collection");
  return M(() => {
    o && c && Gn(o, c, m, () => {
    }, s, 512);
  }, [o, c]), M(() => {
    if (!o || !t.id)
      return;
    (async () => {
      try {
        const [h, b] = await Promise.all([
          o.store.collections.computeFacets(t.id, {
            facets: [{ name: "total", field: "total" }]
          }),
          o.store.collections.searchChildren(t.id, { limit: 1e4 })
        ]), C = (h?.total || 0) + b.length;
        d(C);
      } catch (h) {
        console.error("Failed to fetch member count:", h), d(0);
      }
    })();
  }, [o, t.id]), /* @__PURE__ */ i(
    "div",
    {
      className: "border overflow-hidden hover:shadow-md transition-shadow cursor-pointer group rounded-sm",
      onClick: () => n(t),
      children: [
        /* @__PURE__ */ i("div", { className: "relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden", children: [
          u ? /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute inset-0 bg-cover bg-center",
                style: { backgroundImage: `url(${u})` }
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" })
          ] }) : null,
          /* @__PURE__ */ e("div", { className: D(
            "relative z-10 transition-colors",
            u ? "text-white/80 group-hover:text-white" : "text-muted-foreground group-hover:text-foreground"
          ), children: /* @__PURE__ */ e(st, { className: "h-12 w-12" }) }),
          /* @__PURE__ */ e("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ e(ve, { className: "bg-primary/90 text-secondary backdrop-blur-sm shadow-lg", children: f }) }),
          /* @__PURE__ */ e("div", { className: "absolute bottom-2 left-2", children: /* @__PURE__ */ i(ve, { variant: "secondary", className: "backdrop-blur-sm", children: [
            l,
            " item",
            l > 1 && "s"
          ] }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", title: t.name, children: t.name }),
          t.updated_at && /* @__PURE__ */ e("div", { className: "flex flex-row items-center gap-2 text-xs text-muted-foreground", children: /* @__PURE__ */ e("span", { children: qt(t.updated_at) }) })
        ] }) })
      ]
    }
  );
}
function dI({ collection: t, onClick: n }) {
  const { t: a } = K("common"), { client: o } = de(), { registry: r } = tt(), [s, l] = g(0), d = r?.getTypeName(t.type?.id || "") || t.type?.name || a("collection");
  return M(() => {
    if (!o || !t.id) return;
    (async () => {
      try {
        const [u, m] = await Promise.all([
          o.store.collections.computeFacets(t.id, {
            facets: [{ name: "total", field: "total" }]
          }),
          o.store.collections.searchChildren(t.id, { limit: 1e4 })
        ]), f = (u?.total || 0) + m.length;
        l(f);
      } catch (u) {
        console.error("Failed to fetch member count:", u), l(0);
      }
    })();
  }, [o, t.id]), /* @__PURE__ */ i(
    Ke,
    {
      className: "cursor-pointer",
      onClick: n,
      children: [
        /* @__PURE__ */ e(Ae, { className: "font-medium overflow-hidden", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted", children: /* @__PURE__ */ e(st, { className: "h-4 w-4 text-muted-foreground" }) }),
          /* @__PURE__ */ e("span", { className: "truncate", title: t.name, children: t.name })
        ] }) }),
        /* @__PURE__ */ e(Ae, { className: "hidden md:table-cell text-muted-foreground overflow-hidden", children: /* @__PURE__ */ e("span", { className: "truncate block", title: d, children: d }) }),
        /* @__PURE__ */ e(Ae, { className: "text-right", children: /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ e(Je, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { children: s })
        ] }) }),
        /* @__PURE__ */ e(Ae, { className: "hidden lg:table-cell text-muted-foreground text-sm", children: t.updated_at ? qt(t.updated_at) : "—" })
      ]
    }
  );
}
function uI({ collections: t, loading: n, onCollectionClick: a }) {
  const { t: o } = K("common");
  return n ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: Array.from({ length: 6 }).map((r, s) => /* @__PURE__ */ e(Ve, { className: "h-12 w-full" }, s)) }) : /* @__PURE__ */ i(So, { className: "table-fixed", children: [
    /* @__PURE__ */ e(xn, { children: /* @__PURE__ */ i(Ke, { children: [
      /* @__PURE__ */ e(Ge, { className: "w-[60%]", children: o("properties.name") }),
      /* @__PURE__ */ e(Ge, { className: "hidden md:table-cell w-[18%]", children: o("properties.type") }),
      /* @__PURE__ */ e(Ge, { className: "text-right w-[10%]", children: o("tables.items") }),
      /* @__PURE__ */ e(Ge, { className: "hidden lg:table-cell w-[12%]", children: o("properties.updatedAt") })
    ] }) }),
    /* @__PURE__ */ e(yn, { children: t.map((r) => /* @__PURE__ */ e(
      dI,
      {
        collection: r,
        onClick: () => a(r)
      },
      r.id
    )) })
  ] });
}
function mI() {
  const [t, n] = g(() => {
    const o = localStorage.getItem(Xo);
    return o === "grid" || o === "table" ? o : "grid";
  }), a = J((o) => {
    localStorage.setItem(Xo, o), n(o);
  }, []);
  return [t, a];
}
const pI = {
  personal: "collections:personal",
  organization: "collections:organization"
};
function hI({ category: t }) {
  const { t: n } = K(["collections", "common"]), { client: a, user: o } = de(), r = Ie(), s = et(), [l, d] = mI(), c = To(), u = 50, [m, f] = g([]), [p, h] = g(!0), [b, C] = g(!1), [y, v] = g(!1), [x, N] = g(""), [w, A] = g(""), [S, I] = g(!1), L = J((_, q) => {
    const $ = {
      limit: u,
      dynamic: !1
    };
    return q && ($.offset = q), _ && _.trim() && ($.name = _.trim()), c && ($.types = c), t === "personal" && o?.sub ? $.match = { "properties.user": o.sub, "properties.favorites": { $ne: !0 } } : t === "organization" && ($.match = { "properties.user": { $exists: !1 } }), $;
  }, [t, o, c]), V = J(async (_) => {
    if (a) {
      h(!0);
      try {
        const q = L(_), T = await a.store.collections.search(q);
        f(T), v(T.length >= u);
      } catch (q) {
        r({
          status: "error",
          title: "Failed to load collections",
          description: q.message || "An error occurred",
          duration: 3e3
        });
      } finally {
        h(!1);
      }
    }
  }, [a, L, r]), G = J(async () => {
    if (!(!a || b || !y)) {
      C(!0);
      try {
        const _ = L(w, m.length), $ = await a.store.collections.search(_);
        f((T) => [...T, ...$]), v($.length >= u);
      } catch (_) {
        r({
          status: "error",
          title: "Failed to load more collections",
          description: _.message || "An error occurred",
          duration: 3e3
        });
      } finally {
        C(!1);
      }
    }
  }, [a, b, y, L, w, m.length, r]), R = ge(null);
  M(() => {
    const _ = R.current;
    if (!_) return;
    const q = new IntersectionObserver(
      ($) => {
        $[0].isIntersecting && y && !b && !p && G();
      },
      { threshold: 0.1 }
    );
    return q.observe(_), () => q.disconnect();
  }, [y, b, p, G]), M(() => {
    N(""), A(""), f([]), v(!1);
  }, [t]), M(() => {
    const _ = setTimeout(() => {
      A(x);
    }, 300);
    return () => clearTimeout(_);
  }, [x]), M(() => {
    V(w);
  }, [V, w]);
  const j = () => {
    V();
  }, O = (_) => {
    s(`/collections/${_.id}`);
  }, Q = pI[t], ee = Q ? n(Q) : void 0, te = ee ? n("collections:noCollectionsYet", { label: ee }) : n("collections:noCollectionsYetGeneric"), k = ee ? n("collections:noCollectionsFound", { label: ee }) : n("collections:noCollectionsFoundGeneric");
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full gap-4 p-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ i("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(vt, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ e(
          be,
          {
            placeholder: n("collections:searchPlaceholder"),
            value: x,
            onChange: (_) => N(_.target.value),
            className: "pl-10"
          }
        )
      ] }),
      /* @__PURE__ */ e(_a, { value: l, onValueChange: d }),
      /* @__PURE__ */ i(z, { onClick: () => I(!0), children: [
        /* @__PURE__ */ e(tn, { className: "h-4 w-4 mr-2" }),
        n("collections:createCollection")
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-auto", children: p ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : m.length === 0 ? /* @__PURE__ */ e(ye, { className: "h-full", children: /* @__PURE__ */ e(Ce, { className: "flex flex-col items-center justify-center h-full text-muted-foreground", children: x ? /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e(vt, { className: "h-12 w-12 mb-4" }),
      /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: k }),
      /* @__PURE__ */ e("p", { className: "text-sm mt-1", children: n("collections:tryAdjustingSearch") })
    ] }) : /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e(tn, { className: "h-12 w-12 mb-4" }),
      /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: te }),
      /* @__PURE__ */ e("p", { className: "text-sm mt-1", children: n("collections:createFirstCollection") }),
      /* @__PURE__ */ i(
        z,
        {
          onClick: () => I(!0),
          className: "mt-4",
          children: [
            /* @__PURE__ */ e(tn, { className: "h-4 w-4 mr-2" }),
            n("collections:createCollection")
          ]
        }
      )
    ] }) }) }) : l === "grid" ? /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", children: m.map((_) => /* @__PURE__ */ e(
        cI,
        {
          collection: _,
          onClick: O
        },
        _.id
      )) }),
      y && /* @__PURE__ */ e("div", { ref: R, className: "flex justify-center py-4", children: b && /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) })
    ] }) : /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e(
        uI,
        {
          collections: m,
          loading: !1,
          onCollectionClick: O
        }
      ),
      y && /* @__PURE__ */ e("div", { ref: R, className: "flex justify-center py-4", children: b && /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) })
    ] }) }),
    /* @__PURE__ */ e(
      Io,
      {
        isOpen: S,
        onClose: () => I(!1),
        onSuccess: j,
        category: t
      }
    )
  ] });
}
const gI = ["personal", "organization"];
function fI() {
  const t = et();
  return M(() => {
    t("/collections/personal", { replace: !0 });
  }, [t]), null;
}
function Ni() {
  const n = fa().pathname.split("/").filter(Boolean).pop(), a = gI.includes(n) ? n : "personal";
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(hI, { category: a }) });
}
function Ea() {
  return Do("ECM_TYPES_WHITELIST");
}
const bI = (t = 20) => {
  const { client: n } = de(), a = Ie(), o = Ea(), [r, s] = g([]), [l, d] = g(!0), [c, u] = g(null), m = J(async () => {
    if (!n) {
      d(!1);
      return;
    }
    d(!0), u(null);
    try {
      const p = (await n.objects.list({
        limit: t,
        query: {
          ...o && { types: o }
        },
        sort: [{ field: "created_at", order: "desc" }],
        select: "id,name,createdAt,creator,type,size,mimeType"
      })).map((x) => ({
        id: x.id,
        documentId: x.id,
        documentName: x.name || "Untitled",
        action: "upload",
        timestamp: x.created_at,
        userId: x.created_by,
        fileType: x.type?.id,
        fileSize: x.content?.size || x.metadata?.size,
        userName: void 0,
        userAvatar: void 0
      })), h = [...new Set(p.map((x) => x.userId).filter(Boolean))], b = h.map(
        (x) => n.users.retrieve(x).catch(() => null)
      ), C = await Promise.allSettled(b), y = /* @__PURE__ */ new Map();
      C.forEach((x, N) => {
        x.status === "fulfilled" && x.value && y.set(h[N], x.value);
      });
      const v = p.map((x) => ({
        ...x,
        userName: x.userId ? y.get(x.userId)?.name : void 0,
        userAvatar: x.userId ? y.get(x.userId)?.picture : void 0
      }));
      s(v);
    } catch (f) {
      const p = f;
      u(p), console.error("Failed to fetch recent activity:", p), a && a({
        status: "error",
        title: "Failed to load activity",
        description: "Unable to fetch recent activity. Please try again."
      });
    } finally {
      d(!1);
    }
  }, [n, t, a, o]);
  return M(() => {
    m();
  }, [m]), { activities: r, loading: l, error: c, refetch: m };
};
function vI({ activity: t }) {
  const n = (l) => {
    const d = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - d.getTime(), m = Math.floor(u / 6e4), f = Math.floor(u / 36e5), p = Math.floor(u / 864e5);
    return m < 1 ? "Just now" : m < 60 ? `${m}m ago` : f < 24 ? `${f}h ago` : p < 7 ? `${p}d ago` : d.toLocaleDateString();
  }, a = (l) => l ? l < 1024 ? `${l} B` : l < 1048576 ? `${(l / 1024).toFixed(1)} KB` : l < 1073741824 ? `${(l / 1048576).toFixed(1)} MB` : `${(l / 1073741824).toFixed(2)} GB` : "", o = () => {
    switch (t.action) {
      case "upload":
        return /* @__PURE__ */ e(bn, { className: "h-4 w-4" });
      case "edit":
        return /* @__PURE__ */ e(Ga, { className: "h-4 w-4" });
      case "delete":
        return /* @__PURE__ */ e(ya, { className: "h-4 w-4" });
      case "view":
        return /* @__PURE__ */ e(rn, { className: "h-4 w-4" });
      default:
        return /* @__PURE__ */ e(Je, { className: "h-4 w-4" });
    }
  }, r = () => {
    switch (t.action) {
      case "upload":
        return "default";
      case "edit":
        return "secondary";
      case "delete":
        return "destructive";
      default:
        return "outline";
    }
  }, s = (l) => l ? l.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) : "U";
  return /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-4 py-3", children: [
    /* @__PURE__ */ i(da, { className: "h-9 w-9", children: [
      t.userAvatar && /* @__PURE__ */ e(ua, { src: t.userAvatar, alt: t.userName }),
      /* @__PURE__ */ e(ma, { children: s(t.userName) })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 flex-1 min-w-0", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", children: t.documentName }),
        /* @__PURE__ */ i(ve, { variant: r(), className: "flex flex-row items-center gap-1", children: [
          o(),
          /* @__PURE__ */ e("span", { className: "capitalize", children: t.action })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2 text-xs text-muted-foreground", children: [
        t.userName && /* @__PURE__ */ e("span", { children: t.userName }),
        t.userName && /* @__PURE__ */ e("span", { children: "•" }),
        /* @__PURE__ */ e("span", { children: n(t.timestamp) }),
        t.fileSize && /* @__PURE__ */ i(xe, { children: [
          /* @__PURE__ */ e("span", { children: "•" }),
          /* @__PURE__ */ e("span", { children: a(t.fileSize) })
        ] })
      ] })
    ] })
  ] });
}
function ss({ limit: t = 10, showHeader: n = !0, maxHeight: a = "266px" }) {
  const { t: o } = K("common"), { activities: r, loading: s } = bI(t);
  return s ? /* @__PURE__ */ i(ye, { className: "w-full h-full flex flex-col", style: { maxHeight: a }, children: [
    n && /* @__PURE__ */ e(Te, { className: "flex-shrink-0", children: /* @__PURE__ */ i(ke, { className: "flex flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(en, { className: "h-5 w-5" }),
      o("activityFeed.recentActivity")
    ] }) }),
    /* @__PURE__ */ e(Ce, { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: [...Array(5)].map((l, d) => /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-4", children: [
      /* @__PURE__ */ e(Ve, { className: "h-9 w-9 rounded-full" }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 flex-1", children: [
        /* @__PURE__ */ e(Ve, { className: "h-4 w-48" }),
        /* @__PURE__ */ e(Ve, { className: "h-3 w-32" })
      ] })
    ] }, d)) }) })
  ] }) : r.length === 0 ? /* @__PURE__ */ i(ye, { className: "w-full h-full flex flex-col", style: { maxHeight: a }, children: [
    n && /* @__PURE__ */ e(Te, { className: "flex-shrink-0", children: /* @__PURE__ */ i(ke, { className: "flex flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(en, { className: "h-5 w-5" }),
      o("activityFeed.recentActivity")
    ] }) }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-12 gap-2 flex-1", children: [
      /* @__PURE__ */ e(en, { className: "h-12 w-12 text-muted-foreground" }),
      /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: o("activityFeed.noActivity") }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("activityFeed.activityWillAppear") })
    ] })
  ] }) : /* @__PURE__ */ i(ye, { className: "w-full h-full flex flex-col", style: { maxHeight: a }, children: [
    n && /* @__PURE__ */ e(Te, { className: "flex-shrink-0", children: /* @__PURE__ */ i(ke, { className: "flex flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(en, { className: "h-5 w-5" }),
      o("activityFeed.recentActivity")
    ] }) }),
    /* @__PURE__ */ e(Ce, { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ e(Nt, { className: "h-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col", children: r.map((l, d) => /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ e(vI, { activity: l }),
      d < r.length - 1 && /* @__PURE__ */ e(Ee, {})
    ] }, l.id)) }) }) })
  ] });
}
function xI() {
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ e(ss, { limit: 50, showHeader: !1, maxHeight: "calc(100vh - 300px)" }) });
}
const yI = () => {
  const { client: t } = de(), n = Ie(), a = Ea(), [o, r] = g(null), [s, l] = g(!0), [d, c] = g(null), u = () => {
    const h = /* @__PURE__ */ new Date(), b = h.getDay(), C = h.getDate() - b + (b === 0 ? -6 : 1);
    return h.setDate(C), h.setHours(0, 0, 0, 0), h.toISOString();
  }, m = () => {
    const h = /* @__PURE__ */ new Date();
    return h.setDate(1), h.setHours(0, 0, 0, 0), h.toISOString();
  }, f = () => {
    const h = /* @__PURE__ */ new Date();
    return h.setMonth(0, 1), h.setHours(0, 0, 0, 0), h.toISOString();
  }, p = J(async () => {
    if (!t) {
      l(!1);
      return;
    }
    l(!0), c(null);
    try {
      const h = await Promise.allSettled([
        t.objects.computeFacets({
          facets: [
            { name: "total", field: "total" }
          ],
          ...a && { query: { types: a } }
        }),
        t.objects.count({
          query: {
            created_at: { $gte: u() },
            ...a && { type: { $in: a } }
          }
        }),
        t.objects.count({
          query: {
            created_at: { $gte: m() },
            ...a && { type: { $in: a } }
          }
        }),
        t.objects.count({
          query: {
            created_at: { $gte: f() },
            ...a && { type: { $in: a } }
          }
        })
      ]), C = (h[0].status === "fulfilled" ? h[0].value : null)?.total || 0, y = h[1].status === "fulfilled" ? h[1].value.count : 0, v = h[2].status === "fulfilled" ? h[2].value.count : 0, x = h[3].status === "fulfilled" ? h[3].value.count : 0;
      r({
        totalDocuments: C,
        documentsThisWeek: y,
        documentsThisMonth: v,
        documentsThisYear: x
      });
    } catch (h) {
      const b = h;
      c(b), console.error("Failed to fetch dashboard stats:", b), n && n({
        status: "error",
        title: "Failed to load statistics",
        description: "Unable to fetch dashboard statistics. Please try again."
      });
    } finally {
      l(!1);
    }
  }, [t, n, a]);
  return M(() => {
    p();
  }, [p]), { stats: o, loading: s, error: d, refetch: p };
};
function Zn({ icon: t, title: n, value: a, description: o, trend: r, loading: s }) {
  return s ? /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { className: "flex flex-row items-center justify-between pb-2", children: [
      /* @__PURE__ */ e(Ve, { className: "h-4 w-24" }),
      /* @__PURE__ */ e(Ve, { className: "h-4 w-4 rounded-full" })
    ] }),
    /* @__PURE__ */ i(Ce, { children: [
      /* @__PURE__ */ e(Ve, { className: "h-8 w-16 mb-2" }),
      /* @__PURE__ */ e(Ve, { className: "h-3 w-32" })
    ] })
  ] }) : /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { className: "flex flex-row items-center justify-between pb-2", children: [
      /* @__PURE__ */ e(ke, { className: "text-sm font-medium text-muted-foreground", children: n }),
      /* @__PURE__ */ e(t, { className: "h-4 w-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ i(Ce, { children: [
      /* @__PURE__ */ e("div", { className: "text-2xl font-bold", children: a }),
      o && /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: o }),
      r && /* @__PURE__ */ i("div", { className: D(
        "flex flex-row items-center gap-1 text-xs mt-2",
        r.isPositive ? "text-success" : "text-destructive"
      ), children: [
        r.isPositive ? /* @__PURE__ */ e(mo, { className: "h-3 w-3" }) : /* @__PURE__ */ e(po, { className: "h-3 w-3" }),
        /* @__PURE__ */ i("span", { children: [
          Math.abs(r.value),
          "% from last period"
        ] })
      ] })
    ] })
  ] });
}
function NI() {
  const { t } = K("common"), { stats: n, loading: a } = yI();
  return /* @__PURE__ */ i("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ e(
      Zn,
      {
        icon: Je,
        title: t("stats.totalDocuments"),
        value: n?.totalDocuments || 0,
        description: t("stats.allDocuments"),
        loading: a
      }
    ),
    /* @__PURE__ */ e(
      Zn,
      {
        icon: vl,
        title: t("stats.thisWeek"),
        value: n?.documentsThisWeek || 0,
        description: t("stats.documentsThisWeek"),
        loading: a
      }
    ),
    /* @__PURE__ */ e(
      Zn,
      {
        icon: xl,
        title: t("stats.thisMonth"),
        value: n?.documentsThisMonth || 0,
        description: t("stats.documentsThisMonth"),
        loading: a
      }
    ),
    /* @__PURE__ */ e(
      Zn,
      {
        icon: Rn,
        title: t("stats.thisYear"),
        value: n?.documentsThisYear || 0,
        description: t("stats.documentsThisYear"),
        loading: a
      }
    )
  ] });
}
function wI({ limit: t = 12 }) {
  const { client: n } = de(), a = Ie(), o = Ea(), [r, s] = g([]), [l, d] = g(!0);
  return M(() => {
    if (!n) {
      d(!1);
      return;
    }
    (async () => {
      d(!0);
      try {
        const u = await n.objects.list({
          limit: t,
          ...o && { query: { types: o } }
        });
        s(u);
      } catch (u) {
        console.error("Failed to fetch documents:", u), a && a({
          status: "error",
          title: "Failed to load documents",
          description: "Unable to fetch document previews. Please try again."
        });
      } finally {
        d(!1);
      }
    })();
  }, [n, t, a, o]), l ? /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [...Array(8)].map((c, u) => /* @__PURE__ */ i(ye, { className: "overflow-hidden", children: [
    /* @__PURE__ */ e(Ve, { className: "w-full aspect-square" }),
    /* @__PURE__ */ i(Ce, { className: "p-3", children: [
      /* @__PURE__ */ e(Ve, { className: "h-4 w-full mb-2" }),
      /* @__PURE__ */ e(Ve, { className: "h-3 w-24" })
    ] })
  ] }, u)) }) : r.length === 0 ? /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
    /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
    /* @__PURE__ */ i("div", { className: "text-center", children: [
      /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: "No documents found" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Upload your first document to see it here" })
    ] })
  ] }) }) : /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: r.map((c) => /* @__PURE__ */ e(Dn, { document: c, showHoverInfo: !0 }, c.id)) });
}
function CI() {
  const { t } = K("common"), n = et(), [a, o] = g(!1), [r, s] = g(!1), l = () => {
    o(!0);
  }, d = () => {
    n("/advanced-search");
  }, c = () => {
    s(!0);
  }, u = () => {
    n("/agents");
  };
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i(ye, { className: "w-full", children: [
      /* @__PURE__ */ e(Te, { children: /* @__PURE__ */ e(ke, { className: "text-base", children: t("quickActions.title") }) }),
      /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ i(z, { onClick: l, className: "justify-start", variant: "default", children: [
          /* @__PURE__ */ e(bn, { className: "h-4 w-4" }),
          t("quickActions.uploadDocument")
        ] }),
        /* @__PURE__ */ i(z, { onClick: d, className: "justify-start", variant: "outline", children: [
          /* @__PURE__ */ e(vt, { className: "h-4 w-4" }),
          t("quickActions.searchDocuments")
        ] }),
        /* @__PURE__ */ i(z, { onClick: c, className: "justify-start", variant: "outline", children: [
          /* @__PURE__ */ e(tn, { className: "h-4 w-4" }),
          t("quickActions.createCollection")
        ] }),
        /* @__PURE__ */ i(z, { onClick: u, className: "justify-start", variant: "outline", children: [
          /* @__PURE__ */ e(Ha, { className: "h-4 w-4" }),
          t("quickActions.latestAgents")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      Ur,
      {
        open: a,
        onOpenChange: o,
        onUploadDone: () => {
        }
      }
    ),
    /* @__PURE__ */ e(
      Io,
      {
        isOpen: r,
        onClose: () => s(!1)
      }
    )
  ] });
}
function SI() {
  const { t } = K("dashboard");
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ e(NI, {}),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:grid-rows-1", children: [
      /* @__PURE__ */ e("div", { className: "lg:col-span-1 flex", children: /* @__PURE__ */ e(CI, {}) }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-2 flex", children: /* @__PURE__ */ e(ss, { limit: 10 }) })
    ] }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between", children: /* @__PURE__ */ e("h2", { className: "text-lg font-semibold", children: t("recentDocuments") }) }),
      /* @__PURE__ */ e(wI, { limit: 12 })
    ] })
  ] });
}
function AI() {
  const { t } = K("dashboard"), [n, a] = g("overview");
  return /* @__PURE__ */ e("div", { className: "flex flex-col w-full h-full px-2", children: /* @__PURE__ */ i(Sn, { value: n, onValueChange: a, className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-end w-full pb-4", children: /* @__PURE__ */ i(An, { children: [
      /* @__PURE__ */ i(Re, { value: "overview", className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e(yl, { className: "h-4 w-4" }),
        t("overview")
      ] }),
      /* @__PURE__ */ i(Re, { value: "activity", className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e(en, { className: "h-4 w-4" }),
        t("activity")
      ] })
    ] }) }),
    /* @__PURE__ */ e($e, { value: "overview", className: "flex-1 overflow-auto pb-2", children: /* @__PURE__ */ e(SI, {}) }),
    /* @__PURE__ */ e($e, { value: "activity", className: "flex-1 overflow-auto pb-2", children: /* @__PURE__ */ e(xI, {}) })
  ] }) });
}
function DI({ areaName: t }) {
  const { t: n } = K("common"), { documents: a, loading: o } = os({ areaName: t, limit: 10 }), r = ge(null), [s, l] = g(!1), [d, c] = g(!1), u = J(() => {
    const f = r.current;
    f && (l(f.scrollLeft > 0), c(f.scrollLeft + f.clientWidth < f.scrollWidth - 1));
  }, []);
  M(() => {
    const f = r.current;
    if (!f) return;
    u(), f.addEventListener("scroll", u, { passive: !0 });
    const p = new ResizeObserver(u);
    return p.observe(f), () => {
      f.removeEventListener("scroll", u), p.disconnect();
    };
  }, [u, a]);
  const m = (f) => {
    r.current?.scrollBy({
      left: f === "left" ? -200 : 200,
      behavior: "smooth"
    });
  };
  return !o && a.length === 0 ? /* @__PURE__ */ e(PI, {}) : /* @__PURE__ */ i("div", { className: "grid grid-cols-1 gap-3 min-w-0", children: [
    /* @__PURE__ */ e("h2", { className: "text-lg font-semibold", children: n("recentlyViewed.title") }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "relative group", children: [
      s && /* @__PURE__ */ e(wi, { direction: "left", onClick: () => m("left") }),
      /* @__PURE__ */ e(
        "div",
        {
          ref: r,
          className: "flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2",
          style: { scrollbarWidth: "none" },
          children: o && a.length === 0 ? Array.from({ length: 5 }).map((f, p) => /* @__PURE__ */ e(II, {}, p)) : a.map((f) => /* @__PURE__ */ e(TI, { document: f }, f.id))
        }
      ),
      d && /* @__PURE__ */ e(wi, { direction: "right", onClick: () => m("right") })
    ] })
  ] });
}
function TI({ document: t }) {
  return /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-36 snap-start", children: /* @__PURE__ */ e(Dn, { document: t, showHoverInfo: !0 }) });
}
function II() {
  return /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-36 snap-start", children: /* @__PURE__ */ e("div", { className: "border rounded-sm overflow-hidden", children: /* @__PURE__ */ e(Ve, { className: "w-full aspect-square" }) }) });
}
function PI() {
  const { t } = K("common");
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ e("h2", { className: "text-lg font-semibold", children: t("recentlyViewed.title") }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-8 gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e(uo, { className: "h-8 w-8" }),
      /* @__PURE__ */ e("p", { className: "text-sm", children: t("recentlyViewed.noDocuments") }),
      /* @__PURE__ */ e("p", { className: "text-xs", children: t("recentlyViewed.documentsWillAppear") })
    ] })
  ] });
}
function wi({ direction: t, onClick: n }) {
  return /* @__PURE__ */ e(
    "button",
    {
      onClick: n,
      className: D(
        "absolute top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-md",
        "opacity-0 group-hover:opacity-100 transition-opacity",
        "hover:bg-background cursor-pointer",
        t === "left" ? "left-1" : "right-1"
      ),
      children: t === "left" ? /* @__PURE__ */ e(Nl, { className: "h-4 w-4" }) : /* @__PURE__ */ e(mt, { className: "h-4 w-4" })
    }
  );
}
function kI() {
  return Do("DASHBOARD_TYPES_WHITELIST");
}
const _I = 12, Jn = { sm: 2, md: 3, lg: 4, xl: 6 }, Ci = 10;
function EI() {
  const { t } = K(["dashboard", "common"]), n = Fe(), { client: a } = de(), { registry: o } = tt(), r = et(), s = kI(), { openChatWithQuery: l } = or(), d = n?.settings?.DASHBOARD_AGENTIC_SEARCH_INTERACTION, c = Ie(), u = n?.settings?.DASHBOARD_TITLE || t("dashboard:defaultTitle"), m = n?.settings?.DASHBOARD_DESCRIPTION || t("dashboard:defaultDescription"), f = n?.settings?.DASHBOARD_BACKGROUND, p = Co(n?.settings), { positionX: h, positionY: b, zoom: C, renditionSize: y, bannerMaxHeight: v, bannerMinHeight: x } = p, N = kr(n?.settings) === "imageGrid", w = Number(n?.settings?.DASHBOARD_ITEMS_PER_PAGE) || _I, A = Number(n?.settings?.DASHBOARD_GRID_COLS_SM) || Jn.sm, S = Number(n?.settings?.DASHBOARD_GRID_COLS_MD) || Jn.md, I = Number(n?.settings?.DASHBOARD_GRID_COLS_LG) || Jn.lg, L = Number(n?.settings?.DASHBOARD_GRID_COLS_XL) || Jn.xl, [V, G] = g([]), [R, j] = g(!0), [O, Q] = g(!1), [ee, te] = g(0), [k, _] = g(!0), [q, $] = g(""), [T, X] = g(""), [U, E] = g([]), [H, P] = g([]), [B, W] = g("everywhere"), [le, me] = g(!1), [ze, Pe] = g(!1), [Ue, re] = g(0), [Ne, we] = g({}), [Le, nt] = g(() => {
    if (!f) return "";
    const ae = `${Ze}_${f}_${y}`, Se = localStorage.getItem(ae), Qe = localStorage.getItem(`${ae}_time`), Ft = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    return Se?.length && Qe && Math.abs(Ft - parseInt(Qe)) <= 900 ? Se : "";
  }), [se, Z] = g(!!f && !Le), [oe, Y] = g(0), F = ge(null), ue = ge(null), he = ge(null), je = ge(O), rt = ge(k), pe = ge(ee), Be = Po("/ecm-background.png"), _e = Le || Be;
  M(() => {
    a && f && !Le ? (Z(!0), Gn(a, f, (ae) => {
      nt(ae), Z(!1);
    }, () => {
    }, c, y)) : Z(!1);
  }, [a, f]), M(() => {
    je.current = O, rt.current = k, pe.current = ee;
  }, [O, k, ee]);
  const He = J(async () => {
    if (!(!a || O || !k)) {
      Q(!0);
      try {
        const Se = (await a.objects.search({
          limit: w,
          offset: ee + w,
          query: {
            ...s && { types: s }
          }
        })).results;
        Se.length < w && _(!1), Se.length > 0 ? (G((Qe) => [...Qe, ...Se]), te((Qe) => Qe + w)) : _(!1);
      } catch (ae) {
        console.error("Failed to load more images:", ae), c && c({
          status: "error",
          title: t("dashboard:errors.failedToLoadMore"),
          description: t("dashboard:errors.failedToLoadMoreDescription")
        });
      } finally {
        Q(!1);
      }
    }
  }, [a, O, k, ee, c, s]);
  M(() => {
    if (!N || !a) {
      j(!1);
      return;
    }
    (async () => {
      j(!0), te(0), _(!0);
      try {
        const Qe = (await a.objects.search({
          limit: w,
          offset: 0,
          query: {
            ...s && { types: s }
          }
        })).results;
        G(Qe), Qe.length < w && _(!1);
      } catch (Se) {
        console.error("Failed to fetch latest images:", Se), c && c({
          status: "error",
          title: t("dashboard:errors.failedToLoad"),
          description: t("dashboard:errors.failedToLoadDescription")
        });
      } finally {
        j(!1);
      }
    })();
  }, [a, N, c, s]), M(() => {
    if (!N || R) return;
    const ae = he.current;
    if (!ae) return;
    const Se = new IntersectionObserver(
      (Qe) => {
        Qe[0].isIntersecting && !je.current && rt.current && a && He();
      },
      {
        threshold: 0.1,
        rootMargin: "200px"
      }
    );
    return Se.observe(ae), () => Se.disconnect();
  }, [R, N, a, He]), M(() => {
    const ae = setTimeout(() => {
      X(q);
    }, 300);
    return () => clearTimeout(ae);
  }, [q]), M(() => {
    q.trim() || Pe(!1);
  }, [q]), M(() => {
    hs();
  }, [T, B]);
  const hs = async () => {
    if (!a || !T.trim()) {
      E([]), P([]), Pe(!1);
      return;
    }
    me(!0), Pe(!0);
    try {
      if (B === "collections") {
        const St = await a.store.collections.search({
          name: T,
          limit: Ci,
          dynamic: !1
        });
        P(St), E([]);
        return;
      }
      let ae;
      B === "contents" ? ae = { full_text: T } : B === "title" ? ae = { name: T } : ae = { full_text: T, vector: {
        text: T,
        config: {
          text: !0,
          image: !0,
          properties: !0
        }
      } };
      const Se = {
        limit: Ci,
        offset: 0,
        query: {
          ...ae,
          ...s && { types: s }
        }
      }, Ft = (await a.objects.search(Se)).results;
      E(Ft), P([]), Ft.forEach((St) => {
        St.id && !Ne[St.id] && zt(a, St, (Fa) => {
          we((Cs) => ({ ...Cs, [St.id]: Fa }));
        }, () => {
        }, c, 128);
      });
    } catch (ae) {
      console.error("Failed to perform search:", ae), c && c({
        status: "error",
        title: t("dashboard:errors.searchFailed"),
        description: t("dashboard:errors.searchFailedDescription")
      });
    } finally {
      me(!1);
    }
  }, gs = (ae) => {
    r(`/advanced-search/${ae}`, { replace: !0 });
  }, fs = (ae) => {
    r(`/collections/${ae}`);
  }, bs = () => {
    const ae = q.trim();
    if (!ae) return;
    const Se = `${t("dashboard:aiAssistant.searchPrefix")}${ae}`;
    l(Se), Pe(!1);
  }, vs = (ae, Se) => {
    ae.stopPropagation(), window.open(`/advanced-search/${Se}`, "_blank");
  };
  M(() => {
    const ae = F.current;
    if (!ae) return;
    let Se;
    const Qe = () => {
      Se && cancelAnimationFrame(Se), Se = requestAnimationFrame(() => {
        const Ft = ae.scrollTop, Fa = Math.min(Ft / 150, 1);
        re(Fa);
      });
    };
    return ae.addEventListener("scroll", Qe, { passive: !0 }), () => {
      ae.removeEventListener("scroll", Qe), Se && cancelAnimationFrame(Se);
    };
  }, []), M(() => {
    const ae = () => {
      ue.current && Y(ue.current.offsetWidth);
    };
    ae(), window.addEventListener("resize", ae);
    let Se = null;
    return ue.current && (Se = new ResizeObserver(ae), Se.observe(ue.current)), () => {
      window.removeEventListener("resize", ae), Se && Se.disconnect();
    };
  }, []), M(() => {
    ue.current && Y(ue.current.offsetWidth);
  }, [Ue]);
  const xs = v - (v - x) * Ue, za = x < v / 2 ? Ue : 0, ys = 48 - 12 * za, Ns = 18 - 2 * za, ws = 672 - 224 * za;
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full gap-4 p-2", children: [
    /* @__PURE__ */ i("div", { className: "relative overflow-hidden rounded-sm flex-shrink-0 transition-all duration-200 ease-out", style: { height: `${xs}px` }, children: [
      /* @__PURE__ */ i("div", { className: "absolute inset-x-0", style: { height: `${v}px`, top: "50%", transform: "translateY(-50%)" }, children: [
        se ? /* @__PURE__ */ e(Ve, { className: "w-full h-full" }) : /* @__PURE__ */ e(
          "div",
          {
            className: "w-full h-full",
            role: "img",
            "aria-label": t("dashboard:ecmLandscape"),
            style: {
              backgroundImage: `url(${_e})`,
              backgroundSize: `${C}%`,
              backgroundPosition: `${h}% ${b}%`,
              backgroundRepeat: "no-repeat"
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/30" })
      ] }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center px-6 z-20", children: /* @__PURE__ */ e(
        "div",
        {
          className: "w-full transition-all duration-200 ease-out",
          style: { maxWidth: `${ws}px` },
          children: /* @__PURE__ */ i(
            gt,
            {
              open: ze,
              onOpenChange: (ae) => {
                (!ae || q.trim()) && Pe(ae), ae && ue.current && Y(ue.current.offsetWidth);
              },
              children: [
                /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i("div", { ref: ue, className: "relative", children: [
                  /* @__PURE__ */ e(vt, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" }),
                  le && /* @__PURE__ */ e(fe, { className: "absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 animate-spin" }),
                  /* @__PURE__ */ e(
                    be,
                    {
                      placeholder: t("dashboard:searchPlaceholder"),
                      value: q,
                      onChange: (ae) => {
                        $(ae.target.value), ae.target.value.trim() && Pe(!0);
                      },
                      onFocus: () => {
                        q.trim() && Pe(!0);
                      },
                      className: "ecm-search ecm-search-hero pl-12 pr-12 bg-card text-card-foreground backdrop-blur-sm border-none shadow-lg transition-all duration-200 ease-out",
                      style: {
                        height: `${ys}px`,
                        fontSize: `${Ns}px`
                      }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ i(
                  ut,
                  {
                    className: "p-2 bg-secondary text-primary border border-muted-foreground shadow-lg",
                    style: { width: oe ? `${oe}px` : "auto" },
                    align: "start",
                    onOpenAutoFocus: (ae) => ae.preventDefault(),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 px-1 pb-2 mb-1 border-b border-muted-foreground/30 flex-wrap", children: [
                        /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground mr-1", children: t("dashboard:searchIn") }),
                        [
                          { mode: "everywhere", icon: vt, label: t("dashboard:searchModes.everywhere") },
                          { mode: "contents", icon: Je, label: t("dashboard:searchModes.contents") },
                          { mode: "title", icon: wl, label: t("dashboard:searchModes.title") },
                          { mode: "collections", icon: st, label: t("dashboard:searchModes.collections") }
                        ].map(({ mode: ae, icon: Se, label: Qe }) => /* @__PURE__ */ i(
                          "button",
                          {
                            type: "button",
                            onClick: () => W(ae),
                            className: `inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors ${B === ae ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted-foreground hover:text-secondary"}`,
                            children: [
                              /* @__PURE__ */ e(Se, { className: "h-3 w-3" }),
                              Qe
                            ]
                          },
                          ae
                        ))
                      ] }),
                      d && /* @__PURE__ */ i(
                        z,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "sm",
                          onClick: bs,
                          className: "group w-full justify-start mb-1",
                          children: [
                            /* @__PURE__ */ e(Pt, { className: "text-primary group-hover:text-accent-foreground transition-colors" }),
                            /* @__PURE__ */ e("span", { className: "font-medium", children: t("dashboard:aiAssistant.ask") })
                          ]
                        }
                      ),
                      /* @__PURE__ */ e("div", { className: "max-h-60 overflow-y-auto", children: le ? /* @__PURE__ */ i("div", { className: "flex items-center justify-center gap-2 py-4", children: [
                        /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
                        /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: t("common:states.loading") })
                      ] }) : B === "collections" ? H.length === 0 ? /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground text-center py-4", children: t("dashboard:noResults") }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: H.map((ae) => /* @__PURE__ */ i("div", { className: "group flex items-center gap-3 p-2 hover:bg-muted-foreground hover:text-secondary rounded-md cursor-pointer transition-colors", onClick: () => fs(ae.id), children: [
                        /* @__PURE__ */ e("div", { className: "w-12 h-12 flex-shrink-0 bg-muted rounded overflow-hidden border border-muted-foreground flex items-center justify-center", children: /* @__PURE__ */ e(st, { className: "h-5 w-5 text-muted-foreground" }) }),
                        /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", children: ae.name }),
                          /* @__PURE__ */ e(ve, { className: "text-xs", children: t("dashboard:collection") })
                        ] })
                      ] }, ae.id)) }) : U.length === 0 ? /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground text-center py-4", children: t("dashboard:noResults") }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: U.map((ae) => /* @__PURE__ */ i("div", { className: "group flex items-center gap-3 p-2 hover:bg-muted-foreground hover:text-secondary rounded-md cursor-pointer transition-colors", onClick: () => gs(ae.id), children: [
                        /* @__PURE__ */ e("div", { className: "w-12 h-12 flex-shrink-0 bg-muted rounded overflow-hidden border border-muted-foreground", children: Ne[ae.id] ? /* @__PURE__ */ e(
                          "img",
                          {
                            src: Ne[ae.id],
                            alt: ae.name,
                            className: "w-full h-full object-cover"
                          }
                        ) : /* @__PURE__ */ e("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) }) }),
                        /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", children: ae.name }),
                          /* @__PURE__ */ e(ve, { className: "text-xs", children: o?.getTypeName(ae.type?.id || "") || ae.type?.name || t("common:document") })
                        ] }),
                        /* @__PURE__ */ e(
                          "button",
                          {
                            onClick: (Se) => vs(Se, ae.id),
                            className: "flex-shrink-0 p-2 rounded-md hover:bg-primary/10 group-hover:hover:bg-secondary group-hover:hover:text-primary hover:cursor-pointer transition-colors",
                            title: t("common:openInNewTab"),
                            children: /* @__PURE__ */ e(go, { className: "h-4 w-4" })
                          }
                        )
                      ] }, ae.id)) }) })
                    ]
                  }
                )
              ]
            }
          )
        }
      ) })
    ] }),
    N && /* @__PURE__ */ i(
      "div",
      {
        className: "flex flex-col text-center transition-opacity duration-300 ease-out",
        style: {
          opacity: Math.max(1 - Ue * 2, 0),
          display: Ue >= 0.5 ? "none" : void 0
        },
        children: [
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold", children: u }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: m })
        ]
      }
    ),
    N ? /* @__PURE__ */ i(
      "div",
      {
        ref: F,
        className: "flex-1 overflow-auto",
        style: {
          "--grid-sm": A,
          "--grid-md": S,
          "--grid-lg": I,
          "--grid-xl": L
        },
        children: [
          /* @__PURE__ */ e("style", { children: `
                        @media (min-width: 640px) { .dashboard-grid { grid-template-columns: repeat(var(--grid-sm), minmax(0, 1fr)) !important; } }
                        @media (min-width: 768px) { .dashboard-grid { grid-template-columns: repeat(var(--grid-md), minmax(0, 1fr)) !important; } }
                        @media (min-width: 1024px) { .dashboard-grid { grid-template-columns: repeat(var(--grid-lg), minmax(0, 1fr)) !important; } }
                        @media (min-width: 1280px) { .dashboard-grid { grid-template-columns: repeat(var(--grid-xl), minmax(0, 1fr)) !important; } }
                    ` }),
          R ? /* @__PURE__ */ e("div", { className: "dashboard-grid grid grid-cols-1 gap-1", children: [...Array(w)].map((ae, Se) => /* @__PURE__ */ e(ye, { className: "overflow-hidden rounded-sm", children: /* @__PURE__ */ e(Ve, { className: "w-full aspect-square rounded-none" }) }, Se)) }) : /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e("div", { className: "dashboard-grid grid grid-cols-1 gap-1", children: V.map((ae) => /* @__PURE__ */ e(Dn, { document: ae, showDetails: !1, showHoverInfo: !0 }, ae.id)) }),
            k && /* @__PURE__ */ e("div", { ref: he, className: "flex justify-center items-center py-8", children: O && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-muted-foreground" }),
              /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: t("common:states.loadingMore") })
            ] }) }),
            !k && V.length > 0 && /* @__PURE__ */ e("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: t("common:states.noMoreItems") }) })
          ] })
        ]
      }
    ) : (
      /* Recently Viewed */
      /* @__PURE__ */ e("div", { ref: F, className: "flex-1 flex flex-col gap-6 overflow-y-auto overflow-x-hidden pb-6", children: /* @__PURE__ */ e(DI, {}) })
    )
  ] });
}
function zI() {
  const { user: t } = de(), n = qn(t), a = localStorage.getItem(na);
  return /* @__PURE__ */ e(lt, { children: n && a === "admin" ? /* @__PURE__ */ e(AI, {}) : /* @__PURE__ */ e(EI, {}) });
}
function FI() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(is, {}) });
}
function LI({ id: t, name: n, showHelpText: a = !0 }) {
  return /* @__PURE__ */ e(ht, { documentId: t, children: /* @__PURE__ */ i(z, { variant: "ghost", size: "sm", className: "w-full justify-start bg-accent italic", children: [
    /* @__PURE__ */ e(wt, { className: "size-4 shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate", children: n || t }),
    a && /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: "(click to view details)" })
  ] }) });
}
function Si({ documentId: t }) {
  const { t: n } = K("executions"), { client: a } = de(), [o, r] = g(null), [s, l] = g(!0);
  return M(() => {
    if (!a || !t) {
      l(!1);
      return;
    }
    a.store.objects.retrieve(t).then((d) => {
      r(d.name || t);
    }).catch(() => {
      r(t);
    }).finally(() => {
      l(!1);
    });
  }, [a, t]), /* @__PURE__ */ e(ht, { documentId: t, className: "min-w-0 max-w-full", children: /* @__PURE__ */ i(ve, { variant: "secondary", className: "text-xs cursor-pointer hover:bg-secondary/80 gap-1 min-w-0 max-w-full overflow-hidden", children: [
    s ? /* @__PURE__ */ e(fe, { className: "h-3 w-3 flex-shrink-0 animate-spin" }) : /* @__PURE__ */ e(Je, { className: "h-3 w-3 flex-shrink-0" }),
    /* @__PURE__ */ e("span", { className: "truncate min-w-0", children: s ? n("documentLoading") : o })
  ] }) });
}
function ls(t) {
  return t.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, (n) => n.toUpperCase());
}
function Ai(t) {
  return typeof t == "string" && t.startsWith("store:");
}
function Di(t) {
  return t.replace("store:", "");
}
function ha({ value: t }) {
  const { t: n } = K("common");
  if (t == null)
    return /* @__PURE__ */ e("span", { className: "text-muted-foreground italic", children: n("states.notSet") });
  if (typeof t == "boolean")
    return t ? /* @__PURE__ */ i("div", { className: "flex items-center gap-1 text-success", children: [
      /* @__PURE__ */ e(Me, { className: "h-4 w-4" }),
      /* @__PURE__ */ e("span", { children: n("states.yes") })
    ] }) : /* @__PURE__ */ i("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
      /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
      /* @__PURE__ */ e("span", { children: n("states.no") })
    ] });
  if (typeof t == "number")
    return /* @__PURE__ */ e("span", { className: "font-mono text-sm", children: t.toLocaleString() });
  if (Ai(t)) {
    const o = Di(t);
    return /* @__PURE__ */ e(Si, { documentId: o });
  }
  if (Array.isArray(t))
    return t.length === 0 ? /* @__PURE__ */ e("span", { className: "text-muted-foreground italic", children: n("states.emptyList") }) : t.every((s) => Ai(s)) ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 min-w-0 overflow-hidden", children: t.map((s, l) => {
      const d = Di(s);
      return /* @__PURE__ */ e(Si, { documentId: d }, l);
    }) }) : t.some((s) => s !== null && typeof s == "object") ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s, l) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 pl-2 border-l-2 border-muted", children: [
      /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: n("form.itemIndex", { index: l + 1 }) }),
      /* @__PURE__ */ e(ha, { value: s })
    ] }, l)) }) : /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-1", children: t.map((s, l) => /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs", children: String(s) }, l)) });
  if (typeof t == "object") {
    const o = Object.entries(t);
    return o.length === 0 ? /* @__PURE__ */ e("span", { className: "text-muted-foreground italic", children: n("states.emptyValue") }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 pl-2 border-l-2 border-muted", children: o.map(([r, s]) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: ls(r) }),
      /* @__PURE__ */ e(ha, { value: s })
    ] }, r)) });
  }
  const a = String(t);
  return a.length > 100 ? /* @__PURE__ */ e("p", { className: "text-sm break-words whitespace-pre-wrap", children: a }) : /* @__PURE__ */ e("span", { className: "text-sm", children: a });
}
Bl.extend(Hl);
function RI(t, n) {
  const a = typeof n.timestamp == "number" ? n.timestamp : new Date(n.timestamp).getTime(), o = t.findIndex((r) => (typeof r.timestamp == "number" ? r.timestamp : new Date(r.timestamp).getTime()) > a);
  o === -1 ? t.push(n) : t.splice(o, 0, n);
}
function $I() {
  const { t } = K(["executions", "common"]), n = Mn("id"), { client: a, isLoading: o } = de(), { getUserDisplayName: r } = Ct(a), s = et(), [l, d] = g(void 0), [c, u] = g(void 0), [m, f] = g([]), [p, h] = g(!1), [b, C] = g(!1), [y, v] = g(!0), [x, N] = g([]), [w, A] = g(0), [S, I] = g(/* @__PURE__ */ new Map()), [L, V] = g(!1), [G, R] = g(!1), j = ge(!1), O = ge(!1), Q = J(() => {
    if (!l?.properties?.interactionId || !c?.input)
      return;
    const E = c.input, H = l?.properties?.interactionId;
    if (!H)
      return;
    const P = {
      executionName: `${l.name} (Rerun)`,
      executionDescription: l.description || "",
      formData: E.data || {}
    }, B = new URLSearchParams();
    B.set("prefilled", encodeURIComponent(JSON.stringify(P))), s(`/agents/${H}/create?${B.toString()}`);
  }, [l, c, s]), ee = ce(() => !(!l?.properties?.interactionId || !c?.input), [l, c]), te = ce(() => {
    const E = x[w] || { plan: { plan: [] }, timestamp: 0 }, H = S.get(E.timestamp) || /* @__PURE__ */ new Map();
    return {
      plan: E.plan,
      workstreamStatus: H
    };
  }, [x, w, S]), k = ce(() => MI(te.plan, te.workstreamStatus), [te]), _ = ce(() => m.length === 0 ? !1 : m[m.length - 1].type === ct.IDLE, [m]), q = ce(() => {
    const E = m.filter((H) => H.type === ct.ANSWER);
    return E.length === 0 ? null : E[E.length - 1];
  }, [m]), $ = ce(() => {
    const E = m.filter((H) => H.type === ct.THOUGHT);
    return E.length === 0 ? null : E[E.length - 1];
  }, [m]);
  M(() => {
    _ && !O.current && (O.current = !0, V(!0), setTimeout(() => {
      V(!1), R(!0);
    }, 2e3));
  }, [_]);
  const T = J(async (E) => {
    if (a) {
      v(!0);
      try {
        const H = await a.store.collections.retrieve(E);
        d(H);
        const P = H.properties || {}, B = P.run_id, W = P.workflow_id;
        if (B && W)
          try {
            const le = await a.workflows.getRunDetails(B, W);
            le.status === "FAILED" ? h(!0) : u(le);
          } catch {
            h(!0);
          }
      } catch (H) {
        H && typeof H == "object" && "status" in H && H.status === 404 ? C(!0) : h(!0);
      } finally {
        v(!1);
      }
    }
  }, [a]), X = ce(
    () => ({
      a: ({ ...E }) => {
        const H = E.href || "";
        if (H.startsWith("/store/objects/")) {
          const P = H.split("/store/objects/")[1];
          return /* @__PURE__ */ e(LI, { id: P, name: String(E?.children || "") });
        }
        return /* @__PURE__ */ e("a", { ...E, target: "_blank", rel: "noopener noreferrer", className: "text-info hover:text-info" });
      },
      p: ({ ...E }) => /* @__PURE__ */ e("span", { ...E, className: "my-2 block text-foreground/65 whitespace-pre-wrap leading-relaxed" }),
      strong: ({ ...E }) => /* @__PURE__ */ e("strong", { ...E, className: "font-bold text-foreground/80" }),
      em: ({ ...E }) => /* @__PURE__ */ e("em", { ...E, className: "italic text-foreground/65" }),
      pre: ({ ...E }) => /* @__PURE__ */ e("pre", { ...E, className: "my-2 bg-foreground/65 p-3 rounded-md text-secondary whitespace-pre-wrap break-words border border-border" }),
      code: ({ className: E, children: H, ...P }) => {
        const B = /language-(\w+)/.exec(E || ""), W = !B, le = B ? B[1] : "";
        return /* @__PURE__ */ i(xe, { children: [
          !W && le && /* @__PURE__ */ e("div", { className: "code-language-indicator", children: le }),
          /* @__PURE__ */ e("code", { ...P, children: H })
        ] });
      },
      h1: ({ ...E }) => /* @__PURE__ */ e("h1", { ...E, className: "text-foreground/80 font-bold text-2xl my-3" }),
      h2: ({ ...E }) => /* @__PURE__ */ e("h2", { ...E, className: "text-foreground/80 font-bold text-xl my-2" }),
      h3: ({ ...E }) => /* @__PURE__ */ e("h3", { ...E, className: "text-foreground/80 font-bold text-lg my-2" }),
      li: ({ ...E }) => /* @__PURE__ */ e("li", { ...E, className: "text-foreground/65 my-2 pl-1" }),
      ul: ({ ...E }) => /* @__PURE__ */ e("ul", { ...E, className: "my-3 pl-6 list-disc space-y-1" }),
      ol: ({ ...E }) => /* @__PURE__ */ e("ol", { ...E, className: "my-3 pl-6 list-decimal space-y-1" }),
      blockquote: ({ ...E }) => /* @__PURE__ */ e("blockquote", { ...E, className: "border-l-4 border-border pl-4 italic text-muted-foreground my-3" }),
      hr: ({ ...E }) => /* @__PURE__ */ e("hr", { ...E, className: "border-border my-4" }),
      table: ({ ...E }) => /* @__PURE__ */ e("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ e("table", { ...E, className: "min-w-full border-collapse border border-border" }) }),
      th: ({ ...E }) => /* @__PURE__ */ e("th", { ...E, className: "border border-border bg-secondary px-4 py-2 text-left text-muted-foreground" }),
      td: ({ ...E }) => /* @__PURE__ */ e("td", { ...E, className: "border border-border px-4 py-2 text-foreground/65" })
    }),
    []
  ), U = J(() => {
    if (!a || !l || j.current)
      return;
    const E = l.properties || {}, H = E.run_id, P = E.workflow_id;
    !H || !P || (j.current = !0, a.store.workflows.streamMessages(P, H, (B) => {
      B.message && f((W) => W.find((le) => le.timestamp === B.timestamp) ? W : (RI(W, B), [...W]));
    }));
  }, [a, l]);
  return M(() => {
    !n || o || T(n);
  }, [n, o, T]), M(() => {
    l && c && !_ && !p && U();
  }, [l, c, _, p, U]), M(() => {
    m.forEach((E) => {
      if (E.type === ct.PLAN)
        try {
          let H = null;
          if (E.details && typeof E.details == "object") {
            const P = E.details;
            P.plan && Array.isArray(P.plan) && (H = { plan: P.plan });
          }
          if (H) {
            const P = typeof E.timestamp == "number" ? E.timestamp : new Date(E.timestamp).getTime();
            if (x.findIndex((W) => W.timestamp === P) === -1) {
              const W = {
                plan: H,
                timestamp: P
              };
              N((me) => [W, ...me]), A(0);
              const le = /* @__PURE__ */ new Map();
              le.set("main", "in_progress"), Array.isArray(H.plan) && H.plan.forEach((me) => {
                if (me && typeof me == "object" && me.id) {
                  const ze = me.id.toString();
                  le.set(ze, me.status || "pending");
                }
              }), I((me) => {
                const ze = new Map(me);
                return ze.set(P, le), ze;
              });
            }
          }
        } catch {
        }
    });
  }, [m, x]), M(() => {
    if (!a || !l || _)
      return;
    const E = l.properties || {}, H = E.run_id, P = E.workflow_id;
    if (!H || !P)
      return;
    const B = setInterval(async () => {
      try {
        const W = await a.workflows.getRunDetails(H, P);
        W.status === "FAILED" ? (h(!0), clearInterval(B)) : W.status === "COMPLETED" && (u(W), clearInterval(B));
      } catch {
      }
    }, 5e3);
    return () => clearInterval(B);
  }, [a, l, _]), o || y ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : b ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-full gap-4", children: [
    /* @__PURE__ */ e(Wa, { className: "w-16 h-16 text-destructive" }),
    /* @__PURE__ */ e("h1", { className: "text-2xl font-bold", children: t("executions:detail.notFound") }),
    /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: t("executions:detail.notFoundDescription") })
  ] }) : l ? /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full px-2 pt-2 pb-4", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between pb-2 border-b", children: [
      /* @__PURE__ */ e("h1", { className: "text-2xl font-bold", children: l.name }),
      ee && /* @__PURE__ */ i(z, { variant: "outline", size: "sm", onClick: Q, children: [
        /* @__PURE__ */ e(ho, { className: "h-4 w-4" }),
        "Rerun Agent"
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-1 min-h-0 gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex-1 flex flex-col gap-2 items-center justify-center", children: p ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center gap-4", children: [
        /* @__PURE__ */ e(Wa, { className: "h-16 w-16 text-destructive" }),
        /* @__PURE__ */ e("p", { className: "text-destructive font-medium text-lg", children: t("executions:detail.encounteredError") }),
        /* @__PURE__ */ e("p", { className: "text-muted-foreground text-sm", children: t("executions:detail.contactAdmin") })
      ] }) : G ? /* @__PURE__ */ e("div", { className: "flex flex-col mt-4 h-full w-full overflow-auto", children: q?.message ? /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-6 w-6 rounded-full bg-primary/10", children: /* @__PURE__ */ e(Pt, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: t("executions:detail.agentResponse") }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: aa(new Date(q.timestamp)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "border rounded-sm p-2 bg-secondary vprose prose prose-slate dark:prose-invert prose-p:leading-relaxed prose-p:my-1.5 max-w-none text-sm", children: /* @__PURE__ */ e(
          jl,
          {
            artifactRunId: n,
            components: X,
            children: q.message
          }
        ) })
      ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center gap-4 flex-1", children: [
        /* @__PURE__ */ e("div", { className: "h-16 w-16 rounded-full bg-success-background flex items-center justify-center", children: /* @__PURE__ */ e(
          "svg",
          {
            className: "h-8 w-8 text-success",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7"
              }
            )
          }
        ) }),
        /* @__PURE__ */ e("p", { className: "text-success font-medium text-lg", children: t("executions:detail.completedSuccessfully") })
      ] }) }) : /* @__PURE__ */ i("div", { className: "flex flex-col justify-center gap-0 w-full max-w-md", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-primary", children: [
            /* @__PURE__ */ e(fe, { className: "size-6 animate-spin" }),
            /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: L ? "Completing..." : "Processing..." })
          ] }),
          /* @__PURE__ */ i("span", { className: "text-sm font-medium", children: [
            L ? "100" : k,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-full bg-secondary rounded-full h-3", children: /* @__PURE__ */ e(
          "div",
          {
            className: "bg-primary h-3 rounded-full",
            style: {
              width: `${L ? 100 : k}%`,
              transition: L ? "width 2s ease-out" : "width 300ms ease-out"
            }
          }
        ) }),
        $?.message && /* @__PURE__ */ i("div", { className: "flex mt-2 items-start gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ e(Pt, { className: "h-4 w-4 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ e("p", { className: "text-sm italic line-clamp-2", children: $.message })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "w-80 mt-2 flex flex-col min-h-0", children: /* @__PURE__ */ i(ye, { className: "flex flex-col min-h-0 flex-1", children: [
        /* @__PURE__ */ e(Te, { className: "flex-shrink-0", children: /* @__PURE__ */ e(ke, { children: t("executions:detail.executionDetails") }) }),
        /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-4 overflow-y-auto min-h-0 flex-1", children: [
          c?.input?.data && Object.keys(c.input.data).length > 0 && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ e("span", { className: "text-xs font-medium uppercase text-muted-foreground", children: t("executions:detail.inputParameters") }),
              Object.entries(c.input.data).map(([E, H]) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ e("span", { className: "text-xs font-medium text-muted-foreground", children: ls(E) }),
                /* @__PURE__ */ e(ha, { value: H })
              ] }, E))
            ] }),
            /* @__PURE__ */ e("div", { className: "border-b pb-2 mb-2" })
          ] }),
          l.description && /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-medium uppercase text-muted-foreground", children: "Description" }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: l.description })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ e(gn, { className: "h-4 w-4" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium uppercase", children: "Created by" })
            ] }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: r(l.created_by, "Unknown") })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ e(Rn, { className: "h-4 w-4" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium uppercase", children: "Created" })
            ] }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: aa(new Date(l.created_at)) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ e(uo, { className: "h-4 w-4" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium uppercase", children: "Updated" })
            ] }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: aa(new Date(l.updated_at)) })
          ] })
        ] })
      ] }) })
    ] })
  ] }) : null;
}
function MI(t, n) {
  const a = t.plan || [], o = a.length;
  let r = 0;
  return o > 0 && a.forEach((s) => {
    if (s && s.id) {
      const l = s.id.toString(), d = n.get(l);
      d === "completed" ? r++ : d === "in_progress" && (r += 0.5);
    }
  }), o > 0 ? Math.round(r / o * 100) : 0;
}
function OI() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e($I, {}) });
}
const Ro = [
  { name: "status", field: "status" },
  { name: "type", field: "type" },
  { name: "created_by", field: "created_by" },
  { name: "total", field: "total" }
], $o = [
  { name: "type", field: "type" },
  { name: "status", field: "status" },
  { name: "created_by", field: "created_by" },
  { name: "mime_type", field: "content.type" }
], Oa = [
  {
    id: "type",
    label: "Type",
    placeholder: "Search by type",
    property: "type",
    type: zn.LIST,
    searchType: on.SELECTION_MULTIPLE,
    values: [],
    system: !0
  },
  {
    id: "status",
    label: "Status",
    placeholder: "Search by status",
    property: "status",
    type: zn.LIST,
    searchType: on.SELECTION_MULTIPLE,
    values: [],
    system: !0
  },
  {
    id: "created_by",
    label: "Created By",
    placeholder: "Search by creator",
    property: "created_by",
    type: zn.LIST,
    searchType: on.SELECTION_MULTIPLE,
    values: [],
    system: !0
  }
], jI = [
  { name: "created_by", field: "created_by" },
  { name: "interaction", field: "properties.interaction" }
];
function BI() {
  const { t } = K(["executions", "common"]), { client: n, isLoading: a, user: o } = de(), r = Fe(), s = et(), { getUserDisplayName: l } = Ct(n), d = r?.settings?.EXECUTION_CONTAINER || void 0, [c, u] = g(""), [m, f] = g({}), [p, h] = g(!1), [b, C] = g("mine"), [y, v] = g(() => localStorage.getItem("executions-display-mode") === "table" ? "table" : "cards"), x = Ss(c, 300), N = J((P, B, W) => {
    const le = P.trim(), me = {};
    return W && o?.user_id ? me.created_by = `user:${o.user_id}` : B.created_by?.length && (me.created_by = B.created_by.length === 1 ? B.created_by[0] : { $in: B.created_by }), B.interaction?.length && (me["properties.interaction"] = B.interaction.length === 1 ? B.interaction[0] : { $in: B.interaction }), {
      type: d,
      name: le || void 0,
      match: Object.keys(me).length > 0 ? me : void 0
    };
  }, [d, o?.user_id]), w = J(async (P, B, W) => {
    if (!n || !d)
      return {};
    const le = N(P, B, W);
    return await n.store.collections.computeListFacets({
      facets: jI,
      query: le
    });
  }, [n, d, N]), A = 20, S = b === "mine", { data: I } = As(
    () => w(x, m, S),
    [x, m, S, w]
  ), [L, V] = g([]), [G, R] = g(!1), [j, O] = g(!1), [Q, ee] = g(!0), [te, k] = g(null), _ = ge(0), q = ge(null), $ = J(async (P, B) => {
    if (!(!n || !d)) {
      B ? (R(!0), k(null)) : O(!0);
      try {
        const W = N(x, m, S), le = await n.store.collections.search({
          ...W,
          limit: A,
          offset: P
        });
        V(B ? le : (me) => [...me, ...le]), ee(le.length >= A), _.current = P + le.length;
      } catch (W) {
        k(W instanceof Error ? W : new Error("Failed to load executions"));
      } finally {
        B ? R(!1) : O(!1);
      }
    }
  }, [n, d, N, x, m, S]);
  M(() => {
    _.current = 0, V([]), ee(!0), $(0, !0);
  }, [$]), M(() => {
    const P = q.current;
    if (!P || !Q || G)
      return;
    const B = new IntersectionObserver(
      (W) => {
        W[0].isIntersecting && Q && !j && !G && $(_.current, !1);
      },
      { threshold: 0.1 }
    );
    return B.observe(P), () => B.disconnect();
  }, [Q, j, G, $]);
  const T = (P, B) => {
    f((W) => {
      const le = W[P] || [], me = le.includes(B);
      return {
        ...W,
        [P]: me ? le.filter((ze) => ze !== B) : [...le, B]
      };
    });
  }, X = () => {
    f({});
  }, U = Object.entries(m).reduce((P, [B, W]) => b === "mine" && B === "created_by" ? P : P + W.length, 0), E = (P) => new Date(P).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), H = (P) => {
    s(`/agents/executions/${P}`);
  };
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : d ? /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full gap-6 p-2", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-6 flex-shrink-0", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i(
          Da,
          {
            type: "single",
            value: b,
            onValueChange: (P) => P && C(P),
            variant: "outline",
            children: [
              /* @__PURE__ */ i(_t, { value: "mine", "aria-label": "My executions", className: "hover:bg-muted/50 data-[state=on]:bg-info-background data-[state=on]:text-info", children: [
                /* @__PURE__ */ e(gn, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { className: "mr-1", children: t("executions:mine") })
              ] }),
              /* @__PURE__ */ i(_t, { value: "all", "aria-label": "All executions", className: "hover:bg-muted/50 data-[state=on]:bg-info-background data-[state=on]:text-info", children: [
                /* @__PURE__ */ e(lo, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { className: "mr-1", children: t("executions:all") })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ e(vt, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ e(
            be,
            {
              placeholder: t("executions:searchPlaceholder"),
              value: c,
              onChange: (P) => u(P.target.value),
              className: "pl-10"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center border rounded-md", children: [
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => {
                v("cards"), localStorage.setItem("executions-display-mode", "cards");
              },
              className: D(
                "h-8 w-8 rounded-r-none",
                y === "cards" && "bg-muted"
              ),
              title: t("executions:cardView"),
              children: /* @__PURE__ */ e(Ln, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => {
                v("table"), localStorage.setItem("executions-display-mode", "table");
              },
              className: D(
                "h-8 w-8 rounded-l-none",
                y === "table" && "bg-muted"
              ),
              title: t("executions:tableView"),
              children: /* @__PURE__ */ e(Bi, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ i(gt, { open: p, onOpenChange: h, children: [
          /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(z, { variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ e(Mi, { className: "h-4 w-4" }),
            t("common:actions.filters"),
            U > 0 && /* @__PURE__ */ e(ve, { variant: "secondary", className: "ml-1 px-1.5 py-0.5 text-xs", children: U })
          ] }) }),
          /* @__PURE__ */ e(ut, { className: "w-72 p-0", align: "end", children: /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-4 py-3 border-b", children: [
              /* @__PURE__ */ e("span", { className: "font-medium text-sm", children: t("common:actions.filters") }),
              U > 0 && /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: X, className: "h-auto p-1 text-xs", children: t("common:actions.clearAll") })
            ] }),
            I?.interaction && I.interaction.length > 0 && /* @__PURE__ */ i(Bt, { className: "group border-b", children: [
              /* @__PURE__ */ i(Ht, { className: "flex h-10 w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-info-background transition-colors hover:cursor-pointer", children: [
                /* @__PURE__ */ e("span", { children: t("executions:interaction") }),
                /* @__PURE__ */ e(mt, { className: "h-4 w-4 transition-transform group-data-[state=open]:rotate-90" })
              ] }),
              /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ e("div", { className: "flex flex-col px-4 pb-3 gap-1", children: I.interaction.map((P) => /* @__PURE__ */ i(
                "div",
                {
                  className: "flex items-center justify-between rounded-md px-2 py-2 hover:bg-info-background transition-colors cursor-pointer",
                  onClick: () => T("interaction", P._id),
                  children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                      /* @__PURE__ */ e(
                        Xe,
                        {
                          checked: m.interaction?.includes(P._id),
                          onCheckedChange: () => T("interaction", P._id),
                          onClick: (B) => B.stopPropagation()
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "text-sm truncate flex-1", children: P._id })
                    ] }),
                    /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs ml-2 flex-shrink-0", children: P.count })
                  ]
                },
                P._id
              )) }) })
            ] }),
            !S && I?.created_by && I.created_by.length > 0 && /* @__PURE__ */ i(Bt, { className: "group border-b last:border-b-0", children: [
              /* @__PURE__ */ i(Ht, { className: "flex h-10 w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-info-background transition-colors hover:cursor-pointer", children: [
                /* @__PURE__ */ e("span", { children: t("executions:createdBy") }),
                /* @__PURE__ */ e(mt, { className: "h-4 w-4 transition-transform group-data-[state=open]:rotate-90" })
              ] }),
              /* @__PURE__ */ e(Vt, { children: /* @__PURE__ */ e("div", { className: "flex flex-col px-4 pb-3 gap-1", children: I.created_by.map((P) => /* @__PURE__ */ i(
                "div",
                {
                  className: "flex items-center justify-between rounded-md px-2 py-2 hover:bg-info-background transition-colors cursor-pointer",
                  onClick: () => T("created_by", P._id),
                  children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                      /* @__PURE__ */ e(
                        Xe,
                        {
                          checked: m.created_by?.includes(P._id),
                          onCheckedChange: () => T("created_by", P._id),
                          onClick: (B) => B.stopPropagation()
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "text-sm truncate flex-1", children: l(P._id, void 0) })
                    ] }),
                    /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs ml-2 flex-shrink-0", children: P.count })
                  ]
                },
                P._id
              )) }) })
            ] }),
            !I?.interaction?.length && (S || !I?.created_by?.length) && /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground text-center py-4", children: t("executions:noFiltersAvailable") })
          ] }) })
        ] })
      ] }),
      U > 0 && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
        m.interaction?.map((P) => /* @__PURE__ */ i(ve, { variant: "secondary", className: "gap-1 pr-1", children: [
          P,
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "sm",
              className: "h-4 w-4 p-0 hover:bg-transparent",
              onClick: () => T("interaction", P),
              children: /* @__PURE__ */ e(De, { className: "h-3 w-3" })
            }
          )
        ] }, `interaction-${P}`)),
        !S && m.created_by?.map((P) => /* @__PURE__ */ i(ve, { variant: "secondary", className: "gap-1 pr-1", children: [
          l(P, void 0),
          /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "sm",
              className: "h-4 w-4 p-0 hover:bg-transparent",
              onClick: () => T("created_by", P),
              children: /* @__PURE__ */ e(De, { className: "h-3 w-3" })
            }
          )
        ] }, `created_by-${P}`))
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex-1 min-h-0 flex flex-col pb-2", children: [
      te && /* @__PURE__ */ e("div", { className: "text-destructive text-sm", children: t("executions:failedToLoad", { message: te.message }) }),
      G && /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }),
      !G && L && L.length === 0 && /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ e(st, { className: "h-10 w-10" }),
        /* @__PURE__ */ e("p", { children: t("executions:noExecutionsFound") })
      ] }),
      !G && L && L.length > 0 && y === "cards" && /* @__PURE__ */ i("div", { className: "flex-1 min-h-0 overflow-y-auto", children: [
        /* @__PURE__ */ e("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: L.map((P) => /* @__PURE__ */ i(
          ye,
          {
            className: "h-full flex flex-col cursor-pointer hover:bg-muted/50 hover:shadow-lg hover:border-primary/50 transition-all",
            onClick: () => H(P.id),
            children: [
              /* @__PURE__ */ i(Te, { className: "pb-2 flex-1", children: [
                /* @__PURE__ */ e(ke, { className: "text-base truncate", children: P.name }),
                P.description && /* @__PURE__ */ e(Ye, { className: "line-clamp-2", children: P.description })
              ] }),
              /* @__PURE__ */ e(Ce, { className: "mt-auto", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ e(ve, { children: P?.properties?.interaction }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ i("span", { className: "font-medium", children: [
                    t("executions:createdBy"),
                    ":"
                  ] }),
                  /* @__PURE__ */ e("span", { className: "truncate", children: l(P.created_by, void 0) })
                ] }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ i("span", { className: "font-medium", children: [
                    t("executions:createdAt"),
                    ":"
                  ] }),
                  /* @__PURE__ */ e("span", { children: E(P.created_at) })
                ] })
              ] }) })
            ]
          },
          P.id
        )) }),
        Q && /* @__PURE__ */ e("div", { ref: q, className: "flex items-center justify-center py-4", children: j && /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) })
      ] }),
      !G && L && L.length > 0 && y === "table" && /* @__PURE__ */ i("div", { className: "flex-1 min-h-0 min-w-0 border rounded-md overflow-y-auto overflow-x-auto", children: [
        /* @__PURE__ */ i("table", { className: "w-full caption-bottom text-sm table-fixed", children: [
          /* @__PURE__ */ e(xn, { className: "sticky top-0 z-10 bg-muted shadow-[inset_0_-1px_0_var(--border)]", children: /* @__PURE__ */ i(Ke, { children: [
            /* @__PURE__ */ e(Ge, { children: t("executions:name") }),
            /* @__PURE__ */ e(Ge, { className: "hidden md:table-cell", children: t("executions:description") }),
            /* @__PURE__ */ e(Ge, { children: t("executions:interaction") }),
            /* @__PURE__ */ e(Ge, { children: t("executions:createdBy") }),
            /* @__PURE__ */ e(Ge, { children: t("executions:createdAt") })
          ] }) }),
          /* @__PURE__ */ e(yn, { children: L.map((P) => /* @__PURE__ */ i(
            Ke,
            {
              className: "cursor-pointer",
              onClick: () => H(P.id),
              children: [
                /* @__PURE__ */ e(Ae, { className: "font-medium truncate max-w-[200px]", children: P.name }),
                /* @__PURE__ */ e(Ae, { className: "hidden md:table-cell truncate max-w-[300px] text-muted-foreground", children: P.description || "—" }),
                /* @__PURE__ */ e(Ae, { children: /* @__PURE__ */ e(ve, { children: P?.properties?.interaction }) }),
                /* @__PURE__ */ e(Ae, { className: "truncate max-w-[150px]", children: l(P.created_by, void 0) }),
                /* @__PURE__ */ e(Ae, { className: "text-muted-foreground whitespace-nowrap", children: E(P.created_at) })
              ]
            },
            P.id
          )) })
        ] }),
        Q && /* @__PURE__ */ e("div", { ref: q, className: "flex items-center justify-center py-4", children: j && /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-full gap-4 text-muted-foreground", children: [
    /* @__PURE__ */ e(st, { className: "h-12 w-12" }),
    /* @__PURE__ */ e("p", { children: t("executions:containerTypeNotConfigured") })
  ] });
}
function HI() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(BI, {}) });
}
function VI() {
  const { t } = K(["common"]), { client: n, user: a } = de(), o = Ie(), { favoriteIds: r } = Ca(), [s, l] = g([]), [d, c] = g(!0), [u, m] = g(() => {
    const b = localStorage.getItem(ln);
    return b === "grid" || b === "table" ? b : "grid";
  }), f = (b) => {
    localStorage.setItem(ln, b), m(b);
  }, p = J(async () => {
    if (!n || !a?.sub) {
      c(!1);
      return;
    }
    c(!0);
    try {
      const b = await bo(n, a.sub);
      if (!b) {
        l([]);
        return;
      }
      const C = await Zl(n, b);
      l(C);
    } catch (b) {
      o({
        status: "error",
        title: t("common:favorites.loadError"),
        description: b?.message,
        duration: 3e3
      });
    } finally {
      c(!1);
    }
  }, [n, a?.sub, o, t]);
  M(() => {
    p();
  }, [p]);
  const h = ce(
    () => s.filter((b) => r.has(b.id)),
    [s, r]
  );
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full gap-4 p-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: t("common:favorites.title") }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a?.name ? t("common:favorites.descriptionUser", { name: a.name }) : t("common:favorites.description") })
      ] }),
      /* @__PURE__ */ e(_a, { value: u, onValueChange: f })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-auto", children: d ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : h.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground", children: [
      /* @__PURE__ */ e(On, { className: "h-12 w-12 mb-4" }),
      /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: t("common:favorites.empty") }),
      /* @__PURE__ */ e("p", { className: "text-sm mt-1", children: t("common:favorites.emptyHelp") })
    ] }) : u === "grid" ? /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start", children: h.map((b) => /* @__PURE__ */ e(
      Dn,
      {
        document: b,
        showDetails: !0,
        showHoverInfo: !1
      },
      b.id
    )) }) : /* @__PURE__ */ e(
      rs,
      {
        items: h.map((b) => ({ ...b, itemType: "document" }))
      }
    ) })
  ] });
}
function qI() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(VI, {}) });
}
function GI(t, n = "h-6 w-6 text-muted-foreground") {
  const a = t.content?.type?.toLowerCase() || "", o = t.type?.id?.toLowerCase() || "";
  return a.startsWith("image/") || o === "image" ? /* @__PURE__ */ e(fn, { className: n }) : a.startsWith("video/") || o === "video" ? /* @__PURE__ */ e(Bn, { className: n }) : a.startsWith("audio/") || o === "audio" ? /* @__PURE__ */ e(Hn, { className: n }) : a.includes("pdf") || o === "pdf" ? /* @__PURE__ */ e(Je, { className: n }) : a.includes("zip") || a.includes("tar") || a.includes("rar") || o === "archive" ? /* @__PURE__ */ e(va, { className: n }) : a.includes("code") || a.includes("javascript") || a.includes("typescript") || o === "code" ? /* @__PURE__ */ e(xa, { className: n }) : /* @__PURE__ */ e(wt, { className: n });
}
function WI({ document: t }) {
  const { client: n } = de(), a = Ie(), [o, r] = g(null), [s, l] = g(!1), d = t.content?.type?.toLowerCase() || "", c = t.type?.id?.toLowerCase() || "", u = d.startsWith("image/") || c === "image" || d.startsWith("video/") || c === "video" || d.includes("pdf") || c === "pdf";
  return M(() => {
    n && u && zt(n, t, r, () => {
    }, a, 256).catch(() => l(!0));
  }, [t.id, n]), /* @__PURE__ */ e("div", { className: "size-20 shrink-0 rounded-md overflow-hidden bg-muted flex items-center justify-center", children: u && o && !s ? /* @__PURE__ */ e(
    "img",
    {
      src: o,
      alt: "",
      className: "w-full h-full object-cover",
      onError: () => l(!0)
    }
  ) : GI(t) });
}
function UI({ documents: t, loading: n, loadingMore: a, hasMore: o, loadMore: r, selectedIds: s, onToggleSelection: l, onSelectAll: d, onClearSelection: c }) {
  const { t: u } = K(["common", "library"]), { client: m } = de(), { registry: f } = tt(), { getUserDisplayName: p } = Ct(m), h = ge(null), b = !!l, C = s?.size ?? 0, y = t.length > 0 && t.every((w) => s?.has(w.id)), v = C > 0 && !y, x = () => {
    y ? c?.() : d?.();
  }, N = () => {
    if (!h.current || n || a || !o || !r) return;
    const { scrollTop: w, scrollHeight: A, clientHeight: S } = h.current;
    A - w - S < 100 && r();
  };
  return M(() => {
    const w = h.current;
    if (w)
      return w.addEventListener("scroll", N), () => w.removeEventListener("scroll", N);
  }, [n, a, o, r]), n && t.length === 0 ? /* @__PURE__ */ e("div", { className: "flex flex-col h-full w-full items-center justify-center", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }) : t.length === 0 ? /* @__PURE__ */ i(ye, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
    /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
    /* @__PURE__ */ i("div", { className: "text-center", children: [
      /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: u("library:noDocuments.title") }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: u("library:noDocuments.description") })
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col h-full w-full", children: [
    b && /* @__PURE__ */ i("div", { className: "flex items-center gap-3 px-3 py-2 border-b border-border flex-shrink-0", children: [
      /* @__PURE__ */ e(
        Xe,
        {
          checked: y,
          onCheckedChange: x,
          ...v && { "data-state": "indeterminate" }
        }
      ),
      /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: C > 0 ? u("library:selectedCount", { count: C }) : u("common:tables.selectAll") })
    ] }),
    /* @__PURE__ */ i("div", { ref: h, className: "flex-1 overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 p-1", children: t.map((w) => {
        const A = s?.has(w.id) ?? !1, S = w?.properties?.title || w?.name || w.id, I = f?.getTypeName(w.type?.id || "") || w.type?.name || u("common:document");
        return /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          b && /* @__PURE__ */ e(
            Xe,
            {
              checked: A,
              onCheckedChange: () => l?.(w.id),
              onClick: (L) => L.stopPropagation(),
              className: "shrink-0"
            }
          ),
          /* @__PURE__ */ e(ht, { documentId: w.id, className: "flex-1 min-w-0", children: /* @__PURE__ */ i(ye, { className: `flex flex-row items-center gap-4 p-3 cursor-pointer transition-all hover:shadow-md rounded-sm ${A ? "ring-2 ring-primary" : ""}`, children: [
            /* @__PURE__ */ e(WI, { document: w }),
            /* @__PURE__ */ i("div", { className: "flex flex-col gap-1.5 flex-1 min-w-0", children: [
              /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", title: S, children: S }),
              /* @__PURE__ */ i("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ e(ve, { variant: "outline", className: "text-xs max-w-full truncate", children: I }),
                w.content?.type && /* @__PURE__ */ e(ve, { variant: "secondary", className: "text-xs", children: w.content.type })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-4 text-xs text-muted-foreground", children: [
                w.updated_at && /* @__PURE__ */ i("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Rn, { className: "h-3 w-3" }),
                  qt(w.updated_at)
                ] }),
                w.created_by && /* @__PURE__ */ i("span", { className: "flex items-center gap-1 truncate min-w-0", children: [
                  /* @__PURE__ */ e(gn, { className: "h-3 w-3 shrink-0" }),
                  /* @__PURE__ */ e("span", { className: "truncate", children: p(w.created_by, void 0) })
                ] })
              ] })
            ] })
          ] }) })
        ] }, w.id);
      }) }),
      (a || n) && t.length > 0 && /* @__PURE__ */ e("div", { className: "w-full flex justify-center items-center p-4", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }),
      o && r && !a && t.length > 0 && /* @__PURE__ */ e("div", { className: "h-4" })
    ] })
  ] });
}
function KI({ className: t, defaultValue: n, value: a, min: o = 0, max: r = 100, ...s }) {
  const l = ie.useMemo(() => Array.isArray(a) ? a : Array.isArray(n) ? n : [o, r], [a, n, o, r]);
  return /* @__PURE__ */ i(Kn.Root, { "data-slot": "slider", defaultValue: n, value: a, min: o, max: r, className: D("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", t), ...s, children: [
    /* @__PURE__ */ e(Kn.Track, { "data-slot": "slider-track", className: D("bg-white relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"), children: /* @__PURE__ */ e(Kn.Range, { "data-slot": "slider-range", className: D("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") }) }),
    Array.from({ length: l.length }, (d, c) => /* @__PURE__ */ e(Kn.Thumb, { "data-slot": "slider-thumb", className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" }, c))
  ] });
}
function YI({ filters: t, onFiltersChange: n, onRefresh: a, basicFilters: o, getValueLabel: r, isAdvancedSearch: s = !1, scoreThreshold: l, onScoreThresholdChange: d }) {
  const { t: c } = K("common"), u = (p) => {
    n({ search: p });
  }, m = () => {
    n({});
  }, f = o.filter((p) => {
    const h = t[p.id];
    return h !== void 0 && h !== "" && !Array.isArray(h);
  });
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-row gap-2", children: [
      /* @__PURE__ */ i("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ e(vt, { className: "absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10 pointer-events-none" }),
        /* @__PURE__ */ e(
          be,
          {
            placeholder: c("filters.searchDocuments"),
            value: t.search || "",
            onChange: (p) => u(p.target.value),
            className: "ecm-search h-8 sm:h-9 pl-9 sm:pl-10"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2 min-w-40 max-w-56", children: [
        /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground whitespace-nowrap", children: c("filters.scoreLabel") }),
        /* @__PURE__ */ i(vo, { children: [
          /* @__PURE__ */ e(xo, { asChild: !0, children: /* @__PURE__ */ e(Cl, { className: "h-3.5 w-3.5 text-muted-foreground cursor-help shrink-0" }) }),
          /* @__PURE__ */ e(Sa, { side: "bottom", className: "max-w-64", children: c("filters.scoreTooltip") })
        ] }),
        /* @__PURE__ */ e(
          KI,
          {
            min: 0.25,
            max: 1,
            step: 0.05,
            value: [l],
            onValueChange: (p) => d(p[0])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs font-mono text-muted-foreground w-7 text-right", children: l.toFixed(2) })
      ] }),
      /* @__PURE__ */ i(z, { variant: "outline", size: "icon", onClick: a, className: "h-8 w-8 sm:h-9 sm:w-auto sm:px-3 sm:gap-2", children: [
        /* @__PURE__ */ e(Sl, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: c("actions.refresh") })
      ] }),
      /* @__PURE__ */ e(_o, { onUploadDone: () => a() })
    ] }),
    !s && f.length > 0 && /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2 flex-wrap", children: [
      f.map((p) => /* @__PURE__ */ i(
        ve,
        {
          variant: "secondary",
          className: "flex flex-row items-center gap-1 max-w-48",
          title: `${p.label}: ${r(p.id, t[p.id])}`,
          children: [
            /* @__PURE__ */ i("span", { className: "truncate", children: [
              p.label,
              ": ",
              r(p.id, t[p.id])
            ] }),
            /* @__PURE__ */ e(
              De,
              {
                className: "h-3 w-3 cursor-pointer shrink-0",
                onClick: () => n({ [p.id]: void 0 })
              }
            )
          ]
        },
        p.id
      )),
      /* @__PURE__ */ e(
        z,
        {
          variant: "ghost",
          size: "sm",
          onClick: m,
          className: "h-6 text-xs",
          children: c("actions.clearAll")
        }
      )
    ] })
  ] });
}
const Dt = { sm: 2, md: 3, lg: 4, xl: 5 }, Tt = { sm: 1, md: 2, lg: 3, xl: 4 };
function XI({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g({
    sm: Number(t?.LIBRARY_GRID_COLS_SM) || Dt.sm,
    md: Number(t?.LIBRARY_GRID_COLS_MD) || Dt.md,
    lg: Number(t?.LIBRARY_GRID_COLS_LG) || Dt.lg,
    xl: Number(t?.LIBRARY_GRID_COLS_XL) || Dt.xl
  }), [l, d] = g({
    sm: Number(t?.LIBRARY_ADVANCED_GRID_COLS_SM) || Tt.sm,
    md: Number(t?.LIBRARY_ADVANCED_GRID_COLS_MD) || Tt.md,
    lg: Number(t?.LIBRARY_ADVANCED_GRID_COLS_LG) || Tt.lg,
    xl: Number(t?.LIBRARY_ADVANCED_GRID_COLS_XL) || Tt.xl
  }), [c, u] = g(!1), [m, f] = g(!1);
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:library.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:library.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e(ne, { className: "text-base font-semibold", children: o("settings:library.gridLayout") }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:library.gridLayoutHelp") })
        ] }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: ["sm", "md", "lg", "xl"].map((p) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: `library-grid-cols-${p}`, children: o(`common:gridCols.${p}`) }),
          /* @__PURE__ */ e(
            be,
            {
              id: `library-grid-cols-${p}`,
              type: "number",
              min: 1,
              max: 12,
              value: r[p],
              onChange: (h) => s((b) => ({ ...b, [p]: Number(h.target.value) })),
              onBlur: (h) => s((b) => ({ ...b, [p]: Math.max(1, Math.min(12, Number(h.target.value) || 1)) }))
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o(`common:gridCols.${p}Hint`) })
        ] }, p)) }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              onClick: () => u((p) => !p),
              children: [
                c ? /* @__PURE__ */ e(ra, { className: "h-4 w-4" }) : /* @__PURE__ */ e(rn, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { children: o(c ? "common:actions.hidePreview" : "common:actions.showPreview") })
              ]
            }
          ),
          c && /* @__PURE__ */ e("div", { className: "border rounded-md p-4 bg-muted/30", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ["xl", "lg", "md", "sm"].map((p) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: p }),
            /* @__PURE__ */ e(
              "div",
              {
                className: "grid gap-1.5",
                style: { gridTemplateColumns: `repeat(${r[p]}, 1fr)` },
                children: Array.from({ length: r[p] }).map((h, b) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: "aspect-square rounded-sm bg-primary/15 border border-primary/25"
                  },
                  b
                ))
              }
            )
          ] }, p)) }) })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 border-t pt-6", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e(ne, { className: "text-base font-semibold", children: o("settings:library.advancedSearchLayout") }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:library.advancedSearchLayoutHelp") })
        ] }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: ["sm", "md", "lg", "xl"].map((p) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: `library-adv-grid-cols-${p}`, children: o(`common:gridCols.${p}`) }),
          /* @__PURE__ */ e(
            be,
            {
              id: `library-adv-grid-cols-${p}`,
              type: "number",
              min: 1,
              max: 12,
              value: l[p],
              onChange: (h) => d((b) => ({ ...b, [p]: Number(h.target.value) })),
              onBlur: (h) => d((b) => ({ ...b, [p]: Math.max(1, Math.min(12, Number(h.target.value) || 1)) }))
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o(`common:gridCols.${p}Hint`) })
        ] }, p)) }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              onClick: () => f((p) => !p),
              children: [
                m ? /* @__PURE__ */ e(ra, { className: "h-4 w-4" }) : /* @__PURE__ */ e(rn, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { children: o(m ? "common:actions.hidePreview" : "common:actions.showPreview") })
              ]
            }
          ),
          m && /* @__PURE__ */ e("div", { className: "border rounded-md p-4 bg-muted/30", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ["xl", "lg", "md", "sm"].map((p) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: p }),
            /* @__PURE__ */ e(
              "div",
              {
                className: "grid gap-1.5",
                style: { gridTemplateColumns: `repeat(${l[p]}, 1fr)` },
                children: Array.from({ length: l[p] }).map((h, b) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: "aspect-square rounded-sm bg-primary/15 border border-primary/25"
                  },
                  b
                ))
              }
            )
          ] }, p)) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ gridCols: r, advancedGridCols: l }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function QI({ documents: t, loading: n, loadingMore: a, hasMore: o, loadMore: r, isAdvancedSearch: s = !1, selectedIds: l, onToggleSelection: d }) {
  const c = !!d, u = ge(null), m = ge(null), p = Fe()?.settings, h = {
    sm: Number(p?.LIBRARY_GRID_COLS_SM) || Dt.sm,
    md: Number(p?.LIBRARY_GRID_COLS_MD) || Dt.md,
    lg: Number(p?.LIBRARY_GRID_COLS_LG) || Dt.lg,
    xl: Number(p?.LIBRARY_GRID_COLS_XL) || Dt.xl
  }, b = {
    sm: Number(p?.LIBRARY_ADVANCED_GRID_COLS_SM) || Tt.sm,
    md: Number(p?.LIBRARY_ADVANCED_GRID_COLS_MD) || Tt.md,
    lg: Number(p?.LIBRARY_ADVANCED_GRID_COLS_LG) || Tt.lg,
    xl: Number(p?.LIBRARY_ADVANCED_GRID_COLS_XL) || Tt.xl
  }, C = s ? b : h, y = () => {
    if (!u.current || n || a || !o || !r)
      return;
    const { scrollTop: v, scrollHeight: x, clientHeight: N } = u.current;
    x - v - N < 100 && r();
  };
  return M(() => {
    const v = u.current;
    if (v)
      return v.addEventListener("scroll", y), () => {
        v.removeEventListener("scroll", y);
      };
  }, [n, a, o]), /* @__PURE__ */ i(
    "div",
    {
      ref: u,
      className: "flex flex-col h-full w-full overflow-auto",
      style: {
        "--grid-sm": C.sm,
        "--grid-md": C.md,
        "--grid-lg": C.lg,
        "--grid-xl": C.xl
      },
      children: [
        /* @__PURE__ */ e("style", { children: `
                @media (min-width: 640px) { .library-grid { grid-template-columns: repeat(var(--grid-sm), minmax(0, 1fr)) !important; } }
                @media (min-width: 768px) { .library-grid { grid-template-columns: repeat(var(--grid-md), minmax(0, 1fr)) !important; } }
                @media (min-width: 1024px) { .library-grid { grid-template-columns: repeat(var(--grid-lg), minmax(0, 1fr)) !important; } }
                @media (min-width: 1280px) { .library-grid { grid-template-columns: repeat(var(--grid-xl), minmax(0, 1fr)) !important; } }
            ` }),
        /* @__PURE__ */ e("div", { className: "library-grid grid grid-cols-1 gap-2", children: n && t.length === 0 ? [...Array(20)].map((v, x) => /* @__PURE__ */ i(ye, { className: "overflow-hidden rounded-sm", children: [
          /* @__PURE__ */ e(Ve, { className: "w-full aspect-square rounded-none" }),
          /* @__PURE__ */ i(Ce, { className: "p-3", children: [
            /* @__PURE__ */ e(Ve, { className: "h-4 w-full mb-2" }),
            /* @__PURE__ */ e(Ve, { className: "h-3 w-24" })
          ] })
        ] }, x)) : t.length === 0 ? /* @__PURE__ */ e("div", { className: "col-span-full", children: /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ i(Ce, { className: "flex flex-col items-center justify-center py-16 gap-4", children: [
          /* @__PURE__ */ e(Mt, { className: "h-16 w-16 text-muted-foreground" }),
          /* @__PURE__ */ i("div", { className: "text-center", children: [
            /* @__PURE__ */ e("p", { className: "text-lg font-medium", children: "No documents found" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Try adjusting your filters or search terms" })
          ] })
        ] }) }) }) : t.map((v) => /* @__PURE__ */ e(
          Dn,
          {
            document: v,
            showDetails: !0,
            selected: l?.has(v.id),
            onToggleSelection: d ? () => d(v.id) : void 0,
            selectionEnabled: c
          },
          v.id
        )) }),
        (a || n) && t.length > 0 && /* @__PURE__ */ e("div", { className: "w-full flex justify-center items-center p-4", children: /* @__PURE__ */ e(fe, { className: "h-6 w-6 animate-spin text-primary" }) }),
        o && r && !a && t.length > 0 && /* @__PURE__ */ e("div", { ref: m, className: "h-4" })
      ]
    }
  );
}
function ZI({ selectedCount: t, onAddToCollection: n, onAddToFavorites: a, onClearSelection: o }) {
  return t === 0 ? null : /* @__PURE__ */ i(
    "div",
    {
      className: D(
        "fixed bottom-12 left-1/2 -translate-x-1/2 z-40",
        "flex items-center gap-3 px-5 py-3.5",
        "bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-primary/40",
        "animate-in slide-in-from-bottom-4 fade-in duration-200"
      ),
      children: [
        /* @__PURE__ */ i("span", { className: "text-sm font-semibold", children: [
          t,
          " ",
          t === 1 ? "document" : "documents",
          " selected"
        ] }),
        /* @__PURE__ */ e("div", { className: "h-4 w-px bg-border" }),
        /* @__PURE__ */ i(
          z,
          {
            variant: "default",
            size: "sm",
            onClick: n,
            className: "gap-2",
            children: [
              /* @__PURE__ */ e(tn, { className: "h-4 w-4" }),
              "Add to Collection"
            ]
          }
        ),
        a && /* @__PURE__ */ i(
          z,
          {
            variant: "default",
            size: "sm",
            onClick: a,
            className: "gap-2",
            children: [
              /* @__PURE__ */ e(On, { className: "h-4 w-4" }),
              "Add to Favorites"
            ]
          }
        ),
        /* @__PURE__ */ i(
          z,
          {
            variant: "ghost",
            size: "sm",
            onClick: o,
            className: "gap-1",
            children: [
              /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
              "Clear"
            ]
          }
        )
      ]
    }
  );
}
function JI() {
  const { t } = K(["library", "common"]), { hasMore: n, search: a, isSearching: o, objects: r } = Hr(), s = Br(), { client: l } = de(), { registry: d } = tt(), { getUserDisplayName: c } = Ct(l), u = Ea(), { addMany: m } = Ca(), f = Fe(), p = f?.settings?.WEIGHTS, h = f?.settings?.ADVANCED_FACETS ?? Ro, b = f?.settings?.BASIC_FACETS ?? $o, [C, y] = g("basic"), [v, x] = g(!1), [N, w] = g({}), [A, S] = g(""), [I, L] = g(Oa), [V, G] = g(0), [R, j] = g(!0), [O, Q] = g(0.6), [ee, te] = g(() => {
    const F = localStorage.getItem(ln);
    return F === "grid" || F === "table" ? F : "grid";
  }), [k, _] = g(/* @__PURE__ */ new Set()), [q, $] = g(!1), T = (F) => {
    localStorage.setItem(ln, F), te(F);
  }, X = !!A.trim(), U = ce(() => X ? r.filter((F) => (F.score ?? 0) >= O) : r, [r, O, X]);
  M(() => {
    A.trim() || Q(0.6);
  }, [A]);
  const E = J((F) => {
    _((ue) => {
      const he = new Set(ue);
      return he.has(F) ? he.delete(F) : he.add(F), he;
    });
  }, []), H = J(() => {
    _(new Set(U.map((F) => F.id)));
  }, [U]), P = J(() => {
    _(/* @__PURE__ */ new Set());
  }, []), B = ce(() => U.filter((F) => k.has(F.id)), [U, k]), W = () => {
    $(!0);
  }, le = () => {
    $(!1), P();
  }, me = async () => {
    await m(Array.from(k)), P();
  };
  M(() => {
    const F = setTimeout(() => {
      S(N.search || "");
    }, 300);
    return () => clearTimeout(F);
  }, [N.search]), M(() => {
    const F = Oa.map((pe) => {
      const Be = s[pe.property];
      if (!Be)
        return { ...pe, values: [] };
      let _e = [];
      return pe.property === "type" ? _e = to(Be, d) : _e = eo(Be), { ...pe, values: _e };
    }), ue = /* @__PURE__ */ new Set([...Oa.map((pe) => pe.property), "content.type", "total"]), he = h.filter((pe) => !ue.has(pe.field) && !ue.has(pe.name)).map((pe) => ({ name: pe.name, field: pe.field, match: !1 })), rt = ui(s, he).map((pe) => {
      const Be = pe.name && pe.name !== pe.field ? pe.name : pe.field.replace("properties.", "").split(/[_.]/).map((_e) => _e.charAt(0).toUpperCase() + _e.slice(1)).join(" ");
      return {
        id: pe.field,
        label: Be,
        placeholder: `Filter by ${Be}`,
        property: pe.field,
        type: zn.LIST,
        searchType: on.SELECTION_MULTIPLE,
        values: pe.values,
        system: !1
      };
    });
    L([...F, ...rt]);
  }, [s, d, h]);
  const ze = ce(() => {
    const F = (pe) => pe === "type.id" ? "type" : pe, ue = /* @__PURE__ */ new Set(["type", "status", "created_by", "mime_type"]), he = (pe) => {
      if (pe.name && pe.name !== pe.field && !ue.has(pe.name))
        return pe.name;
      switch (F(pe.field)) {
        case "type":
          return t("common:filters.contentType");
        case "status":
          return t("common:filters.statuses");
        case "created_by":
          return t("common:properties.createdBy");
        case "content.type":
          return t("common:filters.mimeType");
        default:
          return pe.field.replace("properties.", "").split(/[_.]/).map((Be) => Be.charAt(0).toUpperCase() + Be.slice(1)).join(" ");
      }
    }, je = (pe) => s[pe.field] ?? s[F(pe.field)] ?? s[pe.name], rt = (pe) => {
      const Be = F(pe.field);
      switch (Be) {
        case "type":
          return to(je(pe), d);
        case "created_by":
          return Mr(je(pe));
        default:
          return Be.startsWith("properties.") ? ui(s, [{ name: pe.name, field: pe.field }])[0]?.values ?? [] : eo(je(pe));
      }
    };
    return b.map((pe) => {
      const Be = F(pe.field);
      return {
        id: Be === "content.type" ? "mime_type" : Be,
        field: pe.field,
        label: he(pe),
        values: rt(pe)
      };
    });
  }, [s, d, b, t]), Pe = () => {
    const F = {};
    I.forEach((_e) => {
      const He = N[_e.id];
      He !== void 0 && (_e.property.startsWith("properties.") ? Array.isArray(He) && He.length > 0 ? F[_e.property] = { $in: He } : Array.isArray(He) || (F[_e.property] = He) : _e.id === "created_by" && (Array.isArray(He) && He.length > 0 ? F[_e.property] = { $in: He } : Array.isArray(He) || (F[_e.property] = He)));
    }), Object.keys(N).forEach((_e) => {
      if (_e.startsWith("properties.") && !F[_e]) {
        const He = N[_e];
        Array.isArray(He) && He.length > 0 ? F[_e] = { $in: He } : He && !Array.isArray(He) && (F[_e] = He);
      }
    });
    const ue = N?.mime_type;
    ue && (F["content.type"] = ue);
    const he = N?.type;
    let je;
    he && (je = Array.isArray(he) ? he : [he]), u && (je ? je = je.filter((_e) => u.includes(_e)) : je = u);
    const rt = N?.status;
    let pe;
    rt && (pe = rt);
    const Be = {
      types: je,
      status: pe,
      match: Object.keys(F).length > 0 ? F : void 0
    };
    if (A && A.trim()) {
      const _e = {
        text: A,
        config: {
          text: !0,
          image: !0,
          properties: !0
        }
      };
      Be.vector = _e, p?.ENABLE && (Be.weights = {
        text: p.TEXT,
        image: p.IMAGES,
        properties: p.PROPERTIES
      });
    }
    a.query = Be, a.search();
  }, Ue = (F) => {
    if (Object.keys(F).length === 0) {
      w({});
      return;
    }
    const ue = { ...N };
    Object.keys(F).forEach((he) => {
      F[he] === void 0 ? delete ue[he] : ue[he] = F[he];
    }), w(ue);
  }, re = () => {
    !v && n && (x(!0), a.loadMore().finally(() => {
      x(!1);
    }));
  }, Ne = ce(() => {
    const { search: F, ...ue } = N;
    return ue;
  }, [JSON.stringify((() => {
    const { search: F, ...ue } = N;
    return ue;
  })())]);
  M(() => {
    A !== void 0 && Pe();
  }, [A]), M(() => {
    (C === "basic" || R) && Pe();
  }, [Ne, C]), M(() => {
    C === "basic" && j(!0);
  }, [C]), M(() => {
    Pe();
  }, []);
  const we = (F, ue) => {
    if (typeof ue == "boolean")
      return ue ? "Yes" : "No";
    const he = String(ue);
    switch (F) {
      case "type":
        return d?.getTypeName(he) || he;
      case "status":
        return he;
      case "created_by":
        return c(he, void 0);
      default:
        return he;
    }
  }, Le = () => {
    w({ search: N.search }), G((F) => F + 1);
  }, nt = (F, ue) => {
    Ue({ [F]: ue });
  }, se = (F) => {
    if (!F.values || F.values.length === 0) return null;
    const ue = F.searchType === on.SELECTION_MULTIPLE;
    return /* @__PURE__ */ e(
      _n,
      {
        label: F.label,
        items: F.values,
        selectedValue: N[F.id],
        onSelection: (he) => nt(F.id, he),
        onClear: V,
        getLabelFn: (he) => we(F.id, he),
        multiple: ue
      },
      F.id
    );
  }, Z = Object.keys(N).some((F) => F !== "search" && N[F] !== void 0), oe = (F) => !F.values || F.values.length === 0 ? null : /* @__PURE__ */ e(
    _n,
    {
      label: F.label,
      items: F.values,
      selectedValue: N[F.id],
      onSelection: (ue) => nt(F.id, ue),
      onClear: V,
      getLabelFn: (ue) => we(F.id, ue),
      multiple: !1
    },
    F.id
  );
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full gap-4 p-2", children: [
    /* @__PURE__ */ i("div", { className: "flex-shrink-0 flex gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        YI,
        {
          filters: N,
          onFiltersChange: Ue,
          onRefresh: Pe,
          basicFilters: ze,
          getValueLabel: we,
          isAdvancedSearch: C === "advanced",
          scoreThreshold: O,
          onScoreThresholdChange: Q
        }
      ) }),
      /* @__PURE__ */ e(_a, { value: ee, onValueChange: T })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-1 gap-3 overflow-hidden", children: [
      /* @__PURE__ */ e("div", { className: "flex-1 overflow-hidden", children: ee === "grid" ? /* @__PURE__ */ e(
        QI,
        {
          documents: U,
          loading: o,
          loadingMore: v,
          hasMore: n,
          loadMore: re,
          isAdvancedSearch: !0,
          selectedIds: k,
          onToggleSelection: E
        }
      ) : /* @__PURE__ */ e(
        UI,
        {
          documents: U,
          loading: o,
          loadingMore: v,
          hasMore: n,
          loadMore: re,
          selectedIds: k,
          onToggleSelection: E,
          onSelectAll: H,
          onClearSelection: P
        }
      ) }),
      /* @__PURE__ */ i(ye, { className: "w-80 flex-shrink-0 flex flex-col rounded-sm", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-3 p-4 flex-shrink-0 bg-muted/50", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold", children: t("common:actions.filters") }),
            Z && /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: Le, children: t("common:actions.clearAll") })
          ] }),
          /* @__PURE__ */ i(
            Da,
            {
              type: "single",
              value: C,
              onValueChange: (F) => F && y(F),
              variant: "outline",
              className: "w-full",
              children: [
                /* @__PURE__ */ e(_t, { value: "basic", className: "flex-1", children: t("library:basic") }),
                /* @__PURE__ */ e(_t, { value: "advanced", className: "flex-1", children: t("library:advanced") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(Ee, { className: "flex-shrink-0" }),
        /* @__PURE__ */ e("div", { className: "overflow-y-auto flex-1", children: C === "basic" ? ze.map(oe) : I.map((F) => se(F)) }),
        C === "advanced" && /* @__PURE__ */ i("div", { className: "p-4 flex-shrink-0 space-y-3 border-t bg-muted/50", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              Ta,
              {
                id: "auto-search",
                checked: R,
                onCheckedChange: j
              }
            ),
            /* @__PURE__ */ e(ne, { htmlFor: "auto-search", className: "text-sm font-medium cursor-pointer", children: t("library:autoSearch") })
          ] }),
          !R && /* @__PURE__ */ e(
            z,
            {
              onClick: Pe,
              disabled: o,
              className: "w-full",
              size: "lg",
              children: t("common:actions.search")
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      ZI,
      {
        selectedCount: k.size,
        onAddToCollection: W,
        onAddToFavorites: me,
        onClearSelection: P
      }
    ),
    /* @__PURE__ */ e(
      as,
      {
        documents: B,
        open: q,
        onOpenChange: $,
        onActionDone: le
      }
    )
  ] });
}
function eP() {
  const t = Fe(), n = t?.settings?.ADVANCED_FACETS ?? Ro, a = t?.settings?.BASIC_FACETS ?? $o, o = ce(() => {
    const r = (l) => l === "type.id" ? "type" : l, s = /* @__PURE__ */ new Map();
    for (const l of [...a, ...n]) {
      const d = r(l.field);
      s.has(d) || s.set(d, { ...l, field: d });
    }
    return Array.from(s.values());
  }, [a, n]);
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(Vr, { facets: o, children: /* @__PURE__ */ e(JI, {}) }) });
}
function tP() {
  const { t } = K();
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-screen text-center", children: [
    /* @__PURE__ */ e(Wa, { className: "w-24 h-24 text-destructive mb-4" }),
    /* @__PURE__ */ e("h1", { className: "text-4xl font-bold mb-2", children: t("notFound.title") }),
    /* @__PURE__ */ e("p", { className: "text-lg text-muted-foreground", children: t("notFound.description") })
  ] }) });
}
function nP(t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of t) {
    const r = n.get(o.name);
    r ? r.push(o) : n.set(o.name, [o]);
  }
  const a = [];
  for (const [o, r] of n)
    r.sort((s, l) => l.version - s.version), a.push({ name: o, versions: r });
  return a.sort((o, r) => o.name.localeCompare(r.name)), a;
}
function aP(t, n) {
  const a = t.filter((o) => !n.has(o.id)).length;
  return a === t.length ? !0 : a === 0 ? !1 : "indeterminate";
}
function oP({ group: t, excludedIds: n, onToggleParent: a, onToggleVersion: o }) {
  const { t: r } = K(["settings", "common"]), [s, l] = g(!1), d = aP(t.versions, n);
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i(Ke, { className: "group", children: [
      /* @__PURE__ */ e(Ae, { children: /* @__PURE__ */ e(
        Xe,
        {
          checked: d,
          onCheckedChange: () => a(t),
          "aria-label": r("settings:agents.toggleAgent", { name: t.name })
        }
      ) }),
      /* @__PURE__ */ e(Ae, { className: "font-medium", children: t.name }),
      /* @__PURE__ */ e(Ae, { children: /* @__PURE__ */ e(ve, { variant: "secondary", children: r("settings:agents.version", { count: t.versions.length }) }) }),
      /* @__PURE__ */ e(Ae, { className: "text-right", children: t.versions.length > 1 && /* @__PURE__ */ e(
        z,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => l(!s),
          "aria-label": r(s ? "settings:agents.collapseVersions" : "settings:agents.expandVersions"),
          children: /* @__PURE__ */ e(
            mt,
            {
              className: D(
                "h-4 w-4 transition-transform",
                s && "rotate-90"
              )
            }
          )
        }
      ) })
    ] }),
    s && t.versions.map((c) => /* @__PURE__ */ i(Ke, { className: "bg-muted/30", children: [
      /* @__PURE__ */ e(Ae, { className: "pl-8", children: /* @__PURE__ */ e(
        Xe,
        {
          checked: !n.has(c.id),
          onCheckedChange: () => o(c.id),
          "aria-label": r("settings:agents.toggleAgent", { name: `${c.name} v${c.version}` })
        }
      ) }),
      /* @__PURE__ */ e(Ae, { className: "text-muted-foreground", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(so, { className: "h-3 w-3 text-muted-foreground/50" }),
        c.name
      ] }) }),
      /* @__PURE__ */ e(Ae, { children: /* @__PURE__ */ i(ve, { variant: "outline", className: "text-xs", children: [
        "v",
        c.version
      ] }) }),
      /* @__PURE__ */ e(Ae, {})
    ] }, c.id))
  ] });
}
function iP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), { client: r } = de(), [s, l] = g([]), [d, c] = g(!0), [u, m] = g(
    Array.isArray(t?.AGENT_INTERACTIONS_EXCLUDED_LIST) ? t.AGENT_INTERACTIONS_EXCLUDED_LIST : []
  );
  M(() => {
    if (!r) return;
    (async () => {
      c(!0);
      try {
        const N = (await r.interactions.list({
          query: {
            status: ia.published,
            tags: ["agent"]
          }
        })).filter((w) => !w.tags.includes("default")).map((w) => ({
          id: w.id,
          name: w.name,
          version: w.version
        }));
        l(N);
      } catch (x) {
        console.error("Failed to fetch interactions:", x), l([]);
      } finally {
        c(!1);
      }
    })();
  }, [r]);
  const f = ce(() => new Set(u), [u]), p = ce(() => nP(s), [s]), h = J(
    (v) => {
      m(
        (x) => x.includes(v) ? x.filter((N) => N !== v) : [...x, v]
      );
    },
    []
  ), b = J(
    (v) => {
      m((x) => {
        const N = new Set(x);
        if (v.versions.filter((S) => !N.has(S.id)).length === v.versions.length)
          return [...x, ...v.versions.filter((S) => !N.has(S.id)).map((S) => S.id)];
        {
          const S = new Set(v.versions.map((I) => I.id));
          return x.filter((I) => !S.has(I));
        }
      });
    },
    []
  ), C = s.length - u.filter((v) => s.some((x) => x.id === v)).length, y = s.length;
  return /* @__PURE__ */ i(ye, { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ i(Te, { className: "shrink-0", children: [
      /* @__PURE__ */ e(ke, { children: o("settings:agents.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:agents.description") })
    ] }),
    /* @__PURE__ */ e(Ce, { className: "flex flex-col gap-4 min-h-0 flex-1", children: d ? /* @__PURE__ */ e("div", { className: "flex h-24 items-center justify-center", children: /* @__PURE__ */ e(fe, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : p.length === 0 ? /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:agents.noAgentsFound") }) : /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between shrink-0", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:agents.enabledCount", { enabledCount: C, totalCount: y, count: y }) }) }),
      /* @__PURE__ */ e("div", { className: "rounded-md border min-h-0 flex-1 overflow-auto", children: /* @__PURE__ */ i("table", { className: "w-full caption-bottom text-sm", children: [
        /* @__PURE__ */ e(xn, { className: "sticky top-0 z-10 bg-background", children: /* @__PURE__ */ i(Ke, { children: [
          /* @__PURE__ */ e(Ge, { className: "w-[50px]", children: o("settings:agents.columns.enabled") }),
          /* @__PURE__ */ e(Ge, { children: o("settings:agents.columns.agent") }),
          /* @__PURE__ */ e(Ge, { className: "w-[120px]", children: o("settings:agents.columns.versions") }),
          /* @__PURE__ */ e(Ge, { className: "w-[60px]" })
        ] }) }),
        /* @__PURE__ */ e(yn, { children: p.map((v) => /* @__PURE__ */ e(
          oP,
          {
            group: v,
            excludedIds: f,
            onToggleParent: b,
            onToggleVersion: h
          },
          v.name
        )) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e(it, { className: "justify-end shrink-0", children: /* @__PURE__ */ e(z, { onClick: () => n({ excludedAgents: u }), disabled: a || d, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
const rP = [
  "LibraryBig",
  "Library",
  "BookOpen",
  "BookMarked",
  "Folder",
  "FolderOpen",
  "FileText",
  "Files",
  "Archive",
  "Database",
  "HardDrive",
  "Server",
  "Globe",
  "Building",
  "Building2",
  "Briefcase",
  "Layout",
  "LayoutDashboard",
  "Box",
  "Boxes",
  "Package",
  "Layers",
  "Grid3x3",
  "Table",
  "Settings",
  "Wrench",
  "Cog",
  "Shield",
  "Lock",
  "Key",
  "Users",
  "UserCircle",
  "Contact",
  "Crown",
  "Star",
  "Heart",
  "Zap",
  "Rocket",
  "Target",
  "Flag",
  "Bookmark",
  "Tag",
  "Search",
  "Eye",
  "Bell",
  "Mail",
  "MessageSquare",
  "Send",
  "Cloud",
  "Download",
  "Upload",
  "Share2",
  "Link",
  "Paperclip",
  "Image",
  "Camera",
  "Video",
  "Music",
  "Mic",
  "Monitor",
  "Smartphone",
  "Tablet",
  "Laptop",
  "Printer",
  "Cpu",
  "Wifi",
  "Map",
  "MapPin",
  "Navigation",
  "Compass",
  "Home",
  "Store",
  "ShoppingCart",
  "CreditCard",
  "DollarSign",
  "BarChart",
  "PieChart",
  "TrendingUp",
  "Calendar",
  "Clock",
  "Timer",
  "AlarmClock",
  "Hourglass",
  "Activity",
  "CheckCircle",
  "AlertCircle",
  "Info",
  "HelpCircle",
  "XCircle",
  "AlertTriangle",
  "Plus",
  "Minus",
  "Edit",
  "Trash2",
  "Copy",
  "Clipboard",
  "Terminal",
  "Code",
  "GitBranch",
  "Github",
  "Blocks",
  "Puzzle"
];
function Fn(t) {
  return xt[t];
}
function sP({ value: t, onChange: n, t: a }) {
  const [o, r] = g(!1), [s, l] = g(""), d = ce(() => {
    const u = s.toLowerCase();
    return u ? Object.keys(xt).filter((f) => f.toLowerCase().includes(u)).slice(0, 80) : rP.filter((f) => Fn(f));
  }, [s]), c = Fn(t);
  return /* @__PURE__ */ i(gt, { open: o, onOpenChange: r, children: [
    /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ e(z, { variant: "outline", className: "w-full justify-start gap-2", children: c ? /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e(c, { className: "size-4" }),
      /* @__PURE__ */ e("span", { children: t })
    ] }) : /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: a("common:iconPicker.selectIcon") }) }) }),
    /* @__PURE__ */ e(ut, { className: "w-80 p-0", align: "start", children: /* @__PURE__ */ i(Kt, { children: [
      /* @__PURE__ */ e(
        Yt,
        {
          placeholder: a("common:iconPicker.searchIcons"),
          value: s,
          onValueChange: l
        }
      ),
      /* @__PURE__ */ i(Xt, { children: [
        /* @__PURE__ */ e(Qt, { children: a("common:iconPicker.noIconsFound") }),
        /* @__PURE__ */ e(kt, { className: "max-h-64 overflow-y-auto", children: d.map((u) => {
          const m = Fn(u);
          return m ? /* @__PURE__ */ i(
            yt,
            {
              value: u,
              onSelect: () => {
                n(u), r(!1), l("");
              },
              children: [
                /* @__PURE__ */ e(m, { className: "size-4 mr-2 shrink-0" }),
                /* @__PURE__ */ e("span", { children: u })
              ]
            },
            u
          ) : null;
        }) })
      ] })
    ] }) })
  ] });
}
const lP = [
  "#9333ea",
  // purple-600 (default)
  "#dc2626",
  // red-600
  "#ea580c",
  // orange-600
  "#ca8a04",
  // yellow-600
  "#16a34a",
  // green-600
  "#0d9488",
  // teal-600
  "#2563eb",
  // blue-600
  "#4f46e5",
  // indigo-600
  "#c026d3",
  // fuchsia-600
  "#db2777",
  // pink-600
  "#475569",
  // slate-600
  "#1e293b"
  // slate-800
];
function cP({ settings: t, appName: n, appTitle: a, onSave: o, loading: r }) {
  const { t: s } = K(["settings", "common"]), { client: l } = de(), d = Ie(), [c, u] = g(t?.APPLICATION_NAME ?? ""), [m, f] = g(t?.APPLICATION_BREADCRUMB ?? ""), [p, h] = g(t?.APPLICATION_ICON ?? "LibraryBig"), [b, C] = g(
    t?.APPLICATION_ICON_BACKGROUND ?? "#9333ea"
  ), [y, v] = g(t?.APPLICATION_ICON_IMAGE ?? ""), [x, N] = g(t?.APPLICATION_ICON_IMAGE ? "image" : "icon"), [w, A] = g(!1), S = ge(null), I = Tr(x === "image" ? y : void 0), L = Fn(p) || Fn("LibraryBig"), V = (R) => {
    R.length > 0 && v(R[0].id);
  }, G = async (R) => {
    const j = R.target.files?.[0];
    if (R.target.value = "", !(!j || !l)) {
      A(!0);
      try {
        const O = await l.objects.create({ content: j });
        v(O.id);
      } catch (O) {
        console.error("Failed to upload icon image:", O), d?.({
          status: "error",
          title: s("settings:application.uploadFailed")
        });
      } finally {
        A(!1);
      }
    }
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: s("settings:application.title") }),
      /* @__PURE__ */ e(Ye, { children: s("settings:application.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "application-name", children: s("settings:application.applicationName") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "application-name",
            type: "text",
            placeholder: n || s("settings:application.applicationNamePlaceholder"),
            value: c,
            onChange: (R) => u(R.target.value)
          }
        ),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: s("settings:application.applicationNameHelp") }),
          /* @__PURE__ */ i("p", { className: "text-xs text-muted-foreground", children: [
            s("settings:application.leaveEmptyDefault"),
            " ",
            /* @__PURE__ */ e("span", { className: "font-bold", children: n || "ECM" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "application-breadcrumb", children: s("settings:application.breadcrumbLabel") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "application-breadcrumb",
            type: "text",
            placeholder: a || s("settings:application.breadcrumbPlaceholder"),
            value: m,
            onChange: (R) => f(R.target.value)
          }
        ),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: s("settings:application.breadcrumbHelp") }),
          /* @__PURE__ */ i("p", { className: "text-xs text-muted-foreground", children: [
            s("settings:application.leaveEmptyDefault"),
            " ",
            /* @__PURE__ */ e("span", { className: "font-bold", children: a || "Dashboard" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: s("settings:application.applicationIcon") }),
        /* @__PURE__ */ i(Sn, { value: x, onValueChange: (R) => N(R), children: [
          /* @__PURE__ */ i(An, { children: [
            /* @__PURE__ */ e(Re, { value: "icon", children: s("settings:application.iconTabIcon") }),
            /* @__PURE__ */ e(Re, { value: "image", children: s("settings:application.iconTabImage") })
          ] }),
          /* @__PURE__ */ i($e, { value: "icon", className: "flex flex-col gap-6 pt-2", children: [
            /* @__PURE__ */ e(sP, { value: p, onChange: h, t: s }),
            /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(ne, { children: s("settings:application.iconBackgroundColor") }),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: lP.map((R) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: "size-8 rounded-md border-2 transition-all cursor-pointer",
                    style: {
                      backgroundColor: R,
                      borderColor: b === R ? "white" : "transparent",
                      boxShadow: b === R ? `0 0 0 2px ${R}` : "none"
                    },
                    onClick: () => C(R)
                  },
                  R
                )) }),
                /* @__PURE__ */ e(
                  be,
                  {
                    type: "color",
                    value: b,
                    onChange: (R) => C(R.target.value),
                    className: "w-10 h-10 p-1 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i($e, { value: "image", className: "flex flex-col gap-2 pt-2", children: [
            /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  ref: S,
                  type: "file",
                  accept: "image/*",
                  onChange: G,
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ i(z, { variant: "outline", type: "button", disabled: w, onClick: () => S.current?.click(), children: [
                w ? /* @__PURE__ */ e(fe, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ e(bn, { className: "h-4 w-4 mr-2" }),
                s("settings:application.uploadImage")
              ] }),
              /* @__PURE__ */ e(
                Ia,
                {
                  onSelection: V,
                  selectionMode: "single",
                  children: /* @__PURE__ */ i(z, { variant: "outline", type: "button", children: [
                    /* @__PURE__ */ e(Ki, { className: "h-4 w-4 mr-2" }),
                    s("settings:application.chooseFromLibrary")
                  ] })
                }
              ),
              y && /* @__PURE__ */ i(z, { variant: "outline", type: "button", onClick: () => v(""), children: [
                /* @__PURE__ */ e(De, { className: "h-4 w-4 mr-2" }),
                s("common:actions.remove")
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: s("settings:application.iconImageHelp") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: s("settings:application.preview") }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-3 p-3 rounded-lg border bg-sidebar", children: [
          I ? /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center", children: /* @__PURE__ */ e("img", { src: I, alt: c || n || "ECM", className: "size-8 object-contain" }) }) : /* @__PURE__ */ e(
            "div",
            {
              className: "flex aspect-square size-8 items-center justify-center rounded-lg text-white",
              style: { backgroundColor: b },
              children: L && /* @__PURE__ */ e(L, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ e("span", { className: "font-medium", children: c || n || "ECM" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(
      z,
      {
        onClick: () => o({
          applicationName: c,
          applicationBreadcrumb: m,
          applicationIcon: p,
          applicationIconBackground: b,
          applicationIconImage: x === "image" ? y : ""
        }),
        disabled: r,
        children: s(r ? "common:actions.saving" : "common:actions.save")
      }
    ) })
  ] });
}
const Ti = [
  { path: "name", label: "Name", type: "string" },
  { path: "status", label: "Status", type: "string" },
  { path: "location", label: "Location", type: "string" },
  { path: "tags", label: "Tags", type: "array" },
  { path: "created_at", label: "Created At", type: "string" },
  { path: "updated_at", label: "Updated At", type: "string" },
  { path: "created_by", label: "Created By", type: "string" },
  { path: "updated_by", label: "Updated By", type: "string" },
  { path: "is_deleted", label: "Is Deleted", type: "boolean" },
  { path: "content.type", label: "Content Type", type: "string" },
  { path: "content.name", label: "Content Name", type: "string" },
  { path: "content.source", label: "Content Source", type: "string" },
  { path: "tokens.count", label: "Token Count", type: "number" },
  { path: "tokens.encoding", label: "Token Encoding", type: "string" },
  { path: "type.id", label: "Type", type: "string" }
];
function cs(t, n) {
  const a = [];
  for (const [o, r] of Object.entries(t)) {
    const s = n ? `${n}.${o}` : o, l = r.type ?? "unknown";
    l === "object" && r.properties ? a.push(...cs(r.properties, s)) : a.push({
      path: s,
      label: r.title ?? En(o),
      type: l
    });
  }
  return a.sort((o, r) => o.label.localeCompare(r.label));
}
function Ii({ option: t, isSelected: n }) {
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ e(
      Me,
      {
        className: D(
          "mr-2 h-4 w-4 shrink-0",
          n ? "opacity-100" : "opacity-0"
        )
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { children: t.label }),
      /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: t.path })
    ] })
  ] });
}
function Mo({
  typeId: t,
  value: n,
  onChange: a,
  excludePaths: o = [],
  placeholder: r,
  disabled: s = !1
}) {
  const { t: l } = K("common"), d = r ?? l("inputs.selectProperty"), { client: c } = de(), [u, m] = g([]), [f, p] = g(!0), [h, b] = g(!1);
  M(() => {
    if (!c || !t) {
      m([]), p(!1);
      return;
    }
    p(!0), c.store.types.retrieve(t).then((A) => {
      const S = A.object_schema;
      S?.properties ? m(cs(S.properties, "properties")) : m([]);
    }).catch((A) => {
      console.error("Failed to fetch type schema:", A), m([]);
    }).finally(() => {
      p(!1);
    });
  }, [c, t]);
  const C = ce(() => [...Ti, ...u], [u]), y = ce(() => Ti.filter((A) => !o.includes(A.path) || A.path === n), [o, n]), v = ce(() => u.filter((A) => !o.includes(A.path) || A.path === n), [u, o, n]), x = ce(() => C.find((A) => A.path === n), [C, n]), N = ce(() => n ? x ? x.label : En(n.split(".").pop() ?? n) : d, [n, x, d]), w = (A) => {
    const S = C.find((I) => I.path === A);
    S && a(S.path, S.label), b(!1);
  };
  return f ? /* @__PURE__ */ e("div", { className: "flex h-9 w-full items-center justify-center rounded-md border border-input bg-popover px-3 py-2", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) }) : C.length === 0 && !n ? /* @__PURE__ */ e("div", { className: "flex h-9 w-full items-center rounded-md border border-input bg-popover px-3 py-2", children: /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: l("inputs.noPropertiesAvailable") }) }) : /* @__PURE__ */ i(gt, { open: h, onOpenChange: b, children: [
    /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(
      z,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": h,
        className: "w-full justify-between font-normal bg-popover",
        disabled: s,
        children: [
          /* @__PURE__ */ e("span", { className: "truncate", children: N }),
          /* @__PURE__ */ e(Ut, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(ut, { className: "p-0", align: "start", style: { width: "var(--radix-popover-trigger-width)" }, children: /* @__PURE__ */ i(Kt, { children: [
      /* @__PURE__ */ e(Yt, { placeholder: l("inputs.searchProperties") }),
      /* @__PURE__ */ i(Xt, { children: [
        /* @__PURE__ */ e(Qt, { children: l("inputs.noPropertyFound") }),
        v.length > 0 && /* @__PURE__ */ e(kt, { heading: l("inputs.typeProperties"), children: v.map((A) => /* @__PURE__ */ e(
          yt,
          {
            value: `${A.label} ${A.path}`,
            onSelect: () => w(A.path),
            children: /* @__PURE__ */ e(Ii, { option: A, isSelected: n === A.path })
          },
          A.path
        )) }),
        v.length > 0 && y.length > 0 && /* @__PURE__ */ e(Er, {}),
        y.length > 0 && /* @__PURE__ */ e(kt, { heading: l("inputs.commonProperties"), children: y.map((A) => /* @__PURE__ */ e(
          yt,
          {
            value: `${A.label} ${A.path}`,
            onSelect: () => w(A.path),
            children: /* @__PURE__ */ e(Ii, { option: A, isSelected: n === A.path })
          },
          A.path
        )) })
      ] })
    ] }) })
  ] });
}
function dP({
  facet: t,
  index: n,
  showLabels: a,
  onRemove: o,
  onChange: r
}) {
  const { t: s } = K(["settings", "common"]);
  return /* @__PURE__ */ i("div", { className: "grid grid-cols-[1fr_1fr_auto] gap-2 items-end", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      a && /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground", children: s("settings:facets.field") }),
      /* @__PURE__ */ e(
        be,
        {
          placeholder: s("settings:facets.fieldPlaceholder"),
          value: t.field,
          onChange: (l) => r(n, "field", l.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      a && /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground", children: s("settings:facets.name") }),
      /* @__PURE__ */ e(
        be,
        {
          placeholder: s("settings:facets.displayName"),
          value: t.name,
          onChange: (l) => r(n, "name", l.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ e(
      z,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => o(n),
        children: /* @__PURE__ */ e(ya, { className: "h-4 w-4 text-destructive" })
      }
    )
  ] });
}
function ds({ title: t, description: n, initialFacets: a, onSave: o, loading: r }) {
  const { t: s } = K(["settings", "common"]), [l, d] = g(() => structuredClone(a)), [c, u] = g(""), m = ce(() => l.map((y) => y.field), [l]), f = (y, v) => {
    d((x) => [...x, { name: v, field: y }]);
  }, p = () => {
    d((y) => [...y, { name: "", field: "" }]);
  }, h = (y) => {
    d((v) => v.filter((x, N) => N !== y));
  }, b = (y, v, x) => {
    d((N) => N.map((w, A) => A === y ? { ...w, [v]: x } : w));
  }, C = () => {
    const y = l.filter((v) => v.name.trim() !== "" && v.field.trim() !== "").map((v) => ({ name: v.name.trim(), field: v.field.trim() }));
    o(y);
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: t }),
      /* @__PURE__ */ e(Ye, { children: n })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: s("settings:facets.filterByType") }),
        /* @__PURE__ */ e(
          Aa,
          {
            value: c,
            onChange: u,
            placeholder: s("settings:facets.selectTypePlaceholder"),
            allowEmpty: !0,
            emptyLabel: s("settings:facets.allTypes")
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: s("settings:facets.typeFilterHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
        l.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: s("settings:facets.noFacetsConfigured") }),
        l.map((y, v) => /* @__PURE__ */ e(
          dP,
          {
            facet: y,
            index: v,
            showLabels: v === 0,
            onRemove: h,
            onChange: b
          },
          v
        )),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(
            Mo,
            {
              typeId: c || void 0,
              value: "",
              onChange: (y, v) => f(y, v),
              excludePaths: m,
              placeholder: s("settings:facets.addFacet")
            }
          ),
          /* @__PURE__ */ i(z, { variant: "outline", size: "sm", onClick: p, className: "self-start", children: [
            /* @__PURE__ */ e(jn, { className: "h-4 w-4" }),
            s("settings:facets.addCustomFacet")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: C, disabled: r, children: s(r ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function uP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K("settings"), r = Array.isArray(t?.BASIC_FACETS) ? t.BASIC_FACETS : $o;
  return /* @__PURE__ */ e(
    ds,
    {
      title: o("basicFilters.title"),
      description: o("basicFilters.description"),
      initialFacets: r,
      onSave: (s) => n({ basicFacets: s }),
      loading: a
    }
  );
}
function mP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g(
    t?.DEFAULT_COLOR_SCHEME ?? "default"
  );
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:colorScheme.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:colorScheme.description") })
    ] }),
    /* @__PURE__ */ e(Ce, { className: "flex flex-col gap-6", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { children: o("settings:colorScheme.defaultColorScheme") }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", children: Object.entries(Ka).map(([l, d]) => /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => s(l),
          className: `flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:cursor-pointer hover:bg-accent ${r === l ? "border-primary bg-accent" : ""}`,
          children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: "h-5 w-5 shrink-0 rounded-full border overflow-hidden",
                style: { position: "relative" },
                children: /* @__PURE__ */ i("svg", { viewBox: "0 0 20 20", className: "h-full w-full", children: [
                  /* @__PURE__ */ i("defs", { children: [
                    /* @__PURE__ */ e("clipPath", { id: `light-${l}`, children: /* @__PURE__ */ e("polygon", { points: "0,0 20,0 0,20" }) }),
                    /* @__PURE__ */ e("clipPath", { id: `dark-${l}`, children: /* @__PURE__ */ e("polygon", { points: "20,0 20,20 0,20" }) })
                  ] }),
                  /* @__PURE__ */ e("rect", { width: "20", height: "20", fill: d.lightPrimary, clipPath: `url(#light-${l})` }),
                  /* @__PURE__ */ e("rect", { width: "20", height: "20", fill: d.darkPrimary, clipPath: `url(#dark-${l})` })
                ] })
              }
            ),
            o(`common:${d.labelKey}`)
          ]
        },
        l
      )) }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("settings:colorScheme.defaultColorSchemeHelp") })
    ] }) }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(
      z,
      {
        onClick: () => n({ defaultColorScheme: r }),
        disabled: a,
        children: o(a ? "common:actions.saving" : "common:actions.save")
      }
    ) })
  ] });
}
const us = 160;
function pP(t, n, a, o, r, s, l = us) {
  const d = t * n / 100, c = d * s / r, u = (t - d) * a / 100, m = (l - c) * o / 100, f = Math.max(0, -u / d * r), p = Math.max(0, -m / c * s), h = Math.min(r, (t - u) / d * r), b = Math.min(s, (l - m) / c * s);
  return {
    left: f / r * 100,
    top: p / s * 100,
    width: (h - f) / r * 100,
    height: (b - p) / s * 100
  };
}
function hP({
  open: t,
  onOpenChange: n,
  imageUrl: a,
  positionX: o,
  positionY: r,
  zoom: s,
  dashboardWidth: l,
  bannerHeight: d = us,
  onApply: c
}) {
  const { t: u } = K("common"), [m, f] = g(o), [p, h] = g(r), [b, C] = g(s), [y, v] = g(String(s)), x = J((T) => {
    C((X) => {
      const U = typeof T == "function" ? T(X) : T;
      return v(String(U)), U;
    });
  }, []), [N, w] = g({ w: 0, h: 0 }), [A, S] = g({ w: 0, h: 0 }), I = ge(null), L = ge(!1), V = ge({ x: 0, y: 0 }), G = ge({ x: 0, y: 0 });
  M(() => {
    t && (f(o), h(r), C(s), v(String(s)));
  }, [t, o, r, s]);
  const R = (T) => {
    const X = T.currentTarget;
    w({ w: X.naturalWidth, h: X.naturalHeight });
  };
  M(() => {
    if (!t) return;
    const T = new Image();
    T.onload = () => w({ w: T.naturalWidth, h: T.naturalHeight }), T.src = a;
  }, [t, a]);
  const j = l > 0 ? l : A.w > 0 ? A.w : 800, O = N.w > 0 ? pP(j, b, m, p, N.w, N.h, d) : { left: 0, top: 0, width: 100, height: 20 }, Q = Math.max(0, 100 - O.width), ee = Math.max(0, 100 - O.height), te = J((T) => {
    L.current = !0, V.current = { x: T.clientX, y: T.clientY }, G.current = { x: m, y: p }, T.target.setPointerCapture(T.pointerId);
  }, [m, p]), k = J((T) => {
    if (!L.current || !I.current) return;
    const X = I.current.getBoundingClientRect(), U = T.clientX - V.current.x, E = T.clientY - V.current.y, H = Math.max(1, Q / 100 * X.width), P = Math.max(1, ee / 100 * X.height), B = U / H * 100, W = E / P * 100;
    f(Math.round(Math.max(0, Math.min(100, G.current.x + B)))), h(Math.round(Math.max(0, Math.min(100, G.current.y + W))));
  }, [Q, ee]), _ = J(() => {
    L.current = !1;
  }, []), q = () => {
    c(m, p, b), n(!1);
  }, $ = () => {
    f(50), h(50), x(100);
  };
  return M(() => {
    if (!t || !I.current) return;
    const T = new ResizeObserver((X) => {
      const U = X[0];
      U && S({ w: U.contentRect.width, h: U.contentRect.height });
    });
    return T.observe(I.current), () => T.disconnect();
  }, [t]), /* @__PURE__ */ e(Wn, { open: t, onOpenChange: n, children: /* @__PURE__ */ i(Nn, { className: "max-w-5xl max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ i(wn, { children: [
      /* @__PURE__ */ e(Cn, { children: u("bannerPosition.title") }),
      /* @__PURE__ */ e(Ao, { children: u("bannerPosition.description") })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 min-h-0 flex items-center justify-center", children: /* @__PURE__ */ i(
      "div",
      {
        ref: I,
        className: "relative select-none cursor-grab active:cursor-grabbing overflow-hidden rounded-md max-h-full",
        onPointerDown: te,
        onPointerMove: k,
        onPointerUp: _,
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: a,
              alt: "Banner source",
              className: "block pointer-events-none max-w-full max-h-[60vh] w-auto h-auto",
              onLoad: R,
              draggable: !1
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "absolute rounded-sm pointer-events-none",
              style: {
                top: `${O.top}%`,
                left: `${O.left}%`,
                width: `${O.width}%`,
                height: `${O.height}%`,
                boxShadow: "0 0 0 9999px rgba(0,0,0,0.6)",
                border: "2px dashed rgba(255,255,255,0.9)",
                outline: "2px solid rgba(59,130,246,0.7)",
                outlineOffset: "-2px"
              }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: u("bannerPosition.zoom") }),
        /* @__PURE__ */ e(
          z,
          {
            variant: "outline",
            size: "icon",
            type: "button",
            onClick: () => x((T) => Math.max(100, T - 10)),
            disabled: b <= 100,
            children: /* @__PURE__ */ e(so, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ i("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              inputMode: "decimal",
              value: y,
              onChange: (T) => v(T.target.value),
              onBlur: () => {
                const T = parseFloat(y);
                if (isNaN(T))
                  v(String(b));
                else {
                  const X = Math.max(100, Math.min(500, Math.round(T * 10) / 10));
                  x(X), v(String(X));
                }
              },
              onKeyDown: (T) => {
                T.key === "Enter" && T.target.blur();
              },
              className: "w-16 text-center text-sm text-muted-foreground bg-transparent border border-input rounded-md h-8 px-1"
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground ml-1", children: "%" })
        ] }),
        /* @__PURE__ */ e(
          z,
          {
            variant: "outline",
            size: "icon",
            type: "button",
            onClick: () => x((T) => Math.min(500, T + 10)),
            disabled: b >= 500,
            children: /* @__PURE__ */ e(jn, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ i(z, { variant: "ghost", type: "button", onClick: $, children: [
        /* @__PURE__ */ e(ho, { className: "h-4 w-4 mr-2" }),
        u("actions.reset")
      ] })
    ] }),
    /* @__PURE__ */ i(Un, { children: [
      /* @__PURE__ */ e(z, { variant: "outline", onClick: () => n(!1), children: u("actions.cancel") }),
      /* @__PURE__ */ e(z, { onClick: q, children: u("actions.apply") })
    ] })
  ] }) });
}
const dn = qe.Root, un = qe.Value, Gt = ie.forwardRef(({ className: t, children: n, ...a }, o) => /* @__PURE__ */ i(qe.Trigger, { ref: o, className: D("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-popover px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:cursor-pointer", t), ...a, children: [
  n,
  /* @__PURE__ */ e(qe.Icon, { asChild: !0, children: /* @__PURE__ */ e(Ut, { className: "h-4 w-4 opacity-50" }) })
] }));
Gt.displayName = qe.Trigger.displayName;
const ms = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(qe.ScrollUpButton, { ref: a, className: D("flex cursor-default items-center justify-center py-1", t), ...n, children: /* @__PURE__ */ e(Hi, { className: "h-4 w-4" }) }));
ms.displayName = qe.ScrollUpButton.displayName;
const ps = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(qe.ScrollDownButton, { ref: a, className: D("flex cursor-default items-center justify-center py-1", t), ...n, children: /* @__PURE__ */ e(Vi, { className: "h-4 w-4" }) }));
ps.displayName = qe.ScrollDownButton.displayName;
const Wt = ie.forwardRef(({ className: t, children: n, position: a = "popper", ...o }, r) => {
  const s = mn();
  return /* @__PURE__ */ e(qe.Portal, { container: s, children: /* @__PURE__ */ i(qe.Content, { ref: r, className: D("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t), position: a, ...o, children: [
    /* @__PURE__ */ e(ms, {}),
    /* @__PURE__ */ e(qe.Viewport, { className: D("p-1", a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: n }),
    /* @__PURE__ */ e(ps, {})
  ] }) });
});
Wt.displayName = qe.Content.displayName;
const gP = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(qe.Label, { ref: a, className: D("px-2 py-1.5 text-sm font-semibold", t), ...n }));
gP.displayName = qe.Label.displayName;
const It = ie.forwardRef(({ className: t, children: n, ...a }, o) => /* @__PURE__ */ i(qe.Item, { ref: o, className: D("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground", t), ...a, children: [
  /* @__PURE__ */ e("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(qe.ItemIndicator, { children: /* @__PURE__ */ e(Me, { className: "h-4 w-4" }) }) }),
  /* @__PURE__ */ e(qe.ItemText, { className: "truncate", children: n })
] }));
It.displayName = qe.Item.displayName;
const fP = ie.forwardRef(({ className: t, ...n }, a) => /* @__PURE__ */ e(qe.Separator, { ref: a, className: D("-mx-1 my-1 h-px bg-muted", t), ...n }));
fP.displayName = qe.Separator.displayName;
const ea = { sm: 2, md: 3, lg: 4, xl: 6 }, bP = 12;
function vP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), { client: r } = de(), s = Ie(), [l, d] = g(t?.DASHBOARD_TITLE ?? ""), [c, u] = g(t?.DASHBOARD_DESCRIPTION ?? ""), [m, f] = g(kr(t)), p = Co(t), [h, b] = g(t?.DASHBOARD_BACKGROUND ?? ""), [C, y] = g(""), [v, x] = g(p.positionX), [N, w] = g(p.positionY), [A, S] = g(p.zoom), [I, L] = g(p.renditionSize), [V, G] = g(p.bannerMaxHeight), [R, j] = g(p.bannerMinHeight), [O, Q] = g({
    sm: Number(t?.DASHBOARD_GRID_COLS_SM) || ea.sm,
    md: Number(t?.DASHBOARD_GRID_COLS_MD) || ea.md,
    lg: Number(t?.DASHBOARD_GRID_COLS_LG) || ea.lg,
    xl: Number(t?.DASHBOARD_GRID_COLS_XL) || ea.xl
  }), [ee, te] = g(
    Number(t?.DASHBOARD_ITEMS_PER_PAGE) || bP
  ), [k, _] = g(t?.DASHBOARD_AGENTIC_SEARCH_INTERACTION ?? ""), [q, $] = g([]), [T, X] = g(!1), U = m === "imageGrid", [E, H] = g(!1), [P, B] = g(!1), [W, le] = g(0), [me, ze] = g(!1), [Pe, Ue] = g(!1), re = ge(null), Ne = ge(null), we = Po("/ecm-background.png");
  M(() => {
    r && h ? (Ue(!0), Gn(r, h, y, () => {
    }, s, 2048)) : (y(""), Ue(!1));
  }, [r, h]), M(() => {
    if (!C) return;
    const Y = new Image();
    return Y.onload = () => Ue(!1), Y.onerror = () => Ue(!1), Y.src = C, () => {
      Y.onload = null, Y.onerror = null;
    };
  }, [C]), M(() => {
    if (!Ne.current) return;
    const Y = new ResizeObserver((F) => {
      const ue = F[0];
      ue && le(ue.contentRect.width);
    });
    return Y.observe(Ne.current), () => Y.disconnect();
  }, []), M(() => {
    if (!r) return;
    let Y = !1;
    return X(!0), r.interactions.list({ query: { status: ia.published, tags: ["agent"] } }).then((F) => {
      if (Y) return;
      const ue = F.filter((he) => !he.tags.includes("default")).map((he) => ({ id: he.id, name: he.name, version: he.version }));
      $(ue);
    }).catch((F) => {
      Y || (console.error("Failed to fetch agent interactions:", F), $([]));
    }).finally(() => {
      Y || X(!1);
    }), () => {
      Y = !0;
    };
  }, [r]);
  const Le = (Y) => {
    Y.length > 0 && b(Y[0].id);
  }, nt = async (Y) => {
    const F = Y.target.files?.[0];
    if (Y.target.value = "", !F || !r) return;
    const ue = 20 * 1024 * 1024;
    if (!F.type.startsWith("image/") || F.size > ue) {
      s?.({
        status: "error",
        title: o("settings:dashboard.invalidImage")
      });
      return;
    }
    ze(!0);
    try {
      const he = await r.objects.create({ content: F });
      b(he.id);
    } catch (he) {
      console.error("Failed to upload background image:", he), s?.({
        status: "error",
        title: o("settings:dashboard.uploadFailed")
      });
    } finally {
      ze(!1);
    }
  }, se = () => {
    b(""), y("");
  }, Z = (Y, F, ue) => {
    x(Y), w(F), S(ue);
  }, oe = C || we;
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:dashboard.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:dashboard.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "dashboard-title", children: o("settings:dashboard.titleLabel") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "dashboard-title",
            placeholder: o("settings:dashboard.titlePlaceholder"),
            value: l,
            onChange: (Y) => d(Y.target.value)
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.titleHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "dashboard-description", children: o("settings:dashboard.descriptionLabel") }),
        /* @__PURE__ */ e(
          pt,
          {
            id: "dashboard-description",
            placeholder: o("settings:dashboard.descriptionPlaceholder"),
            value: c,
            onChange: (Y) => u(Y.target.value),
            rows: 2
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.descriptionHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:dashboard.backgroundImage") }),
        /* @__PURE__ */ i(
          "div",
          {
            ref: Ne,
            className: "relative overflow-hidden rounded-sm",
            style: { height: `${V}px` },
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: "w-full h-full",
                  role: "img",
                  "aria-label": o("settings:dashboard.backgroundPreviewAlt"),
                  style: {
                    backgroundImage: `url(${oe})`,
                    backgroundSize: `${A}%`,
                    backgroundPosition: `${v}% ${N}%`,
                    backgroundRepeat: "no-repeat"
                  }
                }
              ),
              /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/30 pointer-events-none" }),
              (me || Pe) && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none", children: /* @__PURE__ */ e(fe, { className: "h-8 w-8 animate-spin text-white" }) }),
              /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center px-6 pointer-events-none", children: /* @__PURE__ */ e("div", { className: "w-full max-w-md", children: /* @__PURE__ */ i("div", { className: "relative", children: [
                /* @__PURE__ */ e(vt, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ e("div", { className: "pl-12 pr-4 h-12 bg-card rounded-md flex items-center text-muted-foreground text-lg shadow-lg", children: "Search for documents or assets..." })
              ] }) }) })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: re,
              type: "file",
              accept: "image/*",
              onChange: nt,
              className: "hidden"
            }
          ),
          /* @__PURE__ */ i(z, { variant: "outline", type: "button", disabled: me, onClick: () => re.current?.click(), children: [
            me ? /* @__PURE__ */ e(fe, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ e(bn, { className: "h-4 w-4 mr-2" }),
            o("settings:dashboard.uploadImage")
          ] }),
          /* @__PURE__ */ e(
            Ia,
            {
              onSelection: Le,
              selectionMode: "single",
              disabled: me,
              children: /* @__PURE__ */ i(z, { variant: "outline", type: "button", disabled: me, children: [
                /* @__PURE__ */ e(Ki, { className: "h-4 w-4 mr-2" }),
                o(h ? "settings:dashboard.changeImage" : "settings:dashboard.selectImage")
              ] })
            }
          ),
          /* @__PURE__ */ i(
            z,
            {
              variant: "outline",
              type: "button",
              disabled: me,
              onClick: () => B(!0),
              children: [
                /* @__PURE__ */ e(Al, { className: "h-4 w-4 mr-2" }),
                o("settings:dashboard.adjustPosition")
              ]
            }
          ),
          h && /* @__PURE__ */ i(z, { variant: "outline", type: "button", disabled: me, onClick: se, children: [
            /* @__PURE__ */ e(De, { className: "h-4 w-4 mr-2" }),
            o("common:actions.remove")
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.backgroundHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "banner-rendition-size", children: o("settings:dashboard.bannerRenditionSize") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "banner-rendition-size",
            type: "number",
            min: 256,
            max: 4096,
            step: 256,
            value: I,
            onChange: (Y) => L(Number(Y.target.value))
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.bannerRenditionSizeHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "banner-max-height", children: o("settings:dashboard.bannerMaxHeight") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "banner-max-height",
              type: "number",
              min: 64,
              max: 400,
              step: 8,
              value: V,
              onChange: (Y) => G(Number(Y.target.value))
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.bannerMaxHeightHelp") })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "banner-min-height", children: o("settings:dashboard.bannerMinHeight") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "banner-min-height",
              type: "number",
              min: 32,
              max: 400,
              step: 8,
              value: R,
              onChange: (Y) => j(Number(Y.target.value))
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.bannerMinHeightHelp") })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 border-t pt-6", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "dashboard-display-mode", children: o("settings:dashboard.displayMode") }),
        /* @__PURE__ */ i(dn, { value: m, onValueChange: (Y) => f(Y), children: [
          /* @__PURE__ */ e(Gt, { id: "dashboard-display-mode", className: "w-[280px]", children: /* @__PURE__ */ e(un, {}) }),
          /* @__PURE__ */ e(Wt, { children: cD.map((Y) => /* @__PURE__ */ e(It, { value: Y, children: o(`settings:dashboard.displayModeOptions.${Y}`) }, Y)) })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o(`settings:dashboard.displayModeHelp.${m}`) })
      ] }),
      U && /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 border-t pt-6", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e(ne, { className: "text-base font-semibold", children: o("settings:dashboard.imageGridLayout") }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.imageGridLayoutHelp") })
        ] }),
        /* @__PURE__ */ i("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ e(ne, { htmlFor: "grid-cols-sm", children: o("common:gridCols.sm") }),
            /* @__PURE__ */ e(
              be,
              {
                id: "grid-cols-sm",
                type: "number",
                min: 1,
                max: 12,
                value: O.sm,
                onChange: (Y) => Q((F) => ({ ...F, sm: Number(Y.target.value) })),
                onBlur: (Y) => Q((F) => ({ ...F, sm: Math.max(1, Math.min(12, Number(Y.target.value) || 1)) }))
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("common:gridCols.smHint") })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ e(ne, { htmlFor: "grid-cols-md", children: o("common:gridCols.md") }),
            /* @__PURE__ */ e(
              be,
              {
                id: "grid-cols-md",
                type: "number",
                min: 1,
                max: 12,
                value: O.md,
                onChange: (Y) => Q((F) => ({ ...F, md: Number(Y.target.value) })),
                onBlur: (Y) => Q((F) => ({ ...F, md: Math.max(1, Math.min(12, Number(Y.target.value) || 1)) }))
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("common:gridCols.mdHint") })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ e(ne, { htmlFor: "grid-cols-lg", children: o("common:gridCols.lg") }),
            /* @__PURE__ */ e(
              be,
              {
                id: "grid-cols-lg",
                type: "number",
                min: 1,
                max: 12,
                value: O.lg,
                onChange: (Y) => Q((F) => ({ ...F, lg: Number(Y.target.value) })),
                onBlur: (Y) => Q((F) => ({ ...F, lg: Math.max(1, Math.min(12, Number(Y.target.value) || 1)) }))
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("common:gridCols.lgHint") })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ e(ne, { htmlFor: "grid-cols-xl", children: o("common:gridCols.xl") }),
            /* @__PURE__ */ e(
              be,
              {
                id: "grid-cols-xl",
                type: "number",
                min: 1,
                max: 12,
                value: O.xl,
                onChange: (Y) => Q((F) => ({ ...F, xl: Number(Y.target.value) })),
                onBlur: (Y) => Q((F) => ({ ...F, xl: Math.max(1, Math.min(12, Number(Y.target.value) || 1)) }))
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("common:gridCols.xlHint") })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "items-per-page", children: o("settings:dashboard.itemsPerPage") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "items-per-page",
              type: "number",
              min: 4,
              max: 100,
              step: 1,
              value: ee,
              onChange: (Y) => te(Number(Y.target.value)),
              onBlur: (Y) => te(Math.max(4, Math.min(100, Number(Y.target.value) || 4)))
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:dashboard.itemsPerPageHelp") })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              onClick: () => H((Y) => !Y),
              children: [
                E ? /* @__PURE__ */ e(ra, { className: "h-4 w-4" }) : /* @__PURE__ */ e(rn, { className: "h-4 w-4" }),
                /* @__PURE__ */ e("span", { children: o(E ? "common:actions.hidePreview" : "common:actions.showPreview") })
              ]
            }
          ),
          E && /* @__PURE__ */ e("div", { className: "border rounded-md p-4 bg-muted/30", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ["xl", "lg", "md", "sm"].map((Y) => /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: Y }),
            /* @__PURE__ */ e(
              "div",
              {
                className: "grid gap-1.5",
                style: { gridTemplateColumns: `repeat(${O[Y]}, 1fr)` },
                children: Array.from({ length: O[Y] }).map((F, ue) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: "aspect-square rounded-sm bg-primary/15 border border-primary/25"
                  },
                  ue
                ))
              }
            )
          ] }, Y)) }) })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 border-t pt-6", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "agentic-search-interaction", children: o("settings:dashboard.agenticSearch.label") }),
        /* @__PURE__ */ i(
          dn,
          {
            value: k || "none",
            onValueChange: (Y) => _(Y === "none" ? "" : Y),
            children: [
              /* @__PURE__ */ e(Gt, { id: "agentic-search-interaction", className: "w-[320px]", children: /* @__PURE__ */ e(un, { placeholder: o("settings:dashboard.agenticSearch.placeholder") }) }),
              /* @__PURE__ */ i(Wt, { children: [
                /* @__PURE__ */ e(It, { value: "none", children: o("settings:dashboard.agenticSearch.none") }),
                q.map((Y) => /* @__PURE__ */ i(It, { value: Y.id, children: [
                  Y.name,
                  " (v",
                  Y.version,
                  ")"
                ] }, Y.id))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o(T ? "common:states.loading" : "settings:dashboard.agenticSearch.help") })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ title: l, description: c, displayMode: m, backgroundId: h, backgroundPositionX: v, backgroundPositionY: N, backgroundZoom: A, bannerRenditionSize: I, bannerMaxHeight: V, bannerMinHeight: R, gridCols: O, itemsPerPage: ee, agenticSearchInteraction: k }), disabled: a || me, children: o(a ? "common:actions.saving" : "common:actions.save") }) }),
    /* @__PURE__ */ e(
      hP,
      {
        open: P,
        onOpenChange: B,
        imageUrl: oe,
        positionX: v,
        positionY: N,
        zoom: A,
        dashboardWidth: W,
        bannerHeight: V,
        onApply: Z
      }
    )
  ] });
}
function xP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K("settings"), r = Array.isArray(t?.ADVANCED_FACETS) ? t.ADVANCED_FACETS : Ro;
  return /* @__PURE__ */ e(
    ds,
    {
      title: o("facets.title"),
      description: o("facets.description"),
      initialFacets: r,
      onSave: (s) => n({ advancedFacets: s }),
      loading: a
    }
  );
}
const Pi = "Favorites";
function yP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), { client: r } = de(), s = Ie(), [l, d] = g(
    typeof t?.FAVORITES_COLLECTION_TYPE == "string" ? t.FAVORITES_COLLECTION_TYPE : ""
  ), [c, u] = g(0), [m, f] = g(!1), p = async () => {
    if (!(!r || m)) {
      f(!0);
      try {
        let h;
        try {
          h = (await r.store.types.getTypeByName(Pi)).id;
        } catch {
          h = (await r.store.types.create({
            name: Pi,
            description: o("settings:favorites.typeDescription")
          })).id;
        }
        d(h), u((b) => b + 1), n({ favoritesCollectionType: h }), s({
          status: "success",
          title: o("settings:favorites.typeLinked"),
          duration: 3e3
        });
      } catch (h) {
        s({
          status: "error",
          title: o("settings:favorites.typeError"),
          description: h?.message,
          duration: 3e3
        });
      } finally {
        f(!1);
      }
    }
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:favorites.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:favorites.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:favorites.quickSetup") }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i(z, { onClick: p, disabled: m || a, className: "gap-2", children: [
          m ? /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ e(Dl, { className: "h-4 w-4" }),
          o("settings:favorites.createAndLink")
        ] }) }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:favorites.createAndLinkHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:favorites.collectionType") }),
        /* @__PURE__ */ e(
          Aa,
          {
            value: l,
            onChange: d,
            placeholder: o("settings:favorites.collectionTypePlaceholder"),
            refreshKey: c,
            allowEmpty: !0,
            emptyLabel: o("settings:favorites.noType")
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:favorites.collectionTypeHelp") })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ favoritesCollectionType: l }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function NP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g(
    t?.DEFAULT_LANGUAGE ?? "en"
  );
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:language.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:language.description") })
    ] }),
    /* @__PURE__ */ e(Ce, { className: "flex flex-col gap-6", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(ne, { children: o("settings:language.defaultLanguage") }),
      /* @__PURE__ */ i(dn, { value: r, onValueChange: s, children: [
        /* @__PURE__ */ e(Gt, { className: "w-[280px]", children: /* @__PURE__ */ e(un, {}) }),
        /* @__PURE__ */ e(Wt, { children: Object.entries(Pn).map(([l, d]) => /* @__PURE__ */ e(It, { value: l, children: d }, l)) })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("settings:language.defaultLanguageHelp") })
    ] }) }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(
      z,
      {
        onClick: () => n({ defaultLanguage: r }),
        disabled: a,
        children: o(a ? "common:actions.saving" : "common:actions.save")
      }
    ) })
  ] });
}
function wP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g(t?.RENDITION_THUMBNAIL_SIZE ?? 512), [l, d] = g(t?.RENDITION_MODAL_PREVIEW_SIZE ?? 1024), c = (u, m) => {
    const f = m === "" ? 0 : parseInt(m, 10);
    !isNaN(f) && f >= 0 && u(f);
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:rendition.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:rendition.description") })
    ] }),
    /* @__PURE__ */ e(Ce, { className: "flex flex-col gap-6", children: /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "rendition-thumbnail", children: o("settings:rendition.thumbnailGrid") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "rendition-thumbnail",
            type: "number",
            min: 64,
            max: 2048,
            value: r,
            onChange: (u) => c(s, u.target.value)
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("settings:rendition.thumbnailDefault") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { htmlFor: "rendition-modal", children: o("settings:rendition.modalPreview") }),
        /* @__PURE__ */ e(
          be,
          {
            id: "rendition-modal",
            type: "number",
            min: 64,
            max: 2048,
            value: l,
            onChange: (u) => c(d, u.target.value)
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: o("settings:rendition.modalDefault") })
      ] })
    ] }) }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ thumbnailSize: r, modalPreviewSize: l }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function CP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g(t?.ENABLE ?? !1), [l, d] = g({
    text: t?.TEXT ?? 33,
    images: t?.IMAGES ?? 33,
    properties: t?.PROPERTIES ?? 33
  }), c = (u, m) => {
    const f = m === "" ? 0 : parseInt(m, 10);
    isNaN(f) || d((p) => ({ ...p, [u]: f }));
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:searchWeights.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:searchWeights.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "weight-enable", children: o("settings:searchWeights.enableWeightedSearch") }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:searchWeights.enableWeightedSearchHelp") })
        ] }),
        /* @__PURE__ */ e(Ta, { id: "weight-enable", checked: r, onCheckedChange: s })
      ] }),
      /* @__PURE__ */ i("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "weight-text", children: o("settings:searchWeights.text") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "weight-text",
              type: "number",
              min: 0,
              value: l.text,
              disabled: !r,
              onChange: (u) => c("text", u.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "weight-images", children: o("settings:searchWeights.images") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "weight-images",
              type: "number",
              min: 0,
              value: l.images,
              disabled: !r,
              onChange: (u) => c("images", u.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { htmlFor: "weight-properties", children: o("settings:searchWeights.properties") }),
          /* @__PURE__ */ e(
            be,
            {
              id: "weight-properties",
              type: "number",
              min: 0,
              value: l.properties,
              disabled: !r,
              onChange: (u) => c("properties", u.target.value)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ enable: r, ...l }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function SP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "navigation", "common"]), r = ce(() => jc([yr, Nr]), []), [s, l] = g(() => new Set(yo(t))), d = (c, u) => {
    l((m) => {
      const f = new Set(m);
      return u ? f.delete(c) : f.add(c), f;
    });
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:sidebar.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:sidebar.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-1", children: [
      r.map((c, u) => {
        const m = c.depth > 0, f = !m && u > 0, p = c.parentUrl ? s.has(c.parentUrl) : !1, h = c.locked || !s.has(c.url) && !p, b = c.locked || p, C = o(c.titleKey, { ns: "navigation" });
        return /* @__PURE__ */ i(
          "div",
          {
            className: D(
              "flex items-center gap-2 rounded-md py-2 pr-2 hover:bg-muted/50",
              m ? "ml-3 border-l border-border/70 pl-1" : "pl-2",
              f && "mt-1 border-t border-border/60 pt-3"
            ),
            children: [
              /* @__PURE__ */ e(
                z,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "size-8 shrink-0",
                  disabled: b,
                  onClick: () => d(c.url, !h),
                  "aria-pressed": h,
                  "aria-label": h ? o("settings:sidebar.hideItem", { item: C }) : o("settings:sidebar.showItem", { item: C }),
                  title: h ? o("settings:sidebar.hideItem", { item: C }) : o("settings:sidebar.showItem", { item: C }),
                  children: h ? /* @__PURE__ */ e(rn, { className: "size-4 text-foreground" }) : /* @__PURE__ */ e(ra, { className: "size-4 text-muted-foreground" })
                }
              ),
              m && /* @__PURE__ */ e(Tl, { className: "size-4 shrink-0 text-muted-foreground/60", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                ne,
                {
                  className: D(
                    "cursor-pointer font-normal",
                    !m && "font-medium",
                    !h && "text-muted-foreground line-through"
                  ),
                  children: C
                }
              ),
              c.locked && /* @__PURE__ */ e(ve, { variant: "secondary", children: o("settings:sidebar.alwaysVisible") })
            ]
          },
          c.url
        );
      }),
      /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-muted-foreground", children: o("settings:sidebar.help") })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ hiddenItems: Array.from(s) }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
const AP = [
  { value: "none", label: "None" },
  { value: "date", label: "Date" },
  { value: "type", label: "Type" },
  { value: "user", label: "User" }
];
function DP({
  typeId: t,
  prop: n,
  index: a,
  showLabels: o,
  excludePaths: r,
  onRemove: s,
  onChange: l
}) {
  const { t: d } = K(["settings", "common"]), c = (u, m) => {
    l(a, "path", u), n.label?.trim() || l(a, "label", m);
  };
  return /* @__PURE__ */ i("div", { className: "grid grid-cols-[1fr_1fr_auto_auto] gap-2 items-end", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      o && /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground", children: d("common:properties.property") }),
      /* @__PURE__ */ e(
        Mo,
        {
          typeId: t,
          value: n.path,
          onChange: c,
          excludePaths: r
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      o && /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground", children: d("common:properties.label") }),
      /* @__PURE__ */ e(
        be,
        {
          placeholder: d("settings:properties.displayLabel"),
          value: n.label ?? "",
          onChange: (u) => l(a, "label", u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      o && /* @__PURE__ */ e(ne, { className: "text-xs text-muted-foreground", children: d("common:properties.modifier") }),
      /* @__PURE__ */ i(
        dn,
        {
          value: n.modifier ?? "none",
          onValueChange: (u) => l(a, "modifier", u),
          children: [
            /* @__PURE__ */ e(Gt, { className: "w-[100px]", children: /* @__PURE__ */ e(un, {}) }),
            /* @__PURE__ */ e(Wt, { children: AP.map((u) => /* @__PURE__ */ e(It, { value: u.value, children: u.label }, u.value)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => s(a), children: /* @__PURE__ */ e(ya, { className: "h-4 w-4 text-destructive" }) })
  ] });
}
function ki({ typeId: t, properties: n, onAdd: a, onRemove: o, onChange: r }) {
  const s = ce(() => n.map((l) => l.path), [n]);
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
    n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: 'No properties configured. Click "Add property" to start.' }),
    n.map((l, d) => /* @__PURE__ */ e(
      DP,
      {
        typeId: t,
        prop: l,
        index: d,
        showLabels: d === 0,
        excludePaths: s,
        onRemove: o,
        onChange: r
      },
      d
    )),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(TP, { typeId: t, excludePaths: s, onAdd: a }) })
  ] });
}
function TP({
  typeId: t,
  excludePaths: n,
  onAdd: a
}) {
  const { t: o } = K("settings");
  return /* @__PURE__ */ e(
    Mo,
    {
      typeId: t,
      value: "",
      onChange: (r, s) => a(r, s),
      excludePaths: n,
      placeholder: o("properties.addProperty")
    }
  );
}
function IP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), { client: r } = de(), { registry: s } = tt(), [l, d] = g([]), [c, u] = g(!0), [m, f] = g(!1), [p, h] = g(""), [b, C] = g(null), [y, v] = g(() => t?.BASIC_PROPERTIES && typeof t.BASIC_PROPERTIES == "object" ? structuredClone(t.BASIC_PROPERTIES) : {}), [x, N] = g(() => t?.ADVANCED_PROPERTIES && typeof t.ADVANCED_PROPERTIES == "object" ? structuredClone(t.ADVANCED_PROPERTIES) : {}), w = ce(() => {
    const j = /* @__PURE__ */ new Set();
    for (const [O, Q] of Object.entries(y))
      Q.length > 0 && j.add(O);
    for (const [O, Q] of Object.entries(x))
      Q.length > 0 && j.add(O);
    return j;
  }, [y, x]);
  M(() => {
    if (!r) return;
    (async () => {
      u(!0);
      try {
        const Q = (await r.types.list()).map((ee) => {
          const te = ee;
          return {
            id: te.id,
            name: s?.getTypeName(te.id) || te.name || te.id
          };
        });
        Q.sort((ee, te) => ee.name.localeCompare(te.name)), d(Q);
      } catch (O) {
        console.error("Failed to fetch types:", O), d([]);
      } finally {
        u(!1);
      }
    })();
  }, [r, s]);
  const A = ce(() => l.find((j) => j.id === b) ?? null, [l, b]), S = (j) => {
    C(j), f(!1), h(""), y[j] || v((O) => ({ ...O, [j]: [] })), x[j] || N((O) => ({ ...O, [j]: [] }));
  }, I = J((j, O, Q) => {
    if (!b) return;
    (j === "basic" ? v : N)((te) => ({
      ...te,
      [b]: [...te[b] ?? [], { path: O, label: Q }]
    }));
  }, [b]), L = J((j, O) => {
    if (!b) return;
    (j === "basic" ? v : N)((ee) => ({
      ...ee,
      [b]: ee[b].filter((te, k) => k !== O)
    }));
  }, [b]), V = J((j, O, Q, ee) => {
    if (!b) return;
    (j === "basic" ? v : N)((k) => ({
      ...k,
      [b]: k[b].map((_, q) => {
        if (q !== O) return _;
        if (Q === "modifier") {
          if (ee === "none") {
            const { modifier: $, ...T } = _;
            return T;
          }
          return { ..._, modifier: ee };
        }
        return { ..._, [Q]: ee };
      })
    }));
  }, [b]), G = (j) => {
    const O = {};
    for (const [Q, ee] of Object.entries(j)) {
      const te = ee.filter((k) => k.path.trim() !== "");
      te.length > 0 && (O[Q] = te.map((k) => {
        const _ = { path: k.path.trim() };
        return k.label?.trim() && (_.label = k.label.trim()), k.modifier && (_.modifier = k.modifier), _;
      }));
    }
    return O;
  }, R = () => {
    n({
      basicProperties: G(y),
      advancedProperties: G(x)
    });
  };
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:properties.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:properties.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:properties.documentType") }),
        c ? /* @__PURE__ */ e("div", { className: "flex h-9 w-full items-center justify-center rounded-md border border-input bg-popover px-3 py-2", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ i(gt, { open: m, onOpenChange: f, children: [
          /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(
            z,
            {
              variant: "outline",
              role: "combobox",
              "aria-expanded": m,
              className: "w-full justify-between font-normal bg-popover",
              children: [
                /* @__PURE__ */ e("span", { className: "truncate", children: A ? A.name : o("settings:properties.selectTypePlaceholder") }),
                /* @__PURE__ */ e(Ut, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(ut, { className: "p-0", align: "start", style: { width: "var(--radix-popover-trigger-width)" }, children: /* @__PURE__ */ i(Kt, { children: [
            /* @__PURE__ */ e(
              Yt,
              {
                placeholder: o("settings:properties.searchTypes"),
                value: p,
                onValueChange: h
              }
            ),
            /* @__PURE__ */ i(Xt, { children: [
              /* @__PURE__ */ e(Qt, { children: o("settings:properties.noTypeFound") }),
              /* @__PURE__ */ e(kt, { children: l.map((j) => /* @__PURE__ */ i(
                yt,
                {
                  value: j.name,
                  onSelect: () => S(j.id),
                  children: [
                    /* @__PURE__ */ e(
                      Me,
                      {
                        className: D(
                          "mr-2 h-4 w-4",
                          b === j.id ? "opacity-100" : "opacity-0"
                        )
                      }
                    ),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: j.name }),
                    w.has(j.id) && /* @__PURE__ */ e(Bo, { className: "ml-2 h-3.5 w-3.5 text-primary" })
                  ]
                },
                j.id
              )) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ i("p", { className: "text-sm text-muted-foreground", children: [
          o("settings:properties.selectTypeHelp"),
          " ",
          /* @__PURE__ */ e(Bo, { className: "inline h-3.5 w-3.5 text-primary" })
        ] })
      ] }),
      w.size > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-1.5", children: l.filter((j) => w.has(j.id)).map((j) => /* @__PURE__ */ e(
        ve,
        {
          variant: b === j.id ? "default" : "secondary",
          className: "cursor-pointer",
          onClick: () => S(j.id),
          children: j.name
        },
        j.id
      )) }),
      b && /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 rounded-lg border p-4", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e(ne, { className: "text-sm font-semibold", children: A?.name ?? b }),
          A && A.name !== b && /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: b })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: o("settings:properties.basicProperties") }),
          /* @__PURE__ */ e(
            ki,
            {
              typeId: b,
              properties: y[b] ?? [],
              onAdd: (j, O) => I("basic", j, O),
              onRemove: (j) => L("basic", j),
              onChange: (j, O, Q) => V("basic", j, O, Q)
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(ne, { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: o("settings:properties.advancedProperties") }),
          /* @__PURE__ */ e(
            ki,
            {
              typeId: b,
              properties: x[b] ?? [],
              onAdd: (j, O) => I("advanced", j, O),
              onRemove: (j) => L("advanced", j),
              onChange: (j, O, Q) => V("advanced", j, O, Q)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: R, disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
function ja({
  value: t,
  onChange: n,
  placeholder: a,
  disabled: o = !1
}) {
  const { t: r } = K("common"), s = a ?? r("inputs.selectTypes"), { client: l } = de(), { registry: d } = tt(), [c, u] = g([]), [m, f] = g(!0), [p, h] = g(!1), [b, C] = g("");
  M(() => {
    if (!l) return;
    (async () => {
      f(!0);
      try {
        const A = (await l.types.list()).map((S) => {
          const I = S;
          return {
            id: I.id,
            name: d?.getTypeName(I.id) || I.name || I.id
          };
        });
        A.sort((S, I) => S.name.localeCompare(I.name)), u(A);
      } catch (w) {
        console.error("Failed to fetch types:", w), u([]);
      } finally {
        f(!1);
      }
    })();
  }, [l, d]);
  const y = ce(() => c.filter((N) => t.includes(N.id)), [c, t]), v = (N) => {
    t.includes(N) ? n(t.filter((w) => w !== N)) : n([...t, N]);
  }, x = (N) => {
    n(t.filter((w) => w !== N));
  };
  return m ? /* @__PURE__ */ e("div", { className: "flex h-9 w-full items-center justify-center rounded-md border border-input bg-popover px-3 py-2", children: /* @__PURE__ */ e(fe, { className: "h-4 w-4 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ i(gt, { open: p, onOpenChange: h, children: [
      /* @__PURE__ */ e(ft, { asChild: !0, children: /* @__PURE__ */ i(
        z,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": p,
          className: "w-full justify-between font-normal bg-popover",
          disabled: o,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: y.length > 0 ? r("inputs.typesSelected", { count: y.length }) : s }),
            /* @__PURE__ */ e(Ut, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(ut, { className: "p-0", align: "start", style: { width: "var(--radix-popover-trigger-width)" }, children: /* @__PURE__ */ i(Kt, { children: [
        /* @__PURE__ */ e(
          Yt,
          {
            placeholder: r("inputs.searchTypes"),
            value: b,
            onValueChange: C
          }
        ),
        /* @__PURE__ */ i(Xt, { children: [
          /* @__PURE__ */ e(Qt, { children: r("inputs.noTypeFound") }),
          /* @__PURE__ */ e(kt, { children: c.map((N) => /* @__PURE__ */ i(
            yt,
            {
              value: N.name,
              onSelect: () => v(N.id),
              children: [
                /* @__PURE__ */ e(
                  Me,
                  {
                    className: D(
                      "mr-2 h-4 w-4",
                      t.includes(N.id) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                N.name
              ]
            },
            N.id
          )) })
        ] })
      ] }) })
    ] }),
    y.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-1", children: y.map((N) => /* @__PURE__ */ i(ve, { variant: "secondary", className: "gap-1", children: [
      N.name,
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ml-0.5 rounded-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary-foreground/20",
          onClick: () => x(N.id),
          disabled: o,
          children: /* @__PURE__ */ e(De, { className: "h-3 w-3" })
        }
      )
    ] }, N.id)) })
  ] });
}
function PP({ settings: t, onSave: n, loading: a }) {
  const { t: o } = K(["settings", "common"]), [r, s] = g(
    Array.isArray(t?.ECM_TYPES_WHITELIST) ? t.ECM_TYPES_WHITELIST : []
  ), [l, d] = g(
    Array.isArray(t?.DASHBOARD_TYPES_WHITELIST) ? t.DASHBOARD_TYPES_WHITELIST : []
  ), [c, u] = g(
    Array.isArray(t?.COLLECTION_TYPES_WHITELIST) ? t.COLLECTION_TYPES_WHITELIST : []
  );
  return /* @__PURE__ */ i(ye, { children: [
    /* @__PURE__ */ i(Te, { children: [
      /* @__PURE__ */ e(ke, { children: o("settings:whitelist.title") }),
      /* @__PURE__ */ e(Ye, { children: o("settings:whitelist.description") })
    ] }),
    /* @__PURE__ */ i(Ce, { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:whitelist.dashboardWhitelist") }),
        /* @__PURE__ */ e(
          ja,
          {
            value: l,
            onChange: d,
            placeholder: o("settings:whitelist.selectTypesPlaceholder")
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:whitelist.dashboardWhitelistHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:whitelist.libraryWhitelist") }),
        /* @__PURE__ */ e(
          ja,
          {
            value: r,
            onChange: s,
            placeholder: o("settings:whitelist.selectTypesPlaceholder")
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:whitelist.libraryWhitelistHelp") })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ e(ne, { children: o("settings:whitelist.collectionWhitelist") }),
        /* @__PURE__ */ e(
          ja,
          {
            value: c,
            onChange: u,
            placeholder: o("settings:whitelist.selectTypesPlaceholder")
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: o("settings:whitelist.collectionWhitelistHelp") })
      ] })
    ] }),
    /* @__PURE__ */ e(it, { className: "justify-end", children: /* @__PURE__ */ e(z, { onClick: () => n({ ecmWhitelist: r, dashboardWhitelist: l, collectionWhitelist: c }), disabled: a, children: o(a ? "common:actions.saving" : "common:actions.save") }) })
  ] });
}
const kP = () => {
  const { client: t } = de(), n = Fe(), a = Ie(), { t: o } = K(), [r, s] = g(!1);
  return { updateSettings: async (d, c) => {
    if (!(!t || !n)) {
      s(!0);
      try {
        const u = n.settings || {};
        await t.apps.updateInstallationSettings({
          app_id: n.id,
          settings: { ...u, ...d }
        }), c?.skipRefresh || (a?.({
          status: "success",
          title: o("settingsToast.successTitle"),
          description: o("settingsToast.successDescription")
        }), setTimeout(() => window.location.reload(), 1e3));
      } catch (u) {
        console.error("Failed to update settings:", u), a?.({
          status: "error",
          title: o("settingsToast.errorTitle"),
          description: o("settingsToast.errorDescription")
        });
      } finally {
        s(!1);
      }
    }
  }, loading: r };
};
function _P() {
  const { user: t } = de(), n = et(), { t: a } = K("settings"), o = qn(t), r = Fe(), s = r?.settings || {}, { updateSettings: l, loading: d } = kP(), c = (S) => {
    l({
      APPLICATION_NAME: S.applicationName,
      APPLICATION_BREADCRUMB: S.applicationBreadcrumb,
      APPLICATION_ICON: S.applicationIcon,
      APPLICATION_ICON_BACKGROUND: S.applicationIconBackground,
      APPLICATION_ICON_IMAGE: S.applicationIconImage
    });
  }, u = (S) => {
    l({
      DASHBOARD_TITLE: S.title,
      DASHBOARD_DESCRIPTION: S.description,
      DASHBOARD_DISPLAY_MODE: S.displayMode,
      DASHBOARD_BACKGROUND: S.backgroundId,
      DASHBOARD_BACKGROUND_POSITION_X: S.backgroundPositionX,
      DASHBOARD_BACKGROUND_POSITION_Y: S.backgroundPositionY,
      DASHBOARD_BACKGROUND_ZOOM: S.backgroundZoom,
      DASHBOARD_BANNER_RENDITION_SIZE: S.bannerRenditionSize,
      DASHBOARD_BANNER_MAX_HEIGHT: S.bannerMaxHeight,
      DASHBOARD_BANNER_MIN_HEIGHT: S.bannerMinHeight,
      DASHBOARD_GRID_COLS_SM: S.gridCols.sm,
      DASHBOARD_GRID_COLS_MD: S.gridCols.md,
      DASHBOARD_GRID_COLS_LG: S.gridCols.lg,
      DASHBOARD_GRID_COLS_XL: S.gridCols.xl,
      DASHBOARD_ITEMS_PER_PAGE: S.itemsPerPage,
      DASHBOARD_AGENTIC_SEARCH_INTERACTION: S.agenticSearchInteraction
    });
  }, m = (S) => {
    l({
      LIBRARY_GRID_COLS_SM: S.gridCols.sm,
      LIBRARY_GRID_COLS_MD: S.gridCols.md,
      LIBRARY_GRID_COLS_LG: S.gridCols.lg,
      LIBRARY_GRID_COLS_XL: S.gridCols.xl,
      LIBRARY_ADVANCED_GRID_COLS_SM: S.advancedGridCols.sm,
      LIBRARY_ADVANCED_GRID_COLS_MD: S.advancedGridCols.md,
      LIBRARY_ADVANCED_GRID_COLS_LG: S.advancedGridCols.lg,
      LIBRARY_ADVANCED_GRID_COLS_XL: S.advancedGridCols.xl
    });
  }, f = (S) => {
    l({
      ECM_TYPES_WHITELIST: S.ecmWhitelist,
      DASHBOARD_TYPES_WHITELIST: S.dashboardWhitelist,
      COLLECTION_TYPES_WHITELIST: S.collectionWhitelist
    });
  }, p = (S) => {
    l({
      SIDEBAR_HIDDEN_ITEMS: S.hiddenItems
    });
  }, h = (S) => {
    l({
      FAVORITES_COLLECTION_TYPE: S.favoritesCollectionType
    });
  }, b = (S) => {
    l({
      AGENT_INTERACTIONS_EXCLUDED_LIST: S.excludedAgents
    });
  }, C = (S) => {
    l({
      BASIC_PROPERTIES: S.basicProperties,
      ADVANCED_PROPERTIES: S.advancedProperties
    });
  }, y = (S) => {
    l({
      WEIGHTS: {
        ENABLE: S.enable,
        TEXT: S.text,
        IMAGES: S.images,
        PROPERTIES: S.properties
      }
    });
  }, v = (S) => {
    l({
      RENDITION_THUMBNAIL_SIZE: S.thumbnailSize,
      RENDITION_MODAL_PREVIEW_SIZE: S.modalPreviewSize
    });
  }, x = (S) => {
    l({
      DEFAULT_LANGUAGE: S.defaultLanguage
    });
  }, N = (S) => {
    l({
      DEFAULT_COLOR_SCHEME: S.defaultColorScheme
    });
  }, w = (S) => {
    l({
      ADVANCED_FACETS: S.advancedFacets
    });
  }, A = (S) => {
    l({
      BASIC_FACETS: S.basicFacets
    });
  };
  return M(() => {
    o || n("/", { replace: !0 });
  }, [o, n]), o ? /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ i(Sn, { defaultValue: "application", className: "flex flex-col w-full h-full min-w-0 min-h-0 p-2", children: [
    /* @__PURE__ */ e("div", { className: "shrink-0 overflow-x-auto max-w-full", children: /* @__PURE__ */ i(An, { className: "w-max", children: [
      /* @__PURE__ */ e(Re, { value: "application", children: a("tabs.application") }),
      /* @__PURE__ */ e(Re, { value: "dashboard", children: a("tabs.dashboard") }),
      /* @__PURE__ */ e(Re, { value: "library", children: a("tabs.library") }),
      /* @__PURE__ */ e(Re, { value: "whitelist", children: a("tabs.whitelist") }),
      /* @__PURE__ */ e(Re, { value: "favorites", children: a("tabs.favorites") }),
      /* @__PURE__ */ e(Re, { value: "sidebar", children: a("tabs.sidebar") }),
      /* @__PURE__ */ e(Re, { value: "agents", children: a("tabs.agents") }),
      /* @__PURE__ */ e(Re, { value: "properties", children: a("tabs.properties") }),
      /* @__PURE__ */ e(Re, { value: "rendition", children: a("tabs.rendition") }),
      /* @__PURE__ */ e(Re, { value: "search", children: a("tabs.search") }),
      /* @__PURE__ */ e(Re, { value: "language", children: a("tabs.language") }),
      /* @__PURE__ */ e(Re, { value: "colorScheme", children: a("tabs.colorScheme") })
    ] }) }),
    /* @__PURE__ */ e($e, { value: "application", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(cP, { settings: s, appName: r?.manifest.name, appTitle: r?.manifest.title, onSave: c, loading: d }, `application-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "dashboard", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(vP, { settings: s, onSave: u, loading: d }, `dashboard-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "library", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(XI, { settings: s, onSave: m, loading: d }, `library-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "whitelist", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(PP, { settings: s, onSave: f, loading: d }, `whitelist-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "favorites", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(yP, { settings: s, onSave: h, loading: d }, `favorites-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "sidebar", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(SP, { settings: s, onSave: p, loading: d }, `sidebar-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "agents", className: "flex-1 min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(iP, { settings: s, onSave: b, loading: d }, `agents-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "rendition", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(wP, { settings: s, onSave: v, loading: d }, `rendition-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "properties", className: "flex flex-col gap-4 min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(IP, { settings: s, onSave: C, loading: d }, `props-${r?.id}`) }),
    /* @__PURE__ */ i($e, { value: "search", className: "flex flex-col gap-4 min-h-0 min-w-0 overflow-y-auto", children: [
      /* @__PURE__ */ e(uP, { settings: s, onSave: A, loading: d }, `basic-filters-${r?.id}`),
      /* @__PURE__ */ e(xP, { settings: s, onSave: w, loading: d }, `facets-${r?.id}`),
      /* @__PURE__ */ e(CP, { settings: s.WEIGHTS, onSave: y, loading: d }, `weights-${r?.id}`)
    ] }),
    /* @__PURE__ */ e($e, { value: "language", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(NP, { settings: s, onSave: x, loading: d }, `language-${r?.id}`) }),
    /* @__PURE__ */ e($e, { value: "colorScheme", className: "min-h-0 min-w-0 overflow-y-auto", children: /* @__PURE__ */ e(mP, { settings: s, onSave: N, loading: d }, `colorScheme-${r?.id}`) })
  ] }) }) : null;
}
function EP({ steps: t, currentStepId: n, isExecuting: a }) {
  const o = ge(null), [r, s] = g("all"), l = t.filter((f) => f.type !== "done"), d = l.findIndex((f) => f.id === n);
  M(() => {
    const f = () => {
      if (!o.current) return;
      const p = o.current.offsetWidth, h = l.length, b = 150;
      h * b <= p ? s("all") : b * 4 + 100 <= p ? s("prev-current-next-last") : b * 3 + 100 <= p ? s("first-current-last") : s("current-only");
    };
    return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, [l.length]);
  const u = (() => {
    if (r === "all")
      return l;
    if (r === "current-only")
      return [l[d]];
    const f = [];
    if (r === "prev-current-next-last") {
      const v = l.length;
      let x = d - 1, N = d + 2;
      if (N >= v) {
        const w = N - v + 1;
        x = Math.max(0, x - w), N = v - 1;
      }
      x < 0 && (x = 0, N = Math.min(v - 1, x + 4 - 1));
      for (let w = x; w <= N; w++)
        f.push(l[w]);
      return f;
    }
    const p = 3, h = l.length;
    let b = Math.max(0, d - 1);
    const C = Math.min(h - 1, b + p - 1);
    C - b + 1 < p && (b = Math.max(0, C - p + 1));
    for (let y = b; y <= C; y++)
      f.push(l[y]);
    return f;
  })(), m = (f) => {
    const p = l.findIndex((h) => h.id === f.id);
    return {
      isCompleted: p < d,
      isCurrent: p === d
    };
  };
  return /* @__PURE__ */ e("div", { ref: o, className: "flex items-start justify-center w-full", children: u.map((f, p) => {
    const h = f, { isCompleted: b, isCurrent: C } = m(h), y = l.findIndex((v) => v.id === h.id);
    return /* @__PURE__ */ i("div", { className: "flex items-center", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e("div", { className: D("flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors", b || a ? "bg-primary border-primary text-primary-foreground" : C ? "border-primary text-primary" : "border-border text-muted-foreground"), children: b || a ? /* @__PURE__ */ e(Me, { className: "w-5 h-5" }) : /* @__PURE__ */ e("span", { className: "font-semibold", children: y + 1 }) }),
        /* @__PURE__ */ e("span", { className: D("text-sm font-medium whitespace-nowrap", C ? "text-primary" : b || a ? "text-foreground" : "text-muted-foreground"), children: h.label })
      ] }),
      p < u.length - 1 && /* @__PURE__ */ e(
        "div",
        {
          className: D("w-24 h-0.5 mx-4 -mt-8", b || a ? "bg-primary" : "bg-border")
        }
      )
    ] }, h.id);
  }) });
}
function zP({ name: t, description: n, setName: a, setDescription: o }) {
  const { t: r } = K("agents");
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 h-full mt-4", children: [
    /* @__PURE__ */ i("div", { className: "space-y-2", children: [
      /* @__PURE__ */ i(ne, { htmlFor: "agent-name", className: "flex items-center gap-1", children: [
        r("execution.executionName"),
        /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r("execution.executionNameHelp") }),
      /* @__PURE__ */ e(
        be,
        {
          id: "agent-name",
          value: t,
          onChange: (s) => a(s.target.value),
          placeholder: r("execution.executionNamePlaceholder"),
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 h-full ", children: [
      /* @__PURE__ */ i(ne, { htmlFor: "agent-description", className: "flex items-center gap-1", children: [
        r("execution.executionDescription"),
        /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r("execution.executionDescriptionHelp") }),
      /* @__PURE__ */ e(
        pt,
        {
          id: "agent-description",
          value: n,
          onChange: (s) => o(s.target.value),
          placeholder: r("execution.executionDescriptionPlaceholder"),
          className: "w-full flex-1"
        }
      )
    ] })
  ] });
}
function FP({ isExecuting: t, executionError: n }) {
  const { t: a } = K("agents");
  return /* @__PURE__ */ i("div", { className: "flex items-center justify-center h-full gap-1", children: [
    t && /* @__PURE__ */ e(qi, { className: "animate-spin motion-safe:animate-[spin_2s_linear_infinite]" }),
    /* @__PURE__ */ e("span", { children: n ?? a("execution.redirecting") })
  ] });
}
function LP({ stepType: t, stepLabel: n, children: a }) {
  const { t: o } = K("agents"), r = () => {
    switch (t) {
      case "details":
        return o("steps.executionDetails");
      case "document":
        return o("steps.selectDocument");
      case "documents":
        return o("steps.selectDocuments");
      case "media":
        return o("steps.uploadMedia");
      case "medias":
        return o("steps.uploadMediaFiles");
      case "object":
        return o("steps.selectObject");
      case "objects":
        return o("steps.selectObjects");
      case "parameters":
        return o("steps.configureParameters");
      case "summary":
        return o("steps.reviewExecute");
      case "done":
        return o("steps.executionComplete");
      default:
        return n || "";
    }
  }, s = () => {
    switch (t) {
      case "details":
        return o("steps.executionDetailsDescription");
      case "document":
        return o("steps.selectDocumentDescription");
      case "documents":
        return o("steps.selectDocumentsDescription");
      case "media":
        return o("steps.uploadMediaDescription");
      case "medias":
        return o("steps.uploadMediaDescription");
      case "object":
        return o("steps.selectObjectDescription");
      case "objects":
        return o("steps.selectObjectsDescription");
      case "parameters":
        return o("steps.configureParametersDescription");
      case "summary":
        return o("steps.reviewExecuteDescription");
      case "done":
        return o("steps.executionCompleteDescription");
      default:
        return "";
    }
  };
  return /* @__PURE__ */ i("div", { className: "p-4 border-b flex flex-row justify-between items-center", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold", children: r() }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: s() })
    ] }),
    a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
  ] });
}
function RP({ fields: t, formData: n, errors: a, onChange: o }) {
  const { t: r } = K("common");
  return t.length === 0 ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ e("p", { className: "text-muted-foreground text-lg", children: r("form.noParametersRequired") }) }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: t.map((s) => /* @__PURE__ */ i("div", { className: "space-y-2", children: [
    /* @__PURE__ */ i(ne, { htmlFor: s.name, className: "flex items-center gap-1", children: [
      s.label,
      s.required && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    s.description && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: s.description }),
    $P(s, n[s.name], o, r),
    a[s.name] && /* @__PURE__ */ e("p", { className: "text-sm text-destructive", children: a[s.name] })
  ] }, s.name)) });
}
function $P(t, n, a, o) {
  const r = {
    id: t.name,
    value: n ?? t.default ?? ""
  };
  switch (t.type) {
    case "boolean":
      return /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          Xe,
          {
            id: t.name,
            checked: n ?? t.default ?? !1,
            onCheckedChange: (s) => a(t.name, s)
          }
        ),
        /* @__PURE__ */ e(ne, { htmlFor: t.name, className: "text-sm font-normal cursor-pointer", children: t.description || o("form.enable") })
      ] });
    case "number":
      return /* @__PURE__ */ e(
        be,
        {
          ...r,
          type: "number",
          min: t.validation?.min,
          max: t.validation?.max,
          onChange: (s) => a(t.name, s.target.value ? Number(s.target.value) : ""),
          placeholder: o("form.enterField", { field: t.label.toLowerCase() })
        }
      );
    case "enum":
      return /* @__PURE__ */ i(
        dn,
        {
          value: n ?? t.default ?? "",
          onValueChange: (s) => a(t.name, s),
          children: [
            /* @__PURE__ */ e(Gt, { id: t.name, children: /* @__PURE__ */ e(un, { placeholder: o("form.selectField", { field: t.label.toLowerCase() }) }) }),
            /* @__PURE__ */ e(Wt, { children: t.options?.map((s) => /* @__PURE__ */ e(It, { value: s, children: s }, s)) })
          ]
        }
      );
    default:
      return t.validation?.maxLength && t.validation.maxLength > 100 ? /* @__PURE__ */ e(
        pt,
        {
          ...r,
          onChange: (l) => a(t.name, l.target.value),
          placeholder: o("form.enterField", { field: t.label.toLowerCase() }),
          rows: 4,
          className: "resize-none"
        }
      ) : /* @__PURE__ */ e(
        be,
        {
          ...r,
          type: "text",
          onChange: (l) => a(t.name, l.target.value),
          placeholder: o("form.enterField", { field: t.label.toLowerCase() }),
          maxLength: t.validation?.maxLength
        }
      );
  }
}
function MP({ fields: t, formData: n, errors: a, onChange: o }) {
  return /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto mt-4", children: /* @__PURE__ */ e(
    RP,
    {
      fields: t,
      formData: n,
      errors: a,
      onChange: o
    }
  ) });
}
function OP({
  name: t,
  description: n,
  interactionName: a,
  fields: o,
  formData: r,
  onNavigate: s
}) {
  const { t: l } = K(["agents", "common"]);
  return /* @__PURE__ */ i("div", { className: "flex-1 overflow-y-auto space-y-4 mt-4", children: [
    /* @__PURE__ */ i(ye, { children: [
      /* @__PURE__ */ i(Te, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e(ke, { className: "text-lg", children: l("agents:execution.executionDetails") }),
          /* @__PURE__ */ e(Ye, { children: l("agents:execution.executionDetailsDescription") })
        ] }),
        /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: () => s("details"), children: /* @__PURE__ */ e(Ga, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ e(Ce, { children: /* @__PURE__ */ i("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium text-muted-foreground", children: l("common:properties.name") }),
          /* @__PURE__ */ e("p", { className: "text-sm", children: t })
        ] }),
        /* @__PURE__ */ e(Ee, {}),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium text-muted-foreground", children: l("common:properties.description") }),
          /* @__PURE__ */ e("p", { className: "text-sm", children: n })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ i(ye, { children: [
      /* @__PURE__ */ e(Te, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e(ke, { className: "text-lg", children: l("agents:execution.interactionLabel") }),
        /* @__PURE__ */ e(Ye, { children: l("agents:execution.interactionDescription") })
      ] }) }),
      /* @__PURE__ */ e(Ce, { children: /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: a }) })
    ] }),
    o.length > 0 && /* @__PURE__ */ i(ye, { children: [
      /* @__PURE__ */ i(Te, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e(ke, { className: "text-lg", children: l("agents:execution.parameters") }),
          /* @__PURE__ */ e(Ye, { children: l("agents:execution.parametersDescription") })
        ] }),
        /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: () => s("parameters"), children: /* @__PURE__ */ e(Ga, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ e(Ce, { children: /* @__PURE__ */ e("div", { className: "space-y-3", children: o.map((d, c) => /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-medium text-muted-foreground", children: d.label }),
          /* @__PURE__ */ e("div", { className: "max-h-32 overflow-auto", children: /* @__PURE__ */ e(ha, { value: r[d.name] }) })
        ] }),
        c < o.length - 1 && /* @__PURE__ */ e(Ee, { className: "mt-3" })
      ] }, d.name)) }) })
    ] })
  ] });
}
function jP({
  item: t,
  type: n,
  onRemove: a,
  onSelect: o,
  isSelected: r,
  showCheckbox: s,
  disabled: l
}) {
  const { t: d } = K(["agents", "common"]), c = n === "media" ? fn : wt, u = (f) => f ? new Date(f).toLocaleDateString() : null, m = a && !o && !s;
  return /* @__PURE__ */ i(
    "div",
    {
      className: D(
        "p-3 flex items-center justify-between gap-2 border rounded-md hover:border-primary",
        o && "cursor-pointer hover:bg-muted/50",
        r && "border-primary bg-primary/5",
        l && "opacity-50 cursor-not-allowed"
      ),
      onClick: !l && o ? o : void 0,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
          s && /* @__PURE__ */ e(
            "div",
            {
              className: D(
                "flex-shrink-0 h-4 w-4 rounded border",
                r ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground",
                "flex items-center justify-center"
              ),
              children: r && /* @__PURE__ */ e(Me, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ e(c, { className: "h-4 w-4 text-primary flex-shrink-0" }),
          /* @__PURE__ */ i("div", { className: "flex flex-col min-w-0", children: [
            m ? /* @__PURE__ */ e(ht, { documentId: t.id, children: /* @__PURE__ */ e(
              "span",
              {
                className: "text-sm font-medium truncate text-primary underline hover:text-primary/80 cursor-pointer",
                title: d("agents:media.clickToView", { name: t.name }),
                children: t.name
              }
            ) }) : /* @__PURE__ */ e("span", { className: "text-sm font-medium truncate", title: t.name, children: t.name }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              t.type && /* @__PURE__ */ e("span", { children: t.type }),
              t.type && t.createdAt && /* @__PURE__ */ e("span", { children: "|" }),
              t.createdAt && /* @__PURE__ */ e("span", { children: u(t.createdAt) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          m && /* @__PURE__ */ e(ht, { documentId: t.id, children: /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "sm",
              disabled: l,
              title: d("agents:media.viewDocument"),
              children: /* @__PURE__ */ e(rn, { className: "h-4 w-4" })
            }
          ) }),
          a && /* @__PURE__ */ e(
            z,
            {
              variant: "ghost",
              size: "sm",
              onClick: (f) => {
                f.stopPropagation(), a();
              },
              disabled: l,
              title: d("common:actions.remove"),
              children: /* @__PURE__ */ e(De, { className: "h-4 w-4" })
            }
          )
        ] })
      ]
    }
  );
}
function BP({
  items: t,
  mode: n,
  type: a,
  onRemove: o,
  onClear: r,
  disabled: s
}) {
  const { t: l } = K(["agents", "common"]);
  if (t.length === 0)
    return null;
  const d = l(a === "media" ? "agents:media.media" : "agents:media.document"), c = l(a === "media" ? "agents:media.mediaFiles" : "agents:media.documents");
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm font-medium", children: l("agents:media.selected") }),
        n === "multiple" && /* @__PURE__ */ i(ve, { variant: "secondary", children: [
          t.length,
          " ",
          t.length === 1 ? d : c
        ] })
      ] }),
      n === "multiple" && r && t.length > 0 && /* @__PURE__ */ i(
        z,
        {
          variant: "ghost",
          size: "sm",
          onClick: r,
          disabled: s,
          className: "text-muted-foreground",
          children: [
            /* @__PURE__ */ e(De, { className: "h-4 w-4 mr-1" }),
            l("common:actions.clearAll")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 max-h-48 overflow-y-auto", children: t.map((u, m) => /* @__PURE__ */ e(
      jP,
      {
        item: u,
        type: a,
        onRemove: () => o(u.id),
        disabled: s
      },
      u.id || `item-${m}`
    )) })
  ] });
}
function HP({
  type: t,
  onUploadComplete: n
}) {
  const { client: a } = de(), [o, r] = g(!1), [s, l] = g(0), [d, c] = g(null);
  return {
    upload: J(
      async (m) => {
        if (!a || m.length === 0)
          return [];
        r(!0), l(0), c(null);
        const f = [];
        try {
          for (let p = 0; p < m.length; p++) {
            const h = m[p], b = await a.objects.create({ content: h }), C = {
              id: b.id,
              name: b.name || h.name,
              mimeType: h.type,
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              type: t === "media" ? "Media" : "Document"
            };
            f.push(C), l(Math.round((p + 1) / m.length * 100));
          }
          return n?.(f), f;
        } catch (p) {
          throw c(p), p;
        } finally {
          r(!1);
        }
      },
      [a, t, n]
    ),
    isUploading: o,
    progress: s,
    error: d
  };
}
function VP({
  type: t,
  mode: n,
  onUploadComplete: a,
  disabled: o
}) {
  const { t: r } = K(["agents", "common"]), s = ge(null), [l, d] = g(!1), { upload: c, isUploading: u, progress: m } = HP({
    type: t,
    onUploadComplete: a
  }), f = J(
    async (N) => {
      if (!N || N.length === 0) return;
      const w = Array.from(N), A = n === "single" ? [w[0]] : w;
      await c(A);
    },
    [n, c]
  ), p = J((N) => {
    N.preventDefault(), N.stopPropagation(), d(!0);
  }, []), h = J((N) => {
    N.preventDefault(), N.stopPropagation(), d(!1);
  }, []), b = J(
    (N) => {
      N.preventDefault(), N.stopPropagation(), d(!1), !(o || u) && f(N.dataTransfer.files);
    },
    [o, u, f]
  ), C = () => {
    o || u || s.current?.click();
  }, y = (N) => {
    f(N.target.files), s.current && (s.current.value = "");
  }, v = r(t === "media" ? "agents:upload.uploadMedia" : "agents:upload.uploadDocument"), x = r(t === "media" ? "agents:upload.dragDropMedia" : "agents:upload.dragDropDocuments");
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ e("h4", { className: "text-sm font-medium", children: r("agents:upload.uploadNew") }),
    /* @__PURE__ */ i(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${l ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"} ${o || u ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
        onDragOver: p,
        onDragLeave: h,
        onDrop: b,
        onClick: C,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              type: "file",
              multiple: n === "multiple",
              onChange: y,
              className: "hidden",
              disabled: o || u
            }
          ),
          u ? /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(fe, { className: "h-10 w-10 mx-auto text-primary mb-3 animate-spin" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-medium mb-1", children: r("agents:upload.uploading") }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: r("agents:upload.progressComplete", { progress: m }) })
          ] }) : /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(bn, { className: "h-10 w-10 mx-auto text-muted-foreground mb-3" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-medium mb-1", children: v }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mb-3", children: x })
          ] })
        ]
      }
    )
  ] });
}
const ta = (t) => t.startsWith("store:") ? t : `store:${t}`, _i = (t) => t.startsWith("store:") ? t.slice(6) : t;
function Ei({
  mode: t,
  type: n,
  value: a,
  onChange: o,
  disabled: r,
  className: s
}) {
  const { t: l } = K(["agents", "common"]), { client: d } = de(), [c, u] = g([]), m = Array.isArray(a) ? a : a ? [a] : [], f = m.map(_i);
  M(() => {
    (async () => {
      if (!d || f.length === 0) {
        u([]);
        return;
      }
      try {
        const x = await Promise.all(
          f.map(async (N) => {
            try {
              const w = await d.objects.retrieve(N);
              return {
                id: w.id,
                name: w.name || w.id,
                mimeType: w.content?.type,
                createdAt: w.created_at,
                type: w.type?.name
              };
            } catch {
              return {
                id: N,
                name: N
              };
            }
          })
        );
        u(x);
      } catch {
        u(
          f.map((x) => ({ id: x, name: x }))
        );
      }
    })();
  }, [d, a]);
  const p = J(
    (v) => {
      if (v.length === 0) return;
      const x = v.map((N) => ({
        id: N.id,
        name: N.name || N.id,
        mimeType: N.content?.type,
        createdAt: N.created_at,
        type: N.type?.name
      }));
      if (t === "single") {
        const N = x[0];
        o(ta(N.id)), u([N]);
      } else {
        const N = new Set(f), w = x.filter((S) => !N.has(S.id)), A = [...m, ...w.map((S) => ta(S.id))];
        o(A), u((S) => [...S, ...w]);
      }
    },
    [t, f, m, o]
  ), h = J(
    (v) => {
      if (t === "single")
        o(null), u([]);
      else {
        const x = m.filter((N) => _i(N) !== v);
        o(x.length > 0 ? x : []), u((N) => N.filter((w) => w.id !== v));
      }
    },
    [t, m, o]
  ), b = J(() => {
    o(t === "single" ? null : []), u([]);
  }, [t, o]), C = J(
    (v) => {
      if (t === "single") {
        const x = v[0];
        x && (o(ta(x.id)), u([x]));
      } else {
        const x = [...m, ...v.map((N) => ta(N.id))];
        o(x), u((N) => [...N, ...v]);
      }
    },
    [t, m, o]
  ), y = () => {
    const v = l(n === "media" ? "agents:media.media" : "agents:media.document"), x = l(n === "media" ? "agents:media.mediaFiles" : "agents:media.documents");
    return l("agents:media.selectItems", { itemType: t === "single" ? v : x });
  };
  return /* @__PURE__ */ i("div", { className: `flex-1 overflow-y-auto mt-4 flex flex-col gap-4 ${s || ""}`, children: [
    c.length > 0 && /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ e(
        BP,
        {
          items: c,
          mode: t,
          type: n,
          onRemove: h,
          onClear: b,
          disabled: r
        }
      ),
      /* @__PURE__ */ e(Ee, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm font-medium", children: l("common:actions.chooseExisting") }),
      /* @__PURE__ */ e(Ia, { onSelection: p, selectionMode: t, children: /* @__PURE__ */ i(z, { variant: "outline", className: "w-full justify-start", disabled: r, children: [
        /* @__PURE__ */ e(Li, { className: "h-4 w-4 mr-2" }),
        y()
      ] }) })
    ] }),
    /* @__PURE__ */ e(Ee, {}),
    /* @__PURE__ */ e(
      VP,
      {
        type: n,
        mode: t,
        onUploadComplete: C,
        disabled: r
      }
    )
  ] });
}
function oo({ fields: t, value: n, onChange: a, disabled: o }) {
  const { t: r } = K("common"), s = (l, d) => {
    a({ ...n, [l]: d });
  };
  return t.length === 0 ? /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: r("form.noPropertiesDefined") }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: t.map((l) => /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ i(ne, { htmlFor: l.name, className: "flex items-center gap-1 text-sm", children: [
      l.label,
      l.required && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    l.description && /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l.description }),
    qP(l, n[l.name], (d) => s(l.name, d), o, r)
  ] }, l.name)) });
}
function qP(t, n, a, o, r) {
  switch (t.type) {
    case "boolean":
      return /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          Xe,
          {
            id: t.name,
            checked: n ?? t.default ?? !1,
            onCheckedChange: a,
            disabled: o
          }
        ),
        /* @__PURE__ */ e(ne, { htmlFor: t.name, className: "text-sm font-normal cursor-pointer", children: r?.("form.enable") ?? "Enable" })
      ] });
    case "number":
      return /* @__PURE__ */ e(
        be,
        {
          id: t.name,
          type: "number",
          value: n ?? t.default ?? "",
          min: t.validation?.min,
          max: t.validation?.max,
          onChange: (s) => a(s.target.value ? Number(s.target.value) : void 0),
          placeholder: r?.("form.enterField", { field: t.label.toLowerCase() }) ?? `Enter ${t.label.toLowerCase()}`,
          disabled: o
        }
      );
    case "enum":
      return /* @__PURE__ */ i(
        dn,
        {
          value: n ?? t.default ?? "",
          onValueChange: a,
          disabled: o,
          children: [
            /* @__PURE__ */ e(Gt, { id: t.name, children: /* @__PURE__ */ e(un, { placeholder: r?.("form.selectField", { field: t.label.toLowerCase() }) ?? `Select ${t.label.toLowerCase()}` }) }),
            /* @__PURE__ */ e(Wt, { children: t.options?.map((s) => /* @__PURE__ */ e(It, { value: s, children: s }, s)) })
          ]
        }
      );
    case "object":
      return t.properties && t.properties.length > 0 ? /* @__PURE__ */ e("div", { className: "border rounded-md p-3 bg-muted/30", children: /* @__PURE__ */ e(
        oo,
        {
          fields: t.properties,
          value: n || {},
          onChange: a,
          disabled: o
        }
      ) }) : /* @__PURE__ */ e(
        pt,
        {
          id: t.name,
          value: typeof n == "object" ? JSON.stringify(n, null, 2) : n ?? "",
          onChange: (s) => {
            try {
              a(JSON.parse(s.target.value));
            } catch {
            }
          },
          placeholder: '{"key": "value"}',
          className: "font-mono text-sm min-h-[80px]",
          disabled: o
        }
      );
    default:
      return t.validation?.maxLength && t.validation.maxLength > 100 ? /* @__PURE__ */ e(
        pt,
        {
          id: t.name,
          value: n ?? t.default ?? "",
          onChange: (l) => a(l.target.value),
          placeholder: r?.("form.enterField", { field: t.label.toLowerCase() }) ?? `Enter ${t.label.toLowerCase()}`,
          rows: 3,
          className: "resize-none",
          disabled: o
        }
      ) : /* @__PURE__ */ e(
        be,
        {
          id: t.name,
          type: "text",
          value: n ?? t.default ?? "",
          onChange: (l) => a(l.target.value),
          placeholder: r?.("form.enterField", { field: t.label.toLowerCase() }) ?? `Enter ${t.label.toLowerCase()}`,
          maxLength: t.validation?.maxLength,
          disabled: o
        }
      );
  }
}
function GP({
  mode: t,
  value: n,
  onChange: a,
  field: o,
  description: r,
  disabled: s,
  className: l
}) {
  const { t: d } = K("common"), c = t === "single" ? o?.properties || [] : o?.itemsSchema || o?.properties || [], [u, m] = g([]);
  M(() => {
    if (t === "multiple") {
      const y = Array.isArray(n) ? n : [];
      m(y);
    }
  }, []);
  const f = J(
    (y) => {
      a(y);
    },
    [a]
  ), p = J(() => {
    const y = {};
    c.forEach((x) => {
      x.default !== void 0 && (y[x.name] = x.default);
    });
    const v = [...u, y];
    m(v), a(v);
  }, [u, c, a]), h = J(
    (y) => {
      const v = u.filter((x, N) => N !== y);
      m(v), a(v.length > 0 ? v : []);
    },
    [u, a]
  ), b = J(
    (y, v) => {
      const x = [...u];
      x[y] = v, m(x), a(x);
    },
    [u, a]
  ), C = J(() => {
    m([]), a([]);
  }, [a]);
  return t === "single" ? /* @__PURE__ */ i("div", { className: `flex-1 overflow-y-auto mt-4 flex flex-col gap-4 ${l || ""}`, children: [
    r && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r }),
    c.length > 0 ? /* @__PURE__ */ e(
      oo,
      {
        fields: c,
        value: n || {},
        onChange: f,
        disabled: s
      }
    ) : /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: d("form.noSchemaDefined") })
  ] }) : /* @__PURE__ */ i("div", { className: `flex-1 overflow-y-auto mt-4 flex flex-col gap-4 ${l || ""}`, children: [
    r && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r }),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm font-medium", children: d("items_other", { count: u.length }) }),
        u.length > 0 && /* @__PURE__ */ e(ve, { variant: "secondary", children: d("items", { count: u.length }) })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        u.length > 0 && /* @__PURE__ */ i(
          z,
          {
            variant: "ghost",
            size: "sm",
            onClick: C,
            disabled: s,
            className: "text-muted-foreground",
            children: [
              /* @__PURE__ */ e(De, { className: "h-4 w-4 mr-1" }),
              d("actions.clearAll")
            ]
          }
        ),
        /* @__PURE__ */ i(
          z,
          {
            variant: "outline",
            size: "sm",
            onClick: p,
            disabled: s,
            children: [
              /* @__PURE__ */ e(jn, { className: "h-4 w-4 mr-1" }),
              d("actions.addItem")
            ]
          }
        )
      ] })
    ] }),
    u.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-lg text-muted-foreground", children: [
      /* @__PURE__ */ e("p", { children: d("form.noItemsAdded") }),
      /* @__PURE__ */ e("p", { className: "text-xs mt-1", children: d("form.clickAddItem") })
    ] }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 max-h-[400px] overflow-y-auto", children: u.map((y, v) => /* @__PURE__ */ i("div", { className: "border rounded-md p-4", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ e(ne, { className: "text-sm font-medium", children: d("form.itemIndex", { index: v + 1 }) }),
        /* @__PURE__ */ e(
          z,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => h(v),
            disabled: s,
            className: "h-7 w-7 p-0",
            children: /* @__PURE__ */ e(De, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ e(Ee, { className: "mb-3" }),
      c.length > 0 ? /* @__PURE__ */ e(
        oo,
        {
          fields: c,
          value: y,
          onChange: (x) => b(v, x),
          disabled: s
        }
      ) : /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground italic", children: d("form.noSchemaDefinedForItems") })
    ] }, v)) })
  ] });
}
function WP(t, n) {
  if (n.required && (t == null || t === ""))
    return `${n.label} is required`;
  if (!t && !n.required)
    return null;
  if (n.type === "number") {
    const a = Number(t);
    if (isNaN(a))
      return "Must be a valid number";
    if (n.validation?.min !== void 0 && a < n.validation.min)
      return `Must be at least ${n.validation.min}`;
    if (n.validation?.max !== void 0 && a > n.validation.max)
      return `Must be at most ${n.validation.max}`;
  }
  if (n.type === "string" && typeof t == "string") {
    if (n.validation?.minLength && t.length < n.validation.minLength)
      return `Must be at least ${n.validation.minLength} characters`;
    if (n.validation?.maxLength && t.length > n.validation.maxLength)
      return `Must be at most ${n.validation.maxLength} characters`;
    if (n.validation?.pattern)
      try {
        if (!new RegExp(n.validation.pattern).test(t))
          return "Invalid format";
      } catch {
        console.error("Invalid regex pattern:", n.validation.pattern);
      }
  }
  return n.type === "enum" && n.options && !n.options.includes(t) ? `Must be one of: ${n.options.join(", ")}` : null;
}
function UP(t, n) {
  const a = {};
  for (const o of n) {
    const r = t[o.name], s = WP(r, o);
    s && (a[o.name] = s);
  }
  return a;
}
function KP(t) {
  return t.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase()).replace(/_/g, " ").trim();
}
function YP(t) {
  return t.enum && t.enum.length > 0 ? "enum" : t.type === "boolean" ? "boolean" : t.type === "number" || t.type === "integer" ? "number" : t.type === "array" ? "array" : t.type === "object" ? "object" : "string";
}
function XP(t) {
  return {
    min: t.minimum,
    max: t.maximum,
    pattern: t.pattern,
    minLength: t.minLength,
    maxLength: t.maxLength
  };
}
function io(t, n, a) {
  const o = n, r = YP(o);
  let s, l;
  if (o.type === "array" && o.items) {
    const c = o.items;
    if (s = c.type, c.type === "object" && c.properties) {
      const u = c.required || [];
      l = Object.entries(c.properties).map(
        ([m, f]) => io(m, f, u.includes(m))
      );
    }
  }
  let d;
  if (o.type === "object" && o.properties) {
    const c = o.required || [];
    d = Object.entries(o.properties).map(
      ([u, m]) => io(u, m, c.includes(u))
    );
  }
  return {
    name: t,
    type: r,
    label: o.title || KP(t),
    description: o.description,
    required: a,
    default: o.default,
    options: o.enum,
    editor: o.editor,
    itemsType: s,
    itemsSchema: l,
    properties: d,
    validation: XP(o)
  };
}
function QP(t) {
  if (!t || !t.properties)
    return [];
  const n = t.properties, a = t.required || [];
  return Object.entries(n).map(
    ([o, r]) => io(o, r, a.includes(o))
  );
}
function ZP(t) {
  return t.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase()).replace(/_/g, " ").trim();
}
function JP(t) {
  const n = [];
  n.push({ type: "details", label: "Details", id: "details" });
  const a = /* @__PURE__ */ new Set();
  t.forEach((l) => {
    const d = l.label || ZP(l.name);
    l.type === "array" && l.editor === "document" ? (n.push({
      type: "documents",
      label: d,
      fieldName: l.name,
      field: l,
      id: `documents-${l.name}`
    }), a.add(l.name)) : l.type === "array" && l.editor === "media" ? (n.push({
      type: "medias",
      label: d,
      fieldName: l.name,
      field: l,
      id: `medias-${l.name}`
    }), a.add(l.name)) : l.type === "array" && l.itemsType === "object" ? (n.push({
      type: "objects",
      label: d,
      fieldName: l.name,
      field: l,
      id: `objects-${l.name}`
    }), a.add(l.name)) : l.editor === "document" ? (n.push({
      type: "document",
      label: d,
      fieldName: l.name,
      field: l,
      id: `document-${l.name}`
    }), a.add(l.name)) : l.editor === "media" ? (n.push({
      type: "media",
      label: d,
      fieldName: l.name,
      field: l,
      id: `media-${l.name}`
    }), a.add(l.name)) : l.type === "object" && (n.push({
      type: "object",
      label: d,
      fieldName: l.name,
      field: l,
      id: `object-${l.name}`
    }), a.add(l.name));
  }), t.filter((l) => !a.has(l.name)).length > 0 && n.push({ type: "parameters", label: "Parameters", id: "parameters" }), n.push({ type: "summary", label: "Summary", id: "summary" });
  const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return n.forEach((l) => {
    l.type !== "details" && l.type !== "parameters" && l.type !== "summary" && r.set(l.label, (r.get(l.label) || 0) + 1);
  }), n.forEach((l) => {
    if (l.type !== "details" && l.type !== "parameters" && l.type !== "summary" && (r.get(l.label) || 0) > 1) {
      const c = (s.get(l.label) || 0) + 1;
      s.set(l.label, c), l.label = `${l.label} ${c}`;
    }
  }), n;
}
function ek(t) {
  return t.filter((n) => {
    const a = n.type === "array" && n.editor === "document", o = n.type === "array" && n.editor === "media", r = n.type === "array" && n.itemsType === "object", s = n.editor === "document" && n.type !== "array", l = n.editor === "media" && n.type !== "array", d = n.type === "object";
    return !(a || o || r || s || l || d);
  });
}
function $t(t, n) {
  if (t == null || typeof t == "string" && t.trim() === "" || Array.isArray(t) && t.length === 0)
    return !1;
  if (n.type === "object" && n.properties && typeof t == "object" && !Array.isArray(t)) {
    for (const a of n.properties)
      if (a.required) {
        const o = t[a.name];
        if (!$t(o, a))
          return !1;
      }
  }
  if (n.type === "array" && n.itemsSchema && Array.isArray(t)) {
    for (const a of t)
      if (a && typeof a == "object") {
        for (const o of n.itemsSchema)
          if (o.required) {
            const r = a[o.name];
            if (!$t(r, o))
              return !1;
          }
      }
  }
  return !0;
}
function tk(t) {
  if (!t)
    return { iconName: null, cleanDescription: "No description available" };
  const n = /^\[icon:([A-Za-z0-9]+)\]\s*/, a = t.match(n);
  return a ? {
    iconName: a[1],
    cleanDescription: t.replace(n, "").trimStart()
  } : { iconName: null, cleanDescription: t };
}
function nk() {
  const { t } = K(["agents", "common"]), { client: n, isLoading: a } = de(), o = Fe(), r = Ie(), s = et(), l = fa(), d = Mn("id"), c = o?.settings?.EXECUTION_CONTAINER || void 0, u = ce(() => {
    const Ne = new URLSearchParams(l.search).get("prefilled");
    if (Ne)
      try {
        return JSON.parse(decodeURIComponent(Ne));
      } catch {
        return null;
      }
    return null;
  }, [l.search]), [m, f] = g(null), [p, h] = g(0), [b, C] = g([]), [y, v] = g([]), [x, N] = g([]), [w, A] = g(""), [S, I] = g(""), [L, V] = g({}), [G, R] = g({}), [j, O] = g(!0), [Q, ee] = g(!1), [te, k] = g(null), [_, q] = g(!1), { iconName: $, cleanDescription: T } = ce(() => {
    const re = tk(m?.description);
    return {
      iconName: re.iconName,
      cleanDescription: re.cleanDescription === "No description available" ? t("agents:execution.noDescription") : re.cleanDescription
    };
  }, [m?.description, t]), X = ce(() => $ && $ in xt ? xt[$] : Pt, [$]);
  M(() => {
    !n || a || !d || (O(!0), n.interactions.retrieve(d).then((re) => {
      f(re);
      const Ne = Ms(re), we = QP(Ne);
      v(we);
      const Le = JP(we);
      C(Le);
      const nt = ek(we);
      N(nt);
      const se = {};
      we.forEach((Z) => {
        Z.default !== void 0 && (se[Z.name] = Z.default);
      }), u && (u.formData && Object.assign(se, u.formData), u.executionName && A(u.executionName), u.executionDescription && I(u.executionDescription)), V(se);
    }).catch((re) => {
      console.error("Failed to load interaction:", re), re.status === 404 ? q(!0) : r({
        status: "error",
        title: "Failed to load interaction",
        description: re.message,
        duration: 4e3
      });
    }).finally(() => {
      O(!1);
    }));
  }, [n, a, d, u]);
  const U = b[p], E = U?.type, H = ce(() => {
    if (E === "details")
      return w.trim() !== "" && S.trim() !== "";
    if (U?.field && U.fieldName) {
      const re = U.field, Ne = L[U.fieldName];
      if (re.required && !$t(Ne, re))
        return !1;
      if (re.type === "object" && re.properties && Ne && typeof Ne == "object") {
        for (const we of re.properties)
          if (we.required && !$t(Ne[we.name], we))
            return !1;
      }
      if (re.type === "array" && re.itemsSchema && Array.isArray(Ne)) {
        for (const we of Ne)
          if (we && typeof we == "object") {
            for (const Le of re.itemsSchema)
              if (Le.required && !$t(we[Le.name], Le))
                return !1;
          }
      }
    }
    if (E === "parameters")
      for (const re of x) {
        if (re.required) {
          const Ne = L[re.name];
          if (!$t(Ne, re))
            return !1;
        }
        if (re.type === "object" && re.properties) {
          const Ne = L[re.name];
          if (Ne && typeof Ne == "object") {
            for (const we of re.properties)
              if (we.required && !$t(Ne[we.name], we))
                return !1;
          }
        }
      }
    return !0;
  }, [E, U, w, S, L, x]), P = (re, Ne) => {
    V((we) => ({ ...we, [re]: Ne })), G[re] && R((we) => {
      const Le = { ...we };
      return delete Le[re], Le;
    });
  }, B = () => {
    if (E === "details") {
      if (!w.trim() || !S.trim()) {
        r({
          status: "error",
          title: t("agents:execution.validationError"),
          description: t("agents:execution.validationNameDescription"),
          duration: 3e3
        });
        return;
      }
    } else if (E === "parameters") {
      const re = UP(L, x);
      if (Object.keys(re).length > 0) {
        R(re), r({
          status: "error",
          title: t("agents:execution.validationError"),
          description: t("agents:execution.validationFormErrors"),
          duration: 3e3
        });
        return;
      }
    } else if (E === "summary") {
      h(p + 1), Pe();
      return;
    }
    p < b.length - 1 && h(p + 1);
  }, W = () => {
    p > 0 && h(p - 1);
  }, le = (re) => {
    const Ne = b.findIndex((we) => we.type === re);
    Ne >= 0 && h(Ne);
  }, me = async () => {
    if (!n || !m)
      return null;
    const re = {
      interaction: m.name,
      interactionId: m.id
    }, Ne = {
      name: w,
      description: S,
      dynamic: !1,
      type: c,
      properties: re
    };
    return await n.store.collections.create(Ne);
  }, ze = async (re, Ne, we) => {
    if (!n || !re || !m)
      return;
    const Le = {
      interaction: m.name,
      interactionId: m.id,
      run_id: Ne,
      workflow_id: we
    }, nt = {
      name: w,
      description: S,
      dynamic: !1,
      type: c,
      properties: Le
    };
    return await n.store.collections.update(re, nt);
  }, Pe = async () => {
    if (!m || !n)
      return;
    ee(!0), k(null);
    const re = await me();
    if (!re?.id) {
      r({
        status: "error",
        title: t("agents:execution.failedCreateCollection"),
        description: t("agents:execution.failedCreateCollectionDescription"),
        duration: 5e3
      }), ee(!1);
      return;
    }
    const Ne = {
      type: "conversation",
      data: { ...L },
      interactive: !1,
      interaction: m.endpoint,
      environment: m.environment,
      model: m.model,
      tools: [],
      visibility: "project",
      tags: [`execution:${re.id}`]
    };
    n.interactions.executeAsync(Ne).then(async (we) => {
      await ze(re.id, we.runId, we.workflowId), s(`/agents/executions/${re.id}`);
    }).catch((we) => {
      k(we.message || "An unexpected error occurred"), r({
        status: "error",
        title: t("agents:execution.failedStartReport"),
        description: we.message,
        duration: 5e3
      }), ee(!1);
    });
  };
  if (a || j)
    return /* @__PURE__ */ e("div", { className: "flex flex-col w-full h-full gap-4", children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary" }) }) });
  if (_)
    return /* @__PURE__ */ e("div", { className: "flex flex-col w-full h-full gap-4", children: /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center h-full gap-4", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-foreground", children: t("agents:execution.notFound") }),
      /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: t("agents:execution.notFoundDescription") }),
      /* @__PURE__ */ i(z, { onClick: () => s("/agents"), children: [
        /* @__PURE__ */ e(Va, {}),
        t("agents:execution.backToAgents")
      ] })
    ] }) });
  if (!m)
    return null;
  const Ue = p === 0;
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full gap-4", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col w-full justify-center items-center text-center flex-shrink-0", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-row gap-1 items-center", children: [
        /* @__PURE__ */ e(X, { className: "size-8 text-primary", strokeWidth: 2 }),
        /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-primary", children: m.name })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: T })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col items-center w-full flex-1 min-h-0 gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex gap-4 flex-col items-center flex-shrink-0 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl", children: /* @__PURE__ */ e(EP, { steps: b, currentStepId: U?.id || "details", isExecuting: Q }) }),
      /* @__PURE__ */ e("div", { className: "flex-1 flex flex-col min-h-0 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl pb-4", children: /* @__PURE__ */ i("div", { className: "rounded-lg border bg-card text-card-foreground flex flex-col h-full", children: [
        /* @__PURE__ */ e(LP, { stepType: E }),
        /* @__PURE__ */ i("div", { className: "p-3 pt-0 flex-1 flex flex-col min-h-0 gap-3", children: [
          /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col space-y-3 min-h-0", children: [
            E === "details" && /* @__PURE__ */ e(
              zP,
              {
                name: w,
                description: S,
                setName: A,
                setDescription: I
              }
            ),
            (E === "document" || E === "documents") && U?.fieldName && /* @__PURE__ */ e(
              Ei,
              {
                mode: E === "document" ? "single" : "multiple",
                type: "document",
                value: L[U.fieldName] ?? (E === "document" ? null : []),
                onChange: (re) => P(U.fieldName, re)
              },
              U.fieldName
            ),
            (E === "media" || E === "medias") && U?.fieldName && /* @__PURE__ */ e(
              Ei,
              {
                mode: E === "media" ? "single" : "multiple",
                type: "media",
                value: L[U.fieldName] ?? (E === "media" ? null : []),
                onChange: (re) => P(U.fieldName, re)
              },
              U.fieldName
            ),
            (E === "object" || E === "objects") && U?.fieldName && /* @__PURE__ */ e(
              GP,
              {
                mode: E === "object" ? "single" : "multiple",
                value: L[U.fieldName] ?? (E === "object" ? null : []),
                onChange: (re) => P(U.fieldName, re),
                field: U.field
              },
              U.fieldName
            ),
            E === "parameters" && /* @__PURE__ */ e(
              MP,
              {
                fields: x,
                formData: L,
                errors: G,
                onChange: P
              }
            ),
            E === "summary" && /* @__PURE__ */ e(
              OP,
              {
                name: w,
                description: S,
                interactionName: m.name,
                fields: y,
                formData: L,
                onNavigate: le
              }
            ),
            Q && /* @__PURE__ */ e(
              FP,
              {
                isExecuting: Q,
                executionError: te
              }
            )
          ] }),
          E !== "done" && !Q && /* @__PURE__ */ i("div", { className: "flex justify-between flex-shrink-0", children: [
            /* @__PURE__ */ e("div", { children: !Ue && /* @__PURE__ */ i(z, { variant: "outline", onClick: W, children: [
              /* @__PURE__ */ e(Va, {}),
              t("common:actions.back")
            ] }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i(z, { onClick: B, disabled: !H, children: [
              t(E === "summary" ? "common:actions.execute" : "common:actions.continue"),
              /* @__PURE__ */ e(Il, {})
            ] }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function ak() {
  return /* @__PURE__ */ e(lt, { children: /* @__PURE__ */ e(nk, {}) });
}
const ok = [
  {
    path: "/",
    Component: zI
  },
  {
    path: "/advanced-search",
    Component: eP
  },
  {
    path: "/advanced-search/:id",
    Component: FI
  },
  {
    path: "/favorites",
    Component: qI
  },
  {
    path: "/collections",
    Component: fI
  },
  {
    path: "/collections/personal",
    Component: Ni
  },
  {
    path: "/collections/organization",
    Component: Ni
  },
  {
    path: "/collections/:id",
    Component: lI
  },
  {
    path: "/agents",
    Component: DD
  },
  {
    path: "/agents/browse",
    Component: TD
  },
  {
    path: "/agents/executions",
    Component: HI
  },
  {
    path: "/agents/executions/:id",
    Component: OI
  },
  {
    path: "/agents/:id",
    Component: xD
  },
  {
    path: "/agents/:id/create",
    Component: ak
  },
  {
    path: "/settings",
    Component: _P
  },
  {
    path: "*",
    Component: tP
  }
];
function ik() {
  const t = Fe();
  return M(() => {
    console.log(
      "[SETTINGS CHECK] app:",
      t?.manifest?.name,
      "| installation.settings =",
      JSON.stringify(t?.settings, null, 2)
    );
  }, [t]), /* @__PURE__ */ e(ks, { children: /* @__PURE__ */ e(ql, { children: /* @__PURE__ */ e(Jl, { children: /* @__PURE__ */ i(Gl, { children: [
    /* @__PURE__ */ e(_s, { routes: ok }),
    /* @__PURE__ */ e(pc, {}),
    /* @__PURE__ */ e(sc, {})
  ] }) }) }) });
}
function Rk({ slot: t }) {
  return t === "page" ? /* @__PURE__ */ e(Ds, { children: /* @__PURE__ */ e(ik, {}) }) : (console.warn("No component found for slot", t), null);
}
export {
  Rk as default
};
//# sourceMappingURL=plugin.js.map
