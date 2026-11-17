import { useState, type KeyboardEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { SchematicNode } from '../types/portfolio';

interface HeroSchematicProps {
  nodes: SchematicNode[];
}

const NODE_COORDS = [
  { x: 84, y: 78 },
  { x: 260, y: 34 },
  { x: 260, y: 122 },
  { x: 436, y: 78 },
] as const;

export function HeroSchematic({ nodes }: HeroSchematicProps) {
  const [selectedId, setSelectedId] = useState<string>(nodes[0]?.id ?? '');
  const activeIndex = Math.max(
    0,
    nodes.findIndex((node) => node.id === selectedId)
  );
  const activeNode = nodes[activeIndex] ?? nodes[0];

  if (!activeNode) {
    return null;
  }

  const activeCoords = NODE_COORDS[activeIndex] ?? NODE_COORDS[0];
  const activeColor =
    activeNode.accent === 'cobalt'
      ? '#5B73E8'
      : activeNode.accent === 'orange'
        ? '#F25A38'
        : '#F2F0E9';

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (nodes.length === 0) {
      return;
    }

    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % nodes.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + nodes.length) % nodes.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = nodes.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setSelectedId(nodes[nextIndex].id);
      const tablist = event.currentTarget.closest('[role="tablist"]');
      const nextButton = tablist?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex];
      nextButton?.focus();
    }
  };

  return (
    <aside
      className="schematic hero-anim"
      style={{ ['--hero-delay' as string]: '200ms' }}
      aria-label="Interactive TechOps operational blueprint"
    >
      <div className="schematic__bar">
        <span>SYSTEM TOPOLOGY // OPS MATRIX</span>
        <span className="schematic__live">4 ACTIVE SCOPE NODES</span>
      </div>

      {/* Architectural SVG Node Diagram */}
      <div className="schematic__canvas">
        <svg
          viewBox="0 0 520 156"
          role="img"
          aria-label={`Operational topology highlighting ${activeNode.title}`}
          style={{ width: '100%', height: 'auto' }}
        >
          <g stroke="rgba(242,240,233,0.12)" strokeWidth="1">
            <line x1="20" y1="78" x2="500" y2="78" strokeDasharray="4 4" />
            <line x1="260" y1="14" x2="260" y2="142" strokeDasharray="4 4" />
          </g>

          {/* Static structural connection bus */}
          <path
            d="M84 78 H436 M260 34 V122"
            stroke="rgba(242,240,233,0.22)"
            strokeWidth="1.5"
          />

          {/* Central hub junction */}
          <circle cx="260" cy="78" r="4" fill="#171A1F" stroke="rgba(242,240,233,0.45)" strokeWidth="1.5" />

          {/* Animated active signal line from center hub to selected node */}
          <line
            x1="260"
            y1="78"
            x2={activeCoords.x}
            y2={activeCoords.y}
            stroke={activeColor}
            strokeWidth="2"
            strokeDasharray="6 6"
            className="schematic__flow-line"
          />

          {/* Subtle signal pulse marker at midpoint along active path */}
          <circle
            cx={(260 + activeCoords.x) / 2}
            cy={(78 + activeCoords.y) / 2}
            r="3"
            fill={activeColor}
            className="schematic__signal-dot"
          />

          {/* Interactive Topology Nodes */}
          {nodes.map((node, index) => {
            const coords = NODE_COORDS[index] ?? NODE_COORDS[0];
            const isSelected = node.id === activeNode.id;
            const nodeColor =
              node.accent === 'cobalt'
                ? '#5B73E8'
                : node.accent === 'orange'
                  ? '#F25A38'
                  : '#F2F0E9';

            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${node.code}: ${node.title}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(node.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(node.id);
                  }
                }}
                className="schematic__svg-node"
              >
                <rect
                  x={coords.x - 54}
                  y={coords.y - 22}
                  width="108"
                  height="44"
                  fill={isSelected ? '#1E222A' : '#171A1F'}
                  stroke={isSelected ? nodeColor : 'rgba(242,240,233,0.25)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />
                {isSelected && (
                  <circle
                    cx={coords.x - 38}
                    cy={coords.y}
                    r="5"
                    fill="none"
                    stroke={nodeColor}
                    strokeWidth="1.5"
                    className="schematic__pulse-ring"
                  />
                )}
                <circle
                  cx={coords.x - 38}
                  cy={coords.y}
                  r="4"
                  fill={isSelected ? nodeColor : 'rgba(242,240,233,0.35)'}
                />
                <text
                  x={coords.x - 26}
                  y={coords.y + 4}
                  fill="#F2F0E9"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                  fontWeight={isSelected ? '600' : '400'}
                >
                  {node.code}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="schematic__tabs" role="tablist" aria-label="Select operational area">
        {nodes.map((node, index) => {
          const isSelected = node.id === activeNode.id;
          return (
            <button
              key={node.id}
              type="button"
              role="tab"
              id={`schematic-tab-${node.id}`}
              aria-selected={isSelected}
              aria-controls={`schematic-panel-${node.id}`}
              tabIndex={isSelected ? 0 : -1}
              className={`schematic__tab ${
                isSelected ? 'schematic__tab--active' : ''
              } ${node.accent === 'cobalt' ? 'schematic__tab--cobalt' : ''}`}
              onClick={() => setSelectedId(node.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
            >
              <span className="schematic__tab-code">{node.code}</span>
              <span className="schematic__tab-title">{node.title}</span>
            </button>
          );
        })}
      </div>

      <div
        key={activeNode.id}
        id={`schematic-panel-${activeNode.id}`}
        role="tabpanel"
        aria-labelledby={`schematic-tab-${activeNode.id}`}
        className="schematic__detail schematic__detail--animated"
      >
        <span
          className={`schematic__domain ${
            activeNode.accent === 'cobalt' ? 'schematic__domain--cobalt' : ''
          }`}
        >
          {activeNode.domain}
        </span>
        <p className="schematic__summary">{activeNode.summary}</p>
        <ul className="schematic__list">
          {activeNode.deliverables.map((item) => (
            <li key={item} className="schematic__list-item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="schematic__footer">
          <span className="mono-label" style={{ color: 'var(--color-ink-subtle-dark)' }}>
            VERIFIED OPERATIONAL MANDATE
          </span>
          <a href={`#${activeNode.targetSectionId}`} className="schematic__jump">
            <span>Jump to section</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}
