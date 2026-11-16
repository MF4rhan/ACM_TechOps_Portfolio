import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { SchematicNode } from '../types/portfolio';

interface HeroSchematicProps {
  nodes: SchematicNode[];
}

export function HeroSchematic({ nodes }: HeroSchematicProps) {
  const [selectedId, setSelectedId] = useState<string>(nodes[0]?.id ?? '');
  const activeNode = nodes.find((node) => node.id === selectedId) ?? nodes[0];

  if (!activeNode) {
    return null;
  }

  return (
    <aside className="schematic" aria-label="Interactive TechOps operational blueprint">
      <div className="schematic__bar">
        <span>SYSTEM TOPOLOGY // OPS MATRIX</span>
        <span className="schematic__live">4 ACTIVE SCOPE NODES</span>
      </div>

      {/* Architectural SVG Node Diagram */}
      <div
        style={{
          padding: '1.1rem 1.25rem',
          borderBottom: '1px solid var(--border-dark)',
          backgroundColor: 'var(--color-graphite)',
        }}
      >
        <svg
          viewBox="0 0 520 155"
          role="img"
          aria-label={`Operational topology highlighting ${activeNode.title}`}
          style={{ width: '100%', height: 'auto' }}
        >
          <g stroke="rgba(242,240,233,0.12)" strokeWidth="1">
            <line x1="20" y1="78" x2="500" y2="78" strokeDasharray="4 4" />
            <line x1="260" y1="16" x2="260" y2="140" strokeDasharray="4 4" />
          </g>
          {/* Connection Bus */}
          <path
            d="M84 78 H194 M326 78 H436 M260 32 V124"
            stroke="rgba(242,240,233,0.28)"
            strokeWidth="1.5"
          />
          {/* Nodes */}
          {nodes.map((node, index) => {
            const coords = [
              { x: 84, y: 78 },
              { x: 260, y: 34 },
              { x: 260, y: 122 },
              { x: 436, y: 78 },
            ][index] ?? { x: 84, y: 78 };

            const isSelected = node.id === activeNode.id;
            const accentColor =
              node.accent === 'cobalt'
                ? '#5B73E8'
                : node.accent === 'orange'
                  ? '#F25A38'
                  : '#F2F0E9';

            return (
              <g
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={coords.x - 54}
                  y={coords.y - 22}
                  width="108"
                  height="44"
                  fill={isSelected ? '#1E222A' : '#171A1F'}
                  stroke={isSelected ? accentColor : 'rgba(242,240,233,0.25)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />
                <circle
                  cx={coords.x - 38}
                  cy={coords.y}
                  r="4"
                  fill={isSelected ? accentColor : 'rgba(242,240,233,0.35)'}
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
        {nodes.map((node) => {
          const isSelected = node.id === activeNode.id;
          return (
            <button
              key={node.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`schematic__tab ${
                isSelected ? 'schematic__tab--active' : ''
              } ${node.accent === 'cobalt' ? 'schematic__tab--cobalt' : ''}`}
              onClick={() => setSelectedId(node.id)}
            >
              <span className="schematic__tab-code">{node.code}</span>
              <span className="schematic__tab-title">{node.title}</span>
            </button>
          );
        })}
      </div>

      <div className="schematic__detail" role="tabpanel" aria-label={activeNode.title}>
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
