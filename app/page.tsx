import Link from "next/link";

const layers = [
  {
    title: "Workload planner",
    body: "Sketch a multi-agent job: tools, context size, and how often the loop switches memory tiers.",
  },
  {
    title: "Memory graph",
    body: "See hot, warm, and cold context demand as a graph — a planning view, not a live cluster.",
  },
  {
    title: "Cost envelope",
    body: "Estimates are planning aids. Validate them against your cloud bill before you procure.",
  },
];

const memoryTiers = [
  { name: "Hot", detail: "Working set next to the loop", width: "92%", tone: "bg-emerald-400" },
  { name: "Warm", detail: "Shared retrieval between agents", width: "64%", tone: "bg-teal-300" },
  { name: "Cold", detail: "Archived context farther out", width: "38%", tone: "bg-lime-200/80" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            Multi-agent infrastructure planning
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Plan cloud workloads for memory-persistent agent systems.
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            LoopCompute Cloud models cost, orchestration routing, and memory-tier
            demand for multi-agent tool workflows. Use it to decide where a loop
            should run before you buy capacity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/planner"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
            >
              Run workload planner
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-200"
            >
              Memory graph dashboard
            </Link>
          </div>
        </div>
        <aside className="rounded-3xl border border-emerald-400/20 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">
            Labeled planning sketch
          </p>
          <p className="mt-2 text-sm text-slate-400">
            A static memory-tier envelope for a multi-agent loop — not a live cluster or a billed invoice.
          </p>
          <div className="mt-5 space-y-4">
            {memoryTiers.map((tier) => (
              <div key={tier.name}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-white">{tier.name}</span>
                  <span className="text-xs text-slate-500">{tier.detail}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className={`h-full rounded-full ${tier.tone}`} style={{ width: tier.width }} />
                </div>
              </div>
            ))}
          </div>
          <ol className="mt-6 space-y-3 text-sm text-slate-300">
            <li>1. Agents share a working set that does not fit in one context window.</li>
            <li>2. The planner places hot memory near the loop and cold memory farther out.</li>
            <li>3. You get a routing and cost envelope to review — not a billed invoice.</li>
          </ol>
        </aside>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {layers.map((layer) => (
          <article
            key={layer.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5"
          >
            <h2 className="text-sm font-semibold text-white">{layer.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{layer.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-800 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">How to try it</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          Open the planner, describe a loop, and inspect the memory graph. Docs
          and pricing are product notes for evaluation — there are no invented
          utilization or savings percentages on this homepage.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/docs" className="text-sm text-emerald-300">
            Read docs
          </Link>
          <Link href="/pricing" className="text-sm text-slate-300">
            Pricing notes
          </Link>
        </div>
      </section>
    </main>
  );
}
