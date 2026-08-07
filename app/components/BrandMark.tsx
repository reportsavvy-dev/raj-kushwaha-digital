export function RKDMark({ className = "" }: { className?: string }) {
  return <span className={`brand-line-mark ${className}`.trim()} aria-hidden="true">
    <i className="mark-r-stem"/><i className="mark-r-bowl"/><i className="mark-r-leg"/>
    <i className="mark-k-up"/><i className="mark-k-down"/>
    <i className="mark-d-loop"/><b className="mark-node"/>
  </span>;
}
