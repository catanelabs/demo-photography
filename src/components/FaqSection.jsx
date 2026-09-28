import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDownIcon } from './Icons';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Clear Answers</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about booking, team sizes, raw files, and album delivery timelines.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--primary-burgundy)' : '1px solid var(--border-light)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--primary-burgundy)'
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    <ChevronDownIcon size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.5rem 1.75rem',
                      fontSize: '1rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.65',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
